# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `vie-pratique`
- Description: Des repères concrets pour faciliter le quotidien des familles.
- Portée: locale
- Département: Charente-Maritime
- Région: Nouvelle-Aquitaine

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail :** « Électroménager, meubles, ordinateur : quelles aides de la Caf en Charente-Maritime pour équiper sa famille ? »

Guide pratique local consacré aux deux aides distinctes de la Caf de Charente-Maritime pour équiper un logement familial en biens essentiels et pour acquérir ou réparer un équipement informatique. L'angle est le parcours concret de la famille, de l'éligibilité à l'achat autorisé, sans confondre prêt remboursable et secours non remboursable.

## Besoin du lecteur
Savoir quelle aide correspond à son besoin (réfrigérateur, lit, bureau, ordinateur pour la scolarité), vérifier les critères locaux, comprendre les plafonds et les exceptions, constituer sa demande et éviter les achats non pris en charge. Comprendre que l'accord préalable est indispensable et que l'aide reste facultative, sous réserve des crédits disponibles.

## Valeur éditoriale
- Comparer deux dispositifs que les familles peuvent confondre : aide ménagère/mobilière (quotient familial jusqu'à 800 €, jusqu'à 1 000 € de prêt, voire 2 000 € dans certaines situations, avec part éventuelle de secours plafonnée à 600 €) et aide informatique (quotient familial jusqu'à 800 €, prêt jusqu'à 500 €, secours possible selon situations particulières).
- Expliquer le parcours différent : électroménager via Envie 17 après notification d'accord, mobilier avec devis, informatique avec devis et paiement direct au fournisseur après accord.
- Mettre en évidence les exclusions décisives : aucun achat avant accord ; pour l'aide ménagère/mobilière, pas d'achat entre particuliers ni sur Internet ; critères de résidence, situation familiale, plafonds par objet, délai entre deux aides.
- Proposer des exemples de besoins familiaux et une checklist des pièces et étapes, sans promettre l'attribution. Vérifier les conditions et formulaires en vigueur à la rédaction.

## Affiliation
**Aucune offre partenaire pertinente retenue.** L'action principale est une demande d'aide sociale auprès de la Caf, avec achat encadré auprès de fournisseurs autorisés après accord. Les partenaires de voyage, hébergement, billetterie, mobilité et location disponibles ne proposent pas ce service. Pas de séjour, billet, produit ou lien commercial artificiel à insérer ; conserver les liens officiels Caf et Envie 17 le cas échéant.

## Sources de départ
- Caf de Charente-Maritime, aide à l'équipement ménager ou mobilier de première nécessité : https://www.caf.fr/allocataires/caf-de-la-charente-maritime/offre-de-service/logement/l-aide-l-equipement-menager-ou-mobilier-de-1ere-necessite
- Caf de Charente-Maritime, aide à l'équipement informatique : https://www.caf.fr/allocataires/caf-de-la-charente-maritime/offre-de-service/vie-personnelle/l-aide-l-equipement-informatique
- Caf de Charente-Maritime, panorama des aides logement : https://www.caf.fr/allocataires/caf-de-la-charente-maritime/offre-de-service/logement

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
