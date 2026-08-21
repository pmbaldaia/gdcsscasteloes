import { categories as fallbackGallery } from '~/data/galeria'
import { createPublicRepository } from '~/modules/core/repository/public.repository'
export async function useGallery() {
  const repository = createPublicRepository('gallery', fallbackGallery)
  const { data: categories } = await useAsyncData('gdcss-public-gallery', () => repository.list(), { default: () => fallbackGallery })
  return { categories }
}
