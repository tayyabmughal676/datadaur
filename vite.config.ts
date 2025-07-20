import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// import sitemap from 'vite-plugin-sitemap'; // 1. REMOVE THIS LINE

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // sitemap({ hostname: 'https://datadaur.vercel.app' }) // 2. AND REMOVE THIS LINE
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  publicDir: 'public',
  server: {
    proxy: {
      // Proxy API requests to your Express server during development
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  }
})