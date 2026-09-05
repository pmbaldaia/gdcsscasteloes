import { _ as __nuxt_component_0 } from './nuxt-link-CVE1ktMt.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './_virtual_public-DOyvwXYf.mjs';
import { F, G } from './PhInstagramLogo.vue-CfLhyFSS.mjs';
import { p as useError } from './server.mjs';
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
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const error2 = useError();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat relative text-neutral-900",
        style: { backgroundImage: "url(/campo/campo.webp)" }
      }, _attrs))} data-v-5b98e16e><div class="absolute inset-0 bg-black/50" data-v-5b98e16e></div><div class="relative z-10 max-w-md w-full bg-surface/90 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center" data-v-5b98e16e><div class="w-28 h-28 md:w-36 md:h-36 animate-bounce mb-6" data-v-5b98e16e><img${ssrRenderAttr("src", _imports_0)} alt="Bola de futebol" class="w-full h-full filter" data-v-5b98e16e></div><h1 class="text-fluid-hero font-extrabold mb-2" data-v-5b98e16e><span class="text-primary-700" data-v-5b98e16e>${(_b = ((_a = unref(error2)) == null ? void 0 : _a.statusCode) || "404") != null ? _b : ""}</span></h1><p class="text-fluid-2xl font-semibold mb-1" data-v-5b98e16e>P\xE1gina fora de jogo!</p><p class="text-neutral-600 text-fluid-base mb-8 max-w-xs px-4" data-v-5b98e16e>${ssrInterpolate(((_c = unref(error2)) == null ? void 0 : _c.statusMessage) || "Algo correu mal. Tenta novamente mais tarde.")}</p><div class="flex gap-6 w-full max-w-xs mb-6" data-v-5b98e16e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex-1 bg-secondary-800 text-white hover:bg-secondary-900 border border-secondary-900 rounded-full py-3 font-semibold transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voltar \xE0 p\xE1gina inicial `);
          } else {
            return [
              createTextVNode(" Voltar \xE0 p\xE1gina inicial ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center items-center gap-8 mt-2" data-v-5b98e16e><a href="https://www.instagram.com/gdcsscasteloes/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" data-v-5b98e16e>`);
      _push(ssrRenderComponent(unref(F), { class: "w-8 h-8" }, null, _parent));
      _push(`</a><a href="https://www.facebook.com/gdcscasteloes/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" data-v-5b98e16e>`);
      _push(ssrRenderComponent(unref(G), { class: "w-8 h-8" }, null, _parent));
      _push(`</a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b98e16e"]]);

export { error as default };
//# sourceMappingURL=error-DuTRn5m4.mjs.map
