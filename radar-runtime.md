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
title: "Château de Fontainebleau depuis Paris en famille : train R, bus 3401 et budget"
subtitle: "Gare de Lyon, correspondance à Fontainebleau-Avon et titres 2026 : rejoindre le château sans voiture avec des enfants"
summary: "Comment rejoindre le château de Fontainebleau depuis Paris avec des enfants : train R, bus 3401, billets distincts, poussette et coût aller-retour."
category: voyages
location:
  city: Fontainebleau
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Paris Fontainebleau château train R bus 3401 enfants
  - Fontainebleau-Avon Gare de Lyon billet métro train RER
  - Fontainebleau château sans voiture poussette
sources:
  - title: Château de Fontainebleau - Accès, horaires et tarifs
    url: https://www.chateaudefontainebleau.fr/preparez-votre-visite/horaires-et-tarifs/
  - title: Île-de-France Mobilités - Tarifs 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités - Correspondances train et bus
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/titres-unitaires-tarifs-reduits/correspondances-tickets-metro-train-rer-et-bus-tram
  - title: Île-de-France Mobilités - Ligne 1 devenue 3401
    url: https://presse.iledefrance-mobilites.fr/ile-de-france-mobilites-lance-la-renumerotation-des-lignes-de-bus-du-territoire-de-fontainebleau-moret/?lang=fr
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget
  decision: Permettre à une famille de choisir ses titres, de prévoir le changement train-bus, le budget et le retour avant de décider de visiter Fontainebleau sans voiture.
  affiliationPotential: "Billet d'entrée simple du château vérifié sur Tiqets : https://www.tiqets.com/fr/activites-attractions-fontainebleau-c66966/billets-pour-chateau-de-fontainebleau-billet-coupe-file-p974548/ ; comparer avec l'entrée officielle et la gratuité des moins de 18 ans. Pour un week-end, Grand T3-Cœur de Fontainebleau-300 m du château, deux chambres et cuisine, jusqu'à quatre personnes, vérifié sur Booking.com : https://www.booking.com/hotel/fr/f3-coeur-de-fontainebleau.fr.html ; prix, dépôt de garantie et disponibilité à vérifier aux dates choisies."
  gsc:
    retrievedAt: 2026-10-31T02:28:22+01:00
    dataThrough: 2026-10-28
    signal: strong_page
    sourceUrl: /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/
    basis: "La page « Transports à Paris avec des enfants: quel titre choisir pour payer juste? » conserve 3127 impressions sur la semaine récente, avec une position moyenne de 8.693 et 143.4 % de son pic."
---

## Mission retenue
Expansion pratique du guide des transports parisiens : organiser le trajet Paris Gare de Lyon → Fontainebleau-Avon (train R) → arrêt Château (bus 3401), puis le retour, avec des enfants. Ce n'est pas un nouveau guide de visite du château.

## Pourquoi cette mission
La page forte « Transports à Paris avec des enfants » compte 3 127 impressions récentes dans le snapshot GSC du 28 octobre : cette excursion possède une décision de déplacement distincte et documentée. Le refresh Carte Avantage Adulte SNCF (signal incertain) est déjà clair et utile ; sa baisse d'impressions ne prouve pas une lacune. L'opportunité saisonnière « Noël 2026 au château de Fontainebleau » est confirmée pour décembre, mais moins urgente qu'une aide durable au trajet ; le contenu Marie-Antoinette déjà publié couvre les visites temporaires. Aucun article existant n'explique en détail le budget et la correspondance train-bus vers Fontainebleau.

## Décision du lecteur
Pouvoir calculer le coût d'un aller-retour, choisir entre tickets unitaires et forfait déjà détenu, anticiper le bus, les contraintes de poussette et l'heure du dernier retour sans se tromper de titre.

## Faits à traiter
- Gare de Lyon → Fontainebleau-Avon par train R, puis bus 3401 vers Les Lilas jusqu'à Château ; la ligne 1 a été renumérotée en 3401. Vérifier les horaires du jour et les travaux, sans promettre une fréquence fixe.
- En 2026 : ticket Métro-Train-RER 2,55 € plein tarif ou 1,30 € réduit ; ticket Bus-Tram 2,05 € ou 1,05 € réduit. Les tickets unitaires ne permettent pas la correspondance gratuite train-bus ; vérifier le cas Navigo Liberté+ ou forfait.
- Détailler un budget indicatif aller-retour pour deux adultes et deux enfants de 4 à 9 ans, avec deux trajets train et deux trajets bus par personne, hors visite. Confirmer les conditions du tarif réduit selon l'âge et les justificatifs.
- Poussette, accessibilité réelle de la gare, arrêt du bus et temps de marge au retour : ne pas déduire l'état des ascenseurs d'une simple mention d'accessibilité.
- Le château ferme le mardi ; d'octobre à mars, ouverture 9 h 30-17 h, dernier accès 16 h 15. L'entrée du circuit principal est gratuite pour les moins de 18 ans, contrairement aux activités guidées.

## Sources de départ
Château de Fontainebleau et Île-de-France Mobilités ci-dessus. Vérifier l'état du trafic et les horaires sur les outils officiels au moment de rédiger ; les pages partenaires ne prouvent aucun fait de transport.

## Affiliation
Le billet Tiqets couvre l'entrée simple, non les visites guidées : le proposer seulement si utile et en rappelant les gratuités. Pour une famille qui prolonge la sortie, une seule piste Booking.com vérifiée : Grand T3, deux chambres avec cuisine, sans prix ni disponibilité garantis.

## Continuations internes
- Le guide Fam Space des titres de transport à Paris prend le relais pour comparer Navigo et les formules générales ; ne pas refaire son contenu.
- L'article « Marie-Antoinette à Fontainebleau 2026-2027 » prend le relais pour l'exposition, les visites guidées et les services du château ; limiter ici ces informations au nécessaire pour organiser le trajet.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fete-saint-louis-fontainebleau-2026-famille/ | Fête de la Saint-Louis 2026 à Fontainebleau: une journée gratuite en famille au Grand Canal | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026 | voyages | Orly, Val-de-Marne, Île-de-France
- /articles/vie-pratique/se-deplacer-a-digne-les-bains-en-famille-bus-train-ou-voiture-de-location/ | Se déplacer à Digne-les-Bains en famille: bus, train ou voiture de location? | vie-pratique | Digne-les-Bains, Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/super-besse-en-famille-premiers-skis-et-activites-sans-ski-en-hiver-2026-2027/ | Super-Besse en famille: premiers skis et activités sans ski en hiver 2026-2027 | voyages | Besse-et-Saint-Anastaise, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/aubrac-lozerien-en-famille-deux-jours-entre-nasbinals-lacs-et-cascade-du-deroc/ | Aubrac lozérien en famille: deux jours entre Nasbinals, lacs et cascade du Déroc | voyages | Nasbinals, Lozère, Occitanie
- /articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/ | Îles de Lérins en famille: quelle île choisir et comment organiser la traversée ? | voyages | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | 2026-10-13T15:33:13.378Z
- opportunity | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-10-31T04:29:30.633Z
- opportunity | /articles/evenements/grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget/ | 2026-10-20T22:29:05.422Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
