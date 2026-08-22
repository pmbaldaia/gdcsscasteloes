import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './_virtual_public-DOyvwXYf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "manutencao",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      _push(ssrRenderComponent(_component_LandingContainer, mergeProps({ class: "flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full max-w-md sm:max-w-xl bg-surface/95 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-xl border border-white/60" data-v-b2c7fe71${_scopeId}><h1 class="text-fluid-4xl font-extrabold mb-4 sm:mb-6 text-primary-800 tracking-tight" data-v-b2c7fe71${_scopeId}> O jogo est\xE1 interrompido! </h1><p class="text-fluid-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed" data-v-b2c7fe71${_scopeId}> O nosso site est\xE1 em manuten\xE7\xE3o. Voltaremos em breve com melhorias. </p><p class="text-fluid-sm text-neutral-600 mb-8 sm:mb-12 italic" data-v-b2c7fe71${_scopeId}> \u201CAt\xE9 os melhores jogadores precisam de uma pausa para dar o seu melhor.\u201D </p><div class="mb-6 sm:mb-8 mx-auto w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-bounce" data-v-b2c7fe71${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Bola de futebol" class="w-full h-full" data-v-b2c7fe71${_scopeId}></div><p class="text-fluid-sm text-neutral-900 font-semibold" data-v-b2c7fe71${_scopeId}> Entretanto, aproveita para descansar e regressar com energia! </p></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full max-w-md sm:max-w-xl bg-surface/95 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-xl border border-white/60" }, [
                createVNode("h1", { class: "text-fluid-4xl font-extrabold mb-4 sm:mb-6 text-primary-800 tracking-tight" }, " O jogo est\xE1 interrompido! "),
                createVNode("p", { class: "text-fluid-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed" }, " O nosso site est\xE1 em manuten\xE7\xE3o. Voltaremos em breve com melhorias. "),
                createVNode("p", { class: "text-fluid-sm text-neutral-600 mb-8 sm:mb-12 italic" }, " \u201CAt\xE9 os melhores jogadores precisam de uma pausa para dar o seu melhor.\u201D "),
                createVNode("div", { class: "mb-6 sm:mb-8 mx-auto w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-bounce" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Bola de futebol",
                    class: "w-full h-full"
                  })
                ]),
                createVNode("p", { class: "text-fluid-sm text-neutral-900 font-semibold" }, " Entretanto, aproveita para descansar e regressar com energia! ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manutencao.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const manutencao = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2c7fe71"]]);

export { manutencao as default };
//# sourceMappingURL=manutencao-BNuTz9Wh.mjs.map
