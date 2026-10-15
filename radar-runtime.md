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
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
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
title: "Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille"
subtitle: Du 25 au 30 novembre, choisissez votre jour et préparez une visite à Paris Montreuil Expo avec les enfants
summary: "Billet gratuit obligatoire pour chaque enfant et adulte, horaires des six journées, activités, métro, accessibilité et services: l'essentiel pour organiser le Salon du livre jeunesse de Montreuil 2026."
category: evenements
location:
  city: Montreuil
  department: Seine-Saint-Denis
  region: Île-de-France
keywords:
  - salon du livre jeunesse Montreuil 2026
  - salon livre presse jeunesse 2026 billet gratuit
  - Montreuil salon du livre avec enfants novembre
eventEndsAt: 2026-11-30
sources:
  - title: SLPJ - Salon 2026 et thème de la 42e édition
    url: https://slpj.fr/salon/
  - title: SLPJ - Billetterie gratuite 2026
    url: https://slpj.fr/billetterie/
  - title: SLPJ - Préparer sa venue, horaires et informations pratiques 2026
    url: https://slpj.fr/salon/preparer-sa-venue/
  - title: SLPJ - Exposition À la croisée des images
    url: https://slpj.fr/salon/exposition/
  - title: Ville de Montreuil - Salon du livre et de la presse jeunesse
    url: https://www.montreuil.fr/slpj
  - title: SLPJ - Accessibilité (informations partiellement datées de 2025)
    url: https://slpj.fr/salon/accessibilite/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille
  decision: Choisir le jour et les horaires adaptés à la visite avec des enfants, réserver un billet gratuit pour chaque membre de la famille et organiser les activités et l'accès à Paris Montreuil Expo sans confondre gratuité et entrée sans billet.
  affiliationPotential: "L'accès principal au Salon est entièrement gratuit et uniquement via sa billetterie officielle, sans offre de billetterie partenaire pertinente. Hébergement secondaire pour les familles venant de loin: ibis Styles Paris Mairie de Montreuil, à Montreuil, proposé sur Booking.com avec chambres familiales (https://www.booking.com/hotel/fr/ibis-styles-mairie-de-montreuil.fr.html); vérifier capacité, trajet, tarifs et disponibilité selon dates. Ne pas créer de concurrence à la billetterie gratuite."
  gsc:
    retrievedAt: 2026-10-14T04:26:13.937Z
    dataThrough: 2026-10-11
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « SLPJ - Salon 2026, calendrier officiel et programmation »; aucune page forte GSC n'est requise.
---

Du mercredi 25 au lundi 30 novembre 2026, le **Salon du livre et de la presse jeunesse** revient à Paris Montreuil Expo, en Seine-Saint-Denis. Cette 42e édition, intitulée «Aux frontières du réel», propose aux familles de découvrir des livres, des illustrations, des rencontres et des créations. **L'entrée est gratuite, mais chaque visiteur, même un enfant, doit avoir son propre billet.** C'est la première chose à prévoir avant de choisir vos animations.

## Réserver les billets gratuits pour toute la famille

Le [site officiel de la billetterie](https://slpj.fr/billetterie/) permet de réserver les entrées. Prenez **un billet pour chaque adulte et chaque enfant** et gardez-les sur votre téléphone ou imprimez-les pour les présenter à l'arrivée. Gratuit ne veut donc pas dire entrée libre sans réservation.

Vous venez avec une école, un centre de loisirs, une association ou une autre structure? Les groupes disposent de [formulaires d'inscription spécifiques](https://slpj.fr/salon/preparer-sa-venue/), différents de la billetterie individuelle. Leurs visites sont également gratuites, mais les modalités d'organisation ne sont pas celles d'une famille venant librement.

## Quel jour choisir du 25 au 30 novembre?

Voici les [horaires annoncés pour 2026](https://www.montreuil.fr/slpj), à prendre en compte selon l'école, les temps de trajet et la fatigue des plus jeunes:

- **Mercredi 25 novembre, 9h-18h:** une visite en journée, notamment pour les enfants qui n'ont pas classe.
- **Jeudi 26 novembre, 9h-18h:** possible pour les familles disponibles en semaine.
- **Vendredi 27 novembre, 9h-21h:** la nocturne permet de venir en fin de journée, mais une sortie tardive ne convient pas forcément aux plus petits.
- **Samedi 28 novembre, 9h-20h:** une grande plage de visite pour les familles qui travaillent la semaine.
- **Dimanche 29 novembre, 10h-19h:** une autre possibilité le week-end, avec une ouverture plus tardive le matin.
- **Lundi 30 novembre, 9h-18h:** la journée professionnelle **reste ouverte à tous les publics**.

Pour une première visite avec un jeune enfant, mieux vaut prévoir un parcours court et une marge pour les pauses plutôt que chercher à tout voir. Si vous venez pour rencontrer un auteur ou participer à un atelier précis, choisissez votre jour **après avoir vérifié son horaire**. Aucun de ces jours ne peut être présenté comme garanti «calme»: les conseils d'heures creuses encore visibles sur certaines pages du Salon concernent l'édition 2025.

## Que faire avec les enfants?

Le Salon rassemble littérature jeunesse, bande dessinée et presse jeunesse. Au programme annoncé par [l'organisateur](https://slpj.fr/salon/): lectures, rencontres, dédicaces, ateliers, performances et expositions. Cela permet aussi bien de feuilleter des livres que de découvrir les personnes qui les écrivent et les dessinent.

Parmi les découvertes de l'édition 2026, l'exposition [«À la croisée des images»](https://slpj.fr/salon/exposition/) joue avec les passages entre réel et fiction, les images en grand format et les installations. C'est une piste intéressante si les enfants aiment observer et explorer, même sans viser une dédicace particulière.

Avant de partir, consultez le programme du jour et les conditions des activités qui vous intéressent: la présence d'un auteur, les horaires et les modalités d'accès aux ateliers peuvent évoluer. Ne supposez pas qu'un atelier accueille tous les âges ou qu'il est accessible sans inscription tant que cela n'est pas précisé. L'entrée au Salon est gratuite, **pas les livres que vous choisiriez d'acheter** sur les stands.

## Rejoindre Paris Montreuil Expo

Le Salon se déroule au **128, rue de Paris, 93100 Montreuil**, et non aux bureaux de l'association organisatrice. La [page officielle pour préparer sa venue](https://slpj.fr/salon/preparer-sa-venue/) indique:

- **Métro ligne 9:** station **Robespierre**, sortie 2 «Rue Barbès».
- **Bus:** lignes **102 et 318**, arrêt Robespierre.
- **À vélo:** des stations Vélib' sont disponibles à proximité.

Si vous arrivez de Paris avec plusieurs enfants, notre guide [Transports à Paris avec des enfants: quel titre choisir pour payer juste?](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) aide à comparer les titres de transport sans multiplier les dépenses.

### Accessibilité et visite avec des besoins particuliers

L'organisateur annonce pour 2026 une **entrée dédiée Porte C, rue Marcel Dufriche**, des ascenseurs, des kits sensoriels et des boucles magnétiques. Des fauteuils roulants sont également annoncés à cette entrée. Les [informations pratiques actualisées](https://slpj.fr/salon/preparer-sa-venue/) permettent de préparer l'accueil; pour les activités adaptées, vérifiez les créneaux publiés avant votre visite.

Attention au trajet si vous utilisez un fauteuil roulant ou une poussette difficile à porter: **Robespierre n'est pas une station de métro équipée d'ascenseurs**, d'après les [indications d'accessibilité du Salon](https://slpj.fr/salon/accessibilite/). Vérifiez un itinéraire accessible adapté à votre point de départ plutôt que de retenir automatiquement la station la plus proche.

## Repas, vestiaire et bagages: ce qu'il faut savoir

Selon la [FAQ de l'organisateur](https://slpj.fr/salon/preparer-sa-venue/), des cafétérias se trouvent sur les mezzanines, accessibles par ascenseur ou escalier. **Il n'y a pas d'espace dédié au pique-nique** dans le Salon. Prévoyez donc une pause repas adaptée au rythme des enfants et à votre budget.

Le **vestiaire** est situé sur une mezzanine: **2 € par vêtement, deux articles maximum** selon la tarification publiée. Une **consigne à bagages** se trouve à l'entrée rue Marcel Dufriche, à **2 € par bagage**. Les valises et sacs de grande contenance ne sont pas autorisés dans l'enceinte du Salon: mieux vaut éviter de venir chargé, notamment avec des achats et des affaires d'enfants à porter toute la journée.

Pour les familles venant de loin, le [ibis Styles Paris Mairie de Montreuil sur Booking.com](https://www.booking.com/hotel/fr/ibis-styles-mairie-de-montreuil.fr.html) est une piste pour chercher une chambre adaptée à une nuit sur place. Vérifiez la capacité, la disponibilité, le prix aux dates du Salon **et le trajet jusqu'à Paris Montreuil Expo**: l'hôtel se situe du côté de Mairie de Montreuil, pas à l'entrée de l'événement.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/avignonnais-palais-des-papes-et-pont-gratuits-le-week-end/ | Avignonnais: Palais des Papes et Pont gratuits le week-end | bons-plans | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/partir-en-livre-2026-en-famille/ | Partir en Livre 2026: trouver une animation jeunesse avant le 19 juillet | evenements
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/evenements/rues-barrees-auxerre-2026-famille/ | Rues Barrées 2026 à Auxerre: 53 spectacles gratuits en famille | evenements | Auxerre, Yonne, Bourgogne-Franche-Comté
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/musee-de-la-bd-a-angouleme-en-famille-tarifs-horaires-et-conseils-de-visite/ | Musée de la BD à Angoulême en famille: tarifs, horaires et conseils de visite | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/activites/parc-animalier-d-ecouves-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc animalier d'Ecouves en famille: tarifs, horaires et conseils pour la visite | activites | Le Bouillon, Orne, Normandie
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Musée de l'Air et de l'Espace: quelle activité choisir avec un enfant? | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/ateliers-au-jardin-de-la-pmi-a-bobigny-quelles-dates-choisir-cet-automne/ | Ateliers au jardin de la PMI à Bobigny: quelles dates choisir cet automne? | evenements | Bobigny, Seine-Saint-Denis, Île-de-France
- /articles/voyages/dormir-a-saint-denis-pour-visiter-paris-avec-des-enfants-pleyel-ou-basilique/ | Dormir à Saint-Denis pour visiter Paris avec des enfants: Pleyel ou Basilique? | voyages | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/musee-de-l-air-et-de-l-espace-du-bourget-en-famille-tarifs-avions-et-activites/ | Musée de l'Air et de l'Espace du Bourget en famille: tarifs, avions et activités | sorties | Le Bourget, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/sorties/musee-de-l-air-et-de-l-espace-a-la-toussaint-2026-quelle-activite-choisir-selon-l-age/ | 2026-10-05T20:22:10.692Z
- opportunity | /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | 2026-10-14T18:43:15.620Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
