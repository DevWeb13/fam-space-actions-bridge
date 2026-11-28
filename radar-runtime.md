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
title: "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?"
subtitle: Prix, réductions, jours d'utilisation et points à vérifier avant de payer la carte
summary: "Carte Avantage Adulte SNCF à 49 €: 30 % de réduction pour le titulaire et 60 % pour jusqu'à 3 enfants de 4 à 11 ans, sous conditions. Est-elle rentable en famille?"
slug: carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants
status: published
publishedAt: 2026-08-29T16:41:39+02:00
updatedAt: 2026-08-31T11:16:22+02:00
category: bons-plans
readingTime: 4
topic:
  key: bons-plans|france|carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants|2026
  keywords:
    - Carte Avantage Adulte SNCF
    - réduction train famille
image:
  src: /images/articles/2026/08/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants.webp
  alt: Rame TGV INOUI SNCF circulant sur une ligne ferroviaire française
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(08)/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/index.md
  targetSha: a5f0605b27ff60410b74006a95fd2b9dabaabc79
  targetUrl: /articles/bons-plans/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/
  decision: Savoir si une seule carte suffit pour les voyageurs de sa famille selon leurs âges et leurs jours de voyage, réserver ensemble les bons tarifs et comparer l’économie réelle au coût de la carte.
  affiliationPotential: Aucune offre naturelle parmi les partenaires autorisés pour la carte SNCF ou ses billets ferroviaires. Conserver le lien officiel SNCF Connect; ne pas ajouter un hébergement ni une offre sans destination précise.
  gsc:
    retrievedAt: 2026-11-28T07:56:00+01:00
    dataThrough: 2026-11-26
    signal: uncertain
    basis: "Baisse d'impressions possible; cause non établie, diagnostic par requêtes à effectuer. Diagnostic sur 1 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-11
    peakEnd: 2026-11-17
    recentStart: 2026-11-20
    recentEnd: 2026-11-26
    peakImpressions: 572
    recentImpressions: 409
    commonQueries: 1
    positionDelta: -7.425
    impressionRatio: 0.706
    focusQueries:
      - carte avantage adulte
      - carte sncf enfant famille
      - accompagnant carte avantage
      - carte avantage adulte accompagnant
      - carte avantage famille
---

## Mission retenue
Actualiser le guide Carte Avantage Adulte SNCF à partir des Tarifs Voyageurs du 24 novembre 2026 et des indications pratiques de réservation.

## Pourquoi cette mission
Les deux premiers candidats du snapshot (Dijon et Chantilly) ont été actualisés sur master aujourd'hui. La page SNCF vient ensuite pour les pertes d'impressions; leur cause n'est pas établie. Lacune indépendante confirmée: le guide ne précise pas que seul un enfant de moins de 12 ans permet l'aller simple en semaine, ni l'achat simultané obligatoire pour l'accompagnant adulte ou le risque de retarification d'un aller-retour modifié.

## Décision du lecteur
Déterminer les personnes réellement éligibles, le bon mode de réservation et l'économie familiale nette avant d'acheter la carte.

## Faits à traiter
- Distinguer bambin de moins de 4 ans, enfant de 4 à 11 ans et adolescent: un ado de 12 ans ou plus ne déclenche pas l'éligibilité en semaine. Respecter la formulation officielle « plus de 12 ans » pour l'accompagnant à -30 %, sans extrapoler le cas exact des 12 ans. Un seul accompagnant adulte et jusqu'à trois enfants éligibles; tous les billets concernés achetés simultanément et titulaire au tarif Avantage. Préciser le profil accompagnant à sélectionner dans SNCF Connect. Le tarif Bambin n'est pas réduit par la carte; vérifier gratuité sans siège et forfait 9 € avec siège.
- Expliquer les allers simples éligibles, les nuits de week-end et la limite de 61 jours entre aller et retour. Si une modification ou annulation fait perdre l'éligibilité de l'aller-retour, les billets peuvent être retarifés, même sur un trajet déjà effectué. Vérifier la symétrie des correspondances TER lorsque nécessaire et rappeler OUIGO exclu.
- Ajouter un exemple hypothétique comparant des prix réellement comparables, y compris le tarif enfant ordinaire de 50 % sur le prix adulte de référence, non une économie supplémentaire de 60 % sur le billet enfant déjà réduit; retrancher les 49 € de la carte et éviter de promettre une économie face à un tarif promotionnel. Conserver les plafonds 49/69/89 € avec leur réserve officielle, la validité et le QR code. La page commerciale SNCF Connect indique 5 mois pour différer le début, tandis que ses mentions légales et les Tarifs Voyageurs indiquent 6 mois: distinguer conditions générales et possibilité effectivement proposée au moment de l'achat.
- Conserver les informations utiles existantes, les deux images et crédits; ajouter les sources structurées actuellement absentes et réduire les répétitions de conclusion.

## Sources de départ
- https://www.sncf-voyageurs.com/medias-publics/2026-11/tarifs_voyageurs-24-novembre-2026-vdef.pdf (sections 3.2.1.2 à 3.2.1.8 et 3.2.2.1; page imprimée 68 contrôlée visuellement)
- https://www.sncf-voyageurs.com/fr/voyagez-avec-nous/en-france/tarifs-grandes-lignes/carte-avantage/carte-avantage-adulte/
- https://www.sncf-connect.com/catalogue/description/7d3ea65a-87c9-4ac5-a96d-fce2e327428b
- https://www.sncf-voyageurs.com/fr/contactez-nous/questions-et-reponses/achat-et-reservation/
- https://www.sncf-connect.com/aide/l-offre-pour-les-enfants-et-les-familles

## Affiliation
Aucun partenaire ferroviaire ou vendeur de cette carte dans la liste autorisée. Le lien officiel reste pertinent.

## Continuations internes
Conserver le lien vérifié vers /articles/bons-plans/billet-conge-annuel-sncf-famille-reduction/ et orienter les familles éligibles vers /articles/bons-plans/carte-familles-nombreuses-reductions-demarches/ sans répéter leurs démarches. Les deux routes ont été ouvertes et vérifiées.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(08)/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants/index.md

---
title: "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?"
subtitle: Prix, réductions, jours d'utilisation et points à vérifier avant de payer la carte
summary: "Carte Avantage Adulte SNCF à 49 €: 30 % de réduction pour le titulaire et 60 % pour jusqu'à 3 enfants de 4 à 11 ans, sous conditions. Est-elle rentable en famille?"
slug: carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants
status: published
publishedAt: 2026-08-29T16:41:39+02:00
updatedAt: 2026-08-31T11:16:22+02:00
category: bons-plans
readingTime: 4
topic:
  key: bons-plans|france|carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants|2026
  keywords:
    - Carte Avantage Adulte SNCF
    - réduction train famille
image:
  src: "/images/articles/2026/08/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants.webp"
  alt: "Rame TGV INOUI SNCF circulant sur une ligne ferroviaire française"
---
<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Rame_TGV_Inoui_Ligne_Ferroviaire_M%C3%A2con_Amb%C3%A9rieu_-_Polliat_(FR01)_-_2026-08-22_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

La Carte Avantage Adulte peut être particulièrement intéressante pour un parent qui voyage en train avec des enfants, car sa règle la plus utile est aussi celle que l'on peut facilement manquer: en présence d'un enfant, le tarif Avantage peut s'appliquer même en semaine.

La carte est destinée aux voyageurs de 27 à 59 ans. Elle coûte actuellement 49 € et reste valable un an. Avant de l'acheter, le bon réflexe est donc de regarder les trajets que vous prévoyez réellement sur les douze prochains mois et de vérifier si les réductions couvrent au moins le prix de la carte.

## Ce que la carte réduit pour une famille

<!-- article-image-body:01 -->

![Train Intercités SNCF Paris Clermont photographié à Moulins](/images/articles/2026/08/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants-body-01.webp)

*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:BB_26000_et_Corail_Intercit%C3%A9s_Paris-Clermont_%C3%A0_Moulins_(juillet_2025).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Sur les TGV INOUI et INTERCITÉS éligibles, la SNCF annonce:

- 30 % de réduction pour le titulaire de la carte;
- 30 % pour un accompagnant de plus de 12 ans voyageant avec le titulaire;
- 60 % pour jusqu'à trois enfants accompagnants de 4 à 11 ans inclus.

Pour bénéficier de la réduction enfant, les billets des enfants doivent être achetés en même temps que celui du titulaire. L'accompagnant qui profite du tarif lié à la carte doit voyager avec son titulaire.

Les réductions indiquées ne concernent pas OUIGO. Pour les TER, les conditions et le niveau de réduction dépendent des régions: il faut donc vérifier le tarif régional avant de compter sur la carte pour un trajet principalement effectué en TER.

La page officielle de la [Carte Avantage Adulte SNCF](https://www.sncf-voyageurs.com/fr/voyagez-avec-nous/en-france/tarifs-grandes-lignes/carte-avantage/carte-avantage-adulte/) détaille les réductions et les conditions en vigueur.

## Avec un enfant, la semaine devient possible

Pour un adulte voyageant seul, la Carte Avantage Adulte est surtout encadrée par le week-end. La réduction s'applique notamment aux allers simples du samedi ou du dimanche, ainsi qu'aux allers-retours comprenant au moins une nuit du vendredi, du samedi ou du dimanche.

La règle change lorsque le titulaire voyage avec un enfant ou un bambin: le tarif Avantage peut alors être utilisé tous les jours de la semaine. L'enfant ou le bambin qui permet cette condition doit être présent au contrôle et disposer du titre de transport requis.

C'est un point important pour une famille qui voyage par exemple un mardi ou un jeudi: il ne faut pas écarter automatiquement la carte sous prétexte que le trajet se déroule hors week-end.

## Dans quels cas les 49 € peuvent être vite récupérés

<!-- article-image-body:02 -->

![Intérieur de seconde classe dans la salle haute d'un TGV Duplex](/images/articles/2026/08/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants-body-02.webp)

<!-- /article-image-body:02 -->

La carte mérite surtout d'être comparée au tarif normal lorsque plusieurs personnes profitent de ses réductions sur le même voyage. Un parent titulaire peut cumuler sa propre réduction avec celle d'un accompagnant de plus de 12 ans et celles de trois enfants de 4 à 11 ans au maximum.

La SNCF indique que la carte est en moyenne rentabilisée dès le troisième trajet simple, mais ce chiffre reste une moyenne. Pour votre famille, le calcul utile est plus simple:

1. relevez le prix total du ou des voyages que vous prévoyez;
2. regardez le prix obtenu avec la Carte Avantage sur les mêmes trains;
3. additionnez l'économie sur tous les voyageurs concernés;
4. retirez les 49 € payés pour la carte.

Si l'économie cumulée dépasse 49 €, la carte commence réellement à faire gagner de l'argent sur les trajets prévus. Si vous ne comptez effectuer qu'un seul petit trajet, l'achat peut au contraire ne pas être intéressant.

## Attention aux prix plafonnés affichés par la SNCF

La SNCF affiche encore des plafonds de prix pour certains trajets directs en seconde classe avec TGV INOUI et INTERCITÉS: 49 € pour moins de 1 h 30, 69 € entre 1 h 30 et 3 h et 89 € au-delà de 3 h.

Mais ses propres conditions précisent que la garantie formelle de ces plafonds allait jusqu'au 31 août 2024 et qu'ils restent actuellement en vigueur. Il vaut donc mieux vérifier le prix proposé au moment de la réservation plutôt que de construire le budget familial plusieurs mois à l'avance uniquement sur ces montants.

## Choisir la bonne date de début de validité

La date de début de validité n'est pas obligatoirement le jour de l'achat. SNCF Connect permet de choisir un début de validité jusqu'à cinq mois après l'achat.

Si votre premier grand trajet n'est prévu que dans quelques semaines, décaler l'activation peut éviter de perdre inutilement une partie de l'année de validité. Vous pouvez [commander la Carte Avantage Adulte sur SNCF Connect](https://www.sncf-connect.com/catalogue/description/carte-avantage-adulte) lorsque votre comparaison confirme qu'elle est intéressante.

Une fois la carte dématérialisée, elle peut être présentée sous forme de QR code. Un document officiel d'identité peut également être demandé lors du contrôle.

## Le contrôle à faire avant de payer

Avant l'achat, vérifiez quatre éléments sur votre voyage précis: l'âge du titulaire, l'âge des enfants, le type de train et les jours de circulation. La Carte Avantage Adulte est surtout avantageuse lorsque la composition de la famille permet à plusieurs voyageurs de profiter simultanément des réductions.

Pour un trajet en semaine, assurez-vous que l'enfant ou le bambin qui rend le tarif éligible voyage bien avec le titulaire. Pour un trajet comportant un TER, consultez aussi les règles de la région concernée. Cette vérification prend quelques minutes et évite d'acheter une carte dont les conditions ne correspondent finalement pas au voyage prévu.

Pour un aller-retour en France, pensez aussi à comparer le [billet congé annuel SNCF](/articles/bons-plans/billet-conge-annuel-sncf-famille-reduction/). Selon votre situation, il peut apporter une réduction sans acheter de carte, mais les deux dispositifs ne se cumulent pas sur le même billet.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/carte-familles-nombreuses-reductions-demarches/ | Carte Familles Nombreuses: réductions, conditions et demande en ligne | bons-plans
- /articles/voyages/sarlat-sans-voiture-avec-des-enfants-est-ce-realiste-pour-un-week-end/ | Sarlat sans voiture avec des enfants: est-ce réaliste pour un week-end? | voyages | Sarlat-la-Canéda, Dordogne, Nouvelle-Aquitaine
- /articles/voyages/train-de-la-rhune-avec-des-enfants-billets-duree-et-conseils-en-2026/ | Train de la Rhune avec des enfants: billets, durée et conseils en 2026 | voyages | Sare, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/sorties/cite-du-train-a-mulhouse-en-famille-que-voir-selon-l-age/ | Cité du Train à Mulhouse en famille: que voir selon l’âge ? | sorties | Mulhouse, Haut-Rhin, Grand Est
- /articles/voyages/voyager-train-enfants-ete-2026-conseils/ | Voyager en train avec des enfants à l’été 2026: billets, poussette et organisation | voyages
- /articles/bons-plans/billet-conge-annuel-sncf-famille-reduction/ | Billet congé annuel SNCF: comment obtenir 25 % de réduction pour un voyage en famille | bons-plans
- /articles/vie-pratique/train-mobigo-en-famille-quels-billets-choisir-et-comment-preparer-le-trajet/ | TRAIN Mobigo en famille: quels billets choisir et comment préparer le trajet | vie-pratique | Bourgogne-Franche-Comté
- /articles/vie-pratique/vendee-sans-voiture-avec-des-enfants-ou-est-ce-vraiment-pratique/ | Vendée sans voiture avec des enfants: où est-ce vraiment pratique? | vie-pratique | La Roche-sur-Yon, Vendée, Pays de la Loire
- /articles/bons-plans/musee-des-beaux-arts-de-draguignan-en-famille-gratuites-et-ateliers/ | Musée des Beaux-Arts de Draguignan en famille: gratuités et ateliers | bons-plans | Draguignan, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/halle-de-la-machine-et-envol-des-pionniers-quels-billets-choisir-en-famille/ | Halle de la Machine et Envol des Pionniers: quels billets choisir en famille ? | bons-plans | Toulouse, Haute-Garonne, Occitanie
- /articles/bons-plans/pass-chateaux-du-loir-et-cher-quelles-economies-en-famille/ | Pass châteaux du Loir-et-Cher: quelles économies en famille ? | bons-plans | Loir-et-Cher, Centre-Val de Loire
- /articles/bons-plans/bordeaux-citypass-en-famille-quel-pass-choisir-pour-economiser/ | Bordeaux CityPass en famille: quel pass choisir pour économiser ? | bons-plans | Bordeaux, Gironde, Nouvelle-Aquitaine
- /articles/bons-plans/sainte-chapelle-et-conciergerie-en-famille-a-paris-quels-billets-choisir/ | Sainte-Chapelle et Conciergerie en famille à Paris: quels billets choisir ? | bons-plans | Paris, Paris, Île-de-France
- /articles/bons-plans/bretagne-en-ter-avec-des-enfants-quels-billets-choisir-pour-payer-moins/ | Bretagne en TER avec des enfants: quels billets choisir pour payer moins? | bons-plans | Bretagne
- /articles/bons-plans/n-gouja-en-famille-profiter-de-la-plage-a-petit-budget/ | N’Gouja en famille: profiter de la plage à petit budget | bons-plans | Kani-Kéli, Mayotte, Mayotte
- /articles/bons-plans/passeport-des-musees-04-visiter-en-famille-a-prix-reduit/ | Passeport des musées 04: visiter en famille à prix réduit | bons-plans | Alpes-de-Haute-Provence, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/langres-en-famille-deux-musees-gratuits-le-premier-dimanche-du-mois/ | Langres en famille: deux musées gratuits le premier dimanche du mois | bons-plans | Langres, Haute-Marne, Grand Est
- /articles/bons-plans/bourges-en-famille-a-petit-budget-musees-cathedrale-et-jardins/ | Bourges en famille à petit budget: musées, cathédrale et jardins | bons-plans | Bourges, Cher, Centre-Val de Loire
- /articles/bons-plans/le-mont-saint-michel-en-famille-a-petit-prix-en-automne-et-en-hiver/ | Le Mont-Saint-Michel en famille à petit prix en automne et en hiver | bons-plans | Le Mont-Saint-Michel, Manche, Normandie
- /articles/bons-plans/propriano-en-famille-une-chasse-au-tresor-gratuite-pour-decouvrir-la-ville/ | Propriano en famille: une chasse au trésor gratuite pour découvrir la ville | bons-plans | Propriano, Corse-du-Sud, Corse
- /articles/bons-plans/train-de-balagne-en-famille-arrets-plages-et-tarifs-entre-calvi-et-l-ile-rousse/ | Train de Balagne en famille: arrêts, plages et tarifs entre Calvi et L'Île-Rousse | bons-plans | Haute-Corse, Corse
- /articles/bons-plans/musees-a-la-reunion-en-famille-quel-pass-choisir-pour-economiser/ | Musées à La Réunion en famille: quel pass choisir pour économiser ? | bons-plans | La Réunion, La Réunion

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
