// つづもん専用LINE Botの MessagingApiClient 生成・キャッシュ。
// 旧Bot（一問一答）の getLineClient()（lineWebhook.ts:577）と同じ
// モジュールスコープ・シングルトンパターン。
//
// 重要: env 未設定時は例外を投げる。旧Botのトークンへフォールバックしない
// （誤って一問一答（3,000フォロワー）へ送信する事故を防ぐため）。
import type { messagingApi } from '@line/bot-sdk';

let cachedTsudumonClient: messagingApi.MessagingApiClient | null = null;

export async function getTsudumonLineClient(): Promise<messagingApi.MessagingApiClient> {
  if (cachedTsudumonClient) return cachedTsudumonClient;
  const channelAccessToken =
    process.env.LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN || '';
  if (!channelAccessToken) {
    throw new Error('LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN is not set');
  }
  const { messagingApi: api } = await import('@line/bot-sdk');
  cachedTsudumonClient = new api.MessagingApiClient({ channelAccessToken });
  return cachedTsudumonClient;
}
