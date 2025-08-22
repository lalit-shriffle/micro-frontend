import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        "./ProductApp": "./src/App.jsx",
      },
      shared: ['react', 'react-dom'],
    })
  ],
   server: {
    port: 4001,   // 👈 remote runs on 4001
  },
  build: {
    target: "esnext",
  }
})
