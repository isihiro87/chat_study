/**
 * 今日（JST）のクイズ回答以外の動きを集計するワンショット。
 * - premiumFunnelEvents（リッチメニュータップ / LIFF閲覧 / 申込 / trial / winback / 復帰 など）
 * - premiumApplications（プレミアム申込）
 * - contactSubmissions（お問い合わせ）
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
const db = getFirestore();

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
function jstDateStr(d: Date): string {
  return new Date(d.getTime() + JST_OFFSET_MS).toISOString().slice(0, 10);
}
function jstTime(d: Date): string {
  return new Date(d.getTime() + JST_OFFSET_MS).toISOString().slice(11, 16);
}

async function main() {
  const now = new Date();
  const today = jstDateStr(now);
  const startOfToday = Timestamp.fromDate(new Date(`${today}T00:00:00+09:00`));
  console.log(`[check-today-activity] JST today = ${today}\n`);

  // ---- premiumFunnelEvents ----
  const fe = await db
    .collection("premiumFunnelEvents")
    .where("occurredAt", ">=", startOfToday)
    .orderBy("occurredAt", "asc")
    .get();

  const byType = new Map<string, { count: number; users: Set<string>; lines: string[] }>();
  for (const d of fe.docs) {
    const x = d.data();
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) continue;
    const t = (x.eventType as string) ?? "(unknown)";
    const cur = byType.get(t) ?? { count: 0, users: new Set<string>(), lines: [] };
    cur.count += 1;
    if (x.uid) cur.users.add(x.uid);
    const occ = x.occurredAt?.toDate?.();
    cur.lines.push(`    ${occ ? jstTime(occ) : "--:--"}  ${(x.uid ?? "?").slice(0, 22)}${x.context ? "  " + JSON.stringify(x.context).slice(0, 80) : ""}`);
    byType.set(t, cur);
  }

  console.log(`=== premiumFunnelEvents（今日 ${fe.size}件、admin除外後）===`);
  if (byType.size === 0) {
    console.log("  （イベントなし）");
  } else {
    for (const [t, v] of [...byType.entries()].sort((a, b) => b[1].count - a[1].count)) {
      console.log(`\n  ▶ ${t}: ${v.count}件 / ユニーク${v.users.size}人`);
      v.lines.forEach((l) => console.log(l));
    }
  }

  // ---- premiumApplications ----
  const pa = await db
    .collection("premiumApplications")
    .where("createdAt", ">=", startOfToday)
    .get()
    .catch(() => null);
  console.log(`\n=== premiumApplications（今日のプレミアム申込）===`);
  if (!pa) console.log("  （createdAt 索引なし or 取得失敗）");
  else if (pa.empty) console.log("  （申込なし）");
  else
    pa.docs.forEach((d) => {
      const x = d.data();
      const c = x.createdAt?.toDate?.();
      console.log(`  ${c ? jstTime(c) : "--:--"}  ${x.nickname ?? x.name ?? "?"}  price=${x.lockedPrice ?? "-"}  uid=${(x.uid ?? "?").slice(0, 22)}`);
    });

  // ---- contactSubmissions ----
  const cs = await db
    .collection("contactSubmissions")
    .where("createdAt", ">=", startOfToday)
    .get()
    .catch(() => null);
  console.log(`\n=== contactSubmissions（今日のお問い合わせ）===`);
  if (!cs) console.log("  （createdAt 索引なし or 取得失敗）");
  else if (cs.empty) console.log("  （問い合わせなし）");
  else
    cs.docs.forEach((d) => {
      const x = d.data();
      const c = x.createdAt?.toDate?.();
      console.log(`  ${c ? jstTime(c) : "--:--"}  ${(x.message ?? "").slice(0, 60)}`);
    });

  console.log("\n========== 完了 ==========");
}
main().catch((e) => { console.error(e); process.exit(1); });
