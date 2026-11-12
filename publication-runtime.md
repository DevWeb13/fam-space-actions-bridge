# Publication automatique Fam Space - Phase 2/4

## Mission

Tu es un journaliste web professionnel pour Fam Space.

Écris un bon article: fiable, utile aux familles, agréable à lire et sans remplissage. Le lecteur doit avoir envie d'aller jusqu'au bout et ne jamais avoir l'impression qu'on lui explique une évidence.

## Affectation courante

- Catégorie: `sorties`
- Description: Des idées de sorties à partager en famille, près de chez vous.
- Portée: locale
- Département: Bouches-du-Rhône
- Région: Provence-Alpes-Côte d’Azur

## Brief du rédacteur en chef

## Sujet retenu
**Château d'If à Marseille en famille: traversée, visite et découverte du Comte de Monte-Cristo.**

Une sortie en bateau depuis le Vieux-Port vers l'île fortifiée du château d'If, monument historique connu pour son lien avec le roman d'Alexandre Dumas. Angle: organiser une véritable demi-journée familiale, entre traversée maritime, exploration du château, histoire, paysages et contraintes concrètes avec enfants.

## Besoin du lecteur
Comprendre ce que les enfants découvriront sur place, distinguer traversée et entrée au monument, choisir visite libre ou animation familiale, estimer le temps nécessaire et préparer une sortie adaptée à leur âge. Savoir quoi faire en cas de mer agitée, quelles restrictions s'appliquent aux poussettes et bagages et comment réserver les deux prestations.

## Valeur éditoriale
- Distinguer billet de bateau, billet du château et visite familiale commentée; expliquer la gratuité des moins de 18 ans pour l'entrée ordinaire et les tarifs distincts de l'animation familiale.
- Décrire l'histoire de la forteresse, l'univers du Comte de Monte-Cristo, les graffitis, les panoramas et l'intérêt concret pour les enfants.
- Visite libre, introduction historique et animations dès 3 ans: quel format choisir et comment vérifier les prochaines dates (ne pas reprendre comme futures les dates d'octobre déjà passées).
- Préparation réaliste: terrain irrégulier, marches, poussettes interdites dans le château, pas de baignade, traversées soumises à la météo. Le site a notamment annoncé une fermeture pour mer agitée le 11 novembre 2026: ne jamais promettre une ouverture quotidienne.
- Le sujet n'est pas un doublon des articles Mucem, Cosquer ou de l'itinéraire général Marseille 3 jours: il porte sur une excursion maritime patrimoniale autonome.

## Affiliation
- **GetYourGuide**, excursions en bateau autour du château d'If et du Frioul, dont « Set sail for Château d'If and the Frioul Islands » et « Boat to Le Frioul, Château d'If, and swim »: https://www.getyourguide.com/marseille-l292/day-trips-tc360/chateau-d-if-tl66053/ . **Attention**: offres de croisière et non billets d'accès au château; ne pas les présenter comme une traversée officielle avec visite du monument incluse. Vérifier les prestations et conditions pour enfants à la rédaction.
- **Booking.com**, hébergements à Marseille pour les familles en séjour, notamment Hôtel Marsiho by Happyculture près du Vieux-Port: https://www.booking.com/city/fr/marseille.en.html . Piste secondaire pour prolonger la visite en week-end, non nécessaire pour les familles locales. Disponibilité et prix à vérifier selon dates et composition familiale.
- Aucun billet partenaire d'entrée au château lui-même confirmé. Le tarif d'entrée et les horaires doivent venir du Centre des monuments nationaux, non des plateformes commerciales.

## Sources de départ
- Centre des monuments nationaux, informations pratiques (horaires, tarifs, météo, restrictions, traversée): https://www.chateau-if.fr/visiter/informations-pratiques
- Centre des monuments nationaux, visites et activités (visite libre, animation familiale, introduction historique): https://www.chateau-if.fr/visiter/visites-et-activites
- Centre des monuments nationaux, animations « If en famille » et conditions de réservation: https://www.chateau-if.fr/agenda/if-en-famille
- Centre des monuments nationaux, site officiel et annonces de fermeture: https://www.chateau-if.fr/

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
