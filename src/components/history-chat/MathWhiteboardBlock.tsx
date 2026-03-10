import { useRef, useEffect } from 'react';
import type { WhiteboardStep } from '../../data/history-chat/types';

interface MathWhiteboardBlockProps {
  title?: string;
  steps: WhiteboardStep[];
  revealedSteps: number;
  onStepBack?: () => void;
}

export function MathWhiteboardBlock({ title, steps, revealedSteps, onStepBack }: MathWhiteboardBlockProps) {
  const lastRevealedRef = useRef<HTMLDivElement>(null);
  const latestNewIndex = revealedSteps - 1;

  useEffect(() => {
    if (lastRevealedRef.current) {
      lastRevealedRef.current.scrollIntoView({
        behavior: 'instant',
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

        {/* 式エリア: 全ステップ+解説のスロットを最初から描画 */}
        <div
          className="flex w-full flex-col items-center overflow-y-auto"
          style={{ maxHeight: '50vh' }}
        >
          {steps.map((step, index) => {
            const isRevealed = index < revealedSteps;
            const isLatest = index === latestNewIndex;
            const isResult = step.isResult;
            const isPast = index < latestNewIndex;

            return (
              <div
                key={`step-${index}`}
                ref={index === latestNewIndex ? lastRevealedRef : undefined}
                className="w-full"
              >
                {/* 数式: 未表示はinvisibleで高さだけ確保 */}
                <div className={`math-wb-formula px-3 py-0.5 text-center ${!isRevealed ? 'invisible' : ''}`}>
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

                {/* 解説: 常にレンダリングして高さ確保、最新の表示済みステップのみvisible */}
                {step.annotation && (
                  <p
                    className={`mt-0.5 text-center text-xs leading-relaxed text-gray-500 ${
                      isRevealed && isLatest ? '' : 'invisible'
                    }`}
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: step.annotation }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* フッター: 進捗 + 戻るボタン */}
        <div className="mt-2 flex items-center justify-between">
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
