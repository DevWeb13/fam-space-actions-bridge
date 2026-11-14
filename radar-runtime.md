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
title: "Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille"
subtitle: Billet daté ou Open, budget pour quatre, soirées fermées et parcours avec poussette au Parc Floral
summary: "Du 14 novembre 2026 au 24 janvier 2027, l'Odyssée Lumineuse revient au Parc Floral de Paris. Tarifs familiaux, dates de fermeture, spectacles et accès: les repères utiles pour organiser la soirée."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: /images/articles/2026/10/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille.webp
  alt: Vue du Parc floral de Paris en journée, hors parcours lumineux de l’Odyssée Lumineuse
sources:
  - title: "L'Odyssée Lumineuse - Paris: programme, horaires, fermetures, tarifs et FAQ 2026-2027"
    url: https://odysseelumineuse.fr/paris
  - title: Paris je t'aime - L'Odyssée Lumineuse au Parc Floral
    url: https://parisjetaime.com/eng/event/l-odyssee-lumineuse-parc-floral-paris-e661
  - title: "Ville de Paris - Parc Floral: accès et accessibilité"
    url: https://www.paris.fr/lieux/parc-floral-de-paris-1
  - title: "Ville de Paris - Jardin botanique: gratuité d'octobre à mars"
    url: https://www.paris.fr/pages/le-jardin-botanique-de-paris-3539/
eventEndsAt: 2027-01-24
topic:
  key: evenements|paris|odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille|2026
  keywords:
    - Odyssée Lumineuse Paris 2026 2027
    - Parc Floral illuminations enfants
    - billets Odyssée Lumineuse daté Open
    - Odyssée Lumineuse jours fermeture
slug: odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille
status: published
publishedAt: 2026-10-26T15:30:14.193Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Paris
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/index.md
  targetSha: b611b584dbafee5a1e87eb2881d13574a85f5357
  targetUrl: /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/
  decision: Pouvoir décider de maintenir ou non une sortie avec enfants par temps de pluie, sans acheter un billet non remboursable en croyant que la météo donne droit à un report.
  affiliationPotential: Conserver l'hébergement Abritel déjà présent pour les familles en séjour; ne pas inventer de billetterie partenaire.
  gsc:
    retrievedAt: 2026-11-14T03:26:00+01:00
    dataThrough: 2026-11-10
    signal: needs_query_check
    basis: "Visibilité récente : 69 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-27
    peakEnd: 2026-10-29
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 69
    recentImpressions: 10
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Odyssée Lumineuse Paris 2026 2027
      - Parc Floral illuminations enfants
      - billets Odyssée Lumineuse daté Open
      - Odyssée Lumineuse jours fermeture
---

## Mission retenue
Actualisation ciblée du guide de l'Odyssée Lumineuse au Parc Floral de Paris, dont la saison commence le 14 novembre 2026.

## Pourquoi cette mission
Le snapshot GSC signale une baisse de 69 à 10 impressions sur trois jours, sans diagnostic de cause SEO. Le guide couvre déjà les tarifs, fermetures et spectacles, mais ne répond pas explicitement à une question décisive pour une sortie nocturne en extérieur: l'événement est-il maintenu sous la pluie et que devient le billet? La FAQ de l'organisateur confirme une règle utile indépendante de la baisse GSC.

## Décision du lecteur
Choisir une soirée en connaissance des conditions météo et des risques d'un billet daté, notamment avec de jeunes enfants.

## Faits à traiter
- La FAQ officielle indique que le parcours accueille les visiteurs même sous la pluie; ne pas promettre un report météo automatique ni une annulation par l'organisateur en toute circonstance.
- Les billets sont annoncés non annulables et non échangeables; la FAQ mentionne la possibilité de revente sans en garantir les modalités. Conseiller vêtements chauds, imperméables et chaussures adaptées à la promenade extérieure.
- Vérifier les conditions actualisées avant achat, sans modifier les dates, 28 fermetures, horaires, prix datés/Open, gratuités, spectacles et budgets déjà correctement expliqués.
- Préserver intégralement l'accessibilité poussettes/PMR et ses réserves, les informations transport, toilettes et restauration, les deux photographies et leurs licences/crédits, les liens internes et l'hébergement existant.

## Sources de départ
- Organisateur, programme, FAQ météo, billetterie et conditions: https://odysseelumineuse.fr/paris
- Organisateur, accès aux réservations: https://odysseelumineuse.fr/reservation
- Ville de Paris, accès et accessibilité du Parc Floral: https://www.paris.fr/lieux/parc-floral-de-paris-1

## Affiliation
Conserver l'appartement Abritel existant, utile uniquement aux familles qui prolongent leur séjour. Aucune nouvelle offre de billetterie partenaire vérifiée.

## Continuations internes
- Conserver le renvoi vers le guide transports à Paris pour le choix des titres.
- Conserver le renvoi vers Vincennes en famille pour les visites de jour, sans les confondre avec l'événement nocturne.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/index.md

---
title: "Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille"
subtitle: Billet daté ou Open, budget pour quatre, soirées fermées et parcours avec poussette au Parc Floral
summary: "Du 14 novembre 2026 au 24 janvier 2027, l'Odyssée Lumineuse revient au Parc Floral de Paris. Tarifs familiaux, dates de fermeture, spectacles et accès: les repères utiles pour organiser la soirée."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: "/images/articles/2026/10/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille.webp"
  alt: "Vue du Parc floral de Paris en journée, hors parcours lumineux de l’Odyssée Lumineuse"
sources:
  - title: "L'Odyssée Lumineuse - Paris: programme, horaires, fermetures, tarifs et FAQ 2026-2027"
    url: https://odysseelumineuse.fr/paris
  - title: Paris je t'aime - L'Odyssée Lumineuse au Parc Floral
    url: https://parisjetaime.com/eng/event/l-odyssee-lumineuse-parc-floral-paris-e661
  - title: "Ville de Paris - Parc Floral: accès et accessibilité"
    url: https://www.paris.fr/lieux/parc-floral-de-paris-1
  - title: "Ville de Paris - Jardin botanique: gratuité d'octobre à mars"
    url: https://www.paris.fr/pages/le-jardin-botanique-de-paris-3539/
eventEndsAt: 2027-01-24
topic:
  key: evenements|paris|odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille|2026
  keywords:
    - Odyssée Lumineuse Paris 2026 2027
    - Parc Floral illuminations enfants
    - billets Odyssée Lumineuse daté Open
    - Odyssée Lumineuse jours fermeture
slug: odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille
status: published
publishedAt: 2026-10-26T15:30:14.193Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Paris
---
<!-- article-image-credit -->
*Photo: [Nora Mahfouf](https://commons.wikimedia.org/wiki/File:Parc_Floral_de_Paris_(2018).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **14 novembre 2026 au 24 janvier 2027**, l'Odyssée Lumineuse transforme le Parc Floral de Paris en parcours nocturne payant: lanternes géantes, aurores boréales mises en scène, **Féerie des Fontaines Lumineuses** sur le lac et spectacles d'ombres chinoises. Pour une sortie avec enfants, vérifiez d'abord les jours de fermeture et le type de billet avant de fixer votre soirée.

## Billet daté ou Open: combien coûte la sortie ?

Le billet **« enchanteur » daté**, valable pour une date choisie, coûte **13 € par adulte** et **11 € par enfant de 3 à 12 ans**. L'entrée est gratuite pour les moins de 3 ans. Le billet **Open**, non daté, coûte **18 € par adulte** et **16 € par enfant de 3 à 12 ans**. Le prix d'appel « à partir de 10 € » ne correspond pas au tarif adulte ordinaire.

Pour **deux adultes et deux enfants de 3 à 12 ans**, prévoyez **48 € en billets datés** ou **68 € en billets Open**, soit **20 € de différence**, hors transport, restauration et éventuels frais de billetterie. Avec un seul enfant de 5 ans et deux adultes, le billet daté revient à **37 €**.

Si votre date est certaine, le billet daté coûte moins cher. L'Open apporte de la souplesse pour choisir une soirée pendant la saison, sans permettre d'entrer les jours de fermeture. La FAQ indique que les billets **ne sont ni annulables ni échangeables** et évoque la revente comme possibilité: vérifiez les conditions exactes avant l'achat, surtout si la météo peut modifier votre projet.

Des tarifs particuliers existent: **10 € pour les demandeurs d'emploi, uniquement sur place avec justificatif**. La FAQ annonce aussi un **tarif étudiant à 10 €**, sans préciser aussi clairement ses modalités d'achat: vérifiez-les avant de vous déplacer. Les titulaires d'une **Carte Mobilité Inclusion (CMI) ou d'une carte d'invalidité** bénéficient, sous les conditions publiées, d'un billet gratuit à retirer sur place sur présentation de la carte. **L'accompagnant paie le tarif normal**. Un éventuel accès prioritaire ne signifie pas à lui seul que l'entrée est gratuite.

## Quelles soirées sont ouvertes ?

L'événement n'ouvre **pas tous les soirs**. L'organisateur annonce **28 dates de fermeture**:

- **Novembre 2026:** 16, 17, 18, 19, 23, 24, 25 et 30.
- **Décembre 2026:** 1, 2, 7, 8, 9, 14, 15 et 16.
- **Janvier 2027:** 4, 5, 6, 7, 11, 12, 13, 14, 18, 19, 20 et 21.

Le **samedi 14 et le dimanche 15 novembre** font partie des premières soirées annoncées ouvertes, sous réserve du calendrier de vente et des places proposées. Les vacances de Noël ne garantissent pas une ouverture quotidienne: vérifiez la date choisie avant de réserver.

Les horaires annoncés sont **17 h 30 à 22 h**, avec une **dernière entrée à 21 h 30**. La visite, spectacle compris, dure **environ 1 h 30**. Pour des enfants qui se couchent tôt, une entrée proche de l'ouverture laisse davantage de marge.

## Fontaines, aurores et ombres chinoises: que voit-on ?

Le billet comprend les installations lumineuses, les **aurores boréales artificielles** annoncées visibles en continu, la **Féerie des Fontaines Lumineuses** et les spectacles d'ombres chinoises des **Black Fingers**. Il ne s'agit pas d'aurores naturelles.

Les représentations d'ombres sont programmées à **18 h 40, 19 h 35 et 20 h 30**. Pour voir la première, arrivez suffisamment tôt pour rejoindre l'espace du spectacle. Rien n'oblige à assister aux trois: la promenade lumineuse peut aussi se faire au rythme des enfants.

Le parcours est extérieur et la durée annoncée reste indicative. Avec des pauses, une poussette ou de l'affluence, gardez une marge et prévoyez des vêtements adaptés à la saison.

## Poussette, toilettes, restauration: les détails utiles

L'organisateur annonce un **parcours accessible aux poussettes et aux fauteuils roulants**. La Ville de Paris indique cependant que **certaines zones du Parc Floral sont difficiles d'accès**: en cas de besoin d'un cheminement sans obstacle, demandez confirmation pour le trajet exact de l'événement.

Des **toilettes publiques** sont annoncées accessibles aux visiteurs. Un stand de **petite restauration** est prévu, notamment avec hot-dogs, frites et churros, sans garantie sur l'offre ou les prix du soir choisi. **Toute sortie est définitive**: le billet ne permet pas un aller-retour hors du parcours.

Le **QR code sur téléphone** est accepté, sans impression obligatoire. Attention, la page de l'organisateur donne deux heures différentes pour l'ouverture de la caisse sur place (**17 h 30 dans la FAQ**, **18 h dans les informations pratiques**); si vous comptez acheter sur place, vérifiez l'horaire avant de venir. L'organisateur conseille la réservation préalable.

## Accès au Parc Floral: où entrer ?

<!-- article-image-body:01 -->

![Panneau du Parc Floral de Paris photographié en journée en février 2022](/images/articles/2026/10/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Panneau_Parc_Floral_Paris_-_Paris_XII_(FR75)_-_2022-02-19_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour l'Odyssée Lumineuse, utilisez la **porte principale côté Château de Vincennes**, au Parc Floral, route de la Pyramide, Paris 12e. Le **métro 1, station Château de Vincennes**, est annoncé à **environ 15 minutes à pied**. Les **bus 46 et 112**, arrêt Parc Floral, sont indiqués; la Ville de Paris mentionne également le **RER A, gare de Vincennes**.

Pour calculer les titres de métro et de bus selon l'âge des enfants et vos autres trajets, consultez notre guide [Transports à Paris avec des enfants: quel titre choisir pour payer juste ?](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/).

La **visite diurne ordinaire du Parc Floral est gratuite d'octobre à mars**, mais elle **ne donne pas accès à l'Odyssée Lumineuse**, qui possède sa propre billetterie nocturne. Les horaires d'hiver du jardin ne sont pas ceux du parcours lumineux.

Si vous prévoyez une autre journée dans le secteur, la page [Vincennes en famille](/destinations/ile-de-france/val-de-marne/vincennes/) présente notamment le château, le parc et les autres visites possibles, sans les confondre avec l'événement nocturne.

## Dormir près du Parc Floral après la visite

Pour une famille venue de loin, l'[Appartement face au bois de Vincennes sur Abritel](https://www.abritel.fr/location-vacances/p2347593) annonce **deux chambres avec deux lits doubles**, pour **quatre personnes**, et situe le Parc Floral à **environ 11 minutes à pied**. Ce temps de marche affiché ne garantit pas la distance jusqu'à la porte utilisée le soir. Vérifiez la configuration des lits, le trajet, le prix total et la disponibilité aux dates souhaitées avant toute réservation.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/voyages/disneyland-paris-en-famille-en-2026-combien-de-jours-quel-hotel-et-quel-budget-prevoir/ | Disneyland Paris en famille en 2026: combien de jours, quel hôtel et quel budget prévoir | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- refresh | /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | 2026-11-07T10:31:03.300Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | 2026-11-04T12:35:19.125Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
