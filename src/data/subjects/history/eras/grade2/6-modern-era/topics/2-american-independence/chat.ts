import type { HistoryChat } from '../../../../../../../history-chat/types';

export const americanIndependenceChat: HistoryChat = {
  id: 'american-independence',
  icon: '🗽',
  title: 'アメリカの独立革命',
  subtitle: '〜近代〜 新しい国の誕生',
  characters: [
    {
      id: 'colonist',
      name: '植民地人',
      emoji: '🎩',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'washington',
      name: 'ワシントン',
      emoji: '⭐',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '18世紀後半のアメリカ',
    },
    {
      type: 'narrator',
      text: 'イギリスの植民地だったアメリカでは、本国の厳しい支配への不満が高まっていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'colonist',
      text: '代表なくして課税なし！自分たちの代表がいない議会が税金をかけるのはおかしい！',
    },
    {
      type: 'narrator',
      text: '植民地の人々は、イギリス議会に代表を送れないのに税金を課されることに猛反発しました。',
    },
    {
      type: 'quiz',
      question: 'アメリカ植民地の人々が掲げたスローガンは？',
      options: [
        { letter: 'A', text: '王権神授説', correct: false },
        { letter: 'B', text: '自由・平等・友愛', correct: false },
        { letter: 'C', text: '万人は平等', correct: false },
        { letter: 'D', text: '代表なくして課税なし', correct: true },
      ],
      explanation:
        '<strong>正解はD「代表なくして課税なし」</strong>です。自分たちの代表がいない議会の課税に反対するスローガンでした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'washington',
      text: '私が総司令官として独立軍を率いよう',
    },
    {
      type: 'narrator',
      text: '1775年、<strong>ワシントン</strong>を総司令官として<strong>独立戦争</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'colonist',
      text: 'すべての人間は平等につくられ、生命、自由、幸福を追求する権利を持つ！',
    },
    {
      type: 'narrator',
      text: '1776年、<strong>独立宣言</strong>が発表されました。ロックの思想に基づく理念は、世界に大きな影響を与えました。',
    },
    {
      type: 'quiz',
      question: '「すべての人間は平等」という理念を掲げた文書は？',
      options: [
        { letter: 'A', text: '権利章典', correct: false },
        { letter: 'B', text: '人権宣言', correct: false },
        { letter: 'C', text: '独立宣言', correct: true },
        { letter: 'D', text: '合衆国憲法', correct: false },
      ],
      explanation:
        '<strong>正解はC「独立宣言」</strong>です。1776年にアメリカで発表され、民主主義の理念を世界に広めました。',
    },
    {
      type: 'end',
      points: [
        '<strong>「代表なくして課税なし」</strong>：植民地の人々の反発',
        '<strong>ワシントン</strong>：独立戦争の総司令官、初代大統領',
        '<strong>独立宣言</strong>（1776年）：「すべての人間は平等」',
        'ロックの思想が独立運動に大きな影響',
      ],
    },
  ],
};
