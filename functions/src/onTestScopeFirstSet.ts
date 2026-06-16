import * as functions from 'firebase-functions/v1';

import {
  selectAndSendQuestion,
  VALID_HOURS,
  HOUR_LABELS,
  type ValidHour,
} from './lineWebhook';
import {
  getInitialFirstQuestionIntro,
  getInitialFirstQuestionTrailing,
} from './messageVariations';

/**
 * users/{uid}.testScope が初めて保存されたタイミングで、その日の1問目を push する。
 *
 * 旧フロー:
 *   配信時間 postback (`select_time`) でサマリー flex + 1問目を一括で reply 送信していた。
 * 新フロー:
 *   配信時間 postback は「出題範囲を設定する」サマリー flex のみ返す。
 *   ユーザーが LIFF /liff/scope で範囲を保存すると users/{uid}.testScope が新規 set され、
 *   このトリガが発火して 1問目を push する。
 *   ※ 範囲を保存せずに離脱した場合は翌日の dailyQuiz が 1問目になる。
 *
 * 発火条件:
 *   - users/{uid} の onUpdate
 *   - preferredHour が設定済み（オンボーディング完了）
 *   - lastQuestionDeliveredAt が未設定（一度も配信されていない＝初回）
 *   - testScope.updatedAt が before/after で異なる（=新規 set されたタイミング）
 *
 * これらの条件で idempotent。テストスコープを後から変更しても再 push されない。
 */
export const onTestScopeFirstSet = functions
  .region('asia-northeast1')
  .firestore.document('users/{uid}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();
    const uid = context.params.uid as string;

    if (after.lastQuestionDeliveredAt) {
      return;
    }

    // トーク内フロー（Quick Reply 逐次選択）で確定した場合は webhook が reply で
    // 1問目を送るため、ここでの push はスキップ（二重送信を防ぐ）。
    if (after.testScope?.lastSource === 'line_inline') {
      return;
    }

    if (typeof after.preferredHour !== 'number') {
      return;
    }
    if (!VALID_HOURS.includes(after.preferredHour as ValidHour)) {
      return;
    }

    const beforeUpdated = before.testScope?.updatedAt;
    const afterUpdated = after.testScope?.updatedAt;
    if (!afterUpdated) return;
    if (
      beforeUpdated &&
      typeof beforeUpdated.isEqual === 'function' &&
      beforeUpdated.isEqual(afterUpdated)
    ) {
      return;
    }

    const hour = after.preferredHour as ValidHour;
    const hourLabel = HOUR_LABELS[hour];

    console.log(
      `[onTestScopeFirstSet] pushing first question uid=${uid} hour=${hour}`
    );
    try {
      await selectAndSendQuestion(uid, {
        introText: getInitialFirstQuestionIntro(hourLabel),
        trailingText: getInitialFirstQuestionTrailing(hourLabel),
        isInitialSetup: true,
      });
    } catch (e) {
      console.error('[onTestScopeFirstSet] push failed:', e);
    }
  });
