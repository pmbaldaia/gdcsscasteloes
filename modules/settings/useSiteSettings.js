import { createPublicRepository } from '~/modules/core/repository/public.repository'

export async function useSiteSettings() {
  const repo = createPublicRepository('settings')
  const { data } = await useAsyncData('gdcss-public-settings', () => repo.list(), { default: () => [] })
  return { settings: computed(() => data.value?.[0] || null) }
}
