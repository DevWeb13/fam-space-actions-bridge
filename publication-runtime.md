# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `cuisine`
- Description: Des idées et conseils pour cuisiner simplement en famille.
- Portée: locale
- Département: Gard
- Région: Occitanie

## Brief du rédacteur en chef

## Sujet retenu
**La fougasse d’Aigues-Mortes à faire avec les enfants : recette moelleuse à la fleur d’oranger et conseils de réussite.** Cette spécialité sucrée du Gard est une pâte levée, enrichie de beurre et parfumée à la fleur d’oranger, traditionnellement partagée lors de fêtes et goûters. Angle : préparer en famille une vraie fougasse, comprendre ses particularités et réussir les étapes de pousse, de cuisson et de finition, avec une ouverture sur la tradition locale et les fêtes de fin d’année.

## Besoin du lecteur
Comprendre la différence avec une fougasse salée ou un gâteau sans levée, choisir les ingrédients, organiser la préparation avec des enfants, anticiper les temps de repos, réussir une mie moelleuse et la finition beurre-sucre, puis conserver et servir le dessert. Indiquer quelles tâches confier aux enfants selon leur autonomie, sous surveillance adulte pour le four.

## Valeur éditoriale
Donner une recette complète et testable avec quantités cohérentes, durées et signes visuels de réussite, sans promettre une recette historique unique : les versions locales divergent sur la crème, le lait et les proportions. Expliquer le rôle de la levure de boulanger, les erreurs fréquentes (pâte insuffisamment levée, lait trop chaud, cuisson excessive), les gestes accessibles aux enfants et le lien avec Aigues-Mortes. Ne pas recopier une recette tierce : recouper les variantes, puis proposer une méthode originale cohérente. La saison des goûters et des fêtes rend le sujet actuel, mais la recette reste valable toute l’année.

## Affiliation
**Aucune offre partenaire directement pertinente vérifiée.** Recherche d’ateliers culinaires locaux : les ateliers parents-enfants repérés à Uzès/Saint-Quentin-la-Poterie étaient terminés (septembre ou octobre 2026), celui du 27 novembre 2026 est trop proche pour constituer un sujet durable. Recherche de prestations culinaires sur GetYourGuide et Tiqets : aucune réservation confirmée pour apprendre cette recette. Le lecteur cuisine chez lui : billets d’attractions, hébergement Booking (offres disponibles à Nîmes mais sans rapport direct avec cette recette), transports et locations ne sont pas des conseils utiles ici. Ne pas ajouter de lien commercial artificiel.

## Sources de départ
- Gard aux Chefs, histoire et transmission de la fougasse d’Aigues-Mortes : https://gardauxchefs.fr/actualites/la-fougasse-daigues-mortes-un-secret-bien-transmis/
- Gard Tourisme, recettes et produits du terroir : https://www.tourismegard.com/que-faire/restaurants-vins-et-terroir/les-produits-du-terroir/recettes/
- Département du Gard, spécialités culinaires emblématiques : https://militantdugout.gard.fr/toute-lactualite/produits-et-recettes-emblematiques-gardoises.html
- Hervé Cuisine, exemple de recette et déroulé à confronter aux autres variantes : https://www.hervecuisine.com/recette/recette-la-fougasse-aigues-mortes-brioche-moelleuse/

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
