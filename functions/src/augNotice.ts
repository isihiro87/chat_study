/**
 * 2026-08-03 限定のおしらせ（純粋ロジック・副作用なし）。
 *
 * 中身は2つ:
 *   1. 7月末に配信枠を使いきって問題を届けられなかったことのおわび
 *   2. 翌 8/4 に「つづもん」を公式LINE登録者だけへ先行公開することの予告
 *
 * 要求（ユーザー指示 2026-08-03）:
 *   - **このおしらせ全体で、配信枠の消費は1人あたり最大1通**。
 *   - 掲出は 8/3 のみ（本文が「明日8月4日」なので日付とズレさせない）。
 *   - 1人1回だけ（1日に何問も解く人へ毎回出さない）。
 *   - リンクは載せない（8/4 の先行配信 push の価値を下げないため）。
 *
 * 重複防止は `users/{uid}.augNoticeSentAt` の1フラグに集約し、
 * 2つの配信経路が**同じフラグを見て・同じフラグを立てる**ことで
 * 「1人あたり最大1通」を保証する:
 *
 *   経路1 `lineWebhook.handleAnswerPostback` … 回答直後の reply に同梱（**0通**）
 *   経路2 `scripts/send-aug-notice.ts`      … 経路1で届かなかった残りへ単独 push（**1通**）
 *
 * 設計: .steering/20260803-tsudumon-teaser-in-answer-reply/
 */

/** 掲出開始（JST 2026-08-03 00:00）。 */
export const AUG_NOTICE_START = new Date('2026-08-03T00:00:00+09:00');

/** 掲出終了（JST 2026-08-04 00:00）。本文の「明日8月4日」が当日表記に変わる境目。 */
export const AUG_NOTICE_END = new Date('2026-08-04T00:00:00+09:00');

/** いまが掲出期間内か。 */
export function isAugNoticeWindow(now: Date): boolean {
  const t = now.getTime();
  return t >= AUG_NOTICE_START.getTime() && t < AUG_NOTICE_END.getTime();
}

export interface AugNoticeContext {
  now: Date;
  /** `users/{uid}.augNoticeSentAt` が既にあるか（経路をまたいだ重複防止）。 */
  alreadySent: boolean;
  /**
   * つづもんの利用権（購入・体験）が有効か
   * （`evaluateTsudumonAccess(userData.tsudumon, null, nowMs) === 'ok'`）。
   * すでに使っている人へ「あした先行公開」と伝えても意味がないので出さない。
   */
  hasTsudumonAccess: boolean;
  /**
   * つづもん経由（ワーク演習）の回答か。一問一答の文言をつづもん利用者へ
   * 出さない原則（docs/operations/line-bots-comparison.md §8）に従う。
   * push 経路からは常に false を渡す。
   */
  isWorkbookAnswer: boolean;
}

/** このユーザーへ、この回にお知らせを出すべきか。 */
export function shouldSendAugNotice(ctx: AugNoticeContext): boolean {
  if (!isAugNoticeWindow(ctx.now)) return false;
  if (ctx.alreadySent) return false;
  if (ctx.hasTsudumonAccess) return false;
  if (ctx.isWorkbookAnswer) return false;
  return true;
}

/**
 * おしらせ本文（両経路で共通）。
 *
 * `docs/message-copy-guidelines.md` 準拠:
 *   - 基調はタメ口やわらか（料金・購入に触れないので敬体にしない）
 *   - 配信頻度は「はじめは毎日1問、そのあとは週2回（月・木）」。「毎日届く」と言い切らない
 *   - 絵文字は控えめ（2個）
 *   - サービス名は「チャットでスタディ」。略称を作らない
 *   - リンクは載せない
 */
export const AUG_NOTICE_TEXT = [
  '📣 おしらせとおわび',
  '',
  '7月のおわりごろ、みんなにたくさん使ってもらえたおかげで、',
  'その月ぶんの「メッセージを送れる数（配信ワク）」を使いきっちゃって、',
  '問題を届けられない日が続いたんだ。待っててくれたのにごめんね🙏',
  '',
  '8月になってワクがもどったから、また問題を届けられるようになったよ。',
  '（はじめは毎日1問、そのあとは週2回・月木でとどくよ）',
  '',
  'それと、もうひとつおしらせ。',
  '中学歴史のあたらしい教材「つづもん」を、明日8月4日、',
  'この公式LINEに登録してくれているきみたちにだけ、ひと足先にお知らせするね。',
  '',
  '参考書と問題集がセットになっていて、',
  '「今日はここをやろう」をAIが決めて届けてくれる教材だよ。',
  'くわしくは明日のメッセージを待っててね。',
].join('\n');
