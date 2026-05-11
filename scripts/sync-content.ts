/**
 * 学習コンテンツ JSON を Firestore に一方向同期するスクリプト。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/sync-content.ts --dry-run               # 差分のみ表示
 *   npx tsx scripts/sync-content.ts                         # 反映
 *   npx tsx scripts/sync-content.ts --prune                 # JSON にないドキュメントを削除
 *   npx tsx scripts/sync-content.ts --only=science/**       # globで絞り込み
 *
 * 仕様:
 *   - 入力: data/content/{subjectId}/{eraId}/{topicId}.json
 *   - 出力: Firestore collection `contentTopics`, doc id = `{subjectId}__{eraId}__{topicId}`
 *   - 1 トピック = 1 ドキュメント（flashcards / quiz.questions は配列埋め込み）
 *   - contentHash で差分検出 → hash 一致は書き込みスキップ
 *   - バッチ書き込み（500件/batch）
 */

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { TopicContentSchema, buildFirestoreDocId } from '../data/content/_schema.js';
import type { TopicContentJson } from '../data/content/_schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const CONTENT_DIR = join(REPO_ROOT, 'data', 'content');
const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const COLLECTION = 'contentTopics';
const BATCH_LIMIT = 500;

interface CliOptions {
  dryRun: boolean;
  prune: boolean;
  only: string | null;
}

function parseArgs(argv: string[]): CliOptions {
  const opts: CliOptions = { dryRun: false, prune: false, only: null };
  for (const arg of argv) {
    if (arg === '--dry-run') opts.dryRun = true;
    else if (arg === '--prune') opts.prune = true;
    else if (arg.startsWith('--only=')) opts.only = arg.slice('--only='.length);
    else if (arg === '-h' || arg === '--help') {
      console.log(
        `Usage: sync-content [--dry-run] [--prune] [--only=<glob>]\n` +
          `  --dry-run     Show diff without writing\n` +
          `  --prune       Delete Firestore docs not present in JSON\n` +
          `  --only=<glob> Limit to matching relative paths (e.g. science/**)\n`,
      );
      process.exit(0);
    }
  }
  return opts;
}

function walkJson(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith('_')) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      out.push(...walkJson(full));
    } else if (st.isFile() && name.endsWith('.json')) {
      out.push(full);
    }
  }
  return out;
}

function matchGlob(rel: string, pattern: string | null): boolean {
  if (!pattern) return true;
  const normalizedRel = rel.split(sep).join('/');
  const re = new RegExp(
    '^' +
      pattern
        .split(sep)
        .join('/')
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .replace(/\*\*/g, '.*')
        .replace(/\*/g, '[^/]*') +
      '$',
  );
  return re.test(normalizedRel);
}

interface ParsedTopic {
  relPath: string;
  docId: string;
  data: TopicContentJson;
  hash: string;
}

function canonicalize(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    return Object.keys(obj)
      .sort()
      .reduce<Record<string, unknown>>((acc, key) => {
        acc[key] = canonicalize(obj[key]);
        return acc;
      }, {});
  }
  return value;
}

function computeHash(data: TopicContentJson): string {
  return createHash('sha256')
    .update(JSON.stringify(canonicalize(data)))
    .digest('hex');
}

function parseAll(opts: CliOptions): ParsedTopic[] {
  const files = walkJson(CONTENT_DIR);
  const parsed: ParsedTopic[] = [];
  const errors: string[] = [];

  for (const file of files) {
    const rel = relative(CONTENT_DIR, file);
    if (!matchGlob(rel, opts.only)) continue;

    let raw: unknown;
    try {
      raw = JSON.parse(readFileSync(file, 'utf8'));
    } catch (e) {
      errors.push(`[${rel}] invalid JSON: ${(e as Error).message}`);
      continue;
    }

    const result = TopicContentSchema.safeParse(raw);
    if (!result.success) {
      const issues = result.error.issues
        .map((i) => `    - ${i.path.join('.')}: ${i.message}`)
        .join('\n');
      errors.push(`[${rel}] schema error:\n${issues}`);
      continue;
    }

    const topic = result.data;
    const normalizedRel = rel.split(sep).join('/');
    const segments = normalizedRel.split('/');
    if (segments.length !== 3) {
      errors.push(`[${rel}] path must be {subjectId}/{eraId}/{topicId}.json`);
      continue;
    }
    const [pathSubject, pathEra, pathFile] = segments;
    const eraFromPath = pathEra.replace(/^\d+[-_]/, '');
    const fileBase = pathFile.replace(/\.json$/, '');
    if (
      pathSubject !== topic.subjectId ||
      eraFromPath !== topic.eraId ||
      fileBase !== topic.topicId
    ) {
      const expected = `${topic.subjectId}/<prefix?>${topic.eraId}/${topic.topicId}.json`;
      errors.push(`[${rel}] path/id mismatch (expected ${expected} based on JSON fields)`);
      continue;
    }

    parsed.push({
      relPath: normalizedRel,
      docId: buildFirestoreDocId(topic),
      data: topic,
      hash: computeHash(topic),
    });
  }

  if (errors.length > 0) {
    console.error(`\nValidation failed (${errors.length} file(s)):\n`);
    for (const e of errors) console.error(e);
    process.exit(1);
  }

  return parsed;
}

async function run() {
  const opts = parseArgs(process.argv.slice(2));
  console.log(
    `[sync-content] mode=${opts.dryRun ? 'dry-run' : 'live'} prune=${opts.prune} project=${FIREBASE_PROJECT_ID}`,
  );

  const parsed = parseAll(opts);
  console.log(`[sync-content] parsed ${parsed.length} topic(s) from ${CONTENT_DIR}`);
  if (parsed.length === 0) {
    console.log('[sync-content] nothing to do.');
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

  // 1) 既存ドキュメントのIDとhashを取得
  const existingSnap = await db.collection(COLLECTION).select('contentHash').get();
  const existingHashById = new Map<string, string | undefined>();
  for (const doc of existingSnap.docs) {
    existingHashById.set(doc.id, doc.data().contentHash as string | undefined);
  }

  // 2) 差分計算
  const toWrite: ParsedTopic[] = [];
  const skipped: ParsedTopic[] = [];
  for (const p of parsed) {
    const existing = existingHashById.get(p.docId);
    if (existing && existing === p.hash) skipped.push(p);
    else toWrite.push(p);
  }

  const presentIds = new Set(parsed.map((p) => p.docId));
  const toDelete: string[] = [];
  if (opts.prune) {
    for (const id of existingHashById.keys()) {
      if (!presentIds.has(id)) toDelete.push(id);
    }
  }

  console.log(
    `[sync-content] write=${toWrite.length} skip=${skipped.length} delete=${toDelete.length}`,
  );
  if (toWrite.length > 0) {
    console.log('  to write:');
    for (const p of toWrite.slice(0, 20)) console.log(`    + ${p.docId}`);
    if (toWrite.length > 20) console.log(`    ... (+${toWrite.length - 20} more)`);
  }
  if (toDelete.length > 0) {
    console.log('  to delete:');
    for (const id of toDelete.slice(0, 20)) console.log(`    - ${id}`);
    if (toDelete.length > 20) console.log(`    ... (+${toDelete.length - 20} more)`);
  }

  if (opts.dryRun) {
    console.log('[sync-content] dry-run: no writes.');
    return;
  }

  // 3) バッチ書き込み
  const allOps: Array<() => Promise<void>> = [];
  const chunks: ParsedTopic[][] = [];
  for (let i = 0; i < toWrite.length; i += BATCH_LIMIT) {
    chunks.push(toWrite.slice(i, i + BATCH_LIMIT));
  }
  for (const chunk of chunks) {
    allOps.push(async () => {
      const batch = db.batch();
      for (const p of chunk) {
        const ref = db.collection(COLLECTION).doc(p.docId);
        batch.set(ref, {
          ...p.data,
          contentHash: p.hash,
          updatedAt: FieldValue.serverTimestamp(),
          syncedAt: new Date().toISOString(),
        });
      }
      await batch.commit();
    });
  }

  const deleteChunks: string[][] = [];
  for (let i = 0; i < toDelete.length; i += BATCH_LIMIT) {
    deleteChunks.push(toDelete.slice(i, i + BATCH_LIMIT));
  }
  for (const chunk of deleteChunks) {
    allOps.push(async () => {
      const batch = db.batch();
      for (const id of chunk) {
        batch.delete(db.collection(COLLECTION).doc(id));
      }
      await batch.commit();
    });
  }

  for (let i = 0; i < allOps.length; i++) {
    process.stdout.write(`[sync-content] batch ${i + 1}/${allOps.length}...`);
    await allOps[i]();
    process.stdout.write(' done\n');
  }

  console.log(
    `[sync-content] complete. wrote=${toWrite.length} deleted=${toDelete.length} skipped=${skipped.length}`,
  );
}

run().catch((e) => {
  console.error('[sync-content] failed:', e);
  process.exit(1);
});
