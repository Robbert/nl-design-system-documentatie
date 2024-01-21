"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8714],
 {
  7526: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => l, default: () => m, frontMatter: () => s, metadata: () => o, toc: () => c });
   var a = t(1527),
    i = t(7214);
   const s = { title: "Avatar", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Avatar", pagination_label: "Avatar", description: "UX richtlijnen voor Avatar component", slug: "/avatar", tags: ["Help Wanted"] },
    l = "Avatar",
    o = { id: "componenten/build/avatar", title: "Avatar", description: "UX richtlijnen voor Avatar component", source: "@site/docs/componenten/build/avatar.mdx", sourceDirName: "componenten/build", slug: "/avatar", permalink: "/en/avatar", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/avatar.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Avatar", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Avatar", pagination_label: "Avatar", description: "UX richtlijnen voor Avatar component", slug: "/avatar", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Alert", permalink: "/en/alert" }, next: { title: "Blockquote", permalink: "/en/blockquote" } },
    r = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "avatar", children: "Avatar" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, a.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, a.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=423-455", children: "Avatar Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Avatar component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/83", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
  7214: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => l });
   var a = t(959);
   const i = {},
    s = a.createContext(i);
   function l(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), a.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
