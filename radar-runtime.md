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
title: "Ludothèques autour de Dinan: emprunter des jeux pour la maison"
subtitle: Tarifs, durées de prêt et créneaux à Plancoët, Plouër-sur-Rance et Lanvallay
summary: Où jouer et emprunter près de Dinan? Adresses vérifiées, formules familiales, durées de prêt et permanences des trois ludothèques.
slug: ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison
status: published
publishedAt: 2026-10-30T11:31:33+01:00
updatedAt: 2026-11-11T22:30:20.367Z
category: vie-pratique
readingTime: 4
publicationOrigin: region
location:
  city: ""
  department: Côtes-d'Armor
  region: Bretagne
topic:
  key: vie-pratique|cotes-d-armor|ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison|2026
  keywords:
    - ludothèques Dinan
    - emprunt de jeux
    - ludothèque Plancoët
    - ludothèque Plouër-sur-Rance
    - ludothèque Lanvallay
image:
  src: /images/articles/2026/10/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison.webp
  alt: Vue de Dinan et de ses maisons au bord de la Rance, illustration géographique de la région des ludothèques
sources:
  - title: "Dinan Agglomération: ludothèque de Plancoët"
    url: https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/
  - title: "Dinan Agglomération: adresse officielle de la ludothèque de Plancoët"
    url: https://www.dinan-agglomeration.fr/annuaire/ludotheque-plancoet/
  - title: Catalogue et horaires de la ludothèque de Plancoët
    url: https://www.dyade-fr.com/WD150AWP/WD150Awp.exe/CONNECT/e-Kawa-Ludotheque?Ludotheque=PLANCOET
  - title: "Mairie de Plouër-sur-Rance: la ludothèque"
    url: https://www.plouer-sur-rance.fr/la-ludotheque/
  - title: "Ludothèque plouëraise: présentation, horaires et tarifs de l’association"
    url: https://assoludoplouer.wixsite.com/my-site/about-1
  - title: "Ludothèque plouëraise: coordonnées"
    url: https://assoludoplouer.wixsite.com/my-site/contact-3
  - title: "Mairie de Lanvallay: bibliothèque et ludothèque"
    url: https://www.lanvallay.fr/mes-loisirs/bibliotheque/
  - title: "Mairie de Lanvallay: permanence du 14 novembre 2026"
    url: https://www.lanvallay.fr/agenda/ludotheque-4/
  - title: "Mairie de Lanvallay: agenda des permanences"
    url: https://www.lanvallay.fr/mes-loisirs/agenda/
  - title: "Au Bois des Ludes: documentation du catalogue"
    url: https://catalogue.auboisdesludes.com/documentation/
reviewAt: 2026-11-15
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(10)/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/index.md
  targetSha: c01efa4bee85e69afa83695e1b3c946f3d0fd575
  targetUrl: /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/
  decision: Choisir la ludothèque la plus pratique et économique selon la fréquence des emprunts, les horaires réels et les jours de permanence.
  affiliationPotential: Aucune réservation ou hébergement naturellement nécessaire; conserver le lien interne vers le guide de jeux existant.
  gsc:
    retrievedAt: 2026-11-26T07:29:00+01:00
    dataThrough: 2026-11-23
    signal: uncertain
    basis: "Visibilité récente : 22 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-31
    peakEnd: 2026-11-02
    recentStart: 2026-11-21
    recentEnd: 2026-11-23
    peakImpressions: 22
    recentImpressions: 1
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - ludothèque plancoët
      - ludotheque plancoet
      - ludothèque plancoet
      - ludothèque plouer sur rance
      - horaire ludothèque
---

## Mission retenue
Améliorer le guide des trois ludothèques autour de Dinan, notamment Plancoët, Plouër-sur-Rance et Lanvallay.

## Pourquoi cette mission
Premier candidat rapidDrop, cause non établie. Les recherches concernent notamment les horaires de Plancoët et Plouër. Lacunes vérifiées indépendamment: le guide omet les samedis des semaines paires et les horaires de vacances publiés par Dinan Agglomération; il présente une permanence de Lanvallay déjà passée comme prochaine. La comparaison financière reste à expliciter pour les familles.

## Décision du lecteur
Choisir selon le nombre de jeux empruntés dans l'année, les jours réellement accessibles et la durée du prêt.

## Faits à traiter
- Plancoët: préciser les samedis des semaines paires, les horaires de vacances (mardi 15h-18h, mercredi 10h-12h30 et 15h-18h, vendredi 15h-18h30) et le téléphone 02 96 89 40 37. Les pages officielles divergent sur le 33/34 rue de la Madeleine; préserver cette réserve et conseiller de confirmer l'entrée.
- Lanvallay: remplacer la permanence passée par celle du mercredi 2 décembre 2026 de 10h30 à 12h, officiellement annoncée; conserver le rythme indicatif et le lien agenda. Ajouter le contact bibliothèque et éventuellement Ludolire (dès 4 ans, gratuit, sur inscription), distinct des prêts.
- Comparer les coûts annuels à nombre égal d'emprunts: à 12 prêts, 35 € à Plancoët, 32 € à Lanvallay, 44 € à Plouër si tarif associatif de 32 € confirmé; à 24 prêts, respectivement 35 €, 44 €, 56 €. À Lanvallay, égalité à 15 prêts, Plancoët moins cher à partir de 16. Ne pas assimiler les durées de prêt ou le nombre de jeux simultanés. Préserver les divergences de tarifs et horaires de Plouër, la première visite gratuite et les informations déjà utiles; les pages de l'association n'ont pas pu être rouvertes lors de ce passage, donc ne pas présenter le tarif de 32 € comme nouvellement confirmé.
- Conserver les conseils de réservation et retour, les données de catalogue, la distinction carte bibliothèque/adhésion ludothèque, l'image et les crédits existants.

## Sources de départ
- https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/
- https://www.dinan-agglomeration.fr/annuaire/ludotheque-plancoet/
- https://www.plouer-sur-rance.fr/ludotheque/
- https://www.lanvallay.fr/agenda/ludotheque-7/
- https://www.lanvallay.fr/mes-loisirs/bibliotheque/
- https://www.lanvallay.fr/mes-loisirs/agenda/

## Affiliation
Pas d'offre partenaire naturelle pour un service local de prêt de jeux. Ne pas ajouter d'hébergement artificiellement.

## Continuations internes
Conserver le guide Jeux & Cadeaux déjà lié pour les familles qui veulent comparer les jeux de logique.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(10)/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/index.md

---
title: "Ludothèques autour de Dinan: emprunter des jeux pour la maison"
subtitle: Tarifs, durées de prêt et créneaux à Plancoët, Plouër-sur-Rance et Lanvallay
summary: Où jouer et emprunter près de Dinan? Adresses vérifiées, formules familiales, durées de prêt et permanences des trois ludothèques.
slug: ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison
status: published
publishedAt: 2026-10-30T11:31:33+01:00
updatedAt: 2026-11-11T22:30:20.367Z
category: vie-pratique
readingTime: 4
publicationOrigin: region
location:
  city: ""
  department: Côtes-d'Armor
  region: Bretagne
topic:
  key: vie-pratique|cotes-d-armor|ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison|2026
  keywords:
    - ludothèques Dinan
    - emprunt de jeux
    - ludothèque Plancoët
    - ludothèque Plouër-sur-Rance
    - ludothèque Lanvallay
image:
  src: /images/articles/2026/10/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison.webp
  alt: Vue de Dinan et de ses maisons au bord de la Rance, illustration géographique de la région des ludothèques
sources:
  - title: "Dinan Agglomération: ludothèque de Plancoët"
    url: https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/
  - title: "Dinan Agglomération: adresse officielle de la ludothèque de Plancoët"
    url: https://www.dinan-agglomeration.fr/annuaire/ludotheque-plancoet/
  - title: Catalogue et horaires de la ludothèque de Plancoët
    url: https://www.dyade-fr.com/WD150AWP/WD150Awp.exe/CONNECT/e-Kawa-Ludotheque?Ludotheque=PLANCOET
  - title: "Mairie de Plouër-sur-Rance: la ludothèque"
    url: https://www.plouer-sur-rance.fr/la-ludotheque/
  - title: "Ludothèque plouëraise: présentation, horaires et tarifs de l’association"
    url: https://assoludoplouer.wixsite.com/my-site/about-1
  - title: "Ludothèque plouëraise: coordonnées"
    url: https://assoludoplouer.wixsite.com/my-site/contact-3
  - title: "Mairie de Lanvallay: bibliothèque et ludothèque"
    url: https://www.lanvallay.fr/mes-loisirs/bibliotheque/
  - title: "Mairie de Lanvallay: permanence du 14 novembre 2026"
    url: https://www.lanvallay.fr/agenda/ludotheque-4/
  - title: "Mairie de Lanvallay: agenda des permanences"
    url: https://www.lanvallay.fr/mes-loisirs/agenda/
  - title: "Au Bois des Ludes: documentation du catalogue"
    url: https://catalogue.auboisdesludes.com/documentation/
reviewAt: 2026-11-15
---

Emprunter un jeu permet de le découvrir en famille, d’y rejouer quelques semaines, puis de changer sans encombrer les placards. Autour de Dinan, dans les Côtes-d’Armor, les ludothèques de Plancoët et de Plouër-sur-Rance ainsi que les permanences de Lanvallay proposent ce service, avec la possibilité de jouer sur place.

Leurs formules diffèrent: Plancoët comprend les prêts dans un forfait annuel, tandis que Plouër-sur-Rance et Lanvallay facturent chaque jeu en plus de l’adhésion. Les durées d’emprunt vont de deux à quatre semaines.

## Plancoët: jusqu’à trois jeux pour trois semaines

À la [ludothèque de Dinan Agglomération](https://www.dinan-agglomeration.fr/activites-et-loisirs/culture-et-pratiques-artistiques/culture/ludotheque/), le jeu sur place est **gratuit et ouvert à tous**.

L’adhésion familiale coûte **35 € pour un an, de date à date**. Elle permet d’emporter jusqu’à **trois jeux pour trois semaines**. Le fonds compte plus de mille jeux et jouets, de l’imitation et de la construction aux jeux de règles.

La ludothèque se trouve au **34 rue de la Madeleine, 22130 Plancoët**, selon sa [fiche officielle](https://www.dinan-agglomeration.fr/annuaire/ludotheque-plancoet/). Le numéro 33 apparaît également dans des pages de Dinan Agglomération concernant d’autres services situés dans la rue. En période scolaire, les ouvertures annoncées sont les suivantes:

- Mardi de 16 h 30 à 18 h.
- Mercredi de 10 h à 12 h 30 et de 15 h à 18 h.
- Vendredi de 16 h 30 à 18 h 30.
- Un samedi sur deux de 10 h à 12 h 30.

Le [catalogue de Plancoët](https://www.dyade-fr.com/WD150AWP/WD150Awp.exe/CONNECT/e-Kawa-Ludotheque?Ludotheque=PLANCOET) publie aussi les horaires des vacances scolaires et permet de consulter les disponibilités ou de demander une réservation. Vérifiez les informations avant le déplacement, particulièrement le samedi.

## Plouër-sur-Rance: des matinées pour les tout-petits

La ludothèque plouëraise accueille notamment les plus jeunes sur des créneaux « ludo pitchounes », présentés sur la [page municipale](https://www.plouer-sur-rance.fr/la-ludotheque/). **Les enfants de moins de huit ans doivent être accompagnés.**

Pour le budget, [l’association annonce une première visite gratuite](https://assoludoplouer.wixsite.com/my-site/about-1), puis une adhésion familiale de **32 € pour 365 jours**, ou un passage sans adhésion à **2 € par personne**. La mairie affiche encore une adhésion à 30 €: faites confirmer le montant lors de l’inscription. Pour emprunter, comptez **1 € par jeu pour deux semaines**, en plus de l’adhésion.

En période scolaire, l’association publie ces horaires:

- Du mardi au vendredi de 10 h à 11 h 45.
- Le mercredi également de 15 h à 18 h.
- Le samedi de 10 h 30 à 12 h.

Les heures de fin de matinée diffèrent sur la page municipale et la page de contact de l’association, qui indiquent 11 h 30 les mardis, jeudis et vendredis, et 12 h le mercredi. Confirmez votre créneau, ainsi que les ouvertures pendant les vacances.

La ludothèque se situe au **9 rue du Four à Chaux**. Vous pouvez joindre l’équipe au **02 96 86 88 94**, indiqué sur sa [page de contact](https://assoludoplouer.wixsite.com/my-site/contact-3).

## Lanvallay: quatre semaines de prêt lors des permanences

À Lanvallay, Au Bois des Ludes intervient **deux fois par mois à la bibliothèque**. Le jeu sur place est gratuit pendant ces rendez-vous. L’adhésion familiale coûte **20 € par an**, auxquels s’ajoute **1 € par jeu emprunté pour quatre semaines**, selon la [présentation municipale](https://www.lanvallay.fr/mes-loisirs/bibliotheque/).

Cette durée laisse davantage de temps entre deux emprunts, mais les visites doivent tenir compte des permanences. L’ouverture de la bibliothèque ne signifie pas que la ludothèque est présente.

La prochaine permanence annoncée est le **samedi 14 novembre 2026 de 10 h 30 à 12 h**, à la bibliothèque du **9 rue de Saint James**. Cette date est un rendez-vous ponctuel, pas un horaire hebdomadaire: consultez la [fiche de la permanence](https://www.lanvallay.fr/agenda/ludotheque-4/) puis [l’agenda de Lanvallay](https://www.lanvallay.fr/mes-loisirs/agenda/) pour les séances suivantes.

**La carte gratuite de la bibliothèque et du réseau Lirici ne remplace pas l’adhésion nécessaire pour emprunter les jeux.**

Le catalogue d’Au Bois des Ludes permet aux adhérents de consulter les collections et de réserver des jeux. Pour y accéder, le compte doit être créé par l’équipe, comme l’explique la [documentation du catalogue](https://catalogue.auboisdesludes.com/documentation/). Demandez sa mise en place lors de votre adhésion.

## Choisir le premier jeu à emporter

Indiquez à l’équipe l’âge des enfants, le nombre de joueurs habituel et le temps dont vous disposez pour une partie. Avec une fratrie, essayez quelques tours sur place pour voir si le plus jeune peut participer.

Pour explorer différents types de jeux avec des enfants de 6 à 8 ans, notre [comparatif de Bandido, Chabyrinthe et Kameleo](https://www.fam-space.fr/cadeaux/guides/bandido-chabyrinthe-ou-kameleo-quel-jeu-de-logique-choisir-de-6-a-8-ans/) distingue coopération, compétition et défis en solo. La présence de ces titres dans la ludothèque choisie reste à vérifier.

Avant de repartir, faites préciser la date de retour et les consignes si une pièce manque ou se casse. Si vous avez réservé une référence, attendez la confirmation de sa mise à disposition avant de vous déplacer spécialement.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | Ludothèque du Choletais: jouer sur place et emprunter en famille | parentalite | Cholet, Maine-et-Loire, Pays de la Loire
- /articles/vie-pratique/ludotheques-dans-le-gers-ou-jouer-et-emprunter-des-jeux-en-famille/ | Ludothèques dans le Gers: où jouer et emprunter des jeux en famille | vie-pratique | Auch, Gers, Occitanie
- /articles/vie-pratique/ludotheques-en-sarthe-ou-jouer-et-emprunter-des-jeux-avec-les-enfants/ | Ludothèques en Sarthe: où jouer et emprunter des jeux avec les enfants ? | vie-pratique | Sarthe, Pays de la Loire
- /articles/vie-pratique/ludotheques-du-val-de-marne-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Val-de-Marne: où jouer en famille et emprunter des jeux ? | vie-pratique | Val-de-Marne, Île-de-France
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/vie-pratique/ludotheque-ricochet-a-sainte-sigolene-jouer-et-emprunter-en-famille/ | Ludothèque Ricochet à Sainte-Sigolène: jouer et emprunter en famille | vie-pratique | Sainte-Sigolène, Haute-Loire, Auvergne-Rhône-Alpes
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/sorties/ile-de-brehat-en-famille-hors-saison-bateau-balades-et-marees/ | Île de Bréhat en famille hors saison: bateau, balades et marées | sorties | Île-de-Bréhat, Côtes-d'Armor, Bretagne
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/cuisine/biscuiterie-menou-a-plougonver-une-visite-gratuite-a-prevoir-avec-les-enfants/ | Biscuiterie Ménou à Plougonver: une visite gratuite à prévoir avec les enfants | cuisine | Plougonver, Côtes-d'Armor, Bretagne
- /articles/maison/secheresse-dans-les-cotes-d-armor-ce-qui-est-interdit-a-la-maison/ | Sécheresse dans les Côtes-d'Armor: ce qui est interdit à la maison | maison | Saint-Brieuc, Côtes-d'Armor, Bretagne
- /articles/activites/sept-iles-en-bateau-avec-des-enfants-tarifs-duree-et-conseils-depuis-perros-guirec/ | Sept-Îles en bateau avec des enfants: tarifs, durée et conseils depuis Perros-Guirec | activites | Perros-Guirec, Côtes-d'Armor, Bretagne
- /articles/voyages/perros-guirec-en-famille-ou-dormir-selon-votre-programme/ | Perros-Guirec en famille: où dormir selon votre programme | voyages | Perros-Guirec, Côtes-d'Armor, Bretagne
- /articles/vie-pratique/se-deplacer-en-famille-en-haute-saone-sans-voiture-au-quotidien/ | Se déplacer en famille en Haute-Saône sans voiture au quotidien | vie-pratique | Haute-Saône, Bourgogne-Franche-Comté
- /articles/vie-pratique/metz-en-famille-sans-voiture-train-bus-et-bagages/ | Metz en famille sans voiture: train, bus et bagages | vie-pratique | Metz, Moselle, Grand Est
- /articles/vie-pratique/aides-caf-en-charente-maritime-financer-meubles-electromenager-et-ordinateur/ | Aides Caf en Charente-Maritime: financer meubles, électroménager et ordinateur | vie-pratique | Charente-Maritime, Nouvelle-Aquitaine
- /articles/vie-pratique/littoral-des-alpes-maritimes-en-famille-se-deplacer-sans-voiture/ | Littoral des Alpes-Maritimes en famille: se déplacer sans voiture | vie-pratique | Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/transaltitude-hiver-2026-2027-partir-a-la-neige-en-isere-sans-voiture/ | Transaltitude hiver 2026-2027: partir à la neige en Isère sans voiture | vie-pratique | Isère, Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | 2026-11-21T20:28:50.734Z
- refresh | /articles/parentalite/ludotheque-du-choletais-jouer-sur-place-et-emprunter-en-famille/ | 2026-11-10T03:33:47.847Z
- refresh | /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | 2026-11-11T22:30:20.462Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-24T19:32:32.814Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
