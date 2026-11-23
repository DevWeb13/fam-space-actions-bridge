# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `activites`
- Description: Des activités simples et enrichissantes pour tous les âges.
- Portée: locale
- Département: Rhône
- Région: Auvergne-Rhône-Alpes

## Brief du rédacteur en chef

## Sujet retenu
**Musée de l'Illusion à Lyon en famille: expériences, âges, tarifs et conseils pour la visite.** Angle: une sortie interactive qui permet aux enfants de jouer avec les illusions d'optique tout en comprenant leurs mécanismes, avec un vrai choix de billets selon la composition familiale. Installé au Grand Hôtel-Dieu dans le 2e arrondissement de Lyon, ce musée permanent présente des salles à miroirs, des perspectives trompeuses, un tunnel Vortex et des énigmes visuelles.

## Besoin du lecteur
Comprendre ce que les enfants vont réellement faire, pour quels âges la visite est adaptée, comment préparer une expérience d'environ 45 à 90 minutes, comment s'y rendre et comment choisir entre billet individuel, forfait famille et promotions temporaires. Expliquer les limites possibles des installations déroutantes et les règles d'accompagnement.

## Valeur éditoriale
Décrire plusieurs expériences concrètes et leur intérêt ludique et scientifique, plutôt que recopier une liste d'attractions. Comparer les tarifs officiels affichés (adulte 19 €, enfant 4-15 ans 13 €, moins de 4 ans gratuit, famille 2 adultes + 2 enfants 49 €), sous réserve de mise à jour avant publication. Le musée annonce aussi une opération « un billet enfant offert pour un adulte acheté » du 20 novembre au 19 décembre 2026, uniquement en semaine hors jours fériés, avec code KIDSFREE et conditions précises: ne pas en faire le cœur d'un article durable et vérifier qu'elle est encore valable à la publication. Accès métro Bellecour et réservation par créneau. Distinguer la valeur éducative des illusions de leur côté photographique.

## Affiliation
- **Tiqets**, billet d'entrée au Musée des illusions de Lyon, accès aux installations, réservation d'un créneau: https://www.tiqets.com/fr/les-choses-a-faire-a-lyon-c66838/billets-pour-musee-des-illusions-de-lyon-billet-d-entree-p1142656/ . Offre directement pertinente et actuellement proposée; comparer avant de conseiller, car le forfait famille et l'offre temporaire du site officiel peuvent être plus avantageux.
- **Booking.com**, hébergements au centre de Lyon pour les familles de passage ou un week-end: https://www.booking.com/city/fr/lyon.fr.html . Page d'offres vérifiée, notamment secteur Bellecour; hébergement facultatif et non indispensable à cette visite courte. Aucun hôtel précis ni disponibilité datée confirmés.
- Recherches complémentaires GetYourGuide et Tiqets pour le Musée Cinéma et Miniature et le Musée Lumière: aucune billetterie directe suffisamment certaine identifiée dans ces vérifications. Ne pas inventer d'offre.

## Sources de départ
- Musée de l'Illusion Lyon, accès, tarifs, forfait famille, horaires et accompagnement: https://museedelillusion.fr/contact/lyon/
- Musée de l'Illusion, FAQ (durée, réservation, enfants et accessibilité): https://museedelillusion.fr/faq/
- Musée de l'Illusion, offre temporaire et conditions: https://museedelillusion.fr/current-event/buy-1-adult-ticket-get-1-kids-ticket-free-lyon/
- Office de tourisme de Lyon, description des expériences: https://www.visiterlyon.com/sortir/culture-et-loisirs/activites-loisirs-et-bien-etre/bon-plan/les-activites-du-quartier-bellecour/musee-de-l-illusion

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
