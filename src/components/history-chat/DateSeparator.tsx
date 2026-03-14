// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { memo } from 'react';
import { motion } from 'framer-motion';
import { renderMathInHtml } from '../../utils/math-formula';

interface DateSeparatorProps {
  text: string;
}

export const DateSeparator = memo(function DateSeparator({ text }: DateSeparatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex items-center gap-3 px-4 py-4"
    >
      <div className="h-px flex-1 bg-gray-300" />
      <span
        className="whitespace-nowrap rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        <span dangerouslySetInnerHTML={{ __html: renderMathInHtml(text) }} />
      </span>
      <div className="h-px flex-1 bg-gray-300" />
    </motion.div>
  );
});
