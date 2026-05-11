import { useEffect, useState } from 'react';
import { signInWithLiffIdToken } from '../contexts/AuthContext';

export interface LiffAuthDebug {
  initOk: boolean | null;
  isInClient: boolean | null;
  isLoggedIn: boolean | null;
  idTokenPresent: boolean | null;
  signInOk: boolean | null;
  err: string | null;
}

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
export function useLiffAuth(liffId: string | undefined): {
  attempted: boolean;
  debug: LiffAuthDebug;
} {
  const [attempted, setAttempted] = useState(false);
  const [debug, setDebug] = useState<LiffAuthDebug>({
    initOk: null,
    isInClient: null,
    isLoggedIn: null,
    idTokenPresent: null,
    signInOk: null,
    err: null,
  });

  useEffect(() => {
    if (!liffId) {
      setAttempted(true);
      return;
    }
    let cancelled = false;
    (async () => {
      let local: LiffAuthDebug = {
        initOk: null,
        isInClient: null,
        isLoggedIn: null,
        idTokenPresent: null,
        signInOk: null,
        err: null,
      };
      try {
        const liff = (await import('@line/liff')).default;
        if (cancelled) return;
        await liff.init({ liffId });
        if (cancelled) return;
        local = { ...local, initOk: true };

        const inClient = liff.isInClient();
        local = { ...local, isInClient: inClient };

        const loggedIn = liff.isLoggedIn();
        local = { ...local, isLoggedIn: loggedIn };

        // 未ログインなら LIFF 内蔵 OAuth を発動する。
        // isInClient() が false のケース（LINE webview 内なのに外部ブラウザと
        // 誤判定される LINE アプリのバージョン差）でも、liff.login() は
        // redirect_uri = LIFF endpoint URL で OAuth を完結できるため両方で動く。
        if (!loggedIn) {
          liff.login();
          return; // 画面遷移するのでここで終わり
        }

        if (loggedIn) {
          const idToken = liff.getIDToken();
          local = { ...local, idTokenPresent: !!idToken };
          if (idToken) {
            try {
              await signInWithLiffIdToken(idToken);
              local = { ...local, signInOk: true };
            } catch (err) {
              local = {
                ...local,
                signInOk: false,
                err: err instanceof Error ? err.message : String(err),
              };
              console.warn('[useLiffAuth] signInWithLiffIdToken failed', err);
            }
          }
        }
      } catch (err) {
        local = {
          ...local,
          initOk: local.initOk ?? false,
          err: err instanceof Error ? err.message : String(err),
        };
        console.warn('[useLiffAuth] liff flow failed', err);
      } finally {
        if (!cancelled) {
          setDebug(local);
          setAttempted(true);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [liffId]);

  return { attempted, debug };
}
