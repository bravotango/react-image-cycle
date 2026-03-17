import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react({
      // This is the key: tell Vite to use the modern runtime
      // but DON'T let it inject CJS shims.
      jsxRuntime: "automatic",
    }),
    dts({ insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ReactImageCycle",
      fileName: (format) => `react-image-cycle.es.js`,
      formats: ["es"],
    },
    rollupOptions: {
      // Force these to be external so NO code from them enters your bundle
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // No 'interop' here to avoid TS errors.
        // Vite 8/Rolldown defaults to ESM-friendly output for 'es' format.
        format: "es",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
