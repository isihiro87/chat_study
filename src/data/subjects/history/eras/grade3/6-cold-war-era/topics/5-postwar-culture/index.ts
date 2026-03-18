import type { Topic } from '../../../../../../../types';

export const postwarCulture: Topic = {
  id: 'postwar-culture',
  eraId: 'cold-war-era',
  name: '戦後の文化',
  subtitle: 'マスメディアと日本文化の発信',
  icon: '📺',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: 'マスメディアの発展と大衆文化',
          content:
            '戦後、マスメディアが急速に発展しました。1953年にテレビ放送が始まると、テレビは最大の娯楽メディアとなりました。手塚治虫は「鉄腕アトム」をはじめとする作品で日本の漫画・アニメ文化の基礎を築き、「漫画の神様」と呼ばれました。映画では黒澤明が世界的に高い評価を受け、日本映画の黄金期を支えました。1954年に公開された「ゴジラ」は核の恐怖を描いた怪獣映画として世界中で人気を集めました。',
          keyPoints: [
            '1953年にテレビ放送開始、最大の娯楽メディアに',
            '手塚治虫が「鉄腕アトム」で漫画・アニメ文化の基礎を築く',
            '黒澤明が世界的に評価、「ゴジラ」が世界中で人気に',
          ],
        },
        {
          title: '学術・文学の発展とインターネット',
          content:
            '1949年、湯川秀樹が日本人初のノーベル賞（物理学賞）を受賞し、戦後の日本に希望を与えました。文学では川端康成が1968年にノーベル文学賞を受賞し、日本文学を世界に広めました。20世紀後半にはインターネットが登場し、情報革命をもたらしました。コンピューター技術の発展により、社会のあらゆる分野でデジタル化が進みました。',
          keyPoints: [
            '湯川秀樹が日本人初のノーベル賞を受賞',
            '川端康成がノーベル文学賞を受賞',
            'インターネットの登場で情報革命が起こる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '手塚治虫', back: '「漫画の神様」と呼ばれ、日本の漫画・アニメ文化の基礎を築いた人物は？', difficulty: 'basic' },
      { id: 'fc2', front: '湯川秀樹', back: '1949年に日本人として初めてノーベル賞（物理学賞）を受賞した科学者は？', difficulty: 'basic' },
      { id: 'fc3', front: '川端康成', back: '1968年にノーベル文学賞を受賞した日本の作家は？', explanation: '「雪国」「伊豆の踊子」などの名作で知られる。', difficulty: 'basic' },
      { id: 'fc4', front: '黒澤明', back: '「七人の侍」「羅生門」などで世界的に高い評価を受けた日本の映画監督は？', difficulty: 'basic' },
      { id: 'fc5', front: '鉄腕アトム', back: '手塚治虫の代表作で、日本初のテレビアニメシリーズとなった作品は？', difficulty: 'standard' },
      { id: 'fc6', front: 'テレビ放送', back: '1953年に日本で始まった、戦後最大の娯楽メディアは？', difficulty: 'standard' },
      { id: 'fc7', front: 'ゴジラ', back: '1954年に公開された、核の恐怖を描いた日本の怪獣映画は？', explanation: '第五福竜丸事件を背景に制作された。', difficulty: 'standard' },
      { id: 'fc8', front: 'インターネット', back: '20世紀後半に登場し、情報革命をもたらした世界的なコンピューターネットワークは？', difficulty: 'advanced' },
      { id: 'fc9', front: '戦後日本文化の世界的影響', back: '戦後の日本文化が世界に与えた影響として代表的なものは何か？', explanation: '黒澤明の映画が世界の映画界に影響を与え、手塚治虫が築いた漫画・アニメ文化は「クールジャパン」として世界に広まった。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '「漫画の神様」と呼ばれ、「鉄腕アトム」を描いた人物は？',
          options: [
            '川端康成',
            '黒澤明',
            '湯川秀樹',
            '手塚治虫',
          ],
          correctIndex: 3,
          explanation:
            '手塚治虫は「鉄腕アトム」をはじめ多くの名作を生み出し、日本の漫画・アニメ文化の基礎を築きました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '1949年に日本人として初めてノーベル賞を受賞した人物は？',
          options: [
            '川端康成',
            '湯川秀樹',
            '黒澤明',
            '手塚治虫',
          ],
          correctIndex: 1,
          explanation:
            '湯川秀樹は中間子理論の研究により、日本人初のノーベル物理学賞を受賞しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '1968年にノーベル文学賞を受賞した日本の作家は？',
          options: [
            '夏目漱石',
            '芥川龍之介',
            '川端康成',
            '三島由紀夫',
          ],
          correctIndex: 2,
          explanation:
            '川端康成は「雪国」「伊豆の踊子」などの作品で知られ、1968年にノーベル文学賞を受賞しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '日本でテレビ放送が始まったのは何年？',
          options: [
            '1953年',
            '1949年',
            '1960年',
            '1964年',
          ],
          correctIndex: 0,
          explanation:
            '1953年にNHKと日本テレビがテレビ放送を開始し、テレビは戦後最大の娯楽メディアとなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '「七人の侍」「羅生門」などで世界的に評価された日本の映画監督は？',
          options: [
            '手塚治虫',
            '小津安二郎',
            '黒澤明',
            '宮崎駿',
          ],
          correctIndex: 2,
          explanation:
            '黒澤明は日本映画の黄金期を支え、世界の映画界に大きな影響を与えました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '1954年に公開された、核の恐怖を描いた日本の怪獣映画は？',
          options: [
            'モスラ',
            'ゴジラ',
            '鉄腕アトム',
            'ウルトラマン',
          ],
          correctIndex: 1,
          explanation:
            'ゴジラは第五福竜丸事件を背景に核の恐怖を描いた映画で、世界中で人気を集めました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'postwar-culture',
  },
};
