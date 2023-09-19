import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
    port: 10888,
    proxy: {
      '/api': 'https://ngnl-back-end.onrender.com/',
    },
  },
  resolve: {
    alias: {
      '@mui/material': '@mui/joy',
    },
  },
  plugins: [react(), tsconfigPaths(), mkcert()],
})
