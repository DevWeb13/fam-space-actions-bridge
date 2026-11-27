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
title: "Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ?"
subtitle: Quatre adresses autour de Nancy, Pont-à-Mousson et Lunéville, avec les horaires et les ventes spéciales à connaître
summary: "Quatre adresses de meubles d'occasion en Meurthe-et-Moselle: horaires, dépôts, dons, réparation et ouvertures exceptionnelles de décembre 2026."
slug: meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer
status: published
publishedAt: 2026-10-29T00:59:22+01:00
updatedAt: 2026-11-12T01:28:37.882Z
category: maison
readingTime: 5
location:
  city: ""
  department: Meurthe-et-Moselle
  region: Grand Est
topic:
  key: maison|meurthe-et-moselle|meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer|2026
  keywords:
    - meubles occasion Meurthe-et-Moselle
    - ressourcerie Nancy
    - donner meubles 54
    - Repair Café Lorraine
image:
  src: /images/articles/2026/10/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer.webp
  alt: Fontaine de la place Stanislas à Nancy, en Meurthe-et-Moselle
sources:
  - title: La Benne Idée - recyclerie, boutique et réservation
    url: https://labenneidee.fr/
  - title: La Benne Idée - adresse, horaires et adhésion
    url: https://labenneidee.fr/contact/
  - title: La Benne Idée - conditions des dons
    url: https://labenneidee.fr/collecter/
  - title: SNI - Recyclerie de Pont-à-Mousson
    url: https://www.sni-pam.fr/secteurs-dinterventions/insertion-par-lactivite-economique/la-recyclerie
  - title: Office de tourisme du Bassin de Pont-à-Mousson - brocantes SNI
    url: https://www.tourisme-bassindepontamousson.fr/agenda/1284001280_brocante-salle-des-ventes-sni/
  - title: La Benne Idée - livraison de meubles
    url: https://labenneidee.fr/livraison/
  - title: Emmaüs International - Communauté Emmaüs 54
    url: https://www.emmaus-international.org/fr/membergroup/communaute-emmaus-54/
  - title: Emmaüs France - modalités des dons
    url: https://emmaus-france.org/donner/
  - title: Ville de Lunéville - annuaire des associations, Recyclune
    url: https://luneville.fr/accueil/associations/
  - title: Ville de Lunéville - fiche Recyclune et contact
    url: https://luneville.fr/accueil/associations/name/recyclune/
  - title: Repair Cafés Réseau Lorraine - fonctionnement
    url: https://repair-cafes-lorraine.org/
  - title: Repair Cafés Réseau Lorraine - calendrier
    url: https://repairgrandnancy.fr/calendrier/
  - title: RappelConso - alertes officielles sur les produits
    url: https://rappel.conso.gouv.fr/
  - title: Service déchets du territoire de Lunéville à Baccarat - Donner, réparer et réemployer
    url: https://www.trions.fr/reparer-donner/
  - title: Tourisme Meurthe-et-Moselle - Recyclune
    url: https://tourisme-meurtheetmoselle.fr/accueil/lessentiel/patrimoine/musees/742003016-recyclune
affiliate:
  enabled: true
  type: travel
  destination: Meurthe-et-Moselle
reviewAt: 2026-12-27
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/maison/(2026)/(10)/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/index.md
  targetSha: be9983cf573fb1a2feb8f323c2a5b7df04c6f01b
  targetUrl: /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/
  decision: Choisir où acheter ou donner un meuble, notamment en décembre, sans déplacement inutile grâce aux horaires, aux conditions de dépôt et aux ouvertures exceptionnelles vérifiés.
  affiliationPotential: Conserver le comparateur KAYAK de location de fourgonnettes à Nancy, page accessible et pertinente pour transporter des meubles. Pas d'hébergement.
  gsc:
    retrievedAt: 2026-11-27T09:15:00+01:00
    dataThrough: 2026-11-25
    signal: uncertain
    basis: "Visibilité récente : 23 impressions sur trois jours, puis 2 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-30
    peakEnd: 2026-11-01
    recentStart: 2026-11-23
    recentEnd: 2026-11-25
    peakImpressions: 23
    recentImpressions: 2
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - achat vente meuble moselle
      - emmaüs meuble
      - magasin occasion meuble
      - depot meubles occasion
      - magasin de meuble de seconde main
---

Une table pour les repas, un bureau pour les devoirs ou des rangements pour les chambres: meubler une maison familiale coûte vite cher. En Meurthe-et-Moselle, des recycleries et Emmaüs proposent des meubles et des objets de seconde main. D'autres associations récupèrent les dons ou aident à réparer les petits appareils. Voici quatre adresses concrètes, de Nancy à Lunéville, et les précautions utiles avant de vous déplacer.

## Où acheter des meubles et des objets d'occasion ?

### Jarville-la-Malgrange: La Benne Idée

[La Benne Idée](https://labenneidee.fr/) est une recyclerie spécialisée dans l'univers de la maison: mobilier, vaisselle, décoration et matériaux. Elle possède également un atelier de menuiserie dédié au réemploi du bois. Les arrivages varient, ce qui en fait une bonne adresse pour chercher une petite table, des étagères ou des objets de cuisine sans payer le prix du neuf.

Vous pouvez consulter les meubles de sa boutique en ligne, **réserver un article pour venir le voir et le retirer**, sans paiement en ligne ni obligation d'achat. C'est pratique pour éviter un déplacement si vous recherchez une pièce précise.

**Adresse:** 16 avenue de la Malgrange, 54140 Jarville-la-Malgrange, à la Cité du Faire. Selon les [informations pratiques de l'association](https://labenneidee.fr/contact/), la boutique ouvre le mercredi et le vendredi de 10 h à 17 h, et le samedi de 10 h à 13 h, jusqu'à 17 h le deuxième samedi du mois. L'accès à la boutique nécessite une **adhésion de 1 €**, à régler sur place. L'association indique deux durées de validité différentes sur sa page de contact (annuelle ou à vie): demandez confirmation. La boutique annonce une **fermeture exceptionnelle le samedi 26 décembre 2026**.

### Pont-à-Mousson: la Recyclerie SNI

La [Recyclerie SNI](https://www.sni-pam.fr/secteurs-dinterventions/insertion-par-lactivite-economique/la-recyclerie), au **24 rue Thibaut II**, vend à prix solidaires des objets issus de dons et de collectes. Elle propose également une boutique sur Label Emmaüs, accessible depuis son site.

**Horaires habituels confirmés par SNI:** du lundi au vendredi de 8 h à 12 h et de 14 h à 18 h; le samedi de 9 h à 13 h et de 14 h à 17 h. **Téléphone:** 03 83 83 25 15.

**Brocantes exceptionnelles:** l'[office de tourisme du Bassin de Pont-à-Mousson](https://www.tourisme-bassindepontamousson.fr/agenda/1284001280_brocante-salle-des-ventes-sni/) annonce aussi des ventes les **dimanches 6, 13 et 20 décembre 2026, de 14 h à 18 h**, à cette même adresse. Des jouets, jeux et articles pour décorer la table des fêtes sont notamment annoncés. Les ouvertures dominicales sont ponctuelles: vérifiez l'agenda avant votre déplacement.

C'est aussi une piste pour donner du mobilier. La structure peut étudier un enlèvement à domicile, mais ne réalise pas de déménagement. Le débarras d'objets non réemployables peut être payant.

### Vandœuvre-lès-Nancy: Emmaüs 54

La [communauté Emmaüs 54](https://www.emmaus-international.org/fr/membergroup/communaute-emmaus-54/) se trouve au **32 rue du 8e Régiment d'Artillerie, 54500 Vandœuvre-lès-Nancy**. Vous pouvez y chercher du mobilier et des objets pour la maison, selon les arrivages. **Téléphone:** 03 83 29 76 79.

Les horaires de vente et de dépôt n'ont pas été confirmés sur une page officielle locale suffisamment précise. Appelez avant de venir, particulièrement si vous souhaitez donner un meuble encombrant.

### Lunéville: Recyclune

La ressourcerie associative **Recyclune** remet en circulation des objets de seconde main, notamment des meubles, de la vaisselle et du petit équipement. Le [service déchets du territoire](https://www.trions.fr/reparer-donner/) et le [tourisme départemental](https://tourisme-meurtheetmoselle.fr/accueil/lessentiel/patrimoine/musees/742003016-recyclune) indiquent une ouverture du lundi au samedi, **de 14 h à 17 h**. Vous pouvez également déposer des objets en bon état et réutilisables pendant ces heures.

**Adresse à confirmer avant de venir:** le service déchets indique le 6 rue du Coq, dans le quartier des Faïenceries, tandis que le tourisme départemental et la [fiche municipale](https://luneville.fr/accueil/associations/name/recyclune/) mentionnent le 4 rue Keller et Guérin. Appelez l'association au **07 68 82 28 99** pour identifier l'entrée actuelle et vérifier les ouvertures pendant les fêtes.

## Donner des meubles: dépôt ou enlèvement à domicile ?

Les conditions varient selon les structures. Pour éviter de charger inutilement un véhicule, vérifiez d'abord si le meuble peut être repris.

À Jarville, [La Benne Idée reçoit les dons sur place sans rendez-vous ni adhésion](https://labenneidee.fr/collecter/), aux horaires de réception indiqués par l'association. Elle refuse notamment les matelas et les assises rembourrées en mauvais état.

À Pont-à-Mousson, la Recyclerie SNI accepte les objets suffisamment propres, complets et réemployables. Pour un dépôt, une place de déchargement est prévue: sonnez à votre arrivée pour que l'équipe puisse vérifier vos dons. Pour demander un enlèvement, préparez **la liste des objets, des photos, vos coordonnées, vos disponibilités et les conditions d'accès** (étage, ascenseur). L'équipe étudie ensuite la demande; la récupération n'est pas automatique.

Chez Emmaüs, [le dépôt et le ramassage sur rendez-vous](https://emmaus-france.org/donner/) sont possibles selon les capacités de chaque communauté. L'enlèvement des dons acceptés est gratuit. Contactez Emmaüs 54 pour confirmer ce qui peut être récupéré.

Pour un meuble volumineux, communiquez ses dimensions et son état réel dès le premier contact: cela permet à l'association d'évaluer sa reprise.

## Réparer un petit appareil plutôt que le jeter

<!-- article-image-body:01 -->

![Réparation collective d'un appareil électrique dans un Repair Café à Trèves en Allemagne](/images/articles/2026/10/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer-body-01.webp)

*Photo: [RaMa2016](https://commons.wikimedia.org/wiki/File:Repair_Caf%C3%A9_Trier_Reparatur.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Un grille-pain en panne, une lampe défectueuse ou un autre objet du quotidien peut parfois être réparé. Les [Repair Cafés du Réseau Lorraine](https://repair-cafes-lorraine.org/) organisent des rencontres où des bénévoles recherchent la panne avec vous et tentent une réparation. Le résultat n'est pas garanti.

Le réseau accueille **sans inscription ni rendez-vous**, mais précise qu'il **ne prend pas en charge l'informatique ni les smartphones**. Des ateliers existent notamment à Jarville et Vandœuvre. Les séances ne sont pas permanentes: consultez le [calendrier des Repair Cafés](https://repairgrandnancy.fr/calendrier/) pour choisir le lieu et la date.

Si un appareil présente un câble abîmé, des traces de surchauffe ou une odeur de brûlé, ne le rebranchez pas pour le tester. Signalez son état aux bénévoles.

## Les vérifications avant d'acheter un meuble d'occasion

Pour une table, une commode ou une bibliothèque, quelques contrôles comptent davantage que le prix affiché:

- **Dimensions et transport:** mesurez le meuble, mais aussi les portes, l'escalier, l'ascenseur ou le coffre. Vérifiez s'il se démonte.
- **État:** inspectez les pieds, les assemblages, les tiroirs, les fixations et les traces d'humidité. Une réparation importante peut annuler l'économie.
- **Stabilité:** avec de jeunes enfants, choisissez des rangements stables et fixez au mur ceux qui risquent de basculer, avec des fixations adaptées.

Pour un **lit bébé, une chaise haute ou un autre équipement de puériculture**, vérifiez le modèle, les pièces, la notice et les éventuels rappels sur le portail officiel [RappelConso](https://rappel.conso.gouv.fr/). Si l'historique ou les éléments nécessaires à une utilisation sûre manquent, renoncez à l'achat.

Pour un couchage en hauteur, consultez aussi notre [guide sur les lits superposés et mezzanines d'occasion](https://www.fam-space.fr/articles/maison/lit-superpose-ou-mezzanine-pour-un-enfant-les-verifications-avant-d-acheter/).

Pour un achat à La Benne Idée, la recyclerie propose aussi la [livraison dans le Grand Nancy](https://labenneidee.fr/livraison/) à **40 € par voyage de camion**, selon les modalités convenues avec son équipe; hors métropole, le tarif est à demander. Si vous récupérez plusieurs meubles volumineux ailleurs autour de Nancy sans véhicule adapté, vous pouvez [comparer les utilitaires à louer sur KAYAK](https://www.kayak.fr/Nancy-Locations-de-Fourgonnette.1239.cvn.ksp). Vérifiez les dimensions de chargement, le kilométrage et le coût total avant de réserver.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/maison/(2026)/(10)/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/index.md

---
title: "Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ?"
subtitle: Quatre adresses autour de Nancy, Pont-à-Mousson et Lunéville, avec les horaires et les ventes spéciales à connaître
summary: "Ressourceries, Emmaüs, dons de meubles et Repair Cafés: quatre adresses en Meurthe-et-Moselle, les horaires utiles et les brocantes SNI de décembre 2026."
slug: meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer
status: published
publishedAt: 2026-10-29T00:59:22+01:00
updatedAt: 2026-11-12T01:28:37.882Z
category: maison
readingTime: 5
location:
  city: ""
  department: Meurthe-et-Moselle
  region: Grand Est
topic:
  key: maison|meurthe-et-moselle|meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer|2026
  keywords:
    - meubles occasion Meurthe-et-Moselle
    - ressourcerie Nancy
    - donner meubles 54
    - Repair Café Lorraine
image:
  src: /images/articles/2026/10/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer.webp
  alt: Fontaine de la place Stanislas à Nancy, en Meurthe-et-Moselle
sources:
  - title: La Benne Idée - recyclerie, boutique et réservation
    url: https://labenneidee.fr/
  - title: La Benne Idée - adresse, horaires et adhésion
    url: https://labenneidee.fr/contact/
  - title: La Benne Idée - conditions des dons
    url: https://labenneidee.fr/collecter/
  - title: SNI - Recyclerie de Pont-à-Mousson
    url: https://www.sni-pam.fr/secteurs-dinterventions/insertion-par-lactivite-economique/la-recyclerie
  - title: Office de tourisme du Bassin de Pont-à-Mousson - brocantes SNI
    url: https://www.tourisme-bassindepontamousson.fr/agenda/1284001280_brocante-salle-des-ventes-sni/
  - title: La Benne Idée - livraison de meubles
    url: https://labenneidee.fr/livraison/
  - title: Emmaüs International - Communauté Emmaüs 54
    url: https://www.emmaus-international.org/fr/membergroup/communaute-emmaus-54/
  - title: Emmaüs France - modalités des dons
    url: https://emmaus-france.org/donner/
  - title: Ville de Lunéville - annuaire des associations, Recyclune
    url: https://luneville.fr/accueil/associations/
  - title: Ville de Lunéville - fiche Recyclune et contact
    url: https://luneville.fr/accueil/associations/name/recyclune/
  - title: Repair Cafés Réseau Lorraine - fonctionnement
    url: https://repair-cafes-lorraine.org/
  - title: Repair Cafés Réseau Lorraine - calendrier
    url: https://repairgrandnancy.fr/calendrier/
  - title: RappelConso - alertes officielles sur les produits
    url: https://rappel.conso.gouv.fr/
affiliate:
  enabled: true
  type: travel
  destination: Meurthe-et-Moselle
reviewAt: 2026-12-21
---

Une table pour les repas, un bureau pour les devoirs ou des rangements pour les chambres: meubler une maison familiale coûte vite cher. En Meurthe-et-Moselle, des recycleries et Emmaüs proposent des meubles et des objets de seconde main. D'autres associations récupèrent les dons ou aident à réparer les petits appareils. Voici quatre adresses concrètes, de Nancy à Lunéville, et les précautions utiles avant de vous déplacer.

## Où acheter des meubles et des objets d'occasion ?

### Jarville-la-Malgrange: La Benne Idée

[La Benne Idée](https://labenneidee.fr/) est une recyclerie spécialisée dans l'univers de la maison: mobilier, vaisselle, décoration et matériaux. Elle possède également un atelier de menuiserie dédié au réemploi du bois. Les arrivages varient, ce qui en fait une bonne adresse pour chercher une petite table, des étagères ou des objets de cuisine sans payer le prix du neuf.

Vous pouvez consulter les meubles de sa boutique en ligne, **réserver un article pour venir le voir et le retirer**, sans paiement en ligne ni obligation d'achat. C'est pratique pour éviter un déplacement si vous recherchez une pièce précise.

**Adresse:** 16 avenue de la Malgrange, 54140 Jarville-la-Malgrange, à la Cité du Faire. Selon les [informations pratiques de l'association](https://labenneidee.fr/contact/), la boutique ouvre le mercredi et le vendredi de 10 h à 17 h, et le samedi de 10 h à 13 h, jusqu'à 17 h le deuxième samedi du mois. **L'adhésion de 1 € est valable à vie** et se règle sur place pour accéder à la boutique. Vérifiez les éventuelles fermetures exceptionnelles avant votre visite.

### Pont-à-Mousson: la Recyclerie SNI

La [Recyclerie SNI](https://www.sni-pam.fr/secteurs-dinterventions/insertion-par-lactivite-economique/la-recyclerie), au **24 rue Thibaut II**, vend à prix solidaires des objets issus de dons et de collectes. Elle propose également une boutique sur Label Emmaüs, accessible depuis son site.

**Horaires habituels confirmés par SNI:** du lundi au vendredi de 8 h à 12 h et de 14 h à 18 h; le samedi de 9 h à 13 h et de 14 h à 17 h. **Téléphone:** 03 83 83 25 15.

**Brocantes exceptionnelles:** l'[office de tourisme du Bassin de Pont-à-Mousson](https://www.tourisme-bassindepontamousson.fr/agenda/1284001280_brocante-salle-des-ventes-sni/) annonce aussi des ventes les **dimanches 6, 13 et 20 décembre 2026, de 14 h à 18 h**, à cette même adresse. Ces ouvertures ponctuelles ne remplacent pas les horaires habituels. Vérifiez l'annonce avant de vous déplacer, notamment si vous cherchez une vente le dimanche.

C'est aussi une piste pour donner du mobilier. La structure peut étudier un enlèvement à domicile, mais ne réalise pas de déménagement. Le débarras d'objets non réemployables peut être payant.

### Vandœuvre-lès-Nancy: Emmaüs 54

La [communauté Emmaüs 54](https://www.emmaus-international.org/fr/membergroup/communaute-emmaus-54/) se trouve au **32 rue du 8e Régiment d'Artillerie, 54500 Vandœuvre-lès-Nancy**. Vous pouvez y chercher du mobilier et des objets pour la maison, selon les arrivages. **Téléphone:** 03 83 29 76 79.

Les horaires de vente et de dépôt n'ont pas été confirmés sur une page officielle locale suffisamment précise. Appelez avant de venir, particulièrement si vous souhaitez donner un meuble encombrant.

### Lunéville: Recyclune

La ressourcerie associative **Recyclune** remet en circulation des objets de seconde main, notamment des meubles, de la vaisselle et du petit équipement. La [Ville de Lunéville](https://luneville.fr/accueil/associations/) situe la recyclerie **6 rue du Coq, dans la zone des Faïenceries**. Sa [fiche de contact municipale](https://luneville.fr/accueil/associations/name/recyclune/) indique le **07 68 82 28 99**.

Les horaires de vente et les modalités de dépôt n'ont pas été confirmés directement auprès de l'association: contactez-la avant de vous déplacer.

## Donner des meubles: dépôt ou enlèvement à domicile ?

Les conditions varient selon les structures. Pour éviter de charger inutilement un véhicule, vérifiez d'abord si le meuble peut être repris.

À Jarville, [La Benne Idée reçoit les dons sur place sans rendez-vous ni adhésion](https://labenneidee.fr/collecter/), aux horaires de réception indiqués par l'association. Elle refuse notamment les matelas et les assises rembourrées en mauvais état.

À Pont-à-Mousson, la Recyclerie SNI accepte les objets suffisamment propres, complets et réemployables. Pour demander un enlèvement, préparez **la liste des objets, des photos, vos coordonnées, vos disponibilités et les conditions d'accès** (étage, ascenseur). L'équipe étudie ensuite la demande; la récupération n'est pas automatique.

Chez Emmaüs, [le dépôt et le ramassage sur rendez-vous](https://emmaus-france.org/donner/) sont possibles selon les capacités de chaque communauté. L'enlèvement des dons acceptés est gratuit. Contactez Emmaüs 54 pour confirmer ce qui peut être récupéré.

Pour un meuble volumineux, communiquez ses dimensions et son état réel dès le premier contact: cela permet à l'association d'évaluer sa reprise.

## Réparer un petit appareil plutôt que le jeter

<!-- article-image-body:01 -->

![Réparation collective d'un appareil électrique dans un Repair Café à Trèves en Allemagne](/images/articles/2026/10/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer-body-01.webp)

*Photo: [RaMa2016](https://commons.wikimedia.org/wiki/File:Repair_Caf%C3%A9_Trier_Reparatur.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Un grille-pain en panne, une lampe défectueuse ou un autre objet du quotidien peut parfois être réparé. Les [Repair Cafés du Réseau Lorraine](https://repair-cafes-lorraine.org/) organisent des rencontres où des bénévoles recherchent la panne avec vous et tentent une réparation. Le résultat n'est pas garanti.

Le réseau accueille **sans inscription ni rendez-vous**, mais précise qu'il **ne prend pas en charge l'informatique ni les smartphones**. Des ateliers existent notamment à Jarville et Vandœuvre. Les séances ne sont pas permanentes: consultez le [calendrier des Repair Cafés](https://repairgrandnancy.fr/calendrier/) pour choisir le lieu et la date.

Si un appareil présente un câble abîmé, des traces de surchauffe ou une odeur de brûlé, ne le rebranchez pas pour le tester. Signalez son état aux bénévoles.

## Les vérifications avant d'acheter un meuble d'occasion

Pour une table, une commode ou une bibliothèque, quelques contrôles comptent davantage que le prix affiché:

- **Dimensions et transport:** mesurez le meuble, mais aussi les portes, l'escalier, l'ascenseur ou le coffre. Vérifiez s'il se démonte.
- **État:** inspectez les pieds, les assemblages, les tiroirs, les fixations et les traces d'humidité. Une réparation importante peut annuler l'économie.
- **Stabilité:** avec de jeunes enfants, choisissez des rangements stables et fixez au mur ceux qui risquent de basculer, avec des fixations adaptées.

Pour un **lit bébé, une chaise haute ou un autre équipement de puériculture**, vérifiez le modèle, les pièces, la notice et les éventuels rappels sur le portail officiel [RappelConso](https://rappel.conso.gouv.fr/). Si l'historique ou les éléments nécessaires à une utilisation sûre manquent, renoncez à l'achat.

Pour un couchage en hauteur, consultez aussi notre [guide sur les lits superposés et mezzanines d'occasion](https://www.fam-space.fr/articles/maison/lit-superpose-ou-mezzanine-pour-un-enfant-les-verifications-avant-d-acheter/).

Pour un achat à La Benne Idée, la recyclerie propose aussi la livraison dans le Grand Nancy à **40 € par voyage de camion**, selon les modalités convenues avec son équipe; hors métropole, le tarif est à demander. Si vous récupérez plusieurs meubles volumineux ailleurs autour de Nancy sans véhicule adapté, vous pouvez [comparer les utilitaires à louer sur KAYAK](https://www.kayak.fr/Nancy-Locations-de-Fourgonnette.1239.cvn.ksp). Vérifiez les dimensions de chargement, le kilométrage et le coût total avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/donner-acheter-d-occasion-ou-reparer-dans-le-val-d-oise-cinq-adresses-utiles/ | Donner, acheter d’occasion ou réparer dans le Val-d’Oise: cinq adresses utiles | maison | Cergy, Val-d'Oise, Île-de-France
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/cuisiner-local-en-meurthe-et-moselle-producteurs-paniers-et-idees-de-repas/ | Cuisiner local en Meurthe-et-Moselle: producteurs, paniers et idées de repas | cuisine | Meurthe-et-Moselle, Grand Est
- /articles/maison/chambre-d-enfant-a-petit-budget-dans-le-var-ou-acheter-des-meubles-d-occasion/ | Chambre d'enfant à petit budget dans le Var: où acheter des meubles d'occasion? | maison | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/meubles-d-occasion-en-ile-de-france-ou-acheter-et-comment-les-transporter/ | Meubles d’occasion en Île-de-France: où acheter et comment les transporter | maison | Île-de-France
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: horaires du défilé et de la procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/maison/composter-en-famille-dans-la-metropole-lilloise-avec-ou-sans-jardin/ | Composter en famille dans la métropole lilloise: avec ou sans jardin | maison | Nord, Hauts-de-France
- /articles/maison/composteur-gratuit-a-laval-agglomeration-quelle-solution-pour-votre-logement/ | Composteur gratuit à Laval Agglomération: quelle solution pour votre logement ? | maison | Laval, Mayenne, Pays de la Loire
- /articles/maison/renover-sa-maison-dans-l-aisne-en-2026-2027-les-demarches-et-les-aides/ | Rénover sa maison dans l’Aisne en 2026-2027: les démarches et les aides | maison | Aisne, Hauts-de-France
- /articles/maison/poterie-a-dieulefit-en-famille-ateliers-et-savoir-faire/ | Poterie à Dieulefit en famille: ateliers et savoir-faire | maison | Dieulefit, Drôme, Auvergne-Rhône-Alpes
- /articles/maison/composteur-gratuit-dans-le-gers-comment-en-obtenir-un-et-bien-demarrer/ | Composteur gratuit dans le Gers: comment en obtenir un et bien démarrer ? | maison | Gers, Occitanie
- /articles/maison/a-crest-amenager-sa-maison-avec-la-chignole/ | À Crest, aménager sa maison avec La Chignole | maison | Crest, Drôme, Auvergne-Rhône-Alpes
- /articles/maison/maison-froide-dans-les-hautes-alpes-quels-travaux-envisager-avant-l-hiver/ | Maison froide dans les Hautes-Alpes: quels travaux envisager avant l'hiver? | maison | Hautes-Alpes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- refresh | /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | 2026-11-08T00:30:04.157Z
- refresh | /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | 2026-11-22T15:52:27.624Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-24T19:32:32.814Z
- refresh | /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | 2026-11-12T01:28:37.978Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z
- refresh | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-22T08:32:50.321Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
