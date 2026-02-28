import { Volume2 } from 'lucide-react';

interface SpeakButtonProps {
  text: string;
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
}

export function SpeakButton({ text, isSpeaking, onSpeak }: SpeakButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSpeak(text);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
        isSpeaking
          ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
          : 'border-gray-200 bg-white text-gray-600 active:bg-gray-50'
      }`}
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <Volume2
        size={14}
        className={isSpeaking ? 'animate-pulse text-indigo-600' : 'text-gray-400'}
      />
      <span className="max-w-[200px] truncate">{text}</span>
    </button>
  );
}
