import { motion } from 'framer-motion';

interface ChatImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ChatImageBlock({ src, alt, caption }: ChatImageBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-3 my-2 overflow-hidden rounded-2xl bg-white shadow-sm"
    >
      <div className="flex justify-center p-4">
        <img
          src={src}
          alt={alt}
          className="max-h-[240px] w-auto max-w-full object-contain"
          loading="lazy"
        />
      </div>
      {caption && (
        <p
          className="border-t border-gray-100 px-4 py-2 text-center text-xs text-gray-500"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {caption}
        </p>
      )}
    </motion.div>
  );
}
