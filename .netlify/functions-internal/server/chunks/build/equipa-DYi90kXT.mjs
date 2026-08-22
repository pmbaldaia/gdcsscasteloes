import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-DAjZ4P2v.mjs';
import { withAsyncContext, ref, computed, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, withKeys, withModifiers, createCommentVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

async function useTeamStructure() {
  const boardRepo = createPublicRepository("board");
  const staffRepo = createPublicRepository("staff");
  const playersRepo = createPublicRepository("players");
  const [{ data: board }, { data: equipaTecnica }, { data: plantel }] = await Promise.all([
    useAsyncData("gdcss-public-board", () => boardRepo.list(), { default: () => [] }),
    useAsyncData("gdcss-public-staff", () => staffRepo.list(), { default: () => [] }),
    useAsyncData("gdcss-public-players", () => playersRepo.list(), { default: () => [] })
  ]);
  return {
    assembleiaGeral: computed(() => (board.value || []).filter((x) => x.group === "Assembleia Geral")),
    direcao: computed(() => (board.value || []).filter((x) => x.group === "Dire\xE7\xE3o")),
    conselhoFiscal: computed(() => (board.value || []).filter((x) => x.group === "Conselho Fiscal")),
    equipaTecnica,
    plantel
  };
}
const season = "2026/2027";
const fallbackImage = "/equipa/default.webp";
const _sfc_main = {
  __name: "equipa",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { assembleiaGeral, direcao, conselhoFiscal, equipaTecnica, plantel } = ([__temp, __restore] = withAsyncContext(() => useTeamStructure()), __temp = await __temp, __restore(), __temp);
    const isEquipaRevealed = (item) => (item == null ? void 0 : item.status) !== "draft" && (!(item == null ? void 0 : item.publishedAt) || new Date(item.publishedAt).getTime() <= Date.now());
    const selectedImage = ref(null);
    const dialogRef = ref(null);
    const equipaTecnicaVisivel = computed(
      () => equipaTecnica.value.filter((membro) => isEquipaRevealed(membro))
    );
    const plantelVisivel = computed(
      () => plantel.value.filter((jogador) => isEquipaRevealed(jogador))
    );
    async function openImage(src) {
      var _a;
      selectedImage.value = src;
      await nextTick();
      (_a = dialogRef.value) == null ? void 0 : _a.showModal();
    }
    function closeDialog() {
      var _a;
      (_a = dialogRef.value) == null ? void 0 : _a.close();
      selectedImage.value = null;
    }
    function formatarNome(nome) {
      const partes = nome.trim().split(" ");
      if (partes.length <= 2) return nome;
      return `${partes[0]} ${partes[partes.length - 1]}`;
    }
    function onImgError(event) {
      const image = event.target;
      const fallback = image.dataset.fallback;
      if (!fallback || image.dataset.fallbackApplied === "1") return;
      image.dataset.fallbackApplied = "1";
      image.src = fallback;
    }
    function getImagem(src) {
      return src && src.trim() !== "" ? src : fallbackImage;
    }
    function getConselhoFiscalPosition(index) {
      if (index === 0) return "object-position: center top;";
      if (index === 1) return "object-position: center 30%;";
      return "object-position: center 45%;";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col items-center"${_scopeId2}><span class="text-neutral-900"${_scopeId2}>Equipa ${ssrInterpolate(season)}</span><div class="mt-5 flex h-px w-32 overflow-hidden rounded-sm"${_scopeId2}><div class="w-1/2 bg-primary-700"${_scopeId2}></div><div class="w-1/2 bg-secondary-500"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col items-center" }, [
                      createVNode("span", { class: "text-neutral-900" }, "Equipa " + toDisplayString(season)),
                      createVNode("div", { class: "mt-5 flex h-px w-32 overflow-hidden rounded-sm" }, [
                        createVNode("div", { class: "w-1/2 bg-primary-700" }),
                        createVNode("div", { class: "w-1/2 bg-secondary-500" })
                      ])
                    ])
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-neutral-600"${_scopeId2}> \xD3rg\xE3os sociais, equipa t\xE9cnica e plantel do G.D.C.S.S. Castel\xF5es </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-neutral-600" }, " \xD3rg\xE3os sociais, equipa t\xE9cnica e plantel do G.D.C.S.S. Castel\xF5es ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<section class="mt-12 w-full"${_scopeId}><div class="mb-12 text-center"${_scopeId}><span class="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700"${_scopeId}> \xD3rg\xE3os Sociais </span></div><section class="w-full"${_scopeId}><h2 class="mb-6 text-center text-2xl font-bold text-neutral-900"${_scopeId}> Assembleia Geral </h2><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(assembleiaGeral), (membro) => {
              _push2(`<div class="card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"${_scopeId}><img${ssrRenderAttr("src", getImagem(membro.img))}${ssrRenderAttr("alt", formatarNome(membro.nome))}${ssrRenderAttr("data-fallback", fallbackImage)} class="h-96 w-full rounded-t-xl object-cover"${_scopeId}><div class="mt-4 flex flex-1 flex-col justify-end px-4 pb-4"${_scopeId}><p class="text-xl font-semibold text-neutral-900"${_scopeId}>${ssrInterpolate(formatarNome(membro.nome))}</p><p class="text-neutral-600"${_scopeId}>${ssrInterpolate(membro.funcao)}</p></div></div>`);
            });
            _push2(`<!--]--></div></section><section class="mt-16 w-full"${_scopeId}><h2 class="mb-6 text-center text-2xl font-bold text-neutral-900"${_scopeId}> Dire\xE7\xE3o </h2><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(direcao), (membro) => {
              _push2(`<div class="card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"${_scopeId}><img${ssrRenderAttr("src", getImagem(membro.img))}${ssrRenderAttr("alt", formatarNome(membro.nome))}${ssrRenderAttr("data-fallback", fallbackImage)} class="h-96 w-full rounded-t-xl object-cover"${_scopeId}><div class="mt-4 flex flex-1 flex-col justify-end px-4 pb-4"${_scopeId}><p class="text-xl font-semibold text-neutral-900"${_scopeId}>${ssrInterpolate(formatarNome(membro.nome))}</p><p class="text-neutral-600"${_scopeId}>${ssrInterpolate(membro.funcao)}</p></div></div>`);
            });
            _push2(`<!--]--></div></section><section class="mt-16 w-full"${_scopeId}><h2 class="mb-6 text-center text-2xl font-bold text-neutral-900"${_scopeId}> Conselho Fiscal </h2><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(conselhoFiscal), (membro, index) => {
              _push2(`<div class="card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"${_scopeId}><img${ssrRenderAttr("src", getImagem(membro.img))}${ssrRenderAttr("alt", formatarNome(membro.nome))}${ssrRenderAttr("data-fallback", fallbackImage)} class="h-96 w-full rounded-t-xl object-cover" style="${ssrRenderStyle(getConselhoFiscalPosition(index))}"${_scopeId}><div class="mt-4 flex flex-1 flex-col justify-end px-4 pb-4"${_scopeId}><p class="text-xl font-semibold text-neutral-900"${_scopeId}>${ssrInterpolate(formatarNome(membro.nome))}</p><p class="text-neutral-600"${_scopeId}>${ssrInterpolate(membro.funcao)}</p></div></div>`);
            });
            _push2(`<!--]--></div></section></section><section class="mt-20 mb-16 w-full"${_scopeId}><div class="mb-12 text-center"${_scopeId}><span class="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700"${_scopeId}> Estrutura Desportiva </span></div><section id="equipa-tecnica" class="w-full scroll-mt-28"${_scopeId}><h2 class="mb-6 text-center text-2xl font-bold text-neutral-900"${_scopeId}> Equipa T\xE9cnica </h2><div class="grid grid-cols-1 gap-4 md:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(equipaTecnicaVisivel), (membro) => {
              _push2(`<div class="card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-neutral-50 p-2 transition-shadow hover:shadow-lg" role="button" tabindex="0"${_scopeId}><img${ssrRenderAttr("src", getImagem(membro.img))} alt="Membro da equipa t\xE9cnica"${ssrRenderAttr("data-fallback", fallbackImage)} class="h-auto w-full object-contain"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></section><section id="plantel" class="mt-16 w-full scroll-mt-28"${_scopeId}><h2 class="mb-6 text-center text-2xl font-bold text-neutral-900"${_scopeId}> Plantel </h2><div class="grid grid-cols-1 gap-4 md:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(plantelVisivel), (jogador) => {
              _push2(`<div class="card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-neutral-50 p-2 transition-shadow hover:shadow-lg" role="button" tabindex="0"${_scopeId}><img${ssrRenderAttr("src", getImagem(jogador.img))} alt="Jogador do plantel"${ssrRenderAttr("data-fallback", fallbackImage)} class="h-auto w-full object-contain"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></section></section>`);
            if (unref(selectedImage)) {
              _push2(`<dialog class="dialog-zoom"${_scopeId}><div class="dialog-content"${_scopeId}><button type="button" aria-label="Fechar imagem" class="close-btn"${_scopeId}> \u2715 </button><img${ssrRenderAttr("src", unref(selectedImage))} alt="Imagem ampliada" class="zoomed-image"${_scopeId}></div></dialog>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("span", { class: "text-neutral-900" }, "Equipa " + toDisplayString(season)),
                    createVNode("div", { class: "mt-5 flex h-px w-32 overflow-hidden rounded-sm" }, [
                      createVNode("div", { class: "w-1/2 bg-primary-700" }),
                      createVNode("div", { class: "w-1/2 bg-secondary-500" })
                    ])
                  ])
                ]),
                desc: withCtx(() => [
                  createVNode("span", { class: "text-neutral-600" }, " \xD3rg\xE3os sociais, equipa t\xE9cnica e plantel do G.D.C.S.S. Castel\xF5es ")
                ]),
                _: 1
              }),
              createVNode("section", { class: "mt-12 w-full" }, [
                createVNode("div", { class: "mb-12 text-center" }, [
                  createVNode("span", { class: "text-sm font-semibold uppercase tracking-[0.25em] text-primary-700" }, " \xD3rg\xE3os Sociais ")
                ]),
                createVNode("section", { class: "w-full" }, [
                  createVNode("h2", { class: "mb-6 text-center text-2xl font-bold text-neutral-900" }, " Assembleia Geral "),
                  createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(assembleiaGeral), (membro) => {
                      return openBlock(), createBlock("div", {
                        key: membro.nome,
                        class: "card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"
                      }, [
                        createVNode("img", {
                          src: getImagem(membro.img),
                          alt: formatarNome(membro.nome),
                          "data-fallback": fallbackImage,
                          class: "h-96 w-full rounded-t-xl object-cover",
                          onError: onImgError
                        }, null, 40, ["src", "alt"]),
                        createVNode("div", { class: "mt-4 flex flex-1 flex-col justify-end px-4 pb-4" }, [
                          createVNode("p", { class: "text-xl font-semibold text-neutral-900" }, toDisplayString(formatarNome(membro.nome)), 1),
                          createVNode("p", { class: "text-neutral-600" }, toDisplayString(membro.funcao), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "mt-16 w-full" }, [
                  createVNode("h2", { class: "mb-6 text-center text-2xl font-bold text-neutral-900" }, " Dire\xE7\xE3o "),
                  createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(direcao), (membro) => {
                      return openBlock(), createBlock("div", {
                        key: `${membro.nome}-${membro.funcao}`,
                        class: "card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"
                      }, [
                        createVNode("img", {
                          src: getImagem(membro.img),
                          alt: formatarNome(membro.nome),
                          "data-fallback": fallbackImage,
                          class: "h-96 w-full rounded-t-xl object-cover",
                          onError: onImgError
                        }, null, 40, ["src", "alt"]),
                        createVNode("div", { class: "mt-4 flex flex-1 flex-col justify-end px-4 pb-4" }, [
                          createVNode("p", { class: "text-xl font-semibold text-neutral-900" }, toDisplayString(formatarNome(membro.nome)), 1),
                          createVNode("p", { class: "text-neutral-600" }, toDisplayString(membro.funcao), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "mt-16 w-full" }, [
                  createVNode("h2", { class: "mb-6 text-center text-2xl font-bold text-neutral-900" }, " Conselho Fiscal "),
                  createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(conselhoFiscal), (membro, index) => {
                      return openBlock(), createBlock("div", {
                        key: membro.nome,
                        class: "card-surface flex min-h-[300px] flex-col items-center pb-2 text-center"
                      }, [
                        createVNode("img", {
                          src: getImagem(membro.img),
                          alt: formatarNome(membro.nome),
                          "data-fallback": fallbackImage,
                          class: "h-96 w-full rounded-t-xl object-cover",
                          style: getConselhoFiscalPosition(index),
                          onError: onImgError
                        }, null, 44, ["src", "alt"]),
                        createVNode("div", { class: "mt-4 flex flex-1 flex-col justify-end px-4 pb-4" }, [
                          createVNode("p", { class: "text-xl font-semibold text-neutral-900" }, toDisplayString(formatarNome(membro.nome)), 1),
                          createVNode("p", { class: "text-neutral-600" }, toDisplayString(membro.funcao), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("section", { class: "mt-20 mb-16 w-full" }, [
                createVNode("div", { class: "mb-12 text-center" }, [
                  createVNode("span", { class: "text-sm font-semibold uppercase tracking-[0.25em] text-primary-700" }, " Estrutura Desportiva ")
                ]),
                createVNode("section", {
                  id: "equipa-tecnica",
                  class: "w-full scroll-mt-28"
                }, [
                  createVNode("h2", { class: "mb-6 text-center text-2xl font-bold text-neutral-900" }, " Equipa T\xE9cnica "),
                  createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(equipaTecnicaVisivel), (membro) => {
                      return openBlock(), createBlock("div", {
                        key: membro.id,
                        class: "card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-neutral-50 p-2 transition-shadow hover:shadow-lg",
                        role: "button",
                        tabindex: "0",
                        onClick: ($event) => openImage(getImagem(membro.img)),
                        onKeydown: withKeys(($event) => openImage(getImagem(membro.img)), ["enter"])
                      }, [
                        createVNode("img", {
                          src: getImagem(membro.img),
                          alt: "Membro da equipa t\xE9cnica",
                          "data-fallback": fallbackImage,
                          class: "h-auto w-full object-contain",
                          onError: onImgError
                        }, null, 40, ["src"])
                      ], 40, ["onClick", "onKeydown"]);
                    }), 128))
                  ])
                ]),
                createVNode("section", {
                  id: "plantel",
                  class: "mt-16 w-full scroll-mt-28"
                }, [
                  createVNode("h2", { class: "mb-6 text-center text-2xl font-bold text-neutral-900" }, " Plantel "),
                  createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plantelVisivel), (jogador) => {
                      return openBlock(), createBlock("div", {
                        key: jogador.id,
                        class: "card-surface flex cursor-pointer items-center justify-center overflow-hidden bg-neutral-50 p-2 transition-shadow hover:shadow-lg",
                        role: "button",
                        tabindex: "0",
                        onClick: ($event) => openImage(getImagem(jogador.img)),
                        onKeydown: withKeys(($event) => openImage(getImagem(jogador.img)), ["enter"])
                      }, [
                        createVNode("img", {
                          src: getImagem(jogador.img),
                          alt: "Jogador do plantel",
                          "data-fallback": fallbackImage,
                          class: "h-auto w-full object-contain",
                          onError: onImgError
                        }, null, 40, ["src"])
                      ], 40, ["onClick", "onKeydown"]);
                    }), 128))
                  ])
                ])
              ]),
              unref(selectedImage) ? (openBlock(), createBlock("dialog", {
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
                    type: "button",
                    "aria-label": "Fechar imagem",
                    class: "close-btn",
                    onClick: closeDialog
                  }, " \u2715 "),
                  createVNode("img", {
                    src: unref(selectedImage),
                    alt: "Imagem ampliada",
                    class: "zoomed-image",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/equipa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=equipa-DYi90kXT.mjs.map
