/**
 * Win-back メッセージ送信 cron。
 *
 * 設計:
 *   - 毎日 JST 19:00 に発火
 *   - status が at-risk / dormant / churned のユーザーを抽出
 *   - **最終回答からの経過日数（JST 暦日）** が WINBACK_SCHEDULE に一致する日に送信
 *   - winbackSelector で 90日重複回避ロジックを通してバリエーション選択
 *   - 送信後 winbackHistory / lastWinbackAt 更新、deliveryStats 加算
 *
 * 2026-06 改修（回復ウィンドウ内のタッチ数を増やす）:
 *   - 以前は「今日 statusChangedAt が変わった人」だけに送っていたため、
 *     1 ユーザーが受け取る Win-back は day4 / day8 / day15 の生涯 3 回だけだった。
 *   - 効いている CTA（ワンタップ復帰）を churned 化(15日)の前に厚く当てるため、
 *     回復可能な at-risk(4-7日) と dormant(8-14日) のウィンドウ内に追撃を追加し、
 *     day4 / **day6** / day8 / **day11** / day15 の 5 回に増やした。
 *   - しきい値（status の 3/7/14）は据え置き＝毎日配信の停止タイミングは不変。
 *
 * 注意:
 *   - winbackHistory に既に同日・同 touchpoint の entry があればスキップ（重複防止）
 *   - 「再開」キーワード等で active に戻ったユーザーは status クエリに入らないので対象外
 */

import * as functions from "firebase-functions/v1";

import { getLineClient } from "./lineWebhook";
import { logServerFunnelEvent } from "./funnelEvent";
import { recordPushDelivery } from "./deliveryStats";
import { selectNextWinbackVariation } from "./winbackSelector";
import { daysBetweenJst, getJstDateString } from "./userStatus";
import type {
  UserStatus,
  WinbackTouchpoint,
  UserDoc,
  WinbackHistoryEntry,
} from "./userDocTypes";

/**
 * 最終回答からの経過日数（JST 暦日）→ 送信する touchpoint の対応表。
 * status クエリ（at-risk=4-7 / dormant=8-14 / churned=15+）が全ての日をカバーする。
 *   4 日 → day3  (at-risk 入り)
 *   6 日 → day5  (at-risk 中の追撃)
 *   8 日 → day7  (dormant 入り)
 *  11 日 → day10 (dormant 中の追撃)
 *  15 日 → day14 (churned 入り・最終)
 */
const WINBACK_SCHEDULE: Record<number, WinbackTouchpoint> = {
  4: "day3",
  6: "day5",
  8: "day7",
  11: "day10",
  15: "day14",
};

function touchpointForDays(days: number): WinbackTouchpoint | null {
  return WINBACK_SCHEDULE[days] ?? null;
}

interface SendStats {
  totalProcessed: number;
  sent: number;
  skipped: number;
  failed: number;
  blockedSkipped: number;
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
      blockedSkipped: 0,
      byTouchpoint: { day3: 0, day5: 0, day7: 0, day10: 0, day14: 0 },
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

        // 公式 LINE をブロック中のユーザーには Win-back を送らない
        if (data.blocked === true) {
          stats.blockedSkipped++;
          continue;
        }

        // 最終回答からの経過日数（JST 暦日）でスケジュール判定する。
        // status 再計算（JST 02:00）と同じ daysBetweenJst を使い、判定を一致させる。
        const lastAnsweredAtRaw = data.lastAnsweredAt as
          | { toDate?: () => Date }
          | undefined;
        const lastAnsweredDate =
          lastAnsweredAtRaw && typeof lastAnsweredAtRaw.toDate === "function"
            ? lastAnsweredAtRaw.toDate()
            : null;
        if (!lastAnsweredDate) {
          // 未回答ユーザーは computeStatus 上 active 扱いなので通常ここには来ない。
          stats.skipped++;
          continue;
        }

        const daysSinceLastAnswer = daysBetweenJst(lastAnsweredDate, now);

        // 経過日数が送信スケジュールの当日でなければスキップ（追撃も含め所定の日だけ送る）
        const touchpoint = touchpointForDays(daysSinceLastAnswer);
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

        const variation = selectNextWinbackVariation({
          touchpoint,
          history: historyLite,
          now,
        });

        const weakCount = ((data.stats as Record<string, unknown> | undefined)
          ?.weakCount ?? 0) as number;

        // 2026-06: ニックネーム廃止に伴い名前呼びかけは行わない（nickname を渡さない）。
        const bodyText = variation.body({
          daysSinceLastAnswer,
          weakReviewCount: weakCount,
        });

        // 2026-06: トライアル/プレミアム導線停止に伴い、Day7 の ¥680 価格ロック
        // 再オープン案内は送らない（priceLock 関連の append / 書き込みを撤去）。
        const priceLockReopenedThisRun = false;

        try {
          await lineClient.pushMessage({
            to: lineUserId,
            // 実復帰の主経路は「キーワード入力」ではなく「直接もう一度解く」こと
            // （計測で確認済み）。摩擦を下げるためワンタップ CTA を付ける。
            // タップ → postback type=restart → handleRestartIntent（おかえり + 1問）。
            // 明示タップなので復帰キーワードの誤爆防止ゲート（8日）は通さない。
            messages: [
              {
                type: "text",
                text: bodyText,
                quickReply: {
                  items: [
                    {
                      type: "action",
                      action: {
                        type: "postback",
                        label: "今日の1問に挑戦",
                        data: "type=restart&src=winback",
                        displayText: "今日の1問に挑戦",
                      },
                    },
                  ],
                },
              },
            ],
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
        `blockedSkipped=${stats.blockedSkipped}, ` +
        `day3=${stats.byTouchpoint.day3}, day5=${stats.byTouchpoint.day5}, ` +
        `day7=${stats.byTouchpoint.day7}, day10=${stats.byTouchpoint.day10}, ` +
        `day14=${stats.byTouchpoint.day14}, priceLockReopened=${stats.priceLockReopened}, ` +
        `elapsed=${elapsed}ms`
    );
  });
