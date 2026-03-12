import { B as u } from "./button-C4bOsGCm.js";
import {
	af as N,
	ag as w,
	ah as A,
	ai as z,
	ak as S,
	an as F,
	ao as q,
	ap as Q,
	aq as B,
	ar as E,
	as as K,
	at as M,
	au as $,
	av as _,
	aw as H,
	ax as V,
	ay as L,
	az as W,
	aA as G,
	aj as J,
	al as U,
	ae as X,
} from "./label-CuWnyJxi.js";
import {
	d as C,
	e as b,
	r as f,
	f as D,
	t as h,
	v as T,
	g as k,
	j as e,
	o as P,
} from "./main-2PW7nLE1.js";
import { u as R, e as O } from "./MusicNote.es-CaD4f649.js";
import { S as v } from "./skeleton-HHK49xas.js";
import { u as j, o as Y } from "./tracks-table-DvyCG6-L.js";
import { x as Z } from "./useRenderElement-Vjd4_1MR.js";
import { c as g } from "./utils-BQHNewu7.js";
const ee = C({ method: "POST" }).handler(
	b("e23d587e243ebaac1e4a08a905c15826df2c2d3c0870b971d8ca6f1b578906fa"),
);
function ae() {
	const a = j((s) => s.selectedTrackIds.size === 0),
		t = j((s) => s.selectedTrackIds),
		l = j((s) => s.clearAll),
		[n, c] = f.useState([]),
		o = D(),
		{ data: x, isPending: m } = R(k),
		d = N({
			mutationFn: ee,
			onSuccess: () => {
				h.success("Tracks added");
				for (const s of n) o.invalidateQueries({ queryKey: T(s).queryKey });
				(o.invalidateQueries({ queryKey: k.queryKey }), c([]), l());
			},
			onError: () => {
				h.error("Tracks not added");
			},
		}),
		p = () => {
			d.mutate({ data: { playlistIds: n, trackIds: [...t] } });
		},
		r = (s) => {
			c((i) =>
				i.includes(s) ? i.filter((y) => y !== s) : i.length < 5 ? [...i, s] : i,
			);
		};
	return e.jsxs(w, {
		children: [
			e.jsx(A, {
				asChild: !0,
				children: e.jsx(u, {
					disabled: a,
					size: "sm",
					className: "text-xs",
					variant: "secondary",
					children: "Add to playlist",
				}),
			}),
			e.jsxs(z, {
				className: "max-w-md",
				children: [
					e.jsx(S, { children: "Add selected tracks to other playlists" }),
					e.jsx(F, { children: "Can select 5 playlists at a time" }),
					e.jsx("div", {
						className: "max-h-96 overflow-y-auto",
						children: m
							? e.jsxs("div", {
									className: "space-y-3",
									children: [
										e.jsx(v, { className: "h-16 w-full" }),
										e.jsx(v, { className: "h-16 w-full" }),
										e.jsx(v, { className: "h-16 w-full" }),
									],
								})
							: e.jsx("div", {
									className: "space-y-2",
									children: x?.map((s) => {
										const i = n.includes(s.id),
											y = s.images?.[0]?.url;
										return e.jsxs(
											"button",
											{
												type: "button",
												onClick: () => r(s.id),
												disabled: !i && n.length >= 5,
												className: g(
													"hover:bg-accent/50 flex w-full items-center gap-3 rounded-lg border p-3 transition-all",
													i
														? "bg-primary/10 border-primary"
														: "bg-card border-border hover:border-accent-foreground/20",
													!i &&
														n.length >= 5 &&
														"cursor-not-allowed opacity-50",
												),
												children: [
													e.jsxs("div", {
														className: "relative",
														children: [
															y
																? e.jsx("img", {
																		src: y || "/placeholder.svg",
																		alt: `${s.name} cover`,
																		className: "h-12 w-12 rounded object-cover",
																	})
																: e.jsx("div", {
																		className:
																			"bg-muted flex h-12 w-12 items-center justify-center rounded",
																		children: e.jsx("span", {
																			className:
																				"text-muted-foreground text-xs",
																			children: e.jsx(O, {}),
																		}),
																	}),
															i &&
																e.jsx("div", {
																	className:
																		"bg-primary absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full",
																	children: e.jsx(Y, {
																		className:
																			"text-primary-foreground h-3 w-3",
																	}),
																}),
														],
													}),
													e.jsx("div", {
														className: "flex-1 text-left",
														children: e.jsx("div", {
															className: "line-clamp-1 text-sm font-medium",
															children: s.name,
														}),
													}),
												],
											},
											s.id,
										);
									}),
								}),
					}),
					e.jsxs(q, {
						children: [
							e.jsx(Q, {
								asChild: !0,
								children: e.jsx(u, { variant: "outline", children: "Cancel" }),
							}),
							e.jsx(u, {
								onClick: p,
								disabled: n.length === 0 || d.isPending,
								children: d.isPending
									? e.jsxs(e.Fragment, {
											children: [
												e.jsx(P, { className: "animate-spin" }),
												"Adding...",
											],
										})
									: `Add to ${n.length} playlist${n.length !== 1 ? "s" : ""}`,
							}),
						],
					}),
				],
			}),
		],
	});
}
const te = C({ method: "POST" }).handler(
	b("384249be7689a7dac4d121c177afad1a5d680df2ec171ead8a177b9e338a5625"),
);
function se(a) {
	const {
			children: t,
			open: l,
			defaultOpen: n = !1,
			onOpenChange: c,
			onOpenChangeComplete: o,
			actionsRef: x,
			handle: m,
			triggerId: d,
			defaultTriggerId: p = null,
		} = a,
		r = B(),
		s = !!r,
		i = Z(
			() =>
				m?.store ??
				new E({
					open: n,
					openProp: l,
					activeTriggerId: p,
					triggerIdProp: d,
					modal: !0,
					disablePointerDismissal: !0,
					nested: s,
					role: "alertdialog",
				}),
		).current;
	(i.useControlledProp("openProp", l),
		i.useControlledProp("triggerIdProp", d),
		i.useSyncedValue("nested", s),
		i.useContextCallback("onOpenChange", c),
		i.useContextCallback("onOpenChangeComplete", o));
	const y = i.useState("payload");
	K({ store: i, actionsRef: x, parentContext: r?.store.context });
	const I = f.useMemo(() => ({ store: i }), [i]);
	return e.jsx(M.Provider, {
		value: I,
		children: typeof t == "function" ? t({ payload: y }) : t,
	});
}
function le({ ...a }) {
	return e.jsx(se, { "data-slot": "alert-dialog", ...a });
}
function re({ ...a }) {
	return e.jsx($, { "data-slot": "alert-dialog-trigger", ...a });
}
function ne({ ...a }) {
	return e.jsx(W, { "data-slot": "alert-dialog-portal", ...a });
}
function ie({ className: a, ...t }) {
	return e.jsx(G, {
		"data-slot": "alert-dialog-overlay",
		className: g(
			"data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 fixed inset-0 isolate z-50 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs",
			a,
		),
		...t,
	});
}
function oe({ className: a, size: t = "default", ...l }) {
	return e.jsxs(ne, {
		children: [
			e.jsx(ie, {}),
			e.jsx(_, {
				"data-slot": "alert-dialog-content",
				"data-size": t,
				className: g(
					"group/alert-dialog-content bg-background ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-3 rounded-xl p-4 ring-1 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-64 data-[size=default]:sm:max-w-sm",
					a,
				),
				...l,
			}),
		],
	});
}
function de({ className: a, ...t }) {
	return e.jsx("div", {
		"data-slot": "alert-dialog-header",
		className: g(
			"grid grid-rows-[auto_1fr] place-items-center gap-1 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
			a,
		),
		...t,
	});
}
function ce({ className: a, ...t }) {
	return e.jsx("div", {
		"data-slot": "alert-dialog-footer",
		className: g(
			"flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
			a,
		),
		...t,
	});
}
function ue({ className: a, ...t }) {
	return e.jsx(H, {
		"data-slot": "alert-dialog-title",
		className: g(
			"text-sm font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
			a,
		),
		...t,
	});
}
function me({ className: a, ...t }) {
	return e.jsx(V, {
		"data-slot": "alert-dialog-description",
		className: g(
			"text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3",
			a,
		),
		...t,
	});
}
function ge({ className: a, ...t }) {
	return e.jsx(u, {
		"data-slot": "alert-dialog-action",
		className: g(a),
		...t,
	});
}
function xe({
	className: a,
	variant: t = "outline",
	size: l = "default",
	...n
}) {
	return e.jsx(L, {
		"data-slot": "alert-dialog-cancel",
		className: g(a),
		render: e.jsx(u, { variant: t, size: l }),
		...n,
	});
}
function fe({ playlistId: a }) {
	const [t, l] = f.useState(!1),
		n = j((r) => r.selectedTrackIds),
		c = j((r) => r.clearAll),
		o = D(),
		x = n.size > 0,
		m = n.size,
		d = N({
			mutationFn: te,
			onSuccess: async () => {
				(h("Deleting tracks"),
					await o.invalidateQueries({ queryKey: T(a).queryKey }),
					o.invalidateQueries({ queryKey: k.queryKey }),
					c(),
					l(!1),
					h.success("Tracks deleted"));
			},
			onError: (r) => {
				(h.error("Failed to remove tracks. Please try again."),
					console.error("Error deleting tracks:", r));
			},
		}),
		p = () => {
			d.mutate({ data: { playlistId: a, trackIds: [...n] } });
		};
	return e.jsxs(le, {
		open: t,
		onOpenChange: l,
		children: [
			e.jsx(re, {
				asChild: !0,
				children: e.jsx(u, {
					disabled: !x,
					size: "sm",
					className: "text-xs",
					variant: "destructive",
					children: "Remove from playlist",
				}),
			}),
			e.jsxs(oe, {
				children: [
					e.jsxs(de, {
						children: [
							e.jsx(ue, { children: "Remove tracks from playlist" }),
							e.jsxs(me, {
								children: [
									"Are you sure you want to remove ",
									m,
									" track",
									m !== 1 ? "s" : "",
									" from this playlist? This action cannot be undone.",
								],
							}),
						],
					}),
					e.jsxs(ce, {
						children: [
							e.jsx(xe, { disabled: d.isPending, children: "Cancel" }),
							e.jsx(ge, {
								asChild: !0,
								children: e.jsx(u, {
									variant: "destructive",
									disabled: d.isPending,
									onClick: p,
									children: d.isPending
										? e.jsxs(e.Fragment, {
												children: [
													e.jsx(P, { className: "animate-spin" }),
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
function he(a) {
	const t = f.useCallback(() => {
			const c = new Map();
			for (const o of a.tracks) o.id && c.set(o.id, (c.get(o.id) || 0) + 1);
			return c;
		}, [a.tracks]),
		l = f.useMemo(() => t(), [t]),
		n = f.useMemo(() => l.size !== a.tracks.length, [a.tracks, l.size]);
	return e.jsx(u, {
		size: "sm",
		className: "text-xs",
		variant: "destructive",
		disabled: !n,
		children: "Remove duplicates",
	});
}
const pe = C({ method: "POST" }).handler(
	b("30ad9d80671907ccf8192d6e3f9fc91115401a75fd6270515e6f65762c4e9a7a"),
);
function ye({ playlistId: a, currentName: t }) {
	const [l, n] = f.useState(t),
		[c, o] = f.useState(!1),
		x = D(),
		m = N({
			mutationFn: pe,
			onSuccess: () => {
				(h.info("Renaming playlist…"),
					x.setQueryData(["user_playlists"], (r = []) =>
						r.map((s) => (s.id === a ? { ...s, name: l } : s)),
					),
					x.setQueryData(["playlist", a], (r) => r && { ...r, name: l }),
					o(!1),
					h.success("Playlist renamed"));
			},
			onError: () => {
				h.error("Something went wrong");
			},
		}),
		d = (r) => {
			(r.preventDefault(),
				l.trim() &&
					l.trim() !== t &&
					m.mutate({ data: { id: a, name: l.trim() } }));
		},
		p = (r) => {
			(o(r), r && n(t));
		};
	return e.jsxs(w, {
		onOpenChange: p,
		open: c,
		children: [
			e.jsx(A, {
				asChild: !0,
				children: e.jsx(u, {
					size: "sm",
					variant: "secondary",
					className: "text-xs",
					children: "Rename playlist",
				}),
			}),
			e.jsxs(z, {
				className: "sm:max-w-md",
				children: [
					e.jsx(J, {
						className: "pb-4",
						children: e.jsx(S, { children: "Rename Playlist" }),
					}),
					e.jsxs("form", {
						className: "space-y-6",
						onSubmit: d,
						children: [
							e.jsxs("div", {
								className: "space-y-3",
								children: [
									e.jsx(U, {
										htmlFor: "playlist-name",
										children: "Playlist Name",
									}),
									e.jsx(X, {
										autoFocus: !0,
										className: "h-11",
										id: "playlist-name",
										onChange: (r) => n(r.target.value),
										placeholder: "Enter new playlist name...",
										value: l,
									}),
								],
							}),
							e.jsxs("div", {
								className: "flex justify-end gap-3 pt-2",
								children: [
									e.jsx(u, {
										className: "px-6",
										onClick: () => o(!1),
										type: "button",
										variant: "outline",
										children: "Cancel",
									}),
									e.jsx(u, {
										className: "px-6",
										disabled: !l.trim() || l.trim() === t || m.isPending,
										type: "submit",
										children: m.isPending
											? e.jsx(P, { className: "size-4 animate-spin" })
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
function Te(a) {
	return e.jsxs("div", {
		className: "flex items-center gap-4",
		children: [
			e.jsx(ae, {}),
			a.playlistId &&
				e.jsxs(e.Fragment, {
					children: [
						e.jsx(ye, {
							currentName: a.playlistName ?? "",
							playlistId: a.playlistId,
						}),
						e.jsx(fe, { playlistId: a.playlistId }),
						e.jsx(he, { tracks: a.tracks ?? [] }),
					],
				}),
		],
	});
}
export { Te as T };
