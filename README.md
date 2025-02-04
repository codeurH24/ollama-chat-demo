# Ollama chatbot démo

## Préambule

Un chatbot local offre une liberté totale en supprimant les abonnements, les restrictions des services externes et la nécessité d’une connexion Internet. Plus de frais à payer ni de limites imposées. Vos données restent sous votre contrôle, sans risque de fuite ou d’exploitation par un tiers. Cela garantit des économies, une confidentialité maximale et une autonomie complète.

## Prérequis


Ce guide est destiné à Ubuntu 24.04 et  
suppose que vous avez déjà installé **Docker Compose**.

Un accès à Internet est nécessaire pour la mise en place du chatbot.
Une fois la mise en place terminée, Internet ne sera plus obligatoire.

Configuration matérielle requise :
- 24 Go de RAM disponible ou plus
- Processeur 32 threads ou plus

! Notes: `Sous Windows, WSL2 est une option intéressante ...`

##  1 - Mise en place du chatbot

1.1  **Démarrer le service ollama**  


```bash
source alias.sh
up
```

Cela va télécharger Node.js version 20 et installer les programmes nécessaires
au bon fonctionnement du projet.
Ensuite, le service Ollama sera prêt.

Accéder au service Ollama :

```bash
cmd
```  


1.2  **Télécharger l'image du modèle d'IA**  


Télécharger le modèle d'intelligence artificielle :  

```bash
ollama pull qwen2.5-coder:7b
```  

Utiliser 1.5b ou 3b à la place de 7b pour les machines moins puissantes.


1.3  **Activer le fonctionnement du chatbot** 

Ouvrir le fichier start.sh et décommentez cette ligne  

```bash
# /bin/bash run-chatbot.sh
``` 

Fermer les services docker compose.

```bash
down
``` 

Le chatbot sera maintenant fonctionnel au prochain redémarrage des services Docker Compose.


##  2 - Démarrer le chatbot

Pour démarrer le chatbot, il suffit de lancer les services et de se rendre, depuis un navigateur, à l'adresse http://localhost:3000 : .

```bash
source allias # Si ce n'est pas déjà fait
up
``` 

<hr>

*Note : `WSL2 a été utilisé pour ce projet, mais il n'est pas obligatoire.`*   