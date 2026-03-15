import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
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
			allowedHosts: mode === "development" ? true : undefined,
			port: 3000,
		},
	};
});
