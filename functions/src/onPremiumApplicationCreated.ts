import * as functions from "firebase-functions/v1";

import { getLineClient } from "./lineWebhook";

/**
 * LIFF /premium-apply からの申込で premiumApplications/{id} が作成されたとき、
 * 管理者の LINE ID にプッシュ通知を送る。
 *
 * 実装上の留意点:
 * - 管理者 ID は env `ADMIN_LINE_USER_IDS`（カンマ区切り）で渡す。未設定なら no-op
 * - push 失敗は再試行しない（Firestore Console で内容は確認可能）
 * - 通知メッセージにはユーザー情報を整形した text を1通だけ送る
 *   （flex は管理者向けには情報量で text 優位、かつ Cloud Functions のコスト最小化）
 *
 * セキュリティ:
 * - `ADMIN_LINE_USER_IDS` は `functions/.env` で管理。Git に commit しない
 * - 申込本文は firestore.rules で本人 uid と status="pending" を強制済みなので、
 *   ここでは追加検証なしで信用する（admin SDK 経由なら rules バイパス）
 */
export const onPremiumApplicationCreated = functions
  .region("asia-northeast1")
  .firestore.document("premiumApplications/{applicationId}")
  .onCreate(async (snap) => {
    const data = snap.data() ?? {};
    const applicationId = snap.id;

    const adminIdsRaw = process.env.ADMIN_LINE_USER_IDS || "";
    const adminIds = adminIdsRaw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (adminIds.length === 0) {
      console.warn(
        `[onPremiumApplicationCreated] ADMIN_LINE_USER_IDS not set; skip notify (applicationId=${applicationId})`
      );
      return;
    }

    const lineUserId =
      typeof data.lineUserId === "string" ? data.lineUserId : "(unknown)";
    const displayName =
      typeof data.displayName === "string" && data.displayName
        ? data.displayName
        : "(displayName 未取得)";
    const subject = typeof data.subject === "string" ? data.subject : "未設定";
    const grade = typeof data.grade === "string" ? data.grade : "未設定";
    const preferredHour =
      typeof data.preferredHour === "number"
        ? `${data.preferredHour}時`
        : "未設定";
    const parentName =
      typeof data.parentName === "string" && data.parentName
        ? data.parentName
        : "(未記入)";
    const contactTimeBand =
      typeof data.contactTimeBand === "string" ? data.contactTimeBand : "未設定";
    const paymentPreference =
      typeof data.paymentPreference === "string"
        ? data.paymentPreference
        : "未設定";
    const note =
      typeof data.note === "string" && data.note ? data.note : "(なし)";

    const text =
      `🆕 プレミアム申込が届きました\n` +
      `\n` +
      `▼ ユーザー\n` +
      `名前: ${displayName}\n` +
      `保護者: ${parentName}\n` +
      `LINE ID: ${lineUserId}\n` +
      `\n` +
      `▼ 既存設定\n` +
      `教科: ${subject} / 学年: ${grade} / 配信: ${preferredHour}\n` +
      `\n` +
      `▼ 希望\n` +
      `連絡時間帯: ${contactTimeBand}\n` +
      `支払い: ${paymentPreference}\n` +
      `メモ: ${note}\n` +
      `\n` +
      `▼ 開通手順\n` +
      `npx tsx scripts/manage-line-richmenu.ts sync-plan ${lineUserId} premium --until <YYYY-MM-DDTHH:mm:ss+09:00>\n` +
      `\n` +
      `applicationId=${applicationId}`;

    let client;
    try {
      client = await getLineClient();
    } catch (error) {
      console.error(
        "[onPremiumApplicationCreated] getLineClient failed:",
        error
      );
      return;
    }

    // 各 admin に並列 push、失敗してもログのみ
    await Promise.allSettled(
      adminIds.map(async (adminId) => {
        try {
          await client.pushMessage({
            to: adminId,
            messages: [{ type: "text", text }],
          });
          console.log(
            `[onPremiumApplicationCreated] notified admin ${adminId} (applicationId=${applicationId})`
          );
        } catch (error) {
          console.error(
            `[onPremiumApplicationCreated] push to ${adminId} failed:`,
            error
          );
        }
      })
    );
  });
