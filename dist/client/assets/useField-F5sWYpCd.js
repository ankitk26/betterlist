import { U as R, r as c, a as O, V as S } from "./main-2PW7nLE1.js";
import {
	E as C,
	x as T,
	b as p,
	y as E,
	c as D,
	N as m,
	f as F,
} from "./useRenderElement-Vjd4_1MR.js";
const q = { ...R };
let x = (function (t) {
	return (
		(t.startingStyle = "data-starting-style"),
		(t.endingStyle = "data-ending-style"),
		t
	);
})({});
const L = { [x.startingStyle]: "" },
	N = { [x.endingStyle]: "" },
	it = {
		transitionStatus(t) {
			return t === "starting" ? L : t === "ending" ? N : null;
		},
	},
	rt = "none",
	ot = "trigger-press",
	lt = "trigger-hover",
	ct = "trigger-focus",
	ut = "outside-press",
	dt = "item-press",
	ft = "close-press",
	gt = "focus-out",
	ht = "escape-key",
	mt = "list-navigation",
	bt = "cancel-open",
	vt = "sibling-open",
	pt = "imperative-action";
function St({ controlled: t, default: e, name: n, state: s = "value" }) {
	const { current: a } = c.useRef(t !== void 0),
		[i, o] = c.useState(e),
		r = a ? t : i,
		u = c.useCallback((f) => {
			a || o(f);
		}, []);
	return [r, u];
}
let k = 0;
function B(t, e = "mui") {
	const [n, s] = c.useState(t),
		a = t || n;
	return (
		c.useEffect(() => {
			n == null && ((k += 1), s(`${e}-${k}`));
		}, [n, e]),
		a
	);
}
const w = q.useId;
function U(t, e) {
	if (w !== void 0) {
		const n = w();
		return t ?? (e ? `${e}-${n}` : n);
	}
	return B(t, e);
}
function It(t) {
	return U(t, "base-ui");
}
function yt(t, e, n, s) {
	let a = !1,
		i = !1;
	const o = C;
	return {
		reason: t,
		event: e ?? new Event("base-ui"),
		cancel() {
			a = !0;
		},
		allowPropagation() {
			i = !0;
		},
		get isCanceled() {
			return a;
		},
		get isPropagationAllowed() {
			return i;
		},
		trigger: n,
		...o,
	};
}
const _ = [];
function H(t) {
	c.useEffect(t, _);
}
const I = null;
class $ {
	callbacks = [];
	callbacksCount = 0;
	nextId = 1;
	startId = 1;
	isScheduled = !1;
	tick = (e) => {
		this.isScheduled = !1;
		const n = this.callbacks,
			s = this.callbacksCount;
		if (
			((this.callbacks = []),
			(this.callbacksCount = 0),
			(this.startId = this.nextId),
			s > 0)
		)
			for (let a = 0; a < n.length; a += 1) n[a]?.(e);
	};
	request(e) {
		const n = this.nextId;
		return (
			(this.nextId += 1),
			this.callbacks.push(e),
			(this.callbacksCount += 1),
			!this.isScheduled &&
				(requestAnimationFrame(this.tick), (this.isScheduled = !0)),
			n
		);
	}
	cancel(e) {
		const n = e - this.startId;
		n < 0 ||
			n >= this.callbacks.length ||
			((this.callbacks[n] = null), (this.callbacksCount -= 1));
	}
}
const y = new $();
class b {
	static create() {
		return new b();
	}
	static request(e) {
		return y.request(e);
	}
	static cancel(e) {
		return y.cancel(e);
	}
	currentId = I;
	request(e) {
		(this.cancel(),
			(this.currentId = y.request(() => {
				((this.currentId = I), e());
			})));
	}
	cancel = () => {
		this.currentId !== I && (y.cancel(this.currentId), (this.currentId = I));
	};
	disposeEffect = () => this.cancel;
}
function j() {
	const t = T(b.create).current;
	return (H(t.disposeEffect), t);
}
function Ct(t, e = !1, n = !1) {
	const [s, a] = c.useState(t && e ? "idle" : void 0),
		[i, o] = c.useState(t);
	return (
		t && !i && (o(!0), a("starting")),
		!t && i && s !== "ending" && !n && a("ending"),
		!t && !i && s === "ending" && a(void 0),
		p(() => {
			if (!t && i && s !== "ending" && n) {
				const r = b.request(() => {
					a("ending");
				});
				return () => {
					b.cancel(r);
				};
			}
		}, [t, i, s, n]),
		p(() => {
			if (!t || e) return;
			const r = b.request(() => {
				a(void 0);
			});
			return () => {
				b.cancel(r);
			};
		}, [e, t]),
		p(() => {
			if (!t || !e) return;
			t && i && s !== "idle" && a("starting");
			const r = b.request(() => {
				a("idle");
			});
			return () => {
				b.cancel(r);
			};
		}, [e, t, i, a, s]),
		c.useMemo(
			() => ({ mounted: i, setMounted: o, transitionStatus: s }),
			[i, s],
		)
	);
}
function Y(t) {
	return t == null ? t : "current" in t ? t.current : t;
}
function G(t, e = !1, n = !0) {
	const s = j();
	return E((a, i = null) => {
		s.cancel();
		function o() {
			O.flushSync(a);
		}
		const r = Y(t);
		if (r == null) return;
		const u = r;
		if (
			typeof u.getAnimations != "function" ||
			globalThis.BASE_UI_ANIMATIONS_DISABLED
		)
			a();
		else {
			let f = function () {
					const l = x.startingStyle;
					if (!u.hasAttribute(l)) {
						s.request(g);
						return;
					}
					const d = new MutationObserver(() => {
						u.hasAttribute(l) || (d.disconnect(), g());
					});
					(d.observe(u, { attributes: !0, attributeFilter: [l] }),
						i?.addEventListener("abort", () => d.disconnect(), { once: !0 }));
				},
				g = function () {
					Promise.all(u.getAnimations().map((l) => l.finished))
						.then(() => {
							i?.aborted || o();
						})
						.catch(() => {
							const l = u.getAnimations();
							if (n) {
								if (i?.aborted) return;
								o();
							} else
								l.length > 0 &&
									l.some((d) => d.pending || d.playState !== "finished") &&
									g();
						});
				};
			if (e) {
				f();
				return;
			}
			s.request(g);
		}
	});
}
function Et(t) {
	const { enabled: e = !0, open: n, ref: s, onComplete: a } = t,
		i = E(a),
		o = G(s, n, !1);
	c.useEffect(() => {
		if (!e) return;
		const r = new AbortController();
		return (
			o(i, r.signal),
			() => {
				r.abort();
			}
		);
	}, [e, n, i, o]);
}
const P = {
		clipPath: "inset(50%)",
		overflow: "hidden",
		whiteSpace: "nowrap",
		border: 0,
		padding: 0,
		width: 1,
		height: 1,
		margin: -1,
	},
	xt = { ...P, position: "fixed", top: 0, left: 0 },
	kt = { ...P, position: "absolute" },
	wt = c.forwardRef(function (e, n) {
		const { className: s, render: a, orientation: i = "horizontal", ...o } = e;
		return D("div", e, {
			state: { orientation: i },
			ref: n,
			props: [{ role: "separator", "aria-orientation": i }, o],
		});
	}),
	V = (t) => {
		let e;
		const n = new Set(),
			s = (f, g) => {
				const l = typeof f == "function" ? f(e) : f;
				if (!Object.is(l, e)) {
					const d = e;
					((e =
						(g ?? (typeof l != "object" || l === null))
							? l
							: Object.assign({}, e, l)),
						n.forEach((h) => h(e, d)));
				}
			},
			a = () => e,
			r = {
				setState: s,
				getState: a,
				getInitialState: () => u,
				subscribe: (f) => (n.add(f), () => n.delete(f)),
			},
			u = (e = t(s, a, r));
		return r;
	},
	K = (t) => (t ? V(t) : V),
	z = (t) => t;
function W(t, e = z) {
	const n = S.useSyncExternalStore(
		t.subscribe,
		S.useCallback(() => e(t.getState()), [t, e]),
		S.useCallback(() => e(t.getInitialState()), [t, e]),
	);
	return (S.useDebugValue(n), n);
}
const A = (t) => {
		const e = K(t),
			n = (s) => W(e, s);
		return (Object.assign(n, e), n);
	},
	Vt = (t) => (t ? A(t) : A);
let M = (function (t) {
	return (
		(t.disabled = "data-disabled"),
		(t.valid = "data-valid"),
		(t.invalid = "data-invalid"),
		(t.touched = "data-touched"),
		(t.dirty = "data-dirty"),
		(t.filled = "data-filled"),
		(t.focused = "data-focused"),
		t
	);
})({});
const J = {
		badInput: !1,
		customError: !1,
		patternMismatch: !1,
		rangeOverflow: !1,
		rangeUnderflow: !1,
		stepMismatch: !1,
		tooLong: !1,
		tooShort: !1,
		typeMismatch: !1,
		valid: null,
		valueMissing: !1,
	},
	At = {
		valid(t) {
			return t === null ? null : t ? { [M.valid]: "" } : { [M.invalid]: "" };
		},
	},
	Q = c.createContext({
		invalid: void 0,
		name: void 0,
		validityData: {
			state: J,
			errors: [],
			error: "",
			value: "",
			initialValue: null,
		},
		setValidityData: m,
		disabled: void 0,
		touched: !1,
		setTouched: m,
		dirty: !1,
		setDirty: m,
		filled: !1,
		setFilled: m,
		focused: !1,
		setFocused: m,
		validate: () => null,
		validationMode: "onSubmit",
		validationDebounceTime: 0,
		shouldValidateOnChange: () => !1,
		state: {
			disabled: !1,
			valid: null,
			touched: !1,
			dirty: !1,
			filled: !1,
			focused: !1,
		},
		markedDirtyRef: { current: !1 },
		validation: {
			getValidationProps: (t = C) => t,
			getInputValidationProps: (t = C) => t,
			inputRef: { current: null },
			commit: async () => {},
		},
	});
function X(t = !0) {
	const e = c.useContext(Q);
	if (e.setValidityData === m && !t) throw new Error(F(28));
	return e;
}
const Z = c.createContext({
	formRef: { current: { fields: new Map() } },
	errors: {},
	clearErrors: m,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: !1 },
});
function tt() {
	return c.useContext(Z);
}
const et = c.createContext({
	controlId: void 0,
	registerControlId: m,
	labelId: void 0,
	setLabelId: m,
	messageIds: [],
	setMessageIds: m,
	getDescriptionProps: (t) => t,
});
function Mt() {
	return c.useContext(et);
}
function nt(t, e) {
	return { ...t, state: { ...t.state, valid: !e && t.state.valid } };
}
function Ot(t) {
	const {
			enabled: e = !0,
			value: n,
			id: s,
			name: a,
			controlRef: i,
			commit: o,
		} = t,
		{ formRef: r } = tt(),
		{
			invalid: u,
			markedDirtyRef: f,
			validityData: g,
			setValidityData: l,
		} = X(),
		d = E(t.getValue);
	(p(() => {
		if (!e) return;
		let h = n;
		(h === void 0 && (h = d()),
			g.initialValue === null &&
				h !== null &&
				l((v) => ({ ...v, initialValue: h })));
	}, [e, l, n, g.initialValue, d]),
		p(() => {
			!e ||
				!s ||
				r.current.fields.set(s, {
					getValue: d,
					name: a,
					controlRef: i,
					validityData: nt(g, u),
					validate(h = !0) {
						let v = n;
						(v === void 0 && (v = d()),
							(f.current = !0),
							h ? O.flushSync(() => o(v)) : o(v));
					},
				});
		}, [o, i, e, r, d, s, u, f, a, g, n]),
		p(() => {
			const h = r.current.fields;
			return () => {
				s && h.delete(s);
			};
		}, [r, s]));
}
export {
	b as A,
	Ot as B,
	At as C,
	ft as D,
	tt as E,
	kt as F,
	wt as S,
	x as T,
	U as a,
	ot as b,
	yt as c,
	H as d,
	ht as e,
	lt as f,
	gt as g,
	Et as h,
	dt as i,
	it as j,
	pt as k,
	mt as l,
	bt as m,
	Vt as n,
	ut as o,
	j as p,
	rt as q,
	Y as r,
	vt as s,
	ct as t,
	It as u,
	xt as v,
	Ct as w,
	Mt as x,
	X as y,
	St as z,
};
