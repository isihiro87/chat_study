import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { classifyError, getErrorMessage, handleChunkError } from '../../../src/utils/classifyError';

describe('classifyError', () => {
  let originalOnLine: boolean;

  beforeEach(() => {
    originalOnLine = navigator.onLine;
    Object.defineProperty(navigator, 'onLine', { value: true, writable: true, configurable: true });
  });

  afterEach(() => {
    Object.defineProperty(navigator, 'onLine', {
      value: originalOnLine,
      writable: true,
      configurable: true,
    });
  });

  describe('chunk error', () => {
    it('Loading chunk failed を chunk と判定する', () => {
      const error = new Error('Loading chunk abc123 failed');
      expect(classifyError(error)).toBe('chunk');
    });

    it('Loading module failed を chunk と判定する', () => {
      const error = new Error('Loading module from xyz failed');
      expect(classifyError(error)).toBe('chunk');
    });

    it('Failed to fetch dynamically imported module を chunk と判定する', () => {
      const error = new Error('Failed to fetch dynamically imported module: /assets/foo.js');
      expect(classifyError(error)).toBe('chunk');
    });
  });

  describe('network error', () => {
    it('navigator.onLine が false の場合 network と判定する', () => {
      Object.defineProperty(navigator, 'onLine', { value: false, writable: true, configurable: true });
      const error = new Error('something went wrong');
      expect(classifyError(error)).toBe('network');
    });

    it('TypeError で fetch を含むメッセージを network と判定する', () => {
      const error = new TypeError('Failed to fetch');
      expect(classifyError(error)).toBe('network');
    });

    it('TypeError で network を含むメッセージを network と判定する', () => {
      const error = new TypeError('A network error occurred');
      expect(classifyError(error)).toBe('network');
    });
  });

  describe('timeout error', () => {
    it('AbortError の DOMException を timeout と判定する', () => {
      const error = new DOMException('The operation was aborted', 'AbortError');
      expect(classifyError(error)).toBe('timeout');
    });
  });

  describe('general error', () => {
    it('その他のエラーを general と判定する', () => {
      const error = new Error('Unknown error');
      expect(classifyError(error)).toBe('general');
    });

    it('文字列のエラーを general と判定する', () => {
      expect(classifyError('something broke')).toBe('general');
    });

    it('null を general と判定する', () => {
      expect(classifyError(null)).toBe('general');
    });
  });
});

describe('getErrorMessage', () => {
  it('network タイプに対して正しいメッセージを返す', () => {
    const msg = getErrorMessage('network');
    expect(msg.title).toBe('ネットにつながらないみたい');
    expect(msg.emoji).toBe('📡');
  });

  it('timeout タイプに対して正しいメッセージを返す', () => {
    const msg = getErrorMessage('timeout');
    expect(msg.title).toBe('読み込みに時間がかかりすぎちゃった');
    expect(msg.emoji).toBe('⏳');
  });

  it('chunk タイプに対して正しいメッセージを返す', () => {
    const msg = getErrorMessage('chunk');
    expect(msg.title).toBe('サイトが新しくなったよ！');
    expect(msg.emoji).toBe('🔄');
  });

  it('general タイプに対して正しいメッセージを返す', () => {
    const msg = getErrorMessage('general');
    expect(msg.title).toBe('うまく読み込めなかったよ');
    expect(msg.emoji).toBe('😵');
  });
});

describe('handleChunkError', () => {
  const reloadMock = vi.fn();

  beforeEach(() => {
    sessionStorage.clear();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
      configurable: true,
    });
    reloadMock.mockClear();
  });

  it('初回呼び出し時に sessionStorage にフラグを設定してリロードする', () => {
    handleChunkError();
    expect(sessionStorage.getItem('chunk_reload_attempted')).toBe('1');
    expect(reloadMock).toHaveBeenCalledOnce();
  });

  it('フラグが既に設定されている場合はリロードしない', () => {
    sessionStorage.setItem('chunk_reload_attempted', '1');
    handleChunkError();
    expect(reloadMock).not.toHaveBeenCalled();
  });
});
