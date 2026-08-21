import { settingsRepository } from './settings.repository.mjs'
export const settingsService={
 list:()=>settingsRepository.readAll(), listPublic:async()=> (await settingsRepository.readAll()).filter(x=>x.public!==false),
 get:(id)=>settingsRepository.findById(id), create:(p)=>settingsRepository.create({...p,updatedAt:new Date().toISOString()}), update:(id,p)=>settingsRepository.update(id,{...p,updatedAt:new Date().toISOString()}), remove:(id)=>settingsRepository.remove(id)
}
