// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto hace que Vite escuche en todas las interfaces
    port: 5173, // Puedes usar el puerto que prefieras
  },
})
