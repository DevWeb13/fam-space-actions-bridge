# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `vie-pratique`
- Description: Des repères concrets pour faciliter le quotidien des familles.
- Portée: locale
- Département: Indre-et-Loire
- Région: Centre-Val de Loire

## Brief du rédacteur en chef

## Sujet retenu
**Titre de travail :** « À Montlouis-sur-Loire, emprunter des objets à la médiathèque : jeux, kits bébé et matériel à tester en famille ».

Angle : expliquer comment utiliser le service de prêt d'objets lancé le 19 août 2026 à la médiathèque Stéphane-Hessel, au-delà des livres. Il propose notamment puzzles, consoles rétrogaming, sacs thématiques et tote-bags petite enfance, ainsi que des appareils multimédias.

## Besoin du lecteur
Découvrir quels objets peuvent être empruntés, à quoi ils peuvent servir dans la vie familiale, comment vérifier leur présence au catalogue, combien de temps les conserver et quelles formalités et conditions tarifaires s'appliquent. Distinguer l'accès gratuit au service de prêt d'objets du coût éventuel de l'abonnement à la médiathèque.

## Valeur éditoriale
- Service récent, durable et distinct des sujets déjà publiés sur les jeux à Tours : Montlouis propose aussi du matériel pratique, multimédia et petite enfance.
- Prêt d'un objet pour un mois, cumulable avec un puzzle, selon l'annonce municipale ; ne pas promettre une disponibilité permanente des objets.
- L'inscription est nécessaire pour emprunter ; la page municipale indique notamment la gratuité pour les moins de 18 ans et des tarifs adultes différents selon la résidence et la situation.
- Proposer des usages concrets en famille : tester un jeu avant achat, découvrir le rétrogaming, emprunter un kit petite enfance, essayer une liseuse. Expliquer les démarches et la consultation du catalogue plutôt que reproduire seulement l'annonce municipale.
- Vérifier au moment de la rédaction les conditions exactes d'emprunt par les mineurs et les éventuelles restrictions sur certains objets.

## Affiliation
Aucune offre partenaire pertinente pour l'action principale : le prêt d'objets s'effectue auprès de la médiathèque, sans billetterie ni réservation marchande. Hébergements vérifiés sur Booking.com à Montlouis-sur-Loire (notamment « Chez Lucie en Touraine », https://www.booking.com/hotel/fr/chez-lucie.fr.html, et « au p'tit logis montlouisien », https://www.booking.com/hotel/fr/au-p-tit-logis-montlouisien.fr.html), mais écartés : une démarche de prêt local n'est pas une raison crédible de réserver un séjour. Aucune affiliation à ajouter artificiellement.

## Sources de départ
- Ville de Montlouis-sur-Loire, lancement du prêt d'objets le 19 août 2026 : https://www.ville-montlouis-loire.fr/actualites/place-au-pret-dobjets-a-la-mediatheque/
- Ville de Montlouis-sur-Loire, médiathèque Stéphane-Hessel, inscription, tarifs et horaires : https://www.ville-montlouis-loire.fr/mediatheque-stephane-hessel/
- Ville de Montlouis-sur-Loire, présentation des services et gratuité jeunes : https://www.ville-montlouis-loire.fr/actualites/vivez-pleinement-la-mediatheque/
- Catalogue de la médiathèque, à consulter pour les objets effectivement disponibles : https://mediatheque.ville-montlouis-loire.fr/

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
