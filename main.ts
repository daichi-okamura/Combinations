import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";
import "$std/dotenv/load.ts";

await start(manifest, config);
