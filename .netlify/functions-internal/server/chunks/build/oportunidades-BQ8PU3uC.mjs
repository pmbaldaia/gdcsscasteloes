import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { u as useManagedPageContent, _ as _sfc_main$1 } from './CmsManagedPageHeader-cB3vskBP.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CVE1ktMt.mjs';
import { withAsyncContext, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Sectionhead-DAjZ4P2v.mjs';
import './server.mjs';
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
import 'perfect-debounce';

async function useOpportunities() {
  const repo = createPublicRepository("opportunities");
  const { data } = await useAsyncData("gdcss-public-opportunities", () => repo.list(), { default: () => [] });
  return { opportunities: computed(() => [...data.value || []].sort((a, b) => (a.order || 0) - (b.order || 0))) };
}
const _sfc_main = {
  __name: "oportunidades",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { opportunities } = ([__temp, __restore] = withAsyncContext(() => useOpportunities()), __temp = await __temp, __restore(), __temp);
    const { value } = ([__temp, __restore] = withAsyncContext(() => useManagedPageContent("oportunidades")), __temp = await __temp, __restore(), __temp);
    const ctaText = value("contact-cta", "content", "Queres garantir o teu kit oficial ou esclarecer alguma d\xFAvida? Entra em contacto com a dire\xE7\xE3o.");
    const ctaItems = value("contact-cta", "items", ["Contactar Dire\xE7\xE3o|/contacto|primary"]);
    const ctaAction = computed(() => {
      var _a;
      const [label, url] = String(((_a = ctaItems.value) == null ? void 0 : _a[0]) || "Contactar Dire\xE7\xE3o|/contacto").split("|");
      return { label, url: url || "/contacto" };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_CmsManagedPageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CmsManagedPageHeader, {
              "page-slug": "oportunidades",
              "fallback-title": "Oportunidades Exclusivas para S\xF3cios",
              "fallback-description": "Garante j\xE1 o teu kit oficial do clube com condi\xE7\xF5es especiais nas cotas. Escolhe a op\xE7\xE3o que preferes."
            }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-4xl mx-auto mt-12 px-3 rounded-3xl bg-transparent"${_scopeId}><div class="w-full sm:px-0"${_scopeId}>`);
            if (unref(opportunities).length) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto rounded-xl bg-surface"${_scopeId}><!--[-->`);
              ssrRenderList(unref(opportunities), (item) => {
                _push2(`<div class="p-6 rounded-xl border border-neutral-200 text-center text-primary-700 transition flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:duration-300"${_scopeId}><p class="text-fluid-xl font-semibold tracking-wide mb-6"${_scopeId}>${ssrInterpolate(item.title)}</p><p class="text-fluid-4xl font-extrabold tracking-tight"${_scopeId}>${ssrInterpolate(item.price)}</p></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="card-surface p-8 text-center text-neutral-600"${_scopeId}>Neste momento n\xE3o existem oportunidades publicadas.</div>`);
            }
            _push2(`<div class="mt-12 text-center"${_scopeId}><p class="text-neutral-600 mb-6 text-fluid-lg"${_scopeId}>${ssrInterpolate(unref(ctaText))}</p>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(ctaAction).url,
              class: "bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-block text-center px-6 py-3 rounded font-semibold transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(ctaAction).label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(ctaAction).label), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(_component_CmsManagedPageHeader, {
                "page-slug": "oportunidades",
                "fallback-title": "Oportunidades Exclusivas para S\xF3cios",
                "fallback-description": "Garante j\xE1 o teu kit oficial do clube com condi\xE7\xF5es especiais nas cotas. Escolhe a op\xE7\xE3o que preferes."
              }),
              createVNode("div", { class: "max-w-4xl mx-auto mt-12 px-3 rounded-3xl bg-transparent" }, [
                createVNode("div", { class: "w-full sm:px-0" }, [
                  unref(opportunities).length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto rounded-xl bg-surface"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(opportunities), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.id,
                        class: "p-6 rounded-xl border border-neutral-200 text-center text-primary-700 transition flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:duration-300"
                      }, [
                        createVNode("p", { class: "text-fluid-xl font-semibold tracking-wide mb-6" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-fluid-4xl font-extrabold tracking-tight" }, toDisplayString(item.price), 1)
                      ]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "card-surface p-8 text-center text-neutral-600"
                  }, "Neste momento n\xE3o existem oportunidades publicadas.")),
                  createVNode("div", { class: "mt-12 text-center" }, [
                    createVNode("p", { class: "text-neutral-600 mb-6 text-fluid-lg" }, toDisplayString(unref(ctaText)), 1),
                    createVNode(_component_NuxtLink, {
                      to: unref(ctaAction).url,
                      class: "bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-block text-center px-6 py-3 rounded font-semibold transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(ctaAction).label), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/oportunidades.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=oportunidades-BQ8PU3uC.mjs.map
