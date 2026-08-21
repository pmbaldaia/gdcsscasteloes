import { createPublicRepository } from '~/modules/core/repository/public.repository'

export async function useEvents() {
  const repository = createPublicRepository('events')
  const { data: eventos } = await useAsyncData('gdcss-public-events', () => repository.list(), { default: () => [] })
  return { eventos }
}
