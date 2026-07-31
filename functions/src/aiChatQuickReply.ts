/**
 * AI 応答に添える Quick Reply の組み立て（純粋ロジック）。
 *
 * AI が正しく操作を案内しても、ユーザーがその操作をしない取りこぼしが実会話で
 * 多かったため、話題に応じたワンタップ導線を応答に添える。
 * **チップは reply に載るだけなので配信枠もコストも増えない。**
 *
 * URL（LIFF）は `lineWebhook` の定数を**引数で受け取る**。ここで再定義すると
 * 値が二重管理になり、片方だけ更新される事故になるため。
 *
 * 副作用なし・環境非依存（`lineWebhook` / firebase-admin を import しない）。
 */

/** Quick Reply の最小形（`aiReplySplit.buildReplyMessages` に渡す形）。 */
export interface AiQuickReply {
  items: Array<{ type: 'action'; action: Record<string, string> }>;
}

type QuickReplyItem = AiQuickReply['items'][number];

/** LINE の Quick Reply は詰め込みすぎると読まれない。3件までに絞る。 */
export const MAX_QUICK_REPLY_ITEMS = 3;

/** チップに使う URL（`lineWebhook` から渡す）。 */
export interface QuickReplyUrls {
  /** 「じっくり学ぶ」の LIFF URL */
  units: string;
  /** お問い合わせの LIFF URL */
  contact: string;
}

/** 「1問解く」（postback は `lineWebhook.handlePostback` に実在するもの）。 */
export function chipExtraQuestion(): QuickReplyItem {
  return {
    type: 'action',
    action: {
      type: 'postback',
      label: '✏️ 1問解く',
      data: 'type=extra_question&src=ai_chat',
      displayText: '1問解く',
    },
  };
}

/** 「苦手を復習」。 */
export function chipWeakReview(): QuickReplyItem {
  return {
    type: 'action',
    action: {
      type: 'postback',
      label: '🔁 苦手を復習',
      data: 'type=weak_review',
      displayText: '苦手を復習',
    },
  };
}

/** 「じっくり学ぶ」（LIFF なので uri アクション）。 */
export function chipDeepStudy(unitsUrl: string): QuickReplyItem {
  return {
    type: 'action',
    action: { type: 'uri', label: '📚 じっくり学ぶ', uri: unitsUrl },
  };
}

/**
 * 話題から Quick Reply を組む。上から順に詰めて最大3件。
 *
 * 2026-07-26: 検出する意図を3種から8種に拡充（苦手復習・じっくり学ぶ・
 * 配信おやすみ/再開・お問い合わせ）。
 */
export function buildIntentQuickReply(
  userText: string,
  urls: QuickReplyUrls
): AiQuickReply | undefined {
  const items: QuickReplyItem[] = [];

  if (
    /設定変更|せってい|(時間|時刻|教科|学年)[^\n]{0,6}(変え|変更|かえ)/.test(
      userText
    )
  ) {
    items.push({
      type: 'action',
      action: {
        type: 'message',
        label: '⚙ 設定変更をひらく',
        text: '設定変更',
      },
    });
  }
  if (/範囲|単元|習ってない|習っていない|ならってない/.test(userText)) {
    items.push({
      type: 'action',
      action: {
        type: 'postback',
        label: '🎯 出題範囲設定',
        data: 'type=scope_start',
        displayText: '出題範囲設定',
      },
    });
  }
  if (
    /問題|クイズ|解きたい|ときたい|届かない|届いてない|来ない|こない/.test(
      userText
    )
  ) {
    items.push(chipExtraQuestion());
  }
  // 苦手・復習の話題（AI が「苦手を復習」を案内しても押されない取りこぼしが多い）
  if (
    /苦手|にがて|ニガテ|復習|ふくしゅう|まちがえ|間違え|やり直|解き直/.test(
      userText
    )
  ) {
    items.push(chipWeakReview());
  }
  // 暗記カード・まとめて学習したい話題
  if (
    /暗記|カード|フラッシュ|じっくり|まとめて|集中|たくさん解/.test(userText)
  ) {
    items.push(chipDeepStudy(urls.units));
  }
  // 「配信が多い・止めたい」→ ブロックではなく「おやすみ」へ逃がす
  if (
    /うるさい|多すぎ|多い|通知[^\n]{0,4}(切|止|オフ)|止めたい|やめたい|おやすみ|休みたい|送らないで/.test(
      userText
    )
  ) {
    items.push({
      type: 'action',
      action: {
        type: 'postback',
        label: '😴 配信をおやすみ',
        data: 'type=pause_delivery',
        displayText: '配信をおやすみする',
      },
    });
  }
  if (/再開|また送って|また届|もう一度届|復活/.test(userText)) {
    items.push({
      type: 'action',
      action: {
        type: 'postback',
        label: '▶️ 配信を再開',
        data: 'type=resume_delivery',
        displayText: '配信を再開する',
      },
    });
  }
  // AI では解決できない不具合・要望は運営へ
  if (
    /問い合わせ|といあわせ|不具合|バグ|エラー|動かない|直らない|運営に|人に聞/.test(
      userText
    )
  ) {
    items.push({
      type: 'action',
      action: { type: 'uri', label: '📩 お問い合わせ', uri: urls.contact },
    });
  }

  if (items.length === 0) return undefined;
  return { items: items.slice(0, MAX_QUICK_REPLY_ITEMS) };
}

/**
 * AI が使えないとき（1日の上限到達・生成エラー）に添える導線。
 *
 * 40回に到達する子は**最もよく使ってくれている層**なのに、従来は「また明日ね」で
 * 会話が終端していた。AI 以外（1問解く・苦手を復習・じっくり学ぶ）は上限と無関係に
 * 使えるので、そこへ逃がす。
 */
export function buildFallbackQuickReply(urls: QuickReplyUrls): AiQuickReply {
  return {
    items: [chipExtraQuestion(), chipWeakReview(), chipDeepStudy(urls.units)],
  };
}
