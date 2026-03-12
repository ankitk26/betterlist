import { betterFetch } from "@better-fetch/fetch";
import { eq } from "drizzle-orm";
import { c as createServerFn } from "../server.js";
import { d as db, b as account } from "./auth-QHBGbWNS.js";
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
const getNewExpiryDate = (expiresIn) => {
	const currentTime = Date.now();
	const expiryTime = currentTime + expiresIn * 1e3;
	return new Date(expiryTime);
};
const refreshTokenFromSpotify = async (refreshToken, userId) => {
	const response = await betterFetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
			client_id: process.env.SPOTIFY_CLIENT_ID,
		}),
	});
	if (!response.data) {
		return null;
	}
	const updatedExpiryDate = getNewExpiryDate(response.data.expires_in);
	try {
		await db
			.update(account)
			.set({
				accessToken: response.data.access_token,
				accessTokenExpiresAt: updatedExpiryDate,
				refreshToken: response.data.refresh_token,
			})
			.where(eq(account.userId, userId));
	} catch (e) {
		console.error(e);
	}
	return response.data.access_token;
};
const getUserAccount_createServerFn_handler = createServerRpc(
	{
		id: "029131a4f772755474fa44e863b4ee627ac78b88728915d7fe2e07a158849e82",
		name: "getUserAccount",
		filename: "src/lib/get-user-account.ts",
	},
	(opts) => getUserAccount.__executeServer(opts),
);
const getUserAccount = createServerFn({
	method: "GET",
})
	.inputValidator((session) => session)
	.handler(getUserAccount_createServerFn_handler, async ({ data: session }) => {
		const accountData = await db
			.select({
				accountId: account.accountId,
				accessToken: account.accessToken,
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshToken: account.refreshToken,
			})
			.from(account)
			.where(eq(account.userId, session.userId))
			.limit(1)
			.then((res) => res[0]);
		if (!accountData) {
			return {
				token: null,
				accountId: null,
			};
		}
		const tokenExpiry = new Date(
			accountData.accessTokenExpiresAt ?? Date.now(),
		).getTime();
		const currentTime = Date.now();
		if (currentTime >= tokenExpiry) {
			const newAccessToken = await refreshTokenFromSpotify(
				accountData.refreshToken,
				session.userId,
			);
			return {
				token: newAccessToken,
				accountId: accountData.accountId,
			};
		}
		return {
			token: accountData.accessToken,
			accountId: accountData.accountId,
		};
	});
export { getUserAccount_createServerFn_handler };
