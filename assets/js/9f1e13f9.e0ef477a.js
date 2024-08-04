'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [45010],
 {
  3510: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var l = t(52676),
    s = t(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  49195: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => u, default: () => b, frontMatter: () => h, metadata: () => g, toc: () => m });
   var l = t(52676),
    s = t(24785),
    o = t(66771),
    r = t(81014);
   function i(e) {
    const n = { h1: 'h1', h2: 'h2', hgroup: 'hgroup', p: 'p', title: 'title', ...(0, s.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(r.X, { appearance: 'do', title: 'Beschrijf in de titel in welke stap van welk formulier de gebruiker is. ', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, l.jsx)(o.X, { language: 'html', code: (0, l.jsx)(n.title, { children: 'Stap 2 van 3, uw gegevens - Gemeente voorbeeld' }), defaultCollapsed: !1 }) }), '\n', (0, l.jsx)(r.X, { appearance: 'dont', title: 'Voor elke (volgende) stap / dezelfde titel.', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, l.jsx)(o.X, { language: 'html', code: (0, l.jsx)(n.title, { children: 'Contact opnemen - Gemeente voorbeeld' }), defaultCollapsed: !1 }) }), '\n', (0, l.jsx)(r.X, { appearance: 'do', title: 'Stap in het kopje van het formulier.', children: (0, l.jsx)(o.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.h2, { children: 'Stap 2 van 3, uw gegevens' }) }) }) }), '\n', (0, l.jsx)(r.X, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', children: (0, l.jsx)(o.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { children: 'Uw gegevens' }), (0, l.jsx)(n.p, { children: 'Stap 2 van 3' })] }) }) }), '\n', (0, l.jsx)(r.X, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', description: 'Gebruik hgroup om het kopje en de stappen semantisch aan elkaar te koppelen.', children: (0, l.jsx)(o.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.hgroup, { children: [(0, l.jsx)(n.h1, { children: 'Uw gegevens' }), (0, l.jsx)(n.p, { children: 'Stap 2 van 3' })] }) }) }) }), '\n', (0, l.jsx)(r.X, { appearance: 'dont', title: 'Stap boven het kopje van het formulier.', children: (0, l.jsx)(o.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.p, { children: 'Stap 2 van 3' }), (0, l.jsx)(n.h2, { children: 'Uw gegevens' })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'geef-aan-hoeveel-stappen-er-zijn-en-in-welke-stap-de-gebruiker-zich-bevindt', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }), '\n', (0, l.jsx)(n.p, { children: 'Als een formulier meerdere stappen heeft, is het noodzakelijk dat een gebruiker weet in welke stap ze zich bevindt en hoeveel stappen er nog volgen. Dit geeft duidelijkheid en voorkomt onzekerheid bij de gebruiker.' }), '\n', (0, l.jsxs)(n.p, { children: ['Een goed patroon in tekst hiervoor is bijvoorbeeld de tekst: ', (0, l.jsx)(n.strong, { children: 'Stap 2 van 6' }), ' of ', (0, l.jsx)(n.strong, { children: 'Vraag 2 van 6' }), '.'] }), '\n', (0, l.jsx)(n.p, { children: 'Voeg deze informatie toe op twee plekken:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['In de ', (0, l.jsx)(n.code, { children: '<title>' }), ' in de ', (0, l.jsx)(n.code, { children: '<head>' }), ' van de pagina.'] }), '\n', (0, l.jsx)(n.li, { children: 'Boven het formulier, bijvoorbeeld in het kopje van het formulier of vlak onder het kopje van het formulier.' }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: ['Aanpassen van de ', (0, l.jsx)(n.code, { children: '<title>' }), ' in de ', (0, l.jsx)(n.code, { children: '<head>' }), ' geldt voor WCAG ook voor dynamisch gegenereerde formulieren en dus ook voor de verschillende stappen. Wanneer de gebruiker technisch gezien op dezelfde pagina blijft, en je met script de volgende formulierstap in beeld brengt, dan moet de paginatitel aangepast worden zodat die klopt bij de stap. Je kunt met script de titel aanpassen:'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-js', children: 'document.title = "Stap 3 van 6: Adresgegevens";\n' }) }), '\n', (0, l.jsxs)(n.p, { children: ['De stappen kort uitschrijven als tekst heeft de voorkeur boven een visuele weergave zoals in een progressbar. Tekst schaalt beter mee bij vergroting of op mobiele weergave. Bovendien is het sneller te lezen en wordt het beter gevonden. Lees hierover ', (0, l.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators', children: 'Using progress indicators' }), ' op ', (0, l.jsx)(n.a, { href: 'http://gov.uk/', children: 'gov.uk' }), '.'] }), '\n', (0, l.jsx)(n.p, { children: 'Het duidelijk aangeven van het aantal stappen en de huidige locatie binnen de stappen is nodig om te voldoen de WCAG-succescriteria:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/1.3.2', children: '1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/2.4.2', children: '2.4.2 Paginatitel' }), ' (niveau A), deze richtlijn geldt ook voor dynamische pagina\u2019s.'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/3.2.3', children: '3.2.3 Consistente navigatie' }), ' (niveau AA)'] }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   var p = t(3510);
   const h = { title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt | Meerdere stappen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voortgang stappen tonen', pagination_label: 'Voortgang stappen tonen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    g = { id: 'richtlijnen/formulieren/multistep/step-count/README', title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt | Meerdere stappen in een formulier | Richtlijnen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', source: '@site/docs/richtlijnen/formulieren/multistep/1-step-count/README.mdx', sourceDirName: 'richtlijnen/formulieren/multistep/1-step-count', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', permalink: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/1-step-count/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt | Meerdere stappen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voortgang stappen tonen', pagination_label: 'Voortgang stappen tonen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Meerdere stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/' }, next: { title: 'Plaatsing voortgang stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang' } },
    v = {},
    m = [];
   function j(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(c, {}), '\n', (0, l.jsx)(a, {}), '\n', (0, l.jsx)(p.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(j, { ...e }) }) : j();
   }
  },
  66771: (e, n, t) => {
   t.d(n, { X: () => b });
   var l = t(93706),
    s = t(4814),
    o = t(73891),
    r = t(65420),
    i = t(58243),
    a = t(25032),
    d = t(74642),
    c = t(75271),
    p = t(60027);
   const h = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var u = t(41179),
    g = t(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(l.Tg, { className: h['nlds-canvas__example-surface'], children: (0, g.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', h['nlds-canvas__example-document']), children: (0, g.jsx)(l.nv, { className: h['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(l.Tg, { className: h['nlds-canvas__example-surface'], children: (0, g.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', h['nlds-canvas__example-document']), children: n }) });
   };
   m.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(l.Tg, { className: h['nlds-canvas__example-surface'], children: n });
   };
   j.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: b = !1, displayCode: _ = !0, children: x, container: k = 'document', language: y, designTokens: f } = e,
     w = 'function' == typeof x ? x() : x,
     z = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : p.uS(z || w),
     [S, C] = (0, c.useState)(N),
     [Z, M] = (0, c.useState)(b);
    (0, c.useEffect)(() => {
     (async () => {
      (S = await d.ZP.format(N, { parser: y, plugins: [o.Z, r.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(S);
     })();
    }, [N]);
    const A = (0, c.useId)();
    let P = c.Fragment;
    return (
     'paragraph' === k ? (P = v) : 'document' === k ? (P = m) : 'surface' === k && (P = j),
     (0, g.jsxs)('div', {
      className: (0, s.Z)(h['nlds-canvas']),
      children: [
       w && (0, g.jsx)('div', { className: (0, s.Z)(h['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(P, { children: (0, g.jsx)(l.pu, { children: w }) }) }) }),
       _ &&
        (0, g.jsx)('div', {
         className: (0, s.Z)(h['nlds-canvas__toolbar']),
         children: (0, g.jsx)(l.zx, {
          className: (0, s.Z)(h['nlds-canvas__button'], h['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           M(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': A,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       _ &&
        (0, g.jsxs)('div', {
         className: (0, s.Z)(h['nlds-canvas__code-block'], !t && h['nlds-canvas__code-block--user-select-none']),
         id: A,
         hidden: !Z,
         children: [
          (0, g.jsx)(u.u, { syntax: y, textContent: S, trim: !0 }),
          t &&
           (0, g.jsx)('div', {
            className: (0, s.Z)(h['nlds-canvas__toolbar'], h['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(l.zx, {
             className: (0, s.Z)(h['nlds-canvas__button'], h['nlds-canvas__copy-button']),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => i });
   var l = t(93706),
    s = t(12429);
   t(75271);
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
   var r = t(52676);
   function i(e) {
    let { lineNumber: n, syntax: t, textContent: i, trim: a } = e,
     d = i;
    return (
     a && (d = d.trim()),
     (0, r.jsx)(s.y$, {
      theme: o,
      code: d,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: s, getLineProps: o, getTokenProps: i } = e;
       return (0, r.jsx)(l.dn, { style: t, children: s.map((e, t) => (0, r.jsxs)('span', { ...o({ line: e }), children: [n && (0, r.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) });
      },
     })
    );
   }
  },
  81014: (e, n, t) => {
   t.d(n, { X: () => d });
   var l = t(5195),
    s = t(41190),
    o = t(93706),
    r = t(4814);
   t(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = t(52676);
   const d = (e) => {
    let { title: n, appearance: t, description: d, children: c, figure: p } = e;
    const h = 'Doen',
     u = 'Niet doen',
     g = p ? 'figure' : 'div',
     v = p ? 'figcaption' : 'div';
    return (0, a.jsxs)(g, { className: (0, r.Z)(i['nlds-guideline'], i[`nlds-guideline--${t}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(v, { className: (0, r.Z)(i['nlds-guideline__description']), children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(l.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: u })] }), (0, a.jsx)(o.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(s.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: h })] }), (0, a.jsx)(o.nv, { children: n })] }), d] }), (0, a.jsx)('div', { className: (0, r.Z)(i['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var l = t(75271);
   const s = {},
    o = l.createContext(s);
   function r(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), l.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
