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
title: "Noël 2026 au 5e Lieu à Strasbourg : la visite Disney vaut-elle le détour avec des enfants ?"
subtitle: "Deux séances les 5 et 12 décembre, dès 10 ans : durée, tarif, réservation et accès"
summary: "Une visite guidée de 1 h 30 consacrée aux liens entre Strasbourg et l'imaginaire Disney : vérifier si elle convient à l'âge des enfants et réserver la bonne séance."
category: activites
location:
  city: Strasbourg
  department: Bas-Rhin
  region: Grand Est
keywords:
  - Magie de Noël Disney Strasbourg 2026
  - 5e Lieu visite Disney 5 décembre 2026
sources:
  - title: "5e Lieu - Magie de Noël : W. Disney à Strasbourg"
    url: https://5elieu.strasbourg.eu/agenda/magie-de-noel-w-disney-a-strasbourg/
  - title: Noël à Strasbourg - visite guidée Disney
    url: https://noel.strasbourg.eu/event/-/entity/id/602555328/magie-de-noel-w-disney-a-strasbourg
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-2026-au-5e-lieu-a-strasbourg-la-visite-disney-vaut-elle-le-detour-avec-des-enfants
  decision: Savoir si cette visite culturelle sur l'imaginaire Disney convient à un enfant d'au moins 10 ans, puis choisir et réserver l'une des deux séances sans la confondre avec une animation Disney ou le marché de Noël.
  affiliationPotential: "Billetterie officielle à 5 € : aucune offre partenaire de visite équivalente vérifiée. Hébergement à proximité du centre historique à rechercher sur Booking uniquement si une offre familiale précise est vérifiée."
  gsc:
    retrievedAt: 2026-11-03T01:32:28+01:00
    dataThrough: 2026-10-31
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « 5e Lieu - Magie de Noël : W. Disney à Strasbourg »; aucune page forte GSC n'est requise."
---

## Mission retenue
Présenter la visite guidée « Magie de Noël : W. Disney à Strasbourg » au 5e Lieu, et non un spectacle Disney ni une animation générale du marché de Noël.

## Pourquoi cette mission
Le refresh Lumigny montre une baisse d'impressions mais pas de défaut éditorial confirmé ; une expansion issue des pages fortes nécessiterait une décision distincte encore non établie. Ici, deux dates proches, une tranche d'âge et un prix officiels permettent une réponse immédiatement utile. Aucun doublon direct « Disney au 5e Lieu » dans le catalogue et l'historique Radar du runtime ; les pages générales sur Noël à Strasbourg doivent seulement être reliées.

## Décision du lecteur
Déterminer si la visite convient à son enfant et réserver la séance du 5 ou du 12 décembre 2026.

## Faits à traiter
Visite guidée de 10 h à 11 h 30 les samedis 5 et 12 décembre ; dès 10 ans ; 5 € ; rendez-vous à l'entrée du 5e Lieu, 5 place du Château. Réservation via la billetterie officielle ; vérifier les places restantes. Tram A/D Langstross Grand'Rue et accessibilité annoncée. Ne pas promettre de présence de personnages Disney.

## Sources de départ
Les deux fiches officielles de la Ville et du 5e Lieu citées ci-dessus.

## Affiliation
La visite principale relève de la billetterie officielle. Ne pas inventer d'offre partenaire ; vérifier seulement un hébergement familial précis au centre sur Booking si pertinent.

## Continuations internes
Renvoyer aux guides Noël/marchés de Strasbourg pour les autres festivités sans les réécrire. Distinguer cette visite patrimoniale des activités pour plus jeunes. Confirmer le lien de réservation avant rédaction.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/le-vaisseau-a-strasbourg-quel-billet-choisir-pour-une-sortie-avec-des-enfants/ | Le Vaisseau à Strasbourg: quel billet choisir pour une sortie avec des enfants | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/vie-pratique/parking-relais-a-strasbourg-en-famille-comment-choisir-son-p-r-et-son-forfait/ | Parking-relais à Strasbourg en famille: comment choisir son P+R et son forfait | vie-pratique | Strasbourg, Bas-Rhin, Grand Est
- /articles/bons-plans/pass-strasbourg-et-nord-alsace-en-famille-quand-est-il-vraiment-rentable/ | Pass Strasbourg et Nord Alsace en famille: quand est-il vraiment rentable? | bons-plans | Strasbourg, Bas-Rhin, Grand Est
- /articles/maison/renover-sa-maison-dans-l-eurometropole-de-strasbourg-aides-et-demarches-2026/ | Rénover sa maison dans l’Eurométropole de Strasbourg: aides et démarches 2026 | maison | Strasbourg, Bas-Rhin, Grand Est
- /articles/activites/arachnima-strasbourg-famille-2026/ | Arachnima 2026 à Strasbourg: dernier week-end gratuit au square Hasek | activites | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | Cirque de Noël d’Alsace 2026 à Eckbolsheim: dates, horaires et accès en famille | evenements | Eckbolsheim, Bas-Rhin, Grand Est
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | Noël 2026 à Sélestat en famille: marchés, sapins et visites gratuites | evenements | Sélestat, Bas-Rhin, Grand Est
- /articles/cuisine/maison-du-pain-a-selestat-decouvrir-la-boulangerie-en-famille/ | Maison du Pain à Sélestat: découvrir la boulangerie en famille | cuisine | Sélestat, Bas-Rhin, Grand Est
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/voyages/wissembourg-sans-voiture-avec-des-enfants-que-faire-a-pied-sur-une-journee/ | Wissembourg sans voiture avec des enfants: que faire à pied sur une journée? | voyages | Wissembourg, Bas-Rhin, Grand Est
- /articles/sorties/chateau-du-haut-koenigsbourg-en-famille-tarifs-2026-et-conseils-de-visite/ | Château du Haut-Koenigsbourg en famille: tarifs 2026 et conseils de visite | sorties | Orschwiller, Bas-Rhin, Grand Est
- /articles/activites/planetarium-de-belfort-en-famille-etoiles-meteorites-et-infos-pratiques/ | Planétarium de Belfort en famille: étoiles, météorites et infos pratiques | activites | Belfort, Territoire de Belfort, Bourgogne-Franche-Comté
- /articles/activites/confiserie-des-hautes-vosges-a-plainfaing-une-visite-gratuite-en-famille/ | Confiserie des Hautes Vosges à Plainfaing: une visite gratuite en famille | activites | Plainfaing, Vosges, Grand Est
- /articles/activites/forum-des-sciences-a-villeneuve-d-ascq-en-famille-que-choisir-selon-l-age/ | Forum des Sciences à Villeneuve-d'Ascq en famille: que choisir selon l'âge ? | activites | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/activites/kayak-transparent-a-trou-d-eau-decouvrir-le-lagon-en-famille/ | Kayak transparent à Trou d’Eau: découvrir le lagon en famille | activites | Saint-Paul, La Réunion, La Réunion
- /articles/activites/quatre-jeux-de-piste-gratuits-en-haute-saone-lequel-choisir-en-famille/ | Quatre jeux de piste gratuits en Haute-Saône: lequel choisir en famille ? | activites | Haute-Saône, Bourgogne-Franche-Comté
- /articles/activites/snowworld-amneville-en-famille-luge-bouees-ou-ski/ | SnowWorld Amnéville en famille: luge, bouées ou ski ? | activites | Amnéville, Moselle, Grand Est
- /articles/activites/visiter-le-nouveau-musee-m24-au-mans-en-famille-billets-parcours-et-circuit/ | Visiter le nouveau musée M24 au Mans en famille: billets, parcours et circuit | activites | Le Mans, Sarthe, Pays de la Loire
- /articles/activites/ateliers-a-musees-a-la-rochelle-en-decembre-2026-quelle-seance-choisir-en-famille/ | Ateliers A'musées à La Rochelle: tissage et mosaïque en décembre 2026 | activites | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/mac-val-en-famille-a-vitry-sur-seine-visites-ateliers-et-conseils-pratiques/ | MAC VAL en famille à Vitry-sur-Seine: visites, ateliers et conseils pratiques | activites | Vitry-sur-Seine, Val-de-Marne, Île-de-France

### Historique Radar lié

- opportunity | /articles/activites/ateliers-a-musees-a-la-rochelle-en-decembre-2026-quelle-seance-choisir-en-famille/ | 2026-10-31T00:36:57.118Z
- opportunity | /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | 2026-11-01T12:31:31.417Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | 2026-11-01T15:30:15.363Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
