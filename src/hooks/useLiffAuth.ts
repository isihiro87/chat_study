import { useEffect, useState } from 'react';
import { signInWithLiffIdToken } from '../contexts/AuthContext';

/**
 * LIFF SDK を初期化し、LINE webview 内であれば LIFF の ID トークン経由で
 * Firebase Auth に自動ログインする hook。
 *
 * /welcome → LINE OAuth → /auth/line/callback のリダイレクトチェーンを
 * 経由せず、LIFF webview 内で完結する fast-path 認証を提供する。
 *
 * 各 LIFF ページでこの hook を呼び出すことで、以下のメリットがある:
 * - ユーザーがログインボタンをタップする必要がない
 * - LINE webview 内 OAuth で稀に 400 を返す問題を回避
 * - 体感速度が大幅に向上
 *
 * @param liffId LIFF アプリ ID（VITE_LIFF_ID_* の値）。未指定なら何もしない
 * @returns `attempted` — LIFF 認証の試行が完了したか（成否は問わない）。
 *   この値が true になってから「Firebase Auth に user がいるか」を判定して
 *   redirect 等を行うことで、認証フローが二重に起動するのを防げる。
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

        // LINE app webview だが LIFF にまだログインしていない場合は、LIFF SDK の
        // 内蔵 OAuth フローを発動する。redirect_uri = LIFF endpoint URL なので
        // 我々の /auth/line/callback を経由せず LINE webview 内で完結する。
        // 同じ URL に戻ってきたあと、再度この useEffect が走り isLoggedIn = true
        // になっているので下のブロックに進む。
        if (liff.isInClient() && !liff.isLoggedIn()) {
          liff.login();
          // 画面遷移するのでこのまま return（setAttempted も発火させない）
          return;
        }

        // LIFF にログイン済みなら ID トークンを取得して Firebase Auth へサインイン。
        // これで /welcome 経由のリダイレクトが不要に。
        if (liff.isLoggedIn()) {
          const idToken = liff.getIDToken();
          if (idToken) {
            try {
              await signInWithLiffIdToken(idToken);
              // onAuthStateChanged が AuthContext 側で発火する
            } catch (err) {
              console.warn('[useLiffAuth] signInWithLiffIdToken failed', err);
            }
          }
        }
      } catch (err) {
        console.warn('[useLiffAuth] liff.init or auth flow failed', err);
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
