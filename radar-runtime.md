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
title: "La Vallée des Saints à Carnoët: visiter les géants de granit en famille"
subtitle: Sculptures géantes, légendes bretonnes et conseils pratiques pour une balade avec les enfants
summary: "À Carnoët, découvrez plus de 200 sculptures monumentales en famille: accès gratuit, parking, poussettes, services et idées pour prolonger la visite."
slug: la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille
status: published
publishedAt: 2026-11-07T14:01:00+01:00
updatedAt: null
category: voyages
readingTime: 4
location:
  city: Carnoët
  department: Côtes-d'Armor
  region: Bretagne
topic:
  key: voyages|carnoet|la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille|2026
  keywords:
    - Vallée des Saints en famille
    - Carnoët Côtes-d'Armor
    - visite Vallée des Saints poussette
image:
  src: /images/articles/2026/11/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille.webp
  alt: Statues monumentales de saints en granit sur la colline de la Vallée des Saints à Carnoët en Bretagne
sources:
  - title: La Vallée des Saints - Informations pratiques
    url: https://www.lavalleedessaints.com/informations-pratiques/
  - title: La Vallée des Saints - Stationnement
    url: https://www.lavalleedessaints.com/preparer-sa-visite/stationnement/
  - title: La Vallée des Saints - Venir en famille
    url: https://www.lavalleedessaints.com/decouvrir-le-site/venir-en-famille/
  - title: La Vallée des Saints - Accessibilité
    url: https://www.lavalleedessaints.com/preparer-sa-visite/accessibilite/
  - title: La Vallée des Saints - Visites guidées
    url: https://www.lavalleedessaints.com/preparer-sa-visite/visites-guidees/
  - title: La Vallée des Saints - Nos services
    url: https://www.lavalleedessaints.com/preparer-sa-visite/nos-services/
  - title: La Vallée des Saints - Accueil et boutique
    url: https://www.lavalleedessaints.com/preparer-sa-visite/accueil-et-boutique/
  - title: La Vallée des Saints - Restauration
    url: https://www.lavalleedessaints.com/preparer-sa-visite/restauration/
  - title: Tourisme Côtes-d'Armor - La Vallée des Saints
    url: https://www.cotesdarmor.com/fr/fiche/patrimoine-culturel/la-vallee-des-saints-carnoet_TFOPCUBRE022V500H5M/
  - title: Tourisme Côtes-d'Armor - Une journée en Centre Bretagne
    url: https://www.cotesdarmor.com/a-voir-a-faire/routes-touristiques/une-journee-en-centre-bretagne/
affiliate:
  enabled: true
  type: travel
  destination: Carnoët
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/voyages/(2026)/(11)/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/index.md
  targetSha: 909386657276403dcaf964b087e212534fa89e18
  targetUrl: /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/
  decision: Choisir entre balade libre, visite guidée et atelier familial, puis calculer le budget réel selon le nombre de visites.
  affiliationPotential: Conserver les deux hébergements déjà proposés pour un séjour; aucune billetterie partenaire vérifiée pour les activités officielles.
  gsc:
    retrievedAt: 2026-11-21T15:27:19+01:00
    dataThrough: 2026-11-19
    signal: uncertain
    basis: "Visibilité récente : 21 impressions sur trois jours, puis 0 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-12
    peakEnd: 2026-11-14
    recentStart: 2026-11-17
    recentEnd: 2026-11-19
    peakImpressions: 21
    recentImpressions: 0
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - combien de temps faut il pour visiter la vallée des saints
      - la vallée des saints tarifs
---

## Mission retenue
Actualiser le guide familial de la Vallée des Saints à Carnoët, sans changer sa vocation de promenade libre.

## Pourquoi cette mission
Le snapshot montre une chute rapide de 21 à 0 impression sur deux périodes de trois jours, sans cause SEO démontrée. Lacune indépendante vérifiée: le guide mentionne les visites payantes sans aider à choisir leurs formats et ignore l'abonnement annuel au parking, potentiellement utile aux familles qui reviennent.

## Décision du lecteur
Savoir si la visite gratuite suffit, si une formule accompagnée vaut le coût et combien prévoir pour venir une ou plusieurs fois.

## Faits à traiter
Conserver intégralement la durée de 1 à 2 heures, l'accès libre 24h/24, les 10 € de parking par voiture, les conseils poussette/PMR, les services saisonniers, les photos et leurs crédits, et les hébergements. Vérifier les offres actuelles à la réservation: visite guidée à 12,50 € pour une heure, visite motorisée à 14,50 € pour 45 minutes, atelier famille à 9 € pour l'enfant avec adulte gratuit (activité saisonnière, ne pas promettre de séance en novembre), audioguide à 3,50 € et guide papier à 5 €. Le parking officiel propose aussi une carte annuelle à 12 €, sous réserve des modalités en vigueur. Préciser que les visites guidées s'interrompent généralement début novembre jusqu'au printemps. Ne pas confondre accès gratuit et prestations payantes.

## Sources de départ
- https://www.lavalleedessaints.com/billetterie/
- https://www.lavalleedessaints.com/preparer-sa-visite/visites-guidees/
- https://www.lavalleedessaints.com/preparer-sa-visite/stationnement/
- https://www.lavalleedessaints.com/atelier-famille-a-la-vallee-des-saints/

## Affiliation
Conserver l'hébergement existant pour les familles en séjour. Les activités vérifiées se réservent sur la billetterie officielle, sans offre partenaire confirmée.

## Continuations internes
Conserver le lien vers l'itinéraire Centre-Bretagne sans redévelopper ses étapes. Ne pas créer d'article distinct sur les prestations du site.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/voyages/(2026)/(11)/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/index.md

---
title: "La Vallée des Saints à Carnoët: visiter les géants de granit en famille"
subtitle: Sculptures géantes, légendes bretonnes et conseils pratiques pour une balade avec les enfants
summary: "À Carnoët, découvrez plus de 200 sculptures monumentales en famille: accès gratuit, parking, poussettes, services et idées pour prolonger la visite."
slug: la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille
status: published
publishedAt: 2026-11-07T14:01:00+01:00
updatedAt: null
category: voyages
readingTime: 4
location:
  city: Carnoët
  department: Côtes-d'Armor
  region: Bretagne
topic:
  key: voyages|carnoet|la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille|2026
  keywords:
    - Vallée des Saints en famille
    - Carnoët Côtes-d'Armor
    - visite Vallée des Saints poussette
image:
  src: "/images/articles/2026/11/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille.webp"
  alt: "Statues monumentales de saints en granit sur la colline de la Vallée des Saints à Carnoët en Bretagne"
sources:
  - title: La Vallée des Saints - Informations pratiques
    url: https://www.lavalleedessaints.com/informations-pratiques/
  - title: La Vallée des Saints - Stationnement
    url: https://www.lavalleedessaints.com/preparer-sa-visite/stationnement/
  - title: La Vallée des Saints - Venir en famille
    url: https://www.lavalleedessaints.com/decouvrir-le-site/venir-en-famille/
  - title: La Vallée des Saints - Accessibilité
    url: https://www.lavalleedessaints.com/preparer-sa-visite/accessibilite/
  - title: La Vallée des Saints - Visites guidées
    url: https://www.lavalleedessaints.com/preparer-sa-visite/visites-guidees/
  - title: La Vallée des Saints - Nos services
    url: https://www.lavalleedessaints.com/preparer-sa-visite/nos-services/
  - title: La Vallée des Saints - Accueil et boutique
    url: https://www.lavalleedessaints.com/preparer-sa-visite/accueil-et-boutique/
  - title: La Vallée des Saints - Restauration
    url: https://www.lavalleedessaints.com/preparer-sa-visite/restauration/
  - title: Tourisme Côtes-d'Armor - La Vallée des Saints
    url: https://www.cotesdarmor.com/fr/fiche/patrimoine-culturel/la-vallee-des-saints-carnoet_TFOPCUBRE022V500H5M/
  - title: Tourisme Côtes-d'Armor - Une journée en Centre Bretagne
    url: https://www.cotesdarmor.com/a-voir-a-faire/routes-touristiques/une-journee-en-centre-bretagne/
affiliate:
  enabled: true
  type: travel
  destination: Carnoët
---
<!-- article-image-credit -->
*Photo: [GolDavis](https://commons.wikimedia.org/wiki/File:Saints_de_la_vall%C3%A9e_des_Saints.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Sur une colline de Carnoët, dans les Côtes-d'Armor, plus de 200 statues monumentales en granit représentent des saints bretons et des personnages entourés de légendes. À la Vallée des Saints, les enfants peuvent chercher des animaux sculptés, choisir leurs géants préférés et découvrir un paysage de Bretagne intérieure. Cette galerie à ciel ouvert se visite gratuitement, à son rythme, sans billet d'entrée.

## Des géants de pierre qui racontent la Bretagne

<!-- article-image-body:01 -->

![Blocs de granit en attente de sculpture à la Vallée des Saints de Carnoët, avant leur transformation en statues](/images/articles/2026/11/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille-body-01.webp)

*Photo: [Moreau.henri](https://commons.wikimedia.org/wiki/File:079_Vall%C3%A9e_des_Saints.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les statues ne sont pas alignées dans un musée: elles ponctuent une vaste colline, avec des panoramas sur la campagne. Certaines dépassent plusieurs mètres de hauteur. Leurs visages, vêtements, animaux et objets sculptés invitent à regarder de près.

Le projet associe patrimoine breton, récits de saints et savoir-faire des sculpteurs. La [présentation de Tourisme Côtes-d'Armor](https://www.cotesdarmor.com/fr/fiche/patrimoine-culturel/la-vallee-des-saints-carnoet_TFOPCUBRE022V500H5M/) permet de découvrir cette démarche artistique.

Avec les enfants, transformez la promenade en chasse aux détails: cherchez une chouette, une oie, un chien ou un renard parmi les sculptures. Le [site officiel propose cette découverte familiale](https://www.lavalleedessaints.com/decouvrir-le-site/venir-en-famille/) et indique qu'un livret-jeu est vendu à la boutique. Inutile de voir toutes les statues pour profiter de la sortie.

## Combien de temps prévoir avec les enfants ?

La visite prend généralement **une à deux heures**. Le site naturel consacré aux statues s'étend sur environ huit hectares, mais il est possible de rester près de l'entrée avec de jeunes enfants et de découvrir déjà plusieurs œuvres.

Le terrain est vallonné, avec des parties enherbées et des chemins de terre ou empierrés. **Une poussette est possible**, mais le parcours peut devenir difficile après la pluie. Une poussette tout-terrain sera plus confortable qu'un modèle à petites roues; le porte-bébé peut être préférable si le sol est humide. Un chemin empierré permet néanmoins de découvrir de nombreuses statues sans traverser toutes les zones d'herbe.

Pour les visiteurs qui marchent peu, plusieurs œuvres sont visibles dans un périmètre réduit. Des bancs de granit permettent de faire des pauses. Un chemin non goudronné fait le tour du site, sans garantir le confort d'un parcours entièrement aménagé. Un dépose-minute proche de l'entrée et des visites accompagnées en véhicule électrique existent; consultez les [modalités d'accessibilité](https://www.lavalleedessaints.com/preparer-sa-visite/accessibilite/) avant de venir, notamment pour connaître les disponibilités.

## Entrée gratuite, parking payant

L'[accès au site](https://www.lavalleedessaints.com/informations-pratiques/) est **gratuit, 24 heures sur 24 et toute l'année**. En revanche, le [parking officiel](https://www.lavalleedessaints.com/preparer-sa-visite/stationnement/) coûte **10 € par véhicule et 3 € par moto**, quelle que soit la durée. Le paiement se fait par carte bancaire à la borne de sortie.

Le parking principal est situé à environ **250 mètres de l'entrée**, avec une liaison piétonne non goudronnée. Pour le GPS, utilisez **Quénéquillec, 22160 Carnoët**. Attention à ne pas confondre cette commune avec Clohars-Carnoët, dans le Finistère.

## Pique-nique, sanitaires et visite hors saison

Des tables de pique-nique extérieures sont librement accessibles. Le site dispose aussi de sanitaires, d'une boutique et d'un espace de restauration. Mais l'ouverture permanente de la colline ne signifie pas que ces services sont accessibles à toute heure.

Selon les [horaires officiels des services](https://www.lavalleedessaints.com/preparer-sa-visite/nos-services/), les sanitaires ouvrent généralement de **10 h à 17 h d'octobre à mai**, avec des exceptions les 1er janvier, 1er mai et 25 décembre. La [boutique](https://www.lavalleedessaints.com/preparer-sa-visite/accueil-et-boutique/) annonce **10 h à 17 h de novembre à mars**, sauf ces mêmes dates. L'espace de [restauration Ti Friko](https://www.lavalleedessaints.com/preparer-sa-visite/restauration/) indique **11 h 30 à 17 h d'octobre à mars**, sous réserve des fermetures annoncées. Vérifiez les horaires avant de compter sur un repas sur place.

Les [visites guidées](https://www.lavalleedessaints.com/preparer-sa-visite/visites-guidees/) sont payantes et organisées en saison; leur programmation habituelle s'interrompt au début de novembre jusqu'au printemps. Un audioguide permet également d'en apprendre davantage sur les sculptures. Pour une promenade libre en automne ou en hiver, privilégiez la lumière du jour: la colline est exposée au vent et les chemins peuvent être glissants.

## Prolonger la découverte en Centre-Bretagne

La Vallée des Saints peut devenir une étape d'un week-end en Bretagne intérieure. [Tourisme Côtes-d'Armor suggère un itinéraire](https://www.cotesdarmor.com/a-voir-a-faire/routes-touristiques/une-journee-en-centre-bretagne/) passant aussi par les gorges du Corong et l'abbaye de Bon-Repos. Avec de jeunes enfants, choisir une seule autre étape laisse davantage de temps pour la balade.

Pour séjourner à proximité, une [maison de vacances à Carnoët sur Abritel](https://www.abritel.fr/location-vacances/p10934530a) ou l'[appartement Relais De La Tour à Callac sur Booking.com](https://www.booking.com/hotel/fr/relais-de-la-tour.fr.html) peuvent servir de point de départ pour explorer le secteur. Vérifiez la capacité, les équipements, les disponibilités et le tarif selon vos dates. Pour une simple visite des statues, aucune nuit sur place n'est nécessaire.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/cuisine/biscuiterie-menou-a-plougonver-une-visite-gratuite-a-prevoir-avec-les-enfants/ | Biscuiterie Ménou à Plougonver: une visite gratuite à prévoir avec les enfants | cuisine | Plougonver, Côtes-d'Armor, Bretagne
- /articles/parentalite/maison-des-parents-a-guingamp-quand-y-aller-et-quel-service-choisir/ | Maison des Parents à Guingamp: quand y aller et quel service choisir ? | parentalite | Guingamp, Côtes-d'Armor, Bretagne
- /articles/maison/secheresse-dans-les-cotes-d-armor-ce-qui-est-interdit-a-la-maison/ | Sécheresse dans les Côtes-d'Armor: ce qui est interdit à la maison | maison | Saint-Brieuc, Côtes-d'Armor, Bretagne
- /articles/evenements/natur-armor-2027-a-paimpol-preparer-sa-visite-en-famille/ | Natur’Armor 2027 à Paimpol: préparer sa visite en famille | evenements | Paimpol, Côtes-d'Armor, Bretagne
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/sorties/gouffre-de-padirac-en-famille-tarifs-poussette-et-conseils-pour-la-visite/ | Gouffre de Padirac avec des enfants: à partir de quel âge et tarifs 2026 | sorties | Padirac, Lot, Occitanie
- /articles/activites/vallee-des-singes-a-romagne-combien-de-temps-prevoir-pour-la-visite/ | Vallée des Singes à Romagne: combien de temps prévoir pour la visite? | activites | Romagne, Vienne, Nouvelle-Aquitaine
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/voyages/la-vallee-des-saints-a-carnoet-visiter-les-geants-de-granit-en-famille/ | La Vallée des Saints à Carnoët: visiter les géants de granit en famille | voyages | Carnoët, Côtes-d'Armor, Bretagne
- /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | Ludothèques autour de Dinan: emprunter des jeux pour la maison | vie-pratique | Côtes-d'Armor, Bretagne
- /articles/sorties/ile-de-brehat-en-famille-hors-saison-bateau-balades-et-marees/ | Île de Bréhat en famille hors saison: bateau, balades et marées | sorties | Île-de-Bréhat, Côtes-d'Armor, Bretagne
- /articles/bons-plans/la-roche-jagu-en-famille-a-l-automne-hiver-2026-parc-gratuit-tarifs-et-jours-d-ouverture/ | La Roche-Jagu en famille à l'automne-hiver 2026: parc gratuit, tarifs et jours d'ouverture | bons-plans | Ploëzal, Côtes-d'Armor, Bretagne
- /articles/activites/sept-iles-en-bateau-avec-des-enfants-tarifs-duree-et-conseils-depuis-perros-guirec/ | Sept-Îles en bateau avec des enfants: tarifs, durée et conseils depuis Perros-Guirec | activites | Perros-Guirec, Côtes-d'Armor, Bretagne
- /articles/voyages/perros-guirec-en-famille-ou-dormir-selon-votre-programme/ | Perros-Guirec en famille: où dormir selon votre programme | voyages | Perros-Guirec, Côtes-d'Armor, Bretagne
- /articles/voyages/crozant-en-famille-un-week-end-dans-la-vallee-des-peintres/ | Crozant en famille: un week-end dans la Vallée des Peintres | voyages | Crozant, Creuse, Nouvelle-Aquitaine
- /articles/voyages/saint-nazaire-en-famille-paquebots-sous-marin-et-balade-en-bord-de-mer/ | Saint-Nazaire en famille: paquebots, sous-marin et balade en bord de mer | voyages | Saint-Nazaire, Loire-Atlantique, Pays de la Loire
- /articles/voyages/pau-en-famille-un-week-end-entre-chateau-jardins-et-pyrenees/ | Pau en famille: un week-end entre château, jardins et Pyrénées | voyages | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/voyages/les-rousses-en-hiver-avec-des-enfants-ski-luge-et-sorties-sans-neige/ | Les Rousses en hiver avec des enfants: ski, luge et sorties sans neige | voyages | Jura, Bourgogne-Franche-Comté
- /articles/voyages/lac-du-der-en-famille-observer-les-grues-en-automne-et-en-hiver/ | Lac du Der en famille: observer les grues en automne et en hiver | voyages | Grand Est
- /articles/voyages/voie-verte-sud-ardennes-en-famille-quelle-balade-a-velo-choisir/ | Voie verte Sud-Ardennes en famille: quelle balade à vélo choisir ? | voyages | Ardennes, Grand Est
- /articles/voyages/valmorel-et-doucy-sans-ski-avec-des-enfants-luge-snowtubing-et-sejour-d-hiver/ | Valmorel et Doucy sans ski avec des enfants: luge, snowtubing et séjour d'hiver | voyages | Les Avanchers-Valmorel, Savoie, Auvergne-Rhône-Alpes
- /articles/voyages/narbonne-en-famille-hors-saison-un-week-end-entre-romains-halles-et-canal/ | Narbonne en famille hors saison: un week-end entre Romains, Halles et canal | voyages | Narbonne, Aude, Occitanie

### Historique Radar lié

- refresh | /articles/vie-pratique/ludotheques-autour-de-dinan-emprunter-des-jeux-pour-la-maison/ | 2026-11-11T22:30:20.462Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
