'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8540],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var r = t(52676),
    o = t(24785);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  45893: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => h, default: () => f, frontMatter: () => c, metadata: () => g, toc: () => p });
   var r = t(52676),
    o = t(24785);
   function i(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i();
   }
   function a(e) {
    const n = { a: 'a', code: 'code', em: 'em', h2: 'h2', h4: 'h4', img: 'img', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Kies een lettertype ofwel \u2018Typeface\u2019 dat de leesbaarheid van paragrafen ten goede komt. Houd bij het kiezen van een lettertype rekening met de volgende factoren:' }), '\n', (0, r.jsx)(n.h2, { id: 'herkenbaarheid', children: 'Herkenbaarheid' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik een sans-serif of serif lettertype met herkenbare lettervormen. Gebruik geen decoratief lettertype.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_lettertype.png', alt: 'Paragrafen met verschillende lettertypes. De eerste sans-serif, de tweede serif, de derde decoratief. Bij de derde paragraaf staat een rood kruis.' }) }), '\n', (0, r.jsx)(n.h2, { id: 'x-hoogte', children: 'x-hoogte' }), '\n', (0, r.jsx)(n.p, { children: 'x-hoogte is de hoogte van een kleine letter x voor een bepaald lettertype. Over het algemeen zorgt een hoge x-hoogte voor een betere leesbaarheid. Maar de x-hoogte van het lettertype zou ook weer niet te hoog moeten zijn. Hierdoor zouden bijvoorbeeld de \u2018h\u2019 en de \u2018n\u2019 te veel op elkaar gaan lijken. Daarnaast zou de x-hoogte per letter consistent moeten zijn.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_x-hoogte.png', alt: "Afgebeeld zijn de letters 'n' en 'h' met lettertype Futura, Roboto en Impact. Futura heeft een lage x-hoogte, Roboto gemiddeld tot hoog, Impact zeer hoog. Bij het Impact voorbeeld staat een rood kruis." }) }), '\n', (0, r.jsx)(n.h2, { id: 'lettercontrast', children: 'Lettercontrast' }), '\n', (0, r.jsx)(n.p, { children: 'Het lettercontrast, het verschil in lijndikte van een letter, zou niet te hoog of te laag moeten zijn. Te veel contrast leidt af en door te weinig contrast gaan lettervormen op elkaar lijken.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_letter-contrast.png', alt: "Afgebeeld is de letter 'o' met lettertypes Futura, Arial en Lao MN. Futura heeft een laag letter contrast, Arial heeft een gemiddeld letter contrast, Lao MN heeft een zeer hoog letter contrast. Bij het Lao MN voorbeeld staat een rood kruis." }) }), '\n', (0, r.jsx)(n.h2, { id: 'lettervormen', children: 'Lettervormen' }), '\n', (0, r.jsx)(n.p, { children: 'Individuele lettervormen zouden genoeg van vorm moeten verschillen waardoor ze niet met elkaar verward kunnen worden. De hoofdletter I de letter l en het cijfer 1 zouden bijvoorbeeld onderling moeten verschillen. Dat geldt ook voor de hoofdletter O en het cijfer 0.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_lettervormen.png', alt: "Afgebeeld zijn hoofdletter 'i' letter 'l' en cijfer '1' met lettertype Merriweather, Noto Sans en Inter. Merriweather en Noto Sans tonen een verschil in lettervorm. Bij Inter zijn hoofdletter 'i' letter 'l' gelijkwaardig in vorm. Bij het Inter voorbeeld staat een rood kruis." }) }), '\n', (0, r.jsx)(n.h2, { id: 'letterafstand', children: 'Letterafstand' }), '\n', (0, r.jsxs)(n.p, { children: ["Een combinatie van de letters 'r' en 'n' (rn)' zou een duidelijke ruimte moeten hebben om verwarring te voorkomen met letter 'm'. Hier kun je via ", (0, r.jsx)(n.code, { children: 'letter-spacing' }), ' invloed op uitoefenen. Momenteel maken we hier geen gebruik van binnen het Voorbeeld thema.'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_letter-afstand.png', alt: "De letters 'r' en 'n' zijn twee keer afgebeeld. Bij heeft eerste voorbeeld is er voldoende letter afstand. Bij het tweede voorbeeld is er te weinig letter afstand. Bij het tweede voorbeeld staat een rood kruis." }) }), '\n', (0, r.jsx)(n.h2, { id: 'tekens', children: 'Tekens' }), '\n', (0, r.jsxs)(n.p, { children: ['Het lettertype zou alle benodigde tekens moeten ondersteunen. Denk daarbij aan speciale tekens, andere talen en stijlen (bold en/of cursief). Maar ook \u2018', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric', children: 'tabular-nums' }), '\u2019 waardoor cijfers even breed getoond kunnen worden in tabellen en lijsten. Dit oogt fraaier en de informatie is beter te scannen en vergelijken.'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_tabular-nums.png', alt: 'Er staan twee keer twee duizendtallen boven elkaar. Bij het eerste voorbeeld wordt er geen gebruik gemaakt van tabular-nums waardoor de de positie van de punt per duizendtal verschilt. Bij het tweede voorbeeld is er wel gebruik gemaakt van tabular-nums waardoor de punt bij beide duizendtallen op dezelfde plek staat.' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het hebben van een \u2018slashed-zero\u2019 is handig. Zo kan men het cijfer 0 en de letter O gemakkelijk onderscheiden. Handig wanneer men voor "toon wachtwoord" kiest of bij het lezen van een code (bijvoorbeeld IBAN).' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_slashed-zero.png', alt: 'Afgebeeld is twee keer het getal 67.890. Bij het eerste voorbeeld wordt er geen gebruik gemaakt van een slashed zero. Bij het twee voorbeeld wel.' }) }), '\n', (0, r.jsx)(n.h4, { id: 'vetgedrukt', children: 'Vetgedrukt' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik alleen lettertypes die zijn ontworpen voor goede leesbaarheid wanneer letters vetgedrukt ofwel ', (0, r.jsx)(n.code, { children: 'bold' }), ' zijn. Als je met CSS een eigen font gebruikt, dan moet je ook ', (0, r.jsx)(n.code, { children: 'font-weight' }), ' noemen. Gebruik in je site alleen ', (0, r.jsx)(n.code, { children: 'font-weight' }), ' waarvoor je ook echt een webfont hebt.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Je kunt dingen doen om te voorkomen dat een verkeerde ', (0, r.jsx)(n.code, { children: 'font-weight' }), ' wordt gebruikt. Maak een overzicht in je documentatie van elke ', (0, r.jsx)(n.code, { children: 'font-weight' }), ' die gebruikt kan worden in je ontwerpen. Maak een design token voor elke ', (0, r.jsx)(n.code, { children: 'font-weight' }), ' die mag, zodat de regel voor iedereen simpel is: gebruik nooit eigen ', (0, r.jsx)(n.code, { children: 'font-weight' }), ' waarde, gebruik alleen de CSS variable van deze design tokens.'] }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld, je kunt deze design tokens hebben:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'example.typography.light.font-weight' }), ': 300'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'example.typography.normal.font-weight' }), ': 400'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'example.typography.semi-bold.font-weight' }), ': 500'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'example.typography.bold.font-weight' }), ': 700'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dan gebruik je CSS variables die verwijzen naar de design token, in plaats van direct ', (0, r.jsx)(n.code, { children: 'font-weight: 500' }), ':'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: 'h3 {\n  font-weight: var(--example-typography-semi-bold-font-weight);\n}\n' }) }), '\n', (0, r.jsxs)(n.h4, { id: 'eigen-font-family-naam-voor-bold-of-italic-variant', children: ['Eigen ', (0, r.jsx)(n.code, { children: 'font-family' }), ' naam voor bold of italic variant'] }), '\n', (0, r.jsxs)(n.p, { children: ['Soms wordt een lettertype aangeleverd met CSS-code waarin voor hetzelfde lettertype verschillende namen zijn gebruikt. Gebruik dan niet de naam zoals die is aangeleverd, maar pas de code aan zodat elke ', (0, r.jsx)(n.code, { children: '@font-face' }), ' dezelfde ', (0, r.jsx)(n.code, { children: 'font-family' }), ' heeft.'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Niet doen:' }) }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '/* Niet gebruiken is foute code */\n@font-face {\n  font-family: GovernmentFont;\n  font-weight: normal;\n  src: url("GovernmentFont.woff2");\n}\n\n@font-face {\n  font-family: GovernmentFontBold;\n  font-weight: bold;\n  src: url("GovernmentFontBold.woff2");\n}\n\n:root {\n  font-family: GovernmentFont;\n}\n\nh1 {\n  font-family: GovernmentFontBold;\n}\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Sommige gebruikers kiezen ervoor om alle tekst op hun scherm vetgedrukt te maken. In plaats van een beter leesbare pagina, krijgen zij door bovenstaande code een automatische bold variant van ', (0, r.jsx)(n.code, { children: 'GovernmentFont' }), ' in tegenstelling tot de speciaal ontworpen ', (0, r.jsx)(n.code, { children: 'GovernmentFontBold' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Wel doen:' }) }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '@font-face {\n  font-family: GovernmentFont;\n  font-weight: normal;\n  src: url("GovernmentFont.woff2");\n}\n\n@font-face {\n  font-family: GovernmentFont;\n  font-weight: bold;\n  src: url("GovernmentFontBold.woff2");\n}\n\n:root {\n  font-family: GovernmentFont;\n}\n\ndt {\n  font-weight: bold;\n}\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Op deze manier ontloop je het risico dat gebruikers minder leesbare teksten krijgen te zien door ', (0, r.jsx)(n.em, { children: 'faux italic' }), ' of ', (0, r.jsx)(n.em, { children: 'faux bold' }), ' letters, of nog erger: een vetgedrukt lettertype dat met ', (0, r.jsx)(n.em, { children: 'faux bold' }), ' nog eens extra vetgedrukt wordt. Bovendien heb je zo duidelijkere code.'] }), '\n', (0, r.jsx)(n.h2, { id: 'anti-aliasing', children: 'Anti-aliasing' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik geen ', (0, r.jsx)(n.code, { children: 'font-smoothing' }), '. Gebruikers hebben zeer uiteenlopende types beeldschermen, browsers en besturingssystemen. Hoe letters op jouw scherm worden getoond, is anders dan bij veel anderen. Wanneer ', (0, r.jsx)(n.code, { children: 'font-smoothing' }), ' goed werkt voor jouw beeldscherm, betekent het niet automatisch dat dat bij iedereen zo is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik ', (0, r.jsx)(n.code, { children: 'font-smoothing' }), ' ook niet om de dikte van de tekst te optimaliseren, vertrouw op de instellingen van de gebruiker en laat ', (0, r.jsx)(n.code, { children: 'font-smoothing: auto' }), ' het werk doen. Wanneer het nodig is om minuscule aanpassingen te doen aan, gebruik dan een modern lettertype dat als ', (0, r.jsx)(n.em, { children: 'variable font' }), ' geleverd wordt.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Alleen als je een ', (0, r.jsx)(n.em, { children: 'pixel font' }), ' gebruikt mag je daar ', (0, r.jsx)(n.code, { children: 'font-smoothing: none' }), ' voor gebruiken.'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Niet doen:' }) }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '/* Niet gebruiken is foute code */\n:root {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n' }) }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Wel doen:' }), '\nVerwijder alle code om ', (0, r.jsx)(n.code, { children: 'font-smoothing' }), ' aan te passen. Zit de code in een externe library waar je niet makkelijk enkele regels kunt verwijderen? Dan kun je misschien CSS toevoegen om het ongedaan te maken.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: ':root {\n  -webkit-font-smoothing: auto !important;\n  -moz-osx-font-smoothing: auto !important;\n}\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'variabele-lettertypes', children: 'Variabele lettertypes' }), '\n', (0, r.jsx)(n.p, { children: 'Variabele lettertypes zijn een relatief nieuw concept binnen de wereld van typografie. Bij een variabele lettertype heb je \xe9\xe9n lettertype bestand dat meerdere stilistische variaties aan kan. Gewicht, breedte, stijl, optische grootte, etc. kunnen worden gemanipuleerd of aangepast.' }), '\n', (0, r.jsx)(n.p, { children: 'Bij een variabel lettertype hoeft er maar \xe9\xe9n bestand geladen te worden. Dit kan de laadsnelheid van je website bevorderen.' }), '\n', (0, r.jsx)(n.h2, { id: 'aantal-lettertypes', children: 'Aantal lettertypes' }), '\n', (0, r.jsx)(n.p, { children: 'Beperk hoeveel lettertypes en lettertype variaties je gebruikt. \xc9\xe9n of twee is voldoende.' }), '\n', (0, r.jsx)(n.h2, { id: 'lettertypes-die-voldoen-aan-de-nl-design-system-richtlijnen', children: 'Lettertypes die voldoen aan de NL Design System richtlijnen' }), '\n', (0, r.jsx)(n.p, { children: 'Enkele Open Source lettertypes die voldoen aan de richtlijnen.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://fonts.google.com/specimen/Fira+Sans', children: 'Fira Sans' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://fonts.google.com/specimen/IBM+Plex+Serif', children: 'IBM Plex Serif' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://fonts.google.com/noto/specimen/Noto+Serif', children: 'Noto Serif' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://fonts.google.com/specimen/Roboto+Serif', children: 'Roboto Serif' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://fonts.google.com/specimen/Source+Sans+Pro', children: 'Source Sans Pro' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://fonts.google.com/specimen/Source+Serif+Pro', children: 'Source Serif Pro' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://fonts.google.com/specimen/Work+Sans', children: 'Work Sans' }) }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ken jij een Open Source lettertype dat voldoet aan de richtlijnen? ', (0, r.jsx)(n.a, { href: '/project/kernteam', children: 'Neem contact op met het kernteam' }), ' dan vullen we de lijst verder aan.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   var d = t(55400);
   const c = { title: 'Kies een goed lettertype | Typografie | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Goed lettertype', pagination_label: 'Kies een goed lettertype', description: 'Kies een lettertype ofwel \u2018Typeface\u2019 dat de leesbaarheid van paragrafen ten goede komt.', slug: '/richtlijnen/stijl/typografie/lettertype', keywords: ['lettertype'] },
    h = 'Kies een goed lettertype',
    g = { id: 'richtlijnen/stijl/typography/font/README', title: 'Kies een goed lettertype | Typografie | Richtlijnen', description: 'Kies een lettertype ofwel \u2018Typeface\u2019 dat de leesbaarheid van paragrafen ten goede komt.', source: '@site/docs/richtlijnen/stijl/typography/4-font/README.mdx', sourceDirName: 'richtlijnen/stijl/typography/4-font', slug: '/richtlijnen/stijl/typografie/lettertype', permalink: '/en/richtlijnen/stijl/typografie/lettertype', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/4-font/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Kies een goed lettertype | Typografie | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Goed lettertype', pagination_label: 'Kies een goed lettertype', description: 'Kies een lettertype ofwel \u2018Typeface\u2019 dat de leesbaarheid van paragrafen ten goede komt.', slug: '/richtlijnen/stijl/typografie/lettertype', keywords: ['lettertype'] }, sidebar: 'richtlijnen', previous: { title: 'Zorg voor een comfortabele regellengte', permalink: '/en/richtlijnen/stijl/typografie/regellengte' }, next: { title: 'Gebruik betekenisvolle opmaak voor tekst', permalink: '/en/richtlijnen/stijl/typografie/opmaak' } },
    j = {},
    p = [];
   function m(e) {
    const n = { h1: 'h1', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'kies-een-goed-lettertype', children: 'Kies een goed lettertype' }), '\n', (0, r.jsx)(l, {}), '\n', (0, r.jsx)(s, {}), '\n', (0, r.jsx)(d.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => s });
   var r = t(75271);
   const o = {},
    i = r.createContext(o);
   function s(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
