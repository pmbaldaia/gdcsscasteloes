import fs from "fs";
import path from "path";

function getAllImages(dir: string, baseUrl: string): { loc: string }[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let images: { loc: string }[] = [];
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      images = images.concat(getAllImages(fullPath, `${baseUrl}/${file.name}`));
    } else if (/\.(jpe?g|png|webp|gif|avif)$/i.test(file.name)) {
      images.push({ loc: `${baseUrl}/${file.name}` });
    }
  }
  return images;
}

function getAllRoutes(dir: string, prefix = ""): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      routes = routes.concat(getAllRoutes(fullPath, `${prefix}/${file.name}`));
    } else if (file.name.endsWith(".vue")) {
      const name = file.name.replace(/\.vue$/, "");
      if (name === "index") {
        routes.push(prefix || "/");
      } else {
        routes.push(`${prefix}/${name}`);
      }
    }
  }
  return routes;
}

const isProd = process.env.NODE_ENV === "production";

const PROD_URL = "https://gdcsscasteloes.pt";
const DEV_URL  = "http://localhost:3000";
const siteUrl  = isProd ? PROD_URL : DEV_URL;

export default defineNuxtConfig({
  compatibilityDate: "2026-05-23",

  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
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
    sitemap: isProd ? `${PROD_URL}/sitemap.xml` : false,
  },

  image: {
    // ✅ ipx funciona em dev e produção com imagens em /public
    // O provider "netlify" requer Edge Functions e causa problemas de build
    provider: "ipx",
    format: ["webp"],
    quality: 80,
    densities: [1],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      hero: {
        modifiers: { width: 700, fit: "inside", format: "webp", quality: 82 },
      },
      card: {
        modifiers: { width: 480, height: 480, fit: "cover", format: "webp", quality: 80 },
      },
      cardLg: {
        modifiers: { width: 800, height: 800, fit: "cover", format: "webp", quality: 82 },
      },
      avatar: {
        modifiers: { width: 320, height: 400, fit: "inside", format: "webp", quality: 80 },
      },
      portrait: {
        modifiers: { width: 400, height: 384, fit: "cover", format: "webp", quality: 80 },
      },
      thumb: {
        modifiers: { width: 400, height: 192, fit: "cover", format: "webp", quality: 75 },
      },
      logo: {
        modifiers: { width: 160, height: 120, fit: "inside", format: "webp", quality: 78 },
      },
      badge: {
        modifiers: { width: 80, height: 80, fit: "inside", format: "webp", quality: 80 },
      },
      sponsor: {
        modifiers: { width: 160, height: 120, fit: "inside", format: "webp", quality: 75 },
      },
    },
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
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
        },
      ],
      meta: [
        {
          name: "google-site-verification",
          content: "6IHqvKCdIFhd3KMvHoKemuKEa60Uk4EaRrEkGVqPeFI",
        },
        { name: "description", content: "Site oficial do GDCSS Castelões" },
        { name: "keywords", content: "GDCSS, Castelões, futebol, desporto, clube" },
        { name: "robots", content: isProd ? "index, follow" : "noindex, nofollow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "GDCSS Castelões" },
        { property: "og:description", content: "Site oficial do GDCSS Castelões" },
        { property: "og:image", content: `${PROD_URL}/favicon.ico` },
        { property: "og:type", content: "website" },
        { property: "og:url", content: PROD_URL },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "GDCSS Castelões" },
        { name: "twitter:description", content: "Site oficial do GDCSS Castelões" },
        { name: "twitter:image", content: `${PROD_URL}/favicon.ico` },
      ],
    },
  },

  sitemap: {
    hostname: siteUrl,
    exclude: ["/admin/**", "/auth/**", "/manutencao"],
    urls: async () => {
      const pagesDir = path.join(process.cwd(), "pages");
      const routes = getAllRoutes(pagesDir);
      const publicPath = path.join(process.cwd(), "public");
      const images = getAllImages(publicPath, siteUrl);

      const urls = routes.map((route) => ({
        loc: `${siteUrl}${route}`,
        lastmod: new Date().toISOString(),
      }));

      urls.push({
        loc: siteUrl,
        images,
        lastmod: new Date().toISOString(),
      });

      return urls;
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
      exclude: ["nuxt"],
    },
    ssr: { noExternal: ["@phosphor-icons/vue"] },
  },
});