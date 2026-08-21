import { createCrudService } from '../../core/crud.service.mjs'
import { galleryRepository } from './gallery.repository.mjs'
export const galleryService = createCrudService(galleryRepository, { normalize: (p) => ({ title:p.title??'', images:Array.isArray(p.images)?p.images:[], status:p.status??'published' }) })
