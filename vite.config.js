import { defineConfig } from "vite";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJs()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "FabWa",
      fileName: "fab-wa",
      formats: ["es", "umd"]
    },
    cssCodeSplit: false,
    emptyOutDir: false
  }
});
