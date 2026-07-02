import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://piglet.vercel.app",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    fallback: {
      fr: "en",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          fr: "fr",
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    icon(),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercelStatic(),
});
