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
title: "Lumières de Laval 2026 en famille: marchés, grande roue et croisière"
subtitle: Dates, horaires et tarifs pour organiser une sortie avec les enfants
summary: Du 21 novembre 2026 au 3 janvier 2027, Laval célèbre le Bal de Noël. Retrouvez les dates des trois marchés, les tarifs de la grande roue et des croisières, les budgets familiaux et les accès.
category: evenements
location:
  city: Laval
  department: Mayenne
  region: Pays de la Loire
image:
  src: /images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere.webp
  alt: Illuminations des Lumières de Laval 2025 sur le pont Aristide-Briand à la nuit tombée
sources:
  - title: "Laval Tourisme - Lumières de Laval 2026: marchés, grande roue et croisières"
    url: https://www.laval-tourisme.com/sortez-vibrez/le-plein-d-evenements/les-lumieres-de-laval/
  - title: Laval Tourisme - Le Bal de Noël 2026
    url: https://www.laval-tourisme.com/offres/les-lumieres-de-laval-le-bal-de-noel-laval-fr-6059570/
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
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Laval
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/index.md
  targetSha: b394b8122d2bddcdf6b2cbb36de8ee0a6bc10cfe
  targetUrl: /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/
  decision: Choisir une promenade lumineuse gratuite adaptée aux enfants, avec les lieux et horaires précis, ou décider si la grande roue et la croisière payantes valent le budget.
  affiliationPotential: Conserver l'hébergement Booking.com Hôtel et Apparts Marin déjà présent, sans ajout artificiel.
  gsc:
    retrievedAt: 2026-11-13T03:30:25+01:00
    dataThrough: 2026-11-10
    signal: coverage_loss
    basis: "Visibilité récente : 228 impressions sur trois jours, puis 24 sur les trois derniers jours consolidés; cause non établie. Baisse d'exposition sur les requêtes visibles (ratio 0.125), sans recul de classement comparable établi."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 228
    recentImpressions: 24
    commonQueries: 2
    positionDelta: 0.394
    impressionRatio: 0.125
    focusQueries:
      - date illumination laval 2026
      - illumination laval 2026
      - laval illumination 2026
      - illumination de noel laval 2026
      - theme illumination laval 2026
---

## Mission retenue
Actualiser le guide des Lumières de Laval 2026, déjà riche sur les marchés, la grande roue et les croisières, mais presque muet sur le parcours d'illuminations gratuites qui constitue le cœur de la fête.

## Pourquoi cette mission
Signal GSC rapidDrop et coverage_loss: 228 impressions sur trois jours au pic, 24 récemment, sans recul de classement démontré. La baisse ne prouve pas une erreur SEO. Lacune éditoriale indépendante vérifiée: le guide annonce des illuminations à 17 h mais ne décrit ni les installations ni les lieux précis où les découvrir gratuitement.

## Décision du lecteur
Savoir où marcher gratuitement avec les enfants, à quelle heure voir les décors et comment combiner cette balade avec un marché, la roue ou une croisière sans acheter inutilement un billet.

## Faits à traiter
- Décrire sans allonger artificiellement le parcours officiel: lanternes fantastiques place du 11-Novembre, Grand Bal dans la Grande Rue, bal populaire rue des Orfèvres, bulles rue du Pin-Doré, pont Aristide-Briand et Bal du Château-Neuf place de la Trémoille.
- Distinguer les horaires des installations: notamment pont Aristide-Briand dès 17 h et Château-Neuf dès 18 h; vérifier les amplitudes selon les jours et les nuits des 24 et 31 décembre.
- Préciser le lancement du 21 novembre à 18 h 45, puis à 19 h, en distinguant feu d'artifice et mise en lumière; vérifier le lieu exact sur les sources municipales avant rédaction.
- Préserver intégralement les dates des trois marchés, tarifs et conditions de la roue, croisières, budgets, TUL, poussette, repas bébé, change, trois images et crédits, liens internes, sources et hébergement affilié. Ne pas promettre d'accessibilité non documentée.

## Sources de départ
- Ville et agglomération de Laval, installations lumineuses: https://www.agglo-laval.fr/lagglo-mon-territoire/laval-agglo/les-34-communes/lactu-de-nos-communes/installations-lumineuses-14262
- Laval Agglomération, Grand Bal de Noël et lancement: https://www.agglo-laval.fr/autres/actualites/le-grand-bal-de-noel-invite-la-ville-a-entrer-dans-la-danse-14261
- Laval Tourisme, balade illuminée dans le Vieux Laval: https://www.laval-tourisme.com/offres/balade-illuminee-dans-le-vieux-laval-laval-fr-6890766/
- Laval Tourisme, lanternes fantastiques: https://www.laval-tourisme.com/offres/lanternes-fantastiques-laval-fr-6890767/
- Laval Tourisme, Bal du Château-Neuf: https://www.laval-tourisme.com/offres/le-bal-du-chateau-neuf-laval-fr-6890771/

## Affiliation
Conserver le lien Booking.com vers Hôtel et Apparts Marin, utile aux familles qui dorment à Laval. Aucune autre offre vérifiée ne justifie un ajout.

## Continuations internes
- Garder les détails de déplacement départemental dans le guide Mayenne sans voiture déjà lié.
- Garder les prolongations de séjour dans l'itinéraire Mayenne trois jours déjà lié.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/index.md

---
title: "Lumières de Laval 2026 en famille: marchés, grande roue et croisière"
subtitle: Dates, horaires et tarifs pour organiser une sortie avec les enfants
summary: Du 21 novembre 2026 au 3 janvier 2027, Laval célèbre le Bal de Noël. Retrouvez les dates des trois marchés, les tarifs de la grande roue et des croisières, les budgets familiaux et les accès.
category: evenements
location:
  city: Laval
  department: Mayenne
  region: Pays de la Loire
image:
  src: "/images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere.webp"
  alt: "Illuminations des Lumières de Laval 2025 sur le pont Aristide-Briand à la nuit tombée"
sources:
  - title: "Laval Tourisme - Lumières de Laval 2026: marchés, grande roue et croisières"
    url: https://www.laval-tourisme.com/sortez-vibrez/le-plein-d-evenements/les-lumieres-de-laval/
  - title: Laval Tourisme - Le Bal de Noël 2026
    url: https://www.laval-tourisme.com/offres/les-lumieres-de-laval-le-bal-de-noel-laval-fr-6059570/
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
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Laval
---

Les **Lumières de Laval 2026** se tiennent du **21 novembre 2026 au 3 janvier 2027**, sur le thème du « Bal de Noël ». Les illuminations sont annoncées dès **17 h**, avec une soirée de lancement le **samedi 21 novembre à partir de 18 h 45**.

Pour venir en famille, le point important est le calendrier: les trois marchés de Noël ne sont pas ouverts en continu, la grande roue reste jusqu'au **10 janvier 2027** et les croisières n'ont lieu qu'à certaines dates.

## Les trois marchés de Noël: dates et horaires

<!-- article-image-body:01 -->

![Place du 11-Novembre à Laval après son réaménagement, lieu des marchés de Noël](/images/articles/2026/10/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere-body-01.webp)

*Photo: [Onca53](https://commons.wikimedia.org/wiki/File:Place_du_11-Novembre_(2026)_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

- **25 au 29 novembre, place du 11-Novembre:** premier marché de Noël, avec environ 20 exposants.
- **4 au 6 décembre, place du 11-Novembre:** marché des Lumières, consacré aux artisans-créateurs et aux cadeaux.
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

La période annoncée va du **25 novembre au 30 décembre**, mais les départs ne sont **pas quotidiens**. La fiche de Laval Tourisme détaille notamment les **25-28 novembre**, **2-3, 5-6, 9, 12-13, 16-17, 20, 23 et 26-27 décembre**. Tous les jours jusqu'au 30 décembre n'y sont pas encore détaillés. Les **24 et 25 décembre sont exclus**: contrôlez le départ effectivement proposé avant d'organiser la journée.

Le tarif est de **12 € par personne**, gratuit pour les **moins de 2 ans**. Les billets sont annoncés **non repris et non échangés**. Il faut donc choisir la date avec soin. Les détails et la réservation figurent dans les sources de Laval Tourisme en bas de l'article.

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

- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-metz-2026-en-famille-marches-et-sentier-des-lanternes/ | Noël à Metz 2026 en famille: marchés et Sentier des Lanternes | evenements | Metz, Moselle, Grand Est
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | Lumières de Laval 2026 en famille: marchés, grande roue et croisière | evenements | Laval, Mayenne, Pays de la Loire
- /articles/evenements/le-lait-a-la-loupe-a-laval-faut-il-reserver-avec-des-enfants/ | Le lait à la loupe à Laval: faut-il réserver avec des enfants? | evenements | Laval, Mayenne, Pays de la Loire
- /articles/voyages/mayenne-en-famille-pendant-3-jours-laval-sainte-suzanne-et-chateau-gontier/ | Mayenne en famille pendant 3 jours: Laval, Sainte-Suzanne et Château-Gontier | voyages | Laval, Mayenne, Pays de la Loire
- /articles/sorties/exposition-trafic-especes-laval-famille-2026/ | Trafic d’espèces à Laval: une enquête gratuite à vivre en famille | sorties | Laval, Mayenne, Pays de la Loire
- /articles/voyages/refuge-de-l-arche-en-famille-decouvrir-les-animaux-recueillis-et-preparer-sa-visite/ | Refuge de l’Arche en famille: découvrir les animaux recueillis et préparer sa visite | voyages | Château-Gontier-sur-Mayenne, Mayenne, Pays de la Loire
- /articles/vie-pratique/se-deplacer-en-mayenne-avec-des-enfants-sans-voiture-bus-tad-et-ter/ | Se déplacer en Mayenne avec des enfants sans voiture: bus, TAD et TER | vie-pratique | Mayenne, Pays de la Loire
- /articles/activites/grottes-de-saulges-en-famille-margot-ou-rochefort-selon-l-age/ | Grottes de Saulges en famille: découvrir Margot, Rochefort et le musée | activites | Thorigné-en-Charnie, Mayenne, Pays de la Loire
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie
- /articles/evenements/festi-di-natali-2026-a-bonifacio-le-marche-de-noel-en-famille/ | Festi di Natali 2026 à Bonifacio: le marché de Noël en famille | evenements | Bonifacio, Corse-du-Sud, Corse
- /articles/evenements/festi-momes-2027-a-longueau-et-glisy-les-spectacles-en-famille/ | Festi’Mômes 2027 à Longueau et Glisy: les spectacles en famille | evenements | Somme, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/lumieres-de-laval-2026-en-famille-marche-grande-roue-ou-croisiere/ | 2026-10-30T09:27:15.122Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
