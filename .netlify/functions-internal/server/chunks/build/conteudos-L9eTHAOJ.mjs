import { _ as __nuxt_component_0 } from './nuxt-link-CVE1ktMt.mjs';
import __nuxt_component_0$1 from './Icon-jTnUEsFD.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-FWaHSLTI.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "conteudos",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [{ label: "P\xE1ginas", description: "P\xE1ginas din\xE2micas e SEO", icon: "lucide:file-text", to: "/admin/paginas" }, { label: "Blocos de conte\xFAdo", description: "Conte\xFAdo organizado por p\xE1gina", icon: "lucide:blocks", to: "/admin/blocos" }, { label: "Menus", description: "Menu principal e rodap\xE9", icon: "lucide:menu", to: "/admin/menus" }, { label: "Jogos", description: "Calend\xE1rio e jornadas", icon: "lucide:calendar-days", to: "/admin/jogos" }, { label: "Eventos", description: "Agenda p\xFAblica do clube", icon: "lucide:party-popper", to: "/admin/eventos" }, { label: "Plantel", description: "Jogadores e publica\xE7\xE3o", icon: "lucide:users", to: "/admin/plantel" }, { label: "Galeria", description: "\xC1lbuns e fotografias", icon: "lucide:images", to: "/admin/galeria" }, { label: "Dire\xE7\xE3o", description: "\xD3rg\xE3os sociais", icon: "lucide:landmark", to: "/admin/direcao" }, { label: "Patroc\xEDnios", description: "Log\xF3tipos da p\xE1gina inicial", icon: "lucide:badge-euro", to: "/admin/patrocinios" }, { label: "Oportunidades", description: "Ofertas para s\xF3cios", icon: "lucide:gift", to: "/admin/oportunidades" }, { label: "Multim\xE9dia", description: "Imagens e documentos", icon: "lucide:image", to: "/admin/media" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack" }, _attrs))}><header class="page-heading"><div><p class="eyebrow">Conte\xFAdos</p><h1>Gest\xE3o de conte\xFAdos</h1><p class="page-heading__description">Escolhe a \xE1rea que pretendes gerir. Todos os m\xF3dulos usam a mesma API do site p\xFAblico.</p></div></header><section class="stats-grid"><!--[-->`);
      ssrRenderList(sections, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: "panel",
          style: { "padding": "20px", "display": "flex", "gap": "14px", "align-items": "center" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="stat-card__icon"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><h2 style="${ssrRenderStyle({ "font-size": "1rem" })}"${_scopeId}>${ssrInterpolate(item.label)}</h2><p style="${ssrRenderStyle({ "margin": "3px 0 0", "color": "var(--color-ink-soft)", "font-size": ".85rem" })}"${_scopeId}>${ssrInterpolate(item.description)}</p></div>`);
            } else {
              return [
                createVNode("span", { class: "stat-card__icon" }, [
                  createVNode(_component_Icon, {
                    name: item.icon
                  }, null, 8, ["name"])
                ]),
                createVNode("div", null, [
                  createVNode("h2", { style: { "font-size": "1rem" } }, toDisplayString(item.label), 1),
                  createVNode("p", { style: { "margin": "3px 0 0", "color": "var(--color-ink-soft)", "font-size": ".85rem" } }, toDisplayString(item.description), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/conteudos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=conteudos-L9eTHAOJ.mjs.map
