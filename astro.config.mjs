// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://waltus.app",
	integrations: [sitemap()],
	build: {
		// Inline all CSS into <style> tags to eliminate the render-blocking
		// HTML → /_astro/*.css critical request chain (~247ms round-trip saved).
		// The bundled CSS is ~7–8 KiB, small enough that inlining wins over caching.
		inlineStylesheets: "always",
	},
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
