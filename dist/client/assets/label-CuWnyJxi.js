import { B as cn } from "./button-C4bOsGCm.js";
import {
	S as er,
	F as tr,
	G as kt,
	H as nr,
	I as zt,
	f as rr,
	r as l,
	J as or,
	K as sr,
	p as ir,
	j as k,
	a as Gt,
	M as ar,
	N as cr,
} from "./main-2PW7nLE1.js";
import {
	T as Pt,
	d as lr,
	a as et,
	v as qt,
	c as J,
	g as Xt,
	p as Zt,
	r as le,
	f as ur,
	o as Jt,
	b as ht,
	e as dr,
	q as Qt,
	w as fr,
	h as en,
	A as pr,
	x as tn,
	u as tt,
	y as gr,
	z as hr,
	B as mr,
	C as br,
	j as nn,
	D as vr,
	k as yr,
} from "./useField-F5sWYpCd.js";
import {
	x as ye,
	b as Y,
	B as Er,
	k as ue,
	i as se,
	t as rn,
	E as Te,
	y as B,
	C as Sr,
	c as ge,
	a as Mt,
	e as nt,
	j as on,
	p as ct,
	o as Rr,
	g as lt,
	l as xr,
	f as rt,
	D as sn,
	N as Ue,
	v as Tt,
	u as an,
} from "./useRenderElement-Vjd4_1MR.js";
import { c as pe } from "./utils-BQHNewu7.js";
var Tr = class extends er {
	#t;
	#r = void 0;
	#e;
	#n;
	constructor(e, t) {
		(super(), (this.#t = e), this.setOptions(t), this.bindMethods(), this.#o());
	}
	bindMethods() {
		((this.mutate = this.mutate.bind(this)),
			(this.reset = this.reset.bind(this)));
	}
	setOptions(e) {
		const t = this.options;
		((this.options = this.#t.defaultMutationOptions(e)),
			tr(this.options, t) ||
				this.#t
					.getMutationCache()
					.notify({
						type: "observerOptionsUpdated",
						mutation: this.#e,
						observer: this,
					}),
			t?.mutationKey &&
			this.options.mutationKey &&
			kt(t.mutationKey) !== kt(this.options.mutationKey)
				? this.reset()
				: this.#e?.state.status === "pending" &&
					this.#e.setOptions(this.options));
	}
	onUnsubscribe() {
		this.hasListeners() || this.#e?.removeObserver(this);
	}
	onMutationUpdate(e) {
		(this.#o(), this.#s(e));
	}
	getCurrentResult() {
		return this.#r;
	}
	reset() {
		(this.#e?.removeObserver(this), (this.#e = void 0), this.#o(), this.#s());
	}
	mutate(e, t) {
		return (
			(this.#n = t),
			this.#e?.removeObserver(this),
			(this.#e = this.#t.getMutationCache().build(this.#t, this.options)),
			this.#e.addObserver(this),
			this.#e.execute(e)
		);
	}
	#o() {
		const e = this.#e?.state ?? nr();
		this.#r = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset,
		};
	}
	#s(e) {
		zt.batch(() => {
			if (this.#n && this.hasListeners()) {
				const t = this.#r.variables,
					n = this.#r.context,
					r = {
						client: this.#t,
						meta: this.options.meta,
						mutationKey: this.options.mutationKey,
					};
				if (e?.type === "success") {
					try {
						this.#n.onSuccess?.(e.data, t, n, r);
					} catch (o) {
						Promise.reject(o);
					}
					try {
						this.#n.onSettled?.(e.data, null, t, n, r);
					} catch (o) {
						Promise.reject(o);
					}
				} else if (e?.type === "error") {
					try {
						this.#n.onError?.(e.error, t, n, r);
					} catch (o) {
						Promise.reject(o);
					}
					try {
						this.#n.onSettled?.(void 0, e.error, t, n, r);
					} catch (o) {
						Promise.reject(o);
					}
				}
			}
			this.listeners.forEach((t) => {
				t(this.#r);
			});
		});
	}
};
function zs(e, t) {
	const n = rr(),
		[r] = l.useState(() => new Tr(n, e));
	l.useEffect(() => {
		r.setOptions(e);
	}, [r, e]);
	const o = l.useSyncExternalStore(
			l.useCallback((a) => r.subscribe(zt.batchCalls(a)), [r]),
			() => r.getCurrentResult(),
			() => r.getCurrentResult(),
		),
		s = l.useCallback(
			(a, i) => {
				r.mutate(a, i).catch(or);
			},
			[r],
		);
	if (o.error && sr(r.options.throwOnError, [o.error])) throw o.error;
	return { ...o, mutate: s, mutateAsync: o.mutate };
}
const Cr = new Map([
		[
			"bold",
			l.createElement(
				l.Fragment,
				null,
				l.createElement("path", {
					d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
				}),
			),
		],
		[
			"duotone",
			l.createElement(
				l.Fragment,
				null,
				l.createElement("path", {
					d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
					opacity: "0.2",
				}),
				l.createElement("path", {
					d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
				}),
			),
		],
		[
			"fill",
			l.createElement(
				l.Fragment,
				null,
				l.createElement("path", {
					d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
				}),
			),
		],
		[
			"light",
			l.createElement(
				l.Fragment,
				null,
				l.createElement("path", {
					d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
				}),
			),
		],
		[
			"regular",
			l.createElement(
				l.Fragment,
				null,
				l.createElement("path", {
					d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
				}),
			),
		],
		[
			"thin",
			l.createElement(
				l.Fragment,
				null,
				l.createElement("path", {
					d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
				}),
			),
		],
	]),
	ln = l.forwardRef((e, t) =>
		l.createElement(ir, { ref: t, ...e, weights: Cr }),
	);
ln.displayName = "XIcon";
const Gs = 500,
	qs = 500,
	Xs = { style: { transition: "none" } },
	un = "data-base-ui-click-trigger",
	Zs = { fallbackAxisSide: "none" },
	Js = { fallbackAxisSide: "end" },
	wr = { clipPath: "inset(50%)", position: "fixed", top: 0, left: 0 };
let ve = (function (e) {
		return (
			(e.open = "data-open"),
			(e.closed = "data-closed"),
			(e[(e.startingStyle = Pt.startingStyle)] = "startingStyle"),
			(e[(e.endingStyle = Pt.endingStyle)] = "endingStyle"),
			(e.anchorHidden = "data-anchor-hidden"),
			(e.side = "data-side"),
			(e.align = "data-align"),
			e
		);
	})({}),
	mt = (function (e) {
		return ((e.popupOpen = "data-popup-open"), (e.pressed = "data-pressed"), e);
	})({});
const Or = { [mt.popupOpen]: "" },
	Ir = { [mt.popupOpen]: "", [mt.pressed]: "" },
	kr = { [ve.open]: "" },
	Pr = { [ve.closed]: "" },
	Mr = { [ve.anchorHidden]: "" },
	Nr = {
		open(e) {
			return e ? Or : null;
		},
	},
	Qs = {
		open(e) {
			return e ? Ir : null;
		},
	},
	dn = {
		open(e) {
			return e ? kr : Pr;
		},
		anchorHidden(e) {
			return e ? Mr : null;
		},
	},
	Fe = 0;
class Oe {
	static create() {
		return new Oe();
	}
	currentId = Fe;
	start(t, n) {
		(this.clear(),
			(this.currentId = setTimeout(() => {
				((this.currentId = Fe), n());
			}, t)));
	}
	isStarted() {
		return this.currentId !== Fe;
	}
	clear = () => {
		this.currentId !== Fe &&
			(clearTimeout(this.currentId), (this.currentId = Fe));
	};
	disposeEffect = () => this.clear;
}
function De() {
	const e = ye(Oe.create).current;
	return (lr(e.disposeEffect), e);
}
function ut(e) {
	const t = ye(Ar, e).current;
	return ((t.next = e), Y(t.effect), t);
}
function Ar(e) {
	const t = {
		current: e,
		next: e,
		effect: () => {
			t.current = t.next;
		},
	};
	return t;
}
function $(e) {
	return e?.ownerDocument || document;
}
const ke = typeof navigator < "u",
	dt = Lr(),
	fn = jr(),
	pn = Dr(),
	gn =
		typeof CSS > "u" || !CSS.supports
			? !1
			: CSS.supports("-webkit-backdrop-filter:none"),
	hn =
		dt.platform === "MacIntel" && dt.maxTouchPoints > 1
			? !0
			: /iP(hone|ad|od)|iOS/.test(dt.platform),
	Fr = ke && /apple/i.test(navigator.vendor),
	bt = (ke && /android/i.test(fn)) || /android/i.test(pn),
	ei = ke && fn.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints,
	mn = pn.includes("jsdom/");
function Lr() {
	if (!ke) return { platform: "", maxTouchPoints: -1 };
	const e = navigator.userAgentData;
	return e?.platform
		? { platform: e.platform, maxTouchPoints: navigator.maxTouchPoints }
		: {
				platform: navigator.platform ?? "",
				maxTouchPoints: navigator.maxTouchPoints ?? -1,
			};
}
function Dr() {
	if (!ke) return "";
	const e = navigator.userAgentData;
	return e && Array.isArray(e.brands)
		? e.brands.map(({ brand: t, version: n }) => `${t}/${n}`).join(" ")
		: navigator.userAgent;
}
function jr() {
	if (!ke) return "";
	const e = navigator.userAgentData;
	return e?.platform ? e.platform : (navigator.platform ?? "");
}
const vt = "data-base-ui-focusable",
	bn = "active",
	vn = "selected",
	Br =
		"input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
	ti = "ArrowLeft",
	ni = "ArrowRight",
	ri = "ArrowUp",
	oi = "ArrowDown";
function de(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement != null; ) t = t.shadowRoot.activeElement;
	return t;
}
function H(e, t) {
	if (!e || !t) return !1;
	const n = t.getRootNode?.();
	if (e.contains(t)) return !0;
	if (n && Er(n)) {
		let r = t;
		for (; r; ) {
			if (e === r) return !0;
			r = r.parentNode || r.host;
		}
	}
	return !1;
}
function si(e, t) {
	if (!se(e)) return !1;
	const n = e;
	if (t.hasElement(n)) return !n.hasAttribute("data-trigger-disabled");
	for (const [, r] of t.entries())
		if (H(r, n)) return !r.hasAttribute("data-trigger-disabled");
	return !1;
}
function re(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function te(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	const n = e;
	return n.target != null && t.contains(n.target);
}
function Vr(e) {
	return e.matches("html,body");
}
function Ct(e) {
	return ue(e) && e.matches(Br);
}
function Nt(e) {
	return e ? e.getAttribute("role") === "combobox" && Ct(e) : !1;
}
function ii(e) {
	if (!e || mn) return !0;
	try {
		return e.matches(":focus-visible");
	} catch {
		return !0;
	}
}
function yt(e) {
	return e ? (e.hasAttribute(vt) ? e : e.querySelector(`[${vt}]`) || e) : null;
}
function Ce(e, t, n = !0) {
	return e
		.filter((o) => o.parentId === t && (!n || o.context?.open))
		.flatMap((o) => [o, ...Ce(e, o.id, n)]);
}
function At(e, t) {
	let n = [],
		r = e.find((o) => o.id === t)?.parentId;
	for (; r; ) {
		const o = e.find((s) => s.id === r);
		((r = o?.parentId), o && (n = n.concat(o)));
	}
	return n;
}
function Wr(e) {
	(e.preventDefault(), e.stopPropagation());
}
function Hr(e) {
	return "nativeEvent" in e;
}
function Kr(e) {
	return e.pointerType === "" && e.isTrusted
		? !0
		: bt && e.pointerType
			? e.type === "click" && e.buttons === 1
			: e.detail === 0 && !e.pointerType;
}
function _r(e) {
	return mn
		? !1
		: (!bt && e.width === 0 && e.height === 0) ||
				(bt &&
					e.width === 1 &&
					e.height === 1 &&
					e.pressure === 0 &&
					e.detail === 0 &&
					e.pointerType === "mouse") ||
				(e.width < 1 &&
					e.height < 1 &&
					e.pressure === 0 &&
					e.detail === 0 &&
					e.pointerType === "touch");
}
function Ft(e, t) {
	const n = ["mouse", "pen"];
	return (t || n.push("", void 0), n.includes(e));
}
function yn(e) {
	const t = e.type;
	return t === "click" || t === "mousedown" || t === "keydown" || t === "keyup";
}
var $r = [
		"input:not([inert]):not([inert] *)",
		"select:not([inert]):not([inert] *)",
		"textarea:not([inert]):not([inert] *)",
		"a[href]:not([inert]):not([inert] *)",
		"button:not([inert]):not([inert] *)",
		"[tabindex]:not(slot):not([inert]):not([inert] *)",
		"audio[controls]:not([inert]):not([inert] *)",
		"video[controls]:not([inert]):not([inert] *)",
		'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',
		"details>summary:first-of-type:not([inert]):not([inert] *)",
		"details:not([inert]):not([inert] *)",
	],
	ze = $r.join(","),
	En = typeof Element > "u",
	Ie = En
		? function () {}
		: Element.prototype.matches ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector,
	Ge =
		!En && Element.prototype.getRootNode
			? function (e) {
					var t;
					return e == null || (t = e.getRootNode) === null || t === void 0
						? void 0
						: t.call(e);
				}
			: function (e) {
					return e?.ownerDocument;
				},
	qe = function (t, n) {
		var r;
		n === void 0 && (n = !0);
		var o =
				t == null || (r = t.getAttribute) === null || r === void 0
					? void 0
					: r.call(t, "inert"),
			s = o === "" || o === "true",
			a =
				s ||
				(n &&
					t &&
					(typeof t.closest == "function"
						? t.closest("[inert]")
						: qe(t.parentNode)));
		return a;
	},
	Yr = function (t) {
		var n,
			r =
				t == null || (n = t.getAttribute) === null || n === void 0
					? void 0
					: n.call(t, "contenteditable");
		return r === "" || r === "true";
	},
	Sn = function (t, n, r) {
		if (qe(t)) return [];
		var o = Array.prototype.slice.apply(t.querySelectorAll(ze));
		return (n && Ie.call(t, ze) && o.unshift(t), (o = o.filter(r)), o);
	},
	Xe = function (t, n, r) {
		for (var o = [], s = Array.from(t); s.length; ) {
			var a = s.shift();
			if (!qe(a, !1))
				if (a.tagName === "SLOT") {
					var i = a.assignedElements(),
						u = i.length ? i : a.children,
						c = Xe(u, !0, r);
					r.flatten
						? o.push.apply(o, c)
						: o.push({ scopeParent: a, candidates: c });
				} else {
					var p = Ie.call(a, ze);
					p && r.filter(a) && (n || !t.includes(a)) && o.push(a);
					var d =
							a.shadowRoot ||
							(typeof r.getShadowRoot == "function" && r.getShadowRoot(a)),
						E = !qe(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
					if (d && E) {
						var g = Xe(d === !0 ? a.children : d.children, !0, r);
						r.flatten
							? o.push.apply(o, g)
							: o.push({ scopeParent: a, candidates: g });
					} else s.unshift.apply(s, a.children);
				}
		}
		return o;
	},
	Rn = function (t) {
		return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
	},
	xn = function (t) {
		if (!t) throw new Error("No node provided");
		return t.tabIndex < 0 &&
			(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Yr(t)) &&
			!Rn(t)
			? 0
			: t.tabIndex;
	},
	Ur = function (t, n) {
		var r = xn(t);
		return r < 0 && n && !Rn(t) ? 0 : r;
	},
	zr = function (t, n) {
		return t.tabIndex === n.tabIndex
			? t.documentOrder - n.documentOrder
			: t.tabIndex - n.tabIndex;
	},
	Tn = function (t) {
		return t.tagName === "INPUT";
	},
	Gr = function (t) {
		return Tn(t) && t.type === "hidden";
	},
	qr = function (t) {
		var n =
			t.tagName === "DETAILS" &&
			Array.prototype.slice.apply(t.children).some(function (r) {
				return r.tagName === "SUMMARY";
			});
		return n;
	},
	Xr = function (t, n) {
		for (var r = 0; r < t.length; r++)
			if (t[r].checked && t[r].form === n) return t[r];
	},
	Zr = function (t) {
		if (!t.name) return !0;
		var n = t.form || Ge(t),
			r = function (i) {
				return n.querySelectorAll('input[type="radio"][name="' + i + '"]');
			},
			o;
		if (
			typeof window < "u" &&
			typeof window.CSS < "u" &&
			typeof window.CSS.escape == "function"
		)
			o = r(window.CSS.escape(t.name));
		else
			try {
				o = r(t.name);
			} catch (a) {
				return (
					console.error(
						"Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
						a.message,
					),
					!1
				);
			}
		var s = Xr(o, t.form);
		return !s || s === t;
	},
	Jr = function (t) {
		return Tn(t) && t.type === "radio";
	},
	Qr = function (t) {
		return Jr(t) && !Zr(t);
	},
	eo = function (t) {
		var n,
			r = t && Ge(t),
			o = (n = r) === null || n === void 0 ? void 0 : n.host,
			s = !1;
		if (r && r !== t) {
			var a, i, u;
			for (
				s = !!(
					((a = o) !== null &&
						a !== void 0 &&
						(i = a.ownerDocument) !== null &&
						i !== void 0 &&
						i.contains(o)) ||
					(t != null &&
						(u = t.ownerDocument) !== null &&
						u !== void 0 &&
						u.contains(t))
				);
				!s && o;
			) {
				var c, p, d;
				((r = Ge(o)),
					(o = (c = r) === null || c === void 0 ? void 0 : c.host),
					(s = !!(
						(p = o) !== null &&
						p !== void 0 &&
						(d = p.ownerDocument) !== null &&
						d !== void 0 &&
						d.contains(o)
					)));
			}
		}
		return s;
	},
	Lt = function (t) {
		var n = t.getBoundingClientRect(),
			r = n.width,
			o = n.height;
		return r === 0 && o === 0;
	},
	to = function (t, n) {
		var r = n.displayCheck,
			o = n.getShadowRoot;
		if (r === "full-native" && "checkVisibility" in t) {
			var s = t.checkVisibility({
				checkOpacity: !1,
				opacityProperty: !1,
				contentVisibilityAuto: !0,
				visibilityProperty: !0,
				checkVisibilityCSS: !0,
			});
			return !s;
		}
		if (getComputedStyle(t).visibility === "hidden") return !0;
		var a = Ie.call(t, "details>summary:first-of-type"),
			i = a ? t.parentElement : t;
		if (Ie.call(i, "details:not([open]) *")) return !0;
		if (!r || r === "full" || r === "full-native" || r === "legacy-full") {
			if (typeof o == "function") {
				for (var u = t; t; ) {
					var c = t.parentElement,
						p = Ge(t);
					if (c && !c.shadowRoot && o(c) === !0) return Lt(t);
					t.assignedSlot
						? (t = t.assignedSlot)
						: !c && p !== t.ownerDocument
							? (t = p.host)
							: (t = c);
				}
				t = u;
			}
			if (eo(t)) return !t.getClientRects().length;
			if (r !== "legacy-full") return !0;
		} else if (r === "non-zero-area") return Lt(t);
		return !1;
	},
	no = function (t) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
			for (var n = t.parentElement; n; ) {
				if (n.tagName === "FIELDSET" && n.disabled) {
					for (var r = 0; r < n.children.length; r++) {
						var o = n.children.item(r);
						if (o.tagName === "LEGEND")
							return Ie.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
					}
					return !0;
				}
				n = n.parentElement;
			}
		return !1;
	},
	Et = function (t, n) {
		return !(n.disabled || Gr(n) || to(n, t) || qr(n) || no(n));
	},
	St = function (t, n) {
		return !(Qr(n) || xn(n) < 0 || !Et(t, n));
	},
	ro = function (t) {
		var n = parseInt(t.getAttribute("tabindex"), 10);
		return !!(isNaN(n) || n >= 0);
	},
	Cn = function (t) {
		var n = [],
			r = [];
		return (
			t.forEach(function (o, s) {
				var a = !!o.scopeParent,
					i = a ? o.scopeParent : o,
					u = Ur(i, a),
					c = a ? Cn(o.candidates) : i;
				u === 0
					? a
						? n.push.apply(n, c)
						: n.push(i)
					: r.push({
							documentOrder: s,
							tabIndex: u,
							item: o,
							isScope: a,
							content: c,
						});
			}),
			r
				.sort(zr)
				.reduce(function (o, s) {
					return (
						s.isScope ? o.push.apply(o, s.content) : o.push(s.content), o
					);
				}, [])
				.concat(n)
		);
	},
	je = function (t, n) {
		n = n || {};
		var r;
		return (
			n.getShadowRoot
				? (r = Xe([t], n.includeContainer, {
						filter: St.bind(null, n),
						flatten: !1,
						getShadowRoot: n.getShadowRoot,
						shadowRootFilter: ro,
					}))
				: (r = Sn(t, n.includeContainer, St.bind(null, n))),
			Cn(r)
		);
	},
	oo = function (t, n) {
		n = n || {};
		var r;
		return (
			n.getShadowRoot
				? (r = Xe([t], n.includeContainer, {
						filter: Et.bind(null, n),
						flatten: !0,
						getShadowRoot: n.getShadowRoot,
					}))
				: (r = Sn(t, n.includeContainer, Et.bind(null, n))),
			r
		);
	},
	wn = function (t, n) {
		if (((n = n || {}), !t)) throw new Error("No node provided");
		return Ie.call(t, ze) === !1 ? !1 : St(n, t);
	};
const Pe = () => ({
	getShadowRoot: !0,
	displayCheck:
		typeof ResizeObserver == "function" &&
		ResizeObserver.toString().includes("[native code]")
			? "full"
			: "none",
});
function On(e, t) {
	const n = je(e, Pe()),
		r = n.length;
	if (r === 0) return;
	const o = de($(e)),
		s = n.indexOf(o),
		a = s === -1 ? (t === 1 ? 0 : r - 1) : s + t;
	return n[a];
}
function In(e) {
	return On($(e).body, 1) || e;
}
function kn(e) {
	return On($(e).body, -1) || e;
}
function Pn(e, t) {
	if (!e) return null;
	const n = je($(e).body, Pe()),
		r = n.length;
	if (r === 0) return null;
	const o = n.indexOf(e);
	if (o === -1) return null;
	const s = (o + t + r) % r;
	return n[s];
}
function ai(e) {
	return Pn(e, 1);
}
function ci(e) {
	return Pn(e, -1);
}
function Le(e, t) {
	const n = t || e.currentTarget,
		r = e.relatedTarget;
	return !r || !H(n, r);
}
function so(e) {
	je(e, Pe()).forEach((n) => {
		((n.dataset.tabindex = n.getAttribute("tabindex") || ""),
			n.setAttribute("tabindex", "-1"));
	});
}
function Dt(e) {
	e.querySelectorAll("[data-tabindex]").forEach((n) => {
		const r = n.dataset.tabindex;
		(delete n.dataset.tabindex,
			r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex"));
	});
}
function Mn() {
	const e = new Map();
	return {
		emit(t, n) {
			e.get(t)?.forEach((r) => r(n));
		},
		on(t, n) {
			(e.has(t) || e.set(t, new Set()), e.get(t).add(n));
		},
		off(t, n) {
			e.get(t)?.delete(n);
		},
	};
}
class io {
	nodesRef = { current: [] };
	events = Mn();
	addNode(t) {
		this.nodesRef.current.push(t);
	}
	removeNode(t) {
		const n = this.nodesRef.current.findIndex((r) => r === t);
		n !== -1 && this.nodesRef.current.splice(n, 1);
	}
}
const Nn = l.createContext(null),
	An = l.createContext(null),
	ot = () => l.useContext(Nn)?.id || null,
	wt = (e) => {
		const t = l.useContext(An);
		return e ?? t;
	};
function li(e) {
	const t = et(),
		n = wt(e),
		r = ot();
	return (
		Y(() => {
			if (!t) return;
			const o = { id: t, parentId: r };
			return (
				n?.addNode(o),
				() => {
					n?.removeNode(o);
				}
			);
		}, [n, t, r]),
		t
	);
}
function ui(e) {
	const { children: t, id: n } = e,
		r = ot();
	return k.jsx(Nn.Provider, {
		value: l.useMemo(() => ({ id: n, parentId: r }), [n, r]),
		children: t,
	});
}
function di(e) {
	const { children: t, externalTree: n } = e,
		r = ye(() => n ?? new io()).current;
	return k.jsx(An.Provider, { value: r, children: t });
}
function Ze(e) {
	return `data-base-ui-${e}`;
}
const Je = l.forwardRef(function (t, n) {
	const [r, o] = l.useState();
	Y(() => {
		Fr && o("button");
	}, []);
	const s = { tabIndex: 0, role: r };
	return k.jsx("span", {
		...t,
		ref: n,
		style: qt,
		"aria-hidden": r ? void 0 : !0,
		...s,
		"data-base-ui-focus-guard": "",
	});
});
let jt = 0;
function ft(e, t = {}) {
	const { preventScroll: n = !1, cancelPrevious: r = !0, sync: o = !1 } = t;
	r && cancelAnimationFrame(jt);
	const s = () => e?.focus({ preventScroll: n });
	o ? s() : (jt = requestAnimationFrame(s));
}
const we = {
	inert: new WeakMap(),
	"aria-hidden": new WeakMap(),
	none: new WeakMap(),
};
function Bt(e) {
	return e === "inert"
		? we.inert
		: e === "aria-hidden"
			? we["aria-hidden"]
			: we.none;
}
let He = new WeakSet(),
	Ke = {},
	pt = 0;
const Fn = (e) => e && (e.host || Fn(e.parentNode)),
	ao = (e, t) =>
		t
			.map((n) => {
				if (e.contains(n)) return n;
				const r = Fn(n);
				return e.contains(r) ? r : null;
			})
			.filter((n) => n != null);
function co(e, t, n, r) {
	const o = "data-base-ui-inert",
		s = r ? "inert" : n ? "aria-hidden" : null,
		a = ao(t, e),
		i = new Set(),
		u = new Set(a),
		c = [];
	Ke[o] || (Ke[o] = new WeakMap());
	const p = Ke[o];
	(a.forEach(d), E(t), i.clear());
	function d(g) {
		!g || i.has(g) || (i.add(g), g.parentNode && d(g.parentNode));
	}
	function E(g) {
		!g ||
			u.has(g) ||
			[].forEach.call(g.children, (h) => {
				if (rn(h) !== "script")
					if (i.has(h)) E(h);
					else {
						const y = s ? h.getAttribute(s) : null,
							b = y !== null && y !== "false",
							S = Bt(s),
							C = (S.get(h) || 0) + 1,
							I = (p.get(h) || 0) + 1;
						(S.set(h, C),
							p.set(h, I),
							c.push(h),
							C === 1 && b && He.add(h),
							I === 1 && h.setAttribute(o, ""),
							!b && s && h.setAttribute(s, s === "inert" ? "" : "true"));
					}
			});
	}
	return (
		(pt += 1),
		() => {
			(c.forEach((g) => {
				const h = Bt(s),
					b = (h.get(g) || 0) - 1,
					S = (p.get(g) || 0) - 1;
				(h.set(g, b),
					p.set(g, S),
					b || (!He.has(g) && s && g.removeAttribute(s), He.delete(g)),
					S || g.removeAttribute(o));
			}),
				(pt -= 1),
				pt ||
					((we.inert = new WeakMap()),
					(we["aria-hidden"] = new WeakMap()),
					(we.none = new WeakMap()),
					(He = new WeakSet()),
					(Ke = {})));
		}
	);
}
function lo(e, t = !1, n = !1) {
	const r = $(e[0]).body;
	return co(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const Ln = l.createContext(null),
	Dn = () => l.useContext(Ln),
	uo = Ze("portal");
function fo(e = {}) {
	const { ref: t, container: n, componentProps: r = Te, elementProps: o } = e,
		s = et(),
		i = Dn()?.portalNode,
		[u, c] = l.useState(null),
		[p, d] = l.useState(null),
		E = B((b) => {
			b !== null && d(b);
		}),
		g = l.useRef(null);
	Y(() => {
		if (n === null) {
			g.current && ((g.current = null), d(null), c(null));
			return;
		}
		if (s == null) return;
		const b = (n && (Sr(n) ? n : n.current)) ?? i ?? document.body;
		if (b == null) {
			g.current && ((g.current = null), d(null), c(null));
			return;
		}
		g.current !== b && ((g.current = b), d(null), c(b));
	}, [n, i, s]);
	const h = ge("div", r, { ref: [t, E], props: [{ id: s, [uo]: "" }, o] });
	return {
		portalNode: p,
		portalSubtree: u && h ? Gt.createPortal(h, u) : null,
	};
}
const po = l.forwardRef(function (t, n) {
	const {
			children: r,
			container: o,
			className: s,
			render: a,
			renderGuards: i,
			...u
		} = t,
		{ portalNode: c, portalSubtree: p } = fo({
			container: o,
			ref: n,
			componentProps: t,
			elementProps: u,
		}),
		d = l.useRef(null),
		E = l.useRef(null),
		g = l.useRef(null),
		h = l.useRef(null),
		[y, b] = l.useState(null),
		S = y?.modal,
		C = y?.open,
		I = typeof i == "boolean" ? i : !!y && !y.modal && y.open && !!c;
	(l.useEffect(() => {
		if (!c || S) return;
		function P(T) {
			c && T.relatedTarget && Le(T) && (T.type === "focusin" ? Dt : so)(c);
		}
		return (
			c.addEventListener("focusin", P, !0),
			c.addEventListener("focusout", P, !0),
			() => {
				(c.removeEventListener("focusin", P, !0),
					c.removeEventListener("focusout", P, !0));
			}
		);
	}, [c, S]),
		l.useEffect(() => {
			!c || C || Dt(c);
		}, [C, c]));
	const w = l.useMemo(
		() => ({
			beforeOutsideRef: d,
			afterOutsideRef: E,
			beforeInsideRef: g,
			afterInsideRef: h,
			portalNode: c,
			setFocusManagerState: b,
		}),
		[c],
	);
	return k.jsxs(l.Fragment, {
		children: [
			p,
			k.jsxs(Ln.Provider, {
				value: w,
				children: [
					I &&
						c &&
						k.jsx(Je, {
							"data-type": "outside",
							ref: d,
							onFocus: (P) => {
								if (Le(P, c)) g.current?.focus();
								else {
									const T = y ? y.domReference : null;
									kn(T)?.focus();
								}
							},
						}),
					I && c && k.jsx("span", { "aria-owns": c.id, style: wr }),
					c && Gt.createPortal(r, c),
					I &&
						c &&
						k.jsx(Je, {
							"data-type": "outside",
							ref: E,
							onFocus: (P) => {
								if (Le(P, c)) h.current?.focus();
								else {
									const T = y ? y.domReference : null;
									(In(T)?.focus(),
										y?.closeOnFocusOut &&
											y?.onOpenChange(!1, J(Xt, P.nativeEvent)));
								}
							},
						}),
				],
			}),
		],
	});
});
function go(e, t) {
	const n = nt(e.target);
	return e instanceof n.KeyboardEvent
		? "keyboard"
		: e instanceof n.FocusEvent
			? t || "keyboard"
			: "pointerType" in e
				? e.pointerType || "keyboard"
				: "touches" in e
					? "touch"
					: e instanceof n.MouseEvent
						? t || (e.detail === 0 ? "keyboard" : "mouse")
						: "";
}
const Vt = 20;
let fe = [];
function Ot() {
	fe = fe.filter((e) => e.deref()?.isConnected);
}
function ho(e) {
	(Ot(),
		e &&
			rn(e) !== "body" &&
			(fe.push(new WeakRef(e)), fe.length > Vt && (fe = fe.slice(-Vt))));
}
function gt() {
	return (Ot(), fe[fe.length - 1]?.deref());
}
function mo(e) {
	if (!e) return null;
	const t = Pe();
	return wn(e, t) ? e : je(e, t)[0] || e;
}
function bo(e) {
	return !e || !e.isConnected
		? !1
		: typeof e.checkVisibility == "function"
			? e.checkVisibility()
			: on(e).display !== "none";
}
function Wt(e, t) {
	if (
		!t.current.includes("floating") &&
		!e.getAttribute("role")?.includes("dialog")
	)
		return;
	const n = Pe(),
		o = oo(e, n).filter((a) => {
			const i = a.getAttribute("data-tabindex") || "";
			return (
				wn(a, n) || (a.hasAttribute("data-tabindex") && !i.startsWith("-"))
			);
		}),
		s = e.getAttribute("tabindex");
	t.current.includes("floating") || o.length === 0
		? s !== "0" && e.setAttribute("tabindex", "0")
		: (s !== "-1" ||
				(e.hasAttribute("data-tabindex") &&
					e.getAttribute("data-tabindex") !== "-1")) &&
			(e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
function vo(e) {
	const {
			context: t,
			children: n,
			disabled: r = !1,
			initialFocus: o = !0,
			returnFocus: s = !0,
			restoreFocus: a = !1,
			modal: i = !0,
			closeOnFocusOut: u = !0,
			openInteractionType: c = "",
			nextFocusableElement: p,
			previousFocusableElement: d,
			beforeContentFocusGuardRef: E,
			externalTree: g,
		} = e,
		h = "rootStore" in t ? t.rootStore : t,
		y = h.useState("open"),
		b = h.useState("domReferenceElement"),
		S = h.useState("floatingElement"),
		{ events: C, dataRef: I } = h.context,
		w = B(() => I.current.floatingContext?.nodeId),
		P = o === !1,
		T = Nt(b) && P,
		V = l.useRef(["content"]),
		M = ut(o),
		z = ut(s),
		U = ut(c),
		F = wt(g),
		O = Dn(),
		Ee = l.useRef(null),
		ie = l.useRef(null),
		_ = l.useRef(!1),
		Z = l.useRef(!1),
		G = l.useRef(!1),
		q = l.useRef(-1),
		ae = l.useRef(""),
		Se = l.useRef(""),
		Me = l.useRef(null),
		me = l.useRef(null),
		oe = Mt(Me, E, O?.beforeInsideRef),
		st = Mt(me, O?.afterInsideRef),
		Re = De(),
		Be = De(),
		xe = Zt(),
		be = O != null,
		N = yt(S),
		ne = B((m = N) => (m ? je(m, Pe()) : [])),
		ce = B((m) => {
			const v = ne(m);
			return V.current
				.map(() => v)
				.filter(Boolean)
				.flat();
		});
	(l.useEffect(() => {
		if (r || !i) return;
		function m(D) {
			D.key === "Tab" && H(N, de($(N))) && ne().length === 0 && !T && Wr(D);
		}
		const v = $(N);
		return (
			v.addEventListener("keydown", m),
			() => {
				v.removeEventListener("keydown", m);
			}
		);
	}, [r, b, N, i, V, T, ne, ce]),
		l.useEffect(() => {
			if (r || !y) return;
			const m = $(N);
			function v() {
				G.current = !1;
			}
			function D(A) {
				const R = re(A),
					W = H(S, R) || H(b, R) || H(O?.portalNode, R);
				((G.current = !W),
					(Se.current = A.pointerType || "keyboard"),
					R?.closest(`[${un}]`) && (Z.current = !0));
			}
			function x() {
				Se.current = "keyboard";
			}
			return (
				m.addEventListener("pointerdown", D, !0),
				m.addEventListener("pointerup", v, !0),
				m.addEventListener("pointercancel", v, !0),
				m.addEventListener("keydown", x, !0),
				() => {
					(m.removeEventListener("pointerdown", D, !0),
						m.removeEventListener("pointerup", v, !0),
						m.removeEventListener("pointercancel", v, !0),
						m.removeEventListener("keydown", x, !0));
				}
			);
		}, [r, S, b, N, y, O]),
		l.useEffect(() => {
			if (r || !u) return;
			const m = $(N);
			function v() {
				((Z.current = !0),
					Be.start(0, () => {
						Z.current = !1;
					}));
			}
			function D(X) {
				const L = re(X),
					ee = ne().indexOf(L);
				ee !== -1 && (q.current = ee);
			}
			function x(X) {
				const L = X.relatedTarget,
					K = X.currentTarget,
					ee = re(X);
				queueMicrotask(() => {
					const Ne = w(),
						Ve = h.context.triggerElements,
						it =
							L?.hasAttribute(Ze("focus-guard")) &&
							[
								Me.current,
								me.current,
								O?.beforeInsideRef.current,
								O?.afterInsideRef.current,
								O?.beforeOutsideRef.current,
								O?.afterOutsideRef.current,
								le(d),
								le(p),
							].includes(L),
						at = !(
							H(b, L) ||
							H(S, L) ||
							H(L, S) ||
							H(O?.portalNode, L) ||
							(L != null && Ve.hasElement(L)) ||
							Ve.hasMatchingElement((Q) => H(Q, L)) ||
							it ||
							(F &&
								(Ce(F.nodesRef.current, Ne).find(
									(Q) =>
										H(Q.context?.elements.floating, L) ||
										H(Q.context?.elements.domReference, L),
								) ||
									At(F.nodesRef.current, Ne).find(
										(Q) =>
											[
												Q.context?.elements.floating,
												yt(Q.context?.elements.floating),
											].includes(L) || Q.context?.elements.domReference === L,
									)))
						);
					if (
						(K === b && N && Wt(N, V),
						a && K !== b && !bo(ee) && de(m) === m.body)
					) {
						if (ue(N) && (N.focus(), a === "popup")) {
							xe.request(() => {
								N.focus();
							});
							return;
						}
						const Q = q.current,
							Ae = ne(),
							We = Ae[Q] || Ae[Ae.length - 1] || N;
						ue(We) && We.focus();
					}
					if (I.current.insideReactTree) {
						I.current.insideReactTree = !1;
						return;
					}
					(T || !i) &&
						L &&
						at &&
						!Z.current &&
						(T || L !== gt()) &&
						((_.current = !0), h.setOpen(!1, J(Xt, X)));
				});
			}
			function A() {
				G.current ||
					((I.current.insideReactTree = !0),
					Re.start(0, () => {
						I.current.insideReactTree = !1;
					}));
			}
			const R = ue(b) ? b : null,
				W = [];
			if (!(!S && !R))
				return (
					R &&
						(R.addEventListener("focusout", x),
						R.addEventListener("pointerdown", v),
						W.push(() => {
							(R.removeEventListener("focusout", x),
								R.removeEventListener("pointerdown", v));
						})),
					S &&
						(S.addEventListener("focusin", D),
						S.addEventListener("focusout", x),
						O &&
							(S.addEventListener("focusout", A, !0),
							W.push(() => {
								S.removeEventListener("focusout", A, !0);
							})),
						W.push(() => {
							(S.removeEventListener("focusin", D),
								S.removeEventListener("focusout", x));
						})),
					() => {
						W.forEach((X) => {
							X();
						});
					}
				);
		}, [r, b, S, N, i, F, O, h, u, a, ne, T, w, V, I, Re, Be, xe, p, d]),
		l.useEffect(() => {
			if (r || !S || !y) return;
			const m = Array.from(
					O?.portalNode?.querySelectorAll(`[${Ze("portal")}]`) || [],
				),
				D = (F ? At(F.nodesRef.current, w()) : []).find((A) =>
					Nt(A.context?.elements.domReference || null),
				)?.context?.elements.domReference,
				x = [
					S,
					D,
					...m,
					Ee.current,
					ie.current,
					Me.current,
					me.current,
					O?.beforeOutsideRef.current,
					O?.afterOutsideRef.current,
					le(d),
					le(p),
					T ? b : null,
				].filter((A) => A != null);
			return lo(x, i || T);
		}, [y, r, b, S, i, V, O, T, F, w, p, d]),
		Y(() => {
			if (!y || r || !ue(N)) return;
			const m = $(N),
				v = de(m);
			queueMicrotask(() => {
				const D = ce(N),
					x = M.current,
					A = typeof x == "function" ? x(U.current || "") : x;
				if (A === void 0 || A === !1) return;
				let R;
				(A === !0 || A === null ? (R = D[0] || N) : (R = le(A)),
					(R = R || D[0] || N),
					!H(N, v) && ft(R, { preventScroll: R === N }));
			});
		}, [r, y, N, P, ce, M, U]),
		Y(() => {
			if (r || !N) return;
			const m = $(N),
				v = de(m);
			ho(v);
			function D(R) {
				if (
					(R.open || (ae.current = go(R.nativeEvent, Se.current)),
					R.reason === ur &&
						R.nativeEvent.type === "mouseleave" &&
						(_.current = !0),
					R.reason === Jt)
				)
					if (R.nested) _.current = !1;
					else if (Kr(R.nativeEvent) || _r(R.nativeEvent)) _.current = !1;
					else {
						let W = !1;
						(document.createElement("div").focus({
							get preventScroll() {
								return ((W = !0), !1);
							},
						}),
							W ? (_.current = !1) : (_.current = !0));
					}
			}
			C.on("openchange", D);
			const x = m.createElement("span");
			(x.setAttribute("tabindex", "-1"),
				x.setAttribute("aria-hidden", "true"),
				Object.assign(x.style, qt),
				be && b && b.insertAdjacentElement("afterend", x));
			function A() {
				const R = z.current;
				let W = typeof R == "function" ? R(ae.current) : R;
				if (W === void 0 || W === !1) return null;
				if ((W === null && (W = !0), typeof W == "boolean")) {
					const L = b || gt();
					return L && L.isConnected ? L : x;
				}
				const X = b || gt() || x;
				return le(W) || X;
			}
			return () => {
				C.off("openchange", D);
				const R = de(m),
					W =
						H(S, R) ||
						(F &&
							Ce(F.nodesRef.current, w(), !1).some((L) =>
								H(L.context?.elements.floating, R),
							)),
					X = A();
				queueMicrotask(() => {
					const L = mo(X),
						K = typeof z.current != "boolean";
					(z.current &&
						!_.current &&
						ue(L) &&
						(!(!K && L !== R && R !== m.body) || W) &&
						L.focus({ preventScroll: !0 }),
						x.remove(),
						(_.current = !1));
				});
			};
		}, [r, S, N, z, I, C, F, be, b, w]),
		Y(() => {
			if (!gn || y || !S) return;
			const m = de($(S));
			!ue(m) || !Ct(m) || (H(S, m) && m.blur());
		}, [y, S]),
		Y(() => {
			if (!(r || !O))
				return (
					O.setFocusManagerState({
						modal: i,
						closeOnFocusOut: u,
						open: y,
						onOpenChange: h.setOpen,
						domReference: b,
					}),
					() => {
						O.setFocusManagerState(null);
					}
				);
		}, [r, O, i, y, h, u, b]),
		Y(() => {
			if (!(r || !N))
				return (
					Wt(N, V),
					() => {
						queueMicrotask(Ot);
					}
				);
		}, [r, N, V]));
	const f = !r && (i ? !T : !0) && (be || i);
	return k.jsxs(l.Fragment, {
		children: [
			f &&
				k.jsx(Je, {
					"data-type": "inside",
					ref: oe,
					onFocus: (m) => {
						if (i) {
							const v = ce();
							ft(v[v.length - 1]);
						} else
							O?.portalNode &&
								((_.current = !1),
								Le(m, O.portalNode)
									? In(b)?.focus()
									: le(d ?? O.beforeOutsideRef)?.focus());
					},
				}),
			n,
			f &&
				k.jsx(Je, {
					"data-type": "inside",
					ref: st,
					onFocus: (m) => {
						i
							? ft(ce()[0])
							: O?.portalNode &&
								(u && (_.current = !0),
								Le(m, O.portalNode)
									? kn(b)?.focus()
									: le(p ?? O.afterOutsideRef)?.focus());
					},
				}),
		],
	});
}
function yo(e, t = {}) {
	const n = "rootStore" in e ? e.rootStore : e,
		r = n.context.dataRef,
		{
			enabled: o = !0,
			event: s = "click",
			toggle: a = !0,
			ignoreMouse: i = !1,
			stickIfOpen: u = !0,
			touchOpenDelay: c = 0,
			reason: p = ht,
		} = t,
		d = l.useRef(void 0),
		E = Zt(),
		g = De(),
		h = l.useMemo(
			() => ({
				onPointerDown(y) {
					d.current = y.pointerType;
				},
				onMouseDown(y) {
					const b = d.current,
						S = y.nativeEvent,
						C = n.select("open");
					if (y.button !== 0 || s === "click" || (Ft(b, !0) && i)) return;
					const I = r.current.openEvent,
						w = I?.type,
						P = n.select("domReferenceElement") !== y.currentTarget,
						T =
							(C && P) ||
							!(C && a && (!(I && u) || w === "click" || w === "mousedown"));
					if (Ct(S.target)) {
						const M = J(p, S, S.target);
						T && b === "touch" && c > 0
							? g.start(c, () => {
									n.setOpen(!0, M);
								})
							: n.setOpen(T, M);
						return;
					}
					const V = y.currentTarget;
					E.request(() => {
						const M = J(p, S, V);
						T && b === "touch" && c > 0
							? g.start(c, () => {
									n.setOpen(!0, M);
								})
							: n.setOpen(T, M);
					});
				},
				onClick(y) {
					if (s === "mousedown-only") return;
					const b = d.current;
					if (s === "mousedown" && b) {
						d.current = void 0;
						return;
					}
					if (Ft(b, !0) && i) return;
					const S = n.select("open"),
						C = r.current.openEvent,
						I = n.select("domReferenceElement") !== y.currentTarget,
						w = (S && I) || !(S && a && (!(C && u) || yn(C))),
						P = J(p, y.nativeEvent, y.currentTarget);
					w && b === "touch" && c > 0
						? g.start(c, () => {
								n.setOpen(!0, P);
							})
						: n.setOpen(w, P);
				},
				onKeyDown() {
					d.current = void 0;
				},
			}),
			[r, s, i, n, u, a, E, g, c, p],
		);
	return l.useMemo(() => (o ? { reference: h } : Te), [o, h]);
}
const Eo = { intentional: "onClick", sloppy: "onPointerDown" };
function So(e) {
	return {
		escapeKey: typeof e == "boolean" ? e : (e?.escapeKey ?? !1),
		outsidePress: typeof e == "boolean" ? e : (e?.outsidePress ?? !0),
	};
}
function Ro(e, t = {}) {
	const n = "rootStore" in e ? e.rootStore : e,
		r = n.useState("open"),
		o = n.useState("floatingElement"),
		s = n.useState("referenceElement"),
		a = n.useState("domReferenceElement"),
		{ onOpenChange: i, dataRef: u } = n.context,
		{
			enabled: c = !0,
			escapeKey: p = !0,
			outsidePress: d = !0,
			outsidePressEvent: E = "sloppy",
			referencePress: g = !1,
			referencePressEvent: h = "sloppy",
			ancestorScroll: y = !1,
			bubbles: b,
			externalTree: S,
		} = t,
		C = wt(S),
		I = B(typeof d == "function" ? d : () => !1),
		w = typeof d == "function" ? I : d,
		P = l.useRef(!1),
		{ escapeKey: T, outsidePress: V } = So(b),
		M = l.useRef(null),
		z = De(),
		U = De(),
		F = B(() => {
			(U.clear(), (u.current.insideReactTree = !1));
		}),
		O = l.useRef(!1),
		Ee = l.useRef(""),
		ie = B((f) => {
			Ee.current = f.pointerType;
		}),
		_ = B(() => {
			const f = Ee.current,
				m = f === "pen" || !f ? "mouse" : f,
				v = typeof E == "function" ? E() : E;
			return typeof v == "string" ? v : v[m];
		}),
		Z = B((f) => {
			if (!r || !c || !p || f.key !== "Escape" || O.current) return;
			const m = u.current.floatingContext?.nodeId,
				v = C ? Ce(C.nodesRef.current, m) : [];
			if (!T && v.length > 0) {
				let A = !0;
				if (
					(v.forEach((R) => {
						R.context?.open &&
							!R.context.dataRef.current.__escapeKeyBubbles &&
							(A = !1);
					}),
					!A)
				)
					return;
			}
			const D = Hr(f) ? f.nativeEvent : f,
				x = J(dr, D);
			(n.setOpen(!1, x), !T && !x.isPropagationAllowed && f.stopPropagation());
		}),
		G = B((f) => {
			const m = _();
			return (
				(m === "intentional" && f.type !== "click") ||
				(m === "sloppy" && f.type === "click")
			);
		}),
		q = B(() => {
			((u.current.insideReactTree = !0), U.start(0, F));
		}),
		ae = B((f, m = !1) => {
			if (G(f)) {
				F();
				return;
			}
			if (u.current.insideReactTree) {
				F();
				return;
			}
			if ((_() === "intentional" && m) || (typeof w == "function" && !w(f)))
				return;
			const v = re(f),
				D = `[${Ze("inert")}]`,
				x = $(n.select("floatingElement")).querySelectorAll(D),
				A = n.context.triggerElements;
			if (v && (A.hasElement(v) || A.hasMatchingElement((K) => H(K, v))))
				return;
			let R = se(v) ? v : null;
			for (; R && !ct(R); ) {
				const K = Rr(R);
				if (ct(K) || !se(K)) break;
				R = K;
			}
			if (
				x.length &&
				se(v) &&
				!Vr(v) &&
				!H(v, n.select("floatingElement")) &&
				Array.from(x).every((K) => !H(R, K))
			)
				return;
			if (ue(v) && !("touches" in f)) {
				const K = ct(v),
					ee = on(v),
					Ne = /auto|scroll/,
					Ve = K || Ne.test(ee.overflowX),
					it = K || Ne.test(ee.overflowY),
					at = Ve && v.clientWidth > 0 && v.scrollWidth > v.clientWidth,
					Q = it && v.clientHeight > 0 && v.scrollHeight > v.clientHeight,
					Ae = ee.direction === "rtl",
					We =
						Q &&
						(Ae
							? f.offsetX <= v.offsetWidth - v.clientWidth
							: f.offsetX > v.clientWidth),
					Qn = at && f.offsetY > v.clientHeight;
				if (We || Qn) return;
			}
			const W = u.current.floatingContext?.nodeId,
				X =
					C &&
					Ce(C.nodesRef.current, W).some((K) =>
						te(f, K.context?.elements.floating),
					);
			if (
				te(f, n.select("floatingElement")) ||
				te(f, n.select("domReferenceElement")) ||
				X
			)
				return;
			const L = C ? Ce(C.nodesRef.current, W) : [];
			if (L.length > 0) {
				let K = !0;
				if (
					(L.forEach((ee) => {
						ee.context?.open &&
							!ee.context.dataRef.current.__outsidePressBubbles &&
							(K = !1);
					}),
					!K)
				)
					return;
			}
			(n.setOpen(!1, J(Jt, f)), F());
		}),
		Se = B((f) => {
			_() !== "sloppy" ||
				f.pointerType === "touch" ||
				!n.select("open") ||
				!c ||
				te(f, n.select("floatingElement")) ||
				te(f, n.select("domReferenceElement")) ||
				ae(f);
		}),
		Me = B((f) => {
			if (
				_() !== "sloppy" ||
				!n.select("open") ||
				!c ||
				te(f, n.select("floatingElement")) ||
				te(f, n.select("domReferenceElement"))
			)
				return;
			const m = f.touches[0];
			m &&
				((M.current = {
					startTime: Date.now(),
					startX: m.clientX,
					startY: m.clientY,
					dismissOnTouchEnd: !1,
					dismissOnMouseDown: !0,
				}),
				z.start(1e3, () => {
					M.current &&
						((M.current.dismissOnTouchEnd = !1),
						(M.current.dismissOnMouseDown = !1));
				}));
		}),
		me = B((f) => {
			const m = re(f);
			function v() {
				(Me(f), m?.removeEventListener(f.type, v));
			}
			m?.addEventListener(f.type, v);
		}),
		oe = B((f) => {
			const m = P.current;
			if (
				((P.current = !1),
				z.clear(),
				f.type === "mousedown" && M.current && !M.current.dismissOnMouseDown)
			)
				return;
			const v = re(f);
			function D() {
				(f.type === "pointerdown" ? Se(f) : ae(f, m),
					v?.removeEventListener(f.type, D));
			}
			v?.addEventListener(f.type, D);
		}),
		st = B((f) => {
			if (
				_() !== "sloppy" ||
				!M.current ||
				te(f, n.select("floatingElement")) ||
				te(f, n.select("domReferenceElement"))
			)
				return;
			const m = f.touches[0];
			if (!m) return;
			const v = Math.abs(m.clientX - M.current.startX),
				D = Math.abs(m.clientY - M.current.startY),
				x = Math.sqrt(v * v + D * D);
			(x > 5 && (M.current.dismissOnTouchEnd = !0),
				x > 10 && (ae(f), z.clear(), (M.current = null)));
		}),
		Re = B((f) => {
			const m = re(f);
			function v() {
				(st(f), m?.removeEventListener(f.type, v));
			}
			m?.addEventListener(f.type, v);
		}),
		Be = B((f) => {
			_() !== "sloppy" ||
				!M.current ||
				te(f, n.select("floatingElement")) ||
				te(f, n.select("domReferenceElement")) ||
				(M.current.dismissOnTouchEnd && ae(f), z.clear(), (M.current = null));
		}),
		xe = B((f) => {
			const m = re(f);
			function v() {
				(Be(f), m?.removeEventListener(f.type, v));
			}
			m?.addEventListener(f.type, v);
		});
	(l.useEffect(() => {
		if (!r || !c) return;
		((u.current.__escapeKeyBubbles = T), (u.current.__outsidePressBubbles = V));
		const f = new Oe();
		function m(R) {
			n.setOpen(!1, J(Qt, R));
		}
		function v() {
			(f.clear(), (O.current = !0));
		}
		function D() {
			f.start(xr() ? 5 : 0, () => {
				O.current = !1;
			});
		}
		const x = $(o);
		(x.addEventListener("pointerdown", ie, !0),
			p &&
				(x.addEventListener("keydown", Z),
				x.addEventListener("compositionstart", v),
				x.addEventListener("compositionend", D)),
			w &&
				(x.addEventListener("click", oe, !0),
				x.addEventListener("pointerdown", oe, !0),
				x.addEventListener("touchstart", me, !0),
				x.addEventListener("touchmove", Re, !0),
				x.addEventListener("touchend", xe, !0),
				x.addEventListener("mousedown", oe, !0)));
		let A = [];
		return (
			y &&
				(se(a) && (A = lt(a)),
				se(o) && (A = A.concat(lt(o))),
				!se(s) &&
					s &&
					s.contextElement &&
					(A = A.concat(lt(s.contextElement)))),
			(A = A.filter((R) => R !== x.defaultView?.visualViewport)),
			A.forEach((R) => {
				R.addEventListener("scroll", m, { passive: !0 });
			}),
			() => {
				(x.removeEventListener("pointerdown", ie, !0),
					p &&
						(x.removeEventListener("keydown", Z),
						x.removeEventListener("compositionstart", v),
						x.removeEventListener("compositionend", D)),
					w &&
						(x.removeEventListener("click", oe, !0),
						x.removeEventListener("pointerdown", oe, !0),
						x.removeEventListener("touchstart", me, !0),
						x.removeEventListener("touchmove", Re, !0),
						x.removeEventListener("touchend", xe, !0),
						x.removeEventListener("mousedown", oe, !0)),
					A.forEach((R) => {
						R.removeEventListener("scroll", m);
					}),
					f.clear(),
					(P.current = !1));
			}
		);
	}, [u, o, s, a, p, w, r, i, y, c, T, V, Z, ae, oe, Se, me, Re, xe, ie, n]),
		l.useEffect(F, [w, F]));
	const be = l.useMemo(
			() => ({
				onKeyDown: Z,
				...(g && {
					[Eo[h]]: (f) => {
						n.setOpen(!1, J(ht, f.nativeEvent));
					},
					...(h !== "intentional" && {
						onClick(f) {
							n.setOpen(!1, J(ht, f.nativeEvent));
						},
					}),
				}),
			}),
			[Z, n, g, h],
		),
		N = B((f) => {
			const m = re(f.nativeEvent);
			!H(n.select("floatingElement"), m) || f.button !== 0 || (P.current = !0);
		}),
		ne = B((f) => {
			!r || !c || f.button !== 0 || (P.current = !0);
		}),
		ce = l.useMemo(
			() => ({
				onKeyDown: Z,
				onPointerDown: N,
				onMouseDown: N,
				onMouseUp: N,
				onClickCapture: q,
				onMouseDownCapture(f) {
					(q(), ne(f));
				},
				onPointerDownCapture(f) {
					(q(), ne(f));
				},
				onMouseUpCapture: q,
				onTouchEndCapture: q,
				onTouchMoveCapture: q,
			}),
			[Z, N, q, ne],
		);
	return l.useMemo(
		() => (c ? { reference: be, floating: ce, trigger: be } : {}),
		[c, be, ce],
	);
}
var Qe = Symbol("NOT_FOUND");
function xo(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw new TypeError(t);
}
function To(e, t = `expected an object, instead received ${typeof e}`) {
	if (typeof e != "object") throw new TypeError(t);
}
function Co(
	e,
	t = "expected all items to be functions, instead received the following types: ",
) {
	if (!e.every((n) => typeof n == "function")) {
		const n = e
			.map((r) =>
				typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r,
			)
			.join(", ");
		throw new TypeError(`${t}[${n}]`);
	}
}
var Ht = (e) => (Array.isArray(e) ? e : [e]);
function wo(e) {
	const t = Array.isArray(e[0]) ? e[0] : e;
	return (
		Co(
			t,
			"createSelector expects all input-selectors to be functions, but received the following types: ",
		),
		t
	);
}
function Oo(e, t) {
	const n = [],
		{ length: r } = e;
	for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
	return n;
}
function Io(e) {
	let t;
	return {
		get(n) {
			return t && e(t.key, n) ? t.value : Qe;
		},
		put(n, r) {
			t = { key: n, value: r };
		},
		getEntries() {
			return t ? [t] : [];
		},
		clear() {
			t = void 0;
		},
	};
}
function ko(e, t) {
	let n = [];
	function r(i) {
		const u = n.findIndex((c) => t(i, c.key));
		if (u > -1) {
			const c = n[u];
			return (u > 0 && (n.splice(u, 1), n.unshift(c)), c.value);
		}
		return Qe;
	}
	function o(i, u) {
		r(i) === Qe && (n.unshift({ key: i, value: u }), n.length > e && n.pop());
	}
	function s() {
		return n;
	}
	function a() {
		n = [];
	}
	return { get: r, put: o, getEntries: s, clear: a };
}
var Po = (e, t) => e === t;
function Mo(e) {
	return function (n, r) {
		if (n === null || r === null || n.length !== r.length) return !1;
		const { length: o } = n;
		for (let s = 0; s < o; s++) if (!e(n[s], r[s])) return !1;
		return !0;
	};
}
function No(e, t) {
	const n = typeof t == "object" ? t : { equalityCheck: t },
		{ equalityCheck: r = Po, maxSize: o = 1, resultEqualityCheck: s } = n,
		a = Mo(r);
	let i = 0;
	const u = o <= 1 ? Io(a) : ko(o, a);
	function c() {
		let p = u.get(arguments);
		if (p === Qe) {
			if (((p = e.apply(null, arguments)), i++, s)) {
				const E = u.getEntries().find((g) => s(g.value, p));
				E && ((p = E.value), i !== 0 && i--);
			}
			u.put(arguments, p);
		}
		return p;
	}
	return (
		(c.clearCache = () => {
			(u.clear(), c.resetResultsCount());
		}),
		(c.resultsCount = () => i),
		(c.resetResultsCount = () => {
			i = 0;
		}),
		c
	);
}
var Ao = class {
		constructor(e) {
			this.value = e;
		}
		deref() {
			return this.value;
		}
	},
	Fo = typeof WeakRef < "u" ? WeakRef : Ao,
	Lo = 0,
	Kt = 1;
function _e() {
	return { s: Lo, v: void 0, o: null, p: null };
}
function jn(e, t = {}) {
	let n = _e();
	const { resultEqualityCheck: r } = t;
	let o,
		s = 0;
	function a() {
		let i = n;
		const { length: u } = arguments;
		for (let d = 0, E = u; d < E; d++) {
			const g = arguments[d];
			if (typeof g == "function" || (typeof g == "object" && g !== null)) {
				let h = i.o;
				h === null && (i.o = h = new WeakMap());
				const y = h.get(g);
				y === void 0 ? ((i = _e()), h.set(g, i)) : (i = y);
			} else {
				let h = i.p;
				h === null && (i.p = h = new Map());
				const y = h.get(g);
				y === void 0 ? ((i = _e()), h.set(g, i)) : (i = y);
			}
		}
		const c = i;
		let p;
		if (i.s === Kt) p = i.v;
		else if (((p = e.apply(null, arguments)), s++, r)) {
			const d = o?.deref?.() ?? o;
			(d != null && r(d, p) && ((p = d), s !== 0 && s--),
				(o =
					(typeof p == "object" && p !== null) || typeof p == "function"
						? new Fo(p)
						: p));
		}
		return ((c.s = Kt), (c.v = p), p);
	}
	return (
		(a.clearCache = () => {
			((n = _e()), a.resetResultsCount());
		}),
		(a.resultsCount = () => s),
		(a.resetResultsCount = () => {
			s = 0;
		}),
		a
	);
}
function Bn(e, ...t) {
	const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
		r = (...o) => {
			let s = 0,
				a = 0,
				i,
				u = {},
				c = o.pop();
			(typeof c == "object" && ((u = c), (c = o.pop())),
				xo(
					c,
					`createSelector expects an output function after the inputs, but received: [${typeof c}]`,
				));
			const p = { ...n, ...u },
				{
					memoize: d,
					memoizeOptions: E = [],
					argsMemoize: g = jn,
					argsMemoizeOptions: h = [],
				} = p,
				y = Ht(E),
				b = Ht(h),
				S = wo(o),
				C = d(
					function () {
						return (s++, c.apply(null, arguments));
					},
					...y,
				),
				I = g(
					function () {
						a++;
						const P = Oo(S, arguments);
						return ((i = C.apply(null, P)), i);
					},
					...b,
				);
			return Object.assign(I, {
				resultFunc: c,
				memoizedResultFunc: C,
				dependencies: S,
				dependencyRecomputations: () => a,
				resetDependencyRecomputations: () => {
					a = 0;
				},
				lastResult: () => i,
				recomputations: () => s,
				resetRecomputations: () => {
					s = 0;
				},
				memoize: d,
				argsMemoize: g,
			});
		};
	return (Object.assign(r, { withTypes: () => r }), r);
}
var Do = Bn(jn),
	jo = Object.assign(
		(e, t = Do) => {
			To(
				e,
				`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
			);
			const n = Object.keys(e),
				r = n.map((s) => e[s]);
			return t(r, (...s) => s.reduce((a, i, u) => ((a[n[u]] = i), a), {}));
		},
		{ withTypes: () => jo },
	);
Bn({ memoize: No, memoizeOptions: { maxSize: 1, equalityCheck: Object.is } });
const j = (e, t, n, r, o, s, ...a) => {
	if (a.length > 0) throw new Error(rt(1));
	let i;
	if (e) i = e;
	else throw new Error("Missing arguments");
	return i;
};
var Vn = ar();
const Rt = [];
let xt;
function Bo() {
	return xt;
}
function Vo(e) {
	Rt.push(e);
}
function Wo(e) {
	const t = (n, r) => {
		const o = ye(Ho).current;
		let s;
		try {
			xt = o;
			for (const a of Rt) a.before(o);
			s = e(n, r);
			for (const a of Rt) a.after(o);
			o.didInitialize = !0;
		} finally {
			xt = void 0;
		}
		return s;
	};
	return ((t.displayName = e.displayName || e.name), t);
}
function fi(e) {
	return l.forwardRef(Wo(e));
}
function Ho() {
	return { didInitialize: !1 };
}
const Ko = sn(19),
	_o = Ko ? Yo : Uo;
function Wn(e, t, n, r, o) {
	return _o(e, t, n, r, o);
}
function $o(e, t, n, r, o) {
	const s = l.useCallback(() => t(e.getSnapshot(), n, r, o), [e, t, n, r, o]);
	return Vn.useSyncExternalStore(e.subscribe, s, s);
}
Vo({
	before(e) {
		((e.syncIndex = 0),
			e.didInitialize ||
				((e.syncTick = 1),
				(e.syncHooks = []),
				(e.didChangeStore = !0),
				(e.getSnapshot = () => {
					let t = !1;
					for (let n = 0; n < e.syncHooks.length; n += 1) {
						const r = e.syncHooks[n],
							o = r.selector(r.store.state, r.a1, r.a2, r.a3);
						(r.didChange || !Object.is(r.value, o)) &&
							((t = !0), (r.value = o), (r.didChange = !1));
					}
					return (t && (e.syncTick += 1), e.syncTick);
				})));
	},
	after(e) {
		e.syncHooks.length > 0 &&
			(e.didChangeStore &&
				((e.didChangeStore = !1),
				(e.subscribe = (t) => {
					const n = new Set();
					for (const o of e.syncHooks) n.add(o.store);
					const r = [];
					for (const o of n) r.push(o.subscribe(t));
					return () => {
						for (const o of r) o();
					};
				})),
			Vn.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot));
	},
});
function Yo(e, t, n, r, o) {
	const s = Bo();
	if (!s) return $o(e, t, n, r, o);
	const a = s.syncIndex;
	s.syncIndex += 1;
	let i;
	return (
		s.didInitialize
			? ((i = s.syncHooks[a]),
				(i.store !== e ||
					i.selector !== t ||
					!Object.is(i.a1, n) ||
					!Object.is(i.a2, r) ||
					!Object.is(i.a3, o)) &&
					(i.store !== e && (s.didChangeStore = !0),
					(i.store = e),
					(i.selector = t),
					(i.a1 = n),
					(i.a2 = r),
					(i.a3 = o),
					(i.didChange = !0)))
			: ((i = {
					store: e,
					selector: t,
					a1: n,
					a2: r,
					a3: o,
					value: t(e.getSnapshot(), n, r, o),
					didChange: !1,
				}),
				s.syncHooks.push(i)),
		i.value
	);
}
function Uo(e, t, n, r, o) {
	return cr.useSyncExternalStoreWithSelector(
		e.subscribe,
		e.getSnapshot,
		e.getSnapshot,
		(s) => t(s, n, r, o),
	);
}
class zo {
	constructor(t) {
		((this.state = t), (this.listeners = new Set()), (this.updateTick = 0));
	}
	subscribe = (t) => (
		this.listeners.add(t),
		() => {
			this.listeners.delete(t);
		}
	);
	getSnapshot = () => this.state;
	setState(t) {
		if (this.state === t) return;
		((this.state = t), (this.updateTick += 1));
		const n = this.updateTick;
		for (const r of this.listeners) {
			if (n !== this.updateTick) return;
			r(t);
		}
	}
	update(t) {
		for (const n in t)
			if (!Object.is(this.state[n], t[n])) {
				this.setState({ ...this.state, ...t });
				return;
			}
	}
	set(t, n) {
		Object.is(this.state[t], n) || this.setState({ ...this.state, [t]: n });
	}
	notifyAll() {
		const t = { ...this.state };
		this.setState(t);
	}
	use(t, n, r, o) {
		return Wn(this, t, n, r, o);
	}
}
class Hn extends zo {
	constructor(t, n = {}, r) {
		(super(t), (this.context = n), (this.selectors = r));
	}
	useSyncedValue(t, n) {
		(l.useDebugValue(t),
			Y(() => {
				this.state[t] !== n && this.set(t, n);
			}, [t, n]));
	}
	useSyncedValueWithCleanup(t, n) {
		const r = this;
		Y(
			() => (
				r.state[t] !== n && r.set(t, n),
				() => {
					r.set(t, void 0);
				}
			),
			[r, t, n],
		);
	}
	useSyncedValues(t) {
		const n = this,
			r = Object.values(t);
		Y(() => {
			n.update(t);
		}, [n, ...r]);
	}
	useControlledProp(t, n) {
		l.useDebugValue(t);
		const r = n !== void 0;
		Y(() => {
			r &&
				!Object.is(this.state[t], n) &&
				super.setState({ ...this.state, [t]: n });
		}, [t, n, r]);
	}
	select(t, n, r, o) {
		const s = this.selectors[t];
		return s(this.state, n, r, o);
	}
	useState(t, n, r, o) {
		return (l.useDebugValue(t), Wn(this, this.selectors[t], n, r, o));
	}
	useContextCallback(t, n) {
		l.useDebugValue(t);
		const r = B(n ?? Ue);
		this.context[t] = r;
	}
	useStateSetter(t) {
		const n = l.useRef(void 0);
		return (
			n.current === void 0 &&
				(n.current = (r) => {
					this.set(t, r);
				}),
			n.current
		);
	}
	observe(t, n) {
		let r;
		typeof t == "function" ? (r = t) : (r = this.selectors[t]);
		let o = r(this.state);
		return (
			n(o, o, this),
			this.subscribe((s) => {
				const a = r(s);
				if (!Object.is(o, a)) {
					const i = o;
					((o = a), n(a, i, this));
				}
			})
		);
	}
}
const Go = {
	open: j((e) => e.open),
	domReferenceElement: j((e) => e.domReferenceElement),
	referenceElement: j((e) => e.positionReference ?? e.referenceElement),
	floatingElement: j((e) => e.floatingElement),
	floatingId: j((e) => e.floatingId),
};
class Kn extends Hn {
	constructor(t) {
		const {
			nested: n,
			noEmit: r,
			onOpenChange: o,
			triggerElements: s,
			...a
		} = t;
		super(
			{
				...a,
				positionReference: a.referenceElement,
				domReferenceElement: a.referenceElement,
			},
			{
				onOpenChange: o,
				dataRef: { current: {} },
				events: Mn(),
				nested: n,
				noEmit: r,
				triggerElements: s,
			},
			Go,
		);
	}
	setOpen = (t, n) => {
		if (
			((!t || !this.state.open || yn(n.event)) &&
				(this.context.dataRef.current.openEvent = t ? n.event : void 0),
			!this.context.noEmit)
		) {
			const r = {
				open: t,
				reason: n.reason,
				nativeEvent: n.event,
				nested: this.context.nested,
				triggerElement: n.trigger,
			};
			this.context.events.emit("openchange", r);
		}
		this.context.onOpenChange?.(t, n);
	};
}
function qo(e, t) {
	const n = l.useRef(null),
		r = l.useRef(null);
	return l.useCallback(
		(o) => {
			if (e !== void 0) {
				if (n.current !== null) {
					const s = n.current,
						a = r.current,
						i = t.context.triggerElements.getById(s);
					(a && i === a && t.context.triggerElements.delete(s),
						(n.current = null),
						(r.current = null));
				}
				o !== null &&
					((n.current = e),
					(r.current = o),
					t.context.triggerElements.add(e, o));
			}
		},
		[t, e],
	);
}
function Xo(e, t, n, r) {
	const o = n.useState("isMountedByTrigger", e),
		s = qo(e, n),
		a = B((i) => {
			if ((s(i), !i || !n.select("open"))) return;
			const u = n.select("activeTriggerId");
			if (u === e) {
				n.update({ activeTriggerElement: i, ...r });
				return;
			}
			u == null &&
				n.update({ activeTriggerId: e, activeTriggerElement: i, ...r });
		});
	return (
		Y(() => {
			o && n.update({ activeTriggerElement: t.current, ...r });
		}, [o, n, t, ...Object.values(r)]),
		{ registerTrigger: a, isMountedByThisTrigger: o }
	);
}
function Zo(e) {
	const t = e.useState("open");
	Y(() => {
		if (
			t &&
			!e.select("activeTriggerId") &&
			e.context.triggerElements.size === 1
		) {
			const n = e.context.triggerElements.entries().next();
			if (!n.done) {
				const [r, o] = n.value;
				e.update({ activeTriggerId: r, activeTriggerElement: o });
			}
		}
	}, [t, e]);
}
function Jo(e, t, n) {
	const { mounted: r, setMounted: o, transitionStatus: s } = fr(e);
	t.useSyncedValues({ mounted: r, transitionStatus: s });
	const a = B(() => {
			(o(!1),
				t.update({
					activeTriggerId: null,
					activeTriggerElement: null,
					mounted: !1,
				}),
				n?.(),
				t.context.onOpenChangeComplete?.(!1));
		}),
		i = t.useState("preventUnmountingOnClose");
	return (
		en({
			enabled: !i,
			open: e,
			ref: t.context.popupRef,
			onComplete() {
				e || a();
			},
		}),
		{ forceUnmount: a, transitionStatus: s }
	);
}
class _n {
	constructor() {
		((this.elementsSet = new Set()), (this.idMap = new Map()));
	}
	add(t, n) {
		const r = this.idMap.get(t);
		r !== n &&
			(r !== void 0 && this.elementsSet.delete(r),
			this.elementsSet.add(n),
			this.idMap.set(t, n));
	}
	delete(t) {
		const n = this.idMap.get(t);
		n && (this.elementsSet.delete(n), this.idMap.delete(t));
	}
	hasElement(t) {
		return this.elementsSet.has(t);
	}
	hasMatchingElement(t) {
		for (const n of this.elementsSet) if (t(n)) return !0;
		return !1;
	}
	getById(t) {
		return this.idMap.get(t);
	}
	entries() {
		return this.idMap.entries();
	}
	elements() {
		return this.elementsSet.values();
	}
	get size() {
		return this.idMap.size;
	}
}
function Qo() {
	return new Kn({
		open: !1,
		floatingElement: null,
		referenceElement: null,
		triggerElements: new _n(),
		floatingId: "",
		nested: !1,
		noEmit: !1,
		onOpenChange: void 0,
	});
}
function es() {
	return {
		open: !1,
		openProp: void 0,
		mounted: !1,
		transitionStatus: "idle",
		floatingRootContext: Qo(),
		preventUnmountingOnClose: !1,
		payload: void 0,
		activeTriggerId: null,
		activeTriggerElement: null,
		triggerIdProp: void 0,
		popupElement: null,
		positionerElement: null,
		activeTriggerProps: Te,
		inactiveTriggerProps: Te,
		popupProps: Te,
	};
}
const $e = j((e) => e.triggerIdProp ?? e.activeTriggerId),
	ts = {
		open: j((e) => e.openProp ?? e.open),
		mounted: j((e) => e.mounted),
		transitionStatus: j((e) => e.transitionStatus),
		floatingRootContext: j((e) => e.floatingRootContext),
		preventUnmountingOnClose: j((e) => e.preventUnmountingOnClose),
		payload: j((e) => e.payload),
		activeTriggerId: $e,
		activeTriggerElement: j((e) => (e.mounted ? e.activeTriggerElement : null)),
		isTriggerActive: j((e, t) => t !== void 0 && $e(e) === t),
		isOpenedByTrigger: j((e, t) => t !== void 0 && $e(e) === t && e.open),
		isMountedByTrigger: j((e, t) => t !== void 0 && $e(e) === t && e.mounted),
		triggerProps: j((e, t) =>
			t ? e.activeTriggerProps : e.inactiveTriggerProps,
		),
		popupProps: j((e) => e.popupProps),
		popupElement: j((e) => e.popupElement),
		positionerElement: j((e) => e.positionerElement),
	};
function ns(e) {
	const {
			popupStore: t,
			noEmit: n = !1,
			treatPopupAsFloatingElement: r = !1,
			onOpenChange: o,
		} = e,
		s = et(),
		a = ot() != null,
		i = t.useState("open"),
		u = t.useState("activeTriggerElement"),
		c = t.useState(r ? "popupElement" : "positionerElement"),
		p = t.context.triggerElements,
		d = ye(
			() =>
				new Kn({
					open: i,
					referenceElement: u,
					floatingElement: c,
					triggerElements: p,
					onOpenChange: o,
					floatingId: s,
					nested: a,
					noEmit: n,
				}),
		).current;
	return (
		Y(() => {
			const E = {
				open: i,
				floatingId: s,
				referenceElement: u,
				floatingElement: c,
			};
			(se(u) && (E.domReferenceElement = u),
				d.state.positionReference === d.state.referenceElement &&
					(E.positionReference = u),
				d.update(E));
		}, [i, s, u, c, d]),
		(d.context.onOpenChange = o),
		(d.context.nested = a),
		(d.context.noEmit = n),
		d
	);
}
function $n(e = []) {
	const t = e.map((c) => c?.reference),
		n = e.map((c) => c?.floating),
		r = e.map((c) => c?.item),
		o = e.map((c) => c?.trigger),
		s = l.useCallback((c) => Ye(c, e, "reference"), t),
		a = l.useCallback((c) => Ye(c, e, "floating"), n),
		i = l.useCallback((c) => Ye(c, e, "item"), r),
		u = l.useCallback((c) => Ye(c, e, "trigger"), o);
	return l.useMemo(
		() => ({
			getReferenceProps: s,
			getFloatingProps: a,
			getItemProps: i,
			getTriggerProps: u,
		}),
		[s, a, i, u],
	);
}
function Ye(e, t, n) {
	const r = new Map(),
		o = n === "item",
		s = {};
	n === "floating" && ((s.tabIndex = -1), (s[vt] = ""));
	for (const a in e) (o && e && (a === bn || a === vn)) || (s[a] = e[a]);
	for (let a = 0; a < t.length; a += 1) {
		let i;
		const u = t[a]?.[n];
		(typeof u == "function" ? (i = e ? u(e) : null) : (i = u),
			i && _t(s, i, o, r));
	}
	return (_t(s, e, o, r), s);
}
function _t(e, t, n, r) {
	for (const o in t) {
		const s = t[o];
		(n && (o === bn || o === vn)) ||
			(o.startsWith("on")
				? (r.has(o) || r.set(o, []),
					typeof s == "function" &&
						(r.get(o)?.push(s),
						(e[o] = (...a) =>
							r
								.get(o)
								?.map((i) => i(...a))
								.find((i) => i !== void 0))))
				: (e[o] = s));
	}
}
const rs = new Map([
	["select", "listbox"],
	["combobox", "listbox"],
	["label", !1],
]);
function os(e, t = {}) {
	const n = "rootStore" in e ? e.rootStore : e,
		r = n.useState("open"),
		o = n.useState("floatingId"),
		s = n.useState("domReferenceElement"),
		a = n.useState("floatingElement"),
		{ role: i = "dialog" } = t,
		u = et(),
		c = s?.id || u,
		p = l.useMemo(() => yt(a)?.id || o, [a, o]),
		d = rs.get(i) ?? i,
		g = ot() != null,
		h = l.useMemo(
			() =>
				d === "tooltip" || i === "label"
					? Te
					: {
							"aria-haspopup": d === "alertdialog" ? "dialog" : d,
							"aria-expanded": "false",
							...(d === "listbox" && { role: "combobox" }),
							...(d === "menu" && g && { role: "menuitem" }),
							...(i === "select" && { "aria-autocomplete": "none" }),
							...(i === "combobox" && { "aria-autocomplete": "list" }),
						},
			[d, g, i],
		),
		y = l.useMemo(
			() =>
				d === "tooltip" || i === "label"
					? {
							[`aria-${i === "label" ? "labelledby" : "describedby"}`]: r
								? p
								: void 0,
						}
					: {
							...h,
							"aria-expanded": r ? "true" : "false",
							"aria-controls": r ? p : void 0,
							...(d === "menu" && { id: c }),
						},
			[d, p, r, c, i, h],
		),
		b = l.useMemo(() => {
			const C = { id: p, ...(d && { role: d }) };
			return d === "tooltip" || i === "label"
				? C
				: { ...C, ...(d === "menu" && { "aria-labelledby": c }) };
		}, [d, p, c, i]),
		S = l.useCallback(
			({ active: C, selected: I }) => {
				const w = { role: "option", ...(C && { id: `${p}-fui-option` }) };
				switch (i) {
					case "select":
					case "combobox":
						return { ...w, "aria-selected": I };
				}
				return {};
			},
			[p, i],
		);
	return l.useMemo(
		() => ({ reference: y, floating: b, item: S, trigger: h }),
		[y, b, h, S],
	);
}
const Yn = "ArrowUp",
	Un = "ArrowDown",
	zn = "ArrowLeft",
	Gn = "ArrowRight",
	qn = "Home",
	Xn = "End",
	ss = new Set([zn, Gn]),
	is = new Set([Yn, Un]),
	as = new Set([...ss, ...is]);
[...as];
const cs = new Set([Yn, Un, zn, Gn, qn, Xn]);
function ls(e) {
	return sn(19) ? e : e ? "true" : void 0;
}
const us = l.forwardRef(function (t, n) {
	const { cutout: r, ...o } = t;
	let s;
	if (r) {
		const a = r?.getBoundingClientRect();
		s = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${a.left}px ${a.top}px,
      ${a.left}px ${a.bottom}px,
      ${a.right}px ${a.bottom}px,
      ${a.right}px ${a.top}px,
      ${a.left}px ${a.top}px
    )`;
	}
	return k.jsx("div", {
		ref: n,
		role: "presentation",
		"data-base-ui-inert": "",
		...o,
		style: {
			position: "fixed",
			inset: 0,
			userSelect: "none",
			WebkitUserSelect: "none",
			clipPath: s,
		},
	});
});
function ds(e) {
	const t = l.useRef(!0);
	t.current && ((t.current = !1), e());
}
let $t = {},
	Yt = {},
	Ut = "";
function fs(e) {
	if (typeof document > "u") return !1;
	const t = $(e);
	return nt(t).innerWidth - t.documentElement.clientWidth > 0;
}
function ps(e) {
	if (
		!(
			typeof CSS < "u" &&
			CSS.supports &&
			CSS.supports("scrollbar-gutter", "stable")
		) ||
		typeof document > "u"
	)
		return !1;
	const n = $(e),
		r = n.documentElement,
		o = n.body,
		s = Tt(r) ? r : o,
		a = s.style.overflowY,
		i = r.style.scrollbarGutter;
	((r.style.scrollbarGutter = "stable"), (s.style.overflowY = "scroll"));
	const u = s.offsetWidth;
	s.style.overflowY = "hidden";
	const c = s.offsetWidth;
	return ((s.style.overflowY = a), (r.style.scrollbarGutter = i), u === c);
}
function gs(e) {
	const t = $(e),
		n = t.documentElement,
		r = t.body,
		o = Tt(n) ? n : r,
		s = { overflowY: o.style.overflowY, overflowX: o.style.overflowX };
	return (
		Object.assign(o.style, { overflowY: "hidden", overflowX: "hidden" }),
		() => {
			Object.assign(o.style, s);
		}
	);
}
function hs(e) {
	const t = $(e),
		n = t.documentElement,
		r = t.body,
		o = nt(n);
	let s = 0,
		a = 0,
		i = !1;
	const u = pr.create();
	if (gn && (o.visualViewport?.scale ?? 1) !== 1) return () => {};
	function c() {
		const E = o.getComputedStyle(n),
			g = o.getComputedStyle(r),
			b = (E.scrollbarGutter || "").includes("both-edges")
				? "stable both-edges"
				: "stable";
		((s = n.scrollTop),
			(a = n.scrollLeft),
			($t = {
				scrollbarGutter: n.style.scrollbarGutter,
				overflowY: n.style.overflowY,
				overflowX: n.style.overflowX,
			}),
			(Ut = n.style.scrollBehavior),
			(Yt = {
				position: r.style.position,
				height: r.style.height,
				width: r.style.width,
				boxSizing: r.style.boxSizing,
				overflowY: r.style.overflowY,
				overflowX: r.style.overflowX,
				scrollBehavior: r.style.scrollBehavior,
			}));
		const S = n.scrollHeight > n.clientHeight,
			C = n.scrollWidth > n.clientWidth,
			I = E.overflowY === "scroll" || g.overflowY === "scroll",
			w = E.overflowX === "scroll" || g.overflowX === "scroll",
			P = Math.max(0, o.innerWidth - r.clientWidth),
			T = Math.max(0, o.innerHeight - r.clientHeight),
			V = parseFloat(g.marginTop) + parseFloat(g.marginBottom),
			M = parseFloat(g.marginLeft) + parseFloat(g.marginRight),
			z = Tt(n) ? n : r;
		if (((i = ps(e)), i)) {
			((n.style.scrollbarGutter = b),
				(z.style.overflowY = "hidden"),
				(z.style.overflowX = "hidden"));
			return;
		}
		(Object.assign(n.style, {
			scrollbarGutter: b,
			overflowY: "hidden",
			overflowX: "hidden",
		}),
			(S || I) && (n.style.overflowY = "scroll"),
			(C || w) && (n.style.overflowX = "scroll"),
			Object.assign(r.style, {
				position: "relative",
				height: V || T ? `calc(100dvh - ${V + T}px)` : "100dvh",
				width: M || P ? `calc(100vw - ${M + P}px)` : "100vw",
				boxSizing: "border-box",
				overflow: "hidden",
				scrollBehavior: "unset",
			}),
			(r.scrollTop = s),
			(r.scrollLeft = a),
			n.setAttribute("data-base-ui-scroll-locked", ""),
			(n.style.scrollBehavior = "unset"));
	}
	function p() {
		(Object.assign(n.style, $t),
			Object.assign(r.style, Yt),
			i ||
				((n.scrollTop = s),
				(n.scrollLeft = a),
				n.removeAttribute("data-base-ui-scroll-locked"),
				(n.style.scrollBehavior = Ut)));
	}
	function d() {
		(p(), u.request(c));
	}
	return (
		c(),
		o.addEventListener("resize", d),
		() => {
			(u.cancel(),
				p(),
				typeof o.removeEventListener == "function" &&
					o.removeEventListener("resize", d));
		}
	);
}
class ms {
	lockCount = 0;
	restore = null;
	timeoutLock = Oe.create();
	timeoutUnlock = Oe.create();
	acquire(t) {
		return (
			(this.lockCount += 1),
			this.lockCount === 1 &&
				this.restore === null &&
				this.timeoutLock.start(0, () => this.lock(t)),
			this.release
		);
	}
	release = () => {
		((this.lockCount -= 1),
			this.lockCount === 0 &&
				this.restore &&
				this.timeoutUnlock.start(0, this.unlock));
	};
	unlock = () => {
		this.lockCount === 0 &&
			this.restore &&
			(this.restore?.(), (this.restore = null));
	};
	lock(t) {
		if (this.lockCount === 0 || this.restore !== null) return;
		const r = $(t).documentElement,
			o = nt(r).getComputedStyle(r).overflowY;
		if (o === "hidden" || o === "clip") {
			this.restore = Ue;
			return;
		}
		const s = hn || !fs(t);
		this.restore = s ? gs(t) : hs(t);
	}
}
const bs = new ms();
function vs(e = !0, t = null) {
	Y(() => {
		if (e) return bs.acquire(t);
	}, [e, t]);
}
function ys(e) {
	const t = l.useRef(""),
		n = l.useCallback(
			(o) => {
				o.defaultPrevented ||
					((t.current = o.pointerType), e(o, o.pointerType));
			},
			[e],
		);
	return {
		onClick: l.useCallback(
			(o) => {
				if (o.detail === 0) {
					e(o, "keyboard");
					return;
				}
				("pointerType" in o ? e(o, o.pointerType) : e(o, t.current),
					(t.current = ""));
			},
			[e],
		),
		onPointerDown: n,
	};
}
function Es(e) {
	const [t, n] = l.useState(null),
		r = B((i, u) => {
			e || n(u || (hn ? "touch" : ""));
		}),
		o = l.useCallback(() => {
			n(null);
		}, []),
		{ onClick: s, onPointerDown: a } = ys(r);
	return l.useMemo(
		() => ({
			openMethod: t,
			reset: o,
			triggerProps: { onClick: s, onPointerDown: a },
		}),
		[t, o, s, a],
	);
}
function Ss(e = {}) {
	const { id: t, implicit: n = !1, controlRef: r } = e,
		{ controlId: o, registerControlId: s } = tn(),
		a = tt(t),
		i = n ? o : void 0,
		u = ye(() => Symbol("labelable-control")),
		c = l.useRef(!1),
		p = l.useRef(t != null),
		d = B(() => {
			!c.current || s === Ue || ((c.current = !1), s(u.current, void 0));
		});
	return (
		Y(() => {
			if (s === Ue) return;
			let E;
			if (n) {
				const g = r?.current;
				se(g) && g.closest("label") != null ? (E = t ?? null) : (E = i ?? a);
			} else if (t != null) ((p.current = !0), (E = t));
			else if (p.current) E = a;
			else {
				d();
				return;
			}
			if (E === void 0) {
				d();
				return;
			}
			((c.current = !0), s(u.current, E));
		}, [t, r, i, s, n, a, u, d]),
		l.useEffect(() => d, [d]),
		o ?? a
	);
}
const Rs = l.forwardRef(function (t, n) {
		const {
				render: r,
				className: o,
				id: s,
				name: a,
				value: i,
				disabled: u = !1,
				onValueChange: c,
				defaultValue: p,
				autoFocus: d = !1,
				...E
			} = t,
			{
				state: g,
				name: h,
				disabled: y,
				setTouched: b,
				setDirty: S,
				validityData: C,
				setFocused: I,
				setFilled: w,
				validationMode: P,
				validation: T,
			} = gr(),
			V = y || u,
			M = h ?? a,
			z = { ...g, disabled: V },
			{ labelId: U } = tn(),
			F = Ss({ id: s });
		Y(() => {
			const G = i != null;
			T.inputRef.current?.value || (G && i !== "")
				? w(!0)
				: G && i === "" && w(!1);
		}, [T.inputRef, w, i]);
		const O = l.useRef(null);
		Y(() => {
			d && O.current === de($(O.current)) && I(!0);
		}, [d, I]);
		const [Ee] = hr({
				controlled: i,
				default: p,
				name: "FieldControl",
				state: "value",
			}),
			ie = i !== void 0,
			_ = ie ? Ee : void 0;
		return (
			mr({
				id: F,
				name: M,
				commit: T.commit,
				value: _,
				getValue: () => T.inputRef.current?.value,
				controlRef: T.inputRef,
			}),
			ge("input", t, {
				ref: [n, O],
				state: z,
				props: [
					{
						id: F,
						disabled: V,
						name: M,
						ref: T.inputRef,
						"aria-labelledby": U,
						autoFocus: d,
						...(ie ? { value: _ } : { defaultValue: p }),
						onChange(G) {
							const q = G.currentTarget.value;
							(c?.(q, J(Qt, G.nativeEvent)),
								S(q !== C.initialValue),
								w(q !== ""));
						},
						onFocus() {
							I(!0);
						},
						onBlur(G) {
							(b(!0), I(!1), P === "onBlur" && T.commit(G.currentTarget.value));
						},
						onKeyDown(G) {
							G.currentTarget.tagName === "INPUT" &&
								G.key === "Enter" &&
								(b(!0), T.commit(G.currentTarget.value));
						},
					},
					T.getInputValidationProps(),
					E,
				],
				stateAttributesMapping: br,
			})
		);
	}),
	xs = l.forwardRef(function (t, n) {
		return k.jsx(Rs, { ref: n, ...t });
	});
function pi({ className: e, type: t, ...n }) {
	return k.jsx(xs, {
		type: t,
		"data-slot": "input",
		className: pe(
			"border-input bg-input/20 file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-7 w-full min-w-0 rounded-md border px-2 py-0.5 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 md:text-xs/relaxed",
			e,
		),
		...n,
	});
}
const Zn = l.createContext(void 0);
function he(e) {
	const t = l.useContext(Zn);
	if (e === !1 && t === void 0) throw new Error(rt(27));
	return t;
}
const Ts = { ...dn, ...nn },
	Cs = l.forwardRef(function (t, n) {
		const { render: r, className: o, forceRender: s = !1, ...a } = t,
			{ store: i } = he(),
			u = i.useState("open"),
			c = i.useState("nested"),
			p = i.useState("mounted"),
			d = i.useState("transitionStatus");
		return ge("div", t, {
			state: { open: u, transitionStatus: d },
			ref: [i.context.backdropRef, n],
			stateAttributesMapping: Ts,
			props: [
				{
					role: "presentation",
					hidden: !p,
					style: { userSelect: "none", WebkitUserSelect: "none" },
				},
				a,
			],
			enabled: s || !c,
		});
	}),
	It = l.forwardRef(function (t, n) {
		const {
				render: r,
				className: o,
				disabled: s = !1,
				nativeButton: a = !0,
				...i
			} = t,
			{ store: u } = he(),
			c = u.useState("open");
		function p(h) {
			c && u.setOpen(!1, J(vr, h.nativeEvent));
		}
		const { getButtonProps: d, buttonRef: E } = an({ disabled: s, native: a });
		return ge("button", t, {
			state: { disabled: s },
			ref: [n, E],
			props: [{ onClick: p }, i, d],
		});
	}),
	ws = l.forwardRef(function (t, n) {
		const { render: r, className: o, id: s, ...a } = t,
			{ store: i } = he(),
			u = tt(s);
		return (
			i.useSyncedValueWithCleanup("descriptionElementId", u),
			ge("p", t, { ref: n, props: [{ id: u }, a] })
		);
	});
let Os = (function (e) {
		return ((e.nestedDialogs = "--nested-dialogs"), e);
	})({}),
	Is = (function (e) {
		return (
			(e[(e.open = ve.open)] = "open"),
			(e[(e.closed = ve.closed)] = "closed"),
			(e[(e.startingStyle = ve.startingStyle)] = "startingStyle"),
			(e[(e.endingStyle = ve.endingStyle)] = "endingStyle"),
			(e.nested = "data-nested"),
			(e.nestedDialogOpen = "data-nested-dialog-open"),
			e
		);
	})({});
const Jn = l.createContext(void 0);
function ks() {
	const e = l.useContext(Jn);
	if (e === void 0) throw new Error(rt(26));
	return e;
}
const Ps = {
		...dn,
		...nn,
		nestedDialogOpen(e) {
			return e ? { [Is.nestedDialogOpen]: "" } : null;
		},
	},
	Ms = l.forwardRef(function (t, n) {
		const { className: r, finalFocus: o, initialFocus: s, render: a, ...i } = t,
			{ store: u } = he(),
			c = u.useState("descriptionElementId"),
			p = u.useState("disablePointerDismissal"),
			d = u.useState("floatingRootContext"),
			E = u.useState("popupProps"),
			g = u.useState("modal"),
			h = u.useState("mounted"),
			y = u.useState("nested"),
			b = u.useState("nestedOpenDialogCount"),
			S = u.useState("open"),
			C = u.useState("openMethod"),
			I = u.useState("titleElementId"),
			w = u.useState("transitionStatus"),
			P = u.useState("role");
		(ks(),
			en({
				open: S,
				ref: u.context.popupRef,
				onComplete() {
					S && u.context.onOpenChangeComplete?.(!0);
				},
			}));
		function T(F) {
			return F === "touch" ? u.context.popupRef.current : !0;
		}
		const V = s === void 0 ? T : s,
			M = b > 0,
			U = ge("div", t, {
				state: { open: S, nested: y, transitionStatus: w, nestedDialogOpen: M },
				props: [
					E,
					{
						"aria-labelledby": I ?? void 0,
						"aria-describedby": c ?? void 0,
						role: P,
						tabIndex: -1,
						hidden: !h,
						onKeyDown(F) {
							cs.has(F.key) && F.stopPropagation();
						},
						style: { [Os.nestedDialogs]: b },
					},
					i,
				],
				ref: [n, u.context.popupRef, u.useStateSetter("popupElement")],
				stateAttributesMapping: Ps,
			});
		return k.jsx(vo, {
			context: d,
			openInteractionType: C,
			disabled: !h,
			closeOnFocusOut: !p,
			initialFocus: V,
			returnFocus: o,
			modal: g !== !1,
			restoreFocus: "popup",
			children: U,
		});
	}),
	Ns = l.forwardRef(function (t, n) {
		const { keepMounted: r = !1, ...o } = t,
			{ store: s } = he(),
			a = s.useState("mounted"),
			i = s.useState("modal"),
			u = s.useState("open");
		return a || r
			? k.jsx(Jn.Provider, {
					value: r,
					children: k.jsxs(po, {
						ref: n,
						...o,
						children: [
							a &&
								i === !0 &&
								k.jsx(us, {
									ref: s.context.internalBackdropRef,
									inert: ls(!u),
								}),
							t.children,
						],
					}),
				})
			: null;
	});
function As(e) {
	const { store: t, parentContext: n, actionsRef: r } = e,
		o = t.useState("open"),
		s = t.useState("disablePointerDismissal"),
		a = t.useState("modal"),
		i = t.useState("popupElement"),
		{ openMethod: u, triggerProps: c, reset: p } = Es(o);
	Zo(t);
	const { forceUnmount: d } = Jo(o, t, () => {
			p();
		}),
		E = B((U) => {
			const F = J(U);
			return (
				(F.preventUnmountOnClose = () => {
					t.set("preventUnmountingOnClose", !0);
				}),
				F
			);
		}),
		g = l.useCallback(() => {
			t.setOpen(!1, E(yr));
		}, [t, E]);
	l.useImperativeHandle(r, () => ({ unmount: d, close: g }), [d, g]);
	const h = ns({
			popupStore: t,
			onOpenChange: t.setOpen,
			treatPopupAsFloatingElement: !0,
			noEmit: !0,
		}),
		[y, b] = l.useState(0),
		S = y === 0,
		C = os(h),
		I = Ro(h, {
			outsidePressEvent() {
				return t.context.internalBackdropRef.current ||
					t.context.backdropRef.current
					? "intentional"
					: {
							mouse: a === "trap-focus" ? "sloppy" : "intentional",
							touch: "sloppy",
						};
			},
			outsidePress(U) {
				if (
					!t.context.outsidePressEnabledRef.current ||
					("button" in U && U.button !== 0) ||
					("touches" in U && U.touches.length !== 1)
				)
					return !1;
				const F = re(U);
				if (S && !s) {
					const O = F;
					return a &&
						(t.context.internalBackdropRef.current ||
							t.context.backdropRef.current)
						? t.context.internalBackdropRef.current === O ||
								t.context.backdropRef.current === O ||
								(H(O, i) && !O?.hasAttribute("data-base-ui-portal"))
						: !0;
				}
				return !1;
			},
			escapeKey: S,
		});
	vs(o && a === !0, i);
	const {
		getReferenceProps: w,
		getFloatingProps: P,
		getTriggerProps: T,
	} = $n([C, I]);
	(t.useContextCallback("onNestedDialogOpen", (U) => {
		b(U + 1);
	}),
		t.useContextCallback("onNestedDialogClose", () => {
			b(0);
		}),
		l.useEffect(
			() => (
				n?.onNestedDialogOpen && o && n.onNestedDialogOpen(y),
				n?.onNestedDialogClose && !o && n.onNestedDialogClose(),
				() => {
					n?.onNestedDialogClose && o && n.onNestedDialogClose();
				}
			),
			[o, n, y],
		));
	const V = l.useMemo(() => w(c), [w, c]),
		M = l.useMemo(() => T(c), [T, c]),
		z = l.useMemo(() => P(), [P]);
	t.useSyncedValues({
		openMethod: u,
		activeTriggerProps: V,
		inactiveTriggerProps: M,
		popupProps: z,
		floatingRootContext: h,
		nestedOpenDialogCount: y,
	});
}
const Fs = {
	...ts,
	modal: j((e) => e.modal),
	nested: j((e) => e.nested),
	nestedOpenDialogCount: j((e) => e.nestedOpenDialogCount),
	disablePointerDismissal: j((e) => e.disablePointerDismissal),
	openMethod: j((e) => e.openMethod),
	descriptionElementId: j((e) => e.descriptionElementId),
	titleElementId: j((e) => e.titleElementId),
	viewportElement: j((e) => e.viewportElement),
	role: j((e) => e.role),
};
class Ls extends Hn {
	constructor(t) {
		super(
			Ds(t),
			{
				popupRef: l.createRef(),
				backdropRef: l.createRef(),
				internalBackdropRef: l.createRef(),
				outsidePressEnabledRef: { current: !0 },
				triggerElements: new _n(),
				onOpenChange: void 0,
				onOpenChangeComplete: void 0,
			},
			Fs,
		);
	}
	setOpen = (t, n) => {
		if (
			((n.preventUnmountOnClose = () => {
				this.set("preventUnmountingOnClose", !0);
			}),
			!t &&
				n.trigger == null &&
				this.state.activeTriggerId != null &&
				(n.trigger = this.state.activeTriggerElement ?? void 0),
			this.context.onOpenChange?.(t, n),
			n.isCanceled)
		)
			return;
		const r = {
			open: t,
			nativeEvent: n.event,
			reason: n.reason,
			nested: this.state.nested,
		};
		this.state.floatingRootContext.context.events?.emit("openchange", r);
		const o = { open: t },
			s = n.trigger?.id ?? null;
		((s || t) &&
			((o.activeTriggerId = s), (o.activeTriggerElement = n.trigger ?? null)),
			this.update(o));
	};
}
function Ds(e = {}) {
	return {
		...es(),
		modal: !0,
		disablePointerDismissal: !1,
		popupElement: null,
		viewportElement: null,
		descriptionElementId: void 0,
		titleElementId: void 0,
		openMethod: null,
		nested: !1,
		nestedOpenDialogCount: 0,
		role: "dialog",
		...e,
	};
}
function js(e) {
	const {
			children: t,
			open: n,
			defaultOpen: r = !1,
			onOpenChange: o,
			onOpenChangeComplete: s,
			disablePointerDismissal: a = !1,
			modal: i = !0,
			actionsRef: u,
			handle: c,
			triggerId: p,
			defaultTriggerId: d = null,
		} = e,
		E = he(!0),
		g = !!E,
		h = ye(
			() =>
				c?.store ??
				new Ls({
					open: r,
					openProp: n,
					activeTriggerId: d,
					triggerIdProp: p,
					modal: i,
					disablePointerDismissal: a,
					nested: g,
				}),
		).current;
	(ds(() => {
		n === void 0 &&
			h.state.open === !1 &&
			r === !0 &&
			h.update({ open: !0, activeTriggerId: d });
	}),
		h.useControlledProp("openProp", n),
		h.useControlledProp("triggerIdProp", p),
		h.useSyncedValues({ disablePointerDismissal: a, nested: g, modal: i }),
		h.useContextCallback("onOpenChange", o),
		h.useContextCallback("onOpenChangeComplete", s));
	const y = h.useState("payload");
	As({ store: h, actionsRef: u, parentContext: E?.store.context });
	const b = l.useMemo(() => ({ store: h }), [h]);
	return k.jsx(Zn.Provider, {
		value: b,
		children: typeof t == "function" ? t({ payload: y }) : t,
	});
}
const Bs = l.forwardRef(function (t, n) {
		const { render: r, className: o, id: s, ...a } = t,
			{ store: i } = he(),
			u = tt(s);
		return (
			i.useSyncedValueWithCleanup("titleElementId", u),
			ge("h2", t, { ref: n, props: [{ id: u }, a] })
		);
	}),
	Vs = l.forwardRef(function (t, n) {
		const {
				render: r,
				className: o,
				disabled: s = !1,
				nativeButton: a = !0,
				id: i,
				payload: u,
				handle: c,
				...p
			} = t,
			d = he(!0),
			E = c?.store ?? d?.store;
		if (!E) throw new Error(rt(79));
		const g = tt(i),
			h = E.useState("floatingRootContext"),
			y = E.useState("isOpenedByTrigger", g),
			b = l.useRef(null),
			{ registerTrigger: S, isMountedByThisTrigger: C } = Xo(g, b, E, {
				payload: u,
			}),
			{ getButtonProps: I, buttonRef: w } = an({ disabled: s, native: a }),
			P = yo(h, { enabled: h != null }),
			T = $n([P]),
			V = { disabled: s, open: y },
			M = E.useState("triggerProps", C);
		return ge("button", t, {
			state: V,
			ref: [w, n, S, b],
			props: [T.getReferenceProps(), M, { [un]: "", id: g }, p, I],
			stateAttributesMapping: Nr,
		});
	});
function gi({ ...e }) {
	return k.jsx(js, { "data-slot": "dialog", ...e });
}
function hi({ ...e }) {
	return k.jsx(Vs, { "data-slot": "dialog-trigger", ...e });
}
function Ws({ ...e }) {
	return k.jsx(Ns, { "data-slot": "dialog-portal", ...e });
}
function mi({ ...e }) {
	return k.jsx(It, { "data-slot": "dialog-close", ...e });
}
function Hs({ className: e, ...t }) {
	return k.jsx(Cs, {
		"data-slot": "dialog-overlay",
		className: pe(
			"data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 fixed inset-0 isolate z-50 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs",
			e,
		),
		...t,
	});
}
function bi({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return k.jsxs(Ws, {
		children: [
			k.jsx(Hs, {}),
			k.jsxs(Ms, {
				"data-slot": "dialog-content",
				className: pe(
					"bg-background ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl p-4 text-xs/relaxed ring-1 duration-100 outline-none sm:max-w-sm",
					e,
				),
				...r,
				children: [
					t,
					n &&
						k.jsxs(It, {
							"data-slot": "dialog-close",
							render: k.jsx(cn, {
								variant: "ghost",
								className: "absolute top-2 right-2",
								size: "icon-sm",
							}),
							children: [
								k.jsx(ln, {}),
								k.jsx("span", { className: "sr-only", children: "Close" }),
							],
						}),
				],
			}),
		],
	});
}
function vi({ className: e, ...t }) {
	return k.jsx("div", {
		"data-slot": "dialog-header",
		className: pe("flex flex-col gap-1", e),
		...t,
	});
}
function yi({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return k.jsxs("div", {
		"data-slot": "dialog-footer",
		className: pe("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [
			n,
			t &&
				k.jsx(It, {
					render: k.jsx(cn, { variant: "outline" }),
					children: "Close",
				}),
		],
	});
}
function Ei({ className: e, ...t }) {
	return k.jsx(Bs, {
		"data-slot": "dialog-title",
		className: pe("text-sm font-medium", e),
		...t,
	});
}
function Si({ className: e, ...t }) {
	return k.jsx(ws, {
		"data-slot": "dialog-description",
		className: pe(
			"text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed *:[a]:underline *:[a]:underline-offset-3",
			e,
		),
		...t,
	});
}
function Ri({ className: e, ...t }) {
	return k.jsx("label", {
		"data-slot": "label",
		className: pe(
			"flex items-center gap-2 text-xs/relaxed leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
			e,
		),
		...t,
	});
}
export {
	Ro as $,
	ri as A,
	vo as B,
	dn as C,
	Xs as D,
	cs as E,
	Kn as F,
	po as G,
	Zs as H,
	Js as I,
	us as J,
	ls as K,
	ui as L,
	ts as M,
	io as N,
	es as O,
	_n as P,
	j as Q,
	Hn as R,
	Wo as S,
	Oe as T,
	ds as U,
	li as V,
	Es as W,
	Zo as X,
	Jo as Y,
	vs as Z,
	ns as _,
	oi as a,
	os as a0,
	Gs as a1,
	$n as a2,
	di as a3,
	fi as a4,
	Xo as a5,
	yo as a6,
	ci as a7,
	Le as a8,
	ai as a9,
	Cs as aA,
	In as aa,
	Qs as ab,
	Je as ac,
	qs as ad,
	pi as ae,
	zs as af,
	gi as ag,
	hi as ah,
	bi as ai,
	vi as aj,
	Ei as ak,
	Ri as al,
	gn as am,
	Si as an,
	yi as ao,
	mi as ap,
	he as aq,
	Ls as ar,
	As as as,
	Zn as at,
	Vs as au,
	Ms as av,
	Bs as aw,
	ws as ax,
	It as ay,
	Ns as az,
	ti as b,
	ni as c,
	wt as d,
	De as e,
	Ze as f,
	de as g,
	H as h,
	Ft as i,
	si as j,
	re as k,
	Ct as l,
	ii as m,
	ei as n,
	$ as o,
	Fr as p,
	Br as q,
	ut as r,
	Wr as s,
	yt as t,
	ot as u,
	Nt as v,
	ft as w,
	Kr as x,
	_r as y,
	Ce as z,
};
