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
title: "Festival du Film pour Enfants 2026 en Isère: films, ateliers et tarifs"
subtitle: "Du 19 au 28 octobre à Vizille et Villard-Bonnot: repérer une séance selon l'âge et réserver"
summary: "Festival du Film pour Enfants en Isère du 19 au 28 octobre 2026: films dès 3 ans, séances vérifiées à Vizille et Villard-Bonnot, ateliers et billets à 5 €."
category: evenements
location:
  city: Vizille
  department: Isère
  region: Auvergne-Rhône-Alpes
keywords:
  - festival du film pour enfants 2026
  - cinéma enfants Vizille Villard-Bonnot
  - festival film enfants 2026 séances ateliers
sources:
  - title: Festival du Film pour Enfants - programmation et séances à Vizille
    url: https://www.festivaldufilmpourenfants.fr/agenda-ffe-vizille/
  - title: Festival du Film pour Enfants - séances à Villard-Bonnot
    url: https://www.festivaldufilmpourenfants.fr/agenda-villard-bonnot/
  - title: Festival du Film pour Enfants - infos, tarifs et accès
    url: https://www.festivaldufilmpourenfants.fr/infos-et-tarifs/
  - title: Festival du Film pour Enfants - questions pratiques et réservations
    url: https://www.festivaldufilmpourenfants.fr/questions-frequemment-posees/
  - title: Festival du Film pour Enfants - animations à Vizille
    url: https://www.festivaldufilmpourenfants.fr/les-animations-du-festival/
  - title: Festival du Film pour Enfants - animations à Villard-Bonnot
    url: https://www.festivaldufilmpourenfants.fr/les-animations-du-festival-a-villard-bonnot/
  - title: Ville de Vizille - édition 2026 du festival
    url: https://www.ville-vizille.fr/agenda/39650/12876-festival-du-film-pour-enfants.htm
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs
  decision: Choisir une séance réellement adaptée à l'âge entre les deux cinémas, repérer les ateliers et savoir comment réserver au prix annoncé sans se tromper de lieu ou de date.
  affiliationPotential: "Pas de billetterie partenaire du festival vérifiée: ne pas substituer une billetterie générique. Des hébergements à Vizille figurent sur Booking.com (https://www.booking.com/city/fr/vizille.fr.html), piste secondaire seulement pour des familles venues plusieurs jours, sous réserve de vérifier la disponibilité et les critères familiaux."
  gsc:
    retrievedAt: 2026-10-17T09:26:43.000Z
    dataThrough: 2026-10-14
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Festival du Film pour Enfants - programme 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-28
---

Du **lundi 19 au mercredi 28 octobre 2026**, la **28e édition du Festival du Film pour Enfants** réunit deux cinémas de l'Isère: **Le Jeu de Paume à Vizille** et **l'Espace Aragon à Villard-Bonnot**. Le thème « De la page à l'image » met à l'honneur les adaptations de livres. Une séance courte pour un enfant de 3 ans, un film d'aventure pour un écolier et un atelier pratique ne se choisissent pas de la même façon: **le lieu, l'âge indiqué et la durée** comptent autant que le titre.

## Quel film choisir selon l'âge?

La programmation est organisée en cinq sections. **Le Coin des tout-petits** propose des films pour les **3-6 ans**. Les films du **Thème** visent globalement les **8-12 ans**, même si certains titres ont un âge conseillé plus bas. **Les Animés** s'adressent surtout aux **12 ans et plus**; les sections **À l'affiche** et **La Malle aux trésors** couvrent des âges variés. Il faut donc vérifier chaque séance individuellement.

Quelques exemples concrets dans les agendas 2026:

- **Dès 3 ans, à Vizille:** *Les Toutes Petites Créatures 2* (**38 min**) le **mercredi 21 octobre à 10h**, salle 2. Cette projection donne accès, juste après le film, à un **atelier créatif gratuit de 30 min**, sans réservation supplémentaire. Le même film est programmé à **Villard-Bonnot le 21 octobre à 10h30**, sans présumer que l'atelier de Vizille s'y déroule aussi.
- **Dès 3 ans, dans les deux villes:** *Un amour d'épouvantail* (**44 min**), à **Villard-Bonnot mardi 20 octobre à 10h30**, puis à **Vizille jeudi 22 octobre à 10h30**. Un format plus facile à envisager pour une première sortie que les longs métrages de plus d'une heure et demie.
- **Dès 6 ans, à Vizille:** *Le Robot sauvage* (**1h42**) le **lundi 19 octobre à 11h45**, salle 1. L'âge conseillé est bien de 6 ans, mais la durée peut peser pour un enfant peu habitué au cinéma.
- **Dès 7 ans, à Vizille:** *Fantastic Mr Fox* (**1h28**) le **mercredi 21 octobre à 14h**, salle 2, adaptation du roman de Roald Dahl.
- **Une autre formule à Villard-Bonnot:** *Contes et silhouettes*, **ciné-concert dès 4 ans** le **mardi 27 octobre à 10h30**, salle 1, mêlant courts métrages d'ombres animées et guitare en direct, au tarif de **5 €**.

Il s'agit d'une **sélection de repères**, pas de la totalité des séances: un même film peut être projeté plusieurs fois et dans les deux cinémas. La programmation du jour et la salle exacte restent à vérifier avant l'achat.

## Ateliers: lesquels réserver, lesquels sont en accès libre?

Les activités ne suivent pas toutes la même règle. À **Villard-Bonnot**, l'**atelier Table Mash-Up**, pour les **6 ans et plus**, est annoncé le **mardi 20 octobre à 10h et 10h45**. Il permet de découvrir le montage d'un petit film et nécessite une **inscription par mail** à **animation.espacearagon@le-gresivaudan.fr**.

À **Vizille**, l'**atelier doublage**, dès **8 ans**, est proposé le **vendredi 23 octobre de 14h à 17h**, en **accès libre sans réservation**. Pour *Les Toutes Petites Créatures 2*, l'atelier créatif du 21 octobre suit directement la projection de 10h: **l'achat du billet de cette séance donne accès à l'activité**.

D'autres ateliers et rencontres sont prévus tout au long des dix jours, notamment dessin manga, stop motion et échanges avec des professionnels. Les animations annoncées comme gratuites ne dispensent pas d'une éventuelle **inscription préalable** lorsqu'elle est précisée. À Vizille, l'organisateur annonce également un **goûter quotidien entre 16h et 17h**, dans la cabane de Totoro.

## Billets: 5 € pour chaque séance, avec quelques modalités à connaître

Le tarif est **5 € par personne et par projection dans les deux cinémas**, quelle que soit la durée du film. Pour **deux adultes et deux enfants**, une séance à quatre revient donc à **20 €**.

La réservation en ligne passe par l'achat de **coupons de séance**. Après paiement par carte bancaire et création d'un compte, vous recevez les billets avec **QR code par courriel**; vous pouvez les présenter sur smartphone ou les imprimer. En cas de difficulté, contrôlez les courriels indésirables et conservez les coupons avant de partir. Un achat au guichet reste possible **dans la limite des places disponibles**.

Sur place sont acceptés notamment **espèces, chèques et carte bancaire**, ainsi que la **Carte Tattoo Isère**, les CinéChèques et les chèques vacances selon les modalités indiquées. La **carte Pass'Région** fonctionne différemment: **une place débitée par carte et par séance, avec 1 € supplémentaire**. Pour les conditions de l'aide départementale, notre guide [Carte Tattoo Isère 2026-2027](/articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/) détaille son fonctionnement.

Les projections **commencent à l'heure, sans publicité**. Le festival peut refuser l'entrée au-delà de quelques minutes de retard; mieux vaut arriver avant l'horaire inscrit sur le coupon.

## Deux cinémas: adresse, salles et accessibilité

**À Vizille**, Le Jeu de Paume se trouve **square de la Révolution, 38220 Vizille**. Les salles **1 et 2** sont dans le cinéma; les salles **3 et 4**, temporaires pendant le festival, sont installées à proximité, à environ **30 mètres**. Leur accès implique de traverser une route: les jeunes enfants doivent rester accompagnés. Le festival indique un **accès pour les personnes à mobilité réduite**. Le guichet ouvre de **9h30 à 12h**, puis de **13h à 17h30**. Renseignements: **06 72 03 83 04**.

**À Villard-Bonnot**, l'Espace Aragon est au **19 bis boulevard Jules Ferry, 38190 Villard-Bonnot**. Ses **deux salles** et son espace d'exposition sont annoncés accessibles aux personnes à mobilité réduite. Pendant le festival, le cinéma ouvre à **9h30** et reste ouvert jusqu'à **20h30**. Renseignements: **04 76 71 22 51**.

Si vous venez en voiture, le festival recommande de prévoir environ **15 minutes pour stationner et rejoindre la salle**. Pour un séjour de plusieurs jours consacré aux deux sites, choisir un hébergement dans le secteur de Vizille ou de la vallée du Grésivaudan peut éviter de longs allers-retours; vérifiez surtout le trajet réel jusqu'à **chaque** cinéma avant de réserver.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/mon-premier-festival-2026-paris-film-age/ | Mon Premier Festival 2026 à Paris: quel film choisir selon l'âge? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-film-lama-2026-famille/ | Festival du Film de Lama 2026 en Corse: préparer une soirée cinéma en famille | evenements | Lama, Haute-Corse, Corse
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | Lire en Poche 2026 à Gradignan avec des enfants: organiser une journée sans perdre les ateliers | evenements | Gradignan, Gironde, Nouvelle-Aquitaine
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/cine-plage-saint-cyprien-lecci-2026/ | Ciné-Plage Lecci 2026: trois films gratuits à Saint-Cyprien | evenements | Lecci, Corse-du-Sud, Corse
- /articles/evenements/hop-hop-hop-festival-2026-en-famille-quel-jour-choisir/ | Hop Hop Hop Festival 2026 en famille: quel jour choisir? | evenements | Saint-Cirgues, Lot, Occitanie
- /articles/voyages/chamrousse-en-famille-quel-secteur-choisir-pour-l-hiver-2026-2027/ | Chamrousse en famille: quel secteur choisir pour l'hiver 2026-2027? | voyages | Chamrousse, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/walibi-rhone-alpes-en-famille-quel-billet-choisir-selon-la-taille-des-enfants/ | Walibi Rhône-Alpes en famille: attractions, tailles et billets en 2026 | sorties | Les Avenières Veyrins-Thuellin, Isère, Auvergne-Rhône-Alpes
- /articles/bons-plans/carte-tattoo-isere-2026-2027-comment-obtenir-60-a-120-pour-les-activites-d-un-collegien/ | Carte Tattoo Isère 2026-2027: comment obtenir 60 à 120 € pour les activités d'un collégien | bons-plans | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/parentalite/laep-a-grenoble-ou-aller-avec-un-enfant-de-moins-de-6-ans/ | LAEP à Grenoble: où aller avec un enfant de moins de 6 ans? | parentalite | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/noix-de-grenoble-fraiche-ou-seche-laquelle-choisir-pour-cuisiner/ | Noix de Grenoble fraîche ou sèche: laquelle choisir pour cuisiner? | cuisine | Vinay, Isère, Auvergne-Rhône-Alpes
- /articles/maison/maison-de-vacances-a-lans-en-vercors-en-famille-les-criteres-qui-changent-vraiment-le-sejour/ | Maison de vacances à Lans-en-Vercors en famille: les critères qui changent vraiment le séjour | maison | Lans-en-Vercors, Isère, Auvergne-Rhône-Alpes
- /articles/cuisine/3-recettes-de-l-isere-faciles-a-preparer-en-famille/ | 3 recettes de l'Isère faciles à préparer en famille | cuisine | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/sorties/ete-oh-parcs-grenoble-2026-famille/ | L’Été Oh! Parcs Grenoble 2026: horaires et activités gratuites | sorties | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- refresh | /articles/evenements/lire-en-poche-2026-a-gradignan-avec-des-enfants-organiser-une-journee-sans-perdre-les-ateliers/ | 2026-10-06T12:23:52.449Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/mon-premier-festival-2026-paris-film-age/ | 2026-10-03T06:21:55.257Z
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
