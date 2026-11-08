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
title: "Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026"
subtitle: Depuis Paris, comparez les prix, les correspondances et les contraintes avec poussette ou valises.
summary: "Orly en famille en 2026: prix de la ligne 14, RER B et Orlyval, forfaits taxi, tarifs enfants et conseils pour les bagages et poussettes."
category: voyages
location:
  city: Orly
  department: Val-de-Marne
  region: Île-de-France
image:
  src: /images/articles/2026/10/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi.webp
  alt: Accès à la station Aéroport d'Orly de la ligne 14 du métro, photographié en juin 2024
sources:
  - title: Île-de-France Mobilités - Accéder aux aéroports
    url: https://www.iledefrance-mobilites.fr/acceder-aux-aeroports
  - title: Île-de-France Mobilités - Ligne 14 et Orly
    url: https://www.iledefrance-mobilites.fr/actualites/fermeture-orlybus
  - title: Île-de-France Mobilités - RER B et Orlyval
    url: https://www.iledefrance-mobilites.fr/acceder-aux-aeroports-franciliens-
  - title: Île-de-France Mobilités - Ticket Paris Région Aéroports
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports
  - title: Île-de-France Mobilités - Tarifs enfants
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: Service-Public - Tarifs taxis 2026
    url: https://entreprendre.service-public.gouv.fr/actualites/A15396
  - title: DGCCRF - Tarifs réglementés des taxis
    url: https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/taxi-comprendre-les-tarifs-reglementes
  - title: Service-Public - Sièges auto
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F628
  - title: Île-de-France Mobilités - Forfait Navigo Semaine et exclusions
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-navigo-semaine
topic:
  key: voyages|orly|aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi|2026
  keywords:
    - rejoindre aéroport Orly avec enfants
    - métro 14 Orly prix famille 2026
    - Orlyval RER B Antony enfants
    - taxi Paris Orly forfait 2026 famille
    - Orly poussette bagages transports
slug: aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi
status: published
publishedAt: 2026-10-13T15:33:13.271Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Orly
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(10)/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/index.md
  targetSha: b77b435ab7f33caa3d30c2c04209ec4ba3baa110
  targetUrl: /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/
  decision: Choisir le trajet et surtout le titre de transport réellement nécessaire pour rejoindre Orly avec enfants, en vérifiant si un forfait déjà détenu évite les 14 € par adulte.
  affiliationPotential: Conserver le transfert familial Welcome Pickups et l'hébergement Booking près d'Orly; ne pas ajouter de partenaire artificiel.
  gsc:
    retrievedAt: 2026-11-08T02:28:56+01:00
    dataThrough: 2026-11-05
    signal: uncertain
    basis: "Visibilité récente : 43 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-16
    peakEnd: 2026-10-18
    recentStart: 2026-11-03
    recentEnd: 2026-11-05
    peakImpressions: 43
    recentImpressions: 1
    commonQueries: 0
    positionDelta: null
    impressionRatio: null
    focusQueries: []
---

## Mission retenue
Actualiser le guide Orly en famille sur les alternatives au ticket aéroport unitaire, sans refaire ses comparaisons déjà utiles entre métro 14, Orlyval et taxi.

## Pourquoi cette mission
La visibilité GSC a chuté de 43 à 1 impression entre deux fenêtres de trois jours, sans diagnostic de cause. Lacune indépendante vérifiée: l'article explique Navigo Semaine mais ne mentionne pas clairement les forfaits Navigo Mois/Annuel toutes zones et Paris Visite couvrant l'accès aéroportuaire selon leurs conditions. Une famille possédant déjà ces titres pourrait acheter inutilement plusieurs tickets à 14 €.

## Décision du lecteur
Vérifier son forfait avant de payer des tickets aéroport, puis choisir la ligne 14, le RER B + Orlyval ou le taxi selon le trajet, les enfants et les bagages.

## Faits à traiter
Préciser les conditions exactes de couverture des accès à Orly par Navigo Mois/Annuel et Paris Visite, en distinguant métro 14 et Orlyval, sans généraliser à tous les forfaits. Préserver les tarifs 2026 du ticket (14 €/7 €), exemples familiaux, correspondances, forfaits taxis, sièges enfants, accessibilité, trois images et crédits, liens internes et partenaires. Ne pas attribuer la chute GSC à cette lacune.

## Sources de départ
- https://www.iledefrance-mobilites.fr/aide-et-contacts/titres-unitaires-tarifs-reduits/quels-tickets-pour-l-aeroport
- https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports
- https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-navigo-semaine

## Affiliation
Conserver les liens existants Welcome Pickups et Booking, sans changer les faits éditoriaux à partir d'offres commerciales.

## Continuations internes
- Renvoyer au guide Fam Space « Transports à Paris avec des enfants » pour la comparaison détaillée des forfaits.
- Limiter ici le complément aux conditions pertinentes pour rejoindre Orly.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(10)/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/index.md

---
title: "Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026"
subtitle: Depuis Paris, comparez les prix, les correspondances et les contraintes avec poussette ou valises.
summary: "Orly en famille en 2026: prix de la ligne 14, RER B et Orlyval, forfaits taxi, tarifs enfants et conseils pour les bagages et poussettes."
category: voyages
location:
  city: Orly
  department: Val-de-Marne
  region: Île-de-France
image:
  src: "/images/articles/2026/10/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi.webp"
  alt: "Accès à la station Aéroport d'Orly de la ligne 14 du métro, photographié en juin 2024"
sources:
  - title: Île-de-France Mobilités - Accéder aux aéroports
    url: https://www.iledefrance-mobilites.fr/acceder-aux-aeroports
  - title: Île-de-France Mobilités - Ligne 14 et Orly
    url: https://www.iledefrance-mobilites.fr/actualites/fermeture-orlybus
  - title: Île-de-France Mobilités - RER B et Orlyval
    url: https://www.iledefrance-mobilites.fr/acceder-aux-aeroports-franciliens-
  - title: Île-de-France Mobilités - Ticket Paris Région Aéroports
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports
  - title: Île-de-France Mobilités - Tarifs enfants
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans
  - title: Service-Public - Tarifs taxis 2026
    url: https://entreprendre.service-public.gouv.fr/actualites/A15396
  - title: DGCCRF - Tarifs réglementés des taxis
    url: https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/taxi-comprendre-les-tarifs-reglementes
  - title: Service-Public - Sièges auto
    url: https://www.service-public.gouv.fr/particuliers/vosdroits/F628
  - title: Île-de-France Mobilités - Forfait Navigo Semaine et exclusions
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-navigo-semaine
topic:
  key: voyages|orly|aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi|2026
  keywords:
    - rejoindre aéroport Orly avec enfants
    - métro 14 Orly prix famille 2026
    - Orlyval RER B Antony enfants
    - taxi Paris Orly forfait 2026 famille
    - Orly poussette bagages transports
slug: aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi
status: published
publishedAt: 2026-10-13T15:33:13.271Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Orly
---
<!-- article-image-credit -->
*Photo: [Idris2000](https://commons.wikimedia.org/wiki/File:A%C3%A9roport_d%E2%80%99Orly_ligne_14_2024_12.jpg) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Depuis Paris, rejoindre l'aéroport d'Orly avec des enfants ne coûte pas forcément moins cher en métro qu'en taxi. **La ligne 14 est directe**, tandis que le RER B impose une correspondance avec Orlyval à Antony. Avec quatre voyageurs, le forfait d'un taxi parisien peut être compétitif selon la rive et les frais de réservation. Voici les trajets et les prix 2026 à comparer.

## Ligne 14: un trajet direct depuis plusieurs gares parisiennes

La ligne 14 dessert directement le terminus **Aéroport d'Orly**. Elle passe notamment par Saint-Lazare, Châtelet, Gare de Lyon et Bercy. [Île-de-France Mobilités annonce 25 minutes entre Châtelet et Orly](https://www.iledefrance-mobilites.fr/actualites/fermeture-orlybus), sans compter le trajet jusqu'à la station, la marche dans l'aéroport ni les formalités avant le vol.

**Toute la ligne 14 est accessible aux personnes à mobilité réduite.** C'est un avantage avec une poussette, surtout si vous la rejoignez sans autre correspondance. Vérifiez néanmoins les ascenseurs des stations empruntées avant d'y aller. Le métro ne circule pas toute la nuit: pour un départ très matinal ou une arrivée tardive, contrôlez le premier ou le dernier passage du jour.

## RER B et Orlyval: une correspondance à Antony

<!-- article-image-body:02 -->

![Intérieur d'une rame Orlyval VAL 206 rénovée, photographiée en avril 2021](/images/articles/2026/10/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi-body-02.webp)

*Photo: [Greenwitcher](https://commons.wikimedia.org/wiki/File:Orlyval_-_Int%C3%A9rieur_r%C3%A9nov%C3%A9_VAL_206_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Station Orlyval d'Antony photographiée en janvier 2026, point de correspondance avec le RER B](/images/articles/2026/10/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Station_Antony_Orlyval_-_Antony_(FR92)_-_2026-01-17_-_8.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Si votre logement est proche du **RER B**, vous pouvez descendre à **Antony**, puis prendre la navette automatique **Orlyval** vers les terminaux. [Le trajet Orlyval dure environ six minutes](https://www.iledefrance-mobilites.fr/acceder-aux-aeroports-franciliens-), avec des passages annoncés toutes les cinq à sept minutes en service normal.

La correspondance à Antony reste le principal inconvénient avec enfants et valises. La gare dispose d'une assistance par rampe amovible: signalez-vous au guichet si nécessaire. Orlyval a ses propres horaires; ne présumez pas qu'il fonctionne aussi tard que le métro 14. Si vous devez déjà changer de ligne pour rejoindre le RER B, comparez le trajet porte à porte avec celui par la 14.

## Quel ticket aéroport acheter en 2026?

Le [Ticket Paris Région <> Aéroports](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/ticket-paris-region-aeroports) coûte **14 € au plein tarif**, **7 € pour les enfants de 4 à moins de 10 ans**; les **moins de 4 ans voyagent gratuitement**. Il couvre la ligne 14 vers Orly et le trajet RER B puis Orlyval. Les correspondances en métro, train et RER sont autorisées pendant deux heures, sans sortir du réseau. Le ticket ne couvre pas les bus et tramways.

Pour **deux adultes et deux enfants de 4 et 8 ans**, un aller simple revient donc à **42 €**. Si les enfants ont 10 ans ou plus, le total atteint **56 €**. Le ticket Métro-Train-RER ordinaire ne permet pas d'emprunter ces dessertes aéroportuaires.

Le titre s'achète sur **smartphone compatible** ou **passe Navigo Easy**, avec un support par voyageur payant. Attention: un Navigo Easy contenant déjà un ticket Métro-Train-RER ne peut pas recevoir un ticket aéroport. Si vous possédez un [**Navigo Semaine toutes zones**](https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-navigo-semaine) valide, la **ligne 14 vers Orly est couverte, mais pas Orlyval**. Vérifiez votre forfait avant d'acheter.

Pour comparer les tickets urbains et les forfaits sur tout le séjour, notre guide [Transports à Paris avec des enfants](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) détaille Navigo Jour, Navigo Semaine et Paris Visite.

## Taxi: le prix se calcule pour la voiture

Pour un trajet direct **entre Paris intra-muros et Orly**, les [forfaits taxi 2026](https://entreprendre.service-public.gouv.fr/actualites/A15396) sont de **36 € depuis ou vers la rive gauche** et **45 € depuis ou vers la rive droite**. Ces montants concernent la voiture entière, pas chaque passager.

Avec les deux adultes et les deux enfants de 4 et 8 ans de notre exemple, le taxi revient donc à **36 ou 45 €**, contre **42 € en métro ou RER**, hors suppléments. La réservation d'un taxi parisien entraîne **4 € de supplément si elle est immédiate**, ou **7 € si elle est faite à l'avance**. Un supplément de **5,50 €** peut s'appliquer à partir du cinquième passager. En revanche, [aucun supplément bagages n'est autorisé pour les taxis parisiens](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/taxi-comprendre-les-tarifs-reglementes). Hors Paris intra-muros, ces forfaits ne sont pas automatiquement applicables.

Le taxi évite de porter les valises dans les couloirs du métro, mais son temps de parcours dépend de la circulation. **Réservez un siège enfant adapté si vous en avez besoin**: [la réglementation prévoit une exception à l'obligation de siège auto dans les taxis](https://www.service-public.gouv.fr/particuliers/vosdroits/F628), ce qui ne garantit pas qu'un véhicule en dispose spontanément.

Pour organiser à l'avance un transfert avec siège enfant et espace pour la poussette, vous pouvez aussi [demander un devis à Welcome Pickups](https://www.welcomepickups.com/paris/airport-transfer-for-families/). Le service propose des véhicules familiaux et des sièges adaptés sur demande, **avec un supplément pour chaque siège enfant**. Comparez le devis complet au forfait du taxi réglementé: ce sont deux prestations distinctes.

## Vol très tôt, poussette ou valises: ce qu'il faut anticiper

Les horaires des premiers et derniers métros ne couvrent pas tous les vols. Contrôlez le service de la ligne 14 ou d'Orlyval pour votre date, ainsi que les ascenseurs des stations utilisées. Les **25 minutes entre Châtelet et Orly** ne comprennent ni le trajet jusqu'à Châtelet, ni la marche jusqu'au terminal, ni les formalités aéroportuaires. Si vous réservez un véhicule, précisez le nombre de bagages, la poussette et les sièges enfants nécessaires.

Pour un départ à l'aube ou une arrivée tardive, [un hébergement familial près d'Orly](https://www.booking.com/family/city/fr/orly.html) peut éviter une liaison nocturne depuis Paris. Et si vous devez attendre en ville entre deux vols, notre guide [Consigne à bagages à Paris en famille](/articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/) aide à choisir où laisser les valises.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | Aéroport CDG en famille: RER B, bus 9517 ou taxi en 2026? | voyages | Roissy-en-France, Val-d'Oise, Île-de-France
- /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | Paris avec une poussette: métro, RER, bus ou tram, que choisir ? | voyages | Paris, Paris, Île-de-France
- /articles/vie-pratique/consigne-a-bagages-a-paris-en-famille-gare-ou-depot-en-ville/ | Consigne à bagages à Paris en famille: gare ou dépôt en ville? | vie-pratique | Paris, Paris, Île-de-France
- /articles/vie-pratique/consigne-a-marseille-saint-charles-avec-des-enfants-ou-laisser-valises-et-poussette/ | Consigne à Marseille Saint-Charles avec des enfants: où laisser valises et poussette? | vie-pratique | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | Disneyland Paris en RER A avec des enfants: trajet et tarifs 2026 | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/voyages/prendre-l-avion-avec-un-bebe-poussette-siege-auto-et-bagages-a-verifier-avant-de-reserver/ | Prendre l'avion avec un bébé: poussette, siège auto et bagages à vérifier avant de réserver | voyages
- /articles/voyages/chateau-de-versailles-depuis-paris-avec-des-enfants-rer-c-train-n-ou-l/ | Château de Versailles depuis Paris avec des enfants: RER C, train N ou L ? | voyages | Versailles, Yvelines, Île-de-France
- /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026 | voyages | Orly, Val-de-Marne, Île-de-France
- /articles/activites/mac-val-en-famille-a-vitry-sur-seine-visites-ateliers-et-conseils-pratiques/ | MAC VAL en famille à Vitry-sur-Seine: visites, ateliers et conseils pratiques | activites | Vitry-sur-Seine, Val-de-Marne, Île-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/exploradome-en-famille-fabriq-expo-tarifs-et-conseils-de-visite/ | Exploradôme en famille: Fabriq’Expo, tarifs et conseils de visite | evenements | Vitry-sur-Seine, Val-de-Marne, Île-de-France
- /articles/voyages/week-end-sans-voiture-a-joinville-le-pont-ou-dormir-et-quoi-faire-sur-les-bords-de-marne/ | Week-end sans voiture à Joinville-le-Pont: où dormir et quoi faire sur les bords de Marne | voyages | Joinville-le-Pont, Val-de-Marne, Île-de-France
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/voyages/la-parata-et-les-iles-sanguinaires-en-famille-balades-et-sortie-en-mer/ | La Parata et les îles Sanguinaires en famille: balades et sortie en mer | voyages | Ajaccio, Corse-du-Sud, Corse
- /articles/voyages/pont-de-gau-en-famille-en-automne-et-en-hiver-flamants-roses-et-marais/ | Pont de Gau en famille en automne et en hiver: flamants roses et marais | voyages | Saintes-Maries-de-la-Mer, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/voyages/domaine-de-chaalis-en-famille-que-visiter-pendant-les-travaux/ | Domaine de Chaalis en famille: que visiter pendant les travaux ? | voyages | Fontaine-Chaalis, Oise, Hauts-de-France
- /articles/voyages/laon-en-famille-un-week-end-entre-cite-medievale-et-souterrains/ | Laon en famille: un week-end entre cité médiévale et souterrains | voyages | Laon, Aisne, Hauts-de-France
- /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | Château de Fontainebleau depuis Paris en famille: train R, bus 3401 et budget | voyages | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/voyages/week-end-dans-les-pierres-dorees-en-famille-oingt-jarnioux-et-balades/ | Week-end dans les Pierres Dorées en famille: Oingt, Jarnioux et balades | voyages | Rhône, Auvergne-Rhône-Alpes
- /articles/voyages/super-besse-en-famille-premiers-skis-et-activites-sans-ski-en-hiver-2026-2027/ | Super-Besse en famille: premiers skis et activités sans ski en hiver 2026-2027 | voyages | Besse-et-Saint-Anastaise, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/voyages/aubrac-lozerien-en-famille-deux-jours-entre-nasbinals-lacs-et-cascade-du-deroc/ | Aubrac lozérien en famille: deux jours entre Nasbinals, lacs et cascade du Déroc | voyages | Nasbinals, Lozère, Occitanie

### Historique Radar lié

- opportunity | /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | 2026-10-13T15:33:13.378Z
- opportunity | /articles/voyages/chateau-de-fontainebleau-depuis-paris-en-famille-train-r-bus-3401-et-budget/ | 2026-10-31T16:31:36.357Z
- opportunity | /articles/voyages/chateau-de-versailles-depuis-paris-avec-des-enfants-rer-c-train-n-ou-l/ | 2026-10-31T07:32:47.278Z
- opportunity | /articles/voyages/disneyland-paris-en-rer-a-avec-des-enfants-trajet-et-tickets-en-2026/ | 2026-10-31T04:29:30.633Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/ | 2026-10-28T12:27:07.569Z
- opportunity | /articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/ | 2026-10-15T09:28:56.552Z
- refresh | /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | 2026-11-06T21:35:30.246Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
