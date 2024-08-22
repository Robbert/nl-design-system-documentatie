'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64279],
 {
  33984: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var t = l(52676),
    s = l(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  8396: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => b, default: () => _, frontMatter: () => p, metadata: () => m, toc: () => v });
   var t = l(52676),
    s = l(24785),
    o = l(44585),
    i = l(33376);
   function a(e) {
    const n = { input: 'input', label: 'label', option: 'option', select: 'select', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(i.X, { appearance: 'dont', title: 'Het label inconsequent plaatsen in een formulier (visueel en in code).', children: (0, t.jsx)(o.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'lievelingskleur', children: 'Wat is je lievelingskleur?' }), (0, t.jsxs)(n.select, { name: 'lievelingskleur', id: 'lievelingskleur', children: [(0, t.jsx)(n.option, { children: 'Rood' }), (0, t.jsx)(n.option, { children: 'Blauw' }), (0, t.jsx)(n.option, { children: 'Wit' })] }), (0, t.jsx)(n.input, { type: 'text', id: 'dier', name: 'lievelingsdier' }), (0, t.jsx)(n.label, { for: 'dier', children: 'Wat is je lievelingsdier?' })] }) }) })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'zet-het-label-boven-het-formulierveld', children: 'Zet het label boven het formulierveld' }), '\n', (0, t.jsx)(n.p, { children: 'Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd.' }), '\n', (0, t.jsx)(n.p, { children: 'Deze plaatsing heeft meerdere voordelen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht.' }), '\n', (0, t.jsx)(n.li, { children: 'Dit werkt beter voor gebruikers die de tekst inzoomen.' }), '\n', (0, t.jsx)(n.li, { children: "Door labels, formuliervelden en acties verticaal uit te lijnen, wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat.' }), '\n', (0, t.jsxs)(n.p, { children: ['Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort. Lees hierover mee over bij ', (0, t.jsx)(n.a, { href: 'https://www.nldesignsystem.nl/richtlijnen/stijl/ruimte#ontwerpen-met-ruimte', children: 'de richtlijnen over stijl: Ruimte' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond.' }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik geen zogenaamde \u201cfloating labels\u201d. Deze zijn moeilijker te begrijpen. Zie: ', (0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/02/material-design-text-fields/', children: (0, t.jsx)('span', { lang: 'en', children: 'Material Design Text Fields Are Badly Designed in Smashing Magazine' }) }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   var u = l(33984);
   const p = { title: 'Zet het label boven het formulierveld | Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing label', pagination_label: 'Plaatsing label', description: 'Richtlijnen voor label boven het formulierveld.', slug: '/richtlijnen/formulieren/labels/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    m = { id: 'richtlijnen/formulieren/label/above-field/README', title: 'Zet het label boven het formulierveld | Labels in een formulier | Richtlijnen', description: 'Richtlijnen voor label boven het formulierveld.', source: '@site/docs/richtlijnen/formulieren/label/3-above-field/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/3-above-field', slug: '/richtlijnen/formulieren/labels/plaatsing', permalink: '/richtlijnen/formulieren/labels/plaatsing', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/3-above-field/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zet het label boven het formulierveld | Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing label', pagination_label: 'Plaatsing label', description: 'Richtlijnen voor label boven het formulierveld.', slug: '/richtlijnen/formulieren/labels/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Zichtbare naam label', permalink: '/richtlijnen/formulieren/labels/zichtbare-naam' }, next: { title: 'Label zichtbaar', permalink: '/richtlijnen/formulieren/labels/altijd-zichtbaar' } },
    h = {},
    v = [];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(r, {}), '\n', (0, t.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  44585: (e, n, l) => {
   l.d(n, { X: () => _ });
   var t = l(46506),
    s = l(4814),
    o = l(25585),
    i = l(40282),
    a = l(40678),
    r = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var b = l(41179),
    m = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(t.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, m.jsx)(t.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(t.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: y, container: x = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [z, C] = (0, d.useState)(Z),
     [D, P] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (z = await c.ZP.format(Z, { parser: f, plugins: [o.Z, i.ZP, a.ZP, r.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(z);
     })();
    }, [Z]);
    const S = (0, d.useId)();
    let R = d.Fragment;
    return (
     'paragraph' === x ? (R = h) : 'document' === x ? (R = v) : 'surface' === x && (R = g),
     (0, m.jsxs)('div', {
      className: (0, s.Z)(p['nlds-canvas']),
      children: [
       w && (0, m.jsx)('div', { className: (0, s.Z)(p['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(R, { children: (0, m.jsx)(t.pu, { children: w }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, s.Z)(p['nlds-canvas__toolbar']),
         children: (0, m.jsx)(t.zx, {
          className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           P(!D);
          },
          'aria-expanded': D,
          'aria-controls': S,
          children: D ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, s.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: S,
         hidden: !D,
         children: [
          (0, m.jsx)(b.u, { syntax: f, textContent: z, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, s.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(t.zx, {
             className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => a });
   var t = l(46506),
    s = l(12429);
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
   var i = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: r } = e,
     c = a;
    return (
     r && (c = c.trim()),
     (0, i.jsx)(s.y$, {
      theme: o,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: s, getLineProps: o, getTokenProps: a } = e;
       return (0, i.jsx)(t.dn, { style: l, children: s.map((e, l) => (0, i.jsxs)('span', { ...o({ line: e }), children: [n && (0, i.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  33376: (e, n, l) => {
   l.d(n, { X: () => c });
   var t = l(74986),
    s = l(77380),
    o = l(46506),
    i = l(4814);
   l(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var r = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: u } = e;
    const p = 'Doen',
     b = 'Niet doen',
     m = u ? 'figure' : 'div',
     h = u ? 'figcaption' : 'div';
    return (0, r.jsxs)(m, { className: (0, i.Z)(a['nlds-guideline'], a[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(h, { className: (0, i.Z)(a['nlds-guideline__description']), children: ['dont' === l ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(o.nv, { className: (0, i.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(t.Z, { className: a['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: a['nlds-guideline__title'], children: b })] }), (0, r.jsx)(o.nv, { children: n })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(o.nv, { className: (0, i.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(s.Z, { className: a['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: a['nlds-guideline__title'], children: p })] }), (0, r.jsx)(o.nv, { children: n })] }), c] }), (0, r.jsx)('div', { className: (0, i.Z)(a['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => i });
   var t = l(75271);
   const s = {},
    o = t.createContext(s);
   function i(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
