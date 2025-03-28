import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
