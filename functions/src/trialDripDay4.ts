/**
 * Trial Day 4 ドリップキャンペーン（A-2）。
 *
 * 体験 4 日目に「じっくり学ぶ」未利用者だけに誘導 push を送る。
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";
import { getBenefitText } from "./premiumCopy";

function buildDay4Message(
  data: FirebaseFirestore.DocumentData
): messagingApi.Message[] | null {
  const nickname =
    typeof data.nickname === "string" && data.nickname.trim()
      ? `${data.nickname}、`
      : "";
  const trialUsage = (data.trialUsage as Record<string, unknown> | undefined) ?? {};
  const jikkuriOpened = trialUsage.jikkuriOpened === true;

  // 既に「じっくり学ぶ」を開いている人にはこのメッセージを送らない
  if (jikkuriOpened) {
    return null;
  }

  const benefit = getBenefitText("day3-feature");
  const text = `${nickname}体験4日目！『じっくり学ぶ』はもう試した？\n\n${benefit}`;

  const flex: messagingApi.FlexMessage = {
    type: "flex",
    altText: "じっくり学ぶを試してみよう",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "📚 プレミアム体験 4日目",
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
              label: "じっくり学ぶを開く",
              uri: "https://line.chatstudy.jp/liff/units",
            },
          },
        ],
      },
    },
  };

  return [flex];
}

export const trialDripDay4 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const stats = await runTrialDrip({
      milestone: "day4",
      funnelEventType: "trial_drip_sent",
      pushType: "trialReminder",
      buildMessages: buildDay4Message,
    });
    console.log(`[trialDripDay4] ${JSON.stringify(stats)}`);
  });
