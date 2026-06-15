import type { IgDmEventMetaError } from './igTypes';

// Instagram API with Instagram Login（Instagram ログイン方式）を使う。
// この方式ではホストが graph.facebook.com ではなく graph.instagram.com になり、
// access_token は Page Access Token ではなく Instagram User Access Token を使う。
// （Facebook ログイン方式に戻す場合は graph.facebook.com/v22.0 に変更する）
const GRAPH_API_BASE = 'https://graph.instagram.com/v22.0';

export interface ReplyToCommentResult {
  ok: boolean;
  metaResponseId?: string;
  error?: IgDmEventMetaError;
}

export interface SendPrivateReplyResult {
  ok: boolean;
  metaMessageId?: string;
  error?: IgDmEventMetaError;
}

interface MetaErrorBody {
  error?: {
    code?: number;
    message?: string;
    type?: string;
    error_subcode?: number;
  };
}

function parseMetaError(body: unknown): IgDmEventMetaError {
  if (typeof body !== 'object' || body === null) {
    return { code: 0, message: 'unknown error (non-object response)' };
  }
  const err = (body as MetaErrorBody).error;
  if (!err) {
    return { code: 0, message: 'unknown error (no .error in response)' };
  }
  return {
    code: typeof err.code === 'number' ? err.code : 0,
    message: typeof err.message === 'string' ? err.message : 'unknown',
    type: typeof err.type === 'string' ? err.type : undefined,
    subcode:
      typeof err.error_subcode === 'number' ? err.error_subcode : undefined,
  };
}

/**
 * Instagram 投稿コメントへの公開返信。
 * https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-comment/replies
 */
export async function replyToComment(opts: {
  commentId: string;
  text: string;
  accessToken: string;
}): Promise<ReplyToCommentResult> {
  const url = `${GRAPH_API_BASE}/${encodeURIComponent(opts.commentId)}/replies`;
  const params = new URLSearchParams({
    message: opts.text,
    access_token: opts.accessToken,
  });
  try {
    const res = await fetch(url, { method: 'POST', body: params });
    const json = (await res.json().catch(() => ({}))) as {
      id?: string;
    };
    if (!res.ok) {
      return { ok: false, error: parseMetaError(json) };
    }
    return { ok: true, metaResponseId: json.id };
  } catch (e) {
    return {
      ok: false,
      error: {
        code: -1,
        message: e instanceof Error ? e.message : 'fetch failed',
      },
    };
  }
}

/**
 * Private Replies API: コメント送信者に DM を送る。
 * https://developers.facebook.com/docs/messenger-platform/instagram/features/private-replies/
 *
 * - Messenger 互換の 24h ウィンドウとは別枠で、コメント受信後 7 日以内に 1 回送れる
 * - recipient.comment_id を指定するので fromIgUserId は不要
 */
export async function sendPrivateReplyDm(opts: {
  igUserId: string;
  commentId: string;
  text: string;
  accessToken: string;
}): Promise<SendPrivateReplyResult> {
  const url = `${GRAPH_API_BASE}/${encodeURIComponent(opts.igUserId)}/messages`;
  const body = {
    recipient: { comment_id: opts.commentId },
    message: { text: opts.text },
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${opts.accessToken}`,
      },
      body: JSON.stringify(body),
    });
    const json = (await res.json().catch(() => ({}))) as {
      message_id?: string;
      recipient_id?: string;
    };
    if (!res.ok) {
      return { ok: false, error: parseMetaError(json) };
    }
    return { ok: true, metaMessageId: json.message_id };
  } catch (e) {
    return {
      ok: false,
      error: {
        code: -1,
        message: e instanceof Error ? e.message : 'fetch failed',
      },
    };
  }
}
