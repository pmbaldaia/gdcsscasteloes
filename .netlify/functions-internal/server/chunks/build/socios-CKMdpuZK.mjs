import { _ as _sfc_main$1 } from './CmsResourceManager-EG1eDQ21.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
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

const membersRepository = () => createRestRepository("members");
const membersService = () => createCrudService(membersRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "socios",
  __ssrInlineRender: true,
  setup(__props) {
    const service = membersService();
    const fields = [{ key: "nome", label: "Nome" }, { key: "email", label: "Email" }, { key: "telefone", label: "Telefone" }, { key: "dataAssociacao", label: "Data de associa\xE7\xE3o", type: "date" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "S\xF3cios",
        description: "Gest\xE3o interna de s\xF3cios; estes dados n\xE3o s\xE3o expostos na API p\xFAblica.",
        fields,
        columns: ["nome", "email", "telefone", "dataAssociacao"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/socios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=socios-CKMdpuZK.mjs.map
