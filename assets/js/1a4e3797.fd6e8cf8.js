/*! For license information please see 1a4e3797.fd6e8cf8.js.LICENSE.txt */
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7920],
 {
  3698: (e) => {
   function t() {
    (this._events = this._events || {}), (this._maxListeners = this._maxListeners || void 0);
   }
   function r(e) {
    return "function" == typeof e;
   }
   function n(e) {
    return "object" == typeof e && null !== e;
   }
   function i(e) {
    return void 0 === e;
   }
   (e.exports = t),
    (t.prototype._events = void 0),
    (t.prototype._maxListeners = void 0),
    (t.defaultMaxListeners = 10),
    (t.prototype.setMaxListeners = function (e) {
     if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
     return (this._maxListeners = e), this;
    }),
    (t.prototype.emit = function (e) {
     var t, s, a, c, u, o;
     if ((this._events || (this._events = {}), "error" === e && (!this._events.error || (n(this._events.error) && !this._events.error.length)))) {
      if ((t = arguments[1]) instanceof Error) throw t;
      var h = new Error('Uncaught, unspecified "error" event. (' + t + ")");
      throw ((h.context = t), h);
     }
     if (i((s = this._events[e]))) return !1;
     if (r(s))
      switch (arguments.length) {
       case 1:
        s.call(this);
        break;
       case 2:
        s.call(this, arguments[1]);
        break;
       case 3:
        s.call(this, arguments[1], arguments[2]);
        break;
       default:
        (c = Array.prototype.slice.call(arguments, 1)), s.apply(this, c);
      }
     else if (n(s)) for (c = Array.prototype.slice.call(arguments, 1), a = (o = s.slice()).length, u = 0; u < a; u++) o[u].apply(this, c);
     return !0;
    }),
    (t.prototype.addListener = function (e, s) {
     var a;
     if (!r(s)) throw TypeError("listener must be a function");
     return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(s.listener) ? s.listener : s), this._events[e] ? (n(this._events[e]) ? this._events[e].push(s) : (this._events[e] = [this._events[e], s])) : (this._events[e] = s), n(this._events[e]) && !this._events[e].warned && (a = i(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length > a && ((this._events[e].warned = !0), console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this;
    }),
    (t.prototype.on = t.prototype.addListener),
    (t.prototype.once = function (e, t) {
     if (!r(t)) throw TypeError("listener must be a function");
     var n = !1;
     function i() {
      this.removeListener(e, i), n || ((n = !0), t.apply(this, arguments));
     }
     return (i.listener = t), this.on(e, i), this;
    }),
    (t.prototype.removeListener = function (e, t) {
     var i, s, a, c;
     if (!r(t)) throw TypeError("listener must be a function");
     if (!this._events || !this._events[e]) return this;
     if (((a = (i = this._events[e]).length), (s = -1), i === t || (r(i.listener) && i.listener === t))) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
     else if (n(i)) {
      for (c = a; c-- > 0; )
       if (i[c] === t || (i[c].listener && i[c].listener === t)) {
        s = c;
        break;
       }
      if (s < 0) return this;
      1 === i.length ? ((i.length = 0), delete this._events[e]) : i.splice(s, 1), this._events.removeListener && this.emit("removeListener", e, t);
     }
     return this;
    }),
    (t.prototype.removeAllListeners = function (e) {
     var t, n;
     if (!this._events) return this;
     if (!this._events.removeListener) return 0 === arguments.length ? (this._events = {}) : this._events[e] && delete this._events[e], this;
     if (0 === arguments.length) {
      for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
      return this.removeAllListeners("removeListener"), (this._events = {}), this;
     }
     if (r((n = this._events[e]))) this.removeListener(e, n);
     else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
     return delete this._events[e], this;
    }),
    (t.prototype.listeners = function (e) {
     return this._events && this._events[e] ? (r(this._events[e]) ? [this._events[e]] : this._events[e].slice()) : [];
    }),
    (t.prototype.listenerCount = function (e) {
     if (this._events) {
      var t = this._events[e];
      if (r(t)) return 1;
      if (t) return t.length;
     }
     return 0;
    }),
    (t.listenerCount = function (e, t) {
     return e.listenerCount(t);
    });
  },
  4294: (e, t, r) => {
   "use strict";
   var n = r(5162),
    i = r(5948),
    s = r(4124);
   function a(e, t, r, i) {
    return new n(e, t, r, i);
   }
   (a.version = r(4513)), (a.AlgoliaSearchHelper = n), (a.SearchParameters = i), (a.SearchResults = s), (e.exports = a);
  },
  57: (e, t, r) => {
   "use strict";
   var n = r(3698);
   function i(e, t) {
    (this.main = e), (this.fn = t), (this.lastResults = null);
   }
   r(277)(i, n),
    (i.prototype.detach = function () {
     this.removeAllListeners(), this.main.detachDerivedHelper(this);
    }),
    (i.prototype.getModifiedState = function (e) {
     return this.fn(e);
    }),
    (e.exports = i);
  },
  9721: (e, t, r) => {
   "use strict";
   var n = r(156),
    i = r(6439),
    s = r(4251),
    a = {
     addRefinement: function (e, t, r) {
      if (a.isRefined(e, t, r)) return e;
      var i = "" + r,
       s = e[t] ? e[t].concat(i) : [i],
       c = {};
      return (c[t] = s), n({}, c, e);
     },
     removeRefinement: function (e, t, r) {
      if (void 0 === r)
       return a.clearRefinement(e, function (e, r) {
        return t === r;
       });
      var n = "" + r;
      return a.clearRefinement(e, function (e, r) {
       return t === r && n === e;
      });
     },
     toggleRefinement: function (e, t, r) {
      if (void 0 === r) throw new Error("toggleRefinement should be used with a value");
      return a.isRefined(e, t, r) ? a.removeRefinement(e, t, r) : a.addRefinement(e, t, r);
     },
     clearRefinement: function (e, t, r) {
      if (void 0 === t) return i(e) ? {} : e;
      if ("string" == typeof t) return s(e, [t]);
      if ("function" == typeof t) {
       var n = !1,
        a = Object.keys(e).reduce(function (i, s) {
         var a = e[s] || [],
          c = a.filter(function (e) {
           return !t(e, s, r);
          });
         return c.length !== a.length && (n = !0), (i[s] = c), i;
        }, {});
       return n ? a : e;
      }
     },
     isRefined: function (e, t, r) {
      var n = Boolean(e[t]) && e[t].length > 0;
      if (void 0 === r || !n) return n;
      var i = "" + r;
      return -1 !== e[t].indexOf(i);
     },
    };
   e.exports = a;
  },
  5948: (e, t, r) => {
   "use strict";
   var n = r(156),
    i = r(8592),
    s = r(5881),
    a = r(2445),
    c = r(6439),
    u = r(4251),
    o = r(9834),
    h = r(9402),
    f = r(9721);
   function l(e, t) {
    return Array.isArray(e) && Array.isArray(t)
     ? e.length === t.length &&
        e.every(function (e, r) {
         return l(t[r], e);
        })
     : e === t;
   }
   function m(e) {
    var t = e ? m._parseNumbers(e) : {};
    void 0 === t.userToken || h(t.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), (this.facets = t.facets || []), (this.disjunctiveFacets = t.disjunctiveFacets || []), (this.hierarchicalFacets = t.hierarchicalFacets || []), (this.facetsRefinements = t.facetsRefinements || {}), (this.facetsExcludes = t.facetsExcludes || {}), (this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}), (this.numericRefinements = t.numericRefinements || {}), (this.tagRefinements = t.tagRefinements || []), (this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {});
    var r = this;
    Object.keys(t).forEach(function (e) {
     var n = -1 !== m.PARAMETERS.indexOf(e),
      i = void 0 !== t[e];
     !n && i && (r[e] = t[e]);
    });
   }
   (m.PARAMETERS = Object.keys(new m())),
    (m._parseNumbers = function (e) {
     if (e instanceof m) return e;
     var t = {};
     if (
      (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach(function (r) {
       var n = e[r];
       if ("string" == typeof n) {
        var i = parseFloat(n);
        t[r] = isNaN(i) ? n : i;
       }
      }),
      Array.isArray(e.insideBoundingBox) &&
       (t.insideBoundingBox = e.insideBoundingBox.map(function (e) {
        return Array.isArray(e)
         ? e.map(function (e) {
            return parseFloat(e);
           })
         : e;
       })),
      e.numericRefinements)
     ) {
      var r = {};
      Object.keys(e.numericRefinements).forEach(function (t) {
       var n = e.numericRefinements[t] || {};
       (r[t] = {}),
        Object.keys(n).forEach(function (e) {
         var i = n[e].map(function (e) {
          return Array.isArray(e)
           ? e.map(function (e) {
              return "string" == typeof e ? parseFloat(e) : e;
             })
           : "string" == typeof e
             ? parseFloat(e)
             : e;
         });
         r[t][e] = i;
        });
      }),
       (t.numericRefinements = r);
     }
     return a({}, e, t);
    }),
    (m.make = function (e) {
     var t = new m(e);
     return (
      (e.hierarchicalFacets || []).forEach(function (e) {
       if (e.rootPath) {
        var r = t.getHierarchicalRefinement(e.name);
        r.length > 0 && 0 !== r[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), 0 === (r = t.getHierarchicalRefinement(e.name)).length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath));
       }
      }),
      t
     );
    }),
    (m.validate = function (e, t) {
     var r = t || {};
     return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0 ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && r.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && r.numericRefinements && c(r.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : c(e.numericRefinements) && r.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null;
    }),
    (m.prototype = {
     constructor: m,
     clearRefinements: function (e) {
      var t = { numericRefinements: this._clearNumericRefinements(e), facetsRefinements: f.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"), facetsExcludes: f.clearRefinement(this.facetsExcludes, e, "exclude"), disjunctiveFacetsRefinements: f.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"), hierarchicalFacetsRefinements: f.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet") };
      return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t);
     },
     clearTags: function () {
      return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({ tagFilters: void 0, tagRefinements: [] });
     },
     setIndex: function (e) {
      return e === this.index ? this : this.setQueryParameters({ index: e });
     },
     setQuery: function (e) {
      return e === this.query ? this : this.setQueryParameters({ query: e });
     },
     setPage: function (e) {
      return e === this.page ? this : this.setQueryParameters({ page: e });
     },
     setFacets: function (e) {
      return this.setQueryParameters({ facets: e });
     },
     setDisjunctiveFacets: function (e) {
      return this.setQueryParameters({ disjunctiveFacets: e });
     },
     setHitsPerPage: function (e) {
      return this.hitsPerPage === e ? this : this.setQueryParameters({ hitsPerPage: e });
     },
     setTypoTolerance: function (e) {
      return this.typoTolerance === e ? this : this.setQueryParameters({ typoTolerance: e });
     },
     addNumericRefinement: function (e, t, r) {
      var n = o(r);
      if (this.isNumericRefined(e, t, n)) return this;
      var i = a({}, this.numericRefinements);
      return (i[e] = a({}, i[e])), i[e][t] ? ((i[e][t] = i[e][t].slice()), i[e][t].push(n)) : (i[e][t] = [n]), this.setQueryParameters({ numericRefinements: i });
     },
     getConjunctiveRefinements: function (e) {
      return (this.isConjunctiveFacet(e) && this.facetsRefinements[e]) || [];
     },
     getDisjunctiveRefinements: function (e) {
      return (this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e]) || [];
     },
     getHierarchicalRefinement: function (e) {
      return this.hierarchicalFacetsRefinements[e] || [];
     },
     getExcludeRefinements: function (e) {
      return (this.isConjunctiveFacet(e) && this.facetsExcludes[e]) || [];
     },
     removeNumericRefinement: function (e, t, r) {
      var n = r;
      return void 0 !== n
       ? this.isNumericRefined(e, t, n)
         ? this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function (r, i) {
             return i === e && r.op === t && l(r.val, o(n));
            }),
           })
         : this
       : void 0 !== t
         ? this.isNumericRefined(e, t)
           ? this.setQueryParameters({
              numericRefinements: this._clearNumericRefinements(function (r, n) {
               return n === e && r.op === t;
              }),
             })
           : this
         : this.isNumericRefined(e)
           ? this.setQueryParameters({
              numericRefinements: this._clearNumericRefinements(function (t, r) {
               return r === e;
              }),
             })
           : this;
     },
     getNumericRefinements: function (e) {
      return this.numericRefinements[e] || {};
     },
     getNumericRefinement: function (e, t) {
      return this.numericRefinements[e] && this.numericRefinements[e][t];
     },
     _clearNumericRefinements: function (e) {
      if (void 0 === e) return c(this.numericRefinements) ? {} : this.numericRefinements;
      if ("string" == typeof e) return u(this.numericRefinements, [e]);
      if ("function" == typeof e) {
       var t = !1,
        r = this.numericRefinements,
        n = Object.keys(r).reduce(function (n, i) {
         var s = r[i],
          a = {};
         return (
          (s = s || {}),
          Object.keys(s).forEach(function (r) {
           var n = s[r] || [],
            c = [];
           n.forEach(function (t) {
            e({ val: t, op: r }, i, "numeric") || c.push(t);
           }),
            c.length !== n.length && (t = !0),
            (a[r] = c);
          }),
          (n[i] = a),
          n
         );
        }, {});
       return t ? n : this.numericRefinements;
      }
     },
     addFacet: function (e) {
      return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({ facets: this.facets.concat([e]) });
     },
     addDisjunctiveFacet: function (e) {
      return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({ disjunctiveFacets: this.disjunctiveFacets.concat([e]) });
     },
     addHierarchicalFacet: function (e) {
      if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
      return this.setQueryParameters({ hierarchicalFacets: this.hierarchicalFacets.concat([e]) });
     },
     addFacetRefinement: function (e, t) {
      if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
      return f.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({ facetsRefinements: f.addRefinement(this.facetsRefinements, e, t) });
     },
     addExcludeRefinement: function (e, t) {
      if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
      return f.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({ facetsExcludes: f.addRefinement(this.facetsExcludes, e, t) });
     },
     addDisjunctiveFacetRefinement: function (e, t) {
      if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
      return f.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({ disjunctiveFacetsRefinements: f.addRefinement(this.disjunctiveFacetsRefinements, e, t) });
     },
     addTagRefinement: function (e) {
      if (this.isTagRefined(e)) return this;
      var t = { tagRefinements: this.tagRefinements.concat(e) };
      return this.setQueryParameters(t);
     },
     removeFacet: function (e) {
      return this.isConjunctiveFacet(e)
       ? this.clearRefinements(e).setQueryParameters({
          facets: this.facets.filter(function (t) {
           return t !== e;
          }),
         })
       : this;
     },
     removeDisjunctiveFacet: function (e) {
      return this.isDisjunctiveFacet(e)
       ? this.clearRefinements(e).setQueryParameters({
          disjunctiveFacets: this.disjunctiveFacets.filter(function (t) {
           return t !== e;
          }),
         })
       : this;
     },
     removeHierarchicalFacet: function (e) {
      return this.isHierarchicalFacet(e)
       ? this.clearRefinements(e).setQueryParameters({
          hierarchicalFacets: this.hierarchicalFacets.filter(function (t) {
           return t.name !== e;
          }),
         })
       : this;
     },
     removeFacetRefinement: function (e, t) {
      if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
      return f.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({ facetsRefinements: f.removeRefinement(this.facetsRefinements, e, t) }) : this;
     },
     removeExcludeRefinement: function (e, t) {
      if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
      return f.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({ facetsExcludes: f.removeRefinement(this.facetsExcludes, e, t) }) : this;
     },
     removeDisjunctiveFacetRefinement: function (e, t) {
      if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
      return f.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({ disjunctiveFacetsRefinements: f.removeRefinement(this.disjunctiveFacetsRefinements, e, t) }) : this;
     },
     removeTagRefinement: function (e) {
      if (!this.isTagRefined(e)) return this;
      var t = {
       tagRefinements: this.tagRefinements.filter(function (t) {
        return t !== e;
       }),
      };
      return this.setQueryParameters(t);
     },
     toggleRefinement: function (e, t) {
      return this.toggleFacetRefinement(e, t);
     },
     toggleFacetRefinement: function (e, t) {
      if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
      if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
      if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
      throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
     },
     toggleConjunctiveFacetRefinement: function (e, t) {
      if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
      return this.setQueryParameters({ facetsRefinements: f.toggleRefinement(this.facetsRefinements, e, t) });
     },
     toggleExcludeFacetRefinement: function (e, t) {
      if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
      return this.setQueryParameters({ facetsExcludes: f.toggleRefinement(this.facetsExcludes, e, t) });
     },
     toggleDisjunctiveFacetRefinement: function (e, t) {
      if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
      return this.setQueryParameters({ disjunctiveFacetsRefinements: f.toggleRefinement(this.disjunctiveFacetsRefinements, e, t) });
     },
     toggleHierarchicalFacetRefinement: function (e, t) {
      if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
      var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
       i = {};
      return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + r)) ? (-1 === t.indexOf(r) ? (i[e] = []) : (i[e] = [t.slice(0, t.lastIndexOf(r))])) : (i[e] = [t]), this.setQueryParameters({ hierarchicalFacetsRefinements: n({}, i, this.hierarchicalFacetsRefinements) });
     },
     addHierarchicalFacetRefinement: function (e, t) {
      if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
      if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
      var r = {};
      return (r[e] = [t]), this.setQueryParameters({ hierarchicalFacetsRefinements: n({}, r, this.hierarchicalFacetsRefinements) });
     },
     removeHierarchicalFacetRefinement: function (e) {
      if (!this.isHierarchicalFacetRefined(e)) return this;
      var t = {};
      return (t[e] = []), this.setQueryParameters({ hierarchicalFacetsRefinements: n({}, t, this.hierarchicalFacetsRefinements) });
     },
     toggleTagRefinement: function (e) {
      return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e);
     },
     isDisjunctiveFacet: function (e) {
      return this.disjunctiveFacets.indexOf(e) > -1;
     },
     isHierarchicalFacet: function (e) {
      return void 0 !== this.getHierarchicalFacetByName(e);
     },
     isConjunctiveFacet: function (e) {
      return this.facets.indexOf(e) > -1;
     },
     isFacetRefined: function (e, t) {
      return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsRefinements, e, t);
     },
     isExcludeRefined: function (e, t) {
      return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsExcludes, e, t);
     },
     isDisjunctiveFacetRefined: function (e, t) {
      return !!this.isDisjunctiveFacet(e) && f.isRefined(this.disjunctiveFacetsRefinements, e, t);
     },
     isHierarchicalFacetRefined: function (e, t) {
      if (!this.isHierarchicalFacet(e)) return !1;
      var r = this.getHierarchicalRefinement(e);
      return t ? -1 !== r.indexOf(t) : r.length > 0;
     },
     isNumericRefined: function (e, t, r) {
      if (void 0 === r && void 0 === t) return Boolean(this.numericRefinements[e]);
      var n = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
      if (void 0 === r || !n) return n;
      var s,
       a,
       c = o(r),
       u =
        void 0 !==
        ((s = this.numericRefinements[e][t]),
        (a = c),
        i(s, function (e) {
         return l(e, a);
        }));
      return n && u;
     },
     isTagRefined: function (e) {
      return -1 !== this.tagRefinements.indexOf(e);
     },
     getRefinedDisjunctiveFacets: function () {
      var e = this,
       t = s(
        Object.keys(this.numericRefinements).filter(function (t) {
         return Object.keys(e.numericRefinements[t]).length > 0;
        }),
        this.disjunctiveFacets,
       );
      return Object.keys(this.disjunctiveFacetsRefinements)
       .filter(function (t) {
        return e.disjunctiveFacetsRefinements[t].length > 0;
       })
       .concat(t)
       .concat(this.getRefinedHierarchicalFacets())
       .sort();
     },
     getRefinedHierarchicalFacets: function () {
      var e = this;
      return s(
       this.hierarchicalFacets.map(function (e) {
        return e.name;
       }),
       Object.keys(this.hierarchicalFacetsRefinements).filter(function (t) {
        return e.hierarchicalFacetsRefinements[t].length > 0;
       }),
      ).sort();
     },
     getUnrefinedDisjunctiveFacets: function () {
      var e = this.getRefinedDisjunctiveFacets();
      return this.disjunctiveFacets.filter(function (t) {
       return -1 === e.indexOf(t);
      });
     },
     managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "hierarchicalFacets", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacetsRefinements"],
     getQueryParams: function () {
      var e = this.managedParameters,
       t = {},
       r = this;
      return (
       Object.keys(this).forEach(function (n) {
        var i = r[n];
        -1 === e.indexOf(n) && void 0 !== i && (t[n] = i);
       }),
       t
      );
     },
     setQueryParameter: function (e, t) {
      if (this[e] === t) return this;
      var r = {};
      return (r[e] = t), this.setQueryParameters(r);
     },
     setQueryParameters: function (e) {
      if (!e) return this;
      var t = m.validate(this, e);
      if (t) throw t;
      var r = this,
       n = m._parseNumbers(e),
       i = Object.keys(this).reduce(function (e, t) {
        return (e[t] = r[t]), e;
       }, {}),
       s = Object.keys(n).reduce(function (e, t) {
        var r = void 0 !== e[t],
         i = void 0 !== n[t];
        return r && !i ? u(e, [t]) : (i && (e[t] = n[t]), e);
       }, i);
      return new this.constructor(s);
     },
     resetPage: function () {
      return void 0 === this.page ? this : this.setPage(0);
     },
     _getHierarchicalFacetSortBy: function (e) {
      return e.sortBy || ["isRefined:desc", "name:asc"];
     },
     _getHierarchicalFacetSeparator: function (e) {
      return e.separator || " > ";
     },
     _getHierarchicalRootPath: function (e) {
      return e.rootPath || null;
     },
     _getHierarchicalShowParentLevel: function (e) {
      return "boolean" != typeof e.showParentLevel || e.showParentLevel;
     },
     getHierarchicalFacetByName: function (e) {
      return i(this.hierarchicalFacets, function (t) {
       return t.name === e;
      });
     },
     getHierarchicalFacetBreadcrumb: function (e) {
      if (!this.isHierarchicalFacet(e)) return [];
      var t = this.getHierarchicalRefinement(e)[0];
      if (!t) return [];
      var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));
      return t.split(r).map(function (e) {
       return e.trim();
      });
     },
     toString: function () {
      return JSON.stringify(this, null, 2);
     },
    }),
    (e.exports = m);
  },
  2623: (e, t, r) => {
   "use strict";
   e.exports = function (e) {
    return function (t, r) {
     var n = e.hierarchicalFacets[r],
      o = (e.hierarchicalFacetsRefinements[n.name] && e.hierarchicalFacetsRefinements[n.name][0]) || "",
      h = e._getHierarchicalFacetSeparator(n),
      f = e._getHierarchicalRootPath(n),
      l = e._getHierarchicalShowParentLevel(n),
      m = s(e._getHierarchicalFacetSortBy(n)),
      d = t.every(function (e) {
       return e.exhaustive;
      }),
      p = (function (e, t, r, n, s) {
       return function (o, h, f) {
        var l = o;
        if (f > 0) {
         var m = 0;
         for (l = o; m < f; ) {
          var d = l && Array.isArray(l.data) ? l.data : [];
          (l = i(d, function (e) {
           return e.isRefined;
          })),
           m++;
         }
        }
        if (l) {
         var p = Object.keys(h.data)
          .map(function (e) {
           return [e, h.data[e]];
          })
          .filter(function (e) {
           return (function (e, t, r, n, i, s) {
            if (i && (0 !== e.indexOf(i) || i === e)) return !1;
            return (!i && -1 === e.indexOf(n)) || (i && e.split(n).length - i.split(n).length == 1) || (-1 === e.indexOf(n) && -1 === r.indexOf(n)) || 0 === r.indexOf(e) || (0 === e.indexOf(t + n) && (s || 0 === e.indexOf(r)));
           })(e[0], l.path || r, s, t, r, n);
          });
         l.data = a(
          p.map(function (e) {
           var r = e[0];
           return (function (e, t, r, n, i) {
            var s = t.split(r);
            return { name: s[s.length - 1].trim(), path: t, escapedValue: c(t), count: e, isRefined: n === t || 0 === n.indexOf(t + r), exhaustive: i, data: null };
           })(e[1], r, t, u(s), h.exhaustive);
          }),
          e[0],
          e[1],
         );
        }
        return o;
       };
      })(m, h, f, l, o),
      v = t;
     return f && (v = t.slice(f.split(h).length)), v.reduce(p, { name: e.hierarchicalFacets[r].name, count: null, isRefined: !0, path: null, escapedValue: null, exhaustive: d, data: null });
    };
   };
   var n = r(6104),
    i = r(8592),
    s = r(2176),
    a = r(125),
    c = n.escapeFacetValue,
    u = n.unescapeFacetValue;
  },
  4124: (e, t, r) => {
   "use strict";
   var n = r(754),
    i = r(156),
    s = r(6104),
    a = r(8592),
    c = r(7554),
    u = r(2176),
    o = r(2445),
    h = r(125),
    f = s.escapeFacetValue,
    l = s.unescapeFacetValue,
    m = r(2623);
   function d(e) {
    var t = {};
    return (
     e.forEach(function (e, r) {
      t[e] = r;
     }),
     t
    );
   }
   function p(e, t, r) {
    t && t[r] && (e.stats = t[r]);
   }
   function v(e, t, r) {
    var s = t[0];
    this._rawResults = t;
    var u = this;
    Object.keys(s).forEach(function (e) {
     u[e] = s[e];
    });
    var h = o({ persistHierarchicalRootCount: !1 }, r);
    Object.keys(h).forEach(function (e) {
     u[e] = h[e];
    }),
     (this.processingTimeMS = t.reduce(function (e, t) {
      return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS;
     }, 0)),
     (this.disjunctiveFacets = []),
     (this.hierarchicalFacets = e.hierarchicalFacets.map(function () {
      return [];
     })),
     (this.facets = []);
    var f = e.getRefinedDisjunctiveFacets(),
     v = d(e.facets),
     g = d(e.disjunctiveFacets),
     y = 1,
     R = s.facets || {};
    Object.keys(R).forEach(function (t) {
     var r,
      n,
      i = R[t],
      o =
       ((r = e.hierarchicalFacets),
       (n = t),
       a(r, function (e) {
        return (e.attributes || []).indexOf(n) > -1;
       }));
     if (o) {
      var h = o.attributes.indexOf(t),
       f = c(e.hierarchicalFacets, function (e) {
        return e.name === o.name;
       });
      u.hierarchicalFacets[f][h] = { attribute: t, data: i, exhaustive: s.exhaustiveFacetsCount };
     } else {
      var l,
       m = -1 !== e.disjunctiveFacets.indexOf(t),
       d = -1 !== e.facets.indexOf(t);
      m && ((l = g[t]), (u.disjunctiveFacets[l] = { name: t, data: i, exhaustive: s.exhaustiveFacetsCount }), p(u.disjunctiveFacets[l], s.facets_stats, t)), d && ((l = v[t]), (u.facets[l] = { name: t, data: i, exhaustive: s.exhaustiveFacetsCount }), p(u.facets[l], s.facets_stats, t));
     }
    }),
     (this.hierarchicalFacets = n(this.hierarchicalFacets)),
     f.forEach(function (r) {
      var n = t[y],
       a = n && n.facets ? n.facets : {},
       h = e.getHierarchicalFacetByName(r);
      Object.keys(a).forEach(function (t) {
       var r,
        f = a[t];
       if (h) {
        r = c(e.hierarchicalFacets, function (e) {
         return e.name === h.name;
        });
        var m = c(u.hierarchicalFacets[r], function (e) {
         return e.attribute === t;
        });
        if (-1 === m) return;
        u.hierarchicalFacets[r][m].data = o({}, u.hierarchicalFacets[r][m].data, f);
       } else {
        r = g[t];
        var d = (s.facets && s.facets[t]) || {};
        (u.disjunctiveFacets[r] = { name: t, data: i({}, f, d), exhaustive: n.exhaustiveFacetsCount }),
         p(u.disjunctiveFacets[r], n.facets_stats, t),
         e.disjunctiveFacetsRefinements[t] &&
          e.disjunctiveFacetsRefinements[t].forEach(function (n) {
           !u.disjunctiveFacets[r].data[n] && e.disjunctiveFacetsRefinements[t].indexOf(l(n)) > -1 && (u.disjunctiveFacets[r].data[n] = 0);
          });
       }
      }),
       y++;
     }),
     e.getRefinedHierarchicalFacets().forEach(function (r) {
      var n = e.getHierarchicalFacetByName(r),
       s = e._getHierarchicalFacetSeparator(n),
       a = e.getHierarchicalRefinement(r);
      0 === a.length ||
       a[0].split(s).length < 2 ||
       t.slice(y).forEach(function (t) {
        var r = t && t.facets ? t.facets : {};
        Object.keys(r).forEach(function (t) {
         var o = r[t],
          h = c(e.hierarchicalFacets, function (e) {
           return e.name === n.name;
          }),
          f = c(u.hierarchicalFacets[h], function (e) {
           return e.attribute === t;
          });
         if (-1 !== f) {
          var l = {};
          if (a.length > 0 && !u.persistHierarchicalRootCount) {
           var m = a[0].split(s)[0];
           l[m] = u.hierarchicalFacets[h][f].data[m];
          }
          u.hierarchicalFacets[h][f].data = i(l, o, u.hierarchicalFacets[h][f].data);
         }
        }),
         y++;
       });
     }),
     Object.keys(e.facetsExcludes).forEach(function (t) {
      var r = e.facetsExcludes[t],
       n = v[t];
      (u.facets[n] = { name: t, data: R[t], exhaustive: s.exhaustiveFacetsCount }),
       r.forEach(function (e) {
        (u.facets[n] = u.facets[n] || { name: t }), (u.facets[n].data = u.facets[n].data || {}), (u.facets[n].data[e] = 0);
       });
     }),
     (this.hierarchicalFacets = this.hierarchicalFacets.map(m(e))),
     (this.facets = n(this.facets)),
     (this.disjunctiveFacets = n(this.disjunctiveFacets)),
     (this._state = e);
   }
   function g(e, t) {
    function r(e) {
     return e.name === t;
    }
    if (e._state.isConjunctiveFacet(t)) {
     var n = a(e.facets, r);
     return n
      ? Object.keys(n.data).map(function (r) {
         var i = f(r);
         return { name: r, escapedValue: i, count: n.data[r], isRefined: e._state.isFacetRefined(t, i), isExcluded: e._state.isExcludeRefined(t, r) };
        })
      : [];
    }
    if (e._state.isDisjunctiveFacet(t)) {
     var i = a(e.disjunctiveFacets, r);
     return i
      ? Object.keys(i.data).map(function (r) {
         var n = f(r);
         return { name: r, escapedValue: n, count: i.data[r], isRefined: e._state.isDisjunctiveFacetRefined(t, n) };
        })
      : [];
    }
    if (e._state.isHierarchicalFacet(t)) {
     var s = a(e.hierarchicalFacets, r);
     if (!s) return s;
     var c = e._state.getHierarchicalFacetByName(t),
      u = e._state._getHierarchicalFacetSeparator(c),
      o = l(e._state.getHierarchicalRefinement(t)[0] || "");
     0 === o.indexOf(c.rootPath) && (o = o.replace(c.rootPath + u, ""));
     var h = o.split(u);
     return h.unshift(t), y(s, h, 0), s;
    }
   }
   function y(e, t, r) {
    (e.isRefined = e.name === t[r]),
     e.data &&
      e.data.forEach(function (e) {
       y(e, t, r + 1);
      });
   }
   function R(e, t, r, n) {
    if (((n = n || 0), Array.isArray(t))) return e(t, r[n]);
    if (!t.data || 0 === t.data.length) return t;
    var s = t.data.map(function (t) {
      return R(e, t, r, n + 1);
     }),
     a = e(s, r[n]);
    return i({ data: a }, t);
   }
   function F(e, t) {
    var r = a(e, function (e) {
     return e.name === t;
    });
    return r && r.stats;
   }
   function b(e, t, r, n, i) {
    var s = a(i, function (e) {
      return e.name === r;
     }),
     c = s && s.data && s.data[n] ? s.data[n] : 0,
     u = (s && s.exhaustive) || !1;
    return { type: t, attributeName: r, name: n, count: c, exhaustive: u };
   }
   (v.prototype.getFacetByName = function (e) {
    function t(t) {
     return t.name === e;
    }
    return a(this.facets, t) || a(this.disjunctiveFacets, t) || a(this.hierarchicalFacets, t);
   }),
    (v.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"]),
    (v.prototype.getFacetValues = function (e, t) {
     var r = g(this, e);
     if (r) {
      var n,
       s = i({}, t, { sortBy: v.DEFAULT_SORT, facetOrdering: !(t && t.sortBy) }),
       a = this;
      if (Array.isArray(r)) n = [e];
      else n = a._state.getHierarchicalFacetByName(r.name).attributes;
      return R(
       function (e, t) {
        if (s.facetOrdering) {
         var r = (function (e, t) {
          return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t];
         })(a, t);
         if (r)
          return (function (e, t) {
           var r = [],
            n = [],
            i = (t.order || []).reduce(function (e, t, r) {
             return (e[t] = r), e;
            }, {});
           e.forEach(function (e) {
            var t = e.path || e.name;
            void 0 !== i[t] ? (r[i[t]] = e) : n.push(e);
           }),
            (r = r.filter(function (e) {
             return e;
            }));
           var s,
            a = t.sortRemainingBy;
           return "hidden" === a
            ? r
            : ((s =
               "alpha" === a
                ? [
                   ["path", "name"],
                   ["asc", "asc"],
                  ]
                : [["count"], ["desc"]]),
              r.concat(h(n, s[0], s[1])));
          })(e, r);
        }
        if (Array.isArray(s.sortBy)) {
         var n = u(s.sortBy, v.DEFAULT_SORT);
         return h(e, n[0], n[1]);
        }
        if ("function" == typeof s.sortBy)
         return (function (e, t) {
          return t.sort(e);
         })(s.sortBy, e);
        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
       },
       r,
       n,
      );
     }
    }),
    (v.prototype.getFacetStats = function (e) {
     return this._state.isConjunctiveFacet(e) ? F(this.facets, e) : this._state.isDisjunctiveFacet(e) ? F(this.disjunctiveFacets, e) : void 0;
    }),
    (v.prototype.getRefinements = function () {
     var e = this._state,
      t = this,
      r = [];
     return (
      Object.keys(e.facetsRefinements).forEach(function (n) {
       e.facetsRefinements[n].forEach(function (i) {
        r.push(b(e, "facet", n, i, t.facets));
       });
      }),
      Object.keys(e.facetsExcludes).forEach(function (n) {
       e.facetsExcludes[n].forEach(function (i) {
        r.push(b(e, "exclude", n, i, t.facets));
       });
      }),
      Object.keys(e.disjunctiveFacetsRefinements).forEach(function (n) {
       e.disjunctiveFacetsRefinements[n].forEach(function (i) {
        r.push(b(e, "disjunctive", n, i, t.disjunctiveFacets));
       });
      }),
      Object.keys(e.hierarchicalFacetsRefinements).forEach(function (n) {
       e.hierarchicalFacetsRefinements[n].forEach(function (i) {
        r.push(
         (function (e, t, r, n) {
          var i = e.getHierarchicalFacetByName(t),
           s = e._getHierarchicalFacetSeparator(i),
           c = r.split(s),
           u = a(n, function (e) {
            return e.name === t;
           }),
           o = c.reduce(function (e, t) {
            var r =
             e &&
             a(e.data, function (e) {
              return e.name === t;
             });
            return void 0 !== r ? r : e;
           }, u),
           h = (o && o.count) || 0,
           f = (o && o.exhaustive) || !1,
           l = (o && o.path) || "";
          return { type: "hierarchical", attributeName: t, name: l, count: h, exhaustive: f };
         })(e, n, i, t.hierarchicalFacets),
        );
       });
      }),
      Object.keys(e.numericRefinements).forEach(function (t) {
       var n = e.numericRefinements[t];
       Object.keys(n).forEach(function (e) {
        n[e].forEach(function (n) {
         r.push({ type: "numeric", attributeName: t, name: n, numericValue: n, operator: e });
        });
       });
      }),
      e.tagRefinements.forEach(function (e) {
       r.push({ type: "tag", attributeName: "_tags", name: e });
      }),
      r
     );
    }),
    (e.exports = v);
  },
  5162: (e, t, r) => {
   "use strict";
   var n = r(3698),
    i = r(57),
    s = r(6104).escapeFacetValue,
    a = r(277),
    c = r(2445),
    u = r(6439),
    o = r(4251),
    h = r(4610),
    f = r(5948),
    l = r(4124),
    m = r(4513);
   function d(e, t, r, n) {
    "function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + m + ")"), this.setClient(e);
    var i = r || {};
    (i.index = t), (this.state = f.make(i)), (this.lastResults = null), (this._queryId = 0), (this._lastQueryIdReceived = -1), (this.derivedHelpers = []), (this._currentNbQueries = 0), (this._searchResultsOptions = n);
   }
   function p(e) {
    if (e < 0) throw new Error("Page requested below 0.");
    return this._change({ state: this.state.setPage(e), isPageReset: !1 }), this;
   }
   function v() {
    return this.state.page;
   }
   a(d, n),
    (d.prototype.search = function () {
     return this._search({ onlyWithDerivedHelpers: !1 }), this;
    }),
    (d.prototype.searchOnlyWithDerivedHelpers = function () {
     return this._search({ onlyWithDerivedHelpers: !0 }), this;
    }),
    (d.prototype.getQuery = function () {
     var e = this.state;
     return h._getHitsSearchParams(e);
    }),
    (d.prototype.searchOnce = function (e, t) {
     var r = e ? this.state.setQueryParameters(e) : this.state,
      n = h._getQueries(r.index, r),
      i = this;
     if ((this._currentNbQueries++, this.emit("searchOnce", { state: r }), !t))
      return this.client.search(n).then(
       function (e) {
        return i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), { content: new l(r, e.results), state: r, _originalResponse: e };
       },
       function (e) {
        throw (i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), e);
       },
      );
     this.client
      .search(n)
      .then(function (e) {
       i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(null, new l(r, e.results), r);
      })
      .catch(function (e) {
       i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(e, null, r);
      });
    }),
    (d.prototype.findAnswers = function (e) {
     console.warn("[algoliasearch-helper] answers is no longer supported");
     var t = this.state,
      r = this.derivedHelpers[0];
     if (!r) return Promise.resolve([]);
     var n = r.getModifiedState(t),
      i = c({ attributesForPrediction: e.attributesForPrediction, nbHits: e.nbHits }, { params: o(h._getHitsSearchParams(n), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"]) }),
      s = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
     if ("function" != typeof this.client.initIndex) throw new Error(s);
     var a = this.client.initIndex(n.index);
     if ("function" != typeof a.findAnswers) throw new Error(s);
     return a.findAnswers(n.query, e.queryLanguages, i);
    }),
    (d.prototype.searchForFacetValues = function (e, t, r, n) {
     var i = "function" == typeof this.client.searchForFacetValues,
      a = "function" == typeof this.client.initIndex;
     if (!i && !a && "function" != typeof this.client.search) throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
     var c = this.state.setQueryParameters(n || {}),
      u = c.isDisjunctiveFacet(e),
      o = h.getSearchForFacetQuery(e, t, r, c);
     this._currentNbQueries++;
     var f,
      l = this;
     return (
      i
       ? (f = this.client.searchForFacetValues([{ indexName: c.index, params: o }]))
       : a
         ? (f = this.client.initIndex(c.index).searchForFacetValues(o))
         : (delete o.facetName,
           (f = this.client.search([{ type: "facet", facet: e, indexName: c.index, params: o }]).then(function (e) {
            return e.results[0];
           }))),
      this.emit("searchForFacetValues", { state: c, facet: e, query: t }),
      f.then(
       function (t) {
        return (
         l._currentNbQueries--,
         0 === l._currentNbQueries && l.emit("searchQueueEmpty"),
         (t = Array.isArray(t) ? t[0] : t).facetHits.forEach(function (t) {
          (t.escapedValue = s(t.value)), (t.isRefined = u ? c.isDisjunctiveFacetRefined(e, t.escapedValue) : c.isFacetRefined(e, t.escapedValue));
         }),
         t
        );
       },
       function (e) {
        throw (l._currentNbQueries--, 0 === l._currentNbQueries && l.emit("searchQueueEmpty"), e);
       },
      )
     );
    }),
    (d.prototype.setQuery = function (e) {
     return this._change({ state: this.state.resetPage().setQuery(e), isPageReset: !0 }), this;
    }),
    (d.prototype.clearRefinements = function (e) {
     return this._change({ state: this.state.resetPage().clearRefinements(e), isPageReset: !0 }), this;
    }),
    (d.prototype.clearTags = function () {
     return this._change({ state: this.state.resetPage().clearTags(), isPageReset: !0 }), this;
    }),
    (d.prototype.addDisjunctiveFacetRefinement = function (e, t) {
     return this._change({ state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.addDisjunctiveRefine = function () {
     return this.addDisjunctiveFacetRefinement.apply(this, arguments);
    }),
    (d.prototype.addHierarchicalFacetRefinement = function (e, t) {
     return this._change({ state: this.state.resetPage().addHierarchicalFacetRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.addNumericRefinement = function (e, t, r) {
     return this._change({ state: this.state.resetPage().addNumericRefinement(e, t, r), isPageReset: !0 }), this;
    }),
    (d.prototype.addFacetRefinement = function (e, t) {
     return this._change({ state: this.state.resetPage().addFacetRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.addRefine = function () {
     return this.addFacetRefinement.apply(this, arguments);
    }),
    (d.prototype.addFacetExclusion = function (e, t) {
     return this._change({ state: this.state.resetPage().addExcludeRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.addExclude = function () {
     return this.addFacetExclusion.apply(this, arguments);
    }),
    (d.prototype.addTag = function (e) {
     return this._change({ state: this.state.resetPage().addTagRefinement(e), isPageReset: !0 }), this;
    }),
    (d.prototype.removeNumericRefinement = function (e, t, r) {
     return this._change({ state: this.state.resetPage().removeNumericRefinement(e, t, r), isPageReset: !0 }), this;
    }),
    (d.prototype.removeDisjunctiveFacetRefinement = function (e, t) {
     return this._change({ state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.removeDisjunctiveRefine = function () {
     return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
    }),
    (d.prototype.removeHierarchicalFacetRefinement = function (e) {
     return this._change({ state: this.state.resetPage().removeHierarchicalFacetRefinement(e), isPageReset: !0 }), this;
    }),
    (d.prototype.removeFacetRefinement = function (e, t) {
     return this._change({ state: this.state.resetPage().removeFacetRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.removeRefine = function () {
     return this.removeFacetRefinement.apply(this, arguments);
    }),
    (d.prototype.removeFacetExclusion = function (e, t) {
     return this._change({ state: this.state.resetPage().removeExcludeRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.removeExclude = function () {
     return this.removeFacetExclusion.apply(this, arguments);
    }),
    (d.prototype.removeTag = function (e) {
     return this._change({ state: this.state.resetPage().removeTagRefinement(e), isPageReset: !0 }), this;
    }),
    (d.prototype.toggleFacetExclusion = function (e, t) {
     return this._change({ state: this.state.resetPage().toggleExcludeFacetRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.toggleExclude = function () {
     return this.toggleFacetExclusion.apply(this, arguments);
    }),
    (d.prototype.toggleRefinement = function (e, t) {
     return this.toggleFacetRefinement(e, t);
    }),
    (d.prototype.toggleFacetRefinement = function (e, t) {
     return this._change({ state: this.state.resetPage().toggleFacetRefinement(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.toggleRefine = function () {
     return this.toggleFacetRefinement.apply(this, arguments);
    }),
    (d.prototype.toggleTag = function (e) {
     return this._change({ state: this.state.resetPage().toggleTagRefinement(e), isPageReset: !0 }), this;
    }),
    (d.prototype.nextPage = function () {
     var e = this.state.page || 0;
     return this.setPage(e + 1);
    }),
    (d.prototype.previousPage = function () {
     var e = this.state.page || 0;
     return this.setPage(e - 1);
    }),
    (d.prototype.setCurrentPage = p),
    (d.prototype.setPage = p),
    (d.prototype.setIndex = function (e) {
     return this._change({ state: this.state.resetPage().setIndex(e), isPageReset: !0 }), this;
    }),
    (d.prototype.setQueryParameter = function (e, t) {
     return this._change({ state: this.state.resetPage().setQueryParameter(e, t), isPageReset: !0 }), this;
    }),
    (d.prototype.setState = function (e) {
     return this._change({ state: f.make(e), isPageReset: !1 }), this;
    }),
    (d.prototype.overrideStateWithoutTriggeringChangeEvent = function (e) {
     return (this.state = new f(e)), this;
    }),
    (d.prototype.hasRefinements = function (e) {
     return !!u(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e));
    }),
    (d.prototype.isExcluded = function (e, t) {
     return this.state.isExcludeRefined(e, t);
    }),
    (d.prototype.isDisjunctiveRefined = function (e, t) {
     return this.state.isDisjunctiveFacetRefined(e, t);
    }),
    (d.prototype.hasTag = function (e) {
     return this.state.isTagRefined(e);
    }),
    (d.prototype.isTagRefined = function () {
     return this.hasTagRefinements.apply(this, arguments);
    }),
    (d.prototype.getIndex = function () {
     return this.state.index;
    }),
    (d.prototype.getCurrentPage = v),
    (d.prototype.getPage = v),
    (d.prototype.getTags = function () {
     return this.state.tagRefinements;
    }),
    (d.prototype.getRefinements = function (e) {
     var t = [];
     if (this.state.isConjunctiveFacet(e))
      this.state.getConjunctiveRefinements(e).forEach(function (e) {
       t.push({ value: e, type: "conjunctive" });
      }),
       this.state.getExcludeRefinements(e).forEach(function (e) {
        t.push({ value: e, type: "exclude" });
       });
     else if (this.state.isDisjunctiveFacet(e)) {
      this.state.getDisjunctiveRefinements(e).forEach(function (e) {
       t.push({ value: e, type: "disjunctive" });
      });
     }
     var r = this.state.getNumericRefinements(e);
     return (
      Object.keys(r).forEach(function (e) {
       var n = r[e];
       t.push({ value: n, operator: e, type: "numeric" });
      }),
      t
     );
    }),
    (d.prototype.getNumericRefinement = function (e, t) {
     return this.state.getNumericRefinement(e, t);
    }),
    (d.prototype.getHierarchicalFacetBreadcrumb = function (e) {
     return this.state.getHierarchicalFacetBreadcrumb(e);
    }),
    (d.prototype._search = function (e) {
     var t = this.state,
      r = [],
      n = [];
     e.onlyWithDerivedHelpers || ((n = h._getQueries(t.index, t)), r.push({ state: t, queriesCount: n.length, helper: this }), this.emit("search", { state: t, results: this.lastResults }));
     var i = this.derivedHelpers.map(function (e) {
       var n = e.getModifiedState(t),
        i = n.index ? h._getQueries(n.index, n) : [];
       return r.push({ state: n, queriesCount: i.length, helper: e }), e.emit("search", { state: n, results: e.lastResults }), i;
      }),
      s = Array.prototype.concat.apply(n, i),
      a = this._queryId++;
     if ((this._currentNbQueries++, !s.length)) return Promise.resolve({ results: [] }).then(this._dispatchAlgoliaResponse.bind(this, r, a));
     try {
      this.client
       .search(s)
       .then(this._dispatchAlgoliaResponse.bind(this, r, a))
       .catch(this._dispatchAlgoliaError.bind(this, a));
     } catch (c) {
      this.emit("error", { error: c });
     }
    }),
    (d.prototype._dispatchAlgoliaResponse = function (e, t, r) {
     var n = this;
     if (!(t < this._lastQueryIdReceived)) {
      (this._currentNbQueries -= t - this._lastQueryIdReceived), (this._lastQueryIdReceived = t), 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
      var i = r.results.slice();
      e.forEach(function (e) {
       var t = e.state,
        r = e.queriesCount,
        s = e.helper,
        a = i.splice(0, r);
       t.index ? ((s.lastResults = new l(t, a, n._searchResultsOptions)), s.emit("result", { results: s.lastResults, state: t })) : s.emit("result", { results: null, state: t });
      });
     }
    }),
    (d.prototype._dispatchAlgoliaError = function (e, t) {
     e < this._lastQueryIdReceived || ((this._currentNbQueries -= e - this._lastQueryIdReceived), (this._lastQueryIdReceived = e), this.emit("error", { error: t }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"));
    }),
    (d.prototype.containsRefinement = function (e, t, r, n) {
     return e || 0 !== t.length || 0 !== r.length || 0 !== n.length;
    }),
    (d.prototype._hasDisjunctiveRefinements = function (e) {
     return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0;
    }),
    (d.prototype._change = function (e) {
     var t = e.state,
      r = e.isPageReset;
     t !== this.state && ((this.state = t), this.emit("change", { state: this.state, results: this.lastResults, isPageReset: r }));
    }),
    (d.prototype.clearCache = function () {
     return this.client.clearCache && this.client.clearCache(), this;
    }),
    (d.prototype.setClient = function (e) {
     return this.client === e || ("function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + m + ")"), (this.client = e)), this;
    }),
    (d.prototype.getClient = function () {
     return this.client;
    }),
    (d.prototype.derive = function (e) {
     var t = new i(this, e);
     return this.derivedHelpers.push(t), t;
    }),
    (d.prototype.detachDerivedHelper = function (e) {
     var t = this.derivedHelpers.indexOf(e);
     if (-1 === t) throw new Error("Derived helper already detached");
     this.derivedHelpers.splice(t, 1);
    }),
    (d.prototype.hasPendingRequests = function () {
     return this._currentNbQueries > 0;
    }),
    (e.exports = d);
  },
  754: (e) => {
   "use strict";
   e.exports = function (e) {
    return Array.isArray(e) ? e.filter(Boolean) : [];
   };
  },
  156: (e) => {
   "use strict";
   e.exports = function () {
    return Array.prototype.slice.call(arguments).reduceRight(function (e, t) {
     return (
      Object.keys(Object(t)).forEach(function (r) {
       void 0 !== t[r] && (void 0 !== e[r] && delete e[r], (e[r] = t[r]));
      }),
      e
     );
    }, {});
   };
  },
  6104: (e) => {
   "use strict";
   e.exports = {
    escapeFacetValue: function (e) {
     return "string" != typeof e ? e : String(e).replace(/^-/, "\\-");
    },
    unescapeFacetValue: function (e) {
     return "string" != typeof e ? e : e.replace(/^\\-/, "-");
    },
   };
  },
  8592: (e) => {
   "use strict";
   e.exports = function (e, t) {
    if (Array.isArray(e)) for (var r = 0; r < e.length; r++) if (t(e[r])) return e[r];
   };
  },
  7554: (e) => {
   "use strict";
   e.exports = function (e, t) {
    if (!Array.isArray(e)) return -1;
    for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
    return -1;
   };
  },
  2176: (e, t, r) => {
   "use strict";
   var n = r(8592);
   e.exports = function (e, t) {
    var r = (t || []).map(function (e) {
     return e.split(":");
    });
    return e.reduce(
     function (e, t) {
      var i = t.split(":"),
       s = n(r, function (e) {
        return e[0] === i[0];
       });
      return i.length > 1 || !s ? (e[0].push(i[0]), e[1].push(i[1]), e) : (e[0].push(s[0]), e[1].push(s[1]), e);
     },
     [[], []],
    );
   };
  },
  277: (e) => {
   "use strict";
   e.exports = function (e, t) {
    e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
   };
  },
  5881: (e) => {
   "use strict";
   e.exports = function (e, t) {
    return e.filter(function (r, n) {
     return t.indexOf(r) > -1 && e.indexOf(r) === n;
    });
   };
  },
  2445: (e) => {
   "use strict";
   function t(e) {
    return "function" == typeof e || Array.isArray(e) || "[object Object]" === Object.prototype.toString.call(e);
   }
   function r(e, n) {
    if (e === n) return e;
    for (var i in n)
     if (Object.prototype.hasOwnProperty.call(n, i) && "__proto__" !== i && "constructor" !== i) {
      var s = n[i],
       a = e[i];
      (void 0 !== a && void 0 === s) || (t(a) && t(s) ? (e[i] = r(a, s)) : (e[i] = "object" == typeof (c = s) && null !== c ? r(Array.isArray(c) ? [] : {}, c) : c));
     }
    var c;
    return e;
   }
   e.exports = function (e) {
    t(e) || (e = {});
    for (var n = 1, i = arguments.length; n < i; n++) {
     var s = arguments[n];
     t(s) && r(e, s);
    }
    return e;
   };
  },
  6439: (e) => {
   "use strict";
   e.exports = function (e) {
    return e && Object.keys(e).length > 0;
   };
  },
  4251: (e) => {
   "use strict";
   e.exports = function (e, t) {
    if (null === e) return {};
    var r,
     n,
     i = {},
     s = Object.keys(e);
    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i;
   };
  },
  125: (e) => {
   "use strict";
   function t(e, t) {
    if (e !== t) {
     var r = void 0 !== e,
      n = null === e,
      i = void 0 !== t,
      s = null === t;
     if ((!s && e > t) || (n && i) || !r) return 1;
     if ((!n && e < t) || (s && r) || !i) return -1;
    }
    return 0;
   }
   e.exports = function (e, r, n) {
    if (!Array.isArray(e)) return [];
    Array.isArray(n) || (n = []);
    var i = e.map(function (e, t) {
     return {
      criteria: r.map(function (t) {
       return e[t];
      }),
      index: t,
      value: e,
     };
    });
    return (
     i.sort(function (e, r) {
      for (var i = -1; ++i < e.criteria.length; ) {
       var s = t(e.criteria[i], r.criteria[i]);
       if (s) return i >= n.length ? s : "desc" === n[i] ? -s : s;
      }
      return e.index - r.index;
     }),
     i.map(function (e) {
      return e.value;
     })
    );
   };
  },
  9834: (e) => {
   "use strict";
   e.exports = function e(t) {
    if ("number" == typeof t) return t;
    if ("string" == typeof t) return parseFloat(t);
    if (Array.isArray(t)) return t.map(e);
    throw new Error("The value should be a number, a parsable string or an array of those.");
   };
  },
  4610: (e, t, r) => {
   "use strict";
   var n = r(2445);
   function i(e) {
    return Object.keys(e)
     .sort()
     .reduce(function (t, r) {
      return (t[r] = e[r]), t;
     }, {});
   }
   var s = {
    _getQueries: function (e, t) {
     var r = [];
     return (
      r.push({ indexName: e, params: s._getHitsSearchParams(t) }),
      t.getRefinedDisjunctiveFacets().forEach(function (n) {
       r.push({ indexName: e, params: s._getDisjunctiveFacetSearchParams(t, n) });
      }),
      t.getRefinedHierarchicalFacets().forEach(function (n) {
       var i = t.getHierarchicalFacetByName(n),
        a = t.getHierarchicalRefinement(n),
        c = t._getHierarchicalFacetSeparator(i);
       if (a.length > 0 && a[0].split(c).length > 1) {
        var u = a[0]
         .split(c)
         .slice(0, -1)
         .reduce(function (e, t, r) {
          return e.concat({ attribute: i.attributes[r], value: 0 === r ? t : [e[e.length - 1].value, t].join(c) });
         }, []);
        u.forEach(function (n, a) {
         var c = s._getDisjunctiveFacetSearchParams(t, n.attribute, 0 === a);
         function o(e) {
          return i.attributes.some(function (t) {
           return t === e.split(":")[0];
          });
         }
         var h = (c.facetFilters || []).reduce(function (e, t) {
           if (Array.isArray(t)) {
            var r = t.filter(function (e) {
             return !o(e);
            });
            r.length > 0 && e.push(r);
           }
           return "string" != typeof t || o(t) || e.push(t), e;
          }, []),
          f = u[a - 1];
         (c.facetFilters = a > 0 ? h.concat(f.attribute + ":" + f.value) : h.length > 0 ? h : void 0), r.push({ indexName: e, params: c });
        });
       }
      }),
      r
     );
    },
    _getHitsSearchParams: function (e) {
     var t = e.facets.concat(e.disjunctiveFacets).concat(s._getHitsHierarchicalFacetsAttributes(e)).sort(),
      r = s._getFacetFilters(e),
      a = s._getNumericFilters(e),
      c = s._getTagFilters(e),
      u = { facets: t.indexOf("*") > -1 ? ["*"] : t, tagFilters: c };
     return r.length > 0 && (u.facetFilters = r), a.length > 0 && (u.numericFilters = a), i(n({}, e.getQueryParams(), u));
    },
    _getDisjunctiveFacetSearchParams: function (e, t, r) {
     var a = s._getFacetFilters(e, t, r),
      c = s._getNumericFilters(e, t),
      u = s._getTagFilters(e),
      o = { hitsPerPage: 0, page: 0, analytics: !1, clickAnalytics: !1 };
     u.length > 0 && (o.tagFilters = u);
     var h = e.getHierarchicalFacetByName(t);
     return (o.facets = h ? s._getDisjunctiveHierarchicalFacetAttribute(e, h, r) : t), c.length > 0 && (o.numericFilters = c), a.length > 0 && (o.facetFilters = a), i(n({}, e.getQueryParams(), o));
    },
    _getNumericFilters: function (e, t) {
     if (e.numericFilters) return e.numericFilters;
     var r = [];
     return (
      Object.keys(e.numericRefinements).forEach(function (n) {
       var i = e.numericRefinements[n] || {};
       Object.keys(i).forEach(function (e) {
        var s = i[e] || [];
        t !== n &&
         s.forEach(function (t) {
          if (Array.isArray(t)) {
           var i = t.map(function (t) {
            return n + e + t;
           });
           r.push(i);
          } else r.push(n + e + t);
         });
       });
      }),
      r
     );
    },
    _getTagFilters: function (e) {
     return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",");
    },
    _getFacetFilters: function (e, t, r) {
     var n = [],
      i = e.facetsRefinements || {};
     Object.keys(i)
      .sort()
      .forEach(function (e) {
       (i[e] || []).sort().forEach(function (t) {
        n.push(e + ":" + t);
       });
      });
     var s = e.facetsExcludes || {};
     Object.keys(s)
      .sort()
      .forEach(function (e) {
       (s[e] || []).sort().forEach(function (t) {
        n.push(e + ":-" + t);
       });
      });
     var a = e.disjunctiveFacetsRefinements || {};
     Object.keys(a)
      .sort()
      .forEach(function (e) {
       var r = a[e] || [];
       if (e !== t && r && 0 !== r.length) {
        var i = [];
        r.sort().forEach(function (t) {
         i.push(e + ":" + t);
        }),
         n.push(i);
       }
      });
     var c = e.hierarchicalFacetsRefinements || {};
     return (
      Object.keys(c)
       .sort()
       .forEach(function (i) {
        var s = (c[i] || [])[0];
        if (void 0 !== s) {
         var a,
          u,
          o = e.getHierarchicalFacetByName(i),
          h = e._getHierarchicalFacetSeparator(o),
          f = e._getHierarchicalRootPath(o);
         if (t === i) {
          if (-1 === s.indexOf(h) || (!f && !0 === r) || (f && f.split(h).length === s.split(h).length)) return;
          f ? ((u = f.split(h).length - 1), (s = f)) : ((u = s.split(h).length - 2), (s = s.slice(0, s.lastIndexOf(h)))), (a = o.attributes[u]);
         } else (u = s.split(h).length - 1), (a = o.attributes[u]);
         a && n.push([a + ":" + s]);
        }
       }),
      n
     );
    },
    _getHitsHierarchicalFacetsAttributes: function (e) {
     return e.hierarchicalFacets.reduce(function (t, r) {
      var n = e.getHierarchicalRefinement(r.name)[0];
      if (!n) return t.push(r.attributes[0]), t;
      var i = e._getHierarchicalFacetSeparator(r),
       s = n.split(i).length,
       a = r.attributes.slice(0, s + 1);
      return t.concat(a);
     }, []);
    },
    _getDisjunctiveHierarchicalFacetAttribute: function (e, t, r) {
     var n = e._getHierarchicalFacetSeparator(t);
     if (!0 === r) {
      var i = e._getHierarchicalRootPath(t),
       s = 0;
      return i && (s = i.split(n).length), [t.attributes[s]];
     }
     var a = (e.getHierarchicalRefinement(t.name)[0] || "").split(n).length - 1;
     return t.attributes.slice(0, a + 1);
    },
    getSearchForFacetQuery: function (e, t, r, a) {
     var c = a.isDisjunctiveFacet(e) ? a.clearRefinements(e) : a,
      u = { facetQuery: t, facetName: e };
     return "number" == typeof r && (u.maxFacetHits = r), i(n({}, s._getHitsSearchParams(c), u));
    },
   };
   e.exports = s;
  },
  9402: (e) => {
   "use strict";
   e.exports = function (e) {
    return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e);
   };
  },
  4513: (e) => {
   "use strict";
   e.exports = "3.16.0";
  },
  6404: function (e) {
   e.exports = (function () {
    "use strict";
    function e(e, t, r) {
     return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
    }
    function t(e, t) {
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
    function r(r) {
     for (var n = 1; n < arguments.length; n++) {
      var i = null != arguments[n] ? arguments[n] : {};
      n % 2
       ? t(Object(i), !0).forEach(function (t) {
          e(r, t, i[t]);
         })
       : Object.getOwnPropertyDescriptors
         ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
         : t(Object(i)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
           });
     }
     return r;
    }
    function n(e, t) {
     if (null == e) return {};
     var r,
      n,
      i = (function (e, t) {
       if (null == e) return {};
       var r,
        n,
        i = {},
        s = Object.keys(e);
       for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
       return i;
      })(e, t);
     if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
     }
     return i;
    }
    function i(e, t) {
     return (
      (function (e) {
       if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
       if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var r = [],
         n = !0,
         i = !1,
         s = void 0;
        try {
         for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
        } catch (e) {
         (i = !0), (s = e);
        } finally {
         try {
          n || null == c.return || c.return();
         } finally {
          if (i) throw s;
         }
        }
        return r;
       }
      })(e, t) ||
      (function () {
       throw new TypeError("Invalid attempt to destructure non-iterable instance");
      })()
     );
    }
    function s(e) {
     return (
      (function (e) {
       if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
       }
      })(e) ||
      (function (e) {
       if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      })(e) ||
      (function () {
       throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
     );
    }
    function a(e) {
     var t,
      r = "algoliasearch-client-js-".concat(e.key),
      n = function () {
       return void 0 === t && (t = e.localStorage || window.localStorage), t;
      },
      s = function () {
       return JSON.parse(n().getItem(r) || "{}");
      },
      a = function (e) {
       n().setItem(r, JSON.stringify(e));
      },
      c = function () {
       var t = e.timeToLive ? 1e3 * e.timeToLive : null,
        r = s(),
        n = Object.fromEntries(
         Object.entries(r).filter(function (e) {
          return void 0 !== i(e, 2)[1].timestamp;
         }),
        );
       if ((a(n), t)) {
        var c = Object.fromEntries(
         Object.entries(n).filter(function (e) {
          var r = i(e, 2)[1],
           n = new Date().getTime();
          return !(r.timestamp + t < n);
         }),
        );
        a(c);
       }
      };
     return {
      get: function (e, t) {
       var r =
        arguments.length > 2 && void 0 !== arguments[2]
         ? arguments[2]
         : {
            miss: function () {
             return Promise.resolve();
            },
           };
       return Promise.resolve()
        .then(function () {
         c();
         var t = JSON.stringify(e);
         return s()[t];
        })
        .then(function (e) {
         return Promise.all([e ? e.value : t(), void 0 !== e]);
        })
        .then(function (e) {
         var t = i(e, 2),
          n = t[0],
          s = t[1];
         return Promise.all([n, s || r.miss(n)]);
        })
        .then(function (e) {
         return i(e, 1)[0];
        });
      },
      set: function (e, t) {
       return Promise.resolve().then(function () {
        var i = s();
        return (i[JSON.stringify(e)] = { timestamp: new Date().getTime(), value: t }), n().setItem(r, JSON.stringify(i)), t;
       });
      },
      delete: function (e) {
       return Promise.resolve().then(function () {
        var t = s();
        delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t));
       });
      },
      clear: function () {
       return Promise.resolve().then(function () {
        n().removeItem(r);
       });
      },
     };
    }
    function c(e) {
     var t = s(e.caches),
      r = t.shift();
     return void 0 === r
      ? {
         get: function (e, t) {
          var r =
           arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {
               miss: function () {
                return Promise.resolve();
               },
              };
          return t()
           .then(function (e) {
            return Promise.all([e, r.miss(e)]);
           })
           .then(function (e) {
            return i(e, 1)[0];
           });
         },
         set: function (e, t) {
          return Promise.resolve(t);
         },
         delete: function (e) {
          return Promise.resolve();
         },
         clear: function () {
          return Promise.resolve();
         },
        }
      : {
         get: function (e, n) {
          var i =
           arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {
               miss: function () {
                return Promise.resolve();
               },
              };
          return r.get(e, n, i).catch(function () {
           return c({ caches: t }).get(e, n, i);
          });
         },
         set: function (e, n) {
          return r.set(e, n).catch(function () {
           return c({ caches: t }).set(e, n);
          });
         },
         delete: function (e) {
          return r.delete(e).catch(function () {
           return c({ caches: t }).delete(e);
          });
         },
         clear: function () {
          return r.clear().catch(function () {
           return c({ caches: t }).clear();
          });
         },
        };
    }
    function u() {
     var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: !0 },
      t = {};
     return {
      get: function (r, n) {
       var i =
         arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : {
             miss: function () {
              return Promise.resolve();
             },
            },
        s = JSON.stringify(r);
       if (s in t) return Promise.resolve(e.serializable ? JSON.parse(t[s]) : t[s]);
       var a = n(),
        c =
         (i && i.miss) ||
         function () {
          return Promise.resolve();
         };
       return a
        .then(function (e) {
         return c(e);
        })
        .then(function () {
         return a;
        });
      },
      set: function (r, n) {
       return (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n), Promise.resolve(n);
      },
      delete: function (e) {
       return delete t[JSON.stringify(e)], Promise.resolve();
      },
      clear: function () {
       return (t = {}), Promise.resolve();
      },
     };
    }
    function o(e) {
     for (var t = e.length - 1; t > 0; t--) {
      var r = Math.floor(Math.random() * (t + 1)),
       n = e[t];
      (e[t] = e[r]), (e[r] = n);
     }
     return e;
    }
    function h(e, t) {
     return t
      ? (Object.keys(t).forEach(function (r) {
         e[r] = t[r](e);
        }),
        e)
      : e;
    }
    function f(e) {
     for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
     var i = 0;
     return e.replace(/%s/g, function () {
      return encodeURIComponent(r[i++]);
     });
    }
    var l = { WithinQueryParameters: 0, WithinHeaders: 1 };
    function m(e, t) {
     var r = e || {},
      n = r.data || {};
     return (
      Object.keys(r).forEach(function (e) {
       -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = r[e]);
      }),
      { data: Object.entries(n).length > 0 ? n : void 0, timeout: r.timeout || t, headers: r.headers || {}, queryParameters: r.queryParameters || {}, cacheable: r.cacheable }
     );
    }
    var d = { Read: 1, Write: 2, Any: 3 },
     p = 1,
     v = 2,
     g = 3;
    function y(e) {
     var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
     return r(r({}, e), {}, { status: t, lastUpdate: Date.now() });
    }
    function R(e) {
     return "string" == typeof e ? { protocol: "https", url: e, accept: d.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || d.Any };
    }
    var F = "GET",
     b = "POST";
    function j(e, t) {
     return Promise.all(
      t.map(function (t) {
       return e.get(t, function () {
        return Promise.resolve(y(t));
       });
      }),
     ).then(function (e) {
      var r = e.filter(function (e) {
        return (function (e) {
         return e.status === p || Date.now() - e.lastUpdate > 12e4;
        })(e);
       }),
       n = e.filter(function (e) {
        return (function (e) {
         return e.status === g && Date.now() - e.lastUpdate <= 12e4;
        })(e);
       }),
       i = [].concat(s(r), s(n));
      return {
       getTimeout: function (e, t) {
        return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
       },
       statelessHosts:
        i.length > 0
         ? i.map(function (e) {
            return R(e);
           })
         : t,
      };
     });
    }
    function P(e, t, n, i) {
     var a = [],
      c = (function (e, t) {
       if (e.method !== F && (void 0 !== e.data || void 0 !== t.data)) {
        var n = Array.isArray(e.data) ? e.data : r(r({}, e.data), t.data);
        return JSON.stringify(n);
       }
      })(n, i),
      u = (function (e, t) {
       var n = r(r({}, e.headers), t.headers),
        i = {};
       return (
        Object.keys(n).forEach(function (e) {
         var t = n[e];
         i[e.toLowerCase()] = t;
        }),
        i
       );
      })(e, i),
      o = n.method,
      h = n.method !== F ? {} : r(r({}, n.data), i.data),
      f = r(r(r({ "x-algolia-agent": e.userAgent.value }, e.queryParameters), h), i.queryParameters),
      l = 0,
      m = function t(r, s) {
       var h = r.pop();
       if (void 0 === h) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: O(a) };
       var m = { data: c, headers: u, method: o, url: _(h, n.path, f), connectTimeout: s(l, e.timeouts.connect), responseTimeout: s(l, i.timeout) },
        d = function (e) {
         var t = { request: m, response: e, host: h, triesLeft: r.length };
         return a.push(t), t;
        },
        p = {
         onSuccess: function (e) {
          return (function (e) {
           try {
            return JSON.parse(e.content);
           } catch (t) {
            throw (function (e, t) {
             return { name: "DeserializationError", message: e, response: t };
            })(t.message, e);
           }
          })(e);
         },
         onRetry: function (n) {
          var i = d(n);
          return (
           n.isTimedOut && l++,
           Promise.all([e.logger.info("Retryable failure", w(i)), e.hostsCache.set(h, y(h, n.isTimedOut ? g : v))]).then(function () {
            return t(r, s);
           })
          );
         },
         onFail: function (e) {
          throw (
           (d(e),
           (function (e, t) {
            var r = e.content,
             n = e.status,
             i = r;
            try {
             i = JSON.parse(r).message;
            } catch (e) {}
            return (function (e, t, r) {
             return { name: "ApiError", message: e, status: t, transporterStackTrace: r };
            })(i, n, t);
           })(e, O(a)))
          );
         },
        };
       return e.requester.send(m).then(function (e) {
        return (function (e, t) {
         return (function (e) {
          var t = e.status;
          return (
           e.isTimedOut ||
           (function (e) {
            var t = e.isTimedOut,
             r = e.status;
            return !t && 0 == ~~r;
           })(e) ||
           (2 != ~~(t / 100) && 4 != ~~(t / 100))
          );
         })(e)
          ? t.onRetry(e)
          : 2 == ~~(e.status / 100)
            ? t.onSuccess(e)
            : t.onFail(e);
        })(e, p);
       });
      };
     return j(e.hostsCache, t).then(function (e) {
      return m(s(e.statelessHosts).reverse(), e.getTimeout);
     });
    }
    function x(e) {
     var t = {
      value: "Algolia for JavaScript (".concat(e, ")"),
      add: function (e) {
       var r = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
       return -1 === t.value.indexOf(r) && (t.value = "".concat(t.value).concat(r)), t;
      },
     };
     return t;
    }
    function _(e, t, r) {
     var n = E(r),
      i = ""
       .concat(e.protocol, "://")
       .concat(e.url, "/")
       .concat("/" === t.charAt(0) ? t.substr(1) : t);
     return n.length && (i += "?".concat(n)), i;
    }
    function E(e) {
     return Object.keys(e)
      .map(function (t) {
       return f("%s=%s", t, ((r = e[t]), "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]));
       var r;
      })
      .join("&");
    }
    function O(e) {
     return e.map(function (e) {
      return w(e);
     });
    }
    function w(e) {
     var t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
     return r(r({}, e), {}, { request: r(r({}, e.request), {}, { headers: r(r({}, e.request.headers), t) }) });
    }
    var N = function (e) {
      var t = e.appId,
       n = (function (e, t, r) {
        var n = { "x-algolia-api-key": r, "x-algolia-application-id": t };
        return {
         headers: function () {
          return e === l.WithinHeaders ? n : {};
         },
         queryParameters: function () {
          return e === l.WithinQueryParameters ? n : {};
         },
        };
       })(void 0 !== e.authMode ? e.authMode : l.WithinHeaders, t, e.apiKey),
       s = (function (e) {
        var t = e.hostsCache,
         r = e.logger,
         n = e.requester,
         s = e.requestsCache,
         a = e.responsesCache,
         c = e.timeouts,
         u = e.userAgent,
         o = e.hosts,
         h = e.queryParameters,
         f = {
          hostsCache: t,
          logger: r,
          requester: n,
          requestsCache: s,
          responsesCache: a,
          timeouts: c,
          userAgent: u,
          headers: e.headers,
          queryParameters: h,
          hosts: o.map(function (e) {
           return R(e);
          }),
          read: function (e, t) {
           var r = m(t, f.timeouts.read),
            n = function () {
             return P(
              f,
              f.hosts.filter(function (e) {
               return 0 != (e.accept & d.Read);
              }),
              e,
              r,
             );
            };
           if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return n();
           var s = { request: e, mappedRequestOptions: r, transporter: { queryParameters: f.queryParameters, headers: f.headers } };
           return f.responsesCache.get(
            s,
            function () {
             return f.requestsCache.get(s, function () {
              return f.requestsCache
               .set(s, n())
               .then(
                function (e) {
                 return Promise.all([f.requestsCache.delete(s), e]);
                },
                function (e) {
                 return Promise.all([f.requestsCache.delete(s), Promise.reject(e)]);
                },
               )
               .then(function (e) {
                var t = i(e, 2);
                return t[0], t[1];
               });
             });
            },
            {
             miss: function (e) {
              return f.responsesCache.set(s, e);
             },
            },
           );
          },
          write: function (e, t) {
           return P(
            f,
            f.hosts.filter(function (e) {
             return 0 != (e.accept & d.Write);
            }),
            e,
            m(t, f.timeouts.write),
           );
          },
         };
        return f;
       })(
        r(
         r(
          {
           hosts: [
            { url: "".concat(t, "-dsn.algolia.net"), accept: d.Read },
            { url: "".concat(t, ".algolia.net"), accept: d.Write },
           ].concat(o([{ url: "".concat(t, "-1.algolianet.com") }, { url: "".concat(t, "-2.algolianet.com") }, { url: "".concat(t, "-3.algolianet.com") }])),
          },
          e,
         ),
         {},
         { headers: r(r(r({}, n.headers()), { "content-type": "application/x-www-form-urlencoded" }), e.headers), queryParameters: r(r({}, n.queryParameters()), e.queryParameters) },
        ),
       );
      return h(
       {
        transporter: s,
        appId: t,
        addAlgoliaAgent: function (e, t) {
         s.userAgent.add({ segment: e, version: t });
        },
        clearCache: function () {
         return Promise.all([s.requestsCache.clear(), s.responsesCache.clear()]).then(function () {});
        },
       },
       e.methods,
      );
     },
     A = function (e) {
      return function (t, r) {
       return t.method === F ? e.transporter.read(t, r) : e.transporter.write(t, r);
      };
     },
     H = function (e) {
      return function (t) {
       var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
       return h({ transporter: e.transporter, appId: e.appId, indexName: t }, r.methods);
      };
     },
     S = function (e) {
      return function (t, n) {
       var i = t.map(function (e) {
        return r(r({}, e), {}, { params: E(e.params || {}) });
       });
       return e.transporter.read({ method: b, path: "1/indexes/*/queries", data: { requests: i }, cacheable: !0 }, n);
      };
     },
     T = function (e) {
      return function (t, i) {
       return Promise.all(
        t.map(function (t) {
         var s = t.params,
          a = s.facetName,
          c = s.facetQuery,
          u = n(s, ["facetName", "facetQuery"]);
         return H(e)(t.indexName, { methods: { searchForFacetValues: I } }).searchForFacetValues(a, c, r(r({}, i), u));
        }),
       );
      };
     },
     Q = function (e) {
      return function (t, r, n) {
       return e.transporter.read({ method: b, path: f("1/answers/%s/prediction", e.indexName), data: { query: t, queryLanguages: r }, cacheable: !0 }, n);
      };
     },
     C = function (e) {
      return function (t, r) {
       return e.transporter.read({ method: b, path: f("1/indexes/%s/query", e.indexName), data: { query: t }, cacheable: !0 }, r);
      };
     },
     I = function (e) {
      return function (t, r, n) {
       return e.transporter.read({ method: b, path: f("1/indexes/%s/facets/%s/query", e.indexName, t), data: { facetQuery: r }, cacheable: !0 }, n);
      };
     },
     D = 1,
     k = 2,
     q = 3;
    function V(e, t, n) {
     var i,
      s = {
       appId: e,
       apiKey: t,
       timeouts: { connect: 1, read: 2, write: 30 },
       requester: {
        send: function (e) {
         return new Promise(function (t) {
          var r = new XMLHttpRequest();
          r.open(e.method, e.url, !0),
           Object.keys(e.headers).forEach(function (t) {
            return r.setRequestHeader(t, e.headers[t]);
           });
          var n,
           i = function (e, n) {
            return setTimeout(function () {
             r.abort(), t({ status: 0, content: n, isTimedOut: !0 });
            }, 1e3 * e);
           },
           s = i(e.connectTimeout, "Connection timeout");
          (r.onreadystatechange = function () {
           r.readyState > r.OPENED && void 0 === n && (clearTimeout(s), (n = i(e.responseTimeout, "Socket timeout")));
          }),
           (r.onerror = function () {
            0 === r.status && (clearTimeout(s), clearTimeout(n), t({ content: r.responseText || "Network request failed", status: r.status, isTimedOut: !1 }));
           }),
           (r.onload = function () {
            clearTimeout(s), clearTimeout(n), t({ content: r.responseText, status: r.status, isTimedOut: !1 });
           }),
           r.send(e.data);
         });
        },
       },
       logger:
        ((i = q),
        {
         debug: function (e, t) {
          return D >= i && console.debug(e, t), Promise.resolve();
         },
         info: function (e, t) {
          return k >= i && console.info(e, t), Promise.resolve();
         },
         error: function (e, t) {
          return console.error(e, t), Promise.resolve();
         },
        }),
       responsesCache: u(),
       requestsCache: u({ serializable: !1 }),
       hostsCache: c({ caches: [a({ key: "".concat("4.21.1", "-").concat(e) }), u()] }),
       userAgent: x("4.21.1").add({ segment: "Browser", version: "lite" }),
       authMode: l.WithinQueryParameters,
      };
     return N(
      r(
       r(r({}, s), n),
       {},
       {
        methods: {
         search: S,
         searchForFacetValues: T,
         multipleQueries: S,
         multipleSearchForFacetValues: T,
         customRequest: A,
         initIndex: function (e) {
          return function (t) {
           return H(e)(t, { methods: { search: C, searchForFacetValues: I, findAnswers: Q } });
          };
         },
        },
       },
      ),
     );
    }
    return (V.version = "4.21.1"), V;
   })();
  },
  7196: (e, t, r) => {
   "use strict";
   r.d(t, { c: () => o });
   var n = r(959),
    i = r(5090);
   const s = ["zero", "one", "two", "few", "many", "other"];
   function a(e) {
    return s.filter((t) => e.includes(t));
   }
   const c = { locale: "en", pluralForms: a(["one", "other"]), select: (e) => (1 === e ? "one" : "other") };
   function u() {
    const {
     i18n: { currentLocale: e },
    } = (0, i.Z)();
    return (0, n.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: a(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), c;
     }
    }, [e]);
   }
   function o() {
    const e = u();
    return {
     selectMessage: (t, r) =>
      (function (e, t, r) {
       const n = e.split("|");
       if (1 === n.length) return n[0];
       n.length > r.pluralForms.length && console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);
       const i = r.select(t),
        s = r.pluralForms.indexOf(i);
       return n[Math.min(s, n.length - 1)];
      })(r, t, e),
    };
   }
  },
  8954: (e, t, r) => {
   "use strict";
   r.r(t), r.d(t, { default: () => w });
   var n = r(959),
    i = r(6259),
    s = r(4294),
    a = r.n(s),
    c = r(6404),
    u = r.n(c),
    o = r(6230),
    h = r(1911),
    f = r(8812),
    l = r(9306),
    m = r(7196),
    d = r(1916),
    p = r(7362),
    v = r(8270),
    g = r(2502),
    y = r(8714),
    R = r(5090),
    F = r(9686),
    b = r(2553),
    j = r(8659),
    P = r(9024);
   const x = { searchQueryInput: "searchQueryInput_kapr", searchVersionInput: "searchVersionInput_r_Gk", searchResultsColumn: "searchResultsColumn_Go6P", algoliaLogo: "algoliaLogo_I7Xs", algoliaLogoPathFill: "algoliaLogoPathFill_lsjB", searchResultItem: "searchResultItem_zCbR", searchResultItemHeading: "searchResultItemHeading_VWvS", searchResultItemPath: "searchResultItemPath_CSAH", searchResultItemSummary: "searchResultItemSummary_lyg2", searchQueryColumn: "searchQueryColumn_fSTJ", searchVersionColumn: "searchVersionColumn_DV5j", searchLogoColumn: "searchLogoColumn_Y4Lh", loadingSpinner: "loadingSpinner_Te33", "loading-spin": "loading-spin_lerk", loader: "loader_sVfL" };
   var _ = r(1527);
   function E(e) {
    let { docsSearchVersionsHelpers: t } = e;
    const r = Object.entries(t.allDocsData).filter((e) => {
     let [, t] = e;
     return t.versions.length > 1;
    });
    return (0, _.jsx)("div", {
     className: (0, i.Z)("col", "col--3", "padding-left--none", x.searchVersionColumn),
     children: r.map((e) => {
      let [n, i] = e;
      const s = r.length > 1 ? `${n}: ` : "";
      return (0, _.jsx)("select", { onChange: (e) => t.setSearchVersion(n, e.target.value), defaultValue: t.searchVersions[n], className: x.searchVersionInput, children: i.versions.map((e, t) => (0, _.jsx)("option", { label: `${s}${e.label}`, value: e.name }, t)) }, n);
     }),
    });
   }
   function O() {
    const {
      i18n: { currentLocale: e },
     } = (0, R.Z)(),
     {
      algolia: { appId: t, apiKey: r, indexName: s },
     } = (0, F.L)(),
     c = (0, b.l)(),
     v = (function () {
      const { selectMessage: e } = (0, m.c)();
      return (t) => e(t, (0, y.I)({ id: "theme.SearchPage.documentsFound.plurals", description: 'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: "One document found|{count} documents found" }, { count: t }));
     })(),
     O = (function () {
      const e = (0, l._r)(),
       [t, r] = (0, n.useState)(() =>
        Object.entries(e).reduce((e, t) => {
         let [r, n] = t;
         return { ...e, [r]: n.versions[0].name };
        }, {}),
       ),
       i = Object.values(e).some((e) => e.versions.length > 1);
      return { allDocsData: e, versioningEnabled: i, searchVersions: t, setSearchVersion: (e, t) => r((r) => ({ ...r, [e]: t })) };
     })(),
     [w, N] = (0, d.K)(),
     A = { items: [], query: null, totalResults: null, totalPages: null, lastPage: null, hasMore: null, loading: null },
     [H, S] = (0, n.useReducer)((e, t) => {
      switch (t.type) {
       case "reset":
        return A;
       case "loading":
        return { ...e, loading: !0 };
       case "update":
        return w !== t.value.query ? e : { ...t.value, items: 0 === t.value.lastPage ? t.value.items : e.items.concat(t.value.items) };
       case "advance": {
        const t = e.totalPages > e.lastPage + 1;
        return { ...e, lastPage: t ? e.lastPage + 1 : e.lastPage, hasMore: t };
       }
       default:
        return e;
      }
     }, A),
     T = u()(t, r),
     Q = a()(T, s, { hitsPerPage: 15, advancedSyntax: !0, disjunctiveFacets: ["language", "docusaurus_tag"] });
    Q.on("result", (e) => {
     let {
      results: { query: t, hits: r, page: n, nbHits: i, nbPages: s },
     } = e;
     if ("" === t || !Array.isArray(r)) return void S({ type: "reset" });
     const a = (e) => e.replace(/algolia-docsearch-suggestion--highlight/g, "search-result-match"),
      u = r.map((e) => {
       let {
        url: t,
        _highlightResult: { hierarchy: r },
        _snippetResult: n = {},
       } = e;
       const i = Object.keys(r).map((e) => a(r[e].value));
       return { title: i.pop(), url: c(t), summary: n.content ? `${a(n.content.value)}...` : "", breadcrumbs: i };
      });
     S({ type: "update", value: { items: u, query: t, totalResults: i, totalPages: s, lastPage: n, hasMore: s > n + 1, loading: !1 } });
    });
    const [C, I] = (0, n.useState)(null),
     D = (0, n.useRef)(0),
     k = (0, n.useRef)(
      o.Z.canUseIntersectionObserver &&
       new IntersectionObserver(
        (e) => {
         const {
          isIntersecting: t,
          boundingClientRect: { y: r },
         } = e[0];
         t && D.current > r && S({ type: "advance" }), (D.current = r);
        },
        { threshold: 1 },
       ),
     ),
     q = () => (w ? (0, y.I)({ id: "theme.SearchPage.existingResultsTitle", message: 'Search results for "{query}"', description: "The search page title for non-empty query" }, { query: w }) : (0, y.I)({ id: "theme.SearchPage.emptyResultsTitle", message: "Search the documentation", description: "The search page title for empty query" })),
     V = (0, p.zX)(function (t) {
      void 0 === t && (t = 0),
       Q.addDisjunctiveFacetRefinement("docusaurus_tag", "default"),
       Q.addDisjunctiveFacetRefinement("language", e),
       Object.entries(O.searchVersions).forEach((e) => {
        let [t, r] = e;
        Q.addDisjunctiveFacetRefinement("docusaurus_tag", `docs-${t}-${r}`);
       }),
       Q.setQuery(w).setPage(t).search();
     });
    return (
     (0, n.useEffect)(() => {
      if (!C) return;
      const e = k.current;
      return e ? (e.observe(C), () => e.unobserve(C)) : () => !0;
     }, [C]),
     (0, n.useEffect)(() => {
      S({ type: "reset" }),
       w &&
        (S({ type: "loading" }),
        setTimeout(() => {
         V();
        }, 300));
     }, [w, O.searchVersions, V]),
     (0, n.useEffect)(() => {
      H.lastPage && 0 !== H.lastPage && V(H.lastPage);
     }, [V, H.lastPage]),
     (0, _.jsxs)(j.Z, {
      children: [
       (0, _.jsxs)(h.Z, { children: [(0, _.jsx)("title", { children: (0, g.p)(q()) }), (0, _.jsx)("meta", { property: "robots", content: "noindex, follow" })] }),
       (0, _.jsxs)("div", {
        className: "container margin-vert--lg",
        children: [
         (0, _.jsx)(P.Z, { as: "h1", children: q() }),
         (0, _.jsxs)("form", { className: "row", onSubmit: (e) => e.preventDefault(), children: [(0, _.jsx)("div", { className: (0, i.Z)("col", x.searchQueryColumn, { "col--9": O.versioningEnabled, "col--12": !O.versioningEnabled }), children: (0, _.jsx)("input", { type: "search", name: "q", className: x.searchQueryInput, placeholder: (0, y.I)({ id: "theme.SearchPage.inputPlaceholder", message: "Type your search here", description: "The placeholder for search page input" }), "aria-label": (0, y.I)({ id: "theme.SearchPage.inputLabel", message: "Search", description: "The ARIA label for search page input" }), onChange: (e) => N(e.target.value), value: w, autoComplete: "off", autoFocus: !0 }) }), O.versioningEnabled && (0, _.jsx)(E, { docsSearchVersionsHelpers: O })] }),
         (0, _.jsxs)("div", { className: "row", children: [(0, _.jsx)("div", { className: (0, i.Z)("col", "col--8", x.searchResultsColumn), children: !!H.totalResults && v(H.totalResults) }), (0, _.jsx)("div", { className: (0, i.Z)("col", "col--4", "text--right", x.searchLogoColumn), children: (0, _.jsx)(f.Z, { to: "https://www.algolia.com/", "aria-label": (0, y.I)({ id: "theme.SearchPage.algoliaLabel", message: "Search by Algolia", description: "The ARIA label for Algolia mention" }), children: (0, _.jsx)("svg", { viewBox: "0 0 168 24", className: x.algoliaLogo, children: (0, _.jsxs)("g", { fill: "none", children: [(0, _.jsx)("path", { className: x.algoliaLogoPathFill, d: "M120.925 18.804c-4.386.02-4.386-3.54-4.386-4.106l-.007-13.336 2.675-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-10.846-2.18c.821 0 1.43-.047 1.855-.129v-2.719a6.334 6.334 0 0 0-1.574-.199 5.7 5.7 0 0 0-.897.069 2.699 2.699 0 0 0-.814.24c-.24.116-.439.28-.582.491-.15.212-.219.335-.219.656 0 .628.219.991.616 1.23s.938.362 1.615.362zm-.233-9.7c.883 0 1.629.109 2.231.328.602.218 1.088.525 1.444.915.363.396.609.922.76 1.483.157.56.232 1.175.232 1.85v6.874a32.5 32.5 0 0 1-1.868.314c-.834.123-1.772.185-2.813.185-.69 0-1.327-.069-1.895-.198a4.001 4.001 0 0 1-1.471-.636 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.803 0-.656.13-1.073.384-1.525a3.24 3.24 0 0 1 1.047-1.106c.445-.287.95-.492 1.532-.615a8.8 8.8 0 0 1 1.82-.185 8.404 8.404 0 0 1 1.972.24v-.438c0-.307-.035-.6-.11-.874a1.88 1.88 0 0 0-.384-.73 1.784 1.784 0 0 0-.724-.493 3.164 3.164 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.735 7.735 0 0 0-1.26.307l-.321-2.192c.335-.117.834-.233 1.478-.349a10.98 10.98 0 0 1 2.073-.178zm52.842 9.626c.822 0 1.43-.048 1.854-.13V13.7a6.347 6.347 0 0 0-1.574-.199c-.294 0-.595.021-.896.069a2.7 2.7 0 0 0-.814.24 1.46 1.46 0 0 0-.582.491c-.15.212-.218.335-.218.656 0 .628.218.991.615 1.23.404.245.938.362 1.615.362zm-.226-9.694c.883 0 1.629.108 2.231.327.602.219 1.088.526 1.444.915.355.39.609.923.759 1.483a6.8 6.8 0 0 1 .233 1.852v6.873c-.41.088-1.034.19-1.868.314-.834.123-1.772.184-2.813.184-.69 0-1.327-.068-1.895-.198a4.001 4.001 0 0 1-1.471-.635 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.804 0-.656.13-1.073.384-1.524.26-.45.608-.82 1.047-1.107.445-.286.95-.491 1.532-.614a8.803 8.803 0 0 1 2.751-.13c.329.034.671.096 1.04.185v-.437a3.3 3.3 0 0 0-.109-.875 1.873 1.873 0 0 0-.384-.731 1.784 1.784 0 0 0-.724-.492 3.165 3.165 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.75 7.75 0 0 0-1.26.307l-.321-2.193c.335-.116.834-.232 1.478-.348a11.633 11.633 0 0 1 2.073-.177zm-8.034-1.271a1.626 1.626 0 0 1-1.628-1.62c0-.895.725-1.62 1.628-1.62.904 0 1.63.725 1.63 1.62 0 .895-.733 1.62-1.63 1.62zm1.348 13.22h-2.689V7.27l2.69-.423v11.956zm-4.714 0c-4.386.02-4.386-3.54-4.386-4.107l-.008-13.336 2.676-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-8.698-5.903c0-1.156-.253-2.119-.746-2.788-.493-.677-1.183-1.01-2.067-1.01-.882 0-1.574.333-2.065 1.01-.493.676-.733 1.632-.733 2.788 0 1.168.246 1.953.74 2.63.492.683 1.183 1.018 2.066 1.018.882 0 1.574-.342 2.067-1.019.492-.683.738-1.46.738-2.63zm2.737-.007c0 .902-.13 1.584-.397 2.33a5.52 5.52 0 0 1-1.128 1.906 4.986 4.986 0 0 1-1.752 1.223c-.685.286-1.739.45-2.265.45-.528-.006-1.574-.157-2.252-.45a5.096 5.096 0 0 1-1.744-1.223c-.487-.527-.863-1.162-1.137-1.906a6.345 6.345 0 0 1-.41-2.33c0-.902.123-1.77.397-2.508a5.554 5.554 0 0 1 1.15-1.892 5.133 5.133 0 0 1 1.75-1.216c.679-.287 1.425-.423 2.232-.423.808 0 1.553.142 2.237.423a4.88 4.88 0 0 1 1.753 1.216 5.644 5.644 0 0 1 1.135 1.892c.287.738.431 1.606.431 2.508zm-20.138 0c0 1.12.246 2.363.738 2.882.493.52 1.13.78 1.91.78.424 0 .828-.062 1.204-.178.377-.116.677-.253.917-.417V9.33a10.476 10.476 0 0 0-1.766-.226c-.971-.028-1.71.37-2.23 1.004-.513.636-.773 1.75-.773 2.788zm7.438 5.274c0 1.824-.466 3.156-1.404 4.004-.936.846-2.367 1.27-4.296 1.27-.705 0-2.17-.137-3.34-.396l.431-2.118c.98.205 2.272.26 2.95.26 1.074 0 1.84-.219 2.299-.656.459-.437.684-1.086.684-1.948v-.437a8.07 8.07 0 0 1-1.047.397c-.43.13-.93.198-1.492.198-.739 0-1.41-.116-2.018-.349a4.206 4.206 0 0 1-1.567-1.025c-.431-.45-.774-1.017-1.013-1.694-.24-.677-.363-1.885-.363-2.773 0-.834.13-1.88.384-2.577.26-.696.629-1.298 1.129-1.796.493-.498 1.095-.881 1.8-1.162a6.605 6.605 0 0 1 2.428-.457c.87 0 1.67.109 2.45.24.78.129 1.444.265 1.985.415V18.17zM6.972 6.677v1.627c-.712-.446-1.52-.67-2.425-.67-.585 0-1.045.13-1.38.391a1.24 1.24 0 0 0-.502 1.03c0 .425.164.765.494 1.02.33.256.835.532 1.516.83.447.192.795.356 1.045.495.25.138.537.332.862.582.324.25.563.548.718.894.154.345.23.741.23 1.188 0 .947-.334 1.691-1.004 2.234-.67.542-1.537.814-2.601.814-1.18 0-2.16-.229-2.936-.686v-1.708c.84.628 1.814.942 2.92.942.585 0 1.048-.136 1.388-.407.34-.271.51-.646.51-1.125 0-.287-.1-.55-.302-.79-.203-.24-.42-.42-.655-.542-.234-.123-.585-.29-1.053-.503a61.27 61.27 0 0 1-.582-.271 13.67 13.67 0 0 1-.55-.287 4.275 4.275 0 0 1-.567-.351 6.92 6.92 0 0 1-.455-.4c-.18-.17-.31-.34-.39-.51-.08-.17-.155-.37-.224-.598a2.553 2.553 0 0 1-.104-.742c0-.915.333-1.638.998-2.17.664-.532 1.523-.798 2.576-.798.968 0 1.793.17 2.473.51zm7.468 5.696v-.287c-.022-.607-.187-1.088-.495-1.444-.309-.357-.75-.535-1.324-.535-.532 0-.99.194-1.373.583-.382.388-.622.949-.717 1.683h3.909zm1.005 2.792v1.404c-.596.34-1.383.51-2.362.51-1.255 0-2.255-.377-3-1.132-.744-.755-1.116-1.744-1.116-2.968 0-1.297.34-2.316 1.021-3.055.68-.74 1.548-1.11 2.6-1.11 1.033 0 1.852.323 2.458.966.606.644.91 1.572.91 2.784 0 .33-.033.676-.096 1.038h-5.314c.107.702.405 1.239.894 1.611.49.372 1.106.558 1.85.558.862 0 1.58-.202 2.155-.606zm6.605-1.77h-1.212c-.596 0-1.045.116-1.349.35-.303.234-.454.532-.454.894 0 .372.117.664.35.877.235.213.575.32 1.022.32.51 0 .912-.142 1.204-.424.293-.281.44-.651.44-1.108v-.91zm-4.068-2.554V9.325c.627-.361 1.457-.542 2.489-.542 2.116 0 3.175 1.026 3.175 3.08V17h-1.548v-.957c-.415.68-1.143 1.02-2.186 1.02-.766 0-1.38-.22-1.843-.661-.462-.442-.694-1.003-.694-1.684 0-.776.293-1.38.878-1.81.585-.431 1.404-.647 2.457-.647h1.34V11.8c0-.554-.133-.971-.399-1.253-.266-.282-.707-.423-1.324-.423a4.07 4.07 0 0 0-2.345.718zm9.333-1.93v1.42c.394-1 1.101-1.5 2.123-1.5.148 0 .313.016.494.048v1.531a1.885 1.885 0 0 0-.75-.143c-.542 0-.989.24-1.34.718-.351.479-.527 1.048-.527 1.707V17h-1.563V8.91h1.563zm5.01 4.084c.022.82.272 1.492.75 2.019.479.526 1.15.79 2.01.79.639 0 1.235-.176 1.788-.527v1.404c-.521.319-1.186.479-1.995.479-1.265 0-2.276-.4-3.031-1.197-.755-.798-1.133-1.792-1.133-2.984 0-1.16.38-2.151 1.14-2.975.761-.825 1.79-1.237 3.088-1.237.702 0 1.346.149 1.93.447v1.436a3.242 3.242 0 0 0-1.77-.495c-.84 0-1.513.266-2.019.798-.505.532-.758 1.213-.758 2.042zM40.24 5.72v4.579c.458-1 1.293-1.5 2.505-1.5.787 0 1.42.245 1.899.734.479.49.718 1.17.718 2.042V17h-1.564v-5.106c0-.553-.14-.98-.422-1.284-.282-.303-.652-.455-1.11-.455-.531 0-1.002.202-1.411.606-.41.405-.615 1.022-.615 1.851V17h-1.563V5.72h1.563zm14.966 10.02c.596 0 1.096-.253 1.5-.758.404-.506.606-1.157.606-1.955 0-.915-.202-1.62-.606-2.114-.404-.495-.92-.742-1.548-.742-.553 0-1.05.224-1.491.67-.442.447-.662 1.133-.662 2.058 0 .958.212 1.67.638 2.138.425.469.946.703 1.563.703zM53.004 5.72v4.42c.574-.894 1.388-1.341 2.44-1.341 1.022 0 1.857.383 2.506 1.149.649.766.973 1.781.973 3.047 0 1.138-.309 2.109-.925 2.912-.617.803-1.463 1.205-2.537 1.205-1.075 0-1.894-.447-2.457-1.34V17h-1.58V5.72h1.58zm9.908 11.104l-3.223-7.913h1.739l1.005 2.632 1.26 3.415c.096-.32.48-1.458 1.15-3.415l.909-2.632h1.66l-2.92 7.866c-.777 2.074-1.963 3.11-3.559 3.11a2.92 2.92 0 0 1-.734-.079v-1.34c.17.042.351.064.543.064 1.032 0 1.755-.57 2.17-1.708z" }), (0, _.jsx)("path", { fill: "#5468FF", d: "M78.988.938h16.594a2.968 2.968 0 0 1 2.966 2.966V20.5a2.967 2.967 0 0 1-2.966 2.964H78.988a2.967 2.967 0 0 1-2.966-2.964V3.897A2.961 2.961 0 0 1 78.988.938z" }), (0, _.jsx)("path", { fill: "white", d: "M89.632 5.967v-.772a.978.978 0 0 0-.978-.977h-2.28a.978.978 0 0 0-.978.977v.793c0 .088.082.15.171.13a7.127 7.127 0 0 1 1.984-.28c.65 0 1.295.088 1.917.259.082.02.164-.04.164-.13m-6.248 1.01l-.39-.389a.977.977 0 0 0-1.382 0l-.465.465a.973.973 0 0 0 0 1.38l.383.383c.062.061.15.047.205-.014.226-.307.472-.601.746-.874.281-.28.568-.526.883-.751.068-.042.075-.137.02-.2m4.16 2.453v3.341c0 .096.104.165.192.117l2.97-1.537c.068-.034.089-.117.055-.184a3.695 3.695 0 0 0-3.08-1.866c-.068 0-.136.054-.136.13m0 8.048a4.489 4.489 0 0 1-4.49-4.482 4.488 4.488 0 0 1 4.49-4.482 4.488 4.488 0 0 1 4.489 4.482 4.484 4.484 0 0 1-4.49 4.482m0-10.85a6.363 6.363 0 1 0 0 12.729 6.37 6.37 0 0 0 6.372-6.368 6.358 6.358 0 0 0-6.371-6.36" })] }) }) }) })] }),
         H.items.length > 0
          ? (0, _.jsx)("main", {
             children: H.items.map((e, t) => {
              let { title: r, url: n, summary: s, breadcrumbs: a } = e;
              return (0, _.jsxs)("article", { className: x.searchResultItem, children: [(0, _.jsx)(P.Z, { as: "h2", className: x.searchResultItemHeading, children: (0, _.jsx)(f.Z, { to: n, dangerouslySetInnerHTML: { __html: r } }) }), a.length > 0 && (0, _.jsx)("nav", { "aria-label": "breadcrumbs", children: (0, _.jsx)("ul", { className: (0, i.Z)("breadcrumbs", x.searchResultItemPath), children: a.map((e, t) => (0, _.jsx)("li", { className: "breadcrumbs__item", dangerouslySetInnerHTML: { __html: e } }, t)) }) }), s && (0, _.jsx)("p", { className: x.searchResultItemSummary, dangerouslySetInnerHTML: { __html: s } })] }, t);
             }),
            })
          : [w && !H.loading && (0, _.jsx)("p", { children: (0, _.jsx)(y.Z, { id: "theme.SearchPage.noResultsText", description: "The paragraph for empty search result", children: "No results were found" }) }, "no-results"), !!H.loading && (0, _.jsx)("div", { className: x.loadingSpinner }, "spinner")],
         H.hasMore && (0, _.jsx)("div", { className: x.loader, ref: I, children: (0, _.jsx)(y.Z, { id: "theme.SearchPage.fetchingNewResults", description: "The paragraph for fetching new search results", children: "Fetching new results..." }) }),
        ],
       }),
      ],
     })
    );
   }
   function w() {
    return (0, _.jsx)(v.FG, { className: "search-page-wrapper", children: (0, _.jsx)(O, {}) });
   }
  },
 },
]);
