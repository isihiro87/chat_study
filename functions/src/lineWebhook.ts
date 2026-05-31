// deploy-bust: 2026-05-25 intro-merge
import * as functions from 'firebase-functions/v1';
import type { messagingApi } from '@line/bot-sdk';
import {
  getCorrectFeedback,
  getIncorrectFeedback,
  getDailyIntro,
  getExtraQuestionIntro,
  getWeakReviewIntro,
  getAlreadyDeliveredText,
  isDayStreakMilestone,
} from './messageVariations';
import { nextStreakState, type StreakState } from './streakState';
import { recordPushDelivery } from './deliveryStats';
import type { PushType } from './deliveryStatsTypes';

interface LineEvent {
  type: string;
  source?: { type?: string; userId?: string };
  replyToken?: string;
  postback?: { data: string };
  message?: { type?: string; text?: string };
  [key: string]: unknown;
}

interface LineWebhookBody {
  destination?: string;
  events?: LineEvent[];
}

type ValidGrade = '中1' | '中2' | '中3';
const VALID_GRADES: readonly ValidGrade[] = ['中1', '中2', '中3'] as const;

type ValidSubject = 'history' | 'english';
const VALID_SUBJECTS: readonly ValidSubject[] = ['history', 'english'] as const;
const SUBJECT_LABELS: Record<ValidSubject, string> = {
  history: '歴史',
  english: '英語',
};
// 教科別のヘッダー背景色。将来 math/science/geography を追加する際は
// ValidSubject 型と SUBJECT_LABELS / SUBJECT_HEADER_COLORS を同時に更新する。
// 想定色: 英語=ピンク、歴史/地理=茶（社会系）、数学=青、理科=緑
const SUBJECT_HEADER_COLORS: Record<ValidSubject, string> = {
  history: '#A16207', // 社会系の茶色
  english: '#EC4899', // ピンク
  // math: "#3B82F6",     // 青
  // science: "#10B981",  // 緑
  // geography: "#A16207", // 茶色（歴史と同じ社会系）
};

export type ValidHour = 6 | 7 | 16 | 17 | 18 | 19 | 20 | 21;
export const VALID_HOURS: readonly ValidHour[] = [6, 7, 16, 17, 18, 19, 20, 21] as const;
export const HOUR_LABELS: Record<ValidHour, string> = {
  6: '朝6時',
  7: '朝7時',
  16: '夕方4時',
  17: '夕方5時',
  18: '夕方6時',
  19: '夜7時',
  20: '夜8時',
  21: '夜9時',
};

interface Question {
  subject: ValidSubject;
  grade: ValidGrade;
  topic: string;
  text: string;
  choices: [string, string, string, string];
  correctChoiceId: 0 | 1 | 2 | 3;
  explanation: string;
}

interface OnboardingSelectOption {
  label: string;
  data: string;
}

function buildOnboardingSelectFlex(opts: {
  step: 1 | 2 | 3;
  total: 2 | 3;
  headerTitle: string;
  bodyText: string;
  options: OnboardingSelectOption[];
  altText: string;
}) {
  return {
    type: 'flex' as const,
    altText: opts.altText,
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        spacing: 'xs' as const,
        contents: [
          {
            type: 'text' as const,
            text: `STEP ${opts.step} / ${opts.total}`,
            color: '#FEF3C7',
            size: 'xs' as const,
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text: opts.headerTitle,
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: opts.bodyText,
            wrap: true,
            size: 'sm' as const,
            color: '#374151',
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: opts.options.map((option) => ({
          type: 'button' as const,
          style: 'secondary' as const,
          height: 'sm' as const,
          action: {
            type: 'postback' as const,
            label: option.label,
            data: option.data,
            displayText: option.label,
          },
        })),
      },
    },
  };
}

export function buildGradeSelectMessage() {
  return buildOnboardingSelectFlex({
    step: 1,
    total: 3,
    headerTitle: '学年を選ぶ',
    bodyText: 'まずは学年を教えてね。',
    altText: '学年を選んでください',
    options: [
      { label: '中1', data: 'type=select_grade&grade=中1' },
      { label: '中2', data: 'type=select_grade&grade=中2' },
      { label: '中3', data: 'type=select_grade&grade=中3' },
    ],
  });
}

// 現状は「歴史」のみ表示。英語・数学などが解放されたら options に追加していく。
export function buildSubjectSelectMessage() {
  return buildOnboardingSelectFlex({
    step: 2,
    total: 3,
    headerTitle: '教科を選ぶ',
    bodyText:
      '勉強したい教科を選んでね。\n※今は「歴史」だけ配信中です。英語・数学・理科・地理は順次追加予定！',
    altText: '教科を選んでください',
    options: [{ label: '歴史', data: 'type=select_subject&subject=history' }],
  });
}

export function buildTimeSelectMessage() {
  return buildOnboardingSelectFlex({
    step: 3,
    total: 3,
    headerTitle: '配信時間を選ぶ',
    bodyText:
      '毎日問題を送る時間を選んでね。学校がない時間で自由にどうぞ。あとから「設定変更」と送れば変えられます。',
    altText: '配信時間を選んでください',
    options: [
      { label: '朝6時', data: 'type=select_time&hour=6' },
      { label: '朝7時', data: 'type=select_time&hour=7' },
      { label: '夕方4時', data: 'type=select_time&hour=16' },
      { label: '夕方6時', data: 'type=select_time&hour=18' },
      { label: '夜8時', data: 'type=select_time&hour=20' },
    ],
  });
}

export function buildOnboardingCompleteSummaryFlex(opts: {
  gradeLabel: string;
  subjectLabel: string;
  hourLabel: string;
  nickname?: string;
}) {
  const thanksText = opts.nickname
    ? `${opts.nickname}、登録ありがとう！設定できたよ🎉`
    : '登録ありがとう！設定できたよ🎉';
  const summaryRow = (label: string, value: string) => ({
    type: 'box' as const,
    layout: 'horizontal' as const,
    contents: [
      {
        type: 'text' as const,
        text: label,
        size: 'sm' as const,
        color: '#6B7280',
        flex: 2,
      },
      {
        type: 'text' as const,
        text: value,
        size: 'sm' as const,
        color: '#111827',
        weight: 'bold' as const,
        flex: 5,
        wrap: true,
      },
    ],
  });

  return {
    type: 'flex' as const,
    altText: `設定完了！${opts.gradeLabel} ${opts.subjectLabel} ${opts.hourLabel}に毎日1問お届けします`,
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '✅ 設定完了！',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          summaryRow('学年', opts.gradeLabel),
          summaryRow('教科', opts.subjectLabel),
          summaryRow('配信時間', opts.hourLabel),
          {
            type: 'separator' as const,
            margin: 'md' as const,
          },
          {
            type: 'text' as const,
            text: thanksText,
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
            margin: 'md' as const,
          },
          {
            type: 'text' as const,
            text: '次は「出題範囲」を設定しよう！もう習った単元だけにチェックを入れておくと、毎日の1問がその範囲から届くようになるよ。',
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
            margin: 'sm' as const,
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '出題範囲を設定する',
              uri: LIFF_TEST_RANGE_URL,
            },
          },
          {
            type: 'text' as const,
            text: '※あとからリッチメニューの「出題範囲設定」でもいつでも変更できます',
            wrap: true,
            size: 'xxs' as const,
            color: '#9CA3AF',
            align: 'center' as const,
          },
        ],
      },
    },
  };
}

let cachedClient: messagingApi.MessagingApiClient | null = null;
export async function getLineClient(): Promise<messagingApi.MessagingApiClient> {
  if (cachedClient) return cachedClient;
  const channelAccessToken =
    process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN || '';
  if (!channelAccessToken) {
    throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN is not set');
  }
  const { messagingApi: api } = await import('@line/bot-sdk');
  cachedClient = new api.MessagingApiClient({ channelAccessToken });
  return cachedClient;
}

async function verifyLineSignature(
  bodyText: string,
  channelSecret: string,
  signature: string
): Promise<boolean> {
  const { validateSignature } = await import('@line/bot-sdk');
  return validateSignature(bodyText, channelSecret, signature);
}

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}

function getJstDateString(date: Date | undefined): string | null {
  if (!date) return null;
  const formatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(date).replace(/\//g, '-');
}

function isInitialSetupComplete(
  userData: Record<string, unknown> | undefined
): boolean {
  if (!userData) return false;
  const stored = userData.preferredHour;
  return (
    typeof stored === 'number' && VALID_HOURS.includes(stored as ValidHour)
  );
}

export type UserPlan = 'free' | 'premium';

export function getUserPlan(
  userData: Record<string, unknown> | undefined
): UserPlan {
  if (!userData) return 'free';
  if (userData.plan !== 'premium') return 'free';
  const until = userData.premiumUntil as
    | { toDate?: () => Date }
    | undefined
    | null;
  if (until && typeof until.toDate === 'function') {
    if (until.toDate().getTime() < Date.now()) return 'free'; // 期限切れ
  }
  return 'premium';
}

/**
 * プレミアム機能の解放対象学年か。現在は中1/中2/中3 全てを解放。
 * 将来また学年を絞りたくなったら、ここを `false` にした学年だけが
 * 各 LINE 接点で `PREMIUM_NOT_YET_AVAILABLE_TEXT` のフォールバックに流れる。
 */
export function isPremiumEligibleGrade(grade: unknown): boolean {
  return grade === '中1' || grade === '中2' || grade === '中3';
}

/**
 * `isPremiumEligibleGrade` が false を返した学年に対する案内テキスト。
 * 現在は全学年解放のため通常運用では使われない（保険ガード用）。
 * 文言中の学年名は呼び出し側で動的に差し込まれないため、
 * 将来未対応学年を再導入する際はこの定数も合わせて更新すること。
 */
export const PREMIUM_NOT_YET_AVAILABLE_TEXT =
  'ご利用学年のプレミアム機能は現在準備中です。\n準備ができ次第トークでお知らせします。';

// お問い合わせ導線は LIFF /liff/contact（LIFF SDK 経由で line.chatstudy.jp に飛ぶ）。
// 旧: https://www.chatstudy.jp/contact は Web 版に当該ページがなく 404 になっていた。
const LIFF_CONTACT_URL =
  process.env.LIFF_CONTACT_URL ?? 'https://liff.line.me/2009587166-JG4bBwd2';
const CONTACT_URL = LIFF_CONTACT_URL;

// LIFF URL（functions/.env で上書き可能、未設定なら known good fallback）
const LIFF_REPORT_URL =
  process.env.LIFF_REPORT_URL ?? 'https://liff.line.me/2009587166-BsatoYm2';
const LIFF_SETTINGS_URL =
  process.env.LIFF_SETTINGS_URL ?? 'https://liff.line.me/2009587166-IvJl78Hk';
const LIFF_PREMIUM_INFO_URL =
  process.env.LIFF_PREMIUM_INFO_URL ??
  'https://liff.line.me/2009587166-k51bH4LC';
const LIFF_PREMIUM_APPLY_URL =
  process.env.LIFF_PREMIUM_APPLY_URL ??
  'https://liff.line.me/2009587166-GKRX5kOQ';
const LIFF_HELP_URL =
  process.env.LIFF_HELP_URL ?? 'https://liff.line.me/2009587166-oaTz2NXX';
const LIFF_TEST_RANGE_URL =
  process.env.LIFF_TEST_RANGE_URL ?? 'https://liff.line.me/2009587166-fLjzMGk8';
const LIFF_UNITS_URL =
  process.env.LIFF_UNITS_URL ?? 'https://liff.line.me/2009587166-LjyCza2c';
const LIFF_NICKNAME_URL =
  process.env.LIFF_NICKNAME_URL ??
  'https://liff.line.me/2009587166-BMgbpIra';

function withLiffSource(url: string, source: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set('src', source);
    return u.toString();
  } catch {
    const joiner = url.includes('?') ? '&' : '?';
    return `${url}${joiner}src=${encodeURIComponent(source)}`;
  }
}

export const lineWebhook = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    if (req.method === 'GET') {
      res.json({ message: 'LINE webhook endpoint is working.' });
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const channelSecret = process.env.LINE_MESSAGING_CHANNEL_SECRET || '';
    if (!channelSecret) {
      console.error('[lineWebhook] LINE_MESSAGING_CHANNEL_SECRET is not set');
      res.status(500).json({ error: 'Server misconfigured' });
      return;
    }

    const signature = req.get('x-line-signature');
    if (!signature) {
      console.warn('[lineWebhook] missing x-line-signature header');
      res.status(401).json({ error: 'Missing signature' });
      return;
    }

    const rawBody = req.rawBody;
    if (!rawBody || rawBody.length === 0) {
      console.error('[lineWebhook] empty rawBody');
      res.status(400).json({ error: 'Empty body' });
      return;
    }

    const bodyText = rawBody.toString('utf8');

    const signatureValid = await verifyLineSignature(
      bodyText,
      channelSecret,
      signature
    );
    if (!signatureValid) {
      console.warn('[lineWebhook] invalid signature');
      res.status(401).json({ error: 'Invalid signature' });
      return;
    }

    let body: LineWebhookBody;
    try {
      body = JSON.parse(bodyText) as LineWebhookBody;
    } catch (error) {
      console.error('[lineWebhook] failed to parse body JSON:', error);
      res.status(400).json({ error: 'Invalid JSON' });
      return;
    }

    const events = body.events ?? [];
    if (events.length === 0) {
      res.json({ ok: true });
      return;
    }

    await Promise.allSettled(events.map((event) => dispatchEvent(event)));
    res.json({ ok: true });
  });

async function dispatchEvent(event: LineEvent): Promise<void> {
  try {
    switch (event.type) {
      case 'follow':
        await handleFollow(event);
        return;
      case 'unfollow':
        await handleUnfollow(event);
        return;
      case 'postback':
        await handlePostback(event);
        return;
      case 'message':
        await handleMessage(event);
        return;
      default:
        console.warn('[lineWebhook] unhandled event type:', event.type);
        return;
    }
  } catch (error) {
    console.error(
      `[lineWebhook] dispatchEvent failed (type=${event.type}):`,
      error
    );
  }
}

async function handleMessage(event: LineEvent): Promise<void> {
  const messageType = event.message?.type;
  if (messageType !== 'text') {
    console.warn(
      '[lineWebhook] handleMessage: non-text message type:',
      messageType
    );
    return;
  }

  const text = event.message?.text?.trim() ?? '';
  const replyToken = event.replyToken;

  if (text === '設定変更' || text === 'せってい変更') {
    await handleSettingsChange(event, replyToken);
    return;
  }

  // 友だち追加直後の名前入力ステップ。awaiting_name の間は最初の
  // テキストを nickname として保存し、学年 flex へ進める。
  const uid = buildUid(event);
  if (uid) {
    try {
      const { db } = await getDb();
      const snap = await db.doc(`users/${uid}`).get();
      const userData = snap.data();
      if (userData?.onboardingState === 'awaiting_name') {
        await handleNicknameInput(uid, replyToken, text);
        return;
      }

      // 休眠ユーザー除外システム（§C-3）対応:
      // 「再開」「またやりたい」「久しぶり」等の復帰キーワードを検知したら、
      // status を active に戻して即座に 1 問送信する。
      // onboarding 中・既存コマンドより後に評価して優先順位を守る。
      const { detectRestartIntent } = await import('./keywordMatcher');
      if (detectRestartIntent(text)) {
        await handleRestartIntent(uid, replyToken, event);
        return;
      }
    } catch (error) {
      console.error('[lineWebhook] handleMessage state read failed:', error);
    }
  }

  console.warn(
    '[lineWebhook] handleMessage: unhandled text:',
    text.slice(0, 30)
  );
}

/**
 * 復帰意思を検知したユーザーの status を active に戻し、おかえりメッセージと
 * 1 問を送信する。1 日に複数回マッチしてもサーバー側の挙動は冪等
 * （status が既に active なら遷移処理は no-op）。
 */
async function handleRestartIntent(
  uid: string,
  replyToken: string | undefined,
  event: LineEvent
): Promise<void> {
  console.log(`[lineWebhook] restart intent detected for ${uid}`);

  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        status: 'active',
        statusChangedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] restart intent status reset failed:', error);
  }

  if (replyToken) {
    try {
      await replyText(
        replyToken,
        'おかえり！戻ってきてくれてうれしい。早速だけど今日の1問、いってみよう！',
        '(restart welcome)'
      );
    } catch (error) {
      console.error('[lineWebhook] restart welcome reply failed:', error);
    }
  }

  try {
    await selectAndSendQuestion(uid, { pushType: 'restartWelcome' });
  } catch (error) {
    console.error('[lineWebhook] restart selectAndSendQuestion failed:', error);
  }

  // 抑制不能な引数だが lint で unused 警告にならないように参照
  void event;
}

/**
 * ニックネームを sanitize して保存し、学年 flex を返す。
 * - 長すぎる入力は 20 文字で切り詰め
 * - 改行・連続空白は単一空白に正規化
 * - 空文字（trim 後）は受理しない
 */
function sanitizeNickname(raw: string): string {
  const collapsed = raw.replace(/\s+/g, ' ').trim();
  return collapsed.slice(0, 20);
}

async function handleNicknameInput(
  uid: string,
  replyToken: string | undefined,
  rawText: string
): Promise<void> {
  const nickname = sanitizeNickname(rawText);
  if (!nickname) {
    if (replyToken) {
      await replyText(
        replyToken,
        '空白だけだと呼び方が分からないので、もう一度送ってね🙏（ニックネームでもOK）',
        '(nickname empty)'
      );
    }
    return;
  }

  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        nickname,
        onboardingState: 'started',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] handleNicknameInput firestore write failed:',
      error
    );
  }

  if (!replyToken) return;

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: `${nickname}って呼ぶね！よろしく😊\nじゃあ、まずは学年を教えてね。`,
        },
        buildGradeSelectMessage(),
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handleNicknameInput reply failed:', error);
  }
}

async function handleSettingsChange(
  event: LineEvent,
  replyToken: string | undefined
): Promise<void> {
  const uid = buildUid(event);
  if (!uid) return;
  if (!replyToken) return;

  const { db, FieldValue } = await getDb();

  // 1日1回制限チェック
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    const userData = userSnap.data();
    const stored = userData?.lastSettingsChangeAt;
    let lastChangeDate: Date | undefined;
    if (stored && typeof stored.toDate === 'function') {
      lastChangeDate = stored.toDate();
    }
    const lastChangeJst = getJstDateString(lastChangeDate);
    const todayJst = getJstDateString(new Date());
    if (lastChangeJst !== null && lastChangeJst === todayJst) {
      console.warn(
        '[lineWebhook] handleSettingsChange locked (already changed today):',
        uid
      );
      await replyText(
        replyToken,
        'ごめんね、設定変更は1日1回までとなっています🙏\n明日もう一度お試しください。',
        '(settings change locked)'
      );
      return;
    }
  } catch (error) {
    console.error(
      '[lineWebhook] handleSettingsChange user read failed:',
      error
    );
    // 読み込み失敗時は続行（保険）
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        preferredHour: FieldValue.delete(),
        lastSettingsChangeAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] handleSettingsChange firestore update failed:',
      error
    );
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        { type: 'text', text: '設定を変更します。学年を選んでください。' },
        buildGradeSelectMessage(),
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handleSettingsChange reply failed:', error);
  }
}

function buildUid(event: LineEvent): string | null {
  const userId = event.source?.userId;
  if (!userId || event.source?.type !== 'user') {
    console.warn(
      '[lineWebhook] event.source is not a user:',
      event.source?.type
    );
    return null;
  }
  return `line:${userId}`;
}

async function handleFollow(event: LineEvent): Promise<void> {
  const uid = buildUid(event);
  if (!uid) return;
  const userId = event.source!.userId!;
  const replyToken = event.replyToken;

  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        provider: 'line',
        lineUserId: userId,
        status: 'active',
        source: 'messaging-webhook',
        onboardingState: 'started',
        onboardingStartedAt: FieldValue.serverTimestamp(),
        onboardingReminderSentAt: null,
        // 公式 LINE 再フォロー時のブロック解除フラグ。webhook の unfollow ハンドラで
        // blocked=true を立てており、再 follow で確実に false に戻して push 配信を
        // 再開させる。
        blocked: false,
        unblockedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] handleFollow firestore write failed:', error);
  }

  if (!replyToken) {
    console.warn('[lineWebhook] follow event without replyToken');
    return;
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: 'はじめまして！公式LINEに登録してくれてありがとうございます😊\n\n早速だけど、3つだけ質問させてください。すぐに終わります！\n\nまずは、学年を教えてね。\n（保護者の方は、お子様の学年を教えてください）',
        },
        buildGradeSelectMessage(),
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handleFollow reply failed:', error);
  }
}

/**
 * 公式 LINE アカウントをブロック（unfollow）されたときの処理。
 *
 * Firestore `users/{uid}` に `blocked: true` を立てて、以降の cron 系 push
 * （dailyQuiz / trialDrip* / sendWinbackMessages / remindIncompleteOnboarding /
 * trialFormAbandonReminder / postTrialFollowup / expireTrialUsers /
 * onAnswerCreated の premiumNudge / firstExtraFollowup）が対象から除外する。
 *
 * LINE 仕様により unfollow イベントには replyToken が付かないため、こちらから
 * 何かを reply / push することはできない。
 */
async function handleUnfollow(event: LineEvent): Promise<void> {
  const uid = buildUid(event);
  if (!uid) return;

  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        blocked: true,
        blockedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log(`[lineWebhook] handleUnfollow: marked blocked uid=${uid}`);
  } catch (error) {
    console.error('[lineWebhook] handleUnfollow firestore write failed:', error);
  }
}

async function handlePostback(event: LineEvent): Promise<void> {
  const uid = buildUid(event);
  if (!uid) return;
  const replyToken = event.replyToken;
  const data = event.postback?.data ?? '';

  const params = new URLSearchParams(data);
  const type = params.get('type');

  if (type === 'select_grade') {
    await handleSelectGradePostback(uid, replyToken, params);
    return;
  }

  if (type === 'select_subject') {
    await handleSelectSubjectPostback(uid, replyToken, params);
    return;
  }

  if (type === 'select_time') {
    await handleSelectTimePostback(uid, replyToken, params);
    return;
  }

  if (type === 'answer') {
    await handleAnswerPostback(uid, replyToken, params);
    return;
  }

  if (type === 'extra_question') {
    await handleExtraQuestionPostback(uid, replyToken);
    return;
  }

  if (type === 'weak_review') {
    await handleWeakReviewPostback(uid, replyToken);
    return;
  }

  if (type === 'help') {
    await handleHelpPostback(uid, replyToken);
    return;
  }

  if (type === 'streak') {
    await handleStreakPostback(uid, replyToken);
    return;
  }

  if (type === 'settings_menu') {
    await handleSettingsMenuPostback(replyToken);
    return;
  }

  if (type === 'settings_guide') {
    await handleSettingsGuidePostback(replyToken);
    return;
  }

  if (type === 'report_summary') {
    await handleReportSummaryPostback(uid, replyToken);
    return;
  }

  if (type === 'test_range_menu') {
    await handleTestRangeMenuPostback(uid, replyToken);
    return;
  }

  if (type === 'premium_info') {
    await handlePremiumInfoPostback(replyToken, uid, params.get('source'));
    return;
  }

  console.warn('[lineWebhook] unhandled postback type:', type);
}

async function handleHelpPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  let showPremiumCta = false;
  try {
    const { db } = await getDb();
    const userSnap = await db.doc(`users/${uid}`).get();
    const data = userSnap.data();
    // free かつプレミアム対応学年のときだけ訴求 CTA を出す。
    // premium ユーザーには訴求不要、対応外学年（将来再導入する場合）には出さない。
    showPremiumCta =
      getUserPlan(data) === 'free' && isPremiumEligibleGrade(data?.grade);
  } catch (error) {
    console.warn('[lineWebhook] handleHelp grade read failed:', error);
  }
  const helpMessage = buildHelpFlexMessage({ showPremiumCta });
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [helpMessage] });
  } catch (error) {
    console.error('[lineWebhook] handleHelp reply failed:', error);
  }
}

async function handleStreakPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const { db } = await getDb();

  // ユーザーの plan と学年を取って flex に渡し、premium CTA の出し分けに使う
  let plan: UserPlan = 'free';
  let gradePremiumEligible = true;
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    const data = userSnap.data();
    plan = getUserPlan(data);
    gradePremiumEligible = isPremiumEligibleGrade(data?.grade);
  } catch (error) {
    console.warn(
      '[lineWebhook] handleStreak user fetch failed (treat as free):',
      error
    );
  }

  // 直近500件の回答履歴から streak を計算（typically 1問/日 ペースなので500件 ≒ 1.5年分）
  let answers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
  try {
    const snap = await db
      .collection('answers')
      .where('uid', '==', uid)
      .orderBy('answeredAt', 'desc')
      .limit(500)
      .get();
    answers = snap.docs;
  } catch (error) {
    console.error('[lineWebhook] handleStreak query failed:', error);
    await replyText(
      replyToken,
      '記録の取得に失敗しました。少し時間を置いて試してください。',
      '(streak query error)'
    );
    return;
  }

  const stats = computeStreakStats(answers);
  const flex = buildStreakFlexMessage(stats, plan, gradePremiumEligible);
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handleStreak reply failed:', error);
  }
}

async function handleSettingsMenuPostback(
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const flex = buildSettingsMenuFlexMessage();
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handleSettingsMenu reply failed:', error);
  }
}

async function handleTestRangeMenuPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  let plan: UserPlan = 'free';
  let gradePremiumEligible = true;
  try {
    const { db } = await getDb();
    const userSnap = await db.doc(`users/${uid}`).get();
    const data = userSnap.data();
    plan = getUserPlan(data);
    gradePremiumEligible = isPremiumEligibleGrade(data?.grade);
  } catch (error) {
    console.error('[lineWebhook] handleTestRangeMenu user read failed:', error);
  }
  const flex = buildTestRangeMenuFlexMessage(plan, gradePremiumEligible);
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handleTestRangeMenu reply failed:', error);
  }
}

async function handleSettingsGuidePostback(
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const flex = buildSettingsGuideFlexMessage();
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handleSettingsGuide reply failed:', error);
  }
}

async function handleReportSummaryPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const { db } = await getDb();

  let stats: {
    totalAnswered: number;
    totalCorrect: number;
    streakCurrent: number;
    streakLongest: number;
    lastStudyDate: string;
  } | null = null;
  let plan: UserPlan = 'free';
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    const data = userSnap.exists ? (userSnap.data() ?? {}) : {};
    plan = getUserPlan(data);
    const s = (data.stats as Record<string, unknown> | undefined) ?? null;
    if (s && typeof s.totalAnswered === 'number') {
      const streak = (s.streak as Record<string, unknown> | undefined) ?? {};
      stats = {
        totalAnswered: s.totalAnswered,
        totalCorrect: typeof s.totalCorrect === 'number' ? s.totalCorrect : 0,
        streakCurrent: typeof streak.current === 'number' ? streak.current : 0,
        streakLongest: typeof streak.longest === 'number' ? streak.longest : 0,
        lastStudyDate:
          typeof streak.lastStudyDate === 'string' ? streak.lastStudyDate : '',
      };
    }
  } catch (error) {
    console.error('[lineWebhook] handleReportSummary fetch failed:', error);
  }

  const flex = buildReportSummaryFlexMessage(stats, plan);
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handleReportSummary reply failed:', error);
  }
}

async function handlePremiumInfoPostback(
  replyToken: string | undefined,
  uid: string,
  source: string | null = null
): Promise<void> {
  if (!replyToken) return;
  // 計測: プレミアム情報 flex を開いた文脈を記録（fire-and-forget）
  if (uid) {
    void (async () => {
      try {
        const { logServerFunnelEvent } = await import('./funnelEvent');
        await logServerFunnelEvent('richmenu_premium_info_tap', uid, {
          source: source ?? 'richmenu',
        });
      } catch (error) {
        console.warn('[lineWebhook] funnel event log failed:', error);
      }
    })();
  }

  // 対応外学年（将来再導入する場合）に対しては申込導線を出さず案内テキストのみ返す保険。
  // 現在は中1/中2/中3 全て解放済みなので通常はこの分岐に入らない。
  let grade: unknown;
  try {
    const { db } = await getDb();
    const userSnap = await db.doc(`users/${uid}`).get();
    grade = userSnap.data()?.grade;
  } catch (error) {
    console.warn('[lineWebhook] handlePremiumInfo grade read failed:', error);
  }
  if (!isPremiumEligibleGrade(grade)) {
    await replyText(
      replyToken,
      PREMIUM_NOT_YET_AVAILABLE_TEXT,
      '(premium info: grade not eligible)'
    );
    return;
  }

  const flex = buildPremiumInfoFlexMessage();
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handlePremiumInfo reply failed:', error);
  }
}

interface StreakStats {
  streakDays: number;
  totalAnswered: number;
  totalCorrect: number;
  accuracyPercent: number;
  answeredToday: boolean;
}

function computeStreakStats(
  answers: FirebaseFirestore.QueryDocumentSnapshot[]
): StreakStats {
  const totalAnswered = answers.length;
  const totalCorrect = answers.filter(
    (d) => d.get('isCorrect') === true
  ).length;
  const accuracyPercent =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const answeredDates = new Set<string>();
  for (const doc of answers) {
    const ts = doc.get('answeredAt') as { toDate?: () => Date } | undefined;
    const date =
      ts && typeof ts.toDate === 'function' ? ts.toDate() : undefined;
    const jst = getJstDateString(date);
    if (jst !== null) answeredDates.add(jst);
  }

  // 連続日数: 今日 or 昨日から遡って連続している日数を数える
  const todayJst = getJstDateString(new Date()) ?? '';
  const answeredToday = answeredDates.has(todayJst);
  let streakDays = 0;
  let cursor = answeredToday ? todayJst : shiftJstDate(todayJst, -1);
  while (cursor && answeredDates.has(cursor)) {
    streakDays += 1;
    cursor = shiftJstDate(cursor, -1);
  }

  return {
    streakDays,
    totalAnswered,
    totalCorrect,
    accuracyPercent,
    answeredToday,
  };
}

interface AnswerStreaks {
  /** 今回の回答を含めた最新からの連続正解数（正解時 >=1、不正解時 0） */
  correctStreak: number;
  /** 今日を含めた連続学習日数 */
  dayStreak: number;
  /** 今回の回答で連続日数が節目（3,7,14,30,100）に到達した瞬間か */
  isMilestoneDay: boolean;
  /** 今回の回答を含めた累計問題数 */
  totalAnswered: number;
}

/**
 * handleAnswer 用: `users.stats`（onAnswerCreated が transaction で維持）と
 * 「今回の回答が正解か」から、連続正解数・連続日数・累計問題数・節目到達かを算出する。
 *
 * 以前は直近 answers を limit(15) で取得して再計算していたため、表示上の
 * 連続日数と累計問題数が 16 で頭打ちになる不具合があった。stats を真値として
 * 参照することでキャップを解消し、`onAnswerCreated` 側の transaction と整合させる。
 */
function computeAnswerStreaksFromStats(
  prevStats: Record<string, unknown> | undefined,
  currentIsCorrect: boolean
): AnswerStreaks {
  const prevStreakRaw = (prevStats?.streak as Record<string, unknown> | undefined) ?? undefined;
  const prevStreak: StreakState | null =
    prevStreakRaw &&
    typeof prevStreakRaw.current === 'number' &&
    typeof prevStreakRaw.lastStudyDate === 'string'
      ? {
          current: prevStreakRaw.current,
          longest:
            typeof prevStreakRaw.longest === 'number'
              ? prevStreakRaw.longest
              : prevStreakRaw.current,
          lastStudyDate: prevStreakRaw.lastStudyDate,
        }
      : null;

  const todayJst = getJstDateString(new Date()) ?? '';
  const nextStreak = nextStreakState(prevStreak, todayJst);
  const dayStreak = nextStreak.current;
  const todayAlreadyAnswered = prevStreak?.lastStudyDate === todayJst;
  const isMilestoneDay =
    !todayAlreadyAnswered && isDayStreakMilestone(dayStreak);

  const prevCorrectStreak =
    typeof prevStats?.correctStreak === 'number' ? prevStats.correctStreak : 0;
  const correctStreak = currentIsCorrect ? prevCorrectStreak + 1 : 0;

  const prevTotalAnswered =
    typeof prevStats?.totalAnswered === 'number' ? prevStats.totalAnswered : 0;
  const totalAnswered = prevTotalAnswered + 1;

  return { correctStreak, dayStreak, isMilestoneDay, totalAnswered };
}

/** JST 日付文字列同士の差分日数（to - from） */
function jstDayDiff(fromJst: string, toJst: string): number {
  const [fy, fm, fd] = fromJst.split('-').map(Number);
  const [ty, tm, td] = toJst.split('-').map(Number);
  if (!fy || !fm || !fd || !ty || !tm || !td) return 0;
  const fromUtc = Date.UTC(fy, fm - 1, fd);
  const toUtc = Date.UTC(ty, tm - 1, td);
  return Math.round((toUtc - fromUtc) / (24 * 60 * 60 * 1000));
}

/**
 * push 経路（dailyQuiz からの呼び出し）で「今日の1問」前置きを生成する。
 * 直近 answers から連続日数と最終回答日からの経過日数を計算し、
 * 状況に合うランダムなメッセージを返す。
 */
async function computeDailyIntro(
  uid: string,
  db: FirebaseFirestore.Firestore,
  nickname?: string
): Promise<string> {
  let recentAnswers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
  try {
    const snap = await db
      .collection('answers')
      .where('uid', '==', uid)
      .orderBy('answeredAt', 'desc')
      .limit(15)
      .get();
    recentAnswers = snap.docs;
  } catch (error) {
    console.error('[lineWebhook] computeDailyIntro fetch failed:', error);
    return getDailyIntro({
      daysSinceLastAnswer: null,
      dayStreak: 0,
      nickname,
    });
  }

  if (recentAnswers.length === 0) {
    return getDailyIntro({
      daysSinceLastAnswer: null,
      dayStreak: 0,
      nickname,
    });
  }

  const latest = recentAnswers[0];
  const ts = latest.get('answeredAt') as { toDate?: () => Date } | undefined;
  const lastDate =
    ts && typeof ts.toDate === 'function' ? ts.toDate() : undefined;
  const lastJst = getJstDateString(lastDate);
  const todayJst = getJstDateString(new Date());

  let daysSinceLastAnswer: number | null = null;
  if (lastJst && todayJst) {
    daysSinceLastAnswer = jstDayDiff(lastJst, todayJst);
  }

  const dateSet = new Set<string>();
  for (const doc of recentAnswers) {
    const docTs = doc.get('answeredAt') as { toDate?: () => Date } | undefined;
    const date =
      docTs && typeof docTs.toDate === 'function' ? docTs.toDate() : undefined;
    const jst = getJstDateString(date);
    if (jst !== null) dateSet.add(jst);
  }

  // dayStreak: 今日 or 昨日から遡って連続している日数（answeredToday 不要）
  let dayStreak = 0;
  if (todayJst) {
    let cursor = dateSet.has(todayJst) ? todayJst : shiftJstDate(todayJst, -1);
    while (cursor && dateSet.has(cursor)) {
      dayStreak += 1;
      cursor = shiftJstDate(cursor, -1);
    }
  }

  return getDailyIntro({ daysSinceLastAnswer, dayStreak, nickname });
}

function shiftJstDate(jstDate: string, days: number): string {
  // jstDate は "YYYY-MM-DD" 形式。UTC として一度パースしてからオフセットすると DST 等の影響を受けない
  const [yStr, mStr, dStr] = jstDate.split('-');
  const y = Number(yStr);
  const m = Number(mStr);
  const d = Number(dStr);
  if (!y || !m || !d) return '';
  const utc = Date.UTC(y, m - 1, d);
  const shifted = new Date(utc + days * 24 * 60 * 60 * 1000);
  const yy = shifted.getUTCFullYear();
  const mm = String(shifted.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(shifted.getUTCDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

function buildHelpFlexMessage(opts: { showPremiumCta: boolean } = { showPremiumCta: true }) {
  const bodyContents = [
    {
      type: 'text' as const,
      text: '毎日決まった時間に1問届きます。',
      wrap: true,
      size: 'sm' as const,
      color: '#111827',
    },
    {
      type: 'separator' as const,
      margin: 'sm' as const,
    },
    {
      type: 'box' as const,
      layout: 'vertical' as const,
      spacing: 'xs' as const,
      margin: 'md' as const,
      contents: [
        {
          type: 'text' as const,
          text: '⏰ 配信時間',
          weight: 'bold' as const,
          size: 'sm' as const,
          color: '#111827',
        },
        {
          type: 'text' as const,
          text: '朝6時 / 朝7時 / 夕方5時 / 夜7時 から選べます。',
          wrap: true,
          size: 'xs' as const,
          color: '#6B7280',
        },
      ],
    },
    {
      type: 'box' as const,
      layout: 'vertical' as const,
      spacing: 'xs' as const,
      margin: 'md' as const,
      contents: [
        {
          type: 'text' as const,
          text: '🔁 設定を変えたい',
          weight: 'bold' as const,
          size: 'sm' as const,
          color: '#111827',
        },
        {
          type: 'text' as const,
          text: '「設定変更」とトークに送ると、学年・配信時間を選び直せます（1日1回まで）。',
          wrap: true,
          size: 'xs' as const,
          color: '#6B7280',
        },
      ],
    },
    ...(opts.showPremiumCta
      ? [
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            spacing: 'xs' as const,
            margin: 'md' as const,
            contents: [
              {
                type: 'text' as const,
                text: '🚀 1日1問といわず、もっと解きたい',
                weight: 'bold' as const,
                size: 'sm' as const,
                color: '#111827',
              },
              {
                type: 'text' as const,
                text: '追加問題・苦手復習に加え、暗記カードと四択クイズが、7日間だけ気軽に試せるよ。カード登録なしで始められます。',
                wrap: true,
                size: 'xs' as const,
                color: '#6B7280',
              },
            ],
          },
        ]
      : []),
  ];

  const footerContents = [
    ...(opts.showPremiumCta
      ? [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '気軽に試してみる',
              uri: withLiffSource(LIFF_PREMIUM_APPLY_URL, 'help'),
            },
          },
        ]
      : []),
    {
      type: 'button' as const,
      style: opts.showPremiumCta
        ? ('secondary' as const)
        : ('primary' as const),
      ...(opts.showPremiumCta ? {} : { color: '#F59E0B' }),
      height: 'sm' as const,
      action: {
        type: 'uri' as const,
        label: '使い方を詳しく見る',
        uri: LIFF_HELP_URL,
      },
    },
  ];

  return {
    type: 'flex' as const,
    altText: '使い方ガイド',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '📖 使い方ガイド',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'md' as const,
        paddingAll: '16px',
        contents: bodyContents,
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: footerContents,
      },
    },
  };
}

function buildStreakFlexMessage(
  stats: StreakStats,
  plan: UserPlan = 'premium',
  gradePremiumEligible: boolean = true
) {
  const showPremiumCta = plan === 'free' && gradePremiumEligible;
  const subText = stats.answeredToday
    ? '今日も継続中。'
    : stats.streakDays > 0
      ? plan === 'premium'
        ? '今日まだ解いていません。続けるなら『追加で解く』！'
        : 'この調子で明日もコツコツ続けましょう。'
      : 'まずは今日の1問から始めよう。';

  return {
    type: 'flex' as const,
    altText: `連続${stats.streakDays}日｜累計${stats.totalAnswered}問｜正答率${stats.accuracyPercent}%`,
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '🔥 連続記録',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        spacing: 'md' as const,
        contents: [
          {
            type: 'box' as const,
            layout: 'horizontal' as const,
            contents: [
              {
                type: 'text' as const,
                text: `${stats.streakDays}`,
                weight: 'bold' as const,
                size: '4xl' as const,
                color: '#F59E0B',
                flex: 0,
              },
              {
                type: 'text' as const,
                text: '日連続',
                size: 'md' as const,
                color: '#111827',
                gravity: 'bottom' as const,
                margin: 'md' as const,
              },
            ],
          },
          {
            type: 'text' as const,
            text: subText,
            wrap: true,
            size: 'sm' as const,
            color: '#6B7280',
          },
          {
            type: 'separator' as const,
            margin: 'md' as const,
          },
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            spacing: 'sm' as const,
            margin: 'md' as const,
            contents: [
              {
                type: 'box' as const,
                layout: 'horizontal' as const,
                contents: [
                  {
                    type: 'text' as const,
                    text: '累計問題数',
                    size: 'sm' as const,
                    color: '#6B7280',
                    flex: 0,
                  },
                  {
                    type: 'text' as const,
                    text: `${stats.totalAnswered} 問`,
                    size: 'sm' as const,
                    color: '#111827',
                    align: 'end' as const,
                    weight: 'bold' as const,
                  },
                ],
              },
              {
                type: 'box' as const,
                layout: 'horizontal' as const,
                contents: [
                  {
                    type: 'text' as const,
                    text: '正解数',
                    size: 'sm' as const,
                    color: '#6B7280',
                    flex: 0,
                  },
                  {
                    type: 'text' as const,
                    text: `${stats.totalCorrect} 問`,
                    size: 'sm' as const,
                    color: '#111827',
                    align: 'end' as const,
                    weight: 'bold' as const,
                  },
                ],
              },
              {
                type: 'box' as const,
                layout: 'horizontal' as const,
                contents: [
                  {
                    type: 'text' as const,
                    text: '正答率',
                    size: 'sm' as const,
                    color: '#6B7280',
                    flex: 0,
                  },
                  {
                    type: 'text' as const,
                    text: `${stats.accuracyPercent}%`,
                    size: 'sm' as const,
                    color: '#111827',
                    align: 'end' as const,
                    weight: 'bold' as const,
                  },
                ],
              },
            ],
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          ...(showPremiumCta
            ? [
                {
                  type: 'button' as const,
                  style: 'primary' as const,
                  color: '#F59E0B',
                  height: 'sm' as const,
                  action: {
                    type: 'uri' as const,
                    label: '気軽に試してみる',
                    uri: withLiffSource(LIFF_PREMIUM_APPLY_URL, 'streak'),
                  },
                },
              ]
            : []),
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '教科別・単元別の記録を見る',
              uri: LIFF_REPORT_URL,
            },
          },
        ],
      },
    },
  };
}

function buildSettingsMenuFlexMessage() {
  return {
    type: 'flex' as const,
    altText: '設定・サポート',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '⚙️ 設定・サポート',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: '通知時間や学年を変えたいときは、トークに「設定変更」と送ってください（1日1回まで）。',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
          },
          {
            type: 'text' as const,
            text: '解約や問い合わせは下のボタンから。',
            wrap: true,
            size: 'xs' as const,
            color: '#6B7280',
            margin: 'sm' as const,
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'message' as const,
              label: '設定変更',
              text: '設定変更',
            },
          },
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '問い合わせ',
              uri: CONTACT_URL,
            },
          },
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: 'プレミアム解約案内',
              uri: LIFF_PREMIUM_INFO_URL,
            },
          },
        ],
      },
    },
  };
}

function buildTestRangeMenuFlexMessage(
  plan: UserPlan = 'premium',
  gradePremiumEligible: boolean = true
) {
  const bodyText =
    plan === 'premium'
      ? 'チェックした単元から「追加で解く」「苦手を復習」の問題が出るよ。まだ習っていないところは外しておくと勉強がはかどる👍'
      : gradePremiumEligible
        ? '今チェックしておくと、毎日の1問が出題範囲から優先して届きます。プレミアムでは「追加で解く」「苦手を復習」にも反映されます。'
        : '今チェックしておくと、毎日の1問が出題範囲から優先して届きます。範囲を絞って効率よく勉強できます。';

  return {
    type: 'flex' as const,
    altText: '出題範囲設定',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '🎯 出題範囲設定',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: '出題してほしい単元にチェックを入れよう！',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text: bodyText,
            wrap: true,
            size: 'xs' as const,
            color: '#6B7280',
            margin: 'sm' as const,
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '範囲を設定する',
              uri: LIFF_TEST_RANGE_URL,
            },
          },
        ],
      },
    },
  };
}

function buildSettingsGuideFlexMessage() {
  return {
    type: 'flex' as const,
    altText: '設定・サポート',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '⚙️ 設定・サポート',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: 'よく使う設定はこちらから。学年・配信時刻・解約・お問い合わせは設定画面の中から進められるよ。',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '🎯 テスト範囲設定',
              uri: LIFF_TEST_RANGE_URL,
            },
          },
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '⚙️ 設定画面を開く',
              uri: LIFF_SETTINGS_URL,
            },
          },
        ],
      },
    },
  };
}

function buildReportSummaryFlexMessage(
  stats: {
    totalAnswered: number;
    totalCorrect: number;
    streakCurrent: number;
    streakLongest: number;
    lastStudyDate: string;
  } | null,
  plan: UserPlan = 'premium'
) {
  const accuracy =
    stats && stats.totalAnswered > 0
      ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
      : 0;
  const body =
    stats === null
      ? [
          {
            type: 'text' as const,
            text: 'まだ記録がありません。',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text: '1問解くと、ここに連続記録や正答率が表示されるよ。',
            wrap: true,
            size: 'xs' as const,
            color: '#6B7280',
            margin: 'sm' as const,
          },
        ]
      : [
          {
            type: 'box' as const,
            layout: 'horizontal' as const,
            spacing: 'md' as const,
            contents: [
              {
                type: 'box' as const,
                layout: 'vertical' as const,
                flex: 1,
                contents: [
                  {
                    type: 'text' as const,
                    text: '連続',
                    size: 'xxs' as const,
                    color: '#6B7280',
                  },
                  {
                    type: 'text' as const,
                    text: `${stats.streakCurrent} 日`,
                    weight: 'bold' as const,
                    size: 'lg' as const,
                    color: '#F59E0B',
                  },
                ],
              },
              {
                type: 'box' as const,
                layout: 'vertical' as const,
                flex: 1,
                contents: [
                  {
                    type: 'text' as const,
                    text: '解いた',
                    size: 'xxs' as const,
                    color: '#6B7280',
                  },
                  {
                    type: 'text' as const,
                    text: `${stats.totalAnswered} 問`,
                    weight: 'bold' as const,
                    size: 'lg' as const,
                    color: '#111827',
                  },
                ],
              },
              {
                type: 'box' as const,
                layout: 'vertical' as const,
                flex: 1,
                contents: [
                  {
                    type: 'text' as const,
                    text: '正答率',
                    size: 'xxs' as const,
                    color: '#6B7280',
                  },
                  {
                    type: 'text' as const,
                    text: `${accuracy}%`,
                    weight: 'bold' as const,
                    size: 'lg' as const,
                    color: '#F59E0B',
                  },
                ],
              },
            ],
          },
          {
            type: 'text' as const,
            text: `最長 ${stats.streakLongest} 日連続${
              stats.lastStudyDate ? ` ・ 最終: ${stats.lastStudyDate}` : ''
            }`,
            size: 'xs' as const,
            color: '#6B7280',
            margin: 'md' as const,
            wrap: true,
          },
        ];

  return {
    type: 'flex' as const,
    altText: '成績・記録',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '📊 成績・記録',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        spacing: 'sm' as const,
        contents: body,
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '詳しく見る（教科別・単元別）',
              uri: LIFF_REPORT_URL,
            },
          },
          ...(plan === 'free'
            ? [
                {
                  type: 'button' as const,
                  style: 'secondary' as const,
                  height: 'sm' as const,
                  action: {
                    type: 'uri' as const,
                    label: '✨ プレミアムを試す',
                    uri: LIFF_PREMIUM_INFO_URL,
                  },
                },
              ]
            : []),
        ],
      },
    },
  };
}

function buildPremiumInfoFlexMessage() {
  return {
    type: 'flex' as const,
    altText: 'もっと解きたい人へ',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '🚀 もっと解きたい人へ',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        spacing: 'md' as const,
        contents: [
          {
            type: 'text' as const,
            text: '毎日1問だけじゃ物足りない人へ。',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text:
              '7日間だけ気軽に試せるモードがあるよ。\n' +
              'カード登録なし・7日後にそのまま自動で戻るから、安心して試せます。',
            wrap: true,
            size: 'xs' as const,
            color: '#B45309',
            weight: 'bold' as const,
            margin: 'sm' as const,
          },
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            spacing: 'xs' as const,
            margin: 'md' as const,
            contents: [
              {
                type: 'text' as const,
                text: '🔁 追加で解く',
                weight: 'bold' as const,
                size: 'sm' as const,
                color: '#111827',
              },
              {
                type: 'text' as const,
                text: '今すぐもう1問。1日の上限なしで挑戦できる。',
                wrap: true,
                size: 'xs' as const,
                color: '#6B7280',
              },
            ],
          },
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            spacing: 'xs' as const,
            margin: 'md' as const,
            contents: [
              {
                type: 'text' as const,
                text: '🎯 苦手を復習',
                weight: 'bold' as const,
                size: 'sm' as const,
                color: '#111827',
              },
              {
                type: 'text' as const,
                text: '間違えた問題から自動出題。弱点を集中的につぶす。',
                wrap: true,
                size: 'xs' as const,
                color: '#6B7280',
              },
            ],
          },
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            spacing: 'xs' as const,
            margin: 'md' as const,
            contents: [
              {
                type: 'text' as const,
                text: '📝 出題範囲設定',
                weight: 'bold' as const,
                size: 'sm' as const,
                color: '#111827',
              },
              {
                type: 'text' as const,
                text: '教科書名と範囲を入れるだけで、それに合わせた問題が届く。',
                wrap: true,
                size: 'xs' as const,
                color: '#6B7280',
              },
            ],
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '気軽に試してみる',
              uri: withLiffSource(LIFF_PREMIUM_APPLY_URL, 'premium_info'),
            },
          },
        ],
      },
    },
  };
}

/**
 * LIFF /liff/units の deep-link URL を組み立てる。
 * `?topic=<細かい日本語名>&kind=fc|quiz` を付けると、LiffUnitsPage 側で
 * 該当 topic の setup view へ自動遷移する。
 */
function buildLiffUnitsDeepLink(
  topicName: string,
  kind: 'fc' | 'quiz',
  source: string
): string {
  try {
    const u = new URL(LIFF_UNITS_URL);
    u.searchParams.set('topic', topicName);
    u.searchParams.set('kind', kind);
    u.searchParams.set('src', source);
    return u.toString();
  } catch {
    const joiner = LIFF_UNITS_URL.includes('?') ? '&' : '?';
    return `${LIFF_UNITS_URL}${joiner}topic=${encodeURIComponent(topicName)}&kind=${kind}&src=${encodeURIComponent(source)}`;
  }
}

/**
 * 解説の直後に1通だけ添える「この分野をもっと暗記↓ + 暗記カードを開くボタン」の
 * 小さい flex。
 *
 * 旧版は「📬 明日もまた届くよ」「連続◯日 / 累計◯問」「暗記カード / 四択クイズの
 * 2ボタン」を1枚に詰め込んでいたが、毎回送られる情報量が多く煩雑なため最小構成に
 * 整理（2026-05-31）。
 *
 * topicName が空の場合（旧データなど）は何も返さず、呼び出し側で flex 自体を
 * 添付しないよう null を返す。
 */
function buildPostAnswerNextStepFlexMessage(options: {
  topicName?: string;
}): unknown | null {
  if (!options.topicName) return null;
  return {
    type: 'flex' as const,
    altText: 'この分野をもっと暗記',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: 'この分野をもっと暗記↓',
            weight: 'bold' as const,
            size: 'sm' as const,
            color: '#111827',
            align: 'center' as const,
          },
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '🃏 暗記カードを開く',
              uri: buildLiffUnitsDeepLink(
                options.topicName,
                'fc',
                'post_answer',
              ),
            },
          },
        ],
      },
    },
  };
}

/**
 * 発火文脈ごとに見出し・本文を切り替える、プレミアム誘導の共通 flex メッセージ。
 *
 * - `extra_question`/`weak_review`: 無料ユーザーが有料機能を踏んだ時の guard。
 *   なぜ今出ているかを 1 行で伝える。
 * - `streak_milestone`/`volume_milestone`: 学習行動の節目で送るお祝い兼ナッジ。
 *   学習を続けた結果として届く文脈を保つ。
 * - `onboarding`: 友だち追加直後の最初の1問配信に同梱する控えめな案内。
 *
 * footer は常に「7日間無料で始める」(primary) + 「詳細を見る」(secondary) の 2 ボタン。
 */
export type PremiumNudgeReason =
  | 'extra_question'
  | 'weak_review'
  | 'streak_milestone'
  | 'volume_milestone'
  | 'first_answer'
  | 'onboarding';

interface NudgeCopy {
  headerEmoji: string;
  headerText: string;
  leadText: string;
}

const NUDGE_COPY: Record<PremiumNudgeReason, NudgeCopy> = {
  extra_question: {
    headerEmoji: '🚀',
    headerText: 'もう1問はお試し中だけ',
    leadText:
      `「追加で解く」は7日間お試しモードで使える機能だよ。\n\n` +
      `✅ カード登録なし\n` +
      `✅ 7日後はそのまま自動で戻る`,
  },
  weak_review: {
    headerEmoji: '🎯',
    headerText: '苦手復習はお試し中だけ',
    leadText:
      `間違えた問題から優先で出る「苦手を復習」は、7日間お試しモードで使える機能だよ。\n\n` +
      `✅ カード登録なし\n` +
      `✅ 7日後はそのまま自動で戻る`,
  },
  streak_milestone: {
    headerEmoji: '🔥',
    headerText: '連続学習おめでとう！',
    leadText:
      `コツコツ続いてるね。\n\n` +
      `もっと解きたくなったら、7日間だけ気軽に試せるモードがあるよ。カード登録なし、7日後にそのまま自動で戻ります。`,
  },
  volume_milestone: {
    headerEmoji: '📚',
    headerText: 'たくさん解けてるね！',
    leadText:
      `ここまでよくがんばったね。\n\n` +
      `暗記カードや四択クイズも使ってみたいときは、7日間だけ気軽に試せるよ。カード登録なし。`,
  },
  first_answer: {
    headerEmoji: '🎉',
    headerText: '初めての1問、おつかれさま！',
    // ノーリスク訴求のコンパクト版。料金・「プレミアム」単語は意図的に出さない。
    // ファネル分析（2026-05-25）で apply_submit=0 だったため、まずは
    // 「気軽に試せる」感を最優先する文言に絞り込み。
    leadText:
      `「もっと解きたい！」と思ったら、7日間だけ気軽に試せるモードがあるよ。\n\n` +
      `✅ カード登録なし\n` +
      `✅ 7日後にそのまま自動で戻るから安心`,
  },
  onboarding: {
    headerEmoji: '✨',
    headerText: '1日1問といわず、もっと解きたい',
    leadText:
      `追加で解く・苦手復習・暗記カード・四択クイズが、7日間だけ気軽に試せるよ。カード登録なしで始められます。`,
  },
};

/**
 * 申込後、即座に 7日間の無料トライアルを開放したことをユーザーに伝える flex。
 * onPremiumApplicationCreated から push される。
 */
/**
 * 1問目を解き終わったあと、ニックネーム未設定なら送る「これからよろしくね」
 * + ニックネーム登録 LIFF への誘導 flex。
 */
export function buildAskNicknameFlex() {
  return {
    type: 'flex' as const,
    altText: 'これからよろしくね！良かったらニックネーム教えて - チャットでスタディ',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '12px',
        contents: [
          {
            type: 'text' as const,
            text: '🙋 これからよろしくね！',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'sm' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: '1問目おつかれさま！',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text: '良かったらニックネームを教えてくれる？\nメッセージで時々呼びかけるのに使うね。あとからでも変えられるので気軽にどうぞ😊',
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: 'ニックネームを入力する',
              uri: LIFF_NICKNAME_URL,
            },
          },
          {
            type: 'text' as const,
            text: '※スキップしてもOK。あとから「設定・サポート」でも登録できます',
            wrap: true,
            size: 'xxs' as const,
            color: '#9CA3AF',
            align: 'center' as const,
            margin: 'sm' as const,
          },
        ],
      },
    },
  };
}

/**
 * プレミアム機能の段階的な誘導 flex。初回 `追加で解く` の直後など、
 * 次のステップを優しく提案するために使う。
 */
export function buildNextStepGuideFlex(
  step: 'jikkuri' | 'weak_review'
) {
  if (step === 'jikkuri') {
    return {
      type: 'flex' as const,
      altText: '次は「じっくり学ぶ」を試してみよう - チャットでスタディ',
      contents: {
        type: 'bubble' as const,
        size: 'kilo' as const,
        header: {
          type: 'box' as const,
          layout: 'vertical' as const,
          backgroundColor: '#F59E0B',
          paddingAll: '12px',
          contents: [
            {
              type: 'text' as const,
              text: '👏 ナイス！次のステップへ',
              color: '#FFFFFF',
              weight: 'bold' as const,
              size: 'sm' as const,
            },
          ],
        },
        body: {
          type: 'box' as const,
          layout: 'vertical' as const,
          paddingAll: '16px',
          spacing: 'sm' as const,
          contents: [
            {
              type: 'text' as const,
              text: '「追加で解く」を試してくれてありがとう！',
              wrap: true,
              size: 'sm' as const,
              color: '#111827',
              weight: 'bold' as const,
            },
            {
              type: 'text' as const,
              text: '次は「じっくり学ぶ」を覗いてみよう。暗記カードでサクサク復習したり、四択クイズを連続で解いたり、自分のペースで集中して学習できます。',
              wrap: true,
              size: 'xs' as const,
              color: '#374151',
            },
            {
              type: 'text' as const,
              text: '💡 これからは下のメニューの「じっくり学ぶ」ボタンを押せばいつでも開けるよ！',
              wrap: true,
              size: 'xxs' as const,
              color: '#92400E',
              margin: 'sm' as const,
            },
          ],
        },
        footer: {
          type: 'box' as const,
          layout: 'vertical' as const,
          paddingAll: '16px',
          contents: [
            {
              type: 'button' as const,
              style: 'primary' as const,
              color: '#F59E0B',
              height: 'sm' as const,
              action: {
                type: 'uri' as const,
                label: 'じっくり学ぶを開く',
                uri: LIFF_UNITS_URL,
              },
            },
          ],
        },
      },
    };
  }
  // step === 'weak_review'
  return {
    type: 'flex' as const,
    altText: '次は「苦手を復習」も使ってみよう - チャットでスタディ',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '12px',
        contents: [
          {
            type: 'text' as const,
            text: '🎯 苦手は伸びしろ！',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'sm' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: '間違えた問題は「苦手を復習」で何度でも復習できます。テスト前の総復習にぴったり！',
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
          },
          {
            type: 'text' as const,
            text: '💡 下のメニューの「苦手を復習」ボタンからもいつでもできるよ！',
            wrap: true,
            size: 'xxs' as const,
            color: '#92400E',
            margin: 'sm' as const,
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '苦手を復習',
              data: 'type=weak_review',
              displayText: '苦手を復習',
            },
          },
        ],
      },
    },
  };
}

/**
 * 体験中ユーザーに「今登録すれば、ずっと月¥680のまま」を訴求する flex。
 * 1週間後の通常価格は月¥980。
 *
 * - 初回: 最初の `追加で解く` 後に1問回答 → じっくり学ぶ案内 → 60秒後にこの flex
 *   （onAnswerCreated.maybeSendFirstExtraFollowup から push）
 * - 定期: trialDripDay4 などからも push される (場面別に reason で文言を出し分け)
 *
 * footer は「今すぐ登録 → /liff/premium-apply」+「詳細を見る → /liff/premium-info」
 */
export function buildPriceLockPitchFlex(opts?: {
  /** 文脈に応じた一文。指定なしならデフォルト文言 */
  introText?: string;
  /** withLiffSource に渡す src パラメータ (analytics) */
  source?: string;
}) {
  const introText =
    opts?.introText ??
    'プレミアム機能、ぜひゆっくり試してみてね。気に入ったら、今のうちに登録しておくとお得だよ。';
  const source = opts?.source ?? 'price_lock_pitch';
  return {
    type: 'flex' as const,
    altText: '今登録すれば、ずっと月¥680のまま！1週間後の通常価格(月¥980)に上がらず続けられます。',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '12px',
        contents: [
          {
            type: 'text' as const,
            text: '🔒 ずっと月¥680のまま！',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'sm' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: introText,
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
          },
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            backgroundColor: '#FEF3C7',
            cornerRadius: '10px',
            paddingAll: '12px',
            margin: 'md' as const,
            contents: [
              {
                type: 'text' as const,
                text: '✨ 体験中に登録すると…',
                weight: 'bold' as const,
                size: 'sm' as const,
                color: '#92400E',
              },
              {
                type: 'text' as const,
                text: 'ずっと月¥680のまま！',
                weight: 'bold' as const,
                size: 'md' as const,
                color: '#92400E',
                margin: 'sm' as const,
              },
              {
                type: 'text' as const,
                text: '体験期間が終わった日から課金が始まるので、二重には引き落とされません。',
                wrap: true,
                size: 'xxs' as const,
                color: '#92400E',
                margin: 'sm' as const,
              },
            ],
          },
          {
            type: 'text' as const,
            text: '⚠ 体験終了後（1週間経過後）は通常価格の 月 ¥980 になります。',
            wrap: true,
            size: 'xxs' as const,
            color: '#6B7280',
            margin: 'sm' as const,
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '今すぐ月¥680で登録',
              uri: withLiffSource(LIFF_PREMIUM_APPLY_URL, source),
            },
          },
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '詳細を見る',
              uri: withLiffSource(LIFF_PREMIUM_INFO_URL, source),
            },
          },
        ],
      },
    },
  };
}

export function buildTrialStartedFlexMessage() {
  const step = (num: string, title: string, desc: string) => ({
    type: 'box' as const,
    layout: 'horizontal' as const,
    spacing: 'sm' as const,
    margin: 'md' as const,
    contents: [
      {
        type: 'text' as const,
        text: num,
        size: 'lg' as const,
        weight: 'bold' as const,
        color: '#F59E0B',
        flex: 0,
      },
      {
        type: 'box' as const,
        layout: 'vertical' as const,
        flex: 1,
        contents: [
          {
            type: 'text' as const,
            text: title,
            size: 'sm' as const,
            weight: 'bold' as const,
            color: '#111827',
            wrap: true,
          },
          {
            type: 'text' as const,
            text: desc,
            size: 'xs' as const,
            color: '#6B7280',
            wrap: true,
            margin: 'xs' as const,
          },
        ],
      },
    ],
  });

  return {
    type: 'flex' as const,
    altText: '7日間お試し開始！まずは「追加で解く」を試してみよう - チャットでスタディ',
    contents: {
      type: 'bubble' as const,
      size: 'mega' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '✨ 7日間お試し開始！',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
          {
            type: 'text' as const,
            text: 'これから7日間、追加問題・暗記カード・四択クイズが全部使えるよ',
            color: '#FFF7E6',
            size: 'xs' as const,
            margin: 'xs' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'text' as const,
            text: '1問目おつかれさま！🎉',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text: 'これから7日間、思いっきり問題を解いて勉強の習慣をつくっていこう。テストや受験に向けて一緒にがんばっていこうね📚',
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
            margin: 'sm' as const,
          },
          {
            type: 'separator' as const,
            margin: 'md' as const,
          },
          {
            type: 'text' as const,
            text: '下のボタンから、順番に試してみよう👇',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
            margin: 'md' as const,
          },
          step(
            '①',
            'まずは「追加で解く」',
            '今すぐもう1問チャレンジ！毎日1問じゃ足りない時に。'
          ),
          step(
            '②',
            '次に「じっくり学ぶ」',
            '暗記カードと四択クイズで効率よく覚えられる学習体験。'
          ),
          step(
            '③',
            '「苦手を復習」もチェック',
            '間違えた問題だけ集めて出題。テスト前の総復習に。'
          ),
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '▶ まずは追加で解く',
              data: 'type=extra_question',
              displayText: '追加で解く',
            },
          },
          // 「じっくり学ぶを開く」ボタンは意図的に削除。
          // 「追加で解く → 1問回答 → じっくり学ぶ案内 → 1分後に特別価格案内」の
          // ステップを順番に体験してもらう設計に変更（D-15）。
          // 苦手を復習 CTA は残す（trial 開始時に 3 機能すべてに動線を作る）。
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '苦手を復習する',
              data: 'type=weak_review',
              displayText: '苦手を復習',
            },
          },
          {
            type: 'text' as const,
            text: '7日間使い放題。7日後はそのまま自動で元に戻るから、安心して試してね。',
            wrap: true,
            size: 'xxs' as const,
            color: '#9CA3AF',
            align: 'center' as const,
            margin: 'sm' as const,
          },
        ],
      },
    },
  };
}

export function buildPaidStartedFlexMessage(lockedMonthlyPrice?: 680 | 980) {
  const priceText = lockedMonthlyPrice
    ? `月¥${lockedMonthlyPrice.toLocaleString()}`
    : '月額プラン';

  return {
    type: 'flex' as const,
    altText: 'プレミアム登録ありがとうございます - チャットでスタディ',
    contents: {
      type: 'bubble' as const,
      size: 'mega' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '✨ プレミアム登録完了',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
          {
            type: 'text' as const,
            text: `${priceText}でご利用いただけます`,
            color: '#FFF7E6',
            size: 'xs' as const,
            margin: 'xs' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'text' as const,
            text: 'お申し込みありがとうございます',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text: 'プレミアム機能をそのまま継続して使えるようになりました。毎日の1問に加えて、追加問題・苦手復習・じっくり学ぶをテスト前の復習に活用してください。',
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
            margin: 'sm' as const,
          },
          {
            type: 'separator' as const,
            margin: 'md' as const,
          },
          {
            type: 'text' as const,
            text: '解約について',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
            margin: 'md' as const,
          },
          {
            type: 'text' as const,
            text: '解約したい場合は、リッチメニューの「設定・サポート」からご連絡ください。次回請求日前に確認できるよう、余裕をもってお知らせください。',
            wrap: true,
            size: 'xs' as const,
            color: '#4B5563',
            margin: 'sm' as const,
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '追加で解く',
              data: 'type=extra_question',
              displayText: '追加で解く',
            },
          },
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '設定・サポートを見る',
              data: 'type=settings_menu',
              displayText: '設定・サポート',
            },
          },
        ],
      },
    },
  };
}

/**
 * 無料トライアル進行リマインダー flex。
 * expireTrialUsers から trial 開始 1 / 3 / 6 / 7 日目の朝（3:00 JST）に push される。
 * 7日目 = 当日中にプレミアムが切れる最終日。実際の期限切れ後は
 * buildTrialExpiredFlexMessage が翌朝に送信される。
 */
export function buildTrialReminderFlexMessage(dayNumber: 1 | 3 | 6 | 7) {
  const daysLeft = 7 - dayNumber;
  const headline =
    dayNumber === 7
      ? '✨ プレミアム体験は今日で最後'
      : dayNumber === 6
        ? '⏰ 明日でトライアル終了'
        : `🚀 プレミアム体験 ${dayNumber}日目（残り${daysLeft}日）`;
  const leadText =
    dayNumber === 1
      ? '昨日からプレミアム体験スタート！「追加で解く」「苦手を復習」「じっくり学ぶ」、もう触ってみた？'
      : dayNumber === 3
        ? // D-12: Day 3 は価格訴求を抜き、機能紹介に集中
          '3日目に突入！暗記カードと四択クイズで、効率よく覚えていけるのがプレミアムの強み。' +
          '今日は使ってない機能も試してみよう。'
        : dayNumber === 6
          ? '残り1日！気に入ったら、今のうちに月¥680で登録すれば、明日以降もそのまま続けられます。' +
            '明日からの新規登録は月¥980スタートに切り替わります。'
          : // Day 7: 朝のリマインダー。夕方・夜は別ジョブで送信
            '7日間のプレミアム体験、今日が最後の1日だよ。\n' +
            '「追加で解く」「苦手を復習」「暗記カード」「四択クイズ」、使ってみていかがでしたか？' +
            'このまま続けたいと思ってもらえたら、今日中に月¥680で登録すれば、明日からもそのまま使い続けられます。' +
            '合わなさそうなら自動で無料プランに戻るから安心してね。';
  // D-3: 価格ロックを「自然に」伝える文言。煽りトーン禁止
  const priceText =
    dayNumber === 3
      ? '' // Day 3 は価格訴求カット
      : '体験中の登録なら月¥680のまま、これから追加される教科分も同じ価格で使えます。' +
        '体験を逃すと月¥980スタートになります。';
  return {
    type: 'flex' as const,
    altText: `${headline} - チャットでスタディ`,
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: headline,
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
            wrap: true,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: leadText,
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          // D-12: Day 3 は priceText を空にしているので、空のときは要素自体を省く
          ...(priceText
            ? [
                {
                  type: 'text' as const,
                  text: priceText,
                  wrap: true,
                  size: 'xs' as const,
                  color: '#374151',
                  margin: 'sm' as const,
                },
              ]
            : []),
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              // D-8: 場面別 CTA バリエーション
              label:
                dayNumber === 1
                  ? '続けるならこちら'
                  : dayNumber === 3
                    ? 'もっと使ってみる'
                    : dayNumber === 6
                      ? '月¥680を確保する'
                      : '今日中に月¥680で確定',
              uri: `${LIFF_PREMIUM_APPLY_URL}?src=trial-day${dayNumber}`,
            },
          },
        ],
      },
    },
  };
}

/**
 * 無料トライアル期限切れで free に戻したことを通知する flex。
 * expireTrialUsers から push される。
 */
export function buildTrialExpiredFlexMessage() {
  return {
    type: 'flex' as const,
    altText: '無料トライアルが終了しました - チャットでスタディ',
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: '無料トライアルが終了しました',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'sm' as const,
        contents: [
          {
            type: 'text' as const,
            text: '7日間無料トライアルをご利用いただきありがとうございました。',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
            weight: 'bold' as const,
          },
          {
            type: 'text' as const,
            text: 'リッチメニューは無料版に戻りましたが、毎日1問は引き続きお届けします。',
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
            margin: 'sm' as const,
          },
          {
            type: 'text' as const,
            text: 'また始めたくなったら月¥980から続けられます。¥980 と ¥680 の差は年間¥3,600。3か月で問題集1冊分の差です。',
            wrap: true,
            size: 'xs' as const,
            color: '#6B7280',
            margin: 'sm' as const,
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'uri' as const,
              label: '今ならまだ月¥980',
              uri: `${LIFF_PREMIUM_APPLY_URL}?src=post-trial-day8`,
            },
          },
        ],
      },
    },
  };
}

export function buildPremiumNudgeFlexMessage(reason: PremiumNudgeReason) {
  const copy = NUDGE_COPY[reason];
  const source = `nudge_${reason}`;
  // Phase 5(a) で全 reason の CTA を統一:
  // - onboarding（友達追加直後）のみ「詳細を見る」(/premium-info)。初回は申込訴求が早い。
  // - それ以外は「気軽に試してみる」(/premium-apply) の 1 ボタン。
  const layout: 'soft_cta' | 'onboarding' =
    reason === 'onboarding' ? 'onboarding' : 'soft_cta';

  let footerContents;
  if (layout === 'soft_cta') {
    footerContents = [
      {
        type: 'button' as const,
        style: 'primary' as const,
        color: '#F59E0B',
        height: 'sm' as const,
        action: {
          type: 'uri' as const,
          label: '気軽に試してみる',
          uri: withLiffSource(LIFF_PREMIUM_APPLY_URL, source),
        },
      },
    ];
  } else {
    // onboarding
    footerContents = [
      {
        type: 'button' as const,
        style: 'primary' as const,
        color: '#F59E0B',
        height: 'sm' as const,
        action: {
          type: 'uri' as const,
          label: '詳細を見る',
          uri: withLiffSource(LIFF_PREMIUM_INFO_URL, source),
        },
      },
    ];
  }

  return {
    type: 'flex' as const,
    altText: `${copy.headerText} - チャットでスタディ`,
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: `${copy.headerEmoji} ${copy.headerText}`,
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
            wrap: true,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: [
          {
            type: 'text' as const,
            text: copy.leadText,
            wrap: true,
            size: 'sm' as const,
            color: '#374151',
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        contents: footerContents,
      },
    },
  };
}

async function handleExtraQuestionPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  const { db, FieldValue } = await getDb();
  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  const plan = getUserPlan(userData);

  if (plan !== 'premium') {
    // 対応外学年（将来再導入する場合）は premium nudge ではなく案内テキストだけ返す保険。
    if (!isPremiumEligibleGrade(userData?.grade)) {
      await replyText(
        replyToken,
        PREMIUM_NOT_YET_AVAILABLE_TEXT,
        '(extra question: grade not eligible)'
      );
      return;
    }
    const flex = buildPremiumNudgeFlexMessage('extra_question');
    try {
      const client = await getLineClient();
      await client.replyMessage({ replyToken, messages: [flex] });
    } catch (error) {
      console.error(
        '[lineWebhook] handleExtraQuestion free guard reply failed:',
        error
      );
    }
    return;
  }

  // 初回利用フラグだけ記録する。
  // 旧フローでは jikkuri / 価格ロック flex をこの1問送信時に同梱していたが、
  // D-15 で「1問回答 → じっくり学ぶ案内 → 1分後に特別価格案内」の段階送信に変更。
  // 同梱送信は onAnswerCreated.maybeSendFirstExtraFollowup に移動した。
  const isFirstExtraQuestion = !userData?.firstExtraQuestionAt;
  if (isFirstExtraQuestion) {
    try {
      await db.doc(`users/${uid}`).set(
        { firstExtraQuestionAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
    } catch (error) {
      console.error(
        '[lineWebhook] firstExtraQuestionAt write failed:',
        error
      );
    }
  }

  await selectAndSendQuestion(uid, {
    replyToken,
    introText: getExtraQuestionIntro(),
    bypassDailyLimit: true,
  });
}

async function handleWeakReviewPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  const { db, FieldValue } = await getDb();
  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  const plan = getUserPlan(userData);

  if (plan !== 'premium') {
    if (!isPremiumEligibleGrade(userData?.grade)) {
      await replyText(
        replyToken,
        PREMIUM_NOT_YET_AVAILABLE_TEXT,
        '(weak review: grade not eligible)'
      );
      return;
    }
    const flex = buildPremiumNudgeFlexMessage('weak_review');
    try {
      const client = await getLineClient();
      await client.replyMessage({ replyToken, messages: [flex] });
    } catch (error) {
      console.error(
        '[lineWebhook] handleWeakReview free guard reply failed:',
        error
      );
    }
    return;
  }

  const testScopeTopics: string[] = Array.isArray(userData?.testScope?.topics)
    ? (userData!.testScope.topics as unknown[]).filter(
        (t): t is string => typeof t === 'string'
      )
    : [];

  // 1 クエリで「誤答経験あり」と「直近3回連続正解（=習得済）」の両方を判定する。
  // limit 300 は 1 日 1 問ペースで約 10 ヶ月分。これを超える heavy user は
  // 古い誤答が漏れる可能性があるが、当面は許容範囲。
  let recentAnswers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
  try {
    const snap = await db
      .collection('answers')
      .where('uid', '==', uid)
      .orderBy('answeredAt', 'desc')
      .limit(300)
      .get();
    recentAnswers = snap.docs;
  } catch (error) {
    console.error(
      '[lineWebhook] handleWeakReview answers query failed:',
      error
    );
    await replyText(
      replyToken,
      '苦手の取得に失敗しました。少し時間を置いて試してください。',
      '(weak_review query error)'
    );
    return;
  }

  // questionId 別に状態を集計（answeredAt 降順で渡ってくる前提）
  const everIncorrect = new Set<string>();
  const recentByQ = new Map<string, boolean[]>(); // 直近3回の isCorrect 配列
  const topicByQ = new Map<string, string>();
  for (const doc of recentAnswers) {
    const qid = doc.get('questionId');
    if (typeof qid !== 'string') continue;
    const isCorrect = doc.get('isCorrect') === true;
    if (!isCorrect) everIncorrect.add(qid);

    const arr = recentByQ.get(qid) ?? [];
    if (arr.length < 3) {
      arr.push(isCorrect);
      recentByQ.set(qid, arr);
    }

    const topic = doc.get('topic');
    if (typeof topic === 'string' && !topicByQ.has(qid)) {
      topicByQ.set(qid, topic);
    }
  }

  // mastered = 直近3回がすべて isCorrect=true
  const masteredIds = new Set<string>();
  for (const [qid, arr] of recentByQ) {
    if (arr.length >= 3 && arr.every((c) => c)) masteredIds.add(qid);
  }

  // 候補: 誤答経験あり AND 習得済でない
  let candidateIds = Array.from(everIncorrect).filter(
    (qid) => !masteredIds.has(qid)
  );

  // 出題範囲フィルタ
  const hadAnyBeforeScope = candidateIds.length > 0;
  if (testScopeTopics.length > 0) {
    candidateIds = candidateIds.filter((qid) => {
      const topic = topicByQ.get(qid);
      return typeof topic === 'string' && testScopeTopics.includes(topic);
    });
  }

  if (candidateIds.length === 0) {
    if (testScopeTopics.length > 0 && hadAnyBeforeScope) {
      await replyText(
        replyToken,
        '出題範囲内ではまだ苦手な問題がありません。範囲を広げてみてね',
        '(weak_review empty in scope)'
      );
      return;
    }
    // 過去誤答があったのに candidateIds が 0 → 全部習得済（苦手克服）
    if (everIncorrect.size > 0) {
      await replyText(
        replyToken,
        getWeakReviewIntro({ cleared: true }),
        '(weak_review cleared all)'
      );
      return;
    }
    await replyText(
      replyToken,
      getWeakReviewIntro({ empty: true }),
      '(weak_review empty)'
    );
    return;
  }

  const questionIds = candidateIds;

  const pickedId = questionIds[Math.floor(Math.random() * questionIds.length)];
  const questionSnap = await db.doc(`questions/${pickedId}`).get();
  if (!questionSnap.exists) {
    console.warn('[lineWebhook] handleWeakReview question gone:', pickedId);
    await replyText(
      replyToken,
      '苦手の出題対象が見つかりませんでした。もう一度押してみてください。',
      '(weak_review question gone)'
    );
    return;
  }

  const question = questionSnap.data() as Question;
  const questionMessage = buildQuestionMessage(pickedId, question);

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [{ type: 'text', text: getWeakReviewIntro() }, questionMessage],
    });
  } catch (error) {
    console.error('[lineWebhook] handleWeakReview reply failed:', error);
    return;
  }

  // dailyQuiz とのバッティング回避のため、直近送信時刻を更新する。
  // 加えて「同じ問題の再出題でも回答できる」よう、回答済みフラグもクリアする。
  try {
    await db.doc(`users/${uid}`).set(
      {
        lastQuestionDeliveredAt: FieldValue.serverTimestamp(),
        lastAnsweredQuestionId: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] handleWeakReview lastDelivered update failed:',
      error
    );
  }
}

async function handleSelectGradePostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (isInitialSetupComplete(userData)) {
    console.warn('[lineWebhook] handleSelectGrade locked (already set):', uid);
    if (replyToken) {
      const storedGrade =
        typeof userData?.grade === 'string' ? userData.grade : '登録済みの学年';
      await replyText(
        replyToken,
        `すでに${storedGrade}で登録済みです。変更したい場合は『設定変更』と送ってください。`,
        '(grade locked)'
      );
    }
    return;
  }

  const grade = params.get('grade');
  if (!grade || !VALID_GRADES.includes(grade as ValidGrade)) {
    console.warn('[lineWebhook] invalid grade in postback:', grade);
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [{ type: 'text', text: 'もう一度学年を選んでください。' }],
        });
      } catch (error) {
        console.error(
          '[lineWebhook] handlePostback reply (invalid grade) failed:',
          error
        );
      }
    }
    return;
  }

  // 学年を保存。教科はユーザーに「歴史」を選んでもらうステップに遷移する
  // （現状は選択肢が歴史のみ。今後 options を増やせば自動で多教科対応になる）。
  try {
    await db.doc(`users/${uid}`).set(
      {
        grade,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] handlePostback firestore write failed:',
      error
    );
  }

  if (!replyToken) {
    console.warn('[lineWebhook] postback event without replyToken');
    return;
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: `${grade}ですね！次は教科を選んでね。`,
        },
        buildSubjectSelectMessage(),
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handlePostback reply failed:', error);
  }
}

async function handleSelectSubjectPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (isInitialSetupComplete(userData)) {
    console.warn(
      '[lineWebhook] handleSelectSubject locked (already set):',
      uid
    );
    if (replyToken) {
      const storedSubject = userData?.subject;
      const label =
        typeof storedSubject === 'string' &&
        VALID_SUBJECTS.includes(storedSubject as ValidSubject)
          ? SUBJECT_LABELS[storedSubject as ValidSubject]
          : '登録済みの教科';
      await replyText(
        replyToken,
        `すでに${label}で登録済みです。変更したい場合は『設定変更』と送ってください。`,
        '(subject locked)'
      );
    }
    return;
  }

  const subject = params.get('subject');
  if (!subject || !VALID_SUBJECTS.includes(subject as ValidSubject)) {
    console.warn('[lineWebhook] invalid subject in postback:', subject);
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [{ type: 'text', text: 'もう一度教科を選んでください。' }],
        });
      } catch (error) {
        console.error(
          '[lineWebhook] handlePostback reply (invalid subject) failed:',
          error
        );
      }
    }
    return;
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        subject,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] handlePostback (subject) firestore write failed:',
      error
    );
  }

  if (!replyToken) {
    console.warn('[lineWebhook] postback event without replyToken');
    return;
  }

  try {
    const subjectLabel = SUBJECT_LABELS[subject as ValidSubject];
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: `${subjectLabel}ですね！最後に、毎日問題を送る時間を選んでね。`,
        },
        buildTimeSelectMessage(),
      ],
    });
  } catch (error) {
    console.error(
      '[lineWebhook] handlePostback (subject) reply failed:',
      error
    );
  }
}

async function handleSelectTimePostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (isInitialSetupComplete(userData)) {
    console.warn('[lineWebhook] handleSelectTime locked (already set):', uid);
    if (replyToken) {
      const storedHour = userData?.preferredHour;
      const label =
        typeof storedHour === 'number' &&
        VALID_HOURS.includes(storedHour as ValidHour)
          ? HOUR_LABELS[storedHour as ValidHour]
          : '登録済みの時間';
      await replyText(
        replyToken,
        `すでに${label}で登録済みです。変更したい場合は『設定変更』と送ってください。`,
        '(time locked)'
      );
    }
    return;
  }

  const hourRaw = params.get('hour');
  const hour = hourRaw ? Number(hourRaw) : NaN;
  if (!VALID_HOURS.includes(hour as ValidHour)) {
    console.warn('[lineWebhook] invalid hour in postback:', hourRaw);
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [{ type: 'text', text: 'もう一度時間を選んでください。' }],
        });
      } catch (error) {
        console.error(
          '[lineWebhook] handlePostback reply (invalid hour) failed:',
          error
        );
      }
    }
    return;
  }

  const validHour = hour as ValidHour;
  try {
    await db.doc(`users/${uid}`).set(
      {
        preferredHour: validHour,
        onboardingState: 'complete',
        onboardingCompletedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] handlePostback (time) firestore write failed:',
      error
    );
  }

  if (!replyToken) {
    console.warn('[lineWebhook] postback event without replyToken');
    return;
  }

  const hourLabel = HOUR_LABELS[validHour];

  // 設定完了サマリーを1問目の前に積む。学年/教科は users doc から再取得する
  // （直前 set した validHour 自体は users doc 反映前なので、ここでは values を直接使う）。
  const storedGrade = userData?.grade;
  const storedSubject = userData?.subject;
  const gradeLabel =
    typeof storedGrade === 'string' &&
    VALID_GRADES.includes(storedGrade as ValidGrade)
      ? storedGrade
      : '';
  const subjectLabel =
    typeof storedSubject === 'string' &&
    VALID_SUBJECTS.includes(storedSubject as ValidSubject)
      ? SUBJECT_LABELS[storedSubject as ValidSubject]
      : '';
  const nickname =
    typeof userData?.nickname === 'string' ? userData.nickname : '';
  const summaryFlex =
    gradeLabel && subjectLabel
      ? buildOnboardingCompleteSummaryFlex({
          gradeLabel,
          subjectLabel,
          hourLabel,
          nickname,
        })
      : null;

  // 配信時間設定時はサマリー flex（「出題範囲を設定する」LIFF ボタン付き）だけを返す。
  // 1問目は LIFF で testScope が初めて保存されたタイミングで `onTestScopeFirstSet`
  // トリガから push する（範囲を設定しなかった場合は翌日の dailyQuiz で配信）。
  try {
    const client = await getLineClient();
    const replyMessages: messagingApi.Message[] = summaryFlex
      ? [summaryFlex as unknown as messagingApi.Message]
      : [
          {
            type: 'text',
            text: `設定完了！明日から${hourLabel}に1問お届けします。`,
          },
        ];
    await client.replyMessage({ replyToken, messages: replyMessages });
  } catch (error) {
    console.error(
      '[lineWebhook] handleSelectTimePostback reply failed:',
      error
    );
  }
}

async function handleAnswerPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const questionId = params.get('questionId');
  const choiceRaw = params.get('choice');
  const choice = choiceRaw !== null ? Number(choiceRaw) : NaN;

  if (!questionId || !Number.isInteger(choice) || choice < 0 || choice > 3) {
    console.warn(
      '[lineWebhook] handleAnswer invalid params:',
      params.toString()
    );
    if (replyToken) {
      await replyText(
        replyToken,
        'もう一度選択肢を選んでください。',
        '(invalid params)'
      );
    }
    return;
  }

  if (!replyToken) {
    return;
  }

  const { db, FieldValue } = await getDb();
  let currentUserData: Record<string, unknown> | undefined;

  // 重複回答チェック
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    const userData = userSnap.data();
    currentUserData = userData;
    if (userData?.lastAnsweredQuestionId === questionId) {
      console.warn('[lineWebhook] handleAnswer duplicate:', uid, questionId);
      await replyText(replyToken, 'すでに回答済みです。', '(duplicate answer)');
      return;
    }
  } catch (error) {
    console.error('[lineWebhook] handleAnswer user read failed:', error);
    // 読み込み失敗時は続行（保険）
  }

  let questionSnap;
  try {
    questionSnap = await db.doc(`questions/${questionId}`).get();
  } catch (error) {
    console.error('[lineWebhook] handleAnswer firestore read failed:', error);
    await replyText(replyToken, 'エラーが発生しました。', '(read error)');
    return;
  }

  if (!questionSnap.exists) {
    console.warn('[lineWebhook] handleAnswer question not found:', questionId);
    await replyText(replyToken, '問題が見つかりませんでした。', '(not found)');
    return;
  }

  const question = questionSnap.data() as Question;
  const isCorrect = choice === question.correctChoiceId;
  const correctLabel = question.choices[question.correctChoiceId];

  // 連続日数・累計問題数・連続正解数は `users.stats`（onAnswerCreated が
  // transaction で維持）を真値として参照する。直近 answers の limit クエリで
  // 再計算する旧実装は値が頭打ちになるため廃止。
  const prevStats =
    (currentUserData?.stats as Record<string, unknown> | undefined) ?? undefined;
  const { correctStreak, dayStreak, isMilestoneDay } =
    computeAnswerStreaksFromStats(prevStats, isCorrect);

  const feedbackBody = isCorrect
    ? getCorrectFeedback({ correctStreak, dayStreak, isMilestoneDay })
    : getIncorrectFeedback({ correctLabel });
  // 旧版は「⭕正解+励まし」と「📖解説」を 2 通の text に分けて送っていたが、
  // ユーザー体感が冗長なため 1 通に統合（2026-05-31）。
  const combinedText = isCorrect
    ? `⭕ 正解！\n${feedbackBody}\n\n📖 解説\n${question.explanation}`
    : `❌ 不正解…\n${feedbackBody}\n\n📖 解説\n${question.explanation}`;
  const nextStepFlex = buildPostAnswerNextStepFlexMessage({
    topicName: question.topic,
  });

  // 初回回答時のトライアル案内 flex（first_answer）は、reply には積まず
  // `onAnswerCreated` が解説直後に即 push する設計。
  // ここでは nextStep のみ reply に積む。

  try {
    const client = await getLineClient();
    const replyMessages: LineMessage[] = [
      { type: 'text', text: combinedText },
    ];
    if (nextStepFlex) {
      replyMessages.push(nextStepFlex as LineMessage);
    }
    await client.replyMessage({
      replyToken,
      messages: replyMessages as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] handleAnswer reply failed:', error);
  }

  try {
    await db.collection('answers').add({
      uid,
      questionId,
      choice,
      isCorrect,
      subject: question.subject,
      grade: question.grade,
      topic: question.topic,
      answeredAt: FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('[lineWebhook] handleAnswer answers write failed:', error);
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        lastAnsweredQuestionId: questionId,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] handleAnswer lastAnsweredQuestionId update failed:',
      error
    );
  }
}

async function replyText(
  replyToken: string,
  text: string,
  context: string
): Promise<void> {
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [{ type: 'text', text }],
    });
  } catch (error) {
    console.error(`[lineWebhook] replyText failed ${context}:`, error);
  }
}

type LineMessage = { type: string } & Record<string, unknown>;

interface SendOptions {
  replyToken?: string;
  introText?: string;
  trailingText?: string;
  isInitialSetup?: boolean;
  /** true のとき「当日送信済みなら早期 return」を行わず、強制的に1問送る。プレミアムの『追加で解く』向け */
  bypassDailyLimit?: boolean;
  /** 問題本体の前に差し込みたい flex/text。初回設定の完了サマリーカードに使う。 */
  prependMessages?: LineMessage[];
  /** 問題と trailingText の後ろに差し込みたい flex/text。初回『追加で解く』のフォローアップ等に使う。 */
  appendMessages?: LineMessage[];
  /** push 経路で deliveryStats に記録する種別。replyMessage 時は計上しない。 */
  pushType?: PushType;
}

const RECENT_QUESTION_LIMIT = 10;

export async function selectAndSendQuestion(
  uid: string,
  options: SendOptions = {}
): Promise<void> {
  const {
    replyToken,
    introText,
    trailingText,
    isInitialSetup,
    bypassDailyLimit,
    prependMessages,
    appendMessages,
    pushType = 'dailyQuiz',
  } = options;
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (!userData) {
    console.warn('[lineWebhook] selectAndSendQuestion: user not found', uid);
    return;
  }

  // 公式 LINE をブロックしているユーザーには push しない。
  // reply 経路（replyToken あり）はユーザー自身が発言している＝事実上の
  // 再エンゲージメントなので、ここでは弾かず通常通り reply させる。
  if (!replyToken && userData.blocked === true) {
    console.log(
      `[lineWebhook] selectAndSendQuestion skipped (user is blocked): ${uid}`
    );
    return;
  }

  const grade = userData.grade as ValidGrade | undefined;
  const subject = userData.subject as ValidSubject | undefined;
  if (!grade || !subject) {
    console.warn(
      '[lineWebhook] selectAndSendQuestion: missing grade/subject',
      uid,
      grade,
      subject
    );
    return;
  }

  // 当日送信済みチェック（JST 暦日）
  let lastDeliveredDate: Date | undefined;
  try {
    const stored = userData.lastQuestionDeliveredAt;
    if (stored && typeof stored.toDate === 'function') {
      lastDeliveredDate = stored.toDate();
    }
  } catch (error) {
    console.warn(
      '[lineWebhook] selectAndSendQuestion: lastQuestionDeliveredAt parse failed:',
      error
    );
  }
  const lastDeliveredJst = getJstDateString(lastDeliveredDate);
  const todayJst = getJstDateString(new Date());
  const alreadyDeliveredToday =
    lastDeliveredJst !== null && lastDeliveredJst === todayJst;

  if (alreadyDeliveredToday && !bypassDailyLimit) {
    const storedHour = userData.preferredHour;
    const hourLabel =
      typeof storedHour === 'number' &&
      VALID_HOURS.includes(storedHour as ValidHour)
        ? HOUR_LABELS[storedHour as ValidHour]
        : '次回';
    if (replyToken) {
      const text = isInitialSetup
        ? `設定を更新したよ。次の問題は明日の${hourLabel}にお届けするね`
        : getAlreadyDeliveredText(hourLabel);
      // 無料ユーザーが「もう1問」と思って踏んだ最も顕在化したリードなので、
      // free 判定のときだけプレミアム誘導 flex を続けて送る。
      // 初回セットアップ直後（isInitialSetup）はオンボーディング体験を優先して flex は送らない。
      const plan = getUserPlan(userData);
      const gradeEligible = isPremiumEligibleGrade(userData.grade);
      if (!isInitialSetup && plan === 'free' && gradeEligible) {
        try {
          const client = await getLineClient();
          await client.replyMessage({
            replyToken,
            messages: [
              { type: 'text' as const, text },
              buildPremiumNudgeFlexMessage('extra_question'),
            ],
          });
        } catch (error) {
          console.error(
            '[lineWebhook] selectAndSendQuestion already-delivered+nudge reply failed:',
            error
          );
        }
      } else {
        await replyText(replyToken, text, '(already delivered today)');
      }
    } else {
      console.log(
        `[lineWebhook] selectAndSendQuestion skipped (already delivered today): ${uid}`
      );
    }
    return;
  }

  const recentIds: string[] = Array.isArray(userData.recentQuestionIds)
    ? userData.recentQuestionIds
    : [];

  // 登録後フロー: 配信時間設定 → 出題範囲設定 → onTestScopeFirstSet が当関数を呼ぶ。
  // この時点で testScope は LIFF で直前に保存されたものなので、初回でも必ず尊重する。
  // testScope 未設定（範囲設定をスキップしたユーザー等）の場合のみ全範囲から出題。
  const testScopeTopics: string[] = Array.isArray(userData.testScope?.topics)
    ? (userData.testScope.topics as unknown[]).filter(
        (t): t is string => typeof t === 'string'
      )
    : [];

  const snap = await db
    .collection('questions')
    .where('subject', '==', subject)
    .where('grade', '==', grade)
    .get();

  if (snap.empty) {
    console.warn(
      '[lineWebhook] selectAndSendQuestion: no questions',
      subject,
      grade
    );
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [
            { type: 'text', text: '準備中です。少しお待ちください。' },
          ],
        });
      } catch (error) {
        console.error(
          '[lineWebhook] selectAndSendQuestion empty reply failed:',
          error
        );
      }
    }
    return;
  }

  // 出題範囲が設定されていれば topic で絞り込む
  const scopedDocs =
    testScopeTopics.length > 0
      ? snap.docs.filter((d) => {
          const topic = d.get('topic');
          return typeof topic === 'string' && testScopeTopics.includes(topic);
        })
      : snap.docs;

  if (testScopeTopics.length > 0 && scopedDocs.length === 0) {
    console.warn(
      '[lineWebhook] selectAndSendQuestion: no questions in testScope',
      uid,
      testScopeTopics
    );
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [
            {
              type: 'text',
              text: '今の出題範囲では出題できる問題が見つかりませんでした。リッチメニュー「出題範囲設定」から範囲を見直してください。',
            },
          ],
        });
      } catch (error) {
        console.error(
          '[lineWebhook] selectAndSendQuestion testScope empty reply failed:',
          error
        );
      }
    }
    return;
  }

  const candidates = scopedDocs.filter((d) => !recentIds.includes(d.id));
  const pool = candidates.length > 0 ? candidates : scopedDocs;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  const question = picked.data() as Question;

  const updatedRecent = [
    ...recentIds.filter((id) => id !== picked.id),
    picked.id,
  ].slice(-RECENT_QUESTION_LIMIT);
  try {
    await db.doc(`users/${uid}`).set(
      {
        recentQuestionIds: updatedRecent,
        lastQuestionDeliveredAt: FieldValue.serverTimestamp(),
        // 同じ問題が再出題された場合に「すでに回答済み」ブロックが発生しないよう、
        // 新しい問題を送るタイミングで前回の回答済みフラグを必ずクリアする。
        lastAnsweredQuestionId: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[lineWebhook] selectAndSendQuestion recent update failed:',
      error
    );
  }

  const messages: LineMessage[] = [];

  // 初回設定完了サマリーなど、問題本体の前に挟みたい flex/text を最初に積む。
  if (prependMessages && prependMessages.length > 0) {
    for (const m of prependMessages) messages.push(m);
  }

  // 呼び出し元が introText を渡していなければ、push 経路（毎日配信）と判断して
  // ユーザー状態に合うランダムな intro を生成する。reply 経路（追加で解く・苦手復習・
  // 初期設定）は呼び出し元が introText を必ず渡すため、ここでは上書きしない。
  let resolvedIntroText = introText;
  if (!resolvedIntroText && !replyToken) {
    try {
      const nickname =
        typeof userData.nickname === 'string' ? userData.nickname : undefined;
      resolvedIntroText = await computeDailyIntro(uid, db, nickname);
    } catch (error) {
      console.error(
        '[lineWebhook] selectAndSendQuestion intro compute failed:',
        error
      );
    }
  }

  // 毎日配信（push 経路）は intro を問題 flex の中に埋め込んで 1 通にまとめる。
  // reply 経路は呼び出し元が intro を「別メッセージとして見せたい」前提で渡してくるため
  // 従来通り text + flex の 2 通構成を維持する。
  const embedIntroIntoCard = !replyToken && Boolean(resolvedIntroText);
  const questionMessage = buildQuestionMessage(
    picked.id,
    question,
    embedIntroIntoCard ? resolvedIntroText : undefined
  );

  if (resolvedIntroText && !embedIntroIntoCard) {
    messages.push({ type: 'text', text: resolvedIntroText });
  }
  messages.push(questionMessage as unknown as LineMessage);
  if (trailingText) {
    messages.push({ type: 'text', text: trailingText });
  }
  if (appendMessages && appendMessages.length > 0) {
    for (const m of appendMessages) messages.push(m);
  }

  try {
    const client = await getLineClient();
    const sdkMessages = messages as unknown as messagingApi.Message[];
    if (replyToken) {
      await client.replyMessage({ replyToken, messages: sdkMessages });
    } else {
      const lineUserId =
        typeof userData.lineUserId === 'string' ? userData.lineUserId : '';
      if (!lineUserId) {
        console.error(
          '[lineWebhook] selectAndSendQuestion: missing lineUserId for push',
          uid
        );
        return;
      }
      await client.pushMessage({ to: lineUserId, messages: sdkMessages });
      await recordPushDelivery(pushType);
    }
  } catch (error) {
    console.error('[lineWebhook] selectAndSendQuestion send failed:', error);
  }
}

function buildQuestionMessage(
  questionId: string,
  q: Question,
  introText?: string
) {
  const subjectLabel = SUBJECT_LABELS[q.subject];
  const headerColor = SUBJECT_HEADER_COLORS[q.subject];
  const bodyContents: messagingApi.FlexComponent[] = [];
  if (introText) {
    bodyContents.push({
      type: 'text' as const,
      text: introText,
      wrap: true,
      size: 'sm' as const,
      color: '#6B7280',
    });
    bodyContents.push({
      type: 'separator' as const,
      margin: 'md' as const,
      color: '#E5E7EB',
    });
  }
  bodyContents.push({
    type: 'text' as const,
    text: q.text,
    wrap: true,
    weight: 'bold' as const,
    size: 'lg' as const,
    color: '#111827',
    align: 'start' as const,
    ...(introText ? { margin: 'md' as const } : {}),
  });
  return {
    type: 'flex' as const,
    altText: `${subjectLabel}｜${q.grade}: ${q.text.slice(0, 40)}`,
    contents: {
      type: 'bubble' as const,
      size: 'kilo' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: headerColor,
        paddingAll: '14px',
        contents: [
          {
            type: 'text' as const,
            text: `${subjectLabel}｜${q.grade}`,
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'md' as const,
            align: 'start' as const,
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        contents: bodyContents,
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        // box + action のカード型タップ要素で構成。Flex の button は label を
        // 1 行で省略表示してしまうため、長い選択肢が読めなくなる。
        // text に wrap: true を付けて複数行表示できるようにする。
        contents: q.choices.map((choice, i) => ({
          type: 'box' as const,
          layout: 'horizontal' as const,
          paddingAll: '10px',
          cornerRadius: 'md' as const,
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB',
          borderWidth: '1px',
          action: {
            type: 'postback' as const,
            label: choice.slice(0, 40),
            data: `type=answer&questionId=${questionId}&choice=${i}`,
            displayText: choice,
          },
          contents: [
            {
              type: 'text' as const,
              text: String.fromCharCode(65 + i),
              flex: 0,
              size: 'sm' as const,
              weight: 'bold' as const,
              color: '#F59E0B',
              gravity: 'top' as const,
            },
            {
              type: 'text' as const,
              text: choice,
              flex: 1,
              wrap: true,
              size: 'sm' as const,
              color: '#111827',
              margin: 'md' as const,
            },
          ],
        })),
      },
      styles: {
        header: { separator: false },
        body: { separator: true, separatorColor: '#E5E7EB' },
        footer: { separator: true, separatorColor: '#E5E7EB' },
      },
    },
  };
}
