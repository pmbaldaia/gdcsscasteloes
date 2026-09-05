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

const usersRepository = () => createRestRepository("users");
const usersService = () => createCrudService(usersRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utilizadores",
  __ssrInlineRender: true,
  setup(__props) {
    const service = usersService();
    const fields = [
      { key: "name", label: "Nome" },
      { key: "username", label: "Nome de utilizador", placeholder: "Ex.: admin" },
      { key: "email", label: "Email", type: "email", required: false },
      { key: "password", label: "Palavra-passe", type: "password", required: false, placeholder: "M\xEDnimo 8 caracteres; vazio mant\xE9m atual" },
      { key: "role", label: "Tipo de acesso", type: "select", options: [{ value: "admin", label: "Administrador" }, { value: "viewer", label: "Consulta e edi\xE7\xE3o" }] },
      { key: "active", label: "Conta ativa", type: "select", options: [{ value: true, label: "Sim" }, { value: false, label: "N\xE3o" }] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "Utilizadores",
        description: "Gere quem pode entrar no painel e o n\xEDvel de acesso de cada pessoa.",
        fields,
        columns: ["name", "username", "role", "active"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/utilizadores.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utilizadores-HYpmBtlK.mjs.map
