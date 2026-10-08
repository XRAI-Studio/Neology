import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

export const root = path.resolve(import.meta.dirname, '..');

export function loadData() {
  const context = vm.createContext({ window: {} });
  for (const file of ['data/words.js', 'data/facts.js', 'data/stories.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  }
  return context.window.WF;
}

// Splits data/vocab-audit.md into `## heading` sections and the `## Quarantined` bullet list.
// Quarantine bullets look like: `- word — reason (reference link)`.
export function parseAudit(text = fs.readFileSync(path.join(root, 'data/vocab-audit.md'), 'utf8')) {
  const sections = new Map();
  for (const chunk of text.split(/^## /m).slice(1)) {
    const newline = chunk.indexOf('\n');
    const heading = (newline === -1 ? chunk : chunk.slice(0, newline)).trim();
    sections.set(heading, newline === -1 ? '' : chunk.slice(newline + 1));
  }
  const quarantined = new Map();
  for (const line of (sections.get('Quarantined') || '').split('\n')) {
    const match = line.match(/^- ([a-z]+) — (.+)$/);
    if (match) quarantined.set(match[1], match[2]);
  }
  return { sections, quarantined };
}
