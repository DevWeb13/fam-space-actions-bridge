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
title: "Noël de Casse-Noisette 2026 à Pierrefonds : quelle visite choisir avec les enfants ?"
subtitle: "Décors en visite libre, conte dès 4 ans ou aventure dès 7 ans : dates et budget au château"
summary: Du 28 novembre 2026 au 3 janvier 2027, le château de Pierrefonds se transforme autour de Casse-Noisette. La visite libre suffit pour voir les décors, mais deux animations à dates fixes proposent un conte ou des jeux sensoriels. Voici comment choisir selon l'âge des enfants et le prix.
category: evenements
location:
  city: Pierrefonds
  department: Oise
  region: Hauts-de-France
keywords:
  - Noël Casse-Noisette Pierrefonds 2026
  - château de Pierrefonds Noël enfants
  - visites féérie Pierrefonds
  - Casse-Noisette aventure à jouer
sources:
  - title: Château de Pierrefonds - Le Noël de Casse-Noisette 2026
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette
  - title: Château de Pierrefonds - Les visites féérie
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/les-visites-feerie
  - title: "Château de Pierrefonds - Casse-Noisette : l'aventure à jouer"
    url: https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/casse-noisette-l-aventure-a-jouer
  - title: Château de Pierrefonds - Informations pratiques
    url: https://www.chateau-pierrefonds.fr/visiter/informations-pratiques
  - title: Château de Pierrefonds - Visiteurs en situation de handicap
    url: https://www.chateau-pierrefonds.fr/visiter/visiteurs-en-situation-de-handicap
  - title: Château de Pierrefonds - En famille
    url: https://www.chateau-pierrefonds.fr/visiter/en-famille
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer
  decision: Choisir entre la visite libre des décors de Noël, une visite contée dès 4 ans et une aventure sensorielle dès 7 ans, selon les dates, le budget et la sensibilité des enfants.
  affiliationPotential: "Aucun billet partenaire confirmé pour les animations propres au château. Hébergement vérifié sur Abritel : Gîte de Palesne à Pierrefonds (6 personnes, 3 chambres), https://www.abritel.fr/location-vacances/p1964558 ; prix et disponibilités aux dates de Noël non vérifiés."
  gsc:
    retrievedAt: 2026-10-27T02:25:59+01:00
    dataThrough: 2026-10-24
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Pierrefonds - Le Noël de Casse-Noisette 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

Du **28 novembre 2026 au 3 janvier 2027**, le château de Pierrefonds, dans l'Oise, accueille le Noël de Casse-Noisette. Trois façons d'en profiter, mais pas le même billet : les décors sont compris dans l'entrée ordinaire, une visite contée s'adresse aux enfants dès 4 ans et une aventure participative aux enfants dès 7 ans. Le choix dépend surtout de l'âge, de l'envie de suivre un groupe et du jour de visite.

## La visite libre suffit-elle pour découvrir les décors ?

Oui. Les salles du château prennent des airs de conte de Noël autour de Casse-Noisette, sans obligation de réserver une animation. On parcourt le monument à son rythme, ce qui laisse davantage de liberté pour écourter la visite avec un petit ou s'arrêter devant les décors qui lui plaisent.

Le [programme officiel du Noël de Casse-Noisette](https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette) annonce cette formule pour tous les publics, **sans supplément au billet d'entrée** : 9 € par adulte et gratuit pour les moins de 18 ans. Pour deux adultes payants et deux enfants mineurs, comptez donc **18 €**, hors éventuelles autres gratuités. Le monument annonce notamment l'entrée gratuite le premier dimanche de décembre et de janvier, selon ses conditions habituelles ; cette gratuité du monument ne vaut pas réservation d'une animation.

## Visite « féérie » : pour les enfants qui aiment écouter des histoires

La visite contée et théâtralisée suit Cassandre, transformée en fée du royaume de la Fée Dragée. Lectures, tableaux et musiques du ballet de Tchaïkovski accompagnent le récit. C'est l'option la plus adaptée aux enfants **dès 4 ans** qui apprécient les histoires racontées et peuvent suivre une visite en groupe.

Quatre séances sont annoncées à **14 h 30** : les samedis **28 novembre, 5 et 19 décembre 2026**, puis **2 janvier 2027**. Le tarif est de **9 € par adulte et 6 € par enfant de moins de 18 ans**, soit **30 € pour deux adultes et deux enfants**. Les dates et modalités figurent sur la [fiche officielle des visites « féérie »](https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/les-visites-feerie).

## « L'aventure à jouer » : pour les enfants dès 7 ans

Ici, les enfants ne font pas qu'écouter : le guide leur propose des **devinettes olfactives, jeux d'écoute et défis d'observation** au fil des salles du donjon, sur les traces de Clara et du Prince Casse-Noisette. Cette formule convient mieux à ceux qui aiment participer et résoudre de petites énigmes.

Les séances sont prévues à **14 h 30** les **21, 23, 26, 28 et 30 décembre 2026**. Les billets sont annoncés à **11 € par adulte et 7,50 € pour les 7-18 ans** : **37 € pour deux adultes et deux enfants de 7 à 17 ans**. Retrouvez les détails sur la [fiche de l'aventure à jouer](https://www.chateau-pierrefonds.fr/agenda/le-noel-de-casse-noisette/casse-noisette-l-aventure-a-jouer).

**Réservation :** au 27 octobre 2026, les deux fiches d'animations annoncent une billetterie en ligne « prochainement ». Ces séances ne sont donc pas à considérer comme réservables dès maintenant. Vérifiez l'ouverture des ventes et les places disponibles sur les pages officielles avant de fixer votre déplacement. Aucun billet d'attraction vendu ailleurs n'est présenté comme équivalent à ces animations.

## Dates, horaires et budget : les points à ne pas confondre

Les décors sont annoncés jusqu'au **3 janvier 2027**, mais le château ferme les **25 décembre 2026 et 1er janvier 2027**. En hiver, il ouvre normalement de **10 h à 17 h 30**, avec **dernier accès à 16 h 30** ; le parc ferme 45 minutes avant le monument. Les animations n'ont lieu qu'aux dates indiquées plus haut : une entrée classique un autre jour ne donne pas accès à la visite contée ou à l'aventure.

Les budgets de **18 €, 30 € et 37 €** correspondent respectivement à la visite libre, à la « féérie » et à « l'aventure à jouer » pour deux adultes et deux enfants d'âge éligible, aux tarifs publiés. Ils n'incluent ni transport, ni repas. Les réductions et gratuités du billet ordinaire ne doivent pas être supposées applicables aux visites animées.

## Venir avec de jeunes enfants : poussette, accès et pauses

Les **poussettes sont autorisées dans le parc, mais pas à l'intérieur du château**. Un espace de dépôt est prévu dans la cour d'honneur. Avec un tout-petit, anticipez donc le portage pendant le parcours ; les salles et les abords pavés peuvent aussi ralentir les déplacements. Le château met des sièges-cannes à disposition et des consignes à l'accueil. Pour un goûter ou un repas, plusieurs restaurants et snacks se trouvent dans le village : mieux vaut organiser la pause avant ou après l'animation de 14 h 30.

Pour les personnes à mobilité réduite, le château indique **deux places PMR et un dépose-minute sur l'esplanade**. Certaines salles du rez-de-chaussée sont accessibles, mais **le premier étage n'est pas accessible en fauteuil**. Le parcours précis des animations de Noël n'étant pas détaillé sous cet angle, contactez le monument avant de réserver une visite accompagnée si l'accès à certaines salles est déterminant. La [page officielle d'accessibilité](https://www.chateau-pierrefonds.fr/visiter/visiteurs-en-situation-de-handicap) précise les équipements et les contacts.

Le château se trouve **rue Viollet-le-Duc, 60350 Pierrefonds**. Le stationnement **rue Sabatier est gratuit**, à environ dix minutes du monument selon le site officiel. En transports en commun, le château renvoie notamment vers la **gare de Compiègne**, puis une liaison en bus : contrôlez l'aller et surtout le retour du jour choisi, sans supposer une correspondance disponible après la séance. Prévoyez des vêtements chauds pour les trajets extérieurs et le temps passé dans le parc.

## Prolonger la sortie sur un week-end

Si vous venez de loin, une location avec cuisine peut simplifier les repas et le rythme des enfants. À Pierrefonds, ce [gîte de trois chambres pour six personnes sur Abritel](https://www.abritel.fr/location-vacances/p1964558) propose notamment une cuisine et deux salles de bain ; il se trouve à quelques kilomètres du château, pas juste à son entrée. Vérifiez le prix total, les conditions et la disponibilité pour vos dates : aucun tarif de séjour pendant les fêtes n'est confirmé ici.

Pour compléter le week-end par une autre visite patrimoniale, le [guide du château de Compiègne en famille](/articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/) aide à choisir les espaces ouverts et à organiser la journée avec des enfants.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/contes-et-histoires-2026-comment-choisir-un-monument-a-visiter-avec-les-enfants/ | Contes et Histoires 2026: comment choisir un monument à visiter avec les enfants | evenements
- /articles/evenements/noel-au-chateau-de-valencay-ce-qu-il-faut-savoir-avant-d-y-aller/ | Noël au Château de Valençay: ce qu'il faut savoir avant d'y aller | evenements | Valençay, Indre, Centre-Val de Loire
- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
