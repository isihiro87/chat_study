/**
 * 2026年7月 補足その2（単一フィールド条件のみ = 追加インデックス不要）。
 * 実行: node scripts/_july-2026-usage3.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const PROJECT_ID = "chatstudy-63477";
const JUL_START = Date.UTC(2026, 5, 30, 15, 0, 0);
const AUG_START = Date.UTC(2026, 6, 31, 15, 0, 0);
const JUN_START = Date.UTC(2026, 4, 31, 15, 0, 0);
const ts = (ms) => Timestamp.fromMillis(ms);

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();
  const users = db.collection("users");
  const cnt = async (label, q) => {
    try {
      const c = (await q.count().get()).data().count;
      console.log(`${label}: ${c}`);
      return c;
    } catch (e) {
      console.log(`${label}: [skip] ${String(e.message).slice(0, 100)}`);
      return null;
    }
  };

  await cnt("ブロック(7月)", users.where("blockedAt", ">=", ts(JUL_START)).where("blockedAt", "<", ts(AUG_START)));
  await cnt("ブロック(6月)", users.where("blockedAt", ">=", ts(JUN_START)).where("blockedAt", "<", ts(JUL_START)));
  await cnt("範囲設定あり(testScope.lastSource 存在)", users.where("testScope.lastSource", "!=", null));
  await cnt("範囲設定 line_inline", users.where("testScope.lastSource", "==", "line_inline"));
  await cnt("配信停止中(deliveryPaused=true)", users.where("deliveryPaused", "==", true));
  await cnt("AIチャット最終利用が7月(下限)", users.where("aiChat.dateJST", ">=", "2026-07-01").where("aiChat.dateJST", "<", "2026-08-01"));
  await cnt("AIチャット利用歴あり(全期間)", users.where("aiChat.dateJST", ">=", "2000-01-01"));
  await cnt("オンボ完了(state=complete)", users.where("onboardingState", "==", "complete"));
  await cnt("つづもんライセンス有効", users.where("tsudumon.active", "==", true));

  // AIチャット: 7月最終利用ユーザーの count 合計（件数が多ければ limit で打ち切り）
  try {
    const snap = await users
      .where("aiChat.dateJST", ">=", "2026-07-01")
      .where("aiChat.dateJST", "<", "2026-08-01")
      .select("aiChat")
      .limit(3000)
      .get();
    let calls = 0;
    const byDay = {};
    for (const d of snap.docs) {
      const a = d.get("aiChat") ?? {};
      const c = typeof a.count === "number" ? a.count : 0;
      calls += c;
      const day = a.dateJST ?? "?";
      byDay[day] = (byDay[day] ?? 0) + c;
    }
    console.log(`AIチャット 最終日ぶん呼び出し合計(下限): ${calls} / docs=${snap.size}`);
    const top = Object.entries(byDay).sort((a, b) => b[1] - a[1]).slice(0, 10);
    console.log("  日別(上位10・下限値):", JSON.stringify(Object.fromEntries(top)));
  } catch (e) {
    console.log("AIチャット集計 [skip]:", String(e.message).slice(0, 120));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
