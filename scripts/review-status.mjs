// Read-only vocabulary review progress report.
//   node scripts/review-status.mjs                      summary + next pending batch
//   node scripts/review-status.mjs --families cap,duc   list those families word by word
//   node scripts/review-status.mjs --sample cap,duc     random ~10% of reviewed words in those families
import { loadData, parseAudit } from './data-lib.mjs';

const BATCH_SIZE = 25;
const WF = loadData();
const { quarantined } = parseAudit();

const statusOf = word => (word[6] ? 'reviewed' : quarantined.has(word[0]) ? 'quarantined' : 'pending');

const families = new Map();
for (const word of WF.WORDS) {
  if (!families.has(word[2])) families.set(word[2], []);
  families.get(word[2]).push(word);
}

function countBy(words) {
  const counts = { reviewed: 0, quarantined: 0, pending: 0 };
  for (const word of words) counts[statusOf(word)] += 1;
  return counts;
}

function listFamily(stem) {
  const words = families.get(stem);
  if (!words) return console.log(`\n${stem}: no words use this stem`);
  console.log(`\n${stem} (${words.length})`);
  for (const word of words) {
    const parts = [word[1], word[2], word[3]].filter(Boolean).join(' + ');
    const reason = quarantined.has(word[0]) ? ` — ${quarantined.get(word[0])}` : '';
    console.log(`  ${statusOf(word).padEnd(11)} ${word[0].padEnd(16)} ${parts.padEnd(22)} "${word[4]}" | ${word[5]}${reason}`);
  }
}

const args = process.argv.slice(2);
const flag = name => {
  const index = args.indexOf(name);
  return index === -1 ? null : (args[index + 1] || '').split(',').filter(Boolean);
};

const listed = flag('--families');
const sampled = flag('--sample');

if (listed) {
  for (const stem of listed) listFamily(stem);
} else if (sampled) {
  const pool = sampled.flatMap(stem => families.get(stem) || []).filter(word => word[6]);
  const size = Math.max(1, Math.ceil(pool.length / 10));
  const picks = pool.map(word => [Math.random(), word]).sort((a, b) => a[0] - b[0]).slice(0, size);
  console.log(`Spot-check ${picks.length} of ${pool.length} reviewed words:`);
  for (const [, word] of picks) console.log(`  ${word[0]}: ${[word[1], word[2], word[3]].filter(Boolean).join(' + ')} "${word[4]}" | ${word[5]}`);
} else {
  const total = countBy(WF.WORDS);
  console.log(`Reviewed ${total.reviewed} · Quarantined ${total.quarantined} · Pending ${total.pending} (of ${WF.WORDS.length})`);
  const open = [...families.entries()]
    .map(([stem, words]) => [stem, countBy(words).pending])
    .filter(([, pending]) => pending > 0)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const done = families.size - open.length;
  console.log(`Families complete: ${done}/${families.size}`);
  const batch = [];
  let size = 0;
  for (const [stem, pending] of open) {
    if (size >= BATCH_SIZE) break;
    batch.push(stem);
    size += pending;
  }
  if (batch.length) console.log(`Next batch (~${size} pending words): --families ${batch.join(',')}`);
}
