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
title: "Noël à Provins 2026 en famille : marché gratuit, ateliers et visites"
subtitle: "Les 12 et 13 décembre : choisir entre promenade médiévale, activités pour enfants et visites sur réservation"
summary: "Noël à Provins les 12 et 13 décembre 2026 : marché médiéval gratuit, ateliers enfants, visites à 12 ou 16 €, horaires et accès depuis Paris."
category: evenements
location:
  city: Provins
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Noël à Provins 2026
  - marché médiéval de Noël Provins
  - Provins Noël enfants visites
sources:
  - title: Provins Tourisme - Noël à Provins 2026
    url: https://provins.net/noel-a-provins/
  - title: Gardes-Foires de Champagne - Marché médiéval de Noël 2026
    url: https://noel-medieval-provins.com/
  - title: Gardes-Foires de Champagne - Programme des animations samedi 12 décembre
    url: https://noel-medieval-provins.com/wp-content/uploads/2026/10/Programme-Animations-samedi-12-12-2026.pdf
  - title: Gardes-Foires de Champagne - Programme des animations dimanche 13 décembre
    url: https://noel-medieval-provins.com/wp-content/uploads/2026/10/Programme-Animations-dimanche-13-12-2026.pdf
  - title: Gardes-Foires de Champagne - Programme enfants 2026
    url: https://noel-medieval-provins.com/wp-content/uploads/2026/10/Programme-Animations-Enfants-2026.pdf
  - title: Provins Tourisme - Noël à Provins, programme groupes 2026
    url: https://provins.net/sorties-groupes-a-provins-tourisme/groupe-adultes-et-familles/evenements-provins/noel-provins/
  - title: Provins Tourisme - Venir en train
    url: https://provins.net/organiser-votre-sejour/comment-nous-rejoindre/rejoindre-provins-tourisme-par-le-train/
  - title: Provins Tourisme - Stationnement et accès
    url: https://provins.net/organiser-votre-sejour/comment-nous-rejoindre/nous-rejoindre-en-voiture/
  - title: Transilien - Ligne P
    url: https://www.transilien.com/fr/page-lignes/ligne-p
  - title: Provins Tourisme - Les souterrains de Provins
    url: https://provins.net/les-souterrains-de-provins/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee
  decision: Savoir si une famille peut profiter gratuitement de Noël à Provins les 12-13 décembre ou s'il vaut mieux réserver une visite payante, laquelle convient à l'âge des enfants, et comment éviter les difficultés d'accès.
  affiliationPotential: "Animations principales vendues par l'organisateur, sans offre de billetterie partenaire vérifiée. Pour un week-end, La Demeure des Troubadours - Hyper centre est référencée sur Booking.com (appartement jusqu'à 4 personnes, cuisine, proche de la cité) : https://www.booking.com/hotel/fr/la-demeure-des-troubadours-hyper-centre.fr.html ; vérifier prix et disponibilité aux dates du séjour."
  gsc:
    retrievedAt: 2026-10-24T02:34:28+02:00
    dataThrough: 2026-10-21
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Provins Tourisme - Noël à Provins 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-13T18:00:00+01:00
---

Les **samedi 12 et dimanche 13 décembre 2026**, Provins fête Noël dans sa cité médiévale. On peut y passer plusieurs heures sans acheter de billet : le marché, les musiques de rue et plusieurs animations pour enfants sont gratuits. Les deux visites thématiques, en revanche, se réservent et se paient séparément. Le bon programme dépend surtout de l'âge des enfants et de l'heure à laquelle vous voulez rentrer.

## Marché gratuit : samedi soir ou dimanche en journée ?

Le **marché médiéval de Noël**, organisé en ville haute par les Gardes-Foires de Champagne, ouvre **samedi de 11 h à 22 h** et **dimanche de 10 h à 18 h**. L'entrée est libre. Entre les étals d'artisans, les démonstrations de savoir-faire et les musiciens, il n'est pas nécessaire de réserver une visite pour profiter de l'ambiance.

Les [programmes 2026 de l'organisateur](https://noel-medieval-provins.com/programmations/) annoncent un bal médiéval **à 16 h les deux jours** et des saynètes de feu en clôture, notamment **samedi vers 21 h 30** et **dimanche vers 17 h 30**. Ces horaires peuvent évoluer : vérifiez le programme avant de vous déplacer pour une animation précise. Le samedi permet de découvrir le marché illuminé tard le soir ; le dimanche se prête mieux à une sortie qui se termine avant le dîner.

La visite libre n'est pas une journée entièrement sans dépenses : boissons, restauration, achats aux échoppes et certains ateliers restent payants. Des points de restauration sont annoncés sur le parcours, mais emporter de l'eau et un encas facilite les pauses avec de jeunes enfants.

## Quelles animations choisir avec les enfants ?

La [programmation enfants 2026](https://noel-medieval-provins.com/wp-content/uploads/2026/10/Programme-Animations-Enfants-2026.pdf) distingue clairement les activités gratuites des ateliers payants, principalement **dans la cour de l'école, rue du Palais**, et **au pied de la tour César**.

Parmi les propositions gratuites figurent les **jeux en bois**, des découvertes des déplacements au Moyen Âge et des animations de la Compagnie médiévale de Saint-Ouen. Les jeux et animations en continu permettent de garder une sortie souple, sans imposer un créneau à toute la famille. Le programme prévoit aussi des activités payantes : **tir à l'arc, maquillage et atelier de maquette**. Les tarifs et les âges admis pour ces ateliers ne sont pas précisés dans le document consulté : demandez-les sur place avant de promettre une activité à un petit.

Provins Tourisme évoque également une **crèche vivante à la collégiale Saint-Quiriace** dans sa présentation des journées pour groupes. En revanche, la page grand public indique encore que le programme général doit être complété : **aucun horaire de crèche vivante n'est donc garanti ici pour les visiteurs individuels**.

## Visite guidée à 12 € ou souterrains théâtralisés à 16 € ?

La visite guidée **« Les fêtes au Moyen Âge »** explique les traditions et les fêtes médiévales. Elle part de l'**Office de tourisme à 14 h**, le samedi comme le dimanche, dure **1 h 30** et coûte **12 € par participant**. Les places sont limitées et la réservation est obligatoire. C'est le choix le plus simple pour une famille intéressée par l'histoire, à condition que les enfants puissent suivre une visite commentée de cette durée.

La visite théâtralisée **« Légendes et croyances »** se déroule dans les **souterrains, 3 rue Saint-Thibault**. Elle dure **45 minutes**, est accessible **à partir de 8 ans** et coûte **16 € par personne**, ou **14 € par personne dès cinq billets achetés**. Les créneaux annoncés sont :
- **Samedi 12 décembre :** 14 h 45, 16 h, 17 h 15 et 18 h 30.
- **Dimanche 13 décembre :** 10 h 45, 12 h, 13 h 15 et 14 h 30.

Pour quatre participants, comptez donc **48 €** pour la visite historique ou **64 €** pour la visite théâtralisée, hors autres dépenses. La seconde est à écarter si l'un des enfants a moins de 8 ans. Dans les souterrains, la température habituelle est d'environ **13 °C** : prévoyez une couche chaude, même après avoir marché dehors.

Attention aux enchaînements : **le dimanche, la visite guidée de 14 h et les créneaux des souterrains se chevauchent** ; impossible de suivre les deux dans leur intégralité. Le samedi, une séance théâtralisée en fin d'après-midi laisse davantage de marge après la visite guidée, mais tenez compte du déplacement entre les deux lieux. Consultez les [horaires et réservations de Provins Tourisme](https://provins.net/noel-a-provins/) avant de fixer votre journée.

## Venir de Paris et éviter les difficultés de stationnement

Depuis **Paris-Est**, la **ligne P du Transilien** dessert Provins. L'Office de tourisme signale des interruptions certains week-ends précédant l'événement, notamment les **5 et 6 décembre** ; cela ne confirme ni une interruption ni un service normal les **12 et 13 décembre**. Vérifiez l'aller **et surtout le dernier retour** dans le [calculateur Transilien](https://www.transilien.com/fr/page-lignes/ligne-p), particulièrement si vous restez pour les animations du samedi soir. En cas de perturbation, Provins Tourisme indique notamment l'alternative **RER A jusqu'à Marne-la-Vallée–Chessy puis bus 7705** vers l'arrêt Ville Haute, à contrôler pour le jour choisi.

Pour choisir le titre de transport de chaque membre de la famille sans refaire ici les calculs de forfaits, consultez notre guide [Transports à Paris avec des enfants](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

En voiture, ne comptez pas accéder librement aux rues de la ville haute. Pour le week-end de Noël, l'Office de tourisme prévoit des agents d'orientation et des parkings complémentaires **boulevard d'Aligre, à l'ancienne distillerie (route de Bray) et au parc des sports**. Le parking de l'Office de tourisme sera ouvert dans la limite des places, avec priorité notamment aux personnes en situation de handicap. Consultez les [consignes de stationnement](https://provins.net/organiser-votre-sejour/comment-nous-rejoindre/nous-rejoindre-en-voiture/) et le plan annoncé avant de partir.

La visite se fait en grande partie à pied, sur les rues et pavés d'une cité ancienne. Avec une poussette ou des difficultés de mobilité, privilégiez un parcours court et vérifiez directement l'accessibilité de la visite réservée ; **l'accès aux souterrains ne doit pas être présumé adapté**.

## Et si vous passez la nuit à Provins ?

Pour profiter du marché du samedi soir sans dépendre d'un retour tardif, **[La Demeure des Troubadours – Hyper centre, sur Booking.com](https://www.booking.com/hotel/fr/la-demeure-des-troubadours-hyper-centre.fr.html)** est un appartement situé rue Saint-Thibault, entre ville haute et centre-ville. Il dispose d'une cuisine et de couchages comprenant un lit double et un canapé-lit, à examiner selon la composition de votre famille. **Aucun lit bébé n'est annoncé** et un dépôt de garantie de **100 €** figure dans les conditions affichées. Vérifiez la capacité autorisée, le tarif, les conditions et la disponibilité **pour la nuit du 12 au 13 décembre** : cette date n'a pas été confirmée comme réservable.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/fete-moisson-provins-2026-famille/ | Fête de la Moisson 2026 à Provins: chars de blé et traditions en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/activites/musee-de-pont-aven-en-famille-visites-ludiques-et-ateliers-pour-enfants/ | Musée de Pont-Aven en famille: visites ludiques et ateliers pour enfants | activites | Pont-Aven, Finistère, Bretagne
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | Bédéciné 2026 à Illzach en famille: ateliers, spectacles et billets | evenements | Illzach, Haut-Rhin, Grand Est
- /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | Automne des gones 2026 à Lyon: ateliers et sorties gratuites en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/automne-des-gones-2026-a-lyon-quels-ateliers-gratuits-choisir-avec-les-enfants/ | 2026-10-23T09:31:27.871Z
- opportunity | /articles/evenements/bedecine-2026-a-illzach-en-famille-ateliers-et-spectacles-selon-l-age/ | 2026-10-23T12:33:36.649Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
