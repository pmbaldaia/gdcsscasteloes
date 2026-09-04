import { createPublicRepository } from '~/modules/core/repository/public.repository'

const emptySettings = Object.freeze({
  id: '',
  clubName: '',
  contactEmail: '',
  socialLinks: [
    { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/gdcscasteloes/', visible: true },
    { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/gdcsscasteloes/', visible: true },
    { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@gdcss.casteloes', visible: true },
  ],
  footerAboutTitle: 'Sobre',
  footerLinksTitle: 'Links Úteis',
  footerSocialTitle: 'Redes Sociais',
  footerContactTitle: 'Contacto',
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
