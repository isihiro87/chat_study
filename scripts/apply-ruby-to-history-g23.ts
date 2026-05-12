/**
 * scripts/ruby-dict-history-g23.json を読み、中2 (07-12) + 中3 (13-19) の
 * data/content/history/*.json と src/data/subjects/history/eras/grade2,grade3 配下の
 * index.ts の flashcards.front を一括置換する。
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const REPO = '/workspaces/marutto-study';
const FOLDERS = [
  '07-early-modern',
  '08-edo-establishment',
  '09-modern-era',
  '10-bakumatsu',
  '11-meiji-early',
  '12-meiji-late',
  '13-ww1-japan',
  '14-taisho-democracy',
  '15-showa-crisis',
  '16-ww2-japan',
  '17-postwar-japan',
  '18-cold-war-era',
  '19-modern-world',
];

const dictPath = join(REPO, 'scripts', 'ruby-dict-history-g23.json');
const suppPath = join(REPO, 'scripts', 'ruby-dict-history-g23-supplement.json');
const dict: Record<string, string> = {
  ...(JSON.parse(readFileSync(dictPath, 'utf8')) as Record<string, string>),
  ...(JSON.parse(readFileSync(suppPath, 'utf8')) as Record<string, string>),
};

let jsonUpdated = 0;
let jsonTouchedFronts = 0;

for (const folder of FOLDERS) {
  const dir = join(REPO, 'data/content/history', folder);
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.json')) continue;
    const path = join(dir, file);
    const text = readFileSync(path, 'utf8');
    const data = JSON.parse(text) as { flashcards?: Array<{ front: string }> };
    if (!data.flashcards) continue;
    let touched = false;
    for (const fc of data.flashcards) {
      const ruby = dict[fc.front];
      if (ruby && ruby !== fc.front) {
        fc.front = ruby;
        touched = true;
        jsonTouchedFronts++;
      }
    }
    if (touched) {
      writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
      jsonUpdated++;
      console.log(`updated JSON: ${folder}/${file}`);
    }
  }
}

console.log(`\nJSON: ${jsonUpdated} files updated, ${jsonTouchedFronts} fronts changed.\n`);

const tsFiles = [
  ...execSync(`find ${REPO}/src/data/subjects/history/eras/grade2 -name index.ts`, { encoding: 'utf8' }).trim().split('\n'),
  ...execSync(`find ${REPO}/src/data/subjects/history/eras/grade3 -name index.ts`, { encoding: 'utf8' }).trim().split('\n'),
].filter(Boolean);

let tsUpdated = 0;
let tsTouchedFronts = 0;

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

for (const path of tsFiles) {
  let text = readFileSync(path, 'utf8');
  let touched = false;
  for (const [src, dst] of Object.entries(dict)) {
    if (src === dst) continue;
    const re = new RegExp(`(front:\\s*)'${escapeRegex(src)}'`, 'g');
    const newText = text.replace(re, (_m, lead: string) => `${lead}'${dst}'`);
    if (newText !== text) {
      const cnt = (text.match(re) ?? []).length;
      text = newText;
      touched = true;
      tsTouchedFronts += cnt;
    }
  }
  if (touched) {
    writeFileSync(path, text, 'utf8');
    tsUpdated++;
    console.log(`updated TS: ${path.replace(REPO + '/', '')}`);
  }
}

console.log(`\nTS: ${tsUpdated} files updated, ${tsTouchedFronts} fronts changed.\n`);
