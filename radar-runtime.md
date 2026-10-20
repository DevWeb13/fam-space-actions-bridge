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
title: "Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, animations et budget"
subtitle: "Du 14 novembre au 3 janvier: offre enfant offert les premiers week-ends, parcours illuminé et suppléments à prévoir."
summary: "Grand Noël 2026-2027 au château de Vaux-le-Vicomte: dates, billets, offre enfant, animations incluses ou payantes, âges, horaires et accès en famille."
category: evenements
location:
  city: Maincy
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Grand Noël Vaux-le-Vicomte 2026 famille
  - Vaux-le-Vicomte Noël 2026 billet enfant offert
  - Grand Noël Maincy tarifs patinoire Odyssée Nordique
sources:
  - title: Château de Vaux-le-Vicomte - Grand Noël 2026, programmation, billetterie et FAQ
    url: https://vaux-le-vicomte.com/event/le-grand-noel-de-vaux-le-vicomte/
  - title: Château de Vaux-le-Vicomte - Informations pratiques et accès
    url: https://vaux-le-vicomte.com/preparer-sa-visite-au-chateau-de-vaux-le-vicomte/informations-pratiques/
  - title: Office de tourisme Melun Val de Seine - Le Grand Noël
    url: https://www.melunvaldeseine-tourisme.com/fete-et-manifestation/le-grand-noel-au-chateau-de-vaux-le-vicomte
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget
  decision: Choisir la date et le billet qui conviennent réellement à l'âge et au budget de la famille, profiter de l'offre enfant lorsqu'elle s'applique, distinguer les animations comprises des suppléments et organiser une visite incluant la projection du soir sans mauvaise surprise.
  affiliationPotential: "Action principale: entrée Grand Noël à réserver obligatoirement en ligne avec créneau, et promotion 2 billets adultes achetés = 1 enfant offert uniquement les 14, 15, 21 et 22 novembre 2026. Un billet château ordinaire existe chez Tiqets (https://www.tiqets.com/fr/activites-attractions-maincy-c180111/billets-pour-chateau-de-vaux-le-vicomte-billet-d-entree-p975832/) mais ne prouve pas l'accès au Grand Noël ni à sa promotion: ne pas le présenter comme équivalent ni faire concurrencer la billetterie spéciale par un billet inadapté. Hébergement pour week-end: ibis Styles Melun à Rubelles sur Booking.com (https://www.booking.com/hotel/fr/ibis-styles-melun.fr.html), suite familiale quatre couchages déjà identifiée, à recontrôler pour capacité, disponibilité, prix et accès au château; pas de disponibilité confirmée."
  gsc:
    retrievedAt: 2026-10-20T02:29:02.000Z
    dataThrough: 2026-10-17
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Vaux-le-Vicomte - Grand Noël 2026, programmation, billetterie et FAQ »; aucune page forte GSC n'est requise.
---

## Mission retenue

Traiter **Le Grand Noël 2026-2027 au château de Vaux-le-Vicomte**, à Maincy: visite du château décoré autour du voyage à travers le monde, jardin illuminé, animations de Noël et suppléments. Saison annoncée **du 14 novembre 2026 au 3 janvier 2027**, avec jours de fermeture particuliers.

## Pourquoi cette mission

Le snapshot GSC préparé du 20 octobre (données jusqu'au 17) signale pour les premiers refresh des pertes d'impressions **incertaines**, sans preuve de perte de classement: Quai des Bulles et Foire de la Barguillère concernent des événements déjà achevés; l'article evergreen Carte OKAY Savoie, examiné sur master, couvre déjà les décisions importantes après sa mise à jour d'octobre. En expansion, la page forte sur les transports parisiens a déjà des guides distincts sur Orly et CDG; la page saisonnière forte sur Halloween à Chantilly couvre déjà son programme précis, bientôt terminé. À l'inverse, le Grand Noël dispose maintenant d'un programme officiel complet et d'une promotion datée, utile à anticiper. Le catalogue et les proches doublons ne montrent **aucun article consacré au Grand Noël**. La page existante sur Vaux-le-Vicomte concerne uniquement **la Toussaint du 18 au 31 octobre** et ses visites lampe torche/Carnaval des Animaux: calendrier, tarifs, activités et décision sont différents. Publication travaille sur le ski à Aussois; Destination sur Vincennes et le Haut-Rhin: aucun chevauchement.

## Décision du lecteur

Permettre à une famille de choisir **le bon jour, la formule d'entrée et les éventuelles animations payantes**, avec un coût prévisible et un programme réalisable jusqu'à la projection nocturne.

## Faits à traiter

- **Promesse et durée:** décors du château, chasse au trésor « passeport du petit voyageur » dès 3 ans, veillée gourmande, bosquet des vœux, cartes postales solidaires et projection sur la façade inclus selon type de billet; château environ 1 h, sortie complète environ **4 h ou davantage**.
- **Horaires:** principalement **10h30-20h**; certaines journées et soirées prolongées **jusqu'à 21h**; **24 et 31 décembre 10h30-18h**; domaine fermé **25 décembre et 1er janvier**, ainsi que lundis/mardis hors vacances selon les périodes. Dernière entrée souvent 19h, réduite à 16h les 24 et 31. Confirmer les plages par date exacte et les projections (habituellement 18h, 18h30, 19h; 17h40 les 24 et 31).
- **Billets:** réservation en ligne obligatoire, créneau château à respecter. Selon le château: **adultes 25,90 € en semaine / dès 27,90 € week-ends et vacances**, enfants **3-17 ans 20,90 € / dès 22,90 €**, **moins de 3 ans gratuits**, jardin seul **19 € / dès 20 €** avec prestations distinctes. Le forfait famille classique hors événement ne doit pas être repris.
- **Promotion limitée:** les **14, 15, 21 et 22 novembre 2026**, **1 billet enfant offert pour 2 billets adultes achetés**, achat exclusivement en ligne. Vérifier les conditions affichées dans le panier (âge, catégorie de billet, quotas et éventuel non-cumul) sans promettre une réduction automatique.
- **Suppléments importants:** patinoire **5 € sur place**, enfants mineurs accompagnés; spectacle déambulatoire **« L'Odyssée Nordique » dès 6 ans**, 1 h debout, sur réservation séparée, tarifs annoncés **14,90 € / 10,90 €** selon l'âge. L'affichage « moins de 12 ans / à partir de 13 ans » laisse le cas de 12 ans ambigu: vérifier avant d'affirmer le prix à cet âge. Dôme et costumes également en supplément.
- **Contraintes familiales:** spectacle et château non accessibles aux fauteuils roulants à cause d'une trentaine de marches; jardin accessible. Vérifier poussettes, change, repas et besoins bébé sur les informations pratiques. Restaurants sur place; parking gratuit; navette du château sur réservation, contrôler horaires de retour après la projection. Vérifier que navettes et accès annoncés s'appliquent à la saison hivernale.

## Sources de départ

La **page officielle Grand Noël** de Vaux-le-Vicomte fait foi pour dates, créneaux, tarifs, contenus, suppléments, conditions de la promotion et FAQ. La **page pratique du château** complète le transport et l'accueil familial; l'**office de tourisme de Melun** confirme l'événement et les prestations comprises, sans remplacer les conditions de la billetterie.

## Affiliation

Billet Grand Noël: **aucune équivalence avec l'offre Tiqets ordinaire n'est établie**, donc ne pas promouvoir une mauvaise entrée ni dupliquer un lien d'achat officiel concurrent dans le corps de l'article. Vérifier à la rédaction si un partenaire vend bien le produit **Grand Noël 2026**, sans l'inventer. Pour les familles passant la nuit, réexaminer la **suite familiale ibis Styles Melun à Rubelles sur Booking.com**, mentionner explicitement que l'hôtel n'est pas sur le domaine et vérifier les dates, prix, lits et trajet.

## Continuations internes

- L'article [**Toussaint à Vaux-le-Vicomte**](/articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/) traite les visites d'octobre seulement: **ne pas recopier** ses explications ni réorienter inutilement un lecteur de Noël vers ce programme expiré.
- Si une proposition de séjour élargi est utile, envisager un lien discret vers [**Parrot World en famille**](/articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/), sans détailler ses billets ou ses horaires dans l'article Grand Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/cuisine/maison-de-la-salers-visite-degustation-et-budget-avec-des-enfants/ | Maison de la Salers: visite, dégustation et budget avec des enfants | cuisine | Saint-Bonnet-de-Salers, Cantal, Auvergne-Rhône-Alpes
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
