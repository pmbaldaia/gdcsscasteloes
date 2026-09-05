import { _ as _sfc_main$1 } from './CmsPolicyPage-CMY3g9VN.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './Container-BfHLpACB.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './CmsManagedPageHeader-cB3vskBP.mjs';
import './Sectionhead-DAjZ4P2v.mjs';
import './public.repository-zOMnXrxb.mjs';
import './server.mjs';
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
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './asyncData-D54zHTjC.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "servico",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsPolicyPage = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsPolicyPage, mergeProps({
        "page-slug": "politicas/servico",
        "fallback-title": "Termos de Servi\xE7o",
        "fallback-description": "Os Termos de Servi\xE7o estabelecem as condi\xE7\xF5es para o uso do site do G.D.C.S.S. Castel\xF5es. Ao aceder ou utilizar o nosso site, voc\xEA concorda em cumprir os termos e condi\xE7\xF5es descritos abaixo."
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/politicas/servico.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=servico-BKSVaDrL.mjs.map
