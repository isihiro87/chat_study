// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { motion } from 'framer-motion';
import { renderMathInHtml } from '../../utils/math-formula';

interface NarratorBlockProps {
  text: string;
}

export function NarratorBlock({ text }: NarratorBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-3 my-3"
    >
      <div
        className="rounded-lg border-l-4 bg-amber-50 px-4 py-3"
        style={{ borderLeftColor: '#D97706' }}
      >
        <p
          className="mb-1 text-xs font-bold text-amber-600"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          ナレーション
        </p>
        <p
          className="text-sm leading-relaxed text-gray-700"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          dangerouslySetInnerHTML={{ __html: renderMathInHtml(text) }}
        />
      </div>
    </motion.div>
  );
}
