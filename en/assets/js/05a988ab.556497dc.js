'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12713],
 {
  23680: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var i = t(52676),
    r = t(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  26978: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => c, default: () => h, frontMatter: () => l, metadata: () => a, toc: () => u });
   var i = t(52676),
    r = t(24785),
    s = t(21004),
    o = t(23680);
   const l = { title: 'Status in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie status', sidebar_position: 12, pagination_label: 'Status in formulieren', description: 'Richtlijnen voor het omgaan met status in formulieren.', slug: '/richtlijnen/formulieren/status/', keywords: ['informatie', 'status', 'formulier', 'design', 'code'] },
    c = 'Status in een formulier',
    a = { id: 'richtlijnen/formulieren/status/README', title: 'Status in een formulier | Richtlijnen', description: 'Richtlijnen voor het omgaan met status in formulieren.', source: '@site/docs/richtlijnen/formulieren/status/README.mdx', sourceDirName: 'richtlijnen/formulieren/status', slug: '/richtlijnen/formulieren/status/', permalink: '/en/richtlijnen/formulieren/status/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/README.mdx', tags: [], version: 'current', sidebarPosition: 12, frontMatter: { title: 'Status in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie status', sidebar_position: 12, pagination_label: 'Status in formulieren', description: 'Richtlijnen voor het omgaan met status in formulieren.', slug: '/richtlijnen/formulieren/status/', keywords: ['informatie', 'status', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Geen vaste tekstlengte', permalink: '/en/richtlijnen/formulieren/vragen/geen-min-max-lengte' }, next: { title: 'Status in formulieren', permalink: '/en/richtlijnen/formulieren/status/' } },
    d = {},
    u = [];
   function m(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'status-in-een-formulier', children: 'Status in een formulier' }), '\n', (0, i.jsx)(n.p, { children: 'Het is belangrijk een gebruiker te informeren over veranderingen en updates.' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Is een formulier succesvol verzonden?' }), '\n', (0, i.jsx)(n.li, { children: 'Zijn er fouten?' }), '\n', (0, i.jsx)(n.li, { children: 'Hoeveel zoekresultaten zijn er?' }), '\n', (0, i.jsx)(n.li, { children: 'Is de tijdslimiet bijna verstreken?' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit soort veranderingen binnen een pagina kun je met een ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#dfn-status-messages', children: 'statusbericht' }), ' aangeven.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een statusbericht moet voor iedereen beschikbaar zijn, en dus ook goed werken met screenreaders en zoom-instellingen. Ook moet er voldoende tijd zijn om de content in je op te nemen.' }), '\n', (0, i.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/status/README'] }), '\n', (0, i.jsx)(o.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  21004: (e, n, t) => {
   t.d(n, { l: () => c });
   var i = t(34221),
    r = t(4814),
    s = (t(75271), t(20537)),
    o = t(52676);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: t, ...c } = e;
     const a = (0, i.jA)();
     return (0, o.jsx)('div', { ...c, className: (0, r.Z)('margin-top--lg', t), children: (0, o.jsx)(s.Z, { items: l(a.items, n) }) });
    };
  },
  20537: (e, n, t) => {
   t.d(n, { Z: () => j });
   var i = t(34221),
    r = t(90441),
    s = t(56150),
    o = t(4814);
   t(75271);
   const l = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var c = t(52676);
   function a(e) {
    let { href: n, icon: t = '', title: i, description: s, children: a } = e;
    return (0, c.jsxs)('div', { className: (0, o.Z)('card', l.card), children: [n ? (0, c.jsx)(r.Z, { href: n, className: (0, o.Z)(l.cardLink, 'utrecht-link'), children: (0, c.jsxs)('h2', { className: (0, o.Z)(l.cardTitle), children: [t, ' ', i] }) }) : (0, c.jsxs)('h2', { className: (0, o.Z)(l.cardTitle), children: [t, ' ', i] }), s && (0, c.jsx)('p', { className: (0, o.Z)(l.cardDescription), children: s }), a] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, c.jsx)(a, { title: n.label, description: n.description, children: (0, c.jsx)(s.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(s.AS, { children: 'link' === e.type ? (0, c.jsx)(r.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function u(e) {
    let { item: n } = e;
    const t = (0, i.xz)(n.docId);
    return (0, c.jsx)(a, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function m(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, c.jsx)(u, { item: n });
     case 'category':
      return (0, c.jsx)(d, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function h(e) {
    let { className: n } = e;
    const t = (0, i.jA)();
    return (0, c.jsx)(j, { items: t.items, className: n });
   }
   function j(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(h, { ...e });
    const r = (0, i.MN)(n);
    return (0, c.jsx)('section', { className: (0, o.Z)('row', t), children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, n)) });
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => o });
   var i = t(75271);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
