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
title: "Festi'Mômes 2026 à Nantes: quelle séance choisir selon l'âge des enfants?"
subtitle: "Du 20 au 24 octobre au cinéma Bonne Garde: films, animations, horaires et prix"
summary: "Festi'Mômes à Nantes du 20 au 24 octobre 2026: repérez les séances pour les 3-6 ans, les 6-10 ans et les familles, les animations, tarifs et accès."
category: evenements
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
keywords:
  - Festi'Mômes Nantes 2026
  - cinéma Bonne Garde enfants octobre
  - Festi'mômes horaires tarifs 3 6 ans
sources:
  - title: Cinéma Bonne Garde - programmation et séances Festi'Mômes
    url: https://cinemalebonnegarde.com/FR/12/prochainement-cinema-bonne-garde.html
  - title: Nantes Métropole - Festi'mômes au cinéma Bonne Garde
    url: https://metropole.nantes.fr/que-faire-a-nantes/agenda/26961788_festimomes-2892031
  - title: Nantes Métropole - animations pour les vacances d'octobre 2026
    url: https://metropole.nantes.fr/actualites/des-animations-pour-enfants-et-ados-durant-les-vacances-d-octobre
  - title: Nantes Métropole - spectacles enfants, Les mots magiques
    url: https://metropole.nantes.fr/actualites/vacances-d-octobre-par-ici-les-spectacles-enfants
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants
  decision: Choisir une projection ou animation réellement adaptée à l'âge et à l'attention de l'enfant, connaître le jour, l'horaire, le prix et les conditions pour organiser la sortie entre le 20 et le 24 octobre.
  affiliationPotential: "Pas d'offre affiliée vérifiée pour les séances du cinéma associatif Bonne Garde: billetterie et programmation directement chez l'organisateur. Un hébergement nantais n'est utile que pour une famille déjà en séjour; ne pas ajouter de logement arbitraire ni de partenaire de billetterie généraliste."
  gsc:
    retrievedAt: 2026-10-17T09:26:43.000Z
    dataThrough: 2026-10-14
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Cinéma Bonne Garde - programmation et séances Festi'Mômes »; aucune page forte GSC n'est requise.
---

## Mission retenue

Préparer un guide pratique pour la **18e édition de Festi'Mômes**, festival jeune public du **20 au 24 octobre 2026** au **cinéma Bonne Garde, 20 rue Frère-Louis, 44200 Nantes**. Ce rendez-vous mêle films d'animation et séances adaptées aux plus jeunes, contes, goûters et spectacle. Il ne doit pas être confondu avec les Utopiales, autre festival nantais déjà couvert.

## Pourquoi cette mission

Le meilleur refresh du snapshot, **cantine des collégiens en Essonne** (181 impressions contre 25), reste en signal **uncertain**, avec zéro requête comparable: l'article consulté explique déjà correctement le calcul du tarif, le coupon, l'inscription distincte, les changements familiaux et le cas d'Antony. Le candidat **LAEP Nantes** (signal coverage_loss, 131 contre 27) a lui aussi un guide récent, détaillé par quartier, âge, accueil et horaires; les sources municipales consultées ne démontrent pas un changement suffisamment substantiel pour réécrire immédiatement. Du côté des pages fortes, **Quai des Bulles à Saint-Malo** dispose déjà d'un article sur tarifs, programme et visite familiale: une page satellite sur le même festival recouperait son intention sans nouvelle décision autonome. **Festi'Mômes** est une opportunité vérifiable, imminente, distincte, absente du catalogue Radar et utile avant les réservations.

## Décision du lecteur

Identifier la **séance la mieux adaptée à l'âge** et à la durée d'attention de l'enfant, puis choisir **le jour, le créneau et le tarif** sans confondre les films du matin, ceux de l'après-midi, les séances familiales et les événements supplémentaires.

## Faits à traiter

- Dates exactes: **mardi 20 au samedi 24 octobre 2026**; lieu **cinéma Bonne Garde**, Nantes Sud, **20 rue Frère-Louis**; festival ouvert à partir de **3 ans**.
- Organisation annoncée: séances pour les **3-6 ans le matin vers 10h30**, pour les **6-10 ans l'après-midi vers 14h30**, séances familiales souvent en fin de journée vers **18h**; ne jamais présenter ces horaires comme valables pour chaque film ni le samedi après clôture.
- Vérifier **film par film** le titre, l'âge conseillé, la durée et l'horaire réel sur le site du cinéma. Exemples annoncés dans la programmation: *Un amour d'épouvantail* (44 minutes), *Kayara, princesse inca* (1h21), et une séance **Petite Casbah** avec contes et goûter; ne pas présumer que toutes ces propositions conviennent aux mêmes âges.
- Le festival comprend aussi animations, lectures, **défilé de jeunes créateurs** et **Les mots magiques** le **24 octobre à 14h30**; vérifier pour chaque animation si elle est comprise dans la séance ou facturée séparément.
- Tarifs annoncés sur l'agenda de l'organisateur relayé par Nantes Métropole: **5 € la séance ordinaire, 4 € avec Carte blanche, 7 € les événements**; d'autres pages de la Ville affichent des fourchettes de **4 à 6 €** ou **6 à 7 €**. Vérifier le prix de la prestation choisie à la réservation, sans homogénéiser abusivement.
- Accès par les transports **tram 2/3 à Pirmil**, bus de secteur et vélos; vérifier les services pratiques et les particularités des séances jeunes enfants. Terminer les contenus temporels avec `eventEndsAt: 2026-10-24`.

## Sources de départ

- Agenda de programmation du cinéma Bonne Garde et fiches des films: https://cinemalebonnegarde.com/FR/12/prochainement-cinema-bonne-garde.html
- Fiche événement relayée par Nantes Métropole, dates, tarifs, âge, lieu et transport: https://metropole.nantes.fr/que-faire-a-nantes/agenda/26961788_festimomes-2892031
- Article municipal des animations d'octobre: https://metropole.nantes.fr/actualites/des-animations-pour-enfants-et-ados-durant-les-vacances-d-octobre
- Spectacle Les mots magiques: https://metropole.nantes.fr/actualites/vacances-d-octobre-par-ici-les-spectacles-enfants

## Affiliation

Aucun partenaire proposant des billets Festi'Mômes n'est vérifié. **Ne pas substituer** une billetterie de cinéma générique à cette programmation associative. Vérifier une éventuelle piste d'hébergement seulement si elle aide véritablement une famille venant séjourner plusieurs jours à Nantes, sans détourner le guide de son choix de séance.

## Continuations internes

- **Utopiales 2026 à Nantes** dispose déjà de son guide: ne pas reprendre ses tarifs ou sa programmation; lien interne possible uniquement pour une famille souhaitant comparer deux festivals de dates proches.
- Les informations du **tram et des tarifs Naolib** sont déjà traitées sur Fam Space dans l'article Nantes « tarification solidaire Naolib »; ne pas développer une procédure de tarification des transports.
- Pour le festival, se limiter aux options effectives **du 20 au 24 octobre**; éviter une liste généraliste des activités de Toussaint à Nantes, sans décision distincte.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
- refresh | /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | 2026-10-02T14:23:16.612Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
