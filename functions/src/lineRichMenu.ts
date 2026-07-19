/**
 * LINE リッチメニューのユーザー個別リンクを管理するユーティリティ。
 *
 * サーバー側（Firestore トリガー / Cloud Scheduler）から呼び出して、
 * ユーザーごとに free / premium のリッチメニューを切り替えるための関数を提供する。
 *
 * `syncRichMenuToPlan`（Callable）も内部でこのユーティリティを利用することで、
 * LINE API 呼び出しのロジックを一元化する。
 *
 * 環境変数:
 * - `LINE_MESSAGING_CHANNEL_ACCESS_TOKEN` — Messaging API のチャネルアクセストークン
 * - `LINE_RICHMENU_FREE_ID` — 無料用リッチメニュー ID
 * - `LINE_RICHMENU_TRIAL_ID` — トライアル用リッチメニュー ID（任意。未設定なら premium にフォールバック）
 * - `LINE_RICHMENU_PREMIUM_ID` — プレミアム用リッチメニュー ID
 */

export type RichMenuPlan = 'free' | 'trial' | 'premium' | 'workbook';

export class LineRichMenuConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LineRichMenuConfigError';
  }
}

export class LineRichMenuApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: string,
    public readonly requestId: string | null
  ) {
    super(
      `LINE API エラー (status=${status}, requestId=${requestId}): ${body}`
    );
    this.name = 'LineRichMenuApiError';
  }
}

interface LinkRichMenuResult {
  richMenuId: string;
}

function resolveConfig(): {
  token: string;
  freeId: string;
  trialId: string;
  premiumId: string;
  workbookId: string;
} {
  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN || '';
  const freeId = process.env.LINE_RICHMENU_FREE_ID || '';
  const trialId = process.env.LINE_RICHMENU_TRIAL_ID || '';
  const premiumId = process.env.LINE_RICHMENU_PREMIUM_ID || '';
  const workbookId = process.env.LINE_RICHMENU_WORKBOOK_ID || '';
  if (!token) {
    throw new LineRichMenuConfigError(
      'LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が設定されていません。'
    );
  }
  if (!freeId || !premiumId) {
    throw new LineRichMenuConfigError(
      'LINE_RICHMENU_FREE_ID / LINE_RICHMENU_PREMIUM_ID が設定されていません。'
    );
  }
  // trialId は必須ではない（未設定なら linkRichMenuForUser 内で premium にフォールバック）
  // workbookId も必須ではない（未設定なら plan="workbook" の link が設定エラーになるだけ）
  return { token, freeId, trialId, premiumId, workbookId };
}

/**
 * LINE API でユーザー個別にリッチメニューをリンクする。
 *
 * 成功時は使用された richMenuId を返す。
 * 失敗時は LineRichMenuApiError または LineRichMenuConfigError を throw する。
 *
 * plan === "trial" のとき `LINE_RICHMENU_TRIAL_ID` が未設定なら
 * `LINE_RICHMENU_PREMIUM_ID` にフォールバックする。trial 用画像 / richMenu
 * 作成が運用上まだ済んでいないフェーズでも、機能（追加で解く等）を
 * premium menu 上で利用できるようにするための保険。
 */
export async function linkRichMenuForUser(
  lineUserId: string,
  plan: RichMenuPlan
): Promise<LinkRichMenuResult> {
  const { token, freeId, trialId, premiumId, workbookId } = resolveConfig();
  let richMenuId: string;
  if (plan === 'workbook') {
    if (!workbookId) {
      throw new LineRichMenuConfigError(
        'LINE_RICHMENU_WORKBOOK_ID が設定されていません。'
      );
    }
    richMenuId = workbookId;
  } else if (plan === 'premium') {
    richMenuId = premiumId;
  } else if (plan === 'trial') {
    if (trialId) {
      richMenuId = trialId;
    } else {
      console.warn(
        '[lineRichMenu] LINE_RICHMENU_TRIAL_ID 未設定のため premium ID を fallback として使用します'
      );
      richMenuId = premiumId;
    }
  } else {
    richMenuId = freeId;
  }

  const res = await fetch(
    `https://api.line.me/v2/bot/user/${lineUserId}/richmenu/${richMenuId}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) {
    const body = await res.text();
    const requestId = res.headers.get('x-line-request-id');
    throw new LineRichMenuApiError(res.status, body, requestId);
  }
  return { richMenuId };
}
