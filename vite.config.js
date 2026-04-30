import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // 1. Base path: Change 'your-repo-name' to your actual GitHub repo name
  // If you are using a custom domain, set this to './'
  base: '/', 

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      // 2. Shortened paths: Allows you to use '@/components/Header' instead of '../../components/Header'
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // 3. Optimization: Combines small CSS files to reduce HTTP requests
    cssCodeSplit: true,
    // 4. Asset handling: Ensures images/assets are organized in the 'dist' folder
    assetsDir: 'assets',
    // 5. Minification: Makes your production site load faster
    minify: 'terser',
  },

  server: {
    port: 3000, // Fixed port for your local development
    open: true, // Automatically opens the browser when you run 'npm run dev'
  }
})