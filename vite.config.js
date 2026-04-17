import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

  // GitHub Pages needs the repo subpath base (e.g. /my-repo/).
  // Vercel (and most other hosts) should build with base "/".
  const base = isGitHubActions && repo ? `/${repo}/` : "/";

  return {
    base,
    plugins: [react()],
    server: {
      port: 3000,
    },
  };
});
