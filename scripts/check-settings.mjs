import { MongoClient } from 'mongodb'
const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'gdcsscasteloes'
if (!uri) throw new Error('MONGODB_URI não está definida.')
const client = new MongoClient(uri)
try {
  await client.connect()
  const settings = await client.db(dbName).collection('settings').find({}).toArray()
  console.log(settings)
} finally { await client.close() }
