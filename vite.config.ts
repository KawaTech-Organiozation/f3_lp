import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { cartographer } from "@replit/vite-plugin-cartographer";
import { devBanner } from "@replit/vite-plugin-dev-banner";
import runtimeErrorModal from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    cartographer(),
    devBanner(),
    runtimeErrorModal(),
  ],
  root: "./client",
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@client": path.resolve(__dirname, "./client/src"),
      "@server": path.resolve(__dirname, "./server"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
