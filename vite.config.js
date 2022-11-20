import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": "http://localhost:8080",
      // "/upload": "http://electronic-gallery.oss-cn-hongkong.aliyuncs.com",
    }
  }
})
