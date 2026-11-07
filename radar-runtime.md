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

Soumets le résultat via `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet. **Ne recopie aucun bloc `radar` et ne fournis aucune branche ni aucun SHA.** La plomberie mécanique conserve le diagnostic GSC, la cible, le slug et les champs protégés.

## Candidat validé de la phase précédente

---
title: "Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026"
subtitle: Qui peut souscrire, pourquoi le demi-tarif ne fonctionne pas sur téléphone et quand préférer Navigo Easy ou imagine R Junior.
summary: "En 2026, Navigo Liberté+ facture 2,04 € le métro et 1,02 € au tarif réduit sur passe. Conditions pour les enfants, démarches, budgets familiaux et alternatives: les points à vérifier avant de souscrire."
category: bons-plans
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: /images/articles/2026/10/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone.webp
  alt: Passe Navigo tenu devant une enseigne du métro parisien, photographie de 2019
sources:
  - title: "Île-de-France Mobilités - Navigo Liberté+: tarifs et plafonnement 2026"
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus
  - title: Île-de-France Mobilités - Tarifs officiels 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités - Souscrire un contrat Liberté+
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/comment-souscrire-un-contrat-navigo-liberte-plus
  - title: Île-de-France Mobilités - Souscription en ligne pour un mineur
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/souscrire-sur-internet-pour-un-mineur
  - title: Île-de-France Mobilités - Conditions du tarif réduit
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/quelles-sont-les-conditions-pour-beneficier-dun-tarif-reduit
  - title: Île-de-France Mobilités - Pas de tarif réduit Liberté+ sur téléphone
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/tarif-reduit-sur-telephone
  - title: Île-de-France Mobilités - Passe Navigo Easy
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy
  - title: Île-de-France Mobilités - Imagine R Junior 2026-2027
    url: https://www.iledefrance-mobilites.fr/actualites/forfait-navigo-imagine-r-souscription-en-ligne
  - title: Île-de-France Mobilités - Conditions d'accès à Liberté+
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/quelles-conditions-navigo-liberte
  - title: Île-de-France Mobilités - Correspondances Liberté+
    url: https://www.iledefrance-mobilites.fr/correspondances-navigo-liberte-plus
  - title: Île-de-France Mobilités - Gratuité des moins de 4 ans
    url: https://www.iledefrance-mobilites.fr/gratuite-pour-les-enfants-de-moins-de-4-ans
topic:
  key: bons-plans|paris|navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone|2026
  keywords:
    - Navigo Liberté+ enfant 2026
    - Navigo Liberté+ tarif réduit sur passe
    - Navigo Liberté+ ou Navigo Easy famille
    - Navigo Liberté+ téléphone enfant
slug: navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone
status: published
publishedAt: 2026-10-25T10:33:29.977Z
updatedAt: null
readingTime: 5
radar:
  schemaVersion: 1
  phase: 1
  mode: refresh
  targetPath: src/routes/articles/bons-plans/(2026)/(10)/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/index.md
  targetSha: 32b89d45d8700cc92718667eeafac429252f2158
  targetUrl: /articles/bons-plans/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/
  decision: Savoir combien coûte réellement Liberté+ pour chaque membre de la famille, notamment lors d'une nouvelle souscription après résiliation ou d'un passage au tarif réduit, avant de choisir passe, téléphone ou tickets.
  affiliationPotential: "Aucune affiliation naturelle : titre de transport public. Conserver les liens officiels et le maillage vers le comparatif des transports parisiens."
  gsc:
    retrievedAt: 2026-11-07T02:32:02+01:00
    dataThrough: 2026-11-04
    signal: uncertain
    basis: "Visibilité récente : 173 impressions sur trois jours, puis 51 sur les trois derniers jours consolidés; cause non établie. Diagnostic sur 0 requête(s) comparable(s) : cause de la baisse non établie; vérifier une lacune éditoriale indépendante."
    peakStart: 2026-10-27
    peakEnd: 2026-10-29
    recentStart: 2026-11-02
    recentEnd: 2026-11-04
    peakImpressions: 173
    recentImpressions: 51
    commonQueries: 0
    positionDelta: null
    impressionRatio: 0
    focusQueries:
      - passe navigo enfant 6 ans
      - navigo liberté + famille nombreuse
      - tarif liberté plus 2026
      - 12 ans
      - liberté + enfant
---

## Mission retenue
Compléter le guide Navigo Liberté+ en famille 2026 sur deux conditions financières peu visibles, sans réécrire son comparatif déjà solide.

## Pourquoi cette mission
Le snapshot GSC passe de 173 à 51 impressions sur les périodes de trois jours comparées, mais le signal est « uncertain » et aucune perte de position n'est démontrée. L'article est globalement complet. Deux précisions indépendantes sont toutefois confirmées par les informations officielles : la gratuité de souscription sur passe ne vaut que pour la première souscription, et un changement ultérieur du plein tarif au tarif réduit n'est pas nécessairement immédiat.

## Décision du lecteur
Comprendre le coût réel et le délai d'activation du tarif enfant/réduit, afin de choisir le support et de ne pas compter sur une réduction ou une gratuité de dossier qui ne s'appliquerait pas.

## Faits à traiter
- Selon la RATP, la première souscription Liberté+ sur passe Navigo personnalisé est gratuite ; après résiliation, une nouvelle souscription sur passe entraîne 8 € de frais de dossier. Sur téléphone, la souscription reste gratuite même après résiliation. Expliquer sans présenter ces frais comme systématiques.
- Selon Île-de-France Mobilités, le tarif réduit s'applique après validation du justificatif à la souscription ; en cas de passage ultérieur du plein tarif au tarif réduit, il s'applique le mois suivant. Mentionner la fin du tarif enfant à la fin du mois des 10 ans.
- Préserver tarifs 2026, éligibilité résident/travailleur, conditions pour mineurs, absence de tarif réduit sur téléphone, plafonnement, aéroports, comparaisons chiffrées, Navigo Easy, imagine R Junior, images et crédits. Ne pas attribuer la baisse GSC à ces lacunes ni modifier une date pour le référencement.

## Sources de départ
- RATP, Navigo Liberté+ : https://www.ratp.fr/titres-et-tarifs/navigo-liberte
- Île-de-France Mobilités, conditions du tarif réduit : https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/quelles-sont-les-conditions-pour-beneficier-dun-tarif-reduit
- Île-de-France Mobilités, offre et tarifs : https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus

## Affiliation
Aucune : information sur un service de transport public.

## Continuations internes
Conserver le renvoi existant vers le comparatif des transports à Paris pour les touristes et les autres titres, sans redévelopper ce sujet.

## Article source exact à préserver et améliorer

Chemin: src/routes/articles/bons-plans/(2026)/(10)/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone/index.md

---
title: "Navigo Liberté+ en famille: tarifs enfants et choix du passe en 2026"
subtitle: Qui peut souscrire, pourquoi le demi-tarif ne fonctionne pas sur téléphone et quand préférer Navigo Easy ou imagine R Junior.
summary: "En 2026, Navigo Liberté+ facture 2,04 € le métro et 1,02 € au tarif réduit sur passe. Conditions pour les enfants, démarches, budgets familiaux et alternatives: les points à vérifier avant de souscrire."
category: bons-plans
location:
  city: Paris
  department: Paris
  region: Île-de-France
image:
  src: "/images/articles/2026/10/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone.webp"
  alt: "Passe Navigo tenu devant une enseigne du métro parisien, photographie de 2019"
sources:
  - title: "Île-de-France Mobilités - Navigo Liberté+: tarifs et plafonnement 2026"
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/liberte-plus
  - title: Île-de-France Mobilités - Tarifs officiels 2026
    url: https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026
  - title: Île-de-France Mobilités - Souscrire un contrat Liberté+
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/comment-souscrire-un-contrat-navigo-liberte-plus
  - title: Île-de-France Mobilités - Souscription en ligne pour un mineur
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/souscrire-sur-internet-pour-un-mineur
  - title: Île-de-France Mobilités - Conditions du tarif réduit
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus/quelles-sont-les-conditions-pour-beneficier-dun-tarif-reduit
  - title: Île-de-France Mobilités - Pas de tarif réduit Liberté+ sur téléphone
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/tarif-reduit-sur-telephone
  - title: Île-de-France Mobilités - Passe Navigo Easy
    url: https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy
  - title: Île-de-France Mobilités - Imagine R Junior 2026-2027
    url: https://www.iledefrance-mobilites.fr/actualites/forfait-navigo-imagine-r-souscription-en-ligne
  - title: Île-de-France Mobilités - Conditions d'accès à Liberté+
    url: https://www.iledefrance-mobilites.fr/aide-et-contacts/navigo-liberte-plus-sur-telephone/quelles-conditions-navigo-liberte
  - title: Île-de-France Mobilités - Correspondances Liberté+
    url: https://www.iledefrance-mobilites.fr/correspondances-navigo-liberte-plus
  - title: Île-de-France Mobilités - Gratuité des moins de 4 ans
    url: https://www.iledefrance-mobilites.fr/gratuite-pour-les-enfants-de-moins-de-4-ans
topic:
  key: bons-plans|paris|navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone|2026
  keywords:
    - Navigo Liberté+ enfant 2026
    - Navigo Liberté+ tarif réduit sur passe
    - Navigo Liberté+ ou Navigo Easy famille
    - Navigo Liberté+ téléphone enfant
slug: navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone
status: published
publishedAt: 2026-10-25T10:33:29.977Z
updatedAt: null
readingTime: 5
---
<!-- article-image-credit -->
*Photo: [Cheng-en Cheng from Taichung City, Taiwan](https://commons.wikimedia.org/wiki/File:Navigo_card_and_a_Paris_Metro_sign_in_the_background_(49630879972).jpg) - [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) via Wikimedia Commons (image recadrée).*
<!-- /article-image-credit -->

Pour une famille qui prend le métro ou le bus de temps en temps en Île-de-France, **Navigo Liberté+ permet de payer après les trajets, sans acheter de tickets à l'avance**. En 2026, il coûte moins cher que les tickets unitaires. Mais pour les enfants, le support change tout: **le tarif réduit Liberté+ fonctionne sur un passe Navigo personnel, pas sur téléphone**. Et un enfant francilien peut parfois voyager pour moins cher avec imagine R Junior.

## Combien coûte Navigo Liberté+ en 2026 ?

La souscription est gratuite. Vous payez les trajets réalisés, facturés le mois suivant, sans abonnement mensuel fixe. Les tarifs applicables depuis le 1er janvier 2026 sont:

- **Métro, train et RER**: 2,04 € au plein tarif, **1,02 € au tarif réduit**.
- **Bus, tramway et câble C1**: 1,64 € au plein tarif, **0,82 € au tarif réduit**.

À titre de comparaison, un Ticket Métro-Train-RER acheté à l'unité coûte **2,55 €** (1,30 € au tarif réduit), et un Ticket Bus-Tram **2,05 €** (1,05 € au tarif réduit).

Les correspondances autorisées ne sont pas facturées une seconde fois: jusqu'à **1 h 30** pour un trajet commencé en bus ou tramway, et **2 h** pour un trajet commencé en métro, train ou RER, dans les conditions du réseau. Une correspondance métro-bus peut compter comme un seul trajet; ressortir d'une zone contrôlée et y entrer à nouveau peut entraîner une nouvelle facturation.

Dans une même journée, la facturation ordinaire est plafonnée au prix du **Navigo Jour, soit 12,30 € en 2026**, hors trajets aéroportuaires spécifiques. Ce plafond ne correspond pas à un forfait Navigo Jour enfant à moitié prix.

## Quel support pour un enfant ?

<!-- article-image-body:01 -->

![Carte Navigo Easy photographiée en 2021, distincte du passe Navigo nominatif](/images/articles/2026/10/navigo-liberte-en-famille-en-2026-tarif-enfant-passe-ou-telephone-body-01.webp)

*Photo: [James Tamim](https://commons.wikimedia.org/wiki/File:Navigo_Easy.jpg) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via Wikimedia Commons (image redimensionnée).*

<!-- /article-image-body:01 -->

Pour bénéficier des trajets à **1,02 € en métro/RER** ou **0,82 € en bus/tram**, un enfant éligible doit disposer de **son propre passe Navigo nominatif**, d'un contrat Liberté+ et d'un justificatif de réduction validé. Les enfants de moins de 10 ans figurent parmi les bénéficiaires; pour eux, la réduction prend fin à la fin du mois de leur dixième anniversaire. D'autres situations, notamment la carte Familles nombreuses, ouvrent aussi droit au tarif réduit.

**Liberté+ sur smartphone ne propose aucun tarif réduit**, même si l'enfant aurait droit à cette réduction sur passe. Ne le confondez pas non plus avec **Navigo Easy**: ce support non nominatif sert notamment à charger des tickets à l'unité, y compris à tarif enfant. Il coûte **2 €**, peut être prêté à une autre personne, mais chaque voyageur doit disposer de son propre support pendant un trajet effectué ensemble.

Les **moins de 4 ans** voyagent gratuitement sur les réseaux franciliens, sauf Filéo, sans titre de transport. Un justificatif d'âge est nécessaire pour établir ce droit en cas de contrôle.

## Comment souscrire pour son enfant ?

Le parent ou représentant légal peut souscrire en ligne pour un mineur ou se rendre en agence avec l'enfant. En ligne, il faut notamment prévoir **un RIB**, les informations du titulaire, une **photo** si nécessaire et le **justificatif du tarif réduit**. Le formulaire comporte l'option « Je souscris pour un mineur ou un majeur sous tutelle ». Si l'enfant n'a pas encore de compte Île-de-France Mobilités Connect, l'adresse e-mail renseignée pour lui doit être différente de celle du payeur et de celle des autres clients Navigo: elle sert à poursuivre la procédure. Les signatures électroniques requises sont ensuite recueillies.

Pour un **nouveau passe envoyé à domicile**, le délai annoncé peut atteindre **21 jours hors week-ends et jours fériés** après validation du dossier complet. Si l'enfant possède déjà un passe Navigo valide, il faut **attendre au moins 48 heures après validation de la souscription, puis charger le contrat** sur le passe à un automate ou point de vente compatible. En agence, le titulaire et le payeur, s'ils sont différents, doivent être présents; un nouveau passe peut être remis directement.

Le service s'adresse aux personnes **résidant ou travaillant en Île-de-France**. Une famille venue simplement visiter Paris n'y est donc pas automatiquement éligible. Un travailleur francilien habitant hors de la région peut souscrire sur passe en agence avec un justificatif de son employeur, mais Liberté+ sur téléphone n'est pas disponible pour les non-résidents.

## Deux exemples de budget pour deux adultes et un enfant de 7 ans

Supposons que les trois personnes soient éligibles à Liberté+, que le tarif réduit de l'enfant soit activé et qu'aucun plafonnement quotidien ne s'applique.

**Un aller-retour en métro pour chacun** (deux trajets par personne):

- **Liberté+**: 4 trajets adultes × 2,04 € + 2 trajets enfant × 1,02 € = **10,20 €**.
- **Tickets à l'unité**: 4 × 2,55 € + 2 × 1,30 € = **12,80 €**.
- **Économie sur les trajets: 2,60 €**.

**Un aller-retour en bus ou tramway pour chacun**:

- **Liberté+**: 4 × 1,64 € + 2 × 0,82 € = **8,20 €**.
- **Tickets à l'unité**: 4 × 2,05 € + 2 × 1,05 € = **10,30 €**.
- **Économie sur les trajets: 2,10 €**.

Ces comparaisons portent uniquement sur les trajets. Si la famille doit acheter **trois passes Navigo Easy neufs**, ajoutez **6 €** au coût des tickets à l'unité; des supports déjà possédés n'entraînent pas ce surcoût.

Les dessertes d'**Orly par le métro 14** et de **CDG par le RER B** ont une tarification particulière avec Liberté+: **14 €** par trajet, ou **7 €** au tarif réduit. Elles ne sont pas comprises dans le plafonnement ordinaire.

## Quand préférer Navigo Easy ou imagine R Junior ?

**Navigo Easy** convient si vous n'êtes pas éligible à Liberté+, ne souhaitez pas ouvrir un contrat avec prélèvement bancaire ou avez besoin de tickets immédiatement. Pour les séjours touristiques et les comparaisons avec Navigo Jour, Semaine et Paris Visite, notre guide [des transports à Paris avec des enfants](/articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/) détaille les autres options.

**Imagine R Junior** peut être plus avantageux pour un enfant **résidant en Île-de-France et âgé de moins de 11 ans au 31 décembre de l'année de souscription**. Le forfait annuel 2026-2027 coûte **25,20 € frais de dossier compris**, avec des déplacements illimités selon ses conditions. À titre de comparaison, **25 trajets de métro à 1,02 € coûtent 25,50 €** avec Liberté+, si ces trajets ne bénéficient pas du plafonnement quotidien. Pour un enfant qui utilise régulièrement les transports, même modestement, vérifiez donc l'éligibilité et les dates de validité du forfait Junior.

Pour un adulte qui se déplace tous les jours, comparez plutôt avec Navigo Mois ou Annuel. Le meilleur titre peut être différent pour chaque membre de la famille.

## Contexte éditorial ciblé pour le maillage et les doublons

### Articles proches préparés mécaniquement

- /articles/voyages/transports-a-paris-avec-des-enfants-quel-titre-choisir-pour-payer-juste/ | Transports à Paris avec des enfants: quel titre choisir pour payer juste? | voyages | Paris, Paris, Île-de-France
- /articles/bons-plans/chateau-de-champs-sur-marne-en-famille-gratuites-tarifs-et-dates-a-eviter/ | Château de Champs-sur-Marne en famille: gratuités, tarifs et dates à éviter | bons-plans | Champs-sur-Marne, Seine-et-Marne, Île-de-France
- /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | Noël Gaulois 2026 au Parc Astérix: billets, glissades et spectacles en famille | evenements | Plailly, Oise, Hauts-de-France
- /articles/bons-plans/pic-du-midi-moins-cher-quand-choisir-le-billet-date-plutot-que-le-pass-liberte/ | Pic du Midi moins cher: quand choisir le billet daté plutôt que le Pass Liberté | bons-plans | Bagnères-de-Bigorre, Hautes-Pyrénées, Occitanie
- /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | Noël 2026 à Toulon en famille: marché, patinoire et horaires | evenements | Toulon, Var, Provence-Alpes-Côte d’Azur
- /articles/bons-plans/musee-de-tautavel-moins-cher-avec-lio-le-bon-plan-a-connaitre/ | Musée de Tautavel moins cher avec liO: le bon plan à connaître | bons-plans | Tautavel, Pyrénées-Orientales, Occitanie
- /articles/bons-plans/chamonix-en-famille-sans-voiture-train-gratuit-et-bus-a-prix-reduit-avec-la-carte-d-hote/ | Chamonix en famille sans voiture: train gratuit et bus à prix réduit avec la carte d’hôte | bons-plans | Chamonix-Mont-Blanc, Haute-Savoie, Auvergne-Rhône-Alpes
- /articles/parentalite/telephone-portable-lycee-rentree-2026-regles/ | Téléphone portable au lycée en 2026: ce qui change à la rentrée | parentalite
- /articles/sorties/soiree-jeux-gratuite-a-paris-le-21-novembre-2026-jeux-video-et-jeux-de-societe-en-famille/ | Soirée jeux gratuite à Paris le 21 novembre 2026: jeux vidéo et jeux de société en famille | sorties | Paris, Paris, Île-de-France
- /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | Atelier Calder à Paris le 14 novembre 2026: fabriquer un mobile dès 5 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | Contes gratuits à Paris le 14 novembre 2026: trois rendez-vous en famille | evenements | Paris, Paris, Île-de-France
- /articles/activites/pokemon-et-biodiversite-a-paris-le-28-novembre-2026-atelier-dessin-des-10-ans/ | Atelier Pokémon et biodiversité à Paris le 28 novembre 2026: dessin dès 10 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | Atelier omamori gratuit à Paris le 21 novembre 2026: créer une amulette dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | Atelier couture gratuit à Paris le 28 novembre 2026: dès 8 ans | activites | Paris, Paris, Île-de-France
- /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | Contes gratuits à Paris le 14 novembre 2026: spectacles et scène ouverte en famille | evenements | Paris, Paris, Île-de-France
- /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | Écoute, je danse ! à Paris le 5 décembre 2026: spectacle gratuit dès 6 mois | evenements | Paris, Paris, Île-de-France
- /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | Atelier laine cardée de Noël à Paris le 2 décembre 2026: décorations dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | Atelier pop-up gratuit à Paris le 21 novembre 2026: créer en famille dès 7 ans | activites | Paris, Paris, Île-de-France
- /articles/bons-plans/troyes-en-famille-a-petit-budget-musees-gratuites-et-balades-dans-le-centre/ | Troyes en famille à petit budget: musées, gratuités et balades dans le centre | bons-plans | Troyes, Aube, Grand Est
- /articles/bons-plans/abbaye-de-saint-savin-en-famille-tarifs-gratuites-et-visite-avec-les-enfants/ | Abbaye de Saint-Savin en famille: tarifs, gratuités et visite avec les enfants | bons-plans | Saint-Savin, Vienne, Nouvelle-Aquitaine
- /articles/bons-plans/albi-en-famille-a-petit-budget-deux-programmes-entre-patrimoine-et-musee/ | Albi en famille à petit budget: deux programmes entre patrimoine et musée | bons-plans | Albi, Tarn, Occitanie
- /articles/bons-plans/visiter-falaise-en-famille-a-petit-prix-quel-pass-choisir/ | Visiter Falaise en famille à petit prix: quel pass choisir ? | bons-plans | Falaise, Calvados, Normandie

### Historique Radar lié

- opportunity | /articles/activites/atelier-calder-gratuit-a-paris-le-14-novembre-2026-creer-un-mobile-des-5-ans/ | 2026-11-05T16:36:05.180Z
- opportunity | /articles/activites/atelier-couture-gratuit-a-paris-le-28-novembre-2026-creer-en-famille-des-8-ans/ | 2026-11-05T04:36:26.347Z
- opportunity | /articles/activites/atelier-laine-cardee-de-noel-a-paris-le-2-decembre-2026-creer-ses-decorations-des-7-ans/ | 2026-11-04T18:34:22.540Z
- opportunity | /articles/activites/atelier-omamori-gratuit-a-paris-le-21-novembre-2026-creer-une-amulette-japonaise-des-7-ans/ | 2026-11-05T07:29:24.731Z
- opportunity | /articles/activites/atelier-pop-up-gratuit-a-paris-le-21-novembre-2026-creer-un-livre-anime-en-famille/ | 2026-11-04T15:34:37.269Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quel-spectacle-choisir-selon-l-age/ | 2026-11-05T13:27:24.356Z
- opportunity | /articles/evenements/contes-gratuits-a-paris-le-14-novembre-2026-quelle-seance-choisir-en-famille/ | 2026-11-05T00:34:45.481Z
- opportunity | /articles/evenements/ecoute-je-danse-a-paris-le-5-decembre-2026-spectacle-gratuit-pour-les-6-mois-3-ans/ | 2026-11-04T21:32:12.180Z
- opportunity | /articles/evenements/noel-2026-a-toulon-en-famille-marche-ou-village-des-enfants/ | 2026-10-31T10:28:17.432Z
- opportunity | /articles/evenements/noel-gaulois-2026-au-parc-asterix-billet-malin-noel-ou-flex-en-famille/ | 2026-10-24T09:33:57.174Z

### Phases 2 et 3

Écris `radar-request.md` avec `action: advance`, le frontmatter éditorial utile et le corps complet de l'article. **N'ajoute aucun bloc `radar`.** Le script reprend mécaniquement le bloc Radar de la phase précédente et incrémente la phase.

Pour un refresh, le script conserve de lui-même les champs protégés de l'article source. Pour une opportunity, il conserve la catégorie, le territoire et le slug choisis en phase 1.

En phase 3 seulement, ajoute `radarReview` dans la requête avec `summary`, `sources` et, pour un refresh, `substantialChanges` et `regressionCheck`.

## Écriture autorisée

N'effectue aucune plomberie Git. Ne crée, ne nomme et ne supprime aucune branche Radar; ne choisis aucun SHA; ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement radar-request.md sur la branche main de DevWeb13/fam-space-actions-bridge selon le format fourni dans ce runtime. Le workflow GitHub se charge du reste. Une fois cette requête écrite, termine le passage.
