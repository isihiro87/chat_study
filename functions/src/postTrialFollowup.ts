/**
 * Trial 期限切れ後フォローアップ（A-5）。
 *
 * 体験終了から 15日 / 30日経過したユーザーに「やっぱり再申込どう？」push を送る。
 * 価格は ¥980（trial 経験者でも価格ロックは別経路）。
 *
 * - JST 19:00 毎日
 * - milestone 別履歴で重複防止
 * - status == 'churned' のユーザーには送らない（Win-back と被るため）
 */

import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import { getLineClient } from "./lineWebhook";
import { logServerFunnelEvent } from "./funnelEvent";
import { recordPushDelivery } from "./deliveryStats";
import {
  getCtaText,
  getBenefitText,
  getPriceAnchorText,
} from "./premiumCopy";

const DAY_MS = 24 * 60 * 60 * 1000;

type FollowupKey = "day15" | "day30";

function pickFollowupMilestone(
  expiredAtMs: number,
  nowMs: number,
  alreadySent: Record<string, unknown>
): FollowupKey | null {
  const elapsedDays = Math.floor((nowMs - expiredAtMs) / DAY_MS);
  if (elapsedDays >= 30 && !alreadySent.day30) return "day30";
  if (elapsedDays >= 15 && !alreadySent.day15) return "day15";
  return null;
}

export const postTrialFollowup = functions
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
      console.error("[postTrialFollowup] getLineClient failed:", error);
      return;
    }

    const snap = await db
      .collection("users")
      .where("planSource", "==", "trial_expired")
      .get();

    const now = Date.now();
    let sent = 0;
    let skipped = 0;
    let failed = 0;

    for (const doc of snap.docs) {
      const uid = doc.id;
      const data = doc.data();

      // churned は Win-back と競合するため除外
      if (data.status === "churned") {
        skipped++;
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

      const expiredRaw = data.trialExpiredAt as
        | { toDate?: () => Date }
        | undefined;
      const expiredMs =
        expiredRaw && typeof expiredRaw.toDate === "function"
          ? expiredRaw.toDate().getTime()
          : 0;
      if (expiredMs === 0) {
        skipped++;
        continue;
      }

      const alreadySent = (data.postTrialFollowupAt as Record<string, unknown>) ?? {};
      const milestone = pickFollowupMilestone(expiredMs, now, alreadySent);
      if (!milestone) {
        skipped++;
        continue;
      }

      const heading =
        milestone === "day15"
          ? "プレミアム体験から2週間。やっぱり試したくなったら、いつでもどうぞ。"
          : "プレミアム体験から1ヶ月。あなたのペースで、また始められます。";

      const scene = milestone === "day15" ? "day15-post" : "day30-post";
      const benefit = getBenefitText(scene);
      const price = getPriceAnchorText(scene, 980);
      const cta = getCtaText(scene);

      const text = `${heading}\n\n${benefit}\n${price}`;

      const flex: messagingApi.FlexMessage = {
        type: "flex",
        altText: heading,
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
                  label: cta,
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
        console.error(`[postTrialFollowup] push failed uid=${uid}:`, error);
        failed++;
        continue;
      }

      try {
        await doc.ref.set(
          {
            postTrialFollowupAt: {
              [milestone]: FieldValue.serverTimestamp(),
            },
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error(
          `[postTrialFollowup] history update failed uid=${uid}:`,
          error
        );
      }

      await logServerFunnelEvent("post_trial_followup_sent", uid, {
        milestone,
      });
      await recordPushDelivery("postTrialFollowup");
    }

    console.log(
      `[postTrialFollowup] done: sent=${sent}, skipped=${skipped}, ` +
        `failed=${failed}, elapsed=${Date.now() - startedAt}ms`
    );
  });
