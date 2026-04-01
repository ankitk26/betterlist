import { cloudflare } from "@cloudflare/vite-plugin";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			tailwindcss(),
			cloudflare({ viteEnvironment: { name: "ssr" } }),
			tanstackStart(),
			viteReact(),
			babel({
				presets: [reactCompilerPreset()],
			}),
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
