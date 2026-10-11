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
title: "Nuit des Châteaux 2026 à Tanlay: horaires, tarifs et visite aux bougies en famille"
subtitle: Trois départs guidés les 16 et 17 octobre, avec réservation conseillée et quelques contraintes à connaître avec des enfants
summary: Le château de Tanlay ouvre en soirée pour des visites guidées aux bougies les 16 et 17 octobre 2026. Horaires, tarifs par âge, poussettes, stationnement et divergence sur le 18 octobre.
category: evenements
location:
  city: Tanlay
  department: Yonne
  region: Bourgogne-Franche-Comté
keywords:
  - Nuit des Châteaux Tanlay 2026
  - château de Tanlay visite aux bougies enfants
  - Nuit des Châteaux Tanlay horaires tarifs
  - château de Tanlay poussette réservation
sources:
  - title: Château de Tanlay — La Nuit des Châteaux 2026
    url: https://www.chateaudetanlay.fr/fr/agenda/nuit-des-ch%C3%A2teaux/
    accessedAt: 2026-10-11
  - title: Billetweb — Visite du château de Tanlay à la chandelle
    url: https://www.billetweb.fr/visite-du-chateau-de-tanlay-a-la-chandelle
    accessedAt: 2026-10-11
  - title: Château de Tanlay — Visites et tarifs 2026
    url: https://www.chateaudetanlay.fr/accueil/visites-tarifs/
    accessedAt: 2026-10-11
  - title: Château de Tanlay — Venir à Tanlay
    url: https://www.chateaudetanlay.fr/fr/infos-pratiques/venir-a-tanlay/
    accessedAt: 2026-10-11
  - title: La Nuit des Châteaux — édition 2026
    url: https://www.nuitdeschateaux.com/
    accessedAt: 2026-10-11
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre
  decision: Savoir si la visite guidée nocturne aux bougies convient aux enfants et réserver le bon départ en connaissant le budget, les contraintes de poussette et les solutions de stationnement.
  affiliationPotential: Réservation de l'événement sur la billetterie officielle Billetweb; aucune offre partenaire exacte vérifiée pour cette nocturne. Pour un week-end, maison de vacances Chez Anne à Tanlay, deux chambres et cuisine, offre exacte vérifiée sur Booking.com.
  gsc:
    retrievedAt: 2026-10-10T03:52:00.000Z
    dataThrough: 2026-10-06
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Tanlay — La Nuit des Châteaux 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-17
---

Le **vendredi 16 et le samedi 17 octobre 2026**, le château de Tanlay ouvre en soirée pour la Nuit des Châteaux. La proposition est simple: une **visite guidée à la lueur des bougies**, menée par des guides costumés, dans le château Renaissance.

Ce n'est pas une animation spécialement conçue pour les enfants. La sortie peut néanmoins convenir à une famille qui aime les visites patrimoniales, à condition de tenir compte de l'horaire du soir, des déplacements à l'intérieur du château et de l'impossibilité d'utiliser une poussette pendant toute la visite.

## Trois départs guidés dans la soirée

La [page officielle du château](https://www.chateaudetanlay.fr/fr/agenda/nuit-des-ch%C3%A2teaux/) confirme trois départs les **16 et 17 octobre**:

- **19 h**
- **19 h 30**
- **20 h**

Le château ferme d'abord à 17 h 30, puis rouvre à **18 h 30** pour la soirée. La fermeture est annoncée à **21 h**, avec une dernière entrée à **20 h 15**.

Après la visite, une boutique éphémère et un espace de petite restauration sont prévus dans les cuisines du château.

La durée habituelle des visites guidées de Tanlay est d'environ 50 minutes, mais le château ne donne pas de durée spécifique pour cette nocturne. Mieux vaut donc ne pas organiser la soirée en comptant sur un retour à une heure trop serrée.

## Quel budget prévoir en famille?

Pour la Nuit des Châteaux, les tarifs annoncés sont:

- **12 € par adulte**
- **10 € au tarif réduit**
- **5 € pour les 10-15 ans**

Pour les plus jeunes, les sources officielles ne sont pas parfaitement cohérentes. La page française de l'événement indique **« moins de 9 ans: gratuit »**, tandis que la page générale des tarifs 2026 annonce la gratuité **jusqu'à 9 ans** et la version anglaise de l'événement parle des enfants de **moins de 10 ans**.

Pour un enfant âgé exactement de **9 ans**, mieux vaut donc demander confirmation au château avant de réserver plutôt que de déduire le tarif à partir de l'une de ces formulations.

## Réserver plutôt que compter sur le guichet

Le château précise que les places sont limitées et que la réservation est conseillée. La [billetterie en ligne Billetweb](https://www.billetweb.fr/visite-du-chateau-de-tanlay-a-la-chandelle) est celle utilisée pour l'événement.

Une inscription sur place reste possible uniquement s'il reste des places. Avec des enfants et un trajet jusqu'à Tanlay, réserver à l'avance évite donc de venir pour un départ déjà complet.

Il existe en revanche une **divergence sur le dimanche 18 octobre**. Le château de Tanlay annonce uniquement les **16 et 17 octobre**, alors que Billetweb et le site national de la Nuit des Châteaux affichent également le **18 octobre** pour Tanlay. Pour cette date, ne partez pas du principe qu'une visite est confirmée: contactez directement le château avant d'organiser le déplacement ou d'acheter un billet.

## Poussette, accessibilité et toilettes

La billetterie de l'événement précise que les **poussettes doivent rester au rez-de-chaussée**. Elles ne permettent donc pas de suivre toute la visite avec un jeune enfant installé dedans.

Le château n'est par ailleurs **pas accessible aux personnes à mobilité réduite** à l'intérieur. Le parc, lui, est annoncé accessible par le château dans ses informations générales.

Des **toilettes sont disponibles à l'entrée**, mais pas à l'intérieur même du château. Ce sont des détails à anticiper avant le départ guidé, surtout avec de jeunes enfants.

## Où se garer et comment venir sans voiture?

Le château se trouve au **2 Grande Rue Basse, 89430 Tanlay**.

Il n'existe pas de parking privé du château pour les visiteurs de la nocturne. La billetterie indique d'utiliser les **parkings gratuits du village**.

Pour les familles venant en train, la [page d'accès du château](https://www.chateaudetanlay.fr/fr/infos-pratiques/venir-a-tanlay/) situe la gare de **Tonnerre à environ neuf minutes en voiture**. Le château mentionne également un service Taxi Mobigo depuis la gare, à réserver au moins deux jours avant l'arrivée et avant 18 h. Pour une visite qui se termine en soirée, le trajet retour mérite donc d'être organisé avant de partir.

## Dormir à Tanlay pour éviter le retour de nuit

Si vous préférez transformer la sortie en petit séjour, [chez Anne à Tanlay](https://www.booking.com/hotel/fr/chez-anne-tanlay1.fr.html) est une maison de vacances entière avec **deux chambres, une cuisine et une capacité affichée jusqu'à cinq personnes**. Vérifiez la disponibilité et les conditions pour vos dates avant de réserver.

Pour prolonger un séjour dans l'Yonne avec une autre visite familiale, notre guide [Visiter Guédelon avec des enfants: préparer la journée en 2026](https://www.fam-space.fr/articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/) permet de préparer cette autre sortie sans mélanger les deux programmes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/chateau-de-biron-avec-des-enfants-tarifs-et-conseils-pour-la-visite/ | Château de Biron avec des enfants: tarifs et conseils pour la visite | activites | Biron, Dordogne, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/sorties/chateau-de-bonaguil-avec-des-enfants-visite-libre-ou-guidee/ | Château de Bonaguil avec des enfants: visite libre ou guidée ? | sorties | Fumel, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/cuisine/dejeuner-aux-halles-de-troyes-avec-des-enfants-comment-ca-marche/ | Déjeuner aux Halles de Troyes avec des enfants: comment ça marche? | cuisine | Troyes, Aube, Grand Est
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/sorties/chateau-de-boutheon-avec-des-enfants-chateau-parc-ou-billet-couple/ | Château de Bouthéon avec des enfants: château, parc ou billet couplé? | sorties | Andrézieux-Bouthéon, Loire, Auvergne-Rhône-Alpes
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/voyages/visiter-guedelon-avec-des-enfants-preparer-la-journee-en-2026/ | Visiter Guédelon avec des enfants: préparer la journée en 2026 | voyages | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/sorties/grottes-d-arcy-sur-cure-avec-des-enfants-quelle-visite-choisir/ | Grottes d'Arcy-sur-Cure avec des enfants: quelle visite choisir? | sorties | Arcy-sur-Cure, Yonne, Bourgogne-Franche-Comté
- /articles/bons-plans/guedelon-en-famille-a-petit-budget-les-bons-plans-pour-la-visite/ | Guédelon en famille à petit budget: les bons plans pour la visite | bons-plans | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/rues-barrees-auxerre-2026-famille/ | Rues Barrées 2026 à Auxerre: 53 spectacles gratuits en famille | evenements | Auxerre, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | Monument jeu d’enfant à Aigues-Mortes: mini-sacre et escape game les 17 et 18 octobre 2026 | evenements | Aigues-Mortes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | Monument jeu d'enfant 2026 à la Villa Cavrois: énigme, mosaïque ou linogravure? | evenements | Croix, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants/ | 2026-10-10T17:38:43.806Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | 2026-10-04T19:31:30.376Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
