import { createCrudService } from '../../core/crud.service.mjs'
import { playersRepository } from './players.repository.mjs'

const baseService = createCrudService(playersRepository, {
  normalize: (p) => ({
    name: p.name ?? '',
    img: p.img ?? '',
    status: p.status ?? 'published',
    publishedAt: p.publishedAt || null,
    order: Number(p.order ?? p.id ?? 0)
  }),
  publicFilter: (row) => row.status !== 'draft' && (!row.publishedAt || new Date(row.publishedAt).getTime() <= Date.now())
})

const byOrder = (rows) => [...rows].sort((a,b) => Number(a.order ?? a.id ?? 0) - Number(b.order ?? b.id ?? 0))

export const playersService = {
  ...baseService,
  async list(){ return byOrder(await baseService.list()) },
  async listPublic(){ return byOrder(await baseService.listPublic()) }
}
