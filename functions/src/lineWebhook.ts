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
import {
  supportsEraFlow,
  parseSel,
  toggleEra,
  normalizeSel,
  expandErasToTopics,
  buildPickConfirmText,
  buildCommitText,
  buildScopeQuickItems,
  getEraMetas,
  type ScopeQuickItem,
} from './lineScopeFlow';
import { recordPushDelivery } from './deliveryStats';
import type { PushType } from './deliveryStatsTypes';
import type { LastQuestionSnapshot } from './userDocTypes';

interface LineEvent {
  type: string;
  source?: { type?: string; userId?: string };
  replyToken?: string;
  postback?: { data: string };
  message?: {
    type?: string;
    text?: string;
    /** image / audio / video / file メッセージの ID（コンテンツ取得に使う）。 */
    id?: string;
    /** audio / video の長さ（ミリ秒）。音声の長さ上限チェックに使う。 */
    duration?: number;
    /** コンテンツ提供元。external の場合は originalContentUrl から取得する。 */
    contentProvider?: { type?: string; originalContentUrl?: string };
  };
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

/** 学年文字列（'中1'）→ スコープロジック用の数値（1）。不正値は null。 */
function gradeToScopeNumber(grade: unknown): 1 | 2 | 3 | null {
  if (grade === '中1') return 1;
  if (grade === '中2') return 2;
  if (grade === '中3') return 3;
  return null;
}
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
}) {
  const thanksText = '登録ありがとう！設定できたよ🎉';
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
            text:
              `📅 はじめの2週間は毎日1問お届け！\n` +
              `そのあとは週3回（月・水・金）に届きます。`,
            wrap: true,
            size: 'xs' as const,
            color: '#111827',
            margin: 'md' as const,
          },
          {
            type: 'text' as const,
            text: '配信がない日も、メニューの「1問解く」を押せばいつでも問題に挑戦できるよ。',
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
            text: '📖 使い方はかんたん',
            wrap: true,
            size: 'xs' as const,
            color: '#111827',
            weight: 'bold' as const,
            margin: 'md' as const,
          },
          {
            type: 'text' as const,
            text:
              `・届いた問題は、選択肢をタップするだけ。すぐに正解と解説が出ます。\n` +
              `・下のメニューから「苦手を復習」「じっくり学ぶ（暗記カード・クイズ）」も使えます。`,
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
            margin: 'sm' as const,
          },
          {
            type: 'text' as const,
            text:
              `🤖 勉強の質問は、このトークにそのまま送ればAIが答えるよ。\n` +
              `写真や音声メッセージでもOK（例：問題の写真を送って「これ教えて」）。`,
            wrap: true,
            size: 'xs' as const,
            color: '#374151',
            margin: 'sm' as const,
          },
          {
            type: 'text' as const,
            text: '※AIなので、たまに答えが正確でないこともあるよ。参考として使ってね。',
            wrap: true,
            size: 'xxs' as const,
            color: '#9CA3AF',
            margin: 'sm' as const,
          },
          {
            type: 'separator' as const,
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
              type: 'postback' as const,
              label: '出題範囲を設定する',
              data: 'type=scope_start',
              displayText: '出題範囲を設定する',
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

/**
 * 「おかえり」復帰フローを出す対象とみなす最小の非アクティブ日数（JST 暦日）。
 * 最後に問題を解いた日からこの日数以上空いているユーザーだけに、復帰キーワードで
 * 「おかえり + 1問」を返す。8 日 = 休眠（dormant）以降に相当。
 */
const RESTART_WELCOME_MIN_INACTIVE_DAYS = 8;

/**
 * 復帰キーワードに「おかえり + 1問」で応答してよいユーザーか。
 * 実際に一定期間 問題を解いていない（lastAnsweredAt が閾値以上前）場合のみ true。
 * 一度も回答がない / 直近に回答している場合は false（→ AI チャットが自然に応答）。
 */
async function isEligibleForRestartWelcome(
  userData: Record<string, unknown> | undefined
): Promise<boolean> {
  const raw = userData?.lastAnsweredAt as
    | { toDate?: () => Date }
    | undefined
    | null;
  if (!raw || typeof raw.toDate !== 'function') return false;
  const { daysBetweenJst } = await import('./userStatus');
  const inactiveDays = daysBetweenJst(raw.toDate(), new Date());
  return inactiveDays >= RESTART_WELCOME_MIN_INACTIVE_DAYS;
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
// 出題範囲設定は LIFF を廃止し、通常ブラウザページ /scope へ置き換えた
// （LINE 内蔵ブラウザでの LIFF 初期化が不安定だったため）。認証は既存の
// LINE Login OAuth（/welcome?next=/scope → /auth/line/callback）を利用する。
//
// ⚠️ `openExternalBrowser=1` は必須。LINE アプリ内ブラウザでは Firebase Auth の
// 永続化（IndexedDB）書き込みがハングし「LINEでログイン中...」のまま固まるため、
// このパラメータで端末の既定ブラウザ（Safari/Chrome）を強制起動し、Web版と同じ
// 実績ある OAuth/永続化環境でログインさせる。
// env が旧 LIFF URL で上書きされていないよう、既定値を通常 URL にする。
const TEST_RANGE_SCOPE_URL =
  process.env.LINE_SCOPE_URL ??
  'https://line.chatstudy.jp/scope?openExternalBrowser=1';
const LIFF_UNITS_URL =
  process.env.LIFF_UNITS_URL ?? 'https://liff.line.me/2009587166-LjyCza2c';

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

  // 画像・音声は AI チャットボット（Gemini）にマルチモーダル入力として渡す。
  // テキスト系コマンド（設定変更 / 復帰キーワード等）の判定は不要なので先に分岐。
  if (messageType === 'image' || messageType === 'audio') {
    await handleMediaMessage(event, messageType);
    return;
  }

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

  const uid = buildUid(event);
  let userData: Record<string, unknown> | undefined;
  if (uid) {
    try {
      const { db } = await getDb();
      const snap = await db.doc(`users/${uid}`).get();
      userData = snap.data();

      // 休眠ユーザー除外システム（§C-3）対応:
      // 「再開」「またやりたい」「久しぶり」等の復帰キーワードを検知したら、
      // status を active に戻して即座に 1 問送信する。
      // onboarding 中・既存コマンドより後に評価して優先順位を守る。
      //
      // ただし「おかえり」フローは、実際にしばらく問題を解いていないユーザー
      // （最後の回答から RESTART_WELCOME_MIN_INACTIVE_DAYS 日以上）だけに出す。
      // 直近に学習しているユーザーやまだ一度も回答がないユーザーが復帰語を
      // 含むメッセージ（「また明日」「ごめん」等）を送っても誤爆させず、
      // そのまま下の AI チャットボットに自然に応答させる。
      const { detectRestartIntent } = await import('./keywordMatcher');
      if (
        detectRestartIntent(text) &&
        (await isEligibleForRestartWelcome(userData))
      ) {
        await handleRestartIntent(
          uid,
          replyToken,
          event,
          (userData?.status as string | undefined) ?? null
        );
        return;
      }
    } catch (error) {
      console.error('[lineWebhook] handleMessage state read failed:', error);
    }
  }

  // どの既存コマンドにもマッチしなかった自由文は、サービス知識を内蔵した
  // フォールバック AI チャットボット（Gemini）が応答する。レート制限・履歴・
  // 計測は handleAiChat 内で完結。userData は上で取得済みのものを渡し、
  // 追加の Firestore read を避ける。
  if (uid && replyToken) {
    try {
      const { handleAiChat } = await import('./aiChat');
      await handleAiChat(uid, replyToken, text, userData as never);
      return;
    } catch (error) {
      console.error('[lineWebhook] handleAiChat failed:', error);
    }
  }

  console.warn(
    '[lineWebhook] handleMessage: unhandled text:',
    text.slice(0, 30)
  );
}

// ── 画像・音声メッセージ → AI チャットボット（マルチモーダル） ─────────────
//
// LINE の image / audio メッセージは実体がイベントに載らないため、messageId で
// Messaging API の content エンドポイントからバイナリを取得し、base64 にして
// handleAiChat へ渡す。コスト・レイテンシ対策として音声は長さ上限を設ける。

/** 音声の長さ上限（ミリ秒）。これを超えると Gemini 呼び出し前に断る（課金ゼロ）。 */
const MAX_AUDIO_DURATION_MS = 60_000;
/** ダウンロードするコンテンツの最大バイト数（base64 で約 1.33 倍に膨らむ点に留意）。 */
const MAX_MEDIA_BYTES = 8 * 1024 * 1024;

const AUDIO_TOO_LONG_TEXT =
  'ごめんね、聞き取れる音声は60秒までなんだ🎤 もう少し短く録音して送ってくれる？';
const MEDIA_ERROR_TEXT =
  'ごめんね、送ってくれたファイルをうまく読み取れなかったみたい💦 もう一度試してみてね。';

/**
 * LINE のメッセージコンテンツ（画像・音声の実体）を取得して base64 で返す。
 * contentProvider が external の場合は originalContentUrl から取得する。
 * @throws サイズ超過 / HTTP エラー / 取得元不明のとき
 */
async function fetchLineMessageContent(message: {
  id?: string;
  contentProvider?: { type?: string; originalContentUrl?: string };
}): Promise<{ data: string; mimeType: string }> {
  const provider = message.contentProvider;
  let url: string;
  const headers: Record<string, string> = {};

  if (provider?.type === 'external' && provider.originalContentUrl) {
    url = provider.originalContentUrl;
  } else {
    if (!message.id) {
      throw new Error('message id is missing');
    }
    const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN || '';
    if (!token) {
      throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN is not set');
    }
    url =
      'https://api-data.line.me/v2/bot/message/' +
      `${encodeURIComponent(message.id)}/content`;
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`content fetch HTTP ${res.status}`);
  }
  // ダウンロード前に content-length で粗くガード（無い場合は読み込み後に判定）。
  const declaredLen = Number(res.headers.get('content-length') || 0);
  if (declaredLen && declaredLen > MAX_MEDIA_BYTES) {
    throw new Error(`content too large: ${declaredLen}`);
  }
  const headerMime =
    res.headers.get('content-type')?.split(';')[0]?.trim() || '';
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.byteLength > MAX_MEDIA_BYTES) {
    throw new Error(`content too large: ${buf.byteLength}`);
  }
  return { data: buf.toString('base64'), mimeType: headerMime };
}

/**
 * 画像・音声メッセージを AI チャットボットに渡す。
 * - 音声は長さ上限を超えたらダウンロードせず断る（課金ゼロ）。
 * - MIME は LINE の形式が決まっているため、種別から確実なものを与える
 *   （画像=image/jpeg、音声=audio/mp4 を基本に、ヘッダ優先で補正）。
 */
async function handleMediaMessage(
  event: LineEvent,
  messageType: 'image' | 'audio'
): Promise<void> {
  const message = event.message;
  const replyToken = event.replyToken;
  const uid = buildUid(event);
  if (!message || !replyToken || !uid) {
    console.warn('[lineWebhook] handleMediaMessage: missing message/token/uid');
    return;
  }

  // 音声は長さ上限チェック（ダウンロード前 = 課金ゼロで弾く）。
  if (
    messageType === 'audio' &&
    typeof message.duration === 'number' &&
    message.duration > MAX_AUDIO_DURATION_MS
  ) {
    try {
      const client = await getLineClient();
      await client.replyMessage({
        replyToken,
        messages: [{ type: 'text', text: AUDIO_TOO_LONG_TEXT }],
      });
    } catch (error) {
      console.error('[lineWebhook] audio-too-long reply failed:', error);
    }
    return;
  }

  // userData を 1 回 read（handleAiChat にも渡して追加 read を避ける）。
  let userData: Record<string, unknown> | undefined;
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    userData = snap.data();
  } catch (error) {
    console.error('[lineWebhook] handleMediaMessage state read failed:', error);
  }

  // 早期レート上限ガード: 1日上限に達していれば、コンテンツのダウンロードも
  // Gemini 呼び出しもせず固定文で断る（上限判定に必要な上の 1 read のみで完結）。
  try {
    const { getDailyLimit, getJstDate, evaluateRateLimit } = await import(
      './aiChatCore'
    );
    const { LIMIT_REACHED_TEXT } = await import('./aiChat');
    const plan = getUserPlan(userData);
    const aiChat = (userData as { aiChat?: Parameters<typeof evaluateRateLimit>[0] })
      ?.aiChat;
    const { limited } = evaluateRateLimit(
      aiChat,
      getJstDate(new Date()),
      getDailyLimit(plan)
    );
    if (limited) {
      const client = await getLineClient();
      await client.replyMessage({
        replyToken,
        messages: [{ type: 'text', text: LIMIT_REACHED_TEXT }],
      });
      return;
    }
  } catch (error) {
    // ガードでの失敗は致命的ではない。ログのみ残し、通常フローへ進める。
    console.error('[lineWebhook] media rate-limit guard failed:', error);
  }

  // コンテンツ取得（失敗時はフォールバック文）。
  let content: { data: string; mimeType: string };
  try {
    content = await fetchLineMessageContent(message);
  } catch (error) {
    console.error('[lineWebhook] fetchLineMessageContent failed:', error);
    try {
      const client = await getLineClient();
      await client.replyMessage({
        replyToken,
        messages: [{ type: 'text', text: MEDIA_ERROR_TEXT }],
      });
    } catch (replyError) {
      console.error('[lineWebhook] media-error reply failed:', replyError);
    }
    return;
  }

  // Gemini に渡す MIME を決定（LINE の形式は既知なので種別から確実に）。
  let mimeType: string;
  if (messageType === 'image') {
    mimeType = content.mimeType.startsWith('image/')
      ? content.mimeType
      : 'image/jpeg';
  } else {
    // LINE の音声は m4a（AAC/MP4 コンテナ）。Gemini には audio/mp4 で渡す。
    mimeType = 'audio/mp4';
  }

  try {
    const { handleAiChat } = await import('./aiChat');
    await handleAiChat(uid, replyToken, '', userData as never, [
      { mimeType, data: content.data },
    ]);
  } catch (error) {
    console.error('[lineWebhook] handleAiChat (media) failed:', error);
  }
}

/**
 * 復帰意思を検知したユーザーの status を active に戻し、おかえりメッセージと
 * 1 問を送信する。1 日に複数回マッチしてもサーバー側の挙動は冪等
 * （status が既に active なら遷移処理は no-op）。
 */
/**
 * Win-back メッセージのワンタップ CTA（postback type=restart）。
 * 明示タップなので復帰キーワードの誤爆防止ゲート（isEligibleForRestartWelcome）は
 * 通さず、無条件で「おかえり + 1問」フローへ流す。これにより Day-3（at-risk・
 * 4〜7日）の受信者もキーワードを打たずに 1 タップで復帰できる。
 * previousStatus は funnel context 用に 1 read で取得（postback は reply 課金対象外）。
 */
async function handleRestartPostback(
  uid: string,
  replyToken: string | undefined,
  event: LineEvent
): Promise<void> {
  let previousStatus: string | null = null;
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    previousStatus = (snap.data()?.status as string | undefined) ?? null;
  } catch (error) {
    console.warn('[lineWebhook] restart postback status read failed:', error);
  }
  await handleRestartIntent(uid, replyToken, event, previousStatus, 'winback_cta');
}

async function handleRestartIntent(
  uid: string,
  replyToken: string | undefined,
  event: LineEvent,
  previousStatus: string | null = null,
  source: 'keyword' | 'winback_cta' = 'keyword'
): Promise<void> {
  console.log(
    `[lineWebhook] restart intent detected for ${uid} (source=${source})`
  );

  // 復帰（再活性化）を funnel に記録（retention 計測の盲点だった）。
  // 失敗しても本体フロー（status reset + おかえり + 1問）は止めない。
  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('restart_intent_detected', uid, {
      previousStatus,
      source,
    });
  } catch (error) {
    console.warn('[lineWebhook] restart intent funnel log failed:', error);
  }

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

  if (type === 'restart') {
    await handleRestartPostback(uid, replyToken, event);
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

  if (type === 'scope_start') {
    await handleScopeStartPostback(uid, replyToken);
    return;
  }

  if (type === 'scope_pick') {
    await handleScopePickPostback(uid, replyToken, params);
    return;
  }

  if (type === 'scope_commit') {
    await handleScopeCommitPostback(uid, replyToken, params);
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

// 「出題範囲設定」エントリ（リッチメニュー / オンボ完了flex / 回答後ナッジ）は
// すべてこのトーク内フロー（Quick Reply 逐次選択）を起動する。
async function handleTestRangeMenuPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  await handleScopeStartPostback(uid, replyToken);
}

/** ScopeQuickItem[] を LINE の quickReply オブジェクトに変換。 */
function toLineQuickReply(items: ScopeQuickItem[]): messagingApi.QuickReply {
  return {
    items: items.map((item) =>
      item.url
        ? {
            type: 'action' as const,
            action: {
              type: 'uri' as const,
              label: item.label,
              uri: item.url,
            },
          }
        : {
            type: 'action' as const,
            action: {
              type: 'postback' as const,
              label: item.label,
              data: item.data ?? '',
              // displayText は省略（ユーザー側エコーを出さず吹き出しを増やさない）
            },
          }
    ),
  };
}

/**
 * 範囲設定の最初のガイド（Flex カード）。手順を丁寧に案内し、下に Quick Reply の
 * 時代チップを並べる（チップは LINE 仕様で装飾不可なのでカード側で説明する）。
 * design-guide 準拠（amber-500 / グラデ・影なし）。
 */
function buildScopeGuideFlex(subject: string, grade: number) {
  const metas = getEraMetas(subject, grade);
  // 早見表（タップ不可の参考リスト）。チェックボックスに見えないよう、ボタン風の
  // マーカー（▫️ 等）は使わず、グレーの本文テキストとして表示する。
  const eraRows = metas.flatMap((m) => [
    {
      type: 'text' as const,
      text: `・${m.shortName}${m.whenLabel ? `（${m.whenLabel}）` : ''}`,
      wrap: true,
      size: 'sm' as const,
      color: '#4B5563',
      margin: 'sm' as const,
    },
    ...(m.keyTerms
      ? [
          {
            type: 'text' as const,
            text: `　${m.keyTerms}`,
            wrap: true,
            size: 'xs' as const,
            color: '#9CA3AF',
          },
        ]
      : []),
  ]);

  const step = (label: string, text: string) => ({
    type: 'box' as const,
    layout: 'baseline' as const,
    spacing: 'sm' as const,
    contents: [
      {
        type: 'text' as const,
        text: label,
        size: 'sm' as const,
        weight: 'bold' as const,
        color: '#F59E0B',
        flex: 0,
      },
      {
        type: 'text' as const,
        text,
        size: 'sm' as const,
        color: '#111827',
        wrap: true,
        flex: 1,
      },
    ],
  });

  return {
    type: 'flex' as const,
    altText: 'テスト範囲を選ぼう（画面下のボタンをタップ）',
    contents: {
      type: 'bubble' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#F59E0B',
        paddingAll: '16px',
        contents: [
          {
            type: 'text' as const,
            text: '🎯 テスト範囲をえらぼう',
            color: '#FFFFFF',
            weight: 'bold' as const,
            size: 'lg' as const,
          },
          {
            type: 'text' as const,
            text: '習ったところから毎日の1問が届くよ',
            color: '#FFFFFF',
            size: 'xs' as const,
            margin: 'sm' as const,
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
            text: 'かんたん3ステップ',
            size: 'sm' as const,
            weight: 'bold' as const,
            color: '#111827',
          },
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            spacing: 'sm' as const,
            contents: [
              step('①', 'この画面のいちばん下に出るボタンをタップ → 習った時代を選ぶ（タップした瞬間に保存）'),
              step('②', 'いくつでも選べるよ。もう一度タップで取り消しもOK'),
              step('③', '終わったら「これで決定」をタップ'),
            ],
          },
          {
            type: 'separator' as const,
            margin: 'lg' as const,
          },
          {
            type: 'text' as const,
            text: '📖 時代の早見表（どれを習ったかの確認用）',
            size: 'xs' as const,
            weight: 'bold' as const,
            color: '#111827',
            wrap: true,
            margin: 'lg' as const,
          },
          {
            type: 'text' as const,
            text: '※ ここはタップできません。時期はだいたいの目安だよ。',
            size: 'xxs' as const,
            color: '#9CA3AF',
            wrap: true,
          },
          ...eraRows,
          // 「選ぶのは下のボタン」を強調する誘導枠（操作の入口を1か所に）。
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            backgroundColor: '#FFF7ED',
            cornerRadius: 'md' as const,
            paddingAll: '14px',
            margin: 'lg' as const,
            contents: [
              {
                type: 'text' as const,
                text: '👇 選ぶときは、この下のボタンをタップ',
                size: 'sm' as const,
                weight: 'bold' as const,
                color: '#B45309',
                wrap: true,
                align: 'center' as const,
              },
              {
                type: 'text' as const,
                text: '（メッセージのいちばん下に横並びで出るよ）',
                size: 'xxs' as const,
                color: '#B45309',
                wrap: true,
                align: 'center' as const,
                margin: 'sm' as const,
              },
            ],
          },
          {
            type: 'text' as const,
            text: '🔧 単元ごとに細かく決めたいときは「詳しく設定」のボタンからどうぞ。',
            size: 'xs' as const,
            color: '#9CA3AF',
            wrap: true,
            margin: 'lg' as const,
          },
        ],
      },
    },
  };
}

/**
 * 範囲設定フロー開始: 学年・教科を確認し、ガイド Flex + Quick Reply を reply。
 * 学年・教科は選択済み前提（オンボ完了後）。未対応教科・未設定は /scope へフォールバック。
 */
async function handleScopeStartPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  let grade: number | null = null;
  let subject: string | undefined;
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    grade = gradeToScopeNumber(data?.grade);
    subject = typeof data?.subject === 'string' ? data.subject : undefined;
  } catch (error) {
    console.error('[lineWebhook] handleScopeStart user read failed:', error);
  }

  // 学年・教科未設定（オンボ未完了）→ 設定を促す
  if (grade === null || !subject) {
    await replyText(
      replyToken,
      'さきに学年と教科を設定してね。メニューから登録できるよ。',
      '(scope_start: missing grade/subject)'
    );
    return;
  }

  // 時代フロー非対応（英語など時代1個 / 対応外学年）→ /scope ページへ誘導
  if (!supportsEraFlow(subject, grade)) {
    await replyScopeDetailFallback(replyToken);
    return;
  }

  const items = buildScopeQuickItems(subject, grade, [], TEST_RANGE_SCOPE_URL);
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          ...buildScopeGuideFlex(subject, grade),
          quickReply: toLineQuickReply(items),
        },
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handleScopeStart reply failed:', error);
  }
}

/** 時代フローを使えない教科向けに /scope ページへの導線だけ返す。 */
async function replyScopeDetailFallback(replyToken: string): Promise<void> {
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: '出題範囲は設定ページから単元ごとに選べるよ。',
          quickReply: {
            items: [
              {
                type: 'action' as const,
                action: {
                  type: 'uri' as const,
                  label: '🔧 範囲を設定する',
                  uri: TEST_RANGE_SCOPE_URL,
                },
              },
            ],
          },
        },
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] replyScopeDetailFallback failed:', error);
  }
}

/**
 * 時代チップのトグル / リセット。タップした瞬間に testScope を保存する
 * （「決定」を待たずに反映＝ユーザー要望）。push トリガは lastSource='line_inline'
 * で抑止されるため、picking 中の確認・1問目 push は出ない（reply のみ・無料）。
 * 選択集合は postback data に往復させて保持する（読み取りは保存前の1書き込みのみ）。
 */
async function handleScopePickPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const subject = params.get('s') ?? '';
  const gradeRaw = Number(params.get('g'));
  const grade = gradeRaw === 1 || gradeRaw === 2 || gradeRaw === 3 ? gradeRaw : null;
  if (!subject || grade === null || getEraMetas(subject, grade).length === 0) {
    await replyText(replyToken, 'もう一度、範囲設定からやり直してね。', '(scope_pick: bad params)');
    return;
  }

  const prevSel = normalizeSel(subject, grade, parseSel(params.get('sel')));
  let sel: string[];
  let confirmText: string;

  if (params.get('reset') === '1') {
    sel = [];
    confirmText = buildPickConfirmText('reset', '', 0);
  } else {
    const eraId = params.get('era') ?? '';
    const had = prevSel.includes(eraId);
    sel = toggleEra(subject, grade, prevSel, eraId);
    const meta = getEraMetas(subject, grade).find((e) => e.eraId === eraId);
    const eraName = meta?.shortName ?? '';
    confirmText = buildPickConfirmText(had ? 'remove' : 'add', eraName, sel.length);
  }

  // タップした瞬間に保存（決定不要）。lastSource='line_inline' で push トリガを抑止。
  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        testScope: {
          topics: expandErasToTopics(subject, grade, sel),
          updatedAt: FieldValue.serverTimestamp(),
          lastSource: 'line_inline',
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] handleScopePick write failed:', error);
    await replyText(replyToken, '保存に失敗しちゃった。もう一度タップしてね。', '(scope_pick: write failed)');
    return;
  }

  const items = buildScopeQuickItems(subject, grade, sel, TEST_RANGE_SCOPE_URL);
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: confirmText,
          quickReply: toLineQuickReply(items),
        },
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handleScopePick reply failed:', error);
  }
}

/**
 * 範囲確定: 選択 era を topic.name に展開して testScope を保存し、reply で確認。
 * 初回設定時は 1問目も reply で送る。push トリガ（onTestScopeSaved /
 * onTestScopeFirstSet）は lastSource='line_inline' を見てスキップ＝二重送信を防ぐ。
 */
async function handleScopeCommitPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const subject = params.get('s') ?? '';
  const gradeRaw = Number(params.get('g'));
  const grade = gradeRaw === 1 || gradeRaw === 2 || gradeRaw === 3 ? gradeRaw : null;
  if (!subject || grade === null) {
    await replyText(replyToken, 'もう一度、範囲設定からやり直してね。', '(scope_commit: bad params)');
    return;
  }

  const sel = normalizeSel(subject, grade, parseSel(params.get('sel')));
  const topics = expandErasToTopics(subject, grade, sel);

  let isInitialSetup = false;
  try {
    const { db, FieldValue } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    isInitialSetup =
      typeof data?.preferredHour === 'number' && !data?.lastQuestionDeliveredAt;

    await db.doc(`users/${uid}`).set(
      {
        testScope: {
          topics,
          updatedAt: FieldValue.serverTimestamp(),
          lastSource: 'line_inline',
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] handleScopeCommit write failed:', error);
    await replyText(replyToken, '保存に失敗しちゃった。もう一度試してね。', '(scope_commit: write failed)');
    return;
  }

  const confirmText = buildCommitText(subject, grade, sel);

  // 初回設定なら確認文 + 1問目を一度の reply で送る（push トリガは抑止済み）
  if (isInitialSetup) {
    try {
      await selectAndSendQuestion(uid, {
        replyToken,
        prependMessages: [{ type: 'text', text: confirmText }],
        isInitialSetup: true,
      });
      return;
    } catch (error) {
      console.error('[lineWebhook] handleScopeCommit first-question failed:', error);
      // フォールバック: 確認文だけでも返す
    }
  }

  await replyText(replyToken, confirmText, '(scope_commit)');
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
  db: FirebaseFirestore.Firestore
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
    });
  }

  if (recentAnswers.length === 0) {
    return getDailyIntro({
      daysSinceLastAnswer: null,
      dayStreak: 0,
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

  return getDailyIntro({ daysSinceLastAnswer, dayStreak });
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

/**
 * テスト範囲を未設定のユーザーに、回答直後「範囲を設定すると毎日の1問が
 * その単元から届くよ」と促す nudge flex。`onAnswerCreated` から push される。
 * 設定画面が開けないケース向けに LINE アプリ再起動の案内も添える。
 */
export function buildScopeSetupNudgeFlexMessage() {
  return {
    type: 'flex' as const,
    altText: 'テスト範囲を設定すると、毎日の1問がその単元から届きます',
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
            text: '🎯 テスト範囲を設定しよう',
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
            text: '今は学年ぜんぶから出題しているよ。テスト範囲を設定すると、習った単元だけから毎日の1問が届いてテスト対策の効率がぐっと上がる👍',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
          },
          {
            type: 'text' as const,
            text: '下のボタンから、出題してほしい単元にチェックを入れてね。',
            wrap: true,
            size: 'xs' as const,
            color: '#6B7280',
            margin: 'sm' as const,
          },
          {
            type: 'text' as const,
            text: '※ 設定画面が表示されない場合は、LINE アプリを完全に終了してから開き直してください。\n（ホームに戻るだけでは更新されません。アプリ切替画面から LINE を上にスワイプ）',
            wrap: true,
            size: 'xxs' as const,
            color: '#9CA3AF',
            margin: 'md' as const,
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
              label: '範囲を設定する',
              data: 'type=scope_start',
              displayText: '範囲を設定する',
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
              type: 'postback' as const,
              label: '🎯 テスト範囲設定',
              data: 'type=scope_start',
              displayText: '🎯 テスト範囲設定',
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
            text: 'これから7日間、追加問題・暗記カード・四択クイズ・苦手な問題の出題が全部使えるよ',
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
  // トライアル開始日を「1日目」とする表示。dayNumber は daysSinceStart（開始日=0）
  // なので、表示上は +1 する（開始日=1日目、昨日開始=2日目）。残りは 7 - 表示日。
  const displayDay = dayNumber + 1;
  const daysLeft = 7 - displayDay;
  const headline =
    dayNumber === 7
      ? '✨ プレミアム体験は今日で最後'
      : dayNumber === 6
        ? '⏰ 明日でトライアル終了'
        : `🚀 プレミアム体験 ${displayDay}日目（残り${daysLeft}日）`;
  const leadText =
    dayNumber === 1
      ? '昨日からプレミアム体験スタート！「追加で解く」「苦手を復習」「じっくり学ぶ」、もう触ってみた？'
      : dayNumber === 3
        ? // D-12: Day 3 は価格訴求を抜き、機能紹介に集中
          'プレミアム体験4日目！暗記カードと四択クイズで、効率よく覚えていけるのがプレミアムの強み。' +
          '今日は使ってない機能も試してみよう。'
        : dayNumber === 6
          ? '残り1日！明日になると「追加で解く」「苦手を復習」「暗記カード」「四択クイズ」が使えなくなり、毎日1問だけに戻ります。' +
            '気に入ったら今のうちに月¥680で登録すれば、明日以降もそのまま続けられます（明日からの新規登録は月¥980スタート）。'
          : // Day 7: 朝のリマインダー。夕方・夜は別ジョブで送信
            '7日間のプレミアム体験、今日が最後の1日だよ。\n' +
            '今日を過ぎると「追加で解く」「苦手を復習」「暗記カード」「四択クイズ」が使えなくなり、毎日1問だけに戻ります。' +
            'このまま続けたいなら、今日中に月¥680で登録すれば明日からもそのまま使い続けられます（この価格はずっと固定）。' +
            '合わなさそうなら手続き不要で自動的に無料プランに戻るから安心してね。';
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

  // 2026-06 トライアル廃止: 「1問解く」は全ユーザーが無料で使える。
  // reply（postback への応答）で送るため LINE 通数課金の対象外。

  // 初回利用フラグだけ記録する。
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

  // 2026-06 トライアル廃止: 「苦手を復習」は全ユーザーが無料で使える。

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
        // AI チャットボットが「さっきの問題」に答えられるよう最後の問題を保存。
        lastQuestion: buildLastQuestionSnapshot(pickedId, question),
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
  const summaryFlex =
    gradeLabel && subjectLabel
      ? buildOnboardingCompleteSummaryFlex({
          gradeLabel,
          subjectLabel,
          hourLabel,
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
            text:
              `設定完了！明日から${hourLabel}に1問お届けします。\n\n` +
              `📅 はじめの2週間は毎日、そのあとは週3回（月・水・金）に届きます。配信がない日も、メニューの「1問解く」を押せばいつでも問題に挑戦できるよ。\n\n` +
              `📖 届いた問題は選択肢をタップするだけ。すぐに正解と解説が出ます。メニューから「苦手を復習」「じっくり学ぶ」も使えます。\n\n` +
              `🤖 困ったときや勉強の質問は、このトークにそのまま送ればAIが答えるよ。`,
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
      await replyText(
        replyToken,
        'その問題はもう答えてくれてるよ😊 ちゃんと記録できてるから安心してね。また次の問題で待ってるね！',
        '(duplicate answer)'
      );
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
    // questions ドキュメントは旧ソース由来などで subject/grade/topic が欠落する
    // ことがある。undefined のまま add すると Firestore が write 全体を弾き、
    // 回答記録が残らず onAnswerCreated（連続記録・累計・初回フォロー）も発火しない。
    // 欠落フィールドは null にフォールバックして write を必ず成功させる
    // （onAnswerCreated 側は topic=null / subject='' を許容済み）。
    await db.collection('answers').add({
      uid,
      questionId,
      choice,
      isCorrect,
      subject: question.subject ?? null,
      grade: question.grade ?? null,
      topic: question.topic ?? null,
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

/**
 * 問題プールのインメモリ TTL キャッシュ（Firestore read 削減）。
 *
 * selectAndSendQuestion は出題のたびに subject×grade の questions を全件 .get() する
 * 最ホットパスで、1配信あたり数百 read（中1歴史 ≈700件）を消費していた。Cloud
 * Functions のインスタンスは複数リクエスト/複数ユーザーで再利用されるため、
 * subject×grade 単位で TTL キャッシュすると、毎日配信バッチ（1インスタンスが時間枠の
 * 対象ユーザーを順次処理）の read が (ユーザー数×問題数) → (種類数×問題数) に激減する。
 *
 * 出題ロジックは不変。キャッシュ内容は全ユーザー共通の公開出題データのみ。
 * 同期直後の新問題は最大 TTL ぶん反映が遅れるが出題内容に実害なし。
 */
const QUESTION_POOL_TTL_MS = 10 * 60 * 1000; // 10分
const questionPoolCache = new Map<
  string,
  { docs: FirebaseFirestore.QueryDocumentSnapshot[]; fetchedAt: number }
>();

async function getGradeQuestionDocs(
  db: FirebaseFirestore.Firestore,
  subject: ValidSubject,
  grade: ValidGrade
): Promise<FirebaseFirestore.QueryDocumentSnapshot[]> {
  const key = `${subject}-${grade}`;
  const cached = questionPoolCache.get(key);
  if (cached && Date.now() - cached.fetchedAt < QUESTION_POOL_TTL_MS) {
    return cached.docs;
  }
  // 取得失敗時は例外を伝播させ、成功時のみキャッシュする。
  const snap = await db
    .collection('questions')
    .where('subject', '==', subject)
    .where('grade', '==', grade)
    .get();
  questionPoolCache.set(key, { docs: snap.docs, fetchedAt: Date.now() });
  return snap.docs;
}

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

  // 問題プールは subject×grade 単位でインメモリ TTL キャッシュする（getGradeQuestionDocs）。
  // 出題のたびに全件 read していた最ホットパスの Firestore read を削減する。
  const questionDocs = await getGradeQuestionDocs(db, subject, grade);

  if (questionDocs.length === 0) {
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
      ? questionDocs.filter((d) => {
          const topic = d.get('topic');
          return typeof topic === 'string' && testScopeTopics.includes(topic);
        })
      : questionDocs;

  // 範囲設定済みでも合致する問題が 0 件の場合は、無言の未配信を防ぐため
  // 全範囲にフォールバックして必ず 1 問配信する（範囲の単元名が questions と
  // 一致しない等のケースの安全網。ユーザーの testScope 設定自体は変更しない）。
  let effectiveDocs = scopedDocs;
  if (testScopeTopics.length > 0 && scopedDocs.length === 0) {
    console.warn(
      '[lineWebhook] selectAndSendQuestion: testScope に合致する問題が0件 → 全範囲にフォールバック',
      uid,
      testScopeTopics
    );
    effectiveDocs = questionDocs;
  }

  const candidates = effectiveDocs.filter((d) => !recentIds.includes(d.id));
  const pool = candidates.length > 0 ? candidates : effectiveDocs;
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
        // AI チャットボットが「さっきの問題」に答えられるよう最後の問題を保存。
        lastQuestion: buildLastQuestionSnapshot(picked.id, question),
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
      resolvedIntroText = await computeDailyIntro(uid, db);
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

/**
 * `users/{uid}.lastQuestion` に書き込む問題スナップショットを組み立てる。
 * 問題を送った各経路（毎日配信 / 追加で解く / 苦手復習）で merge set する。
 * AI チャットボットがこれを文脈に使い「さっきの問題」等に答えられるようにする。
 */
function buildLastQuestionSnapshot(
  questionId: string,
  q: Question
): LastQuestionSnapshot {
  return {
    id: questionId,
    topic: q.topic,
    text: q.text,
    choices: [...q.choices],
    correctChoiceId: q.correctChoiceId,
    explanation: q.explanation,
  };
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
