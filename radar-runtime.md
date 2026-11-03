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
title: "Noël 2026 au château de Goulaine : le spectacle immersif vaut-il la sortie en famille ?"
subtitle: Dates, séances, accès et contraintes avec des enfants
summary: Aider les familles à décider si La Merveilleuse Histoire du Père Noël, parcours-spectacle intérieur d'environ une heure à Haute-Goulaine, convient à leur âge, leur mobilité et leur programme de novembre-décembre.
category: evenements
location:
  city: Haute-Goulaine
  department: Loire-Atlantique
  region: Pays de la Loire
keywords:
  - Merveilleuse Histoire du Père Noël Goulaine 2026
  - spectacle Noël château de Goulaine enfants
  - horaires billets Noël Haute-Goulaine
sources:
  - title: Spectacles Polaris - La Merveilleuse Histoire du Père Noël
    url: https://www.goulaine-spectacles.com/spectacle-1
  - title: Spectacles Polaris - Informations pratiques
    url: https://www.goulaine-spectacles.com/pratique
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille
  decision: Savoir si réserver ce spectacle d'une heure au château de Goulaine avec ses enfants, à quelle séance venir et comment organiser l'accès, notamment avec une poussette ou une personne à mobilité réduite.
  affiliationPotential: "Billetterie officielle du spectacle, sans offre partenaire identifiée ; hébergement Hôtel de la Louée à Haute-Goulaine sur Booking.com (chambre triple), disponibilité et composition familiale à vérifier : https://www.booking.com/hotel/fr/ha-tel-de-la-loua-c-e.fr.html"
  gsc:
    retrievedAt: 2026-11-03T01:32:28+01:00
    dataThrough: 2026-10-31
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Spectacles Polaris - La Merveilleuse Histoire du Père Noël »; aucune page forte GSC n'est requise.
---

## Mission retenue
La Merveilleuse Histoire du Père Noël, spectacle immersif intérieur au château de Goulaine, près de Nantes, annoncé du 14 novembre au 21 décembre 2026.

## Pourquoi cette mission
Opportunité saisonnière proche, distincte des 921 articles du catalogue : aucune page sur Goulaine. Le refresh Lumigny (1 318 puis 833 impressions) n'a pas de lacune éditoriale indépendante démontrée : son article explique déjà les billets, dates et conditions. Une expansion autour des pages fortes risquerait davantage de reprendre des intentions déjà traitées ; cette sortie répond à une décision nouvelle et concrète.

## Décision du lecteur
Déterminer si le parcours-spectacle convient à sa famille et choisir une séance compatible avec son déplacement et les contraintes des enfants.

## Faits à traiter
Le producteur annonce environ une heure en intérieur, une dizaine de scènes, des vendredis soir et des séances les samedis et dimanches ; les heures de séance exactes sont à relever dans la billetterie, sans confondre avec les larges horaires d'ouverture du site. Vérifier prix, âges, conditions de réservation et éventuelles dates supplémentaires. Poussettes non admises dans le spectacle (dépôt à l'accueil) ; spectacle annoncé non accessible aux PMR : le dire clairement. Parking et car Aléop 331 arrêt Allée du château ; horaires et retour à confirmer. Les pages officielles comportent des dates parfois discordantes (13/14 novembre, 20/21 décembre) : privilégier les dates réellement proposées à la réservation, sans inventer.

## Sources de départ
Site de l'organisateur et informations pratiques cités en frontmatter ; billetterie liée depuis ces pages.

## Affiliation
Pas de partenaire de billetterie vérifié. Pour un séjour, l'Hôtel de la Louée dispose d'une chambre triple sur Booking ; ne pas promettre une disponibilité ni l'adéquation à une famille de quatre.

## Continuations internes
Ne pas redévelopper les marchés de Noël de Nantes ni un guide général de séjour : renvoyer vers les pages Fam Space correspondantes si elles existent. Ne pas confondre ce spectacle avec l'ancien spectacle Jules Verne du même château.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/train-du-pere-noel-a-toucy-2026-horaires-tarifs-et-reservation/ | Train du Père Noël à Toucy 2026: horaires, tarifs et réservation | evenements | Toucy, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/chateau-de-chateaubriant-en-famille-une-sortie-a-petit-budget/ | Château de Châteaubriant en famille, une sortie à petit budget | bons-plans | Châteaubriant, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/bons-plans/pass-nantes-en-famille-en-2026-tarifs-visites-incluses-et-alternatives-gratuites/ | Pass Nantes en famille en 2026: tarifs, visites incluses et alternatives gratuites | bons-plans | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans ? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | Festival du livre jeunesse de Rouen 2026: dates, tarifs et activités en famille | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | Noël 2026 à Sélestat en famille: marchés, sapins et visites gratuites | evenements | Sélestat, Bas-Rhin, Grand Est

### Historique Radar lié

- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | 2026-11-02T00:36:18.455Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-11-02T06:34:10.210Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- opportunity | /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | 2026-11-01T15:30:15.363Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
