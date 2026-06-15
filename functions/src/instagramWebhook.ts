import * as functions from 'firebase-functions/v1';
import * as crypto from 'crypto';
import { findMatchingCampaign } from './igCampaignMatcher';
import { replyToComment, sendPrivateReplyDm } from './instagramApi';
import type {
  IgCommentEvent,
  IgCommentEventStatus,
  IgDmEvent,
  InstagramCommentValue,
  InstagramWebhookBody,
} from './igTypes';

/**
 * Instagram Graph API Webhook 受信エンドポイント。
 *
 * 1. GET ?hub.mode=subscribe&hub.verify_token=...&hub.challenge=... に応答
 * 2. POST: X-Hub-Signature-256 検証 → 200 即返し → 非同期で本処理
 *
 * 方式: Instagram API with Instagram Login（graph.instagram.com）
 *
 * 設定: 必要な Secret を Functions Secret Manager に登録
 *   - META_APP_SECRET           : Meta App Secret（署名検証）
 *   - META_PAGE_ACCESS_TOKEN    : Instagram User Access Token（長期・60日）。
 *                                 ※ Instagram ログイン方式のため Page Token ではなく
 *                                    IG ユーザートークンを格納（env 名は互換のため踏襲）
 *   - META_IG_USER_ID           : 自社 Instagram プロアカウントの user_id（GET /me?fields=user_id）
 *   - META_WEBHOOK_VERIFY_TOKEN : Webhook 検証用任意トークン
 */
export const instagramWebhook = functions
  .region('asia-northeast1')
  .runWith({
    secrets: [
      'META_APP_SECRET',
      'META_PAGE_ACCESS_TOKEN',
      'META_IG_USER_ID',
      'META_WEBHOOK_VERIFY_TOKEN',
    ],
    timeoutSeconds: 60,
  })
  .https.onRequest(async (req, res) => {
    if (req.method === 'GET') {
      handleVerification(req, res);
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).end();
      return;
    }

    const appSecret = process.env.META_APP_SECRET ?? '';
    if (!verifySignature(req, appSecret)) {
      console.warn('[instagramWebhook] invalid signature');
      res.status(401).end();
      return;
    }

    // Meta は 2 秒以内の 200 応答が必須。本処理は後段で非同期実行する。
    res.status(200).end();

    const body = req.body as InstagramWebhookBody;
    if (!body || body.object !== 'instagram' || !Array.isArray(body.entry)) {
      console.warn('[instagramWebhook] unexpected payload shape');
      return;
    }

    const tasks: Promise<void>[] = [];
    for (const entry of body.entry) {
      for (const change of entry.changes ?? []) {
        if (change.field !== 'comments') continue;
        tasks.push(
          safeHandleCommentEvent(change.value).catch((e) => {
            console.error('[instagramWebhook] handle failed:', e);
          }),
        );
      }
    }
    await Promise.allSettled(tasks);
  });

function handleVerification(
  req: functions.https.Request,
  res: functions.Response,
): void {
  const verifyToken = process.env.META_WEBHOOK_VERIFY_TOKEN ?? '';
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (
    mode === 'subscribe' &&
    typeof token === 'string' &&
    typeof challenge === 'string' &&
    token === verifyToken
  ) {
    res.status(200).send(challenge);
    return;
  }
  res.status(403).end();
}

export function verifySignature(
  req: functions.https.Request,
  appSecret: string,
): boolean {
  if (!appSecret) return false;
  const headerSig = req.get('x-hub-signature-256');
  if (!headerSig || !headerSig.startsWith('sha256=')) return false;
  const expected = headerSig.slice('sha256='.length);

  const rawBody = req.rawBody;
  if (!rawBody) return false;

  const actual = crypto
    .createHmac('sha256', appSecret)
    .update(rawBody)
    .digest('hex');

  // 長さが違うと timingSafeEqual が throw するので先にガード
  if (expected.length !== actual.length) return false;
  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, 'hex'),
      Buffer.from(actual, 'hex'),
    );
  } catch {
    return false;
  }
}

async function safeHandleCommentEvent(
  value: InstagramCommentValue,
): Promise<void> {
  await handleCommentEvent(value);
}

export async function handleCommentEvent(
  value: InstagramCommentValue,
): Promise<void> {
  const commentId = value.id;
  const mediaId = value.media?.id;
  const fromId = value.from?.id;
  const text = value.text ?? '';

  if (!commentId || !mediaId || !fromId) {
    console.warn(
      '[instagramWebhook] missing required fields in comment value:',
      { commentId, mediaId, fromId },
    );
    return;
  }

  // 自社アカウントによる自演コメントは無視
  const selfIgUserId = process.env.META_IG_USER_ID ?? '';
  if (selfIgUserId && fromId === selfIgUserId) {
    await writeCommentEvent({
      commentId,
      campaignId: '',
      mediaId,
      fromIgUserId: fromId,
      fromUsername: value.from?.username,
      text,
      status: 'skipped_self',
    });
    return;
  }

  const { db, FieldValue } = await loadFirestore();

  // 冪等性ガード（同一 comment.id の二度処理を防ぐ）
  const commentRef = db.collection('igCommentEvents').doc(commentId);
  const existing = await commentRef.get();
  if (existing.exists) {
    console.info(
      `[instagramWebhook] duplicate comment ${commentId}, skipping`,
    );
    return;
  }

  // キャンペーンマッチ
  const match = await findMatchingCampaign(db, mediaId, text);
  if (!match) {
    await commentRef.set({
      commentId,
      campaignId: '',
      mediaId,
      fromIgUserId: fromId,
      fromUsername: value.from?.username,
      text: truncateText(text),
      receivedAt: FieldValue.serverTimestamp(),
      status: 'no_match',
    });
    return;
  }

  const { campaign, matchedKeyword } = match;

  // processing マークを先に立てる（途中で関数死んだ時のリトライ防止）
  await commentRef.set({
    commentId,
    campaignId: campaign.id,
    mediaId,
    fromIgUserId: fromId,
    fromUsername: value.from?.username,
    text: truncateText(text),
    matchedKeyword,
    receivedAt: FieldValue.serverTimestamp(),
    status: 'processing',
  });

  const accessToken = process.env.META_PAGE_ACCESS_TOKEN ?? '';
  if (!accessToken) {
    await commentRef.update({
      status: 'error',
      error: 'META_PAGE_ACCESS_TOKEN is not configured',
    });
    return;
  }

  const dmText = renderDmText(campaign.dmText, campaign.lineUrl);

  // 公開返信 + DM を並列発火
  const [replyResult, dmResult] = await Promise.all([
    replyToComment({
      commentId,
      text: campaign.commentReplyText,
      accessToken,
    }),
    sendPrivateReplyDm({
      igUserId: selfIgUserId,
      commentId,
      text: dmText,
      accessToken,
    }),
  ]);

  // igDmEvents への記録
  const dmEvent: Omit<IgDmEvent, 'sentAt'> & {
    sentAt: FirebaseFirestore.FieldValue;
  } = {
    campaignId: campaign.id,
    commentId,
    recipientIgUserId: fromId,
    lineUrl: campaign.lineUrl,
    status: dmResult.ok ? 'sent' : 'failed',
    sentAt: FieldValue.serverTimestamp(),
    ...(dmResult.metaMessageId
      ? { metaMessageId: dmResult.metaMessageId }
      : {}),
    ...(dmResult.error ? { metaError: dmResult.error } : {}),
  };
  await db.collection('igDmEvents').add(dmEvent);

  // コメントイベントを完了に更新
  let finalStatus: IgCommentEventStatus = 'completed';
  let errorMessage: string | undefined;
  if (!dmResult.ok && !replyResult.ok) {
    finalStatus = 'error';
    errorMessage = `reply=${replyResult.error?.message ?? 'unknown'} / dm=${dmResult.error?.message ?? 'unknown'}`;
  } else if (!dmResult.ok) {
    finalStatus = 'error';
    errorMessage = `dm=${dmResult.error?.message ?? 'unknown'}`;
  } else if (!replyResult.ok) {
    // DM は成功している。返信失敗はログだけ。
    console.warn(
      `[instagramWebhook] reply failed but dm succeeded: ${replyResult.error?.message}`,
    );
  }
  await commentRef.update({
    status: finalStatus,
    ...(errorMessage ? { error: errorMessage } : {}),
  });
}

async function loadFirestore() {
  const { getApps, initializeApp } = await import('firebase-admin/app');
  if (getApps().length === 0) initializeApp();
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  return { db: getFirestore(), FieldValue };
}

export function renderDmText(template: string, lineUrl: string): string {
  return template.replace(/\{lineUrl\}/g, lineUrl);
}

export function truncateText(input: string, max = 500): string {
  if (input.length <= max) return input;
  return input.slice(0, max);
}

// 内部関数を持つ commentEvent 書き込みヘルパー（自社自演など、マッチング前に
// 終端する場合のショートカット）
async function writeCommentEvent(
  partial: Omit<IgCommentEvent, 'receivedAt'>,
): Promise<void> {
  const { db, FieldValue } = await loadFirestore();
  await db
    .collection('igCommentEvents')
    .doc(partial.commentId)
    .set({
      ...partial,
      text: truncateText(partial.text),
      receivedAt: FieldValue.serverTimestamp(),
    });
}
