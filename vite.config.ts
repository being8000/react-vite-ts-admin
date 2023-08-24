import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      "/merchant": {
        target: "https://merchant-sit.eponwallet.com/merchant",
        ws: false,
        changeOrigin: true,
        secure: true, // 如果是https接口，需要配置这个参数
        // pathRewrite: {
        //   '^/merchant': '/merchant'
        // }
      },
    },
  },
});
