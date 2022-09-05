import path from "path";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: true
      }
    })
  ],
  assetsInclude: ["**/*.png", "**/*.ico"],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
    dedupe: ["svelte"]
  },
  optimizeDeps: {
    exclude: ["@roxi/routify"]
  },
  clearScreen: false,
})
