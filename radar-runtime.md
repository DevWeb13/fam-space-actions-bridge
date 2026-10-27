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
title: "Marie-Antoinette à Fontainebleau 2026-2027 : exposition ou visite guidée en famille ?"
subtitle: "Billet simple, boudoirs ou appartements royaux : les différences, les prix et les dates à réserver"
summary: Jusqu'au 25 janvier 2027, l'exposition Marie-Antoinette et Louis XVI est incluse dans l'entrée du château de Fontainebleau. Voici quand choisir la visite libre ou réserver les boudoirs et les appartements royaux, avec les tarifs et les contraintes pour les enfants.
category: evenements
location:
  city: Fontainebleau
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - exposition Marie-Antoinette Fontainebleau 2026
  - Fontainebleau Louis XVI enfants visite guidée
  - boudoirs Marie-Antoinette Fontainebleau billets
sources:
  - title: Château de Fontainebleau - Exposition Marie-Antoinette et Louis XVI
    url: https://www.chateaudefontainebleau.fr/exposition-marie-antoinette-et-louis-xvi-a-fontainebleau-splendeur-et-douceur-de-vivre/
  - title: Château de Fontainebleau - Boudoirs de Marie-Antoinette et appartements royaux
    url: https://www.chateaudefontainebleau.fr/visites-exceptionnelles-les-boudoirs-de-marie-antoinette/
  - title: Château de Fontainebleau - Horaires, tarifs, gratuités et accueil des familles
    url: https://www.chateaudefontainebleau.fr/preparez-votre-visite/horaires-et-tarifs/
  - title: Château de Fontainebleau - Visite théâtralisée Marie-Antoinette, reine de la Mode
    url: https://www.chateaudefontainebleau.fr/visites-theatralisees-marie-antoinette/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants
  decision: Savoir si une famille doit prendre uniquement l'entrée du château pour voir l'exposition ou réserver en plus une visite guidée, laquelle choisir et quel budget prévoir selon l'âge des enfants.
  affiliationPotential: "Billet d'entrée au château vérifié sur Tiqets (https://www.tiqets.com/fr/activites-attractions-fontainebleau-c66966/billets-pour-chateau-de-fontainebleau-billet-coupe-file-p974548/) : expositions temporaires incluses, visites guidées exclues; comparer le prix final aux 17 € officiels et aux gratuités. Pour un week-end seulement, appartement de deux chambres à Fontainebleau sur Booking.com (https://www.booking.com/hotel/fr/fontainebleau-hypercentre-place-d-armes-2-chambres.en-gb.html), capacité et disponibilité à confirmer."
  gsc:
    retrievedAt: 2026-10-27T02:25:59+01:00
    dataThrough: 2026-10-24
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Fontainebleau - exposition Marie-Antoinette et Louis XVI »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-25
---

Du **11 octobre 2026 au 25 janvier 2027**, le château de Fontainebleau présente **« Marie-Antoinette et Louis XVI à Fontainebleau. Splendeur et douceur de vivre »**. Une famille peut découvrir l'exposition avec le billet d'entrée habituel, sans réserver de visite guidée. Les deux visites spéciales proposent autre chose : accéder aux boudoirs de la reine ou mieux comprendre les appartements royaux avec un guide. Le choix dépend surtout de l'intérêt des enfants pour l'histoire, du temps disponible et du jour de visite.

## Le billet simple suffit-il pour voir l'exposition ?

**Oui.** L'exposition rassemble plus de 120 œuvres, dont des portraits, dessins, sculptures et objets d'art, dans la salle de la Belle Cheminée et le circuit de visite. Elle raconte les séjours de Marie-Antoinette et de Louis XVI à Fontainebleau, leurs goûts, les divertissements de cour et leur vie quotidienne. Il n'est pas nécessaire d'acheter une visite guidée pour y accéder.

Le billet ordinaire coûte **17 € par adulte**, ou **15 € au tarif réduit** sous conditions. L'entrée du circuit principal est **gratuite pour les moins de 18 ans** sur justificatif. Pour deux adultes au plein tarif accompagnés de deux enfants mineurs, le budget d'entrée est donc de **34 €**, sans visite guidée ni option supplémentaire. L'accès au circuit principal est également gratuit le premier dimanche du mois, hors juillet et août, selon les conditions du château.

Pour des enfants qui aiment regarder les objets et poser des questions à leur rythme, la visite libre laisse davantage de souplesse. Le château conseille environ **deux heures** pour parcourir son circuit habituel : mieux vaut ne pas arriver en fin d'après-midi.

Si vous souhaitez acheter le billet simple à l'avance, [le billet du château proposé sur Tiqets](https://www.tiqets.com/fr/activites-attractions-fontainebleau-c66966/billets-pour-chateau-de-fontainebleau-billet-coupe-file-p974548/) inclut les expositions temporaires, mais **pas les visites guidées**. Comparez le montant final aux **17 € du tarif officiel** avant de payer ; pour les enfants bénéficiant de la gratuité, vérifiez les modalités plutôt que de leur acheter automatiquement un billet payant.

## Boudoirs ou appartements royaux : quelle visite choisir ?

**Les boudoirs de Marie-Antoinette** conviennent à ceux qui veulent découvrir des espaces plus intimes et leurs décors : le boudoir Turc, aménagé en 1777, et le boudoir d'Argent, datant de 1786. Cette visite dure **1 h 15** et est annoncée **tous les jours sauf le mardi et le samedi**. Son tarif va de **10 à 27 € par personne, entrée du château comprise**, selon la catégorie du visiteur.

**Les appartements royaux** proposent un récit plus large de la vie de Louis XVI et de Marie-Antoinette dans le château, avec des œuvres emblématiques de l'exposition. Cette visite dure **1 h 30**, a lieu **le samedi** et coûte **de 7 à 24 € par personne, entrée comprise**.

Les montants annoncés pour ces deux formules comprennent déjà l'entrée : **ne rajoutez pas automatiquement 17 € à chaque tarif de visite guidée**. Pour les mineurs, le château prévoit des tarifs réduits sur l'offre culturelle et la gratuité pour les moins de 4 ans, mais la gratuité du circuit principal ne signifie pas que toutes les visites accompagnées sont gratuites. Vérifiez le prix applicable à chaque âge lors de la réservation.

Aucun âge minimum spécifique n'est indiqué sur les fiches de ces deux visites. En pratique, une visite commentée de 75 à 90 minutes demande de pouvoir suivre un groupe assez longtemps. Avec de jeunes enfants ou un rythme incertain, la visite libre est souvent plus facile à adapter.

Les visites guidées ont leur **propre réservation**, avec des créneaux et des places à vérifier sur [la présentation officielle des deux visites](https://www.chateaudefontainebleau.fr/visites-exceptionnelles-les-boudoirs-de-marie-antoinette/). Le billet simple vendu sur Tiqets ne remplace pas cette réservation.

## Une autre possibilité uniquement jusqu'au 2 novembre

Pour les familles venant pendant les vacances de la Toussaint, la visite théâtralisée **« Marie-Antoinette, reine de la Mode »** met en scène sa modiste Rose Bertin et son coiffeur Léonard. Elle est annoncée **du 17 octobre au 2 novembre 2026**, à **11 h, 14 h et 15 h 30**, pour une durée d'une heure. Le tarif publié est de **30 €**, ou **13 € au tarif réduit**, billet du château inclus.

Cette animation est distincte de l'exposition et **ne se poursuit pas jusqu'en janvier**. Les horaires et places sont à contrôler avant le déplacement.

## Organiser la sortie avec des enfants

D'octobre à mars, le château ouvre de **9 h 30 à 17 h**, avec un **dernier accès à 16 h 15**. Il ferme **chaque mardi**, ainsi que les **25 décembre 2026 et 1er janvier 2027**. Pour profiter du circuit, le château recommande de commencer avant **14 h**. Les cours et jardins sont gratuits ; en novembre, décembre et janvier, ils ferment normalement à **17 h** (dernier accès à 16 h), sous réserve de conditions particulières.

**Avec un bébé :** les poussettes volumineuses et les porte-bébés dorsaux sont interdits dans les circuits intérieurs. Des consignes gratuites, des poussettes cannes et des porte-bébés ventraux sont prévus, dans la limite des disponibilités. Une **salle d'allaitement avec table à langer** se trouve près des toilettes, dans la cour d'Honneur, à droite de la billetterie. Pour un besoin d'accessibilité, un ascenseur dessert les Grands Appartements ; renseignez-vous séparément sur le parcours précis de la visite guidée choisie.

**Pour manger :** le domaine propose restaurant, café et vente à emporter. Un pique-nique est possible dans les espaces autorisés des jardins et du parc, notamment sur les pelouses du jardin Anglais et du parc ou sur les bancs des autres jardins et cours. Pour une pause à l'intérieur, prévoyez plutôt l'offre de restauration sur place.

**Depuis Paris :** prenez un train depuis **Gare de Lyon** jusqu'à **Fontainebleau-Avon**, puis le **bus 3401**, direction Les Lilas, jusqu'à l'arrêt Château. Les familles qui doivent aussi organiser leurs déplacements parisiens peuvent consulter notre [guide des titres de transport à Paris avec des enfants](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) ; les tarifs et correspondances ne sont pas à deviner à partir du seul prix d'entrée du château.

## Prolonger la visite à Fontainebleau

Si la sortie devient un week-end, [l'appartement Fontainebleau hypercentre Place d'Armes, deux chambres, sur Booking.com](https://www.booking.com/hotel/fr/fontainebleau-hypercentre-place-d-armes-2-chambres.en-gb.html) est une piste près du château, avec cuisine et couchages répartis dans deux chambres et un salon. Vérifiez la configuration réelle des lits, la capacité pour l'âge de vos enfants, le prix total et la disponibilité aux dates souhaitées avant de réserver : aucune disponibilité particulière pour les vacances ou janvier n'est garantie.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/activites/musee-de-la-biere-a-stenay-en-famille-parcours-enfants-et-exposition-2026/ | Musée de la Bière à Stenay en famille: parcours enfants et exposition 2026 | activites | Stenay, Meuse, Grand Est
- /articles/sorties/chateau-de-bonaguil-avec-des-enfants-visite-libre-ou-guidee/ | Château de Bonaguil avec des enfants: visite libre ou guidée ? | sorties | Fumel, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/sorties/tours-de-merle-en-famille-visite-libre-guidee-ou-theatralisee-en-2026/ | Tours de Merle en famille: visite libre, guidée ou théâtralisée en 2026 ? | sorties | Saint-Geniez-ô-Merle, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/visiter-le-stade-de-france-en-famille-coulisses-musee-et-conseils-pratiques/ | Visiter le Stade de France en famille: coulisses, musée et conseils pratiques | activites | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/sorties/grotte-des-demoiselles-avec-des-enfants-visite-guidee-contee-ou-lanterne/ | Grotte des Demoiselles avec des enfants: visite guidée, contée ou lanterne? | sorties | Saint-Bauzille-de-Putois, Hérault, Occitanie
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
