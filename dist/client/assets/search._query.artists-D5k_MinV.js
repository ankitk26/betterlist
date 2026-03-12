import { X as o, Q as n, j as r } from "./main-2PW7nLE1.js";
import { u } from "./MusicNote.es-CaD4f649.js";
import { S as p, C as c } from "./square-skeleton-C8c3tJef.js";
import "./skeleton-HHK49xas.js";
import "./utils-BQHNewu7.js";
function h() {
	const { query: s } = o.useParams(),
		{
			data: t,
			isPending: i,
			isError: m,
			error: a,
		} = u(n({ query: s, type: "artist", limit: 50 }));
	return i
		? r.jsx(p, { count: 10 })
		: m
			? r.jsx("p", { children: a.message })
			: t
				? r.jsx("div", {
						className: "mt-4 grid grid-cols-5 items-stretch gap-8",
						children: t.artists.map((e) =>
							r.jsx(
								c,
								{
									item: {
										id: e.id,
										image:
											e.images && e.images.length > 0 ? e.images[0].url : "",
										title: e.name,
										type: "artists",
									},
								},
								`search_results_artist_${s}_${e.id}`,
							),
						),
					})
				: null;
}
export { h as component };
