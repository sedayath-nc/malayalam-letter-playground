# Malayalam Letter Playground (React)

A classroom Malayalam word-building app with collapsible letter groups, drag and drop, tap-to-add tiles, conjunct letters, undo, and a combined-word preview. No login or API keys required. Boards are saved in the current browser only.

## Run locally

Install Node.js (a supported LTS release), then run:

```sh
npm ci
npm run build
```

Serve the dist folder with any static web server. For example, if Python is installed:

```sh
python3 -m http.server 3000 --directory dist
```

Open http://localhost:3000. After editing source, run npm run build again.

## Push to GitHub

Create an empty GitHub repository, then run these commands in this folder, replacing YOUR_USERNAME:

```sh
git init
git add .
git commit -m "Add Malayalam learning app in React"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/malayalam-letter-playground.git
git push -u origin main
```

## Deploy to Vercel

Import the GitHub repository into Vercel. Use Framework Preset: Other, Build Command: npm run build, Output Directory: dist. The included vercel.json supplies the build and output settings. No environment variables are required. Ensure production access is public so students can open it.

## Structure

- src/app.jsx: React components and board state
- src/letters.js: Malayalam tiles, word composition and reordering
- build.mjs: esbuild production build
- dist/index.html: HTML entry
- dist/style.css: responsive styling
- dist/app.js: generated React bundle (rebuild after source edits)

The leading-vowel helper attaches an initial vowel sign to the next letter. It is a classroom convenience, not a general Malayalam spell checker. Fonts load from Google Fonts with system fallbacks.
