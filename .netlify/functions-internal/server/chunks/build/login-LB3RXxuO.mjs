import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { f as useThemeMode, e as useAuth } from './server.mjs';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark } = useThemeMode();
    const username = ref("");
    const password = ref("");
    const pending = ref(false);
    const error = ref("");
    useAuth();
    useToast();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "auth-card" }, _attrs))}><img${ssrRenderAttr("src", unref(isDark) ? "/img/logotipo.webp" : "/img/logowbg.webp")} alt="GDCSS Castel\xF5es" class="brand-logo-original auth-logo"><p class="eyebrow">\xC1rea reservada</p><h1>GDCSS Castel\xF5es</h1><p>Inicia sess\xE3o para gerir os conte\xFAdos do site.</p><form class="auth-form"><label class="form-field"><span>Utilizador</span><input${ssrRenderAttr("value", unref(username))} type="text" autocomplete="username" required></label><label class="form-field"><span>Palavra-passe</span><input${ssrRenderAttr("value", unref(password))} type="password" autocomplete="current-password" required minlength="8"></label>`);
      if (unref(error)) {
        _push(`<p class="cms-alert cms-alert--danger">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="btn btn--primary"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}>${ssrInterpolate(unref(pending) ? "A entrar\u2026" : "Entrar")}</button></form></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-LB3RXxuO.mjs.map
