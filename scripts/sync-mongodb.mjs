import { createHash } from 'node:crypto'
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI
const sourceDbName = process.env.MONGODB_SOURCE_DB || process.env.MONGODB_DB || 'gdcsscasteloes_test'
const targetDbName = process.env.MONGODB_TARGET_DB || 'gdcsscasteloes'

if (!uri) throw new Error('MONGODB_URI não está definida.')
if (sourceDbName === targetDbName) {
  throw new Error(`A base de dados de origem e destino são iguais (${sourceDbName}). Define MONGODB_SOURCE_DB e MONGODB_TARGET_DB com nomes diferentes.`)
}

const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
})

function stableValue(value) {
  if (value instanceof Date) return value.toISOString()
  if (Buffer.isBuffer(value)) return value.toString('base64')
  if (Array.isArray(value)) return value.map(stableValue)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, stableValue(v)]))
  }
  return value
}

function hashDocument(document) {
  return createHash('sha256').update(JSON.stringify(stableValue(document))).digest('hex')
}

function sameIndexKeys(a = {}, b = {}) {
  const aa = Object.entries(a)
  const bb = Object.entries(b)
  return aa.length === bb.length && aa.every(([k, v], i) => bb[i]?.[0] === k && bb[i]?.[1] === v)
}

async function ensureSourceIndexOnTarget(targetCollection, sourceIndex) {
  if (sourceIndex.name === '_id_') return
  const targetIndexes = await targetCollection.indexes().catch(() => [])
  if (targetIndexes.some(index => sameIndexKeys(index.key, sourceIndex.key))) return

  const { key, name, v, ns, background, ...options } = sourceIndex
  try {
    await targetCollection.createIndex(key, { ...options, name })
  } catch (error) {
    if (error?.code === 85 || error?.code === 86) {
      console.warn(`  Aviso: índice ${name} já existe com outra configuração; mantido o índice do destino.`)
      return
    }
    throw error
  }
}

async function copyCollection(sourceDb, targetDb, name) {
  const source = sourceDb.collection(name)
  const target = targetDb.collection(name)
  const cursor = source.find({})
  let created = 0
  let updated = 0

  for await (const row of cursor) {
    const exists = await target.findOne({ _id: row._id }, { projection: { _id: 1 } })
    await target.replaceOne({ _id: row._id }, row, { upsert: true })
    if (exists) updated++
    else created++
  }

  const indexes = await source.indexes().catch(() => [])
  for (const index of indexes) await ensureSourceIndexOnTarget(target, index)

  return { name, sourceCount: created + updated, created, updated }
}

async function validateCollection(sourceDb, targetDb, name) {
  const source = sourceDb.collection(name)
  const target = targetDb.collection(name)
  const failures = []
  let checked = 0

  for await (const sourceRow of source.find({})) {
    checked++
    const targetRow = await target.findOne({ _id: sourceRow._id })
    if (!targetRow) {
      failures.push({ id: String(sourceRow._id), reason: 'não encontrado' })
      continue
    }
    if (hashDocument(sourceRow) !== hashDocument(targetRow)) {
      failures.push({ id: String(sourceRow._id), reason: 'conteúdo diferente' })
    }
  }

  return { name, checked, failures }
}

try {
  await client.connect()
  const sourceDb = client.db(sourceDbName)
  const targetDb = client.db(targetDbName)
  await sourceDb.command({ ping: 1 })
  await targetDb.command({ ping: 1 })

  const collections = (await sourceDb.listCollections({}, { nameOnly: true }).toArray())
    .map(({ name }) => name)
    .filter(name => !name.startsWith('system.'))

  if (!collections.length) throw new Error(`A base de dados ${sourceDbName} não contém collections para migrar.`)

  console.log('MongoDB ligado')
  console.log(`Base de dados de origem: ${sourceDbName}`)
  console.log(`Base de dados de destino: ${targetDbName}`)
  console.log('Estrutura: cópia 1:1 das collections (sem collection agregadora)\n')

  const results = []
  for (const name of collections) {
    const result = await copyCollection(sourceDb, targetDb, name)
    results.push(result)
    console.log(`${name}: ${result.updated} atualizados / ${result.created} criados`)
  }

  console.log('\nA validar documentos migrados...')
  const validationFailures = []
  let totalChecked = 0
  for (const { name } of results) {
    const validation = await validateCollection(sourceDb, targetDb, name)
    totalChecked += validation.checked
    if (validation.failures.length) validationFailures.push(validation)
    else console.log(`${name}: ${validation.checked}/${validation.checked} confirmados`)
  }

  if (validationFailures.length) {
    for (const item of validationFailures) {
      console.error(`${item.name}: ${item.failures.length} falhas`)
      for (const failure of item.failures.slice(0, 10)) console.error(`  - ${failure.id}: ${failure.reason}`)
    }
    throw new Error('A validação detetou diferenças entre a base de origem e a base de destino.')
  }

  const targetCollections = new Set((await targetDb.listCollections({}, { nameOnly: true }).toArray()).map(({ name }) => name))
  const missingCollections = collections.filter(name => !targetCollections.has(name))
  if (missingCollections.length) throw new Error(`Collections em falta no destino: ${missingCollections.join(', ')}`)

  console.log('\nResumo')
  console.log(`Collections migradas: ${results.length}`)
  console.log(`Documentos validados: ${totalChecked}`)
  console.log(`Origem preservada: ${sourceDbName}`)
  console.log(`Destino pronto: ${targetDbName}`)
  console.log('\nMigração concluída com sucesso. A base de origem não foi apagada nem alterada.')
  console.log(`Agora configura MONGODB_DB=${targetDbName} na aplicação.`)
} catch (error) {
  console.error('Falha na sincronização do MongoDB:', error)
  process.exitCode = 1
} finally {
  await client.close()
}
