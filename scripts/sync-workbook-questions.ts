/**
 * 印刷ワーク（pdf-workbook）の「C 実戦問題」を Firestore `questions` collection に
 * 同期する。公式LINEのワーク経路（QR →「ワーク {単元名}」）はこの問題だけを出題する。
 *
 * source of truth:
 *   pdf-workbook/output/workbook-questions.json
 *   （pdf-workbook/export_workbook_questions.py が PDF 生成と同じ選定・
 *     シャッフルロジックで出力 → 紙面と完全一致）
 *
 * Document ID: `q-wb-history-{topicId}-{n}`（n = 紙面の問題番号 1〜8）
 *   - 既存の毎日配信プール（q-history-* / q-<subject>-g<grade>-*）とは接頭辞で分離
 *   - generate-line-question-index.ts と selectQuestionByFullScan は q-wb-* を除外
 *     済みなので、毎日配信/追加/苦手復習の候補には決して入らない
 *
 * フィールド: subject / grade / topic / text / choices / correctChoiceId /
 *   explanation / difficulty / workbookOrder / contentTopicId / bookFolder /
 *   syncSource: "workbook-pdf-v1"
 *
 * 使い方:
 *   gcloud auth application-default login   # 初回のみ（ADC）
 *   npx tsx scripts/sync-workbook-questions.ts --dry-run
 *   npx tsx scripts/sync-workbook-questions.ts
 *
 * ⚠️ ワークの問題を変えたら export_workbook_questions.py → 本スクリプト →
 *    functions デプロイ（generated index 反映）の順で実行する。
 */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const SOURCE_JSON = resolve(
  REPO_ROOT,
  '..',
  'pdf-workbook',
  'output',
  'workbook-questions.json'
);
const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const SYNC_SOURCE = 'workbook-pdf-v1';

interface WorkbookQuestion {
  id: string;
  subject: string;
  grade: string;
  topic: string;
  text: string;
  choices: string[];
  correctChoiceId: number;
  explanation: string;
  difficulty: string;
  workbookOrder: number;
  contentTopicId: string;
  bookFolder: string;
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes('--dry-run');

  const questions = JSON.parse(
    readFileSync(SOURCE_JSON, 'utf-8')
  ) as WorkbookQuestion[];
  console.log(
    `[sync-workbook] source: ${questions.length} 問 (${SOURCE_JSON})`
  );

  // 簡易バリデーション（壊れたデータを本番に流さない）
  for (const q of questions) {
    if (
      !q.id.startsWith('q-wb-') ||
      !q.text ||
      !Array.isArray(q.choices) ||
      q.choices.length !== 4 ||
      q.correctChoiceId < 0 ||
      q.correctChoiceId > 3 ||
      !q.topic
    ) {
      throw new Error(`invalid question: ${JSON.stringify(q).slice(0, 200)}`);
    }
  }

  if (dryRun) {
    const byTopic = new Map<string, number>();
    for (const q of questions) {
      byTopic.set(q.topic, (byTopic.get(q.topic) ?? 0) + 1);
    }
    console.log(`[sync-workbook] --dry-run: ${byTopic.size} 単元`);
    console.log('  例:', questions[0].id, '/', questions[0].topic);
    return;
  }

  const { initializeApp, applicationDefault, getApps } =
    await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const db = getFirestore();

  // 孤児掃除: 既存の workbook-pdf-v1 ドキュメントのうち、source に無い ID を削除する
  // （ID 形式変更や問題削除で残った古い問題が出題され続けるのを防ぐ）。
  const sourceIds = new Set(questions.map((q) => q.id));
  const existing = await db
    .collection('questions')
    .where('syncSource', '==', SYNC_SOURCE)
    .select()
    .get();
  const orphans = existing.docs.filter((d) => !sourceIds.has(d.id));
  if (orphans.length > 0) {
    console.log(`[sync-workbook] 孤児 ${orphans.length} 件を削除`);
    for (let i = 0; i < orphans.length; i += 400) {
      const batch = db.batch();
      for (const d of orphans.slice(i, i + 400)) batch.delete(d.ref);
      await batch.commit();
    }
  }

  // Firestore バッチは 500 write 上限なので分割 upsert
  const BATCH_SIZE = 400;
  let written = 0;
  for (let i = 0; i < questions.length; i += BATCH_SIZE) {
    const chunk = questions.slice(i, i + BATCH_SIZE);
    const batch = db.batch();
    for (const q of chunk) {
      const { id, ...fields } = q;
      batch.set(
        db.collection('questions').doc(id),
        {
          ...fields,
          syncSource: SYNC_SOURCE,
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    }
    await batch.commit();
    written += chunk.length;
    console.log(`[sync-workbook] upsert ${written}/${questions.length}`);
  }
  console.log('[sync-workbook] 完了');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
