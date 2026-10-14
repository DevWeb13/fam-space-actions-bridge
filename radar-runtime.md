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
title: "Vacances royales 2026 à Versailles: animations Napoléon, dates et billets"
subtitle: "Du 17 octobre au 1er novembre: trois activités familiales dans les salles de l'Empire, sans réservation supplémentaire"
summary: "Vacances royales 2026 au château de Versailles: dates, horaires et contenu des trois animations autour de Napoléon, accès au Château, tarifs et gratuités."
category: evenements
location:
  city: Versailles
  department: Yvelines
  region: Île-de-France
keywords:
  - Vacances royales Versailles octobre 2026
  - animations Napoléon château Versailles Toussaint
  - Vacances royales 2026 billets familles
sources:
  - title: Château de Versailles - Vacances royales, programme familial 2026
    url: https://www.chateauversailles.fr/actualites/vie-domaine/Evenement-famille-a-Versailles
  - title: Château de Versailles - Tarification officielle 2026
    url: https://www.chateauversailles.fr/tarification-2026
  - title: Château de Versailles - Billets et tarifs
    url: https://www.chateauversailles.fr/preparer-ma-visite/billets-tarifs
  - title: Château de Versailles - Conditions de gratuité et de tarif réduit
    url: https://www.chateauversailles.fr/preparer-ma-visite/conditions-gratuite
  - title: Château de Versailles - Foire aux questions
    url: https://www.chateauversailles.fr/preparer-ma-visite/faq
  - title: Château de Versailles - Préparer une visite en famille
    url: https://www.chateauversailles.fr/preparer-ma-visite/visiter-versailles-famille
  - title: Château de Versailles - Grandes Eaux et Jardins Musicaux
    url: https://www.chateauversailles.fr/actualites/spectacles/grandes-eaux-jardins-musicaux
  - title: Tiqets - Billet Château, Jardins et domaine de Trianon
    url: https://www.tiqets.com/fr/activites-attractions-versailles-c66594/billets-pour-chateau-de-versailles-billet-d-entree-acces-aux-jardins-domaine-de-trianon-p974127/
  - title: Booking.com - Hôtel Le Versailles
    url: https://www.booking.com/hotel/fr/versailles.fr.html
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille
  decision: Identifier les jours et horaires des animations Vacances royales, rejoindre les salles de l'Empire, comprendre qu'elles ne nécessitent pas de réservation propre mais que l'accès au Château demande un billet et parfois un créneau gratuit, puis choisir le billet adapté à sa famille.
  affiliationPotential: "Action principale: billet d'entrée au Château, distinct des animations sans réservation. Tiqets propose un Passeport Château + Jardins + Trianon (https://www.tiqets.com/fr/activites-attractions-versailles-c66594/billets-pour-chateau-de-versailles-billet-d-entree-acces-aux-jardins-domaine-de-trianon-p974127/); pertinent seulement si la famille visite réellement l'ensemble, à comparer à un billet Château seul et aux gratuités officielles. Hébergement secondaire pour un séjour: Hôtel Le Versailles (https://www.booking.com/hotel/fr/versailles.fr.html), chambre familiale 2 adultes et 2 enfants près du Château, sans disponibilité ni prix présumés."
  gsc:
    retrievedAt: 2026-10-14T04:26:13.937Z
    dataThrough: 2026-10-11
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Versailles - Vacances royales, programme familial d'automne 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Pendant les vacances de la Toussaint, le château de Versailles propose **Vacances royales**, trois animations familiales consacrées à Napoléon et au Premier Empire. Elles se déroulent **du 17 octobre au 1er novembre 2026**, uniquement certains mercredis et week-ends. **Aucune réservation spécifique n'est demandée pour participer aux animations**, mais il faut tout de même **un billet d'entrée au Château, y compris un billet horodaté gratuit pour les visiteurs qui y ont droit**. C'est la distinction essentielle pour organiser cette sortie.

## Quels jours venir et où trouver les animations?

Selon le [programme officiel des Vacances royales](https://www.chateauversailles.fr/actualites/vie-domaine/Evenement-famille-a-Versailles), les rendez-vous sont proposés à huit dates:

- **Samedi 17 et dimanche 18 octobre**
- **Mercredi 21 octobre**
- **Samedi 24 et dimanche 25 octobre**
- **Mercredi 28 octobre**
- **Samedi 31 octobre et dimanche 1er novembre**

Les animations ont lieu de **10h30 à 17h45**, la dernière commençant à **17h15**. Ce créneau correspond au programme familial, pas à la durée d'ouverture de tout le domaine; le Château ne publie pas ici de durée précise ni d'horaires individuels pour chacune des trois propositions.

Rendez-vous dans les **salles de l'Empire, galerie de pierre basse sud**, en passant par **l'entrée A, au pavillon Dufour**. Réservez votre créneau d'entrée au Château en gardant le temps de rejoindre ces salles.

## Trois façons de découvrir l'épopée napoléonienne

**«Une épopée dans un musée»** est une rencontre avec un comédien interprétant **André Estienne**, ancien soldat de Bonaparte surnommé le tambour d'Arcole. Il entraîne les visiteurs dans les récits de l'épopée impériale au milieu des collections. C'est la proposition à privilégier si les enfants aiment écouter des personnages raconter l'Histoire.

**«La geste de l'empereur»** associe une médiation courte autour de tableaux, des anecdotes historiques et de la **poésie gestuelle**. Les enfants observent des scènes de l'Empire puis participent par le mouvement: une alternative au seul récit historique.

**«Crée ton décor impérial»** est la proposition manuelle. Dans une salle d'atelier, chacun s'inspire des motifs du Premier Empire pour réaliser un **décor miniature personnalisé** à rapporter. C'est le rendez-vous le plus évident pour les enfants qui aiment fabriquer quelque chose.

Un **espace détente** complète les animations, avec des **podcasts**, un coin lecture et la possibilité de créer une **carte postale Vacances royales**. Le programme ne fixe pas d'âge minimum pour ces activités: évitez de supposer qu'elles conviennent toutes de la même façon à un bébé ou à un très jeune enfant.

## Quel billet faut-il réserver pour toute la famille?

Les trois animations **sont comprises dans l'accès au Château**: il n'y a pas de billet de spectacle ou d'atelier supplémentaire à acheter. En revanche, **la réservation d'un créneau d'entrée au Château reste obligatoire pour tous**, même lorsque la visite est gratuite, comme le rappellent les [conditions de gratuité](https://www.chateauversailles.fr/preparer-ma-visite/conditions-gratuite).

- **Moins de 18 ans:** accès gratuit au Château, quel que soit le pays de résidence, sur présentation du justificatif demandé.
- **18 à 25 ans inclus:** gratuité au Château pour les ressortissants ou résidents de l'**Espace économique européen (EEE)**, sur justificatif. Elle ne s'applique pas automatiquement à tous les visiteurs de moins de 26 ans.
- **Adultes payants:** la [tarification officielle 2026](https://www.chateauversailles.fr/tarification-2026) présente le **Passeport** comme le billet permettant d'entrer au Château. Il comprend aussi les Jardins et le domaine de Trianon. **Du 17 au 31 octobre**, son tarif est de **35 €** en plein tarif, ou **32 €** pour les personnes éligibles à la réduction France/EEE. **Le 1er novembre**, à l'entrée en basse saison, les tarifs annoncés sont de **25 € et 22 €** respectivement.

Les bénéficiaires de la gratuité doivent [réserver leur créneau gratuit sur la billetterie officielle](https://www.chateauversailles.fr/preparer-ma-visite/billets-tarifs). Les justificatifs d'âge et, lorsque nécessaire, de résidence ou de nationalité seront demandés à l'entrée. Le fait qu'une animation soit «sans réservation» ne dispense donc jamais de ce billet d'accès.

Si vous comptez également explorer les Jardins et les Trianons, vous pouvez consulter le [billet Château, Jardins et domaine de Trianon sur Tiqets](https://www.tiqets.com/fr/activites-attractions-versailles-c66594/billets-pour-chateau-de-versailles-billet-d-entree-acces-aux-jardins-domaine-de-trianon-p974127/) et comparer son prix et ses conditions au Passeport officiel. **Ne prenez pas un billet payant pour un enfant bénéficiant de la gratuité du Château par simple automatisme.** Le programme «Vacances royales» ne nécessite aucun achat distinct.

### Et les Jardins avec des enfants?

Les règles de gratuité du **Château** ne sont pas celles des **Jardins**. Les [Grandes Eaux Musicales](https://www.chateauversailles.fr/actualites/spectacles/grandes-eaux-jardins-musicaux) sont annoncées les samedis et dimanches jusqu'au **1er novembre 2026 inclus**: les Jardins peuvent alors demander un billet spécifique, même aux enfants bénéficiant d'une entrée gratuite au Château, **sauf aux moins de 6 ans**. Le Passeport couvre cet accès. Pour le 1er novembre, où s'entrecroisent début de basse saison et dernière date des Grandes Eaux, vérifiez les conditions affichées pour cette journée au moment de réserver.

## Venir avec un bébé ou prolonger la sortie

Avec un nourrisson, l'essentiel est de repérer les salles de l'Empire et de garder une visite courte, sans prévoir systématiquement tout le domaine. Pour les poussettes, porte-bébés, changes, repas et distances jusqu'aux Jardins ou à Trianon, consultez notre guide [Visiter le château de Versailles avec un bébé](https://www.fam-space.fr/articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/), qui détaille déjà ces questions pratiques.

Pour les familles qui souhaitent passer la nuit à Versailles, l'[Hôtel Le Versailles](https://www.booking.com/hotel/fr/versailles.fr.html), près du Château, propose notamment une **chambre familiale pour deux adultes et deux enfants**. Vérifiez sa composition et les disponibilités réelles pour votre date avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/cuisine/atelier-cuisine-a-versailles-enfant-seul-ou-duo-parent-enfant-que-choisir/ | Atelier cuisine à Versailles: enfant seul ou duo parent-enfant, que choisir ? | cuisine | Versailles, Yvelines, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/sorties/vacances-de-la-toussaint-2026-au-musee-carnavalet-quelle-activite-choisir-selon-l-age/ | Vacances de la Toussaint 2026 au musée Carnavalet: activités en famille dès 4 ans | sorties | Paris, Paris, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/bons-plans/pass-destination-yvelines-hauts-de-seine-en-famille-comment-profiter-d-au-moins-15-de-reduction/ | Pass Destination Yvelines-Hauts-de-Seine en famille: comment profiter d'au moins 15% de réduction? | bons-plans | Versailles, Yvelines, Île-de-France
- /articles/vie-pratique/imagine-r-dans-les-yvelines-ce-qui-change-pour-les-eleves-boursiers-a-la-rentree-2026/ | Imagine R dans les Yvelines: ce qui change pour les élèves boursiers à la rentrée 2026 | vie-pratique | Versailles, Yvelines, Île-de-France
- /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | Halloween 2026 à France Miniature avec des enfants: billets et visite | sorties | Élancourt, Yvelines, Île-de-France
- /articles/maison/a-buc-votre-bac-gris-est-compte-ce-que-change-la-tarification-eco-responsable/ | À Buc, votre bac gris est compté: ce que change la tarification éco-responsable | maison | Buc, Yvelines, Île-de-France
- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/sorties/halloween-2026-a-france-miniature-en-famille/ | 2026-10-08T18:25:52.752Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
