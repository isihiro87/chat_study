import type { ChatContent } from '../data/history-chat/types';

// 中学生の平均読書速度（文字/分）
const READING_SPEED_CPM = 400;

// コンテンツ要素ごとの固定時間（秒）
const TAP_WAIT_SECONDS = 1.5;
const DATE_SECONDS = 2;
const QUIZ_THINKING_SECONDS = 15;
const END_VIEW_SECONDS = 10;

/**
 * HTMLタグを除去してプレーンテキストの文字数を返す
 */
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}

/**
 * テキストの読了秒数を算出（中学生の読書速度基準）
 */
function textReadingSeconds(text: string): number {
  const plainText = stripHtmlTags(text);
  return (plainText.length / READING_SPEED_CPM) * 60;
}

/**
 * ChatContent配列から推定読了時間（分）を算出する
 * コンテンツが空の場合は0を返す。1件以上の場合は最小1分（切り上げ）
 */
export function estimateReadingTime(content: ChatContent[]): number {
  if (content.length === 0) return 0;

  let totalSeconds = 0;

  for (const item of content) {
    switch (item.type) {
      case 'date':
        totalSeconds += DATE_SECONDS;
        break;

      case 'narrator':
        totalSeconds += textReadingSeconds(item.text) + TAP_WAIT_SECONDS;
        break;

      case 'message':
        totalSeconds += textReadingSeconds(item.text) + TAP_WAIT_SECONDS;
        break;

      case 'quiz': {
        const quizText =
          item.question +
          item.options.map((o) => o.text).join('');
        totalSeconds +=
          textReadingSeconds(quizText) + QUIZ_THINKING_SECONDS;
        break;
      }

      case 'summary-point':
        totalSeconds += textReadingSeconds(item.text) + TAP_WAIT_SECONDS;
        break;

      case 'end':
        totalSeconds += END_VIEW_SECONDS;
        break;
    }
  }

  const minutes = Math.ceil(totalSeconds / 60);
  return Math.max(1, minutes);
}
