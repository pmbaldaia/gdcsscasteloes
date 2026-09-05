import { _ as __nuxt_component_0 } from './nuxt-link-CVE1ktMt.mjs';
import { _ as _sfc_main$1 } from './SiteImage-DbM39HNq.mjs';
import { withAsyncContext, ref, watch, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useEvents } from './useEvents-D-W8JIGs.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './NuxtImg-D4mLRaeW.mjs';
import './imageFallback-CODQxCbd.mjs';
import './public.repository-zOMnXrxb.mjs';
import './asyncData-D54zHTjC.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { eventos } = ([__temp, __restore] = withAsyncContext(() => useEvents()), __temp = await __temp, __restore(), __temp);
    const route = useRoute();
    const evento = ref(null);
    const carregarEvento = () => {
      const slug = route.params.slug;
      evento.value = eventos.value.find((e) => e.slug === slug) || null;
    };
    carregarEvento();
    watch(() => route.params.slug, carregarEvento);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SiteImage = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto mt-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/eventos",
        class: "inline-block mb-8 text-primary-700 hover:underline font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Voltar aos eventos `);
          } else {
            return [
              createTextVNode(" \u2190 Voltar aos eventos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (evento.value) {
        _push(`<div class="card-surface overflow-hidden"><div class="w-full max-w-xl sm:max-w-3xl mx-auto relative aspect-square rounded-t-lg overflow-hidden">`);
        _push(ssrRenderComponent(_component_SiteImage, {
          src: evento.value.imagem,
          alt: evento.value.nome,
          preset: "cardLg",
          width: "800",
          height: "800",
          sizes: "(max-width: 768px) 100vw, 800px",
          loading: "eager",
          fetchpriority: "high",
          class: "w-full h-full object-cover object-center"
        }, null, _parent));
        _push(`</div><div class="p-6 sm:p-10"><h1 class="text-fluid-3xl font-extrabold text-neutral-900 mb-6 transition-colors">${ssrInterpolate(evento.value.nome)}</h1><div class="flex flex-col sm:flex-row sm:space-x-10 text-neutral-600 mb-8"><p class="flex items-center mb-3 sm:mb-0 gap-2"><svg class="w-5 h-5 text-secondary-800 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"></path></svg><strong class="whitespace-nowrap">Hora:</strong> ${ssrInterpolate(evento.value.hora || "17h00")}</p><p class="flex items-center mb-3 sm:mb-0 gap-2"><svg class="w-5 h-5 text-primary-700 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><strong class="whitespace-nowrap">Data:</strong> ${ssrInterpolate(evento.value.data)}</p><p class="flex items-center gap-2"><svg class="w-5 h-5 text-primary-700 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"></path></svg><strong class="whitespace-nowrap">Local:</strong> ${ssrInterpolate(evento.value.local)}</p></div><p class="text-neutral-900 leading-relaxed mb-6 transition-colors">${ssrInterpolate(evento.value.descricao)}</p>`);
        if (evento.value.detalhes) {
          _push(`<div class="prose-fluid text-neutral-600 leading-relaxed">${(_a = evento.value.detalhes) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<p class="text-secondary-800 mt-6 text-center font-semibold text-fluid-lg"> Evento n\xE3o encontrado. </p>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/eventos/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CXU6hOIi.mjs.map
