import { createPublicRepository } from '~/modules/core/repository/public.repository'

export async function useOpportunities() {
  const repo = createPublicRepository('opportunities')
  const { data } = await useAsyncData('gdcss-public-opportunities', () => repo.list(), { default: () => [] })
  return { opportunities: computed(() => [...(data.value || [])].sort((a, b) => (a.order || 0) - (b.order || 0))) }
}
