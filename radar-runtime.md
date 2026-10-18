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
title: "Halloween 2026 à la Mer de Sable: spectacles, parcours effrayant et billets"
subtitle: "À Ermenonville jusqu'au 1er novembre: Chocottes ou Maxi Frousse, suppléments et tarifs pour une famille"
summary: "L'Épouvantable Mer de Sable 2026: horaires des deux nouveaux spectacles, parcours Wild West Scream payant et billets adaptés aux familles."
category: evenements
location:
  city: Ermenonville
  department: Oise
  region: Hauts-de-France
keywords:
  - Halloween Mer de Sable 2026
  - Épouvantable Mer de Sable Ermenonville
  - Wild West Scream supplément
  - billet Citrouille billet Tribu Mer de Sable
sources:
  - title: La Mer de Sable - Épouvantable Mer de Sable 2026
    url: https://www.merdesable.fr/news-detail/actualite-epouvantable-mer-de-sable-1
  - title: La Mer de Sable - Spectacles Halloween et parcours Wild West Scream
    url: https://www.merdesable.fr/le-parc/nos-spectacles
  - title: La Mer de Sable - Attractions transformées pour Halloween
    url: https://www.merdesable.fr/le-parc/spectacles-attractions
  - title: La Mer de Sable - Billet Citrouille, Tribu et tarifs sur place
    url: https://www.merdesable.fr/tarifs-reservations
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets
  decision: Décider si l'Épouvantable Mer de Sable convient à la sensibilité des enfants, prévoir les spectacles et le parcours facultatif réellement adaptés, puis choisir le billet le plus économique selon la taille de la famille et la durée de visite.
  affiliationPotential: "Aucun billet partenaire précis et vérifié pour l'entrée Halloween à La Mer de Sable sur Tiqets ou GetYourGuide: ne pas en inventer et ne pas concurrencer l'achat officiel dans le corps. Hébergement possible pour une famille venant de loin: Domaine de La Charmille à Ermenonville, à environ 4,2 km du parc, avec chambres familiales selon Booking.com: https://www.booking.com/hotel/fr/la-charmille-ermenonville.fr.html ; vérifier la capacité, la disponibilité et le prix aux dates choisies."
  gsc:
    retrievedAt: 2026-10-18T05:46:43.422Z
    dataThrough: 2026-10-15
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « La Mer de Sable - Épouvantable Mer de Sable 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Créer une page événementielle sur l'Épouvantable Mer de Sable, édition 2026, à Ermenonville, du 3 octobre au 1er novembre. Elle doit aider à choisir le niveau de frisson et à organiser la journée, plutôt que refaire un guide permanent du parc.

## Pourquoi cette mission
Le programme officiel actuel décrit deux spectacles nouveaux et un parcours immersif payant que les parents doivent distinguer avant de venir. La saison est déjà ouverte et s'achève le 1er novembre. Le premier refresh GSC, « Carte Tattoo Isère », affiche 125 impressions lors de sa meilleure semaine contre 10 récemment, mais son signal de classement reste incertain et l'article décrit déjà montants, éligibilité et échéances sans lacune concrète vérifiée. L'expansion depuis la page forte « Halloween au Château de Chantilly » répéterait ses animations, âges, suppléments et billets déjà bien détaillés.

## Décision du lecteur
Choisir une visite sereine ou plus effrayante selon les enfants, intégrer les deux spectacles sans rater les horaires, distinguer l'activité à supplément, et payer le billet adapté au nombre de visiteurs et à l'heure d'arrivée.

## Faits à traiter
La Malédiction de West City: 13 h à West City, 20 minutes, cascades. La Dernière Chance: 17 h 15 au Corral, 20 minutes, acrobaties équestres et effets enflammés. Wild West Scream: parcours de 20 minutes à l'ancienne gare, créneaux 10 h 45-12 h 45 et 14 h 15-17 h 15, supplément de 2 € par personne payé uniquement par carte bancaire. Ne pas inventer d'âge minimum pour le parcours: présenter loyalement son intensité et les alternatives moins effrayantes. Attractions Halloween et personnages ambulants: niveaux « Chocottes » et « Maxi Frousse ». Vérifier calendrier d'ouverture et changements d'horaires. Billet Citrouille web dès 26 € enfant (90 cm-11 ans) et 28 € adulte (12 ans et plus), tarif soumis à date et disponibilité; billet Tribu à partir de cinq personnes, dès 26 € par personne pour 5 à 7 billets et 25 € pour 8 à 15; demi-journée aux caisses dès 14 h 30 à 20 €; entrée gratuite sous 90 cm; vérifier que le créneau réduit permet bien le spectacle de 17 h 15.

## Sources de départ
Quatre pages officielles du parc listées dans le frontmatter. Vérifier sur le site organisateur les éventuelles variations du programme et les restrictions d'attractions.

## Affiliation
Pas de billet d'entrée équivalent vérifié chez les partenaires; ne pas fabriquer d'offre. Une nuit à Ermenonville peut être pratique si le séjour combine le parc et d'autres visites de l'Oise: Domaine de La Charmille sur Booking.com, sans promettre de tarif, de capacité ou de disponibilité.

## Continuations internes
Le guide « Halloween au Château de Chantilly » concerne les activités propres à ce château, ne pas recopier sa programmation. Même distinction pour « Toussaint au Château de Pierrefonds ». L'article doit rester centré sur La Mer de Sable et ses spectacles, parcours, intensités et choix de billets.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/activites/musee-de-la-biere-a-stenay-en-famille-parcours-enfants-et-exposition-2026/ | Musée de la Bière à Stenay en famille: parcours enfants et exposition 2026 | activites | Stenay, Meuse, Grand Est
- /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | Arbora Lumina 2026-2027 à Harcourt en famille: billets, tarifs et parcours | evenements | Harcourt, Eure, Normandie
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie

### Historique Radar lié

- refresh | /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | 2026-10-16T13:36:28.294Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
