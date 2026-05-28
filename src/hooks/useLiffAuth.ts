import { useEffect, useRef, useState } from 'react';
import { signInWithLiffIdToken, useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase/config';
import {
  captureIgReferrer,
  stashIgReferrerFromUrl,
} from '../utils/captureIgReferrer';

/**
 * LIFF SDK を初期化し、LIFF 内蔵 OAuth → Firebase Auth の fast-path 認証を
 * 走らせる hook。
 *
 * 設計のポイント:
 *
 * 1. **既存セッションがあれば LIFF SDK には触らない**:
 *    Firebase Auth が `user!=null` で確定済みなら、LIFF SDK の import / init /
 *    token 交換を完全にスキップする（リピート訪問の高速化）。
 *
 * 2. **そうでない場合は LIFF flow を Firebase Auth 復元と並列に走らせる**:
 *    auth の loading 解決を待たない。複数 LIFF タブ同時起動時の IndexedDB 競合で
 *    Firebase Auth 復元が長引いた際、LIFF flow を直列で待たせると体感が極端に
 *    悪化するため。両方を競争させ、Firebase Auth の `auth.currentUser` が
 *    決定点で立っていれば LIFF 側の重い token 交換をスキップする。
 *
 * 3. **同一マウント内で LIFF flow を二重発火させない**:
 *    `startedRef` で flow 開始を 1 回だけに制限する。`user` の
 *    変化で useEffect が再実行されても、既に flow が走っていれば追加発火しない。
 *
 * 4. **ハードタイムアウトで `attempted` の取りこぼしを防ぐ**:
 *    `signInWithCustomToken` が IDB 競合等で hang した場合に備え、一定時間後は
 *    強制的に `attempted=true` にしてレンダーガードを抜けさせる。
 *
 * @param liffId LIFF アプリ ID (`VITE_LIFF_ID_*` の値)。未指定なら何もしない
 * @returns `attempted` — LIFF 認証の試行が完了したか。これが true になって
 *   から Firebase Auth の `user` を見て redirect 判定すること。
 */
const LIFF_FLOW_TIMEOUT_MS = 10000;

export function useLiffAuth(liffId: string | undefined): { attempted: boolean } {
  const { user } = useAuth();
  const [attempted, setAttempted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!liffId) {
      setAttempted(true);
      return;
    }

    // Instagram キャンペーン経由の流入参照を URL から拾って localStorage に保存。
    // 認証完了前でも値を保持できるよう、useEffect 入り口で必ず一度行う。
    stashIgReferrerFromUrl();

    // 既存セッションあり: LIFF SDK のダウンロードも init も呼ばない。
    // authLoading 中でも user が立ったタイミングで即 attempted=true にする
    // ことで、LIFF flow が並列で走っていても無駄な signInWithCustomToken を避ける。
    if (user) {
      setAttempted(true);
      // 既ログインの uid で referrer 取り込みを試行（初回 referrer のみ書き込み）
      void captureIgReferrer(user.uid);
      return;
    }

    // 同一マウント内で flow 開始を 1 回に制限。
    // user / authLoading の変化で useEffect が再実行されても重複発火させない。
    if (startedRef.current) return;
    startedRef.current = true;

    let cancelled = false;

    // ハードタイムアウト: flow が hang してもレンダーを救済する。
    const timeoutId = window.setTimeout(() => {
      if (!cancelled) setAttempted(true);
    }, LIFF_FLOW_TIMEOUT_MS);

    (async () => {
      try {
        const liff = (await import('@line/liff')).default;
        if (cancelled) return;
        await liff.init({ liffId });
        if (cancelled) return;

        // LIFF SDK ロード+init の間に Firebase Auth が persistence から
        // セッションを復元している可能性がある。auth.currentUser は
        // React state より新鮮（同期読み出し）なのでこちらを優先で使う。
        if (auth.currentUser) return;

        if (!liff.isLoggedIn()) {
          // LIFF SDK 内蔵 OAuth を発動。画面遷移するので setAttempted は呼ばない。
          liff.login();
          return;
        }

        const idToken = liff.getIDToken();
        if (!idToken) return;

        // token 交換 + signInWithCustomToken (IDB 書き込みあり) の直前にもう一度確認。
        if (auth.currentUser) return;

        try {
          await signInWithLiffIdToken(idToken);
          // onAuthStateChanged が AuthContext 側で発火する
        } catch (err) {
          console.warn('[useLiffAuth] signInWithLiffIdToken failed', err);
        }
      } catch (err) {
        console.warn('[useLiffAuth] liff flow failed', err);
      } finally {
        window.clearTimeout(timeoutId);
        if (!cancelled) setAttempted(true);
      }
    })();
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [liffId, user]);

  return { attempted };
}
