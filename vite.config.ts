import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import netlify from "@netlify/vite-plugin-tanstack-start"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const devAllowedHost =
    mode === "development" ? [env.DEV_ALLOWED_HOST] : undefined

  return {
    plugins: [
      tsconfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
      tanstackStart(),
      viteReact(),
      netlify(),
    ],
    server: {
      allowedHosts: devAllowedHost,
      port: 3000,
    },
  }
})
