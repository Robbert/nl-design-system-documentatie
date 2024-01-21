"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [606],
 {
  8300: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => S, contentTitle: () => L, default: () => E, frontMatter: () => A, metadata: () => G, toc: () => C });
   var i = l(1527),
    r = l(7214),
    t = l(3324),
    o = l(3460),
    a = l(36);
   function s(e) {
    const n = { input: "input", label: "label", option: "option", select: "select", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Het label inconsequent plaatsen in een formulier (visueel en in code).", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "lievelingskleur", children: "Wat is je lievelingskleur?" }), (0, i.jsxs)(n.select, { name: "lievelingskleur", id: "lievelingskleur", children: [(0, i.jsx)(n.option, { children: "Rood" }), (0, i.jsx)(n.option, { children: "Blauw" }), (0, i.jsx)(n.option, { children: "Wit" })] }), (0, i.jsx)(n.input, { type: "text", id: "dier", name: "lievelingsdier" }), (0, i.jsx)(n.label, { for: "dier", children: "Wat is je lievelingsdier?" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "zet-het-label-boven-het-formulierveld", children: "Zet het label boven het formulierveld" }), "\n", (0, i.jsx)(n.p, { children: "Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd." }), "\n", (0, i.jsx)(n.p, { children: "Deze plaatsing heeft meerdere voordelen:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht." }), "\n", (0, i.jsx)(n.li, { children: "Dit werkt beter voor gebruikers die de tekst inzoomen." }), "\n", (0, i.jsx)(n.li, { children: "Door labels, formuliervelden en acties verticaal uit te lijnen, wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: "Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat." }), "\n", (0, i.jsxs)(n.p, { children: ["Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort. Lees hierover mee over bij ", (0, i.jsx)(n.a, { href: "https://www.nldesignsystem.nl/richtlijnen/stijl/ruimte#ontwerpen-met-ruimte", children: "de richtlijnen over stijl: Ruimte" }), "."] }), "\n", (0, i.jsx)(n.p, { children: "Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond." }), "\n", (0, i.jsxs)(n.p, { children: ["Gebruik geen zogenaamde \u201cfloating labels\u201d. Deze zijn moeilijker te begrijpen. Zie: ", (0, i.jsx)(n.a, { href: "https://www.smashingmagazine.com/2021/02/material-design-text-fields/", children: "Material Design Text Fields Are Badly Designed in Smashing Magazine" }), "."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { div: "div", input: "input", label: "label", option: "option", select: "select", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Koppel het label aan het formulierveld.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "kleur3", children: "Wat is je lievelingskleur?" }), (0, i.jsx)(n.input, { type: "text", id: "kleur3", name: "lievelingskleur" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Koppel het label aan het formulierveld (select).", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "kleur4", children: "Wat is je lievelingskleur?" }), (0, i.jsxs)(n.select, { id: "kleur4", name: "lievelingskleur", children: [(0, i.jsx)(n.option, { children: "Rood" }), (0, i.jsx)(n.option, { children: "Blauw" }), (0, i.jsx)(n.option, { children: "Wit" })] })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Een div in plaats van een label gebruiken.", description: "De for en id koppeling werkt alleen met een label-element.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.div, { for: "kleur5", children: "Wat is je lievelingskleur?" }), (0, i.jsx)(n.input, { type: "text", id: "kleur5", name: "lievelingskleur" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { children: "Wat is je lievelingskleur?" }), (0, i.jsxs)(n.select, { name: "lievelingskleur", children: [(0, i.jsx)(n.option, { children: "Rood" }), (0, i.jsx)(n.option, { children: "Blauw" }), (0, i.jsx)(n.option, { children: "Wit" })] })] }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "geef-een-formulierveld-toegankelijke-naam-met-een-label", children: "Geef een formulierveld toegankelijke naam met een label" }), "\n", (0, i.jsxs)(n.p, { children: ["Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ", (0, i.jsx)(n.code, { children: "for" }), "/", (0, i.jsx)(n.code, { children: "id" }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), "\n", (0, i.jsx)(n.p, { children: "Waarom is dit belangrijk?" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Screenreader (schermlezer) gebruikers krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt." }), "\n", (0, i.jsx)(n.li, { children: "Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken." }), "\n", (0, i.jsx)(n.li, { children: "Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven." }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: "Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description)." }), "\n", (0, i.jsx)(n.h3, { id: "de-forid-relatie", children: "De for/id relatie" }), "\n", (0, i.jsx)(n.p, { children: "Opzet in de HTML:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Geef het formulierveld een ID." }), "\n", (0, i.jsxs)(n.li, { children: ["Geef het label het attribute ", (0, i.jsx)(n.code, { children: "for" }), " met als waarde de ID van het bijbehorende formulierveld."] }), "\n"] }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), "\n", (0, i.jsxs)(n.p, { children: ["Let op: De gebruikte ", (0, i.jsx)(n.strong, { children: "ID's" }), " moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen."] }), "\n", (0, i.jsx)(n.p, { children: "Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt." }), "\n", (0, i.jsxs)(n.p, { children: ["Doen: Gekoppeld label met ", (0, i.jsx)(n.code, { children: "for" }), " en ", (0, i.jsx)(n.code, { children: "id" }), ". Het ", (0, i.jsx)(n.code, { children: "<label>" }), "-element heeft een ", (0, i.jsx)(n.code, { children: "for" }), " attribuut (of ", (0, i.jsx)(n.code, { children: "htmlFor" }), " in React) dat verwijst naar het ", (0, i.jsx)(n.code, { children: "id" }), " van het bijbehorende formulierveld."] }), "\n", (0, i.jsxs)(n.p, { children: ["Zo werkt dit bijvoorbeeld met een ", (0, i.jsx)(n.code, { children: "<select>" }), ":"] }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) }), "\n", (0, i.jsx)(n.p, { children: "Het geven van een goede toegankelijke naam aan formuliervelden is verplicht volgens WCAG. Deze succescriteria zijn relevant:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels", children: "2.4.6: Koppen en labels" }), " (niveau AA)."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions", children: "3.3.2: Labels of instructies" }), " (niveau A)."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html", children: "4.1.2: Naam, rol, waarde" }), " (niveau A)."] }), "\n"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   function g(e) {
    const n = { input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Het label blijft zichtbaar, ook als de gebruiker gaat invullen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "dier1", children: "Wat is je lievelingsdier?" }), (0, i.jsx)(n.input, { type: "text", id: "dier1", name: "lievelingsdier", placeholder: "Bijvoorbeeld cavia" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Alleen een placeholder gebruiken als zichtbaar label.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "dier2", class: "visually-hidden", children: "Wat is je lievelingsdier?" }), (0, i.jsx)(n.input, { type: "text", id: "dier2", name: "lievelingsdier", placeholder: "Wat is je lievelingsdier?" })] }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   function v(e) {
    const n = { a: "a", h2: "h2", p: "p", strong: "strong", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "zorg-ervoor-dat-het-label-altijd-zichtbaar-is", children: "Zorg ervoor dat het label altijd zichtbaar is" }), "\n", (0, i.jsx)(n.p, { children: "Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label." }), "\n", (0, i.jsxs)(n.p, { children: ["De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ", (0, i.jsx)(n.a, { href: "https://www.nngroup.com/articles/form-design-placeholders/", children: "Placeholders in Form Fields Are Harmful" }), " van de Nielsen Norman Group."] }), "\n", (0, i.jsxs)(n.p, { children: ["Een label vertelt ", (0, i.jsx)(n.strong, { children: "wat" }), " je moet invullen en een placeholder ", (0, i.jsx)(n.strong, { children: "hoe" }), " je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld \u201cJouw e-mailadres\u201d zijn en de placeholder \u201c", (0, i.jsx)(n.a, { href: "mailto:naam@voorbeeld.com", children: "naam@voorbeeld.com" }), "\u201d."] }), "\n", (0, i.jsxs)(n.p, { children: ["De ", (0, i.jsx)(n.strong, { children: "hoe" }), " informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen."] }), "\n", (0, i.jsx)(n.p, { children: "Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete." }), "\n", (0, i.jsx)(n.p, { children: "Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker als het label altijd zichtbaar is." })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
   function k(e) {
    const n = { a: "a", input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "De link buiten het label plaatsen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: "#", children: "Onze algemene leveringsvoorwaarden" }) }), (0, i.jsx)(n.input, { id: "alv1", type: "checkbox" }), (0, i.jsx)(n.label, { for: "alv1", children: "Ik ga akkoord met de algemene leveringsvoorwaarden" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "De link binnen het label plaatsen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.input, { id: "alv2", type: "checkbox" }), (0, i.jsxs)(n.label, { for: "alv2", children: ["Ik ga akkoord met de ", (0, i.jsx)(n.a, { href: "#", children: "algemene leveringsvoorwaarden" })] })] }) }) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
   function y(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "zet-alleen-tekst-in-het-label", children: "Zet alleen tekst in het label" }), "\n", (0, i.jsx)(n.p, { children: "Gebruik alleen tekst in een label. Dus geen links, buttons, tooltips of kopjes." }), "\n", (0, i.jsx)(n.p, { children: "Dit geeft problemen bij het voorlezen van het label door screenreaders en het activeren via voice recognition." }), "\n", (0, i.jsx)(n.p, { children: "Zet extra informatie boven het formulier, als links boven het label of formulierveld (wat logisch is qua leesvolgorde) of als beschrijving bij het veld. Vermijd tooltips." }), "\n", (0, i.jsxs)(n.p, { children: ["Lees ook de ", (0, i.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/links", children: "richtlijnen voor links in formulieren" }), "."] })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
   function w(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Simpel label met extra beschrijving. Gebruik waar nodig een losse description om meer uitleg te geven.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "first-name", children: "Voornaam (een of meerdere)" }), (0, i.jsx)(n.p, { id: "first-name-description", children: "Vul de voornaam of voornamen in zoals deze op je id-kaart of paspoort staan." }), (0, i.jsx)(n.input, { autocomplete: "given-name", type: "text", name: "first_name", id: "first-name", "aria-describedby": "first-name-description" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Ingewikkeld label. Door veel informatie in te korten wordt het label onduidelijk", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "first-name2", children: "Voornaam(en)" }), (0, i.jsx)(n.input, { autocomplete: "given-name", type: "text", name: "first_name", id: "first-name2" })] }) }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w(e);
   }
   function D(e) {
    const n = { h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "gebruik-duidelijke-labelteksten", children: "Gebruik duidelijke labelteksten" }), "\n", (0, i.jsx)(n.p, { children: "Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Waar nodig wordt er ook extra hulp geboden worden, zoals een omschrijving van waar een BSN-nummer te vinden is." }), "\n", (0, i.jsx)(n.p, { children: "Wanneer je een afkorting gebruikt, of je moet jargon gebruiken omdat de offici\xeble term verplicht is, geef dan in de beschrijving een voorbeeld of uitleg." })] });
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(D, { ...e }) }) : D(e);
   }
   function F(e) {
    const n = { div: "div", input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Het zichtbare label is de toegankelijke naam.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "hond", children: "Hoe heet je hond" }), (0, i.jsx)(n.input, { type: "text", id: "hond", name: "hond" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,", description: "terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsx)(n.input, { type: "text", name: "lievelingskleur", "aria-label": "Vul een kleur in", placeholder: "Wat is je lievelingskleur" }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,", description: "terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.div, { children: "Zoek" }), (0, i.jsx)(n.input, { type: "search", name: "trefwoord", "aria-label": "Trefwoord" })] }) }) })] });
   }
   function Z(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(F, { ...e }) }) : F(e);
   }
   function N(e) {
    const n = { a: "a", code: "code", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam", children: "De zichtbare naam moet overeenkomen met de toegankelijke naam" }), "\n", (0, i.jsx)(n.p, { children: "Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken." }), "\n", (0, i.jsxs)(n.p, { children: ["Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ", (0, i.jsx)(n.code, { children: "aria-label" }), ". Met ", (0, i.jsx)(n.code, { children: "aria-label" }), " kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker."] }), "\n", (0, i.jsxs)(n.p, { children: ["Door te zorgen dat de zichtbare naam en toegankelijke naam overeenkomen, voldoe je aan een WCAG-criterium: ", (0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html", children: "2.5.3: Label in naam" }), " (niveau A)."] })] });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(N, { ...e }) }) : N(e);
   }
   const A = { title: "Labels in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Labels", pagination_label: "Labels in een formulier", description: "Richtlijnen voor het ontwerp en de code van labels in een formulier.", keywords: ["labels", "formulier", "design", "code"] },
    L = "Labels in een formulier",
    G = { id: "richtlijnen/formulieren/alle-richtlijnen/labels", title: "Labels in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het ontwerp en de code van labels in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/01-labels.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/labels", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/labels", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/01-labels.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Labels in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Labels", pagination_label: "Labels in een formulier", description: "Richtlijnen voor het ontwerp en de code van labels in een formulier.", keywords: ["labels", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Alle richtlijnen (beta)", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen" }, next: { title: "Descriptions in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/descriptions" } },
    S = {},
    C = [];
   function H(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "labels-in-een-formulier", children: "Labels in een formulier" }), "\n", (0, i.jsx)(n.p, { children: "Een label geeft aan welke gegevens de gebruiker bij een formulierveld in kan vullen.\nVoor de toegankelijkheid van labels en dus ook formuliervelden zijn de volgende punten belangrijk:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Geef een formulierveld een toegankelijke naam met een label." }), "\n", (0, i.jsx)(n.li, { children: "De zichtbare naam moet overeenkomen met de toegankelijke naam." }), "\n", (0, i.jsx)(n.li, { children: "Zet het label boven het formulierveld." }), "\n", (0, i.jsx)(n.li, { children: "Zorg ervoor dat het label altijd zichtbaar is." }), "\n", (0, i.jsx)(n.li, { children: "Zet alleen tekst in het label." }), "\n", (0, i.jsx)(n.li, { children: "Gebruik duidelijke labelteksten." }), "\n"] }), "\n", (0, i.jsx)(m, {}), "\n", (0, i.jsx)(j, {}), "\n", (0, i.jsx)(X, {}), "\n", (0, i.jsx)(Z, {}), "\n", (0, i.jsx)(h, {}), "\n", (0, i.jsx)(d, {}), "\n", (0, i.jsx)(x, {}), "\n", (0, i.jsx)(b, {}), "\n", (0, i.jsx)(_, {}), "\n", (0, i.jsx)(f, {}), "\n", (0, i.jsx)(W, {}), "\n", (0, i.jsx)(z, {}), "\n", (0, i.jsx)(t.ZP, {})] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(H, { ...e }) }) : H(e);
   }
  },
  3324: (e, n, l) => {
   l.d(n, { ZP: () => o });
   var i = l(1527),
    r = l(7214);
   function t(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, i.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  3460: (e, n, l) => {
   l.d(n, { X: () => b });
   var i = l(6532),
    r = l(6259),
    t = l(1910),
    o = l(9560),
    a = l(486),
    s = l(9267),
    d = l(495),
    c = l(959),
    h = l(9995),
    u = l(2950);
   const j = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var p = l(1179),
    m = l(1527);
   const g = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      i = n.ownerDocument.getElementById(l);
     (i.hidden = !i.hidden), n.setAttribute("aria-expanded", !i.hidden), (n.innerText = i.hidden ? "Bekijk code" : "Verberg code");
    },
    b = (e) => {
     let { code: n, copy: l = !1, defaultCollapsed: b = !0, children: v, language: x } = e,
      k = "function" == typeof v ? v() : v,
      f = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      y = "string" == typeof n ? n : h.uS(f || k),
      [_, w] = (0, c.useState)(y);
     (0, c.useEffect)(() => {
      (async () => {
       (_ = await d.ZP.format(y, { parser: x, plugins: [t.Z, o.ZP, a.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), w(_);
      })();
     }, [y]);
     const z = (0, u.Z)();
     return (0, m.jsxs)("div", {
      className: (0, r.Z)(j["nlds-canvas"]),
      children: [
       (0, m.jsx)("div", { className: (0, r.Z)(j["nlds-canvas__example"]), children: (0, m.jsx)(i.pu, { className: "voorbeeld-theme", children: k }) }),
       (0, m.jsx)("div", { className: (0, r.Z)(j["nlds-canvas__toolbar"]), children: (0, m.jsx)(i.zx, { className: (0, r.Z)(j["nlds-canvas__button"], j["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: g, "aria-expanded": !b, "aria-controls": z, children: b ? "Bekijk code" : "Verberg code" }) }),
       (0, m.jsxs)("div", {
        className: (0, r.Z)(j["nlds-canvas__code-block"], !l && j["nlds-canvas__code-block--user-select-none"]),
        id: z,
        hidden: b,
        children: [
         (0, m.jsx)(p.u, { syntax: x, textContent: _, trim: !0 }),
         l &&
          (0, m.jsx)("div", {
           className: (0, r.Z)(j["nlds-canvas__toolbar"]),
           children: (0, m.jsx)(i.zx, {
            className: (0, r.Z)(j["nlds-canvas__button"], j["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(_).catch((e) => console.error("Copy code failed", e));
            },
            children: "Kopieer",
           }),
          }),
        ],
       }),
      ],
     });
    };
  },
  1179: (e, n, l) => {
   l.d(n, { u: () => a });
   var i = l(6532),
    r = l(2425);
   l(959);
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
   var o = l(1527);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: s } = e,
     d = a;
    return (
     s && (d = d.trim()),
     (0, o.jsx)(r.y$, {
      theme: t,
      code: d,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: r, getLineProps: t, getTokenProps: a } = e;
       return (0, o.jsx)(i.dn, { style: l, children: r.map((e, l) => (0, o.jsxs)("span", { ...t({ line: e }), children: [n && (0, o.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...a({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  36: (e, n, l) => {
   l.d(n, { X: () => d });
   var i = l(5893),
    r = l(1139),
    t = l(6532),
    o = l(6259);
   l(959);
   const a = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = l(1527);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c } = e;
    const h = "Doen",
     u = "Niet doen";
    return (0, s.jsxs)("div", { className: (0, o.Z)(a["nlds-guideline"], a[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, s.jsxs)("div", { className: (0, o.Z)(a["nlds-guideline__description"]), children: ["dont" === l ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(t.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(i.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: u })] }), (0, s.jsx)(t.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(t.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(r.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: h })] }), (0, s.jsx)(t.nv, { children: n })] }), d] }), (0, s.jsx)("div", { className: (0, o.Z)(a["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
