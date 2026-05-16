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
  | "trial_started"
  | "trial_reminder_sent"
  | "trial_expired"
  | "paid_contract_started";

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
