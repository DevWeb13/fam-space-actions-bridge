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
title: "LAEP à Toulouse: où jouer gratuitement avec son enfant de moins de 6 ans?"
subtitle: Trois lieux d'accueil enfants-parents, leurs horaires et les conseils pour une première visite
summary: À Toulouse, les LAEP offrent aux tout-petits un espace de jeu et aux parents un lieu d'échange. Découvrez trois adresses gratuites et leurs horaires.
slug: laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-11-11T22:03:01+01:00
updatedAt: null
category: parentalite
readingTime: 3
location:
  city: Toulouse
  department: Haute-Garonne
  region: Occitanie
topic:
  key: parentalite|toulouse|laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Toulouse
    - lieux accueil enfants parents Toulouse
    - sortie gratuite bébé Toulouse
image:
  src: /images/articles/2026/11/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans.webp
  alt: Façade du Capitole à Toulouse, ville où plusieurs lieux d'accueil enfants-parents sont proposés
sources:
  - title: CAF - Lieu d'accueil enfants-parents
    url: https://www.caf.fr/allocataires/aides-et-demarches/thematique-libre/lieu-d-accueil-enfants-parents-laep
  - title: Toulouse Métropole - LAEP Borderouge, Trois Cocus
    url: https://metropole.toulouse.fr/annuaire/laep-borderouge-trois-cocus
  - title: Toulouse Métropole - LAEP Fourtanier
    url: https://metropole.toulouse.fr/annuaire/laep-fourtanier
  - title: Parents31 - LAEP Reynerie
    url: https://www.parents31.fr/detail-structure/lieu-daccueil-enfants-parents-laep-reynerie/
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(11)/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/index.md
  targetSha: 067d7d3481c0024fb4790813f76333a213148b85
  targetUrl: /articles/parentalite/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/
  decision: Choisir un LAEP gratuit à Toulouse selon son quartier et le jour disponible, sans déplacement inutile.
  affiliationPotential: Aucune affiliation naturelle pour ce service local gratuit de parentalité.
  gsc:
    retrievedAt: 2026-11-25T07:30:00+01:00
    dataThrough: 2026-11-23
    signal: uncertain
    basis: "Visibilité récente : 86 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-17
    peakEnd: 2026-11-19
    recentStart: 2026-11-21
    recentEnd: 2026-11-23
    peakImpressions: 86
    recentImpressions: 3
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - laep toulouse
      - laep
      - laep borderouge
      - laep fourtanier
      - espace enfant
---

## Mission retenue
Actualiser le guide des trois LAEP toulousains (Borderouge, Fourtanier, Reynerie) en corrigeant les créneaux de Borderouge et en facilitant le choix par jour.

## Pourquoi cette mission
Premier candidat rapidDrop du snapshot du jour. La cause de la baisse de visibilité reste indéterminée, mais une erreur indépendante est vérifiée : la fiche municipale indique désormais le mercredi matin ouvert et le vendredi fermé, à l'inverse de l'article.

## Décision du lecteur
Identifier un lieu accessible selon son quartier et sa disponibilité, comprendre qu'il faut rester avec son enfant et éviter une visite pendant une fermeture.

## Faits à traiter
- Borderouge : la mairie affiche lundi et mercredi 8h45-12h15, mardi 14h30-18h, jeudi 8h45-12h15 puis 14h-17h30, vendredi et week-end fermés. Corriger précisément les deux jours erronés.
- Fourtanier : la fiche municipale confirme les horaires actuels de l'article, notamment les deux créneaux du mercredi et le vendredi après-midi. Parents31 confirme Reynerie le samedi matin et ses fermetures pendant les vacances. Conserver ces données, les adresses, téléphones, accès et équipements vérifiés. Rendre le choix mercredi/vendredi/samedi immédiat sans répéter inutilement les horaires.
- Préserver gratuité, anonymat, présence de l'accompagnant, conseils de première visite et avertissement sur les fermetures. La page CAF nationale renvoie actuellement une maintenance : conserver la référence et revérifier si possible, sans inventer de nouvelles conditions.
- Conserver l'image et son crédit, le lien interne existant et les informations toujours utiles.

## Sources de départ
- https://metropole.toulouse.fr/annuaire/laep-borderouge-trois-cocus
- https://metropole.toulouse.fr/annuaire/laep-fourtanier
- https://www.parents31.fr/detail-structure/lieu-daccueil-enfants-parents-laep-reynerie/
- https://www.caf.fr/allocataires/aides-et-demarches/thematique-libre/lieu-d-accueil-enfants-parents-laep

## Affiliation
Aucune offre pertinente pour un accueil local gratuit ; ne pas ajouter d'hébergement ou de billetterie.

## Continuations internes
Conserver le renvoi vers /articles/parentalite/laep-enfants-parents-gratuit-sans-inscription/ pour le fonctionnement général des LAEP ; le guide local reste centré sur les adresses et créneaux de Toulouse.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(11)/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/index.md

---
title: "LAEP à Toulouse: où jouer gratuitement avec son enfant de moins de 6 ans?"
subtitle: Trois lieux d'accueil enfants-parents, leurs horaires et les conseils pour une première visite
summary: À Toulouse, les LAEP offrent aux tout-petits un espace de jeu et aux parents un lieu d'échange. Découvrez trois adresses gratuites et leurs horaires.
slug: laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-11-11T22:03:01+01:00
updatedAt: null
category: parentalite
readingTime: 3
location:
  city: Toulouse
  department: Haute-Garonne
  region: Occitanie
topic:
  key: parentalite|toulouse|laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Toulouse
    - lieux accueil enfants parents Toulouse
    - sortie gratuite bébé Toulouse
image:
  src: "/images/articles/2026/11/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans.webp"
  alt: "Façade du Capitole à Toulouse, ville où plusieurs lieux d'accueil enfants-parents sont proposés"
sources:
  - title: CAF - Lieu d'accueil enfants-parents
    url: https://www.caf.fr/allocataires/aides-et-demarches/thematique-libre/lieu-d-accueil-enfants-parents-laep
  - title: Toulouse Métropole - LAEP Borderouge, Trois Cocus
    url: https://metropole.toulouse.fr/annuaire/laep-borderouge-trois-cocus
  - title: Toulouse Métropole - LAEP Fourtanier
    url: https://metropole.toulouse.fr/annuaire/laep-fourtanier
  - title: Parents31 - LAEP Reynerie
    url: https://www.parents31.fr/detail-structure/lieu-daccueil-enfants-parents-laep-reynerie/
---
<!-- article-image-credit -->
*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Toulouse_Capitole_Ext%C3%A9rieure_Facade_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Toulouse, les lieux d'accueil enfants-parents (LAEP) proposent aux enfants de moins de six ans un espace pour jouer et rencontrer d'autres petits, tandis que leurs parents ou un adulte familier restent avec eux. Voici trois adresses gratuites, avec leurs horaires, pour choisir selon votre quartier et vos disponibilités.

## Que fait-on dans un LAEP?

L'enfant découvre des jeux à son rythme. Son accompagnant reste sur place et en garde la responsabilité: **ce n'est pas une crèche ni une halte-garderie** où l'on dépose son enfant. Des accueillants formés sont présents pour écouter et faciliter les échanges, sans imposer d'activité ni de discussion.

On peut venir pour rencontrer d'autres parents, rompre l'isolement ou simplement partager un moment avec son bébé. L'accueil est anonyme. La [CAF explique le fonctionnement des LAEP](https://www.caf.fr/allocataires/aides-et-demarches/thematique-libre/lieu-d-accueil-enfants-parents-laep): l'accès est libre et sans inscription, même si certains lieux peuvent demander une petite participation pour une cotisation ou un goûter. Les trois adresses ci-dessous annoncent la gratuité. Pour en savoir plus, consultez notre [guide pratique des lieux d'accueil enfants-parents](https://www.fam-space.fr/articles/parentalite/laep-enfants-parents-gratuit-sans-inscription/).

## Trois adresses à Toulouse selon votre quartier et vos horaires

### Borderouge / Trois Cocus: dans le nord de Toulouse

Au **5 rue du Colonel Paul Paillole, 31200 Toulouse**, ce LAEP accueille les enfants de 0 à 6 ans accompagnés d'un parent. Un local poussette est disponible.

**Horaires affichés:** lundi de 8h45 à 12h15, mardi de 14h30 à 18h, jeudi de 8h45 à 12h15 et de 14h à 17h30, vendredi de 14h à 17h30. **Fermé le mercredi et le week-end.**

Accès: métro B ou bus 41, arrêt Trois Cocus. Téléphone: **05 34 24 57 44**. Vérifiez les créneaux sur la [fiche municipale de Borderouge / Trois Cocus](https://metropole.toulouse.fr/annuaire/laep-borderouge-trois-cocus).

### Fourtanier: plusieurs créneaux en centre-ville

Le LAEP Fourtanier se trouve au **5 rue Fourtanier, 31000 Toulouse**. Il propose deux plages d'accueil le mercredi et dispose d'un local poussette.

**Horaires affichés:** mardi de 13h45 à 17h15, mercredi de 9h à 12h30 et de 14h à 17h30, jeudi de 14h30 à 18h, vendredi de 13h45 à 17h15. Fermé du samedi au lundi.

Accès: métro B, station François Verdier, ou bus 29, L1, L8 et L9, arrêt Saint-Georges. Téléphone: **07 61 01 66 02**. Consultez la [fiche municipale de Fourtanier](https://metropole.toulouse.fr/annuaire/laep-fourtanier) avant de partir.

### Reynerie: une possibilité le samedi matin

Au **23 rue Jean Gilles, 31100 Toulouse**, le LAEP Reynerie convient notamment aux familles indisponibles en semaine. L'accueil est gratuit, anonyme et sans inscription préalable.

**Horaires affichés:** lundi de 14h à 18h30, mardi de 8h45 à 12h et de 14h à 18h30, jeudi de 14h à 18h30 et **samedi de 9h à 12h**.

Le lieu annonce des fermetures entre Noël et le jour de l'An, quatre semaines en été et la deuxième semaine des vacances de Toussaint, d'hiver et de printemps. Téléphone: **07 71 21 93 74**. Vérifiez les créneaux sur la [fiche Reynerie de Parents31](https://www.parents31.fr/detail-structure/lieu-daccueil-enfants-parents-laep-reynerie/).

## Comment se passe une première visite?

Vous venez pendant une plage d'accueil avec votre enfant et restez auprès de lui. Il peut explorer les jeux ou prendre le temps d'observer. Vous n'avez pas à vous inscrire à une activité ni à expliquer votre situation familiale.

Avec un bébé, prévoyez ses affaires habituelles et renseignez-vous sur les possibilités de change et de repas: les équipements varient selon les lieux. Borderouge et Fourtanier disposent d'un local poussette, ce qui ne garantit pas l'accessibilité de tous les espaces.

**Avant de vous déplacer**, consultez la fiche du lieu ou appelez, notamment pendant les vacances scolaires: les horaires peuvent changer.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-dans-l-orne-ou-jouer-gratuitement-avec-son-tout-petit/ | LAEP dans l'Orne: où jouer gratuitement avec son tout-petit ? | parentalite | Orne, Normandie
- /articles/parentalite/laep-dans-le-tarn-ou-aller-avec-son-enfant/ | LAEP dans le Tarn: où aller avec son enfant ? | parentalite | Tarn, Occitanie
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/parentalite/laep-dans-la-manche-ou-aller-avec-son-enfant-de-moins-de-6-ans/ | LAEP dans la Manche: où aller avec son enfant de moins de 6 ans ? | parentalite | Manche, Normandie
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans ? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-en-martinique-jouer-avec-son-tout-petit-et-rencontrer-d-autres-parents/ | LAEP en Martinique: jouer avec son tout-petit et rencontrer d’autres parents | parentalite | Martinique
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-bas-rhin-ou-aller-avec-un-tout-petit/ | Lieux d'accueil enfants-parents dans le Bas-Rhin: où aller avec un tout-petit? | parentalite | Bas-Rhin, Grand Est
- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-toulouse-ou-jouer-gratuitement-avec-son-enfant-de-moins-de-6-ans/ | LAEP à Toulouse: où jouer gratuitement avec son enfant de moins de 6 ans? | parentalite | Toulouse, Haute-Garonne, Occitanie
- /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | Ateliers de cuisine parent-enfant à Toulouse: chocolat, pâtisserie ou menu complet ? | cuisine | Toulouse, Haute-Garonne, Occitanie
- /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | Noël à Toulouse 2026 en famille: marchés, Père Noël et patinoire | evenements | Toulouse, Haute-Garonne, Occitanie
- /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | Déchets verts à Toulouse Métropole en 2027: collecte, broyage et évacuation des gros volumes | maison | Toulouse, Haute-Garonne, Occitanie
- /articles/vie-pratique/aide-a-la-cantine-en-haute-garonne-2026-2027-montant-conditions-et-dates/ | Aide à la cantine en Haute-Garonne 2026-2027: montant, conditions et dates | vie-pratique | Toulouse, Haute-Garonne, Occitanie
- /articles/activites/accrocamp-toulouse-avec-des-enfants-quel-pass-choisir-selon-leur-taille/ | AccroCamp Toulouse avec des enfants: quel pass choisir selon leur taille? | activites | Toulouse, Haute-Garonne, Occitanie
- /articles/sorties/aeroscopia-en-famille-quels-avions-visiter-avec-les-enfants/ | Aeroscopia en famille: quels avions visiter avec les enfants? | sorties | Blagnac, Haute-Garonne, Occitanie
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/parentalite/parents-et-jeunes-enfants-a-bergerac-trois-lieux-pour-jouer-et-echanger/ | Parents et jeunes enfants à Bergerac: trois lieux pour jouer et échanger | parentalite | Bergerac, Dordogne, Nouvelle-Aquitaine
- /articles/parentalite/lieux-d-accueil-enfants-parents-en-vendee-ou-aller-avec-un-tout-petit/ | Lieux d'accueil enfants-parents en Vendée: où aller avec un tout-petit ? | parentalite | Vendée, Pays de la Loire
- /articles/parentalite/parents-d-ados-dans-l-yonne-contacter-la-maison-des-adolescents/ | Parents d’ados dans l’Yonne: contacter la Maison des adolescents | parentalite | Yonne, Bourgogne-Franche-Comté
- /articles/parentalite/ardeche-ou-trouver-un-lieu-d-accueil-enfants-parents-pres-de-chez-soi/ | Ardèche: où trouver un lieu d'accueil enfants-parents près de chez soi ? | parentalite | Ardèche, Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/cuisine/ateliers-de-cuisine-parent-enfant-a-toulouse-chocolat-patisserie-ou-menu-complet/ | 2026-11-11T05:36:32.395Z
- refresh | /articles/maison/dechets-verts-a-toulouse-metropole-en-2027-collecte-broyage-et-compostage/ | 2026-11-08T04:30:49.530Z
- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-11-02T06:34:10.210Z
- refresh | /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | 2026-11-09T04:33:48.646Z
- opportunity | /articles/evenements/noel-a-toulouse-2026-quel-marche-choisir-avec-les-enfants-et-combien-coute-la-patinoire/ | 2026-10-24T23:34:36.270Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
