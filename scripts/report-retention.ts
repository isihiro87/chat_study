/**
 * 公式LINE 登録者の継続率（リテンション）を出力する一回限り（運用）スクリプト。
 *
 * 出力:
 *   - DAU 推移（直近 14 日 / JST）
 *   - 各ユーザーの初回回答日コホート別、N 日後継続率（D1 / D3 / D7）
 *   - 連続日数（streak）分布
 *   - 今日アクティブ / 昨日アクティブ
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/report-retention.ts
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

function getJstDate(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  return jst.toISOString().slice(0, 10);
}

function shiftJstDate(dateStr: string, days: number): string {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function pct(n: number, d: number): string {
  if (d === 0) return "-";
  return `${((n / d) * 100).toFixed(1)}%`;
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  console.log(`[report-retention] project=${FIREBASE_PROJECT_ID}`);
  console.log(`[report-retention] fetching users ...`);
  const usersSnap = await db.collection("users").get();

  // 管理者アカウントの uid を抽出（answers 集計でも除外する）
  const adminUids = new Set<string>();
  for (const doc of usersSnap.docs) {
    const u = doc.data() as Record<string, unknown>;
    const lineUserId = typeof u.lineUserId === "string" ? u.lineUserId : null;
    if (lineUserId && ADMIN_LINE_USER_IDS.has(lineUserId)) {
      adminUids.add(doc.id);
    }
  }
  console.log(`[report-retention] admin uids excluded=${adminUids.size}`);

  console.log(`[report-retention] fetching answers ...`);
  const answersSnap = await db.collection("answers").get();
  console.log(`[report-retention] answers.size=${answersSnap.size}`);

  // uid -> Set<JST date string>
  const userDates = new Map<string, Set<string>>();
  for (const doc of answersSnap.docs) {
    const data = doc.data() as Record<string, unknown>;
    const uid = typeof data.uid === "string" ? data.uid : null;
    if (!uid || adminUids.has(uid)) continue;
    const ts = data.answeredAt as { toDate?: () => Date } | undefined;
    const date = ts && typeof ts.toDate === "function" ? ts.toDate() : null;
    if (!date) continue;
    const jst = getJstDate(date);
    if (!userDates.has(uid)) userDates.set(uid, new Set());
    userDates.get(uid)!.add(jst);
  }

  const todayJst = getJstDate(new Date());
  const yesterdayJst = shiftJstDate(todayJst, -1);

  console.log("");
  console.log("========== 公式LINE 継続率（リテンション） ==========");
  console.log(`(集計時点 JST: ${todayJst})`);
  console.log(`(管理者除外: ${adminUids.size} uid)`);
  console.log("");

  // === 1. DAU 推移（直近14日） ===
  console.log("--- DAU 推移（直近14日 / JST）---");
  const dauRows: { date: string; uu: number; isToday: boolean }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = shiftJstDate(todayJst, -i);
    let uu = 0;
    for (const dates of userDates.values()) {
      if (dates.has(d)) uu++;
    }
    dauRows.push({ date: d, uu, isToday: i === 0 });
  }
  const maxUu = Math.max(1, ...dauRows.map((r) => r.uu));
  for (const r of dauRows) {
    const bar = "█".repeat(Math.round((r.uu / maxUu) * 20));
    const tag = r.isToday ? " (今日)" : r.date === yesterdayJst ? " (昨日)" : "";
    console.log(
      `  ${r.date} ${String(r.uu).padStart(3, " ")} UU ${bar}${tag}`
    );
  }
  console.log("");

  const todayUu = dauRows[dauRows.length - 1]?.uu ?? 0;
  const yesterdayUu = dauRows[dauRows.length - 2]?.uu ?? 0;
  console.log(`  今日アクティブ: ${todayUu} UU`);
  console.log(`  昨日アクティブ: ${yesterdayUu} UU`);
  console.log("");

  // === 2. コホート別リテンション（初回回答日基準・N日後ピンポイント） ===
  // 各ユーザーの初回回答日を特定し、+1日（翌日）/ +2日 / +3日 / +7日 ピンポイントの継続を集計
  console.log("--- コホート別リテンション（初回回答日基準・N日後ピンポイント）---");
  const TARGET_DAYS = [1, 2, 3, 7] as const;
  // 初回日 -> { cohortSize, hits: { 1: n, 2: n, 3: n, 7: n } }
  const cohorts = new Map<
    string,
    {
      cohortSize: number;
      hits: Record<number, number>;
    }
  >();
  for (const dates of userDates.values()) {
    if (dates.size === 0) continue;
    const sorted = Array.from(dates).sort();
    const firstDay = sorted[0];

    const daysSinceFirst = Math.floor(
      (new Date(`${todayJst}T00:00:00Z`).getTime() -
        new Date(`${firstDay}T00:00:00Z`).getTime()) /
        86400000
    );

    let entry = cohorts.get(firstDay);
    if (!entry) {
      entry = { cohortSize: 0, hits: { 1: 0, 2: 0, 3: 0, 7: 0 } };
      cohorts.set(firstDay, entry);
    }
    entry.cohortSize++;
    for (const k of TARGET_DAYS) {
      if (daysSinceFirst >= k && dates.has(shiftJstDate(firstDay, k))) {
        entry.hits[k]++;
      }
    }
  }

  const sortedCohorts = Array.from(cohorts.entries()).sort(([a], [b]) =>
    a.localeCompare(b)
  );
  // ヘッダー
  const header = ["初回回答日", "コホート", "+1日継続", "+2日継続", "+3日継続", "+7日継続"];
  console.log(
    `  ${header[0]}  | ${header[1].padStart(8)} | ${header[2].padStart(14)} | ${header[3].padStart(14)} | ${header[4].padStart(14)} | ${header[5].padStart(14)}`
  );
  const totals = {
    cohort: 0,
    obs: { 1: 0, 2: 0, 3: 0, 7: 0 } as Record<number, number>,
    hit: { 1: 0, 2: 0, 3: 0, 7: 0 } as Record<number, number>,
  };
  for (const [day, entry] of sortedCohorts) {
    const daysSince = Math.floor(
      (new Date(`${todayJst}T00:00:00Z`).getTime() -
        new Date(`${day}T00:00:00Z`).getTime()) /
        86400000
    );
    const cells: string[] = [];
    for (const k of TARGET_DAYS) {
      const obs = daysSince >= k ? entry.cohortSize : 0;
      const hit = entry.hits[k];
      const cell =
        obs === 0
          ? "      未観測  "
          : `${String(hit).padStart(2)}/${String(obs).padStart(2)} (${pct(hit, obs).padStart(5)})`;
      cells.push(cell.padStart(14));
      totals.obs[k] += obs;
      totals.hit[k] += hit;
    }
    totals.cohort += entry.cohortSize;
    console.log(
      `  ${day} | ${String(entry.cohortSize).padStart(8)} | ${cells.join(" | ")}`
    );
  }
  console.log("");
  console.log(
    `  合計: 初回回答ユーザー総数 = ${totals.cohort}`
  );
  for (const k of TARGET_DAYS) {
    const obs = totals.obs[k];
    const hit = totals.hit[k];
    console.log(
      `       +${k}日継続 = ${String(hit).padStart(2)} / ${String(obs).padStart(2)} = ${pct(hit, obs)} （初回+${k}日に回答した割合）`
    );
  }
  console.log("");

  // === 3. 連続日数 streak 分布（現在の連続日数） ===
  console.log("--- 現在の streak（連続回答日数）分布 ---");
  const streakBuckets = new Map<number, number>();
  let streak1Plus = 0;
  for (const dates of userDates.values()) {
    // 今日 or 昨日から遡って連続している日数
    const start = dates.has(todayJst) ? todayJst : yesterdayJst;
    if (!dates.has(start)) {
      streakBuckets.set(0, (streakBuckets.get(0) ?? 0) + 1);
      continue;
    }
    let cursor = start;
    let n = 0;
    while (dates.has(cursor)) {
      n++;
      cursor = shiftJstDate(cursor, -1);
    }
    streakBuckets.set(n, (streakBuckets.get(n) ?? 0) + 1);
    if (n >= 1) streak1Plus++;
  }
  const allStreaks = Array.from(streakBuckets.entries()).sort(
    ([a], [b]) => a - b
  );
  for (const [days, n] of allStreaks) {
    const tag = days === 0 ? " (中断中)" : ` 日連続`;
    console.log(`  ${String(days).padStart(2, " ")}${tag}: ${n} 人`);
  }
  console.log(
    `  → 現時点で streak >= 1 日: ${streak1Plus} / ${userDates.size} 回答経験者 (${pct(
      streak1Plus,
      userDates.size
    )})`
  );

  console.log("");
  console.log("========== 完了 ==========");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
