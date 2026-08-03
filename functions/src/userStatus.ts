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

import type { UserStatus, WinbackTouchpoint } from './userDocTypes';

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

/**
 * 2026-07-26〜07-31 の配信停止による「濡れ衣 dormant」の救済（ユーザー指示 2026-08-03）。
 *
 * 停止中はこちらが問題を送っていないので、ユーザーは解きようがなかった。
 * それなのに `lastAnsweredAt` だけが古くなり、8/1 の再開時点で
 * dormant / churned に落ちて **dailyQuiz の対象から外れていた**
 * （実測 2026-08-03: active 1,152 / dormant 1,096 / churned 1,299 ＝ 64% が配信対象外。
 * 朝6時・7時設定の人の約7割に今日の1問が届かず「送られてこない」と指摘が来た）。
 *
 * そこで「**停止の前後まで解いていた人**」に限り、最終回答日を再開日まで繰り上げて扱う。
 * - 対象: `lastAnsweredAt` が「停止開始の30日前」〜「**停止終了**（8/1）」の間にある人
 *   （＝停止のころまで現役だった人。春から放置している人は救済しない）
 * - 上限を停止**終了**にしているのは、**停止中に自分から「1問解く」で解いていた人**を
 *   取りこぼさないため。上限を停止開始にすると「7/1に解いた人は救われるのに
 *   7/27に解いた人は救われない」という逆転が起きる（2026-08-03 に実測 211人が該当）。
 * - 効果: 判定の起点が `GRACE_BASELINE` になるので、8/6（木）までは active。
 *   週2（月・木）なので **8/3 と 8/6 の2回**配信を受けられる。
 * - 自己終了する: 解いてくれた人は実際の `lastAnsweredAt` が baseline を追い越すので
 *   この分岐に入らなくなり、解かなかった人は 8/7 以降ふつうに at-risk へ落ちる。
 *
 * ⚠️ `pushSuspension.ts` は本ファイルを import しているため、逆向きに import すると
 * 循環参照になる。定数はここに持つ。
 */
const GRACE_SUSPENSION_START = new Date('2026-07-26T00:00:00+09:00');
/** 配信が戻った日。ここまでに回答があった人を救済の対象にする。 */
const GRACE_SUSPENSION_END = new Date('2026-08-01T00:00:00+09:00');
/** 救済の対象にする「停止前の現役」の幅（日）。 */
const GRACE_ACTIVE_WINDOW_DAYS = 30;
/** 繰り上げ後の起点。配信再開のおしらせを送った日（JST 2026-08-03）。 */
const GRACE_BASELINE = new Date('2026-08-03T00:00:00+09:00');

/**
 * 配信停止の影響を差し引いた「実質の最終回答日時」。
 * 対象外の人はそのまま返す（＝挙動は変わらない）。
 */
export function effectiveLastAnsweredAt(
  lastAnsweredAt: Date | null
): Date | null {
  if (!lastAnsweredAt) return lastAnsweredAt;
  const t = lastAnsweredAt.getTime();
  const windowStart =
    GRACE_SUSPENSION_START.getTime() - GRACE_ACTIVE_WINDOW_DAYS * MS_PER_DAY;
  if (t >= windowStart && t < GRACE_SUSPENSION_END.getTime()) {
    return GRACE_BASELINE;
  }
  return lastAnsweredAt;
}

export interface ComputeStatusInput {
  /** 最終回答日時。一度も回答していなければ null */
  lastAnsweredAt: Date | null;
  /** 判定の起点となる現在時刻 */
  now: Date;
  /** ユーザーのプラン */
  plan: 'free' | 'premium';
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

  if (
    plan === 'premium' &&
    premiumUntil &&
    premiumUntil.getTime() > now.getTime()
  ) {
    return 'active';
  }

  if (!lastAnsweredAt) {
    return 'active';
  }

  // 配信停止（7/26〜7/31）で解きようがなかった人は起点を再開日まで繰り上げる。
  const days = daysBetweenJst(effectiveLastAnsweredAt(lastAnsweredAt)!, now);
  if (days <= 3) return 'active';
  if (days <= 7) return 'at-risk';
  if (days <= 14) return 'dormant';
  return 'churned';
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
  if (newStatus === 'at-risk') return 'day3';
  if (newStatus === 'dormant') return 'day7';
  if (newStatus === 'churned') return 'day14';
  return null;
}

/**
 * cron 由来 push（dailyQuiz / 移行案内 / Win-back）をこのユーザーに送らず
 * スキップすべきか。ブロック中と、ユーザー自身の配信一時停止
 * （`deliveryPaused`、設定メニューの「配信をおやすみ」）を共通判定する。
 * reply 系（1問解く / 苦手復習 / AIチャット）はこの判定の対象外。
 */
export function shouldSkipCronPush(
  data: Record<string, unknown> | undefined
): boolean {
  if (!data) return false;
  return data.blocked === true || data.deliveryPaused === true;
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
  if (oldStatus !== 'dormant' && newStatus === 'dormant') return true;
  // active → churned のようにスキップした場合もリセット
  if (oldStatus === 'active' && newStatus === 'churned') return true;
  if (oldStatus === 'at-risk' && newStatus === 'churned') return true;
  return false;
}
