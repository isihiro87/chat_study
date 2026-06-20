/**
 * プレミアム導線 funnel イベントを Firestore に記録するサーバー側ヘルパー。
 *
 * クライアント側 (`src/utils/funnelEvent.ts`) と書き込み先 collection を共有:
 * `premiumFunnelEvents/{autoId}`
 *
 * クライアント側は eventType を allowlist で制限しているが、サーバー側は admin SDK
 * 経由なので任意の eventType を記録できる。trial 開放・期限切れなどユーザー操作を
 * 介さない場面はサーバー側で記録する。
 *
 * 失敗時はログのみ。再試行はしない（funnel データの欠損は許容、機能本体は止めない）。
 */

export type ServerFunnelEventType =
  | "richmenu_premium_info_tap"
  // 学習エンゲージメント（回答後カード / メニューの追加学習動線）
  | "extra_question_tap"
  | "weak_review_tap"
  | "trial_started"
  | "trial_reminder_sent"
  | "trial_expired"
  | "paid_contract_started"
  | "paid_cancel_requested"
  | "checkout_session_created"
  // 休眠ユーザー除外システム / Win-back（§B, §C）
  | "winback_sent"
  | "status_transition"
  | "restart_intent_detected"
  // Trial ドリップキャンペーン（§D）
  | "trial_drip_sent"
  | "trial_drip_parent_sent"
  | "trial_drip_story_sent"
  | "trial_evening_reminder_sent"
  | "trial_night_reminder_sent"
  // 申込フォーム離脱 / 期限切れ後フォロー（§D-13）
  | "premium_apply_form_abandoned"
  | "post_trial_followup_sent"
  // 月次送信モニタリング
  | "monthly_delivery_report_generated"
  // 月末ふり返りレポート（AI 学習分析）
  | "monthly_report_invite_sent"
  | "monthly_report_viewed";

export async function logServerFunnelEvent(
  eventType: ServerFunnelEventType,
  uid: string,
  context?: Record<string, unknown>,
): Promise<void> {
  try {
    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const lineUserId = uid.startsWith("line:")
      ? uid.slice("line:".length)
      : uid;

    await db.collection("premiumFunnelEvents").add({
      uid,
      lineUserId,
      eventType,
      occurredAt: FieldValue.serverTimestamp(),
      context: context ?? null,
    });
  } catch (error) {
    console.warn(
      `[funnelEvent] server log failed eventType=${eventType} uid=${uid}:`,
      error,
    );
  }
}
