// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { WhiteboardStep } from '../../data/history-chat/types';
import { renderMathInHtml } from '../../utils/math-formula';

interface MathWhiteboardBlockProps {
  title?: string;
  steps: WhiteboardStep[];
  revealedSteps: number;
  onStepBack?: () => void;
}

/**
 * 連続する grouped ステップをグループ化する。
 * 返り値は { group: WhiteboardStep[], startIndex: number }[] と
 * 非グループの { step: WhiteboardStep, index: number }[] の混合配列。
 */
type RenderItem =
  | { kind: 'single'; step: WhiteboardStep; index: number }
  | { kind: 'group'; steps: WhiteboardStep[]; startIndex: number };

function buildRenderItems(visibleSteps: WhiteboardStep[]): RenderItem[] {
  const items: RenderItem[] = [];
  let i = 0;
  while (i < visibleSteps.length) {
    if (visibleSteps[i].grouped) {
      const startIndex = i;
      const groupSteps: WhiteboardStep[] = [];
      while (i < visibleSteps.length && visibleSteps[i].grouped) {
        groupSteps.push(visibleSteps[i]);
        i++;
      }
      items.push({ kind: 'group', steps: groupSteps, startIndex });
    } else {
      items.push({ kind: 'single', step: visibleSteps[i], index: i });
      i++;
    }
  }
  return items;
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

  const renderItems = buildRenderItems(visibleSteps);

  /** 過去ステップの色を段階的に設定 */
  function getTextColorClass(step: WhiteboardStep, index: number): string {
    if (step.isResult) return 'math-wb-result';
    const isLatest = index === latestNewIndex;
    if (isLatest) return 'text-gray-800';
    // 1つ前は少し薄く、2つ以上前はさらに薄く
    if (index === latestNewIndex - 1) return 'text-gray-600';
    return 'text-gray-500';
  }

  /** animateInsert クラスの判定 */
  function getFormulaClasses(step: WhiteboardStep, index: number): string {
    const isLatest = index === latestNewIndex;
    const animate = step.animateInsert && isLatest;
    return `math-wb-formula${animate ? ' animate-insert' : ''} px-3 py-0.5 text-center`;
  }

  /** 1ステップ分のレンダリング */
  function renderStep(step: WhiteboardStep, index: number) {
    const isLatest = index === latestNewIndex;

    return (
      <div key={`step-${index}`} className="w-full">
        {/* 数式 */}
        <div className={getFormulaClasses(step, index)}>
          <p
            className={`text-lg font-bold leading-snug ${getTextColorClass(step, index)}`}
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: renderMathInHtml(step.formula) }}
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
              dangerouslySetInnerHTML={{ __html: renderMathInHtml(step.annotation) }}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="mx-3 my-3">
      <div className="rounded-2xl border border-gray-200 bg-white px-4 py-4">
        {/* 式エリア（タイトルはスクロール内に配置し sticky で固定） */}
        <div
          className="flex w-full flex-col items-center overflow-y-auto"
          style={{
            minHeight: `${stepsAreaMinHeight}rem`,
            maxHeight: '50vh',
          }}
        >
          {/* スティッキータイトル */}
          {title && (
            <p
              className="sticky top-0 z-10 w-full bg-white pb-1 text-center text-xs font-bold text-gray-400"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              dangerouslySetInnerHTML={{ __html: renderMathInHtml(title) }}
            />
          )}

          {renderItems.map((item) => {
            if (item.kind === 'single') {
              return renderStep(item.step, item.index);
            }
            // grouped: 中括弧でグループ化
            return (
              <div key={`group-${item.startIndex}`} className="math-wb-grouped w-full py-0.5">
                {item.steps.map((step, i) =>
                  renderStep(step, item.startIndex + i)
                )}
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
