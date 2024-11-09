'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [69217],
 {
  2554: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => j, contentTitle: () => p, default: () => x, frontMatter: () => u, metadata: () => v, toc: () => b });
   var i = r(52676),
    t = r(24785),
    o = r(57716),
    s = r(71595),
    l = r(46506),
    a = r(45054),
    d = r(52057),
    c = r(78836);
   function h(e) {
    const n = { p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.' }), '\n', (0, i.jsxs)(n.p, { children: ['De ', (0, i.jsx)(n.strong, { children: 'visuele' }), ' focusvolgorde moet betekenisvol zijn.'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 2.4.3 Focus volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.3 Focus volgorde', pagination_label: 'WCAG-succescriterium 2.4.3 Focus volgorde', description: 'Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.', slug: '2.4.3', keywords: ['WCAG', 'Focus Order', 'Niveau A'] },
    p = void 0,
    v = { id: 'wcag/2.4.03', title: 'WCAG-succescriterium 2.4.3 Focus volgorde', description: 'Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.', source: '@site/docs/wcag/2.4.03.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.3', permalink: '/wcag/2.4.3', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.03.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.3 Focus volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.3 Focus volgorde', pagination_label: 'WCAG-succescriterium 2.4.3 Focus volgorde', description: 'Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.', slug: '2.4.3', keywords: ['WCAG', 'Focus Order', 'Niveau A'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.2 Paginatitel', permalink: '/wcag/2.4.2' }, next: { title: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', permalink: '/wcag/2.4.4' } },
    j = {},
    b = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.4.3 Focus volgorde' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(g, {}), '\n', (0, i.jsx)(n.p, { children: 'Een voorspelbare focus volgorde is belangrijk voor toetsenbordgebruikers. Zij kunnen dan bijvoorbeeld makkelijker binnen een pagina links of buttons ontdekken of een formulier invullen.' }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de natuurlijke tabvolgorde bij de verschillende resoluties, schermbreedtes en ori\xebntaties logisch blijft.' }), '\n', (0, i.jsx)(n.p, { children: "Met het tabindex attribuut kan de volgorde ook specifiek worden ingesteld per element, maar dat raden we af, omdat je dan voor elk element op de pagina zo'n tabindex zou moeten zetten, en het is bijna onmogelijk dat goed te doen, zeker bij verschillende resoluties, schermbreedtes en ori\xebntaties." }), '\n', (0, i.jsxs)(n.p, { children: ['Voor een Nederlandstalige website is leesvolgorde van links naar rechts en van boven naar beneden. Zorg er dan voor dat ook de tabvolgorde van links naar rechts en van boven naar beneden is. Voor bijvoorbeeld Hebreeuws of Arabisch kan deze volgorde anders zijn. Laat de tabvolgorde die van de taalinstelling en ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir', children: 'leesrichting' }), ' volgen.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Toetsenbordnavigatie: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Meerdere stappen: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Visueel ontwerp: ', (0, i.jsx)(n.a, { href: '/visueel-ontwerp/focus-goed-zichtbaar', children: 'Maak toetsenbord focus goed zichtbaar' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(a.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Tab met het toetsenbord door de pagina en controleer of de tabvolgorde logisch en zoals verwacht is.\nDe tabvolgorde moet voor elk type weergave logisch, zichtbaar en voorspelbaar zijn en niet alleen voor een breed scherm op hoge resolutie.' }), '\n', (0, i.jsx)(n.p, { children: 'Let vooral op als de volgorde voor een andere weergave wordt aangepast via CSS met grid of flexbox.' }), '\n', (0, i.jsx)(n.p, { children: 'Aanvullende testen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Tab ook terug met shift-tab, werkt dat ook voorspelbaar?' }), '\n', (0, i.jsx)(n.li, { children: 'Controleer dialogs zoals het responsive menu. Is de tabvolgorde logisch. Keert bij het sluiten de focus terug naar de button om het dialog te openen?' }), '\n', (0, i.jsx)(n.li, { children: 'Test bij verschillende schermbreedtes en ori\xebntaties (landscape/portrait).' }), '\n', (0, i.jsx)(n.li, { children: 'Zoom in tot 400% en check de tabvolgorde.' }), '\n', (0, i.jsx)(n.li, { children: 'Controleer dynamisch toegevoegde inhoud, zoals extra formuliervelden bij het selecteren van optie of een uitklapmenu.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-order', children: (0, i.jsx)('span', { lang: 'en', children: '2.4.3 Focus Order' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-volgorde', children: '2.4.3 Focus volgorde' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-order', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.3 Focus Order' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.3 Focus Order' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(l.CY, { children: (0, i.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(d.ZP, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(c.ZP, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  45054: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(24785);
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  52057: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(24785);
   function o(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvulling-op-wcag', children: 'Aanvulling op WCAG' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Belangrijk:' }), ' De richtlijnen van NL Design System zijn niet verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  78836: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(24785);
   function o(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  72657: (e, n, r) => {
   r.d(n, { V: () => s });
   var i = r(4814);
   r(75271);
   const t = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var o = r(52676);
   const s = (e) => {
    let { children: n, className: r, level: s = 1, suffix: l, ...a } = e;
    return (0, o.jsxs)('hgroup', { className: (0, i.Z)(t['nlds-inline-heading-group'], `utrecht-heading-${s}`, r), ...a, children: [(0, o.jsx)('h1', { className: (0, i.Z)(t['nlds-inline-heading-group__heading']), children: n }), l && (0, o.jsxs)('p', { className: (0, i.Z)(t['nlds-inline-heading-group__suffix']), children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, r) => {
   r.d(n, { U: () => c });
   var i = r(24785),
    t = r(46506),
    o = (r(75271), r(52676));
   const s = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    l = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: r, ...i } = n;
      return (0, o.jsx)('img', { ...i, src: s(e, r), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = (e) => {
     let { children: n, omitH1: r = !1, headingLevel: t = 1, baseUrl: s = '' } = e;
     return (0, o.jsx)(i.Z, { components: { ...d(r, t), ...a(s) }, children: n });
    };
  },
  71595: (e, n, r) => {
   r.d(n, { j: () => a });
   var i = r(46506),
    t = (r(75271), r(72657));
   const o = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    s = 'nlds-inline-heading-group__badge_TgvT';
   var l = r(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: r, ...a } = e;
    return (0, l.jsx)(t.V, { className: o, suffix: r && (0, l.jsx)(i.Ou, { className: s, children: r }), ...a, children: n });
   };
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => s });
   var i = r(75271);
   const t = {},
    o = i.createContext(t);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
