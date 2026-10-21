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
title: "Equita Lyon 2026 avec des enfants: billets, Village Enfants et spectacles"
subtitle: "À Eurexpo du 28 octobre au 1er novembre: comparer les entrées et préparer la journée selon l'âge"
summary: Equita Lyon 2026 accueille les familles à Eurexpo du 28 octobre au 1er novembre. Tarifs, pass famille, animations poney, spectacles, horaires et accès.
category: evenements
location:
  city: Chassieu
  department: Rhône
  region: Auvergne-Rhône-Alpes
keywords:
  - Equita Lyon 2026 avec enfants
  - Village Enfants Equita Lyon
  - Equita Lyon pass famille tarifs
sources:
  - title: Equita Lyon - Informations billetterie 2026
    url: https://www.equitalyon.com/fr/informations-billetterie
  - title: Equita Lyon - Village Enfants
    url: https://www.equitalyon.com/fr/village-enfants
  - title: Equita Lyon - FAQ et spectacles inclus dans chaque billet
    url: https://www.equitalyon.com/fr/faq
  - title: Equita Lyon - Informations pratiques et transports
    url: https://www.equitalyon.com/fr/infos-pratiques
  - title: Equita Lyon - Animations
    url: https://www.equitalyon.com/fr/animations
  - title: Equita Lyon - Programme des événements
    url: https://www.equitalyon.com/fr/liste-des-evenements
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles
  decision: Choisir une journée adaptée à l'âge des enfants, le billet réellement avantageux et les animations ou compétitions accessibles avec celui-ci, sans sous-estimer les contraintes pratiques.
  affiliationPotential: "Billetterie Equita 2026 proposée par l'organisateur; aucune offre précise équivalente vérifiée chez GetYourGuide, Tiqets ou Klook. Hébergement à proximité: B&B HOTEL Lyon Eurexpo Chassieu (chambres familiales sur Booking.com), et KYRIAD LYON EST - Genas Eurexpo (chambres familiales sur Booking.com); tarifs et disponibilités à vérifier pour le séjour."
  gsc:
    retrievedAt: 2026-10-21T05:02:00.000Z
    dataThrough: 2026-10-18
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Equita Lyon - Informations billetterie 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Du **28 octobre au 1er novembre 2026**, Equita Lyon réunit à **Eurexpo, à Chassieu**, chevaux, poneys, compétitions et démonstrations. Même sans pratiquer l'équitation, une famille peut y passer une journée: le **Village Enfants**, réservé aux **3-12 ans**, permet une première approche des poneys, tandis que plusieurs carrières accueillent des animations. Le choix du billet dépend toutefois de l'âge des enfants et des spectacles que vous voulez voir.

## Le Village Enfants vaut-il la visite?

L'organisateur consacre **1 500 m²** aux enfants de 3 à 12 ans. Sa [présentation du Village Enfants](https://www.equitalyon.com/fr/village-enfants) annonce des **baptêmes poney**, un parcours d'obstacles avec chevaux de bois et des ateliers de dessin, peinture ou sculpture.

Ce secteur convient particulièrement à un enfant qui souhaite approcher les poneys ou découvrir l'univers équestre sans assister toute la journée à des épreuves sportives. Pour les moins de 3 ans et les adolescents, ne construisez pas la sortie autour de cet espace: sa tranche d'âge annoncée est de 3 à 12 ans.

La page du Village précise encore que la liste détaillée des animations sera publiée ultérieurement. Le [programme des événements](https://www.equitalyon.com/fr/liste-des-evenements) présente déjà des créneaux, mais vérifiez ceux de votre jour de visite et les éventuelles conditions propres aux baptêmes ou ateliers. L'accès aux animations du salon est compris dans l'entrée générale, sans que cela suffise à garantir la gratuité de chaque prestation particulière.

## Billet individuel ou pass famille: lequel choisir?

Les [tarifs publiés pour 2026](https://www.equitalyon.com/fr/informations-billetterie) sont de **25 € pour un adulte**, **16 € pour un enfant de 6 à 12 ans**, et **gratuit pour les moins de 6 ans**. Certains visiteurs disposant d'un justificatif, notamment les licenciés FFE et les détenteurs d'un Jeunes Pass Région, peuvent relever du tarif réduit à **22,50 €**. Un pass cinq jours coûte **75 €**.

Le **pass famille à 65 €** couvre **deux adultes et deux enfants de moins de 16 ans**, et s'achète **uniquement sur place**. Avant de le choisir, comparez les âges des enfants:

- **Deux adultes et deux enfants de 6 à 12 ans:** quatre entrées séparées coûtent **82 €**; le pass famille économise **17 €**.
- **Deux adultes, un enfant de 6 à 12 ans et un de moins de 6 ans:** les entrées séparées coûtent **66 €**; le pass économise seulement **1 €**, avant d'éventuelles réductions individuelles.
- **Deux adultes et deux enfants de moins de 6 ans:** les entrées séparées coûtent **50 €**; le pass famille n'est pas avantageux.

Pour les 13-15 ans, le pass peut également être intéressant, puisqu'il les inclut alors que le tarif enfant individuel affiché s'arrête à 12 ans. Les billets sont annoncés non échangeables et non remboursables, sauf dispositif d'assurance applicable.

## Quelles compétitions voir avec un simple billet salon?

Une **entrée salon d'un jour**, utilisable le jour de votre choix pendant les cinq jours, donne accès aux stands, aux animations, aux carrières et à de nombreuses compétitions, dont les épreuves de dressage et d'attelage des Coupes du monde FEI ainsi que le FEI Jumping Ponies' Trophy. La [carrière Nikito](https://www.equitalyon.com/fr/animations) présente aussi un cabaret équestre en journée, avec des passages prévus autour du déjeuner et de l'Equit'Apéro.

En revanche, un billet salon **ne suffit pas** pour les **soirées Sport & Spectacle des 30 et 31 octobre**, la finale **NRHA Euroderby** du 31 octobre, la Coupe d'Europe **NBHA Barrel et Pole Bending** et la **Coupe du monde Longines FEI de saut d'obstacles** du 1er novembre: ces rendez-vous demandent des billets spécifiques.

À l'inverse, les billets numérotés de ces compétitions particulières **incluent l'entrée au salon le jour correspondant**. Ne payez donc pas automatiquement une deuxième entrée générale si vous réservez une de ces épreuves. Pour comparer exactement les exclusions et les prestations, consultez la [FAQ officielle](https://www.equitalyon.com/fr/faq).

Avec un jeune enfant ou un budget limité, une journée centrée sur le Village Enfants, les démonstrations et les compétitions accessibles avec l'entrée ordinaire permet déjà de profiter du salon sans réserver une soirée distincte.

## Horaires, repas et poussette: les points à anticiper

Le salon ouvre **de 8h à 20h30 du mercredi 28 au vendredi 30 octobre**, **de 8h à 22h30 le samedi 31** pour la nocturne et **de 8h à 19h le dimanche 1er novembre**. Ces horaires restent susceptibles d'être modifiés. Des restaurants, snacks et stands de restauration sont présents sur le salon.

Eurexpo est un site de plain-pied annoncé accessible aux personnes à mobilité réduite. Les **poussettes sont interdites dans les tribunes**, même si elles peuvent servir lors des déplacements dans le salon. Si vous souhaitez regarder un spectacle assis avec un tout-petit, prévoyez comment gérer la poussette pendant ce temps. Les chiens et autres animaux de compagnie ne sont pas admis.

L'entrée générale du salon est gratuite pour les personnes en situation de handicap sur justificatif, mais les compétitions à billetterie spécifique restent payantes. Toutes ces conditions figurent dans les [informations pratiques](https://www.equitalyon.com/fr/infos-pratiques) et la FAQ de l'organisateur.

## Rejoindre Eurexpo avec des enfants

L'entrée visiteurs se trouve **boulevard de l'Europe, à Chassieu**. Pour venir en transports en commun depuis le centre de Lyon, l'organisateur indique notamment **métro D jusqu'à Grange Blanche, puis tram T5 jusqu'à Eurexpo**. Depuis **Part-Dieu**, il propose **tram T3 jusqu'à Vaulx-en-Velin La Soie, puis navette N186**. Consultez les horaires TCL du jour, particulièrement pour repartir après une nocturne.

En voiture, le **parking visiteurs est payant, plafonné à 11,50 € la journée** selon l'organisateur. Un **parking relais au Groupama Stadium avec navette vers Eurexpo** est également annoncé, mais **uniquement les 31 octobre et 1er novembre**: ne le prévoyez pas pour les trois premiers jours. Retrouvez les accès dans les [informations pratiques du salon](https://www.equitalyon.com/fr/infos-pratiques).

## Dormir près d'Eurexpo pour un séjour familial

Si vous venez de loin, le [B&B HOTEL Lyon Eurexpo Chassieu](https://www.booking.com/hotel/fr/bb-lyon-eurexpo-chassieu.fr.html), rue Augustin-Fresnel à Chassieu, propose des chambres familiales et se trouve à proximité du parc des expositions. Le [KYRIAD Lyon Est – Genas Eurexpo](https://www.booking.com/hotel/fr/forum.fr.html), rue Roger-Salengro à Genas, propose notamment des chambres pouvant accueillir plusieurs personnes; il est davantage adapté aux familles qui organisent leur trajet vers Eurexpo, notamment en voiture. Vérifiez la capacité réelle, la disponibilité et les prix pour vos nuits, ainsi que le temps de trajet prévu avec les enfants.

Pour prolonger le séjour par une autre sortie, notre guide [Mini World Lyon en famille](/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/) aide à comparer billets et durée de visite dans un univers miniature. Une autre journée peut être consacrée à l'[Aquarium de Lyon](/articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/), sans chercher à cumuler ces visites avec une journée déjà bien remplie à Equita.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/pass-lozere-comment-profiter-des-reductions-en-famille/ | Pass'Lozère: comment profiter des réductions en famille | bons-plans | Mende, Lozère, Occitanie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/parc-de-cleres-avec-des-enfants-le-pass-famille-vaut-il-le-coup/ | Parc de Clères avec des enfants: le pass famille vaut-il le coup? | sorties | Clères, Seine-Maritime, Normandie
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/la-rochelle-ocean-pass-avec-des-enfants-quand-est-il-vraiment-rentable/ | La Rochelle Océan Pass avec des enfants: quand est-il vraiment rentable ? | bons-plans | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/sorties/aquarium-de-lyon-en-famille-nouveautes-ocean-360-tarifs-et-visite/ | Aquarium de Lyon en famille: nouveautés Océan 360°, tarifs et visite | sorties | La Mulatière, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026: Laurel & Hardy en famille le 17 octobre à Lyon | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon: tarifs, billets famille et durée de visite | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
