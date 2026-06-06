#!/bin/bash
set -e

echo "=== Git Push Helper ==="
echo "Adding changes..."
git add LICENSE README.md src/data/resume.tsx
git rm -f src/components/balatro-background.tsx 2>/dev/null || true

echo "Committing changes..."
git commit -m "Clean up Dillion Verma traces, fix TypeScript errors, and update remote"

echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Your portfolio has been successfully pushed to GitHub."
