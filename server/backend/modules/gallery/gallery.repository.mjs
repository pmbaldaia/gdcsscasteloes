import { createMongoRepository } from '../../core/mongo.repository.mjs'
import { galleryResource } from './gallery.model.mjs'
export const galleryRepository = createMongoRepository(galleryResource)
