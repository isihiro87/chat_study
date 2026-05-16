import * as functions from "firebase-functions/v1";

import {
  buildTrialStartedFlexMessage,
  getLineClient,
  getUserPlan,
} from "./lineWebhook";
import {
  LineRichMenuApiError,
  LineRichMenuConfigError,
  linkRichMenuForUser,
} from "./lineRichMenu";
import { logServerFunnelEvent } from "./funnelEvent";

const TRIAL_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * LIFF /premium-apply からの申込で premiumApplications/{id} が作成されたとき、
 * 7日間の trial を自動開放し、管理者の LINE ID に push 通知を送る。
 *
 * trial 自動開放処理:
 * 1. users/{uid} を読み、既に paid なら trial を再開放しない（既プレミアム扱い）
 * 2. LINE API でリッチメニューを premium に切り替え
 * 3. users/{uid} に plan="premium", premiumUntil=now+7d, planSource="trial",
 *    trialStartedAt=now, richMenuType="premium" を書き込み（admin SDK 経由）
 * 4. ユーザーに「trial 開始」flex を push
 * 5. 管理者には「事後確認・本契約化のお願い」文面を push
 *
 * 実装上の留意点:
 * - 管理者 ID は env `ADMIN_LINE_USER_IDS`（カンマ区切り）で渡す。未設定でも trial 開放は実施
 * - LINE API 失敗時は trial 開放を巻き戻さず（部分的に成功した状態を許容）、
 *   管理者通知のみ「LINE API 失敗、手動 sync-plan で対応してください」に切り替え
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

    const lineUserId =
      typeof data.lineUserId === "string" ? data.lineUserId : "";
    const uid = lineUserId ? `line:${lineUserId}` : "";

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue, Timestamp } = await import(
      "firebase-admin/firestore"
    );
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let trialOutcome: "started" | "already_paid" | "failed" | "skipped_no_uid" =
      "skipped_no_uid";
    let trialOutcomeDetail = "";
    let trialEndIso = "";

    if (!uid) {
      console.warn(
        `[onPremiumApplicationCreated] lineUserId 不在のため trial 自動開放をスキップ (applicationId=${applicationId})`
      );
    } else {
      try {
        const userSnap = await db.doc(`users/${uid}`).get();
        const userData = userSnap.data();
        const currentPlan = getUserPlan(userData);
        const currentPlanSource =
          typeof userData?.planSource === "string"
            ? (userData.planSource as string)
            : null;

        if (currentPlan === "premium" && currentPlanSource !== "trial") {
          // 既に有料契約済み → 二重 trial を防ぐ
          trialOutcome = "already_paid";
          console.log(
            `[onPremiumApplicationCreated] 既プレミアム(paid)のため trial 自動開放スキップ uid=${uid}`
          );
        } else {
          const trialEnd = new Date(Date.now() + TRIAL_DURATION_MS);
          trialEndIso = trialEnd.toISOString();

          try {
            await linkRichMenuForUser(lineUserId, "premium");
          } catch (error) {
            trialOutcome = "failed";
            if (error instanceof LineRichMenuConfigError) {
              trialOutcomeDetail = `設定不備: ${error.message}`;
            } else if (error instanceof LineRichMenuApiError) {
              trialOutcomeDetail = `LINE API ${error.status}: ${error.body}`;
            } else {
              trialOutcomeDetail = `unknown: ${(error as Error).message}`;
            }
            console.error(
              `[onPremiumApplicationCreated] linkRichMenu 失敗 uid=${uid}:`,
              error
            );
          }

          if (trialOutcome !== "failed") {
            try {
              await db.doc(`users/${uid}`).set(
                {
                  plan: "premium",
                  premiumUntil: Timestamp.fromDate(trialEnd),
                  richMenuType: "premium",
                  planSource: "trial",
                  trialStartedAt: FieldValue.serverTimestamp(),
                  lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
                  updatedAt: FieldValue.serverTimestamp(),
                },
                { merge: true }
              );
              trialOutcome = "started";
            } catch (error) {
              trialOutcome = "failed";
              trialOutcomeDetail = `Firestore 更新失敗: ${(error as Error).message}`;
              console.error(
                `[onPremiumApplicationCreated] users 更新失敗 uid=${uid}:`,
                error
              );
            }
          }
        }
      } catch (error) {
        trialOutcome = "failed";
        trialOutcomeDetail = `users/{uid} 読み込み失敗: ${(error as Error).message}`;
        console.error(
          `[onPremiumApplicationCreated] users 取得失敗 uid=${uid}:`,
          error
        );
      }
    }

    let lineClient;
    try {
      lineClient = await getLineClient();
    } catch (error) {
      console.error(
        "[onPremiumApplicationCreated] getLineClient failed:",
        error
      );
      return;
    }

    // ユーザーへ trial 開始 flex を push（成功時のみ）
    if (trialOutcome === "started" && lineUserId) {
      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [buildTrialStartedFlexMessage()],
        });
      } catch (error) {
        console.error(
          `[onPremiumApplicationCreated] trial 開始 flex push 失敗 uid=${uid}:`,
          error
        );
      }
      await logServerFunnelEvent("trial_started", uid, { applicationId });
    }

    // 管理者通知
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

    let trialStatusBlock: string;
    if (trialOutcome === "started") {
      trialStatusBlock =
        `✅ trial 自動開放済み（7日間）\n` +
        `期限: ${trialEndIso}\n` +
        `→ 期間内に本契約化してください。\n` +
        `npx tsx scripts/manage-line-richmenu.ts sync-plan ${lineUserId} premium --until <YYYY-MM-DDTHH:mm:ss+09:00>`;
    } else if (trialOutcome === "already_paid") {
      trialStatusBlock =
        `⚠️ 既に有料プレミアム契約中（再 trial しません）\n` +
        `→ 内容確認のうえ必要なら期限延長してください。`;
    } else if (trialOutcome === "failed") {
      trialStatusBlock =
        `❌ trial 自動開放に失敗しました\n` +
        `理由: ${trialOutcomeDetail}\n` +
        `→ 手動で sync-plan を実行してください:\n` +
        `npx tsx scripts/manage-line-richmenu.ts sync-plan ${lineUserId} premium --until <YYYY-MM-DDTHH:mm:ss+09:00>`;
    } else {
      trialStatusBlock =
        `⚠️ lineUserId 不在のため trial 開放をスキップしました。Firestore Console で内容を確認してください。`;
    }

    const text =
      `🆕 プレミアム申込 ${trialOutcome === "started" ? "(trial 自動開放済)" : "(要対応)"}\n` +
      `\n` +
      `▼ ユーザー\n` +
      `名前: ${displayName}\n` +
      `保護者: ${parentName}\n` +
      `LINE ID: ${lineUserId || "(不明)"}\n` +
      `\n` +
      `▼ 既存設定\n` +
      `教科: ${subject} / 学年: ${grade} / 配信: ${preferredHour}\n` +
      `\n` +
      `▼ 希望\n` +
      `連絡時間帯: ${contactTimeBand}\n` +
      `支払い: ${paymentPreference}\n` +
      `メモ: ${note}\n` +
      `\n` +
      `▼ trial ステータス\n` +
      `${trialStatusBlock}\n` +
      `\n` +
      `applicationId=${applicationId}`;

    await Promise.allSettled(
      adminIds.map(async (adminId) => {
        try {
          await lineClient.pushMessage({
            to: adminId,
            messages: [{ type: "text", text }],
          });
          console.log(
            `[onPremiumApplicationCreated] notified admin ${adminId} (applicationId=${applicationId}, trial=${trialOutcome})`
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
