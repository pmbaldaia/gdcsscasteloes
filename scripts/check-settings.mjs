import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

if (!uri) throw new Error('MONGODB_URI não está definida.')
if (!dbName) throw new Error('MONGODB_DB não está definida.')

const client = new MongoClient(uri)
try {
  await client.connect()
  const db = client.db(dbName)
  const settings = await db.collection('settings').find({}).toArray()
  console.log(`Base: ${dbName}`)
  console.log(`Settings: ${settings.length} registo(s)`)
  for (const row of settings) {
    const { _id, ...safe } = row
    console.log(safe)
  }
} finally {
  await client.close()
}
