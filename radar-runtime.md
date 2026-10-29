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
title: "Noël d’autrefois 2026 à Villeneuve-d’Ascq : quel jour venir avec les enfants ?"
subtitle: Du 20 au 22 novembre, un marché d’artisans gratuit dans le village ancien du Musée de Plein Air
summary: "Vendredi soir, samedi ou dimanche : choisissez votre créneau pour le Noël d’autrefois au Musée de Plein Air, avec les animations annoncées et les conseils d’accès en famille."
category: evenements
location:
  city: Villeneuve-d'Ascq
  department: Nord
  region: Hauts-de-France
keywords:
  - Noël d'autrefois Musée de Plein Air 2026
  - marché de Noël Villeneuve-d'Ascq 20 22 novembre
  - Saint Nicolas ateliers enfants Musée de Plein Air
sources:
  - title: Métropole européenne de Lille - Un Noël d’autrefois au Musée de Plein Air
    url: https://enm.lillemetropole.fr/evenements/un-noel-dautrefois-au-musee-de-plein-air-marche-des-artisans
  - title: Métropole européenne de Lille - Appel aux artisans pour le marché de Noël
    url: https://enm.lillemetropole.fr/actualites/le-musee-de-plein-air-recherche-des-artisans-locaux-et-createurs-pour-son-marche-de-noel
  - title: Métropole européenne de Lille - Musée de Plein Air, accès et accessibilité
    url: https://enm.lillemetropole.fr/parcs/musee-de-plein-air
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille
  decision: Choisir entre la soirée du vendredi, la longue journée du samedi et le dimanche plus court, puis préparer une sortie gratuite adaptée aux enfants sans supposer que Saint Nicolas ou les ateliers sont proposés à chaque créneau.
  affiliationPotential: "Entrée gratuite : aucun billet partenaire naturel. Pour les familles qui restent dormir, B&B HOTEL Lille Villeneuve d'Ascq Grand Stade vérifié sur Booking.com (chambres familiales, lit bébé gratuit sur demande selon disponibilité), sans disponibilité ni tarif confirmés pour les 20-22 novembre."
  gsc:
    retrievedAt: 2026-10-29T02:27:59+01:00
    dataThrough: 2026-10-26
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Métropole européenne de Lille - événement Noël d'autrefois 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-22T18:00:00+01:00
---

Pour sa première édition, « Un Noël d’autrefois » installe un marché d’artisans dans les maisons et les allées du Musée de Plein Air, à Villeneuve-d’Ascq. Le rendez-vous est **gratuit du 20 au 22 novembre 2026**. Avec des enfants, le choix du jour compte surtout pour la durée de visite et l'ambiance : le vendredi et le samedi se prolongent en soirée, tandis que le dimanche se termine plus tôt.

## Vendredi, samedi ou dimanche : lequel choisir ?

- **Vendredi 20 novembre, de 14 h à 21 h :** une sortie de fin de journée pour découvrir les stands et l'ambiance du village à la nuit tombée. Avec de jeunes enfants, mieux vaut arriver assez tôt plutôt que de compter sur toute la soirée.
- **Samedi 21 novembre, de 10 h à 21 h :** le choix le plus souple pour les familles. La grande plage horaire permet de visiter en journée, de prévoir une pause et, si les enfants tiennent le rythme, de rester après la tombée de la nuit.
- **Dimanche 22 novembre, de 10 h à 18 h :** une option pratique pour une visite en journée et un retour avant le soir. N'attendez pas la fin d'après-midi pour commencer le parcours.

Ces horaires sont ceux de la [fiche officielle de l'événement publiée par la Métropole européenne de Lille](https://enm.lillemetropole.fr/evenements/un-noel-dautrefois-au-musee-de-plein-air-marche-des-artisans). Ils sont propres à cette fête : les horaires et tarifs de la saison habituelle du musée, terminée en octobre, ne s'appliquent pas ici.

## Que pourront faire les enfants ?

Le village rural reconstitué sert de décor à un marché de créations et de savoir-faire traditionnels, dans un esprit de Noël du XIXe siècle. L'organisateur annonce des **ateliers créatifs**, une **rencontre avec Saint Nicolas**, un **concert et des animations musicales**, ainsi que des artisans présents sur le marché.

Attention si votre enfant veut absolument voir Saint Nicolas ou participer à un atelier : **les horaires individuels, les éventuelles limites d'âge, les modalités d'inscription et les éventuels coûts des ateliers ne sont pas encore précisés** sur la fiche de l'événement. L'entrée au marché est gratuite, mais cela ne confirme pas que chaque activité sera accessible à toute heure ni sans réservation. Consultez le programme officiel avant de partir plutôt que de promettre une rencontre à un créneau précis.

## Comment rejoindre le Musée de Plein Air ?

Le rendez-vous se tient au **143 rue Colbert, 59650 Villeneuve-d’Ascq**, et non sur les places du centre de Lille.

En transports en commun, la [page d'accès du musée](https://enm.lillemetropole.fr/parcs/musee-de-plein-air) indique le bus **C2, arrêt Masséna**, avec ensuite **environ 22 minutes de marche**. Depuis Lille, on peut rejoindre le C2 par le métro 1 à Pont de Bois ou le métro 2 à Fort de Mons. Le musée mentionne aussi les bus 36 et 66 à l'arrêt Rue de Tressin ; vérifiez les dessertes et horaires du week-end avant de choisir cet itinéraire. Avec une poussette ou un enfant qui marche peu, la distance à pied depuis Masséna mérite d'être anticipée.

En voiture, suivez le fléchage vers le musée. Des parkings visiteurs sont mentionnés sur le site, mais aucune garantie de place n'est donnée pour ce week-end d'événement.

## Poussette, accessibilité et repas de bébé

Le musée indique des **chemins stabilisés** sur son parcours, ainsi que des sanitaires adaptés aux personnes en situation de handicap. En revanche, certaines maisons anciennes restent difficiles d'accès et quatre bâtiments ne sont pas accessibles aux personnes à mobilité réduite. Pour une poussette, le parcours extérieur semble donc plus simple que certains intérieurs : un porte-bébé peut être utile en complément.

Point à ne pas négliger : la **fiche spécifique de Noël d'autrefois indique « Aucun dispositif prévu » à la rubrique accessibilité**. Cela ne supprime pas les aménagements permanents du musée, mais ne garantit pas leur disponibilité ni une prise en charge particulière pendant l'événement. Pour un besoin précis, contactez le musée au **03 20 63 11 25** avant la visite.

Une restauration sur place est annoncée. La Métropole précise que l'estaminet du musée assurera ce service pendant le marché. Les menus, prix et équipements pour bébés propres à ces trois jours ne sont pas détaillés. Si vous venez avec un tout-petit, prévoyez son repas et le nécessaire pour le change : **table à langer, chaise haute et possibilité de réchauffer un petit pot ne sont pas confirmées** pour l'événement. Prévoyez également des vêtements chauds et adaptés à la pluie pour circuler entre les bâtiments.

## Et si vous passez le week-end dans la métropole lilloise ?

Pour dormir sur place plutôt que de rentrer après une soirée, le [B&B HOTEL Lille Villeneuve d'Ascq Grand Stade sur Booking.com](https://www.booking.com/hotel/fr/b-amp-b-lille-grand-stade.fr.html) propose notamment des chambres triples et un lit bébé gratuit sur demande, selon la chambre et les disponibilités. Il se trouve dans le secteur du Grand Stade, **pas à l'entrée du musée** : prévoyez un trajet pour rejoindre l'événement. Les tarifs et disponibilités des 20 au 22 novembre n'ont pas été confirmés.

Si vous cherchez plutôt les chalets de la place Rihour et la Grande Roue, ce sont d'autres lieux : notre guide du [marché de Noël de Lille 2026 en famille](https://www.fam-space.fr/articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/) détaille cette sortie en centre-ville. Pour prolonger le séjour autour des spécialités régionales, retrouvez aussi notre [week-end gourmand à Lille en famille](https://www.fam-space.fr/articles/cuisine/week-end-gourmand-a-lille-en-famille-marche-gaufres-et-estaminet/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-du-mazet-saint-voy-preparer-le-week-end-des-28-et-29-novembre/ | Marché de Noël du Mazet-Saint-Voy: préparer le week-end des 28 et 29 novembre | evenements | Mazet-Saint-Voy, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël de Saint-Étienne 2026 en famille: dates, horaires et accès | evenements | Saint-Étienne, Loire, Auvergne-Rhône-Alpes
- /articles/cuisine/week-end-gourmand-a-lille-en-famille-marche-gaufres-et-estaminet/ | Week-end gourmand à Lille en famille: marché, gaufres et estaminet | cuisine | Lille, Nord, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/bons-plans/musverre-en-famille-gratuites-et-contes-a-sars-poteries/ | MusVerre en famille: gratuités et contes à Sars-Poteries | bons-plans | Sars-Poteries, Nord, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | Monument jeu d'enfant 2026 à la Villa Cavrois: énigme, mosaïque ou linogravure? | evenements | Croix, Nord, Hauts-de-France
- /articles/voyages/week-end-a-dunkerque-en-famille-port-bateaux-et-plage-sans-courir/ | Week-end à Dunkerque en famille: port, bateaux et plage sans courir | voyages | Dunkerque, Nord, Hauts-de-France
- /articles/sorties/centre-historique-minier-de-lewarde-combien-de-temps-prevoir-avec-des-enfants/ | Centre Historique Minier de Lewarde: combien de temps prévoir avec des enfants | sorties | Lewarde, Nord, Hauts-de-France
- /articles/bons-plans/c-art-tribu-a-lille-quand-l-abonnement-familial-a-65-vaut-le-coup/ | C'ART Tribu à Lille: quand l'abonnement familial à 65 € vaut le coup | bons-plans | Lille, Nord, Hauts-de-France
- /articles/parentalite/creche-a-lille-comment-faire-la-preinscription-et-prevoir-un-accueil-occasionnel/ | Crèche à Lille: comment faire la préinscription et prévoir un accueil occasionnel | parentalite | Lille, Nord, Hauts-de-France
- /articles/parentalite/entrer-en-maternelle-avant-3-ans-a-lille-comment-fonctionne-l-action-passerelle/ | Entrer en maternelle avant 3 ans à Lille: comment fonctionne l'action Passerelle | parentalite | Lille, Nord, Hauts-de-France
- /articles/sorties/lille-aventure-nature-2026-famille/ | Lille Aventure Nature 2026 au parc Marx Dormoy: horaires et activités gratuites | sorties | Lille, Nord, Hauts-de-France
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/la-seine-musicale-en-famille-en-2027-quels-concerts-et-ateliers-selon-l-age/ | La Seine Musicale en famille en 2027: quels concerts et ateliers selon l'âge ? | evenements | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires et accès | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/marche-de-noel-de-saint-etienne-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T18:37:09.008Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | 2026-10-04T19:31:30.376Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
