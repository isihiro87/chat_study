/**
 * `deliveryStats/{yearMonth}` への書き込みヘルパー。
 *
 * 各 push 送信処理から呼び出して、月次の送信通数を集計する。
 * 失敗してもログのみで握りつぶす（送信本体は止めない）。
 */

import type { PushType } from "./deliveryStatsTypes";
import { emptyPushCountByType } from "./deliveryStatsTypes";

/** JST の年月（YYYY-MM）を返す */
function getJstYearMonth(date: Date): string {
  const jstMs = date.getTime() + 9 * 60 * 60 * 1000;
  const iso = new Date(jstMs).toISOString();
  return iso.slice(0, 7);
}

/**
 * 1 ユーザーへの push を 1 回記録する。
 * `pushType` 別と合計の両方をインクリメントし、ユニークユーザーの追跡は
 * 別 collection でも可能だが、現状はカウンターのみ。
 *
 * 旧実装は `[\`pushCountByType.${pushType}\`]` というドット記法を `set({...},
 * { merge: true })` で使っていた。Firestore admin SDK の `set + merge` は
 * ドット記法をネストパスに展開せず、「pushCountByType.dailyQuiz」のような
 * literal な top-level フィールドとして保存してしまうため、想定通りの
 * nested map にならない（`update()` のみがドット記法を解釈する）。
 *
 * 本実装ではネストしたオブジェクトを直接渡して書き込む。`set + merge` は
 * nested map も適切にマージするため、`pushCountByType.{pushType}` 配下の
 * 既存カウントを保ったまま該当 pushType だけ increment できる。
 */
export async function recordPushDelivery(
  pushType: PushType,
  count = 1
): Promise<void> {
  try {
    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const yearMonth = getJstYearMonth(new Date());
    const ref = db.doc(`deliveryStats/${yearMonth}`);

    await ref.set(
      {
        yearMonth,
        totalPushCount: FieldValue.increment(count),
        pushCountByType: {
          [pushType]: FieldValue.increment(count),
        },
        lastUpdatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      `[deliveryStats] recordPushDelivery failed (type=${pushType}):`,
      error
    );
  }
}

/**
 * 月初に呼び出して、空の `deliveryStats/{yearMonth}` を作成する（monthlyDeliveryReport 用）。
 * 既に存在すれば何もしない。
 */
export async function ensureMonthDocExists(yearMonth: string): Promise<void> {
  try {
    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const ref = db.doc(`deliveryStats/${yearMonth}`);
    const snap = await ref.get();
    if (snap.exists) return;

    await ref.set({
      yearMonth,
      totalPushCount: 0,
      pushCountByType: emptyPushCountByType(),
      uniqueUserCount: 0,
      lastUpdatedAt: FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error(
      `[deliveryStats] ensureMonthDocExists failed (${yearMonth}):`,
      error
    );
  }
}
