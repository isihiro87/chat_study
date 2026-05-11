import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import {
  eraMetas,
  topicMetas,
} from '../data/generated/topic-registry.generated';
import { saveTestScope, clearTestScope } from '../utils/testScope';

type Subject = 'english' | 'history';
type GradeNum = 1 | 2 | 3;

const GRADE_LABEL_TO_NUMBER: Record<string, GradeNum> = {
  中1: 1,
  中2: 2,
  中3: 3,
};

const SUBJECT_LABEL: Record<Subject, string> = {
  english: '英語',
  history: '歴史',
};

interface UserContext {
  subject: Subject;
  grade: GradeNum;
  initialTopics: string[];
}

interface EraGroup {
  eraId: string;
  eraName: string;
  eraIcon: string;
  eraPeriod: string;
  topics: { id: string; name: string; subtitle: string; icon: string }[];
}

type Status =
  | 'loading'
  | 'ready'
  | 'saving'
  | 'saved'
  | 'cleared'
  | 'error'
  | 'profile-missing';

/**
 * 公式LINE のリッチメニュー「テスト範囲設定」から開かれる LIFF ページ。
 *
 * users/{uid}.subject / .grade に登録されている教科×学年に該当する topic 候補を
 * `topic-registry.generated.ts` の topicMetas / eraMetas から取得し、era 単位で
 * 折りたたみ可能なグループ表示する。
 *
 * testScope.topics には topicMetas[i].name（日本語のトピック名）を保存。
 * webhook 側は Question.topic とこれを一致比較する。新規登録する Question の
 * topic フィールドも topicMetas[i].name と完全一致させる必要がある。
 */
export function LiffTestRangePage() {
  const { user, loading } = useAuth();
  // LIFF webview 内なら ID トークン経由で Firebase Auth に自動ログインする
  // （/welcome → LINE OAuth のリダイレクトチェーンを回避）
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_TEST_RANGE as string | undefined
  );

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userCtx, setUserCtx] = useState<UserContext | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedEras, setExpandedEras] = useState<Set<string>>(new Set());

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
        const subject = data.subject as Subject | undefined;
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

  const eraGroups: EraGroup[] = useMemo(() => {
    if (!userCtx) return [];
    const eras = eraMetas
      .filter(
        (e) =>
          e.subjectId === userCtx.subject && (e.grade ?? null) === userCtx.grade
      )
      .sort((a, b) => a.order - b.order);
    return eras.map((era) => ({
      eraId: era.id,
      eraName: era.name,
      eraIcon: era.icon,
      eraPeriod: era.period ?? '',
      topics: topicMetas
        .filter((t) => t.eraId === era.id)
        .sort((a, b) => a.order - b.order)
        .map((t) => ({
          id: t.name,
          name: t.name,
          subtitle: t.subtitle ?? '',
          icon: t.icon ?? '',
        })),
    }));
  }, [userCtx]);

  // 初回表示時に「選択中のトピックがある era」だけ自動展開
  useEffect(() => {
    if (eraGroups.length === 0) return;
    const expand = new Set<string>();
    for (const g of eraGroups) {
      if (g.topics.some((t) => selected.has(t.id))) {
        expand.add(g.eraId);
      }
    }
    if (expand.size === 0 && eraGroups.length > 0) {
      // 何も選んでない場合は最初の era だけ開いておく
      expand.add(eraGroups[0].eraId);
    }
    setExpandedEras(expand);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eraGroups]);

  const allTopicIds = useMemo(
    () => eraGroups.flatMap((g) => g.topics.map((t) => t.id)),
    [eraGroups]
  );

  const allChecked =
    allTopicIds.length > 0 && allTopicIds.every((id) => selected.has(id));

  const toggleOne = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (allChecked) {
      setSelected(new Set());
    } else {
      setSelected(new Set(allTopicIds));
    }
  };

  const toggleEra = (eraId: string) => {
    setExpandedEras((prev) => {
      const next = new Set(prev);
      if (next.has(eraId)) next.delete(eraId);
      else next.add(eraId);
      return next;
    });
  };

  const toggleEraSelection = (eraId: string) => {
    const era = eraGroups.find((g) => g.eraId === eraId);
    if (!era) return;
    const eraTopicIds = era.topics.map((t) => t.id);
    const allInEraSelected = eraTopicIds.every((id) => selected.has(id));
    setSelected((prev) => {
      const next = new Set(prev);
      if (allInEraSelected) {
        for (const id of eraTopicIds) next.delete(id);
      } else {
        for (const id of eraTopicIds) next.add(id);
      }
      return next;
    });
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

  // LIFF auth の試行が終わってない / Firebase Auth が確定してない間は loading
  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/welcome?next=/liff/scope" replace />;
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
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {status === 'profile-missing' && (
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              先に教科と学年を設定してください。
              <br />
              リッチメニュー「設定・サポート」から登録できます。
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
              {/* 使い方の説明（中学生向け） */}
              <section className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <h2
                  className="text-sm font-bold text-amber-800 mb-2"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  💡 使い方
                </h2>
                <ol className="text-xs text-gray-700 space-y-1.5 leading-relaxed list-decimal list-inside">
                  <li>
                    テスト範囲のうち、<strong className="text-amber-700">もう習ったところ</strong>だけにチェックを入れよう
                  </li>
                  <li>
                    チェックした単元から「追加で解く」「苦手を復習」の問題が出るよ
                  </li>
                  <li>
                    まだ習っていないところは外しておくと、テスト勉強がはかどる
                  </li>
                </ol>
              </section>

              <div className="mt-4 bg-white rounded-2xl shadow-sm p-4">
                <div className="text-xs text-gray-500 mb-1">対象</div>
                <div className="text-sm font-medium text-gray-800">
                  {SUBJECT_LABEL[userCtx.subject]}・中{userCtx.grade}
                </div>
              </div>

              {eraGroups.length === 0 ? (
                <p className="mt-8 text-center text-sm text-gray-400">
                  この教科×学年の単元はまだ準備中です。
                </p>
              ) : (
                <>
                  <div className="mt-4 flex items-center justify-between px-1">
                    <span className="text-xs text-gray-500">
                      選択中: {selected.size} / {allTopicIds.length}
                    </span>
                    <button
                      onClick={toggleAll}
                      className="text-xs text-amber-600 font-medium hover:text-amber-700"
                    >
                      {allChecked ? '全て解除' : '全て選択'}
                    </button>
                  </div>

                  <div className="mt-2 space-y-3">
                    {eraGroups.map((group) => {
                      const isExpanded = expandedEras.has(group.eraId);
                      const eraSelectedCount = group.topics.filter((t) =>
                        selected.has(t.id)
                      ).length;
                      const allInEraSelected =
                        group.topics.length > 0 &&
                        eraSelectedCount === group.topics.length;
                      return (
                        <section
                          key={group.eraId}
                          className="bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                          <div className="flex items-stretch">
                            <button
                              onClick={() => toggleEra(group.eraId)}
                              className="flex-1 px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition"
                            >
                              <span className="text-xl flex-shrink-0">
                                {group.eraIcon}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div
                                  className="text-sm font-bold text-gray-800"
                                  style={{
                                    fontFamily: "'Zen Maru Gothic', sans-serif",
                                  }}
                                >
                                  {group.eraName}
                                </div>
                                {group.eraPeriod && (
                                  <div className="text-xs text-gray-400 mt-0.5 truncate">
                                    {group.eraPeriod}
                                  </div>
                                )}
                              </div>
                              <span className="text-xs text-gray-400 flex-shrink-0">
                                {eraSelectedCount}/{group.topics.length}
                              </span>
                              <span className="text-gray-400 flex-shrink-0">
                                {isExpanded ? '▾' : '▸'}
                              </span>
                            </button>
                          </div>
                          {isExpanded && (
                            <>
                              <div className="px-4 pb-2 flex justify-end">
                                <button
                                  onClick={() =>
                                    toggleEraSelection(group.eraId)
                                  }
                                  className="text-xs text-amber-600 font-medium hover:text-amber-700"
                                >
                                  {allInEraSelected
                                    ? 'この時代を解除'
                                    : 'この時代を全選択'}
                                </button>
                              </div>
                              <ul className="px-3 pb-3 space-y-1.5">
                                {group.topics.map((t) => {
                                  const checked = selected.has(t.id);
                                  return (
                                    <li key={t.id}>
                                      <button
                                        onClick={() => toggleOne(t.id)}
                                        className={`w-full text-left rounded-xl px-3 py-2 border transition active:scale-[0.99] ${
                                          checked
                                            ? 'bg-amber-50 border-amber-400'
                                            : 'bg-white border-gray-200 hover:border-amber-300'
                                        }`}
                                      >
                                        <div className="flex items-center gap-2.5">
                                          <span
                                            className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center text-xs font-bold ${
                                              checked
                                                ? 'bg-amber-500 border-amber-500 text-white'
                                                : 'bg-white border-gray-300 text-transparent'
                                            }`}
                                          >
                                            ✓
                                          </span>
                                          {t.icon && (
                                            <span className="text-lg flex-shrink-0">
                                              {t.icon}
                                            </span>
                                          )}
                                          <div className="flex-1 min-w-0">
                                            <div
                                              className="text-sm font-medium text-gray-800 truncate"
                                              style={{
                                                fontFamily:
                                                  "'Zen Maru Gothic', sans-serif",
                                              }}
                                            >
                                              {t.name}
                                            </div>
                                            {t.subtitle && (
                                              <div className="text-xs text-gray-500 truncate mt-0.5">
                                                {t.subtitle}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </button>
                                    </li>
                                  );
                                })}
                                {group.topics.length === 0 && (
                                  <li className="text-xs text-gray-400 px-3 py-2">
                                    準備中...
                                  </li>
                                )}
                              </ul>
                            </>
                          )}
                        </section>
                      );
                    })}
                  </div>

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
