import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages
  // - dev: serve from root for normal local URLs
  // - build: serve from repo subpath (auto-detected in GitHub Actions)
  base:
    command === "build"
      ? (() => {
          const repo = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
          return repo ? `/${repo}/` : "/jericho-m/";
        })()
      : "/",
  plugins: [react()],
  server: {
    port: 3000,
  },
}));
