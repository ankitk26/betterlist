import { betterFetch } from "better-auth/react";
import { spotifyApiBaseUrl } from "~/static/constants";

export const getRequestWrapper = async <T = unknown>(
  endpoint: string,
  token: string
) => {
  const res = await betterFetch<T>(endpoint, {
    baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
