import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CVE1ktMt.mjs';
import __nuxt_component_0$2 from './Icon-jTnUEsFD.mjs';
import { _ as _sfc_main$5 } from './Sectionhead-DAjZ4P2v.mjs';
import { _ as _sfc_main$6 } from './SiteImage-DbM39HNq.mjs';
import { defineComponent, withAsyncContext, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, mergeProps, ref, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderTeleport, ssrRenderSlot } from 'vue/server-renderer';
import { u as useGames } from './useGames-ClDAqFc-.mjs';
import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { u as useGallery } from './useGallery-BePHli7p.mjs';
import { c as createError, u as useHead } from './server.mjs';

const _sfc_main$4 = {
  __name: "Games",
  __ssrInlineRender: true,
  props: { title: { type: String, default: "Pr\xF3ximo Jogo" } },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { jornadas, teams } = ([__temp, __restore] = withAsyncContext(() => useGames()), __temp = await __temp, __restore(), __temp);
    function teamLogo(name) {
      var _a, _b;
      return ((_b = (_a = teams.value) == null ? void 0 : _a.find((team) => team.name === name)) == null ? void 0 : _b.logo) || "/img/logowbg.webp";
    }
    function parseGameDate(game) {
      return /* @__PURE__ */ new Date(`${game.date}T${game.time}:00`);
    }
    function formatDate(game) {
      const date = parseGameDate(game);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    function formatTime(game) {
      const date = parseGameDate(game);
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    }
    const now = /* @__PURE__ */ new Date();
    const nextGame = computed(() => {
      const allGames = Object.values(jornadas.value).flat().sort((a, b) => parseGameDate(a) - parseGameDate(b));
      return allGames.find((game) => parseGameDate(game) >= now) || null;
    });
    computed(
      () => nextGame.value && nextGame.value.id !== 4
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteImage = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto mt-10" }, _attrs))}>`);
      if (nextGame.value) {
        _push(`<div class="card-surface p-6 sm:p-8 text-center relative"><h3 class="text-fluid-2xl font-bold text-neutral-900 mb-3">${ssrInterpolate(props.title)}</h3><p class="text-fluid-lg text-neutral-600 mb-6 leading-relaxed"><span class="font-semibold">${ssrInterpolate(nextGame.value.jornada)}</span> \u2022 <span class="font-semibold">${ssrInterpolate(formatDate(nextGame.value))}</span> \xE0s <span class="font-semibold">${ssrInterpolate(formatTime(nextGame.value))}</span></p><div class="flex justify-center gap-12 items-center"><div class="flex flex-col items-center w-32">`);
        _push(ssrRenderComponent(_component_SiteImage, {
          src: teamLogo(nextGame.value.teams[0]),
          alt: `Logo ${nextGame.value.teams[0]}`,
          preset: "badge",
          fallback: "/img/logowbg.webp",
          width: "80",
          height: "80",
          sizes: "80px",
          loading: "lazy",
          class: "brand-logo-original w-20 h-20 object-contain mb-3"
        }, null, _parent));
        _push(`<p class="text-fluid-lg font-semibold text-neutral-900">${ssrInterpolate(nextGame.value.teams[0])}</p></div><span class="text-fluid-2xl font-extrabold text-neutral-900">vs</span><div class="flex flex-col items-center w-32">`);
        _push(ssrRenderComponent(_component_SiteImage, {
          src: teamLogo(nextGame.value.teams[1]),
          alt: `Logo ${nextGame.value.teams[1]}`,
          preset: "badge",
          fallback: "/img/logowbg.webp",
          width: "80",
          height: "80",
          sizes: "80px",
          loading: "lazy",
          class: "brand-logo-original w-20 h-20 object-contain mb-3"
        }, null, _parent));
        _push(`<p class="text-fluid-lg font-semibold text-neutral-900">${ssrInterpolate(nextGame.value.teams[1])}</p></div></div></div>`);
      } else {
        _push(`<div class="text-center text-neutral-600 py-10 text-fluid-xl"> \u{1F6AB} N\xE3o h\xE1 pr\xF3ximos jogos agendados. </div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Games.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
async function useSponsors() {
  const repo = createPublicRepository("sponsors");
  const { data: sponsors } = await useAsyncData("gdcss-public-sponsors", () => repo.list(), { default: () => [] });
  return { sponsors: computed(() => [...sponsors.value || []].sort((a, b) => (a.order || 0) - (b.order || 0))) };
}
const _sfc_main$3 = {
  __name: "Logos",
  __ssrInlineRender: true,
  props: { title: { type: String, default: "Patroc\xEDnios" } },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { sponsors } = ([__temp, __restore] = withAsyncContext(() => useSponsors()), __temp = await __temp, __restore(), __temp);
    const selectedSponsor = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteImage = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-24" }, _attrs))}><h2 class="text-neutral-900 text-fluid-3xl font-bold text-center tracking-tight">${ssrInterpolate(props.title)}</h2><div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mt-10 px-4"><!--[-->`);
      ssrRenderList(unref(sponsors), (sponsor, i) => {
        _push(`<button type="button"${ssrRenderAttr("aria-label", `Ampliar logo ${sponsor.alt}`)} class="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-800 rounded-lg">`);
        _push(ssrRenderComponent(_component_SiteImage, {
          src: sponsor.src,
          alt: sponsor.alt,
          class: ["object-contain h-[120px] w-full max-w-[160px] mx-auto transition-transform duration-300 hover:scale-110", {
            "bg-black rounded-lg": sponsor.alt === "CFDS",
            "p-2": sponsor.alt === "CFDS"
          }],
          format: "webp",
          sizes: "100px sm:120px md:160px",
          densities: "1x 2x",
          loading: "lazy",
          placeholder: "blur"
        }, null, _parent));
        _push(`</button>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (selectedSponsor.value) {
          _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"><button type="button" aria-label="Fechar imagem" class="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-secondary-800 text-lg font-bold text-white shadow-md transition-colors hover:bg-secondary-900"> \u2715 </button><img${ssrRenderAttr("src", selectedSponsor.value.src)}${ssrRenderAttr("alt", selectedSponsor.value.alt)} class="${ssrRenderClass([{
            "rounded-lg bg-black p-4": selectedSponsor.value.alt === "CFDS"
          }, "max-h-[88vh] max-w-[95vw] w-auto h-auto object-contain md:max-h-[90vh] md:max-w-[min(95vw,1600px)]"])}"></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Logos.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    href: {},
    size: { default: "lg" },
    block: { type: Boolean },
    styleName: { default: "primary" },
    className: {}
  },
  setup(__props) {
    const sizes = {
      lg: "px-5 py-2.5",
      md: "px-4 py-2"
    };
    const styles = {
      outline: "bg-surface border border-neutral-200 hover:border-primary-800 hover:text-primary-900 text-neutral-900 shadow-sm",
      primary: "bg-primary-800 text-white hover:bg-primary-950 border border-primary-800 shadow-sm",
      inverted: "bg-surface text-neutral-900 border border-neutral-200 shadow-sm hover:bg-neutral-50",
      muted: "bg-neutral-50 hover:bg-neutral-200 border border-transparent text-neutral-900"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: __props.href,
        class: [
          "rounded-lg text-center font-medium transition focus-visible:ring-2 ring-offset-2 ring-primary-700 ring-opacity-40",
          __props.block && "w-full",
          sizes[__props.size],
          styles[__props.styleName]
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Link.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Gallery",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { categories } = ([__temp, __restore] = withAsyncContext(() => useGallery()), __temp = await __temp, __restore(), __temp);
    const previewImages = computed(() => {
      const rows = Array.isArray(categories.value) ? categories.value : [];
      return rows.flatMap((category) => Array.isArray(category == null ? void 0 : category.images) ? category.images : []).filter(Boolean).slice(0, 3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteImage = _sfc_main$6;
      const _component_LandingLink = _sfc_main$2;
      if (previewImages.value.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-16" }, _attrs))}><h2 class="text-fluid-3xl font-bold text-center text-neutral-900"> Galeria de Momentos </h2><div class="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(previewImages.value, (src, index) => {
          _push(ssrRenderComponent(_component_SiteImage, {
            key: `${src}-${index}`,
            src,
            alt: `Imagem da galeria ${index + 1}`,
            preset: "thumb",
            width: "640",
            height: "256",
            sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
            loading: "lazy",
            decoding: "async",
            class: "w-full h-64 object-cover rounded-lg shadow-lg"
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="mt-6 text-center">`);
        _push(ssrRenderComponent(_component_LandingLink, {
          size: "lg",
          class: "bg-primary-900 text-white hover:bg-secondary-800 border border-primary-900 hover:border-secondary-900",
          href: "/galeria"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ver mais imagens `);
            } else {
              return [
                createTextVNode(" Ver mais imagens ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Gallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
async function usePublicCmsPage(slug) {
  const pagesRepo = createPublicRepository("pages");
  const blocksRepo = createPublicRepository("contentBlocks");
  const [{ data: pages }, { data: blocks }] = await Promise.all([
    useAsyncData(`cms-page-${slug}`, () => pagesRepo.list(), { default: () => [] }),
    useAsyncData(`cms-blocks-${slug}`, () => blocksRepo.list(), { default: () => [] })
  ]);
  const page = computed(() => pages.value.find((p) => p.slug === slug && p.status === "published"));
  const visibleBlocks = computed(() => blocks.value.filter((b) => b.pageSlug === slug && b.status === "published").sort((a, b) => (a.order || 0) - (b.order || 0)));
  return { page, blocks: visibleBlocks };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CmsPublicPageRenderer",
  __ssrInlineRender: true,
  props: {
    pageSlug: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { page, blocks } = ([__temp, __restore] = withAsyncContext(() => usePublicCmsPage(props.pageSlug)), __temp = await __temp, __restore(), __temp);
    if (!page.value) throw createError({ statusCode: 404, statusMessage: "P\xE1gina n\xE3o encontrada" });
    const parseAction = (raw, index = 0) => {
      const [label, url, rawStyle] = String(raw || "").split("|");
      return { label, url: url || "#", style: rawStyle === "secondary" ? "secondary" : rawStyle === "primary" ? "primary" : index === 0 ? "primary" : "secondary" };
    };
    const features = computed(() => blocks.value.filter((b) => b.type === "feature"));
    const normalBlocks = computed(() => blocks.value.filter((b) => b.type !== "feature"));
    useHead(() => {
      var _a, _b, _c, _d, _e;
      return { title: ((_a = page.value) == null ? void 0 : _a.seoTitle) || ((_b = page.value) == null ? void 0 : _b.title) || "GDCSS Castel\xF5es", meta: [{ name: "description", content: ((_c = page.value) == null ? void 0 : _c.metaDescription) || "" }, { name: "robots", content: ((_d = page.value) == null ? void 0 : _d.indexable) === false ? "noindex, nofollow" : "index, follow" }], link: ((_e = page.value) == null ? void 0 : _e.canonical) ? [{ rel: "canonical", href: page.value.canonical }] : [] };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      const _component_LandingSectionhead = _sfc_main$5;
      const _component_SiteImage = _sfc_main$6;
      const _component_LandingGames = _sfc_main$4;
      const _component_LandingLogos = _sfc_main$3;
      const _component_LandingGallery = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(normalBlocks), (block) => {
              var _a, _b;
              _push2(`<!--[-->`);
              if (block.type === "hero") {
                _push2(`<section class="home-hero" aria-labelledby="cms-home-hero-title"${_scopeId}><picture class="home-hero__media" aria-hidden="true"${_scopeId}>`);
                if (block.image) {
                  _push2(`<source media="(min-width: 768px)"${ssrRenderAttr("srcset", block.image)}${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<img${ssrRenderAttr("src", block.mobileImage || block.image || "/img/gdcss-casteloes-tarja.webp")} alt="" fetchpriority="high" decoding="async"${_scopeId}></picture><div class="home-hero__overlay" aria-hidden="true"${_scopeId}></div><div class="home-hero__content site-shell"${_scopeId}><div class="home-hero__copy"${_scopeId}><p class="home-hero__eyebrow"${_scopeId}>${ssrInterpolate(block.eyebrow)}</p><h1 id="cms-home-hero-title"${_scopeId}>${ssrInterpolate(block.title)}</h1><p class="home-hero__description"${_scopeId}>${ssrInterpolate(block.content)}</p>`);
                if ((_a = block.items) == null ? void 0 : _a.length) {
                  _push2(`<div class="home-hero__actions"${_scopeId}><!--[-->`);
                  ssrRenderList(block.items, (raw, index) => {
                    _push2(ssrRenderComponent(_component_NuxtLink, {
                      key: `${block.id}-${index}`,
                      to: parseAction(raw, index).url,
                      class: ["home-hero__button", parseAction(raw, index).style === "secondary" ? "home-hero__button--secondary" : "home-hero__button--primary"]
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(parseAction(raw, index).label)}`);
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "lucide:arrow-right",
                            size: "17"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createTextVNode(toDisplayString(parseAction(raw, index).label), 1),
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              size: "17"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><a class="home-hero__scroll" href="#conteudo-principal" aria-label="Ver mais conte\xFAdo"${_scopeId}><span${_scopeId}>Descobrir</span>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:chevron-down",
                  size: "20"
                }, null, _parent2, _scopeId));
                _push2(`</a></div></section>`);
              } else if (block.type === "section-header" && block.key === "features-header") {
                _push2(`<section id="conteudo-principal"${_scopeId}><div class="mt-16 pt-5 pb-8 md:pt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"${_scopeId}><h2 class="text-fluid-2xl font-bold lg:tracking-tight text-neutral-900"${_scopeId}>${ssrInterpolate(block.title)}</h2><p class="text-neutral-600 mt-2"${_scopeId}>${ssrInterpolate(block.content)}</p></div><div class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16 pt-5 pb-8 md:pt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"${_scopeId}><!--[-->`);
                ssrRenderList(unref(features), (item, index) => {
                  _push2(`<div class="flex gap-4 items-start"${_scopeId}><div class="${ssrRenderClass(["mt-1 rounded-full p-2 w-8 h-8 shrink-0", index % 2 === 0 ? "bg-primary-800" : "bg-secondary-800"])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    class: "text-white",
                    name: item.icon || "mdi:soccer"
                  }, null, _parent2, _scopeId));
                  _push2(`</div><div${_scopeId}><h3 class="font-semibold text-fluid-lg text-neutral-900"${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="text-neutral-600 mt-2 leading-relaxed"${_scopeId}>${ssrInterpolate(item.content)}</p></div></div>`);
                });
                _push2(`<!--]--></div></section>`);
              } else if (block.type === "page-header") {
                _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
                  title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col items-center"${_scopeId2}><span class="text-neutral-900"${_scopeId2}>${ssrInterpolate(block.title)}</span><div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden"${_scopeId2}><div class="w-1/2 bg-secondary-500"${_scopeId2}></div><div class="w-1/2 bg-primary-700"${_scopeId2}></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col items-center" }, [
                          createVNode("span", { class: "text-neutral-900" }, toDisplayString(block.title), 1),
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
                      _push3(`<span class="text-neutral-600 whitespace-pre-line"${_scopeId2}>${ssrInterpolate(block.content)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "text-neutral-600 whitespace-pre-line" }, toDisplayString(block.content), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else if (["text", "text-image", "image-text"].includes(block.type)) {
                _push2(`<section class="cms-public-block py-10 sm:py-14"${_scopeId}><div class="${ssrRenderClass(["grid gap-8 items-center", block.type === "text" ? "grid-cols-1" : "md:grid-cols-2"])}"${_scopeId}><div class="${ssrRenderClass(block.type === "image-text" ? "md:order-2" : "")}"${_scopeId}>`);
                if (block.eyebrow) {
                  _push2(`<p class="text-sm font-bold uppercase tracking-wider text-primary-800 mb-2"${_scopeId}>${ssrInterpolate(block.eyebrow)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (block.title) {
                  _push2(`<h2 class="text-fluid-2xl font-bold text-neutral-900 mb-4"${_scopeId}>${ssrInterpolate(block.title)}</h2>`);
                } else {
                  _push2(`<!---->`);
                }
                if (block.content) {
                  _push2(`<p class="text-neutral-600 whitespace-pre-line leading-relaxed"${_scopeId}>${ssrInterpolate(block.content)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (block.image) {
                  _push2(`<div class="${ssrRenderClass(block.type === "image-text" ? "md:order-1" : "")}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_SiteImage, {
                    src: block.image,
                    alt: block.title || "",
                    class: "w-full rounded-xl"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></section>`);
              } else if (block.type === "games") {
                _push2(`<section class="py-10"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_LandingGames, {
                  title: block.title || "Pr\xF3ximo Jogo"
                }, null, _parent2, _scopeId));
                _push2(`</section>`);
              } else if (block.type === "sponsors") {
                _push2(`<section class="py-10"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_LandingLogos, {
                  title: block.title || "Patroc\xEDnios"
                }, null, _parent2, _scopeId));
                _push2(`</section>`);
              } else if (block.type === "gallery") {
                _push2(`<section class="py-10"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_LandingGallery, null, null, _parent2, _scopeId));
                _push2(`</section>`);
              } else if (block.type === "cta") {
                _push2(`<section class="card-surface px-6 py-16 mt-20 mx-auto max-w-5xl flex flex-col items-center text-center"${_scopeId}><h2 class="text-neutral-900 text-fluid-4xl font-bold"${_scopeId}>${ssrInterpolate(block.title)}</h2><p class="text-neutral-600 mt-4 text-fluid-lg max-w-2xl"${_scopeId}>${ssrInterpolate(block.content)}</p>`);
                if ((_b = block.items) == null ? void 0 : _b.length) {
                  _push2(`<div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center"${_scopeId}><!--[-->`);
                  ssrRenderList(block.items, (raw, index) => {
                    _push2(ssrRenderComponent(_component_NuxtLink, {
                      key: `${block.id}-${index}`,
                      to: parseAction(raw, index).url,
                      class: parseAction(raw, index).style === "secondary" ? "btn-club-red w-full sm:w-auto" : "btn-club-green w-full sm:w-auto"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(parseAction(raw, index).label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(parseAction(raw, index).label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            if (!unref(blocks).length) {
              _push2(`<section class="py-16 text-center text-neutral-600"${_scopeId}>Esta p\xE1gina ainda n\xE3o tem blocos publicados.</section>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(normalBlocks), (block) => {
                var _a, _b;
                return openBlock(), createBlock(Fragment, {
                  key: block.id
                }, [
                  block.type === "hero" ? (openBlock(), createBlock("section", {
                    key: 0,
                    class: "home-hero",
                    "aria-labelledby": "cms-home-hero-title"
                  }, [
                    createVNode("picture", {
                      class: "home-hero__media",
                      "aria-hidden": "true"
                    }, [
                      block.image ? (openBlock(), createBlock("source", {
                        key: 0,
                        media: "(min-width: 768px)",
                        srcset: block.image
                      }, null, 8, ["srcset"])) : createCommentVNode("", true),
                      createVNode("img", {
                        src: block.mobileImage || block.image || "/img/gdcss-casteloes-tarja.webp",
                        alt: "",
                        fetchpriority: "high",
                        decoding: "async"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", {
                      class: "home-hero__overlay",
                      "aria-hidden": "true"
                    }),
                    createVNode("div", { class: "home-hero__content site-shell" }, [
                      createVNode("div", { class: "home-hero__copy" }, [
                        createVNode("p", { class: "home-hero__eyebrow" }, toDisplayString(block.eyebrow), 1),
                        createVNode("h1", { id: "cms-home-hero-title" }, toDisplayString(block.title), 1),
                        createVNode("p", { class: "home-hero__description" }, toDisplayString(block.content), 1),
                        ((_a = block.items) == null ? void 0 : _a.length) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "home-hero__actions"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(block.items, (raw, index) => {
                            return openBlock(), createBlock(_component_NuxtLink, {
                              key: `${block.id}-${index}`,
                              to: parseAction(raw, index).url,
                              class: ["home-hero__button", parseAction(raw, index).style === "secondary" ? "home-hero__button--secondary" : "home-hero__button--primary"]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(parseAction(raw, index).label), 1),
                                createVNode(_component_Icon, {
                                  name: "lucide:arrow-right",
                                  size: "17"
                                })
                              ]),
                              _: 2
                            }, 1032, ["to", "class"]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("a", {
                        class: "home-hero__scroll",
                        href: "#conteudo-principal",
                        "aria-label": "Ver mais conte\xFAdo"
                      }, [
                        createVNode("span", null, "Descobrir"),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-down",
                          size: "20"
                        })
                      ])
                    ])
                  ])) : block.type === "section-header" && block.key === "features-header" ? (openBlock(), createBlock("section", {
                    key: 1,
                    id: "conteudo-principal"
                  }, [
                    createVNode("div", { class: "mt-16 pt-5 pb-8 md:pt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto" }, [
                      createVNode("h2", { class: "text-fluid-2xl font-bold lg:tracking-tight text-neutral-900" }, toDisplayString(block.title), 1),
                      createVNode("p", { class: "text-neutral-600 mt-2" }, toDisplayString(block.content), 1)
                    ]),
                    createVNode("div", { class: "grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16 pt-5 pb-8 md:pt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(features), (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: "flex gap-4 items-start"
                        }, [
                          createVNode("div", {
                            class: ["mt-1 rounded-full p-2 w-8 h-8 shrink-0", index % 2 === 0 ? "bg-primary-800" : "bg-secondary-800"]
                          }, [
                            createVNode(_component_Icon, {
                              class: "text-white",
                              name: item.icon || "mdi:soccer"
                            }, null, 8, ["name"])
                          ], 2),
                          createVNode("div", null, [
                            createVNode("h3", { class: "font-semibold text-fluid-lg text-neutral-900" }, toDisplayString(item.title), 1),
                            createVNode("p", { class: "text-neutral-600 mt-2 leading-relaxed" }, toDisplayString(item.content), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])) : block.type === "page-header" ? (openBlock(), createBlock(_component_LandingSectionhead, { key: 2 }, {
                    title: withCtx(() => [
                      createVNode("div", { class: "flex flex-col items-center" }, [
                        createVNode("span", { class: "text-neutral-900" }, toDisplayString(block.title), 1),
                        createVNode("div", { class: "mt-5 w-32 h-px flex rounded-sm overflow-hidden" }, [
                          createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                          createVNode("div", { class: "w-1/2 bg-primary-700" })
                        ])
                      ])
                    ]),
                    desc: withCtx(() => [
                      createVNode("span", { class: "text-neutral-600 whitespace-pre-line" }, toDisplayString(block.content), 1)
                    ]),
                    _: 2
                  }, 1024)) : ["text", "text-image", "image-text"].includes(block.type) ? (openBlock(), createBlock("section", {
                    key: 3,
                    class: "cms-public-block py-10 sm:py-14"
                  }, [
                    createVNode("div", {
                      class: ["grid gap-8 items-center", block.type === "text" ? "grid-cols-1" : "md:grid-cols-2"]
                    }, [
                      createVNode("div", {
                        class: block.type === "image-text" ? "md:order-2" : ""
                      }, [
                        block.eyebrow ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm font-bold uppercase tracking-wider text-primary-800 mb-2"
                        }, toDisplayString(block.eyebrow), 1)) : createCommentVNode("", true),
                        block.title ? (openBlock(), createBlock("h2", {
                          key: 1,
                          class: "text-fluid-2xl font-bold text-neutral-900 mb-4"
                        }, toDisplayString(block.title), 1)) : createCommentVNode("", true),
                        block.content ? (openBlock(), createBlock("p", {
                          key: 2,
                          class: "text-neutral-600 whitespace-pre-line leading-relaxed"
                        }, toDisplayString(block.content), 1)) : createCommentVNode("", true)
                      ], 2),
                      block.image ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: block.type === "image-text" ? "md:order-1" : ""
                      }, [
                        createVNode(_component_SiteImage, {
                          src: block.image,
                          alt: block.title || "",
                          class: "w-full rounded-xl"
                        }, null, 8, ["src", "alt"])
                      ], 2)) : createCommentVNode("", true)
                    ], 2)
                  ])) : block.type === "games" ? (openBlock(), createBlock("section", {
                    key: 4,
                    class: "py-10"
                  }, [
                    createVNode(_component_LandingGames, {
                      title: block.title || "Pr\xF3ximo Jogo"
                    }, null, 8, ["title"])
                  ])) : block.type === "sponsors" ? (openBlock(), createBlock("section", {
                    key: 5,
                    class: "py-10"
                  }, [
                    createVNode(_component_LandingLogos, {
                      title: block.title || "Patroc\xEDnios"
                    }, null, 8, ["title"])
                  ])) : block.type === "gallery" ? (openBlock(), createBlock("section", {
                    key: 6,
                    class: "py-10"
                  }, [
                    createVNode(_component_LandingGallery)
                  ])) : block.type === "cta" ? (openBlock(), createBlock("section", {
                    key: 7,
                    class: "card-surface px-6 py-16 mt-20 mx-auto max-w-5xl flex flex-col items-center text-center"
                  }, [
                    createVNode("h2", { class: "text-neutral-900 text-fluid-4xl font-bold" }, toDisplayString(block.title), 1),
                    createVNode("p", { class: "text-neutral-600 mt-4 text-fluid-lg max-w-2xl" }, toDisplayString(block.content), 1),
                    ((_b = block.items) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(block.items, (raw, index) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: `${block.id}-${index}`,
                          to: parseAction(raw, index).url,
                          class: parseAction(raw, index).style === "secondary" ? "btn-club-red w-full sm:w-auto" : "btn-club-green w-full sm:w-auto"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(parseAction(raw, index).label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              !unref(blocks).length ? (openBlock(), createBlock("section", {
                key: 0,
                class: "py-16 text-center text-neutral-600"
              }, "Esta p\xE1gina ainda n\xE3o tem blocos publicados.")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsPublicPageRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CmsPublicPageRenderer-CK4ac4qp.mjs.map
