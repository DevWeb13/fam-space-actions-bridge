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
title: "Monument jeu d’enfant à Aigues-Mortes : mini-sacre et escape game les 17 et 18 octobre 2026"
subtitle: Deux activités autour de Saint Louis à choisir selon l’âge, la réservation et le rythme des enfants
summary: Aux tours et remparts d’Aigues-Mortes, les familles peuvent choisir entre une visite-atelier dès 4 ans sur réservation et un escape game dès 6 ans en accès libre selon les places.
category: evenements
location:
  city: Aigues-Mortes
  department: Gard
  region: Occitanie
keywords:
  - Monument jeu d’enfant Aigues-Mortes 2026
  - Mon mini sacre Aigues-Mortes
  - escape game Saint-Louis Aigues-Mortes enfants
  - remparts Aigues-Mortes poussette
sources:
  - title: Tours et remparts d’Aigues-Mortes — Monument jeu d’enfant 2026
    url: https://www.aigues-mortes-monument.fr/agenda/monument-jeu-d-enfant-2026-800-ans-de-sacre-sur-les-pas-de-saint-louis
    accessedAt: 2026-10-10
  - title: Tours et remparts d’Aigues-Mortes — Mon mini sacre
    url: https://www.aigues-mortes-monument.fr/agenda/monument-jeu-d-enfant-2026-800-ans-de-sacre-sur-les-pas-de-saint-louis/mon-mini-sacre
    accessedAt: 2026-10-10
  - title: Tours et remparts d’Aigues-Mortes — Escape Game La couronne perdue de Saint-Louis
    url: https://www.aigues-mortes-monument.fr/agenda/monument-jeu-d-enfant-2026-800-ans-de-sacre-sur-les-pas-de-saint-louis/escape-game-la-couronne-perdue-de-saint-louis
    accessedAt: 2026-10-10
  - title: Tours et remparts d’Aigues-Mortes — Informations pratiques
    url: https://www.aigues-mortes-monument.fr/visiter/informations-pratiques
    accessedAt: 2026-10-10
  - title: Tours et remparts d’Aigues-Mortes — En famille
    url: https://www.aigues-mortes-monument.fr/visiter/en-famille
    accessedAt: 2026-10-10
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants
  decision: Choisir l’activité adaptée à l’âge et au rythme des enfants, savoir laquelle exige une réservation et anticiper la contrainte poussette avant de venir aux remparts les 17 ou 18 octobre.
  affiliationPotential: Billetterie officielle du monument pour l’entrée et la réservation du mini-sacre ; aucune billetterie partenaire exacte vérifiée. Hébergement familial exact La Maison de Famille à Aigues-Mortes vérifié sur Booking.com pour les familles qui transforment la sortie en séjour.
  gsc:
    retrievedAt: 2026-10-10T03:52:00.000Z
    dataThrough: 2026-10-06
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Tours et remparts d’Aigues-Mortes — Monument jeu d’enfant 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-18
---

Les **17 et 18 octobre 2026**, les tours et remparts d’Aigues-Mortes participent à **Monument jeu d’enfant** avec deux propositions autour des 800 ans du sacre de Saint Louis. Elles ne s’adressent pas exactement aux mêmes enfants : **« Mon mini sacre »** est une visite contée avec atelier créatif pour les 4-10 ans, tandis que **« La couronne perdue de Saint-Louis »** est un escape game conseillé dès 6 ans.

Le choix dépend surtout de trois points : l’âge des enfants, l’envie de suivre un horaire fixe et la possibilité de réserver à l’avance. Les deux activités sont proposées **sans supplément au droit d’entrée du monument**.

## Mon mini sacre : pour les 4-10 ans qui aiment écouter puis créer

La visite contée [« Mon mini sacre »](https://www.aigues-mortes-monument.fr/agenda/monument-jeu-d-enfant-2026-800-ans-de-sacre-sur-les-pas-de-saint-louis/mon-mini-sacre) a lieu **samedi 17 et dimanche 18 octobre à 14 h**. Elle dure environ **1 heure**.

Le parcours raconte le sacre de Saint Louis et conduit les familles sur ses traces dans les remparts. La visite se termine par un atelier pendant lequel chaque enfant fabrique sa propre couronne.

Le monument recommande cette activité aux **4-10 ans**. Un adulte doit accompagner les enfants et il faut prévoir une tenue qui ne craint pas la peinture.

Surtout, la jauge est limitée : **la réservation en ligne est obligatoire**. C’est donc le meilleur choix si votre enfant aime les histoires et les activités manuelles, à condition de pouvoir vous engager sur le créneau de 14 h.

## L’escape game : plus souple pour les enfants dès 6 ans

L’[escape game « La couronne perdue de Saint-Louis »](https://www.aigues-mortes-monument.fr/agenda/monument-jeu-d-enfant-2026-800-ans-de-sacre-sur-les-pas-de-saint-louis/escape-game-la-couronne-perdue-de-saint-louis) transforme la disparition de la couronne royale en enquête familiale.

Les parties sont proposées **en continu de 10 h à 16 h**, les 17 et 18 octobre, **selon les places disponibles**. L’activité est annoncée dès **6 ans** et un adulte doit là aussi accompagner les enfants.

La page officielle la présente en accès libre dans la limite des places. Ce format est donc plus souple qu’un rendez-vous unique à 14 h, mais il ne garantit pas pour autant une place immédiate au moment où vous arrivez.

Pour une famille avec des enfants qui aiment chercher des indices, résoudre des énigmes et avancer ensemble, c’est l’option la plus naturelle. Avec un enfant de 4 ou 5 ans, le mini-sacre reste en revanche le format officiellement adapté.

## Combien coûte l’après-midi ?

Les deux animations sont **sans supplément** : vous payez uniquement le droit d’entrée applicable aux tours et remparts.

Du 1er septembre au 30 avril, le [tarif individuel officiel](https://www.aigues-mortes-monument.fr/visiter/informations-pratiques) est de **9 €**. Les moins de 18 ans bénéficient de la gratuité, ainsi que les 18-25 ans inclus ressortissants de l’Union européenne ou résidents réguliers non européens en France, parmi les principales catégories gratuites.

La page de l’événement résume également la manifestation comme gratuite pour les moins de 26 ans. Pour un jeune adulte, vérifiez simplement que votre situation correspond bien aux conditions détaillées de gratuité du monument.

Si vous choisissez le mini-sacre, l’entrée dans le monument ne remplace pas la réservation de l’activité : pensez à réserver le créneau en amont.

## Avec une poussette, il faut prévoir de la laisser à l’accueil

C’est le point pratique à connaître avant de venir avec un bébé ou un jeune enfant : **le circuit de visite des remparts n’est pas accessible aux poussettes**. Le monument demande de les déposer à l’accueil.

Pour une famille concernée, un porte-bébé peut donc être plus pratique pour parcourir le site. Le monument indique aussi qu’un **espace change bébé** est disponible dans les toilettes et qu’un espace détente ombragé se trouve dans la cour d’honneur.

Les tours et remparts ouvrent à **10 h** et ferment à **17 h 30** à cette période. Le dernier accès au monument intervient 45 minutes avant la fermeture, mais les animations Monument jeu d’enfant se terminent plus tôt : l’escape game annonce ses derniers départs au plus tard à 16 h.

## Mini-sacre ou escape game : lequel choisir ?

Pour un enfant de **4 ou 5 ans**, le choix est simple : le mini-sacre est la seule des deux activités annoncée pour cet âge.

À partir de **6 ans**, regardez plutôt le tempérament de l’enfant. Le mini-sacre combine récit et création manuelle dans un format d’une heure ; l’escape game mise davantage sur la recherche d’indices et l’action collective.

Le deuxième critère est votre organisation. Le mini-sacre impose d’être présent pour **14 h avec une réservation**. L’escape game permet une arrivée plus souple entre 10 h et 16 h, mais reste soumis aux places disponibles.

Si vous hésitez encore avec d’autres monuments participant au même week-end, notre guide [Monument jeu d’enfant 2026 : comment choisir une visite adaptée à l’âge des enfants](https://www.fam-space.fr/articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/) aide à comparer les formats sans reprendre ici tout le programme national.

## Si vous restez dormir à Aigues-Mortes

Pour prolonger la sortie sur un week-end, [La Maison de Famille à Aigues-Mortes](https://www.booking.com/hotel/fr/la-maison-de-famille-aigues-mortes.fr.html) est une maison de quatre chambres annoncée pour accueillir jusqu’à huit personnes et un bébé. Vérifiez les disponibilités, les conditions et le prix pour vos dates avant de réserver.

Pour choisir un secteur selon la gare, la voiture et le stationnement, consultez plutôt notre guide [Où dormir à Aigues-Mortes pour visiter à pied avec des enfants ?](https://www.fam-space.fr/articles/voyages/ou-dormir-a-aigues-mortes-pour-visiter-a-pied-avec-des-enfants/), qui détaille déjà ces questions.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/ou-dormir-a-aigues-mortes-pour-visiter-a-pied-avec-des-enfants/ | Où dormir à Aigues-Mortes pour visiter à pied avec des enfants? | voyages | Aigues-Mortes, Gard, Occitanie
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/ | Monument jeu d'enfant 2026: comment choisir une visite adaptée à l'âge des enfants | evenements
- /articles/parentalite/premier-week-end-a-nimes-avec-un-bebe-ou-dormir-et-quoi-faire/ | Nîmes avec un bébé: Romanité, Jardins de la Fontaine et où dormir | parentalite | Nîmes, Gard, Occitanie
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/gardiens-temps-villarceaux-famille-2026/ | Les gardiens du temps à Villarceaux: une dernière visite-jeu le 24 octobre | sorties | Chaussy, Val-d'Oise, Île-de-France
- /articles/evenements/contes-et-histoires-2026-comment-choisir-un-monument-a-visiter-avec-les-enfants/ | Contes et Histoires 2026: comment choisir un monument à visiter avec les enfants | evenements
- /articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/ | Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils | evenements | Saint-Jean-du-Gard, Gard, Occitanie
- /articles/bons-plans/pont-du-gard-a-petit-budget-comment-visiter-sans-payer-plus-que-necessaire/ | Pont du Gard à petit budget: comment visiter sans payer plus que nécessaire | bons-plans | Vers-Pont-du-Gard, Gard, Occitanie
- /articles/sorties/le-grau-du-roi-en-famille-3-activites-a-reserver-en-2026/ | Le Grau-du-Roi en famille: 3 activités à réserver en 2026 | sorties | Le Grau-du-Roi, Gard, Occitanie
- /articles/sorties/tous-en-vadrouille-nimes-2026-famille/ | Tous en vadrouille à Nîmes: une visite-jeu en famille jusqu’au 23 août 2026 | sorties | Nîmes, Gard, Occitanie
- /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | Festival Lumière 2026 avec des enfants: Chaplin, Laurel & Hardy et les bons billets | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | Monument jeu d'enfant 2026 à la Villa Cavrois: énigme, mosaïque ou linogravure? | evenements | Croix, Nord, Hauts-de-France
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants/ | 2026-10-10T15:40:28.185Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | 2026-10-04T19:31:30.376Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
