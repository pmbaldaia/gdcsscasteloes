import __nuxt_component_0 from './Icon-jTnUEsFD.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { c as createCrudService, a as createRestRepository } from './rest.repository-Cx9D2HNC.mjs';
import { e as useAuth } from './server.mjs';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';
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
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './useApi-3EScbZE4.mjs';

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
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack" }, _attrs))}><header class="page-heading"><div><p class="eyebrow">Sistema</p><h1>Defini\xE7\xF5es</h1><p class="page-heading__description"> Dados gerais utilizados no site e no CMS. </p></div></header>`);
      if (unref(error)) {
        _push(`<p class="cms-alert cms-alert--danger">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)) {
        _push(`<form class="settings-page"><section class="panel settings-section"><header class="settings-section__header"><div><p class="eyebrow">Clube</p><h2>Dados gerais</h2><p>Informa\xE7\xE3o base utilizada no site e no CMS.</p></div></header><div class="settings-form"><label class="form-field"><span>Nome do clube</span><input${ssrRenderAttr("value", unref(data).clubName)} required></label><label class="form-field"><span>Email de contacto</span><input${ssrRenderAttr("value", unref(data).contactEmail)} type="email" required></label></div></section><section class="panel settings-section"><header class="settings-section__header"><div><p class="eyebrow">Rodap\xE9</p><h2>Conte\xFAdo e redes sociais</h2><p>Informa\xE7\xE3o apresentada no rodap\xE9 e nos atalhos sociais do menu.</p></div></header><div class="settings-form"><label class="form-field"><span>T\xEDtulo \u201CSobre\u201D</span><input${ssrRenderAttr("value", unref(data).footerAboutTitle)}></label><label class="form-field"><span>T\xEDtulo \u201CLinks \xFAteis\u201D</span><input${ssrRenderAttr("value", unref(data).footerLinksTitle)}></label><label class="form-field"><span>T\xEDtulo \u201CRedes sociais\u201D</span><input${ssrRenderAttr("value", unref(data).footerSocialTitle)}></label><label class="form-field"><span>T\xEDtulo \u201CContacto\u201D</span><input${ssrRenderAttr("value", unref(data).footerContactTitle)}></label><label class="form-field" style="${ssrRenderStyle({ "grid-column": "1/-1" })}"><span>Texto \u201CSobre\u201D</span><textarea rows="5">${ssrInterpolate(unref(data).footerAbout)}</textarea></label><!--[-->`);
        ssrRenderList(unref(data).socialLinks, (social, index) => {
          _push(`<div class="settings-form" style="${ssrRenderStyle({ "grid-column": "1/-1" })}"><label class="form-field"><span>Rede social</span><input${ssrRenderAttr("value", social.label)}></label><label class="form-field"><span>URL</span><input${ssrRenderAttr("value", social.url)} type="url"></label><label class="form-field"><span><input${ssrIncludeBooleanAttr(Array.isArray(social.visible) ? ssrLooseContain(social.visible, null) : social.visible) ? " checked" : ""} type="checkbox"> Vis\xEDvel no site</span></label></div>`);
        });
        _push(`<!--]--></div></section><div class="settings-page__actions"><button class="btn btn--primary"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}>`);
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
//# sourceMappingURL=definicoes-h6er7qaz.mjs.map
