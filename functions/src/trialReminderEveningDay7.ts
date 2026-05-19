/**
 * Trial Day 7 夕方リマインダー（A-4 / D-4 / D-9）。
 *
 * JST 18:00 に、trial 終了当日のユーザーへ「あと数時間で終了」を push。
 * 損失回避フレーミングを使う（苦手リスト件数を組み込み）。
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";
import {
  getLossAversionText,
  getCtaText,
  getPriceAnchorText,
} from "./premiumCopy";

function buildDay7EveningMessage(
  data: FirebaseFirestore.DocumentData
): messagingApi.Message[] {
  const userStats = (data.stats as Record<string, unknown> | undefined) ?? {};
  const weakCount = typeof userStats.weakCount === "number" ? userStats.weakCount : 0;

  const lossText = getLossAversionText("day7-evening", { weakCount });
  const priceText = getPriceAnchorText("day7-evening", 680);

  const text = `${lossText}\n\n${priceText}`;

  const flex: messagingApi.FlexMessage = {
    type: "flex",
    altText: "あと数時間で体験終了",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "⏰ あと約5時間で終了",
            weight: "bold",
            size: "md",
            color: "#F59E0B",
          },
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
        spacing: "sm",
        contents: [
          {
            type: "button",
            style: "primary",
            color: "#F59E0B",
            action: {
              type: "uri",
              label: getCtaText("day7-evening"),
              uri: "https://line.chatstudy.jp/liff/premium-apply",
            },
          },
        ],
      },
    },
  };

  return [flex];
}

export const trialReminderEveningDay7 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 18 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const stats = await runTrialDrip({
      milestone: "day7Evening",
      funnelEventType: "trial_evening_reminder_sent",
      pushType: "trialReminder",
      buildMessages: buildDay7EveningMessage,
    });
    console.log(`[trialReminderEveningDay7] ${JSON.stringify(stats)}`);
  });
