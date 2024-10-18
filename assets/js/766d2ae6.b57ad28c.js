'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [28360],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var o = l(52676),
    t = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  65738: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => p, contentTitle: () => v, default: () => f, frontMatter: () => m, metadata: () => g, toc: () => h });
   var o = l(52676),
    t = l(24785),
    s = l(98480),
    r = l(91050);
   function i(e) {
    const n = { a: 'a', form: 'form', h2: 'h2', li: 'li', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, o.jsx)(r.X, { appearance: 'do', title: 'Een samenvatting van de fouten boven het formulier.', description: 'Verplaats focus naar de samenvatting of de kop van de samenvatting.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { children: 'Invoerfouten gevonden in het formulier' }), (0, o.jsxs)(n.ul, { children: [(0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '#naam', children: 'Vul uw naam in.' }) }), (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '#email', children: 'Vul uw e-mailadres in.' }) })] }), (0, o.jsx)(n.form, { children: '[...]' })] }) }) });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function c(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }), '\n', (0, o.jsx)(n.p, { children: 'Een zeer gebruikersvriendelijke manier om fouten weer te geven is een combinatie van:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'een samenvatting boven het formulier en;' }), '\n', (0, o.jsx)(n.li, { children: 'per formulierveld de foutmelding herhalen.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Elke foutmelding in de samenvatting is ook een link naar het formulier. Hierdoor kan de toetsenbordgebruiker direct doorgaan naar het veld met de foutmelding.' }), '\n', (0, o.jsx)(n.p, { children: 'De constructie is als volgt:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Na het versturen van een formulier met fouten wordt ', (0, o.jsx)(n.strong, { children: 'boven' }), ' het formulier een lijst met fouten getoond.'] }), '\n', (0, o.jsx)(n.li, { children: 'Deze lijst heeft een kopje met bijvoorbeeld de tekst:\n"Er was een probleem met je inzending. Verbeter de fouten voor je verder gaat.".' }), '\n', (0, o.jsx)(n.li, { children: 'Daaronder staat een lijst met de foutmeldingen. Elke foutmelding is ook een link naar het bijbehorende formulierveld.' }), '\n', (0, o.jsx)(n.li, { children: 'Het kopje boven de fouten krijgt de toetsenbordfocus. Dan staat het meteen in beeld, wordt het voorgelezen door screenreaders en is de tabvolgorde logisch: de links naar de betreffende velden zijn de eerstvolgende items.' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['GOV.UK geeft hiervan enkele duidelijke voorbeelden op ', (0, o.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-summary/', children: (0, o.jsx)('span', { lang: 'en', children: 'Components Error summary' }) }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Duidelijke foutmeldingen zijn nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'WCAG-succescriterium 3.3.1 Foutidentificatie' }), ' (niveau A).'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   var u = l(55400);
   const m = { title: 'Zet een samenvatting van de foutmeldingen boven het formulier \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Samenvatting fouten', pagination_label: 'Samenvatting fouten', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    g = { id: 'richtlijnen/formulieren/error/summary/README', title: 'Zet een samenvatting van de foutmeldingen boven het formulier \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', source: '@site/docs/richtlijnen/formulieren/error/6-summary/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/6-summary', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', permalink: '/richtlijnen/formulieren/foutmeldingen/samenvatting', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/6-summary/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zet een samenvatting van de foutmeldingen boven het formulier \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Samenvatting fouten', pagination_label: 'Samenvatting fouten', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'HTML-formuliervalidatie', permalink: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie' }, next: { title: 'Screenreaderfeedback', permalink: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback' } },
    p = {},
    h = [];
   function _(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(a, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(_, { ...e }) }) : _();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => f });
   var o = l(46506),
    t = l(4814),
    s = l(25585),
    r = l(40282),
    i = l(40678),
    a = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var v = l(41179),
    g = l(52676);
   const p = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, g.jsx)(o.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   p.displayName = 'ParagraphContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   h.displayName = 'DocumentContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   _.displayName = 'SurfaceContainer';
   const f = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: f = !1, displayCode: b = !0, children: y, container: j = 'document', language: x, designTokens: k } = e,
     N = 'function' == typeof y ? y() : y,
     w = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(w || N),
     [S, C] = (0, d.useState)(Z),
     [z, E] = (0, d.useState)(f);
    (0, d.useEffect)(() => {
     (async () => {
      (S = await c.ZP.format(Z, { parser: x, plugins: [s.Z, r.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(S);
     })();
    }, [Z]);
    const D = (0, d.useId)();
    let F = d.Fragment;
    return (
     'paragraph' === j ? (F = p) : 'document' === j ? (F = h) : 'surface' === j && (F = _),
     (0, g.jsxs)('div', {
      className: (0, t.Z)(m['nlds-canvas']),
      children: [
       N && (0, g.jsx)('div', { className: (0, t.Z)(m['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(F, { children: (0, g.jsx)(o.pu, { children: N }) }) }) }),
       b &&
        (0, g.jsx)('div', {
         className: (0, t.Z)(m['nlds-canvas__toolbar']),
         children: (0, g.jsx)(o.zx, {
          className: (0, t.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           E(!z);
          },
          'aria-expanded': z,
          'aria-controls': D,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, g.jsxs)('div', {
         className: (0, t.Z)(m['nlds-canvas__code-block'], !l && m['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !z,
         children: [
          (0, g.jsx)(v.u, { syntax: x, textContent: S, trim: !0 }),
          l &&
           (0, g.jsx)('div', {
            className: (0, t.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(o.zx, {
             className: (0, t.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(S).catch((e) => console.error('Copy code failed', e));
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
   var o = l(46506),
    t = l(70739);
   l(75271);
   const s = {
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
   var r = l(52676);
   function i(e) {
    let { lineNumber: n, syntax: l, textContent: i, trim: a } = e,
     c = i;
    return (
     a && (c = c.trim()),
     (0, r.jsx)(t.y$, {
      theme: s,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: s, getTokenProps: i } = e;
       return (0, r.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => c });
   var o = l(77355),
    t = l(67663),
    s = l(46506),
    r = l(4814);
   l(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: u } = e;
    const m = 'Doen',
     v = 'Niet doen',
     g = u ? 'figure' : 'div',
     p = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(g, { className: (0, r.Z)(i['nlds-guideline'], i[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: (0, r.Z)(i['nlds-guideline__description']), children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: v })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(t.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: m })] }), (0, a.jsx)(s.nv, { children: n })] }), c] }), (0, a.jsx)('div', { className: (0, r.Z)(i['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => i, a: () => r });
   var o = l(75271);
   const t = {},
    s = o.createContext(t);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
