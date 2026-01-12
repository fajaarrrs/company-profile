import { defineConfig } from 'vite' // Baris ini yang sebelumnya hilang
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Gunakan '/' untuk deployment di Vercel agar tidak layar putih
})