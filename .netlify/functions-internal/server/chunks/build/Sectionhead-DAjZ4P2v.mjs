import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Sectionhead",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "center"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["site-section-head", { "text-center": __props.align === "center" }]
      }, _attrs))}><h1 class="text-fluid-4xl font-bold lg:tracking-tight">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(`Title`);
      }, _push, _parent);
      _push(`</h1><p class="text-fluid-lg mt-4 text-neutral-600">`);
      ssrRenderSlot(_ctx.$slots, "desc", {}, () => {
        _push(`Some description goes here`);
      }, _push, _parent);
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Sectionhead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Sectionhead-DAjZ4P2v.mjs.map
