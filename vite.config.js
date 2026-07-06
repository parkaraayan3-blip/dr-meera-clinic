import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Isolate framer-motion into its own chunk so it only loads
          // when below-the-fold lazy components need it
          'framer-motion': ['framer-motion'],
        }
      }
    }
  }
})
