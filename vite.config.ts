import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const devAllowedHost =
		mode === "development" ? [env.DEV_ALLOWED_HOST] : undefined;

	return {
		plugins: [
			tailwindcss(),
			cloudflare({ viteEnvironment: { name: "ssr" } }),
			tanstackStart(),
			viteReact(),
		],
		resolve: {
			tsconfigPaths: true,
		},
		server: {
			allowedHosts: devAllowedHost,
			port: 3000,
		},
	};
});
