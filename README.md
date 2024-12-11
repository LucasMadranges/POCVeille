# Serveless Application

Application POC pour la veille de développement fullstack sans serveur, dit "

## Architecture

- **/lambda** : Fichier de config pour la fonction Lambda AWS.
- **/src** : Fichier de l'application React.

## AWS

- **Lambda** : Fonction AWS permettant de connecter différentes instances d'entrée et de sorties.
- **RDS** : Base de données relationnelle de AWS.
- **API Gateway** : API d'entrée de AWS.

## Lancer le projet

Placez-vous à la racine du projet et faites cette commande :

```
npm run dev
```

Le projet devrait se lancer à l'adresse http://localhost:5173