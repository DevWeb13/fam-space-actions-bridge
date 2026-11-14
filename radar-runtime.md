# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 3/3

Tu es secrétaire de rédaction et fact-checker final. Ta mission principale est l'anti-régression, pas de réécrire l'article une deuxième fois.

Pour un refresh, compare l'article source exact et le candidat de phase 2 fournis intégralement plus bas. Le candidat final doit rester autonome et actuel. Pour chaque information présente avant et absente après, décide explicitement: toujours vraie et utile -> restaure-la; périmée ou fausse -> laisse-la supprimée; réellement redondante ou sans valeur -> suppression acceptable.

Accorde une attention particulière aux prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques familiaux.

Ensuite:
- lis l'article du début à la fin comme un lecteur sur téléphone et vérifie que l'introduction, les sections et la fin ne répètent pas la même information; supprime les conseils évidents, paraphrases de sources, sections sans information nouvelle et toute conclusion qui ne ferait que résumer;
- vérifie que l'angle sert l'article sans devenir l'article entier: une micro-question utile ne doit pas être répétée pendant toute la page, et le titre final doit décrire le sujet plutôt que recopier mécaniquement la décision de phase 1;
- vérifie que les modifications répondent au diagnostic et à la décision de phase 1;
- revérifie les faits déterminants auprès des sources officielles. Une affirmation attribuée à une source doit respecter exactement son niveau de certitude: ne transforme jamais « peut constituer un frein » en « déconseille », ni une possibilité en obligation ou interdiction;
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; vérifie qu'aucun lien officiel du corps ne mène, même indirectement depuis une page informative, à l'achat ou à la réservation de la même prestation sur le site officiel; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
- contrôle les liens internes et les routes. Garde ceux qui prolongent réellement la lecture et, lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, raccourcis le passage au contexte nécessaire puis oriente naturellement le lecteur vers elle;
- vérifie `reviewAt` / `eventEndsAt` lorsqu'un contenu temporaire existe;
- ne force ni longueur ni affiliation.

Pour une opportunity, revérifie doublons, chevauchement avec les pages proches, catégorie, territoire, sources, cycle de vie et utilité. Un angle distinct ne justifie pas de recopier les parties générales déjà couvertes ailleurs. Le slug technique reste géré mécaniquement.

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

## Règles partenaires

### Partenaires disponibles

- **Hébergement:** `booking.com`, `expedia.fr`, `agoda.com`; secours: `hotels.com`.
- **Location de vacances:** `abritel.fr`, `vrbo.com`.
- **Billets, attractions et visites:** `getyourguide.com`, `tiqets.com`, `klook.com`; secours: `wegotrip.com`, `kkday.com`.
- **City pass:** `gocity.com`, `tiqets.com`; secours: `getyourguide.com`, `klook.com`.
- **Location de voiture:** `kayak.fr`, `autoeurope.eu`, `economybookings.com`; secours: `localrent.com`, `qeeq.com`.
- **Location de vélo:** `bikesbooking.com`.
- **Transferts:** `welcomepickups.com`, `kiwitaxi.com`; secours: `gettransfer.com`, `intui.travel`.
- **Consigne à bagages:** `radicalstorage.com`.
- **Vols:** `kiwi.com`.

### Logique d'usage

Commence par l'action principale du lecteur lorsqu'elle peut être achetée ou réservée, puis examine les besoins secondaires utiles.

Pour une sortie, une activité, une visite, un événement, un voyage ou une destination localisée, vérifie aussi un hébergement pertinent à proximité. Il n'a pas besoin d'être indispensable à tous les lecteurs: il peut servir normalement aux familles qui transforment la sortie en week-end ou l'intègrent à un séjour. Pour une aide, une démarche, un service de parentalité ou un contenu sans logique de déplacement, n'ajoute pas d'hébergement sans raison propre au sujet.

Dans l'article, un lien partenaire doit se lire comme un conseil pratique. Adapte son emplacement, son éventuel titre de section et sa formulation au sujet; ne réutilise pas une formule fixe d'article en article et ne commente jamais le fait qu'il s'agit d'affiliation. Une ou deux offres précises valent mieux qu'une liste.

Une page partenaire sert à vérifier une offre, jamais à établir un fait éditorial.

## Candidat validé de la phase précédente

---
title: "Noël à Bayeux 2026 en famille: marché et Galopades du 18 décembre"
subtitle: "Courses enfants gratuites, marche familiale et marché du 11 au 23 décembre: horaires, inscriptions et conseils"
summary: "Marché de Noël à Bayeux du 11 au 23 décembre 2026 et Galopades le 18: parcours selon l'année de naissance, tarifs, inscriptions, retrait des dossards et conseils avec des enfants."
category: evenements
location:
  city: Bayeux
  department: Calvados
  region: Normandie
image:
  src: /images/articles/2026/10/noel-a-bayeux-2026-en-famille-marche-ou-galopades.webp
  alt: Arbre de la Liberté sur la place de la Liberté à Bayeux, photographié hors période de Noël
sources:
  - title: Ville de Bayeux - Un Noël à Bayeux 2026
    url: https://www.bayeux.fr/fr/un-noel-bayeux
  - title: Ville de Bayeux - Marché de Noël 2026
    url: https://www.bayeux.fr/fr/marche-de-noel
  - title: Normandie Course à Pied - Les Galopades de Noël 2026
    url: https://www.normandiecourseapied.com/course/les-galopades-de-noel-2026
  - title: Normandie Tourisme - Marché de Noël de Bayeux 2026
    url: https://www.normandie-tourisme.fr/agenda/marche-de-noel-de-bayeux/
  - title: Normandie Tourisme - Arrivée du Père Noël le 11 décembre
    url: https://www.normandie-tourisme.fr/agenda/petits-et-grands-plongez-dans-la-magie-de-noel-et-venez-accueillir-le-pere-noel/
eventEndsAt: 2026-12-23
reviewAt: 2026-12-04
topic:
  key: evenements|bayeux|noel-a-bayeux-2026-en-famille-marche-ou-galopades|2026
  keywords:
    - Noël Bayeux 2026
    - marché de Noël Bayeux 2026
    - Galopades de Noël Bayeux 2026
slug: noel-a-bayeux-2026-en-famille-marche-ou-galopades
status: published
publishedAt: 2026-10-30T15:36:05.268Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Bayeux
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-a-bayeux-2026-en-famille-marche-ou-galopades/index.md
  targetSha: 8b8c4363bede79ceffcc56be40cd094946ea5453
  targetUrl: /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/
  decision: Choisir entre une visite du marché et une participation aux Galopades du 18 décembre, en identifiant la course adaptée à l'âge de chaque enfant, son horaire, son tarif et les modalités d'inscription.
  affiliationPotential: Conserver le Novotel Bayeux sur Booking.com déjà présent pour les familles qui prolongent la visite; aucune billetterie partenaire naturelle pour cette course associative.
  gsc:
    retrievedAt: 2026-11-14T03:26:00+01:00
    dataThrough: 2026-11-10
    signal: uncertain
    basis: "Visibilité récente : 84 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 84
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - marche de noel bayeux 2026
      - galopades bayeux 2026
---

<!-- article-image-credit -->
*Photo: [Kev22](https://commons.wikimedia.org/wiki/File:Bayeux_-_Arbre_de_la_libert%C3%A9_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Bayeux, le **marché de Noël se tient du 11 au 23 décembre 2026**, place de la Liberté. Pour associer les chalets à une fête sportive, choisissez le **vendredi 18 décembre**: les Galopades proposent une marche ouverte à tous, trois courses gratuites pour les enfants et un 5 km pour les plus grands. Les départs et les conditions d'inscription sont désormais annoncés.

## Le marché de Noël: chalets et animations

Les chalets s'installent **place de la Liberté, sous l'arbre de la Liberté illuminé**, au cœur de Bayeux. La Ville annonce **plus de 40 exposants**, artisans d'art et producteurs locaux. Le programme complet et les horaires quotidiens du marché restent à confirmer sur la [page municipale](https://www.bayeux.fr/fr/marche-de-noel): ne prévoyez pas une animation ou un manège à une heure précise sans nouvelle confirmation.

Une animation familiale est toutefois déjà annoncée pour **le vendredi 11 décembre à 18 h 30**: l'arrivée du Père Noël sur la place de la Liberté, avec une déambulation féerique, selon [Normandie Tourisme](https://www.normandie-tourisme.fr/agenda/petits-et-grands-plongez-dans-la-magie-de-noel-et-venez-accueillir-le-pere-noel/).

## Galopades du vendredi 18 décembre: quelle épreuve choisir?

Les Galopades sont une fête familiale **sans classement officiel ni chronométrage**, organisée au départ de la **place de la Mairie**. Les parcours annoncés par [Normandie Course à Pied](https://www.normandiecourseapied.com/course/les-galopades-de-noel-2026) sont les suivants:

- **18 h 30, marche de 2,5 km**: ouverte à tous, **5 €**.
- **19 h, Lutins, 800 m**: enfants nés en **2018, 2019 ou 2020**, **gratuit**.
- **19 h 15, Elfes, 1,4 km**: enfants nés en **2016 ou 2017**, **gratuit**.
- **19 h 40, Rennes, 2 km**: enfants nés de **2012 à 2015**, **gratuit**.
- **20 h, Galopades, 5 km**: coureurs nés en **2011 ou avant**, **5 €**.

Pour inscrire un enfant, vérifiez son **année de naissance**, et non simplement son âge le jour de l'événement. Une famille avec deux enfants dans des catégories différentes devra prévoir deux départs distincts. Pour assister à la fête sans courir, rendez-vous dans le secteur du départ; les parcours exacts et les zones réservées aux spectateurs restent à vérifier avant le 18 décembre.

Les épreuves sont annoncées accessibles aux participants en situation de handicap, notamment en fauteuil ou en joëlette. L'organisateur indique reverser **2 € par inscription adulte** au Comité départemental handisport du Calvados.

### Inscription et retrait des dossards

L'inscription est proposée **en ligne jusqu'au 17 décembre 2026 à 23 h 59**, ou **sur place au village départ jusqu'à 30 minutes avant chaque épreuve**, selon la fiche de l'organisateur. Vérifiez les conditions actualisées et inscrivez les enfants à l'avance si possible.

Le retrait des dossards est prévu **mercredi 16 décembre de 14 h à 20 h au stade Henry-Jeanne**, ou le **18 décembre place de la Mairie jusqu'à 30 minutes avant le départ**. Une **pièce d'identité** est demandée et **le retrait par un tiers n'est pas autorisé**. Anticipez donc le temps nécessaire avant la course, particulièrement avec plusieurs enfants.

L'organisateur annonce des toilettes, un vestiaire, des secours, une buvette et de la restauration au village de départ. Pour les inscriptions et les éventuelles modifications de dernière minute, consultez directement la [fiche des Galopades 2026](https://www.normandiecourseapied.com/course/les-galopades-de-noel-2026).

## Venir avec un bébé ou une poussette

<!-- article-image-body:01 -->

![Rue Saint-Jean dans le centre historique de Bayeux, photographiée hors période de Noël](/images/articles/2026/10/noel-a-bayeux-2026-en-famille-marche-ou-galopades-body-01.webp)

*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Bayeux_Rue_Saint-Jean.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les **pavés du centre historique** et la foule peuvent compliquer les déplacements en poussette, particulièrement le soir des Galopades. Un **porte-bébé** peut être plus pratique pour un tout-petit. Prévoyez des vêtements chauds et de quoi attendre entre les départs.

Pour le **repas ou le biberon**, emportez le nécessaire: les informations publiées ne confirment pas la présence d'une **table à langer**, d'un **micro-ondes** ou d'un espace bébé dédié. La restauration annoncée au village départ ne garantit pas ces équipements.

**En voiture le 18 décembre**, vérifiez les restrictions de circulation et de stationnement propres à l'édition 2026. Les fermetures de rues encore visibles sur certaines pages municipales concernent **2025** et ne constituent pas un plan valable pour 2026.

## Prolonger la sortie à Bayeux

<!-- article-image-body:02 -->

![Chevet de la cathédrale Notre-Dame de Bayeux, photographié depuis l'extérieur](/images/articles/2026/10/noel-a-bayeux-2026-en-famille-marche-ou-galopades-body-02.webp)

*Photo: [James Woolley](https://commons.wikimedia.org/wiki/File:Bayeux_Cathedral.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pour rester une nuit et découvrir Bayeux le lendemain, le [Novotel Bayeux sur Booking.com](https://www.booking.com/hotel/fr/novotel.html) est une possibilité d'hébergement à examiner selon le nombre et l'âge des enfants. Vérifiez les couchages, le prix et les disponibilités à vos dates.

Pour préparer une seconde journée autour de la cathédrale, du centre ancien ou des musées, consultez notre guide [Bayeux en famille: 1 ou 2 jours et quel budget prévoir](https://www.fam-space.fr/articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-a-bayeux-2026-en-famille-marche-ou-galopades/index.md

---
title: "Noël à Bayeux 2026 en famille: marché et Galopades"
subtitle: "Marché du 11 au 23 décembre, Galopades le 18: les informations confirmées pour préparer la sortie"
summary: "Dates, emplacement du marché de Noël et Galopades 2026 à Bayeux: ce qui est annoncé, ce qui reste à confirmer et les points pratiques pour les familles."
category: evenements
location:
  city: Bayeux
  department: Calvados
  region: Normandie
image:
  src: "/images/articles/2026/10/noel-a-bayeux-2026-en-famille-marche-ou-galopades.webp"
  alt: "Arbre de la Liberté sur la place de la Liberté à Bayeux, photographié hors période de Noël"
sources:
  - title: Ville de Bayeux - Un Noël à Bayeux (dates 2026)
    url: https://www.bayeux.fr/fr/un-noel-bayeux
  - title: Ville de Bayeux - Marché de Noël (emplacement et exposants)
    url: https://www.bayeux.fr/fr/marche-de-noel
  - title: Ville de Bayeux - Les Galopades de Noël (détails encore relatifs à 2025)
    url: https://www.bayeux.fr/fr/les-galopades-de-noel
eventEndsAt: 2026-12-23
reviewAt: 2026-12-04
topic:
  key: evenements|bayeux|noel-a-bayeux-2026-en-famille-marche-ou-galopades|2026
  keywords:
    - Noël Bayeux 2026
    - marché de Noël Bayeux 2026
    - Galopades de Noël Bayeux 2026
slug: noel-a-bayeux-2026-en-famille-marche-ou-galopades
status: published
publishedAt: 2026-10-30T15:36:05.268Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Bayeux
---
<!-- article-image-credit -->
*Photo: [Kev22](https://commons.wikimedia.org/wiki/File:Bayeux_-_Arbre_de_la_libert%C3%A9_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Bayeux, le **marché de Noël est annoncé du 11 au 23 décembre 2026** et les **Galopades de Noël le vendredi 18 décembre**. Vous pouvez découvrir les chalets pendant toute cette période; le 18 est la date à choisir pour voir également la course costumée. Les horaires détaillés des animations et les modalités de participation aux Galopades 2026 restent à préciser.

## Le marché de Noël: lieu et programme

Les chalets seront installés **place de la Liberté, sous l'arbre de la Liberté illuminé**, dans le centre de Bayeux. La Ville attend **plus de 40 exposants**, artisans d'art et producteurs locaux.

Des animations sont prévues, mais le programme 2026 est encore en préparation. Les horaires d'ouverture quotidiens, les activités destinées aux enfants et leurs éventuels tarifs ne sont pas confirmés. Il ne faut donc pas reprendre les horaires d'un ancien marché ni compter sur un manège ou une rencontre avec le Père Noël à un créneau précis.

Pour une visite consacrée aux chalets, choisissez une date entre le 11 et le 23 décembre en fonction des horaires qui seront publiés. Le 18 décembre sera différent, avec l'animation sportive en plus et une affluence potentiellement plus importante dans les rues.

## Galopades du 18 décembre: courir ou assister à la fête ?

Les Galopades sont une manifestation familiale et non compétitive, traditionnellement animée par des coureurs et marcheurs déguisés. **La Ville annonce le vendredi 18 décembre 2026**, mais sa page détaillée décrit encore l'édition du **vendredi 19 décembre 2025**.

Les distances, catégories d'âge, horaires de départ, tarifs et modalités d'inscription visibles sur cette ancienne fiche **ne sont donc pas confirmés pour 2026**. Si un enfant souhaite participer, attendez le nouveau règlement et les inscriptions avant de choisir sa course. Pour regarder les déguisements, l'emplacement et l'heure de passage seront à déterminer lorsque les parcours 2026 seront publiés.

## Venir avec un bébé ou une poussette

<!-- article-image-body:01 -->

![Rue Saint-Jean dans le centre historique de Bayeux, photographiée hors période de Noël](/images/articles/2026/10/noel-a-bayeux-2026-en-famille-marche-ou-galopades-body-01.webp)

*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Bayeux_Rue_Saint-Jean.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les pavés du centre historique et la foule peuvent compliquer les déplacements en poussette, particulièrement pendant les Galopades. Un porte-bébé peut être plus pratique pour un tout-petit. Pour le repas ou le biberon, prévoyez le nécessaire: la programmation publiée ne précise pas encore si un espace de change, un micro-ondes ou des équipements adaptés aux bébés seront disponibles.

**En voiture le 18 décembre**, contrôlez les restrictions de circulation et de stationnement propres à l'édition 2026. Les fermetures de rues indiquées sur les pages municipales pour décembre 2025 ne constituent pas un plan de circulation valable pour cette année.

## Prolonger la sortie à Bayeux

<!-- article-image-body:02 -->

![Chevet de la cathédrale Notre-Dame de Bayeux, photographié depuis l'extérieur](/images/articles/2026/10/noel-a-bayeux-2026-en-famille-marche-ou-galopades-body-02.webp)

*Photo: [James Woolley](https://commons.wikimedia.org/wiki/File:Bayeux_Cathedral.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Pour rester une nuit et découvrir Bayeux le lendemain, le [Novotel Bayeux sur Booking.com](https://www.booking.com/hotel/fr/novotel.html) propose une possibilité d'hébergement à examiner selon le nombre et l'âge des enfants. Vérifiez les couchages, le prix et les disponibilités à vos dates.

Pour préparer une seconde journée autour de la cathédrale, du centre ancien ou des musées, consultez notre guide [Bayeux en famille: 1 ou 2 jours et quel budget prévoir](https://www.fam-space.fr/articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/ | Bayeux en famille: 1 ou 2 jours et quel budget prévoir | voyages | Bayeux, Calvados, Normandie
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/sorties/paleospace-de-villers-sur-mer-en-famille-fossiles-planetarium-et-visites/ | Paléospace de Villers-sur-Mer en famille: fossiles, planétarium et visites | sorties | Villers-sur-Mer, Calvados, Normandie
- /articles/bons-plans/visiter-falaise-en-famille-a-petit-prix-quel-pass-choisir/ | Visiter Falaise en famille à petit prix: quel pass choisir ? | bons-plans | Falaise, Calvados, Normandie
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/ | Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026 | maison | Caen, Calvados, Normandie
- /articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/ | Quel ticket Twisto choisir à Caen avec des enfants? | vie-pratique | Caen, Calvados, Normandie
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine

### Historique Radar lié

- refresh | /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | 2026-11-07T07:35:04.984Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | 2026-11-01T21:31:28.158Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
