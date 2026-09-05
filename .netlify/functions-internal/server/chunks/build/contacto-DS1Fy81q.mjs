import { _ as __nuxt_component_0 } from './Container-BfHLpACB.mjs';
import { _ as _sfc_main$1 } from './CmsManagedPageHeader-cB3vskBP.mjs';
import __nuxt_component_0$1 from './Icon-jTnUEsFD.mjs';
import { withAsyncContext, ref, withCtx, unref, createVNode, withModifiers, createTextVNode, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useSiteSettings } from './useSiteSettings-Cdgs1imL.mjs';
import { b as useRuntimeConfig } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Sectionhead-DAjZ4P2v.mjs';
import './public.repository-zOMnXrxb.mjs';
import './asyncData-D54zHTjC.mjs';
import 'perfect-debounce';
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
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "contacto",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { settings } = ([__temp, __restore] = withAsyncContext(() => useSiteSettings()), __temp = await __temp, __restore(), __temp);
    const firstName = ref("");
    const lastName = ref("");
    const senderEmail = ref("");
    const subject = ref("");
    const message = ref("");
    const errors = ref({ firstName: false, lastName: false, senderEmail: false, subject: false, message: false });
    const touched = ref(false);
    const formError = ref(false);
    const submitting = ref(false);
    const submitSuccess = ref("");
    const validateFields = () => {
      errors.value.firstName = !firstName.value.trim();
      errors.value.lastName = !lastName.value.trim();
      errors.value.senderEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.value.trim());
      errors.value.subject = !subject.value.trim();
      errors.value.message = !message.value.trim();
      return !Object.values(errors.value).includes(true);
    };
    async function handleSubmit() {
      touched.value = true;
      formError.value = false;
      submitSuccess.value = "";
      if (!validateFields()) {
        formError.value = true;
        return;
      }
      submitting.value = true;
      try {
        await $fetch(`${config.public.apiBase}/api/public/contact`, { method: "POST", body: { firstName: firstName.value, lastName: lastName.value, email: senderEmail.value, subject: subject.value, message: message.value } });
        submitSuccess.value = "Mensagem enviada com sucesso. Entraremos em contacto assim que poss\xEDvel.";
        firstName.value = "";
        lastName.value = "";
        senderEmail.value = "";
        subject.value = "";
        message.value = "";
        touched.value = false;
      } catch (e) {
        formError.value = true;
      } finally {
        submitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_CmsManagedPageHeader = _sfc_main$1;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CmsManagedPageHeader, {
              "page-slug": "contacto",
              "fallback-title": "Contacto",
              "fallback-description": "Preenche o formul\xE1rio e entra em contacto connosco.\nEnvia-nos uma mensagem ou email. Respondemos o mais r\xE1pido poss\xEDvel!"
            }, null, _parent2, _scopeId));
            _push2(`<div class="mx-auto mt-16 max-w-full"${_scopeId}><div class="bg-surface rounded-2xl p-6 w-full border border-neutral-200"${_scopeId}><form${_scopeId}><div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full"${_scopeId}><div${_scopeId}><label class="block text-fluid-sm font-medium text-neutral-600 mb-1"${_scopeId}> Nome <span class="text-secondary-800"${_scopeId}>*</span></label><input${ssrRenderAttr("value", firstName.value)} type="text" placeholder="Primeiro nome" class="${ssrRenderClass([
              "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
              touched.value && errors.value.firstName ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
            ])}"${_scopeId}></div><div${_scopeId}><label class="block text-fluid-sm font-medium text-neutral-600 mb-1"${_scopeId}> Apelido <span class="text-secondary-800"${_scopeId}>*</span></label><input${ssrRenderAttr("value", lastName.value)} type="text" placeholder="\xDAltimo nome" class="${ssrRenderClass([
              "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
              touched.value && errors.value.lastName ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
            ])}"${_scopeId}></div></div><div class="mb-4"${_scopeId}><label class="block text-fluid-sm font-medium text-neutral-600 mb-1"${_scopeId}> O teu Email <span class="text-secondary-800"${_scopeId}>*</span></label><input${ssrRenderAttr("value", senderEmail.value)} type="email" placeholder="teuemail@exemplo.com" class="${ssrRenderClass([
              "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
              touched.value && errors.value.senderEmail ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
            ])}"${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-fluid-sm font-medium text-neutral-600 mb-1"${_scopeId}> Assunto <span class="text-secondary-800"${_scopeId}>*</span></label><input${ssrRenderAttr("value", subject.value)} type="text" placeholder="Assunto da mensagem" class="${ssrRenderClass([
              "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
              touched.value && errors.value.subject ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
            ])}"${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-fluid-sm font-medium text-neutral-600 mb-1"${_scopeId}> Mensagem <span class="text-secondary-800"${_scopeId}>*</span></label><textarea rows="5" placeholder="Escreve aqui a tua mensagem..." class="${ssrRenderClass([
              "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
              touched.value && errors.value.message ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
            ])}"${_scopeId}>${ssrInterpolate(message.value)}</textarea></div>`);
            if (formError.value) {
              _push2(`<div class="mb-2 text-secondary-800 font-semibold"${_scopeId}>N\xE3o foi poss\xEDvel enviar. Confirma os campos e tenta novamente.</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (submitSuccess.value) {
              _push2(`<div class="mb-3 rounded-md bg-primary-50 p-3 text-primary-800 font-medium"${_scopeId}>${ssrInterpolate(submitSuccess.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"${_scopeId}>${ssrInterpolate(submitting.value ? "A enviar\u2026" : "Enviar mensagem")}</button></div></form></div></div><div class="space-y-4 text-neutral-600 mt-5"${_scopeId}><div class="grid grid-cols-1 gap-4 md:flex md:justify-between md:items-center md:gap-2 md:px-0 justify-center items-center"${_scopeId}>`);
            if (unref(settings).contactEmail) {
              _push2(`<div class="flex items-center gap-2 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "uil:envelope",
                class: "text-primary-700 w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`<a${ssrRenderAttr("href", `mailto:${unref(settings).contactEmail}`)} class="hover:underline" aria-label="Clica aqui para mandar email"${_scopeId}>${ssrInterpolate(unref(settings).contactEmail)}</a></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center gap-2 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "uil:map-marker",
              class: "text-primary-700 w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Castel\xF5es, Penafiel, Portugal</span></div></div></div>`);
          } else {
            return [
              createVNode(_component_CmsManagedPageHeader, {
                "page-slug": "contacto",
                "fallback-title": "Contacto",
                "fallback-description": "Preenche o formul\xE1rio e entra em contacto connosco.\nEnvia-nos uma mensagem ou email. Respondemos o mais r\xE1pido poss\xEDvel!"
              }),
              createVNode("div", { class: "mx-auto mt-16 max-w-full" }, [
                createVNode("div", { class: "bg-surface rounded-2xl p-6 w-full border border-neutral-200" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(handleSubmit, ["prevent"])
                  }, [
                    createVNode("div", { class: "mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-fluid-sm font-medium text-neutral-600 mb-1" }, [
                          createTextVNode(" Nome "),
                          createVNode("span", { class: "text-secondary-800" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => firstName.value = $event,
                          type: "text",
                          placeholder: "Primeiro nome",
                          class: [
                            "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
                            touched.value && errors.value.firstName ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
                          ]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, firstName.value]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-fluid-sm font-medium text-neutral-600 mb-1" }, [
                          createTextVNode(" Apelido "),
                          createVNode("span", { class: "text-secondary-800" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => lastName.value = $event,
                          type: "text",
                          placeholder: "\xDAltimo nome",
                          class: [
                            "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
                            touched.value && errors.value.lastName ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
                          ]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, lastName.value]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-fluid-sm font-medium text-neutral-600 mb-1" }, [
                        createTextVNode(" O teu Email "),
                        createVNode("span", { class: "text-secondary-800" }, "*")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => senderEmail.value = $event,
                        type: "email",
                        placeholder: "teuemail@exemplo.com",
                        class: [
                          "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
                          touched.value && errors.value.senderEmail ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
                        ]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, senderEmail.value]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-fluid-sm font-medium text-neutral-600 mb-1" }, [
                        createTextVNode(" Assunto "),
                        createVNode("span", { class: "text-secondary-800" }, "*")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => subject.value = $event,
                        type: "text",
                        placeholder: "Assunto da mensagem",
                        class: [
                          "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
                          touched.value && errors.value.subject ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
                        ]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, subject.value]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-fluid-sm font-medium text-neutral-600 mb-1" }, [
                        createTextVNode(" Mensagem "),
                        createVNode("span", { class: "text-secondary-800" }, "*")
                      ]),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => message.value = $event,
                        rows: "5",
                        placeholder: "Escreve aqui a tua mensagem...",
                        class: [
                          "w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700",
                          touched.value && errors.value.message ? "border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800" : "border border-neutral-200"
                        ]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, message.value]
                      ])
                    ]),
                    formError.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-2 text-secondary-800 font-semibold"
                    }, "N\xE3o foi poss\xEDvel enviar. Confirma os campos e tenta novamente.")) : createCommentVNode("", true),
                    submitSuccess.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mb-3 rounded-md bg-primary-50 p-3 text-primary-800 font-medium"
                    }, toDisplayString(submitSuccess.value), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: submitting.value,
                        class: "bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
                      }, toDisplayString(submitting.value ? "A enviar\u2026" : "Enviar mensagem"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", { class: "space-y-4 text-neutral-600 mt-5" }, [
                createVNode("div", { class: "grid grid-cols-1 gap-4 md:flex md:justify-between md:items-center md:gap-2 md:px-0 justify-center items-center" }, [
                  unref(settings).contactEmail ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-2 justify-center"
                  }, [
                    createVNode(_component_Icon, {
                      name: "uil:envelope",
                      class: "text-primary-700 w-5 h-5"
                    }),
                    createVNode("a", {
                      href: `mailto:${unref(settings).contactEmail}`,
                      class: "hover:underline",
                      "aria-label": "Clica aqui para mandar email"
                    }, toDisplayString(unref(settings).contactEmail), 9, ["href"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex items-center gap-2 justify-center" }, [
                    createVNode(_component_Icon, {
                      name: "uil:map-marker",
                      class: "text-primary-700 w-5 h-5"
                    }),
                    createVNode("span", null, "Castel\xF5es, Penafiel, Portugal")
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacto-DS1Fy81q.mjs.map
