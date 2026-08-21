import { createCrudService } from '../../core/crud.service.mjs'
import { galleryRepository } from './gallery.repository.mjs'

const normalizeOrder = (value) => {
  if (value === '' || value === null || value === undefined) return null
  const number = Number(value)
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : null
}

export const galleryService = createCrudService(galleryRepository, {
  normalize: (payload) => ({
    title: payload.title ?? '',
    images: Array.isArray(payload.images) ? payload.images : [],
    order: normalizeOrder(payload.order),
    status: payload.status ?? 'published',
  }),
})
