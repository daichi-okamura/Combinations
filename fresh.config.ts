import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  server: {
    port: 9000,
    onListen(params) {
      console.log(`Server started on http://${params.hostname}:${params.port}`);
    },
  },
  plugins: [tailwind()],
});
