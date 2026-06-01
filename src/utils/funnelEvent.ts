/**
 * 公式LINE → プレミアム / LIFF 学習導線の funnel イベントを Firestore に記録する
 * クライアント側ヘルパー。
 *
 * 記録先: `premiumFunnelEvents/{autoId}`
 *
 * クライアントから記録できる eventType は firestore.rules で allowlist 制限済み:
 * - liff_premium_info_view
 * - liff_premium_apply_view
 * - liff_premium_apply_submit
 * - liff_units_open  (じっくり学ぶ LIFF を開いた = 公式LINE flex のクリック相当)
 * - liff_scope_open  (出題範囲設定 LIFF に到達＝認証成功してページ表示)
 * - liff_scope_save  (出題範囲を保存＝設定完了)
 *
 * 失敗時はユーザー体験を壊さないため warn ログのみ。
 */

import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { auth, db } from '../firebase/config';
import { withFirestoreTimeout } from './firestoreTimeout';

export type FunnelEventType =
  | 'liff_premium_info_view'
  | 'liff_premium_apply_view'
  | 'liff_premium_apply_submit'
  | 'liff_units_open'
  | 'liff_scope_open'
  | 'liff_scope_save';

const TIMEOUT_MS = 3000;

export async function logFunnelEvent(
  eventType: FunnelEventType,
  context?: Record<string, unknown>,
): Promise<void> {
  const user = auth.currentUser;
  if (!user) {
    console.warn(`[funnelEvent] no user, skip ${eventType}`);
    return;
  }
  const uid = user.uid;
  const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : uid;
  try {
    await withFirestoreTimeout(
      addDoc(collection(db, 'premiumFunnelEvents'), {
        uid,
        lineUserId,
        eventType,
        occurredAt: serverTimestamp(),
        context: context ?? null,
      }),
      TIMEOUT_MS,
      `logFunnelEvent ${eventType}`,
    );
  } catch (err) {
    console.warn(`[funnelEvent] failed ${eventType}:`, err);
  }
}
