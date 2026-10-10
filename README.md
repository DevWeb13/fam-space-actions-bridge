# fam-space-actions-bridge

Ce dépôt porte les GitHub Actions publiques utilisées par Fam Space afin de ne pas dépendre du quota Actions du dépôt privé `DevWeb13/fam-space-qwik`.

## Publication

La planification Publication lit uniquement `publication-runtime.md`.

Elle écrit uniquement `publication-request.md`. Le workflow `.github/workflows/publication-request.yml` gère mécaniquement la branche `automation/publication-*`, l'état `publication-state.json`, les transitions de phase et la génération du runtime suivant.

Les phases 1 à 3 restent hors de `master`. Après la phase 4, `bridge-request.txt` déclenche `.github/workflows/fam-space-bridge.yml`, qui ne fait plus que la finalisation Publication: validation finale, publication sur `master`, rotation, remise en phase 1 et suppression de la branche.

## Destination

Destination conserve son fonctionnement existant: une branche `automation/destination-*` est signalée via `bridge-request.txt`, puis le bridge publie le candidat validé sur `master` et supprime la branche.

## Mise en production

`.github/workflows/fam-space-production-release.yml` avance périodiquement `production` vers `master` par fast-forward lorsqu'un changement public doit réellement être livré. Les transitions internes Publication et Radar ne déclenchent pas de release inutile.

## Autres automatisations

Radar, Images et les réseaux sociaux restent indépendants de la livraison Publication décrite ci-dessus.
