import { useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { WhiteboardStep } from '../../data/history-chat/types';

interface MathWhiteboardBlockProps {
  title?: string;
  steps: WhiteboardStep[];
  revealedSteps: number;
  onStepBack?: () => void;
}

export function MathWhiteboardBlock({ title, steps, revealedSteps, onStepBack }: MathWhiteboardBlockProps) {
  const stepsEndRef = useRef<HTMLDivElement>(null);

  const visibleSteps = steps.length > 0 ? steps.slice(0, revealedSteps) : [];
  const latestNewIndex = revealedSteps - 1;

  // 全ステップ分の高さを初めから確保（コンパクト: 2rem per step）
  const stepsAreaMinHeight = steps.length > 0
    ? steps.length * 2.0
    : 0;

  useEffect(() => {
    if (stepsEndRef.current) {
      stepsEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [revealedSteps]);

  if (steps.length === 0) return null;

  return (
    <div className="mx-3 my-3">
      <div className="rounded-2xl border border-gray-200 bg-white px-4 py-4">
        {title && (
          <p
            className="mb-2 text-xs font-bold text-gray-400"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}

        {/* 式エリア */}
        <div
          className="flex w-full flex-col items-center overflow-y-auto"
          style={{
            minHeight: `${stepsAreaMinHeight}rem`,
            maxHeight: '50vh',
          }}
        >
          {visibleSteps.map((step, index) => {
            const isResult = step.isResult;
            const isLatest = index === latestNewIndex;
            const isPast = index < latestNewIndex;

            return (
              <div key={`step-${index}`} className="w-full">
                {/* 数式 */}
                <div className="math-wb-formula px-3 py-0.5 text-center">
                  <p
                    className={`text-lg font-bold leading-snug ${
                      isResult
                        ? 'math-wb-result'
                        : isPast
                          ? 'text-gray-400'
                          : 'text-gray-800'
                    }`}
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: step.formula }}
                  />
                </div>

                {/* annotation: 最新ステップのみ表示 */}
                <AnimatePresence>
                  {step.annotation && isLatest && (
                    <motion.p
                      key={`annotation-${index}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="mt-0.5 text-center text-xs leading-relaxed text-gray-500"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      dangerouslySetInnerHTML={{ __html: step.annotation }}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div ref={stepsEndRef} />
        </div>

        {/* フッター: 進捗 + 戻るボタン */}
        <div className="mt-2 flex items-center justify-between">
          {/* 戻るボタン */}
          {revealedSteps > 1 && onStepBack ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onStepBack();
              }}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500 active:scale-95"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              ← もどる
            </button>
          ) : (
            <div />
          )}

          {/* 進捗表示 */}
          {revealedSteps < steps.length ? (
            <span className="text-xs text-gray-300">
              {revealedSteps} / {steps.length}
            </span>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
