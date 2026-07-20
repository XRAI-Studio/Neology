# Plan Review Log: Word Forge v3

Act 1 (grill) complete — plan locked with the user. MAX_ROUNDS=5.
Reviewer model: gpt-5.6-sol (pinned in ~/.codex/config.toml) — codex-cli 0.144.1.

## Round 1 — Codex

- Critical — The plan promises a Forge "no-hint bonus," but the existing Forge mode has no hint action or tracked hint state. Fix: Define the hint control, its behavior, and a per-question `hintUsed` flag—or remove the bonus.
- Critical — Story persistence loses partial progress: `unlockedStories` is saved, but the existing unlock mechanic also depends on `correctTotal % 3`; reloading after one or two correct answers discards that progress. Fix: Persist `storyCorrectCount` or `correctTotal` and derive unlocked stories from that single canonical value.
- Critical — Reward collisions are undefined: one answer can simultaneously trigger a fact popup, level-up popup, and three-correct story unlock, while existing stories already use a delayed callback. Fix: Introduce one serialized reward queue with explicit priority, dismissal, and mode-switch behavior.
- High — XP rules and level thresholds are only qualitative, leaving multiplier timing, caps, rounding, maximum-level behavior, and level-up detection ambiguous. Fix: Add an exact XP formula and complete immutable threshold/rank table with boundary examples.
- High — `level` is described as derived from XP but is also persisted, creating two sources of truth that can disagree after migration, corruption, or manual storage edits. Fix: Persist only XP and derive the level and progress on every load.
- High — Daily streak behavior is underspecified around initial play, stale display before earning XP, DST, timezone changes, future dates, and clock rollback. Fix: Specify local `YYYY-MM-DD` day keys, calendar-day comparison, load-time display normalization, and explicit invalid/future-date handling.
- High — "Corrupt data falls back" does not cover `localStorage.getItem`/`setItem` throwing under privacy settings, `file://`, quotas, or iframe policies. Fix: Wrap all storage access and use an in-memory fallback with a visible non-blocking "progress not saved" status.
- High — Multiple tabs can overwrite XP, facts, sound state, or story progress through unsynchronized read-modify-write operations. Fix: Re-read immediately before writes and reconcile on `storage` events, or explicitly enforce a single active tab.
- High — Seven of the existing 49 fact keys (`accuracy`, `eject`, `exclaim`, `submerge`, `suspend`, `propel`, `revolve`) do not occur in the actual 500-word bank, contradicting the claim that all 49 are word-keyed playable facts. Fix: Add a build-time integrity check and either remap/remove those facts or correct the word bank intentionally.
- High — The plan accepts the inherited `innerHTML`/inline-handler architecture while substantially expanding interpolated content, preserving an avoidable injection and markup-breakage surface. Fix: Build data-driven UI with DOM nodes, `textContent`, and `addEventListener`, reserving `innerHTML` for fixed templates only.
- High — The current HTML loads Google Fonts remotely, contradicting "zero dependencies," reliable double-click/offline operation, and privacy expectations for a children's app. Fix: Remove the remote font requests or self-host licensed font assets and verify the site with networking disabled.
- High — Making this directory a public repository could accidentally publish the raw DOCX research artifacts, embedded metadata, and Google Drive/source links found in them. Fix: Define and review an explicit public-file allowlist before the first commit.
- High — "Spot-check" is inadequate for roughly 150 educational etymology claims; the source document itself is not authoritative evidence. Fix: Require every shipped fact to carry a reviewed authoritative source record.
- Medium — New popups lack accessibility requirements beyond color and reduced motion: no dialog semantics, focus management, Escape behavior, or focus restoration. Fix: Add accessible modal criteria (`role="dialog"`, labeling, keyboard dismissal, focus containment/restoration).
- Medium — The Fact Vault's placement, duplicate-fact behavior, sorting, empty state, and "seen" timing are unresolved. Fix: Specify navigation entry, stable fact IDs, unseen-only reward policy, ordering/filtering, and commit timing.
- Medium — `window.WF_PARTS` does not match the current code's three typed collections, and the plan does not place `FAMILY_NOTES`, which Lexicon depends on. Fix: Define exact exported schemas for prefixes, stems, suffixes, family notes, words, facts, stories.
- Medium — The claimed `macscott.json` schema and discovery workflow cannot be validated from any repository documentation present here. Fix: Add verification against the catalog's schema plus a staging discovery and iframe test before declaring shipment complete.
- Medium — There is no test plan for extraction fidelity, migrations, XP boundaries, streak dates, referential integrity, offline, iframe storage, accessibility, or mobile layout. Fix: Add automated integrity/unit tests and a cross-browser acceptance checklist.
- Low — Renaming the entry point to `index.html` leaves README pointing to `word-forge.html`. Fix: Produce an accurate `README.md`.

VERDICT: REVISE

### Claude's response

Verified Codex's most concrete claim independently: the 7 named fact-keys (`accuracy`, `eject`, `exclaim`, `submerge`, `suspend`, `propel`, `revolve`) exist as `AHA` keys but appear **0 times** as `WORDS` entries in the HTML source — so those facts can never fire in the current build. Confirmed. This raised confidence in the rest of the critique; nearly all of it is accepted.

**Accepted and folded into PLAN.md:**
- Removed the "no-hint bonus" (no hint feature exists) — replaced with a **first-try bonus** using existing wrong-attempt state.
- Single canonical `correctTotal` persisted; unlocked stories **derived** from it (not stored independently).
- Added a **serialized reward queue** (priority: level-up → story unlock → fact) replacing ad-hoc `setTimeout` popups.
- Added an **exact XP formula + immutable rank/threshold table** with boundary examples and max-level behavior.
- **Persist XP only**; level/progress derived every load (single source of truth).
- **Daily streak** spec pinned to local `YYYY-MM-DD` day keys, calendar-day diff, future/rollback handling, load-time normalization.
- All storage access **wrapped** with in-memory fallback + non-blocking "progress not saved" banner; covers `file://`/private-mode/quota/iframe throws.
- Lightweight multi-tab safety: re-read-before-write + reconcile on `storage` event (not full single-tab lock — see rejections).
- **Build-time fact↔word integrity check**; the 7 orphan facts get remapped to a real word or dropped; every new fact must key to an existing word.
- New/expanded interpolated UI uses `textContent`/`addEventListener`/stable IDs; **no data interpolated into inline `on*` handlers**. Not rewriting the whole app — scoped to new/changed content.
- **Self-host or drop Google Fonts**; verify offline with networking disabled.
- **Repo privacy allowlist**: source DOCX + research artifacts excluded from the public repo (`.gitignore` + explicit allowlist review before first commit).
- Added **accessible-modal** acceptance criteria for all popups.
- **Fact Vault** fully specified (entry point, stable fact IDs, unseen-only reward, ordering, empty state, commit timing).
- **Exact export schemas** for prefixes/stems/suffixes/family-notes/words/facts/stories defined before the file split.
- Added **staging discovery + iframe test** as a shipment gate for the `/apps` catalog integration.
- Added a **test/acceptance checklist** (integrity, migration, XP boundaries, streak dates, offline, iframe storage, a11y, mobile).
- Accurate **README** now an explicit deliverable.

**Pushed back on (revised, not adopted wholesale) — with reasons:**
- *Etymology sourcing:* rejected "authoritative reviewed citation record per fact" as over-engineered for a kids' "aha"-style game whose facts are intentionally simplified. Adopted a conservative compromise: cap expansion lower (~90–110 total, not ~150), every new fact must trace to a specific passage in the source doc (passage note kept in `data/facts.js` comments, not shown in-game) and map to an existing validated word; plus one human accuracy pass. Named `[[etymology-fact-sourcing]]`.
- *Multi-tab:* rejected enforcing a single active tab (hostile UX for a kid reopening the game); adopted only the cheap read-before-write + `storage`-event reconcile.
- *Full DOM-node rewrite:* rejected rewriting the entire existing UI off `innerHTML`; scoped the hardening to new/changed interpolation and forbade inline-handler data interpolation, which closes the actual markup-breakage/injection surface without a risky full rewrite.

## Round 2 — Codex

Most Round 1 findings addressed. Material issues remaining:

- Critical — The first-try bonus is still based on a false assumption: the current game ends a question after the first wrong answer, so every correct answer is necessarily "first try." Fix: allow retry-until-correct and track attempts, or remove the bonus and rebalance base XP.
- High — max(xp)/max(correctTotal) merging does not preserve concurrent increments: two tabs at 100 XP each earning 15 can both write 115, losing one award. Fix: serialize award mutations with a cross-tab lock (Web Locks), or explicitly classify multi-tab progression as best-effort.
- High — Merge behavior undefined for dailyStreak, lastActiveDate, soundOn; stale tabs can overwrite them. Fix: define field-by-field reconciliation applied to freshly loaded state in one serialized transaction.
- High — Unknown schemas fall back to defaults, letting an older deployment overwrite newer-schema progress. Fix: migrate recognized older schemas but treat future versions as read-only/in-memory, never overwrite.
- High — Extraction fidelity checks only counts, yet the source already has four truncated definitions (accurate, container, evolution, sensor); counts still pass. Fix: repair these records and add truncation-marker + source-to-output content checks.
- Medium — Combo multiplier ambiguous on whether the current answer increments the combo before or after tier selection. Fix: state pre/post-answer combo and give answer-by-answer examples.
- Medium — Tracing facts to the document proves provenance, not accuracy; "one human accuracy pass" has no standard. Fix: verify each new/changed fact against a named authoritative etymological dictionary and retain the source in an audit comment.
- Medium — Flushing the reward queue on mode switch can permanently suppress an earned level-up or story unlock. Fix: disable mode changes while rewards are active, or preserve earned rewards until acknowledged.
- Medium — "Dismissed (or auto-advances)" conflicts with modal accessibility (no timeout/pause/reading accommodation defined). Fix: require explicit dismissal for informational rewards, or specify an accessible pauseable timeout.
- Medium — Plan promises tests that "fail the build/test" but defines no build step, runner, command, or CI gate. Fix: name the executable test harness and command, even if production stays build-free.
- Low — "Sorted by first-seen then alphabetical" is contradictory (first-seen already uniquely orders). Fix: choose one, or define groups where alphabetical is the tie-breaker.

VERDICT: REVISE

### Claude's response

Independently verified the two most concrete claims: (1) the four named definitions (accurate, container, evolution, sensor) all terminate in a `…` (U+2026) truncation marker in the source WORDS array — real data bug; (2) both `answerDecode` and `checkForge` set `answered=true` and disable inputs on the first submission — no retry path — so a "first-try" bonus fires on 100% of correct answers. Both confirmed. Accepted essentially all findings this round:

- **Removed the first-try bonus entirely** (it was a no-op given single-attempt questions); base stays +10, the combo multiplier carries the reward gradient. Retry-until-correct is noted as a possible future mechanic, explicitly out of scope for v3.
- **Multi-tab progression declared best-effort** (the honest classification Codex offered) — increments applied to a freshly-read object (fixes the common sequential case); simultaneous same-instant writes in two tabs may lose one award, and that is documented, not papered over. No Web Locks (disproportionate for a single-child app).
- **Field-by-field merge rules** defined: XP/correctTotal += delta on fresh read; seenFacts union; lastActiveDate = later date; dailyStreak follows the later date's writer; soundOn last-writer-wins.
- **Future-schema protection:** recognized older schemas migrate; a stored `schema` greater than known is treated read-only/in-memory and never overwritten (stops an older deploy clobbering newer progress).
- **Repair the 4 truncated definitions** + add a truncation-marker scan (`…`/dangling "of/a/e") and a source→output content spot-check to the integrity harness, not just counts.
- **Combo tier disambiguated:** the combo counter increments *after* the current answer is scored, so the current answer uses the pre-increment tier; added worked examples.
- **Reward queue no longer flushes on mode switch** — earned level-up/story rewards are preserved and drained (mode switch is deferred until the open reward modal is acknowledged).
- **Informational reward modals require explicit dismissal** (no auto-advance) — resolves the a11y conflict.
- **Named test harness:** `node scripts/check-data.mjs` (zero-dependency Node integrity/unit script) run via `npm test`, and set as the Vercel build/CI command so a data-integrity failure actually blocks deploy — production output itself stays build-free static files.
- **Fact ordering:** first-seen order canonical; alphabetical offered only as a Vault filter/toggle.

**Tightened rather than rejected (etymology sourcing):** met Codex's re-press partway — each new or changed fact is now checked against a named reference (Etymonline or a standard etymological dictionary) with the reference kept as a comment/audit note in `data/facts.js`. Still not requiring formal per-fact peer-reviewed citations displayed in-game (over-engineered for a simplified kids' "aha" line), but "one human pass" is replaced by a concrete named-source standard. Updated `[[etymology-fact-sourcing]]`.

## Round 3 — Codex

Round 2 findings addressed. New material issues:

- High — Vocabulary correctness is assumed, not tested: `accurate` is encoded as `ad- + curr` ("run to") but its origin is Latin accurare, "take care of"; `infection` carries an unrelated phonetics definition; `version` is mapped to `ver` ("true") rather than the turning root. Fix: manually audit all 500 word decompositions, literals, and definitions against named references — not only new facts.
- High — The Node harness cannot test production behavior: data depends on `window.WF` while progression/persistence stay inline in index.html; duplicated formulas in the test could pass while the app is wrong. Fix: extract testable state/progression into a browser-and-Node-compatible `core.js` and test that exact production code.
- High — The public-repo allowlist omits `package.json` and `scripts/`, so `npm test` would not be committed or available to Vercel. Fix: add `package.json`, `scripts/`, `.gitignore`, and Vercel config to the allowlist.
- Medium — Making `npm test` the Vercel build command specifies no output dir/static publish step, so passing tests may produce no deployable artifact. Fix: enforce tests in CI while keeping Vercel's no-build static deploy, or copy the site into a declared output dir.
- Medium — Story derivation uncapped: `correctTotal/3` exceeds 18 after 54 correct and can produce invalid indices. Fix: `unlockedStories = Math.min(WF.STORIES.length, Math.floor(correctTotal/3))` and enqueue only bounded transitions.
- Medium — "Corrupt" storage is not structurally defined; parseable-but-invalid values (negative XP, non-integer counters, invalid arrays/dates) escape the fallback. Fix: add a field-level validator that clamps numerics, validates dates/types, filters unknown fact IDs, defaults invalid fields independently.

VERDICT: REVISE

### Claude's response

Verified the three named vocabulary errors in source: `accurate`="run to" (should be accurare/ad-+cura, "take care"); `version`'s `ver`="true" collides with `convert`/`reverse` both correctly using `vert`="turn"; `infection` definition is the WordNet "(phonetics)" gloss, not the disease sense. Real, and they undercut the educational core (teaching a wrong root is worse than no game). Accepted all six:

- **Vocabulary data QA — scoped, not unbounded.** Rejected "manually audit all 500 against named references" as an open-ended research project; adopted an automated flagger that catches the *detectable* error classes plus targeted human fixes: (a) **stem-consistency check** — the same stem must map to one meaning everywhere; flags `version`'s `ver`=true vs `vert`=turn automatically; (b) **definition-domain filter** — flag WordNet glosses tagged `(phonetics)`, `(chemistry)`, etc., and glosses sharing no lemma with the headword; flags `infection` automatically; (c) known-bad list seeded with the three named. Every flagged item is human-corrected against a named reference; plus a random 10% sample validated. Acceptance bar: zero remaining flags, sample error rate below threshold. This guarantees the detectable errors (incl. all three named) are fixed without an unbounded per-word scholarly citation of all 500.
- **Extract `core.js`** — XP/level/streak/schema/validation logic moves into a browser-and-Node-compatible module used by BOTH `index.html` and the tests, so tests exercise the exact production code (no duplicated formulas).
- **Allowlist corrected** — add `package.json`, `scripts/`, `core.js`, `.gitignore`, and Vercel config to the published set.
- **CI vs. deploy separated** — tests run in **GitHub Actions gating the deploy**; Vercel serves the allowlisted static files directly with **no build transform** (output = the static set). `npm test` is no longer the "build."
- **Story unlock capped** — `unlockedStories = Math.min(STORIES.length, Math.floor(correctTotal/3))`; only in-bounds transitions enqueue.
- **Structural storage validator** — field-level: `xp`/`correctTotal` coerced to integers ≥0; `lastActiveDate` must match `YYYY-MM-DD` and not be future; `seenFacts` an array filtered to known word keys; `soundOn` boolean; each invalid field defaulted independently rather than dumping the whole store.

No rejections this round beyond scoping the vocab audit to a tractable automated-flag-plus-sample method.

## Round 4 — Codex

Round 3 infrastructure addressed; the vocabulary-QA replacement is not sound enough.

- Critical — The stem-consistency check cannot detect `version`: `ver` and `vert` are different table keys and each word just references the table's existing meaning, so the check trivially passes. Fix: validate each word's claimed decomposition and literal against an explicit reviewed record, including spelling/allomorph rules.
- High — "Definition shares no lemma with the headword" will flag ordinary definitions (`accept → consider or hold as true`), and `(chemistry)`-style labels can mark legitimate senses. Fix: remove these heuristics as correctness gates; use a human-reviewed exception/audit dataset backed by named references.
- High — The 10% sample has no error threshold or escalation rule. Fix: specify a threshold and require a full-bank audit if the sample finds any material error.
- High — GitHub Actions does not inherently block Vercel's Git-triggered deploy; Vercel may deploy while CI runs or fails. Fix: disable automatic production deploy and deploy from a post-test workflow, or configure protected-branch/status checks that demonstrably gate Vercel.
- Medium — The validator omits `dailyStreak` and `schema`, and its date regex accepts impossible dates like `2026-99-99`. Fix: validate all fields with safe-integer bounds and round-trip calendar validation, including `schema` and `dailyStreak`.
- Medium — `seenFacts` is filtered against `WORDS`, but a word can outlive its removed fact, leaving a collected ID with no vault content. Fix: dedupe and filter `seenFacts` against current `WF.FACTS` keys.
- Medium — The zero-dependency Node harness cannot verify a browser banner on storage failure; `core.js` is non-UI and Node has no DOM. Fix: unit-test a structured persistence-failure result in `core.js` and verify the banner via browser acceptance testing.

VERDICT: REVISE

### Claude's response

Confirmed Codex's Critical point by inspection: the `version` error is a *wrong stem selection* (`ver` vs `vert`), not an inconsistent-meaning-per-key — so a per-key consistency check passes trivially. My last two rounds tried to dodge a real vocabulary audit with cheap heuristics; Codex has correctly shown they don't work. **Conceding the substance** and accepting all seven:

- **Vocabulary correctness now requires a reviewed record — no more heuristic gates.** Dropped the lemma-overlap and domain-label checks as pass/fail gates (they false-positive on legit definitions and false-negative on `version`); they survive only as *triage hints* to prioritize review order. Mandatory: build `data/vocab-audit.md` — a reviewed record mapping each **taught** word (the pool actually drawn by Forge/Decode + every fact-keyed word) to its decomposition, literal, definition, and a **named reference** (Etymonline / etymological dictionary), correcting errors (incl. `accurate`, `version`, `infection`). The long tail not in the taught pool is either audited too or **quarantined out of play** (kept only in Lexicon labeled unreviewed, or cut). **Escalation threshold:** a random 10% sample of the taught pool; **any** material etymology/definition error → audit the full bank. This is the honest scope; the residual-risk item is closed rather than automated away.
- **Deploy gating corrected (real CI/CD fix):** GitHub Actions does not block Vercel's git auto-deploy. Turn **off** Vercel's automatic production deployment; the Actions workflow runs `npm test` and, only on success, deploys via the Vercel CLI (`vercel deploy --prebuilt --prod`). Production cannot ship on a failing/uncompleted test run.
- **Validator hardened:** add `schema` (integer within known range) and `dailyStreak` (safe-integer ≥ 0); replace the date **regex** with **round-trip calendar validation** (parse → re-emit `YYYY-MM-DD` → must equal input), rejecting `2026-99-99`.
- **`seenFacts` filtered against `WF.FACTS` keys** (not `WORDS`) and deduped, so no collected ID lacks vault content.
- **Persistence test split clarified:** `core.js` returns a **structured** persistence-failure result, unit-tested in Node (no DOM); the actual banner render is verified only in **browser acceptance testing**. The Node harness never claims to test the banner.

No rejections this round — the concessions are correct and the fixes are concrete.

## Round 5 — Codex (final round, MAX_ROUNDS=5)

Round 4 addressed; new implementation contradictions:

- High — "Taught pool" is undefined in the runtime schema, while Forge, Decode, and Flashcards all draw from `WORDS`; all 500 remain taught and the "long tail" quarantine can't exist. Fix: audit all 500, or add an explicit reviewed-word allowlist used by every teaching mode and enforced by tests.
- High — Unreviewed words "only in Lexicon" is wrong: Lexicon shows parts, but the Flashcards word deck shows all words. Fix: remove unreviewed words from runtime data or filter every word-presenting view and update the 500-word claim.
- High — `vercel deploy --prebuilt --prod` requires a prior `vercel build`/`.vercel/output`, which the workflow deliberately omits. Fix: run `vercel build` first or drop `--prebuilt` and use a source deployment.
- High — Deploy workflow lacks branch/concurrency rules; a slow older CI run could redeploy stale code after a newer one. Fix: deploy only from protected `main`, add a concurrency group with cancel-in-progress, verify the deploying SHA is still branch head.
- Medium — CI deploy doesn't specify Vercel credentials/linkage. Fix: document `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` and the environment-approval policy.
- Medium — Future schemas must be detected before field validation, or "schema within known range" defaults a future schema and defeats read-only protection. Fix: branch on raw schema first, then migrate/validate recognized versions only.
- Medium — Date "parse and re-emit" is timezone-sensitive: `new Date("YYYY-MM-DD")` parses as UTC and can shift the day locally. Fix: parse components and construct `new Date(y, m-1, d)` before round-trip comparison.

VERDICT: REVISE

### Claude's response — all seven accepted and applied

Verified the two concrete claims: Flashcards' "words" tab maps over all `WORDS` (source line ~1330), so an unreviewed word would appear there — the "only in Lexicon" quarantine was wrong; and `--prebuilt` does require a prior build. All seven are correct; **none are disagreements** — they're a final punch-list. Applied to PLAN.md:
- Added a **`reviewed` boolean to the `WORDS` schema**; Forge/Decode/Flashcards now **filter to `reviewed:true`**, enforced by a test that no teaching mode surfaces an unreviewed word. This makes the "taught pool" real instead of conceptual. Unreviewed words are audited-or-cut from runtime (not left in any word-presenting view). Product claim becomes "**N reviewed words**."
- Deploy switched to **source deploy** (`vercel deploy --prod --yes`, no `--prebuilt`); added **protected-`main`-only trigger, concurrency group with cancel-in-progress, and a checked-out-SHA==branch-head guard**; documented **`VERCEL_TOKEN`/`VERCEL_ORG_ID`/`VERCEL_PROJECT_ID`** + environment approval.
- Validator now **branches on raw `schema` first**, before field validation, preserving future-schema read-only protection.
- Date validation constructs **`new Date(y, m-1, d)`** from numeric components (local), not `new Date("YYYY-MM-DD")` (UTC), before the round-trip equality check.

## Resolution — MAX_ROUNDS reached without an APPROVED token (but NOT a deadlock)

Five rounds ran; Codex never emitted `VERDICT: APPROVED`, so by the letter this is the MAX_ROUNDS branch. **It is not a substantive deadlock** — there are zero unresolved disagreements. Each round's findings were either accepted (the large majority, several independently verified against source) or narrowed by mutual agreement (multi-tab = best-effort; etymology = named-reference standard scoped to the taught pool; no full off-`innerHTML` rewrite). Round 5's seven items were all accepted and folded in; they simply arrived on the last round with no budget left for Codex to re-confirm.

**Trajectory:** R1 18 findings → R2 11 → R3 6 → R4 7 → R5 7, moving from architectural gaps to fine implementation details — a converging plan, not an intractable one. The single largest improvement the review forced: exposing that the 500-word bank's **decompositions/definitions are not trustworthy as-is** (verified: `accurate`, `version`, `infection`, plus 4 truncated defs and 7 orphan facts), turning a "reskin + scoring" task into one with a mandatory vocabulary-accuracy gate — the difference between a game that teaches correct roots and one that teaches wrong ones.

**Residual items not re-reviewed by Codex (applied on R5, unverified by a 6th round):** the `reviewed`-flag filtering across all teaching modes; the source-deploy + concurrency/SHA-guard workflow; schema-first validation ordering; local-Date construction. Claude assesses all four as low-risk and correct; they are handed to the user as the only genuinely un-re-reviewed changes.

## Act 3 — Build

Builder: Codex (gpt-5.6-sol, codex-cli 0.144.1), --yolo full write access, fresh session, thread 019f7fad-f586-79f3-b17c-ee3a80e2da04. Roles flipped: Codex wrote, Claude verifies.

### Round 1 — Codex build

Report summary: Word Forge v3 implemented as split static files — `index.html` (dark forge UI, 5 modes + Fact Vault, reward queue, persistence, a11y), `core.js` (shared browser/Node logic), `data/{words,facts,stories}.js`, `data/vocab-audit.md`, `scripts/check-data.mjs` (15-test zero-dep harness), `package.json`, `macscott.json`, `.gitignore`, `.github/workflows/ci-deploy.yml`, `README.md`, `screenshots/cover.png` (generated). `npm test`: 15/15 PASS. Reviewed words: 6/500. Facts: 107. Codex committed nothing; docx/plans/legacy `git rm --cached` (gitignored) but intact on disk.

Stated deviations: no deployment (placeholder liveUrl); system-font stack instead of licensed font binaries (documented under assets/fonts/); local acceptance via headless Chrome/CDP not the in-app runtime; cover 1730×909 not 1200×630; only 6 facts collectible because teaching modes use reviewed words only; 494 words intentionally reviewed:false, no references fabricated.

### Claude's verdict — ACCEPT the code, ESCALATE the content gap (no fix round spent)

Verified independently, not from Codex's report:
- **`npm test` re-run by Claude: 15/15 PASS** (Node v24.8.0) — not trusting pasted output.
- **Forge theme is real:** obsidian bg `#171310`/`#09090A`, ember `#D95D16`/`#FFC04D`, radial forge-glow, `@keyframes ignite`. Not the old electric-blue.
- **Zero remote resources:** Google Fonts `<link>` gone; only http URLs are Etymonline references inside comments. Offline-clean.
- **Spec fidelity confirmed in code:** `REVIEWED_WORDS = WORDS.filter(w=>w[6]===true)` gates Forge/Decode/Flashcards (test 15 enforces it); `core.js` dual-exports (`module.exports` + `WF.core`), frozen rank table 0/100/300/700/1500/3000 Apprentice→Legendary; reward queue priority-sorted with `pendingMode` **deferring** mode switch until acknowledged (matches R2 "never flush"); modals `role="dialog"`/`aria-modal`/focus-trap+restore; `prefers-reduced-motion` gates animation; the 4 truncated defs + `accurate`/`version`/`infection` fixed, `vocab-audit.md` etymology correct.

Two issues raised to the human gate (neither a code defect → no Codex fix round burned):
1. **HEADLINE — 6/500 playable words.** The build is faithful to the honest-review gate the review rounds insisted on: Codex refused to fabricate references, so only the 6 it could verify are `reviewed:true` and taught. Correct behavior, but the shipped game is a 6-word demo until vocabulary is genuinely reviewed. Resolution is real audit work (Claude has WebSearch/WebFetch for actual lookups) — not a Codex re-run.
2. **Provenance overclaim (minor).** 66 new facts carry `// Source: …etymonline.com/word/X (checked 2026-07-20)` stamps, but Codex reported no live browser — the "checked" claim likely overstates verification. Content is plausibly sound (derived from etymology-source.md) and these facts are dormant (only 6 collectible now), but the date-stamped provenance should not be trusted as a real verification event.

Also noted: Codex gitignored + `git rm --cached` PLAN.md and PLAN-REVIEW-LOG.md (this log). Fine for a public app repo, but this deliverable log then wouldn't be committed — to reconcile before any commit.

No commit made — awaiting human sign-off on the diff (skill's final gate).
