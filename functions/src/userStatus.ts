/**
 * ユーザーの活性状態（active / at-risk / dormant / churned）を判定する純粋関数群。
 *
 * 設計（requirements.md §C-1）:
 *   - free / trial 切れユーザーのみが休眠判定対象
 *   - プレミアム会員（有効期間内）は常に active 扱い
 *   - しきい値: active(0-3日) / at-risk(4-7日) / dormant(8-14日) / churned(15日+)
 *
 * 暦日ベースの判定（JST）:
 *   - 「最終回答日」と「今日」の暦日差を計算
 *   - 同日なら 0日、翌日なら 1日
 */

import type { UserStatus, WinbackTouchpoint } from "./userDocTypes";

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** JST の日付文字列（YYYY-MM-DD）を返す */
export function getJstDateString(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  return jst.toISOString().slice(0, 10);
}

/** 2 つの Date の JST 暦日差を返す（同日 = 0、翌日 = 1） */
export function daysBetweenJst(from: Date, to: Date): number {
  const fromStr = getJstDateString(from);
  const toStr = getJstDateString(to);
  const fromMs = new Date(`${fromStr}T00:00:00Z`).getTime();
  const toMs = new Date(`${toStr}T00:00:00Z`).getTime();
  return Math.round((toMs - fromMs) / MS_PER_DAY);
}

export interface ComputeStatusInput {
  /** 最終回答日時。一度も回答していなければ null */
  lastAnsweredAt: Date | null;
  /** 判定の起点となる現在時刻 */
  now: Date;
  /** ユーザーのプラン */
  plan: "free" | "premium";
  /** プレミアムの有効期限（plan == 'premium' のときのみ参照） */
  premiumUntil?: Date | null;
}

/**
 * 最終回答日時から status を判定する。
 *
 * ロジック:
 *   - 有効なプレミアム会員（premiumUntil > now）→ 常に "active"
 *   - free / trial 期限切れ:
 *     - lastAnsweredAt が null → "active"（オンボーディング直後で 1 度も回答していない場合に
 *       いきなり at-risk に落とすと当日の dailyQuiz が止まってしまうため）
 *     - 0〜3日 → "active"
 *     - 4〜7日 → "at-risk"
 *     - 8〜14日 → "dormant"
 *     - 15日以上 → "churned"
 */
export function computeStatusFromLastAnswer(
  input: ComputeStatusInput
): UserStatus {
  const { lastAnsweredAt, now, plan, premiumUntil } = input;

  if (plan === "premium" && premiumUntil && premiumUntil.getTime() > now.getTime()) {
    return "active";
  }

  if (!lastAnsweredAt) {
    return "active";
  }

  const days = daysBetweenJst(lastAnsweredAt, now);
  if (days <= 3) return "active";
  if (days <= 7) return "at-risk";
  if (days <= 14) return "dormant";
  return "churned";
}

/**
 * status 遷移時に送るべき Win-back タッチポイントを返す。
 * - active → at-risk: "day3"
 * - at-risk → dormant: "day7"
 * - dormant → churned: "day14"
 * - その他の遷移（churned 維持・active 復帰など）: null
 */
export function shouldSendWinback(
  oldStatus: UserStatus,
  newStatus: UserStatus
): WinbackTouchpoint | null {
  if (oldStatus === newStatus) return null;
  if (newStatus === "at-risk") return "day3";
  if (newStatus === "dormant") return "day7";
  if (newStatus === "churned") return "day14";
  return null;
}

/**
 * status 遷移時に dayStreak をリセットすべきかを返す。
 *
 * - dormant 移行時にリセット（at-risk では維持して復帰しやすくする）
 * - churned 維持時はリセット済みなので false（重複リセット不要）
 */
export function shouldResetStreak(
  oldStatus: UserStatus,
  newStatus: UserStatus
): boolean {
  if (oldStatus !== "dormant" && newStatus === "dormant") return true;
  // active → churned のようにスキップした場合もリセット
  if (oldStatus === "active" && newStatus === "churned") return true;
  if (oldStatus === "at-risk" && newStatus === "churned") return true;
  return false;
}
