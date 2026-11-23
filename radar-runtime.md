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
title: "Noël à Caen 2026 en famille: marché de Noël et visite illuminée"
subtitle: Marché du 28 novembre au 29 décembre; visites guidées les 9 et 16 décembre
summary: Dates du marché de Noël de Caen, visite guidée de 90 minutes, tarifs, réservation et conseils utiles avec des enfants.
category: evenements
location:
  city: Caen
  department: Calvados
  region: Normandie
image:
  src: /images/articles/2026/10/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations.webp
  alt: Grande roue et illuminations de Noël devant l'hôtel de ville de Caen en décembre 2019
sources:
  - title: Caen Événements - Marché de Noël 2026
    url: https://www.caen-evenements.com/evenements/marche-de-noel-2026/
  - title: Caen la mer Tourisme - Dans la ville illuminée, RDV Découverte
    url: https://www.caenlamer-tourisme.fr/agenda-evenements/dans-la-ville-illuminee-en-partenariat-avec-caen-evenements-rdv-decouverte/
  - title: Hôtel Astrid - Chambres et tarifs
    url: https://www.hotelastrid.fr/fr/nos-chambres-et-tarifs
eventEndsAt: 2026-12-29
reviewAt: 2026-11-20
topic:
  key: evenements|caen|noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations|2026
  keywords:
    - marché de Noël Caen 2026
    - Noël Caen en famille
    - visite illuminations Caen décembre 2026
slug: noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations
status: published
publishedAt: 2026-10-30T21:26:32.478Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Caen
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/index.md
  targetSha: 92b7a92451f251d872391f0508d7ff080136b289
  targetUrl: /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/
  decision: Choisir le bon jour et le bon horaire pour le marché gratuit de Caen, ou réserver la visite guidée des illuminations, en tenant compte des enfants et des fermetures de Noël.
  affiliationPotential: Conserver le lien Booking.com vers l'Hôtel Astrid pour les familles en séjour; aucune billetterie partenaire vérifiée pour le marché gratuit ou la visite guidée municipale.
  gsc:
    retrievedAt: 2026-11-23T02:29:06+01:00
    dataThrough: 2026-11-20
    signal: needs_query_check
    basis: "Visibilité récente : 25 impressions sur trois jours, puis 7 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-18
    recentEnd: 2026-11-20
    peakImpressions: 25
    recentImpressions: 7
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - marché de Noël Caen 2026
      - Noël Caen en famille
      - visite illuminations Caen décembre 2026
---

## Mission retenue
Actualiser le guide Noël à Caen 2026: marché de Noël gratuit du 28 novembre au 29 décembre et visites guidées des illuminations des 9 et 16 décembre.

## Pourquoi cette mission
Le snapshot signale 25 puis 7 impressions sur des fenêtres de trois jours, sans diagnostic causal. Lacune indépendante vérifiée: l'article indique que les horaires et animations 2026 ne sont pas encore publiés, alors que l'organisateur a désormais publié les horaires, les fermetures exceptionnelles et un programme.

## Décision du lecteur
Savoir quand venir avec des enfants, éviter un déplacement le 25 décembre et distinguer la balade libre des visites guidées payantes sur réservation.

## Faits à traiter
- Marché: 28 novembre au 29 décembre, place de la République et boulevard Maréchal-Leclerc, entrée libre; horaires 11 h-20 h, lundi 14 h-20 h, vendredi et samedi jusqu'à 21 h. Chalets gourmands parfois ouverts plus tard. Le 24 décembre fermeture à 16 h; fermé le 25 décembre.
- Ville de Caen: 56 chalets. Ne pas reprendre sans précaution le nombre contradictoire « plus de 60 » dans une autre section du site organisateur.
- Quelques animations utiles aux familles, vérifiées dans le programme: déambulation inaugurale du 28 novembre à 17 h 30 et arrivée du Père Noël le 5 décembre à 17 h; sélectionner sans recopier tout le calendrier.
- Conserver les visites guidées des 9 et 16 décembre (17 h-18 h 30), tarifs 6-8 €, gratuit moins de 10 ans, réservation obligatoire, et les conseils poussette, météo, Twisto, photographie et crédits, ainsi que l'hébergement Booking.com.

## Sources de départ
- Organisateur, horaires et fermetures: https://www.marchenoelcaen.fr/content/practical-information
- Organisateur, animations: https://www.marchenoelcaen.fr/sessions
- Ville de Caen, programme et 56 chalets: https://caen.fr/actualite/grand-noel-caen-parcourez-le-programme-des-festivites
- Office de tourisme, visites guidées: https://www.caenlamer-tourisme.fr/agenda-evenements/le-grand-noel-a-caen-dans-la-ville-illuminee/

## Affiliation
Conserver le lien Booking.com existant vers l'Hôtel Astrid. Pas de réservation partenaire naturelle pour le marché gratuit ou la visite guidée organisée par l'office.

## Continuations internes
Conserver le lien vers le guide Twisto de Caen pour le choix des titres de transport. Ne pas développer le marché de Bayeux, déjà traité dans son propre article.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/index.md

---
title: "Noël à Caen 2026 en famille: marché de Noël et visite illuminée"
subtitle: Marché du 28 novembre au 29 décembre; visites guidées les 9 et 16 décembre
summary: Dates du marché de Noël de Caen, visite guidée de 90 minutes, tarifs, réservation et conseils utiles avec des enfants.
category: evenements
location:
  city: Caen
  department: Calvados
  region: Normandie
image:
  src: "/images/articles/2026/10/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations.webp"
  alt: "Grande roue et illuminations de Noël devant l'hôtel de ville de Caen en décembre 2019"
sources:
  - title: Caen Événements - Marché de Noël 2026
    url: https://www.caen-evenements.com/evenements/marche-de-noel-2026/
  - title: Caen la mer Tourisme - Dans la ville illuminée, RDV Découverte
    url: https://www.caenlamer-tourisme.fr/agenda-evenements/dans-la-ville-illuminee-en-partenariat-avec-caen-evenements-rdv-decouverte/
  - title: Hôtel Astrid - Chambres et tarifs
    url: https://www.hotelastrid.fr/fr/nos-chambres-et-tarifs
eventEndsAt: 2026-12-29
reviewAt: 2026-11-20
topic:
  key: evenements|caen|noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations|2026
  keywords:
    - marché de Noël Caen 2026
    - Noël Caen en famille
    - visite illuminations Caen décembre 2026
slug: noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations
status: published
publishedAt: 2026-10-30T21:26:32.478Z
updatedAt: null
readingTime: 3
affiliate:
  enabled: true
  type: travel
  destination: Caen
---
<!-- article-image-credit -->
*Photo: [Rundvald](https://commons.wikimedia.org/wiki/File:Grande-roue-illuminations-Noel%E2%80%94Mairie-Caen14-byMmeRundvald.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Caen, le **marché de Noël se tient du 28 novembre au 29 décembre 2026**. Pour découvrir aussi la ville illuminée, deux visites commentées sont programmées les **9 et 16 décembre, de 17 h à 18 h 30**, sur réservation. Voici les informations utiles pour organiser la sortie avec des enfants, sans confondre la promenade libre au marché et la visite guidée payante.

## Le marché de Noël: une cinquantaine de chalets dans le centre

<!-- article-image-body:01 -->

![Place de la République à Caen photographiée en été 2020, sans chalets de Noël](/images/articles/2026/10/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations-body-01.webp)

*Photo: [Karldupart](https://commons.wikimedia.org/wiki/File:Caen_place_de_la_R%C3%A9publique_2020_(1).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

[Caen Événements](https://www.caen-evenements.com/evenements/marche-de-noel-2026/) annonce environ **50 chalets** dans le centre-ville: créations artisanales, décorations, bijoux, jeux pour enfants, produits du terroir et stands alimentaires. La promenade peut être adaptée à la durée et au budget de chaque famille; aucune réservation de visite guidée n'est nécessaire pour simplement parcourir les chalets.

**Les horaires quotidiens et le programme détaillé 2026 ne figurent pas encore sur la fiche de l'organisateur consultée.** Ne reprenez pas les horaires ou les animations de l'édition précédente comme acquis, notamment pour les 24 et 25 décembre. Vérifiez-les avant de partir.

## La visite guidée « Dans la ville illuminée »: dates et prix

L'Office de tourisme de Caen la mer propose une balade commentée parmi les places, hôtels particuliers, églises et abbayes éclairés pour les fêtes. **La visite se termine au marché de Noël, avec une boisson chaude offerte.**

Les séances annoncées sont les **mercredis 9 et 16 décembre 2026, de 17 h à 18 h 30**. Les tarifs sont les suivants:

- **8 €** au tarif plein;
- **6 €** au tarif réduit, notamment pour les scolaires, étudiants, demandeurs d'emploi et personnes en situation de handicap;
- **gratuit pour les moins de 10 ans**.

Pour deux adultes au plein tarif et deux enfants de moins de 10 ans, le total est donc de **16 €**.

**Réservation et paiement à l'avance obligatoires.** Les places sont limitées et il n'y a pas de billetterie sur place le jour de la visite. Les modalités et disponibilités figurent sur la fiche de Caen la mer Tourisme dans les sources de l'article. Le point de rendez-vous doit être vérifié au moment de réserver.

## Avec un bébé, une poussette ou de jeunes enfants

Le marché permet de raccourcir la sortie si un enfant a froid ou se fatigue. Pour un bébé, prévoyez les affaires de change et de repas nécessaires: les informations 2026 consultées ne confirment ni table à langer, ni micro-ondes, ni espace dédié.

La visite guidée dure **1 h 30 en extérieur en fin de journée**. Elle intéressera surtout les enfants qui apprécient les anecdotes et peuvent suivre ce rythme. Avant de réserver avec une poussette ou en cas de besoin d'accessibilité, demandez à l'organisateur si le parcours convient: la gratuité des moins de 10 ans ne garantit pas un itinéraire adapté aux tout-petits.

## Venir et repartir en bus ou en tram

<!-- article-image-body:02 -->

![Deux rames du tramway Twisto traversant la place Saint-Pierre à Caen en 2019](/images/articles/2026/10/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations-body-02.webp)

*Photo: [Bmazerolles](https://commons.wikimedia.org/wiki/File:Tramway_Caen_1008_et_1022.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les chalets sont annoncés dans le centre de Caen. Pour un retour après la visite de **18 h 30**, vérifiez les horaires de votre ligne Twisto à la date choisie. Notre guide [Quel ticket Twisto choisir à Caen avec des enfants ?](https://www.fam-space.fr/articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/) compare les titres famille, les tickets à durée limitée et les parkings relais.

## Rester une nuit à Caen

Pour une famille qui vient de loin, l'[Hôtel Astrid Caen Centre sur Booking.com](https://www.booking.com/hotel/fr/astrid.fr.html) peut servir de point de départ pour un court séjour. L'hôtel décrit une **chambre familiale avec deux lits doubles pour trois ou quatre personnes**. Comparez les disponibilités, le prix à vos dates, les couchages, les conditions d'annulation et l'accessibilité avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | Noël à Fontevraud 2026: patinoire, marché, dates et tarifs en famille | evenements | Fontevraud-l'Abbaye, Maine-et-Loire, Pays de la Loire
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/ | Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026 | maison | Caen, Calvados, Normandie
- /articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/ | Quel ticket Twisto choisir à Caen avec des enfants? | vie-pratique | Caen, Calvados, Normandie
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/sorties/paleospace-de-villers-sur-mer-en-famille-fossiles-planetarium-et-visites/ | Paléospace de Villers-sur-Mer en famille: fossiles, planétarium et visites | sorties | Villers-sur-Mer, Calvados, Normandie
- /articles/bons-plans/visiter-falaise-en-famille-a-petit-prix-quel-pass-choisir/ | Visiter Falaise en famille à petit prix: quel pass choisir ? | bons-plans | Falaise, Calvados, Normandie
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/evenements/festival-contes-et-rencontres-2027-en-lozere-quels-spectacles-voir-en-famille/ | Festival Contes et Rencontres 2027 en Lozère: quels spectacles voir en famille ? | evenements | Lozère, Occitanie
- /articles/evenements/lumieres-d-afrique-2026-2027-a-sigean-les-lanternes-en-famille/ | Lumières d’Afrique 2026-2027 à Sigean: les lanternes en famille | evenements | Sigean, Aude, Occitanie
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/noel-a-brive-2026-en-famille-animations-dates-et-parcours/ | Noël à Brive 2026 en famille: animations, dates et parcours | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine

### Historique Radar lié

- refresh | /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | 2026-11-07T07:35:04.984Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- refresh | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-11-17T19:34:24.194Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- refresh | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-11-14T12:29:40.480Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z
- refresh | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-11-17T09:28:43.094Z
- opportunity | /articles/evenements/noel-a-fontevraud-2026-quel-jour-choisir-avec-les-enfants/ | 2026-10-28T01:34:03.741Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
