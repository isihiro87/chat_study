/**
 * data/content/<subject>/ の quiz 問題を Firestore `questions` collection に
 * 同期する。webhook（毎日配信・追加で解く・苦手復習）は `questions`
 * collection を見ているため、ここに同期しないと testScope が効かない。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   # 既定は history（後方互換）
 *   npx tsx scripts/sync-questions-from-content.ts --dry-run            # history 差分のみ
 *   npx tsx scripts/sync-questions-from-content.ts                      # history upsert
 *   # 教科を指定（例: 理科 中1）
 *   npx tsx scripts/sync-questions-from-content.ts --subject=science --grade=中1 --dry-run
 *   npx tsx scripts/sync-questions-from-content.ts --subject=science --grade=中1
 *   npx tsx scripts/sync-questions-from-content.ts --subject=science --prune  # 孤児掃除（subject全体）
 *
 * ⚠️ 再発防止: upsert は削除をしないため、JSON から問題を消すと Firestore に
 *    孤児ドキュメント（その教科の syncSource で source に無い ID）が残り、配信され
 *    続ける。通常 sync でも孤児を検知して WARN するので、出たら --prune で掃除する。
 *    prune は教科ごとの syncSource で絞るので他教科には影響しない。
 *
 * Document ID: `q-<subject>-<topicId>-<questionId>`（例 q-history-jomon-era-q1 /
 *              q-science-sci1-flower-seed-q1）。教科で接頭辞が違うので衝突しない。
 *
 * フィールド:
 *   - subject: "history" | "science" | ...
 *   - grade:   "中1" | "中2" | "中3"
 *   - topic:   topic.name（細かい日本語、testScope と一致する＝questions.topic）
 *   - text/choices/correctChoiceId/explanation/difficulty
 *   - contentTopicId: 元データの topic.topicId（trace 用）
 *   - syncSource: "content-<subject>-v1"（prune の識別子）
 */

import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(REPO_ROOT, 'data', 'content');
const FIREBASE_PROJECT_ID = 'chatstudy-63477';

type Grade = '中1' | '中2' | '中3';

interface SubjectSyncConfig {
  subjectId: string; // questions.subject の値
  contentSubdir: string; // data/content/<contentSubdir>
  docIdPrefix: string; // q-<subject>
  syncSourceTag: string; // content-<subject>-v1
  // grade -> data/content/<contentSubdir>/<folder> の相対パス（folder は階層を含んでよい）
  gradeFolders: Record<Grade, string[]>;
}

const SUBJECTS: Record<string, SubjectSyncConfig> = {
  history: {
    subjectId: 'history',
    contentSubdir: 'history',
    docIdPrefix: 'q-history',
    syncSourceTag: 'content-history-v1',
    gradeFolders: {
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
    },
  },
  science: {
    subjectId: 'science',
    contentSubdir: 'science',
    docIdPrefix: 'q-science',
    syncSourceTag: 'content-science-v1',
    gradeFolders: {
      中1: [
        'grade1/1-biology',
        'grade1/2-chemistry',
        'grade1/3-physics',
        'grade1/4-earth',
      ],
      中2: [
        'grade2/1-chemical-change',
        'grade2/2-biology',
        'grade2/3-weather',
        'grade2/4-electricity',
      ],
      中3: [
        'grade3/1-chemistry',
        'grade3/2-biology',
        'grade3/3-physics',
        'grade3/4-earth',
      ],
    },
  },
  math: {
    subjectId: 'math',
    contentSubdir: 'math',
    docIdPrefix: 'q-math',
    syncSourceTag: 'content-math-v1',
    gradeFolders: {
      中1: [
        'grade1/1-positive-negative',
        'grade1/2-literal-expressions',
        'grade1/3-equations',
        'grade1/4-functions',
        'grade1/5-plane-figures',
        'grade1/6-space-figures',
        'grade1/7-data',
      ],
      中2: [
        'grade2/1-expressions',
        'grade2/2-simultaneous-equations',
        'grade2/3-linear-functions',
        'grade2/4-parallel-congruence',
        'grade2/5-triangles-quadrilaterals',
        'grade2/6-probability',
        'grade2/7-data',
      ],
      中3: [
        'grade3/1-expansion-factoring',
        'grade3/2-square-roots',
        'grade3/3-quadratic-equations',
        'grade3/4-quadratic-functions',
      ],
    },
  },
};

// LINE は Flex テキストで LaTeX を描画しないため、$...$ の数式を読める Unicode に変換する。
const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function latexToPlain(s: string): string {
  if (typeof s !== 'string') return s;
  return s
    // 連立方程式 cases 環境 → カンマ区切り
    .replace(/\\begin\{cases\}([\s\S]+?)\\end\{cases\}/g, (_m, inner: string) =>
      inner.split(/\\\\/).map((x) => x.trim()).filter(Boolean).join('，  ')
    )
    .replace(/\$([^$]+)\$/g, (_m, x: string) => x) // $...$ の囲みを外す
    .replace(/\\d?frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, a: string, b: string) => {
      const par = (x: string) => (/[+\-]/.test(x.slice(1)) ? `(${x})` : x); // 多項のときは括弧
      return `${par(a.trim())}/${par(b.trim())}`;
    })
    .replace(/\\sqrt\{([^{}]+)\}/g, '√$1')
    .replace(/\\sqrt/g, '√')
    .replace(/\\pi/g, 'π')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\cdot/g, '・')
    .replace(/\\leqq|\\leq/g, '≦')
    .replace(/\\geqq|\\geq/g, '≧')
    .replace(/\\neq/g, '≠')
    .replace(/\\angle\s*/g, '∠')
    .replace(/\\triangle\s*/g, '△')
    .replace(/\^\{(\d+)\}/g, (_m, d: string) => d.split('').map((c) => SUP[c] ?? c).join(''))
    .replace(/\^(\d)/g, (_m, d: string) => SUP[d] ?? d)
    .replace(/\\left|\\right/g, '')
    .replace(/\\,|\\;|\\ /g, ' ')
    .replace(/\\\\/g, ' ')
    .replace(/\\/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

const GRAPH_BASE_URL = 'https://www.chatstudy.jp/graphs';

interface ContentQuiz {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  difficulty?: string;
  image?: unknown; // 図つき問題（座標/幾何/統計）。あれば imageUrl を付与
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
  imageUrl?: string; // 図つき問題のみ
  // 数学ハイブリッドカード（generate-math-card-assets の manifest 由来）
  renderMode?: string;
  questionParts?: unknown[];
  choiceParts?: unknown[];
}

// 数学カードアセットの manifest（docId → {questionParts, choiceParts}）。無ければ空。
const MATH_CARD_MANIFEST: Record<string, { questionParts: unknown[]; choiceParts: unknown[] }> = (() => {
  try {
    return JSON.parse(readFileSync(join(CONTENT_DIR, 'math', '_card-assets.generated.json'), 'utf-8'));
  } catch {
    return {};
  }
})();

function loadAllQuestions(
  config: SubjectSyncConfig,
  gradeFilter: Grade | null
): FirestoreQuestion[] {
  const out: FirestoreQuestion[] = [];
  for (const [grade, folders] of Object.entries(config.gradeFolders) as [
    Grade,
    string[],
  ][]) {
    if (gradeFilter && grade !== gradeFilter) continue;
    for (const folder of folders) {
      const dir = join(CONTENT_DIR, config.contentSubdir, folder);
      let files: string[] = [];
      try {
        files = readdirSync(dir).filter((f) => f.endsWith('.json'));
      } catch {
        console.warn(`[skip missing folder] ${config.contentSubdir}/${folder}`);
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
          // 数学のみ LaTeX を LINE 表示用 Unicode に変換（他教科は素通し）
          const conv = config.subjectId === 'math' ? latexToPlain : (x: string) => x;
          const rec: FirestoreQuestion = {
            id: `${config.docIdPrefix}-${topic.topicId}-${q.id}`,
            subject: config.subjectId,
            grade,
            topic: topic.name,
            text: conv(q.question),
            choices: q.options.map(conv),
            correctChoiceId: q.correctIndex,
            explanation: conv(q.explanation ?? ''),
            difficulty: q.difficulty ?? 'basic',
            contentTopicId: topic.topicId,
            syncSource: config.syncSourceTag,
          };
          // 図つき問題は public/graphs に生成済みPNG（= 問題id名）を imageUrl で参照
          if (q.image && typeof q.image === 'object') {
            rec.imageUrl = `${GRAPH_BASE_URL}/${q.id}.png`;
          }
          // 数学ハイブリッドカード: manifest があれば parts を付与
          if (config.subjectId === 'math') {
            const m = MATH_CARD_MANIFEST[rec.id];
            if (m && Array.isArray(m.questionParts) && Array.isArray(m.choiceParts)) {
              rec.renderMode = 'math-hybrid';
              rec.questionParts = m.questionParts;
              rec.choiceParts = m.choiceParts;
            }
          }
          out.push(rec);
        }
      }
    }
  }
  return out;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const prune = args.includes('--prune');
  const subjectArg = (
    args.find((a) => a.startsWith('--subject='))?.split('=')[1] ?? 'history'
  ).trim();
  const gradeArg = args
    .find((a) => a.startsWith('--grade='))
    ?.split('=')[1]
    ?.trim() as Grade | undefined;

  const config = SUBJECTS[subjectArg];
  if (!config) {
    console.error(
      `[sync] unknown --subject=${subjectArg}（対応: ${Object.keys(SUBJECTS).join(', ')}）`
    );
    process.exit(1);
  }
  const gradeFilter: Grade | null =
    gradeArg && ['中1', '中2', '中3'].includes(gradeArg) ? gradeArg : null;

  const local = loadAllQuestions(config, gradeFilter);
  console.log(
    `[sync] subject=${config.subjectId} grade=${gradeFilter ?? 'all'} mode=${dryRun ? 'dry-run' : 'live'} prune=${prune} project=${FIREBASE_PROJECT_ID}`
  );
  console.log(
    `[sync] loaded ${local.length} quiz questions from data/content/${config.contentSubdir}`
  );

  const byGrade: Record<string, number> = {};
  for (const q of local) byGrade[q.grade] = (byGrade[q.grade] ?? 0) + 1;
  for (const [g, n] of Object.entries(byGrade)) console.log(`  ${g}: ${n} 問`);

  // --dry-run（prune なし）は Firestore に触れず差分計算のみで終了
  if (dryRun && !prune) {
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

  if (!dryRun) {
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
  }

  // --- 孤児（この教科の syncSource で現行ソースに無い ID）の検知 ---
  // prune は教科ごとの syncSourceTag で絞るので他教科には影響しない。
  // ⚠️ --grade 指定時は他学年を「孤児」と誤判定するため prune/孤児WARN をスキップ。
  if (gradeFilter) {
    if (prune) {
      console.warn(
        '[sync] --grade 指定中は prune をスキップ（他学年を孤児と誤判定するため）。subject 全体で --prune してください。'
      );
    }
    return;
  }

  const snap = await db
    .collection('questions')
    .where('syncSource', '==', config.syncSourceTag)
    .get();
  const localIds = new Set(local.map((q) => q.id));
  const orphans = snap.docs.filter((d) => !localIds.has(d.id));

  if (prune) {
    console.log(`[sync] prune candidates: ${orphans.length}`);
    for (const doc of orphans) {
      const topic = (doc.data() as { topic?: string }).topic ?? '';
      if (dryRun) {
        console.log(`  - (dry-run) would delete ${doc.id}  topic=${topic}`);
      } else {
        await doc.ref.delete();
        console.log(`  - deleted ${doc.id}  topic=${topic}`);
      }
    }
    if (dryRun) {
      console.log('[sync] dry-run, nothing deleted（実削除は --prune を --dry-run なしで）');
    }
  } else if (orphans.length > 0) {
    console.warn(
      `\n⚠️ [sync] 孤児 ${orphans.length} 件（JSON から消えたのに Firestore に残存し配信され続けている問題）:`
    );
    for (const doc of orphans) {
      const topic = (doc.data() as { topic?: string }).topic ?? '';
      console.warn(`     [${doc.id}] topic=${topic}`);
    }
    console.warn(
      `   → 掃除するには:  npx tsx scripts/sync-questions-from-content.ts --subject=${config.subjectId} --dry-run --prune  で確認後、--prune で削除\n`
    );
  } else {
    console.log('[sync] 孤児なし（Firestore は現行ソースと一致）');
  }
}

main().catch((err) => {
  console.error('[sync] FATAL:', err);
  process.exit(1);
});
