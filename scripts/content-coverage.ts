/**
 * コンテンツカバレッジレポートスクリプト
 * 各トピックのコンテンツ充実度を教科・学年ごとに集計して表示する。
 *
 * Usage: npx tsx scripts/content-coverage.ts
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const SUBJECTS_DIR = resolve(import.meta.dirname, '../src/data/subjects');

interface TopicInfo {
  id: string;
  eraId: string;
  name: string;
  subjectId: string;
  hasChat: boolean;
  hasFlashcards: boolean;
  hasQuiz: boolean;
  hasExamples: boolean;
  flashcardCount: number;
  quizCount: number;
}

function findTopicDirs(dir: string): string[] {
  const results: string[] = [];
  function walk(d: string) {
    for (const entry of readdirSync(d)) {
      const full = resolve(d, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
      } else if (entry === 'index.ts' && d.includes('/topics/')) {
        const parts = d.split('/');
        const topicsIdx = parts.lastIndexOf('topics');
        if (topicsIdx >= 0 && topicsIdx === parts.length - 2) {
          results.push(d);
        }
      }
    }
  }
  walk(dir);
  return results.sort();
}

function extractField(content: string, field: string): string | null {
  const re = new RegExp(`${field}:\\s*['"]([^'"]+)['"]`);
  const m = content.match(re);
  return m ? m[1] : null;
}

function countArrayItems(content: string, arrayField: string): number {
  const re = new RegExp(`${arrayField}:\\s*\\[`);
  const match = re.exec(content);
  if (!match) return 0;
  const start = match.index + match[0].length;
  let depth = 1;
  let count = 0;
  let inObject = false;
  for (let i = start; i < content.length && depth > 0; i++) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') depth--;
    else if (content[i] === '{' && depth === 1) { inObject = true; count++; }
    else if (content[i] === '}' && inObject) inObject = false;
  }
  return count;
}

function getSubjectIdFromPath(topicDir: string): string {
  const parts = topicDir.split('/');
  const subjectsIdx = parts.indexOf('subjects');
  return subjectsIdx >= 0 ? parts[subjectsIdx + 1] : 'unknown';
}

function main() {
  const topicDirs = findTopicDirs(SUBJECTS_DIR);
  const topics: TopicInfo[] = [];

  for (const dir of topicDirs) {
    const indexPath = resolve(dir, 'index.ts');
    const content = readFileSync(indexPath, 'utf-8');
    const id = extractField(content, 'id') ?? 'unknown';
    const eraId = extractField(content, 'eraId') ?? 'unknown';
    const name = extractField(content, 'name') ?? 'unknown';
    const subjectId = getSubjectIdFromPath(dir);

    let hasChat = false;
    try {
      statSync(resolve(dir, 'chat.ts'));
      hasChat = true;
    } catch { /* no chat */ }

    const hasFlashcards = /flashcards:\s*\[/.test(content);
    const hasQuiz = /questions:\s*\[/.test(content);
    const hasExamples = /examples:\s*\{/.test(content);
    const flashcardCount = countArrayItems(content, 'flashcards');
    const quizCount = countArrayItems(content, 'questions');

    topics.push({ id, eraId, name, subjectId, hasChat, hasFlashcards, hasQuiz, hasExamples, flashcardCount, quizCount });
  }

  // 教科ごとに集計
  const subjectNames: Record<string, string> = {
    history: '歴史',
    english: '英語',
    math: '数学',
    science: '理科',
    geography: '地理',
  };

  const bySubject = new Map<string, TopicInfo[]>();
  for (const t of topics) {
    const list = bySubject.get(t.subjectId) ?? [];
    list.push(t);
    bySubject.set(t.subjectId, list);
  }

  console.log('=== コンテンツカバレッジレポート ===\n');
  console.log(`トピック総数: ${topics.length}\n`);

  let totalChat = 0, totalFlash = 0, totalQuiz = 0, totalExample = 0;

  for (const [subjectId, subTopics] of bySubject) {
    const name = subjectNames[subjectId] ?? subjectId;
    const chatCount = subTopics.filter(t => t.hasChat).length;
    const flashCount = subTopics.filter(t => t.hasFlashcards).length;
    const quizCount = subTopics.filter(t => t.hasQuiz).length;
    const exampleCount = subTopics.filter(t => t.hasExamples).length;
    totalChat += chatCount; totalFlash += flashCount; totalQuiz += quizCount; totalExample += exampleCount;

    console.log(`📚 ${name} (${subTopics.length}トピック)`);
    console.log(`   チャット: ${chatCount}/${subTopics.length} (${pct(chatCount, subTopics.length)})`);
    console.log(`   フラッシュカード: ${flashCount}/${subTopics.length} (${pct(flashCount, subTopics.length)})`);
    console.log(`   クイズ: ${quizCount}/${subTopics.length} (${pct(quizCount, subTopics.length)})`);
    console.log(`   例題: ${exampleCount}/${subTopics.length} (${pct(exampleCount, subTopics.length)})`);

    // チャットなしトピックをリスト
    const noChatTopics = subTopics.filter(t => !t.hasChat);
    if (noChatTopics.length > 0 && noChatTopics.length <= 10) {
      console.log(`   ⚠️ チャットなし: ${noChatTopics.map(t => t.name).join(', ')}`);
    }
    console.log('');
  }

  console.log('--- 全体サマリー ---');
  console.log(`チャット: ${totalChat}/${topics.length} (${pct(totalChat, topics.length)})`);
  console.log(`フラッシュカード: ${totalFlash}/${topics.length} (${pct(totalFlash, topics.length)})`);
  console.log(`クイズ: ${totalQuiz}/${topics.length} (${pct(totalQuiz, topics.length)})`);
  console.log(`例題: ${totalExample}/${topics.length} (${pct(totalExample, topics.length)})`);
}

function pct(n: number, total: number): string {
  if (total === 0) return '0%';
  return `${Math.round((n / total) * 100)}%`;
}

main();
