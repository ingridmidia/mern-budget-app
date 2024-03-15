import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
         manifest: {
          icons: [
            {
              src: "/basilIcon.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
          theme_color: "#3c5318",
        },
      }
    ),
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        secure: false,
        changeOrigin: true,
      },
    },
  },
});