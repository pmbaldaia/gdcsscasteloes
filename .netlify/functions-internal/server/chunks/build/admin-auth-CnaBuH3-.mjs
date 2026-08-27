import { _ as _sfc_main$1 } from './ThemeToggle-CZIGUszT.mjs';
import { _ as _sfc_main$2 } from './admin-DxpH4sgA.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import './Icon-DhbMUx6q.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Dydvo-RC.mjs';
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
import './useToast-BJDEtn_Q.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin-auth",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThemeToggle = _sfc_main$1;
      const _component_CmsToasts = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "auth-shell" }, _attrs))}><div class="auth-theme-toggle">`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_CmsToasts, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin-auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-auth-CnaBuH3-.mjs.map
