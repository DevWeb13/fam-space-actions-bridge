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
title: "LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit"
subtitle: À Meythet, Annecy et Alby-sur-Chéran, les âges accueillis, les horaires et les conditions d'accès ne sont pas les mêmes
summary: "Trois lieux d'accueil enfants-parents autour d'Annecy: âges, horaires, coût et conditions d'accès pour choisir où venir avec un tout-petit."
slug: laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit
status: published
publishedAt: 2026-10-23T10:59:51+02:00
updatedAt: null
category: parentalite
readingTime: 5
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
topic:
  key: parentalite|annecy|laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit|2026
  keywords:
    - LAEP Annecy
    - lieu accueil enfants parents Haute-Savoie
    - LAEP Meythet Alby-sur-Chéran
image:
  src: /images/articles/2026/10/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit.webp
  alt: Vue du centre de Meythet près d'Annecy en septembre 2007, illustration géographique sans représenter les lieux d'accueil enfants-parents.
sources:
  - title: Caf - Les lieux d'accueil enfants-parents
    url: https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/
  - title: Le Cairn - Les Petites Bulles, accueil des familles
    url: https://lecairn-annecymeythet.com/famille-habitants/
  - title: Le Cairn - Adresse et accès
    url: https://lecairn-annecymeythet.com/infos-pratiques/
  - title: Le Mikado - Le Patio et horaires 2026-2027
    url: https://lemikado.org/action-sociale/petite-enfance-annecy/
  - title: Le Mikado - Carte d'adhésion familiale 2026-2027
    url: https://lemikado.org/adhesion/
  - title: Le Mikado - Accès au site Teppes
    url: https://lemikado.org/contacts-horaires-acces/
  - title: SIPA - Les P'tits explorateurs et calendrier 2026-2027
    url: https://www.sipalby.fr/espace-jeux-enfants-parents/
  - title: Mairie d'Alby-sur-Chéran - Petite enfance et accès au LAEP
    url: https://mairie-alby-sur-cheran.fr/enfance-jeunesse/petite-enfance/
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(10)/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/index.md
  targetSha: 247dea85decc3594f9272de9778ae1035cba3506
  targetUrl: /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/
  decision: Choisir un LAEP réellement accessible selon l'âge de l'enfant, le jour disponible et les conditions d'accueil, notamment pour les séances de 2027.
  affiliationPotential: "Aucune affiliation naturelle : accueil de proximité sans réservation commerciale."
  gsc:
    retrievedAt: 2026-11-08T02:28:56+01:00
    dataThrough: 2026-11-05
    signal: needs_query_check
    basis: "Visibilité récente : 40 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-25
    peakEnd: 2026-10-27
    recentStart: 2026-11-03
    recentEnd: 2026-11-05
    peakImpressions: 40
    recentImpressions: 0
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - LAEP Annecy
      - lieu accueil enfants parents Haute-Savoie
      - LAEP Meythet Alby-sur-Chéran
---

## Mission retenue
Actualiser utilement le guide des trois lieux d'accueil enfants-parents autour d'Annecy : Les Petites Bulles à Meythet, Le Patio aux Teppes et Les P'tits explorateurs à Alby-sur-Chéran.

## Pourquoi cette mission
Le snapshot GSC signale une chute rapide de 40 à 0 impression sur deux fenêtres de trois jours, mais ne permet pas d'en déterminer la cause. Lacune indépendante constatée : l'article renvoie au calendrier 2026-2027 du SIPA mais ne donne que les séances de novembre 2026, alors que le calendrier officiel détaille les séances jusqu'en juillet 2027. Il manque aussi l'accès en bus indiqué par Le Mikado pour les familles sans voiture.

## Décision du lecteur
Savoir quel lieu peut accueillir son enfant, à quel moment précis, à quel coût, et comment s'y rendre sans déplacement inutile.

## Faits à traiter
- Ajouter une sélection concise des prochaines dates utiles du SIPA, en distinguant clairement les mardis sans séance et les périodes de vacances ; ne pas recopier inutilement tout le calendrier. Le calendrier officiel annonce notamment les 1, 8 et 15 décembre 2026 puis les 5, 12, 19 et 26 janvier 2027.
- Préciser pour Le Patio l'accès en bus ligne 4, arrêts Anémones ou Plaine Edelweiss, selon la page officielle du Mikado ; ne pas confondre fermeture de l'accueil général et fermeture du LAEP.
- Préserver les âges (0-6 ans Meythet et Patio ; 0-4 ans à Alby, 0-6 ans pendant les vacances), les horaires propres à chaque structure, l'adhésion annuelle du Patio, les gratuités, adresses, numéros, accès sans inscription, responsabilité de l'adulte, et la réserve sur l'éligibilité territoriale du SIPA. Préserver aussi image, crédits, sources et lien interne.
- Vérifier les conditions auprès des organismes, sans présenter la baisse GSC comme une preuve de problème de référencement.

## Sources de départ
- SIPA, calendrier 2026-2027 : https://www.sipalby.fr/espace-jeux-enfants-parents/
- Le Mikado, Le Patio et horaires : https://lemikado.org/action-sociale/petite-enfance-annecy/
- Le Mikado, accès : https://lemikado.org/contacts-horaires-acces/
- Le Cairn, accueil familles : https://lecairn-annecymeythet.com/famille-habitants/

## Affiliation
Aucune : le service est local, gratuit ou soumis à adhésion, sans achat partenaire pertinent.

## Continuations internes
- Conserver le lien vers le guide Fam Space des bus à Annecy pour les règles détaillées avec poussette.
- Ne pas développer un annuaire exhaustif des LAEP : renvoyer à la Caf pour les autres adresses.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(10)/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/index.md

---
title: "LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit"
subtitle: À Meythet, Annecy et Alby-sur-Chéran, les âges accueillis, les horaires et les conditions d'accès ne sont pas les mêmes
summary: "Trois lieux d'accueil enfants-parents autour d'Annecy: âges, horaires, coût et conditions d'accès pour choisir où venir avec un tout-petit."
slug: laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit
status: published
publishedAt: 2026-10-23T10:59:51+02:00
updatedAt: null
category: parentalite
readingTime: 5
location:
  city: Annecy
  department: Haute-Savoie
  region: Auvergne-Rhône-Alpes
topic:
  key: parentalite|annecy|laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit|2026
  keywords:
    - LAEP Annecy
    - lieu accueil enfants parents Haute-Savoie
    - LAEP Meythet Alby-sur-Chéran
image:
  src: "/images/articles/2026/10/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit.webp"
  alt: "Vue du centre de Meythet près d'Annecy en septembre 2007, illustration géographique sans représenter les lieux d'accueil enfants-parents."
sources:
  - title: Caf - Les lieux d'accueil enfants-parents
    url: https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/
  - title: Le Cairn - Les Petites Bulles, accueil des familles
    url: https://lecairn-annecymeythet.com/famille-habitants/
  - title: Le Cairn - Adresse et accès
    url: https://lecairn-annecymeythet.com/infos-pratiques/
  - title: Le Mikado - Le Patio et horaires 2026-2027
    url: https://lemikado.org/action-sociale/petite-enfance-annecy/
  - title: Le Mikado - Carte d'adhésion familiale 2026-2027
    url: https://lemikado.org/adhesion/
  - title: Le Mikado - Accès au site Teppes
    url: https://lemikado.org/contacts-horaires-acces/
  - title: SIPA - Les P'tits explorateurs et calendrier 2026-2027
    url: https://www.sipalby.fr/espace-jeux-enfants-parents/
  - title: Mairie d'Alby-sur-Chéran - Petite enfance et accès au LAEP
    url: https://mairie-alby-sur-cheran.fr/enfance-jeunesse/petite-enfance/
---

Dans un **lieu d'accueil enfants-parents (LAEP)**, les tout-petits peuvent découvrir des jeux et rencontrer d'autres enfants pendant que les adultes échangent ou prennent simplement le temps d'être avec eux. Autour d'Annecy, en Haute-Savoie, trois accueils proposent cette formule, mais pas aux mêmes horaires ni dans les mêmes conditions.

**Les Petites Bulles à Meythet**, **Le Patio à Annecy** et **Les P'tits explorateurs à Alby-sur-Chéran** se distinguent surtout par l'âge des enfants accueillis, les jours d'ouverture et l'éventuelle adhésion à prévoir.

## Un LAEP, ce n'est pas une garderie

On vient avec son enfant et **on reste avec lui**: l'adulte accompagnant en garde la responsabilité. Des accueillants sont présents pour faciliter les échanges et veiller au cadre du lieu, mais personne n'impose une activité ou un programme. On peut jouer, observer ou discuter avec d'autres parents.

Selon la [présentation des LAEP par la Caf](https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/), l'accueil repose sur la liberté de venir, la confidentialité et l'absence d'inscription. Les deux premiers lieux présentés ici accueillent les enfants jusqu'à 6 ans; celui d'Alby-sur-Chéran applique une limite plus basse hors vacances. Autre différence locale importante: Le Patio demande une adhésion familiale, alors que les deux autres structures annoncent un accès gratuit.

## Les Petites Bulles à Meythet: gratuit le jeudi matin

**Les Petites Bulles**, au **Cairn, 6 rue de l'Aérodrome à Meythet** (commune déléguée d'Annecy), accueillent les enfants de **0 à 6 ans** avec un parent ou un adulte référent. Les futurs parents peuvent aussi venir.

Le [Cairn indique un accueil gratuit, anonyme et sans inscription](https://lecairn-annecymeythet.com/famille-habitants/), **chaque jeudi de 9h à 12h**, y compris pendant les vacances scolaires. On peut arriver et repartir pendant ce créneau: il n'est pas nécessaire de rester trois heures.

Pour préparer votre venue, les [informations pratiques du Cairn](https://lecairn-annecymeythet.com/infos-pratiques/) donnent l'adresse, les possibilités d'accès et le téléphone **04 50 22 08 13**. L'emplacement précis de la salle LAEP et ses conditions d'accessibilité ne sont pas détaillés sur la page de l'activité: si vous venez avec une poussette ou devez éviter les escaliers, renseignez-vous auprès de l'accueil.

## Le Patio à Annecy: plusieurs jours d'ouverture, avec adhésion

**Le Patio** est le LAEP du **Mikado**, au **site Teppes, place des Rhododendrons, 74000 Annecy**. Il accueille les enfants **de la naissance à 6 ans** avec un adulte, dans la limite des places disponibles.

Pour la saison **2026-2027**, le [calendrier du Patio publié par Le Mikado](https://lemikado.org/action-sociale/petite-enfance-annecy/) distingue:

- **Hors vacances scolaires:** lundi et mardi de **15h à 17h30**, mercredi de **9h à 12h**, jeudi et vendredi de **9h à 11h30**.
- **Pendant les vacances scolaires:** lundi et mercredi de **9h30 à 11h30**.

L'accès est libre dans la limite des places, mais **une carte d'adhésion familiale est nécessaire**. Elle coûte **24 € pour la saison 2026-2027**, du 1er septembre 2026 au 31 août 2027. Il s'agit d'une adhésion annuelle et non d'un tarif par séance. Le Mikado en précise les [conditions et le montant](https://lemikado.org/adhesion/).

Le [plan d'accès au site Teppes](https://lemikado.org/contacts-horaires-acces/) permet de repérer les lieux; le centre répond au **04 50 57 56 55**. Les horaires du LAEP ne doivent pas être confondus avec ceux de l'accueil général du Mikado. Vérifiez aussi les fermetures exceptionnelles avant le départ.

## Les P'tits explorateurs à Alby-sur-Chéran: des mardis précis

Au sud d'Annecy, **Les P'tits explorateurs** sont organisés par le **Syndicat intercommunal du Pays d'Alby (SIPA)**. Le lieu reçoit les enfants **de 0 à 4 ans**, et **jusqu'à 6 ans pendant les vacances scolaires**, avec un parent ou un adulte familier.

L'accueil se tient dans la **salle petite enfance au deuxième étage de la Maison intercommunale des services publics**, au-dessus de la crèche, **118 route de Plaimpalais, 74540 Alby-sur-Chéran**. Le service est annoncé **gratuit, anonyme et sans inscription**.

Les séances ont lieu **le mardi de 8h45 à 11h15**, mais **pas tous les mardis**. Le [calendrier 2026-2027 du SIPA](https://www.sipalby.fr/espace-jeux-enfants-parents/) prévoit notamment les **3, 10, 17 et 24 novembre 2026**, mais aucune séance le **27 octobre 2026**. Consultez les dates actualisées avant de vous déplacer.

**Attention si vous habitez hors du Pays d'Alby:** le SIPA présente la venue comme libre, tandis que la [mairie d'Alby-sur-Chéran](https://mairie-alby-sur-cheran.fr/enfance-jeunesse/petite-enfance/) mentionne explicitement les familles des communes membres du syndicat. Cela ne permet pas d'affirmer que toutes les familles extérieures sont admises. Le SIPA peut confirmer les conditions au **04 50 68 40 00** ou **04 50 68 40 01**.

## Avant la première visite

Le choix dépend surtout du créneau qui convient à votre famille: **jeudi matin sans adhésion à Meythet**, **plusieurs jours possibles au Patio avec une adhésion**, ou **mardi matin sur calendrier à Alby-sur-Chéran**. Si votre enfant approche de 4 ans, vérifiez en particulier la règle d'âge des P'tits explorateurs.

Les horaires et conditions peuvent évoluer; consultez la page de la structure choisie avant de partir. Si vous prenez les transports en commun avec une poussette, notre [guide des bus à Annecy avec des enfants](https://www.fam-space.fr/articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/) explique les règles utiles à bord.

Pour découvrir d'autres accueils près de chez vous, la [Caf présente les LAEP sur monenfant.fr](https://www.monenfant.fr/les-lieux-d-accueil-enfants-parents/); votre Caf ou le service petite enfance de votre commune peut aussi vous orienter vers les lieux et créneaux locaux.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-a-rennes-ou-jouer-gratuitement-avec-son-enfant/ | LAEP à Rennes: où jouer gratuitement avec son enfant? | parentalite | Rennes, Ille-et-Vilaine, Bretagne
- /articles/maison/renovation-energetique-en-haute-savoie-jusqu-a-3-000-d-aide-departementale/ | Rénovation énergétique en Haute-Savoie: jusqu'à 3 000 € d'aide départementale | maison | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-dans-l-herault-jouer-avec-son-enfant-et-rencontrer-d-autres-parents/ | LAEP dans l'Hérault: jouer avec son enfant et rencontrer d'autres parents | parentalite | Hérault, Occitanie
- /articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/ | LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits | parentalite | Bastia, Haute-Corse, Corse
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/evenements/court-circuit-2026-a-annecy-en-famille-spectacles-tarifs-et-conseils/ | Court Circuit 2026 à Annecy en famille: spectacles, tarifs et conseils | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-du-lac-annecy-2026-en-famille/ | Fête du lac d’Annecy 2026: préparer la soirée avec des enfants | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | Noël des Alpes 2026 à Annecy en famille: marché, patinoire et illuminations | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-autour-d-annecy-trois-lieux-pour-jouer-avec-son-tout-petit/ | LAEP autour d'Annecy: trois lieux pour jouer avec son tout-petit | parentalite | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/vie-pratique/bus-a-annecy-avec-des-enfants-quel-ticket-choisir-et-comment-eviter-les-galeres/ | Bus à Annecy avec des enfants: quel ticket choisir et comment éviter les galères | vie-pratique | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/cuisine/ferme-du-petit-mont-a-bellevaux-en-famille-quelle-formule-choisir/ | Ferme du Petit Mont à Bellevaux en famille: quelle formule choisir ? | cuisine | Bellevaux, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/activites/mer-de-glace-avec-des-enfants-faut-il-descendre-jusqu-a-la-grotte/ | Mer de Glace avec des enfants: faut-il descendre jusqu'à la grotte? | activites | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/evian-les-bains-en-famille-pendant-3-jours-lac-balades-et-activites-faciles/ | Évian-les-Bains en famille pendant 3 jours: lac, balades et activités faciles | voyages | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-au-bonheur-des-momes-2026-en-famille/ | Au Bonheur des Mômes 2026: pass, spectacles et journée au Grand-Bornand | evenements | Le Grand-Bornand, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/musee-de-la-corse-a-corte-decouvrir-l-ile-en-famille-par-les-objets-du-quotidien/ | Musée de la Corse à Corte: découvrir l’île en famille par les objets du quotidien | parentalite | Corte, Haute-Corse, Corse
- /articles/parentalite/decouvrir-la-bd-avec-ses-enfants-a-angouleme/ | Découvrir la BD avec ses enfants à Angoulême | parentalite | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/parentalite/a-sainte-rose-decouvrir-la-mangrove-avec-son-enfant-en-pedalo/ | À Sainte-Rose, découvrir la mangrove avec son enfant en pédalo | parentalite | Sainte-Rose, Guadeloupe, Guadeloupe

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/noel-des-alpes-2026-a-annecy-en-famille-marche-patinoire-ou-illuminations/ | 2026-10-29T05:28:53.475Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
