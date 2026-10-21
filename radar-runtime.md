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
title: "Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or"
subtitle: "Du 31 octobre au 11 novembre: choisir sa journée selon le programme et le budget"
summary: "Halloween, ateliers gourmands et animaux à la Foire de Dijon 2026: jours d'entrée gratuite, horaires par hall, accès et conseils pour les familles."
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
keywords:
  - foire de Dijon 2026 en famille
  - foire gastronomique Dijon enfants
  - Ferme Côte-d'Or 2026 horaires
  - foire de Dijon entrée gratuite après 18h
sources:
  - title: Foire de Dijon - Infos pratiques et tarifs 2026
    url: https://foirededijon.com/infos-pratiques
  - title: Foire de Dijon - Programme des animations 2026
    url: https://foirededijon.com/animations
  - title: Département de la Côte-d'Or - Tous à la Ferme Côte-d'Or
    url: https://www.cotedor.fr/agenda/tous-la-ferme-cote-dor
  - title: Foire de Dijon - Les collectivités à la Foire
    url: https://foirededijon.com/decouvrir/les-collectivites-a-la-foire
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites
  decision: Choisir le jour le plus intéressant et le moins cher pour les enfants selon les vrais créneaux d'ateliers, la présence des animaux et les horaires d'entrée gratuite, sans confondre entrée libre et animations.
  affiliationPotential: Billetterie proposée par l'organisateur, aucune offre d'entrée partenaire équivalente vérifiée. Pour un séjour, Booking.com référence l'Hotel ibis Dijon Centre Clemenceau (chambres familiales à proximité du parc des expositions) et le Campanile Dijon Centre Clemenceau (chambres familiales près du tram Poincaré); confirmer composition, prix et disponibilité aux dates retenues.
  gsc:
    retrievedAt: 2026-10-21T05:02:00.000Z
    dataThrough: 2026-10-18
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Foire internationale et gastronomique de Dijon - informations pratiques et tarifs 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-11
---

Du **31 octobre au 11 novembre 2026**, la **Foire internationale et gastronomique de Dijon** s'installe au Parc des expositions et congrès. Avec des enfants, le programme dépasse les stands commerciaux: ateliers cuisine, fête d'Halloween et découverte des animaux de la Ferme Côte-d'Or. **L'entrée est gratuite pour les moins de 12 ans**; pour les adultes, le meilleur choix dépend du jour et de l'heure d'arrivée.

## Halloween le 31 octobre: ateliers et boum pour les familles

Le samedi **31 octobre** concentre plusieurs rendez-vous familiaux dans le [programme de la foire](https://foirededijon.com/animations):

- **De 11h à 18h, hall 2:** maquillages d'Halloween et ateliers créatifs autour de la sculpture de citrouilles et d'autres légumes.
- **De 13h30 à 16h, hall 1:** atelier culinaire en duo parent-enfant pour préparer des recettes d'Halloween. L'organisateur indique **sans inscription, en se présentant sur place**.
- **À 15h, hall 1:** début du concours de déguisements, avec inscriptions de 15h à 16h, défilé de 16h à 17h et remise des prix à 17h30.
- **À 19h, hall 1:** boum d'Halloween, pendant la première nocturne.

Le choix est simple: pour les activités créatives, venez avant la fin de l'après-midi; pour la boum, prévoyez une soirée plus longue. Les animations n'ont pas toutes une mention explicite de gratuité: **ne confondez pas billet d'entrée et prix éventuel d'une activité**. Vérifiez les conditions et les places proposées le jour même.

## Ferme Côte-d'Or: privilégier le 5, 6, 7 ou 8 novembre

Si les enfants souhaitent observer des animaux, les dates les mieux documentées sont **du jeudi 5 au dimanche 8 novembre**. Le [Département de la Côte-d'Or](https://www.cotedor.fr/agenda/tous-la-ferme-cote-dor), organisateur de la Ferme, annonce vaches, chèvres, moutons, ânes, chevaux, lapins et cochons, ainsi que des démonstrations et ateliers sur les filières agricoles. L'espace est accessible **sans supplément**, avec le billet de la Foire.

La Ferme est annoncée **de 10h à 19h les 5, 6 et 7 novembre**, puis **de 10h à 17h le dimanche 8**. Le **grand défilé des animaux est prévu le dimanche 8 à partir de 15h30**. Pour voir les animaux sans devoir rester toute la journée, mieux vaut donc venir pendant les horaires propres à la Ferme, et non compter sur les horaires plus tardifs de la Foire.

Attention à une divergence officielle: la [page « Collectivités » de la Foire](https://foirededijon.com/decouvrir/les-collectivites-a-la-foire) évoque une Ferme du **5 au 9 novembre**, tandis que le Département et le programme quotidien de la Foire annoncent **quatre jours, du 5 au 8**. **Ne prévoyez pas une visite des animaux le 9 novembre sans confirmation directe de l'organisateur.**

## Quel billet coûte le moins cher pour votre famille?

D'après les [informations pratiques de la Foire](https://foirededijon.com/infos-pratiques), le **plein tarif est de 7 €** et le **tarif réduit de 6 €** pour les 12-25 ans, les plus de 65 ans, les demandeurs d'emploi et les groupes à partir de cinq personnes. Les **moins de 12 ans** entrent gratuitement. L'entrée est également gratuite, sur présentation des justificatifs prévus, pour une personne en situation de handicap et son accompagnant.

Le club gratuit **« Copains de la Foire »** donne accès à un billet **à 5 € par personne et par entrée**. Pour **deux adultes et deux enfants de moins de 12 ans**, cela représente **14 € au plein tarif**, **10 € avec deux billets club**, ou **0 € après 18h les soirs gratuits**. Pour des enfants de 12 ans ou plus, prévoyez leurs billets selon leur âge et les conditions tarifaires.

**Les jours d'entrée gratuite pour tous après 18h** sont les **1er, 2, 3, 4, 8, 9 et 11 novembre**, c'est-à-dire les jours sans nocturne. Cette formule convient surtout à une visite courte des stands gastronomiques: ce soir-là, le **hall 2 ferme à 20h**, alors que le **hall 1 accueille encore le public jusqu'à 21h30**. Elle n'est donc pas une solution idéale pour une animation pour enfants programmée plus tôt.

Pour plusieurs visites, le **forfait 12 jours coûte 30 €**, ou **25 € au tarif club**, avec une entrée par jour. **Toute sortie du parc est définitive**: impossible de repartir puis de revenir avec le même billet.

## À quelle heure partir et dans quel hall chercher les animations?

La Foire ouvre à **10h tous les jours**, mais l'heure de fermeture dépend du secteur:

- **31 octobre et 5, 6, 7 et 10 novembre (nocturnes):** entrée possible jusqu'à **22h**; sortie du hall 1 au plus tard à **23h30**, fermeture du hall 2 à **21h**.
- **1er, 2, 3, 4, 8, 9 et 11 novembre (sans nocturne):** entrée possible jusqu'à **20h**; sortie du hall 1 à **21h30**, fermeture du hall 2 à **20h**.

Le **hall 1** concentre surtout la gastronomie, les démonstrations culinaires et les dégustations; le **hall 2** accueille notamment des ateliers et animations créatives. Une famille venue pour une activité annoncée à un horaire précis doit se référer au programme du **jour concerné**, pas seulement aux horaires généraux du salon.

La restauration fait partie des attractions de cette foire gastronomique, mais un goûter ou un repas sur place reste une dépense supplémentaire. N'attribuez pas de tarif non publié aux ateliers et prévoyez un budget distinct pour les achats.

## Venir au Parc des expositions sans se tromper d'entrée

La Foire se tient au **Parc des expositions et congrès de Dijon**, près du boulevard de Champagne. Depuis la gare, le **tram T1** rejoint les arrêts **Auditorium Robert-Poujade** ou **Poincaré**; l'organisateur annonce environ **trois minutes à pied depuis Poincaré**.

Trois entrées sont mentionnées:
- **Grands Ducs d'Occident:** avenue des Grands Ducs d'Occident.
- **Poincaré:** rue Léon Mauris.
- **Chambertin:** boulevard de Champagne, **réservée aux personnes munies d'un e-billet ou d'une invitation**.

Le **Pass Foire + Divia à 7 €** comprend une entrée à la Foire et des déplacements illimités sur le réseau Divia pour la journée (**0,30 € supplémentaires sans support**); il donne accès aux entrées Grands Ducs d'Occident et Poincaré. Comparez cette formule avec le billet à 5 € du club et le transport dont votre famille a réellement besoin. Un simple abonnement Divia ne remplace pas un billet pour la Foire.

En voiture, l'organisateur recense des parkings dans un rayon de 900 mètres, notamment Clemenceau, Malraux et Heudelet; **ne supposez pas leur gratuité**. Les parkings relais reliés au tram peuvent être une autre solution. L'accès PMR est prévu aux entrées Grands Ducs d'Occident et Poincaré, avec des ascenseurs disponibles pour les étages.

## Où dormir si vous prolongez la visite?

Pour une nuit à proximité, l'[ibis Dijon Centre Clemenceau](https://www.booking.com/hotel/fr/ibis-dijon-centre-clemenceau.fr.html), avenue de Marbotte, se trouve à environ **350 mètres** du parc des expositions et propose notamment des chambres familiales et des chambres adjacentes. Le [Campanile Dijon Centre Clemenceau](https://www.booking.com/hotel/fr/campanile-dijon-congra-s-cla-c-menceau.fr.html), proche du palais des congrès, est situé **face à l'arrêt de tram Poincaré** et dispose également de chambres familiales. Pour les deux établissements, vérifiez la capacité réellement réservable pour les âges de vos enfants, le prix aux dates souhaitées et les conditions d'annulation.

Pour une autre activité gourmande à Dijon, notre guide de la [Fabrique de pain d'épices Mulot & Petitjean en famille](/articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/) présente une visite distincte de la Foire, à prévoir selon les jours d'ouverture.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | Foire de Grenoble 2026 en famille: jours gratuits, programme et tarifs | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-martinelles-2026-en-famille/ | Les Martinelles à Saint-Martin-de-Ré: deux journées gratuites pour les enfants | evenements | Saint-Martin-de-Ré, Charente-Maritime, Nouvelle-Aquitaine
- /articles/sorties/rouen-sur-mer-2026-en-famille/ | Rouen sur Mer 2026: jeux, ateliers et plage urbaine sur les quais | sorties | Rouen, Seine-Maritime, Normandie
- /articles/sorties/conde-cote-plage-2026-famille/ | Condé Côté Plage 2026 en Normandie: activités gratuites en famille jusqu’au 23 août | sorties | Condé-en-Normandie, Calvados, Normandie
- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/aquarium-reunion-fermeture-2026-visite-famille/ | Aquarium de La Réunion fermé depuis le 17 août 2026: quand pourra-t-on revenir en famille ? | sorties | Saint-Gilles-les-Bains, La Réunion, La Réunion
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles | evenements | Chassieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | Marché de Noël de Bordeaux 2026 en famille: horaires, animations et budget | evenements | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/ | 2026-10-21T10:43:46.144Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/foire-de-grenoble-2026-en-famille-jours-gratuits-animations-et-budget/ | 2026-10-21T13:33:34.395Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/marche-de-noel-de-bordeaux-2026-en-famille-dates-animations-et-acces/ | 2026-10-21T07:36:18.372Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
