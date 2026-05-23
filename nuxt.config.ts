import { defineNuxtConfig } from "nuxt/config";

const isProd = process.env.CONTEXT === "production";

const PROD_URL = "https://gdcsscasteloes.pt";
const DEV_URL = "http://localhost:3000";
const siteUrl = isProd ? PROD_URL : DEV_URL;

export default defineNuxtConfig({
  compatibilityDate: "2026-05-23",

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "@nuxt/image",
  ],

  router: {
    options: {
      strict: false,
    },
  },

  robots: {
    rules: [
      {
        userAgent: "*",
        disallow: ["/_nuxt/", "/admin/", "/auth/", "/manutencao"],
        allow: "/",
      },
    ],
  },

  image: {
    provider: "ipx",
    format: ["webp"],
    quality: 80,
    densities: [1],

    presets: {
      hero: { modifiers: { width: 700, fit: "inside", format: "webp", quality: 82 } },
      card: { modifiers: { width: 480, height: 480, fit: "cover", format: "webp", quality: 80 } },
      cardLg: { modifiers: { width: 800, height: 800, fit: "cover", format: "webp", quality: 82 } },
      avatar: { modifiers: { width: 320, height: 400, fit: "inside", format: "webp", quality: 80 } },
      portrait: { modifiers: { width: 400, height: 384, fit: "cover", format: "webp", quality: 80 } },
      thumb: { modifiers: { width: 400, height: 192, fit: "cover", format: "webp", quality: 75 } },
      logo: { modifiers: { width: 160, height: 120, fit: "inside", format: "webp", quality: 78 } },
      badge: { modifiers: { width: 80, height: 80, fit: "inside", format: "webp", quality: 80 } },
      sponsor: { modifiers: { width: 160, height: 120, fit: "inside", format: "webp", quality: 75 } },
    },
  },

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
    preset: "static",
  },

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "pt-PT" },
      title: "GDCSS Castelões",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      meta: [
        { name: "robots", content: isProd ? "index, follow" : "noindex, nofollow" },
      ],
    },
    baseURL: "/",
  },

  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: ["@phosphor-icons/vue"],
    },
    ssr: {
      noExternal: ["@phosphor-icons/vue"],
    },
  },
});