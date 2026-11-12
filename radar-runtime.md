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
title: "Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants"
subtitle: Du 23 octobre au 15 novembre, des manèges derrière le Parc des expositions
summary: Dates, horaires à confirmer, entrée gratuite, budget des attractions et accès à la fête foraine de Dijon en famille, sans la confondre avec la Foire gastronomique.
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
image:
  src: /images/articles/2026/10/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget.webp
  alt: Vue de la place de la Libération à Dijon depuis la rue Vauban, sans rapport avec les manèges de la fête foraine.
sources:
  - title: Ville de Dijon - La fête foraine de retour à Dijon (24 octobre 2026)
    url: https://www.dijon.fr/agenda/la-fete-foraine-de-retour-a-dijon/
  - title: Foire internationale et gastronomique de Dijon - édition 2026
    url: https://www.foirededijon.com/
  - title: Divia Mobilités - Parking Clemenceau et tram T1
    url: https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/clemenceau/
  - title: Dijon Bourgogne Events - accès au Parc des expositions
    url: https://dijonbourgogne-events.com/palais-et-parc/
  - title: Adagio - Aparthotel Adagio Access Dijon République, équipements et capacités
    url: https://www.adagio-city.com/fr/hotel-8985-aparthotel-adagio-access-dijon-republique/index.shtml
eventEndsAt: 2026-11-15
reviewAt: 2026-10-30
topic:
  key: evenements|dijon|fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget|2026
  keywords:
    - fête foraine Dijon 2026
    - manèges Dijon octobre novembre 2026
    - mail Général-Delaborde
    - foire aux manèges Dijon
slug: fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget
status: published
publishedAt: 2026-10-25T17:34:53.615Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Dijon
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/index.md
  targetSha: 3f0bff7eb3200192a0a4643124b842c1e6cbac6d
  targetUrl: /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/
  decision: Choisir le bon créneau pour les derniers jours de la fête foraine, sans confondre l'ouverture des manèges, les nocturnes et la Foire gastronomique terminée.
  affiliationPotential: Conserver l'hébergement Booking.com déjà intégré pour les familles en séjour; aucune nouvelle offre nécessaire.
  gsc:
    retrievedAt: 2026-11-12T03:33:45+01:00
    dataThrough: 2026-11-09
    signal: needs_query_check
    basis: "Visibilité récente : 1291 impressions sur trois jours, puis 403 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-27
    peakEnd: 2026-10-29
    recentStart: 2026-11-07
    recentEnd: 2026-11-09
    peakImpressions: 1291
    recentImpressions: 403
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - fête foraine Dijon 2026
      - manèges Dijon octobre novembre 2026
      - mail Général-Delaborde
      - foire aux manèges Dijon
---

## Mission retenue
Actualiser utilement le guide de la fête foraine de Dijon, encore ouverte jusqu'au 15 novembre 2026.

## Pourquoi cette mission
Le snapshot GSC signale 1 291 impressions sur trois jours puis 403, sans diagnostic par requête: ne pas attribuer la baisse à un recul de classement. À trois jours de la clôture, l'article laisse une incertitude concrète sur l'heure d'ouverture et ne distingue pas les jours de nocturne. La Foire gastronomique évoquée s'est terminée le 11 novembre.

## Décision du lecteur
Savoir à quelle heure venir les 12, 13, 14 ou 15 novembre avec des enfants, quand rentrer et quel budget prévoir, sans acheter par erreur un billet pour un événement distinct.

## Faits à traiter
- La Ville affiche encore « à partir de 15 h » dans son en-tête mais « 14 h à 23 h » dans les informations pratiques. L'agenda local Jondi, citant Dijon Mag d'octobre, précise 14 h tous les jours, jusqu'à 1 h les vendredis, samedis et veilles de jours fériés. Confronter au document municipal primaire si accessible; sinon conserver explicitement la contradiction sans inventer de confirmation.
- Préciser que les 13 et 14 novembre sont les derniers vendredi et samedi, que le dimanche 15 clôt l'événement; éviter de promettre que chaque attraction reste ouverte jusqu'à la fermeture générale.
- Actualiser le passage sur la Foire gastronomique: elle est terminée depuis le 11 novembre; ne pas la suggérer comme sortie encore combinable.
- Préserver les dates et le lieu, l'entrée libre et les attractions payantes sans tarifs inventés, les restrictions d'âge/taille, les conseils poussette et sanitaires, le tram T1, le parking Clemenceau, les deux photos intégrées et leurs crédits/licences, le lien interne et l'hébergement Booking.com. Ne pas réécrire le reste inutilement.

## Sources de départ
- Ville de Dijon, agenda officiel: https://www.dijon.fr/agenda/la-fete-foraine-de-retour-a-dijon/
- Ville de Dijon, Dijon Mag octobre 2026 (horaires cités par Jondi): https://www.dijon.fr/
- Agenda local Jondi, horaires détaillés: https://jondi.fr/evenement/fete-foraine-de-dijon-2026/2026-11-13/14-00-00/
- Ville de Dijon, Foire gastronomique terminée le 11 novembre: https://www.dijon.fr/actualites/dijon-metropole-vous-donne-rendez-vous-a-la-foire-de-dijon/

## Affiliation
Conserver l'Adagio Access Dijon République sur Booking.com pour un week-end à Dijon. Ne pas ajouter d'offre de billets pour les manèges.

## Continuations internes
Conserver le lien vers le guide distinct de la Foire de Dijon comme archive utile, en indiquant clairement qu'elle est achevée.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/index.md

---
title: "Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants"
subtitle: Du 23 octobre au 15 novembre, des manèges derrière le Parc des expositions
summary: Dates, horaires à confirmer, entrée gratuite, budget des attractions et accès à la fête foraine de Dijon en famille, sans la confondre avec la Foire gastronomique.
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
image:
  src: "/images/articles/2026/10/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget.webp"
  alt: "Vue de la place de la Libération à Dijon depuis la rue Vauban, sans rapport avec les manèges de la fête foraine."
sources:
  - title: Ville de Dijon - La fête foraine de retour à Dijon (24 octobre 2026)
    url: https://www.dijon.fr/agenda/la-fete-foraine-de-retour-a-dijon/
  - title: Foire internationale et gastronomique de Dijon - édition 2026
    url: https://www.foirededijon.com/
  - title: Divia Mobilités - Parking Clemenceau et tram T1
    url: https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/clemenceau/
  - title: Dijon Bourgogne Events - accès au Parc des expositions
    url: https://dijonbourgogne-events.com/palais-et-parc/
  - title: Adagio - Aparthotel Adagio Access Dijon République, équipements et capacités
    url: https://www.adagio-city.com/fr/hotel-8985-aparthotel-adagio-access-dijon-republique/index.shtml
eventEndsAt: 2026-11-15
reviewAt: 2026-10-30
topic:
  key: evenements|dijon|fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget|2026
  keywords:
    - fête foraine Dijon 2026
    - manèges Dijon octobre novembre 2026
    - mail Général-Delaborde
    - foire aux manèges Dijon
slug: fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget
status: published
publishedAt: 2026-10-25T17:34:53.615Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Dijon
---

La **fête foraine de Dijon** se tient **du 23 octobre au 15 novembre 2026**, sur le **mail Général-Delaborde**, derrière le Parc des expositions et des congrès. L'accès est gratuit, mais les attractions sont payantes. Pour une sortie avec des enfants, voici les horaires annoncés, les dépenses à anticiper et les moyens de rejoindre les manèges.

## Quels sont les horaires de la fête foraine ?

La [Ville de Dijon](https://www.dijon.fr/agenda/la-fete-foraine-de-retour-a-dijon/) indique **14 h à 23 h**, avec des prolongations certains soirs jusqu'à **1 h du matin**. Pourtant, l'en-tête de la même annonce précise « à partir de 15 h ». **Cette contradiction officielle n'est pas résolue**: si vous comptez arriver à l'ouverture, faites confirmer l'heure pour le jour choisi.

En début d'après-midi, la visite peut être plus facile à écourter avec de jeunes enfants. En soirée, les illuminations changent l'ambiance, mais certaines files d'attente peuvent rallonger la sortie.

## Combien prévoir pour les manèges ?

**L'entrée à la fête est libre; chaque tour de manège est payant.** La mairie ne donne pas de tarifs par attraction, ni de forfait familial. Le coût dépend donc des manèges choisis et des prix affichés sur place.

Vous pouvez, par exemple, fixer **20 € comme budget total de manèges** avant la visite: c'est un plafond choisi par la famille, **pas un tarif proposé par les forains**. Les boissons, friandises et stands de jeux sont à compter séparément.

Avant de payer, vérifiez les **restrictions d'âge ou de taille** et si un adulte doit accompagner l'enfant. Il n'existe pas de liste officielle commune de ces conditions pour l'ensemble des attractions. Avec une poussette ou un bébé, prévoyez un parcours assez court; la présence de sanitaires adaptés ou d'un espace bébé n'est pas confirmée dans l'annonce municipale.

## Où se trouve la fête et comment y aller ?

<!-- article-image-body:01 -->

![Station de tramway Auditorium à Dijon, sur la ligne T1 desservant le quartier du Parc des expositions.](/images/articles/2026/10/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Station_Tramway_Auditorium_-_Dijon_(FR21)_-_2022-04-16_-_4.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les manèges sont installés **en plein air, derrière le Parc des expositions**, et non dans les halls.

Depuis la gare de Dijon, le **tram T1** dessert le secteur, notamment les stations **Auditorium** et **Poincaré**. Vérifiez les horaires du réseau pour votre trajet retour.

En voiture, le **parking Clemenceau**, **1 avenue Marbotte**, dispose d'un accès piéton côté boulevard de Champagne, près de l'Auditorium. [Divia Mobilités](https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/clemenceau/) annonce une ouverture **24 h/24, 7 j/7** et un stationnement payant. Le parking indique aussi des places PMR; cela ne garantit pas l'accessibilité de chaque manège.

## Et la Foire gastronomique de Dijon ?

<!-- article-image-body:02 -->

![Bâtiment du Parc des expositions et des congrès de Dijon, distinct des manèges installés en plein air.](/images/articles/2026/10/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget-body-02.webp)

*Photo: [NinoDu21](https://commons.wikimedia.org/wiki/File:Parc_des_expositions_de_Dijon.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La **Foire internationale et gastronomique** est un **autre événement**, organisé **du 31 octobre au 11 novembre 2026** dans les halls du Parc des expositions. Elle possède ses propres horaires et tarifs: **aucun billet de la Foire n'est nécessaire pour accéder à la fête foraine**.

Si vous souhaitez combiner les deux sorties, notre [guide de la Foire de Dijon 2026 en famille](/articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/) détaille les ateliers, les animaux, les gratuités et le budget de cette visite distincte.

## Dormir à Dijon pour prolonger la sortie

Pour une famille qui passe le week-end à Dijon, l'[Aparthotel Adagio Access Dijon République sur Booking.com](https://www.booking.com/hotel/fr/aparthotel-adagio-access-dijon-republique.fr.html), **33 rue de Mulhouse**, propose notamment un **appartement d'une chambre pour quatre personnes**, avec cuisine équipée. Le logement permet de préparer des repas sur place et de rejoindre le quartier du Parc des expositions. Vérifiez la capacité correspondant à l'âge des enfants, les tarifs et les disponibilités pour vos dates.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | Foire aux santons de Marseille 2026: dates, inauguration et visite en famille | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | Noël à Aix-en-Provence 2026 en famille: marchés, santons et manèges | evenements | Aix-en-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/visiter-l-abbaye-de-fontenay-avec-des-enfants-meme-en-hiver/ | Visiter l'abbaye de Fontenay avec des enfants, même en hiver | sorties | Marmagne, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- opportunity | /articles/evenements/foire-aux-santons-de-marseille-2026-en-famille-quand-venir-et-que-voir/ | 2026-10-23T15:29:55.218Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/noel-a-aix-en-provence-2026-en-famille-marches-santons-ou-maneges/ | 2026-10-25T15:16:03.590Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
