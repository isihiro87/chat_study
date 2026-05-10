import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LINE_FRIEND_ADD_URL = 'https://lin.ee/wxDOngU';
const POST_LOGIN_NEXT_KEY = 'post-login-next';

/**
 * 認証必須ページに未認証でアクセスしたときに案内する LINE 誘導ページ。
 *
 * - `?next=<path>` をクエリで受け取り、安全なら sessionStorage に退避
 *   （ログイン成功後に LineCallbackPage が取り出して navigate する）
 * - 公式LINEへの友だち追加ボタンと、既存ユーザー向けのLINEログインボタンを併記
 */
export function WelcomePage() {
  const [searchParams] = useSearchParams();
  const { signInWithLine } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const next = searchParams.get('next');
    if (!next) return;
    // パストラバーサル / オープンリダイレクト防止: '/' 始まりかつ '//' で始まらないこと
    if (!next.startsWith('/') || next.startsWith('//')) return;
    try {
      sessionStorage.setItem(POST_LOGIN_NEXT_KEY, next);
    } catch {
      // sessionStorage 不可（プライベートモード等）は握り潰す。next なしの遷移にフォールバック
    }
  }, [searchParams]);

  const handleLineLogin = () => {
    setLoading(true);
    signInWithLine();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-sm">
        <h1
          className="text-xl font-bold text-gray-800 text-center mb-2"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          チャットでスタディ
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          中学生のためのスマホ学習サイト
        </p>

        <ul className="text-sm text-gray-700 space-y-2 mb-6 leading-relaxed">
          <li className="flex gap-2">
            <span aria-hidden className="text-amber-500">✓</span>
            <span>5教科 263トピックを公式LINEで学習</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-amber-500">✓</span>
            <span>毎日1問が決まった時間に届く</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-amber-500">✓</span>
            <span>登録は友だち追加だけ・無料</span>
          </li>
        </ul>

        <a
          href={LINE_FRIEND_ADD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#06C755] hover:bg-[#05b64c] active:scale-95 transition-all rounded-full py-3 px-4 text-white font-medium"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          公式LINEを友だち追加
        </a>

        <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
          ボタンを押すとLINEアプリ（または友だち追加ページ）が開きます。
          <br />
          PCの場合は表示されるQRコードをスマホで読み取ってください。
        </p>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">すでに友だち追加済みの方</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <button
          onClick={handleLineLogin}
          disabled={loading}
          aria-busy={loading}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 active:scale-95 transition-all rounded-full py-3 px-4 text-gray-700 font-medium disabled:opacity-50"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          {loading ? 'ログイン中...' : 'LINEでログイン'}
        </button>

        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          ログインすると学習の進捗を保存できます
        </p>
      </div>
    </div>
  );
}
