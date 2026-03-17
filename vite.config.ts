import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import preserveUseClient from "rollup-plugin-preserve-use-client"; // Import the plugin

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ReactImageCycle",
      fileName: (format) => `react-image-cycle.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      // Add the plugin here
      plugins: [preserveUseClient()],
      output: {
        // Optional: preserves file structure, making 'use client' more granular
        preserveModules: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
