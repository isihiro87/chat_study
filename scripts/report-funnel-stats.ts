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
