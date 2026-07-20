(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) {
    root.WF = root.WF || {};
    root.WF.core = api;
  }
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';

  const SCHEMA_VERSION = 1;
  const LEVELS = Object.freeze([
    Object.freeze({ level: 1, rank: 'Apprentice', xp: 0 }),
    Object.freeze({ level: 2, rank: 'Journeyman', xp: 100 }),
    Object.freeze({ level: 3, rank: 'Smith', xp: 300 }),
    Object.freeze({ level: 4, rank: 'Master Smith', xp: 700 }),
    Object.freeze({ level: 5, rank: 'Forgemaster', xp: 1500 }),
    Object.freeze({ level: 6, rank: 'Legendary', xp: 3000 })
  ]);

  function defaultState() {
    return {
      schema: SCHEMA_VERSION,
      xp: 0,
      dailyStreak: 0,
      lastActiveDate: null,
      correctTotal: 0,
      seenFacts: [],
      soundOn: true
    };
  }

  function safeCounter(value, fallback) {
    const number = typeof value === 'number' ? value : Number(value);
    return Number.isSafeInteger(number) && number >= 0 ? number : fallback;
  }

  function xpForCombo(combo) {
    const count = safeCounter(combo, 0);
    const multiplier = count >= 6 ? 2 : count >= 3 ? 1.5 : 1;
    return Math.round(10 * multiplier);
  }

  function deriveLevel(xp) {
    const amount = safeCounter(xp, 0);
    let index = 0;
    for (let i = 1; i < LEVELS.length; i += 1) {
      if (amount >= LEVELS[i].xp) index = i;
      else break;
    }
    const current = LEVELS[index];
    const next = LEVELS[index + 1] || null;
    const progress = next ? (amount - current.xp) / (next.xp - current.xp) : 1;
    return {
      level: current.level,
      rank: current.rank,
      threshold: current.xp,
      nextThreshold: next ? next.xp : null,
      progress: Math.max(0, Math.min(1, progress)),
      isMax: next === null
    };
  }

  function didLevelUp(beforeXp, afterXp) {
    return deriveLevel(afterXp).level > deriveLevel(beforeXp).level;
  }

  function storyUnlockCount(correctTotal, storyCount) {
    return Math.min(safeCounter(storyCount, 0), Math.floor(safeCounter(correctTotal, 0) / 3));
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function localDateKey(date) {
    const value = date instanceof Date ? date : new Date();
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
  }

  function parseDateKey(key) {
    if (typeof key !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(key)) return null;
    const [year, month, day] = key.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
    if (localDateKey(date) !== key) return null;
    return date;
  }

  function previousDateKey(todayKey) {
    const today = parseDateKey(todayKey);
    if (!today) return null;
    today.setDate(today.getDate() - 1);
    return localDateKey(today);
  }

  function validPastOrTodayDateKey(key, todayKey) {
    const date = parseDateKey(key);
    const today = parseDateKey(todayKey);
    if (!date || !today || date.getTime() > today.getTime()) return null;
    return key;
  }

  function applyDailyStreak(state, todayKey) {
    const today = parseDateKey(todayKey) ? todayKey : localDateKey(new Date());
    const last = validPastOrTodayDateKey(state && state.lastActiveDate, today);
    const streak = safeCounter(state && state.dailyStreak, 0);
    if (last === today) return { dailyStreak: streak, lastActiveDate: today };
    if (last === previousDateKey(today)) return { dailyStreak: streak + 1, lastActiveDate: today };
    return { dailyStreak: 1, lastActiveDate: today };
  }

  function normalizeDisplayedStreak(state, todayKey) {
    const today = parseDateKey(todayKey) ? todayKey : localDateKey(new Date());
    const last = validPastOrTodayDateKey(state && state.lastActiveDate, today);
    if (last !== today && last !== previousDateKey(today)) return 0;
    return safeCounter(state && state.dailyStreak, 0);
  }

  function validateState(candidate, factKeys, todayKey) {
    const source = candidate && typeof candidate === 'object' && !Array.isArray(candidate) ? candidate : {};
    const defaults = defaultState();
    const today = parseDateKey(todayKey) ? todayKey : localDateKey(new Date());
    const allowedFacts = new Set(Array.isArray(factKeys) ? factKeys : []);
    const seen = [];
    const unique = new Set();
    if (Array.isArray(source.seenFacts)) {
      for (const key of source.seenFacts) {
        if (typeof key === 'string' && allowedFacts.has(key) && !unique.has(key)) {
          unique.add(key);
          seen.push(key);
        }
      }
    }
    return {
      schema: Number.isInteger(source.schema) && source.schema >= 0 && source.schema <= SCHEMA_VERSION ? source.schema : defaults.schema,
      xp: safeCounter(source.xp, defaults.xp),
      dailyStreak: safeCounter(source.dailyStreak, defaults.dailyStreak),
      lastActiveDate: validPastOrTodayDateKey(source.lastActiveDate, today),
      correctTotal: safeCounter(source.correctTotal, defaults.correctTotal),
      seenFacts: seen,
      soundOn: typeof source.soundOn === 'boolean' ? source.soundOn : defaults.soundOn
    };
  }

  function migrateOldState(source) {
    if (!source || typeof source !== 'object' || Array.isArray(source)) return defaultState();
    return {
      schema: SCHEMA_VERSION,
      xp: source.xp ?? source.score ?? 0,
      dailyStreak: source.dailyStreak ?? source.streak ?? 0,
      lastActiveDate: source.lastActiveDate ?? source.lastPlayed ?? null,
      correctTotal: source.correctTotal ?? source.correct ?? 0,
      seenFacts: source.seenFacts ?? source.facts ?? [],
      soundOn: source.soundOn ?? true
    };
  }

  function processStoredValue(serialized, factKeys, todayKey) {
    const fresh = { state: defaultState(), readOnly: false, shouldPersist: false, raw: serialized, failed: false, reason: 'fresh' };
    if (serialized === null || serialized === undefined || serialized === '') return fresh;
    let raw;
    try {
      raw = typeof serialized === 'string' ? JSON.parse(serialized) : serialized;
    } catch (error) {
      return { ...fresh, failed: true, reason: 'parse' };
    }
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { ...fresh, failed: true, reason: 'shape' };

    if (Number.isInteger(raw.schema) && raw.schema > SCHEMA_VERSION) {
      return {
        state: validateState(defaultState(), factKeys, todayKey),
        readOnly: true,
        shouldPersist: false,
        raw: serialized,
        failed: false,
        reason: 'future-schema'
      };
    }

    if (Number.isInteger(raw.schema) && raw.schema >= 0 && raw.schema < SCHEMA_VERSION) {
      const migrated = validateState(migrateOldState(raw), factKeys, todayKey);
      migrated.schema = SCHEMA_VERSION;
      return { state: migrated, readOnly: false, shouldPersist: true, raw: serialized, failed: false, reason: 'migrated' };
    }

    if (raw.schema !== SCHEMA_VERSION) return { ...fresh, failed: true, reason: 'schema' };
    const state = validateState(raw, factKeys, todayKey);
    state.schema = SCHEMA_VERSION;
    return { state, readOnly: false, shouldPersist: false, raw: serialized, failed: false, reason: 'current' };
  }

  function mergeAction(freshState, action, factKeys, todayKey) {
    const fresh = validateState(freshState, factKeys, todayKey);
    const delta = action && typeof action === 'object' ? action : {};
    const result = { ...fresh, seenFacts: fresh.seenFacts.slice() };
    result.xp = safeCounter(fresh.xp + safeCounter(delta.xpDelta, 0), fresh.xp);
    result.correctTotal = safeCounter(fresh.correctTotal + safeCounter(delta.correctDelta, 0), fresh.correctTotal);
    if (Array.isArray(delta.seenFacts)) {
      result.seenFacts = validateState({ ...result, seenFacts: [...result.seenFacts, ...delta.seenFacts] }, factKeys, todayKey).seenFacts;
    }
    if (delta.qualifyingPlay) Object.assign(result, applyDailyStreak(fresh, todayKey));
    if (typeof delta.soundOn === 'boolean') result.soundOn = delta.soundOn;
    result.schema = SCHEMA_VERSION;
    return result;
  }

  return Object.freeze({
    SCHEMA_VERSION,
    LEVELS,
    defaultState,
    xpForCombo,
    deriveLevel,
    didLevelUp,
    storyUnlockCount,
    localDateKey,
    parseDateKey,
    applyDailyStreak,
    normalizeDisplayedStreak,
    validateState,
    processStoredValue,
    mergeAction
  });
});
