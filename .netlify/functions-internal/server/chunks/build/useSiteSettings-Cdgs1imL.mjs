import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { computed } from 'vue';

const emptySettings = Object.freeze({
  id: "",
  clubName: "",
  contactEmail: "",
  socialLinks: [
    { platform: "facebook", label: "Facebook", url: "https://www.facebook.com/gdcscasteloes/", visible: true },
    { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/gdcsscasteloes/", visible: true },
    { platform: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@gdcss.casteloes", visible: true }
  ],
  footerAboutTitle: "Sobre",
  footerLinksTitle: "Links \xDAteis",
  footerSocialTitle: "Redes Sociais",
  footerContactTitle: "Contacto",
  footerAbout: "N\xF3s, enquanto equipa, temos a vis\xE3o de procurar sempre a vit\xF3ria e sermos os melhores em tudo o que fazemos. Treinamos com dedica\xE7\xE3o e foco para alcan\xE7ar o topo e demonstrar a nossa paix\xE3o pelo futebol em cada jogo.",
  public: true
});
async function useSiteSettings() {
  const repo = createPublicRepository("settings");
  const { data, pending, error, refresh } = await useAsyncData(
    "gdcss-public-settings",
    () => repo.list(),
    { default: () => [] }
  );
  const settings = computed(() => {
    var _a, _b;
    return (_b = (_a = data.value) == null ? void 0 : _a[0]) != null ? _b : emptySettings;
  });
  return { settings, pending, error, refresh };
}

export { useSiteSettings as u };
//# sourceMappingURL=useSiteSettings-Cdgs1imL.mjs.map
