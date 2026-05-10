import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/**
 * LINE 公式アカウントのリッチメニュー「単元を選ぶ」から開かれる LIFF ページ。
 *
 * 動作:
 * - LIFF SDK を初期化（`VITE_LIFF_ID_UNITS` が設定されていれば）
 * - すでに Firebase Auth 済みなら `/` へ遷移
 * - 未認証なら既存の LINE Login OAuth フローを起動（`signInWithLine` →
 *   `/auth/line/callback` → Firebase Custom Token → `/` リダイレクト）
 *
 * LIFF ID 未設定の場合は SDK 初期化を黙ってスキップして、純粋な OAuth リダイレクトだけ行う。
 */
export function LiffUnitsPage() {
  const { user, loading, signInWithLine } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (loading) return;

    let cancelled = false;
    (async () => {
      const liffId = import.meta.env.VITE_LIFF_ID_UNITS as string | undefined;
      if (liffId) {
        try {
          const liff = (await import('@line/liff')).default;
          await liff.init({ liffId });
        } catch (err) {
          console.warn('[LiffUnitsPage] liff.init failed', err);
          // 初期化失敗してもログイン誘導は試みる（外部ブラウザでも動かしたいケース）
        }
      }
      if (cancelled) return;

      if (user) {
        navigate('/', { replace: true });
        return;
      }

      try {
        signInWithLine();
      } catch (err) {
        console.error('[LiffUnitsPage] signInWithLine failed', err);
        setError('LINEログインを開始できませんでした。再度メニューから開きなおしてください。');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [loading, user, navigate, signInWithLine]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-sm text-center">
        {error ? (
          <p role="alert" className="text-red-500 text-sm">
            {error}
          </p>
        ) : (
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            単元選択画面へ移動中...
          </p>
        )}
      </div>
    </div>
  );
}
