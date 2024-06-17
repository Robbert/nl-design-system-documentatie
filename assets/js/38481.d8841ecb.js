"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [38481],
 {
  38481: (e, t, r) => {
   function n(e, t) {
    var r = void 0;
    return function () {
     for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
     r && clearTimeout(r),
      (r = setTimeout(function () {
       return e.apply(void 0, o);
      }, t));
    };
   }
   function o(e) {
    return e !== Object(e);
   }
   function i(e, t) {
    if (e === t) return !0;
    if (o(e) || o(t) || "function" == typeof e || "function" == typeof t) return e === t;
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var r = 0, n = Object.keys(e); r < n.length; r++) {
     var a = n[r];
     if (!(a in t)) return !1;
     if (!i(e[a], t[a])) return !1;
    }
    return !0;
   }
   r.r(t), r.d(t, { DocSearchModal: () => pn });
   var a = function () {};
   function c(e) {
    var t = e.item,
     r = e.items;
    return {
     index: t.__autocomplete_indexName,
     items: [t],
     positions: [
      1 +
       r.findIndex(function (e) {
        return e.objectID === t.objectID;
       }),
     ],
     queryID: t.__autocomplete_queryID,
     algoliaSource: ["autocomplete"],
    };
   }
   function l(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null != r) {
       var n,
        o,
        i,
        a,
        c = [],
        l = !0,
        u = !1;
       try {
        if (((i = (r = r.call(e)).next), 0 === t)) {
         if (Object(r) !== r) return;
         l = !1;
        } else for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
       } catch (s) {
        (u = !0), (o = s);
       } finally {
        try {
         if (!l && null != r.return && ((a = r.return()), Object(a) !== a)) return;
        } finally {
         if (u) throw o;
        }
       }
       return c;
      }
     })(e, t) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return u(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t);
     })(e, t) ||
     (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   var s = ["items"],
    f = ["items"];
   function m(e) {
    return (
     (m =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     m(e)
    );
   }
   function p(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return v(e);
     })(e) ||
     (function (e) {
      if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return v(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t);
     })(e) ||
     (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function v(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function d(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function h(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? y(Object(r), !0).forEach(function (t) {
         b(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : y(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function b(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== m(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== m(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === m(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function g(e) {
    return e.map(function (e) {
     var t = e.items,
      r = d(e, s);
     return h(
      h({}, r),
      {},
      {
       objectIDs:
        (null == t
         ? void 0
         : t.map(function (e) {
            return e.objectID;
           })) || r.objectIDs,
      },
     );
    });
   }
   function O(e) {
    var t,
     r,
     n,
     o = ((t = l((e.version || "").split(".").map(Number), 2)), (r = t[0]), (n = t[1]), r >= 3 || (2 === r && n >= 4) || (1 === r && n >= 10));
    function i(t, r, n) {
     if (o && void 0 !== n) {
      var i = n[0].__autocomplete_algoliaCredentials,
       a = { "X-Algolia-Application-Id": i.appId, "X-Algolia-API-Key": i.apiKey };
      e.apply(void 0, [t].concat(p(r), [{ headers: a }]));
     } else e.apply(void 0, [t].concat(p(r)));
    }
    return {
     init: function (t, r) {
      e("init", { appId: t, apiKey: r });
     },
     setUserToken: function (t) {
      e("setUserToken", t);
     },
     clickedObjectIDsAfterSearch: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i("clickedObjectIDsAfterSearch", g(t), t[0].items);
     },
     clickedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i("clickedObjectIDs", g(t), t[0].items);
     },
     clickedFilters: function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
      r.length > 0 && e.apply(void 0, ["clickedFilters"].concat(r));
     },
     convertedObjectIDsAfterSearch: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i("convertedObjectIDsAfterSearch", g(t), t[0].items);
     },
     convertedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i("convertedObjectIDs", g(t), t[0].items);
     },
     convertedFilters: function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
      r.length > 0 && e.apply(void 0, ["convertedFilters"].concat(r));
     },
     viewedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 &&
       t
        .reduce(function (e, t) {
         var r = t.items,
          n = d(t, f);
         return [].concat(
          p(e),
          p(
           (function (e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, r = [], n = 0; n < e.objectIDs.length; n += t) r.push(h(h({}, e), {}, { objectIDs: e.objectIDs.slice(n, n + t) }));
            return r;
           })(
            h(
             h({}, n),
             {},
             {
              objectIDs:
               (null == r
                ? void 0
                : r.map(function (e) {
                   return e.objectID;
                  })) || n.objectIDs,
             },
            ),
           ).map(function (e) {
            return { items: r, payload: e };
           }),
          ),
         );
        }, [])
        .forEach(function (e) {
         var t = e.items;
         return i("viewedObjectIDs", [e.payload], t);
        });
     },
     viewedFilters: function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
      r.length > 0 && e.apply(void 0, ["viewedFilters"].concat(r));
     },
    };
   }
   function S(e) {
    var t = e.items.reduce(function (e, t) {
     var r;
     return (e[t.__autocomplete_indexName] = (null !== (r = e[t.__autocomplete_indexName]) && void 0 !== r ? r : []).concat(t)), e;
    }, {});
    return Object.keys(t).map(function (e) {
     return { index: e, items: t[e], algoliaSource: ["autocomplete"] };
    });
   }
   function j(e) {
    return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID;
   }
   function w(e) {
    return (
     (w =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     w(e)
    );
   }
   function E(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return P(e);
     })(e) ||
     (function (e) {
      if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return P(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(e, t);
     })(e) ||
     (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function P(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function I(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function D(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? I(Object(r), !0).forEach(function (t) {
         A(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : I(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function A(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== w(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== w(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === w(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   var k = "2.6.0",
    _ = "https://cdn.jsdelivr.net/npm/search-insights@".concat(k, "/dist/search-insights.min.js"),
    x = n(function (e) {
     var t = e.onItemsChange,
      r = e.items,
      n = e.insights,
      o = e.state;
     t({
      insights: n,
      insightsEvents: S({ items: r }).map(function (e) {
       return D({ eventName: "Items Viewed" }, e);
      }),
      state: o,
     });
    }, 400);
   function C(e) {
    var t = (function (e) {
      return D(
       {
        onItemsChange: function (e) {
         var t = e.insights,
          r = e.insightsEvents;
         t.viewedObjectIDs.apply(
          t,
          E(
           r.map(function (e) {
            return D(D({}, e), {}, { algoliaSource: [].concat(E(e.algoliaSource || []), ["autocomplete-internal"]) });
           }),
          ),
         );
        },
        onSelect: function (e) {
         var t = e.insights,
          r = e.insightsEvents;
         t.clickedObjectIDsAfterSearch.apply(
          t,
          E(
           r.map(function (e) {
            return D(D({}, e), {}, { algoliaSource: [].concat(E(e.algoliaSource || []), ["autocomplete-internal"]) });
           }),
          ),
         );
        },
        onActive: a,
       },
       e,
      );
     })(e),
     r = t.insightsClient,
     o = t.onItemsChange,
     l = t.onSelect,
     u = t.onActive,
     s = r;
    r ||
     (function (e) {
      if ("undefined" != typeof window) e({ window: window });
     })(function (e) {
      var t = e.window,
       r = t.AlgoliaAnalyticsObject || "aa";
      "string" == typeof r && (s = t[r]),
       s ||
        ((t.AlgoliaAnalyticsObject = r),
        t[r] ||
         (t[r] = function () {
          t[r].queue || (t[r].queue = []);
          for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
          t[r].queue.push(n);
         }),
        (t[r].version = k),
        (s = t[r]),
        (function (e) {
         var t = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
         try {
          var r = e.document.createElement("script");
          (r.async = !0),
           (r.src = _),
           (r.onerror = function () {
            console.error(t);
           }),
           document.body.appendChild(r);
         } catch (n) {
          console.error(t);
         }
        })(t));
     });
    var f = O(s),
     m = { current: [] },
     p = n(function (e) {
      var t = e.state;
      if (t.isOpen) {
       var r = t.collections
        .reduce(function (e, t) {
         return [].concat(E(e), E(t.items));
        }, [])
        .filter(j);
       i(
        m.current.map(function (e) {
         return e.objectID;
        }),
        r.map(function (e) {
         return e.objectID;
        }),
       ) || ((m.current = r), r.length > 0 && x({ onItemsChange: o, items: r, insights: f, state: t }));
      }
     }, 0);
    return {
     name: "aa.algoliaInsightsPlugin",
     subscribe: function (e) {
      var t = e.setContext,
       r = e.onSelect,
       n = e.onActive;
      s("addAlgoliaAgent", "insights-plugin"),
       t({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: !0 }, insights: f } }),
       r(function (e) {
        var t = e.item,
         r = e.state,
         n = e.event;
        j(t) && l({ state: r, event: n, insights: f, item: t, insightsEvents: [D({ eventName: "Item Selected" }, c({ item: t, items: m.current }))] });
       }),
       n(function (e) {
        var t = e.item,
         r = e.state,
         n = e.event;
        j(t) && u({ state: r, event: n, insights: f, item: t, insightsEvents: [D({ eventName: "Item Active" }, c({ item: t, items: m.current }))] });
       });
     },
     onStateChange: function (e) {
      var t = e.state;
      p({ state: t });
     },
     __autocomplete_pluginOptions: e,
    };
   }
   function N(e) {
    return (
     (N =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     N(e)
    );
   }
   function T(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function R(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== N(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== N(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === N(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function q(e, t, r) {
    var n,
     o = t.initialState;
    return {
     getState: function () {
      return o;
     },
     dispatch: function (n, i) {
      var a = (function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
         ? T(Object(r), !0).forEach(function (t) {
            R(e, t, r[t]);
           })
         : Object.getOwnPropertyDescriptors
           ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
           : T(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
             });
       }
       return e;
      })({}, o);
      (o = e(o, { type: n, props: t, payload: i })), r({ state: o, prevState: a });
     },
     pendingRequests:
      ((n = []),
      {
       add: function (e) {
        return (
         n.push(e),
         e.finally(function () {
          n = n.filter(function (t) {
           return t !== e;
          });
         })
        );
       },
       cancelAll: function () {
        n.forEach(function (e) {
         return e.cancel();
        });
       },
       isEmpty: function () {
        return 0 === n.length;
       },
      }),
    };
   }
   function L(e) {
    return e.reduce(function (e, t) {
     return e.concat(t);
    }, []);
   }
   function M(e) {
    return (
     (M =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     M(e)
    );
   }
   function H(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function F(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? H(Object(r), !0).forEach(function (t) {
         U(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : H(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function U(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== M(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== M(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === M(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function B(e) {
    return 0 === e.collections.length
     ? 0
     : e.collections.reduce(function (e, t) {
        return e + t.items.length;
       }, 0);
   }
   var V = 0;
   function K(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function $(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? K(Object(r), !0).forEach(function (t) {
         J(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : K(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function J(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== z(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== z(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === z(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function z(e) {
    return (
     (z =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     z(e)
    );
   }
   function Q(e) {
    return (
     (Q =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     Q(e)
    );
   }
   function W(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return Z(e);
     })(e) ||
     (function (e) {
      if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Z(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Z(e, t);
     })(e) ||
     (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function Z(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function G(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function X(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? G(Object(r), !0).forEach(function (t) {
         Y(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : G(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Y(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== Q(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== Q(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === Q(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function ee(e, t) {
    var r,
     n = "undefined" != typeof window ? window : {},
     o = e.plugins || [];
    return X(
     X(
      {
       debug: !1,
       openOnFocus: !1,
       placeholder: "",
       autoFocus: !1,
       defaultActiveItemId: null,
       stallThreshold: 300,
       insights: !1,
       environment: n,
       shouldPanelOpen: function (e) {
        return B(e.state) > 0;
       },
       reshape: function (e) {
        return e.sources;
       },
      },
      e,
     ),
     {},
     {
      id: null !== (r = e.id) && void 0 !== r ? r : "autocomplete-".concat(V++),
      plugins: o,
      initialState: X({ activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} }, e.initialState),
      onStateChange: function (t) {
       var r;
       null === (r = e.onStateChange) || void 0 === r || r.call(e, t),
        o.forEach(function (e) {
         var r;
         return null === (r = e.onStateChange) || void 0 === r ? void 0 : r.call(e, t);
        });
      },
      onSubmit: function (t) {
       var r;
       null === (r = e.onSubmit) || void 0 === r || r.call(e, t),
        o.forEach(function (e) {
         var r;
         return null === (r = e.onSubmit) || void 0 === r ? void 0 : r.call(e, t);
        });
      },
      onReset: function (t) {
       var r;
       null === (r = e.onReset) || void 0 === r || r.call(e, t),
        o.forEach(function (e) {
         var r;
         return null === (r = e.onReset) || void 0 === r ? void 0 : r.call(e, t);
        });
      },
      getSources: function (r) {
       return Promise.all(
        []
         .concat(
          W(
           o.map(function (e) {
            return e.getSources;
           }),
          ),
          [e.getSources],
         )
         .filter(Boolean)
         .map(function (e) {
          return (function (e, t) {
           var r = [];
           return Promise.resolve(e(t)).then(function (e) {
            return (
             Array.isArray(e),
             Promise.all(
              e
               .filter(function (e) {
                return Boolean(e);
               })
               .map(function (e) {
                if ((e.sourceId, r.includes(e.sourceId))) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
                r.push(e.sourceId);
                var t = {
                 getItemInputValue: function (e) {
                  return e.state.query;
                 },
                 getItemUrl: function () {},
                 onSelect: function (e) {
                  (0, e.setIsOpen)(!1);
                 },
                 onActive: a,
                 onResolve: a,
                };
                Object.keys(t).forEach(function (e) {
                 t[e].__default = !0;
                });
                var n = $($({}, t), e);
                return Promise.resolve(n);
               }),
             )
            );
           });
          })(e, r);
         }),
       )
        .then(function (e) {
         return L(e);
        })
        .then(function (e) {
         return e.map(function (e) {
          return X(
           X({}, e),
           {},
           {
            onSelect: function (r) {
             e.onSelect(r),
              t.forEach(function (e) {
               var t;
               return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, r);
              });
            },
            onActive: function (r) {
             e.onActive(r),
              t.forEach(function (e) {
               var t;
               return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, r);
              });
            },
            onResolve: function (r) {
             e.onResolve(r),
              t.forEach(function (e) {
               var t;
               return null === (t = e.onResolve) || void 0 === t ? void 0 : t.call(e, r);
              });
            },
           },
          );
         });
        });
      },
      navigator: X(
       {
        navigate: function (e) {
         var t = e.itemUrl;
         n.location.assign(t);
        },
        navigateNewTab: function (e) {
         var t = e.itemUrl,
          r = n.open(t, "_blank", "noopener");
         null == r || r.focus();
        },
        navigateNewWindow: function (e) {
         var t = e.itemUrl;
         n.open(t, "_blank", "noopener");
        },
       },
       e.navigator,
      ),
     },
    );
   }
   function te(e) {
    return (
     (te =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     te(e)
    );
   }
   function re(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function ne(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? re(Object(r), !0).forEach(function (t) {
         oe(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : re(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function oe(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== te(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== te(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === te(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function ie(e) {
    return (
     (ie =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     ie(e)
    );
   }
   function ae(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function ce(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? ae(Object(r), !0).forEach(function (t) {
         le(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ae(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function le(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== ie(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== ie(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === ie(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function ue(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return se(e);
     })(e) ||
     (function (e) {
      if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return se(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return se(e, t);
     })(e) ||
     (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function se(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function fe(e) {
    return Boolean(e.execute);
   }
   function me(e, t, r) {
    if (((o = e), Boolean(null == o ? void 0 : o.execute))) {
     var n =
      "algolia" === e.requesterId
       ? Object.assign.apply(
          Object,
          [{}].concat(
           ue(
            Object.keys(r.context).map(function (e) {
             var t;
             return null === (t = r.context[e]) || void 0 === t ? void 0 : t.__algoliaSearchParameters;
            }),
           ),
          ),
         )
       : {};
     return ce(
      ce({}, e),
      {},
      {
       requests: e.queries.map(function (r) {
        return { query: "algolia" === e.requesterId ? ce(ce({}, r), {}, { params: ce(ce({}, n), r.params) }) : r, sourceId: t, transformResponse: e.transformResponse };
       }),
      },
     );
    }
    var o;
    return { items: e, sourceId: t };
   }
   function pe(e) {
    var t = e
     .reduce(function (e, t) {
      if (!fe(t)) return e.push(t), e;
      var r = t.searchClient,
       n = t.execute,
       o = t.requesterId,
       i = t.requests,
       a = e.find(function (e) {
        return fe(t) && fe(e) && e.searchClient === r && Boolean(o) && e.requesterId === o;
       });
      if (a) {
       var c;
       (c = a.items).push.apply(c, ue(i));
      } else {
       var l = { execute: n, requesterId: o, items: i, searchClient: r };
       e.push(l);
      }
      return e;
     }, [])
     .map(function (e) {
      if (!fe(e)) return Promise.resolve(e);
      var t = e,
       r = t.execute,
       n = t.items;
      return r({ searchClient: t.searchClient, requests: n });
     });
    return Promise.all(t).then(function (e) {
     return L(e);
    });
   }
   function ve(e, t, r) {
    return t.map(function (t) {
     var n,
      o = e.filter(function (e) {
       return e.sourceId === t.sourceId;
      }),
      i = o.map(function (e) {
       return e.items;
      }),
      a = o[0].transformResponse,
      c = a
       ? a({
          results: (n = i),
          hits: n
           .map(function (e) {
            return e.hits;
           })
           .filter(Boolean),
          facetHits: n
           .map(function (e) {
            var t;
            return null === (t = e.facetHits) || void 0 === t
             ? void 0
             : t.map(function (e) {
                return { label: e.value, count: e.count, _highlightResult: { label: { value: e.highlighted } } };
               });
           })
           .filter(Boolean),
         })
       : i;
     return t.onResolve({ source: t, results: i, items: c, state: r.getState() }), Array.isArray(c), c.every(Boolean), 'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t, items: c };
    });
   }
   function de(e, t) {
    var r = t;
    return {
     then: function (t, n) {
      return de(e.then(be(t, r, e), be(n, r, e)), r);
     },
     catch: function (t) {
      return de(e.catch(be(t, r, e)), r);
     },
     finally: function (t) {
      return (
       t && r.onCancelList.push(t),
       de(
        e.finally(
         be(
          t &&
           function () {
            return (r.onCancelList = []), t();
           },
          r,
          e,
         ),
        ),
        r,
       )
      );
     },
     cancel: function () {
      r.isCanceled = !0;
      var e = r.onCancelList;
      (r.onCancelList = []),
       e.forEach(function (e) {
        e();
       });
     },
     isCanceled: function () {
      return !0 === r.isCanceled;
     },
    };
   }
   function ye(e) {
    return de(
     new Promise(function (t, r) {
      return e(t, r);
     }),
     { isCanceled: !1, onCancelList: [] },
    );
   }
   function he(e) {
    return de(e, { isCanceled: !1, onCancelList: [] });
   }
   function be(e, t, r) {
    return e
     ? function (r) {
        return t.isCanceled ? r : e(r);
       }
     : r;
   }
   function ge(e) {
    var t = (function (e) {
     var t = e.collections
      .map(function (e) {
       return e.items.length;
      })
      .reduce(function (e, t, r) {
       var n = (e[r - 1] || 0) + t;
       return e.push(n), e;
      }, [])
      .reduce(function (t, r) {
       return r <= e.activeItemId ? t + 1 : t;
      }, 0);
     return e.collections[t];
    })(e);
    if (!t) return null;
    var r =
      t.items[
       (function (e) {
        for (var t = e.state, r = e.collection, n = !1, o = 0, i = 0; !1 === n; ) {
         var a = t.collections[o];
         if (a === r) {
          n = !0;
          break;
         }
         (i += a.items.length), o++;
        }
        return t.activeItemId - i;
       })({ state: e, collection: t })
      ],
     n = t.source;
    return { item: r, itemInputValue: n.getItemInputValue({ item: r, state: e }), itemUrl: n.getItemUrl({ item: r, state: e }), source: n };
   }
   function Oe(e) {
    return (
     (Oe =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     Oe(e)
    );
   }
   (ye.resolve = function (e) {
    return he(Promise.resolve(e));
   }),
    (ye.reject = function (e) {
     return he(Promise.reject(e));
    });
   var Se = ["event", "nextState", "props", "query", "refresh", "store"];
   function je(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function we(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? je(Object(r), !0).forEach(function (t) {
         Ee(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : je(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Ee(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== Oe(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== Oe(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === Oe(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Pe(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   var Ie,
    De,
    Ae,
    ke = null,
    _e =
     ((Ie = -1),
     (De = -1),
     (Ae = void 0),
     function (e) {
      var t = ++Ie;
      return Promise.resolve(e).then(function (e) {
       return Ae && t < De ? Ae : ((De = t), (Ae = e), e);
      });
     });
   function xe(e) {
    var t = e.event,
     r = e.nextState,
     n = void 0 === r ? {} : r,
     o = e.props,
     i = e.query,
     a = e.refresh,
     c = e.store,
     l = Pe(e, Se);
    ke && o.environment.clearTimeout(ke);
    var u = l.setCollections,
     s = l.setIsOpen,
     f = l.setQuery,
     m = l.setActiveItemId,
     p = l.setStatus;
    if ((f(i), m(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
     var v,
      d = c.getState().collections.map(function (e) {
       return we(we({}, e), {}, { items: [] });
      });
     p("idle"), u(d), s(null !== (v = n.isOpen) && void 0 !== v ? v : o.shouldPanelOpen({ state: c.getState() }));
     var y = he(
      _e(d).then(function () {
       return Promise.resolve();
      }),
     );
     return c.pendingRequests.add(y);
    }
    p("loading"),
     (ke = o.environment.setTimeout(function () {
      p("stalled");
     }, o.stallThreshold));
    var h = he(
     _e(
      o.getSources(we({ query: i, refresh: a, state: c.getState() }, l)).then(function (e) {
       return Promise.all(
        e.map(function (e) {
         return Promise.resolve(e.getItems(we({ query: i, refresh: a, state: c.getState() }, l))).then(function (t) {
          return me(t, e.sourceId, c.getState());
         });
        }),
       )
        .then(pe)
        .then(function (t) {
         return ve(t, e, c);
        })
        .then(function (e) {
         return (function (e) {
          var t = e.collections,
           r = e.props,
           n = e.state,
           o = t.reduce(function (e, t) {
            return ne(
             ne({}, e),
             {},
             oe(
              {},
              t.source.sourceId,
              ne(
               ne({}, t.source),
               {},
               {
                getItems: function () {
                 return L(t.items);
                },
               },
              ),
             ),
            );
           }, {}),
           i = r.plugins.reduce(
            function (e, t) {
             return t.reshape ? t.reshape(e) : e;
            },
            { sourcesBySourceId: o, state: n },
           ).sourcesBySourceId;
          return L(r.reshape({ sourcesBySourceId: i, sources: Object.values(i), state: n }))
           .filter(Boolean)
           .map(function (e) {
            return { source: e, items: e.getItems() };
           });
         })({ collections: e, props: o, state: c.getState() });
        });
      }),
     ),
    )
     .then(function (e) {
      var r;
      p("idle"), u(e);
      var f = o.shouldPanelOpen({ state: c.getState() });
      s(null !== (r = n.isOpen) && void 0 !== r ? r : (o.openOnFocus && !i && f) || f);
      var m = ge(c.getState());
      if (null !== c.getState().activeItemId && m) {
       var v = m.item,
        d = m.itemInputValue,
        y = m.itemUrl,
        h = m.source;
       h.onActive(we({ event: t, item: v, itemInputValue: d, itemUrl: y, refresh: a, source: h, state: c.getState() }, l));
      }
     })
     .finally(function () {
      p("idle"), ke && o.environment.clearTimeout(ke);
     });
    return c.pendingRequests.add(h);
   }
   function Ce(e) {
    return (
     (Ce =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     Ce(e)
    );
   }
   var Ne = ["event", "props", "refresh", "store"];
   function Te(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Re(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? Te(Object(r), !0).forEach(function (t) {
         qe(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Te(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function qe(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== Ce(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== Ce(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === Ce(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Le(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   var Me = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
   function He(e) {
    return (
     (He =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     He(e)
    );
   }
   var Fe = ["props", "refresh", "store"],
    Ue = ["inputElement", "formElement", "panelElement"],
    Be = ["inputElement"],
    Ve = ["inputElement", "maxLength"],
    Ke = ["sourceIndex"],
    $e = ["sourceIndex"],
    Je = ["item", "source", "sourceIndex"];
   function ze(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Qe(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? ze(Object(r), !0).forEach(function (t) {
         We(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ze(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function We(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== He(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== He(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === He(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Ze(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function Ge(e) {
    var t = e.props,
     r = e.refresh,
     n = e.store,
     o = Ze(e, Fe),
     i = function (e, t) {
      return void 0 !== t ? "".concat(e, "-").concat(t) : e;
     };
    return {
     getEnvironmentProps: function (e) {
      var r = e.inputElement,
       o = e.formElement,
       i = e.panelElement;
      function a(e) {
       (!n.getState().isOpen && n.pendingRequests.isEmpty()) ||
        e.target === r ||
        (!1 ===
         [o, i].some(function (t) {
          return (r = t), (n = e.target), r === n || r.contains(n);
          var r, n;
         }) &&
         (n.dispatch("blur", null), t.debug || n.pendingRequests.cancelAll()));
      }
      return Qe(
       {
        onTouchStart: a,
        onMouseDown: a,
        onTouchMove: function (e) {
         !1 !== n.getState().isOpen && r === t.environment.document.activeElement && e.target !== r && r.blur();
        },
       },
       Ze(e, Ue),
      );
     },
     getRootProps: function (e) {
      return Qe({ role: "combobox", "aria-expanded": n.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": n.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label") }, e);
     },
     getFormProps: function (e) {
      e.inputElement;
      return Qe(
       {
        action: "",
        noValidate: !0,
        role: "search",
        onSubmit: function (i) {
         var a;
         i.preventDefault(), t.onSubmit(Qe({ event: i, refresh: r, state: n.getState() }, o)), n.dispatch("submit", null), null === (a = e.inputElement) || void 0 === a || a.blur();
        },
        onReset: function (i) {
         var a;
         i.preventDefault(), t.onReset(Qe({ event: i, refresh: r, state: n.getState() }, o)), n.dispatch("reset", null), null === (a = e.inputElement) || void 0 === a || a.focus();
        },
       },
       Ze(e, Be),
      );
     },
     getLabelProps: function (e) {
      var r = e || {},
       n = r.sourceIndex,
       o = Ze(r, Ke);
      return Qe({ htmlFor: "".concat(i(t.id, n), "-input"), id: "".concat(i(t.id, n), "-label") }, o);
     },
     getInputProps: function (e) {
      var i;
      function c(e) {
       (t.openOnFocus || Boolean(n.getState().query)) && xe(Qe({ event: e, props: t, query: n.getState().completion || n.getState().query, refresh: r, store: n }, o)), n.dispatch("focus", null);
      }
      var l = e || {},
       u = (l.inputElement, l.maxLength),
       s = void 0 === u ? 512 : u,
       f = Ze(l, Ve),
       m = ge(n.getState()),
       p = (function (e) {
        return Boolean(e && e.match(Me));
       })((null === (i = t.environment.navigator) || void 0 === i ? void 0 : i.userAgent) || ""),
       v = null != m && m.itemUrl && !p ? "go" : "search";
      return Qe(
       {
        "aria-autocomplete": "both",
        "aria-activedescendant": n.getState().isOpen && null !== n.getState().activeItemId ? "".concat(t.id, "-item-").concat(n.getState().activeItemId) : void 0,
        "aria-controls": n.getState().isOpen ? "".concat(t.id, "-list") : void 0,
        "aria-labelledby": "".concat(t.id, "-label"),
        value: n.getState().completion || n.getState().query,
        id: "".concat(t.id, "-input"),
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        enterKeyHint: v,
        spellCheck: "false",
        autoFocus: t.autoFocus,
        placeholder: t.placeholder,
        maxLength: s,
        type: "search",
        onChange: function (e) {
         xe(Qe({ event: e, props: t, query: e.currentTarget.value.slice(0, s), refresh: r, store: n }, o));
        },
        onKeyDown: function (e) {
         !(function (e) {
          var t = e.event,
           r = e.props,
           n = e.refresh,
           o = e.store,
           i = Le(e, Ne);
          if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
           var a = function () {
             var e = r.environment.document.getElementById("".concat(r.id, "-item-").concat(o.getState().activeItemId));
             e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1));
            },
            c = function () {
             var e = ge(o.getState());
             if (null !== o.getState().activeItemId && e) {
              var r = e.item,
               a = e.itemInputValue,
               c = e.itemUrl,
               l = e.source;
              l.onActive(Re({ event: t, item: r, itemInputValue: a, itemUrl: c, refresh: n, source: l, state: o.getState() }, i));
             }
            };
           t.preventDefault(),
            !1 === o.getState().isOpen && (r.openOnFocus || Boolean(o.getState().query))
             ? xe(Re({ event: t, props: r, query: o.getState().query, refresh: n, store: o }, i)).then(function () {
                o.dispatch(t.key, { nextActiveItemId: r.defaultActiveItemId }), c(), setTimeout(a, 0);
               })
             : (o.dispatch(t.key, {}), c(), a());
          } else if ("Escape" === t.key) t.preventDefault(), o.dispatch(t.key, null), o.pendingRequests.cancelAll();
          else if ("Tab" === t.key) o.dispatch("blur", null), o.pendingRequests.cancelAll();
          else if ("Enter" === t.key) {
           if (
            null === o.getState().activeItemId ||
            o.getState().collections.every(function (e) {
             return 0 === e.items.length;
            })
           )
            return void (r.debug || o.pendingRequests.cancelAll());
           t.preventDefault();
           var l = ge(o.getState()),
            u = l.item,
            s = l.itemInputValue,
            f = l.itemUrl,
            m = l.source;
           if (t.metaKey || t.ctrlKey) void 0 !== f && (m.onSelect(Re({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), r.navigator.navigateNewTab({ itemUrl: f, item: u, state: o.getState() }));
           else if (t.shiftKey) void 0 !== f && (m.onSelect(Re({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), r.navigator.navigateNewWindow({ itemUrl: f, item: u, state: o.getState() }));
           else if (t.altKey);
           else {
            if (void 0 !== f) return m.onSelect(Re({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), void r.navigator.navigate({ itemUrl: f, item: u, state: o.getState() });
            xe(Re({ event: t, nextState: { isOpen: !1 }, props: r, query: s, refresh: n, store: o }, i)).then(function () {
             m.onSelect(Re({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i));
            });
           }
          }
         })(Qe({ event: e, props: t, refresh: r, store: n }, o));
        },
        onFocus: c,
        onBlur: a,
        onClick: function (r) {
         e.inputElement !== t.environment.document.activeElement || n.getState().isOpen || c(r);
        },
       },
       f,
      );
     },
     getPanelProps: function (e) {
      return Qe(
       {
        onMouseDown: function (e) {
         e.preventDefault();
        },
        onMouseLeave: function () {
         n.dispatch("mouseleave", null);
        },
       },
       e,
      );
     },
     getListProps: function (e) {
      var r = e || {},
       n = r.sourceIndex,
       o = Ze(r, $e);
      return Qe({ role: "listbox", "aria-labelledby": "".concat(i(t.id, n), "-label"), id: "".concat(i(t.id, n), "-list") }, o);
     },
     getItemProps: function (e) {
      var a = e.item,
       c = e.source,
       l = e.sourceIndex,
       u = Ze(e, Je);
      return Qe(
       {
        id: "".concat(i(t.id, l), "-item-").concat(a.__autocomplete_id),
        role: "option",
        "aria-selected": n.getState().activeItemId === a.__autocomplete_id,
        onMouseMove: function (e) {
         if (a.__autocomplete_id !== n.getState().activeItemId) {
          n.dispatch("mousemove", a.__autocomplete_id);
          var t = ge(n.getState());
          if (null !== n.getState().activeItemId && t) {
           var i = t.item,
            c = t.itemInputValue,
            l = t.itemUrl,
            u = t.source;
           u.onActive(Qe({ event: e, item: i, itemInputValue: c, itemUrl: l, refresh: r, source: u, state: n.getState() }, o));
          }
         }
        },
        onMouseDown: function (e) {
         e.preventDefault();
        },
        onClick: function (e) {
         var i = c.getItemInputValue({ item: a, state: n.getState() }),
          l = c.getItemUrl({ item: a, state: n.getState() });
         (l ? Promise.resolve() : xe(Qe({ event: e, nextState: { isOpen: !1 }, props: t, query: i, refresh: r, store: n }, o))).then(function () {
          c.onSelect(Qe({ event: e, item: a, itemInputValue: i, itemUrl: l, refresh: r, source: c, state: n.getState() }, o));
         });
        },
       },
       u,
      );
     },
    };
   }
   var Xe = [{ segment: "autocomplete-core", version: "1.9.3" }];
   function Ye(e) {
    return (
     (Ye =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     Ye(e)
    );
   }
   function et(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function tt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? et(Object(r), !0).forEach(function (t) {
         rt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : et(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function rt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== Ye(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== Ye(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === Ye(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function nt(e) {
    var t,
     r,
     n,
     o,
     i = e.plugins,
     a = e.options,
     c = null === (t = ((null === (r = a.__autocomplete_metadata) || void 0 === r ? void 0 : r.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment,
     l = c ? rt({}, c, Object.keys((null === (n = a.__autocomplete_metadata) || void 0 === n ? void 0 : n.options) || {})) : {};
    return {
     plugins: i.map(function (e) {
      return { name: e.name, options: Object.keys(e.__autocomplete_pluginOptions || []) };
     }),
     options: tt({ "autocomplete-core": Object.keys(a) }, l),
     ua: Xe.concat((null === (o = a.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || []),
    };
   }
   function ot(e) {
    var t,
     r = e.state;
    return !1 === r.isOpen || null === r.activeItemId ? null : (null === (t = ge(r)) || void 0 === t ? void 0 : t.itemInputValue) || null;
   }
   function it(e, t, r, n) {
    if (!r) return null;
    if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= r ? (null === n ? null : 0) : o;
   }
   function at(e) {
    return (
     (at =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     at(e)
    );
   }
   function ct(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function lt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? ct(Object(r), !0).forEach(function (t) {
         ut(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ct(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function ut(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== at(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== at(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === at(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   var st = function (e, t) {
    switch (t.type) {
     case "setActiveItemId":
     case "mousemove":
      return lt(lt({}, e), {}, { activeItemId: t.payload });
     case "setQuery":
      return lt(lt({}, e), {}, { query: t.payload, completion: null });
     case "setCollections":
      return lt(lt({}, e), {}, { collections: t.payload });
     case "setIsOpen":
      return lt(lt({}, e), {}, { isOpen: t.payload });
     case "setStatus":
      return lt(lt({}, e), {}, { status: t.payload });
     case "setContext":
      return lt(lt({}, e), {}, { context: lt(lt({}, e.context), t.payload) });
     case "ArrowDown":
      var r = lt(lt({}, e), {}, { activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : it(1, e.activeItemId, B(e), t.props.defaultActiveItemId) });
      return lt(lt({}, r), {}, { completion: ot({ state: r }) });
     case "ArrowUp":
      var n = lt(lt({}, e), {}, { activeItemId: it(-1, e.activeItemId, B(e), t.props.defaultActiveItemId) });
      return lt(lt({}, n), {}, { completion: ot({ state: n }) });
     case "Escape":
      return e.isOpen ? lt(lt({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : lt(lt({}, e), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
     case "submit":
      return lt(lt({}, e), {}, { activeItemId: null, isOpen: !1, status: "idle" });
     case "reset":
      return lt(lt({}, e), {}, { activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null, status: "idle", query: "" });
     case "focus":
      return lt(lt({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }) });
     case "blur":
      return t.props.debug ? e : lt(lt({}, e), {}, { isOpen: !1, activeItemId: null });
     case "mouseleave":
      return lt(lt({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
     default:
      return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."), e;
    }
   };
   function ft(e) {
    return (
     (ft =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     ft(e)
    );
   }
   function mt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function pt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? mt(Object(r), !0).forEach(function (t) {
         vt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mt(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function vt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ("object" !== ft(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" !== ft(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
       }
       return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === ft(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function dt(e) {
    var t = [],
     r = ee(e, t),
     n = q(st, r, function (e) {
      var t = e.prevState,
       n = e.state;
      r.onStateChange(pt({ prevState: t, state: n, refresh: a, navigator: r.navigator }, o));
     }),
     o = (function (e) {
      var t = e.store;
      return {
       setActiveItemId: function (e) {
        t.dispatch("setActiveItemId", e);
       },
       setQuery: function (e) {
        t.dispatch("setQuery", e);
       },
       setCollections: function (e) {
        var r = 0,
         n = e.map(function (e) {
          return F(
           F({}, e),
           {},
           {
            items: L(e.items).map(function (e) {
             return F(F({}, e), {}, { __autocomplete_id: r++ });
            }),
           },
          );
         });
        t.dispatch("setCollections", n);
       },
       setIsOpen: function (e) {
        t.dispatch("setIsOpen", e);
       },
       setStatus: function (e) {
        t.dispatch("setStatus", e);
       },
       setContext: function (e) {
        t.dispatch("setContext", e);
       },
      };
     })({ store: n }),
     i = Ge(pt({ props: r, refresh: a, store: n, navigator: r.navigator }, o));
    function a() {
     return xe(pt({ event: new Event("input"), nextState: { isOpen: n.getState().isOpen }, props: r, navigator: r.navigator, query: n.getState().query, refresh: a, store: n }, o));
    }
    if (
     e.insights &&
     !r.plugins.some(function (e) {
      return "aa.algoliaInsightsPlugin" === e.name;
     })
    ) {
     var c = "boolean" == typeof e.insights ? {} : e.insights;
     r.plugins.push(C(c));
    }
    return (
     r.plugins.forEach(function (e) {
      var n;
      return null === (n = e.subscribe) || void 0 === n
       ? void 0
       : n.call(
          e,
          pt(
           pt({}, o),
           {},
           {
            navigator: r.navigator,
            refresh: a,
            onSelect: function (e) {
             t.push({ onSelect: e });
            },
            onActive: function (e) {
             t.push({ onActive: e });
            },
            onResolve: function (e) {
             t.push({ onResolve: e });
            },
           },
          ),
         );
     }),
     (function (e) {
      var t,
       r,
       n = e.metadata,
       o = e.environment;
      if (null === (t = o.navigator) || void 0 === t || null === (r = t.userAgent) || void 0 === r ? void 0 : r.includes("Algolia Crawler")) {
       var i = o.document.createElement("meta"),
        a = o.document.querySelector("head");
       (i.name = "algolia:metadata"),
        setTimeout(function () {
         (i.content = JSON.stringify(n)), a.appendChild(i);
        }, 0);
      }
     })({ metadata: nt({ plugins: r.plugins, options: e }), environment: r.environment }),
     pt(pt({ refresh: a, navigator: r.navigator }, i), o)
    );
   }
   var yt = r(75271),
    ht = 64;
   function bt(e) {
    var t = e.translations,
     r = (void 0 === t ? {} : t).searchByText,
     n = void 0 === r ? "Search by" : r;
    return yt.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, yt.createElement("span", { className: "DocSearch-Label" }, n), yt.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, yt.createElement("defs", null, yt.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), yt.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), yt.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), yt.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), yt.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), yt.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), yt.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), yt.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), yt.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), yt.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
   }
   function gt(e) {
    return yt.createElement("svg", { width: "15", height: "15", "aria-label": e.ariaLabel, role: "img" }, yt.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e.children));
   }
   function Ot(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     n = r.selectText,
     o = void 0 === n ? "to select" : n,
     i = r.selectKeyAriaLabel,
     a = void 0 === i ? "Enter key" : i,
     c = r.navigateText,
     l = void 0 === c ? "to navigate" : c,
     u = r.navigateUpKeyAriaLabel,
     s = void 0 === u ? "Arrow up" : u,
     f = r.navigateDownKeyAriaLabel,
     m = void 0 === f ? "Arrow down" : f,
     p = r.closeText,
     v = void 0 === p ? "to close" : p,
     d = r.closeKeyAriaLabel,
     y = void 0 === d ? "Escape key" : d,
     h = r.searchByText,
     b = void 0 === h ? "Search by" : h;
    return yt.createElement(yt.Fragment, null, yt.createElement("div", { className: "DocSearch-Logo" }, yt.createElement(bt, { translations: { searchByText: b } })), yt.createElement("ul", { className: "DocSearch-Commands" }, yt.createElement("li", null, yt.createElement("kbd", { className: "DocSearch-Commands-Key" }, yt.createElement(gt, { ariaLabel: a }, yt.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), yt.createElement("span", { className: "DocSearch-Label" }, o)), yt.createElement("li", null, yt.createElement("kbd", { className: "DocSearch-Commands-Key" }, yt.createElement(gt, { ariaLabel: m }, yt.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), yt.createElement("kbd", { className: "DocSearch-Commands-Key" }, yt.createElement(gt, { ariaLabel: s }, yt.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), yt.createElement("span", { className: "DocSearch-Label" }, l)), yt.createElement("li", null, yt.createElement("kbd", { className: "DocSearch-Commands-Key" }, yt.createElement(gt, { ariaLabel: y }, yt.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), yt.createElement("span", { className: "DocSearch-Label" }, v))));
   }
   function St(e) {
    var t = e.hit,
     r = e.children;
    return yt.createElement("a", { href: t.url }, r);
   }
   function jt() {
    return yt.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, yt.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
   }
   function wt(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     n = r.titleText,
     o = void 0 === n ? "Unable to fetch results" : n,
     i = r.helpText,
     a = void 0 === i ? "You might want to check your network connection." : i;
    return yt.createElement("div", { className: "DocSearch-ErrorScreen" }, yt.createElement("div", { className: "DocSearch-Screen-Icon" }, yt.createElement(jt, null)), yt.createElement("p", { className: "DocSearch-Title" }, o), yt.createElement("p", { className: "DocSearch-Help" }, a));
   }
   function Et() {
    return yt.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, yt.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
   }
   var Pt = ["translations"];
   function It(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return Dt(e);
     })(e) ||
     (function (e) {
      if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Dt(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dt(e, t);
     })(e) ||
     (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function Dt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function At(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function kt(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     n = At(e, Pt),
     o = r.noResultsText,
     i = void 0 === o ? "No results for" : o,
     a = r.suggestedQueryText,
     c = void 0 === a ? "Try searching for" : a,
     l = r.reportMissingResultsText,
     u = void 0 === l ? "Believe this query should return results?" : l,
     s = r.reportMissingResultsLinkText,
     f = void 0 === s ? "Let us know." : s,
     m = n.state.context.searchSuggestions;
    return yt.createElement(
     "div",
     { className: "DocSearch-NoResults" },
     yt.createElement("div", { className: "DocSearch-Screen-Icon" }, yt.createElement(Et, null)),
     yt.createElement("p", { className: "DocSearch-Title" }, i, ' "', yt.createElement("strong", null, n.state.query), '"'),
     m &&
      m.length > 0 &&
      yt.createElement(
       "div",
       { className: "DocSearch-NoResults-Prefill-List" },
       yt.createElement("p", { className: "DocSearch-Help" }, c, ":"),
       yt.createElement(
        "ul",
        null,
        m.slice(0, 3).reduce(function (e, t) {
         return [].concat(It(e), [
          yt.createElement(
           "li",
           { key: t },
           yt.createElement(
            "button",
            {
             className: "DocSearch-Prefill",
             key: t,
             type: "button",
             onClick: function () {
              n.setQuery(t.toLowerCase() + " "), n.refresh(), n.inputRef.current.focus();
             },
            },
            t,
           ),
          ),
         ]);
        }, []),
       ),
      ),
     n.getMissingResultsUrl && yt.createElement("p", { className: "DocSearch-Help" }, "".concat(u, " "), yt.createElement("a", { href: n.getMissingResultsUrl({ query: n.state.query }), target: "_blank", rel: "noopener noreferrer" }, f)),
    );
   }
   var _t = function () {
    return yt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, yt.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
   };
   function xt(e) {
    switch (e.type) {
     case "lvl1":
      return yt.createElement(_t, null);
     case "content":
      return yt.createElement(Nt, null);
     default:
      return yt.createElement(Ct, null);
    }
   }
   function Ct() {
    return yt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, yt.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
   }
   function Nt() {
    return yt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, yt.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
   }
   function Tt() {
    return yt.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, yt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, yt.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), yt.createElement("path", { d: "M8 17l-6-6 6-6" })));
   }
   var Rt = ["hit", "attribute", "tagName"];
   function qt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Lt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? qt(Object(r), !0).forEach(function (t) {
         Mt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qt(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Mt(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
   }
   function Ht(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function Ft(e, t) {
    return t.split(".").reduce(function (e, t) {
     return null != e && e[t] ? e[t] : null;
    }, e);
   }
   function Ut(e) {
    var t = e.hit,
     r = e.attribute,
     n = e.tagName,
     o = void 0 === n ? "span" : n,
     i = Ht(e, Rt);
    return (0, yt.createElement)(o, Lt(Lt({}, i), {}, { dangerouslySetInnerHTML: { __html: Ft(t, "_snippetResult.".concat(r, ".value")) || Ft(t, r) } }));
   }
   function Bt(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null == r) return;
      var n,
       o,
       i = [],
       a = !0,
       c = !1;
      try {
       for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
      } catch (l) {
       (c = !0), (o = l);
      } finally {
       try {
        a || null == r.return || r.return();
       } finally {
        if (c) throw o;
       }
      }
      return i;
     })(e, t) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Vt(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vt(e, t);
     })(e, t) ||
     (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function Vt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function Kt() {
    return (
     (Kt =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
       }
       return e;
      }),
     Kt.apply(this, arguments)
    );
   }
   function $t(e) {
    return e.collection && 0 !== e.collection.items.length
     ? yt.createElement(
        "section",
        { className: "DocSearch-Hits" },
        yt.createElement("div", { className: "DocSearch-Hit-source" }, e.title),
        yt.createElement(
         "ul",
         e.getListProps(),
         e.collection.items.map(function (t, r) {
          return yt.createElement(Jt, Kt({ key: [e.title, t.objectID].join(":"), item: t, index: r }, e));
         }),
        ),
       )
     : null;
   }
   function Jt(e) {
    var t = e.item,
     r = e.index,
     n = e.renderIcon,
     o = e.renderAction,
     i = e.getItemProps,
     a = e.onItemClick,
     c = e.collection,
     l = e.hitComponent,
     u = Bt(yt.useState(!1), 2),
     s = u[0],
     f = u[1],
     m = Bt(yt.useState(!1), 2),
     p = m[0],
     v = m[1],
     d = yt.useRef(null),
     y = l;
    return yt.createElement(
     "li",
     Kt(
      {
       className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", s && "DocSearch-Hit--deleting", p && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "),
       onTransitionEnd: function () {
        d.current && d.current();
       },
      },
      i({
       item: t,
       source: c.source,
       onClick: function (e) {
        a(t, e);
       },
      }),
     ),
     yt.createElement(
      y,
      { hit: t },
      yt.createElement(
       "div",
       { className: "DocSearch-Hit-Container" },
       n({ item: t, index: r }),
       t.hierarchy[t.type] && "lvl1" === t.type && yt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, yt.createElement(Ut, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.lvl1" }), t.content && yt.createElement(Ut, { className: "DocSearch-Hit-path", hit: t, attribute: "content" })),
       t.hierarchy[t.type] && ("lvl2" === t.type || "lvl3" === t.type || "lvl4" === t.type || "lvl5" === t.type || "lvl6" === t.type) && yt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, yt.createElement(Ut, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.".concat(t.type) }), yt.createElement(Ut, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })),
       "content" === t.type && yt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, yt.createElement(Ut, { className: "DocSearch-Hit-title", hit: t, attribute: "content" }), yt.createElement(Ut, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })),
       o({
        item: t,
        runDeleteTransition: function (e) {
         f(!0), (d.current = e);
        },
        runFavoriteTransition: function (e) {
         v(!0), (d.current = e);
        },
       }),
      ),
     ),
    );
   }
   var zt = /(<mark>|<\/mark>)/g,
    Qt = RegExp(zt.source);
   function Wt(e) {
    var t,
     r,
     n = e;
    if (!n.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
    var o = ((n.__docsearch_parent ? (null === (t = n.__docsearch_parent) || void 0 === t || null === (t = t._highlightResult) || void 0 === t || null === (t = t.hierarchy) || void 0 === t ? void 0 : t.lvl0) : null === (r = e._highlightResult) || void 0 === r || null === (r = r.hierarchy) || void 0 === r ? void 0 : r.lvl0) || {}).value;
    return o && Qt.test(o) ? o.replace(zt, "") : o;
   }
   function Zt() {
    return (
     (Zt =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
       }
       return e;
      }),
     Zt.apply(this, arguments)
    );
   }
   function Gt(e) {
    return yt.createElement(
     "div",
     { className: "DocSearch-Dropdown-Container" },
     e.state.collections.map(function (t) {
      if (0 === t.items.length) return null;
      var r = Wt(t.items[0]);
      return yt.createElement(
       $t,
       Zt({}, e, {
        key: t.source.sourceId,
        title: r,
        collection: t,
        renderIcon: function (e) {
         var r,
          n = e.item,
          o = e.index;
         return yt.createElement(yt.Fragment, null, n.__docsearch_parent && yt.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, yt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, n.__docsearch_parent !== (null === (r = t.items[o + 1]) || void 0 === r ? void 0 : r.__docsearch_parent) ? yt.createElement("path", { d: "M8 6v21M20 27H8.3" }) : yt.createElement("path", { d: "M8 6v42M20 27H8.3" }))), yt.createElement("div", { className: "DocSearch-Hit-icon" }, yt.createElement(xt, { type: n.type })));
        },
        renderAction: function () {
         return yt.createElement("div", { className: "DocSearch-Hit-action" }, yt.createElement(Tt, null));
        },
       }),
      );
     }),
     e.resultsFooterComponent && yt.createElement("section", { className: "DocSearch-HitsFooter" }, yt.createElement(e.resultsFooterComponent, { state: e.state })),
    );
   }
   function Xt() {
    return yt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, yt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, yt.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), yt.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
   }
   function Yt() {
    return yt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, yt.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
   }
   function er() {
    return yt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, yt.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
   }
   var tr = ["translations"];
   function rr() {
    return (
     (rr =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
       }
       return e;
      }),
     rr.apply(this, arguments)
    );
   }
   function nr(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function or(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     n = nr(e, tr),
     o = r.recentSearchesTitle,
     i = void 0 === o ? "Recent" : o,
     a = r.noRecentSearchesText,
     c = void 0 === a ? "No recent searches" : a,
     l = r.saveRecentSearchButtonTitle,
     u = void 0 === l ? "Save this search" : l,
     s = r.removeRecentSearchButtonTitle,
     f = void 0 === s ? "Remove this search from history" : s,
     m = r.favoriteSearchesTitle,
     p = void 0 === m ? "Favorite" : m,
     v = r.removeFavoriteSearchButtonTitle,
     d = void 0 === v ? "Remove this search from favorites" : v;
    return "idle" === n.state.status && !1 === n.hasCollections
     ? n.disableUserPersonalization
       ? null
       : yt.createElement("div", { className: "DocSearch-StartScreen" }, yt.createElement("p", { className: "DocSearch-Help" }, c))
     : !1 === n.hasCollections
       ? null
       : yt.createElement(
          "div",
          { className: "DocSearch-Dropdown-Container" },
          yt.createElement(
           $t,
           rr({}, n, {
            title: i,
            collection: n.state.collections[0],
            renderIcon: function () {
             return yt.createElement("div", { className: "DocSearch-Hit-icon" }, yt.createElement(Xt, null));
            },
            renderAction: function (e) {
             var t = e.item,
              r = e.runFavoriteTransition,
              o = e.runDeleteTransition;
             return yt.createElement(
              yt.Fragment,
              null,
              yt.createElement(
               "div",
               { className: "DocSearch-Hit-action" },
               yt.createElement(
                "button",
                {
                 className: "DocSearch-Hit-action-button",
                 title: u,
                 type: "submit",
                 onClick: function (e) {
                  e.preventDefault(),
                   e.stopPropagation(),
                   r(function () {
                    n.favoriteSearches.add(t), n.recentSearches.remove(t), n.refresh();
                   });
                 },
                },
                yt.createElement(Yt, null),
               ),
              ),
              yt.createElement(
               "div",
               { className: "DocSearch-Hit-action" },
               yt.createElement(
                "button",
                {
                 className: "DocSearch-Hit-action-button",
                 title: f,
                 type: "submit",
                 onClick: function (e) {
                  e.preventDefault(),
                   e.stopPropagation(),
                   o(function () {
                    n.recentSearches.remove(t), n.refresh();
                   });
                 },
                },
                yt.createElement(er, null),
               ),
              ),
             );
            },
           }),
          ),
          yt.createElement(
           $t,
           rr({}, n, {
            title: p,
            collection: n.state.collections[1],
            renderIcon: function () {
             return yt.createElement("div", { className: "DocSearch-Hit-icon" }, yt.createElement(Yt, null));
            },
            renderAction: function (e) {
             var t = e.item,
              r = e.runDeleteTransition;
             return yt.createElement(
              "div",
              { className: "DocSearch-Hit-action" },
              yt.createElement(
               "button",
               {
                className: "DocSearch-Hit-action-button",
                title: d,
                type: "submit",
                onClick: function (e) {
                 e.preventDefault(),
                  e.stopPropagation(),
                  r(function () {
                   n.favoriteSearches.remove(t), n.refresh();
                  });
                },
               },
               yt.createElement(er, null),
              ),
             );
            },
           }),
          ),
         );
   }
   var ir = ["translations"];
   function ar() {
    return (
     (ar =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
       }
       return e;
      }),
     ar.apply(this, arguments)
    );
   }
   function cr(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   var lr = yt.memo(
    function (e) {
     var t = e.translations,
      r = void 0 === t ? {} : t,
      n = cr(e, ir);
     if ("error" === n.state.status) return yt.createElement(wt, { translations: null == r ? void 0 : r.errorScreen });
     var o = n.state.collections.some(function (e) {
      return e.items.length > 0;
     });
     return n.state.query ? (!1 === o ? yt.createElement(kt, ar({}, n, { translations: null == r ? void 0 : r.noResultsScreen })) : yt.createElement(Gt, n)) : yt.createElement(or, ar({}, n, { hasCollections: o, translations: null == r ? void 0 : r.startScreen }));
    },
    function (e, t) {
     return "loading" === t.state.status || "stalled" === t.state.status;
    },
   );
   function ur() {
    return yt.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, yt.createElement("g", { fill: "none", fillRule: "evenodd" }, yt.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, yt.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), yt.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, yt.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
   }
   function sr() {
    return yt.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" }, yt.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
   }
   var fr = ["translations"];
   function mr() {
    return (
     (mr =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
       }
       return e;
      }),
     mr.apply(this, arguments)
    );
   }
   function pr(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function vr(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     n = pr(e, fr),
     o = r.resetButtonTitle,
     i = void 0 === o ? "Clear the query" : o,
     a = r.resetButtonAriaLabel,
     c = void 0 === a ? "Clear the query" : a,
     l = r.cancelButtonText,
     u = void 0 === l ? "Cancel" : l,
     s = r.cancelButtonAriaLabel,
     f = void 0 === s ? "Cancel" : s,
     m = r.searchInputLabel,
     p = void 0 === m ? "Search" : m,
     v = n.getFormProps({ inputElement: n.inputRef.current }).onReset;
    return (
     yt.useEffect(
      function () {
       n.autoFocus && n.inputRef.current && n.inputRef.current.focus();
      },
      [n.autoFocus, n.inputRef],
     ),
     yt.useEffect(
      function () {
       n.isFromSelection && n.inputRef.current && n.inputRef.current.select();
      },
      [n.isFromSelection, n.inputRef],
     ),
     yt.createElement(
      yt.Fragment,
      null,
      yt.createElement(
       "form",
       {
        className: "DocSearch-Form",
        onSubmit: function (e) {
         e.preventDefault();
        },
        onReset: v,
       },
       yt.createElement("label", mr({ className: "DocSearch-MagnifierLabel" }, n.getLabelProps()), yt.createElement(sr, null), yt.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, p)),
       yt.createElement("div", { className: "DocSearch-LoadingIndicator" }, yt.createElement(ur, null)),
       yt.createElement("input", mr({ className: "DocSearch-Input", ref: n.inputRef }, n.getInputProps({ inputElement: n.inputRef.current, autoFocus: n.autoFocus, maxLength: ht }))),
       yt.createElement("button", { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": c, hidden: !n.state.query }, yt.createElement(er, null)),
      ),
      yt.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f, onClick: n.onClose }, u),
     )
    );
   }
   var dr = ["_highlightResult", "_snippetResult"];
   function yr(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function hr(e) {
    return !1 ===
     (function () {
      var e = "__TEST_KEY__";
      try {
       return localStorage.setItem(e, ""), localStorage.removeItem(e), !0;
      } catch (t) {
       return !1;
      }
     })()
     ? {
        setItem: function () {},
        getItem: function () {
         return [];
        },
       }
     : {
        setItem: function (t) {
         return window.localStorage.setItem(e, JSON.stringify(t));
        },
        getItem: function () {
         var t = window.localStorage.getItem(e);
         return t ? JSON.parse(t) : [];
        },
       };
   }
   function br(e) {
    var t = e.key,
     r = e.limit,
     n = void 0 === r ? 5 : r,
     o = hr(t),
     i = o.getItem().slice(0, n);
    return {
     add: function (e) {
      var t = e,
       r = (t._highlightResult, t._snippetResult, yr(t, dr)),
       a = i.findIndex(function (e) {
        return e.objectID === r.objectID;
       });
      a > -1 && i.splice(a, 1), i.unshift(r), (i = i.slice(0, n)), o.setItem(i);
     },
     remove: function (e) {
      (i = i.filter(function (t) {
       return t.objectID !== e.objectID;
      })),
       o.setItem(i);
     },
     getAll: function () {
      return i;
     },
    };
   }
   function gr(e) {
    const t = `algoliasearch-client-js-${e.key}`;
    let r;
    const n = () => (void 0 === r && (r = e.localStorage || window.localStorage), r),
     o = () => JSON.parse(n().getItem(t) || "{}"),
     i = (e) => {
      n().setItem(t, JSON.stringify(e));
     };
    return {
     get: (t, r, n = { miss: () => Promise.resolve() }) =>
      Promise.resolve()
       .then(() => {
        (() => {
         const t = e.timeToLive ? 1e3 * e.timeToLive : null,
          r = o(),
          n = Object.fromEntries(Object.entries(r).filter(([, e]) => void 0 !== e.timestamp));
         if ((i(n), !t)) return;
         const a = Object.fromEntries(
          Object.entries(n).filter(([, e]) => {
           const r = new Date().getTime();
           return !(e.timestamp + t < r);
          }),
         );
         i(a);
        })();
        const r = JSON.stringify(t);
        return o()[r];
       })
       .then((e) => Promise.all([e ? e.value : r(), void 0 !== e]))
       .then(([e, t]) => Promise.all([e, t || n.miss(e)]))
       .then(([e]) => e),
     set: (e, r) =>
      Promise.resolve().then(() => {
       const i = o();
       return (i[JSON.stringify(e)] = { timestamp: new Date().getTime(), value: r }), n().setItem(t, JSON.stringify(i)), r;
      }),
     delete: (e) =>
      Promise.resolve().then(() => {
       const r = o();
       delete r[JSON.stringify(e)], n().setItem(t, JSON.stringify(r));
      }),
     clear: () =>
      Promise.resolve().then(() => {
       n().removeItem(t);
      }),
    };
   }
   function Or(e) {
    const t = [...e.caches],
     r = t.shift();
    return void 0 === r
     ? {
        get: (e, t, r = { miss: () => Promise.resolve() }) =>
         t()
          .then((e) => Promise.all([e, r.miss(e)]))
          .then(([e]) => e),
        set: (e, t) => Promise.resolve(t),
        delete: (e) => Promise.resolve(),
        clear: () => Promise.resolve(),
       }
     : { get: (e, n, o = { miss: () => Promise.resolve() }) => r.get(e, n, o).catch(() => Or({ caches: t }).get(e, n, o)), set: (e, n) => r.set(e, n).catch(() => Or({ caches: t }).set(e, n)), delete: (e) => r.delete(e).catch(() => Or({ caches: t }).delete(e)), clear: () => r.clear().catch(() => Or({ caches: t }).clear()) };
   }
   function Sr(e = { serializable: !0 }) {
    let t = {};
    return {
     get(r, n, o = { miss: () => Promise.resolve() }) {
      const i = JSON.stringify(r);
      if (i in t) return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
      const a = n(),
       c = (o && o.miss) || (() => Promise.resolve());
      return a.then((e) => c(e)).then(() => a);
     },
     set: (r, n) => ((t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n), Promise.resolve(n)),
     delete: (e) => (delete t[JSON.stringify(e)], Promise.resolve()),
     clear: () => ((t = {}), Promise.resolve()),
    };
   }
   function jr(e) {
    let t = e.length - 1;
    for (; t > 0; t--) {
     const r = Math.floor(Math.random() * (t + 1)),
      n = e[t];
     (e[t] = e[r]), (e[r] = n);
    }
    return e;
   }
   function wr(e, t) {
    return t
     ? (Object.keys(t).forEach((r) => {
        e[r] = t[r](e);
       }),
       e)
     : e;
   }
   function Er(e, ...t) {
    let r = 0;
    return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
   }
   const Pr = "4.21.1",
    Ir = { WithinQueryParameters: 0, WithinHeaders: 1 };
   function Dr(e, t) {
    const r = e || {},
     n = r.data || {};
    return (
     Object.keys(r).forEach((e) => {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = r[e]);
     }),
     { data: Object.entries(n).length > 0 ? n : void 0, timeout: r.timeout || t, headers: r.headers || {}, queryParameters: r.queryParameters || {}, cacheable: r.cacheable }
    );
   }
   const Ar = { Read: 1, Write: 2, Any: 3 },
    kr = { Up: 1, Down: 2, Timeouted: 3 },
    _r = 12e4;
   function xr(e, t = kr.Up) {
    return { ...e, status: t, lastUpdate: Date.now() };
   }
   function Cr(e) {
    return "string" == typeof e ? { protocol: "https", url: e, accept: Ar.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || Ar.Any };
   }
   const Nr = { Delete: "DELETE", Get: "GET", Post: "POST", Put: "PUT" };
   function Tr(e, t) {
    return Promise.all(t.map((t) => e.get(t, () => Promise.resolve(xr(t))))).then((e) => {
     const r = e.filter((e) =>
       (function (e) {
        return e.status === kr.Up || Date.now() - e.lastUpdate > _r;
       })(e),
      ),
      n = e.filter((e) =>
       (function (e) {
        return e.status === kr.Timeouted && Date.now() - e.lastUpdate <= _r;
       })(e),
      ),
      o = [...r, ...n];
     return { getTimeout: (e, t) => (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t, statelessHosts: o.length > 0 ? o.map((e) => Cr(e)) : t };
    });
   }
   const Rr = (e, t) =>
    ((e) => {
     const t = e.status;
     return e.isTimedOut || (({ isTimedOut: e, status: t }) => !e && 0 == ~~t)(e) || (2 != ~~(t / 100) && 4 != ~~(t / 100));
    })(e)
     ? t.onRetry(e)
     : (({ status: e }) => 2 == ~~(e / 100))(e)
       ? t.onSuccess(e)
       : t.onFail(e);
   function qr(e, t, r, n) {
    const o = [],
     i = (function (e, t) {
      if (e.method === Nr.Get || (void 0 === e.data && void 0 === t.data)) return;
      const r = Array.isArray(e.data) ? e.data : { ...e.data, ...t.data };
      return JSON.stringify(r);
     })(r, n),
     a = (function (e, t) {
      const r = { ...e.headers, ...t.headers },
       n = {};
      return (
       Object.keys(r).forEach((e) => {
        const t = r[e];
        n[e.toLowerCase()] = t;
       }),
       n
      );
     })(e, n),
     c = r.method,
     l = r.method !== Nr.Get ? {} : { ...r.data, ...n.data },
     u = { "x-algolia-agent": e.userAgent.value, ...e.queryParameters, ...l, ...n.queryParameters };
    let s = 0;
    const f = (t, l) => {
     const m = t.pop();
     if (void 0 === m) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Fr(o) };
     const p = { data: i, headers: a, method: c, url: Mr(m, r.path, u), connectTimeout: l(s, e.timeouts.connect), responseTimeout: l(s, n.timeout) },
      v = (e) => {
       const r = { request: p, response: e, host: m, triesLeft: t.length };
       return o.push(r), r;
      },
      d = {
       onSuccess: (e) =>
        (function (e) {
         try {
          return JSON.parse(e.content);
         } catch (t) {
          throw (function (e, t) {
           return { name: "DeserializationError", message: e, response: t };
          })(t.message, e);
         }
        })(e),
       onRetry(r) {
        const n = v(r);
        return r.isTimedOut && s++, Promise.all([e.logger.info("Retryable failure", Ur(n)), e.hostsCache.set(m, xr(m, r.isTimedOut ? kr.Timeouted : kr.Down))]).then(() => f(t, l));
       },
       onFail(e) {
        throw (
         (v(e),
         (function ({ content: e, status: t }, r) {
          let n = e;
          try {
           n = JSON.parse(e).message;
          } catch (o) {}
          return (function (e, t, r) {
           return { name: "ApiError", message: e, status: t, transporterStackTrace: r };
          })(n, t, r);
         })(e, Fr(o)))
        );
       },
      };
     return e.requester.send(p).then((e) => Rr(e, d));
    };
    return Tr(e.hostsCache, t).then((e) => f([...e.statelessHosts].reverse(), e.getTimeout));
   }
   function Lr(e) {
    const t = {
     value: `Algolia for JavaScript (${e})`,
     add(e) {
      const r = `; ${e.segment}${void 0 !== e.version ? ` (${e.version})` : ""}`;
      return -1 === t.value.indexOf(r) && (t.value = `${t.value}${r}`), t;
     },
    };
    return t;
   }
   function Mr(e, t, r) {
    const n = Hr(r);
    let o = `${e.protocol}://${e.url}/${"/" === t.charAt(0) ? t.substr(1) : t}`;
    return n.length && (o += `?${n}`), o;
   }
   function Hr(e) {
    return Object.keys(e)
     .map((t) => {
      return Er("%s=%s", t, ((r = e[t]), "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]));
      var r;
     })
     .join("&");
   }
   function Fr(e) {
    return e.map((e) => Ur(e));
   }
   function Ur(e) {
    const t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return { ...e, request: { ...e.request, headers: { ...e.request.headers, ...t } } };
   }
   const Br = (e) => {
     const t = e.appId,
      r = (function (e, t, r) {
       const n = { "x-algolia-api-key": r, "x-algolia-application-id": t };
       return { headers: () => (e === Ir.WithinHeaders ? n : {}), queryParameters: () => (e === Ir.WithinQueryParameters ? n : {}) };
      })(void 0 !== e.authMode ? e.authMode : Ir.WithinHeaders, t, e.apiKey),
      n = (function (e) {
       const { hostsCache: t, logger: r, requester: n, requestsCache: o, responsesCache: i, timeouts: a, userAgent: c, hosts: l, queryParameters: u, headers: s } = e,
        f = {
         hostsCache: t,
         logger: r,
         requester: n,
         requestsCache: o,
         responsesCache: i,
         timeouts: a,
         userAgent: c,
         headers: s,
         queryParameters: u,
         hosts: l.map((e) => Cr(e)),
         read(e, t) {
          const r = Dr(t, f.timeouts.read),
           n = () =>
            qr(
             f,
             f.hosts.filter((e) => 0 != (e.accept & Ar.Read)),
             e,
             r,
            );
          if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return n();
          const o = { request: e, mappedRequestOptions: r, transporter: { queryParameters: f.queryParameters, headers: f.headers } };
          return f.responsesCache.get(
           o,
           () =>
            f.requestsCache.get(o, () =>
             f.requestsCache
              .set(o, n())
              .then(
               (e) => Promise.all([f.requestsCache.delete(o), e]),
               (e) => Promise.all([f.requestsCache.delete(o), Promise.reject(e)]),
              )
              .then(([e, t]) => t),
            ),
           { miss: (e) => f.responsesCache.set(o, e) },
          );
         },
         write: (e, t) =>
          qr(
           f,
           f.hosts.filter((e) => 0 != (e.accept & Ar.Write)),
           e,
           Dr(t, f.timeouts.write),
          ),
        };
       return f;
      })({
       hosts: [
        { url: `${t}-dsn.algolia.net`, accept: Ar.Read },
        { url: `${t}.algolia.net`, accept: Ar.Write },
       ].concat(jr([{ url: `${t}-1.algolianet.com` }, { url: `${t}-2.algolianet.com` }, { url: `${t}-3.algolianet.com` }])),
       ...e,
       headers: { ...r.headers(), "content-type": "application/x-www-form-urlencoded", ...e.headers },
       queryParameters: { ...r.queryParameters(), ...e.queryParameters },
      }),
      o = {
       transporter: n,
       appId: t,
       addAlgoliaAgent(e, t) {
        n.userAgent.add({ segment: e, version: t });
       },
       clearCache: () => Promise.all([n.requestsCache.clear(), n.responsesCache.clear()]).then(() => {}),
      };
     return wr(o, e.methods);
    },
    Vr = (e) => (t, r) => (t.method === Nr.Get ? e.transporter.read(t, r) : e.transporter.write(t, r)),
    Kr =
     (e) =>
     (t, r = {}) =>
      wr({ transporter: e.transporter, appId: e.appId, indexName: t }, r.methods),
    $r = (e) => (t, r) => {
     const n = t.map((e) => ({ ...e, params: Hr(e.params || {}) }));
     return e.transporter.read({ method: Nr.Post, path: "1/indexes/*/queries", data: { requests: n }, cacheable: !0 }, r);
    },
    Jr = (e) => (t, r) =>
     Promise.all(
      t.map((t) => {
       const { facetName: n, facetQuery: o, ...i } = t.params;
       return Kr(e)(t.indexName, { methods: { searchForFacetValues: Wr } }).searchForFacetValues(n, o, { ...r, ...i });
      }),
     ),
    zr = (e) => (t, r, n) => e.transporter.read({ method: Nr.Post, path: Er("1/answers/%s/prediction", e.indexName), data: { query: t, queryLanguages: r }, cacheable: !0 }, n),
    Qr = (e) => (t, r) => e.transporter.read({ method: Nr.Post, path: Er("1/indexes/%s/query", e.indexName), data: { query: t }, cacheable: !0 }, r),
    Wr = (e) => (t, r, n) => e.transporter.read({ method: Nr.Post, path: Er("1/indexes/%s/facets/%s/query", e.indexName, t), data: { facetQuery: r }, cacheable: !0 }, n),
    Zr = { Debug: 1, Info: 2, Error: 3 };
   function Gr(e, t, r) {
    const n = {
     appId: e,
     apiKey: t,
     timeouts: { connect: 1, read: 2, write: 30 },
     requester: {
      send: (e) =>
       new Promise((t) => {
        const r = new XMLHttpRequest();
        r.open(e.method, e.url, !0), Object.keys(e.headers).forEach((t) => r.setRequestHeader(t, e.headers[t]));
        const n = (e, n) =>
          setTimeout(() => {
           r.abort(), t({ status: 0, content: n, isTimedOut: !0 });
          }, 1e3 * e),
         o = n(e.connectTimeout, "Connection timeout");
        let i;
        (r.onreadystatechange = () => {
         r.readyState > r.OPENED && void 0 === i && (clearTimeout(o), (i = n(e.responseTimeout, "Socket timeout")));
        }),
         (r.onerror = () => {
          0 === r.status && (clearTimeout(o), clearTimeout(i), t({ content: r.responseText || "Network request failed", status: r.status, isTimedOut: !1 }));
         }),
         (r.onload = () => {
          clearTimeout(o), clearTimeout(i), t({ content: r.responseText, status: r.status, isTimedOut: !1 });
         }),
         r.send(e.data);
       }),
     },
     logger: ((o = Zr.Error), { debug: (e, t) => (Zr.Debug >= o && console.debug(e, t), Promise.resolve()), info: (e, t) => (Zr.Info >= o && console.info(e, t), Promise.resolve()), error: (e, t) => (console.error(e, t), Promise.resolve()) }),
     responsesCache: Sr(),
     requestsCache: Sr({ serializable: !1 }),
     hostsCache: Or({ caches: [gr({ key: `${Pr}-${e}` }), Sr()] }),
     userAgent: Lr(Pr).add({ segment: "Browser", version: "lite" }),
     authMode: Ir.WithinQueryParameters,
    };
    var o;
    return Br({ ...n, ...r, methods: { search: $r, searchForFacetValues: Jr, multipleQueries: $r, multipleSearchForFacetValues: Jr, customRequest: Vr, initIndex: (e) => (t) => Kr(e)(t, { methods: { search: Qr, searchForFacetValues: Wr, findAnswers: zr } }) } });
   }
   Gr.version = Pr;
   const Xr = Gr;
   var Yr = "3.6.0";
   function en() {}
   function tn(e) {
    return e;
   }
   function rn(e) {
    return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
   }
   function nn(e, t, r) {
    return e.reduce(function (e, n) {
     var o = t(n);
     return e.hasOwnProperty(o) || (e[o] = []), e[o].length < (r || 5) && e[o].push(n), e;
    }, {});
   }
   var on = ["footer", "searchBox"];
   function an() {
    return (
     (an =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
       }
       return e;
      }),
     an.apply(this, arguments)
    );
   }
   function cn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function ln(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? cn(Object(r), !0).forEach(function (t) {
         un(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cn(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function un(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
   }
   function sn(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null == r) return;
      var n,
       o,
       i = [],
       a = !0,
       c = !1;
      try {
       for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
      } catch (l) {
       (c = !0), (o = l);
      } finally {
       try {
        a || null == r.return || r.return();
       } finally {
        if (c) throw o;
       }
      }
      return i;
     })(e, t) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return fn(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fn(e, t);
     })(e, t) ||
     (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function fn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function mn(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function pn(e) {
    var t = e.appId,
     r = e.apiKey,
     n = e.indexName,
     o = e.placeholder,
     i = void 0 === o ? "Search docs" : o,
     a = e.searchParameters,
     c = e.maxResultsPerGroup,
     l = e.onClose,
     u = void 0 === l ? en : l,
     s = e.transformItems,
     f = void 0 === s ? tn : s,
     m = e.hitComponent,
     p = void 0 === m ? St : m,
     v = e.resultsFooterComponent,
     d =
      void 0 === v
       ? function () {
          return null;
         }
       : v,
     y = e.navigator,
     h = e.initialScrollY,
     b = void 0 === h ? 0 : h,
     g = e.transformSearchClient,
     O = void 0 === g ? tn : g,
     S = e.disableUserPersonalization,
     j = void 0 !== S && S,
     w = e.initialQuery,
     E = void 0 === w ? "" : w,
     P = e.translations,
     I = void 0 === P ? {} : P,
     D = e.getMissingResultsUrl,
     A = e.insights,
     k = void 0 !== A && A,
     _ = I.footer,
     x = I.searchBox,
     C = mn(I, on),
     N = sn(yt.useState({ query: "", collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: "idle" }), 2),
     T = N[0],
     R = N[1],
     q = yt.useRef(null),
     L = yt.useRef(null),
     M = yt.useRef(null),
     H = yt.useRef(null),
     F = yt.useRef(null),
     U = yt.useRef(10),
     B = yt.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, ht) : "").current,
     V = yt.useRef(E || B).current,
     K = (function (e, t, r) {
      return yt.useMemo(
       function () {
        var n = Xr(e, t);
        return n.addAlgoliaAgent("docsearch", Yr), !1 === /docsearch.js \(.*\)/.test(n.transporter.userAgent.value) && n.addAlgoliaAgent("docsearch-react", Yr), r(n);
       },
       [e, t, r],
      );
     })(t, r, O),
     $ = yt.useRef(br({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(n), limit: 10 })).current,
     J = yt.useRef(br({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(n), limit: 0 === $.getAll().length ? 7 : 4 })).current,
     z = yt.useCallback(
      function (e) {
       if (!j) {
        var t = "content" === e.type ? e.__docsearch_parent : e;
        t &&
         -1 ===
          $.getAll().findIndex(function (e) {
           return e.objectID === t.objectID;
          }) &&
         J.add(t);
       }
      },
      [$, J, j],
     ),
     Q = yt.useCallback(
      function (e) {
       if (T.context.algoliaInsightsPlugin && e.__autocomplete_id) {
        var t = e,
         r = { eventName: "Item Selected", index: t.__autocomplete_indexName, items: [t], positions: [e.__autocomplete_id], queryID: t.__autocomplete_queryID };
        T.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(r);
       }
      },
      [T.context.algoliaInsightsPlugin],
     ),
     W = yt.useMemo(
      function () {
       return dt({
        id: "docsearch",
        defaultActiveItemId: 0,
        placeholder: i,
        openOnFocus: !0,
        initialState: { query: V, context: { searchSuggestions: [] } },
        insights: k,
        navigator: y,
        onStateChange: function (e) {
         R(e.state);
        },
        getSources: function (e) {
         var o = e.query,
          i = e.state,
          l = e.setContext,
          s = e.setStatus;
         if (!o)
          return j
           ? []
           : [
              {
               sourceId: "recentSearches",
               onSelect: function (e) {
                var t = e.item,
                 r = e.event;
                z(t), rn(r) || u();
               },
               getItemUrl: function (e) {
                return e.item.url;
               },
               getItems: function () {
                return J.getAll();
               },
              },
              {
               sourceId: "favoriteSearches",
               onSelect: function (e) {
                var t = e.item,
                 r = e.event;
                z(t), rn(r) || u();
               },
               getItemUrl: function (e) {
                return e.item.url;
               },
               getItems: function () {
                return $.getAll();
               },
              },
             ];
         var m = Boolean(k);
         return K.search([{ query: o, indexName: n, params: ln({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(U.current), "hierarchy.lvl2:".concat(U.current), "hierarchy.lvl3:".concat(U.current), "hierarchy.lvl4:".concat(U.current), "hierarchy.lvl5:".concat(U.current), "hierarchy.lvl6:".concat(U.current), "content:".concat(U.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: m }, a) }])
          .catch(function (e) {
           throw ("RetryError" === e.name && s("error"), e);
          })
          .then(function (e) {
           var o = e.results[0],
            a = o.hits,
            s = o.nbHits,
            p = nn(
             a,
             function (e) {
              return Wt(e);
             },
             c,
            );
           i.context.searchSuggestions.length < Object.keys(p).length && l({ searchSuggestions: Object.keys(p) }), l({ nbHits: s });
           var v = {};
           return (
            m && (v = { __autocomplete_indexName: n, __autocomplete_queryID: o.queryID, __autocomplete_algoliaCredentials: { appId: t, apiKey: r } }),
            Object.values(p).map(function (e, t) {
             return {
              sourceId: "hits".concat(t),
              onSelect: function (e) {
               var t = e.item,
                r = e.event;
               z(t), rn(r) || u();
              },
              getItemUrl: function (e) {
               return e.item.url;
              },
              getItems: function () {
               return Object.values(
                nn(
                 e,
                 function (e) {
                  return e.hierarchy.lvl1;
                 },
                 c,
                ),
               )
                .map(f)
                .map(function (e) {
                 return e.map(function (t) {
                  var r = null,
                   n = e.find(function (e) {
                    return "lvl1" === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1;
                   });
                  return "lvl1" !== t.type && n && (r = n), ln(ln({}, t), {}, { __docsearch_parent: r }, v);
                 });
                })
                .flat();
              },
             };
            })
           );
          });
        },
       });
      },
      [n, a, c, K, u, J, $, z, V, i, y, f, j, k, t, r],
     ),
     Z = W.getEnvironmentProps,
     G = W.getRootProps,
     X = W.refresh;
    return (
     (function (e) {
      var t = e.getEnvironmentProps,
       r = e.panelElement,
       n = e.formElement,
       o = e.inputElement;
      yt.useEffect(
       function () {
        if (r && n && o) {
         var e = t({ panelElement: r, formElement: n, inputElement: o }),
          i = e.onTouchStart,
          a = e.onTouchMove;
         return (
          window.addEventListener("touchstart", i),
          window.addEventListener("touchmove", a),
          function () {
           window.removeEventListener("touchstart", i), window.removeEventListener("touchmove", a);
          }
         );
        }
       },
       [t, r, n, o],
      );
     })({ getEnvironmentProps: Z, panelElement: H.current, formElement: M.current, inputElement: F.current }),
     (function (e) {
      var t = e.container;
      yt.useEffect(
       function () {
        if (t) {
         var e = t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),
          r = e[0],
          n = e[e.length - 1];
         return (
          t.addEventListener("keydown", o),
          function () {
           t.removeEventListener("keydown", o);
          }
         );
        }
        function o(e) {
         "Tab" === e.key && (e.shiftKey ? document.activeElement === r && (e.preventDefault(), n.focus()) : document.activeElement === n && (e.preventDefault(), r.focus()));
        }
       },
       [t],
      );
     })({ container: q.current }),
     yt.useEffect(function () {
      return (
       document.body.classList.add("DocSearch--active"),
       function () {
        var e, t;
        document.body.classList.remove("DocSearch--active"), null === (e = (t = window).scrollTo) || void 0 === e || e.call(t, 0, b);
       }
      );
     }, []),
     yt.useEffect(function () {
      window.matchMedia("(max-width: 768px)").matches && (U.current = 5);
     }, []),
     yt.useEffect(
      function () {
       H.current && (H.current.scrollTop = 0);
      },
      [T.query],
     ),
     yt.useEffect(
      function () {
       V.length > 0 && (X(), F.current && F.current.focus());
      },
      [V, X],
     ),
     yt.useEffect(function () {
      function e() {
       if (L.current) {
        var e = 0.01 * window.innerHeight;
        L.current.style.setProperty("--docsearch-vh", "".concat(e, "px"));
       }
      }
      return (
       e(),
       window.addEventListener("resize", e),
       function () {
        window.removeEventListener("resize", e);
       }
      );
     }, []),
     yt.createElement(
      "div",
      an({ ref: q }, G({ "aria-expanded": !0 }), {
       className: ["DocSearch", "DocSearch-Container", "stalled" === T.status && "DocSearch-Container--Stalled", "error" === T.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "),
       role: "button",
       tabIndex: 0,
       onMouseDown: function (e) {
        e.target === e.currentTarget && u();
       },
      }),
      yt.createElement(
       "div",
       { className: "DocSearch-Modal", ref: L },
       yt.createElement("header", { className: "DocSearch-SearchBar", ref: M }, yt.createElement(vr, an({}, W, { state: T, autoFocus: 0 === V.length, inputRef: F, isFromSelection: Boolean(V) && V === B, translations: x, onClose: u }))),
       yt.createElement(
        "div",
        { className: "DocSearch-Dropdown", ref: H },
        yt.createElement(
         lr,
         an({}, W, {
          indexName: n,
          state: T,
          hitComponent: p,
          resultsFooterComponent: d,
          disableUserPersonalization: j,
          recentSearches: J,
          favoriteSearches: $,
          inputRef: F,
          translations: C,
          getMissingResultsUrl: D,
          onItemClick: function (e, t) {
           Q(e), z(e), rn(t) || u();
          },
         }),
        ),
       ),
       yt.createElement("footer", { className: "DocSearch-Footer" }, yt.createElement(Ot, { translations: _ })),
      ),
     )
    );
   }
  },
 },
]);
