import __nuxt_component_0 from './Icon-DhbMUx6q.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CmsToasts",
  __ssrInlineRender: true,
  setup(__props) {
    const { toasts } = useToast();
    const iconFor = (type) => ({
      success: "lucide:circle-check",
      error: "lucide:circle-alert",
      warning: "lucide:triangle-alert",
      info: "lucide:info"
    })[type] || "lucide:info";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="cms-toast-viewport" aria-live="polite" aria-atomic="false"><!--[-->`);
        ssrRenderList(unref(toasts), (toast) => {
          _push2(`<article class="${ssrRenderClass([[`cms-toast--${toast.type}`, { "is-leaving": toast.leaving }], "cms-toast"])}" role="status"><div class="cms-toast__icon">`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: iconFor(toast.type),
            size: "20"
          }, null, _parent));
          _push2(`</div><div class="cms-toast__content"><strong>${ssrInterpolate(toast.title)}</strong>`);
          if (toast.message) {
            _push2(`<p>${ssrInterpolate(toast.message)}</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><button type="button" class="cms-toast__close" aria-label="Fechar notifica\xE7\xE3o">`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            size: "17"
          }, null, _parent));
          _push2(`</button>`);
          if (toast.duration > 0) {
            _push2(`<span class="cms-toast__progress" style="${ssrRenderStyle({ animationDuration: `${toast.duration}ms` })}"></span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</article>`);
        });
        _push2(`<!--]--></div>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsToasts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=admin-DxpH4sgA.mjs.map
