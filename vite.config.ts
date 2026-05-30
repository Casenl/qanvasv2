import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Standalone Vite config. When this app is absorbed into the itq-app-portal
// monorepo, add the `@itq/shared` alias and align cacheDir/port with the other
// apps — see docs/migration/MONOREPO_MIGRATION_PLAN.md.
export default defineConfig({
  cacheDir:
    process.platform === "win32" || process.env.WSL_DISTRO_NAME
      ? "/tmp/.vite-qanvas"
      : "node_modules/.vite",
  server: {
    port: 3006,
    host: "0.0.0.0",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    target: "esnext",
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress noise from leftover "use client" directives in source files.
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
});
