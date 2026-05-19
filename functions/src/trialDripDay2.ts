/**
 * Trial Day 2 ドリップキャンペーン（A-2）。
 *
 * 体験開始 2 日目の JST 19:00 に、未利用機能ベースのパーソナライズ push を送る。
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";
import { getBenefitText, getCtaText } from "./premiumCopy";

function buildDay2Message(
  data: FirebaseFirestore.DocumentData
): messagingApi.Message[] {
  const nickname =
    typeof data.nickname === "string" && data.nickname.trim()
      ? `${data.nickname}、`
      : "";
  const trialUsage = (data.trialUsage as Record<string, unknown> | undefined) ?? {};
  const extraCount =
    typeof trialUsage.extraQuestionCount === "number"
      ? trialUsage.extraQuestionCount
      : 0;

  // 「追加で解く」を使った人には進捗を労う、未利用者にはおすすめ
  const heading = extraCount > 0
    ? `${nickname}体験2日目！『追加で解く』を ${extraCount} 問やってくれてありがとう。`
    : `${nickname}体験2日目！まだ『追加で解く』を試してないなら、サクッと1問やってみる？`;

  const benefit = getBenefitText("day1");

  const text = `${heading}\n\n${benefit}`;

  const flex: messagingApi.FlexMessage = {
    type: "flex",
    altText: "体験2日目のヒント",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: `🚀 プレミアム体験 2日目`,
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
              type: "postback",
              label: getCtaText("day1"),
              data: "action=extra_question",
            },
          },
        ],
      },
    },
  };

  return [flex];
}

export const trialDripDay2 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const stats = await runTrialDrip({
      milestone: "day2",
      funnelEventType: "trial_drip_sent",
      pushType: "trialReminder",
      buildMessages: buildDay2Message,
    });
    console.log(`[trialDripDay2] ${JSON.stringify(stats)}`);
  });
