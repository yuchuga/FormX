import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Cache manual bundles & improve index.js initial load time
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // Bundle Splitting
          amplify: ['aws-amplify', '@aws-amplify/auth']
        }
      }
    }
  }
});