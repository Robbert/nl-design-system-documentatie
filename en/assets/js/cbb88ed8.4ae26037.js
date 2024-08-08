'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [79649],
 {
  33984: (e, n, l) => {
   l.d(n, { ZP: () => s });
   var a = l(52676),
    t = l(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88354: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => b, default: () => _, frontMatter: () => u, metadata: () => p, toc: () => g });
   var a = l(52676),
    t = l(24785),
    o = l(44585),
    s = l(33376);
   function i(e) {
    const n = { div: 'div', input: 'input', label: 'label', ...(0, t.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', (0, a.jsx)(s.X, { appearance: 'do', title: 'Het zichtbare label is de toegankelijke naam.', children: (0, a.jsx)(o.X, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.label, { for: 'hond', children: 'Hoe heet je hond' }), (0, a.jsx)(n.input, { type: 'text', id: 'hond', name: 'hond' })] }) }) }), '\n', (0, a.jsx)(s.X, { appearance: 'dont', title: 'Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, a.jsx)(o.X, { language: 'html', children: () => (0, a.jsx)(n.input, { type: 'text', name: 'lievelingskleur', 'aria-label': 'Vul een kleur in', placeholder: 'Wat is je lievelingskleur' }) }) }), '\n', (0, a.jsx)(s.X, { appearance: 'dont', title: 'Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, a.jsx)(o.X, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.div, { children: 'Zoek' }), (0, a.jsx)(n.input, { type: 'search', name: 'trefwoord', 'aria-label': 'Trefwoord' })] }) }) })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }), '\n', (0, a.jsx)(n.p, { children: 'Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.' }), '\n', (0, a.jsxs)(n.p, { children: ['Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ', (0, a.jsx)(n.code, { children: 'aria-label' }), '. Met ', (0, a.jsx)(n.code, { children: 'aria-label' }), ' kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Zorgen dat de zichtbare naam en toegankelijke naam overeenkomen, is nodig om te voldoen ', (0, a.jsx)(n.a, { href: '/wcag/2.5.3', children: 'WCAG-succescriterium 2.5.3: Label in naam' }), ' (niveau A).'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
   var m = l(33984);
   const u = { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam | Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    p = { id: 'richtlijnen/formulieren/label/visible-acccessible-name/README', title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam | Labels in een formulier | Richtlijnen', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', source: '@site/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/2-visible-acccessible-name', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', permalink: '/en/richtlijnen/formulieren/labels/zichtbare-naam', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/README.mdx', tags: [], version: 'current', frontMatter: { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam | Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Toegankelijke naam label', permalink: '/en/richtlijnen/formulieren/labels/toegankelijke-naam' }, next: { title: 'Plaatsing label', permalink: '/en/richtlijnen/formulieren/labels/plaatsing' } },
    h = {},
    g = [];
   function v(e) {
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', (0, a.jsx)(d, {}), '\n', (0, a.jsx)(r, {}), '\n', (0, a.jsx)(m.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(v, { ...e }) }) : v();
   }
  },
  44585: (e, n, l) => {
   l.d(n, { X: () => _ });
   var a = l(46506),
    t = l(4814),
    o = l(25585),
    s = l(40282),
    i = l(40678),
    r = l(85722),
    c = l(6374),
    d = l(75271),
    m = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var b = l(41179),
    p = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(a.Tg, { className: u['nlds-canvas__example-surface'], children: (0, p.jsx)(a.BB, { className: (0, t.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, p.jsx)(a.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(a.Tg, { className: u['nlds-canvas__example-surface'], children: (0, p.jsx)(a.BB, { className: (0, t.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(a.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   v.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: k, container: y = 'document', language: x, designTokens: f } = e,
     w = 'function' == typeof k ? k() : k,
     z = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : m.uS(z || w),
     [Z, C] = (0, d.useState)(N),
     [S, D] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(N, { parser: x, plugins: [o.Z, s.ZP, i.ZP, r.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [N]);
    const P = (0, d.useId)();
    let A = d.Fragment;
    return (
     'paragraph' === y ? (A = h) : 'document' === y ? (A = g) : 'surface' === y && (A = v),
     (0, p.jsxs)('div', {
      className: (0, t.Z)(u['nlds-canvas']),
      children: [
       w && (0, p.jsx)('div', { className: (0, t.Z)(u['nlds-canvas__example']), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(A, { children: (0, p.jsx)(a.pu, { children: w }) }) }) }),
       j &&
        (0, p.jsx)('div', {
         className: (0, t.Z)(u['nlds-canvas__toolbar']),
         children: (0, p.jsx)(a.zx, {
          className: (0, t.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           D(!S);
          },
          'aria-expanded': S,
          'aria-controls': P,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, p.jsxs)('div', {
         className: (0, t.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: P,
         hidden: !S,
         children: [
          (0, p.jsx)(b.u, { syntax: x, textContent: Z, trim: !0 }),
          l &&
           (0, p.jsx)('div', {
            className: (0, t.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, p.jsx)(a.zx, {
             className: (0, t.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => i });
   var a = l(46506),
    t = l(12429);
   l(75271);
   const o = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
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
   var s = l(52676);
   function i(e) {
    let { lineNumber: n, syntax: l, textContent: i, trim: r } = e,
     c = i;
    return (
     r && (c = c.trim()),
     (0, s.jsx)(t.y$, {
      theme: o,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: o, getTokenProps: i } = e;
       return (0, s.jsx)(a.dn, { style: l, children: t.map((e, l) => (0, s.jsxs)('span', { ...o({ line: e }), children: [n && (0, s.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  33376: (e, n, l) => {
   l.d(n, { X: () => c });
   var a = l(74986),
    t = l(77380),
    o = l(46506),
    s = l(4814);
   l(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var r = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: m } = e;
    const u = 'Doen',
     b = 'Niet doen',
     p = m ? 'figure' : 'div',
     h = m ? 'figcaption' : 'div';
    return (0, r.jsxs)(p, { className: (0, s.Z)(i['nlds-guideline'], i[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(h, { className: (0, s.Z)(i['nlds-guideline__description']), children: ['dont' === l ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(o.nv, { className: (0, s.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(a.Z, { className: i['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: i['nlds-guideline__title'], children: b })] }), (0, r.jsx)(o.nv, { children: n })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(o.nv, { className: (0, s.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(t.Z, { className: i['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: i['nlds-guideline__title'], children: u })] }), (0, r.jsx)(o.nv, { children: n })] }), c] }), (0, r.jsx)('div', { className: (0, s.Z)(i['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => i, a: () => s });
   var a = l(75271);
   const t = {},
    o = a.createContext(t);
   function s(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
