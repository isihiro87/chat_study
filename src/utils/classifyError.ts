export type LoadErrorType = 'network' | 'timeout' | 'chunk' | 'general';

/**
 * チャンク読み込みエラーかどうかを判定する。
 * デプロイ後に古いチャンクURLが無効になった場合に発生する。
 */
function isChunkLoadError(error: unknown): boolean {
  if (error instanceof Error) {
    return /loading.*(chunk|module)|failed to fetch dynamically imported module/i.test(
      error.message,
    );
  }
  return false;
}

export function classifyError(error: unknown): LoadErrorType {
  if (isChunkLoadError(error)) return 'chunk';
  if (!navigator.onLine) return 'network';
  if (error instanceof TypeError && /fetch|network/i.test(error.message)) return 'network';
  if (error instanceof DOMException && error.name === 'AbortError') return 'timeout';
  return 'general';
}

/**
 * チャンクエラー時にページをリロードする。
 * 無限リロードを防ぐため、sessionStorageでガードする。
 */
export function handleChunkError(): void {
  const key = 'chunk_reload_attempted';
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, '1');
    window.location.reload();
  }
}

export interface ErrorMessage {
  emoji: string;
  title: string;
  description: string;
}

export function getErrorMessage(type: LoadErrorType): ErrorMessage {
  switch (type) {
    case 'network':
      return {
        emoji: '📡',
        title: 'ネットにつながらないみたい',
        description:
          'Wi-Fiやモバイルデータの接続を確認してから、\nもう一度ためしてみてね！',
      };
    case 'timeout':
      return {
        emoji: '⏳',
        title: '読み込みに時間がかかりすぎちゃった',
        description:
          'サーバーが混んでいるかも。\n少し待ってから、もう一度ためしてみてね！',
      };
    case 'chunk':
      return {
        emoji: '🔄',
        title: 'サイトが新しくなったよ！',
        description:
          'ページを読み込み直すと最新版が使えるよ。\nボタンを押してね！',
      };
    case 'general':
      return {
        emoji: '😵',
        title: 'うまく読み込めなかったよ',
        description:
          'ごめんね、エラーが起きちゃった。\nもう一度ためしてみてね！',
      };
  }
}
