import { W as m, Q as n, j as r } from "./main-2PW7nLE1.js";
import { u } from "./MusicNote.es-CaD4f649.js";
import { S as l, C as p } from "./square-skeleton-C8c3tJef.js";
import "./skeleton-HHK49xas.js";
import "./utils-BQHNewu7.js";
function j() {
	const { query: t } = m.useParams(),
		{
			data: s,
			isPending: i,
			isError: o,
			error: a,
		} = u(n({ query: t, type: "playlist", limit: 50 }));
	return i
		? r.jsx(l, { count: 10 })
		: o
			? r.jsx("p", { children: a.message })
			: s
				? r.jsx("div", {
						className: "mt-4 grid grid-cols-5 items-stretch gap-8",
						children: s.playlists
							.filter((e) => e !== null)
							.map((e) =>
								r.jsx(
									p,
									{
										item: {
											id: e.id,
											image: e.images[0].url ?? "",
											title: e.name,
											subtitle: e.description,
											type: "playlists",
										},
									},
									`search_results_playlist_${t}`,
								),
							),
					})
				: null;
}
export { j as component };
