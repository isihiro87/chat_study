import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarCultureChat: HistoryChat = {
  id: 'postwar-culture',
  icon: '📺',
  title: '戦後の文化',
  subtitle: '〜戦後〜 マスメディアと日本文化の発信',
  characters: [
    {
      id: 'tezuka',
      name: '手塚治虫',
      emoji: '✏️',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'reporter',
      name: '記者',
      emoji: '📰',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1949年〜1960年代',
    },
    {
      type: 'narrator',
      text: '1949年、<strong>湯川秀樹</strong>が日本人として初めてノーベル物理学賞を受賞しました。中間子理論の研究が評価され、戦後の日本に大きな希望を与えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'reporter',
      text: '湯川博士のノーベル賞受賞は日本中を歓喜させましたね！そしてテレビ放送も始まりました！',
    },
    {
      type: 'narrator',
      text: '1953年に<strong>テレビ放送</strong>が始まると、<strong>マスメディア</strong>の時代が到来しました。テレビは戦後最大の娯楽メディアとなり、国民の生活を大きく変えました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tezuka',
      text: '漫画には無限の可能性がある！「鉄腕アトム」で科学の夢と希望を子どもたちに届けたい！',
    },
    {
      type: 'narrator',
      text: '<strong>手塚治虫</strong>は「<strong>鉄腕アトム</strong>」をはじめ数多くの名作を生み出し、日本の漫画・アニメ文化の基礎を築きました。「漫画の神様」と呼ばれています。',
    },
    {
      type: 'narrator',
      text: '映画では<strong>黒澤明</strong>が「七人の侍」「羅生門」などで世界的に高い評価を受けました。1954年に公開された「<strong>ゴジラ</strong>」は核の恐怖を描き、世界中で人気を集めました。',
    },
    {
      type: 'quiz',
      question: '「漫画の神様」と呼ばれ、「鉄腕アトム」を描いた人物は？',
      options: [
        { letter: 'A', text: '黒澤明', correct: false },
        { letter: 'B', text: '手塚治虫', correct: true },
        { letter: 'C', text: '湯川秀樹', correct: false },
        { letter: 'D', text: '川端康成', correct: false },
      ],
      explanation:
        '<strong>正解はB「手塚治虫」</strong>です。「鉄腕アトム」で日本の漫画・アニメ文化の基礎を築きました。',
    },
    {
      type: 'date',
      text: '1968年〜現代',
    },
    {
      type: 'narrator',
      text: '1968年、<strong>川端康成</strong>がノーベル文学賞を受賞しました。「雪国」「伊豆の踊子」などの作品で日本文学を世界に広めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'reporter',
      text: '川端康成先生のノーベル文学賞受賞！日本の文学が世界に認められましたね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tezuka',
      text: '文学も映画も漫画も、日本の文化は世界に誇れるものだ。これからもっと発展していくだろう。',
    },
    {
      type: 'narrator',
      text: '20世紀後半には<strong>インターネット</strong>が登場し、情報革命が起こりました。コンピューター技術の発展により、社会のあらゆる分野でデジタル化が進み、人々の生活は大きく変わりました。',
    },
    {
      type: 'quiz',
      question: '1949年に日本人初のノーベル賞を受賞した人物は？',
      options: [
        { letter: 'A', text: '川端康成', correct: false },
        { letter: 'B', text: '黒澤明', correct: false },
        { letter: 'C', text: '湯川秀樹', correct: true },
        { letter: 'D', text: '手塚治虫', correct: false },
      ],
      explanation:
        '<strong>正解はC「湯川秀樹」</strong>です。中間子理論の研究で日本人初のノーベル物理学賞を受賞しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>湯川秀樹</strong>が1949年に日本人初のノーベル物理学賞を受賞',
        '1953年に<strong>テレビ放送</strong>開始、<strong>マスメディア</strong>の時代に',
        '<strong>手塚治虫</strong>が「<strong>鉄腕アトム</strong>」で漫画・アニメ文化の基礎を築く',
        '<strong>黒澤明</strong>が世界的に評価、「<strong>ゴジラ</strong>」が世界中で人気に',
        '<strong>川端康成</strong>が1968年にノーベル文学賞を受賞',
        '<strong>インターネット</strong>の登場で情報革命が起こる',
      ],
    },
  ],
};
