import { Video, Layers, HelpCircle, MessageCircle } from 'lucide-react';
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
  { id: 'flashcard', label: 'カード', icon: Layers },
  { id: 'quiz', label: 'クイズ', icon: HelpCircle },
  { id: 'video', label: '動画', icon: Video },
];

export function TabBar({
  activeTab,
  onTabChange,
  hiddenTabs = [],
  disabledTabs = [],
  completedTabs = [],
}: TabBarProps) {
  const tabs = allTabs.filter((tab) => !hiddenTabs.includes(tab.id));

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-md">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          const isDisabled = disabledTabs.includes(id);
          const isCompleted = completedTabs.includes(id);
          return (
            <button
              key={id}
              onClick={() => !isDisabled && onTabChange(id)}
              disabled={isDisabled}
              className={`relative flex flex-1 flex-col items-center py-2 ${
                isDisabled
                  ? 'cursor-not-allowed text-gray-300'
                  : isActive
                    ? 'text-primary'
                    : 'text-gray-400'
              }`}
              aria-current={isActive ? 'page' : undefined}
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
}
