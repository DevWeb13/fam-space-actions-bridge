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
title: "Gastronomades 2026 à Angoulême en famille: faut-il prévoir le week-end ?"
subtitle: Dates confirmées, intérêt avec des enfants et stratégie pour organiser la visite sans dépendre d'un programme 2026 encore incomplet
summary: Les Gastronomades reviennent du 27 au 29 novembre 2026. Voici ce qui est déjà confirmé et comment décider d'y aller en famille.
slug: gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end
status: published
publishedAt: 2026-09-19T22:56:58+02:00
updatedAt: 2026-09-20T11:45:04+02:00
eventEndsAt: 2026-11-29
category: evenements
readingTime: 6
location:
  city: Angoulême
  department: Charente
  region: Nouvelle-Aquitaine
topic:
  key: evenements|angouleme|gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end|2026
  keywords:
    - Gastronomades 2026 Angoulême
    - Gastronomades en famille
image:
  src: /images/articles/2026/09/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end.webp
  alt: Les Halles d’Angoulême
sources:
  - title: Gastronomades 2026 - Chambre de Métiers et de l'Artisanat Nouvelle-Aquitaine
    url: https://www.metiers-art.com/Gastronomades-2026
  - title: Site officiel des Gastronomades
    url: https://gastronomades.fr/
  - title: Espace Carat - site officiel
    url: https://www.espace-carat.fr/
affiliate:
  enabled: true
  type: travel
  destination: Angoulême
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(09)/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/index.md
  targetSha: 1f57044e28b8639b7833265dc8d6ac2e35247753
  targetUrl: /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/
  decision: Choisir entre le salon payant à l'Espace Carat du 27 au 29 novembre et les rendez-vous gratuits aux Halles les 4 et 5 décembre, puis organiser une visite familiale selon les animations, horaires, coûts et transports réellement annoncés.
  affiliationPotential: Conserver le lien Booking.com existant pour les familles qui prolongent la visite en séjour; aucune billetterie partenaire naturelle, billets du salon vendus sur place.
  gsc:
    retrievedAt: 2026-11-19T01:30:40+01:00
    dataThrough: 2026-11-16
    signal: uncertain
    basis: "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer. Diagnostic sur 1 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-03
    peakEnd: 2026-11-09
    recentStart: 2026-11-10
    recentEnd: 2026-11-16
    peakImpressions: 266
    recentImpressions: 130
    commonQueries: 1
    positionDelta: 0.159
    impressionRatio: 0.282
    focusQueries:
      - gastronomades 2026
      - gastronomades 2025
      - le détail des animations
      - les tarifs
      - gastronomade 2026
---

## Mission retenue
Actualiser le guide familial des Gastronomades 2026 à Angoulême, désormais doté d'un programme officiel complet et de deux lieux distincts.

## Pourquoi cette mission
L'article affirme encore que le programme 2026 est indisponible et que le tarif de 4 € n'est pas confirmé. Depuis, l'organisateur a publié les horaires, tarifs, accès et rendez-vous des 27-29 novembre à l'Espace Carat et des 4-5 décembre aux Halles. Amélioration indépendante de la baisse GSC, dont la cause reste incertaine.

## Décision du lecteur
Choisir le lieu et le jour qui correspondent à l'âge et aux intérêts des enfants, estimer le budget et préparer un trajet réaliste.

## Faits à traiter
- Espace Carat, 27-29 novembre: vendredi 10-19 h, samedi 10-22 h, dimanche 10-18 h; entrée 4 €, gratuite avant 14 ans; billetterie sur place.
- Halles d'Angoulême, 4-5 décembre, 9-15 h: accès gratuit, cuisines du monde et recettes partagées; ne pas confondre les deux rendez-vous.
- Programme daté des démonstrations, concours et activités familiales: sélectionner quelques temps forts sans inventer d'ateliers enfants ni de conditions d'inscription.
- Accès Carat: parking gratuit et bus STGA ligne A, arrêt Parc Expo Carat. Vérifier les horaires de transport du jour.
- Préserver photo et crédit Wikimedia, conseils de budget, prudence sur les jeunes enfants, lien destination Angoulême et hébergement Booking.com; corriger introduction, sous-titre, conclusion, date de fin d'événement et références périmées.

## Sources de départ
- Organisateur: https://gastronomades.fr/
- Informations pratiques: https://gastronomades.fr/infos-pratiques/
- Programme municipal publié le 12 novembre: https://www.angouleme.fr/agenda/les-gastronomades-programme-complet/
- Halles, publication municipale du 17 novembre: https://www.angouleme.fr/agenda/les-gastronomades-aux-halles-dangouleme/

## Affiliation
Conserver le Mercure Angoulême Hôtel de France via Booking.com pour les familles venues de loin; pas de lien d'achat officiel à ajouter dans le corps lorsque l'entrée est vendue sur place.

## Continuations internes
- Renvoi à la destination Angoulême pour les autres visites familiales.
- Éviter de créer un second article sur les Halles: les deux étapes relèvent de ce même festival.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(09)/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/index.md

---
title: "Gastronomades 2026 à Angoulême en famille: faut-il prévoir le week-end ?"
subtitle: Dates confirmées, intérêt avec des enfants et stratégie pour organiser la visite sans dépendre d'un programme 2026 encore incomplet
summary: Les Gastronomades reviennent du 27 au 29 novembre 2026. Voici ce qui est déjà confirmé et comment décider d'y aller en famille.
slug: gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end
status: published
publishedAt: 2026-09-19T22:56:58+02:00
updatedAt: 2026-09-20T11:45:04+02:00
eventEndsAt: 2026-11-29
category: evenements
readingTime: 6
location:
  city: Angoulême
  department: Charente
  region: Nouvelle-Aquitaine
topic:
  key: evenements|angouleme|gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end|2026
  keywords:
    - Gastronomades 2026 Angoulême
    - Gastronomades en famille
image:
  src: "/images/articles/2026/09/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end.webp"
  alt: "Les Halles d’Angoulême"
sources:
  - title: Gastronomades 2026 - Chambre de Métiers et de l'Artisanat Nouvelle-Aquitaine
    url: https://www.metiers-art.com/Gastronomades-2026
  - title: Site officiel des Gastronomades
    url: https://gastronomades.fr/
  - title: Espace Carat - site officiel
    url: https://www.espace-carat.fr/
affiliate:
  enabled: true
  type: travel
  destination: Angoulême
---
<!-- article-image-credit -->
*Photo: [Remi Jouan](https://commons.wikimedia.org/wiki/File:Angouleme_-_Halles_(1).JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Les Gastronomades reviennent à Angoulême les **vendredi 27, samedi 28 et dimanche 29 novembre 2026**. Ces trois dates sont déjà confirmées par la [Chambre de Métiers et de l’Artisanat Nouvelle-Aquitaine](https://www.metiers-art.com/Gastronomades-2026), qui prépare notamment la présence d’artisans d’art autour des arts de la table.

Pour une famille, la vraie question n’est pourtant pas seulement « est-ce que l’événement a lieu ? ». Il faut surtout savoir s’il mérite un déplacement, combien de temps lui consacrer et s’il vaut mieux attendre le programme détaillé avant d’organiser un week-end.

À ce stade, la réponse est assez nette: **les dates 2026 peuvent être bloquées dans l’agenda, mais il est encore trop tôt pour construire une journée précise autour d’ateliers ou de démonstrations**. Le [site officiel des Gastronomades](https://gastronomades.fr/) affiche toujours le programme de l’édition 2025. Les horaires, tarifs et animations visibles sur ces pages ne doivent donc pas être pris pour ceux de 2026.

## Est-ce une vraie sortie avec des enfants ?

Les Gastronomades ne sont pas un parc de loisirs ni un festival spécifiquement destiné aux enfants. L’intérêt familial vient plutôt du format: voir travailler des chefs et des artisans, découvrir des produits, assister à des démonstrations et transformer la gastronomie en expérience concrète plutôt qu’en simple repas.

Le principe durable de l’événement est bien documenté par [l’organisateur](https://gastronomades.fr/): producteurs, artisans, chefs, apprentis et amateurs s’y rencontrent autour d’un parcours « du champ à l’assiette ». Pour 2026, la CMA confirme déjà une composante intéressante à regarder avec des enfants: des créations liées aux **arts de la table**, avec notamment céramique, porcelaine, verre, coutellerie, bois et linge de table.

En revanche, ne promettez pas encore aux enfants un atelier précis. Le programme familial 2026 n’est pas publié de façon suffisamment complète pour savoir quelles animations seront accessibles librement, lesquelles demanderont une inscription et quels âges seront réellement concernés.

**Notre conseil:** si vos enfants aiment regarder cuisiner, goûter, poser des questions aux producteurs ou découvrir des métiers, l’événement mérite d’être surveillé. Si vous cherchez avant tout des activités conçues pour occuper de jeunes enfants pendant plusieurs heures, attendez le programme 2026 avant de faire le déplacement spécialement pour les Gastronomades.

## Une demi-journée suffit-elle ?

Pour une famille locale ou située à moins d’une heure d’Angoulême, **une demi-journée est le choix le plus raisonnable tant que le programme détaillé n’est pas sorti**. Cela évite d’imposer aux enfants une journée entière dans un salon et laisse la possibilité de cibler deux ou trois temps forts une fois les horaires connus.

Les éditions précédentes donnent une idée de la densité habituelle: le site officiel décrit à l’Espace Carat des démonstrations, joutes culinaires, ateliers, producteurs, artisans et plusieurs espaces de restauration. C’est utile pour comprendre le type de visite, mais ce contenu correspond encore à **2025** et ne constitue pas le programme 2026.

Le bon réflexe sera donc de revenir sur le [site officiel](https://gastronomades.fr/) à l’approche de novembre et de bâtir la visite autour de quelques rendez-vous choisis, plutôt que d’essayer de tout voir.

## Faut-il venir le vendredi ou pendant le week-end ?

Les trois journées 2026 sont confirmées, mais leurs horaires et leur programmation grand public ne le sont pas encore sur le site officiel. Impossible, par conséquent, de recommander honnêtement le vendredi, le samedi ou le dimanche sur la seule base des horaires et animations de 2025.

Avec des enfants, le meilleur jour dépendra surtout des ateliers et démonstrations que l’organisateur annoncera. Attendre ce programme avant de choisir sa journée est plus utile que de réserver son déplacement au hasard dès maintenant.

## Quel budget prévoir ?

Le point le plus important est de **ne pas reprendre le tarif 2025 comme tarif 2026**. Le site officiel affiche encore une entrée à 4 € et la gratuité pour les moins de 14 ans, mais ces conditions appartiennent à l’édition précédente tant qu’elles n’ont pas été reconfirmées pour les 27, 28 et 29 novembre 2026.

Même si l’entrée 2026 reste modeste, elle ne représentera de toute façon qu’une partie du budget familial. Les Gastronomades sont aussi un lieu de dégustation, de restauration et d’achat auprès de producteurs et artisans. Pour éviter les dépenses qui s’additionnent sans qu’on s’en rende compte, mieux vaut distinguer avant de partir:

- le budget d’accès à l’événement, lorsque le tarif 2026 sera publié ;
- le repas ou les dégustations sur place ;
- une enveloppe facultative pour les produits ou créations que vous souhaitez rapporter.

Avec des enfants, fixer cette dernière enveloppe à l’avance est plus efficace que de considérer chaque stand comme une petite dépense isolée.

## Où ont lieu les Gastronomades 2026 ?

La programmation 2026 est annoncée autour d’Angoulême et l’Espace Carat reste le site associé à l’événement. L’adresse officielle de l’équipement est **54 avenue Jean-Mermoz, 16340 L’Isle-d’Espagnac**, telle qu’indiquée par [l’Espace Carat](https://www.espace-carat.fr/).

Pour l’itinéraire, utilisez directement [l’adresse dans Google Maps](https://www.google.com/maps/search/?api=1&query=Espace+Carat+54+avenue+Jean+Mermoz+16340+L%27Isle-d%27Espagnac).

Attention toutefois à une autre confusion possible: les éditions précédentes comportaient également des rendez-vous dans Angoulême. Tant que le programme 2026 complet n’est pas publié, **ne partez pas du principe que toutes les animations auront lieu au même endroit**. Vérifiez l’adresse de chaque rendez-vous retenu avant le départ.

## Venir seulement pour la journée ou dormir à Angoulême ?

Pour une famille qui habite à proximité, les informations disponibles aujourd’hui ne justifient pas à elles seules de transformer la visite en week-end: une demi-journée ou une journée ciblée suffit probablement.

Une nuit devient plus logique si vous venez de loin **et** si le futur programme vous donne envie de suivre des temps forts sur deux jours. Elle peut aussi permettre de séparer le salon d’une promenade dans Angoulême plutôt que d’enchaîner visite, centre-ville et route du retour avec des enfants fatigués. Notre guide [Angoulême en famille](https://www.fam-space.fr/destinations/nouvelle-aquitaine/charente/angouleme/) aide à construire cette deuxième partie du séjour sans multiplier les trajets.

Si vous décidez finalement de dormir sur place, le [Mercure Angoulême Hôtel de France sur Booking.com](https://www.booking.com/hotel/fr/angouleme-de-france.fr.html) constitue une option cohérente pour prolonger le séjour dans le centre: Booking.com indique des chambres familiales et un parking privé. Ce choix privilégie le centre-ville plutôt que la proximité immédiate de l’Espace Carat ; il est donc surtout pertinent si vous voulez aussi profiter d’Angoulême avant ou après l’événement. Vérifiez les disponibilités et les conditions pour vos dates avant de réserver.

Il est inutile, en revanche, de réserver un hébergement uniquement par peur de manquer quelque chose: attendez de voir si le programme 2026 contient réellement deux journées d’animations qui intéressent votre famille, puis comparez les conditions et disponibilités aux dates retenues.

## Ce qu’il faut vérifier avant de partir

À quelques semaines de l’événement, quatre informations devront être contrôlées sur le [site officiel des Gastronomades](https://gastronomades.fr/): **les horaires 2026, le tarif 2026, le programme détaillé et les éventuelles inscriptions aux ateliers ou animations**.

C’est particulièrement important cette année car le site conserve encore beaucoup de pages datées de novembre 2025. Une date comme « samedi 29 novembre » ou « dimanche 30 novembre » visible dans une fiche d’atelier est un bon signal qu’il s’agit de l’ancienne édition: en 2026, les Gastronomades ont lieu du **vendredi 27 au dimanche 29 novembre**.

## Notre verdict pour une famille

Les Gastronomades 2026 sont déjà une sortie crédible à noter pour la fin novembre, surtout avec des enfants assez grands pour s’intéresser à la cuisine, aux produits et aux métiers. Les **27, 28 et 29 novembre 2026** sont fiables ; le reste doit encore être affiné.

Pour une famille locale, nous viserions pour l’instant **une demi-journée**, à ajuster lorsque le programme sortira. Pour une famille venant de loin, nous n’organiserions un week-end complet que si plusieurs animations 2026 justifient réellement deux jours sur place.

C’est moins spectaculaire qu’une recommandation immédiate, mais beaucoup plus utile: aujourd’hui, **réservez les dates, pas encore votre planning détaillé**.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/ou-dormir-a-angouleme-avec-des-enfants-pour-visiter-la-ville-a-pied/ | Où dormir à Angoulême avec des enfants pour visiter la ville à pied | voyages | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/sorties/musee-de-la-bd-a-angouleme-en-famille-tarifs-horaires-et-conseils-de-visite/ | Musée de la BD à Angoulême en famille: tarifs, horaires et conseils de visite | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/ | Bayeux en famille: 1 ou 2 jours et quel budget prévoir | voyages | Bayeux, Calvados, Normandie
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/voyages/week-end-a-vallon-pont-d-arc-en-famille-quel-budget-prevoir/ | Week-end à Vallon-Pont-d'Arc en famille: quel budget prévoir? | voyages | Vallon-Pont-d'Arc, Ardèche, Auvergne-Rhône-Alpes
- /articles/voyages/bourges-en-famille-ou-dormir-pour-visiter-sans-voiture/ | Bourges en famille: où dormir pour visiter sans voiture | voyages | Bourges, Cher, Centre-Val de Loire
- /articles/voyages/mont-saint-michel-en-famille-en-2026-une-journee-ou-un-week-end-ou-dormir-et-quel-budget-prevoir/ | Mont-Saint-Michel en famille en 2026: une journée ou un week-end, où dormir et quel budget prévoir | voyages | Le Mont-Saint-Michel, Manche, Normandie
- /articles/voyages/chateauroux-avec-des-enfants-une-journee-suffit-elle-ou-faut-il-dormir-sur-place/ | Châteauroux avec des enfants: une journée suffit-elle ou faut-il dormir sur place? | voyages | Châteauroux, Indre, Centre-Val de Loire
- /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | Gastronomades 2026 à Angoulême en famille: faut-il prévoir le week-end ? | evenements | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/sorties/ete-actif-en-charente-2026-des-sorties-familiales-a-petit-prix-jusqu-au-29-aout/ | Été actif en Charente 2026: des sorties familiales à petit prix jusqu'au 29 août | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/vie-pratique/france-services-en-charente-ou-obtenir-de-l-aide-pour-ses-demarches-administratives/ | France services en Charente: où obtenir de l'aide pour ses démarches administratives ? | vie-pratique | Charente, Nouvelle-Aquitaine
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes

### Historique Radar lié

- refresh | /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | 2026-11-08T22:29:18.327Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
