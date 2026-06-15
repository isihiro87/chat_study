/**
 * 指定 lineUserId を「新規ユーザー」状態に初期化して、友だち追加〜オンボーディング〜
 * 配信〜範囲設定の一連を実機確認するためのスクリプト（自分のテスト用）。
 *
 * 実行内容（--apply 時）:
 *   1. users/line:{id} を JSON でバックアップ出力（標準出力）
 *   2. users/line:{id} を削除
 *   3. answers / premiumFunnelEvents / premiumApplications の当該 uid 分を削除
 *   4. LINE リッチメニューを free に戻す（LINE_RICHMENU_FREE_ID）
 *   → 次にユーザーが何かメッセージを送ると webhook が新規ユーザーとして扱う。
 *
 *   npx tsx scripts/reset-test-user.ts U429b1d951fc7236c9e8e85e5ca96b910            # dry-run
 *   npx tsx scripts/reset-test-user.ts U429b1d951fc7236c9e8e85e5ca96b910 --apply
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const APPLY = process.argv.includes("--apply");
const lineId = process.argv[2];
const PROJECT = "chatstudy-63477";

function loadEnv() {
  const dir = dirname(fileURLToPath(import.meta.url));
  try {
    for (const line of readFileSync(resolve(dir, "../functions/.env"), "utf8").split("\n")) {
      const t = line.trim(); if (!t || t.startsWith("#")) continue;
      const eq = t.indexOf("="); if (eq < 0) continue;
      let v = t.slice(eq + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      const k = t.slice(0, eq).trim(); if (!(k in process.env)) process.env[k] = v;
    }
  } catch { /* env 無くても dry-run は可 */ }
}

async function delByUid(db: FirebaseFirestore.Firestore, col: string, uid: string): Promise<number> {
  const snap = await db.collection(col).where("uid", "==", uid).get();
  let n = 0;
  for (let i = 0; i < snap.docs.length; i += 400) {
    const batch = db.batch();
    snap.docs.slice(i, i + 400).forEach((d) => { batch.delete(d.ref); n++; });
    await batch.commit();
  }
  return n;
}

async function main() {
  if (!lineId || !lineId.startsWith("U")) { console.error("usage: tsx scripts/reset-test-user.ts U<lineUserId> [--apply]"); process.exit(1); }
  loadEnv();
  if (getApps().length === 0) initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  const db = getFirestore();
  const uid = `line:${lineId}`;

  const snap = await db.doc(`users/${uid}`).get();
  if (!snap.exists) { console.error(`users/${uid} は存在しません（既に削除済み？）`); process.exit(1); }
  const data = snap.data() as any;
  const ans = await db.collection("answers").where("uid", "==", uid).get();
  const fe = await db.collection("premiumFunnelEvents").where("uid", "==", uid).get();
  const pa = await db.collection("premiumApplications").where("uid", "==", uid).get();

  console.log(`\n=== test user reset ${APPLY ? "【実行】" : "(DRY RUN)"} : ${uid} ===`);
  console.log(`displayName=${data.displayName} grade=${data.grade} subject=${data.subject} plan=${data.plan} preferredHour=${data.preferredHour} richMenuType=${data.richMenuType}`);
  console.log(`削除対象: users 1 / answers ${ans.size} / premiumFunnelEvents ${fe.size} / premiumApplications ${pa.size}`);
  console.log(`free richmenu 切替: ${process.env.LINE_RICHMENU_FREE_ID ? "あり" : "（FREE_ID 未設定でスキップ）"}`);

  if (!APPLY) { console.log(`\n▶ DRY RUN。--apply で バックアップ出力＋削除＋menu切替。`); return; }

  console.log(`\n----- BACKUP (users/${uid}) -----`);
  console.log(JSON.stringify(data, (_k, v) => (v && v.toDate ? v.toDate().toISOString() : v), 2));
  console.log(`----- /BACKUP -----\n`);

  await db.doc(`users/${uid}`).delete();
  const dAns = await delByUid(db, "answers", uid);
  const dFe = await delByUid(db, "premiumFunnelEvents", uid);
  const dPa = await delByUid(db, "premiumApplications", uid);
  console.log(`削除: users 1 / answers ${dAns} / funnelEvents ${dFe} / applications ${dPa}`);

  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  const freeMenu = process.env.LINE_RICHMENU_FREE_ID;
  if (token && freeMenu) {
    const res = await fetch(`https://api.line.me/v2/bot/user/${lineId}/richmenu/${freeMenu}`, {
      method: "POST", headers: { Authorization: `Bearer ${token}` },
    });
    console.log(`free richmenu 切替: ${res.ok ? "ok" : "失敗 " + res.status}`);
  }
  console.log(`\n✅ 初期化完了。LINE で何かメッセージを送ると新規オンボーディングが始まります。`);
}
main().catch((e) => { console.error(e); process.exit(1); });
