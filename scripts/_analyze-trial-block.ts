/**
 * 使い捨て分析: trial（自動付与）・trialドリップ送信 と ブロック率の関係を検証する。
 *
 * 仮説: 「強制trial＋営業push（trialドリップ）を受けたユーザーはブロックしやすい」。
 *
 * 読み取りコスト配慮:
 *   - まず count() で users 規模を把握（1000件ごとに1 read 相当）。
 *   - 規模が許容内なら、必要フィールドだけ select() で 1 回スキャン。
 *   - SCAN_LIMIT を上限ガードに置く。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const SCAN_LIMIT = 50000;

function toDate(v: unknown): Date | null {
  if (v instanceof Timestamp) return v.toDate();
  if (v && typeof (v as { toDate?: () => Date }).toDate === "function") {
    return (v as { toDate: () => Date }).toDate();
  }
  return null;
}

function daysBetween(a: Date, b: Date): number {
  return Math.floor((b.getTime() - a.getTime()) / (24 * 60 * 60 * 1000));
}

const DRIP_FIELDS = [
  "day1", "day2", "day3", "day3Parent", "day4", "day5",
  "day6", "day7Morning", "day7Evening", "day7Night",
];

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();

  // 1) 規模を count() で把握
  const totalAgg = await db.collection("users").count().get();
  const total = totalAgg.data().count;
  console.log(`\n[scale] users total = ${total}`);
  if (total > SCAN_LIMIT) {
    console.log(`[abort] total ${total} > SCAN_LIMIT ${SCAN_LIMIT}. count()集計に切替が必要。`);
    return;
  }

  // 2) 必要フィールドのみ select() で1回スキャン
  const snap = await db
    .collection("users")
    .select(
      "blocked", "blockedAt", "trialStartedAt", "lastTrialReminderAt",
      "plan", "premiumUntil", "planSource", "lastAnsweredAt", "createdAt"
    )
    .limit(SCAN_LIMIT)
    .get();
  console.log(`[scan] read ${snap.size} user docs\n`);

  let nTrial = 0, nNoTrial = 0;
  let blkTrial = 0, blkNoTrial = 0;
  let nDrip = 0, blkDrip = 0;           // ドリップを1通以上受けた層
  let nNoDrip = 0, blkNoDrip = 0;       // trialありだがドリップ未受信
  let nEngaged = 0, blkEngaged = 0;     // 1問以上回答（lastAnsweredAt あり）
  let nNeverAns = 0, blkNeverAns = 0;

  const blockGapFromTrial: number[] = []; // blockedAt - trialStartedAt（日）
  const dripCountBuckets: Record<string, { n: number; blk: number }> = {};
  let paidPremium = 0;

  snap.forEach((doc) => {
    const d = doc.data() as Record<string, unknown>;
    const blocked = d.blocked === true;
    const trialStartedAt = toDate(d.trialStartedAt);
    const blockedAt = toDate(d.blockedAt);
    const lastAnsweredAt = toDate(d.lastAnsweredAt);
    const drip = (d.lastTrialReminderAt as Record<string, unknown>) ?? {};
    const dripCount = DRIP_FIELDS.filter((f) => drip[f] != null).length;
    if (d.planSource === "paid") paidPremium++;

    // trial有無
    if (trialStartedAt) { nTrial++; if (blocked) blkTrial++; }
    else { nNoTrial++; if (blocked) blkNoTrial++; }

    // ドリップ受信有無（trial層の中で）
    if (trialStartedAt) {
      if (dripCount > 0) { nDrip++; if (blocked) blkDrip++; }
      else { nNoDrip++; if (blocked) blkNoDrip++; }
      // ドリップ通数バケツ
      const bucket = dripCount === 0 ? "0" : dripCount <= 2 ? "1-2" : dripCount <= 4 ? "3-4" : "5+";
      dripCountBuckets[bucket] ??= { n: 0, blk: 0 };
      dripCountBuckets[bucket].n++;
      if (blocked) dripCountBuckets[bucket].blk++;
    }

    // エンゲージ有無
    if (lastAnsweredAt) { nEngaged++; if (blocked) blkEngaged++; }
    else { nNeverAns++; if (blocked) blkNeverAns++; }

    // ブロックのタイミング（trial基準）
    if (blocked && blockedAt && trialStartedAt) {
      blockGapFromTrial.push(daysBetween(trialStartedAt, blockedAt));
    }
  });

  const pct = (a: number, b: number) => (b === 0 ? "—" : `${((100 * a) / b).toFixed(1)}%`);

  console.log("============ ブロック率の比較 ============");
  console.log(`全体ブロック率: ${pct(blkTrial + blkNoTrial, total)} (${blkTrial + blkNoTrial}/${total})`);
  console.log(`課金プレミアム(planSource=paid): ${paidPremium}`);
  console.log("");
  console.log("【trial有無】※trialは初回回答で自動付与なので『エンゲージ』とほぼ同義の交絡に注意");
  console.log(`  trialあり : ${pct(blkTrial, nTrial)} (${blkTrial}/${nTrial})`);
  console.log(`  trialなし : ${pct(blkNoTrial, nNoTrial)} (${blkNoTrial}/${nNoTrial})`);
  console.log("");
  console.log("【trial層の中で・ドリップ受信有無】← 営業pushの影響を見る本命");
  console.log(`  ドリップ受信(1通以上): ${pct(blkDrip, nDrip)} (${blkDrip}/${nDrip})`);
  console.log(`  ドリップ未受信       : ${pct(blkNoDrip, nNoDrip)} (${blkNoDrip}/${nNoDrip})`);
  console.log("");
  console.log("【ドリップ通数バケツ別 ブロック率】← 用量反応（多く受けるほど切るか）");
  for (const k of ["0", "1-2", "3-4", "5+"]) {
    const b = dripCountBuckets[k];
    if (b) console.log(`  ${k.padEnd(4)}通: ${pct(b.blk, b.n)} (${b.blk}/${b.n})`);
  }
  console.log("");
  console.log("【参考: エンゲージ有無】");
  console.log(`  回答あり : ${pct(blkEngaged, nEngaged)} (${blkEngaged}/${nEngaged})`);
  console.log(`  回答なし : ${pct(blkNeverAns, nNeverAns)} (${blkNeverAns}/${nNeverAns})`);
  console.log("");
  // 追加: trialStartedAt / blockedAt のカレンダー日分布（一括付与日とブロックの山を特定）
  const jstDate = (d: Date) =>
    new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" })
      .format(d).replace(/\//g, "-");
  const trialDateHist: Record<string, number> = {};
  const blockDateHist: Record<string, number> = {};
  snap.forEach((doc) => {
    const d = doc.data() as Record<string, unknown>;
    const ts = toDate(d.trialStartedAt);
    const bd = toDate(d.blockedAt);
    if (ts) trialDateHist[jstDate(ts)] = (trialDateHist[jstDate(ts)] ?? 0) + 1;
    if (d.blocked === true && bd) blockDateHist[jstDate(bd)] = (blockDateHist[jstDate(bd)] ?? 0) + 1;
  });
  const topDates = (h: Record<string, number>) =>
    Object.entries(h).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, v]) => `${k}:${v}`).join("  ");
  console.log("============ trialStartedAt 日別 上位（一括付与日の特定）============");
  console.log("  " + topDates(trialDateHist));
  console.log("============ blockedAt 日別 上位（ブロックの山）============");
  console.log("  " + topDates(blockDateHist));

  // 一括付与日（trialStartedAt の最頻日）を grant day とみなし、organic と分離
  const grantDay = Object.entries(trialDateHist).sort((a, b) => b[1] - a[1])[0]?.[0];
  console.log(`\n  推定一括付与日(grant day) = ${grantDay} (${trialDateHist[grantDay]}名が同日 trialStartedAt)`);
  let grantedBlk = 0, grantedN = 0, organicBlk = 0, organicN = 0;
  snap.forEach((doc) => {
    const d = doc.data() as Record<string, unknown>;
    const ts = toDate(d.trialStartedAt);
    if (!ts) return;
    const onGrant = jstDate(ts) === grantDay;
    const blk = d.blocked === true;
    if (onGrant) { grantedN++; if (blk) grantedBlk++; }
    else { organicN++; if (blk) organicBlk++; }
  });
  console.log(`  一括付与コホート(grant dayにtrial開始): ブロック ${pct(grantedBlk, grantedN)} (${grantedBlk}/${grantedN})`);
  console.log(`  organicコホート(別日にtrial開始)      : ブロック ${pct(organicBlk, organicN)} (${organicBlk}/${organicN})`);
  console.log("  ※一括付与コホートは付与時点で blocked=true が除外されている点に注意（生存バイアス）");

  console.log("\n============ ブロックのタイミング（trial開始からの経過日）============");
  console.log(`  タイミング判明したブロック数: ${blockGapFromTrial.length}`);
  if (blockGapFromTrial.length > 0) {
    const buckets: Record<string, number> = { "0-1": 0, "2-3": 0, "4-5": 0, "6-7": 0, "8-14": 0, "15+": 0 };
    for (const g of blockGapFromTrial) {
      if (g <= 1) buckets["0-1"]++;
      else if (g <= 3) buckets["2-3"]++;
      else if (g <= 5) buckets["4-5"]++;
      else if (g <= 7) buckets["6-7"]++;
      else if (g <= 14) buckets["8-14"]++;
      else buckets["15+"]++;
    }
    const inTrial = buckets["0-1"] + buckets["2-3"] + buckets["4-5"] + buckets["6-7"];
    for (const k of Object.keys(buckets)) {
      console.log(`  trial+${k.padEnd(5)}日: ${buckets[k]}`);
    }
    console.log(`  → trial期間内(0-7日)のブロック: ${inTrial}/${blockGapFromTrial.length} (${pct(inTrial, blockGapFromTrial.length)})`);
  }
  console.log("=========================================\n");
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
