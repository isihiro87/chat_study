/**
 * 使い捨て分析: テスト範囲(testScope)を設定した人 vs しなかった人 の行動差。
 *
 * 注意（交絡）: 範囲設定は「/scope まで自分で進んで保存した」能動的行動なので、
 *   設定群はそもそもエンゲージが高い層に偏る（選択バイアス）。差は相関であって
 *   因果ではない。06-04 trial分析と同種の生存/選択バイアスに留意して読むこと。
 *
 * 読み取りコスト規律:
 *   - users は count() ガード後に単一 select() スキャン（stats から累計回答/正答も取る）。
 *   - answers は直近30日 where + limit ガード（追加学習率の算出にのみ使用）。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const SCAN_LIMIT = 50000;
const ANSWERS_LIMIT = 12000;
const DAY_MS = 24 * 60 * 60 * 1000;

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
function jstDateKey(d: Date): string {
  return new Date(d.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

interface Cohort {
  n: number;
  blocked: number;
  engaged: number; // lastAnsweredAt あり
  survivalEligD7: number;
  survivalD7: number;
  statusActive: number;
  sumAnswered: number; // stats.totalAnswered 合計
  sumCorrect: number; // stats.totalCorrect 合計
  answeredUsers: number; // stats.totalAnswered>0 のユーザー数
  // answers(30d) 由来
  sessions: number;
  multiSessions: number;
}
const blank = (): Cohort => ({
  n: 0, blocked: 0, engaged: 0, survivalEligD7: 0, survivalD7: 0,
  statusActive: 0, sumAnswered: 0, sumCorrect: 0, answeredUsers: 0,
  sessions: 0, multiSessions: 0,
});

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  const now = new Date();

  const totalAgg = await db.collection("users").count().get();
  const totalRaw = totalAgg.data().count;
  console.log(`\n[scale] users total = ${totalRaw}`);
  if (totalRaw > SCAN_LIMIT) {
    console.log(`[abort] total ${totalRaw} > SCAN_LIMIT ${SCAN_LIMIT}`);
    return;
  }

  const usnap = await db
    .collection("users")
    .select(
      "lineUserId", "testScope", "blocked", "lastAnsweredAt",
      "onboardingStartedAt", "onboardingCompletedAt", "status", "stats",
    )
    .limit(SCAN_LIMIT)
    .get();

  const withScope = blank();
  const noScope = blank();
  const scopeUids = new Set<string>(); // answers バケツ用（doc.id = uid）

  usnap.forEach((doc) => {
    const d = doc.data() as Record<string, unknown>;
    const lineUserId = d.lineUserId as string | undefined;
    if (lineUserId && ADMIN_LINE_USER_IDS.has(lineUserId)) return;

    const ts = d.testScope as { topics?: unknown[] } | undefined;
    const hasScope = Array.isArray(ts?.topics) &&
      ts!.topics!.some((t) => typeof t === "string" && t.length > 0);
    const c = hasScope ? withScope : noScope;
    if (hasScope) scopeUids.add(doc.id);

    c.n++;
    if (d.blocked === true) c.blocked++;

    const lastAns = toDate(d.lastAnsweredAt);
    if (lastAns) c.engaged++;

    const reg = toDate(d.onboardingStartedAt) ?? toDate(d.onboardingCompletedAt);
    if (reg) {
      const ageDays = (now.getTime() - reg.getTime()) / DAY_MS;
      const lifeDays = lastAns ? (lastAns.getTime() - reg.getTime()) / DAY_MS : -1;
      if (ageDays >= 7) {
        c.survivalEligD7++;
        if (lifeDays >= 7) c.survivalD7++;
      }
    }

    if (d.status === "active") c.statusActive++;

    const stats = d.stats as { totalAnswered?: number; totalCorrect?: number } | undefined;
    const ta = typeof stats?.totalAnswered === "number" ? stats!.totalAnswered! : 0;
    const tc = typeof stats?.totalCorrect === "number" ? stats!.totalCorrect! : 0;
    c.sumAnswered += ta;
    c.sumCorrect += tc;
    if (ta > 0) c.answeredUsers++;
  });

  // ---- answers(直近30日) で追加学習率(2問以上/日) をコホート別に ----
  const since = Timestamp.fromDate(new Date(now.getTime() - 30 * DAY_MS));
  const ansCntAgg = await db.collection("answers").where("answeredAt", ">=", since).count().get();
  const ans30 = ansCntAgg.data().count;
  const asnap = await db
    .collection("answers")
    .where("answeredAt", ">=", since)
    .orderBy("answeredAt", "desc")
    .limit(ANSWERS_LIMIT)
    .get();
  const isSample = ans30 > ANSWERS_LIMIT;

  const dayCount = new Map<string, number>(); // `${uid}@${day}` -> n
  const dayCohort = new Map<string, boolean>(); // key -> hasScope
  asnap.forEach((doc) => {
    const d = doc.data() as Record<string, unknown>;
    const uid = String(d.uid ?? "");
    if (!uid) return;
    const at = toDate(d.answeredAt);
    if (!at) return;
    const key = `${uid}@${jstDateKey(at)}`;
    dayCount.set(key, (dayCount.get(key) ?? 0) + 1);
    dayCohort.set(key, scopeUids.has(uid));
  });
  for (const [key, cnt] of dayCount) {
    const c = dayCohort.get(key) ? withScope : noScope;
    c.sessions++;
    if (cnt >= 2) c.multiSessions++;
  }

  const row = (label: string, c: Cohort) => {
    console.log(`\n── ${label}（n=${c.n}）──`);
    console.log(`  ブロック率           : ${pct(c.blocked, c.n)} (${c.blocked}/${c.n})`);
    console.log(`  回答到達率(1問以上)   : ${pct(c.engaged, c.n)} (${c.engaged}/${c.n})`);
    console.log(`  status=active 率      : ${pct(c.statusActive, c.n)} (${c.statusActive}/${c.n})`);
    console.log(`  D7継続(survival)      : ${pct(c.survivalD7, c.survivalEligD7)} (${c.survivalD7}/${c.survivalEligD7}対象)`);
    console.log(`  累計回答(全員平均)    : ${(c.sumAnswered / Math.max(c.n, 1)).toFixed(1)} 問/人`);
    console.log(`  累計回答(回答者平均)  : ${(c.sumAnswered / Math.max(c.answeredUsers, 1)).toFixed(1)} 問/回答者(${c.answeredUsers}人)`);
    console.log(`  正答率(累計)          : ${pct(c.sumCorrect, c.sumAnswered)} (${c.sumCorrect}/${c.sumAnswered})`);
    console.log(`  追加学習率(2問以上/日): ${pct(c.multiSessions, c.sessions)} (${c.multiSessions}/${c.sessions}セッション)`);
  };

  console.log("\n========== 範囲設定 有無による行動差 ==========");
  console.log(`(answers30日 総数=${ans30}, サンプル=${asnap.size}${isSample ? " ⚠️上限到達=直近サンプル" : "=全量"})`);
  row("① 範囲を設定した人", withScope);
  row("② 設定しなかった人", noScope);

  // 差分サマリ
  const rate = (a: number, b: number) => (b === 0 ? 0 : (100 * a) / b);
  console.log("\n========== 差分（①−②, pt） ==========");
  console.log(`  ブロック率差   : ${(rate(withScope.blocked, withScope.n) - rate(noScope.blocked, noScope.n)).toFixed(1)} pt`);
  console.log(`  回答到達率差   : ${(rate(withScope.engaged, withScope.n) - rate(noScope.engaged, noScope.n)).toFixed(1)} pt`);
  console.log(`  D7継続差       : ${(rate(withScope.survivalD7, withScope.survivalEligD7) - rate(noScope.survivalD7, noScope.survivalEligD7)).toFixed(1)} pt`);
  console.log(`  追加学習率差   : ${(rate(withScope.multiSessions, withScope.sessions) - rate(noScope.multiSessions, noScope.sessions)).toFixed(1)} pt`);
  console.log(`  累計回答/人差  : ${(withScope.sumAnswered / Math.max(withScope.n, 1) - noScope.sumAnswered / Math.max(noScope.n, 1)).toFixed(1)} 問`);

  console.log("\n※ 設定群は能動的行動による選択バイアスを含む（相関であり因果ではない）。");
  console.log("========== 完了 ==========");
}

main().catch((e) => { console.error(e); process.exit(1); });
