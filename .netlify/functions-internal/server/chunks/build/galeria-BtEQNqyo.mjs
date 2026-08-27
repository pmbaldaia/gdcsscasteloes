import { _ as _sfc_main$1 } from './CmsResourceManager-EG1eDQ21.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as createCrudService, a as createRestRepository } from './rest.repository-Cx9D2HNC.mjs';
import './Icon-DhbMUx6q.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Dydvo-RC.mjs';
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
import './CmsPagination-Bu_Q-dyI.mjs';
import './media.service-gqqdC7_q.mjs';
import './useApi-3EScbZE4.mjs';
import './useToast-BJDEtn_Q.mjs';
import './useConfirm-CFUPPoka.mjs';

const galleryRepository = () => createRestRepository("gallery");
const galleryService = () => createCrudService(galleryRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "galeria",
  __ssrInlineRender: true,
  setup(__props) {
    const baseService = galleryService();
    const timestamp = (row) => {
      const value = (row == null ? void 0 : row.createdAt) || (row == null ? void 0 : row.updatedAt);
      const parsed = value ? new Date(value).getTime() : NaN;
      const fallback = Number(row == null ? void 0 : row.id);
      return Number.isFinite(parsed) ? parsed : Number.isFinite(fallback) ? fallback : 0;
    };
    const sortRows = (rows) => [...rows].sort((a, b) => {
      const orderA = Number(a == null ? void 0 : a.order);
      const orderB = Number(b == null ? void 0 : b.order);
      const hasOrderA = Number.isFinite(orderA) && orderA > 0;
      const hasOrderB = Number.isFinite(orderB) && orderB > 0;
      if (hasOrderA && hasOrderB && orderA !== orderB) return orderA - orderB;
      if (hasOrderA !== hasOrderB) return hasOrderA ? -1 : 1;
      return timestamp(b) - timestamp(a);
    });
    const service = {
      ...baseService,
      async list() {
        return sortRows(await baseService.list());
      }
    };
    const fields = [
      { key: "title", label: "T\xEDtulo" },
      {
        key: "order",
        label: "Ordem",
        type: "number",
        required: false,
        hint: "Opcional. 1 aparece primeiro, 2 em segundo, etc. Se ficar vazio, \xE9 usada a ordem do \xE1lbum mais recente."
      },
      { key: "images", label: "Imagens", type: "image-multi" },
      {
        key: "status",
        label: "Estado",
        type: "select",
        options: [
          { value: "published", label: "Publicado" },
          { value: "draft", label: "Rascunho" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service,
        title: "Galeria",
        description: "Os \xE1lbuns mais recentes aparecem primeiro. Podes definir uma ordem manual quando necess\xE1rio.",
        fields,
        columns: ["title", "order", "images", "status"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/galeria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=galeria-BtEQNqyo.mjs.map
