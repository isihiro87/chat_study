/**
 * プレミアム登録時の月額価格判定ロジック。
 *
 * 設計（requirements.md §D-3）:
 *   - 体験中（priceLockExpiresAt > now）に申込 → ¥680 永続ロック
 *   - 体験後 or 体験未経験 → ¥980 永続ロック
 *   - Win-back で価格ロック再オープン中（priceLockReopenedAt から 3 日以内）→ ¥680
 *   - 再オープンは生涯 1 回まで（priceLockReopenUsed が true なら無効）
 */

import type { LockedMonthlyPrice, UserDoc } from "./userDocTypes";

const REOPEN_VALID_DAYS = 3;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** 価格ロックが有効か（trial 中 or 再オープン中） */
export function isPriceLockActive(user: UserDoc, now: Date): boolean {
  const expiresAt = user.priceLockExpiresAt?.toDate();
  if (expiresAt && expiresAt.getTime() > now.getTime()) {
    return true;
  }

  if (canReopenPriceLock(user)) {
    return false;
  }

  // 再オープン使用済み + reopenedAt から 3 日以内なら有効
  if (user.priceLockReopenUsed) {
    const reopenedAt = user.priceLockReopenedAt?.toDate();
    if (
      reopenedAt &&
      now.getTime() - reopenedAt.getTime() < REOPEN_VALID_DAYS * MS_PER_DAY
    ) {
      return true;
    }
  }

  return false;
}

/**
 * Win-back での価格ロック再オープンが可能か。
 *
 * - 生涯 1 回まで（priceLockReopenUsed が true なら不可）
 * - trial 経験者（trialStartedAt あり）のみ対象
 */
export function canReopenPriceLock(user: UserDoc): boolean {
  if (user.priceLockReopenUsed === true) return false;
  if (!user.trialStartedAt) return false;
  return true;
}

export interface DeterminePriceInput {
  user: UserDoc;
  applicationTime: Date;
}

/**
 * 申込時点で確定すべき永続価格を返す。
 *
 * 優先順位:
 *   1. 体験中（priceLockExpiresAt > applicationTime） → 680
 *   2. 価格ロック再オープン中（reopenedAt から 3 日以内、未使用） → 680
 *   3. それ以外 → 980
 */
export function determineApplicationPrice(
  input: DeterminePriceInput
): LockedMonthlyPrice {
  const { user, applicationTime } = input;

  const expiresAt = user.priceLockExpiresAt?.toDate();
  if (expiresAt && expiresAt.getTime() > applicationTime.getTime()) {
    return 680;
  }

  // 再オープン中の判定
  if (canReopenPriceLock(user)) {
    const reopenedAt = user.priceLockReopenedAt?.toDate();
    if (
      reopenedAt &&
      applicationTime.getTime() - reopenedAt.getTime() <
        REOPEN_VALID_DAYS * MS_PER_DAY
    ) {
      return 680;
    }
  }

  return 980;
}
