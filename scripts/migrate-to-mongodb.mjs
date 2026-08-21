import { MongoClient, ServerApiVersion } from 'mongodb'
import { seedData } from '../server/backend/core/seed-data.mjs'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'gdcsscasteloes_test'

if (!uri) {
  console.error('MONGODB_URI não está definida.')
  process.exit(1)
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const resources = Object.keys(seedData)

try {
  await client.connect()
  const db = client.db(dbName)
  await db.command({ ping: 1 })
  console.log(`Ligação MongoDB OK — base: ${dbName}`)

  for (const resource of resources) {
    const collection = db.collection(resource)
    const rows = Array.isArray(seedData[resource]) ? seedData[resource] : []

    await collection.deleteMany({})
    if (rows.length) {
      await collection.insertMany(rows.map(({ _id, ...row }) => row), { ordered: true })
    }

    await collection.createIndex({ id: 1 }, { unique: true, sparse: true })
    if (resource === 'users') {
      await collection.createIndex({ email: 1 }, { unique: true, sparse: true })
    }

    console.log(`${resource}: ${rows.length} registos migrados`)
  }

  console.log('Migração concluída com sucesso.')
} catch (error) {
  console.error('Falha na migração:', error)
  process.exitCode = 1
} finally {
  await client.close()
}
