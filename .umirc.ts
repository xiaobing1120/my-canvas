import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home" },
    { path: "/text", component: "text" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});
