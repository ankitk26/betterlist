import { P as m, Q as c, j as s } from "./main-2PW7nLE1.js";
import { u as n } from "./MusicNote.es-CaD4f649.js";
import { S as a, C as r } from "./square-skeleton-C8c3tJef.js";
import { a as d, T as h } from "./tracks-table-DvyCG6-L.js";
import "./skeleton-HHK49xas.js";
import "./utils-BQHNewu7.js";
import "./useField-F5sWYpCd.js";
import "./useRenderElement-Vjd4_1MR.js";
function v() {
	const { query: i } = m.useParams(),
		{ data: t, isPending: l } = n(c({ query: i, type: "all" }));
	return l
		? s.jsxs("div", {
				className: "space-y-10",
				children: [s.jsx(d, {}), s.jsx(a, {}), s.jsx(a, {})],
			})
		: t
			? s.jsxs(s.Fragment, {
					children: [
						t.tracks &&
							t.tracks.length > 0 &&
							s.jsxs("div", {
								className: "flex flex-col items-stretch",
								children: [
									s.jsx("h1", { children: "Tracks" }),
									s.jsx(h, {
										showAlbum: !0,
										showCover: !0,
										showSubtitle: !0,
										tracks: t.tracks,
									}),
								],
							}),
						t.artists &&
							t.artists.length > 0 &&
							s.jsxs("div", {
								children: [
									s.jsx("h1", { children: "Artists" }),
									s.jsx("div", {
										className: "mt-4 grid grid-cols-5 items-stretch gap-8",
										children: t.artists.map((e) =>
											s.jsx(
												r,
												{
													item: {
														id: e.id,
														image:
															e.images && e.images.length > 0
																? e.images[0].url
																: "",
														title: e.name,
														type: "artists",
													},
												},
												`search_results_artist_${i}_${e.id}`,
											),
										),
									}),
								],
							}),
						t.albums &&
							t.albums.length > 0 &&
							s.jsxs("div", {
								children: [
									s.jsx("h1", { children: "Albums" }),
									s.jsx("div", {
										className: "mt-4 grid grid-cols-5 items-stretch gap-8",
										children: t.albums.map((e) =>
											s.jsx(
												r,
												{
													item: {
														id: e.id,
														image:
															e.images && e.images.length > 0
																? e.images[0].url
																: "",
														title: e.name,
														subtitle: e.artists[0].name ?? "",
														type: "albums",
													},
												},
												`search_results_album_${i}`,
											),
										),
									}),
								],
							}),
						t.playlists &&
							t.playlists.length > 0 &&
							s.jsxs("div", {
								children: [
									s.jsx("h1", { children: "Playlists" }),
									s.jsx("div", {
										className: "mt-4 grid grid-cols-5 items-stretch gap-8",
										children: t.playlists
											.filter((e) => e !== null)
											.map((e) =>
												s.jsx(
													r,
													{
														item: {
															id: e.id,
															image: e.images[0].url ?? "",
															title: e.name,
															subtitle: e.description,
															type: "playlists",
														},
													},
													`search_results_playlist_${i}`,
												),
											),
									}),
								],
							}),
					],
				})
			: s.jsx("div", {
					className: "flex flex-col items-stretch gap-8",
					children: "No results",
				});
}
export { v as component };
