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
title: "Encombrants à Limoges: donner, faire enlever ou déposer ses meubles"
subtitle: "Canapé, matelas, meuble d'enfant ou électroménager: les solutions de Limoges Métropole, avec ou sans véhicule"
summary: À Limoges et dans sa métropole, découvrez comment donner un meuble, réserver l'enlèvement d'encombrants ou accéder aux déchèteries sans mauvaise surprise.
slug: encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles
status: published
publishedAt: 2026-10-23T15:06:38+02:00
updatedAt: null
category: maison
readingTime: 5
location:
  city: Limoges
  department: Haute-Vienne
  region: Nouvelle-Aquitaine
topic:
  key: maison|limoges|encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles|2026
  keywords:
    - encombrants Limoges
    - enlèvement meubles Limoges Métropole
    - déchèterie Limoges carte accès
image:
  src: /images/articles/2026/10/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles.webp
  alt: Canapés et lits usagés photographiés parmi des encombrants en Allemagne en octobre 2017, illustration du sujet sans montrer le service de Limoges Métropole.
sources:
  - title: Limoges Métropole - Réserver l'enlèvement des encombrants et objets acceptés
    url: https://encombrants.limoges-metropole.fr/accueil
  - title: Limoges Métropole - Les collectes et le calendrier 2026
    url: https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/collecte-des-dechets-limoges-metropole
  - title: Ville de Limoges - Collecte et gestion des déchets
    url: https://www.limoges.fr/pratique/collecte-et-gestion-des-dechets
  - title: Limoges Métropole - Déchèteries et carte d'accès
    url: https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/espace-decheteries
  - title: Limoges Métropole - Réemploi et réparation d'objets
    url: https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/reduire-ses-dechets/reemploi-et-reparation-dobjets
  - title: Mairie de Saint-Just-le-Martel - Collecte des encombrants
    url: https://saintjustlemartel.fr/collecte-des-encombrants/
affiliate:
  enabled: true
  type: travel
  destination: Limoges
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/maison/(2026)/(10)/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles/index.md
  targetSha: 928bceea1b7fd7cd8036ecf011de95c1d57a652a
  targetUrl: /articles/maison/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles/
  decision: Savoir si son adresse relève d'un rendez-vous à Limoges ou d'une collecte semestrielle, et comment faire enlever gratuitement un meuble sans déplacement inutile.
  affiliationPotential: Conserver la comparaison facultative d'utilitaires KAYAK pour plusieurs meubles; aucune nouvelle offre partenaire nécessaire.
  gsc:
    retrievedAt: 2026-11-12T03:33:45+01:00
    dataThrough: 2026-11-09
    signal: uncertain
    basis: "Visibilité récente : 21 impressions sur trois jours, puis 5 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-24
    peakEnd: 2026-10-26
    recentStart: 2026-11-07
    recentEnd: 2026-11-09
    peakImpressions: 21
    recentImpressions: 5
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - encombrants limoges
      - encombrant mairie
---

## Mission retenue
Clarifier le fonctionnement réel de la collecte des encombrants à Limoges Métropole selon l'adresse, dans le guide existant.

## Pourquoi cette mission
Le snapshot GSC signale 21 puis 5 impressions sur deux périodes de trois jours, sans preuve d'une perte de classement. Lacune indépendante vérifiée: le guide explique la réservation, mais ne distingue pas assez clairement les rendez-vous proposés à Limoges des collectes semestrielles des 19 autres communes et de certains quartiers extra-boulevards. La métropole confirme aussi la gratuité et l'alternative d'inscription auprès des mairies selon la commune.

## Décision du lecteur
Comprendre quel calendrier s'applique à son domicile, comment réserver au moins 72 heures avant, et comment éviter un dépôt non collecté.

## Faits à traiter
Préciser sans généraliser: rendez-vous à Limoges selon quartier et créneaux; collecte semestrielle dans les autres communes et certains quartiers extra-boulevards; inscription préalable obligatoire, via la plateforme ou la mairie lorsque ce canal est proposé localement. Service gratuit réservé aux particuliers ne pouvant se rendre en déchèterie. Les modalités exactes de la commune priment; éviter de promettre une collecte immédiate. Préserver intégralement les limites de trois objets, deux rendez-vous, 80 kg, 2 m³, dépôt la veille avec affichette, exclusions, don/réemploi, carte de déchèterie, accès sans véhicule, photos, licences, crédits et lien KAYAK.

## Sources de départ
- Limoges Métropole, collecte et distinction des secteurs: https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/collecte-des-dechets-limoges-metropole
- Limoges Métropole, réservation et objets acceptés: https://encombrants.limoges-metropole.fr/accueil
- Le Métropol n°115, mars 2026, page 23, gratuité et secteurs: https://limoges-metropole.fr/fileadmin/1-LIMOGES_METROPOLE/6-Publications/2026/Le_Metropol/20260320_Document_LeMetropol_115_Site_internet_Limoges_Metropole.pdf

## Affiliation
Conserver KAYAK uniquement si plusieurs meubles justifient la location d'un utilitaire. Pas d'hébergement pour cette démarche domestique.

## Continuations internes
- Faire consulter le calendrier officiel de sa commune et le créneau confirmé, plutôt que recopier des dates fragiles.
- Ne pas transformer les perturbations ponctuelles de collecte des ordures ménagères en informations sur les encombrants.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/maison/(2026)/(10)/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles/index.md

---
title: "Encombrants à Limoges: donner, faire enlever ou déposer ses meubles"
subtitle: "Canapé, matelas, meuble d'enfant ou électroménager: les solutions de Limoges Métropole, avec ou sans véhicule"
summary: À Limoges et dans sa métropole, découvrez comment donner un meuble, réserver l'enlèvement d'encombrants ou accéder aux déchèteries sans mauvaise surprise.
slug: encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles
status: published
publishedAt: 2026-10-23T15:06:38+02:00
updatedAt: null
category: maison
readingTime: 5
location:
  city: Limoges
  department: Haute-Vienne
  region: Nouvelle-Aquitaine
topic:
  key: maison|limoges|encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles|2026
  keywords:
    - encombrants Limoges
    - enlèvement meubles Limoges Métropole
    - déchèterie Limoges carte accès
image:
  src: "/images/articles/2026/10/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles.webp"
  alt: "Canapés et lits usagés photographiés parmi des encombrants en Allemagne en octobre 2017, illustration du sujet sans montrer le service de Limoges Métropole."
sources:
  - title: Limoges Métropole - Réserver l'enlèvement des encombrants et objets acceptés
    url: https://encombrants.limoges-metropole.fr/accueil
  - title: Limoges Métropole - Les collectes et le calendrier 2026
    url: https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/collecte-des-dechets-limoges-metropole
  - title: Ville de Limoges - Collecte et gestion des déchets
    url: https://www.limoges.fr/pratique/collecte-et-gestion-des-dechets
  - title: Limoges Métropole - Déchèteries et carte d'accès
    url: https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/espace-decheteries
  - title: Limoges Métropole - Réemploi et réparation d'objets
    url: https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/reduire-ses-dechets/reemploi-et-reparation-dobjets
  - title: Mairie de Saint-Just-le-Martel - Collecte des encombrants
    url: https://saintjustlemartel.fr/collecte-des-encombrants/
affiliate:
  enabled: true
  type: travel
  destination: Limoges
---
<!-- article-image-credit -->
*Photo: [HendrixHammer](https://commons.wikimedia.org/wiki/File:Sperrm%C3%BCll_mit_Sofas_und_Betten.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Un canapé qui ne passe plus dans le salon, un lit d'enfant devenu trop petit ou un réfrigérateur à remplacer: à **Limoges**, en Haute-Vienne, il existe plusieurs façons de se séparer de ces objets volumineux. **Limoges Métropole** propose notamment un enlèvement d'encombrants sur rendez-vous et l'accès à onze déchèteries. Mais le bon choix dépend d'abord de l'état de l'objet et de votre possibilité de le transporter.

## Un meuble encore utilisable ? Chercher d'abord une seconde vie

Une commode solide, une table ou un meuble d'enfant propre et en état peuvent intéresser une autre famille. Le don entre particuliers, une association ou une ressourcerie évitent de traiter comme déchet un objet qui peut encore servir. Pour un meuble volumineux, précisez ses dimensions et indiquez si la personne qui le récupère doit venir avec un véhicule et de l'aide pour le porter.

Limoges Métropole recense des **associations de réemploi** et des espaces dédiés dans plusieurs déchèteries: **Kennedy, Lebon et Le Cavou à Limoges**, ainsi que **Couzeix et Panazol**. Les objets déposés dans ces espaces sont orientés vers des associations partenaires. Consultez la [page officielle sur le réemploi et les lieux concernés](https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/reduire-ses-dechets/reemploi-et-reparation-dobjets) avant de charger la voiture: tous les objets ne conviennent pas forcément à un don et les modalités peuvent évoluer.

Si vous achetez un meuble ou un appareil neuf, renseignez-vous aussi sur la **reprise de l'ancien par le vendeur**. Elle peut éviter un trajet supplémentaire, surtout pour un matelas ou un gros électroménager. La [plateforme d'enlèvement de Limoges Métropole](https://encombrants.limoges-metropole.fr/accueil) présente cette reprise parmi les solutions alternatives au ramassage public.

## Sans véhicule: réserver l'enlèvement des encombrants

Pour un objet qui ne peut pas être donné et que vous ne pouvez pas transporter, la métropole dispose d'une [plateforme officielle de réservation](https://encombrants.limoges-metropole.fr/accueil). Elle s'adresse aux particuliers. **La collecte n'est pas un ramassage libre à n'importe quel moment**: il faut choisir un créneau disponible pour son adresse et enregistrer sa demande.

Les règles essentielles sont les suivantes:

- **Trois encombrants maximum par rendez-vous**, dans la limite de **deux rendez-vous par an et par adresse**.
- **80 kg maximum par pièce** et un **volume total limité à 2 m³**; l'objet doit pouvoir être chargé dans le camion.
- Le point de collecte doit être **accessible à un poids lourd**.
- Les objets sont à placer **sur le domaine public la veille du rendez-vous**, avec une **affichette indiquant le numéro d'enregistrement** reçu après validation.

Un canapé, un matelas, une armoire ou un gros appareil électroménager figurent parmi les exemples admis. Attention au décompte: un gros meuble compte comme un encombrant, mais **un lot d'une à quatre chaises** peut aussi compter comme un seul. La [liste détaillée des objets acceptés et refusés](https://encombrants.limoges-metropole.fr/accueil) permet de préparer la demande sans se tromper.

**Point important si vous vivez en étage:** ce service ne vient pas chercher le meuble dans l'appartement. Il faut pouvoir le descendre et le présenter à l'endroit indiqué. Si cela vous est impossible, mieux vaut organiser une aide au portage ou rechercher une solution de reprise avec enlèvement à l'intérieur du logement avant de réserver.

### Quel jour le camion passe-t-il ?

Les dates dépendent **de la commune et, à Limoges, du quartier**. La [page des collectes de Limoges Métropole](https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/collecte-des-dechets-limoges-metropole) donne accès au **calendrier 2026**, mais seul le créneau proposé lors de la réservation confirme les disponibilités pour votre adresse.

La [Ville de Limoges](https://www.limoges.fr/pratique/collecte-et-gestion-des-dechets) indique de faire la demande **au moins 72 heures avant** la collecte souhaitée. Dans certaines communes, le calendrier est particulièrement espacé: à [Saint-Just-le-Martel](https://saintjustlemartel.fr/collecte-des-encombrants/), la mairie annonce deux collectes par an, les deuxièmes mardis de mars et de septembre. Ne sortez donc pas vos meubles sur le trottoir sans rendez-vous confirmé.

En cas de difficulté avec le formulaire ou si votre rue n'apparaît pas, la Direction de la prévention et de la gestion des déchets répond au **05 55 45 79 30**, du lundi au vendredi de **8h30 à 12h30 et de 13h30 à 17h**, selon les indications de la plateforme.

## Avec un véhicule: choisir la bonne déchèterie

<!-- article-image-body:01 -->

![Entrée de la déchèterie d'Ampus dans le Var en septembre 2026, photographie illustrative ne montrant pas une déchèterie de Limoges.](/images/articles/2026/10/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles-body-01.webp)

*Photo: [Sebleouf](https://commons.wikimedia.org/wiki/File:Ampus_-_D%C3%A9ch%C3%A8terie_(sept_2026).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les **onze déchèteries communautaires** reçoivent notamment du mobilier, de la literie, des cartons à plat et des objets encombrants. Elles acceptent aussi plusieurs déchets **refusés par la collecte à domicile**, comme les gravats, à condition de respecter les règles de tri et les limites applicables.

Il faut une **carte d'accès**. Lors du premier apport, un habitant de Limoges Métropole peut en faire la demande directement en déchèterie avec **une pièce d'identité et un justificatif de domicile de moins de trois mois**. Le formulaire peut être préparé à l'avance. La [liste des onze sites, leurs horaires et les déchets acceptés](https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/espace-decheteries) est publiée par la métropole.

À Limoges même, les sites **Lebon** (rue Philippe Lebon), **Kennedy** (70 avenue du Président John Kennedy) et **Le Cavou** (rue de Cavou, à Landouge) permettent de déposer des déchets volumineux. Vérifiez les horaires du site choisi: ils varient selon les jours et changent en période estivale ou de vigilance canicule.

Si vous n'avez pas de voiture, **ne louez pas automatiquement un utilitaire** pour un seul objet. Une reprise par le commerçant, un don récupéré à domicile ou un rendez-vous d'enlèvement public peuvent être plus simples. Pour plusieurs meubles à transporter le même jour, vous pouvez [comparer les utilitaires proposés à Limoges sur KAYAK](https://www.kayak.fr/Limoges-Locations-de-Fourgonnette.5833.cvn.ksp) avant de réserver. Vérifiez le volume utile, le kilométrage compris, l'aide nécessaire pour charger et le coût total.

## Ce qui ne doit pas partir avec les encombrants

La collecte sur rendez-vous ne prend pas les **gravats, déchets verts, pneus, peintures, huiles, bonbonnes de gaz, batteries, pièces automobiles ou déchets professionnels**. Certains relèvent d'une filière spécifique en déchèterie; d'autres exigent une prise en charge particulière. Le bon réflexe est de consulter la [liste officielle des exclusions](https://encombrants.limoges-metropole.fr/accueil), puis les [consignes de la déchèterie](https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/espace-decheteries) avant tout déplacement.

Enfin, déposer un meuble sans autorisation sur la voie publique, même près des poubelles, **n'équivaut pas à une demande d'enlèvement**. La métropole rappelle que les dépôts sauvages sont sanctionnables. Un créneau réservé, un don organisé ou un apport dans la bonne filière évitent de laisser un objet sur le trottoir sans solution.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/maison/canape-matelas-ou-electromenager-a-dijon-donner-faire-enlever-ou-aller-en-dechetterie/ | Canapé, matelas ou électroménager à Dijon: donner, faire enlever ou aller en déchetterie ? | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/vie-pratique/trouver-un-mode-de-garde-a-limoges-par-ou-commencer/ | Trouver un mode de garde à Limoges: par où commencer | vie-pratique | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/sorties/safari-ville-limoges-enfants-2026/ | Safari en ville à Limoges: l'édition 2026 pour les 4 à 6 ans est terminée | sorties | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | À Paris, où donner ou déposer meubles, jouets et électroménager ? | maison | Paris, Paris, Île-de-France
- /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | Encombrants à Bourges: quand sortir meubles et gros objets | maison | Bourges, Cher, Centre-Val de Loire
- /articles/maison/encombrants-a-bastia-ou-deposer-meubles-electromenager-et-dechets-verts/ | Encombrants à Bastia: où déposer meubles, électroménager et déchets verts | maison | Bastia, Haute-Corse, Corse
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/maison/encombrants-a-limoges-donner-faire-enlever-ou-deposer-ses-meubles/ | Encombrants à Limoges: donner, faire enlever ou déposer ses meubles | maison | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/maison/materiaux-de-reemploi-dans-le-finistere-ou-acheter-a-brest-et-quimper/ | Matériaux de réemploi dans le Finistère: où acheter à Brest et Quimper ? | maison | Finistère, Bretagne
- /articles/maison/renover-ou-amenager-sa-maison-dans-le-doubs-qui-peut-vous-conseiller-gratuitement/ | Rénover ou aménager sa maison dans le Doubs: qui peut vous conseiller gratuitement ? | maison | Doubs, Bourgogne-Franche-Comté
- /articles/maison/maison-trop-chaude-dans-le-gard-garder-les-chambres-des-enfants-plus-fraiches/ | Maison trop chaude dans le Gard: garder les chambres des enfants plus fraîches | maison | Gard, Occitanie
- /articles/maison/electromenager-en-panne-a-dijon-reparer-ou-acheter-reconditionne/ | Électroménager en panne à Dijon: réparer ou acheter reconditionné | maison | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/maison/saison-des-pluies-a-mayotte-preparer-sa-maison-en-famille/ | Saison des pluies à Mayotte: préparer sa maison en famille | maison | Mayotte, Mayotte
- /articles/maison/composter-en-martinique-demarrer-au-jardin-ou-en-residence/ | Composter en Martinique: démarrer au jardin ou en résidence | maison | Martinique
- /articles/maison/logement-mal-isole-dans-le-vaucluse-comment-gagner-en-confort-ete-comme-hiver/ | Logement mal isolé dans le Vaucluse: comment gagner en confort été comme hiver ? | maison | Vaucluse, Provence-Alpes-Côte d’Azur
- /articles/maison/humidite-et-moisissures-en-hiver-dans-le-haut-rhin-que-faire-et-qui-contacter/ | Humidité et moisissures en hiver dans le Haut-Rhin: que faire et qui contacter ? | maison | Haut-Rhin, Grand Est
- /articles/maison/materiautheques-en-bretagne-preparer-son-projet-et-acheter-les-bons-materiaux/ | Matériauthèques en Bretagne: préparer son projet et acheter les bons matériaux | maison | Bretagne
- /articles/maison/reparer-ses-objets-dans-l-herault-repair-cafes-et-bonus-reparation/ | Réparer ses objets dans l’Hérault: Repair Cafés et bonus réparation | maison | Hérault, Occitanie
- /articles/maison/chaleur-a-mayotte-comment-rendre-son-logement-plus-confortable/ | Chaleur à Mayotte: comment rendre son logement plus confortable | maison | Mayotte
- /articles/maison/dechets-alimentaires-a-orleans-metropole-s-organiser-avec-ou-sans-jardin/ | Déchets alimentaires à Orléans Métropole: s’organiser avec ou sans jardin | maison | Loiret, Centre-Val de Loire
- /articles/maison/fissures-et-secheresse-en-dordogne-proteger-sa-maison-et-demander-l-aide-argile/ | Fissures et sécheresse en Dordogne: protéger sa maison et demander l’aide argile | maison | Dordogne, Nouvelle-Aquitaine

### Historique Radar lié

- refresh | /articles/maison/a-paris-ou-donner-ou-deposer-meubles-jouets-et-electromenager/ | 2026-11-08T00:30:04.157Z
- refresh | /articles/maison/encombrants-a-bourges-quand-sortir-meubles-et-gros-objets/ | 2026-10-03T03:24:30.315Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
