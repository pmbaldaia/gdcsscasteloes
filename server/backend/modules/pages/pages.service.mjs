import { createCrudService } from '../../core/crud.service.mjs'
import { pagesRepository } from './pages.repository.mjs'
const normalize=p=>({...p,slug:String(p.slug||'').trim().replace(/^\/+|\/+$/g,''),status:p.status||'draft',updatedAt:new Date().toISOString()})
export const pagesService=createCrudService(pagesRepository,{normalize,publicFilter:r=>r.status==='published'})
