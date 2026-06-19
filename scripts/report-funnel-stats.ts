/**
 * プレミアム導線 funnel（`premiumFunnelEvents` collection）を集計するスクリプト。
 *
 * 出力:
 *   - eventType 別の件数（全期間 / 直近30日 / 直近7日）
 *   - UU（ユニーク lineUserId 数）
 *   - クライアント側 funnel: liff_units_open → liff_premium_info_view →
 *     liff_premium_apply_view → liff_premium_apply_submit のステップ別 UU と通過率
 *   - サーバー側 funnel: richmenu_premium_info_tap / trial_started /
 *     trial_reminder_sent / premium_apply_form_abandoned / trial_expired /
 *     paid_contract_started など
 *
 * 管理者アカウント（`ADMIN_LINE_USER_IDS`）は集計から除外。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/report-funnel-stats.ts
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

interface FunnelDoc {
  uid?: string;
  lineUserId?: string;
  eventType?: string;
  occurredAt?: Timestamp;
  context?: Record<string, unknown> | null;
}

function pct(n: number, d: number): string {
  if (d === 0) return "-";
  return `${((n / d) * 100).toFixed(1)}%`;
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  console.log(`[report-funnel-stats] project=${FIREBASE_PROJECT_ID}`);
  console.log(`[report-funnel-stats] fetching premiumFunnelEvents ...`);
  const snap = await db.collection("premiumFunnelEvents").get();
  console.log(`[report-funnel-stats] events.size=${snap.size}`);

  const now = Timestamp.now();
  const sevenDaysAgo = Timestamp.fromMillis(now.toMillis() - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = Timestamp.fromMillis(now.toMillis() - 30 * 24 * 60 * 60 * 1000);

  const totalByEvent: Record<string, number> = {};
  const last7ByEvent: Record<string, number> = {};
  const last30ByEvent: Record<string, number> = {};
  const uuByEvent: Record<string, Set<string>> = {};

  // Win-back 効果の定点指標用アキュムレータ。
  const restartBySource: Record<string, Set<string>> = {}; // source -> UU
  const recoveryByFrom: Record<string, Set<string>> = {}; // status_transition で to=active の from -> UU

  // 学習エンゲージメント: 「もう一問解く」タップを発火元 src 別に 7d 集計。
  const extraTapBySrc7d: Record<string, number> = {}; // src -> 件数(7d)
  let weakReviewTap7d = 0;

  let adminExcluded = 0;

  for (const doc of snap.docs) {
    const ev = doc.data() as FunnelDoc;
    const lid = ev.lineUserId ?? "";
    if (ADMIN_LINE_USER_IDS.has(lid)) {
      adminExcluded++;
      continue;
    }
    const t = ev.eventType ?? "(unknown)";
    const at = ev.occurredAt;

    totalByEvent[t] = (totalByEvent[t] ?? 0) + 1;
    if (at && at.toMillis() >= sevenDaysAgo.toMillis()) {
      last7ByEvent[t] = (last7ByEvent[t] ?? 0) + 1;
    }
    if (at && at.toMillis() >= thirtyDaysAgo.toMillis()) {
      last30ByEvent[t] = (last30ByEvent[t] ?? 0) + 1;
    }

    if (!uuByEvent[t]) uuByEvent[t] = new Set<string>();
    if (lid) uuByEvent[t].add(lid);

    // Win-back 効果指標
    if (t === "restart_intent_detected" && lid) {
      const src = String(ev.context?.source ?? "(unknown)");
      (restartBySource[src] ??= new Set<string>()).add(lid);
    }
    if (t === "status_transition" && lid && ev.context?.to === "active") {
      const from = String(ev.context?.from ?? "(unknown)");
      (recoveryByFrom[from] ??= new Set<string>()).add(lid);
    }

    // 学習エンゲージメント（直近7日）
    if (at && at.toMillis() >= sevenDaysAgo.toMillis()) {
      if (t === "extra_question_tap") {
        const src = String(ev.context?.src ?? "unknown");
        extraTapBySrc7d[src] = (extraTapBySrc7d[src] ?? 0) + 1;
      } else if (t === "weak_review_tap") {
        weakReviewTap7d++;
      }
    }
  }

  console.log(`\n(管理者除外: ${adminExcluded} 件)\n`);

  console.log("========== eventType 別 件数 / UU ==========");
  const types = Object.keys(totalByEvent).sort((a, b) => (totalByEvent[b] - totalByEvent[a]));
  if (types.length === 0) {
    console.log("(イベント記録なし)");
  } else {
    console.log(
      "eventType".padEnd(40),
      "total".padStart(6),
      "UU".padStart(5),
      "30d".padStart(5),
      "7d".padStart(5),
    );
    console.log("-".repeat(70));
    for (const t of types) {
      console.log(
        t.padEnd(40),
        String(totalByEvent[t] ?? 0).padStart(6),
        String(uuByEvent[t]?.size ?? 0).padStart(5),
        String(last30ByEvent[t] ?? 0).padStart(5),
        String(last7ByEvent[t] ?? 0).padStart(5),
      );
    }
  }

  // ========== 学習エンゲージメント（追加学習動線） ==========
  // 回答後カードは回答のたびに表示されるため、分母 = 直近7日の answers 件数。
  // クリック率 = extra_question_tap(src=post_answer) ÷ answers(7d)。
  console.log("\n========== 学習エンゲージメント（直近7日） ==========");
  const ANSWERS_SCAN_CAP = 8000; // 全件スキャン暴走の保険（CLAUDE.md read 規律）
  let answers7d = 0;
  const answersBySource: Record<string, { total: number; correct: number }> = {};
  try {
    const ansSnap = await db
      .collection("answers")
      .where("answeredAt", ">=", sevenDaysAgo)
      .limit(ANSWERS_SCAN_CAP)
      .get();
    answers7d = ansSnap.size;
    if (ansSnap.size >= ANSWERS_SCAN_CAP) {
      console.log(`  ⚠️ answers が上限 ${ANSWERS_SCAN_CAP} に到達。一部のみ集計（実数はこれ以上）。`);
    }
    for (const d of ansSnap.docs) {
      const src = String(d.get("source") ?? "(untagged)");
      const isCorrect = d.get("isCorrect") === true;
      const acc = (answersBySource[src] ??= { total: 0, correct: 0 });
      acc.total++;
      if (isCorrect) acc.correct++;
    }
  } catch (error) {
    console.log("  answers 取得失敗:", (error as Error).message);
  }

  console.log(`\n回答数(7d, 全経路) = ${answers7d}`);
  console.log("経路別 回答数 / 正答率（answers.source）:");
  const ansSrcKeys = Object.keys(answersBySource).sort(
    (a, b) => answersBySource[b].total - answersBySource[a].total,
  );
  if (ansSrcKeys.length === 0) {
    console.log("  (source タグ付き回答なし＝デプロイ前/未回答)");
  } else {
    for (const s of ansSrcKeys) {
      const a = answersBySource[s];
      console.log(
        `  ${s.padEnd(12)} ${String(a.total).padStart(5)} 回  正答率 ${pct(a.correct, a.total)}`,
      );
    }
  }

  const postAnswerTaps = extraTapBySrc7d["post_answer"] ?? 0;
  const totalExtraTaps = Object.values(extraTapBySrc7d).reduce((s, n) => s + n, 0);
  console.log("\n「もう一問解く / 追加で解く」タップ(7d):");
  console.log(`  合計 = ${totalExtraTaps} 回`);
  for (const [src, n] of Object.entries(extraTapBySrc7d).sort((a, b) => b[1] - a[1])) {
    console.log(`    src=${src.padEnd(12)} ${n} 回`);
  }
  console.log(
    `  ▶ 回答後カードのクリック率 = post_answer タップ ${postAnswerTaps} ÷ 回答数 ${answers7d} = ${pct(postAnswerTaps, answers7d)}`,
  );
  console.log(`「苦手を復習」タップ(7d) = ${weakReviewTap7d} 回`);
  console.log(
    "  ※ extra_question_tap / weak_review_tap は 2026-06-18 計測開始。それ以前は 0 表示。",
  );

  console.log("\n========== クライアント側 申込ファネル（UU ベース） ==========");
  const funnelSteps: Array<{ key: string; label: string }> = [
    { key: "liff_units_open", label: "じっくり学ぶ LIFF 起動" },
    { key: "liff_premium_info_view", label: "/liff/premium-info 到達" },
    { key: "liff_premium_apply_view", label: "/liff/premium-apply 到達" },
    { key: "liff_premium_apply_submit", label: "申込フォーム送信" },
  ];

  const baseUU = uuByEvent[funnelSteps[0].key]?.size ?? 0;
  let prevUU = baseUU;
  for (let i = 0; i < funnelSteps.length; i++) {
    const s = funnelSteps[i];
    const uu = uuByEvent[s.key]?.size ?? 0;
    const fromTop = pct(uu, baseUU);
    const fromPrev = i === 0 ? "-" : pct(uu, prevUU);
    console.log(
      `${(i + 1).toString().padStart(2)}. ${s.label.padEnd(36)} UU=${String(uu).padStart(3)}  (vs 1: ${fromTop}, vs 直前: ${fromPrev})`,
    );
    prevUU = uu;
  }

  console.log("\n========== サーバー側 重要イベント ==========");
  const importantServerEvents = [
    "extra_question_tap",
    "weak_review_tap",
    "richmenu_premium_info_tap",
    "trial_started",
    "trial_reminder_sent",
    "trial_drip_sent",
    "trial_evening_reminder_sent",
    "trial_night_reminder_sent",
    "trial_expired",
    "premium_apply_form_abandoned",
    "post_trial_followup_sent",
    "paid_contract_started",
    "paid_cancel_requested",
    "checkout_session_created",
    "winback_sent",
    "status_transition",
    "restart_intent_detected",
  ];
  for (const t of importantServerEvents) {
    const total = totalByEvent[t] ?? 0;
    const uu = uuByEvent[t]?.size ?? 0;
    if (total === 0) continue;
    console.log(`  ${t.padEnd(36)} total=${String(total).padStart(4)}  UU=${String(uu).padStart(3)}`);
  }

  console.log("\n========== Win-back 効果（retention 定点指標） ==========");
  const winbackUU = uuByEvent["winback_sent"]?.size ?? 0;
  const restartTotalUU = new Set<string>();
  Object.values(restartBySource).forEach((s) => s.forEach((u) => restartTotalUU.add(u)));
  const recoveryTotalUU = new Set<string>();
  Object.values(recoveryByFrom).forEach((s) => s.forEach((u) => recoveryTotalUU.add(u)));

  console.log(`  Win-back 送信 UU                      : ${winbackUU}`);
  console.log(
    `  復帰検知 restart_intent_detected UU   : ${restartTotalUU.size}` +
      (winbackUU ? `  (送信比 ${pct(restartTotalUU.size, winbackUU)})` : ""),
  );
  const srcKeys = Object.keys(restartBySource).sort();
  if (srcKeys.length > 0) {
    for (const k of srcKeys) {
      console.log(`     └ source=${k.padEnd(14)} UU=${restartBySource[k].size}`);
    }
  } else {
    console.log("     └ (まだ記録なし。今回のデプロイ後から蓄積)");
  }
  console.log(
    `  回復遷移 status_transition→active UU  : ${recoveryTotalUU.size}` +
      (winbackUU ? `  (送信比 ${pct(recoveryTotalUU.size, winbackUU)})` : ""),
  );
  const fromKeys = Object.keys(recoveryByFrom).sort();
  if (fromKeys.length > 0) {
    for (const k of fromKeys) {
      console.log(`     └ from=${k.padEnd(16)} UU=${recoveryByFrom[k].size}`);
    }
  } else {
    console.log("     └ (まだ記録なし。日次 recalc が status_transition を記録する)");
  }
  console.log(
    "  ※ restart_intent_detected / status_transition は計測埋め込み後から蓄積。",
  );
  console.log(
    "    過去分の実復帰率はワンショット結合（winback送信時刻 vs lastAnsweredAt）で別途算出。",
  );

  console.log("\n========== 完了 ==========\n");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
