import { motion } from 'framer-motion';

interface DateSeparatorProps {
  text: string;
}

export function DateSeparator({ text }: DateSeparatorProps) {
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
        {text}
      </span>
      <div className="h-px flex-1 bg-gray-300" />
    </motion.div>
  );
}
