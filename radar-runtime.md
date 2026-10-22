# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
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
title: "Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs"
subtitle: Ce que montre l'expérience des Bassins des Lumières et ce qu'il faut prévoir avant de réserver
summary: "Durée, âge conseillé, tarifs, poussette et bruit: les points utiles pour préparer Planète Préhistorique aux Bassins des Lumières."
slug: planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs
status: published
publishedAt: 2026-09-27T14:41:35+02:00
updatedAt: 2026-09-27T14:46:06+02:00
category: sorties
readingTime: 5
location:
  city: Bordeaux
  department: Gironde
  region: Nouvelle-Aquitaine
topic:
  key: sorties|bordeaux|planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs|2026
  keywords:
    - Planète Préhistorique Bordeaux enfants
    - Bassins des Lumières dinosaures
image:
  src: /images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs.webp
  alt: Intérieur de la base sous-marine de Bordeaux
sources:
  - title: Bassins des Lumières - Prehistoric Planet
    url: https://www.bassins-lumieres.com/en/prehistoric-planet
  - title: Bassins des Lumières - Billetterie Prehistoric Planet
    url: https://www.bassins-lumieres.com/en/tickets/6a451d25c7196d575468026b
  - title: Bassins des Lumières - Quels sont les tarifs ?
    url: https://www.bassins-lumieres.com/faq/fr/2-horaires-et-tarifs/quels-sont-les-tarifs
  - title: Bassins des Lumières - Les Bassins sont-ils accessibles à tout âge ?
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-bassins-des-lumieres-sont-ils-accessibles-a-tout-age
  - title: Bassins des Lumières - Casques anti-bruit
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/est-ce-que-vous-pretez-des-casques-anti-bruit
  - title: Bassins des Lumières - Épilepsie, photosensibilité et vertige
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-expositions-sont-elles-convenables-pour-les-personnes-souffrant-depilepsie-etou-de-vertige
  - title: Bassins des Lumières - Accès et accessibilité
    url: https://www.bassins-lumieres.com/fr/acces
  - title: Bassins des Lumières - Table à langer
    url: https://www.bassins-lumieres.com/faq/fr/4-accessibilite/y-a-t-il-une-table-a-langer-a-linterieur
  - title: Bassins des Lumières - Température intérieure
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/quelle-est-la-temperature-a-linterieur-des-bassins-des-lumieres
  - title: Bassins des Lumières - Retard ou avance sur un créneau réservé
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/ja-une-reservation-pour-un-horaire-mais-je-serais-en-retard-ou-en-avance
  - title: Claudine Colin Communication - Planète Préhistorique
    url: https://www.claudinecolin.com/fr/3216-planete-prehistorique-dinosaures-l-experience-immersive
affiliate:
  enabled: true
  type: travel
  destination: Bordeaux
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/sorties/(2026)/(09)/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/index.md
  targetSha: 1c4de46cd47f75c51b1fee046bfe85397e88befe
  targetUrl: /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/
  decision: Permettre à une famille de savoir si l'exposition Planète Préhistorique est effectivement programmée le jour envisagé, de prévoir 1 h à 1 h 30 sur place, et de choisir un billet adapté à sa composition et à ses besoins sans confondre les conditions du billet officiel et celles de Tiqets.
  affiliationPotential: "Conserver et recontrôler le billet Planète Préhistorique sur Tiqets (https://www.tiqets.com/fr/activites-attractions-bordeaux-c67101/billets-pour-bassins-des-lumieres-prehistoric-planet-exposition-a-la-decouverte-des-dinosaures-p1137322/) : offre dédiée, mais non remboursable et non reprogrammable selon la fiche consultée, contrairement à l'option d'échange annoncée par le site officiel sous conditions. Conserver le B&B HOTEL Bordeaux Bassins à flot sur Booking.com (https://www.booking.com/hotel/fr/b-amp-b-bordeaux-bassins-a-flot.fr.html), qui propose des chambres familiales. Aucune disponibilité ni économie garanties."
  gsc:
    retrievedAt: 2026-10-22T08:53:00+02:00
    dataThrough: 2026-10-19
    signal: uncertain
    basis: Baisse non attribuable avec certitude au classement.
    peakStart: 2026-10-01
    peakEnd: 2026-10-07
    recentStart: 2026-10-13
    recentEnd: 2026-10-19
    peakImpressions: 149
    recentImpressions: 26
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - base sous-marine bordeaux tarif
      - space explorer bordeaux
---

## Mission retenue

Actualiser « Planète Préhistorique à Bordeaux avec des enfants » : une expérience immersive de dinosaures aux Bassins des Lumières, proposée depuis le 3 octobre 2026, dont la programmation et les modalités pratiques doivent être vérifiées pour le jour retenu.

## Pourquoi cette mission

Dans le snapshot GSC préparé, les impressions passent de 149 à 26 entre les semaines comparées, avec un signal `uncertain` : ne pas attribuer cette baisse à un recul de classement. Ce refresh dispose surtout d'une raison éditoriale indépendante et vérifiée : l'article actuel réduit la visite à une heure, alors que la page officielle annonce environ 1 h à 1 h 30 ; il ne met pas assez en garde contre la variation du programme suivant les dates. Une expansion autour de la page forte « Transports à Paris avec des enfants » risquerait de redire les choix généraux déjà couverts sans décision nouvelle suffisamment établie. Une opportunité saisonnière comme le marché de Noël de Bordeaux 2026 a déjà sa propre page Fam Space : ne pas créer de doublon.

## Décision du lecteur

Avant de réserver, savoir quel jour l'exposition de dinosaures est réellement proposée, quelle durée réserver à la sortie avec des enfants, et quelles conditions de billet sont applicables à la famille.

## Faits à traiter

- Corriger la durée : environ **1 h à 1 h 30** selon la présentation officielle actuelle, et non une heure fixe. Contrôler le programme « Dinosaures » du jour dans les horaires officiels et ne pas promettre cette exposition chaque jour ni la programmation des autres expositions avec le même billet ; ne pas inventer de date de fin officielle ferme. La communication presse et la fiche Tiqets évoquent le 3 janvier 2027, à présenter avec leur attribution si utile.
- Distinguer la politique de billets : la fiche officielle annonce un échange possible jusqu'à 24 h avant la venue contre 2 € par billet ; l'offre Tiqets consultée est indiquée ni remboursable ni reprogrammable. Vérifier les conditions exactes au moment de la rédaction et ne pas présenter les offres comme interchangeables.
- Préserver les informations pratiques encore utiles : recommandé à partir de 2 ans sans âge minimum strict ; attention au bruit, casques anti-bruit sous conditions et précautions pour photosensibilité/vertige ; 16 € plein tarif, 9 € de 6 à 25 ans, 43 € pour 2 adultes et 2 jeunes de 6 à 25 ans, gratuité des moins de 6 ans avec réservation ; poussettes possibles, porte-bébé conseillé, table à langer, fraîcheur du bâtiment ; créneau réservé, tolérance d'arrivée sous réserve et dernier accès, parking, transports et accès.
- Conserver les détails de l'expérience (dinosaures projetés, bande-son, narration) sans répéter les mêmes arguments. Vérifier les informations évolutives à la source ; ne pas transformer les réserves de sécurité en interdictions.

## Sources de départ

- Bassins des Lumières, exposition : https://www.bassins-lumieres.com/fr/programmation/planete-prehistorique-dinosaures
- Bassins des Lumières, horaires et expositions du jour : https://www.bassins-lumieres.com/fr/visiter/informations-pratiques/horaires
- Bassins des Lumières, tarifs : https://www.bassins-lumieres.com/fr/visiter/informations-pratiques/tarifs
- Bassins des Lumières, billetterie : https://www.bassins-lumieres.com/fr/billetterie
- Bassins des Lumières, accessibilité et FAQ déjà référencées dans l'article source : https://www.bassins-lumieres.com/fr/acces

## Affiliation

Le billet Tiqets existant correspond à l'exposition, mais le lecteur doit comprendre sa politique de modification distincte de la billetterie officielle. L'hébergement familial B&B HOTEL Bordeaux Bassins à flot sur Booking.com est une seconde piste naturelle pour les visiteurs venus de loin. Garder un conseil pratique discret ; éviter dans le corps tout lien officiel de réservation concurrent de la même prestation.

## Continuations internes

- Conserver le lien pertinent vers la Cité du Vin en famille si la visite s'inscrit dans un séjour à Bordeaux : /articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/.
- Ne pas transformer le refresh en guide général de Bordeaux ni en panorama des autres expositions des Bassins ; celles-ci servent seulement à expliquer pourquoi le calendrier exact importe.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/sorties/(2026)/(09)/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/index.md

---
title: "Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs"
subtitle: Ce que montre l'expérience des Bassins des Lumières et ce qu'il faut prévoir avant de réserver
summary: "Durée, âge conseillé, tarifs, poussette et bruit: les points utiles pour préparer Planète Préhistorique aux Bassins des Lumières."
slug: planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs
status: published
publishedAt: 2026-09-27T14:41:35+02:00
updatedAt: 2026-09-27T14:46:06+02:00
category: sorties
readingTime: 5
location:
  city: Bordeaux
  department: Gironde
  region: Nouvelle-Aquitaine
topic:
  key: sorties|bordeaux|planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs|2026
  keywords:
    - Planète Préhistorique Bordeaux enfants
    - Bassins des Lumières dinosaures
image:
  src: "/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs.webp"
  alt: "Intérieur de la base sous-marine de Bordeaux"
sources:
  - title: Bassins des Lumières - Prehistoric Planet
    url: https://www.bassins-lumieres.com/en/prehistoric-planet
  - title: Bassins des Lumières - Billetterie Prehistoric Planet
    url: https://www.bassins-lumieres.com/en/tickets/6a451d25c7196d575468026b
  - title: Bassins des Lumières - Quels sont les tarifs ?
    url: https://www.bassins-lumieres.com/faq/fr/2-horaires-et-tarifs/quels-sont-les-tarifs
  - title: Bassins des Lumières - Les Bassins sont-ils accessibles à tout âge ?
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-bassins-des-lumieres-sont-ils-accessibles-a-tout-age
  - title: Bassins des Lumières - Casques anti-bruit
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/est-ce-que-vous-pretez-des-casques-anti-bruit
  - title: Bassins des Lumières - Épilepsie, photosensibilité et vertige
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-expositions-sont-elles-convenables-pour-les-personnes-souffrant-depilepsie-etou-de-vertige
  - title: Bassins des Lumières - Accès et accessibilité
    url: https://www.bassins-lumieres.com/fr/acces
  - title: Bassins des Lumières - Table à langer
    url: https://www.bassins-lumieres.com/faq/fr/4-accessibilite/y-a-t-il-une-table-a-langer-a-linterieur
  - title: Bassins des Lumières - Température intérieure
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/quelle-est-la-temperature-a-linterieur-des-bassins-des-lumieres
  - title: Bassins des Lumières - Retard ou avance sur un créneau réservé
    url: https://www.bassins-lumieres.com/faq/fr/3-votre-visite/ja-une-reservation-pour-un-horaire-mais-je-serais-en-retard-ou-en-avance
  - title: Claudine Colin Communication - Planète Préhistorique
    url: https://www.claudinecolin.com/fr/3216-planete-prehistorique-dinosaures-l-experience-immersive
affiliate:
  enabled: true
  type: travel
  destination: Bordeaux
---

Planète Préhistorique est une expérience immersive consacrée aux dinosaures, projetée dans l'ancienne base sous-marine qui abrite les Bassins des Lumières à Bordeaux. À partir du 3 octobre 2026, les familles entrent dans un décor à 360° où les animaux apparaissent à taille monumentale sur les parois et autour des bassins.

Le programme est inspiré de l'univers de la série documentaire *Prehistoric Planet*. La [présentation des Bassins des Lumières](https://www.bassins-lumieres.com/en/prehistoric-planet) annonce notamment T. rex, vélociraptors, ptérosaures géants, mosasaures et Dreadnoughtus, avec des scènes de chasse, de vie familiale et de découverte des fossiles. La bande-son reprend des compositions de Hans Zimmer, Anže Rozman et Kara Talve, avec une narration française de Gérard Lanvin.

## Ce que comprend réellement la visite

<!-- article-image-body:01 -->

![Projections lumineuses dans les Bassins des Lumières à Bordeaux](/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs-body-01.webp)

*Photo: [\[1\]](https://commons.wikimedia.org/wiki/File:Bassins_des_Lumi%C3%A8res_dans_la_Base_Sous-Marine_(54952344718).jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Il ne s'agit pas d'un musée de paléontologie avec des squelettes ou des vitrines. L'intérêt repose sur les projections monumentales, le son et l'impression d'être entouré par les paysages et les animaux préhistoriques.

La billetterie officielle indique qu'un billet donne accès à deux expositions et prévoit environ une heure sur place. C'est une durée assez courte pour envisager la sortie avec des enfants sans devoir bloquer une demi-journée.

Pour les dates, il faut regarder la programmation avec un peu d'attention. Les Bassins présentent actuellement l'expérience « à partir du 3 octobre 2026 » sans afficher de date de fin ferme sur leur programmation. La [communication presse de l'opération](https://www.claudinecolin.com/fr/3216-planete-prehistorique-dinosaures-l-experience-immersive) annonce toutefois une présentation jusqu'au 3 janvier 2027. Si vous visez novembre, décembre ou début janvier, vérifiez donc les créneaux réellement ouverts avant de vous déplacer.

## À partir de quel âge y aller avec un enfant?

Les Bassins des Lumières ne fixent pas d'âge minimum général, mais leur [FAQ recommande la visite à partir de 2 ans](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-bassins-des-lumieres-sont-ils-accessibles-a-tout-age). Le lieu est sombre et les projections occupent de très grandes surfaces: un jeune enfant peut donc être impressionné même s'il adore les dinosaures.

Le volume sonore annoncé ne dépasse pas 80 décibels. Pour les plus petits ou les enfants sensibles au bruit, des [casques anti-bruit peuvent être demandés à l'accueil](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/est-ce-que-vous-pretez-des-casques-anti-bruit), selon disponibilité, contre une pièce d'identité.

En raison des effets de lumière, les expositions peuvent [présenter des risques pour les personnes épileptiques, photosensibles ou souffrant de vertige](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/les-expositions-sont-elles-convenables-pour-les-personnes-souffrant-depilepsie-etou-de-vertige). C'est un point à prendre en compte avant de réserver si un membre de la famille est concerné.

## Combien coûte la sortie en famille?

Les [tarifs publiés par les Bassins des Lumières](https://www.bassins-lumieres.com/faq/fr/2-horaires-et-tarifs/quels-sont-les-tarifs) sont de 16 € au plein tarif et 9 € pour les 6-25 ans. Le tarif famille coûte 43 € pour deux adultes et deux jeunes de 6 à 25 ans.

L'entrée est gratuite pour les moins de 6 ans, mais un billet gratuit doit être réservé et un justificatif peut être demandé. Pour une famille composée de deux adultes et de deux enfants ou adolescents payants, le forfait famille est donc l'option à regarder en premier.

Les horaires varient selon les jours et les périodes. La dernière entrée se fait une heure avant la fermeture, ce qui compte ici puisque l'expérience elle-même dure environ une heure.

## Poussette, porte-bébé et température: les détails qui comptent

Les [poussettes sont autorisées](https://www.bassins-lumieres.com/fr/acces), mais le site conseille le porte-bébé pour circuler plus facilement. Une [table à langer est disponible](https://www.bassins-lumieres.com/faq/fr/4-accessibilite/y-a-t-il-une-table-a-langer-a-linterieur) dans les toilettes des femmes entre les alvéoles 3 et 4.

Autre particularité de l'ancienne base sous-marine: la température intérieure suit les saisons. Les Bassins préviennent qu'[il fait frais en hiver](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/quelle-est-la-temperature-a-linterieur-des-bassins-des-lumieres) et que le lieu n'est pas climatisé. Pour une visite d'automne ou d'hiver avec des enfants, mieux vaut donc garder une couche chaude plutôt que se fier à la température extérieure.

## Réserver un créneau sans se piéger

Le billet est associé à une date et une heure. Les [Bassins acceptent une arrivée jusqu'à 30 minutes avant ou après le créneau prévu](https://www.bassins-lumieres.com/faq/fr/3-votre-visite/ja-une-reservation-pour-un-horaire-mais-je-serais-en-retard-ou-en-avance), sauf pour le dernier horaire de l'exposition. En période de forte affluence, l'accès peut néanmoins être refusé si les créneaux suivants sont complets.

Réserver à l'avance reste donc le choix le plus simple, surtout pendant les vacances scolaires. Pour acheter l'entrée en ligne, [Tiqets propose actuellement un billet dédié à Planète Préhistorique](https://www.tiqets.com/fr/activites-attractions-bordeaux-c67101/billets-pour-bassins-des-lumieres-prehistoric-planet-exposition-a-la-decouverte-des-dinosaures-p1137322/). L'offre est actuellement indiquée comme non remboursable et non reprogrammable: vérifiez ces conditions au moment du paiement.

Pour éviter une mauvaise surprise, vérifiez aussi l'horaire de fermeture du jour: arriver à la dernière minute réduit directement le temps disponible pour profiter de l'expérience.

## Venir aux Bassins des Lumières avec des enfants

<!-- article-image-body:02 -->

![Vue extérieure de la base sous-marine de Bordeaux](/images/articles/2026/09/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs-body-02.webp)

*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Bordeaux_Base_Sous-Marine_Ext%C3%A9rieure_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les Bassins des Lumières se trouvent impasse Brown de Colstoun, dans le quartier de la base sous-marine. En voiture, un parking sécurisé peut être réservé en ligne. Un parking municipal gratuit existe également devant le site, mais les [informations d'accès](https://www.bassins-lumieres.com/fr/acces) préviennent que les places y sont rapidement occupées.

Depuis le centre de Bordeaux, les transports en commun permettent aussi d'éviter la recherche d'une place. Depuis Quinconces, le tram C jusqu'à Ravezies puis le bus 9 vers l'arrêt Base sous-marine laisse environ 500 mètres à parcourir à pied. Depuis Tourny, le bus 5 jusqu'à Bassins à Flot laisse environ 700 mètres de marche.

Si vous prévoyez une autre visite pendant votre passage à Bordeaux, notre guide de la [Cité du Vin en famille](/articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/) peut compléter le programme sans repartir sur une autre destination.

## Dormir dans le quartier si vous venez de loin

Pour une famille qui transforme la sortie en séjour à Bordeaux, [B&B HOTEL Bordeaux Bassins à flot](https://www.booking.com/hotel/fr/b-amp-b-bordeaux-bassins-a-flot.fr.html) propose des chambres familiales dans le quartier. Les tarifs dépendent fortement des dates: comparez le prix et les conditions pour votre composition familiale avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/anatomik-park-a-cap-sciences-a-partir-de-quel-age-et-combien-de-temps-prevoir/ | Anatomik Park à Cap Sciences: à partir de quel âge et combien de temps prévoir? | activites | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/cite-du-vin-a-bordeaux-en-famille-tarifs-duree-et-conseils-de-visite/ | Cité du Vin à Bordeaux en famille: tarifs, durée et conseils de visite | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/visites-famille-art-deco-bordeaux-2026/ | Art déco à Bordeaux: deux visites en famille au MusBA en 2026 | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/maison/composteur-gratuit-a-bordeaux-metropole-que-choisir-selon-son-logement/ | Composteur gratuit à Bordeaux Métropole: que choisir selon son logement? | maison | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/activites/musee-parc-des-dinosaures-de-meze-en-famille-fossiles-visite-et-conseils/ | Musée-Parc des Dinosaures de Mèze en famille: fossiles, visite et conseils | activites | Mèze, Hérault, Occitanie
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/sorties/planete-prehistorique-a-bordeaux-avec-des-enfants-age-duree-et-tarifs/ | Planète Préhistorique à Bordeaux avec des enfants: âge, durée et tarifs | sorties | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/voyages/dune-du-pilat-avec-une-poussette-ce-qu-il-faut-prevoir-avant-la-montee/ | Dune du Pilat avec une poussette: ce qu'il faut prévoir avant la montée | voyages | La Teste-de-Buch, Gironde, Nouvelle-Aquitaine
- /articles/parentalite/bulles-girondines-a-villenave-d-ornon-un-espace-pour-les-parents-et-les-jeunes-enfants/ | Bulles Girondines à Villenave-d'Ornon: un espace pour les parents et les jeunes enfants | parentalite | Villenave-d'Ornon, Gironde, Nouvelle-Aquitaine
- /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | Château fort de Sedan en famille: parcours, tarifs et conseils de visite | sorties | Sedan, Ardennes, Grand Est
- /articles/sorties/grotte-chauvet-2-en-famille-des-animaux-peints-a-l-enquete-scientifique/ | Grotte Chauvet 2 en famille: des animaux peints à l’enquête scientifique | sorties | Vallon-Pont-d’Arc, Ardèche, Auvergne-Rhône-Alpes
- /articles/sorties/grottes-de-gargas-en-famille-voir-les-mains-prehistoriques-et-decouvrir-nestploria/ | Grottes de Gargas en famille: voir les mains préhistoriques et découvrir Nestploria | sorties | Aventignan, Hautes-Pyrénées, Occitanie
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/puy-de-dome-en-famille-train-randonnee-ou-les-deux/ | Puy de Dôme en famille: train, randonnée ou les deux? | sorties | Orcines, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
