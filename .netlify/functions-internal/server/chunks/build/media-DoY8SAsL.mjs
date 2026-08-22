import __nuxt_component_0 from './Icon-DZ18AjZn.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { m as mediaService } from './media.service-gqqdC7_q.mjs';
import { e as useAuth } from './server.mjs';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';
import { u as useConfirm } from './useConfirm-CFUPPoka.mjs';
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
import './useApi-3EScbZE4.mjs';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "media",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    const isAdmin = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.role) === "admin";
    });
    mediaService();
    useToast();
    useConfirm();
    const items = ref([]);
    const pending = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack" }, _attrs))}><header class="page-heading"><div><p class="eyebrow">Biblioteca</p><h1>Multim\xE9dia</h1><p class="page-heading__description">Imagens e documentos usados pelo site e pelo CMS.</p></div>`);
      if (unref(isAdmin)) {
        _push(`<label class="btn btn--primary">`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:upload" }, null, _parent));
        _push(` Carregar ficheiro<input type="file" accept="image/*,.pdf" hidden></label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (unref(error)) {
        _push(`<p class="cms-alert cms-alert--danger">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pending)) {
        _push(`<div class="cms-loading">A carregar\u2026</div>`);
      } else if (!unref(items).length) {
        _push(`<div class="panel empty-state">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:image-off",
          size: "30"
        }, null, _parent));
        _push(`<h3>Biblioteca vazia</h3><p>Carrega a primeira imagem ou documento.</p></div>`);
      } else {
        _push(`<section class="media-grid"><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(`<article class="media-card">`);
          if (!item.name.toLowerCase().endsWith(".pdf")) {
            _push(`<img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.name)}>`);
          } else {
            _push(`<div class="empty-state">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:file-text",
              size: "34"
            }, null, _parent));
            _push(`</div>`);
          }
          _push(`<div class="media-card__body"><strong${ssrRenderAttr("title", item.name)}>${ssrInterpolate(item.name)}</strong><small>${ssrInterpolate(Math.round(item.size / 1024))} KB</small><div class="media-card__actions"><button class="btn btn--secondary">Copiar URL</button>`);
          if (unref(isAdmin)) {
            _push(`<button class="icon-button danger" aria-label="Eliminar">`);
            _push(ssrRenderComponent(_component_Icon, { name: "lucide:trash-2" }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></article>`);
        });
        _push(`<!--]--></section>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/media.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=media-DoY8SAsL.mjs.map
