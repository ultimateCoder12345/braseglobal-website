import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      treeshake: false
    }
  },
  logLevel: 'info'
})