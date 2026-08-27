import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as _sfc_main$2 } from './Sectionhead-DAjZ4P2v.mjs';
import __nuxt_component_0$1 from './Icon-DhbMUx6q.mjs';
import { withAsyncContext, computed, ref, watch, withCtx, createVNode, unref, toDisplayString, withDirectives, isRef, openBlock, createBlock, Fragment, renderList, vModelSelect, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './SiteImage-0fq-XTGy.mjs';
import { u as useGames } from './useGames-ClDAqFc-.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Dydvo-RC.mjs';
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
import './NuxtImg-BJb9P2Je.mjs';
import './imageFallback-Dlnrmqzg.mjs';
import './public.repository-zOMnXrxb.mjs';
import './asyncData-D54zHTjC.mjs';
import 'perfect-debounce';

const _sfc_main$1 = {
  __name: "SeasonNotice",
  __ssrInlineRender: true,
  props: {
    season: {
      type: String,
      default: "2026/2027"
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card-surface border-l-4 border-l-primary-800 px-6 py-8 sm:px-10 sm:py-10 max-w-2xl mx-auto text-center",
        role: "status"
      }, _attrs))}><p class="text-fluid-sm font-semibold uppercase tracking-wider text-primary-800 mb-3"> \xC9poca ${ssrInterpolate(__props.season)}</p><h2 class="text-fluid-2xl font-bold text-neutral-900 mb-4">${ssrInterpolate(__props.title)}</h2><p class="text-fluid-base text-neutral-600 leading-relaxed">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/SeasonNotice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "calendario",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { jornadas, teams } = ([__temp, __restore] = withAsyncContext(() => useGames()), __temp = await __temp, __restore(), __temp);
    const games = computed(
      () => Object.values(jornadas.value || {}).flat().sort(
        (a, b) => /* @__PURE__ */ new Date(`${a.date}T${a.time || "00:00"}`) - /* @__PURE__ */ new Date(`${b.date}T${b.time || "00:00"}`)
      )
    );
    const seasons = computed(
      () => [...new Set(games.value.map((game) => game.season).filter(Boolean))].sort((a, b) => {
        const yearA = Number(String(a).split("/")[0]) || 0;
        const yearB = Number(String(b).split("/")[0]) || 0;
        return yearB - yearA;
      })
    );
    const selectedSeason = ref(seasons.value[0] || "2025/2026");
    watch(
      seasons,
      (available) => {
        if (available.length && !available.includes(selectedSeason.value)) {
          selectedSeason.value = available[0];
        }
      },
      { immediate: true }
    );
    const filteredGames = computed(
      () => games.value.filter((game) => game.season === selectedSeason.value)
    );
    const teamLogo = (name) => {
      var _a, _b;
      return ((_b = (_a = teams.value) == null ? void 0 : _a.find((team) => team.name === name)) == null ? void 0 : _b.logo) || "/img/logowbg.webp";
    };
    const formatDate = (value) => {
      const date = /* @__PURE__ */ new Date(`${value}T00:00:00`);
      return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString("pt-PT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    };
    const gameStatus = (status) => ({
      finished: "Terminado",
      scheduled: "Agendado",
      cancelled: "Cancelado",
      postponed: "Adiado",
      draft: "Rascunho"
    })[status] || "Agendado";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$1;
      const _component_LandingSeasonNotice = _sfc_main$1;
      const _component_SiteImage = _sfc_main$3;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col items-center"${_scopeId2}><span class="text-neutral-900"${_scopeId2}>Calend\xE1rio</span><div class="mt-5 flex h-px w-32 overflow-hidden rounded-sm"${_scopeId2}><div class="w-1/2 bg-secondary-500"${_scopeId2}></div><div class="w-1/2 bg-primary-700"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col items-center" }, [
                      createVNode("span", { class: "text-neutral-900" }, "Calend\xE1rio"),
                      createVNode("div", { class: "mt-5 flex h-px w-32 overflow-hidden rounded-sm" }, [
                        createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                        createVNode("div", { class: "w-1/2 bg-primary-700" })
                      ])
                    ])
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-neutral-600"${_scopeId2}> Consulta o calend\xE1rio oficial de jogos do clube por \xE9poca. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-neutral-600" }, " Consulta o calend\xE1rio oficial de jogos do clube por \xE9poca. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mx-auto mt-10 mb-16 w-full max-w-5xl"${_scopeId}><div class="mb-7 flex flex-col gap-4 rounded-xl border border-neutral-200 bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between"${_scopeId}><div${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600"${_scopeId}> Calend\xE1rio </p><h2 class="mt-1 text-xl font-bold text-neutral-900"${_scopeId}> \xC9poca ${ssrInterpolate(unref(selectedSeason))}</h2></div><div class="flex flex-col gap-3 sm:flex-row sm:items-center md:justify-end"${_scopeId}><span class="inline-flex w-fit items-center rounded-full bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-600"${_scopeId}>${ssrInterpolate(unref(filteredGames).length)} ${ssrInterpolate(unref(filteredGames).length === 1 ? "jogo" : "jogos")}</span><label class="relative block min-w-[190px]"${_scopeId}><span class="sr-only"${_scopeId}>Selecionar \xE9poca</span><select class="w-full appearance-none rounded-lg border border-neutral-200 bg-surface px-4 py-2.5 pr-10 text-sm font-semibold text-neutral-900 outline-none transition focus:border-primary-700 focus:ring-2 focus:ring-primary-700 focus:ring-opacity-10"${_scopeId}><!--[-->`);
            ssrRenderList(unref(seasons), (season) => {
              _push2(`<option${ssrRenderAttr("value", season)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedSeason)) ? ssrLooseContain(unref(selectedSeason), season) : ssrLooseEqual(unref(selectedSeason), season)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(season)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-down",
              class: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600",
              size: "17"
            }, null, _parent2, _scopeId));
            _push2(`</label></div></div>`);
            if (!unref(filteredGames).length) {
              _push2(ssrRenderComponent(_component_LandingSeasonNotice, {
                season: unref(selectedSeason),
                title: "Calend\xE1rio em prepara\xE7\xE3o",
                description: "O calend\xE1rio ser\xE1 disponibilizado assim que existirem jogos publicados para esta \xE9poca."
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(filteredGames), (game) => {
                var _a, _b, _c, _d, _e, _f;
                _push2(`<article class="card-surface grid gap-4 p-5 md:grid-cols-[160px_1fr_110px] md:items-center"${_scopeId}><div${_scopeId}><strong class="text-neutral-900"${_scopeId}>${ssrInterpolate(game.jornada)}</strong><p class="text-sm text-neutral-600"${_scopeId}>${ssrInterpolate(formatDate(game.date))} \xB7 ${ssrInterpolate(game.time || "\u2014")}</p></div><div class="flex items-center justify-center gap-5"${_scopeId}><div class="flex flex-1 items-center justify-end gap-3 text-right"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_a = game.teams) == null ? void 0 : _a[0])}</span>`);
                _push2(ssrRenderComponent(_component_SiteImage, {
                  src: teamLogo((_b = game.teams) == null ? void 0 : _b[0]),
                  alt: `Logo ${((_c = game.teams) == null ? void 0 : _c[0]) || ""}`,
                  preset: "badge",
                  fallback: "/img/logowbg.webp",
                  class: "brand-logo-original h-12 w-12 object-contain",
                  loading: "lazy"
                }, null, _parent2, _scopeId));
                _push2(`</div><strong${_scopeId}>vs</strong><div class="flex flex-1 items-center gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_SiteImage, {
                  src: teamLogo((_d = game.teams) == null ? void 0 : _d[1]),
                  alt: `Logo ${((_e = game.teams) == null ? void 0 : _e[1]) || ""}`,
                  preset: "badge",
                  fallback: "/img/logowbg.webp",
                  class: "brand-logo-original h-12 w-12 object-contain",
                  loading: "lazy"
                }, null, _parent2, _scopeId));
                _push2(`<span class="font-semibold"${_scopeId}>${ssrInterpolate((_f = game.teams) == null ? void 0 : _f[1])}</span></div></div><div class="text-center md:text-right"${_scopeId}><span class="inline-flex rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600"${_scopeId}>${ssrInterpolate(gameStatus(game.status))}</span></div></article>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("span", { class: "text-neutral-900" }, "Calend\xE1rio"),
                    createVNode("div", { class: "mt-5 flex h-px w-32 overflow-hidden rounded-sm" }, [
                      createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                      createVNode("div", { class: "w-1/2 bg-primary-700" })
                    ])
                  ])
                ]),
                desc: withCtx(() => [
                  createVNode("span", { class: "text-neutral-600" }, " Consulta o calend\xE1rio oficial de jogos do clube por \xE9poca. ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "mx-auto mt-10 mb-16 w-full max-w-5xl" }, [
                createVNode("div", { class: "mb-7 flex flex-col gap-4 rounded-xl border border-neutral-200 bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600" }, " Calend\xE1rio "),
                    createVNode("h2", { class: "mt-1 text-xl font-bold text-neutral-900" }, " \xC9poca " + toDisplayString(unref(selectedSeason)), 1)
                  ]),
                  createVNode("div", { class: "flex flex-col gap-3 sm:flex-row sm:items-center md:justify-end" }, [
                    createVNode("span", { class: "inline-flex w-fit items-center rounded-full bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-600" }, toDisplayString(unref(filteredGames).length) + " " + toDisplayString(unref(filteredGames).length === 1 ? "jogo" : "jogos"), 1),
                    createVNode("label", { class: "relative block min-w-[190px]" }, [
                      createVNode("span", { class: "sr-only" }, "Selecionar \xE9poca"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => isRef(selectedSeason) ? selectedSeason.value = $event : null,
                        class: "w-full appearance-none rounded-lg border border-neutral-200 bg-surface px-4 py-2.5 pr-10 text-sm font-semibold text-neutral-900 outline-none transition focus:border-primary-700 focus:ring-2 focus:ring-primary-700 focus:ring-opacity-10"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(seasons), (season) => {
                          return openBlock(), createBlock("option", {
                            key: season,
                            value: season
                          }, toDisplayString(season), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(selectedSeason)]
                      ]),
                      createVNode(_component_Icon, {
                        name: "lucide:chevron-down",
                        class: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600",
                        size: "17"
                      })
                    ])
                  ])
                ]),
                !unref(filteredGames).length ? (openBlock(), createBlock(_component_LandingSeasonNotice, {
                  key: 0,
                  season: unref(selectedSeason),
                  title: "Calend\xE1rio em prepara\xE7\xE3o",
                  description: "O calend\xE1rio ser\xE1 disponibilizado assim que existirem jogos publicados para esta \xE9poca."
                }, null, 8, ["season"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredGames), (game) => {
                    var _a, _b, _c, _d, _e, _f;
                    return openBlock(), createBlock("article", {
                      key: game.id,
                      class: "card-surface grid gap-4 p-5 md:grid-cols-[160px_1fr_110px] md:items-center"
                    }, [
                      createVNode("div", null, [
                        createVNode("strong", { class: "text-neutral-900" }, toDisplayString(game.jornada), 1),
                        createVNode("p", { class: "text-sm text-neutral-600" }, toDisplayString(formatDate(game.date)) + " \xB7 " + toDisplayString(game.time || "\u2014"), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-center gap-5" }, [
                        createVNode("div", { class: "flex flex-1 items-center justify-end gap-3 text-right" }, [
                          createVNode("span", { class: "font-semibold" }, toDisplayString((_a = game.teams) == null ? void 0 : _a[0]), 1),
                          createVNode(_component_SiteImage, {
                            src: teamLogo((_b = game.teams) == null ? void 0 : _b[0]),
                            alt: `Logo ${((_c = game.teams) == null ? void 0 : _c[0]) || ""}`,
                            preset: "badge",
                            fallback: "/img/logowbg.webp",
                            class: "brand-logo-original h-12 w-12 object-contain",
                            loading: "lazy"
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("strong", null, "vs"),
                        createVNode("div", { class: "flex flex-1 items-center gap-3" }, [
                          createVNode(_component_SiteImage, {
                            src: teamLogo((_d = game.teams) == null ? void 0 : _d[1]),
                            alt: `Logo ${((_e = game.teams) == null ? void 0 : _e[1]) || ""}`,
                            preset: "badge",
                            fallback: "/img/logowbg.webp",
                            class: "brand-logo-original h-12 w-12 object-contain",
                            loading: "lazy"
                          }, null, 8, ["src", "alt"]),
                          createVNode("span", { class: "font-semibold" }, toDisplayString((_f = game.teams) == null ? void 0 : _f[1]), 1)
                        ])
                      ]),
                      createVNode("div", { class: "text-center md:text-right" }, [
                        createVNode("span", { class: "inline-flex rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600" }, toDisplayString(gameStatus(game.status)), 1)
                      ])
                    ]);
                  }), 128))
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calendario.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=calendario-BzxFAIXD.mjs.map
