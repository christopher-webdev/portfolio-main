import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',  // Ensure this matches your GitHub Pages repo name
  plugins: [react()]
})
