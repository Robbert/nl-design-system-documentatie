"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  66224: (e, t, n) => {
   n.r(t), n.d(t, { default: () => z });
   var s = n(50959),
    a = n(44616),
    l = n(90248),
    i = n(11527);
   const o = s.createContext(null);
   function d(e) {
    let { children: t, content: n } = e;
    const a = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return (0, i.jsx)(o.Provider, { value: a, children: t });
   }
   function r() {
    const e = (0, s.useContext)(o);
    if (null === e) throw new l.i6("DocProvider");
    return e;
   }
   function c() {
    const { metadata: e, frontMatter: t, assets: n } = r();
    return (0, i.jsx)(a.d, { title: e.title, description: e.description, keywords: t.keywords, image: n.image ?? t.image });
   }
   var u = n(5341),
    h = n(25581),
    m = n(5191);
   function p() {
    const { metadata: e } = r();
    return (0, i.jsx)(m.Z, { previous: e.previous, next: e.next });
   }
   var x = n(44849),
    b = n(2164),
    v = n(15116),
    j = n(77289);
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n } = e;
    return (0, i.jsx)(j.Z, { id: "theme.lastUpdated.atDate", description: "The words used to describe on which date a page has been last updated", values: { date: (0, i.jsx)("b", { children: (0, i.jsx)("time", { dateTime: new Date(1e3 * t).toISOString(), children: n }) }) }, children: " on {date}" });
   }
   function g(e) {
    let { lastUpdatedBy: t } = e;
    return (0, i.jsx)(j.Z, { id: "theme.lastUpdated.byUser", description: "The words used to describe by who the page has been last updated", values: { user: (0, i.jsx)("b", { children: t }) }, children: " by {user}" });
   }
   function Z(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n, lastUpdatedBy: s } = e;
    return (0, i.jsxs)("span", { className: v.k.common.lastUpdated, children: [(0, i.jsx)(j.Z, { id: "theme.lastUpdated.lastUpdatedAtBy", description: "The sentence used to display when a page has been last updated, and by who", values: { atDate: t && n ? (0, i.jsx)(f, { lastUpdatedAt: t, formattedLastUpdatedAt: n }) : "", byUser: s ? (0, i.jsx)(g, { lastUpdatedBy: s }) : "" }, children: "Last updated{atDate}{byUser}" }), !1] });
   }
   var C = n(48876),
    y = n(76135);
   const T = { lastUpdated: "lastUpdated_ZmFM" };
   function k(e) {
    return (0, i.jsx)("div", { className: (0, u.Z)(v.k.docs.docFooterTagsRow, "row margin-bottom--sm"), children: (0, i.jsx)("div", { className: "col", children: (0, i.jsx)(y.Z, { ...e }) }) });
   }
   function L(e) {
    let { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: s, formattedLastUpdatedAt: a } = e;
    return (0, i.jsxs)("div", { className: (0, u.Z)(v.k.docs.docFooterEditMetaRow, "row"), children: [(0, i.jsx)("div", { className: "col", children: t && (0, i.jsx)(C.Z, { editUrl: t }) }), (0, i.jsx)("div", { className: (0, u.Z)("col", T.lastUpdated), children: (n || s) && (0, i.jsx)(Z, { lastUpdatedAt: n, formattedLastUpdatedAt: a, lastUpdatedBy: s }) })] });
   }
   function U() {
    const { metadata: e } = r(),
     { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: s, lastUpdatedBy: a, tags: l } = e,
     o = l.length > 0,
     d = !!(t || n || a);
    return o || d ? (0, i.jsxs)("footer", { className: (0, u.Z)(v.k.docs.docFooter, "docusaurus-mt-lg"), children: [o && (0, i.jsx)(k, { tags: l }), d && (0, i.jsx)(L, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: a, formattedLastUpdatedAt: s })] }) : null;
   }
   var N = n(34018),
    _ = n(52795);
   const w = { tocCollapsibleButton: "tocCollapsibleButton_fZKt", tocCollapsibleButtonExpanded: "tocCollapsibleButtonExpanded_3tJJ" };
   function A(e) {
    let { collapsed: t, ...n } = e;
    return (0, i.jsx)("button", { type: "button", ...n, className: (0, u.Z)("clean-btn", w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, n.className), children: (0, i.jsx)(j.Z, { id: "theme.TOCCollapsible.toggleButtonLabel", description: "The label used by the button on the collapsible TOC component", children: "On this page" }) });
   }
   const M = { tocCollapsible: "tocCollapsible_ECvL", tocCollapsibleContent: "tocCollapsibleContent_TkXn", tocCollapsibleExpanded: "tocCollapsibleExpanded_sU47" };
   function B(e) {
    let { toc: t, className: n, minHeadingLevel: s, maxHeadingLevel: a } = e;
    const { collapsed: l, toggleCollapsed: o } = (0, N.u)({ initialState: !0 });
    return (0, i.jsxs)("div", { className: (0, u.Z)(M.tocCollapsible, !l && M.tocCollapsibleExpanded, n), children: [(0, i.jsx)(A, { collapsed: l, onClick: o }), (0, i.jsx)(N.z, { lazy: !0, className: M.tocCollapsibleContent, collapsed: l, children: (0, i.jsx)(_.Z, { toc: t, minHeadingLevel: s, maxHeadingLevel: a }) })] });
   }
   const E = { tocMobile: "tocMobile_Z8p_" };
   function V() {
    const { toc: e, frontMatter: t } = r();
    return (0, i.jsx)(B, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(v.k.docs.docTocMobile, E.tocMobile) });
   }
   var I = n(1253);
   function F() {
    const { toc: e, frontMatter: t } = r();
    return (0, i.jsx)(I.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: v.k.docs.docTocDesktop });
   }
   var H = n(52542),
    D = n(21581);
   function S(e) {
    let { children: t } = e;
    const n = (function () {
     const { metadata: e, frontMatter: t, contentTitle: n } = r();
     return t.hide_title || void 0 !== n ? null : e.title;
    })();
    return (0, i.jsxs)("div", { className: (0, u.Z)(v.k.docs.docMarkdown), children: [n && (0, i.jsx)("header", { children: (0, i.jsx)(H.Z, { as: "h1", children: n }) }), (0, i.jsx)(D.Z, { children: t })] });
   }
   var J = n(9637),
    O = n(16411);
   const Q = { docItemContainer: "docItemContainer_oKNs", docItemCol: "docItemCol_EjVV" };
   function P(e) {
    let { children: t } = e;
    const n = (function () {
      const { frontMatter: e, toc: t } = r(),
       n = (0, h.i)(),
       s = e.hide_table_of_contents,
       a = !s && t.length > 0;
      return { hidden: s, mobile: a ? (0, i.jsx)(V, {}) : void 0, desktop: !a || ("desktop" !== n && "ssr" !== n) ? void 0 : (0, i.jsx)(F, {}) };
     })(),
     {
      metadata: { unlisted: s },
     } = r();
    return (0, i.jsxs)("div", { className: "row", children: [(0, i.jsxs)("div", { className: (0, u.Z)("col", !n.hidden && Q.docItemCol), children: [s && (0, i.jsx)(O.Z, {}), (0, i.jsx)(x.Z, {}), (0, i.jsxs)("div", { className: Q.docItemContainer, children: [(0, i.jsxs)("article", { children: [(0, i.jsx)(J.Z, {}), (0, i.jsx)(b.Z, {}), n.mobile, (0, i.jsx)(S, { children: t }), (0, i.jsx)(U, {})] }), (0, i.jsx)(p, {})] })] }), n.desktop && (0, i.jsx)("div", { className: "col col--3", children: n.desktop })] });
   }
   function z(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     n = e.content;
    return (0, i.jsx)(d, { content: e.content, children: (0, i.jsxs)(a.FG, { className: t, children: [(0, i.jsx)(c, {}), (0, i.jsx)(P, { children: (0, i.jsx)(n, {}) })] }) });
   }
  },
  5191: (e, t, n) => {
   n.d(t, { Z: () => i });
   n(50959);
   var s = n(77289),
    a = n(24550),
    l = n(11527);
   function i(e) {
    const { previous: t, next: n } = e;
    return (0, l.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, s.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }), children: [t && (0, l.jsx)(a.Z, { ...t, subLabel: (0, l.jsx)(s.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc", children: "Previous" }) }), n && (0, l.jsx)(a.Z, { ...n, subLabel: (0, l.jsx)(s.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc", children: "Next" }), isNext: !0 })] });
   }
  },
  2164: (e, t, n) => {
   n.d(t, { Z: () => d });
   n(50959);
   var s = n(5341),
    a = n(77289),
    l = n(15116),
    i = n(42472),
    o = n(11527);
   function d(e) {
    let { className: t } = e;
    const n = (0, i.E)();
    return n.badge ? (0, o.jsx)("span", { className: (0, s.Z)(t, l.k.docs.docVersionBadge, "badge badge--secondary"), children: (0, o.jsx)(a.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: n.label }, children: "Version: {versionLabel}" }) }) : null;
   }
  },
  44849: (e, t, n) => {
   n.d(t, { Z: () => b });
   n(50959);
   var s = n(5341),
    a = n(1050),
    l = n(62384),
    i = n(77289),
    o = n(34157),
    d = n(15116),
    r = n(35543),
    c = n(42472),
    u = n(11527);
   const h = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(i.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: n.label }) }, children: "This is unreleased documentation for {siteTitle} {versionLabel} version." });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(i.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: n.label }) }, children: "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained." });
    },
   };
   function m(e) {
    const t = h[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function p(e) {
    let { versionLabel: t, to: n, onClick: s } = e;
    return (0, u.jsx)(i.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: (0, u.jsx)("b", { children: (0, u.jsx)(l.Z, { to: n, onClick: s, children: (0, u.jsx)(i.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label", children: "latest version" }) }) }) }, children: "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})." });
   }
   function x(e) {
    let { className: t, versionMetadata: n } = e;
    const {
      siteConfig: { title: l },
     } = (0, a.Z)(),
     { pluginId: i } = (0, o.gA)({ failfast: !0 }),
     { savePreferredVersionName: c } = (0, r.J)(i),
     { latestDocSuggestion: h, latestVersionSuggestion: x } = (0, o.Jo)(i),
     b = h ?? (v = x).docs.find((e) => e.id === v.mainDocId);
    var v;
    return (0, u.jsxs)("div", { className: (0, s.Z)(t, d.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert", children: [(0, u.jsx)("div", { children: (0, u.jsx)(m, { siteTitle: l, versionMetadata: n }) }), (0, u.jsx)("div", { className: "margin-top--md", children: (0, u.jsx)(p, { versionLabel: x.label, to: b.path, onClick: () => c(x.name) }) })] });
   }
   function b(e) {
    let { className: t } = e;
    const n = (0, c.E)();
    return n.banner ? (0, u.jsx)(x, { className: t, versionMetadata: n }) : null;
   }
  },
  16411: (e, t, n) => {
   n.d(t, { Z: () => m });
   n(50959);
   var s = n(5341),
    a = n(77289),
    l = n(46789),
    i = n(11527);
   function o() {
    return (0, i.jsx)(a.Z, { id: "theme.unlistedContent.title", description: "The unlisted content banner title", children: "Unlisted page" });
   }
   function d() {
    return (0, i.jsx)(a.Z, { id: "theme.unlistedContent.message", description: "The unlisted content banner message", children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it." });
   }
   function r() {
    return (0, i.jsx)(l.Z, { children: (0, i.jsx)("meta", { name: "robots", content: "noindex, nofollow" }) });
   }
   var c = n(15116),
    u = n(66280);
   function h(e) {
    let { className: t } = e;
    return (0, i.jsx)(u.Z, { type: "caution", title: (0, i.jsx)(o, {}), className: (0, s.Z)(t, c.k.common.unlistedBanner), children: (0, i.jsx)(d, {}) });
   }
   function m(e) {
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(r, {}), (0, i.jsx)(h, { ...e })] });
   }
  },
  46820: (e, t, n) => {
   n.d(t, { Q: () => p });
   var s = n(50959),
    a = n(3426);
   const l = "breadcrumbs__73z",
    i = "breadcrumbs--mobile_QwgF",
    o = "breadcrumbs--desktop_v9Xv";
   var d = n(5341),
    r = n(38456),
    c = n(16532),
    u = n(28903),
    h = n(62384),
    m = n(11527);
   const p = (e) => {
    let { breadcrumbs: t, ...n } = e;
    const p = [{ href: (0, a.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: x } = (0, u.TH)(),
     b = [...p].reverse().find((e) => e.href !== x);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)("div", {
       className: (0, d.Z)(l, o),
       children: (0, m.jsx)(c.Qu, {
        ...n,
        children: p.map((e, t, n) => {
         let { label: a, href: l, rel: i } = e,
          { length: o } = n;
         return (0, m.jsxs)(s.Fragment, { children: [(0, m.jsx)(c.yY, { href: l, current: t === o - 1, disabled: t === o - 1, rel: (0, d.Z)(i, { up: t === o - 2 }), children: a }), t < o - 1 && (0, m.jsx)(c.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      b && (0, m.jsx)("div", { className: (0, d.Z)(l, i), children: (0, m.jsx)(c.hE, { children: (0, m.jsxs)(h.Z, { href: b.href, rel: b.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, m.jsx)(c.JO, { children: (0, m.jsx)(r.Z, {}) }), b.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, t, n) => {
   n.d(t, { Z: () => o });
   n(50959);
   var s = n(15116),
    a = n(78193),
    l = n(46820),
    i = n(11527);
   function o() {
    const e = (0, a.s1)()?.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, i.jsx)(l.Q, { breadcrumbs: e, className: s.k.docs.docBreadcrumbs });
   }
  },
  21581: (e, t, n) => {
   n.d(t, { Z: () => x });
   var s = n(50959),
    a = n(47214),
    l = n(46789),
    i = n(11527);
   function o(e) {
    const t = s.Children.map(e.children, (e) =>
     s.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { mdxType: t, originalType: n, ...a } = e.props;
          return s.createElement(e.props.originalType, a);
         }
         return e;
        })(e)
      : e
    );
    return (0, i.jsx)(l.Z, { ...e, children: t });
   }
   var d = n(28099);
   function r(e) {
    return (0, i.jsx)(d.Z, { ...((0, s.isValidElement)(e.children) && "code" === e.children.props?.originalType ? e.children.props : { ...e }) });
   }
   var c = n(5221);
   function u(e) {
    const t = s.Children.toArray(e.children),
     n = t.find((e) => s.isValidElement(e) && "summary" === e.props?.mdxType),
     a = (0, i.jsx)(i.Fragment, { children: t.filter((e) => e !== n) });
    return (0, i.jsx)(c.Z, { ...e, summary: n, children: a });
   }
   var h = n(66280),
    m = n(35290),
    p = n(16532);
   function x(e) {
    let { children: t } = e;
    return (0, i.jsx)(a.Z, { components: { head: o, code: p.EK, a: p.rU, em: p.j$, pre: r, details: u, ul: p.QI, li: p.AS, img: p.Ee, h1: p.nL, h2: p.XJ, h3: p.aC, h4: p.k8, h5: p.by, h6: p.Cd, admonition: h.Z, mermaid: m.Z }, children: t });
   }
  },
 },
]);
