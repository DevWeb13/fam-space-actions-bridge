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

Soumets le résultat final avec `action: advance`, uniquement les métadonnées éditoriales réellement corrigées, le corps complet et un bloc `radarReview`. Ne recopie pas les métadonnées inchangées: la plomberie les conserve et normalise la syntaxe avant traitement. Le bloc `radarReview` contient:
- `summary`: contrôles et corrections réellement effectués;
- `sources`: URLs factuelles revérifiées;
- pour un refresh, `regressionCheck`: résultat concret de la comparaison ancien/nouveau. Une seule correction factuelle vérifiée peut suffire.

**Ne recopie aucun autre champ Radar, aucune branche et aucun SHA.** Le workflow construit et contrôle d'abord l'article final avec le validateur réel. Il ne crée le commit de phase 3 que si ce précontrôle réussit, puis lance le processeur final.

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
title: "Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille"
subtitle: Les 5 et 6 décembre, campements gratuits de 10 h à 18 h et cortège le samedi soir
summary: Les 5 et 6 décembre 2026, les campements médiévaux de Carcassonne accueillent gratuitement les familles de 10 h à 18 h. Ateliers distincts, marche aux flambeaux du samedi, budget et départ encore divergent selon les offices de tourisme.
category: evenements
location:
  city: Carcassonne
  department: Aude
  region: Occitanie
image:
  src: /images/articles/2026/10/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants.webp
  alt: Remparts et tours de la Cité médiévale de Carcassonne, photographiés hors fête de la Saint-Nicolas
sources:
  - title: Office de tourisme de Carcassonne - La Magie de Noël, Saint-Nicolas et marche aux flambeaux 2026
    url: https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/
  - title: Grand Carcassonne Tourisme - La Magie de Noël et la Saint-Nicolas
    url: https://www.grand-carcassonne-tourisme.fr/temps-fort/la-magie-de-noel/
eventEndsAt: 2026-12-06
topic:
  key: evenements|carcassonne|saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants|2026
  keywords:
    - Saint-Nicolas Carcassonne 2026
    - marche aux flambeaux Carcassonne 5 décembre
    - campements médiévaux Carcassonne enfants
slug: saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants
status: published
publishedAt: 2026-10-27T00:35:14.840Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Carcassonne
radar:
  schemaVersion: 1
  phase: 2
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/index.md
  targetSha: bbae21b44f552258493e7309d65beed9bf150c8d
  targetUrl: /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/
  decision: Choisir entre les campements des 5-6 décembre et la marche nocturne du 5, en distinguant les activités libres des ateliers payants et en sachant où rejoindre le cortège.
  affiliationPotential: Conserver l'Hôtel du Pont Vieux sur Booking.com comme option de nuitée familiale, sans promesse de disponibilité.
  gsc:
    retrievedAt: 2026-11-17T04:29:30+01:00
    dataThrough: 2026-11-14
    signal: uncertain
    basis: "Visibilité récente : 33 impressions sur trois jours, puis 3 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-11-01
    peakEnd: 2026-11-03
    recentStart: 2026-11-12
    recentEnd: 2026-11-14
    peakImpressions: 33
    recentImpressions: 3
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - "2026"
      - dates de la prochaine édition
      - saint nicolas carcassonne
---

<!-- article-image-credit -->
*Photo: [Jean-Christophe BENOIST](https://commons.wikimedia.org/wiki/File:Carcassonne_-_Cit%C3%A9_-_Remparts.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Les **samedi 5 et dimanche 6 décembre 2026**, la Cité médiévale de Carcassonne accueille la Saint-Nicolas dans ses lices. Les campements et leurs animations sont annoncés **de 10 h à 18 h, en entrée libre et gratuite**. Le samedi, une marche aux flambeaux au profit du Téléthon relie la Cité à la Bastide Saint-Louis. Avec de jeunes enfants, la visite des campements en journée est la formule la plus souple; le cortège implique une marche nocturne et un retour à organiser.

## Campements médiévaux: que faire gratuitement ?

Les deux jours, des compagnies costumées font découvrir la vie quotidienne au Moyen Âge au pied des remparts: tentes, forge, travail du cuir, gravure, poterie, tressage d'osier, démonstrations de combats et initiations. Les enfants peuvent notamment découvrir les jeux en bois, les blasons et les animations annoncées autour de l'épée en mousse. Troubadours, spectacles de rue et marché d'artisans complètent l'ambiance; un autre marché de créateurs et producteurs est prévu au jardin du Prado.

L'[office de tourisme de Carcassonne](https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/) confirme l'accès gratuit aux campements de **10 h à 18 h**. Cela ne signifie pas que chaque achat ou activité supplémentaire soit offert: les conditions de participation aux différentes initiations du week-end ne sont pas détaillées individuellement. Le **dimanche 6 décembre** permet de profiter de cette fête sans attendre la marche du soir.

## Ateliers médiévaux payants: une offre à distinguer de la fête

L'office de tourisme présente aussi des **ateliers médiévaux réguliers pour les 6-11 ans**, d'une durée de **45 minutes**, avec des tarifs de **7 à 12 €**. Parmi les propositions figurent le parcours du chevalier et de la chevaleresse et le tissage d'un bracelet. Les enfants restent sous la responsabilité de leurs accompagnants.

Ces ateliers sont annoncés les mercredis, les week-ends et pendant les vacances scolaires, mais **leur tenue précise les 5 et 6 décembre, leurs créneaux et leurs places disponibles ne sont pas confirmés**. Il ne faut donc pas les confondre avec les animations en accès libre des campements ni compter sur une réservation sans vérification préalable auprès de l'[office de tourisme](https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/).

## Marche aux flambeaux du samedi 5 décembre: horaires et départ

<!-- article-image-body:01 -->

![Porte Narbonnaise à l'entrée de la Cité médiévale de Carcassonne, photographiée hors cortège](/images/articles/2026/10/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants-body-01.webp)

*Photo: [Joe Mabel](https://commons.wikimedia.org/wiki/File:Carcassonne_-_Porte_Narbonnaise_06.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les flambeaux sont vendus **4 € l'unité dès 16 h 30**, au profit du Téléthon. Le **rassemblement est prévu à 17 h 30**, le départ à **18 h 30** et l'arrivée **place Carnot vers 19 h 30 à 20 h**. Prévoyez environ une heure à une heure et demie de déambulation, sans compter l'attente avant le départ.

**Le lieu précis du départ reste contradictoire dans les annonces officielles.** L'[office de tourisme de Carcassonne](https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/) mentionne la **place du Prado**; [Grand Carcassonne Tourisme](https://www.grand-carcassonne-tourisme.fr/temps-fort/la-magie-de-noel/) indique le **parvis du pont-levis devant la Porte Narbonnaise**. Vérifiez le point de rendez-vous définitif avant de venir.

Grand Carcassonne annonce également un spectacle de feu avant le départ et des **torches électriques pour les enfants**. Leur prix éventuel, leur distribution et les conditions d'âge ne sont pas précisés. Ne prévoyez pas de confier un flambeau enflammé à un enfant sans consignes explicites des organisateurs.

## Quel budget prévoir en famille ?

La visite des campements et la participation à l'ambiance de la fête ne nécessitent pas de billet pour le château comtal. Pour le cortège, **deux flambeaux coûtent 8 €**, quatre coûtent **16 €**; ces montants ne préjugent pas du prix des torches électriques. Les ateliers réguliers à 7-12 €, s'ils sont proposés et accessibles à vos dates, constituent une dépense distincte. Prévoyez également un budget libre pour les gourmandises et les achats au marché.

## Poussette, froid et retour depuis la Bastide

<!-- article-image-body:02 -->

![Fontaine de Neptune sur la place Carnot à Carcassonne, lieu d'arrivée annoncé du cortège](/images/articles/2026/10/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants-body-02.webp)

*Photo: [Didier Descouens](https://commons.wikimedia.org/wiki/File:Fontaine_monumentale_(Carcassonne).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les lices et les abords de la Cité ont des sols irréguliers: une poussette peut être peu pratique sur les pavés et dans la foule. Un porte-bébé peut convenir aux familles qui en utilisent déjà un. Chaussures adaptées et vêtements chauds sont utiles pour attendre et marcher après la tombée de la nuit.

Le cortège **se termine place Carnot dans la Bastide**, et non près des remparts. Si votre véhicule est stationné près de la Cité, anticipez le trajet retour depuis la ville basse. Le parcours complet et ses aménagements pour poussettes ou fauteuils n'étant pas détaillés, renseignez-vous auprès des organisateurs si l'accessibilité conditionne votre venue.

## Passer la nuit à Carcassonne

Pour les familles venant de loin, dormir sur place permet de profiter des campements le dimanche sans reprendre la route après le cortège. L'[Hôtel du Pont Vieux](https://www.booking.com/hotel/fr/du-pont-vieux.fr.html), rue Trivalle au pied de la Cité, propose notamment une **chambre familiale standard pour quatre personnes**, avec un lit double et deux lits simples. Vérifiez prix, conditions et disponibilités pour les 5 et 6 décembre: aucune chambre n'est garantie.

Pour compléter la sortie par le château comtal et organiser stationnement, repas et visite sur deux jours, consultez [Carcassonne en famille: 1 ou 2 jours, billets et budget à prévoir](/articles/voyages/carcassonne-en-famille-1-ou-2-jours-billets-et-budget-a-prevoir/).

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/index.md

---
title: "Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille"
subtitle: Les 5 et 6 décembre, une fête médiévale dans les lices et un cortège le samedi soir
summary: "Les 5 et 6 décembre 2026, Carcassonne fête la Saint-Nicolas dans les lices de la Cité. Campements médiévaux en journée ou marche aux flambeaux le samedi à 18 h 30: horaires, budget, point de départ à confirmer et conseils pratiques avec les enfants."
category: evenements
location:
  city: Carcassonne
  department: Aude
  region: Occitanie
image:
  src: "/images/articles/2026/10/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants.webp"
  alt: "Remparts et tours de la Cité médiévale de Carcassonne, photographiés hors fête de la Saint-Nicolas"
sources:
  - title: Office de tourisme de Carcassonne - La Magie de Noël, Saint-Nicolas et marche aux flambeaux 2026
    url: https://www.tourisme-carcassonne.fr/temps-forts/la-magie-de-noel/
  - title: Grand Carcassonne Tourisme - La Magie de Noël et la Saint-Nicolas
    url: https://www.grand-carcassonne-tourisme.fr/temps-fort/la-magie-de-noel/
eventEndsAt: 2026-12-06
topic:
  key: evenements|carcassonne|saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants|2026
  keywords:
    - Saint-Nicolas Carcassonne 2026
    - marche aux flambeaux Carcassonne 5 décembre
    - campements médiévaux Carcassonne enfants
slug: saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants
status: published
publishedAt: 2026-10-27T00:35:14.840Z
updatedAt: null
readingTime: 4
affiliate:
  enabled: true
  type: travel
  destination: Carcassonne
---
<!-- article-image-credit -->
*Photo: [Jean-Christophe BENOIST](https://commons.wikimedia.org/wiki/File:Carcassonne_-_Cit%C3%A9_-_Remparts.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Les **samedi 5 et dimanche 6 décembre 2026**, la Cité médiévale de Carcassonne célèbre la Saint-Nicolas avec des campements, des artisans et des démonstrations dans les lices. Le samedi soir, une marche aux flambeaux rejoint la Bastide Saint-Louis au profit du Téléthon. En journée, les familles peuvent parcourir les campements à leur rythme; le cortège demande de prévoir une soirée plus longue.

## Que voir dans les campements médiévaux ?

Les deux jours, plusieurs compagnies installent leurs tentes au pied des remparts. Le programme annoncé comprend des démonstrations de tir à l'arc et de combats, des jeux en bois, la découverte du travail du cuir et la création de blasons. Un marché médiéval d'une trentaine d'artisans est prévu, ainsi qu'un marché de créateurs et producteurs au jardin du Prado. Troubadours et animations de rue complètent la fête.

Cette visite sans départ collectif se prête bien à une sortie avec de jeunes enfants. Le **dimanche 6 décembre** permet notamment de découvrir les campements sans attendre le cortège nocturne. Les horaires détaillés et les éventuelles conditions de participation à chaque atelier du week-end ne sont pas encore confirmés: consultez les annonces actualisées des offices de tourisme avant de compter sur une activité précise.

## Marche aux flambeaux du samedi 5 décembre: horaires et départ

<!-- article-image-body:01 -->

![Porte Narbonnaise à l'entrée de la Cité médiévale de Carcassonne, photographiée hors cortège](/images/articles/2026/10/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants-body-01.webp)

*Photo: [Joe Mabel](https://commons.wikimedia.org/wiki/File:Carcassonne_-_Porte_Narbonnaise_06.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Les flambeaux sont annoncés à **4 € l'unité**, avec une vente à partir de **16 h 30** au profit du Téléthon. Le **rassemblement débute à 17 h 30**, puis le cortège médiéval en musique part à **18 h 30**. L'arrivée est prévue **place Carnot vers 19 h 30 à 20 h**: comptez environ une heure à une heure et demie de marche, hors attente.

**Le point de départ exact reste à confirmer.** L'office de tourisme de Carcassonne indique la *place du Prado*, tandis que Grand Carcassonne Tourisme annonce le *parvis du pont-levis devant la Porte Narbonnaise*. Ces deux indications concernent les abords de la Cité, mais ne sont pas identiques. Vérifiez le rendez-vous définitif avant de vous déplacer.

Grand Carcassonne Tourisme mentionne des **torches électriques pour les enfants** et un spectacle de feu avant le départ. Le mode de distribution, le prix éventuel de ces torches et les consignes d'âge ne sont pas détaillés. Ne supposez donc pas qu'un flambeau enflammé puisse être confié à un enfant.

## Quel budget pour la Saint-Nicolas ?

La Magie de Noël est annoncée en **accès gratuit**: on peut venir découvrir l'ambiance des campements et du cortège sans acheter de billet pour le château comtal. Cela ne garantit toutefois pas la gratuité de chaque atelier, attraction ou achat au marché; les tarifs propres aux ateliers de ce week-end ne sont pas précisés.

Pour la marche, **deux flambeaux à 4 € coûtent 8 €** et quatre coûteraient **16 €**. Ce calcul ne s'applique pas automatiquement aux torches électriques destinées aux enfants, dont les conditions ne sont pas confirmées. Prévoyez séparément vos éventuelles dépenses de restauration ou d'artisanat.

## Poussette, froid et retour depuis la Bastide

<!-- article-image-body:02 -->

![Fontaine de Neptune sur la place Carnot à Carcassonne, lieu d'arrivée annoncé du cortège](/images/articles/2026/10/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants-body-02.webp)

*Photo: [Didier Descouens](https://commons.wikimedia.org/wiki/File:Fontaine_monumentale_(Carcassonne).jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

Les lices et les abords de la Cité présentent des sols irréguliers. Une poussette peut être moins pratique sur les pavés et au milieu d'un cortège fréquenté; un porte-bébé peut être une alternative pour les familles qui l'utilisent déjà. Prévoyez des vêtements chauds et des chaussures adaptées à une marche de nuit.

Le cortège **se termine place Carnot, dans la Bastide**, et non à son point de départ près des remparts. Si vous êtes garés près de la Cité, anticipez le retour depuis la ville basse. Le parcours complet, ses conditions d'accessibilité et les aménagements pour poussettes ou fauteuils ne sont pas détaillés à ce stade: demandez confirmation aux organisateurs si ces points sont déterminants pour votre famille.

## Dormir près de la Cité pour profiter des deux journées

Pour les familles venant de loin, une nuit sur place évite de reprendre la route juste après le cortège. L'[Hôtel du Pont Vieux](https://www.booking.com/hotel/fr/du-pont-vieux.fr.html), rue Trivalle au pied de la Cité, propose notamment une **chambre familiale standard pour quatre personnes**, avec un lit double et deux lits simples. Vérifiez les conditions, le prix et la disponibilité aux dates souhaitées: aucune chambre n'est garantie pour le week-end des 5 et 6 décembre.

Pour ajouter la visite du château comtal ou organiser le stationnement et les repas sur deux jours, consultez notre guide [Carcassonne en famille: 1 ou 2 jours, billets et budget à prévoir](/articles/voyages/carcassonne-en-famille-1-ou-2-jours-billets-et-budget-a-prevoir/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | Saint-Nicolas-de-Port 2026 en famille: village, défilé et procession | evenements | Saint-Nicolas-de-Port, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/voyages/carcassonne-en-famille-1-ou-2-jours-billets-et-budget-a-prevoir/ | Carcassonne en famille: 1 ou 2 jours, billets et budget à prévoir | voyages | Carcassonne, Aude, Occitanie
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/cuisine/dejeuner-aux-halles-de-troyes-avec-des-enfants-comment-ca-marche/ | Déjeuner aux Halles de Troyes avec des enfants: comment ça marche? | cuisine | Troyes, Aube, Grand Est
- /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | Noël à Caen 2026 en famille: marché de Noël et visite illuminée | evenements | Caen, Calvados, Normandie
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | Noël 2026 à Brest en famille: marché, projections et horaires | evenements | Brest, Finistère, Bretagne
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/voyages/narbonne-en-famille-hors-saison-un-week-end-entre-romains-halles-et-canal/ | Narbonne en famille hors saison: un week-end entre Romains, Halles et canal | voyages | Narbonne, Aude, Occitanie
- /articles/evenements/carnaval-de-limoux-2027-en-famille-dates-fecos-et-conseils-pratiques/ | Carnaval de Limoux 2027 en famille: dates, Fécos et conseils pratiques | evenements | Limoux, Aude, Occitanie
- /articles/voyages/gouffre-geant-de-cabrespine-en-famille-quelle-visite-choisir-en-2026/ | Gouffre Géant de Cabrespine en famille: quelle visite choisir en 2026? | voyages | Cabrespine, Aude, Occitanie
- /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/ | Réserve Africaine de Sigean: combien de temps prévoir entre safari et visite à pied ? | sorties | Sigean, Aude, Occitanie
- /articles/sorties/petit-archeologue-puilaurens-famille-2026/ | Le petit archéologue à Puilaurens: un jeu de piste en famille | sorties | Puilaurens, Aude, Occitanie
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes
- /articles/evenements/carnaval-de-guyane-2027-en-famille-preparer-ses-premieres-sorties/ | Carnaval de Guyane 2027 en famille: préparer ses premières sorties | evenements | Guyane
- /articles/evenements/mondo-clowns-2027-a-marmande-dates-tarifs-et-conseils-en-famille/ | Mondo'Clowns 2027 à Marmande: dates, tarifs et conseils en famille | evenements | Marmande, Lot-et-Garonne, Nouvelle-Aquitaine
- /articles/evenements/chambly-kids-festival-2027-quatre-spectacles-pour-les-enfants-dates-et-ages/ | Chambly Kids Festival 2027: quatre spectacles pour les enfants, dates et âges | evenements | Chambly, Oise, Hauts-de-France
- /articles/evenements/festival-tete-de-mioche-2027-a-l-horme-quels-spectacles-choisir-avec-les-enfants/ | Festival Tête de mioche 2027 à L'Horme: quels spectacles choisir avec les enfants ? | evenements | L'Horme, Loire, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/noel-2026-a-brest-en-famille-marche-projections-et-jours-a-privilegier/ | 2026-10-30T06:28:26.726Z
- opportunity | /articles/evenements/noel-a-caen-2026-en-famille-marche-ou-visite-des-illuminations/ | 2026-10-30T21:26:32.584Z
- opportunity | /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | 2026-10-29T17:29:29.382Z
- refresh | /articles/sorties/reserve-africaine-de-sigean-combien-de-temps-prevoir-entre-safari-et-visite-a-pied/ | 2026-10-02T18:25:59.965Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | 2026-11-01T21:31:28.158Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille/ | 2026-11-02T23:31:49.432Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
