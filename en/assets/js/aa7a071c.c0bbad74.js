"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2733],
 {
  2429: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => C, contentTitle: () => W, default: () => P, frontMatter: () => L, metadata: () => q, toc: () => G });
   var l = r(1527),
    t = r(7214),
    i = r(3324),
    o = r(3460),
    a = r(36);
   function s(e) {
    const n = { input: "input", label: "label", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(a.X, { appearance: "do", title: "Sta kopi\xebren van een wachtwoord toe.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "pw1", children: "Uw nieuwe wachtwoord" }), (0, l.jsx)(n.input, { type: "password", id: "wachtwoord2", autocomplete: "new-password", name: "wachtwoord" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "sta-knippen-en-plakken-van-een-wachtwoord-toe", children: "Sta knippen en plakken van een wachtwoord toe" }), "\n", (0, l.jsx)(n.p, { children: "Een wachtwoord moet veilig zijn. Als je het knippen en plakken van een wachtwoord verhindert, dwing je gebruikers tot een simpel en goed te onthouden wachtwoord. Dat is nu juist niet de bedoeling." }), "\n", (0, l.jsx)(n.p, { children: "Kopi\xebren/plakken vanuit een wachtwoordmanager is een veel veiligere manier om een gebruiker een wachtwoord te laten invullen." }), "\n", (0, l.jsxs)(n.p, { children: ["Zoals het Britse National Cyber Security Centre uitlegt in ", (0, l.jsx)(n.a, { href: "https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords", children: "Let them paste passwords" }), "."] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { input: "input", label: "label", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(a.X, { appearance: "do", title: "Voeg autocomplete waarden toe aan adresgegevens.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "adres1", children: "Straat en huisnummer" }), (0, l.jsx)(n.input, { type: "text", id: "adres1", autocomplete: "street-address", name: "adres" }), (0, l.jsx)(n.label, { for: "postcode1", children: "Postcode" }), (0, l.jsx)(n.input, { type: "text", id: "postcode1", autocomplete: "postal-code", name: "postcode" }), (0, l.jsx)(n.label, { for: "woonplaats1", children: "Woonplaats" }), (0, l.jsx)(n.input, { type: "text", id: "woonplaats1", autocomplete: "address-level2", name: "woonplaats" })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "dont", title: "Laat autocomplete waarden weg bij adresgegevens.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "adres2", children: "Straat en huisnummer" }), (0, l.jsx)(n.input, { type: "text", id: "adres2", name: "adres" }), (0, l.jsx)(n.label, { for: "postcode2", children: "Postcode" }), (0, l.jsx)(n.input, { type: "text", id: "postcode2", name: "postcode" }), (0, l.jsx)(n.label, { for: "woonplaats2", children: "Woonplaats" }), (0, l.jsx)(n.input, { type: "text", id: "woonplaats2", name: "woonplaats" })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "vul-bekende-informatie-in-waar-mogelijk", children: "Vul bekende informatie in waar mogelijk" }), "\n", (0, l.jsxs)(n.p, { children: ["Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ", (0, l.jsx)(n.a, { href: "https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).", children: "gebruik van DigiD" }), " is wel aan wettelijke voorwaarden verbonden."] }), "\n", (0, l.jsx)(n.h3, { id: "autocomplete", children: "Autocomplete" }), "\n", (0, l.jsxs)(n.p, { children: ["Het HTML-attribuut ", (0, l.jsx)(n.code, { children: "autocomplete" }), " maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ", (0, l.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete", children: "HTML-attribuut: autocomplete" }), "."] }), "\n", (0, l.jsxs)(n.p, { children: ["Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ", (0, l.jsx)(n.a, { href: "https://www.200ok.nl/tips/autocomplete/#dutch", children: "autocomplete in Nederlandse formulieren" }), " toe te passen."] }), "\n", (0, l.jsxs)(n.p, { children: ["Door het toevoegen van autocomplete aan de formuliervelden voldoe je aan het WCAG Succescriterium ", (0, l.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#identificeer-het-doel-van-de-input", children: "1.3.5 Identificeer het doel van de input" }), " (niveau AA)."] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   function g(e) {
    return (0, l.jsx)(l.Fragment, {});
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(g, { ...e }) }) : g();
   }
   function x(e) {
    const n = { a: "a", h3: "h3", img: "img", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h3, { id: "geldige-e-mailadressen", children: "Geldige e-mailadressen" }), "\n", (0, l.jsx)(n.p, { children: "Sommige mensen gebruiken een + in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen." }), "\n", (0, l.jsxs)(n.p, { children: ["Zo kiezen ze voor ", (0, l.jsx)(n.a, { href: "mailto:naam+school@voorbeeld.nl", children: "naam+school@voorbeeld.nl" }), " voor e-mails van school en ", (0, l.jsx)(n.a, { href: "mailto:naam+werk@voorbeeld.nl", children: "naam+werk@voorbeeld.nl" }), " voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af."] }), "\n", (0, l.jsx)(n.p, { children: (0, l.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_email.png", alt: "email met een plus teken is goedgekeurd" }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x(e);
   }
   function k(e) {
    const n = { h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "keur-niet-te-snel-af", children: "Keur niet te snel af" }), "\n", (0, l.jsx)(n.p, { children: "In de formuliervalidatie kan er al veel afgevangen worden.\nDenk met de gebruiker mee." })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(k, { ...e }) }) : k(e);
   }
   function w(e) {
    return (0, l.jsx)(l.Fragment, {});
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(w, { ...e }) }) : w();
   }
   function _(e) {
    const n = { h3: "h3", img: "img", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h3, { id: "eenduidig-te-herschrijven", children: "Eenduidig te herschrijven" }), "\n", (0, l.jsx)(n.p, { children: "Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters). Ook extra spaties aan het begin of eind kunnen meekomen bij het knippen/plakken van tekst." }), "\n", (0, l.jsx)(n.p, { children: "In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren en door de software te laten corrigeren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem." }), "\n", (0, l.jsx)(n.p, { children: (0, l.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_herschrijven.png", alt: "De 3 verschillende wijzen van postcode invoeren die allemaal goed zijn" }) })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(_, { ...e }) }) : _(e);
   }
   function N(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(a.X, { appearance: "do", title: "Leg uit hoe een veld in te vullen.", description: "Bijvoorbeeld in de description.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "ww", children: "Nieuw wachtwoord" }), (0, l.jsx)(n.p, { id: "ww_description", children: "Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter." }), (0, l.jsx)(n.input, { type: "password", id: "ww", name: "wachtwoord", "aria-describedby": "ww_description" })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "dont", title: "Wijze van invullen weglaten.", description: "Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "ww2", children: "Nieuw wachtwoord" }), (0, l.jsx)(n.input, { type: "password", id: "ww2", name: "wachtwoord" })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "dont", title: "Wijze van invullen alleen in de placeholder zetten.", description: "Zeker als de wijze van invullen precies goed moet zijn.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "geboortedatum2", children: "Geboortedatum" }), (0, l.jsx)(n.input, { type: "text", id: "geboortedatum2", name: "geboortedatum", placeholder: "dd/mm/jjjj" })] }) }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(N, { ...e }) }) : N(e);
   }
   function D(e) {
    const n = { h2: "h2", img: "img", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "geef-geldige-waardes-aan-voor-een-invoerveld", children: "Geef geldige waardes aan voor een invoerveld" }), "\n", (0, l.jsx)(n.p, { children: "Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder." }), "\n", (0, l.jsx)(n.p, { children: "Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen." }), "\n", (0, l.jsx)(n.p, { children: (0, l.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png", alt: "Wachtwoord-eisen zijn in de description getoond" }) }), "\n", (0, l.jsx)(n.p, { children: (0, l.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png", alt: "Voorbeeld van de waarden voor de geboortedatum worden in de description getoond" }) })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(D, { ...e }) }) : D(e);
   }
   function F(e) {
    const n = { button: "button", form: "form", input: "input", label: "label", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(a.X, { appearance: "do", title: "Voeg novalidate toe als je required gebruikt.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(n.form, { novalidate: "novalidate", children: [(0, l.jsx)(n.label, { for: "kleur1", children: "Wat is je lievelingskleur (verplicht)" }), (0, l.jsx)(n.input, { type: "text", id: "kleur1", name: "lievelingskleur", required: !0, "aria-invalid": "false" }), (0, l.jsx)(n.button, { children: "Mijn lievelingskleur" })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "do", title: "Vertel duidelijk wat het verplichte veld is.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: "email1", children: "Uw e-mailadres (verplicht)" }), (0, l.jsx)(n.input, { type: "text", id: "email1", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, l.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "do", title: "Leg het sterretje uit boven het formulier", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.p, { children: "* betekent verplicht in te vullen." }), (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: "email2", children: "Uw e-mailadres *" }), (0, l.jsx)(n.input, { type: "text", id: "email2", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, l.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "dont", title: "Vertrouw op HTML5-formuliervalidatie.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: "email3", children: "Uw e-mailadres *" }), (0, l.jsx)(n.input, { type: "text", id: "email3", name: "email", required: "required" }), (0, l.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "dont", title: "Leg het sterretje niet uit.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: "email4", children: "Uw e-mailadres *" }), (0, l.jsx)(n.input, { type: "text", id: "email4", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, l.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, l.jsx)(a.X, { appearance: "dont", title: "Geef geen feedback aan screenreadergebruikers.", children: (0, l.jsx)(o.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.p, { children: "* betekent verplicht in te vullen." }), (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: "email3", children: "Uw e-mailadres *" }), (0, l.jsx)(n.input, { type: "text", id: "email3", name: "email" }), (0, l.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] })] }) }) })] });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(F, { ...e }) }) : F(e);
   }
   function Z(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "vermeld-duidelijk-of-een-veld-verplicht-is", children: "Vermeld duidelijk of een veld verplicht is" }), "\n", (0, l.jsx)(n.p, { children: "Laat bezoekers niet raden, maar wees duidelijk welke velden verplicht zijn. Dit kan op een aantal manieren:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsx)(n.li, { children: 'Door boven het formulier te vermelden dat alle velden verplicht zijn, mits anders vermeld. Dan kan in het label de tekst "(optioneel)" worden gezet.' }), "\n", (0, l.jsx)(n.li, { children: "Door bij de verplichte velden in het label de tekst (verplicht) op te nemen." }), "\n", (0, l.jsx)(n.li, { children: "Met een asterisk bij het label. Leg dan wel boven het formulier uit wat het sterretje betekent. Een sterretje alleen bij het formulierveld is niet voldoende." }), "\n"] }), "\n", (0, l.jsx)(n.p, { children: "Zet eventuele extra uitleg altijd boven het formulier en niet in het formulier. Screenreadergebruiker kunnen extra tekst missen binnen een formulier, als die niet gekoppeld zijn aan een formulierveld." }), "\n", (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: "language-html", children: '<p>* betekent verplicht in te vullen.</p>\n<form>\n  <label for="kleur1">Wat is je lievelingskleur *</label>\n  <input type="text" id="kleur1" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: "language-html", children: '<p>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</p>\n<form>\n  <label for="kleur2">Wat is je lievelingskleur</label>\n  <input type="text" id="kleur2" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  <label for="kleur1">Wat is je lievelingsdier (optioneel)</label>\n  <input type="text" id="dier2" name="lievelingsdier" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, l.jsx)(n.h3, { id: "screenreaderfeedback", children: "Screenreaderfeedback" }), "\n", (0, l.jsxs)(n.p, { children: ["Vertel altijd aan een gebruiker van hulptechnologie\xebn (als screenreaders) dat een veld verplicht is met het ARIA-attribuut ", (0, l.jsx)(n.code, { children: 'aria-required="true"' }), "."] }), "\n", (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: "language-html", children: '<form>\n  <label for="kleur3">Wat is je lievelingskleur (verplicht)</label>\n  <input type="text" id="kleur3" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: (0, l.jsx)(n.code, { children: "Let op" }) }), ": Gebruik liever geen ", (0, l.jsx)(n.code, { children: "required" }), " in een invoerveld, dit vereist ook het attribuut ", (0, l.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate", children: "novalidate" }), " als attribute op in het ", (0, l.jsx)(n.code, { children: "<form>" }), " element.\nDit voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor ", (0, l.jsx)(n.code, { children: 'aria-required="true"' }), " hoeft dit niet. Alhoewel het gebruik van ", (0, l.jsx)(n.code, { children: "required" }), " in plaats van ", (0, l.jsx)(n.code, { children: "aria-required" }), " niet fout is, geven we hierom de voorkeur aan ", (0, l.jsx)(n.code, { children: "aria-required" }), "."] }), "\n", (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: "language-html", children: '<form novalidate>\n  <label for="kleur4">Wat is je lievelingskleur (verplicht)</label>\n  <input type="text" id="kleur4" name="lievelingskleur" required aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, l.jsxs)(n.p, { children: ["Door te helpen fouten te voorkomen voldoe van aan WCAG ", (0, l.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#labels-of-instructies", children: "Succescriterium 3.3.2 Labels of instructies" }), " (niveau A)."] })] });
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(Z, { ...e }) }) : Z(e);
   }
   const L = { title: "Voorkom fouten in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorkom fouten", pagination_label: "Voorkom fouten in een formulier", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", slug: "help-de-gebruiker", keywords: ["informatie", "formulier", "design", "code"] },
    W = "Voorkom fouten, help de gebruiker",
    q = { id: "richtlijnen/formulieren/alle-richtlijnen/help-the-user", title: "Voorkom fouten in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/07-help-the-user.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/07-help-the-user.mdx", tags: [], version: "current", sidebarPosition: 7, frontMatter: { title: "Voorkom fouten in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorkom fouten", pagination_label: "Voorkom fouten in een formulier", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", slug: "help-de-gebruiker", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Uit te vragen informatie in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/vragen" }, next: { title: "Toegankelijk", permalink: "/en/richtlijnen/formulieren/toegankelijk" } },
    C = {},
    G = [];
   function M(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(n.h1, { id: "voorkom-fouten-help-de-gebruiker", children: "Voorkom fouten, help de gebruiker" }), "\n", (0, l.jsx)(n.p, { children: "Een formulier invullen moet zo gemakkelijk mogelijk zijn. Hoe help je je gebruiker het beste?" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsx)(n.li, { children: "Vermeld het duidelijk of een veld verplicht is." }), "\n", (0, l.jsx)(n.li, { children: "Sta knippen en plakken van gegevens (zoals een wachtwoord) toe." }), "\n", (0, l.jsx)(n.li, { children: "Keur niet te snel af." }), "\n", (0, l.jsx)(n.li, { children: "Geef geldige waardes aan voor een invoerveld." }), "\n", (0, l.jsx)(n.li, { children: "Vul bekende informatie in waar mogelijk." }), "\n"] }), "\n", (0, l.jsx)(V, {}), "\n", (0, l.jsx)(X, {}), "\n", (0, l.jsx)(u, {}), "\n", (0, l.jsx)(d, {}), "\n", (0, l.jsx)(f, {}), "\n", (0, l.jsx)(b, {}), "\n", (0, l.jsx)(v, {}), "\n", (0, l.jsx)(S, {}), "\n", (0, l.jsx)(y, {}), "\n", (0, l.jsx)(A, {}), "\n", (0, l.jsx)(z, {}), "\n", (0, l.jsx)(j, {}), "\n", (0, l.jsx)(h, {}), "\n", (0, l.jsx)(i.ZP, {})] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(M, { ...e }) }) : M(e);
   }
  },
  3324: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var l = r(1527),
    t = r(7214);
   function i(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, l.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, l.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
  },
  3460: (e, n, r) => {
   r.d(n, { X: () => v });
   var l = r(6532),
    t = r(6259),
    i = r(1910),
    o = r(9560),
    a = r(486),
    s = r(9267),
    d = r(495),
    c = r(959),
    u = r(9995),
    p = r(2950);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var m = r(1179),
    j = r(1527);
   const g = (e) => {
     let { target: n } = e;
     const r = n.getAttribute("aria-controls"),
      l = n.ownerDocument.getElementById(r);
     (l.hidden = !l.hidden), n.setAttribute("aria-expanded", !l.hidden), (n.innerText = l.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let { code: n, copy: r = !1, defaultCollapsed: v = !0, children: x, language: b } = e,
      k = "function" == typeof x ? x() : x,
      f = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      w = "string" == typeof n ? n : u.uS(f || k),
      [y, _] = (0, c.useState)(w);
     (0, c.useEffect)(() => {
      (async () => {
       (y = await d.ZP.format(w, { parser: b, plugins: [i.Z, o.ZP, a.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), _(y);
      })();
     }, [w]);
     const S = (0, p.Z)();
     return (0, j.jsxs)("div", {
      className: (0, t.Z)(h["nlds-canvas"]),
      children: [
       (0, j.jsx)("div", { className: (0, t.Z)(h["nlds-canvas__example"]), children: (0, j.jsx)(l.pu, { className: "voorbeeld-theme", children: k }) }),
       (0, j.jsx)("div", { className: (0, t.Z)(h["nlds-canvas__toolbar"]), children: (0, j.jsx)(l.zx, { className: (0, t.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: g, "aria-expanded": !v, "aria-controls": S, children: v ? "Bekijk code" : "Verberg code" }) }),
       (0, j.jsxs)("div", {
        className: (0, t.Z)(h["nlds-canvas__code-block"], !r && h["nlds-canvas__code-block--user-select-none"]),
        id: S,
        hidden: v,
        children: [
         (0, j.jsx)(m.u, { syntax: b, textContent: y, trim: !0 }),
         r &&
          (0, j.jsx)("div", {
           className: (0, t.Z)(h["nlds-canvas__toolbar"]),
           children: (0, j.jsx)(l.zx, {
            className: (0, t.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(y).catch((e) => console.error("Copy code failed", e));
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
  1179: (e, n, r) => {
   r.d(n, { u: () => a });
   var l = r(6532),
    t = r(2425);
   r(959);
   const i = {
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
   var o = r(1527);
   function a(e) {
    let { lineNumber: n, syntax: r, textContent: a, trim: s } = e,
     d = a;
    return (
     s && (d = d.trim()),
     (0, o.jsx)(t.y$, {
      theme: i,
      code: d,
      language: r || "",
      children: (e) => {
       let { style: r, tokens: t, getLineProps: i, getTokenProps: a } = e;
       return (0, o.jsx)(l.dn, { style: r, children: t.map((e, r) => (0, o.jsxs)("span", { ...i({ line: e }), children: [n && (0, o.jsx)("span", { children: r + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...a({ token: e }) }, n)), "\n"] }, r)) });
      },
     })
    );
   }
  },
  36: (e, n, r) => {
   r.d(n, { X: () => d });
   var l = r(5893),
    t = r(1139),
    i = r(6532),
    o = r(6259);
   r(959);
   const a = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = r(1527);
   const d = (e) => {
    let { title: n, appearance: r, description: d, children: c } = e;
    const u = "Doen",
     p = "Niet doen";
    return (0, s.jsxs)("div", { className: (0, o.Z)(a["nlds-guideline"], a[`nlds-guideline--${r}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, s.jsxs)("div", { className: (0, o.Z)(a["nlds-guideline__description"]), children: ["dont" === r ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${r}`]), children: [(0, s.jsx)(l.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: p })] }), (0, s.jsx)(i.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${r}`]), children: [(0, s.jsx)(t.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: u })] }), (0, s.jsx)(i.nv, { children: n })] }), d] }), (0, s.jsx)("div", { className: (0, o.Z)(a["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
