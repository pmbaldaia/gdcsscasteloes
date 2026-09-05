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
  __name: "paginas",
  __ssrInlineRender: true,
  setup(__props) {
    const service = useResourceService("pages");
    const fields = [
      { key: "title", label: "T\xEDtulo" },
      { key: "slug", label: "Endere\xE7o da p\xE1gina", hint: "Ex.: historia-do-clube. N\xE3o uses espa\xE7os." },
      { key: "status", label: "Estado", type: "select", filterable: true, options: [{ value: "draft", label: "Rascunho" }, { value: "published", label: "Publicado" }, { value: "archived", label: "Arquivado" }], defaultValue: "draft" },
      { key: "seoTitle", label: "T\xEDtulo SEO", required: false },
      { key: "metaDescription", label: "Descri\xE7\xE3o SEO", type: "textarea", required: false },
      { key: "socialImage", label: "Imagem para partilha", type: "image", required: false },
      { key: "canonical", label: "Endere\xE7o can\xF3nico", required: false },
      { key: "indexable", label: "Indexa\xE7\xE3o", type: "select", options: [{ value: true, label: "Permitir indexa\xE7\xE3o" }, { value: false, label: "N\xE3o permitir indexa\xE7\xE3o" }], defaultValue: true }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "P\xE1ginas",
        description: "Gere p\xE1ginas din\xE2micas, publica\xE7\xE3o e informa\xE7\xE3o para motores de pesquisa.",
        fields,
        columns: ["title", "slug", "status"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/paginas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=paginas-Bq8EXNnD.mjs.map
