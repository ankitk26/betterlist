import { AlertDialog as AlertDialog$1 } from "@base-ui/react/alert-dialog";
import { MusicNoteIcon, CheckIcon, SpinnerIcon } from "@phosphor-icons/react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useState, useCallback, useMemo } from "react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { toast } from "sonner";
import { z } from "zod";
import { c as createServerFn } from "../server.js";
import { B as Button } from "./button-CJdb3Z05.js";
import { c as createSsrRpc } from "./createSsrRpc-DFX_9v9X.js";
import {
	D as Dialog,
	a as DialogTrigger,
	b as DialogContent,
	c as DialogTitle,
	d as DialogDescription,
	e as DialogFooter,
	f as DialogClose,
	g as DialogHeader,
	L as Label,
	I as Input,
} from "./label-B4egPdzO.js";
import {
	o as userPlaylistsQuery,
	p as playlistByIdQuery,
} from "./router-DnCUH2Rc.js";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
import { u as usePlaylistEditorStore } from "./tracks-table-DrB7FpSt.js";
import { c as cn } from "./utils-H80jjgLf.js";
const addTracksToPlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(
		z.object({
			trackIds: z.array(z.string()),
			playlistIds: z.array(z.string()),
		}),
	)
	.handler(
		createSsrRpc(
			"e23d587e243ebaac1e4a08a905c15826df2c2d3c0870b971d8ca6f1b578906fa",
		),
	);
function AddToPlaylistButton() {
	const isTracksSelected = usePlaylistEditorStore(
		(store) => store.selectedTrackIds.size === 0,
	);
	const selectedTracks = usePlaylistEditorStore(
		(store) => store.selectedTrackIds,
	);
	const clearAll = usePlaylistEditorStore((store) => store.clearAll);
	const [selectedPlaylists, setSelectedPlaylists] = useState([]);
	const queryClient = useQueryClient();
	const { data: allPlaylists, isPending } = useQuery(userPlaylistsQuery);
	const addTracksToPlaylistsMutation = useMutation({
		mutationFn: addTracksToPlaylist,
		onSuccess: () => {
			toast.success("Tracks added");
			for (const playlistId of selectedPlaylists) {
				queryClient.invalidateQueries({
					queryKey: playlistByIdQuery(playlistId).queryKey,
				});
			}
			queryClient.invalidateQueries({
				queryKey: userPlaylistsQuery.queryKey,
			});
			setSelectedPlaylists([]);
			clearAll();
		},
		onError: () => {
			toast.error("Tracks not added");
		},
	});
	const handleTracksAddition = () => {
		addTracksToPlaylistsMutation.mutate({
			data: {
				playlistIds: selectedPlaylists,
				trackIds: [...selectedTracks],
			},
		});
	};
	const togglePlaylistSelection = (playlistId) => {
		setSelectedPlaylists((prev) => {
			if (prev.includes(playlistId)) {
				return prev.filter((id) => id !== playlistId);
			} else if (prev.length < 5) {
				return [...prev, playlistId];
			}
			return prev;
		});
	};
	return /* @__PURE__ */ jsxs(Dialog, {
		children: [
			/* @__PURE__ */ jsx(DialogTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					disabled: isTracksSelected,
					size: "sm",
					className: "text-xs",
					variant: "secondary",
					children: "Add to playlist",
				}),
			}),
			/* @__PURE__ */ jsxs(DialogContent, {
				className: "max-w-md",
				children: [
					/* @__PURE__ */ jsx(DialogTitle, {
						children: "Add selected tracks to other playlists",
					}),
					/* @__PURE__ */ jsx(DialogDescription, {
						children: "Can select 5 playlists at a time",
					}),
					/* @__PURE__ */ jsx("div", {
						className: "max-h-96 overflow-y-auto",
						children: isPending
							? /* @__PURE__ */ jsxs("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ jsx(Skeleton, { className: "h-16 w-full" }),
										/* @__PURE__ */ jsx(Skeleton, { className: "h-16 w-full" }),
										/* @__PURE__ */ jsx(Skeleton, { className: "h-16 w-full" }),
									],
								})
							: /* @__PURE__ */ jsx("div", {
									className: "space-y-2",
									children: allPlaylists?.map((playlist) => {
										const isSelected = selectedPlaylists.includes(playlist.id);
										const coverImage = playlist.images?.[0]?.url;
										return /* @__PURE__ */ jsxs(
											"button",
											{
												type: "button",
												onClick: () => togglePlaylistSelection(playlist.id),
												disabled: !isSelected && selectedPlaylists.length >= 5,
												className: cn(
													"hover:bg-accent/50 flex w-full items-center gap-3 rounded-lg border p-3 transition-all",
													isSelected
														? "bg-primary/10 border-primary"
														: "bg-card border-border hover:border-accent-foreground/20",
													!isSelected &&
														selectedPlaylists.length >= 5 &&
														"cursor-not-allowed opacity-50",
												),
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "relative",
														children: [
															coverImage
																? /* @__PURE__ */ jsx("img", {
																		src: coverImage || "/placeholder.svg",
																		alt: `${playlist.name} cover`,
																		className: "h-12 w-12 rounded object-cover",
																	})
																: /* @__PURE__ */ jsx("div", {
																		className:
																			"bg-muted flex h-12 w-12 items-center justify-center rounded",
																		children: /* @__PURE__ */ jsx("span", {
																			className:
																				"text-muted-foreground text-xs",
																			children: /* @__PURE__ */ jsx(
																				MusicNoteIcon,
																				{},
																			),
																		}),
																	}),
															isSelected &&
																/* @__PURE__ */ jsx("div", {
																	className:
																		"bg-primary absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full",
																	children: /* @__PURE__ */ jsx(CheckIcon, {
																		className:
																			"text-primary-foreground h-3 w-3",
																	}),
																}),
														],
													}),
													/* @__PURE__ */ jsx("div", {
														className: "flex-1 text-left",
														children: /* @__PURE__ */ jsx("div", {
															className: "line-clamp-1 text-sm font-medium",
															children: playlist.name,
														}),
													}),
												],
											},
											playlist.id,
										);
									}),
								}),
					}),
					/* @__PURE__ */ jsxs(DialogFooter, {
						children: [
							/* @__PURE__ */ jsx(DialogClose, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									children: "Cancel",
								}),
							}),
							/* @__PURE__ */ jsx(Button, {
								onClick: handleTracksAddition,
								disabled:
									selectedPlaylists.length === 0 ||
									addTracksToPlaylistsMutation.isPending,
								children: addTracksToPlaylistsMutation.isPending
									? /* @__PURE__ */ jsxs(Fragment, {
											children: [
												/* @__PURE__ */ jsx(SpinnerIcon, {
													className: "animate-spin",
												}),
												"Adding...",
											],
										})
									: `Add to ${selectedPlaylists.length} playlist${selectedPlaylists.length !== 1 ? "s" : ""}`,
							}),
						],
					}),
				],
			}),
		],
	});
}
const deleteTracksFromPlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(
		z.object({
			trackIds: z.array(z.string()),
			playlistId: z.string(),
		}),
	)
	.handler(
		createSsrRpc(
			"384249be7689a7dac4d121c177afad1a5d680df2ec171ead8a177b9e338a5625",
		),
	);
function AlertDialog({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Root, {
		"data-slot": "alert-dialog",
		...props,
	});
}
function AlertDialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...props,
	});
}
function AlertDialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Portal, {
		"data-slot": "alert-dialog-portal",
		...props,
	});
}
function AlertDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Backdrop, {
		"data-slot": "alert-dialog-overlay",
		className: cn(
			"data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 fixed inset-0 isolate z-50 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs",
			className,
		),
		...props,
	});
}
function AlertDialogContent({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsxs(AlertDialogPortal, {
		children: [
			/* @__PURE__ */ jsx(AlertDialogOverlay, {}),
			/* @__PURE__ */ jsx(AlertDialog$1.Popup, {
				"data-slot": "alert-dialog-content",
				"data-size": size,
				className: cn(
					"group/alert-dialog-content bg-background ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-3 rounded-xl p-4 ring-1 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-64 data-[size=default]:sm:max-w-sm",
					className,
				),
				...props,
			}),
		],
	});
}
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-header",
		className: cn(
			"grid grid-rows-[auto_1fr] place-items-center gap-1 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
			className,
		),
		...props,
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-footer",
		className: cn(
			"flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
			className,
		),
		...props,
	});
}
function AlertDialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Title, {
		"data-slot": "alert-dialog-title",
		className: cn(
			"text-sm font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
			className,
		),
		...props,
	});
}
function AlertDialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Description, {
		"data-slot": "alert-dialog-description",
		className: cn(
			"text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3",
			className,
		),
		...props,
	});
}
function AlertDialogAction({ className, ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "alert-dialog-action",
		className: cn(className),
		...props,
	});
}
function AlertDialogCancel({
	className,
	variant = "outline",
	size = "default",
	...props
}) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Close, {
		"data-slot": "alert-dialog-cancel",
		className: cn(className),
		render: /* @__PURE__ */ jsx(Button, { variant, size }),
		...props,
	});
}
function DeletePlaylistTracksButton({ playlistId }) {
	const [isOpen, setIsOpen] = useState(false);
	const selectedTrackIds = usePlaylistEditorStore(
		(store) => store.selectedTrackIds,
	);
	const clearAll = usePlaylistEditorStore((store) => store.clearAll);
	const queryClient = useQueryClient();
	const isTracksSelected = selectedTrackIds.size > 0;
	const selectedCount = selectedTrackIds.size;
	const deleteTracksMutation = useMutation({
		mutationFn: deleteTracksFromPlaylist,
		onSuccess: async () => {
			toast("Deleting tracks");
			await queryClient.invalidateQueries({
				queryKey: playlistByIdQuery(playlistId).queryKey,
			});
			queryClient.invalidateQueries({
				queryKey: userPlaylistsQuery.queryKey,
			});
			clearAll();
			setIsOpen(false);
			toast.success("Tracks deleted");
		},
		onError: (error) => {
			toast.error("Failed to remove tracks. Please try again.");
			console.error("Error deleting tracks:", error);
		},
	});
	const handleDeleteTracks = () => {
		deleteTracksMutation.mutate({
			data: {
				playlistId,
				trackIds: [...selectedTrackIds],
			},
		});
	};
	return /* @__PURE__ */ jsxs(AlertDialog, {
		open: isOpen,
		onOpenChange: setIsOpen,
		children: [
			/* @__PURE__ */ jsx(AlertDialogTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					disabled: !isTracksSelected,
					size: "sm",
					className: "text-xs",
					variant: "destructive",
					children: "Remove from playlist",
				}),
			}),
			/* @__PURE__ */ jsxs(AlertDialogContent, {
				children: [
					/* @__PURE__ */ jsxs(AlertDialogHeader, {
						children: [
							/* @__PURE__ */ jsx(AlertDialogTitle, {
								children: "Remove tracks from playlist",
							}),
							/* @__PURE__ */ jsxs(AlertDialogDescription, {
								children: [
									"Are you sure you want to remove ",
									selectedCount,
									" track",
									selectedCount !== 1 ? "s" : "",
									" from this playlist? This action cannot be undone.",
								],
							}),
						],
					}),
					/* @__PURE__ */ jsxs(AlertDialogFooter, {
						children: [
							/* @__PURE__ */ jsx(AlertDialogCancel, {
								disabled: deleteTracksMutation.isPending,
								children: "Cancel",
							}),
							/* @__PURE__ */ jsx(AlertDialogAction, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									disabled: deleteTracksMutation.isPending,
									onClick: handleDeleteTracks,
									children: deleteTracksMutation.isPending
										? /* @__PURE__ */ jsxs(Fragment, {
												children: [
													/* @__PURE__ */ jsx(SpinnerIcon, {
														className: "animate-spin",
													}),
													"Removing...",
												],
											})
										: "Remove tracks",
								}),
							}),
						],
					}),
				],
			}),
		],
	});
}
function RemoveDuplicatesButton(props) {
	const getTracksCounter = useCallback(() => {
		const idCounts = /* @__PURE__ */ new Map();
		for (const track of props.tracks) {
			if (track.id) {
				idCounts.set(track.id, (idCounts.get(track.id) || 0) + 1);
			}
		}
		return idCounts;
	}, [props.tracks]);
	const tracksCounter = useMemo(() => getTracksCounter(), [getTracksCounter]);
	const hasDuplicates = useMemo(
		() => tracksCounter.size !== props.tracks.length,
		[props.tracks, tracksCounter.size],
	);
	return /* @__PURE__ */ jsx(Button, {
		size: "sm",
		className: "text-xs",
		variant: "destructive",
		disabled: !hasDuplicates,
		children: "Remove duplicates",
	});
}
const renamePlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(
		z.object({
			id: z.string(),
			name: z.string(),
		}),
	)
	.handler(
		createSsrRpc(
			"30ad9d80671907ccf8192d6e3f9fc91115401a75fd6270515e6f65762c4e9a7a",
		),
	);
function RenamePlaylistDialog({ playlistId, currentName }) {
	const [playlistName, setPlaylistName] = useState(currentName);
	const [isOpen, setIsOpen] = useState(false);
	const queryClient = useQueryClient();
	const renamePlaylistMutation = useMutation({
		mutationFn: renamePlaylist,
		onSuccess: () => {
			toast.info("Renaming playlist…");
			queryClient.setQueryData(["user_playlists"], (oldRecord = []) =>
				oldRecord.map((playlist) =>
					playlist.id === playlistId
						? { ...playlist, name: playlistName }
						: playlist,
				),
			);
			queryClient.setQueryData(["playlist", playlistId], (oldRecord) =>
				oldRecord ? { ...oldRecord, name: playlistName } : oldRecord,
			);
			setIsOpen(false);
			toast.success("Playlist renamed");
		},
		onError: () => {
			toast.error("Something went wrong");
		},
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (playlistName.trim() && playlistName.trim() !== currentName) {
			renamePlaylistMutation.mutate({
				data: {
					id: playlistId,
					name: playlistName.trim(),
				},
			});
		}
	};
	const handleOpenChange = (open) => {
		setIsOpen(open);
		if (open) {
			setPlaylistName(currentName);
		}
	};
	return /* @__PURE__ */ jsxs(Dialog, {
		onOpenChange: handleOpenChange,
		open: isOpen,
		children: [
			/* @__PURE__ */ jsx(DialogTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					variant: "secondary",
					className: "text-xs",
					children: "Rename playlist",
				}),
			}),
			/* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md",
				children: [
					/* @__PURE__ */ jsx(DialogHeader, {
						className: "pb-4",
						children: /* @__PURE__ */ jsx(DialogTitle, {
							children: "Rename Playlist",
						}),
					}),
					/* @__PURE__ */ jsxs("form", {
						className: "space-y-6",
						onSubmit: handleSubmit,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "playlist-name",
										children: "Playlist Name",
									}),
									/* @__PURE__ */ jsx(Input, {
										autoFocus: true,
										className: "h-11",
										id: "playlist-name",
										onChange: (e) => setPlaylistName(e.target.value),
										placeholder: "Enter new playlist name...",
										value: playlistName,
									}),
								],
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-end gap-3 pt-2",
								children: [
									/* @__PURE__ */ jsx(Button, {
										className: "px-6",
										onClick: () => setIsOpen(false),
										type: "button",
										variant: "outline",
										children: "Cancel",
									}),
									/* @__PURE__ */ jsx(Button, {
										className: "px-6",
										disabled:
											!playlistName.trim() ||
											playlistName.trim() === currentName ||
											renamePlaylistMutation.isPending,
										type: "submit",
										children: renamePlaylistMutation.isPending
											? /* @__PURE__ */ jsx(SpinnerIcon, {
													className: "size-4 animate-spin",
												})
											: "Rename Playlist",
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
function TracksTableActions(props) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-4",
		children: [
			/* @__PURE__ */ jsx(AddToPlaylistButton, {}),
			props.playlistId &&
				/* @__PURE__ */ jsxs(Fragment, {
					children: [
						/* @__PURE__ */ jsx(RenamePlaylistDialog, {
							currentName: props.playlistName ?? "",
							playlistId: props.playlistId,
						}),
						/* @__PURE__ */ jsx(DeletePlaylistTracksButton, {
							playlistId: props.playlistId,
						}),
						/* @__PURE__ */ jsx(RemoveDuplicatesButton, {
							tracks: props.tracks ?? [],
						}),
					],
				}),
		],
	});
}
export { TracksTableActions as T };
