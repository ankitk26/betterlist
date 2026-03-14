import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".dev.vars" });

export default defineConfig({
	dialect: "sqlite",
	driver: "d1-http",
	schema: "./src/db/auth-schema.ts",
	dbCredentials: {
		accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
		databaseId: process.env.CLOUDFLARE_DATABASE_ID,
		token: process.env.CLOUDFLARE_D1_TOKEN,
	},
});
