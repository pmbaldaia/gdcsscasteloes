import { _ as __nuxt_component_0 } from './nuxt-link-CVE1ktMt.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const pending = ref(false);
    const error = ref("");
    const success = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen px-4" }, _attrs))}><div class="w-full max-w-md p-8 card-surface"><h1 class="text-fluid-2xl font-bold mb-3 text-center">Solicitar acesso</h1><p class="text-center text-neutral-600 mb-6">Por seguran\xE7a, as contas do CMS s\xE3o criadas por um administrador.</p><form class="space-y-4"><input${ssrRenderAttr("value", unref(name))} required placeholder="Nome" class="w-full p-2 border rounded"><input${ssrRenderAttr("value", unref(email))} required type="email" placeholder="Email" class="w-full p-2 border rounded"><textarea rows="4" placeholder="Motivo do pedido (opcional)" class="w-full p-2 border rounded">${ssrInterpolate(unref(message))}</textarea>`);
      if (unref(error)) {
        _push(`<p class="text-secondary-800">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<p class="text-primary-700">${ssrInterpolate(unref(success))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="w-full btn-club-green"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}>${ssrInterpolate(unref(pending) ? "A enviar\u2026" : "Enviar pedido")}</button></form>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "block mt-4 text-center text-primary-700 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voltar ao login`);
          } else {
            return [
              createTextVNode("Voltar ao login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BUiC8r9_.mjs.map
