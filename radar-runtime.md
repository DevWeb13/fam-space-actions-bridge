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
title: "Festival International des Jeux de Cannes 2027 en famille : billets, âges et visite"
subtitle: "Du 26 au 28 février : 10 € dès 16 ans, gratuité avec billet pour les plus jeunes et poussettes à déposer en consigne."
summary: Quel jour venir au Festival International des Jeux de Cannes 2027 avec des enfants ? Jeux à essayer selon l'âge, billets à réserver, budget, poussettes, repas et accès depuis la gare.
category: evenements
location:
  city: Cannes
  department: Alpes-Maritimes
  region: Provence-Alpes-Côte d'Azur
keywords:
  - Festival International des Jeux Cannes 2027 famille
  - Festival des Jeux Cannes enfants billet gratuit
  - FIJ Cannes 2027 tarifs horaires
sources:
  - title: Ville de Cannes - Festival International des Jeux 2027
    url: https://www.cannes.com/fr/agenda/evenements/saison-des-spectacles-du-palais-des-festivals-2026-2027/festival-international-des-jeux-2027.html
  - title: Festival International des Jeux - Billetterie et accès des mineurs
    url: https://www.festivaldesjeux-cannes.com/participer/billetterie/
  - title: Festival International des Jeux - Questions pratiques
    url: https://www.festivaldesjeux-cannes.com/acces-infos-pratiques/faq/
  - title: Palais des Festivals - Jeux pour tous les publics
    url: https://www.palaisdesfestivals.com/evenements/professionnel/festival-international-des-jeux/
  - title: Palais des Festivals - Accès et déplacements
    url: https://www.palaisdesfestivals.com/informations-pratiques/acces-deplacement/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-international-des-jeux-de-cannes-2027-en-famille-quel-jour-et-quel-billet-choisir
  decision: Savoir si le festival convient à l'âge de ses enfants, choisir un jour et les bons billets sans payer inutilement, puis organiser la visite.
  affiliationPotential: "Pas de billet partenaire direct confirmé : entrée via billetterie officielle. Appartement familial 2 chambres à 400 m du Palais des Festivals vérifié sur Booking.com (https://www.booking.com/hotel/fr/2chambres-2-salles-de-bains-palais-des-festivals.fr.html), sans présumer des disponibilités du 26 au 28 février."
  gsc:
    retrievedAt: 2026-10-28T03:28:35+01:00
    dataThrough: 2026-10-25
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Cannes - Festival International des Jeux 2027 »; aucune page forte GSC n'est requise.
eventEndsAt: 2027-02-28
---

Du **vendredi 26 au dimanche 28 février 2027**, le Festival International des Jeux (FIJ) fête sa 40e édition au Palais des Festivals de Cannes. On peut y venir en famille pour **essayer des jeux sur place**, même sans être passionné ou connaître les règles à l'avance. Le bon choix se fait surtout sur l'âge des enfants, la durée de visite souhaitée et les billets à préparer : **l'entrée est gratuite avant 16 ans, mais un titre d'accès reste nécessaire dès un an**.

## Quel jour choisir avec les enfants ?

Le festival est annoncé **de 10 h à 19 h les trois jours**, avec **dernier accès à 18 h**. Les billets journaliers correspondent au vendredi 26, au samedi 27 ou au dimanche 28 février : choisissez d'abord la date à laquelle toute la famille peut arriver suffisamment tôt pour jouer sans courir.

Aucun programme détaillé des démonstrations de l'édition 2027 ne permet encore d'affirmer qu'un jour serait meilleur pour les jeunes enfants, ni de promettre une animation précise le samedi plutôt que le dimanche. Si vous ne disposez que de deux ou trois heures, mieux vaut venir en début ou milieu de journée plutôt qu'à l'heure du dernier accès. Avec des enfants qui aiment prendre leur temps, prévoyez une pause au milieu des parties.

Les espaces ont des jauges : lorsqu'une zone est momentanément complète, l'organisateur invite à en découvrir une autre avant de revenir. Le [programme et les conditions d'accès officiels](https://www.festivaldesjeux-cannes.com/participer/billetterie/) restent à consulter à l'approche de la visite.

## À quel âge le festival vaut-il le déplacement ?

Le FIJ n'est pas réservé aux joueurs experts. Le [Palais des Festivals](https://www.palaisdesfestivals.com/evenements/professionnel/festival-international-des-jeux/) annonce des jeux pour enfants, des classiques, des jeux de société modernes, de construction, des jeux vidéo et de simulation. Les exposants font découvrir des nouveautés et permettent d'essayer des jeux.

- **Avec un enfant d'âge maternelle :** privilégiez les jeux courts, visuels ou de manipulation, et une visite assez brève. La présence de jouets et de jeux pour enfants est annoncée, mais aucun atelier 2027 avec âge minimum et horaire précis n'est encore confirmé.
- **Avec des enfants d'âge primaire :** alternez découvertes, jeux connus et démonstrations. Demandez aux animateurs l'âge conseillé et le temps d'une partie avant de vous installer.
- **Avec des préados ou des adolescents :** jeux de stratégie, de cartes, vidéo ou de rôle peuvent donner davantage de choix. Vérifiez sur chaque stand les conditions de participation, notamment pour les tournois.

La [FAQ de l'organisateur](https://www.festivaldesjeux-cannes.com/acces-infos-pratiques/faq/) précise que des jeux peuvent être essayés gratuitement une fois à l'intérieur du festival. Les achats de jeux sur les stands sont facultatifs. Pour une première visite avec un tout-petit, la contrainte la plus importante n'est pas tant l'offre de jeux que l'absence de poussette dans les espaces du festival.

## Billets : combien payer pour une famille ?

Le **billet journée coûte 10 € par personne de 16 ans et plus**. L'entrée est **gratuite pour les moins de 16 ans**, mais le billet gratuit doit être téléchargé en même temps qu'un billet adulte payant. Seuls les bébés de moins d'un an sont dispensés de titre d'accès, selon la FAQ.

Par exemple, **deux adultes et deux enfants de 6 et 10 ans paient 20 € pour une journée**, hors restauration et achats. Si l'un des enfants a déjà 16 ans, son entrée relève du tarif payant. Les moins de 16 ans doivent être accompagnés d'un adulte ; à partir de 16 ans, les jeunes peuvent entrer sans accompagnateur.

La [billetterie officielle](https://www.festivaldesjeux-cannes.com/participer/billetterie/) est ouverte depuis le 6 octobre 2026. Sélectionnez le **bon jour**, ajoutez les titres gratuits nécessaires au panier et gardez les e-tickets sur téléphone ou sur papier. **Une pièce d'identité est exigée à l'entrée.** Les billets journée ne sont ni échangeables ni remboursables et **toute sortie est définitive** : ne prévoyez pas un déjeuner dehors suivi d'un retour avec ce billet. Les pass Privilège permettent, eux, les allers-retours selon la FAQ, mais ne sont pas nécessaires pour une visite continue d'une seule journée.

Pour une personne à mobilité réduite, l'organisateur annonce un **billet journée à 8 € sur justificatif**, à demander à la billetterie par le canal indiqué sur son site, ainsi qu'un accès dédié.

## Poussette, repas et pauses : les règles à connaître

**Les poussettes doivent être déposées en consigne à l'entrée**, tout comme les trottinettes, casques et gros sacs à dos. Si votre enfant ne peut pas marcher pendant la visite, vérifiez avant d'acheter les conditions de consigne et envisagez un porte-bébé adapté. La FAQ ne confirme pas de service de prêt de poussette à l'intérieur.

L'entrée de nourriture est normalement interdite. Sont notamment admis **le nécessaire pour bébé**, les bouteilles ou gourdes d'eau de **50 cl maximum**, ainsi que les repas ou encas justifiés par une pathologie avec certificat médical. Des food trucks et des espaces de restauration/snacking sont annoncés dans le village et les halls. Il faut donc prévoir le coût du déjeuner sur place, ou manger avant d'entrer, plutôt que compter sur un pique-nique apporté.

Les sacs sont contrôlés à l'entrée, avec passage aux détecteurs de métaux. Pour les besoins particuliers d'un bébé — table à langer, possibilité de réchauffer un biberon ou accès à un micro-ondes — aucun équipement précis n'est confirmé dans les informations consultées : mieux vaut interroger l'organisateur avant la visite plutôt que supposer qu'il sera disponible.

## Comment rejoindre le festival sans voiture ?

Le Palais des Festivals se trouve **1 boulevard de la Croisette, à Cannes**. Depuis la gare SNCF de Cannes, le [Palais annonce environ six minutes à pied](https://www.palaisdesfestivals.com/informations-pratiques/acces-deplacement/). C'est une solution pratique pour éviter le stationnement avec les enfants. En voiture, le parking souterrain du Palais existe, mais il faut ajouter son prix au budget de la sortie et anticiper l'affluence.

Pour les familles qui restent le week-end, l'appartement [**2chambres 2 salles de bains Palais des Festivals sur Booking.com**](https://www.booking.com/hotel/fr/2chambres-2-salles-de-bains-palais-des-festivals.fr.html) est une piste à proximité du Palais (environ 400 mètres), avec deux chambres, deux salles de bains et une cuisine. Vérifiez la capacité correspondant à votre famille, le prix total et les disponibilités **du 26 au 28 février 2027** avant toute réservation : ils ne sont pas garantis.

Pour une seule journée, l'essentiel est de réserver **le bon billet pour chaque membre de la famille**, de choisir quelques univers de jeux plutôt que de vouloir tout voir, et de prévoir les pauses sans sortie du site.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | ALFest 2026 à Annecy en famille: horaires, jeux et braderie | evenements | Annecy, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/bons-plans/musee-fermat-en-famille-jeux-tarifs-et-visite-avec-des-enfants/ | Musée Fermat en famille: jeux, tarifs et visite avec des enfants | bons-plans | Beaumont-de-Lomagne, Tarn-et-Garonne, Occitanie
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/sorties/villa-ephrussi-de-rothschild-en-famille-que-voir-dans-la-villa-et-les-jardins/ | Villa Ephrussi de Rothschild en famille: que voir dans la villa et les jardins? | sorties | Saint-Jean-Cap-Ferrat, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/bons-plans/musee-national-du-sport-a-nice-en-famille-combien-coute-vraiment-la-visite/ | Musée National du Sport à Nice en famille: que voir et préparer la visite | bons-plans | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/parentalite/maison-des-1-000-premiers-jours-a-grasse-peut-on-venir-sans-rendez-vous/ | Maison des 1 000 premiers jours à Grasse: peut-on venir sans rendez-vous? | parentalite | Grasse, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/cuisine/atelier-de-cuisine-nicoise-a-nice-faut-il-reserver-avec-des-enfants/ | Atelier de cuisine niçoise à Nice: faut-il réserver avec des enfants? | cuisine | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/maison/renovation-energetique-dans-les-alpes-maritimes-jusqu-a-25-400-d-aide/ | Rénovation énergétique dans les Alpes-Maritimes: jusqu'à 25 400 € d'aide | maison | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/vie-pratique/location-de-voiture-a-nice-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Nice avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Nice, Alpes-Maritimes, Provence-Alpes-Côte d’Azur
- /articles/voyages/menton-en-famille-ou-dormir-selon-votre-programme/ | Menton en famille: où dormir selon votre programme | voyages | Menton, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/activites/ateliers-matisse-nice-famille-aout-2026/ | Ateliers Matisse à Nice: sept matinées créatives pour les 4 à 7 ans en août | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | Marie-Antoinette à Fontainebleau 2026-2027: exposition, visites et tarifs en famille | evenements | Fontainebleau, Seine-et-Marne, Île-de-France
- /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | Féeries de Noël 2026 à Paris: parcours lumineux, billets et patinoire en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | Noël 2026 à Villandry: décors, spectacle d'ombres et ateliers en famille | evenements | Villandry, Indre-et-Loire, Centre-Val de Loire
- /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | Noël de Casse-Noisette 2026 à Pierrefonds: visites, dates et tarifs en famille | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie

### Historique Radar lié

- opportunity | /articles/evenements/alfest-2026-a-annecy-en-famille-horaires-jeux-et-braderie/ | 2026-10-20T15:29:27.541Z
- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/les-feeries-de-noel-2026-au-parc-andre-citroen-a-paris-parcours-lumineux-ou-patinoire-en-famille/ | 2026-10-27T13:28:21.076Z
- opportunity | /articles/evenements/marie-antoinette-a-fontainebleau-2026-2027-exposition-ou-visite-guidee-avec-les-enfants/ | 2026-10-27T18:27:41.322Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/noel-2026-a-villandry-spectacles-et-ateliers-a-choisir-selon-l-age/ | 2026-10-27T10:35:41.254Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z
- opportunity | /articles/evenements/noel-de-casse-noisette-2026-a-pierrefonds-visite-libre-feerie-ou-aventure-a-jouer/ | 2026-10-27T07:35:50.437Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
