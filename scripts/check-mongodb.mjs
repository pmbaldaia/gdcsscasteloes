import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'gdcsscasteloes'

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

try {
  await client.connect()
  const db = client.db(dbName)
  await db.command({ ping: 1 })
  const collections = await db.listCollections().toArray()
  console.log(`MongoDB OK — ${dbName}`)
  for (const { name } of collections.filter((item) => !item.name.startsWith('system.'))) {
    const count = await db.collection(name).countDocuments()
    console.log(`${name}: ${count}`)
  }
} finally {
  await client.close()
}
