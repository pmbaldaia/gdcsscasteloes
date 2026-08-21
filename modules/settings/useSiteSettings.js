import { createPublicRepository } from '~/modules/core/repository/public.repository'

const emptySettings = Object.freeze({
  id: '',
  clubName: '',
  contactEmail: '',
  public: true,
})

export async function useSiteSettings() {
  const repo = createPublicRepository('settings')
  const { data, pending, error, refresh } = await useAsyncData(
    'gdcss-public-settings',
    () => repo.list(),
    { default: () => [] },
  )

  const settings = computed(() => data.value?.[0] ?? emptySettings)

  return { settings, pending, error, refresh }
}
