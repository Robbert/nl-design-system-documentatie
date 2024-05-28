"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1344],
 {
  56585: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => o, default: () => m, frontMatter: () => a, metadata: () => l, toc: () => d });
   var s = t(52676),
    i = t(24785);
   const a = { title: "Bedankt voor je aanmelding!", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Sluit je aan", pagination_label: "Sluit je aan", description: "Meld je aan bij de community van NL Design System.", slug: "/community/sluit-je-aan/bedankt", keywords: ["nl design system"] },
    o = void 0,
    l = { id: "community/sluit-je-aan-success", title: "Bedankt voor je aanmelding!", description: "Meld je aan bij de community van NL Design System.", source: "@site/docs/community/sluit-je-aan-success.mdx", sourceDirName: "community", slug: "/community/sluit-je-aan/bedankt", permalink: "/community/sluit-je-aan/bedankt", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan-success.mdx", tags: [], version: "current", frontMatter: { title: "Bedankt voor je aanmelding!", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Sluit je aan", pagination_label: "Sluit je aan", description: "Meld je aan bij de community van NL Design System.", slug: "/community/sluit-je-aan/bedankt", keywords: ["nl design system"] } },
    r = {},
    d = [];
   function c(e) {
    const n = { a: "a", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ["\n", (0, s.jsx)(n.p, { children: "Welkom bij de NL Design System Community, fijn dat je erbij bent. We hopen je snel (weer) eens te zien bij een Heartbeat, samenwerkdag of bijeenkomst." }), "\n", (0, s.jsx)(n.p, { children: "Handige links:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://praatmee.codefor.nl", children: "Word lid van het #nl-design-system Slack kanaal" }), " op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/community/events/overzicht", children: "Bekijk events waar je aan mee kunt doen" }), "."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://github.com/nl-design-system/", children: "Kijk naar code op GitHub" }), "."] }), "\n", (0, s.jsxs)(n.li, { children: ["Deel onze ", (0, s.jsx)(n.a, { href: "https://nldesignsystem.nl/factsheets/managers/", children: "factsheet voor managers" }), " of ", (0, s.jsx)(n.a, { href: "https://nldesignsystem.nl/project/over-nlds", children: "Over NL Design System" }), " met collega's."] }), "\n", (0, s.jsxs)(n.li, { children: ["Bekijk onze ", (0, s.jsx)(n.a, { href: "https://www.youtube.com/@NLDesignSystem/", children: "video's op YouTube" }), ", bijvoorbeeld van Design Systems Week of eerdere Heartbeats."] }), "\n"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => o });
   var s = t(75271);
   const i = {},
    a = s.createContext(i);
   function o(e) {
    const n = s.useContext(a);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), s.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
