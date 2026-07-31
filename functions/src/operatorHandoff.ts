/**
 * 運営（人）への取り次ぎ通知。純粋ロジックは `operatorHandoffCore.ts`。
 *
 * AI が `escalate` ツールを呼んだときに、運営の LINE へ「誰の・何の件か」を push する。
 * 送信先は env `ADMIN_LINE_USER_IDS`（`submitContactForm` と同じ運用）。
 *
 * ⚠️ 通知は**つづもんBotから**送る。運営が一問一答Botだけを友だち追加している場合は
 *    届かないので、運営アカウントはつづもんBotも友だち追加しておくこと。
 */
import { recordPushDelivery } from './deliveryStats';
import {
  buildOperatorNotice,
  type OperatorHandling,
} from './operatorHandoffCore';

/**
 * 運営へ取り次ぎを通知する。失敗しても会話は成立しているのでログのみ
 * （AI はすでに「運営から連絡が行くよ」と生徒に伝えている点に注意）。
 */
export async function notifyOperatorHandoff(
  uid: string,
  displayName: string | undefined,
  handling: OperatorHandling
): Promise<void> {
  const admins = (process.env.ADMIN_LINE_USER_IDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (admins.length === 0) {
    // 取り次いだのに運営へ届かないのは事故なので、目立つログを残す。
    console.error(
      `[operatorHandoff] ADMIN_LINE_USER_IDS 未設定のため運営へ通知できません uid=${uid} reason=${handling.reason}`
    );
    return;
  }

  const text = buildOperatorNotice(uid, displayName, handling);
  try {
    const { getTsudumonLineClient } = await import('./tsudumon/client');
    const client = await getTsudumonLineClient();
    for (const to of admins) {
      try {
        await client.pushMessage({ to, messages: [{ type: 'text', text }] });
        await recordPushDelivery('other');
      } catch (error) {
        console.error(
          `[operatorHandoff] push failed to=${to.slice(0, 8)}…:`,
          error
        );
      }
    }
    console.log(
      `[operatorHandoff] notified ${admins.length} admin(s) uid=${uid} reason=${handling.reason}`
    );
  } catch (error) {
    console.error('[operatorHandoff] getTsudumonLineClient failed:', error);
  }
}
