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
  const [hasError, setHasError] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasError) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-3 my-2 overflow-hidden rounded-2xl bg-white shadow-sm"
      >
        <div className="relative flex justify-center p-4">
          {hasError ? (
            <div className="flex h-[160px] w-full items-center justify-center rounded-lg bg-gray-50">
              <div className="text-center">
                <span className="text-3xl">🖼️</span>
                <p
                  className="mt-1 text-xs text-gray-400"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {alt}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative inline-block">
              <img
                src={src}
                alt={alt}
                className="max-h-[240px] w-auto max-w-full cursor-pointer object-contain"
                loading="lazy"
                onClick={handleImageClick}
                onError={() => setHasError(true)}
              />
              <span
                className="absolute bottom-1 right-1 text-[10px] text-gray-400"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                AI生成
              </span>
            </div>
          )}
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
