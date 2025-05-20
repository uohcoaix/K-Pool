import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from 'unocss/vite'
import { resolve } from 'path';

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/assets': resolve(__dirname, 'src/assets'),
      '@/stores': resolve(__dirname, 'src/stores'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/views': resolve(__dirname, 'src/views'),
      '@/utils': resolve(__dirname, 'src/utils')
    }
  },
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
