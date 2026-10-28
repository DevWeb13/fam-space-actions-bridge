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
title: "Marché de Noël de Saint-Étienne 2026 en famille : quand venir et comment y aller ?"
subtitle: Deux places, des horaires exceptionnels en décembre et un trajet à prévoir avec les enfants
summary: Du 21 novembre au 31 décembre 2026, le marché de Noël de Saint-Étienne s'installe places de l'Hôtel-de-Ville et Jean-Jaurès. Horaires confirmés, soirée de la Sainte-Barbe, accès en tram et conseils pour les familles.
category: evenements
location:
  city: Saint-Étienne
  department: Loire
  region: Auvergne-Rhône-Alpes
keywords:
  - marché de Noël Saint-Étienne 2026
  - marché de Noël Saint-Étienne horaires
  - Noël à Sainté avec enfants
sources:
  - title: Ville de Saint-Étienne — Noël à Sainté, marché de Noël 2026 (dates, places et horaires)
    url: https://connect.saint-etienne.fr/demarche/417/4
  - title: STAS — Itinéraires, horaires et informations trafic
    url: https://www.reseau-stas.fr/
  - title: Saint-Étienne Métropole — Transports en commun et accessibilité
    url: https://consignevelo.saint-etienne-metropole.fr/habiter-se-deplacer/deplacement-et-mobilite/en-transports-en-commun
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces
  decision: Choisir le jour et l'heure adaptés aux enfants, savoir quelles places visiter et éviter une mauvaise surprise lors des horaires exceptionnels ou du trajet.
  affiliationPotential: "Residhotel St Etienne Centre sur Booking.com : établissement central vérifié, studios et appartements avec kitchenette et micro-ondes, à trois minutes à pied du tram Hôtel de Ville ; vérifier la capacité familiale avant de conseiller une nuit."
  gsc:
    retrievedAt: 2026-10-28T03:28:35+01:00
    dataThrough: 2026-10-25
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Saint-Étienne - Marché de Noël 2026, dates et horaires des chalets »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-31
---

Le **marché de Noël de Saint-Étienne se tiendra du 21 novembre au 31 décembre 2026**, sur les **places de l'Hôtel-de-Ville et Jean-Jaurès**, en plein centre-ville. Pour une sortie avec des enfants, le choix du créneau compte : les chalets ferment plus tôt les 24 et 31 décembre, tandis que le 5 décembre, à l'occasion de la Sainte-Barbe, l'ouverture est prolongée jusqu'à 23 h.

## Quel jour et à quelle heure venir avec les enfants ?

La [Ville de Saint-Étienne confirme les horaires 2026](https://connect.saint-etienne.fr/demarche/417/4) suivants pour les chalets :

- **Du dimanche au jeudi :** 10 h 30 à 20 h.
- **Vendredi et samedi :** 10 h 30 à 21 h 30.
- **Samedi 5 décembre (Sainte-Barbe) :** ouverture prolongée jusqu'à 23 h.
- **Jeudis 24 et 31 décembre :** fermeture anticipée à 18 h.
- **Vendredi 25 décembre :** 14 h à 19 h, **uniquement pour les exposants volontaires**. Tous les chalets ne seront donc pas nécessairement ouverts.

Pour les tout-petits, choisissez plutôt une visite en journée, avant la fatigue et le froid du soir. Pour profiter des lumières, arrivez en fin d'après-midi et prévoyez un retour assez tôt. La soirée du 5 décembre est intéressante si vos enfants peuvent rester dehors plus tard ; elle ne garantit toutefois pas un spectacle précis sur les deux places. Vérifiez le programme de la Sainte-Barbe avant de promettre une animation particulière.

## Deux places à parcourir, sans programme d'animations à inventer

Les chalets sont annoncés **place de l'Hôtel-de-Ville et place Jean-Jaurès**. Vous pouvez passer de l'une à l'autre à pied et adapter la durée de la promenade à l'âge des enfants. Les achats et consommations éventuels sont à prévoir dans votre budget ; la page municipale consultée concerne les chalets et **n'annonce pas de billet d'entrée** pour se promener sur le marché.

Au 28 octobre 2026, cette annonce officielle ne détaille pas de programme visiteurs confirmant des manèges, une patinoire, une rencontre avec le Père Noël ou leurs tarifs. Ne construisez pas la sortie autour de ces activités sans publication complémentaire de la Ville.

## Venir en tram plutôt que chercher une place en centre-ville

Les arrêts de tram **Hôtel de Ville** et **Place Jean Jaurès** desservent directement les deux secteurs du marché, notamment par les lignes **T1 et T2**. C'est une option pratique pour éviter de stationner près des chalets, surtout avec une poussette. Avant le départ, consultez l'[itinéraire, les horaires de retour et les perturbations sur le site STAS](https://www.reseau-stas.fr/), particulièrement le 5 décembre et les jours fériés. Ne présumez pas qu'une fermeture des chalets à 23 h signifie que le tram circule aussi tard.

En voiture, prévoyez un parking public puis un parcours à pied : le stationnement et la circulation peuvent être plus compliqués lors des festivités. Choisissez votre point d'arrivée avant de partir plutôt que de compter sur une place au pied du marché.

## Poussette, repas et pauses : les précautions utiles

Avec une poussette, les deux places se visitent en extérieur ; les passages autour des chalets peuvent toutefois devenir étroits en cas d'affluence. Les trams disposent d'aménagements d'accessibilité décrits par [Saint-Étienne Métropole](https://consignevelo.saint-etienne-metropole.fr/habiter-se-deplacer/deplacement-et-mobilite/en-transports-en-commun), mais cela ne garantit pas une circulation fluide dans le marché. Gardez la possibilité de raccourcir la visite ou de vous écarter des files.

Pour un bébé, emportez de quoi le changer, le nourrir et le protéger du froid ou de la pluie. **Aucun espace de change ni service de réchauffage des repas n'est confirmé** dans l'annonce municipale : ne comptez pas sur un micro-ondes ou une table à langer sur place sans vérification. Pour les plus grands, fixez un budget pour les achats et une heure de départ avant de commencer la promenade.

Si vous souhaitez compléter la journée par une visite à l'intérieur, notre [guide du Pass 4 musées de Saint-Étienne](https://www.fam-space.fr/articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/) aide à décider si le pass vaut le coup pour votre famille, en tenant compte des gratuités pour les jeunes.

## Passer la nuit à Saint-Étienne avec les enfants

Pour les familles qui viennent de plus loin ou souhaitent profiter du centre-ville sur deux jours, le [Residhotel St Etienne Centre sur Booking.com](https://www.booking.com/hotel/fr/residhotel-st-etienne-centre.fr.html) propose des logements avec **kitchenette, réfrigérateur et micro-ondes**, utiles pour les repas des enfants. Vérifiez la capacité exacte de l'appartement pour votre famille, la disponibilité d'un lit bébé, les conditions de réservation et le trajet à pied jusqu'aux deux places avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/pass-4-musees-a-saint-etienne-est-il-interessant-pour-une-famille/ | Pass 4 musées à Saint-Étienne: est-il intéressant pour une famille? | bons-plans | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/voyages/charlieu-en-famille-abbaye-musees-et-balades-dans-la-loire/ | Charlieu en famille: abbaye, musées et balades dans la Loire | voyages | Charlieu, Loire, Auvergne-Rhône-Alpes
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/activites/escape-game-du-chateau-de-la-roche-en-famille-alerte-submersion-des-10-ans/ | Escape game du Château de la Roche en famille: Alerte Submersion dès 10 ans | activites | Saint-Priest-la-Roche, Loire, Auvergne-Rhône-Alpes
- /articles/vie-pratique/cantine-et-periscolaire-a-roanne-les-demarches-avant-la-rentree-2026/ | Cantine et périscolaire à Roanne: les démarches avant la rentrée 2026 | vie-pratique | Roanne, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/foulee-blanche-2027-en-famille-courses-ages-tarifs-et-programme-a-autrans/ | Foulée Blanche 2027 en famille: courses, âges, tarifs et programme à Autrans | evenements | Autrans-Méaudre en Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/batiment-b-a-saint-denis-decouvrir-le-street-art-en-famille/ | Bâtiment B à Saint-Denis: découvrir le street art en famille | evenements | Saint-Denis, La Réunion, La Réunion
- /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | Noël 2026 au château royal de Blois: décors, spectacles et tarifs en famille | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age/ | 2026-10-27T22:28:21.356Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
