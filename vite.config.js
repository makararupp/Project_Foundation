import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base './' lets the built /dist folder work on any static host or sub-folder
  base: './',

  plugins: [vue()],

  server: {
    port: 5173,          // fixed port (change this if you want a different one)
    strictPort: true,    // fail if port is already in use (instead of auto-switching)
    host: '0.0.0.0',        // expose to LAN → lets phones/tablets on same Wi-Fi access it
    open: true,          // auto-open browser when you run `npm run dev`
  },
})
