import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { computed } from 'vue';

const emptySettings = Object.freeze({
  id: "",
  clubName: "",
  contactEmail: "",
  heroDesktopImage: "",
  heroMobileImage: "",
  heroEyebrow: "G.D.C.S.S. Castel\xF5es",
  heroTitle: "Bem-vindo ao site oficial do G.D.C.S.S. Castel\xF5es",
  heroDescription: "Celebrando com orgulho 41 anos de hist\xF3ria, dedica\xE7\xE3o e conquistas, o G.D.C.S.S. Castel\xF5es foi fundado a 11 de abril de 1984, na nossa amada freguesia de Castel\xF5es. Venha fazer parte dessa jornada, repleta de momentos inesquec\xEDveis e vit\xF3rias que marcaram a nossa comunidade!",
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
//# sourceMappingURL=useSiteSettings-CNvi8uhM.mjs.map
