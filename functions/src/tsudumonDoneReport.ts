/**
 * 「終わったよ！」の報告（postback `type=tzm_done`）。
 *
 * ## なぜボタンが要るか（ユーザー要望 2026-07-27）
 * 「おつかれさま」は定時（既定 夜9時）に届くようになった。けれど、勉強を
 * 終えた**その瞬間**にほめられるほうが嬉しいし、次につながる。
 * そこで「今日の1単元」に **「終わったよ！」ボタン**を付け、押されたら
 * その場で受け止める。**reply なので配信枠を消費しない。**
 *
 * ## 二重に「おつかれさま」を出さない
 * 押された時点で `tsudumonSessions/{uid}.lastRecapDate` に今日の日付を入れる。
 * 定時の `tsudumonRecap` は同じ日付を見て送信を見送るので、1日1回に収まる。
 *
 * ## read 規律
 * 1タップにつき `users/{uid}` と `tsudumonSessions/{uid}` の**2 read だけ**。
 */

import type { messagingApi } from '@line/bot-sdk';

import { TSUDUMON_UNITS, workbookUrl } from './tsudumonUnits';
import type { TsudumonProgress } from './tsudumonProgressCore';

/** その章の「まちがえたまま」の数と、やった量から本文を作る（純粋）。 */
export function buildDoneReportMessage(opts: {
  unitTitle: string | null;
  answered: number;
  correct: number;
  wrongLeft: number;
  minutes: number;
  /** 連続で学習した日数（1日目は 1） */
  streak: number;
  /** 参考書を読み終わった報告か、問題を解き終わった報告か */
  kind?: 'ref' | 'wb';
}): string {
  const { unitTitle, answered, correct, wrongLeft, minutes, streak } = opts;
  const lines: string[] = [];

  lines.push(
    opts.kind === 'ref'
      ? 'おつかれさま！読み切ったね📖'
      : 'おつかれさま！報告ありがとう🎉'
  );

  // 実データがあるときだけ数字を出す（無いのに作り話をしない）。
  const facts: string[] = [];
  if (unitTitle) facts.push(`「${unitTitle}」`);
  if (answered > 0) facts.push(`${answered}問（正解 ${correct}問）`);
  if (minutes > 0) facts.push(`${minutes}分`);
  if (facts.length > 0) {
    lines.push('', `${facts.join(' / ')} すすめたね。`);
  }

  if (streak >= 2) {
    lines.push(`これで${streak}日つづけて勉強できてるよ。すごい。`);
  }

  if (wrongLeft > 0) {
    lines.push(
      '',
      `まちがえたままの問題が${wrongLeft}問のこっています。`,
      'いま解き直すと、いちばん記憶に残るタイミング。'
    );
  } else if (answered > 0) {
    lines.push('', 'まちがえたままの問題はゼロ。きれいに終わってるよ。');
  }

  if (opts.kind === 'ref') {
    // 読んだ直後がいちばん定着する。**問題を主にすすめつつ**、
    // わからないことがあればそのまま聞ける、という置き方にする。
    lines.push(
      '',
      '読んだ直後に問題を解くと、いちばん頭に残るよ。下のボタンからどうぞ。',
      '',
      'わからないところがあれば、そのまま書いて送ってね。',
      '下の「理解度チェック」を押せば、覚えたか一緒に確かめることもできるよ。'
    );
  } else {
    lines.push(
      '',
      'よかったら、今日やったことを一言だけ教えて。',
      '自分の言葉で言い直すと、それだけで記憶に残りやすくなるよ。'
    );
  }
  return lines.join('\n');
}

/** ミリ秒 → 分（0分と言わないよう最低1分）。 */
function toMinutes(ms: number): number {
  if (ms <= 0) return 0;
  return Math.max(1, Math.round(ms / 60000));
}

/** JST の暦日 'YYYY-MM-DD'。 */
function jstDateKey(ms: number): string {
  return new Date(ms + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/**
 * 連続学習日数を数える（今日を含む）。
 * `tsudumonSessions/{uid}.streak` と `streakDate` を使い、
 * 「きのう学習していれば +1、間があいたら 1 に戻す」。
 */
export function nextStreak(
  prev: { streak?: number; streakDate?: string } | undefined,
  nowMs: number
): { streak: number; streakDate: string } {
  const today = jstDateKey(nowMs);
  if (prev?.streakDate === today) {
    return { streak: Math.max(1, prev.streak ?? 1), streakDate: today };
  }
  const yesterday = jstDateKey(nowMs - 24 * 60 * 60 * 1000);
  const streak =
    prev?.streakDate === yesterday ? Math.max(1, (prev.streak ?? 0) + 1) : 1;
  return { streak, streakDate: today };
}

/**
 * 教材ページの「読み終わった／解き終わった」報告を読み取る。
 *
 * 教材ページのボタンは `line.me/R/oaMessage/` でトークに**下書き**を入れるので、
 * 届くのはただのテキスト。本文の「第N章」から単元を特定する。
 * push を使わない＝**配信枠を消費しない**のがこの方式の要点。
 */
export function parseDoneReport(
  text: string
): { unitNo: string; kind: 'ref' | 'wb' } | null {
  const m = /第(\d{1,2})章/.exec(text);
  if (!m) return null;
  // 「読んだよ」「解いたよ」（教材ページのボタン）と、
  // 「読み終わった」「解き終わった」（手打ち）の両方を受ける。
  if (!/(読んだ|読み終わ|解いた|解き終わ)/.test(text)) return null;
  const no = String(Number(m[1])).padStart(2, '0');
  return { unitNo: no, kind: /(読んだ|読み終わ)/.test(text) ? 'ref' : 'wb' };
}

export async function handleTsudumonDonePostback(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined,
  unitNo: string | undefined,
  kind: 'ref' | 'wb' = 'wb'
): Promise<void> {
  if (!replyToken) return;

  let progress: TsudumonProgress | undefined;
  let session: Record<string, unknown> = {};
  let db: FirebaseFirestore.Firestore | undefined;
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore } = await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    db = getFirestore();
    const [userSnap, sessionSnap] = await Promise.all([
      db.doc(`users/${uid}`).get(),
      db.doc(`tsudumonSessions/${uid}`).get(),
    ]);
    progress = userSnap.data()?.tsudumonProgress as
      | TsudumonProgress
      | undefined;
    session = sessionSnap.data() ?? {};
  } catch (error) {
    console.error('[tsudumonDone] read failed:', error);
  }

  const nowMs = Date.now();
  const unit = unitNo ?? (session.unit as string | undefined);
  const u = unit ? progress?.units?.[unit] : undefined;
  const streakInfo = nextStreak(
    session as { streak?: number; streakDate?: string },
    nowMs
  );

  const unitTitle = unit
    ? (TSUDUMON_UNITS.find((x) => x.no === unit)?.title ?? null)
    : null;
  const text = buildDoneReportMessage({
    unitTitle,
    answered: u?.answered ?? 0,
    correct: u?.correct ?? 0,
    wrongLeft: u?.wrongNow?.length ?? 0,
    minutes: toMinutes((u?.msRef ?? 0) + (u?.msWb ?? 0)),
    streak: streakInfo.streak,
    kind,
  });

  const wrongLeft = u?.wrongNow?.length ?? 0;
  try {
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text,
          quickReply: {
            items: [
              // 参考書を読んだ直後は「問題を解く」が主。ほかは補助。
              ...(kind === 'ref' && unit
                ? [
                    {
                      type: 'action' as const,
                      action: {
                        type: 'uri' as const,
                        label: 'この単元の問題を解く',
                        uri: workbookUrl(unit),
                      },
                    },
                  ]
                : []),
              ...(wrongLeft > 0
                ? [
                    {
                      type: 'action' as const,
                      action: {
                        type: 'message' as const,
                        label: `まちがえた${wrongLeft}問を復習`,
                        text: '復習する',
                      },
                    },
                  ]
                : []),
              // ⚠️ 「理解度チェック」だけを送ると、**どの単元か伝わらない**。
              // 実際に第1章を読んだ直後に鎌倉幕府の問題が出た（2026-07-27）。
              // 送る本文に単元名を入れて、AI側の単元解決（教材接地）に必ず乗せる。
              ...(kind === 'ref' && unitTitle
                ? [
                    {
                      type: 'action' as const,
                      action: {
                        type: 'message' as const,
                        label: '理解度チェック',
                        text: `「${unitTitle}」の理解度チェックをして`,
                      },
                    },
                  ]
                : []),
              {
                type: 'action' as const,
                action: {
                  type: 'message' as const,
                  label: '話してみる',
                  text: '今日やったこと、話してみる',
                },
              },
              ...(kind !== 'ref' && unit
                ? [
                    {
                      type: 'action' as const,
                      action: {
                        type: 'uri' as const,
                        label: 'もう少し解く',
                        uri: workbookUrl(unit),
                      },
                    },
                  ]
                : []),
            ],
          },
        },
      ],
    } as never);
  } catch (error) {
    console.error('[tsudumonDone] reply failed:', error);
    return;
  }

  // 定時の「おつかれさま」と二重にならないよう、今日はもう送らない印を付ける。
  // あわせて連続学習日数を更新する（次の報告でほめるため）。
  try {
    await db?.doc(`tsudumonSessions/${uid}`).set(
      {
        lastRecapDate: jstDateKey(nowMs),
        lastRecapShape: 'self_report',
        pending: false,
        streak: streakInfo.streak,
        streakDate: streakInfo.streakDate,
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[tsudumonDone] session update failed:', error);
  }
}
