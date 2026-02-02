import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SlideSet } from '../../data/types';

interface SlideViewProps {
  slideSets: SlideSet[];
  onProgressChange?: (current: number, total: number) => void;
}

export function SlideView({ slideSets, onProgressChange }: SlideViewProps) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentSet = slideSets[currentSetIndex];
  const currentSlide = currentSet.slides[currentSlideIndex];

  useEffect(() => {
    onProgressChange?.(currentSetIndex + 1, slideSets.length);
  }, [currentSetIndex, slideSets.length, onProgressChange]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < 3) {
      setDirection(index > currentSlideIndex ? 1 : -1);
      setCurrentSlideIndex(index);
    }
  };

  const nextSlide = () => {
    if (currentSlideIndex < 2) {
      goToSlide(currentSlideIndex + 1);
    } else if (currentSetIndex < slideSets.length - 1) {
      setDirection(1);
      setCurrentSetIndex(currentSetIndex + 1);
      setCurrentSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    } else if (currentSetIndex > 0) {
      setDirection(-1);
      setCurrentSetIndex(currentSetIndex - 1);
      setCurrentSlideIndex(2);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  const handleTap = () => {
    nextSlide();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div className="flex h-full flex-col">
      {/* スライドエリア - フル表示 */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${currentSetIndex}-${currentSlideIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onTap={handleTap}
            className="absolute inset-0 cursor-pointer"
          >
            {currentSlide.type === 'question' && (
              <QuestionSlideView slide={currentSlide} title={currentSet.title} />
            )}
            {currentSlide.type === 'reason' && (
              <ReasonSlideView slide={currentSlide} />
            )}
            {currentSlide.type === 'conclusion' && (
              <ConclusionSlideView slide={currentSlide} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* 左右ナビボタン - 小さく透明に */}
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0 && currentSetIndex === 0}
          className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/10 p-1.5 transition-opacity hover:bg-black/20 disabled:opacity-0"
        >
          <ChevronLeft className="h-4 w-4 text-gray-500" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === 2 && currentSetIndex === slideSets.length - 1}
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/10 p-1.5 transition-opacity hover:bg-black/20 disabled:opacity-0"
        >
          <ChevronRight className="h-4 w-4 text-gray-500" />
        </button>

        {/* スライドドット - 下部に配置 */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlideIndex
                  ? 'w-6 bg-primary'
                  : index < currentSlideIndex
                    ? 'w-2 bg-primary/40'
                    : 'w-2 bg-gray-300'
              }`}
              aria-label={`スライド ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 問いかけスライド
function QuestionSlideView({ slide, title }: { slide: { type: 'question'; question: string; subtext?: string; emoji?: string; image?: { src: string; alt: string } }; title: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white px-6 py-8">
      {slide.emoji && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-6xl"
        >
          {slide.emoji}
        </motion.div>
      )}
      {slide.image && (
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          src={slide.image.src}
          alt={slide.image.alt}
          className="mb-6 h-40 w-auto rounded-xl object-contain"
        />
      )}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center text-2xl font-bold leading-relaxed text-gray-800"
      >
        {slide.question}
      </motion.p>
      {slide.subtext && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 rounded-full bg-gray-100 px-4 py-1.5 text-center text-sm text-gray-500"
        >
          {slide.subtext}
        </motion.p>
      )}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-sm font-medium text-primary"
      >
        {title}
      </motion.p>
    </div>
  );
}

// 理由・背景スライド
function ReasonSlideView({ slide }: { slide: { type: 'reason'; headline: string; points?: string[]; visual?: { type: string; items: { label: string; value?: string; emoji?: string }[] }; image?: { src: string; alt: string } } }) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-orange-50 to-white px-6 py-8">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 text-center text-2xl font-bold leading-relaxed text-gray-800"
      >
        {slide.headline}
      </motion.h3>

      {slide.image && (
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          src={slide.image.src}
          alt={slide.image.alt}
          className="mb-6 h-48 w-auto self-center rounded-xl object-contain"
        />
      )}

      {slide.visual && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 rounded-2xl bg-white p-5 shadow-sm"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {slide.visual.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center rounded-xl bg-secondary/10 px-5 py-4"
              >
                {item.emoji && <span className="text-3xl">{item.emoji}</span>}
                <span className="mt-2 text-sm font-bold text-gray-700">{item.label}</span>
                {item.value && (
                  <span className="text-xs text-gray-500">{item.value}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {slide.points && slide.points.length > 0 && (
        <motion.ul className="flex-1 space-y-3">
          {slide.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-base leading-relaxed text-gray-700">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

// 結論スライド
function ConclusionSlideView({ slide }: { slide: { type: 'conclusion'; conclusion: string; keywords?: { text: string; isImportant?: boolean }[]; nextHint?: string; image?: { src: string; alt: string } } }) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-white px-6 py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring' }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/20"
      >
        <span className="text-4xl">💡</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 text-center text-2xl font-bold leading-relaxed text-gray-800"
      >
        {slide.conclusion}
      </motion.p>

      {slide.image && (
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          src={slide.image.src}
          alt={slide.image.alt}
          className="mb-6 h-40 w-auto rounded-xl object-contain"
        />
      )}

      {slide.keywords && slide.keywords.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 flex flex-wrap justify-center gap-2"
        >
          {slide.keywords.map((keyword, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                keyword.isImportant
                  ? 'bg-yellow-400 text-yellow-900'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {keyword.text}
            </motion.span>
          ))}
        </motion.div>
      )}

      {slide.nextHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="rounded-2xl border-2 border-dashed border-gray-200 px-5 py-4 text-center"
        >
          <p className="text-sm text-gray-500">次はこれ!</p>
          <p className="mt-1 font-medium text-gray-700">{slide.nextHint}</p>
        </motion.div>
      )}
    </div>
  );
}
