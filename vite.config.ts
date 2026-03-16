import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    // Switching to 'classic' is mandatory to remove 'require' calls
    // for jsx-runtime that crash Next.js 16.
    react({ jsxRuntime: "classic" }),
    dts({ insertTypesEntry: true }),
  ],
  build: {
    lib: {
      // Use an absolute path. Verify if it is .ts or .tsx!
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ReactImageCycle",
      fileName: (format) => `react-image-cycle.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      // Externalize react/jsx-runtime specifically
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        format: "es",
      },
    },
  },
});
