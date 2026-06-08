import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { handleLineCallback } from '../contexts/AuthContext';

const POST_LOGIN_NEXT_KEY = 'post-login-next';

function popPostLoginNext(): string {
  let next: string | null = null;
  try {
    next = sessionStorage.getItem(POST_LOGIN_NEXT_KEY);
    sessionStorage.removeItem(POST_LOGIN_NEXT_KEY);
  } catch {
    // sessionStorage 不可なら / にフォールバック
  }
  if (!next) return '/';
  // オープンリダイレクト防止: 必ず '/' 始まり、'//' で始まらない
  if (!next.startsWith('/') || next.startsWith('//')) return '/';
  return next;
}

/** sessionStorage を消さずに next を覗き見る（再試行ボタン用）。 */
function peekPostLoginNext(): string | null {
  let next: string | null = null;
  try {
    next = sessionStorage.getItem(POST_LOGIN_NEXT_KEY);
  } catch {
    /* ignore */
  }
  if (!next || !next.startsWith('/') || next.startsWith('//')) return null;
  return next;
}

export function LineCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const errorParam = searchParams.get('error');

    if (errorParam) {
      setError('LINEログインがキャンセルされました');
      return;
    }

    if (!code || !state) {
      setError('不正なコールバックです');
      return;
    }

    // LINE アプリ内ブラウザでは Firebase Auth の永続化（IndexedDB）書き込みが
    // ハングし、signInWithCustomToken が resolve も reject もしないことがある。
    // タイムアウトなしだと「LINEでログイン中...」のまま無限に固まるため、
    // 一定時間で打ち切ってエラー UI（再試行/外部ブラウザ案内）を出す。
    let settled = false;
    const timeoutId = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      setError(
        'ログインに時間がかかっています。LINEアプリ内ブラウザでは失敗することがあります。右上メニューから Safari / Chrome で開き直すか、もう一度お試しください。'
      );
    }, 15000);

    handleLineCallback(code, state)
      .then(() => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        navigate(popPostLoginNext(), { replace: true });
      })
      .catch(() => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        setError('LINEログインに失敗しました。もう一度お試しください');
      });

    return () => {
      settled = true;
      window.clearTimeout(timeoutId);
    };
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-sm text-center">
        {error ? (
          <>
            <p role="alert" className="text-red-500 text-sm mb-4 leading-relaxed">{error}</p>
            <button
              onClick={() => {
                const next = peekPostLoginNext();
                navigate(`/welcome${next ? `?next=${encodeURIComponent(next)}` : ''}`, {
                  replace: true,
                });
              }}
              className="block w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-3"
            >
              もう一度ログイン
            </button>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="text-sm text-gray-400 underline"
            >
              トップに戻る
            </button>
          </>
        ) : (
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            LINEでログイン中...
          </p>
        )}
      </div>
    </div>
  );
}
