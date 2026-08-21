import { createJsonRepository } from '../../core/json.repository.mjs'
import { galleryResource } from './gallery.model.mjs'
export const galleryRepository = createJsonRepository(galleryResource)
