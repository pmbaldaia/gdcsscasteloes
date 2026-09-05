import { _ as _sfc_main$1 } from './Sectionhead-DAjZ4P2v.mjs';
import { computed, defineComponent, withAsyncContext, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { c as createError, u as useHead } from './server.mjs';

async function useManagedPageContent(slug) {
  const pagesRepo = createPublicRepository("pages");
  const blocksRepo = createPublicRepository("contentBlocks");
  const [{ data: pages }, { data: allBlocks }] = await Promise.all([
    useAsyncData(`managed-pages-${slug}`, () => pagesRepo.list(), { default: () => [] }),
    useAsyncData(`managed-blocks-${slug}`, () => blocksRepo.list(), { default: () => [] })
  ]);
  const page = computed(() => pages.value.find((item) => item.slug === slug && item.status === "published") || null);
  const hasManagedPages = computed(() => pages.value.length > 0);
  const blocks = computed(() => allBlocks.value.filter((item) => item.pageSlug === slug && item.status === "published").sort((a, b) => (a.order || 0) - (b.order || 0)));
  const byKey = (key) => computed(() => blocks.value.find((item) => item.key === key) || null);
  const value = (key, field, fallback = "") => computed(() => {
    const row = blocks.value.find((item) => item.key === key);
    const result = row == null ? void 0 : row[field];
    return result === void 0 || result === null || result === "" ? fallback : result;
  });
  return { page, blocks, byKey, value, hasManagedPages };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CmsManagedPageHeader",
  __ssrInlineRender: true,
  props: {
    pageSlug: {},
    blockKey: { default: "header" },
    fallbackTitle: { default: "" },
    fallbackDescription: { default: "" }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { value, page, hasManagedPages } = ([__temp, __restore] = withAsyncContext(() => useManagedPageContent(props.pageSlug)), __temp = await __temp, __restore(), __temp);
    if (hasManagedPages.value && !page.value) throw createError({ statusCode: 404, statusMessage: "P\xE1gina n\xE3o encontrada" });
    useHead(() => {
      var _a, _b, _c, _d, _e;
      return { title: ((_a = page.value) == null ? void 0 : _a.seoTitle) || ((_b = page.value) == null ? void 0 : _b.title) || props.fallbackTitle, meta: [{ name: "description", content: ((_c = page.value) == null ? void 0 : _c.metaDescription) || props.fallbackDescription }, { name: "robots", content: ((_d = page.value) == null ? void 0 : _d.indexable) === false ? "noindex, nofollow" : "index, follow" }], link: ((_e = page.value) == null ? void 0 : _e.canonical) ? [{ rel: "canonical", href: page.value.canonical }] : [] };
    });
    const title = value(props.blockKey, "title", props.fallbackTitle);
    const description = value(props.blockKey, "content", props.fallbackDescription);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingSectionhead = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingSectionhead, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center"${_scopeId}><span class="text-neutral-900"${_scopeId}>${ssrInterpolate(unref(title))}</span><div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden"${_scopeId}><div class="w-1/2 bg-secondary-500"${_scopeId}></div><div class="w-1/2 bg-primary-700"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center" }, [
                createVNode("span", { class: "text-neutral-900" }, toDisplayString(unref(title)), 1),
                createVNode("div", { class: "mt-5 w-32 h-px flex rounded-sm overflow-hidden" }, [
                  createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                  createVNode("div", { class: "w-1/2 bg-primary-700" })
                ])
              ])
            ];
          }
        }),
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-neutral-600 whitespace-pre-line"${_scopeId}>${ssrInterpolate(unref(description))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-neutral-600 whitespace-pre-line" }, toDisplayString(unref(description)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsManagedPageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useManagedPageContent as u };
//# sourceMappingURL=CmsManagedPageHeader-cB3vskBP.mjs.map
