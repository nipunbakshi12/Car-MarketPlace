import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        custom: ['YourCustomFont', 'sans-serif'], // Replace with your font name
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()],
  server: { port: 5173 }
})
