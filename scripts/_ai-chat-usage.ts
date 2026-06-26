/**
 * Gemini AI チャットの利用量スナップショット。
 * users/{uid}.aiChat.{date,count} は「最後に使った日」単位で上書きされるため、
 * 過去日を完全には遡れない（同ユーザーがより新しい日に使うと旧日が消える）。
 * → 当日 aiChat.dateJST==today の合計が「今日の呼び出し回数（途中まで）」として最も正確。
 *   前日以前は「その日が最終利用日だった人」だけ＝下限値（過小）。
 *
 * read 規律: aiChat.dateJST 等価で絞り込み（全 users スキャンを避ける）。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

function jstDate(offsetDays: number, nowMs: number): string {
  const d = new Date(nowMs + offsetDays * 24 * 3600 * 1000);
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(d).replace(/\//g, "-");
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  const nowMs = Number(process.argv[2]);

  console.log("Gemini AIチャット 利用量（aiChat.dateJST 別の呼び出し回数）");
  console.log("日付(JST) | 利用UU | 呼び出し回数 | 平均回/人 | 注記");
  console.log("-".repeat(64));

  for (let off = 0; off >= -4; off--) {
    const day = jstDate(off, nowMs);
    const snap = await db
      .collection("users")
      .where("aiChat.dateJST", "==", day)
      .limit(5000)
      .get();
    let calls = 0;
    let uu = 0;
    for (const doc of snap.docs) {
      const c = doc.get("aiChat.count");
      if (typeof c === "number" && c > 0) {
        calls += c;
        uu++;
      }
    }
    const avg = uu ? (calls / uu).toFixed(2) : "-";
    const note = off === 0 ? "今日(途中・最も正確)" : "下限値(より新しい日に使った人は除外)";
    console.log(`${day} | ${String(uu).padStart(6)} | ${String(calls).padStart(11)} | ${avg.padStart(8)} | ${note}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
