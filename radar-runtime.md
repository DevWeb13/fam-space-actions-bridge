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

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

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
title: "Paris avec une poussette: métro, RER, bus ou tram, que choisir ?"
subtitle: Repérer les accès sans escaliers, contrôler les ascenseurs et prévoir un trajet de repli
summary: À Paris, le transport le plus pratique avec une poussette dépend des accès aux stations et de la possibilité de la porter. Comparez métro, RER, bus et tram, puis vérifiez les ascenseurs avant de partir.
category: voyages
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: /images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir.webp
  alt: Rame de métro MP14 sur la ligne 14 à la station Châtelet, à Paris, photographiée en 2020
sources:
  - title: RATP - Quelles gares et stations sont accessibles ? (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/gares-stations-accessibles
  - title: Île-de-France Mobilités - Équipements et services accessibles sur un trajet (20 juillet 2026)
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/je-souhaite-connaitre-les-equipements-et-services-accessibles-sur-mes-traj
  - title: Île-de-France Mobilités - Trouver un itinéraire accessible (4 mars 2026)
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/comment--trouver-un-itineraire-accessible-fauteuil-roulant
  - title: RATP - Comment connaître l'état des ascenseurs ? (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/etat-ascenseurs
  - title: RATP - État des ascenseurs par ligne
    url: https://www.ratp.fr/services/etat-equipement
  - title: RATP - Que puis-je emporter comme bagages ? (28 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/voyage-en-regle/emporter-bagages
  - title: RATP - Les règles du savoir voyager en bus (poussettes et sécurité)
    url: https://www.ratp.fr/sites/default/files/inline-files/savoir_voyager_bus.pdf
topic:
  key: voyages|paris|paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir|2026
  keywords:
    - métro Paris poussette ascenseur
    - RER Paris avec poussette
    - bus Paris poussette dépliée
    - itinéraire accessible poussette Paris
slug: paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir
status: published
publishedAt: 2026-10-28T12:27:07.504Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Paris
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(10)/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/index.md
  targetSha: eeba0dd590209084deed56e8137c5190a26109ec
  targetUrl: /articles/voyages/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/
  decision: Choisir un trajet réellement praticable avec une poussette et savoir à qui demander une aide fiable lorsque l'accessibilité d'une correspondance ou d'un ascenseur reste incertaine.
  affiliationPotential: Conserver l'hébergement Booking déjà intégré; aucune nouvelle offre nécessaire pour ce conseil de mobilité.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: needs_query_check
    basis: "Visibilité récente : 26 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-29
    peakEnd: 2026-10-31
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 26
    recentImpressions: 0
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - métro Paris poussette ascenseur
      - RER Paris avec poussette
      - bus Paris poussette dépliée
      - itinéraire accessible poussette Paris
---

---
title: "Paris avec une poussette: métro, RER, bus ou tram, que choisir ?"
subtitle: Repérer les accès sans escaliers, contrôler les ascenseurs et prévoir un trajet de repli
summary: À Paris, le transport le plus pratique avec une poussette dépend des accès aux stations et de la possibilité de la porter. Comparez métro, RER, bus et tram, puis vérifiez les ascenseurs avant de partir.
category: voyages
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: "/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir.webp"
  alt: "Rame de métro MP14 sur la ligne 14 à la station Châtelet, à Paris, photographiée en 2020"
sources:
  - title: RATP - Quelles gares et stations sont accessibles ? (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/gares-stations-accessibles
  - title: Île-de-France Mobilités - Équipements et services accessibles sur un trajet (20 juillet 2026)
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/je-souhaite-connaitre-les-equipements-et-services-accessibles-sur-mes-traj
  - title: Île-de-France Mobilités - Trouver un itinéraire accessible (4 mars 2026)
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/comment--trouver-un-itineraire-accessible-fauteuil-roulant
  - title: RATP - Comment connaître l'état des ascenseurs ? (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/etat-ascenseurs
  - title: RATP - État des ascenseurs par ligne
    url: https://www.ratp.fr/services/etat-equipement
  - title: RATP - Que puis-je emporter comme bagages ? (28 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/voyage-en-regle/emporter-bagages
  - title: Île-de-France Mobilités - Accessibilité des transports et Infomobi
    url: https://www.iledefrance-mobilites.fr/le-reseau/transports-faciles-d-acces
  - title: RATP - Les règles du savoir voyager en bus (poussettes et sécurité)
    url: https://www.ratp.fr/sites/default/files/inline-files/savoir_voyager_bus.pdf
topic:
  key: voyages|paris|paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir|2026
  keywords:
    - métro Paris poussette ascenseur
    - RER Paris avec poussette
    - bus Paris poussette dépliée
    - itinéraire accessible poussette Paris
slug: paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir
status: published
publishedAt: 2026-10-28T12:27:07.504Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Paris
---
<!-- article-image-credit -->
*Photo: [Adnane](https://commons.wikimedia.org/wiki/File:MP14_de_ligne_14_%C3%A0_Chatelet.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Avec une poussette, le trajet le plus rapide sur le plan du métro n'est pas toujours le plus facile. Une station sans ascenseur ou une correspondance avec des escaliers peut obliger à porter l'enfant, la poussette et les sacs. Pour choisir entre métro, RER, bus et tramway à Paris, le critère décisif est simple: **pouvez-vous plier et porter la poussette, ou vous faut-il un trajet sans marches de bout en bout ?**

## Métro: la ligne 14 est la plus simple à envisager

<!-- article-image-body:01 -->

![Ascenseur de la station Hôpital Bicêtre sur la ligne 14 du métro, photographié en 2024](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Ascenseur_Station_H%C3%B4pital_Bic%C3%AAtre_M%C3%A9tro_Paris_Ligne_14_-_Le_Kremlin-Bic%C3%AAtre_(FR94)_-_2024-06-26_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Selon la RATP, **seule la ligne 14 est accessible en autonomie sur l'ensemble de son parcours**. Les autres lignes du métro parisien comportent encore de nombreux accès par escaliers. Un escalator ne remplace pas un ascenseur lorsqu'on ne peut pas porter sa poussette.

Si vous pouvez la plier et la porter, d'autres lignes peuvent convenir. Sinon, vérifiez précisément les accès de la station de départ, de la station d'arrivée et de chaque correspondance. Même sur la ligne 14, un ascenseur temporairement hors service peut rendre le parcours impraticable.

## RER, tramway et bus: les alternatives en surface ou avec moins de marches

<!-- article-image-body:03 -->

![Tramway Citadis 402 de la ligne T3 à Paris, portes ouvertes à Porte d'Ivry en 2006](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-03.webp)

*Photo: [Pline](https://commons.wikimedia.org/wiki/File:Rame-tramway-paris-T3.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Rame MI09 du RER A en gare de Lyon à Paris, photographiée en 2012](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-02.webp)

*Photo: [Poudou99](https://commons.wikimedia.org/wiki/File:Rame_MI09_du_RER_A_-_PLY_-_IMG_1605.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Une grande partie des gares du RER A et du RER B sont aménagées pour l'accessibilité, mais **ne présumez pas que toutes les gares et correspondances le sont**. Il faut examiner le trajet complet.

Le tramway est souvent pratique si un arrêt se trouve près de votre destination: le réseau est largement accessible, mais l'approche de l'arrêt et les perturbations restent à vérifier.

Le bus évite les longs couloirs souterrains. En contrepartie, une poussette ouverte peut prendre de la place dans un véhicule bondé. Un bus ou un tram direct, même un peu plus lent, peut être plus confortable qu'un métro avec plusieurs changements.

## Poussette dépliée dans un bus RATP: les règles à connaître

<!-- article-image-body:04 -->

![Autobus RATP Irisbus Citelis de la ligne 197 stationné à Paris en février 2020](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-04.webp)

*Photo: [Mohamed SY](https://commons.wikimedia.org/wiki/File:Irisbus_Citelis_RATP.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

La RATP accepte les poussettes, de préférence pliées. **Dans ses bus standards et articulés, deux poussettes dépliées au maximum sont admises; dans les midibus et minibus, une seule.** Ces règles concernent les bus RATP: vérifiez celles de l'opérateur si vous empruntez un autre réseau.

Les poussettes pliées montent par la porte avant. Une poussette dépliée peut accéder par la porte centrale **avec l'accord du conducteur et après validation du titre de transport**. Elle doit stationner freins serrés, avec l'enfant attaché, sur l'emplacement prévu. L'emplacement réservé en priorité aux personnes en fauteuil roulant doit leur être cédé si nécessaire.

Si la place manque, il faudra éventuellement plier la poussette ou attendre un autre bus. Le nombre maximal autorisé ne garantit donc pas qu'une place soit disponible à chaque passage.

## Vérifier un trajet réellement praticable avant de partir

Sur l'application ou le site Île-de-France Mobilités, recherchez votre trajet, ouvrez la feuille de route et choisissez **« Accéder aux détails sur l'accessibilité »**: les équipements et l'état des ascenseurs sont indiqués pour les différentes étapes. La rubrique « Gares, stations, arrêts » permet aussi de consulter une station précise.

Si vous ne pouvez pas porter la poussette, le filtre **« Itinéraires accessibles »** peut aider à repérer un parcours adapté aux fauteuils roulants. C'est un point de départ utile, pas une garantie automatique pour toutes les poussettes: vérifiez encore les accès réels et les équipements.

Juste avant de partir, consultez l'**état des ascenseurs RATP par ligne** pour le métro et les RER A et B, ou le suivi d'Île-de-France Mobilités pour les autres opérateurs. Contrôlez surtout la sortie et les correspondances: un ascenseur qui fonctionne à l'entrée ne suffit pas si la sortie impose des marches.

Si une correspondance, un accès ou l'état d'un ascenseur reste incertain, vous pouvez demander un renseignement complémentaire à [Infomobi, le service d'information sur l'accessibilité d'Île-de-France Mobilités](https://www.iledefrance-mobilites.fr/le-reseau/transports-faciles-d-acces), au **09 70 81 83 85** (numéro non surtaxé), de **7 h à 22 h, sept jours sur sept sauf le 1er mai**. Ce service aide à préparer le déplacement, mais ne garantit ni l'absence de panne ni une prise en charge sur place. Vérifiez toujours le parcours complet avant le départ.

Comparez enfin le trajet porte à porte, y compris la marche jusqu'à l'arrêt et la dernière portion à pied. Si vous avez besoin d'un accès sans marches, gardez en tête un bus ou un tram de remplacement plutôt que de compter sur l'aide d'autres voyageurs dans les escaliers.

## Séjourner à Paris avec un bébé: choisir aussi son point de départ

Pour quelques jours, un appartement avec cuisine peut simplifier les repas et les biberons. Le [Citadines Bastille Gare de Lyon Paris, proposé sur Booking.com](https://www.booking.com/hotel/fr/citadines-paris-bastille-nation.fr.html), dispose de studios et appartements avec cuisine équipée, notamment d'un micro-ondes, et d'un ascenseur dans la résidence. L'établissement annonce environ dix minutes à pied jusqu'à la gare de Lyon. Vérifiez la capacité du logement, les équipements bébé, le chemin piéton et les disponibilités avant de réserver: l'ascenseur de la résidence ne garantit pas l'accessibilité de la gare voisine.

Pour les billets et forfaits selon l'âge des enfants, consultez notre guide [Transports à Paris avec des enfants: quel titre choisir pour payer juste ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/). Avec une poussette et des valises à l'arrivée, retrouvez les trajets détaillés vers [Orly](https://www.fam-space.fr/articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/) et [Paris-Charles-de-Gaulle](https://www.fam-space.fr/articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(10)/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir/index.md

---
title: "Paris avec une poussette: métro, RER, bus ou tram, que choisir ?"
subtitle: Repérer les accès sans escaliers, contrôler les ascenseurs et prévoir un trajet de repli
summary: À Paris, le transport le plus pratique avec une poussette dépend des accès aux stations et de la possibilité de la porter. Comparez métro, RER, bus et tram, puis vérifiez les ascenseurs avant de partir.
category: voyages
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: "/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir.webp"
  alt: "Rame de métro MP14 sur la ligne 14 à la station Châtelet, à Paris, photographiée en 2020"
sources:
  - title: RATP - Quelles gares et stations sont accessibles ? (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/gares-stations-accessibles
  - title: Île-de-France Mobilités - Équipements et services accessibles sur un trajet (20 juillet 2026)
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/je-souhaite-connaitre-les-equipements-et-services-accessibles-sur-mes-traj
  - title: Île-de-France Mobilités - Trouver un itinéraire accessible (4 mars 2026)
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/s-informer-sur-l-accessibilite/comment--trouver-un-itineraire-accessible-fauteuil-roulant
  - title: RATP - Comment connaître l'état des ascenseurs ? (27 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/information-trafic/etat-ascenseurs
  - title: RATP - État des ascenseurs par ligne
    url: https://www.ratp.fr/services/etat-equipement
  - title: RATP - Que puis-je emporter comme bagages ? (28 août 2026)
    url: https://www.ratp.fr/aide-contact/questions/preparer-mon-trajet/voyage-en-regle/emporter-bagages
  - title: RATP - Les règles du savoir voyager en bus (poussettes et sécurité)
    url: https://www.ratp.fr/sites/default/files/inline-files/savoir_voyager_bus.pdf
topic:
  key: voyages|paris|paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir|2026
  keywords:
    - métro Paris poussette ascenseur
    - RER Paris avec poussette
    - bus Paris poussette dépliée
    - itinéraire accessible poussette Paris
slug: paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir
status: published
publishedAt: 2026-10-28T12:27:07.504Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Paris
---
<!-- article-image-credit -->
*Photo: [Adnane](https://commons.wikimedia.org/wiki/File:MP14_de_ligne_14_%C3%A0_Chatelet.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Avec une poussette, le trajet le plus rapide sur le plan du métro n'est pas toujours le plus facile. Une station sans ascenseur ou une correspondance avec des escaliers peut obliger à porter l'enfant, la poussette et les sacs. Pour choisir entre métro, RER, bus et tramway à Paris, le critère décisif est simple: **pouvez-vous plier et porter la poussette, ou vous faut-il un trajet sans marches de bout en bout ?**

## Métro: la ligne 14 est la plus simple à envisager

<!-- article-image-body:01 -->

![Ascenseur de la station Hôpital Bicêtre sur la ligne 14 du métro, photographié en 2024](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Ascenseur_Station_H%C3%B4pital_Bic%C3%AAtre_M%C3%A9tro_Paris_Ligne_14_-_Le_Kremlin-Bic%C3%AAtre_(FR94)_-_2024-06-26_-_1.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Selon la RATP, **seule la ligne 14 est accessible en autonomie sur l'ensemble de son parcours**. Les autres lignes du métro parisien comportent encore de nombreux accès par escaliers. Un escalator ne remplace pas un ascenseur lorsqu'on ne peut pas porter sa poussette.

Si vous pouvez la plier et la porter, d'autres lignes peuvent convenir. Sinon, vérifiez précisément les accès de la station de départ, de la station d'arrivée et de chaque correspondance. Même sur la ligne 14, un ascenseur temporairement hors service peut rendre le parcours impraticable.

## RER, tramway et bus: les alternatives en surface ou avec moins de marches

<!-- article-image-body:03 -->

![Tramway Citadis 402 de la ligne T3 à Paris, portes ouvertes à Porte d'Ivry en 2006](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-03.webp)

*Photo: [Pline](https://commons.wikimedia.org/wiki/File:Rame-tramway-paris-T3.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Rame MI09 du RER A en gare de Lyon à Paris, photographiée en 2012](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-02.webp)

*Photo: [Poudou99](https://commons.wikimedia.org/wiki/File:Rame_MI09_du_RER_A_-_PLY_-_IMG_1605.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Une grande partie des gares du RER A et du RER B sont aménagées pour l'accessibilité, mais **ne présumez pas que toutes les gares et correspondances le sont**. Il faut examiner le trajet complet.

Le tramway est souvent pratique si un arrêt se trouve près de votre destination: le réseau est largement accessible, mais l'approche de l'arrêt et les perturbations restent à vérifier.

Le bus évite les longs couloirs souterrains. En contrepartie, une poussette ouverte peut prendre de la place dans un véhicule bondé. Un bus ou un tram direct, même un peu plus lent, peut être plus confortable qu'un métro avec plusieurs changements.

## Poussette dépliée dans un bus RATP: les règles à connaître

<!-- article-image-body:04 -->

![Autobus RATP Irisbus Citelis de la ligne 197 stationné à Paris en février 2020](/images/articles/2026/10/paris-avec-une-poussette-metro-rer-ou-bus-quel-trajet-choisir-body-04.webp)

*Photo: [Mohamed SY](https://commons.wikimedia.org/wiki/File:Irisbus_Citelis_RATP.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:04 -->

La RATP accepte les poussettes, de préférence pliées. **Dans ses bus standards et articulés, deux poussettes dépliées au maximum sont admises; dans les midibus et minibus, une seule.** Ces règles concernent les bus RATP: vérifiez celles de l'opérateur si vous empruntez un autre réseau.

Les poussettes pliées montent par la porte avant. Une poussette dépliée peut accéder par la porte centrale **avec l'accord du conducteur et après validation du titre de transport**. Elle doit stationner freins serrés, avec l'enfant attaché, sur l'emplacement prévu. L'emplacement réservé en priorité aux personnes en fauteuil roulant doit leur être cédé si nécessaire.

Si la place manque, il faudra éventuellement plier la poussette ou attendre un autre bus. Le nombre maximal autorisé ne garantit donc pas qu'une place soit disponible à chaque passage.

## Vérifier un trajet réellement praticable avant de partir

Sur l'application ou le site Île-de-France Mobilités, recherchez votre trajet, ouvrez la feuille de route et choisissez **« Accéder aux détails sur l'accessibilité »**: les équipements et l'état des ascenseurs sont indiqués pour les différentes étapes. La rubrique « Gares, stations, arrêts » permet aussi de consulter une station précise.

Si vous ne pouvez pas porter la poussette, le filtre **« Itinéraires accessibles »** peut aider à repérer un parcours adapté aux fauteuils roulants. C'est un point de départ utile, pas une garantie automatique pour toutes les poussettes: vérifiez encore les accès réels et les équipements.

Juste avant de partir, consultez l'**état des ascenseurs RATP par ligne** pour le métro et les RER A et B, ou le suivi d'Île-de-France Mobilités pour les autres opérateurs. Contrôlez surtout la sortie et les correspondances: un ascenseur qui fonctionne à l'entrée ne suffit pas si la sortie impose des marches.

Comparez enfin le trajet porte à porte, y compris la marche jusqu'à l'arrêt et la dernière portion à pied. Si vous avez besoin d'un accès sans marches, gardez en tête un bus ou un tram de remplacement plutôt que de compter sur l'aide d'autres voyageurs dans les escaliers.

## Séjourner à Paris avec un bébé: choisir aussi son point de départ

Pour quelques jours, un appartement avec cuisine peut simplifier les repas et les biberons. Le [Citadines Bastille Gare de Lyon Paris, proposé sur Booking.com](https://www.booking.com/hotel/fr/citadines-paris-bastille-nation.fr.html), dispose de studios et appartements avec cuisine équipée, notamment d'un micro-ondes, et d'un ascenseur dans la résidence. L'établissement annonce environ dix minutes à pied jusqu'à la gare de Lyon. Vérifiez la capacité du logement, les équipements bébé, le chemin piéton et les disponibilités avant de réserver: l'ascenseur de la résidence ne garantit pas l'accessibilité de la gare voisine.

Pour les billets et forfaits selon l'âge des enfants, consultez notre guide [Transports à Paris avec des enfants: quel titre choisir pour payer juste ?](https://www.fam-space.fr/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/). Avec une poussette et des valises à l'arrivée, retrouvez les trajets détaillés vers [Orly](https://www.fam-space.fr/articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/) et [Paris-Charles-de-Gaulle](https://www.fam-space.fr/articles/voyages/rejoindre-l-aeroport-paris-cdg-en-famille-rer-b-bus-9517-ou-taxi/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/atelier-des-lumieres-avec-un-enfant-quel-programme-choisir-et-peut-on-venir-avec-une-poussette/ | Atelier des Lumières avec un enfant: quel programme choisir et peut-on venir avec une poussette ? | activites | Paris, Paris, Île-de-France
- /articles/evenements/salon-du-chocolat-paris-2026-avec-des-enfants-quel-billet-choisir-et-quels-ateliers-reserver/ | Salon du Chocolat Paris 2026 avec des enfants: quel billet choisir et quels ateliers réserver | evenements | Paris, Paris, Île-de-France
- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/cuisine/ateliers-cuisine-parent-enfant-a-paris-lesquels-choisir-selon-l-age-et-le-budget/ | Ateliers cuisine parent-enfant à Paris: lesquels choisir selon l’âge et le budget ? | cuisine | Paris, Paris, Île-de-France
- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | Rejoindre Orly en famille: métro 14, Orlyval ou taxi en 2026 | voyages | Orly, Val-de-Marne, Île-de-France
- /articles/parentalite/maisons-des-1000-premiers-jours-a-paris-deux-adresses-pour-les-parents-et-les-bebes/ | Maisons des 1000 premiers jours à Paris: deux adresses pour les parents et les bébés | parentalite | Paris, Paris, Île-de-France
- /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | Atelier bâton de pluie gratuit à Paris le 18 novembre 2026: dès 6 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | Lecture d'hiver gratuite à Paris le 12 décembre 2026: deux séances pour les 1-3 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/spectacle-de-noel-gratuit-a-paris-le-5-decembre-2026-p-tit-loup-et-la-magie-en-famille/ | Spectacle de Noël gratuit à Paris le 5 décembre 2026: Mon p'tit loup magique | evenements | Paris, Paris, Île-de-France
- /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | Bricolages de Noël gratuits à Paris le 19 décembre 2026: un atelier dès 4 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | Atelier déco de Noël gratuit à Paris le 28 novembre 2026: bricolage dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/voyages/refuge-de-l-arche-en-famille-decouvrir-les-animaux-recueillis-et-preparer-sa-visite/ | Refuge de l’Arche en famille: découvrir les animaux recueillis et préparer sa visite | voyages | Château-Gontier-sur-Mayenne, Mayenne, Pays de la Loire
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/musee-du-jouet-de-poissy-en-famille-visite-tarifs-et-exposition-sur-le-precinema/ | Musée du Jouet de Poissy en famille: visite, tarifs et exposition sur le précinéma | voyages | Poissy, Yvelines, Île-de-France

### Historique Radar lié

- opportunity | /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | 2026-10-13T15:33:13.378Z
- refresh | /articles/voyages/aeroport-d-orly-avec-des-enfants-metro-14-orlyval-ou-taxi/ | 2026-11-08T13:32:47.773Z
- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-deco-de-noel-gratuit-a-paris-le-28-novembre-2026-creer-en-recup-art-des-8-ans/ | 2026-11-05T23:35:44.031Z
- opportunity | /articles/activites/atelier-musical-gratuit-a-paris-le-18-novembre-2026-fabriquer-un-baton-de-pluie-des-6-ans/ | 2026-11-06T12:30:50.449Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/bricolages-de-noel-gratuits-a-paris-le-19-decembre-2026-creer-en-famille-des-4-ans/ | 2026-11-06T03:27:40.597Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/activites/lecture-d-hiver-gratuite-a-paris-le-12-decembre-2026-deux-seances-pour-les-1-3-ans/ | 2026-11-06T09:33:42.136Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
