'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98554],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var o = l(52676),
    s = l(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  22559: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => v, contentTitle: () => m, default: () => b, frontMatter: () => p, metadata: () => g, toc: () => h });
   var o = l(52676),
    s = l(24785),
    t = l(98480),
    a = l(91050);
   function r(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'Leg uit hoe een veld in te vullen.', description: 'Bijvoorbeeld in de description.', children: (0, o.jsx)(t.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'ww', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.p, { id: 'ww_description', children: 'Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter.' }), (0, o.jsx)(n.input, { type: 'password', id: 'ww', name: 'wachtwoord', 'aria-describedby': 'ww_description' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'dont', title: 'Wijze van invullen weglaten.', description: 'Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.', children: (0, o.jsx)(t.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'ww2', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.input, { type: 'password', id: 'ww2', name: 'wachtwoord' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'dont', title: 'Wijze van invullen alleen in de placeholder zetten.', description: 'Zeker als de wijze van invullen precies goed moet zijn.', children: (0, o.jsx)(t.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'geboortedatum2', children: 'Geboortedatum' }), (0, o.jsx)(n.input, { type: 'text', id: 'geboortedatum2', name: 'geboortedatum', placeholder: 'dd/mm/jjjj' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
   function d(e) {
    const n = { h1: 'h1', img: 'img', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: 'Geef geldige waardes aan voor een invoerveld' }), '\n', (0, o.jsx)(n.p, { children: 'Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder.' }), '\n', (0, o.jsx)(n.p, { children: 'Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen.' }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png', alt: 'Wachtwoord-eisen zijn in de description getoond' }) }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png', alt: 'Voorbeeld van de waarden voor de geboortedatum worden in de description getoond' }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var u = l(55400);
   const p = { title: 'Geef geldige waardes aan voor een invoerveld \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef geldige waardes aan', pagination_label: 'Geef geldige waardes aan een invoerveld', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/help/show-values/README', title: 'Geef geldige waardes aan voor een invoerveld \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', source: '@site/docs/richtlijnen/formulieren/help/4-show-values/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/4-show-values', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/4-show-values/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef geldige waardes aan voor een invoerveld \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef geldige waardes aan', pagination_label: 'Geef geldige waardes aan een invoerveld', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Keur niet te snel af', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af' }, next: { title: 'Autocomplete in een formulier', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/autocomplete' } },
    v = {},
    h = [];
   function _(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(i, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(_, { ...e }) }) : _();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => b });
   var o = l(46506),
    s = l(4814),
    t = l(25585),
    a = l(40282),
    r = l(40678),
    i = l(85722),
    d = l(6374),
    c = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    g = l(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, g.jsx)(o.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   h.displayName = 'DocumentContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   _.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: b = !1, displayCode: y = !0, children: j, container: f = 'document', language: x, designTokens: k } = e,
     w = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [C, z] = (0, c.useState)(Z),
     [S, G] = (0, c.useState)(b);
    (0, c.useEffect)(() => {
     (async () => {
      (C = await d.ZP.format(Z, { parser: x, plugins: [t.Z, a.ZP, r.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), z(C);
     })();
    }, [Z]);
    const P = (0, c.useId)();
    let E = c.Fragment;
    return (
     'paragraph' === f ? (E = v) : 'document' === f ? (E = h) : 'surface' === f && (E = _),
     (0, g.jsxs)('div', {
      className: (0, s.Z)(p['nlds-canvas']),
      children: [
       w && (0, g.jsx)('div', { className: (0, s.Z)(p['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(E, { children: (0, g.jsx)(o.pu, { children: w }) }) }) }),
       y &&
        (0, g.jsx)('div', {
         className: (0, s.Z)(p['nlds-canvas__toolbar']),
         children: (0, g.jsx)(o.zx, {
          className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           G(!S);
          },
          'aria-expanded': S,
          'aria-controls': P,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, g.jsxs)('div', {
         className: (0, s.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: P,
         hidden: !S,
         children: [
          (0, g.jsx)(m.u, { syntax: x, textContent: C, trim: !0 }),
          l &&
           (0, g.jsx)('div', {
            className: (0, s.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(o.zx, {
             className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
             },
             children: 'Kopieer',
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, n, l) => {
   l.d(n, { u: () => r });
   var o = l(46506),
    s = l(70739);
   l(75271);
   const t = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var a = l(52676);
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: i } = e,
     d = r;
    return (
     i && (d = d.trim()),
     (0, a.jsx)(s.y$, {
      theme: t,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: s, getLineProps: t, getTokenProps: r } = e;
       return (0, a.jsx)(o.dn, { style: l, children: s.map((e, l) => (0, a.jsxs)('span', { ...t({ line: e }), children: [n && (0, a.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => d });
   var o = l(77355),
    s = l(67663),
    t = l(46506),
    a = l(4814);
   l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c, figure: u } = e;
    const p = 'Doen',
     m = 'Niet doen',
     g = u ? 'figure' : 'div',
     v = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(g, { className: (0, a.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(v, { className: (0, a.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: m })] }), (0, i.jsx)(t.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(s.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: p })] }), (0, i.jsx)(t.nv, { children: n })] }), d] }), (0, i.jsx)('div', { className: (0, a.Z)(r['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => a });
   var o = l(75271);
   const s = {},
    t = o.createContext(s);
   function a(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), o.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
