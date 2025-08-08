export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/image",
  ],

  runtimeConfig: {
    public: {
      siteUrl: "https://gdcsscasteloes.pt",
      sitemap: {
        hostname: "https://gdcsscasteloes.pt",
        exclude: ["/admin/**", "/auth/**", "/manutencao"],
      },
      robots: {
        rules: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
        sitemap: "https://gdcsscasteloes.pt/sitemap.xml",
      },
    },
  },

  app: {
    head: {
      title: "GDCSS Castelões",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Preload da imagem principal para melhorar LCP
        {
          rel: "preload",
          as: "image",
          href: "/assets/img/gdcss-castelões-tarja.webp",
          fetchpriority: "high",
        },
        // Preload + carregamento assíncrono do CSS global para reduzir bloqueio
        {
          rel: "preload",
          as: "style",
          href: "/_nuxt/assets/css/main.css", // Ajusta o caminho correto do CSS compilado se necessário
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
      meta: [
        {
          name: "google-site-verification",
          content: "6IHqvKCdIFhd3KMvHoKemuKEa60Uk4EaRrEkGVqPeFI",
        },
        { name: "description", content: "Site oficial do GDCSS Castelões" },
        {
          name: "keywords",
          content: "GDCSS, Castelões, futebol, desporto, clube",
        },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "GDCSS Castelões" },
        {
          property: "og:description",
          content: "Site oficial do GDCSS Castelões",
        },
        {
          property: "og:image",
          content: "https://gdcsscasteloes.pt/favicon.ico",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://gdcsscasteloes.pt" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "GDCSS Castelões" },
        {
          name: "twitter:description",
          content: "Site oficial do GDCSS Castelões",
        },
        {
          name: "twitter:image",
          content: "https://gdcsscasteloes.pt/favicon.ico",
        },
      ],
      // Caso uses scripts externos que bloqueiam renderização, adiciona defer aqui
      // script: [
      //   { src: 'https://exemplo.com/script.js', defer: true }
      // ]
    },
  },

  sitemap: {
    exclude: ["/admin/**", "/auth/**", "/manutencao"],
  },

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
