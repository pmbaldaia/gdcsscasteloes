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

const playersRepository = () => createRestRepository("players");
const playersService = () => createCrudService(playersRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "plantel",
  __ssrInlineRender: true,
  setup(__props) {
    const service = playersService();
    const fields = [{ key: "name", label: "Nome", placeholder: "Nome do jogador" }, { key: "img", label: "Imagem", type: "image" }, { key: "order", label: "Ordem", type: "number", autoIncrement: true, hint: "Define a posi\xE7\xE3o do jogador no plantel. Ao adicionar, \xE9 sugerida automaticamente a pr\xF3xima ordem." }, { key: "publishedAt", label: "Publicar em", type: "datetime-local", required: false, hint: "Opcional. Sem data, fica vis\xEDvel no site imediatamente. Com data/hora futura, s\xF3 aparece quando chegar esse momento." }, { key: "status", label: "Estado", type: "select", defaultValue: "published", options: [{ value: "published", label: "Publicado" }, { value: "draft", label: "Rascunho" }] }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "Plantel",
        description: "Gere o nome, imagem, ordem e agendamento de revela\xE7\xE3o dos jogadores apresentados no site.",
        fields,
        columns: ["id", "name", "img", "publishedAt", "status"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/plantel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=plantel-BHrdO4NC.mjs.map
