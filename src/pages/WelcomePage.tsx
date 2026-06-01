import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LINE_FRIEND_ADD_URL = 'https://lin.ee/wxDOngU';
const POST_LOGIN_NEXT_KEY = 'post-login-next';

/**
 * `next` の値から、ユーザーが「既登録の可能性が高い」かを判定する。
 *
 * /liff/* や学習関連の認証必須ページから飛ばされてきた場合は、ほぼ全員が
 * すでに公式LINEを友だち追加済み。逆に next が無い、または `/` の場合は
 * 検索流入の新規候補が含まれる。
 */
function isLikelyReturningUser(next: string | null): boolean {
  if (!next) return false;
  if (
    next.startsWith('/liff/') ||
    next.startsWith('/learning/') ||
    next.startsWith('/random-quiz') ||
    next.startsWith('/chat/') ||
    next.startsWith('/admin') ||
    next === '/settings'
  ) {
    return true;
  }
  return false;
}

/**
 * 認証必須ページに未認証でアクセスしたときに案内する LINE 誘導ページ。
 *
 * - `?next=<path>` をクエリで受け取り、安全なら sessionStorage に退避
 *   （ログイン成功後に LineCallbackPage が取り出して navigate する）
 * - next の値から「既登録の可能性が高い」かを判定し、CTA の主従を入れ替える
 *   - 既登録優位: 「LINEでログイン」(amber) を主、「公式LINEを友だち追加」を副
 *   - 新規優位: 「公式LINEを友だち追加」(LINE 緑) を主、「LINEでログイン」を副
 */
/**
 * Threads / Instagram / Facebook のアプリ内ブラウザ(webview)判定。
 * これらの webview は LINE OAuth リダイレクトの往復で state が保持されず
 * ログインに失敗するため、ユーザーに外部ブラウザ / LINEアプリ利用を促す。
 */
function isMetaInAppBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Instagram|FBAN|FBAV|FB_IAB|Barcelona|Threads/i.test(
    navigator.userAgent || ''
  );
}

export function WelcomePage() {
  const [searchParams] = useSearchParams();
  const { signInWithLine } = useAuth();
  const [loading, setLoading] = useState(false);

  const next = searchParams.get('next');
  const returning = useMemo(() => isLikelyReturningUser(next), [next]);
  const inAppBrowser = useMemo(() => isMetaInAppBrowser(), []);

  useEffect(() => {
    if (!next) return;
    // パストラバーサル / オープンリダイレクト防止: '/' 始まりかつ '//' で始まらないこと
    if (!next.startsWith('/') || next.startsWith('//')) return;
    try {
      sessionStorage.setItem(POST_LOGIN_NEXT_KEY, next);
    } catch {
      // sessionStorage 不可（プライベートモード等）は握り潰す。next なしの遷移にフォールバック
    }
  }, [next]);

  const handleLineLogin = () => {
    setLoading(true);
    signInWithLine();
  };

  const loginButton = (
    <button
      onClick={handleLineLogin}
      disabled={loading}
      aria-busy={loading}
      className={
        returning
          ? 'w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all rounded-full py-3 px-4 text-white font-medium disabled:opacity-60'
          : 'w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 active:scale-95 transition-all rounded-full py-3 px-4 text-gray-700 font-medium disabled:opacity-50'
      }
      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
    >
      {loading ? 'ログイン中...' : 'LINEでログイン'}
    </button>
  );

  const friendAddButton = (
    <a
      href={LINE_FRIEND_ADD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        returning
          ? 'block w-full text-center bg-white border border-gray-300 hover:bg-gray-50 active:scale-95 transition-all rounded-full py-3 px-4 text-gray-700 font-medium'
          : 'block w-full text-center bg-[#06C755] hover:bg-[#05b64c] active:scale-95 transition-all rounded-full py-3 px-4 text-white font-medium'
      }
      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
    >
      公式LINEを友だち追加
    </a>
  );

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
          {returning
            ? 'ログインで続きから始められます'
            : '中学生のためのスマホ学習サイト'}
        </p>

        {inAppBrowser && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 leading-relaxed"
          >
            ⚠️ Threads・Instagram のアプリ内ブラウザでは LINE ログインに失敗することがあります。
            <br />
            右上のメニューから <span className="font-bold">Safari / Chrome で開く</span> か、
            <span className="font-bold">LINEアプリの公式アカウントのメニュー（出題範囲設定など）</span>からご利用ください。
          </div>
        )}

        {!returning && (
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
        )}

        {returning ? (
          <>
            {loginButton}
            <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
              すでに友だち追加済みの方はこちらからログインしてください。
            </p>

            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">まだ友だち追加していない方</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {friendAddButton}
            <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
              ボタンを押すとLINEアプリ（または友だち追加ページ）が開きます。
            </p>
          </>
        ) : (
          <>
            {friendAddButton}
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

            {loginButton}
            <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
              ログインすると学習の進捗を保存できます
            </p>
          </>
        )}
      </div>
    </div>
  );
}
