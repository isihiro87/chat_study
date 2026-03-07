import type { Era, TopicContent } from '../types';
import type { HistoryChat } from '../history-chat/types';
import {
  eraMetas,
  topicMetas,
  contentLoaders,
  chatLoaders,
  type TopicMeta,
} from '../generated/topic-registry.generated';

// 科目別Era集約
const erasBySubject: Record<string, Era[]> = {};
for (const era of eraMetas) {
  const list = erasBySubject[era.subjectId] ?? [];
  list.push(era);
  erasBySubject[era.subjectId] = list;
}
// 各科目内でorder順にソート
for (const eras of Object.values(erasBySubject)) {
  eras.sort((a, b) => a.order - b.order);
}

// 全トピックメタデータ（科目横断）
export const allTopics: TopicMeta[] = topicMetas;

// 科目別Era取得
export function getErasBySubject(subjectId: string): Era[] {
  return erasBySubject[subjectId] ?? [];
}

// Era取得（科目横断検索）
export function getEra(eraId: string): Era | undefined {
  return eraMetas.find((e) => e.id === eraId);
}

// Era内トピック取得
export function getTopicsByEra(eraId: string): TopicMeta[] {
  return allTopics.filter((t) => t.eraId === eraId).sort((a, b) => a.order - b.order);
}

// トピックメタデータ取得（科目横断検索）
export function getTopic(topicId: string): TopicMeta | undefined {
  return allTopics.find((t) => t.id === topicId);
}

// 全トピック取得
export function getAllTopics(): TopicMeta[] {
  return allTopics;
}

// コンテンツキャッシュ
const contentCache = new Map<string, TopicContent>();
const chatCache = new Map<string, HistoryChat>();

// トピックコンテンツを非同期ロード（キャッシュ付き）
export async function loadTopicContent(topicId: string): Promise<TopicContent | undefined> {
  const cached = contentCache.get(topicId);
  if (cached) return cached;
  const loader = contentLoaders[topicId];
  if (!loader) return undefined;
  const content = await loader();
  contentCache.set(topicId, content);
  return content;
}

// チャットデータを非同期ロード（キャッシュ付き）
export async function loadChat(chatId: string): Promise<HistoryChat | undefined> {
  const cached = chatCache.get(chatId);
  if (cached) return cached;
  const loader = chatLoaders[chatId];
  if (!loader) return undefined;
  const chat = await loader();
  chatCache.set(chatId, chat);
  return chat;
}

// 複数トピックのコンテンツを並列ロード
export async function loadMultipleTopicContents(
  topicIds: string[],
): Promise<Map<string, TopicContent>> {
  const results = new Map<string, TopicContent>();
  await Promise.all(
    topicIds.map(async (id) => {
      const content = await loadTopicContent(id);
      if (content) results.set(id, content);
    }),
  );
  return results;
}

export type { TopicMeta };
