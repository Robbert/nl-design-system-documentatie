'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3981],
 {
  90763: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => u, frontMatter: () => l, metadata: () => o, toc: () => a });
   var t = i(52676),
    r = i(24785),
    s = i(21004);
   const l = { title: 'Introductie richtlijnen NL Design System', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Introductie richtlijnen NL Design System', slug: '/richtlijnen', keywords: ['richtlijnen', 'design system', 'documentatie'] },
    c = 'Richtlijnen',
    o = { id: 'richtlijnen/README', title: 'Introductie richtlijnen NL Design System', description: 'Introductie richtlijnen NL Design System', source: '@site/docs/richtlijnen/README.mdx', sourceDirName: 'richtlijnen', slug: '/richtlijnen', permalink: '/richtlijnen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Introductie richtlijnen NL Design System', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Introductie richtlijnen NL Design System', slug: '/richtlijnen', keywords: ['richtlijnen', 'design system', 'documentatie'] }, sidebar: 'richtlijnen', next: { title: 'Introductie', permalink: '/richtlijnen' } },
    d = {},
    a = [
     { value: 'Onderbouwing', id: 'onderbouwing', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 3 },
     { value: 'Gebruikersvriendelijkheid', id: 'gebruikersvriendelijkheid', level: 3 },
     { value: 'Beschikbare richtlijnen', id: 'beschikbare-richtlijnen', level: 2 },
     { value: 'Aanvullingen of opmerkingen?', id: 'aanvullingen-of-opmerkingen', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, t.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor het ontwikkelen van digitale diensten. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, t.jsx)(n.h2, { id: 'onderbouwing', children: 'Onderbouwing' }), '\n', (0, t.jsx)(n.h3, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, t.jsx)(n.p, { children: 'De richtlijnen zijn gebaseerd op de Web Content Accessibility Guidelines, versie 2.2 niveau AA (WCAG 2.2 AA).' }), '\n', (0, t.jsx)(n.p, { children: 'Bij enkele richtlijnen is niveau AAA aangehouden, om een betere gebruikerservaring te garanderen. Bijvoorbeeld voor de minimale grootte van het aanklikbare gedeelte van links en formulierelementen.' }), '\n', (0, t.jsx)(n.h3, { id: 'gebruikersvriendelijkheid', children: 'Gebruikersvriendelijkheid' }), '\n', (0, t.jsx)(n.p, { children: 'Om de gebruikersvriendelijkheid te garanderen zijn er ook richtlijnen toegevoegd naar aanleiding van gebruikersonderzoek. Bijvoorbeeld door een formulierlabel altijd zichtbaar boven het invoerveld te plaatsen.' }), '\n', (0, t.jsx)(n.h2, { id: 'beschikbare-richtlijnen', children: 'Beschikbare richtlijnen' }), '\n', (0, t.jsx)(s.l, { excludeDocIDs: ['richtlijnen/README', 'richtlijnen/CHANGELOG'] }), '\n', (0, t.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden beheerd door het NL Design System, samen met de community, en zijn op dit moment nog in ontwikkeling.\nWe willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Discusieer mee' }), ' of ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'open een nieuw issue' }), ' op GitHub.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => o });
   var t = i(62567),
    r = i(4814),
    s = (i(75271), i(32074)),
    l = i(52676);
   const c = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: c(i.items, n) }] : e), []),
    o = (e) => {
     let { excludeDocIDs: n = [], className: i, ...o } = e;
     const d = (0, t.jA)();
     return (0, l.jsx)('div', { ...o, className: (0, r.Z)('margin-top--lg', i), children: (0, l.jsx)(s.Z, { items: c(d.items, n) }) });
    };
  },
  32074: (e, n, i) => {
   i.d(n, { Z: () => m });
   var t = i(62567),
    r = i(53450),
    s = i(56150),
    l = i(4814);
   i(75271);
   const c = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var o = i(52676);
   function d(e) {
    let { href: n, icon: i = '', title: t, description: s, children: d } = e;
    return (0, o.jsxs)('div', { className: (0, l.Z)('card', c.card), children: [n ? (0, o.jsx)(r.Z, { href: n, className: (0, l.Z)(c.cardLink, 'utrecht-link'), children: (0, o.jsxs)('h2', { className: (0, l.Z)(c.cardTitle), children: [i, ' ', t] }) }) : (0, o.jsxs)('h2', { className: (0, l.Z)(c.cardTitle), children: [i, ' ', t] }), s && (0, o.jsx)('p', { className: (0, l.Z)(c.cardDescription), children: s }), d] });
   }
   function a(e) {
    let { item: n } = e;
    return (0, o.jsx)(d, { title: n.label, description: n.description, children: (0, o.jsx)(s.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(s.AS, { children: 'link' === e.type ? (0, o.jsx)(r.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function h(e) {
    let { item: n } = e;
    const i = (0, t.xz)(n.docId);
    return (0, o.jsx)(d, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function u(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, o.jsx)(h, { item: n });
     case 'category':
      return (0, o.jsx)(a, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function j(e) {
    let { className: n } = e;
    const i = (0, t.jA)();
    return (0, o.jsx)(m, { items: i.items, className: n });
   }
   function m(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, o.jsx)(j, { ...e });
    const r = (0, t.MN)(n);
    return (0, o.jsx)('section', { className: (0, l.Z)('row', i), children: r.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(u, { item: e }) }, n)) });
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => c, a: () => l });
   var t = i(75271);
   const r = {},
    s = t.createContext(r);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
