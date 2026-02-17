import { useEffect, useCallback } from 'react';

/**
 * data-tooltip属性を持つ要素のタップでツールチップを表示するフック
 * dangerouslySetInnerHTMLで描画されたHTML内のdata-tooltip要素に対応
 */
export function useTooltip(containerRef: React.RefObject<HTMLElement | null>) {
  const removeTooltip = useCallback(() => {
    const existing = document.querySelector('.chat-tooltip');
    if (existing) existing.remove();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tooltipEl = target.closest('[data-tooltip]') as HTMLElement | null;

      // ツールチップ要素以外をクリック → 既存ツールチップを消す
      if (!tooltipEl) {
        removeTooltip();
        return;
      }

      // イベント伝播を止めて「次へ進む」と干渉しない
      e.stopPropagation();

      const tooltipText = tooltipEl.getAttribute('data-tooltip');
      if (!tooltipText) return;

      // 既存ツールチップを削除
      removeTooltip();

      // ツールチップ要素を作成
      const tooltip = document.createElement('div');
      tooltip.className = 'chat-tooltip';
      tooltip.textContent = tooltipText;
      document.body.appendChild(tooltip);

      // 位置を計算（要素の上に表示）
      const rect = tooltipEl.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();

      let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
      // 画面外にはみ出ないように調整
      if (left < 8) left = 8;
      if (left + tooltipRect.width > window.innerWidth - 8) {
        left = window.innerWidth - tooltipRect.width - 8;
      }

      let top = rect.top - tooltipRect.height - 8;
      // 上に収まらない場合は下に表示
      if (top < 8) {
        top = rect.bottom + 8;
        tooltip.style.setProperty('--arrow-position', 'top');
      }

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;

      // 3秒後に自動消去
      setTimeout(() => {
        tooltip.remove();
      }, 3000);
    };

    container.addEventListener('click', handleClick, true);

    return () => {
      container.removeEventListener('click', handleClick, true);
      removeTooltip();
    };
  }, [containerRef, removeTooltip]);
}
