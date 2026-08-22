import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { computed } from 'vue';

const emptySettings = Object.freeze({
  id: "",
  clubName: "",
  contactEmail: "",
  heroDesktopImage: "",
  heroMobileImage: "",
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
//# sourceMappingURL=useSiteSettings-Dkw2OmCn.mjs.map
