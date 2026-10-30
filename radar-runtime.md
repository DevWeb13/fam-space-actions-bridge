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
title: "Ateliers A'musées à La Rochelle : tissage ou mosaïque en décembre 2026 ?"
subtitle: "Deux séances familiales au musée du Nouveau Monde, les 6 et 21 décembre : âges, horaires, tarifs et réservation"
summary: Le 6 décembre, les enfants dès 7 ans découvrent le tissage lors d'un atelier gratuit. Le 21 décembre, les familles avec enfants dès 5 ans peuvent créer une mosaïque. Voici comment choisir et réserver sans confondre les tarifs.
category: activites
location:
  city: La Rochelle
  department: Charente-Maritime
  region: Nouvelle-Aquitaine
keywords:
  - ateliers A'musées La Rochelle décembre 2026
  - musée du Nouveau Monde atelier enfant Noël
  - Du fil à l'étoffe 6 décembre 2026
  - Splendeurs de verre 21 décembre 2026
sources:
  - title: Musée du Nouveau Monde - Ateliers A'musées octobre-décembre 2026
    url: https://museedunouveaumonde.larochelle.fr/un-avant-gout/en-ce-moment/evenement/ateliers-amusees-de-cet-ete
  - title: Infiniment Charentes - Du fil à l'étoffe, 6 décembre 2026
    url: https://www.infiniment-charentes.com/fiche-sit/animation-ateliers-amusees-un-dimanche-au-musee-8011010
  - title: Infiniment Charentes - Splendeurs de verre, 21 décembre 2026
    url: https://www.infiniment-charentes.com/fiche-sit/animation-ateliers-amusees-vacances-de-noel-au-musee-du-nouveau-monde-8010995
  - title: Musée du Nouveau Monde - Accès, tarifs et horaires
    url: https://museedunouveaumonde.larochelle.fr/preparer-la-visite/acces-tarifs-et-horaires
  - title: Musée du Nouveau Monde - Outils de visite et accessibilité
    url: https://museedunouveaumonde.larochelle.fr/preparer-la-visite/informations-pratiques/outils-de-visite
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: ateliers-a-musees-a-la-rochelle-en-decembre-2026-quelle-seance-choisir-en-famille
  decision: Choisir une séance réellement adaptée à l'âge de l'enfant, comprendre ce qui est gratuit ou payant et savoir comment réserver avant de se déplacer.
  affiliationPotential: "Pas de billetterie partenaire naturelle pour les ateliers, dont l'inscription se fait auprès du musée. Pour un séjour familial, Booking.com propose le Bel appartement - 2 chambres - Proche du vieux marché, avec cuisine, au centre de La Rochelle : https://www.booking.com/hotel/fr/bel-appartement-2-chambres-proche-du-vieux-marche.fr.html ; prix et disponibilité à vérifier aux dates choisies."
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Musée du Nouveau Monde - Ateliers A'musées octobre-décembre 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-21
---

Au musée du Nouveau Monde, à La Rochelle, deux ateliers familiaux sont prévus en décembre 2026. Ils durent chacun **1 h 30**, mais ne s'adressent pas tout à fait aux mêmes enfants : **tissage gratuit dès 7 ans le dimanche 6 décembre**, ou **création d'une mosaïque dès 5 ans le lundi 21 décembre**. Il faut s'inscrire auprès du musée avant de venir ; les places disponibles et les conditions de participation sont à confirmer au moment de l'appel.

## Le 6 décembre : découvrir le tissage, dès 7 ans

**« Du fil à l'étoffe : une histoire de liens »** se déroule **dimanche 6 décembre 2026, de 15 h à 16 h 30**. Les familles observent des objets décorés par les Amérindiens, puis les enfants s'initient au tissage à la main pour confectionner une pochette à trésors.

La [fiche de l'atelier du 6 décembre publiée par Infiniment Charentes](https://www.infiniment-charentes.com/fiche-sit/animation-ateliers-amusees-un-dimanche-au-musee-8011010) annonce la **gratuité**. C'est le choix le plus simple pour un enfant de 7 ans ou plus qui aime manipuler et fabriquer, sans prévoir de budget d'atelier. La séance n'est pas annoncée pour les moins de 7 ans.

## Le 21 décembre : fabriquer une mosaïque, dès 5 ans

**« Splendeurs de verre »** a lieu **lundi 21 décembre 2026**, avec deux créneaux : **10 h 15-11 h 45** ou **14 h-15 h 30**. Après la découverte d'objets en verre, les participants réalisent un objet décoratif en mosaïque, accompagnés de Sandrine Barbe, restauratrice d'art, et de Suzelle Corvaisier, médiatrice culturelle.

L'atelier est accessible **en famille dès 5 ans** : c'est donc la meilleure option des deux pour un enfant de 5 ou 6 ans. Les deux horaires et l'âge minimum figurent sur la [fiche « Splendeurs de verre »](https://www.infiniment-charentes.com/fiche-sit/animation-ateliers-amusees-vacances-de-noel-au-musee-du-nouveau-monde-8010995).

**Attention au prix :** la [page générale des Ateliers A'musées](https://museedunouveaumonde.larochelle.fr/un-avant-gout/en-ce-moment/evenement/ateliers-amusees-de-cet-ete) affiche 4 €, mais la fiche propre au 21 décembre ne confirme pas ce tarif pour cette séance. Demandez le montant exact, notamment pour l'adulte accompagnateur, avant de réserver. Ne transposez pas non plus le tarif de cette page au rendez-vous gratuit du 6 décembre.

## Réserver et préparer la venue avec des enfants

Les inscriptions se font au **05 46 51 51 45**, numéro donné par le musée pour son programme d'ateliers. Précisez la date, le créneau souhaité, l'âge et le nombre d'enfants, puis demandez combien d'adultes peuvent ou doivent participer. Le nombre de places restantes n'est pas publié dans les informations consultées.

Les deux rendez-vous se tiennent au **musée du Nouveau Monde, 10 rue Fleuriau, 17000 La Rochelle**. Ce sont des ateliers programmés, pas des créneaux de visite libre ni des animations du marché de Noël. Le musée est accessible depuis les arrêts Yélo **Dupaty** ou **place de Verdun** ; un parking payant se trouve également place de Verdun. Consultez les [indications d'accès du musée](https://museedunouveaumonde.larochelle.fr/preparer-la-visite/acces-tarifs-et-horaires) avant de partir.

Avec un bébé, une poussette ou des difficultés à monter les escaliers, vérifiez l'organisation au téléphone : le musée indique **ne pas être accessible aux personnes à mobilité réduite**, et ses **toilettes se trouvent au premier étage**. Aucun équipement de change ni espace poussette dédié n'a pu être confirmé. Mieux vaut poser ces questions avant de réserver plutôt que de découvrir une contrainte sur place.

## Et si vous passez le week-end à La Rochelle ?

Pour une famille venue de plus loin, le [Bel appartement - 2 chambres - Proche du vieux marché](https://www.booking.com/hotel/fr/bel-appartement-2-chambres-proche-du-vieux-marche.fr.html), dans le centre, propose deux chambres et une cuisine ; un lit bébé peut être demandé, sous réserve de disponibilité. Il se situe au troisième étage : vérifiez les conditions d'accès si vous voyagez avec une poussette. Les prix et disponibilités doivent être consultés pour vos dates.

Si vous ajoutez d'autres musées à votre séjour, notre guide sur le [La Rochelle Océan Pass avec des enfants](/articles/bons-plans/la-rochelle-ocean-pass-avec-des-enfants-quand-est-il-vraiment-rentable/) aide à décider si le pass vaut son prix. **Ne supposez pas que les ateliers A'musées y sont inclus** : l'accès aux collections et l'inscription à une activité spécifique sont deux choses différentes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/bons-plans/la-rochelle-ocean-pass-avec-des-enfants-quand-est-il-vraiment-rentable/ | La Rochelle Océan Pass avec des enfants: quand est-il vraiment rentable ? | bons-plans | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/sorties/fort-boyard-en-famille-depuis-la-rochelle-quelle-croisiere-choisir/ | Fort Boyard en famille depuis La Rochelle: quelle croisière choisir | sorties | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/sorties/tours-la-rochelle-activites-famille-ete-2026/ | Tours de La Rochelle en famille: que reste-t-il à faire fin août 2026 ? | sorties | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | Noël à Chenonceau 2026: décors, nocturnes et tarifs en famille | evenements | Chenonceaux, Indre-et-Loire, Centre-Val de Loire
- /articles/sorties/musee-cour-or-metz-ateliers-famille-ete-2026/ | Musée de La Cour d’Or à Metz en famille: prochains ateliers en septembre 2026 | sorties | Metz, Moselle, Grand Est
- /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | Marché de Noël 100 % Côte-d’Or à Dijon 2026: horaires, spectacles et Père Noël | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/activites/ateliers-matisse-nice-famille-aout-2026/ | Ateliers Matisse à Nice: sept matinées créatives pour les 4 à 7 ans en août | activites | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/parentalite/parents-separes-en-charente-maritime-une-aide-caf-pour-les-visites-a-distance/ | Parents séparés en Charente-Maritime: une aide Caf pour les visites à distance | parentalite | La Rochelle, Charente-Maritime, Nouvelle-Aquitaine
- /articles/evenements/festival-du-cerf-volant-2027-a-chatelaillon-plage-le-guide-des-familles/ | Festival du cerf-volant 2027 à Châtelaillon-Plage: le guide des familles | evenements | Châtelaillon-Plage, Charente-Maritime, Nouvelle-Aquitaine
- /articles/voyages/paleosite-de-saint-cesaire-en-famille-combien-de-temps-prevoir-en-2026/ | Paléosite de Saint-Césaire en famille: combien de temps prévoir en 2026? | voyages | Saint-Césaire, Charente-Maritime, Nouvelle-Aquitaine
- /articles/sorties/chateau-des-enigmes-de-pons-en-famille-preparer-la-visite-en-2026/ | Château des Énigmes de Pons en famille: préparer la visite en 2026 | sorties | Pons, Charente-Maritime, Nouvelle-Aquitaine
- /articles/cuisine/fort-royer-quelle-visite-ostreicole-choisir-avec-des-enfants/ | Fort-Royer: quelle visite ostréicole choisir avec des enfants? | cuisine | Saint-Pierre-d'Oléron, Charente-Maritime, Nouvelle-Aquitaine
- /articles/maison/maison-de-vacances-sur-l-ile-d-oleron-en-famille-les-criteres-qui-changent-vraiment-le-sejour/ | Maison de vacances sur l'île d'Oléron en famille: les critères qui changent vraiment le séjour | maison | Saint-Pierre-d'Oléron, Charente-Maritime, Nouvelle-Aquitaine
- /articles/evenements/festival-les-martinelles-2026-en-famille/ | Les Martinelles à Saint-Martin-de-Ré: deux journées gratuites pour les enfants | evenements | Saint-Martin-de-Ré, Charente-Maritime, Nouvelle-Aquitaine
- /articles/activites/mac-val-en-famille-a-vitry-sur-seine-visites-ateliers-et-conseils-pratiques/ | MAC VAL en famille à Vitry-sur-Seine: visites, ateliers et conseils pratiques | activites | Vitry-sur-Seine, Val-de-Marne, Île-de-France
- /articles/activites/la-maison-de-la-vache-qui-rit-en-famille-a-lons-le-saunier/ | La Maison de La Vache qui rit en famille à Lons-le-Saunier | activites | Lons-le-Saunier, Jura, Bourgogne-Franche-Comté
- /articles/activites/habitation-clement-en-famille-sculptures-jardin-et-maison-creole/ | Habitation Clément en famille: sculptures, jardin et maison créole | activites | Le François, Martinique, Martinique
- /articles/activites/parc-animalier-de-gramat-en-famille-animaux-duree-et-conseils-de-visite/ | Parc animalier de Gramat en famille: animaux, durée et conseils de visite | activites | Gramat, Lot, Occitanie
- /articles/activites/palais-ideal-du-facteur-cheval-en-famille-visite-et-conseils-a-hauterives/ | Palais idéal du facteur Cheval en famille: visite et conseils à Hauterives | activites | Hauterives, Drôme, Auvergne-Rhône-Alpes
- /articles/activites/espace-des-sciences-de-morlaix-en-famille-que-decouvrir-a-la-manufacture/ | Espace des sciences de Morlaix en famille: que découvrir à la Manufacture? | activites | Morlaix, Finistère, Bretagne
- /articles/activites/visiter-le-chateau-de-la-rochefoucauld-en-famille-parcours-tarifs-et-conseils/ | Visiter le château de La Rochefoucauld en famille: parcours, tarifs et conseils | activites | La Rochefoucauld-en-Angoumois, Charente, Nouvelle-Aquitaine

### Historique Radar lié

- opportunity | /articles/evenements/marche-de-noel-100-cote-d-or-2026-a-dijon-samedi-ou-dimanche-avec-les-enfants/ | 2026-10-29T14:26:32.277Z
- opportunity | /articles/evenements/noel-2026-a-chenonceau-quel-jour-decouvrir-les-decors-en-famille/ | 2026-10-24T12:31:27.784Z
- opportunity | /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | 2026-10-29T17:29:29.382Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
