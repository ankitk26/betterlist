import { Checkbox as Checkbox$1 } from "@base-ui/react/checkbox";
import { Separator as Separator$1 } from "@base-ui/react/separator";
import { CheckIcon, ClockIcon, MusicNoteIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { memo } from "react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { create } from "zustand";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
import { c as cn } from "./utils-H80jjgLf.js";
function TracksTableSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-12 justify-between gap-4",
				children: [
					/* @__PURE__ */ jsx(Skeleton, { className: "col-span-1 h-4 w-full" }),
					/* @__PURE__ */ jsx(Skeleton, { className: "col-span-5 h-4 w-full" }),
					/* @__PURE__ */ jsx(Skeleton, { className: "col-span-5 h-4 w-full" }),
					/* @__PURE__ */ jsx(Skeleton, { className: "col-span-1 h-4 w-full" }),
				],
			}),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
		],
	});
}
const usePlaylistEditorStore = create((set, get) => ({
	selectedTrackIds: /* @__PURE__ */ new Set(),
	add: (trackId) =>
		set((state) => {
			const next = new Set(state.selectedTrackIds);
			next.add(trackId);
			return { selectedTrackIds: next };
		}),
	addAll: (trackIds) =>
		set(() => {
			const next = new Set(trackIds);
			return { selectedTrackIds: next };
		}),
	remove: (trackId) =>
		set((state) => {
			const next = new Set(state.selectedTrackIds);
			next.delete(trackId);
			return { selectedTrackIds: next };
		}),
	toggle: (trackId) =>
		set((state) => {
			const next = new Set(state.selectedTrackIds);
			if (next.has(trackId)) {
				next.delete(trackId);
			} else {
				next.add(trackId);
			}
			return { selectedTrackIds: next };
		}),
	getSelected: () => {
		return Array.from(get().selectedTrackIds);
	},
	clearAll: () => set({ selectedTrackIds: /* @__PURE__ */ new Set() }),
}));
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ jsx(Checkbox$1.Root, {
		"data-slot": "checkbox",
		className: cn(
			"peer border-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-shadow outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2",
			className,
		),
		...props,
		children: /* @__PURE__ */ jsx(Checkbox$1.Indicator, {
			"data-slot": "checkbox-indicator",
			className:
				"grid place-content-center text-current transition-none [&>svg]:size-3.5",
			children: /* @__PURE__ */ jsx(CheckIcon, {}),
		}),
	});
}
function Separator({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ jsx(Separator$1, {
		"data-slot": "separator",
		orientation,
		className: cn(
			"bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
			className,
		),
		...props,
	});
}
function TracksTableHeader({ showAlbum, tracks }) {
	const areAllTracksSelected = usePlaylistEditorStore(
		(s) => s.selectedTrackIds.size === tracks.length,
	);
	const areTracksSelected = usePlaylistEditorStore(
		(s) => s.selectedTrackIds.size > 0,
	);
	const addAll = usePlaylistEditorStore((s) => s.addAll);
	const clearAll = usePlaylistEditorStore((s) => s.clearAll);
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "text-muted-foreground grid grid-cols-12 gap-2 p-4 pb-1",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className:
							"group relative col-span-1 flex items-center text-left font-semibold tracking-wider uppercase",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: `text-muted-foreground text-sm transition-opacity duration-100 ease-out ${areTracksSelected ? "opacity-0" : "group-hover:opacity-0"}`,
								children: "#",
							}),
							/* @__PURE__ */ jsx("div", {
								className: `absolute inset-0 flex items-center transition-opacity ${areTracksSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
								children: /* @__PURE__ */ jsx(Checkbox, {
									checked: areAllTracksSelected,
									onCheckedChange: (checked) => {
										if (checked) {
											addAll(tracks.map((track) => track.id));
										} else {
											clearAll();
										}
									},
								}),
							}),
						],
					}),
					/* @__PURE__ */ jsx("div", {
						className: cn(
							"text-left text-sm font-semibold",
							showAlbum ? "col-span-6" : "col-span-10",
						),
						children: "Title",
					}),
					showAlbum &&
						/* @__PURE__ */ jsx("div", {
							className: "col-span-4 text-left text-sm font-semibold",
							children: "Album",
						}),
					/* @__PURE__ */ jsx("div", {
						className: "col-span-1 text-left font-semibold",
						children: /* @__PURE__ */ jsx(ClockIcon, { size: 16 }),
					}),
				],
			}),
			/* @__PURE__ */ jsx(Separator, {}),
		],
	});
}
const formatMs = (seconds) => {
	return new Date(seconds).toISOString().substring(15, 15 + 4);
};
function PureTracksTableRowCheckbox({ index, trackId }) {
	const isSelected = usePlaylistEditorStore((s) =>
		s.selectedTrackIds.has(trackId),
	);
	const addTrack = usePlaylistEditorStore((store) => store.add);
	const removeTrack = usePlaylistEditorStore((store) => store.remove);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative col-span-1 flex items-center",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: `text-muted-foreground text-sm transition-opacity duration-100 ease-out ${isSelected ? "opacity-0" : "group-hover:opacity-0"}`,
				children: index + 1,
			}),
			/* @__PURE__ */ jsx("div", {
				className: `absolute inset-0 flex items-center transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
				children: /* @__PURE__ */ jsx(Checkbox, {
					checked: isSelected,
					onCheckedChange: (checked) => {
						if (checked) {
							addTrack(trackId);
						} else {
							removeTrack(trackId);
						}
					},
				}),
			}),
		],
	});
}
const TracksTableRowCheckbox = memo(
	PureTracksTableRowCheckbox,
	(prev, next) => prev.trackId === next.trackId && prev.index === next.index,
);
function TracksTableTitleColumn({ track, showAlbum, showCover, showSubtitle }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn(
			"flex w-full items-center",
			showAlbum ? "col-span-6" : "col-span-10",
		),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-center gap-4",
			children: [
				showCover &&
					(track.album.images && track.album.images.length > 0
						? /* @__PURE__ */ jsx("div", {
								className: "h-10 w-10 shrink-0",
								children: /* @__PURE__ */ jsx(Image, {
									alt: track.name,
									className: "h-10 w-10 rounded object-contain",
									height: 40,
									src: track.album.images?.[0].url,
									width: 40,
								}),
							})
						: /* @__PURE__ */ jsx(MusicNoteIcon, {
								className: "bg-input/30 h-10 w-10 rounded p-2",
								size: 16,
							})),
				/* @__PURE__ */ jsxs("div", {
					className: "w-full truncate pr-3",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "w-10/12 truncate text-sm font-medium",
							children: track.name,
						}),
						showSubtitle &&
							/* @__PURE__ */ jsx("div", {
								className:
									"text-muted-foreground flex w-full flex-wrap items-center gap-1 pr-3 text-sm",
								children: /* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: track.artists.map((artist, index) =>
										/* @__PURE__ */ jsxs(
											Fragment,
											{
												children: [
													/* @__PURE__ */ jsx(
														Link,
														{
															className: "hover:underline",
															params: { artistId: artist.id },
															to: "/artists/$artistId",
															children: artist.name,
														},
														artist.id + track.id,
													),
													index !== track.artists.length - 1 && ", ",
												],
											},
											artist.id + track.id,
										),
									),
								}),
							}),
					],
				}),
			],
		}),
	});
}
function TracksTableRow({ index, track, showAlbum, showCover, showSubtitle }) {
	return /* @__PURE__ */ jsxs("div", {
		className:
			"group hover:bg-muted/50 grid grid-cols-12 rounded-lg px-4 py-2 transition-colors",
		children: [
			/* @__PURE__ */ jsx(TracksTableRowCheckbox, { index, trackId: track.id }),
			/* @__PURE__ */ jsx(TracksTableTitleColumn, {
				showAlbum,
				showCover,
				showSubtitle,
				track,
			}),
			showAlbum &&
				/* @__PURE__ */ jsx("div", {
					className:
						"text-muted-foreground col-span-4 flex w-10/12 items-center text-sm",
					children: /* @__PURE__ */ jsx(Link, {
						className: "truncate hover:underline",
						params: { albumId: track.album.id },
						to: "/albums/$albumId",
						children: track.album.name,
					}),
				}),
			/* @__PURE__ */ jsx("small", {
				className:
					"text-muted-foreground col-span-1 flex items-center text-sm font-medium",
				children: formatMs(track.duration_ms),
			}),
		],
	});
}
function TracksTable({
	tracks,
	showSubtitle = false,
	showCover = false,
	showHeader = false,
	showAlbum = false,
}) {
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			showHeader &&
				/* @__PURE__ */ jsx(TracksTableHeader, { showAlbum, tracks }),
			/* @__PURE__ */ jsx("div", {
				className: "col-span-12 w-full",
				children: tracks
					?.filter((track) => track.name.trim().length > 0)
					.map((track, index) =>
						/* @__PURE__ */ jsx(
							TracksTableRow,
							{
								index,
								showAlbum,
								showCover,
								showSubtitle,
								track,
							},
							`${track.id}_${index}`,
						),
					),
			}),
		],
	});
}
export {
	TracksTableSkeleton as T,
	TracksTable as a,
	usePlaylistEditorStore as u,
};
