/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.ts",
  },
});
// / <reference types="vitest" />
// import { defineConfig, splitVendorChunkPlugin } from "vite";
// import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";

// export default defineConfig(() => {
//   const ANALYZE = process.env.ANALYZE === "true";

//   return {
//     plugins: [
//       react(),
//       // Helps split vendor chunks in a sane default way
//       splitVendorChunkPlugin(),

//       // Only generate bundle report when ANALYZE=true
//       ANALYZE &&
//         visualizer({
//           filename: "dist/stats.html",
//           open: true,
//           gzipSize: true,
//           brotliSize: true,
//         }),
//     ].filter(Boolean),

//     resolve: {
//       alias: {
//         "@": new URL("./src", import.meta.url).pathname,
//       },
//     },

//     build: {
//       rollupOptions: {
//         output: {
//           // Extra control: split common big libs into separate cached chunks
//           manualChunks(id) {
//             if (!id.includes("node_modules")) return;

//             if (id.includes("react") || id.includes("react-dom")) return "react";
//             if (id.includes("react-router")) return "router";

//             // Optional buckets (uncomment if you use these libs)
//             // if (id.includes("@radix-ui") || id.includes("lucide-react")) return "ui";
//             // if (id.includes("recharts") || id.includes("apexcharts") || id.includes("chart.js")) return "charts";
//             // if (id.includes("zod")) return "zod";

//             return "vendor";
//           },
//         },
//       },

//       // Keep warning, but you can tune it if needed.
//       // Better to reduce bundle than just increasing this.
//       chunkSizeWarningLimit: 500,
//     },

//     test: {
//       globals: true,
//       environment: "jsdom",
//       setupFiles: "./src/__tests__/setup.ts",
//     },
//   };
// });
