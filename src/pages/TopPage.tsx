import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scroll, Calculator, Languages, Globe, FlaskConical, Lock, ChevronRight, Flame, BookOpen, RotateCcw, ArrowRight, MousePointerClick, MessageCircle, CheckCircle, Search, X, Star, Settings, Clock } from 'lucide-react';
import { subjects } from '../data/subjects';
import { getTopic, getEra, allTopics } from '../data/subjects/registry';
import { useStudyProgress } from '../hooks/useStudyProgress';
import { trackEvent } from '../utils/gtag';
import { SEOHead } from '../components/common/SEOHead';
import { SurveyPopup, useSurveyPopup } from '../components/common/SurveyPopup';

const iconMap: Record<string, React.ElementType> = {
  scroll: Scroll,
  calculator: Calculator,
  languages: Languages,
  globe: Globe,
  'flask-conical': FlaskConical,
};

function TopicLinkCard({
  topic,
  label,
  sublabel,
  icon: Icon,
  iconColor,
  iconBg,
}: {
  topic: { id: string; eraId: string; name: string; icon: string };
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
}) {
  const era = getEra(topic.eraId);
  const subjectId = era?.subjectId ?? 'history';

  return (
    <Link
      to={`/subjects/${subjectId}/eras/${topic.eraId}/topics/${topic.id}`}
      className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm transition-transform active:scale-98"
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="truncate text-sm font-semibold text-gray-800">
          {topic.icon} {topic.name}
        </p>
        {sublabel && <p className="text-xs text-gray-400">{sublabel}</p>}
      </div>
      <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400" />
    </Link>
  );
}

// 教科名のマップ
const subjectNameMap: Record<string, string> = {
  history: '歴史',
  english: '英語',
  math: '数学',
  science: '理科',
  geography: '地理',
};

export function TopPage() {
  const {
    streak,
    totalStudiedTopics,
    totalTopics,
    lastStudiedTopicId,
    getNextTopicToStudy,
    getReviewRecommendations,
    postponeReview,
    getCompletionStatus,
    bookmarkedTopicIds,
  } = useStudyProgress();

  const hasProgress = totalStudiedTopics > 0;
  const lastTopic = lastStudiedTopicId ? getTopic(lastStudiedTopicId) : undefined;
  const nextTopic = getNextTopicToStudy();
  const reviews = getReviewRecommendations(10);

  // 教科別進捗率
  const subjectProgress = useMemo(() => {
    return subjects
      .filter((s) => s.isAvailable)
      .map((subject) => {
        const subjectTopics = allTopics.filter((t) => {
          const era = getEra(t.eraId);
          return era?.subjectId === subject.id;
        });
        const completed = subjectTopics.filter((t) => getCompletionStatus(t.id) === 'completed').length;
        const inProgress = subjectTopics.filter((t) => getCompletionStatus(t.id) === 'in-progress').length;
        return {
          id: subject.id,
          name: subject.name,
          total: subjectTopics.length,
          completed,
          inProgress,
          rate: subjectTopics.length > 0 ? completed / subjectTopics.length : 0,
        };
      })
      .filter((s) => s.completed > 0 || s.inProgress > 0); // 進捗があるものだけ
  }, [getCompletionStatus]);
  const [postponeMenuTopicId, setPostponeMenuTopicId] = useState<string | null>(null);
  const { showSurvey, dismissSurvey } = useSurveyPopup(totalStudiedTopics);

  // 検索機能
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const searchResults = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return [];
    return allTopics
      .filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.subtitle.toLowerCase().includes(q),
      )
      .slice(0, 10);
  }, [debouncedQuery]);

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <SEOHead
        path="/"
        description="中学生向け無料学習サイト。歴史・英語・数学をチャット形式の解説・フラッシュカード・クイズで楽しく学べます。定期テスト対策にも。"
        breadcrumbs={[{ name: 'ホーム', path: '/' }]}
      />
      <header className="relative bg-white px-4 py-6 shadow-sm">
        <h1 className="text-center text-2xl font-bold text-primary">
          チャットでスタディ
        </h1>
        <p className="mt-1 text-center text-sm text-gray-500">
          中学生のためのスマホ学習
        </p>
        <Link
          to="/settings"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
          aria-label="設定"
        >
          <Settings className="h-5 w-5 text-gray-400" />
        </Link>
      </header>

      {/* PC向け注意喚起 - スマホでは非表示 */}
      <div className="mx-auto hidden max-w-md px-4 pt-4 md:block">
        <div className="flex items-center gap-2 rounded-lg border border-amber-100 bg-amber-50 p-3 text-sm text-amber-700">
          <span>📱</span>
          <span>このアプリはスマホで見やすいように作られています（パソコンでもお使いいただけます）</span>
        </div>
      </div>

      {/* 検索バー */}
      <div className="mx-auto max-w-md px-4 pt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="トピックを検索..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-9 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-amber-400"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                searchInputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 active:text-gray-600"
              aria-label="検索をクリア"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {/* 検索結果 */}
        {debouncedQuery.trim() && (
          <div className="mt-2 space-y-1">
            {searchResults.length === 0 ? (
              <p className="py-3 text-center text-sm text-gray-400">
                見つかりませんでした
              </p>
            ) : (
              searchResults.map((topic) => {
                const era = getEra(topic.eraId);
                const subjectId = era?.subjectId ?? 'history';
                const subjectName = subjectNameMap[subjectId] ?? subjectId;
                return (
                  <Link
                    key={topic.id}
                    to={`/subjects/${subjectId}/eras/${topic.eraId}/topics/${topic.id}`}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-transform active:scale-98"
                  >
                    <span className="text-lg">{topic.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {topic.name}
                      </p>
                      <p className="truncate text-xs text-gray-400">
                        {subjectName} ・ {topic.subtitle}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  </Link>
                );
              })
            )}
          </div>
        )}
      </div>

      <main className="mx-auto max-w-md px-4 py-6">
        {/* 使い方ガイド - 初回ユーザー向け */}
        {!hasProgress && (
          <div className="mb-6 rounded-xl bg-amber-50 p-4 shadow-sm">
            <h2 className="mb-3 text-center text-sm font-semibold text-amber-700">
              はじめての方へ
            </h2>
            <div className="flex justify-between gap-2">
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <MousePointerClick className="h-6 w-6 text-amber-500" aria-hidden="true" />
                </div>
                <p className="text-center text-xs font-bold text-gray-700">1. えらぶ</p>
                <p className="text-center text-xs text-gray-500">科目と単元を<br />タップ</p>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <MessageCircle className="h-6 w-6 text-amber-500" aria-hidden="true" />
                </div>
                <p className="text-center text-xs font-bold text-gray-700">2. よむ</p>
                <p className="text-center text-xs text-gray-500">チャットで<br />かんたん学習</p>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <CheckCircle className="h-6 w-6 text-amber-500" aria-hidden="true" />
                </div>
                <p className="text-center text-xs font-bold text-gray-700">3. たしかめる</p>
                <p className="text-center text-xs text-gray-500">クイズで<br />チェック!</p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-amber-600">
              まずは下の科目をタップしてね
            </p>
          </div>
        )}

        <p className="mb-4 text-xs text-gray-400">
          ※ コンテンツは準備中のため、一部に不備がある場合があります
        </p>

        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          科目をえらぶ
        </h2>

        <div className="space-y-3">
          {subjects.map((subject) => {
            const Icon = iconMap[subject.icon] || Scroll;
            const isAvailable = subject.isAvailable;

            if (isAvailable) {
              return (
                <Link
                  key={subject.id}
                  to={`/subjects/${subject.id}`}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-transform active:scale-98"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-500">{subject.description}</p>
                  </div>
                </Link>
              );
            }

            return (
              <div
                key={subject.id}
                className="flex items-center gap-4 rounded-xl bg-gray-100 p-4 opacity-60"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
                  <Lock className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-500">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-400">{subject.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* お気に入りセクション */}
        {bookmarkedTopicIds.length > 0 && (
          <div className="mt-6 space-y-2">
            <h3 className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
              <Star className="h-4 w-4 text-amber-500" />
              お気に入り
            </h3>
            {bookmarkedTopicIds.map((id) => {
              const t = getTopic(id);
              if (!t) return null;
              return (
                <TopicLinkCard
                  key={t.id}
                  topic={t}
                  label="お気に入り"
                  icon={Star}
                  iconColor="text-amber-600"
                  iconBg="bg-amber-100"
                />
              );
            })}
          </div>
        )}

        {/* 進捗セクション - 学習済みトピックがある場合のみ表示 */}
        {hasProgress && (
          <div className="mt-8 space-y-5">
            {/* がんばりセクション */}
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-gray-600">がんばり</h3>
              <div className="flex gap-3">
                <div className="flex flex-1 items-center gap-2 rounded-lg bg-amber-50 p-3">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-lg font-bold text-orange-600">{streak}日</p>
                    <p className="text-xs text-orange-400">れんぞく学習</p>
                  </div>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-lg bg-amber-50 p-3">
                  <BookOpen className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="text-lg font-bold text-amber-600">
                      {totalStudiedTopics}<span className="text-sm font-normal text-amber-400">/{totalTopics}</span>
                    </p>
                    <p className="text-xs text-amber-400">学習ずみ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 教科別の進捗 */}
            {subjectProgress.length > 0 && (
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold text-gray-600">教科べつの進み具合</h3>
                <div className="space-y-3">
                  {subjectProgress.map((sp) => (
                    <div key={sp.id}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-700">{sp.name}</span>
                        <span className="text-xs text-gray-400">
                          {sp.completed}/{sp.total}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100">
                        <div
                          className="h-2 rounded-full bg-amber-500 transition-all"
                          style={{ width: `${Math.round(sp.rate * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 最後にやった内容 & 次の内容 */}
            <div className="space-y-2">
              {lastTopic && (
                <TopicLinkCard
                  topic={lastTopic}
                  label="最後にやった内容"
                  icon={ArrowRight}
                  iconColor="text-amber-600"
                  iconBg="bg-amber-100"
                />
              )}
              {nextTopic && nextTopic.id !== lastStudiedTopicId && (
                <TopicLinkCard
                  topic={nextTopic}
                  label="次の内容"
                  icon={BookOpen}
                  iconColor="text-emerald-600"
                  iconBg="bg-emerald-100"
                />
              )}
            </div>

            {/* 今日の復習 */}
            {reviews.length > 0 && (
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                  今日の復習
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">
                    {reviews.length}件
                  </span>
                </h3>
                {reviews.map((r) => {
                  const era = getEra(r.topic.eraId);
                  const sid = era?.subjectId ?? 'history';
                  return (
                    <div key={r.topic.id} className="relative rounded-xl bg-white p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                          <RotateCcw className="h-5 w-5 text-amber-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500">クイズをもういちど</p>
                          <p className="truncate text-sm font-semibold text-gray-800">
                            {r.topic.icon} {r.topic.name}
                          </p>
                          <p className="text-xs text-gray-400">ベスト: {r.quizBestScore}/{r.quizTotalQuestions}問</p>
                        </div>
                        <div className="flex flex-shrink-0 items-center gap-1">
                          <button
                            onClick={() => setPostponeMenuTopicId(
                              postponeMenuTopicId === r.topic.id ? null : r.topic.id,
                            )}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100"
                            aria-label="復習を延期"
                          >
                            <Clock className="h-4 w-4" />
                          </button>
                          <Link
                            to={`/subjects/${sid}/eras/${r.topic.eraId}/topics/${r.topic.id}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      {/* 延期メニュー */}
                      {postponeMenuTopicId === r.topic.id && (
                        <div className="mt-2 flex flex-wrap gap-1.5 border-t border-gray-100 pt-2">
                          {[1, 2, 3, 5, 7].map((d) => (
                            <button
                              key={d}
                              onClick={() => {
                                postponeReview(r.topic.id, d);
                                setPostponeMenuTopicId(null);
                              }}
                              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 active:scale-95"
                            >
                              {d}日後
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        {/* 公式LINE */}
        <a
          href="https://lin.ee/UbVQuHd"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('line_click', 'top_footer')}
          className="mt-6 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3"
        >
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#06C755' }}>
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-700">公式LINE</p>
            <p className="text-xs text-gray-400">最新情報・お得な情報をお届け</p>
          </div>
          <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
        </a>

        <p className="mt-4 pb-4 text-center text-xs text-gray-300">
          &copy; チャットでスタディ
        </p>
      </main>
      {showSurvey && <SurveyPopup onDismiss={dismissSurvey} />}
    </div>
  );
}
