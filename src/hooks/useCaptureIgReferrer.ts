import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  captureIgReferrer,
  stashIgReferrerFromUrl,
} from '../utils/captureIgReferrer';

/**
 * LIFF ページや認証後に到達する画面で呼ぶ hook。
 * URL クエリ / liff.state から Instagram 流入参照を抽出し、初回のみ
 * users/{uid}.referrer に書き込む。
 *
 * - マウント時に localStorage へ stash（uid 確定前でも保持）
 * - useAuth().user 確定後に Firestore へ書き込み
 * - 既存 referrer があれば何もしない
 */
export function useCaptureIgReferrer(): void {
  const { user } = useAuth();

  // マウント時にまず URL から stash（auth より早いタイミングで来る ref を逃さない）
  useEffect(() => {
    stashIgReferrerFromUrl();
  }, []);

  useEffect(() => {
    if (!user?.uid) return;
    void captureIgReferrer(user.uid);
  }, [user?.uid]);
}
