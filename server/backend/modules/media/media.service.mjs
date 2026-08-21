import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
const uploads=path.resolve(process.cwd(),'storage/uploads')
const allowed=new Set(['image/jpeg','image/png','image/webp','image/gif','image/svg+xml','application/pdf'])
const safe=(name='file')=>name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9._-]+/g,'-').replace(/-+/g,'-')
export const mediaService={
 async list(baseUrl=''){ await fs.mkdir(uploads,{recursive:true}); const names=await fs.readdir(uploads); const rows=[]; for(const name of names){const s=await fs.stat(path.join(uploads,name)); if(s.isFile()) rows.push({id:name,name,url:`${baseUrl}/uploads/${encodeURIComponent(name)}`,size:s.size,updatedAt:s.mtime.toISOString()})} return rows.sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)) },
 async upload(payload,baseUrl=''){ if(!allowed.has(payload.mime)){const e=new Error('Tipo de ficheiro não permitido');e.statusCode=400;throw e} const data=String(payload.data||'').replace(/^data:[^;]+;base64,/,''); const buffer=Buffer.from(data,'base64'); if(!buffer.length||buffer.length>8*1024*1024){const e=new Error('Ficheiro inválido ou superior a 8 MB');e.statusCode=400;throw e} await fs.mkdir(uploads,{recursive:true}); const name=`${Date.now()}-${crypto.randomBytes(4).toString('hex')}-${safe(payload.filename)}`; await fs.writeFile(path.join(uploads,name),buffer); return {id:name,name,url:`${baseUrl}/uploads/${encodeURIComponent(name)}`,size:buffer.length,mime:payload.mime} },
 async remove(name){ const target=path.join(uploads,path.basename(name)); try{await fs.unlink(target);return true}catch{return false} },
 filePath(name){return path.join(uploads,path.basename(name))}
}
