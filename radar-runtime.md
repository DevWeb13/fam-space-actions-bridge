# Radar Fam Space - Phase 2/3

## Mission

Radar utilise Google Search Console et la recherche web pour choisir le travail éditorial qui apporte le plus de valeur à Fam Space: améliorer une page réellement perfectible, développer une intention proche d'une page forte, ou publier à temps une opportunité locale/saisonnière. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- opportunity: construis l'article autour de la décision choisie en phase 1. Le titre, le sous-titre et le résumé de phase 1 sont des formulations de travail: réévalue-les à partir de l'article final au lieu de reprendre mécaniquement la formulation de la décision.

Utilise des sources directement responsables. Les sources utilisées figurent dans `sources` et sont liées dans le corps lorsqu'elles ne concurrencent pas une offre partenaire. Aucun H1, tableau Markdown ou section Sources.

Sélectionne l'information au lieu de l'épuiser. Une information importante doit normalement apparaître une seule fois: l'introduction, les sections et la fin ne doivent pas redire la même chose. Une conclusion n'est pas obligatoire si elle ne fait que résumer. La structure doit découler du sujet et il n'existe aucun objectif de longueur; arrête-toi lorsque le sujet est traité complètement, sans remplissage.

Applique directement les règles partenaires ci-dessous.

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


Sélectionne seulement les liens internes réellement utiles et vérifie les routes avant usage. Lorsqu'une autre page Fam Space traite déjà correctement un sous-sujet, donne uniquement le contexte nécessaire puis renvoie vers cette page au lieu de refaire son contenu. Dans le texte public, oriente simplement le lecteur vers cette page sans commenter l'organisation éditoriale entre les articles. Le maillage doit prolonger la lecture et réduire les répétitions entre articles, pas seulement ajouter des liens.

Si du contenu temporaire est ajouté à un evergreen, utilise `reviewAt`; pour un événement pur, utilise `eventEndsAt`.

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Saint-Nicolas 2026 à Saint-Nicolas-de-Port : village, défilé ou procession en famille ?"
subtitle: Le 5 décembre, choisir entre les animations de l'après-midi et les rendez-vous du soir selon l'âge des enfants.
summary: "Festivités de Saint-Nicolas-de-Port le 5 décembre 2026 : village gratuit, défilé, procession aux flambeaux, horaires confirmés et précautions pour une sortie avec des enfants."
category: evenements
location:
  city: Saint-Nicolas-de-Port
  department: Meurthe-et-Moselle
  region: Grand Est
keywords:
  - Saint-Nicolas-de-Port 5 décembre 2026 en famille
  - festivités Saint Nicolas de Port défilé 2026
  - village Saint Nicolas de Port procession aux flambeaux
sources:
  - title: Ville de Saint-Nicolas-de-Port - Festivités du 5 décembre 2026
    url: https://www.saintnicolasdeport.com/fr/ev/1263095/792846/festivites-de-la-saint-nicolas-1
  - title: Ville de Saint-Nicolas-de-Port - Village du 5 décembre, horaires et lieu
    url: https://www.saintnicolasdeport.com/fr/nw/1263056/3010347/village-de-la-saint-nicolas-recherche-de-producteurs-et-artisans-en-gastronomie
radar:
  schemaVersion: 1
  phase: 1
  mode: opportunity
  slug: saint-nicolas-2026-a-saint-nicolas-de-port-village-defile-ou-procession-en-famille
  decision: Choisir le bon moment pour venir avec des enfants le 5 décembre, entre village de l'après-midi, défilé et procession en soirée, sans confondre Saint-Nicolas-de-Port avec Nancy.
  affiliationPotential: "Hébergement naturel pour les familles venant de loin : des logements à Saint-Nicolas-de-Port sont effectivement proposés sur Booking.com (https://www.booking.com/city/fr/saint-nicolas-de-port.fr.html) ; vérifier capacité familiale et disponibilité à la date choisie. Aucune billetterie à promouvoir pour la fête annoncée gratuite."
  gsc:
    retrievedAt: 2026-11-02T02:27:57+01:00
    dataThrough: 2026-10-30
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Saint-Nicolas-de-Port - Festivités du 5 décembre 2026 »; aucune page forte GSC n'est requise.
---

## Mission retenue
Préparer une sortie familiale aux festivités de Saint-Nicolas-de-Port le samedi 5 décembre 2026, événement distinct des Fêtes de Nancy.

## Pourquoi cette mission
L'opportunité saisonnière est officielle, datée et encore absente du catalogue. Le refresh Lumigny, malgré sa baisse d'impressions au signal « uncertain », couvre déjà correctement billets, calendrier et accès ; aucun changement éditorial décisif n'a été confirmé. Une expansion autour du planétarium de la Cité des sciences chevaucherait le guide existant, qui traite déjà billet, âge et réservation. Le choix entre les trois temps de Saint-Nicolas-de-Port apporte une décision locale réellement nouvelle.

## Décision du lecteur
Permettre aux parents de privilégier une sortie en journée avec de jeunes enfants ou d'organiser le défilé et la procession avec des enfants plus grands, en tenant compte de la durée, de la foule et du retour.

## Faits à traiter
La Ville annonce le 5 décembre 2026 à partir de 14 h une fête gratuite avec village, spectacles, déambulations, défilé de chars et procession aux flambeaux dans la basilique. Le village est confirmé de 14 h à 19 h, place des Droits de l'Homme. Ne pas inventer l'heure exacte ni le parcours du défilé, ni l'horaire de la procession : les vérifier à la publication. Préciser accès, transports, stationnement et conditions pratiques uniquement après contrôle des sources. Distinguer l'accès gratuit à la fête des achats sur place.

## Sources de départ
Les deux pages municipales ci-dessus ; contrôler les éventuelles mises à jour du programme et des accès avant rédaction.

## Affiliation
Proposer sobrement un hébergement à proximité pour une nuit sur place, avec capacité et conditions vérifiées ; ne pas suggérer de billet payant pour la fête.

## Continuations internes
- Lier le guide Fam Space des Fêtes de Saint-Nicolas à Nancy uniquement pour les animations propres à Nancy ; ne pas les recopier.
- Vérifier le programme municipal définitif avant d'affirmer les horaires du défilé ou de la procession.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | Fêtes de Saint-Nicolas 2026 à Nancy en famille: défilé, villages et animations | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/saint-nicolas-2026-a-epinal-en-famille-defile-du-5-decembre-ou-marche-de-noel/ | Saint-Nicolas 2026 à Épinal: cortège du 5 décembre et marché de Noël en famille | evenements | Épinal, Vosges, Grand Est
- /articles/activites/port-aux-cerises-a-draveil-quelle-activite-choisir-selon-l-age-des-enfants/ | Port aux Cerises à Draveil: quelle activité choisir selon l'âge des enfants? | activites | Draveil, Essonne, Île-de-France
- /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | Noël à Nice 2026 en famille: village, spectacles et crèche | evenements | Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/cuisine/foire-aux-harengs-de-dieppe-2026-quoi-gouter-et-comment-preparer-la-journee/ | Foire aux Harengs de Dieppe 2026: quoi goûter et comment préparer la journée | cuisine | Dieppe, Seine-Maritime, Normandie
- /articles/voyages/saint-bertrand-de-comminges-avec-des-enfants-village-seul-ou-grande-boucle-a-pied/ | Saint-Bertrand-de-Comminges avec des enfants: village seul ou grande boucle à pied? | voyages | Saint-Bertrand-de-Comminges, Haute-Garonne, Occitanie
- /articles/evenements/noel-d-autrefois-2026-au-musee-de-plein-air-quel-jour-venir-en-famille/ | Noël d’autrefois 2026 à Villeneuve-d’Ascq: dates, ateliers et accès en famille | evenements | Villeneuve-d'Ascq, Nord, Hauts-de-France
- /articles/parentalite/ludotheques-du-grand-nancy-ou-jouer-en-famille-et-emprunter-des-jeux/ | Ludothèques du Grand Nancy: où jouer en famille et emprunter des jeux | parentalite | Meurthe-et-Moselle, Grand Est
- /articles/maison/meubles-d-occasion-en-meurthe-et-moselle-ou-acheter-donner-et-reparer/ | Meubles d'occasion en Meurthe-et-Moselle: où acheter, donner et réparer ? | maison | Meurthe-et-Moselle, Grand Est
- /articles/vie-pratique/se-deplacer-a-nancy-en-famille-gratuites-bus-et-parkings-relais/ | Se déplacer à Nancy en famille: gratuités, bus et parkings relais | vie-pratique | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/activites/patrimoine-en-partage-a-luneville-faut-il-inscrire-son-enfant-pour-toute-la-semaine/ | Patrimoine en partage à Lunéville: faut-il inscrire son enfant pour toute la semaine? | activites | Lunéville, Meurthe-et-Moselle, Grand Est
- /articles/evenements/nancy-jazz-pulsations-2026-en-famille-spectacles-enfants-tarifs-et-conseils/ | Nancy Jazz Pulsations 2026 en famille: spectacles enfants, tarifs et conseils | evenements | Nancy, Meurthe-et-Moselle, Grand Est
- /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | Festival du livre jeunesse de Rouen 2026: dates, tarifs et activités en famille | evenements | Rouen, Seine-Maritime, Normandie
- /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | Noël 2026 à Quimper en famille: village, concert et animations gratuites | evenements | Quimper, Finistère, Bretagne
- /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | Noël 2026 à Sélestat en famille: marchés, sapins et visites gratuites | evenements | Sélestat, Bas-Rhin, Grand Est
- /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | Cirque de Noël d’Alsace 2026 à Eckbolsheim: dates, horaires et accès en famille | evenements | Eckbolsheim, Bas-Rhin, Grand Est
- /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | Noël 2026 à Chambéry en famille: marchés, parade et ateliers | evenements | Chambéry, Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | Noël 2026 à Besançon en famille: contes, marché solidaire et artisans | evenements | Besançon, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/planete-ocean-a-paris-preparer-la-visite-en-famille/ | Planète Océan à Paris: préparer la visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | Noël 2026 à Paris La Défense en famille: marché, animations et patinoire | evenements | Puteaux, Hauts-de-Seine, Île-de-France
- /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | Noël 2026 à Cannes en famille: marché du centre et Palm Beach | evenements | Cannes, Alpes-Maritimes, Provence-Alpes-Côte d’Azur

### Historique Radar lié

- opportunity | /articles/evenements/cirque-de-noel-d-alsace-2026-a-eckbolsheim-quelle-seance-choisir-avec-des-enfants/ | 2026-11-01T12:31:31.417Z
- opportunity | /articles/evenements/festival-du-livre-jeunesse-de-rouen-2026-quel-jour-et-quelles-activites-choisir-avec-les-enfants/ | 2026-11-02T00:36:18.455Z
- opportunity | /articles/evenements/fetes-de-saint-nicolas-2026-a-nancy-en-famille-defile-dates-et-visite/ | 2026-10-19T16:47:56.278Z
- opportunity | /articles/evenements/noel-2026-a-besancon-en-famille-contes-gratuits-marche-solidaire-ou-artisans/ | 2026-11-01T06:27:50.817Z
- opportunity | /articles/evenements/noel-2026-a-cannes-en-famille-marche-du-centre-ou-village-du-palm-beach/ | 2026-10-31T22:36:58.800Z
- opportunity | /articles/evenements/noel-2026-a-chambery-en-famille-marche-village-ou-fabrique-de-noel/ | 2026-11-01T09:37:48.790Z
- opportunity | /articles/evenements/noel-2026-a-paris-la-defense-en-famille-marche-animations-ou-patinoire/ | 2026-11-01T01:35:08.448Z
- opportunity | /articles/evenements/noel-2026-a-quimper-en-famille-village-concert-ou-ateliers-gratuits/ | 2026-11-01T18:35:45.871Z
- opportunity | /articles/evenements/noel-2026-a-selestat-en-famille-marches-ou-parcours-du-sapin/ | 2026-11-01T15:30:15.363Z
- opportunity | /articles/evenements/noel-a-nice-2026-en-famille-village-spectacles-gratuits-et-creche-que-choisir/ | 2026-10-25T04:31:33.540Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
