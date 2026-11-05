# Radar Fam Space - Phase 3/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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
- pour un refresh, `substantialChanges`: au moins deux changements substantiels;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau.

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
title: "Soirée jeux gratuite à Paris le 21 novembre 2026 : jouer en famille à la bibliothèque"
subtitle: Jeux vidéo, jeux de société et accueil en langue des signes française dans le 9e arrondissement
summary: Le samedi 21 novembre, la bibliothèque Louise Walser-Gaillard organise une soirée gratuite de 16 h 30 à 21 h, ouverte à tous. Voici le programme et ce que les familles peuvent apporter.
category: sorties
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - soirée jeux Paris 21 novembre 2026
  - bibliothèque Louise Walser-Gaillard jeux famille
sources:
  - title: Ville de Paris — Et si l'on jouait ?
    url: https://www.paris.fr/evenements/et-si-l-on-jouait-125571
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille
  decision: Savoir si cette soirée gratuite et ouverte à tous convient à sa famille, quand venir, ce qu'on peut apporter et comment profiter de l'accueil bilingue français–LSF.
  affiliationPotential: Activité gratuite sans billetterie. Pour une famille de passage, l'hôtel Joke - Astotel, dans le 9e, annonce des chambres familiales sur Booking.com ; vérifier les dates et conditions avant toute réservation.
  gsc:
    retrievedAt: 2026-11-05T02:33:14+01:00
    dataThrough: 2026-11-02
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Paris — Et si l'on jouait ? »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-21
---

Envie d'une sortie où parents et enfants peuvent jouer ensemble sans acheter de billet ? **Samedi 21 novembre 2026, de 16 h 30 à 21 h**, la bibliothèque Louise Walser-Gaillard, dans le 9e arrondissement de Paris, propose « Et si l'on jouait ? ». La rencontre est **gratuite et ouverte à tout public**, avec un accueil bilingue en français et en langue des signes française (LSF).

## Jeux vidéo d'abord, jeux de société ensuite

La soirée commence par les jeux vidéo, avant de passer aux jeux de société pour les petits et les grands. La [Ville de Paris présente le programme](https://www.paris.fr/evenements/et-si-l-on-jouait-125571), mais ne précise ni les titres des jeux proposés ni l'heure exacte du passage d'une activité à l'autre.

Pour une famille, l'intérêt est de pouvoir partager un moment autour du jeu, plutôt que de suivre un atelier avec un niveau ou un âge imposé. Aucun âge minimum n'est annoncé. Si vous venez avec un très jeune enfant, demandez à la bibliothèque quels jeux seront adaptés.

## Que peut-on apporter ?

Vous pouvez venir avec **vos jeux préférés** pour les faire découvrir aux autres participants. La bibliothèque invite également les visiteurs à apporter **boissons et nourriture à partager** entre deux parties. Il ne s'agit pas d'une restauration fournie sur place : prévoyez ce dont votre famille aura besoin.

La rencontre s'étend jusqu'à 21 h : avec des enfants qui se couchent tôt, rien n'oblige à prévoir toute la soirée. En revanche, aucun créneau distinct par tranche d'âge n'est annoncé.

## Adresse, accessibilité et renseignements

La rencontre a lieu à la **bibliothèque Louise Walser-Gaillard, 26 rue Chaptal, 75009 Paris**. L'événement est annoncé en intérieur. La fiche officielle indique une accessibilité pour les personnes à mobilité réduite et les personnes déficientes auditives, ainsi qu'un **accueil bilingue LSF/français**. Elle ne renseigne pas l'accessibilité pour les déficiences visuelles ou mentales.

La Ville n'annonce pas d'inscription obligatoire sur sa fiche. Pour confirmer les modalités d'accueil, les jeux proposés ou un besoin particulier, vous pouvez joindre la bibliothèque au **01 49 70 92 80** avant de vous déplacer.

Si vous venez avec une poussette, notre guide [pour choisir entre métro, RER, bus et tram à Paris](https://www.fam-space.fr/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/) aide à préparer un trajet sans mauvaise surprise.

## Si vous passez le week-end à Paris

Pour une famille qui souhaite rester dans le 9e arrondissement, l'[Hotel Joke - Astotel sur Booking.com](https://www.booking.com/hotel/fr/joke-astotel.html) est une possibilité à examiner : l'établissement, situé rue Blanche, présente notamment des chambres familiales. Vérifiez la capacité adaptée à l'âge des enfants, les conditions et la disponibilité pour vos dates avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/paris-plages-2026-en-famille/ | Paris Plages 2026: où se baigner et jouer avec des enfants | evenements | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/evenements/cerfs-volants-a-paris-le-21-novembre-2026-spectacle-ou-atelier-des-2-ans/ | Cerfs-volants à Paris le 21 novembre 2026: spectacle et atelier dès 2 ans | evenements | Paris, Paris, Île-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | Atelier Scratch gratuit à Paris le 7 novembre 2026: créer un jeu vidéo | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | Ateliers textiles au musée Bourdelle à Paris: styliste ou broderie en famille | activites | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/sorties/visiter-l-abbaye-de-fontenay-avec-des-enfants-meme-en-hiver/ | Visiter l'abbaye de Fontenay avec des enfants, même en hiver | sorties | Marmagne, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/musee-de-la-grande-guerre-a-meaux-avec-des-enfants-que-voir-selon-leur-age/ | Musée de la Grande Guerre à Meaux avec des enfants: que voir selon leur âge ? | sorties | Meaux, Seine-et-Marne, Île-de-France
- /articles/sorties/aquarium-de-vendee-en-famille-des-poissons-de-nos-cotes-aux-mers-tropicales/ | Aquarium de Vendée en famille: des poissons de nos côtes aux mers tropicales | sorties | Talmont-Saint-Hilaire, Vendée, Pays de la Loire
- /articles/sorties/ocearium-du-croisic-en-famille-animations-tarifs-et-visite/ | Océarium du Croisic en famille: animations, tarifs et visite | sorties | Le Croisic, Loire-Atlantique, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | 2026-11-04T08:27:47.912Z
- opportunity | /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | 2026-11-04T01:30:49.478Z
- opportunity | /articles/evenements/cerfs-volants-a-paris-le-21-novembre-2026-spectacle-ou-atelier-des-2-ans/ | 2026-11-03T19:37:26.112Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | 2026-11-05T00:34:45.481Z
- opportunity | /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | 2026-11-04T21:32:12.180Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
