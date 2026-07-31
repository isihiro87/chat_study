/**
 * 運営（管理者）への LINE 通知ヘルパー。
 *
 * `lineWebhook.handleTsudumonContinueRequest` などに散在していた
 * 「`ADMIN_LINE_USER_IDS` に push する」処理を1箇所にまとめたもの。
 * AI のコスト上限超過・危険サイン検知など、**運営が即座に知る必要がある事象**で使う。
 *
 * ## 重要な前提: 通知は必ず一問一答Bot（旧Bot）から送る
 * `ADMIN_LINE_USER_IDS` の管理者は一問一答の友だちである前提。つづもんBotの
 * client で送ると、管理者がつづもんBotを友だち追加していない限り届かない
 * （`lineWebhook.ts` の既存コメントと同じ理由）。
 *
 * 失敗は握りつぶす（通知が落ちても本体の処理は止めない）。ただし
 * **見逃しを検知できるよう ERROR ログは必ず残す**。
 */

/** env から管理者 LINE ユーザー ID を読む。 */
export function getAdminLineUserIds(
  env: Record<string, string | undefined> = process.env
): string[] {
  return (env.ADMIN_LINE_USER_IDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * 管理者全員へテキストを push する。
 * @returns 送信できた人数（0 なら誰にも届いていない）
 */
export async function notifyAdmins(text: string): Promise<number> {
  const admins = getAdminLineUserIds();
  if (admins.length === 0) {
    console.warn(
      '[adminNotify] ADMIN_LINE_USER_IDS not set; notification dropped'
    );
    return 0;
  }

  let pushed = 0;
  try {
    // 一問一答Bot固定（上のコメント参照）。
    const { getLineClient } = await import('./lineWebhook');
    const client = await getLineClient();
    for (const adminId of admins) {
      try {
        await client.pushMessage({
          to: adminId,
          messages: [{ type: 'text', text }],
        });
        pushed++;
      } catch (error) {
        console.error(`[adminNotify] push to ${adminId} failed:`, error);
      }
    }
  } catch (error) {
    console.error('[adminNotify] client init failed:', error);
  }
  return pushed;
}

/**
 * 同じ種類の通知を短時間に連投しないための簡易スロットル。
 * 全体キャップ超過は**全ユーザーの各ターンで発火し得る**ため、これが無いと
 * 管理者の LINE が埋まる（かつ push 配信枠を無駄に消費する）。
 *
 * Cloud Functions のインスタンス再利用に乗るモジュールレベルの記録。
 * インスタンスが増えるとその数だけ通知が出るが、無制限連投は防げる。
 */
const lastNotifiedAtMs = new Map<string, number>();

/** 既定のスロットル間隔（同じ key は1時間に1回まで）。 */
export const ADMIN_NOTIFY_THROTTLE_MS = 60 * 60 * 1000;

/** テスト用: スロットル記録を消す。 */
export function __resetAdminNotifyThrottle(): void {
  lastNotifiedAtMs.clear();
}

/** スロットルを通過するか判定して記録する（純粋ではないが副作用はメモリのみ）。 */
export function shouldNotify(
  key: string,
  nowMs: number,
  throttleMs: number = ADMIN_NOTIFY_THROTTLE_MS
): boolean {
  const last = lastNotifiedAtMs.get(key);
  if (last !== undefined && nowMs - last < throttleMs) return false;
  lastNotifiedAtMs.set(key, nowMs);
  return true;
}

/**
 * スロットル付きの管理者通知。
 * @param key 通知の種類（例 `ai_cost:global_daily`）。この単位で間引く
 */
export async function notifyAdminsThrottled(
  key: string,
  text: string,
  nowMs: number = Date.now()
): Promise<number> {
  if (!shouldNotify(key, nowMs)) {
    console.log(`[adminNotify] throttled: ${key}`);
    return 0;
  }
  return notifyAdmins(text);
}
