import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '.replit.dev',
      '.repl.co',
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {}, 
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './', // Use relative paths for assets
  build: {
    assetsDir: 'assets', // Organize assets in an assets folder
    emptyOutDir: true, // Clean the dist folder before build
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})