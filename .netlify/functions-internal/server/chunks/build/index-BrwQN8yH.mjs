import __nuxt_component_0 from './Icon-jTnUEsFD.mjs';
import { defineComponent, computed, withAsyncContext, ref, watch, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './CmsBadge-0fejhyyb.mjs';
import { _ as _sfc_main$3 } from './CmsPagination-IjAT6u2C.mjs';
import { d as useRouter, e as useAuth } from './server.mjs';
import { u as useApi } from './useApi-3EScbZE4.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CmsStatCard",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    detail: {},
    icon: {},
    tone: { default: "primary" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["stat-card", `stat-card--${__props.tone}`]
      }, _attrs))}><div class="stat-card__head"><span class="stat-card__label">${ssrInterpolate(__props.label)}</span><span class="stat-card__icon">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.icon,
        size: "18"
      }, null, _parent));
      _push(`</span></div><strong class="stat-card__value">${ssrInterpolate(__props.value)}</strong><p class="stat-card__detail">${ssrInterpolate(__props.detail)}</p></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsStatCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const dashboardRepository = { async getDashboard() {
  const api = useApi();
  const [games, events, players, members] = await Promise.all([api("/api/games"), api("/api/events"), api("/api/players"), api("/api/members")]);
  const now = Date.now();
  const upcoming = games.filter((g) => (/* @__PURE__ */ new Date(`${g.date}T${g.time || "00:00"}:00`)).getTime() >= now).sort((a, b) => (/* @__PURE__ */ new Date(`${a.date}T${a.time || "00:00"}`)).getTime() - (/* @__PURE__ */ new Date(`${b.date}T${b.time || "00:00"}`)).getTime()).slice(0, 5);
  const publishedEvents = events.filter((e) => e.status !== "draft").length;
  const publishedPlayers = players.filter((p) => p.status !== "draft").length;
  const daily = [0, 0, 0, 0, 0, 0, 0];
  for (const row of [...games, ...events, ...players]) {
    const t = new Date(row.updatedAt || row.createdAt || 0);
    if (Number.isNaN(t.getTime())) continue;
    const diff = Math.floor((Date.now() - t.getTime()) / 864e5);
    if (diff >= 0 && diff < 7) daily[6 - diff]++;
  }
  return { stats: [{ label: "Jogos", value: String(games.length), detail: `${upcoming.length} pr\xF3ximos`, icon: "lucide:calendar-days", tone: "info" }, { label: "Eventos", value: String(events.length), detail: `${publishedEvents} publicados`, icon: "lucide:party-popper", tone: "success" }, { label: "Plantel", value: String(players.length), detail: `${publishedPlayers} publicados`, icon: "lucide:users", tone: "warning" }, { label: "S\xF3cios", value: String(members.length), detail: "Registos no CMS", icon: "lucide:user-round-check" }], activity: daily, recentContents: upcoming.map((g, i) => {
    var _a, _b;
    return { id: g.id || i + 1, title: `${((_a = g.teams) == null ? void 0 : _a[0]) || ""} vs ${((_b = g.teams) == null ? void 0 : _b[1]) || ""}`, category: g.jornada || "Jogo", status: g.status === "finished" ? "Terminado" : "Agendado", tone: g.status === "finished" ? "success" : "info", updated: g.date, author: g.time || "" };
  }) };
} };
const dashboardService = {
  getDashboard() {
    return dashboardRepository.getDashboard();
  }
};
const useDashboard = () => {
  return useAsyncData("dashboard", () => dashboardService.getDashboard());
};
const pageSize = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const { user } = useAuth();
    const isAdmin = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.role) === "admin";
    });
    const { data: dashboard, refresh, pending } = ([__temp, __restore] = withAsyncContext(() => useDashboard()), __temp = await __temp, __restore(), __temp);
    const stats = computed(() => {
      var _a, _b;
      return (_b = (_a = dashboard.value) == null ? void 0 : _a.stats) != null ? _b : [];
    });
    const activity = computed(() => {
      var _a, _b;
      return (_b = (_a = dashboard.value) == null ? void 0 : _a.activity) != null ? _b : [];
    });
    const contents = computed(() => {
      var _a, _b;
      return (_b = (_a = dashboard.value) == null ? void 0 : _a.recentContents) != null ? _b : [];
    });
    const filterOpen = ref(false);
    const selectedStatus = ref("");
    const dashboardPage = ref(1);
    const filteredContents = computed(() => selectedStatus.value ? contents.value.filter((x) => x.status === selectedStatus.value) : contents.value);
    const paginatedContents = computed(() => {
      const start = (dashboardPage.value - 1) * pageSize;
      return filteredContents.value.slice(start, start + pageSize);
    });
    watch(selectedStatus, () => dashboardPage.value = 1);
    watch(() => filteredContents.value.length, () => {
      const total = Math.max(1, Math.ceil(filteredContents.value.length / pageSize));
      if (dashboardPage.value > total) dashboardPage.value = total;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_CmsStatCard = _sfc_main$1;
      const _component_CmsBadge = _sfc_main$2;
      const _component_CmsPagination = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack" }, _attrs))}><section class="page-heading"><div><p class="eyebrow">Vis\xE3o geral</p><h1>Painel de controlo</h1><p class="page-heading__description">Dados reais da plataforma e conte\xFAdos geridos pelo CMS.</p></div><div class="page-heading__actions"><button class="btn btn--secondary">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:download",
        size: "17"
      }, null, _parent));
      _push(` Exportar</button>`);
      if (unref(isAdmin)) {
        _push(`<button class="btn btn--primary">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:plus",
          size: "17"
        }, null, _parent));
        _push(` Novo conte\xFAdo</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="stats-grid" aria-label="Estat\xEDsticas"><!--[-->`);
      ssrRenderList(unref(stats), (stat) => {
        _push(ssrRenderComponent(_component_CmsStatCard, mergeProps({
          key: stat.label
        }, { ref_for: true }, stat), null, _parent));
      });
      _push(`<!--]--></section><section class="dashboard-grid"><article class="panel panel--activity"><div class="panel__header"><div><h2>Atividade editorial</h2><p>Altera\xE7\xF5es reais nos \xFAltimos 7 dias</p></div><button class="text-button">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:refresh-cw" }, null, _parent));
      _push(` Atualizar</button></div>`);
      if (unref(pending)) {
        _push(`<div class="cms-loading">A carregar\u2026</div>`);
      } else {
        _push(`<div class="bar-chart" aria-label="Atividade editorial"><!--[-->`);
        ssrRenderList(unref(activity), (value, index) => {
          _push(`<div class="bar-chart__item"><div class="bar-chart__track"><span style="${ssrRenderStyle({ height: `${Math.max(4, Math.min(100, value * 18))}%` })}"></span></div><small>${ssrInterpolate(["S", "T", "Q", "Q", "S", "S", "D"][index])} \xB7 ${ssrInterpolate(value)}</small></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</article><article class="panel quick-actions"><div class="panel__header"><div><h2>A\xE7\xF5es r\xE1pidas</h2><p>Atalhos funcionais</p></div></div>`);
      if (unref(isAdmin)) {
        _push(`<button class="quick-action"><span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:calendar-plus",
          size: "18"
        }, null, _parent));
        _push(`</span><div><strong>Adicionar jogo</strong><small>Calend\xE1rio e jornadas</small></div>`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-right" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="quick-action"><span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isAdmin) ? "lucide:image-plus" : "lucide:images",
        size: "18"
      }, null, _parent));
      _push(`</span><div><strong>${ssrInterpolate(unref(isAdmin) ? "Carregar media" : "Ver multim\xE9dia")}</strong><small>Imagens e documentos</small></div>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-right" }, null, _parent));
      _push(`</button>`);
      if (unref(isAdmin)) {
        _push(`<button class="quick-action"><span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:user-plus",
          size: "18"
        }, null, _parent));
        _push(`</span><div><strong>Adicionar utilizador</strong><small>Gerir acessos</small></div>`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-right" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article></section><section class="panel content-panel"><div class="panel__header content-panel__header"><div><h2>Pr\xF3ximos jogos</h2><p>Agenda obtida da mesma fonte de dados do site</p></div><div class="content-panel__tools"><button class="filter-button">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:sliders-horizontal" }, null, _parent));
      _push(` Filtrar</button><button class="text-button">Ver todos `);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-right" }, null, _parent));
      _push(`</button></div></div>`);
      if (unref(filterOpen)) {
        _push(`<div style="${ssrRenderStyle({ "padding": "0 24px 16px" })}"><select class="filter-button"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedStatus)) ? ssrLooseContain(unref(selectedStatus), "") : ssrLooseEqual(unref(selectedStatus), "")) ? " selected" : ""}>Todos os estados</option><option value="Agendado"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedStatus)) ? ssrLooseContain(unref(selectedStatus), "Agendado") : ssrLooseEqual(unref(selectedStatus), "Agendado")) ? " selected" : ""}>Agendado</option><option value="Terminado"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedStatus)) ? ssrLooseContain(unref(selectedStatus), "Terminado") : ssrLooseEqual(unref(selectedStatus), "Terminado")) ? " selected" : ""}>Terminado</option></select></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(filteredContents).length) {
        _push(`<div class="empty-state"><h3>Sem jogos</h3><p>N\xE3o existem jogos para apresentar.</p></div>`);
      } else {
        _push(`<div class="table-scroll"><table class="data-table"><thead><tr><th>Jogo</th><th>Jornada</th><th>Estado</th><th>Hora</th><th>Data</th><th>A\xE7\xF5es</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(paginatedContents), (item) => {
          _push(`<tr><td><strong>${ssrInterpolate(item.title)}</strong></td><td>${ssrInterpolate(item.category)}</td><td>`);
          _push(ssrRenderComponent(_component_CmsBadge, {
            label: item.status,
            tone: item.tone
          }, null, _parent));
          _push(`</td><td>${ssrInterpolate(item.author)}</td><td class="mono">${ssrInterpolate(item.updated)}</td><td><button class="icon-button icon-button--small" aria-label="Abrir jogos">`);
          _push(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-up-right" }, null, _parent));
          _push(`</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(ssrRenderComponent(_component_CmsPagination, {
        page: unref(dashboardPage),
        "onUpdate:page": ($event) => isRef(dashboardPage) ? dashboardPage.value = $event : null,
        "total-items": unref(filteredContents).length,
        "page-size": pageSize
      }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BrwQN8yH.mjs.map
