import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { root, loadData, parseAudit } from './data-lib.mjs';

const require = createRequire(import.meta.url);
const core = require(path.join(root, 'core.js'));

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed += 1;
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    throw error;
  }
}

const WF = loadData();
const wordsByKey = new Map(WF.WORDS.map(word => [word[0], word]));
const prefixKeys = new Set(WF.PREFIXES.map(part => part[0]));
const stemKeys = new Set(WF.STEMS.map(part => part[0]));
const suffixKeys = new Set(WF.SUFFIXES.map(part => part[0]));
const reviewedWords = WF.WORDS.filter(word => word[6] === true);

test('extraction counts are exact', () => {
  assert.equal(WF.WORDS.length, 500);
  assert.equal(WF.PREFIXES.length, 25);
  assert.equal(WF.STEMS.length, 132);
  assert.equal(WF.SUFFIXES.length, 25);
  assert.equal(WF.STORIES.length, 18);
  assert.ok(Object.keys(WF.FAMILY_NOTES).length > 0);
  assert.ok(Object.keys(WF.FACTS).length > 0);
});

test('source extraction spot checks survived the split', () => {
  assert.deepEqual(Array.from(wordsByKey.get('abduction').slice(0, 4)), ['abduction', 'ab-', 'duc', '-ion']);
  assert.deepEqual(Array.from(wordsByKey.get('vocal').slice(0, 4)), ['vocal', null, 'voc', '-al']);
});

test('every fact belongs to a word', () => {
  for (const key of Object.keys(WF.FACTS)) assert.ok(wordsByKey.has(key), `orphan fact: ${key}`);
});

test('facts have clean encoding', () => {
  for (const [key, fact] of Object.entries(WF.FACTS)) {
    assert.doesNotMatch(fact, /(?:Ã|â|ðŸ|ï¸|�)/u, `${key} contains mojibake`);
  }
});

test('every word has a valid schema and known parts', () => {
  for (const word of WF.WORDS) {
    assert.equal(word.length, 7, `${word[0]} schema length`);
    assert.equal(typeof word[6], 'boolean', `${word[0]} reviewed flag`);
    if (word[1] !== null) assert.ok(prefixKeys.has(word[1]), `${word[0]} prefix ${word[1]}`);
    assert.ok(stemKeys.has(word[2]), `${word[0]} stem ${word[2]}`);
    if (word[3] !== null) assert.ok(suffixKeys.has(word[3]), `${word[0]} suffix ${word[3]}`);
  }
});

test('definitions contain no truncation markers or dangling fragments', () => {
  for (const word of WF.WORDS) {
    assert.ok(!/[\u2026]|\.\.\./u.test(word[5]), `${word[0]} is truncated`);
    assert.ok(!/\b(?:of|a|an|e)$/i.test(word[5].trim()), `${word[0]} has dangling definition`);
  }
});

test('known vocabulary defects are repaired', () => {
  assert.deepEqual(Array.from(wordsByKey.get('accurate').slice(1, 6)), ['ad-', 'cur', '-ate', 'take care of', 'correct in all details; exact']);
  assert.deepEqual(Array.from(wordsByKey.get('version').slice(1, 5)), [null, 'vert', '-ion', 'turn']);
  assert.equal(wordsByKey.get('infection')[5], 'the invasion and growth of harmful microorganisms in the body');
  for (const key of ['accurate', 'container', 'evolution', 'sensor', 'infection', 'version']) {
    assert.equal(wordsByKey.get(key)[6], true, `${key} should be reviewed`);
  }
  assert.doesNotMatch(WF.FAMILY_NOTES['ad-'], /accurate means [“"']?run to/i);
  assert.match(WF.FAMILY_NOTES['ad-'], /accurare.*take care of/i);
});

test('vocab audit cites a reference for every reviewed word', () => {
  const { sections } = parseAudit();
  for (const word of reviewedWords) {
    assert.ok(sections.has(word[0]), `${word[0]} needs an audit section`);
    assert.match(sections.get(word[0]), /https:\/\//, `${word[0]} audit needs a reference link`);
  }
});

test('quarantined words are known, unreviewed, and not also audited as reviewed', () => {
  const { sections, quarantined } = parseAudit();
  for (const key of quarantined.keys()) {
    assert.ok(wordsByKey.has(key), `quarantined word ${key} is not in the bank`);
    assert.equal(wordsByKey.get(key)[6], false, `${key} is quarantined but reviewed:true`);
    assert.ok(!sections.has(key), `${key} is both quarantined and audited as reviewed`);
  }
});

test('XP uses pre-increment combo tiers', () => {
  assert.equal(core.xpForCombo(0), 10);
  assert.equal(core.xpForCombo(2), 10);
  assert.equal(core.xpForCombo(3), 15);
  assert.equal(core.xpForCombo(5), 15);
  assert.equal(core.xpForCombo(6), 20);
  assert.equal(core.xpForCombo(999), 20);
});

test('level derivation covers every threshold and past max', () => {
  const cases = [
    [0, 1, 'Apprentice'], [99, 1, 'Apprentice'], [100, 2, 'Journeyman'],
    [300, 3, 'Smith'], [700, 4, 'Master Smith'], [1500, 5, 'Forgemaster'],
    [3000, 6, 'Legendary'], [999999, 6, 'Legendary']
  ];
  for (const [xp, level, rank] of cases) {
    const value = core.deriveLevel(xp);
    assert.equal(value.level, level);
    assert.equal(value.rank, rank);
  }
  assert.equal(core.deriveLevel(3000).progress, 1);
  assert.equal(core.deriveLevel(9000).progress, 1);
  assert.equal(core.didLevelUp(99, 100), true);
  assert.equal(core.didLevelUp(100, 110), false);
});

test('story unlock count is capped', () => {
  assert.equal(core.storyUnlockCount(0, 18), 0);
  assert.equal(core.storyUnlockCount(3, 18), 1);
  assert.equal(core.storyUnlockCount(54, 18), 18);
  assert.equal(core.storyUnlockCount(999, 18), 18);
});

test('daily streak handles today, yesterday, gaps, future, and normalization', () => {
  assert.deepEqual(core.applyDailyStreak({ dailyStreak: 4, lastActiveDate: '2026-07-19' }, '2026-07-20'), { dailyStreak: 5, lastActiveDate: '2026-07-20' });
  assert.deepEqual(core.applyDailyStreak({ dailyStreak: 4, lastActiveDate: '2026-07-20' }, '2026-07-20'), { dailyStreak: 4, lastActiveDate: '2026-07-20' });
  assert.deepEqual(core.applyDailyStreak({ dailyStreak: 4, lastActiveDate: '2026-07-17' }, '2026-07-20'), { dailyStreak: 1, lastActiveDate: '2026-07-20' });
  assert.deepEqual(core.applyDailyStreak({ dailyStreak: 4, lastActiveDate: '2026-07-21' }, '2026-07-20'), { dailyStreak: 1, lastActiveDate: '2026-07-20' });
  assert.equal(core.normalizeDisplayedStreak({ dailyStreak: 4, lastActiveDate: '2026-07-19' }, '2026-07-20'), 4);
  assert.equal(core.normalizeDisplayedStreak({ dailyStreak: 4, lastActiveDate: '2026-07-18' }, '2026-07-20'), 0);
  assert.equal(core.normalizeDisplayedStreak({ dailyStreak: 4, lastActiveDate: '2026-07-21' }, '2026-07-20'), 0);
});

test('schema-first persistence handles absent, corrupt, old, and future stores', () => {
  const keys = Object.keys(WF.FACTS);
  assert.equal(core.processStoredValue(null, keys, '2026-07-20').state.xp, 0);
  const corrupt = core.processStoredValue('{oops', keys, '2026-07-20');
  assert.equal(corrupt.state.xp, 0);
  assert.equal(corrupt.failed, true);
  assert.equal(corrupt.reason, 'parse');
  const old = core.processStoredValue(JSON.stringify({ schema: 0, score: 27, streak: 2, lastPlayed: '2026-07-19', facts: [keys[0]] }), keys, '2026-07-20');
  assert.equal(old.state.schema, 1);
  assert.equal(old.state.xp, 27);
  assert.equal(old.state.dailyStreak, 2);
  assert.deepEqual(old.state.seenFacts, [keys[0]]);
  assert.equal(old.shouldPersist, true);
  const rawFuture = JSON.stringify({ schema: 2, xp: 9001, custom: 'keep me' });
  const future = core.processStoredValue(rawFuture, keys, '2026-07-20');
  assert.equal(future.readOnly, true);
  assert.equal(future.shouldPersist, false);
  assert.equal(future.raw, rawFuture);
});

test('field validator defaults each malformed field independently', () => {
  const keys = Object.keys(WF.FACTS);
  const base = { schema: 1, xp: 8, dailyStreak: 3, lastActiveDate: '2026-07-19', correctTotal: 5, seenFacts: [keys[0]], soundOn: false };
  const badCases = [
    ['xp', -1, 0], ['xp', Number.MAX_SAFE_INTEGER + 1, 0], ['correctTotal', 1.2, 0],
    ['dailyStreak', -3, 0], ['dailyStreak', 2.2, 0], ['schema', '1', 1],
    ['lastActiveDate', '2026-99-99', null], ['lastActiveDate', '2026-07-21', null],
    ['soundOn', 'yes', true]
  ];
  for (const [field, bad, expected] of badCases) {
    const result = core.validateState({ ...base, [field]: bad }, keys, '2026-07-20');
    assert.equal(result[field], expected, `${field} default`);
    for (const stable of ['xp', 'dailyStreak', 'correctTotal', 'soundOn']) {
      if (stable !== field) assert.equal(result[stable], base[stable], `${field} must not reset ${stable}`);
    }
  }
  const facts = core.validateState({ ...base, seenFacts: [keys[0], 'unknown', keys[0], keys[1]] }, keys, '2026-07-20');
  assert.deepEqual(facts.seenFacts, [keys[0], keys[1]]);
});

test('teaching-mode selectors exclude every unreviewed word', () => {
  assert.ok(reviewedWords.length > 0);
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(html, /const REVIEWED_WORDS\s*=\s*WF\.WORDS\.filter\(word\s*=>\s*word\[6\]\s*===\s*true\)/);
  assert.match(html, /pick\(REVIEWED_WORDS\)/g);
  assert.match(html, /if\(fcTab==="words"\)return REVIEWED_WORDS\.map/);
  assert.doesNotMatch(html, /pick\(WORDS\)/);
  assert.doesNotMatch(html, /if\(fcTab==="words"\)return WORDS\.map/);
  assert.match(html, /function familyWords\(prefix\)\{\s*return REVIEWED_WORDS\.filter/);
  assert.match(html, /const w=current\.w;\s*markResult\(ok,w\[0\]\)/);
  assert.match(html, /COLLECTIBLE_FACT_KEYS=FACT_KEYS\.filter/);
});

console.log(`\n${passed} tests passed. Reviewed words: ${reviewedWords.length}/${WF.WORDS.length}. Facts: ${Object.keys(WF.FACTS).length}.`);
