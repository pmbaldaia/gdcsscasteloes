import { _ as _sfc_main$1 } from './CmsResourceManager-B8z5a_j8.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as createCrudService, a as createRestRepository } from './rest.repository-Cx9D2HNC.mjs';
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

const staffRepository = () => createRestRepository("staff");
const staffService = () => createCrudService(staffRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "equipa-tecnica",
  __ssrInlineRender: true,
  setup(__props) {
    const service = staffService();
    const fields = [{ key: "name", label: "Nome", placeholder: "Nome do elemento da equipa t\xE9cnica" }, { key: "img", label: "Imagem", type: "image" }, { key: "order", label: "Ordem", type: "number" }, { key: "status", label: "Estado", type: "select", options: [{ value: "published", label: "Publicado" }, { value: "draft", label: "Rascunho" }] }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "Equipa t\xE9cnica",
        description: "Gere o nome, imagem e estado dos elementos da equipa t\xE9cnica apresentados no site.",
        fields,
        columns: ["id", "name", "img", "status"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/equipa-tecnica.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=equipa-tecnica-Odj7CbE_.mjs.map
