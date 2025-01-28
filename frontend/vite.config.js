import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      "/api":{
        target: "https://chat-application-api-by-sachin.onrender.com",
        changeOrigin: true, // Ensures that the Origin header is correctly set to the target API's domain
        secure: false, 
      }
    }
  }
})
