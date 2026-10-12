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
- contrôle que la logique d'affiliation de ces règles partenaires fournies dans ce runtime a bien été appliquée, que les offres retenues sont encore pertinentes et que leur intégration se lit naturellement; pour une sortie, une activité, une visite, un événement ou un voyage sans affiliation, vérifie qu'aucune piste normale n'a été oubliée;
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
title: "Halloween 2026 au Safari de Peaugres: journée complète ou Lumières Sauvages le soir?"
subtitle: Du 17 octobre au 1er novembre en Ardèche, deux façons de profiter d'Halloween en famille sans acheter le mauvais billet.
summary: À Peaugres, les animations d'Halloween précèdent un parcours de lanternes de 2,5 km. Comparez le billet journée avec festival inclus et le billet soirée seul, les tarifs et le rythme à prévoir avec des enfants.
category: evenements
location:
  city: Peaugres
  department: Ardèche
  region: Auvergne-Rhône-Alpes
keywords:
  - Halloween 2026 Safari de Peaugres
  - Festival Lumières Sauvages 2026 Peaugres
  - billet festival Lumières Sauvages ou journée
  - Halloween Wow Safari Peaugres en famille
sources:
  - title: Wow Safari Peaugres - Programme Halloween 2026
    url: https://www.safari-peaugres.com/actualites/halloween-wow-safari-peaugres/
  - title: Wow Safari Peaugres - Halloween en famille
    url: https://www.safari-peaugres.com/halloween-safari-peaugres/
  - title: Wow Safari Peaugres - Festival Lumières Sauvages 2026-2027
    url: https://www.safari-peaugres.com/peaugres-lumieres-sauvages/
  - title: Wow Safari Peaugres - Tarifs et formules
    url: https://www.safari-peaugres.com/tarifs/
  - title: Wow Safari Peaugres - Calendrier des horaires
    url: https://www.safari-peaugres.com/calendrier-horaires-ouverture/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages
  decision: Choisir entre visiter le safari et ses animations d'Halloween avant de voir les lanternes le soir, ou venir seulement au Festival Lumières Sauvages, en connaissant les tarifs, la durée et les contraintes pour les enfants.
  affiliationPotential: Le billet d'entrée Safari de Peaugres est référencé sur Tiqets, mais vérifier les conditions exactes de l'offre et l'inclusion du festival avant de proposer ce lien. Pour prolonger la soirée, Villa Bianca à Peaugres est référencée sur Booking.com, et le parc propose ses propres hébergements familiaux; vérifier la capacité et la disponibilité, sans confondre hébergement et accès au festival.
  gsc:
    retrievedAt: 2026-10-12T04:49:15.779Z
    dataThrough: 2026-10-09
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Wow Safari Peaugres - Programme Halloween 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Au Wow Safari Peaugres, Halloween se fête **du 17 octobre au 1er novembre 2026**, pendant les vacances de la Toussaint. Les familles peuvent passer la journée parmi les animaux et les décors d'Halloween, puis rester pour le Festival Lumières Sauvages à la nuit tombée. Mais il est aussi possible de venir uniquement voir les lanternes. Le choix change à la fois le prix et le temps à prévoir avec les enfants.

## Quel billet choisir pour Halloween à Peaugres?

Le **billet journée** donne accès au safari en voiture, au circuit à pied, aux animations d'Halloween et au Festival Lumières Sauvages le soir. Le tarif Liberté annoncé par le parc est de **32,90 € dès 11 ans**, **27,50 € de 3 à 10 ans** et **gratuit avant 3 ans**. Il n'y a donc **pas de second billet à acheter pour les lumières** après une visite en journée.

Le **billet Festival seul** coûte **24,90 € dès 11 ans** et **20,90 € de 3 à 10 ans**. Il permet de parcourir les installations lumineuses, **pas de visiter les animaux ni de faire le safari voiture**. Pour deux adultes et deux enfants âgés de 3 à 10 ans, comptez 91,60 € pour le Festival seul contre 120,80 € au tarif Liberté journée: la différence est de 29,20 € pour toute la famille.

Si la sortie est prévue à l'avance, le **billet Futé** peut changer le calcul: **27,90 € par adulte et 22,50 € par enfant**, à acheter en ligne au moins sept jours avant la visite. Il est valable le jour choisi ou le lendemain si le billet n'a pas été utilisé le premier jour et si le parc est ouvert. Il est non remboursable, non modifiable et non coupe-file. À quatre (deux adultes et deux enfants de 3 à 10 ans), cela représente 100,80 € pour une journée complète, soit seulement 9,20 € de plus que le Festival seul au tarif indiqué. Les familles de deux adultes et trois enfants peuvent aussi comparer le pack tribu à 120,80 € avec les billets Futé.

Tous ces tarifs et conditions sont détaillés dans les [formules officielles du Safari de Peaugres](https://www.safari-peaugres.com/tarifs/). Le parc indique qu'une réservation n'est pas obligatoire pour le Festival seul, mais il reste prudent de vérifier les conditions du billet choisi et les jours d'ouverture avant le déplacement.

## Animaux nocturnes, citrouilles et déguisements: que voir en journée?

Le [programme Halloween 2026 annoncé par le parc](https://www.safari-peaugres.com/actualites/halloween-wow-safari-peaugres/) mise davantage sur la curiosité que sur la peur. Dans les **Souterrains du Manoir**, la pénombre et les décors de saison accompagnent la découverte d'espèces nocturnes ou souterraines. La **Serre aux 1 000 cachettes** invite à observer les serpents et leurs techniques de camouflage. Le **Cimetière des espèces disparues** raconte, quant à lui, l'histoire d'animaux disparus, avec une dimension pédagogique.

Lors de certains rendez-vous avec les animaux, les soigneurs proposent des nourrissages thématisés, notamment autour des citrouilles. Les espèces concernées et les horaires varient suivant le jour: mieux vaut regarder le programme à l'arrivée plutôt que promettre aux enfants un nourrissage précis. Les petits déguisements sont les bienvenus, et le parc annonce des bonbons et des rencontres costumées dans les allées.

Ce programme intéressera surtout les familles qui veulent **voir les animaux et profiter des activités de saison**. Si l'enfant apprécie les lumières mais supporte mal une très longue journée, mieux vaut envisager uniquement le Festival.

## Lumières Sauvages: une vraie promenade après la tombée de la nuit

Le [Festival Lumières Sauvages 2026-2027](https://www.safari-peaugres.com/peaugres-lumieres-sauvages/) débute le **17 octobre 2026** et doit se poursuivre jusqu'au **28 mars 2027**. L'édition rassemble environ **3 000 sculptures lumineuses** sur un parcours de **plus de 2,5 km**, avec **environ 1 h 30 de marche**. Les décors explorent les milieux extrêmes de la planète et des créatures imaginaires, avec une séquence inspirée de la Fête des morts mexicaine.

Le Festival commence **à la tombée de la nuit**, à une heure qui change avec la date. Il ne s'agit pas d'un safari nocturne: les animaux sont rentrés et le circuit voiture ne fonctionne plus le soir. Les familles qui ne viennent que pour les lanternes n'ont donc aucune raison d'arriver plusieurs heures en avance pour espérer voir les animaux.

## Avec de jeunes enfants, prévoir la fatigue autant que l'horaire

Pour combiner animaux et lanternes, arrivez assez tôt pour profiter du safari voiture et des activités à pied avant leur fermeture. Entre la fin de l'observation des animaux et l'allumage des lumières, le parc indique que **l'aire de jeux Jumbo et des points de restauration restent ouverts**. Cela permet de prévoir une pause et un repas sans attendre la fin du parcours lumineux.

Le soir, ajoutez des vêtements chauds, des chaussures adaptées à la marche et, pour les plus petits, de quoi tenir jusqu'à la fin des 2,5 km. Les enfants sensibles aux ambiances sombres pourront être impressionnés par les Souterrains du Manoir, même si la programmation se veut familiale.

En matière d'accessibilité, le parc signale des **pentes supérieures à 20 %** et conseille un fauteuil électrique pour certaines situations. Pour une mobilité réduite ou une poussette, vérifiez le parcours adapté directement avec le parc avant d'acheter. Les Souterrains du Manoir ne sont notamment pas accessibles en poussette. Pour le fonctionnement habituel du zoo, les aires de pique-nique, les services bébé et le circuit voiture, retrouvez notre guide [Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée](/articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/).

Enfin, le [calendrier officiel des horaires](https://www.safari-peaugres.com/calendrier-horaires-ouverture/) est à consulter pour **la date exacte** de votre sortie: l'ouverture, la fermeture des circuits et le début des illuminations ne doivent pas être déduits d'un horaire valable un autre jour.

## Où vérifier ses billets et dormir après les lumières?

Pour une journée au zoo, vous pouvez consulter le [billet d'entrée Safari de Peaugres sur Tiqets](https://www.tiqets.com/fr/activites-attractions-peaugres-c179024/billets-pour-safari-de-peaugres-billet-d-entree-p979491/). Cette fiche annonce le safari en voiture et le parcours à pied, **mais ne détaille pas explicitement l'inclusion du Festival Lumières Sauvages**: contrôlez ce point et le tarif applicable à votre date avant de payer. Si vous voulez seulement les lanternes, choisissez bien la formule **Festival seul**, et non un billet zoo classique.

Pour les familles qui viennent de loin, une nuit sur place évite de reprendre la route après une visite qui se termine dans l'obscurité. La [chambre d'hôtes Villa Bianca à Peaugres sur Booking.com](https://www.booking.com/hotel/fr/villa-bianca-peaugres.fr.html) est une possibilité à examiner selon le nombre de voyageurs, les dates et les disponibilités. Réserver une chambre ne donne pas accès au Festival: les billets se choisissent séparément.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/safari-de-peaugres-avec-enfants-quel-billet-choisir-et-comment-organiser-la-journee/ | Safari de Peaugres avec enfants: quel billet choisir et comment organiser la journée | sorties | Peaugres, Ardèche, Auvergne-Rhône-Alpes
- /articles/activites/wow-safari-thoiry-en-famille-tarifs-duree-et-conseils-pour-organiser-la-visite/ | Wow Safari Thoiry en famille: tarifs 2026, billets et durée | activites | Thoiry, Yvelines, Île-de-France
- /articles/activites/jardin-d-imany-a-mayotte-demi-journee-ou-journee-complete-avec-des-enfants/ | Jardin d'Imany à Mayotte: demi-journée ou journée complète avec des enfants ? | activites | Combani, Mayotte, Mayotte
- /articles/evenements/grand-bivouac-2026-a-albertville-en-famille-preparer-sa-journee-au-festival/ | Grand Bivouac 2026 à Albertville en famille: préparer sa journée au festival | evenements | Albertville, Savoie, Auvergne-Rhône-Alpes
- /articles/activites/parc-zoo-du-reynou-avec-des-enfants-billet-date-poussette-ou-journee-complete/ | Parc Zoo du Reynou avec des enfants: billet daté, poussette ou journée complète? | activites | Le Vigen, Haute-Vienne, Nouvelle-Aquitaine
- /articles/activites/samara-avec-des-enfants-faut-il-prevoir-la-journee-complete/ | Samara avec des enfants: faut-il prévoir la journée complète? | activites | La Chaussée-Tirancourt, Somme, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/vie-pratique/transport-scolaire-en-ardeche-peut-on-utiliser-scolaire-le-week-end-et-pendant-les-vacances/ | Transport scolaire en Ardèche: peut-on utiliser Scolaire+ le week-end et pendant les vacances? | vie-pratique | Privas, Ardèche, Auvergne-Rhône-Alpes
- /articles/activites/canoe-en-ardeche-avec-des-enfants-6-ou-12-km-quel-parcours-choisir/ | Canoë en Ardèche avec des enfants: 6 ou 12 km, quel parcours choisir ? | activites | Vallon-Pont-d'Arc, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/castagnade-de-joyeuse-2026-avec-des-enfants-venir-samedi-ou-dimanche/ | Castagnade de Joyeuse 2026 avec des enfants: venir samedi ou dimanche? | evenements | Joyeuse, Ardèche, Auvergne-Rhône-Alpes
- /articles/voyages/dormir-a-tournon-sur-rhone-pour-prendre-le-train-de-l-ardeche-quel-secteur-choisir/ | Dormir à Tournon-sur-Rhône pour prendre le Train de l'Ardèche: quel secteur choisir? | voyages | Tournon-sur-Rhône, Ardèche, Auvergne-Rhône-Alpes
- /articles/bons-plans/train-de-l-ardeche-en-famille-les-bons-plans-pour-payer-moins-cher-en-2026/ | Train de l'Ardèche en famille: les bons plans pour payer moins cher en 2026 | bons-plans | Saint-Jean-de-Muzols, Ardèche, Auvergne-Rhône-Alpes
- /articles/voyages/week-end-a-vallon-pont-d-arc-en-famille-quel-budget-prevoir/ | Week-end à Vallon-Pont-d'Arc en famille: quel budget prévoir? | voyages | Vallon-Pont-d'Arc, Ardèche, Auvergne-Rhône-Alpes
- /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | Halloween 2026 au Parc Spirou: billets, nocturnes Naruto et maison hantée | evenements | Monteux, Vaucluse, Provence-Alpes-Côte d'Azur
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | Famille en fête 2026 en Gironde: ateliers gratuits pour les 0-6 ans | evenements | Saint-Loubès, Gironde, Nouvelle-Aquitaine
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | Monument Jeu d'enfant 2026 à Azay-le-Rideau: animaux cachés et contes en famille | evenements | Azay-le-Rideau, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | Toussaint 2026 à Vaux-le-Vicomte: les animations pour les enfants | evenements | Maincy, Seine-et-Marne, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté

### Historique Radar lié

- opportunity | /articles/evenements/famille-en-fete-2026-pres-de-bordeaux-ateliers-gratuits-pour-les-0-6-ans/ | 2026-10-12T08:10:30.674Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/halloween-2026-au-parc-spirou-nocturnes-naruto-reservation-et-maison-hantee/ | 2026-10-12T17:34:53.933Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-azay-le-rideau-animaux-caches-atelier-et-contes/ | 2026-10-11T16:33:21.125Z
- opportunity | /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | 2026-10-11T09:17:01.561Z
- opportunity | /articles/evenements/toussaint-2026-a-vaux-le-vicomte-lampe-torche-ou-carnaval-des-animaux-avec-les-enfants/ | 2026-10-11T11:27:54.175Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
