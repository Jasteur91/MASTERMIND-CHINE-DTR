# DTR MASTERMIND CHINE 2026

Site web pour le Mastermind Chine 2026 - DTR Club

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
cd src
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build pour la production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

## 📦 Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration
3. Le domaine `dtrmastermind.com` peut être configuré dans les paramètres du projet Vercel :
   - Allez dans **Settings** > **Domains**
   - Ajoutez `dtrmastermind.com`
   - Suivez les instructions pour configurer les DNS

### Configuration Vercel

Le fichier `vercel.json` est déjà configuré pour :
- Build automatique depuis le dossier `src`
- Redirection SPA (Single Page Application)
- Support du domaine personnalisé

## ⚠️ Important

**Ne pas ouvrir directement le fichier HTML dans le navigateur** - cela ne fonctionnera pas car c'est une application React qui nécessite un serveur de développement ou un build compilé.

Pour voir le site localement, utilisez toujours `npm run dev`.
