/**
 * 中1（01-06 フォルダ）の data/content/history/*.json から
 * flashcards.front を全 unique で取り出し、ruby 辞書作成のために
 * 標準出力に羅列するスクリプト。
 *
 * 出力形式（行ごと）:
 *   <subjectFolder>/<topicFile>  fc1  文明
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const REPO_ROOT = '/workspaces/marutto-study';
const CONTENT_DIR = join(REPO_ROOT, 'data', 'content', 'history');

const G1_FOLDERS = [
  '01-history-basics',
  '02-ancient-world',
  '03-japanese-origins',
  '04-ancient-state',
  '05-warrior-kamakura',
  '06-medieval-world',
];

const ALREADY_DONE = new Set([
  '02-ancient-world/ancient-civilizations.json',
  '02-ancient-world/chinese-civilization.json',
]);

interface Flashcard {
  id: string;
  front: string;
}

interface TopicJson {
  flashcards?: Flashcard[];
}

const KANJI_RE = /[一-鿿々]/;

function* iterFiles() {
  for (const folder of G1_FOLDERS) {
    const dir = join(CONTENT_DIR, folder);
    const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
    for (const file of files) {
      const rel = `${folder}/${file}`;
      if (ALREADY_DONE.has(rel)) continue;
      yield { rel, abs: join(dir, file) };
    }
  }
}

const seen = new Set<string>();
const lines: string[] = [];

for (const { rel, abs } of iterFiles()) {
  const raw = readFileSync(abs, 'utf8');
  const data = JSON.parse(raw) as TopicJson;
  if (!data.flashcards) continue;
  for (const fc of data.flashcards) {
    if (!KANJI_RE.test(fc.front)) continue;
    if (fc.front.includes('{') && fc.front.includes('|')) continue; // already rubied
    const key = fc.front;
    if (seen.has(key)) continue;
    seen.add(key);
    lines.push(`${rel}\t${fc.id}\t${fc.front}`);
  }
}

console.log(lines.join('\n'));
console.log(`\n# total unique kanji fronts: ${lines.length}`);
