import { MusicNoteIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { jsxs, jsx } from "react/jsx-runtime";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
function CardItemContent({ item }) {
	return /* @__PURE__ */ jsxs("div", {
		className:
			"bg-input/30 hover:bg-secondary h-full cursor-pointer rounded-lg border p-4 transition duration-300 dark:border-none",
		children: [
			item.image
				? /* @__PURE__ */ jsx(Image, {
						alt: item.title,
						className: `aspect-square w-full object-cover ${item.type === "artists" ? "rounded-full" : "rounded-md"}`,
						height: 160,
						src: item.image,
						width: 160,
					})
				: /* @__PURE__ */ jsx("div", {
						className: "h-40 w-full",
						children: /* @__PURE__ */ jsx(MusicNoteIcon, {
							className: "h-full w-full rounded-md",
						}),
					}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-5 truncate font-bold",
				children: item.title,
			}),
			item.subtitle &&
				/* @__PURE__ */ jsx("h6", {
					className:
						"text-muted-foreground mt-1 truncate text-xs font-semibold",
					children: item.subtitle,
				}),
		],
	});
}
function CardItem({ item }) {
	const content = /* @__PURE__ */ jsx(CardItemContent, { item });
	if (item.type === "categories") {
		return content;
	}
	if (item.type === "artists") {
		return /* @__PURE__ */ jsx(Link, {
			params: { artistId: item.id },
			to: "/artists/$artistId",
			children: content,
		});
	}
	if (item.type === "albums") {
		return /* @__PURE__ */ jsx(Link, {
			params: { albumId: item.id },
			to: "/albums/$albumId",
			children: content,
		});
	}
	return /* @__PURE__ */ jsx(Link, {
		params: { playlistId: item.id },
		to: "/playlists/$playlistId",
		children: content,
	});
}
function SquareSkeletons({ count = 5 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "mt-4 grid grid-cols-5 items-stretch gap-8",
		children: Array.from({ length: count }).map(() =>
			/* @__PURE__ */ jsx(
				Skeleton,
				{
					className: "col-span-1 aspect-square w-full rounded-md",
				},
				`recently_played_${crypto.randomUUID()}`,
			),
		),
	});
}
export { CardItem as C, SquareSkeletons as S };
