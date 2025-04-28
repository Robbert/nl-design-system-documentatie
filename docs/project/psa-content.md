# Toegankelijke content: Project Start Architectuur voor Expertteam Digitale Toegankelijkheid

## Status

Status: Concept.

Datum: 28 april 2025.

| Versie | Datum         | Auteur           | Status  |
| ------ | ------------- | ---------------- | ------- |
| 0.4.2  | 28 april 2025 | Robbert Broersma | Concept |

### Versie 0.4.2

Eerste concept-versie, gebaseerd op de [NORA PSA sjabloon](<https://www.noraonline.nl/wiki/Webversie_PSA_Format#1_Managementsamenvatting_(max_1_A4)%3E>).
Afgestemd met:

- Yolijn van der Kolk, Product Manager

## 1. Managementsamenvatting

De Nederlandse overheid moet voldoen aan standaarden voor digitale toegankelijkheid. Daarom moeten alle overheidsinstellingen problemen met digitale toegankelijkheid voorkomen of oplossen. De naleving wordt getoetst met periodieke onderzoeksrapporten. Daaruit blijkt: **content van websites is vaak niet voldoende toegankelijk**.

Uit onderzoek blijkt dat contentmakers vaak niet op de hoogte zijn van problemen, waardoor ze ontoegankelijke content publiceren. Sommige contentmakers zijn zich er wel bewust van, maar het blijkt dat de foutmeldingen niet duidelijk zijn en dat niet duidelijk is wat de oplossing moet zijn.

We zoeken dus een oplossing waarmee de belangrijkste problemen in content voorkomen en opgelost kunnen worden. Deze oplossing moet waar mogelijk problemen herkennen en voorkomen, en waar nodig de contentmakers tijdens het publicatieproces helpen met begrijpelijke instructies en documentatie.

Een deel van deze problemen kan automatisch herkend worden, waardoor je een waarschuwing kan geven om het de content te verbeteren en dan pas te publiceren. Sommige toegankelijkheidsproblemen kunnen niet automatisch herkend worden, maar die kunnen opgelost worden door extra handmatige stappen in het publicatieproces.

<!-- Content meer toegankelijk maken kan op door contentmakers ondersteunen bij toegankelijke content maken, en door te voorkomen dat in een webpagina's met toegankelijkheidsproblemen worden gepubliceerd. -->
<!-- TODO: Moeten we nog de organisatorische aanpak noemen, en verwijzen naar andere projecten diet dat doen? Zoals: mandaat om "nee" te zeggen tegen ontoegankelijke content die wordt aangeleverd. -->

<!-- We zoeken een oplossing waarmee de belangrijkste problemen in content voorkomen en opgelost kunnen worden. Contentmakers zijn vaak niet op de hoogte van problemen, terwijl die in veel gevallen automatisch herkend kunnen worden, waardoor publicatie van ontoegankelijke content niet wordt voorkomen. Sommige toegankelijkheidsproblemen kunnen niet automatisch herkend worden, maar die moeten opgelost door extra stappen in het publicatieproces. We zoeken daarom een oplossing die waar mogelijk problemen herkent en voorkomt, en waar nodig de redactie helpt door instructies en documentatie in het proces te verwerken. -->

<!-- De belangrijkste bestaande kaders en inrichtingskeuzes waarmee rekening moet worden gehouden. Benoem hierbij ook de samenhang met architecturen. Bijvoorbeeld door aan te geven welk deel van een enterprise-, domein- of ketenarchitectuur de verandering invulling geeft. -->

De effectiviteit van de oplossing is afhankelijk van goede integratie met bestaande processen van contentmakers, en dat doeltreffende hulpmiddelen worden aangeboden op het juiste moment. Het gaat dan om integratie met de bestaande CMS-software van overheidswebsites. Begin 2025 zijn bij de overheid 3 CMS softwarepakketten de grootste: Drupal, WordPress en TYPO3.

<!--

Kern van het probleem:

- **redactie krijgt geen directe feedback op ontoegankelijke content**

  - geen feedback in content preview
  - geen foutmelding als iets niet is ingevuld, dat wel nodig is
  - er zit een te grote periode tussen het maken van content en de feedback
  - informatie uit automatische periodieke scans (zoals SiteImprove) komt niet bij de redactie
  - informatie uit toegankelijkheidsverklaring kan tot 3 jaar duren, en komt vaak niet bij de redactie
  - er is geen automatische todo-lijst van waar nog aan gewerkt moet worden, gekoppeld aan pagina's in het CMS

- het systeem heeft niet de mogelijkheid de content toegankelijk te maken
  - geen optie om taal in te stellen
  - geen optie om taal van pdf in te stellen
  - geen optie voor table caption
  - geen optie voor ondertitels bij audio/video

- het systeem geeft de mogelijkheid om ontoegankelijke content te maken
  - Heading 2 zonder tekst
  - Velden zijn optioneel die het niet zouden moeten zijn
  - TODO: Meer concrete voorbeelden.

- het is moeilijk voor mensen om te herkennen dat iets niet klopt
  - bijvoorbeeld: taal van de pagina, taal van PDF, documenttitel van PDF, afbeelding met ontbrekende alt-tekst

- het is moeilijk door mensen om de beoordeling te doen

- het is moeilijk om automatisch de boordeling te doen
  - bijv: contrast van teksten in afbeeldingen

- het is te veel werk (te duur) om het op te lossen
  - ondertitels

- de kennis ontbreekt bij de redactie

- de kennis wordt niet actief toegepast door de redactie

- er is druk om dingen te publiceren die niet toegankelijk is
  - tijdsdruk
  - de content maken heeft al veel geld gekost (video)
  - geen direct contact met aanleverende partij


Oplossingen op een matrix zetten van complexiteit, beheerbaarheid

Deliverables:

Haalbaar:

- herbruikbare helper-teksten die in samenwerking met CMS-leveranciers ingesteld worden
- generieke rich text editor die waarschuwingen geeft aan de redactie voor enkele veelvoorkomende problemen in tekst en structuur
- data-structuur = HTML structuur in "rich text" velden van een CMS
- <p lang="En">This page is also available in English!</p> lang="en" is vaak geen optie

Hoe houd je dit onderhoudbaar?

Spike nodig:

- plugin die automatisch "helper teksten" instelt in de 3 CMS-en
- is de rich text editor te integreren met het CMS?
  - Drupal en TYPO: waarschijnlijk
  - WordPress: waarschijnlijk wel voor Advanced Custom Fields implementaties, niet voor Gutenberg blocks

-->

Deze oplossing is een aanvulling op het NL Design System ecosysteem, waar wordt gewerkt aan digitale toegankelijkheid van visueel ontwerp en de code van websites. De oplossing moet aansluiten op bestaande oplossingen in NL Design System, zodat toegankelijkheid is geborgd in de volledige keten van aanlevering van content bij de webredactie, tot het on-line publiceren in een bestaande website. De oplossing moet ook voordelen bieden aan websites die geen NL Design System gebruiken.

<!-- De punten waarover besluitvorming en/of discussie moet plaatsvinden. Denk hierbij met name aan alternatieve oplossingsmogelijkheden en de impact daarvan. Maar ook afwijkingen van de afgesproken kaders. -->

De kaders zijn nu beperkt tot oplossingen voor webtechnologie. Een gedeelte van problemen bij toegankelijkheid komt doordat ontoegankelijke kantoorbestanden worden gepubliceerd op websites. Het aspect kantoorbestanden als bijlage in websites is nu buiten scope gelaten. Echter, een samenwerking met het project NLDoc dat werkt aan het oplossing voor kantoorbestanden ligt voor de hand, omdat die oplossing ook het meest effectief zou zijn als plugin bij CMS-en.

De oplossing is beperkt tot toepassingen voor open source CMS implementaties. De hoogste prioriteit is voor CMS-en die veel worden gebruikt, en waarvoor voldoende CMS-beheerders enthousiast zijn om de CMS-plugin te gebruiken en te testen. Op dit moment zijn dat Drupal en WordPress.

## 2.1 Aanleiding en doelstelling

<!--
Beschrijf in het kort de huidige situatie en geef daarbij aan wat de precieze aanleiding is om deze PSA op te stellen: welke vraagstukken doen zich voor, wat moet worden aangepakt, welke ontwikkelingen vinden plaats waarmee rekening gehouden dient te worden, welke doelstelling en ambities worden nagestreefd, in welke richting het bestuur of management denkt qua oplossing e.d.
-->

Om te voldoen aan wetgeving voor digitale toegankelijkheid, moet 90% van de overheidswebsites verbeterd worden. Contentmakers zijn zich bewust dat een belangrijk deel van de oplossing zit in toegankelijke content maken. Uit onderzoek blijkt dat voor hen vaak onduidelijk is hoe content toegankelijk gemaakt kan worden, en dat bestaande hulpmiddelen niet effectief zijn.

<!-- Er is geen makkelijke manier om de duizenden contentmakers achter deze websites te bereiken. Andere projecten hebben nog niet geleid tot een grote afname in toegankelijkheidsproblemen in content, zoals contentmakers tips geven via social media en kennisartikelen. -->

<!-- Uit onderzoek blijkt dat meeste contentmakers gebruik maken van één van de top vier content management systemen (CMS). Het is mogelijk een plugin voor een CMS te maken die contentmakers ondersteunt bij toegankelijke content maken. -->

Het doel is om toegankelijheid van content van veel websites te verbeteren, door contentmakers effectieve ondersteuning te bieden die zoveel mogelijk aansluit op hun bestaande workflow.

## 2.2 Het te bereiken effect

<!--
Beschrijf kort en bondig de verandering en aan welke maatschappelijke doelen/ambities die verandering bijdraagt. Hier worden dus niet de projectdoelen en -ambitie bedoeld!
Geef daarnaast aan wat de door het project te realiseren oplossing moet gaan doen en wat de belangrijkste functies van die voorziening daartoe zijn.sa
Het afgesproken tijdpad en de kwaliteitseisen: wanneer zijn we tevreden met het resultaat. Beschrijf dit vanuit een “Black Box” (dus geen details van een oplossing).
Vaak zijn er al documenten die de beoogde verandering beschrijven.
-->

De ambitie is om overheidsinstellingen beter in staat stellen de content van websites toegankelijk te maken, door het aanbieden van kennis en hulpmiddelen in de workflow van contentmakers, waardoor een groter deel van webpagina's bij de overheid voldoet aan de wettelijk eisen.

### Kennis

Begrijpelijke instructies om content toegankelijk te maken aanbieden, georganiseerd per taak die een contentmaker heeft. Het doel is dat contentmakers voor hun huidige taak de kennis kunnen vinden om toegankelijke content te maken.

### Hulpmiddelen

Een plugin voor een CMS ontwikkelen, die de instructies en hulpmiddelen biedt in de workflow van contentmakers. De plugin bestaat uit drie delen:

1. Bestaande schermen in het CMS uitbreiden met instructies om content toegankelijk te maken.
2. Waarschuwingen geven bij ontoegankelijke content, met instructies om het op te lossen.
3. De mogelijkheid bieden om content vanuit een ander perspectief te bekijken, zodat je zonder technische kennis kan beoordelen of de content toegankelijk is.

Dit project ontwikkelt voor 2 CMS-en een plugin. De twee plugins dienen dan als voorbeeld voor de ontwikkeling van plugins voor andere CMS-en.

### Succes

De documentatie en hulpmiddelen die in dit project worden ontwikkeld, zullen zich richten op een beperkte selectie van toegankelijkheidsproblemen. De prioriteit en volgorde zal bepaald worden op basis van hoe vaak het probleem voorkomt, de impact op eindgebruikers, en de haalbaarheid van de oplossing.

Het project is succesvol wanneer blijkt dat contentmakers in staat zijn om, voor de soorten content waarvoor de kennis en hulpmiddelen zijn gerealiseerd, webpagina's te publiceren die voldoen aan de wettelijk verplichte standaarden voor digitale toegankelijkheid.

## 2.3 Stakeholders

<!--
Als het relevant is, neem dan ook wat achtergrondinformatie op over de betrokken overheidsorganisatie(s), de relevante wettelijke taken en de belangrijkste diensten/producten die die organisatie(s) aan de samenleving levert. Een belangrijke bron voor de beschrijving van een organisatie en het maatschappelijke belang, is de website van de organisatie. Daarnaast kunnen gesprekken met mensen, workshops of documenten binnen de organisatie veel input geven.
-->

De stakeholders van dit project zijn:

- Opdrachtgever: Ministerie van Binnenlandse Zaken. De Minister van Binnenlandse Zaken en Koninkrijksrelaties is verantwoordelijk voor monitoring en rapportage inzake naleving van het [Tijdelijk besluit digitale toegankelijkheid overheid](https://wetten.overheid.nl/BWBR0040936/2018-07-01), en het blijkt dat naleving verbeterd moet worden.
- Opdrachtnemer: [ICTU](http://ictu.nl). Voor ICTU is het belangrijk dat de opdracht uitgevoerd kan worden volgens afspraken met de opdrachtgever, en volgens gebruikelijke interne processen.
- Burgers en bedrijven: toegankelijke content van overheidswebsites is nodig zodat iedereen gelijkwaardige toegang tot die informatie heeft.
- Contentmakers van overheidswebsites: de oplossing moet op gebruiksvriendelijke wijze helpen bij de naleving van de wetgeving voor toegankelijkheid, bij taken waar ondersteuning gewenst is. Ter voorbereiding van de PSA zijn interviews afgenomen met contentmakers.
- Beheerders van overheidswebsites: de oplossing moet goed integreren met bestaande systemen. Ter voorbereiding van de PSA zijn interviews afgenomen met beheerders van CMS-en voor overheidswebsites.
- Architect: er moet voldoende informatie zijn om een Solution Architecture te ontwerpen.
- Ontwikkelaars van de oplossing: voor succesvolle realisatie van het project zijn realistische doelen en een haalbare aanpak nodig.
- Beheerder: [NL Design System](https://nldesignsystem.nl). Voor de beheerder is het belangrijk dat de oplossing is voorzien van voldoende documentatie en voldoende automatisering van tests en processen. De implementatie moet zoveel mogelijk aansluiten bij de kennis en ervaring van de beheerder, en bij de componenten die de NL Design System community ontwikkelt.

## 4.1 De invalshoek Grondslagen

De Nederlandse overheid moet haar websites toegankelijk maken volgens de criteria van [WCAG 2.1](https://www.w3.org/TR/WCAG21/), voor naleving van de Nederlandse wetgeving "[Tijdelijk besluit digitale toegankelijkheid overheid](https://wetten.overheid.nl/BWBR0040936/2018-07-01)" en zoals beschreven de Europese norm "[EN 301 549 - Accessibility requirements for ICT products and services](https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en)". Deze websites worden periodiek onderzocht door toegankelijkheidsspecialisten op naleving van de wettelijke eisen, aan de hand van de [WCAG-EM](https://www.w3.org/TR/WCAG-EM/) standaard.

De [ICTU Kwaliteitsaanpak Softwareontwikkeling](https://ictu.github.io/Kwaliteitsaanpak/) zal toegepast worden bij de ontwikkeling van de oplossing.

Gebruik van de oplossing zal ruim voor het eind van de realisatiefase getest worden met contentmakers en toegankelijkheidsspecialisten, zodat tijdens het Agile ontwikkelproces de gebruiksvriendelijkheid en effectiviteit verbeterd kan worden op basis van feedback.

## 4.2 De invalshoek Organisatie

<!-- Wie (welke functie) is eind-verantwoordelijk voor deze dienst? -->

Het Ministerie van Binnenlandse Zaken is eind-verantwoordelijk voor deze oplossing.

<!-- https://www.noraonline.nl/wiki/Geef_de_afnemer_inzage_in_rechten_en_voorwaarden_en_plichten -->

De oplossing zal worden verstrekt als open source software [onder de EUPL-1.2 licentie](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32017D0863), „zoals het is” en zonder enige garantie.

De beheerder van de oplossing is verantwoordelijk voor de governance van open source software.

Overheidsinstellingen kunnen naleving van toegankelijkheid verbeteren door opdracht te geven aan de beheerder van hun website om de CMS-plugin toe te passen, wanneer een plugin beschikbaar is voor het betreffende CMS.

<!-- https://www.noraonline.nl/wiki/Stel_een_duidelijke_Quality_of_Service_(QoS)_vast_voor_de_dienst -->

Wanneer contentmakers problemen hebben met de oplossing, dan moeten ze om hulp vragen bij hun eigen organisatie. De beheerders kunnen via openbare product backlog overleggen wat de prioriteit is, en wie verantwoordelijkheid neemt voor de open source software verbeteren.

NL Design System is de beoogd beheerder van de oplossing.

Wanneer er geen opdracht meer is voor doorontwikkeling, dan is het gebruikelijke proces voor open source software: een derde partij kan het oorspronkelijke werk wijzigen, in gebruik nemen en verder verspreiden.

<!-- Welke overheidsorganisatie(s) voert (voeren) die afspraken uit? -->

<!-- Welke overheidsorganisatie is verantwoordelijk voor het herstel van eventuele gemaakte fouten? En bij wie kan de gebruiker (burger, ondernemer, ambtenaar) hulp vragen als het vastloopt oid.? -->

<!-- Welke overheidsorganisatie(s) is (zijn) verantwoordelijk voor het doorvoeren van wijzigingen in het proces? -->

<!-- Welke overheidsorganisatie is verantwoordelijk voor voorstellen voor verbetering van de afspraken of van de uitvoering? -->
<!-- Zie voor deze aspecten NAP17 Stuur cyclisch op kwaliteit -->

Het Ministerie van Binnenlandse Zaken is verantwoordelijk voor monitoring van toegankelijkheid. Door periodieke analyse van recente toegankelijkheidsverklaringen kunnen veelvoorkomende toegankelijkheidsproblemen in content geïdentificeerd worden. Op basis van de onderzoeksresultaten kunnen kansen onderzocht worden om de oplossing van dit project aan te vullen of te verbeteren.

## 4.3 De invalshoek Informatie

<!-- https://www.noraonline.nl/wiki/Maak_zoveel_mogelijk_data_beschikbaar_als_open_data -->

De instructies voor toegankelijke content maken zullen als open source documentatie gepubliceerd worden op de website van NL Design System.

<!-- Variatie op: https://www.noraonline.nl/wiki/Neem_diensten_op_in_een_producten-_en_dienstencatalogus_(PDC) -->

De open source oplossing zal opgenomen worden in het Open Source Software register van [developer.overheid.nl](http://developer.overheid.nl).

Wanneer contentmakers de oplossing gebruiken, dan blijft de content van webpagina's bij de bron, in het CMS van de overheidsinstelling waar de CMS-plugin is geïnstalleerd.

<!-- https://www.noraonline.nl/wiki/Bevorder_hergebruik_van_gegevens -->

Het [register van toegankelijkheidsverklaringen](https://www.toegankelijkheidsverklaring.nl/register) heeft veel informatie die inzicht kan bieden welke toegankelijkheidsproblemen veel voorkomen bij overheidswebsites.

## 4.4 De invalshoek Applicaties

De instructies voor toegankelijke content kunnen gelijk gebruikt worden door alle contentmakers, wanneer ze gepubliceerd zijn op de website van NL Design System. De website is een open source project, waarbij de documentatie wordt beheerd via Markdown-bestanden in een Git-repository.

De oplossingen in de CMS-plugin zijn pas effectief wanneer ze geïnstalleerd zijn in de CMS-en van overheidsinstellingen. De volgende 4 applicaties worden het meest gebruikt voor websites van de overheid: [Drupal](https://drupal.org/), [WordPress](http://wordpress.org) [TYPO3](https://typo3.org/cms) en [Bloomreach Content](https://www.bloomreach.com/en/products/content).

Drupal, WordPress en TYPO3 zijn het meest geschikt voor de CMS-plugin. Deze drie zijn open source software, en ze hebben een plug-in ecosysteem: [WordPress plugins](https://wordpress.org/plugins/), [Drupal modules](https://www.drupal.org/project/project_module) en [TYPO3 extensions](https://extensions.typo3.org). Bloomreach Content is minder geschikt, alleen de broncode van 24 maanden oude versies wordt publiek gedeeld en er zijn slechts weinig [Bloomreach extensions ontwikkeld door de community](https://bloomreach-forge.github.io/project-list.html).

## 5. Standaarden

Voor webhosting van de oplossing moeten de volgende standaarden gebruikt worden:

- DNSSEC voor domeinnamen. [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/dnssec).
- HTTPS en HSTS voor encryptie van HTTP. [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/https-en-hsts).
- TLS voor encryptie van HTTP: [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/tls).
- Websites moeten bereikbaar zijn, in elk geval via IPv6. [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/ipv6-en-ipv4). Maak de websites ook bereikbaar vai IPv4, indien mogelijk.

Voor het aanbieden van gehoste APIs moeten de volgende standaarden gebruikt worden:

- OpenAPI om de REST API te documenteren. [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/openapi-specification).
- REST API design rules zijn de basis voor het ontwerpen van nieuwe APIs. [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules).
- ISO8601 voor datum- en tijd-gegevens. [Status: Aanbevolen](https://www.forumstandaardisatie.nl/open-standaarden/datum-en-tijd)
- UTF-8 als encoding van HTTP responses en HTTP requests: [Status: Aanbevolen](https://www.forumstandaardisatie.nl/open-standaarden/utf-8).
- Verwijs naar documenten met een URI als identifier. [Status: Aanbevolen](https://www.forumstandaardisatie.nl/open-standaarden/uri-en-iri).
- JSON wordt gebruikt voor responses, en niet XML of YAML. [Status: Aanbevolen](https://www.forumstandaardisatie.nl/open-standaarden/json).
- Gehoste domeinnamen bieden een `/security.txt` aan voor responsible disclosure informatie. [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/securitytxt).

Voor het maken van applicaties moeten de volgende standaarden worden gebruikt:

- CSS voor visuele opmaak van documenten op het web. [Status: Aanbevolen](https://www.forumstandaardisatie.nl/open-standaarden/css).
- HTML voor opmaak van info en relaties in documenten op het web. [Status: Aanbevolen](https://www.forumstandaardisatie.nl/open-standaarden/html).
- SVG voor vectorafbeeldingen. [Status: Aanbevolen](https://www.forumstandaardisatie.nl/open-standaarden/svg).
- WCAG voor toegankelijke applicaties en documenten op het web. [Status: licht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/digitoegankelijk-en-301-549-met-wcag-21).

Voor informatiebeveiliging moeten de opdrachtnemer en beheerder een managementsysteem gebruiken dat voldoet aan ISO-27001. [Status: Verplicht ('Pas toe leg uit')](https://www.forumstandaardisatie.nl/open-standaarden/nen-isoiec-27001). De [Baseline Informatiebeveiliging Overheid (BIO)](https://www.bio-overheid.nl) biedt maatregelen voor de bijbehorende standaard ISO-27002.

## 6.1 Privacy

De oplossing van project verwerkt geen persoonsgegevens. De inhoud en metadata van content in een CMS kan persoonsgegevens bevatten. De bescherming van gegevens in het CMS is de verantwoordelijkheid van de afnemers van de CMS-plugin.

## 6.2 Informatiebeveiliging

<!-- Voor informatiebeveiliging kun je een Information Security Management System (ISMS) gebruiken, en [ISO 27001 is een "Pas toe of leg uit standaard"](https://www.forumstandaardisatie.nl/open-standaarden/nen-isoiec-27001). ICTU past geen ISO 27001 ISMS toe. -->

<!--
TODO: Waarom niet ISO 27001? Heb die vraag gesteld in MS Teams
https://teams.microsoft.com/l/message/19:E6JPK002Sp8hbLMWwR9hKDC7p7jzQ9LYFmcriSRFmzg1@thread.tacv2/1738146335505?tenantId=6b1d3da2-3751-4e3d-b3c9-e6784c8bad70&groupId=e76d90c5-30b6-456a-8931-3b3940b7a659&parentMessageId=1738146335505&teamName=ICTU%20Softwareontwikkeling&channelName=General&createdTime=1738146335505
-->

<!-- Voor maatregelen voor informatiebeveiliging is de ISO 27002 een standaard. -->

<!-- Dat betekent dat website waar de oplossing wordt gepubliceerd moet een 100% score halen op internet.nl. -->

### Risico-matrix

| Aspect            | Kans      | Impact    | Risico    |
| ----------------- | --------- | --------- | --------- |
| Beschikbaarheid   | Laag      | Laag      | Laag      |
| Integriteit       | Gemiddeld | Gemiddeld | Gemiddeld |
| Vertrouwelijkheid | Laag      | Laag      | Laag      |

### Beschikbaarheid

Het project betreft geen SaaS-oplossing, de oplossing wordt los geïnstalleerd in CMS-en van overheidswebsites. De beschikbaarheid is afhankelijk van de beheerders van overheidswebsites.

Het belangrijkste is dat de broncode en de releases van de oplossing altijd beschikbaar zijn.

Als de oplossing wordt gebruikt om publicatie van content te blokkeren wanneer die niet toegankelijk is, dan wordt daarmee de beschikbaarheid van CMS-functionaliteit beperkt. "False positives" zijn daarmee een risico op de beschikbaarheid van CMS-en. Het testplan moet daarom een goede balans vinden tussen testen van gebruikelijk toegankelijke en ontoegankelijke scenario's.

### Integriteit

Het risico dat de oplossing de integriteit van de gegevens aantast is zeker aanwezig, omdat een deel van de oplossing voor veel ontwikkelaars complex is om te overzien en om te realiseren. Het testplan voor moet voldoende uitgebreid zijn, met name voor functionaliteit die wijzigen doet aan data. Denk daarbij aan processen zoals documenten openen, documenten opslaan en het document aanpassen om een ontoegankelijke structuur te verwijderen.

Het belangrijkste is dat de broncode en de releases betrouwbaar zijn.

### Vertrouwelijkheid

De oplossing verwerkt mogelijk vertrouwelijke gegevens, maar de gegevens blijven binnen het CMS. CMS-en bij de overheid werken meestal met publieke data, daarom is de impact op vertrouwelijkheid meestal laag.

## 7 Beheer

De beheerder van dit project zal verantwoordelijk zijn voor onderhoud van de software en documentatie, elke CMS-plugin geschikt maken voor nieuwe versies van het betreffende CMS, en het onderhoud aan de ontwikkel- en testomgevingen.

Dit project ontwikkelt een oplossing voor een beperkte selectie van toegankelijkheidsproblemen. Als dit project een succes is, dan kan de open source community oplossingen bijdragen voor meer toegankelijkheidsproblemen.

Governance van het open source project zal een belangrijke verantwoordelijkheid zijn tijdens beheer. Op basis van open source samenwerkingen tijdens dit project, kan gekozen worden op wel niveau in [de open source ambitieladder](https://minvws.github.io/beleidsontwikkeling/ambitieladder/) het beheer wordt gedaan.

<!-- ### Belangrijkste bestaande kaders en inrichtingskeuzes -->

<!-- TODO: Bij kaders kan ook fasering (plateau's) worden opgenomen -->

<!-- plateau's voor beheer -->

<!-- informatie architectuur kan gewoon een archimate plaatje zijn -->

<!-- applicatie architectuur kan gewoon een archimate plaatje zijn -->

<!-- TODO: CIA triad voor informatiebeveiliging -->

<!-- TODO: voor informatie beveiliging kijken naar categorieen van ISO27001 maatregelen / concerns -->

<!-- [...] -->

<!-- ### Punten voor discussie -->

<!-- Maak een document -->
