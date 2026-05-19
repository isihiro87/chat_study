/**
 * Trial Day 4 ドリップキャンペーン（A-2）。
 *
 * 体験 4 日目に「じっくり学ぶ」未利用者だけに誘導 push を送る。
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";
import { getBenefitText } from "./premiumCopy";
import { buildPriceLockPitchFlex } from "./lineWebhook";

function buildDay4Message(
  data: FirebaseFirestore.DocumentData
): messagingApi.Message[] | null {
  const nickname =
    typeof data.nickname === "string" && data.nickname.trim()
      ? `${data.nickname}、`
      : "";
  const trialUsage = (data.trialUsage as Record<string, unknown> | undefined) ?? {};
  const jikkuriOpened = trialUsage.jikkuriOpened === true;

  const benefit = getBenefitText("day3-feature");

  const jikkuriFlex: messagingApi.FlexMessage = {
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
            text: `${nickname}体験4日目！『じっくり学ぶ』はもう試した？\n\n${benefit}`,
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

  // 価格ロック特典 pitch (定期送信)。Day 4 のタイミングで一度しっかり訴求する。
  const priceLockFlex = buildPriceLockPitchFlex({
    introText: `${nickname}体験 4日目、ちょうど折り返しだよ。続けて使うなら今のうちに登録しておくとお得！`,
    source: "trial_drip_day4",
  }) as unknown as messagingApi.FlexMessage;

  // jikkuri 未利用者には「じっくり学ぶ案内 + 価格ロック」、利用済みなら「価格ロックのみ」
  return jikkuriOpened ? [priceLockFlex] : [jikkuriFlex, priceLockFlex];
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
