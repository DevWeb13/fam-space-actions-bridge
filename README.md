# fam-space-actions-bridge

Ce dépôt porte les GitHub Actions publiques utilisées par Fam Space afin de ne pas dépendre du quota Actions du dépôt privé `DevWeb13/fam-space-qwik`.

## Livraison éditoriale

Publication, Review et Destination travaillent dans `fam-space-qwik` et créent chacune une branche `automation/*` contenant uniquement leur résultat.

Une fois cette branche créée, l'automatisation écrit son nom dans `bridge-request.txt`. Ce push déclenche immédiatement `.github/workflows/fam-space-bridge.yml`.

Le bridge traite uniquement la branche explicitement demandée. Il utilise les scripts techniques présents sur le `master` courant de `fam-space-qwik`, publie le résultat sur `master`, avance uniquement l'affectation concernée après succès, puis supprime la branche d'automatisation.

Il n'existe aucun polling périodique ni balayage automatique des anciennes branches éditoriales.

## Mise en production

`.github/workflows/fam-space-production-release.yml` s'exécute réellement toutes les 6 heures et peut aussi être lancé manuellement.

S'il existe de nouveaux commits sur `master`, il avance `production` par fast-forward. S'il n'y a aucun changement, il ne fait rien. Les publications sociales liées à une release ne sont lancées que lorsqu'une nouvelle version a effectivement été avancée vers `production`.

## Autres automatisations

Les workflows Images et réseaux sociaux restent indépendants de la livraison éditoriale décrite ci-dessus.
