/**
 * 今日 (JST) の配信に対する回答状況の照合
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
function jstHour(d: Date): number {
  return new Date(d.getTime() + JST_OFFSET_MS).getUTCHours();
}

async function main() {
  const now = new Date();
  const today = jstDateStr(now);
  console.log(`[check-today] JST today = ${today}\n`);

  // 配信側
  const usersSnap = await db.collection("users").get();
  const deliveredToday = new Map<string, { hour: number; preferredHour?: number; nickname?: string }>();
  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (typeof data.lineUserId === "string" && ADMIN.has(data.lineUserId)) continue;
    const lqd = data.lastQuestionDeliveredAt as Timestamp | undefined;
    const d = lqd && typeof lqd.toDate === "function" ? lqd.toDate() : undefined;
    if (!d) continue;
    if (jstDateStr(d) !== today) continue;
    deliveredToday.set(doc.id, {
      hour: jstHour(d),
      preferredHour: data.preferredHour,
      nickname: data.nickname,
    });
  }

  // 回答側
  const startOfToday = new Date(`${today}T00:00:00+09:00`);
  const ansSnap = await db
    .collection("answers")
    .where("answeredAt", ">=", Timestamp.fromDate(startOfToday))
    .get();

  const answeredUsers = new Map<string, number>();
  for (const doc of ansSnap.docs) {
    const data = doc.data();
    if (typeof data.lineUserId === "string" && ADMIN.has(data.lineUserId)) continue;
    if (typeof data.uid !== "string") continue;
    answeredUsers.set(data.uid, (answeredUsers.get(data.uid) ?? 0) + 1);
  }

  // 配信時刻別の配信 / 回答数
  console.log("=== 配信時刻別 ===");
  const byHour = new Map<number, { delivered: number; answered: number }>();
  for (const [uid, info] of deliveredToday.entries()) {
    const h = info.preferredHour ?? -1;
    const cur = byHour.get(h) ?? { delivered: 0, answered: 0 };
    cur.delivered += 1;
    if (answeredUsers.has(uid)) cur.answered += 1;
    byHour.set(h, cur);
  }
  const hours = Array.from(byHour.keys()).sort((a, b) => a - b);
  let totalD = 0;
  let totalA = 0;
  for (const h of hours) {
    const s = byHour.get(h)!;
    const rate = s.delivered === 0 ? "-" : `${((s.answered / s.delivered) * 100).toFixed(0)}%`;
    console.log(`  ${h.toString().padStart(2)}時希望  配信=${s.delivered.toString().padStart(2)}  回答=${s.answered.toString().padStart(2)}  回答率=${rate}`);
    totalD += s.delivered;
    totalA += s.answered;
  }
  console.log(`  ------`);
  console.log(`  合計      配信=${totalD}  回答=${totalA}  回答率=${((totalA / totalD) * 100).toFixed(0)}%`);

  // 配信されたが回答していないユーザーリスト
  console.log("\n=== 配信されたが未回答のユーザー ===");
  const notAnswered: { uid: string; hour: number; nickname?: string }[] = [];
  for (const [uid, info] of deliveredToday.entries()) {
    if (!answeredUsers.has(uid)) {
      notAnswered.push({ uid, hour: info.preferredHour ?? -1, nickname: info.nickname });
    }
  }
  notAnswered.sort((a, b) => a.hour - b.hour);
  for (const u of notAnswered) {
    console.log(`  ${u.hour.toString().padStart(2)}時希望  ${u.nickname ?? "(no nick)"}  uid=${u.uid.slice(0, 20)}...`);
  }
}
main().catch((err) => { console.error(err); process.exit(1); });
