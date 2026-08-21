import { createCrudService } from '../../core/crud.service.mjs'
import { staffRepository } from './staff.repository.mjs'

const baseService = createCrudService(staffRepository, {
  normalize: (p) => ({
    name: p.name ?? '',
    img: p.img ?? '',
    status: p.status ?? 'published',
    order: Number(p.order ?? p.id ?? 0)
  })
})

const byOrder = (rows) => [...rows].sort((a,b) => Number(a.order ?? a.id ?? 0) - Number(b.order ?? b.id ?? 0))

export const staffService = {
  ...baseService,
  async list(){ return byOrder(await baseService.list()) },
  async listPublic(){ return byOrder(await baseService.listPublic()) }
}
