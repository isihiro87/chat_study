/**
 * `onAnswerCreated`（answers 作成トリガ）の純粋ロジック。
 *
 * Firestore / LINE への実際の read・write・push は onAnswerCreated.ts 側で行う。
 * このファイルは副作用なしの判定・文言生成だけを持ち、ユニットテスト
 * （`__tests__/onAnswerCreatedCore.test.ts`）で検証する。
 *
 * 設計: .steering/20260725-tsudumon-dedicated-line-bot/ フェーズ4・4b
 */

/** answers.source が 'workbook'（つづもん経由の回答）かどうか。 */
export function isWorkbookAnswer(source: string | null | undefined): boolean {
  return source === 'workbook';
}

/**
 * 一問一答固有のナッジ（範囲設定ナッジ・プレミアムナッジ・「追加で解く」フォロー等）を
 * 送ってよいか。つづもん経由（source:'workbook'）の回答には一問一答の文言を送らない。
 */
export function shouldSendOneOnOneNudges(
  source: string | null | undefined
): boolean {
  return !isWorkbookAnswer(source);
}

/**
 * この回答を「一問一答の累計回答数」に数えてよいか。
 * つづもん経由（source:'workbook'）の回答は一問一答の学習ではないため数えない。
 */
export function shouldCountForOneOnOneTotal(
  source: string | null | undefined
): boolean {
  return !isWorkbookAnswer(source);
}

/** つづもん導線案内（累計回答数マイルストーン）を送る到達件数。 */
export const TSUDUMON_INTRO_NUDGE_MILESTONE = 10;

/**
 * つづもん導線案内の有効フラグ。**現在は false（送らない）**。
 *
 * ユーザー指示（2026-07-25）: 「まだ実装が間に合っていないので現状は届かないでほしい」。
 * 一問一答（3,000フォロワー・稼働中）のユーザーへ新しいメッセージが届く変更なので、
 * つづもん側の受け入れ準備が整うまで止めておく。
 *
 * true にしたときの挙動: `hasReachedTsudumonIntroMilestone` が
 * 「`prev < 10 && next === 10`」の**厳密一致**判定なので、有効化した瞬間に
 * 既存ユーザーへ一斉送信されることはない。以降に新たに10問へ到達した人だけが順次受け取る。
 * 逆に、**無効の間に10問を超えたユーザーは有効化後も受け取らない**点に注意
 * （既存ユーザー全体へ届けたい場合は、この判定を `>=` に変える必要があり、
 * その場合は一斉送信になるため通数の見積もりが必要）。
 */
export const TSUDUMON_INTRO_NUDGE_ENABLED = false;

/**
 * 累計「一問一答」回答数が今回の回答で新たに TSUDUMON_INTRO_NUDGE_MILESTONE に
 * 到達したか（`prev < target && next === target` のときだけ true）。
 */
export function hasReachedTsudumonIntroMilestone(
  prevOneOnOneAnswered: number,
  nextOneOnOneAnswered: number
): boolean {
  return (
    prevOneOnOneAnswered < TSUDUMON_INTRO_NUDGE_MILESTONE &&
    nextOneOnOneAnswered === TSUDUMON_INTRO_NUDGE_MILESTONE
  );
}

export interface TsudumonIntroNudgeContext {
  lineUserId: string;
  /** 公式LINE（一問一答Bot）をブロック中か。旧Botから送るのでこちらを見る。 */
  blocked: boolean;
  prevOneOnOneAnswered: number;
  nextOneOnOneAnswered: number;
  /** すでに案内を送信済みか（users/{uid}.tsudumonNudgeSentAt の有無）。 */
  alreadySent: boolean;
  /**
   * つづもんライセンス／体験を現在有効に持っているか
   * （`evaluateTsudumonAccess(userData.tsudumon, null, nowMs) === 'ok'`）。
   */
  hasTsudumonAccess: boolean;
}

/**
 * つづもん導線案内を送るべきか。
 * - 累計10問に新たに到達した回だけ true になり得る
 * - 1ユーザー1回だけ（alreadySent なら false）
 * - つづもんライセンス／体験を既に持っていれば false
 * - 公式LINE（一問一答）をブロック中なら false
 */
export function shouldSendTsudumonIntroNudge(
  ctx: TsudumonIntroNudgeContext,
  /**
   * 有効フラグ。既定は `TSUDUMON_INTRO_NUDGE_ENABLED`（現在 false）。
   * テストで両方の状態を検証できるよう引数で上書きできる。
   */
  enabled: boolean = TSUDUMON_INTRO_NUDGE_ENABLED
): boolean {
  if (!enabled) return false;
  if (!ctx.lineUserId) return false;
  if (ctx.blocked) return false;
  if (ctx.alreadySent) return false;
  if (ctx.hasTsudumonAccess) return false;
  return hasReachedTsudumonIntroMilestone(
    ctx.prevOneOnOneAnswered,
    ctx.nextOneOnOneAnswered
  );
}

/**
 * つづもんのLP（商品説明・価格・FAQ・3日間無料お試しCTAが揃ったページ）。
 * つづもんBotの友だち追加リンクは案内文からは外し、まずLPを案内する
 * （ユーザー指示 2026-07-25: 10問時点の利用者はつづもんを知らないため、
 * 知らない商品のために別アカウントを友だち追加させるのは要求が重くブロックされやすい。
 * LPで納得した人だけが友だち追加へ進む流れにする）。
 */
export const TSUDUMON_LP_URL = 'https://tsudumon.jp/';

/**
 * つづもん導線案内の本文（累計10問到達時・旧Bot=一問一答から送る）。
 * message-copy-guidelines.md 準拠: つづもんの案内は敬体・押しつけない・絵文字は控えめ。
 * 文面はユーザー指示（2026-07-25）で確定した文言を一字一句変えずに使う。
 */
export function buildTsudumonIntroNudgeText(): string {
  return [
    'いつも「チャットでスタディ」を使ってくれてありがとうございます。',
    '10問クリア、おつかれさま！',
    '',
    '中学歴史をもっとしっかりやりたい人に、参考書＋問題集の教材「つづもん」もあります。',
    'どんな教材か、まずはこちらを見てみてください。',
    '',
    TSUDUMON_LP_URL,
    '',
    '3日間無料で試せます。いまのままでも大丈夫です。',
  ].join('\n');
}
