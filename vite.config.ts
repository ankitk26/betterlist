import netlify from "@netlify/vite-plugin-tanstack-start"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), "")
  // const devAllowedHost =
  //   mode === "development" ? [env.DEV_ALLOWED_HOST] : undefined

  return {
    plugins: [
      tsconfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
      netlify(),
      tanstackStart(),
      viteReact(),
    ],
    server: {
      // allowedHosts: devAllowedHost,
      port: 3000,
    },
  }
})
