/**
 * プレミアム申込フォーム途中離脱フォローアップ（D-13）。
 *
 * LIFF /premium-apply で `premiumApplicationStartedAt` を記録したが
 * 24h 経過しても `premiumApplications` に submit していないユーザーに
 * 「途中で止まってない？」push を送る。
 *
 * - JST 19:00 毎日
 * - 1ユーザー 1 申込試行につき 1 回だけ送信（abandonedApplicationReminderAt で重複防止）
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { getLineClient } from "./lineWebhook";
import { logServerFunnelEvent } from "./funnelEvent";
import { recordPushDelivery } from "./deliveryStats";

const DAY_MS = 24 * 60 * 60 * 1000;

export const trialFormAbandonReminder = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const startedAt = Date.now();

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let client;
    try {
      client = await getLineClient();
    } catch (error) {
      console.error("[trialFormAbandonReminder] getLineClient failed:", error);
      return;
    }

    // premiumApplicationStartedAt があるユーザーを抽出
    // (Firestore where 範囲指定の制約があるので、まず存在で絞ってからアプリ側で日付フィルタ)
    const snap = await db
      .collection("users")
      .where("premiumApplicationStartedAt", "!=", null)
      .get();

    const now = Date.now();
    let sent = 0;
    let skipped = 0;
    let failed = 0;
    let blockedSkipped = 0;

    for (const doc of snap.docs) {
      const uid = doc.id;
      const data = doc.data();

      // 公式 LINE をブロック中のユーザーには送らない
      if (data.blocked === true) {
        blockedSkipped++;
        continue;
      }

      const lineUserId =
        typeof data.lineUserId === "string"
          ? data.lineUserId
          : uid.startsWith("line:")
            ? uid.slice("line:".length)
            : "";
      if (!lineUserId) {
        skipped++;
        continue;
      }

      // 既に申込済みなら skip
      if (data.plan === "premium" || data.planSource === "trial") {
        skipped++;
        continue;
      }

      const startedRaw = data.premiumApplicationStartedAt as
        | { toDate?: () => Date }
        | undefined;
      const startedMs =
        startedRaw && typeof startedRaw.toDate === "function"
          ? startedRaw.toDate().getTime()
          : 0;
      if (startedMs === 0 || now - startedMs < DAY_MS) {
        skipped++;
        continue;
      }

      // 既にリマインド済みなら skip（24h 以内に再送しない）
      const reminderRaw = data.abandonedApplicationReminderAt as
        | { toDate?: () => Date }
        | undefined;
      const reminderMs =
        reminderRaw && typeof reminderRaw.toDate === "function"
          ? reminderRaw.toDate().getTime()
          : 0;
      if (reminderMs > 0 && now - reminderMs < DAY_MS) {
        skipped++;
        continue;
      }

      const text =
        "途中で止まってない？1分で完了するよ。" +
        "プレミアム申込フォームをまた開けます。";

      const flex: messagingApi.FlexMessage = {
        type: "flex",
        altText: "申込フォームをもう一度開く",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            spacing: "md",
            contents: [
              {
                type: "text",
                text,
                wrap: true,
                size: "sm",
                color: "#333333",
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "button",
                style: "primary",
                color: "#F59E0B",
                action: {
                  type: "uri",
                  label: "申込フォームを開く",
                  uri: "https://line.chatstudy.jp/liff/premium-apply",
                },
              },
            ],
          },
        },
      };

      try {
        await client.pushMessage({ to: lineUserId, messages: [flex] });
        sent++;
      } catch (error) {
        console.error(
          `[trialFormAbandonReminder] push failed uid=${uid}:`,
          error
        );
        failed++;
        continue;
      }

      try {
        await doc.ref.set(
          {
            abandonedApplicationReminderAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error(
          `[trialFormAbandonReminder] history update failed uid=${uid}:`,
          error
        );
      }

      await logServerFunnelEvent("premium_apply_form_abandoned", uid);
      await recordPushDelivery("abandonReminder");
    }

    console.log(
      `[trialFormAbandonReminder] done: sent=${sent}, skipped=${skipped}, ` +
        `failed=${failed}, blockedSkipped=${blockedSkipped}, ` +
        `elapsed=${Date.now() - startedAt}ms`
    );
  });
