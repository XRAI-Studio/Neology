# Plan: Word Forge v3 — Forge-themed upgrade, Duolingo scoring, contextual fact popups, shipped to scott.macscott.net/apps

_Locked via grill — by Claude + Scott. Revised after Codex Round 1._

## Goal
Take the existing single-file `word-forge.html` educational game (5 modes — Forge, Decode, Lexicon, Flashcards, Stories; 500 Latin/Greek-rooted words, 182 parts, 49 "Aha!" facts, 18 stories) and ship an upgraded **v3** that (1) re-skins it into a distinctive dark "forge/smithy" theme with embers, sparks, and molten-metal accents; (2) adds a persistent Duolingo-style progression system (XP + daily streak + levels, localStorage, no hearts/lives); (3) surfaces etymology facts as contextual reward popups tied to the word just played, mined and conservatively expanded from the 80k-char `Interesting Word Etymology Stories` doc, and collects seen facts into a revisitable **Fact Vault**; and (4) deploys through the established MacScott apps pipeline so it auto-appears in the `scott.macscott.net/apps` catalog. Audience is kids/students; motivation and warmth win over punishment.

## Approach

### 1. Restructure source (light split, no build step) — with exact export schemas
Convert the docx-embedded source into real files:
- `index.html` — markup + CSS + game logic (renamed from `word-forge.html`).
- `data/words.js`, `data/facts.js`, `data/stories.js` — plain `<script>` globals, loaded before the game script.
- `word-forge-500-words.md` — human reference (excluded from the public repo per §8).

**Exact exported schemas (define before splitting — resolves the WF_PARTS mismatch):**
```
window.WF.PREFIXES = [ [part, meaning, example], ... ]      // 25
window.WF.STEMS    = [ [part, meaning, example], ... ]      // 132
window.WF.SUFFIXES = [ [part, meaning, example], ... ]      // 25
window.WF.FAMILY_NOTES = { "<prefix>": "family story text", ... }  // Lexicon depends on this — must be carried over
window.WF.WORDS    = [ [word, prefix|null, stem, suffix|null, literal, definition, reviewed], ... ]  // reviewed:boolean
window.WF.FACTS    = { "<word>": "aha line", ... }          // every key MUST be a WORDS[0]
window.WF.STORIES  = [ [emoji, title, body], ... ]          // 18
```
A tiny inline integrity check runs at load in dev: every `FACTS` key and every word's prefix/stem/suffix must resolve against the part tables; mismatches `console.warn` loudly. Fonts are self-hosted or dropped (see §2) so the split stays truly zero-dependency and offline-capable.

**Shared logic module (`core.js`):** all testable non-UI logic — XP formula, level derivation, daily-streak transitions, schema migration, and the field-level storage validator (§4) — lives in `core.js`, written to work in **both** the browser (attaches to `window.WF.core`) and Node (module export). `index.html` and the test harness (§7) both import the *same* functions, so tests exercise the real production code rather than re-implemented copies.

### 2. Dark forge theme (look-and-feel upgrade)
- New palette: obsidian/charcoal background, ember-orange + molten-gold accents, forge-glow for correct actions. Replaces the electric-blue/sunshine scheme.
- Signature moments: sparks when a snap-block locks; forged word "ignites" (glow/heat shimmer) on success; anvil-style impact feedback. Reuse the existing sparkle layer + Web Audio SFX — no new libraries.
- Keep the chunky snap-block tray (the signature interaction); restyle, don't redesign.
- **Zero remote dependencies:** remove the current `fonts.googleapis.com` `<link>` — either self-host the (licensed) Baloo 2 / Nunito files under `assets/fonts/` with `@font-face`, or fall back to a system font stack. Verify the whole app loads with networking disabled.
- Accessibility: keep `:focus-visible` outlines; ensure WCAG AA contrast on the dark theme; gate all new spark/ignite/shake animation behind `prefers-reduced-motion`.
- Add a persisted sound on/off toggle.

### 3. Duolingo-style progression — exact spec (XP + daily streak + levels; localStorage; no hearts)

**XP (exact, integer-only):**
- Base: +10 XP per correct answer (Forge or Decode).
- **No first-try bonus.** (Both `answerDecode` and `checkForge` set `answered=true` and disable inputs on the first submission — there is no retry path, so a correct answer is *always* a first attempt. A first-try bonus would fire on 100% of correct answers, i.e. it is not a bonus. Verified in source. Retry-until-correct is a possible future mechanic, explicitly out of scope for v3.)
- Combo multiplier: the in-round consecutive-correct counter (the old header 🔥, see below) multiplies base XP by tier — **×1 for combo 0–2, ×1.5 for 3–5, ×2 for 6+**. The combo counter is incremented **after** the current answer is scored, so the current answer is rewarded at its **pre-increment** tier. `Math.round` applied so XP is always an integer. No daily XP cap in v1.
  - Worked examples (all first answers of a round, each correct): answer #1 scored at combo 0 → +10; #2 at combo 1 → +10; #3 at combo 2 → +10; #4 at combo 3 → +15; #7 at combo 6 → +20. A wrong answer resets combo to 0.

**Levels (derived, never stored):** persist **XP only**; compute level + progress on every load from one immutable table:
| Level | Rank | Cumulative XP to reach |
|---|---|---|
| 1 | Apprentice | 0 |
| 2 | Journeyman | 100 |
| 3 | Smith | 300 |
| 4 | Master Smith | 700 |
| 5 | Forgemaster | 1500 |
| 6 | Legendary | 3000 (max; beyond this stays Legendary, ring shows full) |
Level-up is detected by comparing derived level before vs. after an XP award.

**Daily streak (the header 🔥):**
- "Played today" = earned ≥1 XP today. Day key = **local** `YYYY-MM-DD`.
- On a qualifying action: if `lastActiveDate` is yesterday → `dailyStreak++`; if today → unchanged; if older or absent → reset to 1. Then set `lastActiveDate = today`.
- Load-time display normalization: if `lastActiveDate` is neither today nor yesterday, the displayed streak is 0 until the next XP is earned (no stale count).
- Guard against a **future** `lastActiveDate` (clock rollback / bad clock): treat as invalid → reset streak to 0/1 on next play. Uses local calendar-day comparison, so DST/timezone shifts only ever cost at most a day, never crash.

**Combo vs. daily streak (disambiguation):** the *existing* in-round 🔥 is a consecutive-correct combo that resets on a wrong answer and on mode switch — it now drives only the XP combo multiplier and a small in-card indicator. The **header 🔥 is the persistent daily streak.** Two separate values, separate names in code (`combo` vs `dailyStreak`).

### 4. Persistence, resilience, and reward sequencing

**Storage schema (one versioned object):**
```
localStorage["wordforge.v1"] = {
  schema: 1, xp: 0, dailyStreak: 0, lastActiveDate: "YYYY-MM-DD"|null,
  correctTotal: 0,            // canonical — story unlocks derived from this (correctTotal/3), fixes partial-progress loss
  seenFacts: ["<word>", ...], // Fact Vault contents; committed the moment a fact popup is shown
  soundOn: true
}
```
- **Schema handling (order matters):** parse and branch on the **raw `schema` value first, before any field validation** — older-but-recognized → migrate forward; **greater than the known version** → treat the store as **read-only/in-memory, never overwritten** (so an older build can't clobber newer progress); recognized-current → proceed to field validation; corrupt/absent → fresh default without throwing. (Validating fields before branching would let the "schema within known range" rule silently default a future schema and defeat the read-only protection.) `unlockedStories` is **not** stored (derived from `correctTotal`, capped — see §5).
- **Field-level validator (defines "corrupt" structurally):** even when JSON parses, each field is validated independently and a bad field is defaulted on its own (not a whole-store reset): `xp` and `correctTotal` coerced to **safe integers ≥ 0**; `dailyStreak` a safe integer ≥ 0; `schema` an integer within the known range; `lastActiveDate` validated by **round-trip calendar check on numeric components** — split into y/m/d integers, construct `new Date(y, m-1, d)` (local, **not** `new Date("YYYY-MM-DD")` which parses as UTC and can shift the day in local timezones), re-emit and require equality, so `2026-99-99` and day-shifts are rejected — and not a future local date, else nulled; `seenFacts` an array, **deduped and filtered to current `WF.FACTS` keys** (not `WORDS` — a word can outlive a removed fact, which would otherwise leave a collected ID with no vault content); `soundOn` boolean. Negative/oversized/non-integer counters, impossible or future dates, and stale fact IDs are thus caught rather than trusted.
- **Every** `localStorage` read/write is wrapped in try/catch (covers private mode, `file://`, quota, iframe storage partitioning). On failure the game runs from an in-memory store and shows a non-blocking "Progress won't be saved on this device" banner once.
- **Multi-tab progression is explicitly best-effort** (proportionate for a single-child app; no Web Locks). Each write re-reads the stored object first and applies this mutation to that fresh copy, which handles the common sequential case. Field-by-field reconciliation rules: `xp`/`correctTotal` = fresh value **+ this action's delta**; `seenFacts` = union; `lastActiveDate` = the later date; `dailyStreak` = the value belonging to the later `lastActiveDate`; `soundOn` = last-writer-wins. Two tabs committing in the exact same instant may lose one XP award — documented, not prevented. A `storage` event refreshes the header.

**Reward queue (fixes reward collisions):** a single serialized queue processes at most one reward modal at a time, priority **level-up → story unlock → contextual fact**. Informational reward modals require **explicit dismissal** (no auto-advance timeout — resolves the accessibility conflict). Earned rewards are **never discarded on mode switch**: a mode change is deferred/queued until the open reward modal is acknowledged, then remaining rewards drain. Replaces the current ad-hoc `setTimeout(...,900)` story popup.

### 5. Contextual fact popups + Fact Vault
- **Fact bank:** start from the existing 49 facts, **repair the 7 orphan keys** (`accuracy`, `eject`, `exclaim`, `submerge`, `suspend`, `propel`, `revolve` — verified absent from the 500-word bank, so they can never fire today) by remapping each to a word that exists or dropping it. Then **conservatively** expand toward ~90–110 total (not ~150), each new fact keyed to a word already in `WORDS`. **Accuracy standard (not just provenance):** every new or changed fact is checked against a **named authoritative reference** (Etymonline or a standard etymological dictionary), and that reference is retained as an audit comment beside the fact in `data/facts.js`. Tracing to the source doc alone is insufficient (the doc itself contains unsupported claims). See risk `[[etymology-fact-sourcing]]`.
- **Trigger:** on a correct answer with a matching **unseen** fact, enqueue the fact popup as a reward. Already-seen words don't re-fire the popup (they live in the Vault). Words with no fact get a quick generic celebration.
- **Fact Vault:** a dedicated view reachable from the nav/Lexicon area. Facts have stable IDs (the word key). Shows collected/total. **Ordering: first-seen order is canonical** (it already uniquely orders collected facts); an alphabetical view is offered only as a filter/toggle. Explicit empty state ("Forge words to collect their secrets"). A fact is committed to `seenFacts` the moment its popup is shown.
- **Accessible modals (all popups — facts, stories, level-up):** `role="dialog"` + `aria-modal`, labelled by title, Escape to dismiss, focus moved into the modal on open and restored to the trigger on close, focus contained while open.
- **Story unlocks capped:** `unlockedStories = Math.min(WF.STORIES.length, Math.floor(correctTotal / 3))`; only in-bounds transitions enqueue a reward (no invalid indices past 18 stories / 54 correct).

**Vocabulary data QA — reviewed record, not heuristics (the 500-word bank is not assumed correct):** the source has verified decomposition/definition errors — `accurate` given as `ad-+curr` "run to" (it is Latin *accurare*, "take care of"); `version` mapped to `ver` "true" while `convert`/`reverse` correctly use `vert` "turn"; `infection`'s definition is the WordNet `(phonetics)` gloss, not the disease sense. Cheap automated heuristics were tried and **rejected**: a per-stem consistency check can't catch `version` (it selects the *wrong stem key*, `ver` instead of `vert` — nothing is internally inconsistent), and lemma-overlap / domain-label filters false-positive on legitimate definitions (`accept` = "consider or hold as true") and mislabel valid senses. Correctness therefore requires human review against named references:
- **"Taught pool" is made real via a `reviewed` flag** on each `WORDS` entry (schema above). **Every word-presenting mode — Forge, Decode, and the Flashcards "words" deck (which currently maps over all `WORDS`, line ~1330) — filters to `reviewed:true`.** Enforced by a test: no teaching mode may surface an unreviewed word. This is what actually creates a "taught pool"; without the flag, all 500 are taught and no quarantine can exist.
- **Deliverable `data/vocab-audit.md`:** a reviewed record mapping every reviewed word to its `{prefix, stem, suffix, literal, definition}` and a **named reference** (Etymonline / a standard etymological dictionary). Errors found (including the three above) are corrected in `data/words.js` and the entry marked `reviewed:true`.
- **Long tail** (still `reviewed:false`): either audited (flip to true) or **cut from runtime data** — not merely "left in Lexicon," since the Flashcards deck also shows words. Nothing unreviewed is ever taught.
- **Product claim updated:** the README/marketing count becomes "**N reviewed words**" (N = size of the reviewed pool), not a blanket "500," so the claim matches what's actually playable.
- **Escalation threshold:** validate a random **10% sample** of the reviewed pool against references; **any** material etymology/definition error → audit the **full** bank.
- The lemma/domain heuristics survive only as *triage hints* to order the review, never as pass/fail gates.

### 6. Ship via the MacScott apps pipeline
- `neology` → real git repo → **public** GitHub repo under `XRAI-Studio` (subject to the §8 allowlist).
- Deploy static output to **Vercel** for an HTTPS `liveUrl` not on a showcase origin. **No build transform** — the allowlisted static files are served directly (no framework/bundler).
- **CI gate that actually blocks deploy:** GitHub Actions does **not** inherently block Vercel's git-triggered deploy, so **Vercel automatic production deployment is turned off**. The Actions workflow runs `npm test` (the `scripts/check-data.mjs` harness, §7) and, **only on success**, deploys via the Vercel CLI. For a no-framework static site use a **source deploy** — `vercel deploy --prod --yes` (**not** `--prebuilt`, which requires a prior `vercel build` and a `.vercel/output` the workflow deliberately doesn't produce). Requires protected secrets **`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`** and a production environment-approval policy.
- **Deploy-workflow safety:** deploy job triggers **only on protected `main`**, uses a **production concurrency group with `cancel-in-progress: true`**, and **verifies the checked-out SHA is still the branch head** before deploying — so a slow older CI run can't finish late and redeploy stale code over a newer commit.
- Repo-root `macscott.json`: `{ schemaVersion:1, title:"Word Forge", description, owner:"scott", liveUrl:"<vercel https url>", embeddable:true, screenshot:"screenshots/cover.png", accent:"<ember hex>" }` + GitHub topic `macscott-app`. Add `screenshots/cover.png`.
- Optional `.github/workflows/macscott-revalidate.yml` (secret `MACSCOTT_REVALIDATE_SECRET`) for seconds-fast catalog refresh.
- **Shipment gate:** before declaring done, verify against the live catalog — confirm the manifest is accepted and the app actually appears in `scott.macscott.net/apps` (staging discovery), and test it **inside the catalog iframe** (audio autoplay, storage partitioning). If framing misbehaves, set `embeddable:false`.

### 7. Testing / acceptance harness
**Harness (concrete):** `scripts/check-data.mjs` — a zero-dependency Node script — run via `npm test` (minimal `package.json`, no runtime deps). It runs in **CI (GitHub Actions) gating the deploy** (§6); Vercel serves static files with no build transform. The progression tests import the **same `core.js`** the app uses (§1) so they test production logic, not copies. Automated coverage:
- **Data integrity:** every `FACTS` key ∈ `WORDS`; every word's prefix/stem/suffix ∈ the part tables; story count matches.
- **Truncation / content fidelity:** scan every definition for the `…` (U+2026) marker or a dangling trailing `of`/`a`/`an`/`e` and fail if found. **Repair the four already-truncated definitions** (`accurate`, `container`, `evolution`, `sensor` — verified truncated in the source) to full text, plus a source→output content spot-check.
- **Vocabulary QA (§5):** the harness confirms `data/vocab-audit.md` exists and covers every `reviewed:true` word, that no reviewed word retains a known-bad entry, and — critically — that **Forge/Decode/Flashcards word selection excludes `reviewed:false` words** (no teaching mode surfaces an unreviewed word). It does **not** claim to prove etymological correctness (that is the human reviewed-record's job).
- **Extraction fidelity:** counts — words (500 total in `WORDS`), parts (25/132/25), stories (18) — after the docx→js conversion; plus the reviewed-pool size N reported (drives the "N reviewed words" product claim).
- **Progression unit tests (against `core.js`):** XP formula boundaries (combo tiers, rounding), level derivation at each threshold and past max, level-up detection, story-unlock cap.
- **Streak tests (against `core.js`):** yesterday→increment, today→no-op, gap→reset, future date→invalid, load-time normalization.
- **Persistence (against `core.js`):** migration from absent/corrupt/old schema; future-schema store left untouched; field-level validator defaults each bad field independently (negative/oversized XP, non-integer counter, `2026-99-99`/future date, unknown/duplicate fact ID, bad `schema`/`dailyStreak`). `core.js` returns a **structured persistence-failure result** that Node unit-tests assert on; the **browser banner itself is verified only in browser acceptance testing** (Node has no DOM — the harness never claims to render or test the banner).

**Manual acceptance checklist:** offline load (network disabled), iframe embed (audio + storage), keyboard-only modal flows (focus trap/restore/Escape), mobile layout, `prefers-reduced-motion`.

### 8. Repo hygiene & privacy (before first public commit)
- Do **not** wholesale-commit this directory. The raw `*.docx` (etymology research, embedded metadata, any Drive/source links) stay out of the public repo: add a `.gitignore` for `*.docx` and the scratch sources, and review an explicit **allowlist** of files to publish: `index.html`, `core.js`, `data/`, `assets/`, `scripts/`, `package.json`, `.gitignore`, `.github/workflows/`, any Vercel config, `macscott.json`, `screenshots/`, `README.md`. (Earlier omission of `package.json`/`scripts/`/`core.js` would have left the test harness uncommitted — now corrected.)
- Accurate `README.md` is a deliverable: correct entry point (`index.html`), local-run, deploy, persistence, and privacy/offline behavior.

## Key decisions & tradeoffs
- **A — Upgrade, don't rebuild.** Restyle + extend the working game; inherit its architecture but harden new/changed interpolation (`textContent`/`addEventListener`/stable IDs; no data in inline `on*` handlers) rather than a full DOM-node rewrite.
- **A — Dark forge theme.** Distinct identity matching the name; needs deliberate contrast + reduced-motion care.
- **A — XP + daily streak + levels, NO hearts.** Collection/level dopamine over punishment for a kids' app. XP is the single persisted source of truth; level/streak derived or event-driven.
- **Header 🔥 redefined** from in-round combo to persistent daily streak; old combo survives as the XP multiplier.
- **A — Contextual facts + Fact Vault**, unseen-only reward; fact coverage across words drives reward frequency.
- **A — Light file split, no build step**, with exact export schemas fixed up front.
- **Pipeline = catalog manifest**, not rsync; game self-hosted on Vercel, catalog auto-discovers the tagged repo.

## Risks / open questions
- `[[etymology-fact-sourcing]]` — expanding facts risks folk-etymology errors shown to kids. Mitigation (adopted): conservative cap (~90–110); every new/changed fact mapped to a validated word **and checked against a named authoritative reference (Etymonline / standard etymological dictionary), with that reference kept as an audit comment** in `data/facts.js`. Deliberately not requiring formal peer-reviewed citations *displayed in-game* — over-engineered for a simplified-"aha" kids' line — but source-doc provenance alone is explicitly rejected as insufficient for accuracy.
- **Subdomain/catalog readiness** — assumes `scott.macscott.net/apps`, the catalog, and the revalidate secret are provisioned (per `Apps_site` README). If not, the app still works at its Vercel URL but won't list until infra config — a manual step; the shipment gate (§6) will catch it.
- **localStorage as sole store** — progress is per-browser, lost on clear; no accounts/sync in v1.
- **Screenshot/branding** — `cover.png` + accent hex must be produced.

## Out of scope
- Accounts, cloud save, cross-device sync, leaderboards, single-active-tab locking.
- Hearts/lives/energy or any lose-state.
- New game modes beyond the existing five + the Fact Vault view.
- Net-new vocabulary beyond the 500 words (facts expand; the word list does not).
- Framework migration / build tooling, PWA/installable packaging, full off-`innerHTML` rewrite of existing screens.
- Changes to the `WEBSITES` Hostinger monorepo or its rsync deploy.
