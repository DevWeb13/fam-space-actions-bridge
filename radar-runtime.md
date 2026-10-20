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
title: "Grand Noël 2026 à Vaux-le-Vicomte en famille: billets, offre enfant et animations"
subtitle: "Du 14 novembre au 3 janvier: quel jour venir, combien payer et comment profiter des illuminations?"
summary: "Grand Noël 2026-2027 à Vaux-le-Vicomte: dates, offre enfant gratuit les deux premiers week-ends, prix des billets, activités incluses, patinoire, navette et conseils avec des enfants."
category: evenements
location:
  city: Maincy
  department: Seine-et-Marne
  region: Île-de-France
keywords:
  - Grand Noël Vaux-le-Vicomte 2026 famille
  - Vaux-le-Vicomte Noël 2026 billet enfant offert
  - Grand Noël Maincy patinoire Odyssée Nordique
sources:
  - title: Château de Vaux-le-Vicomte - Le Grand Noël 2026, programme, horaires et tarifs
    url: https://vaux-le-vicomte.com/event/le-grand-noel-de-vaux-le-vicomte/
  - title: Château de Vaux-le-Vicomte - Offre enfant gratuit les deux premiers week-ends, conditions
    url: https://vaux-le-vicomte.com/en/news/grand-noel-at-vaux-le-vicomte-2026-free-child-ticket/
  - title: Château de Vaux-le-Vicomte - Informations pratiques, navette Grand Noël et accueil des familles
    url: https://vaux-le-vicomte.com/preparer-sa-visite-au-chateau-de-vaux-le-vicomte/informations-pratiques/
  - title: Office de tourisme Melun Val de Seine - Le Grand Noël
    url: https://www.melunvaldeseine-tourisme.com/fete-et-manifestation/le-grand-noel-au-chateau-de-vaux-le-vicomte
  - title: ibis Styles Melun Rubelles - Chambres et suites
    url: https://www.ibis-styles-melun-rubelles.com/chambres-et-suites
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: grand-noel-2026-a-vaux-le-vicomte-en-famille-billets-animations-et-budget
  decision: Choisir la date et le billet qui conviennent réellement à l'âge et au budget de la famille, profiter de l'offre enfant lorsqu'elle s'applique, distinguer les animations comprises des suppléments et organiser une visite incluant la projection du soir sans mauvaise surprise.
  affiliationPotential: "Action principale: entrée Grand Noël à réserver obligatoirement en ligne avec créneau, et promotion 2 billets adultes achetés = 1 enfant offert uniquement les 14, 15, 21 et 22 novembre 2026. Un billet château ordinaire existe chez Tiqets (https://www.tiqets.com/fr/activites-attractions-maincy-c180111/billets-pour-chateau-de-vaux-le-vicomte-billet-d-entree-p975832/) mais ne prouve pas l'accès au Grand Noël ni à sa promotion: ne pas le présenter comme équivalent ni faire concurrencer la billetterie spéciale par un billet inadapté. Hébergement pour week-end: ibis Styles Melun à Rubelles sur Booking.com (https://www.booking.com/hotel/fr/ibis-styles-melun.fr.html), suite familiale quatre couchages déjà identifiée, à recontrôler pour capacité, disponibilité, prix et accès au château; pas de disponibilité confirmée."
  gsc:
    retrievedAt: 2026-10-20T02:29:02.000Z
    dataThrough: 2026-10-17
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château de Vaux-le-Vicomte - Grand Noël 2026, programmation, billetterie et FAQ »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-03
---

**Du 14 novembre 2026 au 3 janvier 2027**, le château de Vaux-le-Vicomte, à Maincy en Seine-et-Marne, organise son **Grand Noël** autour d'un voyage à travers le monde: salons décorés, automates, jardin illuminé et projection sur la façade. Comptez **au moins quatre heures** pour en profiter en famille.

Pour choisir votre date, deux points comptent particulièrement: **un billet enfant est offert sous conditions les 14, 15, 21 et 22 novembre**, et **la patinoire comme le spectacle immersif sont payants en plus de l'entrée**. La réservation en ligne est obligatoire.

## L'offre enfant gratuit: pour quelles familles?

Les **14, 15, 21 et 22 novembre 2026**, l'offre de lancement permet d'acheter un billet **« 2 adultes + 1 enfant de 3 à 17 ans » à 55,80 €**, soit le prix de deux entrées adultes. Elle concerne uniquement la formule **château et jardin**, avec deux adultes au plein tarif; elle ne s'applique ni aux billets réduits ni aux entrées jardin seul.

Le [château précise les conditions de cette offre](https://vaux-le-vicomte.com/en/news/grand-noel-at-vaux-le-vicomte-2026-free-child-ticket/): les trois personnes doivent venir ensemble et le billet doit être choisi **en ligne**, pour l'une des quatre dates. Avec **deux enfants de 3 à 17 ans**, il faut ajouter un billet enfant au panier. Les moins de 3 ans entrent gratuitement, mais **un billet gratuit doit tout de même être réservé** pour eux.

À titre de comparaison, sur la base des **tarifs d'entrée de week-end annoncés à partir de 27,90 € par adulte et 22,90 € par enfant**, une famille de deux adultes et deux enfants paierait **101,60 € sans promotion**, contre **78,70 € avec l'offre et un second billet enfant au tarif de base**. L'économie théorique est donc de **22,90 €**, sous réserve des prix effectivement proposés pour votre date et votre panier. Les changements de date de l'offre sont limités aux quatre dates promotionnelles et doivent être demandés au plus tard **cinq jours avant la date initiale**.

## Quels billets et quel budget en dehors de l'offre?

D'après les [tarifs du Grand Noël publiés par le château](https://vaux-le-vicomte.com/event/le-grand-noel-de-vaux-le-vicomte/), le billet **château et jardin** coûte **25,90 € par adulte en semaine** et **à partir de 27,90 € les week-ends ou pendant les vacances scolaires**. Pour les **3-17 ans**, il coûte **20,90 € en semaine**, ou **à partir de 22,90 €** sur les périodes les plus demandées. L'entrée est gratuite avant 3 ans.

Pour **deux adultes et deux enfants payants**, cela représente **93,60 € en semaine** aux tarifs affichés, ou **au moins 101,60 €** en week-end et vacances, sans activité supplémentaire. Vérifiez le total à la réservation: les prix de week-end sont indiqués **« à partir de »**.

Un billet **jardin seul** est également proposé à **19 € en semaine** ou **à partir de 20 €** en week-end et vacances. Il permet de profiter des animations du jardin et de la projection, **mais pas des salons décorés à l'intérieur du château**. Le tarif famille habituel des visites hors événement ne doit pas être utilisé pour calculer le budget du Grand Noël.

## Que comprend l'entrée avec des enfants?

Avec le billet château et jardin, la famille traverse les salons transformés en escales du monde entier, avec lumières et automates. La visite intérieure dure **environ une heure** et son **créneau réservé doit être respecté**.

Dans le jardin, plusieurs expériences sont **sans supplément**: la chasse au trésor du **« passeport du petit voyageur » dès 3 ans** (10h30-18h30), la **veillée gourmande autour des guimauves** (12h-18h30), le **bosquet des vœux** (10h30-18h30) et la **fabrique postale solidaire**, où l'on peut écrire à des personnes isolées.

La **projection monumentale** sur la façade dure environ **huit minutes**. Le château annonce des séances à **18h, 18h30 et 19h**, avec une **séance unique à 17h40 les 24 et 31 décembre**. Les soirées prolongées jusqu'à 21h proposent des projections supplémentaires: contrôlez leur horaire précis pour la date retenue.

## Patinoire ou spectacle immersif: quels suppléments?

La **patinoire en glace** ouvre normalement de **11h à 19h30**. Son tarif est de **5 € par personne**, à payer **sur place**; il n'y a pas de réservation en ligne pour cette activité. Les enfants peuvent utiliser des aides à la glisse, les gants sont fortement recommandés et **les mineurs doivent être accompagnés d'un adulte**. Quatre personnes qui patinent ajoutent ainsi **20 €** au budget familial.

**« L'Odyssée Nordique »** est un spectacle déambulatoire **dès 6 ans**, d'environ **une heure debout**, dans le château. Il exige une **réservation en ligne séparée**. Le château affiche **14,90 € à partir de 13 ans** et **10,90 € pour les moins de 12 ans**: la formulation officielle ne tranche pas le tarif d'un enfant de **12 ans**, à vérifier dans le panier. L'activité n'est accessible ni aux fauteuils roulants ni aux poussettes. L'accès au **dôme** et la **location de costumes** constituent aussi des suppléments.

## Quelles dates et quels horaires choisir?

Le calendrier varie au cours de la saison:

- **Du 14 novembre au 18 décembre**, ouverture principalement **du mercredi au dimanche, de 10h30 à 20h**, avec **dernier accès à 19h**; **les 5 et 12 décembre**, fermeture à **21h**.
- **Du 19 décembre au 2 janvier**, ouverture généralement **de 10h30 à 21h**, sauf exceptions.
- **Les 24 et 31 décembre**, ouverture **10h30-18h**, dernier accès **16h**.
- **Les 25 décembre et 1er janvier**, le domaine est **fermé**.
- **Le dimanche 3 janvier**, ouverture **10h30-20h**.

Pour une sortie avec de jeunes enfants, arriver dans l'après-midi laisse le temps de visiter les salons, de participer à la chasse au trésor et de rester jusqu'aux lumières du soir. Le parcours alterne intérieur et extérieur: prévoyez vêtements chauds et chaussures adaptées à la marche.

## Venir sans voiture et repartir après les illuminations

Le château dispose d'un **parking gratuit** à Maincy. Pour le Grand Noël, il annonce aussi une **navette directe depuis Paris**, sur réservation obligatoire, au départ de l'**avenue des Terroirs de France**, près du métro **Cour Saint-Émilion (ligne 14)**: départ de Paris à **14h**, retour du domaine à **19h**. **Les 24 et 31 décembre**, départ de Paris à **13h** et retour à **18h**.

**Attention au retour de 19h**: il ne permet pas d'assister à la projection de **19h** et de prendre la navette en même temps. Pour celle de **18h30**, la marge est très faible; privilégiez la séance de **18h** si vous utilisez ce transport, en confirmant le temps de marche jusqu'au point de départ.

Autre possibilité: **ligne R depuis Paris-Gare-de-Lyon jusqu'à Melun**, puis taxi ou VTC (environ **10 à 15 minutes** jusqu'au château). Le domaine décrit aussi une navette depuis la gare de Melun, mais **son horaire de retour applicable au Grand Noël n'est pas établi ici**: ne comptez pas dessus sans confirmation pour rentrer après la projection.

## Poussette, repas et accessibilité

Le château se rejoint par **une trentaine de marches** et **les poussettes ne sont pas admises à l'intérieur**; un espace pour les stationner est prévu dans la coursive. Le parcours intérieur et **L'Odyssée Nordique** ne sont pas accessibles aux personnes en fauteuil roulant. Le jardin est accessible, mais les **pavés et graviers** peuvent compliquer les déplacements; des voiturettes électriques peuvent être louées selon disponibilité.

Pour les repas, **Le Relais de l'Écureuil** propose une restauration en libre-service avec **menu enfant**. Des chaises hautes et des micro-ondes sont disponibles; les poussettes restent à l'extérieur du restaurant. Les **tables à langer** se trouvent dans les toilettes femmes de la Cour de l'Écureuil, à l'entrée. Le kiosque du jardin et le chalet de la patinoire permettent également une pause rapide.

## Dormir dans le secteur pour prolonger la visite

Pour une soirée sans trajet de retour vers Paris, l'[**ibis Styles Melun à Rubelles sur Booking.com**](https://www.booking.com/hotel/fr/ibis-styles-melun.fr.html) dispose notamment d'une **suite familiale jusqu'à quatre personnes**, avec **un lit double et deux lits simples**, selon la description de l'hôtel. Il est situé à Rubelles, **pas dans le domaine du château**: prévoyez votre trajet entre l'hébergement et Vaux-le-Vicomte. **Prix, capacité adaptée à l'âge des enfants et disponibilité aux dates du Grand Noël restent à vérifier** avant toute réservation.

Si vous restez un jour de plus en Seine-et-Marne, notre guide [**Parrot World en famille**](/articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/) aide à préparer une autre sortie dans le département.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | Marché de Noël d'Amiens 2026 en famille: horaires, Père Noël et patinoire | evenements | Amiens, Somme, Hauts-de-France
- /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | Marché de Noël de Reims 2026 en famille: horaires, grande roue et animations | evenements | Reims, Marne, Grand Est
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations | evenements | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/foire-d-automne-de-saint-jean-du-gard-2026-en-famille-animations-et-conseils/ | Foire d'Automne de Saint-Jean-du-Gard 2026 en famille: animations et conseils | evenements | Saint-Jean-du-Gard, Gard, Occitanie
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | Noël 2026 à Disneyland Paris: faut-il un billet 2 parcs pour voir Arendelle? | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/parentalite/laep-en-seine-et-marne-ou-aller-et-comment-se-passe-une-premiere-visite/ | LAEP en Seine-et-Marne: où aller et comment se passe une première visite? | parentalite | Meaux, Seine-et-Marne, Île-de-France
- /articles/cuisine/visiter-une-cave-d-affinage-de-brie-a-jouarre-ce-qu-il-faut-savoir-avec-des-enfants/ | Visiter une cave d'affinage de brie à Jouarre: ce qu'il faut savoir avec des enfants | cuisine | Jouarre, Seine-et-Marne, Île-de-France
- /articles/maison/couches-lavables-dans-le-nord-de-la-seine-et-marne-acheter-louer-ou-choisir-l-occasion/ | Couches lavables dans le nord de la Seine-et-Marne: acheter, louer ou choisir l'occasion? | maison | Monthyon, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/scol-r-ou-imagine-r-en-seine-et-marne-quel-titre-choisir-pour-la-rentree-2026/ | Scol'R ou imagine R en Seine-et-Marne: quel titre choisir pour la rentrée 2026? | vie-pratique | Melun, Seine-et-Marne, Île-de-France
- /articles/activites/parrot-world-en-famille-tarifs-2026-duree-et-conseils-pour-la-visite/ | Parrot World en famille: tarifs 2026, durée et conseils pour la visite | activites | Crécy-la-Chapelle, Seine-et-Marne, Île-de-France
- /articles/evenements/la-legende-des-chevaliers-a-provins-en-famille-tarifs-horaires-et-conseils-2026/ | La Légende des Chevaliers à Provins en famille: tarifs, horaires et conseils 2026 | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/voyages/halloween-2026-a-disneyland-paris-en-famille-billets-hotel-et-duree-du-sejour/ | Halloween 2026 à Disneyland Paris en famille: billets, hôtel et durée du séjour | voyages | Chessy, Seine-et-Marne, Île-de-France
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | Festival du Livre de Colmar 2026 en famille: dates, horaires et animations jeunesse | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | Fête des Lumières 2026 à Lyon en famille: dates, horaires et accès | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-du-livre-de-colmar-2026-en-famille-dates-ateliers-et-acces/ | 2026-10-20T08:52:25.825Z
- opportunity | /articles/evenements/fete-des-lumieres-2026-a-lyon-en-famille-dates-horaires-et-parcours/ | 2026-10-19T19:48:02.164Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/marche-de-noel-d-amiens-2026-en-famille-village-du-pere-noel-patinoire-et-parades/ | 2026-10-19T13:54:07.745Z
- opportunity | /articles/evenements/marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants/ | 2026-10-19T09:37:22.517Z
- opportunity | /articles/evenements/marche-de-noel-de-reims-2026-en-famille-horaires-animations-et-acces/ | 2026-10-20T00:30:38.975Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/voyages/noel-2026-disneyland-paris-billet-2-parcs-arendelle/ | 2026-10-02T21:22:46.733Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
