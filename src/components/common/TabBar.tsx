import { memo, useCallback } from 'react';
import { Video, Layers, HelpCircle, MessageCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import type { TabType } from '../../data/types';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  hiddenTabs?: TabType[];
  disabledTabs?: TabType[];
  completedTabs?: TabType[];
}

const allTabs: { id: TabType; label: string; icon: React.ElementType }[] = [
  { id: 'chat', label: 'チャット', icon: MessageCircle },
  { id: 'example', label: '例題', icon: BookOpen },
  { id: 'flashcard', label: 'カード', icon: Layers },
  { id: 'quiz', label: 'クイズ', icon: HelpCircle },
  { id: 'video', label: '動画', icon: Video },
];

export const TabBar = memo(function TabBar({
  activeTab,
  onTabChange,
  hiddenTabs = [],
  disabledTabs = [],
  completedTabs = [],
}: TabBarProps) {
  const tabs = allTabs.filter((tab) => !hiddenTabs.includes(tab.id));

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      let nextIndex = -1;
      if (e.key === 'ArrowRight') {
        for (let i = 1; i <= tabs.length; i++) {
          const idx = (currentIndex + i) % tabs.length;
          if (!disabledTabs.includes(tabs[idx].id)) { nextIndex = idx; break; }
        }
      } else if (e.key === 'ArrowLeft') {
        for (let i = 1; i <= tabs.length; i++) {
          const idx = (currentIndex - i + tabs.length) % tabs.length;
          if (!disabledTabs.includes(tabs[idx].id)) { nextIndex = idx; break; }
        }
      }
      if (nextIndex >= 0) {
        e.preventDefault();
        onTabChange(tabs[nextIndex].id);
        const btn = (e.currentTarget.parentNode as HTMLElement)?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex];
        btn?.focus();
      }
    },
    [tabs, disabledTabs, onTabChange],
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 bg-white" aria-label="学習モード">
      <div className="mx-auto flex max-w-md" role="tablist">
        {tabs.map(({ id, label, icon: Icon }, index) => {
          const isActive = activeTab === id;
          const isDisabled = disabledTabs.includes(id);
          const isCompleted = completedTabs.includes(id);
          return (
            <button
              key={id}
              role="tab"
              onClick={() => !isDisabled && onTabChange(id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={isDisabled}
              className={`relative flex flex-1 flex-col items-center py-2 ${
                isDisabled
                  ? 'cursor-default text-gray-300'
                  : isActive
                    ? 'text-primary'
                    : 'text-gray-400'
              }`}
              aria-selected={isActive}
              aria-label={`${label}タブ${isCompleted ? '（完了済み）' : ''}${isDisabled ? '（準備中）' : ''}`}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="relative">
                <Icon
                  className={`h-6 w-6 ${
                    isDisabled
                      ? 'text-gray-300'
                      : isActive
                        ? 'text-primary'
                        : 'text-gray-400'
                  }`}
                />
                {isCompleted && !isDisabled && (
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                )}
              </div>
              <span className="mt-1 text-xs font-medium">{label}</span>
              {isDisabled && (
                <span className="absolute -top-1 right-1/4 rounded bg-gray-400 px-1 text-[8px] text-white">
                  準備中
                </span>
              )}
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
});
