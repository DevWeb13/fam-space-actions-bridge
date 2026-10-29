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
title: "Marché de Noël de Montpellier 2026 en famille : horaires, jours fermés et manèges"
subtitle: "Au Peyrou, du 27 novembre au 30 décembre : les dates à éviter et ce qui est confirmé pour les enfants"
summary: "Le marché de Noël de Montpellier 2026 au Peyrou : horaires, quatre jours de fermeture, manèges et budget à confirmer, tramway et conseils avec de jeunes enfants."
category: evenements
location:
  city: Montpellier
  department: Hérault
  region: Occitanie
keywords:
  - marché de Noël Montpellier 2026
  - marché de Noël Peyrou enfants
  - horaires marché Noël Montpellier
  - marché Noël Montpellier jours fermés
sources:
  - title: Ville de Montpellier — dossier officiel de candidature au marché de Noël 2026 (dates et fermetures)
    url: https://www.montpellier.fr/sites/default/files/2026-03/Dossier%20de%20candidature%20March%C3%A9%20de%20No%C3%ABl%20de%20Montpellier%202026%20-%20boissons.pdf
  - title: Ville de Montpellier — appel à candidatures pour trois attractions enfants en 2026
    url: https://medvallee.eolas-65.montpellier.fr/appels-a-projet/marche-de-noel-2026-attractions
  - title: Office de tourisme de Montpellier — Montpellier fête Noël 2026
    url: https://www.montpellier-tourisme.fr/decouvrir/festive/les-evenements-incontournables-a-montpellier/montpellier-fete-noel/
  - title: Office de tourisme de Montpellier — illuminations et marché de Noël 2026
    url: https://www.montpellier-tourisme.fr/decouvrir/festive/s-ambiancer-et-prendre-du-bon-temps/illuminations-et-marche-de-noel/
  - title: Hérault Tourisme — Appart'City Confort Montpellier Saint-Roch
    url: https://www.herault-tourisme.com/fr/fiche/residences/appart-city-confort-montpellier-saint-roch-montpellier_TFORETOULAR034V50XLHV/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-de-montpellier-2026-en-famille-dates-fermetures-et-attractions
  decision: Choisir un jour où le marché du Peyrou est ouvert, savoir quelles animations sont réellement confirmées pour les enfants et organiser une visite sans mauvaise surprise.
  affiliationPotential: "Hébergement vérifié : Appart'City Confort Montpellier Saint Roch sur Booking.com, appartements familiaux avec kitchenette et ascenseur ; environ 20 minutes à pied de l'Arc de Triomphe, disponibilité à vérifier."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Montpellier - Marché de Noël 2026, attractions »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-30
---

Le **marché de Noël de Montpellier 2026** est prévu sur la promenade royale du Peyrou **du vendredi 27 novembre à 10 h 30 au mercredi 30 décembre à 18 h**. Attention avant de promettre une sortie aux enfants : **trois lundis et le 25 décembre sont entièrement fermés**. L'entrée est gratuite, mais les attractions et les achats peuvent faire monter le budget. Voici comment choisir une date et préparer la visite sans se fier au programme de l'année précédente.

## Les dates et horaires : quatre jours où ne pas venir

La [Ville de Montpellier précise dans son dossier officiel 2026](https://www.montpellier.fr/sites/default/files/2026-03/Dossier%20de%20candidature%20March%C3%A9%20de%20No%C3%ABl%20de%20Montpellier%202026%20-%20boissons.pdf) les créneaux prévus :

- **Du dimanche au jeudi :** 10 h 30 à 21 h 30.
- **Vendredi et samedi :** 10 h 30 à 22 h 30.
- **Fermeture toute la journée :** lundis **30 novembre, 7 décembre et 14 décembre**, ainsi que **vendredi 25 décembre**.
- **Jeudi 24 décembre :** fermeture anticipée à **18 h**.
- **Mercredi 30 décembre :** dernier jour, fermeture définitive à **18 h**.

Ces horaires sont ceux annoncés pour 2026, mais la Ville indique qu'ils peuvent encore évoluer à la marge. Pour une balade tranquille avec un petit enfant, privilégiez le début de journée plutôt qu'une nocturne de fin de semaine. Si les illuminations sont la priorité, choisissez une fin d'après-midi et prévoyez de pouvoir repartir avant que les enfants ne soient fatigués.

## Quels manèges et quel budget prévoir avec les enfants ?

Le marché accueille des chalets d'artisanat, de cadeaux et de restauration. L'[office de tourisme](https://www.montpellier-tourisme.fr/decouvrir/festive/les-evenements-incontournables-a-montpellier/montpellier-fete-noel/) confirme **l'accès gratuit au marché** : il n'y a pas de billet à acheter pour simplement s'y promener.

Pour 2026, la Ville a [lancé un appel à candidatures pour trois attractions destinées aux enfants](https://medvallee.eolas-65.montpellier.fr/appels-a-projet/marche-de-noel-2026-attractions). L'office de tourisme mentionne déjà **un carrousel, un petit train et des chaises volantes à 3 € le ticket**, ainsi qu'un espace ludique gratuit, **la Forêt de Noël**, sur sa [page des fêtes 2026](https://www.montpellier-tourisme.fr/decouvrir/festive/s-ambiancer-et-prendre-du-bon-temps/illuminations-et-marche-de-noel/). Prudence toutefois : la page municipale détaillant ces mêmes manèges et tarifs est encore celle de **2025**. Leur installation définitive, leurs prix et les conditions d'âge ou de taille pour **2026** restent donc à reconfirmer.

Pour maîtriser le budget, fixez à l'avance le nombre de tours de manège envisagés, puis ajoutez séparément boissons, goûter et achats aux chalets. Avec un tout-petit, une balade parmi les décorations peut suffire sans activité payante. Les ateliers, les photos avec le Père Noël et leurs créneaux précis ne doivent pas non plus être considérés comme garantis tant que le programme 2026 complet n'est pas publié.

## Venir au Peyrou en tramway, avec une poussette

Le marché se tient sur la **promenade royale du Peyrou**, à côté de l'Arc de Triomphe. L'office de tourisme indique l'arrêt **Peyrou – Arc de Triomphe, lignes de tramway 4 et 5**. Pour une famille, le tramway évite de chercher une place dans le centre historique ; vérifiez néanmoins l'itinéraire et les éventuelles perturbations du jour avant de partir.

Le site est une grande promenade extérieure, mais les entrées, les passages entre chalets et l'affluence peuvent rendre les déplacements plus lents avec une poussette. Un modèle maniable ou un porte-bébé peut aider, surtout le soir. Gardez un vêtement chaud et une protection contre la pluie : il ne faut pas compter sur un parcours entièrement abrité.

**Toilettes, table à langer, micro-ondes et espace pour allaiter ou donner un biberon :** leur disponibilité précise sur le marché **n'est pas confirmée pour 2026**. Prévoyez de quoi changer et nourrir bébé sans dépendre d'un équipement sur place. Des chalets de restauration sont annoncés, mais leur présence ne garantit ni chaise haute ni possibilité de réchauffer un petit pot. Repérez une pause en intérieur si vous comptez rester longtemps.

## Et si vous venez à Montpellier pour le week-end ?

Si vous passez une nuit sur place, [l'Appart'City Confort Montpellier Saint-Roch sur Booking.com](https://www.booking.com/hotel/fr/appart-city-montpellier.fr.html) est une option à comparer : l'établissement propose des **studios familiaux et des appartements avec coin cuisine**, utiles pour les repas des enfants. Vérifiez la configuration exacte, le lit bébé éventuel, le prix et la disponibilité aux dates choisies avant de réserver.

Pour choisir entre plusieurs quartiers ou organiser un séjour sans voiture, consultez aussi notre guide [Montpellier ou Sète avec des enfants : où poser ses valises ?](/articles/voyages/montpellier-ou-sete-sans-voiture-avec-des-enfants-ou-poser-ses-valises/).

Ne confondez pas ce marché de fin novembre-décembre avec **Cœur de Ville en Lumières**, les projections gratuites prévues du 12 au 14 novembre : notre [guide de la soirée avec des enfants](/articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/) traite de cet autre événement.

**Avant le départ :** vérifiez surtout une éventuelle mise à jour des horaires, la confirmation des manèges et de leurs tarifs, ainsi que le programme des animations enfants. Ce sont les points qui peuvent encore changer le choix du jour ou le budget familial.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/voyages/montpellier-ou-sete-sans-voiture-avec-des-enfants-ou-poser-ses-valises/ | Montpellier ou Sète sans voiture avec des enfants: où poser ses valises ? | voyages | Montpellier, Hérault, Occitanie
- /articles/bons-plans/city-card-montpellier-en-famille-quand-est-elle-vraiment-rentable/ | City Card Montpellier en famille: quand est-elle vraiment rentable? | bons-plans | Montpellier, Hérault, Occitanie
- /articles/evenements/coeur-de-ville-en-lumieres-2026-avec-des-enfants-comment-preparer-la-soiree-sans-voiture/ | Cœur de Ville en Lumières 2026 avec des enfants: comment préparer la soirée sans voiture? | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/vie-pratique/cars-lio-dans-l-herault-en-famille-billets-tram-et-poussettes/ | Cars liO dans l'Hérault en famille: billets, tram et poussettes | vie-pratique | Montpellier, Hérault, Occitanie
- /articles/parentalite/maisons-des-1000-jours-dans-l-herault-ou-trouver-un-accompagnement-gratuit/ | Maisons des 1000 jours dans l'Hérault: où trouver un accompagnement gratuit | parentalite | Montpellier, Hérault, Occitanie
- /articles/bons-plans/cantine-au-college-dans-l-herault-jusqu-a-3-60-d-aide-par-repas/ | Cantine au collège dans l'Hérault: jusqu'à 3,60 € d'aide par repas | bons-plans | Montpellier, Hérault, Occitanie
- /articles/cuisine/moulin-du-mont-ramus-a-bessan-choisir-son-huile-d-olive-en-famille/ | Moulin du Mont Ramus à Bessan: choisir son huile d’olive en famille | cuisine | Bessan, Hérault, Occitanie
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/activites/musee-parc-des-dinosaures-de-meze-en-famille-fossiles-visite-et-conseils/ | Musée-Parc des Dinosaures de Mèze en famille: fossiles, visite et conseils | activites | Mèze, Hérault, Occitanie
- /articles/sorties/grotte-des-demoiselles-avec-des-enfants-visite-guidee-contee-ou-lanterne/ | Grotte des Demoiselles avec des enfants: visite guidée, contée ou lanterne? | sorties | Saint-Bauzille-de-Putois, Hérault, Occitanie
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
