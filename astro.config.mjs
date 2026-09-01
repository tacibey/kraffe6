// astro.config.mjs

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://krafferoasters.com",
  // trailingSlash ve build ayarları kaldırıldı, build hatası çözüldü.
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
