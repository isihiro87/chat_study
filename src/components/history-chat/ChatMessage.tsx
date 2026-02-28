import { motion } from 'framer-motion';
import type { ChatCharacter } from '../../data/history-chat/types';
import { SpeakButton } from './SpeakButton';

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

  // 表情が指定されていればexpressionsマップから取得、なければデフォルトemoji
  const avatarEmoji =
    expression && character.expressions?.[expression]
      ? character.expressions[expression]
      : character.emoji;

  const hasSpeakable = speakable && speakable.length > 0 && onSpeak;

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

      {/* 吹き出し + 音声ボタン */}
      <div className="flex max-w-[72%] flex-col gap-1.5">
        <div
          className={`relative rounded-2xl px-4 py-2.5 ${
            isLeft
              ? 'rounded-tl-sm bg-white shadow-sm'
              : 'rounded-tr-sm bg-green-200'
          }`}
        >
          <p
            className="text-sm leading-relaxed text-gray-800"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>

        {hasSpeakable && (
          <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'pl-1' : 'pr-1'}`}>
            {speakable.map((s) => (
              <SpeakButton
                key={s}
                text={s}
                isSpeaking={!!isSpeaking && speakingText === s}
                onSpeak={onSpeak}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
