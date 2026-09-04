import { MongoClient } from 'mongodb'

const uri=process.env.MONGODB_URI
const dbName=process.env.MONGODB_DB||'gdcsscasteloes'
if(!uri) throw new Error('MONGODB_URI não está definida.')

const client=new MongoClient(uri)
await client.connect()

try{
  const collection=client.db(dbName).collection('gallery')
  const rows=await collection.find({}).toArray()
  let updated=0

  for(const row of rows){
    if(row.createdAt) continue
    const id=Number(row.id)
    const base=Number.isFinite(id) ? id : 0
    const createdAt=new Date(Date.UTC(2020,0,1)+base*1000).toISOString()
    await collection.updateOne({_id:row._id},{$set:{createdAt}})
    updated++
  }

  console.log(`Galeria: ${updated} registos antigos receberam createdAt.`)
}finally{
  await client.close()
}
