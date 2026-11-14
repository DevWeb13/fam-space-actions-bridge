# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

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
  src: /images/articles/2026/10/noel-a-bayeux-2026-en-famille-marche-ou-galopades.webp
  alt: Arbre de la Liberté sur la place de la Liberté à Bayeux, photographié hors période de Noël
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
radar:
  schemaVersion: 1
  phase: 1
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

## Mission retenue
Actualiser le guide Noël à Bayeux 2026, surtout les Galopades du 18 décembre, désormais détaillées par l'organisateur sur Normandie Course à Pied.

## Pourquoi cette mission
Le snapshot GSC montre 84 puis 0 impressions sur deux périodes de trois jours, sans cause SEO établie. Lacune éditoriale indépendante et vérifiée: l'article dit encore que les parcours, âges, horaires et tarifs 2026 sont inconnus, alors que la fiche 2026 de l'organisateur les fournit.

## Décision du lecteur
Déterminer si la famille vient pour les chalets ou pour courir/marcher le 18 décembre, et sélectionner sans confusion le parcours correspondant à l'année de naissance des enfants.

## Faits à traiter
- Galopades 2026, vendredi 18 décembre, place de la Mairie: marche 2,5 km à 18 h 30, 5 € et ouverte à tous; Lutins 800 m à 19 h (nés 2018 à 2020), gratuit; Elfes 1,4 km à 19 h 15 (nés 2016-2017), gratuit; Rennes 2 km à 19 h 40 (nés 2012-2015), gratuit; course 5 km à 20 h (nés en 2011 ou avant), 5 €. Vérifier les modalités d'inscription et de retrait des dossards sur la fiche organisateur avant rédaction définitive.
- Ne pas confondre le programme 2026 avec les pages municipales encore consacrées à 2025; ne pas recycler les anciens plans de circulation.
- Marché du 11 au 23 décembre place de la Liberté, sous l'arbre illuminé: conserver les dates, le lieu et la prudence sur les horaires/animations non officiellement publiés.
- Préserver intégralement les conseils poussette, pavés, porte-bébé, repas, micro-ondes et table à langer, les trois photos et leurs licences/crédits, l'hébergement affilié et le maillage Bayeux.

## Sources de départ
- Ville de Bayeux, calendrier Noël 2026: https://www.bayeux.fr/fr/un-noel-bayeux
- Organisateur / plateforme de course, fiche Galopades 2026: https://normandiecourseapied.com/course/les-galopades-de-noel-2026
- Office de tourisme / Normandie Tourisme, marché 2026: https://www.normandie-tourisme.fr/agenda/marche-de-noel-de-bayeux/

## Affiliation
Maintenir le lien Booking.com existant vers le Novotel Bayeux, sans ajouter d'offre artificielle.

## Continuations internes
- Conserver le renvoi vers le guide Bayeux en famille pour le séjour de deux jours.
- Recontrôler les éventuels arrêtés de circulation 2026 lorsqu'ils paraîtront; ne pas présenter ceux de 2025 comme actuels.

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
- /articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/ | Bayeux en famille: 1 ou 2 jours et quel budget prévoir | voyages | Bayeux, Calvados, Normandie
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
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
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
