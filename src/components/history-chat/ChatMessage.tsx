import { motion } from 'framer-motion';
import type { ChatCharacter } from '../../data/history-chat/types';

interface ChatMessageProps {
  side: 'left' | 'right';
  character: ChatCharacter;
  text: string;
}

export function ChatMessage({ side, character, text }: ChatMessageProps) {
  const isLeft = side === 'left';

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
          {character.emoji}
        </div>
        <span
          className="max-w-[80px] truncate text-[10px] text-gray-500"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {character.name}
        </span>
      </div>

      {/* 吹き出し */}
      <div
        className={`relative max-w-[72%] rounded-2xl px-4 py-2.5 ${
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
    </motion.div>
  );
}
