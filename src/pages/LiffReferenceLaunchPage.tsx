/**
 * 参考書QR即開始の LIFF ページ（/liff/units/ref?t=章番号-topicId）。
 *
 * 参考書の QR は `https://liff.line.me/{VITE_LIFF_ID_UNITS}/ref?t=04-shotoku-asuka`
 * を指す。units の LIFF アプリを流用（LINE Developers Console での追加登録は不要）。
 *
 * 動き: liff.init → IDトークン取得 → Cloud Function `referenceLaunch` に POST →
 * サーバーがトークへ「AI先生と深める」メニュー（質問／理解度チェック）を push →
 * このページは自動でトークへ移動する。
 */
import { useEffect, useState } from 'react';
import liff from '@line/liff';

const LIFF_ID = import.meta.env.VITE_LIFF_ID_UNITS as string | undefined;
const LAUNCH_URL =
  'https://asia-northeast1-chatstudy-63477.cloudfunctions.net/referenceLaunch';
const FRIEND_ADD_URL = 'https://lin.ee/wxDOngU';
const OA_TALK_URL = 'https://line.me/R/oaMessage/%40824cebif/?';

type Status = 'sending' | 'sent' | 'unknown' | 'need_friend' | 'error';

/**
 * URL から参考書の単元キー（章番号-topicId）を取り出す。
 * - 外部ブラウザ経由: /liff/units/ref?t=... （直接 t パラメータ）
 * - LINE アプリ内: /liff/units?liff.state=%2Fref%3Ft%3D...
 */
export function getReferenceLaunchTopic(): string {
  const params = new URLSearchParams(window.location.search);
  const direct = params.get('t');
  if (direct && window.location.pathname.includes('/ref')) {
    return direct.trim();
  }
  const state = params.get('liff.state');
  if (state && state.startsWith('/ref')) {
    const q = state.includes('?') ? state.slice(state.indexOf('?') + 1) : '';
    return new URLSearchParams(q).get('t')?.trim() ?? '';
  }
  return '';
}

export default function LiffReferenceLaunchPage() {
  const [status, setStatus] = useState<Status>('sending');

  useEffect(() => {
    (async () => {
      const t = getReferenceLaunchTopic();
      if (!t || !LIFF_ID) {
        setStatus('error');
        return;
      }
      try {
        await liff.init({ liffId: LIFF_ID });
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: window.location.href });
          return;
        }
        const idToken = liff.getIDToken();
        if (!idToken) {
          setStatus('error');
          return;
        }
        const res = await fetch(LAUNCH_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken, topic: t }),
        });
        if (res.ok) {
          setStatus('sent');
          setTimeout(() => {
            window.location.href = OA_TALK_URL;
            setTimeout(() => {
              if (liff.isInClient()) liff.closeWindow();
            }, 1500);
          }, 1200);
        } else if (res.status === 404) {
          setStatus('unknown');
        } else if (res.status === 424) {
          setStatus('need_friend');
        } else {
          setStatus('error');
        }
      } catch (e) {
        console.error('reference launch failed:', e);
        setStatus('error');
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white border border-stone-200 shadow-sm p-8 text-center">
        <div className="text-5xl mb-4">🤖</div>
        {status === 'sending' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              AI先生を準備中…
            </p>
            <p className="text-sm text-stone-500">
              この単元のAI先生をトークに呼んでいます。そのままお待ちください。
            </p>
          </>
        )}
        {status === 'sent' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              トークに送ったよ！🎉
            </p>
            <p className="text-sm text-stone-500 mb-4">
              このままトークに移動します。質問か理解度チェックをえらんでね！
            </p>
            <a
              href={OA_TALK_URL}
              className="inline-block rounded-lg bg-amber-500 px-6 py-3 font-bold text-white"
            >
              トークを開く
            </a>
          </>
        )}
        {status === 'need_friend' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              まずは友だち追加してね
            </p>
            <p className="text-sm text-stone-500 mb-4">
              公式LINE「チャットでスタディ」を友だち追加すると、
              QRコードからAI先生に質問・理解度チェックができるようになるよ。
            </p>
            <a
              href={FRIEND_ADD_URL}
              className="inline-block rounded-lg bg-amber-500 px-6 py-3 font-bold text-white"
            >
              友だち追加する
            </a>
          </>
        )}
        {status === 'unknown' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              単元が見つかりませんでした
            </p>
            <p className="text-sm text-stone-500">
              QRコードが古い可能性があります。時間をおいてもう一度読み取ってね。
            </p>
          </>
        )}
        {status === 'error' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              うまく開けませんでした
            </p>
            <p className="text-sm text-stone-500">
              時間をおいて、もう一度QRコードを読み取ってください。
            </p>
          </>
        )}
      </div>
    </div>
  );
}
