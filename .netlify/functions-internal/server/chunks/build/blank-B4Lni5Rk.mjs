import { _ as _sfc_main$1 } from './NuxtImg-BJb9P2Je.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen text-neutral-900 flex flex-col overflow-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/campo/campo.webp",
    alt: "",
    "aria-hidden": "true",
    width: "1920",
    height: "1080",
    sizes: "100vw",
    quality: "75",
    loading: "eager",
    fetchpriority: "high",
    class: "absolute inset-0 w-full h-full object-cover -z-20"
  }, null, _parent));
  _push(`<div class="absolute inset-0 bg-black/50 pointer-events-none -z-10"></div><div class="relative z-10 flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { blank as default };
//# sourceMappingURL=blank-B4Lni5Rk.mjs.map
