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
title: "Atelier musical gratuit à Paris le 18 novembre 2026 : fabriquer un bâton de pluie dès 6 ans"
subtitle: À la bibliothèque Buffon, une heure pour créer son instrument pendant Monte le son
summary: Mercredi 18 novembre, les enfants dès 6 ans peuvent fabriquer gratuitement un bâton de pluie à la bibliothèque Buffon, dans le 5e arrondissement de Paris. L'atelier dure de 16 h à 17 h et nécessite une inscription préalable.
category: activites
location:
  city: Paris
  department: Paris
  region: Île-de-France
keywords:
  - atelier bâton de pluie Paris 18 novembre 2026
  - bibliothèque Buffon atelier enfant gratuit
  - Monte le son 2026 enfant
sources:
  - title: "Ville de Paris - L'atelier du mercredi : Fabrique ton instrument"
    url: https://www.paris.fr/evenements/l-atelier-du-mercredi-novembre-2026-fabrique-ton-instrument-114832
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans
  decision: Savoir si l'atelier de fabrication d'un bâton de pluie convient à son enfant dès 6 ans et comment réserver sa place pour le 18 novembre.
  affiliationPotential: Atelier gratuit sans billet marchand. Pour les familles en séjour, Hôtel des Nations Saint Germain, 54 rue Monge, repéré sur Booking.com (https://www.booking.com/hotel/fr/desnations.en-gb.html), sans disponibilité ni prix confirmés.
  gsc:
    retrievedAt: 2026-11-06T01:28:02+01:00
    dataThrough: 2026-11-03
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « Ville de Paris - L'atelier du mercredi : Fabrique ton instrument »; aucune page forte GSC n'est requise."
eventEndsAt: 2026-11-18
---

Envie de faire découvrir la musique à votre enfant autrement qu'en écoutant un concert ? **Mercredi 18 novembre 2026, de 16 h à 17 h**, la bibliothèque Buffon, à Paris, invite les enfants **dès 6 ans** à fabriquer un bâton de pluie. Cet atelier du festival *Monte le son* est **gratuit, mais la réservation est obligatoire**.

## Un instrument à fabriquer soi-même

Le bâton de pluie est un instrument qui produit un son évoquant la pluie lorsqu'on le retourne. Pendant cet atelier créatif, les enfants sont invités à fabriquer le leur : une façon concrète d'aborder les sons et la musique en manipulant un objet.

L'activité se tient dans la **section jeunesse, au deuxième étage** de la bibliothèque Buffon. La fiche municipale ne précise ni le détail des étapes de fabrication ni le matériel à apporter : mieux vaut demander à la bibliothèque lors de l'inscription plutôt que prévoir des fournitures particulières.

## Comment réserver une place ?

L'inscription se fait **directement à la bibliothèque ou par téléphone au 01 55 43 25 25**. La gratuité ne dispense pas de réserver et aucune disponibilité en temps réel n'est annoncée.

Pour décider avant de vous déplacer, voici les informations essentielles :

- **Date et horaire :** mercredi 18 novembre 2026, de 16 h à 17 h.
- **Âge :** à partir de 6 ans.
- **Adresse :** bibliothèque Buffon, 15 bis rue Buffon, 75005 Paris.
- **Lieu précis :** section jeunesse, deuxième étage.
- **Tarif :** gratuit, sur inscription obligatoire.

La [fiche de l'événement publiée par la Ville de Paris](https://www.paris.fr/evenements/l-atelier-du-mercredi-novembre-2026-fabrique-ton-instrument-114832) permet de retrouver les informations officielles avant la sortie.

## Accessibilité : vérifier selon les besoins de l'enfant

La Ville de Paris indique que l'événement est **accessible aux personnes à mobilité réduite**. En revanche, sa fiche le signale comme non accessible aux personnes ayant une déficience auditive, visuelle ou mentale ; elle précise également que l'accueil en langue des signes n'est pas disponible. Pour un besoin particulier, contactez la bibliothèque avant de réserver.

## Pour les familles qui séjournent à Paris

Si cet atelier s'inscrit dans quelques jours de découverte de la capitale, l'[Hôtel des Nations Saint Germain sur Booking.com](https://www.booking.com/hotel/fr/desnations.en-gb.html), au 54 rue Monge dans le 5e arrondissement, constitue une piste d'hébergement dans le secteur. Vérifiez directement les types de chambres, les tarifs et les disponibilités aux dates de votre séjour : ils ne sont pas confirmés ici.

Pour organiser vos déplacements avec un plus jeune enfant, consultez aussi notre guide [Paris avec une poussette : métro, RER, bus ou tram, que choisir ?](/articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/cerfs-volants-a-paris-le-21-novembre-2026-spectacle-ou-atelier-des-2-ans/ | Cerfs-volants à Paris le 21 novembre 2026: spectacle et atelier dès 2 ans | evenements | Paris, Paris, Île-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | Atelier Scratch gratuit à Paris le 7 novembre 2026: créer un jeu vidéo | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | Ateliers textiles au musée Bourdelle à Paris: styliste ou broderie en famille | activites | Paris, Paris, Île-de-France
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/activites/le-pal-2027-en-famille-une-ou-deux-journees-entre-animaux-et-attractions/ | Le PAL 2027 en famille: une ou deux journées entre animaux et attractions ? | activites | Saint-Pourçain-sur-Besbre, Allier, Auvergne-Rhône-Alpes
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/visiter-le-museum-du-havre-avec-des-enfants-que-decouvrir/ | Visiter le Muséum du Havre avec des enfants: que découvrir ? | activites | Le Havre, Seine-Maritime, Normandie
- /articles/activites/l-aventure-michelin-en-famille-a-clermont-ferrand/ | L’Aventure Michelin en famille à Clermont-Ferrand | activites | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | 2026-11-04T08:27:47.912Z
- opportunity | /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | 2026-11-04T01:30:49.478Z
- opportunity | /articles/evenements/cerfs-volants-a-paris-le-21-novembre-2026-spectacle-ou-atelier-des-2-ans/ | 2026-11-03T19:37:26.112Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | 2026-11-05T00:34:45.481Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
