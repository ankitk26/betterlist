import {
	S as _t,
	Z as et,
	_ as w,
	F as Q,
	$ as j,
	J as D,
	a0 as B,
	a1 as rt,
	a2 as It,
	a3 as L,
	a4 as kt,
	a5 as jt,
	a6 as st,
	I as lt,
	r as P,
	K as ft,
	f as Mt,
	U as Ct,
	j as V,
} from "./main-2PW7nLE1.js";
import { c as Tt } from "./utils-BQHNewu7.js";
var nn = class extends _t {
	constructor(e, t) {
		(super(),
			(this.options = t),
			(this.#r = e),
			(this.#n = null),
			(this.#s = et()),
			this.bindMethods(),
			this.setOptions(t));
	}
	#r;
	#t = void 0;
	#p = void 0;
	#e = void 0;
	#o;
	#u;
	#s;
	#n;
	#m;
	#l;
	#f;
	#i;
	#c;
	#a;
	#d = new Set();
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		this.listeners.size === 1 &&
			(this.#t.addObserver(this),
			nt(this.#t, this.options) ? this.#h() : this.updateResult(),
			this.#b());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return H(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return H(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		((this.listeners = new Set()),
			this.#v(),
			this.#w(),
			this.#t.removeObserver(this));
	}
	setOptions(e) {
		const t = this.options,
			r = this.#t;
		if (
			((this.options = this.#r.defaultQueryOptions(e)),
			this.options.enabled !== void 0 &&
				typeof this.options.enabled != "boolean" &&
				typeof this.options.enabled != "function" &&
				typeof w(this.options.enabled, this.#t) != "boolean")
		)
			throw new Error(
				"Expected enabled to be a boolean or a callback that returns a boolean",
			);
		(this.#P(),
			this.#t.setOptions(this.options),
			t._defaulted &&
				!Q(this.options, t) &&
				this.#r
					.getQueryCache()
					.notify({
						type: "observerOptionsUpdated",
						query: this.#t,
						observer: this,
					}));
		const s = this.hasListeners();
		(s && at(this.#t, r, this.options, t) && this.#h(),
			this.updateResult(),
			s &&
				(this.#t !== r ||
					w(this.options.enabled, this.#t) !== w(t.enabled, this.#t) ||
					j(this.options.staleTime, this.#t) !== j(t.staleTime, this.#t)) &&
				this.#g());
		const n = this.#$();
		s &&
			(this.#t !== r ||
				w(this.options.enabled, this.#t) !== w(t.enabled, this.#t) ||
				n !== this.#a) &&
			this.#y(n);
	}
	getOptimisticResult(e) {
		const t = this.#r.getQueryCache().build(this.#r, e),
			r = this.createResult(t, e);
		return (
			Nt(this, r) &&
				((this.#e = r), (this.#u = this.options), (this.#o = this.#t.state)),
			r
		);
	}
	getCurrentResult() {
		return this.#e;
	}
	trackResult(e, t) {
		return new Proxy(e, {
			get: (r, s) => (
				this.trackProp(s),
				t?.(s),
				s === "promise" &&
					(this.trackProp("data"),
					!this.options.experimental_prefetchInRender &&
						this.#s.status === "pending" &&
						this.#s.reject(
							new Error(
								"experimental_prefetchInRender feature flag is not enabled",
							),
						)),
				Reflect.get(r, s)
			),
		});
	}
	trackProp(e) {
		this.#d.add(e);
	}
	getCurrentQuery() {
		return this.#t;
	}
	refetch({ ...e } = {}) {
		return this.fetch({ ...e });
	}
	fetchOptimistic(e) {
		const t = this.#r.defaultQueryOptions(e),
			r = this.#r.getQueryCache().build(this.#r, t);
		return r.fetch().then(() => this.createResult(r, t));
	}
	fetch(e) {
		return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
			() => (this.updateResult(), this.#e),
		);
	}
	#h(e) {
		this.#P();
		let t = this.#t.fetch(this.options, e);
		return (e?.throwOnError || (t = t.catch(D)), t);
	}
	#g() {
		this.#v();
		const e = j(this.options.staleTime, this.#t);
		if (B || this.#e.isStale || !rt(e)) return;
		const r = It(this.#e.dataUpdatedAt, e) + 1;
		this.#i = L.setTimeout(() => {
			this.#e.isStale || this.updateResult();
		}, r);
	}
	#$() {
		return (
			(typeof this.options.refetchInterval == "function"
				? this.options.refetchInterval(this.#t)
				: this.options.refetchInterval) ?? !1
		);
	}
	#y(e) {
		(this.#w(),
			(this.#a = e),
			!(
				B ||
				w(this.options.enabled, this.#t) === !1 ||
				!rt(this.#a) ||
				this.#a === 0
			) &&
				(this.#c = L.setInterval(() => {
					(this.options.refetchIntervalInBackground || kt.isFocused()) &&
						this.#h();
				}, this.#a)));
	}
	#b() {
		(this.#g(), this.#y(this.#$()));
	}
	#v() {
		this.#i && (L.clearTimeout(this.#i), (this.#i = void 0));
	}
	#w() {
		this.#c && (L.clearInterval(this.#c), (this.#c = void 0));
	}
	createResult(e, t) {
		const r = this.#t,
			s = this.options,
			n = this.#e,
			a = this.#o,
			o = this.#u,
			u = e !== r ? e.state : this.#p,
			{ state: l } = e;
		let h = { ...l },
			p = !1,
			d;
		if (t._optimisticResults) {
			const v = this.hasListeners(),
				I = !v && nt(e, t),
				T = v && at(e, r, t, s);
			((I || T) && (h = { ...h, ...jt(l.data, e.options) }),
				t._optimisticResults === "isRestoring" && (h.fetchStatus = "idle"));
		}
		let { error: g, errorUpdatedAt: b, status: y } = h;
		d = h.data;
		let x = !1;
		if (t.placeholderData !== void 0 && d === void 0 && y === "pending") {
			let v;
			(n?.isPlaceholderData && t.placeholderData === o?.placeholderData
				? ((v = n.data), (x = !0))
				: (v =
						typeof t.placeholderData == "function"
							? t.placeholderData(this.#f?.state.data, this.#f)
							: t.placeholderData),
				v !== void 0 && ((y = "success"), (d = st(n?.data, v, t)), (p = !0)));
		}
		if (t.select && d !== void 0 && !x)
			if (n && d === a?.data && t.select === this.#m) d = this.#l;
			else
				try {
					((this.#m = t.select),
						(d = t.select(d)),
						(d = st(n?.data, d, t)),
						(this.#l = d),
						(this.#n = null));
				} catch (v) {
					this.#n = v;
				}
		this.#n && ((g = this.#n), (d = this.#l), (b = Date.now()), (y = "error"));
		const R = h.fetchStatus === "fetching",
			_ = y === "pending",
			U = y === "error",
			O = _ && R,
			Y = d !== void 0,
			S = {
				status: y,
				fetchStatus: h.fetchStatus,
				isPending: _,
				isSuccess: y === "success",
				isError: U,
				isInitialLoading: O,
				isLoading: O,
				data: d,
				dataUpdatedAt: h.dataUpdatedAt,
				error: g,
				errorUpdatedAt: b,
				failureCount: h.fetchFailureCount,
				failureReason: h.fetchFailureReason,
				errorUpdateCount: h.errorUpdateCount,
				isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
				isFetchedAfterMount:
					h.dataUpdateCount > u.dataUpdateCount ||
					h.errorUpdateCount > u.errorUpdateCount,
				isFetching: R,
				isRefetching: R && !_,
				isLoadingError: U && !Y,
				isPaused: h.fetchStatus === "paused",
				isPlaceholderData: p,
				isRefetchError: U && Y,
				isStale: J(e, t),
				refetch: this.refetch,
				promise: this.#s,
				isEnabled: w(t.enabled, e) !== !1,
			};
		if (this.options.experimental_prefetchInRender) {
			const v = S.data !== void 0,
				I = S.status === "error" && !v,
				T = (N) => {
					I ? N.reject(S.error) : v && N.resolve(S.data);
				},
				tt = () => {
					const N = (this.#s = S.promise = et());
					T(N);
				},
				G = this.#s;
			switch (G.status) {
				case "pending":
					e.queryHash === r.queryHash && T(G);
					break;
				case "fulfilled":
					(I || S.data !== G.value) && tt();
					break;
				case "rejected":
					(!I || S.error !== G.reason) && tt();
					break;
			}
		}
		return S;
	}
	updateResult() {
		const e = this.#e,
			t = this.createResult(this.#t, this.options);
		if (
			((this.#o = this.#t.state),
			(this.#u = this.options),
			this.#o.data !== void 0 && (this.#f = this.#t),
			Q(t, e))
		)
			return;
		this.#e = t;
		const r = () => {
			if (!e) return !0;
			const { notifyOnChangeProps: s } = this.options,
				n = typeof s == "function" ? s() : s;
			if (n === "all" || (!n && !this.#d.size)) return !0;
			const a = new Set(n ?? this.#d);
			return (
				this.options.throwOnError && a.add("error"),
				Object.keys(this.#e).some((o) => {
					const i = o;
					return this.#e[i] !== e[i] && a.has(i);
				})
			);
		};
		this.#S({ listeners: r() });
	}
	#P() {
		const e = this.#r.getQueryCache().build(this.#r, this.options);
		if (e === this.#t) return;
		const t = this.#t;
		((this.#t = e),
			(this.#p = e.state),
			this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
	}
	onQueryUpdate() {
		(this.updateResult(), this.hasListeners() && this.#b());
	}
	#S(e) {
		lt.batch(() => {
			(e.listeners &&
				this.listeners.forEach((t) => {
					t(this.#e);
				}),
				this.#r
					.getQueryCache()
					.notify({ query: this.#t, type: "observerResultsUpdated" }));
		});
	}
};
function Gt(e, t) {
	return (
		w(t.enabled, e) !== !1 &&
		e.state.data === void 0 &&
		!(e.state.status === "error" && t.retryOnMount === !1)
	);
}
function nt(e, t) {
	return Gt(e, t) || (e.state.data !== void 0 && H(e, t, t.refetchOnMount));
}
function H(e, t, r) {
	if (w(t.enabled, e) !== !1 && j(t.staleTime, e) !== "static") {
		const s = typeof r == "function" ? r(e) : r;
		return s === "always" || (s !== !1 && J(e, t));
	}
	return !1;
}
function at(e, t, r, s) {
	return (
		(e !== t || w(s.enabled, e) === !1) &&
		(!r.suspense || e.state.status !== "error") &&
		J(e, r)
	);
}
function J(e, t) {
	return w(t.enabled, e) !== !1 && e.isStaleByTime(j(t.staleTime, e));
}
function Nt(e, t) {
	return !Q(e.getCurrentResult(), t);
}
var dt = P.createContext(!1),
	Lt = () => P.useContext(dt);
dt.Provider;
function At() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e,
	};
}
var zt = P.createContext(At()),
	Ft = () => P.useContext(zt),
	Wt = (e, t, r) => {
		const s =
			r?.state.error && typeof e.throwOnError == "function"
				? ft(e.throwOnError, [r.state.error, r])
				: e.throwOnError;
		(e.suspense || e.experimental_prefetchInRender || s) &&
			(t.isReset() || (e.retryOnMount = !1));
	},
	qt = (e) => {
		P.useEffect(() => {
			e.clearReset();
		}, [e]);
	},
	Qt = ({
		result: e,
		errorResetBoundary: t,
		throwOnError: r,
		query: s,
		suspense: n,
	}) =>
		e.isError &&
		!t.isReset() &&
		!e.isFetching &&
		s &&
		((n && e.data === void 0) || ft(r, [e.error, s])),
	an = (e, t) => t.state.data === void 0,
	Dt = (e) => {
		if (e.suspense) {
			const r = (n) => (n === "static" ? n : Math.max(n ?? 1e3, 1e3)),
				s = e.staleTime;
			((e.staleTime = typeof s == "function" ? (...n) => r(s(...n)) : r(s)),
				typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
		}
	},
	Bt = (e, t) => e.isLoading && e.isFetching && !t,
	Ht = (e, t) => e?.suspense && t.isPending,
	ot = (e, t, r) =>
		t.fetchOptimistic(e).catch(() => {
			r.clearReset();
		});
function on(e, t, r) {
	const s = Lt(),
		n = Ft(),
		a = Mt(),
		o = a.defaultQueryOptions(e);
	a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
	const i = a.getQueryCache().get(o.queryHash);
	((o._optimisticResults = s ? "isRestoring" : "optimistic"),
		Dt(o),
		Wt(o, n, i),
		qt(n));
	const u = !a.getQueryCache().get(o.queryHash),
		[l] = P.useState(() => new t(a, o)),
		h = l.getOptimisticResult(o),
		p = !s && e.subscribed !== !1;
	if (
		(P.useSyncExternalStore(
			P.useCallback(
				(d) => {
					const g = p ? l.subscribe(lt.batchCalls(d)) : D;
					return (l.updateResult(), g);
				},
				[l, p],
			),
			() => l.getCurrentResult(),
			() => l.getCurrentResult(),
		),
		P.useEffect(() => {
			l.setOptions(o);
		}, [o, l]),
		Ht(o, h))
	)
		throw ot(o, l, n);
	if (
		Qt({
			result: h,
			errorResetBoundary: n,
			throwOnError: o.throwOnError,
			query: i,
			suspense: o.suspense,
		})
	)
		throw h.error;
	return (
		a.getDefaultOptions().queries?._experimental_afterQuery?.(o, h),
		o.experimental_prefetchInRender &&
			!B &&
			Bt(h, s) &&
			(u ? ot(o, l, n) : i?.promise)?.catch(D).finally(() => {
				l.updateResult();
			}),
		o.notifyOnChangeProps ? h : l.trackResult(h)
	);
}
var Zt = new Set(["style"]),
	Vt = "use" in Ct,
	Jt = {
		srcset: "srcSet",
		fetchpriority: Vt ? "fetchPriority" : "fetchpriority",
	},
	Kt = (e) =>
		e.startsWith("data-") || e.startsWith("aria-")
			? e
			: Jt[e] || e.replace(/-./g, (t) => t[1].toUpperCase());
function K(e) {
	return Object.fromEntries(
		Object.entries(e).map(([t, r]) => [
			Kt(t),
			Zt.has(t) && r && typeof r != "string" ? K(r) : r,
		]),
	);
}
var pt = (e, t) => {
		if (!(!e || !t))
			switch (t) {
				case "constrained":
					return `(min-width: ${e}px) ${e}px, 100vw`;
				case "fixed":
					return `${e}px`;
				case "fullWidth":
					return "100vw";
				default:
					return;
			}
	},
	k = (e) => (e || e === 0 ? `${e}px` : void 0),
	Xt = ({
		width: e,
		height: t,
		aspectRatio: r,
		layout: s,
		objectFit: n = "cover",
		background: a,
	}) => {
		const o = [["object-fit", n]];
		return (
			a?.startsWith("https:") ||
			a?.startsWith("http:") ||
			a?.startsWith("data:") ||
			a?.startsWith("/")
				? (o.push(["background-image", `url(${a})`]),
					o.push(["background-size", "cover"]),
					o.push(["background-repeat", "no-repeat"]))
				: o.push(["background", a]),
			s === "fixed" && (o.push(["width", k(e)]), o.push(["height", k(t)])),
			s === "constrained" &&
				(o.push(["max-width", k(e)]),
				o.push(["max-height", k(t)]),
				o.push(["aspect-ratio", r ? `${r}` : void 0]),
				o.push(["width", "100%"])),
			s === "fullWidth" &&
				(o.push(["width", "100%"]),
				o.push(["aspect-ratio", r ? `${r}` : void 0]),
				o.push(["height", k(t)])),
			Object.fromEntries(o.filter(([, i]) => i))
		);
	},
	Yt = [
		6016, 5120, 4480, 3840, 3200, 2560, 2048, 1920, 1668, 1280, 1080, 960, 828,
		750, 640,
	],
	it = 24,
	te = ({ width: e, layout: t, resolutions: r = Yt }) => {
		if (t === "fullWidth") return r;
		if (!e) return [];
		const s = e * 2;
		return t === "fixed"
			? [e, s]
			: t === "constrained"
				? [e, s, ...r.filter((n) => n < s)]
				: [];
	},
	ee = ({
		src: e,
		width: t,
		layout: r = "constrained",
		height: s,
		aspectRatio: n,
		breakpoints: a,
		format: o,
	}) => (
		(a ||= te({ width: t, layout: r })),
		a
			.sort((i, u) => i - u)
			.map((i) => {
				let u;
				return (
					s && n && (u = Math.round(i / n)),
					{ url: e, width: i, height: u, format: o }
				);
			})
	),
	mt = (e) => {
		let { src: t, transformer: r, operations: s } = e;
		return r
			? ee(e).map(
					({ url: n, ...a }) =>
						`${r(t, { ...s, ...a }, e.options)?.toString()} ${a.width}w`,
				).join(`,
`)
			: "";
	};
function gt({
	width: e,
	height: t,
	priority: r,
	layout: s = "constrained",
	aspectRatio: n,
	...a
}) {
	return (
		(e = (e && Number(e)) || void 0),
		(t = (t && Number(t)) || void 0),
		r
			? ((a.loading ||= "eager"), (a.fetchpriority ||= "high"))
			: ((a.loading ||= "lazy"), (a.decoding ||= "async")),
		a.alt === "" && (a.role ||= "presentation"),
		n
			? e
				? t || (t = Math.round(e / n))
				: t && (e = Math.round(t * n))
			: e && t && (n = e / t),
		{ width: e, height: t, aspectRatio: n, layout: s, ...a }
	);
}
function re(e) {
	let {
		src: t,
		transformer: r,
		background: s,
		layout: n,
		objectFit: a,
		breakpoints: o,
		width: i,
		height: u,
		aspectRatio: l,
		unstyled: h,
		operations: p,
		options: d,
		...g
	} = gt(e);
	if (r && s === "auto") {
		const y = l ? Math.round(it / l) : void 0,
			x = r(t, { width: it, height: y }, d);
		x && (s = x.toString());
	}
	const b = {
		width: i,
		height: u,
		aspectRatio: l,
		layout: n,
		objectFit: a,
		background: s,
	};
	if (((g.sizes ||= pt(i, n)), h || (g.style = { ...Xt(b), ...g.style }), r)) {
		g.srcset = mt({
			src: t,
			width: i,
			height: u,
			aspectRatio: l,
			layout: n,
			breakpoints: o,
			transformer: r,
			operations: p,
			options: d,
		});
		const y = r(t, { ...p, width: i, height: u }, d);
		(y && (t = y),
			(n === "fullWidth" || n === "constrained") &&
				((i = void 0), (u = void 0)));
	}
	return { ...g, src: t?.toString(), width: i, height: u };
}
function se(e) {
	return e
		? e.startsWith("image/")
			? { format: e.slice(6), mimeType: e }
			: { format: e, mimeType: `image/${e === "jpg" ? "jpeg" : e}` }
		: {};
}
function ne({ media: e, type: t, ...r }) {
	let {
		src: s,
		transformer: n,
		layout: a,
		breakpoints: o,
		width: i,
		height: u,
		aspectRatio: l,
		sizes: h,
		loading: p,
		decoding: d,
		operations: g,
		options: b,
		...y
	} = gt(r);
	if (!n) return {};
	const { format: x, mimeType: R } = se(t);
	h ||= pt(i, a);
	const _ = mt({
			src: s,
			width: i,
			height: u,
			aspectRatio: l,
			layout: a,
			breakpoints: o,
			transformer: n,
			format: x,
			operations: g,
			options: b,
		}),
		U = n(s, { ...g, width: i, height: u }, b);
	U && (s = U);
	const O = { ...y, sizes: h, srcset: _ };
	return (e && (O.media = e), R && (O.type = R), O);
}
const ae = {
		"images.ctfassets.net": "contentful",
		"cdn.builder.io": "builder.io",
		"images.prismic.io": "imgix",
		"www.datocms-assets.com": "imgix",
		"cdn.sanity.io": "imgix",
		"images.unsplash.com": "imgix",
		"cdn.shopify.com": "shopify",
		"s7d1.scene7.com": "scene7",
		"ip.keycdn.com": "keycdn",
		"assets.caisy.io": "bunny",
		"images.contentstack.io": "contentstack",
		"ucarecdn.com": "uploadcare",
		"imagedelivery.net": "cloudflare_images",
		"wsrv.nl": "wsrv",
	},
	oe = {
		"imgix.net": "imgix",
		"wp.com": "wordpress",
		"files.wordpress.com": "wordpress",
		"b-cdn.net": "bunny",
		"storyblok.com": "storyblok",
		"kc-usercontent.com": "kontent.ai",
		"cloudinary.com": "cloudinary",
		"kxcdn.com": "keycdn",
		"imgeng.in": "imageengine",
		"imagekit.io": "imagekit",
		"cloudimg.io": "cloudimage",
		"ucarecdn.com": "uploadcare",
		"supabase.co": "supabase",
		"graphassets.com": "hygraph",
	},
	ie = {
		"/cdn-cgi/image/": "cloudflare",
		"/cdn-cgi/imagedelivery/": "cloudflare_images",
		"/_next/image": "nextjs",
		"/_vercel/image": "vercel",
		"/is/image": "scene7",
		"/_ipx/": "ipx",
		"/_image": "astro",
		"/.netlify/images": "netlify",
		"/storage/v1/object/public/": "supabase",
		"/storage/v1/render/image/public/": "supabase",
		"/v1/storage/buckets/": "appwrite",
	};
function A(e) {
	if (!e) return e;
	const t = Number(e);
	return isNaN(t) ? e : Math.round(t);
}
const ce = (e) => {
		const { pathname: t, search: r } = e;
		return `${t}${r}`;
	},
	f = (e) => (e.hostname === "n" ? ce(e) : e.toString()),
	c = (e, t) => (typeof e == "string" ? new URL(e, "http://n/") : e),
	ct = (e) =>
		e === " "
			? "+"
			: "%" + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"),
	$t = (e) => (e?.startsWith("/") ? e.slice(1) : e),
	X = (e) => (e?.endsWith("/") ? e.slice(0, -1) : e),
	he = (e) => (e?.endsWith("/") ? e : `${e}/`),
	ue = (e, t) => {
		const r = ct(e),
			s = ct(t);
		function n(o) {
			return encodeURIComponent(o).replaceAll(e, r).replaceAll(t, s);
		}
		function a(o, i) {
			return `${n(o)}${e}${n(String(i))}`;
		}
		return (o) =>
			(Array.isArray(o) ? o : Object.entries(o))
				.flatMap(([u, l]) =>
					l == null ? [] : Array.isArray(l) ? l.map((h) => a(u, h)) : a(u, l),
				)
				.join(t);
	},
	le = (e, t) =>
		e === "=" && t === "&"
			? pe
			: (r) => {
					const s = r.toString();
					return Object.fromEntries(
						s.split(t).map((n) => {
							const [a, o] = n.split(e);
							return [decodeURI(a), decodeURI(o)];
						}),
					);
				};
function fe(e, t = 4e3, r = 4e3) {
	let { width: s, height: n } = e;
	return (
		(s = Number(s) || void 0),
		(n = Number(n) || void 0),
		s && s > t && (n && (n = Math.round((n * t) / s)), (s = t)),
		n && n > r && (s && (s = Math.round((s * r) / n)), (n = r)),
		{ width: s, height: n }
	);
}
function M(e) {
	const t = c(e),
		r = Object.fromEntries(t.searchParams.entries());
	for (const s in ["width", "height", "quality"]) {
		const n = r[s];
		if (n) {
			const a = Number(n);
			isNaN(a) || (r[s] = a);
		}
	}
	return ((t.search = ""), { operations: r, src: f(t) });
}
function yt({ keyMap: e = {}, formatMap: t = {}, defaults: r = {} }, s) {
	(s.format && s.format in t && (s.format = t[s.format]),
		s.width && (s.width = A(s.width)),
		s.height && (s.height = A(s.height)));
	for (const n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
		const a = n;
		if (e[a] === !1) {
			delete s[a];
			continue;
		}
		e[a] && s[a] && ((s[e[a]] = s[a]), delete s[a]);
	}
	for (const n in r) {
		if (!Object.prototype.hasOwnProperty.call(r, n)) continue;
		const a = n,
			o = r[a];
		if (!s[a] && o !== void 0) {
			if (e[a] === !1) continue;
			const i = e[a] ?? a;
			if (i in s) continue;
			s[i] = o;
		}
	}
	return s;
}
const ht = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [r, t]));
function de({ keyMap: e = {}, formatMap: t = {}, defaults: r = {} }, s) {
	const n = ht(e),
		a = ht(t),
		o = yt({ keyMap: n, formatMap: a, defaults: r }, s);
	(o.width && (o.width = A(o.width)), o.height && (o.height = A(o.height)));
	const i = Number(o.quality);
	return (isNaN(i) || (o.quality = i), o);
}
const pe = (e) => {
	const t = c(e);
	return Object.fromEntries(t.searchParams.entries());
};
function E({ kvSeparator: e = "=", paramSeparator: t = "&", ...r } = {}) {
	const s = ue(e, t);
	return (n) => {
		const a = yt(r, n);
		return s(a);
	};
}
function me({
	kvSeparator: e = "=",
	paramSeparator: t = "&",
	defaults: r,
	...s
} = {}) {
	const n = le(e, t);
	return (a) => {
		const o = a ? n(a) : {};
		return de(s, o);
	};
}
function $(e) {
	const t = E(e),
		r = me(e);
	return { operationsGenerator: t, operationsParser: r };
}
function bt(e) {
	if (e != null)
		try {
			return !!JSON.parse(e?.toString());
		} catch {
			return !!e;
		}
}
const ge = (e) =>
	Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
function m(e, t) {
	return (r, s, n) => {
		const a = e(r, n);
		return a
			? t(a.src, { ...a.operations, ...ge(s) }, { ...a.options, ...n })
			: t(r, s, n);
	};
}
const $e = new Map(Object.entries(ae)),
	ye = Object.entries(oe),
	be = Object.entries(ie);
function W(e) {
	return ve(e) || C(e);
}
function ve(e) {
	if (typeof e == "string" && !e.startsWith("https://")) return !1;
	const { hostname: t } = c(e),
		r = $e.get(t);
	return r || ye.find(([s]) => t.endsWith(s))?.[1] || !1;
}
function C(e) {
	const { pathname: t } = c(e);
	return be.find(([r]) => t.startsWith(r))?.[1] || !1;
}
const we = "/view?",
	Pe = "/preview?",
	{ operationsGenerator: Se, operationsParser: xe } = $({
		keyMap: { format: "output" },
		kvSeparator: "=",
		paramSeparator: "&",
	}),
	Re = (e, t) => {
		const r = c(e.toString().replace(we, Pe)),
			s = r.searchParams.get("project") ?? "",
			n = Se(t);
		return ((r.search = n), r.searchParams.append("project", s), f(r));
	},
	Ue = (e) => {
		if (C(e) !== "appwrite") return null;
		const t = c(e),
			r = xe(t);
		delete r.project;
		const s = t.searchParams.get("project") ?? "";
		return (
			(t.search = ""),
			t.searchParams.append("project", s),
			{ src: t.href, operations: r }
		);
	},
	Oe = m(Ue, Re),
	vt = "/_image",
	{ operationsParser: Ee, operationsGenerator: _e } = $({
		keyMap: { format: "f", width: "w", height: "h", quality: "q" },
		defaults: { fit: "cover" },
	}),
	q = (e, t, r) => {
		const s = c(`${X(r?.baseUrl ?? "")}${r?.endpoint ?? vt}`),
			n = _e(t);
		return ((s.search = n), s.searchParams.set("href", e.toString()), f(s));
	},
	Ie = (e) => {
		const t = c(e),
			r = t.searchParams.get("href");
		if (!r) return null;
		t.searchParams.delete("href");
		const s = Ee(t);
		return { src: r, operations: s, options: { baseUrl: t.origin } };
	},
	ke = (e, t, r = {}) => {
		if (c(e).pathname !== (r?.endpoint ?? vt)) return q(e, t, r);
		const n = Ie(e);
		return n
			? ((r.baseUrl ??= n.options.baseUrl),
				q(n.src, { ...n.operations, ...t }, r))
			: q(e, t, r);
	},
	je = E({ defaults: { fit: "cover", format: "webp", sharp: !0 } }),
	Me = M,
	Ce = (e, t) => {
		const r = je(t),
			s = c(e);
		return ((s.search = r), f(s));
	},
	Te = m(Me, Ce),
	Ge = E({ keyMap: { format: "output" } }),
	Ne = M,
	Le = (e, t) => {
		const r = Ge(t),
			s = c(e);
		return ((s.search = r), f(s));
	},
	Ae = m(Ne, Le),
	ze = (e, t) => {
		const { width: r, height: s } = t;
		return (
			r &&
				s &&
				(t.aspect_ratio ??= `${Math.round(Number(r))}:${Math.round(Number(s))}`),
			Ae(e, t)
		);
	},
	{ operationsGenerator: Fe, operationsParser: We } = $({
		keyMap: { format: "f" },
		defaults: { format: "auto", fit: "cover" },
		formatMap: { jpg: "jpeg" },
		kvSeparator: "=",
		paramSeparator: ",",
	}),
	qe = (e, t, r) => {
		const s = Fe(t),
			n = c(r?.domain ? `https://${r.domain}` : "/");
		return ((n.pathname = `/cdn-cgi/image/${s}/${$t(e.toString())}`), f(n));
	},
	Qe = (e, t) => {
		if (C(e) !== "cloudflare") return null;
		const r = c(e),
			[, , , s, ...n] = r.pathname.split("/"),
			a = We(s);
		return {
			src: f(c(n.join("/"))),
			operations: a,
			options: {
				domain: t?.domain ?? (r.hostname === "n" ? void 0 : r.hostname),
			},
		};
	},
	De = m(Qe, qe),
	Be =
		/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,
	He =
		/https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,
	{ operationsGenerator: Ze, operationsParser: Ve } = $({
		keyMap: { width: "w", height: "h", format: "f" },
		defaults: { fit: "cover" },
		kvSeparator: "=",
		paramSeparator: ",",
	});
function wt(e, t) {
	const { host: r, accountHash: s, imageId: n } = e;
	if (!r || !s || !n)
		throw new Error("Missing required Cloudflare Images options");
	return [
		"https:/",
		...(r === "imagedelivery.net" ? [r] : [r, "cdn-cgi", "imagedelivery"]),
		s,
		n,
		t,
	]
		.filter(Boolean)
		.join("/");
}
const Je = (e, t, r = {}) => {
		const s = Ze(t),
			n = wt(r, s);
		return f(c(n));
	},
	Ke = (e) => {
		const t = c(e),
			r = [...t.toString().matchAll(Be), ...t.toString().matchAll(He)];
		if (!r[0]?.groups) return null;
		const {
				host: s,
				accountHash: n,
				imageId: a,
				transformations: o,
			} = r[0].groups,
			i = Ve(o || ""),
			u = { host: s, accountHash: n, imageId: a };
		return { src: wt(u), operations: i, options: u };
	},
	Xe = (e, t, r = {}) => {
		const s = Ke(e);
		if (!s) throw new Error("Invalid Cloudflare Images URL");
		const n = { ...s.operations, ...t };
		return Je(s.src, n, { ...s.options, ...r });
	},
	{ operationsGenerator: Ye, operationsParser: tr } = $({
		keyMap: { format: "force_format", width: "w", height: "h", quality: "q" },
		defaults: { org_if_sml: 1 },
	}),
	er = (e, t = {}, { token: r } = {}) => {
		if (!r) throw new Error("Token is required for Cloudimage URLs" + e);
		let s = e.toString();
		((s = s.replace(/^https?:\/\//, "")),
			s.includes("?") && ((t.ci_url_encoded = 1), (s = encodeURIComponent(s))));
		const n = Ye(t),
			a = new URL(`https://${r}.cloudimg.io/`);
		return ((a.pathname = s), (a.search = n), a.toString());
	},
	rr = (e, t = {}) => {
		const r = c(e);
		if (W(r) !== "cloudimage") return null;
		const s = tr(r);
		let n = r.pathname;
		return (
			s.ci_url_encoded &&
				((n = decodeURIComponent(n)), delete s.ci_url_encoded),
			(t.token ??= r.hostname.replace(".cloudimg.io", "")),
			{ src: `${r.protocol}/${n}`, operations: s, options: t }
		);
	},
	sr = m(rr, er),
	nr =
		/https?:\/\/(?<host>res\.cloudinary\.com)\/(?<cloudName>[a-zA-Z0-9-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/,
	ar =
		/https?:\/\/(?<host>(?<cloudName>[a-zA-Z0-9-]+)-res\.cloudinary\.com|[a-zA-Z0-9.-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/,
	{ operationsGenerator: or, operationsParser: ir } = $({
		keyMap: { width: "w", height: "h", format: "f", quality: "q" },
		defaults: { format: "auto", c: "lfill" },
		kvSeparator: "_",
		paramSeparator: ",",
	});
function cr({
	host: e,
	cloudName: t,
	assetType: r,
	deliveryType: s,
	signature: n,
	transformations: a,
	version: o,
	id: i,
}) {
	return [
		"https:/",
		e,
		e === "res.cloudinary.com" ? t : void 0,
		r,
		s,
		n,
		a,
		o,
		i,
	]
		.filter(Boolean)
		.join("/");
}
function hr(e) {
	let t = e.toString().match(nr);
	return (
		t?.length || (t = e.toString().match(ar)), t?.length ? t.groups || {} : null
	);
}
const ur = (e, t) => {
		const r = hr(e.toString());
		if (!r) return e.toString();
		const s = ir(r.transformations || "");
		return ((r.transformations = or({ ...s, ...t })), cr(r));
	},
	lr = E({
		keyMap: { format: "fm", width: "w", height: "h", quality: "q" },
		defaults: { fit: "fill" },
	}),
	fr = (e, t) => {
		const r = lr(t),
			s = new URL(e);
		return ((s.search = r), f(s));
	},
	dr = M,
	pr = m(dr, fr),
	mr = (e, t) => {
		const { width: r, height: s } = fe(t, 4e3, 4e3);
		return pr(e, { ...t, width: r, height: s });
	},
	gr = E({ defaults: { auto: "webp", disable: "upscale" } }),
	$r = (e, t, { baseURL: r = "https://images.contentstack.io/" } = {}) => {
		t.width && t.height && (t.fit ??= "crop");
		const s = gr(t),
			n = c(e);
		return (
			n.hostname === "n" &&
				((n.protocol = "https:"), (n.hostname = new URL(r).hostname)),
			(n.search = s),
			f(n)
		);
	},
	yr = (e) => {
		const { src: t, operations: r } = M(e) ?? {};
		if (!r || !t) return null;
		const { origin: s } = c(e);
		return { src: t, operations: r, options: { baseURL: s } };
	},
	br = m(yr, $r),
	vr = E({ defaults: { withoutEnlargement: !0, fit: "cover" } }),
	wr = (e, t) => {
		Array.isArray(t.transforms) &&
			(t.transforms = JSON.stringify(t.transforms));
		const r = vr(t),
			s = c(e);
		return ((s.search = r), f(s));
	},
	Pr = (e) => {
		const t = M(e);
		if (t?.operations?.transforms && typeof t.operations.transforms == "string")
			try {
				t.operations.transforms = JSON.parse(t.operations.transforms);
			} catch {
				return null;
			}
		return t;
	},
	Sr = m(Pr, wr),
	xr =
		/https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-zA-Z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-zA-Z0-9]+)$/;
$({
	keyMap: { width: "width", height: "height", format: "format" },
	defaults: { format: "auto", fit: "crop" },
});
const Pt = (e) => {
		const r = c(e).toString().match(xr);
		if (!r?.groups) return null;
		const { region: s, envId: n, handle: a, transformations: o } = r.groups,
			i = {};
		return (
			o &&
				o.split("/").forEach((l) => {
					const [h, p] = l.split("=");
					h === "resize" && p
						? p.split(",").forEach((d) => {
								const [g, b] = d.split(":");
								g === "width" || g === "height"
									? (i[g] = Number(b))
									: g === "fit" && (i.fit = b);
							})
						: h === "output" && p
							? p.split(",").forEach((d) => {
									const [g, b] = d.split(":");
									g === "format" && (i.format = b);
								})
							: h === "auto_image" && (i.format = "auto");
				}),
			{
				src: `https://${s}.graphassets.com/${n}/${a}`,
				operations: i,
				options: { region: s, envId: n, handle: a },
			}
		);
	},
	Rr = (e, t, r = {}) => {
		const s = Pt(e);
		if (!s) throw new Error("Invalid Hygraph URL");
		const { region: n, envId: a, handle: o } = { ...s.options, ...r },
			i = [];
		if (t.width || t.height) {
			const p = [];
			(t.width && t.height
				? p.push("fit:crop")
				: t.fit && p.push(`fit:${t.fit}`),
				t.width && p.push(`width:${t.width}`),
				t.height && p.push(`height:${t.height}`),
				p.length && i.push(`resize=${p.join(",")}`));
		}
		t.format === "auto" || (!t.format && !s.operations.format)
			? i.push("auto_image")
			: t.format && i.push(`output=format:${t.format}`);
		const u = `https://${n}.graphassets.com/${a}`,
			l = i.length > 0 ? "/" + i.join("/") : "",
			h = c(`${u}${l}/${o}`);
		return f(h);
	},
	Ur = m(Pt, Rr),
	{ operationsGenerator: Or, operationsParser: Er } = $({
		keyMap: { width: "w", height: "h", format: "f" },
		defaults: { m: "cropbox" },
		kvSeparator: "_",
		paramSeparator: "/",
	}),
	_r = (e, t) => {
		const r = Or(t),
			s = c(e);
		return (s.searchParams.set("imgeng", r), f(s));
	},
	Ir = (e) => {
		const t = c(e),
			r = t.searchParams.get("imgeng");
		if (!r) return null;
		const s = Er(r);
		return (t.searchParams.delete("imgeng"), { src: f(t), operations: s });
	},
	kr = m(Ir, _r),
	{ operationsGenerator: jr, operationsParser: Mr } = $({
		keyMap: { width: "w", height: "h", format: "f", quality: "q" },
		defaults: { c: "maintain_ratio", fo: "auto" },
		kvSeparator: "-",
		paramSeparator: ",",
	}),
	Cr = (e, t) => {
		const r = jr(t),
			s = c(e);
		return (s.searchParams.set("tr", r), f(s));
	},
	Tr = (e) => {
		const t = c(e);
		let r = null,
			s = t.pathname;
		if (t.searchParams.has("tr"))
			((r = t.searchParams.get("tr")), t.searchParams.delete("tr"));
		else {
			const a = t.pathname.split("/"),
				o = a.findIndex((i) => i.startsWith("tr:"));
			o !== -1 &&
				((r = a[o].slice(3)),
				(s = a
					.slice(0, o)
					.concat(a.slice(o + 1))
					.join("/")));
		}
		if (!r) return null;
		t.pathname = s;
		const n = Mr(r);
		return { src: f(t), operations: n };
	},
	Gr = m(Tr, Cr),
	{ operationsGenerator: Nr, operationsParser: Lr } = $({
		keyMap: { format: "fm", width: "w", height: "h", quality: "q" },
		defaults: { fit: "min", auto: "format" },
	}),
	Ar = (e) => {
		const t = c(e),
			r = Lr(e);
		return ((t.search = ""), { src: f(t), operations: r });
	},
	zr = (e, t) => {
		const r = Nr(t),
			s = c(e);
		return (
			(s.search = r),
			s.searchParams.has("fm") &&
				s.searchParams.get("auto") === "format" &&
				s.searchParams.delete("auto"),
			f(s)
		);
	},
	Fr = m(Ar, zr),
	{ operationsGenerator: Wr, operationsParser: qr } = $({
		keyMap: { width: "w", height: "h", quality: "q", format: "f" },
		defaults: { f: "auto" },
		kvSeparator: "_",
		paramSeparator: ",",
	}),
	ut = (e, t, r) => {
		t.width &&
			t.height &&
			((t.s = `${t.width}x${t.height}`), delete t.width, delete t.height);
		const s = Wr(t),
			n = r?.baseURL ?? "/_ipx",
			a = c(n);
		return ((a.pathname = `${X(a.pathname)}/${s}/${$t(e.toString())}`), f(a));
	},
	Qr = (e) => {
		const t = c(e),
			[, r, s, ...n] = t.pathname.split("/");
		if (!s || !n.length) return null;
		const a = qr(s);
		if (a.s) {
			const [o, i] = a.s.split("x").map(Number);
			((a.width = o), (a.height = i), delete a.s);
		}
		return {
			src: "/" + n.join("/"),
			operations: a,
			options: { baseURL: `${t.origin}/${r}` },
		};
	},
	Dr = (e, t, r) => {
		const s = c(e),
			n = r?.baseURL;
		if ((n && s.toString().startsWith(n)) || s.pathname.startsWith("/_ipx")) {
			const a = Qr(e);
			if (a)
				return ut(
					a.src,
					{ ...a.operations, ...t },
					{ baseURL: a.options.baseURL },
				);
		}
		return ut(e, t, { baseURL: n });
	},
	St = [
		"enlarge",
		"flip",
		"flop",
		"negate",
		"normalize",
		"grayscale",
		"removealpha",
		"olrepeat",
		"progressive",
		"adaptive",
		"lossless",
		"nearlossless",
		"metadata",
	],
	{ operationsGenerator: Br, operationsParser: Hr } = $({
		defaults: { fit: "cover" },
		formatMap: { jpg: "jpeg" },
	}),
	Zr = (e, t) => {
		const r = c(e);
		for (const s of St) t[s] !== void 0 && (t[s] = t[s] ? 1 : 0);
		return ((r.search = Br(t)), f(r));
	},
	Vr = (e) => {
		const t = c(e),
			r = Hr(t);
		for (const s of St) r[s] !== void 0 && (r[s] = bt(r[s]));
		return ((t.search = ""), { src: f(t), operations: r });
	},
	Jr = m(Vr, Zr),
	{ operationsGenerator: Kr, operationsParser: Xr } = $({
		formatMap: { jpg: "jpeg" },
		keyMap: { format: "fm", width: "w", height: "h", quality: "q" },
	}),
	Yr = (e, t) => {
		const r = c(e);
		return (
			t.lossless !== void 0 && (t.lossless = t.lossless ? 1 : 0),
			t.width && t.height && (t.fit = "crop"),
			(r.search = Kr(t)),
			f(r)
		);
	},
	ts = (e) => {
		const t = c(e),
			r = Xr(t);
		return (
			r.lossless !== void 0 && (r.lossless = bt(r.lossless)),
			(t.search = ""),
			{ src: f(t), operations: r }
		);
	},
	es = m(ts, Yr),
	{ operationsGenerator: rs, operationsParser: ss } = $({
		defaults: { fit: "cover" },
		keyMap: { format: "fm", width: "w", height: "h", quality: "q" },
	}),
	ns = (e, t, r = {}) => {
		const s = c(`${r.baseUrl || ""}/.netlify/images`);
		return ((s.search = rs(t)), s.searchParams.set("url", e.toString()), f(s));
	},
	as = (e) => {
		if (C(e) !== "netlify") return null;
		const t = c(e),
			r = ss(t);
		delete r.url;
		const s = t.searchParams.get("url") || "";
		return (
			(t.search = ""),
			{
				src: s,
				operations: r,
				options: { baseUrl: t.hostname === "n" ? void 0 : t.origin },
			}
		);
	},
	os = m(as, ns),
	{ operationsGenerator: is, operationsParser: cs } = $({
		keyMap: { width: "w", quality: "q", height: !1, format: !1 },
		defaults: { q: 75 },
	}),
	xt = (e, t, r = {}) => {
		const s = c(`${r.baseUrl || ""}/${r.prefix || "_vercel"}/image`);
		return (
			(s.search = is(t)), s.searchParams.append("url", e.toString()), f(s)
		);
	},
	Rt = (e, t = {}) => {
		if (!["vercel", "nextjs"].includes(C(e) || "")) return null;
		const r = c(e),
			s = r.searchParams.get("url") || "";
		r.searchParams.delete("url");
		const n = cs(r);
		return (
			(r.search = ""),
			{ src: s, operations: n, options: { baseUrl: t.baseUrl ?? r.origin } }
		);
	},
	hs = m(Rt, xt),
	us = (e, t, r = {}) => xt(e, t, { ...r, prefix: "_next" }),
	ls = (e, t) => Rt(e, t),
	fs = m(ls, us),
	{ operationsGenerator: ds, operationsParser: ps } = $({
		keyMap: { width: "wid", height: "hei", quality: "qlt", format: "fmt" },
		defaults: { fit: "crop,0" },
	}),
	Ut = "https://s7d1.scene7.com/is/image/",
	ms = (e, t) => {
		const r = new URL(e, Ut);
		return ((r.search = ds(t)), f(r));
	},
	gs = (e) => {
		if (W(e) !== "scene7") return null;
		const t = new URL(e, Ut),
			r = ps(t);
		return ((t.search = ""), { src: t.toString(), operations: r });
	},
	$s = m(gs, ms),
	Z =
		/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,
	{ operationsGenerator: ys, operationsParser: bs } = $({
		keyMap: { format: !1 },
	}),
	vs = (e, t) => {
		const r = c(e),
			s = r.pathname.replace(Z, "$1$6");
		return ((r.pathname = s), (r.search = ys(t)), f(r));
	},
	ws = (e) => {
		const t = c(e),
			r = Z.exec(t.pathname),
			s = bs(t);
		if (r) {
			const [, , , a, o, i] = r;
			(a &&
				o &&
				!s.width &&
				!s.height &&
				((s.width = parseInt(a, 10)), (s.height = parseInt(o, 10))),
				i && (s.crop ??= i));
		}
		const n = t.pathname.replace(Z, "$1$6");
		t.pathname = n;
		for (const a of ["width", "height", "crop", "pad_color", "format"])
			t.searchParams.delete(a);
		return { src: t.toString(), operations: s };
	},
	Ps = m(ws, vs),
	Ss =
		/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/,
	xs =
		/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/,
	Rs = /:(?![^(]*\))/,
	Us = (e) =>
		e
			? Object.fromEntries(
					e.split(Rs).map((t) => {
						if (!t) return [];
						const [r, s] = t.split("(");
						return [r, s.replace(")", "")];
					}),
				)
			: {},
	Os = (e) => {
		if (!e) return;
		const t = Object.entries(e).map(([r, s]) => `${r}(${s ?? ""})`);
		if (t.length !== 0) return `filters:${t.join(":")}`;
	},
	Es = (e) => {
		const t = c(e),
			s = (t.hostname === "img2.storyblok.com" ? xs : Ss).exec(t.pathname);
		if (!s || !s.groups) return null;
		const {
				id: n,
				crop: a,
				width: o,
				height: i,
				filters: u,
				flipx: l,
				flipy: h,
			} = s.groups,
			{ format: p, ...d } = Us(u ?? "");
		t.hostname === "img2.storyblok.com" && (t.hostname = "a.storyblok.com");
		const g = Object.fromEntries(
			[
				["width", Number(o) || void 0],
				["height", Number(i) || void 0],
				["format", p],
				["crop", a],
				["filters", d],
				["flipx", l],
				["flipy", h],
			].filter(([b, y]) => y !== void 0),
		);
		return { src: `${t.origin}${n}`, operations: g };
	},
	_s = (e, t) => {
		const r = c(e),
			{
				width: s = 0,
				height: n = 0,
				format: a,
				crop: o,
				filters: i = {},
				flipx: u = "",
				flipy: l = "",
			} = t,
			h = `${u}${s}x${l}${n}`;
		a && (i.format = a);
		const p = [r.pathname, "m", o, h, Os(i)].filter(Boolean);
		return ((r.pathname = p.join("/")), f(r));
	},
	Is = m(Es, _s),
	z = "/storage/v1/object/public/",
	F = "/storage/v1/render/image/public/",
	ks = (e) => e.pathname.startsWith(F),
	{ operationsGenerator: js, operationsParser: Ms } = $({}),
	Cs = (e, t) => {
		const r = c(e),
			s = r.pathname.replace(F, z);
		return (
			(r.pathname = s),
			t.format && t.format !== "origin" && delete t.format,
			(r.search = js(t)),
			f(r).replace(z, F)
		);
	},
	Ts = (e) => {
		const t = c(e),
			r = Ms(t),
			s = ks(t),
			n = t.pathname.replace(F, "").replace(z, "");
		return s
			? { src: `${t.origin}${z}${n}`, operations: r }
			: { src: f(t), operations: r };
	},
	Gs = m(Ts, Cs),
	Ot =
		/^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)(?:\/(?<filename>[^\/]+)?)?/,
	{ operationsGenerator: Ns, operationsParser: Ls } = $({
		keyMap: { width: !1, height: !1 },
		defaults: { format: "auto" },
		kvSeparator: "/",
		paramSeparator: "/-/",
	}),
	As = (e) => {
		const t = c(e),
			r = Ot.exec(t.toString());
		if (!r || !r.groups) return null;
		const { host: s, uuid: n } = r.groups,
			[, ...a] = t.pathname.split("/-/"),
			o = Ls(a.join("/-/") || "");
		if (o.resize) {
			const [i, u] = o.resize.split("x");
			(i && (o.width = parseInt(i)),
				u && (o.height = parseInt(u)),
				delete o.resize);
		}
		return { src: `https://${s}/${n}/`, operations: o, options: { host: s } };
	},
	zs = (e, t, r = {}) => {
		const s = c(e),
			n = r.host || s.hostname,
			a = Ot.exec(s.toString());
		(a?.groups && (s.pathname = `/${a.groups.uuid}/`),
			(t.resize = t.resize || `${t.width ?? ""}x${t.height ?? ""}`),
			delete t.width,
			delete t.height);
		const o = he(Ns(t));
		return (
			(s.hostname = n),
			(s.pathname =
				X(s.pathname) + (o ? `/-/${o}` : "") + (a?.groups?.filename ?? "")),
			f(s)
		);
	},
	Fs = m(As, zs),
	{ operationsGenerator: Ws, operationsParser: qs } = $({
		keyMap: { width: "w", height: "h" },
		defaults: { crop: "1" },
	}),
	Qs = (e, t) => {
		const r = c(e),
			{ crop: s } = t;
		return (
			typeof s < "u" && s !== "0" && (t.crop = s ? "1" : "0"),
			(r.search = Ws(t)),
			f(r)
		);
	},
	Ds = (e) => {
		const t = c(e),
			r = qs(t);
		return (
			r.crop !== void 0 && (r.crop = r.crop === "1"),
			(t.search = ""),
			{ src: f(t), operations: r }
		);
	},
	Bs = m(Ds, Qs),
	{ operationsGenerator: Hs, operationsParser: Zs } = $({
		keyMap: { width: "w", height: "h", format: "output", quality: "q" },
		defaults: { fit: "cover" },
	}),
	Vs = (e) => {
		const t = c(e),
			r = t.searchParams.get("url");
		if (!r) return null;
		let s = r;
		(!s.startsWith("http://") &&
			!s.startsWith("https://") &&
			(s = "https://" + s),
			t.searchParams.delete("url"));
		const n = Zs(t);
		return { src: s, operations: n };
	},
	Js = (e, t) => {
		const r = new URL("https://wsrv.nl/"),
			n = (typeof e == "string" ? e : e.toString()).replace(/^https?:\/\//, "");
		r.searchParams.set("url", n);
		const a = Hs(t),
			o = new URLSearchParams(a);
		for (const [i, u] of o) i !== "url" && r.searchParams.set(i, u);
		return f(r);
	},
	Ks = m(Vs, Js),
	Xs = {
		appwrite: Oe,
		astro: ke,
		"builder.io": Te,
		bunny: ze,
		cloudflare: De,
		cloudflare_images: Xe,
		cloudimage: sr,
		cloudinary: ur,
		contentful: mr,
		contentstack: br,
		directus: Sr,
		hygraph: Ur,
		imageengine: kr,
		imagekit: Gr,
		imgix: Fr,
		ipx: Dr,
		keycdn: Jr,
		"kontent.ai": es,
		netlify: os,
		nextjs: fs,
		scene7: $s,
		shopify: Ps,
		storyblok: Is,
		supabase: Gs,
		uploadcare: Fs,
		vercel: hs,
		wordpress: Bs,
		wsrv: Ks,
	};
function Et(e) {
	if (e) return Xs[e];
}
function Ys({ cdn: e, fallback: t, operations: r = {}, options: s, ...n }) {
	if (((e ??= W(n.src) || t), !e)) return n;
	const a = Et(e);
	return a
		? re({ ...n, operations: r?.[e], options: s?.[e], transformer: a })
		: n;
}
function tn({ cdn: e, fallback: t, operations: r, options: s, ...n }) {
	if (((e ??= W(n.src) || t), !e)) return n;
	const a = Et(e);
	return a
		? ne({ ...n, operations: r?.[e], options: s?.[e], transformer: a })
		: n;
}
var cn = P.forwardRef(function (t, r) {
	const s = K(Ys(t));
	return V.jsx("img", { ...s, ref: r });
});
P.forwardRef(function (t, r) {
	const s = K(tn(t));
	return V.jsx("source", { ...s, ref: r });
});
function hn({ className: e, ...t }) {
	return V.jsx("div", {
		"data-slot": "skeleton",
		className: Tt("bg-muted animate-pulse rounded-md", e),
		...t,
	});
}
export { cn as I, nn as Q, hn as S, an as d, on as u };
