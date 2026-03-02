/**
 * sitemap.xml 生成スクリプト
 * ビルド後に実行し、dist/sitemap.xml を生成する
 *
 * 使用方法: npx tsx scripts/generate-sitemap.ts
 */
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// データを直接importして全ルートを列挙
import { subjects } from '../src/data/subjects/index.js';
import { eras as historyEras, allTopics as historyTopics } from '../src/data/subjects/history/eras/index.js';
import { eras as englishEras, allTopics as englishTopics } from '../src/data/subjects/english/grades/index.js';
import { eras as mathEras, allTopics as mathTopics } from '../src/data/subjects/math/units/index.js';
import { getAllHistoryChats } from '../src/data/history-chat/index.js';
import { getAllEnglishChats } from '../src/data/english-chat/index.js';
import { getAllMathChats } from '../src/data/math-chat/index.js';

const BASE_URL = 'https://chatstudy.jp';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  loc: string;
  priority: string;
  changefreq: string;
}

function collectRoutes(): SitemapEntry[] {
  const routes: SitemapEntry[] = [];

  // トップページ
  routes.push({ loc: '/', priority: '1.0', changefreq: 'weekly' });

  // 科目データをまとめる
  const subjectData: Record<string, { eras: typeof historyEras; topics: typeof historyTopics }> = {
    history: { eras: historyEras, topics: historyTopics },
    english: { eras: englishEras, topics: englishTopics },
    math: { eras: mathEras, topics: mathTopics },
  };

  for (const subject of subjects) {
    if (!subject.isAvailable) continue;

    // 科目ページ
    routes.push({
      loc: `/subjects/${subject.id}`,
      priority: '0.8',
      changefreq: 'weekly',
    });

    const data = subjectData[subject.id];
    if (!data) continue;

    // 時代ページ
    for (const era of data.eras) {
      routes.push({
        loc: `/subjects/${subject.id}/eras/${era.id}`,
        priority: '0.7',
        changefreq: 'weekly',
      });
    }

    // トピックページ
    for (const topic of data.topics) {
      routes.push({
        loc: `/subjects/${subject.id}/eras/${topic.eraId}/topics/${topic.id}`,
        priority: '0.6',
        changefreq: 'monthly',
      });
    }
  }

  // チャットページ
  const allChats = [...getAllHistoryChats(), ...getAllEnglishChats(), ...getAllMathChats()];
  for (const chat of allChats) {
    routes.push({
      loc: `/chat/${chat.id}`,
      priority: '0.5',
      changefreq: 'monthly',
    });
  }

  return routes;
}

function buildSitemapXml(routes: SitemapEntry[]): string {
  const urlEntries = routes
    .map(
      (r) => `  <url>
    <loc>${BASE_URL}${r.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

const routes = collectRoutes();
const xml = buildSitemapXml(routes);
const outputPath = resolve(import.meta.dirname, '..', 'dist', 'sitemap.xml');

writeFileSync(outputPath, xml, 'utf-8');
console.log(`sitemap.xml generated: ${routes.length} URLs`);
