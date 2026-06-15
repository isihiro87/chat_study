/**
 * 配信枠超過で配信を止めていた期間に、未回答連続として status が
 * at-risk / dormant / churned に落ちてしまったユーザーを一括で active に戻す
 * 一回限りの remediation スクリプト。
 *
 * 背景:
 *   - 「突然の配信停止」期間はこちら都合で配信できていなかった。
 *   - status は lastAnsweredAt から毎日再計算される派生値なので、status だけ
 *     active に書いても翌 02:00 の recalculateUserStatuses で即座に戻される。
 *   - そのため lastAnsweredAt を「今日(JST)」に補正して active を維持し、配信を再開する。
 *   - 連続記録(stats.streak.current)は停止中も保持されているので、
 *     stats.streak.lastStudyDate を「今日」に橋渡しして current を据え置く
 *     （＝こちら都合の空白で streak をリセットしない）。
 *
 * 元値は *Backup フィールドに退避するので、誤りがあれば戻せる。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/reactivate-paused-users.ts            # dry-run（差分のみ）
 *   npx tsx scripts/reactivate-paused-users.ts --apply    # 実書き込み
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";

const PROJECT_ID = "chatstudy-63477";
const APPLY = process.argv.includes("--apply");
const PAUSED = new Set(["at-risk", "dormant", "churned"]);

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
function jstDateString(d: Date): string {
  return new Date(d.getTime() + JST_OFFSET_MS).toISOString().slice(0, 10);
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();

  const now = new Date();
  const todayJst = jstDateString(now);
  // lastAnsweredAt は「今日 JST の正午」相当の Timestamp に補正（status=active を3日維持）
  const todayNoonUtc = new Date(`${todayJst}T03:00:00Z`); // 12:00 JST
  const todayTs = Timestamp.fromDate(todayNoonUtc);

  const snap = await db.collection("users").get();

  const byOldStatus: Record<string, number> = { "at-risk": 0, dormant: 0, churned: 0 };
  let blockedAmong = 0;
  const targets: {
    ref: FirebaseFirestore.DocumentReference;
    uid: string;
    oldStatus: string;
    blocked: boolean;
    streakCurrent: number | null;
    streakLastStudy: string | null;
    lastAnswered: string | null;
  }[] = [];

  for (const doc of snap.docs) {
    const x = doc.data() as any;
    const status = typeof x.status === "string" ? x.status : "active";
    if (!PAUSED.has(status)) continue;
    byOldStatus[status]++;
    const blocked = x.blocked === true;
    if (blocked) blockedAmong++;
    const streak = x.stats?.streak as any;
    targets.push({
      ref: doc.ref,
      uid: doc.id,
      oldStatus: status,
      blocked,
      streakCurrent: typeof streak?.current === "number" ? streak.current : null,
      streakLastStudy: typeof streak?.lastStudyDate === "string" ? streak.lastStudyDate : null,
      lastAnswered: x.lastAnsweredAt?.toDate?.()?.toISOString?.()?.slice(0, 10) ?? null,
    });
  }

  console.log(`\n=== 配信停止ユーザーの再有効化 ${APPLY ? "【実書き込み】" : "（DRY RUN）"} ===`);
  console.log(`users 総数: ${snap.size}`);
  console.log(`対象（status != active）: ${targets.length}名`);
  console.log(`  at-risk: ${byOldStatus["at-risk"]} / dormant: ${byOldStatus.dormant} / churned: ${byOldStatus.churned}`);
  console.log(`  うち blocked（push 自体は届かない）: ${blockedAmong}名`);
  console.log(`\n書き込み内容（対象1件あたり）:`);
  console.log(`  status            → "active"`);
  console.log(`  lastAnsweredAt    → ${todayJst} 12:00 JST（元値は lastAnsweredAtBackup に退避）`);
  console.log(`  stats.streak.lastStudyDate → "${todayJst}"（元値は streakLastStudyDateBackup に退避、current は据え置き）`);
  console.log(`  dayStreak         → stats.streak.current（recalc が 0 にした分を復元）`);

  console.log(`\n--- サンプル（先頭15件） ---`);
  console.log("oldStatus | streak.current | streak.lastStudy(旧→今日) | lastAnswered(旧→今日) | blocked | uid");
  targets.slice(0, 15).forEach((t) => {
    console.log(
      `${t.oldStatus.padEnd(8)} | ${String(t.streakCurrent ?? "-").padStart(3)} | ${String(t.streakLastStudy ?? "-").padEnd(10)} → ${todayJst} | ${String(t.lastAnswered ?? "-")} → ${todayJst} | ${t.blocked ? "🚫" : "-"} | ${t.uid}`
    );
  });

  if (!APPLY) {
    console.log(`\n▶ DRY RUN のため書き込みなし。実行するには --apply を付けてください。`);
    return;
  }

  let written = 0;
  for (let i = 0; i < targets.length; i += 400) {
    const batch = db.batch();
    for (const t of targets.slice(i, i + 400)) {
      // set(..., {merge:true}) はドット記法をネストパスに展開しないため、
      // stats.streak.lastStudyDate はネストオブジェクトで渡す（current/longest は保持）。
      const updates: Record<string, unknown> = {
        status: "active",
        statusChangedAt: FieldValue.serverTimestamp(),
        lastAnsweredAt: todayTs,
        lastAnsweredAtBackup: t.lastAnswered ? `${t.lastAnswered}` : "(none)",
        stats: { streak: { lastStudyDate: todayJst } },
        streakLastStudyDateBackup: t.streakLastStudy ?? "(none)",
        updatedAt: FieldValue.serverTimestamp(),
      };
      if (t.streakCurrent !== null) {
        updates.dayStreak = t.streakCurrent;
      }
      batch.set(t.ref, updates, { merge: true });
      written++;
    }
    await batch.commit();
    console.log(`  committed ${Math.min(i + 400, targets.length)}/${targets.length}`);
  }
  console.log(`\n✅ ${written}名を active に再有効化しました。`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
