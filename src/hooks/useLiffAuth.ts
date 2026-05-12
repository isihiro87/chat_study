import { useEffect, useState } from 'react';
import { signInWithLiffIdToken, useAuth } from '../contexts/AuthContext';

/**
 * LIFF SDK を初期化し、LIFF 内蔵 OAuth → Firebase Auth の fast-path 認証を
 * 走らせる hook。
 *
 * 流れ:
 * 1. AuthContext の状態を観測し、Firebase Auth に既にセッションがあれば
 *    LIFF SDK には触れず attempted=true を返す（リピート訪問の高速化）
 * 2. 未ログイン確定（user===null, loading===false）のときのみ:
 *    - `import('@line/liff')` で SDK 動的ロード
 *    - `liff.init({ liffId })` で SDK 初期化
 *    - 未ログインなら `liff.login()` を発動
 *    - 戻ってきたら `liff.getIDToken()` で ID トークン取得
 *    - Cloud Function `createLiffFirebaseToken` で Firebase custom token に変換
 *    - `signInWithCustomToken` で Firebase Auth ログイン
 *
 * AuthContext の Firebase 永続化は localStorage なので、初回 OAuth 同意以降は
 * 他の LIFF ページからも同一セッションが使い回せる。
 *
 * @param liffId LIFF アプリ ID (`VITE_LIFF_ID_*` の値)。未指定なら何もしない
 * @returns `attempted` — LIFF 認証の試行が完了したか。これが true になって
 *   から Firebase Auth の `user` を見て redirect 判定すること。
 */
export function useLiffAuth(liffId: string | undefined): { attempted: boolean } {
  const { user, loading: authLoading } = useAuth();
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    if (!liffId) {
      setAttempted(true);
      return;
    }
    // AuthContext の初期化が終わるまで待つ。loading 中に LIFF フローを発火しても
    // 結局 onAuthStateChanged で上書きされて二重サインインになりうるため。
    if (authLoading) return;

    // 既存セッションあり: LIFF SDK のダウンロードも init も呼ばない（最大の高速化ポイント）。
    if (user) {
      setAttempted(true);
      return;
    }

    // ここに到達するのは「Firebase Auth が未ログインで確定した」ケースのみ。
    let cancelled = false;
    (async () => {
      try {
        const liff = (await import('@line/liff')).default;
        if (cancelled) return;
        await liff.init({ liffId });
        if (cancelled) return;

        if (!liff.isLoggedIn()) {
          // 未ログインなら LIFF SDK 内蔵 OAuth を発動。redirect_uri は
          // LIFF endpoint URL なので /auth/line/callback を経由しない。
          // 画面遷移するので setAttempted は呼ばずに return。
          liff.login();
          return;
        }

        const idToken = liff.getIDToken();
        if (!idToken) return;
        try {
          await signInWithLiffIdToken(idToken);
          // onAuthStateChanged が AuthContext 側で発火する
        } catch (err) {
          console.warn('[useLiffAuth] signInWithLiffIdToken failed', err);
        }
      } catch (err) {
        console.warn('[useLiffAuth] liff flow failed', err);
      } finally {
        if (!cancelled) setAttempted(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [liffId, user, authLoading]);

  return { attempted };
}
