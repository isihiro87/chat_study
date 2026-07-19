/**
 * タイピングゲーム「タイプでスタディ」利用状況スナップショット（プレーン JS 版）。
 *
 * ⚠ 本体（chatstudy-63477）とは【別の Firebase プロジェクト】`type-study-88ced` を対象。
 *    devcontainer 向け node_modules で tsx/esbuild が Windows で動かないため .mjs にした。
 *
 * 使い方:
 *   gcloud auth application-default login   # type-study-88ced にアクセスできるアカウントで
 *   node scripts/_typing-usage-snapshot.mjs [--limit 20000]
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROJECT_ID = "type-study-88ced";

function parseLimit(argv) {
  const i = argv.indexOf("--limit");
  if (i >= 0 && argv[i + 1]) return Math.max(1, parseInt(argv[i + 1], 10) || 20000);
  return 20000;
}
const pct = (n, d) => (d > 0 ? ((n / d) * 100).toFixed(1) + "%" : "—");
const topN = (map, n) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);

async function main() {
  const SAMPLE_LIMIT = parseLimit(process.argv.slice(2));
  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();

  const [sessCount, rankCount, playerCount] = await Promise.all([
    db.collection("sessions").count().get().then((s) => s.data().count).catch(() => -1),
    db.collection("rankings").count().get().then((s) => s.data().count).catch(() => -1),
    db.collection("players").count().get().then((s) => s.data().count).catch(() => -1),
  ]);

  console.log("==== タイプでスタディ 利用状況スナップショット ====");
  console.log(`プロジェクト: ${PROJECT_ID}`);
  console.log("");
  console.log("【総数（count 集計）】");
  console.log(`  総プレイ回数 (sessions): ${sessCount}`);
  console.log(`  ランキング登録 (rankings): ${rankCount}`);
  console.log(`  プレイヤー端末 (players) : ${playerCount}`);
  console.log("");

  if (sessCount === 0) {
    console.log("まだプレイ記録がありません。");
    return;
  }

  const snap = await db.collection("sessions").orderBy("date", "asc").limit(SAMPLE_LIMIT).get();
  const docs = snap.docs.map((d) => d.data());
  const readN = docs.length;
  const capped = sessCount > 0 && readN < sessCount;
  console.log(`【内訳（${readN} 件を集計${capped ? `／全 ${sessCount} 件中 limit 打ち切り` : "＝全件"}）】`);

  const byDay = new Map(), byMode = new Map(), byEra = new Map(), bySubject = new Map();
  const playCountByPid = new Map(), daysByPid = new Map();
  let accSum = 0, accN = 0, kpmSum = 0, kpmN = 0, perfectN = 0, clearedSum = 0;

  for (const d of docs) {
    const day = String(d.date || "").slice(0, 10);
    const pid = String(d.pid || "");
    byDay.set(day, (byDay.get(day) || 0) + 1);
    byMode.set(String(d.mode || "?"), (byMode.get(String(d.mode || "?")) || 0) + 1);
    byEra.set(String(d.eraName || "?"), (byEra.get(String(d.eraName || "?")) || 0) + 1);
    bySubject.set(String(d.subjectId || "?"), (bySubject.get(String(d.subjectId || "?")) || 0) + 1);
    if (pid) {
      playCountByPid.set(pid, (playCountByPid.get(pid) || 0) + 1);
      if (!daysByPid.has(pid)) daysByPid.set(pid, new Set());
      if (day) daysByPid.get(pid).add(day);
    }
    if (typeof d.acc === "number") { accSum += d.acc; accN++; }
    if (typeof d.kpm === "number") { kpmSum += d.kpm; kpmN++; }
    if (d.perfect) perfectN++;
    if (typeof d.cleared === "number") clearedSum += d.cleared;
  }

  const uniquePids = playCountByPid.size;
  const repeaters = [...playCountByPid.values()].filter((c) => c >= 2).length;
  const multiDay = [...daysByPid.values()].filter((s) => s.size >= 2).length;

  console.log("");
  console.log("◆ プレイヤー（端末 pid ベース）");
  console.log(`  ユニーク端末数            : ${uniquePids}`);
  console.log(`  1人あたり平均プレイ回数   : ${(readN / Math.max(1, uniquePids)).toFixed(1)} 回`);
  console.log(`  リピーター（2回以上）     : ${repeaters} (${pct(repeaters, uniquePids)})`);
  console.log(`  複数日プレイ（2日以上）   : ${multiDay} (${pct(multiDay, uniquePids)})`);

  console.log("");
  console.log("◆ 日別プレイ回数");
  for (const [day, c] of [...byDay.entries()].sort()) console.log(`  ${day}: ${c}`);

  console.log("");
  console.log("◆ モード別");
  for (const [m, c] of topN(byMode, 10)) console.log(`  ${m}: ${c} (${pct(c, readN)})`);

  console.log("");
  console.log("◆ 人気の単元 TOP10（eraName）");
  for (const [e, c] of topN(byEra, 10)) console.log(`  ${e}: ${c} (${pct(c, readN)})`);

  console.log("");
  console.log("◆ 教科別（subjectId）");
  for (const [s, c] of topN(bySubject, 10)) console.log(`  ${s}: ${c} (${pct(c, readN)})`);

  console.log("");
  console.log("◆ 品質指標");
  console.log(`  平均正答率(acc) : ${accN ? (accSum / accN).toFixed(1) + "%" : "—"}`);
  console.log(`  平均 kpm        : ${kpmN ? (kpmSum / kpmN).toFixed(0) : "—"}`);
  console.log(`  パーフェクト率  : ${pct(perfectN, readN)}`);
  console.log(`  累計クリア用語数: ${clearedSum}`);
}

main().catch((e) => {
  console.error("失敗:", e?.message || e);
  console.error("→ type-study-88ced にアクセスできるアカウントで ADC ログイン済みか確認してください。");
  process.exit(1);
});
