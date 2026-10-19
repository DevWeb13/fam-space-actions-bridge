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
title: "Marché de Noël de Mulhouse 2026 en famille: horaires, étoffe et animations"
subtitle: Le bon parcours autour de la place de la Réunion, les activités selon l'âge et les dépenses à anticiper.
summary: "Du 20 novembre au 27 décembre 2026, préparez une sortie en famille au marché de Noël de Mulhouse: horaires, étoffe Jardin d'hiver, animations, stationnement et hébergement."
category: evenements
location:
  city: Mulhouse
  department: Haut-Rhin
  region: Grand Est
keywords:
  - marché de Noël Mulhouse 2026 famille
  - Noël Mulhouse 2026 enfants
  - étoffe Jardin d'hiver Mulhouse
  - marché de Noël Mulhouse horaires
sources:
  - title: Mulhouse Alsace Agglomération - marché de Noël 2026, étoffe, P+Tram
    url: https://mag.mulhouse-alsace.fr/evenement/marche-de-noel-a-mulhouse-2026/
  - title: Noël à Mulhouse - informations pratiques 2026
    url: https://www.noel-mulhouse.fr/infos-pratiques-marche-de-noel-de-mulhouse/
  - title: Noël à Mulhouse - programme officiel 2026
    url: https://www.noel-mulhouse.fr/programme/
  - title: Mulhouse Tourisme - marché de Noël principal
    url: https://www.tourisme-mulhouse.com/a-faire-sur-place/agenda-et-grand-evenements/tout-lagenda/marche-de-noel-de-mulhouse-mulhouse-fr-3839632/
  - title: Noël à Mulhouse - Jeux de Noël à la Maison du Patrimoine
    url: https://www.noel-mulhouse.fr/%C3%A9v%C3%A8nements/jeux-de-noel/?occurrence=2026-11-25&time=1795611600
  - title: Noël à Mulhouse - visites découvertes La magie de Noël
    url: https://www.noel-mulhouse.fr/%C3%A9v%C3%A8nements/visites-decouvertes-la-magie-de-noel/?occurrence=2026-11-21&time=1795280400
  - title: Noël à Mulhouse - Marché Secret
    url: https://www.noel-mulhouse.fr/%C3%A9v%C3%A8nements/le-marche-secret/?occurrence=2026-11-20
  - title: Mulhouse Tourisme - marché du Musée de l'Impression sur Étoffes
    url: https://www.tourisme-mulhouse.com/a-faire-sur-place/agenda-et-grand-evenements/tout-lagenda/marche-de-noel-du-musee-de-limpression-sur-etoffes-mulhouse-fr-3893649/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: marche-de-noel-de-mulhouse-2026-en-famille-dates-etoffe-et-parcours-avec-les-enfants
  decision: Choisir la bonne date, les haltes et les animations adaptées à l'âge des enfants, organiser un parcours court autour de la place de la Réunion et prévoir le coût réel d'une journée ou d'un séjour.
  affiliationPotential: "Entrée libre au marché principal, sans billetterie partenaire utile. Hébergement vérifié sur Booking.com: La Maison Hôtel Mulhouse Centre, 15 rue Lambert, à proximité immédiate de la place de la Réunion, avec chambres familiales et quadruples. Vérifier capacité, tarif, disponibilités et dépôt de garantie pour les dates souhaitées."
  gsc:
    retrievedAt: 2026-10-19T04:30:00.000Z
    dataThrough: 2026-10-16
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Mulhouse Alsace Agglomération - Marché de Noël à Mulhouse 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-27
---

Du **20 novembre au 27 décembre 2026**, le marché de Noël de Mulhouse s'installe dans le centre historique, autour de la place de la Réunion. On peut y découvrir les chalets, les illuminations et l'étoffe spécialement créée pour l'édition 2026 sans acheter de billet: **l'accès au marché principal est gratuit**. Avec des enfants, le choix important est plutôt de prévoir une balade courte ou d'ajouter une animation adaptée à leur âge, certaines activités se déroulant ailleurs et étant payantes.

## Quand venir, et jusqu'à quelle heure?

Le marché principal est annoncé **du vendredi 20 novembre au dimanche 27 décembre**, avec fermeture le **25 décembre**. Le site de l'événement [Noël à Mulhouse](https://www.noel-mulhouse.fr/infos-pratiques-marche-de-noel-de-mulhouse/) affiche les horaires suivants:

- **Du lundi au jeudi:** 11h-20h.
- **Du vendredi au dimanche:** 10h-21h.
- **Jeudi 24 décembre:** fermeture à 18h.
- **Samedi 26 décembre:** ouverture à 12h, fermeture à 21h.
- **Dimanche 27 décembre:** fermeture à 18h.

Il existe une différence entre les sources institutionnelles: [Mulhouse Alsace Agglomération](https://mag.mulhouse-alsace.fr/evenement/marche-de-noel-a-mulhouse-2026/) annonce le vendredi à partir de 11h et le dimanche jusqu'à 20h, contre 10h et 21h sur le site dédié. Pour éviter une arrivée trop tôt ou trop tard ces deux jours, contrôlez les horaires publiés peu avant votre visite.

Le site de Noël à Mulhouse précise également qu'un **marché situé place de la Concorde reste ouvert jusqu'au 29 décembre**. Cette prolongation ne concerne pas l'ensemble du marché de la place de la Réunion.

Pour une première sortie avec de jeunes enfants, arriver à l'ouverture laisse le temps de regarder les stands et de prendre une pause avant l'affluence de fin de journée. Les illuminations ont davantage d'intérêt à la tombée du jour, mais une visite uniquement en soirée sera moins souple si les enfants se fatiguent.

## Ce qu'il faut voir autour de la place de la Réunion

La place de la Réunion concentre les chalets, les décorations et l'un des signes distinctifs de Noël à Mulhouse: **l'étoffe de Noël**. Le motif 2026, baptisé **« Jardin d'hiver »**, a été conçu par Manon During et Julie Fouilland. Ses couleurs habillent les décors et certains objets artisanaux du marché.

Dans l'Hôtel de Ville, au rez-de-chaussée du Musée Historique, la **Boutique aux Étoffes** présente des créations réalisées avec ce tissu, ainsi que des objets de producteurs locaux. Elle est annoncée du 20 novembre au 27 décembre. C'est une halte concrète pour expliquer aux enfants pourquoi le textile occupe une place importante dans l'identité de Mulhouse; acheter un souvenir n'est pas obligatoire.

Pour une balade simple, commencez sur la place, regardez les chalets et la façade de l'Hôtel de Ville, puis rejoignez la Maison du Patrimoine, située **5 place Lambert**, si une activité du programme vous intéresse. Ce circuit reste concentré dans le centre ancien, sans imposer les grands musées de la ville.

## Quelles activités choisir selon l'âge?

Pour **les enfants à partir de 5 ans**, les **Jeux de Noël** de la Maison du Patrimoine permettent de découvrir les traditions locales au moyen d'un parcours familial. Le calendrier 2026 mentionne notamment les **25 novembre et 2 décembre**, de **13h à 18h30**. L'établissement indique une ouverture habituelle de 13h à 18h30 durant le marché, sauf les 25 et 26 décembre. Vérifiez les occurrences exactes avant de venir spécialement pour le jeu.

Autre possibilité sans billet de spectacle: la [chasse au trésor familiale](https://www.noel-mulhouse.fr/infos-pratiques-marche-de-noel-de-mulhouse/) consacrée aux artistes de Mulhouse. Son livret est annoncé **gratuit**, à retirer à l'office de tourisme ou à la Boutique aux Étoffes. C'est un bon fil conducteur pour des enfants qui préfèrent chercher des indices plutôt que parcourir les stands.

Pour **les enfants un peu plus grands qui aiment les histoires**, les visites découvertes **« La magie de Noël »** partent de la Maison du Patrimoine. Des créneaux sont annoncés à **17h-18h**, notamment les **21 et 28 novembre**. Le tarif communiqué est de **5 € au plein tarif**, **3 € au tarif réduit**, **12 € pour la formule famille** et **gratuit pour les moins de 12 ans**. Il s'agit d'une visite guidée, distincte de la promenade libre au marché.

Pour une **expérience immersive payante**, **Le Marché Secret** se tient au **Parc Jaquet** les vendredis et samedis de **17h à 21h**, les dimanches de **16h à 20h**. Le parcours dure environ **50 minutes** et l'organisateur le conseille **à partir de 4 ans**, avec des groupes de **25 personnes au maximum**. Les tarifs individuels affichés sont de **13,99 € dès 16 ans** et **9,99 € de 4 à 15 ans**; les moins de 4 ans sont annoncés gratuits, bien que l'expérience ne leur soit pas spécialement recommandée. Une formule famille est aussi mentionnée, mais son affichage ne permet pas d'en déduire clairement le total: comparez le prix réellement proposé pour votre groupe avant toute réservation.

Ces animations ne sont pas interchangeables: la chasse au trésor convient à une promenade autonome, la visite guidée demande de suivre un départ précis et l'expérience immersive occupe un créneau réservé. Le [programme officiel 2026](https://www.noel-mulhouse.fr/programme/) permet de vérifier les jours proposés.

## Et le marché de Noël du musée?

Le **Musée de l'Impression sur Étoffes**, au **14 rue Jean-Jacques Henner**, organise un autre marché intitulé **« Les Jardins de l'Art nouveau »**. Il est annoncé **du 14 novembre au 31 décembre 2026**, en général de **13h à 18h du mercredi au dimanche**, avec des ouvertures exceptionnelles les mardis de décembre. L'accès à ce **marché du musée est gratuit**, mais la **visite des collections est payante**: une fiche touristique annonce **9 € pour visiter le musée**. Contrôlez le tarif du musée avant d'acheter un billet, car ses autres pages peuvent présenter une tarification différente.

Ce lieu vaut le détour si la famille s'intéresse aux motifs textiles, mais il faut le prévoir comme une étape distincte et non comme un simple chalet supplémentaire de la place de la Réunion.

## Venir en train, en tram ou en voiture

La **gare centrale** permet de rejoindre le centre à pied ou en tram. Pour une sortie centrée sur les chalets, vous n'avez pas besoin de multiplier les trajets une fois arrivé dans le centre historique.

En voiture, la solution [**P+Tram annoncée par Mulhouse Alsace Agglomération**](https://mag.mulhouse-alsace.fr/evenement/marche-de-noel-a-mulhouse-2026/) peut être plus intéressante que le stationnement central: **2 € pour la journée** aux P+Tram **Nouveau Bassin** et **Université**, avec **un aller-retour en transports pour tous les occupants du véhicule, jusqu'à sept personnes**, à condition de voyager ensemble à l'aller et au retour. Les horaires d'accès aux parkings diffèrent, notamment le dimanche: vérifiez celui que vous choisissez.

Les parkings Centre, Porte Jeune, Réunion, Maréchaux et Porte Haute sont annoncés à **3 € pour quatre heures** sur la page de l'agglomération. Celle du site de Noël présente quelques autres montants: fiez-vous aux tarifs en vigueur à l'entrée du parking.

## Une journée suffit-elle ou faut-il dormir à Mulhouse?

Pour découvrir les chalets, l'étoffe et faire une animation, **une journée suffit**. Passer une nuit est surtout utile si vous venez de loin, souhaitez profiter des lumières en soirée sans trajet retour ou prévoyez une seconde journée de visites.

À proximité de la place de la Réunion, **[La Maison Hôtel Mulhouse Centre sur Booking.com](https://www.booking.com/hotel/fr/mulhousecentre.fr.html)**, au 15 rue Lambert, propose notamment des chambres triples et quadruples. Vérifiez la capacité autorisée avec l'âge des enfants, les conditions d'annulation et les prix pour vos dates exactes; la configuration d'une chambre ne garantit pas automatiquement l'accueil de toute composition familiale.

Si vous ajoutez la Cité du Train ou le Musée de l'Automobile, notre guide [**Mulhouse sans voiture avec des enfants: organiser deux jours**](/articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/) explique déjà comment répartir les musées et les trajets en tram. Pour une sortie complémentaire à petit budget, consultez aussi les [**trois musées gratuits à Mulhouse**](/articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/). Et si votre séjour privilégie les marchés du Haut-Rhin au-delà de Mulhouse, le guide des [**marchés de Noël de Colmar avec des enfants**](/articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/) prépare cette destination distincte.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/mulhouse-sans-voiture-avec-des-enfants-comment-organiser-2-jours/ | Mulhouse sans voiture avec des enfants: comment organiser 2 jours | voyages | Mulhouse, Haut-Rhin, Grand Est
- /articles/bons-plans/mulhouse-trois-musees-gratuits-pour-une-journee-culturelle-avec-des-enfants/ | Mulhouse: trois musées gratuits pour une journée culturelle avec des enfants | bons-plans | Mulhouse, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-limoges-2026-en-famille-marche-animations-et-idees-pour-un-week-end/ | Noël à Limoges 2026 en famille: marché, animations et idées pour un week-end | evenements | Limoges, Haute-Vienne, Nouvelle-Aquitaine
- /articles/voyages/marches-de-noel-de-colmar-avec-des-enfants-en-2026-1-ou-2-jours-et-ou-dormir/ | Marchés de Noël de Colmar avec des enfants en 2026: 1 ou 2 jours et où dormir | voyages | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/noel-a-trevarez-2026-en-famille-dates-horaires-et-reservation/ | Noël à Trévarez 2026 en famille: dates, horaires et réservation | evenements | Saint-Goazec, Finistère, Bretagne
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/activites/noel-2026-a-l-ecomusee-d-alsace-en-famille-quand-venir-et-que-prevoir/ | Noël 2026 à l'Écomusée d'Alsace en famille: quand venir et que prévoir? | activites | Ungersheim, Haut-Rhin, Grand Est
- /articles/evenements/repto-terra-expo-a-colmar-faut-il-y-aller-avec-des-enfants/ | Repto Terra Expo à Colmar: faut-il y aller avec des enfants? | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/sorties/parc-du-petit-prince-faut-il-prevoir-une-journee-entiere-avec-de-jeunes-enfants/ | Parc du Petit Prince: faut-il prévoir une journée entière avec de jeunes enfants? | sorties | Ungersheim, Haut-Rhin, Grand Est
- /articles/parentalite/laep-a-colmar-ou-aller-gratuitement-avec-un-enfant-de-0-a-6-ans/ | LAEP à Colmar: où aller gratuitement avec un enfant de 0 à 6 ans | parentalite | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/fanabriques-colmar-2026-famille/ | Fana'Briques 2026 à Colmar: un week-end LEGO en famille | evenements | Colmar, Haut-Rhin, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | Foire du livre de Brive 2026 en famille: dates, auteurs jeunesse et conseils de visite | evenements | Brive-la-Gaillarde, Corrèze, Nouvelle-Aquitaine
- /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille | evenements | Ermenonville, Oise, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/evenements/foire-du-livre-de-brive-2026-en-famille-quel-jour-venir-avec-les-enfants/ | 2026-10-18T16:46:58.413Z
- opportunity | /articles/evenements/halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets/ | 2026-10-18T12:12:00.071Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
