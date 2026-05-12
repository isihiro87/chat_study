/**
 * 中2 (07-12) + 中3 (13-19) の data/content/history/*.json から
 * flashcards.front を全 unique で取り出す。
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const REPO = '/workspaces/marutto-study';
const CONTENT_DIR = join(REPO, 'data', 'content', 'history');

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

interface Flashcard { id: string; front: string }
interface TopicJson { flashcards?: Flashcard[] }

const KANJI_RE = /[一-鿿々]/;

const seen = new Set<string>();
const lines: string[] = [];

for (const folder of FOLDERS) {
  const dir = join(CONTENT_DIR, folder);
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.json')) continue;
    const raw = readFileSync(join(dir, file), 'utf8');
    const data = JSON.parse(raw) as TopicJson;
    if (!data.flashcards) continue;
    for (const fc of data.flashcards) {
      if (!KANJI_RE.test(fc.front)) continue;
      if (fc.front.includes('{') && fc.front.includes('|')) continue;
      if (seen.has(fc.front)) continue;
      seen.add(fc.front);
      lines.push(`${folder}/${file}\t${fc.id}\t${fc.front}`);
    }
  }
}

console.log(lines.join('\n'));
console.log(`\n# total unique kanji fronts: ${lines.length}`);
