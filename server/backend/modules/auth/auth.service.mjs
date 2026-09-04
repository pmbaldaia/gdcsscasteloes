import { usersService } from '../users/users.service.mjs'
import { createToken, verifyPassword } from '../../core/auth.mjs'
export const authService = {
  async login(username,password){
    const user=await usersService.findByUsername(username)
    if(!user || !user.active || !verifyPassword(password,user.passwordHash)){
      const e=new Error('Utilizador ou palavra-passe inválidos');e.statusCode=401;throw e
    }
    if(!['admin','viewer'].includes(user.role)){
      const e=new Error('Este perfil já não tem acesso ao CMS. Contacta um administrador.');e.statusCode=403;throw e
    }
    return {token:createToken(user),user:{id:user.id,name:user.name,username:user.username,email:user.email||'',role:user.role,avatar:user.avatar||''}}
  },
  async me(userId){
    const current=await usersService.findRawById(userId)
    if(!current || !current.active){const e=new Error('Utilizador não encontrado ou inativo');e.statusCode=401;throw e}
    return {id:current.id,name:current.name,username:current.username,email:current.email||'',role:current.role,avatar:current.avatar||''}
  },
  async updateProfile(userId,payload={}){
    const current=await usersService.findRawById(userId)
    if(!current){const e=new Error('Utilizador não encontrado');e.statusCode=404;throw e}
    const wantsPassword=Boolean(payload.password||payload.currentPassword)
    if(wantsPassword){
      if(!payload.currentPassword || !verifyPassword(payload.currentPassword,current.passwordHash)){const e=new Error('A palavra-passe atual não está correta');e.statusCode=400;throw e}
      if(!payload.password || String(payload.password).length<8){const e=new Error('A nova palavra-passe deve ter pelo menos 8 caracteres');e.statusCode=400;throw e}
    }
    await usersService.update(userId,{name:payload.name??current.name,username:current.username,email:current.email,role:current.role,active:current.active,avatar:payload.avatar??current.avatar??'',password:wantsPassword?payload.password:undefined})
    const updated=await usersService.findRawById(userId)
    const user={id:updated.id,name:updated.name,username:updated.username,email:updated.email||'',role:updated.role,avatar:updated.avatar||''}
    return {token:createToken(updated),user}
  },
  async register(payload){ const user=await usersService.create({...payload,role:'viewer'}); const raw=await usersService.findByUsername(user.username); return {token:createToken(raw),user} }
}
