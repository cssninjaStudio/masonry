import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["astro-google-fonts-optimizer", "plyr"],
    },
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    alpinejs(),
    compress(),
  ],
});
