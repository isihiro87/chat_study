/**
 * QR即出題の LIFF ページ（/liff/units/wb?t=単元名）。
 *
 * 印刷ワークの QR は `https://liff.line.me/{VITE_LIFF_ID_UNITS}/wb?t=単元名` を指す。
 * LIFF は units の endpoint（/liff/units）にパスを連結してこのページを開くので、
 * units の LIFF アプリをそのまま流用でき、LINE Developers Console での追加登録は不要。
 *
 * 動き: liff.init → IDトークン取得 → Cloud Function `workbookLaunch` に POST →
 * サーバーがトークへ「ワーク開始カード」を push → このページは自動で閉じる。
 * 生徒は QR を読むだけで送信操作なしに問題が始まる。
 */
import { useEffect, useState } from 'react';
import liff from '@line/liff';

const LIFF_ID = import.meta.env.VITE_LIFF_ID_UNITS as string | undefined;
const LAUNCH_URL =
  'https://asia-northeast1-chatstudy-63477.cloudfunctions.net/workbookLaunch';
const FRIEND_ADD_URL = 'https://lin.ee/wxDOngU';
// 公式LINEのトークを開くディープリンク（oaMessage はメッセージ空でもトークが開く）
const OA_TALK_URL = 'https://line.me/R/oaMessage/%40824cebif/?';

type Status = 'sending' | 'sent' | 'unknown' | 'need_friend' | 'error';

/**
 * URL からワークの単元名を取り出す。
 * - 外部ブラウザ経由: /liff/units/wb?t=単元名 （直接 t パラメータ）
 * - LINE アプリ内: /liff/units?liff.state=%2Fwb%3Ft%3D単元名
 *   （LIFF はエンドポイントを liff.state 付きで開く。リダイレクトはせず、
 *     ここで liff.state の中身から t を取り出す。ログイン処理は SDK に任せる）
 */
export function getWorkbookLaunchTopic(): string {
  const params = new URLSearchParams(window.location.search);
  const direct = params.get('t');
  if (direct && window.location.pathname.includes('/wb')) {
    return direct.trim();
  }
  const state = params.get('liff.state');
  if (state && state.startsWith('/wb')) {
    const q = state.includes('?') ? state.slice(state.indexOf('?') + 1) : '';
    return new URLSearchParams(q).get('t')?.trim() ?? '';
  }
  return '';
}

export default function LiffWorkbookLaunchPage() {
  const [status, setStatus] = useState<Status>('sending');
  const [topic, setTopic] = useState('');

  useEffect(() => {
    (async () => {
      const t = getWorkbookLaunchTopic();
      setTopic(t);
      if (!t || !LIFF_ID) {
        setStatus('error');
        return;
      }
      try {
        // liff.state 付きの URL のまま init する（SDK がログイン・state 処理を行う）。
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
          // 公式LINEのトークへ自動で移動する（LINE内ならディープリンクが
          // ネイティブに解決される）。移動できなかった環境向けに、少し待って
          // からウィンドウを閉じるフォールバックも仕掛ける。
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
        console.error('workbook launch failed:', e);
        setStatus('error');
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white border border-stone-200 shadow-sm p-8 text-center">
        <div className="text-5xl mb-4">📖</div>
        {status === 'sending' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              問題を準備中…
            </p>
            <p className="text-sm text-stone-500">
              {topic ? `「${topic}」` : 'ワーク'}の問題をトークに送っています。
              そのままお待ちください。
            </p>
          </>
        )}
        {status === 'sent' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              トークに送ったよ！🎉
            </p>
            <p className="text-sm text-stone-500 mb-4">
              このままトークに移動します。さっそく挑戦しよう！
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
              QRコードから問題を解けるようになるよ。
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
              QRコードが古い可能性があります。トークに「ワーク 単元名」と
              送っても始められるよ。
            </p>
          </>
        )}
        {status === 'error' && (
          <>
            <p className="font-bold text-stone-800 text-lg mb-2">
              うまく開けませんでした
            </p>
            <p className="text-sm text-stone-500">
              時間をおいてもう一度QRコードを読み取るか、トークに 「ワーク
              単元名」と送ってください。
            </p>
          </>
        )}
      </div>
    </div>
  );
}
