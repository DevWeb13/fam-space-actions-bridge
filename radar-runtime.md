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

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois"
subtitle: Danse, musique et exploration sensorielle à la bibliothèque Gutenberg, sur réservation.
summary: Le 5 décembre 2026, la bibliothèque Gutenberg propose un spectacle gratuit de 45 minutes pour les enfants de 6 mois à 3 ans. Horaires, inscription et accès pour préparer la sortie.
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: /images/articles/2026/11/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans.webp
  alt: Bibliothèque Gutenberg à Paris, lieu du spectacle Écoute, je danse !
sources:
  - title: Ville de Paris - Écoute, je danse !
    url: https://www.paris.fr/evenements/ecoute-je-danse-117403
  - title: Ville de Paris - Bibliothèque Gutenberg
    url: https://www.paris.fr/lieux/bibliotheque-gutenberg-1736
eventEndsAt: 2026-12-05
topic:
  key: evenements|paris|ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans|2026
  keywords:
    - Écoute je danse Paris décembre 2026
    - spectacle gratuit bébé Paris 5 décembre
    - bibliothèque Gutenberg spectacle 6 mois 3 ans
slug: ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans
status: published
publishedAt: 2026-11-04T21:32:12.084Z
updatedAt: null
readingTime: 2
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(11)/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/index.md
  targetSha: f23c1cc27da3595778b663e4d90c5db294339a8b
  targetUrl: /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/
  decision: Savoir si cette séance est adaptée à son bébé et organiser l'inscription et la venue avec une poussette en connaissant les équipements réellement disponibles.
  affiliationPotential: Spectacle gratuit sur inscription municipale, aucun billet à vendre. Pour les familles intégrant la sortie à un séjour, offre Booking vérifiée du Novotel Paris Porte Versailles avec chambre familiale et canapé-lit, capacité et disponibilité à vérifier selon les âges.
  gsc:
    retrievedAt: 2026-11-27T09:15:00+01:00
    dataThrough: 2026-11-25
    signal: needs_query_check
    basis: "Visibilité récente : 20 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-09
    peakEnd: 2026-11-11
    recentStart: 2026-11-23
    recentEnd: 2026-11-25
    peakImpressions: 20
    recentImpressions: 1
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Écoute je danse Paris décembre 2026
      - spectacle gratuit bébé Paris 5 décembre
      - bibliothèque Gutenberg spectacle 6 mois 3 ans
---

## Mission retenue
Actualiser le spectacle Écoute, je danse ! à la bibliothèque Gutenberg, Paris 15e, le 5 décembre 2026.

## Pourquoi cette mission
Chute rapide d'impressions, cause non établie. Lacune éditoriale indépendante: l'article indique que la présence d'une table à langer n'est pas confirmée alors que la fiche municipale confirme toilettes et table à langer, ainsi que les espaces publics de plain-pied. Ces informations sont directement utiles au public de 6 mois à 3 ans. Les articles Parc Phoenix, Metz, Laval, Flottins et meubles d'occasion ont déjà été actualisés; l'atelier Pokémon du lendemain dispose déjà des informations sur les équipements bébé et le programme du marché départemental de Dijon reste inchangé.

## Décision du lecteur
Déterminer si la sortie convient à son enfant et préparer sa venue en connaissant les conditions d'accueil.

## Faits à traiter
- Maintenir date, gratuité, réservation obligatoire, 11 h-11 h 45, âge de 6 mois à 3 ans, nature du spectacle, adresse et téléphone 01 45 54 69 76. La fiche de l'événement indique aussi une adresse électronique bibliotheque.gutenberg@paris.fr: proposer le contact, sans garantir une réservation par mail ni une place.
- Corriger le passage sur la table à langer: toilettes et table à langer sont explicitement confirmées par la Ville; espaces publics de plain-pied, bibliothèque sur une dalle piétonne. Aucun emplacement réservé aux poussettes ni espace dédié à l'alimentation du bébé confirmé.
- Bibliothèque ouverte le samedi matin de 10 h à 12 h 30 sur la période du 3 novembre au 12 décembre; arrivée possible avant le spectacle sous réserve des consignes d'accueil. Les arrêts indiqués par la Ville sont Pont du Garigliano, Lourmel et Parc André Citroën. Vérifier leurs modes/lignes si précisés dans l'article; privilégier le lien vers le guide poussette. Ne pas garantir un parcours intégralement sans marches.
- Conserver les réserves sur le volume sonore, les sorties et retours pendant la séance et l'accompagnement. Accessibilité confirmée aux catégories de handicap indiquées par la Ville, accueil en langue des signes non disponible.
- Conserver le crédit image et eventEndsAt au 5 décembre 2026.

## Sources de départ
- https://www.paris.fr/evenements/ecoute-je-danse-117403
- https://www.paris.fr/lieux/bibliotheque-gutenberg-1736

## Affiliation
Spectacle gratuit sur inscription, aucune billetterie partenaire naturelle. Si un séjour est envisagé, https://www.booking.com/hotel/fr/novotel-paris-pte-versailles.fr.html propose une chambre familiale avec grand lit double et canapé-lit (fiche indexée vérifiée; accès direct soumis à contrôle anti-robot). Vérifier capacité, lit bébé, prix et disponibilité selon les dates et les âges, sans garantie. Intégrer brièvement et naturellement, avec les métadonnées affiliation adaptées si nécessaire.

## Continuations internes
Conserver le guide Paris avec une poussette, route vérifiée: /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/. Ne pas répéter son contenu sur les transports.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(11)/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/index.md

---
title: "Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois"
subtitle: Danse, musique et exploration sensorielle à la bibliothèque Gutenberg, sur réservation.
summary: Le 5 décembre 2026, la bibliothèque Gutenberg propose un spectacle gratuit de 45 minutes pour les enfants de 6 mois à 3 ans. Horaires, inscription et accès pour préparer la sortie.
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: "/images/articles/2026/11/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans.webp"
  alt: "Bibliothèque Gutenberg à Paris, lieu du spectacle Écoute, je danse !"
sources:
  - title: Ville de Paris - Écoute, je danse !
    url: https://www.paris.fr/evenements/ecoute-je-danse-117403
  - title: Ville de Paris - Bibliothèque Gutenberg
    url: https://www.paris.fr/lieux/bibliotheque-gutenberg-1736
eventEndsAt: 2026-12-05
topic:
  key: evenements|paris|ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans|2026
  keywords:
    - Écoute je danse Paris décembre 2026
    - spectacle gratuit bébé Paris 5 décembre
    - bibliothèque Gutenberg spectacle 6 mois 3 ans
slug: ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans
status: published
publishedAt: 2026-11-04T21:32:12.084Z
updatedAt: null
readingTime: 2
---
<!-- article-image-credit -->
*Photo: [Guilhem Vellut from Paris, France](https://commons.wikimedia.org/wiki/File:Biblioth%C3%A8que_Gutenberg_@_Paris_(26728362855).jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le samedi **5 décembre 2026**, la bibliothèque Gutenberg, dans le 15e arrondissement de Paris, accueille **Écoute, je danse !**, un spectacle de danse, de musique et d'exploration sensorielle destiné aux enfants **de 6 mois à 3 ans**. La séance est **gratuite**, de **11 h à 11 h 45**, mais **la réservation est obligatoire**.

## Que vont découvrir les tout-petits ?

La [Ville de Paris](https://www.paris.fr/evenements/ecoute-je-danse-117403) présente une exploration sonore et dansante dans l'ambiance des fêtes de fin d'année. Il s'agit d'un spectacle, et non d'un atelier de fabrication ou d'une activité demandant à l'enfant de réaliser quelque chose.

La fiche ne précise pas le volume sonore ni les possibilités de sortir et de revenir pendant la représentation. Pour un bébé sensible aux sons ou peu habitué aux spectacles, la bibliothèque pourra préciser les conditions d'accueil.

## Comment réserver ?

La séance est annoncée **uniquement sur inscription**. Contactez la **bibliothèque Gutenberg au 01 45 54 69 76** pour connaître les modalités, les places restantes et les conditions d'accompagnement des enfants. La gratuité ne garantit pas la disponibilité d'une place.

## Adresse et accueil avec un bébé

**Bibliothèque Gutenberg, 8 rue de la Montagne d'Aulas, Paris 15e.** La [fiche officielle de la bibliothèque](https://www.paris.fr/lieux/bibliotheque-gutenberg-1736) indique une accessibilité aux personnes à mobilité réduite et à plusieurs catégories de handicap, mais **pas d'accueil en langue des signes**. Elle ne confirme pas la présence d'une table à langer, d'un espace pour nourrir bébé ou d'un stationnement réservé aux poussettes: demandez ces renseignements si vous en avez besoin.

Pour préparer le trajet, consultez notre guide [Paris avec une poussette: métro, RER, bus ou tram, que choisir ?](https://www.fam-space.fr/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/bons-plans/sainte-chapelle-et-conciergerie-en-famille-a-paris-quels-billets-choisir/ | Sainte-Chapelle et Conciergerie en famille à Paris: quels billets choisir ? | bons-plans | Paris, Paris, Île-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | 2026-11-05T00:34:45.481Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
