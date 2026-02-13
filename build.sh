#!/bin/bash
set -e

echo "📦 Installation des dépendances..."
cd src
npm install

echo "🔨 Build du projet..."
npm run build

echo "✅ Build terminé !"
