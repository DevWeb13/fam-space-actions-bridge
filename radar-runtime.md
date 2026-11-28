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
title: "Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël"
subtitle: "Les 12 et 13 décembre aux Jardins du Département: comptines le samedi, magie le dimanche et ateliers gratuits"
summary: "Programme du marché de Noël du Département à Dijon: horaires, spectacles, ateliers, rencontres avec le Père Noël et accès avec des enfants."
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
image:
  src: /images/articles/2026/10/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants.webp
  alt: Place de la Libération à Dijon vue depuis la rue Vauban, hors marché de Noël
sources:
  - title: Département de la Côte-d'Or - Programme officiel du Marché de Noël 2026
    url: https://www.cotedor.fr/agenda/magie-et-gourmandises-vous-attendent-au-marche-de-noel-du-departement-0
  - title: DiviaMobilités - Parking Trémouille-Marché et desserte République
    url: https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/tremouille-marche/
eventEndsAt: 2026-12-13T18:00:00+01:00
reviewAt: 2026-12-09
topic:
  key: evenements|dijon|marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants|2026
  keywords:
    - marché de Noël du Département Dijon 2026
    - marché de Noël 100 % Côte-d'Or 12 13 décembre
    - Jardins du Département Dijon Noël enfants
    - spectacles ateliers gratuits Père Noël Dijon
slug: marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants
status: published
publishedAt: 2026-10-29T14:26:32.176Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Dijon
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/index.md
  targetSha: f37a6516e2d63f35deb8a826dd5c4368e2391b3d
  targetUrl: /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/
  decision: Reconnaître le bon marché de Noël des 12 et 13 décembre et choisir entre stationnement proche et tram depuis un parking relais selon le véhicule et le programme familial.
  affiliationPotential: Conserver le studio familial City Loft Dijon sur Booking.com, revérifié; aucune billetterie nécessaire pour le marché gratuit.
  gsc:
    retrievedAt: 2026-11-28T07:56:00+01:00
    dataThrough: 2026-11-26
    signal: uncertain
    basis: "Visibilité récente : 22 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-24
    recentEnd: 2026-11-26
    peakImpressions: 22
    recentImpressions: 3
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - dijon marche de noel 2026
      - marché de noël dijon 2026
      - dijon noel 2026
      - place de la libération
---

## Mission retenue
Actualiser le guide du marché de Noël 100 % Côte-d'Or, aux Jardins du Département à Dijon.

## Pourquoi cette mission
Premier candidat rapidDrop du snapshot du jour, cause de la baisse non établie. Les requêtes génériques sur Noël à Dijon et la place de la Libération rendent utile une distinction explicite avec les autres marchés. La Ville vient d'annoncer un autre marché aux mêmes dates, et Divia documente des solutions d'accès absentes du guide.

## Décision du lecteur
Identifier le marché qui propose comptines, magie et Père Noël, choisir son jour et son trajet sans confondre les lieux ni se retrouver devant un parking incompatible avec un coffre de toit.

## Faits à traiter
- Préserver intégralement les horaires, spectacles, ateliers, créneaux Père Noël, gratuité, adresse exacte, précautions bébé, images et liens existants.
- Ajouter une distinction courte dès l'introduction: le Big Christmas Market, marché de créateurs distinct à la salle Devosge, est annoncé par la Ville les mêmes 12 et 13 décembre, de 12 h à 18 h. Ne pas développer son programme ni attribuer les animations municipales au Département.
- Compléter l'accès: parking Trémouille-Marché limité à 1,95 m; alternative P+R Piscine olympique (T1), Valmy (T2) ou Zénith (T2) vers République, limite de 1,90 m. Divia annonce la gratuité du stationnement relais avec titre validé le jour même; le trajet en tram reste payant selon le titre. Ne promettre aucune place disponible. Vérifier les horaires de retour.
- La liste détaillée des 21 exposants et les équipements bébé sur le site restent à confirmer. La page départementale est indexée mais son ouverture intégrale a échoué durant ce passage; revérifier en phase 2 sans supprimer les faits précédemment établis. La page municipale générale des fééries renvoie à une version 2025 à l'ouverture: ne pas reprendre ses horaires.

## Sources de départ
- Département: https://www.cotedor.fr/agenda/magie-et-gourmandises-vous-attendent-au-marche-de-noel-du-departement-0
- Ville, annonce du marché distinct: https://www.dijon.fr/agenda/big-christmas-market/
- Divia, parking central: https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/tremouille-marche/
- Divia, parkings relais: https://information.divia.fr/sinformer/voiture/parkings-relais/

## Affiliation
Conserver https://www.booking.com/hotel/fr/city-loft.fr.html : studio familial avec kitchenette, offre existante revérifiée, sans confirmer disponibilité ou prix aux dates du marché. Entrée et animations gratuites: aucune offre de billetterie pertinente trouvée sur Tiqets, GetYourGuide ou Klook.

## Continuations internes
Conserver le lien vers la Fabrique de pain d'épices Mulot & Petitjean pour une sortie complémentaire le samedi, sous réserve d'ouverture. Ne pas créer de nouvel article sur le marché concurrent dans ce passage.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/index.md

---
title: "Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël"
subtitle: "Les 12 et 13 décembre aux Jardins du Département: comptines le samedi, magie le dimanche et ateliers gratuits"
summary: "Programme du marché de Noël du Département à Dijon: horaires, spectacles, ateliers, rencontres avec le Père Noël et accès avec des enfants."
category: evenements
location:
  city: Dijon
  department: Côte-d'Or
  region: Bourgogne-Franche-Comté
image:
  src: "/images/articles/2026/10/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants.webp"
  alt: "Place de la Libération à Dijon vue depuis la rue Vauban, hors marché de Noël"
sources:
  - title: Département de la Côte-d'Or - Programme officiel du Marché de Noël 2026
    url: https://www.cotedor.fr/agenda/magie-et-gourmandises-vous-attendent-au-marche-de-noel-du-departement-0
  - title: DiviaMobilités - Parking Trémouille-Marché et desserte République
    url: https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/tremouille-marche/
eventEndsAt: 2026-12-13T18:00:00+01:00
reviewAt: 2026-12-09
topic:
  key: evenements|dijon|marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants|2026
  keywords:
    - marché de Noël du Département Dijon 2026
    - marché de Noël 100 % Côte-d'Or 12 13 décembre
    - Jardins du Département Dijon Noël enfants
    - spectacles ateliers gratuits Père Noël Dijon
slug: marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants
status: published
publishedAt: 2026-10-29T14:26:32.176Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Dijon
---

Les **12 et 13 décembre 2026**, le Marché de Noël 100 % Côte-d’Or s’installe dans les **Jardins du Département, 23 boulevard de la Trémouille à Dijon**. L’entrée, les spectacles et les ateliers sont gratuits. Le samedi, les enfants retrouvent un spectacle de comptines et un atelier de décorations; le dimanche, place à la magie et à la décoration de biscuits.

## Programme du samedi 12 décembre

Le marché est ouvert **de 10 h à 21 h**.

- **11 h-12 h**: spectacle pour enfants *Swann au pays des comptines*.
- **L’après-midi**: atelier manuel de décoration de Noël, sans horaire précis annoncé.
- **12 h 30-14 h**: démonstration culinaire avec Julien Chauvenet.
- **17 h 30-18 h 30**: chorale de Noël.
- **18 h 30-20 h**: concert des Rockers de Noël.

Le samedi permet donc de combiner un spectacle en matinée et une visite du marché en soirée.

## Programme du dimanche 13 décembre

Le marché est ouvert **de 9 h à 18 h**.

- **11 h-12 h**: spectacle pour enfants *Parlons Magie !*.
- **L’après-midi**: atelier de décoration de biscuits, sans horaire précis annoncé.
- **14 h 30-15 h 30**: concert Rosebud.
- **16 h-17 h**: concert folk.

Les deux jours, le Département annonce aussi un photocall, un atelier des lutins et **21 exposants locaux**. Leur liste détaillée reste à venir. Les ateliers n’ont pas de créneaux publiés: leur disponibilité à l’arrivée n’est donc pas garantie.

## Quand voir le Père Noël ?

Le Département publie les créneaux suivants:

- **Samedi**: 12 h-13 h, 13 h 30-14 h, 15 h-16 h, 16 h 30-17 h 30, 18 h-18 h 45 et 19 h 15-20 h.
- **Dimanche**: 12 h-13 h, 14 h-15 h, 15 h 30-16 h 30 et 17 h-17 h 45.

Après le spectacle de 11 h, le premier créneau commence à midi, mais une attente reste possible. Une borne photo est annoncée face au Père Noël. Les horaires peuvent évoluer: consultez le [programme du Département](https://www.cotedor.fr/agenda/magie-et-gourmandises-vous-attendent-au-marche-de-noel-du-departement-0) avant de partir.

## Adresse, tramway et stationnement

<!-- article-image-body:02 -->

![Tramway de la ligne T2 quittant la place de la République à Dijon](/images/articles/2026/10/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants-body-02.webp)

*Photo: [François de Dijon](https://commons.wikimedia.org/wiki/File:Dijon_place_de_la_Republique_Tramway_03.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Façade de l'Hôtel du Département de la Côte-d'Or à Dijon, hors marché de Noël](/images/articles/2026/10/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants-body-01.webp)

*Photo: [Erkethan](https://commons.wikimedia.org/wiki/File:Conseil_G%C3%A9n%C3%A9ral_de_la_C%C3%B4te-d%27Or.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le marché se tient dans les **Jardins du Département**, et non sur les autres sites des marchés de Noël de Dijon: **23 boulevard de la Trémouille, 21000 Dijon**.

La station de tramway **République**, desservie par les lignes **T1 et T2**, donne accès au quartier. Pour venir en voiture, le parking payant **Trémouille-Marché**, au **7 boulevard de la Trémouille**, est ouvert 24 h/24 et 7 j/7. [DiviaMobilités détaille ses accès et tarifs](https://information.divia.fr/sinformer/voiture/parkings-en-ouvrage/tremouille-marche/).

## Avec une poussette ou un bébé

Une partie de la visite se déroule dehors et les passages peuvent être chargés autour des spectacles et du Père Noël. Le programme officiel ne précise pas si des tables à langer, un micro-ondes pour réchauffer un repas bébé ou un espace abrité pour les nourrissons seront disponibles. Mieux vaut ne pas compter sur ces équipements sans confirmation.

Les exposants proposent des produits de Côte-d’Or, mais les menus et les prix de restauration ne sont pas encore détaillés.

## Passer le week-end à Dijon

Pour les familles venant de plus loin, le [City Loft Dijon sur Booking.com](https://www.booking.com/hotel/fr/city-loft.fr.html), en centre-ville, propose notamment des studios familiaux avec kitchenette et micro-ondes. Vérifiez la capacité du studio, les conditions du lit bébé, le tarif total et la disponibilité pour le **12 ou le 13 décembre 2026**: aucune réservation ni disponibilité à ces dates n’a été confirmée.

Le samedi, une autre sortie gourmande est envisageable avec [la Fabrique de pain d’épices Mulot & Petitjean](/articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/). Ses horaires habituels couvrent le samedi, mais pas le dimanche; vérifiez l’ouverture effective avant de combiner les deux visites.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | Foire de Dijon 2026 avec les enfants: gratuités, ateliers et Ferme Côte-d'Or | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/vie-pratique/frais-scolaires-en-cote-d-or-quelles-aides-demander-au-departement/ | Frais scolaires en Côte-d'Or: quelles aides demander au Département? | vie-pratique | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/cercles-de-parents-en-cote-d-or-trois-seances-gratuites-pour-echanger-pendant-les-premieres-annees/ | Cercles de Parents en Côte-d'Or: trois séances gratuites pour échanger pendant les premières années | parentalite | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | Fête foraine de Dijon 2026: dates, horaires et budget avec les enfants | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/bons-plans/vacaf-2026-en-cote-d-or-jusqu-a-80-du-sejour-pris-en-charge/ | VACAF 2026 en Côte-d'Or: jusqu'à 80 % du séjour pris en charge | bons-plans | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/cuisine/a-beaune-fabriquer-sa-moutarde-en-famille-et-l-utiliser-en-cuisine/ | À Beaune, fabriquer sa moutarde en famille et l’utiliser en cuisine | cuisine | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/voyages/week-end-dans-l-auxois-en-famille-chateau-de-bussy-rabutin-et-semur-en-auxois/ | Week-end dans l'Auxois en famille: château de Bussy-Rabutin et Semur-en-Auxois | voyages | Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/visiter-l-abbaye-de-fontenay-avec-des-enfants-meme-en-hiver/ | Visiter l'abbaye de Fontenay avec des enfants, même en hiver | sorties | Marmagne, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/parc-de-l-auxois-avec-des-enfants-comment-combiner-animaux-maneges-et-piscine/ | Parc de l'Auxois avec des enfants: comment combiner animaux, manèges et piscine | activites | Arnay-sous-Vitteaux, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/cite-immersive-des-fables-a-paris-decouvrir-la-fontaine-en-famille/ | Cité immersive des Fables à Paris: découvrir La Fontaine en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/sculptures-sur-glace-et-neige-a-valloire-en-janvier-2027/ | Sculptures sur glace et neige à Valloire en janvier 2027 | evenements | Valloire, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/seraphine-louis-a-metz-decouvrir-l-exposition-avec-les-enfants/ | Séraphine Louis à Metz: découvrir l’exposition avec les enfants | evenements | Metz, Moselle, Grand Est
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie

### Historique Radar lié

- refresh | /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | 2026-11-22T15:52:27.624Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-10-25T17:34:53.718Z
- refresh | /articles/evenements/fete-foraine-de-dijon-2026-en-famille-horaires-maneges-et-budget/ | 2026-11-12T12:32:06.313Z
- opportunity | /articles/evenements/foire-de-dijon-2026-en-famille-dates-ateliers-animaux-et-gratuites/ | 2026-10-21T16:31:41.000Z
- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- refresh | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-11-17T19:34:24.194Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
