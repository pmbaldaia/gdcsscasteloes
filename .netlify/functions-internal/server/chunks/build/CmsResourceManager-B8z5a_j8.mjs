import __nuxt_component_0 from './Icon-jTnUEsFD.mjs';
import { _ as _sfc_main$3 } from './CmsBadge-0fejhyyb.mjs';
import { _ as _sfc_main$4 } from './CmsPagination-IjAT6u2C.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderDynamicModel, ssrRenderTeleport } from 'vue/server-renderer';
import { m as mediaService } from './media.service-gqqdC7_q.mjs';
import { u as useToast } from './useToast-BJDEtn_Q.mjs';
import { a as useRoute, d as useRouter, e as useAuth } from './server.mjs';
import { u as useConfirm } from './useConfirm-CFUPPoka.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CmsDateTimePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    type: {},
    required: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(null);
    const icon = computed(() => ({
      date: "lucide:calendar-days",
      time: "lucide:clock-3",
      "datetime-local": "lucide:calendar-clock"
    })[props.type]);
    const quickLabel = computed(() => props.type === "date" ? "Hoje" : "Agora");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["cms-date-picker", { "is-readonly": __props.readonly }]
      }, _attrs))}><div class="cms-date-picker__control">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(icon),
        size: "18",
        class: "cms-date-picker__leading-icon"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", __props.modelValue || "")}${ssrRenderAttr("type", __props.type)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrIncludeBooleanAttr(__props.readonly) ? " readonly" : ""}${ssrRenderAttr("placeholder", __props.placeholder)}>`);
      if (!__props.readonly) {
        _push(`<button type="button" class="cms-date-picker__open"${ssrRenderAttr("aria-label", __props.type === "time" ? "Abrir seletor de hora" : "Abrir seletor de data")}>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-down",
          size: "16"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!__props.readonly) {
        _push(`<div class="cms-date-picker__quick-actions"><button type="button">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: __props.type === "date" ? "lucide:calendar-check" : "lucide:clock",
          size: "14"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(quickLabel))}</button>`);
        if (__props.modelValue) {
          _push(`<button type="button">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            size: "14"
          }, null, _parent));
          _push(` Limpar </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsDateTimePicker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CmsGalleryImagePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useToast();
    mediaService();
    const libraryOpen = ref(false);
    const library = ref([]);
    const libraryPending = ref(false);
    const uploading = ref(false);
    const selectedLibraryUrls = ref([]);
    const search = ref("");
    const images = computed(() => Array.isArray(props.modelValue) ? props.modelValue : []);
    const imageLibrary = computed(() => {
      const q = search.value.trim().toLowerCase();
      return library.value.filter((item) => {
        if (item.name.toLowerCase().endsWith(".pdf")) return false;
        if (!q) return true;
        return item.name.toLowerCase().includes(q);
      });
    });
    const isSelected = (url) => images.value.includes(url);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-picker" }, _attrs))}><div class="gallery-picker__toolbar"><label class="${ssrRenderClass([{ "is-disabled": unref(uploading) }, "btn btn--primary gallery-picker__upload"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(uploading) ? "lucide:loader-circle" : "lucide:upload"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(uploading) ? "A carregar\u2026" : "Carregar imagens")} <input type="file" accept="image/*" multiple hidden${ssrIncludeBooleanAttr(unref(uploading)) ? " disabled" : ""}></label><button type="button" class="btn btn--secondary">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:images" }, null, _parent));
      _push(` Escolher da Multim\xE9dia </button><span class="gallery-picker__count">${ssrInterpolate(unref(images).length)} ${ssrInterpolate(unref(images).length === 1 ? "imagem" : "imagens")}</span></div>`);
      if (unref(images).length) {
        _push(`<div class="gallery-picker__selected"><!--[-->`);
        ssrRenderList(unref(images), (url, index) => {
          _push(`<article class="gallery-picker__selected-card"><img${ssrRenderAttr("src", url)}${ssrRenderAttr("alt", `Imagem ${index + 1} do \xE1lbum`)}><span>${ssrInterpolate(index + 1)}</span><button type="button" class="gallery-picker__remove"${ssrRenderAttr("aria-label", `Remover imagem ${index + 1}`)} title="Remover">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            size: "16"
          }, null, _parent));
          _push(`</button></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="gallery-picker__empty">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:images",
          size: "30"
        }, null, _parent));
        _push(`<strong>Sem imagens selecionadas</strong><span>Carrega novas imagens ou escolhe ficheiros da Multim\xE9dia.</span></div>`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(libraryOpen)) {
          _push2(`<div class="modal-backdrop gallery-library-backdrop"><section class="cms-modal gallery-library-modal"><header><div><p class="eyebrow">Biblioteca</p><h2>Escolher da Multim\xE9dia</h2><p>Seleciona uma ou v\xE1rias imagens para adicionar ao \xE1lbum.</p></div><button type="button" class="icon-button">`);
          _push2(ssrRenderComponent(_component_Icon, { name: "lucide:x" }, null, _parent));
          _push2(`</button></header><label class="resource-search gallery-library-search">`);
          _push2(ssrRenderComponent(_component_Icon, { name: "lucide:search" }, null, _parent));
          _push2(`<input${ssrRenderAttr("value", unref(search))} type="search" placeholder="Pesquisar ficheiros\u2026"></label>`);
          if (unref(libraryPending)) {
            _push2(`<div class="cms-loading">A carregar Multim\xE9dia\u2026</div>`);
          } else if (!unref(imageLibrary).length) {
            _push2(`<div class="empty-state">`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:image-off",
              size: "30"
            }, null, _parent));
            _push2(`<h3>Sem imagens dispon\xEDveis</h3><p>Carrega imagens na Multim\xE9dia ou utiliza o bot\xE3o de upload deste \xE1lbum.</p></div>`);
          } else {
            _push2(`<div class="gallery-library-grid"><!--[-->`);
            ssrRenderList(unref(imageLibrary), (item) => {
              _push2(`<button type="button" class="${ssrRenderClass([{
                "is-selected": unref(selectedLibraryUrls).includes(item.url),
                "is-used": isSelected(item.url)
              }, "gallery-library-item"])}"${ssrIncludeBooleanAttr(isSelected(item.url)) ? " disabled" : ""}><img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.name)}><span class="gallery-library-item__check">`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: isSelected(item.url) ? "lucide:check" : unref(selectedLibraryUrls).includes(item.url) ? "lucide:check" : "lucide:circle",
                size: "17"
              }, null, _parent));
              _push2(`</span><span class="gallery-library-item__name">${ssrInterpolate(item.name)}</span>`);
              if (isSelected(item.url)) {
                _push2(`<small>J\xE1 adicionada</small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button>`);
            });
            _push2(`<!--]--></div>`);
          }
          _push2(`<footer><span class="gallery-library-selection">${ssrInterpolate(unref(selectedLibraryUrls).length)} selecionada${ssrInterpolate(unref(selectedLibraryUrls).length === 1 ? "" : "s")}</span><button type="button" class="btn btn--secondary"> Cancelar </button><button type="button" class="btn btn--primary"${ssrIncludeBooleanAttr(!unref(selectedLibraryUrls).length) ? " disabled" : ""}>`);
          _push2(ssrRenderComponent(_component_Icon, { name: "lucide:plus" }, null, _parent));
          _push2(` Adicionar selecionadas </button></footer></section></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsGalleryImagePicker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const valueLabels = {
  active: "Ativo",
  inactive: "Inativo",
  enabled: "Ativo",
  disabled: "Inativo",
  pending: "Pendente",
  draft: "Rascunho",
  published: "Publicado",
  archived: "Arquivado",
  cancelled: "Cancelado",
  canceled: "Cancelado",
  upcoming: "Pr\xF3ximo",
  ongoing: "A decorrer",
  finished: "Terminado",
  completed: "Conclu\xEDdo",
  new: "Novo",
  reviewing: "Em an\xE1lise",
  resolved: "Resolvido",
  closed: "Fechado",
  hidden: "Oculto",
  visible: "Vis\xEDvel",
  admin: "Administrador",
  viewer: "Consulta e edi\xE7\xE3o",
  create: "Cria\xE7\xE3o",
  update: "Atualiza\xE7\xE3o",
  delete: "Elimina\xE7\xE3o",
  games: "Jogos e jornadas",
  teams: "Equipas",
  players: "Plantel",
  staff: "Equipa t\xE9cnica",
  board: "Dire\xE7\xE3o",
  events: "Eventos",
  gallery: "Galeria",
  sponsors: "Patroc\xEDnios",
  opportunities: "Oportunidades",
  messages: "Mensagens",
  members: "S\xF3cios",
  settings: "Defini\xE7\xF5es",
  users: "Utilizadores",
  media: "Multim\xE9dia"
};
const keyLabels = {
  createdAt: "Criado em",
  updatedAt: "Atualizado em",
  status: "Estado",
  state: "Estado",
  actorName: "Utilizador",
  resourceId: "Identificador",
  pageSlug: "P\xE1gina"
};
function cmsValueLabel(value) {
  var _a;
  if (value === true) return "Sim";
  if (value === false) return "N\xE3o";
  const key = String(value != null ? value : "");
  return (_a = valueLabels[key]) != null ? _a : value;
}
function cmsKeyLabel(key) {
  var _a;
  return (_a = keyLabels[key]) != null ? _a : key;
}
function cmsStatusTone(value) {
  const key = String(value != null ? value : "");
  if (["active", "published", "resolved", "finished", "completed", "visible"].includes(key)) return "success";
  if (["pending", "draft", "upcoming", "reviewing", "ongoing"].includes(key)) return "warning";
  if (["inactive", "cancelled", "canceled"].includes(key)) return "danger";
  return "info";
}
const pageSize = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CmsResourceManager",
  __ssrInlineRender: true,
  props: {
    service: {},
    title: {},
    description: {},
    fields: {},
    columns: {},
    publishKey: { default: "status" },
    showSearch: { type: Boolean, default: true },
    allowCreate: { type: Boolean, default: true },
    allowEdit: { type: Boolean, default: true },
    allowDelete: { type: Boolean, default: true },
    showPublishAction: { type: Boolean, default: true },
    editActionLabel: { default: "Editar" },
    panelNote: { default: "As altera\xE7\xF5es guardadas ficam dispon\xEDveis automaticamente onde este conte\xFAdo \xE9 utilizado." },
    emptyText: { default: "Ainda n\xE3o existe conte\xFAdo. Adiciona o primeiro item para come\xE7ar." },
    defaultFilters: { default: () => ({}) },
    inlineEditor: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    useRoute();
    useRouter();
    const items = ref([]);
    const pending = ref(false);
    const error = ref("");
    useToast();
    useConfirm();
    const { user } = useAuth();
    const isAdmin = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.role) === "admin";
    });
    const isViewer = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.role) === "viewer";
    });
    const canCreate = computed(() => props.allowCreate && isAdmin.value);
    const canEdit = computed(() => props.allowEdit && (isAdmin.value || isViewer.value));
    const canDelete = computed(() => props.allowDelete && isAdmin.value);
    const query = ref("");
    const page = ref(1);
    const filters = ref(
      Object.fromEntries(
        props.fields.filter((f) => f.filterable).map((f) => {
          var _a, _b;
          return [f.key, (_b = (_a = props.defaultFilters) == null ? void 0 : _a[f.key]) != null ? _b : ""];
        })
      )
    );
    const editing = ref(null);
    const editingId = ref(null);
    const modalOpen = ref(false);
    const saving = ref(false);
    const uploadBusy = ref({});
    const localImagePreviews = ref({});
    const visibleColumns = computed(() => {
      var _a;
      return ((_a = props.columns) == null ? void 0 : _a.length) ? props.columns : props.fields.slice(0, 4).map((f) => f.key);
    });
    const filterFields = computed(() => props.fields.filter((f) => f.filterable));
    const isPublishable = computed(() => props.showPublishAction && props.fields.some((f) => f.key === props.publishKey));
    const normalizedOption = (option) => typeof option === "object" && option !== null && "value" in option ? option : { value: option, label: String(option) };
    const optionLabel = (field, value) => {
      var _a;
      const match = (field.options || []).map(normalizedOption).find((o) => String(o.value) === String(value));
      return (_a = match == null ? void 0 : match.label) != null ? _a : cmsValueLabel(value);
    };
    const fieldLabel = (key) => {
      var _a, _b;
      return ((_a = props.fields.find((f) => f.key === key)) == null ? void 0 : _a.tableLabel) || ((_b = props.fields.find((f) => f.key === key)) == null ? void 0 : _b.label) || cmsKeyLabel(key);
    };
    const formatDateTime = (value) => {
      if (!value) return "\u2014";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return value;
      return new Intl.DateTimeFormat("pt-PT", { dateStyle: "short", timeStyle: "short" }).format(date);
    };
    const display = (item, key) => {
      const v = item[key];
      const field = props.fields.find((f) => f.key === key);
      if ((field == null ? void 0 : field.type) === "image-multi" && Array.isArray(v)) return `${v.length} ${v.length === 1 ? "imagem" : "imagens"}`;
      if (Array.isArray(v)) return v.join(" \xB7 ");
      if ((field == null ? void 0 : field.type) === "select") return optionLabel(field, v);
      if (key === "pageSlug") return cmsValueLabel(v);
      if ((field == null ? void 0 : field.type) === "datetime-local") return formatDateTime(v);
      if (typeof v === "boolean") return v ? "Sim" : "N\xE3o";
      return v != null ? v : "\u2014";
    };
    const isStatusColumn = (key) => key === "status" || key === "state";
    const statusTone = (value) => cmsStatusTone(value);
    const isImageColumn = (key) => {
      var _a;
      return ((_a = props.fields.find((f) => f.key === key)) == null ? void 0 : _a.type) === "image";
    };
    const imagePreviewFor = (field) => {
      var _a;
      return localImagePreviews.value[field.key] || ((_a = editing.value) == null ? void 0 : _a[field.key]) || "";
    };
    const filteredItems = computed(() => {
      const q = query.value.trim().toLowerCase();
      return items.value.filter((item) => {
        var _a;
        if (q && !Object.values(item).some((v) => String(Array.isArray(v) ? v.join(" ") : v != null ? v : "").toLowerCase().includes(q))) return false;
        for (const field of filterFields.value) {
          const selected = filters.value[field.key];
          if (selected !== void 0 && selected !== null && selected !== "" && String((_a = item[field.key]) != null ? _a : "") !== String(selected)) return false;
        }
        return true;
      });
    });
    const totalPages = computed(() => Math.max(1, Math.ceil(filteredItems.value.length / pageSize)));
    const paginatedItems = computed(() => {
      const safePage = Math.min(Math.max(1, page.value), totalPages.value);
      const start = (safePage - 1) * pageSize;
      return filteredItems.value.slice(start, start + pageSize);
    });
    watch([query, filters], () => {
      page.value = 1;
    }, { deep: true });
    watch(totalPages, (total) => {
      if (page.value > total) page.value = total;
    });
    const buttonFromRaw = (raw, index = 0) => {
      const parts = String(raw != null ? raw : "").split("|");
      const label = parts[0] || "";
      const url = parts[1] || "";
      const rawStyle = parts[2];
      const style = rawStyle === "secondary" || rawStyle === "primary" ? rawStyle : index === 0 ? "primary" : "secondary";
      return { label, url, style };
    };
    function buttonPart(fieldKey, index, key) {
      var _a;
      if (!editing.value) return "";
      return buttonFromRaw((_a = editing.value[fieldKey]) == null ? void 0 : _a[index], index)[key];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_CmsBadge = _sfc_main$3;
      const _component_CmsPagination = _sfc_main$4;
      const _component_CmsDateTimePicker = _sfc_main$2;
      const _component_CmsGalleryImagePicker = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-stack" }, _attrs))}>`);
      if (!unref(modalOpen)) {
        _push(`<header class="page-heading"><div><p class="eyebrow">\xC1rea de gest\xE3o</p><h1>${ssrInterpolate(__props.title)}</h1><p class="page-heading__description">${ssrInterpolate(__props.description)}</p></div>`);
        if (unref(canCreate)) {
          _push(`<div class="page-heading__actions"><button class="btn btn--primary">`);
          _push(ssrRenderComponent(_component_Icon, { name: "lucide:plus" }, null, _parent));
          _push(` Adicionar novo</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<p class="cms-alert cms-alert--danger">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.inlineEditor || !unref(modalOpen)) {
        _push(`<section class="panel content-panel"><div class="panel__header content-panel__header"><div><h2>${ssrInterpolate(unref(filteredItems).length)} de ${ssrInterpolate(unref(items).length)} itens</h2><p>${ssrInterpolate(__props.panelNote)}</p></div><div class="resource-tools">`);
        if (__props.showSearch) {
          _push(`<label class="resource-search">`);
          _push(ssrRenderComponent(_component_Icon, { name: "lucide:search" }, null, _parent));
          _push(`<input${ssrRenderAttr("value", unref(query))} type="search" placeholder="Pesquisar\u2026"></label>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(filterFields), (field) => {
          _push(`<label class="resource-filter-wrap"><span>${ssrInterpolate(field.label)}</span><select class="resource-filter"${ssrRenderAttr("aria-label", `Filtrar por ${field.label}`)}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filters)[field.key]) ? ssrLooseContain(unref(filters)[field.key], "") : ssrLooseEqual(unref(filters)[field.key], "")) ? " selected" : ""}>Todos os estados</option><!--[-->`);
          ssrRenderList(field.options, (option) => {
            _push(`<option${ssrRenderAttr("value", normalizedOption(option).value)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters)[field.key]) ? ssrLooseContain(unref(filters)[field.key], normalizedOption(option).value) : ssrLooseEqual(unref(filters)[field.key], normalizedOption(option).value)) ? " selected" : ""}>${ssrInterpolate(normalizedOption(option).label)}</option>`);
          });
          _push(`<!--]--></select></label>`);
        });
        _push(`<!--]-->`);
        if (unref(query) || Object.values(unref(filters)).some(Boolean)) {
          _push(`<button class="btn btn--ghost">`);
          _push(ssrRenderComponent(_component_Icon, { name: "lucide:x" }, null, _parent));
          _push(` Limpar filtros</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="btn btn--secondary"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}>`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:refresh-cw" }, null, _parent));
        _push(` Atualizar lista</button></div></div>`);
        if (unref(pending)) {
          _push(`<div class="cms-loading">A carregar\u2026</div>`);
        } else if (!unref(filteredItems).length) {
          _push(`<div class="empty-state">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:inbox",
            size: "30"
          }, null, _parent));
          _push(`<h3>${ssrInterpolate(unref(query) || Object.values(unref(filters)).some(Boolean) ? "Sem resultados" : "Ainda n\xE3o existe conte\xFAdo")}</h3><p>${ssrInterpolate(unref(query) || Object.values(unref(filters)).some(Boolean) ? "Altera a pesquisa ou os filtros." : __props.emptyText)}</p>`);
          if (unref(canCreate) && !unref(query) && !Object.values(unref(filters)).some(Boolean)) {
            _push(`<button class="btn btn--primary">Adicionar conte\xFAdo</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="table-scroll"><table class="data-table resource-data-table"><thead><tr><!--[-->`);
          ssrRenderList(unref(visibleColumns), (c) => {
            _push(`<th>${ssrInterpolate(fieldLabel(c))}</th>`);
          });
          _push(`<!--]--><th>A\xE7\xF5es</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(unref(paginatedItems), (item) => {
            _push(`<tr><!--[-->`);
            ssrRenderList(unref(visibleColumns), (c) => {
              _push(`<td${ssrRenderAttr("data-label", fieldLabel(c))}>`);
              if (isImageColumn(c) && item[c]) {
                _push(`<img${ssrRenderAttr("src", item[c])}${ssrRenderAttr("alt", `Imagem de ${display(item, unref(visibleColumns)[0])}`)} class="table-image-preview" loading="lazy">`);
              } else if (c === unref(visibleColumns)[0]) {
                _push(`<strong>${ssrInterpolate(display(item, c))}</strong>`);
              } else if (isStatusColumn(c)) {
                _push(ssrRenderComponent(_component_CmsBadge, {
                  label: String(display(item, c)),
                  tone: statusTone(item[c])
                }, null, _parent));
              } else {
                _push(`<!--[-->${ssrInterpolate(display(item, c))}<!--]-->`);
              }
              _push(`</td>`);
            });
            _push(`<!--]--><td data-label="A\xE7\xF5es"><div class="row-actions">`);
            if (unref(isPublishable) && unref(canEdit)) {
              _push(`<button class="icon-button icon-button--small"${ssrRenderAttr("title", item[__props.publishKey] === "draft" ? "Publicar" : "Despublicar")}${ssrRenderAttr("aria-label", item[__props.publishKey] === "draft" ? "Publicar" : "Despublicar")}>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: item[__props.publishKey] === "draft" ? "lucide:eye" : "lucide:eye-off"
              }, null, _parent));
              _push(`<span class="row-actions__label">${ssrInterpolate(item[__props.publishKey] === "draft" ? "Publicar" : "Despublicar")}</span></button>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(canEdit)) {
              _push(`<button class="icon-button icon-button--small"${ssrRenderAttr("title", __props.editActionLabel)}${ssrRenderAttr("aria-label", __props.editActionLabel)}>`);
              _push(ssrRenderComponent(_component_Icon, { name: "lucide:pencil" }, null, _parent));
              _push(`<span class="row-actions__label">${ssrInterpolate(__props.editActionLabel)}</span></button>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(canDelete)) {
              _push(`<button class="icon-button icon-button--small danger" title="Eliminar" aria-label="Eliminar">`);
              _push(ssrRenderComponent(_component_Icon, { name: "lucide:trash-2" }, null, _parent));
              _push(`<span class="row-actions__label">Eliminar</span></button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        }
        _push(ssrRenderComponent(_component_CmsPagination, {
          page: unref(page),
          "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
          "total-items": unref(filteredItems).length,
          "page-size": pageSize
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(modalOpen) && __props.inlineEditor && unref(editing)) {
        _push(`<section class="resource-editor-page" aria-live="polite"><div class="resource-editor-nav"><button type="button" class="resource-back-button">`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-left" }, null, _parent));
        _push(` Voltar atr\xE1s</button><nav class="resource-breadcrumb" aria-label="Breadcrumb"><button type="button">\xC1rea de gest\xE3o</button>`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-right" }, null, _parent));
        _push(`<button type="button">${ssrInterpolate(__props.title)}</button>`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-right" }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(editingId) !== null ? "Editar" : "Adicionar")}</span></nav></div><div class="panel resource-inline-editor"><form class="resource-inline-editor__form"><header class="resource-inline-editor__header"><div><p class="eyebrow">${ssrInterpolate(unref(editingId) !== null ? "Editar conte\xFAdo" : "Adicionar conte\xFAdo")}</p><h1>${ssrInterpolate(unref(editingId) !== null ? `Editar ${__props.title}` : `Adicionar ${__props.title}`)}</h1><p>${ssrInterpolate(unref(editingId) !== null ? "Atualiza os campos necess\xE1rios e guarda as altera\xE7\xF5es." : "Preenche os campos necess\xE1rios para adicionar um novo registo.")}</p></div></header><div class="form-grid resource-inline-editor__grid"><!--[-->`);
        ssrRenderList(__props.fields, (field) => {
          var _a;
          _push(`<label class="${ssrRenderClass([{ "form-field--wide": ["textarea", "array", "buttons", "image", "image-multi"].includes(field.type || "") }, "form-field"])}"><span>${ssrInterpolate(field.label)}</span>`);
          if (field.type === "textarea") {
            _push(`<textarea rows="5"${ssrRenderAttr("placeholder", field.placeholder)}${ssrIncludeBooleanAttr(field.readonly) ? " readonly" : ""}>${ssrInterpolate(unref(editing)[field.key])}</textarea>`);
          } else if (field.type === "array") {
            _push(`<textarea rows="5" placeholder="Um item por linha">${ssrInterpolate(Array.isArray(unref(editing)[field.key]) ? unref(editing)[field.key].join("\n") : unref(editing)[field.key])}</textarea>`);
          } else if (field.type === "buttons") {
            _push(`<div class="cms-buttons-editor">`);
            if (!((_a = unref(editing)[field.key]) == null ? void 0 : _a.length)) {
              _push(`<div class="cms-buttons-editor__empty">Ainda n\xE3o existem bot\xF5es neste bloco.</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--[-->`);
            ssrRenderList(unref(editing)[field.key], (_raw, index) => {
              _push(`<article class="cms-button-row"><div class="cms-button-row__heading"><strong>Bot\xE3o ${ssrInterpolate(index + 1)}</strong><button type="button" class="text-button danger">`);
              _push(ssrRenderComponent(_component_Icon, { name: "lucide:trash-2" }, null, _parent));
              _push(` Remover</button></div><div class="cms-button-row__fields"><label><span>Texto do bot\xE3o</span><input${ssrRenderAttr("value", buttonPart(field.key, index, "label"))} type="text" placeholder="Ex.: Saber mais"></label><label><span>Destino</span><input${ssrRenderAttr("value", buttonPart(field.key, index, "url"))} type="text" placeholder="Ex.: /contacto"></label><label><span>Estilo</span><select${ssrRenderAttr("value", buttonPart(field.key, index, "style"))}><option value="primary">Prim\xE1rio</option><option value="secondary">Secund\xE1rio</option></select></label></div></article>`);
            });
            _push(`<!--]--><button type="button" class="btn btn--secondary cms-buttons-editor__add">`);
            _push(ssrRenderComponent(_component_Icon, { name: "lucide:plus" }, null, _parent));
            _push(` Adicionar bot\xE3o</button><small class="form-field__hint">O primeiro bot\xE3o \xE9 criado como Prim\xE1rio. A partir do segundo, o estilo predefinido \xE9 Secund\xE1rio para manter a hierarquia visual.</small></div>`);
          } else if (field.type === "select") {
            _push(`<select${ssrIncludeBooleanAttr(field.readonly) ? " disabled" : ""}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(editing)[field.key]) ? ssrLooseContain(unref(editing)[field.key], "") : ssrLooseEqual(unref(editing)[field.key], "")) ? " selected" : ""}>Seleciona uma op\xE7\xE3o</option><!--[-->`);
            ssrRenderList(field.options, (option) => {
              _push(`<option${ssrRenderAttr("value", normalizedOption(option).value)}${ssrIncludeBooleanAttr(Array.isArray(unref(editing)[field.key]) ? ssrLooseContain(unref(editing)[field.key], normalizedOption(option).value) : ssrLooseEqual(unref(editing)[field.key], normalizedOption(option).value)) ? " selected" : ""}>${ssrInterpolate(normalizedOption(option).label)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else if (["date", "time", "datetime-local"].includes(field.type || "")) {
            _push(ssrRenderComponent(_component_CmsDateTimePicker, {
              modelValue: unref(editing)[field.key],
              "onUpdate:modelValue": ($event) => unref(editing)[field.key] = $event,
              type: field.type,
              required: field.required !== false,
              readonly: field.readonly,
              placeholder: field.placeholder
            }, null, _parent));
          } else if (field.type === "image-multi") {
            _push(ssrRenderComponent(_component_CmsGalleryImagePicker, {
              modelValue: unref(editing)[field.key],
              "onUpdate:modelValue": ($event) => unref(editing)[field.key] = $event
            }, null, _parent));
          } else if (field.type === "image") {
            _push(`<div class="image-field">`);
            if (imagePreviewFor(field)) {
              _push(`<div class="image-preview-card"><img${ssrRenderAttr("src", imagePreviewFor(field))}${ssrRenderAttr("alt", `Pr\xE9-visualiza\xE7\xE3o de ${field.label}`)} class="image-preview"><div class="image-preview-card__meta"><span>${ssrInterpolate(unref(localImagePreviews)[field.key] ? "Nova imagem selecionada" : "Imagem atual")}</span>`);
              if (unref(editing)[field.key] && !unref(localImagePreviews)[field.key]) {
                _push(`<a${ssrRenderAttr("href", unref(editing)[field.key])} target="_blank" rel="noopener">Abrir imagem</a>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div>`);
            } else {
              _push(`<div class="image-preview-empty">`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "lucide:image",
                size: "28"
              }, null, _parent));
              _push(`<span>Ainda n\xE3o existe imagem.</span></div>`);
            }
            _push(`<input${ssrRenderAttr("value", unref(editing)[field.key])} type="text"${ssrRenderAttr("placeholder", field.placeholder || "Endere\xE7o da imagem ou caminho do ficheiro")}><label class="${ssrRenderClass([{ "is-loading": unref(uploadBusy)[field.key] }, "image-upload-button"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: unref(uploadBusy)[field.key] ? "lucide:loader-circle" : "lucide:upload"
            }, null, _parent));
            _push(`${ssrInterpolate(unref(uploadBusy)[field.key] ? "A carregar\u2026" : imagePreviewFor(field) ? "Substituir imagem" : "Carregar imagem")}<input type="file" accept="image/*" hidden${ssrIncludeBooleanAttr(unref(uploadBusy)[field.key]) ? " disabled" : ""}></label>`);
            if (imagePreviewFor(field)) {
              _push(`<button type="button" class="btn btn--ghost image-remove-button"${ssrIncludeBooleanAttr(unref(uploadBusy)[field.key]) ? " disabled" : ""}>`);
              _push(ssrRenderComponent(_component_Icon, { name: "lucide:x" }, null, _parent));
              _push(` Remover imagem</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<small class="form-field__hint">A pr\xE9-visualiza\xE7\xE3o \xE9 atualizada assim que selecionas o ficheiro. O endere\xE7o final da imagem \xE9 guardado depois de guardares as altera\xE7\xF5es.</small></div>`);
          } else {
            _push(`<input${ssrRenderDynamicModel(field.type || "text", unref(editing)[field.key], null)}${ssrRenderAttr("type", field.type || "text")}${ssrRenderAttr("placeholder", field.placeholder)}${ssrIncludeBooleanAttr(field.required !== false) ? " required" : ""}${ssrIncludeBooleanAttr(field.readonly) ? " readonly" : ""}>`);
          }
          if (field.hint) {
            _push(`<small class="form-field__hint">${ssrInterpolate(field.hint)}</small>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</label>`);
        });
        _push(`<!--]--></div><footer class="resource-inline-editor__footer"><button type="button" class="btn btn--secondary">Cancelar</button><button class="btn btn--primary"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""}>${ssrInterpolate(unref(saving) ? "A guardar\u2026" : unref(editingId) !== null ? "Guardar altera\xE7\xF5es" : "Adicionar conte\xFAdo")}</button></footer></form></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CmsResourceManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CmsResourceManager-B8z5a_j8.mjs.map
