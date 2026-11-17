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
title: "Noël à Chartres 2026 en famille: marché et illuminations"
subtitle: Dates, horaires et promenade courte autour de la cathédrale
summary: "Marché du 4 au 24 décembre, illuminations de Noël dès fin novembre: horaires, dates à privilégier et conseils pratiques pour une sortie avec les enfants."
category: evenements
location:
  city: Chartres
  department: Eure-et-Loir
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir.webp
  alt: Cathédrale de Chartres éclairée la nuit lors de Chartres en lumières en septembre 2015
sources:
  - title: Les Vitrines de Chartres - Illuminations de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/illuminations-de-noel-2026-371.html
  - title: Les Vitrines de Chartres - Marché de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/marche-de-noel-de-chartres-2025-148.html
  - title: Ville de Chartres - Agenda des animations pour les enfants
    url: https://www.chartres.fr/vacances-a-chartres/enfants
  - title: Chartres en lumières - Présentation et horaires 2026
    url: https://www.chartresenlumieres.com/fr/a-propos/quest-ce-que-chartres-en-lumieres
  - title: Chartres en lumières - Durée du parcours
    url: https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/combien-de-temps-faut-il-pour-voir-chartres-en-lumieres
  - title: Chartres en lumières - Venir à Chartres
    url: https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/comment-venir-a-chartres
eventEndsAt: 2027-01-03
reviewAt: 2026-11-20
topic:
  key: evenements|chartres|noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir|2026
  keywords:
    - Noël Chartres 2026
    - marché de Noël Chartres 2026
    - illuminations Chartres avec enfants
    - Chartres en lumières fête Noël 2026
slug: noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir
status: published
publishedAt: 2026-10-30T18:26:55.934Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chartres
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/index.md
  targetSha: 64f32114dbfc1953e0cc54b3e892d320ded178e5
  targetUrl: /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/
  decision: Permettre aux familles de choisir le bon jour et les bons lieux pour associer marché, animations et illuminations, avec un trajet et un retour réalistes.
  affiliationPotential: Conserver l'hébergement Booking.com déjà présent, en vérifiant ses conditions avant toute éventuelle modification.
  gsc:
    retrievedAt: 2026-11-17T04:29:30+01:00
    dataThrough: 2026-11-14
    signal: uncertain
    basis: "Visibilité récente : 32 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-02
    peakEnd: 2026-11-04
    recentStart: 2026-11-12
    recentEnd: 2026-11-14
    peakImpressions: 32
    recentImpressions: 3
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - chartres noel 2026
      - marché de noel chartres 2026
---

## Mission retenue
Actualiser le guide Noël 2026 à Chartres, marché du 4 au 24 décembre et projections festives du 27 novembre au 3 janvier.

## Pourquoi cette mission
Le snapshot GSC montre 32 puis 3 impressions sur des fenêtres de trois jours, sans cause SEO établie. Une lacune indépendante est désormais vérifiée: l'article dit que le nouvel emplacement du marché est inconnu et présente le lancement des projections des 27-28 novembre comme incertain. Les organisateurs ont depuis publié les lieux et le programme du 27 novembre.

## Décision du lecteur
Choisir entre la soirée d'ouverture du 27 novembre et une sortie combinant chalets et lumières à partir du 4 décembre, puis identifier les places exactes et les horaires adaptés aux enfants.

## Faits à traiter
- Marché: places du Cygne, Marceau et des Épars selon l'organisateur; la Ville mentionne Cygne et Marceau. Éviter de présenter les Épars comme un emplacement de chalets confirmé par la Ville. Horaires habituels déjà corrects, fermeture le 24 décembre à 16 h; ajouter les nocturnes des 12 et 19 décembre jusqu'à 22 h annoncées par l'organisateur.
- Vendredi 27 novembre: lancement officiel gratuit à 17 h 30 place des Épars, fanfare et parade jusqu'à 19 h; scénographies de Noël à partir de 18 h. Lever l'ancienne incertitude sur le démarrage des projections.
- Dimanches 29 novembre, 13 et 20 décembre: offre spéciale Filibus l'après-midi à préciser sans inventer d'horaires ou de gratuité.
- Préserver le parcours court cathédrale/musée des Beaux-Arts, les précautions poussette, la gratuité des illuminations, les horaires du marché, les trois photographies avec crédits et licences, ainsi que l'hébergement Booking.com.

## Sources de départ
- Organisateur du marché: https://www.vitrines-chartres.com/agenda/marche-de-noel-de-chartres-2024-148.html
- Ville, marché: https://www.chartres.fr/agenda/detail/marche-de-noel-de-chartres-noel-a-chartres
- Ville, ouverture du 27 novembre: https://www.chartres.fr/agenda/detail/noel-a-chartres-2026-lancement-des-festivites
- Ville, programme et bus: https://www.chartres.fr/noel-a-chartres/
- Ville, scénographies: https://www.chartres.fr/agenda/detail/chartres-en-lumieres-fete-noel-2

## Affiliation
Conserver l'offre d'hébergement actuelle près de la gare, sans transformer le guide en catalogue.

## Continuations internes
Garder la sortie de Noël sur cette page, sans créer de nouvel article sur la parade. Ne pas confondre les scénographies de Noël avec le circuit général Chartres en lumières.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/index.md

---
title: "Noël à Chartres 2026 en famille: marché et illuminations"
subtitle: Dates, horaires et promenade courte autour de la cathédrale
summary: "Marché du 4 au 24 décembre, illuminations de Noël dès fin novembre: horaires, dates à privilégier et conseils pratiques pour une sortie avec les enfants."
category: evenements
location:
  city: Chartres
  department: Eure-et-Loir
  region: Centre-Val de Loire
image:
  src: "/images/articles/2026/10/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir.webp"
  alt: "Cathédrale de Chartres éclairée la nuit lors de Chartres en lumières en septembre 2015"
sources:
  - title: Les Vitrines de Chartres - Illuminations de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/illuminations-de-noel-2026-371.html
  - title: Les Vitrines de Chartres - Marché de Noël 2026
    url: https://www.vitrines-chartres.com/agenda/marche-de-noel-de-chartres-2025-148.html
  - title: Ville de Chartres - Agenda des animations pour les enfants
    url: https://www.chartres.fr/vacances-a-chartres/enfants
  - title: Chartres en lumières - Présentation et horaires 2026
    url: https://www.chartresenlumieres.com/fr/a-propos/quest-ce-que-chartres-en-lumieres
  - title: Chartres en lumières - Durée du parcours
    url: https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/combien-de-temps-faut-il-pour-voir-chartres-en-lumieres
  - title: Chartres en lumières - Venir à Chartres
    url: https://www.chartresenlumieres.com/fr/informations-pratiques/faq/detail/comment-venir-a-chartres
eventEndsAt: 2027-01-03
reviewAt: 2026-11-20
topic:
  key: evenements|chartres|noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir|2026
  keywords:
    - Noël Chartres 2026
    - marché de Noël Chartres 2026
    - illuminations Chartres avec enfants
    - Chartres en lumières fête Noël 2026
slug: noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir
status: published
publishedAt: 2026-10-30T18:26:55.934Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chartres
---
<!-- article-image-credit -->
*Photo: [PtrQs](https://commons.wikimedia.org/wiki/File:LaLumiere_CathedraleDeChartres_DSC08351.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Chartres, les illuminations de Noël sont annoncées dès la fin novembre 2026, avant l'ouverture du **marché de Noël du 4 au 24 décembre**. Pour profiter des deux avec des enfants, choisissez plutôt une date entre le 4 et le 23 décembre: vous pourrez visiter les chalets dans l'après-midi, puis découvrir les projections à la nuit tombée.

## Les dates à retenir

- **Du 27 novembre au 3 décembre:** les Vitrines de Chartres annoncent des décors lumineux de Noël dès le 27 novembre. Attention toutefois: l'agenda de la Ville date « Chartres en lumières fête Noël » du **29 novembre au 3 janvier**. Si vous prévoyez de venir les 27 ou 28 novembre pour les projections de Noël, vérifiez leur mise en route exacte.
- **Du 4 au 23 décembre:** marché et illuminations peuvent se combiner le même jour. Une première animation déambulatoire est annoncée le **5 décembre**, sans horaire précis publié à ce stade.
- **Le jeudi 24 décembre:** le marché ferme exceptionnellement à **16 h**; il ne sera donc plus ouvert à la nuit tombée.
- **Du 25 décembre au 3 janvier 2027:** les illuminations se poursuivent, mais le marché est terminé.

La saison générale de **Chartres en lumières** a commencé le 11 avril 2026: ses projections habituelles ne doivent pas être confondues avec le lancement des décors spécifiques de Noël.

## Marché de Noël: horaires et lieu encore à confirmer

L'association Les Vitrines de Chartres annonce une **entrée gratuite** et les horaires suivants:

- **Du dimanche au jeudi:** 12 h à 19 h.
- **Le vendredi:** 12 h à 20 h.
- **Le samedi:** 10 h à 20 h.
- **Le jeudi 24 décembre:** 10 h à 16 h.

L'organisateur mentionne par erreur « mercredi 24 décembre »: en **2026, le 24 décembre est un jeudi**. Le marché **change également d'emplacement** cette année, mais sa nouvelle adresse n'est pas encore précisée sur la page officielle. Vérifiez-la avant de choisir votre parking ou votre trajet en poussette.

Les chalets proposeront notamment des gourmandises et des cadeaux. L'accès est gratuit, mais les consommations et achats sont payants.

## Un parcours lumineux court avec les enfants

<!-- article-image-body:01 -->

![Halle du marché aux légumes de Chartres éclairée de couleurs pendant Chartres en lumières en 2015](/images/articles/2026/10/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir-body-01.webp)

*Photo: [PtrQs](https://commons.wikimedia.org/wiki/File:20150927_ChartresFrance_MarcheAuxLegumes_Illuminated_DSC08420_PtrQs.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les projections de Chartres en lumières sont **gratuites** et tournent en boucle: inutile d'arriver à une heure de séance. Elles commencent à la tombée de la nuit et se terminent à **23 h à partir du 25 octobre 2026**.

Pour éviter le grand tour avec de jeunes enfants, commencez devant les **portails de la cathédrale**, puis prolongez éventuellement jusqu'à la **façade du musée des Beaux-Arts**, toute proche. Vous pourrez ensuite regagner le centre ou la gare sans descendre vers les ponts et lavoirs de la basse-ville. Ce parcours est une suggestion courte, pas un itinéraire officiel.

Le circuit complet de Chartres en lumières s'étend sur **5 à 7 km**. Au portail royal, les deux scénographies représentent environ **30 minutes** au total; les autres projections animées durent généralement **3 à 5 minutes**. Vous pouvez donc vous limiter à un ou deux monuments sans manquer un départ de séance.

## Poussette, bébé et repas: ce qu'il faut anticiper

Le centre ancien comporte des pavés et des dénivelés, surtout vers la basse-ville. Avec une poussette, rester près de la cathédrale évite une descente puis une remontée fatigantes.

Les informations publiées ne confirment **ni table à langer, ni micro-ondes, ni espace de repas bébé au marché**. Si ces équipements vous sont indispensables, prévoyez un arrêt dans un lieu adapté plutôt que de compter sur leur présence sur place.

## Accès, budget et nuit sur place

<!-- article-image-body:02 -->

![Façade de la gare ferroviaire de Chartres photographiée en juin 2020](/images/articles/2026/10/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir-body-02.webp)

*Photo: [Benjamin Smith](https://commons.wikimedia.org/wiki/File:Gare_de_Chartres_-_01.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

La **gare de Chartres est à environ 5 minutes à pied du centre-ville**, selon Chartres en lumières, et des trains relient notamment Paris-Montparnasse à Chartres. Si vous repartez le soir, vérifiez l'horaire du dernier train. En voiture, attendez la confirmation du nouvel emplacement du marché avant de choisir votre stationnement.

L'entrée du marché et les illuminations représentent **0 € de billets** pour la famille. Le transport, les achats, les repas et un éventuel hôtel s'ajoutent à ce budget.

Pour transformer la sortie en week-end, le [Campanile PRIME - Chartres Centre Gare Cathédrale sur Booking.com](https://www.booking.com/hotel/fr/inter-chatelet.fr.html) est une possibilité près de la gare et du centre. Plusieurs configurations de chambres sont proposées, notamment pour trois personnes; vérifiez les couchages, l'accueil éventuel d'un bébé, le prix et la disponibilité pour la composition exacte de votre famille.

**À revérifier avant de partir:** la nouvelle adresse du marché et, surtout pour les 27 et 28 novembre, le calendrier des projections de Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/cuisine/chartres-en-famille-quelles-specialites-gourmandes-gouter-et-ou-les-trouver/ | Chartres en famille: quelles spécialités gourmandes goûter et où les trouver ? | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/vie-pratique/accueil-periscolaire-a-chartres-forfait-ou-carte-occasionnelle-en-2026-2027/ | Accueil périscolaire à Chartres: forfait ou carte occasionnelle en 2026-2027 ? | vie-pratique | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/cuisine/apres-une-cueillette-en-eure-et-loir-5-recettes-faciles-a-faire-avec-les-enfants/ | Après une cueillette en Eure-et-Loir: 5 recettes faciles à faire avec les enfants | cuisine | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/maison/recycleries-autour-de-chartres-ou-donner-et-acheter-d-occasion/ | Recycleries autour de Chartres: où donner et acheter d'occasion ? | maison | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | Noël à Chartres 2026 en famille: marché et illuminations | evenements | Chartres, Eure-et-Loir, Centre-Val de Loire
- /articles/activites/chateau-de-maintenon-avec-de-jeunes-enfants-ce-qu-il-faut-prevoir/ | Château de Maintenon avec de jeunes enfants: ce qu'il faut prévoir | activites | Maintenon, Eure-et-Loir, Centre-Val de Loire
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie
- /articles/evenements/festi-di-natali-2026-a-bonifacio-le-marche-de-noel-en-famille/ | Festi di Natali 2026 à Bonifacio: le marché de Noël en famille | evenements | Bonifacio, Corse-du-Sud, Corse

### Historique Radar lié

- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-a-chartres-2026-en-famille-marche-ou-illuminations-quel-soir-venir/ | 2026-10-30T18:26:56.039Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
