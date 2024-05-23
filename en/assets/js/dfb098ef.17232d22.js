"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7780],
 {
  64129: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => s, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => c });
   var o = i(52676),
    t = i(24785),
    a = i(42143);
   const r = { title: "Zelf componenten maken", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zelf componenten maken", sidebar_position: 4, pagination_label: "Zelf componenten maken", description: "Handboek hoe je zelf componenten kan maken in Figma met design tokens.", keywords: ["index", "designer", "meedoen", "componenten", "figma"] },
    l = "Zelf componenten maken",
    d = { id: "handboek/designer/zelf-componenten-maken", title: "Zelf componenten maken", description: "Handboek hoe je zelf componenten kan maken in Figma met design tokens.", source: "@site/docs/handboek/designer/zelf-componenten-maken.mdx", sourceDirName: "handboek/designer", slug: "/handboek/designer/zelf-componenten-maken", permalink: "/en/handboek/designer/zelf-componenten-maken", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/zelf-componenten-maken.mdx", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Zelf componenten maken", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zelf componenten maken", sidebar_position: 4, pagination_label: "Zelf componenten maken", description: "Handboek hoe je zelf componenten kan maken in Figma met design tokens.", keywords: ["index", "designer", "meedoen", "componenten", "figma"] }, sidebar: "handboek", previous: { title: "Stappenplan", permalink: "/en/handboek/designer/stappenplan" }, next: { title: "Voorbeeld thema", permalink: "/en/handboek/designer/voorbeeld-thema" } },
    s = {},
    c = [
     { value: "Demo sticker maken", id: "demo-sticker-maken", level: 2 },
     { value: "Pagina voorbereiden", id: "pagina-voorbereiden", level: 3 },
     { value: "Component maken", id: "component-maken", level: 3 },
     { value: "Component van huisstijl voorzien", id: "component-van-huisstijl-voorzien", level: 3 },
     { value: "Tokens Studio plugin gebruiken", id: "tokens-studio-plugin-gebruiken", level: 4 },
     { value: "Token naamgeving", id: "token-naamgeving", level: 4 },
     { value: "Kleur (color) tokens aanmaken", id: "kleur-color-tokens-aanmaken", level: 4 },
     { value: "Kleur tokens koppelen", id: "kleur-tokens-koppelen", level: 4 },
     { value: "Ruimte (spacing) tokens aanmaken", id: "ruimte-spacing-tokens-aanmaken", level: 4 },
     { value: "Ruimte tokens aan component koppelen", id: "ruimte-tokens-aan-component-koppelen", level: 4 },
     { value: "Typografie tokens aanmaken", id: "typografie-tokens-aanmaken", level: 4 },
     { value: "Typografie tokens aan component koppelen", id: "typografie-tokens-aan-component-koppelen", level: 4 },
     { value: "Tokens aanpassen of nieuwe tokens maken", id: "tokens-aanpassen-of-nieuwe-tokens-maken", level: 3 },
     { value: "Varianten maken", id: "varianten-maken", level: 3 },
     { value: "Border tokens aanmaken", id: "border-tokens-aanmaken", level: 4 },
     { value: "Border tokens aan component koppelen", id: "border-tokens-aan-component-koppelen", level: 4 },
     { value: "Afronden", id: "afronden", level: 3 },
     { value: "Demo sticker documenteren", id: "demo-sticker-documenteren", level: 2 },
     { value: "Demo card maken", id: "demo-card-maken", level: 2 },
     { value: "Demo card documenteren", id: "demo-card-documenteren", level: 2 },
     { value: "Help deze documentatie te verbeteren", id: "help-deze-documentatie-te-verbeteren", level: 2 },
     { value: "Vragen", id: "vragen", level: 2 },
    ];
   function k(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", hr: "hr", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: "zelf-componenten-maken", children: "Zelf componenten maken" }), "\n", (0, o.jsx)(n.p, { children: "De Figma bibliotheek van het NL Design System bevat vast (nog) niet alle componenten die nodig zijn voor jouw organisatie. Je kunt zelf componenten gaan opbouwen of de bestaande componenten van jouw organisatie aanpassen. Hoe dan ook, het is het fijn als je dit doet op basis van de NL Design System structuur. Open-source en met design tokens, inclusief de juiste naamgeving. Zo kunnen componenten binnen de community met elkaar worden uitgewisseld." }), "\n", (0, o.jsx)(n.p, { children: "Aan de hand van twee fictieve lokale componenten (Demo sticker en Demo card) laten we zien hoe je jouw componenten van design tokens voorziet volgens de NL Design System structuur." }), "\n", (0, o.jsxs)(n.p, { children: ["Voordat je begint is het verstandig dat je het ", (0, o.jsx)(n.a, { href: "/en/handboek/designer/stappenplan", children: "stappenplan" }), " hebt doorlopen. Heb je een vraag? Twijfel niet en ", (0, o.jsx)(n.a, { href: "/en/project/kernteam", children: "neem contact op met het kernteam" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "demo-sticker-maken", children: "Demo sticker maken" }), "\n", (0, o.jsx)(n.p, { children: "In deze video laten we zien hoe je de 'Demo sticker' kan opbouwen met design tokens. Daaronder staat dit ook als tekst beschreven." }), "\n", (0, o.jsx)(a.Y, { videoId: "cN37hd7KWMY" }), "\n", (0, o.jsx)(n.h3, { id: "pagina-voorbereiden", children: "Pagina voorbereiden" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Open jouw Local - [Organisatie] - Bibliotheek." }), "\n", (0, o.jsx)(n.li, { children: "Voeg een nieuwe pagina toe en noem deze \u2018Demo sticker\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Plaats deze pagina in alfabetische volgorde." }), "\n"] }), "\n", (0, o.jsx)(n.h3, { id: "component-maken", children: "Component maken" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Verzamel de benodigde elementen (label en een icoon). Maak daarbij zo veel mogelijk gebruik van jouw [Organisatie] - Bibliotheek die je hebt gekoppeld aan je Local Bibliotheek." }), "\n", (0, o.jsx)(n.li, { children: "Maak een component van de verzamelde elementen (Mac: \u2325 Option - \u2318 Command - K of Windows: Ctrl + Alt + K)." }), "\n", (0, o.jsx)(n.li, { children: "Noem het component \u2018[organisatie]-demo-sticker\u2019." }), "\n"] }), "\n", (0, o.jsx)(n.h3, { id: "component-van-huisstijl-voorzien", children: "Component van huisstijl voorzien" }), "\n", (0, o.jsx)(n.p, { children: "Je kunt een component van huisstijl voorzien zoals je dat gewend bent (Shared Styles, Auto-layout, Variables). Zolang je deze designkeuzes uiteindelijk maar vastlegt via Token Studio. Hierdoor zijn je design tokens te koppelen met code. We vervolgen deze uitleg door direct te werken met de Tokens Studio plugin." }), "\n", (0, o.jsx)(n.h4, { id: "tokens-studio-plugin-gebruiken", children: "Tokens Studio plugin gebruiken" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Open de Tokens Studio plugin." }), "\n", (0, o.jsx)(n.li, { children: "Maak binnen \u2018components\u2019 een nieuwe set aan en noem deze \u2018components/demo-sticker\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Plaats dit component in alfabetische volgorde door het te slepen." }), "\n", (0, o.jsx)(n.li, { children: "Zet de checkbox van demo-sticker aan." }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "token-naamgeving", children: "Token naamgeving" }), "\n", (0, o.jsxs)(n.p, { children: ["Gebruik de ", (0, o.jsx)(n.a, { href: "https://www.nldesignsystem.nl/handboek/design-tokens/", children: "documentatie over de naamgeving" }), ". Hierin staat hoe je naamgeving van component tokens op kan bouwen."] }), "\n", (0, o.jsx)(n.h4, { id: "kleur-color-tokens-aanmaken", children: "Kleur (color) tokens aanmaken" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Voor een achtergrondkleur:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Klik bij \u2018Color\u2019 op het plusje." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe achtergrondkleur token \u2018[organisatie].demo-sticker.background-color\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies bij \u2018Color\u2019 een kleur uit je common of brand niveau en klik op \u2018Create\u2019. We kiezen voor nu een kleur uit het brand niveau." }), "\n"] }), "\n"] }), "\n", (0, o.jsxs)(n.li, { children: ["Voor een voorgrondkleur:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Dupliceer het achtergrondkleur token. Op deze manier hoef je de naam niet in z\u2019n geheel opnieuw te schrijven." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe voorgrondkleur token \u2018[organisatie].demo-sticker.color\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies opnieuw een kleur naar keuze en klik op \u2018Create\u2019." }), "\n"] }), "\n"] }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "kleur-tokens-koppelen", children: "Kleur tokens koppelen" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Koppel de achtergrondkleur:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Selecteer de juiste laag. In dit geval is dat het hele component." }), "\n", (0, o.jsx)(n.li, { children: "Klik op het aangemaakte achtergrondkleur token of gebruik rechtermuisklik en kies voor \u2018Fill\u2019." }), "\n"] }), "\n"] }), "\n", (0, o.jsxs)(n.li, { children: ["Koppel de voorgrondkleur:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Selecteer de lagen \u2018Label\u2019 en \u2018Shape\u2019 (gebruik diepe selectie: Mac: \u2318 Command of Windows: Control)." }), "\n", (0, o.jsx)(n.li, { children: "Klik op het aangemaakte voorgrondkleur token." }), "\n"] }), "\n"] }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "ruimte-spacing-tokens-aanmaken", children: "Ruimte (spacing) tokens aanmaken" }), "\n", (0, o.jsxs)(n.p, { children: ["Gebruik de ", (0, o.jsx)(n.a, { href: "https://www.nldesignsystem.nl/richtlijnen/stijl/ruimte", children: "documentatie over de ruimte" }), ". Hierin staat informatie over de spacing scale en concepten."] }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Voor inline:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Klik bij \u2018Spacing\u2019 op het plusje." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe token \u2018[organisatie].demo-sticker.padding-inline\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies bij \u2018Value\u2019 een waarde uit je common of brand laag en klik op \u2018Create\u2019. Tip: typ \u2018{inline\u2019 om gebruik te maken van autosuggestie." }), "\n"] }), "\n"] }), "\n", (0, o.jsxs)(n.li, { children: ["Voor block:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Dupliceer de inline token." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe token \u2018[organisatie].demo-sticker.padding-block\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies opnieuw een waarde naar keuze en klik op \u2018Create\u2019." }), "\n"] }), "\n"] }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "ruimte-tokens-aan-component-koppelen", children: "Ruimte tokens aan component koppelen" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Selecteer de juiste laag. In dit geval is dat het hele component." }), "\n", (0, o.jsx)(n.li, { children: "Gebruik rechtermuisklik bij de inline token en klik op \u2018Left\u2019 en \u2018Right\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Gebruik rechtermuisklik bij de block token en klik op \u2018Top\u2019 en \u2018Bottom\u2019." }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "typografie-tokens-aanmaken", children: "Typografie tokens aanmaken" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Voor font family:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Klik bij \u2018Font Family\u2019 op het plusje." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe typografie token \u2018[organisatie].demo-sticker.font-family\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies bij \u2018Font Family\u2019 voor een typografie uit het common niveau en klik op \u2018Create\u2019." }), "\n"] }), "\n"] }), "\n", (0, o.jsxs)(n.li, { children: ["Voor font weight:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Om de dikte van het woord \u2018Label\u2019 te bepalen, klik je bij \u2018Font Weight\u2019 op het plusje." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe typografie token \u2018[organisatie].demo-sticker.font-weight\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies bij \u2018Font Size\u2019 een grootte uit het common niveau en klik op \u2018Create\u2019." }), "\n"] }), "\n"] }), "\n", (0, o.jsxs)(n.li, { children: ["Voor font size en line height:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Herhaal bovenstaande stappen met tokens uit het common niveau." }), "\n"] }), "\n"] }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "typografie-tokens-aan-component-koppelen", children: "Typografie tokens aan component koppelen" }), "\n", (0, o.jsx)(n.p, { children: "Selecteer de laag \u2018Label\u2019 en klik op de aangemaakte typografie tokens." }), "\n", (0, o.jsx)(n.h3, { id: "tokens-aanpassen-of-nieuwe-tokens-maken", children: "Tokens aanpassen of nieuwe tokens maken" }), "\n", (0, o.jsx)(n.p, { children: "Voeg indien nodig tokens toe voor bijvoorbeeld de spacing tussen het icoon en het label, of voor de grootte van het icoon." }), "\n", (0, o.jsx)(n.h3, { id: "varianten-maken", children: "Varianten maken" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Geef de achtergrondkleur van de component set de document.background-color uit het common niveau. Tip: dit is handig wanneer je ooit met dark-mode gaat werken. De achtergrondkleur kleurt dan mee." }), "\n", (0, o.jsx)(n.li, { children: "Pas auto-layout toe het component met varianten. Kies 48px voor de vertical gap, horizontal padding en vertical padding." }), "\n", (0, o.jsx)(n.li, { children: "Verander de naam van de property in overleg met je developer (bijv. \u2018Appearance\u2019). Tip: kijk hoe de properties worden genoemd bij andere componenten die ook meerdere varianten hebben." }), "\n", (0, o.jsx)(n.li, { children: "Hernoem de varianten naar \u2018Default\u2019 en \u2018Hyper\u2019." }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "border-tokens-aanmaken", children: "Border tokens aanmaken" }), "\n", (0, o.jsx)(n.p, { children: "Als voorbeeld voegen we enkel border tokens toe aan de 'hyper' variant." }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Voor border kleur:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Dupliceer het voorgrondkleur token." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe border token \u2018[organisatie].demo-sticker.hyper.border-color\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies bij \u2018Color\u2019 een kleur uit je common of brand niveau en klik op \u2018Create\u2019. We kiezen voor nu een kleur uit het brand niveau." }), "\n"] }), "\n"] }), "\n", (0, o.jsxs)(n.li, { children: ["Voor border width:", "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Klik bij \u2018Border Width\u2019 op het plusje." }), "\n", (0, o.jsx)(n.li, { children: "Noem het nieuwe border token \u2018[organisatie].demo-sticker.hyper.border-width\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Kies bij \u2018Border Width\u2019 voor een dikte uit het brand of common niveau en klik op \u2018Create\u2019." }), "\n"] }), "\n"] }), "\n"] }), "\n", (0, o.jsx)(n.h4, { id: "border-tokens-aan-component-koppelen", children: "Border tokens aan component koppelen" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Selecteer de variant \u2018Hyper\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Gebruik rechtermuisklik bij het border kleur token en klik op \u2018Border\u2019." }), "\n", (0, o.jsx)(n.li, { children: "Gebruik rechtermuisklik bij het border width token en klik op \u2018All\u2019." }), "\n"] }), "\n", (0, o.jsx)(n.h3, { id: "afronden", children: "Afronden" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Je bent klaar met het opbouwen van je component met design tokens!" }), "\n", (0, o.jsx)(n.li, { children: "De volgende stap is om de tokens inzichtelijk te maken voor anderen door ze te documenteren." }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "demo-sticker-documenteren", children: "Demo sticker documenteren" }), "\n", (0, o.jsx)(n.p, { children: "In deze video laten we zien hoe je de design tokens van de 'Demo sticker' kan documenteren." }), "\n", (0, o.jsx)(a.Y, { videoId: "2_SzboMo15c" }), "\n", (0, o.jsx)(n.h2, { id: "demo-card-maken", children: "Demo card maken" }), "\n", (0, o.jsx)(n.p, { children: "In deze video laten we zien hoe je de 'Demo card' kan opbouwen met design tokens." }), "\n", (0, o.jsx)(a.Y, { videoId: "UbrN67pU0dk" }), "\n", (0, o.jsx)(n.h2, { id: "demo-card-documenteren", children: "Demo card documenteren" }), "\n", (0, o.jsx)(n.p, { children: "In deze video laten we zien hoe je de design tokens van de 'Demo card' kan documenteren." }), "\n", (0, o.jsx)(a.Y, { videoId: "w_5ITXBx8kE" }), "\n", (0, o.jsx)(n.hr, {}), "\n", (0, o.jsx)(n.h2, { id: "help-deze-documentatie-te-verbeteren", children: "Help deze documentatie te verbeteren" }), "\n", (0, o.jsxs)(n.p, { children: ["Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie", children: "Github" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "vragen", children: "Vragen" }), "\n", (0, o.jsxs)(n.p, { children: ["Heb je een vraag? Twijfel niet en ", (0, o.jsx)(n.a, { href: "/en/project/kernteam", children: "neem contact op met het kernteam" }), "."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(k, { ...e }) }) : k(e);
   }
  },
  42143: (e, n, i) => {
   i.d(n, { Y: () => d });
   var o = i(4814),
    t = (i(75271), i(95110)),
    a = i.n(t);
   const r = { "video-player": "video-player__6fg" };
   var l = i(52676);
   const d = (e) => {
    let { videoId: n, className: i, ...t } = e;
    return (0, l.jsx)(a(), { url: `https://youtube.com/watch?v=${n}`, className: `${(0, o.Z)(r["video-player"])} ${i}`, width: "100%", height: "100%", controls: !0, ...t, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
