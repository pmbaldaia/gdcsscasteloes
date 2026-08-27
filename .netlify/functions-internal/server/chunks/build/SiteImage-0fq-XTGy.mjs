import { _ as _sfc_main$1 } from './NuxtImg-BJb9P2Je.mjs';
import { defineComponent, ref, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as applyImageFallback } from './imageFallback-Dlnrmqzg.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "SiteImage",
  __ssrInlineRender: true,
  props: {
    src: { default: "" },
    alt: { default: "" },
    preset: {},
    fallback: {}
  },
  setup(__props) {
    const props = __props;
    const nativeImgRef = ref(null);
    const nuxtImgRef = ref(null);
    const managedUpload = computed(() => {
      const value = String(props.src || "");
      return value.startsWith("/uploads/") || value.includes("/uploads/");
    });
    function resolveImageElement(event) {
      var _a;
      if (event.target instanceof HTMLImageElement) {
        return event.target;
      }
      const element = managedUpload.value ? nativeImgRef.value : (_a = nuxtImgRef.value) == null ? void 0 : _a.$el;
      return element instanceof HTMLImageElement ? element : null;
    }
    function onImageError(event) {
      applyImageFallback(event, props.fallback, resolveImageElement(event));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      if (unref(managedUpload)) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "nativeImgRef",
          ref: nativeImgRef,
          src: __props.src || "",
          alt: __props.alt
        }, _ctx.$attrs, _attrs))}>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
          ref_key: "nuxtImgRef",
          ref: nuxtImgRef,
          src: __props.src || "",
          alt: __props.alt,
          preset: __props.preset
        }, _ctx.$attrs, { onError: onImageError }, _attrs), null, _parent));
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
//# sourceMappingURL=SiteImage-0fq-XTGy.mjs.map
