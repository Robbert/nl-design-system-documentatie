"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48433],
 {
  48433: (e, t, r) => {
   r.d(t, { cI: () => we });
   var s = r(50959),
    a = (e) => "checkbox" === e.type,
    i = (e) => e instanceof Date,
    n = (e) => null == e;
   const o = (e) => "object" == typeof e;
   var u = (e) => !n(e) && !Array.isArray(e) && o(e) && !i(e),
    l = (e) => (u(e) && e.target ? (a(e.target) ? e.target.checked : e.target.value) : e),
    d = (e, t) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
    c = (e) => {
     const t = e.constructor && e.constructor.prototype;
     return u(t) && t.hasOwnProperty("isPrototypeOf");
    },
    f = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;
   function y(e) {
    let t;
    const r = Array.isArray(e);
    if (e instanceof Date) t = new Date(e);
    else if (e instanceof Set) t = new Set(e);
    else {
     if ((f && (e instanceof Blob || e instanceof FileList)) || (!r && !u(e))) return e;
     if (((t = r ? [] : {}), r || c(e))) for (const r in e) e.hasOwnProperty(r) && (t[r] = y(e[r]));
     else t = e;
    }
    return t;
   }
   var m = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
    h = (e) => void 0 === e,
    v = (e, t, r) => {
     if (!t || !u(e)) return r;
     const s = m(t.split(/[,[\].]+?/)).reduce((e, t) => (n(e) ? e : e[t]), e);
     return h(s) || s === e ? (h(e[t]) ? r : e[t]) : s;
    },
    g = (e) => "boolean" == typeof e;
   const p = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
    b = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
    _ = "max",
    V = "min",
    A = "maxLength",
    w = "minLength",
    S = "pattern",
    F = "required",
    x = "validate";
   s.createContext(null);
   var D = (e, t, r, s = !0) => {
     const a = { defaultValues: t._defaultValues };
     for (const i in e)
      Object.defineProperty(a, i, {
       get: () => {
        const a = i;
        return t._proxyFormState[a] !== b.all && (t._proxyFormState[a] = !s || b.all), r && (r[a] = !0), e[a];
       },
      });
     return a;
    },
    k = (e) => u(e) && !Object.keys(e).length,
    O = (e, t, r, s) => {
     r(e);
     const { name: a, ...i } = e;
     return k(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e) => t[e] === (!s || b.all));
    },
    C = (e) => (Array.isArray(e) ? e : [e]);
   function E(e) {
    const t = s.useRef(e);
    (t.current = e),
     s.useEffect(() => {
      const r = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
       r && r.unsubscribe();
      };
     }, [e.disabled]);
   }
   var T = (e) => "string" == typeof e,
    L = (e, t, r, s, a) => (T(e) ? (s && t.watch.add(e), v(r, e, a)) : Array.isArray(e) ? e.map((e) => (s && t.watch.add(e), v(r, e))) : (s && (t.watchAll = !0), r));
   var U = (e) => /^\w*$/.test(e),
    j = (e) => m(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
    B = (e, t, r) => {
     let s = -1;
     const a = U(t) ? [t] : j(t),
      i = a.length,
      n = i - 1;
     for (; ++s < i; ) {
      const t = a[s];
      let i = r;
      if (s !== n) {
       const r = e[t];
       i = u(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
      }
      (e[t] = i), (e = e[t]);
     }
     return e;
    };
   var N = (e, t, r, s, a) => (t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [s]: a || !0 } } : {}),
    M = (e) => ({ isOnSubmit: !e || e === b.onSubmit, isOnBlur: e === b.onBlur, isOnChange: e === b.onChange, isOnAll: e === b.all, isOnTouch: e === b.onTouched }),
    q = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
   const P = (e, t, r, s) => {
    for (const a of r || Object.keys(e)) {
     const r = v(e, a);
     if (r) {
      const { _f: e, ...i } = r;
      if (e) {
       if (e.refs && e.refs[0] && t(e.refs[0], a) && !s) break;
       if (e.ref && t(e.ref, e.name) && !s) break;
       P(i, t);
      } else u(i) && P(i, t);
     }
    }
   };
   var R = (e, t, r) => {
     const s = m(v(e, r));
     return B(s, "root", t[r]), B(e, r, s), e;
    },
    I = (e) => "file" === e.type,
    H = (e) => "function" == typeof e,
    $ = (e) => {
     if (!f) return !1;
     const t = e ? e.ownerDocument : 0;
     return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
    },
    W = (e) => T(e),
    G = (e) => "radio" === e.type,
    z = (e) => e instanceof RegExp;
   const J = { value: !1, isValid: !1 },
    K = { value: !0, isValid: !0 };
   var Q = (e) => {
    if (Array.isArray(e)) {
     if (e.length > 1) {
      const t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
      return { value: t, isValid: !!t.length };
     }
     return e[0].checked && !e[0].disabled ? (e[0].attributes && !h(e[0].attributes.value) ? (h(e[0].value) || "" === e[0].value ? K : { value: e[0].value, isValid: !0 }) : K) : J;
    }
    return J;
   };
   const X = { isValid: !1, value: null };
   var Y = (e) => (Array.isArray(e) ? e.reduce((e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e), X) : X);
   function Z(e, t, r = "validate") {
    if (W(e) || (Array.isArray(e) && e.every(W)) || (g(e) && !e)) return { type: r, message: W(e) ? e : "", ref: t };
   }
   var ee = (e) => (u(e) && !z(e) ? e : { value: e, message: "" }),
    te = async (e, t, r, s, i) => {
     const { ref: o, refs: l, required: d, maxLength: c, minLength: f, min: y, max: m, pattern: p, validate: b, name: D, valueAsNumber: O, mount: C, disabled: E } = e._f,
      L = v(t, D);
     if (!C || E) return {};
     const U = l ? l[0] : o,
      j = (e) => {
       s && U.reportValidity && (U.setCustomValidity(g(e) ? "" : e || ""), U.reportValidity());
      },
      B = {},
      M = G(o),
      q = a(o),
      P = M || q,
      R = ((O || I(o)) && h(o.value) && h(L)) || ($(o) && "" === o.value) || "" === L || (Array.isArray(L) && !L.length),
      J = N.bind(null, D, r, B),
      K = (e, t, r, s = A, a = w) => {
       const i = e ? t : r;
       B[D] = { type: e ? s : a, message: i, ref: o, ...J(e ? s : a, i) };
      };
     if (i ? !Array.isArray(L) || !L.length : d && ((!P && (R || n(L))) || (g(L) && !L) || (q && !Q(l).isValid) || (M && !Y(l).isValid))) {
      const { value: e, message: t } = W(d) ? { value: !!d, message: d } : ee(d);
      if (e && ((B[D] = { type: F, message: t, ref: U, ...J(F, t) }), !r)) return j(t), B;
     }
     if (!(R || (n(y) && n(m)))) {
      let e, t;
      const s = ee(m),
       a = ee(y);
      if (n(L) || isNaN(L)) {
       const r = o.valueAsDate || new Date(L),
        i = (e) => new Date(new Date().toDateString() + " " + e),
        n = "time" == o.type,
        u = "week" == o.type;
       T(s.value) && L && (e = n ? i(L) > i(s.value) : u ? L > s.value : r > new Date(s.value)), T(a.value) && L && (t = n ? i(L) < i(a.value) : u ? L < a.value : r < new Date(a.value));
      } else {
       const r = o.valueAsNumber || (L ? +L : L);
       n(s.value) || (e = r > s.value), n(a.value) || (t = r < a.value);
      }
      if ((e || t) && (K(!!e, s.message, a.message, _, V), !r)) return j(B[D].message), B;
     }
     if ((c || f) && !R && (T(L) || (i && Array.isArray(L)))) {
      const e = ee(c),
       t = ee(f),
       s = !n(e.value) && L.length > +e.value,
       a = !n(t.value) && L.length < +t.value;
      if ((s || a) && (K(s, e.message, t.message), !r)) return j(B[D].message), B;
     }
     if (p && !R && T(L)) {
      const { value: e, message: t } = ee(p);
      if (z(e) && !L.match(e) && ((B[D] = { type: S, message: t, ref: o, ...J(S, t) }), !r)) return j(t), B;
     }
     if (b)
      if (H(b)) {
       const e = Z(await b(L, t), U);
       if (e && ((B[D] = { ...e, ...J(x, e.message) }), !r)) return j(e.message), B;
      } else if (u(b)) {
       let e = {};
       for (const s in b) {
        if (!k(e) && !r) break;
        const a = Z(await b[s](L, t), U, s);
        a && ((e = { ...a, ...J(s, a.message) }), j(a.message), r && (B[D] = e));
       }
       if (!k(e) && ((B[D] = { ref: U, ...e }), !r)) return B;
      }
     return j(!0), B;
    };
   function re(e, t) {
    const r = Array.isArray(t) ? t : U(t) ? [t] : j(t),
     s =
      1 === r.length
       ? e
       : (function (e, t) {
          const r = t.slice(0, -1).length;
          let s = 0;
          for (; s < r; ) e = h(e) ? s++ : e[t[s++]];
          return e;
         })(e, r),
     a = r.length - 1,
     i = r[a];
    return (
     s && delete s[i],
     0 !== a &&
      ((u(s) && k(s)) ||
       (Array.isArray(s) &&
        (function (e) {
         for (const t in e) if (e.hasOwnProperty(t) && !h(e[t])) return !1;
         return !0;
        })(s))) &&
      re(e, r.slice(0, -1)),
     e
    );
   }
   var se = () => {
     let e = [];
     return {
      get observers() {
       return e;
      },
      next: (t) => {
       for (const r of e) r.next && r.next(t);
      },
      subscribe: (t) => (
       e.push(t),
       {
        unsubscribe: () => {
         e = e.filter((e) => e !== t);
        },
       }
      ),
      unsubscribe: () => {
       e = [];
      },
     };
    },
    ae = (e) => n(e) || !o(e);
   function ie(e, t) {
    if (ae(e) || ae(t)) return e === t;
    if (i(e) && i(t)) return e.getTime() === t.getTime();
    const r = Object.keys(e),
     s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (const a of r) {
     const r = e[a];
     if (!s.includes(a)) return !1;
     if ("ref" !== a) {
      const e = t[a];
      if ((i(r) && i(e)) || (u(r) && u(e)) || (Array.isArray(r) && Array.isArray(e)) ? !ie(r, e) : r !== e) return !1;
     }
    }
    return !0;
   }
   var ne = (e) => "select-multiple" === e.type,
    oe = (e) => G(e) || a(e),
    ue = (e) => $(e) && e.isConnected,
    le = (e) => {
     for (const t in e) if (H(e[t])) return !0;
     return !1;
    };
   function de(e, t = {}) {
    const r = Array.isArray(e);
    if (u(e) || r) for (const s in e) Array.isArray(e[s]) || (u(e[s]) && !le(e[s])) ? ((t[s] = Array.isArray(e[s]) ? [] : {}), de(e[s], t[s])) : n(e[s]) || (t[s] = !0);
    return t;
   }
   function ce(e, t, r) {
    const s = Array.isArray(e);
    if (u(e) || s) for (const a in e) Array.isArray(e[a]) || (u(e[a]) && !le(e[a])) ? (h(t) || ae(r[a]) ? (r[a] = Array.isArray(e[a]) ? de(e[a], []) : { ...de(e[a]) }) : ce(e[a], n(t) ? {} : t[a], r[a])) : (r[a] = !ie(e[a], t[a]));
    return r;
   }
   var fe = (e, t) => ce(e, t, de(t)),
    ye = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => (h(e) ? e : t ? ("" === e ? NaN : e ? +e : e) : r && T(e) ? new Date(e) : s ? s(e) : e);
   function me(e) {
    const t = e.ref;
    if (!(e.refs ? e.refs.every((e) => e.disabled) : t.disabled)) return I(t) ? t.files : G(t) ? Y(e.refs).value : ne(t) ? [...t.selectedOptions].map(({ value: e }) => e) : a(t) ? Q(e.refs).value : ye(h(t.value) ? e.ref.value : t.value, e);
   }
   var he = (e, t, r, s) => {
     const a = {};
     for (const i of e) {
      const e = v(t, i);
      e && B(a, i, e._f);
     }
     return { criteriaMode: r, names: [...e], fields: a, shouldUseNativeValidation: s };
    },
    ve = (e) => (h(e) ? e : z(e) ? e.source : u(e) ? (z(e.value) ? e.value.source : e.value) : e),
    ge = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
   function pe(e, t, r) {
    const s = v(e, r);
    if (s || U(r)) return { error: s, name: r };
    const a = r.split(".");
    for (; a.length; ) {
     const s = a.join("."),
      i = v(t, s),
      n = v(e, s);
     if (i && !Array.isArray(i) && r !== s) return { name: r };
     if (n && n.type) return { name: s, error: n };
     a.pop();
    }
    return { name: r };
   }
   var be = (e, t, r, s, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? s.isOnBlur : a.isOnBlur) ? !e : !(r ? s.isOnChange : a.isOnChange) || e),
    _e = (e, t) => !m(v(e, t)).length && re(e, t);
   const Ve = { mode: b.onSubmit, reValidateMode: b.onChange, shouldFocusError: !0 };
   function Ae(e = {}, t) {
    let r,
     s = { ...Ve, ...e },
     o = { submitCount: 0, isDirty: !1, isLoading: H(s.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, errors: s.errors || {}, disabled: !1 },
     c = {},
     _ = ((u(s.defaultValues) || u(s.values)) && y(s.defaultValues || s.values)) || {},
     V = s.shouldUnregister ? {} : y(_),
     A = { action: !1, mount: !1, watch: !1 },
     w = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
     S = 0;
    const F = { isDirty: !1, dirtyFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
     x = { values: se(), array: se(), state: se() },
     D = e.resetOptions && e.resetOptions.keepDirtyValues,
     O = M(s.mode),
     E = M(s.reValidateMode),
     U = s.criteriaMode === b.all,
     j = async (e) => {
      if (F.isValid || e) {
       const e = s.resolver ? k((await J()).errors) : await K(c, !0);
       e !== o.isValid && x.state.next({ isValid: e });
      }
     },
     N = (e) => F.isValidating && x.state.next({ isValidating: e }),
     W = (e, t, r, s) => {
      const a = v(c, e);
      if (a) {
       const i = v(V, e, h(r) ? v(_, e) : r);
       h(i) || (s && s.defaultChecked) || t ? B(V, e, t ? i : me(a._f)) : Y(e, i), A.mount && j();
      }
     },
     G = (e, t, r, s, a) => {
      let i = !1,
       n = !1;
      const u = { name: e },
       l = !(!v(c, e) || !v(c, e)._f.disabled);
      if (!r || s) {
       F.isDirty && ((n = o.isDirty), (o.isDirty = u.isDirty = Q()), (i = n !== u.isDirty));
       const r = l || ie(v(_, e), t);
       (n = !(l || !v(o.dirtyFields, e))), r || l ? re(o.dirtyFields, e) : B(o.dirtyFields, e, !0), (u.dirtyFields = o.dirtyFields), (i = i || (F.dirtyFields && n !== !r));
      }
      if (r) {
       const t = v(o.touchedFields, e);
       t || (B(o.touchedFields, e, r), (u.touchedFields = o.touchedFields), (i = i || (F.touchedFields && t !== r)));
      }
      return i && a && x.state.next(u), i ? u : {};
     },
     z = (t, s, a, i) => {
      const n = v(o.errors, t),
       u = F.isValid && g(s) && o.isValid !== s;
      var l;
      if (
       (e.delayError && a
        ? ((l = () =>
           ((e, t) => {
            B(o.errors, e, t), x.state.next({ errors: o.errors });
           })(t, a)),
          (r = (e) => {
           clearTimeout(S), (S = setTimeout(l, e));
          }),
          r(e.delayError))
        : (clearTimeout(S), (r = null), a ? B(o.errors, t, a) : re(o.errors, t)),
       (a ? !ie(n, a) : n) || !k(i) || u)
      ) {
       const e = { ...i, ...(u && g(s) ? { isValid: s } : {}), errors: o.errors, name: t };
       (o = { ...o, ...e }), x.state.next(e);
      }
      N(!1);
     },
     J = async (e) => s.resolver(V, s.context, he(e || w.mount, c, s.criteriaMode, s.shouldUseNativeValidation)),
     K = async (e, t, r = { valid: !0 }) => {
      for (const a in e) {
       const i = e[a];
       if (i) {
        const { _f: e, ...a } = i;
        if (e) {
         const a = w.array.has(e.name),
          n = await te(i, V, U, s.shouldUseNativeValidation && !t, a);
         if (n[e.name] && ((r.valid = !1), t)) break;
         !t && (v(n, e.name) ? (a ? R(o.errors, n, e.name) : B(o.errors, e.name, n[e.name])) : re(o.errors, e.name));
        }
        a && (await K(a, t, r));
       }
      }
      return r.valid;
     },
     Q = (e, t) => (e && t && B(V, e, t), !ie(Ae(), _)),
     X = (e, t, r) => L(e, w, { ...(A.mount ? V : h(t) ? _ : T(e) ? { [e]: t } : t) }, r, t),
     Y = (e, t, r = {}) => {
      const s = v(c, e);
      let i = t;
      if (s) {
       const r = s._f;
       r && (!r.disabled && B(V, e, ye(t, r)), (i = $(r.ref) && n(t) ? "" : t), ne(r.ref) ? [...r.ref.options].forEach((e) => (e.selected = i.includes(e.value))) : r.refs ? (a(r.ref) ? (r.refs.length > 1 ? r.refs.forEach((e) => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(i) ? !!i.find((t) => t === e.value) : i === e.value)) : r.refs[0] && (r.refs[0].checked = !!i)) : r.refs.forEach((e) => (e.checked = e.value === i))) : I(r.ref) ? (r.ref.value = "") : ((r.ref.value = i), r.ref.type || x.values.next({ name: e, values: { ...V } })));
      }
      (r.shouldDirty || r.shouldTouch) && G(e, i, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && ce(e);
     },
     Z = (e, t, r) => {
      for (const s in t) {
       const a = t[s],
        n = `${e}.${s}`,
        o = v(c, n);
       (!w.array.has(e) && ae(a) && (!o || o._f)) || i(a) ? Y(n, a, r) : Z(n, a, r);
      }
     },
     ee = (e, r, s = {}) => {
      const a = v(c, e),
       i = w.array.has(e),
       u = y(r);
      B(V, e, u), i ? (x.array.next({ name: e, values: { ...V } }), (F.isDirty || F.dirtyFields) && s.shouldDirty && x.state.next({ name: e, dirtyFields: fe(_, V), isDirty: Q(e, u) })) : !a || a._f || n(u) ? Y(e, u, s) : Z(e, u, s), q(e, w) && x.state.next({ ...o }), x.values.next({ name: e, values: { ...V } }), !A.mount && t();
     },
     le = async (e) => {
      const t = e.target;
      let a = t.name,
       i = !0;
      const n = v(c, a),
       u = (e) => {
        i = Number.isNaN(e) || e === v(V, a, e);
       };
      if (n) {
       let d, f;
       const y = t.type ? me(n._f) : l(e),
        m = e.type === p.BLUR || e.type === p.FOCUS_OUT,
        h = (!ge(n._f) && !s.resolver && !v(o.errors, a) && !n._f.deps) || be(m, v(o.touchedFields, a), o.isSubmitted, E, O),
        g = q(a, w, m);
       B(V, a, y), m ? (n._f.onBlur && n._f.onBlur(e), r && r(0)) : n._f.onChange && n._f.onChange(e);
       const b = G(a, y, m, !1),
        _ = !k(b) || g;
       if ((!m && x.values.next({ name: a, type: e.type, values: { ...V } }), h)) return F.isValid && j(), _ && x.state.next({ name: a, ...(g ? {} : b) });
       if ((!m && g && x.state.next({ ...o }), N(!0), s.resolver)) {
        const { errors: e } = await J([a]);
        if ((u(y), i)) {
         const t = pe(o.errors, c, a),
          r = pe(e, c, t.name || a);
         (d = r.error), (a = r.name), (f = k(e));
        }
       } else (d = (await te(n, V, U, s.shouldUseNativeValidation))[a]), u(y), i && (d ? (f = !1) : F.isValid && (f = await K(c, !0)));
       i && (n._f.deps && ce(n._f.deps), z(a, f, d, b));
      }
     },
     de = (e, t) => {
      if (v(o.errors, t) && e.focus) return e.focus(), 1;
     },
     ce = async (e, t = {}) => {
      let r, a;
      const i = C(e);
      if ((N(!0), s.resolver)) {
       const t = await (async (e) => {
        const { errors: t } = await J(e);
        if (e)
         for (const r of e) {
          const e = v(t, r);
          e ? B(o.errors, r, e) : re(o.errors, r);
         }
        else o.errors = t;
        return t;
       })(h(e) ? e : i);
       (r = k(t)), (a = e ? !i.some((e) => v(t, e)) : r);
      } else
       e
        ? ((a = (
           await Promise.all(
            i.map(async (e) => {
             const t = v(c, e);
             return await K(t && t._f ? { [e]: t } : t);
            })
           )
          ).every(Boolean)),
          (a || o.isValid) && j())
        : (a = r = await K(c));
      return x.state.next({ ...(!T(e) || (F.isValid && r !== o.isValid) ? {} : { name: e }), ...(s.resolver || !e ? { isValid: r } : {}), errors: o.errors, isValidating: !1 }), t.shouldFocus && !a && P(c, de, e ? i : w.mount), a;
     },
     Ae = (e) => {
      const t = { ..._, ...(A.mount ? V : {}) };
      return h(e) ? t : T(e) ? v(t, e) : e.map((e) => v(t, e));
     },
     we = (e, t) => ({ invalid: !!v((t || o).errors, e), isDirty: !!v((t || o).dirtyFields, e), isTouched: !!v((t || o).touchedFields, e), error: v((t || o).errors, e) }),
     Se = (e, t, r) => {
      const s = (v(c, e, { _f: {} })._f || {}).ref;
      B(o.errors, e, { ...t, ref: s }), x.state.next({ name: e, errors: o.errors, isValid: !1 }), r && r.shouldFocus && s && s.focus && s.focus();
     },
     Fe = (e, t = {}) => {
      for (const r of e ? C(e) : w.mount) w.mount.delete(r), w.array.delete(r), t.keepValue || (re(c, r), re(V, r)), !t.keepError && re(o.errors, r), !t.keepDirty && re(o.dirtyFields, r), !t.keepTouched && re(o.touchedFields, r), !s.shouldUnregister && !t.keepDefaultValue && re(_, r);
      x.values.next({ values: { ...V } }), x.state.next({ ...o, ...(t.keepDirty ? { isDirty: Q() } : {}) }), !t.keepIsValid && j();
     },
     xe = ({ disabled: e, name: t, field: r, fields: s, value: a }) => {
      if (g(e)) {
       const i = e ? void 0 : h(a) ? me(r ? r._f : v(s, t)._f) : a;
       B(V, t, i), G(t, i, !1, !1, !0);
      }
     },
     De = (e, t = {}) => {
      let r = v(c, e);
      const a = g(t.disabled);
      return (
       B(c, e, { ...(r || {}), _f: { ...(r && r._f ? r._f : { ref: { name: e } }), name: e, mount: !0, ...t } }),
       w.mount.add(e),
       r ? xe({ field: r, disabled: t.disabled, name: e, value: t.value }) : W(e, !0, t.value),
       {
        ...(a ? { disabled: t.disabled } : {}),
        ...(s.progressive ? { required: !!t.required, min: ve(t.min), max: ve(t.max), minLength: ve(t.minLength), maxLength: ve(t.maxLength), pattern: ve(t.pattern) } : {}),
        name: e,
        onChange: le,
        onBlur: le,
        ref: (a) => {
         if (a) {
          De(e, t), (r = v(c, e));
          const s = (h(a.value) && a.querySelectorAll && a.querySelectorAll("input,select,textarea")[0]) || a,
           i = oe(s),
           n = r._f.refs || [];
          if (i ? n.find((e) => e === s) : s === r._f.ref) return;
          B(c, e, { _f: { ...r._f, ...(i ? { refs: [...n.filter(ue), s, ...(Array.isArray(v(_, e)) ? [{}] : [])], ref: { type: s.type, name: e } } : { ref: s }) } }), W(e, !1, void 0, s);
         } else (r = v(c, e, {})), r._f && (r._f.mount = !1), (s.shouldUnregister || t.shouldUnregister) && (!d(w.array, e) || !A.action) && w.unMount.add(e);
        },
       }
      );
     },
     ke = () => s.shouldFocusError && P(c, de, w.mount),
     Oe = (e, t) => async (r) => {
      r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
      let a = y(V);
      if ((x.state.next({ isSubmitting: !0 }), s.resolver)) {
       const { errors: e, values: t } = await J();
       (o.errors = e), (a = t);
      } else await K(c);
      re(o.errors, "root"), k(o.errors) ? (x.state.next({ errors: {} }), await e(a, r)) : (t && (await t({ ...o.errors }, r)), ke(), setTimeout(ke)), x.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: k(o.errors), submitCount: o.submitCount + 1, errors: o.errors });
     },
     Ce = (r, s = {}) => {
      const a = r ? y(r) : _,
       i = y(a),
       n = r && !k(r) ? i : _;
      if ((s.keepDefaultValues || (_ = a), !s.keepValues)) {
       if (s.keepDirtyValues || D) for (const e of w.mount) v(o.dirtyFields, e) ? B(n, e, v(V, e)) : ee(e, v(n, e));
       else {
        if (f && h(r))
         for (const e of w.mount) {
          const t = v(c, e);
          if (t && t._f) {
           const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
           if ($(e)) {
            const t = e.closest("form");
            if (t) {
             t.reset();
             break;
            }
           }
          }
         }
        c = {};
       }
       (V = e.shouldUnregister ? (s.keepDefaultValues ? y(_) : {}) : y(n)), x.array.next({ values: { ...n } }), x.values.next({ values: { ...n } });
      }
      (w = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: "" }), !A.mount && t(), (A.mount = !F.isValid || !!s.keepIsValid), (A.watch = !!e.shouldUnregister), x.state.next({ submitCount: s.keepSubmitCount ? o.submitCount : 0, isDirty: s.keepDirty ? o.isDirty : !(!s.keepDefaultValues || ie(r, _)), isSubmitted: !!s.keepIsSubmitted && o.isSubmitted, dirtyFields: s.keepDirtyValues ? o.dirtyFields : s.keepDefaultValues && r ? fe(_, r) : {}, touchedFields: s.keepTouched ? o.touchedFields : {}, errors: s.keepErrors ? o.errors : {}, isSubmitSuccessful: !!s.keepIsSubmitSuccessful && o.isSubmitSuccessful, isSubmitting: !1 });
     },
     Ee = (e, t) => Ce(H(e) ? e(V) : e, t);
    return {
     control: {
      register: De,
      unregister: Fe,
      getFieldState: we,
      handleSubmit: Oe,
      setError: Se,
      _executeSchema: J,
      _getWatch: X,
      _getDirty: Q,
      _updateValid: j,
      _removeUnmounted: () => {
       for (const e of w.unMount) {
        const t = v(c, e);
        t && (t._f.refs ? t._f.refs.every((e) => !ue(e)) : !ue(t._f.ref)) && Fe(e);
       }
       w.unMount = new Set();
      },
      _updateFieldArray: (e, t = [], r, s, a = !0, i = !0) => {
       if (s && r) {
        if (((A.action = !0), i && Array.isArray(v(c, e)))) {
         const t = r(v(c, e), s.argA, s.argB);
         a && B(c, e, t);
        }
        if (i && Array.isArray(v(o.errors, e))) {
         const t = r(v(o.errors, e), s.argA, s.argB);
         a && B(o.errors, e, t), _e(o.errors, e);
        }
        if (F.touchedFields && i && Array.isArray(v(o.touchedFields, e))) {
         const t = r(v(o.touchedFields, e), s.argA, s.argB);
         a && B(o.touchedFields, e, t);
        }
        F.dirtyFields && (o.dirtyFields = fe(_, V)), x.state.next({ name: e, isDirty: Q(e, t), dirtyFields: o.dirtyFields, errors: o.errors, isValid: o.isValid });
       } else B(V, e, t);
      },
      _updateDisabledField: xe,
      _getFieldArray: (t) => m(v(A.mount ? V : _, t, e.shouldUnregister ? v(_, t, []) : [])),
      _reset: Ce,
      _resetDefaultValues: () =>
       H(s.defaultValues) &&
       s.defaultValues().then((e) => {
        Ee(e, s.resetOptions), x.state.next({ isLoading: !1 });
       }),
      _updateFormState: (e) => {
       o = { ...o, ...e };
      },
      _disableForm: (e) => {
       g(e) &&
        (x.state.next({ disabled: e }),
        P(
         c,
         (t, r) => {
          let s = e;
          const a = v(c, r);
          a && g(a._f.disabled) && (s || (s = a._f.disabled)), (t.disabled = s);
         },
         0,
         !1
        ));
      },
      _subjects: x,
      _proxyFormState: F,
      _setErrors: (e) => {
       (o.errors = e), x.state.next({ errors: o.errors, isValid: !1 });
      },
      get _fields() {
       return c;
      },
      get _formValues() {
       return V;
      },
      get _state() {
       return A;
      },
      set _state(e) {
       A = e;
      },
      get _defaultValues() {
       return _;
      },
      get _names() {
       return w;
      },
      set _names(e) {
       w = e;
      },
      get _formState() {
       return o;
      },
      set _formState(e) {
       o = e;
      },
      get _options() {
       return s;
      },
      set _options(e) {
       s = { ...s, ...e };
      },
     },
     trigger: ce,
     register: De,
     handleSubmit: Oe,
     watch: (e, t) => (H(e) ? x.values.subscribe({ next: (r) => e(X(void 0, t), r) }) : X(e, t, !0)),
     setValue: ee,
     getValues: Ae,
     reset: Ee,
     resetField: (e, t = {}) => {
      v(c, e) && (h(t.defaultValue) ? ee(e, v(_, e)) : (ee(e, t.defaultValue), B(_, e, t.defaultValue)), t.keepTouched || re(o.touchedFields, e), t.keepDirty || (re(o.dirtyFields, e), (o.isDirty = t.defaultValue ? Q(e, v(_, e)) : Q())), t.keepError || (re(o.errors, e), F.isValid && j()), x.state.next({ ...o }));
     },
     clearErrors: (e) => {
      e && C(e).forEach((e) => re(o.errors, e)), x.state.next({ errors: e ? o.errors : {} });
     },
     unregister: Fe,
     setError: Se,
     setFocus: (e, t = {}) => {
      const r = v(c, e),
       s = r && r._f;
      if (s) {
       const e = s.refs ? s.refs[0] : s.ref;
       e.focus && (e.focus(), t.shouldSelect && e.select());
      }
     },
     getFieldState: we,
    };
   }
   function we(e = {}) {
    const t = s.useRef(),
     r = s.useRef(),
     [a, i] = s.useState({ isDirty: !1, isValidating: !1, isLoading: H(e.defaultValues), isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, submitCount: 0, dirtyFields: {}, touchedFields: {}, errors: e.errors || {}, disabled: !1, defaultValues: H(e.defaultValues) ? void 0 : e.defaultValues });
    t.current || (t.current = { ...Ae(e, () => i((e) => ({ ...e }))), formState: a });
    const n = t.current.control;
    return (
     (n._options = e),
     E({
      subject: n._subjects.state,
      next: (e) => {
       O(e, n._proxyFormState, n._updateFormState, !0) && i({ ...n._formState });
      },
     }),
     s.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]),
     s.useEffect(() => {
      if (n._proxyFormState.isDirty) {
       const e = n._getDirty();
       e !== a.isDirty && n._subjects.state.next({ isDirty: e });
      }
     }, [n, a.isDirty]),
     s.useEffect(() => {
      e.values && !ie(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), (r.current = e.values), i((e) => ({ ...e }))) : n._resetDefaultValues();
     }, [e.values, n]),
     s.useEffect(() => {
      e.errors && n._setErrors(e.errors);
     }, [e.errors, n]),
     s.useEffect(() => {
      n._state.mount || (n._updateValid(), (n._state.mount = !0)), n._state.watch && ((n._state.watch = !1), n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
     }),
     (t.current.formState = D(a, n)),
     t.current
    );
   }
  },
 },
]);
