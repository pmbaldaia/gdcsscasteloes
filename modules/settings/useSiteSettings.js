import { createPublicRepository } from '~/modules/core/repository/public.repository'

const emptySettings = Object.freeze({
  id: '',
  clubName: '',
  contactEmail: '',
  heroDesktopImage: '',
  heroMobileImage: '',
  heroEyebrow: 'G.D.C.S.S. Castelões',
  heroTitle: 'Bem-vindo ao site oficial do G.D.C.S.S. Castelões',
  heroDescription: 'Celebrando com orgulho 41 anos de história, dedicação e conquistas, o G.D.C.S.S. Castelões foi fundado a 11 de abril de 1984, na nossa amada freguesia de Castelões. Venha fazer parte dessa jornada, repleta de momentos inesquecíveis e vitórias que marcaram a nossa comunidade!',
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
