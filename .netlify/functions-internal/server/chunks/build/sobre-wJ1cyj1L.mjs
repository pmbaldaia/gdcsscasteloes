import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-DAjZ4P2v.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-BJb9P2Je.mjs';
import { withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "sobre",
  __ssrInlineRender: true,
  setup(__props) {
    const campo = {
      nome: "Campo Desportivo de Castel\xF5es",
      rua: "Rua do Complexo Desportivo, Castel\xF5es",
      imagem: {
        src: "/campo/campo.webp"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col items-center"${_scopeId2}><span class="text-neutral-900"${_scopeId2}>Sobre n\xF3s</span><div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden"${_scopeId2}><div class="w-1/2 bg-secondary-500"${_scopeId2}></div><div class="w-1/2 bg-primary-700"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col items-center" }, [
                      createVNode("span", { class: "text-neutral-900" }, "Sobre n\xF3s"),
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
                  _push3(`<span class="text-neutral-600"${_scopeId2}> Localiza\xE7\xE3o e imagem do campo do Castel\xF5es </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-neutral-600" }, " Localiza\xE7\xE3o e imagem do campo do Castel\xF5es ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap md:flex-nowrap mt-12 w-full"${_scopeId}><div class="w-full md:w-1/2 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: campo.imagem.src,
              alt: "Campo Desportivo de Castel\xF5es",
              width: "600",
              height: "400",
              sizes: "(max-width: 768px) 100vw, 600px",
              quality: "80",
              loading: "lazy",
              decoding: "async",
              class: "rounded shadow-lg w-full h-auto max-w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/2 p-4 flex justify-center items-center"${_scopeId}><div class="text-fluid-2xl leading-relaxed text-center md:text-left text-neutral-900"${_scopeId}><strong${_scopeId}>${ssrInterpolate(campo.nome)}</strong><p class="text-neutral-600 mt-2"${_scopeId}>${ssrInterpolate(campo.rua)}</p></div></div></div><div class="mt-10 w-full"${_scopeId}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19377.718285271432!2d-8.186913368261719!3d41.23438882286855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24969cc932a435%3A0x1cc3b348f37018b5!2sComplexo%20Desportivo%20de%20Castel%C3%B5es!5e1!3m2!1spt-PT!2spt!4v1747249901722!5m2!1spt-PT!2spt" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded shadow-xl"${_scopeId}></iframe></div>`);
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("span", { class: "text-neutral-900" }, "Sobre n\xF3s"),
                    createVNode("div", { class: "mt-5 w-32 h-px flex rounded-sm overflow-hidden" }, [
                      createVNode("div", { class: "w-1/2 bg-secondary-500" }),
                      createVNode("div", { class: "w-1/2 bg-primary-700" })
                    ])
                  ])
                ]),
                desc: withCtx(() => [
                  createVNode("span", { class: "text-neutral-600" }, " Localiza\xE7\xE3o e imagem do campo do Castel\xF5es ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-wrap md:flex-nowrap mt-12 w-full" }, [
                createVNode("div", { class: "w-full md:w-1/2 flex justify-center items-center" }, [
                  createVNode(_component_NuxtImg, {
                    src: campo.imagem.src,
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
                    createVNode("strong", null, toDisplayString(campo.nome), 1),
                    createVNode("p", { class: "text-neutral-600 mt-2" }, toDisplayString(campo.rua), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-10 w-full" }, [
                createVNode("iframe", {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19377.718285271432!2d-8.186913368261719!3d41.23438882286855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24969cc932a435%3A0x1cc3b348f37018b5!2sComplexo%20Desportivo%20de%20Castel%C3%B5es!5e1!3m2!1spt-PT!2spt!4v1747249901722!5m2!1spt-PT!2spt",
                  width: "100%",
                  height: "450",
                  style: { "border": "0" },
                  allowfullscreen: "",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade",
                  class: "rounded shadow-xl"
                })
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
//# sourceMappingURL=sobre-wJ1cyj1L.mjs.map
