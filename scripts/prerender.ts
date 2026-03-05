/**
 * プリレンダリングスクリプト
 * ビルド後に実行し、全ルートの静的HTMLファイルを生成する
 *
 * 使用方法: npx tsx scripts/prerender.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';

import { subjects } from '../src/data/subjects/index.js';
import {
  eras as historyEras,
  allTopics as historyTopics,
} from '../src/data/subjects/history/eras/index.js';
import {
  eras as englishEras,
  allTopics as englishTopics,
} from '../src/data/subjects/english/grades/index.js';
import {
  eras as mathEras,
  allTopics as mathTopics,
} from '../src/data/subjects/math/units/index.js';

import type { Era, Topic, Subject } from '../src/data/types.js';
import type { HistoryChat } from '../src/data/history-chat/types.js';
import { getAllHistoryChats } from '../src/data/history-chat/index.js';
import { getAllEnglishChats } from '../src/data/english-chat/index.js';
import { getAllMathChats } from '../src/data/math-chat/index.js';

const BASE_URL = 'https://chatstudy.jp';
const SITE_NAME = 'チャットでスタディ';
const DEFAULT_DESC =
  '中学生向け無料学習サイト。歴史・英語・数学をチャット形式の解説・フラッシュカード・クイズで楽しく学べます。定期テスト対策にも。';

const DIST_DIR = resolve(import.meta.dirname, '..', 'dist');

// --- データ集約 ---

interface SubjectData {
  subject: Subject;
  eras: Era[];
  topics: Topic[];
}

const subjectDataMap: Record<string, SubjectData> = {
  history: { subject: subjects.find((s) => s.id === 'history')!, eras: historyEras, topics: historyTopics },
  english: { subject: subjects.find((s) => s.id === 'english')!, eras: englishEras, topics: englishTopics },
  math: { subject: subjects.find((s) => s.id === 'math')!, eras: mathEras, topics: mathTopics },
};

// --- HTMLエスケープ ---

function esc(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// --- JSON-LD 生成 ---

interface BreadcrumbItem {
  name: string;
  path: string;
}

function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): string {
  const listItems = items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.path}`,
  }));
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: listItems,
  });
}

// --- ページ定義 ---

interface PageData {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  contentHtml: string;
}

function buildTopPage(): PageData {
  const subjectLinks = subjects
    .filter((s) => s.isAvailable)
    .map(
      (s) =>
        `<li><a href="/subjects/${s.id}/">${esc(s.name)} - ${esc(s.description)}</a></li>`,
    )
    .join('\n');

  return {
    path: '/',
    title: SITE_NAME,
    description: DEFAULT_DESC,
    breadcrumbs: [{ name: 'ホーム', path: '/' }],
    contentHtml: `
      <h1>${esc(SITE_NAME)} - 中学生のためのスマホ学習サイト</h1>
      <p>${esc(DEFAULT_DESC)}</p>
      <h2>科目一覧</h2>
      <ul>${subjectLinks}</ul>
    `,
  };
}

function buildSubjectPage(subjectId: string): PageData {
  const data = subjectDataMap[subjectId];
  if (!data) throw new Error(`Unknown subject: ${subjectId}`);
  const { subject, eras } = data;

  const gradeLabels: Record<number, string> = { 1: '中1', 2: '中2', 3: '中3' };
  const eraLinks = eras
    .map((era) => {
      const grade = era.grade ? `（${gradeLabels[era.grade] ?? ''}）` : '';
      return `<li><a href="/subjects/${subjectId}/eras/${era.id}/">${esc(era.name)}${grade} - ${esc(era.period)}</a></li>`;
    })
    .join('\n');

  return {
    path: `/subjects/${subjectId}`,
    title: `${subject.name} - 中学${subject.name}`,
    description: `中学${subject.name}を動画・フラッシュカード・クイズで楽しく学べます。定期テスト対策に最適。`,
    breadcrumbs: [
      { name: 'ホーム', path: '/' },
      { name: subject.name, path: `/subjects/${subjectId}` },
    ],
    contentHtml: `
      <h1>中学${esc(subject.name)}</h1>
      <p>中学${esc(subject.name)}をチャット形式の解説・フラッシュカード・クイズで楽しく学べます。</p>
      <h2>単元一覧</h2>
      <ul>${eraLinks}</ul>
    `,
  };
}

function buildEraPage(subjectId: string, era: Era): PageData {
  const data = subjectDataMap[subjectId];
  if (!data) throw new Error(`Unknown subject: ${subjectId}`);
  const { subject } = data;
  const topics = data.topics.filter((t) => t.eraId === era.id);

  const topicLinks = topics
    .map(
      (t) =>
        `<li><a href="/subjects/${subjectId}/eras/${era.id}/topics/${t.id}/">${esc(t.name)} - ${esc(t.subtitle)}</a></li>`,
    )
    .join('\n');

  return {
    path: `/subjects/${subjectId}/eras/${era.id}`,
    title: `${era.name} - ${subject.name}`,
    description: `${era.name}（${era.period}）のトピックをチャット解説・フラッシュカード・クイズで学べます。中学${subject.name}の定期テスト対策に。`,
    breadcrumbs: [
      { name: 'ホーム', path: '/' },
      { name: subject.name, path: `/subjects/${subjectId}` },
      { name: era.name, path: `/subjects/${subjectId}/eras/${era.id}` },
    ],
    contentHtml: `
      <h1>${esc(era.name)}</h1>
      <p>${esc(era.subtitle)} （${esc(era.period)}）</p>
      <h2>トピック一覧</h2>
      <ul>${topicLinks}</ul>
    `,
  };
}

function buildTopicPage(subjectId: string, era: Era, topic: Topic): PageData {
  const data = subjectDataMap[subjectId];
  if (!data) throw new Error(`Unknown subject: ${subjectId}`);
  const { subject } = data;

  // 説明セクションからテキストを抽出
  const explanationHtml = topic.content.explanation.sections
    .map((section) => {
      const keyPointsHtml = section.keyPoints
        ? `<ul>${section.keyPoints.map((kp) => `<li>${esc(kp)}</li>`).join('')}</ul>`
        : '';
      return `<h3>${esc(section.title)}</h3><p>${esc(section.content.substring(0, 300))}</p>${keyPointsHtml}`;
    })
    .join('\n');

  // フラッシュカードからキーワードを抽出
  const flashcardHtml =
    topic.content.flashcards.length > 0
      ? `<h2>重要用語</h2><dl>${topic.content.flashcards
          .slice(0, 10)
          .map((fc) => `<dt>${esc(fc.front)}</dt><dd>${esc(fc.back)}</dd>`)
          .join('')}</dl>`
      : '';

  // クイズの問題文を抽出
  const quizHtml =
    topic.content.quiz.questions.length > 0
      ? `<h2>確認クイズ</h2><ol>${topic.content.quiz.questions
          .slice(0, 5)
          .map((q) => `<li>${esc(q.question)}</li>`)
          .join('')}</ol>`
      : '';

  return {
    path: `/subjects/${subjectId}/eras/${era.id}/topics/${topic.id}`,
    title: `${topic.name} - ${subject.name}`,
    description: `${topic.name}（${topic.subtitle}）をチャット解説・フラッシュカード・クイズで学べます。中学${subject.name}の定期テスト対策に。`,
    breadcrumbs: [
      { name: 'ホーム', path: '/' },
      { name: subject.name, path: `/subjects/${subjectId}` },
      { name: era.name, path: `/subjects/${subjectId}/eras/${era.id}` },
      { name: topic.name, path: `/subjects/${subjectId}/eras/${era.id}/topics/${topic.id}` },
    ],
    contentHtml: `
      <h1>${esc(topic.name)}</h1>
      <p>${esc(topic.subtitle)}</p>
      <article>
        <h2>解説</h2>
        ${explanationHtml}
      </article>
      ${flashcardHtml}
      ${quizHtml}
    `,
  };
}

function buildChatPage(chat: HistoryChat): PageData {
  // チャットからテキストコンテンツを抽出
  const textParts: string[] = [];
  for (const item of chat.content.slice(0, 20)) {
    if (item.type === 'narrator') {
      // HTMLタグを除去してテキストのみ抽出
      textParts.push(item.text.replace(/<[^>]*>/g, ''));
    } else if (item.type === 'message') {
      textParts.push(item.text.replace(/<[^>]*>/g, ''));
    } else if (item.type === 'summary-point') {
      textParts.push(item.text);
    } else if (item.type === 'end') {
      textParts.push(...item.points);
    }
  }

  const contentText = textParts.slice(0, 10).map((t) => `<p>${esc(t.substring(0, 200))}</p>`).join('\n');

  return {
    path: `/chat/${chat.id}`,
    title: `${chat.title} - チャット学習`,
    description: `${chat.title}（${chat.subtitle}）をチャット形式で楽しく学べます。中学生向け無料学習サイト。`,
    breadcrumbs: [
      { name: 'ホーム', path: '/' },
      { name: chat.title, path: `/chat/${chat.id}` },
    ],
    contentHtml: `
      <h1>${esc(chat.title)}</h1>
      <p>${esc(chat.subtitle)}</p>
      <article>
        ${contentText}
      </article>
    `,
  };
}

// --- HTML生成 ---

function applyTemplate(template: string, page: PageData): string {
  const fullTitle = page.path === '/' ? SITE_NAME : `${page.title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${page.path}`;
  const jsonLd = buildBreadcrumbJsonLd(page.breadcrumbs);

  // noscriptコンテンツ（React未ロード時に表示）
  const noscriptContent = `<noscript><div style="max-width:480px;margin:0 auto;padding:16px;font-family:sans-serif">${page.contentHtml}</div></noscript>`;

  let html = template;

  // <title> を置換
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(fullTitle)}</title>`);

  // meta description を置換
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${esc(page.description)}"`,
  );

  // OGP tags を置換
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${esc(fullTitle)}"`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${esc(page.description)}"`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${esc(canonicalUrl)}"`,
  );

  // canonical URL を置換
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${esc(canonicalUrl)}"`,
  );

  // JSON-LD を挿入（</head> の前）
  html = html.replace(
    '</head>',
    `<script type="application/ld+json">${jsonLd}</script>\n</head>`,
  );

  // <div id="root"></div> 内にnoscriptコンテンツを挿入
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"></div>\n${noscriptContent}`,
  );

  return html;
}

// --- メイン処理 ---

function collectAllPages(): PageData[] {
  const pages: PageData[] = [];

  // トップページ
  pages.push(buildTopPage());

  for (const subjectId of Object.keys(subjectDataMap)) {
    const data = subjectDataMap[subjectId];

    // 科目ページ
    pages.push(buildSubjectPage(subjectId));

    // 時代ページ
    for (const era of data.eras) {
      pages.push(buildEraPage(subjectId, era));

      // トピックページ
      const topics = data.topics.filter((t) => t.eraId === era.id);
      for (const topic of topics) {
        pages.push(buildTopicPage(subjectId, era, topic));
      }
    }
  }

  // チャットページ
  const allChats = [...getAllHistoryChats(), ...getAllEnglishChats(), ...getAllMathChats()];
  for (const chat of allChats) {
    pages.push(buildChatPage(chat));
  }

  return pages;
}

function writePageFile(page: PageData, template: string): void {
  const html = applyTemplate(template, page);

  // パスに対応するファイルパスを生成
  // / → dist/index.html（スキップ、元のindex.htmlを上書きする）
  // /subjects/history → dist/subjects/history/index.html
  let filePath: string;
  if (page.path === '/') {
    filePath = resolve(DIST_DIR, 'index.html');
  } else {
    filePath = resolve(DIST_DIR, page.path.slice(1), 'index.html');
  }

  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, 'utf-8');
}

// 実行
const template = readFileSync(resolve(DIST_DIR, 'index.html'), 'utf-8');
const pages = collectAllPages();

for (const page of pages) {
  writePageFile(page, template);
}

console.log(`Prerendered: ${pages.length} pages`);
