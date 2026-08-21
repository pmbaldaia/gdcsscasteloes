import { createCrudService } from '~/modules/core/repository/crud.service'
import { galleryRepository } from '../repository/gallery.repository'
export const galleryService = () => createCrudService(galleryRepository())
