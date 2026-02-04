import { useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistoryChat } from '../../hooks/useHistoryChat';
import { ChatHeader } from './ChatHeader';
import { DateSeparator } from './DateSeparator';
import { NarratorBlock } from './NarratorBlock';
import { ChatMessage } from './ChatMessage';
import { ChatQuiz } from './ChatQuiz';
import { SummaryCard } from './SummaryCard';
import type { HistoryChat, EndContent } from '../../data/history-chat/types';

interface ChatContainerProps {
  chat: HistoryChat;
  embedded?: boolean; // TabBar内に埋め込む場合はtrue
  onNavigateToFlashcard?: () => void;
  onNavigateToQuiz?: () => void;
}

export function ChatContainer({ chat, embedded = false, onNavigateToFlashcard, onNavigateToQuiz }: ChatContainerProps) {
  const {
    shownIndex,
    visibleContent,
    totalContent,
    isComplete,
    hasTapped,
    isWaitingForQuiz,
    quizAnswers,
    score,
    totalQuizzes,
    next,
    selectAnswer,
    reset,
  } = useHistoryChat(chat);

  const scrollRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // キャラクターマップを作成
  const characterMap = useMemo(() => {
    const map: Record<string, (typeof chat.characters)[0]> = {};
    chat.characters.forEach((char) => {
      map[char.id] = char;
    });
    return map;
  }, [chat.characters]);

  // 進捗率を計算
  const progress = Math.round((shownIndex / totalContent) * 100);

  // 新しい要素が表示されたら自動スクロール
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [shownIndex]);

  // タップハンドラ
  const handleTap = () => {
    if (!isWaitingForQuiz && !isComplete) {
      next();
    }
  };

  // プロンプトメッセージ
  // クイズ待ち状態のメッセージは常に表示、タップヒントは一度タップしたら非表示
  const promptMessage = isWaitingForQuiz
    ? '❓ 選択肢をタップ！'
    : isComplete || hasTapped
      ? ''
      : '▼ タップして次へ';

  return (
    <div
      className={embedded ? 'h-full' : 'min-h-screen'}
      style={{ backgroundColor: '#F0EDE6' }}
    >
      <div
        className={`mx-auto flex max-w-md flex-col ${embedded ? 'h-full' : 'h-screen'}`}
      >
        {/* ヘッダー（埋め込みモードでは非表示） */}
        {!embedded && (
          <ChatHeader
            icon={chat.icon}
            title={chat.title}
            subtitle={chat.subtitle}
            progress={progress}
          />
        )}

        {/* チャットエリア */}
        <div
          ref={scrollRef}
          className={`flex-1 overflow-y-auto ${embedded ? 'pb-24' : 'pb-20'}`}
          onClick={handleTap}
          style={{ cursor: isWaitingForQuiz || isComplete ? 'default' : 'pointer' }}
        >
          <div className="px-0 py-5">
            <AnimatePresence>
              {visibleContent.map((content, index) => {
                const key = `content-${index}`;

                switch (content.type) {
                  case 'date':
                    return <DateSeparator key={key} text={content.text} />;

                  case 'narrator':
                    return <NarratorBlock key={key} text={content.text} />;

                  case 'message': {
                    const character = characterMap[content.characterId];
                    if (!character) return null;
                    return (
                      <ChatMessage
                        key={key}
                        side={content.side}
                        character={character}
                        text={content.text}
                      />
                    );
                  }

                  case 'quiz':
                    return (
                      <ChatQuiz
                        key={key}
                        quiz={content}
                        selectedAnswer={quizAnswers[index] ?? null}
                        isAnswered={quizAnswers[index] !== undefined}
                        onSelectAnswer={selectAnswer}
                      />
                    );

                  case 'end':
                    return (
                      <SummaryCard
                        key={key}
                        points={(content as EndContent).points}
                        score={score}
                        totalQuizzes={totalQuizzes}
                        onReplay={reset}
                        onNavigateToFlashcard={onNavigateToFlashcard}
                        onNavigateToQuiz={onNavigateToQuiz}
                      />
                    );

                  default:
                    return null;
                }
              })}
            </AnimatePresence>

            {/* スクロール用アンカー */}
            <div ref={endRef} />
          </div>
        </div>

        {/* タップ促進プロンプト */}
        {promptMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`fixed left-1/2 w-full max-w-md -translate-x-1/2 bg-gradient-to-t from-black/50 to-transparent px-4 pt-8 text-center ${
              embedded ? 'bottom-16 pb-4' : 'bottom-0 pb-6'
            }`}
          >
            <span
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-lg"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {promptMessage}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
