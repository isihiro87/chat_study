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
 *   ステップ2: テストの範囲は決まってる？（確定していれば設定ページ／
 *              だいたい・分からないはチャットで相談）
 *   ステップ3: **その場で「今日はここから」** を出して学習に入る
 *
 * 各ステップは reply（配信枠ゼロ）。押さなければ何も起きない＝強制しない。
 *
 * ## read 規律
 * 1タップにつき最大2 read（`users/{uid}` と `tsudumonDaily/{uid}`）。
 */

import type { messagingApi } from '@line/bot-sdk';

import { isModeSetting } from './tsudumonModeCore';
import {
  isExamActive,
  pickDailyUnit,
  type TsudumonExam,
} from './tsudumonExamCore';
import {
  cursorForGrade,
  referenceUrl,
  workbookUrl,
  TSUDUMON_UNITS,
} from './tsudumonUnits';

/** 聞ける学年。設定ページ（`tsudumonExamSetting.TSUDUMON_GRADES`）と同じ並び。 */
const TSUDUMON_GRADES: readonly string[] = ['中1', '中2', '中3'];

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

/**
 * ステップ1の質問（登録直後に送る本文）。
 *
 * ⚠️ ここで聞くのは**学年だけ**（2026-08-02 に「何に向けてがんばりたい？」から変更）。
 *
 * 理由は2つ。
 *  ① **目的は学年から決まる**。`resolveEffectiveMode` は未設定を `auto` に丸め、
 *     `auto` を `modeFromGrade`（中1・中2＝定期テスト／中3＝両立）で解決する。
 *     つまり目的を別に聞くのは冗長だった。
 *  ② **学年をLINEで聞いていなかった**ので、学年を入れるためだけに設定ページへ
 *     行く必要があり、「LINEで答えたのにWebでまた入力」の二度手間になっていた
 *     （ユーザー指摘 2026-08-02）。
 *
 * 中学生に聞く数は増やさない。目的を自分で決めたい人は、設定ページか
 * チャットで変えられる（`tsudumonMode` は未設定のまま＝`auto` で害がない）。
 */
export function buildStep1Message(): string {
  return [
    'さいしょに、ひとつだけ教えてください（10秒で終わります）。',
    '',
    '① きみは何年生？',
    '',
    'これで「今日の1単元」をどこから出すかが決まります。あとからいつでも変えられます。',
  ].join('\n');
}

export function step1QuickReply() {
  return {
    items: [
      post(
        '中1',
        'type=tzm_ob&step=grade&v=' + encodeURIComponent('中1'),
        '中1'
      ),
      post(
        '中2',
        'type=tzm_ob&step=grade&v=' + encodeURIComponent('中2'),
        '中2'
      ),
      post(
        '中3',
        'type=tzm_ob&step=grade&v=' + encodeURIComponent('中3'),
        '中3'
      ),
    ],
  };
}

/** Flex の配色。つづもんのカードは全部この色（`tsudumonParentCard.ts` と同じ）。 */
const BRAND = '#b45309';
const INK = '#33291f';
const MUTED = '#8a7a63';

const fxText = (t: string, opts: Record<string, unknown> = {}) => ({
  type: 'text',
  text: t,
  wrap: true,
  ...opts,
});

/**
 * ステップ1のカード。**押すのは1回だけ**で登録が終わる。
 *
 * テキスト＋クイックリプライだった頃は、質問が本文に埋もれて選択肢が
 * トーク下部に離れて出るので「何を聞かれているか」が伝わりにくかった
 * （ユーザー指摘 2026-08-02）。カードなら質問とボタンが同じ面に載る。
 */
export function buildStep1Flex(): Record<string, unknown> {
  return {
    type: 'flex',
    altText: 'つづもんへようこそ｜学年を教えてね',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '18px',
        contents: [
          fxText('つづもん、はじめよう', { size: 'xs', color: MUTED }),
          fxText('きみは何年生？', {
            size: 'xl',
            weight: 'bold',
            color: INK,
            margin: 'sm',
          }),
          fxText('これだけで準備は完了。すぐに始められるよ。', {
            size: 'sm',
            color: MUTED,
            margin: 'sm',
          }),
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '18px',
        paddingTop: 'none',
        contents: TSUDUMON_GRADES.map((g) => ({
          type: 'button',
          style: 'primary',
          color: BRAND,
          height: 'sm',
          action: {
            type: 'postback',
            label: g,
            data: `type=tzm_ob&step=grade&v=${encodeURIComponent(g)}`,
            displayText: g,
          },
        })),
      },
    },
  };
}

/**
 * ステップ2のカード＝**その場で始められる1単元**。
 *
 * ⚠️ 以前ここにあった「② つぎのテストの範囲は決まってる？」は**廃止**した
 * （ユーザー指摘 2026-08-02）。初めて使う中学生に、まだ触ってもいない教材の
 * 「範囲」を4択で聞いても答えようがなく、いちばん混乱する場所だった。
 * 範囲は**設定ページで選ぶもの**として、ここでは任意のボタン1つに落とす。
 */
export function buildStartFlex(
  unitNo: string,
  hasExam: boolean
): Record<string, unknown> {
  const unit = TSUDUMON_UNITS.find((u) => u.no === unitNo) ?? TSUDUMON_UNITS[0];
  return {
    type: 'flex',
    altText: `準備できたよ｜${unit.grade}・第${unit.no}章 ${unit.title}`,
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '18px',
        contents: [
          fxText(
            hasExam
              ? '準備できたよ。範囲の中から、きょうはここ'
              : '準備できたよ。きょうはここから',
            { size: 'xs', color: MUTED }
          ),
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'md',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                flex: 0,
                backgroundColor: '#fef3c7',
                cornerRadius: '4px',
                paddingAll: '5px',
                paddingStart: '10px',
                paddingEnd: '10px',
                contents: [
                  fxText(`${unit.grade}・第${unit.no}章`, {
                    size: 'xxs',
                    weight: 'bold',
                    color: BRAND,
                  }),
                ],
              },
              { type: 'filler' },
            ],
          },
          fxText(unit.title, {
            size: 'xl',
            weight: 'bold',
            color: INK,
            margin: 'md',
          }),
          fxText(unit.hook, { size: 'sm', color: MUTED, margin: 'sm' }),
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '18px',
        paddingTop: 'none',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: BRAND,
            height: 'sm',
            action: {
              type: 'uri',
              label: '参考書で確認',
              uri: referenceUrl(unit.no),
            },
          },
          {
            type: 'button',
            style: 'secondary',
            height: 'sm',
            action: {
              type: 'uri',
              label: '問題を解く',
              uri: workbookUrl(unit.no),
            },
          },
          // 範囲は「あとでいい」ことが伝わる置き方にする。ここで止まらせない。
          ...(hasExam
            ? []
            : [
                {
                  type: 'button',
                  style: 'link',
                  color: BRAND,
                  height: 'sm',
                  action: {
                    type: 'uri',
                    label: 'テスト範囲を決める（あとでOK）',
                    uri: EXAM_SETTINGS_URL,
                  },
                },
              ]),
          fxText(
            'まずは3問だけでも十分。わからないところは、このトークにそのまま送ってね💡',
            {
              size: 'xxs',
              color: MUTED,
              margin: 'md',
            }
          ),
        ],
      },
    },
  };
}

/** ステップ2のテキスト版（Flex が落ちたときのフォールバック）。 */
export function buildStep3Message(unitNo: string, hasExam: boolean): string {
  const unit = TSUDUMON_UNITS.find((u) => u.no === unitNo) ?? TSUDUMON_UNITS[0];
  return [
    hasExam
      ? '準備できたよ。範囲の中から、きょうはここ'
      : '準備できたよ。きょうはここから',
    '',
    `📖【${unit.grade}・${unit.no}】${unit.title}`,
    unit.hook,
    '',
    '▶ 参考書で確認',
    referenceUrl(unit.no),
    '',
    '▶ 問題を解く',
    workbookUrl(unit.no),
    ...(hasExam
      ? []
      : ['', '▶ テスト範囲を決める（あとでOK）', EXAM_SETTINGS_URL]),
    '',
    'まずは3問だけでも十分。わからないところは、このトークにそのまま送ってね💡',
  ].join('\n');
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
 * カードで返す。落ちたらテキストで返し直す（返事が消えるのがいちばん困る）。
 * replyToken は**送信に成功したときだけ**消費されるので、400 のあとに使い直せる。
 */
async function replyFlex(
  client: messagingApi.MessagingApiClient,
  replyToken: string,
  flex: Record<string, unknown>,
  fallbackText: string
): Promise<void> {
  try {
    await client.replyMessage({ replyToken, messages: [flex] } as never);
  } catch (error) {
    console.error(
      '[tsudumonOnboarding] flex reply failed; text fallback:',
      error
    );
    await reply(client, replyToken, fallbackText);
  }
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

  // ステップ1の答え＝学年。**目的（tsudumonMode）は書かない**——未設定なら
  // `auto` として学年から解決されるので、あえて固定すると「学年を変えたのに
  // 目的が古いまま」というズレを自分で作ることになる。
  if (step === 'grade') {
    const value = params.get('v') ?? '';
    const grade = TSUDUMON_GRADES.includes(value) ? value : '中1';
    try {
      await db.doc(`users/${uid}`).set({ grade }, { merge: true });
      // 学年が決まったら、配信の開始位置もその学年の先頭章へ寄せる。
      // ここを直さないと中2の子に第1章から届く（登録直後に予定表が
      // 学年不明のまま作られているため）。
      await db
        .doc(`tsudumonDaily/${uid}`)
        .set({ cursor: cursorForGrade(grade) }, { merge: true });
    } catch (error) {
      console.error('[tsudumonOnboarding] grade save failed:', error);
    }
    // 範囲は聞かない。そのまま**始められる状態**にして終わる（1タップで完了）。
  }

  // 旧ボタン（目的を聞いていた頃）の受け皿。押されたら保存だけして先へ進む。
  if (step === 'mode') {
    const value = params.get('v') ?? 'auto';
    const mode = isModeSetting(value) ? value : 'auto';
    try {
      await db.doc(`users/${uid}`).set({ tsudumonMode: mode }, { merge: true });
    } catch (error) {
      console.error('[tsudumonOnboarding] mode save failed:', error);
    }
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
  const hasExam = isExamActive(exam, Date.now());
  await replyFlex(
    client,
    replyToken,
    buildStartFlex(picked.unitNo, hasExam),
    buildStep3Message(picked.unitNo, hasExam)
  );
}

/** 設定ページの案内（ステップ2で「あとで」を選んだ人への補足に使う）。 */
export const ONBOARDING_SETTINGS_URL = SETTINGS_URL;
