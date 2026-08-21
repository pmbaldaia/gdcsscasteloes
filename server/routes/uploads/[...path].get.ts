import fs from 'node:fs'
import path from 'node:path'
export default defineEventHandler((event)=>{const name=path.basename(decodeURIComponent(getRouterParam(event,'path')||''));const file=path.resolve(process.cwd(),'storage/uploads',name);if(!fs.existsSync(file))throw createError({statusCode:404,statusMessage:'Ficheiro não encontrado'});return sendStream(event,fs.createReadStream(file))})
