/**
 * 「1問目を解いた人が2問目以降を解いているか」= 継続率の日別トレンド。
 *
 * 曜日で配信問題数が違うため生の「2問以上」カウントは日間比較できない。
 * そこで UU 正規化した継続率（2問目到達UU ÷ 回答UU）で見る。
 * さらに answers.source（2026-06-18 計測開始）で 2問目以降の内訳を出し、
 * 「もう一問解く(extra)」ボタン由来か別配信(daily)由来かを切り分ける。
 *
 * 配置変更デプロイ: 2026-06-17 14:42 JST（回答後カードに「もう一問解く」配置）。
 * read 規律: answeredAt レンジ + limit ガードで全件スキャン回避。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const SCAN_CAP = 30000;
const WINDOW_DAYS = 13;

function jstDayKey(d: Date): string {
  return new Date(d.getTime() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

interface Ans { atMs: number; source: string }

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();

  const nowMs = Number(process.argv[2]);
  const since = Timestamp.fromMillis(nowMs - WINDOW_DAYS * 24 * 3600 * 1000);

  const snap = await db
    .collection("answers")
    .where("answeredAt", ">=", since)
    .limit(SCAN_CAP)
    .get();
  if (snap.size >= SCAN_CAP) {
    console.log(`⚠️ answers 上限 ${SCAN_CAP} 到達。集計は一部のみ（実数はこれ以上）。`);
  }
  console.log(`[multi-answer] answers scanned (last ${WINDOW_DAYS}d): ${snap.size}`);

  // day -> uid -> 回答配列
  const dayUid = new Map<string, Map<string, Ans[]>>();
  for (const doc of snap.docs) {
    const uid = doc.get("uid");
    const at = doc.get("answeredAt") as Timestamp | undefined;
    if (typeof uid !== "string" || !at) continue;
    const day = jstDayKey(at.toDate());
    const m = dayUid.get(day) ?? new Map<string, Ans[]>();
    const arr = m.get(uid) ?? [];
    arr.push({ atMs: at.toMillis(), source: String(doc.get("source") ?? "(untagged)") });
    m.set(uid, arr);
    dayUid.set(day, m);
  }

  const days = [...dayUid.keys()].sort();
  console.log("\n■ 継続率トレンド（その日に1問でも解いた人のうち2問目以降に進んだ割合）");
  console.log("JST日 | 回答UU | 2問+到達 | 継続率 | 3問+ | 平均問/人 | 総回答");
  console.log("-".repeat(74));
  for (const day of days) {
    const m = dayUid.get(day)!;
    let uu1 = 0, uu2 = 0, uu3 = 0, total = 0;
    for (const arr of m.values()) {
      uu1++;
      if (arr.length >= 2) uu2++;
      if (arr.length >= 3) uu3++;
      total += arr.length;
    }
    const rate = uu1 ? ((uu2 / uu1) * 100).toFixed(1) + "%" : "-";
    const avg = uu1 ? (total / uu1).toFixed(2) : "-";
    const mark = day >= "2026-06-17" ? "  ←変更後" : "";
    console.log(
      `${day} | ${String(uu1).padStart(5)} | ${String(uu2).padStart(7)} | ${rate.padStart(6)} | ${String(uu3).padStart(4)} | ${avg.padStart(8)} | ${String(total).padStart(5)}${mark}`,
    );
  }

  // 2問目以降の source 内訳（各ユーザーの当日回答を時刻順に並べ、2番目以降を集計）
  console.log("\n■ 2問目以降の回答の source 内訳（ボタン由来 extra か別配信 daily か）");
  console.log("  ※ source は 2026-06-18 計測開始。それ以前は (untagged)。");
  console.log("JST日 | 2問目以降の回答数 | source別");
  console.log("-".repeat(60));
  for (const day of days) {
    const m = dayUid.get(day)!;
    const bySrc: Record<string, number> = {};
    let cont = 0;
    for (const arr of m.values()) {
      if (arr.length < 2) continue;
      arr.sort((a, b) => a.atMs - b.atMs);
      for (let i = 1; i < arr.length; i++) {
        bySrc[arr[i].source] = (bySrc[arr[i].source] ?? 0) + 1;
        cont++;
      }
    }
    const parts = Object.entries(bySrc)
      .sort((a, b) => b[1] - a[1])
      .map(([s, n]) => `${s}=${n}`)
      .join("  ");
    const mark = day >= "2026-06-18" ? "  ←計測後" : "";
    console.log(`${day} | ${String(cont).padStart(6)} | ${parts}${mark}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
