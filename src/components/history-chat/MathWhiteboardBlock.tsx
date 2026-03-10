import { useRef, useEffect } from 'react';
import type { WhiteboardStep } from '../../data/history-chat/types';

interface MathWhiteboardBlockProps {
  title?: string;
  steps: WhiteboardStep[];
  revealedSteps: number;
  /** ホワイトボードがアクティブ（ステップ展開中 or 最後のコンテンツ）のときtrue */
  isActive?: boolean;
  onStepBack?: () => void;
}

export function MathWhiteboardBlock({
  title,
  steps,
  revealedSteps,
  isActive = false,
  onStepBack,
}: MathWhiteboardBlockProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const latestIndex = revealedSteps - 1;

  // ホワイトボード内部のスクロールのみ制御（親スクロールコンテナに影響しない）
  useEffect(() => {
    const area = scrollAreaRef.current;
    if (!area) return;
    const target = area.querySelector<HTMLElement>(`[data-step="${latestIndex}"]`);
    if (!target) return;
    const targetBottom = target.offsetTop + target.offsetHeight;
    const areaViewBottom = area.scrollTop + area.clientHeight;
    if (targetBottom > areaViewBottom) {
      area.scrollTop = targetBottom - area.clientHeight;
    }
  }, [revealedSteps, latestIndex]);

  if (steps.length === 0) return null;

  // 戻るボタン表示条件: アクティブ & 2ステップ以上表示済み
  const showBackButton = isActive && revealedSteps > 1 && onStepBack;

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

        {/* 式エリア: 全ステップを最初から描画して高さ固定 */}
        <div
          ref={scrollAreaRef}
          className="w-full overflow-y-auto"
          style={{ maxHeight: '50vh' }}
        >
          {steps.map((step, index) => {
            const isRevealed = index < revealedSteps;
            const isLatest = index === latestIndex;
            const isPast = index < latestIndex;

            return (
              <div key={index} data-step={index}>
                {/* 数式: 未表示は visibility:hidden で高さだけ確保 */}
                <div
                  className="math-wb-formula px-3 py-0.5 text-center"
                  style={{ visibility: isRevealed ? 'visible' : 'hidden' }}
                >
                  <p
                    className={`text-lg font-bold leading-snug ${
                      step.isResult
                        ? 'math-wb-result'
                        : isPast
                          ? 'text-gray-400'
                          : 'text-gray-800'
                    }`}
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: step.formula }}
                  />
                </div>

                {/* 解説: 全ステップ分を常にレンダリングして高さ確保 */}
                {step.annotation && (
                  <p
                    className="mt-0.5 px-3 text-center text-xs leading-relaxed text-gray-500"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      visibility: isRevealed && isLatest ? 'visible' : 'hidden',
                    }}
                    dangerouslySetInnerHTML={{ __html: step.annotation }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* フッター: 戻るボタン + 進捗 */}
        <div className="mt-2 flex items-center justify-between">
          {showBackButton ? (
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
