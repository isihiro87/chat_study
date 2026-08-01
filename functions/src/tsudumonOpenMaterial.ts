/**
 * リッチメニュー左上「📖 教材をひらく」の応答（postback `type=tzm_open`）。
 *
 * ## なぜ postback なのか（uri ではなく）
 * リッチメニューの1枠には**静的URLしか置けない**が、「いまやるとよい単元」は
 * ユーザーごとに変わる。そこで postback で受けて、**reply で2択を返す**
 * （つづきから／教材トップ）。reply なので**配信枠を消費しない**。
 * 設計の正本: `pdf-workbook/docs/つづもん-機能ロードマップ.md` §4-3。
 *
 * ## read 規律
 * 1タップにつき **`users/{uid}` と `tsudumonDaily/{uid}` の2 read だけ**。
 * コレクション走査はしない（`CLAUDE.md`「Firestore 読み取りコストの規律」）。
 *
 * ## 未登録・期限切れの人にも押される
 * リッチメニューは**友だち全員に出る**ので、まだ課金していない人も押す。
 * その場合は体験の入口と「常時無料の1単元」を案内する（獲得の入口として使う）。
 */

import type { messagingApi } from '@line/bot-sdk';

import {
  evaluateTsudumonAccess,
  TSUDUMON_FREE_WORKBOOK_TOPICS,
} from './tsudumonCore';
import {
  pickDailyUnit,
  pickReasonLead,
  type TsudumonExam,
} from './tsudumonExamCore';
import type { TsudumonProgress } from './tsudumonProgressCore';
import {
  TSUDUMON_FREE_UNIT_NO,
  TSUDUMON_UNITS,
  referenceUrl,
  workbookUrl,
} from './tsudumonUnits';

const MAP_URL = 'https://tsudumon.jp/map/';
const TRIAL_URL = 'https://tsudumon.jp/account/?do=trial';

/**
 * 課金・体験中の人に返す本文（純粋関数）。
 *
 * 「おすすめの1単元」と「ぜんぶから選ぶ」の2択を必ず並べる。
 * 片方だけだと「今日はここじゃない気分」のときに行き場がなくなる。
 */
export function buildOpenMaterialMessage(opts: {
  unitNo: string;
  /** なぜこの単元なのかの枕（`pickReasonLead`）。空なら既定の書き出し */
  lead?: string;
  /** 学習の記録がまだ無いか（初回の案内に切り替える） */
  firstTime: boolean;
}): string {
  const unit =
    TSUDUMON_UNITS.find((u) => u.no === opts.unitNo) ?? TSUDUMON_UNITS[0];
  const opener = opts.lead
    ? opts.lead
    : opts.firstTime
      ? 'はじめの1単元。ここから始めよう'
      : 'つづきから、いこう';
  return [
    opener,
    '',
    `📖【${unit.grade}・${unit.no}】${unit.title}`,
    unit.hook,
    '',
    '▶ 問題を解く',
    workbookUrl(unit.no),
    '',
    '▶ 参考書で確認',
    referenceUrl(unit.no),
    '',
    '🗺 ぜんぶの単元から選ぶ',
    MAP_URL,
  ].join('\n');
}

/**
 * まだ登録していない・期限が切れている人に返す本文（純粋関数）。
 * **教材トップと常時無料の1単元を必ず添える**（「見れないなら押し損」で終わらせない）。
 */
export function buildOpenMaterialLockedMessage(): string {
  // ⚠️ 常時無料なのは**第4章まるごとではなく、その中の1節**
  //（`tsudumonCore.TSUDUMON_FREE_WORKBOOK_TOPICS` = 「律令国家と奈良時代」）。
  // 「1単元ぜんぶ無料」と書くと、開いた先がロックだらけで嘘になる。
  return [
    'つづもんの教材はこちらです📖',
    '',
    '🎁 3日間無料でためす',
    TRIAL_URL,
    '',
    '🗺 教材トップ（歴史クエスト）',
    MAP_URL,
    '',
    `▶ いつでも無料で読める1節（${TSUDUMON_FREE_WORKBOOK_TOPICS[0]}）`,
    referenceUrl(TSUDUMON_FREE_UNIT_NO),
  ].join('\n');
}

/** つづもんBotで reply を返す（1メッセージ・配信枠ゼロ）。 */
async function reply(
  client: messagingApi.MessagingApiClient,
  replyToken: string,
  text: string
): Promise<void> {
  await client.replyMessage({
    replyToken,
    messages: [{ type: 'text', text }],
  } as never);
}

/**
 * 「教材をひらく」タップの本体。
 *
 * 失敗しても無反応にはしない（押して何も起きないのが最悪）。
 * Firestore が読めなかったときは教材トップだけでも返す。
 */
export async function handleTsudumonOpenPostback(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  let userData: Record<string, unknown> = {};
  let cursor = 0;
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore } = await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();
    // 2 read（users / tsudumonDaily）。走査はしない。
    const [userSnap, dailySnap] = await Promise.all([
      db.doc(`users/${uid}`).get(),
      db.doc(`tsudumonDaily/${uid}`).get(),
    ]);
    userData = userSnap.data() ?? {};
    const daily = dailySnap.data() ?? {};
    if (typeof daily.cursor === 'number') cursor = daily.cursor;
  } catch (error) {
    console.error('[tsudumonOpen] Firestore read failed:', error);
    // 記録が読めなくても入口は返す（教材トップだけでも押せるように）。
    await reply(
      client,
      replyToken,
      ['つづもんの教材はこちらです📖', '', '🗺 教材トップ', MAP_URL].join('\n')
    );
    return;
  }

  const tsudumon = userData.tsudumon as Record<string, unknown> | undefined;
  if (evaluateTsudumonAccess(tsudumon, null, Date.now()) !== 'ok') {
    await reply(client, replyToken, buildOpenMaterialLockedMessage());
    return;
  }

  const exam = userData.tsudumonExam as TsudumonExam | undefined;
  const progress = userData.tsudumonProgress as TsudumonProgress | undefined;
  const picked = pickDailyUnit({
    exam,
    progress,
    cursor,
    nowMs: Date.now(),
  });
  await reply(
    client,
    replyToken,
    buildOpenMaterialMessage({
      unitNo: picked.unitNo,
      lead: pickReasonLead(picked.reason, exam, Date.now()),
      firstTime: Object.keys(progress?.units ?? {}).length === 0,
    })
  );
}
