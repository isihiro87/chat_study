import * as functions from 'firebase-functions/v1';

import { getLineClient } from './lineWebhook';

/**
 * 公式LINE LIFF `/liff/contact` のフォームから問い合わせを受け取り、
 *   1. Firestore `contactSubmissions/{autoId}` へ保存（履歴）
 *   2. 管理人 LINE userId へ push 通知
 *   3. メール送信（環境変数 GMAIL_USER + GMAIL_APP_PASSWORD 設定時のみ）
 * の3経路で通知する。
 *
 * メール経路は SMTP 設定が無くても degrade gracefully で動作するよう、
 * 1 と 2 だけでも処理を完了させる。
 *
 * 認証: Firebase Auth ID Token (Authorization: Bearer <token>)
 * リクエスト: { category?: string; body: string; replyContact?: string }
 *   - body: 必須、最大 4000 文字
 *   - category: 任意、選択肢 (質問/不具合/その他)
 *   - replyContact: 任意、返信用の連絡先 (メールアドレスなど)
 *
 * 環境変数:
 *   - ADMIN_LINE_USER_IDS: 管理人 LINE userId のカンマ区切り（複数可、push 送信先）
 *   - CONTACT_EMAIL_TO: メール宛先（未設定なら "ishimotty.gst@gmail.com" を fallback で使う）
 *   - GMAIL_USER / GMAIL_APP_PASSWORD: 送信元 Gmail と App Password（未設定ならメールスキップ）
 */

interface ContactRequestBody {
  category?: unknown;
  body?: unknown;
  replyContact?: unknown;
}

const BODY_MAX_LEN = 4000;
const CATEGORY_MAX_LEN = 40;
const REPLY_MAX_LEN = 200;
const DEFAULT_EMAIL_TO = 'ishimotty.gst@gmail.com';

function setCorsHeaders(req: functions.https.Request, res: functions.Response) {
  const origin = req.get('origin') || '*';
  res.set('Access-Control-Allow-Origin', origin);
  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function getBearerToken(req: functions.https.Request): string {
  const header = req.get('authorization') || '';
  const prefix = 'Bearer ';
  return header.startsWith(prefix) ? header.slice(prefix.length).trim() : '';
}

function sanitizeString(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').trim().slice(0, max);
}

async function pushToAdmins(
  message: string,
  uid: string
): Promise<{ pushed: number; failed: number }> {
  const admins = (process.env.ADMIN_LINE_USER_IDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  if (admins.length === 0) {
    console.warn('[submitContactForm] ADMIN_LINE_USER_IDS not configured');
    return { pushed: 0, failed: 0 };
  }
  let client;
  try {
    client = await getLineClient();
  } catch (error) {
    console.error('[submitContactForm] getLineClient failed:', error);
    return { pushed: 0, failed: admins.length };
  }
  let pushed = 0;
  let failed = 0;
  for (const adminId of admins) {
    try {
      await client.pushMessage({
        to: adminId,
        messages: [{ type: 'text', text: message }],
      });
      pushed++;
    } catch (error) {
      console.error(
        `[submitContactForm] push to admin ${adminId} failed (from uid=${uid}):`,
        error
      );
      failed++;
    }
  }
  return { pushed, failed };
}

async function sendEmail(
  subject: string,
  text: string
): Promise<{ sent: boolean; reason?: string }> {
  const gmailUser = process.env.GMAIL_USER || '';
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || '';
  const to = process.env.CONTACT_EMAIL_TO || DEFAULT_EMAIL_TO;
  if (!gmailUser || !gmailAppPassword) {
    return { sent: false, reason: 'gmail_smtp_not_configured' };
  }
  try {
    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailAppPassword },
    });
    await transporter.sendMail({
      from: gmailUser,
      to,
      subject,
      text,
    });
    return { sent: true };
  } catch (error) {
    console.error('[submitContactForm] email send failed:', error);
    return { sent: false, reason: 'smtp_error' };
  }
}

export const submitContactForm = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    setCorsHeaders(req, res);

    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const token = getBearerToken(req);
    if (!token) {
      res.status(401).json({ error: 'Missing auth token' });
      return;
    }

    const { getAuth } = await import('firebase-admin/auth');
    const { getFirestore, FieldValue } = await import('firebase-admin/firestore');

    let decoded;
    try {
      decoded = await getAuth().verifyIdToken(token);
    } catch (error) {
      console.warn('[submitContactForm] invalid auth token', error);
      res.status(401).json({ error: 'Invalid auth token' });
      return;
    }

    const uid = decoded.uid;
    const body = (req.body ?? {}) as ContactRequestBody;
    const messageBody = sanitizeString(body.body, BODY_MAX_LEN);
    if (!messageBody) {
      res.status(400).json({ error: 'body is required' });
      return;
    }
    const category = sanitizeString(body.category, CATEGORY_MAX_LEN);
    const replyContact = sanitizeString(body.replyContact, REPLY_MAX_LEN);

    try {
      const db = getFirestore();
      const userSnap = await db.doc(`users/${uid}`).get();
      const userData = userSnap.data() ?? {};
      const nickname =
        typeof userData.nickname === 'string' ? userData.nickname : '';
      const displayName =
        typeof userData.displayName === 'string' ? userData.displayName : '';
      const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';

      // 1. Firestore 履歴に保存
      const submissionRef = await db.collection('contactSubmissions').add({
        uid,
        lineUserId: lineUserId || null,
        nickname: nickname || null,
        displayName: displayName || null,
        category: category || null,
        body: messageBody,
        replyContact: replyContact || null,
        status: 'open',
        createdAt: FieldValue.serverTimestamp(),
      });

      // 2 と 3 で使う共通フォーマット
      const submitterLabel =
        nickname || displayName || (lineUserId ? `LINE:${lineUserId}` : uid);
      const categoryText = category ? `【${category}】` : '【お問い合わせ】';
      const replyText = replyContact ? `\n返信先: ${replyContact}` : '';
      const lineMessage =
        `${categoryText} 新規お問い合わせ\n` +
        `差出人: ${submitterLabel}\n` +
        `uid: ${uid}\n` +
        `submissionId: ${submissionRef.id}${replyText}\n` +
        `\n---\n${messageBody}`;
      const emailSubject = `[チャットでスタディ] ${categoryText} ${submitterLabel}`;
      const emailBody =
        `お問い合わせを受信しました。\n\n` +
        `差出人: ${submitterLabel}\n` +
        `uid: ${uid}\n` +
        `submissionId: ${submissionRef.id}\n` +
        `カテゴリ: ${category || '(未指定)'}\n` +
        `返信先: ${replyContact || '(未指定)'}\n\n` +
        `---\n${messageBody}\n`;

      // 2. 管理人 LINE へ push
      const lineResult = await pushToAdmins(lineMessage, uid);

      // 3. メール送信 (SMTP 設定時のみ)
      const emailResult = await sendEmail(emailSubject, emailBody);

      res.json({
        ok: true,
        submissionId: submissionRef.id,
        linePushed: lineResult.pushed,
        lineFailed: lineResult.failed,
        emailSent: emailResult.sent,
        emailSkippedReason: emailResult.sent ? null : emailResult.reason,
      });
    } catch (error) {
      console.error('[submitContactForm] handler failed:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
