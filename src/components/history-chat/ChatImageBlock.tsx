import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageLightbox } from '../common/ImageLightbox';

interface ChatImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ChatImageBlock({ src, alt, caption }: ChatImageBlockProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  return (
    <>
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
            className="max-h-[240px] w-auto max-w-full cursor-pointer object-contain"
            loading="lazy"
            onClick={handleImageClick}
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

      <AnimatePresence>
        {isLightboxOpen && (
          <ImageLightbox
            src={src}
            alt={alt}
            caption={caption}
            onClose={() => setIsLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
