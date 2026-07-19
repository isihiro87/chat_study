import * as functions from 'firebase-functions/v1';

import { getLineClient } from './lineWebhook';
import { recordPushDelivery } from './deliveryStats';

/**
 * users/{uid}.testScope が保存（新規 set / 変更）されたら、
 * 「出題範囲を設定しました」＋選択された範囲一覧を LINE に push する。
 *
 * - testScope.updatedAt が before/after で変化したタイミングで発火（毎回）。
 * - topics が空（クリア）のときは送らない。
 * - onTestScopeFirstSet（初回の1問目 push）とは独立。初回設定時は
 *   「設定完了メッセージ」＋「1問目」の両方が届く。
 */
export const onTestScopeSaved = functions
  .region('asia-northeast1')
  .firestore.document('users/{uid}')
  .onUpdate(async (change) => {
    const before = change.before.data();
    const after = change.after.data();

    const beforeUpdated = before.testScope?.updatedAt;
    const afterUpdated = after.testScope?.updatedAt;
    if (!afterUpdated) return;
    if (
      beforeUpdated &&
      typeof beforeUpdated.isEqual === 'function' &&
      beforeUpdated.isEqual(afterUpdated)
    ) {
      return; // testScope は変わっていない
    }

    // トーク内フロー（Quick Reply 逐次選択）で確定した場合は webhook が reply で
    // 確認＋1問目を送っているので、push は出さない（二重送信・配信枠の無駄を防ぐ）。
    if (after.testScope?.lastSource === 'line_inline') return;

    const lineUserId =
      typeof after.lineUserId === 'string' ? after.lineUserId : '';
    if (!lineUserId) return;
    if (after.blocked === true) return;

    const topics: string[] = Array.isArray(after.testScope?.topics)
      ? (after.testScope.topics as unknown[]).filter(
          (t): t is string => typeof t === 'string'
        )
      : [];

    let text: string;
    if (topics.length === 0) {
      // クリア（全範囲）も「設定できたこと」を伝える（詳しく設定ページで全解除した等）。
      text =
        `✅ 出題範囲を「学年ぜんぶ」に設定したよ！\n\n` +
        `学年の全範囲から1問ずつ届くよ。範囲はメニューの「出題範囲設定」からいつでも絞り込めるよ。`;
    } else {
      // 範囲が多すぎる場合はメッセージが長くなりすぎないよう上限を設ける
      const MAX_LIST = 30;
      const shown = topics.slice(0, MAX_LIST);
      const listText = shown.map((t) => `・${t}`).join('\n');
      const moreText =
        topics.length > MAX_LIST
          ? `\n…ほか ${topics.length - MAX_LIST} 単元`
          : '';

      text =
        `✅ 出題範囲を設定したよ！\n\n` +
        `【選択中の範囲（${topics.length}単元）】\n` +
        `${listText}${moreText}\n\n` +
        `この範囲から1問ずつ届くよ。範囲はメニューの「出題範囲設定」からいつでも変更できるよ。`;
    }

    try {
      const client = await getLineClient();
      await client.pushMessage({
        to: lineUserId,
        messages: [{ type: 'text', text }],
      });
      await recordPushDelivery('other');
      console.log(
        `[onTestScopeSaved] confirmation sent uid=${after.lineUserId} topics=${topics.length}`
      );
    } catch (e) {
      console.error('[onTestScopeSaved] push failed:', e);
    }
  });
