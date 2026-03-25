import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { handleLineCallback } from '../contexts/AuthContext';

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

    handleLineCallback(code, state)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch(() => {
        setError('LINEログインに失敗しました。もう一度お試しください');
      });
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-sm text-center">
        {error ? (
          <>
            <p className="text-red-500 text-sm mb-4">{error}</p>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="text-sm text-amber-500 underline"
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
