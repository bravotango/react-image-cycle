// vite.config.ts (in your library)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    // This is the most important part for Next.js 16.
    // It tells Vite NOT to inject 'react/jsx-runtime' shims.
    react({ jsxRuntime: "classic" }),
    dts({ insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ReactImageCycle",
      fileName: (format) => `react-image-cycle.${format}.js`,
      formats: ["es"], // Only ship ES modules
    },
    rollupOptions: {
      // If it's not here, it might be bundled with a 'require' call!
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      output: {
        format: "es",
      },
    },
  },
});
