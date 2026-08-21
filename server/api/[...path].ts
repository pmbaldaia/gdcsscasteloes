import { getMongoDb } from '../backend/core/mongo.mjs'
import { gamesService } from '../backend/modules/games/games.service.mjs'
import { teamsService } from '../backend/modules/teams/teams.service.mjs'
import { eventsService } from '../backend/modules/events/events.service.mjs'
import { galleryService } from '../backend/modules/gallery/gallery.service.mjs'
import { membersService } from '../backend/modules/members/members.service.mjs'
import { boardService } from '../backend/modules/board/board.service.mjs'
import { staffService } from '../backend/modules/staff/staff.service.mjs'
import { playersService } from '../backend/modules/players/players.service.mjs'
import { usersService } from '../backend/modules/users/users.service.mjs'
import { authService } from '../backend/modules/auth/auth.service.mjs'
import { mediaService } from '../backend/modules/media/media.service.mjs'
import { messagesService, createPublicMessage } from '../backend/modules/messages/messages.service.mjs'
import { settingsService } from '../backend/modules/settings/settings.service.mjs'
import { sponsorsService } from '../backend/modules/sponsors/sponsors.service.mjs'
import { opportunitiesService } from '../backend/modules/opportunities/opportunities.service.mjs'
import { verifyToken } from '../backend/core/auth.mjs'

const resources:any={games:gamesService,teams:teamsService,events:eventsService,gallery:galleryService,members:membersService,board:boardService,staff:staffService,players:playersService,users:usersService,messages:messagesService,settings:settingsService,sponsors:sponsorsService,opportunities:opportunitiesService}
const publicResources=new Set(['games','teams','events','gallery','board','staff','players','settings','sponsors','opportunities'])
const fail=(statusCode:number,message:string)=>{ throw createError({statusCode,statusMessage:message,message}) }
const currentUser=(event:any)=>{const value=getHeader(event,'authorization')||'';return verifyToken(value.startsWith('Bearer ')?value.slice(7):'')}
const requireAuth=(event:any)=>{const u=currentUser(event);if(!u)fail(401,'Sessão inválida ou expirada');return u}
const requireWrite=(u:any)=>{if(!['admin','editor'].includes(u.role))fail(403,'Sem permissão para alterar conteúdos')}
const validate=(r:string,p:any)=>{if(r==='games'&&(!String(p.season||'').trim()||!String(p.jornada||'').trim()||!p.date||!Array.isArray(p.teams)||p.teams.filter(Boolean).length!==2))fail(400,'Época, jornada, data e duas equipas são obrigatórias');if(r==='teams'&&!p.name?.trim())fail(400,'O nome da equipa é obrigatório');if(r==='events'&&(!p.nome?.trim()||!p.slug?.trim()||!p.data?.trim()))fail(400,'Nome, slug e data do evento são obrigatórios');if(r==='gallery'&&(!p.title?.trim()||!Array.isArray(p.images)))fail(400,'Título e lista de imagens são obrigatórios');if(r==='members'&&!p.nome?.trim())fail(400,'O nome do sócio é obrigatório');if(r==='board'&&(!p.nome?.trim()||!p.funcao?.trim()))fail(400,'Nome e função são obrigatórios');if(['players','staff'].includes(r)&&!p.img?.trim())fail(400,'A imagem é obrigatória');if(r==='sponsors'&&(!p.src?.trim()||!p.alt?.trim()))fail(400,'Imagem e nome do patrocinador são obrigatórios');if(r==='opportunities'&&(!p.title?.trim()||!p.price?.trim()))fail(400,'Título e preço são obrigatórios')}
export default defineEventHandler(async(event)=>{
 const path=(getRouterParam(event,'path')||'').split('/').filter(Boolean); const method=event.method;
 if(path[0]==='health'&&method==='GET'){
   const db=await getMongoDb()
   await db.command({ping:1})
   const [settingsCount, usersCount, gamesCount] = await Promise.all([
     db.collection('settings').countDocuments(),
     db.collection('users').countDocuments(),
     db.collection('games').countDocuments(),
   ])
   return {ok:true,database:'mongodb',collections:{settings:settingsCount,users:usersCount,games:gamesCount}}
 }
 if(path[0]==='auth'&&path[1]==='login'&&method==='POST'){const p=await readBody(event);return authService.login(p.email,p.password)}
 if(path[0]==='auth'&&path[1]==='register')fail(403,'O registo público está desativado. Contacta um administrador.')
 if(path[0]==='auth'&&path[1]==='me'&&method==='GET')return {user:requireAuth(event)}
 if(path[0]==='auth'&&path[1]==='logout'&&method==='POST'){requireAuth(event);return {ok:true}}
 if(path[0]==='public'&&path[1]==='contact'&&method==='POST'){setResponseStatus(event,201);return createPublicMessage(await readBody(event))}
 if(path[0]==='media'){const user=requireAuth(event);if(method==='GET'&&!path[1])return mediaService.list('');requireWrite(user);if(method==='POST'&&!path[1]){setResponseStatus(event,201);return mediaService.upload(await readBody(event),'')}if(method==='DELETE'&&path[1]){if(await mediaService.remove(decodeURIComponent(path[1]))){setResponseStatus(event,204);return null}fail(404,'Ficheiro não encontrado')}}
 const isPublic=path[0]==='public'; const resource=isPublic?path[1]:path[0]; const id=isPublic?path[2]:path[1]; const service=resources[resource];
 if(!service||(isPublic&&!publicResources.has(resource)))fail(404,'Recurso não encontrado')
 if(isPublic){if(method!=='GET'||id)fail(405,'Método não permitido');return service.listPublic()}
 const user=requireAuth(event);if(resource==='users'&&user.role!=='admin')fail(403,'Apenas administradores podem gerir utilizadores')
 if(method==='GET'&&!id)return service.list();if(method==='GET'&&id){const row=await service.get(id);if(!row)fail(404,'Registo não encontrado');return row}
 requireWrite(user);if(resource==='users'&&user.role!=='admin')fail(403,'Apenas administradores podem gerir utilizadores')
 const payload=method==='DELETE'?null:await readBody(event);if(payload)validate(resource,payload)
 if(method==='POST'&&!id){setResponseStatus(event,201);return service.create(payload)}
 if(['PUT','PATCH'].includes(method)&&id){const row=await service.update(id,payload);if(!row)fail(404,'Registo não encontrado');return row}
 if(method==='DELETE'&&id){if(await service.remove(id)){setResponseStatus(event,204);return null}fail(404,'Registo não encontrado')}
 fail(405,'Método não permitido')
})
