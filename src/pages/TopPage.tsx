import { Link } from 'react-router-dom';
import { Scroll, Calculator, Languages, Lock, ChevronRight, Flame, BookOpen, RotateCcw, ArrowRight, MousePointerClick, MessageCircle, CheckCircle } from 'lucide-react';
import { subjects } from '../data/subjects';
import { getTopic, getEra } from '../data/subjects/registry';
import { useStudyProgress } from '../hooks/useStudyProgress';

const iconMap: Record<string, React.ElementType> = {
  scroll: Scroll,
  calculator: Calculator,
  languages: Languages,
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

export function TopPage() {
  const {
    streak,
    totalStudiedTopics,
    totalTopics,
    lastStudiedTopicId,
    getNextTopicToStudy,
    getReviewRecommendations,
  } = useStudyProgress();

  const hasProgress = totalStudiedTopics > 0;
  const lastTopic = lastStudiedTopicId ? getTopic(lastStudiedTopicId) : undefined;
  const nextTopic = getNextTopicToStudy();
  const reviews = getReviewRecommendations(3);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-6 shadow-sm">
        <h1 className="text-center text-2xl font-bold text-primary">
          チャットでスタディ
        </h1>
        <p className="mt-1 text-center text-sm text-gray-500">
          中学生のためのスマホ学習
        </p>
      </header>

      {/* PC向け注意喚起 - スマホでは非表示 */}
      <div className="mx-auto hidden max-w-md px-4 pt-4 md:block">
        <div className="flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-sm text-indigo-700">
          <span>📱</span>
          <span>このアプリはスマホで見やすいように作られています（パソコンでもお使いいただけます）</span>
        </div>
      </div>

      <main className="mx-auto max-w-md px-4 py-6">
        {/* 使い方ガイド - 初回ユーザー向け */}
        {!hasProgress && (
          <div className="mb-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-4 shadow-sm">
            <h2 className="mb-3 text-center text-sm font-semibold text-indigo-700">
              はじめての方へ
            </h2>
            <div className="flex justify-between gap-2">
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <MousePointerClick className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                </div>
                <p className="text-center text-xs font-bold text-gray-700">1. えらぶ</p>
                <p className="text-center text-xs text-gray-500">科目と単元を<br />タップ</p>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <MessageCircle className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                </div>
                <p className="text-center text-xs font-bold text-gray-700">2. よむ</p>
                <p className="text-center text-xs text-gray-500">チャットで<br />かんたん学習</p>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <CheckCircle className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                </div>
                <p className="text-center text-xs font-bold text-gray-700">3. たしかめる</p>
                <p className="text-center text-xs text-gray-500">クイズで<br />チェック!</p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-indigo-600">
              まずは下の科目をタップしてね
            </p>
          </div>
        )}

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

        {/* 進捗セクション - 学習済みトピックがある場合のみ表示 */}
        {hasProgress && (
          <div className="mt-8 space-y-5">
            {/* がんばりセクション */}
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-gray-600">がんばり</h3>
              <div className="flex gap-3">
                <div className="flex flex-1 items-center gap-2 rounded-lg bg-orange-50 p-3">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-lg font-bold text-orange-600">{streak}日</p>
                    <p className="text-xs text-orange-400">れんぞく学習</p>
                  </div>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-lg bg-indigo-50 p-3">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  <div>
                    <p className="text-lg font-bold text-indigo-600">
                      {totalStudiedTopics}<span className="text-sm font-normal text-indigo-400">/{totalTopics}</span>
                    </p>
                    <p className="text-xs text-indigo-400">学習ずみ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 最後にやった内容 & 次の内容 */}
            <div className="space-y-2">
              {lastTopic && (
                <TopicLinkCard
                  topic={lastTopic}
                  label="最後にやった内容"
                  icon={ArrowRight}
                  iconColor="text-indigo-600"
                  iconBg="bg-indigo-100"
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

            {/* 復習おすすめ */}
            {reviews.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-600">復習おすすめ</h3>
                {reviews.map((r) => (
                  <TopicLinkCard
                    key={r.topic.id}
                    topic={r.topic}
                    label="クイズをもういちど"
                    sublabel={`ベスト: ${r.quizBestScore}/${r.quizTotalQuestions}問`}
                    icon={RotateCcw}
                    iconColor="text-amber-600"
                    iconBg="bg-amber-100"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
