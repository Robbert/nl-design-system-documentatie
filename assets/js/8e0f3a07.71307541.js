'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [50718],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var o = l(52676),
    s = l(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  54629: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => b, contentTitle: () => m, default: () => _, frontMatter: () => u, metadata: () => h, toc: () => v });
   var o = l(52676),
    s = l(24785),
    r = l(98480),
    i = l(91050);
   function t(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(i.X, { appearance: 'do', title: 'Koppel een description aan het formulierveld, met aria-describedby.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.p, { id: 'description-wachtwoord', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, o.jsx)(i.X, { appearance: 'dont', title: 'Koppeling weglaten.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'wachtwoord0', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.p, { children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)(n.input, { id: 'wachtwoord0', type: 'password', name: 'nieuw-wachtwoord' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'koppel-een-description-aan-het-formulierveld', children: 'Koppel een description aan het formulierveld' }), '\n', (0, o.jsx)(n.p, { children: 'Voor screenreadergebruikers is het belangrijk dat de description samen wordt voorgelezen met het formulierveld.' }), '\n', (0, o.jsxs)(n.p, { children: ['Waarom? Screenreaders, zoals JAWS, schakelen over naar de \u201cformulierenmodus\u201d wanneer ze inhoud binnen een ', (0, o.jsx)(n.code, { children: '<form>' }), ' element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld ', (0, o.jsx)(n.code, { children: 'aria-describedby' }), '). De niet-gekoppelde informatie wordt dan niet voorgelezen, tenzij de gebruiker er zelf naar zoekt.'] }), '\n', (0, o.jsx)(n.p, { children: 'Meer informatie over de formulierenmodus:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/tutorials/forms/instructions/', children: 'Form Instructions' }), ', Web Accessibility Initiative.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes', children: 'Browse and focus modes' }), ', Accessibility Developer Guide.'] }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: "Door de description aan het formulierveld te koppelen via 'aria'-describedby', wordt het label en de description samen voorgelezen wanneer een screenreadergebruiker het formulierveld focus geeft." }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op:' }), ' De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Geef description een ID: ', (0, o.jsx)(n.code, { children: 'id="description-name"' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Verwijs in het formulierveld naar dat ID: ', (0, o.jsx)(n.code, { children: 'aria-describedby="description-name"' }), '.'] }), '\n'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Lees ook: ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'MDN over aria-describedby' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   var p = l(55400);
   const u = { title: 'Koppel een description aan het formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppel description', pagination_label: 'Koppel description', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/description/associated/README', title: 'Koppel een description aan het formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', source: '@site/docs/richtlijnen/formulieren/description/1-associated/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/1-associated', slug: '/richtlijnen/formulieren/descriptions/koppelen', permalink: '/richtlijnen/formulieren/descriptions/koppelen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/1-associated/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Koppel een description aan het formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppel description', pagination_label: 'Koppel description', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/koppelen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Descriptions in een formulier', permalink: '/richtlijnen/formulieren/descriptions/' }, next: { title: 'Plaatsing description', permalink: '/richtlijnen/formulieren/descriptions/plaatsing' } },
    b = {},
    v = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(p.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => _ });
   var o = l(46506),
    s = l(4814),
    r = l(25585),
    i = l(40282),
    t = l(40678),
    c = l(85722),
    a = l(6374),
    d = l(75271),
    p = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    h = l(52676);
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: u['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, h.jsx)(o.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   b.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: u['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: y = !0, children: x, container: j = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : p.uS(N || w),
     [Z, C] = (0, d.useState)(z),
     [D, S] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await a.ZP.format(z, { parser: f, plugins: [r.Z, i.ZP, t.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [z]);
    const A = (0, d.useId)();
    let K = d.Fragment;
    return (
     'paragraph' === j ? (K = b) : 'document' === j ? (K = v) : 'surface' === j && (K = g),
     (0, h.jsxs)('div', {
      className: (0, s.Z)(u['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, s.Z)(u['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(K, { children: (0, h.jsx)(o.pu, { children: w }) }) }) }),
       y &&
        (0, h.jsx)('div', {
         className: (0, s.Z)(u['nlds-canvas__toolbar']),
         children: (0, h.jsx)(o.zx, {
          className: (0, s.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!D);
          },
          'aria-expanded': D,
          'aria-controls': A,
          children: D ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, h.jsxs)('div', {
         className: (0, s.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: A,
         hidden: !D,
         children: [
          (0, h.jsx)(m.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: Z, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, s.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(o.zx, {
             className: (0, s.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
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
   l.d(n, { u: () => a });
   var o = l(46506),
    s = l(70739),
    r = l(75271),
    i = l(91050);
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
   var c = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: d } = e,
     p = a;
    const { title: u, type: m } = (0, r.useContext)(i.n),
     h = (0, r.useId)();
    return (
     d && (p = p.trim()),
     (0, c.jsx)(s.y$, {
      theme: t,
      code: p,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: s, getLineProps: r, getTokenProps: i } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(o.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: l, children: s.map((e, l) => (0, c.jsxs)('span', { ...r({ line: e }), children: [n && (0, c.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { n: () => d, X: () => p });
   var o = l(77355),
    s = l(67663),
    r = l(46506),
    i = l(4814),
    t = l(75271);
   const c = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = l(52676);
   const d = (0, t.createContext)({}),
    p = (e) => {
     let { title: n, appearance: l, description: t, children: p, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      b = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, i.Z)(c['nlds-guideline'], c[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(b, { className: (0, i.Z)(c['nlds-guideline__description']), children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: c['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: c['nlds-guideline__title'], children: m.dont })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: c['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: c['nlds-guideline__title'], children: m.do })] }), (0, a.jsx)(r.nv, { children: n })] }), t] }), (0, a.jsx)('div', { className: (0, i.Z)(c['nlds-guideline__example']), children: (0, a.jsx)(d.Provider, { value: { title: n, type: m[l] }, children: p }) })] });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => t, a: () => i });
   var o = l(75271);
   const s = {},
    r = o.createContext(s);
   function i(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
