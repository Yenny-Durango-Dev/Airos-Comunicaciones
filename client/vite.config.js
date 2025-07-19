import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  server: {
    https: {
      key: fs.readFileSync('./cert/airoscomunicaciones.com.co-key.pem'),
      cert: fs.readFileSync('./cert/airoscomunicaciones.com.co.pem'),
    },
    host: true, // permite acceder desde la IP pública
  },
})