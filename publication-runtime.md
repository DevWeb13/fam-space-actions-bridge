# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `activites`
- Description: Des activités simples et enrichissantes pour tous les âges.
- Portée: locale
- Département: Yonne
- Région: Bourgogne-Franche-Comté

## Brief du rédacteur en chef

## Sujet retenu
**Parc du Moulin à Tan à Sens: une sortie nature gratuite en famille, même en hiver.**

Le parc du Moulin à Tan est un jardin public de Sens (Yonne) avec espaces de promenade, jeux, parcours botanique et serres de collections tropicales. L'angle est de construire une véritable activité familiale d'observation de la nature, en distinguant ce qui se visite toute l'année des animations ponctuelles et des serres dont les conditions d'accès doivent être vérifiées.

## Besoin du lecteur
Savoir organiser une demi-journée gratuite avec des enfants: activités selon l'âge, promenade et observations saisonnières, jeux, pique-nique, horaires et équipements, puis éventuellement prolonger par une découverte de Sens. Comprendre que l'ouverture du parc ne garantit pas celle des serres ni la tenue d'ateliers.

## Valeur éditoriale
- Parc gratuit ouvert en novembre-décembre 2026 tous les jours de 8h à 17h30 selon l'office de tourisme; alternative pertinente aux attractions saisonnières fermées.
- Proposer des mini-défis de découverte adaptés aux familles: chercher des traces d'animaux, reconnaître les feuillages, observer les oiseaux, comparer les plantes de saison, sans promettre d'animations encadrées.
- Distinguer parc, serres tropicales, jardin botanique, aire de jeux et événements occasionnels; vérifier séparément les horaires des serres avant rédaction.
- Donner un parcours souple avec option courte en cas de froid et conseils pratiques (toilettes, stationnement, pique-nique), sans inventer d'accessibilité détaillée.
- Les résultats de recherche donnent surtout une fiche de lieu et des événements datés; un itinéraire familial concret, réutilisable et hivernal apporte une valeur supplémentaire.

## Affiliation
- **Activité principale:** parc gratuit; aucune billetterie à acheter. Aucune offre précise correspondante confirmée sur GetYourGuide ou Tiqets; ne pas ajouter de billet artificiel.
- **Hébergement Booking.com:** « Le Laurencin Sens - Le Family - Cœur de ville », appartement familial de deux chambres à Sens (lit double et lits superposés), pour les familles qui prolongent la découverte de Sens sur un week-end. Offre consultable: https://www.booking.com/hotel/fr/le-family-sens.fr.html . Vérifier disponibilité et prix aux dates du séjour, non garantis.
- Autre option examinée: « Appartement au centre ville de Sens » (Booking.com), https://www.booking.com/hotel/fr/appartement-au-centre-ville-de-sens.html ; moins ciblée que Le Family. Une seule recommandation d'hébergement suffit dans l'article.

## Sources de départ
- Office de tourisme Sens et Sénonais, fiche du parc, équipements, gratuité et horaires 2026: https://www.tourisme-sens.com/visite-musee/parc-du-moulin-a-tan-et-serres-de-collections-tropicales/
- Office de tourisme, exemple d'animation naturaliste ponctuelle (28 octobre 2026, terminée; ne pas la présenter comme actuelle): https://www.tourisme-sens.com/agenda/suivre-les-traces-et-indices-de-la-faune/

## Écrire l'article

Lis le brief, puis fais les recherches nécessaires auprès de sources officielles ou directement responsables. Le brief donne une direction, pas un plan obligatoire. S'il contient un angle trop étroit ou une mauvaise formulation, corrige-la sans changer le sujet.

Écris pour quelqu'un qui peut découvrir le sujet. Dans les premières lignes, donne le contexte indispensable: ce que c'est, où cela se trouve lorsque c'est pertinent, ce qu'on y fait ou y trouve et pourquoi cela peut intéresser une famille. Une ou deux phrases peuvent suffire pour un sujet déjà très connu. Si un nom local, touristique ou géographique n'est pas évident pour un lecteur extérieur au territoire, explique-le immédiatement ou remplace-le par une formulation plus claire.

Sélectionne l'information au lieu de l'épuiser. Garde ce qui aide réellement à comprendre, choisir, préparer ou éviter une mauvaise surprise. Renvoie vers la source pour les détails secondaires au lieu de recopier une page officielle.

Respecte l'intelligence du lecteur. Ne détaille pas un calcul ou un raisonnement évident qui n'aide aucune décision, mais conserve les comparaisons chiffrées lorsqu'elles apportent une information utile. Ne répète pas une information sous plusieurs formes.

Une information importante doit normalement apparaître une seule fois. L'introduction, les sections et la fin ne doivent pas redire la même chose. La structure doit découler du sujet, pas d'un gabarit, et une conclusion n'est pas obligatoire si elle ne fait que résumer ce qui vient d'être lu.

Il n'existe aucun objectif de longueur. Développe ce qui est utile au lecteur et arrête-toi lorsque le sujet est traité complètement, sans remplissage.

N'utilise pas de tableau Markdown: sur Fam Space, ils nuisent à la lecture sur téléphone. Pour une comparaison, préfère quelques paragraphes courts, une liste simple ou de petits blocs successifs.

Chaque source réellement utilisée doit apparaître naturellement dans le corps sous forme de lien Markdown au passage qu'elle documente. Recopie ces sources dans le frontmatter `sources`.

Vérifie seulement les informations pratiques pertinentes pour ce sujet: dates, horaires, tarifs, réservation, âges, accessibilité, poussettes, accès, transports, stationnement, équipements ou contacts. Ne transforme pas cette liste en checklist à remplir.

À cette phase, concentre-toi sur la qualité journalistique. La phase suivante s'occupera de l'affiliation et des liens internes.

## Format du candidat

Produis un article complet avec ce frontmatter, puis le corps Markdown après le second `---`:

```yaml
---
category: "<catégorie assignée>"
title: "Titre direct et informatif"
subtitle: "Précision différente du titre"
summary: "Résumé de 90 à 180 caractères"
keywords:
  - "mot-clé principal"
  - "mot-clé secondaire"
location:
  city: "Ville"
  department: "Département assigné"
  region: "Région assignée"
sources:
  - title: "Page officielle utilisée"
    url: "https://..."
---
```

La localisation doit correspondre au sujet : si l'article concerne tout le département, omets `city` ; n'invente pas de ville. Pour une affectation nationale, supprime entièrement `location`. Ajoute `eventEndsAt: "YYYY-MM-DD"` seulement lorsqu'une date de fin réelle rend le contenu obsolète après cette date. Une fermeture saisonnière d'un lieu ou d'une activité qui rouvre ensuite n'est pas une date de fin du sujet.

Ne crée pas de H1 dans le corps et ne crée pas de section `Sources`.

## Contexte mécanique du passage

- Phase préparée mécaniquement: 2/4
- L'affectation issue de la rotation est déjà fournie dans ce fichier.
- Les règles partenaires nécessaires sont intégrées directement lorsqu'elles sont utiles à la phase.
- Le travail validé de la phase précédente est intégré directement pour les phases 2 à 4.

Ce runtime est le seul fichier interne d'instructions à lire pour ce passage. Fais uniquement le travail éditorial ou de recherche demandé ci-dessous.

## Remettre le résultat

Toute la plomberie technique est gérée mécaniquement. Ne cherche aucune branche, aucun SHA, aucun commit et aucun état Git. Ne modifie aucun fichier de DevWeb13/fam-space-qwik.

Écris uniquement publication-request.md sur la branche main de DevWeb13/fam-space-actions-bridge avec le résultat éditorial demandé dans ce runtime. Le pipeline mécanique se charge de la phase, de la branche de travail, des commits, de la validation et de la suite du cycle.

Utilise:

~~~yaml
---
action: advance
---

<article complet demandé ci-dessus, frontmatter compris>
~~~

Rends toujours l'article complet, même si cette phase ne nécessite que peu de corrections. Une fois publication-request.md écrit, termine le passage.

## Rapport final

Reste factuel et court. Le rapport sert uniquement à contrôler le travail éditorial effectué pendant cette phase.

Indique le sujet et l'angle conservés, ce que l'article apporte concrètement, les principales informations couvertes, les sources utilisées et les éventuelles faiblesses du brief corrigées.
