import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        page: './pages/index.html'
      }
    },
    cssCodeSplit: false,
    assetsDir: 'assets'
  },
  css: {
    postcss: './postcss.config.js'
  }
})