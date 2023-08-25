import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), splitVendorChunkPlugin()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    esbuild: {
      drop: ["console", "debugger"],
      pure: mode != "dev" ? ["console.log"] : [],
    },
    build: {
      minify: "esbuild",
      // brotliSize: false,
      // 消除打包大小超过警告
      // remote console.log in prod
      // build assets Separate
      assetsDir: "static/assets",
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("@open-ish") || id.includes("tslib")) {
              return "@open-ish";
            }
            // creating a chunk to react routes deps. Reducing the vendor chunk size
            if (
              id.includes("react-router-dom") ||
              id.includes("@remix-run") ||
              id.includes("react-router")
            ) {
              return "@react-router";
            }

            const mods = [
              // "/@mui",
              "/crypto-js",
              // "/@tanstack",
              "/axios",
              "/yup",
            ];
            if (mods.some((m) => id.includes(m)))
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
          },
        },
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
  };
});
