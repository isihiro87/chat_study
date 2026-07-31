/**
 * 2026-07 配信枠ひっ迫による push 一時停止（ユーザー指示 2026-07-26）。
 *
 * 背景:
 *   公式LINE（一問一答 @824cebif）の月間メッセージ枠が 7 月ぶんほぼ尽きた。
 *   超過分は従量課金（~¥3/通）になるため、7 月いっぱいは cron / トリガ由来の
 *   push を止める。
 *
 * 方針（ユーザー指示）:
 *   - 7 月中の push 配信は停止する。
 *   - ただし **登録から NEW_USER_PUSH_DAYS 日以内のユーザー**（＝停止直前に
 *     登録した人と、これから登録する新規ユーザー）にだけは配信を続ける。
 *     最初の数日で「毎日届く体験」が無いと、そのまま離脱してしまうため。
 *   - 停止中に「問題が届かない」と聞かれたら、たくさん使ってもらえたおかげで
 *     枠がなくなったことを伝え、「1問解く」ボタン（reply＝枠ゼロ）へ誘導する。
 *
 * 対象（このガードを通す push）:
 *   dailyQuiz（毎日/週3配信・週3移行案内）/ sendWinbackMessages /
 *   remindIncompleteOnboarding / onAnswerCreated の各ナッジ /
 *   sendMonthlyReportInvite
 *
 * 対象外（止めない）:
 *   - reply（返信）はすべて。LINE の課金対象外なので従来どおり動く
 *     （1問解く・苦手を復習・範囲設定・AIチャット・じっくり学ぶ）。
 *   - ユーザー操作への直接の応答 push（範囲設定の確認・初回1問目・
 *     ワーク/参考書QRの起動）と管理者通知。数が少なく、無反応だと
 *     「壊れている」と受け取られるため。
 *   - つづもんBot（@215uijik）由来の push。**別チャネル＝別の配信枠**なので
 *     一問一答の枠ひっ迫とは無関係（docs/operations/line-bots-comparison.md）。
 *
 * 解除:
 *   PUSH_SUSPENSION_END（JST 2026-08-01 00:00）を過ぎると自動的に元へ戻る
 *   （LINE の配信枠は月初にリセットされるため）。8 月も続けたい場合はこの定数を
 *   延ばす。恒久的にやめる場合は各呼び出し元のガードごと外す。
 */

import { daysBetweenJst } from './userStatus';

/** 一時停止の開始（JST）。この時刻以降の cron / トリガ push が対象。 */
export const PUSH_SUSPENSION_START = new Date('2026-07-26T00:00:00+09:00');

/** 一時停止の終了（JST）。8 月分の配信枠にリセットされるタイミング。 */
export const PUSH_SUSPENSION_END = new Date('2026-08-01T00:00:00+09:00');

/**
 * 停止中でも push を続ける「新規ユーザー」の範囲（JST 暦日）。
 * 登録日を 0 日目として、0〜3 日目（＝登録から3日以内）までが対象。
 */
export const NEW_USER_PUSH_DAYS = 3;

/** いま push 一時停止の期間中か。 */
export function isPushSuspended(now: Date): boolean {
  const t = now.getTime();
  return (
    t >= PUSH_SUSPENSION_START.getTime() && t < PUSH_SUSPENSION_END.getTime()
  );
}

/**
 * user doc から登録日時（onboardingStartedAt 優先 / createdAt フォールバック）を
 * Date で返す。どちらも無い旧スキーマのユーザーは null（＝新規ではない扱い）。
 */
export function getRegisteredAt(
  data: Record<string, unknown> | undefined
): Date | null {
  if (!data) return null;
  for (const key of ['onboardingStartedAt', 'createdAt'] as const) {
    const ts = data[key] as { toDate?: () => Date } | undefined | null;
    if (ts && typeof ts.toDate === 'function') {
      return ts.toDate();
    }
  }
  return null;
}

/**
 * 停止中でも配信を続ける「登録3日以内」のユーザーか。
 * 登録日不明（旧スキーマ）は false（＝古い登録者とみなして停止側）。
 */
export function isWithinNewUserWindow(
  registeredAt: Date | null,
  now: Date
): boolean {
  if (!registeredAt) return false;
  const days = daysBetweenJst(registeredAt, now);
  return days >= 0 && days <= NEW_USER_PUSH_DAYS;
}

/**
 * 登録日時（ms）ベースの停止判定。transaction 内で捕捉した値を使う呼び出し元向け。
 */
export function shouldSuppressPushForRegisteredAt(
  registeredAtMs: number | null,
  now: Date
): boolean {
  if (!isPushSuspended(now)) return false;
  return !isWithinNewUserWindow(
    registeredAtMs === null ? null : new Date(registeredAtMs),
    now
  );
}

/**
 * この user doc への cron / トリガ由来 push を止めるべきか。
 * 停止期間外は常に false（＝従来どおり配信する）。
 */
export function shouldSuppressPush(
  data: Record<string, unknown> | undefined,
  now: Date
): boolean {
  if (!isPushSuspended(now)) return false;
  return !isWithinNewUserWindow(getRegisteredAt(data), now);
}

/**
 * 停止期間中に「今日で自動配信はいったんおしまい」と伝える案内文（新規ユーザーの
 * 最終配信日に、その日の1問カードへ埋め込んで 1 通で送る）。
 *
 * 文言の方針（ユーザー指示 2026-07-26）:
 *   不具合や打ち切りではなく「たくさん使ってもらえたおかげで枠が尽きた」と伝え、
 *   「1問解く」から自分で進められることを必ず添える。
 */
export const PUSH_PAUSE_NOTICE_INTRO =
  '📣 だいじなおしらせ\n' +
  'みんなにたくさん使ってもらえたおかげで、今月ぶんの配信ワクを使いきっちゃったんだ🙏\n' +
  'そのため自動でとどく問題は今日でいったんおやすみ。来月からまた届くようにするね。\n' +
  'でも大丈夫！メニューの「1問解く」を押せば、いつでも何問でも問題が出るよ。今日の1問はこちら👇';

/**
 * 「問題が届かない」と聞かれたときの説明文（reply で返すので配信枠は消費しない）。
 * このテキストのあとに実際の1問を同じ reply で続けて送る。
 */
export const PUSH_PAUSE_REPLY_TEXT =
  'ごめんね！実はいま、みんなにたくさん使ってもらえたおかげで、今月ぶんの「メッセージを送れる数（配信ワク）」を使いきっちゃったんだ🙏\n' +
  'そのため、自動でとどく問題は今月のあいだおやすみしてるよ。こわれているわけじゃないから安心してね。来月からはまた届くようにするね。\n\n' +
  'でも大丈夫！メニューの「1問解く」を押せば、いつでもその場で問題が出るよ。何問でもOKだし、記録もちゃんと残るよ💪\n' +
  'さっそく1問どうぞ👇';
