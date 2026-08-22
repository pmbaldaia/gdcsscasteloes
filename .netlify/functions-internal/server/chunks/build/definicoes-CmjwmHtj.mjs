import __nuxt_component_0 from './Icon-DZ18AjZn.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderTeleport, ssrRenderList } from 'vue/server-renderer';
import { m as mediaService } from './media.service-gqqdC7_q.mjs';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';
import { c as createCrudService, a as createRestRepository } from './rest.repository-Cx9D2HNC.mjs';
import { e as useAuth } from './server.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-8LJFqMRS.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './useApi-3EScbZE4.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CmsSingleImagePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    label: { default: "Imagem" },
    recommended: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    useToast();
    mediaService();
    const libraryOpen = ref(false);
    const library = ref([]);
    const libraryPending = ref(false);
    const uploading = ref(false);
    const search = ref("");
    const imageLibrary = computed(() => {
      const q = search.value.trim().toLowerCase();
      return library.value.filter((item) => {
        if (item.name.toLowerCase().endsWith(".pdf")) return false;
        if (!q) return true;
        return item.name.toLowerCase().includes(q);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "single-image-picker" }, _attrs))}><div class="single-image-picker__head"><div><strong>${ssrInterpolate(__props.label)}</strong>`);
      if (__props.recommended) {
        _push(`<small>${ssrInterpolate(__props.recommended)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.modelValue) {
        _push(`<button type="button" class="text-button single-image-picker__clear">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          size: "15"
        }, null, _parent));
        _push(` Remover </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="single-image-picker__preview">`);
      if (__props.modelValue) {
        _push(`<img${ssrRenderAttr("src", __props.modelValue)}${ssrRenderAttr("alt", `Pr\xE9-visualiza\xE7\xE3o: ${__props.label}`)}>`);
      } else {
        _push(`<div class="single-image-picker__empty">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:image",
          size: "28"
        }, null, _parent));
        _push(`<span>Sem imagem selecionada</span></div>`);
      }
      _push(`</div><div class="single-image-picker__actions"><label class="${ssrRenderClass([{ "is-disabled": unref(uploading) }, "btn btn--primary"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(uploading) ? "lucide:loader-circle" : "lucide:upload"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(uploading) ? "A carregar\u2026" : "Carregar imagem")} <input type="file" accept="image/*" hidden${ssrIncludeBooleanAttr(unref(uploading)) ? " disabled" : ""}></label><button type="button" class="btn btn--secondary">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:images" }, null, _parent));
      _push(` Multim\xE9dia </button></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(libraryOpen)) {
          _push2(`<div class="modal-backdrop gallery-library-backdrop"><section class="cms-modal gallery-library-modal"><header><div><p class="eyebrow">Multim\xE9dia</p><h2>Escolher ${ssrInterpolate(__props.label.toLowerCase())}</h2><p>Seleciona uma imagem j\xE1 existente na biblioteca.</p></div><button type="button" class="icon-button" aria-label="Fechar">`);
          _push2(ssrRenderComponent(_component_Icon, { name: "lucide:x" }, null, _parent));
          _push2(`</button></header><label class="resource-search gallery-library-search">`);
          _push2(ssrRenderComponent(_component_Icon, { name: "lucide:search" }, null, _parent));
          _push2(`<input${ssrRenderAttr("value", unref(search))} type="search" placeholder="Pesquisar imagens\u2026"></label>`);
          if (unref(libraryPending)) {
            _push2(`<div class="cms-loading">A carregar Multim\xE9dia\u2026</div>`);
          } else if (!unref(imageLibrary).length) {
            _push2(`<div class="empty-state">`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:image-off",
              size: "30"
            }, null, _parent));
            _push2(`<h3>Sem imagens dispon\xEDveis</h3><p>Carrega primeiro uma imagem na Multim\xE9dia.</p></div>`);
          } else {
            _push2(`<div class="gallery-library-grid"><!--[-->`);
            ssrRenderList(unref(imageLibrary), (item) => {
              _push2(`<button type="button" class="${ssrRenderClass([{ "is-selected": item.url === __props.modelValue }, "gallery-library-item"])}"><img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.name)}><span class="gallery-library-item__check">`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.url === __props.modelValue ? "lucide:check-circle-2" : "lucide:circle",
                size: "17"
              }, null, _parent));
              _push2(`</span><span class="gallery-library-item__name">${ssrInterpolate(item.name)}</span>`);
              if (item.url === __props.modelValue) {
                _push2(`<small>Atual</small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button>`);
            });
            _push2(`<!--]--></div>`);
          }
          _push2(`<footer><button type="button" class="btn btn--secondary"> Fechar </button></footer></section></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsSingleImagePicker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const settingsRepository = () => createRestRepository("settings");
const settingsService = () => createCrudService(settingsRepository());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "definicoes",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.role) === "admin";
    });
    settingsService();
    useToast();
    const data = ref(null);
    const pending = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CmsSingleImagePicker = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack" }, _attrs))}><header class="page-heading"><div><p class="eyebrow">Sistema</p><h1>Defini\xE7\xF5es</h1><p class="page-heading__description"> Dados gerais e apresenta\xE7\xE3o da p\xE1gina principal do site. </p></div></header>`);
      if (unref(error)) {
        _push(`<p class="cms-alert cms-alert--danger">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)) {
        _push(`<form class="settings-page"><section class="panel settings-section"><header class="settings-section__header"><div><p class="eyebrow">Clube</p><h2>Dados gerais</h2><p>Informa\xE7\xE3o base utilizada no site e no CMS.</p></div></header><div class="settings-form"><label class="form-field"><span>Nome do clube</span><input${ssrRenderAttr("value", unref(data).clubName)} required></label><label class="form-field"><span>Email de contacto</span><input${ssrRenderAttr("value", unref(data).contactEmail)} type="email" required></label></div></section><section class="panel settings-section"><header class="settings-section__header"><div><p class="eyebrow">P\xE1gina principal</p><h2>Hero banner</h2><p> Define imagens diferentes para desktop e telem\xF3vel. O site escolhe automaticamente a vers\xE3o adequada ao tamanho do ecr\xE3. </p></div></header><div class="hero-settings-grid">`);
        _push(ssrRenderComponent(_component_CmsSingleImagePicker, {
          modelValue: unref(data).heroDesktopImage,
          "onUpdate:modelValue": ($event) => unref(data).heroDesktopImage = $event,
          label: "Imagem desktop",
          recommended: "Recomendado: 1920 \xD7 1080 px ou superior \xB7 formato horizontal"
        }, null, _parent));
        _push(ssrRenderComponent(_component_CmsSingleImagePicker, {
          modelValue: unref(data).heroMobileImage,
          "onUpdate:modelValue": ($event) => unref(data).heroMobileImage = $event,
          label: "Imagem mobile",
          recommended: "Recomendado: 1080 \xD7 1350 px ou 1080 \xD7 1920 px \xB7 formato vertical"
        }, null, _parent));
        _push(`</div><div class="cms-alert cms-alert--info hero-settings-note">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:info",
          size: "18"
        }, null, _parent));
        _push(`<span> Se uma das imagens n\xE3o estiver definida, o site utiliza automaticamente a imagem dispon\xEDvel ou o banner atual como fallback. </span></div></section><div class="settings-page__actions"><button class="btn btn--primary"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(pending) ? "lucide:loader-circle" : "lucide:save"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(pending) ? "A guardar\u2026" : "Guardar defini\xE7\xF5es")}</button></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/definicoes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=definicoes-CmjwmHtj.mjs.map
