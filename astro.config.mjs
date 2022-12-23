import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

import image from "@astrojs/image";

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["astro-google-fonts-optimizer"],
    },
  },
  integrations: [
    tailwind(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    compress(),
  ],
});
