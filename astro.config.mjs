// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://missionarytechsupport.org",
  base: "/",

  // trailingSlash: 'always',
  integrations: [alpinejs(), playformInline({
      Beasties: true,
  }), mdx(), react()],

  output: 'server',
  adapter: vercel(),
  
  devToolbar: {
      enabled: false,
    },

  vite: {
      plugins: [tailwindcss()],
      envPrefix: ['BREVO_']
    },

});