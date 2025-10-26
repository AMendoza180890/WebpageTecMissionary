// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

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

  output: 'server',
  adapter: vercel(),
  
  devToolbar: {
      enabled: false,
	},

  vite: {
      plugins: [tailwindcss()],
	},

});