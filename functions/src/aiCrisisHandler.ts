/**
 * 深刻な相談（`crisis`）を受け止める共通ハンドラ。
 *
 * **AI を1回も呼ばない**（＝コストゼロ・内容が揺れない）。固定文で受け止め、
 * `aiSafetyFlags` に記録し、運営2人へ通知する。
 *
 * ⚠️ 元は `aiPaidChat.handleCrisis` にあり、**つづもん購入者（少数）にしか効いて
 * いなかった**。中学生3,000人がいる無料Botこそ必要なので、`client` 注入型にして
 * 両Botから呼べるようにここへ切り出した。
 *
 * 例外は投げない（webhook 200 を維持する）。
 */

import type { messagingApi } from '@line/bot-sdk';

import { buildSafetySummary, CRISIS_REPLY_TEXT } from './aiSafetyCore';
import type { AiChatBotKind } from './aiChatPrompt';

export interface CrisisInput {
  /** reply を送るチャネルの MessagingApiClient */
  client: messagingApi.MessagingApiClient;
  uid: string;
  replyToken: string;
  /** 生徒が送ってきた本文。**保存・通知には冒頭の要約しか載せない** */
  userText: string;
  botKind: AiChatBotKind;
  now: Date;
}

/**
 * `crisis` の処理。
 *
 * 1. まずユーザーへ固定文を返す（ここが最優先。記録や通知で遅らせない）
 * 2. `aiSafetyFlags` に記録（全文は保存しない）
 * 3. 運営へ通知（全文は載せない・uid 単位でスロットル）
 * 4. 計測（内容は載せない）
 */
export async function handleAiCrisis(input: CrisisInput): Promise<void> {
  // 1. まずユーザーへ返す。
  try {
    await input.client.replyMessage({
      replyToken: input.replyToken,
      messages: [{ type: 'text', text: CRISIS_REPLY_TEXT }],
    });
  } catch (error) {
    console.error('[aiCrisisHandler] reply failed:', error);
  }

  const summary = buildSafetySummary(input.userText);

  // 2. 記録（後から傾向を見るため）。全文は保存しない。
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    await getFirestore().collection('aiSafetyFlags').add({
      uid: input.uid,
      classification: 'crisis',
      summary,
      botKind: input.botKind,
      createdAt: FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('[aiCrisisHandler] safety flag write failed:', error);
  }

  // 3. 運営へ通知。**メッセージ全文は載せない**（プライバシー配慮）。
  //    スロットルは uid 単位（別の子の通知が埋もれないように）。
  try {
    const { notifyAdminsThrottled } = await import('./adminNotify');
    await notifyAdminsThrottled(
      `ai_safety_crisis:${input.uid}`,
      [
        '🚨 AIチャットで要注意の相談を検知しました',
        `時刻: ${input.now.toISOString()}`,
        `Bot: ${input.botKind}`,
        `uid: ${input.uid}`,
        `冒頭: ${summary}`,
        '',
        '※ 本人には相談窓口を案内する固定文を返しています',
        '※ 全文は載せていません。必要なら Firestore の aiSafetyFlags を確認',
      ].join('\n'),
      input.now.getTime()
    );
  } catch (error) {
    console.error('[aiCrisisHandler] crisis notify failed:', error);
  }

  // 4. 計測（内容は載せない）
  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('ai_safety_flag', input.uid, {});
  } catch (error) {
    console.warn('[aiCrisisHandler] safety funnel log failed:', error);
  }
}
