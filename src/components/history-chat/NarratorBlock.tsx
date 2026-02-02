import { motion } from 'framer-motion';

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
        className="rounded-lg border-l-4 bg-purple-50 px-4 py-3"
        style={{ borderLeftColor: '#9B59B6' }}
      >
        <p
          className="text-sm leading-relaxed text-gray-700"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </motion.div>
  );
}
