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
title: "Bédéciné 2026 à Illzach en famille : ateliers et spectacles selon l'âge"
subtitle: "Les 14 et 15 novembre : pass famille, séances gratuites et accès aux ateliers"
summary: À Bédéciné 2026 à Illzach, comparez les billets et choisissez les ateliers BD, spectacles et projections adaptés à l'âge des enfants.
category: evenements
location:
  city: Illzach
  department: Haut-Rhin
  region: Grand Est
keywords:
  - Bédéciné 2026 Illzach famille
  - Bédéciné 2026 ateliers enfants
  - Bédéciné Illzach billets pass famille
  - festival BD Illzach spectacles enfants
sources:
  - title: Espace 110 - Programme Bédéciné 2026
    url: https://www.espace110.org/saison-culturelle/bedecine/programme-bedecine
  - title: Espace 110 - Ateliers Bédéciné 2026, âges et horaires
    url: https://www.espace110.org/saison-culturelle/bedecine/programme-bedecine/les-ateliers
  - title: Espace 110 - Bédéciné en pratique, tarifs et accès
    url: https://www.espace110.org/saison-culturelle/bedecine/bedecine-en-pratique
  - title: Mulhouse Alsace Agglomération - Festival Bédéciné 2026
    url: https://mag.mulhouse-alsace.fr/evenement/festival-bedecine-2026-a-illzach/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age
  decision: Permettre aux parents de choisir les spectacles et ateliers réellement accessibles à chaque âge, de prévoir les places limitées sans confondre entrée payante et activités gratuites, puis de choisir entre billet journée et pass famille ou deux jours.
  affiliationPotential: "Aucun billet partenaire identifié pour l'entrée au festival sur Tiqets, GetYourGuide ou Klook ; billetterie propre à l'Espace 110. Hébergement secondaire pertinent pour les familles de passage : B&B HOTEL Mulhouse Ile Napoléon à Illzach, référencé sur Booking.com (https://www.booking.com/hotel/fr/b-amp-b-mulhouse-ile-napoleon.fr.html), avec notamment une chambre triple ; vérifier capacité, trajets vers l'Espace 110, prix et disponibilité aux dates du 14-15 novembre."
  gsc:
    retrievedAt: 2026-10-23T08:27:47+02:00
    dataThrough: 2026-10-20
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Espace 110 - Programme Bédéciné 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Créer une page événementielle sur Bédéciné, festival de bande dessinée de l'Espace 110 à Illzach, les samedi 14 et dimanche 15 novembre 2026 de 10 h à 18 h. L'offre famille va des ateliers de papier pour les 1–4 ans accompagnés aux ateliers manga pour les 12–16 ans, avec spectacles et projections.

## Pourquoi cette mission
Opportunité datée, programme 2026 détaillé et tarifs publiés, décision familiale concrète encore utile trois semaines avant l'événement. Aucun article Bédéciné trouvé dans le catalogue compact ; les rapprochements de titres sont génériques et ne constituent pas des doublons. Le refresh candidat Carte Avantage Adulte SNCF reste globalement exact selon les règles officielles 2026 : sa baisse d'impressions GSC est « uncertain », sans défaut indépendant suffisamment fort. L'expansion de la page forte Mini World Lyon serait proche de l'article Halloween déjà publié ; l'expansion Transports à Paris risque de recouvrir des pages existantes. La saisonnalité et la richesse pratique de Bédéciné passent devant.

## Décision du lecteur
Savoir quel spectacle ou atelier convient réellement à l'âge des enfants, comment accéder aux places limitées, et quel billet minimise le coût selon une journée ou deux.

## Faits à traiter
Dates 14–15 novembre 2026, 10 h–18 h, Espace 110, 1 avenue des Rives de l'Ill. Tarifs organisateur : adulte 10 €, 3–15 ans 8 €, moins de 3 ans gratuit ; pass deux jours 16 € adulte et 12 € enfant ; pass famille 2 adultes + 2 enfants de 3–15 ans à 28 €. Spectacles et ateliers annoncés gratuits une fois entré, mais spectacles avec retrait de billet le jour même au point dédié ; ateliers en jauge limitée, se présenter 10 minutes avant. Ateliers officiels : décor accordéon 1–4 ans avec parent, Pop' paysage 5–8 ans, BD dans l'espace et livre animé 8–12 ans, Manga Kids 8–12 ans, Manga Teens 12–16 ans. Spectacles L'Amie dès 2 ans, Okilélé dès 4 ans, Le chant des loups dès 5 ans. Mentionner restauration sur place, accès bus Soléa lignes 9/16 (Illzach Mairie) ou 12 (Espace 110). Attention : la page pratique affiche simultanément « préventes closes » et un lien de prévente ; vérifier l'état de vente avant d'affirmer qu'un achat en ligne est possible.

## Sources de départ
Programme, fiches ateliers et page pratique de l'organisateur ci-dessus ; confirmation de l'événement par Mulhouse Alsace Agglomération. Ces sources doivent primer sur les pages de billetterie et les offres d'hébergement pour les faits éditoriaux.

## Affiliation
Pas de billetterie partenaire confirmée pour Bédéciné. Pour une famille dormant sur place, examiner naturellement le B&B HOTEL Mulhouse Ile Napoléon sur Booking.com, sans inventer de distance à pied ni de disponibilité. Ne pas faire d'un hôtel l'argument principal de la sortie.

## Continuations internes
L'article « Mulhouse sans voiture avec des enfants : comment organiser 2 jours » peut prendre le relais pour les déplacements et l'organisation d'un séjour ; ne pas refaire ce guide. Les pages « Mulhouse : trois musées gratuits » et « Festival du Livre de Colmar 2026 » concernent des sorties distinctes : éviter de recopier leurs sujets et ne les relier que si cela aide réellement le lecteur.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/ | Colmar avec des enfants quand il pleut: quel musée choisir ? | vie-pratique | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/evenements/repto-terra-expo-a-colmar-faut-il-y-aller-avec-des-enfants/ | Repto Terra Expo à Colmar: faut-il y aller avec des enfants? | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/ | Mulhouse sans voiture avec des enfants: comment organiser 2 jours | voyages | Mulhouse, Haut-Rhin, Grand Est
- /articles/sorties/parc-du-petit-prince-faut-il-prevoir-une-journee-entiere-avec-de-jeunes-enfants/ | Parc du Petit Prince: faut-il prévoir une journée entière avec de jeunes enfants? | sorties | Ungersheim, Haut-Rhin, Grand Est
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/ | Mulhouse: trois musées gratuits pour une journée culturelle avec des enfants | bons-plans | Mulhouse, Haut-Rhin, Grand Est
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/fanabriques-colmar-2026-famille/ | Fana'Briques 2026 à Colmar: un week-end LEGO en famille | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | Halloween 2026 à Mini World Lyon: la Chasse aux 31 Méchants en famille | evenements | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | Luminescences 2026-2027 au zoo d'Amnéville: billets, tarifs et visite en famille | evenements | Amnéville, Moselle, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/halloween-2026-a-mini-world-lyon-la-chasse-aux-31-mechants-en-famille/ | 2026-10-22T12:58:21.691Z
- opportunity | /articles/evenements/luminescences-2026-2027-a-amneville-en-famille-soiree-seule-ou-zoo-et-lanternes/ | 2026-10-22T09:37:18.560Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
