/**
 * 長い AI 応答を LINE で読みやすい形に分割する（純粋ロジック）。
 *
 * つづもん（有料）は相談・学習プランで長めの出力を許しているため、
 * 1つの吹き出しに詰め込むと読みにくい。**意味の切れ目**で分ける。
 *
 * ## 分割の方針
 * - まず**空行（段落）**で分ける。次に文末（。！？）で分ける
 * - LINE の1メッセージは5,000文字まで送れるが、**読みやすさ**のために
 *   `SOFT_LIMIT` を目安にする（スマホで1画面に収まる程度）
 * - **最大3吹き出し**まで。それ以上は最後の吹き出しにまとめる
 *   （吹き出しが多いと通知が連続して鬱陶しい）
 * - 分割できない/短い場合は1つのまま返す
 *
 * 副作用なし・環境非依存。
 */

/** 1吹き出しの目安文字数。これを超えたら切れ目を探す。 */
export const SOFT_LIMIT = 400;

/** LINE の1メッセージの上限（安全側に余裕を持たせる）。 */
export const HARD_LIMIT = 4500;

/** 最大の吹き出し数。 */
export const MAX_BUBBLES = 3;

/**
 * テキストを吹き出しの配列に分割する。
 * 空文字なら空配列（呼び出し側が送信をスキップできる）。
 */
export function splitReply(
  text: string,
  opts?: { softLimit?: number; maxBubbles?: number }
): string[] {
  const softLimit = opts?.softLimit ?? SOFT_LIMIT;
  const maxBubbles = opts?.maxBubbles ?? MAX_BUBBLES;

  const body = (text ?? '').trim();
  if (!body) return [];
  if (body.length <= softLimit) return [enforceHardLimit(body)];

  // 段落（空行）で分ける。段落が無ければ文末で分ける。
  const paragraphs = body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  const units = paragraphs.length > 1 ? paragraphs : splitBySentence(body);

  // 目安に収まるよう詰め直す。
  const bubbles: string[] = [];
  let current = '';
  for (const unit of units) {
    if (!current) {
      current = unit;
      continue;
    }
    if (current.length + unit.length + 1 <= softLimit) {
      current = `${current}\n${unit}`;
    } else {
      bubbles.push(current);
      current = unit;
    }
  }
  if (current) bubbles.push(current);

  // 上限を超えたぶんは最後にまとめる（通知の連打を避ける）。
  if (bubbles.length > maxBubbles) {
    const head = bubbles.slice(0, maxBubbles - 1);
    const tail = bubbles.slice(maxBubbles - 1).join('\n');
    return [...head, tail].map(enforceHardLimit);
  }
  return bubbles.map(enforceHardLimit);
}

/** 文末（。！？）で分ける。改行も切れ目として扱う。 */
function splitBySentence(text: string): string[] {
  const parts = text
    .split(/(?<=[。！？!?])\s*|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length > 0 ? parts : [text];
}

/** LINE の上限を超えないよう切る（最後の手段）。 */
function enforceHardLimit(text: string): string {
  return text.length <= HARD_LIMIT ? text : `${text.slice(0, HARD_LIMIT - 1)}…`;
}

/**
 * 出力トークン上限で打ち切られた応答の末尾を整える。
 *
 * `finishReason === 'MAX_TOKENS'` のとき、返信は**文の途中でぶつ切り**になっている。
 * そのまま送ると「AI が固まった」ように見えるので、
 *   ① 最後の文末（。！？）より後ろの未完成な文を落とす
 *   ② つづきを聞けることを一言添える
 * を行う。文末がひとつも無い（＝1文が丸ごと切れている）場合は、落とすと本文が
 * 消えてしまうのでそのまま残して案内だけ足す。
 */
export const TRUNCATED_NOTICE =
  '\n\n（長くなっちゃった！つづきが知りたかったら「つづき」って送ってね）';

export function finishTruncated(text: string): string {
  const body = (text ?? '').trim();
  if (!body) return body;

  // 最後の文末記号の位置を探す（閉じかっこ等が続く場合も拾えるよう後方一致で見る）。
  const lastEnd = Math.max(
    body.lastIndexOf('。'),
    body.lastIndexOf('！'),
    body.lastIndexOf('？'),
    body.lastIndexOf('!'),
    body.lastIndexOf('?')
  );
  const trimmed = lastEnd >= 0 ? body.slice(0, lastEnd + 1) : body;
  return trimmed + TRUNCATED_NOTICE;
}

/**
 * 分割した吹き出しを LINE の messages 配列にする。
 * Quick Reply は**最後の吹き出しだけ**に付ける（LINE の仕様上、最後のものが表示される）。
 */
export function buildReplyMessages(
  bubbles: string[],
  opts?: {
    quickReply?: {
      items: Array<{ type: 'action'; action: Record<string, string> }>;
    };
    /** 先頭に差し込む1通（AI 注意書きなど） */
    leadingText?: string;
  }
): Array<Record<string, unknown>> {
  const messages: Array<Record<string, unknown>> = [];
  if (opts?.leadingText) {
    messages.push({ type: 'text', text: opts.leadingText });
  }
  bubbles.forEach((text, i) => {
    const isLast = i === bubbles.length - 1;
    messages.push({
      type: 'text',
      text,
      ...(isLast && opts?.quickReply ? { quickReply: opts.quickReply } : {}),
    });
  });
  return messages;
}
