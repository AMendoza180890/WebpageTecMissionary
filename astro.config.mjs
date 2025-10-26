// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://missionarytechsupport.org",
	base: "/",
	// trailingSlash: 'always',
	integrations: [
		alpinejs(),
		playformInline({
			Beasties: true,
		}),
		mdx(),
	],
	output: "server",
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
