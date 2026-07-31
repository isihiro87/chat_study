/**
 * 運営（人）への取り次ぎと「人対応中」状態の純粋ロジック。
 *
 * ## なぜ要るか
 * 返金・二重請求・不具合・解約トラブルのように、**AIが答えてはいけない話題**がある。
 * ここで AI が推測で答えると、実際の運営対応と食い違って事故になる。
 * そこで AI には「運営に取り次ぐ」ことだけをさせ、以降しばらくは**AIが引き下がる**。
 *
 * ## LINE 仕様上の制約（重要）
 * 運営が LINE公式アカウントマネージャーのチャットから送ったメッセージは、
 * **Webhook に届かない**（Messaging API に運営送信のイベント型が無い）。
 * つまり「運営が何を返したか」を自動で知る方法は無い。だからこの仕組みは
 * 「AI側から取り次ぎ、その後は口を出さない」方向にだけ倒している。
 */

/** 人対応中とみなす期間。運営が返信する猶予＋やり取りが一段落するまで。 */
export const OPERATOR_HANDLING_TTL_MS = 72 * 60 * 60 * 1000;

/** 取り次ぎの理由カテゴリ（AI の自由作文を許さない）。 */
export const ESCALATION_REASONS = [
  'refund', // 返金・キャンセル料
  'billing', // 請求・二重課金・カード
  'cancel', // 解約手続きがうまくいかない
  'bug', // 不具合・エラー・教材が開けない
  'account', // ログイン・端末・きょうだい利用
  'other', // 上記以外で運営の判断が要るもの
] as const;
export type EscalationReason = (typeof ESCALATION_REASONS)[number];

const REASON_LABEL: Record<EscalationReason, string> = {
  refund: '返金のご相談',
  billing: 'お支払い・請求のご相談',
  cancel: '解約手続きのご相談',
  bug: '不具合のご報告',
  account: 'アカウント・ご利用環境のご相談',
  other: 'お問い合わせ',
};

/** 要約の上限。長文をそのまま持ち回らない。 */
const SUMMARY_MAX = 200;

/** `users/{uid}.operatorHandling` の形。 */
export interface OperatorHandling {
  reason: EscalationReason;
  summary: string;
  /** 取り次いだ時刻(ms)。TTL 判定に使う。 */
  startedAt: number;
}

export type EscalationValidation =
  | { ok: true; value: OperatorHandling }
  | { ok: false; reason: string };

function isReason(value: unknown): value is EscalationReason {
  return (
    typeof value === 'string' &&
    (ESCALATION_REASONS as readonly string[]).includes(value)
  );
}

/**
 * AI の `escalate` 呼び出しを検証する。
 * カテゴリはホワイトリスト、要約は長さのみ整える（内容は運営が読む前提）。
 */
export function validateEscalation(
  args: Record<string, unknown>,
  nowMs: number
): EscalationValidation {
  const reason = args.reason;
  if (!isReason(reason)) {
    return {
      ok: false,
      reason: `reason は ${ESCALATION_REASONS.join(' / ')} のどれかにしてください`,
    };
  }
  const rawSummary =
    typeof args.summary === 'string' ? args.summary.trim() : '';
  if (!rawSummary) {
    return {
      ok: false,
      reason: '何について困っているかを summary に入れてください',
    };
  }
  return {
    ok: true,
    value: {
      reason,
      summary: rawSummary.slice(0, SUMMARY_MAX),
      startedAt: nowMs,
    },
  };
}

/** 取り次ぎ直後にユーザーへ返す定型文（AIの作文に任せない）。 */
export function buildEscalationAckText(handling: OperatorHandling): string {
  return [
    `${REASON_LABEL[handling.reason]}だね。ここはわたし（AI）が勝手に答えると間違ってしまうから、運営の人に代わってもらうね。`,
    '',
    '内容は運営に伝えたよ。あらためて運営から連絡が行くと思うから、少し待っていてね🙏',
    'お急ぎのときは、このトークにそのまま追加で書いてくれて大丈夫だよ。',
  ].join('\n');
}

/** 運営（管理者）へ送る通知文。誰の・何の件かがひと目で分かる形にする。 */
export function buildOperatorNotice(
  uid: string,
  displayName: string | undefined,
  handling: OperatorHandling
): string {
  return [
    '【つづもん】AIが運営に取り次ぎました',
    '',
    `種別: ${REASON_LABEL[handling.reason]}`,
    `相手: ${displayName || '(表示名なし)'}`,
    `uid: ${uid}`,
    '',
    `内容: ${handling.summary}`,
    '',
    'LINE公式アカウントマネージャーのチャットから返信してください。',
    `※ このユーザーへのAIの自動応答は、${Math.round(OPERATOR_HANDLING_TTL_MS / 3600000)}時間ひかえめモードになります。`,
  ].join('\n');
}

/** いま人対応中か。 */
export function isOperatorHandling(
  handling: unknown,
  nowMs: number
): handling is OperatorHandling {
  const h = handling as OperatorHandling | null | undefined;
  if (!h || typeof h.startedAt !== 'number') return false;
  return nowMs - h.startedAt <= OPERATOR_HANDLING_TTL_MS;
}

/**
 * 人対応中にプロンプトへ差し込む指示。期間外・未設定なら空文字を返すので、
 * 平常時のプロンプトは1文字も変わらない。
 */
export function buildOperatorHandlingContext(
  handling: unknown,
  nowMs: number
): string {
  if (!isOperatorHandling(handling, nowMs)) return '';
  const h = handling as OperatorHandling;
  return (
    `\n\n# いま運営（人）が対応中です（最重要）\n` +
    `この子は「${REASON_LABEL[h.reason]}」で運営に取り次ぎ済み（内容: ${h.summary}）。運営から直接連絡が行く予定です。\n` +
    `- **料金・請求・返金・解約・不具合の見通しについて、あなたが答えを出さない**。` +
    `「たぶん返金されるよ」「もう解約できてるはず」のような推測は絶対に言わない。\n` +
    `- 同じ話題を持ち出されたら「運営に伝えてあるから、連絡が来るまで少し待ってね」と伝え、待たせていることをねぎらう。\n` +
    `- 勉強の質問・雑談には、これまでどおりふつうに answers してよい（対応中でも学習は止めない）。\n` +
    `- 「まだ連絡が来ない」と言われたら、あやまったうえで「もう一度運営に伝えておくね」と受け止める。急かす言い方はしない。`
  );
}
