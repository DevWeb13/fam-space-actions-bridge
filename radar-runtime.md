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
title: "Halloween 2026 à la Mer de Sable: spectacles, frissons et billets en famille"
subtitle: "À Ermenonville jusqu'au 1er novembre: horaires, parcours à 2 € et prix selon la taille de la famille"
summary: Comment choisir les spectacles, éviter les frayeurs inutiles et comparer les billets Citrouille, Tribu et Happy Hour à la Mer de Sable pour Halloween 2026.
category: evenements
location:
  city: Ermenonville
  department: Oise
  region: Hauts-de-France
keywords:
  - Halloween Mer de Sable 2026
  - Épouvantable Mer de Sable
  - Wild West Scream horaires tarifs
  - billet Citrouille billet Tribu
sources:
  - title: La Mer de Sable - Épouvantable Mer de Sable
    url: https://www.merdesable.fr/news-detail/actualite-epouvantable-mer-de-sable-1
  - title: La Mer de Sable - Spectacles Halloween
    url: https://www.merdesable.fr/le-parc/nos-spectacles
  - title: La Mer de Sable - Attractions revisitées
    url: https://www.merdesable.fr/le-parc/spectacles-attractions
  - title: La Mer de Sable - Tarifs et billets
    url: https://www.merdesable.fr/tarifs-reservations
  - title: La Mer de Sable - Calendrier
    url: https://www.merdesable.fr/ma-visite/calendrier-et-horaires
  - title: La Mer de Sable - Conseils et pique-nique
    url: https://www.merdesable.fr/astuces-de-visite
  - title: La Mer de Sable - Services
    url: https://www.merdesable.fr/infos-pratiques/services
  - title: La Mer de Sable - Accès
    url: https://www.merdesable.fr/infos-pratiques/venir-au-parc
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: halloween-2026-a-la-mer-de-sable-spectacles-parcours-effrayant-et-billets
  decision: Décider si l'Épouvantable Mer de Sable convient à la sensibilité des enfants, prévoir les spectacles et le parcours facultatif réellement adaptés, puis choisir le billet le plus économique selon la taille de la famille et la durée de visite.
  affiliationPotential: "Aucun billet partenaire précis et vérifié pour l'entrée Halloween à La Mer de Sable sur Tiqets ou GetYourGuide: ne pas en inventer et ne pas concurrencer l'achat officiel dans le corps. Hébergement possible pour une famille venant de loin: Domaine de La Charmille à Ermenonville, à environ 4,2 km du parc, avec chambres familiales selon Booking.com: https://www.booking.com/hotel/fr/la-charmille-ermenonville.fr.html ; vérifier la capacité, la disponibilité et le prix aux dates choisies."
  gsc:
    retrievedAt: 2026-10-18T05:46:43.422Z
    dataThrough: 2026-10-15
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « La Mer de Sable - Épouvantable Mer de Sable 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-11-01
---

Du **3 octobre au 1er novembre 2026**, la Mer de Sable, à Ermenonville (Oise), propose son Halloween baptisé **Épouvantable Mer de Sable**. Deux spectacles inédits sont au programme, ainsi qu'un parcours immersif payant. Pour venir avec des enfants, le plus important est de distinguer les frissons accessibles en famille des expériences plus inquiétantes, puis de choisir le billet en fonction de l'heure d'arrivée.

## Chocottes ou Maxi Frousse: quelle ambiance pour les enfants?

«Chocottes» et «Maxi Frousse» sont les mots employés par le parc pour évoquer différents niveaux de frisson, **pas deux catégories de billets ni des âges officiellement garantis**.

Pour commencer doucement, privilégiez les attractions habituelles avec leurs décors d'Halloween. Le parc annonce notamment **Buffalo'Ween, Monster Mountain, Mississi'Trouille, La Rivière des Sorcières, Shadow Express et Le Vol des Fantômes**. Même dans ces espaces, des personnages costumés et des échassiers peuvent surprendre les visiteurs.

Avec un enfant sensible à l'obscurité ou aux personnages effrayants, mieux vaut éviter de programmer d'emblée le parcours Wild West Scream. Les spectacles comportent eux aussi des effets impressionnants. Vérifiez les **restrictions de taille propres à chaque attraction** sur les [fiches du parc](https://www.merdesable.fr/le-parc/spectacles-attractions), sans déduire l'accès aux manèges de la gratuité d'entrée des tout-petits.

## Deux spectacles: 13 h ou 17 h 15?

- **La Malédiction de West City**, à **13 h à West City**: environ **20 minutes** de cascades, combats et humour autour de l'amulette «El Diablo», que Black Jack tente de voler.
- **La Dernière Chance**, à **17 h 15 au Corral**: environ **20 minutes** d'acrobaties équestres, de combats et de tableaux enflammés. Les effets de feu peuvent impressionner les jeunes spectateurs.

Les horaires sont publiés dans le [programme des spectacles](https://www.merdesable.fr/le-parc/nos-spectacles). Arriver l'après-midi fait manquer le premier spectacle, mais peut permettre de voir le second. Contrôlez les éventuels ajustements du jour avant de construire votre parcours.

## Wild West Scream: un supplément facultatif de 2 €

Ce parcours de **20 minutes**, installé **à l'ancienne gare**, plonge les visiteurs dans un cabinet de curiosités peuplé de créatures étranges. Les horaires annoncés sont **10 h 45-12 h 45** et **14 h 15-17 h 15**.

L'accès coûte **2 € par personne en plus de l'entrée**, payables **uniquement par carte bancaire**. La page officielle ne fixe pas d'âge minimal général: ne supposez donc ni que l'activité est adaptée aux petits ni qu'elle leur est interdite. Demandez conseil au personnel selon la sensibilité de votre enfant. On peut profiter de l'événement sans ce supplément.

## Billet Citrouille, Tribu ou Happy Hour: combien prévoir?

Les prix affichés sont des **tarifs de départ** pour les billets datés en ligne, soumis aux disponibilités:

- **Citrouille**: dès **28 € à partir de 12 ans** et **26 € de 90 cm à 11 ans**. Réservation en ligne **au plus tard la veille** de la date choisie.
- **Tribu**: dès **26 € par billet pour 5 à 7 billets achetés**, ou **25 € pour 8 à 15 billets**, avec la même règle de réservation préalable.
- **Aux caisses**: **34,90 € dès 12 ans**, **28,90 € de 90 cm à 11 ans**. **Gratuit en dessous de 90 cm**.
- **Happy Hour aux caisses**: **20 € par personne**, entrée **à partir de 14 h 30**. Cette formule ne permet pas de voir le spectacle de 13 h, mais laisse la possibilité d'assister à celui de 17 h 15.

Pour **deux adultes et deux enfants payants**, le Citrouille revient **au minimum à 108 €** pour la journée, contre **80 €** en Happy Hour, soit 28 € de différence au tarif d'appel. Si cinq personnes ont besoin d'un billet, la formule Tribu commence à **130 €**: comparez-la avec les tarifs Citrouille réellement proposés pour votre date. Un enfant de moins de 90 cm, qui entre gratuitement, ne constitue pas un billet acheté pour atteindre le seuil Tribu.

Les tarifs spéciaux pour certaines situations, notamment handicap et famille nombreuse, sont proposés aux caisses avec justificatif. Ajoutez au budget **2 € par participant** si vous choisissez Wild West Scream. Les conditions complètes figurent sur la page officielle des tarifs, référencée parmi les sources de cet article.

## Accès, pique-nique et services bébé

Le parc se trouve **route nationale 330, 60950 Ermenonville**, avec **parking gratuit**. Consultez le [calendrier officiel](https://www.merdesable.fr/ma-visite/calendrier-et-horaires) pour confirmer le jour et les heures d'ouverture. Les files d'attente des attractions ferment **30 minutes avant le parc**.

Un **espace couvert pour pique-niquer** est disponible, ainsi que des tables près de Cyclo'Vent et sur le parking. Les **glacières et ustensiles métalliques sont interdits dans le parc**, mais un sac isotherme est autorisé. Un **tampon à demander à l'entrée** permet de retourner à la voiture et de revenir dans la journée. Le **relais bébé** près de l'espace pique-nique dispose de tables à langer et de micro-ondes. Les visiteurs en situation de handicap peuvent demander à l'accueil les conditions d'accès facilité et les justificatifs nécessaires.

## Dormir près de la Mer de Sable ou varier les sorties

Pour les familles qui viennent de loin, le [Domaine de La Charmille à Ermenonville sur Booking.com](https://www.booking.com/hotel/fr/la-charmille-ermenonville.fr.html) est annoncé à environ **4,2 km du parc**. Vérifiez les logements réellement disponibles pour votre nombre de voyageurs, les couchages, le tarif et les conditions d'annulation.

Pour une autre ambiance d'Halloween dans l'Oise, notre guide du [Château de Chantilly](/articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/) détaille ses ateliers et nocturnes. Pour comparer une grande sortie de parc et ses billets, consultez aussi [Peur sur le Parc 2026 au Parc Astérix](/articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/).

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | Halloween 2026 au Château de Chantilly avec des enfants: ateliers, nocturnes et spectacle | sorties | Chantilly, Oise, Hauts-de-France
- /articles/sorties/chateau-de-compiegne-en-famille-que-visiter-et-comment-organiser-la-journee/ | Château de Compiègne en famille: que visiter et comment organiser la journée? | sorties | Compiègne, Oise, Hauts-de-France
- /articles/voyages/peur-sur-le-parc-2026-en-famille-journee-nocturne-billets-et-hebergement/ | Peur sur le Parc 2026 en famille: journée, nocturne, billets et hébergement | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | Pierrefonds à la Toussaint 2026: atelier lanterne et soirée d'Halloween | evenements | Pierrefonds, Oise, Hauts-de-France
- /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | Halloween 2026 au château de Couches: atelier citrouille et jeu Mystères & Sortilèges | evenements | Couches, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | Festi'Mômes 2026 à Nantes: séances, spectacles et tarifs en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/activites/parc-de-courzieu-en-famille-tarifs-horaires-et-conseils-pour-la-visite/ | Parc de Courzieu en famille: tarifs, horaires et conseils pour la visite | activites | Courzieu, Rhône, Auvergne-Rhône-Alpes
- /articles/sorties/musee-de-la-bd-a-angouleme-en-famille-tarifs-horaires-et-conseils-de-visite/ | Musée de la BD à Angoulême en famille: tarifs, horaires et conseils de visite | sorties | Angoulême, Charente, Nouvelle-Aquitaine
- /articles/bons-plans/pass-sports-citoyen-dans-l-oise-15-a-cumuler-avec-le-pass-sport-en-2026/ | Pass Sports Citoyen dans l'Oise: 15 € à cumuler avec le pass Sport en 2026 | bons-plans | Beauvais, Oise, Hauts-de-France
- /articles/parentalite/ateliers-parents-malins-dans-l-oise-quels-rendez-vous-gratuits-choisir-avant-fin-2026/ | Ateliers Parents Malins dans l'Oise: quels rendez-vous gratuits choisir avant fin 2026 ? | parentalite | Plusieurs communes, Oise, Hauts-de-France
- /articles/cuisine/atelier-de-creme-chantilly-avec-des-enfants-a-partir-de-quel-age-et-comment-reserver/ | Atelier de crème Chantilly avec des enfants: à partir de quel âge et comment réserver | cuisine | Chantilly, Oise, Hauts-de-France
- /articles/maison/meubles-et-encombrants-a-compiegne-recyclerie-dechetterie-ou-collecte-a-domicile/ | Meubles et encombrants à Compiègne: recyclerie, déchetterie ou collecte à domicile? | maison | Compiègne, Oise, Hauts-de-France
- /articles/vie-pratique/location-de-voiture-a-beauvais-avec-des-enfants-les-verifications-utiles-avant-de-reserver/ | Location de voiture à Beauvais avec des enfants: les vérifications utiles avant de réserver | vie-pratique | Beauvais, Oise, Hauts-de-France
- /articles/voyages/parc-asterix-en-famille-en-2026-une-ou-deux-journees-quel-hotel-et-quel-budget-prevoir/ | Parc Astérix en famille en 2026: une ou deux journées, quel hôtel et quel budget prévoir | voyages | Plailly, Oise, Hauts-de-France
- /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | Métamorphoses 2026 au quai Branly: séances gratuites et films par âge | evenements | Paris, Paris, Île-de-France
- /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | Festival du Film pour Enfants 2026 en Isère: séances, ateliers et tarifs | evenements | Vizille, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | Lumigny Safari de Lumières 2026-2027: billets, dates et visite en famille | evenements | Lumigny-Nesles-Ormeaux, Seine-et-Marne, Île-de-France
- /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | Automnales d'Harcourt 2026: animations, visites et tarifs en famille | evenements | Harcourt, Eure, Normandie
- /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | Toussaint 2026 au musée des Confluences: cinq rendez-vous pour les enfants | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/toussaint-2026-au-seaquarium-du-grau-du-roi-quel-jeu-choisir/ | Toussaint 2026 au Seaquarium: dates des jeux, âges et billets en famille | evenements | Le Grau-du-Roi, Gard, Occitanie
- /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | Salon du livre jeunesse de Montreuil 2026: billets gratuits, horaires et visite en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France
- /articles/evenements/vacances-royales-2026-a-versailles-animations-napoleon-dates-et-billets-en-famille/ | Vacances royales 2026 à Versailles: animations Napoléon, dates et billets | evenements | Versailles, Yvelines, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/automnales-d-harcourt-2026-en-famille-jeux-nature-visites-et-tarifs/ | 2026-10-16T06:56:21.314Z
- opportunity | /articles/evenements/festi-momes-2026-a-nantes-quelle-seance-choisir-selon-l-age-des-enfants/ | 2026-10-17T11:48:00.184Z
- opportunity | /articles/evenements/festival-du-film-pour-enfants-2026-en-isere-seances-ateliers-et-tarifs/ | 2026-10-17T15:41:33.883Z
- opportunity | /articles/sorties/halloween-2026-au-chateau-de-chantilly-quelle-activite-choisir-avec-des-enfants/ | 2026-10-08T02:18:12.427Z
- opportunity | /articles/evenements/halloween-2026-au-chateau-de-couches-atelier-citrouille-ou-jeu-geant-en-famille/ | 2026-10-12T14:00:32.202Z
- opportunity | /articles/evenements/lumigny-safari-de-lumieres-2026-2027-balade-nocturne-ou-billet-combine-en-famille/ | 2026-10-16T17:46:42.470Z
- opportunity | /articles/evenements/metamorphoses-2026-au-quai-branly-quels-films-choisir-avec-des-enfants/ | 2026-10-18T04:19:39.869Z
- opportunity | /articles/evenements/salon-du-livre-jeunesse-de-montreuil-2026-billet-gratuit-et-visite-en-famille/ | 2026-10-15T05:30:56.094Z
- opportunity | /articles/evenements/toussaint-2026-au-chateau-de-pierrefonds-atelier-lanterne-ou-halloween-spirite/ | 2026-10-11T19:35:57.703Z
- opportunity | /articles/evenements/toussaint-2026-au-musee-des-confluences-a-lyon-spectacles-et-ateliers-par-age/ | 2026-10-15T17:42:32.693Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
