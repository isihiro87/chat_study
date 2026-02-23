import { useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistoryChat } from '../../hooks/useHistoryChat';
import { useTooltip } from '../../hooks/useTooltip';
import { estimateReadingTime } from '../../utils/estimateReadingTime';
import { ChatHeader } from './ChatHeader';
import { DateSeparator } from './DateSeparator';
import { NarratorBlock } from './NarratorBlock';
import { ChatMessage } from './ChatMessage';
import { ChatQuiz } from './ChatQuiz';
import { SummaryCard } from './SummaryCard';
import { SummaryPointBlock } from './SummaryPointBlock';
import type { HistoryChat, EndContent, MessageContent } from '../../data/history-chat/types';

interface ChatContainerProps {
  chat: HistoryChat;
  embedded?: boolean; // TabBar内に埋め込む場合はtrue
  onNavigateToFlashcard?: () => void;
  onNavigateToQuiz?: () => void;
  onComplete?: () => void;
  onProgressChange?: (current: number, total: number) => void;
}

export function ChatContainer({ chat, embedded = false, onNavigateToFlashcard, onNavigateToQuiz, onComplete, onProgressChange }: ChatContainerProps) {
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
  const summaryRef = useRef<HTMLDivElement>(null);

  // ツールチップ機能（data-tooltip属性をハンドリング）
  useTooltip(scrollRef);

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

  // 推定読了時間を算出（メモ化）
  const estimatedMinutes = useMemo(() => estimateReadingTime(chat.content), [chat.content]);

  // 進捗変化を親に通知
  useEffect(() => {
    onProgressChange?.(shownIndex, totalContent);
  }, [shownIndex, totalContent, onProgressChange]);

  // チャット完了時のコールバック（一度だけ呼ぶ）
  const completeCalled = useRef(false);
  useEffect(() => {
    if (isComplete && !completeCalled.current) {
      completeCalled.current = true;
      onComplete?.();
    }
  }, [isComplete, onComplete]);

  // 新しい要素が表示されたら自動スクロール
  // 結果画面（end）表示時はカード上端が見えるようにスクロール
  useEffect(() => {
    if (isComplete && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [shownIndex, isComplete]);

  // タップハンドラ
  const handleTap = () => {
    if (!isWaitingForQuiz && !isComplete) {
      next();
    }
  };

  // クイズ回答直後の状態（最後の表示コンテンツがクイズで回答済み）
  const isPostQuiz = useMemo(() => {
    if (isWaitingForQuiz || isComplete || shownIndex === 0) return false;
    const lastIndex = shownIndex - 1;
    return chat.content[lastIndex].type === 'quiz' && quizAnswers[lastIndex] !== undefined;
  }, [isWaitingForQuiz, isComplete, shownIndex, chat.content, quizAnswers]);

  // プロンプトメッセージ
  // クイズ待ち状態: 選択肢をタップ、初回またはクイズ回答後: タップして次へ
  const promptMessage = isWaitingForQuiz
    ? '❓ 選択肢をタップ！'
    : isComplete
      ? ''
      : (!hasTapped || isPostQuiz)
        ? '▼ タップして次へ'
        : '';

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
            estimatedMinutes={estimatedMinutes}
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
                    const messageContent = content as MessageContent;
                    return (
                      <ChatMessage
                        key={key}
                        side={content.side}
                        character={character}
                        text={content.text}
                        expression={messageContent.expression}
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

                  case 'summary-point':
                    return <SummaryPointBlock key={key} text={content.text} />;

                  case 'end':
                    return (
                      <div key={key} ref={summaryRef}>
                      <SummaryCard
                        points={(content as EndContent).points}
                        score={score}
                        totalQuizzes={totalQuizzes}
                        onReplay={reset}
                        onNavigateToFlashcard={onNavigateToFlashcard}
                        onNavigateToQuiz={onNavigateToQuiz}
                        chatTitle={chat.title}
                        chatSubtitle={chat.subtitle}
                      />
                      </div>
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
            onClick={handleTap}
            className={`fixed left-1/2 w-full max-w-md -translate-x-1/2 bg-gradient-to-t from-black/50 to-transparent px-4 pt-8 text-center ${
              embedded ? 'bottom-16 pb-4' : 'bottom-0 pb-6'
            }`}
            style={{ cursor: isWaitingForQuiz ? 'default' : 'pointer' }}
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
