# Radar Fam Space - Phase 3/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 3/3

Tu es secrétaire de rédaction et fact-checker final. Ta mission principale est l'anti-régression, pas de réécrire l'article une deuxième fois.

Pour un refresh, compare l'article source exact et le candidat de phase 2 fournis intégralement plus bas. Le candidat final doit rester autonome et actuel. Pour chaque information présente avant et absente après, décide explicitement: toujours vraie et utile -> restaure-la; périmée ou fausse -> laisse-la supprimée; réellement redondante ou sans valeur -> suppression acceptable.

Accorde une attention particulière aux prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques familiaux.

Ensuite:
- lis l'article du début à la fin comme un lecteur sur téléphone et vérifie que l'introduction, les sections et la fin ne répètent pas la même information; supprime les conseils évidents, paraphrases de sources, sections sans information nouvelle et toute conclusion qui ne ferait que résumer;
- vérifie que l'angle sert l'article sans devenir l'article entier: une micro-question utile ne doit pas être répétée pendant toute la page, et le titre final doit décrire le sujet plutôt que recopier mécaniquement la décision de phase 1;
- vérifie que les modifications répondent au diagnostic et à la décision de phase 1;
- revérifie les faits déterminants auprès des sources officielles. Une affirmation attribuée à une source doit respecter exactement son niveau de certitude: ne transforme jamais « peut constituer un frein » en « déconseille », ni une possibilité en obligation ou interdiction;
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; vérifie qu'aucun lien officiel du corps ne mène, même indirectement depuis une page informative, à l'achat ou à la réservation de la même prestation sur le site officiel; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
- contrôle les liens internes et les routes. Garde ceux qui prolongent réellement la lecture et, lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, raccourcis le passage au contexte nécessaire puis oriente naturellement le lecteur vers elle;
- vérifie `reviewAt` / `eventEndsAt` lorsqu'un contenu temporaire existe;
- ne force ni longueur ni affiliation.

Pour une opportunity, revérifie doublons, chevauchement avec les pages proches, catégorie, territoire, sources, cycle de vie et utilité. Un angle distinct ne justifie pas de recopier les parties générales déjà couvertes ailleurs. Le slug technique reste géré mécaniquement.

Soumets le résultat final avec `action: advance`, le frontmatter éditorial utile, le corps complet et un bloc `radarReview`:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow GitHub crée le commit de phase 3, retrouve le HEAD réel et lance directement le processeur final.

## Règles partenaires

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

## Candidat validé de la phase précédente

---
title: "Encombrants à Limoges: donner, faire enlever ou déposer ses meubles"
subtitle: "Canapé, matelas, meuble d'enfant ou électroménager: les solutions de Limoges Métropole, avec ou sans véhicule"
summary: À Limoges et dans les 19 autres communes de la métropole, découvrez comment donner un meuble, réserver gratuitement une collecte adaptée à votre adresse ou accéder aux déchèteries.
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
  phase: 2
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

<!-- article-image-credit -->
*Photo: [HendrixHammer](https://commons.wikimedia.org/wiki/File:Sperrm%C3%BCll_mit_Sofas_und_Betten.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Un canapé qui ne passe plus dans le salon, un lit d'enfant devenu trop petit ou un réfrigérateur à remplacer: à **Limoges**, en Haute-Vienne, plusieurs solutions existent pour se séparer d'objets volumineux. **Limoges Métropole** propose notamment un **enlèvement gratuit des encombrants pour les particuliers qui ne peuvent pas se rendre en déchèterie**. Mais le calendrier dépend de l'adresse: rendez-vous selon les créneaux du quartier à Limoges, collecte semestrielle dans les 19 autres communes. Avant de sortir un meuble, il faut impérativement inscrire sa demande.

## Un meuble encore utilisable ? Chercher d'abord une seconde vie

Une commode solide, une table ou un meuble d'enfant propre et en état peuvent intéresser une autre famille. Le don entre particuliers, une association ou une ressourcerie évitent de traiter comme déchet un objet qui peut encore servir. Pour un meuble volumineux, précisez ses dimensions et indiquez si la personne qui le récupère doit venir avec un véhicule et de l'aide pour le porter.

Limoges Métropole recense des **associations de réemploi** et des espaces dédiés dans plusieurs déchèteries: **Kennedy, Lebon et Le Cavou à Limoges**, ainsi que **Couzeix et Panazol**. Les objets déposés dans ces espaces sont orientés vers des associations partenaires. Consultez la [page officielle sur le réemploi et les lieux concernés](https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/reduire-ses-dechets/reemploi-et-reparation-dobjets) avant de charger la voiture: tous les objets ne conviennent pas forcément à un don et les modalités peuvent évoluer.

Si vous achetez un meuble ou un appareil neuf, renseignez-vous aussi sur la **reprise de l'ancien par le vendeur**. Elle peut éviter un trajet supplémentaire, surtout pour un matelas ou un gros électroménager. La [plateforme d'enlèvement de Limoges Métropole](https://encombrants.limoges-metropole.fr/accueil) présente cette reprise parmi les solutions alternatives au ramassage public.

## Sans véhicule: quel enlèvement est prévu à votre adresse ?

La [collecte gratuite à domicile de Limoges Métropole](https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/collecte-des-dechets-limoges-metropole) s'adresse aux particuliers ne pouvant se rendre en déchèterie. **Elle n'a pas le même calendrier partout**:

- **Dans la ville de Limoges:** les habitants peuvent demander un rendez-vous selon leur quartier et les créneaux disponibles. Certains secteurs disposent de modalités spécifiques, notamment les quartiers prioritaires; ne supposez pas que tous les quartiers sont collectés les mêmes jours. La réservation peut passer par la [plateforme officielle](https://encombrants.limoges-metropole.fr/accueil) ou une mairie annexe.
- **Dans les 19 autres communes de Limoges Métropole:** la collecte est **semestrielle**, à des dates fixées par le planning annuel. Il faut s'inscrire pour la date prévue, sur la plateforme ou par téléphone auprès de la mairie. Ce n'est pas un enlèvement immédiat à la date de son choix.
- **Pour certaines adresses particulières de Limoges:** des collectes spécifiques peuvent s'appliquer. Vérifiez le dispositif correspondant à votre rue plutôt que de déduire le calendrier de celui d'un quartier voisin.

Dans tous les cas, **inscrivez-vous au moins 72 heures avant la date de collecte**. Le [calendrier officiel 2026](https://www.limoges-metropole.fr/services/gestion-des-dechets-nos-missions/collecte-des-dechets-limoges-metropole) aide à repérer les dates, mais **seule la confirmation de votre demande** autorise à préparer le dépôt. À [Saint-Just-le-Martel](https://saintjustlemartel.fr/collecte-des-encombrants/), par exemple, la mairie annonce des collectes les deuxièmes mardis de mars et de septembre: un calendrier communal ne doit pas être généralisé aux autres adresses.

### Réserver et préparer les objets sans refus

Sur la [plateforme de réservation](https://encombrants.limoges-metropole.fr/accueil), indiquez votre commune et votre rue, consultez les disponibilités correspondant à votre adresse, puis validez votre demande. La confirmation communique un **numéro d'enregistrement** à afficher sur les objets.

Les limites à respecter sont les suivantes:

- **Trois encombrants maximum par rendez-vous**, dans la limite de **deux rendez-vous par an et par adresse**.
- **80 kg maximum par pièce** et un **volume total limité à 2 m³**; les objets doivent pouvoir être chargés dans le camion.
- Le point de collecte doit être **accessible à un poids lourd**.
- Les objets sont à placer **sur le domaine public la veille du rendez-vous confirmé**, avec une **affichette portant le numéro d'enregistrement**.

Un canapé, un matelas, une armoire ou un gros appareil électroménager figurent parmi les exemples admis. Attention au décompte: un gros meuble compte comme un encombrant, mais **un lot d'une à quatre chaises** peut aussi compter comme un seul. La [liste détaillée des objets acceptés et refusés](https://encombrants.limoges-metropole.fr/accueil) permet de préparer la demande.

**Si vous vivez en étage**, le service ne descend pas le meuble de l'appartement. Prévoyez de l'aide pour le porter jusqu'au point de collecte ou recherchez une reprise avec enlèvement à l'intérieur du logement.

Si votre rue n'apparaît pas ou si vous hésitez sur le calendrier, contactez la Direction de la prévention et de la gestion des déchets au **05 55 45 79 30**, du lundi au vendredi de **8h30 à 12h30 et de 13h30 à 17h**, selon les indications de la plateforme. **Ne laissez pas d'objet sur le trottoir sans demande confirmée.**

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

Déposer un meuble sans autorisation sur la voie publique, même près des poubelles, **n'équivaut pas à une demande d'enlèvement**. La métropole rappelle que les dépôts sauvages sont sanctionnables. Un créneau confirmé, un don organisé ou un apport dans la bonne filière évitent de laisser un objet sur le trottoir sans solution.

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
