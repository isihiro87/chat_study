/**
 * KPI ダッシュボードの「計測の穴」3 点を埋める集計スクリプト。
 *
 *   (1) ブロック率           … users.blocked / blockedAt から算出
 *   (2) コホート継続率(survival) … createdAt と lastAnsweredAt の差（生存日数）から
 *                                 D1 / D7 / D30 まで「生き残った」割合を proxy 算出
 *   (3) 追加学習率           … 直近30日の answers を uid×JST日 で束ね、
 *                                 1セッションで2問以上解いた割合・月間回答数を算出
 *
 * ※「誤答後の解説閲覧率」は計測不能（＝構造上ほぼ100%）。
 *    解説は回答ごとに reply へ自動同梱される（lineWebhook handleAnswer の combinedText）。
 *    クリック型のファネルではないため、ここでは「追加学習率(2問以上)」を学習深度の代替指標とする。
 *
 * 読み取りコスト規律（CLAUDE.md）:
 *   - users は count() で規模確認 → SCAN_LIMIT ガード後に select() で必要列のみ1回スキャン。
 *   - answers は直近30日に where で絞り、ANSWERS_LIMIT で上限ガード。
 *     上限に当たったらサンプリングである旨を log で明示する。
 *   - 実行は週次まで（毎日は回さない）。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const SCAN_LIMIT = 50000;
const ANSWERS_LIMIT = 12000;
const DAY_MS = 24 * 60 * 60 * 1000;

// report-user-stats.ts と同じ管理者除外セット
const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

function toDate(v: unknown): Date | null {
  if (v instanceof Timestamp) return v.toDate();
  if (v && typeof (v as { toDate?: () => Date }).toDate === "function") {
    return (v as { toDate: () => Date }).toDate();
  }
  return null;
}

const pct = (a: number, b: number) => (b === 0 ? "—" : `${((100 * a) / b).toFixed(1)}%`);

/** JST(UTC+9) の YYYY-MM-DD 文字列にする（セッション=暦日の束ね用） */
function jstDateKey(d: Date): string {
  const jst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  const now = new Date();

  // ===================== users スキャン =====================
  const totalAgg = await db.collection("users").count().get();
  const totalRaw = totalAgg.data().count;
  console.log(`\n[scale] users total = ${totalRaw}`);
  if (totalRaw > SCAN_LIMIT) {
    console.log(`[abort] total ${totalRaw} > SCAN_LIMIT ${SCAN_LIMIT}. count()集計に切替が必要。`);
    return;
  }

  // 登録日時の実フィールドは createdAt ではなく onboardingStartedAt（無ければ
  // onboardingCompletedAt）。コホート起点に使う。
  const usnap = await db
    .collection("users")
    .select(
      "lineUserId",
      "blocked",
      "blockedAt",
      "onboardingStartedAt",
      "onboardingCompletedAt",
      "lastAnsweredAt",
      "status",
      "dayStreak",
    )
    .limit(SCAN_LIMIT)
    .get();

  let total = 0;
  let blocked = 0;
  let blockedEngaged = 0,
    engaged = 0; // 1問以上回答(lastAnsweredAt あり)
  let blockedNever = 0,
    never = 0;
  let blockedWithin48h = 0,
    blockedWithGap = 0; // blockedAt と createdAt が両方あるブロック

  // 生存(survival) proxy: 登録から N 日経過したユーザーのうち、
  // 生存日数(lastAnsweredAt - createdAt) >= N 日 の割合
  const survivedTo: Record<number, { survived: number; eligible: number }> = {
    1: { survived: 0, eligible: 0 },
    7: { survived: 0, eligible: 0 },
    30: { survived: 0, eligible: 0 },
  };
  const streakBuckets: Record<string, number> = { "0": 0, "1": 0, "2-3": 0, "4-6": 0, "7+": 0 };

  usnap.forEach((doc) => {
    const d = doc.data() as Record<string, unknown>;
    const lineUserId = d.lineUserId as string | undefined;
    if (lineUserId && ADMIN_LINE_USER_IDS.has(lineUserId)) return;
    total++;

    const isBlocked = d.blocked === true;
    const createdAt = toDate(d.onboardingStartedAt) ?? toDate(d.onboardingCompletedAt);
    const lastAns = toDate(d.lastAnsweredAt);
    const blockedAt = toDate(d.blockedAt);

    if (isBlocked) blocked++;

    if (lastAns) {
      engaged++;
      if (isBlocked) blockedEngaged++;
    } else {
      never++;
      if (isBlocked) blockedNever++;
    }

    if (isBlocked && blockedAt && createdAt) {
      blockedWithGap++;
      if (blockedAt.getTime() - createdAt.getTime() <= 2 * DAY_MS) blockedWithin48h++;
    }

    if (createdAt) {
      const ageDays = (now.getTime() - createdAt.getTime()) / DAY_MS;
      const lifeDays = lastAns ? (lastAns.getTime() - createdAt.getTime()) / DAY_MS : -1;
      for (const n of [1, 7, 30]) {
        if (ageDays >= n) {
          survivedTo[n].eligible++;
          if (lifeDays >= n) survivedTo[n].survived++;
        }
      }
    }

    const streak = typeof d.dayStreak === "number" ? (d.dayStreak as number) : 0;
    const key = streak <= 0 ? "0" : streak === 1 ? "1" : streak <= 3 ? "2-3" : streak <= 6 ? "4-6" : "7+";
    streakBuckets[key]++;
  });

  console.log(`[scan] users(管理者除外後)=${total}\n`);

  console.log("========== (1) ブロック率 ==========");
  console.log(`全体ブロック率           : ${pct(blocked, total)} (${blocked}/${total})`);
  console.log(`  回答経験あり層のブロック : ${pct(blockedEngaged, engaged)} (${blockedEngaged}/${engaged})`);
  console.log(`  無回答層のブロック       : ${pct(blockedNever, never)} (${blockedNever}/${never})`);
  console.log(
    `  ブロックのうち登録48h以内 : ${pct(blockedWithin48h, blockedWithGap)} (${blockedWithin48h}/${blockedWithGap})  ※blockedAt+createdAt 両在のみ`,
  );

  console.log("\n========== (2) コホート継続率(survival proxy) ==========");
  console.log("定義: 登録からN日経過した人のうち『生存日数(最終回答−登録)>=N日』の割合");
  for (const n of [1, 7, 30]) {
    const s = survivedTo[n];
    console.log(`  D${n} 継続(生存)率 : ${pct(s.survived, s.eligible)} (${s.survived}/${s.eligible} 対象)`);
  }
  console.log("  連続学習日数(dayStreak)分布 ※dayStreak未設定docは0に算入:");
  for (const k of ["0", "1", "2-3", "4-6", "7+"]) {
    console.log(`    ${k.padEnd(4)}日 : ${streakBuckets[k]}  (${pct(streakBuckets[k], total)})`);
  }

  // ===================== answers スキャン(直近30日) =====================
  const since = Timestamp.fromDate(new Date(now.getTime() - 30 * DAY_MS));
  const ansCntAgg = await db
    .collection("answers")
    .where("answeredAt", ">=", since)
    .count()
    .get();
  const ans30Count = ansCntAgg.data().count;

  const asnap = await db
    .collection("answers")
    .where("answeredAt", ">=", since)
    .orderBy("answeredAt", "desc")
    .limit(ANSWERS_LIMIT)
    .get();

  const sampled = asnap.size;
  const isSample = ans30Count > ANSWERS_LIMIT;

  // uid -> 回答数 / uid-JST日 -> 回答数
  const perUser = new Map<string, number>();
  const perUserDay = new Map<string, number>();
  let totalAns = 0;
  asnap.forEach((doc) => {
    const d = doc.data() as Record<string, unknown>;
    const uid = String(d.uid ?? "");
    if (!uid) return;
    const at = toDate(d.answeredAt);
    if (!at) return;
    totalAns++;
    perUser.set(uid, (perUser.get(uid) ?? 0) + 1);
    const dayKey = `${uid}@${jstDateKey(at)}`;
    perUserDay.set(dayKey, (perUserDay.get(dayKey) ?? 0) + 1);
  });

  const uniqueUsers = perUser.size;
  const sessions = perUserDay.size;
  let multiSessions = 0;
  for (const c of perUserDay.values()) if (c >= 2) multiSessions++;
  const avgPerUser = uniqueUsers === 0 ? 0 : totalAns / uniqueUsers;

  console.log("\n========== (3) 追加学習率・学習量(直近30日) ==========");
  console.log(`直近30日 回答総数(count) : ${ans30Count}`);
  console.log(
    `  本集計のサンプル         : ${sampled} 件${isSample ? `  ⚠️ ANSWERS_LIMIT(${ANSWERS_LIMIT})到達=直近サンプル。全量ではない` : "（=全量）"}`,
  );
  console.log(`  回答ユニークユーザー     : ${uniqueUsers}`);
  console.log(`  1人あたり回答数(サンプル): ${avgPerUser.toFixed(1)} 問`);
  console.log(`  学習セッション(uid×JST日): ${sessions}`);
  console.log(`  追加学習率(2問以上/日)   : ${pct(multiSessions, sessions)} (${multiSessions}/${sessions})`);

  console.log("\n========== 補足 ==========");
  console.log("・誤答後の解説閲覧率は計測不能(構造上ほぼ100%)。解説は回答ごとに reply へ自動同梱されるため、");
  console.log("  学習深度の代替指標は上記『追加学習率(2問以上/日)』を用いる。");
  console.log("\n========== 完了 ==========");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
