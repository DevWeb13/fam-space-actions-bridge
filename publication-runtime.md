# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `vie-pratique`
- Description: Des repères concrets pour faciliter le quotidien des familles.
- Portée: locale
- Département: Pyrénées-Atlantiques
- Région: Nouvelle-Aquitaine

## Brief du rédacteur en chef

## Sujet retenu
**Transport scolaire dans les Pyrénées-Atlantiques en 2026-2027: Txik Txak ou Région Nouvelle-Aquitaine, comment s'organiser en famille?**

Angle: aider les parents à identifier le bon réseau selon leur commune et le trajet domicile-établissement, puis à comprendre les démarches, les tarifs, les réductions et les solutions en cours d'année. Dans le département, les transports scolaires ne relèvent pas partout du même organisateur: TXIK TXAK dessert notamment le Pays basque, tandis que la Région Nouvelle-Aquitaine organise d'autres circuits scolaires.

## Besoin du lecteur
Savoir à quel organisme s'adresser, différencier circuit scolaire et ligne régulière, vérifier l'éligibilité et les pièces nécessaires, estimer le budget familial, comprendre les règles pour plusieurs enfants, et trouver une aide si l'inscription est tardive ou si la situation familiale change. Ne pas présenter les dates d'inscription estivales comme encore à venir en novembre.

## Valeur éditoriale
- Comparer clairement les deux circuits de démarches, que les pages institutionnelles présentent séparément: simulateur par communes de TXIK TXAK d'un côté, inscription régionale de l'autre.
- Expliquer que, sur le territoire TXIK TXAK, un circuit scolaire nécessite une inscription spécifique alors qu'une ligne régulière peut relever d'un abonnement jeune; vérifier le trajet exact avant d'orienter.
- Présenter les tarifs régionaux 2026-2027 selon statut d'ayant droit, quotient familial et internat/demi-pension, les frais de dossier et les réductions pour fratries, en les distinguant des tarifs et aides locaux TXIK TXAK.
- Donner un exemple concret d'aide communale: le CCAS de Saint-Jean-de-Luz module son aide aux transports scolaires selon les ressources; ne pas généraliser cette aide à tout le département.
- Préciser les démarches pour les élèves en situation de handicap, sans promettre une prise en charge automatique.
- Point de vigilance rédactionnel: confirmer auprès des organisateurs les modalités d'inscription tardive et les tarifs applicables à la date de publication. Le 2 août 2026 était la date limite annoncée pour les inscriptions TXIK TXAK ordinaires; la date de remboursement régional du 15 octobre 2026 est passée.

## Affiliation
Aucune offre pertinente et vérifiée chez les partenaires autorisés pour l'action principale (inscription à un transport scolaire public, abonnement ou aide sociale). Les partenaires de billetterie, hébergement, location de véhicule, transferts, vélos et voyages ne constituent pas une alternative naturelle à ce service quotidien. Aucun lien commercial à ajouter.

## Sources de départ
- TXIK TXAK, transport scolaire et outil d'orientation selon les communes: https://www.txiktxak.fr/le-transport-scolaire/
- TXIK TXAK, tarification solidaire et conditions: https://www.txiktxak.fr/titres-et-tarifs/la-tarification-solidaire/
- Région Nouvelle-Aquitaine, organisation et tarifs 2026-2027: https://transports.nouvelle-aquitaine.fr/transports-scolaires
- Région Nouvelle-Aquitaine, inscription et réductions familles nombreuses: https://transports.nouvelle-aquitaine.fr/transports-scolaires/inscription
- Ville de Saint-Jean-de-Luz, transports scolaires et aide CCAS: https://www.saintjeandeluz.fr/fr/vie-quotidienne/famille-et-scolarite/scolarite/les-transports-scolaires/
- Commune de Bardos, distinction ligne scolaire / ligne régulière: https://www.bardos.fr/i

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
