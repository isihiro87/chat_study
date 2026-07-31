/**
 * つづもん「今日の1単元」日次配信（**毎正時に起動し、各自の設定時刻の人にだけ送る**）。
 *
 * LPの中核の約束「今日やることが、LINEに届く」の実装。**つづもんBotから**送る
 * （一問一答＝別チャネル・別枠には一切影響しない）。
 *
 * 設計: pdf-workbook/docs/つづもん-メッセージ設計.md §3（C-3）
 *
 * 第1段階の割り当てロジック:
 *   サーバ側にはWeb教材の進捗が無い（`tzmwb-*` / `tzmref-*` は端末の localStorage）。
 *   そこで `tsudumonDaily/{uid}.cursor` を持ち、**カリキュラム順に1単元ずつ**送って
 *   毎回 +1 する。19単元を1周したら先頭へ戻る（復習として自然に2周目に入る）。
 *   LINE経由の演習は `answers`（source:'workbook'）に残るので、ニガテ優先の
 *   出し分けは記録が溜まってからの第2段階とする。
 *
 * 送らない条件（安全側）:
 *   - `active !== true`（解約・失効時に false にする）
 *   - `users/{uid}.tsudumonBlockedAt` あり（つづもんBotをブロック）
 *   - `evaluateTsudumonAccess(...) !== 'ok'`（期限切れ）→ その場で active=false に落とす
 *   - `tsudumon.source === 'trial'`（体験中は tsudumonTrialReminder が担当。二重送信しない）
 *   - 同じJST暦日に送信済み（`lastSentAt`）
 *
 * read 規律: `tsudumonDaily` を `where(active).limit(500)` で引き、対象1人につき
 *   `users/{uid}` を1件だけ読む（コレクション全件走査はしない）。
 */
import * as functions from 'firebase-functions/v1';

import { recordPushDelivery } from './deliveryStats';
import { evaluateTsudumonAccess } from './tsudumonCore';
import { getTsudumonLineClient } from './tsudumon/client';
import {
  DEFAULT_WEEKDAY_HOUR,
  DEFAULT_WEEKEND_HOUR,
  isDayEnabled,
  isWeekendJst,
  resolveDays,
} from './tsudumonSchedule';
import { unitsNeedingReview } from './tsudumonProgressCore';
import {
  buildReviewNudge,
  dueReviewUnits,
  markPrompted,
  type ReviewState,
} from './tsudumonReviewCore';
import {
  pickDailyUnit,
  pickReasonLead,
  type TsudumonExam,
} from './tsudumonExamCore';
import {
  entranceReasonLead,
  pickEntranceUnit,
  resolveEffectiveMode,
} from './tsudumonModeCore';
import {
  TSUDUMON_UNITS,
  cursorForGrade,
  referenceUrl,
  unitAtCursor,
  workbookUrl,
} from './tsudumonUnits';

/** 1回の実行で処理する上限（配信枠と実行時間の保険）。 */
const MAX_PER_RUN = 500;

/** 配信の曜日・時刻を変えるページ（初回配信にだけ添える）。 */
const SETTINGS_URL = 'https://tsudumon.jp/settings/';

/** JST の暦日 'YYYY-MM-DD'。同日二重送信の判定に使う。 */
export function jstDateKey(date: Date): string {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
}

/** 章番号 → 単元名（カッコなし）。間隔反復の文面で使う。 */
function unitTitleOf(no: string): string {
  return TSUDUMON_UNITS.find((x) => x.no === no)?.title ?? `第${no}章`;
}

/** 章番号から「「武士と鎌倉幕府」」のような表示名を作る。 */
function unitLabel(no: string): string {
  const u = TSUDUMON_UNITS.find((x) => x.no === no);
  return u ? `「${u.title}」` : `第${no}章`;
}

/** JST の「時」（0〜23）。どの時間帯の人に送るかの判定に使う。 */
export function jstHour(date: Date): number {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000).getUTCHours();
}

/**
 * 配信本文。曜日で書き出しを変えて、毎日同じ文面に見えないようにする。
 * 純粋関数なのでテストしやすい（副作用なし）。
 */
export function buildDailyUnitMessage(
  cursor: number,
  date: Date,
  /**
   * 見直しの一行。間隔反復（3日後・1週間後・2週間後）で「いま声をかけるべき」と
   * 判定された単元があればその文面、無ければ従来どおり「間違いが残っている章」。
   */
  review?: { unit: string; wrong: number; text?: string },
  /** 出す章を明示する（テスト範囲・復習優先の選定結果）。未指定はカーソル順 */
  unitNo?: string,
  /** なぜこの章なのかの枕（テストまであと◯日 等） */
  lead?: string,
  /**
   * 初回配信か。初回だけ「届く曜日・時間は変えられる」を添える。
   * 毎回入れると邪魔なので1回だけ——**通知がうるさいと感じた人の逃げ道が
   * 見つからないと、設定ではなくブロックが選ばれる**ため、最初に見せておく。
   */
  firstTime?: boolean
): string {
  const unit = unitNo
    ? (TSUDUMON_UNITS.find((u) => u.no === unitNo) ?? unitAtCursor(cursor))
    : unitAtCursor(cursor);
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const openers = [
    'きょうの1単元です📖', // 日
    '今週もいきましょう。きょうの1単元です📖', // 月
    'きょうの1単元です📖', // 火
    '折り返しの水曜日。きょうの1単元です📖', // 水
    'きょうの1単元です📖', // 木
    '週末まであと少し。きょうの1単元です📖', // 金
    'きょうの1単元です📖', // 土
  ];
  return [
    lead || openers[jst.getUTCDay()],
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
    '15分だけでも大丈夫。わからないところは、このトークでつづ先生に聞いてくださいね。',
    // 実データにもとづく見直しの提案（間違えたままの問題が残っている章だけ）
    ...(review && review.unit !== unit.no
      ? [
          '',
          review.text ??
            `📝 ${unitLabel(review.unit)}に、まちがえたままの問題が${review.wrong}問のこっているよ。`,
          workbookUrl(review.unit),
        ]
      : []),
    ...(firstTime
      ? [
          '',
          '⏰ 届く曜日・時間は自分で決められます（このトークで「平日だけにして」と送ってもOK）',
          SETTINGS_URL,
        ]
      : []),
  ].join('\n');
}

/**
 * 日次配信の予定表を作る／更新する。ライセンスが有効になった時点で呼ぶ
 * （Stripe決済完了・ライセンスコード有効化）。体験（trial）では作らない。
 *
 * @param grade 開始学年（'中1' 等）。分かるときだけ渡す。未指定は先頭（中1）から。
 */
export async function ensureTsudumonDaily(
  uid: string,
  grade?: string | null
): Promise<void> {
  const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';
  if (!lineUserId) return;
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    // 保護者アカウントは「今日の1単元」を受け取る側ではない。予定表を作らない
    // ＝配信対象にしない（保護者に学習の催促が届くのは筋が違う）。
    // 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §4-6
    const userSnap = await db.doc(`users/${uid}`).get();
    if (userSnap.data()?.tsudumonRole === 'parent') {
      console.log(`[tsudumonDaily] skip ensure for parent uid=${uid}`);
      return;
    }

    const ref = db.doc(`tsudumonDaily/${uid}`);
    const snap = await ref.get();
    const cur = snap.data() ?? {};
    // 再開（解約→再登録）のときは cursor を引き継ぎ、続きから届くようにする。
    const hasCursor = typeof cur.cursor === 'number';
    // 配信時刻はユーザー設定。既に選んでいれば絶対に上書きしない（既定値で戻さない）。
    const hasWeekday = typeof cur.weekdayHour === 'number';
    const hasWeekend = typeof cur.weekendHour === 'number';
    await ref.set(
      {
        lineUserId,
        active: true,
        ...(hasCursor ? {} : { cursor: cursorForGrade(grade) }),
        ...(hasWeekday ? {} : { weekdayHour: DEFAULT_WEEKDAY_HOUR }),
        ...(hasWeekend ? {} : { weekendHour: DEFAULT_WEEKEND_HOUR }),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[tsudumonDailyUnit] ensureTsudumonDaily failed:', error);
  }
}

/** 配信を止める（解約・失効時）。ドキュメントは消さずに cursor を残す。 */
export async function stopTsudumonDaily(uid: string): Promise<void> {
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    await getFirestore()
      .doc(`tsudumonDaily/${uid}`)
      .set(
        { active: false, updatedAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
  } catch (error) {
    console.error('[tsudumonDailyUnit] stopTsudumonDaily failed:', error);
  }
}

export const tsudumonDailyUnit = functions
  .region('asia-northeast1')
  // 毎正時に起動し、「いまの時刻を配信時刻に選んでいる人」だけに送る。
  // 選択肢は tsudumonSchedule.TSUDUMON_HOUR_CHOICES（朝6時〜夜9時）。
  .pubsub.schedule('0 * * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const startedAt = Date.now();
    console.log('[tsudumonDailyUnit] start');

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    let lineClient;
    try {
      lineClient = await getTsudumonLineClient();
    } catch (error) {
      console.error(
        '[tsudumonDailyUnit] getTsudumonLineClient failed; abort:',
        error
      );
      return;
    }

    const now = new Date();
    const today = jstDateKey(now);
    const hour = jstHour(now);
    // 平日と土日で設定が別なので、その日に見るフィールドを切り替える。
    // （どちらか一方だけを引くので、複合インデックスは active × 各フィールドの2本）
    const hourField = isWeekendJst(now) ? 'weekendHour' : 'weekdayHour';

    const snap = await db
      .collection('tsudumonDaily')
      .where('active', '==', true)
      .where(hourField, '==', hour)
      .limit(MAX_PER_RUN)
      .get();

    if (snap.empty) {
      console.log(
        `[tsudumonDailyUnit] no subscribers for ${hourField}=${hour} (JST)`
      );
      return;
    }

    let sent = 0;
    let skipped = 0;
    let deactivated = 0;
    let failed = 0;

    for (const doc of snap.docs) {
      const uid = doc.id;
      const data = doc.data() as Record<string, unknown>;
      const lineUserId =
        typeof data.lineUserId === 'string' && data.lineUserId
          ? data.lineUserId
          : uid.startsWith('line:')
            ? uid.slice('line:'.length)
            : '';
      if (!lineUserId) {
        skipped++;
        continue;
      }
      if (data.lastSentDate === today) {
        skipped++;
        continue;
      }
      // ユーザーが選んだ曜日（例: 平日だけ・月水金・毎日）。既定は毎日。
      // 旧データ（frequency プリセット）も resolveDays が読み替える。
      if (!isDayEnabled(resolveDays(data), now)) {
        skipped++;
        continue;
      }
      // 通数削減＋体験の自然さ（tsudumonSessions を1 read）:
      //  ① **今日すでに学習した人には送らない**。勉強し終えた直後に
      //     「今日の1単元です」と催促するのは間が抜けているし、枠の無駄。
      //  ② **学習系pushは1日1通が上限**（おつかれさま等と合わせて）。
      try {
        const sessionSnap = await db.doc(`tsudumonSessions/${uid}`).get();
        const sessionData = sessionSnap.data() ?? {};
        const lastSyncAt = sessionData.lastSyncAt;
        if (
          typeof lastSyncAt === 'number' &&
          jstDateKey(new Date(lastSyncAt)) === today
        ) {
          skipped++;
          continue;
        }
      } catch (error) {
        console.error(
          `[tsudumonDailyUnit] session read failed uid=${uid}:`,
          error
        );
      }

      // ライセンスとブロック状態を users/{uid} 1 read で確認する。
      let userData: Record<string, unknown> = {};
      try {
        userData = (await db.doc(`users/${uid}`).get()).data() ?? {};
      } catch (error) {
        console.error(
          `[tsudumonDailyUnit] users read failed uid=${uid}:`,
          error
        );
        skipped++;
        continue;
      }
      if (userData.tsudumonBlockedAt) {
        skipped++;
        continue;
      }
      // 保護者アカウントには学習の催促を送らない。予定表は作らない設計だが、
      // 子として使っていた人が後から保護者になる経路があるので、送信側でも落とす
      // （この read は既に上で払っているので追加コストは無い）。
      if (userData.tsudumonRole === 'parent') {
        await doc.ref.set(
          { active: false, updatedAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
        skipped++;
        continue;
      }
      const tsudumon = userData.tsudumon as Record<string, unknown> | undefined;
      if (evaluateTsudumonAccess(tsudumon, null, now.getTime()) !== 'ok') {
        // 期限切れ。以降は走査対象から外す（Win-back は tsudumonLifecycle が担当）。
        await doc.ref.set(
          { active: false, updatedAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
        deactivated++;
        continue;
      }
      // ⚠️ 体験中（trial）も**送る**（2026-07-27 変更）。
      // 商品の中核の約束は「今日やることが毎日LINEに届く」こと。体験の3日間で
      // それを一度も受け取らないまま終わると、いちばんの価値が伝わらないまま
      // 離脱する。二重送信を避けるため、`tsudumonTrialReminder` の day1（汎用の
      // 使い方メッセージ）は廃止した。体験の残り日数・継続の案内は引き続き
      // tsudumonTrialReminder（lastday / expired）が担当する。

      const cursor = typeof data.cursor === 'number' ? data.cursor : 0;
      const exam = userData.tsudumonExam as TsudumonExam | undefined;
      // 学習モード。中1・中2＝定期テスト／中3＝両立を学年から自動判定し、
      // 両立はテスト14日前だけ定期テスト対策に切り替わる（tsudumonModeCore）。
      const mode = resolveEffectiveMode({
        setting: userData.tsudumonMode,
        grade: userData.grade,
        exam,
        nowMs: now.getTime(),
      });
      // 入試モード = 全19単元を弱点から周回 / 定期テスト = 範囲の中から。
      const picked =
        mode === 'entrance'
          ? pickEntranceUnit({
              progress: userData.tsudumonProgress as never,
              cursor,
              nowMs: now.getTime(),
            })
          : pickDailyUnit({
              exam,
              progress: userData.tsudumonProgress as never,
              cursor,
              nowMs: now.getTime(),
            });
      const lead =
        mode === 'entrance'
          ? entranceReasonLead(picked.reason as never)
          : pickReasonLead(picked.reason as never, exam, now.getTime());
      // 見直しの一行。**間隔反復（3日後・1週間後・2週間後）を優先**する。
      // push は増やさず、今日の1単元に相乗りさせるのが要点（1日2通の約束を守る）。
      // `tsudumonReview/{uid}` を1 read（状態が無ければ従来の「間違いが残っている章」）。
      let review: { unit: string; wrong: number; text?: string } | undefined;
      let promptedUnit: string | undefined;
      try {
        const reviewSnap = await db.doc(`tsudumonReview/${uid}`).get();
        const due = dueReviewUnits(
          userData.tsudumonProgress as never,
          reviewSnap.data() as ReviewState | undefined,
          now.getTime()
        )[0];
        if (due) {
          review = {
            unit: due.unitNo,
            wrong: due.wrong,
            text: buildReviewNudge(due, unitTitleOf(due.unitNo)),
          };
          promptedUnit = due.unitNo;
        }
      } catch (error) {
        console.error(
          `[tsudumonDailyUnit] review read failed uid=${uid}:`,
          error
        );
      }
      if (!review) {
        review = unitsNeedingReview(userData.tsudumonProgress as never, 1)[0];
      }
      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [
            {
              type: 'text',
              // ⚠️ 「終わったよ！」ボタンはここに置かない（ユーザー指摘 2026-07-27）。
              // クイックリプライは**送った瞬間から出る**ので、まだ何もしていない段階で
              // 「終わったよ！」が並ぶのは不自然。LINE の仕様上、あとからボタンを
              // 足したり出し分けたりはできない（送信時に固定される）。
              // 報告は「終わったよ」と**打てば**受け付ける（webhook のテキスト分岐）。
              text: buildDailyUnitMessage(
                cursor,
                now,
                review,
                picked.unitNo,
                lead,
                // 初回配信（まだ一度も送っていない）だけ設定の案内を添える。
                typeof data.lastSentDate !== 'string'
              ),
            },
          ],
        } as never);
        await recordPushDelivery('tsudumonDaily');
      } catch (error) {
        console.error(`[tsudumonDailyUnit] push failed uid=${uid}:`, error);
        failed++;
        continue;
      }

      try {
        await doc.ref.set(
          {
            cursor: (cursor + 1) % TSUDUMON_UNITS.length,
            lastSentDate: today,
            lastSentAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        // push は成功しているのでログのみ（最悪、翌日に同じ単元が届く）
        console.error(`[tsudumonDailyUnit] cursor 更新失敗 uid=${uid}:`, error);
      }
      // 間隔反復の段階を進める（同じ単元を毎日催促しないため）。
      if (promptedUnit) {
        try {
          const ref = db.doc(`tsudumonReview/${uid}`);
          const cur = (await ref.get()).data() as ReviewState | undefined;
          await ref.set(markPrompted(cur, promptedUnit, now.getTime()), {
            merge: true,
          });
        } catch (error) {
          console.error(
            `[tsudumonDailyUnit] review 更新失敗 uid=${uid}:`,
            error
          );
        }
      }
      sent++;
    }

    console.log(
      `[tsudumonDailyUnit] done(${hourField}=${hour}): sent=${sent}, ` +
        `skipped=${skipped}, deactivated=${deactivated}, failed=${failed}, ` +
        `total=${snap.size}, elapsed=${Date.now() - startedAt}ms`
    );
  });
