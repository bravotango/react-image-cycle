import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// vite.config.ts
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Crucial for libraries using CJS dependencies
    },
    lib: {
      entry: "src/index.ts",
      name: "ReactImageCycle",
      fileName: (format) => `react-image-cycle.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"], // Add jsx-runtime here
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
