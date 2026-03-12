import { c as createServerFn, g as getRequest } from "../server.js";
import { a as auth } from "./auth-QHBGbWNS.js";
import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.js";
import "@better-auth/core/env";
import "@better-auth/core/error";
import "@better-auth/utils/random";
import "@better-auth/utils/hex";
import "@better-auth/utils/hash";
import "@better-auth/utils";
import "@noble/ciphers/chacha.js";
import "@noble/ciphers/utils.js";
import "@better-auth/core/db";
import "@better-auth/core/utils/db";
import "@noble/hashes/hkdf.js";
import "@noble/hashes/sha2.js";
import "jose";
import "@better-auth/core/utils/json";
import "zod";
import "@better-auth/utils/base64";
import "@better-auth/utils/binary";
import "@better-auth/utils/hmac";
import "@better-auth/core/context";
import "better-call";
import "@better-auth/core/utils/url";
import "@better-auth/core/api";
import "@better-auth/core/utils/deprecate";
import "@better-auth/core/utils/ip";
import "@better-auth/core/utils/id";
import "defu";
import "@better-auth/core/social-providers";
import "jose/errors";
import "@better-auth/kysely-adapter";
import "@better-auth/core/db/adapter";
import "kysely";
import "@noble/hashes/scrypt.js";
import "@noble/hashes/utils.js";
import "@better-auth/telemetry";
import "@better-auth/core";
import "@better-auth/core/oauth2";
import "@better-auth/core/utils/error-codes";
import "@better-auth/drizzle-adapter";
import "@better-fetch/fetch";
import "@better-auth/core/utils/fetch-metadata";
import "@better-auth/utils/otp";
import "drizzle-orm/postgres-js";
import "postgres";
import "drizzle-orm/pg-core";
import "./createSsrRpc-DFX_9v9X.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const getAuthSession_createServerFn_handler = createServerRpc(
	{
		id: "95a75a77e931d3cf1e912b6c0d185bd3a9e050f9b48b77984af91cf28208d47d",
		name: "getAuthSession",
		filename: "src/server-fns/get-auth-session.ts",
	},
	(opts) => getAuthSession.__executeServer(opts),
);
const getAuthSession = createServerFn({
	method: "GET",
}).handler(getAuthSession_createServerFn_handler, async () => {
	const request = getRequest();
	if (!request) {
		return null;
	}
	const session = await auth.api.getSession({
		headers: request.headers,
	});
	return session;
});
export { getAuthSession_createServerFn_handler };
