import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as _sfc_main$3 } from './NuxtImg-D4mLRaeW.mjs';
import { _ as _sfc_main$4 } from './ThemeToggle-ByhJnfua.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CVE1ktMt.mjs';
import { computed, mergeProps, unref, ref, withAsyncContext, watch, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, defineComponent, inject, createElementBlock, renderSlot, createCommentVNode, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { G as G$1, F as F$2 } from './PhInstagramLogo.vue-CfLhyFSS.mjs';
import { useRoute as useRoute$1 } from 'vue-router';
import { u as useSiteSettings } from './useSiteSettings-Cdgs1imL.mjs';
import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { a as useRoute, f as useThemeMode } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './Icon-jTnUEsFD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-FWaHSLTI.mjs';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'perfect-debounce';

const v = ["width", "height", "fill", "transform"], y$1 = { key: 0 }, f$2 = /* @__PURE__ */ createElementVNode("path", { d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" }, null, -1), w$2 = [
  f$2
], k$2 = { key: 1 }, A$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,64V192H40V64Z",
  opacity: "0.2"
}, null, -1), x$2 = /* @__PURE__ */ createElementVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }, null, -1), S$2 = [
  A$1,
  x$2
], V$1 = { key: 2 }, z$2 = /* @__PURE__ */ createElementVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" }, null, -1), C$2 = [
  z$2
], B$2 = { key: 3 }, N$2 = /* @__PURE__ */ createElementVNode("path", { d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" }, null, -1), b$2 = [
  N$2
], E$2 = { key: 4 }, P$2 = /* @__PURE__ */ createElementVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }, null, -1), W$2 = [
  P$2
], $$2 = { key: 5 }, j$2 = /* @__PURE__ */ createElementVNode("path", { d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" }, null, -1), L$1 = [
  j$2
], q = {
  name: "PhList"
}, G = /* @__PURE__ */ defineComponent({
  ...q,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const s = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), H2 = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : c;
    }), l = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : _;
    }), u = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : h;
    }), p = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : H2 ? "scale(-1, 1)" : void 0);
    return (r, D) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: u.value,
      transform: p.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", y$1, w$2)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", k$2, S$2)) : a.value === "fill" ? (openBlock(), createElementBlock("g", V$1, C$2)) : a.value === "light" ? (openBlock(), createElementBlock("g", B$2, b$2)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E$2, W$2)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $$2, L$1)) : createCommentVNode("", true)
    ], 16, v));
  }
});
const y = ["width", "height", "fill", "transform"], f$1 = { key: 0 }, Z$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,68a44.05,44.05,0,0,1-44-44,12,12,0,0,0-12-12H128a12,12,0,0,0-12,12V156a16,16,0,1,1-22.85-14.47A12,12,0,0,0,100,130.69V88A12,12,0,0,0,85.9,76.19a79.35,79.35,0,0,0-47.08,27.74A81.84,81.84,0,0,0,20,156a80,80,0,0,0,160,0V122.67A107.47,107.47,0,0,0,224,132a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm-12,39.15a83.05,83.05,0,0,1-37-14.91A12,12,0,0,0,156,102v54a56,56,0,0,1-112,0,57.86,57.86,0,0,1,32-51.56V124a40,40,0,1,0,64,32V36h17.06A68.21,68.21,0,0,0,212,90.94Z" }, null, -1), k$1 = [
  Z$1
], w$1 = { key: 1 }, C$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M224,120a95.55,95.55,0,0,1-56-18v54a68,68,0,0,1-136,0c0-33.46,24.17-62.33,56-68v42.69A28,28,0,1,0,128,156V24h40a56,56,0,0,0,56,56Z",
  opacity: "0.2"
}, null, -1), M$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z" }, null, -1), x$1 = [
  C$1,
  M$1
], S$1 = { key: 2 }, z$1 = /* @__PURE__ */ createElementVNode("path", { d: "M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z" }, null, -1), H$1 = [
  z$1
], B$1 = { key: 3 }, N$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,74a50.06,50.06,0,0,1-50-50,6,6,0,0,0-6-6H128a6,6,0,0,0-6,6V156a22,22,0,1,1-31.43-19.89A6,6,0,0,0,94,130.69V88a6,6,0,0,0-7-5.91C52.2,88.28,26,120.05,26,156a74,74,0,0,0,148,0V112.93A101.28,101.28,0,0,0,224,126a6,6,0,0,0,6-6V80A6,6,0,0,0,224,74Zm-6,39.8a89.13,89.13,0,0,1-46.5-16.69A6,6,0,0,0,162,102v54a62,62,0,0,1-124,0c0-27.72,18.47-52.48,44-60.38v31.53A34,34,0,1,0,134,156V30h28.29A62.09,62.09,0,0,0,218,85.71Z" }, null, -1), b$1 = [
  N$1
], E$1 = { key: 4 }, P$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z" }, null, -1), W$1 = [
  P$1
], $$1 = { key: 5 }, j$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,76a52.06,52.06,0,0,1-52-52,4,4,0,0,0-4-4H128a4,4,0,0,0-4,4V156a24,24,0,1,1-34.28-21.69A4,4,0,0,0,92,130.69V88a4,4,0,0,0-4.7-3.94C53.49,90.08,28,121,28,156a72,72,0,0,0,144,0V109.44A99.26,99.26,0,0,0,224,124a4,4,0,0,0,4-4V80A4,4,0,0,0,224,76Zm-4,39.92a91.32,91.32,0,0,1-49.66-17.18A4,4,0,0,0,164,102v54a64,64,0,0,1-128,0c0-29.52,20.32-55.79,48-63v35.31A32,32,0,1,0,132,156V28h32.13A60.11,60.11,0,0,0,220,83.87Z" }, null, -1), L = [
  j$1
], T = {
  name: "PhTiktokLogo"
}, F$1 = /* @__PURE__ */ defineComponent({
  ...T,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(r) {
    const s = r, d = inject("weight", "regular"), h = inject("size", "1em"), _ = inject("color", "currentColor"), A2 = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : d;
    }), l = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : h;
    }), V2 = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : _;
    }), u = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : A2 ? "scale(-1, 1)" : void 0);
    return (c, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: V2.value,
      transform: u.value
    }, c.$attrs), [
      renderSlot(c.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", f$1, k$1)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", w$1, x$1)) : a.value === "fill" ? (openBlock(), createElementBlock("g", S$1, H$1)) : a.value === "light" ? (openBlock(), createElementBlock("g", B$1, b$1)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E$1, W$1)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $$1, L)) : createCommentVNode("", true)
    ], 16, y));
  }
});
const f = ["width", "height", "fill", "transform"], w = { key: 0 }, M = /* @__PURE__ */ createElementVNode("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), k = [
  M
], Z = { key: 1 }, A = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
  opacity: "0.2"
}, null, -1), x = /* @__PURE__ */ createElementVNode("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), S = [
  A,
  x
], V = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), C = [
  z
], B = { key: 3 }, H = /* @__PURE__ */ createElementVNode("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), N = [
  H
], b = { key: 4 }, E = /* @__PURE__ */ createElementVNode("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), P = [
  E
], W = { key: 5 }, $ = /* @__PURE__ */ createElementVNode("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), j = [
  $
], X = {
  name: "PhX"
}, F = /* @__PURE__ */ defineComponent({
  ...X,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const a = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => {
      var _a;
      return (_a = a.weight) != null ? _a : c;
    }), i = computed(() => {
      var _a;
      return (_a = a.size) != null ? _a : _;
    }), p = computed(() => {
      var _a;
      return (_a = a.color) != null ? _a : h;
    }), L2 = computed(() => a.mirrored !== void 0 ? a.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: L2.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", w, k)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", Z, S)) : s.value === "fill" ? (openBlock(), createElementBlock("g", V, C)) : s.value === "light" ? (openBlock(), createElementBlock("g", B, N)) : s.value === "regular" ? (openBlock(), createElementBlock("g", b, P)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W, j)) : createCommentVNode("", true)
    ], 16, f));
  }
});
async function useMenus() {
  const repo = createPublicRepository("menus");
  const { data, pending, error, refresh } = await useAsyncData("gdcss-public-menus", () => repo.list(), { default: () => [] });
  const header = computed(() => [...data.value || []].filter((x2) => x2.location === "header" && x2.status === "active").sort((a, b2) => (a.order || 0) - (b2.order || 0)));
  const footer = computed(() => [...data.value || []].filter((x2) => x2.location === "footer" && x2.status === "active").sort((a, b2) => (a.order || 0) - (b2.order || 0)));
  return { menus: data, header, footer, pending, error, refresh };
}
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useThemeMode();
    const open = ref(false);
    const scrolled = ref(false);
    const route = useRoute$1();
    const { settings } = ([__temp, __restore] = withAsyncContext(() => useSiteSettings()), __temp = await __temp, __restore(), __temp);
    const { header: cmsHeaderMenus } = ([__temp, __restore] = withAsyncContext(() => useMenus()), __temp = await __temp, __restore(), __temp);
    const isHome = computed(() => route.path === "/" || route.path === "");
    const overlaysHero = computed(() => isHome.value && !scrolled.value && !open.value);
    const menuitems = computed(() => cmsHeaderMenus.value);
    const socialLinks = computed(() => Array.isArray(settings.value.socialLinks) ? settings.value.socialLinks.filter((item) => item.visible !== false && item.url) : []);
    const socialIcon = (platform = "") => ({ instagram: F$2, facebook: G$1, tiktok: F$1 })[String(platform).toLowerCase()] || F$2;
    const isActive = (item) => item.url === "/eventos/" ? route.path === "/eventos/" || route.path.startsWith("/eventos/") : route.path === item.url;
    watch(() => route.path, () => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$3;
      const _component_ThemeToggle = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="${ssrRenderClass([
              "site-navbar fixed top-0 left-0 right-0 z-50",
              { "site-navbar--hero": overlaysHero.value, "site-navbar--scrolled": scrolled.value }
            ])}"${_scopeId}><div class="${ssrRenderClass([
              "site-shell flex flex-col lg:flex-row justify-between items-center py-3.5 sm:py-4",
              { "site-navbar__content--hero": overlaysHero.value }
            ])}"${_scopeId}><div class="flex w-full lg:w-auto items-center justify-between"${_scopeId}><a href="/" class="shrink-0" aria-label="Logo Castel\xF5es"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "brand-logo-original transition-transform duration-300 hover:scale-105 w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem]",
              src: "/img/logotipo.webp",
              alt: "Logo GDCSS Castel\xF5es",
              width: "80",
              height: "80",
              sizes: "80px",
              preload: "",
              fetchpriority: "high"
            }, null, _parent2, _scopeId));
            _push2(`</a><div class="flex items-center gap-2 lg:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ThemeToggle, null, null, _parent2, _scopeId));
            _push2(`<button class="text-neutral-900 p-2 rounded-lg hover:bg-neutral-50 transition-colors"${ssrRenderAttr("aria-expanded", open.value)} aria-label="Menu"${_scopeId}>`);
            if (open.value) {
              _push2(ssrRenderComponent(unref(F), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(G), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            }
            _push2(`</button></div></div><nav class="${ssrRenderClass([open.value ? "block" : "hidden lg:block", "w-full lg:w-auto lg:flex lg:items-center"])}"${_scopeId}><ul class="flex flex-col items-center text-center lg:flex-row lg:gap-1 py-4 lg:py-0 border-t border-neutral-50 lg:border-0 mt-2 lg:mt-0"${_scopeId}><!--[-->`);
            ssrRenderList(menuitems.value, (item) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: item.url,
                target: item.target || "_self",
                rel: item.target === "_blank" ? "noopener noreferrer" : void 0,
                onClick: ($event) => open.value = false,
                "aria-current": isActive(item) ? "page" : void 0,
                class: [
                  "block lg:px-3 py-2.5 text-fluid-sm font-medium rounded-lg transition-colors duration-200",
                  isActive(item) ? "text-primary-900 bg-primary-50 lg:bg-transparent lg:border-b-2 lg:border-primary-800 lg:rounded-none" : "text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 lg:hover:bg-transparent"
                ]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul><div class="lg:hidden flex justify-center items-center pb-4 gap-5 w-full"${_scopeId}><!--[-->`);
            ssrRenderList(socialLinks.value, (social) => {
              _push2(`<a${ssrRenderAttr("href", social.url)}${ssrRenderAttr("aria-label", social.label || social.platform)} target="_blank" rel="noopener noreferrer" class="text-neutral-600 hover:text-primary-800 transition-colors"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(socialIcon(social.platform)), { class: "w-6 h-6" }, null), _parent2, _scopeId);
              _push2(`</a>`);
            });
            _push2(`<!--]--></div></nav><div class="hidden lg:flex items-center gap-3 shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ThemeToggle, null, null, _parent2, _scopeId));
            _push2(`<span class="h-5 w-px bg-neutral-200" aria-hidden="true"${_scopeId}></span><!--[-->`);
            ssrRenderList(socialLinks.value, (social) => {
              _push2(`<a${ssrRenderAttr("href", social.url)} target="_blank"${ssrRenderAttr("aria-label", social.label || social.platform)} class="text-neutral-600 hover:text-primary-800 transition-colors"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(socialIcon(social.platform)), { class: "w-5 h-5" }, null), _parent2, _scopeId);
              _push2(`</a>`);
            });
            _push2(`<!--]--></div></div></header>`);
          } else {
            return [
              createVNode("header", {
                class: [
                  "site-navbar fixed top-0 left-0 right-0 z-50",
                  { "site-navbar--hero": overlaysHero.value, "site-navbar--scrolled": scrolled.value }
                ]
              }, [
                createVNode("div", {
                  class: [
                    "site-shell flex flex-col lg:flex-row justify-between items-center py-3.5 sm:py-4",
                    { "site-navbar__content--hero": overlaysHero.value }
                  ]
                }, [
                  createVNode("div", { class: "flex w-full lg:w-auto items-center justify-between" }, [
                    createVNode("a", {
                      href: "/",
                      class: "shrink-0",
                      "aria-label": "Logo Castel\xF5es"
                    }, [
                      createVNode(_component_NuxtImg, {
                        class: "brand-logo-original transition-transform duration-300 hover:scale-105 w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem]",
                        src: "/img/logotipo.webp",
                        alt: "Logo GDCSS Castel\xF5es",
                        width: "80",
                        height: "80",
                        sizes: "80px",
                        preload: "",
                        fetchpriority: "high"
                      })
                    ]),
                    createVNode("div", { class: "flex items-center gap-2 lg:hidden" }, [
                      createVNode(_component_ThemeToggle),
                      createVNode("button", {
                        onClick: ($event) => open.value = !open.value,
                        class: "text-neutral-900 p-2 rounded-lg hover:bg-neutral-50 transition-colors",
                        "aria-expanded": open.value,
                        "aria-label": "Menu"
                      }, [
                        open.value ? (openBlock(), createBlock(unref(F), {
                          key: 0,
                          class: "w-6 h-6"
                        })) : (openBlock(), createBlock(unref(G), {
                          key: 1,
                          class: "w-6 h-6"
                        }))
                      ], 8, ["onClick", "aria-expanded"])
                    ])
                  ]),
                  createVNode("nav", {
                    class: ["w-full lg:w-auto lg:flex lg:items-center", open.value ? "block" : "hidden lg:block"]
                  }, [
                    createVNode("ul", { class: "flex flex-col items-center text-center lg:flex-row lg:gap-1 py-4 lg:py-0 border-t border-neutral-50 lg:border-0 mt-2 lg:mt-0" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(menuitems.value, (item) => {
                        return openBlock(), createBlock("li", {
                          key: `${item.url}-${item.label}`
                        }, [
                          createVNode(_component_NuxtLink, {
                            to: item.url,
                            target: item.target || "_self",
                            rel: item.target === "_blank" ? "noopener noreferrer" : void 0,
                            onClick: ($event) => open.value = false,
                            "aria-current": isActive(item) ? "page" : void 0,
                            class: [
                              "block lg:px-3 py-2.5 text-fluid-sm font-medium rounded-lg transition-colors duration-200",
                              isActive(item) ? "text-primary-900 bg-primary-50 lg:bg-transparent lg:border-b-2 lg:border-primary-800 lg:rounded-none" : "text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 lg:hover:bg-transparent"
                            ]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["to", "target", "rel", "onClick", "aria-current", "class"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "lg:hidden flex justify-center items-center pb-4 gap-5 w-full" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(socialLinks.value, (social) => {
                        return openBlock(), createBlock("a", {
                          key: social.platform,
                          href: social.url,
                          "aria-label": social.label || social.platform,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "text-neutral-600 hover:text-primary-800 transition-colors"
                        }, [
                          (openBlock(), createBlock(resolveDynamicComponent(socialIcon(social.platform)), { class: "w-6 h-6" }))
                        ], 8, ["href", "aria-label"]);
                      }), 128))
                    ])
                  ], 2),
                  createVNode("div", { class: "hidden lg:flex items-center gap-3 shrink-0" }, [
                    createVNode(_component_ThemeToggle),
                    createVNode("span", {
                      class: "h-5 w-px bg-neutral-200",
                      "aria-hidden": "true"
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(socialLinks.value, (social) => {
                      return openBlock(), createBlock("a", {
                        key: `desktop-${social.platform}`,
                        href: social.url,
                        target: "_blank",
                        "aria-label": social.label || social.platform,
                        class: "text-neutral-600 hover:text-primary-800 transition-colors"
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(socialIcon(social.platform)), { class: "w-5 h-5" }))
                      ], 8, ["href", "aria-label"]);
                    }), 128))
                  ])
                ], 2)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { settings } = ([__temp, __restore] = withAsyncContext(() => useSiteSettings()), __temp = await __temp, __restore(), __temp);
    const { footer: footerMenus } = ([__temp, __restore] = withAsyncContext(() => useMenus()), __temp = await __temp, __restore(), __temp);
    const socialLinks = computed(() => Array.isArray(settings.value.socialLinks) ? settings.value.socialLinks.filter((item) => item.visible !== false && item.url) : []);
    const socialIcon = (platform = "") => ({ instagram: F$2, facebook: G$1, tiktok: F$1 })[String(platform).toLowerCase()] || F$2;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer w-full mt-12 bg-surface border-t border-neutral-200 py-10 sm:py-12 text-neutral-900" }, _attrs))}><div class="site-shell"><hr class="border-t border-neutral-200 my-6 w-full mx-auto"><div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-8"><div class="flex flex-col h-full justify-start text-left"><h3 class="text-fluid-xl font-bold mb-1">${ssrInterpolate(unref(settings).footerAboutTitle || "Sobre")}</h3><div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div><p class="text-fluid-sm leading-relaxed text-neutral-600">${ssrInterpolate(unref(settings).footerAbout)}</p></div><div class="flex flex-col h-full justify-start text-left"><h3 class="text-fluid-xl font-bold mb-1">${ssrInterpolate(unref(settings).footerLinksTitle || "Links \xDAteis")}</h3><div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div><ul class="space-y-3 text-fluid-sm"><!--[-->`);
      ssrRenderList(unref(footerMenus), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.url,
          target: item.target || "_self",
          rel: item.target === "_blank" ? "noopener noreferrer" : void 0,
          class: "transition-colors duration-300 text-neutral-600 hover:text-secondary-800 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="flex flex-col h-full justify-start text-left"><h3 class="text-fluid-xl font-bold mb-1">${ssrInterpolate(unref(settings).footerSocialTitle || "Redes Sociais")}</h3><div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div><ul class="space-y-3 text-fluid-sm"><!--[-->`);
      ssrRenderList(unref(socialLinks), (social) => {
        _push(`<li><a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-neutral-600 hover:text-secondary-800 hover:underline transition-colors duration-300"${ssrRenderAttr("aria-label", `Aceder a ${social.label || social.platform}`)}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(socialIcon(social.platform)), { class: "w-6 h-6 fill-current" }, null), _parent);
        _push(`<span>${ssrInterpolate(social.label || social.platform)}</span></a></li>`);
      });
      _push(`<!--]--></ul></div><div class="flex flex-col h-full justify-start text-left"><h3 class="text-fluid-xl font-bold mb-1">${ssrInterpolate(unref(settings).footerContactTitle || "Contacto")}</h3><div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div>`);
      if (unref(settings).contactEmail) {
        _push(`<p class="text-fluid-sm leading-relaxed text-neutral-600"> Email:<br><a${ssrRenderAttr("href", `mailto:${unref(settings).contactEmail}`)} class="underline transition-colors duration-300 text-neutral-600 hover:text-secondary-800 hover:underline" aria-label="Clica aqui para mandar email">${ssrInterpolate(unref(settings).contactEmail)}</a></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><hr class="border-t border-neutral-200 my-6 w-full mx-auto"><p class="text-center text-fluid-xs text-neutral-600 mt-8"> Copyright \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(settings).clubName || "GDCSS Castel\xF5es")}. Todos os direitos reservados. </p><p class="text-center text-fluid-xs text-neutral-600 mt-1"> Feito por <a href="https://webcreaterpt.pt" target="_blank" rel="noopener" class="hover:text-secondary-800 hover:underline transition-colors duration-300 text-neutral-600" aria-label="Desenvolvedor do site"> Webcreaterpt </a></p></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isHome = computed(() => route.path === "/" || route.path === "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingNavbar = _sfc_main$2;
      const _component_LandingFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
      _push(`<main class="${ssrRenderClass([unref(isHome) ? "site-main--home" : "pt-20 sm:pt-24", "flex-grow pb-10 sm:pb-12"])}"><div class="site-shell">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CGYGv2tj.mjs.map
