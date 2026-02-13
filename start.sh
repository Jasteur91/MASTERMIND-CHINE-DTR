#!/bin/bash

echo "🚀 Démarrage du serveur de développement DTR MASTERMIND CHINE 2026"
echo ""
echo "📁 Navigation vers le dossier src..."
cd src

echo "📦 Vérification des dépendances..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  Installation des dépendances (première fois)..."
    npm install
fi

echo ""
echo "✅ Lancement du serveur de développement..."
echo "🌐 Le site sera accessible sur http://localhost:5173"
echo ""
echo "⚠️  IMPORTANT: Ne fermez pas cette fenêtre !"
echo "   Pour arrêter le serveur, appuyez sur Ctrl+C"
echo ""

npm run dev
