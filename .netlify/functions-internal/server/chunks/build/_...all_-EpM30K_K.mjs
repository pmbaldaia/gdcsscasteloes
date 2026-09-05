import { _ as _sfc_main$1 } from './CmsPublicPageRenderer-CK4ac4qp.mjs';
import { defineComponent, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import './Container-BfHLpACB.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-CVE1ktMt.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'fast-xml-parser';
import 'node:url';
import 'ipx';
import './Icon-jTnUEsFD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-FWaHSLTI.mjs';
import './Sectionhead-DAjZ4P2v.mjs';
import './SiteImage-DbM39HNq.mjs';
import './NuxtImg-D4mLRaeW.mjs';
import './imageFallback-CODQxCbd.mjs';
import './useGames-ClDAqFc-.mjs';
import './public.repository-zOMnXrxb.mjs';
import './asyncData-D54zHTjC.mjs';
import 'perfect-debounce';
import './useGallery-BePHli7p.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = computed(() => Array.isArray(route.params.all) ? route.params.all.join("/") : String(route.params.all || ""));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsPublicPageRenderer = _sfc_main$1;
      if (unref(slug)) {
        _push(ssrRenderComponent(_component_CmsPublicPageRenderer, mergeProps({ "page-slug": unref(slug) }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...all_-EpM30K_K.mjs.map
