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
title: "Noël 2026 à Cannes en famille: marché du centre et Palm Beach"
subtitle: "Deux rendez-vous distincts: dates, horaires, animations et accès avec des enfants"
summary: Du 27 novembre 2026 au 3 janvier 2027, Cannes accueille un marché de Noël au centre-ville et, dès le 3 décembre, un village au Palm Beach. Horaires, entrée, transports et points à vérifier en famille.
category: evenements
location:
  city: Cannes
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d’Azur
image:
  src: /images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach.webp
  alt: Kiosque à musique des Allées de la Liberté à Cannes, emplacement du marché de Noël du centre, photographié hors période des fêtes
sources:
  - title: Ville de Cannes - Marché de Noël 2026, dates et emplacement
    url: https://www.cannes.com/fr/economie/commerce-et-artisanat/evenements-et-appels-a-candidatures.html
  - title: Ville de Cannes - Village de Noël du Palm Beach, horaires et entrée
    url: https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html
  - title: Palm Beach Cannes - Chalets et animations du Village de Noël
    url: https://palmbeach-cannes.com/fr/venues/christmas-village
  - title: Ville de Cannes - Aménagements des Allées de la Liberté
    url: https://www.cannes.com/fr/cadre-de-vie/travaux-en-cours/realisations/espace-vert-promenade/allees-de-la-liberte.html
  - title: Ville de Cannes - Transports et Palm Impérial
    url: https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html
eventEndsAt: 2027-01-03
topic:
  key: evenements|cannes|noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach|2026
  keywords:
    - Noël Cannes 2026 famille
    - marché de Noël Cannes 2026
    - Village de Noël Palm Beach Cannes
slug: noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach
status: published
publishedAt: 2026-10-31T22:36:58.730Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Cannes
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/index.md
  targetSha: e5734d63102b0aa84189f1f4b745d4961c17bda3
  targetUrl: /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/
  decision: Choisir entre le marché du centre et le Palm Beach selon l'âge des enfants, les dates, les animations réellement accessibles, le coût de la patinoire et le retour en transport.
  affiliationPotential: Conserver l'hébergement Booking.com Nemea Appart Hotel Cannes Palais et revérifier les conditions; pas de billetterie partenaire pertinente démontrée pour les animations municipales.
  gsc:
    retrievedAt: 2026-11-17T04:29:30+01:00
    dataThrough: 2026-11-14
    signal: uncertain
    basis: "Visibilité récente : 39 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-03
    peakEnd: 2026-11-05
    recentStart: 2026-11-12
    recentEnd: 2026-11-14
    peakImpressions: 39
    recentImpressions: 5
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - marche de noel palm beach cannes
      - marché de noël cannes 2026
---

## Mission retenue
Actualiser le guide des deux villages de Noël de Cannes 2026-2027, en priorité le marché municipal des Allées de la Liberté et ses animations familiales.

## Pourquoi cette mission
Le snapshot GSC signale 39 puis 5 impressions sur deux périodes de trois jours, sans cause SEO établie. Une lacune indépendante est désormais vérifiée: l'article du 31 octobre indique encore que les horaires, la patinoire et ses tarifs ne sont pas confirmés, alors que l'office de tourisme a publié le programme le 2 novembre.

## Décision du lecteur
Permettre aux parents de choisir le lieu et le jour, prévoir un budget de patinage selon l'âge et éviter de manquer les ateliers ou le dernier transport.

## Faits à traiter
- Marché municipal du 27 novembre au 3 janvier: 11 h-21 h du dimanche au jeudi, 11 h-22 h vendredi et samedi, accès libre, 66 chalets; inauguration le 27 novembre à 19 h.
- Patinoire de 360 m²: 10 h-21 h, jusqu'à 22 h vendredi et samedi; 5 € normalement, gratuit pour les enfants de 4 à 10 ans de 10 h à 13 h, accompagnants payants. Distinguer les horaires du marché de ceux de la glace.
- Programme officiel: vérifier les jours de présence du Père Noël, les contes et ateliers, la parade du 23 décembre à 17 h 30 et les animations de La Bocca; retenir seulement ce qui aide les familles.
- Préserver les horaires et fermetures spécifiques du Palm Beach, les conseils de transport et de retour, les informations poussette, les trois photographies et leurs crédits/licences, ainsi que l'hébergement et les liens internes existants. Ne pas transformer l'entrée libre en gratuité de toutes les activités.

## Sources de départ
- Office de tourisme de Cannes, Village de Noël: https://www.palaisdesfestivals.com/offres/village-de-noel-cannes-fr-5232825/
- Office de tourisme de Cannes, Patinoire: https://www.cannes-france.com/offres/patinoire-cannes-fr-5232826/
- Office de tourisme de Cannes, Noël à Cannes et programme détaillé: https://www.palaisdesfestivals.com/offres/noel-a-cannes-cannes-fr-5259878/
- Ville de Cannes, Village de Noël du Palm Beach: https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html

## Affiliation
Conserver la proposition d'appart'hôtel à Cannes centre sur Booking.com, en contrôlant capacité, caution et disponibilité sans annoncer de prix garanti. Aucune billetterie partenaire utile établie pour le marché municipal.

## Continuations internes
Conserver le guide de Noël à Nice pour une autre sortie et celui des îles de Lérins pour une excursion distincte; ne pas développer ces sujets ici.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/index.md

---
title: "Noël 2026 à Cannes en famille: marché du centre et Palm Beach"
subtitle: "Deux rendez-vous distincts: dates, horaires, animations et accès avec des enfants"
summary: Du 27 novembre 2026 au 3 janvier 2027, Cannes accueille un marché de Noël au centre-ville et, dès le 3 décembre, un village au Palm Beach. Horaires, entrée, transports et points à vérifier en famille.
category: evenements
location:
  city: Cannes
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d’Azur
image:
  src: "/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach.webp"
  alt: "Kiosque à musique des Allées de la Liberté à Cannes, emplacement du marché de Noël du centre, photographié hors période des fêtes"
sources:
  - title: Ville de Cannes - Marché de Noël 2026, dates et emplacement
    url: https://www.cannes.com/fr/economie/commerce-et-artisanat/evenements-et-appels-a-candidatures.html
  - title: Ville de Cannes - Village de Noël du Palm Beach, horaires et entrée
    url: https://www.cannes.com/fr/agenda/annee-2026/decembre/village-de-noel-au-palm-beach.html
  - title: Palm Beach Cannes - Chalets et animations du Village de Noël
    url: https://palmbeach-cannes.com/fr/venues/christmas-village
  - title: Ville de Cannes - Aménagements des Allées de la Liberté
    url: https://www.cannes.com/fr/cadre-de-vie/travaux-en-cours/realisations/espace-vert-promenade/allees-de-la-liberte.html
  - title: Ville de Cannes - Transports et Palm Impérial
    url: https://www.cannes.com/fr/cadre-de-vie/transports/se-deplacer-dans-cannes/prendre-le-bus.html
eventEndsAt: 2027-01-03
topic:
  key: evenements|cannes|noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach|2026
  keywords:
    - Noël Cannes 2026 famille
    - marché de Noël Cannes 2026
    - Village de Noël Palm Beach Cannes
slug: noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach
status: published
publishedAt: 2026-10-31T22:36:58.730Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Cannes
---
<!-- article-image-credit -->
*Photo: [Mister No](https://commons.wikimedia.org/wiki/File:Kiosque_%C3%A0_musique_des_all%C3%A9es_de_la_Libert%C3%A9-Charles-de-Gaulle_%C3%A0_Cannes.jpg) - [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

À Cannes, deux rendez-vous de Noël sont annoncés pour l'hiver 2026-2027: le marché municipal des Allées de la Liberté, près du Vieux-Port, et le Village de Noël du Palm Beach, au bout de la Croisette. **Le premier est plus facile à rejoindre depuis la gare; le second propose des chalets et des animations face à la mer.** Leurs dates et leurs horaires ne sont pas identiques.

## Le marché du centre: du 27 novembre au 3 janvier

La Ville annonce le **marché de Noël du vendredi 27 novembre 2026 au dimanche 3 janvier 2027**, sur les **Allées de la Liberté et le cours Félix-Faure**. Sa situation près du Palais des Festivals et de l'hôtel de ville convient à une promenade depuis la gare SNCF, sans voiture.

Les Allées ont été réaménagées avec une large promenade piétonne et des **toilettes publiques**. C'est un atout avec une poussette, même si les chalets temporaires et l'affluence peuvent modifier les passages habituels.

**Au 31 octobre 2026, les horaires quotidiens du marché, une éventuelle patinoire et les tarifs des attractions ne sont pas confirmés** sur la page municipale consultée. Aucune billetterie générale n'y est annoncée; cela ne garantit pas la gratuité des activités. Ne reprenez pas les animations de l'édition 2025 comme si elles étaient déjà programmées pour 2026.

## Le Palm Beach: du 3 décembre au 3 janvier

<!-- article-image-body:01 -->

![Vue panoramique de la pointe du Palm Beach et de la baie de Cannes en 2016, hors période de Noël](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-01.webp)

*Photo: [Bernard DUPONT from FRANCE](https://commons.wikimedia.org/wiki/File:Baie_de_Cannes_-_Flickr_-_berniedup.jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Le **Village de Noël du Palm Beach**, place Franklin-Roosevelt, ouvre du **jeudi 3 décembre 2026 au dimanche 3 janvier 2027**. La Ville publie deux périodes:

- **Du 3 au 16 décembre:** de 15 h à 22 h, sauf les lundis et mardis (7, 8, 14 et 15 décembre).
- **Du 17 décembre au 3 janvier:** de 15 h à 22 h, tous les jours.

**L'entrée est libre.** L'organisateur annonce des chalets d'artisanat, des spécialités gourmandes, des concerts, des spectacles et des activités pour enfants. Les créneaux, les âges et les tarifs propres à chaque animation ne sont pas détaillés dans sa présentation générale. L'accès gratuit au village ne signifie donc pas que toutes les activités ou consommations sont gratuites.

Pour une sortie avec de jeunes enfants, une visite en fin d'après-midi permet de profiter du village sans devoir attendre 22 h. Le site étant au bord de la mer, prévoyez des vêtements adaptés au vent.

## Lequel choisir avec des enfants ?

**Pour une sortie courte en train**, le marché du centre évite un trajet supplémentaire. **Pour les chalets et animations en bord de mer**, le Palm Beach convient davantage, à condition de choisir un jour d'ouverture. Les **7, 8, 14 et 15 décembre**, le Palm Beach est fermé: le marché du centre reste l'autre possibilité, sous réserve de ses horaires encore à publier.

Les Allées disposent de toilettes publiques identifiées. En revanche, les annonces du Palm Beach ne précisent pas l'accessibilité de chaque chalet, les sanitaires accessibles aux visiteurs ni l'existence d'une table à langer ou d'un espace bébé. Si ces équipements sont indispensables, renseignez-vous auprès de l'organisateur avant la visite.

## Venir sans voiture et prévoir le retour

<!-- article-image-body:03 -->

![Bus de la ligne Palm Impérial en direction du Palm Beach au terminus quai Laubeuf à Cannes en 2024](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-03.webp)

*Photo: [Manchesterunited1234](https://commons.wikimedia.org/wiki/File:Unvi_Urbis_B9TL_n%C2%B0006_(Palm_Imp%C3%A9rial_-_Ligne_8)_-_(Quai_Laubeuf,_Boulevard_Jean_Hibert)_-_(Cannes,_FR06)_-_24-07-2024_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

<!-- article-image-body:02 -->

![Hall voyageurs modernisé de la gare SNCF de Cannes photographié en 2021](/images/articles/2026/10/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach-body-02.webp)

*Photo: [Horizon06](https://commons.wikimedia.org/wiki/File:20210701_093533_Gare_SNCF_de_Cannes.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Depuis la **gare de Cannes**, rejoignez à pied le Palais des Festivals puis les Allées de la Liberté. Pour le Palm Beach, le bus **Palm Impérial** relie le quai Laubeuf à la pointe de la Croisette; il ne part pas directement de la gare. La Ville affiche un **billet aller-retour à 3,60 €** et un service de **9 h à 19 h**. Vérifiez les horaires actualisés sur Palm Bus: **une fermeture du village à 22 h ne signifie pas que le bus circule jusque-là**.

Les navettes gratuites de plage annoncées par la Ville sont estivales, et non une solution hivernale confirmée. Par temps de forte pluie ou de vent, vérifiez le maintien des animations avant le départ.

## Où dormir pour un week-end à Cannes ?

Pour prolonger la visite, le [Nemea Appart Hotel Cannes Palais sur Booking.com](https://www.booking.com/hotel/fr/cannes-palais.fr.html), dans Cannes centre, propose notamment des logements avec kitchenette; certaines catégories comprennent une chambre et un canapé-lit. **Ne supposez pas qu'un appartement accepte automatiquement quatre voyageurs:** renseignez le nombre et l'âge des enfants et contrôlez la capacité de l'offre précise. La fiche Booking.com consultée indique **une caution remboursable de 300 €** et **aucun lit bébé ou lit d'appoint disponible**; revérifiez les conditions avant de réserver, ainsi que les frais et le prix à vos dates.

Pour un séjour plus long sur la Côte d'Azur, notre [guide de Noël à Nice 2026 en famille](https://www.fam-space.fr/articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/) présente un autre programme de fêtes. Vous pouvez aussi préparer une excursion avec notre [guide des îles de Lérins en famille](https://www.fam-space.fr/articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/), en tenant compte des traversées et de la météo hivernales.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | Festival des Jeux de Cannes 2027 en famille: billets, âges et visite | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/iles-de-lerins-en-famille-quelle-ile-choisir-et-comment-organiser-la-traversee/ | Îles de Lérins en famille: quelle île choisir et comment organiser la traversée ? | voyages | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | Noël à Bayeux 2026 en famille: marché et Galopades | evenements | Bayeux, Calvados, Normandie
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/activites/parc-phoenix-a-nice-en-famille-serre-tropicale-animaux-et-jeux/ | Parc Phoenix à Nice en famille: serre tropicale, animaux et jeux | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-du-citron-2027-a-menton-en-famille-que-voir-et-combien-prevoir/ | Fête du Citron 2027 à Menton en famille: que voir et combien prévoir ? | evenements | Menton, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-1-000-premiers-jours-a-grasse-peut-on-venir-sans-rendez-vous/ | Maison des 1 000 premiers jours à Grasse: peut-on venir sans rendez-vous? | parentalite | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/cuisine/atelier-de-cuisine-nicoise-a-nice-faut-il-reserver-avec-des-enfants/ | Atelier de cuisine niçoise à Nice: faut-il réserver avec des enfants? | cuisine | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/maison/renovation-energetique-dans-les-alpes-maritimes-jusqu-a-25-400-d-aide/ | Rénovation énergétique dans les Alpes-Maritimes: jusqu'à 25 400 € d'aide | maison | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/location-de-voiture-a-nice-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Nice avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir/ | 2026-10-28T09:26:08.391Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- refresh | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-11-16T04:35:04.037Z
- opportunity | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-10-30T15:36:05.374Z
- refresh | /articles/evenements/noel-a-bayeux-2026-en-famille-marche-ou-galopades/ | 2026-11-14T12:29:40.480Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
