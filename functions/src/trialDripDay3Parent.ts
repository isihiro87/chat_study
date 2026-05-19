/**
 * Trial Day 3 保護者向け flex（D-5）。
 *
 * 体験開始 3 日目の JST 19:00 に、お子様 / 保護者の方向けの flex を送る。
 * 既存の Day 3 リマインダー（expireTrialUsers の朝3:00）とは別建て。
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";
import {
  buildParentHeading,
  buildParentCopyBody,
  buildParentCopyBullets,
  getParentCtaText,
} from "./parentCopy";

function buildDay3ParentMessage(): messagingApi.Message[] {
  const heading = buildParentHeading();
  const body = buildParentCopyBody();
  const bullets = buildParentCopyBullets();

  const flex: messagingApi.FlexMessage = {
    type: "flex",
    altText: "保護者の方へのお知らせ",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: heading,
            weight: "bold",
            size: "md",
            color: "#F59E0B",
          },
          {
            type: "text",
            text: body,
            wrap: true,
            size: "sm",
            color: "#333333",
          },
          {
            type: "separator",
            margin: "md",
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "xs",
            margin: "md",
            contents: bullets.map((b) => ({
              type: "text" as const,
              text: b,
              size: "xs" as const,
              color: "#555555",
              wrap: true,
            })),
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
              label: getParentCtaText(),
              uri: "https://line.chatstudy.jp/liff/premium-apply?parent=true",
            },
          },
        ],
      },
    },
  };

  return [flex];
}

export const trialDripDay3Parent = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const stats = await runTrialDrip({
      milestone: "day3Parent",
      funnelEventType: "trial_drip_parent_sent",
      pushType: "trialReminder",
      buildMessages: () => buildDay3ParentMessage(),
    });
    console.log(`[trialDripDay3Parent] ${JSON.stringify(stats)}`);
  });
