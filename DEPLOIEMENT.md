# Guide de déploiement - DTR MASTERMIND CHINE 2026

## 🌐 Configuration du domaine dtrmastermind.com sur Vercel

### Étape 1 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Importez ce projet
4. Vercel détectera automatiquement la configuration Vite

### Étape 2 : Configurer le domaine personnalisé

1. Dans votre projet Vercel, allez dans **Settings** > **Domains**
2. Cliquez sur **Add Domain**
3. Entrez `dtrmastermind.com`
4. Vercel vous donnera des instructions pour configurer les DNS :
   - Ajoutez un enregistrement **A** ou **CNAME** pointant vers Vercel
   - Les DNS peuvent prendre quelques minutes à quelques heures pour se propager

### Étape 3 : Vérification

Une fois configuré, votre site sera accessible sur :
- `https://dtrmastermind.com`
- `https://votre-projet.vercel.app` (URL Vercel par défaut)

## 🖥️ Lancer le projet localement

### Prérequis
- Node.js installé (version 18 ou supérieure)
- npm installé

### Commandes

```bash
# Aller dans le dossier src
cd src

# Installer les dépendances (première fois seulement)
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### ⚠️ IMPORTANT

**Ne pas ouvrir directement le fichier `index.html` dans Safari ou un autre navigateur !**

Cela ne fonctionnera pas car :
- C'est une application React qui nécessite un serveur
- Les modules ES6 ne fonctionnent pas avec `file://`
- Vite doit compiler et servir les fichiers

**Utilisez toujours `npm run dev` pour voir le site localement.**

## 📦 Build de production

Pour créer un build de production :

```bash
cd src
npm run build
```

Les fichiers compilés seront dans `src/dist/`

## 🔧 Dépannage

### Page blanche dans Safari
- Assurez-vous d'utiliser `npm run dev` et non d'ouvrir directement le HTML
- Vérifiez la console du navigateur pour les erreurs

### Problèmes de build sur Vercel

**Erreur : "Commande 'cd src && npm install' sortie avec 1"**

✅ **Solution appliquée** : 
- Un `package.json` a été créé à la racine du projet qui délègue les commandes au `package.json` dans `src/`
- Le `vercel.json` utilise maintenant ces scripts pour gérer le changement de répertoire
- La propriété `rootDirectory` a été supprimée car elle n'est pas supportée par Vercel

**Structure actuelle :**
```
/
├── package.json (scripts de délégation)
├── vercel.json (configuration)
└── src/
    ├── package.json (votre projet Vite)
    └── ...
```

Si vous rencontrez encore des problèmes :
- Vérifiez que tous les fichiers sont commités (y compris le nouveau `package.json` à la racine)
- Vérifiez les logs de build dans Vercel
- Assurez-vous que `package.json` existe à la fois à la racine ET dans `src/`
- Vérifiez que `vercel.json` est à la racine du projet
