import { createPublicRepository } from '~/modules/core/repository/public.repository'

export async function useGallery() {
  const repository = createPublicRepository('gallery')
  const { data: categories } = await useAsyncData('gdcss-public-gallery', () => repository.list(), { default: () => [] })
  return { categories }
}
