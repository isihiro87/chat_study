// deploy-bust: 2026-05-25 intro-merge
import * as functions from 'firebase-functions/v1';
import type { messagingApi } from '@line/bot-sdk';
import { makeLinkToken } from './mubistaSessionCore';
import {
  getCorrectFeedback,
  getIncorrectFeedback,
  getDailyIntro,
  getExtraQuestionIntro,
  getWeakReviewIntro,
  getAlreadyDeliveredText,
  isDayStreakMilestone,
} from './messageVariations';
import {
  nextStreakState,
  displayStreakDays,
  type StreakState,
} from './streakState';
import {
  supportsEraFlow,
  parseSel,
  toggleEra,
  normalizeSel,
  expandErasToTopics,
  buildPickConfirmText,
  buildCommitText,
  buildScopeQuickItems,
  buildFinishData,
  topicsToSel,
  getEraMetas,
  computeScopeAfterNotLearned,
  type NotLearnedMode,
  type ScopeQuickItem,
} from './lineScopeFlow';
import { recordPushDelivery } from './deliveryStats';
import type { PushType } from './deliveryStatsTypes';
import {
  resolveReferenceTopic,
  REF_LEVEL_LABEL,
  type RefLevel,
} from './referenceTopic';
import {
  buildReferenceMenuFlex,
  buildRefLevelFlex,
  refAskSystemPrompt,
  refAskExamplesPrompt,
  refTalkSystemPrompt,
  refCheckQuestionPrompt,
  refCheckGradePrompt,
} from './referencePrompt';
import type { LastQuestionSnapshot, ScopeNudgeVariant } from './userDocTypes';
import { QUESTION_INDEX } from './generated/line-question-index.generated';
import {
  WORKBOOK_PREFIX_RE,
  parseWorkbookText,
  resolveWorkbookTopic,
  getTopicQuestionIds,
  getWorkbookInput,
  findWorkbookInputQuestion,
  judgeTermAnswer,
  type WorkbookKind,
} from './workbookTopic';
import { WORKBOOK_QUESTION_INDEX } from './generated/workbook-question-index.generated';
import {
  extractTsudumonCode,
  evaluateTsudumonAccess,
  readTsudumonEntitlement,
  TSUDUMON_PLAN_LABEL,
  TSUDUMON_FREE_WORKBOOK_TOPICS,
  TSUDUMON_FREE_REFERENCE_KEYS,
  type TsudumonAccessResult,
} from './tsudumonCore';
import {
  activateTsudumonLicense,
  type TsudumonActivationOutcome,
} from './tsudumonActivate';

interface LineEvent {
  type: string;
  source?: { type?: string; userId?: string };
  replyToken?: string;
  postback?: { data: string };
  message?: {
    type?: string;
    /** text メッセージ本文。sticker の場合はメッセージスタンプの文字（あれば）。 */
    text?: string;
    /** image / audio / video / file メッセージの ID（コンテンツ取得に使う）。 */
    id?: string;
    /** audio / video の長さ（ミリ秒）。音声の長さ上限チェックに使う。 */
    duration?: number;
    /** コンテンツ提供元。external の場合は originalContentUrl から取得する。 */
    contentProvider?: { type?: string; originalContentUrl?: string };
    /** sticker の意味・感情を表すキーワード配列（LINE が付与。最大15個・無いこともある）。 */
    keywords?: string[];
  };
  [key: string]: unknown;
}

interface LineWebhookBody {
  destination?: string;
  events?: LineEvent[];
}

type ValidGrade = '中1' | '中2' | '中3';
const VALID_GRADES: readonly ValidGrade[] = ['中1', '中2', '中3'] as const;

type ValidSubject = 'history' | 'english' | 'science' | 'math' | 'geography';
const VALID_SUBJECTS: readonly ValidSubject[] = [
  'history',
  'english',
  'science',
  'math',
  'geography',
] as const;
// 地理は中1・中2のみコンテンツがある（中3には地理を出さない）。
const SUBJECT_GRADES: Partial<Record<ValidSubject, readonly ValidGrade[]>> = {
  geography: ['中1', '中2'],
};
/** その学年でその教科が選択可能か（制限が無ければ常に可）。 */
function isSubjectAvailableForGrade(
  subject: ValidSubject,
  grade: ValidGrade
): boolean {
  const allowed = SUBJECT_GRADES[subject];
  return !allowed || allowed.includes(grade);
}

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
  science: '理科',
  math: '数学',
  geography: '地理',
};
// 教科別のヘッダー背景色。将来 math/science/geography を追加する際は
// ValidSubject 型と SUBJECT_LABELS / SUBJECT_HEADER_COLORS を同時に更新する。
// 想定色: 英語=ピンク、歴史/地理=茶（社会系）、数学=青、理科=緑
const SUBJECT_HEADER_COLORS: Record<ValidSubject, string> = {
  history: '#A16207', // 社会系の茶色
  english: '#EC4899', // ピンク
  science: '#10B981', // 緑
  math: '#3B82F6', // 青
  geography: '#0E7490', // シアン系（社会系だが歴史と区別）
};

// 配信時間はオンボの buildTimeSelectMessage が提示する 5 枠のみ（6/7/16/18/20）。
// 17/19/21 はどの UI からも選べず利用者ほぼ 0 だったため、専用 dailyQuiz cron を
// 廃止して枠を整理した（2026-06-27。19 時の唯一の利用者は 20 時へ移行済み）。
export type ValidHour = 6 | 7 | 16 | 18 | 20;
export const VALID_HOURS: readonly ValidHour[] = [6, 7, 16, 18, 20] as const;
export const HOUR_LABELS: Record<ValidHour, string> = {
  6: '朝6時',
  7: '朝7時',
  16: '夕方4時',
  18: '夕方6時',
  20: '夜8時',
};

interface Question {
  subject: ValidSubject;
  grade: ValidGrade;
  topic: string;
  text: string;
  choices: [string, string, string, string];
  correctChoiceId: 0 | 1 | 2 | 3;
  explanation: string;
  imageUrl?: string; // 図つき問題（数学のグラフ/図形/統計など）。あれば問題文の下に表示
  // 数学ハイブリッドカード: 日本語=テキスト / 数式=画像 / 選択肢=全MathJax画像
  renderMode?: string; // 'math-hybrid' のとき下記 parts でカードを組む
  questionParts?: Array<
    { t: 'text'; s: string } | { t: 'img'; u: string; w: number; h: number }
  >;
  // 選択肢: 文章は {t:'text'} のテキスト、数式は {t:'img'} の MathJax 画像（混在可）
  choiceParts?: Array<{
    t?: string;
    s?: string;
    u?: string;
    w?: number;
    h?: number;
  }>;
  explanationImage?: { u: string; w: number; h: number }; // 解説のMathJax画像（数式入りのみ）
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

// 配信中の教科を options に並べる。新教科が解放されたら追加していく。
// 地理は中1・中2のみ（中3は地理コンテンツが無いので出さない）。
export function buildSubjectSelectMessage(grade: string) {
  const geoOK = grade === '中1' || grade === '中2';
  const options: OnboardingSelectOption[] = [
    { label: '歴史', data: 'type=select_subject&subject=history' },
    { label: '理科', data: 'type=select_subject&subject=science' },
  ];
  if (geoOK) {
    options.push({
      label: '地理',
      data: 'type=select_subject&subject=geography',
    });
  }
  options.push({ label: '英語', data: 'type=select_subject&subject=english' });
  return buildOnboardingSelectFlex({
    step: 2,
    total: 3,
    headerTitle: '教科を選ぶ',
    bodyText: geoOK
      ? '勉強したい教科を選んでね。\n※今は「歴史」「理科」「地理」「英語」が配信中です。数学は順次追加予定！'
      : '勉強したい教科を選んでね。\n※今は「歴史」「理科」「英語」が配信中です。数学は順次追加予定！',
    altText: '教科を選んでください',
    options,
  });
}

// 学年・教科は 1 ユーザー 1 日（JST）あたりこの回数まで変更可能。
// 連打・誤操作の乱用を防ぐ。LIFF 設定ページのスイッチャーと同じ
// users/{uid}.learningChangeCount / learningChangeDate を共有して数える。
const LEARNING_CHANGE_DAILY_LIMIT = 3;

/** user doc から「今日あと何回 学年・教科を変更できるか」。 */
function remainingLearningChanges(
  data: Record<string, unknown> | undefined
): number {
  const date =
    typeof data?.learningChangeDate === 'string'
      ? data.learningChangeDate
      : null;
  const count =
    typeof data?.learningChangeCount === 'number'
      ? data.learningChangeCount
      : 0;
  const todayCount = date === getJstDateString(new Date()) ? count : 0;
  return Math.max(0, LEARNING_CHANGE_DAILY_LIMIT - todayCount);
}

// トーク内「学年・教科を変更」フロー（postback 逐次選択。LIFF 不要）。
function buildChangeLearningGradeMessage() {
  return buildOnboardingSelectFlex({
    step: 1,
    total: 2,
    headerTitle: '学年を変更',
    bodyText: '新しい学年を選んでね。',
    altText: '学年を選んでください',
    options: [
      { label: '中1', data: 'type=change_learning_grade&grade=中1' },
      { label: '中2', data: 'type=change_learning_grade&grade=中2' },
      { label: '中3', data: 'type=change_learning_grade&grade=中3' },
    ],
  });
}

function buildChangeLearningSubjectMessage(grade: string) {
  const geoOK = grade === '中1' || grade === '中2';
  const options: OnboardingSelectOption[] = [
    {
      label: '歴史',
      data: `type=change_learning_subject&grade=${grade}&subject=history`,
    },
    {
      label: '理科',
      data: `type=change_learning_subject&grade=${grade}&subject=science`,
    },
  ];
  if (geoOK) {
    options.push({
      label: '地理',
      data: `type=change_learning_subject&grade=${grade}&subject=geography`,
    });
  }
  options.push({
    label: '英語',
    data: `type=change_learning_subject&grade=${grade}&subject=english`,
  });
  return buildOnboardingSelectFlex({
    step: 2,
    total: 2,
    headerTitle: '教科を変更',
    bodyText: geoOK
      ? `学年は「${grade}」だね。次は教科を選んでね。\n※今は「歴史」「理科」「地理」「英語」が配信中です。`
      : `学年は「${grade}」だね。次は教科を選んでね。\n※今は「歴史」「理科」「英語」が配信中です。`,
    altText: '教科を選んでください',
    options,
  });
}

export function buildTimeSelectMessage() {
  return buildOnboardingSelectFlex({
    step: 3,
    total: 3,
    headerTitle: '配信時間を選ぶ',
    bodyText:
      '問題が届く時間を選んでね。学校がない時間で自由にどうぞ。あとから「設定変更」と送れば変えられるよ。',
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
    altText: `設定完了！${opts.gradeLabel} ${opts.subjectLabel} ${opts.hourLabel}に1問お届けします`,
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
              `📅 はじめの1週間は毎日1問お届け！\n` +
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
            text: '次は「出題範囲」を設定しよう！もう習った単元だけにチェックを入れておくと、届く1問がその範囲から出るようになるよ。',
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
 * プレミアム課金導線の有効フラグ。
 *
 * 2026-06 にプレミアム/トライアルを廃止（全機能無料化、コミット da2ab58）。
 * trial 付与は `TRIAL_FLOW_ENABLED=false` 等で停止済みだったが、reply 経路の
 * プレミアム訴求 CTA（「もう1問」ナッジ / 使い方 / 成績・記録 / premium_info postback）と
 * Stripe Checkout は残っており、廃止後もユーザーを申込・課金へ導き得た。
 * このフラグを false にして全ての訴求接点を止める。再開する場合は true に戻す。
 */
export const PREMIUM_FLOW_ENABLED = false;

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
// 授業動画アプリ「ムビスタ」。?lt=<link token> を付けて本人連携する。
const MUBISTA_BASE_URL =
  process.env.MUBISTA_URL ?? 'https://chatstudy.jp/mubista/';

/** 「ムビスタ」「動画で学びたい」等、授業動画アプリを開きたい意図か。 */
function isMubistaIntent(text: string): boolean {
  const t = text.replace(/\s/g, '');
  if (!t) return false;
  // 「動画」単体は誤爆しやすいので「動画で/動画を/授業動画」等に限定。
  return (
    /ムビスタ|むびすた/.test(t) ||
    /(授業|授業の)?動画(で|を|が|みたい|見たい|学び|学習)/.test(t)
  );
}

/** ムビスタへの本人リンク（署名 link トークン付き）を作る。 */
function buildMubistaLinkUrl(uid: string): string | null {
  const secret = process.env.MUBISTA_LINK_SECRET || '';
  if (!secret) return null;
  const lt = makeLinkToken(uid, secret, Date.now());
  const sep = MUBISTA_BASE_URL.includes('?') ? '&' : '?';
  return `${MUBISTA_BASE_URL}${sep}lt=${encodeURIComponent(lt)}`;
}

/** 「ムビスタで学ぼう」flex を reply で送る（配信枠ゼロ）。 */
async function handleOpenMubista(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const url = buildMubistaLinkUrl(uid);
  const client = await getLineClient();
  if (!url) {
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: 'ごめんね、いまムビスタの準備中みたい。少し待ってからまた試してね。',
        },
      ],
    });
    return;
  }
  await client.replyMessage({
    replyToken,
    messages: [
      {
        type: 'template',
        altText: 'ムビスタ（授業動画）を開く',
        template: {
          type: 'buttons',
          title: 'ムビスタで学ぼう',
          text: '動画とAIの先生で、見て・聞いて学べるよ。このボタンから開くと、あなた専用として続きが記録されるよ。',
          actions: [{ type: 'uri', label: 'ムビスタを開く', uri: url }],
        },
      },
    ],
  });
}

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

/**
 * トーク画面に「考え中…」のローディングアニメーションを表示する
 * （Messaging API の chat loading）。bot の返信が届くと自動で消えるので、
 * 処理ラグ（コールドスタート後の Firestore read / Gemini 呼び出しなど）の間
 * 「受け付けたよ」が視覚的に伝わる。1:1 トークのみ対応・失敗しても本処理は止めない。
 * loadingSeconds は 5〜60 の 5 の倍数（上限まで返信が無ければ自動で消える）。
 */
async function showThinkingIndicator(
  event: LineEvent,
  loadingSeconds: number
): Promise<void> {
  const userId = event.source?.userId;
  if (!userId || event.source?.type !== 'user') return;
  try {
    const client = await getLineClient();
    await client.showLoadingAnimation({ chatId: userId, loadingSeconds });
  } catch (error) {
    // 表示演出なので失敗は警告のみ（本処理を止めない）
    console.warn('[lineWebhook] showLoadingAnimation failed:', error);
  }
}

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
        // ボタン系は数秒で返るので短め（返信到着で自動的に消える）
        await showThinkingIndicator(event, 10);
        await handlePostback(event);
        return;
      case 'message':
        // 自由文・画像・音声は AI（Gemini）が絡み最長 10 数秒かかるため長め
        await showThinkingIndicator(event, 20);
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

  // スタンプは AI チャットボットに「スタンプの内容＋これまでの会話」を踏まえて
  // 返答させる。reply 送信なので配信枠は消費しない（コストは Gemini 分のみ）。
  if (messageType === 'sticker') {
    await handleStickerMessage(event);
    return;
  }

  // 動画は AI が視聴できない（マルチモーダル未対応）。無言スルーだと送ってくれた
  // 子に何も返らないので、定型文で受け止める。reply 送信なので配信枠は消費しない。
  if (messageType === 'video') {
    const replyToken = event.replyToken;
    if (replyToken) {
      await replyText(replyToken, VIDEO_UNSUPPORTED_TEXT, '(video)');
    }
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

  // 「設定変更する」「せっていへんこう」等の表記ゆれも受ける（実会話で完全一致を
  // 外して AI チャットに流れ、AI が「もう一度『設定変更』と送って」と案内する
  // 遠回りが起きていたため。2026-07 実会話スナップショット参照）。
  if (/^(設定|せってい)\s*(変更|へんこう)/.test(text)) {
    await handleSettingsChange(event, replyToken);
    return;
  }

  // 「ムビスタ」「動画で学びたい」等 → 授業動画アプリ「ムビスタ」への本人リンクを送る
  if (isMubistaIntent(text)) {
    const uidForLink = buildUid(event);
    if (uidForLink) {
      await handleOpenMubista(uidForLink, replyToken);
      return;
    }
  }

  // つづもんライセンスコード（TZM-XXXX-XXXX）→ 購入者登録。
  // 納品メールのコードをそのまま（または「つづもん登録 TZM-…」で）送ると登録される。
  const tsudumonCode = extractTsudumonCode(text);
  if (tsudumonCode) {
    const uidForTsudumon = buildUid(event);
    if (uidForTsudumon && replyToken) {
      await handleTsudumonActivation(uidForTsudumon, replyToken, tsudumonCode);
      return;
    }
  }

  // つづもん期限切れ案内で「『継続希望』と送ってください」と誘導しているため、
  // その受け口。AI チャットに流さず定型で受け付け、管理者へ通知する。
  if (text === '継続希望') {
    const uidForContinue = buildUid(event);
    if (uidForContinue && replyToken) {
      await handleTsudumonContinueRequest(uidForContinue, replyToken);
      return;
    }
  }

  // 範囲設定の「これで決定」ボタン名を手入力で送ってくるユーザーが多い
  // （Quick Reply チップは次の発言で消えるため）。AI チャットに流すと
  // 「設定完了だね！」と根拠のない完了確認を返してしまう事故が実会話で
  // 多発していたため、定型で正しい状態を案内する（2026-07 スナップショット参照）。
  if (
    /^(これで)?決定[！!。]?$/.test(text.replace(/[\s✅☑]/gu, '')) &&
    replyToken
  ) {
    await replyWithScopeStartChip(
      replyToken,
      '範囲設定の途中かな？だいじょうぶ、範囲は「タップした時点」で保存されているよ。\n' +
        '「これで決定」はボタンをタップしたときだけ反応するんだ。\n' +
        'いま選ばれている範囲を確認・変更したいときは、下のボタンからどうぞ👇',
      'typed kettei'
    );
    return;
  }

  // 印刷ワークの QR コード経由:「ワーク {単元名}」→ その単元の問題を1問出題する。
  // 単元名が QUESTION_INDEX で解決できないとき（「ワークのやり方教えて」等の自然文）は
  // 何もせず下の AI チャットボットへフォールスルーさせる。
  if (WORKBOOK_PREFIX_RE.test(text)) {
    const uidForWorkbook = buildUid(event);
    if (uidForWorkbook && replyToken) {
      const handled = await handleWorkbookQuestion(
        uidForWorkbook,
        replyToken,
        text
      );
      if (handled) return;
    }
  }

  const uid = buildUid(event);
  let userData: Record<string, unknown> | undefined;
  if (uid) {
    try {
      const { db } = await getDb();
      const snap = await db.doc(`users/${uid}`).get();
      userData = snap.data();

      // ワーク入力演習（一問一答/記述）の解答待ちなら、このテキストを解答として
      // 採点する（userData は取得済みなので追加 read なし）。
      const wbSessionData = userData?.workbookSession as
        | WorkbookSessionData
        | undefined;
      if (wbSessionData?.awaiting?.qid && replyToken) {
        const consumed = await handleWorkbookTextAnswer(
          uid,
          replyToken,
          text,
          wbSessionData,
          (userData?.workbookStats as WorkbookStatsData | undefined) ?? {}
        );
        if (consumed) return;
      }

      // 参考書AI対話（質問／理解度チェック）中の入力を捕捉（追加 read なし）。
      const refSessionData = userData?.refSession as RefSessionData | undefined;
      if (refSessionData?.awaiting && replyToken) {
        const consumed = await handleReferenceTextInput(
          uid,
          replyToken,
          text,
          refSessionData
        );
        if (consumed) return;
      }

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
      const { detectRestartIntent, detectQuestionRequest } =
        await import('./keywordMatcher');
      // 配信一時停止中（deliveryPaused）のユーザーは、直近に回答していても
      // 「再開」で配信を戻したい明確な意図があるため、8日ゲートをバイパスする。
      if (
        detectRestartIntent(text) &&
        (userData?.deliveryPaused === true ||
          (await isEligibleForRestartWelcome(userData)))
      ) {
        await handleRestartIntent(
          uid,
          replyToken,
          event,
          (userData?.status as string | undefined) ?? null
        );
        return;
      }

      // 「問題出して」系は AI に渡さず公式の1問を reply で出す。
      // AI が四択問題を自作してしまうと記録に残らず、ニガテ分析・範囲設定とも
      // 連動しないため（2026-07 実会話スナップショットで多発を確認）。
      // 別教科を名指ししている場合だけ AI に回す（教科変更の案内が必要）。
      const registeredSubjectLabel =
        typeof userData?.subject === 'string'
          ? ((SUBJECT_LABELS as Record<string, string>)[userData.subject] ??
            null)
          : null;
      if (replyToken && detectQuestionRequest(text, registeredSubjectLabel)) {
        try {
          const { logServerFunnelEvent } = await import('./funnelEvent');
          await logServerFunnelEvent('extra_question_tap', uid, {
            src: 'text_request',
          });
        } catch (error) {
          console.warn('[lineWebhook] text_request funnel log failed:', error);
        }
        await selectAndSendQuestion(uid, {
          replyToken,
          introText: getExtraQuestionIntro(),
          bypassDailyLimit: true,
          source: 'extra',
        });
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

// ── つづもんライセンス（購入者ゲート）─────────────────────────────
// 設計: .steering/20260718-tsudumon-license/
// ライセンスの正本は tsudumonLicenses/{code}。登録時に users/{uid}.tsudumon へ
// スナップショットを書き、以後のゲート判定は user doc 1 read だけで行う。

/** 緊急時の全開放スイッチ。env TSUDUMON_GATE_ENABLED=false でゲートを無効化。 */
const TSUDUMON_GATE_ENABLED = process.env.TSUDUMON_GATE_ENABLED !== 'false';

const TSUDUMON_LP_URL = 'https://www.chatstudy.jp/tsudumon/';

export interface TsudumonGateCheck {
  result: TsudumonAccessResult;
  /** 登録済みプランの表示名（未登録なら null）。wrong_grade の案内文に使う。 */
  planLabel: string | null;
}

/**
 * つづもん購入者ゲートの判定。user doc を 1 read して判定する。
 * **フローの入口（handleWorkbookQuestion / pushWorkbookStart / pushReferenceStart）
 * でのみ呼ぶこと**。継続 postback（wb_next 等）では呼ばない（read 規律）。
 * 判定自体に失敗したときは利用を止めない（正規購入者を巻き込まない側に倒す）。
 */
export async function checkTsudumonAccess(
  uid: string,
  grade: string | null
): Promise<TsudumonGateCheck> {
  if (!TSUDUMON_GATE_ENABLED) return { result: 'ok', planLabel: null };
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const raw = snap.data()?.tsudumon;
    const ent = readTsudumonEntitlement(raw);
    return {
      result: evaluateTsudumonAccess(raw, grade, Date.now()),
      planLabel: ent ? TSUDUMON_PLAN_LABEL[ent.plan] : null,
    };
  } catch (error) {
    console.error('[lineWebhook] tsudumon access check failed:', error);
    return { result: 'ok', planLabel: null };
  }
}

/** ゲートで止めたときの案内文。売り込まず、次にできることを1つずつ示す。 */
export function buildTsudumonGateText(
  check: TsudumonGateCheck,
  grade: string | null
): string {
  if (check.result === 'expired') {
    return (
      'つづもんのご利用期間が終了しています🙏\n' +
      'ダウンロード済みのPDF教材は、これからもそのままお使いいただけます。\n\n' +
      'LINEでの問題演習・AI採点・スタ先生への質問を続けたい場合は、月額プランでの継続をご案内できます。' +
      'このトークに「継続希望」と送ってください。'
    );
  }
  if (check.result === 'wrong_grade') {
    const gradeLabel = grade ?? 'この学年';
    return (
      `この単元（${gradeLabel}）は、いまのご購入プラン（${check.planLabel ?? '登録済みプラン'}）の対象外です🙏\n\n` +
      `${gradeLabel}の単元は、${gradeLabel}セットまたは3学年セットでご利用いただけます。` +
      '追加購入やプラン変更のご相談は、このトークにそのままメッセージを送ってください。'
    );
  }
  return (
    'この単元は、つづもん（問題集）をご購入の方向けの機能です🙏\n\n' +
    '✅ ご購入済みの方\n' +
    '納品のご案内に記載のライセンスコード（TZM-〇〇〇〇-〇〇〇〇）を、このトークにそのまま送ってください。' +
    'ごきょうだいのスマホでも同じコードで登録できます。\n\n' +
    '🎁 はじめての方\n' +
    '「ワーク 律令国家と奈良時代」と送ると、1単元まるごと無料で体験できます。\n' +
    `くわしくは → ${TSUDUMON_LP_URL}`
  );
}

/**
 * ライセンスコード受信 → 登録。transaction で
 * ①コード実在・active ②登録アカウント数上限 ③期限 を検証し、
 * license 側（activatedUids / firstActivatedAt / expiresAt）と
 * user 側（users/{uid}.tsudumon スナップショット）を同時に書く。
 * 登録済み uid の再送はエラーにせず「登録済み」として成功応答（機種変更・確認用）。
 */
async function handleTsudumonActivation(
  uid: string,
  replyToken: string,
  code: string
): Promise<void> {
  // 有効化コアは受け取りリンク（tsudumonActivate）と共有する。
  type Outcome = TsudumonActivationOutcome;
  let outcome: Outcome;
  try {
    outcome = await activateTsudumonLicense(uid, code);
  } catch (error) {
    console.error('[lineWebhook] tsudumon activation failed:', error);
    await replyText(
      replyToken,
      'すみません、登録処理でエラーが起きました。少し時間をおいてもう一度コードを送ってみてください。解決しないときは、このままメッセージでお知らせください。',
      '(tsudumon activation error)'
    );
    return;
  }

  console.log(
    `[lineWebhook] tsudumon activation: uid=${uid} code=${code} → ${outcome.kind}`
  );

  if (outcome.kind === 'ok') {
    const dateLabel =
      getJstDateString(new Date(outcome.expiresMs)) ?? '期限情報なし';
    const head = outcome.already
      ? '✅ このアカウントは登録済みです！そのままお使いいただけます。'
      : '✅ ライセンス登録が完了しました！';
    await replyText(
      replyToken,
      `${head}\n` +
        `プラン: ${TSUDUMON_PLAN_LABEL[outcome.plan]}／有効期限: ${dateLabel} まで\n\n` +
        '使い方はかんたん：\n' +
        '📖 冊子・PDFの各単元にあるQRコードを読む\n' +
        '✏️ その単元の問題がこのトークに届く → 解けばAIがすぐ丸つけ\n' +
        '❓ 参考書のQRからは、スタ先生に質問や理解度チェックもできるよ\n\n' +
        'さっそくQRコードを読んで、1問解いてみよう！',
      '(tsudumon activation ok)'
    );
    return;
  }

  const failText: Record<Exclude<Outcome['kind'], 'ok'>, string> = {
    not_found:
      'このコードが見つかりませんでした🙏\n' +
      '納品のご案内に記載のコード（TZM-〇〇〇〇-〇〇〇〇）を、コピー＆ペーストでもう一度送ってみてください。\n' +
      'それでも登録できないときは、このままメッセージでお知らせください。すぐに確認します。',
    revoked:
      'このコードは現在ご利用いただけない状態です🙏\n' +
      'お心当たりがない場合は、このままメッセージでお問い合わせください。確認してご連絡します。',
    expired:
      'このコードのご利用期間は終了しています🙏\n' +
      'ダウンロード済みのPDF教材はそのままお使いいただけます。LINEでの演習・AI採点を続けたい場合は、このトークに「継続希望」と送ってください。',
    max:
      'このコードは、登録できるアカウント数の上限に達しています🙏\n' +
      'ご家族での追加利用のご相談は、このままメッセージでお知らせください。',
  };
  await replyText(
    replyToken,
    failText[outcome.kind],
    `(tsudumon activation ${outcome.kind})`
  );
}

/**
 * つづもん継続希望の受け口。期限切れ案内文（handleTsudumonActivation の expired /
 * ワークゲートの期限切れ）で「『継続希望』と送ってください」と誘導しているため、
 * AI チャットに流さず定型で受け付け、管理者（ADMIN_LINE_USER_IDS）へ push で通知する。
 */
async function handleTsudumonContinueRequest(
  uid: string,
  replyToken: string
): Promise<void> {
  await replyText(
    replyToken,
    '継続のご希望を受け付けました！ありがとうございます🙏\n' +
      '運営が確認して、このトークからあらためてご案内をお送りします。少しだけお待ちください。\n' +
      'ダウンロード済みのPDF教材は、そのままお使いいただけます。',
    '(tsudumon continue request)'
  );

  const admins = (process.env.ADMIN_LINE_USER_IDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  if (admins.length === 0) {
    console.warn(
      `[lineWebhook] tsudumon continue request: ADMIN_LINE_USER_IDS not set (uid=${uid})`
    );
    return;
  }
  try {
    const client = await getLineClient();
    let pushed = 0;
    for (const adminId of admins) {
      try {
        await client.pushMessage({
          to: adminId,
          messages: [
            {
              type: 'text',
              text: `📩 つづもん継続希望\nuid: ${uid}\n（期限切れユーザーが「継続希望」を送信）`,
            },
          ],
        });
        pushed++;
      } catch (error) {
        console.error(
          `[lineWebhook] tsudumon continue notify to ${adminId} failed:`,
          error
        );
      }
    }
    if (pushed > 0) {
      await recordPushDelivery('other', pushed);
    }
  } catch (error) {
    console.error('[lineWebhook] tsudumon continue notify failed:', error);
  }
}

/**
 * 印刷ワークの QR コード経由の入口。「ワーク {単元名}」を解決できたら
 * 出題モード（上から順 / ランダム）の選択 quickReply を reply で返す。
 * 解決できなければ false を返し、呼び出し元は AI チャットへフォールスルーする。
 * この段階では Firestore を一切読まない（QUESTION_INDEX のメモリ検索のみ）。
 */
async function handleWorkbookQuestion(
  uid: string,
  replyToken: string,
  text: string
): Promise<boolean> {
  const topicName = parseWorkbookText(text);
  if (!topicName) return false;

  // 「ワーク成績」→ 進捗・苦手ダッシュボード
  if (topicName === '成績' || topicName === 'せいせき') {
    await handleWorkbookStatsPostback(uid, replyToken);
    return true;
  }

  const location = resolveWorkbookTopic(topicName, WORKBOOK_QUESTION_INDEX);
  if (!location) return false;

  // 購入者ゲート: 無料体験単元以外は、ライセンス登録（学年・期間）を確認する。
  // ここ（フロー入口）だけで user doc を 1 read。継続 postback では読まない。
  if (!TSUDUMON_FREE_WORKBOOK_TOPICS.includes(topicName)) {
    const gate = await checkTsudumonAccess(uid, location.grade);
    if (gate.result !== 'ok') {
      await replyText(
        replyToken,
        buildTsudumonGateText(gate, location.grade),
        `(tsudumon gate wb ${gate.result})`
      );
      return true;
    }
  }

  // ワーク利用者にはタブ付きリッチメニュー（毎日クイズ⇄ワーク問題集）を出す。
  // 失敗（環境変数未設定等）は無視して演習は続行する。
  // ⚠️ 仮画像（コード生成版）が不評だったため、Codex 製の本デザイン画像への
  //    差し替えとユーザー承認が済むまで自動リンクは停止中（2026-07-12）。
  if (WORKBOOK_RICHMENU_ENABLED) {
    void linkWorkbookMenuIfEligible(uid);
  }

  const total = getTopicQuestionIds(topicName, WORKBOOK_QUESTION_INDEX).length;
  const input = getWorkbookInput(topicName);
  console.log(
    `[lineWebhook] workbook start: uid=${uid} topic=${topicName} (${location.subject}-${location.grade}, 4択${total}問/入力${input.terms.length}問/記述${input.written.length}問)`
  );

  // 存在する形式だけボタンを出す。1形式のみ（年表チェック等）は種類選択を
  // スキップして出題順の選択へ直行する。
  const availableKinds: WorkbookKind[] = [];
  if (total > 0) availableKinds.push('choice');
  if (input.terms.length > 0) availableKinds.push('term');
  if (input.written.length > 0) availableKinds.push('written');
  if (availableKinds.length === 0) return false;
  if (availableKinds.length === 1) {
    await handleWorkbookKindPostback(
      uid,
      replyToken,
      new URLSearchParams({ k: availableKinds[0], t: topicName })
    );
    return true;
  }

  const kindSelectFlex = buildWorkbookKindSelectFlex(topicName);
  if (!kindSelectFlex) return false;
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [kindSelectFlex] as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] workbook kind reply failed:', error);
  }
  return true;
}

/**
 * 種類選択カード（存在する形式のボタンだけ・すべて同格のボタン）。
 * テキスト経由（handleWorkbookQuestion）と QR即出題の push（pushWorkbookStart）で共用。
 * 単元が解決できない・問題が1問もないときは null。
 */
export function buildWorkbookKindSelectFlex(
  topicName: string
): LineMessage | null {
  if (!resolveWorkbookTopic(topicName, WORKBOOK_QUESTION_INDEX)) return null;
  const total = getTopicQuestionIds(topicName, WORKBOOK_QUESTION_INDEX).length;
  const input = getWorkbookInput(topicName);
  const kindData = (k: WorkbookKind) =>
    new URLSearchParams({ type: 'wb_kind', k, t: topicName }).toString();

  const buttonDefs: Array<{
    label: string;
    data: string;
    displayText: string;
  }> = [];
  if (total > 0) {
    buttonDefs.push({
      label: `✅ 4択（全${total}問）`,
      data: kindData('choice'),
      displayText: '4択問題に挑戦！',
    });
  }
  if (input.terms.length > 0) {
    buttonDefs.push({
      label: `🔤 入力（全${input.terms.length}問）`,
      data: kindData('term'),
      displayText: '入力問題に挑戦！',
    });
  }
  if (input.written.length > 0) {
    buttonDefs.push({
      label: `✍️ 記述・AI採点（全${input.written.length}問）`,
      data: kindData('written'),
      displayText: '記述問題に挑戦！',
    });
  }
  if (buttonDefs.length === 0) return null;

  return {
    type: 'flex',
    altText: `ワーク「${topicName}」どの問題に挑戦する？`,
    contents: {
      type: 'bubble',
      size: 'kilo',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#F59E0B',
        paddingAll: '12px',
        contents: [
          {
            type: 'text',
            text: '📖 ワーク問題集',
            color: '#FFFFFF',
            weight: 'bold',
            size: 'sm',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: topicName,
            weight: 'bold',
            size: 'md',
            wrap: true,
            color: '#111827',
          },
          {
            type: 'text',
            text: 'どの問題に挑戦する？',
            size: 'sm',
            wrap: true,
            color: '#6B7280',
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '12px',
        // 3形式は同格（どれかを強調しない・すべて同じ見た目のボタン）
        contents: buttonDefs.map((b) => ({
          type: 'button',
          style: 'secondary',
          height: 'sm',
          action: {
            type: 'postback',
            label: b.label,
            data: b.data,
            displayText: b.displayText,
          },
        })),
      },
    },
  } as LineMessage;
}

/**
 * QR即出題: LIFF ページ（/liff/units/wb）経由で「ワーク開始カード」を push する。
 * reply ではなく push のため配信枠を消費する（ユーザー了承済み・deliveryStats に記録）。
 * 友だち未登録などで push できないときは 'push_failed' を返す。
 */
export async function pushWorkbookStart(
  lineUserId: string,
  topicName: string
): Promise<'ok' | 'unknown_topic' | 'push_failed'> {
  const flex = buildWorkbookKindSelectFlex(topicName);
  if (!flex) return 'unknown_topic';

  // 購入者ゲート（LIFF 起点）。無料体験単元以外はライセンスを確認し、
  // 未登録・期限切れ等は問題カードの代わりに案内文を push する。
  if (!TSUDUMON_FREE_WORKBOOK_TOPICS.includes(topicName)) {
    const location = resolveWorkbookTopic(topicName, WORKBOOK_QUESTION_INDEX);
    const gate = await checkTsudumonAccess(
      `line:${lineUserId}`,
      location?.grade ?? null
    );
    if (gate.result !== 'ok') {
      try {
        const client = await getLineClient();
        await client.pushMessage({
          to: lineUserId,
          messages: [
            {
              type: 'text',
              text: buildTsudumonGateText(gate, location?.grade ?? null),
            },
          ],
        });
        await recordPushDelivery('other');
        return 'ok';
      } catch (error) {
        console.error('[lineWebhook] tsudumon gate push failed:', error);
        return 'push_failed';
      }
    }
  }

  if (WORKBOOK_RICHMENU_ENABLED) {
    void linkWorkbookMenuIfEligible(`line:${lineUserId}`);
  }
  try {
    const client = await getLineClient();
    await client.pushMessage({
      to: lineUserId,
      messages: [flex] as unknown as messagingApi.Message[],
    });
    await recordPushDelivery('other');
    return 'ok';
  } catch (error) {
    console.error('[lineWebhook] pushWorkbookStart failed:', error);
    return 'push_failed';
  }
}

/**
 * postback: type=wb_kind&k=...&t=... — 問題の種類選択後。
 * 4択・一問一答は出題順の選択カードを返し、記述（2問）はすぐ開始する。
 */
async function handleWorkbookKindPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const k = (params.get('k') ?? 'choice') as WorkbookKind;
  const topicName = params.get('t') ?? '';
  if (!replyToken) return;

  if (k === 'written') {
    await sendWorkbookQuestion(uid, replyToken, topicName, 'written', 'seq', 0);
    return;
  }

  const startData = (mode: 'seq' | 'rand') =>
    new URLSearchParams({
      type: 'wb_start',
      k,
      m: mode,
      t: topicName,
    }).toString();

  const kindTotal =
    k === 'term'
      ? getWorkbookInput(topicName).terms.length
      : getTopicQuestionIds(topicName, WORKBOOK_QUESTION_INDEX).length;
  const kindLabel = k === 'term' ? '入力問題' : '4択問題';

  // 出題順の選択もメッセージ内のボタン（flex）で表示する。
  const modeSelectFlex = {
    type: 'flex' as const,
    altText: `ワーク「${topicName}」（全${kindTotal}問）どの順番で解く？`,
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
            text: '📖 ワーク問題集',
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
            text: topicName,
            weight: 'bold' as const,
            size: 'md' as const,
            wrap: true,
            color: '#111827',
          },
          {
            type: 'text' as const,
            text: `${kindLabel}が全${kindTotal}問あるよ。どの順番で解く？\n💡 2周目以降はランダムがおすすめ！`,
            size: 'sm' as const,
            wrap: true,
            color: '#6B7280',
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '12px',
        // 2つの順番は同格（どちらかを強調しない）
        contents: [
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '📖 上から順に解く',
              data: startData('seq'),
              displayText: '上から順に解く',
            },
          },
          {
            type: 'button' as const,
            style: 'secondary' as const,
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '🎲 ランダムに解く',
              data: startData('rand'),
              displayText: 'ランダムに解く',
            },
          },
        ],
      },
    },
  };

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [modeSelectFlex] as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] workbook mode reply failed:', error);
  }
}

/** ワーク演習モード。retry は「間違えた問題だけやり直す」 */
type WorkbookMode = 'seq' | 'rand' | 'retry';

function parseWorkbookMode(raw: string | null): WorkbookMode {
  return raw === 'rand' ? 'rand' : raw === 'retry' ? 'retry' : 'seq';
}

/** postback の list=1,3,8 形式（紙面の問題番号）をパースする */
function parseWorkbookList(raw: string | null): number[] {
  if (!raw) return [];
  return raw
    .split(',')
    .map((s) => Number(s))
    .filter((n) => Number.isInteger(n) && n >= 1);
}

/**
 * ワークの1問を送る共通処理。seq/retry は index 指定、rand はランダム。
 * 送信と同じ write に `workbookSession` を相乗りさせ、回答後の
 * 「▶ 次の問題」ボタン（handleAnswerPostback）が状態を引き継げるようにする。
 * retryList は「間違えた問題だけやり直す」の対象（紙面の問題番号）。
 * kind: choice=4択（Firestore のワーク専用問題）/ term・written=入力問題（メモリバンク）。
 */
async function sendWorkbookQuestion(
  uid: string,
  replyToken: string | undefined,
  topicName: string,
  kind: WorkbookKind,
  mode: WorkbookMode,
  index: number,
  retryList: number[] = []
): Promise<void> {
  const location = resolveWorkbookTopic(topicName, WORKBOOK_QUESTION_INDEX);
  if (!location) {
    if (replyToken) {
      await replyText(
        replyToken,
        'ごめんね、この単元の問題が見つからなかったよ💦',
        '(workbook topic not found)'
      );
    }
    return;
  }

  if (kind === 'term' || kind === 'written') {
    await sendWorkbookInputQuestion(
      uid,
      replyToken,
      topicName,
      kind,
      mode,
      index,
      retryList
    );
    return;
  }

  const allIds = getTopicQuestionIds(topicName, WORKBOOK_QUESTION_INDEX);

  // 出題順: seq=紙面の順、rand=開始時にシャッフルした並びを list に固定して
  // **1周で各問題が必ず1回ずつ**出る、retry=指定された問題番号のみ。
  let positions = retryList;
  if (mode === 'rand' && index === 0 && positions.length === 0) {
    positions = shuffledIndices(allIds.length).map((i) => i + 1);
  }
  const ids =
    positions.length > 0
      ? positions.map((n) => allIds[n - 1]).filter((id) => !!id)
      : allIds;
  if (ids.length === 0) {
    if (replyToken) {
      await replyText(
        replyToken,
        'ごめんね、この単元の問題が見つからなかったよ💦',
        '(workbook empty ids)'
      );
    }
    return;
  }

  // 最後まで解き切ったら結果カード（正答数・間違えた問題・やり直しボタン）。
  if (index >= ids.length) {
    await sendWorkbookCompletion(
      uid,
      replyToken,
      topicName,
      ids.length,
      'choice'
    );
    return;
  }

  const questionNoText =
    mode === 'retry'
      ? `やり直し 第${index + 1}問（全${ids.length}問）`
      : `第${index + 1}問（全${ids.length}問）`;

  const { FieldValue } = await getDb();

  // 出題はワーク専用問題（紙面の C 実戦問題と同一、q-wb-*）のみ。
  // 毎日配信プール（QUESTION_INDEX）とは完全に分離する。
  await selectAndSendQuestion(uid, {
    replyToken,
    introText: `📖 ワーク「${topicName}」 ${questionNoText}！`,
    bypassDailyLimit: true,
    source: 'workbook',
    subjectOverride: location.subject as ValidSubject,
    gradeOverride: location.grade as ValidGrade,
    cardVariant: 'workbook',
    questionIdOverride: ids[index],
    extraUserFields: {
      workbookSession: {
        topic: topicName,
        kind: 'choice',
        mode,
        index: index + 1,
        ...(positions.length > 0
          ? { list: positions }
          : index === 0
            ? { list: FieldValue.delete() }
            : {}),
        // 演習開始時（1問目送信時）は結果カウンタをリセットする。
        // 2問目以降は merge により correct / wrong が積み上がる。
        ...(index === 0 ? { correct: 0, wrong: [] } : {}),
      },
    },
  });
}

/** 入力問題（用語入力 / 記述）の問題カード flex を組み立てる。 */
function buildWorkbookInputQuestionFlex(
  topicName: string,
  kind: 'term' | 'written',
  entry: { id: string; q: string },
  heading: string,
  keywords: readonly string[] = []
): LineMessage {
  const bodyContents: Record<string, unknown>[] = [
    {
      type: 'text',
      text: `📖 ワーク「${topicName}」 ${heading}！`,
      size: 'sm',
      color: '#6B7280',
      wrap: true,
    },
    { type: 'separator', margin: 'md', color: '#E5E7EB' },
    {
      type: 'text',
      text: entry.q,
      wrap: true,
      weight: 'bold',
      size: 'lg',
      color: '#111827',
      margin: 'md',
    },
  ];
  if (kind === 'written' && keywords.length > 0) {
    bodyContents.push({
      type: 'text',
      text: `指定語句: ${keywords.join('・')}`,
      size: 'sm',
      color: '#B45309',
      wrap: true,
      margin: 'md',
    });
  }
  bodyContents.push({
    type: 'text',
    text:
      kind === 'term'
        ? '⌨️ 答えの用語をトークに入力して送ってね（ひらがなでもOK）'
        : '⌨️ 答えの文章をトークに入力して送ってね。AIが採点するよ🤖',
    size: 'xs',
    color: '#9CA3AF',
    wrap: true,
    margin: 'lg',
  });

  return {
    type: 'flex',
    // 通知/プレビュー帯は「表示名: altText」形式で表示名が長い分、
    // 問題文を先頭にして読める情報量を最大化する。
    altText: `Q. ${entry.q.slice(0, 60)}`,
    contents: {
      type: 'bubble',
      size: 'kilo',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#F59E0B',
        paddingAll: '12px',
        contents: [
          {
            type: 'text',
            text: kind === 'term' ? '🔤 入力問題' : '✍️ 記述問題（AI採点）',
            color: '#FFFFFF',
            weight: 'bold',
            size: 'sm',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        contents: bodyContents,
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '12px',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            paddingAll: '10px',
            cornerRadius: 'md',
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB',
            borderWidth: '1px',
            justifyContent: 'center',
            action: {
              type: 'postback',
              label: 'わからない',
              data: `type=wb_iskip&questionId=${entry.id}`,
              displayText: 'わからない…答えを見る',
            },
            contents: [
              {
                type: 'text',
                text: '🤔 わからない…答えを見る',
                size: 'xs',
                color: '#6B7280',
                flex: 0,
                gravity: 'center',
              },
            ],
          },
        ],
      },
    },
  } as LineMessage;
}

/**
 * 入力問題（一問一答=用語入力 / 記述=AI採点）の1問を送る。
 * 問題はメモリバンク（WORKBOOK_INPUT_INDEX）から取り、Firestore read はユーザー分のみ。
 * `workbookSession.awaiting` に問題IDを保存し、次のテキストメッセージを解答として扱う。
 * rand は開始時に並びをシャッフルして list に固定する（全問を1周する）。
 */
async function sendWorkbookInputQuestion(
  uid: string,
  replyToken: string | undefined,
  topicName: string,
  kind: 'term' | 'written',
  mode: WorkbookMode,
  index: number,
  retryList: number[] = []
): Promise<void> {
  const input = getWorkbookInput(topicName);
  const entries = kind === 'term' ? input.terms : input.written;
  if (entries.length === 0) {
    if (replyToken) {
      await replyText(
        replyToken,
        'ごめんね、この単元にはまだこの形式の問題がないよ💦',
        '(workbook input empty)'
      );
    }
    return;
  }

  // 出題順: seq=1..N、rand=開始時にシャッフルした並びを list に固定、retry=指定された問題番号。
  let list = retryList;
  if (mode === 'rand' && index === 0 && list.length === 0) {
    list = shuffledIndices(entries.length).map((i) => i + 1);
  }
  const positions =
    list.length > 0
      ? list.filter((n) => n >= 1 && n <= entries.length)
      : entries.map((_, i) => i + 1);

  if (index >= positions.length) {
    await sendWorkbookCompletion(
      uid,
      replyToken,
      topicName,
      positions.length,
      kind
    );
    return;
  }

  const pos = positions[index];
  const entry = entries[pos - 1];
  const qid = entry.id;
  const isRetry = mode === 'retry';
  const heading = `${isRetry ? 'やり直し ' : ''}第${index + 1}問（全${positions.length}問）`;
  const questionFlex = buildWorkbookInputQuestionFlex(
    topicName,
    kind,
    entry,
    heading,
    kind === 'written'
      ? ((entry as { keywords?: readonly string[] }).keywords ?? [])
      : []
  );

  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        workbookSession: {
          topic: topicName,
          kind,
          mode,
          index: index + 1,
          awaiting: { qid },
          ...(list.length > 0
            ? { list }
            : index === 0
              ? { list: FieldValue.delete() }
              : {}),
          ...(index === 0 ? { correct: 0, wrong: [] } : {}),
        },
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] workbook input session write failed:', error);
  }

  if (replyToken) {
    try {
      const client = await getLineClient();
      await client.replyMessage({
        replyToken,
        messages: [questionFlex] as unknown as messagingApi.Message[],
      });
    } catch (error) {
      console.error('[lineWebhook] workbook input reply failed:', error);
    }
  }
}

/**
 * 回答直後に「次の問題」を同じ reply に同梱するための準備。
 * メッセージと、users/{uid} へ相乗りさせるフィールドを返す（送信はしない）。
 * status: question=次の問題あり / completion=全問終了（結果カードへ） / none=用意できず
 */
interface WorkbookNextPayload {
  status: 'question' | 'completion' | 'none';
  messages: LineMessage[];
  /** workbookSession に merge するフィールド（index 前進・次の awaiting 等） */
  sessionFields: Record<string, unknown>;
  /** users ドキュメント直下に merge するフィールド（lastQuestion スナップショット等） */
  topFields: Record<string, unknown>;
  total: number;
}

async function prepareWorkbookNextQuestion(
  db: FirebaseFirestore.Firestore,
  topicName: string,
  kind: WorkbookKind,
  mode: WorkbookMode,
  nextIndex: number,
  list: number[]
): Promise<WorkbookNextPayload> {
  const empty: WorkbookNextPayload = {
    status: 'none',
    messages: [],
    sessionFields: {},
    topFields: {},
    total: 0,
  };

  if (kind === 'choice') {
    const allIds = getTopicQuestionIds(topicName, WORKBOOK_QUESTION_INDEX);
    if (allIds.length === 0) return empty;
    const positions =
      list.length > 0
        ? list.filter((n) => n >= 1 && n <= allIds.length)
        : allIds.map((_, i) => i + 1);
    if (nextIndex >= positions.length) {
      return { ...empty, status: 'completion', total: positions.length };
    }
    const qid = allIds[positions[nextIndex] - 1];
    const snap = await db.doc(`questions/${qid}`).get();
    if (!snap.exists) return empty;
    const q = snap.data() as Question;
    const heading =
      mode === 'retry'
        ? `やり直し 第${nextIndex + 1}問（全${positions.length}問）`
        : `第${nextIndex + 1}問（全${positions.length}問）`;
    const message = buildQuestionMessage(
      qid,
      q,
      `📖 ワーク「${topicName}」 ${heading}！`,
      'workbook'
    );
    return {
      status: 'question',
      messages: [message as unknown as LineMessage],
      sessionFields: {
        topic: topicName,
        kind,
        mode,
        index: nextIndex + 1,
        ...(list.length > 0 ? { list } : {}),
      },
      topFields: {
        lastQuestion: buildLastQuestionSnapshot(qid, q),
        lastQuestionSource: 'workbook',
      },
      total: positions.length,
    };
  }

  const input = getWorkbookInput(topicName);
  const entries = kind === 'term' ? input.terms : input.written;
  if (entries.length === 0) return empty;
  const positions =
    list.length > 0
      ? list.filter((n) => n >= 1 && n <= entries.length)
      : entries.map((_, i) => i + 1);
  if (nextIndex >= positions.length) {
    return { ...empty, status: 'completion', total: positions.length };
  }
  const entry = entries[positions[nextIndex] - 1];
  const heading =
    mode === 'retry'
      ? `やり直し 第${nextIndex + 1}問（全${positions.length}問）`
      : `第${nextIndex + 1}問（全${positions.length}問）`;
  const flex = buildWorkbookInputQuestionFlex(
    topicName,
    kind,
    entry,
    heading,
    kind === 'written'
      ? ((entry as { keywords?: readonly string[] }).keywords ?? [])
      : []
  );
  return {
    status: 'question',
    messages: [flex],
    sessionFields: {
      topic: topicName,
      kind,
      mode,
      index: nextIndex + 1,
      awaiting: { qid: entry.id },
      ...(list.length > 0 ? { list } : {}),
    },
    topFields: {},
    total: positions.length,
  };
}

/** ワーク入力演習を途中でやめる言葉（解答と誤判定しないよう先に拾う） */
const WORKBOOK_QUIT_WORDS = new Set([
  'やめる',
  'やめたい',
  'おわる',
  'おわり',
  '終わる',
  '終わり',
  'ストップ',
  '中断',
]);

interface WorkbookSessionData {
  topic?: string;
  kind?: string;
  mode?: string;
  index?: number;
  list?: number[];
  correct?: number;
  wrong?: Array<{ n?: number; text?: string }>;
  awaiting?: { qid?: string };
  lastInput?: {
    qid?: string;
    text?: string;
    answerDocId?: string;
    wrongN?: number;
    wrongText?: string;
  };
}

// ===== 参考書AI対話（QR→質問／理解度チェック）=====
// 状態は users/{uid}.refSession に相乗り merge write（別コレクションを作らない）。
interface RefSessionData {
  topicKey?: string;
  mode?: 'ask' | 'talk' | 'check';
  level?: RefLevel;
  awaiting?: boolean;
  history?: Array<{ role: 'user' | 'model'; text: string }>;
  askedCount?: number;
  askedQuestions?: string[];
  lastQuestion?: string;
  correct?: number;
}

const REF_END_RE = /^(おわり|終わり|おわる|やめる|終了|stop|ストップ)$/i;
// 理解度チェックは全 REF_CHECK_TOTAL 問で1セット（無限に続かず自然に終われる）。
const REF_CHECK_TOTAL = 5;

/** 理解度チェックの成績に応じた、しめの一言。 */
function refCheckClosing(correct: number, total: number): string {
  if (correct >= total) return '全問正解！完ぺきだね、すごい🎉';
  if (correct >= Math.ceil(total * 0.6)) return 'よくがんばったね！この調子👏';
  return 'おつかれさま！まちがえた所は参考書で見直すと、もっと力がつくよ💪';
}

/**
 * 参考書QR即開始: LIFF /ref 経由で「スタ先生と深める」メニュー（質問／理解度チェック）
 * を push する。reply ではなく push なので配信枠を消費（QR起点＝ユーザー操作の直後）。
 */
export async function pushReferenceStart(
  lineUserId: string,
  topicKey: string
): Promise<'ok' | 'unknown_topic' | 'push_failed'> {
  const topic = resolveReferenceTopic(topicKey);
  if (!topic) return 'unknown_topic';

  // 購入者ゲート（参考書QR起点）。無料体験単元以外はライセンスを確認する。
  if (!TSUDUMON_FREE_REFERENCE_KEYS.includes(topicKey)) {
    const gate = await checkTsudumonAccess(`line:${lineUserId}`, topic.grade);
    if (gate.result !== 'ok') {
      try {
        const client = await getLineClient();
        await client.pushMessage({
          to: lineUserId,
          messages: [
            { type: 'text', text: buildTsudumonGateText(gate, topic.grade) },
          ],
        });
        await recordPushDelivery('other');
        return 'ok';
      } catch (error) {
        console.error('[lineWebhook] tsudumon ref gate push failed:', error);
        return 'push_failed';
      }
    }
  }
  try {
    const client = await getLineClient();
    await client.pushMessage({
      to: lineUserId,
      messages: [
        buildReferenceMenuFlex(topicKey, topic),
      ] as unknown as messagingApi.Message[],
    });
    await recordPushDelivery('other');
    return 'ok';
  } catch (error) {
    console.error('[lineWebhook] pushReferenceStart failed:', error);
    return 'push_failed';
  }
}

/**
 * postback: type=ref_ask&t=... — 質問モードに入る。
 * その単元に合った「質問例」を quickReply ボタンで提示（タップで送信＝そのまま質問）。
 * もちろん自由記述の質問もできる。
 */
async function handleReferenceAskPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const topicKey = params.get('t') ?? '';
  const topic = resolveReferenceTopic(topicKey);
  if (!topic || !replyToken) return;

  const { db } = await getDb();
  const session: RefSessionData = {
    topicKey,
    mode: 'ask',
    awaiting: true,
    history: [],
  };
  await db.doc(`users/${uid}`).set({ refSession: session }, { merge: true });

  // 単元に合った質問例を AI で生成（失敗しても自由記述で続けられる）。
  let examples: string[] = [];
  try {
    const { generateGeminiText } = await import('./aiChat');
    const raw = await generateGeminiText(
      refAskExamplesPrompt(topic),
      'この単元の質問例を3つ、1行ずつ。',
      200
    );
    examples = raw
      .split('\n')
      .map((s) => s.replace(/^[-・*\d.)．、\s]+/, '').trim())
      .filter((s) => s.length > 0)
      .slice(0, 3);
  } catch (error) {
    console.error('[lineWebhook] ref ask examples gen failed:', error);
  }

  const items = [
    ...examples.map((q) => ({
      type: 'action',
      action: { type: 'message', label: q.slice(0, 20), text: q },
    })),
    {
      type: 'action',
      action: { type: 'message', label: '🔚 質問をおえる', text: 'おわり' },
    },
  ];

  const client = await getLineClient();
  await client.replyMessage({
    replyToken,
    messages: [
      {
        type: 'text',
        text:
          `📖「${topic.name}」について、聞きたいことをえらんでね。\n` +
          'じぶんで質問を打ってもOKだよ！',
        quickReply: { items },
      },
    ] as unknown as messagingApi.Message[],
  });
}

/**
 * postback: type=ref_talk&t=... — 「対話で理解を深める」モードに入る。
 * スタ先生が最初に興味をひく一言＋問いかけを投げかけ、以降は対話で深めていく。
 */
async function handleReferenceTalkPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const topicKey = params.get('t') ?? '';
  const topic = resolveReferenceTopic(topicKey);
  if (!topic || !replyToken) return;

  let opener: string;
  try {
    const { generateGeminiText } = await import('./aiChat');
    opener = (
      await generateGeminiText(
        refTalkSystemPrompt(topic),
        'この単元の話をはじめてください。まず生徒の興味をひく一言と、答えやすい問いかけを1つだけ。',
        400
      )
    ).trim();
  } catch (error) {
    console.error('[lineWebhook] ref talk opener gen failed:', error);
    await replyText(
      replyToken,
      'ごめんね、いま準備できなかった。もう一度ためしてね。',
      '(ref_talk_err)'
    );
    return;
  }

  const { db } = await getDb();
  const session: RefSessionData = {
    topicKey,
    mode: 'talk',
    awaiting: true,
    history: [{ role: 'model', text: opener }],
  };
  await db.doc(`users/${uid}`).set({ refSession: session }, { merge: true });

  const client = await getLineClient();
  await client.replyMessage({
    replyToken,
    messages: [
      {
        type: 'text',
        text: `💬「${topic.name}」について、いっしょに話そう！\n\n${opener}`,
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                label: '🔚 会話をおえる',
                text: 'おわり',
              },
            },
          ],
        },
      },
    ] as unknown as messagingApi.Message[],
  });
}

/** postback: type=ref_check&t=... — 難易度選択カードを返す（reply）。 */
async function handleReferenceCheckPostback(
  _uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const topicKey = params.get('t') ?? '';
  const topic = resolveReferenceTopic(topicKey);
  if (!topic || !replyToken) return;
  const client = await getLineClient();
  await client.replyMessage({
    replyToken,
    messages: [
      buildRefLevelFlex(topicKey, topic),
    ] as unknown as messagingApi.Message[],
  });
}

/** postback: type=ref_level&t=...&level=... — 出題開始（reply）。 */
async function handleReferenceLevelPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const topicKey = params.get('t') ?? '';
  const level = (params.get('level') ?? 'normal') as RefLevel;
  const topic = resolveReferenceTopic(topicKey);
  if (!topic || !replyToken) return;

  let question: string;
  try {
    const { generateGeminiText } = await import('./aiChat');
    question = (
      await generateGeminiText(
        refCheckQuestionPrompt(topic, level, 1, []),
        'では、1問目をお願いします。',
        300
      )
    ).trim();
  } catch (error) {
    console.error('[lineWebhook] ref question gen failed:', error);
    await replyText(
      replyToken,
      'ごめんね、いま問題を作れなかったみたい。もう一度ためしてね。',
      '(ref_level_err)'
    );
    return;
  }

  const { db } = await getDb();
  const session: RefSessionData = {
    topicKey,
    mode: 'check',
    level,
    awaiting: true,
    askedCount: 1,
    askedQuestions: [question],
    lastQuestion: question,
    correct: 0,
  };
  await db.doc(`users/${uid}`).set({ refSession: session }, { merge: true });
  await replyText(
    replyToken,
    `✅ 理解度チェック（${REF_LEVEL_LABEL[level]}）スタート！ぜんぶで${REF_CHECK_TOTAL}問だよ。\n\n` +
      `【第1問 / 全${REF_CHECK_TOTAL}問】\n${question}\n\n答えを送ってね。`,
    '(ref_level)'
  );
}

/**
 * 参考書対話中のテキスト（質問への回答 / チェックの答え）を処理。
 * handleMessage で userData 取得済みのため追加 read はなし。消費したら true。
 */
async function handleReferenceTextInput(
  uid: string,
  replyToken: string,
  text: string,
  session: RefSessionData
): Promise<boolean> {
  const topic = session.topicKey
    ? resolveReferenceTopic(session.topicKey)
    : null;
  if (!topic) return false;
  const { db, FieldValue } = await getDb();

  // 終了ワードでセッションを閉じる。
  if (REF_END_RE.test(text.trim())) {
    await db
      .doc(`users/${uid}`)
      .set({ refSession: FieldValue.delete() }, { merge: true });
    await replyText(
      replyToken,
      `おつかれさま！「${topic.name}」の学習はここまで。またいつでも聞いてね😊`,
      '(ref_end)'
    );
    return true;
  }

  const { generateGeminiText } = await import('./aiChat');

  if (session.mode === 'ask' || session.mode === 'talk') {
    const hist = (session.history ?? [])
      .slice(-6)
      .map((h) => `${h.role === 'user' ? '生徒' : 'スタ先生'}: ${h.text}`)
      .join('\n');
    const userText = hist
      ? `これまでのやり取り:\n${hist}\n\n生徒の発言: ${text}`
      : text;
    const sysPrompt =
      session.mode === 'talk'
        ? refTalkSystemPrompt(topic)
        : refAskSystemPrompt(topic);
    let answer: string;
    try {
      answer = (await generateGeminiText(sysPrompt, userText, 500)).trim();
    } catch (error) {
      console.error('[lineWebhook] ref ask/talk gen failed:', error);
      await replyText(
        replyToken,
        'ごめんね、いまうまく答えられなかった。もう一度おしえてくれる？',
        '(ref_ask_err)'
      );
      return true;
    }
    const history = [
      ...(session.history ?? []),
      { role: 'user' as const, text },
      { role: 'model' as const, text: answer },
    ].slice(-8);
    await db
      .doc(`users/${uid}`)
      .set({ refSession: { ...session, history } }, { merge: true });
    await replyText(replyToken, answer, '(ref_ask_reply)');
    return true;
  }

  if (session.mode === 'check') {
    const level = (session.level ?? 'normal') as RefLevel;
    const question = session.lastQuestion ?? '';
    let grade: string;
    try {
      grade = (
        await generateGeminiText(
          refCheckGradePrompt(topic, level, question),
          `生徒の答え: ${text}`,
          500
        )
      ).trim();
    } catch (error) {
      console.error('[lineWebhook] ref grade gen failed:', error);
      await replyText(
        replyToken,
        'ごめんね、いま採点できなかった。もう一度答えてくれる？',
        '(ref_check_err)'
      );
      return true;
    }

    // いま答えた問題の正誤を集計（採点文の🟢＝正解）。
    const answeredNo = session.askedCount ?? 1;
    const correct = (session.correct ?? 0) + (/🟢/.test(grade) ? 1 : 0);

    // 規定問数に達したらセットを終了する（次の問題は出さない）。
    if (answeredNo >= REF_CHECK_TOTAL) {
      await db
        .doc(`users/${uid}`)
        .set({ refSession: FieldValue.delete() }, { merge: true });
      await replyText(
        replyToken,
        `${grade}\n\n━━━━━\n🎉 理解度チェックおわり！\n` +
          `全${REF_CHECK_TOTAL}問中 ${correct}問 正解だったよ。\n` +
          `${refCheckClosing(correct, REF_CHECK_TOTAL)}\n\n` +
          `また「${topic.name}」を確かめたくなったら、参考書のQRからいつでも呼んでね😊`,
        '(ref_check_done)'
      );
      return true;
    }

    // まだ途中 → 次の問題を作る。
    const nextCount = answeredNo + 1;
    const isLast = nextCount >= REF_CHECK_TOTAL;
    let next: string | null = null;
    try {
      next = (
        await generateGeminiText(
          refCheckQuestionPrompt(
            topic,
            level,
            nextCount,
            session.askedQuestions ?? []
          ),
          `では、${nextCount}問目をお願いします。`,
          300
        )
      ).trim();
    } catch (error) {
      console.error('[lineWebhook] ref next gen failed:', error);
    }

    if (next) {
      const asked = [...(session.askedQuestions ?? []), next].slice(-12);
      await db.doc(`users/${uid}`).set(
        {
          refSession: {
            ...session,
            askedCount: nextCount,
            askedQuestions: asked,
            lastQuestion: next,
            correct,
          },
        },
        { merge: true }
      );
      const heading = isLast
        ? `【第${nextCount}問 / 全${REF_CHECK_TOTAL}問・ラスト！】`
        : `【第${nextCount}問 / 全${REF_CHECK_TOTAL}問】`;
      await replyText(
        replyToken,
        `${grade}\n\n━━━━━\n${heading}\n${next}`,
        '(ref_check_reply)'
      );
    } else {
      // 次が作れなければ、その場でセットを締める（宙ぶらりんにしない）。
      await db
        .doc(`users/${uid}`)
        .set({ refSession: FieldValue.delete() }, { merge: true });
      await replyText(
        replyToken,
        `${grade}\n\n━━━━━\n🎉 理解度チェックおわり！\n` +
          `ここまでで ${correct}問 正解だったよ。\n` +
          `${refCheckClosing(correct, answeredNo)}\n\n` +
          `また参考書のQRからいつでも挑戦してね😊`,
        '(ref_check_done)'
      );
    }
    return true;
  }

  return false;
}

/**
 * ワーク入力問題（一問一答 / 記述）への解答テキストを処理する。
 * handleMessage で userData 取得済みのため追加 read はなし。
 * 消費した（=AIチャットへ流さない）場合 true を返す。
 */
async function handleWorkbookTextAnswer(
  uid: string,
  replyToken: string,
  text: string,
  session: WorkbookSessionData,
  stats: WorkbookStatsData = {}
): Promise<boolean> {
  const prevXp = stats.xp ?? 0;
  const qid = session.awaiting?.qid;
  if (!qid) return false;
  const lookup = findWorkbookInputQuestion(qid);
  const { db, FieldValue } = await getDb();

  // 「やめる」等は解答ではなく中断として扱う。
  if (WORKBOOK_QUIT_WORDS.has(text.trim())) {
    try {
      await db
        .doc(`users/${uid}`)
        .set({ workbookSession: FieldValue.delete() }, { merge: true });
    } catch (error) {
      console.error('[lineWebhook] workbook quit cleanup failed:', error);
    }
    await replyText(
      replyToken,
      'おつかれさま！✨ 続きはまたワークのQRコードからいつでも解けるよ📖',
      '(workbook quit)'
    );
    return true;
  }

  if (!lookup) {
    // バンク不整合（デプロイ差し替え等）。セッションを解いて通常応答に戻す。
    try {
      await db
        .doc(`users/${uid}`)
        .set(
          { workbookSession: { awaiting: FieldValue.delete() } },
          { merge: true }
        );
    } catch {
      /* noop */
    }
    return false;
  }

  const location = resolveWorkbookTopic(
    lookup.topicName,
    WORKBOOK_QUESTION_INDEX
  );
  const userAnswer = text.trim().slice(0, 300);

  let isCorrect = false;
  let bodyText = '';
  let aiVerdict: string | undefined;
  let aiScore: number | undefined;
  let aiComment: string | undefined;

  if (lookup.kind === 'term' && lookup.term) {
    const t = lookup.term;
    isCorrect = judgeTermAnswer(userAnswer, t);
    const answerLine =
      t.reading && t.reading !== t.a ? `${t.a}（${t.reading}）` : t.a;
    bodyText = isCorrect
      ? `「${answerLine}」\n\n📖 ${t.expl}`
      : `正解は「${answerLine}」\n\n📖 ${t.expl}`;
  } else if (lookup.kind === 'written' && lookup.written) {
    const w = lookup.written;
    const graded = await gradeWrittenAnswer(
      w.q,
      [...w.keywords],
      w.model,
      userAnswer
    );
    aiVerdict = graded.verdict;
    aiComment = graded.comment;
    aiScore = graded.score;
    isCorrect = graded.verdict === 'correct';
    bodyText =
      `🤖 AI採点: ${graded.score}／10点\n${graded.comment}\n\n` +
      (graded.criteria ? `📏 採点のポイント\n${graded.criteria}\n\n` : '') +
      `📖 模範解答\n${w.model}`;
  } else {
    return false;
  }

  // 回答記録（answers）— 毎日配信と同じコレクションに残す。
  let answerDocId: string | undefined;
  try {
    const ref = await db.collection('answers').add({
      uid,
      questionId: qid,
      choice: null,
      userAnswer,
      isCorrect,
      ...(aiVerdict
        ? { aiVerdict, aiScore: aiScore ?? null, aiComment: aiComment ?? null }
        : {}),
      subject: location?.subject ?? 'history',
      grade: location?.grade ?? null,
      topic: lookup.topicName,
      source: 'workbook',
      answeredAt: FieldValue.serverTimestamp(),
    });
    answerDocId = ref.id;
  } catch (error) {
    console.error('[lineWebhook] workbook input answers write failed:', error);
  }

  // セッション更新（結果カウンタ・再採点用の直近解答）＋統計/XPの蓄積
  const xpResult =
    lookup.kind === 'written'
      ? aiVerdict === 'correct'
        ? 'correct'
        : aiVerdict === 'partial'
          ? 'partial'
          : 'wrong'
      : isCorrect
        ? 'correct'
        : 'wrong';
  const xpGain = workbookXpGain(lookup.kind, xpResult);
  const wrongEntry = {
    n: lookup.n,
    text:
      lookup.kind === 'term'
        ? (lookup.term?.q ?? '')
        : (lookup.written?.q ?? ''),
  };

  // 次の問題を同じ reply に同梱する（タップ不要で演習が進む）。
  const wbMode = parseWorkbookMode((session.mode as string) ?? null);
  const wbList = Array.isArray(session.list)
    ? session.list.filter((n) => Number.isInteger(n))
    : [];
  const nextIndex = Number.isInteger(session.index)
    ? (session.index as number)
    : 0;
  const next = await prepareWorkbookNextQuestion(
    db,
    lookup.topicName,
    lookup.kind,
    wbMode,
    nextIndex,
    wbList
  );

  // 全問終了なら結果カード（◯／◯問正解・バッジ）を同梱。
  let completionFlex: LineMessage | null = null;
  if (next.status === 'completion') {
    completionFlex = await buildWorkbookCompletionFlex(
      uid,
      lookup.topicName,
      next.total,
      lookup.kind,
      {
        correct: (session.correct ?? 0) + (isCorrect ? 1 : 0),
        wrong: isCorrect
          ? [...(session.wrong ?? [])]
          : [...(session.wrong ?? []), wrongEntry],
        stats: { ...stats, xp: prevXp + xpGain },
      }
    );
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        workbookSession: {
          awaiting: FieldValue.delete(),
          correct: FieldValue.increment(isCorrect ? 1 : 0),
          ...(isCorrect ? {} : { wrong: FieldValue.arrayUnion(wrongEntry) }),
          lastInput: {
            qid,
            text: userAnswer.slice(0, 100),
            answerDocId: answerDocId ?? null,
            wrongN: wrongEntry.n,
            wrongText: wrongEntry.text,
          },
          // 次の問題の状態（index 前進・次の awaiting 等）。completion 時は空。
          ...next.sessionFields,
        },
        ...buildWorkbookStatsUpdate(
          FieldValue,
          lookup.topicName,
          lookup.kind,
          xpGain,
          isCorrect
        ),
        ...next.topFields,
        lastAnsweredQuestionId: qid,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] workbook input session update failed:', error);
  }

  // 返信: 結果カード＋（次の問題 or 完走カード）を1回で送る。
  const sessionForCard = { ...session };
  const flex = buildWorkbookAnswerFlexMessage(bodyText, sessionForCard, {
    regrade: lookup.kind === 'term' && !isCorrect,
    xpLine: workbookXpLine(prevXp, xpGain),
    levelUp: workbookLevelUp(prevXp, xpGain),
    autoNext: true,
    verdict:
      xpResult === 'correct'
        ? 'correct'
        : xpResult === 'partial'
          ? 'partial'
          : 'wrong',
  });
  const replyMessages: LineMessage[] = [
    flex,
    ...next.messages,
    ...(completionFlex ? [completionFlex] : []),
  ];
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: replyMessages as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] workbook input answer reply failed:', error);
  }
  return true;
}

/**
 * 記述問題の Gemini 採点。10点満点のスコア・フィードバック・採点基準を JSON で返させる。
 * verdict はスコアから導出（8点以上=correct / 4〜7点=partial / 3点以下=incorrect）。
 * 失敗時は partial・5点扱い（採点不能で不正解にしない・正解にもしない中間）。
 */
async function gradeWrittenAnswer(
  question: string,
  keywords: string[],
  model: string,
  userAnswer: string
): Promise<{
  verdict: 'correct' | 'partial' | 'incorrect';
  score: number;
  comment: string;
  criteria: string;
}> {
  const system =
    'あなたは中学社会（歴史）の記述問題の採点者です。模範解答に照らして生徒の答案を10点満点で採点し、必ずJSONだけを返してください。\n' +
    '採点の考え方:\n' +
    '- 模範解答と同じ趣旨が過不足なく書けていれば9〜10点（表現の違いは減点しない）\n' +
    '- 指定語句がある場合、使っていない語句1つにつき2点減点\n' +
    '- 方向は合っているが説明不足・あいまいなら4〜7点\n' +
    '- 内容が誤っている・問いに答えていないなら0〜3点\n' +
    '出力形式: {"score":0〜10の整数,"comment":"生徒への短いフィードバック（60字以内・励ます口調・改善ポイントを具体的に）","criteria":"この問題で点をもらうために書くべきポイント（60字以内）"}';
  const user =
    `【問題】${question}\n` +
    (keywords.length > 0 ? `【指定語句】${keywords.join('・')}\n` : '') +
    `【模範解答】${model}\n【生徒の答案】${userAnswer}`;
  try {
    const { generateGeminiText } = await import('./aiChat');
    const raw = await generateGeminiText(system, user, 400);
    const m = /\{[\s\S]*\}/.exec(raw);
    if (m) {
      const parsed = JSON.parse(m[0]) as {
        score?: number;
        comment?: string;
        criteria?: string;
      };
      const score = Math.max(
        0,
        Math.min(10, Math.round(Number(parsed.score ?? 5)))
      );
      const verdict =
        score >= 8 ? 'correct' : score >= 4 ? 'partial' : 'incorrect';
      return {
        verdict,
        score,
        comment:
          (parsed.comment ?? '').slice(0, 120) ||
          '採点したよ！模範解答と見比べてみてね。',
        criteria: (parsed.criteria ?? '').slice(0, 120),
      };
    }
  } catch (error) {
    console.error('[lineWebhook] gradeWrittenAnswer failed:', error);
  }
  return {
    verdict: 'partial',
    score: 5,
    comment: 'AI採点がうまくいかなかったから、模範解答と見比べてみてね🙏',
    criteria: '',
  };
}

/**
 * postback: type=wb_iskip&questionId=... — 入力問題の「わからない」。
 * 答えと解説（記述は模範解答）を見せ、不正解として記録して次に進めるようにする。
 */
async function handleWorkbookInputSkipPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const qid = params.get('questionId');
  if (!qid || !replyToken) return;
  const lookup = findWorkbookInputQuestion(qid);
  if (!lookup) {
    await replyText(
      replyToken,
      'ごめんね、その問題が見つからなかったみたい💦 もう一度試してみてね。',
      '(wb_iskip not found)'
    );
    return;
  }

  const { db, FieldValue } = await getDb();
  let session: WorkbookSessionData = {};
  let statsFromRead: WorkbookStatsData = {};
  try {
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    session = (data?.workbookSession as WorkbookSessionData) ?? {};
    statsFromRead = (data?.workbookStats as WorkbookStatsData) ?? {};
    if (data?.lastAnsweredQuestionId === qid) {
      await replyText(
        replyToken,
        'その問題はもう答えを見てるよ😊 このまま続きをどうぞ！',
        '(wb_iskip duplicate)'
      );
      return;
    }
  } catch (error) {
    console.error('[lineWebhook] wb_iskip user read failed:', error);
  }

  const location = resolveWorkbookTopic(
    lookup.topicName,
    WORKBOOK_QUESTION_INDEX
  );
  let bodyText: string;
  if (lookup.kind === 'term' && lookup.term) {
    const t = lookup.term;
    const answerLine =
      t.reading && t.reading !== t.a ? `${t.a}（${t.reading}）` : t.a;
    bodyText = `🤔 わからなくてもOK！\n正解は「${answerLine}」\n\n📖 ${t.expl}`;
  } else if (lookup.written) {
    bodyText = `🤔 わからなくてもOK！\n\n📖 模範解答\n${lookup.written.model}`;
  } else {
    return;
  }

  try {
    await db.collection('answers').add({
      uid,
      questionId: qid,
      choice: null,
      isCorrect: false,
      idk: true,
      subject: location?.subject ?? 'history',
      grade: location?.grade ?? null,
      topic: lookup.topicName,
      source: 'workbook',
      answeredAt: FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('[lineWebhook] wb_iskip answers write failed:', error);
  }

  const wrongEntry = {
    n: lookup.n,
    text:
      lookup.kind === 'term'
        ? (lookup.term?.q ?? '')
        : (lookup.written?.q ?? ''),
  };

  // 次の問題（または完走カード）を同じ reply に同梱する。
  const skipStats = statsFromRead;
  const skipGain = workbookXpGain(lookup.kind, 'skip');
  const wbMode = parseWorkbookMode((session.mode as string) ?? null);
  const wbList = Array.isArray(session.list)
    ? session.list.filter((n) => Number.isInteger(n))
    : [];
  const nextIndex = Number.isInteger(session.index)
    ? (session.index as number)
    : 0;
  const next = await prepareWorkbookNextQuestion(
    db,
    lookup.topicName,
    lookup.kind,
    wbMode,
    nextIndex,
    wbList
  );
  let completionFlex: LineMessage | null = null;
  if (next.status === 'completion') {
    completionFlex = await buildWorkbookCompletionFlex(
      uid,
      lookup.topicName,
      next.total,
      lookup.kind,
      {
        correct: session.correct ?? 0,
        wrong: [...(session.wrong ?? []), wrongEntry],
        stats: { ...skipStats, xp: (skipStats.xp ?? 0) + skipGain },
      }
    );
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        workbookSession: {
          awaiting: FieldValue.delete(),
          wrong: FieldValue.arrayUnion(wrongEntry),
          ...next.sessionFields,
        },
        ...buildWorkbookStatsUpdate(
          FieldValue,
          lookup.topicName,
          lookup.kind,
          skipGain,
          false
        ),
        ...next.topFields,
        lastAnsweredQuestionId: qid,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] wb_iskip session update failed:', error);
  }

  const flex = buildWorkbookAnswerFlexMessage(bodyText, session, {
    autoNext: true,
    verdict: 'skip',
  });
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        flex,
        ...next.messages,
        ...(completionFlex ? [completionFlex] : []),
      ] as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] wb_iskip reply failed:', error);
  }
}

/**
 * postback: type=wb_regrade — 用語入力の「これも正解では？」再採点。
 * 別解・表記ゆれの可能性を Gemini に判定させ、正解なら answers を訂正し
 * セッションの結果カウンタも直す。
 */
async function handleWorkbookRegradePostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const { db, FieldValue } = await getDb();

  let session: WorkbookSessionData = {};
  try {
    const snap = await db.doc(`users/${uid}`).get();
    session = (snap.data()?.workbookSession as WorkbookSessionData) ?? {};
  } catch (error) {
    console.error('[lineWebhook] wb_regrade read failed:', error);
  }
  const li = session.lastInput;
  const lookup = li?.qid ? findWorkbookInputQuestion(li.qid) : undefined;
  if (!li?.text || !lookup?.term) {
    await replyText(
      replyToken,
      'ごめんね、再採点する解答が見つからなかったよ💦',
      '(wb_regrade no input)'
    );
    return;
  }

  const t = lookup.term;
  const system =
    'あなたは中学歴史の用語問題の採点者です。想定正答と生徒の答えを比べ、別解・表記ゆれ・同義の表現として正解と認められるか判定し、必ずJSONだけを返してください。\n' +
    '認める例: 漢字/かなの違い、送りがな、正式名称と通称、同一人物の別表記。認めない例: 別の用語、あいまいすぎる答え。\n' +
    '出力形式: {"accept":true|false,"reason":"短い理由（40字以内）"}';
  const user = `【問題】${t.q}\n【想定正答】${t.a}（${t.reading}）\n【生徒の答え】${li.text}`;

  let accept = false;
  let reason = '';
  try {
    const { generateGeminiText } = await import('./aiChat');
    const raw = await generateGeminiText(system, user, 200);
    const m = /\{[\s\S]*\}/.exec(raw);
    if (m) {
      const parsed = JSON.parse(m[0]) as { accept?: boolean; reason?: string };
      accept = parsed.accept === true;
      reason = (parsed.reason ?? '').slice(0, 80);
    }
  } catch (error) {
    console.error('[lineWebhook] wb_regrade gemini failed:', error);
    await replyText(
      replyToken,
      'ごめんね、再採点がうまくいかなかったよ💦 もう一度「再採点」を押してみてね。',
      '(wb_regrade ai error)'
    );
    return;
  }

  if (accept) {
    // answers の訂正＋セッション結果カウンタの修正
    try {
      if (li.answerDocId) {
        await db
          .doc(`answers/${li.answerDocId}`)
          .set({ isCorrect: true, regraded: true }, { merge: true });
      }
      await db.doc(`users/${uid}`).set(
        {
          workbookSession: {
            correct: FieldValue.increment(1),
            ...(Number.isInteger(li.wrongN)
              ? {
                  wrong: FieldValue.arrayRemove({
                    n: li.wrongN,
                    text: li.wrongText ?? '',
                  }),
                }
              : {}),
            lastInput: FieldValue.delete(),
          },
          // 再採点で正解に昇格した分の XP・正答数を補填（t は回答時に加算済み）
          workbookStats: {
            xp: FieldValue.increment(12),
            correct: FieldValue.increment(1),
            byTopic: {
              [lookup.topicName]: {
                term: { c: FieldValue.increment(1) },
              },
            },
          },
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    } catch (error) {
      console.error('[lineWebhook] wb_regrade correction failed:', error);
    }
    const fixedSession: WorkbookSessionData = {
      ...session,
      correct: (session.correct ?? 0) + 1,
    };
    const flex = buildWorkbookAnswerFlexMessage(
      `🙌 ごめんね、再採点したら…正解だったよ！\n${reason}\n記録も正解に直しておいたよ✏️`,
      fixedSession
    );
    try {
      const client = await getLineClient();
      await client.replyMessage({
        replyToken,
        messages: [flex] as unknown as messagingApi.Message[],
      });
    } catch (error) {
      console.error('[lineWebhook] wb_regrade reply failed:', error);
    }
  } else {
    const flex = buildWorkbookAnswerFlexMessage(
      `🧐 再採点したけど、やっぱり今回は❌かな。\n${reason}\n「${t.a}」で覚えておこう！`,
      session
    );
    try {
      const client = await getLineClient();
      await client.replyMessage({
        replyToken,
        messages: [flex] as unknown as messagingApi.Message[],
      });
    } catch (error) {
      console.error('[lineWebhook] wb_regrade reply failed:', error);
    }
  }
}

/**
 * ワーク演習の完走カード。「◯／◯問正解」＋間違えた問題リスト＋
 * 「🔁 もう一度」「✍️ 間違えた問題だけ」ボタン（全問正解時は正解おめでとうのみ）。
 * セッション結果は users/{uid}.workbookSession から読む（1 read）。
 */
async function buildWorkbookCompletionFlex(
  uid: string,
  topicName: string,
  total: number,
  kind: WorkbookKind,
  finals?: {
    correct: number;
    wrong: Array<{ n?: number; text?: string }>;
    stats: WorkbookStatsData;
  }
): Promise<LineMessage> {
  let correct = 0;
  let wrong: Array<{ n?: number; text?: string }> = [];
  let stats: WorkbookStatsData = {};
  const { db, FieldValue } = await getDb();
  if (finals) {
    // 回答直後の同梱経路: 最新の結果を呼び出し元から受け取る（追加 read なし）
    ({ correct, wrong, stats } = finals);
  } else {
    try {
      const snap = await db.doc(`users/${uid}`).get();
      const session = snap.data()?.workbookSession as
        | { correct?: number; wrong?: Array<{ n?: number; text?: string }> }
        | undefined;
      if (typeof session?.correct === 'number') correct = session.correct;
      if (Array.isArray(session?.wrong)) wrong = session.wrong;
      stats = (snap.data()?.workbookStats as WorkbookStatsData) ?? {};
    } catch (error) {
      console.error('[lineWebhook] workbook completion read failed:', error);
    }
  }

  const allCorrect = wrong.length === 0 && correct >= total;

  // 全問正解 → パーフェクトバッジ（単元×形式）＋ボーナスXP
  const badgeId = `${kind}:${topicName}`;
  const isNewBadge =
    allCorrect &&
    !(Array.isArray(stats.badges) && stats.badges.includes(badgeId));
  if (isNewBadge) {
    try {
      await db.doc(`users/${uid}`).set(
        {
          workbookStats: {
            badges: FieldValue.arrayUnion(badgeId),
            xp: FieldValue.increment(50),
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.error('[lineWebhook] workbook badge write failed:', error);
    }
  }
  const xpNow = (stats.xp ?? 0) + (isNewBadge ? 50 : 0);
  const { level, next } = workbookLevel(xpNow);
  const bodyContents: Record<string, unknown>[] = [
    {
      type: 'text',
      text: allCorrect
        ? '🏆 全問正解！すごい！！'
        : '🎉 最後まで解き切ったね！',
      weight: 'bold',
      size: 'md',
      color: '#111827',
      wrap: true,
    },
    {
      type: 'text',
      text: `結果: ${correct}／${total}問 正解`,
      weight: 'bold',
      size: 'lg',
      color: '#B45309',
      margin: 'md',
    },
    ...(isNewBadge
      ? [
          {
            type: 'text',
            text: `🏅 パーフェクトバッジ獲得！ ＋50XP（${badgeCount(stats) + 1}個目）`,
            wrap: true,
            size: 'sm',
            weight: 'bold',
            color: '#B45309',
            margin: 'md',
          },
        ]
      : []),
    {
      type: 'text',
      text: `⚡ Lv.${level} ・ ${xpNow}XP（あと${Math.max(0, next - xpNow)}XPでLv.${level + 1}）`,
      wrap: true,
      size: 'xs',
      color: '#6B7280',
      margin: 'sm',
    },
  ];

  if (!allCorrect && wrong.length > 0) {
    bodyContents.push({
      type: 'separator',
      margin: 'lg',
      color: '#E5E7EB',
    });
    bodyContents.push({
      type: 'text',
      text: '📝 まちがえた問題（復習しよう）',
      size: 'sm',
      weight: 'bold',
      color: '#6B7280',
      margin: 'lg',
    });
    for (const w of wrong.slice(0, 8)) {
      bodyContents.push({
        type: 'text',
        text: `(${w.n ?? '?'}) ${w.text ?? ''}`,
        size: 'xs',
        color: '#374151',
        wrap: true,
        margin: 'sm',
      });
    }
  }

  const footerContents: Record<string, unknown>[] = [];
  if (!allCorrect && wrong.length > 0) {
    const list = wrong
      .map((w) => w.n)
      .filter((n): n is number => Number.isInteger(n))
      .join(',');
    footerContents.push({
      type: 'button',
      style: 'primary',
      color: '#F59E0B',
      height: 'sm',
      action: {
        type: 'postback',
        label: '✍️ まちがえた問題だけやり直す',
        data: new URLSearchParams({
          type: 'wb_start',
          k: kind,
          m: 'retry',
          t: topicName,
          list,
        }).toString(),
        displayText: 'まちがえた問題だけやり直す',
      },
    });
  }
  footerContents.push({
    type: 'button',
    style: allCorrect ? 'primary' : 'secondary',
    ...(allCorrect ? { color: '#F59E0B' } : {}),
    height: 'sm',
    action: {
      type: 'postback',
      label: '🔁 もう一度はじめから',
      data: new URLSearchParams({
        type: 'wb_start',
        k: kind,
        m: 'seq',
        t: topicName,
      }).toString(),
      displayText: 'もう一度はじめから',
    },
  });

  // 他の形式への切り替え（4択 ⇄ 一問一答 ⇄ 記述）— 結果画面から1タップで移れる。
  const KIND_LABELS: Record<WorkbookKind, string> = {
    choice: '✅ 4択問題',
    term: '🔤 入力問題',
    written: '✍️ 記述問題',
  };
  for (const other of ['choice', 'term', 'written'] as WorkbookKind[]) {
    if (other === kind) continue;
    footerContents.push({
      type: 'button',
      style: 'secondary',
      height: 'sm',
      action: {
        type: 'postback',
        label: `${KIND_LABELS[other]}に挑戦する`,
        data: new URLSearchParams({
          type: 'wb_kind',
          k: other,
          t: topicName,
        }).toString(),
        displayText: `${KIND_LABELS[other].slice(2)}に挑戦！`,
      },
    });
  }
  footerContents.push({
    type: 'button',
    style: 'secondary',
    height: 'sm',
    action: {
      type: 'postback',
      label: '📊 ワークの成績を見る',
      data: 'type=wb_stats',
      displayText: 'ワークの成績を見る',
    },
  });

  const flex = {
    type: 'flex',
    altText: `結果: ${correct}／${total}問正解`,
    contents: {
      type: 'bubble',
      size: 'kilo',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#F59E0B',
        paddingAll: '12px',
        contents: [
          {
            type: 'text',
            text: `📖 ワーク「${topicName}」おわり`,
            color: '#FFFFFF',
            weight: 'bold',
            size: 'sm',
            wrap: true,
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        contents: bodyContents,
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '12px',
        contents: footerContents,
      },
    },
  };

  return flex as LineMessage;
}

/** ワーク完走カードを reply で送る（wb_next 旧経路・wb_start 直後の完走用） */
async function sendWorkbookCompletion(
  uid: string,
  replyToken: string | undefined,
  topicName: string,
  total: number,
  kind: WorkbookKind
): Promise<void> {
  if (!replyToken) return;
  const flex = await buildWorkbookCompletionFlex(uid, topicName, total, kind);
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [flex] as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] workbook completion reply failed:', error);
  }
}

function parseWorkbookKind(raw: string | null): WorkbookKind {
  return raw === 'term' ? 'term' : raw === 'written' ? 'written' : 'choice';
}

/** postback: type=wb_start&k=...&m={seq|rand|retry}&t={単元名}[&list=1,3] — ワーク演習の開始 */
async function handleWorkbookStartPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const kind = parseWorkbookKind(params.get('k'));
  const mode = parseWorkbookMode(params.get('m'));
  const topicName = params.get('t') ?? '';
  const list = parseWorkbookList(params.get('list'));
  await sendWorkbookQuestion(uid, replyToken, topicName, kind, mode, 0, list);
}

/** postback: type=wb_next&k=...&m=...&t=...&i=N[&list=1,3] — ワークの次の問題 */
async function handleWorkbookNextPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const kind = parseWorkbookKind(params.get('k'));
  const mode = parseWorkbookMode(params.get('m'));
  const topicName = params.get('t') ?? '';
  const index = Number(params.get('i') ?? '0');
  const list = parseWorkbookList(params.get('list'));
  await sendWorkbookQuestion(
    uid,
    replyToken,
    topicName,
    kind,
    mode,
    Number.isInteger(index) && index >= 0 ? index : 0,
    list
  );
}

/**
 * ワーク演習の正誤・解説メッセージ本体。本文（正誤＋解説）と
 * 「▶ 次の問題」「✅ 今日はここまで」ボタンを 1 つの flex カードにまとめる。
 * quickReply（画面下のチップ）はトークを遡ると消えるため、カード内ボタンにする。
 * 回答後（handleAnswerPostback）と「わからない」後（handleWorkbookIdkPostback）で共用。
 */
function buildWorkbookAnswerFlexMessage(
  bodyText: string,
  session: {
    topic?: string;
    kind?: string;
    mode?: string;
    index?: number;
    list?: number[];
  },
  opts?: {
    regrade?: boolean;
    xpLine?: string;
    levelUp?: { from: number; to: number };
    /** true のとき「▶ 次の問題」ボタンを出さない（次の問題を同じ reply に同梱する） */
    autoNext?: boolean;
    /** 正誤バナー（解答と次の問題が連続配信されるため、結果をひと目で判別できるようにする） */
    verdict?: 'correct' | 'partial' | 'wrong' | 'skip';
  }
): LineMessage {
  const VERDICT_BANNER: Record<string, { text: string; bg: string }> = {
    correct: { text: '⭕ 正解！', bg: '#16A34A' },
    partial: { text: '🔺 おしい！', bg: '#F59E0B' },
    wrong: { text: '❌ 不正解…', bg: '#DC2626' },
    skip: { text: '🤔 答えをチェック', bg: '#78716C' },
  };
  const banner = opts?.verdict ? VERDICT_BANNER[opts.verdict] : undefined;
  const kind: WorkbookKind =
    session.kind === 'term' || session.kind === 'written'
      ? session.kind
      : 'choice';
  const mode =
    session.mode === 'rand'
      ? 'rand'
      : session.mode === 'retry'
        ? 'retry'
        : 'seq';
  const solved = Number.isInteger(session.index)
    ? (session.index as number)
    : 0;
  const sessionList = Array.isArray(session.list)
    ? session.list.filter((n) => Number.isInteger(n))
    : [];
  const nextData = new URLSearchParams({
    type: 'wb_next',
    k: kind,
    m: mode,
    t: session.topic ?? '',
    i: String(solved),
    ...(sessionList.length > 0 ? { list: sessionList.join(',') } : {}),
  }).toString();

  // 進捗表示（あと何問）: 固定の並び（seq/retry/入力問題のrand）は残り数、
  // 4択のランダム（エンドレス）は挑戦数を出す。
  const input = getWorkbookInput(session.topic ?? '');
  const baseTotal =
    kind === 'term'
      ? input.terms.length
      : kind === 'written'
        ? input.written.length
        : getTopicQuestionIds(session.topic ?? '', WORKBOOK_QUESTION_INDEX)
            .length;
  const total = sessionList.length > 0 ? sessionList.length : baseTotal;
  const remaining = Math.max(0, total - solved);
  const progressText =
    remaining > 0
      ? `📊 ${solved}／${total}問 ・ あと${remaining}問！`
      : `🏁 これで全${total}問！`;
  const nextLabel = remaining === 0 ? '🎉 結果を見る' : '▶ 次の問題';

  return {
    type: 'flex',
    altText: (banner ? banner.text + ' ' : '') + bodyText.slice(0, 60),
    contents: {
      type: 'bubble',
      size: 'kilo',
      ...(banner
        ? {
            header: {
              type: 'box',
              layout: 'vertical',
              backgroundColor: banner.bg,
              paddingAll: '14px',
              contents: [
                {
                  type: 'text',
                  text: banner.text,
                  color: '#FFFFFF',
                  weight: 'bold',
                  size: 'xl',
                  align: 'center',
                },
              ],
            },
          }
        : {}),
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        contents: [
          // レベルアップ演出（金色バナー）— XP がしきい値を越えた回答の直後だけ出る
          ...(opts?.levelUp
            ? [
                {
                  type: 'box',
                  layout: 'vertical',
                  backgroundColor: '#FDE68A',
                  cornerRadius: 'md',
                  paddingAll: '12px',
                  margin: 'none',
                  contents: [
                    {
                      type: 'text',
                      text: '🎊 レベルアップ！ 🎊',
                      weight: 'bold',
                      size: 'lg',
                      color: '#92400E',
                      align: 'center',
                    },
                    {
                      type: 'text',
                      text: `✨ Lv.${opts.levelUp.from} → Lv.${opts.levelUp.to} ✨`,
                      weight: 'bold',
                      size: 'xl',
                      color: '#B45309',
                      align: 'center',
                      margin: 'sm',
                    },
                    {
                      type: 'text',
                      text: 'この調子でどんどん強くなろう💪',
                      size: 'xs',
                      color: '#92400E',
                      align: 'center',
                      margin: 'sm',
                    },
                  ],
                },
                { type: 'separator', margin: 'lg', color: '#E5E7EB' },
              ]
            : []),
          {
            type: 'text',
            text: bodyText,
            wrap: true,
            size: 'sm',
            color: '#111827',
            ...(opts?.levelUp ? { margin: 'lg' } : {}),
          },
          {
            type: 'separator',
            margin: 'lg',
            color: '#E5E7EB',
          },
          {
            type: 'text',
            text: progressText,
            wrap: true,
            size: 'sm',
            weight: 'bold',
            color: '#B45309',
            margin: 'lg',
          },
          ...(opts?.xpLine
            ? [
                {
                  type: 'text',
                  text: opts.xpLine,
                  wrap: true,
                  size: 'xs',
                  color: '#6B7280',
                  margin: 'sm',
                },
              ]
            : []),
        ],
      },
      ...(() => {
        const buttons: Record<string, unknown>[] = [];
        if (!opts?.autoNext) {
          buttons.push({
            type: 'button',
            style: 'primary',
            color: '#F59E0B',
            height: 'sm',
            action: {
              type: 'postback',
              label: nextLabel,
              data: nextData,
              displayText: '次の問題！',
            },
          });
        }
        // 用語入力の不正解時のみ: 別解の可能性を AI に再採点してもらうボタン
        if (opts?.regrade) {
          buttons.push({
            type: 'button',
            style: 'secondary',
            height: 'sm',
            action: {
              type: 'postback',
              label: '🙋 これも正解では？（再採点）',
              data: 'type=wb_regrade',
              displayText: 'これも正解では？',
            },
          });
        }
        return buttons.length > 0
          ? {
              footer: {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                paddingAll: '12px',
                contents: buttons,
              },
              styles: {
                footer: { separator: true, separatorColor: '#E5E7EB' },
              },
            }
          : {};
      })(),
    },
  } as LineMessage;
}

/**
 * postback: type=wb_idk&questionId=... — ワーク問題の「わからない」。
 * 答えと解説を見せ、**不正解として answers に記録**して（苦手復習の対象になる）、
 * 次の問題（または完走カード）を同じ reply に同梱して演習を続けられるようにする。
 */
async function handleWorkbookIdkPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const questionId = params.get('questionId');
  if (!questionId || !replyToken) return;

  const { db, FieldValue } = await getDb();

  let currentUserData: Record<string, unknown> | undefined;
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    currentUserData = userSnap.data();
    if (currentUserData?.lastAnsweredQuestionId === questionId) {
      await replyText(
        replyToken,
        'その問題はもう答えを見てるよ😊 このまま続きをどうぞ！',
        '(wb_idk duplicate)'
      );
      return;
    }
  } catch (error) {
    console.error('[lineWebhook] wb_idk user read failed:', error);
  }

  let question: Question | undefined;
  try {
    const snap = await db.doc(`questions/${questionId}`).get();
    if (snap.exists) question = snap.data() as Question;
  } catch (error) {
    console.error('[lineWebhook] wb_idk question read failed:', error);
  }
  if (!question) {
    await replyText(
      replyToken,
      'ごめんね、その問題が見つからなかったみたい💦 もう一度試してみてね。',
      '(wb_idk not found)'
    );
    return;
  }

  const correctLabel = question.choices[question.correctChoiceId];
  const text =
    '🤔 わからなくてもOK！まちがえながら覚えていくのが勉強だよ。\n\n' +
    `正解は「${correctLabel}」` +
    '\n\n📖 解説\n' +
    question.explanation;

  const wbSession = currentUserData?.workbookSession as
    | WorkbookSessionData
    | undefined;
  const isWb = !!wbSession && typeof wbSession.topic === 'string';
  const wbWrongEntry = {
    n: workbookQuestionNo(questionId),
    text: question.text.slice(0, 60),
  };
  const skipStats =
    (currentUserData?.workbookStats as WorkbookStatsData | undefined) ?? {};
  const skipGain = workbookXpGain('choice', 'skip');

  // 次の問題（または完走カード）を同じ reply に同梱する。
  let next: WorkbookNextPayload | null = null;
  let completionFlex: LineMessage | null = null;
  if (isWb) {
    const wbMode = parseWorkbookMode((wbSession!.mode as string) ?? null);
    const wbList = Array.isArray(wbSession!.list)
      ? wbSession!.list.filter((n) => Number.isInteger(n))
      : [];
    const nextIndex = Number.isInteger(wbSession!.index)
      ? (wbSession!.index as number)
      : 0;
    next = await prepareWorkbookNextQuestion(
      db,
      wbSession!.topic as string,
      'choice',
      wbMode,
      nextIndex,
      wbList
    );
    if (next.status === 'completion') {
      completionFlex = await buildWorkbookCompletionFlex(
        uid,
        wbSession!.topic as string,
        next.total,
        'choice',
        {
          correct: wbSession!.correct ?? 0,
          wrong: [...(wbSession!.wrong ?? []), wbWrongEntry],
          stats: { ...skipStats, xp: (skipStats.xp ?? 0) + skipGain },
        }
      );
    }
  }

  try {
    const client = await getLineClient();
    const messages: LineMessage[] = isWb
      ? [
          buildWorkbookAnswerFlexMessage(text, wbSession!, {
            autoNext: true,
            verdict: 'skip',
          }),
          ...(next?.messages ?? []),
          ...(completionFlex ? [completionFlex] : []),
        ]
      : [{ type: 'text', text }];
    await client.replyMessage({
      replyToken,
      messages: messages as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] wb_idk reply failed:', error);
  }

  // 「わからない」も学習記録として残す（不正解扱い・choice なし）。
  // answers に残ることで苦手復習・成績集計の対象になる。
  try {
    await db.collection('answers').add({
      uid,
      questionId,
      choice: null,
      isCorrect: false,
      idk: true,
      subject: question.subject ?? null,
      grade: question.grade ?? null,
      topic: question.topic ?? null,
      source: 'workbook',
      answeredAt: FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('[lineWebhook] wb_idk answers write failed:', error);
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        lastAnsweredQuestionId: questionId,
        updatedAt: FieldValue.serverTimestamp(),
        // 「わからない」も間違えた問題として完走カードの復習リストに積み、
        // 次の問題の状態（index 前進等）も相乗りさせる。
        ...(isWb
          ? {
              workbookSession: {
                wrong: FieldValue.arrayUnion(wbWrongEntry),
                ...(next?.sessionFields ?? {}),
              },
              ...buildWorkbookStatsUpdate(
                FieldValue,
                wbSession!.topic as string,
                'choice',
                skipGain,
                false
              ),
              ...(next?.topFields ?? {}),
            }
          : {}),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] wb_idk lastAnswered update failed:', error);
  }
}

/**
 * postback: type=wb_stats（またはテキスト「ワーク成績」）— 進捗・苦手ダッシュボード。
 * データは回答時に蓄積済みの users.workbookStats を使う（1 read のみ・answers はスキャンしない）。
 */
async function handleWorkbookStatsPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  let stats: WorkbookStatsData = {};
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    stats = (snap.data()?.workbookStats as WorkbookStatsData) ?? {};
  } catch (error) {
    console.error('[lineWebhook] wb_stats read failed:', error);
  }

  const total = stats.total ?? 0;
  if (total === 0) {
    await replyText(
      replyToken,
      'まだワークの記録がないよ📖 ワークのQRコードから問題を解くと、ここに成績がたまっていくよ！',
      '(wb_stats empty)'
    );
    return;
  }

  const xp = stats.xp ?? 0;
  const correct = stats.correct ?? 0;
  const { level, next } = workbookLevel(xp);
  const acc = Math.round((correct / total) * 100);

  // 形式別の集計と、単元別の成績（byTopic はメモリ集計・read なし）
  const KIND_JP: Record<string, string> = {
    choice: '4択',
    term: '入力',
    written: '記述',
  };
  const byKind: Record<string, { t: number; c: number }> = {};
  const topicRows: Array<{ topic: string; t: number; c: number }> = [];
  for (const [topic, kinds] of Object.entries(stats.byTopic ?? {})) {
    let tt = 0;
    let tc = 0;
    for (const [k, v] of Object.entries(kinds)) {
      const t = v.t ?? 0;
      const c = v.c ?? 0;
      (byKind[k] ??= { t: 0, c: 0 }).t += t;
      byKind[k].c += c;
      tt += t;
      tc += c;
    }
    if (tt > 0) topicRows.push({ topic, t: tt, c: tc });
  }
  // 苦手 = 5問以上解いて正答率60%未満（低い順に最大3件）
  const weak = topicRows
    .filter((r) => r.t >= 5 && r.c / r.t < 0.6)
    .sort((a, b) => a.c / a.t - b.c / b.t)
    .slice(0, 3);
  // よく解いている単元 上位3
  const top = [...topicRows].sort((a, b) => b.t - a.t).slice(0, 3);

  const bodyContents: Record<string, unknown>[] = [
    {
      type: 'text',
      text: `⚡ Lv.${level} ${xp}XP`,
      weight: 'bold',
      size: 'xl',
      color: '#B45309',
    },
    // XPバー（現レベル帯の進み具合）
    (() => {
      const prevThreshold = 50 * (level - 1) * (level - 1);
      const ratio = Math.min(
        100,
        Math.max(
          4,
          Math.round(((xp - prevThreshold) / (next - prevThreshold)) * 100)
        )
      );
      return {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#F3F4F6',
        cornerRadius: 'md',
        height: '10px',
        margin: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            backgroundColor: '#F59E0B',
            cornerRadius: 'md',
            width: `${ratio}%`,
            height: '10px',
            contents: [{ type: 'filler' }],
          },
        ],
      };
    })(),
    {
      type: 'text',
      text: `あと${Math.max(0, next - xp)}XPでLv.${level + 1} 🏅 バッジ ${badgeCount(stats)}個`,
      size: 'xs',
      color: '#6B7280',
      margin: 'sm',
    },
    { type: 'separator', margin: 'lg', color: '#E5E7EB' },
    {
      type: 'text',
      text: `📈 これまでに ${total}問 ・ 正答率 ${acc}%`,
      size: 'sm',
      weight: 'bold',
      color: '#111827',
      margin: 'lg',
      wrap: true,
    },
    ...Object.entries(byKind).map(([k, v]) => ({
      type: 'text',
      text: `・${KIND_JP[k] ?? k}: ${v.c}／${v.t}問（${Math.round((v.c / v.t) * 100)}%）`,
      size: 'xs',
      color: '#374151',
      margin: 'sm',
    })),
  ];

  if (top.length > 0) {
    bodyContents.push({ type: 'separator', margin: 'lg', color: '#E5E7EB' });
    bodyContents.push({
      type: 'text',
      text: '📚 よく解いている単元',
      size: 'sm',
      weight: 'bold',
      color: '#111827',
      margin: 'lg',
    });
    for (const r of top) {
      bodyContents.push({
        type: 'text',
        text: `・${r.topic}: ${r.c}／${r.t}問（${Math.round((r.c / r.t) * 100)}%）`,
        size: 'xs',
        color: '#374151',
        wrap: true,
        margin: 'sm',
      });
    }
  }

  if (weak.length > 0) {
    bodyContents.push({ type: 'separator', margin: 'lg', color: '#E5E7EB' });
    bodyContents.push({
      type: 'text',
      text: '💪 ニガテな単元（正答率60%未満）',
      size: 'sm',
      weight: 'bold',
      color: '#B45309',
      margin: 'lg',
    });
    for (const r of weak) {
      bodyContents.push({
        type: 'text',
        text: `・${r.topic}: ${Math.round((r.c / r.t) * 100)}%`,
        size: 'xs',
        color: '#374151',
        wrap: true,
        margin: 'sm',
      });
    }
  }

  // 苦手単元にすぐ挑戦できるボタン（最大2つ）
  const footerContents: Record<string, unknown>[] = weak
    .slice(0, 2)
    .map((r) => ({
      type: 'button',
      style: 'primary',
      color: '#F59E0B',
      height: 'sm',
      action: {
        type: 'postback',
        label: `💪 「${r.topic.slice(0, 10)}」に再挑戦`,
        data: new URLSearchParams({
          type: 'wb_kind',
          k: 'choice',
          t: r.topic,
        }).toString(),
        displayText: `${r.topic}に再挑戦！`,
      },
    }));

  const flex = {
    type: 'flex',
    altText: `📊 ワーク成績: Lv.${level} ・ 正答率${acc}%`,
    contents: {
      type: 'bubble',
      size: 'kilo',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#F59E0B',
        paddingAll: '12px',
        contents: [
          {
            type: 'text',
            text: '📊 ワークのせいせき',
            color: '#FFFFFF',
            weight: 'bold',
            size: 'sm',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        contents: bodyContents,
      },
      ...(footerContents.length > 0
        ? {
            footer: {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              paddingAll: '12px',
              contents: footerContents,
            },
          }
        : {}),
    },
  };

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [flex] as unknown as messagingApi.Message[],
    });
  } catch (error) {
    console.error('[lineWebhook] wb_stats reply failed:', error);
  }
}

/**
 * ワーク用タブ付きリッチメニューの自動リンクを有効にするか。
 * Codex 製の本デザイン画像に差し替えてユーザー承認が取れたら true に戻す。
 */
const WORKBOOK_RICHMENU_ENABLED = false;

/**
 * ワーク利用者にタブ付きリッチメニュー（workbook）をリンクする。
 * premium / trial のメニューは奪わない。すでに workbook なら何もしない。
 * fire-and-forget 前提（失敗は warn のみ・演習フローを止めない）。
 */
async function linkWorkbookMenuIfEligible(uid: string): Promise<void> {
  try {
    const { db, FieldValue } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    const current = data?.richMenuType;
    if (
      current === 'workbook' ||
      current === 'premium' ||
      current === 'trial'
    ) {
      return;
    }
    const lineUserId =
      typeof data?.lineUserId === 'string'
        ? data.lineUserId
        : uid.startsWith('line:')
          ? uid.slice('line:'.length)
          : '';
    if (!lineUserId) return;
    const { linkRichMenuForUser } = await import('./lineRichMenu');
    await linkRichMenuForUser(lineUserId, 'workbook');
    await db.doc(`users/${uid}`).set(
      {
        richMenuType: 'workbook',
        lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log(`[lineWebhook] workbook richmenu linked: ${uid}`);
  } catch (error) {
    console.warn(
      '[lineWebhook] workbook menu link skipped:',
      (error as Error).message
    );
  }
}

/** postback: type=wb_recent — 前回解いていた単元の種類選択カードを出す（リッチメニュー用） */
async function handleWorkbookRecentPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  let topic: string | undefined;
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const session = snap.data()?.workbookSession as
      | WorkbookSessionData
      | undefined;
    topic = session?.topic;
  } catch (error) {
    console.error('[lineWebhook] wb_recent read failed:', error);
  }
  if (!topic) {
    await replyText(
      replyToken,
      'まだ解いた単元がないよ📖 ワークのQRコードを読み取るか、「ワーク 単元名」と送って始めよう！',
      '(wb_recent empty)'
    );
    return;
  }
  await handleWorkbookQuestion(uid, replyToken, `ワーク ${topic}`);
}

/** postback: type=wb_weak — いちばんニガテな単元にすぐ再挑戦（リッチメニュー用） */
async function handleWorkbookWeakPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  let stats: WorkbookStatsData = {};
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    stats = (snap.data()?.workbookStats as WorkbookStatsData) ?? {};
  } catch (error) {
    console.error('[lineWebhook] wb_weak read failed:', error);
  }
  const rows: Array<{ topic: string; acc: number; t: number }> = [];
  for (const [topic, kinds] of Object.entries(stats.byTopic ?? {})) {
    let t = 0;
    let c = 0;
    for (const v of Object.values(kinds)) {
      t += v.t ?? 0;
      c += v.c ?? 0;
    }
    if (t >= 5) rows.push({ topic, acc: c / t, t });
  }
  const weak = rows.filter((r) => r.acc < 0.6).sort((a, b) => a.acc - b.acc);
  if (weak.length === 0) {
    await replyText(
      replyToken,
      '🎉 いまのところ大きなニガテはないよ！この調子💪\n（5問以上解いた単元の正答率が60%を切るとここに出るよ）',
      '(wb_weak empty)'
    );
    return;
  }
  await handleWorkbookQuestion(uid, replyToken, `ワーク ${weak[0].topic}`);
}

/** postback: type=wb_end — ワーク演習を切り上げる */
async function handleWorkbookEndPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  try {
    const { db, FieldValue } = await getDb();
    await db
      .doc(`users/${uid}`)
      .set({ workbookSession: FieldValue.delete() }, { merge: true });
  } catch (error) {
    console.error('[lineWebhook] workbook end cleanup failed:', error);
  }
  if (replyToken) {
    await replyText(
      replyToken,
      'おつかれさま！✨ 今日もよくがんばったね。続きはまたワークのQRコードからいつでも解けるよ📖',
      '(workbook end)'
    );
  }
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
 * 動画メッセージへの定型返信。動画は AI が視聴できないため、写真/テキストへの
 * 誘導と、どうしても見てほしいときは運営（夫婦）が確認する旨を伝える。
 * reply 送信なので配信枠は消費しない。
 */
const VIDEO_UNSUPPORTED_TEXT =
  '動画ありがとう🎥 ごめんね、スタ先生（AI）は動画を見ることができないんだ💦 ' +
  'もし問題でわからないところなら、写真かテキストで送ってくれたらすぐ答えられるよ😊 ' +
  'それでもどうしても動画を見てほしいときは、運営の夫婦がちゃんと確認するから、その旨をメッセージで送ってね！';

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
    const { getDailyLimit, getJstDate, evaluateRateLimit } =
      await import('./aiChatCore');
    const { LIMIT_REACHED_TEXT } = await import('./aiChat');
    const plan = getUserPlan(userData);
    const aiChat = (
      userData as { aiChat?: Parameters<typeof evaluateRateLimit>[0] }
    )?.aiChat;
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

// ── スタンプメッセージ → AI チャットボット ────────────────────────────────
//
// スタンプの実体（絵柄）は画像認識せず、LINE が付与するメタ情報だけで内容を
// 把握する。優先順位:
//   1. message.text … メッセージスタンプ（文字入り）の文字を最優先
//   2. message.keywords … スタンプの意味・感情キーワード（無いこともある）
//   3. どちらも無ければ「スタンプを送ってくれた」事実だけを伝える
// いずれの場合も handleAiChat が会話履歴を含めて応答するため、「これまでの
// 会話＋スタンプ」を踏まえた返事になる。レート制限・履歴・計測も handleAiChat
// 内で完結する（reply 送信なので配信枠は消費しない）。
async function handleStickerMessage(event: LineEvent): Promise<void> {
  const message = event.message;
  const replyToken = event.replyToken;
  const uid = buildUid(event);
  if (!message || !replyToken || !uid) {
    console.warn(
      '[lineWebhook] handleStickerMessage: missing message/token/uid'
    );
    return;
  }

  // AI に渡すユーザー発話テキストを合成する。履歴にもこの文字列が user 側の
  // ターンとして残るため、自然文として読める形にしておく。
  const stickerText = message.text?.trim();
  const keywords = (message.keywords ?? [])
    .map((k) => (typeof k === 'string' ? k.trim() : ''))
    .filter(Boolean);

  let userText: string;
  if (stickerText) {
    // (1) メッセージスタンプの文字をそのまま発話として扱う。
    userText = stickerText;
  } else if (keywords.length > 0) {
    // (2) キーワードからスタンプの意味を伝える。
    userText = `（スタンプを送りました。意味: ${keywords.slice(0, 5).join('・')}）`;
  } else {
    // (3) 手がかりが無いときは、送ってくれた事実だけ伝えて会話文脈で返答させる。
    userText = '（スタンプを送りました）';
  }

  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const userData = snap.data();
    const { handleAiChat } = await import('./aiChat');
    await handleAiChat(uid, replyToken, userText, userData as never);
  } catch (error) {
    console.error('[lineWebhook] handleStickerMessage failed:', error);
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
  await handleRestartIntent(
    uid,
    replyToken,
    event,
    previousStatus,
    'winback_cta'
  );
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
        // 復帰の意思表示なので、配信一時停止（設定メニューの「おやすみ」）も解除する。
        deliveryPaused: false,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    // status_transition→active の定点指標を埋める（previousStatus が active 以外＝
    // 実際に休眠から戻ったときだけ記録）。onAnswerCreated の自然復帰と合わせて
    // 「回復遷移」を可視化する。夜間 cron はここで既に active に戻った後に走るため
    // この経路でしか回復遷移を観測できない。
    if (previousStatus && previousStatus !== 'active') {
      try {
        const { logServerFunnelEvent } = await import('./funnelEvent');
        await logServerFunnelEvent('status_transition', uid, {
          from: previousStatus,
          to: 'active',
          source,
        });
      } catch (error) {
        console.warn(
          '[lineWebhook] restart status_transition log failed:',
          error
        );
      }
    }
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
    await selectAndSendQuestion(uid, {
      pushType: 'restartWelcome',
      source: 'restart',
      // 直前に「おかえり」replyを送っているため、問題カード側の
      // カムバック系intro（「おかえり！…」）と二重にならないよう固定introを渡す
      introText: 'さっそく今日の1問だよ👇',
    });
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
        'ごめんね、設定変更は1日1回までなんだ🙏\nまた明日試してみてね。',
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
        { type: 'text', text: '設定を変更するよ。まずは学年を選んでね。' },
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

// ── 友だち追加直後の「おためし1問」 ─────────────────────────────
//
// ブロックの46%が登録48h以内・無回答層のブロック率28.7%（KPI実測）への対策。
// オンボ完了（学年・教科・時刻の登録）を待たずに、follow の最初の reply で
// 学年不問の1問をタップ体験させ、「解ける→解説が届く→楽しい」を先に作る。
// Firestore の questions / answers / stats には一切触れない自己完結の静的問題
// （postback data に選択肢 index を載せるだけ）なので、学習記録を汚さない。

const SAMPLE_QUESTION = {
  text: '江戸幕府を開いた人物はだれ？',
  choices: ['徳川家康', '織田信長', '豊臣秀吉', '源頼朝'],
  correctIndex: 0,
  explanation:
    '1603年、徳川家康が征夷大将軍になって江戸幕府を開いたよ。ここから約260年つづく「江戸時代」の始まり！',
} as const;

function buildSampleQuestionFlex() {
  return {
    type: 'flex' as const,
    altText: `おためし1問: ${SAMPLE_QUESTION.text}`,
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
            text: '🎁 おためし1問チャレンジ',
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
        contents: [
          {
            type: 'text' as const,
            text: SAMPLE_QUESTION.text,
            wrap: true,
            weight: 'bold' as const,
            size: 'lg' as const,
            color: '#111827',
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: SAMPLE_QUESTION.choices.map((choice, i) => ({
          type: 'box' as const,
          layout: 'horizontal' as const,
          paddingAll: '10px',
          cornerRadius: 'md' as const,
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB',
          borderWidth: '1px',
          action: {
            type: 'postback' as const,
            label: choice,
            data: `type=sample_answer&c=${i}`,
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
    },
  };
}

/**
 * おためし1問の回答。正誤＋解説＋「毎日こんな1問が届くよ」を返し、
 * オンボ未完了ならそのまま学年選択 flex を再提示して登録に接続する。
 * 何度タップしても同じように応える（状態を持たない・冪等）。
 */
async function handleSampleAnswerPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const choiceRaw = Number(params.get('c'));
  const choice =
    Number.isInteger(choiceRaw) &&
    choiceRaw >= 0 &&
    choiceRaw < SAMPLE_QUESTION.choices.length
      ? choiceRaw
      : null;
  if (choice === null) {
    await replyText(
      replyToken,
      'もう一度選択肢を選んでみてね。',
      '(sample_answer: bad choice)'
    );
    return;
  }
  const isCorrect = choice === SAMPLE_QUESTION.correctIndex;

  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('sample_question_answered', uid, {
      correct: isCorrect,
    });
  } catch (error) {
    console.warn('[lineWebhook] sample_question_answered log failed:', error);
  }

  // オンボ完了済みかどうかで後続の案内を変える（1 read）。
  let setupComplete = false;
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    setupComplete = isInitialSetupComplete(snap.data());
  } catch (error) {
    console.warn('[lineWebhook] sample_answer user read failed:', error);
  }

  const feedback = isCorrect
    ? '⭕ せいかい！すごい、その調子！🎉'
    : `❌ おしい！正解は「${SAMPLE_QUESTION.choices[SAMPLE_QUESTION.correctIndex]}」だよ。`;
  const body =
    `${feedback}\n\n📖 ${SAMPLE_QUESTION.explanation}\n\n` +
    `こんなふうに、登録した時間に1問がこのLINEに届いて、答えるとすぐ解説が読めるよ📚`;

  try {
    const client = await getLineClient();
    const messages: messagingApi.Message[] = setupComplete
      ? [
          {
            type: 'text',
            text: `${body}\n\nメニューの「1問解く」から、本番の問題にも挑戦してみてね！`,
          },
        ]
      : [
          { type: 'text', text: body },
          {
            type: 'text',
            text: 'きみに合った問題を届けるために、まずは学年を教えてね👇',
          },
          buildGradeSelectMessage() as unknown as messagingApi.Message,
        ];
    await client.replyMessage({ replyToken, messages });
  } catch (error) {
    console.error('[lineWebhook] sample_answer reply failed:', error);
  }
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

  // 最初の reply に「おためし1問」を同梱する（P0-3）。ブロックの46%が登録48h
  // 以内・無回答層ほどブロックしやすい実測に対し、登録より先に成功体験を作る。
  // おためしに答えても学年選択 flex から通常オンボへ続く（sample_answer 側でも
  // 未完了なら学年選択を再提示するので、どちらの順でタップしても詰まらない）。
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text:
            'はじめまして！「チャットでスタディ」に登録してくれてありがとう😊\n\n' +
            'まずは、ためしにこんな1問をどうぞ👇（例として歴史の問題だよ。選択肢をタップするだけ！）\n\n' +
            'そのあと、学年・教科・配信時刻の3つだけ教えてね。すぐ終わるよ！\n（保護者の方は、お子様の情報を選んでください）',
        },
        buildSampleQuestionFlex() as unknown as messagingApi.Message,
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
    console.error(
      '[lineWebhook] handleUnfollow firestore write failed:',
      error
    );
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

  if (type === 'wb_start') {
    await handleWorkbookStartPostback(uid, replyToken, params);
    return;
  }

  if (type === 'wb_next') {
    await handleWorkbookNextPostback(uid, replyToken, params);
    return;
  }

  if (type === 'wb_end') {
    await handleWorkbookEndPostback(uid, replyToken);
    return;
  }

  if (type === 'wb_idk') {
    await handleWorkbookIdkPostback(uid, replyToken, params);
    return;
  }

  if (type === 'wb_kind') {
    await handleWorkbookKindPostback(uid, replyToken, params);
    return;
  }

  if (type === 'wb_iskip') {
    await handleWorkbookInputSkipPostback(uid, replyToken, params);
    return;
  }

  if (type === 'wb_regrade') {
    await handleWorkbookRegradePostback(uid, replyToken);
    return;
  }

  if (type === 'wb_stats') {
    await handleWorkbookStatsPostback(uid, replyToken);
    return;
  }

  if (type === 'wb_recent') {
    await handleWorkbookRecentPostback(uid, replyToken);
    return;
  }

  if (type === 'wb_weak') {
    await handleWorkbookWeakPostback(uid, replyToken);
    return;
  }

  if (type === 'wb_help') {
    if (replyToken) {
      await replyText(
        replyToken,
        '📖 ワーク問題集の使い方\n\n' +
          '① 紙のワークにあるQRコードをスマホで読み取る（またはPDFのリンクをタップ）\n' +
          '② 問題カードが自動でトークに届く\n' +
          '③ 4択・入力・記述からえらんで挑戦！\n\n' +
          '💡 直接「ワーク 大化の改新」のように送ってもOK\n' +
          '💡「ワーク成績」でレベルやニガテを確認できるよ',
        '(wb_help)'
      );
    }
    return;
  }

  if (type === 'ref_ask') {
    await handleReferenceAskPostback(uid, replyToken, params);
    return;
  }

  if (type === 'ref_talk') {
    await handleReferenceTalkPostback(uid, replyToken, params);
    return;
  }

  if (type === 'ref_check') {
    await handleReferenceCheckPostback(uid, replyToken, params);
    return;
  }

  if (type === 'ref_level') {
    await handleReferenceLevelPostback(uid, replyToken, params);
    return;
  }

  if (type === 'rm_switch') {
    // リッチメニューのタブ切替はクライアント側で完結する。応答不要。
    return;
  }

  if (type === 'extra_question') {
    await handleExtraQuestionPostback(uid, replyToken, params.get('src'));
    return;
  }

  if (type === 'restart') {
    await handleRestartPostback(uid, replyToken, event);
    return;
  }

  if (type === 'open_mubista') {
    await handleOpenMubista(uid, replyToken);
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
    await handleSettingsMenuPostback(uid, replyToken);
    return;
  }

  if (type === 'settings_guide') {
    await handleSettingsGuidePostback(uid, replyToken);
    return;
  }

  if (type === 'pause_delivery') {
    await handlePauseDeliveryPostback(uid, replyToken);
    return;
  }

  if (type === 'resume_delivery') {
    await handleResumeDeliveryPostback(uid, replyToken);
    return;
  }

  if (type === 'change_learning') {
    await handleChangeLearningStart(uid, replyToken);
    return;
  }

  if (type === 'change_learning_grade') {
    await handleChangeLearningGrade(replyToken, params);
    return;
  }

  if (type === 'change_learning_subject') {
    await handleChangeLearningSubject(uid, replyToken, params);
    return;
  }

  if (type === 'report_summary') {
    await handleReportSummaryPostback(uid, replyToken);
    return;
  }

  if (type === 'monthly_report') {
    const { handleMonthlyReportPostback } = await import('./monthlyReport');
    await handleMonthlyReportPostback(uid, replyToken, params);
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

  if (type === 'scope_finish') {
    await handleScopeFinishPostback(uid, replyToken, params);
    return;
  }

  if (type === 'sample_answer') {
    await handleSampleAnswerPostback(uid, replyToken, params);
    return;
  }

  if (type === 'not_learned') {
    await handleNotLearnedPostback(uid, replyToken, params);
    return;
  }

  if (type === 'not_learned_apply') {
    await handleNotLearnedApplyPostback(uid, replyToken, params);
    return;
  }

  if (type === 'premium_info') {
    // プレミアム廃止中（PREMIUM_FLOW_ENABLED=false）は訴求 flex を返さない。
    // ただしこの postback は残置の旧メニュー/旧 flex（「もっと解く」ボタン等）から
    // タップされ得るため、無反応にせず「全員無料になった」案内を reply する。
    if (PREMIUM_FLOW_ENABLED) {
      await handlePremiumInfoPostback(replyToken, uid, params.get('source'));
    } else if (replyToken) {
      // 旧メニューには「1問解く」ボタンが無いため、案内だけで終わらせず
      // そのまま追加の1問を同じ reply で届ける（配信枠ゼロ）。
      await selectAndSendQuestion(uid, {
        replyToken,
        introText:
          'おしらせ：いまは追加問題も苦手復習も、ぜんぶ無料で使えるようになったよ🎉\n' +
          'さっそく1問どうぞ👇',
        bypassDailyLimit: true,
        source: 'extra',
      });
    }
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
    // プレミアム廃止中（PREMIUM_FLOW_ENABLED=false）は常に出さない。
    showPremiumCta =
      PREMIUM_FLOW_ENABLED &&
      getUserPlan(data) === 'free' &&
      isPremiumEligibleGrade(data?.grade);
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

  // ユーザーの plan と学年を取って flex に渡し、premium CTA の出し分けに使う。
  // streak 表示は `users.stats`（onAnswerCreated が transaction で維持する真値）
  // から組み立てる。以前は answers を limit(500) で再計算していたが、
  // ①週1おやすみ免除（streakState）と表示が食い違う ②1タップ500 read かかる
  // ため stats 真値化した（2026-07）。
  let plan: UserPlan = 'free';
  // プレミアム廃止中はデフォルト false（read 失敗時も CTA を出さない）。
  let gradePremiumEligible = PREMIUM_FLOW_ENABLED;
  let userStats: Record<string, unknown> | undefined;
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    const data = userSnap.data();
    plan = getUserPlan(data);
    // プレミアム廃止中（PREMIUM_FLOW_ENABLED=false）は成績・記録 flex の
    // プレミアム CTA を出さない（gradePremiumEligible=false に倒す）。
    gradePremiumEligible =
      PREMIUM_FLOW_ENABLED && isPremiumEligibleGrade(data?.grade);
    userStats = data?.stats as Record<string, unknown> | undefined;
  } catch (error) {
    console.error('[lineWebhook] handleStreak user fetch failed:', error);
    await replyText(
      replyToken,
      '記録の取得に失敗しました。少し時間を置いて試してください。',
      '(streak fetch error)'
    );
    return;
  }

  const stats = computeStreakStatsFromUserStats(userStats);
  const flex = buildStreakFlexMessage(stats, plan, gradePremiumEligible);
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handleStreak reply failed:', error);
  }
}

async function handleSettingsMenuPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const flex = buildSettingsMenuFlexMessage(await isDeliveryPaused(uid));
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
  // 「時代」は歴史だけ。他教科は「単元」と表記する。
  const unitNoun = subject === 'history' ? '時代' : '単元';
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
            // 行頭の全角スペースは意図的（LINE flex 上で用語リストを字下げ表示）
            // eslint-disable-next-line no-irregular-whitespace
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
            text: '習ったところから、いつもの1問が届くよ',
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
              step(
                '①',
                `この画面のいちばん下に出るボタンをタップ → 習った${unitNoun}を選ぶ（タップした瞬間に保存）`
              ),
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
            text: `📖 ${unitNoun}の早見表（どれを習ったかの確認用）`,
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
  const grade =
    gradeRaw === 1 || gradeRaw === 2 || gradeRaw === 3 ? gradeRaw : null;
  if (!subject || grade === null || getEraMetas(subject, grade).length === 0) {
    await replyText(
      replyToken,
      'もう一度、範囲設定からやり直してね。',
      '(scope_pick: bad params)'
    );
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
    confirmText = buildPickConfirmText(
      had ? 'remove' : 'add',
      eraName,
      sel.length
    );
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
    await replyText(
      replyToken,
      '保存に失敗しちゃった。もう一度タップしてね。',
      '(scope_pick: write failed)'
    );
    return;
  }

  const items = buildScopeQuickItems(subject, grade, sel, TEST_RANGE_SCOPE_URL);
  try {
    const client = await getLineClient();
    // Quick Reply チップは次の発言で消えるため、履歴に残る flex ボタンでも
    // 確定できるようにする（「これで決定」を手入力してしまう実例が多発したため。
    // 2026-07 実会話スナップショット参照）。ボタンは sel を持たない scope_finish で、
    // 古いバブルから押しても常に最新の保存状態が反映される。
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'flex',
          altText: confirmText.split('\n')[0] ?? '範囲を保存したよ',
          contents: {
            type: 'bubble' as const,
            size: 'kilo' as const,
            body: {
              type: 'box' as const,
              layout: 'vertical' as const,
              paddingAll: '14px',
              spacing: 'sm' as const,
              contents: [
                {
                  type: 'text' as const,
                  text: confirmText,
                  wrap: true,
                  size: 'sm' as const,
                  color: '#333333',
                },
              ],
            },
            footer: {
              type: 'box' as const,
              layout: 'vertical' as const,
              paddingAll: '12px',
              contents: [
                {
                  type: 'button' as const,
                  style: 'primary' as const,
                  color: '#F59E0B',
                  height: 'sm' as const,
                  action: {
                    type: 'postback' as const,
                    label: '✅ これで決定',
                    data: buildFinishData(subject, grade),
                    displayText: 'これで決定',
                  },
                },
              ],
            },
          },
          quickReply: toLineQuickReply(items),
        },
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handleScopePick reply failed:', error);
  }
}

/**
 * flex の「これで決定」ボタン（scope_finish）: sel を postback に持たず、
 * 保存済みの testScope.topics を読んで確定処理をする。ピックのたびに保存済み
 * なので書き込みは不要。初回設定なら 1問目も reply で送る（scope_commit と同等）。
 */
async function handleScopeFinishPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const subject = params.get('s') ?? '';
  const gradeRaw = Number(params.get('g'));
  const grade =
    gradeRaw === 1 || gradeRaw === 2 || gradeRaw === 3 ? gradeRaw : null;
  if (!subject || grade === null) {
    await replyText(
      replyToken,
      'もう一度、範囲設定からやり直してね。',
      '(scope_finish: bad params)'
    );
    return;
  }

  let topics: string[] = [];
  let isInitialSetup = false;
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    topics = Array.isArray(data?.testScope?.topics)
      ? (data!.testScope.topics as unknown[]).filter(
          (t): t is string => typeof t === 'string'
        )
      : [];
    isInitialSetup =
      typeof data?.preferredHour === 'number' && !data?.lastQuestionDeliveredAt;
  } catch (error) {
    console.error('[lineWebhook] handleScopeFinish read failed:', error);
    await replyText(
      replyToken,
      'ごめんね、うまく確認できなかったみたい💦 もう一度押してみてね。',
      '(scope_finish: read failed)'
    );
    return;
  }

  // 保存済み topics から era を逆算して確認文を作る。/scope ページ等で
  // topic 単位の部分選択をしていて era に逆算できない場合は件数表示で代替。
  const sel = topicsToSel(subject, grade, topics);
  const confirmText =
    topics.length > 0 && sel.length === 0
      ? `✅ テスト範囲は保存済みだよ！（${topics.length}単元）\nこれから届く1問はこの範囲から出るよ。メニューの「出題範囲設定」からいつでも変えられるよ。`
      : buildCommitText(subject, grade, sel);

  if (isInitialSetup) {
    try {
      await selectAndSendQuestion(uid, {
        replyToken,
        prependMessages: [{ type: 'text', text: confirmText }],
        isInitialSetup: true,
        source: 'onboarding',
      });
      return;
    } catch (error) {
      console.error(
        '[lineWebhook] handleScopeFinish first-question failed:',
        error
      );
    }
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        { type: 'text', text: confirmText },
        buildScopeCommitCtaFlex(),
      ],
    });
    return;
  } catch (error) {
    console.error('[lineWebhook] handleScopeFinish cta reply failed:', error);
  }

  await replyText(replyToken, confirmText, '(scope_finish)');
}

/**
 * 範囲確定: 選択 era を topic.name に展開して testScope を保存し、reply で確認。
 * 初回設定時は 1問目も reply で送る。push トリガ（onTestScopeSaved /
 * onTestScopeFirstSet）は lastSource='line_inline' を見てスキップ＝二重送信を防ぐ。
 */
/**
 * 範囲設定の完了通知に添える「今すぐ1問に挑戦」CTA flex。
 * ボタンは extra_question（全ユーザー無料・reply 送信で配信枠を消費しない）を起動し、
 * 直前に保存した testScope を反映した出題にそのまま取りかかれる。
 */
function buildScopeCommitCtaFlex() {
  return {
    type: 'flex' as const,
    altText: 'さっそく1問に挑戦してみよう！',
    contents: {
      type: 'bubble' as const,
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '16px',
        spacing: 'md' as const,
        contents: [
          {
            type: 'text' as const,
            text: 'さっそく、設定した範囲から1問やってみよう！',
            wrap: true,
            size: 'sm' as const,
            color: '#333333',
          },
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            height: 'sm' as const,
            action: {
              type: 'postback' as const,
              label: '✏️ 今すぐ1問に挑戦',
              data: 'type=extra_question&src=scope_commit',
              displayText: '今すぐ1問に挑戦',
            },
          },
        ],
      },
    },
  };
}

async function handleScopeCommitPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const subject = params.get('s') ?? '';
  const gradeRaw = Number(params.get('g'));
  const grade =
    gradeRaw === 1 || gradeRaw === 2 || gradeRaw === 3 ? gradeRaw : null;
  if (!subject || grade === null) {
    await replyText(
      replyToken,
      'もう一度、範囲設定からやり直してね。',
      '(scope_commit: bad params)'
    );
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
    await replyText(
      replyToken,
      '保存に失敗しちゃった。もう一度試してね。',
      '(scope_commit: write failed)'
    );
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
        source: 'onboarding',
      });
      return;
    } catch (error) {
      console.error(
        '[lineWebhook] handleScopeCommit first-question failed:',
        error
      );
      // フォールバック: 確認文だけでも返す
    }
  }

  // 設定し直し（非初回）: 確認文に「すぐ1問に取りかかれる」ボタンを添えて
  // 1 度の reply で送る（extra_question は無料・reply 送信で配信枠を消費しない）。
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        { type: 'text', text: confirmText },
        buildScopeCommitCtaFlex(),
      ],
    });
    return;
  } catch (error) {
    console.error('[lineWebhook] handleScopeCommit cta reply failed:', error);
  }

  await replyText(replyToken, confirmText, '(scope_commit)');
}

// ── 「まだ習ってない」ワンタップ出題除外 ─────────────────────────────
//
// 問題カード footer の「まだ習ってない」→ 除外モード選択（Quick Reply）→
// testScope を topic（細かい範囲）単位で更新して、その場で代わりの1問を出す。
// 全て reply（配信枠ゼロ）。範囲計算は lineScopeFlow.computeScopeAfterNotLearned（純粋・テスト済み）。

/** 範囲設定への誘導チップ付きフォールバック reply。 */
async function replyWithScopeStartChip(
  replyToken: string,
  text: string,
  logContext: string
): Promise<void> {
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text,
          quickReply: {
            items: [
              {
                type: 'action' as const,
                action: {
                  type: 'postback' as const,
                  label: '🎯 範囲を設定する',
                  data: 'type=scope_start',
                  displayText: '範囲を設定する',
                },
              },
            ],
          },
        },
      ],
    });
  } catch (error) {
    console.error(`[lineWebhook] ${logContext} reply failed:`, error);
  }
}

/**
 * 「まだ習ってない」タップ（1段目）: 除外のしかたを Quick Reply で選ばせる。
 * 理科は「以降」が同一単元（era）内に限定されるため、チップ文言を変える。
 */
async function handleNotLearnedPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const topic = params.get('t') ?? '';
  if (!topic) {
    await replyText(
      replyToken,
      'もう一度、問題のボタンから試してみてね。',
      '(not_learned: no topic)'
    );
    return;
  }

  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('not_learned_tap', uid, { topic });
  } catch (error) {
    console.warn('[lineWebhook] not_learned_tap log failed:', error);
  }

  let subject: string | undefined;
  let grade: number | null = null;
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    subject = typeof data?.subject === 'string' ? data.subject : undefined;
    grade = gradeToScopeNumber(data?.grade);
  } catch (error) {
    console.error('[lineWebhook] not_learned user read failed:', error);
  }

  const topicKnown =
    subject !== undefined &&
    grade !== null &&
    getEraMetas(subject, grade).some((m) => m.topics.includes(topic));
  if (!topicKnown) {
    await replyWithScopeStartChip(
      replyToken,
      'ごめんね、その範囲をうまく特定できなかった…。下の「範囲を設定する」ボタンから、習ったところを選び直してもらえる？',
      'not_learned fallback'
    );
    return;
  }

  const isScience = subject === 'science';
  const afterLabel = isScience
    ? 'この単元の続きも外す'
    : 'ここから先ぜんぶ外す';
  const afterDesc = isScience
    ? `同じ単元の中の「${topic}」から先をまとめて外すよ`
    : `「${topic}」から先の範囲をまとめて外すよ`;
  const enc = encodeURIComponent(topic);

  // 2択は Quick Reply チップではなく flex のボタンで出す（チップは PC 版 LINE で
  // 表示されず、スマホでも次の発言で消えて見落としやすいため）。
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'flex',
          altText: 'まだ習ってない範囲をどうするか選んでね',
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
                  text: `「${topic}」はまだ習ってないんだね。教えてくれてありがとう！どうする？`,
                  wrap: true,
                  size: 'sm' as const,
                  color: '#111827',
                },
                {
                  type: 'text' as const,
                  text: `🔹 この範囲だけ外す → この範囲だけ出題されなくなるよ\n🔹 ${afterLabel} → ${afterDesc}`,
                  wrap: true,
                  size: 'xs' as const,
                  color: '#6B7280',
                  margin: 'md' as const,
                },
                {
                  type: 'text' as const,
                  text: '外した範囲は、メニューの「出題範囲設定」でいつでも戻せるよ。',
                  wrap: true,
                  size: 'xs' as const,
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
                    label: 'この範囲だけ外す',
                    data: `type=not_learned_apply&mode=single&t=${enc}`,
                    displayText: 'この範囲だけ外す',
                  },
                },
                {
                  type: 'button' as const,
                  style: 'secondary' as const,
                  height: 'sm' as const,
                  action: {
                    type: 'postback' as const,
                    label: afterLabel,
                    data: `type=not_learned_apply&mode=after&t=${enc}`,
                    displayText: afterLabel,
                  },
                },
              ],
            },
          },
        } as unknown as messagingApi.Message,
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] not_learned reply failed:', error);
  }
}

/**
 * 「まだ習ってない」適用（2段目）: testScope を更新し、その場で代わりの1問を reply。
 * 未設定ユーザーは「全 topic − 除外分」を新規スコープとして保存（実質の範囲設定代行）。
 */
async function handleNotLearnedApplyPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const topic = params.get('t') ?? '';
  const mode: NotLearnedMode =
    params.get('mode') === 'after' ? 'after' : 'single';
  if (!topic) {
    await replyText(
      replyToken,
      'もう一度、問題のボタンから試してみてね。',
      '(not_learned_apply: no topic)'
    );
    return;
  }

  const { db, FieldValue } = await getDb();
  let subject: string | undefined;
  let grade: number | null = null;
  let currentTopics: string[] | null = null;
  try {
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    subject = typeof data?.subject === 'string' ? data.subject : undefined;
    grade = gradeToScopeNumber(data?.grade);
    const rawTopics = data?.testScope?.topics;
    currentTopics = Array.isArray(rawTopics)
      ? (rawTopics as unknown[]).filter(
          (t): t is string => typeof t === 'string'
        )
      : null;
  } catch (error) {
    console.error('[lineWebhook] not_learned_apply user read failed:', error);
  }

  if (subject === undefined || grade === null) {
    await replyText(
      replyToken,
      'さきに学年と教科を設定してね。メニューから登録できるよ。',
      '(not_learned_apply: missing grade/subject)'
    );
    return;
  }

  const result = computeScopeAfterNotLearned({
    subject,
    grade,
    topic,
    currentTopics,
    mode,
  });
  if (!result) {
    await replyWithScopeStartChip(
      replyToken,
      'ごめんね、その範囲をうまく特定できなかった…。下の「範囲を設定する」ボタンから、習ったところを選び直してもらえる？',
      'not_learned_apply fallback'
    );
    return;
  }
  if (result.topics.length === 0) {
    // 全部外れると出題できなくなるため保存しない（範囲設定への誘導のみ）。
    await replyWithScopeStartChip(
      replyToken,
      'そこを外すと、出題できる範囲がなくなっちゃうみたい…。下の「範囲を設定する」ボタンから、習ったところを選んでもらえる？',
      'not_learned_apply empty'
    );
    return;
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        testScope: {
          topics: result.topics,
          updatedAt: FieldValue.serverTimestamp(),
          // push トリガ（onTestScopeSaved/FirstSet）を抑止して二重送信を防ぐ。
          lastSource: 'line_inline',
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] not_learned_apply write failed:', error);
    await replyText(
      replyToken,
      '保存に失敗しちゃった。もう一度試してね。',
      '(not_learned_apply: write failed)'
    );
    return;
  }

  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('not_learned_applied', uid, {
      topic,
      mode,
      excludedCount: result.excluded.length,
      hadScope: currentTopics !== null && currentTopics.length > 0,
    });
  } catch (error) {
    console.warn('[lineWebhook] not_learned_applied log failed:', error);
  }

  const scopeNote =
    mode === 'single'
      ? `「${topic}」は出題から外したよ👌`
      : subject === 'science'
        ? `同じ単元の「${topic}」から先（${result.excluded.length}この範囲）は出題しないようにしたよ👌`
        : `「${topic}」から先（${result.excluded.length}この範囲）は出題しないようにしたよ👌`;
  const confirmText = `OK！${scopeNote}\n習ったら、メニューの「出題範囲設定」でいつでも戻せるからね。\n\n代わりにこの1問はどうかな👇`;

  try {
    await selectAndSendQuestion(uid, {
      replyToken,
      prependMessages: [{ type: 'text', text: confirmText }],
      bypassDailyLimit: true,
      source: 'extra',
    });
  } catch (error) {
    console.error('[lineWebhook] not_learned_apply question failed:', error);
    // フォールバック: 確認文だけでも返す
    await replyText(
      replyToken,
      confirmText.replace('\n\n代わりにこの1問はどうかな👇', ''),
      '(not_learned_apply: question failed)'
    );
  }
}

async function handleSettingsGuidePostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const flex = buildSettingsGuideFlexMessage(await isDeliveryPaused(uid));
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error('[lineWebhook] handleSettingsGuide reply failed:', error);
  }
}

/**
 * 配信一時停止中か。設定メニューの「配信をおやすみ / 再開」ボタンの出し分けに使う
 * （メニュータップ時のみの 1 read）。読み取り失敗時は false（停止ボタンを出す）。
 */
async function isDeliveryPaused(uid: string): Promise<boolean> {
  try {
    const { db } = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    return snap.data()?.deliveryPaused === true;
  } catch (error) {
    console.warn('[lineWebhook] isDeliveryPaused read failed:', error);
    return false;
  }
}

/**
 * 配信の一時停止（設定メニューの「🔕 配信をおやすみ」）。
 * cron 由来 push（毎日/週3配信・Win-back）を止める。reply 系機能は使えるままなので、
 * その旨と再開手段（ボタン / 「再開」キーワード）を必ず案内する。
 * すでに停止中でも同じ確認を返すだけ（冪等）。
 */
async function handlePauseDeliveryPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        deliveryPaused: true,
        deliveryPausedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] pause_delivery write failed:', error);
    await replyText(
      replyToken,
      'ごめんね、設定の保存に失敗しちゃった💦 少し時間を置いてもう一度試してみてね。',
      '(pause_delivery write error)'
    );
    return;
  }

  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('delivery_paused', uid, {});
  } catch (error) {
    console.warn('[lineWebhook] pause_delivery funnel log failed:', error);
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text:
            '配信をおやすみするね🌙 明日からの問題配信をストップしたよ。\n\n' +
            'おやすみ中も、メニューの「1問解く」「苦手を復習」やAIへの質問はいつでも使えるよ。\n\n' +
            'また届けてほしくなったら、下のボタンを押すか「再開」と送ってね。いつでも待ってるよ！',
          quickReply: {
            items: [
              {
                type: 'action' as const,
                action: {
                  type: 'postback' as const,
                  label: '▶️ 配信を再開する',
                  data: 'type=resume_delivery',
                  displayText: '配信を再開する',
                },
              },
              {
                type: 'action' as const,
                action: {
                  type: 'postback' as const,
                  label: '✏️ 1問解く',
                  data: 'type=extra_question&src=pause_confirm',
                  displayText: '1問解く',
                },
              },
            ],
          },
        },
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] pause_delivery reply failed:', error);
  }
}

/**
 * 配信の再開（停止確認 Quick Reply / 設定メニューの「▶️ 配信を再開」）。
 * status も active に戻し、翌日以降の dailyQuiz 対象に復帰させる。
 */
async function handleResumeDeliveryPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        deliveryPaused: false,
        deliveryResumedAt: FieldValue.serverTimestamp(),
        status: 'active',
        statusChangedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[lineWebhook] resume_delivery write failed:', error);
    await replyText(
      replyToken,
      'ごめんね、設定の保存に失敗しちゃった💦 少し時間を置いてもう一度試してみてね。',
      '(resume_delivery write error)'
    );
    return;
  }

  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('delivery_resumed', uid, {});
  } catch (error) {
    console.warn('[lineWebhook] resume_delivery funnel log failed:', error);
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text:
            'おかえり！配信を再開したよ🎉 明日からまたいつもの時間に1問届けるね。\n\n' +
            '待ちきれなかったら、下のボタンで今すぐ解けるよ👇',
          quickReply: {
            items: [
              {
                type: 'action' as const,
                action: {
                  type: 'postback' as const,
                  label: '✏️ 今すぐ1問解く',
                  data: 'type=extra_question&src=resume_confirm',
                  displayText: '今すぐ1問解く',
                },
              },
            ],
          },
        },
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] resume_delivery reply failed:', error);
  }
}

/**
 * トーク内「学年・教科を変更」フロー（LIFF を使わずチャットで完結）。
 * 設定・サポート flex の「🎓 学年・教科を変更」postback から起動。
 *   change_learning（開始: 上限チェック→学年選択）
 *     → change_learning_grade（学年選択→教科選択。まだ保存しない）
 *       → change_learning_subject（教科選択→ grade+subject を確定保存・カウント+1）
 * 1日(JST)3回まで。LIFF スイッチャーと同じ learningChangeCount/Date を共有。
 */
async function handleChangeLearningStart(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const { db } = await getDb();
  try {
    const snap = await db.doc(`users/${uid}`).get();
    if (remainingLearningChanges(snap.data()) <= 0) {
      await replyText(
        replyToken,
        `学年・教科の変更は1日${LEARNING_CHANGE_DAILY_LIMIT}回までだよ🙏\nまた明日変更できるよ。`,
        '(change_learning limit)'
      );
      return;
    }
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: '学年・教科を変更するよ。まずは学年を選んでね。',
        },
        buildChangeLearningGradeMessage(),
      ],
    });
  } catch (error) {
    console.error('[lineWebhook] handleChangeLearningStart failed:', error);
  }
}

async function handleChangeLearningGrade(
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const grade = params.get('grade');
  if (!grade || !VALID_GRADES.includes(grade as ValidGrade)) {
    await replyText(
      replyToken,
      'もう一度、学年を選んでね。',
      '(change_learning bad grade)'
    );
    return;
  }
  // ここではまだ保存しない（教科選択まで確定させず、中断時に部分変更を残さない）。
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [buildChangeLearningSubjectMessage(grade)],
    });
  } catch (error) {
    console.error('[lineWebhook] handleChangeLearningGrade failed:', error);
  }
}

async function handleChangeLearningSubject(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const grade = params.get('grade');
  const subject = params.get('subject');
  if (
    !grade ||
    !VALID_GRADES.includes(grade as ValidGrade) ||
    !subject ||
    !VALID_SUBJECTS.includes(subject as ValidSubject)
  ) {
    await replyText(
      replyToken,
      'もう一度、設定・サポートの「学年・教科を変更」からやり直してね。',
      '(change_learning bad params)'
    );
    return;
  }
  // 学年にコンテンツが無い教科（例: 中3の地理）は選べない。
  if (
    !isSubjectAvailableForGrade(subject as ValidSubject, grade as ValidGrade)
  ) {
    await replyText(
      replyToken,
      `${grade}では「${SUBJECT_LABELS[subject as ValidSubject]}」をまだ選べません。別の教科を選んでね。`,
      '(change_learning subject not available for grade)'
    );
    return;
  }
  const { db, FieldValue } = await getDb();
  try {
    const snap = await db.doc(`users/${uid}`).get();
    const data = snap.data();
    const today = getJstDateString(new Date());
    const prevDate =
      typeof data?.learningChangeDate === 'string'
        ? data.learningChangeDate
        : null;
    const prevCount =
      typeof data?.learningChangeCount === 'number'
        ? data.learningChangeCount
        : 0;
    const todayCount = prevDate === today ? prevCount : 0;
    if (todayCount >= LEARNING_CHANGE_DAILY_LIMIT) {
      await replyText(
        replyToken,
        `学年・教科の変更は1日${LEARNING_CHANGE_DAILY_LIMIT}回までだよ🙏\nまた明日変更できるよ。`,
        '(change_learning limit at commit)'
      );
      return;
    }
    const newCount = todayCount + 1;
    await db.doc(`users/${uid}`).set(
      {
        grade,
        subject,
        learningChangeCount: newCount,
        learningChangeDate: today,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    const subjectLabel = SUBJECT_LABELS[subject as ValidSubject];
    const remaining = Math.max(0, LEARNING_CHANGE_DAILY_LIMIT - newCount);
    // 確認メッセージに続けて、新しい学年・教科でのテスト範囲設定を促す flex
    // （ボタンはトーク内 scope フローを起動）を同じ reply で送る。
    try {
      const client = await getLineClient();
      await client.replyMessage({
        replyToken,
        messages: [
          {
            type: 'text' as const,
            text:
              `✅ 学年「${grade}」・教科「${subjectLabel}」に変更したよ！\n` +
              `これからはこの設定で問題が届くよ。\n（今日はあと${remaining}回変更できるよ）`,
          },
          buildScopeAfterChangeFlexMessage(),
        ],
      });
    } catch (sendError) {
      console.error(
        '[lineWebhook] handleChangeLearningSubject reply failed:',
        sendError
      );
    }
  } catch (error) {
    console.error('[lineWebhook] handleChangeLearningSubject failed:', error);
  }
}

/**
 * 学年・教科を変更した直後に、新しい範囲でテスト対策を促す flex。
 * ボタンはトーク内 scope フロー（type=scope_start）を起動する。
 * buildScopeSetupNudgeFlexMessage と違い「アプリ再起動」注記は付けない
 * （scope_start は LIFF ではなくトーク内 Quick Reply で完結するため不要）。
 */
function buildScopeAfterChangeFlexMessage() {
  return {
    type: 'flex' as const,
    altText: 'テスト範囲を設定すると、届く1問が習った範囲から出ます',
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
            text: '🎯 テスト範囲も設定しよう',
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
            text: '今は学年ぜんぶから出題しているよ。習った単元にしぼると、届く1問がその範囲だけになってテスト対策の効率がぐっと上がる👍',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
          },
          {
            type: 'text' as const,
            text: '下のボタンから、出題してほしい単元を選んでね。',
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
              type: 'postback' as const,
              label: '🎯 テスト範囲を設定する',
              data: 'type=scope_start',
              displayText: '🎯 テスト範囲を設定する',
            },
          },
        ],
      },
    },
  };
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

/**
 * `users.stats`（onAnswerCreated が transaction で維持する真値）から連続記録 flex 用の
 * StreakStats を組み立てる。連続日数は displayStreakDays（週1おやすみ免除込みの
 * 「まだ切れていない」判定）を使い、回答フィードバックの streak と表示を一致させる。
 * 旧実装（answers limit(500) 再計算）は免除と食い違い、1タップ 500 read かかるため廃止。
 */
function computeStreakStatsFromUserStats(
  userStats: Record<string, unknown> | undefined
): StreakStats {
  const totalAnswered =
    typeof userStats?.totalAnswered === 'number' ? userStats.totalAnswered : 0;
  const totalCorrect =
    typeof userStats?.totalCorrect === 'number' ? userStats.totalCorrect : 0;
  const accuracyPercent =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const streakRaw =
    (userStats?.streak as Record<string, unknown> | undefined) ?? undefined;
  const prevStreak: StreakState | null =
    streakRaw &&
    typeof streakRaw.current === 'number' &&
    typeof streakRaw.lastStudyDate === 'string'
      ? {
          current: streakRaw.current,
          longest:
            typeof streakRaw.longest === 'number'
              ? streakRaw.longest
              : streakRaw.current,
          lastStudyDate: streakRaw.lastStudyDate,
          ...(typeof streakRaw.lastForgivenDateJst === 'string'
            ? { lastForgivenDateJst: streakRaw.lastForgivenDateJst }
            : {}),
        }
      : null;

  const todayJst = getJstDateString(new Date()) ?? '';
  return {
    streakDays: displayStreakDays(prevStreak, todayJst),
    totalAnswered,
    totalCorrect,
    accuracyPercent,
    answeredToday: prevStreak?.lastStudyDate === todayJst,
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
  /** 今回の回答で「週1おやすみ免除」が発動して streak がつながったか */
  usedForgiveness: boolean;
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
  const prevStreakRaw =
    (prevStats?.streak as Record<string, unknown> | undefined) ?? undefined;
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
          ...(typeof prevStreakRaw.lastForgivenDateJst === 'string'
            ? { lastForgivenDateJst: prevStreakRaw.lastForgivenDateJst }
            : {}),
        }
      : null;

  const todayJst = getJstDateString(new Date()) ?? '';
  const nextStreak = nextStreakState(prevStreak, todayJst);
  const dayStreak = nextStreak.current;
  const todayAlreadyAnswered = prevStreak?.lastStudyDate === todayJst;
  const isMilestoneDay =
    !todayAlreadyAnswered && isDayStreakMilestone(dayStreak);
  // 今回の回答で免除が発動したか（lastForgivenDateJst が今日付で新規/更新された）
  const usedForgiveness =
    !todayAlreadyAnswered &&
    nextStreak.lastForgivenDateJst === todayJst &&
    prevStreak?.lastForgivenDateJst !== todayJst;

  const prevCorrectStreak =
    typeof prevStats?.correctStreak === 'number' ? prevStats.correctStreak : 0;
  const correctStreak = currentIsCorrect ? prevCorrectStreak + 1 : 0;

  const prevTotalAnswered =
    typeof prevStats?.totalAnswered === 'number' ? prevStats.totalAnswered : 0;
  const totalAnswered = prevTotalAnswered + 1;

  return {
    correctStreak,
    dayStreak,
    isMilestoneDay,
    totalAnswered,
    usedForgiveness,
  };
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

function buildHelpFlexMessage(
  opts: { showPremiumCta: boolean } = { showPremiumCta: true }
) {
  const bodyContents = [
    {
      type: 'text' as const,
      text: 'はじめは毎日、そのあとは週3回（月・水・金）、決まった時間に1問届くよ。',
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
          text: '朝6時 / 朝7時 / 夕方4時 / 夕方6時 / 夜8時 から選べます。',
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
          text: '「設定変更」とトークに送ると、学年・教科・配信時刻を選び直せるよ（1日1回まで）。学年・教科だけなら、メニューの「設定・サポート」にある「学年・教科を変更」でもOK（1日3回まで）。',
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

function buildSettingsMenuFlexMessage(deliveryPaused: boolean) {
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
            text: '学年・教科・配信時刻を変えたいときは、下の「設定変更」ボタンを押すか、トークに「設定変更」と送ってね（1日1回まで）。',
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
          },
          {
            type: 'text' as const,
            text: 'お問い合わせは下のボタンから。',
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
          buildDeliveryPauseToggleButton(deliveryPaused),
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
// ScopeNudgeVariant の定義は userDocTypes.ts（型の正本）。ここでは import して使う。
export type { ScopeNudgeVariant };

/**
 * uid から安定的に A/B バリアントを割り当てる。
 * Math.random を使わず uid ハッシュで固定するので、同一ユーザーは何回ナッジを
 * 受けても常に同じ文言を見る＝「どちらの文言が設定に結びつくか」を
 * scopeSetupNudgeVariant × 範囲設定有無のクロスでクリーンに計測できる。
 */
export function pickScopeNudgeVariant(uid: string): ScopeNudgeVariant {
  let h = 0;
  for (let i = 0; i < uid.length; i++) {
    h = (h * 31 + uid.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % 2 === 0 ? 'A' : 'B';
}

/**
 * テスト範囲未設定ユーザーへの「範囲を設定しよう」ナッジ flex。
 *
 * 2026-07 見直し:
 *   - 旧「LINE アプリを完全に終了して開き直して」注記を削除。scope_start は
 *     トーク内 Quick Reply で完結し、アプリ再起動は不要（注記は LIFF 時代の名残で
 *     不要な摩擦になっていた）。
 *   - 便益をテスト対策直結の文言に、かつ「タップだけ・あとで変更OK」で心理的
 *     ハードルを下げる。
 *   - A/B 2 バリアント（variant）で効き目を比較できるようにした。
 */
export function buildScopeSetupNudgeFlexMessage(
  variant: ScopeNudgeVariant = 'A'
) {
  // A: 便益直球（テスト対策の効率）。B: ムダ削減・手間の低さを前面に。
  const copy =
    variant === 'B'
      ? {
          header: '🎯 ムダな問題、減らせるよ',
          body: 'テスト範囲を教えてくれたら、まだ習ってない単元は出さないよ。届く1問が“出るところ”だけになって、ムダなく進められる。',
        }
      : {
          header: '🎯 テスト範囲を設定しよう',
          body: '定期テストの範囲を教えてくれたら、その単元だけから1問お届け。テスト前の総復習がぐっとラクになるよ👍',
        };
  return {
    type: 'flex' as const,
    altText: 'テスト範囲を設定すると、届く1問がその単元から出ます',
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
            text: copy.header,
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
            text: copy.body,
            wrap: true,
            size: 'sm' as const,
            color: '#111827',
          },
          {
            type: 'text' as const,
            text: 'タップで選ぶだけ・あとから変更OK。30秒でできるよ。',
            wrap: true,
            size: 'xs' as const,
            color: '#6B7280',
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

/**
 * 配信一時停止/再開の切替ボタン（設定メニュー footer 用）。
 * deliveryPaused の状態で「🔕 おやすみ」↔「▶️ 再開」を出し分ける。
 */
function buildDeliveryPauseToggleButton(deliveryPaused: boolean) {
  return {
    type: 'button' as const,
    style: 'secondary' as const,
    height: 'sm' as const,
    action: {
      type: 'postback' as const,
      label: deliveryPaused ? '▶️ 配信を再開する' : '🔕 配信をおやすみする',
      data: deliveryPaused ? 'type=resume_delivery' : 'type=pause_delivery',
      displayText: deliveryPaused ? '配信を再開する' : '配信をおやすみする',
    },
  };
}

function buildSettingsGuideFlexMessage(deliveryPaused: boolean) {
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
            text: 'よく使う設定はこちらから。学年・配信時刻・お問い合わせは設定画面の中から進められるよ。',
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
              type: 'postback' as const,
              label: '🎓 学年・教科を変更',
              data: 'type=change_learning',
              displayText: '🎓 学年・教科を変更',
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
          buildDeliveryPauseToggleButton(deliveryPaused),
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
  // プレミアム廃止（PREMIUM_FLOW_ENABLED=false）で CTA 出し分けに使わなくなったが、
  // 再開時に戻せるようシグネチャは維持する。
  _plan: UserPlan = 'premium'
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
 * 解説の直後に1通だけ添える次アクション flex（小サイズ）。
 * 「🃏 この分野を暗記（暗記カード）」と「✏️ もう一問解く」の2ボタンを横に並べ、
 * 暗記でも追加演習でもワンタップで続けられるようにする。
 * （「もう一問解く」= extra_question は全ユーザー無料・reply で課金対象外。）
 *
 * topicName が空の場合（旧データなど）は何も返さず、呼び出し側で flex 自体を
 * 添付しないよう null を返す。
 */
function buildPostAnswerNextStepFlexMessage(options: {
  topicName?: string;
  subject?: string;
}): unknown | null {
  if (!options.topicName) return null;
  // 数学は暗記カード（flashcards）を持たないので、「この分野を暗記」ではなく
  // 「この分野のクイズ」を出して LIFF のクイズ setup へ誘導する。
  const isMath = options.subject === 'math';
  const studyKind: 'fc' | 'quiz' = isMath ? 'quiz' : 'fc';
  const studyLabel = isMath ? '📝 この分野のクイズ' : '🃏 この分野を暗記';
  return {
    type: 'flex' as const,
    altText: 'つづけて学ぼう（暗記カード / もう一問）',
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
            text: 'つづけて学ぼう👇',
            weight: 'bold' as const,
            size: 'sm' as const,
            color: '#111827',
            align: 'center' as const,
          },
          {
            type: 'box' as const,
            layout: 'vertical' as const,
            spacing: 'sm' as const,
            contents: [
              {
                type: 'button' as const,
                style: 'primary' as const,
                color: '#F59E0B',
                height: 'sm' as const,
                action: {
                  type: 'uri' as const,
                  label: studyLabel,
                  uri: buildLiffUnitsDeepLink(
                    options.topicName,
                    studyKind,
                    'post_answer'
                  ),
                },
              },
              {
                type: 'button' as const,
                style: 'primary' as const,
                color: '#F59E0B',
                height: 'sm' as const,
                action: {
                  type: 'postback' as const,
                  label: '✏️ もう一問解く',
                  data: 'type=extra_question&src=post_answer',
                  displayText: 'もう一問解く',
                },
              },
            ],
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
    leadText: `追加で解く・苦手復習・暗記カード・四択クイズが、7日間だけ気軽に試せるよ。カード登録なしで始められます。`,
  },
};

/**
 * プレミアム機能の段階的な誘導 flex。初回 `追加で解く` の直後など、
 * 次のステップを優しく提案するために使う。
 */
export function buildNextStepGuideFlex(step: 'jikkuri' | 'weak_review') {
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
    altText:
      '今登録すれば、ずっと月¥680のまま！1週間後の通常価格(月¥980)に上がらず続けられます。',
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
    altText:
      '7日間お試し開始！まずは「追加で解く」を試してみよう - チャットでスタディ',
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
  replyToken: string | undefined,
  src: string | null = null
): Promise<void> {
  if (!replyToken) return;

  const { db, FieldValue } = await getDb();
  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();

  // 2026-06 トライアル廃止: 「1問解く」は全ユーザーが無料で使える。
  // reply（postback への応答）で送るため LINE 通数課金の対象外。

  // 「もう一問解く / 追加で解く」タップを計測。src で発火元カードを区別
  // （post_answer = 回答後カード / それ以外 = 各種 flex）。回答後カードの
  // クリック率は extra_question_tap(src=post_answer) ÷ 同日 answers 件数で算出。
  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('extra_question_tap', uid, {
      src: src ?? 'unknown',
    });
  } catch (error) {
    console.error('[lineWebhook] extra_question_tap log failed:', error);
  }

  // 初回利用フラグだけ記録する。
  const isFirstExtraQuestion = !userData?.firstExtraQuestionAt;
  if (isFirstExtraQuestion) {
    try {
      await db
        .doc(`users/${uid}`)
        .set(
          { firstExtraQuestionAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
    } catch (error) {
      console.error('[lineWebhook] firstExtraQuestionAt write failed:', error);
    }
  }

  await selectAndSendQuestion(uid, {
    replyToken,
    introText: getExtraQuestionIntro(),
    bypassDailyLimit: true,
    source: 'extra',
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

  // 「苦手を復習」タップを計測（対象0件で出題に至らない場合も含めタップ自体を記録）。
  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('weak_review_tap', uid);
  } catch (error) {
    console.error('[lineWebhook] weak_review_tap log failed:', error);
  }

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
      'ごめんね、苦手の記録をうまく読み込めなかったみたい💦 少し時間を置いて試してみてね。',
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
      'ごめんね、苦手の問題をうまく用意できなかったみたい💦 もう一度押してみてね。',
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
        // 回答時に answers.source へ転記する配信経路（苦手復習）。
        lastQuestionSource: 'weak_review',
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
        `すでに${storedGrade}で登録済みだよ。学年・教科を変えたいときは、メニューの「設定・サポート」→「学年・教科を変更」からどうぞ（1日3回まで）。配信時刻もまとめて変えるなら「設定変更」と送ってね（1日1回まで）。`,
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
          messages: [
            { type: 'text', text: 'ごめんね、もう一度学年を選んでね。' },
          ],
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
        buildSubjectSelectMessage(grade),
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
        `すでに${label}で登録済みだよ。学年・教科を変えたいときは、メニューの「設定・サポート」→「学年・教科を変更」からどうぞ（1日3回まで）。配信時刻もまとめて変えるなら「設定変更」と送ってね（1日1回まで）。`,
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
          messages: [
            { type: 'text', text: 'ごめんね、もう一度教科を選んでね。' },
          ],
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

  // 学年にコンテンツが無い教科（例: 中3の地理）は選べない。
  const onbGrade = userData?.grade;
  if (
    typeof onbGrade === 'string' &&
    VALID_GRADES.includes(onbGrade as ValidGrade) &&
    !isSubjectAvailableForGrade(subject as ValidSubject, onbGrade as ValidGrade)
  ) {
    console.warn(
      '[lineWebhook] subject not available for grade (onboarding):',
      subject,
      onbGrade
    );
    if (replyToken) {
      await replyText(
        replyToken,
        'その学年ではこの教科をまだ選べません。別の教科を選んでね。',
        '(subject not available for grade)'
      );
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
          text: `${subjectLabel}ですね！最後に、問題が届く時間を選んでね。`,
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
        `すでに${label}で登録済みだよ。配信時刻を変えたいときは「設定変更」と送ってね（1日1回まで）。`,
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
          messages: [
            { type: 'text', text: 'ごめんね、もう一度時間を選んでね。' },
          ],
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
              `📅 はじめの1週間は毎日、そのあとは週3回（月・水・金）に届きます。配信がない日も、メニューの「1問解く」を押せばいつでも問題に挑戦できるよ。\n\n` +
              `📖 届いた問題は選択肢をタップするだけ。すぐに正解と解説が出ます。メニューから「苦手を復習」「じっくり学ぶ」も使えます。\n\n` +
              `🤖 困ったときや勉強の質問は、このトークにそのまま送ればAIが答えるよ。`,
          },
        ];

    // 教科設定の直後にそのまま範囲設定へ取りかかれるよう、対応教科なら完了サマリーに
    // 続けて範囲設定ガイド（時代チップ付き）を同じ reply で送る。ユーザーはボタンを
    // 探さずその場でタップして範囲を選び始められる（reply なので配信枠は消費しない）。
    const scopeGrade = gradeToScopeNumber(storedGrade);
    if (
      summaryFlex &&
      scopeGrade !== null &&
      typeof storedSubject === 'string' &&
      supportsEraFlow(storedSubject, scopeGrade)
    ) {
      const scopeItems = buildScopeQuickItems(
        storedSubject,
        scopeGrade,
        [],
        TEST_RANGE_SCOPE_URL
      );
      replyMessages.push({
        ...buildScopeGuideFlex(storedSubject, scopeGrade),
        quickReply: toLineQuickReply(scopeItems),
      } as unknown as messagingApi.Message);
    } else if (summaryFlex) {
      // 時代フロー非対応（英語など時代1個 / 対応外学年）にも、オンボ完了の
      // 同じ reply で /scope ページへの範囲設定導線を出す。従来はサマリー flex の
      // ボタンから scope_start → fallback と2段必要で、新規初日の範囲設定率が
      // 最も低い層（英語）に導線が届いていなかった。
      replyMessages.push({
        type: 'text',
        text: '📝 テスト範囲を設定すると、届く1問が習った単元から出るよ。下のボタンから設定してね。',
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
      } as unknown as messagingApi.Message);
    }

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
        'ごめんね、うまく受け取れなかったみたい💦 もう一度選択肢をタップしてみてね。',
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
    await replyText(
      replyToken,
      'ごめんね、うまく処理できなかったみたい💦 少し時間を置いて、もう一度試してみてね。',
      '(read error)'
    );
    return;
  }

  if (!questionSnap.exists) {
    console.warn('[lineWebhook] handleAnswer question not found:', questionId);
    await replyText(
      replyToken,
      'ごめんね、その問題が見つからなかったみたい💦 もう一度試してみてね。',
      '(not found)'
    );
    return;
  }

  const question = questionSnap.data() as Question;
  const isCorrect = choice === question.correctChoiceId;
  const correctLabel = question.choices[question.correctChoiceId];

  // 連続日数・累計問題数・連続正解数は `users.stats`（onAnswerCreated が
  // transaction で維持）を真値として参照する。直近 answers の limit クエリで
  // 再計算する旧実装は値が頭打ちになるため廃止。
  const prevStats =
    (currentUserData?.stats as Record<string, unknown> | undefined) ??
    undefined;
  const { correctStreak, dayStreak, isMilestoneDay, usedForgiveness } =
    computeAnswerStreaksFromStats(prevStats, isCorrect);

  const feedbackBase = isCorrect
    ? getCorrectFeedback({ correctStreak, dayStreak, isMilestoneDay })
    : getIncorrectFeedback({ correctLabel });
  // 週1おやすみ免除で streak がつながったときは、その旨をひとこと添える
  // （「1日休んだのにゼロに戻らない」ことを本人に伝えて安心・継続につなげる）。
  const feedbackBody = usedForgiveness
    ? `${feedbackBase}\n\n🎟️ 1日あいたけど、週1回の「おやすみOK」で連続${dayStreak}日はつながってるよ！`
    : feedbackBase;
  // 旧版は「⭕正解+励まし」と「📖解説」を 2 通の text に分けて送っていたが、
  // ユーザー体感が冗長なため 1 通に統合（2026-05-31）。
  // 数学ハイブリッドで解説画像があるときは、解説を MathJax 画像で別 flex 表示する。
  const useExpImage =
    question.renderMode === 'math-hybrid' &&
    question.explanationImage &&
    typeof question.explanationImage.u === 'string';
  const head = isCorrect ? '⭕ 正解！' : '❌ 不正解…';
  // 解説を画像で出すときは本文に解説テキストを入れず、見出しも解説バブル側に置く
  const combinedText = useExpImage
    ? `${head}\n${feedbackBody}`
    : `${head}\n${feedbackBody}\n\n📖 解説\n${question.explanation}`;
  const explanationFlex = useExpImage
    ? {
        type: 'flex' as const,
        altText: `解説: ${question.explanation.slice(0, 60)}`,
        contents: {
          type: 'bubble' as const,
          size: 'kilo' as const,
          body: {
            type: 'box' as const,
            layout: 'vertical' as const,
            paddingAll: '16px',
            contents: [
              {
                type: 'text' as const,
                text: '📖 解説',
                weight: 'bold' as const,
                size: 'sm' as const,
                color: '#6B7280',
              },
              {
                type: 'image' as const,
                url: question.explanationImage!.u,
                size: 'full' as const,
                aspectRatio: `${question.explanationImage!.w}:${question.explanationImage!.h}`,
                aspectMode: 'fit' as const,
                align: 'start' as const,
                margin: 'md' as const,
                backgroundColor: '#FFFFFF',
              },
            ],
          },
        },
      }
    : null;
  // ワークの連続出題セッション中は、次に進む quickReply を優先し
  // 通常の nextStep 提案カードは出さない（演習のテンポを止めない）。
  const wbSession =
    currentUserData?.lastQuestionSource === 'workbook'
      ? (currentUserData?.workbookSession as WorkbookSessionData | undefined)
      : undefined;
  const isWorkbookAnswer = !!wbSession && typeof wbSession.topic === 'string';

  const nextStepFlex = isWorkbookAnswer
    ? null
    : buildPostAnswerNextStepFlexMessage({
        topicName: question.topic,
        subject: question.subject,
      });

  // 初回回答時のトライアル案内 flex（first_answer）は、reply には積まず
  // `onAnswerCreated` が解説直後に即 push する設計。
  // ここでは nextStep のみ reply に積む。

  // ワーク演習中: 次の問題（または完走カード）を同じ reply に同梱する。
  const wbKind: WorkbookKind =
    wbSession?.kind === 'term' || wbSession?.kind === 'written'
      ? wbSession.kind
      : 'choice';
  const wbStats =
    (currentUserData?.workbookStats as WorkbookStatsData | undefined) ?? {};
  const wbGain = workbookXpGain(wbKind, isCorrect ? 'correct' : 'wrong');
  const wbWrongEntry = {
    n: workbookQuestionNo(questionId),
    text: question.text.slice(0, 60),
  };
  let wbNext: WorkbookNextPayload | null = null;
  let wbCompletionFlex: LineMessage | null = null;
  if (isWorkbookAnswer) {
    const wbMode = parseWorkbookMode((wbSession!.mode as string) ?? null);
    const wbList = Array.isArray(wbSession!.list)
      ? wbSession!.list.filter((n) => Number.isInteger(n))
      : [];
    const nextIndex = Number.isInteger(wbSession!.index)
      ? (wbSession!.index as number)
      : 0;
    wbNext = await prepareWorkbookNextQuestion(
      db,
      wbSession!.topic as string,
      wbKind,
      wbMode,
      nextIndex,
      wbList
    );
    if (wbNext.status === 'completion') {
      wbCompletionFlex = await buildWorkbookCompletionFlex(
        uid,
        wbSession!.topic as string,
        wbNext.total,
        wbKind,
        {
          correct: (wbSession!.correct ?? 0) + (isCorrect ? 1 : 0),
          wrong: isCorrect
            ? [...(wbSession!.wrong ?? [])]
            : [...(wbSession!.wrong ?? []), wbWrongEntry],
          stats: { ...wbStats, xp: (wbStats.xp ?? 0) + wbGain },
        }
      );
    }
  }

  try {
    const client = await getLineClient();
    const prevXp = (wbStats.xp ?? 0) as number;
    // ワーク経路は正誤を色付きバナーで出すため、本文は見出しなしの
    // フィードバック＋解説のみにする（4択は解説画像なしの通常カードのみ）。
    const wbBodyText = feedbackBody + '\n\n📖 解説\n' + question.explanation;
    const replyMessages: LineMessage[] = isWorkbookAnswer
      ? [
          buildWorkbookAnswerFlexMessage(wbBodyText, wbSession!, {
            xpLine: workbookXpLine(prevXp, wbGain),
            levelUp: workbookLevelUp(prevXp, wbGain),
            autoNext: true,
            verdict: isCorrect ? 'correct' : 'wrong',
          }),
          ...(wbNext?.messages ?? []),
          ...(wbCompletionFlex ? [wbCompletionFlex] : []),
        ]
      : [{ type: 'text', text: combinedText }];
    if (explanationFlex) {
      replyMessages.push(explanationFlex as unknown as LineMessage);
    }
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
    // 出題時に記録した配信経路を転記（daily / extra / weak_review ...）。
    // 旧データや経路不明は 'daily' にフォールバック（毎日配信が大多数）。
    const answerSource =
      typeof currentUserData?.lastQuestionSource === 'string'
        ? (currentUserData.lastQuestionSource as string)
        : 'daily';
    await db.collection('answers').add({
      uid,
      questionId,
      choice,
      isCorrect,
      subject: question.subject ?? null,
      grade: question.grade ?? null,
      topic: question.topic ?? null,
      source: answerSource,
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
        // ワーク演習中は完走カード（◯／◯問正解・間違えた問題リスト）用に
        // セッションへ結果を積み上げ、次の問題の状態（index 前進等）も相乗りさせる。
        ...(isWorkbookAnswer
          ? {
              workbookSession: {
                correct: FieldValue.increment(isCorrect ? 1 : 0),
                ...(isCorrect
                  ? {}
                  : { wrong: FieldValue.arrayUnion(wbWrongEntry) }),
                ...(wbNext?.sessionFields ?? {}),
              },
              ...buildWorkbookStatsUpdate(
                FieldValue,
                wbSession!.topic as string,
                wbKind,
                wbGain,
                isCorrect
              ),
              ...(wbNext?.topFields ?? {}),
            }
          : {}),
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

/** ワーク問題ID（q-wb-history-{topicId}-{n}）から紙面の問題番号 n を取り出す */
function workbookQuestionNo(questionId: string): number {
  const m = /-(\d+)$/.exec(questionId);
  return m ? Number(m[1]) : 0;
}

// ── ワークのゲーミフィケーション（XP・レベル・バッジ） ────────────
// 統計は回答時の既存 write に相乗りして users/{uid}.workbookStats に蓄積する
// （追加 read/write ゼロ）。ダッシュボード表示は users 1 read のみ。

/** 回答1問あたりの獲得XP */
function workbookXpGain(
  kind: WorkbookKind,
  result: 'correct' | 'partial' | 'wrong' | 'skip'
): number {
  if (result === 'skip') return 1;
  const table: Record<WorkbookKind, Record<string, number>> = {
    choice: { correct: 10, partial: 2, wrong: 2 },
    term: { correct: 15, partial: 3, wrong: 3 },
    written: { correct: 25, partial: 10, wrong: 5 },
  };
  return table[kind][result];
}

/** XP → レベル（Lv1開始・次のレベルまでの必要XPは徐々に増える） */
function workbookLevel(xp: number): { level: number; next: number } {
  const level = Math.floor(Math.sqrt(Math.max(0, xp) / 50)) + 1;
  return { level, next: 50 * level * level };
}

/**
 * users/{uid}.workbookStats への増分（既存の merge set に spread して相乗りさせる）。
 */
function buildWorkbookStatsUpdate(
  FieldValue: typeof import('firebase-admin/firestore').FieldValue,
  topic: string,
  kind: WorkbookKind,
  xpGain: number,
  isCorrect: boolean
): Record<string, unknown> {
  return {
    workbookStats: {
      xp: FieldValue.increment(xpGain),
      total: FieldValue.increment(1),
      correct: FieldValue.increment(isCorrect ? 1 : 0),
      byTopic: {
        [topic]: {
          [kind]: {
            t: FieldValue.increment(1),
            c: FieldValue.increment(isCorrect ? 1 : 0),
          },
        },
      },
    },
  };
}

interface WorkbookStatsData {
  xp?: number;
  total?: number;
  correct?: number;
  byTopic?: Record<string, Record<string, { t?: number; c?: number }>>;
  badges?: string[];
}

function badgeCount(stats: WorkbookStatsData): number {
  return Array.isArray(stats.badges) ? stats.badges.length : 0;
}

/** この回答でレベルが上がったか（上がったら演出用に from/to を返す） */
function workbookLevelUp(
  prevXp: number,
  gain: number
): { from: number; to: number } | undefined {
  const from = workbookLevel(prevXp).level;
  const to = workbookLevel(prevXp + gain).level;
  return to > from ? { from, to } : undefined;
}

/** 解説カードに出すXP行（例: ⚡ +15XP ・ Lv.3（あと120XPでLv.4）） */
function workbookXpLine(prevXp: number, gain: number): string {
  const total = prevXp + gain;
  const { level, next } = workbookLevel(total);
  return `⚡ +${gain}XP ・ Lv.${level}（あと${Math.max(0, next - total)}XPでLv.${level + 1}）`;
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
  /**
   * この出題の配信経路。回答時に `answers.source` へ転記され、追加学習量
   * （daily / extra / weak_review / restart / onboarding ...）の継続観測に使う。
   * 既定は 'daily'（毎日配信 push）。
   */
  source?: AnswerSource;
  /**
   * 出題単元の固定（印刷ワークの QR 経由出題用）。指定時は testScope の
   * 代わりにこの単元だけから出題する。ユーザーの testScope は変更しない。
   */
  topicOverride?: string[];
  /**
   * 出題候補を引く subject×grade の上書き（印刷ワークの QR 経由出題用）。
   * 冊子は学年をまたいで使われるため、ユーザーの設定学年・教科と
   * 単元の属する学年・教科が違っても出題できるようにする。
   */
  subjectOverride?: ValidSubject;
  gradeOverride?: ValidGrade;
  /**
   * 出題する問題 ID の直接指定（ワークの「上から順」モード用）。
   * 指定時は候補選択をスキップしてこの 1 件だけ読む。実体が無ければ
   * 通常の選択ロジックにフォールバックする。
   */
  questionIdOverride?: string;
  /**
   * 出題時の users/{uid} merge set に相乗りさせる追加フィールド
   * （ワークの連続出題セッション `workbookSession` 等）。追加 write なしで
   * セッション状態を保存するために使う。
   */
  extraUserFields?: Record<string, unknown>;
  /**
   * 出題候補 ID の直接指定（ワークの「ランダム」モード用）。
   * QUESTION_INDEX を使わずこの中から選ぶ（recentQuestionIds は除外）。
   */
  candidateIdsOverride?: string[];
  /**
   * 問題カードの見た目バリエーション。'workbook' は
   * 「まだ習ってない」リンクの代わりに「わからない」ボタンを表示する。
   */
  cardVariant?: 'workbook';
}

/** answers.source / lastQuestionSource に記録する出題経路。 */
export type AnswerSource =
  | 'daily'
  | 'extra'
  | 'weak_review'
  | 'restart'
  | 'onboarding'
  | 'workbook'
  | 'manual';

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

/**
 * 出題候補の選択を「subject×grade を全件 read」する旧経路で行うフォールバック。
 * 通常はビルド時生成の QUESTION_INDEX を使い 1 件だけ read するが、index が未生成
 * （新規 subject 追加直後など）や index と Firestore の不整合時に、無言の未配信を
 * 防ぐための安全網としてのみ使う。挙動は従来の selectAndSendQuestion の選択ロジックと同一。
 */
async function selectQuestionByFullScan(
  db: FirebaseFirestore.Firestore,
  subject: ValidSubject,
  grade: ValidGrade,
  testScopeTopics: string[],
  recentIds: string[],
  uid: string
): Promise<{ id: string; question: Question } | null> {
  // 印刷ワーク専用問題（q-wb-*）は毎日配信/追加/苦手復習の候補から除外する
  // （ワーク経路は questionIdOverride / candidateIdsOverride で直接指定するため
  //   このフルスキャン安全網に来ることはない）。
  const questionDocs = (await getGradeQuestionDocs(db, subject, grade)).filter(
    (d) => !d.id.startsWith('q-wb-')
  );
  if (questionDocs.length === 0) return null;

  const scopedDocs =
    testScopeTopics.length > 0
      ? questionDocs.filter((d) => {
          const topic = d.get('topic');
          return typeof topic === 'string' && testScopeTopics.includes(topic);
        })
      : questionDocs;

  let effectiveDocs = scopedDocs;
  if (testScopeTopics.length > 0 && scopedDocs.length === 0) {
    console.warn(
      '[lineWebhook] selectQuestionByFullScan: testScope に合致する問題が0件 → 全範囲にフォールバック',
      uid,
      testScopeTopics
    );
    effectiveDocs = questionDocs;
  }

  const candidates = effectiveDocs.filter((d) => !recentIds.includes(d.id));
  const pool = candidates.length > 0 ? candidates : effectiveDocs;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  return { id: picked.id, question: picked.data() as Question };
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
    source = 'daily',
    topicOverride,
    subjectOverride,
    gradeOverride,
    questionIdOverride,
    extraUserFields,
    candidateIdsOverride,
    cardVariant,
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

  const grade = gradeOverride ?? (userData.grade as ValidGrade | undefined);
  const subject =
    subjectOverride ?? (userData.subject as ValidSubject | undefined);
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
      // プレミアム廃止中（PREMIUM_FLOW_ENABLED=false）はナッジ flex を送らず通常文のみ。
      if (
        PREMIUM_FLOW_ENABLED &&
        !isInitialSetup &&
        plan === 'free' &&
        gradeEligible
      ) {
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
  // 印刷ワークの QR 経由（topicOverride）は testScope より優先して単元を固定する。
  const testScopeTopics: string[] =
    topicOverride ??
    (Array.isArray(userData.testScope?.topics)
      ? (userData.testScope.topics as unknown[]).filter(
          (t): t is string => typeof t === 'string'
        )
      : []);

  // 出題候補はビルド時生成の ID インデックス（QUESTION_INDEX）からメモリ上で選び、
  // 選んだ 1 件だけ Firestore から取得する。これで「出題のたびに subject×grade を
  // 全件 read（1 回 約200〜660 read）」していた最ホットパスの read を 1 出題あたり
  // 約 1 read に削減する（出題は 1 日 3,000 回超）。CLAUDE.md「読み取りコスト規律」規則6b。
  const indexEntries = QUESTION_INDEX[`${subject}-${grade}`] ?? [];

  let pickedId: string | undefined;
  // ワークの「上から順」モードは出題する問題 ID が決まっているため選択をスキップ。
  if (questionIdOverride) {
    pickedId = questionIdOverride;
  } else if (candidateIdsOverride && candidateIdsOverride.length > 0) {
    // ワークの「ランダム」モード: 専用候補の中から最近出題を避けて選ぶ。
    const fresh = candidateIdsOverride.filter((id) => !recentIds.includes(id));
    const pool = fresh.length > 0 ? fresh : candidateIdsOverride;
    pickedId = pool[Math.floor(Math.random() * pool.length)];
  } else if (indexEntries.length > 0) {
    // 出題範囲が設定されていれば topic で絞り込む（メモリ操作・read ゼロ）。
    const scoped =
      testScopeTopics.length > 0
        ? indexEntries.filter((e) => testScopeTopics.includes(e[1]))
        : indexEntries;

    // 範囲設定済みでも合致する問題が 0 件の場合は、無言の未配信を防ぐため
    // 全範囲にフォールバックして必ず 1 問配信する（単元名が questions と一致しない等の
    // 安全網。ユーザーの testScope 設定自体は変更しない）。
    let effective = scoped;
    if (testScopeTopics.length > 0 && scoped.length === 0) {
      console.warn(
        '[lineWebhook] selectAndSendQuestion: testScope に合致する問題が0件 → 全範囲にフォールバック',
        uid,
        testScopeTopics
      );
      effective = indexEntries;
    }

    const candidates = effective.filter((e) => !recentIds.includes(e[0]));
    const pool = candidates.length > 0 ? candidates : effective;
    pickedId = pool[Math.floor(Math.random() * pool.length)][0];
  }

  let question: Question | undefined;
  if (pickedId) {
    const pickedSnap = await db.doc(`questions/${pickedId}`).get();
    if (pickedSnap.exists) {
      question = pickedSnap.data() as Question;
    } else {
      // index が古く実体が消えている → 下のフルスキャンにフォールバック。
      console.warn(
        '[lineWebhook] selectAndSendQuestion: index の問題が Firestore に不在 → 全件フォールバック',
        pickedId
      );
      pickedId = undefined;
    }
  }

  // index が空（未生成 / 新規 subject）または上記不整合時は旧フルスキャン経路で選ぶ。
  if (!pickedId || !question) {
    const fallback = await selectQuestionByFullScan(
      db,
      subject,
      grade,
      testScopeTopics,
      recentIds,
      uid
    );
    if (!fallback) {
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
              {
                type: 'text',
                text: 'ごめんね、いま準備中みたい。少し待ってからもう一度試してみてね。',
              },
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
    pickedId = fallback.id;
    question = fallback.question;
  }

  const updatedRecent = [
    ...recentIds.filter((id) => id !== pickedId),
    pickedId,
  ].slice(-RECENT_QUESTION_LIMIT);
  try {
    await db.doc(`users/${uid}`).set(
      {
        recentQuestionIds: updatedRecent,
        lastQuestionDeliveredAt: FieldValue.serverTimestamp(),
        // AI チャットボットが「さっきの問題」に答えられるよう最後の問題を保存。
        lastQuestion: buildLastQuestionSnapshot(pickedId, question),
        // 回答時に answers.source へ転記する配信経路（追加学習量の計測用）。
        lastQuestionSource: source,
        // 同じ問題が再出題された場合に「すでに回答済み」ブロックが発生しないよう、
        // 新しい問題を送るタイミングで前回の回答済みフラグを必ずクリアする。
        lastAnsweredQuestionId: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp(),
        // ワークの連続出題セッション等、呼び出し元が相乗りさせたいフィールド。
        ...(extraUserFields ?? {}),
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
    pickedId,
    question,
    embedIntroIntoCard ? resolvedIntroText : undefined,
    cardVariant
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

// 数学ハイブリッドカード: 日本語=Flexテキスト(他教科と同サイズ) / 数式・選択肢=MathJax画像。
// 画像はビルド時生成（generate-math-card-assets）し www.chatstudy.jp/graphs/mathcard に公開済み。
const MATH_FORMULA_SCALE = 0.66; // 問題内の数式画像の表示倍率
const MATH_FORMULA_CAP = 258; // 問題画像の最大表示幅（kilo バブルからはみ出さない）
const MATH_CHOICE_SCALE = 0.6; // 選択肢画像（全MathJax）の表示倍率
const MATH_CHOICE_CAP = 240;
function buildMathHybridMessage(
  questionId: string,
  q: Question,
  introText?: string
) {
  const subjectLabel = SUBJECT_LABELS[q.subject];
  const headerColor = SUBJECT_HEADER_COLORS[q.subject];
  const body: messagingApi.FlexComponent[] = [];
  if (introText) {
    body.push({
      type: 'text',
      text: introText,
      wrap: true,
      size: 'sm',
      color: '#6B7280',
    });
    body.push({ type: 'separator', margin: 'md', color: '#E5E7EB' });
  }
  (q.questionParts ?? []).forEach((p, idx) => {
    const margin = idx > 0 || introText ? ('md' as const) : undefined;
    if (p.t === 'text') {
      body.push({
        type: 'text',
        text: p.s,
        wrap: true,
        weight: 'bold',
        size: 'lg',
        color: '#111827',
        ...(margin ? { margin } : {}),
      });
    } else {
      body.push({
        type: 'image',
        url: p.u,
        size: `${Math.min(MATH_FORMULA_CAP, Math.round(MATH_FORMULA_SCALE * p.w))}px`,
        aspectRatio: `${p.w}:${p.h}`,
        aspectMode: 'fit',
        align: 'start',
        backgroundColor: '#FFFFFF',
        ...(margin ? { margin } : {}),
      });
    }
  });
  // 図つき問題は図も表示
  if (typeof q.imageUrl === 'string' && q.imageUrl.startsWith('https://')) {
    body.push({
      type: 'image',
      url: q.imageUrl,
      size: 'full',
      aspectRatio: '1:1',
      aspectMode: 'fit',
      margin: 'lg',
      backgroundColor: '#FAF9F7',
    });
  }
  const footer: messagingApi.FlexComponent[] = (q.choiceParts ?? []).map(
    (c, i) => {
      // 文章選択肢はテキスト、数式選択肢は MathJax 画像
      const inner: messagingApi.FlexComponent =
        c.t === 'text' || (!c.u && typeof c.s === 'string')
          ? {
              type: 'text',
              text: c.s ?? q.choices[i],
              wrap: true,
              size: 'sm',
              color: '#111827',
              margin: 'md',
              gravity: 'center',
            }
          : {
              type: 'image',
              url: c.u as string,
              size: `${Math.min(MATH_CHOICE_CAP, Math.round(MATH_CHOICE_SCALE * (c.w ?? 100)))}px`,
              aspectRatio: `${c.w}:${c.h}`,
              aspectMode: 'fit',
              align: 'start',
              gravity: 'center',
              margin: 'md',
              backgroundColor: '#FFFFFF',
            };
      return {
        type: 'box' as const,
        layout: 'horizontal' as const,
        paddingAll: '10px',
        cornerRadius: 'md' as const,
        spacing: 'sm' as const,
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
        borderWidth: '1px',
        alignItems: 'center' as const,
        action: {
          type: 'postback' as const,
          label: `${String.fromCharCode(65 + i)}`,
          data: `type=answer&questionId=${questionId}&choice=${i}`,
          displayText: q.choices[i],
        },
        contents: [
          {
            type: 'text' as const,
            text: String.fromCharCode(65 + i),
            flex: 0,
            size: 'sm' as const,
            weight: 'bold' as const,
            color: '#F59E0B',
            gravity: 'center' as const,
          },
          inner,
        ],
      };
    }
  );
  return {
    type: 'flex' as const,
    altText: `Q. ${q.text.slice(0, 60)}`,
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
          },
        ],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '20px',
        contents: body,
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: footer,
      },
    },
  };
}

/**
 * 問題カード footer 末尾の「まだ習ってない」リンク（控えめなグレー1行）。
 * タップで postback type=not_learned（除外モード選択へ）。
 * 数学は scope eras 未生成（トーク内範囲フロー非対応）のため出さない。
 * 数学ハイブリッドカード（buildMathHybridMessage）にも付けない（公開時に追従）。
 */
function buildNotLearnedFooterLink(q: Question): messagingApi.FlexComponent[] {
  if (q.subject === 'math') return [];
  if (typeof q.topic !== 'string' || q.topic.length === 0) return [];
  return [
    {
      // 選択肢カードと同じボタン風の枠線ボックスにして「タップできる」ことを
      // 視覚的に示す。左に空のチェックボックス（□）を実描画（文字だと機種により
      // 豆腐になるため、枠線 box で描く）。
      type: 'box' as const,
      layout: 'horizontal' as const,
      margin: 'md' as const,
      paddingAll: '10px',
      cornerRadius: 'md' as const,
      backgroundColor: '#FFFFFF',
      borderColor: '#E5E7EB',
      borderWidth: '1px',
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      action: {
        type: 'postback' as const,
        label: 'まだ習ってない',
        data: `type=not_learned&t=${encodeURIComponent(q.topic)}`,
        displayText: 'この範囲はまだ習ってない',
      },
      contents: [
        {
          type: 'box' as const,
          layout: 'vertical' as const,
          width: '16px',
          height: '16px',
          cornerRadius: 'sm' as const,
          borderColor: '#9CA3AF',
          borderWidth: '2px',
          backgroundColor: '#FFFFFF',
          flex: 0,
          contents: [{ type: 'filler' as const }],
        },
        {
          type: 'text' as const,
          text: 'この範囲はまだ習ってない',
          size: 'xs' as const,
          color: '#6B7280',
          flex: 0,
          margin: 'sm' as const,
          gravity: 'center' as const,
        },
      ],
    } as messagingApi.FlexComponent,
  ];
}

/**
 * 0..n-1 をシャッフルした配列（Fisher–Yates）。
 * ワーク出題カードで選択肢の表示順をランダムにするために使う。
 */
function shuffledIndices(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * ワーク出題カード用の「わからない」ボタン。
 * ワークは単元学習の直後に解く前提なので「まだ習ってない」（範囲除外）は出さず、
 * 代わりに降参して答え・解説を見るためのボタンを置く（postback type=wb_idk）。
 */
function buildWorkbookIdkFooterLink(
  questionId: string
): messagingApi.FlexComponent[] {
  return [
    {
      type: 'box' as const,
      layout: 'horizontal' as const,
      margin: 'md' as const,
      paddingAll: '10px',
      cornerRadius: 'md' as const,
      backgroundColor: '#FFFFFF',
      borderColor: '#E5E7EB',
      borderWidth: '1px',
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      action: {
        type: 'postback' as const,
        label: 'わからない',
        data: `type=wb_idk&questionId=${questionId}`,
        displayText: 'わからない…答えを見る',
      },
      contents: [
        {
          type: 'text' as const,
          text: '🤔 わからない…答えを見る',
          size: 'xs' as const,
          color: '#6B7280',
          flex: 0,
          gravity: 'center' as const,
        },
      ],
    } as messagingApi.FlexComponent,
  ];
}

function buildQuestionMessage(
  questionId: string,
  q: Question,
  introText?: string,
  cardVariant?: 'workbook'
) {
  // 数学はハイブリッドカード（parts があるとき）
  if (
    q.renderMode === 'math-hybrid' &&
    Array.isArray(q.questionParts) &&
    Array.isArray(q.choiceParts) &&
    q.choiceParts.length > 0
  ) {
    return buildMathHybridMessage(questionId, q, introText);
  }
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
  // 図つき問題は問題文の下に図を表示（数学のグラフ/図形/統計など）
  if (typeof q.imageUrl === 'string' && q.imageUrl.startsWith('https://')) {
    bodyContents.push({
      type: 'image' as const,
      url: q.imageUrl,
      size: 'full' as const,
      aspectRatio: '1:1' as const,
      aspectMode: 'fit' as const,
      margin: 'lg' as const,
      backgroundColor: '#FAF9F7',
    });
  }
  return {
    type: 'flex' as const,
    altText: `Q. ${q.text.slice(0, 60)}`,
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
        //
        // ワーク出題は選択肢の表示順を毎回シャッフルする（紙面や前回の位置で
        // 覚えてしまわないように）。postback には元の choice index を載せるので、
        // 回答判定（choice === correctChoiceId）は表示順に関係なく正しく動く。
        contents: [
          ...(cardVariant === 'workbook'
            ? shuffledIndices(q.choices.length)
            : q.choices.map((_, i) => i)
          ).map((orig, pos) => ({
            type: 'box' as const,
            layout: 'horizontal' as const,
            paddingAll: '10px',
            cornerRadius: 'md' as const,
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB',
            borderWidth: '1px',
            action: {
              type: 'postback' as const,
              label: q.choices[orig].slice(0, 40),
              data: `type=answer&questionId=${questionId}&choice=${orig}`,
              displayText: q.choices[orig],
            },
            contents: [
              {
                type: 'text' as const,
                text: String.fromCharCode(65 + pos),
                flex: 0,
                size: 'sm' as const,
                weight: 'bold' as const,
                color: '#F59E0B',
                gravity: 'top' as const,
              },
              {
                type: 'text' as const,
                text: q.choices[orig],
                flex: 1,
                wrap: true,
                size: 'sm' as const,
                color: '#111827',
                margin: 'md' as const,
              },
            ],
          })),
          ...(cardVariant === 'workbook'
            ? buildWorkbookIdkFooterLink(questionId)
            : buildNotLearnedFooterLink(q)),
        ],
      },
      styles: {
        header: { separator: false },
        body: { separator: true, separatorColor: '#E5E7EB' },
        footer: { separator: true, separatorColor: '#E5E7EB' },
      },
    },
  };
}
