"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4306],
 {
  90639: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => a, default: () => m, frontMatter: () => s, metadata: () => r, toc: () => d });
   var i = t(52676),
    l = t(24785);
   const s = { title: "Alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert", pagination_label: "Alert", description: "UX richtlijnen voor Alert component", slug: "/alert", tags: ["Unknown"] },
    a = "Alert",
    r = { id: "componenten/build/alert", title: "Alert", description: "UX richtlijnen voor Alert component", source: "@site/docs/componenten/build/alert.mdx", sourceDirName: "componenten/build", slug: "/alert", permalink: "/en/alert", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/alert.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert", pagination_label: "Alert", description: "UX richtlijnen voor Alert component", slug: "/alert", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Alert dialog", permalink: "/en/alert-dialog" }, next: { title: "Avatar", permalink: "/en/avatar" } },
    o = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "alert", children: "Alert" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Alert/src/index.scss", children: "Alert CSS implementatie van Gemeente Den Haag" })] }), "\n", (0, i.jsxs)(n.li, { children: ["Storybook: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-alert--error", children: "Alert CSS storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1179-3892", children: "Alert Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Alert component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/9", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var i = t(75271);
   const l = {},
    s = i.createContext(l);
   function a(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : a(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
