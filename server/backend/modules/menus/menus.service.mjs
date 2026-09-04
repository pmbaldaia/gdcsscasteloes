import { createCrudService } from '../../core/crud.service.mjs'
import { menusRepository } from './menus.repository.mjs'
const normalize=p=>({...p,label:String(p.label||'').trim(),url:String(p.url||'').trim(),location:p.location||'header',order:Number(p.order||1),status:p.status||'active',target:p.target||'_self',updatedAt:new Date().toISOString()})
export const menusService=createCrudService(menusRepository,{normalize,publicFilter:r=>r.status==='active'})
