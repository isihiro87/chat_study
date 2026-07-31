/**
 * 学習が一段落した人を「ふり返りの会話」に誘う cron（10分おき）。
 *
 * 判定ロジックは `tsudumonRecapCore.ts`（純粋関数・テスト済み）。
 * セッションの記録は `recordTsudumonProgress` が `tsudumonSessions/{uid}` に書く。
 *
 * read 規律: `tsudumonSessions` を `where(pending==true).limit()` で引き、
 * 送る相手だけ `users/{uid}` を1 read する。
 */
import * as functions from 'firebase-functions/v1';

import { recordPushDelivery } from './deliveryStats';
import { getTsudumonLineClient } from './tsudumon/client';
import {
  buildRecapMessage,
  isStaleSession,
  jstDateKey,
  shouldSendRecapAt,
  type RecapSession,
} from './tsudumonRecapCore';
import { TSUDUMON_UNITS, workbookUrl } from './tsudumonUnits';
import { resolveRecapSchedule } from './tsudumonSchedule';
import {
  classifySession,
  wrongLeft,
  type TsudumonProgress,
} from './tsudumonProgressCore';

const MAX_PER_RUN = 200;

function unitTitle(unit: string | undefined): string | null {
  if (!unit) return null;
  return TSUDUMON_UNITS.find((u) => u.no === unit)?.title ?? null;
}

export const tsudumonRecap = functions
  .region('asia-northeast1')
  // 定時配信になったので毎正時でよい（10分おきに走る必要がなくなった）。
  .pubsub.schedule('0 * * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const startedAt = Date.now();
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    const snap = await db
      .collection('tsudumonSessions')
      .where('pending', '==', true)
      .limit(MAX_PER_RUN)
      .get();
    if (snap.empty) return;

    let lineClient;
    try {
      lineClient = await getTsudumonLineClient();
    } catch (error) {
      console.error('[tsudumonRecap] getTsudumonLineClient failed:', error);
      return;
    }

    const nowMs = Date.now();
    let sent = 0;
    let closed = 0;
    let waiting = 0;
    let failed = 0;

    for (const doc of snap.docs) {
      const uid = doc.id;
      const session = doc.data() as RecapSession;

      // 一晩明けた等、いま声をかけても意味がないものは静かに畳む。
      if (isStaleSession(session, nowMs)) {
        await doc.ref.set({ pending: false }, { merge: true });
        closed++;
        continue;
      }
      // 曜日・時間帯のユーザー設定を読む（`tsudumonDaily/{uid}` に同居）。
      let schedule;
      try {
        const cfg = await db.doc(`tsudumonDaily/${uid}`).get();
        schedule = resolveRecapSchedule(cfg.data());
      } catch (error) {
        console.error(
          `[tsudumonRecap] schedule read failed uid=${uid}:`,
          error
        );
        schedule = resolveRecapSchedule(undefined);
      }
      if (!shouldSendRecapAt(session, nowMs, schedule)) {
        waiting++;
        continue;
      }

      const lineUserId = uid.startsWith('line:')
        ? uid.slice('line:'.length)
        : '';
      if (!lineUserId) {
        await doc.ref.set({ pending: false }, { merge: true });
        closed++;
        continue;
      }

      // ブロック確認と、学習の「かたち」の判定を users/{uid} 1 read でまとめて行う。
      let progress: TsudumonProgress | undefined;
      try {
        const userSnap = await db.doc(`users/${uid}`).get();
        const userData = userSnap.data() ?? {};
        if (userData.tsudumonBlockedAt) {
          await doc.ref.set({ pending: false }, { merge: true });
          closed++;
          continue;
        }
        progress = userData.tsudumonProgress as TsudumonProgress | undefined;
      } catch (error) {
        console.error(`[tsudumonRecap] users read failed uid=${uid}:`, error);
      }

      // 「やり切ったか／途中か」「間違いが残っているか」で言うことを変える。
      const unitProgress = session.unit
        ? progress?.units?.[session.unit]
        : undefined;
      const shape = classifySession(unitProgress);
      const left = wrongLeft(unitProgress);

      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [
            {
              type: 'text',
              quickReply: {
                items: [
                  ...(left > 0
                    ? [
                        {
                          type: 'action' as const,
                          action: {
                            type: 'message' as const,
                            label: `まちがえた${left}問を復習`,
                            text: '復習する',
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
                  ...(session.unit
                    ? [
                        {
                          type: 'action' as const,
                          action: {
                            type: 'uri' as const,
                            label: '教材をひらく',
                            uri: workbookUrl(session.unit),
                          },
                        },
                      ]
                    : []),
                ],
              },
              text: buildRecapMessage(session, unitTitle(session.unit), shape, {
                wrongLeft: left,
                workbookUrl: session.unit
                  ? workbookUrl(session.unit)
                  : undefined,
              }),
            },
          ],
        });
        await recordPushDelivery('tsudumonRecap');
        console.log(
          `[tsudumonRecap] sent uid=${uid.slice(0, 16)}… unit=${session.unit ?? '-'} shape=${shape}`
        );
        sent++;
      } catch (error) {
        console.error(`[tsudumonRecap] push failed uid=${uid}:`, error);
        failed++;
        continue;
      }

      await doc.ref.set(
        {
          pending: false,
          lastRecapDate: jstDateKey(nowMs),
          lastRecapShape: shape,
          lastRecapUnit: session.unit ?? null,
          lastRecapAt: FieldValue.serverTimestamp(),
          // 次のセッションのために積算をリセットする
          ms: 0,
          answered: 0,
        },
        { merge: true }
      );
    }

    if (sent > 0 || closed > 0 || failed > 0) {
      console.log(
        `[tsudumonRecap] sent=${sent} closed=${closed} waiting=${waiting} ` +
          `failed=${failed} candidates=${snap.size} elapsed=${Date.now() - startedAt}ms`
      );
    }
  });
