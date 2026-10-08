# Word Forge v3

Word Forge is a static, dark forge-themed educational game for exploring Latin-rooted vocabulary. It preserves five play areas—Forge, Decode, Lexicon, Flashcards, and Stories—and adds a Fact Vault, persistent XP, daily streaks, levels, sound control, and accessible serialized reward dialogs.

The source bank contains 500 records. Only words marked `reviewed:true` are taught in Forge, Decode, and word Flashcards; the rest are preserved but held back until their decompositions and definitions receive named-reference review, or are quarantined with a reason. `npm test` prints the current reviewed count, `node scripts/review-status.mjs` shows progress by stem family, and [`data/vocab-audit.md`](data/vocab-audit.md) records each decision and its reference.

## Run locally

There is no build step and there are no runtime dependencies. Open `index.html` directly for offline play, or serve the directory for a normal local origin:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000/`. Run the complete zero-dependency data and progression harness with:

```sh
npm test
```

## Files

- `index.html` is the entry point and contains the markup, forge theme, and browser UI logic.
- `core.js` is the shared browser/Node progression and persistence module.
- `data/words.js`, `data/facts.js`, and `data/stories.js` expose classic-script `window.WF.*` globals so direct `file://` loading works.
- `scripts/check-data.mjs` validates the data split and shared core behavior.
- `scripts/review-status.mjs` reports vocabulary review progress and the next batch to review.

## Progress, offline use, and privacy

The app makes no network requests, uses a system font stack, and has no analytics, accounts, advertising SDKs, or cloud sync. Progress is stored only in this browser under `localStorage["wordforge.v1"]`; clearing site data removes it. Storage failures fall back to an in-memory session and show a warning. Multi-tab merging is best-effort, so simultaneous writes can occasionally lose one award.

## Deploy

1. Replace the placeholder `liveUrl` in `macscott.json` with the production HTTPS Vercel URL.
2. Disable Vercel automatic production deployment for the repository.
3. Protect the `master` branch and configure the GitHub `production` environment plus `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` secrets.
4. Push to protected `master`. `.github/workflows/ci-deploy.yml` tests the exact SHA, confirms it is still branch head, and then performs `vercel deploy --prod --yes`.
5. Add the public repository topic `macscott-app`, confirm catalog discovery, and test the production URL inside the catalog iframe.

This repository contains deployment scaffolding only; no deployment is performed by the source tree itself.
