import __nuxt_component_0 from './Icon-DhbMUx6q.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CmsPagination",
  __ssrInlineRender: true,
  props: {
    page: {},
    totalItems: {},
    pageSize: { default: 10 }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const totalPages = computed(() => Math.max(1, Math.ceil(props.totalItems / props.pageSize)));
    const currentPage = computed(() => Math.min(Math.max(1, props.page), totalPages.value));
    const start = computed(() => props.totalItems ? (currentPage.value - 1) * props.pageSize + 1 : 0);
    const end = computed(() => Math.min(currentPage.value * props.pageSize, props.totalItems));
    const visiblePages = computed(() => {
      const total = totalPages.value;
      const current = currentPage.value;
      const pages = /* @__PURE__ */ new Set([1, total, current - 1, current, current + 1]);
      return [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      if (__props.totalItems > __props.pageSize) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "cms-pagination",
          "aria-label": "Pagina\xE7\xE3o"
        }, _attrs))}><p class="cms-pagination__summary">${ssrInterpolate(unref(start))}\u2013${ssrInterpolate(unref(end))} de ${ssrInterpolate(__props.totalItems)}</p><div class="cms-pagination__controls"><button type="button" class="cms-pagination__button"${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} aria-label="P\xE1gina anterior">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-left",
          size: "16"
        }, null, _parent));
        _push(`</button><!--[-->`);
        ssrRenderList(unref(visiblePages), (pageNumber, index) => {
          _push(`<!--[-->`);
          if (index > 0 && pageNumber - unref(visiblePages)[index - 1] > 1) {
            _push(`<span class="cms-pagination__ellipsis"> \u2026 </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button type="button" class="${ssrRenderClass([{ "is-active": pageNumber === unref(currentPage) }, "cms-pagination__button"])}"${ssrRenderAttr("aria-current", pageNumber === unref(currentPage) ? "page" : void 0)}>${ssrInterpolate(pageNumber)}</button><!--]-->`);
        });
        _push(`<!--]--><button type="button" class="cms-pagination__button"${ssrIncludeBooleanAttr(unref(currentPage) === unref(totalPages)) ? " disabled" : ""} aria-label="P\xE1gina seguinte">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-right",
          size: "16"
        }, null, _parent));
        _push(`</button></div></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsPagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CmsPagination-Bu_Q-dyI.mjs.map
