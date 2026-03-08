import { motion, AnimatePresence } from 'framer-motion';
import type { WhiteboardStep } from '../../data/history-chat/types';

interface MathWhiteboardBlockProps {
  title?: string;
  steps: WhiteboardStep[];
  revealedSteps: number;
}

export function MathWhiteboardBlock({ title, steps, revealedSteps }: MathWhiteboardBlockProps) {
  if (steps.length === 0) return null;

  const visibleSteps = steps.slice(0, revealedSteps);
  const currentAnnotation = visibleSteps.length > 0
    ? visibleSteps[visibleSteps.length - 1].annotation
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-3 my-3"
    >
      <div className="rounded-2xl border border-gray-200 bg-white px-4 py-4">
        {title && (
          <p
            className="mb-3 text-xs font-bold text-gray-400"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}

        {/* 式エリア（上部） */}
        <div className="flex flex-col items-center gap-0">
          <AnimatePresence initial={false}>
            {visibleSteps.map((step, index) => {
              const isResult = step.isResult;

              return (
                <motion.div
                  key={`step-${index}`}
                  initial={{ opacity: 0, y: -12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full"
                >
                  {/* ステップ間の矢印 */}
                  {index > 0 && (
                    <div className="flex justify-center py-0.5">
                      <span className="text-sm text-gray-300">↓</span>
                    </div>
                  )}

                  {/* 数式: <strong>タグで注目箇所をamber色にハイライト */}
                  <div
                    className={`math-wb-formula rounded-xl px-4 py-2 text-center ${
                      isResult
                        ? 'border border-amber-200 bg-amber-50'
                        : ''
                    }`}
                  >
                    <p
                      className={`text-lg font-bold leading-relaxed ${
                        isResult ? 'text-amber-800' : 'text-gray-800'
                      }`}
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      dangerouslySetInnerHTML={{ __html: step.formula }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 解説エリア（下部・字幕方式） */}
        <div className="mt-3 min-h-[2.5rem]">
          <AnimatePresence mode="wait">
            {currentAnnotation && (
              <motion.p
                key={currentAnnotation}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg bg-gray-50 px-3 py-2 text-center text-xs leading-relaxed text-gray-500"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                dangerouslySetInnerHTML={{ __html: currentAnnotation }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* 残りステップインジケーター */}
        {revealedSteps < steps.length && (
          <div className="mt-2 flex justify-center">
            <span className="text-xs text-gray-300">
              {revealedSteps} / {steps.length}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
