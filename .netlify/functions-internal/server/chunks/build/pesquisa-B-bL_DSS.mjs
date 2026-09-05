import { _ as __nuxt_component_0 } from './nuxt-link-CVE1ktMt.mjs';
import __nuxt_component_0$1 from './Icon-jTnUEsFD.mjs';
import { _ as _sfc_main$1 } from './CmsPagination-IjAT6u2C.mjs';
import { defineComponent, computed, withAsyncContext, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import { u as useApi } from './useApi-3EScbZE4.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-FWaHSLTI.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'perfect-debounce';

const pageSize = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pesquisa",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const q = computed(() => String(route.query.q || "").trim().toLowerCase());
    const api = useApi();
    const resources = [["Jogos", "games", "/admin/jogos"], ["Equipas", "teams", "/admin/equipas"], ["Eventos", "events", "/admin/eventos"], ["Galeria", "gallery", "/admin/galeria"], ["Plantel", "players", "/admin/plantel"], ["Equipa T\xE9cnica", "staff", "/admin/equipa-tecnica"], ["Dire\xE7\xE3o", "board", "/admin/direcao"], ["S\xF3cios", "members", "/admin/socios"], ["Patroc\xEDnios", "sponsors", "/admin/patrocinios"], ["Oportunidades", "opportunities", "/admin/oportunidades"]];
    const { data: results, pending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "cms-search-" + q.value,
      async () => {
        if (!q.value) return [];
        const out = [];
        for (const [label, res, to] of resources) {
          const rows = await api(`/api/${res}`);
          for (const row of rows) {
            if (JSON.stringify(row).toLowerCase().includes(q.value)) out.push({ label, to, row });
          }
        }
        return out;
      },
      "$tqqOhjtSph"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const searchPage = ref(1);
    const paginatedResults = computed(() => {
      const rows = results.value || [];
      const start = (searchPage.value - 1) * pageSize;
      return rows.slice(start, start + pageSize);
    });
    watch(q, () => searchPage.value = 1);
    watch(() => {
      var _a;
      return ((_a = results.value) == null ? void 0 : _a.length) || 0;
    }, () => {
      var _a;
      const total = Math.max(1, Math.ceil((((_a = results.value) == null ? void 0 : _a.length) || 0) / pageSize));
      if (searchPage.value > total) searchPage.value = total;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_CmsPagination = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack" }, _attrs))}><header class="page-heading"><div><p class="eyebrow">Pesquisa</p><h1>Resultados para \u201C${ssrInterpolate(unref(route).query.q)}\u201D</h1></div></header>`);
      if (unref(pending)) {
        _push(`<div class="cms-loading">A pesquisar\u2026</div>`);
      } else {
        _push(`<section class="panel">`);
        if (!((_a = unref(results)) == null ? void 0 : _a.length)) {
          _push(`<div class="empty-state"><h3>Sem resultados</h3><p>N\xE3o foi encontrado conte\xFAdo correspondente.</p></div>`);
        } else {
          _push(`<div class="table-scroll"><table class="data-table"><tbody><!--[-->`);
          ssrRenderList(unref(paginatedResults), (item, i) => {
            _push(`<tr><td><strong>${ssrInterpolate(item.label)}</strong></td><td>${ssrInterpolate(item.row.name || item.row.nome || item.row.title || item.row.jornada || item.row.id)}</td><td>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              class: "text-button"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Abrir `);
                  _push2(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-right" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createTextVNode("Abrir "),
                    createVNode(_component_Icon, { name: "lucide:arrow-right" })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        }
        _push(ssrRenderComponent(_component_CmsPagination, {
          page: unref(searchPage),
          "onUpdate:page": ($event) => isRef(searchPage) ? searchPage.value = $event : null,
          "total-items": ((_b = unref(results)) == null ? void 0 : _b.length) || 0,
          "page-size": pageSize
        }, null, _parent));
        _push(`</section>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/pesquisa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pesquisa-B-bL_DSS.mjs.map
