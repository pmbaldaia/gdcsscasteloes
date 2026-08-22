import { _ as _sfc_main$1 } from './NuxtImg-BJb9P2Je.mjs';
import { defineComponent, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "SiteImage",
  __ssrInlineRender: true,
  props: {
    src: { default: "" },
    alt: { default: "" },
    preset: {}
  },
  setup(__props) {
    const props = __props;
    const managedUpload = computed(() => {
      const value = String(props.src || "");
      return value.startsWith("/uploads/") || value.includes("/uploads/");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      if (unref(managedUpload)) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          src: __props.src || "",
          alt: __props.alt
        }, _ctx.$attrs, _attrs))}>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
          src: __props.src || "",
          alt: __props.alt,
          preset: __props.preset
        }, _ctx.$attrs, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SiteImage-DHN0p5DB.mjs.map
