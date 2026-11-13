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
title: "Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille"
subtitle: "Du 28 novembre au 3 janvier: parcours de Noël, horaires, soirées spéciales et budget avec des enfants"
summary: "Les décors de Noël 2026 de Chenonceau se visitent du 28 novembre au 3 janvier. Horaires de jour, nocturnes annoncées les 23 et 30 décembre, billets, tarifs famille et animations sur réservation: les points à vérifier avant de venir."
category: evenements
location:
  city: Chenonceaux
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: /images/articles/2026/10/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille.webp
  alt: Château de Chenonceau au-dessus du Cher, photographié hors décorations de Noël
sources:
  - title: Commune de Chenonceaux - Noëls et traditions du monde 2026
    url: https://www.intramuros.org/chenonceaux/agenda/819144
  - title: Château de Chenonceau - horaires de billetterie
    url: https://www.chenonceau.com/infos-pratiques/horaires/
  - title: Château de Chenonceau - tarifs 2026
    url: https://www.chenonceau.com/infos-pratiques/tarifs/
  - title: Touraine Val de Loire - programme Noël au pays des châteaux 2026
    url: https://www.tourainevaldeloire.com/agenda/temps-forts/noel-au-pays-des-chateaux/
  - title: Château de Chenonceau - masterclass d'art floral
    url: https://www.chenonceau.com/agenda/masterclass-art-floral/
  - title: Château de Chenonceau - services pour les familles
    url: https://www.chenonceau.com/infos-pratiques/services/
  - title: Château de Chenonceau - billetterie et validité des billets
    url: https://chateaudechenonceau.tickeasy.com/fr-FR/accueil
eventEndsAt: 2027-01-03T23:59:00+01:00
topic:
  key: evenements|chenonceaux|noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille|2026
  keywords:
    - Noël Chenonceau 2026
    - Noëls et traditions du monde Chenonceau
    - nocturne château de Chenonceau décembre 2026
    - château Chenonceau Noël tarifs enfants
    - horaires château Chenonceau décembre 2026
slug: noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille
status: published
publishedAt: 2026-10-24T12:31:27.718Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chenonceaux
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/index.md
  targetSha: 1584c309795832d433ab4bc7744640bb480f6e42
  targetUrl: /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/
  decision: Choisir entre visite libre, nocturne et visite guidée de Noël à Chenonceau avec les tarifs exacts et les conditions de réservation.
  affiliationPotential: Conserver le billet de visite classique Tiqets et l'hébergement Booking.com existants; ne pas présenter ces offres comme donnant accès aux animations spéciales.
  gsc:
    retrievedAt: 2026-11-13T03:30:25+01:00
    dataThrough: 2026-11-10
    signal: needs_query_check
    basis: "Visibilité récente : 91 impressions sur trois jours, puis 13 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-26
    peakEnd: 2026-10-28
    recentStart: 2026-11-08
    recentEnd: 2026-11-10
    peakImpressions: 91
    recentImpressions: 13
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - Noël Chenonceau 2026
      - Noëls et traditions du monde Chenonceau
      - nocturne château de Chenonceau décembre 2026
      - château Chenonceau Noël tarifs enfants
      - horaires château Chenonceau décembre 2026
---

## Mission retenue
Actualisation ciblée de « Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille », en particulier des prestations guidées payantes et de leur réservation.

## Pourquoi cette mission
Le snapshot GSC passe de 91 à 13 impressions sur deux fenêtres de trois jours, sans diagnostic de classement démontré. Une lacune indépendante est toutefois vérifiée: l'article annonce les visites guidées de scénographie florale des 4 et 11 décembre à 45 €, alors que la billetterie officielle affiche désormais **55 € par personne**, entrée incluse. Elle propose également une visite « Parfums et Senteurs de Noël » les 19 et 20 décembre à 19 h, à 55 €, absente de l'article. Cette correction est utile avant les réservations de décembre, sans attribuer la baisse GSC à ces écarts.

## Décision du lecteur
Comprendre ce qui est inclus dans le billet classique, ce qui exige un billet spécifique et quel budget prévoir pour les animations guidées selon l'âge des enfants.

## Faits à traiter
- Corriger uniquement après contrôle du panier officiel le prix des visites guidées de scénographie des 4 et 11 décembre: **55 €**, non 45 €; durée 2 h et entrée incluse.
- Vérifier la visite guidée « Parfums et Senteurs de Noël » des 19 et 20 décembre à 19 h, annoncée à 55 €, et la distinguer des nocturnes des 23 et 30 décembre.
- Le site officiel du château annonce les nocturnes des 23 et 30 décembre, animations dès 18 h 30, dernier accès 21 h 30 et fermeture 22 h; ne pas confondre avec les visites guidées à supplément.
- Préserver tarifs d'entrée habituels, budget familial, horaires de visite, accès, poussettes, services bébé, photographies, licences, crédits, maillage vers le guide Chenonceau, Tiqets et Booking.com. Ne pas extrapoler l'adaptation des visites guidées aux enfants.

## Sources de départ
- Billetterie officielle: https://chateaudechenonceau.tickeasy.com/fr-FR/accueil
- Agenda nocturnes officiel: https://www.chenonceau.com/agenda/ouverture-exceptionnelle-en-nocturne/
- Agenda visites inédites: https://www.chenonceau.com/agenda/visites-inedites/
- Programme territorial: https://www.tourainevaldeloire.com/agenda/temps-forts/noel-au-pays-des-chateaux/

## Affiliation
Conserver les liens existants vers Tiqets (visite classique uniquement) et Booking.com (hébergement à proximité), sans en déduire l'accès aux événements spéciaux.

## Continuations internes
- Renvoyer au guide général « Château de Chenonceau en famille » pour TER, parking, accessibilité et services bébé.
- Conserver les deux nocturnes et les visites guidées comme prestations distinctes, sans développer un nouvel article concurrent.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/index.md

---
title: "Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille"
subtitle: "Du 28 novembre au 3 janvier: parcours de Noël, horaires, soirées spéciales et budget avec des enfants"
summary: "Les décors de Noël 2026 de Chenonceau se visitent du 28 novembre au 3 janvier. Horaires de jour, nocturnes annoncées les 23 et 30 décembre, billets, tarifs famille et animations sur réservation: les points à vérifier avant de venir."
category: evenements
location:
  city: Chenonceaux
  department: Indre-et-Loire
  region: Centre-Val de Loire
image:
  src: "/images/articles/2026/10/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille.webp"
  alt: "Château de Chenonceau au-dessus du Cher, photographié hors décorations de Noël"
sources:
  - title: Commune de Chenonceaux - Noëls et traditions du monde 2026
    url: https://www.intramuros.org/chenonceaux/agenda/819144
  - title: Château de Chenonceau - horaires de billetterie
    url: https://www.chenonceau.com/infos-pratiques/horaires/
  - title: Château de Chenonceau - tarifs 2026
    url: https://www.chenonceau.com/infos-pratiques/tarifs/
  - title: Touraine Val de Loire - programme Noël au pays des châteaux 2026
    url: https://www.tourainevaldeloire.com/agenda/temps-forts/noel-au-pays-des-chateaux/
  - title: Château de Chenonceau - masterclass d'art floral
    url: https://www.chenonceau.com/agenda/masterclass-art-floral/
  - title: Château de Chenonceau - services pour les familles
    url: https://www.chenonceau.com/infos-pratiques/services/
  - title: Château de Chenonceau - billetterie et validité des billets
    url: https://chateaudechenonceau.tickeasy.com/fr-FR/accueil
eventEndsAt: 2027-01-03T23:59:00+01:00
topic:
  key: evenements|chenonceaux|noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille|2026
  keywords:
    - Noël Chenonceau 2026
    - Noëls et traditions du monde Chenonceau
    - nocturne château de Chenonceau décembre 2026
    - château Chenonceau Noël tarifs enfants
    - horaires château Chenonceau décembre 2026
slug: noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille
status: published
publishedAt: 2026-10-24T12:31:27.718Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Chenonceaux
---
<!-- article-image-credit -->
*Photo: [PBrieux](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Chenonceau_dominant_le_Cher.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Du **28 novembre 2026 au 3 janvier 2027**, le château de Chenonceau présente « Noëls & traditions du monde ». Les salles historiques accueillent des créations florales et des décors inspirés de plusieurs pays. La visite de jour reste le choix le plus simple avec des enfants; **deux nocturnes sont aussi annoncées les 23 et 30 décembre**, avec des modalités particulières.

## Quels décors de Noël verra-t-on ?

<!-- article-image-body:02 -->

![Cuisines historiques du château de Chenonceau photographiées en 2019, hors période de Noël](/images/articles/2026/10/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille-body-02.webp)

*Photo: [Gzen92](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Chenonceau_-_int%C3%A9rieur_-_cuisines_(Chenonceaux)_(1).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

<!-- article-image-body:01 -->

![Intérieur de la galerie du château de Chenonceau en 2018, sans décorations de Noël](/images/articles/2026/10/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille-body-01.webp)

*Photo: [Zairon](https://commons.wikimedia.org/wiki/File:Chenonceaux_Ch%C3%A2teau_de_Chenonceau_Innen_Galerie_2.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

L'Atelier Floral du château, dirigé par le scénographe Jean-François Boucher, évoquera notamment les traditions de Grande-Bretagne, d'Allemagne, du Japon et d'Islande. La grande galerie au-dessus du Cher deviendra une salle de bal d'inspiration viennoise; dans les cuisines, les mises en scène feront voyager de l'Inde à la Provence et à l'Alsace.

Le parcours se découvre **à l'intérieur du château**, au fil des pièces historiques. Ce n'est pas un marché de Noël ni une fête foraine. Les enfants peuvent s'amuser à reconnaître les pays et les traditions représentés sans qu'une animation spécifique leur soit nécessairement proposée.

## À quelle heure venir pour la visite de jour ?

Le château publie les **heures de dernier accès à la billetterie**, pas l'heure de fermeture des salles:

- **Du 28 novembre au 4 décembre**, puis **du 7 au 11** et **du 14 au 18 décembre**: 9 h 30-16 h 30.
- **Les 5-6 et 12-13 décembre**: 9 h 30-17 h.
- **Du 19 au 25 décembre**: 9 h 30-18 h.
- **Du 26 au 31 décembre**: 9 h 30-18 h 30.
- **Du 1er au 3 janvier 2027**: les décors restent annoncés, mais les horaires précis de janvier 2027 doivent être reconfirmés avant le départ.

Le château ferme 30 minutes après le dernier accès et les jardins 30 minutes après le château. Pour profiter des pièces décorées sans courir, une arrivée en matinée ou en début d'après-midi est préférable. Certains agendas touristiques affichent 16 h 30 pour toute la période: les horaires détaillés du château sont plus précis.

## Nocturnes et animations: que peut-on réserver ?

**Les mercredis 23 et 30 décembre 2026**, Touraine Val de Loire annonce des **nocturnes de 18 h 30 à 22 h**, sur réservation, avec promenade dans les jardins illuminés jusqu'à 23 h. Le programme mentionne des démonstrations florales et des interventions musicales. Ces soirées ne doivent pas être confondues avec une entrée ordinaire en journée: vérifiez le tarif, le créneau et les prestations effectivement incluses au moment de réserver.

D'autres expériences sont annoncées séparément: des **visites guidées nocturnes** avec promenade dans les jardins, à **45 € par personne** sur réservation, ainsi que des visites commentées de la scénographie florale les **4 et 11 décembre à 10 h**, également à **45 € par personne**. Les dates des visites guidées du soir sont à confirmer directement auprès du château, car le calendrier touristique publié comporte une incohérence sur l'une d'elles.

Enfin, des **masterclasses d'art floral** sont programmées les **18, 23 et 30 décembre à 10 h**. Elles durent environ **deux heures**, coûtent **90 € par personne** et **incluent l'accès au château et aux jardins**. La réservation est obligatoire et les places limitées. Ce sont des cours d'art floral, pas des ateliers gratuits annoncés pour les enfants.

## Quel prix pour une famille ?

Pour la **visite classique avec brochure**, les tarifs officiels 2026 sont de **19 € par adulte**, **15 € de 7 à 18 ans** et **gratuit avant 7 ans**. Une famille de deux adultes et deux enfants payants dépense donc **68 €**; avec deux enfants de moins de 7 ans, **38 €**. À partir de **trois enfants payants de 7 à 18 ans**, l'offre famille ramène le billet avec brochure à **15 € par membre de la même famille**: deux adultes et trois enfants concernés paient **75 € au lieu de 83 €**.

L'audioguide est proposé à un tarif différent. Le château prévoit aussi la gratuité pour les personnes en situation de handicap sur présentation de la carte demandée, avec un tarif réduit de **16 € pour l'accompagnant** (visite avec brochure).

Pour l'entrée habituelle, vous pouvez [consulter le billet du château de Chenonceau sur Tiqets](https://www.tiqets.com/fr/activites-attractions-chenonceaux-c262292/billets-pour-chateau-de-chenonceau-billet-d-entree-p977880/). Cette offre présente l'accès au château, aux jardins et aux galeries; **elle ne confirme pas l'accès aux nocturnes ou aux prestations spéciales**. Comparez le prix final, les dates et les conditions avant l'achat. La billetterie du château rappelle par ailleurs qu'un billet est valable sur une **année calendaire**: pour une visite du **1er au 3 janvier 2027**, vérifiez explicitement la validité du titre choisi.

## Venir avec de jeunes enfants ou prolonger le séjour

Le château précise qu'en période de forte affluence, l'accès des **poussettes à l'intérieur peut être limité**; elles restent autorisées dans le parc et les jardins. Un porte-bébé peut donc être utile. Pour les trajets en TER, le stationnement, les aires de pique-nique, les services bébé, l'accessibilité et le temps à prévoir sur place, notre [guide de Chenonceau en famille](/articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/) rassemble les informations pratiques.

Si vous associez Chenonceau à d'autres châteaux de Touraine, l'[Auberge du Bon Laboureur à Chenonceaux sur Booking.com](https://www.booking.com/hotel/fr/hotellebonlaboureur.fr.html) peut servir de point de chute à proximité. L'établissement propose notamment une suite familiale; vérifiez sa capacité réelle selon l'âge des enfants, les lits disponibles, le prix et les conditions pour vos dates.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/chateau-de-chenonceau-en-famille-billets-duree-et-conseils-avec-des-enfants/ | Château de Chenonceau en famille: billets, durée et conseils avec des enfants | sorties | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/villandry-en-famille-jardins-seuls-ou-chateau-et-jardins/ | Villandry en famille: jardins seuls ou château et jardins ? | sorties | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | Luminéales du Thabor 2026 à Rennes: tarifs, horaires et visite en famille | evenements | Rennes, Ille-et-Vilaine, Bretagne
- /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | Noël 2026 au château de Goulaine: dates, billets et conseils en famille | evenements | Haute-Goulaine, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/parentalite/aide-a-domicile-en-indre-et-loire-quel-soutien-pour-les-parents/ | Aide à domicile en Indre-et-Loire: quel soutien pour les parents ? | parentalite | Indre-et-Loire, Centre-Val de Loire
- /articles/cuisine/halles-de-tours-en-famille-un-panier-d-automne-deux-repas-simples/ | Halles de Tours en famille: un panier d’automne, deux repas simples | cuisine | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/activites/aquarium-de-touraine-en-famille-que-voir-avec-les-enfants/ | Aquarium de Touraine en famille: que voir avec les enfants ? | activites | Lussault-sur-Loire, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | Marchés de Noël de Tours 2026 en famille: lieux, dates et budget | evenements | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/vie-pratique/emprunter-des-jeux-a-tours-mirabeau-ou-la-maison-des-jeux/ | Emprunter des jeux à Tours: Mirabeau ou la Maison des Jeux? | vie-pratique | Tours, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/village-du-pere-noel-a-montbazon-2026-dates-activites-et-budget-en-famille/ | Village du Père Noël à Montbazon 2026: dates, activités et budget en famille | evenements | Montbazon, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/voyages/azay-le-rideau-en-famille-une-journee-entre-chateau-et-troglodytes/ | Azay-le-Rideau en famille: une journée entre château et troglodytes | voyages | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/bons-plans/amboise-city-pass-2026-quand-devient-il-vraiment-rentable/ | Amboise City Pass 2026: quand devient-il vraiment rentable? | bons-plans | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/les-lumineales-du-thabor-2026-a-rennes-tarifs-et-visite-en-famille/ | 2026-10-31T19:33:18.323Z
- opportunity | /articles/evenements/marches-de-noel-de-tours-2026-en-famille-chalets-ou-village-gourmand/ | 2026-10-28T21:29:26.054Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-03T15:36:10.146Z
- refresh | /articles/evenements/noel-2026-au-chateau-de-goulaine-le-spectacle-immersif-vaut-il-la-sortie-en-famille/ | 2026-11-13T13:31:11.034Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
