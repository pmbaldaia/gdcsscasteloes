import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import __nuxt_component_0$1 from './Icon-DhbMUx6q.mjs';
import { withCtx, createVNode, withAsyncContext, computed, mergeProps, unref, ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderTeleport } from 'vue/server-renderer';
import { u as useSiteSettings } from './useSiteSettings-Dkw2OmCn.mjs';
import { _ as _sfc_main$6 } from './SiteImage-0fq-XTGy.mjs';
import { u as useGames } from './useGames-ClDAqFc-.mjs';
import { c as createPublicRepository } from './public.repository-zOMnXrxb.mjs';
import { u as useAsyncData } from './asyncData-D54zHTjC.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'perfect-debounce';

const fallbackImage = "/img/gdcss-casteloes-tarja.webp";
const _sfc_main$5 = {
  __name: "Hero",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { settings } = ([__temp, __restore] = withAsyncContext(() => useSiteSettings()), __temp = await __temp, __restore(), __temp);
    const desktopImage = computed(
      () => {
        var _a, _b;
        return ((_a = settings.value) == null ? void 0 : _a.heroDesktopImage) || ((_b = settings.value) == null ? void 0 : _b.heroMobileImage) || fallbackImage;
      }
    );
    const mobileImage = computed(
      () => {
        var _a, _b;
        return ((_a = settings.value) == null ? void 0 : _a.heroMobileImage) || ((_b = settings.value) == null ? void 0 : _b.heroDesktopImage) || fallbackImage;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "home-hero",
        "aria-labelledby": "home-hero-title"
      }, _attrs))}><picture class="home-hero__media" aria-hidden="true"><source media="(min-width: 768px)"${ssrRenderAttr("srcset", unref(desktopImage))}><img${ssrRenderAttr("src", unref(mobileImage))} alt="" fetchpriority="high" decoding="async"></picture><div class="home-hero__overlay" aria-hidden="true"></div><div class="home-hero__content site-shell"><div class="home-hero__copy"><p class="home-hero__eyebrow">G.D.C.S.S. Castel\xF5es</p><h1 id="home-hero-title"> Bem-vindo ao site oficial do G.D.C.S.S. Castel\xF5es </h1><p class="home-hero__description"> Celebrando com orgulho 41 anos de hist\xF3ria, dedica\xE7\xE3o e conquistas, o G.D.C.S.S. Castel\xF5es foi fundado a 11 de abril de 1984, na nossa amada freguesia de Castel\xF5es. Venha fazer parte dessa jornada, repleta de momentos inesquec\xEDveis e vit\xF3rias que marcaram a nossa comunidade! </p><div class="home-hero__actions"><a class="home-hero__button home-hero__button--secondary" href="/equipa#plantel"> Plantel `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-right",
        size: "17"
      }, null, _parent));
      _push(`</a><a class="home-hero__button home-hero__button--primary" href="/equipa#equipa-tecnica"> Equipa T\xE9cnica `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-right",
        size: "17"
      }, null, _parent));
      _push(`</a></div></div><a class="home-hero__scroll" href="#conteudo-principal" aria-label="Ver mais conte\xFAdo"><span>Descobrir</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        size: "20"
      }, null, _parent));
      _push(`</a></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        title: "Treina no M\xE1ximo",
        description: "Aqui treinas com intensidade e foco. Cada sess\xE3o \xE9 uma oportunidade para te superares dentro das quatro linhas.",
        icon: "game-icons:soccer-field"
      },
      {
        title: "Faz Parte da Hist\xF3ria",
        description: "Desde 1984 que deixamos marca. Junta-te a esta tradi\xE7\xE3o cheia de conquistas e paix\xE3o pelo futebol.",
        icon: "mdi:history"
      },
      {
        title: "Luta por T\xEDtulos",
        description: "Entramos em campo para ganhar. Participamos em campeonatos com garra e orgulho nas nossas cores.",
        icon: "mdi:trophy"
      },
      {
        title: "Mostra o Teu Talento",
        description: "Queremos ajudar-te a crescer como jogador. Focamo-nos na tua evolu\xE7\xE3o t\xE9cnica, t\xE1tica e pessoal.",
        icon: "mdi:soccer"
      },
      {
        title: "Liga-te \xE0 Comunidade",
        description: "Aqui sentes o apoio dentro e fora do campo. Somos mais do que um clube \u2014 somos fam\xEDlia.",
        icon: "mdi:account-group"
      },
      {
        title: "Joga com o Cora\xE7\xE3o",
        description: "Vestir esta camisola \xE9 mais do que jogar futebol. \xC9 entrega, paix\xE3o e respeito por quem a defende.",
        icon: "mdi:heart"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<!--[--><div class="mt-16 pt-5 pb-8 md:pt-8 mt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"><h2 class="text-fluid-2xl font-bold lg:tracking-tight text-neutral-900"> Vive o Clube. D\xE1 Tudo em Campo. </h2><p class="text-neutral-600 mt-2"> Conhece o que te espera quando vestes esta camisola. Aqui jogas com garra. </p></div><div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16 pt-5 pb-8 md:pt-8 mt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"><!--[-->`);
      ssrRenderList(features, (item, index) => {
        _push(`<div class="flex gap-4 items-start"><div class="${ssrRenderClass([
          "mt-1 rounded-full p-2 w-8 h-8 shrink-0",
          index % 2 === 0 ? "bg-primary-800" : "bg-secondary-800"
        ])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "text-white",
          name: item.icon
        }, null, _parent));
        _push(`</div><div><h3 class="font-semibold text-fluid-lg text-neutral-900">${ssrInterpolate(item.title)}</h3><p class="text-neutral-600 mt-2 leading-relaxed">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Features.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Games",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
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
        _push(`<div class="card-surface p-6 sm:p-8 text-center relative"><h3 class="text-fluid-2xl font-bold text-neutral-900 mb-3"> \u{1F3AF} Pr\xF3ximo Jogo </h3><p class="text-fluid-lg text-neutral-600 mb-6 leading-relaxed"><span class="font-semibold">${ssrInterpolate(nextGame.value.jornada)}</span> \u2022 <span class="font-semibold">${ssrInterpolate(formatDate(nextGame.value))}</span> \xE0s <span class="font-semibold">${ssrInterpolate(formatTime(nextGame.value))}</span></p><div class="flex justify-center gap-12 items-center"><div class="flex flex-col items-center w-32">`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Games.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
async function useSponsors() {
  const repo = createPublicRepository("sponsors");
  const { data: sponsors } = await useAsyncData("gdcss-public-sponsors", () => repo.list(), { default: () => [] });
  return { sponsors: computed(() => [...sponsors.value || []].sort((a, b) => (a.order || 0) - (b.order || 0))) };
}
const _sfc_main$2 = {
  __name: "Logos",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { sponsors } = ([__temp, __restore] = withAsyncContext(() => useSponsors()), __temp = await __temp, __restore(), __temp);
    const selectedSponsor = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteImage = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-24" }, _attrs))}><h2 class="text-neutral-900 text-fluid-3xl font-bold text-center tracking-tight"> Patroc\xEDnios </h2><div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mt-10 px-4"><!--[-->`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Logos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-surface px-6 py-16 mt-20 mx-auto max-w-5xl flex flex-col items-center text-center" }, _attrs))}><h2 class="text-neutral-900 text-fluid-4xl font-bold"> Junta-te \xE0 nossa paix\xE3o pelo desporto </h2><p class="text-neutral-600 mt-4 text-fluid-lg max-w-2xl"> No GDCSS Castel\xF5es, promovemos o esp\xEDrito de equipa, o desenvolvimento dos jovens e o orgulho na nossa freguesia. Seja como atleta, s\xF3cio ou apoiador, h\xE1 um lugar para ti no nosso clube. </p><div class="mt-6 flex flex-col sm:flex-row gap-3 justify-start items-center"><a href="/sobre/" class="btn-club-green w-full sm:w-auto" aria-label="Clica aqui para conhecer o clube"> Conhecer o Clube </a><a href="/contacto/" class="btn-club-red w-full sm:w-auto" aria-label="Clica aqui para te tornares s\xF3cio"> Torna-te S\xF3cio </a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingHero = _sfc_main$5;
      const _component_LandingFeatures = _sfc_main$4;
      const _component_LandingGames = _sfc_main$3;
      const _component_LandingLogos = _sfc_main$2;
      const _component_LandingCta = __nuxt_component_5;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingHero, null, null, _parent2, _scopeId));
            _push2(`<div id="conteudo-principal"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LandingFeatures, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_LandingGames, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LandingLogos, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LandingCta, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingHero),
              createVNode("div", { id: "conteudo-principal" }, [
                createVNode(_component_LandingFeatures)
              ]),
              createVNode(_component_LandingGames),
              createVNode(_component_LandingLogos),
              createVNode(_component_LandingCta)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Uu-aklDK.mjs.map
