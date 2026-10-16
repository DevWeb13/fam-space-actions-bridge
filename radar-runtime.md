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
title: "Automnales d'Harcourt 2026: jeux, visites et tarifs en famille"
subtitle: Les 17 et 18 octobre, un week-end autour des arbres avec des activités pour les enfants
summary: Les Automnales d'Harcourt 2026 se tiennent les 17 et 18 octobre. Horaires des jeux, visites et projections, tarifs et accès pour une sortie en famille.
category: evenements
location:
  city: Harcourt
  department: Eure
  region: Normandie
keywords:
  - Automnales Harcourt 2026 enfants
  - Automnales Harcourt 17 18 octobre
  - fête des plantes Domaine Harcourt famille
sources:
  - title: Domaine d'Harcourt - Programme des Automnales 2026
    url: https://www.harcourt-normandie.fr/les-incontournables/les-automnales/
  - title: Domaine d'Harcourt - Hommage à Francis Hallé
    url: https://www.harcourt-normandie.fr/actualites/francis-halle-un-hommage-au-coeur-des-automnales-dharcourt/
  - title: Office de tourisme de Bernay - Automnales, tarifs et adresse
    url: https://tourisme.bernaynormandie.fr/agenda/les-automnales-dharcourt/
  - title: Domaine d'Harcourt - Foire aux questions
    url: https://www.harcourt-normandie.fr/faq/
  - title: Domaine d'Harcourt - Préparer sa visite
    url: https://www.harcourt-normandie.fr/preparez-votre-experience/
  - title: Domaine d'Harcourt - Rendez-vous d'automne
    url: https://www.harcourt-normandie.fr/nos-rendez-vous/
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs
  decision: Décider si la fête des plantes des 17-18 octobre convient à l'âge des enfants, choisir le meilleur créneau familial et calculer le budget d'une visite sans réserver une expérience nocturne différente.
  affiliationPotential: Pas de billetterie partenaire identifiée pour les Automnales. Offre d'hébergement secondaire vérifiée sur Booking.com à Bernay et Brionne pour les familles qui en font un week-end; vérifier disponibilité et dates avant tout lien pertinent, ne pas forcer une nuit pour la seule visite.
  gsc:
    retrievedAt: 2026-10-16T04:49:29.006Z
    dataThrough: 2026-10-13
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Domaine d'Harcourt - Automnales 2026, programme et accès »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-10-18
---

Les **Automnales d'Harcourt** reviennent **samedi 17 et dimanche 18 octobre 2026, de 10h à 18h**, dans l'Eure. Pour leur 20e édition, cette fête des plantes réunit plus de 50 exposants et propose aussi des jeux autour des arbres, de courtes visites de l'arboretum et des projections. Une famille peut donc y passer quelques heures même si les enfants ne s'intéressent pas encore au jardinage.

## Quels rendez-vous choisir avec des enfants?

Le [programme officiel](https://www.harcourt-normandie.fr/les-incontournables/les-automnales/) distingue plusieurs activités. Elles sont annoncées les deux jours, sauf indication contraire:

- **De 10h à 18h:** jeux et animations pédagogiques **en libre-service** au point-info Médiation. Le Domaine évoque aussi des dessins botaniques à colorier. C'est le choix le plus souple pour les petits, sans horaire à respecter.
- **À 11h, 15h et 17h:** visite accompagnée **«20 arbres pour les 20 ans»**, ouverte à tous, pour **45 minutes**. Rendez-vous au point-info Médiation. Elle permet d'explorer l'arboretum avec un guide sans monopoliser toute la journée.
- **À 10h30, 14h et 16h:** projection du documentaire **«Il était une forêt»**, de Luc Jacquet, d'une durée de **1h18**. Elle se déroule dans l'espace de médiation, à l'intérieur: un format plutôt adapté à des enfants capables de suivre un film complet.
- **Tout le week-end:** sculpture sur bois en direct par Esther Seguin et espace librairie consacré aux arbres et à la botanique.
- **Le dimanche seulement:** rencontre autour du livre **«Jurassic Plantes»** avec ses auteurs Romain Maire et Corentin Pfeiffer, annoncée sur la plage de 10h à 18h.

Pour une première sortie avec de jeunes enfants, associer les jeux en libre-service à une visite guidée de 45 minutes paraît plus réaliste que d'enchaîner visite, documentaire et animations. Les horaires indiqués sont ceux annoncés par le Domaine; renseignez-vous à l'accueil sur les places et les modalités de chaque activité.

## Combien coûte l'entrée? Peut-on acheter sur place?

L'[office de tourisme de Bernay](https://tourisme.bernaynormandie.fr/agenda/les-automnales-dharcourt/) publie **3,50 € au tarif de base**, **3 € au tarif réduit** et **2,50 € au tarif enfant**. À ces montants, deux adultes et deux enfants payants représenteraient **12 €**, hors achats sur les stands et restauration.

Une précision importante: le Domaine annonce, pour les 20 ans, un **tarif réduit exceptionnel pour tous** sans publier sur sa page événement la grille correspondante. Les catégories d'âge du tarif enfant et l'application de la gratuité des moins de 6 ans, mentionnée dans la FAQ pour la visite ordinaire, ne sont pas précisées pour cette édition. **Confirmez le prix effectivement proposé avant de compter sur un montant ou une gratuité.**

Les billets peuvent être achetés **en ligne ou directement sur place** pour les Automnales, selon l'organisateur. La [billetterie du Domaine](https://www.harcourt-normandie.fr/billetterie/) permet de vérifier les offres affichées. L'office de tourisme mentionne une entrée sans réservation préalable, ce qui ne garantit pas une place dans chaque visite ou projection si une jauge s'applique.

## Accès, poussette et repas: les détails utiles

La fête a lieu au **Domaine d'Harcourt, 5 rue de la Gare, 27800 Harcourt**. Un **parking gratuit** est prévu à l'entrée. Sur place, l'organisateur annonce **toilettes, restauration, possibilité de pique-niquer** et **portage gratuit des plantes achetées**: pratique pour ne pas transporter des pots pendant toute la promenade.

Le [Domaine précise](https://www.harcourt-normandie.fr/faq/) que la visite de jour est globalement accessible aux personnes à mobilité réduite, mais que certains chemins sont irréguliers, pentus ou non pavés. Les poussettes sont autorisées, sans garantie de confort sur tous les sentiers; pour un bébé, prévoyez une solution de portage si nécessaire. Les aménagements exacts et les éventuels changements de circulation durant la fête peuvent être demandés à l'accueil au **02 32 46 29 70**.

Sans voiture, le Domaine mentionne la **ligne NOMAD 214** et la gare de Brionne, située à environ 7 km: vérifiez impérativement un aller **et surtout un retour** le samedi ou le dimanche avant de compter sur cette solution.

Enfin, **l'intérieur du château reste fermé au public pour travaux**; la visite se concentre sur les extérieurs, l'arboretum et les espaces ouverts pour l'événement.

## Prolonger la sortie dans l'Eure

Une visite aux Automnales peut suffire pour une demi-journée. Si vous prévoyez aussi Brionne, le Bec-Hellouin ou d'autres étapes dans l'Eure, [regardez les hébergements à Bernay](https://www.booking.com/city/fr/bernay-fr.fr.html) pour organiser un week-end; la disponibilité et le tarif réel aux dates souhaitées sont à vérifier avant de réserver.

Ne confondez pas cette fête **en journée** avec **[Arbora Lumina, le parcours nocturne d'Harcourt](/articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/)**, dont la nouvelle saison commence le **13 novembre 2026** et dont la billetterie suit des règles différentes.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/arbora-lumina-a-harcourt-ce-qu-il-faut-prevoir-avec-des-enfants/ | Arbora Lumina à Harcourt: ce qu'il faut prévoir avec des enfants | evenements | Harcourt, Eure, Normandie
- /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | Fête de la Châtaigne à Collobrières: quel dimanche choisir avec des enfants? | evenements | Collobrières, Var, Provence-Alpes-Côte d’Azur
- /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | Fête de la mer 2026 à Marseille avec des enfants: quelle escale choisir? | evenements | Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur
- /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | Fête des rues aux enfants 2026 à Paris: où aller selon l'arrondissement? | evenements | Paris, Paris, Île-de-France
- /articles/evenements/nuit-des-chateaux-2026-a-tanlay-visite-aux-bougies-avec-des-enfants-les-16-et-17-octobre/ | Nuit des Châteaux 2026 à Tanlay: visites aux bougies les 16 et 17 octobre | evenements | Tanlay, Yonne, Bourgogne-Franche-Comté
- /articles/bons-plans/musee-fermat-en-famille-jeux-tarifs-et-visite-avec-des-enfants/ | Musée Fermat en famille: jeux, tarifs et visite avec des enfants | bons-plans | Beaumont-de-Lomagne, Tarn-et-Garonne, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/fete-de-la-science-2026-en-famille/ | Fête de la science 2026: choisir une expérience adaptée à l’âge des enfants | evenements
- /articles/voyages/lyons-la-foret-avec-des-enfants-journee-ou-week-end-dans-le-village-et-la-foret/ | Lyons-la-Forêt avec des enfants: journée ou week-end dans le village et la forêt? | voyages | Lyons-la-Forêt, Eure, Normandie
- /articles/sorties/giverny-en-famille-visiter-la-maison-de-monet-et-le-musee-des-impressionnismes/ | Giverny en famille: visiter la maison de Monet et le musée des impressionnismes | sorties | Giverny, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France
- /articles/evenements/rouen-givree-2026-en-famille-marche-de-noel-et-refuge-givre/ | Rouen Givrée 2026 en famille: marché de Noël et Refuge Givré | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | Au Creux de l'Oreille 2026 à Noirlac: spectacles et ateliers en famille du 17 au 22 octobre | evenements | Bruère-Allichamps, Cher, Centre-Val de Loire
- /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | Grands Zyeux P'tites Zoreilles 2026: spectacles gratuits avec les tout-petits autour de Béziers | evenements | Béziers, Hérault, Occitanie
- /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | Abracada BOUH 2026 à Montpellier: programme et tarifs au château de Flaugergues | evenements | Montpellier, Hérault, Occitanie
- /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | Les Petits Asticots 2026: spectacles, âges et réservations en famille | evenements | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | Fête de l'Automne 2026 à Terra Botanica: animations et tarifs | evenements | Angers, Maine-et-Loire, Pays de la Loire
- /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | Monument jeu d'enfant 2026 à Saint-Denis: atelier Dagobert le 17 octobre | evenements | Saint-Denis, Seine-Saint-Denis, Île-de-France
- /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | Halloween 2026 au Safari de Peaugres: animations, tarifs et Festival Lumières Sauvages | evenements | Peaugres, Ardèche, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/abracada-bouh-2026-a-montpellier-animations-et-billets-en-famille/ | 2026-10-13T20:41:25.500Z
- opportunity | /articles/evenements/au-creux-de-l-oreille-2026-a-noirlac-quels-spectacles-et-ateliers-choisir-avec-les-enfants/ | 2026-10-14T13:49:08.708Z
- opportunity | /articles/evenements/festival-les-petits-asticots-2026-quel-spectacle-choisir-avec-les-enfants/ | 2026-10-13T18:36:59.570Z
- opportunity | /articles/evenements/fete-de-l-automne-2026-a-terra-botanica-journee-ou-terra-nocta-en-famille/ | 2026-10-13T12:37:05.098Z
- refresh | /articles/evenements/fete-de-la-chataigne-a-collobrieres-quel-dimanche-choisir-avec-des-enfants/ | 2026-10-08T10:21:36.677Z
- opportunity | /articles/evenements/fete-de-la-mer-2026-a-marseille-avec-des-enfants-quelle-escale-choisir-le-18-octobre/ | 2026-10-06T16:58:51.946Z
- opportunity | /articles/evenements/fete-des-rues-aux-enfants-2026-a-paris-ou-aller-selon-l-arrondissement/ | 2026-10-03T14:16:09.016Z
- opportunity | /articles/evenements/grands-zyeux-p-tites-zoreilles-2026-quelles-seances-gratuites-avec-les-tout-petits/ | 2026-10-14T07:31:28.976Z
- opportunity | /articles/evenements/halloween-2026-au-safari-de-peaugres-animations-et-lumieres-sauvages/ | 2026-10-13T05:01:12.150Z
- opportunity | /articles/evenements/monument-jeu-d-enfant-2026-a-la-basilique-saint-denis-atelier-dagobert-en-famille/ | 2026-10-13T09:50:29.435Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
