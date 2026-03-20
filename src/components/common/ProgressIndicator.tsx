interface ProgressIndicatorProps {
  current: number; // 0-based index of current item
  total: number;
  variant?: 'default' | 'review';
  showLabel?: boolean;
}

const DOT_THRESHOLD = 15;

/**
 * Progress color based on completion percentage.
 * gray → amber → emerald as progress increases.
 */
function getProgressColor(progress: number, variant: 'default' | 'review') {
  if (variant === 'review') {
    return {
      bar: 'bg-amber-500',
      dotActive: 'bg-amber-500',
      dotCurrent: 'bg-amber-300',
    };
  }
  if (progress >= 0.75) {
    return {
      bar: 'bg-emerald-500',
      dotActive: 'bg-emerald-500',
      dotCurrent: 'bg-emerald-300',
    };
  }
  if (progress >= 0.5) {
    return {
      bar: 'bg-amber-500',
      dotActive: 'bg-amber-500',
      dotCurrent: 'bg-amber-300',
    };
  }
  if (progress >= 0.25) {
    return {
      bar: 'bg-amber-400',
      dotActive: 'bg-amber-400',
      dotCurrent: 'bg-amber-200',
    };
  }
  return {
    bar: 'bg-gray-400',
    dotActive: 'bg-gray-800',
    dotCurrent: 'bg-gray-400',
  };
}

export function ProgressIndicator({
  current,
  total,
  variant = 'default',
  showLabel = true,
}: ProgressIndicatorProps) {
  const progress = total > 0 ? current / total : 0;
  const colors = getProgressColor(progress, variant);

  if (total <= DOT_THRESHOLD) {
    // Dot mode
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-1.5">
          {Array.from({ length: total }, (_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i < current
                  ? colors.dotActive
                  : i === current
                    ? colors.dotCurrent
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        {showLabel && (
          <span className="ml-2 text-sm font-bold text-gray-500">
            {current + 1}/{total}
          </span>
        )}
      </div>
    );
  }

  // Bar mode for many items
  const barPercent = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-300 ease-out ${colors.bar}`}
          style={{ width: `${barPercent}%` }}
        />
      </div>
      {showLabel && (
        <span className="flex-shrink-0 text-sm font-bold text-gray-500">
          {current + 1}/{total}
        </span>
      )}
    </div>
  );
}
