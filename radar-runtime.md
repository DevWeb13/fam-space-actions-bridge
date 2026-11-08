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

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "LAEP à Rennes: où jouer gratuitement avec son enfant?"
subtitle: Cinq accueils dans la ville et trois autour de Rennes, avec les jours, les âges et les conditions à connaître
summary: Les lieux d'accueil enfants-parents à Rennes proposent des jeux et des échanges gratuits avec un adulte présent. Adresses, horaires et conseils avant de venir.
slug: laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant
status: published
publishedAt: 2026-10-20T16:09:21+02:00
updatedAt: null
category: parentalite
readingTime: 4
location:
  city: Rennes
  department: Ille-et-Vilaine
  region: Bretagne
topic:
  key: parentalite|rennes|laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant|2026
  keywords:
    - LAEP Rennes
    - lieu accueil enfants parents Rennes
    - sorties gratuites tout-petits Rennes
image:
  src: /images/articles/2026/10/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant.webp
  alt: Place de la Mairie à Rennes photographiée en juin 2023; vue de la ville, et non d'un lieu d'accueil enfants-parents.
sources:
  - title: Caf d'Ille-et-Vilaine - Je découvre les lieux d'accueil enfants parents
    url: https://www.caf.fr/allocataires/caf-d-ille-et-vilaine/offre-de-service/vie-personnelle/je-decouvre-les-lieux-d-accueil-enfants-parents-laep
  - title: Maison de quartier La Bellangerais - Lieu d'Accueil Enfant-Parent
    url: https://openagenda.com/fr/mqlabellangerais/events/36221480_lieu-daccueil-enfant-parent-3431948
  - title: Département d'Ille-et-Vilaine - Les Jeudis Câlins, maison du Ronceray
    url: https://annuaire.ille-et-vilaine.fr/organisme/1792-laep-jeudis-calins-maison-du-ronceray-de-rennes
  - title: Département d'Ille-et-Vilaine - L'Arbre aux Ouistitis, Maurepas
    url: https://annuaire.ille-et-vilaine.fr/organisme/1791-laep-centre-social-maurepas-larbre-aux-ouistitis
  - title: Département d'Ille-et-Vilaine - L'Île aux Marmots, Cleunay
    url: https://annuaire.ille-et-vilaine.fr/organisme/1794-laep-lile-aux-marmots-centre-social-cleunay-rennes
  - title: Département d'Ille-et-Vilaine - Espace Kangourou, Champs Manceaux
    url: https://annuaire.ille-et-vilaine.fr/organisme/4283-lieu-daccueil-enfants-parents-laep-espace-kangourou-centre-social-des-champs-manceaux-rennes
  - title: ARCS - Espace Kangourou, lieu d'accueil enfants-parents
    url: https://centres-sociaux-rennais.org/evenement/espace-kangourou-lieu-daccueil-enfants-parents/
  - title: CIAS à l'Ouest de Rennes - L'Escale
    url: https://www.cias-ouest-rennes.fr/pole-petite-enfance/laep/
  - title: ARCS - Ateliers de motricité
    url: https://centres-sociaux-rennais.org/activite-et-accompag/motricite/
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(10)/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/index.md
  targetSha: 622f93ea5b78d9324f754ce7ae009bd9b4f7af89
  targetUrl: /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/
  decision: Choisir un LAEP réellement accessible selon le jour, l'âge de l'enfant, le quartier et les conditions de vacances, sans se déplacer pour un créneau périmé.
  affiliationPotential: "Aucune affiliation naturelle : service gratuit de proximité sans logique d'hébergement."
  gsc:
    retrievedAt: 2026-11-08T02:28:56+01:00
    dataThrough: 2026-11-05
    signal: needs_query_check
    basis: "Visibilité récente : 38 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-21
    peakEnd: 2026-10-23
    recentStart: 2026-11-03
    recentEnd: 2026-11-05
    peakImpressions: 38
    recentImpressions: 4
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - LAEP Rennes
      - lieu accueil enfants parents Rennes
      - sorties gratuites tout-petits Rennes
---

## Mission retenue
Actualiser le guide des huit lieux d'accueil enfants-parents à Rennes et dans l'ouest rennais.

## Pourquoi cette mission
Signal GSC de baisse rapide (38 à 4 impressions sur deux fenêtres de trois jours), sans preuve de cause SEO. Lacune indépendante : le guide limite l'agenda de La Bellangerais à octobre 2026, alors que son organisateur publie une récurrence hebdomadaire jusqu'en 2035. Les modalités de plusieurs autres lieux reposent sur des fiches anciennes et doivent rester présentées avec prudence.

## Décision du lecteur
Identifier le lieu adapté à l'âge et au jour souhaité, puis vérifier les vacances et les conditions d'accueil avant le déplacement.

## Faits à traiter
- La Bellangerais : l'agenda officiel affiche les mardis de 9 h à 12 h, accès gratuit sans inscription, de 0 à 6 ans, avec récurrence annoncée jusqu'au 16 janvier 2035 ; ne pas confondre récurrence technique et garantie d'ouverture chaque semaine.
- Champs Manceaux : l'ARCS indique un accès au sous-sol (ascenseur niveau -1 dans sa fiche 2024), utile aux poussettes ; contrôler l'actualité de cette information avant ajout.
- Conserver les cinq lieux rennais et les trois accueils L'Escale, leurs adresses, jours, limites d'âge, conditions de vacances, contacts, avertissements sur les fiches anciennes, lien transports, image et crédits. Ne pas inventer de créneaux 2026-2027 pour les autres structures.

## Sources de départ
- Maison de quartier La Bellangerais : https://openagenda.com/fr/mqlabellangerais/events/36221480_lieu-daccueil-enfant-parent-3431948
- ARCS Champs Manceaux : https://centres-sociaux-rennais.org/evenement/espace-kangourou/
- Caf d'Ille-et-Vilaine : https://www.caf.fr/allocataires/caf-d-ille-et-vilaine/offre-de-service/vie-personnelle/je-decouvre-les-lieux-d-accueil-enfants-parents-laep
- CIAS à l'Ouest de Rennes : https://www.cias-ouest-rennes.fr/pole-petite-enfance/laep/

## Affiliation
Aucune offre naturelle.

## Continuations internes
- Garder le guide STAR existant pour les trajets.
- Éviter de confondre les ateliers de motricité sur inscription avec les LAEP libres.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(10)/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/index.md

---
title: "LAEP à Rennes: où jouer gratuitement avec son enfant?"
subtitle: Cinq accueils dans la ville et trois autour de Rennes, avec les jours, les âges et les conditions à connaître
summary: Les lieux d'accueil enfants-parents à Rennes proposent des jeux et des échanges gratuits avec un adulte présent. Adresses, horaires et conseils avant de venir.
slug: laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant
status: published
publishedAt: 2026-10-20T16:09:21+02:00
updatedAt: null
category: parentalite
readingTime: 4
location:
  city: Rennes
  department: Ille-et-Vilaine
  region: Bretagne
topic:
  key: parentalite|rennes|laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant|2026
  keywords:
    - LAEP Rennes
    - lieu accueil enfants parents Rennes
    - sorties gratuites tout-petits Rennes
image:
  src: "/images/articles/2026/10/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant.webp"
  alt: "Place de la Mairie à Rennes photographiée en juin 2023; vue de la ville, et non d'un lieu d'accueil enfants-parents."
sources:
  - title: Caf d'Ille-et-Vilaine - Je découvre les lieux d'accueil enfants parents
    url: https://www.caf.fr/allocataires/caf-d-ille-et-vilaine/offre-de-service/vie-personnelle/je-decouvre-les-lieux-d-accueil-enfants-parents-laep
  - title: Maison de quartier La Bellangerais - Lieu d'Accueil Enfant-Parent
    url: https://openagenda.com/fr/mqlabellangerais/events/36221480_lieu-daccueil-enfant-parent-3431948
  - title: Département d'Ille-et-Vilaine - Les Jeudis Câlins, maison du Ronceray
    url: https://annuaire.ille-et-vilaine.fr/organisme/1792-laep-jeudis-calins-maison-du-ronceray-de-rennes
  - title: Département d'Ille-et-Vilaine - L'Arbre aux Ouistitis, Maurepas
    url: https://annuaire.ille-et-vilaine.fr/organisme/1791-laep-centre-social-maurepas-larbre-aux-ouistitis
  - title: Département d'Ille-et-Vilaine - L'Île aux Marmots, Cleunay
    url: https://annuaire.ille-et-vilaine.fr/organisme/1794-laep-lile-aux-marmots-centre-social-cleunay-rennes
  - title: Département d'Ille-et-Vilaine - Espace Kangourou, Champs Manceaux
    url: https://annuaire.ille-et-vilaine.fr/organisme/4283-lieu-daccueil-enfants-parents-laep-espace-kangourou-centre-social-des-champs-manceaux-rennes
  - title: ARCS - Espace Kangourou, lieu d'accueil enfants-parents
    url: https://centres-sociaux-rennais.org/evenement/espace-kangourou-lieu-daccueil-enfants-parents/
  - title: CIAS à l'Ouest de Rennes - L'Escale
    url: https://www.cias-ouest-rennes.fr/pole-petite-enfance/laep/
  - title: ARCS - Ateliers de motricité
    url: https://centres-sociaux-rennais.org/activite-et-accompag/motricite/
---

À Rennes, les **lieux d'accueil enfants-parents (LAEP)** proposent aux tout-petits des espaces de jeu où ils restent accompagnés d'un parent ou d'un adulte familier. Ces accueils gratuits permettent aussi de rencontrer d'autres familles et d'échanger avec des accueillants, dans plusieurs quartiers de la ville et des communes voisines.

## Un LAEP, comment ça se passe?

Aucun motif particulier n'est nécessaire pour venir. L'enfant explore les jeux à son rythme, tandis que son accompagnant peut, s'il le souhaite, échanger avec d'autres parents.

La [Caf d'Ille-et-Vilaine](https://www.caf.fr/allocataires/caf-d-ille-et-vilaine/offre-de-service/vie-personnelle/je-decouvre-les-lieux-d-accueil-enfants-parents-laep) présente ces accueils comme des espaces de jeux et d'échanges pour les enfants de moins de 6 ans, accompagnés d'un parent ou d'un adulte familier. Des professionnels formés à l'écoute sont présents. **Ce n'est pas une garderie:** l'adulte reste avec l'enfant pendant la séance. Les limites d'âge et les modalités précises peuvent varier d'un lieu à l'autre.

Contrairement à un atelier programmé, le jeu reste libre. Plusieurs LAEP accueillent sans inscription; vérifiez toutefois les modalités du lieu choisi.

## Où aller à Rennes selon le jour et le quartier?

Les créneaux ci-dessous proviennent des structures ou de l'annuaire départemental. Certaines fiches remontent à 2025: confirmez les horaires avant de vous déplacer, surtout pendant les vacances scolaires.

- **Lundi, à Cleunay: L'Île aux Marmots.** Le [centre social de Cleunay](https://annuaire.ille-et-vilaine.fr/organisme/1794-laep-lile-aux-marmots-centre-social-cleunay-rennes), au **49 rue Jules-l'Allemand**, annonce un accueil de **9h30 à 11h30**. Ce créneau figure sur une fiche départementale mise à jour en mars 2025: confirmez qu'il est toujours en vigueur.
- **Mardi, à La Bellangerais: le LAEP de la maison de quartier.** Au **5 rue du Morbihan**, l'[agenda de la maison de quartier](https://openagenda.com/fr/mqlabellangerais/events/36221480_lieu-daccueil-enfant-parent-3431948) indique **9h à 12h**, en accès libre, gratuit et sans inscription, pour les enfants jusqu'à 6 ans. Des dates sont affichées pour octobre 2026.
- **Jeudi, à la maison du Ronceray: Les Jeudis Câlins.** Au **110 rue de la Poterie**, l'[annuaire du Département](https://annuaire.ille-et-vilaine.fr/organisme/1792-laep-jeudis-calins-maison-du-ronceray-de-rennes) affiche **9h30 à 12h**. La fiche, actualisée en février 2026, précise que l'accueil fonctionne aussi le premier jeudi des petites vacances scolaires.
- **Vendredi, à Maurepas: L'Arbre aux Ouistitis.** Au centre social du **11C place du Gros-Chêne**, le [Département](https://annuaire.ille-et-vilaine.fr/organisme/1791-laep-centre-social-maurepas-larbre-aux-ouistitis) indique **9h à 11h**. L'entrée est à l'arrière du bâtiment, côté halte-garderie.
- **Vendredi, aux Champs Manceaux: Espace Kangourou.** Au **15 rue Louis-et-René-Moine**, l'[annuaire départemental](https://annuaire.ille-et-vilaine.fr/organisme/4283-lieu-daccueil-enfants-parents-laep-espace-kangourou-centre-social-des-champs-manceaux-rennes) indique **9h30 à 11h30 hors vacances scolaires**, au niveau inférieur de l'espace social Aimé-Césaire. L'[association gestionnaire ARCS](https://centres-sociaux-rennais.org/evenement/espace-kangourou-lieu-daccueil-enfants-parents/) précise que cet accueil gratuit, sans inscription, s'adresse aux **0-3 ans**. L'annonce de l'ARCS date de septembre 2025: ce créneau est à confirmer pour 2026.

Pour choisir entre deux accueils le vendredi, regardez d'abord le quartier le plus simple d'accès et l'âge de votre enfant: les créneaux se chevauchent, mais l'Espace Kangourou vise plus particulièrement les moins de 4 ans.

Pour rejoindre ces différents quartiers sans voiture, notre guide [Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche?](https://www.fam-space.fr/articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/) explique les règles des bus et métros STAR, notamment selon l'âge des enfants.

## Trois autres accueils près de Rennes: L'Escale

Le **CIAS à l'Ouest de Rennes** organise [L'Escale](https://www.cias-ouest-rennes.fr/pole-petite-enfance/laep/) dans trois communes. L'accueil est **gratuit, sans inscription**, avec des arrivées et départs libres. Il fonctionne pendant les **périodes scolaires**:

- **Saint-Gilles:** lundi de **9h30 à 12h**, au pôle petite enfance, rue du Pont-aux-Moines.
- **Vezin-le-Coquet:** mardi de **15h30 à 18h30**, salle Mosaïque, médiathèque Le Tempo, contour de l'Église.
- **Cintré:** mercredi de **9h30 à 12h**, pôle petite enfance Les P'tits Bouts, **2 rue de Rennes**.

Ici, les enfants accueillis ont **moins de 4 ans**, avec une possibilité jusqu'à **6 ans pour une fratrie**. Cette limite diffère de la tranche d'âge générale indiquée par la Caf. Pour une confirmation avant votre venue, le CIAS indique le **06 30 62 80 52** et l'adresse **laep@cias-ouest-rennes.fr**.

## Première visite: que faut-il prévoir?

Un enfant peut prendre son temps pour découvrir les jeux et les autres familles, à proximité de son adulte. Il n'y a ni activité à préparer ni obligation de participer dès l'arrivée.

Les LAEP sont conçus pour favoriser une parole libre et un accueil sans jugement. Le CIAS précise notamment que les échanges à L'Escale sont confidentiels. Une première venue peut donc aussi être l'occasion de rencontrer les accueillants, sans obligation de raconter sa vie ou de participer à une discussion.

Pour éviter un déplacement inutile, vérifiez **la limite d'âge**, **l'ouverture pendant les vacances** et **le créneau du jour** directement auprès de la structure.

## Et si vous recherchez plutôt une activité encadrée?

Un LAEP ne remplace pas un atelier de motricité. Les [centres sociaux rennais ARCS](https://centres-sociaux-rennais.org/activite-et-accompag/motricite/) proposent aussi des séances pour les tout-petits accompagnés de leurs parents, mais certaines fonctionnent **par cycles et sur inscription**. Aux Champs Manceaux, par exemple, les ateliers de motricité du lundi ne sont pas la même activité que l'accueil libre de l'Espace Kangourou du vendredi. Vérifiez bien le dispositif avant de vous déplacer.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/lieux-d-accueil-enfants-parents-dans-le-cher-ou-aller-avec-son-tout-petit/ | Lieux d’accueil enfants-parents dans le Cher: où aller avec son tout-petit ? | parentalite | Cher, Centre-Val de Loire
- /articles/parentalite/laep-dans-le-loir-et-cher-ou-rencontrer-d-autres-parents-avec-son-tout-petit/ | LAEP dans le Loir-et-Cher: où rencontrer d'autres parents avec son tout-petit ? | parentalite | Loir-et-Cher, Centre-Val de Loire
- /articles/parentalite/la-maison-des-petits-pas-a-troyes-un-lieu-pour-souffler-avec-son-jeune-enfant/ | La Maison des Petits Pas à Troyes: un lieu pour souffler avec son jeune enfant | parentalite | Troyes, Aube, Grand Est
- /articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/ | LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits | parentalite | Bastia, Haute-Corse, Corse
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans ? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/ecotravo-a-rennes-metropole-qui-peut-obtenir-jusqu-a-15-000-pour-renover-sa-maison/ | écoTravo à Rennes Métropole: qui peut obtenir jusqu'à 15 000 € pour rénover sa maison? | maison | Rennes, Ille-et-Vilaine, Bretagne
- /articles/vie-pratique/rennes-avec-des-enfants-les-transports-sont-gratuits-avant-12-ans-mais-pas-sans-carte/ | Rennes avec des enfants: transports gratuits avant 12 ans, comment ça marche? | vie-pratique | Rennes, Ille-et-Vilaine, Bretagne
- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/parents-delires-rennes-2026-famille/ | Par’ents Délires 4 à Rennes: une fête gratuite pour toute la famille le 26 août 2026 | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/bons-plans/fougeres-en-famille-a-petit-prix-chateau-coursive-et-balade-gratuite/ | Fougères en famille à petit prix: château, Coursive et balade gratuite | bons-plans | Fougères, Ille-et-Vilaine, Bretagne
- /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | Parc en Folie 2026 à Rennes: tarifs, espace 0-3 ans et infos pratiques en famille | sorties | Bruz, Ille-et-Vilaine, Bretagne
- /articles/cuisine/ferme-marine-de-cancale-avec-des-enfants-quelle-visite-choisir-a-la-toussaint-2026/ | Ferme Marine de Cancale avec des enfants: quelle visite choisir à la Toussaint 2026? | cuisine | Cancale, Ille-et-Vilaine, Bretagne
- /articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/ | Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/parentalite/musee-de-la-corse-a-corte-decouvrir-l-ile-en-famille-par-les-objets-du-quotidien/ | Musée de la Corse à Corte: découvrir l’île en famille par les objets du quotidien | parentalite | Corte, Haute-Corse, Corse
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est

### Historique Radar lié

- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-10-17T18:40:41.973Z
- refresh | /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | 2026-11-02T06:34:10.210Z
- refresh | /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | 2026-11-08T16:33:51.043Z
- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/sorties/parc-en-folie-2026-a-rennes-billet-en-ligne-ou-sur-place-quelle-formule-choisir-en-famille/ | 2026-10-07T09:18:46.414Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
