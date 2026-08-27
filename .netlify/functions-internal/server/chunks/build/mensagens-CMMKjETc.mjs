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

const messagesRepository = () => createRestRepository("messages");
const messagesService = () => createCrudService(messagesRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mensagens",
  __ssrInlineRender: true,
  setup(__props) {
    const service = messagesService();
    const fields = [
      { key: "firstName", label: "Nome", readonly: true },
      { key: "lastName", label: "Apelido", readonly: true },
      { key: "email", label: "Email", type: "email", readonly: true },
      { key: "subject", label: "Assunto", readonly: true },
      { key: "message", label: "Mensagem", type: "textarea", readonly: true },
      {
        key: "status",
        label: "Estado interno",
        type: "select",
        filterable: true,
        options: [
          { value: "new", label: "Nova" },
          { value: "read", label: "Lida" },
          { value: "archived", label: "Arquivada" }
        ]
      },
      { key: "createdAt", label: "Recebida em", type: "datetime-local", readonly: true, required: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "Mensagens",
        description: "Pedidos enviados atrav\xE9s do formul\xE1rio de contacto do site. \xC1rea de consulta exclusiva da equipa interna.",
        fields,
        columns: ["subject", "email", "status", "createdAt"],
        "publish-key": "__sem_publicacao__",
        "allow-create": false,
        "allow-edit": true,
        "allow-delete": true,
        "panel-note": "Mensagens recebidas atrav\xE9s do formul\xE1rio p\xFAblico. N\xE3o s\xE3o publicadas nem apresentadas no site.",
        "empty-text": "Ainda n\xE3o foram recebidas mensagens atrav\xE9s do formul\xE1rio de contacto."
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/mensagens.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mensagens-CMMKjETc.mjs.map
