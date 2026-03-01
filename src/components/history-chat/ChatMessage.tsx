import { useRef, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { ChatCharacter } from '../../data/history-chat/types';
import { injectSpeakerIcons } from '../../utils/injectSpeakerIcons';

interface ChatMessageProps {
  side: 'left' | 'right';
  character: ChatCharacter;
  text: string;
  expression?: string;
  speakable?: string[];
  isSpeaking?: boolean;
  speakingText?: string | null;
  onSpeak?: (text: string) => void;
}

export function ChatMessage({
  side,
  character,
  text,
  expression,
  speakable,
  isSpeaking,
  speakingText,
  onSpeak,
}: ChatMessageProps) {
  const isLeft = side === 'left';
  const bubbleRef = useRef<HTMLDivElement>(null);

  // 表情が指定されていればexpressionsマップから取得、なければデフォルトemoji
  const avatarEmoji =
    expression && character.expressions?.[expression]
      ? character.expressions[expression]
      : character.emoji;

  const hasSpeakable =
    speakable !== undefined && speakable.length > 0 && onSpeak !== undefined;

  // speakable英文にスピーカーアイコンを注入したHTMLを生成
  const processedHtml = useMemo(() => {
    if (!speakable || speakable.length === 0) return text;
    return injectSpeakerIcons(text, speakable);
  }, [text, speakable]);

  // speakable要素のクリックハンドラ（イベント委譲）
  const handleBubbleClick = useCallback(
    (e: MouseEvent) => {
      if (!onSpeak) return;
      const target = e.target as HTMLElement;
      const speakableEl =
        target.closest<HTMLElement>('[data-speak-text]');
      if (speakableEl) {
        e.stopPropagation();
        const speakText = speakableEl.dataset.speakText;
        if (speakText) onSpeak(speakText);
      }
    },
    [onSpeak],
  );

  // イベントリスナーの設定
  useEffect(() => {
    const el = bubbleRef.current;
    if (!el || !hasSpeakable) return;
    el.addEventListener('click', handleBubbleClick);
    return () => el.removeEventListener('click', handleBubbleClick);
  }, [handleBubbleClick, hasSpeakable]);

  // 再生中テキストに応じたCSSクラスの更新
  useEffect(() => {
    const el = bubbleRef.current;
    if (!el || !hasSpeakable) return;
    const spans = el.querySelectorAll<HTMLElement>('[data-speak-text]');
    spans.forEach((span) => {
      const isCurrentlySpeaking =
        !!isSpeaking && span.dataset.speakText === speakingText;
      span.classList.toggle('speaking', isCurrentlySpeaking);
    });
  }, [isSpeaking, speakingText, hasSpeakable]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`flex gap-2 px-3 py-2 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* アバター */}
      <div className="flex flex-col items-center gap-1">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl"
          style={{
            background: `linear-gradient(135deg, ${character.colorFrom}, ${character.colorTo})`,
          }}
        >
          {avatarEmoji}
        </div>
        <span
          className="max-w-[80px] truncate text-[10px] text-gray-500"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {character.name}
        </span>
      </div>

      {/* 吹き出し */}
      <div className="flex max-w-[72%] flex-col gap-1.5">
        <div
          ref={bubbleRef}
          className={`relative rounded-2xl px-4 py-2.5 ${
            isLeft
              ? 'rounded-tl-sm bg-white shadow-sm'
              : 'rounded-tr-sm bg-green-200'
          }`}
        >
          <p
            className="text-sm leading-relaxed text-gray-800"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </div>
      </div>
    </motion.div>
  );
}
