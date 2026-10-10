# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les faits utilisés sont liés naturellement dans le corps et présents dans `sources`. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Monument jeu d’enfant 2026 à Aigues-Mortes : mini-sacre ou escape game avec les enfants ?"
subtitle: Les 17 et 18 octobre, deux activités sans supplément à choisir selon l’âge, la réservation et le rythme de la famille
summary: À Aigues-Mortes, Monument jeu d’enfant propose un mini-sacre dès 4 ans sur réservation et un escape game dès 6 ans en continu. Horaires, tarifs, poussette et choix pratique.
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
  - title: Tours et remparts d’Aigues-Mortes — Mon mini sacre
    url: https://www.aigues-mortes-monument.fr/agenda/monument-jeu-d-enfant-2026-800-ans-de-sacre-sur-les-pas-de-saint-louis/mon-mini-sacre
  - title: Tours et remparts d’Aigues-Mortes — Escape Game La couronne perdue de Saint-Louis
    url: https://www.aigues-mortes-monument.fr/agenda/monument-jeu-d-enfant-2026-800-ans-de-sacre-sur-les-pas-de-saint-louis/escape-game-la-couronne-perdue-de-saint-louis
  - title: Tours et remparts d’Aigues-Mortes — Informations pratiques
    url: https://www.aigues-mortes-monument.fr/visiter/informations-pratiques
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: monument-jeu-d-enfant-2026-a-aigues-mortes-mini-sacre-ou-escape-game-avec-les-enfants
  decision: Choisir l’activité adaptée à l’âge et au rythme des enfants, savoir laquelle exige une réservation et anticiper la contrainte poussette avant de venir aux remparts les 17 ou 18 octobre.
  affiliationPotential: Billetterie officielle du monument pour l’entrée et la réservation du mini-sacre ; aucune billetterie partenaire exacte vérifiée. Hébergement familial exact La Maison de Famille à Aigues-Mortes vérifié sur Booking.com pour les familles qui transforment la sortie en séjour.
  gsc:
    retrievedAt: 2026-10-10T03:52:00.000Z
    dataThrough: 2026-10-06
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Tours et remparts d’Aigues-Mortes — Monument jeu d’enfant 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Monument jeu d’enfant 2026 aux tours et remparts d’Aigues-Mortes, les 17 et 18 octobre : deux activités autour des 800 ans du sacre de Saint Louis, avec des conditions très différentes selon l’âge.

## Pourquoi cette mission
L’événement est imminent et les informations officielles permettent une décision concrète. Le refresh Aquarium de La Réunion reste `uncertain` et le site officiel annonce toujours une fermeture sans date de réouverture. L’expansion autour de la Carte Avantage Adulte SNCF est distincte mais moins urgente. Aucun article Fam Space ne traite ce programme local ; le guide national Monument jeu d’enfant couvre seulement la méthode de choix et la page Aigues-Mortes existante traite l’hébergement.

## Décision du lecteur
Choisir entre le mini-sacre et l’escape game selon l’âge, la réservation et le rythme des enfants, puis préparer l’entrée et la poussette sans mauvaise surprise.

## Faits à traiter
- « Mon mini sacre » : les 17 et 18 octobre à 14 h, 1 h, pour les 4-10 ans, accompagnement adulte obligatoire, tenue adaptée à la peinture, réservation en ligne obligatoire.
- Escape game « La couronne perdue de Saint-Louis » : les 17 et 18 octobre, départs en continu de 10 h à 16 h selon les places, dès 6 ans, adulte accompagnant obligatoire.
- Les deux activités sont sans supplément du droit d’entrée ; tarif adulte saison basse 9 €, principales gratuités dont les moins de 18 ans et certains 18-25 ans.
- Le circuit des remparts n’est pas accessible aux poussettes : elles doivent être déposées à l’accueil. Un espace change bébé est disponible dans les toilettes.
- Ne pas refaire le guide national : rester centré sur le choix local entre les deux activités et les contraintes propres au site.

## Sources de départ
Pages officielles des tours et remparts d’Aigues-Mortes pour l’événement, les deux activités et les informations pratiques.

## Affiliation
Aucune billetterie partenaire exacte vérifiée ; utiliser la réservation officielle quand nécessaire. Pour un séjour, La Maison de Famille sur Booking.com est une piste exacte : maison intra-muros avec quatre chambres, annoncée pour huit personnes et un bébé.

## Continuations internes
Le guide Fam Space « Monument jeu d’enfant 2026 : comment choisir une visite adaptée à l’âge des enfants » prend le relais pour comparer les monuments au niveau national. « Où dormir à Aigues-Mortes pour visiter à pied avec des enfants ? » prend le relais pour le choix du secteur, la gare et le stationnement.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/ou-dormir-a-aigues-mortes-pour-visiter-a-pied-avec-des-enfants/ | Où dormir à Aigues-Mortes pour visiter à pied avec des enfants? | voyages | Aigues-Mortes, Gard, Occitanie
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/parentalite/premier-week-end-a-nimes-avec-un-bebe-ou-dormir-et-quoi-faire/ | Nîmes avec un bébé: Romanité, Jardins de la Fontaine et où dormir | parentalite | Nîmes, Gard, Occitanie
- /articles/evenements/contes-et-histoires-2026-comment-choisir-un-monument-a-visiter-avec-les-enfants/ | Contes et Histoires 2026: comment choisir un monument à visiter avec les enfants | evenements
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | Monument jeu d'enfant 2026 à la Villa Cavrois: énigme, mosaïque ou linogravure? | evenements | Croix, Nord, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-comment-choisir-une-visite-adaptee-a-l-age-des-enfants/ | Monument jeu d'enfant 2026: comment choisir une visite adaptée à l'âge des enfants | evenements
- /articles/activites/escape-game-du-chateau-de-la-roche-en-famille-alerte-submersion-des-10-ans/ | Escape game du Château de la Roche en famille: Alerte Submersion dès 10 ans | activites | Saint-Priest-la-Roche, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/ | Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils | evenements | Saint-Jean-du-Gard, Gard, Occitanie
- /articles/bons-plans/pont-du-gard-a-petit-budget-comment-visiter-sans-payer-plus-que-necessaire/ | Pont du Gard à petit budget: comment visiter sans payer plus que nécessaire | bons-plans | Vers-Pont-du-Gard, Gard, Occitanie
- /articles/sorties/le-grau-du-roi-en-famille-3-activites-a-reserver-en-2026/ | Le Grau-du-Roi en famille: 3 activités à réserver en 2026 | sorties | Le Grau-du-Roi, Gard, Occitanie
- /articles/sorties/tous-en-vadrouille-nimes-2026-famille/ | Tous en vadrouille à Nîmes: une visite-jeu en famille jusqu’au 23 août 2026 | sorties | Nîmes, Gard, Occitanie
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
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
