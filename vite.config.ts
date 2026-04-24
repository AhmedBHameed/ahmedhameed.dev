import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss({
      optimize: {
        minify: true,
      },
    }),
    reactRouter(),
    {
      name: "ignore-well-known",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith("/.well-known")) {
            res.statusCode = 204; // No Content
            return res.end();
          }
          next();
        });
      },
    },
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
