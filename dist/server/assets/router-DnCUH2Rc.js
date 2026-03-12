import {
	SpinnerIcon,
	XCircleIcon,
	WarningIcon,
	InfoIcon,
	CheckCircleIcon,
} from "@phosphor-icons/react";
import { queryOptions, QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	Outlet,
	HeadContent,
	Scripts,
	createFileRoute,
	lazyRouteComponent,
	redirect,
	createRouter,
} from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { useTheme, ThemeProvider } from "next-themes";
import { jsx, jsxs } from "react/jsx-runtime";
import { Toaster as Toaster$1 } from "sonner";
import { z } from "zod";
import { c as createServerFn } from "../server.js";
import { a as auth } from "./auth-QHBGbWNS.js";
import { c as createSsrRpc } from "./createSsrRpc-DFX_9v9X.js";
import { g as getAuthSession } from "./get-auth-session-C8yCND15.js";
const Toaster = ({ ...props }) => {
	const { theme = "system" } = useTheme();
	return /* @__PURE__ */ jsx(Toaster$1, {
		theme,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ jsx(CheckCircleIcon, { className: "size-4" }),
			info: /* @__PURE__ */ jsx(InfoIcon, { className: "size-4" }),
			warning: /* @__PURE__ */ jsx(WarningIcon, { className: "size-4" }),
			error: /* @__PURE__ */ jsx(XCircleIcon, { className: "size-4" }),
			loading: /* @__PURE__ */ jsx(SpinnerIcon, {
				className: "size-4 animate-spin",
			}),
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)",
		},
		toastOptions: {
			classNames: {
				toast: "cn-toast",
			},
		},
		...props,
	});
};
const getAlbumById = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"5752ecb259387305714e99c3edd316ae3635dc78d3de14b6128f8841e3f57074",
		),
	);
createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"5e7fe3042b95dce3f4b8c075ff3beef1abb9d707442b59348ec49290604c02f4",
		),
	);
const getArtistAppearsOn = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"1e30eab7ba86e9a14339424dba5fdcaf9a72cd77dfb32d305a32e4546f8bc002",
		),
	);
const getArtistById = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"7ae46e726d2be4145426871e3793e78518b09a2dfefb5980c482a931f3628239",
		),
	);
const getArtistCompilation = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"1424f9fc0d937433ea3c701e92b4d9492a2efcd28a7145e78fb245ebc833ee7b",
		),
	);
const getArtistDiscography = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"c6ca6a3ecbf482583230a78730b69a0999fac3480e176a845871e860308dae58",
		),
	);
createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"6ab4c87752d716f34f6dfad4610d56b4d323c78a3f4626f6f63d604355c7216e",
		),
	);
const getArtistTopTracks = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"a2d5bb7304e768c3e5684b02f0555929a2a6c7b36a678a990a91b0aa56230f70",
		),
	);
const getLikedSongs = createServerFn({
	method: "GET",
}).handler(
	createSsrRpc(
		"5db58611bdde2b2256eb3bef7e693e8a3e5025c87b03815ca3c7cd6ad4194f65",
	),
);
const getLikedSongsCount = createServerFn({
	method: "GET",
}).handler(
	createSsrRpc(
		"80dcf5b23bdbbe977496ffd856f47f7ab5ee3c1d18dd3d1c155982b005cfd520",
	),
);
const getPlaylistById = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"025caab3224966d1f821c8e8d9321fa8cc60cfd90d2c7c9ba5040fd2d69d7a34",
		),
	);
const getRecentlyPlayed = createServerFn({
	method: "GET",
}).handler(
	createSsrRpc(
		"f6aaafb19c1b7b0933f39636c0583ee7257a0033b20bf9b43f6784d6fd4fa46f",
	),
);
const paramSchema$2 = z.object({
	type: z.enum(["artist", "album", "track", "playlist", "all"]).default("all"),
	query: z.string(),
	limit: z.number().default(5),
});
const getSearchItems = createServerFn({
	method: "GET",
})
	.inputValidator(paramSchema$2)
	.handler(
		createSsrRpc(
			"d54b0dc0381cf89927b3b255db57a5b1d4f21644e6521ef4d1f02187b51f5f06",
		),
	);
const getUserAlbums = createServerFn({
	method: "GET",
}).handler(
	createSsrRpc(
		"56c966ddcd29e9e01ec92571559dc2af6685a4d2f6ec2781df39c32408736144",
	),
);
const getUserArtists = createServerFn({
	method: "GET",
}).handler(
	createSsrRpc(
		"75e2d9934b7cdc5fa1f312fb614febaf72937143a997684e1a01616b508d9184",
	),
);
const getUserPlaylists = createServerFn({
	method: "GET",
}).handler(
	createSsrRpc(
		"1f37ddb89f07acc8dd84608be7e784a04cba6e0181085e959514b86c5380f439",
	),
);
const paramSchema$1 = z.object({
	range: z
		.enum(["long_term", "short_term", "medium_term"])
		.default("short_term"),
	limit: z.number().default(50),
});
const getUserTopArtists = createServerFn({
	method: "GET",
})
	.inputValidator(paramSchema$1)
	.handler(
		createSsrRpc(
			"1c736deab57eb97cc350ae5ff19cb08a4b3c49859b9419c805cab3bd669f572f",
		),
	);
const paramSchema = z.object({
	range: z
		.enum(["long_term", "short_term", "medium_term"])
		.default("short_term"),
	limit: z.number().default(50),
});
const getUserTopTracks = createServerFn({
	method: "GET",
})
	.inputValidator(paramSchema)
	.handler(
		createSsrRpc(
			"5157fd1d2a101d6e979caac7aa4b254b4a84a99ab9baafc093b4db50f476af86",
		),
	);
const authSessionQuery = queryOptions({
	queryKey: ["auth", "session"],
	queryFn: ({ signal }) => getAuthSession({ signal }),
	staleTime: 1e3 * 60 * 15,
	// 15 minutes
});
const likedSongsCountQuery = queryOptions({
	queryKey: ["liked_songs_count"],
	queryFn: () => getLikedSongsCount(),
});
const userPlaylistsQuery = queryOptions({
	queryKey: ["user_playlists"],
	queryFn: () => getUserPlaylists(),
});
const userAlbumsQuery = queryOptions({
	queryKey: ["user_albums"],
	queryFn: () => getUserAlbums(),
});
const userArtistsQuery = queryOptions({
	queryKey: ["user_artists"],
	queryFn: () => getUserArtists(),
});
const userTopTracksQuery = (params) =>
	queryOptions({
		queryKey: ["user_top_tracks", { ...params }],
		queryFn: () => getUserTopTracks({ data: { ...params } }),
	});
const userTopArtistsQuery = (params) =>
	queryOptions({
		queryKey: ["user_top_artists", { ...params }],
		queryFn: () => getUserTopArtists({ data: { ...params } }),
	});
queryOptions({
	queryKey: ["recently_played"],
	queryFn: () => getRecentlyPlayed(),
});
const albumByIdQuery = (albumId) =>
	queryOptions({
		queryKey: ["album", albumId],
		queryFn: () => getAlbumById({ data: albumId }),
	});
const artistByIdQuery = (artistId) =>
	queryOptions({
		queryKey: ["artist", artistId],
		queryFn: () => getArtistById({ data: artistId }),
	});
const artistTopTracksQuery = (artistId) =>
	queryOptions({
		queryKey: ["artist", "top_tracks", artistId],
		queryFn: () => getArtistTopTracks({ data: artistId }),
	});
const artistDiscographyQuery = (artistId) =>
	queryOptions({
		queryKey: ["artist", "discography", artistId],
		queryFn: () => getArtistDiscography({ data: artistId }),
	});
const artistCompilationQuery = (artistId) =>
	queryOptions({
		queryKey: ["artist", "compilation", artistId],
		queryFn: () => getArtistCompilation({ data: artistId }),
	});
const artistAppearsOnQuery = (artistId) =>
	queryOptions({
		queryKey: ["artist", "appears_on", artistId],
		queryFn: () => getArtistAppearsOn({ data: artistId }),
	});
const playlistByIdQuery = (playlistId) =>
	queryOptions({
		queryKey: ["playlist", playlistId],
		queryFn: () => getPlaylistById({ data: playlistId }),
	});
const likedSongsQuery = queryOptions({
	queryKey: ["liked_songs"],
	queryFn: () => getLikedSongs(),
});
const searchItemsQuery = (params) =>
	queryOptions({
		queryKey: ["search", { ...params }],
		queryFn: () => getSearchItems({ data: { ...params } }),
	});
const appCss = "/assets/app-BwLVUHh2.css";
const Route$e = createRootRouteWithContext()({
	beforeLoad: async ({ context }) => {
		const session = await context.queryClient.fetchQuery(authSessionQuery);
		return { session };
	},
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "betterlist",
			},
		],
		links: [{ rel: "stylesheet", href: appCss }],
	}),
	component: RootComponent,
});
function RootComponent() {
	return /* @__PURE__ */ jsx(RootDocument, {
		children: /* @__PURE__ */ jsx(Outlet, {}),
	});
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [
			/* @__PURE__ */ jsx("head", {
				children: /* @__PURE__ */ jsx(HeadContent, {}),
			}),
			/* @__PURE__ */ jsxs("body", {
				children: [
					/* @__PURE__ */ jsxs(ThemeProvider, {
						attribute: "class",
						defaultTheme: "system",
						disableTransitionOnChange: true,
						enableSystem: true,
						children: [
							children,
							/* @__PURE__ */ jsx(Toaster, {
								style: { fontFamily: "inherit" },
							}),
						],
					}),
					/* @__PURE__ */ jsx(Scripts, {}),
				],
			}),
		],
	});
}
const $$splitComponentImporter$c = () => import("./login-1IaYZvBK.js");
const Route$d = createFileRoute("/login")({
	component: lazyRouteComponent($$splitComponentImporter$c, "component"),
});
const $$splitComponentImporter$b = () => import("./_protected-CHHJf6iX.js");
const Route$c = createFileRoute("/_protected")({
	beforeLoad: ({ context }) => {
		const session = context.session;
		if (!session) {
			throw redirect({
				to: "/login",
			});
		}
		return {
			session,
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$b, "component"),
});
const $$splitComponentImporter$a = () => import("./index-B8Z7K6U4.js");
const Route$b = createFileRoute("/_protected/")({
	component: lazyRouteComponent($$splitComponentImporter$a, "component"),
});
const Route$a = createFileRoute("/api/auth/$")({
	server: {
		handlers: {
			GET: ({ request }) => {
				return auth.handler(request);
			},
			POST: ({ request }) => {
				return auth.handler(request);
			},
		},
	},
});
const $$splitComponentImporter$9 = () => import("./search._query-DyLqscV9.js");
const Route$9 = createFileRoute("/_protected/search/$query")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
});
const $$splitComponentImporter$8 = () =>
	import("./playlists._playlistId-Bo1d0vVH.js");
const Route$8 = createFileRoute("/_protected/playlists/$playlistId")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
});
const $$splitComponentImporter$7 = () =>
	import("./collection.tracks-heefdV7M.js");
const Route$7 = createFileRoute("/_protected/collection/tracks")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
});
const $$splitComponentImporter$6 = () =>
	import("./artists._artistId-tGIr2nXU.js");
const Route$6 = createFileRoute("/_protected/artists/$artistId")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
});
const $$splitComponentImporter$5 = () =>
	import("./albums._albumId-Zf3q25Mt.js");
const Route$5 = createFileRoute("/_protected/albums/$albumId")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
});
const $$splitComponentImporter$4 = () =>
	import("./search._query.index-B-GgWvd3.js");
const Route$4 = createFileRoute("/_protected/search/$query/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
const $$splitComponentImporter$3 = () =>
	import("./search._query.tracks-DyKwB08b.js");
const Route$3 = createFileRoute("/_protected/search/$query/tracks")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
const $$splitComponentImporter$2 = () =>
	import("./search._query.playlists-C3Z_hj_E.js");
const Route$2 = createFileRoute("/_protected/search/$query/playlists")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
const $$splitComponentImporter$1 = () =>
	import("./search._query.artists-oSlhuHqs.js");
const Route$1 = createFileRoute("/_protected/search/$query/artists")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
const $$splitComponentImporter = () =>
	import("./search._query.albums-SY0pnp5O.js");
const Route = createFileRoute("/_protected/search/$query/albums")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
});
const LoginRoute = Route$d.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$e,
});
const ProtectedRoute = Route$c.update({
	id: "/_protected",
	getParentRoute: () => Route$e,
});
const ProtectedIndexRoute = Route$b.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProtectedRoute,
});
const ApiAuthSplatRoute = Route$a.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$e,
});
const ProtectedSearchQueryRoute = Route$9.update({
	id: "/search/$query",
	path: "/search/$query",
	getParentRoute: () => ProtectedRoute,
});
const ProtectedPlaylistsPlaylistIdRoute = Route$8.update({
	id: "/playlists/$playlistId",
	path: "/playlists/$playlistId",
	getParentRoute: () => ProtectedRoute,
});
const ProtectedCollectionTracksRoute = Route$7.update({
	id: "/collection/tracks",
	path: "/collection/tracks",
	getParentRoute: () => ProtectedRoute,
});
const ProtectedArtistsArtistIdRoute = Route$6.update({
	id: "/artists/$artistId",
	path: "/artists/$artistId",
	getParentRoute: () => ProtectedRoute,
});
const ProtectedAlbumsAlbumIdRoute = Route$5.update({
	id: "/albums/$albumId",
	path: "/albums/$albumId",
	getParentRoute: () => ProtectedRoute,
});
const ProtectedSearchQueryIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProtectedSearchQueryRoute,
});
const ProtectedSearchQueryTracksRoute = Route$3.update({
	id: "/tracks",
	path: "/tracks",
	getParentRoute: () => ProtectedSearchQueryRoute,
});
const ProtectedSearchQueryPlaylistsRoute = Route$2.update({
	id: "/playlists",
	path: "/playlists",
	getParentRoute: () => ProtectedSearchQueryRoute,
});
const ProtectedSearchQueryArtistsRoute = Route$1.update({
	id: "/artists",
	path: "/artists",
	getParentRoute: () => ProtectedSearchQueryRoute,
});
const ProtectedSearchQueryAlbumsRoute = Route.update({
	id: "/albums",
	path: "/albums",
	getParentRoute: () => ProtectedSearchQueryRoute,
});
const ProtectedSearchQueryRouteChildren = {
	ProtectedSearchQueryAlbumsRoute,
	ProtectedSearchQueryArtistsRoute,
	ProtectedSearchQueryPlaylistsRoute,
	ProtectedSearchQueryTracksRoute,
	ProtectedSearchQueryIndexRoute,
};
const ProtectedSearchQueryRouteWithChildren =
	ProtectedSearchQueryRoute._addFileChildren(ProtectedSearchQueryRouteChildren);
const ProtectedRouteChildren = {
	ProtectedIndexRoute,
	ProtectedAlbumsAlbumIdRoute,
	ProtectedArtistsArtistIdRoute,
	ProtectedCollectionTracksRoute,
	ProtectedPlaylistsPlaylistIdRoute,
	ProtectedSearchQueryRoute: ProtectedSearchQueryRouteWithChildren,
};
const ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(
	ProtectedRouteChildren,
);
const rootRouteChildren = {
	ProtectedRoute: ProtectedRouteWithChildren,
	LoginRoute,
	ApiAuthSplatRoute,
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				// do not refetch after 5 minutes from the initial query
				staleTime: 1e3 * 60 * 5,
			},
		},
	});
	const router2 = createRouter({
		routeTree,
		scrollRestoration: true,
		context: { queryClient, session: null },
		defaultPreload: "intent",
		defaultNotFoundComponent: () =>
			/* @__PURE__ */ jsx("p", { children: "Not found" }),
	});
	return routerWithQueryClient(router2, queryClient);
}
const router = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			getRouter,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
export {
	Route$4 as R,
	Route$3 as a,
	Route$2 as b,
	Route$1 as c,
	Route as d,
	Route$5 as e,
	albumByIdQuery as f,
	Route$8 as g,
	userTopArtistsQuery as h,
	artistAppearsOnQuery as i,
	artistCompilationQuery as j,
	artistDiscographyQuery as k,
	likedSongsQuery as l,
	artistByIdQuery as m,
	artistTopTracksQuery as n,
	userPlaylistsQuery as o,
	playlistByIdQuery as p,
	userAlbumsQuery as q,
	userArtistsQuery as r,
	searchItemsQuery as s,
	likedSongsCountQuery as t,
	userTopTracksQuery as u,
	router as v,
};
