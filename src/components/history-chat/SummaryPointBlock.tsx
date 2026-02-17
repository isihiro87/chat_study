import { motion } from 'framer-motion';

interface SummaryPointBlockProps {
  text: string;
}

export function SummaryPointBlock({ text }: SummaryPointBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-3 my-3"
    >
      <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5">
        <span className="text-base">📌</span>
        <p
          className="text-sm font-medium leading-relaxed text-amber-900"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </motion.div>
  );
}
