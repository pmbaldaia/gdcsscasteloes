import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-DAjZ4P2v.mjs';
import { _ as _sfc_main$2 } from './SiteImage-0fq-XTGy.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CVE1ktMt.mjs';
import { withAsyncContext, computed, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useEvents } from './useEvents-Bs4Fo9Gj.mjs';
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
import './imageFallback-Dlnrmqzg.mjs';
import './public.repository-zOMnXrxb.mjs';
import './asyncData-D54zHTjC.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { eventos: eventosOriginais } = ([__temp, __restore] = withAsyncContext(() => useEvents()), __temp = await __temp, __restore(), __temp);
    function parseDateBr(dataStr) {
      const [day, month, year] = dataStr.split("/").map(Number);
      return new Date(year, month - 1, day);
    }
    const hoje = /* @__PURE__ */ new Date();
    hoje.setHours(0, 0, 0, 0);
    const eventosFuturos = computed(
      () => eventosOriginais.value.filter((e) => parseDateBr(e.data) >= hoje).sort((a, b) => parseDateBr(a.data) - parseDateBr(b.data))
    );
    const eventosPassados = computed(
      () => eventosOriginais.value.filter((e) => parseDateBr(e.data) < hoje).sort((a, b) => parseDateBr(b.data) - parseDateBr(a.data)).map((e) => ({ ...e, passado: true }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$1;
      const _component_SiteImage = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col items-center"${_scopeId2}><span class="text-neutral-900"${_scopeId2}>Pr\xF3ximos Eventos</span><div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden"${_scopeId2}><div class="w-1/2 bg-secondary-500"${_scopeId2}></div><div class="w-1/2 bg-primary-700"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col items-center" }, [
                      createVNode("span", { class: "text-neutral-900" }, "Pr\xF3ximos Eventos"),
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
                  _push3(`<span class="text-neutral-600"${_scopeId2}> N\xE3o percas as nossas pr\xF3ximas festas e eventos! Vem divertir-te connosco! </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-neutral-600" }, " N\xE3o percas as nossas pr\xF3ximas festas e eventos! Vem divertir-te connosco! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mx-auto mt-12"${_scopeId}><!--[-->`);
            ssrRenderList(eventosFuturos.value, (evento) => {
              _push2(`<div class="card-surface overflow-hidden flex flex-col hover:shadow-card-hover transition-shadow duration-300"${_scopeId}><div class="w-full aspect-square overflow-hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SiteImage, {
                src: evento.imagem,
                alt: evento.nome,
                preset: "card",
                width: "480",
                height: "480",
                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px",
                loading: "lazy",
                decoding: "async",
                class: "w-full h-full object-cover"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="p-4 flex flex-col justify-between flex-1"${_scopeId}><div class="flex-1 flex flex-col"${_scopeId}><h2 class="text-fluid-xl font-bold text-neutral-900 mb-2 leading-snug min-h-[3rem]"${_scopeId}>${ssrInterpolate(evento.nome)}</h2><p class="text-fluid-sm text-neutral-600 mb-2"${_scopeId}><strong${_scopeId}>Data:</strong> ${ssrInterpolate(evento.data)}</p><p class="text-neutral-900 text-fluid-sm line-clamp-3 flex-grow"${_scopeId}>${ssrInterpolate(evento.descricao)}</p></div><div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/eventos/${evento.slug}`,
                class: "bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Saber mais \u2192 `);
                  } else {
                    return [
                      createTextVNode(" Saber mais \u2192 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]--></div>`);
            if (eventosPassados.value.length) {
              _push2(`<div class="w-full mx-auto mt-16"${_scopeId}><h3 class="text-fluid-lg font-semibold text-neutral-600 mb-6"${_scopeId}> Eventos Passados </h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(eventosPassados.value, (evento) => {
                _push2(`<div class="card-surface overflow-hidden flex flex-col opacity-80 grayscale-[30%]"${_scopeId}><div class="w-full aspect-square overflow-hidden"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_SiteImage, {
                  src: evento.imagem,
                  alt: evento.nome,
                  preset: "card",
                  width: "480",
                  height: "480",
                  sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px",
                  loading: "lazy",
                  decoding: "async",
                  class: "w-full h-full object-cover"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="p-4 flex flex-col justify-between flex-1"${_scopeId}><div class="flex-1 flex flex-col"${_scopeId}><h2 class="text-fluid-xl font-bold text-neutral-900 mb-2 leading-snug min-h-[3rem]"${_scopeId}>${ssrInterpolate(evento.nome)}</h2><p class="text-fluid-sm text-neutral-600 mb-2"${_scopeId}><strong${_scopeId}>Data:</strong> ${ssrInterpolate(evento.data)}</p><p class="text-neutral-900 text-fluid-sm line-clamp-3 flex-grow"${_scopeId}>${ssrInterpolate(evento.descricao)}</p></div><div class="mt-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/eventos/${evento.slug}`,
                  class: "bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Ver evento \u2192 `);
                    } else {
                      return [
                        createTextVNode(" Ver evento \u2192 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("span", { class: "text-neutral-900" }, "Pr\xF3ximos Eventos"),
                    createVNode("div", { class: "mt-5 w-32 h-px flex rounded-sm overflow-hidden" }, [
                      createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                      createVNode("div", { class: "w-1/2 bg-primary-700" })
                    ])
                  ])
                ]),
                desc: withCtx(() => [
                  createVNode("span", { class: "text-neutral-600" }, " N\xE3o percas as nossas pr\xF3ximas festas e eventos! Vem divertir-te connosco! ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mx-auto mt-12" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(eventosFuturos.value, (evento) => {
                  return openBlock(), createBlock("div", {
                    key: evento.slug,
                    class: "card-surface overflow-hidden flex flex-col hover:shadow-card-hover transition-shadow duration-300"
                  }, [
                    createVNode("div", { class: "w-full aspect-square overflow-hidden" }, [
                      createVNode(_component_SiteImage, {
                        src: evento.imagem,
                        alt: evento.nome,
                        preset: "card",
                        width: "480",
                        height: "480",
                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px",
                        loading: "lazy",
                        decoding: "async",
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", { class: "p-4 flex flex-col justify-between flex-1" }, [
                      createVNode("div", { class: "flex-1 flex flex-col" }, [
                        createVNode("h2", { class: "text-fluid-xl font-bold text-neutral-900 mb-2 leading-snug min-h-[3rem]" }, toDisplayString(evento.nome), 1),
                        createVNode("p", { class: "text-fluid-sm text-neutral-600 mb-2" }, [
                          createVNode("strong", null, "Data:"),
                          createTextVNode(" " + toDisplayString(evento.data), 1)
                        ]),
                        createVNode("p", { class: "text-neutral-900 text-fluid-sm line-clamp-3 flex-grow" }, toDisplayString(evento.descricao), 1)
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_component_NuxtLink, {
                          to: `/eventos/${evento.slug}`,
                          class: "bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Saber mais \u2192 ")
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              eventosPassados.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "w-full mx-auto mt-16"
              }, [
                createVNode("h3", { class: "text-fluid-lg font-semibold text-neutral-600 mb-6" }, " Eventos Passados "),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(eventosPassados.value, (evento) => {
                    return openBlock(), createBlock("div", {
                      key: evento.slug,
                      class: "card-surface overflow-hidden flex flex-col opacity-80 grayscale-[30%]"
                    }, [
                      createVNode("div", { class: "w-full aspect-square overflow-hidden" }, [
                        createVNode(_component_SiteImage, {
                          src: evento.imagem,
                          alt: evento.nome,
                          preset: "card",
                          width: "480",
                          height: "480",
                          sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px",
                          loading: "lazy",
                          decoding: "async",
                          class: "w-full h-full object-cover"
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "p-4 flex flex-col justify-between flex-1" }, [
                        createVNode("div", { class: "flex-1 flex flex-col" }, [
                          createVNode("h2", { class: "text-fluid-xl font-bold text-neutral-900 mb-2 leading-snug min-h-[3rem]" }, toDisplayString(evento.nome), 1),
                          createVNode("p", { class: "text-fluid-sm text-neutral-600 mb-2" }, [
                            createVNode("strong", null, "Data:"),
                            createTextVNode(" " + toDisplayString(evento.data), 1)
                          ]),
                          createVNode("p", { class: "text-neutral-900 text-fluid-sm line-clamp-3 flex-grow" }, toDisplayString(evento.descricao), 1)
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_component_NuxtLink, {
                            to: `/eventos/${evento.slug}`,
                            class: "bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ver evento \u2192 ")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/eventos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CzeIoVQQ.mjs.map
