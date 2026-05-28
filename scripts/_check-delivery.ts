import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
const db = getFirestore();

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
function jstDate(d: Date): string {
  return new Date(d.getTime() + JST_OFFSET_MS).toISOString().slice(0, 10);
}

async function main() {
  // 1. deliveryStats: 当月の配信統計
  console.log("\n========== deliveryStats 当月 ==========");
  const month = new Date().toISOString().slice(0, 7); // YYYY-MM
  const dsRef = db.collection("deliveryStats").doc(month);
  const dsSnap = await dsRef.get();
  if (dsSnap.exists) {
    const data = dsSnap.data() ?? {};
    const sorted = Object.entries(data).sort(([a], [b]) => a.localeCompare(b));
    for (const [k, v] of sorted) {
      console.log(`  ${k.padEnd(40)} : ${v}`);
    }
  } else {
    console.log("  (deliveryStats document 未存在)");
  }

  // 2. answers の日別件数（直近 7 日）
  console.log("\n========== answers 日別件数（直近 7 日）==========");
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 86400 * 1000);
  const ansSnap = await db
    .collection("answers")
    .where("answeredAt", ">=", Timestamp.fromDate(sevenDaysAgo))
    .get();
  const dayCount = new Map<string, { total: number; uu: Set<string> }>();
  for (const doc of ansSnap.docs) {
    const data = doc.data();
    if (typeof data.lineUserId === "string" && ADMIN.has(data.lineUserId)) continue;
    const at = data.answeredAt as Timestamp | undefined;
    if (!at) continue;
    const day = jstDate(at.toDate());
    const cur = dayCount.get(day) ?? { total: 0, uu: new Set() };
    cur.total += 1;
    if (typeof data.uid === "string") cur.uu.add(data.uid);
    dayCount.set(day, cur);
  }
  const days = Array.from(dayCount.keys()).sort();
  for (const d of days) {
    const c = dayCount.get(d)!;
    console.log(`  ${d}  total=${c.total}  UU=${c.uu.size}`);
  }

  // 3. users.lastDeliveredAt の分布（最近配信されたか）
  console.log("\n========== users.lastDeliveredAt 分布 ==========");
  const usersSnap = await db.collection("users").get();
  const buckets = { today: 0, yesterday: 0, twoDaysAgo: 0, threeDaysAgo: 0, older: 0, never: 0 };
  const today = jstDate(now);
  const y1 = jstDate(new Date(now.getTime() - 86400 * 1000));
  const y2 = jstDate(new Date(now.getTime() - 2 * 86400 * 1000));
  const y3 = jstDate(new Date(now.getTime() - 3 * 86400 * 1000));
  let targetUsers = 0;
  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (typeof data.lineUserId === "string" && ADMIN.has(data.lineUserId)) continue;
    targetUsers += 1;
    const lda = data.lastDeliveredAt as Timestamp | undefined;
    if (!lda) {
      buckets.never += 1;
      continue;
    }
    const day = jstDate(lda.toDate());
    if (day === today) buckets.today += 1;
    else if (day === y1) buckets.yesterday += 1;
    else if (day === y2) buckets.twoDaysAgo += 1;
    else if (day === y3) buckets.threeDaysAgo += 1;
    else buckets.older += 1;
  }
  console.log(`  対象ユーザー(管理者除外): ${targetUsers}`);
  console.log(`  今日 (${today}) 配信済    : ${buckets.today}`);
  console.log(`  昨日 (${y1}) 配信済       : ${buckets.yesterday}`);
  console.log(`  一昨日 (${y2}) 配信済     : ${buckets.twoDaysAgo}`);
  console.log(`  3日前 (${y3}) 配信済      : ${buckets.threeDaysAgo}`);
  console.log(`  それ以前                  : ${buckets.older}`);
  console.log(`  一度も lastDeliveredAt 無 : ${buckets.never}`);

  // 4. preferredHour 別の lastDeliveredAt 状況
  console.log("\n========== preferredHour 別 / 今日配信済比率 ==========");
  const hourStats = new Map<number, { total: number; today: number; yesterday: number }>();
  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (typeof data.lineUserId === "string" && ADMIN.has(data.lineUserId)) continue;
    const hour = typeof data.preferredHour === "number" ? data.preferredHour : -1;
    const lda = data.lastDeliveredAt as Timestamp | undefined;
    const ldaDay = lda ? jstDate(lda.toDate()) : null;
    const cur = hourStats.get(hour) ?? { total: 0, today: 0, yesterday: 0 };
    cur.total += 1;
    if (ldaDay === today) cur.today += 1;
    else if (ldaDay === y1) cur.yesterday += 1;
    hourStats.set(hour, cur);
  }
  const hours = Array.from(hourStats.keys()).sort((a, b) => a - b);
  for (const h of hours) {
    const s = hourStats.get(h)!;
    const hLabel = h < 0 ? "(未設定)" : `${h.toString().padStart(2)}時`;
    console.log(`  ${hLabel}  total=${s.total.toString().padStart(2)}  今日=${s.today.toString().padStart(2)}  昨日=${s.yesterday.toString().padStart(2)}`);
  }
}
main().catch((err) => { console.error(err); process.exit(1); });
