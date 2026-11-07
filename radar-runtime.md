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

Dans le frontmatter YAML, entoure de guillemets les valeurs textuelles contenant `: ` (par exemple `summary: "Visite en famille : tarifs et horaires"`) afin de conserver un YAML valide.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Château fort de Sedan en famille: parcours, tarifs et conseils de visite"
subtitle: Un château médiéval à explorer dans les Ardennes, avec une visite immersive et des escaliers à anticiper
summary: Que découvrir au château fort de Sedan avec des enfants? Parcours immersif, choix de la visite, accessibilité, prix et conseils pour organiser la sortie.
slug: chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite
status: published
publishedAt: 2026-10-22T07:00:11+02:00
updatedAt: null
category: sorties
readingTime: 6
location:
  city: Sedan
  department: Ardennes
  region: Grand Est
topic:
  key: sorties|sedan|chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite|2026
  keywords:
    - château fort de Sedan en famille
    - visite château fort Sedan
    - parcours immersif Sedan
image:
  src: /images/articles/2026/10/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite.webp
  alt: Vue du château fort de Sedan et de ses fortifications photographiés en août 2012.
sources:
  - title: Château fort de Sedan - Histoire de la forteresse
    url: https://www.chateau-fort-sedan.fr/histoire/
  - title: Château fort de Sedan - Parcours immersif permanent
    url: https://www.chateau-fort-sedan.fr/parcours-immersif/
  - title: Château fort de Sedan - Visites individuelles et guidées
    url: https://www.chateau-fort-sedan.fr/visite/
  - title: Château fort de Sedan - Informations pratiques, tarifs et accessibilité
    url: https://www.chateau-fort-sedan.fr/informations-pratiques/
  - title: Château fort de Sedan - Escape game Dans l'ombre de la conspiration
    url: https://www.chateau-fort-sedan.fr/escape-game/
affiliate:
  enabled: true
  type: travel
  destination: Sedan
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/sorties/(2026)/(10)/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/index.md
  targetSha: 723e6698613b9533bb8ac737cdd5c6a039aa80fd
  targetUrl: /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/
  decision: Choisir le billet réellement le moins cher selon l'âge des enfants et la période, sans acheter automatiquement un forfait famille.
  affiliationPotential: Conserver les deux hébergements Booking.com déjà présents pour un séjour à Sedan ; aucun nouveau partenaire nécessaire.
  gsc:
    retrievedAt: 2026-11-07T02:32:02+01:00
    dataThrough: 2026-11-04
    signal: uncertain
    basis: "Visibilité récente : 63 impressions sur trois jours, puis 6 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-23
    peakEnd: 2026-10-25
    recentStart: 2026-11-02
    recentEnd: 2026-11-04
    peakImpressions: 63
    recentImpressions: 6
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - château de sedan tarif
      - château sedan tarif
      - billets pour château fort de sedan
      - chateau de sedan
      - château fort de sedan
---

## Mission retenue
Améliorer le guide de visite du château fort de Sedan : comparaison concrète des billets individuels et du forfait famille.

## Pourquoi cette mission
L'article explique les trois grilles tarifaires mais mentionne le forfait famille sans son prix ni mise en garde sur les enfants de 4 à 6 ans. Lacune indépendante de la baisse GSC (63 puis 6 impressions sur trois jours ; cause inconnue). Le site officiel affiche les montants permettant une décision utile.

## Décision du lecteur
Calculer le coût de sa sortie en fonction des âges et de la période et éviter de payer un forfait moins avantageux que les billets séparés.

## Faits à traiter
- Site officiel : forfait « famille nombreuse » pour 2 adultes et 2 enfants à 39 € hors vacances/animations, 46 € pendant les petites vacances avec animations, 52 € en juillet-août ; suppléments par enfant respectivement 2 €, 3 €, 3 €.
- Exemple hors animations : 2 adultes et 2 enfants de 7 à 15 ans coûtent 41 € séparément contre 39 € en forfait ; avec deux enfants de 4 à 6 ans, billets individuels à 24 € car gratuits dans cette formule. Ne pas supposer que tous les foyers sont éligibles sans vérifier les conditions du forfait.
- Vérifier les tarifs à la date de visite et distinguer billets ordinaires, vacances animées et été.
- Préserver parcours immersif, visite guidée, environ 300 marches, impossibilité d'utiliser une poussette, escape game 10 ans et plus, images, crédits et informations pratiques.

## Sources de départ
- https://www.chateau-fort-sedan.fr/informations-pratiques/
- https://www.chateau-fort-sedan.fr/visite/

## Affiliation
Conserver les liens Booking.com de l'hôtel du Château Fort et du Saint Michel, sans ajout artificiel.

## Continuations internes
- Ne pas transformer ce guide en page d'événement saisonnier.
- Conserver le lien existant vers la sortie gratuite à Charleville-Mézières.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/sorties/(2026)/(10)/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/index.md

---
title: "Château fort de Sedan en famille: parcours, tarifs et conseils de visite"
subtitle: Un château médiéval à explorer dans les Ardennes, avec une visite immersive et des escaliers à anticiper
summary: Que découvrir au château fort de Sedan avec des enfants? Parcours immersif, choix de la visite, accessibilité, prix et conseils pour organiser la sortie.
slug: chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite
status: published
publishedAt: 2026-10-22T07:00:11+02:00
updatedAt: null
category: sorties
readingTime: 6
location:
  city: Sedan
  department: Ardennes
  region: Grand Est
topic:
  key: sorties|sedan|chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite|2026
  keywords:
    - château fort de Sedan en famille
    - visite château fort Sedan
    - parcours immersif Sedan
image:
  src: "/images/articles/2026/10/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite.webp"
  alt: "Vue du château fort de Sedan et de ses fortifications photographiés en août 2012."
sources:
  - title: Château fort de Sedan - Histoire de la forteresse
    url: https://www.chateau-fort-sedan.fr/histoire/
  - title: Château fort de Sedan - Parcours immersif permanent
    url: https://www.chateau-fort-sedan.fr/parcours-immersif/
  - title: Château fort de Sedan - Visites individuelles et guidées
    url: https://www.chateau-fort-sedan.fr/visite/
  - title: Château fort de Sedan - Informations pratiques, tarifs et accessibilité
    url: https://www.chateau-fort-sedan.fr/informations-pratiques/
  - title: Château fort de Sedan - Escape game Dans l'ombre de la conspiration
    url: https://www.chateau-fort-sedan.fr/escape-game/
affiliate:
  enabled: true
  type: travel
  destination: Sedan
---

Dans les Ardennes, près de la frontière belge, le château fort de Sedan invite les familles à découvrir une forteresse vieille de six siècles, entre tours, salles historiques et scènes immersives. Le circuit raconte l'histoire des princes de Sedan en faisant parcourir un château parmi les plus vastes d'Europe.

Construit à partir de 1424 et agrandi au fil des générations, l'ensemble couvre environ **35 000 m²**. Ses murs épais, ses passages et ses points de vue sur Sedan permettent de comprendre comment les fortifications ont évolué avec les techniques de défense. L'[histoire officielle du château](https://www.chateau-fort-sedan.fr/histoire/) retrace ces transformations.

## Une forteresse à visiter, mais aussi une histoire à vivre

<!-- article-image-body:01 -->

![Vue d'un espace intérieur du château fort de Sedan photographié en janvier 2024.](/images/articles/2026/10/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite-body-01.webp)

*Photo: [Chabe01](https://commons.wikimedia.org/wiki/File:Int%C3%A9rieur_Ch%C3%A2teau_Sedan_-_Sedan_(FR08)_-_2024-01-27_-_11.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le parcours permanent « L'Épopée des Princes de Sedan », inauguré en 2024, ajoute trois séquences scénographiées au circuit historique. Il occupe environ 3 000 m² de la forteresse.

Dans **« Le puits des légendes »**, les visiteurs entrent dans un univers inspiré des récits ardennais et suivent Charlotte de La Marck dans une quête autour de l'épée Flamberge. Aux tours jumelles, **« La forteresse assiégée »** utilise sons, décors et dispositifs interactifs pour évoquer la vie des défenseurs d'un château médiéval. Puis **« Le mariage princier »**, dans le logis princier, entraîne le visiteur à la Renaissance, autour de l'union de Charlotte de La Marck et d'Henri de La Tour d'Auvergne.

Ces scènes donnent vie à l'histoire pour les enfants, tandis que salles, remparts et passages permettent de découvrir la forteresse elle-même. Pour savoir à quoi s'attendre, l'organisateur détaille les [trois étapes du parcours immersif](https://www.chateau-fort-sedan.fr/parcours-immersif/).

## Visite libre, guide ou animations: que choisir avec des enfants?

**La visite libre** est le choix le plus souple. Elle est proposée toute l'année, selon le calendrier d'ouverture, avec des panneaux explicatifs sur le circuit. On peut avancer à son rythme, prendre le temps de regarder l'architecture et s'arrêter plus longtemps dans les séquences qui plaisent aux enfants. Un livret, dont une version enfant en français, ou un audioguide permettent d'aller plus loin, moyennant supplément.

**La visite guidée** conviendra davantage aux familles dont les enfants aiment écouter des récits et poser des questions. L'organisateur annonce notamment des départs à 15h les mercredis et week-ends de mai-juin et septembre-octobre, sous réserve de disponibilité, mais pas durant les petites vacances scolaires. Des créneaux différents sont prévus en été. Consultez les [formules et dates des visites](https://www.chateau-fort-sedan.fr/visite/) avant de faire votre choix; il ne faut pas compter sur une visite guidée tous les jours.

**Les spectacles et animations de vacances** forment encore une troisième expérience. Leur programmation et leur tarif varient selon la période. La présence d'un parcours immersif permanent ne signifie donc pas qu'un spectacle de chevalerie est organisé le jour de votre venue.

Avec de jeunes enfants, mieux vaut privilégier la visite libre si vous voulez maîtriser le rythme. Avec des plus grands passionnés d'histoire, la visite guidée peut apporter davantage, à condition qu'ils soient à l'aise avec la durée et la marche.

## Environ 300 marches: ce qu'il faut savoir avant de venir

<!-- article-image-body:02 -->

![Vue sur le château fort de Sedan depuis ses remparts en août 2017, illustrant les niveaux du site.](/images/articles/2026/10/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite-body-02.webp)

*Photo: [Thierry Grenot](https://commons.wikimedia.org/wiki/File:Chateau_fort_de_Sedan_depuis_les_ramparts.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**Le circuit comporte environ 300 marches** et n'est **pas accessible aux poussettes ni aux fauteuils roulants**. Pour un enfant qui ne marche pas encore, le château recommande un porte-bébé; avec de jeunes marcheurs, mieux vaut anticiper la fatigue et les nombreux escaliers.

La cour, l'accueil, le café, les toilettes et la salle audiovisuelle sont accessibles aux personnes à mobilité réduite. En revanche, **seules la billetterie et la salle audiovisuelle sont accessibles dans le cadre de la visite**: ces espaces ne remplacent pas le circuit historique. Le film de présentation dure environ six minutes.

Des chaussures adaptées aux marches et aux sols anciens sont utiles, même pour les plus grands.

## Tarifs: la période change le budget

Le château affiche plusieurs grilles tarifaires. Pour la **visite ordinaire hors vacances scolaires et animations**, comptez **12 € par adulte** et **8,50 € de 7 à 15 ans**. Les 4-6 ans et les moins de 4 ans entrent gratuitement dans cette formule.

Lors des **petites vacances scolaires avec animations**, les tarifs annoncés passent à **14 € par adulte**, **11 € de 7 à 15 ans** et **8 € de 4 à 6 ans**. En **juillet-août**, ils sont respectivement de **16 €**, **12 €** et **10 €**. L'entrée reste gratuite pour les moins de 4 ans quelle que soit la formule.

Cette variation est particulièrement importante avec un enfant de 4 à 6 ans, dont l'entrée devient payante pendant les périodes d'animations. Le château affiche aussi un tarif « famille nombreuse » pour deux adultes et deux enfants, selon la période, ainsi que des suppléments pour la visite guidée (+3 €), le livret (+2 €) ou l'audioguide (+3 €). Vérifiez les tarifs et le calendrier à la date choisie.

Les horaires ne sont pas identiques toute l'année: selon le jour, l'ouverture peut être de 12h à 18h, de 10h à 18h ou de 10h à 19h, avec des jours de fermeture. Le dernier billet est vendu une heure avant la fermeture. Vérifiez donc le jour choisi sur le calendrier du château, plutôt que de vous fier à une amplitude générale.

## L'escape game est une activité séparée

Le château propose aussi **« Dans l'ombre de la conspiration »**, un jeu d'énigmes inspiré de l'histoire de la principauté de Sedan. Il ne fait pas partie automatiquement du billet de visite.

L'[escape game officiel](https://www.chateau-fort-sedan.fr/escape-game/) est **interdit aux moins de 10 ans**, les mineurs doivent être accompagnés d'un adulte et la réservation est obligatoire. L'activité est déconseillée aux personnes claustrophobes ou sensibles à la pénombre; elle ne convient pas aux poussettes ni aux personnes à mobilité réduite. C'est une option à envisager séparément avec des préadolescents ou adolescents qui apprécient les énigmes, pas une étape incontournable de la sortie familiale.

## Organiser la sortie à Sedan

Le château se trouve **cour du Château, à Sedan (08200)**. La gare est annoncée à environ **1,9 km**; le réseau de bus TAC dessert Sedan et Charleville-Mézières. En voiture, les accès indiqués passent notamment par l'A34 et l'E44. Pensez à vérifier votre itinéraire avant de partir.

Pour déjeuner ou faire une pause, le **Café La Marck**, dans la cour, propose boissons et restauration. L'organisateur signale aussi des espaces verts autour de la forteresse pour pique-niquer par beau temps. Les toilettes avec table à langer sont accessibles gratuitement dans la cour.

Après la visite, une promenade dans le vieux Sedan, au pied des remparts, permet de prolonger la découverte si les enfants ont encore envie de marcher.

Pour prolonger la sortie en week-end, [l'Hôtel Le Château Fort de Sedan](https://www.booking.com/hotel/fr/hotellerielechateaufort.fr.html) permet de dormir dans la forteresse. Il propose différentes chambres, dont des configurations familiales selon les disponibilités. [Le Saint Michel, au pied du château](https://www.booking.com/hotel/fr/le-saint-michel.fr.html) est une autre option avec chambres familiales et restaurant. Vérifiez le nombre de couchages, les prix et les disponibilités pour vos dates.

Si vous restez une deuxième journée dans les Ardennes, le [parc animalier gratuit de Charleville-Mézières](https://www.fam-space.fr/articles/bons-plans/parc-animalier-de-charleville-mezieres-une-sortie-gratuite-toute-l-annee/) offre une promenade de nature avec plusieurs parcours, en complément de la visite historique.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/chateau-de-biron-avec-des-enfants-tarifs-et-conseils-pour-la-visite/ | Château de Biron avec des enfants: tarifs et conseils pour la visite | activites | Biron, Dordogne, Nouvelle-Aquitaine
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-du-haut-koenigsbourg-en-famille-tarifs-2026-et-conseils-de-visite/ | Château du Haut-Koenigsbourg en famille: tarifs 2026 et conseils de visite | sorties | Orschwiller, Bas-Rhin, Grand Est
- /articles/parentalite/chateau-de-chamerolles-en-famille-visite-libre-ou-guidee-en-2026/ | Château de Chamerolles en famille: visite libre ou guidée en 2026 ? | parentalite | Chilleurs-aux-Bois, Loiret, Centre-Val de Loire
- /articles/sorties/chateau-fort-de-sedan-en-famille-parcours-tarifs-et-conseils-de-visite/ | Château fort de Sedan en famille: parcours, tarifs et conseils de visite | sorties | Sedan, Ardennes, Grand Est
- /articles/bons-plans/parc-animalier-de-charleville-mezieres-une-sortie-gratuite-toute-l-annee/ | Parc animalier de Charleville-Mézières: une sortie gratuite toute l'année | bons-plans | Charleville-Mézières, Ardennes, Grand Est
- /articles/parentalite/futurs-parents-dans-les-ardennes-quelles-demarches-preparer-avec-la-caf/ | Futurs parents dans les Ardennes: quelles démarches préparer avec la Caf? | parentalite | Charleville-Mézières, Ardennes, Grand Est
- /articles/cuisine/week-end-gourmand-a-charleville-mezieres-5-specialites-ardennaises-a-decouvrir-en-famille/ | Week-end gourmand à Charleville-Mézières: 5 spécialités ardennaises à découvrir en famille | cuisine | Charleville-Mézières, Ardennes, Grand Est
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/sorties/petite-terre-en-famille-iguanes-balade-et-lagon/ | Petite-Terre en famille: iguanes, balade et lagon | sorties | La Désirade, Guadeloupe, Guadeloupe
- /articles/sorties/visiter-l-abbaye-de-fontenay-avec-des-enfants-meme-en-hiver/ | Visiter l'abbaye de Fontenay avec des enfants, même en hiver | sorties | Marmagne, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/musee-de-la-grande-guerre-a-meaux-avec-des-enfants-que-voir-selon-leur-age/ | Musée de la Grande Guerre à Meaux avec des enfants: que voir selon leur âge ? | sorties | Meaux, Seine-et-Marne, Île-de-France
- /articles/sorties/aquarium-de-vendee-en-famille-des-poissons-de-nos-cotes-aux-mers-tropicales/ | Aquarium de Vendée en famille: des poissons de nos côtes aux mers tropicales | sorties | Talmont-Saint-Hilaire, Vendée, Pays de la Loire
- /articles/sorties/ocearium-du-croisic-en-famille-animations-tarifs-et-visite/ | Océarium du Croisic en famille: animations, tarifs et visite | sorties | Le Croisic, Loire-Atlantique, Pays de la Loire
- /articles/sorties/theobroma-a-saint-laurent-du-maroni-decouvrir-le-cacao-en-famille/ | Theobroma à Saint-Laurent-du-Maroni: découvrir le cacao en famille | sorties | Saint-Laurent-du-Maroni, Guyane, Guyane
- /articles/sorties/les-menuires-sans-ski-en-famille-luges-piscines-et-balades-en-hiver/ | Les Menuires sans ski en famille: luges, piscines et balades en hiver | sorties | Les Belleville, Savoie, Auvergne-Rhône-Alpes
- /articles/sorties/carrieres-des-lumieres-avec-des-enfants-choisir-son-spectacle-et-preparer-la-visite/ | Carrières des Lumières avec des enfants: choisir son spectacle et préparer la visite | sorties | Les Baux-de-Provence, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/sorties/musee-des-jouets-de-montauban-en-famille-que-voir-que-faire-et-a-quel-prix/ | Musée des Jouets de Montauban en famille: que voir, que faire et à quel prix ? | sorties | Montauban, Tarn-et-Garonne, Occitanie

### Historique Radar lié

- opportunity | /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | 2026-11-05T19:28:08.723Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
