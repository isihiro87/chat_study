import { useEffect, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, caption, onClose }: ImageLightboxProps) {
  // Escapeキーで閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // スクロールロック
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleOverlayClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleImageClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} の拡大表示`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleOverlayClick}
    >
      {/* 閉じるボタン */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white active:scale-95"
        aria-label="閉じる"
      >
        <X className="h-6 w-6" />
      </button>

      {/* 画像とキャプション */}
      <div
        className="flex h-[85vh] w-[90vw] flex-col items-center justify-center"
        onClick={handleImageClick}
      >
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          src={src}
          alt={alt}
          className="h-full w-full rounded-lg object-contain"
        />
        {caption && (
          <p
            className="mt-3 text-center text-sm text-white/80"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {caption}
          </p>
        )}
      </div>
    </motion.div>
  );
}
