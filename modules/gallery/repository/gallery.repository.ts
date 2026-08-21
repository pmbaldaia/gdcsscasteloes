import { createRestRepository } from '~/modules/core/repository/rest.repository'
import type { GalleryAlbum } from '../model/gallery.model'
export const galleryRepository = () => createRestRepository<GalleryAlbum>('gallery')
