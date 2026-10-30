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
title: "Noël à Bayeux 2026 en famille : marché et Galopades, quel jour venir ?"
subtitle: Du 11 au 23 décembre pour les chalets, le 18 décembre pour ajouter les Galopades
summary: Les dates confirmées du marché de Noël et des Galopades de Bayeux en 2026, avec des conseils pour choisir une sortie adaptée aux enfants sans reprendre les horaires de 2025.
category: evenements
location:
  city: Bayeux
  department: Calvados
  region: Normandie
keywords:
  - Noël Bayeux 2026
  - marché de Noël Bayeux 2026
  - Galopades de Noël Bayeux 2026
sources:
  - title: Ville de Bayeux - Un Noël à Bayeux
    url: https://www.bayeux.fr/fr/un-noel-bayeux
  - title: Ville de Bayeux - Marché de Noël
    url: https://www.bayeux.fr/fr/marche-de-noel
  - title: Ville de Bayeux - Les Galopades de Noël (page à actualiser pour 2026)
    url: https://www.bayeux.fr/fr/les-galopades-de-noel
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: noel-a-bayeux-2026-en-famille-marche-ou-galopades
  decision: Choisir une date pour découvrir les chalets avec des enfants ou profiter aussi des Galopades, sans confondre le programme 2026 avec celui de 2025.
  affiliationPotential: Hébergement familial à Bayeux vérifié sur Booking.com (rubrique hôtels pour les familles, dont Novotel Bayeux), utile pour un week-end ; pas de billetterie partenaire pertinente identifiée pour le marché.
  gsc:
    retrievedAt: 2026-10-30T01:28:25+01:00
    dataThrough: 2026-10-27
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Ville de Bayeux - Un Noël à Bayeux »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-23
---

À Bayeux, le **marché de Noël se tiendra du 11 au 23 décembre 2026**, tandis que les **Galopades de Noël sont annoncées le vendredi 18 décembre**. Pour une promenade entre les chalets avec de jeunes enfants, plusieurs dates conviennent. Pour profiter aussi de l'ambiance de la course déguisée, le 18 décembre est le jour à retenir. Les horaires précis et les modalités 2026 des animations ne sont pas encore tous publiés.

## Marché ou Galopades : quelle date choisir ?

**Du 11 au 17 décembre, puis du 19 au 23 décembre**, privilégiez une visite centrée sur le marché : les enfants peuvent découvrir les chalets et les illuminations sans devoir caler la sortie sur un événement sportif. Prévoyez une durée souple, avec une pause au chaud si nécessaire.

**Vendredi 18 décembre**, choisissez plutôt une sortie festive en fin de journée si vos enfants aiment les déguisements et les animations de rue. C'est la seule date actuellement annoncée pour combiner le marché et les Galopades. Pour participer à la course, attendez la publication des parcours, des âges admis et des inscriptions **2026** avant de vous organiser. Avec un bébé ou un enfant qui se fatigue vite, une courte visite du marché peut rester plus agréable qu'une longue soirée.

## Où se trouve le marché de Noël ?

Les chalets seront installés **sous l'arbre de la Liberté, place de la Liberté**, au cœur de Bayeux. La Ville attend **plus de 40 exposants**, notamment des artisans d'art et des producteurs locaux. Des animations sont annoncées, mais leur programme détaillé est encore en préparation sur la [page municipale du marché de Noël](https://www.bayeux.fr/fr/marche-de-noel).

Les horaires quotidiens, les éventuelles activités pour enfants et leurs tarifs ne sont pas encore confirmés pour 2026. Ne prévoyez donc pas une rencontre avec le Père Noël ou un manège précis à une heure donnée sur la base d'anciens programmes.

## Les Galopades du 18 décembre : participer ou regarder ?

Les Galopades sont traditionnellement une manifestation familiale et conviviale, avec des participants costumés dans les rues de Bayeux. La **date du vendredi 18 décembre 2026** figure sur le [programme de Noël de la Ville](https://www.bayeux.fr/fr/un-noel-bayeux).

Attention : la [page détaillée des Galopades](https://www.bayeux.fr/fr/les-galopades-de-noel) affiche encore un **vendredi 19 décembre**, avec des distances, des horaires et des tarifs correspondant à une édition précédente. **Ces informations ne doivent pas être utilisées pour 2026.** Les départs, les catégories d'âge, les prix, les inscriptions et les éventuelles restrictions de circulation restent à confirmer pour la nouvelle édition.

Si les enfants ne courent pas, vous pouvez envisager de venir admirer les déguisements, mais choisissez votre emplacement et votre heure une fois le parcours 2026 publié.

## Venir avec un bébé ou une poussette

Le marché se visite dans le centre historique, où les pavés et l'affluence peuvent rendre la poussette moins pratique, surtout le soir des Galopades. Un porte-bébé peut être utile pour les tout-petits. Prévoyez des vêtements chauds, une collation et de quoi gérer le repas ou le biberon de bébé : aucun espace de change, micro-ondes ou service de restauration adapté aux bébés n'est confirmé pour l'événement 2026.

Si vous venez en voiture le 18 décembre, vérifiez les restrictions de circulation et de stationnement publiées par la Ville avant de partir. Les arrêtés et horaires affichés pour Noël **2025** ne valent pas pour **2026**.

## Et si vous restez une nuit à Bayeux ?

Pour transformer le marché en petite escapade, le [Novotel Bayeux sur Booking.com](https://www.booking.com/hotel/fr/novotel.html) est une piste d'hébergement familial à comparer selon les dates, les couchages et le budget. Les disponibilités et prix pour votre séjour sont à vérifier au moment de réserver.

Si vous souhaitez ajouter la cathédrale, les musées ou une deuxième journée de visite, notre guide [Bayeux en famille : 1 ou 2 jours et quel budget prévoir](https://www.fam-space.fr/articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/) détaille ces choix sans surcharger votre programme de Noël.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/evenements/lumieres-de-noel-a-montbeliard-2026-quel-jour-venir-avec-des-enfants/ | Lumières de Noël à Montbéliard 2026: quel jour venir avec des enfants? | evenements | Montbéliard, Doubs, Bourgogne-Franche-Comté
- /articles/evenements/marche-de-noel-de-cusset-2026-en-famille-quel-jour-choisir/ | Marché de Noël de Cusset 2026 en famille: quel jour choisir? | evenements | Cusset, Allier, Auvergne-Rhône-Alpes
- /articles/voyages/bayeux-en-famille-1-ou-2-jours-et-quel-budget-prevoir/ | Bayeux en famille: 1 ou 2 jours et quel budget prévoir | voyages | Bayeux, Calvados, Normandie
- /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | Marché de Noël de Grenoble 2026 en famille: horaires et Père Noël | evenements | Grenoble, Isère, Auvergne-Rhône-Alpes
- /articles/evenements/noel-a-chambord-2026-avec-des-enfants-quand-venir-et-que-prevoir/ | Noël à Chambord 2026 avec des enfants: quand venir et que prévoir | evenements | Chambord, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | Noël à Nantes 2026: marché de Noël et Voyage en hiver en famille | evenements | Nantes, Loire-Atlantique, Pays de la Loire
- /articles/evenements/noel-a-pau-2026-en-famille-marches-village-et-illuminations/ | Noël à Pau 2026 en famille: marchés, village et illuminations | evenements | Pau, Pyrénées-Atlantiques, Nouvelle-Aquitaine
- /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | Noël à Provins 2026: marché médiéval, animations et visites en famille | evenements | Provins, Seine-et-Marne, Île-de-France
- /articles/vie-pratique/ferry-ouistreham-portsmouth-en-famille-preparer-le-depart-et-la-traversee/ | Ferry Ouistreham-Portsmouth en famille: préparer le départ et la traversée | vie-pratique | Ouistreham, Calvados, Normandie
- /articles/parentalite/laep-a-caen-4-lieux-pour-venir-avec-un-enfant-sans-inscription/ | LAEP à Caen: 4 lieux pour venir avec un enfant sans inscription | parentalite | Caen, Calvados, Normandie
- /articles/cuisine/ateliers-cuisine-a-caen-avec-des-enfants-quelle-formule-choisir/ | Bien Dans Son Assiette à Caen: quel atelier cuisine choisir avec un enfant ? | cuisine | Caen, Calvados, Normandie
- /articles/maison/decheteries-de-caen-la-mer-qr-code-ou-plaque-obligatoires-depuis-septembre-2026/ | Déchèteries de Caen la mer: QR code ou plaque obligatoires depuis septembre 2026 | maison | Caen, Calvados, Normandie
- /articles/vie-pratique/quel-ticket-twisto-choisir-a-caen-avec-des-enfants/ | Quel ticket Twisto choisir à Caen avec des enfants? | vie-pratique | Caen, Calvados, Normandie
- /articles/activites/festyland-avec-de-jeunes-enfants-quelles-attractions-selon-leur-taille/ | Festyland avec de jeunes enfants: quelles attractions selon leur taille? | activites | Carpiquet, Calvados, Normandie
- /articles/evenements/equidays-2026-en-famille-dans-le-calvados-villages-gratuits-parade-et-animations/ | Équidays 2026 en famille dans le Calvados: villages gratuits, parade et animations | evenements | Caen, Calvados, Normandie
- /articles/bons-plans/cinema-famille-gratuit-au-memorial-de-caen-pendant-l-ete-2026/ | Cinéma famille gratuit au Mémorial de Caen pendant l'été 2026 | bons-plans | Caen, Calvados, Normandie
- /articles/sorties/conde-cote-plage-2026-famille/ | Condé Côté Plage 2026 en Normandie: activités gratuites en famille jusqu’au 23 août | sorties | Condé-en-Normandie, Calvados, Normandie
- /articles/evenements/week-end-joyeux-caen-2026-famille/ | Week-end joyeux 2026 à Caen: deux jours gratuits au château en famille | evenements | Caen, Calvados, Normandie
- /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | Festival des Petits Explorateurs 2026 à Dijon: ateliers, horaires et tarifs | evenements | Dijon, Côte-d'Or, Bourgogne-Franche-Comté
- /articles/evenements/flottins-d-evian-2026-un-village-de-noel-en-bois-flotte-a-decouvrir-en-famille/ | Flottins d’Évian 2026: un village de Noël en bois flotté à découvrir en famille | evenements | Évian-les-Bains, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-des-petits-explorateurs-2026-a-dijon-quels-ateliers-choisir-en-famille/ | 2026-10-30T03:27:02.483Z
- opportunity | /articles/evenements/marche-de-noel-de-grenoble-2026-en-famille-quand-voir-le-pere-noel/ | 2026-10-29T00:28:19.695Z
- opportunity | /articles/evenements/noel-a-nantes-2026-marche-gratuit-ou-visite-guidee-du-voyage-en-hiver/ | 2026-10-24T15:27:41.430Z
- opportunity | /articles/evenements/noel-a-provins-2026-en-famille-marche-medieval-ou-visite-guidee/ | 2026-10-24T03:31:56.628Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
