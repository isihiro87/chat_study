/**
 * untracked な数学ソースの「自動生成で壊した誤答」を Firestore の正規値から復元する。
 * Firestore questions は form 変更を sync していない（= 縮約/元の状態）ので source of truth として使う。
 *   npx tsx scripts/_restore-untracked-from-firestore.ts          # ドライラン
 *   npx tsx scripts/_restore-untracked-from-firestore.ts --apply
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { initializeApp, getApps, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const APPLY = process.argv.includes('--apply');
const ROOT = 'data/content/math';
if (!getApps().length) initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();

// file -> 復元する qid 群（form 自動生成で壊した問題のみ）
const MAP: Record<string, string[]> = {
  'grade1/1-positive-negative/add-sub.json': ['math-g1-add-sub-q25', 'math-g1-add-sub-q31', 'math-g1-add-sub-q34'],
  'grade1/1-positive-negative/mul-div.json': ['math-g1-mul-div-q8', 'math-g1-mul-div-q15', 'math-g1-mul-div-q28', 'math-g1-mul-div-q32', 'math-g1-mul-div-q33'],
  'grade1/1-positive-negative/meaning.json': ['math-g1-pos-neg-meaning-q4'],
  'grade1/1-positive-negative/various.json': ['math-g1-various-q33'],
  'grade1/3-equations/applications.json': ['math-g1-eq-apps-q16'],
  'grade1/3-equations/basics.json': ['math-g1-eq-basics-q5', 'math-g1-eq-basics-q9', 'math-g1-eq-basics-q12', 'math-g1-eq-basics-q15', 'math-g1-eq-basics-q23', 'math-g1-eq-basics-q26', 'math-g1-eq-basics-q28'],
  'grade1/3-equations/fractions.json': ['math-g1-eq-fractions-q4', 'math-g1-eq-fractions-q7', 'math-g1-eq-fractions-q8', 'math-g1-eq-fractions-q9', 'math-g1-eq-fractions-q12', 'math-g1-eq-fractions-q13', 'math-g1-eq-fractions-q14', 'math-g1-eq-fractions-q15', 'math-g1-eq-fractions-q16', 'math-g1-eq-fractions-q20', 'math-g1-eq-fractions-q21', 'math-g1-eq-fractions-q23', 'math-g1-eq-fractions-q25', 'math-g1-eq-fractions-q27', 'math-g1-eq-fractions-q28', 'math-g1-eq-fractions-q29', 'math-g1-eq-fractions-q30', 'math-g1-eq-fractions-q32', 'math-g1-eq-fractions-q33'],
};

// latexToPlain の逆: a/b → \frac{a}{b}（負号は外）。それ以外はそのまま。$...$ で包む。
function toLatex(s: string): string {
  const out = s.replace(/(-?\d+)\/(\d+)/g, (_m, a: string, b: string) => a.startsWith('-') ? `-\\frac{${a.slice(1)}}{${b}}` : `\\frac{${a}}{${b}}`);
  return `$${out}$`;
}

async function main() {
  let total = 0, mismatch = 0;
  for (const [rel, qids] of Object.entries(MAP)) {
    const path = join(ROOT, rel);
    const d = JSON.parse(readFileSync(path, 'utf8'));
    const topicId = d.topicId;
    let dirty = false;
    for (const qid of qids) {
      const docId = `q-math-${topicId}-${qid}`;
      const snap = await db.collection('questions').doc(docId).get();
      if (!snap.exists) { console.log('⚠️ Firestore なし:', docId); mismatch++; continue; }
      const fq = snap.data()!;
      const opts: string[] = (fq.choices as string[]).map(toLatex);
      const q = d.quiz.questions.find((x: any) => x.id === qid);
      if (!q) { console.log('⚠️ source なし:', qid); mismatch++; continue; }
      if (q.correctIndex !== fq.correctChoiceId) { console.log(`⚠️ correctIndex 不一致 ${qid}: src=${q.correctIndex} fs=${fq.correctChoiceId}`); mismatch++; }
      console.log(`${qid}: ${JSON.stringify(q.options)} -> ${JSON.stringify(opts)}`);
      if (APPLY) { q.options = opts; dirty = true; }
      total++;
    }
    if (APPLY && dirty) writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
  }
  console.log(`\n復元対象 ${total} 問 / 警告 ${mismatch} / ${APPLY ? '書込済' : 'ドライラン'}`);
  process.exit(0);
}
main().catch((e) => { console.error(e); process.exit(1); });
