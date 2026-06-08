import { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { TrialPremiumBanner } from '../components/common/TrialPremiumBanner';
import {
  lineScopeIndex,
  type ScopeSubjectId,
} from '../data/generated/line-scope-index.generated';
import { saveTestScope, clearTestScope } from '../utils/testScope';
import { logFunnelEvent } from '../utils/funnelEvent';

type GradeNum = 1 | 2 | 3;

/**
 * userDoc.grade は "中2"（文字列）で保存される一方、scope index の grade キーは
 * 数値 (1|2|3)。両者を直接比較すると常に不一致になり、範囲設定ページに単元が
 * 1件も表示されない。ここで数値の GradeNum に正規化する。
 * 旧データの数値・"2" 等も許容する。
 */
function toGradeNum(raw: unknown): GradeNum | null {
  if (raw === 1 || raw === 2 || raw === 3) return raw;
  if (typeof raw === 'string') {
    const s = raw.trim().replace(/^中/, '');
    if (s === '1') return 1;
    if (s === '2') return 2;
    if (s === '3') return 3;
  }
  return null;
}

const SUBJECT_LABEL: Record<ScopeSubjectId, string> = {
  english: '英語',
  history: '歴史',
};

function isScopeSubject(v: unknown): v is ScopeSubjectId {
  return v === 'english' || v === 'history';
}

interface UserContext {
  subject: ScopeSubjectId;
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
 * 公式LINE のリッチメニュー「出題範囲設定」から開かれる *通常ブラウザ* ページ。
 *
 * 旧 LiffTestRangePage（LIFF SDK 経由）は LINE 内蔵ブラウザでの LIFF 初期化が
 * 不安定だったため廃止し、通常の Web ページ＋既存の LINE Login OAuth
 * （`/welcome?next=/scope` → `/auth/line/callback`）で認証する方式へ置き換えた。
 *
 * 単元候補は **data/content 由来の `line-scope-index.generated.ts`** から取得する
 * （公式LINE の source of truth）。testScope.topics には topic.name をそのまま
 * 保存し、webhook 側は Firestore `questions.topic` とこれを完全一致比較する。
 * ⚠️ eras / topic-registry（Web 版専用）は使わない。CLAUDE.md「era フォルダは
 * 公式LINEとは別物」を参照。
 */
export function TestRangePage() {
  const { user, loading, userDoc, userDocLoaded } = useAuth();

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userCtx, setUserCtx] = useState<UserContext | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedEras, setExpandedEras] = useState<Set<string>>(new Set());

  // AuthContext がロード済みの userDoc から派生（getDoc 重複を排除）
  useEffect(() => {
    if (loading) return;
    if (!user) return;
    if (!userDocLoaded) return;
    if (!userDoc) {
      setStatus('profile-missing');
      return;
    }
    const subject = isScopeSubject(userDoc.subject) ? userDoc.subject : null;
    const grade = toGradeNum(userDoc.grade);
    if (!subject || !grade) {
      setStatus('profile-missing');
      return;
    }
    setUserCtx({
      subject,
      grade,
      initialTopics: userDoc.testScopeTopics,
    });
    setSelected(new Set(userDoc.testScopeTopics));
    setStatus('ready');
    setErrorMessage(null);
  }, [user, loading, userDoc, userDocLoaded]);

  // 設定ページに到達（認証成功してページ表示）したら1回だけ計測。
  // 「開いたのに保存していない」を liff_scope_open − liff_scope_save で測れるように
  // する。イベント名は LIFF 廃止後もファネル連続性のため据え置く。
  const openLoggedRef = useRef(false);
  useEffect(() => {
    if (status === 'ready' && !openLoggedRef.current) {
      openLoggedRef.current = true;
      void logFunnelEvent('liff_scope_open');
    }
  }, [status]);

  const eraGroups: EraGroup[] = useMemo(() => {
    if (!userCtx) return [];
    const eras = lineScopeIndex[userCtx.subject]?.[userCtx.grade] ?? [];
    return eras.map((era) => ({
      eraId: era.eraId,
      eraName: era.eraName,
      eraIcon: era.eraIcon,
      eraPeriod: era.eraPeriod,
      topics: era.topics.map((t) => ({
        id: t.name,
        name: t.name,
        subtitle: t.subtitle,
        icon: t.icon,
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

  // 初回設定者（initialTopics 空）かつ preferredHour 設定済なら
  // onTestScopeFirstSet トリガが発火して数秒後に 1問目が push される。
  const isFirstTimeSetter =
    (userCtx?.initialTopics.length ?? 0) === 0 &&
    userDoc?.preferredHour != null;

  const handleSave = async () => {
    if (!user) return;
    setStatus('saving');
    setErrorMessage(null);
    try {
      await saveTestScope(user.uid, Array.from(selected));
      void logFunnelEvent('liff_scope_save', { count: selected.size });
      setStatus('saved');
    } catch (err) {
      console.error('[TestRangePage] save failed', err);
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
    } catch (err) {
      console.error('[TestRangePage] clear failed', err);
      setErrorMessage('クリアできませんでした。通信状況を確認してください。');
      setStatus('error');
    }
  };

  // Firebase Auth 確定待ち
  if (loading) {
    return (
      <LoadingScreen
        message="ログインを確認しています..."
        stuckThresholdMs={6000}
      />
    );
  }

  // 未認証: 既存の LINE Login OAuth 誘導ページへ。ログイン後 /scope に戻る。
  if (!user) {
    return <Navigate to="/welcome?next=/scope" replace />;
  }

  // userDoc がまだ届いていない（AuthContext 側で fetch 中）
  if (!userDocLoaded) {
    return (
      <LoadingScreen
        message="プロフィールを読み込んでいます..."
        stuckThresholdMs={6000}
      />
    );
  }

  // userDoc fetch 自体は完了したが、致命的エラー時は userCtx 不要のエラー UI を出す
  if (status === 'error' && !userCtx) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm text-red-600 mb-3">
            {errorMessage ?? '読み込みに失敗しました。'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-2 text-sm font-medium"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-32">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1
            className="text-lg font-bold text-gray-800 text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🎯 出題範囲を設定
          </h1>
        </div>
      </header>

      <TrialPremiumBanner />

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
                    <strong className="text-amber-700">出題してほしい単元</strong>にチェックを入れよう
                  </li>
                  <li>
                    チェックした単元から「追加で解く」「苦手を復習」の問題が出るよ
                  </li>
                  <li>
                    まだ習っていないところは外しておくと、勉強がはかどる
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
                </>
              )}
            </>
          )}
      </main>

      {(status === 'ready' ||
        status === 'saving' ||
        status === 'saved' ||
        status === 'cleared' ||
        status === 'error') &&
        userCtx &&
        eraGroups.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3">
              {status === 'error' && errorMessage && (
                <p className="mb-2 text-center text-xs text-red-600">
                  {errorMessage}
                </p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={handleClear}
                  disabled={status === 'saving'}
                  className="flex-1 bg-white text-gray-600 border border-gray-200 hover:border-gray-400 rounded-full py-3 text-sm font-medium transition"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  範囲をクリア
                </button>
                <button
                  onClick={handleSave}
                  disabled={status === 'saving'}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white rounded-full py-3 text-sm font-bold transition"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {status === 'saving' ? '保存中...' : '範囲を保存'}
                </button>
              </div>
            </div>
          </div>
        )}

      {/* 保存・クリア完了オーバーレイ */}
      {(status === 'saved' || status === 'cleared') && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-sm max-w-md w-full p-6">
            {status === 'saved' ? (
              <>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-600 text-3xl mb-3">
                    ✓
                  </div>
                  <h2
                    className="text-lg font-bold text-gray-800"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    範囲を保存しました
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    選択 {selected.size} 単元
                  </p>
                </div>

                {isFirstTimeSetter ? (
                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 mb-4">
                    <p
                      className="text-sm font-bold text-amber-800 mb-2"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      📨 まもなく 1 問目が届きます
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      数秒以内に、公式LINE のトークに最初の1問が送られてきます。
                      <strong>このページを閉じてトーク画面に戻り、少しお待ちください。</strong>
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-2">
                      ※ 届かない場合は、LINE アプリを完全に終了して開き直してみてください。
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 text-center">
                    この範囲から「追加で解く」「苦手を復習」が出題されます。
                  </p>
                )}
              </>
            ) : (
              <>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-600 text-3xl mb-3">
                    ✓
                  </div>
                  <h2
                    className="text-lg font-bold text-gray-800"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    範囲をクリアしました
                  </h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 text-center">
                  これで全範囲から出題されます。
                </p>
              </>
            )}

            <button
              type="button"
              onClick={() => setStatus('ready')}
              className="block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              続けて編集する
            </button>
            <p className="text-center text-xs text-gray-400 mt-3 leading-relaxed">
              設定はもう保存されています。LINE のトーク画面に戻って学習を続けてください。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
