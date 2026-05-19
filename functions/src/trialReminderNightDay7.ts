/**
 * Trial Day 7 夜リマインダー（A-4 / D-4 / D-9）。
 *
 * JST 22:00 に、trial 終了当日のユーザーへ「今夜23:59で締切」を push。
 * 価格ロックの最終締切訴求。
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";
import {
  getLossAversionText,
  getCtaText,
  getPriceAnchorText,
} from "./premiumCopy";

function buildDay7NightMessage(): messagingApi.Message[] {
  const lossText = getLossAversionText("day7-night", {});
  const priceText = getPriceAnchorText("day7-night", 680);

  const text = `${priceText}\n\n${lossText}`;

  const flex: messagingApi.FlexMessage = {
    type: "flex",
    altText: "今夜23:59で締切",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "⏰ 今夜23:59で締切",
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
              label: getCtaText("day7-night"),
              uri: "https://line.chatstudy.jp/liff/premium-apply",
            },
          },
        ],
      },
    },
  };

  return [flex];
}

export const trialReminderNightDay7 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 22 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const stats = await runTrialDrip({
      milestone: "day7Night",
      funnelEventType: "trial_night_reminder_sent",
      pushType: "trialReminder",
      buildMessages: () => buildDay7NightMessage(),
    });
    console.log(`[trialReminderNightDay7] ${JSON.stringify(stats)}`);
  });
