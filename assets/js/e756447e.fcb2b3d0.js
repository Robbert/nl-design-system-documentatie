"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [83516],
 {
  57144: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => r, default: () => m, frontMatter: () => a, metadata: () => d, toc: () => l });
   var o = t(52676),
    i = t(24785);
   const a = { title: "Bestaand of nieuw component gebruiken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component kiezen", pagination_label: "Component kiezen", description: "Bestaand of nieuw component gebruiken?", keywords: ["developer", "aan de slag", "componenten", "samenwerken"] },
    r = "Bestaand of nieuw component gebruiken",
    d = { id: "handboek/developer/samenwerken-aan-componenten", title: "Bestaand of nieuw component gebruiken", description: "Bestaand of nieuw component gebruiken?", source: "@site/docs/handboek/developer/04-samenwerken-aan-componenten.md", sourceDirName: "handboek/developer", slug: "/handboek/developer/samenwerken-aan-componenten", permalink: "/handboek/developer/samenwerken-aan-componenten", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/04-samenwerken-aan-componenten.md", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Bestaand of nieuw component gebruiken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component kiezen", pagination_label: "Component kiezen", description: "Bestaand of nieuw component gebruiken?", keywords: ["developer", "aan de slag", "componenten", "samenwerken"] }, sidebar: "handboek", previous: { title: "Thema maken", permalink: "/handboek/developer/thema-maken" }, next: { title: "Component inzetten", permalink: "/handboek/developer/component-inzetten" } },
    s = {},
    l = [
     { value: "Flowchart", id: "flowchart", level: 2 },
     { value: "1. Een kant-en-klaar component", id: "1-een-kant-en-klaar-component", level: 2 },
     { value: "2. Een component van een andere organisatie", id: "2-een-component-van-een-andere-organisatie", level: 2 },
     { value: "3. Een component met kleine wijziging", id: "3-een-component-met-kleine-wijziging", level: 2 },
     { value: "4. Extra feature toevoegen aan een component", id: "4-extra-feature-toevoegen-aan-een-component", level: 2 },
     { value: "5. Een nieuw herbruikbaar component maken", id: "5-een-nieuw-herbruikbaar-component-maken", level: 2 },
     { value: "6. Dit design wordt geen onderdeel van het design system", id: "6-dit-design-wordt-geen-onderdeel-van-het-design-system", level: 2 },
    ];
   function c(e) {
    const n = { code: "code", h1: "h1", h2: "h2", img: "img", li: "li", ol: "ol", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: "bestaand-of-nieuw-component-gebruiken", children: "Bestaand of nieuw component gebruiken" }), "\n", (0, o.jsx)(n.p, { children: "Stel je hebt een nieuwe wens voor een component of functionaliteit. Dan wil je natuurlijk weten hoe je hiervoor het NL Design System kunt gebruiken." }), "\n", (0, o.jsx)(n.p, { children: "Door antwoord te geven op een paar simpele vragen wordt duidelijk of:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Optie 1 en 2: Het met een bestaand component kan" }), "\n", (0, o.jsx)(n.li, { children: "Optie 3: Het met een bestaand component kan door een kleine toevoeging of token toe te voegen" }), "\n", (0, o.jsx)(n.li, { children: "Optie 4: Je een bestaand component verder kan uitbreiden" }), "\n", (0, o.jsx)(n.li, { children: "Optie 5: Je een nieuw component volgens de NLDS architectuur maakt" }), "\n", (0, o.jsx)(n.li, { children: "Optie 6: Je er een losstaande niet herbruikbare implementatie van maakt" }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "flowchart", children: "Flowchart" }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: "https://i.imgur.com/LZcYeXT.jpg", alt: "Flowchart opties hoe je een NLDS component kan gebruiken" }) }), "\n", (0, o.jsx)(n.h2, { id: "1-een-kant-en-klaar-component", children: "1. Een kant-en-klaar component" }), "\n", (0, o.jsxs)(n.p, { children: ["Bestaat het component in het NL Design System en is het geschikt om zo voor het design te gebruiken? Heeft het component een nl- prefix, bijvoorbeeld ", (0, o.jsx)(n.code, { children: "nl-component" }), "?"] }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Gebruik het NLDS component" }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "2-een-component-van-een-andere-organisatie", children: "2. Een component van een andere organisatie" }), "\n", (0, o.jsxs)(n.p, { children: ["Het component bestaat niet in het NL Design System maar wel bij een van de organisaties die met de NLDS architectuur werken. Daarom heeft het een andere prefix, bijvoorbeeld ", (0, o.jsx)(n.code, { children: "utrecht-component" }), " of ", (0, o.jsx)(n.code, { children: "den-haag-component" }), ".\nHet component voldoet verder wel aan de wensen en heeft voldoende design tokens om aan het design te voldoen."] }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Gebruik dit component dan met de organisatie prefix van de bestaande component en gebruik deze prefix ook voor de component design tokens." }), "\n", (0, o.jsxs)(n.li, { children: ["Laat ons ook weten dat dit component succesvol is ingezet zodat we kunnen overwegen het component op te nemen in het NL Design System met de ", (0, o.jsx)(n.code, { children: "nl" }), " prefix."] }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "3-een-component-met-kleine-wijziging", children: "3. Een component met kleine wijziging" }), "\n", (0, o.jsx)(n.p, { children: "Het component bestaat met de NL Design System architectuur. Ook kan het met wat extra tokens of een kleine toevoeging aan de wensen en het design voldoen. Deze aanpassing zorgt verder niet voor wijzigingen in de bestaande functionaliteit of aan de bedoeling van de maintainers van het component." }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Maak een fork" }), "\n", (0, o.jsx)(n.li, { children: "Maak een pull request waarin de voorgestelde wijziging wordt uitgelegd en aangepast." }), "\n", (0, o.jsx)(n.li, { children: "In overleg met de maintainers kan dan besloten worden het component uit te breiden of de wijziging in een fork los bij de nieuwe organisatie te laten bestaan." }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "4-extra-feature-toevoegen-aan-een-component", children: "4. Extra feature toevoegen aan een component" }), "\n", (0, o.jsx)(n.p, { children: "Er bestaat een component dat er erg op lijkt met de NLDS architectuur. Met een kleine wijziging die niet het doel van de component aantast en er geen Frankenstein van maakt kan het component voldoen aan de wensen van het nieuwe project." }), "\n", (0, o.jsxs)(n.ol, { children: ["\n", (0, o.jsx)(n.li, { children: "Overleg met de maintainers of het logisch is het component uit te breiden. Als een nieuwe component moet worden gemaakt ga dan door naar optie 5." }), "\n", (0, o.jsx)(n.li, { children: "Maak dan een fork" }), "\n", (0, o.jsx)(n.li, { children: "Maak een pull request waarin de voorgestelde toevoeging wordt uitgelegd en aangepast." }), "\n", (0, o.jsxs)(n.li, { children: ["De maintainers besluiten of ze de voorgestelde wijziging accepteren.", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "De wijziging wordt eventueel na wat aanpassingen geaccepteerd. Gebruik dan dit component met de prefix van de originele organisatie." }), "\n", (0, o.jsx)(n.li, { children: "De wijziging wordt niet geaccepteerd. De wijziging kan dan als een fork los bij de nieuwe organisatie bestaan. Kijk hiervoor ook naar optie 5." }), "\n"] }), "\n"] }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "5-een-nieuw-herbruikbaar-component-maken", children: "5. Een nieuw herbruikbaar component maken" }), "\n", (0, o.jsx)(n.p, { children: "Er bestaat nog geen component dat kan worden gebruikt voor het nieuwe project.\nHet is mogelijk dat het nieuw te maken component gebruikt kan worden door andere projecten." }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Overheidsorganisaties gebruiken idealiter een repo binnen nl-design-system Github met een eigen organisatie naam. Deze is dan goed vindbaar voor anderen die het component later kunnen gebruiken. Voor andere (commerci\xeble) partijen wordt een eigen organisatie repo gebruikt, hier kan wel door NLDS naar verwezen worden door de topic nl-design-system toe te voegen." }), "\n", (0, o.jsx)(n.li, { children: "Gebruik een eigen prefix, idealiter de naam van de organisatie" }), "\n", (0, o.jsx)(n.li, { children: "Maak het component volgens de NLDS architectuur, het kernteam vind het leuk om hier bij te adviseren!" }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "6-dit-design-wordt-geen-onderdeel-van-het-design-system", children: "6. Dit design wordt geen onderdeel van het design system" }), "\n", (0, o.jsx)(n.p, { children: "Er bestaat nog geen component en het ontworpen component is zo specifiek dat deze waarschijnlijk nooit voor andere projecten gebruikt gaat worden." }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Maak de functionaliteit naar eigen inzicht en maak als hij wel in de componenten repo wordt opgenomen duidelijk dat het niet voor hergebruik ontworpen is." }), "\n"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => r });
   var o = t(75271);
   const i = {},
    a = o.createContext(i);
   function r(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
