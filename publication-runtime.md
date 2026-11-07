# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `activites`
- Description: Des activités simples et enrichissantes pour tous les âges.
- Portée: locale
- Département: Charente-Maritime
- Région: Nouvelle-Aquitaine

## Brief du rédacteur en chef

## Sujet retenu
**La Corderie Royale de Rochefort en famille : cordages, ateliers et découverte de l'arsenal maritime.**

Titre de travail : « Corderie Royale de Rochefort en famille : une visite pour comprendre les métiers de la mer ».

Angle : faire découvrir aux enfants comment on fabriquait les cordages des navires, ce qu'ils peuvent manipuler ou observer aujourd'hui et comment organiser une sortie à Rochefort. La Corderie Royale, ancienne manufacture fondée sous Louis XIV, abrite le Centre International de la Mer, une exposition permanente consacrée aux gestes des cordiers et des expositions temporaires.

## Besoin du lecteur
Comprendre ce que l'on visite réellement, ce qui intéresse les enfants selon leur âge, distinguer exposition permanente et ateliers ponctuels, préparer une visite en période fraîche ou pluvieuse, puis éventuellement prolonger la journée dans l'arsenal et la ville de Rochefort. Vérifier les horaires, tarifs, réservations et disponibilités des ateliers à la date de visite.

## Valeur éditoriale
- Raconter concrètement la transformation du chanvre en cordage et le rôle de la longueur exceptionnelle du bâtiment, plutôt que résumer une fiche touristique.
- Distinguer la visite permanente (gestes et démonstrations) des ateliers datés : l'atelier bracelet de matelotage référencé en octobre 2026 ne doit pas être présenté comme disponible tous les jours.
- Expliquer comment rythmer la sortie pour les enfants et quelles activités voisines peuvent compléter une journée à Rochefort, sans promettre l'accès à des sites dont l'ouverture n'est pas vérifiée.
- La Corderie est ouverte le 7 novembre 2026 de 10 h à 13 h et de 14 h à 18 h selon son site officiel ; l'exposition temporaire « Totems » court jusqu'au 3 janvier 2027. Contrôler les horaires pour la date précise du séjour.
- Les résultats existants fournissent déjà des fiches descriptives ; Fam Space peut apporter un parcours familial concret et une distinction nette entre activités permanentes et animations ponctuelles.

## Affiliation
- **Abritel — Maison de ville en hypercentre de Rochefort**, deux chambres, jusqu'à six personnes, à environ six minutes à pied de la Corderie Royale selon l'annonce : https://www.abritel.fr/location-vacances/p1879137
- **Booking.com — Résidence de l'Arsenal Royal**, appartements comprenant notamment des configurations deux chambres pour quatre personnes et trois chambres pour six : https://www.booking.com/hotel/fr/residence-de-la-corderie-royal.fr.html
- Ce sont des pistes de séjour familial, non des disponibilités garanties : vérifier dates, prix et composition du groupe avant toute recommandation précise.
- Billetterie : aucune offre de visite de la Corderie Royale suffisamment précise n'a été confirmée chez Tiqets ou GetYourGuide ; orienter vers la billetterie officielle pour l'entrée, sans inventer de partenaire.

## Sources de départ
- Corderie Royale, site officiel, présentation, visite permanente, exposition et actualités : https://www.corderie-royale.com/
- Corderie Royale, rubrique de visite du site officiel : https://www.corderie-royale.com/
- Destination touristique Infiniment Charentes, atelier de matelotage bracelet (dates d'octobre 2026 à ne pas extrapoler) : https://www.infiniment-charentes.com/fiche-sit/atelier-matelotage-bracelet-5761506

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
