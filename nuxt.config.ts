export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "nuxt-icon"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@phosphor-icons/vue"],
    },
    ssr: {
      noExternal: ["@phosphor-icons/vue"],
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
  },
});
