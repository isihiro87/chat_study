import { SlideView } from './SlideView';
import type { Explanation } from '../../data/types';

interface ExplanationViewProps {
  explanation: Explanation;
  onProgressChange?: (current: number, total: number) => void;
}

export function ExplanationView({ explanation, onProgressChange }: ExplanationViewProps) {
  if (!explanation.slides || explanation.slides.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-gray-500">コンテンツがありません</p>
      </div>
    );
  }

  return (
    <SlideView
      slideSets={explanation.slides}
      onProgressChange={onProgressChange}
    />
  );
}
