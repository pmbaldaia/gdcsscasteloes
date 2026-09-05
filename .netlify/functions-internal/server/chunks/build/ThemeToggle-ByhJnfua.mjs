import __nuxt_component_0 from './Icon-jTnUEsFD.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { f as useThemeMode } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  props: {
    compact: { type: Boolean, default: true }
  },
  setup(__props) {
    const { isDark } = useThemeMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["theme-toggle", { "theme-toggle--compact": __props.compact }],
        "aria-label": unref(isDark) ? "Ativar modo claro" : "Ativar modo escuro",
        title: unref(isDark) ? "Modo claro" : "Modo escuro"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isDark) ? "lucide:sun" : "lucide:moon",
        size: "18"
      }, null, _parent));
      if (!__props.compact) {
        _push(`<span>${ssrInterpolate(unref(isDark) ? "Modo claro" : "Modo escuro")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ThemeToggle-ByhJnfua.mjs.map
