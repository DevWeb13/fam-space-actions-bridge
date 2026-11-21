# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
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

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël"
subtitle: Les lieux annoncés, ce qui reste à confirmer et les repères utiles avec des enfants.
summary: "Soleils d'hiver débute le 25 novembre 2026 à Angers. Marché artisanal, village Santa Claus et maison du Père Noël: les activités annoncées, les lieux connus et les horaires ou tarifs encore attendus."
category: evenements
location:
  city: Angers
  department: Maine-et-Loire
  region: Pays de la Loire
image:
  src: /images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus.webp
  alt: Chalets du marché de Noël d'une édition antérieure, place du Ralliement à Angers
sources:
  - title: Ville d'Angers - Soleils d'hiver 2026, présentation et date de lancement
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/index.html
  - title: Ville d'Angers - Ambassadeurs Soleils d'hiver 2026, lieux prévus
    url: https://recrutement.angers.fr/emplois/postes-temporaires-fr/1947-ambassadeurs-soleils-dhiver-fr/
  - title: Irigo - Ligne C du tramway, arrêts du centre-ville
    url: https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c
reviewAt: 2026-11-20
topic:
  key: evenements|angers|soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus|2026
  keywords:
    - Soleils d'hiver Angers 2026
    - marché de Noël Angers en famille
    - village Santa Claus Angers
    - maison du Père Noël place Sainte-Croix
slug: soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus
status: published
publishedAt: 2026-10-30T12:36:12.248Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Angers
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/index.md
  targetSha: af409f06637a170e46771255a97257ec6c2c2be5
  targetUrl: /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/
  decision: Choisir la bonne date et le bon lieu pour le marché, les manèges ou la rencontre avec le Père Noël, en connaissant les horaires et les dépenses à prévoir.
  affiliationPotential: Conserver l'hébergement familial à Angers déjà proposé; aucune billetterie partenaire vérifiée pour les animations municipales.
  gsc:
    retrievedAt: 2026-11-21T15:27:19+01:00
    dataThrough: 2026-11-19
    signal: needs_query_check
    basis: "Visibilité récente : 99 impressions sur trois jours, puis 21 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 99
    recentImpressions: 21
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Soleils d'hiver Angers 2026
      - marché de Noël Angers en famille
      - village Santa Claus Angers
      - maison du Père Noël place Sainte-Croix
---

## Mission retenue
Actualiser le guide familial de Soleils d'hiver 2026 à Angers, avant l'ouverture du 25 novembre.

## Pourquoi cette mission
L'article du 30 octobre indique que le programme, les horaires et les dates de fin restent inconnus. Or la Ville a publié son programme le 16 novembre et détaille désormais les lieux, horaires et activités. C'est une lacune vérifiée, indépendante de la baisse GSC dont la cause reste inconnue.

## Décision du lecteur
Choisir entre une promenade au marché, les manèges et la rencontre avec le Père Noël, puis organiser sa venue au bon moment sans confondre les dates de fin.

## Faits à traiter
- Marché: place du Ralliement, rue Lenepveu, place du Pilori; du 25 novembre au 30 décembre, 11 h-20 h, vendredi jusqu'à 22 h, samedi jusqu'à 23 h; horaires particuliers les 24 et 25 décembre.
- Village de Santa Claus au jardin du Mail et manèges jusqu'au 3 janvier 2027; Grande Roue et Sapin magique au Mail, Pomme place Lorraine, Carrousel 1900 place du Ralliement. Manèges payants; ne pas inventer de prix.
- Père Noël place Sainte-Croix du 29 novembre au 24 décembre, mercredi/samedi/dimanche 15 h-19 h, le 24 décembre 13 h-17 h; arrivée gratuite le 28 novembre au jardin du Mail 15 h-15 h 45.
- Illuminations du 25 novembre au 3 janvier, 17 h 30-23 h. Distinguer les horaires des illuminations de ceux des chalets.
- Conserver les conseils poussette, tramway, précautions pour bébés, les trois crédits photographiques et le conseil d'hébergement Booking.com. Supprimer les mentions devenues fausses de programme « à venir » sans effacer les réserves toujours justifiées sur les services non confirmés.

## Sources de départ
- Ville d'Angers, programme officiel: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/le-programme-de-soleils-d-hiver/index.html
- Ville d'Angers, marchés et horaires: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/les-marches-de-noel/index.html
- Ville d'Angers, manèges: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/les-maneges/index.html
- Ville d'Angers, Père Noël: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/rencontrez-le-pere-noel/index.html
- Dossier de presse municipal du 16 novembre: https://presse.angers.fr/dossier/angers-fete-noel-soleils-dhiver-2026

## Affiliation
Conserver le Novotel Angers Centre Gare sur Booking.com pour les familles en week-end; ne pas présenter les manèges municipaux comme réservables chez un partenaire.

## Continuations internes
- Conserver le lien vers Noël à Fontevraud 2026 pour une autre sortie dans le département.
- Ne pas créer d'article distinct sur le village de Santa Claus: l'intégrer à ce guide.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/index.md

---
title: "Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël"
subtitle: Les lieux annoncés, ce qui reste à confirmer et les repères utiles avec des enfants.
summary: "Soleils d'hiver débute le 25 novembre 2026 à Angers. Marché artisanal, village Santa Claus et maison du Père Noël: les activités annoncées, les lieux connus et les horaires ou tarifs encore attendus."
category: evenements
location:
  city: Angers
  department: Maine-et-Loire
  region: Pays de la Loire
image:
  src: "/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus.webp"
  alt: "Chalets du marché de Noël d'une édition antérieure, place du Ralliement à Angers"
sources:
  - title: Ville d'Angers - Soleils d'hiver 2026, présentation et date de lancement
    url: https://www.angers.fr/vivre-a-angers/culture/arts-de-la-rue-arts-du-cirque/soleils-d-hiver/index.html
  - title: Ville d'Angers - Ambassadeurs Soleils d'hiver 2026, lieux prévus
    url: https://recrutement.angers.fr/emplois/postes-temporaires-fr/1947-ambassadeurs-soleils-dhiver-fr/
  - title: Irigo - Ligne C du tramway, arrêts du centre-ville
    url: https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c
reviewAt: 2026-11-20
topic:
  key: evenements|angers|soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus|2026
  keywords:
    - Soleils d'hiver Angers 2026
    - marché de Noël Angers en famille
    - village Santa Claus Angers
    - maison du Père Noël place Sainte-Croix
slug: soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus
status: published
publishedAt: 2026-10-30T12:36:12.248Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Angers
---
<!-- article-image-credit -->
*Photo: [Géraldine Pasquier](https://commons.wikimedia.org/wiki/File:March%C3%A9_de_No%C3%ABl_d%27Angers_2015.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

**Soleils d'hiver commence à Angers le mercredi 25 novembre 2026.** Le rendez-vous réunit un marché de Noël, un village avec des manèges, des rencontres avec le Père Noël et Madame Noël, des ateliers et des animations de rue. Selon l'âge des enfants, ces activités ne demandent pas la même organisation.

Au **30 octobre 2026**, la Ville annonce encore son programme détaillé « à venir ». La date de lancement est confirmée, mais **les horaires des animations, leurs tarifs éventuels et leurs dates de fin ne sont pas encore publiés**.

## Marché, manèges ou rencontre avec le Père Noël ?

<!-- article-image-body:01 -->

![Maison d'Adam au bord de la place Sainte-Croix à Angers, photographiée hors période de Noël](/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus-body-01.webp)

*Photo: [Nataloche](https://commons.wikimedia.org/wiki/File:Angers_place_Sainte-Croix-2015d.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

**Pour les chalets et les cadeaux**, le marché de Noël rassemble en centre-ville une centaine de producteurs régionaux et d'artisans locaux, ainsi que des stands gourmands. Une promenade parmi les chalets permet de découvrir l'événement sans dépendre d'un créneau d'animation.

**Pour les manèges**, la Ville annonce le **Village de Santa Claus**, avec ses attractions et ses chalets. Le plan précis des installations, les limites d'âge ou de taille et les prix des tours restent à confirmer: les informations des éditions précédentes ne doivent pas servir à établir le budget 2026.

**Pour voir le Père Noël**, la **place Sainte-Croix** est le repère le plus concret: une annonce de recrutement de la Ville, datée du 9 octobre 2026, y prévoit l'installation de sa maison et la gestion d'une file d'attente. Les horaires de travail annoncés pour les agents ne constituent **pas** des horaires d'accueil du public. Les rencontres avec Madame Noël et les ateliers des lutins sont également annoncés, sans créneaux détaillés pour l'instant.

## Dates, réservations et budget

Si vous venez spécialement pour un atelier ou une rencontre, attendez les jours et heures du programme 2026 avant de fixer votre sortie. Pour les illuminations, privilégiez une visite après la tombée de la nuit en tenant compte de l'heure de retour des enfants.

La page municipale ne mentionne actuellement **aucun billet d'entrée général**, mais cela ne garantit pas la gratuité des manèges ou des ateliers. Aucune réservation spécifique n'est confirmée non plus. Prévoyez séparément le budget des attractions, des consommations et des achats aux chalets, puis vérifiez les conditions publiées avant le départ.

## Tramway, poussette et besoins des bébés

<!-- article-image-body:02 -->

![Tramway de la ligne C rue de la Roë à Angers, à proximité de la place du Ralliement](/images/articles/2026/10/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus-body-02.webp)

*Photo: [Dacia 1410 Sport](https://commons.wikimedia.org/wiki/File:Perdu_le_fil.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La [ligne C du tramway Irigo](https://www.irigo.fr/se-deplacer/lignes-et-horaires/ligne-tram-c) dessert **Ralliement** et **Foch-Maison Bleue**, deux arrêts pratiques pour rejoindre le centre d'Angers. Consultez les horaires et les perturbations pour votre date, notamment si vous repartez en soirée.

Avec une poussette, la circulation entre les différents lieux peut être moins aisée lors des périodes d'affluence. **Micro-ondes, tables à langer et espaces abrités sur les sites de Noël ne sont pas confirmés**: prévoyez le nécessaire pour les repas et le change de bébé.

La Ville prévoit aussi un **espace de repos cognitif à l'Hôtel Godeline, rue Plantagenet**, selon son annonce de recrutement. Ses modalités d'accès au public ne sont pas encore précisées; ne comptez pas sur cet espace sans confirmation de l'organisateur.

## Passer un week-end à Angers

Près de la gare, le [Novotel Angers Centre Gare](https://www.booking.com/hotel/fr/novotel-angers-centre-gare.fr.html) propose des chambres familiales et des lits bébé sur demande, sous réserve de disponibilité. Vérifiez la capacité de la chambre selon l'âge de chaque enfant, le tarif et les dates proposées avant de réserver.

Pour prolonger les sorties de Noël dans le Maine-et-Loire, notre guide [Noël à Fontevraud 2026 en famille](/articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/) détaille d'autres animations, avec leurs propres dates et conditions.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/composteur-gratuit-a-angers-loire-metropole-qui-peut-le-demander/ | Composteur gratuit à Angers Loire Métropole: qui peut le demander? | maison | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/garde-d-enfants-sur-horaires-atypiques-a-angers-qui-peut-demander-l-aide-du-ccas/ | Garde d'enfants sur horaires atypiques à Angers: qui peut demander l'aide du CCAS? | vie-pratique | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/sorties/chasse-tresor-galerie-david-angers-2026/ | Chasse au trésor à Angers: les 4 à 6 ans enquêtent à la Galerie David | sorties | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | Marché de Noël d'Avignon 2026 en famille: horaires, Père Noël et animations | evenements | Avignon, Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | Soleils d'hiver 2026 à Angers en famille: marché, manèges et Père Noël | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/laep-en-maine-et-loire-ou-aller-avec-son-bebe-et-comment-se-passe-l-accueil/ | LAEP en Maine-et-Loire: où aller avec son bébé et comment se passe l'accueil ? | parentalite | Maine-et-Loire, Pays de la Loire
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | Où manger des fouées en famille autour de Saumur ? | cuisine | Saumur, Maine-et-Loire, Pays de la Loire
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- refresh | /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | 2026-11-10T03:33:47.847Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-10-28T15:29:23.387Z
- refresh | /articles/evenements/marche-de-noel-d-avignon-2026-en-famille-dates-horaires-et-acces/ | 2026-11-17T22:37:09.520Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z
- refresh | /articles/cuisine/ou-manger-des-fouees-en-famille-autour-de-saumur/ | 2026-11-18T20:33:05.376Z
- opportunity | /articles/evenements/soleils-d-hiver-2026-a-angers-en-famille-marche-de-noel-ou-village-santa-claus/ | 2026-10-30T12:36:12.349Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
