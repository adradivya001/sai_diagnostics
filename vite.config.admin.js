import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Dedicated configuration for the Admin Dashboard running independently on port 5174
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'admin-spa-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Serve admin.html for SPA client navigation unless requesting an asset file
          const url = req.url ? req.url.split('?')[0] : ''
          if (
            !url.includes('.') &&
            !url.startsWith('/@') &&
            !url.startsWith('/src') &&
            !url.startsWith('/node_modules') &&
            !url.startsWith('/api')
          ) {
            req.url = '/admin.html'
          }
          next()
        })
      },
    },
  ],
  server: {
    port: 5174,
    strictPort: true,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
})
