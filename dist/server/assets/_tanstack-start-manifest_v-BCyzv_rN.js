const tsrStartManifest = () => ({
	routes: {
		__root__: {
			filePath: "D:/coding/tanstack/betterlist/src/routes/__root.tsx",
			children: ["/_protected", "/login", "/api/auth/$"],
			preloads: ["/assets/main-2PW7nLE1.js"],
		},
		"/_protected": {
			filePath: "D:/coding/tanstack/betterlist/src/routes/_protected.tsx",
			children: [
				"/_protected/",
				"/_protected/albums/$albumId",
				"/_protected/artists/$artistId",
				"/_protected/collection/tracks",
				"/_protected/playlists/$playlistId",
				"/_protected/search/$query",
			],
			preloads: [
				"/assets/_protected-DFireDKu.js",
				"/assets/auth-client-B5QT9dPC.js",
				"/assets/skeleton-HHK49xas.js",
				"/assets/button-C4bOsGCm.js",
				"/assets/utils-BQHNewu7.js",
				"/assets/label-CuWnyJxi.js",
				"/assets/useRenderElement-Vjd4_1MR.js",
				"/assets/useField-F5sWYpCd.js",
				"/assets/MusicNote.es-CaD4f649.js",
			],
		},
		"/login": {
			filePath: "D:/coding/tanstack/betterlist/src/routes/login.tsx",
			preloads: [
				"/assets/login-BVPfCwBh.js",
				"/assets/button-C4bOsGCm.js",
				"/assets/auth-client-B5QT9dPC.js",
				"/assets/utils-BQHNewu7.js",
				"/assets/useRenderElement-Vjd4_1MR.js",
			],
		},
		"/_protected/": {
			filePath: "D:/coding/tanstack/betterlist/src/routes/_protected/index.tsx",
			preloads: ["/assets/index-BkLVTC-s.js"],
		},
		"/_protected/albums/$albumId": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/albums.$albumId.tsx",
			preloads: [
				"/assets/albums._albumId-DhxH_FE7.js",
				"/assets/Dot.es-DtR0t2Jl.js",
				"/assets/square-cover-page-skeleton-DzJzGlef.js",
				"/assets/tracks-table-DvyCG6-L.js",
				"/assets/tracks-table-actions-CGvUpuKK.js",
			],
		},
		"/_protected/artists/$artistId": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/artists.$artistId.tsx",
			preloads: [
				"/assets/artists._artistId-DSrSnbru.js",
				"/assets/square-skeleton-C8c3tJef.js",
				"/assets/tracks-table-DvyCG6-L.js",
				"/assets/tracks-table-actions-CGvUpuKK.js",
			],
		},
		"/_protected/collection/tracks": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/collection.tracks.tsx",
			preloads: [
				"/assets/collection.tracks-BOT0zNsb.js",
				"/assets/Dot.es-DtR0t2Jl.js",
				"/assets/tracks-table-DvyCG6-L.js",
			],
		},
		"/_protected/playlists/$playlistId": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/playlists.$playlistId.tsx",
			preloads: [
				"/assets/playlists._playlistId-BDDGwPt0.js",
				"/assets/Dot.es-DtR0t2Jl.js",
				"/assets/square-cover-page-skeleton-DzJzGlef.js",
				"/assets/tracks-table-DvyCG6-L.js",
				"/assets/tracks-table-actions-CGvUpuKK.js",
			],
		},
		"/_protected/search/$query": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/search.$query.tsx",
			children: [
				"/_protected/search/$query/albums",
				"/_protected/search/$query/artists",
				"/_protected/search/$query/playlists",
				"/_protected/search/$query/tracks",
				"/_protected/search/$query/",
			],
			preloads: ["/assets/search._query-Br3MsoDQ.js"],
		},
		"/_protected/search/$query/albums": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/search.$query.albums.tsx",
			preloads: [
				"/assets/search._query.albums-orsFHmsO.js",
				"/assets/square-skeleton-C8c3tJef.js",
			],
		},
		"/_protected/search/$query/artists": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/search.$query.artists.tsx",
			preloads: [
				"/assets/search._query.artists-D5k_MinV.js",
				"/assets/square-skeleton-C8c3tJef.js",
			],
		},
		"/_protected/search/$query/playlists": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/search.$query.playlists.tsx",
			preloads: [
				"/assets/search._query.playlists-DZVERlUL.js",
				"/assets/square-skeleton-C8c3tJef.js",
			],
		},
		"/_protected/search/$query/tracks": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/search.$query.tracks.tsx",
			preloads: [
				"/assets/search._query.tracks-DmhjR7BY.js",
				"/assets/tracks-table-DvyCG6-L.js",
			],
		},
		"/_protected/search/$query/": {
			filePath:
				"D:/coding/tanstack/betterlist/src/routes/_protected/search.$query.index.tsx",
			preloads: [
				"/assets/search._query.index-c0rK5Kue.js",
				"/assets/square-skeleton-C8c3tJef.js",
				"/assets/tracks-table-DvyCG6-L.js",
			],
		},
	},
	clientEntry: "/assets/main-2PW7nLE1.js",
});
export { tsrStartManifest };
