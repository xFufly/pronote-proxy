# Proxy Pronote

Ce projet est un proxy simple pour accéder à l'interface Pronote d'un établissement scolaire.

## Description

Le proxy Pronote permet de contourner les restrictions de même origine (same-origin policy) en redirigeant les requêtes vers le serveur Pronote à partir d'un serveur local. Cela permet d'accéder à l'interface Pronote depuis un navigateur en évitant les erreurs de cross-origin.

Le proxy gère les requêtes GET et POST vers l'API Pronote, ainsi que le chargement des fichiers CSS et JavaScript nécessaires pour l'interface.

Il permet à l'élève d'avoir l'option de personnaliser les éléments de la page d'acceuille, qui est normalement une fonctionnalité seulement disponible pour les étudiants.

## Configuration

Avant d'utiliser le proxy, assurez-vous de mettre à jour les variables de configuration suivantes dans le fichier `index.js` :

- `webPath`: Le chemin vers le dossier contenant les fichiers CSS et JavaScript de l'interface Pronote.
- `serverUrl`: L'URL du serveur Pronote vers lequel les requêtes seront redirigées.

## Prérequis

- Node.js

## Installation

1. Clonez ce dépôt de code sur votre machine :
```shell
git clone https://github.com/CaraPloof/pronote-proxy
```

2. Naviguez vers le répertoire du projet dans un terminal.
3. Exécutez la commande suivante pour installer les dépendances :

```shell
npm install
```

## Utilisation

1. Lancez le serveur en exécutant la commande suivante :
```shell
npm start
```

2. Accédez à l'interface Pronote à l'adresse http://localhost:3000.

## Contribuer

Les contributions à ce projet sont les bienvenues. N'hésitez pas à ouvrir une issue ou à soumettre une pull request pour proposer des améliorations, des corrections de bugs, etc.

## Licence

MIT License

Copyright (c) 2023 Caraploof & Fufly

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.