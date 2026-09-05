import { _ as _sfc_main$1 } from './CmsResourceManager-B8z5a_j8.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
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
  __name: "blocos",
  __ssrInlineRender: true,
  setup(__props) {
    const service = useResourceService("contentBlocks");
    useResourceService("pages");
    const pages = ref([]);
    const types = [
      { value: "hero", label: "Destaque principal" },
      { value: "page-header", label: "Cabe\xE7alho da p\xE1gina" },
      { value: "section-header", label: "T\xEDtulo de sec\xE7\xE3o" },
      { value: "feature", label: "Destaque com \xEDcone" },
      { value: "text", label: "Texto" },
      { value: "text-image", label: "Texto com imagem" },
      { value: "image-text", label: "Imagem com texto" },
      { value: "venue", label: "Localiza\xE7\xE3o / campo" },
      { value: "policy-section", label: "Sec\xE7\xE3o de pol\xEDtica / termos" },
      { value: "gallery", label: "Galeria" },
      { value: "games", label: "Jogos" },
      { value: "sponsors", label: "Patroc\xEDnios" },
      { value: "cta", label: "Chamada \xE0 a\xE7\xE3o" }
    ];
    const areaOptions = [
      ["hero", "Destaque principal da p\xE1gina inicial"],
      ["features-header", "Introdu\xE7\xE3o dos destaques"],
      ["feature-1", "Destaque 1"],
      ["feature-2", "Destaque 2"],
      ["feature-3", "Destaque 3"],
      ["feature-4", "Destaque 4"],
      ["feature-5", "Destaque 5"],
      ["feature-6", "Destaque 6"],
      ["next-game", "Pr\xF3ximo jogo"],
      ["sponsors", "Patroc\xEDnios"],
      ["cta", "Chamada \xE0 a\xE7\xE3o"],
      ["header", "Cabe\xE7alho da p\xE1gina"],
      ["venue", "Campo / localiza\xE7\xE3o"],
      ["social-title", "\xD3rg\xE3os sociais"],
      ["assembly-title", "Assembleia Geral"],
      ["board-title", "Dire\xE7\xE3o"],
      ["fiscal-title", "Conselho Fiscal"],
      ["sport-title", "Estrutura desportiva"],
      ["staff-title", "Equipa t\xE9cnica"],
      ["squad-title", "Plantel"],
      ["contact-cta", "Contacto / chamada \xE0 a\xE7\xE3o"]
    ].map(([value, label]) => ({ value, label }));
    const fields = computed(() => [
      { key: "pageSlug", label: "P\xE1gina", type: "select", options: pages.value.map((p) => ({ value: p.slug, label: p.title || p.slug })), hint: "P\xE1gina onde este bloco \xE9 apresentado." },
      { key: "key", label: "\xC1rea do site", type: "select", options: areaOptions, required: false, hint: "Identifica a zona existente do site controlada por este bloco." },
      { key: "type", label: "Tipo de bloco", type: "select", filterable: true, options: types },
      { key: "eyebrow", label: "Antet\xEDtulo", required: false },
      { key: "title", label: "T\xEDtulo", required: false },
      { key: "content", label: "Conte\xFAdo", type: "textarea", required: false },
      { key: "image", label: "Imagem desktop / principal", type: "image", required: false },
      { key: "mobileImage", label: "Imagem mobile", type: "image", required: false },
      { key: "icon", label: "\xCDcone", required: false, hint: "Nome do \xEDcone j\xE1 utilizado pelo site. Ex.: mdi:trophy." },
      { key: "url", label: "Liga\xE7\xE3o / mapa", required: false },
      { key: "items", label: "Bot\xF5es / a\xE7\xF5es", type: "buttons", required: false, hint: "O primeiro bot\xE3o \xE9 Prim\xE1rio e os seguintes Secund\xE1rios por defeito." },
      { key: "order", label: "Posi\xE7\xE3o na p\xE1gina", type: "number", defaultValue: 1 },
      { key: "status", label: "Visibilidade", type: "select", options: [{ value: "published", label: "Vis\xEDvel no site" }, { value: "draft", label: "Oculto no site" }], defaultValue: "published" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsResourceManager = _sfc_main$1;
      _push(ssrRenderComponent(_component_CmsResourceManager, mergeProps({
        service: unref(service),
        title: "Blocos de conte\xFAdo",
        description: "Controla as sec\xE7\xF5es que j\xE1 existem no site, mantendo o layout e a responsividade originais.",
        fields: unref(fields),
        columns: ["pageSlug", "key", "type", "title", "order", "status"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/blocos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blocos-BrYMdiWW.mjs.map
