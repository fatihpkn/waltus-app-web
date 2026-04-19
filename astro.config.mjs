// @ts-check
import {defineConfig, fontProviders} from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.waltusapp.com",
  integrations: [sitemap(), icon()],
  build: {
    // Inline all CSS into <style> tags to eliminate the render-blocking
    // HTML → /_astro/*.css critical request chain (~247ms round-trip saved).
    // The bundled CSS is ~7–8 KiB, small enough that inlining wins over caching.
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      weights: [400, 500, 600, 700, 800],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
});
