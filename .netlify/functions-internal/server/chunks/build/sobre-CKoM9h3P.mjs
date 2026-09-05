import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { u as useManagedPageContent, _ as _sfc_main$1 } from './CmsManagedPageHeader-cB3vskBP.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-D4mLRaeW.mjs';
import { withAsyncContext, computed, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Sectionhead-DAjZ4P2v.mjs';
import './public.repository-zOMnXrxb.mjs';
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
import './asyncData-D54zHTjC.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "sobre",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { value } = ([__temp, __restore] = withAsyncContext(() => useManagedPageContent("sobre")), __temp = await __temp, __restore(), __temp);
    const campo = computed(() => ({
      nome: value("venue", "title", "Campo Desportivo de Castel\xF5es").value,
      rua: value("venue", "content", "Rua do Complexo Desportivo, Castel\xF5es").value,
      imagem: { src: value("venue", "image", "/campo/campo.webp").value, width: 600, height: 400 },
      mapa: value("venue", "url", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19377.718285271432!2d-8.186913368261719!3d41.23438882286855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24969cc932a435%3A0x1cc3b348f37018b5!2sComplexo%20Desportivo%20de%20Castel%C3%B5es!5e1!3m2!1spt-PT!2spt!4v1747249901722!5m2!1spt-PT!2spt").value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_CmsManagedPageHeader = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CmsManagedPageHeader, {
              "page-slug": "sobre",
              "fallback-title": "Sobre n\xF3s",
              "fallback-description": "Localiza\xE7\xE3o e imagem do campo do Castel\xF5es"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap md:flex-nowrap mt-12 w-full"${_scopeId}><div class="w-full md:w-1/2 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: unref(campo).imagem.src,
              alt: "Campo Desportivo de Castel\xF5es",
              width: "600",
              height: "400",
              sizes: "(max-width: 768px) 100vw, 600px",
              quality: "80",
              loading: "lazy",
              decoding: "async",
              class: "rounded shadow-lg w-full h-auto max-w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/2 p-4 flex justify-center items-center"${_scopeId}><div class="text-fluid-2xl leading-relaxed text-center md:text-left text-neutral-900"${_scopeId}><strong${_scopeId}>${ssrInterpolate(unref(campo).nome)}</strong><p class="text-neutral-600 mt-2"${_scopeId}>${ssrInterpolate(unref(campo).rua)}</p></div></div></div><div class="mt-10 w-full"${_scopeId}><iframe${ssrRenderAttr("src", unref(campo).mapa)} width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded shadow-xl"${_scopeId}></iframe></div>`);
          } else {
            return [
              createVNode(_component_CmsManagedPageHeader, {
                "page-slug": "sobre",
                "fallback-title": "Sobre n\xF3s",
                "fallback-description": "Localiza\xE7\xE3o e imagem do campo do Castel\xF5es"
              }),
              createVNode("div", { class: "flex flex-wrap md:flex-nowrap mt-12 w-full" }, [
                createVNode("div", { class: "w-full md:w-1/2 flex justify-center items-center" }, [
                  createVNode(_component_NuxtImg, {
                    src: unref(campo).imagem.src,
                    alt: "Campo Desportivo de Castel\xF5es",
                    width: "600",
                    height: "400",
                    sizes: "(max-width: 768px) 100vw, 600px",
                    quality: "80",
                    loading: "lazy",
                    decoding: "async",
                    class: "rounded shadow-lg w-full h-auto max-w-full"
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "w-full md:w-1/2 p-4 flex justify-center items-center" }, [
                  createVNode("div", { class: "text-fluid-2xl leading-relaxed text-center md:text-left text-neutral-900" }, [
                    createVNode("strong", null, toDisplayString(unref(campo).nome), 1),
                    createVNode("p", { class: "text-neutral-600 mt-2" }, toDisplayString(unref(campo).rua), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-10 w-full" }, [
                createVNode("iframe", {
                  src: unref(campo).mapa,
                  width: "100%",
                  height: "450",
                  style: { "border": "0" },
                  allowfullscreen: "",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade",
                  class: "rounded shadow-xl"
                }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sobre-CKoM9h3P.mjs.map
