/**
 * 中2/中3 TS ファイルから「漢字を含むが ruby 注釈が無い」front を抽出。
 */
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const REPO = '/workspaces/marutto-study';
const KANJI_RE = /[一-鿿々]/;

const files = [
  ...execSync(`find ${REPO}/src/data/subjects/history/eras/grade2 -name index.ts`, { encoding: 'utf8' }).trim().split('\n'),
  ...execSync(`find ${REPO}/src/data/subjects/history/eras/grade3 -name index.ts`, { encoding: 'utf8' }).trim().split('\n'),
].filter(Boolean);

const seen = new Set<string>();
const result: string[] = [];

for (const path of files) {
  const text = readFileSync(path, 'utf8');
  const rel = path.replace(REPO + '/', '');
  const fronts = [...text.matchAll(/front:\s*'([^']+)'/g)].map((m) => m[1]);
  for (const f of fronts) {
    if (!KANJI_RE.test(f)) continue;
    if (/\{[^{}|]+\|[^{}|]+\}/.test(f)) continue;
    if (seen.has(f)) continue;
    seen.add(f);
    result.push(`${rel}\t${f}`);
  }
}

console.log(result.join('\n'));
console.log(`\n# total missing: ${result.length}`);
