"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10969],
 {
  13688: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => a, default: () => m, frontMatter: () => s, metadata: () => r, toc: () => l });
   var t = i(52676),
    o = i(24785);
   const s = { title: "Community stappenplan", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Community componenten", sidebar_position: 3, pagination_label: "Community", description: "Stappen voor de Community fase van Definition of Done", keywords: ["componenten", "design system", "estafettemodel", "definition of done", "help wanted"] },
    a = "Stappenplan: Community",
    r = { id: "handboek/community-stappenplan", title: "Community stappenplan", description: "Stappen voor de Community fase van Definition of Done", source: "@site/docs/handboek/community-stappenplan.mdx", sourceDirName: "handboek", slug: "/handboek/community-stappenplan", permalink: "/handboek/community-stappenplan", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/community-stappenplan.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Community stappenplan", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Community componenten", sidebar_position: 3, pagination_label: "Community", description: "Stappen voor de Community fase van Definition of Done", keywords: ["componenten", "design system", "estafettemodel", "definition of done", "help wanted"] }, sidebar: "handboek", previous: { title: "Help Wanted", permalink: "/handboek/help-wanted-stappenplan" }, next: { title: "Candidate", permalink: "/handboek/candidate-stappenplan" } },
    d = {},
    l = [
     { value: "CSS", id: "css", level: 2 },
     { value: "Publiek beschikbaar", id: "publiek-beschikbaar", level: 2 },
     { value: "Implementatie", id: "implementatie", level: 2 },
     { value: "Minimale design tokens", id: "minimale-design-tokens", level: 2 },
     { value: "Naamgeving design tokens", id: "naamgeving-design-tokens", level: 2 },
     { value: "Licentie component", id: "licentie-component", level: 2 },
     { value: "Licentie documentatie", id: "licentie-documentatie", level: 2 },
     { value: "Prefix", id: "prefix", level: 2 },
     { value: "Storybook met NL Design System thema&#39;s", id: "storybook-met-nl-design-system-themas", level: 2 },
     { value: "Visuele regressietests", id: "visuele-regressietests", level: 2 },
     { value: "Figma bibliotheek", id: "figma-bibliotheek", level: 2 },
     { value: "Component index", id: "component-index", level: 2 },
     { value: "Component assessment", id: "component-assessment", level: 2 },
     { value: "Status naar Community", id: "status-naar-community", level: 2 },
     { value: "Promotie", id: "promotie", level: 2 },
     { value: "Afbeelding maken", id: "afbeelding-maken", level: 3 },
     { value: "Slack", id: "slack", level: 3 },
     { value: "Communityleden selecteren voor credits", id: "communityleden-selecteren-voor-credits", level: 3 },
     { value: "Heartbeat, Nieuwsbrief en LinkedIn", id: "heartbeat-nieuwsbrief-en-linkedin", level: 3 },
     { value: "\ud83c\udfc1 Finish", id: "-finish", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", code: "code", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", (0, t.jsx)(n.h1, { id: "stappenplan-community", children: "Stappenplan: Community" }), "\n", (0, t.jsxs)(n.p, { children: ["Volg dit stappenplan om een component van alle checkpoints \ud83d\udea9 te voorzien die nodig zijn voor de ", (0, t.jsx)(n.a, { href: "https://github.com/orgs/nl-design-system/projects/29", children: "'Community' status" }), " van het ", (0, t.jsx)(n.a, { href: "https://www.nldesignsystem.nl/componenten/definition-of-done", children: "Estafettemodel" }), "."] }), "\n", (0, t.jsxs)(n.p, { children: ["Heb je een vraag? Twijfel niet en stel je vraag via het ", (0, t.jsx)(n.a, { href: "https://praatmee.codefor.nl/", children: "#nl-design-system Slack kanaal" }), " van CodeForNL of ", (0, t.jsx)(n.a, { href: "/project/kernteam", children: "neem contact op met het kernteam" }), "."] }), "\n", (0, t.jsx)(n.h2, { id: "css", children: "CSS" }), "\n", (0, t.jsx)(n.p, { children: "Doel: De component kan ingezet worden in een framework naar keuze." }), "\n", (0, t.jsx)(n.p, { children: "De component moet beschikbaar zijn in code. Minimaal als HTML/CSS." }), "\n", (0, t.jsx)(n.p, { children: "Ontwikkel de component zelf of controleer de Storybook en/of GitHub omgevingen van organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Beschikbaar in CSS."] }), "\n", (0, t.jsx)(n.h2, { id: "publiek-beschikbaar", children: "Publiek beschikbaar" }), "\n", (0, t.jsx)(n.p, { children: "Doel: Men kan de component vinden, bekijken, gebruiken, forken en verbeteren." }), "\n", (0, t.jsx)(n.p, { children: "De component moet publiek beschikbaar zijn in Storybook." }), "\n", (0, t.jsx)(n.p, { children: "Plaats de component in de Storybook omgeving van jouw organisatie. Of controleer de Storybook omgevingen van organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsx)(n.p, { children: "De Storybook omgeving moet te bekijken zijn zonder te hoeven inloggen." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Publiek beschikbaar in Storybook."] }), "\n", (0, t.jsx)(n.h2, { id: "implementatie", children: "Implementatie" }), "\n", (0, t.jsx)(n.p, { children: "Doel: De component is de component dat we als kernteam verwachten." }), "\n", (0, t.jsx)(n.p, { children: "In de GitHub Discussion van de component staan de naam en het doel genoteerd. Check of de implementatie van jouw organisatie hieraan voldoet. Of controleer de implementaties van organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsxs)(n.p, { children: ["Noteer de implementatie bijvoorbeeld ", (0, t.jsx)(n.code, { children: "utrecht-paragraph" }), " of ", (0, t.jsx)(n.code, { children: "ams-paragraph" }), " in de kolom voor 'Implementatie'."] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Tip!" }), " Met implementatie bedoelen we bijvoorbeeld ", (0, t.jsx)(n.code, { children: "utrecht-button" }), " of ", (0, t.jsx)(n.code, { children: "ams-button" }), ". Een specifiek type van een implementatie, bijvoorbeeld ", (0, t.jsx)(n.code, { children: "zonnedael-sparkly-button" }), ", noemen we een variant."] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Implementatie voldoet aan naam en doel uit de GitHub Discussion."] }), "\n", (0, t.jsx)(n.h2, { id: "minimale-design-tokens", children: "Minimale design tokens" }), "\n", (0, t.jsx)(n.p, { children: "Doel: Meerdere organisaties kunnen de component naar hun huisstijl omzetten." }), "\n", (0, t.jsxs)(n.p, { children: ["Door met ", (0, t.jsx)(n.a, { href: "/handboek/design-tokens/", children: "design tokens" }), " te werken zorgen we ervoor dat meerdere organisaties de component van een eigen huisstijl kunnen voorzien. Minimaal zouden er design tokens beschikbaar moeten zijn om kleur en typografie beslissingen door te voeren."] }), "\n", (0, t.jsx)(n.p, { children: "Zorg ervoor dat de component van jouw organisatie gebruik maakt van design tokens. Of controleer de implementaties van organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Tip!" }), " Om te controleren of er design tokens zijn toegepast kun je gebruik maken van de 'Inspect' functionaliteit van je browser. Wanneer je in de CSS verwijzingen ziet naar CSS variabelen zoals bijvoorbeeld ", (0, t.jsx)(n.code, { children: "--denhaag-button-primary-action-background-color" }), " of ", (0, t.jsx)(n.code, { children: "--ams-button-font-family" }), " kun je er vanuit gaan dat er design tokens zijn gebruikt."] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Implementatie heeft minimaal kleur en typografie beslissingen met design tokens gebruikt."] }), "\n", (0, t.jsx)(n.h2, { id: "naamgeving-design-tokens", children: "Naamgeving design tokens" }), "\n", (0, t.jsx)(n.p, { children: "Doel: Een voorspelbare naamgeving van design tokens." }), "\n", (0, t.jsxs)(n.p, { children: ["Voor NL Design System zijn er afspraken gemaakt voor duidelijke en voorspelbare namen. De beschikbare design tokens van een component moeten voldoen aan ", (0, t.jsx)(n.a, { href: "https://www.nldesignsystem.nl/handboek/design-tokens/#naamgeving", children: "de naamgeving conventie van NL Design System" }), ". Zo is een component herbruikbaar voor alle verschillende thema's."] }), "\n", (0, t.jsx)(n.p, { children: "Zorg ervoor dat de design tokens van de component van jouw organisatie voldoen aan de naamgeving conventie. Of controleer de implementaties van organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Gebruikte design tokens voldoen aan naamgeving conventie van NL Design System."] }), "\n", (0, t.jsx)(n.h2, { id: "licentie-component", children: "Licentie component" }), "\n", (0, t.jsx)(n.p, { children: "Doel: De component mag door andere organisaties gebruikt worden. Producten die ermee gemaakt worden hoeven niet per se open source te zijn." }), "\n", (0, t.jsxs)(n.p, { children: ["Binnen het NL Design System werken we voor componenten met de ", (0, t.jsx)(n.a, { href: "https://nldesignsystem.nl/open-source/eupl/", children: "Openbare Licentie van de Europese Unie (EUPL-1.2)" }), "."] }), "\n", (0, t.jsx)(n.p, { children: "Zorg ervoor dat jouw organisatie naar de EUPL-1.2 licentie verwijst op de onderstaande posities. Of controleer de organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: "GitHub repository" }), ": Als \xe9\xe9n van de repository details onder 'About' in de sidebar."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: "Package in npm" }), ": Onder 'License' in de sidebar."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: "Storybook" }), ": Als een aparte pagina binnen de sidebar, of binnen de introductiepagina danwel README."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: "Figma" }), " (optioneel): Op de cover of direct naast de cover van de Figma bibliotheek."] }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": EUPL-1.2 licentie toegepast."] }), "\n", (0, t.jsx)(n.h2, { id: "licentie-documentatie", children: "Licentie documentatie" }), "\n", (0, t.jsx)(n.p, { children: "Doel: De documentatie van een component mag door andere organisaties hergebruikt of gecombineerd worden zonder enige bronvermelding." }), "\n", (0, t.jsxs)(n.p, { children: ["Binnen het NL Design System werken we voor de documentatie met de ", (0, t.jsx)(n.a, { href: "https://nldesignsystem.nl/open-source/cc0", children: "Creative Commons 0 licentie (CC0)" }), "."] }), "\n", (0, t.jsx)(n.p, { children: "Zorg ervoor dat jouw organisatie de CC0 licentie benoemt in het README.md bestand van de component in GitHub. Of controleer de organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Tip!" }), " Door de 'Code' of 'Raw' weergave van het README.md bestand te bekijken zou je bovenaan ", (0, t.jsx)(n.code, { children: "\x3c!-- @license CC0-1.0 --\x3e" }), " moeten zien staan."] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Documentatie heeft de Creative Commons 0 licentie (CC0)."] }), "\n", (0, t.jsx)(n.h2, { id: "prefix", children: "Prefix" }), "\n", (0, t.jsx)(n.p, { children: "Doel: Organisaties kunnen componenten naast elkaar gebruiken zonder 'clashes'. Developers en designers kunnen zien waar de component vandaan komt." }), "\n", (0, t.jsxs)(n.p, { children: ["Om componenten van elkaar te kunnen gebruiken is het toevoegen van een prefix zoals bijvoorbeeld ", (0, t.jsx)(n.code, { children: "utrecht-" }), " of ", (0, t.jsx)(n.code, { children: "ams-" }), " verplicht."] }), "\n", (0, t.jsx)(n.p, { children: "Zorg ervoor dat de prefix van jouw organisatie is toegevoegd aan onderstaande onderdelen. Of controleer de organisaties die aan de GitHub Discussion van de component zijn toegevoegd." }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "CSS class selectors." }), "\n", (0, t.jsx)(n.li, { children: "Design tokens in JSON." }), "\n", (0, t.jsx)(n.li, { children: "CSS variables." }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": API's hebben een prefix van de verantwoordelijke organisatie."] }), "\n", (0, t.jsx)(n.h2, { id: "storybook-met-nl-design-system-themas", children: "Storybook met NL Design System thema's" }), "\n", (0, t.jsx)(n.p, { children: "Doel: De component wordt beschikbaar voor andere organisaties." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: "/project/kernteam", children: "Neem contact op met het kernteam" }), " om deze stap uit te voeren."] }), "\n", (0, t.jsxs)(n.p, { children: ["Het kernteam maakt de component beschikbaar in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/themes", children: "'Themes' repository" }), ", waardoor deze terug te vinden is in de ", (0, t.jsx)(n.a, { href: "https://nl-design-system.github.io/themes/", children: "Storybook met alle NL Design System thema's" }), ". Andere organisaties kunnen vervolgens de component gaan gebruiken."] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Beschikbaar in de ", (0, t.jsx)(n.a, { href: "https://nl-design-system.github.io/themes/", children: "Storybook met alle NL Design System thema's" }), "."] }), "\n", (0, t.jsx)(n.h2, { id: "visuele-regressietests", children: "Visuele regressietests" }), "\n", (0, t.jsx)(n.p, { children: "Doel: De component wordt voorzien van het Voorbeeld thema, en organisaties worden ge\xefnformeerd wanneer aanpassingen in de component gevolgen hebben voor hun thema." }), "\n", (0, t.jsx)(n.p, { children: "Deze stap kan alleen worden uitgevoerd door het kernteam." }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Component wordt voorzien van het Voorbeeld thema." }), "\n", (0, t.jsx)(n.li, { children: "Communiceren dat men de component kan gaan gebruiken en dat daar automatisch visuele regressietests op zullen plaatsvinden." }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Visuele regressietests zijn beschikbaar in de Thema Storybook."] }), "\n", (0, t.jsx)(n.h2, { id: "figma-bibliotheek", children: "Figma bibliotheek" }), "\n", (0, t.jsxs)(n.p, { children: ["Doel: De component wordt beschikbaar in de ", (0, t.jsx)(n.a, { href: "https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=450-4121&t=AKzhgDPYAKNI1gaT-1", children: "NL Design System Figma bibliotheek" }), ". Designers van andere organisaties kunnen de component overnemen en gaan gebruiken."] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: "/project/kernteam", children: "Neem contact op met het kernteam" }), " om deze stap uit te voeren."] }), "\n", (0, t.jsx)(n.p, { children: "Het kernteam neemt de component over uit de Figma omgeving van jouw organisatie, inclusief bijbehorende design tokens, en plaatst deze in de NL Design System Figma bibliotheek. Daarbij wordt de component voorzien van het Voorbeeld thema. Als er geen Figma component is, dan ontwikkelt het kernteam dit zelf." }), "\n", (0, t.jsx)(n.p, { children: "Organisaties die de NL Design System Figma bibliotheek vanaf dat moment dupliceren, krijgen de component direct meegeleverd. Organisaties die de NL Design System Figma bibliotheek al hadden gedupliceerd, worden tijdens de volgende 'Bieb sync video' ge\xefnformeerd over hoe ze dit component ook kunnen overnemen." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Beschikbaar in de NL Design System Figma bibliotheek."] }), "\n", (0, t.jsx)(n.h2, { id: "component-index", children: "Component index" }), "\n", (0, t.jsx)(n.p, { children: "Doel: Op nldesignsystem.nl zijn er verwijzingen beschikbaar naar de component met het Voorbeeld thema." }), "\n", (0, t.jsx)(n.p, { children: "Deze stap kan alleen worden uitgevoerd door het kernteam." }), "\n", (0, t.jsxs)(n.p, { children: ["Het kernteam vult de component index aan met links naar de component met het Voorbeeld thema. We verwijzen hierbij naar de component in de ", (0, t.jsx)(n.a, { href: "https://nl-design-system.github.io/themes/", children: "Storybook met alle NL Design System thema's" }), " en de ", (0, t.jsx)(n.a, { href: "https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=450-4121&t=AKzhgDPYAKNI1gaT-1", children: "NL Design System Figma bibliotheek" }), "."] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Storybook en Figma links zijn toegevoegd aan de component index."] }), "\n", (0, t.jsx)(n.h2, { id: "component-assessment", children: "Component assessment" }), "\n", (0, t.jsx)(n.p, { children: "Doel: Organisaties worden bij een onboarding snel naar de juiste component verwezen." }), "\n", (0, t.jsx)(n.p, { children: "Deze stap kan alleen worden uitgevoerd door het kernteam." }), "\n", (0, t.jsxs)(n.p, { children: ["Het kernteam voegt een 'Component sticker' toe aan het Figma bestand '", (0, t.jsx)(n.a, { href: "https://www.figma.com/design/NLbNbckFo9manEihRFeJmR/NL-Design-System---Component-Assessment?m=auto&t=J0gWvRWoyCJhSqot-6", children: "NL Design System Component assessment" }), "'. Deze sticker linkt naar de documentatiepagina van de component op nldesignsystem.nl."] }), "\n", (0, t.jsx)(n.p, { children: "Door deze 'Component stickers' op screenshots te plakken, kan het kernteam ge\xefnteresseerden organisaties inzicht bieden welke componenten beschikbaar zijn om hun website of applicatie mee op te bouwen." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Beschikbaar in de NL Design System Component assessment (Figma)."] }), "\n", (0, t.jsx)(n.h2, { id: "status-naar-community", children: "Status naar Community" }), "\n", (0, t.jsx)(n.p, { children: "Doel: iedereen kan zien dat de component nu richting Candidate wil." }), "\n", (0, t.jsx)(n.p, { children: "Deze stap kan enkel worden uitgevoerd door het kernteam." }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Verander het 'Help Wanted' label van het backlog issue naar 'Community'." }), "\n", (0, t.jsx)(n.li, { children: "Verander het 'Help Wanted' label van de GitHub Discussion naar 'Community'." }), "\n", (0, t.jsxs)(n.li, { children: ["Filter het ", (0, t.jsx)(n.a, { href: "https://github.com/orgs/nl-design-system/projects/29/views/1", children: "Candidate bord" }), " op de component door op ", (0, t.jsx)(n.code, { children: "Component: {naam-component}" }), " te zoeken."] }), "\n", (0, t.jsx)(n.li, { children: "Kopieer de URL na het filteren." }), "\n", (0, t.jsx)(n.li, { children: "Voeg onderstaande tekst toe als comment aan de GitHub Discussion." }), "\n"] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-md", children: "## \u2728 Dit component is nu Community \u2728\n\nHelp je mee hem door de Candidate stappen te krijgen?\n[{naam-component} op het Candidate bord]({url-candidate-bord})\n" }) }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Status bijgewerkt naar Community."] }), "\n", (0, t.jsx)(n.h2, { id: "promotie", children: "Promotie" }), "\n", (0, t.jsx)(n.p, { children: "Doel: Credits geven aan mensen die hebben bijgedragen vanuit de community. De rest van community informeren en enthousiasmeren om ook naar Community, Candidate en Hall of Fame toe te werken." }), "\n", (0, t.jsx)(n.p, { children: "Deze stap kan enkel worden uitgevoerd door het kernteam." }), "\n", (0, t.jsx)(n.h3, { id: "afbeelding-maken", children: "Afbeelding maken" }), "\n", (0, t.jsx)(n.p, { children: "Het kernteam maakt een afbeelding waarbij de component in twee thema's wordt getoond: \xe9\xe9n thema gebaseerd op een huisstijl uit de community en \xe9\xe9n keer met het Voorbeeld thema." }), "\n", (0, t.jsx)(n.h3, { id: "slack", children: "Slack" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Zeg het volgende in #nl-design-system." }), "\n"] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-md", children: "\u2728 {naam-component} is nu Community \u2728\n\n[Bekijk {naam-component} op nldesignsystem.nl]({link-naar-component-op-nldesignsystem.nl})\n\nHelp ons de component naar Candidate te brengen door ons in de [GitHub Discussion voor het {naam-component} component]({link-naar-discussion}) te laten weten waar je het gebruikt.\n" }) }), "\n", (0, t.jsx)(n.h3, { id: "communityleden-selecteren-voor-credits", children: "Communityleden selecteren voor credits" }), "\n", (0, t.jsx)(n.p, { children: "Het kernteam selecteert communityleden om credits aan uit te delen. Denk bijvoorbeeld aan de maintainer van Storybook en de betrokken designer." }), "\n", (0, t.jsx)(n.h3, { id: "heartbeat-nieuwsbrief-en-linkedin", children: "Heartbeat, Nieuwsbrief en LinkedIn" }), "\n", (0, t.jsx)(n.p, { children: "Het kernteam benadert de organisatie die de component heeft ontwikkeld. We vragen of zij de component tijdens een Heartbeat willen presenteren. Mocht dit niet mogelijk zijn doen wij dit als kernteam zelf." }), "\n", (0, t.jsx)(n.p, { children: "Daarnaast plaatsen we een bericht in de nieuwsbrief en op LinkedIn. Daarin nemen we de volgende elementen in op:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Link naar component op nldesignsystem.nl." }), "\n", (0, t.jsx)(n.li, { children: "Link naar GitHub Discussion." }), "\n", (0, t.jsx)(n.li, { children: "Credits." }), "\n", (0, t.jsx)(n.li, { children: "Eventueel in combinatie met een kort interview." }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "\ud83d\udea9 Checkpoint" }), ": Gebruik van component uit de community gepromoot."] }), "\n", (0, t.jsx)(n.h2, { id: "-finish", children: "\ud83c\udfc1 Finish" }), "\n", (0, t.jsxs)(n.p, { children: ["Zo wat een werk! Je hebt alle stappen genomen en je hebt alle checkpoints kunnen afvinken die nodig zijn voor de ", (0, t.jsx)(n.a, { href: "https://github.com/orgs/nl-design-system/projects/29/views/1", children: "'Community' status" }), " van het ", (0, t.jsx)(n.a, { href: "https://www.nldesignsystem.nl/componenten/definition-of-done", children: "Estafettemodel" }), ". De component gaat nu door voor de 'Candidate' status."] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => r, a: () => a });
   var t = i(75271);
   const o = {},
    s = t.createContext(o);
   function a(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
