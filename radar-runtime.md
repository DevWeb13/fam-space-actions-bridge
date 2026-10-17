# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
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
title: "LAEP à Nantes: où aller avec un enfant de moins de 6 ans?"
subtitle: Des lieux pour jouer, rencontrer d'autres familles et échanger, souvent sans inscription
summary: Comment fonctionnent les LAEP à Nantes, à quels âges ils s'adressent et comment choisir un lieu proche de chez vous.
slug: laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-09-30T11:04:48+02:00
updatedAt: 2026-09-30T19:23:49+02:00
category: parentalite
readingTime: 4
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: parentalite|nantes|laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Nantes
    - lieu accueil enfants parents Nantes
image:
  src: /images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans.webp
  alt: Vue aérienne du centre-ville de Nantes
sources:
  - title: "Les lieux d'accueil enfants-parents: pour le bien-être de vos enfants"
    url: https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
  - title: "Parents: des solutions face aux défis du quotidien"
    url: https://metropole.nantes.fr/dossier-parents-des-solutions-face-aux-defis-du-quotidien
  - title: LAEP Le Square (Nantes)
    url: https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658
  - title: LAEP municipal L'Oasis (Nantes)
    url: https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690
  - title: LAEP La Perdriole (Nantes)
    url: https://parents.loire-atlantique.fr/44/laep-la-perdriole-nantes/parents_10688
  - title: Lieux d'accueil enfants-parents (LAEP) de l'Accoord
    url: https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/parentalite/(2026)/(09)/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/index.md
  targetSha: 16e480635bf47ee7f304df778830bb4c8c419fa0
  targetUrl: /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/
  decision: Choisir un LAEP nantais réellement ouvert pendant les vacances d'automne 2026 selon l'âge, le quartier, les horaires et les contraintes d'accès, sans se déplacer vers un accueil fermé.
  affiliationPotential: "Aucune offre partenaire naturelle: accueil parents-enfants gratuit ou à participation symbolique, sans réservation commerciale. Ne pas ajouter d'hébergement."
  gsc:
    retrievedAt: 2026-10-17T09:26:43.000Z
    dataThrough: 2026-10-14
    signal: coverage_loss
    basis: Exposition en baisse avec classement comparable; ne prouve pas une désindexation.
    peakStart: 2026-10-01
    peakEnd: 2026-10-07
    recentStart: 2026-10-08
    recentEnd: 2026-10-14
    peakImpressions: 131
    recentImpressions: 27
    commonQueries: 1
    positionDelta: 0.931
    impressionRatio: 0.115
    focusQueries:
      - laep nantes
      - laep
      - centre d'accueil enfant
      - laep autour de moi
      - lieu accueil parent enfant
---

## Mission retenue

**Rafraîchir le guide LAEP à Nantes**, en préservant ses fiches, horaires, âges, adresses, gratuité et modalités sans inscription encore exacts, mais en rendant opérationnelle la distinction entre les accueils ouverts et fermés pendant les vacances **du 19 octobre au 1er novembre 2026**. La liste de la Ville a été **actualisée le 16 octobre 2026**.

## Pourquoi cette mission

Le diagnostic GSC est **coverage_loss** (131 impressions en meilleure semaine contre 27 récemment, classement comparable), et non une preuve de perte de position. Surtout, une raison éditoriale indépendante est maintenant vérifiée: la Ville précise les ouvertures des vacances, absentes du guide actuel, et sa fiche du **Square** signale « Accessible PMR: Non », alors que l'article renvoie vers une fiche le présentant comme accessible; cette contradiction doit être résolue prudemment. La cantine des collèges en Essonne reste **uncertain** et son article répond déjà aux démarches. L'expansion d'une page forte de festival risque de répéter un guide existant; l'opportunité saisonnière de festival de cinéma en Isère est déjà prise par Radar. Ce refresh sert une décision immédiate distincte.

## Décision du lecteur

Identifier **où venir réellement avec son enfant pendant les vacances**, le jour, l'horaire, le tarif éventuel et l'accessibilité pratique, plutôt que choisir un lieu fermé au calendrier scolaire.

## Faits à traiter

- **Ouverts aux horaires habituels selon la Ville**: **La Perdriole**, **Le Nid de Jordan**, **Le Square**, **Le Sablier** et **L'Oasis**. Les conserver avec leurs âges, quartiers, adresses et créneaux, en confirmant les conditions du jour.
- **La Marouette**: horaires habituels **uniquement la première semaine, du 19 au 24 octobre**, puis fermeture la seconde semaine. Ajouter ce lieu utile du centre, absent du guide actuel.
- **À l'Abord'âge**: ouverture supplémentaire le **jeudi pendant les vacances**, participation annuelle **7 à 60 € par famille**; distinguer le café associatif des LAEP municipaux gratuits.
- Les LAEP **Accoord** de Malakoff, Beaulieu, Halvêque, Port Boyer et Bottière, ainsi que **Au 104** et **La Laetitia**, affichent des créneaux **hors vacances scolaires**: ne pas les conseiller pour un jour de vacances.
- **Accessibilité à vérifier**: la fiche municipale du **Square** indique « Accessible PMR: Non » contrairement à la mention du guide existant; la fiche de **La Perdriole** combine « lieu accessible » et « escalier sans ascenseur ». Ne pas conclure arbitrairement: signaler les limites et inviter à confirmer l'accès directement avant déplacement.
- Conserver la distinction LAEP / crèche, la présence obligatoire d'un adulte, les âges maximaux et les informations encore utiles. Placer les dates de vacances dans un passage court; si ajout à cet evergreen, utiliser **reviewAt: 2026-11-02** pour retirer ou réviser les mentions périmées, sans supprimer les informations permanentes.

## Sources de départ

- Ville de Nantes, liste des LAEP, mise à jour du **16 octobre 2026**: https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
- Ville de Nantes, fiche Le Square (accessibilité): https://metropole.nantes.fr/lieu/laep-le-square
- Ville de Nantes, fiche La Perdriole (escalier): https://metropole.nantes.fr/lieu/laep-la-perdriole
- Ville de Nantes, fiche La Marouette: https://metropole.nantes.fr/lieu/laep-la-marouette

## Affiliation

Sans objet: les LAEP ne correspondent à aucune prestation partenaire.

## Continuations internes

Conserver le lien vers la liste municipale complète pour les changements de dernière minute; ne pas recopier toutes les fiches. Le guide actuel couvre déjà le fonctionnement d'un LAEP et les options par quartier: l'enrichir sans dégrader ses informations permanentes.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/parentalite/(2026)/(09)/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/index.md

---
title: "LAEP à Nantes: où aller avec un enfant de moins de 6 ans?"
subtitle: Des lieux pour jouer, rencontrer d'autres familles et échanger, souvent sans inscription
summary: Comment fonctionnent les LAEP à Nantes, à quels âges ils s'adressent et comment choisir un lieu proche de chez vous.
slug: laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans
status: published
publishedAt: 2026-09-30T11:04:48+02:00
updatedAt: 2026-09-30T19:23:49+02:00
category: parentalite
readingTime: 4
location:
  city: Nantes
  department: Loire-Atlantique
  region: Pays de la Loire
topic:
  key: parentalite|nantes|laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans|2026
  keywords:
    - LAEP Nantes
    - lieu accueil enfants parents Nantes
image:
  src: "/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans.webp"
  alt: "Vue aérienne du centre-ville de Nantes"
sources:
  - title: "Les lieux d'accueil enfants-parents: pour le bien-être de vos enfants"
    url: https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants
  - title: "Parents: des solutions face aux défis du quotidien"
    url: https://metropole.nantes.fr/dossier-parents-des-solutions-face-aux-defis-du-quotidien
  - title: LAEP Le Square (Nantes)
    url: https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658
  - title: LAEP municipal L'Oasis (Nantes)
    url: https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690
  - title: LAEP La Perdriole (Nantes)
    url: https://parents.loire-atlantique.fr/44/laep-la-perdriole-nantes/parents_10688
  - title: Lieux d'accueil enfants-parents (LAEP) de l'Accoord
    url: https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701
---

Un lieu d'accueil enfants-parents, ou LAEP, est un espace où un jeune enfant vient avec un parent, un grand-parent ou un autre adulte référent pour jouer, rencontrer d'autres enfants et passer un moment hors de la maison. L'adulte reste avec lui: ce n'est ni une crèche ni un mode de garde.

À Nantes, ces lieux sont répartis dans plusieurs quartiers. Ils peuvent aussi offrir aux adultes un espace pour rencontrer d'autres familles ou échanger avec des accueillants. La [Ville de Nantes présente les LAEP comme des espaces de rencontre, d'échange et de jeu](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants).

## Peut-on venir sans inscription?

C'est le principe de nombreux LAEP nantais: on vient pendant un temps d'accueil, sans réserver une place comme en crèche. Les LAEP municipaux Le Square, L'Oasis et La Perdriole sont notamment annoncés comme gratuits, anonymes, confidentiels et sans inscription par le site Questions de parents de la Caf et du Département.

Il faut toutefois vérifier les modalités du lieu choisi. La page de la Ville signale que certains lieux peuvent demander une petite participation financière. À l'Abord'âge, par exemple, une participation annuelle par famille est indiquée.

Autre différence importante: tous les LAEP n'accueillent pas exactement les mêmes âges. Certains vont jusqu'à 6 ans, tandis que d'autres s'arrêtent à 3, 4 ou 5 ans. Les futurs parents sont également accueillis dans plusieurs structures.

## Trois LAEP municipaux faciles à repérer

<!-- article-image-body:01 -->

![Rue des Platanes à Nantes, où se situe le LAEP La Perdriole](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-01.webp)

*Photo: [Kalepom](https://commons.wikimedia.org/wiki/File:Rue_des_Platanes.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour une première visite, les trois structures municipales offrent des horaires répartis dans différents secteurs de Nantes.

**Le Square**, au 6 rue Samuel-de-Champlain dans le nord de Nantes, accueille les futurs parents, les parents et les enfants jusqu'à 5 ans. Il ouvre le mardi de 15 h à 18 h, puis le jeudi de 9 h à 12 h et de 15 h à 18 h. La [fiche du Square](https://parents.loire-atlantique.fr/44/laep-le-square-nantes/parents_10658) indique également un accès pour les personnes à mobilité réduite.

**La Perdriole**, au 29 rue des Platanes, accueille elle aussi les enfants jusqu'à 5 ans avec leur accompagnant, ainsi que les futurs parents. Les temps d'accueil sont le mardi de 9 h à 12 h et de 15 h à 18 h, puis le vendredi de 15 h à 18 h. Elle est desservie par le C1 à l'arrêt Platanes. Les informations pratiques sont regroupées sur la [fiche de La Perdriole](https://parents.loire-atlantique.fr/44/laep-la-perdriole-nantes/parents_10688).

**L'Oasis**, au 31 rue du Plessis-Gautron dans l'ouest de Nantes, reçoit le lundi de 9 h à 12 h et de 15 h à 18 h, ainsi que le jeudi de 15 h à 18 h. Le tram 1 à Lauriers et le bus 11 à Jean Moulin permettent de rejoindre le lieu. La [fiche de L'Oasis](https://parents.loire-atlantique.fr/44/laep-municipal-l-oasis-nantes/parents_10690) confirme un accueil gratuit et sans inscription.

## Il existe aussi des LAEP associatifs dans plusieurs quartiers

<!-- article-image-body:02 -->

![Rue du Port-Boyer à Nantes, quartier où fonctionne un LAEP de l'Accoord](/images/articles/2026/09/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans-body-02.webp)

<!-- /article-image-body:02 -->

Le choix ne se limite pas aux trois lieux municipaux. L'Accoord propose cinq LAEP à Nantes: à Port-Boyer, Bottière, Halvêque-Beaujoire, Beaulieu et Malakoff. Leur accès est annoncé libre et gratuit, mais plusieurs de leurs créneaux n'ont lieu qu'en dehors des vacances scolaires. La [liste des LAEP de l'Accoord](https://parents.loire-atlantique.fr/44/lieux-d-accueil-enfants-parents-laep-de-l-accoord/parents_10701) permet de comparer leurs adresses et horaires.

D'autres structures complètent cette offre. Au 104, rue Saint-Jacques, l'accueil concerne les enfants de 0 à 4 ans le mercredi hors vacances scolaires. Le Nid de Jordan, rue de la Petite-Noë, accueille les enfants de 0 à 3 ans le mardi. La Laetitia propose également deux matinées par semaine pour les 0-3 ans hors vacances scolaires.

La page [LAEP quartier par quartier](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants) reste la plus pratique pour retrouver l'ensemble des lieux et choisir d'abord selon votre secteur.

## Que fait-on une fois sur place?

Il n'y a pas de programme à suivre comme dans un atelier réservé à l'avance. L'enfant peut découvrir les jeux et les espaces à son rythme, observer les autres ou entrer progressivement en contact avec eux. L'adulte reste présent et disponible.

Pour les parents, l'intérêt peut être tout aussi simple: sortir de chez soi, parler avec d'autres adultes ou poser une question à un accueillant sans engager une démarche plus formelle. Dans son [dossier consacré aux solutions pour les parents](https://metropole.nantes.fr/dossier-parents-des-solutions-face-aux-defis-du-quotidien), Nantes souligne notamment le rôle de ces lieux pour créer du lien entre familles.

Cela peut aussi constituer une première expérience de vie en groupe avant la crèche ou l'école, sans imposer une séparation immédiate avec le parent.

## Comment choisir son LAEP à Nantes?

Commencez par trois critères: le quartier, l'âge de votre enfant et le jour où vous êtes disponible. Un lieu proche mais réservé aux moins de 3 ans ne conviendra pas à un enfant de 4 ans; inversement, certains accueils jusqu'à 5 ou 6 ans offrent davantage de marge.

Regardez ensuite si le créneau fonctionne pendant les vacances scolaires. Plusieurs LAEP associatifs ferment leurs accueils habituels à ces périodes, alors que d'autres ont un fonctionnement différent.

Enfin, vérifiez la page du lieu avant de partir. Les horaires peuvent évoluer et les pages officielles ou directement responsables sont plus fiables qu'une ancienne fiche enregistrée dans un moteur de recherche. Pour une vue d'ensemble, la Ville maintient sa [liste des LAEP nantais avec les coordonnées, transports et horaires](https://metropole.nantes.fr/mes-services-mon-quotidien/les-lieux-d-accueil-enfants-parents-pour-le-bien-etre-de-vos-enfants).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-en-indre-et-loire-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP en Indre-et-Loire: où aller avec un enfant de moins de 6 ans | parentalite | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/laep-dans-le-cantal-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP dans le Cantal: où aller avec un enfant de moins de 6 ans | parentalite | Aurillac, Cantal, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/evenements/utopiales-2026-a-nantes-en-famille-dates-billets-et-conseils-pour-preparer-la-visite/ | Utopiales 2026 à Nantes en famille: dates, billets et conseils pour préparer la visite | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/cuisine/atelier-cuisine-parent-enfant-a-nantes-gratuit-au-breil-ou-cours-prive/ | Ateliers cuisine parent-enfant à Nantes: où cuisiner ensemble? | cuisine | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/quel-laep-choisir-a-perpignan-selon-l-age-et-le-jour/ | Quel LAEP choisir à Perpignan selon l'âge et le jour ? | parentalite | Perpignan, Pyrénées-Orientales, Occitanie
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/laep-a-nantes-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Nantes: où aller avec un enfant de moins de 6 ans? | parentalite | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/maison/broyeur-de-vegetaux-a-nantes-metropole-acheter-a-plusieurs-ou-profiter-des-operations-gratuites/ | Broyeur de végétaux à Nantes Métropole: acheter à plusieurs ou profiter des opérations gratuites ? | maison | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/vie-pratique/tarification-solidaire-naolib-a-nantes-combien-paie-une-famille-et-comment-faire-la-demande/ | Tarification solidaire Naolib à Nantes: combien paie une famille et comment faire la demande? | vie-pratique | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/folie-plantes-nantes-2026-famille/ | Folie des plantes 2026 à Nantes: un week-end gratuit à découvrir en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/voyage-a-nantes-2026-en-famille/ | Voyage à Nantes 2026 en famille: parcours court et plan | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | Planète Sauvage en famille: tarifs 2026, durée et conseils de visite | activites | Port-Saint-Père, Loire-Atlantique, Pays de la Loire
- /articles/evenements/festival-ete-continue-carquefou-2026-famille/ | Festival L’Été Continue 2026 à Carquefou: six jours gratuits en famille | evenements | Carquefou, Loire-Atlantique, Pays de la Loire
- /articles/parentalite/maison-des-parents-aux-pennes-mirabeau-ateliers-gratuits-et-accueil-des-familles/ | Maison des Parents aux Pennes-Mirabeau: ateliers gratuits et accueil des familles | parentalite | Les Pennes-Mirabeau, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/parentalite/laep-a-bastia-et-en-balagne-deux-lieux-gratuits-pour-les-tout-petits/ | LAEP à Bastia et en Balagne: deux lieux gratuits pour les tout-petits | parentalite | Bastia, Haute-Corse, Corse
- /articles/parentalite/kaz-1000-jours-au-port-ateliers-gratuits-pour-les-futurs-et-jeunes-parents/ | Kaz’1000 jours au Port: ateliers gratuits pour les futurs et jeunes parents | parentalite | Le Port, La Réunion, La Réunion
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/montchavin-les-coches-avec-un-bebe-garderie-horaires-et-sejour-d-hiver/ | Montchavin-Les Coches avec un bébé: garderie, horaires et séjour d'hiver | parentalite | Montchavin-Les Coches, Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne

### Historique Radar lié

- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- refresh | /articles/activites/planete-sauvage-en-famille-tarifs-2026-duree-et-conseils-de-visite/ | 2026-10-02T14:23:16.612Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
