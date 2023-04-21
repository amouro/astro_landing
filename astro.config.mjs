import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://amouro.github.io',
  integrations: [
    preact(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
