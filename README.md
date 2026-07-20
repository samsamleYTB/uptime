<div align="center" width="100%">
    <img src="./public/icon.svg" width="120" alt="RavoHost" />
</div>

# RavoHost Status

Outil de supervision auto-hébergé utilisé par RavoHost pour surveiller la disponibilité de ses serveurs et afficher une page de statut publique pour ses clients.

## Fonctionnalités

- Supervision HTTP(s) / TCP / Ping / DNS / Websocket / Docker / serveurs de jeu et bien d'autres types de sondes
- Intervalles de vérification configurables (20 secondes par défaut)
- Pages de statut publiques, personnalisables et associables à un nom de domaine
- Notifications par email, Discord, Telegram, Slack et une centaine d'autres services
- Graphiques de latence, historique de disponibilité, informations de certificat
- Authentification à deux facteurs, gestion multi-utilisateurs, clés API

## Installation

### Avec Docker Compose (recommandé)

```bash
git clone <url-du-dépôt> ravohost-status
cd ravohost-status
docker compose up -d --build
```

L'instance est ensuite disponible sur `http://localhost:3001` (ou `http://<ip-du-serveur>:3001`).

> [!WARNING]
> Les systèmes de fichiers réseau comme **NFS** ne sont pas supportés pour le dossier `data`. Utilisez un volume ou un disque local.

### Sans Docker

Prérequis : Node.js ≥ 20.4.

```bash
npm ci
npm run build
npm run start-server
```

## Développement

```bash
npm ci
npm run dev
```

Le serveur backend écoute sur le port 3001, le frontend Vite avec rechargement à chaud sur le port 3000.

## Réinitialiser un mot de passe

```bash
npm run reset-password
```

## Support

Un souci avec votre instance ? Écrivez-nous à **support@ravohost.fr**.

## Licence

Ce projet est distribué sous licence MIT — voir le fichier [LICENSE](./LICENSE).

Construit à partir d'[Uptime Kuma](https://github.com/louislam/uptime-kuma), un outil open source publié sous la même licence, dont il reprend le moteur de supervision.
