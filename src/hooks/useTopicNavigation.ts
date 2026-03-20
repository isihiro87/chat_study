import { useMemo } from 'react';
import { getTopic, getTopicsByEra, getErasBySubject, getEra } from '../data/subjects/registry';
import type { TopicMeta } from '../data/subjects/registry';

interface TopicNavigation {
  prevTopic: TopicMeta | null;
  nextTopic: TopicMeta | null;
  currentTopic: TopicMeta | null;
  eraId: string | null;
}

export function useTopicNavigation(topicId: string | undefined): TopicNavigation {
  return useMemo(() => {
    if (!topicId) {
      return { prevTopic: null, nextTopic: null, currentTopic: null, eraId: null };
    }

    const currentTopic = getTopic(topicId);
    if (!currentTopic) {
      return { prevTopic: null, nextTopic: null, currentTopic: null, eraId: null };
    }

    const eraId = currentTopic.eraId;
    const currentEra = getEra(eraId);
    if (!currentEra) {
      return { prevTopic: null, nextTopic: null, currentTopic, eraId };
    }

    // 同じ教科の全Eraをorder順に取得
    const allEras = getErasBySubject(currentEra.subjectId);

    // 教科全体のトピックをEra順 → トピックorder順でフラットに並べる
    const allTopicsFlat: TopicMeta[] = [];
    for (const era of allEras) {
      const topics = getTopicsByEra(era.id);
      allTopicsFlat.push(...topics);
    }

    const currentIndex = allTopicsFlat.findIndex((t) => t.id === topicId);
    if (currentIndex === -1) {
      return { prevTopic: null, nextTopic: null, currentTopic, eraId };
    }

    const prevTopic = currentIndex > 0 ? allTopicsFlat[currentIndex - 1] : null;
    const nextTopic = currentIndex < allTopicsFlat.length - 1 ? allTopicsFlat[currentIndex + 1] : null;

    return { prevTopic, nextTopic, currentTopic, eraId };
  }, [topicId]);
}
