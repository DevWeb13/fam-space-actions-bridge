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
title: "Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ?"
subtitle: Quatre adresses autour de Nancy, Pont-à-Mousson et Lunéville, plus des ateliers pour prolonger la vie des objets
summary: "Ressourceries, Emmaüs, dons de meubles et Repair Cafés: où équiper sa maison à petit prix en Meurthe-et-Moselle et comment éviter de jeter."
slug: meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer
status: published
publishedAt: 2026-10-29T00:59:22+01:00
updatedAt: null
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
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/maison/(2026)/(10)/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/index.md
  targetSha: 0857533955ef9271c91a0c2ef99734376edf75e6
  targetUrl: /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/
  decision: Choisir une adresse réellement adaptée pour acheter ou donner des meubles en Meurthe-et-Moselle, et savoir quand s'y rendre sans confondre boutique habituelle et brocante ponctuelle.
  affiliationPotential: Conserver seulement le lien utilitaire KAYAK vers les fourgonnettes de Nancy si l'offre reste pertinente; aucune affiliation naturelle pour les recycleries et Repair Cafés.
  gsc:
    retrievedAt: 2026-11-11T02:29:19+01:00
    dataThrough: 2026-11-08
    signal: needs_query_check
    basis: "Visibilité récente : 23 impressions sur trois jours, puis 1 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-30
    peakEnd: 2026-11-01
    recentStart: 2026-11-06
    recentEnd: 2026-11-08
    peakImpressions: 23
    recentImpressions: 1
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - meubles occasion Meurthe-et-Moselle
      - ressourcerie Nancy
      - donner meubles 54
      - Repair Café Lorraine
---

## Mission retenue
Actualisation ciblée du guide existant sur les recycleries, Emmaüs et Repair Cafés autour de Nancy, Pont-à-Mousson et Lunéville.

## Pourquoi cette mission
Le snapshot GSC indique 23 impressions du 30 octobre au 1er novembre, puis 1 du 6 au 8 novembre, sans preuve de perte de position. L'article n'a pas encore été rafraîchi. Une amélioration indépendante et vérifiable existe: il ne signale pas les brocantes dominicales annoncées par l'office de tourisme à la Recyclerie SNI, utiles aux familles qui ne peuvent venir en semaine. Il présente aussi l'adhésion de La Benne Idée sans préciser clairement sa durée, alors que la page officielle la qualifie de 1 € à vie. Ne pas prétendre que ces lacunes expliquent la baisse GSC.

## Décision du lecteur
Pouvoir choisir entre visite ordinaire, vente spéciale et don, avec les bonnes conditions d'accès et sans déplacement inutile.

## Faits à traiter
- Pont-à-Mousson: vérifier les horaires ordinaires directement auprès de SNI; distinguer les brocantes annoncées les dimanches 6, 13 et 20 décembre 2026 de 14h à 18h. L'événement du 8 novembre est passé. Ne pas présenter ces dimanches comme une ouverture permanente.
- Jarville: préciser l'adhésion de 1 € à vie selon la page officielle; confirmer les horaires du deuxième samedi et les modalités du dépôt.
- Préserver les quatre adresses, téléphones, dons/enlèvements, conseils de sécurité des meubles et équipements pour enfants, Repair Cafés, photographie et crédit, sources, maillage interne et lien utilitaire de location existant.
- Ne pas ajouter de dates ponctuelles sans source ni retirer les informations encore valables.

## Sources de départ
- La Benne Idée, informations pratiques: https://labenneidee.fr/contact/
- La Benne Idée, boutique et réservation: https://labenneidee.fr/
- SNI, recyclerie: https://www.sni-pam.fr/secteurs-dinterventions/insertion-par-lactivite-economique/la-recyclerie
- Office de tourisme du Bassin de Pont-à-Mousson, brocantes SNI: https://www.tourisme-bassindepontamousson.fr/agenda/en-mode-local-2/1284001280_brocante-salle-des-ventes-sni/

## Affiliation
Aucune affiliation naturelle pour le réemploi associatif. Conserver l'aide à la location de fourgonnette déjà présente si la page partenaire reste utile.

## Continuations internes
Conserver le renvoi existant vers le guide des lits superposés et mezzanines d'occasion, sans dupliquer ses contrôles détaillés.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/maison/(2026)/(10)/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/index.md

---
title: "Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ?"
subtitle: Quatre adresses autour de Nancy, Pont-à-Mousson et Lunéville, plus des ateliers pour prolonger la vie des objets
summary: "Ressourceries, Emmaüs, dons de meubles et Repair Cafés: où équiper sa maison à petit prix en Meurthe-et-Moselle et comment éviter de jeter."
slug: meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer
status: published
publishedAt: 2026-10-29T00:59:22+01:00
updatedAt: null
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
  src: "/images/articles/2026/10/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer.webp"
  alt: "Fontaine de la place Stanislas à Nancy, en Meurthe-et-Moselle"
sources:
  - title: La Benne Idée - recyclerie, boutique et réservation
    url: https://labenneidee.fr/
  - title: La Benne Idée - adresse, horaires et adhésion
    url: https://labenneidee.fr/contact/
  - title: La Benne Idée - conditions des dons
    url: https://labenneidee.fr/collecter/
  - title: SNI - Recyclerie de Pont-à-Mousson
    url: https://www.sni-pam.fr/secteurs-dinterventions/insertion-par-lactivite-economique/la-recyclerie
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
---

Une table pour les repas, un bureau pour les devoirs ou des rangements pour les chambres: meubler une maison familiale coûte vite cher. En Meurthe-et-Moselle, des recycleries et Emmaüs proposent des meubles et des objets de seconde main. D'autres associations récupèrent les dons ou aident à réparer les petits appareils. Voici quatre adresses concrètes, de Nancy à Lunéville, et les précautions utiles avant de vous déplacer.

## Où acheter des meubles et des objets d'occasion ?

### Jarville-la-Malgrange: La Benne Idée

[La Benne Idée](https://labenneidee.fr/) est une recyclerie spécialisée dans l'univers de la maison: mobilier, vaisselle, décoration et matériaux. Elle possède également un atelier de menuiserie dédié au réemploi du bois. Les arrivages varient, ce qui en fait une bonne adresse pour chercher une petite table, des étagères ou des objets de cuisine sans payer le prix du neuf.

Vous pouvez consulter les meubles de sa boutique en ligne, **réserver un article pour venir le voir et le retirer**, sans paiement en ligne ni obligation d'achat. C'est pratique pour éviter un déplacement si vous recherchez une pièce précise.

**Adresse:** 16 avenue de la Malgrange, 54140 Jarville-la-Malgrange, à la Cité du Faire. Selon les [informations pratiques de l'association](https://labenneidee.fr/contact/), la boutique ouvre le mercredi et le vendredi de 10 h à 17 h, et le samedi de 10 h à 13 h, jusqu'à 17 h le deuxième samedi du mois. Une **adhésion de 1 €**, à régler sur place, est demandée pour entrer dans la boutique. Vérifiez les éventuelles fermetures exceptionnelles avant votre visite.

### Pont-à-Mousson: la Recyclerie SNI

La [Recyclerie SNI](https://www.sni-pam.fr/secteurs-dinterventions/insertion-par-lactivite-economique/la-recyclerie), au **24 rue Thibaut II**, vend à prix solidaires des objets issus de dons et de collectes. Elle propose également une boutique sur Label Emmaüs, accessible depuis son site.

**Horaires annoncés:** du lundi au vendredi de 8 h à 12 h et de 14 h à 18 h; le samedi de 9 h à 13 h et de 14 h à 17 h. **Téléphone:** 03 83 83 25 15.

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

Enfin, si vous récupérez plusieurs meubles volumineux autour de Nancy sans véhicule adapté, vous pouvez [comparer les utilitaires à louer sur KAYAK](https://www.kayak.fr/Nancy-Locations-de-Fourgonnette.1239.cvn.ksp). Vérifiez les dimensions de chargement, le kilométrage et le coût total avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/donner-acheter-d-occasion-ou-reparer-dans-le-val-d-oise-cinq-adresses-utiles/ | Donner, acheter d’occasion ou réparer dans le Val-d’Oise: cinq adresses utiles | maison | Cergy, Val-d'Oise, Île-de-France
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/chambre-d-enfant-a-petit-budget-dans-le-var-ou-acheter-des-meubles-d-occasion/ | Chambre d'enfant à petit budget dans le Var: où acheter des meubles d'occasion? | maison | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/parentalite/rejouets-a-cerences-donner-completer-et-acheter-des-jouets-d-occasion/ | Rejouets à Cérences: donner, compléter et acheter des jouets d’occasion | parentalite | Cérences, Manche, Normandie
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/maison/reparer-ses-objets-dans-l-herault-repair-cafes-et-bonus-reparation/ | Réparer ses objets dans l’Hérault: Repair Cafés et bonus réparation | maison | Hérault, Occitanie
- /articles/maison/ressourcerie-de-saclay-meubles-jouets-et-dons-utiles/ | Ressourcerie de Saclay: meubles, jouets et dons utiles | maison | Saclay, Essonne, Île-de-France
- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/maison/materiaux-de-reemploi-dans-le-finistere-ou-acheter-a-brest-et-quimper/ | Matériaux de réemploi dans le Finistère: où acheter à Brest et Quimper ? | maison | Finistère, Bretagne
- /articles/maison/renover-ou-amenager-sa-maison-dans-le-doubs-qui-peut-vous-conseiller-gratuitement/ | Rénover ou aménager sa maison dans le Doubs: qui peut vous conseiller gratuitement ? | maison | Doubs, Bourgogne-Franche-Comté
- /articles/maison/maison-trop-chaude-dans-le-gard-garder-les-chambres-des-enfants-plus-fraiches/ | Maison trop chaude dans le Gard: garder les chambres des enfants plus fraîches | maison | Gard, Occitanie
- /articles/maison/saison-des-pluies-a-mayotte-preparer-sa-maison-en-famille/ | Saison des pluies à Mayotte: préparer sa maison en famille | maison | Mayotte, Mayotte
- /articles/maison/composter-en-martinique-demarrer-au-jardin-ou-en-residence/ | Composter en Martinique: démarrer au jardin ou en résidence | maison | Martinique
- /articles/maison/logement-mal-isole-dans-le-vaucluse-comment-gagner-en-confort-ete-comme-hiver/ | Logement mal isolé dans le Vaucluse: comment gagner en confort été comme hiver ? | maison | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/maison/humidite-et-moisissures-en-hiver-dans-le-haut-rhin-que-faire-et-qui-contacter/ | Humidité et moisissures en hiver dans le Haut-Rhin: que faire et qui contacter ? | maison | Haut-Rhin, Grand Est

### Historique Radar lié

- refresh | /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | 2026-11-08T00:30:04.157Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- refresh | /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | 2026-11-09T12:50:22.314Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
