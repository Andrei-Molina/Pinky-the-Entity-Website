import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        story: resolve(__dirname, "story.html"),
        characters: resolve(__dirname, "characters.html"),
        contact: resolve(__dirname, "contact-us.html"),
      }
    }
  }
});
