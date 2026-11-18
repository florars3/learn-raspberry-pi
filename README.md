# Learn Raspberry Pi

A Raspberry Pi in your browser, no hardware needed. 16 beginner lessons on a 3D Raspberry Pi 5: wire a circuit, edit Python, run it, use a simulated terminal, and step through 7 animated "How it works" explainers. No install, no backend.

Made by [Ripudaman Flora](https://github.com/florars3).

## Languages and settings

- 10 languages: English, Spanish, Portuguese (Brazil), French, Italian, German, Dutch, Polish, Turkish and Indonesian. Lessons, explainers, labels and code comments are translated; the simulator's own hints in the terminal are translated too, while real Linux and Python messages stay in English, as they would on a real Pi. Each language is a JSON file in `public/i18n/`, loaded only when picked. The site follows the browser's language on first visit.
- Theme: Auto (follows the device), Light or Dark, from the sun/moon button on the rail or in Settings.
- Settings: theme, language, callout labels, current flow on wires, floor grid, turntable, sound, reduce motion, 3D or flat board, angled view and reset progress.

It is a static site: everything lives in `public/`.

## Run locally

    npm run dev        # serves public/ at http://localhost:3000

## Deploy to Vercel

**Option A: GitHub (recommended, redeploys on every push)**
1. Create a new GitHub repo and push this folder to it.
2. On vercel.com, choose Add New → Project and import the repo.
3. Framework preset: **Other**. Leave the build command empty. The output directory is already set to `public` in `vercel.json`.
4. Deploy. In Project → Settings → Domains you can set the name, e.g. `learn-raspberry-pi.vercel.app`.

**Option B: command line**

    npx vercel          # first run links the project and makes a preview URL
    npx vercel --prod   # publishes to production

## After the first deploy

`index.html` uses `https://learn-raspberry-pi.vercel.app/` for the canonical and share-image URLs. If your domain is different, search and replace it in `public/index.html`, then redeploy.

## Notes

- Installable and works offline: `manifest.webmanifest` plus a small service worker (`sw.js`). Pages load network-first; language files, icons, three.js and fonts are cached. Bump `V` in `sw.js` if you ever need to force-clear old caches.
- `404.html` is served for unknown paths.

- Progress and edited code are saved in each visitor's browser (localStorage).
- The 3D board uses three.js r128, loaded from cdnjs. If WebGL is unavailable (or the CDN is blocked), the page falls back to a flat drawing automatically. Visitors can also switch to it in Settings.
- Unofficial project. Not affiliated with or endorsed by Raspberry Pi Ltd. Raspberry Pi is a trademark of Raspberry Pi Ltd.
