import fs from "fs";
import path from "path";

function getAllImages(dir: string, baseUrl: string): { loc: string }[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let images: { loc: string }[] = [];

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      images = images.concat(getAllImages(fullPath, baseUrl + "/" + file.name));
    } else if (/\.(jpe?g|png|webp|gif|avif)$/i.test(file.name)) {
      images.push({ loc: `${baseUrl}/${file.name}` });
    }
  }
  return images;
}

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/image",
  ],

  image: {
    provider: "netlifyImageCdn",
    domains: [],
    formats: ["webp", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    staticFilename: "[publicPath]/images/[name]-[hash][ext]",
  },

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
            disallow: [
              "/_nuxt/",
              "/admin/**",
              "/auth/**",
              "/manutencao",
              "/sitemap.xml",
            ],
          },
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
      htmlAttrs: {
        lang: "pt-PT",
      },
      title: "GDCSS Castelões",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://gdcsscasteloes.pt/" },
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
    },
  },

  sitemap: {
    exclude: ["/admin/**", "/auth/**", "/manutencao"],
    urls: async () => {
      const publicPath = path.join(process.cwd(), "public");
      const baseUrl = "https://gdcsscasteloes.pt";

      // Busca todas as imagens no /public e subpastas
      const images = getAllImages(publicPath, baseUrl);

      return [
        {
          loc: "https://gdcsscasteloes.pt/",
          images,
        },
      ];
    },
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
