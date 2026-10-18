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
title: "Foire du livre de Brive 2026: quelle visite choisir avec les enfants?"
subtitle: Du 6 au 8 novembre, jeunesse et BD aux Trois Provinces, dédicaces gratuites et astuces pour éviter la foule
summary: "Dates, horaires, espaces jeunesse et BD, auteurs, accès gratuit et conseils avec poussette: préparez la Foire du livre de Brive 2026 en famille."
category: evenements
location:
  city: Brive-la-Gaillarde
  department: Corrèze
  region: Nouvelle-Aquitaine
keywords:
  - Foire du livre Brive 2026 enfants
  - Foire du livre Brive jeunesse BD
  - Foire du livre Brive 6 7 8 novembre 2026
  - Foire du livre Brive entrée gratuite horaires
sources:
  - title: "Ville de Brive: 44e Foire du livre, dates et implantation"
    url: https://www.brive.fr/44e-foire-livre-brive/
  - title: "Foire du livre de Brive: FAQ 2026, entrée, navette, bébés, accès et restrictions"
    url: https://www.foiredulivredebrive.net/faq/
  - title: "Foire du livre de Brive: liste des auteurs 2026 par jour"
    url: https://www.foiredulivredebrive.net/auteurs-foire-brive/
  - title: "Brive Tourisme: programme 2026 et rencontres annoncées"
    url: https://www.brive-tourisme.com/fr/agenda/grands-rendez-vous/foire-du-livre-brive/programme/
  - title: "Brive Tourisme: invités jeunesse et BD 2026"
    url: https://www.brive-tourisme.com/fr/agenda/grands-rendez-vous/foire-du-livre-brive/auteurs/
  - title: "Brive Tourisme: informations pratiques, lieux et horaires"
    url: https://www.brive-tourisme.com/fr/agenda/grands-rendez-vous/foire-du-livre-brive/infos-pratiques/
  - title: "Tourisme Corrèze: ibis Brive Centre et chambres familiales"
    url: https://www.tourismecorreze.com/fr/tourisme_detail/hotel_ibis_brive_centre.html
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants
  decision: Choisir le jour et le parcours les plus adaptés aux enfants pour profiter de la Foire du livre 2026, en distinguant accès gratuit, rencontres annoncées et horaires ou réservations restant à confirmer.
  affiliationPotential: "Entrée à la Foire gratuite, sans billetterie à pousser. Hébergement naturel pour un week-end: ibis Brive Centre, référencé sur Booking.com avec chambres familiales; vérifier capacité, disponibilité et prix aux dates voulues avant toute recommandation."
  gsc:
    retrievedAt: 2026-10-18T05:46:43.422Z
    dataThrough: 2026-10-15
    signal: seasonal_opportunity
    basis: "Opportunité saisonnière vérifiée via « Ville de Brive: 44e Foire du livre, dates et espaces »; aucune page forte GSC n'est requise."
eventEndsAt: 2026-11-08
---

Du **vendredi 6 au dimanche 8 novembre 2026**, la 44e Foire du livre de Brive accueille les familles gratuitement dans ses espaces de dédicaces. Pour les enfants, le bon point de départ est **l'Espace des Trois Provinces**, consacré à la littérature jeunesse, aux ados et à la BD. Inutile de prévoir trois journées: une matinée bien choisie peut suffire pour feuilleter, rencontrer un auteur et découvrir une animation.

Le choix du jour compte davantage que la quantité de stands visités. Voici comment organiser une sortie agréable, sans promettre une dédicace dont l'horaire n'est pas encore confirmé.

## Vendredi, samedi ou dimanche: quel jour privilégier?

- **Vendredi 6 novembre, de 10 h à 20 h:** une possibilité pour les familles disponibles en journée, notamment si elles souhaitent profiter de l'ouverture de la Foire. Vérifiez d'abord la présence de l'auteur que votre enfant veut rencontrer.
- **Samedi 7 novembre, de 9 h à 20 h:** pratique pour venir sans poser de congé, mais c'est **la journée la plus fréquentée**, selon l'office de tourisme. Prévoyez une visite courte, des pauses et de la souplesse pour les files d'attente.
- **Dimanche 8 novembre, de 9 h à 18 h:** **le dimanche matin est recommandé par Brive Tourisme pour éviter la foule**. C'est un bon créneau avec de jeunes enfants, sous réserve que les rencontres recherchées aient bien lieu ce jour-là.

Si une signature précise motive le déplacement, ne choisissez pas uniquement d'après l'affluence: la [liste officielle des auteurs 2026](https://www.foiredulivredebrive.net/auteurs-foire-brive/) permet de filtrer les jours de présence et est actualisée régulièrement.

## Commencer aux Trois Provinces pour les livres jeunesse et la BD

L'**Espace des Trois Provinces**, avenue Jacques-et-Bernadette-Chirac, rassemble les auteurs et illustrateurs jeunesse, ado et BD. L'espace Professeur Jean-Paul Escande accueille des rendez-vous autour de la BD, de la poésie et de la jeunesse; la **Maison des Trois Provinces** est dédiée aux ateliers jeunesse et BD. Pour une première visite avec des enfants, concentrez-vous sur ce site plutôt que de traverser toute la Foire.

La **Halle Georges Brassens**, place du 14-Juillet, est principalement consacrée à la littérature générale. Elle peut intéresser les ados et les parents qui suivent un écrivain particulier. Les deux pôles sont séparés d'**environ dix minutes à pied** par la voie verte longeant la Corrèze; une **navette électrique gratuite** circule aussi entre eux pendant les trois jours. Les rendez-vous annexes peuvent se tenir au théâtre, à la médiathèque, au musée Labenche ou au cinéma Rex: vérifiez leur lieu avant de partir.

## Quels auteurs et animations regarder avec les enfants?

**Marie-Aude Murail**, grande invitée jeunesse, est annoncée pour un entretien sur son parcours et une **lecture dessinée de Sauveur & Fils avec Quentin Zuttion**. Les lecteurs de BD pourront s'intéresser à **Joann Sfar**, invité d'honneur de ce domaine, avec notamment un **concert dessiné** annoncé. Les enfants qui préfèrent les albums illustrés, les romans ou les mangas trouveront également de nombreux auteurs dans les espaces jeunesse et BD.

La [présentation des invités 2026](https://www.brive-tourisme.com/fr/agenda/grands-rendez-vous/foire-du-livre-brive/auteurs/) confirme ces temps forts, mais **ne suffit pas à garantir le jour, l'heure ou la possibilité d'assister à chaque rencontre**. Le [programme complet](https://www.brive-tourisme.com/fr/agenda/grands-rendez-vous/foire-du-livre-brive/programme/) est encore annoncé comme en attente sur la page touristique consultée. Recontrôlez-le peu avant votre venue, puis choisissez une rencontre principale et gardez le reste de la visite libre.

## Entrée gratuite, mais attention aux activités annexes

L'**entrée dans les espaces de dédicaces est libre, gratuite et sans réservation**. Cela ne signifie pas que toutes les propositions organisées autour de la Foire le sont: certaines rencontres à la médiathèque ou au musée demandent une inscription; les projections du **cinéma Rex** sont payantes et nécessitent une réservation. Les achats de livres restent évidemment à votre charge.

Pour une dédicace, vous pouvez apporter jusqu'à **trois livres personnels**, à présenter à l'entrée pour identification. Un achat sur place n'est donc pas indispensable pour venir avec un livre déjà possédé, mais l'accès à un auteur reste soumis à sa présence et à l'attente. La [FAQ de l'organisateur](https://www.foiredulivredebrive.net/faq/) précise les règles et les modalités des animations.

## Poussette, repas et déplacements: les détails utiles

Les **poussettes sont autorisées**. L'organisateur annonce, sur les deux sites principaux, des espaces pour **changer ou allaiter un bébé**, ainsi que des toilettes et des zones de repos. Aux Trois Provinces, des foodtrucks sucrés et salés, des bancs et des espaces abrités permettent de faire une pause sans retourner en centre-ville.

Pour entrer, prévoyez un **petit sac à dos de 30 litres maximum** et une **gourde d'un litre maximum**. Les grands bagages, contenants en verre et trottinettes ne sont pas autorisés. Les **enfants et adolescents jusqu'à 16 ans doivent être accompagnés d'un adulte**. Un tampon obtenu après une première entrée permet d'emprunter des accès plus rapides sur les autres sites de la Foire.

Si vous venez en voiture, le **parking des Trois Provinces est annoncé gratuit**. Pour la Guierle, les indications de gratuité diffèrent selon les pages d'information: vérifiez les conditions actualisées plutôt que de compter sur une journée précise. Des places PMR et des entrées dédiées sont prévues sur les deux sites principaux. Train, bus et marche restent de bonnes solutions pour éviter les déplacements en voiture dans le centre.

## Prolonger la Foire par un week-end à Brive

Pour les familles venant de loin, l'[ibis Brive Centre sur Booking.com](https://www.booking.com/hotel/fr/ibis-brive-brive.fr.html), situé rue Marcelin-Roche à proximité du centre historique, dispose de quelques **chambres familiales**. Comparez leur capacité réelle avec l'âge et le nombre de vos enfants, puis vérifiez **prix, disponibilité et annulation** pour les nuits du 6 et du 7 novembre: aucune place n'est garantie à ces dates.

Si vous voyagez avec un tout-petit et souhaitez prévoir autre chose que la Foire, notre [guide pour un week-end à Brive avec un bébé](/articles/parentalite/premier-week-end-a-brive-avec-un-bebe-ou-dormir-et-quoi-faire/) propose d'autres idées adaptées à un séjour familial.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/p-tits-brunchs-anti-gaspi-a-bar-le-duc-quelles-dates-choisir-avec-les-enfants/ | P'tits brunchs anti-gaspi à Bar-le-Duc: quelles dates choisir avec les enfants? | evenements | Bar-le-Duc, Meuse, Grand Est
- /articles/evenements/partir-en-livre-2026-en-famille/ | Partir en Livre 2026: trouver une animation jeunesse avant le 19 juillet | evenements
- /articles/bons-plans/pass-correzien-comment-profiter-d-une-entree-offerte-a-3/ | Pass Corrézien: comment profiter d'une entrée offerte à 3 | bons-plans | Tulle, Corrèze, Nouvelle-Aquitaine
- /articles/bons-plans/musees-gratuits-autour-de-rouen-lesquels-choisir-avec-des-enfants/ | Musées gratuits autour de Rouen: lesquels choisir avec des enfants ? | bons-plans | Rouen, Seine-Maritime, Normandie
- /articles/evenements/course-des-chateaux-d-ottrott-2026-quelles-epreuves-choisir-pour-les-enfants/ | Course des Châteaux d'Ottrott 2026: quelles épreuves choisir pour les enfants? | evenements | Ottrott, Bas-Rhin, Grand Est
- /articles/sorties/parc-des-oiseaux-en-famille-billets-horaires-et-visite-avec-des-enfants/ | Parc des Oiseaux en famille: billets, horaires et visite avec des enfants | sorties | Villars-les-Dombes, Ain, Auvergne-Rhône-Alpes
- /articles/bons-plans/vira-vasa-a-hossegor-quelle-chasse-au-tresor-gratuite-choisir/ | Vira & Vasa à Hossegor: quelle chasse au trésor gratuite choisir? | bons-plans | Soorts-Hossegor, Landes, Nouvelle-Aquitaine
- /articles/parentalite/premier-week-end-a-brive-avec-un-bebe-ou-dormir-et-quoi-faire/ | Brive avec un bébé: voie verte, musée Labenche et lac du Causse | parentalite | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/sorties/tours-de-merle-en-famille-visite-libre-guidee-ou-theatralisee-en-2026/ | Tours de Merle en famille: visite libre, guidée ou théâtralisée en 2026 ? | sorties | Saint-Geniez-ô-Merle, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire

### Historique Radar lié

- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
