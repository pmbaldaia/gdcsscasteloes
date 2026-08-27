import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-DAjZ4P2v.mjs';
import { _ as _sfc_main$2 } from './SiteImage-pGk6Uodw.mjs';
import { withAsyncContext, ref, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './NuxtImg-BJb9P2Je.mjs';
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
import './imageFallback-CODQxCbd.mjs';
import 'perfect-debounce';

const numericId = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
};
const timestamp = (row) => {
  const value = (row == null ? void 0 : row.createdAt) || (row == null ? void 0 : row.updatedAt);
  const parsed = value ? new Date(value).getTime() : NaN;
  return Number.isFinite(parsed) ? parsed : numericId(row == null ? void 0 : row.id);
};
const sortGallery = (rows = []) => [...rows].sort((a, b) => {
  const orderA = Number(a == null ? void 0 : a.order);
  const orderB = Number(b == null ? void 0 : b.order);
  const hasOrderA = Number.isFinite(orderA) && orderA > 0;
  const hasOrderB = Number.isFinite(orderB) && orderB > 0;
  if (hasOrderA && hasOrderB && orderA !== orderB) return orderA - orderB;
  if (hasOrderA !== hasOrderB) return hasOrderA ? -1 : 1;
  return timestamp(b) - timestamp(a);
});
async function useGallery() {
  const repository = createPublicRepository("gallery");
  const { data: categories } = await useAsyncData(
    "gdcss-public-gallery",
    async () => sortGallery(await repository.list()),
    { default: () => [] }
  );
  return { categories };
}
const _sfc_main = {
  __name: "galeria",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { categories: importedCategories } = ([__temp, __restore] = withAsyncContext(() => useGallery()), __temp = await __temp, __restore(), __temp);
    const categories = importedCategories;
    const selectedImage = ref(null);
    const dialogRef = ref(null);
    const openImage = async (src) => {
      var _a;
      selectedImage.value = src;
      await nextTick();
      (_a = dialogRef.value) == null ? void 0 : _a.showModal();
    };
    const closeDialog = () => {
      var _a;
      (_a = dialogRef.value) == null ? void 0 : _a.close();
      selectedImage.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$1;
      const _component_SiteImage = _sfc_main$2;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col items-center"${_scopeId2}><span class="text-neutral-900"${_scopeId2}>Galeria</span><div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden"${_scopeId2}><div class="w-1/2 bg-secondary-500"${_scopeId2}></div><div class="w-1/2 bg-primary-700"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col items-center" }, [
                      createVNode("span", { class: "text-neutral-900" }, "Galeria"),
                      createVNode("div", { class: "mt-5 w-32 h-px flex rounded-sm overflow-hidden" }, [
                        createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                        createVNode("div", { class: "w-1/2 bg-primary-700" })
                      ])
                    ])
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-neutral-600"${_scopeId2}> Espreita alguns dos momentos que capt\xE1mos em imagens! </p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-neutral-600" }, " Espreita alguns dos momentos que capt\xE1mos em imagens! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="space-y-16 sm:space-y-20 mt-12"${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (category, index) => {
              _push2(`<section${_scopeId}><h2 class="text-fluid-2xl font-bold tracking-tight mb-10 text-center text-neutral-900"${_scopeId}>${ssrInterpolate(category.title)}</h2><div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"${_scopeId}><!--[-->`);
              ssrRenderList(category.images, (src, i) => {
                _push2(`<button type="button" class="cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300 h-48 w-full text-left"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_SiteImage, {
                  src,
                  alt: "Foto da galeria",
                  preset: "thumb",
                  width: "400",
                  height: "192",
                  sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px",
                  loading: "lazy",
                  decoding: "async",
                  class: "w-full h-full object-cover hover:scale-[1.02] transition-transform rounded-lg"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              });
              _push2(`<!--]--></div></section>`);
            });
            _push2(`<!--]--></div>`);
            if (selectedImage.value) {
              _push2(`<dialog class="dialog-zoom"${_scopeId}><div class="dialog-content"${_scopeId}><button aria-label="Fechar imagem" class="close-btn"${_scopeId}> \u2715 </button><img${ssrRenderAttr("src", selectedImage.value)} alt="Imagem ampliada" class="zoomed-image" loading="eager" decoding="async"${_scopeId}></div></dialog>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("span", { class: "text-neutral-900" }, "Galeria"),
                    createVNode("div", { class: "mt-5 w-32 h-px flex rounded-sm overflow-hidden" }, [
                      createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                      createVNode("div", { class: "w-1/2 bg-primary-700" })
                    ])
                  ])
                ]),
                desc: withCtx(() => [
                  createVNode("p", { class: "text-neutral-600" }, " Espreita alguns dos momentos que capt\xE1mos em imagens! ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "space-y-16 sm:space-y-20 mt-12" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category, index) => {
                  return openBlock(), createBlock("section", { key: index }, [
                    createVNode("h2", { class: "text-fluid-2xl font-bold tracking-tight mb-10 text-center text-neutral-900" }, toDisplayString(category.title), 1),
                    createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(category.images, (src, i) => {
                        return openBlock(), createBlock("button", {
                          key: `${index}-${i}`,
                          type: "button",
                          onClick: ($event) => openImage(src),
                          class: "cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300 h-48 w-full text-left"
                        }, [
                          createVNode(_component_SiteImage, {
                            src,
                            alt: "Foto da galeria",
                            preset: "thumb",
                            width: "400",
                            height: "192",
                            sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px",
                            loading: "lazy",
                            decoding: "async",
                            class: "w-full h-full object-cover hover:scale-[1.02] transition-transform rounded-lg"
                          }, null, 8, ["src"])
                        ], 8, ["onClick"]);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ]),
              selectedImage.value ? (openBlock(), createBlock("dialog", {
                key: 0,
                ref_key: "dialogRef",
                ref: dialogRef,
                class: "dialog-zoom",
                onCancel: withModifiers(closeDialog, ["prevent"]),
                onClick: withModifiers(closeDialog, ["self"])
              }, [
                createVNode("div", {
                  class: "dialog-content",
                  onClick: withModifiers(closeDialog, ["self"])
                }, [
                  createVNode("button", {
                    onClick: closeDialog,
                    "aria-label": "Fechar imagem",
                    class: "close-btn"
                  }, " \u2715 "),
                  createVNode("img", {
                    src: selectedImage.value,
                    alt: "Imagem ampliada",
                    class: "zoomed-image",
                    loading: "eager",
                    decoding: "async",
                    onClick: withModifiers(() => {
                    }, ["stop"])
                  }, null, 8, ["src", "onClick"])
                ])
              ], 544)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galeria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=galeria-D-urv8mV.mjs.map
