export const SITE_NAME = 'チャットでスタディ';
export const BASE_URL = 'https://chatstudy.jp';
export const DEFAULT_DESCRIPTION =
  '中学生向け無料学習サイト。歴史・英語・数学をチャット形式の解説・フラッシュカード・クイズで楽しく学べます。定期テスト対策にも。';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE_NAME;
  return `${pageTitle} | ${SITE_NAME}`;
}

export function buildCanonicalUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): string {
  const listItems = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: buildCanonicalUrl(item.path),
  }));

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: listItems,
  });
}
