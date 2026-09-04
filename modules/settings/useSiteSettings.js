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
  navigation: [
    { title: 'Sobre nós', path: '/sobre/', visible: true }, { title: 'Equipa', path: '/equipa/', visible: true },
    { title: 'Calendário', path: '/calendario/', visible: true }, { title: 'Eventos', path: '/eventos/', visible: true },
    { title: 'Galeria', path: '/galeria/', visible: true }, { title: 'Oportunidades', path: '/oportunidades/', visible: true },
  ],
  socialLinks: [
    { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/gdcscasteloes/', visible: true },
    { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/gdcsscasteloes/', visible: true },
    { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@gdcss.casteloes', visible: true },
  ],
  footerAbout: 'Nós, enquanto equipa, temos a visão de procurar sempre a vitória e sermos os melhores em tudo o que fazemos. Treinamos com dedicação e foco para alcançar o topo e demonstrar a nossa paixão pelo futebol em cada jogo.',
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
