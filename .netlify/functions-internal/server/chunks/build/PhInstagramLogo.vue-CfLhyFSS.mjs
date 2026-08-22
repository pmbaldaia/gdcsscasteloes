import { defineComponent, inject, computed, openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createElementVNode } from 'vue';

const V$1 = ["width", "height", "fill", "transform"], f$1 = { key: 0 }, Z = /* @__PURE__ */ createElementVNode("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z" }, null, -1), w$1 = [
  Z
], A = { key: 1 }, k$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), M$1 = /* @__PURE__ */ createElementVNode("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" }, null, -1), x$1 = [
  k$1,
  M$1
], S$1 = { key: 2 }, z$1 = /* @__PURE__ */ createElementVNode("path", { d: "M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z" }, null, -1), C$1 = [
  z$1
], B$1 = { key: 3 }, b$1 = /* @__PURE__ */ createElementVNode("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z" }, null, -1), N$1 = [
  b$1
], E$1 = { key: 4 }, P$1 = /* @__PURE__ */ createElementVNode("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" }, null, -1), W$1 = [
  P$1
], $$1 = { key: 5 }, j$1 = /* @__PURE__ */ createElementVNode("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z" }, null, -1), F$1 = [
  j$1
], L$1 = {
  name: "PhFacebookLogo"
}, G = /* @__PURE__ */ defineComponent({
  ...L$1,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(r) {
    const s = r, c = inject("weight", "regular"), d = inject("size", "1em"), _ = inject("color", "currentColor"), u = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : c;
    }), h = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : d;
    }), p = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : _;
    }), v = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (l, q) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: h.value,
      height: h.value,
      fill: p.value,
      transform: v.value
    }, l.$attrs), [
      renderSlot(l.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", f$1, w$1)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", A, x$1)) : a.value === "fill" ? (openBlock(), createElementBlock("g", S$1, C$1)) : a.value === "light" ? (openBlock(), createElementBlock("g", B$1, N$1)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E$1, W$1)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $$1, F$1)) : createCommentVNode("", true)
    ], 16, V$1));
  }
});
const M = ["width", "height", "fill", "transform"], y = { key: 0 }, V = /* @__PURE__ */ createElementVNode("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z" }, null, -1), f = [
  V
], H = { key: 1 }, w = /* @__PURE__ */ createElementVNode("path", {
  d: "M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
  opacity: "0.2"
}, null, -1), k = /* @__PURE__ */ createElementVNode("path", { d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" }, null, -1), x = [
  w,
  k
], S = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z" }, null, -1), C = [
  z
], B = { key: 3 }, N = /* @__PURE__ */ createElementVNode("path", { d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z" }, null, -1), b = [
  N
], E = { key: 4 }, P = /* @__PURE__ */ createElementVNode("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" }, null, -1), W = [
  P
], $ = { key: 5 }, j = /* @__PURE__ */ createElementVNode("path", { d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z" }, null, -1), I = [
  j
], L = {
  name: "PhInstagramLogo"
}, F = /* @__PURE__ */ defineComponent({
  ...L,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(h) {
    const s = h, d = inject("weight", "regular"), c = inject("size", "1em"), _ = inject("color", "currentColor"), A2 = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : d;
    }), l = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : c;
    }), m = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : _;
    }), Z2 = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : A2 ? "scale(-1, 1)" : void 0);
    return (r, q) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: m.value,
      transform: Z2.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", y, f)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", H, x)) : a.value === "fill" ? (openBlock(), createElementBlock("g", S, C)) : a.value === "light" ? (openBlock(), createElementBlock("g", B, b)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E, W)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $, I)) : createCommentVNode("", true)
    ], 16, M));
  }
});

export { F, G };
//# sourceMappingURL=PhInstagramLogo.vue-CfLhyFSS.mjs.map
