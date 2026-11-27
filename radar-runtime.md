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
title: "Lumières de Laval 2026 en famille: balade gratuite, marchés, roue et croisière"
subtitle: Parcours lumineux, horaires, dates et budget pour choisir sa sortie
summary: Du 21 novembre 2026 au 3 janvier 2027, découvrez gratuitement les lanternes, le Vieux-Laval illuminé et le Bal du Château-Neuf. Marchés, grande roue et croisières complètent la sortie selon votre budget.
category: evenements
location:
  city: Laval
  department: Mayenne
  region: Pays de la Loire
image:
  src: /images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere.webp
  alt: Illuminations des Lumières de Laval 2025 sur le pont Aristide-Briand à la nuit tombée
sources:
  - title: Laval Agglomération - Installations lumineuses 2026
    url: https://www.agglo-laval.fr/lagglo-mon-territoire/laval-agglo/les-34-communes/lactu-de-nos-communes/installations-lumineuses-14262
  - title: Laval Agglomération - Le Grand Bal de Noël
    url: https://www.agglo-laval.fr/autres/actualites/le-grand-bal-de-noel-invite-la-ville-a-entrer-dans-la-danse-14261
  - title: Laval Agglomération - Marchés de Noël
    url: https://www.agglo-laval.fr/lagglo-mon-territoire/laval-agglo/les-34-communes/lactu-de-nos-communes/les-marches-de-noel-14263
  - title: Laval Tourisme - Lumières de Laval 2026
    url: https://www.laval-tourisme.com/sortez-vibrez/le-plein-d-evenements/les-lumieres-de-laval/
  - title: Laval Tourisme - Croisière des Lumières 2026
    url: https://www.laval-tourisme.com/offres/croisiere-des-lumieres-2026-laval-fr-6854586/
  - title: Laval Agglomération - Réseau TUL
    url: https://www.agglo-laval.fr/utile-au-quotidien/transports-et-mobilites/tul
eventEndsAt: 2027-01-10
reviewAt: 2026-11-18
topic:
  key: evenements|laval|lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere|2026
  keywords:
    - Lumières de Laval 2026
    - Noël Laval 2026 famille
    - marchés de Noël Laval 2026
    - grande roue Laval enfants
    - croisière Lumières Laval tarif
slug: lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere
status: published
publishedAt: 2026-10-30T09:27:15.012Z
updatedAt: 2026-11-13T07:36:29.883Z
readingTime: 7
affiliate:
  enabled: true
  type: travel
  destination: Laval
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/index.md
  targetSha: f3e0be13d74d728adb53f7d5dab68c82343fd075
  targetUrl: /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/
  decision: Choisir une soirée après le lancement en connaissant les horaires actuels des illuminations et les contraintes de réservation et d'arrivée pour la croisière.
  affiliationPotential: Conserver le lien Booking.com Hôtel et Apparts Marin; aucune croisière des Lumières sur les partenaires identifiée lors de la recherche, vérifier à nouveau avant rédaction.
  gsc:
    retrievedAt: 2026-11-27T09:15:00+01:00
    dataThrough: 2026-11-25
    signal: uncertain
    basis: "Visibilité récente : 228 impressions sur trois jours, puis 14 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-23
    recentEnd: 2026-11-25
    peakImpressions: 228
    recentImpressions: 14
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - date illumination laval 2026
      - illumination laval 2026
      - illuminations laval 2026
      - laval illumination 2026
      - illumination de noel laval 2026
---

## Mission retenue
Actualiser les Lumières de Laval 2026, déjà commencées.

## Pourquoi cette mission
Candidat rapidDrop à forte perte d'exposition, cause inconnue. Le Parc Phoenix vient d'être actualisé sur master; ne pas le reprendre. Laval présente une correction indépendante vérifiée: la page municipale indique désormais 17h30 pour le pont Aristide-Briand, contre 17h dans l'article. Le programme municipal apporte aussi les modalités d'embarquement absentes du guide.

## Décision du lecteur
Choisir un soir et une formule gratuite ou payante sans arriver trop tôt ni manquer le bateau.

## Faits à traiter
- Corriger l'heure du pont à 17h30 selon la page des installations et vérifier les exceptions des 24 et 31 décembre dans le programme; signaler les divergences si nécessaire. L'ouverture du 21 novembre est passée, ne plus la présenter au futur.
- Programme municipal: embarquement quinze minutes avant le départ, face au Cinéville; réservation obligatoire dix jours avant annoncée dans le programme, vérifier les modalités actuelles auprès de l'office. Calendrier détaillé de la croisière actualisé, ne pas présumer des places. Préserver durée, tarifs, gratuités, conditions d'échange et distinction des dîners.
- Ajouter si utile le Solstice du Quarante gratuit le 19 décembre (10h-18h), et la course des lucioles du 11 décembre, en vérifiant les modalités. Conserver les marchés, la roue, les budgets, l'accessibilité, les transports et les crédits des images.

## Sources de départ
- https://www.agglo-laval.fr/lagglo-mon-territoire/laval-agglo/les-34-communes/lactu-de-nos-communes/installations-lumineuses-14262
- https://www.agglo-laval.fr/autres/actualites/le-grand-bal-de-noel-invite-la-ville-a-entrer-dans-la-danse-14261
- https://www.laval.fr/fileadmin/Galeries_photos_et_videos/Actualit%C3%A9_Agenda/2026/EVENEMENTS/LUMIERES_DE_LAVAL_2026/Lumieres_de_Laval_2026_-_tout_un_programme.pdf
- https://www.laval-tourisme.com/offres/croisiere-des-lumieres-2026-laval-fr-6854586/
- https://www.laval-tourisme.com/sortez-vibrez/le-plein-d-evenements/les-lumieres-de-laval/

## Affiliation
Conserver et revérifier https://www.booking.com/hotel/fr/marin-laval.fr.html ; aucune offre de croisière partenaire identifiée, ne pas substituer une prestation différente.

## Continuations internes
Conserver les guides existants sur les transports en Mayenne et le séjour de trois jours.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/index.md

---
title: "Lumières de Laval 2026 en famille: balade gratuite, marchés, roue et croisière"
subtitle: Parcours lumineux, horaires, dates et budget pour choisir sa sortie
summary: Du 21 novembre 2026 au 3 janvier 2027, découvrez gratuitement les lanternes, le Vieux-Laval illuminé et le Bal du Château-Neuf. Marchés, grande roue et croisières complètent la sortie selon votre budget.
category: evenements
location:
  city: Laval
  department: Mayenne
  region: Pays de la Loire
image:
  src: /images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere.webp
  alt: Illuminations des Lumières de Laval 2025 sur le pont Aristide-Briand à la nuit tombée
sources:
  - title: Laval Agglomération - Installations lumineuses 2026
    url: https://www.agglo-laval.fr/lagglo-mon-territoire/laval-agglo/les-34-communes/lactu-de-nos-communes/installations-lumineuses-14262
  - title: Laval Agglomération - Le Grand Bal de Noël
    url: https://www.agglo-laval.fr/autres/actualites/le-grand-bal-de-noel-invite-la-ville-a-entrer-dans-la-danse-14261
  - title: Laval Agglomération - Marchés de Noël
    url: https://www.agglo-laval.fr/lagglo-mon-territoire/laval-agglo/les-34-communes/lactu-de-nos-communes/les-marches-de-noel-14263
  - title: Laval Tourisme - Lumières de Laval 2026
    url: https://www.laval-tourisme.com/sortez-vibrez/le-plein-d-evenements/les-lumieres-de-laval/
  - title: Laval Tourisme - Croisière des Lumières 2026
    url: https://www.laval-tourisme.com/offres/croisiere-des-lumieres-2026-laval-fr-6854586/
  - title: Laval Agglomération - Réseau TUL
    url: https://www.agglo-laval.fr/utile-au-quotidien/transports-et-mobilites/tul
eventEndsAt: 2027-01-10
reviewAt: 2026-11-18
topic:
  key: evenements|laval|lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere|2026
  keywords:
    - Lumières de Laval 2026
    - Noël Laval 2026 famille
    - marchés de Noël Laval 2026
    - grande roue Laval enfants
    - croisière Lumières Laval tarif
slug: lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere
status: published
publishedAt: 2026-10-30T09:27:15.012Z
updatedAt: 2026-11-13T07:36:29.883Z
readingTime: 7
affiliate:
  enabled: true
  type: travel
  destination: Laval
---

Les **Lumières de Laval 2026** se déroulent du **21 novembre 2026 au 3 janvier 2027** sur le thème du « Grand Bal de Noël ». Pour profiter de la fête avec les enfants, **la promenade entre les décors lumineux ne nécessite aucun billet**. La grande roue reste installée jusqu'au **10 janvier 2027**; marchés et croisières ont leurs propres dates.

## Où voir gratuitement les illuminations avec les enfants ?

La [Ville de Laval présente les installations du parcours](https://www.agglo-laval.fr/lagglo-mon-territoire/laval-agglo/les-34-communes/lactu-de-nos-communes/installations-lumineuses-14262). Pour une balade familiale, voici les principaux arrêts à choisir selon le temps et l'envie des enfants:

- **Place du 11-Novembre:** les *lanternes fantastiques* forment un jardin de contes avec animaux géants, papillons, fleurs et champignons lumineux.
- **Grande Rue, dans le Vieux-Laval:** lustres, robes et miroirs composent un grand bal d'hiver.
- **Rue des Orfèvres:** ballons et éclairages multicolores rappellent un bal populaire.
- **Rue du Pin-Doré:** des sphères irisées suspendues créent le *Bal des bulles*.
- **Pont Aristide-Briand:** une voûte de guirlandes et de lustres lumineux habille le passage au-dessus de la Mayenne.
- **Esplanade du Château-Neuf, place de la Trémoille:** boule à facettes géante, bonshommes de neige lumineux et jukebox interactif pour choisir la musique.

Il n'est pas nécessaire de parcourir tous ces lieux: pour de jeunes enfants, les lanternes et le Château-Neuf constituent déjà deux haltes marquantes.

**Horaires à distinguer:** le pont Aristide-Briand s'illumine dès **17 h**, jusqu'à **22 h du dimanche au mercredi** et **minuit du jeudi au samedi**, avec une prolongation jusqu'à **2 h les nuits des 24 et 31 décembre**. Les décors des trois rues du Vieux-Laval commencent à **17 h 30**, jusqu'à 22 h ou minuit selon les mêmes jours. Le **Bal du Château-Neuf** fonctionne également de **17 h 30 à 22 h ou minuit**. Pour les lanternes, vérifiez les horaires détaillés sur le site officiel avant de vous déplacer.

**Soirée d'ouverture du samedi 21 novembre:** selon [Laval Agglomération](https://www.agglo-laval.fr/autres/actualites/le-grand-bal-de-noel-invite-la-ville-a-entrer-dans-la-danse-14261), le **feu d'artifice est prévu à 18 h 45 depuis le pont de l'Europe**; le lancement officiel des illuminations et du Bal de Noël suit **à 19 h sur l'esplanade du Château-Neuf**. Ce sont deux moments distincts. Avec de petits enfants sensibles au bruit ou à la foule, une autre soirée peut être plus confortable.

## Les trois marchés de Noël: dates et horaires

<!-- article-image-body:01 -->

![Place du 11-Novembre à Laval après son réaménagement, lieu des marchés de Noël](/images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere-body-01.webp)

*Photo: [Onca53](https://commons.wikimedia.org/wiki/File:Place_du_11-Novembre_(2026)_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

- **25 au 29 novembre, place du 11-Novembre:** premier marché de Noël, avec environ 20 exposants.
- **4 au 6 décembre, place du 11-Novembre:** marché des Lumières, avec une trentaine d'artisans-créateurs.
- **9 au 13 décembre, square de Boston:** second marché de Noël, avec environ 50 exposants, près de la grande roue.

Les deux marchés de Noël (25-29 novembre et 9-13 décembre) annoncent les mêmes horaires: **11 h-20 h le mercredi et le jeudi**, **11 h-23 h le vendredi et le samedi**, puis **10 h-20 h le dimanche**.

Le marché des créateurs ouvre **vendredi 4 décembre de 12 h à 22 h**, **samedi 5 de 9 h 30 à 22 h** et **dimanche 6 de 11 h à 20 h**.

Pour associer marché, roue et illuminations, les **5-6 décembre** ou les **12-13 décembre** sont de bons choix. Les 12 et 13 décembre, le marché se trouve directement à côté de la roue. **Les 7 et 8 décembre, aucun de ces trois marchés n'est annoncé**: les illuminations et la grande roue restent toutefois accessibles selon leurs horaires.

## Grande roue: tarifs et conditions pour les enfants

<!-- article-image-body:02 -->

![Kiosque du square de Boston à Laval, où est installée la grande roue de Noël](/images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere-body-02.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Laval_-_square_de_Boston_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La grande roue du **square de Boston** fonctionne du **21 novembre au 10 janvier**. Elle ouvre tous les jours:

- **Hors vacances scolaires:** 14 h-22 h, jusqu'à minuit les vendredis et samedis.
- **Pendant les vacances scolaires:** 11 h-23 h, jusqu'à minuit les vendredis et samedis.

En cabine classique ou PMR, les tarifs annoncés sont de **6 € par adulte**, **4 € par enfant de moins de 10 ans** et **gratuit pour les moins de 2 ans**. Les moins de 10 ans doivent être accompagnés d'un adulte. Pour voir la ville illuminée depuis la roue, choisissez une heure après 17 h.

La présence d'une cabine PMR est confirmée, mais les modalités concrètes d'embarquement sont à vérifier selon les besoins de la personne.

## Croisière des Lumières: horaires, prix et réservation

La croisière promenade sur le **Vallis Guidonis** part du **25 quai André-Pinçon**. Elle dure **1 h 15, de 16 h 45 à 18 h**, avec les commentaires du capitaine.

La période annoncée va du **25 novembre au 30 décembre**, mais les départs ne sont **pas quotidiens**. La [fiche de réservation de Laval Tourisme](https://www.laval-tourisme.com/offres/croisiere-des-lumieres-2026-laval-fr-6854586/) détaille notamment les **25-28 novembre**, **2-3, 5-6, 9, 12-13, 16-17, 20, 23 et 26-27 décembre**. Tous les jours jusqu'au 30 décembre n'y sont pas encore détaillés. Les **24 et 25 décembre sont exclus**: contrôlez le départ effectivement proposé avant d'organiser la journée. Les départs et les places proposées sont à vérifier auprès de Laval Tourisme.

Le tarif est de **12 € par personne**, gratuit pour les **moins de 2 ans**. Les billets sont annoncés **non repris et non échangés**. Il faut donc choisir la date avec soin.

Ne confondez pas cette promenade avec les **dîners-croisières**, proposés à partir de **58 € par adulte et 30 € par enfant de moins de 12 ans**, ou les soirées musicales à **73 € et 37 €**: ce sont des prestations et des horaires différents.

## Quel budget pour une famille de quatre personnes ?

Pour **2 adultes et 2 enfants de 6 et 9 ans**, hors repas, achats au marché et transport:

- **Promenade dans les rues illuminées:** sans billet d'entrée pour la promenade.
- **Grande roue:** **20 €** pour les quatre.
- **Croisière promenade:** **48 €** pour les quatre.
- **Grande roue et croisière:** **68 €** au total.

Le **samedi 12 décembre** permet en principe de combiner le marché du square de Boston, la roue et un départ de croisière annoncé, **à condition qu'il reste des places**. Pour une sortie plus souple avec de jeunes enfants, la promenade et éventuellement la roue évitent l'horaire fixe du bateau.

## Accès, poussette et besoins des bébés

Les principaux points de repère sont la **place du 11-Novembre** pour les marchés de novembre et des créateurs, le **square de Boston** pour la roue et le marché du 9 au 13 décembre, et le **quai André-Pinçon** pour la croisière.

Le réseau **TUL** annonce la **gratuité des transports les mercredis, week-ends et jours fériés**. Sa navette gratuite de centre-ville circule du lundi au samedi, mais n'est pas annoncée le dimanche. Vérifiez les horaires du retour si vous restez après les illuminations. Pour les déplacements au-delà de Laval, consultez notre [guide pour se déplacer en Mayenne avec des enfants sans voiture](/articles/vie-pratique/se-deplacer-en-mayenne-avec-des-enfants-sans-voiture-bus-tad-et-ter/).

La foule peut compliquer la circulation avec une poussette aux heures les plus fréquentées. Pour le **bateau**, les conditions d'embarquement et de rangement d'une poussette, ainsi que l'accessibilité, doivent être confirmées auprès de l'organisateur. Aucun micro-ondes public ni espace à langer propre à l'événement n'a été confirmé: prévoyez une solution pour le repas et le change du bébé.

## Où dormir pour profiter des Lumières ?

<!-- article-image-body:03 -->

![Façade de la gare ferroviaire de Laval, près des hébergements du centre-ville](/images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere-body-03.webp)

*Photo: [Fab5669](https://commons.wikimedia.org/wiki/File:Laval_-_gare_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Pour une famille arrivant en train ou restant le week-end, l'[Hôtel et Apparts Marin à Laval](https://www.booking.com/hotel/fr/marin-laval.fr.html), près de la gare, propose des chambres et des appartements, dont certains avec cuisine. Un lit bébé est indiqué sur demande pour les enfants de 0 à 2 ans. Vérifiez la capacité du logement, la confirmation de l'équipement, le tarif et les conditions d'annulation pour vos dates; aucune disponibilité n'est présumée.

Si vous prolongez votre séjour, notre [itinéraire de trois jours en Mayenne avec des enfants](/articles/voyages/mayenne-en-famille-pendant-3-jours-laval-sainte-suzanne-et-chateau-gontier/) propose aussi Sainte-Suzanne et Château-Gontier-sur-Mayenne.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/exposition-trafic-especes-laval-famille-2026/ | Trafic d’espèces à Laval: une enquête gratuite à vivre en famille | sorties | Laval, Mayenne, Pays de la Loire
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: horaires, animations et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/activites/cremieu-en-famille-balade-gratuite-dans-la-cite-medievale/ | Crémieu en famille: balade gratuite dans la cité médiévale | activites | Crémieu, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/maison/composteur-gratuit-a-laval-agglomeration-quelle-solution-pour-votre-logement/ | Composteur gratuit à Laval Agglomération: quelle solution pour votre logement ? | maison | Laval, Mayenne, Pays de la Loire
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: balade gratuite, marchés, roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/le-lait-a-la-loupe-a-laval-faut-il-reserver-avec-des-enfants/ | Le lait à la loupe à Laval: faut-il réserver avec des enfants? | evenements | Laval, Mayenne, Pays de la Loire
- /articles/voyages/mayenne-en-famille-pendant-3-jours-laval-sainte-suzanne-et-chateau-gontier/ | Mayenne en famille pendant 3 jours: Laval, Sainte-Suzanne et Château-Gontier | voyages | Laval, Mayenne, Pays de la Loire
- /articles/voyages/refuge-de-l-arche-en-famille-decouvrir-les-animaux-recueillis-et-preparer-sa-visite/ | Refuge de l’Arche en famille: découvrir les animaux recueillis et préparer sa visite | voyages | Château-Gontier-sur-Mayenne, Mayenne, Pays de la Loire
- /articles/vie-pratique/se-deplacer-en-mayenne-avec-des-enfants-sans-voiture-bus-tad-et-ter/ | Se déplacer en Mayenne avec des enfants sans voiture: bus, TAD et TER | vie-pratique | Mayenne, Pays de la Loire
- /articles/activites/grottes-de-saulges-en-famille-margot-ou-rochefort-selon-l-age/ | Grottes de Saulges en famille: découvrir Margot, Rochefort et le musée | activites | Thorigné-en-Charnie, Mayenne, Pays de la Loire
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- refresh | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-11-13T07:36:29.975Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- refresh | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-11-22T03:33:27.882Z
- refresh | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-11-23T00:35:31.900Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- refresh | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-11-17T09:28:43.094Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z
- refresh | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-11-23T13:28:43.287Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
