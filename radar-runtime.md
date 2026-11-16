# Radar Fam Space - Phase 2/3

## Mission

Radar surveille en priorité les articles Fam Space qui gagnent rapidement des impressions Google puis les perdent quelques jours plus tard. Il cherche ensuite les autres articles existants à améliorer réellement. Seulement s'il ne trouve aucune amélioration utile, il recherche un événement exceptionnel avec un fort potentiel d'audience et, lorsque c'est naturel, d'affiliation. Publication reste indépendante. Radar ne modifie jamais ses rotations, ses fichiers de pilotage ni les planifications. Ne génère aucune image.

Le principe central est simple: **un refresh doit améliorer l'article sans supprimer une information encore vraie et utile au lecteur**. La longueur n'est jamais un objectif.

La phase et toute la plomberie Git sont préparées mécaniquement. Exécute uniquement la mission contenue dans ce fichier runtime.

# Radar - Phase 2/3

Tu es journaliste web et responsable du parcours lecteur. Le candidat validé de phase 1 est fourni intégralement plus bas. Pour un refresh, l'article source exact est fourni intégralement plus bas.

Un refresh utilise l'ancien article comme référence interne, mais le résultat doit se lire comme un article actuel et autonome. Toute information encore vraie et utile doit rester, notamment prix décisionnels, durées, réservation, âge/taille, accessibilité, accès, contraintes, services bébé/enfants, repas et autres détails pratiques; une information fausse, périmée ou réellement redondante peut être retirée.

Suis le diagnostic éditorial du brief:
- `rank_loss`: réponds mieux aux intentions réellement en recul;
- `coverage_loss`: améliore la couverture utile sans présenter cela comme une perte de ranking;
- `uncertain`: applique uniquement la raison éditoriale indépendante vérifiée;
- `needs_query_check`: les recherches Google n'ont pas été diagnostiquées; applique uniquement la lacune éditoriale indépendante vérifiée, sans présenter la baisse d'impressions comme une perte de classement;
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

Soumets le résultat via `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées, puis le corps complet. **Ne recopie pas les métadonnées inchangées, aucun bloc `radar`, aucune branche et aucun SHA.** La plomberie mécanique conserve le reste, normalise la syntaxe de la requête et préserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre"
subtitle: Spectacles de feu à Lens, kermesse à Loos-en-Gohelle, animations à Oignies et journée familiale au Louvre-Lens
summary: Du 4 au 6 décembre 2026, les grands spectacles gratuits du festival se répartissent entre Lens, Loos-en-Gohelle, Oignies et le Louvre-Lens. Horaires, activités à faire en journée, accès et précautions avec les enfants pour choisir sa sortie.
category: evenements
location:
  city: Lens
  department: Pas-de-Calais
  region: Hauts-de-France
image:
  src: /images/articles/2026/10/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants.webp
  alt: Bâtiments et chevalements de l'ancien site minier 9-9bis à Oignies, photographiés hors festival de la Sainte-Barbe
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
  - title: Organisateur - atelier Artifices à Oignies
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-artifices/
  - title: Hauts-de-France Tourisme - gratuité de l'atelier Artifices
    url: https://www.tourisme-en-hautsdefrance.com/offres/festival-de-la-sainte-barbe-artifices-oignies-fr-6861961/
  - title: Organisateur - ToyToy au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-toytoy-les-colporteurs-pouetiques/
  - title: Organisateur - La Frange au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-la-frange/
  - title: Organisateur - Nouveau monde au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-nouveau-monde/
  - title: Organisateur - journée familiale du 6 décembre au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/une-journee-grandiose-et-petillante/
  - title: Festival de la Sainte-Barbe - stationnements par site
    url: https://festivaldelasaintebarbe.com/infos-pratiques/ou-se-garer/
  - title: Tadao - itinéraires et horaires des transports du bassin minier
    url: https://www.tadao.fr/index.php/fr/
eventEndsAt: 2026-12-06
topic:
  key: evenements|lens|festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants|2026
  keywords:
    - festival Sainte-Barbe Lens 2026
    - Sainte-Barbe Lens-Liévin en famille
    - spectacle feu Lens 4 décembre 2026
    - Sainte-Barbe Loos-en-Gohelle Oignies 5 décembre
    - Louvre-Lens Sainte-Barbe 6 décembre enfants
slug: festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants
status: published
publishedAt: 2026-10-27T04:28:30.904Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Lens
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/evenements/(2026)/(10)/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/index.md
  targetSha: 1f1a12c63e0ac89b89409577166d0e92dc3615d4
  targetUrl: /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/
  decision: Choisir un spectacle ou une activité réellement adaptée aux enfants le 4, 5 ou 6 décembre, avec les bons horaires et un retour faisable.
  affiliationPotential: Conserver l'hébergement Le Cottage du Louvre sur Booking.com pour les familles venant de loin; les grands spectacles restent gratuits.
  gsc:
    retrievedAt: 2026-11-16T02:33:37+01:00
    dataThrough: 2026-11-13
    signal: needs_query_check
    basis: "Visibilité récente : 43 impressions sur trois jours, puis 4 sur les trois derniers jours consolidés; cause non établie."
    peakStart: 2026-10-28
    peakEnd: 2026-10-30
    recentStart: 2026-11-11
    recentEnd: 2026-11-13
    peakImpressions: 43
    recentImpressions: 4
    commonQueries: null
    positionDelta: null
    impressionRatio: null
    focusQueries:
      - festival Sainte-Barbe Lens 2026
      - Sainte-Barbe Lens-Liévin en famille
      - spectacle feu Lens 4 décembre 2026
      - Sainte-Barbe Loos-en-Gohelle Oignies 5 décembre
      - Louvre-Lens Sainte-Barbe 6 décembre enfants
---

## Mission retenue
Actualiser le guide familial du Festival de la Sainte-Barbe 2026 à Lens-Liévin, du 27 novembre au 6 décembre, avec les temps forts du 4 au 6 décembre.

## Pourquoi cette mission
Le snapshot GSC indique 43 impressions sur trois jours puis 4, sans preuve de recul de position. L'article est déjà détaillé, mais le programme officiel confirme une activité familiale supplémentaire le dimanche 6 décembre au Louvre-Lens: le Train fantôme interactif dès 16 h 30. Cette lacune vérifiée justifie seule le refresh.

## Décision du lecteur
Choisir entre les animations de Lens le vendredi, de Loos-en-Gohelle ou Oignies le samedi et du Louvre-Lens le dimanche, selon l'âge, les horaires, le bruit et le trajet de retour.

## Faits à traiter
- Ajouter au dimanche 6 décembre le Train fantôme de la compagnie Bitonio, entresort forain interactif avec jeux mécaniques et énigmes, au Louvre-Lens en continu dès 16 h 30. Vérifier les modalités d'accès sans inventer une réservation.
- Conserver ToyToy à 15 h, La Frange à 16 h, La Frontale à 18 h 30, Nouveau monde à 19 h, l'atelier et le maquillage. Éviter de présenter le Train fantôme comme un spectacle pyrotechnique.
- Conserver tous les horaires et lieux déjà vérifiés pour Lens, Loos-en-Gohelle et Oignies, les gratuités des grands spectacles, les transports, parkings, conseils de sécurité et limites d'accessibilité.
- Préserver les quatre photographies (hero et trois images dans le corps), crédits et licences, le lien interne utile et l'hébergement Booking.com existant.
- Ne pas transformer la baisse d'impressions en diagnostic SEO ni actualiser la date pour elle-même.

## Sources de départ
- Programme officiel par date: https://festivaldelasaintebarbe.com/la-programmation/par-date/
- Train fantôme au Louvre-Lens: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-le-train-fantome-au-louvre-lens/
- Journée familiale au Louvre-Lens: https://festivaldelasaintebarbe.com/manifestations/une-journee-grandiose-et-petillante/

## Affiliation
Conserver Le Cottage du Louvre sur Booking.com et les précautions sur les chambres, l'arrivée et le trajet; ne pas inventer de billet affilié pour un spectacle gratuit.

## Continuations internes
- Garder le lien vers le programme officiel pour les autres Étincelles plutôt que détailler tout le festival.
- Ne pas étendre l'article à un guide général du Louvre-Lens.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/evenements/(2026)/(10)/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/index.md

---
title: "Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre"
subtitle: Spectacles de feu à Lens, kermesse à Loos-en-Gohelle, animations à Oignies et journée familiale au Louvre-Lens
summary: Du 4 au 6 décembre 2026, les grands spectacles gratuits du festival se répartissent entre Lens, Loos-en-Gohelle, Oignies et le Louvre-Lens. Horaires, activités à faire en journée, accès et précautions avec les enfants pour choisir sa sortie.
category: evenements
location:
  city: Lens
  department: Pas-de-Calais
  region: Hauts-de-France
image:
  src: "/images/articles/2026/10/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants.webp"
  alt: "Bâtiments et chevalements de l'ancien site minier 9-9bis à Oignies, photographiés hors festival de la Sainte-Barbe"
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
  - title: Organisateur - atelier Artifices à Oignies
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-artifices/
  - title: Hauts-de-France Tourisme - gratuité de l'atelier Artifices
    url: https://www.tourisme-en-hautsdefrance.com/offres/festival-de-la-sainte-barbe-artifices-oignies-fr-6861961/
  - title: Organisateur - ToyToy au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-toytoy-les-colporteurs-pouetiques/
  - title: Organisateur - La Frange au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-la-frange/
  - title: Organisateur - Nouveau monde au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/festival-de-la-sainte-barbe-nouveau-monde/
  - title: Organisateur - journée familiale du 6 décembre au Louvre-Lens
    url: https://festivaldelasaintebarbe.com/manifestations/une-journee-grandiose-et-petillante/
  - title: Festival de la Sainte-Barbe - stationnements par site
    url: https://festivaldelasaintebarbe.com/infos-pratiques/ou-se-garer/
  - title: Tadao - itinéraires et horaires des transports du bassin minier
    url: https://www.tadao.fr/index.php/fr/
eventEndsAt: 2026-12-06
topic:
  key: evenements|lens|festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants|2026
  keywords:
    - festival Sainte-Barbe Lens 2026
    - Sainte-Barbe Lens-Liévin en famille
    - spectacle feu Lens 4 décembre 2026
    - Sainte-Barbe Loos-en-Gohelle Oignies 5 décembre
    - Louvre-Lens Sainte-Barbe 6 décembre enfants
slug: festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants
status: published
publishedAt: 2026-10-27T04:28:30.904Z
updatedAt: null
readingTime: 5
affiliate:
  enabled: true
  type: travel
  destination: Lens
---
<!-- article-image-credit -->
*Photo: [Velvet](https://commons.wikimedia.org/wiki/File:Oignies_fosses_9-9bis.JPG) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Le **Festival de la Sainte-Barbe** anime le bassin minier de Lens-Liévin du **27 novembre au 6 décembre 2026**. Ses grands spectacles de feu se concentrent les **vendredi 4, samedi 5 et dimanche 6 décembre**. Avec des enfants, le plus pratique est de choisir un site et un horaire de retour: Lens, Loos-en-Gohelle, Oignies et le Louvre-Lens ne forment pas un parcours unique à pied.

## Quel jour choisir avec les enfants ?

- **Vendredi 4 à Lens:** *Tumulte* commence à **18 h**, tandis que les orgues à feu sont programmés à **20 h 45**. Deux horaires possibles selon l'heure de coucher.
- **Samedi 5 à Loos-en-Gohelle:** *La Kermesse* se déroule de **15 h 30 à 21 h 30**, avec la possibilité de partir avant la soirée.
- **Samedi 5 à Oignies:** atelier *Artifices* l'après-midi, puis *Swing & Fire* à **17 h 15, 18 h 15 ou 20 h** et un final pyrotechnique à **21 h**.
- **Dimanche 6 au Louvre-Lens:** *ToyToy* à **15 h**, fanfares et animations familiales, puis *Nouveau monde* à **19 h**.

Il ne s'agit pas de tranches d'âge officielles. Les effets de feu, les détonations éventuelles et la foule peuvent impressionner certains enfants, même en début de soirée.

## Vendredi 4 décembre à Lens: deux temps forts

<!-- article-image-body:01 -->

![Place Jean-Jaurès à Lens, photographiée en journée en dehors du festival](/images/articles/2026/10/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants-body-01.webp)

*Photo: [Guillaume Baviere from Copenhagen, Denmark](https://commons.wikimedia.org/wiki/File:Jean_Jaur%C3%A8s_square,_Lens.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

À **18 h**, *Tumulte* investit la **place Jean-Jaurès**. Ce spectacle de rue de la compagnie Karnavires, annoncé pour **45 minutes**, mêle machines, marionnettes mécaniques et pyrotechnie. C'est une option pour profiter du festival sans attendre la fin de soirée.

Dès **18 h 30**, les **jardins de la faculté des sciences Jean-Perrin**, avenue Élie-Reumaux, accueillent notamment *Le Train fantôme*, *Radio cagette* et *Flamboyance passée*. À **20 h 45**, *Les Semeurs de Temps et les orgues à Feu* proposent un concert pyrotechnique d'environ **45 minutes**. Avec de jeunes enfants, rien n'oblige à assister aux deux spectacles.

## Samedi 5 décembre: Loos-en-Gohelle ou Oignies

<!-- article-image-body:02 -->

![Terrils de la base 11/19 à Loos-en-Gohelle, photographiés hors festival](/images/articles/2026/10/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants-body-02.webp)

*Photo: [sybarite48](https://commons.wikimedia.org/wiki/File:Loos-en-Gohelle_terrils_11-19.jpg) - [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:02 -->

**À Loos-en-Gohelle**, la **base 11/19**, rue de Bourgogne, accueille *La Kermesse* de **15 h 30 à 21 h 30**. La compagnie La Machine imagine une fête foraine insolite, avec jeux, gourmandises et effets de feu. **Bars et foodtrucks** sont annoncés sur place.

Une **montée aux terrils** est aussi programmée à **17 h 30**. C'est une activité distincte de la kermesse, à la tombée de la nuit, avec une descente suivie d'un moment convivial. Vérifiez les conditions de participation et l'état du terrain si vous envisagez cette marche avec des enfants.

**À Oignies**, le **9-9bis** et ses abords accueillent également des activités dès l'après-midi. L'atelier **Artifices**, rue Alain-Bashung, est annoncé de **15 h à 20 h**: les participants réalisent une carte de Sainte-Barbe. Hauts-de-France Tourisme l'indique **gratuit**; renseignez-vous sur l'accès et les places disponibles.

Sur l'esplanade du 9-9bis, *Swing & Fire* associe cirque, danse, musique et feu à **17 h 15, 18 h 15 et 20 h**. À **21 h**, *Entre terre et ciel - Blast version* réunit danse et pyrotechnie pendant environ **25 minutes**. On peut donc choisir un spectacle plus tôt sans attendre le final.

Les deux sites sont dans des communes différentes: évitez de prévoir les deux dans la même soirée sans avoir vérifié le trajet et le stationnement.

## Dimanche 6 décembre au Louvre-Lens: spectacles et animations

<!-- article-image-body:03 -->

![Façade panoramique du musée du Louvre-Lens, photographiée hors festival](/images/articles/2026/10/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants-body-03.webp)

*Photo: [Easternpenguin](https://commons.wikimedia.org/wiki/File:Panorama_Louvre-Lens.jpeg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:03 -->

Au **Louvre-Lens**, **99 rue Paul-Bert à Lens**, plusieurs rendez-vous permettent de composer une sortie à la carte:

- **15 h:** *ToyToy*, concerto pour jouets à partager entre enfants et parents, au **Pavillon de verre**.
- **16 h:** *La Frange*, fanfare pop dans le hall du musée, annoncée pour **1 h 45**.
- **18 h 30:** *La Frontale*, fanfare étudiante.
- **19 h:** *Nouveau monde*, spectacle de grandes marionnettes gonflables et de pyrotechnie des Plasticiens Volants.

Un **atelier lié à l'exposition « Trop Mignon ! L'art du bonheur »** est annoncé dès **15 h**, ainsi qu'un **stand de maquillage de 15 h à 19 h**. Les conditions d'accès, les places et une éventuelle réservation pour l'atelier doivent être confirmées auprès du musée: ne présumez pas de la gratuité ou de l'accès libre de chaque activité annexe. Les familles qui préfèrent rentrer avant la nuit peuvent se concentrer sur *ToyToy* et les animations de l'après-midi.

## Budget, accès et précautions pratiques

Les **grands spectacles du festival sont annoncés gratuits**: aucun billet de spectacle n'est nécessaire pour ces rendez-vous. Prévoyez néanmoins un budget éventuel pour les repas, les boissons et les déplacements. Les autres animations et les « Étincelles » organisées dès le 27 novembre ont leurs propres modalités; consultez la [programmation officielle par date](https://festivaldelasaintebarbe.com/la-programmation/par-date/) si vous choisissez un autre jour.

Pour venir en voiture, la [page des stationnements du festival](https://festivaldelasaintebarbe.com/infos-pratiques/ou-se-garer/) indique **place du Cantin ou place de la République** pour la faculté Jean-Perrin, **Cité des Provinces à Lens** pour la base 11/19 et les **parkings du 9-9bis, rue du Tordoir**, pour Oignies. Pour le **Louvre-Lens**, elle mentionne les parkings du musée **rue Paul-Bert à Lens** et **rue Mirabeau à Liévin**, ainsi que ceux du **stade Bollaert-Delelis**. Ce sont des indications d'accès, pas une garantie de place disponible.

Sans voiture, vérifiez surtout les **derniers départs** sur le [réseau Tadao](https://www.tadao.fr/index.php/fr/) depuis le lieu choisi. Aucune navette spéciale 2026 ne doit être présumée sur la base des éditions précédentes.

Les spectacles extérieurs se déroulent en décembre: chaussures adaptées, vêtements chauds et protection contre la pluie sont utiles. Une protection auditive peut aider les enfants sensibles au bruit. Respectez les périmètres de sécurité autour des installations. Pour les poussettes et les personnes à mobilité réduite, renseignez-vous sur les cheminements du site retenu, notamment aux terrils et lors des rassemblements nocturnes.

## Passer le week-end à Lens

Si vous venez de loin, [Le Cottage du Louvre à Lens sur Booking.com](https://www.booking.com/hotel/fr/le-cottage-du-louvre.fr.html) propose notamment des **appartements T3 avec deux chambres**, dont une configuration avec un lit double et deux lits simples. Vérifiez la capacité exacte, les couchages et le trajet jusqu'au spectacle choisi. L'arrivée est généralement indiquée **entre 15 h et 20 h**, avec une heure à communiquer à l'établissement: organisez la remise des clés avant un spectacle tardif. Les **prix et disponibilités des nuits du 4 au 6 décembre 2026** restent à vérifier pour votre famille.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | Toussaint 2026 au Louvre-Lens: quelle activité choisir selon l'âge? | sorties | Lens, Pas-de-Calais, Hauts-de-France
- /articles/maison/lens-lievin-jusqu-a-240-pour-recuperer-l-eau-de-pluie/ | Lens-Liévin: jusqu'à 240 € pour récupérer l'eau de pluie | maison | Lens, Pas-de-Calais, Hauts-de-France
- /articles/evenements/cerfs-volants-de-berck-2027-organiser-sa-visite-en-famille/ | Cerfs-volants de Berck 2027: organiser sa visite en famille | evenements | Berck-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | Festival BD Colomiers 2026 en famille: programme, tarifs et accès | evenements | Colomiers, Haute-Garonne, Occitanie
- /articles/evenements/quai-des-bulles-2026-a-saint-malo-en-famille-tarifs-programme-et-conseils/ | Quai des Bulles 2026 à Saint-Malo en famille: tarifs, programme et conseils | evenements | Saint-Malo, Ille-et-Vilaine, Bretagne
- /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | Vacances de la Toussaint 2026 au Louvre: le programme famille du 17 octobre au 1er novembre | sorties | Paris, Paris, Île-de-France
- /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | Rétro Game Festival 2026 à Beauvais: programme, billets famille et animations enfants | evenements | Beauvais, Oise, Hauts-de-France
- /articles/evenements/sainte-foy-a-conques-2026-en-famille-programme-et-conseils-pratiques/ | Sainte-Foy à Conques 2026 en famille: programme et conseils pratiques | evenements | Conques-en-Rouergue, Aveyron, Occitanie
- /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | Festival de la Sainte-Barbe 2026 à Lens-Liévin: programme en famille du 4 au 6 décembre | evenements | Lens, Pas-de-Calais, Hauts-de-France
- /articles/activites/musee-de-la-ceramique-de-desvres-en-famille-visite-ateliers-et-tarifs/ | Musée de la Céramique de Desvres en famille: visite, ateliers et tarifs | activites | Desvres, Pas-de-Calais, Hauts-de-France
- /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | Ville de Noël d’Arras 2026 en famille: horaires, attractions et budget | evenements | Arras, Pas-de-Calais, Hauts-de-France
- /articles/sorties/cite-nature-a-arras-en-famille-quelles-expositions-choisir-cet-automne/ | Cité Nature à Arras en famille: quelles expositions choisir cet automne? | sorties | Arras, Pas-de-Calais, Hauts-de-France
- /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | Toussaint 2026 à Nausicaá: ateliers en journée et nocturne d’Halloween | evenements | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/voyages/maison-du-marais-pres-de-saint-omer-bateau-et-expositions-en-famille/ | Maison du Marais près de Saint-Omer: bateau et expositions en famille | voyages | Saint-Martin-lez-Tatinghem, Pas-de-Calais, Hauts-de-France
- /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | Halloween 2026 à la Tour de l'Horloge de Guînes: visites, contes et nocturne | evenements | Guînes, Pas-de-Calais, Hauts-de-France
- /articles/sorties/parc-bagatelle-en-famille-quelles-attractions-selon-la-taille-des-enfants/ | Parc Bagatelle en famille: quelles attractions selon la taille des enfants? | sorties | Merlimont, Pas-de-Calais, Hauts-de-France
- /articles/bons-plans/nausicaa-a-8-pour-les-adultes-et-6-pour-les-enfants-qui-peut-profiter-des-dimanches-boulonnais/ | Nausicaá à 8 € pour les adultes et 6 € pour les enfants: qui peut profiter des Dimanches Boulonnais? | bons-plans | Boulogne-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/parentalite/creche-a-l-abordage-a-etaples-accueil-ponctuel-ou-regulier-que-choisir/ | Crèche À l'abordage à Étaples: accueil ponctuel ou régulier, que choisir ? | parentalite | Étaples-sur-Mer, Pas-de-Calais, Hauts-de-France
- /articles/evenements/niepce-et-apres-une-exposition-photo-a-decouvrir-en-famille-a-chalon-sur-saone/ | Niépce, et après ? Une exposition photo à découvrir en famille à Chalon-sur-Saône | evenements | Chalon-sur-Saône, Saône-et-Loire, Bourgogne-Franche-Comté
- /articles/evenements/noel-2026-au-puy-du-fou-en-famille-spectacles-et-visite-en-hiver/ | Noël 2026 au Puy du Fou en famille: spectacles et visite en hiver | evenements | Les Epesses, Vendée, Pays de la Loire
- /articles/evenements/exposition-papillons-a-lyon-visiter-le-musee-des-confluences-en-famille/ | Exposition Papillons à Lyon: visiter le musée des Confluences en famille | evenements | Lyon, Rhône, Auvergne-Rhône-Alpes
- /articles/evenements/festival-du-court-metrage-de-clermont-ferrand-2027-en-famille-quelles-seances-choisir/ | Festival du court métrage de Clermont-Ferrand 2027 en famille: quelles séances choisir? | evenements | Clermont-Ferrand, Puy-de-Dôme, Auvergne-Rhône-Alpes

### Historique Radar lié

- opportunity | /articles/evenements/festival-bd-colomiers-2026-en-famille-quel-jour-choisir-et-combien-prevoir/ | 2026-10-29T23:28:55.064Z
- opportunity | /articles/evenements/festival-de-la-sainte-barbe-2026-a-lens-lievin-quelle-soiree-choisir-avec-les-enfants/ | 2026-10-27T04:28:31.006Z
- opportunity | /articles/evenements/halloween-2026-a-la-tour-de-l-horloge-de-guines-musee-hante-contes-et-nocturne/ | 2026-10-12T10:40:26.563Z
- opportunity | /articles/evenements/nausicaa-a-la-toussaint-2026-ateliers-en-journee-ou-nocturne-d-halloween/ | 2026-10-18T08:44:05.495Z
- opportunity | /articles/evenements/retro-game-festival-2026-a-beauvais-quel-jour-choisir-en-famille/ | 2026-10-26T10:34:36.317Z
- opportunity | /articles/sorties/toussaint-2026-au-louvre-lens-quelle-activite-choisir-selon-l-age/ | 2026-10-07T19:13:00.627Z
- opportunity | /articles/sorties/vacances-de-la-toussaint-2026-au-louvre-quelles-activites-choisir-avec-des-enfants/ | 2026-10-03T17:26:28.881Z
- opportunity | /articles/evenements/ville-de-noel-d-arras-2026-en-famille-grande-roue-patinoire-et-horaires/ | 2026-10-29T20:30:33.011Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, uniquement les métadonnées éditoriales réellement ajoutées ou modifiées et le corps complet de l'article. **Ne recopie pas les métadonnées inchangées et n'ajoute aucun bloc `radar`.** Le script normalise la syntaxe sûre de la requête, reprend mécaniquement les autres métadonnées et le bloc Radar de la phase précédente, puis incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` avec `summary`, `sources` et, pour un refresh, `regressionCheck`. Une seule correction factuelle vérifiée peut être suffisante.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
