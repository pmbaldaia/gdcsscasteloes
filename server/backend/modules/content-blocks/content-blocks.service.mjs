import { createCrudService } from '../../core/crud.service.mjs'
import { contentBlocksRepository } from './content-blocks.repository.mjs'
const normalize=p=>({...p,pageSlug:String(p.pageSlug||'').trim().replace(/^\/+|\/+$/g,''),order:Number(p.order||1),status:p.status||'published',updatedAt:new Date().toISOString()})
export const contentBlocksService=createCrudService(contentBlocksRepository,{normalize,publicFilter:r=>r.status==='published'})
