import __nuxt_component_0 from './Icon-jTnUEsFD.mjs';
import { defineComponent, reactive, ref, watch, mergeProps, unref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderClass, ssrRenderTeleport, ssrRenderList } from 'vue/server-renderer';
import { m as mediaService } from './media.service-gqqdC7_q.mjs';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';
import { e as useAuth } from './server.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-FWaHSLTI.mjs';
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
import './useApi-3EScbZE4.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "perfil",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    useToast();
    const form = reactive({ name: "", avatar: "", currentPassword: "", password: "", confirmPassword: "" });
    const saving = ref(false);
    watch(user, (v) => {
      form.name = (v == null ? void 0 : v.name) || "";
      form.avatar = (v == null ? void 0 : v.avatar) || "";
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_CmsSingleImagePicker = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack profile-page" }, _attrs))}><header class="page-heading"><div><p class="eyebrow">Conta</p><h1>O meu perfil</h1><p class="page-heading__description">Atualiza a tua imagem, nome e palavra-passe.</p></div></header><form class="panel profile-form"><section class="profile-form__section"><div><h2>Imagem de perfil</h2><p>Escolhe uma imagem pessoal ou carrega uma nova.</p></div>`);
      _push(ssrRenderComponent(_component_CmsSingleImagePicker, {
        modelValue: unref(form).avatar,
        "onUpdate:modelValue": ($event) => unref(form).avatar = $event,
        label: "Imagem de perfil",
        recommended: "Recomendado: imagem quadrada, pelo menos 320 \xD7 320 px."
      }, null, _parent));
      _push(`</section><section class="profile-form__section"><div><h2>Dados pessoais</h2><p>O nome de utilizador e o perfil de acesso s\xE3o geridos pelo administrador.</p></div><label class="form-field"><span>Nome</span><input${ssrRenderAttr("value", unref(form).name)} autocomplete="name" required></label><label class="form-field"><span>Nome de utilizador</span><input${ssrRenderAttr("value", (_a = unref(user)) == null ? void 0 : _a.username)} disabled></label><label class="form-field"><span>Email</span><input${ssrRenderAttr("value", (_b = unref(user)) == null ? void 0 : _b.email)} type="email" disabled></label></section><section class="profile-form__section"><div><h2>Alterar palavra-passe</h2><p>Preenche apenas se quiseres alterar a palavra-passe.</p></div><label class="form-field"><span>Palavra-passe atual</span><input${ssrRenderAttr("value", unref(form).currentPassword)} type="password" autocomplete="current-password"></label><label class="form-field"><span>Nova palavra-passe</span><input${ssrRenderAttr("value", unref(form).password)} type="password" minlength="8" autocomplete="new-password"></label><label class="form-field"><span>Confirmar nova palavra-passe</span><input${ssrRenderAttr("value", unref(form).confirmPassword)} type="password" minlength="8" autocomplete="new-password"></label></section><footer class="profile-form__footer"><button class="btn btn--primary"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:save" }, null, _parent));
      _push(`${ssrInterpolate(unref(saving) ? "A guardar\u2026" : "Guardar altera\xE7\xF5es")}</button></footer></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/perfil.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=perfil-Fr9rvSFn.mjs.map
