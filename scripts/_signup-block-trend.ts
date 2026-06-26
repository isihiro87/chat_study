/**
 * ここ数日の 登録数 / ブロック数 / 流入経路 のトレンド。
 * - 登録: users.onboardingStartedAt（登録時刻の実フィールド）
 * - ブロック: users.blockedAt（unfollow webhook で記録）
 * - 流入経路: users.referrer（Instagram 流入のみ ig_<campaignId> が入る／無ければオーガニック扱い）
 *
 * read 規律: onboardingStartedAt / blockedAt のレンジで絞り、limit ガードを付ける。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const WINDOW_DAYS = 8;
const CAP = 5000;

function jstDay(d: Date): string {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(d).replace(/\//g, "-");
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  const nowMs = Number(process.argv[2]);
  const since = Timestamp.fromMillis(nowMs - WINDOW_DAYS * 24 * 3600 * 1000);

  // --- 登録 ---
  const regSnap = await db
    .collection("users")
    .where("onboardingStartedAt", ">=", since)
    .limit(CAP)
    .get();
  const regByDay = new Map<string, number>();
  const srcByDay = new Map<string, Map<string, number>>(); // day -> source -> count
  for (const doc of regSnap.docs) {
    const ts = doc.get("onboardingStartedAt") as Timestamp | undefined;
    if (!ts) continue;
    const day = jstDay(ts.toDate());
    regByDay.set(day, (regByDay.get(day) ?? 0) + 1);
    const ref = doc.get("referrer") as { source?: string; campaignId?: string } | undefined;
    let src = "オーガニック/その他";
    if (ref && typeof ref === "object") {
      src = ref.campaignId ? `IG:${ref.campaignId}` : (ref.source ? `${ref.source}` : "IG(不明)");
    }
    const m = srcByDay.get(day) ?? new Map<string, number>();
    m.set(src, (m.get(src) ?? 0) + 1);
    srcByDay.set(day, m);
  }

  // --- ブロック ---
  const blkSnap = await db
    .collection("users")
    .where("blockedAt", ">=", since)
    .limit(CAP)
    .get();
  const blkByDay = new Map<string, number>();
  for (const doc of blkSnap.docs) {
    if (doc.get("blocked") !== true) continue; // 後で解除された人は除外
    const ts = doc.get("blockedAt") as Timestamp | undefined;
    if (!ts) continue;
    blkByDay.set(jstDay(ts.toDate()), (blkByDay.get(jstDay(ts.toDate())) ?? 0) + 1);
  }

  const days = [...new Set([...regByDay.keys(), ...blkByDay.keys()])].sort();
  console.log(`登録 / ブロック トレンド（直近${WINDOW_DAYS}日・JST）`);
  console.log("日付 | 登録 | ブロック | 純増");
  console.log("-".repeat(40));
  let totReg = 0, totBlk = 0;
  for (const d of days) {
    const r = regByDay.get(d) ?? 0;
    const b = blkByDay.get(d) ?? 0;
    totReg += r; totBlk += b;
    console.log(`${d} | ${String(r).padStart(4)} | ${String(b).padStart(6)} | ${String(r - b).padStart(5)}`);
  }
  console.log("-".repeat(40));
  console.log(`合計 | ${String(totReg).padStart(4)} | ${String(totBlk).padStart(6)} | ${String(totReg - totBlk).padStart(5)}`);
  console.log(`（ブロックは現在も blocked=true の人のみ。期間内に解除した人は除外）`);

  console.log(`\n流入経路（登録日別・referrer から判定）`);
  for (const d of days) {
    const m = srcByDay.get(d);
    if (!m) continue;
    const parts = [...m.entries()].sort((a, b) => b[1] - a[1]).map(([s, n]) => `${s}=${n}`).join("  ");
    console.log(`${d}: ${parts}`);
  }
  // 期間合計の経路内訳
  const srcTotal = new Map<string, number>();
  for (const m of srcByDay.values()) for (const [s, n] of m) srcTotal.set(s, (srcTotal.get(s) ?? 0) + n);
  console.log(`\n期間合計の経路内訳:`);
  for (const [s, n] of [...srcTotal.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${s}: ${n} 人 (${((n / totReg) * 100).toFixed(0)}%)`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
