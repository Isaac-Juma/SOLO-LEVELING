import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    vue()
  ],

  server: {
    port: 5173,
    open: true,
    strictPort: false,
    // Proxy API requests to backend
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  },

  build: {
    target: 'esnext',
    minify: 'esbuild'
  }
})
