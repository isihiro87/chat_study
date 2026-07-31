/**
 * 登録直後の3ステップ・オンボーディング（postback `type=tzm_ob`）。
 *
 * ## なぜ要るか（ユーザー要望 2026-07-27）
 * 御礼メッセージが「**あすから**毎日お届けします」で終わっていた。
 * いちばん熱があるのは登録した**その瞬間**なのに、そこで何もできない。
 * かといって、いきなり単元を出しても「自分に合っているのか」が分からない。
 *
 * そこで **設定 → 範囲 → 学習開始** の順に、1タップずつ進める:
 *   ステップ1: 何に向けてがんばる？（学習モード。ついでに学年）
 *   ステップ2: テストの範囲は決まってる？（決まっていれば設定ページ／
 *              分からなければチャットで相談）
 *   ステップ3: **その場で「今日はここから」** を出して学習に入る
 *
 * 各ステップは reply（配信枠ゼロ）。押さなければ何も起きない＝強制しない。
 *
 * ## read 規律
 * 1タップにつき最大2 read（`users/{uid}` と `tsudumonDaily/{uid}`）。
 */

import type { messagingApi } from '@line/bot-sdk';

import { MODE_LABELS, isModeSetting } from './tsudumonModeCore';
import {
  isExamActive,
  pickDailyUnit,
  type TsudumonExam,
} from './tsudumonExamCore';
import { referenceUrl, workbookUrl, TSUDUMON_UNITS } from './tsudumonUnits';

const SETTINGS_URL = 'https://tsudumon.jp/settings/';
const EXAM_SETTINGS_URL = 'https://tsudumon.jp/settings/#exam';

type Action = Record<string, string>;
const post = (label: string, data: string, displayText?: string) => ({
  type: 'action' as const,
  action: {
    type: 'postback' as const,
    label,
    data,
    ...(displayText ? { displayText } : {}),
  } as Action,
});
const uri = (label: string, url: string) => ({
  type: 'action' as const,
  action: { type: 'uri' as const, label, uri: url } as Action,
});
const msg = (label: string, text: string) => ({
  type: 'action' as const,
  action: { type: 'message' as const, label, text } as Action,
});

/** ステップ1の質問（登録直後に送る本文）。 */
export function buildStep1Message(): string {
  return [
    'さいしょに、ふたつだけ教えてください（30秒で終わります）。',
    '',
    '① いま、何に向けてがんばりたい？',
    '',
    'これで「今日の1単元」の選び方が変わります。あとからいつでも変えられます。',
  ].join('\n');
}

export function step1QuickReply() {
  return {
    items: [
      post('定期テスト', 'type=tzm_ob&step=mode&v=exam', '定期テスト'),
      post('入試（受験）', 'type=tzm_ob&step=mode&v=entrance', '入試'),
      post('両方がんばる', 'type=tzm_ob&step=mode&v=both', '両方'),
      post('おまかせ', 'type=tzm_ob&step=mode&v=auto', 'おまかせ'),
    ],
  };
}

/** ステップ2: テスト範囲。 */
export function buildStep2Message(mode: string): string {
  return [
    `わかった。《${MODE_LABELS[mode as keyof typeof MODE_LABELS] ?? 'おまかせ'}》で進めるね。`,
    '',
    '② つぎのテストの範囲は決まってる？',
    '',
    '登録すると、その範囲の中から「今日の1単元」を選ぶようになります。',
    'まだ分からなくても大丈夫。あとからでも、話しながらでも決められます。',
  ].join('\n');
}

export function step2QuickReply() {
  return {
    items: [
      uri('決まってる（入力する）', EXAM_SETTINGS_URL),
      msg('わからない（相談する）', 'テストの範囲がわからない'),
      post('あとで決める', 'type=tzm_ob&step=start', 'あとで決める'),
    ],
  };
}

/** ステップ3: いきなり始められるように、単元を名指しして出す。 */
export function buildStep3Message(unitNo: string, hasExam: boolean): string {
  const unit = TSUDUMON_UNITS.find((u) => u.no === unitNo) ?? TSUDUMON_UNITS[0];
  return [
    hasExam
      ? 'ありがとう！さっそく、範囲の中から今日の1単元です📖'
      : 'それじゃあ、さっそく始めよう。今日はここから📖',
    '',
    `【${unit.grade}・${unit.no}】${unit.title}`,
    unit.subtitle,
    '',
    '▶ まず参考書を読む',
    referenceUrl(unit.no),
    '',
    '▶ 問題を解く',
    workbookUrl(unit.no),
    '',
    'まずは3問だけでも大丈夫。終わったら「終わったよ」と送ってくれれば、見にいくね。',
    'わからないところは、このトークにそのまま書いてください。',
  ].join('\n');
}

export function step3QuickReply(unitNo: string) {
  // 「終わったよ！」は置かない。まだ始めていない段階で完了ボタンが出るのは不自然
  // （ユーザー指摘 2026-07-27）。終わったら「終わったよ」と打てば受け付ける。
  return {
    items: [
      uri('参考書を読む', referenceUrl(unitNo)),
      uri('問題を解く', workbookUrl(unitNo)),
    ],
  };
}

async function reply(
  client: messagingApi.MessagingApiClient,
  replyToken: string,
  text: string,
  quickReply?: unknown
): Promise<void> {
  await client.replyMessage({
    replyToken,
    messages: [{ type: 'text', text, ...(quickReply ? { quickReply } : {}) }],
  } as never);
}

/**
 * オンボーディングの各ステップ。
 * `step=mode` … 選んだモードを保存して、ステップ2へ
 * `step=start` … いまの状態から「今日の1単元」を出す（ステップ3）
 */
export async function handleTsudumonOnboardingPostback(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;
  const step = params.get('step');

  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) initializeApp();
  const db = getFirestore();

  if (step === 'mode') {
    const value = params.get('v') ?? 'auto';
    const mode = isModeSetting(value) ? value : 'auto';
    try {
      await db.doc(`users/${uid}`).set({ tsudumonMode: mode }, { merge: true });
    } catch (error) {
      console.error('[tsudumonOnboarding] mode save failed:', error);
    }
    await reply(client, replyToken, buildStep2Message(mode), step2QuickReply());
    return;
  }

  // step=start: いまの記録から1単元を選んで、その場で始められるようにする。
  let exam: TsudumonExam | undefined;
  let progress: unknown;
  let cursor = 0;
  try {
    const [userSnap, dailySnap] = await Promise.all([
      db.doc(`users/${uid}`).get(),
      db.doc(`tsudumonDaily/${uid}`).get(),
    ]);
    const data = userSnap.data() ?? {};
    exam = data.tsudumonExam as TsudumonExam | undefined;
    progress = data.tsudumonProgress;
    const daily = dailySnap.data() ?? {};
    if (typeof daily.cursor === 'number') cursor = daily.cursor;
  } catch (error) {
    console.error('[tsudumonOnboarding] read failed:', error);
  }

  const picked = pickDailyUnit({
    exam,
    progress: progress as never,
    cursor,
    nowMs: Date.now(),
  });
  await reply(
    client,
    replyToken,
    buildStep3Message(picked.unitNo, isExamActive(exam, Date.now())),
    step3QuickReply(picked.unitNo)
  );
}

/** 設定ページの案内（ステップ2で「あとで」を選んだ人への補足に使う）。 */
export const ONBOARDING_SETTINGS_URL = SETTINGS_URL;
