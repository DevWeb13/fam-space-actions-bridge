# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
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
  src: /images/articles/2026/09/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants.webp
  alt: Château d'Harcourt dans l'Eure en Normandie
radar:
  schemaVersion: 1
  phase: 1
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
---

## Mission retenue
Actualiser l'article existant consacré à **Arbora Lumina**, parcours nocturne lumineux du Domaine d'Harcourt (Eure), dont la nouvelle saison commence le **13 novembre 2026**.

## Pourquoi cette mission
Le snapshot GSC indique **143 puis 17 impressions** sur les périodes comparées, mais le signal est **uncertain** et aucune requête comparable ne permet d'attribuer la baisse au classement. La justification principale est éditoriale: l'article de septembre ne présente pas encore les informations de la billetterie ouverte et de la nouvelle page dédiée, indispensables pour une réservation familiale. Ce refresh apporte une décision concrète avant le début de saison. L'expansion envisagée autour de la page forte Futuroween serait proche du guide Halloween déjà publié; l'opportunité des Automnales d'Harcourt des 17 et 18 octobre est déjà couverte par une page récente, distincte de la visite nocturne. Pas de nouvelle page redondante.

## Décision du lecteur
Savoir si la sortie convient à sa famille, à ses contraintes de déplacement et à son budget, puis sélectionner et préparer une séance sans erreur de réservation.

## Faits à traiter
- Billetterie de la saison ouverte, **uniquement en ligne**; horaires et disponibilités à vérifier sur les créneaux réellement proposés. Arriver **15 minutes avant** l'heure du billet; admission non garantie en cas de retard. Billets non échangeables et non remboursables selon la FAQ.
- La nouvelle page Arbora Lumina annonce **9 zones**, **1,2 km** et environ **45 minutes**; la page classique/FAQ indique encore environ **1 km** et **45 à 60 minutes**. Signaler cette différence sobrement plutôt que promettre une longueur ou une durée exacte.
- Vérifier les **prix affichés pour chaque date**, car la page classique distingue haute saison (décembre et vacances) et basse saison (janvier); la FAQ affiche encore 16 € adulte, 12 € adulte réduit, 8 € de 6 à 17 ans, gratuit avant 6 ans et pass famille à 40 €. Ne pas supposer que tous les prix sont identiques à tous les créneaux.
- Parcours extérieur adapté à tous les âges, mais effets stroboscopiques et brouillard; chemins irréguliers et étroits. Pour le parcours nocturne, l'organisateur **conseille un porte-bébé ou une écharpe** plutôt qu'une poussette, sans annoncer d'interdiction générale. Accessibilité PMR difficile, sans promettre une impossibilité absolue.
- Conserver les informations encore pertinentes: parking gratuit rue de la Gare, toilettes et restauration, vêtements chauds et chaussures adaptées, interdiction des chiens sauf chiens d'assistance, prudence sur le retour en bus NOMAD 214 et fermeture de l'intérieur du château. Préserver intégralement la photographie et son crédit, ainsi que les liens pratiques non commerciaux utiles.

## Sources de départ
- https://arboralumina.harcourt-normandie.fr/
- https://www.harcourt-normandie.fr/les-incontournables/arbora-lumina/
- https://www.harcourt-normandie.fr/faq/

## Affiliation
Vérifier une piste d'hébergement secondaire cohérente à **Bernay**, particulièrement l'**Hotel The Originals Bernay Acropole** (https://www.booking.com/hotel/fr/acropole-bernay.fr.html), dont la fiche mentionne des chambres familiales et un parking gratuit. Ne pas présenter le tarif ou la disponibilité comme acquis et éviter tout lien officiel d'achat ou de réservation de la même prestation dans le corps; les URLs officielles peuvent rester dans les Sources.

## Continuations internes
- Lier, si utile, **[les Automnales d'Harcourt 2026](/articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/)** pour distinguer la fête diurne des **17-18 octobre** et la promenade nocturne **à partir du 13 novembre**; ne pas recopier le programme des Automnales.
- Garder l'angle pratique centré sur l'expérience Arbora Lumina, sans redévelopper l'histoire générale du Domaine.

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
- /articles/activites/chateau-de-maintenon-avec-de-jeunes-enfants-ce-qu-il-faut-prevoir/ | Château de Maintenon avec de jeunes enfants: ce qu'il faut prévoir | activites | Maintenon, Eure-et-Loir, Centre-Val de Loire
- /articles/voyages/lyons-la-foret-avec-des-enfants-journee-ou-week-end-dans-le-village-et-la-foret/ | Lyons-la-Forêt avec des enfants: journée ou week-end dans le village et la forêt? | voyages | Lyons-la-Forêt, Eure, Normandie
- /articles/activites/samara-avec-des-enfants-faut-il-prevoir-la-journee-complete/ | Samara avec des enfants: faut-il prévoir la journée complète? | activites | La Chaussée-Tirancourt, Somme, Hauts-de-France
- /articles/cuisine/fabrique-de-pain-d-epices-a-dijon-faut-il-reserver-et-combien-prevoir-avec-des-enfants/ | Fabrique de pain d'épices à Dijon: faut-il réserver et combien prévoir avec des enfants? | cuisine | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/gastronomades-2026-a-angouleme-en-famille-faut-il-prevoir-le-week-end/ | Gastronomades 2026 à Angoulême en famille: faut-il prévoir le week-end ? | evenements | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/zoo-de-labenne-avec-des-enfants-quelle-duree-prevoir-et-quel-billet-choisir/ | Zoo de Labenne avec des enfants: quelle durée prévoir et quel billet choisir ? | sorties | Labenne, Landes, Nouvelle-Aquitaine
- /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | Arbora Lumina à Harcourt: ce qu'il faut prévoir avec des enfants | evenements | Harcourt, Eure, Normandie
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
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
