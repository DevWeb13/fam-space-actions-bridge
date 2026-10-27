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
title: "Noël 2026 au château de Blois : quelle visite choisir avec les enfants ?"
subtitle: Décors inclus, Antonietta dès 7 ans, visite familiale dès 6 ans et nocturnes sur réservation
summary: Du 28 novembre 2026 au 10 janvier 2027, le château royal de Blois se pare de décors de Noël. Découvrez les animations adaptées à l'âge des enfants, les horaires qui se chevauchent, les tarifs et les réservations utiles.
category: evenements
location:
  city: Blois
  department: Loir-et-Cher
  region: Centre-Val de Loire
keywords:
  - Noël château de Blois 2026
  - Forêts Intérieures château royal de Blois
  - Antonietta ou la forêt intérieure
  - visite familiale Noël Blois tarifs
sources:
  - title: Château royal de Blois - Noël 2026-2027, spectacles et visites
    url: https://www.chateaudeblois.fr/EvenementChateau/11893/2159-fiche-evenement.htm
  - title: Château royal de Blois - Horaires, tarifs et accueil des familles
    url: https://www.chateaudeblois.fr/2027-preparer-sa-visite.htm
  - title: Maison de la Magie - Horaires et tarifs de Noël 2026
    url: https://www.maisondelamagie.fr/1060-contact-information.htm
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-2026-au-chateau-royal-de-blois-decors-spectacles-et-visites-selon-l-age
  decision: Choisir selon l'âge des enfants entre les décors inclus, le spectacle dès 7 ans, la visite familiale dès 6 ans, les visites nocturnes dès 8 ans et le combiné avec la Maison de la Magie, puis savoir quel billet ou créneau réserver.
  affiliationPotential: "Entrée classique au château vérifiée sur Tiqets : https://www.tiqets.com/fr/activites-attractions-blois-c67107/billets-pour-chateau-royal-de-blois-entree-spectacle-son-et-lumiere-en-option-p1008168/ ; ne pas promouvoir l'option Son et Lumière hors saison ni promettre les visites guidées incluses. Hébergement de deux chambres Côté Château à 400 m du château sur Booking.com : https://www.booking.com/hotel/fr/cote-chateau-blois.fr.html ; troisième étage sans ascenseur, tarifs et disponibilités de décembre non vérifiés."
  gsc:
    retrievedAt: 2026-10-27T02:25:59+01:00
    dataThrough: 2026-10-24
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Château royal de Blois - Noël 2026-2027 et programme »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-01-10
---

Du **28 novembre 2026 au 10 janvier 2027**, le château royal de Blois accueille « Forêts Intérieures », un parcours de décors végétaux et de sapins réinventés dans ses salles historiques. Avec des enfants, la formule la plus simple est la visite libre : les décors sont compris dans l'entrée habituelle. Pendant les vacances de Noël, on peut y ajouter un spectacle de 30 minutes dès 7 ans ou une visite guidée familiale dès 6 ans. Les deux commencent à **14 h 30** : il faut donc choisir son horaire.

## Voir les décors de Noël sans réserver d'animation

« Forêts Intérieures » fait apparaître feuilles, fleurs et arbres imaginaires dans les salles du château. Les familles peuvent parcourir cette scénographie à leur rythme, du 28 novembre au 10 janvier, sans acheter de billet spécial Noël. C'est le choix le plus souple avec de jeunes enfants ou pour une première découverte du monument.

Le billet ordinaire coûte **16 € par adulte**, **12 € au tarif réduit** sous conditions et **8 € de 6 à 17 ans** ; l'entrée est **gratuite avant 6 ans**. Pour deux adultes au plein tarif et deux enfants de 6 à 17 ans, comptez **48 €**. L'HistoPad est inclus avec les billets payants, sous réserve de disponibilité ; il coûte 4 € pour une entrée gratuite. Prévoyez environ deux heures pour explorer le château sans courir.

Pour acheter l'entrée à l'avance, [le billet du château royal de Blois sur Tiqets](https://www.tiqets.com/fr/activites-attractions-blois-c67107/billets-pour-chateau-royal-de-blois-entree-spectacle-son-et-lumiere-en-option-p1008168/) couvre la visite classique, mais **pas les visites guidées**. Comparez son prix final aux tarifs du château et ne sélectionnez pas par erreur l'option « Son et Lumière », qui ne correspond pas aux animations de Noël.

## Pendant les vacances : Antonietta ou la visite familiale ?

**« Antonietta ou la forêt intérieure »** est un spectacle poétique et musical inspiré de La Belle et la Bête. Il dure **30 minutes**, s'adresse aux enfants **dès 7 ans** et ne demande **ni supplément ni réservation**. Les représentations sont annoncées **du 19 décembre 2026 au 3 janvier 2027, à 14 h 30 et 16 h**, sauf les 25 décembre et 1er janvier. C'est l'option courte pour les enfants qui aiment les histoires et préfèrent un moment assis à une longue visite commentée.

**« À toi la vie de château ! »** fait découvrir aux enfants la vie quotidienne des rois et des reines : repas, habitudes et coulisses de la cour. Cette visite en français dure **1 h 15**, **dès 6 ans**. Elle est prévue **du 19 décembre au 2 janvier à 14 h 30**, sauf les 25 décembre et 1er janvier. Les enfants n'ont pas de supplément sur leur entrée ; les adultes ajoutent **5 € chacun**. Pour une famille de deux adultes et deux enfants de 6 à 17 ans, le total est donc **58 €** au plein tarif. **Réservation conseillée au 02 54 90 33 33**, car le groupe est limité.

Les deux activités commencent à 14 h 30. Si vous choisissez la visite familiale, le spectacle de 16 h peut éventuellement suivre : la visite se termine théoriquement à 15 h 45, ce qui laisse peu de marge pour rejoindre la salle. Vérifiez cette possibilité à l'accueil plutôt que de compter dessus sans confirmation.

## Dès 8 ans : une soirée mystérieuse ou des espaces habituellement fermés

**« Murmures nocturnes de Noël »** emmène les familles à la lueur d'une torche dans les appartements royaux et certains passages insolites. Cette visite de **2 heures**, recommandée **dès 8 ans**, est programmée les **21, 23, 28 et 30 décembre à 18 h 30**. Le tarif annoncé est de **22 € par adulte**, **16 € au tarif réduit** et **12 € pour les 8-17 ans**. **Réservation obligatoire**, avec ouverture annoncée le **4 novembre 2026** sur la billetterie du château. Pour deux adultes et deux enfants de 8 à 17 ans, le budget de cette visite est de **68 €** ; ne la confondez pas avec le billet de journée.

Autre option pour les enfants curieux des coulisses : la **visite insolite**, les **dimanches de décembre à 10 h 30**, également dès 8 ans. Elle explore tours, combles et passages étroits ; son supplément est de **7 € par adulte** et **4 € par enfant de 8 à 17 ans**, en plus du droit d'entrée. La réservation est conseillée au même numéro. Ce parcours est déconseillé aux personnes sujettes au vertige et n'est pas adapté aux personnes à mobilité réduite.

Deux soirées **Candlelight** sont aussi annoncées les **5 et 19 décembre**. Ce sont des concerts à réserver séparément : vérifiez le programme précis et les éventuelles restrictions d'âge avant de les choisir pour des enfants.

## Château et Maison de la Magie : le billet combiné vaut-il le coup ?

Juste en face du château, la [Maison de la Magie](https://www.maisondelamagie.fr/1060-contact-information.htm) propose une visite et un spectacle de magie. Pour les vacances de Noël, elle ouvre **du 19 décembre au 3 janvier**, sauf les **25 décembre et 1er janvier**, de **10 h à 12 h 30 et de 14 h à 18 h 30**. Comptez **1 h 30 à 2 heures** pour la découvrir : mieux vaut prévoir une vraie demi-journée supplémentaire plutôt que d'enchaîner toutes les animations du château.

Le **combiné château + Maison de la Magie** coûte **24 € par adulte**, **19 € au tarif réduit**, **12 € pour les 6-17 ans** et reste gratuit avant 6 ans. Pour deux adultes et deux enfants de 6 à 17 ans, cela représente **72 €**, contre **96 €** en achetant séparément les deux entrées ordinaires. Le château annonce une réservation possible à partir du **2 novembre 2026**. Vérifiez le créneau du spectacle de magie et n'achetez pas ce combiné pour une date où la Maison est fermée.

## Horaires et conseils pratiques avec de jeunes enfants

Le château se trouve **6 place du Château, 41000 Blois**, à environ **8 minutes à pied de la gare Blois-Chambord**. Pour les déplacements, les excursions et les solutions sans voiture, notre [itinéraire familial de trois jours à Blois](https://www.fam-space.fr/articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/) détaille les possibilités.

Les horaires annoncés pour Noël sont :
- **Du 28 novembre au 18 décembre : 10 h–17 h**.
- **Du 19 décembre au 2 janvier : 10 h–18 h**, sauf les **24 et 31 décembre : fermeture à 17 h**.
- **Du 3 au 10 janvier : 10 h–17 h**.
- **Fermé les 25 décembre et 1er janvier**. Dernière entrée **30 minutes avant la fermeture**.

**Poussettes :** elles ne sont pas autorisées sur le circuit de visite ni dans les appartements royaux. Un garage gratuit, **sans surveillance**, est disponible sous la galerie. Les porte-bébés dorsaux à armature métallique sont interdits ; prévoyez un autre mode de portage si nécessaire. Le château dispose d'un **espace bébé** et prête un **chauffe-biberon** ; la présence d'une table à langer n'est pas confirmée dans les informations consultées.

**Accessibilité :** seule une partie du château est accessible en fauteuil roulant, notamment la cour, la chapelle et des salles du rez-de-chaussée. Les escaliers limitent l'accès aux étages et à certaines visites guidées. Contactez l'accueil pour savoir précisément quelles salles décorées et animations seront accessibles à votre famille.

**Pause repas :** vous pouvez organiser un déjeuner dans le centre de Blois entre deux visites. Le château indique que le billet de journée permet de sortir puis de revenir ; vérifiez les modalités à l'accueil. Les sacs volumineux ne sont pas acceptés et seuls de petits sacs portés devant sont autorisés dans les salles.

## Dormir à Blois pour prolonger la sortie

Pour un week-end, [l'appartement Côté Château sur Booking.com](https://www.booking.com/hotel/fr/cote-chateau-blois.fr.html) est situé à environ **400 mètres du château**. Il propose **deux chambres**, une **cuisine avec micro-ondes** et, sur demande, un lit parapluie et une chaise haute : une configuration pratique pour quatre personnes. **Attention : il se trouve au troisième étage sans ascenseur**, ce qui compte avec une poussette ou des bagages. Vérifiez la capacité selon l'âge des enfants, le tarif total et la disponibilité à vos dates : aucun prix de séjour de Noël n'est confirmé.

Si vous passez plusieurs jours dans la région, [Noël à Chambord en famille](https://www.fam-space.fr/articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/) peut constituer une autre journée de visite, avec une programmation différente de celle de Blois.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | Noël au château de Cheverny 2026: billets, mapping et visite en famille | evenements | Cheverny, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/center-parcs-les-hauts-de-bruyeres-en-famille-quel-cottage-choisir-apres-la-renovation/ | Center Parcs Les Hauts de Bruyères en famille: quel cottage choisir après la rénovation? | voyages | Chaumont-sur-Tharonne, Loir-et-Cher, Centre-Val de Loire
- /articles/sorties/chateau-de-chambord-en-famille-tarifs-2026-activites-et-conseils-de-visite/ | Château de Chambord en famille: tarifs 2026, activités et conseils de visite | sorties | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/contes-et-histoires-2026-comment-choisir-un-monument-a-visiter-avec-les-enfants/ | Contes et Histoires 2026: comment choisir un monument à visiter avec les enfants | evenements
- /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | Noël au château d'Amboise 2026: visite, nocturnes et tarifs en famille | evenements | Amboise, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/evenements/nevers-en-fete-2026-quand-voir-les-illuminations-et-le-marche-de-noel-en-famille/ | Nevers en fête 2026: quand voir les illuminations et le marché de Noël en famille | evenements | Nevers, Nièvre, Bourgogne-Franche-Comté
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/blois-sans-voiture-en-2026-3-jours-pour-chambord-cheverny-et-le-centre-ville/ | Blois sans voiture en 2026: 3 jours pour Chambord, Cheverny et le centre-ville | voyages | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | MonstroZoo 2026-2027 à Beauval: parcours inclus, visite guidée et tarifs | evenements | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/vie-pratique/transport-scolaire-remi-41-que-faire-apres-la-rentree/ | Transport scolaire Rémi 41: que faire après la rentrée ? | vie-pratique | Romorantin-Lanthenay, Loir-et-Cher, Centre-Val de Loire
- /articles/activites/balade-en-bateau-a-saint-dye-sur-loire-journee-pique-nique-ou-crepuscule/ | Balade en bateau à Saint-Dyé-sur-Loire: journée, pique-nique ou crépuscule ? | activites | Saint-Dyé-sur-Loire, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/beauval-a-la-toussaint-2026-billets-duree-de-visite-et-hebergement/ | Beauval à la Toussaint 2026: billets, durée de visite et hébergement | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/voyages/zooparc-de-beauval-en-famille-en-2026-un-ou-deux-jours-quel-hotel-et-quel-budget-prevoir/ | ZooParc de Beauval: billets, 1 ou 2 jours, hôtel et budget 2026 | voyages | Saint-Aignan, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/monstrozoo-2026-2027-a-beauval-enquete-libre-ou-visite-guidee-en-famille/ | 2026-10-22T15:49:20.816Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-cheverny-visite-ou-mapping-seul-en-famille/ | 2026-10-23T19:58:30.214Z
- opportunity | /articles/evenements/noel-2026-au-chateau-royal-d-amboise-visite-de-jour-ou-nocturne-aux-chandelles/ | 2026-10-24T06:28:53.730Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- opportunity | /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | 2026-10-27T00:35:14.931Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
