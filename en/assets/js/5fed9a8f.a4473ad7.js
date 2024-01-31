"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9244],
 {
  3324: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var i = r(11527),
    l = r(47214);
   function t(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, i.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  12203: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => x, contentTitle: () => b, default: () => y, frontMatter: () => g, metadata: () => v, toc: () => k });
   var i = r(11527),
    l = r(47214),
    t = r(3324),
    o = r(73460),
    s = r(30036);
   function a(e) {
    const n = { div: "div", fieldset: "fieldset", input: "input", label: "label", legend: "legend", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Uitvragen geboortedatum met een tekstveld.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "date0", children: "Geboortedatum" }), (0, i.jsx)(n.p, { id: "description-date0", children: "Bijvoorbeeld 31 december 1970." }), (0, i.jsx)(n.input, { id: "date0", type: "text", autocomplete: "bday", "aria-describedby": "description-date0" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Uitvragen geboortedatum met een datumveld.", description: "De meeste browsers voegen zelf een datumkiezer toe.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "date1", children: "Geboortedatum" }), (0, i.jsx)(n.p, { id: "description-date1", children: "Bijvoorbeeld 31/12/1970." }), (0, i.jsx)(n.input, { id: "date1", type: "date", "aria-describedby": "description-date1", autocomplete: "bday" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Uitvragen geboortedatum met een inputmode=numeric.", children: (0, i.jsx)(o.X, { language: "html", designTokens: { "--utrecht-textbox-max-inline-size": "20ch" }, children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.fieldset, { children: [(0, i.jsx)(n.legend, { children: "Geboortedatum" }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.label, { for: "day2", children: "Dag" }), (0, i.jsx)(n.div, { id: "description-day2", children: "Bijvoorbeeld 31." }), (0, i.jsx)(n.input, { id: "day2", type: "text", inputmode: "numeric", "aria-describedby": "description-day2", autocomplete: "bday-day", maxlength: "2" })] }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.label, { for: "month2", children: "Maand" }), (0, i.jsx)(n.div, { id: "description-month2", children: "Bijvoorbeeld 12 voor december." }), (0, i.jsx)(n.input, { id: "month2", type: "text", inputmode: "numeric", "aria-describedby": "description-month2", autocomplete: "bday-month", maxlength: "2" })] }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.label, { for: "year2", children: "Jaar" }), (0, i.jsx)(n.div, { id: "description-year2", children: "Bijvoorbeeld 1970." }), (0, i.jsx)(n.input, { id: "c2", type: "text", inputmode: "numeric", "aria-describedby": "description-year2", autocomplete: "bday-year", maxlength: "4" })] })] }) }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Uitvragen geboortedatum met een nummerveld (type=number).", children: (0, i.jsx)(o.X, { language: "html", designTokens: { "--utrecht-textbox-max-inline-size": "20ch" }, children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.fieldset, { children: [(0, i.jsx)(n.legend, { children: "Geboortedatum" }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.label, { for: "day3", children: "Dag" }), (0, i.jsx)(n.div, { id: "description-day3", children: "Bijvoorbeeld 31." }), (0, i.jsx)(n.input, { id: "day3", type: "number", "aria-describedby": "description-day3", autocomplete: "bday-day", min: "1", max: "31" })] }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.label, { for: "month3", children: "Maand" }), (0, i.jsx)(n.div, { id: "description-month3", children: "Bijvoorbeeld 12 voor december." }), (0, i.jsx)(n.input, { id: "month3", type: "number", "aria-describedby": "description-month3", autocomplete: "bday-month", min: "1", max: "12" })] }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.label, { for: "year3", children: "Jaar" }), (0, i.jsx)(n.div, { id: "description-year3", children: "Bijvoorbeeld 1970." }), (0, i.jsx)(n.input, { id: "year3", type: "number", "aria-describedby": "description-year3", autocomplete: "bday-year" })] })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: "a", blockquote: "blockquote", code: "code", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", pre: "pre", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "zorg-dat-iedereen-een-formulierelement-kan-bedienen-of-geef-een-alternatief", children: "Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief" }), "\n", (0, i.jsx)(n.p, { children: "Sommige formulierelementen werken (nog) niet goed of zijn complex om te bedienen met toetsenbord, screenreader of stembesturing." }), "\n", (0, i.jsxs)(n.p, { children: ["Op ", (0, i.jsx)(n.a, { href: "https://html5accessibility.com/", children: "HTML5 Accessibility" }), " houdt Steve Faulkner de ondersteuning bij van HTML-elementen, in de verschillende browsers en voor de diverse hulpmiddelen."] }), "\n", (0, i.jsx)(n.p, { children: "De ontwikkeling van browsers gaat snel en het gebruik van HTML geeft niet altijd garantie voor toegankelijkheid. Test daarom altijd een formulier met toetsenbord, screenreader of stembesturing." }), "\n", (0, i.jsx)(n.p, { children: "Door te zorgen dat iedereen een formulierelement kan bedienen en begrijpen voldoe je aan de volgende WCAG-succescriteria:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#info-en-relaties", children: "1.3.2 Betekenisvolle volgorde" }), " (niveau A)"] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html", children: "2.1.1 Toetsenbord" }), " (niveau A)"] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#koppen-en-labels", children: "2.4.6 Koppen en labels" }), " (niveau AA)"] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html", children: "3.3.2 Labels of Instructies" }), " (niveau A)"] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html", children: "4.1.2 Naam, rol, waarde" }), " (niveau A)"] }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "multiselect", children: "Multiselect" }), "\n", (0, i.jsxs)(n.p, { children: ["Het multiselect formulierelement ", (0, i.jsx)(n.code, { children: "<select multiple>" }), " is ingewikkeld te bedienen met toetsenbord. In Safari werkt multiselect (nog) niet met een toetsenbord en daarom ook niet met de screenreader VoiceOver."] }), "\n", (0, i.jsx)(n.p, { children: "Gebruik in plaats van multiselect bijvoorbeeld checkboxes om gebruikers meerdere keuzes te laten maken." }), "\n", (0, i.jsx)(n.h3, { id: "datum--en-tijdkiezers", children: "Datum- en tijdkiezers" }), "\n", (0, i.jsx)(n.p, { children: "Datum- en tijdkiezers zijn lastig goed toegankelijk te maken, zodat ze voor iedereen makkelijk te begrijpen en te bedienen zijn. Maar ze kunnen wel handig zijn voor ziende muisgebruikers." }), "\n", (0, i.jsx)(n.p, { children: "De beste optie is om naast de kiezer ook een alternatief toe te voegen, een formulierveld waar gebruikers de datum of tijd kunnen invullen." }), "\n", (0, i.jsxs)(n.p, { children: ["Veel browsers voegen zelf al een kiezer toe voor de ", (0, i.jsx)(n.code, { children: '<input type="date">' }), " en ", (0, i.jsx)(n.code, { children: '<input type="time">' }), "-elementen, de gebruiker kan dan beide opties gebruiken. Het is alleen jammer dat deze kiezers (nog) niet te stijlen zijn met CSS. Daarnaast zien de kiezers er per browser verschillend uit en werken ze anders."] }), "\n", (0, i.jsx)(n.h4, { id: "input-typenumber-versus-inputmodenumeric", children: 'Input type="number" versus inputmode="numeric"' }), "\n", (0, i.jsxs)(n.p, { children: ["Een andere optie is het laten invoeren van alleen nummers met ", (0, i.jsx)(n.code, { children: '<input type="number">' }), "\nBijvoorbeeld:"] }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<label for="dag1">Geboortedag</label> <input id="dag1" type="number" autocomplete="bday-day" min="1" max="31" />\n' }) }), "\n", (0, i.jsxs)(n.p, { children: ["GOV.UK heeft hier onderzoek naar gedaan en vindt ", (0, i.jsx)(n.a, { href: "https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/", children: "type=number qua gebruikersvriendelijkheid te foutgevoelig" }), "."] }), "\n", (0, i.jsxs)(n.blockquote, { children: ["\n", (0, i.jsxs)(n.p, { children: ["Met ", (0, i.jsx)(n.code, { children: '<input type="number">' }), " bestaat het risico dat gebruikers per ongeluk een getal verhogen wanneer ze iets anders proberen te doen, bijvoorbeeld omhoog of omlaag scrollen op de pagina. En als de gebruiker iets probeert in te voeren dat geen getal is, is er geen expliciete feedback over wat verkeerd gaat."] }), "\n"] }), "\n", (0, i.jsxs)(n.p, { children: ["Zij beveelt het gebruik van ", (0, i.jsx)(n.code, { children: 'inputmode="numeric"' }), " aan, omdat dit het numerieke toetsenbord op mobile apparaten activeert."] }), "\n", (0, i.jsx)(n.p, { children: "Bijvoorbeeld:" }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<label for="dag2">Geboortedag</label> <input id="dag2" type="text" inputmode="numeric" autocomplete="bday-day" />\n' }) }), "\n", (0, i.jsx)(n.h4, { id: "selects-voor-dag-maand-en-jaar", children: "Selects voor dag, maand en jaar" }), "\n", (0, i.jsx)(n.p, { children: "Een optie is het gebruik van 3 select-opties met de waardes van bijvoorbeeld dag, maand en jaar. Het nadeel hiervan is dat de select voor een geboortejaar een hele lange lijst kan worden. Het kan confronterend zijn als, scrollend door een lange lijst aan jaartallen, beseft dat je wel erg oud aan het worden bent..." }), "\n", (0, i.jsx)(n.h4, { id: "tekstveld", children: "Tekstveld" }), "\n", (0, i.jsx)(n.p, { children: "Als de data niet verder automatisch verwerkt gaat worden is een tekstveld een makkelijke optie. Dan is de gebruiker vrij een eigen format te kiezen. Geef dan wel een hint in de description hoe dit het beste te doen." }), "\n", (0, i.jsx)(n.h4, { id: "de-keuze-hangt-af-van-de-context", children: "De keuze hangt af van de context" }), "\n", (0, i.jsx)(n.p, { children: "Welke optie je kiest is afhankelijk van de context. Wat vraag je uit? En wat gaat er met de data gebeuren? Bijvoorbeeld:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Kent men de datum uit het hoofd (bijvoorbeeld geboortedatum)? Gebruik dan drie losse invulvelden." }), "\n", (0, i.jsx)(n.li, { children: "Kan men een datum prikken (bijvoorbeeld een afspraak)? Dan is een datumkiezer in combinatie met zelf invullen een goed plan. \"Ik weet de datum niet maar woensdagen komen mij het best uit\". Hou wel rekening met 'niet beschikbare' dagen, gebruik in dat geval als alternatief bijvoorbeeld een select-optie met beperkte keuzes." }), "\n", (0, i.jsx)(n.li, { children: "Kan de gebruiker alleen kiezen uit een paar data (bijvoorbeeld vanaf vandaag tot een week vooruit), dan zijn radio buttons geschikt." }), "\n"] }), "\n", (0, i.jsxs)(n.p, { children: ["Lees hierover meer op ", (0, i.jsx)(n.a, { href: "https://design-system.service.gov.uk/patterns/dates/", children: "Ask users for Dates" }), " van GOV.UK."] }), "\n", (0, i.jsx)(n.p, { children: "De regel is altijd: Je kunt een ontoegankelijke component aanbieden, mits je ook een goed toegankelijk alternatief aanbiedt." })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h();
   }
   function p(e) {
    const n = { a: "a", code: "code", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "kies-voor-het-meest-gebruiksvriendelijke-formulierelement", children: "Kies voor het meest gebruiksvriendelijke formulierelement" }), "\n", (0, i.jsx)(n.p, { children: "Deze richtlijn is tevens een opdracht; doe gebruikersonderzoek voor nieuwe formulieren of componenten. Gebruiksvriendelijkheid is afhankelijk van het specifieke doel en de doelgroep van een formulier." }), "\n", (0, i.jsxs)(n.p, { children: ["Eigen onderzoek is dan altijd belangrijk, maar er is al veel onderzocht.\nOp ", (0, i.jsx)(n.a, { href: "http://gebruikersonderzoeken.nl/", children: "gebruikersonderzoeken.nl" }), " staan de bevindingen van veel verschillende gebruikersonderzoeken."] }), "\n", (0, i.jsxs)(n.p, { children: ["Maar er zijn ook gerenommeerde bronnen voor toegankelijkheid en gebruikersonderzoek zoals de ", (0, i.jsx)(n.a, { href: "https://www.nngroup.com/topic/accessibility/", children: "Nielsen Norman Group" }), ", ", (0, i.jsx)(n.a, { href: "https://adrianroselli.com/", children: "Adrian Roselli" }), ", ", (0, i.jsx)(n.a, { href: "https://www.a11yproject.com/", children: "The A11y Project" }), ", ", (0, i.jsx)(n.a, { href: "https://www.tpgi.com/", children: "TPGi" }), ", en ", (0, i.jsx)(n.a, { href: "https://adamsilver.io/blog/", children: "Adam Silver" }), ". Doe in elk geval ook eigen onderzoek op het formulier wat je ontwikkelt."] }), "\n", (0, i.jsxs)(n.p, { children: ["Een voorbeeld: wanneer gebruik je een ", (0, i.jsx)(n.code, { children: "<select>" }), " met opties en wanneer radiobuttons? Of kies je een eigen oplossing? Hierover is (onder andere) het volgende onderzoek gepubliceerd:"] }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.youtube.com/watch?v=CUkMCQR4TpY", children: "Burn your select tags" }), ", video van Alice Bartlett."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://adrianroselli.com/2022/05/under-engineered-multi-selects.html", children: "Under-Engineered Multi-Selects" }), " van Adrian Roselli."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037", children: "UX Design: Drop-Downs in Forms" }), " van Nick Babich."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.nngroup.com/articles/listbox-dropdown/", children: "Listboxes vs. Dropdown Lists" }), " van de Nielsen Norman Group (NN-group)."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://uxdworld.com/2018/05/06/7-rules-of-using-radio-buttons-vs-drop-down-menus/", children: "7 Rules of Using Radio Buttons vs Drop-Down Menus" }), " van UX World."] }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: "Andere bronnen voor gebruikersonderzoek:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://designnotes.blog.gov.uk/", children: "Design in government" }), " van GOV.UK."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://baymard.com/blog", children: "E-Commerce UX Research Articles" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://lawsofux.com/jakobs-law/", children: "Jakob\u2019s Law" }), "."] }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: "Studeer en test met hulpmiddelen en met gebruikers. Dat is de boodschap die we hier willen meegeven." })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: "Wanneer gebruik je welk formulierelement? | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Wanneer welk element?", pagination_label: "Wanneer gebruik je welk formulierelement", description: "Richtlijnen voor het kiezen van formulierelementen.", slug: "wanneer-welk-form-element", keywords: ["informatie", "formulier", "design", "code"] },
    b = "Wanneer gebruik je welk formulierelement",
    v = { id: "richtlijnen/formulieren/alle-richtlijnen/when-which", title: "Wanneer gebruik je welk formulierelement? | Richtlijnen | NL Design System", description: "Richtlijnen voor het kiezen van formulierelementen.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/when-which.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/wanneer-welk-form-element", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/wanneer-welk-form-element", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/when-which.mdx", tags: [], version: "current", frontMatter: { title: "Wanneer gebruik je welk formulierelement? | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Wanneer welk element?", pagination_label: "Wanneer gebruik je welk formulierelement", description: "Richtlijnen voor het kiezen van formulierelementen.", slug: "wanneer-welk-form-element", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Visueel ontwerp van formulieren", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/visueel-ontwerp" }, next: { title: "Toegankelijk", permalink: "/en/richtlijnen/formulieren/toegankelijk" } },
    x = {},
    k = [];
   function f(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "wanneer-gebruik-je-welk-formulierelement", children: "Wanneer gebruik je welk formulierelement" }), "\n", (0, i.jsx)(n.p, { children: "Je wilt natuurlijk dat zoveel mogelijk mensen een formulier kunnen invullen op de makkelijkste manier. We geven twee richtlijnen die hierbij helpen." }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief." }), "\n", (0, i.jsx)(n.li, { children: "Kies voor het meest gebruiksvriendelijke formulierelement." }), "\n"] }), "\n", (0, i.jsxs)(n.p, { children: ["Er is nog veel te onderzoeken over wat het beste formulierelement is voor wat je wilt uitvragen. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ", (0, i.jsx)(n.a, { href: "http://gebruikersonderzoeken.nl/", children: "gebruikersonderzoeken.nl" }), " zodat we hiervan allemaal kunnen leren."] }), "\n", (0, i.jsx)(u, {}), "\n", (0, i.jsx)(d, {}), "\n", (0, i.jsx)(j, {}), "\n", (0, i.jsx)(m, {}), "\n", (0, i.jsx)(t.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
   }
  },
  73460: (e, n, r) => {
   r.d(n, { X: () => v });
   var i = r(16532),
    l = r(86259),
    t = r(11910),
    o = r(59560),
    s = r(80486),
    a = r(69267),
    d = r(80495),
    c = r(50959),
    u = r(9995);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var m = r(41179),
    p = r(11527);
   const j = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, p.jsx)(i.BB, { className: (0, l.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: (0, p.jsx)(i.nv, { className: h["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   j.displayName = "ParagraphContainer";
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, p.jsx)(i.BB, { className: (0, l.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: n }) });
   };
   g.displayName = "DocumentContainer";
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: n });
   };
   b.displayName = "SurfaceContainer";
   const v = (e) => {
    let { code: n, copy: r = !1, defaultExpandedCode: v = !1, displayCode: x = !0, children: k, container: f = "document", language: y, designTokens: w } = e,
     _ = "function" == typeof k ? k() : k,
     z = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = "string" == typeof n ? n : u.uS(z || _),
     [D, A] = (0, c.useState)(N),
     [C, S] = (0, c.useState)(v);
    (0, c.useEffect)(() => {
     (async () => {
      (D = await d.ZP.format(N, { parser: y, plugins: [t.Z, o.ZP, s.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), A(D);
     })();
    }, [N]);
    const Z = (0, c.useId)();
    let W = c.Fragment;
    return (
     "paragraph" === f ? (W = j) : "document" === f ? (W = g) : "surface" === f && (W = b),
     (0, p.jsxs)("div", {
      className: (0, l.Z)(h["nlds-canvas"]),
      children: [
       _ && (0, p.jsx)("div", { className: (0, l.Z)(h["nlds-canvas__example"]), children: (0, p.jsx)("div", { className: "voorbeeld-theme", style: w, children: (0, p.jsx)(W, { children: (0, p.jsx)(i.pu, { children: _ }) }) }) }),
       x &&
        (0, p.jsx)("div", {
         className: (0, l.Z)(h["nlds-canvas__toolbar"]),
         children: (0, p.jsx)(i.zx, {
          className: (0, l.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           S(!C);
          },
          "aria-expanded": C,
          "aria-controls": Z,
          children: C ? "Verberg code" : "Bekijk code",
         }),
        }),
       x &&
        (0, p.jsxs)("div", {
         className: (0, l.Z)(h["nlds-canvas__code-block"], !r && h["nlds-canvas__code-block--user-select-none"]),
         id: Z,
         hidden: !C,
         children: [
          (0, p.jsx)(m.u, { syntax: y, textContent: D, trim: !0 }),
          r &&
           (0, p.jsx)("div", {
            className: (0, l.Z)(h["nlds-canvas__toolbar"]),
            children: (0, p.jsx)(i.zx, {
             className: (0, l.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(D).catch((e) => console.error("Copy code failed", e));
             },
             children: "Kopieer",
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, n, r) => {
   r.d(n, { u: () => s });
   var i = r(16532),
    l = r(2425);
   r(50959);
   const t = {
    plain: { color: "var(--nlds-code-block-color)", backgroundColor: "var(--nlds-code-block-background-color)" },
    styles: [
     { types: ["comment"], style: { color: "var(--nlds-code-block-comment-color)", fontStyle: "italic" } },
     { types: ["prolog"], style: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "italic" } },
     { types: ["cdata"], style: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "italic" } },
     { types: ["punctuation"], style: { color: "var(--nlds-code-block-punctuation-color)" } },
     { types: ["deleted"], style: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "italic" } },
     { types: ["symbol"], style: { color: "var(--nlds-code-block-symbol-color)" } },
     { types: ["property"], style: { color: "var(--nlds-code-block-property-color)" } },
     { types: ["tag"], style: { color: "var(--nlds-code-block-tag-color)" } },
     { types: ["operator"], style: { color: "var(--nlds-code-block-operator-color)" } },
     { types: ["keyword"], style: { color: "var(--nlds-code-block-keyword-color)" } },
     { types: ["boolean"], style: { color: "var(--nlds-code-block-boolean-color)" } },
     { types: ["number"], style: { color: "var(--nlds-code-block-number-color)" } },
     { types: ["constant"], style: { color: "var(--nlds-code-block-constant-color)" } },
     { types: ["function"], style: { color: "var(--nlds-code-block-function-color)" } },
     { types: ["builtin"], style: { color: "var(--nlds-code-block-builtin-color)" } },
     { types: ["char"], style: { color: "var(--nlds-code-block-char-color)" } },
     { types: ["selector"], style: { color: "var(--nlds-code-block-selector-color)", fontStyle: "italic" } },
     { types: ["doctype"], style: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "italic" } },
     { types: ["attr-name"], style: { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "italic" } },
     { types: ["inserted"], style: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "italic" } },
     { types: ["string"], style: { color: "var(--nlds-code-block-string-color)" } },
     { types: ["url"], style: { color: "var(--nlds-code-block-url-color)" } },
     { types: ["entity"], style: { color: "var(--nlds-code-block-entity-color)" } },
     { types: ["class-name"], style: { color: "var(--nlds-code-block-class-name-color)" } },
     { types: ["atrule"], style: { color: "var(--nlds-code-block-atrule-color)" } },
     { types: ["attr-value"], style: { color: "var(--nlds-code-block-attr-value-color)" } },
     { types: ["regex"], style: { color: "var(--nlds-code-block-regex-color)" } },
     { types: ["important"], style: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" } },
     { types: ["variable"], style: { color: "var(--nlds-code-block-variable-color)" } },
     { types: ["bold"], style: { fontWeight: "bold" } },
     { types: ["italic"], style: { fontStyle: "italic" } },
    ],
   };
   var o = r(11527);
   function s(e) {
    let { lineNumber: n, syntax: r, textContent: s, trim: a } = e,
     d = s;
    return (
     a && (d = d.trim()),
     (0, o.jsx)(l.y$, {
      theme: t,
      code: d,
      language: r || "",
      children: (e) => {
       let { style: r, tokens: l, getLineProps: t, getTokenProps: s } = e;
       return (0, o.jsx)(i.dn, { style: r, children: l.map((e, r) => (0, o.jsxs)("span", { ...t({ line: e }), children: [n && (0, o.jsx)("span", { children: r + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, r)) });
      },
     })
    );
   }
  },
  30036: (e, n, r) => {
   r.d(n, { X: () => d });
   var i = r(35893),
    l = r(71139),
    t = r(16532),
    o = r(86259);
   r(50959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = r(11527);
   const d = (e) => {
    let { title: n, appearance: r, description: d, children: c, figure: u } = e;
    const h = "Doen",
     m = "Niet doen",
     p = u ? "figure" : "div",
     j = u ? "figcaption" : "div";
    return (0, a.jsxs)(p, { className: (0, o.Z)(s["nlds-guideline"], s[`nlds-guideline--${r}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(j, { className: (0, o.Z)(s["nlds-guideline__description"]), children: ["dont" === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, o.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(i.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: m })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, o.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(l.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: h })] }), (0, a.jsx)(t.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, o.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
  47214: (e, n, r) => {
   r.d(n, { Z: () => s, a: () => o });
   var i = r(50959);
   const l = {},
    t = i.createContext(l);
   function o(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), i.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
