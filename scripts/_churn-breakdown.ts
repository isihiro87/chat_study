/**
 * 離脱層（at-risk / dormant / churned）の内訳を深掘りする運用スクリプト。
 *
 * 目的: 「非active 約35%」の中身を分解し、リーク箇所（初期活性化 vs 中期離脱）を
 * 特定する。施策の当て先（オンボ強化 / 範囲設定動線 / 復帰施策）の判断材料。
 *
 * 読み取り規律（CLAUDE.md）:
 *   - users を1回だけ全件スキャン（report-user-stats と同等、追加の answers 読みなし）。
 *   - 判定は user ドキュメント内の既存フィールド（status / stats.totalAnswered /
 *     lastAnsweredAt / blocked / onboardingState / testScope / winbackHistory 等）のみ。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/_churn-breakdown.ts
 */

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

const ADMIN_LINE_USER_IDS = new Set<string>([
  'U429b1d951fc7236c9e8e85e5ca96b910',
  'U732828c7b975479c97a104c5cbc45b7a',
]);

const NON_ACTIVE = ['at-risk', 'dormant', 'churned'] as const;
type NonActive = (typeof NON_ACTIVE)[number];

function pct(n: number, d: number): string {
  if (d === 0) return '-';
  return `${((n / d) * 100).toFixed(1)}%`;
}

/** 累計回答数のバケット分類（初期離脱 vs 定着後離脱の判別軸）。 */
function volumeBucket(n: number): string {
  if (n <= 0) return '0（未回答）';
  if (n === 1) return '1（1回だけ）';
  if (n === 2) return '2';
  if (n <= 5) return '3-5';
  if (n <= 10) return '6-10';
  if (n <= 30) return '11-30';
  return '31+';
}
const VOLUME_ORDER = [
  '0（未回答）',
  '1（1回だけ）',
  '2',
  '3-5',
  '6-10',
  '11-30',
  '31+',
];

function daysBucket(days: number | null): string {
  if (days === null) return '回答なし';
  if (days <= 7) return '0-7日';
  if (days <= 14) return '8-14日';
  if (days <= 30) return '15-30日';
  if (days <= 60) return '31-60日';
  return '61日+';
}
const DAYS_ORDER = [
  '0-7日',
  '8-14日',
  '15-30日',
  '31-60日',
  '61日+',
  '回答なし',
];

function toDate(v: unknown): Date | null {
  const t = v as { toDate?: () => Date } | undefined;
  return t && typeof t.toDate === 'function' ? t.toDate() : null;
}

interface Bucketed {
  count: number;
  volume: Record<string, number>;
  sumVolume: number;
  blocked: number;
  onboardingComplete: number;
  hasScope: number;
  hasNickname: number;
  gotWinback: number;
  deliveryPaused: number;
  daysSince: Record<string, number>;
  oneAndDone: number; // totalAnswered <= 1
}

function emptyBucket(): Bucketed {
  return {
    count: 0,
    volume: {},
    sumVolume: 0,
    blocked: 0,
    onboardingComplete: 0,
    hasScope: 0,
    hasNickname: 0,
    gotWinback: 0,
    deliveryPaused: 0,
    daysSince: {},
    oneAndDone: 0,
  };
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  console.log(`[churn-breakdown] project=${FIREBASE_PROJECT_ID}`);
  console.log(`[churn-breakdown] fetching users ...`);
  const usersSnap = await db.collection('users').get();

  let adminExcluded = 0;
  const targetDocs = usersSnap.docs.filter((doc) => {
    const lineId = (doc.data() as { lineUserId?: string }).lineUserId ?? '';
    if (ADMIN_LINE_USER_IDS.has(lineId)) {
      adminExcluded++;
      return false;
    }
    return true;
  });
  const total = targetDocs.length;
  console.log(
    `[churn-breakdown] users.size=${usersSnap.size} admin除外=${adminExcluded} 対象=${total}\n`
  );

  const now = Date.now();
  const statusCounts: Record<string, number> = {};
  const buckets: Record<NonActive, Bucketed> = {
    'at-risk': emptyBucket(),
    dormant: emptyBucket(),
    churned: emptyBucket(),
  };

  // コホート別（登録時期）の status 分布
  interface Cohort {
    total: number;
    active: number;
    nonActive: number;
    churned: number;
  }
  const cohorts: Record<string, Cohort> = {
    直近7日: { total: 0, active: 0, nonActive: 0, churned: 0 },
    '8-30日前': { total: 0, active: 0, nonActive: 0, churned: 0 },
    '31日以上前': { total: 0, active: 0, nonActive: 0, churned: 0 },
    登録日時不明: { total: 0, active: 0, nonActive: 0, churned: 0 },
  };
  let regTsCoverage = 0;

  // churned のうち「一度も回答せず消えた」層の属性
  const churnedNeverAnswered = {
    count: 0,
    byGrade: {} as Record<string, number>,
    bySubject: {} as Record<string, number>,
  };

  for (const doc of targetDocs) {
    const u = doc.data() as Record<string, unknown>;
    const status = typeof u.status === 'string' ? u.status : '(unset)';
    statusCounts[status] = (statusCounts[status] ?? 0) + 1;

    const stats = u.stats as { totalAnswered?: number } | undefined;
    const vol =
      typeof stats?.totalAnswered === 'number' ? stats.totalAnswered : 0;
    const lastAns = toDate(u.lastAnsweredAt);
    const daysSince = lastAns
      ? Math.floor((now - lastAns.getTime()) / (24 * 60 * 60 * 1000))
      : null;

    // コホート判定（登録時期）
    const regTs = toDate(u.onboardingStartedAt) ?? toDate(u.createdAt);
    let cohortKey = '登録日時不明';
    if (regTs) {
      regTsCoverage++;
      const regDays = Math.floor(
        (now - regTs.getTime()) / (24 * 60 * 60 * 1000)
      );
      cohortKey =
        regDays <= 7 ? '直近7日' : regDays <= 30 ? '8-30日前' : '31日以上前';
    }
    const c = cohorts[cohortKey];
    c.total++;
    if (status === 'active') c.active++;
    else {
      c.nonActive++;
      if (status === 'churned') c.churned++;
    }

    if (!NON_ACTIVE.includes(status as NonActive)) continue;
    const b = buckets[status as NonActive];
    b.count++;
    const vb = volumeBucket(vol);
    b.volume[vb] = (b.volume[vb] ?? 0) + 1;
    b.sumVolume += vol;
    if (vol <= 1) b.oneAndDone++;
    if (u.blocked === true) b.blocked++;
    if (u.onboardingState === 'complete' || u.onboardingState === 'completed')
      b.onboardingComplete++;
    const scopeTopics = (u.testScope as { topics?: unknown[] } | undefined)
      ?.topics;
    if (Array.isArray(scopeTopics) && scopeTopics.length > 0) b.hasScope++;
    if (typeof u.nickname === 'string' && u.nickname) b.hasNickname++;
    if (u.winbackHistory && typeof u.winbackHistory === 'object')
      b.gotWinback++;
    if (u.deliveryPaused === true) b.deliveryPaused++;
    const db2 = daysBucket(daysSince);
    b.daysSince[db2] = (b.daysSince[db2] ?? 0) + 1;

    if (status === 'churned' && vol <= 0) {
      churnedNeverAnswered.count++;
      const g = typeof u.grade === 'string' ? u.grade : '(未登録)';
      const s = typeof u.subject === 'string' ? u.subject : '(未登録)';
      churnedNeverAnswered.byGrade[g] =
        (churnedNeverAnswered.byGrade[g] ?? 0) + 1;
      churnedNeverAnswered.bySubject[s] =
        (churnedNeverAnswered.bySubject[s] ?? 0) + 1;
    }
  }

  const nonActiveTotal = NON_ACTIVE.reduce((s, k) => s + buckets[k].count, 0);

  console.log('========== 全体 status ==========');
  for (const [k, v] of Object.entries(statusCounts).sort(
    (a, b) => b[1] - a[1]
  )) {
    console.log(
      `  ${k.padEnd(10)} : ${String(v).padStart(5)}  (${pct(v, total)})`
    );
  }
  console.log(
    `\n  非active（at-risk+dormant+churned）= ${nonActiveTotal}  (${pct(nonActiveTotal, total)})`
  );

  console.log('\n========== 離脱層の内訳（status 別） ==========');
  for (const k of NON_ACTIVE) {
    const b = buckets[k];
    if (b.count === 0) continue;
    console.log(
      `\n--- ${k}（${b.count} 人 / 非active の ${pct(b.count, nonActiveTotal)}）---`
    );
    console.log(
      `  平均累計回答数           : ${(b.sumVolume / b.count).toFixed(1)} 問`
    );
    console.log(
      `  1回以下で離脱（≤1問）    : ${b.oneAndDone}  (${pct(b.oneAndDone, b.count)}) ★初期活性化リーク`
    );
    console.log(
      `  ブロック済               : ${b.blocked}  (${pct(b.blocked, b.count)})`
    );
    console.log(
      `  オンボ完了               : ${b.onboardingComplete}  (${pct(b.onboardingComplete, b.count)})`
    );
    console.log(
      `  範囲設定済               : ${b.hasScope}  (${pct(b.hasScope, b.count)})`
    );
    console.log(
      `  ニックネーム済           : ${b.hasNickname}  (${pct(b.hasNickname, b.count)})`
    );
    console.log(
      `  Win-back 受信歴あり      : ${b.gotWinback}  (${pct(b.gotWinback, b.count)})`
    );
    console.log(
      `  配信おやすみ中           : ${b.deliveryPaused}  (${pct(b.deliveryPaused, b.count)})`
    );
    console.log(`  累計回答数の分布:`);
    for (const vb of VOLUME_ORDER) {
      const n = b.volume[vb] ?? 0;
      if (n === 0) continue;
      console.log(
        `    ${vb.padEnd(12)} ${String(n).padStart(5)}  (${pct(n, b.count)})`
      );
    }
    console.log(`  最終回答からの経過日数:`);
    for (const dk of DAYS_ORDER) {
      const n = b.daysSince[dk] ?? 0;
      if (n === 0) continue;
      console.log(
        `    ${dk.padEnd(10)} ${String(n).padStart(5)}  (${pct(n, b.count)})`
      );
    }
  }

  console.log(
    '\n========== コホート別 status（登録時期で離脱率を比較） =========='
  );
  console.log(
    `  （登録時期フィールド coverage: ${pct(regTsCoverage, total)}）`
  );
  for (const [k, c] of Object.entries(cohorts)) {
    if (c.total === 0) continue;
    console.log(
      `  ${k.padEnd(10)} 母数${String(c.total).padStart(5)}  active ${pct(c.active, c.total)} / 非active ${pct(c.nonActive, c.total)} / うちchurned ${pct(c.churned, c.total)}`
    );
  }

  console.log(
    '\n========== churned のうち「一度も回答せず消えた」層 =========='
  );
  const cna = churnedNeverAnswered;
  console.log(
    `  人数: ${cna.count}（churned ${buckets.churned.count} の ${pct(cna.count, buckets.churned.count)}）`
  );
  console.log(`  学年別: ${JSON.stringify(cna.byGrade)}`);
  console.log(`  教科別: ${JSON.stringify(cna.bySubject)}`);

  console.log('\n========== 完了 ==========\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
