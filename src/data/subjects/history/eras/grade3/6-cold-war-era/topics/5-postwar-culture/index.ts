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
      { id: 'fc5', front: '特需景気', back: '朝鮮戦争でアメリカ軍の軍需物資を日本企業が大量生産し、経済が潤ったことを何という？', difficulty: 'basic' },
      { id: 'fc6', front: 'テレビ放送', back: '1953年に日本で始まった、戦後最大の娯楽メディアは？', difficulty: 'basic' },
      { id: 'fc7', front: '食糧不足', back: '終戦直後の日本が直面した、国民生活の最大の問題は？', difficulty: 'basic' },
      { id: 'fc8', front: '鉄腕アトム', back: '手塚治虫の代表作で、1963年に放送された日本初の本格的テレビアニメは？', difficulty: 'standard' },
      { id: 'fc9', front: 'ゴジラ', back: '1954年に公開された、核の恐怖を描いた日本の怪獣映画は？', explanation: '第五福竜丸事件を背景に制作された。', difficulty: 'standard' },
      { id: 'fc10', front: '大江健三郎', back: '日本人として2人目のノーベル文学賞を受賞した作家は？', difficulty: 'standard' },
      { id: 'fc11', front: '中間子理論', back: '湯川秀樹がノーベル物理学賞を受賞した研究は？', difficulty: 'standard' },
      { id: 'fc12', front: '引きあげ', back: '終戦後、海外から多くの日本人が帰国したことを何という？', difficulty: 'standard' },
      { id: 'fc13', front: '大衆消費社会', back: '高度経済成長期に国民の所得が増加し、消費が活発になった社会を何という？', difficulty: 'standard' },
      { id: 'fc14', front: 'ラジオ', back: 'テレビが普及する前に、家庭の主要な娯楽・情報メディアだったものは？', difficulty: 'standard' },
      { id: 'fc15', front: '羅生門', back: '黒澤明の代表作で、ヴェネツィア国際映画祭で金獅子賞を受賞した作品は？', difficulty: 'standard' },
      { id: 'fc16', front: '鉱工業生産の低下', back: '終戦直後の日本の鉱工業生産は日中戦争直前と比べてどのくらいだったか？', explanation: '約3分の1まで落ち込んでいた。', difficulty: 'standard' },
      { id: 'fc17', front: 'インターネット', back: '20世紀後半に登場し、情報革命をもたらした世界的なコンピューターネットワークは？', difficulty: 'advanced' },
      { id: 'fc18', front: '戦後日本文化の世界的影響', back: '戦後の日本文化が世界に与えた影響として代表的なものは何か？', explanation: '黒澤明の映画が世界の映画界に影響を与え、手塚治虫が築いた漫画・アニメ文化は「クールジャパン」として世界に広まった。', difficulty: 'advanced' },
      { id: 'fc19', front: 'ゴジラの時代背景', back: '映画「ゴジラ」が制作された背景にある出来事は？', explanation: '1954年の第五福竜丸事件（アメリカの水爆実験による被ばく）。広島・長崎の経験と合わせ、核への恐怖を表現した。', difficulty: 'advanced' },
      { id: 'fc20', front: '湯川秀樹のノーベル賞の意義', back: '1949年の湯川秀樹のノーベル賞受賞が戦後日本にとって持った意味は？', explanation: '敗戦で自信を失った国民に希望と誇りを与え、日本の学術研究が世界水準であることを証明した。', difficulty: 'advanced' },
      { id: 'fc21', front: '漫画の神様', back: '手塚治虫が「漫画の神様」と呼ばれた理由は？', explanation: 'ストーリー性の高い漫画表現を確立し、数多くの名作を生み出して日本の漫画・アニメ文化の基礎を築いたため。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '「漫画の神様」と呼ばれ、「鉄腕アトム」を描いた人物は？',
          options: [
            '川端康成',
            '手塚治虫',
            '黒澤明',
            '湯川秀樹',
],
          correctIndex: 1,
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
            '黒澤明',
            '手塚治虫',
            '湯川秀樹',
],
          correctIndex: 3,
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
          question: '朝鮮戦争でアメリカ軍の物資を生産して日本経済が潤ったことを何という？',
          options: ['高度経済成長', '特需景気', 'バブル景気', '神武景気'],
          correctIndex: 1,
          explanation:
            '特需景気は朝鮮戦争でアメリカ軍の軍需物資を日本企業が大量に受注して経済が潤ったことです。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '終戦直後の日本が直面した最大の生活問題は？',
          options: ['通信の遮断', '食糧不足', '交通の麻痺', '住宅不足'],
          correctIndex: 1,
          explanation:
            '終戦直後の日本は深刻な食糧不足に直面し、鉱工業生産も日中戦争直前の約3分の1にまで低下していました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '1953年に日本で始まった、戦後最大の娯楽メディアは？',
          options: ['テレビ', 'ラジオ', '映画', '新聞'],
          correctIndex: 0,
          explanation:
            '1953年にテレビ放送が始まり、テレビは戦後最大の娯楽メディアとなりました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question:
            '日本でテレビ放送が始まったのは何年？',
          options: [
            '1949年',
            '1960年',
            '1964年',
            '1953年',
],
          correctIndex: 3,
          explanation:
            '1953年にNHKと日本テレビがテレビ放送を開始し、テレビは戦後最大の娯楽メディアとなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question:
            '「七人の侍」「羅生門」などで世界的に評価された日本の映画監督は？',
          options: [
            '手塚治虫',
            '小津安二郎',
            '宮崎駿',
            '黒澤明',
],
          correctIndex: 3,
          explanation:
            '黒澤明は日本映画の黄金期を支え、世界の映画界に大きな影響を与えました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question:
            '1954年に公開された、核の恐怖を描いた日本の怪獣映画は？',
          options: [
            'ゴジラ',
            'モスラ',
            '鉄腕アトム',
            'ウルトラマン',
],
          correctIndex: 0,
          explanation:
            'ゴジラは第五福竜丸事件を背景に核の恐怖を描いた映画で、世界中で人気を集めました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '1963年に放送された日本初の本格的テレビアニメは？',
          options: [
            'ドラえもん',
            'サザエさん',
            '鉄腕アトム',
            '鉄人28号',
],
          correctIndex: 2,
          explanation:
            '手塚治虫原作の「鉄腕アトム」が1963年に放送され、日本初の本格的テレビアニメとなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '日本人として2人目のノーベル文学賞を受賞した作家は？',
          options: [
            '三島由紀夫',
            '大江健三郎',
            '村上春樹',
            '谷崎潤一郎',
],
          correctIndex: 1,
          explanation:
            '大江健三郎は川端康成に続いて日本人として2人目のノーベル文学賞を受賞しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '湯川秀樹がノーベル物理学賞を受賞した研究は？',
          options: [
            '中間子理論',
            '相対性理論',
            '量子力学',
            '核分裂理論',
],
          correctIndex: 0,
          explanation:
            '湯川秀樹は中間子理論の研究により、1949年にノーベル物理学賞を受賞しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '終戦直後の日本の鉱工業生産は日中戦争直前の約何分の1だったか？',
          options: ['約2分の1', '約5分の1', '約10分の1', '約3分の1'],
          correctIndex: 3,
          explanation:
            '終戦直後の日本の鉱工業生産は日中戦争直前の約3分の1にまで落ち込んでいました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '映画「ゴジラ」の制作背景にある出来事は？',
          options: [
            '東京大空襲',
            '関東大震災',
            '第五福竜丸事件',
            '沖縄戦',
          ],
          correctIndex: 2,
          explanation:
            '「ゴジラ」は1954年の第五福竜丸事件（アメリカの水爆実験による被ばく）を背景に制作されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '湯川秀樹のノーベル賞受賞が戦後日本にとって持った意義は？',
          options: [
            '敗戦で自信を失った国民に希望と誇りを与えた',
            '日本の軍事力を世界に示した',
            '日本の経済力を世界にアピールした',
            '日本の政治改革を促進した',
],
          correctIndex: 0,
          explanation:
            '湯川秀樹のノーベル賞受賞は、敗戦で自信を失った日本国民に希望と誇りを与えました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '手塚治虫が日本文化に与えた影響として最も適切なのは？',
          options: [
            '日本映画を世界に広めた',
            'ノーベル文学賞の受賞に貢献した',
            '日本の漫画・アニメ文化の基礎を築いた',
            'テレビ放送の開始に貢献した',
          ],
          correctIndex: 2,
          explanation:
            '手塚治虫はストーリー性の高い漫画表現を確立し、「鉄腕アトム」で日本初のテレビアニメを実現するなど、漫画・アニメ文化の基礎を築きました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: 'テレビの普及が戦後日本社会に与えた影響として正しいのは？',
          options: [
            '全国共通の大衆文化が形成された',
            '地域ごとの文化の違いが拡大した',
            '読書人口が増加した',
            '映画産業がさらに発展した',
],
          correctIndex: 0,
          explanation:
            'テレビの普及により全国の家庭に同じ情報や娯楽が届くようになり、全国共通の大衆文化が形成されました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'postwar-culture',
  },
};
