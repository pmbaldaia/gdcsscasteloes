import { _ as _sfc_main$1 } from './CmsResourceManager-B8z5a_j8.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useResourceService } from './useResourceService-BgiUrOrM.mjs';
import './Icon-jTnUEsFD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-FWaHSLTI.mjs';
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
import './server.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './CmsBadge-0fejhyyb.mjs';
import './CmsPagination-IjAT6u2C.mjs';
import './media.service-gqqdC7_q.mjs';
import './useApi-3EScbZE4.mjs';
import './useToast-BJDEtn_Q.mjs';
import './useConfirm-CFUPPoka.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "menus",
  __ssrInlineRender: true,
  setup(__props) {
    const service = useResourceService("menus");
    const fields = [
      { key: "label", label: "Nome do menu" },
      { key: "url", label: "Destino / endere\xE7o" },
      { key: "location", label: "Onde aparece", type: "select", filterable: true, options: [{ value: "header", label: "Menu principal" }, { value: "footer", label: "Rodap\xE9" }], defaultValue: "header" },
      { key: "order", label: "Posi\xE7\xE3o", type: "number", defaultValue: 1 },
      { key: "target", label: "Abrir em", type: "select", options: [{ value: "_self", label: "Mesma janela" }, { value: "_blank", label: "Nova janela" }], defaultValue: "_self" },
      { key: "status", label: "Estado", type: "select", options: [{ value: "active", label: "Ativo" }, { value: "draft", label: "Oculto" }], defaultValue: "active" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "Menus",
        description: "Controla os links apresentados no menu principal e no rodap\xE9 do site.",
        fields,
        columns: ["label", "url", "location", "order", "status"],
        "show-publish-action": false
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/menus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=menus-CVwQ0I3K.mjs.map
