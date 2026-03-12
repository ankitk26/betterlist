import { j as s, L as e } from "./main-2PW7nLE1.js";
import { e as n } from "./MusicNote.es-CaD4f649.js";
import { I as a, S as l } from "./skeleton-HHK49xas.js";
function d({ item: r }) {
	return s.jsxs("div", {
		className:
			"bg-input/30 hover:bg-secondary h-full cursor-pointer rounded-lg border p-4 transition duration-300 dark:border-none",
		children: [
			r.image
				? s.jsx(a, {
						alt: r.title,
						className: `aspect-square w-full object-cover ${r.type === "artists" ? "rounded-full" : "rounded-md"}`,
						height: 160,
						src: r.image,
						width: 160,
					})
				: s.jsx("div", {
						className: "h-40 w-full",
						children: s.jsx(n, { className: "h-full w-full rounded-md" }),
					}),
			s.jsx("h3", { className: "mt-5 truncate font-bold", children: r.title }),
			r.subtitle &&
				s.jsx("h6", {
					className:
						"text-muted-foreground mt-1 truncate text-xs font-semibold",
					children: r.subtitle,
				}),
		],
	});
}
function c({ item: r }) {
	const t = s.jsx(d, { item: r });
	return r.type === "categories"
		? t
		: r.type === "artists"
			? s.jsx(e, {
					params: { artistId: r.id },
					to: "/artists/$artistId",
					children: t,
				})
			: r.type === "albums"
				? s.jsx(e, {
						params: { albumId: r.id },
						to: "/albums/$albumId",
						children: t,
					})
				: s.jsx(e, {
						params: { playlistId: r.id },
						to: "/playlists/$playlistId",
						children: t,
					});
}
function m({ count: r = 5 }) {
	return s.jsx("div", {
		className: "mt-4 grid grid-cols-5 items-stretch gap-8",
		children: Array.from({ length: r }).map(() =>
			s.jsx(
				l,
				{ className: "col-span-1 aspect-square w-full rounded-md" },
				`recently_played_${crypto.randomUUID()}`,
			),
		),
	});
}
export { c as C, m as S };
