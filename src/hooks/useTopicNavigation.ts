import { useMemo } from 'react';
import { getTopic, getTopicsByEra } from '../data/subjects/history';
import type { Topic } from '../data/types';

interface TopicNavigation {
  prevTopic: Topic | null;
  nextTopic: Topic | null;
  currentTopic: Topic | null;
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
    const topicsInEra = getTopicsByEra(eraId);

    const currentIndex = topicsInEra.findIndex((t) => t.id === topicId);
    if (currentIndex === -1) {
      return { prevTopic: null, nextTopic: null, currentTopic, eraId };
    }

    const prevTopic = currentIndex > 0 ? topicsInEra[currentIndex - 1] : null;
    const nextTopic = currentIndex < topicsInEra.length - 1 ? topicsInEra[currentIndex + 1] : null;

    return { prevTopic, nextTopic, currentTopic, eraId };
  }, [topicId]);
}
