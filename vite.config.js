import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://oseqhcjgpskwtltbtihy.supabase.co/functions/v1',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => {
            if (path.startsWith('/api/contact-form-webhook')) {
              return '/contact-form-webhook'
            }
            return path.replace(/^\/api/, '')
          },
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              const token = env.WEBHOOK_TOKEN
              if (token) {
                proxyReq.setHeader('X-Webhook-Token', token)
              } else {
                console.warn('⚠️ Attention : WEBHOOK_TOKEN est introuvable dans .env.local')
              }
            })
          },
        },
      },
    },
  }
})