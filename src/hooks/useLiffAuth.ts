import { useEffect, useState } from 'react';
import { signInWithLiffIdToken } from '../contexts/AuthContext';

/**
 * LIFF SDK を初期化し、LIFF 内蔵 OAuth → Firebase Auth の fast-path 認証を
 * 走らせる hook。
 *
 * 流れ:
 * 1. liff.init({ liffId }) で SDK 初期化
 * 2. 未ログインなら liff.login() を発動（redirect_uri = LIFF endpoint なので
 *    LINE webview 内でも PC ブラウザでも OAuth を完結できる）
 * 3. 戻ってきたら liff.getIDToken() で ID トークン取得
 * 4. Cloud Function `createLiffFirebaseToken` で Firebase custom token に変換
 * 5. signInWithCustomToken で Firebase Auth ログイン
 *
 * 結果として /welcome → LINE OAuth → /auth/line/callback の手動チェーンを
 * 経由せず、ユーザータップなしで LIFF ページに到達できる。Firebase Auth
 * セッションは localStorage に永続化されるため、他の LIFF からも同一
 * セッションが使い回せる（初回 OAuth 同意のみ）。
 *
 * @param liffId LIFF アプリ ID (`VITE_LIFF_ID_*` の値)。未指定なら何もしない
 * @returns `attempted` — LIFF 認証の試行が完了したか。これが true になって
 *   から Firebase Auth の `user` を見て redirect 判定すること。
 */
export function useLiffAuth(liffId: string | undefined): { attempted: boolean } {
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    if (!liffId) {
      setAttempted(true);
      return;
    }
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
  }, [liffId]);

  return { attempted };
}
