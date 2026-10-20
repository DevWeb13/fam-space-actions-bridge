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

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

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
title: "Festival du Livre de Colmar 2026 en famille: dates, ateliers et accès"
subtitle: Les 21 et 22 novembre, une sortie littéraire gratuite au Parc des expositions, avec animations jeunesse et programme détaillé à venir.
summary: "Préparer le Festival du Livre de Colmar 2026 avec des enfants: horaires, entrée gratuite, stands, spectacles et ateliers jeunesse, accès au Parc des expositions et séjour éventuel."
category: evenements
location:
  city: Colmar
  department: Haut-Rhin
  region: Grand Est
keywords:
  - Festival du Livre Colmar 2026 enfants
  - festival livre Colmar 21 22 novembre 2026
  - festival livre Colmar ateliers jeunesse gratuits
sources:
  - title: Ville de Colmar - Festival du livre 2026
    url: https://www.colmar.fr/festival-livre-colmar
  - title: Office de tourisme de Colmar - Festival du livre 2026
    url: https://www.tourisme-colmar.com/fr/toutes-les-fiches/F235013393_festival-du-livre-colmar
  - title: Bibliothèques de Colmar - Programme officiel du Festival du Livre
    url: https://bibliotheque.colmar.fr/festivaldulivredecolmar
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces
  decision: Choisir le samedi ou le dimanche et quelques rendez-vous jeunesse réellement adaptés à l'âge des enfants, avec un horaire et un accès pratiques, sans supposer que les ateliers, spectacles ou dédicaces annoncés globalement sont tous libres d'accès ou sans réservation.
  affiliationPotential: "Entrée au Festival du Livre gratuite: aucune billetterie principale à vendre. Hébergement pertinent pour un week-end sur place: Best Western Colmar Expo sur Booking.com (https://www.booking.com/hotel/fr/comfort-expo-colmar.fr.html), 2C rue Timken, à environ 350 m du Parc des expositions. Plusieurs catégories familiales sont affichées, dont lit queen-size et canapé-lit; vérifier impérativement capacité selon âge et nombre d'enfants, prix, disponibilité les 21-22 novembre et conditions de réservation."
  gsc:
    retrievedAt: 2026-10-20T02:29:02.000Z
    dataThrough: 2026-10-17
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Colmar - Festival du livre 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue

Préparer un article familial sur la **37e édition du Festival du Livre de Colmar**, samedi 21 et dimanche 22 novembre 2026, au Parc des expositions, thème « Passeurs d'histoires ». L'entrée est gratuite, avec plus de 200 stands et des propositions jeunesse annoncées par la Ville.

## Pourquoi cette mission

Opportunité locale prochaine, sourcée et encore absente des 717 articles du catalogue. La recherche de doublons remonte surtout d'autres sorties à Colmar et des salons du livre d'autres villes, sans page traitant ce festival. Publication prépare un événement à Nevers et les deux sujets Destination concernent d'autres territoires. Le meilleur refresh GSC, **Quai des Bulles à Saint-Malo**, porte sur un événement achevé le 11 octobre: sa baisse d'impressions est compatible avec la fin du festival et le signal de classement reste incertain. Une expansion depuis la page forte sur les transports parisiens paraît moins urgente et recoupe des sujets déjà couverts.

## Décision du lecteur

Savoir **quel jour venir et quels rendez-vous retenir en fonction de l'âge des enfants**, plutôt que parcourir tous les stands sans programme ni réservation adaptée.

## Faits à traiter

- **Samedi 21 novembre: 10h-19h; dimanche 22 novembre: 10h-18h**, selon la fiche 2026 actuelle de l'office de tourisme. Surveiller toute mise à jour: une ancienne version de cette fiche contient encore le thème et les horaires d'une édition précédente.
- Entrée gratuite, Parc des expositions de Colmar, avenue de la Foire aux Vins; 37e édition et thème « Passeurs d'histoires » confirmés par la Ville.
- Scènes, cabane aux histoires, spectacles jeunesse, ateliers, dédicaces et rencontres annoncés, mais **pas de sélection par âge ni de créneaux individuels inventés**. La conférence de présentation est prévue **jeudi 22 octobre**: recontrôler alors le programme, les âges, la gratuité effective des ateliers, leur capacité et les éventuelles inscriptions.
- Vérifier accès depuis la gare, transports du week-end, stationnement, poussettes et aménagements PMR avant de conseiller un itinéraire précis; ne pas supposer une navette ou un service non confirmé.

## Sources de départ

Ville de Colmar, fiche événement de l'office de tourisme et programme des bibliothèques municipales à consulter après son annonce du 22 octobre.

## Affiliation

Pas de billet partenaire pour l'accès libre. Pour une nuit avec les enfants, **Best Western Colmar Expo**, proposé sur Booking.com en face du Parc des expositions: chambres familiales avec canapé-lit, capacité exacte et conditions à confirmer pour la famille et la date.

## Continuations internes

L'article Fam Space **« Colmar avec des enfants quand il pleut: quel musée choisir? »** peut prolonger un week-end en cas de visite supplémentaire, mais ne pas reproduire ses comparatifs de musées. Ne pas assimiler le Festival du Livre aux **marchés de Noël de Colmar**, traités dans une autre page et à une autre période.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/vie-pratique/colmar-avec-des-enfants-quand-il-pleut-quel-musee-choisir/ | Colmar avec des enfants quand il pleut: quel musée choisir ? | vie-pratique | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/repto-terra-expo-a-colmar-faut-il-y-aller-avec-des-enfants/ | Repto Terra Expo à Colmar: faut-il y aller avec des enfants? | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/fanabriques-colmar-2026-famille/ | Fana'Briques 2026 à Colmar: un week-end LEGO en famille | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/ | Mulhouse sans voiture avec des enfants: comment organiser 2 jours | voyages | Mulhouse, Haut-Rhin, Grand Est
- /articles/sorties/parc-du-petit-prince-faut-il-prevoir-une-journee-entiere-avec-de-jeunes-enfants/ | Parc du Petit Prince: faut-il prévoir une journée entière avec de jeunes enfants? | sorties | Ungersheim, Haut-Rhin, Grand Est
- /articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/ | Mulhouse: trois musées gratuits pour une journée culturelle avec des enfants | bons-plans | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
