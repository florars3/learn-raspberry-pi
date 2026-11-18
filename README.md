# Learn Raspberry Pi

A Raspberry Pi in your browser, no hardware needed. 16 beginner lessons on a 3D Raspberry Pi 5: wire a circuit, edit Python, run it, use a simulated terminal, and step through 7 animated "How it works" explainers. No install, no backend.

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

- Progress and edited code are saved in each visitor's browser (localStorage).
- The 3D board uses three.js r128, loaded from cdnjs. If WebGL is unavailable (or the CDN is blocked), the page falls back to a flat drawing automatically. Visitors can also switch to it in Settings.
- Unofficial project. Not affiliated with or endorsed by Raspberry Pi Ltd. Raspberry Pi is a trademark of Raspberry Pi Ltd.
