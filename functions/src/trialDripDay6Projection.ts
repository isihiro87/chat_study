/**
 * Trial Day 6 継続projection push。
 *
 * 体験 6 日目に「このまま続けると…」の累計問題数projectionを 1 通送る。
 * ここまでの解答ペース（stats.totalAnswered ÷ 経過日数）から
 * 1か月 / 半年 / 1年 後の累計問題数を見積もり、継続の効果を実感させる。
 *
 * 学年別の打ち切り（受験までの残り期間を考慮）:
 *   - 中3: 受験本番まで 1 年ないため projection は「半年」まで
 *   - 中1 / 中2: 「1年」まで表示
 *
 * トリガー: JST 19:00 毎日（runTrialDrip が Day 6 のユーザーだけ抽出）
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { runTrialDrip } from "./trialDripBase";
import { buildDay6ProjectionBullets } from "./trialProjection";

/** Day 6 cron が呼ばれる時点の trial 経過日数（runTrialDrip が保証） */
const TRIAL_DAYS_ELAPSED = 6;

const LIFF_PREMIUM_APPLY_URL = "https://line.chatstudy.jp/liff/premium-apply";

function buildDay6ProjectionMessage(
  data: FirebaseFirestore.DocumentData
): messagingApi.Message[] | null {
  const nickname =
    typeof data.nickname === "string" && data.nickname.trim()
      ? `${data.nickname}、`
      : "";
  const grade = typeof data.grade === "string" ? data.grade : undefined;
  const stats = (data.stats as Record<string, unknown> | undefined) ?? {};
  const totalAnswered =
    typeof stats.totalAnswered === "number" ? stats.totalAnswered : 0;

  const bullets = buildDay6ProjectionBullets(
    grade,
    totalAnswered,
    TRIAL_DAYS_ELAPSED
  );
  // 回答実績がなければ projection を出さない（skip）
  if (!bullets) return null;

  const pace = totalAnswered / TRIAL_DAYS_ELAPSED;
  // 表示用の1日あたりペース（10以上は整数、未満は小数1桁）
  const paceDisplay =
    pace >= 10 ? String(Math.round(pace)) : String(Math.round(pace * 10) / 10);

  const closing =
    grade === "中3"
      ? "受験本番まで、毎日の積み重ねが大きな差になるよ。"
      : "続ければ続けるほど、テストや受験で大きな差になるよ。";

  const flex: messagingApi.FlexMessage = {
    type: "flex",
    altText: "このまま続けたら、どれくらい解けるかな？",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "📈 このまま続けたら…",
            weight: "bold",
            size: "md",
            color: "#F59E0B",
          },
          {
            type: "text",
            text: `${nickname}体験6日目！ここまで ${totalAnswered}問 解いたね👏`,
            wrap: true,
            size: "sm",
            color: "#111827",
            weight: "bold",
          },
          {
            type: "text",
            text: `1日あたり約${paceDisplay}問のペース。この調子で続けると…`,
            wrap: true,
            size: "sm",
            color: "#333333",
          },
          {
            type: "box",
            layout: "vertical",
            backgroundColor: "#FEF3C7",
            cornerRadius: "10px",
            paddingAll: "12px",
            spacing: "sm",
            contents: bullets.map((b) => ({
              type: "text" as const,
              text: b,
              wrap: true,
              size: "sm" as const,
              weight: "bold" as const,
              color: "#92400E",
            })),
          },
          {
            type: "text",
            text: closing,
            wrap: true,
            size: "xs",
            color: "#6B7280",
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
              label: "このまま続ける",
              uri: `${LIFF_PREMIUM_APPLY_URL}?src=trial_drip_day6`,
            },
          },
        ],
      },
    },
  };

  return [flex];
}

export const trialDripDay6Projection = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const stats = await runTrialDrip({
      milestone: "day6Projection",
      funnelEventType: "trial_drip_sent",
      pushType: "trialReminder",
      buildMessages: buildDay6ProjectionMessage,
    });
    console.log(`[trialDripDay6Projection] ${JSON.stringify(stats)}`);
  });
