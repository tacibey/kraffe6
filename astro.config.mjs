import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
// import starlight from "@astrojs/starlight"; // Starlight kaldırıldı
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://krafferoasters.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  // Ana i18n bloğu aktif edilebilir, çünkü sitemap bunu kullanabilir
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"], // Sadece kullandığınız diller
    routing: {
      prefixDefaultLocale: false, // Varsayılan dilde /en/ öneki olmasın
    },
    // fallback: { // Gerekirse
    //   fr: "en",
    // },
  },
  prefetch: true,
  integrations: [
    sitemap({
      // i18n bloğu burada olmayacak, Astro'nun genel i18n ayarını kullanacak
    }),
    // starlight({...}), // Starlight kaldırıldı
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx()
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
