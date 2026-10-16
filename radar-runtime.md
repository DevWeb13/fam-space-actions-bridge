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
title: "Lumigny Safari de Lumières 2026-2027: balade nocturne ou billet combiné en famille?"
subtitle: Du 15 octobre au 3 janvier, trois univers de lanternes à découvrir avec ou sans visite des deux parcs animaliers
summary: "Lumigny Safari de Lumières 2026-2027 en famille: horaires, derniers accès, tarifs 16,90 € et 14,90 €, combiné avant le 1er décembre et jours de fermeture."
category: evenements
location:
  city: Lumigny-Nesles-Ormeaux
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Lumigny Safari de Lumières 2026 2027
  - Lumigny Safari de Lumières tarifs enfants
  - Lumigny Safari nocturne billet combiné
sources:
  - title: Lumigny Safari Reserve - Programme officiel Safari de Lumières
    url: https://lumigny-safari-reserve.com/evenements/lumigny-safari-de-lumieres/
  - title: VisitParisRegion - Calendrier de l'événement et jours de fermeture
    url: https://www.visitparisregion.com/fr/lumigny-safari-de-lumieres
  - title: Lumigny Safari Reserve - Horaires et tarifs des parcs de jour
    url: https://lumigny-safari-reserve.com/horaires-et-tarifs/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille
  decision: Choisir en connaissance de cause entre la promenade lumineuse seule et la journée dans les deux parcs prolongée par le parcours nocturne, calculer le budget familial selon l'âge des enfants, puis réserver une soirée effectivement ouverte sans espérer voir des animaux vivants la nuit.
  affiliationPotential: "L'organisateur vend les billets sur sa billetterie Qweekle; aucun billet équivalent identifié chez GetYourGuide, Tiqets ou Klook. Garder la billetterie officielle dans les Sources et ne pas mettre de lien d'achat officiel dans le corps. Hébergement secondaire vérifié: Le Royaume des Lions, La Fortelle à Rigny, est répertorié sur Booking.com (chambres familiales, parking privé gratuit, restauration sur place): https://www.booking.com/hotel/fr/le-royaume-des-lions-lumigny-nesles-ormeaux.fr.html ; vérifier les tarifs et disponibilités par date, ne rien garantir."
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Lumigny Safari Reserve - Programme officiel Safari de Lumières »; aucune page forte GSC n'est requise.
---

## Mission retenue

**Lumigny Safari de Lumières**, un nouvel événement nocturne du Lumigny Safari Reserve (Seine-et-Marne) pour ses vingt ans: trois univers de lanternes géantes représentant des animaux marins, des espèces du monde et des créatures fantastiques. Saison du **15 octobre 2026 au 3 janvier 2027**. Ce parcours lumineux est distinct de la visite du zoo en journée.

## Pourquoi cette mission

Opportunité saisonnière officielle, déjà commencée, avec dates et billets précis. Le catalogue Fam Space fourni et la recherche dans le dépôt ne montrent pas de page Lumigny Safari de Lumières: ce sujet ne doit pas être confondu avec les illuminations du Safari de Peaugres, d'un autre territoire. Le meilleur candidat refresh du snapshot, **cantine au collège en Essonne**, a été relu: la page explique déjà concrètement le coupon et l'inscription, tandis que la baisse GSC est « uncertain » sans requêtes comparables et ne fournit pas de motif autonome suffisant. L'expansion envisagée à partir de **Futuroween 2026**, page forte du snapshot, risquerait de répéter le guide saisonnier existant et les guides Futuroscope déjà publiés. La publication en cours sur la ressourcerie de Saclay est sans chevauchement.

## Décision du lecteur

Choisir entre **une visite des illuminations uniquement** et **les deux parcs animaliers en journée plus les illuminations le soir**, selon la date, les âges et le budget de la famille; réserver le bon billet et arriver avant le dernier accès.

## Faits à traiter

- Du **15 octobre 2026 au 3 janvier 2027**, soirées annoncées **de 18 h à 22 h**, avec **dernière entrée à 20 h 30**; réservation **en ligne obligatoire**, billets datés, pass annuel non valable pour les illuminations.
- Calendrier de VisitParisRegion: tous les jours jusqu'au **1er novembre**; du **2 novembre au 18 décembre**, **jeudi à dimanche** hors vacances scolaires; tous les jours du **19 décembre au 3 janvier**, **sauf les 24, 25 et 31 décembre et le 1er janvier**. Confirmer le calendrier et les billets du jour, ne pas suggérer une ouverture quotidienne continue.
- **Billet Lumières seul:** **16,90 € dès 11 ans**, **14,90 € de 3 à 10 ans**, **gratuit avant 3 ans**. Deux adultes et deux enfants de 3 à 10 ans: **63,60 €**.
- **Billet combiné deux parcs + Lumières:** **39 € dès 11 ans**, **29 € de 3 à 10 ans**, proposé **jusqu'au 30 novembre**. Deux adultes et deux enfants de 3 à 10 ans: **136 €**, hors repas. Ne pas présumer la gratuité des moins de 3 ans pour le combiné sans confirmation expresse.
- **À compter du 1er décembre, fermeture annuelle des parcs zoologiques en journée**: seul le Safari de Lumières nocturne reste proposé selon calendrier. Les **animaux vivants ne sont pas visibles lors de la soirée**, et leurs espaces sont fermés au public la nuit.
- Présenter brièvement les trois univers et la promenade familiale libre (environ **une heure**, selon VisitParisRegion). Éclairage féerique saisonnier, atmosphère fantastique à la Toussaint puis décors de Noël: ne pas raconter un Halloween horrifique ni promettre une visite zoologique nocturne.
- Services annoncés le soir: **parking gratuit**, snack, restaurant et boutique; **La Fortelle, 77540 Lumigny-Nesles-Ormeaux**, téléphone **01 64 51 33 33**. VisitParisRegion indique des aménagements d'accessibilité; ne pas inférer sans preuve détaillée que chaque portion du parcours convient à toutes les poussettes ou mobilités.

## Sources de départ

- Programme et billetterie de l'organisateur: https://lumigny-safari-reserve.com/evenements/lumigny-safari-de-lumieres/
- Calendrier et accessibilité, office régional: https://www.visitparisregion.com/fr/lumigny-safari-de-lumieres
- Horaires diurnes et fermeture saisonnière: https://lumigny-safari-reserve.com/horaires-et-tarifs/

## Affiliation

Aucune billetterie équivalente confirmée chez les partenaires d'activités GetYourGuide, Tiqets ou Klook: ne pas insérer de lien officiel menant à l'achat de cette prestation dans le corps; le conserver dans les sources. Pour les familles qui souhaitent dormir à proximité, **Le Royaume des Lions**, à La Fortelle (Rigny), possède sur **Booking.com** des chambres familiales, un parking privé gratuit et un restaurant: https://www.booking.com/hotel/fr/le-royaume-des-lions-lumigny-nesles-ormeaux.fr.html. Suggérer cette option à titre secondaire et demander de vérifier les prix, la capacité et les disponibilités pour la nuit choisie.

## Continuations internes

- Les articles Fam Space sur le **Safari de Peaugres et Lumières Sauvages** concernent un autre parc, en Ardèche: ne pas reprendre leur programme ou leurs billets comme s'ils s'appliquaient à Lumigny.
- Éviter toute duplication générale de conseils sur les zoos: ici, la décision centrale est **Lumières seul ou combiné de jour jusqu'au 30 novembre**, puis **Lumières seul à compter du 1er décembre**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/sorties/bambouseraie-avec-de-jeunes-enfants-poussette-ou-balade-aerienne/ | Bambouseraie avec de jeunes enfants: poussette ou balade aérienne? | sorties | Générargues, Gard, Occitanie
- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/sorties/le-grau-du-roi-en-famille-3-activites-a-reserver-en-2026/ | Le Grau-du-Roi en famille: 3 activités à réserver en 2026 | sorties | Le Grau-du-Roi, Gard, Occitanie
- /articles/cuisine/a-nebbiulinca-a-murato-faut-il-reserver-la-balade-gourmande-autour-de-la-chataigne/ | A Nebbiulinca à Murato: faut-il réserver la balade gourmande autour de la châtaigne? | cuisine | Murato, Haute-Corse, Corse
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z
- opportunity | /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | 2026-10-15T12:38:21.556Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
