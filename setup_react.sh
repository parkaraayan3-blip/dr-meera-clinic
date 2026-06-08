#!/bin/bash

# Clear any failed temp folder
rm -rf temp-app

# 1. Create Vite project in a fresh temp directory
npx --yes create-vite@latest temp-app --template react

# 2. Move files into the current directory safely
cp -R temp-app/* .
cp temp-app/.* . 2>/dev/null || true
rm -rf temp-app

# 3. Install core React dependencies
npm install

# 4. Install Tailwind and plugins
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Install Framer Motion and UI utilities
npm install framer-motion lucide-react clsx tailwind-merge

echo "✅ React + Tailwind + Framer Motion setup successfully!"
