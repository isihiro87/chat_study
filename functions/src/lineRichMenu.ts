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
 * - `LINE_RICHMENU_PREMIUM_ID` — プレミアム用リッチメニュー ID
 */

export type RichMenuPlan = "free" | "premium";

export class LineRichMenuConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LineRichMenuConfigError";
  }
}

export class LineRichMenuApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: string,
    public readonly requestId: string | null,
  ) {
    super(`LINE API エラー (status=${status}, requestId=${requestId}): ${body}`);
    this.name = "LineRichMenuApiError";
  }
}

interface LinkRichMenuResult {
  richMenuId: string;
}

function resolveConfig(): {
  token: string;
  freeId: string;
  premiumId: string;
} {
  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN || "";
  const freeId = process.env.LINE_RICHMENU_FREE_ID || "";
  const premiumId = process.env.LINE_RICHMENU_PREMIUM_ID || "";
  if (!token) {
    throw new LineRichMenuConfigError(
      "LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が設定されていません。",
    );
  }
  if (!freeId || !premiumId) {
    throw new LineRichMenuConfigError(
      "LINE_RICHMENU_FREE_ID / LINE_RICHMENU_PREMIUM_ID が設定されていません。",
    );
  }
  return { token, freeId, premiumId };
}

/**
 * LINE API でユーザー個別にリッチメニューをリンクする。
 *
 * 成功時は使用された richMenuId を返す。
 * 失敗時は LineRichMenuApiError または LineRichMenuConfigError を throw する。
 */
export async function linkRichMenuForUser(
  lineUserId: string,
  plan: RichMenuPlan,
): Promise<LinkRichMenuResult> {
  const { token, freeId, premiumId } = resolveConfig();
  const richMenuId = plan === "premium" ? premiumId : freeId;

  const res = await fetch(
    `https://api.line.me/v2/bot/user/${lineUserId}/richmenu/${richMenuId}`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  if (!res.ok) {
    const body = await res.text();
    const requestId = res.headers.get("x-line-request-id");
    throw new LineRichMenuApiError(res.status, body, requestId);
  }
  return { richMenuId };
}
