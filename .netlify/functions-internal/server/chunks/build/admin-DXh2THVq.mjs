import { _ as __nuxt_component_0 } from './nuxt-link-CVE1ktMt.mjs';
import __nuxt_component_0$1 from './Icon-DhbMUx6q.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, computed, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderTeleport } from 'vue/server-renderer';
import { u as useHead, f as useThemeMode, p as useRoute, e as useAuth } from './server.mjs';
import { _ as _sfc_main$5 } from './ThemeToggle-CZIGUszT.mjs';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';
import { u as useConfirm } from './useConfirm-CFUPPoka.mjs';
import { _ as _sfc_main$4 } from './admin-Du24de9y.mjs';
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
import './index-Dydvo-RC.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const allGroups = [
  { label: "Geral", items: [
    { label: "Painel de controlo", icon: "lucide:layout-dashboard", to: "/admin" }
  ] },
  { label: "Competi\xE7\xE3o", items: [
    { label: "Jogos", icon: "lucide:calendar-days", to: "/admin/jogos" },
    { label: "Equipas", icon: "lucide:shield", to: "/admin/equipas" }
  ] },
  { label: "Estrutura", items: [
    { label: "Plantel", icon: "lucide:users", to: "/admin/plantel" },
    { label: "Equipa T\xE9cnica", icon: "lucide:clipboard-list", to: "/admin/equipa-tecnica" },
    { label: "Dire\xE7\xE3o", icon: "lucide:landmark", to: "/admin/direcao" }
  ] },
  { label: "Comunica\xE7\xE3o", items: [
    { label: "Eventos", icon: "lucide:party-popper", to: "/admin/eventos" },
    { label: "Galeria", icon: "lucide:images", to: "/admin/galeria" },
    { label: "Patroc\xEDnios", icon: "lucide:badge-euro", to: "/admin/patrocinios" },
    { label: "Oportunidades", icon: "lucide:gift", to: "/admin/oportunidades" },
    { label: "Mensagens", icon: "lucide:mail", to: "/admin/mensagens" }
  ] },
  { label: "Clube", items: [
    { label: "S\xF3cios", icon: "lucide:user-round-check", to: "/admin/socios" },
    { label: "Multim\xE9dia", icon: "lucide:image", to: "/admin/media" }
  ] },
  { label: "Sistema", items: [
    { label: "Utilizadores", icon: "lucide:key-round", to: "/admin/utilizadores", adminOnly: true },
    { label: "Defini\xE7\xF5es", icon: "lucide:settings-2", to: "/admin/definicoes" }
  ] }
];
const useCmsNavigation = () => {
  const { user } = useAuth();
  const groups = computed(
    () => allGroups.map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        var _a;
        return !item.adminOnly || ((_a = user.value) == null ? void 0 : _a.role) === "admin";
      })
    })).filter((group) => group.items.length)
  );
  return { groups };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CmsSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["close"],
  setup(__props) {
    const { isDark } = useThemeMode();
    const route = useRoute();
    const { groups } = useCmsNavigation();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<!--[-->`);
      if (__props.open) {
        _push(`<button class="sidebar-backdrop" type="button" aria-label="Fechar menu"></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<aside class="${ssrRenderClass([{ "cms-sidebar--open": __props.open }, "cms-sidebar"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "brand",
        onClick: ($event) => _ctx.$emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(isDark) ? "/img/logotipo.webp" : "/img/logowbg.webp")} alt="GDCSS Castel\xF5es" class="brand-logo-original brand__logo"${_scopeId}><span class="brand__name"${_scopeId}>G.D.C.S.S.C.</span>`);
          } else {
            return [
              createVNode("img", {
                src: unref(isDark) ? "/img/logotipo.webp" : "/img/logowbg.webp",
                alt: "GDCSS Castel\xF5es",
                class: "brand-logo-original brand__logo"
              }, null, 8, ["src"]),
              createVNode("span", { class: "brand__name" }, "G.D.C.S.S.C.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="sidebar-nav" aria-label="Navega\xE7\xE3o principal"><!--[-->`);
      ssrRenderList(unref(groups), (group) => {
        _push(`<section class="nav-group"><p class="nav-group__title">${ssrInterpolate(group.label)}</p><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: item.to,
            class: ["nav-item", { "nav-item--active": unref(route).path === item.to }],
            onClick: ($event) => _ctx.$emit("close")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon,
                  size: "18"
                }, null, _parent2, _scopeId));
                _push2(`<span class="nav-item__label"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    size: "18"
                  }, null, 8, ["name"]),
                  createVNode("span", { class: "nav-item__label" }, toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]--></nav><div class="sidebar-footer"><div class="workspace-pill"><span class="workspace-pill__avatar">G</span><div class="workspace-pill__copy"><strong>GDCSS Castel\xF5es</strong><span>Produ\xE7\xE3o</span></div></div></div></aside><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CmsTopbar",
  __ssrInlineRender: true,
  emits: ["menu"],
  setup(__props) {
    const menuOpen = ref(false);
    const route = useRoute();
    const { user } = useAuth();
    useToast();
    const roleLabel = computed(
      () => {
        var _a;
        return { admin: "Administrador", editor: "Editor" }[((_a = user.value) == null ? void 0 : _a.role) || ""] || "Utilizador";
      }
    );
    const pageMeta = computed(() => {
      const path = route.path;
      const map = [
        { test: (p) => p === "/admin", label: "Painel de controlo", icon: "lucide:layout-dashboard" },
        { test: (p) => p.startsWith("/admin/jogos"), label: "Jogos e jornadas", icon: "lucide:calendar-days" },
        { test: (p) => p.startsWith("/admin/equipas"), label: "Equipas", icon: "lucide:shield" },
        { test: (p) => p.startsWith("/admin/plantel"), label: "Plantel", icon: "lucide:users" },
        { test: (p) => p.startsWith("/admin/equipa-tecnica"), label: "Equipa T\xE9cnica", icon: "lucide:clipboard-list" },
        { test: (p) => p.startsWith("/admin/direcao"), label: "Dire\xE7\xE3o", icon: "lucide:landmark" },
        { test: (p) => p.startsWith("/admin/eventos"), label: "Eventos", icon: "lucide:party-popper" },
        { test: (p) => p.startsWith("/admin/galeria"), label: "Galeria", icon: "lucide:images" },
        { test: (p) => p.startsWith("/admin/patrocinios"), label: "Patroc\xEDnios", icon: "lucide:badge-euro" },
        { test: (p) => p.startsWith("/admin/oportunidades"), label: "Oportunidades", icon: "lucide:gift" },
        { test: (p) => p.startsWith("/admin/mensagens"), label: "Mensagens", icon: "lucide:mail" },
        { test: (p) => p.startsWith("/admin/socios"), label: "S\xF3cios", icon: "lucide:user-round-check" },
        { test: (p) => p.startsWith("/admin/media"), label: "Multim\xE9dia", icon: "lucide:image" },
        { test: (p) => p.startsWith("/admin/utilizadores"), label: "Utilizadores", icon: "lucide:key-round" },
        { test: (p) => p.startsWith("/admin/definicoes"), label: "Defini\xE7\xF5es", icon: "lucide:settings-2" },
        { test: (p) => p.startsWith("/admin/pesquisa"), label: "Resultados", icon: "lucide:list-filter" }
      ];
      return map.find((item) => item.test(path)) || {
        label: "Administra\xE7\xE3o",
        icon: "lucide:layout-panel-left"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_0$1;
      const _component_ThemeToggle = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "cms-topbar" }, _attrs))}><div class="topbar-left"><button class="icon-button mobile-menu" type="button" aria-label="Abrir menu">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:menu",
        size: "20"
      }, null, _parent));
      _push(`</button><div class="topbar-context" aria-label="Localiza\xE7\xE3o atual no CMS"><span class="topbar-context__icon">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(pageMeta).icon,
        size: "18"
      }, null, _parent));
      _push(`</span><div class="topbar-context__copy"><small>Administra\xE7\xE3o</small><strong>${ssrInterpolate(unref(pageMeta).label)}</strong></div></div></div><div class="topbar-actions"><button class="topbar-site-button" type="button" title="Abrir site p\xFAblico">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:external-link",
        size: "16"
      }, null, _parent));
      _push(`<span>Ver site</span></button>`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/mensagens",
        class: "icon-button notification-button",
        "aria-label": "Mensagens",
        title: "Mensagens"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:mail",
              size: "19"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:mail",
                size: "19"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="user-menu" type="button"><span class="user-menu__avatar">${ssrInterpolate((((_a = unref(user)) == null ? void 0 : _a.name) || "AD").slice(0, 2).toUpperCase())}</span><span class="user-menu__copy"><strong>${ssrInterpolate(((_b = unref(user)) == null ? void 0 : _b.name) || "Administrador")}</strong><small>${ssrInterpolate(unref(roleLabel))}</small></span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        size: "15"
      }, null, _parent));
      _push(`</button>`);
      if (unref(menuOpen)) {
        _push(`<div class="user-dropdown">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/mensagens",
          class: "mobile-menu-link",
          onClick: ($event) => menuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "lucide:mail" }, null, _parent2, _scopeId));
              _push2(` Mensagens `);
            } else {
              return [
                createVNode(_component_Icon, { name: "lucide:mail" }),
                createTextVNode(" Mensagens ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/definicoes",
          onClick: ($event) => menuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "lucide:settings" }, null, _parent2, _scopeId));
              _push2(` Defini\xE7\xF5es `);
            } else {
              return [
                createVNode(_component_Icon, { name: "lucide:settings" }),
                createTextVNode(" Defini\xE7\xF5es ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button">`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:log-out" }, null, _parent));
        _push(` Terminar sess\xE3o </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsTopbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CmsConfirmDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const { state } = useConfirm();
    const icon = computed(
      () => state.value.tone === "danger" ? "lucide:trash-2" : "lucide:triangle-alert"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(state).open) {
          _push2(`<div class="cms-confirm-backdrop" role="presentation"><section class="cms-confirm-dialog" role="alertdialog" aria-modal="true"${ssrRenderAttr("aria-labelledby", "cms-confirm-title")}${ssrRenderAttr("aria-describedby", "cms-confirm-description")}><div class="${ssrRenderClass([`cms-confirm-dialog__icon--${unref(state).tone}`, "cms-confirm-dialog__icon"])}">`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: unref(icon),
            size: "25"
          }, null, _parent));
          _push2(`</div><div class="cms-confirm-dialog__copy"><p class="eyebrow">Confirma\xE7\xE3o necess\xE1ria</p><h2 id="cms-confirm-title">${ssrInterpolate(unref(state).title)}</h2><p id="cms-confirm-description">${ssrInterpolate(unref(state).message)}</p></div><div class="cms-confirm-dialog__actions"><button type="button" class="btn btn--secondary">${ssrInterpolate(unref(state).cancelLabel)}</button><button type="button" class="${ssrRenderClass([`cms-confirm-dialog__confirm--${unref(state).tone}`, "btn cms-confirm-dialog__confirm"])}" autofocus>`);
          _push2(ssrRenderComponent(_component_Icon, { name: unref(icon) }, null, _parent));
          _push2(` ${ssrInterpolate(unref(state).confirmLabel)}</button></div></section></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsConfirmDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ titleTemplate: (title) => title ? `${title} \xB7 GDCSS Castel\xF5es CMS` : "GDCSS Castel\xF5es CMS" });
    const sidebarOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsSidebar = _sfc_main$3;
      const _component_CmsTopbar = _sfc_main$2;
      const _component_CmsConfirmDialog = _sfc_main$1;
      const _component_CmsToasts = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cms-shell" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CmsSidebar, {
        open: unref(sidebarOpen),
        onClose: ($event) => sidebarOpen.value = false
      }, null, _parent));
      _push(`<div class="cms-shell__main">`);
      _push(ssrRenderComponent(_component_CmsTopbar, {
        onMenu: ($event) => sidebarOpen.value = !unref(sidebarOpen)
      }, null, _parent));
      _push(`<main class="cms-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      _push(ssrRenderComponent(_component_CmsConfirmDialog, null, null, _parent));
      _push(ssrRenderComponent(_component_CmsToasts, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-DXh2THVq.mjs.map
