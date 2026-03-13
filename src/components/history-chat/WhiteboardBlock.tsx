// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { motion } from 'framer-motion';
import type { WhiteboardStep } from '../../data/history-chat/types';

interface WhiteboardBlockProps {
  title?: string;
  steps: WhiteboardStep[];
}

export function WhiteboardBlock({ title, steps }: WhiteboardBlockProps) {
  if (steps.length === 0) return null;

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

        <div className="flex flex-col items-center gap-1">
          {steps.map((step, index) => (
            <div key={index} className="w-full">
              {/* ステップ間の矢印 */}
              {index > 0 && (
                <div className="flex justify-center py-0.5">
                  <span className="text-sm text-gray-300">↓</span>
                </div>
              )}

              {/* 数式ステップ */}
              <div
                className={`rounded-xl px-4 py-2 text-center ${
                  step.isResult
                    ? 'border border-amber-200 bg-amber-50'
                    : ''
                }`}
              >
                <p
                  className={`text-lg font-bold leading-relaxed ${
                    step.isResult ? 'text-amber-800' : 'text-gray-800'
                  }`}
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: step.formula }}
                />
                {step.annotation && (
                  <p
                    className="mt-1 text-xs leading-relaxed text-gray-400"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: step.annotation }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
