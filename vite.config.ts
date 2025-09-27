import path from "path";
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
 
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'gsap'],
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});