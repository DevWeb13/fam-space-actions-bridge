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
title: "Noël 2026 au château de Chantilly : spectacle équestre seul ou visite du domaine ?"
subtitle: "Le Noël oublié : séances, billets et budget pour une sortie avec enfants"
summary: Du 28 novembre 2026 au 3 janvier 2027, le spectacle équestre Le Noël oublié se joue aux Grandes Écuries de Chantilly. Comparez le billet spectacle et la formule château + spectacle, les horaires et le coût familial.
category: evenements
location:
  city: Chantilly
  department: Oise
  region: Hauts-de-France
keywords:
  - Noël château de Chantilly 2026
  - Le Noël oublié spectacle équestre
  - Chantilly billet spectacle Noël famille
sources:
  - title: Château de Chantilly — Noël au château 2026, formules et tarifs
    url: https://chateaudechantilly.fr/noel-au-chateau/
  - title: Château de Chantilly — Le Noël oublié, séances 2026-2027
    url: https://chateaudechantilly.fr/evenement/spectacle-de-noel-le-noel-oublie/
  - title: Château de Chantilly — accès en train et stationnement
    url: https://chateaudechantilly.fr/acces/
  - title: Château de Chantilly — FAQ enfants et poussettes
    url: https://chateaudechantilly.fr/foire-aux-questions/
  - title: Château de Chantilly — accueil des visiteurs en situation de handicap
    url: https://chateaudechantilly.fr/visiteurs-en-situation-de-handicap/
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine
  decision: Choisir entre le spectacle équestre seul et le billet combiné avec le château, calculer le budget réel selon l'âge des enfants et réserver une séance compatible avec le programme familial.
  affiliationPotential: "Aucune billetterie partenaire confirmée pour le spectacle Le Noël oublié : les billets Château de Chantilly sur Tiqets couvrent la visite ordinaire, pas ce spectacle, et ne doivent pas être présentés comme équivalents. Hébergement vérifié pour une famille prolongeant la sortie : Best Western Plus Hotel Du Parc Chantilly sur Booking.com, chambres familiales, https://www.booking.com/hotel/fr/du-parc-chantilly.fr.html ; prix et disponibilités aux dates du spectacle non vérifiés."
  gsc:
    retrievedAt: 2026-10-26T01:34:33+01:00
    dataThrough: 2026-10-23
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Chantilly — Noël au château 2026, formules et tarifs »; aucune page forte GSC n'est requise.
---

## Mission retenue
Le spectacle équestre de Noël « Le Noël oublié », au dôme des Grandes Écuries du château de Chantilly, du 28 novembre 2026 au 3 janvier 2027. Distinguer la saison décorée du château (annoncée dès le 15 novembre), le spectacle à date et heure fixes et la visite classique du domaine.

## Pourquoi cette mission
Le refresh GSC le mieux classé, Futuroween (score 215, signal uncertain), a déjà été écarté après contrôle éditorial : sa saison se termine le 1er novembre. Le candidat Halloween au château de Chantilly (coverage_loss, score 93) a été relu intégralement avec sa programmation officielle : choix par âge, séances, tarifs, poussettes et hébergement sont déjà traités, sans correction décisive confirmée avant la fin de l'événement. L'expansion depuis la page forte « Transports à Paris avec des enfants » (2 276 impressions récentes) répéterait les guides existants sur Orly, CDG, Navigo et les titres ; « Mini World Lyon » couvre déjà ses billets, la durée, les coulisses et les accès. À l'inverse, le spectacle de Noël possède un choix de billet distinct, un calendrier précis et plus de deux mois de pertinence. Contrôle probableDuplicates sur le catalogue compact : le résultat le plus proche est l'article Halloween à Chantilly, autre événement et autre période ; aucun article sur « Le Noël oublié » n'a été trouvé. Publication en cours sur le Parc floral de La Source à Orléans et destinations en cours Vincennes/Haut-Rhin : aucune collision.

## Décision du lecteur
Déterminer si la famille souhaite seulement une heure de spectacle et le musée vivant du Cheval, ou aussi le château et le parc le même jour ; sélectionner la séance de 14 h 30 ou, quand elle existe, celle de 16 h 30, puis réserver les billets correspondants sans payer une formule inadaptée.

## Faits à traiter
- Spectacle « Le Noël oublié » du 28/11/2026 au 03/01/2027, durée 1 h, au dôme des Grandes Écuries. Séances à 14 h 30 sur les dates listées par l'organisateur ; séances à 16 h 30 seulement certains jours. Reprendre le calendrier exact ou renvoyer au calendrier officiel ; ne jamais promettre deux séances tous les jours.
- Billet spectacle seul : 24 € plein tarif, 19 € réduit (3-25 ans), avec Grandes Écuries et musée vivant du Cheval. Billet 1 Jour + spectacle : 32 € plein tarif, 26 € réduit, avec château et parc. Exemple pour deux adultes de plus de 25 ans et deux enfants de 3 à 25 ans : 86 € spectacle seul contre 116 € combiné, soit 30 € d'écart, hors frais éventuels. Vérifier la situation des moins de 3 ans avant d'affirmer une gratuité.
- Billet famille ordinaire à 55 € (2 adultes et 2 ou 3 enfants de 7-17 ans) : ne pas le présenter comme incluant « Le Noël oublié ». Le billet 1 Jour classique est distinct des spectacles spéciaux.
- Le château annonce des décors de Noël dès le 15 novembre ; le coin gourmand saisonnier est annoncé du 20 décembre au 4 janvier. Distinguer ces dates de celles du spectacle.
- FAQ : poussettes admises dans les Grandes Écuries, pas de prêt ; vérifier les conditions dans la salle de spectacle. Accessibilité : 12 places réservées au dôme, réservation conseillée auprès du château, et tarifs réduits spécifiques aux personnes en situation de handicap et à un accompagnant.
- Depuis Paris-Gare du Nord, TER vers Chantilly-Gouvieux environ 25 min, RER D environ 45 min ; Navigo non valable jusqu'à Chantilly. Parking P1 payant, et possibilités de navette depuis la gare ; contrôler les horaires de retour.

## Sources de départ
Les cinq pages officielles du frontmatter, prioritaires pour les séances, les tarifs, l'accès et l'accessibilité. La fiche spectacle précise les jours de séance : ne pas utiliser les archives des spectacles de Noël 2024 ou 2025.

## Affiliation
La billetterie du spectacle est prioritaire pour le lecteur, mais aucune offre partenaire exacte n'est confirmée. Ne pas faire passer le billet classique Tiqets pour un billet du spectacle. Pour une famille passant la nuit sur place, proposer discrètement le Best Western Plus Hotel Du Parc Chantilly sur Booking.com, en précisant que le type de chambre, le prix et la disponibilité doivent être vérifiés pour les dates choisies.

## Continuations internes
- Destination Chantilly : https://www.fam-space.fr/destinations/hauts-de-france/oise/chantilly/ — prendre le relais pour le trajet, le Potager des Princes et l'organisation d'une journée ou d'un week-end, sans recopier tout ce guide.
- Atelier de crème Chantilly : https://www.fam-space.fr/articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ — uniquement comme activité gourmande distincte pour les familles avec enfants d'environ 8 ans ou plus ; ne pas confondre cet atelier du centre-ville avec les animations des Grandes Écuries.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/evenements/ain-croyable-noel-2026-a-bourg-en-bresse-en-famille-spectacle-arbre-de-noel-et-tarifs/ | Ain'Croyable Noël 2026 à Bourg-en-Bresse en famille: spectacle, arbre de Noël et tarifs | evenements | Bourg-en-Bresse, Ain, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/noel-au-chateau-de-valencay-ce-qu-il-faut-savoir-avant-d-y-aller/ | Noël au Château de Valençay: ce qu'il faut savoir avant d'y aller | evenements | Valençay, Indre, Centre-Val de Loire
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | Halloween 2026 au Zoo de La Flèche: tarifs, jeux et entrée offerte aux enfants déguisés | evenements | La Flèche, Sarthe, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/halloween-2026-au-zoo-de-la-fleche-entree-offerte-aux-enfants-deguises/ | 2026-10-25T20:27:07.814Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
