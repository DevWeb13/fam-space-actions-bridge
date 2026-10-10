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
title: "Festival Lumière 2026 avec des enfants : Chaplin, Laurel & Hardy et les bons billets"
subtitle: Deux ciné-concerts familiaux à comparer les 11 et 17 octobre ; la conférence Chaplin du 14 est complète
summary: À Lyon, le festival Lumière propose Chaplin sur écran géant le 11 octobre et Laurel & Hardy le 17. Horaires, durées, tarifs enfants et adultes, accréditation moins de 26 ans et état des réservations.
category: evenements
location:
  city: Lyon
  department: Rhône
  region: Auvergne-Rhône-Alpes
keywords:
  - Festival Lumière 2026 enfants Lyon
  - Chaplin ciné-concert 11 octobre 2026
  - Laurel et Hardy 17 octobre 2026 Lyon
  - Festival Lumière tarif enfant
sources:
  - title: Festival Lumière 2026 — Ciné-concert Chaplin
    url: https://www.festival-lumiere.org/cine-concert-chaplin
    accessedAt: 2026-10-10
  - title: Festival Lumière 2026 — Master Class Famille Chaplin
    url: https://www.festival-lumiere.org/la-mecanique-du-rire-chez-charlie-chaplin
    accessedAt: 2026-10-10
  - title: Ville de Lyon — inscription Master Class Famille Chaplin
    url: https://inscriptions.lyon.fr/inscriptionSimple/InscriptionSimple/jsp/site/Portal.jsp?id_form=2823&page=appointment&view=getAppointmentFormFirstStep
    accessedAt: 2026-10-10
  - title: Festival Lumière 2026 — samedi 17 octobre
    url: https://www.festival-lumiere.org/samedi-17-octobre-2026
    accessedAt: 2026-10-10
  - title: Festival Lumière 2026 — billetterie et tarifs
    url: https://www.festival-lumiere.org/billetterie
    accessedAt: 2026-10-10
  - title: Festival Lumière 2026 — accréditations
    url: https://www.festival-lumiere.org/accreditations-2026
    accessedAt: 2026-10-10
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-lumiere-2026-a-lyon-quelles-seances-choisir-avec-des-enfants
  decision: Choisir entre une première expérience de cinéma muet en musique, une découverte gratuite des gags de Chaplin dès 5 ans et une séance Laurel & Hardy, puis savoir quel billet ou inscription prévoir pour la date choisie.
  affiliationPotential: Billetterie officielle du Festival Lumière pour les séances, inscription officielle distincte pour la conférence du 14 octobre; aucune billetterie partenaire exacte vérifiée. Hébergement familial exact MEININGER Hotel Lyon Centre Berthelot sur Booking.com (chambres 4 à 6 personnes, cuisine commune) vérifié; disponibilité et tarif aux dates de visite non confirmés.
  gsc:
    retrievedAt: 2026-10-10T03:52:00.000Z
    dataThrough: 2026-10-06
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Festival Lumière 2026 — Ciné-concert Chaplin »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-18
---

Pour une première découverte du cinéma muet avec des enfants, le **Festival Lumière 2026 à Lyon** propose deux rendez-vous faciles à comparer : **Chaplin le dimanche 11 octobre à 10 h 15** à la Halle Tony Garnier et **Laurel & Hardy le samedi 17 octobre à 14 h 30** au Pathé Bellecour. Une troisième proposition familiale, la conférence Chaplin du 14 octobre, est bien annoncée dès 5 ans mais son formulaire officiel affiche désormais complet.

## Chaplin le 11 octobre : le grand spectacle familial

Le [ciné-concert Chaplin](https://www.festival-lumiere.org/cine-concert-chaplin) réunit trois courts métrages de 1915-1916, accompagnés en direct au piano par Didier Martel. Le programme dure **1 h 23** et le festival annonce aussi des animations ainsi qu'un petit-déjeuner offert avant la séance.

La séance commence à **10 h 15 à la Halle Tony Garnier**. Les tarifs annoncés sont de **12 € pour un adulte**, **10 € pour une personne accréditée** et **8 € pour un enfant de moins de 14 ans**.

C'est le choix le plus simple si l'on cherche une sortie pensée explicitement comme un grand rendez-vous familial, avec écran géant et accompagnement musical en direct.

## La conférence Chaplin du 14 octobre est complète

La Master Class Famille [« La mécanique du rire chez Charlie Chaplin »](https://www.festival-lumiere.org/la-mecanique-du-rire-chez-charlie-chaplin) est prévue **mercredi 14 octobre à 14 h 30**, dans les salons de l'Hôtel de Ville de Lyon. Elle est annoncée **à partir de 5 ans**, gratuite, avec un goûter offert aux enfants.

Mais il ne faut plus la présenter comme une option immédiatement réservable : le [formulaire officiel de la Ville de Lyon](https://inscriptions.lyon.fr/inscriptionSimple/InscriptionSimple/jsp/site/Portal.jsp?id_form=2823&page=appointment&view=getAppointmentFormFirstStep) indique actuellement **« Complet »** pour le créneau de 14 h 30 à 16 h 30. Vérifiez à nouveau le formulaire avant de vous déplacer au cas où des places seraient remises à disposition.

## Laurel & Hardy le 17 octobre : plus court et en salle de cinéma

Le [programme Laurel & Hardy](https://www.festival-lumiere.org/samedi-17-octobre-2026) commence **samedi 17 octobre à 14 h 30 au Pathé Bellecour**. Quatre courts métrages sont réunis sur **1 h 15**, avec accompagnement au piano par Fred Escoffier.

La billetterie classe ces ciné-concerts au piano parmi les séances spéciales : **10 € au tarif normal**, **7 € pour les accrédités** et **6 € pour les moins de 14 ans**. Le programme officiel le présente comme une découverte du burlesque à faire en famille, sans indiquer d'âge minimum pour cette séance.

Par rapport à Chaplin, c'est une formule plus courte et moins chère, dans une salle de cinéma classique plutôt que dans la grande Halle Tony Garnier.

## Quel billet choisir ?

Pour un enfant de moins de 14 ans, utilisez directement le **tarif enfant** : 8 € pour Chaplin et 6 € pour Laurel & Hardy.

L'[accréditation Lumière 2026](https://www.festival-lumiere.org/accreditations-2026) est gratuite pour les moins de 26 ans, sur justificatif. Elle donne accès aux tarifs accrédités sur les séances concernées. Pour un enfant de moins de 14 ans, le tarif enfant reste toutefois plus avantageux sur ces deux ciné-concerts.

Le festival recommande d'acheter les billets à l'avance. Les places sont garanties jusqu'à **15 minutes avant le début de la séance**. Un billet acheté en ligne peut être présenté sur smartphone ; il n'est pas nécessaire de le retirer en salle.

## Si vous restez à Lyon

Pour une famille qui transforme le festival en week-end, le [MEININGER Hotel Lyon Centre Berthelot](https://www.booking.com/hotel/fr/meininger-lyon-centre-berthelot.fr.html) propose des chambres familiales et une cuisine commune. Vérifiez les disponibilités et les conditions pour vos dates avant de réserver.

Pour ajouter une autre sortie au séjour sans refaire un programme complet de Lyon, notre guide [Mini World Lyon en famille](https://www.fam-space.fr/articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/) détaille les tarifs, la durée de visite et les conseils pratiques.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/vie-pratique/location-de-voiture-a-lyon-avec-des-enfants-ce-qu-il-faut-verifier-avant-de-reserver/ | Location de voiture à Lyon avec des enfants: ce qu'il faut vérifier avant de réserver | vie-pratique | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-circa-2026-a-auch-avec-des-enfants-quoi-reserver-et-quel-budget-prevoir/ | Festival Circa 2026 à Auch avec des enfants: quoi réserver et quel budget prévoir | evenements | Auch, Gers, Occitanie
- /articles/bons-plans/musees-des-hauts-de-seine-en-famille-les-bons-plans-pour-payer-moins/ | Musées des Hauts-de-Seine en famille: les bons plans pour payer moins | bons-plans | Boulogne-Billancourt, Hauts-de-Seine, Île-de-France
- /articles/evenements/les-expressifs-2026-a-poitiers-trois-jours-de-spectacles-gratuits/ | Les Expressifs 2026 à Poitiers: trois jours de spectacles gratuits | evenements | Poitiers, Vienne, Nouvelle-Aquitaine
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | Vacances de la Toussaint 2026 à la Cité des sciences: les ateliers numériques gratuits avec des enfants | sorties | Paris, Paris, Île-de-France
- /articles/bons-plans/guedelon-en-famille-a-petit-budget-les-bons-plans-pour-la-visite/ | Guédelon en famille à petit budget: les bons plans pour la visite | bons-plans | Treigny-Perreuse-Sainte-Colombe, Yonne, Bourgogne-Franche-Comté
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/parentalite/cafe-papote-a-lyon-4e-ou-echanger-gratuitement-avec-d-autres-parents/ | Café Papote à Lyon 4e: où échanger gratuitement avec d'autres parents | parentalite | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/maison/decheteries-mobiles-a-lyon-que-peut-on-deposer-et-quand-preferer-une-decheterie-fixe/ | Déchèteries mobiles à Lyon: que peut-on déposer et quand préférer une déchèterie fixe? | maison | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/bons-plans/mini-world-lyon-en-famille-tarifs-duree-et-conseils-pour-la-visite/ | Mini World Lyon en famille: tarifs, durée et conseils pour la visite | bons-plans | Vaulx-en-Velin, Rhône, Auvergne-Rhône-Alpes
- /articles/cuisine/a-claveisolles-decouvrir-comment-le-lait-de-chevre-devient-fromage-avec-les-enfants/ | À Claveisolles, découvrir comment le lait de chèvre devient fromage avec les enfants | cuisine | Claveisolles, Rhône, Auvergne-Rhône-Alpes
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | Monument Jeu d’Enfant au château d’Angers: dragons et ateliers le 17 octobre 2026 | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | Monument jeu d'enfant 2026 au château de Vincennes: quel atelier choisir ? | evenements | Vincennes, Val-de-Marne, Île-de-France
- /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | Nuits Indiennes 2026-2027 au Jardin d’Acclimatation: billets et horaires en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-au-chateau-de-grignan-dates-tarifs-et-visite-en-famille/ | Noël 2026 au château de Grignan: dates, tarifs et visite en famille | evenements | Grignan, Drôme, Auvergne-Rhône-Alpes
- /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | Día de los Muertos 2026 au Jardin d’Acclimatation: programme, billets et tailles | evenements | Paris, Paris, Île-de-France
- /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | Mondial de l’Auto 2026 avec des enfants: billets, horaires et créneaux | evenements | Paris, Paris, Île-de-France
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/marche-de-noel-de-lille-2026-en-famille-village-grande-roue-et-infos-pratiques/ | Marché de Noël de Lille 2026 en famille: village, Grande Roue et infos pratiques | evenements | Lille, Nord, Hauts-de-France
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | Monument jeu d'enfant 2026 à la Villa Cavrois: énigme, mosaïque ou linogravure? | evenements | Croix, Nord, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/dia-de-los-muertos-2026-au-jardin-d-acclimatation-billets-et-animations-en-famille/ | 2026-10-08T14:56:52.034Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/mondial-de-l-auto-2026-a-paris-avec-des-enfants-quel-jour-billet-et-creneau-choisir/ | 2026-10-06T19:20:39.093Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-villa-cavrois-quelle-activite-choisir-selon-l-age/ | 2026-10-04T19:31:30.376Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-d-angers-quelle-animation-dragon-choisir/ | 2026-10-10T08:38:56.921Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-au-chateau-de-vincennes-quel-atelier-choisir/ | 2026-10-09T18:35:04.031Z
- opportunity | /articles/evenements/nuits-indiennes-2026-2027-au-jardin-d-acclimatation-en-famille/ | 2026-10-09T14:37:47.734Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-a-la-cite-des-sciences-quels-ateliers-choisir-selon-l-age/ | 2026-10-05T11:24:52.310Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
