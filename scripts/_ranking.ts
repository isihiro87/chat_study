/**
 * 学習ランキング: ①累計回答数 ②現在の連続正解数。
 * users.stats（onAnswerCreated が維持）を orderBy + limit で取得（全件スキャンなし）。
 * 注: correctStreak は「現在の連続正解」（誤答でリセット）。最大記録は未保持。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const TOP_N = 20;
const ADMIN_LINE_UIDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

function label(doc: FirebaseFirestore.QueryDocumentSnapshot): string {
  const nick = doc.get("nickname");
  if (typeof nick === "string" && nick.trim()) return nick.trim();
  const lid = doc.get("lineUserId");
  const id = typeof lid === "string" && lid ? lid : doc.id;
  return `(${id.slice(0, 6)}…${id.slice(-4)})`;
}

async function rank(
  db: FirebaseFirestore.Firestore,
  field: string,
  title: string,
  unit: string,
  extra?: (d: FirebaseFirestore.QueryDocumentSnapshot) => string,
) {
  // 管理者除外で目減りするぶん多めに取得
  const snap = await db.collection("users").orderBy(field, "desc").limit(TOP_N + 5).get();
  console.log(`\n■ ${title}`);
  console.log("順位 | 値 | 名前 | 補足");
  console.log("-".repeat(56));
  let rankN = 0;
  for (const doc of snap.docs) {
    const lid = doc.get("lineUserId");
    if (typeof lid === "string" && ADMIN_LINE_UIDS.has(lid)) continue;
    const v = doc.get(field);
    if (typeof v !== "number" || v <= 0) continue;
    rankN++;
    if (rankN > TOP_N) break;
    console.log(`${String(rankN).padStart(2)} | ${String(v).padStart(4)}${unit} | ${label(doc)}${extra ? "  | " + extra(doc) : ""}`);
  }
  if (rankN === 0) console.log("(該当なし)");
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();

  await rank(db, "stats.totalAnswered", "累計回答数ランキング", "問", (d) => {
    const tc = d.get("stats.totalCorrect");
    const ta = d.get("stats.totalAnswered");
    return typeof tc === "number" && typeof ta === "number" && ta > 0
      ? `正答率 ${((tc / ta) * 100).toFixed(0)}%`
      : "";
  });

  await rank(db, "stats.correctStreak", "現在の連続正解数ランキング", "連勝", (d) => {
    const ta = d.get("stats.totalAnswered");
    return typeof ta === "number" ? `累計${ta}問` : "";
  });
}

main().catch((e) => { console.error(e); process.exit(1); });
