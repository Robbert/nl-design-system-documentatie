"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3328],
 {
  96026: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => s, default: () => m, frontMatter: () => r, metadata: () => a, toc: () => d });
   var o = i(11527),
    t = i(47214);
   const r = { title: "Meewerken aan NLDS", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Meewerken", pagination_label: "Meewerken", description: "Als developer meewerken aan NL Design System", keywords: ["developer", "bijdragen", "componenten", "publiceren", "semver"] },
    s = "Als developer meewerken aan NL Design System",
    a = { id: "meedoen/als-developer/meewerken-als-developer", title: "Meewerken aan NLDS", description: "Als developer meewerken aan NL Design System", source: "@site/docs/meedoen/als-developer/08-meewerken-als-developer.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/meewerken-als-developer", permalink: "/meedoen/als-developer/meewerken-als-developer", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/08-meewerken-als-developer.md", tags: [], version: "current", sidebarPosition: 8, frontMatter: { title: "Meewerken aan NLDS", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Meewerken", pagination_label: "Meewerken", description: "Als developer meewerken aan NL Design System", keywords: ["developer", "bijdragen", "componenten", "publiceren", "semver"] }, sidebar: "meedoen", previous: { title: "Componenten maken", permalink: "/meedoen/als-developer/componenten-maken" }, next: { title: "Herbruikbare CSS schrijven", permalink: "/meedoen/als-developer/herbruikbare-css" } },
    l = {},
    d = [{ value: "Hulp nodig of gewoon even kennis maken?", id: "hulp-nodig-of-gewoon-even-kennis-maken", level: 2 }];
   function c(e) {
    const n = { a: "a", code: "code", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: "als-developer-meewerken-aan-nl-design-system", children: "Als developer meewerken aan NL Design System" }), "\n", (0, o.jsx)(n.p, { children: "Wil je dat jouw componenten herbruikbaar zijn voor anderen die met NL Design System werken? Dan vragen we je te letten op de volgende punten:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Deel je code als open source met de ", (0, o.jsx)(n.a, { href: "https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12", children: "EUPL-1.2 licentie" }), "."] }), "\n", (0, o.jsx)(n.li, { children: "Vermijd huisstijl-specifieke code in je CSS, gebruik in plaats daarvan CSS variabelen voor design tokens NL Design System die ingevuld kunnen worden met de huisstijl van anderen." }), "\n", (0, o.jsxs)(n.li, { children: ["Deel de styling van componenten in een ", (0, o.jsx)(n.code, { children: ".css" }), ' bestand met alleen BEM class names, en zonder "side effects": geen code voor ', (0, o.jsx)(n.code, { children: "body" }), " , ", (0, o.jsx)(n.code, { children: "p" }), " of ", (0, o.jsx)(n.code, { children: ":root" }), "."] }), "\n", (0, o.jsxs)(n.li, { children: ["Begin namen in je code met een prefix voor jouw organisatie, zoals in BEM class names, CSS variabelen en Custom Elements. Wij gebruiken ", (0, o.jsx)(n.code, { children: "nl-" }), ", jij kiest iets anders."] }), "\n", (0, o.jsx)(n.li, { children: "Baseer de namen in je code waar mogelijk op bestaande termen uit HTML, CSS, SVG en ARIA; deze hebben de voorkeur boven namen uit populaire frameworks en boven namen die je zelf bedenkt." }), "\n", (0, o.jsx)(n.li, { children: "Publiceer een overzicht van je componenten in een Storybook website, met HTML voorbeeldcode van de componenten." }), "\n", (0, o.jsx)(n.li, { children: "Wanneer je aan een component werkt, deel een link naar jouw werk in de backlog van NL Design System op GitHub." }), "\n", (0, o.jsx)(n.li, { children: "In plaats alle componenten zelf te schrijven, probeer eerst in de backlog te vinden of iemand anders aan die component werkt, en begin met de code van een andere contributor." }), "\n", (0, o.jsx)(n.li, { children: "Wanneer componenten van anderen niet aan al je wensen voldoen, deel dan je bevindingen in de backlog en kijk of er samenwerking mogelijk is wanneer je een eigen variant wilt ontwikkelen." }), "\n"] }), "\n", (0, o.jsx)(n.p, { children: "Op deze manier zijn wij een samenwerking begonnen met meerdere teams, en willen we dit jaar bewijzen dat ondanks alle verschillen er toch heel veel mogelijkheden zijn voor samenwerken." }), "\n", (0, o.jsxs)(n.p, { children: ["Samen willen we een gebruiksvriendelijke online overheid nastreven door kennis en inzichten over toegankelijkheid en gebruiksvriendelijkheid te delen. We kunnen enorme impact hebben wanneer we inzichten uit gebruikersonderzoek en toegankelijkheidsonderzoek uit heel het land delen op de ", (0, o.jsx)(n.a, { href: "http://github.com/nl-design-system/backlog/issues", children: "backlog van NL Design System" }), "."] }), "\n", (0, o.jsx)(n.p, { children: "Kennis delen is maar een gedeelte van de oplossing: de kennis moet op het juiste moment op de juiste plek aanwezig zijn. Wat ons betreft is dat: op het moment dat een component wordt doorontwikkeld moet de kennis op de backlog van het ontwikkelteam staan! Met de backlog van NL Design System kunnen we gebruikers een stem geven in nieuwe ontwikkelingen van onze online overheid, en daarmee zetten de teams die op basis van de backlog meebouwen aan NL Design System echt de gebruiker centraal." }), "\n", (0, o.jsx)(n.h2, { id: "hulp-nodig-of-gewoon-even-kennis-maken", children: "Hulp nodig of gewoon even kennis maken?" }), "\n", (0, o.jsxs)(n.p, { children: ["Dat kan! Onze gegevens kun je vinden op de ", (0, o.jsx)(n.a, { href: "/project/kernteam", children: "pagina over het kernteam" })] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  47214: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => s });
   var o = i(50959);
   const t = {},
    r = o.createContext(t);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
