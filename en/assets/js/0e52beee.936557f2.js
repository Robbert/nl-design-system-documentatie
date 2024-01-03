"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [89139],
 {
  88093: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => r, metadata: () => i, toc: () => d });
   var a = n(11527),
    s = n(47214);
   const r = { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden/bedankt" },
    o = "Bedankt!",
    i = { id: "project/events/heartbeat/aanmelden-success", title: "Bedankt voor je aanmelding", description: "Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.", source: "@site/docs/project/events/heartbeat/aanmelden-success.mdx", sourceDirName: "project/events/heartbeat", slug: "/events/heartbeat/aanmelden/bedankt", permalink: "/en/events/heartbeat/aanmelden/bedankt", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/events/heartbeat/aanmelden-success.mdx", tags: [], version: "current", frontMatter: { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden/bedankt" } },
    l = {},
    d = [];
   function c(e) {
    const t = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: "bedankt", children: "Bedankt!" }), "\n", (0, a.jsx)(t.p, { children: "Je bent nu aangemeld voor onze tweewekelijkse Heartbeat." }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsx)(t.li, { children: (0, a.jsx)(t.a, { href: "/events/heartbeat/videos", children: "Video's van eerdere Heartbeats" }) }), "\n"] })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  47214: (e, t, n) => {
   n.d(t, { Z: () => i, a: () => o });
   var a = n(50959);
   const s = {},
    r = a.createContext(s);
   function o(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function i(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), a.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
