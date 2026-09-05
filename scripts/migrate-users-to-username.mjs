import { MongoClient } from 'mongodb'
import crypto from 'node:crypto'
const uri=process.env.MONGODB_URI
const dbName=process.env.MONGODB_DB||'gdcsscasteloes'
if(!uri) throw new Error('MONGODB_URI não está definido.')
const client=new MongoClient(uri)
const slug=(value='utilizador')=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9._-]+/g,'.').replace(/^\.+|\.+$/g,'').slice(0,28)||'utilizador'
try{
  await client.connect(); const db=client.db(dbName); const users=db.collection('users'); const rows=await users.find({}).toArray(); const used=new Set()
  for(const row of rows){ if(row.username) used.add(String(row.username).toLowerCase()) }
  let changed=0
  const admins=rows.filter(u=>u.role==='admin')
  for(const row of rows){
    const patch={}
    if(!row.username){
      let base=(row.role==='admin' && admins[0]?._id?.equals?.(row._id))?'admin':slug(row.name||row.email?.split('@')[0]||'utilizador')
      let candidate=base, n=2; while(used.has(candidate)){candidate=`${base.slice(0,26)}${n++}`}; used.add(candidate); patch.username=candidate
    }
    if(!row.id) patch.id=crypto.randomUUID()
    if(row.active===undefined) patch.active=true
    if(row.role==='editor') patch.role='viewer'
    if(Object.keys(patch).length){patch.updatedAt=new Date().toISOString();await users.updateOne({_id:row._id},{$set:patch});changed++}
  }
  const index=await users.indexes().then(xs=>xs.find(x=>x.key?.username===1)).catch(()=>null)
  if(!index) await users.createIndex({username:1},{unique:true,sparse:true,name:'username_1'})
  console.log(`MongoDB ligado: ${dbName}`);console.log(`Utilizadores analisados: ${rows.length}`);console.log(`Utilizadores atualizados: ${changed}`);console.log('Login por username preparado. O primeiro administrador utiliza username "admin" quando ainda não tinha username.')
} finally { await client.close() }
