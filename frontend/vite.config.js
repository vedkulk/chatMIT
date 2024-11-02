import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5001", // Switch to HTTP if HTTPS is not configured
        changeOrigin: true,
        secure: false
      }
    }
  }
})