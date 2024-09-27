(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [40284],
 {
  48211: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => Q, component: () => re, contentTitle: () => Y, default: () => se, description: () => te, frontMatter: () => K, issueNumber: () => ne, metadata: () => q, title: () => ee, toc: () => J });
   var r = n(52676),
    i = n(24785),
    s = n(80719),
    o = n(90786),
    c = n(46506),
    a = n(25953),
    l = n(4814),
    u = (n(75271), n(86387));
   const d = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    h = (new Map(d.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    m = [...d.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: t } = e;
      return !h.find((e) => e.sc === t);
     }),
    g = new Map(m.map((e) => [e.sc, e])),
    p = (e) => {
     let { sc: t, checked: n, description: i, headingLevel: s = 3 } = e;
     const o = g.get(t),
      d = o ? `${t} ${o.nl?.title}` : t;
     return (0, r.jsxs)('li', { className: (0, l.Z)(u.Z['task-list-item']), children: [(0, r.jsxs)('div', { className: (0, l.Z)(u.Z['task-list-item__marker'], n && u.Z['task-list-item__marker--checked']), children: [(0, r.jsx)('span', { className: u.Z['task-list-item__marker-label'], children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, r.jsx)(a.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, r.jsxs)('div', { children: [(0, r.jsx)(c.X6, { appearance: 'utrecht-heading-3', level: s, children: (0, r.jsx)(c.rU, { href: `/wcag/${t}`, children: d }) }), i] })] });
    },
    j = (e) => {
     let { headingLevel: t, items: n } = e;
     return (0, r.jsx)('ul', { className: u.Z['task-list'], children: n.map((e, n) => (0, r.jsx)(p, { headingLevel: t, ...e }, n)) });
    };
   function w(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Als het label van een button uit een afbeelding bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de button een naam heeft die duidelijk maakt waar de button voor dient.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   function f(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
   function y(e) {
    const t = { a: 'a', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(t.p, { children: ['Als het label van de button niet uit tekst bestaat maar uit bijvoorbeeld een icoon (zoals bij een zoekknop met een vergrootglas), dan is het contrast tussen het icoon en de achtergrond minimaal 3:1. Dit is te controleren met de ', (0, r.jsx)(t.a, { href: 'https://nldesignsystem.nl/contrast/', children: 'Contrast checker' }), '.'] });
   }
   function A(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
   function b(e) {
    const t = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(t.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om afstand tussen letters, woorden, regels en alinea's." });
   }
   function k(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b(e);
   }
   function v(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Het contrast van de buttontekst met de achtergrondkleur is hoog genoeg. Dit is te controleren met de ', (0, r.jsx)(t.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n'] })] });
   }
   function x(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function C(e) {
    const t = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Als je de tekst vergroot tot 200% (via browserzoom en via de browserinstellingen voor tekstgrootte) blijft de tekst in zijn geheel zichtbaar.' });
   }
   function _(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(C, { ...e }) }) : C(e);
   }
   function T(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Het label van de button bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij om een logo gaat, zoals het DigiD-logo.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: 'https://www.nldesignsystem.nl/richtlijnen/formulieren/buttons/afbeelding-als-button', children: 'Afbeeldingen als buttons' }) }), '\n'] })] });
   }
   function G(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(T, { ...e }) }) : T(e);
   }
   function W(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Je kunt de button focussen met de tabtoets en activeren met de spacebar en de entertoets.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function R(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(W, { ...e }) }) : W(e);
   }
   function N(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Er is een goed zichtbare focusindicator die ook rekening houdt met het contrast met de verschillende achtergrondkleuren waarop de button gebruikt kan worden.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbord focus goed zichtbaar' }) }), '\n'] })] });
   }
   function z(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(N, { ...e }) }) : N(e);
   }
   function L(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst/', children: 'Duidelijke buttontekst die beschrijft wat de button doet' }) }), '\n'] })] });
   }
   function D(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(L, { ...e }) }) : L(e);
   }
   function S(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Wanneer een button de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbord focus goed zichtbaar' }) }), '\n'] })] });
   }
   function F(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(S, { ...e }) }) : S(e);
   }
   function P(e) {
    const t = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Dit criterium maakt het moeilijker om een button onbedoeld te activeren met een muis, toetsenbord of touchscreen.' });
   }
   function M(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(P, { ...e }) }) : P(e);
   }
   function B(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function O(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(B, { ...e }) }) : B(e);
   }
   function Z(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De button is groot genoeg om gemakkelijk aan te klikken (44 bij 44 pixels). Kleinere buttons staan niet te dicht op een andere button.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n'] })] });
   }
   function V(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(Z, { ...e }) }) : Z(e);
   }
   function E(e) {
    const t = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Als een buttontekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(t.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(t.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites.' })] });
   }
   function I(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(E, { ...e }) }) : E(e);
   }
   function U(e) {
    const t = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Buttons met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' });
   }
   function H(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(U, { ...e }) }) : U(e);
   }
   function $(e) {
    const t = { a: 'a', code: 'code', em: 'em', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['De button heeft een rol van ', (0, r.jsx)(t.code, { children: 'button' }), ' en een toegankelijke naam die duidelijk maakt waar de button voor dient. Ook is de toestand (', (0, r.jsx)(t.em, { children: 'state' }), ') duidelijk.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   function X(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)($, { ...e }) }) : $(e);
   }
   const K = { title: 'Button', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Button', pagination_label: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', slug: '/button', keywords: ['actie', 'action', 'action button', 'activate', 'aria-expanded', 'aria-haspopup', 'aria-pressed', 'bezig', 'busy', 'button', 'buttons', 'call to action', 'click', 'cta', 'disabled', 'icon button', 'indrukken', 'klikken', 'knop', 'knoppen', 'press', 'pressed', 'send', 'submit', 'toggle', 'toggle button', 'uitgeschakeld', 'versturen', 'verzenden'] },
    Y = void 0,
    q = { id: 'componenten/button/index', title: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', source: '@site/docs/componenten/button/index.mdx', sourceDirName: 'componenten/button', slug: '/button', permalink: '/button', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/button/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Button', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Button', pagination_label: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', slug: '/button', keywords: ['actie', 'action', 'action button', 'activate', 'aria-expanded', 'aria-haspopup', 'aria-pressed', 'bezig', 'busy', 'button', 'buttons', 'call to action', 'click', 'cta', 'disabled', 'icon button', 'indrukken', 'klikken', 'knop', 'knoppen', 'press', 'pressed', 'send', 'submit', 'toggle', 'toggle button', 'uitgeschakeld', 'versturen', 'verzenden'] }, sidebar: 'componenten', previous: { title: 'Breadcrumb navigation', permalink: '/breadcrumb-navigation' }, next: { title: 'Calendar', permalink: '/Calendar' } },
    Q = {},
    J = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Levende Backlog', id: 'levende-backlog', level: 2 },
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'WCAG 2 Succescriterium', id: 'wcag-2-succescriterium', level: 3 },
    ],
    ee = 'Button',
    te = 'Biedt de mogelijkheid om een actie uit te voeren.',
    ne = 38,
    re = s.find((e) => e.number === ne);
   function ie(e) {
    const t = { h2: 'h2', h3: 'h3', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, r.jsx)(o.Rv, { component: re, headingLevel: 1, description: te }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, r.jsx)(o.cN, { component: re, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'implementaties', children: 'Implementaties' }),
      '\n',
      (0, r.jsx)(o.W, { component: re, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'levende-backlog', children: 'Levende Backlog' }),
      '\n',
      (0, r.jsx)(o.Gn, { component: re, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }),
      '\n',
      (0, r.jsx)(t.h3, { id: 'wcag-2-succescriterium', children: 'WCAG 2 Succescriterium' }),
      '\n',
      (0, r.jsx)(j, {
       headingLevel: 4,
       items: [
        { sc: '1.1.1', checked: !0, description: (0, r.jsx)(f, {}) },
        { sc: '1.4.3', checked: !0, description: (0, r.jsx)(x, {}) },
        { sc: '1.4.4', checked: !0, description: (0, r.jsx)(_, {}) },
        { sc: '1.4.5', checked: !0, description: (0, r.jsx)(G, {}) },
        { sc: '1.4.11', checked: !0, description: (0, r.jsx)(A, {}) },
        { sc: '1.4.12', checked: !0, description: (0, r.jsx)(k, {}) },
        { sc: '2.1.1', checked: !0, description: (0, r.jsx)(R, {}) },
        { sc: '2.4.6', checked: !0, description: (0, r.jsx)(D, {}) },
        { sc: '2.4.7', checked: !0, description: (0, r.jsx)(F, {}) },
        { sc: '2.4.13', checked: !0, description: (0, r.jsx)(z, {}) },
        { sc: '2.5.2', checked: !0, description: (0, r.jsx)(M, {}) },
        { sc: '2.5.3', checked: !0, description: (0, r.jsx)(O, {}) },
        { sc: '2.5.5', checked: !0, description: (0, r.jsx)(V, {}) },
        { sc: '3.1.2', checked: !0, description: (0, r.jsx)(I, {}) },
        { sc: '3.2.4', checked: !0, description: (0, r.jsx)(H, {}) },
        { sc: '4.1.2', checked: !0, description: (0, r.jsx)(X, {}) },
       ],
      }),
     ],
    });
   }
   function se(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(ie, { ...e }) }) : ie(e);
   }
  },
  98507: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [99612, 99612], './utrecht-backdrop.entry.js': [191, 191], './utrecht-breadcrumb-nav.entry.js': [95643, 95643], './utrecht-checkbox.entry.js': [41865, 41865], './utrecht-column-layout.entry.js': [11868, 11868], './utrecht-contact-card-template.entry.js': [83069, 83069], './utrecht-custom-checkbox.entry.js': [64916, 64916], './utrecht-data-list-actions.entry.js': [27897, 27897], './utrecht-data-list-item.entry.js': [63619, 63619], './utrecht-data-list-key.entry.js': [5503, 5503], './utrecht-data-list-value.entry.js': [5183, 5183], './utrecht-data-list.entry.js': [17399, 17399], './utrecht-digid-button.entry.js': [36383, 36383], './utrecht-digid-logo.entry.js': [76975, 76975], './utrecht-eherkenning-logo.entry.js': [6453, 6453], './utrecht-eidas-logo.entry.js': [48911, 48911], './utrecht-form-field-error-message.entry.js': [59077, 59077], './utrecht-form-toggle.entry.js': [77346, 77346], './utrecht-html-content.entry.js': [57805, 77160], './utrecht-icon-afspraak-maken.entry.js': [82758, 82758], './utrecht-icon-afval-container.entry.js': [99748, 99748], './utrecht-icon-afval-containerpas.entry.js': [87122, 87122], './utrecht-icon-afval-kalender.entry.js': [44408, 44408], './utrecht-icon-afval-pmd.entry.js': [30590, 30590], './utrecht-icon-afval-scheiden.entry.js': [52052, 52052], './utrecht-icon-afval.entry.js': [51073, 51073], './utrecht-icon-afvalkalender.entry.js': [61043, 61043], './utrecht-icon-alleen.entry.js': [9137, 9137], './utrecht-icon-arrow.entry.js': [9698, 9698], './utrecht-icon-auto.entry.js': [37949, 37949], './utrecht-icon-begroting.entry.js': [22552, 22552], './utrecht-icon-bestemmingsplan.entry.js': [54782, 54782], './utrecht-icon-betaaldatum.entry.js': [40398, 40398], './utrecht-icon-bewijsstukken.entry.js': [4859, 4859], './utrecht-icon-bijstand.entry.js': [1813, 1813], './utrecht-icon-blad.entry.js': [32273, 32273], './utrecht-icon-bouwproject.entry.js': [68732, 68732], './utrecht-icon-brandgevaar.entry.js': [85576, 85576], './utrecht-icon-brief-betalen.entry.js': [6416, 6416], './utrecht-icon-checkmark.entry.js': [80180, 80180], './utrecht-icon-chevron-down.entry.js': [37822, 37822], './utrecht-icon-chevron-left.entry.js': [47567, 47567], './utrecht-icon-chevron-right.entry.js': [80431, 80431], './utrecht-icon-chevron-up.entry.js': [78767, 78767], './utrecht-icon-close.entry.js': [93658, 93658], './utrecht-icon-college-b-w.entry.js': [5132, 5132], './utrecht-icon-container-bio.entry.js': [8353, 8353], './utrecht-icon-container-glas.entry.js': [95483, 95483], './utrecht-icon-container-groenafval.entry.js': [39280, 39280], './utrecht-icon-container-met-zak.entry.js': [12825, 12825], './utrecht-icon-container-papier.entry.js': [43897, 43897], './utrecht-icon-container-pmd.entry.js': [12335, 12335], './utrecht-icon-container-restafval.entry.js': [74123, 74123], './utrecht-icon-container-textiel.entry.js': [54807, 54807], './utrecht-icon-container.entry.js': [98078, 98078], './utrecht-icon-cross.entry.js': [86788, 86788], './utrecht-icon-dakloos.entry.js': [15285, 15285], './utrecht-icon-dementie.entry.js': [87989, 87989], './utrecht-icon-documenten.entry.js': [38391, 38391], './utrecht-icon-duurzaam.entry.js': [87714, 87714], './utrecht-icon-eenzaamheid.entry.js': [85512, 85512], './utrecht-icon-eikenprocessie.entry.js': [7650, 7650], './utrecht-icon-elektrisch-rijden.entry.js': [75634, 75634], './utrecht-icon-energie-vergoeding.entry.js': [77197, 77197], './utrecht-icon-energietransitie.entry.js': [39032, 39032], './utrecht-icon-error.entry.js': [66684, 66684], './utrecht-icon-evenementen.entry.js': [16, 16], './utrecht-icon-facebook.entry.js': [96252, 96252], './utrecht-icon-fiets.entry.js': [86846, 86846], './utrecht-icon-filter.entry.js': [76417, 76417], './utrecht-icon-geboorte.entry.js': [77112, 77112], './utrecht-icon-gebruiker-centraal.entry.js': [14040, 14040], './utrecht-icon-gebruiker-ingelogd.entry.js': [69088, 69088], './utrecht-icon-gegevenswoordenboek.entry.js': [98552, 98552], './utrecht-icon-geluid.entry.js': [56042, 56042], './utrecht-icon-gemeente-locatie.entry.js': [51295, 51295], './utrecht-icon-gemeenteraad.entry.js': [73738, 73738], './utrecht-icon-gereedschap.entry.js': [11758, 11758], './utrecht-icon-gezicht.entry.js': [45251, 45251], './utrecht-icon-gezin.entry.js': [31054, 31559], './utrecht-icon-glas-afval.entry.js': [36827, 36827], './utrecht-icon-glijbaan.entry.js': [64246, 64246], './utrecht-icon-grafiek.entry.js': [8038, 8038], './utrecht-icon-grofvuil-ophalen.entry.js': [53455, 53455], './utrecht-icon-grofvuil.entry.js': [97402, 97402], './utrecht-icon-hamburger-menu.entry.js': [96403, 96403], './utrecht-icon-herdenking.entry.js': [21537, 21537], './utrecht-icon-hondenbelasting.entry.js': [2587, 2587], './utrecht-icon-horeca.entry.js': [42583, 42583], './utrecht-icon-horecavergunning.entry.js': [76720, 76720], './utrecht-icon-huis-en-omgeving.entry.js': [70389, 70389], './utrecht-icon-huis.entry.js': [74718, 74718], './utrecht-icon-huishoudelijk-geweld.entry.js': [71742, 71742], './utrecht-icon-hulp-huishouden.entry.js': [15743, 15743], './utrecht-icon-hulp-vervoer.entry.js': [64536, 64536], './utrecht-icon-hulp-zorg.entry.js': [20600, 20600], './utrecht-icon-hulpmiddelen-gezin.entry.js': [78043, 78043], './utrecht-icon-hulpverlening.entry.js': [33031, 33031], './utrecht-icon-idee.entry.js': [83921, 83921], './utrecht-icon-informatie.entry.js': [70196, 70196], './utrecht-icon-information.entry.js': [85103, 85103], './utrecht-icon-innovatie.entry.js': [57154, 57154], './utrecht-icon-inspraak-inwoners.entry.js': [47395, 47395], './utrecht-icon-instagram.entry.js': [20876, 20876], './utrecht-icon-kalender.entry.js': [66077, 66077], './utrecht-icon-kennis.entry.js': [80033, 80033], './utrecht-icon-kerstbomen.entry.js': [31714, 31714], './utrecht-icon-klachten.entry.js': [17400, 17400], './utrecht-icon-kroon.entry.js': [90589, 90589], './utrecht-icon-laadpaal.entry.js': [29065, 29065], './utrecht-icon-language.entry.js': [66689, 66689], './utrecht-icon-lantaarnpaal-oud.entry.js': [32607, 32607], './utrecht-icon-lantaarnpaal.entry.js': [10601, 10601], './utrecht-icon-leren.entry.js': [66234, 66234], './utrecht-icon-let-op.entry.js': [87315, 87315], './utrecht-icon-linkedin.entry.js': [94398, 94398], './utrecht-icon-list-check.entry.js': [40870, 40870], './utrecht-icon-list-number.entry.js': [28720, 28720], './utrecht-icon-list.entry.js': [65300, 65300], './utrecht-icon-loupe.entry.js': [97618, 97618], './utrecht-icon-markt.entry.js': [47171, 47171], './utrecht-icon-melding-boom.entry.js': [38023, 38023], './utrecht-icon-melding-klacht.entry.js': [60266, 60266], './utrecht-icon-melding-openbareruimte.entry.js': [41320, 41320], './utrecht-icon-melding-verlichting.entry.js': [80027, 80027], './utrecht-icon-melding.entry.js': [19928, 19928], './utrecht-icon-menselijk.entry.js': [26939, 26939], './utrecht-icon-menu-dot-open.entry.js': [407, 407], './utrecht-icon-menu-dot.entry.js': [69162, 69162], './utrecht-icon-meterkast.entry.js': [1176, 1176], './utrecht-icon-milieu-ontheffing.entry.js': [19679, 19679], './utrecht-icon-milieu-zone.entry.js': [52671, 52671], './utrecht-icon-minus-vertical.entry.js': [653, 653], './utrecht-icon-minus.entry.js': [81403, 81403], './utrecht-icon-mobiliteit.entry.js': [97788, 97788], './utrecht-icon-natuur.entry.js': [31377, 31377], './utrecht-icon-nieuw-huis.entry.js': [78740, 78740], './utrecht-icon-nieuwsbrief.entry.js': [22097, 22097], './utrecht-icon-nummerbord.entry.js': [56251, 56251], './utrecht-icon-om-het-huis.entry.js': [77372, 77372], './utrecht-icon-omgeving.entry.js': [27917, 27917], './utrecht-icon-omgevingsvisie.entry.js': [51285, 51285], './utrecht-icon-omgevingswet.entry.js': [18287, 18287], './utrecht-icon-onderhoud.entry.js': [42629, 42629], './utrecht-icon-ondernemen.entry.js': [84131, 84131], './utrecht-icon-openingstijden.entry.js': [50640, 50640], './utrecht-icon-over-de-stad.entry.js': [3350, 3350], './utrecht-icon-overlijden.entry.js': [29052, 29052], './utrecht-icon-panden.entry.js': [73874, 73874], './utrecht-icon-park.entry.js': [62396, 62396], './utrecht-icon-parkeerkaart.entry.js': [67e3, 67e3], './utrecht-icon-parkeervergunning.entry.js': [54866, 54866], './utrecht-icon-parken.entry.js': [51831, 51831], './utrecht-icon-parkeren-bedrijven.entry.js': [30200, 30200], './utrecht-icon-parkeren-betaalautomaat.entry.js': [8568, 8568], './utrecht-icon-parkeren-betalen.entry.js': [87733, 87733], './utrecht-icon-parkeren.entry.js': [20030, 20030], './utrecht-icon-participatie-campagne.entry.js': [34913, 34913], './utrecht-icon-participatie-like.entry.js': [38139, 38139], './utrecht-icon-participatie-pitch.entry.js': [11063, 11063], './utrecht-icon-paspoort.entry.js': [23249, 23249], './utrecht-icon-presentatie.entry.js': [21904, 21904], './utrecht-icon-prijskaartje.entry.js': [35137, 35137], './utrecht-icon-read-aloud.entry.js': [65225, 65225], './utrecht-icon-rijbewijs.entry.js': [77863, 77863], './utrecht-icon-rioolheffing.entry.js': [34030, 34030], './utrecht-icon-rolstoel.entry.js': [25514, 25514], './utrecht-icon-schild-gemeente-utrecht.entry.js': [80627, 80627], './utrecht-icon-search.entry.js': [48233, 48233], './utrecht-icon-shoppen.entry.js': [93607, 93607], './utrecht-icon-sinterklaas.entry.js': [69869, 69869], './utrecht-icon-slechtziende-hoordende.entry.js': [26489, 26489], './utrecht-icon-sport-en-cultuur.entry.js': [45330, 45330], './utrecht-icon-sport-voetbal.entry.js': [43350, 43350], './utrecht-icon-sport.entry.js': [18842, 18842], './utrecht-icon-stookverbod.entry.js': [87544, 87544], './utrecht-icon-strand.entry.js': [8824, 8824], './utrecht-icon-strooien.entry.js': [21764, 21764], './utrecht-icon-subsidie-gezin.entry.js': [12795, 12795], './utrecht-icon-subsidie.entry.js': [74362, 74362], './utrecht-icon-t-shirt.entry.js': [63424, 63424], './utrecht-icon-thuiswerken.entry.js': [45784, 45784], './utrecht-icon-toeslag.entry.js': [74545, 74545], './utrecht-icon-trein.entry.js': [88369, 88369], './utrecht-icon-trouwen.entry.js': [76990, 76990], './utrecht-icon-twitter.entry.js': [35149, 35149], './utrecht-icon-user.entry.js': [19878, 19878], './utrecht-icon-uw-wijk.entry.js': [45596, 45596], './utrecht-icon-vaccinatie.entry.js': [8305, 8305], './utrecht-icon-veilige-wijk.entry.js': [49973, 49973], './utrecht-icon-vergaderen.entry.js': [74755, 74755], './utrecht-icon-vergaderendigitaal.entry.js': [19918, 19918], './utrecht-icon-vergoeding.entry.js': [61950, 61950], './utrecht-icon-verhuizen.entry.js': [64874, 64874], './utrecht-icon-verkeerslicht.entry.js': [85865, 85865], './utrecht-icon-verkiezingen.entry.js': [82844, 82844], './utrecht-icon-verslaving.entry.js': [45363, 45363], './utrecht-icon-vervoersvoorziening.entry.js': [45210, 45210], './utrecht-icon-virus.entry.js': [79680, 79680], './utrecht-icon-vluchtelingen.entry.js': [87776, 87776], './utrecht-icon-voorzieningen-vervoer.entry.js': [80081, 80081], './utrecht-icon-vrijwilligerswerk.entry.js': [63802, 63802], './utrecht-icon-vuilnisbak.entry.js': [21374, 21374], './utrecht-icon-vuilniszak.entry.js': [29190, 29190], './utrecht-icon-vuurwerk.entry.js': [74652, 74652], './utrecht-icon-wandelstok.entry.js': [30982, 30982], './utrecht-icon-warm.entry.js': [97377, 97377], './utrecht-icon-warning.entry.js': [44075, 44075], './utrecht-icon-werken.entry.js': [59390, 59390], './utrecht-icon-werkzaamheden.entry.js': [51112, 51112], './utrecht-icon-whatsapp.entry.js': [26039, 26039], './utrecht-icon-wonen-kosten.entry.js': [18118, 18118], './utrecht-icon-woning-zoeken.entry.js': [29197, 29197], './utrecht-icon-x.entry.js': [19362, 19362], './utrecht-icon-youtube.entry.js': [20187, 20187], './utrecht-icon-zelfstandig-wonen.entry.js': [61393, 61393], './utrecht-icon-zoom-minus.entry.js': [50545, 50545], './utrecht-icon-zoom-plus.entry.js': [68278, 68278], './utrecht-icon-zoomin.entry.js': [25870, 25870], './utrecht-icon-zoomout.entry.js': [48005, 48005], './utrecht-icon-zorg-huis.entry.js': [7463, 7463], './utrecht-icon-zweefpaal.entry.js': [66426, 66426], './utrecht-icon-zwemmen.entry.js': [47566, 47566], './utrecht-logo-button.entry.js': [54250, 54250], './utrecht-map-marker.entry.js': [99319, 99319], './utrecht-multiline-data.entry.js': [13746, 13746], './utrecht-page-footer.entry.js': [2950, 2950], './utrecht-pagination.entry.js': [50370, 50370], './utrecht-progress-list-item.entry.js': [34351, 34351], './utrecht-progress-list.entry.js': [25989, 25989], './utrecht-progress-sublist-item.entry.js': [48316, 48316], './utrecht-sidenav.entry.js': [78510, 78510], './utrecht-surface.entry.js': [18066, 89905], './utrecht-table-body.entry.js': [92786, 92786], './utrecht-table-caption.entry.js': [66250, 24469], './utrecht-table-cell.entry.js': [75028, 75028], './utrecht-table-footer.entry.js': [78800, 78800], './utrecht-table-header-cell.entry.js': [99930, 99930], './utrecht-table-header.entry.js': [10472, 10472], './utrecht-table-row.entry.js': [45872, 45872], './utrecht-table.entry.js': [42176, 42176], './utrecht-textarea.entry.js': [41192, 41192], './utrecht-textbox.entry.js': [88451, 88451] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 98507), (e.exports = i);
  },
  68963: (e, t, n) => {
   'use strict';
   n.d(t, { Zb: () => l, aY: () => a, um: () => u, wu: () => c });
   var r = n(46506),
    i = n(4814);
   n(75271);
   const s = { cardgroup: 'cardgroup_0VVt', 'cardgroup--small': 'cardgroup--small_BDzz', 'cardgroup--medium': 'cardgroup--medium_xS6r', 'cardgroup--large': 'cardgroup--large_Tjo8', cardgroup__card: 'cardgroup__card_emnt', 'cardgroup__card--small': 'cardgroup__card--small_bxfC', 'cardgroup__card--large': 'cardgroup__card--large_PGe3', cardgroup__link: 'cardgroup__link_YISR', card__illustration: 'card__illustration_MVXv', 'card__illustration--background': 'card__illustration--background_cTcZ', card__content: 'card__content_LYKG' };
   var o = n(52676);
   const c = (e) => {
     let { background: t, children: n, className: r, ...c } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)(s.card__illustration, t && s['card__illustration--background'], r), ...c, children: n });
    },
    a = (e) => (0, o.jsx)('div', { className: (0, i.Z)(s.card__content), ...e }),
    l = (e) => {
     let { href: t, appearance: n, className: c, component: a = 'div', children: l } = e;
     const u = (e) => ('article' === a ? (0, o.jsx)('article', { ...e }) : 'section' === a ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(u, { className: (0, i.Z)(s.cardgroup__card, s[`cardgroup__card--${n}`], c), children: l });
     return t ? (0, o.jsx)(r.rU, { href: t, boxContent: !0, className: s.cardgroup__link, children: d }) : d;
    },
    u = (e) => {
     let { appearance: t = 'medium', children: n, className: r } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)(s.cardgroup, s[`cardgroup--${t}`], r), children: n });
    };
  },
  90786: (e, t, n) => {
   'use strict';
   n.d(t, { Gn: () => T, cN: () => C, W: () => _, Rv: () => G });
   var r = n(56150),
    i = n(4814),
    s = (n(75271), n(39854)),
    o = n(7522),
    c = n(62559),
    a = n(79734),
    l = n(32636),
    u = n(52676);
   const d = { figma: (0, u.jsx)(s.Z, {}), github: (0, u.jsx)(o.Z, {}), npm: (0, u.jsx)(c.Z, {}), storybook: (0, u.jsx)(a.Z, {}) },
    h = (e) => {
     let { brand: t } = e;
     return (0, u.jsx)(r.JO, { children: d[t] || (0, u.jsx)(l.Z, {}) });
    };
   var m = n(68963);
   const g = { 'definition-of-done': 'definition-of-done_hA8T', 'definition-of-done--help-wanted': 'definition-of-done--help-wanted_eyW6', 'definition-of-done--community': 'definition-of-done--community_s9uY', 'definition-of-done--candidate': 'definition-of-done--candidate_kcli', 'definition-of-done--hall-of-fame': 'definition-of-done--hall-of-fame_uZjI', 'implementation-card-group': 'implementation-card-group_aUZX', 'implementation-card': 'implementation-card_nkoa' };
   var p = n(58322);
   const j = (e) => {
    let { checked: t, unchecked: r } = e;
    return (0, u.jsx)(p.Z, {
     fallback: (0, u.jsx)(u.Fragment, {}),
     children: () => {
      const e = n(47700).YE;
      return (0, u.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--component-progress-background-color--checked, currentColor)', key: 'Done', value: t, stroke: '2' },
        { fill: 'var(--component-progress-background-color--unchecked, #ddd)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var w = n(86964),
    f = n(72657),
    y = n(46506),
    A = n(25953),
    b = n(86387);
   const k = (e) => {
     let { children: t } = e;
     return (0, u.jsx)('ul', { className: b.Z['task-list'], children: t });
    },
    v = (e) => {
     let { checked: t, children: n, title: r, description: s, headingLevel: o = 3 } = e;
     return (0, u.jsxs)('li', { className: (0, i.Z)(b.Z['task-list-item']), children: [(0, u.jsxs)('div', { className: (0, i.Z)(b.Z['task-list-item__marker'], t && b.Z['task-list-item__marker--checked']), children: [(0, u.jsx)('span', { className: b.Z['task-list-item__marker-label'], children: t ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), t && (0, u.jsx)(A.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, u.jsxs)('div', { children: [(0, u.jsx)(y.X6, { appearance: 'utrecht-heading-3', level: o, children: r }), s, n] })] });
    };
   var x = n(14669);
   const C = (e) => {
     let { component: t, headingLevel: n } = e;
     const s = t && t.projects.filter((e) => x.e9.includes(e.id)),
      o = s && x.e9.map((e) => s.find((t) => t.id === e)).filter(Boolean);
     return (
      t &&
      (0, u.jsx)(r.a2, {
       appearance: '',
       sections: o.map((e) => ({
        className: (0, i.Z)(g['definition-of-done'], e && g[`definition-of-done--${(0, x.mA)(e.title)}`]),
        headingLevel: n,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, u.jsxs)(u.Fragment, {
          children: [
           (0, u.jsx)(k, {
            children: e.tasks.map((e) => {
             let { checked: t, name: n, id: r } = e;
             return (0, u.jsx)(v, { checked: t, title: n, description: (0, x.Q6)(r) }, r);
            }),
           }),
           (0, u.jsx)(r.nv, { children: (0, u.jsxs)(r.rU, { href: `${e.url}?filterQuery=${t.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    _ = (e) => {
     let { component: t, headingLevel: n } = e;
     const s = t && t.projects.filter((e) => !x.e9.includes(e.id));
     return t && s.length
      ? (0, u.jsx)(m.um, {
         appearance: 'large',
         className: (0, i.Z)(g['implementation-card-group']),
         children: s
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const t = e.tasks.find((e) => {
             let { name: t } = e;
             return 'Naam' === t;
            }),
            s = t?.value,
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${s} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${s} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${s} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            c = e.tasks.filter((e) => {
             let { name: t, value: n } = e;
             return o.has(t) && URL.canParse(n) && 'https:' === new URL(n).protocol;
            });
           return (0, u.jsx)(
            m.Zb,
            {
             className: (0, i.Z)(g['implementation-card']),
             children: (0, u.jsxs)(m.aY, {
              children: [
               (0, u.jsx)(r.X6, { level: n, children: e.title }),
               (0, u.jsxs)(r.nv, { children: [(0, u.jsx)(j, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, u.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               c.length > 0 &&
                (0, u.jsxs)(u.Fragment, {
                 children: [
                  (0, u.jsx)(r.X6, { level: n + 1, children: 'Component gebruiken?' }),
                  (0, u.jsx)(r.Mc, {
                   children: c.map((e) => {
                    const t = o.get(e.name);
                    return t ? (0, u.jsxs)(r.k7, { href: e.value, children: [(0, u.jsx)(h, { brand: t.brand }), ' ', t.desciption] }, e.id) : (0, u.jsx)(u.Fragment, {});
                   }),
                  }),
                 ],
                }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, u.jsx)(r.nv, { children: 'Er zijn nog geen implementaties' });
    },
    T = (e) => {
     let { component: t } = e;
     return t && (0, u.jsxs)(r.nv, { children: ['De ', t.title, ' component staat bij NL Design System in de', ' ', (0, u.jsx)(r.rU, { href: t.backlog, children: 'levende backlog' }), ', heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!'] });
    },
    G = (e) => {
     let { component: t, headingLevel: n, description: i } = e;
     const s = t && x.$3[t.relayStep];
     return t && (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(f.V, { level: n, suffix: s && (0, u.jsx)(w.y, { state: s }), children: t.title }), (0, u.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  86964: (e, t, n) => {
   'use strict';
   n.d(t, { y: () => a });
   var r = n(46506),
    i = n(4814);
   n(75271);
   const s = { 'estafette-badge': 'estafette-badge_amWR', 'estafette-badge--todo': 'estafette-badge--todo_EYw0', 'estafette-badge--help-wanted': 'estafette-badge--help-wanted_N7qd', 'estafette-badge--community': 'estafette-badge--community_FJTQ', 'estafette-badge--candidate': 'estafette-badge--candidate_Q2O5', 'estafette-badge--hall-of-fame': 'estafette-badge--hall-of-fame_SqQ1' };
   var o = n(14669),
    c = n(52676);
   const a = (e) => {
    let { state: t } = e;
    const n = (0, o.mA)(t);
    return (0, c.jsx)(r.Ou, { className: (0, i.Z)(s['estafette-badge'], n && s[`estafette-badge--${n}`]), children: t });
   };
  },
  72657: (e, t, n) => {
   'use strict';
   n.d(t, { V: () => o });
   var r = n(4814);
   n(75271);
   const i = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var s = n(52676);
   const o = (e) => {
    let { children: t, className: n, level: o = 1, suffix: c, ...a } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)(i['nlds-inline-heading-group'], `utrecht-heading-${o}`, n), ...a, children: [(0, s.jsx)('h1', { className: (0, r.Z)(i['nlds-inline-heading-group__heading']), children: t }), c && (0, s.jsxs)('p', { className: (0, r.Z)(i['nlds-inline-heading-group__suffix']), children: [c ? ' ' : '', c] })] });
   };
  },
  14669: (e, t, n) => {
   'use strict';
   n.d(t, { $3: () => r, BA: () => c, Q6: () => s, e9: () => o, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
  86387: (e, t, n) => {
   'use strict';
   n.d(t, { Z: () => r });
   const r = { 'task-list': 'task-list_hh8j', 'task-list-item': 'task-list-item_oypx', 'task-list-item__marker': 'task-list-item__marker_Eefn', 'task-list-item__marker--checked': 'task-list-item__marker--checked_y8Vc', 'task-list-item__marker-label': 'task-list-item__marker-label_XAyi' };
  },
 },
]);
