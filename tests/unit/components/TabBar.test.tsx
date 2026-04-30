import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

vi.mock('framer-motion', () => ({
  motion: {
    div: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  },
}));

import { TabBar } from '../../../src/components/common/TabBar';

describe('TabBar', () => {
  const defaultProps = {
    activeTab: 'chat' as const,
    onTabChange: vi.fn(),
  };

  it('renders all 4 tabs by default', () => {
    render(<TabBar {...defaultProps} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(4);
    expect(screen.getByText('チャット')).toBeInTheDocument();
    expect(screen.getByText('カード')).toBeInTheDocument();
    expect(screen.getByText('クイズ')).toBeInTheDocument();
    expect(screen.getByText('動画')).toBeInTheDocument();
  });

  it('hides tabs specified in hiddenTabs', () => {
    render(<TabBar {...defaultProps} hiddenTabs={['video', 'quiz']} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(2);
    expect(screen.queryByText('動画')).not.toBeInTheDocument();
    expect(screen.queryByText('クイズ')).not.toBeInTheDocument();
  });

  it('calls onTabChange with correct tab id when clicked', () => {
    const onTabChange = vi.fn();
    render(<TabBar {...defaultProps} onTabChange={onTabChange} />);
    fireEvent.click(screen.getByText('クイズ'));
    expect(onTabChange).toHaveBeenCalledWith('quiz');
  });

  it('does not trigger onTabChange when a disabled tab is clicked', () => {
    const onTabChange = vi.fn();
    render(<TabBar {...defaultProps} onTabChange={onTabChange} disabledTabs={['quiz']} />);
    fireEvent.click(screen.getByText('クイズ'));
    expect(onTabChange).not.toHaveBeenCalled();
  });

  it('sets aria-selected="true" on the active tab', () => {
    render(<TabBar {...defaultProps} activeTab="flashcard" />);
    const flashcardTab = screen.getByRole('tab', { name: /カードタブ/ });
    expect(flashcardTab).toHaveAttribute('aria-selected', 'true');

    const chatTab = screen.getByRole('tab', { name: /チャットタブ/ });
    expect(chatTab).toHaveAttribute('aria-selected', 'false');
  });

  it('shows completion indicator in aria-label for completed tabs', () => {
    render(<TabBar {...defaultProps} completedTabs={['quiz', 'flashcard']} />);
    const quizTab = screen.getByRole('tab', { name: /クイズタブ（完了済み）/ });
    expect(quizTab).toBeInTheDocument();

    const flashcardTab = screen.getByRole('tab', { name: /カードタブ（完了済み）/ });
    expect(flashcardTab).toBeInTheDocument();

    const chatTab = screen.getByRole('tab', { name: /チャットタブ/ });
    expect(chatTab.getAttribute('aria-label')).not.toContain('完了済み');
  });

  it('navigates to the next tab on ArrowRight key', () => {
    const onTabChange = vi.fn();
    render(<TabBar activeTab="chat" onTabChange={onTabChange} />);
    const chatTab = screen.getByRole('tab', { name: /チャットタブ/ });
    fireEvent.keyDown(chatTab, { key: 'ArrowRight' });
    expect(onTabChange).toHaveBeenCalledWith('flashcard');
  });
});
