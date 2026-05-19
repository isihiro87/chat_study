/**
 * Trial Day 5 体験談 push（D-7）。
 *
 * 体験 5 日目に「先輩の体験談」を 1 通送る。価格訴求なし（D-12）。
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";

function buildDay5StoryMessage(
  data: FirebaseFirestore.DocumentData
): messagingApi.Message[] {
  const nickname =
    typeof data.nickname === "string" && data.nickname.trim()
      ? `${data.nickname}、`
      : "";

  const story =
    "こんな使い方をしている先輩がいます。\n\n" +
    "中2のAさんは、苦手復習機能で1週間に20問の苦手を克服。" +
    "テスト本番では『これ、復習したやつ！』が3問出たそうです。";

  const text = `${nickname}体験5日目！${story}`;

  const flex: messagingApi.FlexMessage = {
    type: "flex",
    altText: "先輩の体験談",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "💬 先輩の体験談",
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
            style: "secondary",
            action: {
              type: "postback",
              label: "苦手を復習する",
              data: "action=weak_review",
            },
          },
        ],
      },
    },
  };

  return [flex];
}

export const trialDripDay5Story = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const stats = await runTrialDrip({
      milestone: "day5",
      funnelEventType: "trial_drip_story_sent",
      pushType: "trialReminder",
      buildMessages: buildDay5StoryMessage,
    });
    console.log(`[trialDripDay5Story] ${JSON.stringify(stats)}`);
  });
