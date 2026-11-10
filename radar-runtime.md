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
title: "Hautes-Alpes en hiver: pneus, chaînes et état des routes avant de partir"
subtitle: Les équipements obligatoires, les alertes routières et les vérifications utiles pour voyager avec des enfants
summary: Dans les Hautes-Alpes, les équipements hivernaux sont exigés même sans neige. Voici comment préparer un trajet familial et vérifier si les routes restent praticables.
slug: hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir
status: published
publishedAt: 2026-10-18T16:10:12+02:00
updatedAt: null
category: vie-pratique
readingTime: 5
location:
  city: Gap
  department: Hautes-Alpes
  region: Provence-Alpes-Côte d’Azur
topic:
  key: vie-pratique|gap|hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir|2026
  keywords:
    - équipements hiver Hautes-Alpes 2026 2027
    - chaînes pneus neige Hautes-Alpes
    - Info Route 05 conditions circulation
    - routes Hautes-Alpes hiver enfants
image:
  src: /images/articles/2026/10/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir.webp
  alt: Traversée enneigée de Chauffayer sur la route Napoléon (N85), dans les Hautes-Alpes
sources:
  - title: "Département des Hautes-Alpes: viabilité hivernale, équipements et conditions C1 à C4"
    url: https://www.hautes-alpes.fr/nos-actions/mobilites/la-viabilite-hivernale/
  - title: "Service-Public: pneus hiver et chaînes, obligations en zone montagneuse"
    url: https://www.service-public.gouv.fr/particuliers/actualites/A14389
  - title: "Info Route 05: conditions des routes départementales et cols"
    url: https://inforoute.hautes-alpes.fr/
  - title: "Bison Futé: trafic et conditions de circulation sur le réseau routier national"
    url: https://www.bison-fute.gouv.fr/maintenant.html
  - title: "Préfecture des Hautes-Alpes: viabilité hivernale et conseils de sécurité 2025-2026"
    url: https://www.hautes-alpes.gouv.fr/Actualites/Viabilite-hivernale-les-services-de-l-Etat-prets-pour-la-saison-2025-2026
affiliate:
  enabled: true
  type: travel
  destination: Gap
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/vie-pratique/(2026)/(10)/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir/index.md
  targetSha: 0dd45eeaf15e842a9b431b84fd367e8eb9c73f34
  targetUrl: /articles/vie-pratique/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir/
  decision: Savoir si les équipements de la voiture suffisent pour le trajet familial, distinguer l'obligation saisonnière de la signalisation ponctuelle et décider de partir, équiper le véhicule ou reporter.
  affiliationPotential: Conserver la piste existante de location de voiture à Gap via KAYAK, sans promettre d'équipements neige inclus.
  gsc:
    retrievedAt: 2026-11-10T01:34:08+01:00
    dataThrough: 2026-11-07
    signal: needs_query_check
    basis: "Visibilité récente : 36 impressions sur trois jours, puis 12 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-23
    peakEnd: 2026-10-25
    recentStart: 2026-11-05
    recentEnd: 2026-11-07
    peakImpressions: 36
    recentImpressions: 12
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - équipements hiver Hautes-Alpes 2026 2027
      - chaînes pneus neige Hautes-Alpes
      - Info Route 05 conditions circulation
      - routes Hautes-Alpes hiver enfants
---

## Mission retenue
Actualisation ciblée du guide de conduite hivernale dans les Hautes-Alpes, sans refonte.

## Pourquoi cette mission
Signal GSC rapidDrop: 36 impressions du 23 au 25 octobre, 12 du 5 au 7 novembre; cause non établie. Lacune indépendante: l'article explique la loi Montagne et les niveaux C1-C4, mais ne distingue pas explicitement les panneaux de zone hivernale du panneau B26 imposant un équipement effectif sur route enneigée. La fiche Service-Public citée est désormais actualisée pour 2026-2027.

## Décision du lecteur
Reconnaître quand garder des chaînes à bord suffit, quand il faut effectivement équiper les roues, et quand renoncer à un itinéraire fermé ou trop dangereux.

## Faits à traiter
- Vérifier la réglementation 2026-2027 du 1er novembre au 31 mars, quatre pneus 3PMSF ou dispositifs amovibles pour deux roues motrices.
- Expliquer sans confusion le panneau B26 et ses panonceaux: ne pas assimiler simple détention et montage exigé; vérifier précisément les exceptions pour pneus hiver et mention de chaînes exclusivement obligatoires.
- Préserver les niveaux C1-C4, Info Route 05, Bison Futé, la préparation avec enfants, le contrôle des équipements de location, les quatre photographies et crédits, ainsi que le lien KAYAK.
- Ne pas attribuer la chute d'impressions à cette lacune.

## Sources de départ
- Service-Public, obligations hiver 2026-2027: https://www.service-public.gouv.fr/particuliers/actualites/A14389
- Sécurité routière, panneau B26: https://www.securite-routiere.gouv.fr/admin/content/sub_paragraph/29045
- Département des Hautes-Alpes, viabilité hivernale: https://www.hautes-alpes.fr/nos-actions/mobilites/la-viabilite-hivernale/
- Info Route 05: https://inforoute.hautes-alpes.fr/

## Affiliation
Maintenir le lien existant de comparaison de locations KAYAK à Gap et la vérification explicite des chaînes/pneus auprès du loueur. Aucune nouvelle offre non vérifiée.

## Continuations internes
Aucune extension vers un guide de stations ou de séjours; conserver ce guide centré sur la décision routière.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/vie-pratique/(2026)/(10)/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir/index.md

---
title: "Hautes-Alpes en hiver: pneus, chaînes et état des routes avant de partir"
subtitle: Les équipements obligatoires, les alertes routières et les vérifications utiles pour voyager avec des enfants
summary: Dans les Hautes-Alpes, les équipements hivernaux sont exigés même sans neige. Voici comment préparer un trajet familial et vérifier si les routes restent praticables.
slug: hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir
status: published
publishedAt: 2026-10-18T16:10:12+02:00
updatedAt: null
category: vie-pratique
readingTime: 5
location:
  city: Gap
  department: Hautes-Alpes
  region: Provence-Alpes-Côte d’Azur
topic:
  key: vie-pratique|gap|hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir|2026
  keywords:
    - équipements hiver Hautes-Alpes 2026 2027
    - chaînes pneus neige Hautes-Alpes
    - Info Route 05 conditions circulation
    - routes Hautes-Alpes hiver enfants
image:
  src: "/images/articles/2026/10/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir.webp"
  alt: "Traversée enneigée de Chauffayer sur la route Napoléon (N85), dans les Hautes-Alpes"
sources:
  - title: "Département des Hautes-Alpes: viabilité hivernale, équipements et conditions C1 à C4"
    url: https://www.hautes-alpes.fr/nos-actions/mobilites/la-viabilite-hivernale/
  - title: "Service-Public: pneus hiver et chaînes, obligations en zone montagneuse"
    url: https://www.service-public.gouv.fr/particuliers/actualites/A14389
  - title: "Info Route 05: conditions des routes départementales et cols"
    url: https://inforoute.hautes-alpes.fr/
  - title: "Bison Futé: trafic et conditions de circulation sur le réseau routier national"
    url: https://www.bison-fute.gouv.fr/maintenant.html
  - title: "Préfecture des Hautes-Alpes: viabilité hivernale et conseils de sécurité 2025-2026"
    url: https://www.hautes-alpes.gouv.fr/Actualites/Viabilite-hivernale-les-services-de-l-Etat-prets-pour-la-saison-2025-2026
affiliate:
  enabled: true
  type: travel
  destination: Gap
---
<!-- article-image-credit -->
*Photo: [Raynaud Bannettes](https://commons.wikimedia.org/wiki/File:Chauffayer_sous_la_neige.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Partir en voiture dans les **Hautes-Alpes** en hiver, que l’on habite Gap ou que l’on rejoigne Briançon, un village ou une station avec des enfants, demande deux vérifications distinctes: **le véhicule est-il équipé conformément à la réglementation et la route est-elle praticable au moment du trajet?** Être en règle avec la loi Montagne ne signifie pas qu’un col sera ouvert ni qu’un équipement suffira sur une chaussée très enneigée.

Dans ce département, l’obligation d’équipement hivernal concerne l’ensemble du réseau routier du **1er novembre au 31 mars**, même les jours sans neige. Pour la saison 2026-2027, elle s’étend donc du **1er novembre 2026 au 31 mars 2027**, selon la règle saisonnière rappelée par le [Département des Hautes-Alpes](https://www.hautes-alpes.fr/nos-actions/mobilites/la-viabilite-hivernale/).

## Pneus hiver ou chaînes: ce qui suffit pour une voiture

<!-- article-image-body:01 -->

![Gros plan du symbole alpin 3PMSF sur le flanc d'un pneu hiver](/images/articles/2026/10/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir-body-01.webp)

*Photo: [Arizonaman1](https://commons.wikimedia.org/wiki/File:Marquage_pneu_hiver.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Une voiture particulière doit, pendant cette période, répondre à **l’une des deux possibilités** suivantes:

- Rouler avec **quatre pneus adaptés à l’hiver**, portant le symbole alpin **3PMSF** (une montagne à trois pics avec un flocon), en complément du marquage M+S, M.S ou M&S.
- Transporter des **chaînes métalliques ou des chaussettes à neige** capables d’équiper **au moins deux roues motrices**.

Il n’est donc pas exact de dire que quatre pneus neige sont obligatoires pour tout le monde. Les dispositifs amovibles constituent une autre solution réglementaire. Depuis le 1er novembre 2024, des pneus portant **seulement M+S**, sans symbole 3PMSF, ne remplacent plus à eux seuls les chaînes ou chaussettes à conserver à bord.

Cette règle et ses exceptions, notamment pour les pneus à clous, sont détaillées par [Service-Public](https://www.service-public.gouv.fr/particuliers/actualites/A14389). La fiche officielle porte sur l’hiver 2025-2026; le calendrier réglementaire du 1er novembre au 31 mars est récurrent. Avant de partir durant l’hiver 2026-2027, vérifiez qu’aucune nouvelle disposition n’a été publiée.

**Avant de choisir des chaînes ou chaussettes**, vérifiez les dimensions inscrites sur les pneus, les consignes du constructeur et l’espace disponible entre roue et carrosserie. Certains véhicules ne peuvent recevoir que des dispositifs particuliers. Entraînez-vous à les installer au sec: le bord d’une route enneigée, avec des enfants à bord, n’est pas l’endroit idéal pour découvrir la procédure.

Un SUV ou une transmission intégrale ne dispense pas automatiquement des équipements réglementaires. Et même avec quatre pneus 3PMSF, une route peut exiger des précautions ou des dispositifs supplémentaires selon les conditions et la signalisation locale.

## Route dégagée, difficile ou impossible: lire les niveaux C1 à C4

<!-- article-image-body:02 -->

![Route départementale D205 enneigée à l'approche du col Agnel dans les Hautes-Alpes en fin d'hiver](/images/articles/2026/10/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir-body-02.webp)

*Photo: [TouN](https://commons.wikimedia.org/wiki/File:D205_route_Col_Agnel.JPG) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Le [Département des Hautes-Alpes](https://www.hautes-alpes.fr/nos-actions/mobilites/la-viabilite-hivernale/) utilise quatre niveaux pour décrire la circulation en hiver:

- **C1, route dégagée:** chaussée sans neige ni verglas apparent. Les précautions ordinaires restent nécessaires.
- **C2, circulation délicate:** plaques de neige ou de verglas localisées. Il faut ralentir, augmenter les distances et rester particulièrement attentif.
- **C3, circulation difficile:** chaussée enneigée, trafic fortement ralenti et risque de blocage élevé. Les équipements adaptés aux conditions sont indispensables; sans eux, reportez le départ.
- **C4, circulation impossible:** route impraticable. Il ne faut pas s’y engager, même avec un véhicule préparé.

Cette échelle aide à comprendre pourquoi une voiture conforme à la réglementation peut malgré tout rester au garage. Sur un itinéraire vers un col ou une station, la situation peut changer en quelques heures. Une fermeture de route prime toujours sur l’équipement du véhicule.

## Où vérifier les routes avant de partir?

Pour les **routes départementales**, consultez la carte officielle [Info Route 05](https://inforoute.hautes-alpes.fr/). Elle réunit les conditions de circulation, les informations sur les cols, les accès d’altitude et les caméras. Le Département propose aussi un serveur vocal au **04 65 03 00 05**.

Pour les **routes nationales**, consultez la [carte du trafic de Bison Futé](https://www.bison-fute.gouv.fr/maintenant.html), qui indique notamment les fermetures, restrictions et événements sur les grands axes. Si votre itinéraire emprunte aussi des routes départementales, consulter une seule carte ne suffit pas.

Regardez d’abord l’itinéraire complet, puis les éventuels passages en altitude. Refaites le point **juste avant le départ** et lorsque vous pouvez vous arrêter en sécurité: une prévision météo favorable dans la vallée ne décrit pas nécessairement un col plus haut. Si la route annoncée est impraticable ou si les conditions dépassent votre équipement et votre expérience, différer le trajet reste la meilleure décision.

## Voyager avec des enfants: préparer les imprévus sans surcharger la voiture

<!-- article-image-body:03 -->

![Chaînes à neige à câbles montées sur une roue de voiture, exemple de dispositif amovible](/images/articles/2026/10/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir-body-03.webp)

*Photo: [Steve Morgan](https://commons.wikimedia.org/wiki/File:Cable_chains_on_car_tire.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Le plus utile est de limiter les difficultés si la progression ralentit ou si un détour devient nécessaire. Avant le départ, contrôlez la batterie, les essuie-glaces, les niveaux adaptés au froid et le dégivrage. Déneigez le toit, les vitres, les feux et les plaques; ne partez pas avec seulement une petite zone dégagée sur le pare-brise.

À bord, gardez à portée de main **de l’eau, quelques aliments, des vêtements chauds, des couvertures et les médicaments habituels**. Un grattoir, des gants utilisables pour monter les chaînes et un téléphone chargé ont plus d’intérêt qu’une accumulation d’accessoires mal adaptés. Prévoyez une marge dans l’heure d’arrivée et des pauses possibles, surtout avec de jeunes enfants.

Le [Département](https://www.hautes-alpes.fr/nos-actions/mobilites/la-viabilite-hivernale/) et la [préfecture](https://www.hautes-alpes.gouv.fr/Actualites/Viabilite-hivernale-les-services-de-l-Etat-prets-pour-la-saison-2025-2026) recommandent de vérifier l’état du véhicule, de prévoir des vêtements chauds et de consulter les conditions de circulation avant de prendre la route. Pour monter des chaînes, cherchez un emplacement autorisé et sécurisé: **jamais au milieu de la chaussée**.

## Voiture de location: les questions à poser avant de réserver

Une location peut être utile aux familles arrivant en train ou ne souhaitant pas utiliser leur véhicule personnel. Pour comparer les agences et les catégories de véhicules disponibles sur place, consultez les [voitures de location proposées à Gap sur KAYAK](https://www.kayak.fr/location-voiture-Gap.13772.cars.ksp). Mais ne supposez pas qu’une voiture louée à Gap dispose automatiquement de pneus 3PMSF ou de chaînes adaptées, y compris si le modèle annoncé est un SUV.

Demandez au loueur, idéalement par écrit, **quel équipement sera effectivement fourni aux dates du séjour**. Faites préciser la taille des pneus, la possibilité d’utiliser des chaînes ou chaussettes sur le véhicule réservé, les éventuels suppléments et les consignes de montage. À la remise des clés, vérifiez que le matériel promis est présent et compatible.

Avec des enfants, confirmez aussi **les sièges adaptés à leur âge et à leur taille**, leur disponibilité réelle, la place pour les bagages et l’emplacement accessible des équipements neige. Une formule de location affichée en ligne ne garantit pas, à elle seule, ces éléments.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/activites/parc-animalier-de-serre-poncon-comment-organiser-la-visite-avec-des-enfants/ | Parc animalier de Serre-Ponçon: comment organiser la visite avec des enfants | activites | Le Sauze-du-Lac, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-echo-mots-champsaur-2026/ | Festival L’Écho des mots 2026 dans le Champsaur: quatre jours de spectacles en famille | evenements | Saint-Jean-Saint-Nicolas, Hautes-Alpes, Provence-Alpes-Côte d'Azur
- /articles/voyages/serre-poncon-en-famille-organiser-3-jours-entre-lac-plages-et-montagne/ | Serre-Ponçon en famille: organiser 3 jours entre lac, plages et montagne | voyages | Embrun, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/festival-mini-kids-2027-aux-orres-trois-jours-pour-les-3-6-ans/ | Festival Mini Kids 2027 aux Orres, trois jours pour les 3-6 ans | evenements | Les Orres, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/sorties/visiter-l-abbaye-de-fontenay-avec-des-enfants-meme-en-hiver/ | Visiter l'abbaye de Fontenay avec des enfants, même en hiver | sorties | Marmagne, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/activites/sherwood-parc-avec-des-enfants-quel-billet-choisir-avant-de-reserver/ | Sherwood Parc avec des enfants: quel billet choisir avant de réserver? | activites | Viarmes, Val-d'Oise, Île-de-France
- /articles/activites/confiserie-des-hautes-vosges-a-plainfaing-une-visite-gratuite-en-famille/ | Confiserie des Hautes Vosges à Plainfaing: une visite gratuite en famille | activites | Plainfaing, Vosges, Grand Est
- /articles/activites/preau-des-accoules-a-marseille-faut-il-reserver-avant-de-venir-avec-des-enfants/ | Préau des Accoules à Marseille: faut-il réserver avant de venir avec des enfants? | activites | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/hautes-alpes-en-hiver-pneus-chaines-et-etat-des-routes-avant-de-partir/ | Hautes-Alpes en hiver: pneus, chaînes et état des routes avant de partir | vie-pratique | Gap, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/evenements/sacree-meouge-2026-venir-a-pied-a-velo-ou-avec-une-poussette/ | Sacrée Méouge 2026: venir à pied, à vélo ou avec une poussette? | evenements | Val Buëch-Méouge, Hautes-Alpes, Provence-Alpes-Côte d’Azur
- /articles/voyages/briancon-en-famille-ou-dormir-selon-votre-programme/ | Briançon en famille: où dormir selon votre programme | voyages | Briançon, Hautes-Alpes, Provence-Alpes-Côte d'Azur
- /articles/vie-pratique/bibliotheques-de-la-marne-en-famille-livres-jeux-et-services-numeriques/ | Bibliothèques de la Marne en famille: livres, jeux et services numériques | vie-pratique | Marne, Grand Est
- /articles/vie-pratique/fort-de-france-trois-ilets-en-famille-quelle-navette-prendre-sans-voiture/ | Fort-de-France - Trois-Îlets en famille: quelle navette prendre sans voiture ? | vie-pratique | Martinique, Martinique
- /articles/vie-pratique/lyon-saint-exupery-avec-des-enfants-preparer-le-trajet-les-controles-et-l-attente/ | Lyon-Saint-Exupéry avec des enfants: préparer le trajet, les contrôles et l’attente | vie-pratique | Colombier-Saugnieu, Rhône, Auvergne-Rhône-Alpes
- /articles/vie-pratique/drome-sans-voiture-avec-des-enfants-train-cars-et-bus-pour-se-deplacer/ | Drôme sans voiture avec des enfants: train, cars et bus pour se déplacer | vie-pratique | Drôme, Auvergne-Rhône-Alpes
- /articles/vie-pratique/transports-gratuits-a-lille-comment-obtenir-le-titre-moins-de-18-ans/ | Transports gratuits à Lille: comment obtenir le titre moins de 18 ans ? | vie-pratique | Nord, Hauts-de-France
- /articles/vie-pratique/bus-ou-voiture-a-la-reunion-organiser-ses-deplacements-en-famille/ | Bus ou voiture à La Réunion: organiser ses déplacements en famille | vie-pratique | La Réunion
- /articles/vie-pratique/transport-scolaire-en-ariege-gratuite-lio-inscription-et-aide-si-aucun-car-ne-dessert-votre-domicile/ | Transport scolaire en Ariège: gratuité liO, inscription et aide si aucun car ne dessert votre domicile | vie-pratique | Ariège, Occitanie
- /articles/vie-pratique/train-mobigo-en-famille-quels-billets-choisir-et-comment-preparer-le-trajet/ | TRAIN Mobigo en famille: quels billets choisir et comment préparer le trajet | vie-pratique | Bourgogne-Franche-Comté
- /articles/vie-pratique/sud-des-landes-sans-voiture-en-famille-quel-train-et-quel-bus-prendre/ | Sud des Landes sans voiture en famille: quel train et quel bus prendre ? | vie-pratique | Landes, Nouvelle-Aquitaine
- /articles/vie-pratique/louer-une-voiture-en-martinique-en-famille-bien-choisir-et-preparer-ses-trajets/ | Louer une voiture en Martinique en famille: bien choisir et préparer ses trajets | vie-pratique | Martinique
- /articles/vie-pratique/visiter-le-gard-sans-voiture-avec-des-enfants-les-trajets-qui-fonctionnent/ | Visiter le Gard sans voiture avec des enfants: les trajets qui fonctionnent | vie-pratique | Gard, Occitanie

### Historique Radar lié

- Aucun historique lié.

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
