import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import {
  lineQuestionTopics,
  type LineGrade,
  type LineSubject,
} from '../data/generated/line-topics.generated';
import { saveTestScope, clearTestScope } from '../utils/testScope';

const GRADE_LABEL_TO_NUMBER: Record<string, LineGrade> = {
  中1: 1,
  中2: 2,
  中3: 3,
};

const SUBJECT_LABEL: Record<LineSubject, string> = {
  english: '英語',
  history: '歴史',
};

interface UserContext {
  subject: LineSubject;
  grade: LineGrade;
  initialTopics: string[];
}

type Status = 'loading' | 'ready' | 'saving' | 'saved' | 'cleared' | 'error' | 'profile-missing';

/**
 * 公式LINE のリッチメニュー「テスト範囲設定」から開かれる LIFF ページ。
 *
 * users/{uid}.subject / .grade に登録されている教科×学年に該当する topic 候補を
 * 表示し、選択した topic を users/{uid}.testScope.topics に保存する。
 */
export function LiffTestRangePage() {
  const { user, loading } = useAuth();

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userCtx, setUserCtx] = useState<UserContext | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // LIFF init（LiffUnitsPage と同じ pattern）
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const liffId = import.meta.env.VITE_LIFF_ID_TEST_RANGE as string | undefined;
      if (!liffId) return;
      try {
        const liff = (await import('@line/liff')).default;
        if (cancelled) return;
        await liff.init({ liffId });
      } catch (err) {
        console.warn('[LiffTestRangePage] liff.init failed', err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Firestore からユーザー情報読み出し
  useEffect(() => {
    if (loading) return;
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (cancelled) return;
        if (!snap.exists()) {
          setStatus('profile-missing');
          return;
        }
        const data = snap.data();
        const subject = data.subject as LineSubject | undefined;
        const gradeLabel = data.grade as string | undefined;
        const gradeNum = gradeLabel ? GRADE_LABEL_TO_NUMBER[gradeLabel] : undefined;
        if (!subject || !gradeNum) {
          setStatus('profile-missing');
          return;
        }
        const initialTopics = Array.isArray(data.testScope?.topics)
          ? (data.testScope.topics as unknown[]).filter(
              (t): t is string => typeof t === 'string'
            )
          : [];
        setUserCtx({ subject, grade: gradeNum, initialTopics });
        setSelected(new Set(initialTopics));
        setStatus('ready');
      } catch (err) {
        console.error('[LiffTestRangePage] load failed', err);
        if (!cancelled) {
          setErrorMessage('読み込みに失敗しました。再度開き直してください。');
          setStatus('error');
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  const candidateTopics = useMemo(() => {
    if (!userCtx) return [] as string[];
    return lineQuestionTopics[userCtx.subject]?.[userCtx.grade] ?? [];
  }, [userCtx]);

  const allChecked =
    candidateTopics.length > 0 && candidateTopics.every((t) => selected.has(t));

  const toggleOne = (topic: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) next.delete(topic);
      else next.add(topic);
      return next;
    });
  };

  const toggleAll = () => {
    if (allChecked) {
      setSelected(new Set());
    } else {
      setSelected(new Set(candidateTopics));
    }
  };

  const closeIfPossible = async () => {
    try {
      const liff = (await import('@line/liff')).default;
      if (liff.isInClient()) {
        liff.closeWindow();
      }
    } catch {
      // SPA で開かれている場合は閉じない
    }
  };

  const handleSave = async () => {
    if (!user) return;
    setStatus('saving');
    setErrorMessage(null);
    try {
      await saveTestScope(user.uid, Array.from(selected));
      setStatus('saved');
      await closeIfPossible();
    } catch (err) {
      console.error('[LiffTestRangePage] save failed', err);
      setErrorMessage('保存できませんでした。通信状況を確認してください。');
      setStatus('error');
    }
  };

  const handleClear = async () => {
    if (!user) return;
    setStatus('saving');
    setErrorMessage(null);
    try {
      await clearTestScope(user.uid);
      setSelected(new Set());
      setStatus('cleared');
      await closeIfPossible();
    } catch (err) {
      console.error('[LiffTestRangePage] clear failed', err);
      setErrorMessage('クリアできませんでした。通信状況を確認してください。');
      setStatus('error');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <p className="text-gray-500 text-sm">読み込み中...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/welcome" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1
            className="text-lg font-bold text-gray-800 text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🎯 テスト範囲を設定
          </h1>
          <p className="text-xs text-gray-500 text-center mt-1">
            選んだ範囲から「追加で解く」「苦手を復習」が出題されるよ
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {status === 'profile-missing' && (
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              先に教科と学年を設定してください。
              <br />
              LINE で「設定・サポート」→「学年変更」から登録できます。
            </p>
          </div>
        )}

        {(status === 'ready' ||
          status === 'saving' ||
          status === 'saved' ||
          status === 'cleared' ||
          status === 'error') &&
          userCtx && (
            <>
              <div className="mt-4 bg-white rounded-2xl shadow-sm p-4">
                <div className="text-xs text-gray-500 mb-1">対象</div>
                <div className="text-sm font-medium text-gray-800">
                  {SUBJECT_LABEL[userCtx.subject]}・中{userCtx.grade}
                </div>
              </div>

              {candidateTopics.length === 0 ? (
                <p className="mt-8 text-center text-sm text-gray-400">
                  この教科×学年の問題はまだ準備中です。
                </p>
              ) : (
                <>
                  <div className="mt-4 flex items-center justify-between px-1">
                    <span className="text-xs text-gray-500">
                      選択中: {selected.size} / {candidateTopics.length}
                    </span>
                    <button
                      onClick={toggleAll}
                      className="text-xs text-amber-600 font-medium hover:text-amber-700"
                    >
                      {allChecked ? '全て解除' : '全て選択'}
                    </button>
                  </div>

                  <ul className="mt-2 space-y-2">
                    {candidateTopics.map((t) => {
                      const checked = selected.has(t);
                      return (
                        <li key={t}>
                          <button
                            onClick={() => toggleOne(t)}
                            className={`w-full text-left rounded-2xl px-4 py-3 border transition active:scale-[0.99] ${
                              checked
                                ? 'bg-amber-50 border-amber-400'
                                : 'bg-white border-gray-200 hover:border-amber-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center text-xs font-bold ${
                                  checked
                                    ? 'bg-amber-500 border-amber-500 text-white'
                                    : 'bg-white border-gray-300 text-transparent'
                                }`}
                              >
                                ✓
                              </span>
                              <span
                                className="flex-1 text-sm font-medium text-gray-800"
                                style={{
                                  fontFamily: "'Zen Maru Gothic', sans-serif",
                                }}
                              >
                                {t}
                              </span>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-6 flex flex-col gap-2">
                    <button
                      onClick={handleSave}
                      disabled={status === 'saving'}
                      className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white rounded-full py-3 text-sm font-bold transition"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {status === 'saving' ? '保存中...' : '範囲を保存'}
                    </button>
                    <button
                      onClick={handleClear}
                      disabled={status === 'saving'}
                      className="w-full bg-white text-gray-600 border border-gray-200 hover:border-gray-400 rounded-full py-3 text-sm font-medium transition"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      範囲をクリア（全範囲に戻す）
                    </button>
                  </div>

                  {status === 'saved' && (
                    <p className="mt-4 text-center text-sm text-amber-700">
                      ✓ 保存しました
                    </p>
                  )}
                  {status === 'cleared' && (
                    <p className="mt-4 text-center text-sm text-gray-600">
                      ✓ クリアしました
                    </p>
                  )}
                  {status === 'error' && errorMessage && (
                    <p className="mt-4 text-center text-sm text-red-600">
                      {errorMessage}
                    </p>
                  )}
                </>
              )}
            </>
          )}
      </main>
    </div>
  );
}
