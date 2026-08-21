import { eventos as fallbackEvents } from '~/data/eventos'
import { createPublicRepository } from '~/modules/core/repository/public.repository'
export async function useEvents() {
  const repository = createPublicRepository('events', fallbackEvents)
  const { data: eventos } = await useAsyncData('gdcss-public-events', () => repository.list(), { default: () => fallbackEvents })
  return { eventos }
}
