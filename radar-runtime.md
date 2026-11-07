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
title: À Paris, où donner ou déposer meubles, jouets et électroménager ?
subtitle: "Collecte gratuite, ressourceries, déchèteries et enlèvement à domicile: le bon circuit selon l'objet."
summary: "Lit d'enfant, matelas, jouets ou frigo: comment faire de la place à Paris sans dépôt sauvage, en privilégiant le don et les services gratuits."
slug: a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager
status: published
publishedAt: 2026-10-10T05:02:08+02:00
updatedAt: null
category: maison
readingTime: 5
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: maison|paris|a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager|2026
  keywords:
    - encombrants Paris collecte gratuite
    - donner meubles jouets Paris
    - recyclage électroménager Paris
    - ressourcerie Paris
image:
  src: /images/articles/2026/10/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager.webp
  alt: Boutique de restauration de meubles rue Claude-Tillier à Paris, exemple de réparation plutôt que de mise au rebut
sources:
  - title: Ville de Paris - Faire appel au service des encombrants, c'est gratuit
    url: https://www.paris.fr/pages/les-encombrants-un-service-public-hors-norme-17519
  - title: "Mairie du 10e - Encombrants: conditions et limites de collecte"
    url: https://mairie10.paris.fr/pages/encombrants-s-en-debarrasser-proprement-17124
  - title: Ville de Paris - Donner une seconde vie à nos meubles usagés
    url: https://www.paris.fr/pages/donner-une-seconde-vie-a-nos-meubles-usages-paris-engagee-pour-faciliter-le-tri-et-le-reemploi-36096
  - title: Ville de Paris - Carte des ressourceries, recycleries et réparateurs
    url: https://www.paris.fr/pages/ressourceries-recycleries-les-lieux-du-reemploi-a-paris-6016
  - title: Ville de Paris - Votre électroménager collecté gratuitement à domicile
    url: https://www.paris.fr/pages/votre-gros-electromenager-collecte-gratuitement-au-sein-de-votre-domicile-23984
  - title: Ville de Paris - Que faire de ses déchets ?
    url: https://www.paris.fr/pages/en-2019-paris-vous-facilite-le-tri-6266
  - title: Ville de Paris - Les déchèteries parisiennes à votre service
    url: https://www.paris.fr/pages/huit-decheteries-parisiennes-recyclent-vos-encombrants-17799
  - title: Ville de Paris - Avec le Trimobile, déposez vos petits encombrants
    url: https://www.paris.fr/pages/avec-le-trimobile-deposez-vos-petits-encombrants-6058
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/maison/(2026)/(10)/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/index.md
  targetSha: 8811b3e07219a814107322c12681c00b0bb50d3a
  targetUrl: /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/
  decision: Savoir où déposer réellement ses jouets ou objets encombrants à Paris en novembre-décembre 2026 sans se déplacer vers une déchèterie fermée.
  affiliationPotential: "Aucune affiliation naturelle : privilégier les services municipaux gratuits et le réemploi."
  gsc:
    retrievedAt: 2026-11-07T02:32:02+01:00
    dataThrough: 2026-11-04
    signal: needs_query_check
    basis: "Visibilité récente : 56 impressions sur trois jours, puis 16 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-12
    peakEnd: 2026-10-14
    recentStart: 2026-11-02
    recentEnd: 2026-11-04
    peakImpressions: 56
    recentImpressions: 16
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - encombrants Paris collecte gratuite
      - donner meubles jouets Paris
      - recyclage électroménager Paris
      - ressourcerie Paris
---

## Mission retenue
Actualiser le guide pratique parisien sur le don, les encombrants et les jouets, en corrigeant les points de dépôt temporairement indisponibles.

## Pourquoi cette mission
Le snapshot GSC montre 56 impressions sur trois jours au pic contre 16 récemment, sans cause SEO établie. Une lacune indépendante et vérifiée justifie ce refresh : l'article recommande trois déchèteries pour les jouets sans avertir que **Poterne des Peupliers (13e) est fermée pour travaux du 2 novembre au 31 décembre 2026** et que **Porte de Pantin (19e) est temporairement fermée pour travaux**. Ces informations figurent sur les fiches officielles de la Ville de Paris et rendent le conseil actuel trompeur.

## Décision du lecteur
Choisir un lieu de dépôt réellement accessible selon l'objet, plutôt que faire un trajet inutile avec des jouets ou des meubles.

## Faits à traiter
- Corriger la liste des trois déchèteries acceptant les jouets : conserver l'information sur les filières, mais distinguer les sites fermés de celui de Porte de la Chapelle (18e), dont les horaires officiels restent publiés.
- Indiquer les dates précises de fermeture de Poterne des Peupliers et la fermeture temporaire sans date de réouverture confirmée de Porte de Pantin. Orienter vers les fiches actualisées des établissements et la liste générale des espaces tri avant déplacement.
- Vérifier la distinction entre jouets réemployables, petits jouets usagés et jouets électriques ; préserver les autres circuits de don et de collecte.
- Préserver intégralement les conseils utiles sur la collecte municipale à 3 m³, Ecosystem à domicile, ressourceries, Trimobile, déchets dangereux, les images, crédits et le lien interne.

## Sources de départ
- https://www.paris.fr/lieux/espace-tri-poterne-des-peupliers-decheterie-1816
- https://www.paris.fr/lieux/espace-tri-de-la-porte-de-pantin-decheterie-18537
- https://www.paris.fr/lieux/espace-tri-de-la-porte-de-la-chapelle-decheterie-1763
- https://www.paris.fr/pages/huit-decheteries-parisiennes-recyclent-vos-encombrants-17799
- https://www.paris.fr/pages/donner-une-seconde-vie-aux-jouets-usages-pour-s-inscrire-dans-une-dynamique-circulaire-et-durable-36095

## Affiliation
Aucune piste naturelle : les solutions publiques et associatives gratuites répondent au besoin.

## Continuations internes
Conserver le renvoi existant vers les démarches scolaires en cas de déménagement ; ne pas développer ce sous-sujet ici.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/maison/(2026)/(10)/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/index.md

---
title: À Paris, où donner ou déposer meubles, jouets et électroménager ?
subtitle: "Collecte gratuite, ressourceries, déchèteries et enlèvement à domicile: le bon circuit selon l'objet."
summary: "Lit d'enfant, matelas, jouets ou frigo: comment faire de la place à Paris sans dépôt sauvage, en privilégiant le don et les services gratuits."
slug: a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager
status: published
publishedAt: 2026-10-10T05:02:08+02:00
updatedAt: null
category: maison
readingTime: 5
location:
  city: Paris
  department: Paris
  region: Île-de-France
topic:
  key: maison|paris|a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager|2026
  keywords:
    - encombrants Paris collecte gratuite
    - donner meubles jouets Paris
    - recyclage électroménager Paris
    - ressourcerie Paris
image:
  src: "/images/articles/2026/10/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager.webp"
  alt: "Boutique de restauration de meubles rue Claude-Tillier à Paris, exemple de réparation plutôt que de mise au rebut"
sources:
  - title: Ville de Paris - Faire appel au service des encombrants, c'est gratuit
    url: https://www.paris.fr/pages/les-encombrants-un-service-public-hors-norme-17519
  - title: "Mairie du 10e - Encombrants: conditions et limites de collecte"
    url: https://mairie10.paris.fr/pages/encombrants-s-en-debarrasser-proprement-17124
  - title: Ville de Paris - Donner une seconde vie à nos meubles usagés
    url: https://www.paris.fr/pages/donner-une-seconde-vie-a-nos-meubles-usages-paris-engagee-pour-faciliter-le-tri-et-le-reemploi-36096
  - title: Ville de Paris - Carte des ressourceries, recycleries et réparateurs
    url: https://www.paris.fr/pages/ressourceries-recycleries-les-lieux-du-reemploi-a-paris-6016
  - title: Ville de Paris - Votre électroménager collecté gratuitement à domicile
    url: https://www.paris.fr/pages/votre-gros-electromenager-collecte-gratuitement-au-sein-de-votre-domicile-23984
  - title: Ville de Paris - Que faire de ses déchets ?
    url: https://www.paris.fr/pages/en-2019-paris-vous-facilite-le-tri-6266
  - title: Ville de Paris - Les déchèteries parisiennes à votre service
    url: https://www.paris.fr/pages/huit-decheteries-parisiennes-recyclent-vos-encombrants-17799
  - title: Ville de Paris - Avec le Trimobile, déposez vos petits encombrants
    url: https://www.paris.fr/pages/avec-le-trimobile-deposez-vos-petits-encombrants-6058
---

Un lit devenu trop petit, des jouets qui s'accumulent, un réfrigérateur à remplacer: dans un appartement parisien, faire de la place demande parfois plus d'organisation que de porter les objets jusqu'à la porte. La bonne solution dépend surtout de leur état et de leur taille. **Un meuble encore utilisable ne suit pas forcément le même circuit qu'un matelas usé ou qu'un lave-linge hors service.**

## Un meuble en bon état: essayer le don avant la collecte

<!-- article-image-body:01 -->

![Entrée de la Ressourcerie de Belleville, boutique d'objets d'occasion rue des Rigoles à Paris](/images/articles/2026/10/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager-body-01.webp)

*Photo: [Augustin Cléchet](https://commons.wikimedia.org/wiki/File:Entr%C3%A9e_de_la_Ressourcerie_de_Belleville.jpg) - [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour une commode, une table ou un lit d'enfant encore utilisable, les **ressourceries et recycleries** permettent de prolonger la vie de l'objet. Certaines acceptent aussi la décoration, les livres ou les vêtements. La Ville de Paris propose une [carte des lieux de réemploi et des réparateurs](https://www.paris.fr/pages/ressourceries-recycleries-les-lieux-du-reemploi-a-paris-6016): elle aide à chercher une structure selon l'arrondissement et le type de bien.

**Appelez avant d'apporter un meuble volumineux.** Les associations n'ont pas toutes la place de stocker une armoire ou un canapé, et leurs critères de reprise peuvent varier. Un don direct à une personne qui vient récupérer l'objet peut aussi éviter un transport.

Pour un meuble abîmé mais réparable, la réparation mérite d'être envisagée avant la mise au rebut. La [Ville détaille les solutions de réemploi des meubles](https://www.paris.fr/pages/donner-une-seconde-vie-a-nos-meubles-usages-paris-engagee-pour-faciliter-le-tri-et-le-reemploi-36096) et précise que les meubles récupérés en déchèterie sont dirigés vers une filière spécialisée.

## Lit, matelas, armoire: la collecte municipale gratuite

Un sommier cassé, un matelas inutilisable ou un meuble trop encombrant pour être transporté peut relever du **service gratuit d'enlèvement des encombrants de Paris**. Il est réservé aux particuliers et fonctionne sur rendez-vous, avec un dépôt **limité à 3 m³ par demande**.

La démarche se fait sur le [téléservice municipal des encombrants](https://teleservices.paris.fr/ramen/). Indiquez les objets à retirer, choisissez le créneau proposé et respectez les consignes de dépôt communiquées lors de la réservation. La collecte se fait **au pied de l'immeuble**, et non à l'intérieur de l'appartement: il faut donc pouvoir descendre le mobilier. Les [conditions et exclusions sont rappelées par la mairie du 10e](https://mairie10.paris.fr/pages/encombrants-s-en-debarrasser-proprement-17124).

Ne sortez pas un objet sur le trottoir plusieurs jours à l'avance: **sans rendez-vous et hors consignes, il s'agit d'un dépôt sauvage**. La [Ville rappelle que l'abandon d'encombrants est sanctionné](https://www.paris.fr/pages/les-encombrants-un-service-public-hors-norme-17519). Pour un déménagement, réservez la collecte dès que vous connaissez les meubles à retirer, plutôt que de supposer qu'un créneau sera disponible à la dernière minute. Si un meuble est infesté de punaises de lit, signalez-le lors de la demande et emballez-le hermétiquement selon les consignes de la Ville.

## Réfrigérateur ou lave-linge: pas besoin de le descendre

Le gros électroménager bénéficie d'une solution différente, particulièrement utile dans les immeubles sans ascenseur. Avec **Ecosystem**, il est possible de faire récupérer gratuitement, **à l'intérieur du logement et sur rendez-vous**, un appareil usagé, même s'il ne fonctionne plus.

La [liste officielle des appareils acceptés](https://www.paris.fr/pages/votre-gros-electromenager-collecte-gratuitement-au-sein-de-votre-domicile-23984) comprend notamment réfrigérateurs, congélateurs, lave-linge, sèche-linge, lave-vaisselle, fours et micro-ondes. La réservation s'effectue via [Je donne mon électroménager](https://www.jedonnemonelectromenager.fr/), le service d'Ecosystem. Vérifiez les instructions de préparation lors de la prise de rendez-vous, notamment pour les appareils branchés ou raccordés.

C'est une distinction importante: **un frigo ne doit pas nécessairement suivre le même parcours qu'une armoire**. Les appareils récupérés peuvent être remis en état ou, lorsque ce n'est pas possible, dépollués et recyclés.

## Jouets, vêtements et petits appareils: choisir le bon dépôt

Pour des jouets complets et propres dont les enfants ne se servent plus, le don à une association est souvent la première piste. Si les jouets ne peuvent pas être réemployés, la [Ville indique trois déchèteries qui acceptent les jeux et jouets](https://www.paris.fr/pages/en-2019-paris-vous-facilite-le-tri-6266): **Poterne des Peupliers (13e), porte de la Chapelle (18e) et porte de Pantin (19e)**. Toutes les déchèteries parisiennes ne proposent donc pas nécessairement cette collecte.

Les vêtements et chaussures suivent des points d'apport textile ou des circuits de don, plutôt que la collecte ordinaire des encombrants. Pour une bouilloire, un sèche-cheveux, des câbles ou une petite lampe hors d'usage, le **Trimobile** peut être plus pratique: cette remorque de collecte se déplace dans les quartiers et accepte plusieurs catégories de petits objets.

Consultez [le planning des Trimobiles](https://www.paris.fr/pages/avec-le-trimobile-deposez-vos-petits-encombrants-6058) avant de partir. Le lieu et l'horaire peuvent changer d'un mois à l'autre; il ne s'agit pas d'un point de dépôt permanent.

## Déchèterie: utile si vous pouvez transporter les objets

Si vous avez plusieurs objets à évacuer et un moyen de les transporter, les déchèteries parisiennes constituent une autre solution gratuite pour les particuliers. On peut notamment y apporter, selon le site, des meubles, matelas ou appareils électriques. Certaines disposent aussi d'un espace de réemploi pour les meubles encore utilisables.

Attention aux différences entre établissements: **les mini-déchèteries Vincent Auriol, Pasteur et du Canal sont réservées aux personnes à pied**, sans accès en voiture. La [liste des déchèteries, avec leurs conditions d'accès et les catégories acceptées](https://www.paris.fr/pages/huit-decheteries-parisiennes-recyclent-vos-encombrants-17799) est à vérifier avant de charger le véhicule.

## Cartons, peinture, gravats: les erreurs à éviter

Tous les objets dont on veut se débarrasser ne sont pas des encombrants municipaux. Les **cartons de déménagement pliés** relèvent normalement du bac jaune; les gros cartons pliés peuvent aussi être apportés à un Trimobile qui les accepte. Les **peintures, solvants et autres déchets dangereux** nécessitent une collecte adaptée. Les **gravats et déchets de travaux** ont également leur propre filière: ils ne doivent pas être ajoutés à une demande d'enlèvement de meubles. Depuis janvier 2025, les déchèteries municipales parisiennes n'acceptent plus les déchets du bâtiment.

La [rubrique municipale « Que faire de ses déchets ? »](https://www.paris.fr/pages/en-2019-paris-vous-facilite-le-tri-6266) permet de retrouver le circuit selon le matériau. En cas de doute sur un objet inhabituel, mieux vaut consulter cette page avant de réserver une collecte ou de se déplacer.

Si ce tri accompagne un changement de logement avec des enfants, notre guide [changer d'école après un déménagement](/articles/vie-pratique/demenagement-comment-changer-d-ecole-maternelle-ou-elementaire-sans-rater-une-etape/) aide aussi à anticiper les démarches scolaires.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/paris-plages-2026-en-famille/ | Paris Plages 2026: où se baigner et jouer avec des enfants | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/paris-sport-vacances-automne-2026-demi-journee-gratuite-ou-stage-a-la-journee/ | Paris Sport Vacances automne 2026: demi-journée gratuite ou stage à la journée? | activites | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/maison/encombrants-a-bastia-ou-deposer-meubles-electromenager-et-dechets-verts/ | Encombrants à Bastia: où déposer meubles, électroménager et déchets verts | maison | Bastia, Haute-Corse, Corse
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/jeux-nature-gratuits-au-parc-floral-de-paris-le-18-novembre-2026-quel-jeu-selon-l-age/ | Jeux nature gratuits au Parc floral de Paris le 18 novembre 2026 | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | Atelier Scratch gratuit à Paris le 7 novembre 2026: créer un jeu vidéo | activites | Paris, Paris, Île-de-France
- /articles/evenements/rencontres-du-ciel-et-de-l-espace-2026-a-paris-que-choisir-avec-des-enfants/ | Rencontres du ciel et de l’espace 2026 à Paris: ateliers, âges et billets en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | Ateliers textiles au musée Bourdelle à Paris: styliste ou broderie en famille | activites | Paris, Paris, Île-de-France
- /articles/maison/materiautheques-en-bretagne-preparer-son-projet-et-acheter-les-bons-materiaux/ | Matériauthèques en Bretagne: préparer son projet et acheter les bons matériaux | maison | Bretagne
- /articles/maison/reparer-ses-objets-dans-l-herault-repair-cafes-et-bonus-reparation/ | Réparer ses objets dans l’Hérault: Repair Cafés et bonus réparation | maison | Hérault, Occitanie
- /articles/maison/chaleur-a-mayotte-comment-rendre-son-logement-plus-confortable/ | Chaleur à Mayotte: comment rendre son logement plus confortable | maison | Mayotte
- /articles/maison/dechets-alimentaires-a-orleans-metropole-s-organiser-avec-ou-sans-jardin/ | Déchets alimentaires à Orléans Métropole: s’organiser avec ou sans jardin | maison | Loiret, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/activites/atelier-scratch-gratuit-a-paris-le-7-novembre-2026-programmer-un-jeu-video-des-8-ans/ | 2026-11-04T08:27:47.912Z
- opportunity | /articles/activites/ateliers-textiles-au-musee-bourdelle-a-paris-styliste-ou-broderie-en-famille-en-2026/ | 2026-11-04T01:30:49.478Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | 2026-11-05T00:34:45.481Z
- opportunity | /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | 2026-11-04T21:32:12.180Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
