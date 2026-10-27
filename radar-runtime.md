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
title: "Festival de la Sainte-Barbe 2026 : quelle sortie choisir en famille à Lens-Liévin ?"
subtitle: "Du 4 au 6 décembre : spectacles de feu à Lens, fête foraine à Loos-en-Gohelle, pyrotechnie à Oignies et après-midi au Louvre-Lens"
summary: Les grands rendez-vous de la Sainte-Barbe 2026 se répartissent sur trois jours et plusieurs sites. Avec de jeunes enfants, le Louvre-Lens le dimanche ou la Kermesse de Loos-en-Gohelle dès l'après-midi sont des choix plus souples ; pour les spectacles pyrotechniques du soir, anticipez le froid et le retour.
category: evenements
location:
  city: Lens
  department: Pas-de-Calais
  region: Hauts-de-France
keywords:
  - festival Sainte-Barbe Lens 2026
  - Sainte-Barbe Lens-Liévin en famille
  - spectacle feu Lens 4 décembre 2026
  - Sainte-Barbe Loos-en-Gohelle Oignies 5 décembre
  - Louvre-Lens Sainte-Barbe 6 décembre enfants
sources:
  - title: Festival de la Sainte-Barbe 2026 - programmation officielle par date
    url: https://festivaldelasaintebarbe.com/la-programmation/par-date/
  - title: Hauts-de-France Tourisme - dates du festival 2026
    url: https://www.tourisme-en-hautsdefrance.com/offres/le-festival-de-la-sainte-barbe-lens-fr-6857548/
  - title: Organisateur - Tumulte à Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-tumulte/
  - title: Organisateur - Les Semeurs de Temps et les orgues à Feu
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-les-semeurs-de-temps-et-les-orgues-a-feu/
  - title: Organisateur - La Kermesse à Loos-en-Gohelle
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-la-kermesse/
  - title: Organisateur - Montée aux terrils du 11/19
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-montee-aux-terrils-du-11-19/
  - title: Organisateur - Swing & Fire à Oignies
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-swing-fire/
  - title: Organisateur - Entre terre et ciel, Blast version
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-entre-ciel-et-terre-blast-version/
  - title: Organisateur - ToyToy au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-toytoy-les-colporteurs-pouetiques/
  - title: Organisateur - La Frange au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-la-frange/
  - title: Organisateur - Nouveau monde au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-nouveau-monde/
  - title: Organisateur - journée familiale du 6 décembre au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/une-journee-grandiose-et-petillante/
  - title: Festival de la Sainte-Barbe - stationnements indiqués par site
    url: https://festivaldelasaintebarbe.com/infos-pratiques/ou-se-garer/
  - title: Tadao - itinéraires et horaires des transports du bassin minier
    url: https://www.tadao.fr/index.php/fr/
  - title: Booking.com - Le Cottage du Louvre à Lens
    url: https://www.booking.com/hotel/fr/le-cottage-du-louvre.fr.html
radar:
  schemaVersion: 1
  phase: 2
  mode: opportunity
  slug: festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants
  decision: Choisir une seule soirée ou un programme adapté aux enfants entre Lens le vendredi, Loos-en-Gohelle ou Oignies le samedi et le Louvre-Lens le dimanche, en tenant compte des horaires, des spectacles de feu, des trajets et de l'heure du retour.
  affiliationPotential: "Spectacles principaux gratuits : aucun billet partenaire naturel. Hébergement vérifié sur Booking.com : Le Cottage du Louvre à Lens, appartement T3 avec deux chambres pour quatre personnes ; vérifier les couchages, les disponibilités et les tarifs pour le week-end du 4 au 6 décembre, sans les présumer."
  gsc:
    retrievedAt: 2026-10-27T02:25:59+01:00
    dataThrough: 2026-10-24
    signal: seasonal_opportunity
    basis: Opportunité saisonnière vérifiée via « Festival de la Sainte-Barbe - programmation officielle par date 2026 »; aucune page forte GSC n'est requise.
eventEndsAt: 2026-12-06
---

Le **Festival de la Sainte-Barbe** anime le bassin minier de Lens-Liévin du **27 novembre au 6 décembre 2026**, avec des rendez-vous locaux dès la fin novembre. Ses grands spectacles de feu se concentrent les **vendredi 4, samedi 5 et dimanche 6 décembre**. Pour une sortie avec des enfants, mieux vaut choisir un site et un horaire de retour plutôt que chercher à tout voir : Lens, Loos-en-Gohelle, Oignies et le Louvre-Lens ne forment pas un parcours unique à pied.

## Quel jour convient le mieux à votre famille ?

- **Pour une sortie qui commence en journée :** samedi 5 à **Loos-en-Gohelle**, où *La Kermesse* ouvre dès **15 h 30**. On peut profiter de l'ambiance sans rester jusqu'à la fermeture à 21 h 30.
- **Pour les plus jeunes et un programme modulable :** dimanche 6 au **Louvre-Lens**, avec *ToyToy* dès **15 h**, des propositions musicales et des animations avant le spectacle pyrotechnique du soir.
- **Pour un grand spectacle de feu en soirée :** vendredi 4 à **Lens**, avec deux temps forts séparés, à 18 h et 20 h 45.
- **Pour les familles qui aiment la pyrotechnie spectaculaire et peuvent rentrer tard :** samedi 5 au **9-9bis d'Oignies**, avec un final à **21 h**.

Ces choix sont des conseils d'organisation, pas des classifications d'âge officielles : les spectacles mêlent parfois bruit, flammes, foule et effets lumineux.

## Vendredi 4 décembre à Lens : un spectacle tôt ou une grande soirée

À **18 h**, *Tumulte* investit la **place Jean-Jaurès**. Ce spectacle de rue de la compagnie Karnavires, annoncé pour **45 minutes**, mêle machines, marionnettes mécaniques et pyrotechnie. C'est le rendez-vous le plus simple du vendredi si les enfants ne peuvent pas veiller longtemps.

À partir de **18 h 30**, les **jardins de la faculté des sciences Jean-Perrin**, avenue Élie-Reumaux, accueillent notamment *Le Train fantôme*, *Radio cagette* et *Flamboyance passée*. À **20 h 45**, *Les Semeurs de Temps et les orgues à Feu* proposent un concert pyrotechnique d'environ **45 minutes**. Ce second spectacle suppose un retour plus tardif : il n'est pas nécessaire de faire les deux avec de jeunes enfants. Retrouvez les détails sur les [fiches officielles de Tumulte](https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-tumulte/) et des [orgues à feu](https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-les-semeurs-de-temps-et-les-orgues-a-feu/).

## Samedi 5 décembre : choisir Loos-en-Gohelle **ou** Oignies

**À Loos-en-Gohelle**, la **base 11/19**, rue de Bourgogne, accueille *La Kermesse* de **15 h 30 à 21 h 30**. La compagnie La Machine imagine une fête foraine insolite, avec jeux, gourmandises et effets de feu. Des **bars et foodtrucks** sont annoncés sur place. Une **montée aux terrils** est programmée à **17 h 30** : c'est une activité différente de la kermesse, à envisager seulement avec des enfants suffisamment à l'aise pour marcher dehors à la tombée de la nuit. Vérifiez les conditions de participation et l'état du terrain avant de vous engager. [Programme de La Kermesse](https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-la-kermesse/).

**À Oignies**, rendez-vous au **9-9bis**. *Swing & Fire*, spectacle de cirque, danse, musique et feu, propose des séances à **17 h 15, 18 h 15 et 20 h**. À **21 h**, *Entre terre et ciel – Blast version* réunit danse et pyrotechnie pour environ **25 minutes**. Une famille qui souhaite rentrer plus tôt peut privilégier l'une des premières séances de *Swing & Fire* sans attendre le final. [Détail de Swing & Fire](https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-swing-fire/) et du [spectacle de 21 h](https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-entre-ciel-et-terre-blast-version/).

Les deux sites sont dans des communes différentes : ne prévoyez pas de passer de l'un à l'autre entre deux spectacles sans avoir vérifié le trajet et le stationnement.

## Dimanche 6 décembre au Louvre-Lens : commencer avec les enfants, décider ensuite

Le **Louvre-Lens**, **99 rue Paul-Bert à Lens**, offre la progression la plus souple de ces trois journées :

- **15 h :** *ToyToy*, un concerto pour jouets pensé pour un moment partagé entre enfants et parents, au **Pavillon de verre**.
- **16 h :** *La Frange*, fanfare pop dans le hall du musée, annoncée pour **1 h 45**.
- **18 h 30 :** *La Frontale*, fanfare étudiante.
- **19 h :** *Nouveau monde*, spectacle de grandes marionnettes gonflables et de pyrotechnie des Plasticiens Volants.

Un **atelier lié à l'exposition « Trop Mignon ! L'art du bonheur »** est annoncé dès **15 h**, ainsi qu'un **stand de maquillage de 15 h à 19 h**. Les conditions d'accès, les places et une éventuelle réservation pour l'atelier doivent être confirmées auprès du musée ; ne supposez pas que toute activité annexe est libre d'accès. Avec des petits, *ToyToy* et les animations de l'après-midi peuvent suffire. Le spectacle de **19 h**, visuellement impressionnant, s'adresse plutôt aux familles prêtes à rester dehors en soirée. [Programme de la journée au Louvre-Lens](https://festivaldelasaintebarbe.com/manifestations/une-journee-grandiose-et-petillante/) et [fiche de Nouveau monde](https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-nouveau-monde/).

## Budget, accès et précautions avec des enfants

Les **grands spectacles du festival sont annoncés gratuits** : il n'y a donc pas de billet de spectacle à acheter pour organiser ces trois soirées. En revanche, restauration, boissons, déplacements et certaines animations annexes peuvent représenter un coût. Les « Étincelles » organisées en amont, du 27 novembre au début décembre, ont chacune leurs modalités : consultez la [programmation officielle par date](https://festivaldelasaintebarbe.com/la-programmation/par-date/) si vous choisissez un autre jour.

Pour venir en voiture, la [page de stationnement de l'organisateur](https://festivaldelasaintebarbe.com/infos-pratiques/ou-se-garer/) indique notamment **place du Cantin ou place de la République** pour la faculté Jean-Perrin, **Cité des Provinces à Lens** pour la base 11/19 et les **parkings du 9-9bis, rue du Tordoir**, pour Oignies. Ces indications ne garantissent ni une place libre ni l'absence de restrictions ponctuelles : contrôlez les consignes actualisées avant de partir. Pour le Louvre-Lens, vérifiez directement l'accès au musée et les éventuels aménagements du festival.

Sans voiture, préparez surtout **le trajet retour** : recherchez les horaires du vendredi, du samedi ou du dimanche sur le [réseau Tadao](https://www.tadao.fr/index.php/fr/) et vérifiez les derniers départs depuis le lieu choisi. Ne comptez pas sur une navette spéciale tant qu'un dispositif **2026** n'est pas confirmé.

En décembre, prévoyez chaussures fermées, vêtements chauds, protection contre la pluie et éventuellement protection auditive pour les enfants sensibles au bruit. Gardez les petits à distance des installations et respectez les périmètres de sécurité. Avec une poussette ou des difficultés de mobilité, renseignez-vous auprès de l'organisateur sur les cheminements du site choisi, particulièrement pour les terrils et les rassemblements nocturnes.

## Rester dormir à Lens pour profiter du week-end

Si vous venez de loin, un appartement permet de ne pas reprendre la route immédiatement après les spectacles. [Le Cottage du Louvre à Lens sur Booking.com](https://www.booking.com/hotel/fr/le-cottage-du-louvre.fr.html) propose notamment des **T3 avec deux chambres**, dont une configuration avec lit double et deux lits simples. Vérifiez la capacité exacte de l'appartement sélectionné, les conditions d'arrivée, le trajet jusqu'à votre spectacle ainsi que **les disponibilités et le prix pour les nuits du 4 au 6 décembre 2026** : ils ne sont pas garantis.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/maison/lens-lievin-jusqu-a-240-pour-recuperer-l-eau-de-pluie/ | Lens-Liévin: jusqu'à 240 € pour récupérer l'eau de pluie | maison | Lens, Pas-de-Calais, Hauts-de-France
- /articles/parentalite/creche-a-l-abordage-a-etaples-accueil-ponctuel-ou-regulier-que-choisir/ | Crèche À l'abordage à Étaples: accueil ponctuel ou régulier, que choisir ? | parentalite | Étaples-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/cuisine/ratte-du-touquet-eau-vapeur-ou-four-quelle-cuisson-choisir/ | Ratte du Touquet: eau, vapeur ou four, quelle cuisson choisir? | cuisine | Le Touquet-Paris-Plage, Pas-de-Calais, Hauts-de-France
- /articles/evenements/hop-hop-hop-festival-2026-en-famille-quel-jour-choisir/ | Hop Hop Hop Festival 2026 en famille: quel jour choisir? | evenements | Saint-Cirgues, Lot, Occitanie
- /articles/evenements/festival-cite-en-jeux-2026-a-colomiers-quel-jour-choisir-avec-des-enfants/ | Festival Cité en Jeux 2026 à Colomiers: quel jour choisir avec des enfants | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/habits-de-lumiere-a-epernay-avec-des-enfants-quel-jour-choisir-en-2026/ | Habits de Lumière à Épernay avec des enfants: quel jour choisir en 2026? | evenements | Épernay, Marne, Grand Est
- /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | bd BOUM 2026 à Blois en famille: ateliers, expositions et cinéma | evenements | Blois, Loir-et-Cher, Centre-Val de Loire
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/voyages/maison-du-marais-pres-de-saint-omer-bateau-et-expositions-en-famille/ | Maison du Marais près de Saint-Omer: bateau et expositions en famille | voyages | Saint-Martin-lez-Tatinghem, Pas-de-Calais, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/vie-pratique/cantine-au-college-dans-le-pas-de-calais-les-tarifs-2026-et-les-reductions-pour-les-boursiers/ | Cantine au collège dans le Pas-de-Calais: les tarifs 2026 et les réductions pour les boursiers | vie-pratique | Hénin-Beaumont, Pas-de-Calais, Hauts-de-France
- /articles/evenements/saint-nicolas-2026-a-carcassonne-marche-aux-flambeaux-ou-campements-medievaux-avec-les-enfants/ | Saint-Nicolas 2026 à Carcassonne: campements médiévaux et marche aux flambeaux en famille | evenements | Carcassonne, Aude, Occitanie
- /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | Noël 2026 à Chantilly: Le Noël oublié, billets et séances en famille | evenements | Chantilly, Oise, Hauts-de-France
- /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | Noël des Siècles 2026 à Champs-sur-Marne: billets, budget et horaires en famille | evenements | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | Odyssée Lumineuse 2026-2027 à Paris: billets, dates et visite en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | Festival Playground 2026: spectacles de danse en famille, dates et tarifs | evenements | Bagnolet, Seine-Saint-Denis, Île-de-France
- /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | Festival Enfantillages 2026 à Valbonne: spectacles gratuits et cinéma en famille | evenements | Valbonne, Alpes-Maritimes, Provence-Alpes-Côte d'Azur
- /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | Festival MARMOE 2026 à Montreuil: spectacles, ateliers et tarifs en famille | evenements | Montreuil, Seine-Saint-Denis, Île-de-France

### Historique Radar lié

- opportunity | /articles/evenements/bd-boum-2026-a-blois-en-famille-ateliers-bd-expositions-et-cinema-selon-l-age/ | 2026-10-18T19:49:09.191Z
- opportunity | /articles/evenements/festival-enfantillages-2026-a-valbonne-spectacles-gratuits-et-cinema-selon-l-age/ | 2026-10-26T03:35:31.605Z
- opportunity | /articles/evenements/festival-marmoe-2026-a-montreuil-spectacles-et-ateliers-selon-l-age-des-enfants/ | 2026-10-25T23:35:17.860Z
- opportunity | /articles/evenements/festival-playground-2026-en-ile-de-france-quels-spectacles-de-danse-choisir-avec-les-enfants/ | 2026-10-26T06:30:10.217Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/evenements/noel-2026-au-chateau-de-chantilly-spectacle-equestre-seul-ou-visite-du-domaine/ | 2026-10-26T21:31:06.119Z
- opportunity | /articles/evenements/noel-des-siecles-2026-au-chateau-de-champs-sur-marne-billets-et-horaires-en-famille/ | 2026-10-26T18:32:56.730Z
- opportunity | /articles/evenements/odyssee-lumineuse-2026-2027-au-parc-floral-de-paris-billet-date-ou-open-en-famille/ | 2026-10-26T15:30:14.299Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
