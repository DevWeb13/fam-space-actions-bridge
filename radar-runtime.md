# Radar Fam Space - Phase 3/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

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
- pour un refresh, `substantialChanges`: au moins deux changements substantiels;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau.

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
title: "Arbora Lumina 2026-2027 à Harcourt en famille: billets, tarifs et parcours"
subtitle: Du 13 novembre au 28 février, une promenade nocturne de neuf zones à préparer avant de réserver
summary: "Arbora Lumina revient à Harcourt du 13 novembre 2026 au 28 février 2027: prix des billets, durée, âge, poussette, arrivée 15 minutes avant et accès en famille."
slug: arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants
status: published
publishedAt: 2026-09-15T19:00:19+02:00
updatedAt: 2026-09-15T22:31:18+02:00
category: evenements
readingTime: 4
location:
  city: Harcourt
  department: Eure
  region: Normandie
topic:
  key: evenements|harcourt|arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants|2026
  keywords:
    - Arbora Lumina Harcourt
    - sortie famille Eure
image:
  src: /images/articles/2026/09/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants.webp
  alt: Château d'Harcourt dans l'Eure en Normandie
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(09)/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/index.md
  targetSha: d1f0d0e1b408e241b67efd1a8b232c4d15bd3e26
  targetUrl: /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/
  decision: Déterminer si la promenade nocturne Arbora Lumina convient à l'âge et à la mobilité des enfants, calculer le budget exact selon la séance et réserver le bon créneau sans se présenter trop tard.
  affiliationPotential: Billets Arbora Lumina vendus exclusivement par la billetterie de l'organisateur; aucun équivalent identifié chez GetYourGuide, Tiqets ou Klook, donc ne pas proposer de lien officiel de vente dans le corps. Pour les familles qui prolongent la sortie en séjour, vérifier l'Hotel The Originals Bernay Acropole sur Booking.com (chambres familiales et parking gratuit affichés); ne présumer ni disponibilité ni tarif aux dates du parcours.
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: uncertain
    basis: Baisse non attribuable au classement; 0 requêtes comparables.
    peakStart: 2026-09-18
    peakEnd: 2026-09-24
    recentStart: 2026-10-07
    recentEnd: 2026-10-13
    peakImpressions: 143
    recentImpressions: 17
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - arbora lumina
      - arbora lumina horaire
      - arbora lumina harcourt tarif
      - arbora lumina harcourt
eventEndsAt: 2027-02-28
sources:
  - title: Département de l'Eure - Arbora Lumina 2026-2027 et dates de la saison
    url: https://eureennormandie.fr/actualite/arbora-lumina-2026-2027/
  - title: Arbora Lumina - Site officiel du parcours
    url: https://arboralumina.harcourt-normandie.fr/
  - title: Domaine d'Harcourt - Arbora Lumina, informations pratiques
    url: https://www.harcourt-normandie.fr/les-incontournables/arbora-lumina/
  - title: Domaine d'Harcourt - FAQ, billets et accessibilité
    url: https://www.harcourt-normandie.fr/faq/
affiliate:
  enabled: true
  type: travel
  destination: Harcourt
---

<!-- article-image-credit -->
*Photo: [Jacky Delville](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Harcourt.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

**Arbora Lumina** revient au **Domaine d'Harcourt, dans l'Eure, du 13 novembre 2026 au 28 février 2027**. Le château et l'arboretum accueillent une promenade nocturne de lumières, de projections vidéo et de musique, imaginée par Moment Factory. Ce parcours familial est ouvert à tous les âges, mais se déroule **dehors, dans la forêt, sur des chemins parfois irréguliers**. Les billets sont déjà en vente **uniquement en ligne**.

## Billets et tarifs: choisir le bon créneau

La FAQ du Domaine affiche les tarifs suivants pour Arbora Lumina:

- **16 € par adulte**;
- **12 € au tarif adulte réduit**, avec justificatif (notamment étudiants, demandeurs d'emploi, familles nombreuses, personnes en situation de handicap et tarif bas carbone);
- **8 € de 6 à 17 ans**;
- **gratuit pour les moins de 6 ans**;
- **40 € le pass famille pour deux adultes et deux enfants**.

À titre d'exemple, deux adultes et deux enfants de 6 à 17 ans représentent **48 € en billets individuels**, contre **40 € avec le pass famille**, sous réserve de son application au créneau choisi. Le Domaine distingue une **haute saison en décembre et pendant les vacances scolaires de décembre et février**, et une **basse saison en janvier**. Vérifiez donc **le prix final, la formule familiale et les places disponibles pour la date précise** avant de payer; la grille de FAQ ne garantit pas un prix identique à toutes les séances.

La **réservation en ligne est obligatoire**: il n'est pas possible d'acheter des billets à l'entrée. La date d'un billet acheté n'est pas modifiable et les billets ne sont, selon les conditions annoncées, **ni annulables ni remboursables**. Les créneaux sont fixés par la billetterie et peuvent se remplir; ne partez pas sans réservation confirmée. Le **QR code reçu par e-mail peut être présenté sur un téléphone**, sans impression obligatoire.

**Présentez-vous 15 minutes avant l'heure inscrite sur le billet**, comme le demande l'organisateur, pour l'enregistrement. En cas de retard, l'entrée n'est pas garantie et il peut être nécessaire d'attendre un créneau ultérieur.

## Neuf zones lumineuses: combien de temps prévoir?

Le nouveau site Arbora Lumina annonce **neuf zones narratives sur environ 1,2 km**, avec une expérience d'environ **45 minutes**. La page pratique du Domaine mentionne encore **environ 1 km et une heure**; sa FAQ indique **45 à 60 minutes** selon le rythme de marche. Pour une famille, comptez donc **45 minutes à une heure pour le parcours**, en plus du stationnement et de l'enregistrement.

Les visiteurs traversent l'arboretum et les abords du château à leur rythme, entre projections sur les arbres et les pierres, sons et décors lumineux. Les effets lumineux **peuvent clignoter ou être stroboscopiques**, et des effets de **brouillard** sont prévus. Ce point mérite d'être pris en compte avant de réserver pour un enfant ou un adulte sensible à ces effets.

## Jeunes enfants, poussettes et mobilité réduite

Il n'y a **pas d'âge minimum annoncé**: l'organisateur présente Arbora Lumina comme une sortie familiale accessible même aux plus jeunes. En revanche, une grande partie de la promenade se déroule sur des **sentiers forestiers étroits, irréguliers, parfois en pente et couverts de copeaux**.

La FAQ ne prononce pas d'interdiction générale des poussettes, mais **conseille de privilégier un porte-bébé ou une écharpe de portage**, plus adaptés à ces chemins. Pour les personnes à mobilité réduite, l'organisateur indique que le parcours nocturne est **difficilement accessible**, sans itinéraire alternatif intégralement praticable. Certaines pentes dépassent 5 %, et un accompagnant peut être nécessaire sans garantir l'accès à toute l'expérience. En cas de besoin spécifique, mieux vaut contacter directement le Domaine **avant l'achat** au **02 32 46 29 70**.

Pour le confort des enfants, prévoyez des **chaussures adaptées à la terre et aux chemins naturels**, ainsi que des vêtements chauds et imperméables selon la météo. Des **sièges permettant une pause** sont annoncés sur le parcours, qui reste toutefois une promenade en extérieur.

## Se rendre à Harcourt et préparer la soirée

Le Domaine d'Harcourt se trouve **5 rue de la Gare, 27800 Harcourt**, avec un **parking visiteurs gratuit** accessible par la rue de la Gare. Le site indique environ **30 minutes de route depuis Évreux** et **moins de deux heures depuis Paris**, selon la circulation.

Sans voiture, la **ligne NOMAD 214** dessert notamment Harcourt depuis l'axe Évreux-Honfleur; la gare de **Brionne** est à environ **7 km** du Domaine. Pour un parcours nocturne, vérifiez surtout **le trajet du retour** avant de réserver, les dessertes du soir pouvant être limitées.

Des **toilettes gratuites**, des **boissons et gourmandises à acheter sur place** sont annoncées. La FAQ interdit d'apporter de la nourriture ou de l'alcool extérieurs sur le parcours, et il n'y a **pas de vestiaire**. Les chiens sont interdits pendant l'expérience nocturne, **à l'exception des chiens d'assistance**. En cas d'annulation par l'organisateur pour cause de météo, une information est prévue par e-mail et SMS.

L'**intérieur du château demeure fermé au public en raison de travaux de conservation**: Arbora Lumina est une sortie en extérieur, pas une visite des salles historiques.

## Prolonger la sortie par une nuit dans l'Eure

Pour une famille venant de loin, **[l'Hotel The Originals Bernay Acropole à Bernay](https://www.booking.com/hotel/fr/acropole-bernay.fr.html)** propose des **chambres familiales** et un **parking gratuit**. Il peut servir de point de chute plutôt que de reprendre la route tard après le parcours. Comparez les disponibilités, la capacité de la chambre et le prix correspondant à l'âge des enfants **pour la date réelle de votre visite**: aucune chambre ni aucun tarif n'est garanti à l'avance.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(09)/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/index.md

---
title: "Arbora Lumina à Harcourt: ce qu'il faut prévoir avec des enfants"
subtitle: Une promenade nocturne d'environ une heure dans l'arboretum, avec réservation en ligne obligatoire
summary: Arbora Lumina revient à Harcourt le 13 novembre 2026. Durée, réservation, parking et conseils pratiques pour préparer cette sortie nocturne.
slug: arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants
status: published
publishedAt: 2026-09-15T19:00:19+02:00
updatedAt: 2026-09-15T22:31:18+02:00
category: evenements
readingTime: 3
location:
  city: Harcourt
  department: Eure
  region: Normandie
topic:
  key: evenements|harcourt|arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants|2026
  keywords:
    - Arbora Lumina Harcourt
    - sortie famille Eure
image:
  src: "/images/articles/2026/09/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants.webp"
  alt: "Château d'Harcourt dans l'Eure en Normandie"
---
<!-- article-image-credit -->
*Photo: [Jacky Delville](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Harcourt.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Arbora Lumina revient au Domaine d'Harcourt à partir du **13 novembre 2026**. Cette promenade nocturne transforme l'arboretum et les abords du château avec des lumières, des projections vidéo, une scénographie et une musique originale. Le parcours est annoncé comme familial et dure environ une heure.

Pour une sortie avec des enfants, le point important est surtout de préparer la soirée plutôt que d'improviser sur place: la visite se déroule dehors, de nuit, et la **billetterie est uniquement en ligne**.

## Réserver avant de partir

Le Domaine d'Harcourt annonce l'ouverture de la nouvelle saison d'Arbora Lumina le 13 novembre. Les horaires précis dépendent de la programmation proposée sur la billetterie.

La réservation doit être effectuée en ligne. Autre détail à connaître avant de choisir son créneau: le Domaine précise que les billets achetés sont définitifs, sans échange ni remboursement.

[Consulter les créneaux et réserver Arbora Lumina](https://www.harcourt-normandie.fr/billetterie/)

Les tarifs annoncés sont de **16 € par adulte**, **12 € au tarif adulte réduit**, **8 € de 6 à 17 ans** et gratuit pour les moins de 6 ans. Un pass famille pour 2 adultes et 2 enfants est proposé à **40 €**.

## À quoi ressemble la visite avec des enfants?

Le parcours fait environ **1 km** et se découvre à son rythme. Il traverse le Domaine d'Harcourt à la nuit tombée, entre l'arboretum et le château, avec plusieurs séquences mêlant lumière, vidéo, décors et musique.

Le site le présente explicitement comme un parcours familial destiné aux petits comme aux grands. Comptez environ **45 à 60 minutes** pour l'expérience. Avec de jeunes enfants, prévoyez surtout des vêtements adaptés à une promenade extérieure en soirée: la saison commence en novembre et se poursuit en hiver.

Les poussettes sont autorisées, mais certains chemins sont irréguliers et peuvent compliquer leur utilisation. Le Domaine signale également des effets lumineux clignotants ou stroboscopiques ainsi que des effets de brouillard. Le parcours en forêt est difficilement accessible aux personnes à mobilité réduite, avec notamment des cheminements irréguliers, étroits et parfois en pente.

La restauration sur place est annoncée pendant Arbora Lumina, tout comme des toilettes. Les chiens ne sont pas autorisés sur ce parcours nocturne.

## Venir en voiture est simple

Le Domaine d'Harcourt dispose d'un **parking gratuit** à l'entrée. Il se trouve à environ 30 minutes d'Évreux et à moins de deux heures de Paris en voiture selon les indications du site.

[Consulter les informations pratiques du Domaine d'Harcourt](https://www.harcourt-normandie.fr/les-incontournables/arbora-lumina/)

Il est également possible de rejoindre Harcourt par les transports en commun. La ligne Nomad 214 relie notamment Honfleur et Évreux et dessert Harcourt. Si vous envisagez cette solution pour une visite nocturne, vérifiez impérativement les horaires du retour avant de réserver votre créneau.

## Faut-il prévoir autre chose sur place?

Pour Arbora Lumina, le plus utile est de garder la visite simple: arrivez suffisamment tôt pour rejoindre l'entrée sans stress, choisissez des chaussures adaptées à une promenade extérieure et habillez les enfants pour la météo réelle du soir.

Le parcours constitue à lui seul la sortie. Le site indique actuellement que l'intérieur du château est fermé au public en raison de travaux de conservation. Ne comptez donc pas sur une visite intérieure du château pour compléter automatiquement la soirée.

Pour vérifier une modification pratique avant le départ, la [page officielle d'Arbora Lumina](https://www.harcourt-normandie.fr/les-incontournables/arbora-lumina/) centralise les informations de la saison. Le Domaine peut aussi être joint au [02 32 46 29 70](tel:+33232462970).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/activites/musee-de-la-biere-a-stenay-en-famille-parcours-enfants-et-exposition-2026/ | Musée de la Bière à Stenay en famille: parcours enfants et exposition 2026 | activites | Stenay, Meuse, Grand Est
- /articles/sorties/chateau-de-vincennes-en-famille-tarifs-parcours-et-conseils-de-visite/ | Château de Vincennes en famille: tarifs, parcours et conseils de visite | sorties | Vincennes, Val-de-Marne, Île-de-France
- /articles/sorties/cite-des-climats-a-beaune-en-famille-tarifs-parcours-enfants-et-billets/ | Cité des Climats à Beaune en famille: tarifs, parcours enfants et billets | sorties | Beaune, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/sorties/reserve-de-la-haute-touche-en-famille-tarifs-parcours-et-conseils-pour-la-visite/ | Réserve de la Haute-Touche en famille: tarifs, parcours et conseils pour la visite | sorties | Azay-le-Ferron, Indre, Centre-Val de Loire
- /articles/activites/balade-a-velo-autour-de-rennes-quel-parcours-choisir-avec-des-enfants/ | Balade à vélo autour de Rennes: quel parcours choisir avec des enfants? | activites | Rennes, Ille-et-Vilaine, Bretagne
- /articles/sorties/forteresse-de-salses-en-famille-ce-que-change-le-nouveau-parcours/ | Forteresse de Salses en famille: ce que change le nouveau parcours | sorties | Salses-le-Château, Pyrénées-Orientales, Occitanie
- /articles/parentalite/visiter-le-chateau-de-versailles-avec-un-bebe-poussette-billets-et-parcours/ | Visiter le château de Versailles avec un bébé: poussette, billets et parcours | parentalite | Versailles, Yvelines, Île-de-France
- /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | Arbora Lumina à Harcourt: ce qu'il faut prévoir avec des enfants | evenements | Harcourt, Eure, Normandie
- /articles/voyages/lyons-la-foret-avec-des-enfants-journee-ou-week-end-dans-le-village-et-la-foret/ | Lyons-la-Forêt avec des enfants: journée ou week-end dans le village et la forêt? | voyages | Lyons-la-Forêt, Eure, Normandie
- /articles/sorties/giverny-en-famille-visiter-la-maison-de-monet-et-le-musee-des-impressionnismes/ | Giverny en famille: visiter la maison de Monet et le musée des impressionnismes | sorties | Giverny, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z
- opportunity | /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | 2026-10-15T12:38:21.556Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
