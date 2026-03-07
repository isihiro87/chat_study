/**
 * トピック・Eraファイルからメタデータを抽出し、軽量なレジストリを生成するスクリプト。
 * Vite dev server の初回ロード高速化のため、トピックの content を遅延読み込みにする。
 *
 * Usage: npx tsx scripts/generate-topic-registry.ts
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';

const SRC_DIR = resolve(import.meta.dirname, '../src');
const SUBJECTS_DIR = resolve(SRC_DIR, 'data/subjects');
const OUTPUT_FILE = resolve(SRC_DIR, 'data/generated/topic-registry.generated.ts');

interface TopicMetaRaw {
  id: string;
  eraId: string;
  name: string;
  subtitle: string;
  icon: string;
  order: number;
  chatId: string | null;
  hasExamples: boolean;
  indexPath: string;
  chatPath: string | null;
}

interface EraMetaRaw {
  id: string;
  subjectId: string;
  name: string;
  subtitle: string;
  period: string;
  icon: string;
  order: number;
  grade: number | null;
}

function findTopicFiles(dir: string): string[] {
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
          results.push(full);
        }
      }
    }
  }
  walk(dir);
  return results.sort();
}

function findEraIndexFiles(dir: string): string[] {
  // Era-level index files that contain Era definitions
  // These are index.ts files that are NOT in topics/ directories
  // and contain "Era = {"
  const results: string[] = [];
  function walk(d: string) {
    for (const entry of readdirSync(d)) {
      const full = resolve(d, entry);
      if (statSync(full).isDirectory()) {
        if (entry !== 'topics' && entry !== 'node_modules') {
          walk(full);
        }
      } else if (entry === 'index.ts' && !d.includes('/topics/')) {
        const content = readFileSync(full, 'utf-8');
        if (/:\s*Era\s*=\s*\{/.test(content)) {
          results.push(full);
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

function extractNumberField(content: string, field: string): number | null {
  const re = new RegExp(`${field}:\\s*(\\d+)`);
  const m = content.match(re);
  return m ? parseInt(m[1], 10) : null;
}

function extractEras(filePath: string): EraMetaRaw[] {
  const content = readFileSync(filePath, 'utf-8');
  const eras: EraMetaRaw[] = [];

  // Match each Era object definition
  const eraRegex = /(?:export\s+)?const\s+\w+:\s*Era\s*=\s*\{([^}]+)\}/g;
  let match;
  while ((match = eraRegex.exec(content)) !== null) {
    const block = match[1];
    const id = extractField(block, 'id');
    const subjectId = extractField(block, 'subjectId');
    const name = extractField(block, 'name');
    const subtitle = extractField(block, 'subtitle');
    const period = extractField(block, 'period');
    const icon = extractField(block, 'icon');
    const order = extractNumberField(block, 'order');
    const grade = extractNumberField(block, 'grade');

    if (id && subjectId && name && subtitle && period && icon && order !== null) {
      eras.push({ id, subjectId, name, subtitle, period, icon, order, grade });
    }
  }
  return eras;
}

function main() {
  const topicFiles = findTopicFiles(SUBJECTS_DIR);
  const eraFiles = findEraIndexFiles(SUBJECTS_DIR);
  const outputDir = dirname(OUTPUT_FILE);

  // Extract all eras
  const allEras: EraMetaRaw[] = [];
  for (const filePath of eraFiles) {
    allEras.push(...extractEras(filePath));
  }
  // Deduplicate by id
  const eraMap = new Map<string, EraMetaRaw>();
  for (const era of allEras) {
    eraMap.set(era.id, era);
  }
  const eras = Array.from(eraMap.values());

  // Extract all topic metadata
  const metas: TopicMetaRaw[] = [];
  for (const filePath of topicFiles) {
    const content = readFileSync(filePath, 'utf-8');
    const id = extractField(content, 'id');
    const eraId = extractField(content, 'eraId');
    const name = extractField(content, 'name');
    const subtitle = extractField(content, 'subtitle');
    const icon = extractField(content, 'icon');
    const order = extractNumberField(content, 'order');
    const chatId = extractField(content, 'chatId');
    const hasExamples = /examples:\s*\{/.test(content);

    if (!id || !eraId || !name || !subtitle || !icon || order === null) {
      console.warn(`SKIP (missing fields): ${filePath}`);
      continue;
    }

    const indexPath = './' + relative(outputDir, filePath).replace(/\\/g, '/');
    const topicDir = dirname(filePath);
    let chatPath: string | null = null;
    try {
      const chatFile = resolve(topicDir, 'chat.ts');
      statSync(chatFile);
      chatPath = './' + relative(outputDir, chatFile).replace(/\\/g, '/');
    } catch {
      // no chat.ts
    }

    metas.push({ id, eraId, name, subtitle, icon, order, chatId, hasExamples, indexPath, chatPath });
  }

  // Generate output
  const lines: string[] = [
    '// AUTO-GENERATED by scripts/generate-topic-registry.ts',
    '// Do not edit manually. Run: npx tsx scripts/generate-topic-registry.ts',
    '',
    "import type { Era, TopicContent } from '../types';",
    "import type { HistoryChat } from '../history-chat/types';",
    '',
    'export interface TopicMeta {',
    '  id: string;',
    '  eraId: string;',
    '  name: string;',
    '  subtitle: string;',
    '  icon: string;',
    '  order: number;',
    '  chatId: string | null;',
    '  hasExamples: boolean;',
    '}',
    '',
    '// All era metadata',
    'export const eraMetas: Era[] = [',
  ];

  for (const e of eras) {
    lines.push(`  { id: ${JSON.stringify(e.id)}, subjectId: ${JSON.stringify(e.subjectId)}, name: ${JSON.stringify(e.name)}, subtitle: ${JSON.stringify(e.subtitle)}, period: ${JSON.stringify(e.period)}, icon: ${JSON.stringify(e.icon)}, order: ${e.order}, grade: ${e.grade ?? 'undefined'} },`);
  }
  lines.push('];');
  lines.push('');

  lines.push('// All topic metadata (lightweight, no content)');
  lines.push('export const topicMetas: TopicMeta[] = [');
  for (const m of metas) {
    lines.push(`  { id: ${JSON.stringify(m.id)}, eraId: ${JSON.stringify(m.eraId)}, name: ${JSON.stringify(m.name)}, subtitle: ${JSON.stringify(m.subtitle)}, icon: ${JSON.stringify(m.icon)}, order: ${m.order}, chatId: ${m.chatId ? JSON.stringify(m.chatId) : 'null'}, hasExamples: ${m.hasExamples} },`);
  }
  lines.push('];');
  lines.push('');

  // Content loaders
  lines.push('// Lazy content loaders (dynamic import, not loaded until called)');
  lines.push('export const contentLoaders: Record<string, () => Promise<TopicContent>> = {');
  for (const m of metas) {
    const content = readFileSync(resolve(outputDir, m.indexPath), 'utf-8');
    const exportMatch = content.match(/export\s+const\s+(\w+)\s*:\s*Topic/);
    if (exportMatch) {
      lines.push(`  ${JSON.stringify(m.id)}: () => import(${JSON.stringify(m.indexPath)}).then(m => m.${exportMatch[1]}.content),`);
    }
  }
  lines.push('};');
  lines.push('');

  // Chat loaders
  lines.push('// Lazy chat loaders (dynamic import, not loaded until called)');
  lines.push('export const chatLoaders: Record<string, () => Promise<HistoryChat>> = {');
  for (const m of metas) {
    if (m.chatId && m.chatPath) {
      const chatContent = readFileSync(resolve(outputDir, m.chatPath), 'utf-8');
      const chatExportMatch = chatContent.match(/export\s+const\s+(\w+)\s*:\s*HistoryChat/);
      if (chatExportMatch) {
        lines.push(`  ${JSON.stringify(m.chatId)}: () => import(${JSON.stringify(m.chatPath)}).then(m => m.${chatExportMatch[1]}),`);
      }
    }
  }
  lines.push('};');
  lines.push('');

  writeFileSync(OUTPUT_FILE, lines.join('\n') + '\n');
  console.log(`Generated ${OUTPUT_FILE}`);
  console.log(`  Eras: ${eras.length}`);
  console.log(`  Topics: ${metas.length}`);
  console.log(`  Content loaders: ${metas.length}`);
  console.log(`  Chat loaders: ${metas.filter(m => m.chatId && m.chatPath).length}`);
}

main();
