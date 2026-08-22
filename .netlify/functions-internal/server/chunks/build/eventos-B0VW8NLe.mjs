import { _ as _sfc_main$1 } from './CmsResourceManager-CLzgdbWZ.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as createCrudService, a as createRestRepository } from './rest.repository-Cx9D2HNC.mjs';
import './Icon-DZ18AjZn.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-8LJFqMRS.mjs';
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
import './CmsPagination-DCA2StsF.mjs';
import './media.service-gqqdC7_q.mjs';
import './useApi-3EScbZE4.mjs';
import './useToast-BJDEtn_Q.mjs';
import './useConfirm-CFUPPoka.mjs';

const eventsRepository = () => createRestRepository("events");
const eventsService = () => createCrudService(eventsRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "eventos",
  __ssrInlineRender: true,
  setup(__props) {
    const service = eventsService();
    const fields = [{ key: "nome", label: "Nome" }, { key: "slug", label: "Slug" }, { key: "data", label: "Data" }, { key: "hora", label: "Hora" }, { key: "local", label: "Local" }, { key: "imagem", label: "Imagem", type: "image" }, { key: "descricao", label: "Descri\xE7\xE3o", type: "textarea" }, { key: "detalhes", label: "Detalhes", type: "textarea" }, { key: "status", label: "Estado", type: "select", options: [{ value: "published", label: "Publicado" }, { value: "draft", label: "Rascunho" }] }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "Eventos",
        description: "Eventos p\xFAblicos com os mesmos campos utilizados no site.",
        fields,
        columns: ["nome", "imagem", "data", "local", "status"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/eventos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=eventos-B0VW8NLe.mjs.map
