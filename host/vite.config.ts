import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        products: 'http://localhost:4001/assets/remoteEntry.js',
        cart: 'http://localhost:4002/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit'],
    })
  ],
  server: {
    port: 4000,
  },

})
