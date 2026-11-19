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
title: "Salon du Cheval de Paris 2026 en famille: animations, jumping et billets"
subtitle: "Du 4 au 6 décembre à la Porte de Versailles: organiser la visite avec les enfants"
summary: "Ateliers pour les enfants, jumping international, spectacles du soir, prix indicatifs et accès: les informations pratiques du Salon du Cheval de Paris 2026 en famille."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: /images/articles/2026/10/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle.webp
  alt: Compétition Longines Masters au Salon du cheval de Paris en décembre 2016, ancienne édition organisée à Paris-Nord Villepinte, et non salon 2026.
sources:
  - title: Salon du Cheval de Paris - Enfants et familles 2026
    url: https://www.salon-cheval.fr/enfants
  - title: Salon du Cheval de Paris - Quel billet choisir en 2026?
    url: https://www.salon-cheval.fr/article/salon-du-cheval-de-paris-2026-quel-billet-choisir-pour-votre-visite
  - title: Salon du Cheval de Paris - Informations pratiques et FAQ 2026
    url: https://www.salon-cheval.fr/infos-pratiques
  - title: Salon du Cheval de Paris - Compétitions
    url: https://www.salon-cheval.fr/competitions
  - title: Salon du Cheval de Paris - La Nuit du Cheval
    url: https://www.salon-cheval.fr/la-nuit-du-cheval
  - title: Salon du Cheval de Paris - La Nuit du Complet by Forestier
    url: https://www.salon-cheval.fr/la-nuit-du-complet-by-forestier
  - title: Salon du Cheval de Paris - Programme
    url: https://www.salon-cheval.fr/programme
eventEndsAt: 2026-12-06
topic:
  key: evenements|paris|salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle|2026
  keywords:
    - salon du cheval Paris 2026 enfants
    - salon du cheval Paris 2026 famille
    - salon du cheval de Paris tarifs 2026
    - nuits du cheval 2026 billets
    - jumping salon du cheval Paris 2026
slug: salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle
status: published
publishedAt: 2026-10-22T04:59:04.689Z
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
  targetPath: src/routes/articles/evenements/(2026)/(10)/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/index.md
  targetSha: 0f6ccb7817d52cc3c62cffa4fdd65a3b6d7aae7c
  targetUrl: /articles/evenements/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/
  decision: Choisir entre une visite de jour avec ateliers et jumping inclus, une grande épreuve payante et la Nuit du Cheval du 4 décembre, en connaissant le contenu réel, le coût et les horaires pour les enfants.
  affiliationPotential: Conserver les hébergements Booking.com proches de Porte de Versailles pour les familles venant de loin; ne pas remplacer la billetterie du Salon par une offre partenaire non vérifiée.
  gsc:
    retrievedAt: 2026-11-19T01:30:40+01:00
    dataThrough: 2026-11-16
    signal: uncertain
    basis: "Visibilité récente : 31 impressions sur trois jours, puis 10 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-02
    peakEnd: 2026-11-04
    recentStart: 2026-11-14
    recentEnd: 2026-11-16
    peakImpressions: 31
    recentImpressions: 10
    commonQueries: 0
    positionDelta: null
    impressionRatio: null
    focusQueries: []
---

## Mission retenue
Actualiser le guide familial du Salon du Cheval de Paris, du 4 au 6 décembre 2026, avec la programmation désormais détaillée de la Nuit du Cheval.

## Pourquoi cette mission
Le snapshot GSC signale une chute rapide, sans cause SEO démontrée. Une lacune éditoriale indépendante est vérifiée: l'article indique que la programmation nominative de la Nuit du Cheval n'est pas détaillée, alors que l'organisateur annonce désormais les artistes et le déroulé. La première candidate, Féeries de Noël, reste sans billetterie Noël clairement confirmée sur son site officiel; pas de modification spéculative.

## Décision du lecteur
Savoir si une visite familiale en journée suffit ou si le spectacle du vendredi soir justifie un billet distinct et une fin à 23 h.

## Faits à traiter
- Nuit du Cheval vendredi 4 décembre, 21 h-23 h: ouverture par une épreuve de six barres, puis création originale de Jean-François Pignon avec ses chevaux en liberté et Étienne Serclérat avec chiens, brebis et canards.
- Vérifier prix et conditions exactes du billet de soirée, gratuité enfant et accès aux halls avant de conseiller une réservation.
- Préserver les ateliers familiaux, la distinction jumping inclus ou payant selon jour et épreuve, les horaires, tarifs indicatifs, transports, accessibilité, photographies, crédits et liens existants.
- Ne pas attribuer la baisse GSC à une cause non démontrée.

## Sources de départ
- https://www.salon-cheval.fr/la-nuit-du-cheval
- https://www.salon-cheval.fr/article/jean-fran%C3%A7ois-pignon-et-%C3%A9tienne-sercl%C3%A9rat-pr%C3%A9sentent-une-cr%C3%A9ation-originale-%C3%A0-paris
- https://www.salon-cheval.fr/infos-pratiques
- https://www.salon-cheval.fr/enfants

## Affiliation
Conserver les deux hôtels Booking.com déjà proposés pour une soirée tardive ou un séjour; aucune offre de billet partenaire vérifiée.

## Continuations internes
- Conserver le lien vers Equita Lyon comme comparaison, sans développer son programme.
- Conserver le guide des options de transport et d'accès déjà présent dans le texte.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle/index.md

---
title: "Salon du Cheval de Paris 2026 en famille: animations, jumping et billets"
subtitle: "Du 4 au 6 décembre à la Porte de Versailles: organiser la visite avec les enfants"
summary: "Ateliers pour les enfants, jumping international, spectacles du soir, prix indicatifs et accès: les informations pratiques du Salon du Cheval de Paris 2026 en famille."
category: evenements
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: "/images/articles/2026/10/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle.webp"
  alt: "Compétition Longines Masters au Salon du cheval de Paris en décembre 2016, ancienne édition organisée à Paris-Nord Villepinte, et non salon 2026."
sources:
  - title: Salon du Cheval de Paris - Enfants et familles 2026
    url: https://www.salon-cheval.fr/enfants
  - title: Salon du Cheval de Paris - Quel billet choisir en 2026?
    url: https://www.salon-cheval.fr/article/salon-du-cheval-de-paris-2026-quel-billet-choisir-pour-votre-visite
  - title: Salon du Cheval de Paris - Informations pratiques et FAQ 2026
    url: https://www.salon-cheval.fr/infos-pratiques
  - title: Salon du Cheval de Paris - Compétitions
    url: https://www.salon-cheval.fr/competitions
  - title: Salon du Cheval de Paris - La Nuit du Cheval
    url: https://www.salon-cheval.fr/la-nuit-du-cheval
  - title: Salon du Cheval de Paris - La Nuit du Complet by Forestier
    url: https://www.salon-cheval.fr/la-nuit-du-complet-by-forestier
  - title: Salon du Cheval de Paris - Programme
    url: https://www.salon-cheval.fr/programme
eventEndsAt: 2026-12-06
topic:
  key: evenements|paris|salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle|2026
  keywords:
    - salon du cheval Paris 2026 enfants
    - salon du cheval Paris 2026 famille
    - salon du cheval de Paris tarifs 2026
    - nuits du cheval 2026 billets
    - jumping salon du cheval Paris 2026
slug: salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle
status: published
publishedAt: 2026-10-22T04:59:04.689Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Paris
---
<!-- article-image-credit -->
*Photo: [Tttitoune](https://commons.wikimedia.org/wiki/File:Longines_master_2016_-_02.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **vendredi 4 au dimanche 6 décembre 2026**, le **Salon du Cheval de Paris** accueille les familles à Paris Expo Porte de Versailles. Les enfants peuvent découvrir les chevaux, les métiers équestres et des ateliers; les passionnés peuvent aussi assister au jumping international. Mais **le billet Salon ne couvre pas toutes les compétitions ni les spectacles du soir**: les activités souhaitées déterminent la formule à choisir.

## Des animations à découvrir avec les enfants

<!-- article-image-body:01 -->

![Cheval de trait du Nord monté lors d'une démonstration au Salon du cheval de Paris 2009 à Villepinte.](/images/articles/2026/10/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle-body-01.webp)

*Photo: [Eponimm](https://commons.wikimedia.org/wiki/File:Trait_du_nord_monte.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'organisateur annonce pour 2026 des ateliers autour du **pansage**, de la **nutrition**, du **bien-être du cheval**, de la théorie et des **quiz**. Des démonstrations présentent notamment l'**Equifun**, l'équitation en amazone, le **cross shetland**, le western, le hunter, les **pony games** et le travail à pied.

Au **hall 4**, les familles trouveront notamment une carrière d'animation, le paddock où se préparent les chevaux du jumping et un **pôle Santé** permettant de rencontrer des professionnels, notamment vétérinaires et maréchaux-ferrants. Les **halls 4 et 6** accueillent les exposants et les autres animations.

L'organisateur ne précise pas encore pour chaque atelier un âge minimum, un horaire, une réservation ou un éventuel tarif propre: **ne promettez pas une activité à heure fixe avant de consulter le programme actualisé**. Les présentations de poneys ne valent pas confirmation de baptêmes à poney.

## Jumping international: quand peut-on entrer avec le billet Salon?

<!-- article-image-body:02 -->

![Guillaume Canet avec Sweet Boy d'Alpa au concours CSI 2 étoiles des Longines Paris Masters 2017 à Villepinte.](/images/articles/2026/10/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle-body-02.webp)

*Photo: [Eponimm](https://commons.wikimedia.org/wiki/File:SDC2017_Guillaume_Canet_CSI2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

L'accès aux **tribunes** dépend du jour et de l'épreuve:

- **Vendredi 4 décembre:** les épreuves de la journée sont accessibles avec le **billet Salon**, dans la limite des places disponibles en tribunes.
- **Samedi 5 et dimanche 6 décembre, le matin:** les **deux premières épreuves** sont accessibles avec le billet Salon, là encore selon les places disponibles.
- **Samedi et dimanche après-midi:** l'accès aux grandes épreuves exige la formule **Accès Salon + Jumping International**, qui comprend une **place assise en tribune, en placement libre**.

Pour montrer une première compétition aux enfants sans ajouter d'option jumping, privilégiez donc le vendredi ou l'une des matinées du week-end. Pour être sûr de pouvoir assister aux grandes épreuves des après-midis, choisissez la formule dédiée lors de la réservation. Une épreuve est prévue le **jeudi 3 décembre**, mais **elle n'est pas ouverte au public**.

## Deux soirées distinctes les 4 et 5 décembre

Les spectacles du soir se déroulent **de 21h à 23h**. Ils ont **leur propre billetterie**, indépendante du billet Salon ordinaire. Un billet de soirée permet d'entrer dans les **halls 4 et 6 dès 18h**.

- **Vendredi 4 décembre, la Nuit du Cheval:** une soirée de **spectacle artistique équestre**, dont la présentation officielle met en avant les tableaux et la relation entre artistes et chevaux. La programmation nominative n'est pas détaillée sur la présentation actuelle.
- **Samedi 5 décembre, la Nuit du Complet by Forestier:** une soirée **sportive, immersive et participative**, consacrée au concours complet. Le billet donne également accès à l'**After Party dès 23h**.

Ces horaires comptent avec de jeunes enfants: une soirée terminée à 23h suppose encore un trajet de retour, alors qu'une visite des ateliers de jour sera généralement plus facile à aménager.

## Tarifs 2026 et gratuité des plus jeunes

La FAQ officielle affiche des **montants indicatifs TTC**: **20 €** pour un billet d'accès Salon classique, **18 €** pour le jumping du samedi, **23 €** pour le jumping du dimanche et **80 €** pour la Nuit du Cheval. **Les montants présentés pour le jumping ne doivent pas être interprétés automatiquement comme le prix total d'un billet Salon + jumping**: les formules, catégories de places et options modifient le total affiché lors de la réservation.

Le **Salon est gratuit pour les moins de 6 ans**, mais leur **billet gratuit est à retirer au guichet à l'arrivée**. Une **réduction famille** est annoncée au moment du paiement, sans montant unique publié. Pour les enfants plus âgés, renseignez l'âge exact avant de valider le panier. La gratuité d'entrée au Salon **ne doit pas être présumée valable pour les soirées**.

Pour **deux adultes avec un enfant de moins de 6 ans**, une simple entrée au Salon représente **40 € au tarif de référence**, avant réduction éventuelle, transports et restauration. Les billets étant annoncés comme valables **pour une seule entrée**, prévoyez toute la visite avant de sortir. Les places sont limitées; vérifiez le **prix final de la formule choisie**, surtout si vous ajoutez une épreuve payante ou une soirée.

## Horaires, transports et accès PMR

<!-- article-image-body:03 -->

![Entrée du parc des expositions de la porte de Versailles à Paris, photographiée en 2011.](/images/articles/2026/10/salon-du-cheval-de-paris-2026-en-famille-visite-jumping-ou-spectacle-body-03.webp)

*Photo: [Mbzt](https://commons.wikimedia.org/wiki/File:P1050999_Paris_XV_pte_de_Versailles_entr%C3%A9e_du_parc_des_expositions_rwk.JPG) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Le Salon se tient à **Paris Expo Porte de Versailles**, **pavillons 4 et 6**, au **1, place de la Porte de Versailles, 75015 Paris**.

- **Vendredi 4 et samedi 5 décembre:** **9h à 21h** pour le Salon.
- **Dimanche 6 décembre:** **9h à 18h**.
- **Vendredi et samedi soir:** spectacles **21h à 23h**.

Pour rejoindre le site, la station **Porte de Versailles** est desservie par le **métro 12** et les **tramways T2 et T3a**. Le **métro 8 (Balard)** ainsi que les **bus 80 et 39** constituent d'autres possibilités, selon le point de départ. L'organisateur signale des **places de parking limitées en raison de travaux** sur le parc des expositions.

Les détenteurs d'une **carte mobilité inclusion (CMI)** mentionnant **« invalidité » ou « priorité »** peuvent retirer sur place des billets gratuits pour le **Salon et le jumping**. L'accompagnant est également gratuit **si la carte porte la mention « accompagnant obligatoire »**; sinon il doit acheter son billet. Les **Nuits du Cheval restent payantes**. Pour les personnes en situation de handicap, la FAQ précise les parkings adaptés **portes F et R**, une arrivée des navettes spécialisées **porte H** et un accès gratuit au **hall 4**.

## Dormir à proximité après une soirée

Si vous venez pour deux journées ou pour un spectacle tardif, le [Novotel Paris Porte Versailles](https://www.booking.com/hotel/fr/novotel-paris-pte-versailles.fr.html) est annoncé à environ **100 mètres de Paris Expo** et propose des **chambres familiales**. L'[Eklo Hotels Paris Porte de Versailles](https://www.booking.com/hotel/fr/eklo-paris-porte-de-versailles-vanves.fr.html), à **Vanves**, se trouve à moins d'un kilomètre du parc et propose également des **chambres familiales** et un **restaurant**. Comparez pour vos dates la capacité réelle de la chambre avec l'âge de chaque enfant, le prix total et les conditions d'annulation; aucune disponibilité particulière n'est garantie.

Si vous hésitez entre plusieurs rendez-vous équestres en France, notre guide d'[Equita Lyon 2026 en famille](/articles/evenements/equita-lyon-2026-en-famille-village-enfants-billets-et-spectacles/) présente les activités et les billets de cet autre salon, organisé à Chassieu près de Lyon.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | Créations & savoir-faire 2026 à Paris en famille: billets, ateliers et dates | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/ | Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils | evenements | Saint-Jean-du-Gard, Gard, Occitanie
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/changer-de-gare-a-paris-avec-des-enfants-preparer-sa-correspondance/ | Changer de gare à Paris avec des enfants: préparer sa correspondance | vie-pratique | Paris, Paris, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/musee-maurice-denis-en-famille-decouvrir-les-nabis-a-saint-germain-en-laye/ | Musée Maurice Denis en famille: découvrir les Nabis à Saint-Germain-en-Laye | evenements | Saint-Germain-en-Laye, Yvelines, Île-de-France
- /articles/evenements/carnaval-de-guadeloupe-2027-preparer-une-premiere-sortie-avec-ses-enfants/ | Carnaval de Guadeloupe 2027: préparer une première sortie avec ses enfants | evenements | Guadeloupe
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/creations-savoir-faire-2026-a-paris-en-famille-quel-jour-et-quels-ateliers-choisir/ | 2026-10-23T06:21:12.326Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- refresh | /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | 2026-11-18T05:37:16.469Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
