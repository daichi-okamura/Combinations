import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts"
import twindConfig from "./twind.config.ts";

export default defineConfig({
  server: {
    port: 9000,
    onListen(params) {
      console.log(`Server started on http://${params.hostname}:${params.port}`);
    },
  },
  plugins: [twindPlugin(twindConfig)],
});
