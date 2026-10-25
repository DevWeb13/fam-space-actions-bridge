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
title: "Noël à Aix-en-Provence 2026 en famille : marchés, santons ou manèges ?"
subtitle: Dates et lieux pour choisir la bonne sortie avec les enfants, du 8 novembre au 3 janvier
summary: Un guide pour choisir entre chalets, santons, manèges et marché des 13 desserts selon la date, l'âge des enfants et le budget.
category: evenements
location:
  city: Aix-en-Provence
  department: Bouches-du-Rhône
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Noël Aix-en-Provence 2026 en famille
  - marché de Noël Aix-en-Provence 2026 horaires
  - foire aux santons Aix 2026
  - manèges Noël Aix 2026
  - marché des 13 desserts Aix 2026
sources:
  - title: Office de tourisme d'Aix-en-Provence — programme de Noël 2026
    url: https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/
  - title: Office de tourisme — foires et marchés de Noël 2026
    url: https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/foires-marches-noel-en-provence/
  - title: Office de tourisme — activités et spectacles de Noël pour les enfants
    url: https://www.aixenprovencetourism.com/aix-en-provence-fete-noel/activites-spectacles-noel-enfants/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges
  decision: Permettre à une famille de choisir sa date et son parcours dans Aix selon l'envie de manèges, de traditions provençales ou de gourmandises, en sachant ce qui est ouvert et ce qui coûte éventuellement.
  affiliationPotential: "Hébergement de week-end vérifié : Aparthotel Adagio Aix-en-Provence Centre, appartements équipés de 4 à 6 personnes, présent sur Booking.com ; pas de billet partenaire naturel pour les marchés gratuits."
  gsc:
    retrievedAt: 2026-10-25T02:31:31+02:00
    dataThrough: 2026-10-22
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Office de tourisme d'Aix-en-Provence — programme de Noël 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Guide local et saisonnier de Noël 2026 à Aix-en-Provence, centré sur les choix réels d'une famille : chalets, santons, manèges, marché des 13 desserts et animations gratuites.

## Pourquoi cette mission
L'ouverture des manèges le 8 novembre puis des marchés le 13 novembre est proche et le programme 2026 est déjà détaillé officiellement. Aucun doublon direct dans les 783 articles du catalogue (contrôle `probableDuplicates`). Le meilleur refresh examiné, « Petite section : peut-on alléger les après-midis ? », est conforme à l'article R131-1-1 et répond déjà aux démarches ; son recul GSC est incertain. L'expansion de la page forte « Transports à Paris » est moins prioritaire après le traitement récent de Navigo Liberté+ et des accès aux aéroports.

## Décision du lecteur
Choisir une journée adaptée aux enfants, sans confondre les périodes d'ouverture ni prévoir une animation absente ce jour-là.

## Faits à traiter
- Manèges : 8 novembre 2026–3 janvier 2027, places Jeanne-d'Arc et du Général-de-Gaulle et cours Mirabeau ; tarifs à vérifier, ne pas inventer.
- Chalets : 13 novembre–31 décembre, cours Mirabeau, entrée libre ; 10 h–20 h, jusqu'à 21 h 30 vendredi et samedi ; fermeture le 25 décembre.
- Foire aux Santons : 13 novembre–31 décembre, esplanade Cézanne, 10 h–19 h, fermée le 25 décembre.
- Marché des 13 desserts : 17–24 décembre, place François-Villon ; nocturnes les 18 et 19, fermeture à 14 h le 24.
- Illuminations dès le 28 novembre ; mapping place de l'Hôtel-de-Ville du 1er au 24 décembre, 18 h, 19 h et 20 h. Jeux en bois certains mercredis, samedis et dimanches de décembre.
- Distinguer entrée libre et activités payantes ; vérifier les horaires spéciaux des manèges, car la fiche officielle comporte une coquille « 25 décembre 2024 ».

## Sources de départ
Programme, marchés et animations enfants de l'Office de tourisme, indiqués dans les sources structurées ci-dessus.

## Affiliation
Pour une famille en séjour, vérifier l'offre Booking.com de l'Aparthotel Adagio Aix-en-Provence Centre (appartements familiaux et cuisine) ; ne pas présenter l'hébergement comme indispensable à une visite locale.

## Continuations internes
- Le Musée du Calisson à Aix possède déjà son guide : le lier pour une visite gourmande distincte, sans recopier son contenu.
- Le food tour d'Aix a déjà son comparatif : simple lien si le séjour inclut une activité gastronomique payante.
- La Foire aux santons de Marseille est un autre événement : éventuel lien comparatif, sans confondre les deux villes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/food-tour-a-aix-en-provence-avec-des-enfants-lequel-choisir-en-2026/ | Food tour à Aix-en-Provence avec des enfants: lequel choisir en 2026? | cuisine | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | Marché de Noël de Strasbourg 2026 en famille: quels marchés visiter avec des enfants? | evenements | Strasbourg, Bas-Rhin, Grand Est
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/musee-calisson-aix-visite-enfants-2026/ | Musée du Calisson à Aix-en-Provence: une enquête gourmande pour les enfants en 2026 | sorties | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | Marché de Noël d’Orléans 2026 en famille: horaires, lieux et manèges | evenements | Orléans, Loiret, Centre-Val de Loire
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/cuisine/dejeuner-aux-halles-de-troyes-avec-des-enfants-comment-ca-marche/ | Déjeuner aux Halles de Troyes avec des enfants: comment ça marche? | cuisine | Troyes, Aube, Grand Est
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/bons-plans/arles-en-famille-a-petit-budget-quelles-visites-et-quel-pass-choisir/ | Arles en famille à petit budget: quelles visites et quel pass choisir? | bons-plans | Arles, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | Mucem à la Toussaint 2026: le programme En Ribambelle avec des enfants | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | Cosquer Méditerranée avec des enfants: que peut-on visiter selon leur âge? | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/maison/dechets-tri-mobile-a-marseille-quoi-apporter-sans-aller-a-la-decheterie/ | Déchets’tri mobile à Marseille: quoi apporter sans aller à la déchèterie? | maison | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/escale-borely-avec-des-enfants-du-david-au-bowl-a-pied/ | Escale Borély avec des enfants: du David au Bowl à pied | sorties | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/activites/preau-des-accoules-a-marseille-faut-il-reserver-avant-de-venir-avec-des-enfants/ | Préau des Accoules à Marseille: faut-il réserver avant de venir avec des enfants? | activites | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/herofestival-marseille-2026-en-famille-billets-gratuite-enfants-et-conseils/ | HeroFestival Marseille 2026 en famille: billets, gratuité enfants et conseils | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | Thoiry Lumières Sauvages 2026-2027: dates, billets et visite en famille | evenements | Thoiry, Yvelines, Île-de-France
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/sorties/cosquer-mediterranee-avec-des-enfants-age-poussette-tarifs/ | 2026-10-03T11:22:17.769Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/marche-de-noel-de-strasbourg-2026-en-famille-quels-marches-choisir-et-quand-venir/ | 2026-10-19T06:36:34.978Z
- opportunity | /articles/evenements/mucem-a-la-toussaint-2026-quelle-activite-en-ribambelle-choisir-selon-l-age/ | 2026-10-04T10:54:39.216Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-a-orleans-2026-en-famille-marches-horaires-et-maneges-apres-noel/ | 2026-10-25T07:29:47.050Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- opportunity | /articles/evenements/thoiry-lumieres-sauvages-2026-2027-billet-soiree-ou-journee-en-famille/ | 2026-10-24T19:30:32.700Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
