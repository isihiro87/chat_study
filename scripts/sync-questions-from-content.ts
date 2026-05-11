/**
 * data/content/history/ の quiz 問題を Firestore `questions` collection に
 * 同期する。webhook（毎日配信・追加で解く・苦手復習）は `questions`
 * collection を見ているため、ここに同期しないと testScope が効かない。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/sync-questions-from-content.ts --dry-run     # 差分のみ
 *   npx tsx scripts/sync-questions-from-content.ts               # 実行
 *   npx tsx scripts/sync-questions-from-content.ts --prune       # 古い同期分を削除
 *
 * Document ID: `q-history-{topicId}-{questionId}` 形式（例: q-history-jomon-era-q1）
 *
 * フィールド:
 *   - subject: "history"
 *   - grade:   "中1" | "中2" | "中3"（フォルダ番号から自動判定）
 *   - topic:   topic.name（細かい日本語、testScope と一致する）
 *   - text:    question.question
 *   - choices: question.options
 *   - correctChoiceId: question.correctIndex
 *   - explanation: question.explanation
 *   - difficulty:  question.difficulty
 *   - contentTopicId: 元データの topic.topicId（trace 用）
 *   - syncSource: "content-history-v1"（prune の識別子）
 */

import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(REPO_ROOT, 'data', 'content', 'history');
const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const SYNC_SOURCE_TAG = 'content-history-v1';

const GRADE_FOLDERS: Record<string, string[]> = {
  中1: [
    '01-history-basics',
    '02-ancient-world',
    '03-japanese-origins',
    '04-ancient-state',
    '05-warrior-kamakura',
    '06-medieval-world',
  ],
  中2: [
    '07-early-modern',
    '08-edo-establishment',
    '09-modern-era',
    '10-bakumatsu',
    '11-meiji-early',
    '12-meiji-late',
  ],
  中3: [
    '13-ww1-japan',
    '14-taisho-democracy',
    '15-showa-crisis',
    '16-ww2-japan',
    '17-postwar-japan',
    '18-cold-war-era',
    '19-modern-world',
  ],
};

function folderToGrade(folder: string): '中1' | '中2' | '中3' | null {
  for (const [grade, folders] of Object.entries(GRADE_FOLDERS)) {
    if (folders.includes(folder)) return grade as '中1' | '中2' | '中3';
  }
  return null;
}

interface ContentQuiz {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  difficulty?: string;
}

interface ContentTopic {
  subjectId: string;
  eraId: string;
  topicId: string;
  name: string;
  quiz?: { questions?: ContentQuiz[] };
}

interface FirestoreQuestion {
  id: string;
  subject: string;
  grade: string;
  topic: string;
  text: string;
  choices: string[];
  correctChoiceId: number;
  explanation: string;
  difficulty: string;
  contentTopicId: string;
  syncSource: string;
}

function loadAllQuestions(): FirestoreQuestion[] {
  const out: FirestoreQuestion[] = [];
  for (const folder of readdirSync(CONTENT_DIR)) {
    const grade = folderToGrade(folder);
    if (!grade) continue;
    const dir = join(CONTENT_DIR, folder);
    let files: string[] = [];
    try {
      files = readdirSync(dir).filter((f) => f.endsWith('.json'));
    } catch {
      continue;
    }
    for (const file of files) {
      const raw = readFileSync(join(dir, file), 'utf-8');
      const topic = JSON.parse(raw) as ContentTopic;
      const questions = topic.quiz?.questions ?? [];
      for (const q of questions) {
        if (
          typeof q.id !== 'string' ||
          typeof q.question !== 'string' ||
          !Array.isArray(q.options) ||
          q.options.length !== 4 ||
          typeof q.correctIndex !== 'number'
        ) {
          console.warn(`[skip invalid] ${folder}/${file} ${q.id}`);
          continue;
        }
        out.push({
          id: `q-history-${topic.topicId}-${q.id}`,
          subject: 'history',
          grade,
          topic: topic.name,
          text: q.question,
          choices: q.options,
          correctChoiceId: q.correctIndex,
          explanation: q.explanation ?? '',
          difficulty: q.difficulty ?? 'basic',
          contentTopicId: topic.topicId,
          syncSource: SYNC_SOURCE_TAG,
        });
      }
    }
  }
  return out;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const prune = args.includes('--prune');

  const local = loadAllQuestions();
  console.log(
    `[sync] mode=${dryRun ? 'dry-run' : 'live'} prune=${prune} project=${FIREBASE_PROJECT_ID}`
  );
  console.log(`[sync] loaded ${local.length} quiz questions from data/content/history`);

  const byGrade: Record<string, number> = {};
  for (const q of local) {
    byGrade[q.grade] = (byGrade[q.grade] ?? 0) + 1;
  }
  for (const [g, n] of Object.entries(byGrade)) {
    console.log(`  ${g}: ${n} 問`);
  }

  if (dryRun) {
    console.log('[sync] dry-run, no writes');
    return;
  }

  const { initializeApp, applicationDefault, getApps } = await import(
    'firebase-admin/app'
  );
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const db = getFirestore();

  let wrote = 0;
  for (const q of local) {
    const { id, ...data } = q;
    try {
      await db.collection('questions').doc(id).set(
        {
          ...data,
          lastSyncedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      wrote++;
      if (wrote % 50 === 0) console.log(`  ${wrote} / ${local.length}`);
    } catch (err) {
      console.error(`  ✗ write failed ${id}:`, err);
    }
  }
  console.log(`[sync] wrote ${wrote} questions`);

  if (prune) {
    const snap = await db
      .collection('questions')
      .where('syncSource', '==', SYNC_SOURCE_TAG)
      .get();
    const localIds = new Set(local.map((q) => q.id));
    const toDelete = snap.docs.filter((d) => !localIds.has(d.id));
    console.log(`[sync] prune candidates: ${toDelete.length}`);
    for (const doc of toDelete) {
      await doc.ref.delete();
      console.log(`  - deleted ${doc.id}`);
    }
  }
}

main().catch((err) => {
  console.error('[sync] FATAL:', err);
  process.exit(1);
});
