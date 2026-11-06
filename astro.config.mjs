import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	site: "https://kriptonik.com",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
