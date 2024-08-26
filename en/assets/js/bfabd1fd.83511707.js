'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [85229],
 {
  33984: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var t = r(52676),
    i = r(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  98232: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => u, contentTitle: () => d, default: () => g, frontMatter: () => l, metadata: () => m, toc: () => c });
   var t = r(52676),
    i = r(24785);
   function o(e) {
    const n = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'informeer-ingezoomde-gebruikers-over-het-statusbericht', children: 'Informeer ingezoomde gebruikers over het statusbericht' }), '\n', (0, t.jsx)(n.p, { children: 'Als een statusbericht visueel niet in de buurt staat van het element waar de melding bij hoort, kan deze worden gemist door gebruikers die zijn ingezoomd.' }), '\n', (0, t.jsx)(n.p, { children: 'Zet bij elkaar wat bij elkaar hoort. Is er een statusbericht, zet deze dan vlak bij waar de gebruiker op dat moment aan het werk is. Zodat het bericht in beeld is voor ingezoomde gebruikers.' }), '\n', (0, t.jsx)(n.p, { children: 'Zet dynamisch gegenereerde meldingen voor een formulier altijd vlak bij het formulierveld of bijvoorbeeld bovenaan de pagina, afhankelijk van waar en wanneer de foutmelding getoond wordt. Zoals de melding over het totaal aantal ingevoerde karakters voor een tekstveld of de totaalprijs in een berekening.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
   var a = r(33984);
   const l = { title: 'Informeer ingezoomde gebruikers | Status in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer ingezoomde gebruikers', pagination_label: 'Informeer ingezoomde gebruikers', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', slug: '/richtlijnen/formulieren/status/zoom', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = void 0,
    m = { id: 'richtlijnen/formulieren/status/zoomed-in/README', title: 'Informeer ingezoomde gebruikers | Status in een formulier | Richtlijnen', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', source: '@site/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx', sourceDirName: 'richtlijnen/formulieren/status/2-zoomed-in', slug: '/richtlijnen/formulieren/status/zoom', permalink: '/en/richtlijnen/formulieren/status/zoom', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Informeer ingezoomde gebruikers | Status in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer ingezoomde gebruikers', pagination_label: 'Informeer ingezoomde gebruikers', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', slug: '/richtlijnen/formulieren/status/zoom', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Informeer screenreaders', permalink: '/en/richtlijnen/formulieren/status/screenreaders' }, next: { title: 'Geef gebruikers voldoende tijd', permalink: '/en/richtlijnen/formulieren/status/enough-time' } },
    u = {},
    c = [];
   function h(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(s, {}), '\n', (0, t.jsx)(a.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h();
   }
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => a, a: () => s });
   var t = r(75271);
   const i = {},
    o = t.createContext(i);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
