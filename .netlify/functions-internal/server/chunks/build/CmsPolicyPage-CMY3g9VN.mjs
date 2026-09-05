import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { u as useManagedPageContent, _ as _sfc_main$1 } from './CmsManagedPageHeader-cB3vskBP.mjs';
import { defineComponent, withAsyncContext, computed, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CmsPolicyPage",
  __ssrInlineRender: true,
  props: {
    pageSlug: {},
    fallbackTitle: {},
    fallbackDescription: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { blocks } = ([__temp, __restore] = withAsyncContext(() => useManagedPageContent(props.pageSlug)), __temp = await __temp, __restore(), __temp);
    const sections = computed(() => blocks.value.filter((b) => b.type === "policy-section"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_CmsManagedPageHeader = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CmsManagedPageHeader, {
              "page-slug": __props.pageSlug,
              "fallback-title": __props.fallbackTitle,
              "fallback-description": __props.fallbackDescription
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-8 text-fluid-lg text-neutral-600"${_scopeId}><!--[-->`);
            ssrRenderList(unref(sections), (section) => {
              var _a;
              _push2(`<section class="mb-6"${_scopeId}>`);
              if (section.title) {
                _push2(`<h3 class="text-fluid-xl font-semibold text-neutral-900 mb-3"${_scopeId}>${ssrInterpolate(section.title)}</h3>`);
              } else {
                _push2(`<!---->`);
              }
              if (section.content) {
                _push2(`<p class="whitespace-pre-line leading-relaxed"${_scopeId}>${ssrInterpolate(section.content)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if ((_a = section.items) == null ? void 0 : _a.length) {
                _push2(`<ul class="list-disc pl-6 mt-3 space-y-2"${_scopeId}><!--[-->`);
                ssrRenderList(section.items, (item, index) => {
                  _push2(`<li${_scopeId}>${ssrInterpolate(item)}</li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_CmsManagedPageHeader, {
                "page-slug": __props.pageSlug,
                "fallback-title": __props.fallbackTitle,
                "fallback-description": __props.fallbackDescription
              }, null, 8, ["page-slug", "fallback-title", "fallback-description"]),
              createVNode("div", { class: "mt-8 text-fluid-lg text-neutral-600" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(sections), (section) => {
                  var _a;
                  return openBlock(), createBlock("section", {
                    key: section.id,
                    class: "mb-6"
                  }, [
                    section.title ? (openBlock(), createBlock("h3", {
                      key: 0,
                      class: "text-fluid-xl font-semibold text-neutral-900 mb-3"
                    }, toDisplayString(section.title), 1)) : createCommentVNode("", true),
                    section.content ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "whitespace-pre-line leading-relaxed"
                    }, toDisplayString(section.content), 1)) : createCommentVNode("", true),
                    ((_a = section.items) == null ? void 0 : _a.length) ? (openBlock(), createBlock("ul", {
                      key: 2,
                      class: "list-disc pl-6 mt-3 space-y-2"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(section.items, (item, index) => {
                        return openBlock(), createBlock("li", {
                          key: `${section.id}-${index}`
                        }, toDisplayString(item), 1);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsPolicyPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CmsPolicyPage-CMY3g9VN.mjs.map
