import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util',
    }
  },
  optimizeDeps: {
    include: ['ethers']
  },
  server: {
    host: true,
    port: 5173
  }
})
