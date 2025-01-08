import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_VITE_API_KEY': JSON.stringify(env.REACT_APP_VITE_API_KEY),
      'process.env.REACT_APP_VITE_LOCAL_API_URL': JSON.stringify(env.REACT_APP_VITE_LOCAL_API_URL),
      'process.env.REACT_APP_VITE_API_URL': JSON.stringify(env.REACT_APP_VITE_API_URL),
      'process.env.REACT_APP_GOOGLE_MAPS_API_KEY': JSON.stringify(env.REACT_APP_GOOGLE_MAPS_API_KEY)
    },
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://livingsphere.tscreativestudio.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
