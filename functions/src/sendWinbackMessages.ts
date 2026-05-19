/**
 * Win-back メッセージ送信 cron。
 *
 * 設計（requirements.md §B）:
 *   - 毎日 JST 19:00 に発火
 *   - 「今日 statusChangedAt が更新されたユーザー」を抽出
 *   - status に応じて Day 3 / Day 7 / Day 14 Win-back を送信
 *   - winbackSelector で 90日重複回避ロジックを通してバリエーション選択
 *   - 送信後 winbackHistory / lastWinbackAt 更新、deliveryStats 加算
 *
 * 注意:
 *   - 同日内で複数回 statusChangedAt が更新される可能性は低いが、
 *     winbackHistory に既に同日の entry があればスキップする
 *   - 「再開」キーワードで active に戻ったユーザーには Win-back を送らない
 *     （shouldSendWinback が active → null を返すのでこちらでは送信対象にならない）
 */

import * as functions from "firebase-functions/v1";

import { getLineClient } from "./lineWebhook";
import { logServerFunnelEvent } from "./funnelEvent";
import { recordPushDelivery } from "./deliveryStats";
import { selectNextWinbackVariation } from "./winbackSelector";
import {
  canReopenPriceLock,
} from "./priceCalculator";
import type {
  UserStatus,
  WinbackTouchpoint,
  UserDoc,
  WinbackHistoryEntry,
} from "./userDocTypes";

const DAY_MS = 24 * 60 * 60 * 1000;

function getJstDateString(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

function statusToTouchpoint(status: UserStatus): WinbackTouchpoint | null {
  if (status === "at-risk") return "day3";
  if (status === "dormant") return "day7";
  if (status === "churned") return "day14";
  return null;
}

interface SendStats {
  totalProcessed: number;
  sent: number;
  skipped: number;
  failed: number;
  byTouchpoint: Record<WinbackTouchpoint, number>;
  priceLockReopened: number;
}

export const sendWinbackMessages = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const startedAt = Date.now();
    console.log("[sendWinbackMessages] start");

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue, Timestamp } = await import(
      "firebase-admin/firestore"
    );
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let lineClient;
    try {
      lineClient = await getLineClient();
    } catch (error) {
      console.error("[sendWinbackMessages] getLineClient failed; abort:", error);
      return;
    }

    const stats: SendStats = {
      totalProcessed: 0,
      sent: 0,
      skipped: 0,
      failed: 0,
      byTouchpoint: { day3: 0, day7: 0, day14: 0 },
      priceLockReopened: 0,
    };

    const now = new Date();
    const todayJst = getJstDateString(now);

    // 今日 status 変化したユーザーを抽出（at-risk / dormant / churned のみ）
    const targets: UserStatus[] = ["at-risk", "dormant", "churned"];
    for (const status of targets) {
      const snap = await db
        .collection("users")
        .where("status", "==", status)
        .get();

      for (const doc of snap.docs) {
        stats.totalProcessed++;
        const uid = doc.id;
        const data = doc.data() as UserDoc & Record<string, unknown>;

        const statusChangedAtRaw = data.statusChangedAt as
          | { toDate?: () => Date }
          | undefined;
        const statusChangedDate =
          statusChangedAtRaw && typeof statusChangedAtRaw.toDate === "function"
            ? statusChangedAtRaw.toDate()
            : null;
        if (!statusChangedDate) {
          stats.skipped++;
          continue;
        }

        // 今日 status 変化したものだけ対象
        if (getJstDateString(statusChangedDate) !== todayJst) {
          stats.skipped++;
          continue;
        }

        const touchpoint = statusToTouchpoint(status);
        if (!touchpoint) {
          stats.skipped++;
          continue;
        }

        const lineUserId =
          typeof data.lineUserId === "string"
            ? data.lineUserId
            : uid.startsWith("line:")
              ? uid.slice("line:".length)
              : "";
        if (!lineUserId) {
          console.warn(
            `[sendWinbackMessages] lineUserId 不在のため skip uid=${uid}`
          );
          stats.skipped++;
          continue;
        }

        // 既に今日この touchpoint の Win-back を送っていればスキップ
        const historyForTp =
          ((data.winbackHistory as Record<string, unknown> | undefined)?.[
            touchpoint
          ] as WinbackHistoryEntry[] | undefined) ?? [];
        const sentToday = historyForTp.some((h) => {
          const entryDate =
            h.sentAt && typeof h.sentAt.toDate === "function"
              ? h.sentAt.toDate()
              : null;
          return entryDate && getJstDateString(entryDate) === todayJst;
        });
        if (sentToday) {
          stats.skipped++;
          continue;
        }

        // 履歴を Date 配列に変換して selector に渡す
        const historyLite = historyForTp.map((h) => ({
          variationId: h.variationId,
          sentAt: h.sentAt.toDate(),
        }));

        const lastAnsweredAtRaw = data.lastAnsweredAt as
          | { toDate?: () => Date }
          | undefined;
        const daysSinceLastAnswer = lastAnsweredAtRaw?.toDate
          ? Math.floor(
              (now.getTime() - lastAnsweredAtRaw.toDate().getTime()) / DAY_MS
            )
          : touchpoint === "day3"
            ? 4
            : touchpoint === "day7"
              ? 8
              : 15;

        const variation = selectNextWinbackVariation({
          touchpoint,
          history: historyLite,
          now,
        });

        const nickname =
          typeof data.nickname === "string" ? data.nickname : undefined;
        const weakCount = ((data.stats as Record<string, unknown> | undefined)
          ?.weakCount ?? 0) as number;

        let bodyText = variation.body({
          nickname,
          daysSinceLastAnswer,
          weakReviewCount: weakCount,
        });

        // Day 7 Win-back で trial 経験者なら、価格ロック再オープンを提示する
        // （priceLockReopenedAt を立てて 3 日以内の登録なら ¥680 で受理）
        let priceLockReopenedThisRun = false;
        if (touchpoint === "day7" && canReopenPriceLock(data)) {
          bodyText +=
            "\n\n戻ってきてくれてありがとう。特別に ¥680 価格ロックを再オープンします。" +
            "今から3日以内に登録すれば、月¥680のままずっと使えます。";
        }

        try {
          await lineClient.pushMessage({
            to: lineUserId,
            messages: [{ type: "text", text: bodyText }],
          });
        } catch (error) {
          console.error(
            `[sendWinbackMessages] push failed uid=${uid} tp=${touchpoint}:`,
            error
          );
          stats.failed++;
          continue;
        }

        // 履歴更新
        const newEntry = {
          variationId: variation.id,
          sentAt: Timestamp.fromDate(now),
        };
        const updates: Record<string, unknown> = {
          winbackHistory: {
            [touchpoint]: FieldValue.arrayUnion(newEntry),
          },
          lastWinbackAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        };
        // Day 7 で price lock 再オープンしたら timestamp を立てる
        if (touchpoint === "day7" && canReopenPriceLock(data)) {
          updates.priceLockReopenedAt = FieldValue.serverTimestamp();
          priceLockReopenedThisRun = true;
        }

        try {
          await doc.ref.set(updates, { merge: true });
        } catch (error) {
          console.error(
            `[sendWinbackMessages] history update failed uid=${uid}:`,
            error
          );
          // push は成功しているので、失敗してもログのみ
        }

        await logServerFunnelEvent("winback_sent", uid, {
          touchpoint,
          variationId: variation.id,
          priceLockReopened: priceLockReopenedThisRun,
        });
        await recordPushDelivery("winback");

        stats.sent++;
        stats.byTouchpoint[touchpoint]++;
        if (priceLockReopenedThisRun) stats.priceLockReopened++;
      }
    }

    const elapsed = Date.now() - startedAt;
    console.log(
      `[sendWinbackMessages] done: processed=${stats.totalProcessed}, ` +
        `sent=${stats.sent}, skipped=${stats.skipped}, failed=${stats.failed}, ` +
        `day3=${stats.byTouchpoint.day3}, day7=${stats.byTouchpoint.day7}, ` +
        `day14=${stats.byTouchpoint.day14}, priceLockReopened=${stats.priceLockReopened}, ` +
        `elapsed=${elapsed}ms`
    );
  });
