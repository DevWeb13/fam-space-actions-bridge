# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 3/3

Tu es secrétaire de rédaction et fact-checker final. Ta mission principale est l'anti-régression, pas de réécrire l'article une deuxième fois.

Pour un refresh, compare l'article source exact et le candidat de phase 2 fournis intégralement plus bas. Le candidat final doit rester autonome et actuel. Pour chaque information présente avant et absente après, décide explicitement: toujours vraie et utile -> restaure-la; périmée ou fausse -> laisse-la supprimée; réellement redondante ou sans valeur -> suppression acceptable.

Accorde une attention particulière aux prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques familiaux.

Ensuite:
- lis l'article du début à la fin comme un lecteur sur téléphone et vérifie que l'introduction, les sections et la fin ne répètent pas la même information; supprime les conseils évidents, paraphrases de sources, sections sans information nouvelle et toute conclusion qui ne ferait que résumer;
- vérifie que l'angle sert l'article sans devenir l'article entier: une micro-question utile ne doit pas être répétée pendant toute la page, et le titre final doit décrire le sujet plutôt que recopier mécaniquement la décision de phase 1;
- vérifie que les modifications répondent au diagnostic et à la décision de phase 1;
- revérifie les faits déterminants auprès des sources officielles. Une affirmation attribuée à une source doit respecter exactement son niveau de certitude: ne transforme jamais « peut constituer un frein » en « déconseille », ni une possibilité en obligation ou interdiction;
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; vérifie qu'aucun lien officiel du corps ne mène, même indirectement depuis une page informative, à l'achat ou à la réservation de la même prestation sur le site officiel; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
- contrôle les liens internes et les routes. Garde ceux qui prolongent réellement la lecture et, lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, raccourcis le passage au contexte nécessaire puis oriente naturellement le lecteur vers elle;
- vérifie `reviewAt` / `eventEndsAt` lorsqu'un contenu temporaire existe;
- ne force ni longueur ni affiliation.

Pour une opportunity, revérifie doublons, chevauchement avec les pages proches, catégorie, territoire, sources, cycle de vie et utilité. Un angle distinct ne justifie pas de recopier les parties générales déjà couvertes ailleurs. Le slug technique reste géré mécaniquement.

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

## Règles partenaires

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

## Candidat validé de la phase précédente

---
title: "Carte Avantage Adulte SNCF: quand est-elle intéressante avec des enfants?"
subtitle: Réductions des accompagnants, voyages en semaine, exemples de budget et conditions de réservation
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
  phase: 2
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
sources:
  - title: "SNCF Voyageurs: Tarifs Voyageurs du 24 novembre 2026"
    url: https://www.sncf-voyageurs.com/medias-publics/2026-11/tarifs_voyageurs-24-novembre-2026-vdef.pdf
  - title: "SNCF Voyageurs: Carte Avantage Adulte"
    url: https://www.sncf-voyageurs.com/fr/voyagez-avec-nous/en-france/tarifs-grandes-lignes/carte-avantage/carte-avantage-adulte/
  - title: "SNCF Connect: Carte Avantage Adulte et mentions légales"
    url: https://www.sncf-connect.com/catalogue/description/7d3ea65a-87c9-4ac5-a96d-fce2e327428b
  - title: "SNCF Connect: offres enfants et familles"
    url: https://www.sncf-connect.com/aide/l-offre-pour-les-enfants-et-les-familles
  - title: "SNCF Connect: TGV et mentions tarifaires"
    url: https://www.sncf-connect.com/tgv
  - title: "SNCF Connect: profils des compagnons de voyage"
    url: https://www.sncf-connect.com/aide/compagnons-voyage-compte-client
---

<!-- article-image-credit -->
*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Rame_TGV_Inoui_Ligne_Ferroviaire_M%C3%A2con_Amb%C3%A9rieu_-_Polliat_(FR01)_-_2026-08-22_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

La **Carte Avantage Adulte SNCF coûte 49 € pour un an**, hors promotion. Destinée aux voyageurs de 27 à 59 ans, elle peut suffire pour réduire le prix des billets de plusieurs membres d'une famille. Mais l'âge des enfants et les jours de voyage déterminent si les réductions s'appliquent.

## Une seule carte pour combien de voyageurs ?

<!-- article-image-body:01 -->

![Train Intercités SNCF Paris Clermont photographié à Moulins](/images/articles/2026/08/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants-body-01.webp)

*Photo: [Florian Pépellin](https://commons.wikimedia.org/wiki/File:BB_26000_et_Corail_Intercit%C3%A9s_Paris-Clermont_%C3%A0_Moulins_(juillet_2025).JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Sur les TGV INOUI et INTERCITÉS éligibles, en première ou seconde classe hors offres OPTIMUM, la [SNCF](https://www.sncf-voyageurs.com/fr/voyagez-avec-nous/en-france/tarifs-grandes-lignes/carte-avantage/carte-avantage-adulte/) prévoit les réductions suivantes:

- **30 % pour le titulaire** de la carte.
- **30 % pour un seul accompagnant de plus de 12 ans**, sans qu'il ait besoin de sa propre carte.
- **60 % pour trois enfants de 4 à 11 ans maximum**, sur le tarif Standard du jour, et non sur le billet enfant déjà réduit.

Les accompagnants doivent voyager avec le titulaire, au tarif Avantage. Réservez tous leurs billets simultanément, dans le même train et la même classe. Sur SNCF Connect, ajoutez chaque personne au formulaire de recherche avec son âge et ses éventuelles cartes personnelles; sélectionnez la Carte Avantage Adulte pour son titulaire et contrôlez les tarifs proposés aux accompagnants avant de payer. N'attribuez pas la carte du titulaire à une autre personne. Si votre enfant a exactement 12 ans, vérifiez le tarif proposé: les conditions officielles réservent la réduction accompagnant adulte aux personnes de plus de 12 ans.

Pour un enfant de moins de 4 ans, le trajet est gratuit sans siège réservé (un bambin par voyageur); déclarez-le dès la réservation. Une place assise coûte 9 € par trajet direct avec le forfait Bambin, et une couchette 30 € avec le forfait Bambin Nuit. En correspondance, les forfaits s'additionnent. La carte ne réduit pas ces montants et le forfait doit être acheté avec le billet adulte. Retrouvez les [conditions de voyage des enfants](https://www.sncf-connect.com/aide/l-offre-pour-les-enfants-et-les-familles).

Les réductions Avantage ne concernent pas OUIGO. Sur les TER, les règles régionales diffèrent et la réduction nationale de 60 % pour les enfants ne s'applique pas.

## Peut-on utiliser la carte en semaine avec des enfants ?

Les conditions tarifaires SNCF du 24 novembre 2026 distinguent deux situations:

- Un aller simple est éligible le samedi ou le dimanche, ou n'importe quel jour lorsque le titulaire voyage avec au moins un enfant de moins de 12 ans, bambin compris.
- Un aller-retour peut être éligible sans enfant s'il comprend une nuit du vendredi au samedi, du samedi au dimanche ou du dimanche au lundi, avec un maximum de 61 jours entre les deux trajets.

Ainsi, un parent voyageant le mardi avec son enfant de 8 ans peut bénéficier du tarif Avantage. Avec seulement un adolescent de 13 ans, cet aller simple en semaine ne remplit pas la condition liée à l'âge. Si l'éligibilité dépend de la présence d'un enfant, il doit effectivement voyager et disposer du titre de transport adapté.

Pour certains allers-retours avec une correspondance TER, la réduction nécessite également des trajets symétriques: mêmes gares et parcours inverse au retour.

**Attention si vous modifiez votre retour:** lorsque l'échange ou l'annulation supprime la condition de week-end d'un aller-retour réservé à ce titre, le billet inchangé peut être refacturé au tarif sans réduction applicable lors de l'achat initial, même si ce trajet a déjà été effectué. Le billet échangé est recalculé au tarif du jour. Cette règle concerne aussi les accompagnants. Consultez les [Tarifs Voyageurs SNCF, volume 3, section 3.2.1.3](https://www.sncf-voyageurs.com/medias-publics/2026-11/tarifs_voyageurs-24-novembre-2026-vdef.pdf).

## Quand les 49 € sont-ils rentabilisés ?

<!-- article-image-body:02 -->

![Intérieur de seconde classe dans la salle haute d'un TGV Duplex](/images/articles/2026/08/carte-avantage-adulte-sncf-quand-est-elle-interessante-avec-des-enfants-body-02.webp)

<!-- /article-image-body:02 -->

La SNCF indique un amortissement moyen dès le troisième trajet simple. Une famille peut toutefois récupérer le prix de la carte plus tôt, selon le tarif des trains et le nombre de voyageurs.

Prenons un exemple fictif pour deux adultes et deux enfants de 6 et 9 ans, sur un trajet éligible dont le tarif adulte de référence est de 80 €, sans autre promotion et en supposant que ce même tarif sert de base aux deux comparaisons:

- Sans carte: 2 billets adultes à 80 € et 2 billets enfants à 40 €, soit 240 €.
- Avec carte: 2 billets adultes à 56 € et 2 billets enfants à 32 €, soit 176 €.
- Économie sur les billets: 64 €. Après l'achat de la carte à 49 €, le gain net est de 15 €.

Le tarif enfant ordinaire représente ici la moitié du prix adulte; la remise Avantage de 60 % ne s'ajoute pas à cette réduction. Ce calcul illustre le mécanisme, pas un prix de train disponible.

Pour prendre votre décision, comparez le montant total des mêmes trains avec et sans carte, sur les voyages prévus pendant sa validité. Retirez le prix de la carte des économies cumulées. Un billet promotionnel peut rester moins cher et un petit trajet isolé ne suffit pas toujours à amortir l'achat.

## Les plafonds de prix et leur garantie

SNCF Connect mentionne des plafonds pour les trajets directs nationaux de jour ou en place assise de nuit, en seconde classe sur TGV INOUI et INTERCITÉS: 49 € pour moins de 1 h 30, 69 € entre 1 h 30 et 3 h, 89 € au-delà. Les durées correspondent à la moyenne du trajet direct.

Les [mentions tarifaires SNCF Connect](https://www.sncf-connect.com/tgv) précisent que la garantie initiale courait jusqu'au 31 août 2024. Ces montants restent affichés dans les conditions commerciales consultées, mais ne constituent pas une garantie de prix pour vos futurs voyages: vérifiez le tarif effectivement proposé à la réservation.

## Choisir la date de début de validité

La carte est personnelle et valable 365 jours à compter du début choisi. Si votre premier voyage est prévu dans quelques mois, vous pouvez différer son activation. Les conditions tarifaires prévoient un délai maximal de six mois après l'achat, tandis que la présentation commerciale de SNCF Connect indique cinq mois. Vérifiez la date réellement disponible dans le formulaire lorsque vous [commandez la Carte Avantage Adulte](https://www.sncf-connect.com/catalogue/description/7d3ea65a-87c9-4ac5-a96d-fce2e327428b).

La carte est envoyée au format PDF avec un QR code, que vous pouvez retrouver dans votre compte. Elle doit être valide à la date du trajet; présentez-la avec une pièce d'identité au contrôle.

## Les autres réductions à comparer

Pour un aller-retour en France, le [billet congé annuel SNCF](/articles/bons-plans/billet-conge-annuel-sncf-famille-reduction/) peut être intéressant selon votre situation, sans acheter de carte. Il ne se cumule pas avec le tarif Avantage sur le même billet. Si vous avez au moins trois enfants, comparez également les conditions de la [Carte Familles Nombreuses](/articles/bons-plans/carte-familles-nombreuses-reductions-demarches/).

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
