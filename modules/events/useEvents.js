import { createPublicRepository } from '~/modules/core/repository/public.repository'

export async function useEvents() {
  const repository = createPublicRepository('events')
  const { data: eventos } = await useAsyncData('gdcss-public-events', async () => {
    const items = await repository.list()
    const parseDate = (value = '') => {
      const [day, month, year] = String(value).split('/').map(Number)
      return new Date(year || 0, (month || 1) - 1, day || 1).getTime()
    }
    return [...items].sort((a, b) => parseDate(b.data) - parseDate(a.data))
  }, { default: () => [] })
  return { eventos }
}
