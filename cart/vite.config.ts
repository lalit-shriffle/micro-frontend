import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        './CartApp': './src/App.jsx'
      },
      shared:["react", "react-dom"]
    })
  ],
  server: {
    port: 4002
  }
})
