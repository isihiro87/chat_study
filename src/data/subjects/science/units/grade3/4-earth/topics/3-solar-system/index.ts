import type { Topic } from '../../../../../../../types';

export const solarSystemUniverse: Topic = {
  id: 'sci3-solar-system',
  eraId: 'sci3-earth',
  name: '太陽系と宇宙の広がり',
  subtitle: '地球型惑星・木星型惑星・銀河',
  icon: '🪐',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '太陽系の天体',
          content:
            '太陽系には8つの惑星があり、太陽に近い順に水星・金星・地球・火星（地球型惑星）と木星・土星・天王星・海王星（木星型惑星）に分けられます。地球型惑星は岩石でできた小型で密度が高い惑星です。木星型惑星は気体でできた大型で密度が低い惑星です。他にも小惑星やすい星などの天体があります。',
          keyPoints: [
            '地球型惑星：水星・金星・地球・火星（岩石・小型・高密度）',
            '木星型惑星：木星・土星・天王星・海王星（気体・大型・低密度）',
            '小惑星：火星と木星の間に多い小さな天体',
            'すい星：氷や塵でできた天体（尾を引く）',
          ],
          image: {
            src: '/images/science/grade3/earth/terrestrial-planets.svg',
            alt: '地球型惑星',
            caption: '水星・金星・地球・火星（小さく、密度が大きい）',
          },
        },
        {
          title: '小天体とすい星',
          content:
            '太陽系には惑星以外にもさまざまな天体があります。火星と木星の間には多数の小惑星が帯状に分布しています。すい星（彗星）は氷や塵でできた天体で、太陽に近づくと蒸発してガスや塵の尾を引きます。冥王星などは太陽系外縁天体に分類されます。',
          keyPoints: [
            '小惑星：火星と木星の間に帯状に分布',
            'すい星（彗星）：氷と塵でできた天体。太陽に近づくと尾を引く',
            '太陽系外縁天体：冥王星など太陽系の外側の天体',
          ],
        },
        {
          title: '宇宙の広がり',
          content:
            '恒星が数千億個集まった大集団を銀河といいます。太陽系が属する銀河を銀河系（天の川銀河）といい、渦巻き円盤状の形をしています。宇宙にはこのような銀河が無数に存在します。天体間の距離を表す単位として、光が1年間に進む距離を1光年、太陽と地球の平均距離を1天文単位といいます。',
          keyPoints: [
            '銀河：恒星が数千億個集まった大集団',
            '銀河系（天の川銀河）：太陽系が属する銀河（渦巻き円盤状）',
            '光年：光が1年間に進む距離',
            '天文単位：太陽と地球の平均距離',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-solar-slide-1',
          title: '惑星には2つのタイプがある！',
          slides: [
            {
              type: 'question',
              question: '地球と木星はまったく違う惑星。何が違うの？',
              subtext: '惑星の2タイプ',
              emoji: '🌍',
              image: {
                src: '/images/science/grade3/earth/terrestrial-planets.svg',
                alt: '地球型惑星',
              },
            },
            {
              type: 'reason',
              headline: '地球型は岩石で小さく、木星型は気体で大きい！',
              points: [
                '地球型惑星（水金地火）：岩石でできた小型・高密度の惑星',
                '木星型惑星（木土天海）：気体でできた大型・低密度の惑星',
                '太陽に近いほど岩石、遠いほど気体の惑星になる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '地球型', value: '岩石・小型・高密度', emoji: '🪨' },
                  { label: '木星型', value: '気体・大型・低密度', emoji: '💨' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '太陽系の惑星は「地球型」と「木星型」の2タイプ！',
              keywords: [
                { text: '地球型惑星', isImportant: true },
                { text: '木星型惑星', isImportant: true },
                { text: '水金地火' },
                { text: '木土天海' },
              ],
              nextHint: '太陽系の外には何があるの？',
            },
          ],
        },
        {
          id: 'sci3-solar-slide-2',
          title: '宇宙はどこまで広がっている？',
          slides: [
            {
              type: 'question',
              question: '太陽系の外にはいったい何があるの？',
              subtext: '宇宙の広がり',
              emoji: '🌌',
            },
            {
              type: 'reason',
              headline: '太陽系は銀河系という巨大な星の集団の一部！',
              points: [
                '恒星が数千億個集まった集団を銀河という',
                '太陽系は銀河系（天の川銀河）に属している',
                '宇宙にはこのような銀河が無数にある',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '太陽系', value: '惑星8つ', emoji: '☀️' },
                  { label: '⊂', emoji: '➡️' },
                  { label: '銀河系', value: '恒星 数千億個', emoji: '🌌' },
                  { label: '⊂', emoji: '➡️' },
                  { label: '宇宙', value: '銀河が無数', emoji: '✨' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '太陽系 ⊂ 銀河系 ⊂ 宇宙。宇宙は想像を超える広さ！',
              keywords: [
                { text: '銀河', isImportant: true },
                { text: '銀河系', isImportant: true },
                { text: '光年', isImportant: true },
                { text: '天文単位' },
              ],
            },
          ],
        },
        {
          id: 'sci3-solar-slide-3',
          title: '小天体とすい星',
          slides: [
            {
              type: 'question',
              question: '太陽系には惑星以外にも\n天体があるって知ってた？',
              subtext: '小惑星・すい星・太陽系外縁天体',
              emoji: '☄️',
            },
            {
              type: 'reason',
              headline: '小惑星やすい星も太陽系の仲間！',
              points: [
                '小惑星：火星と木星の間に帯状に分布する小さな天体',
                'すい星（彗星）：氷と塵でできた天体。太陽に近づくと尾を引く',
                '太陽系外縁天体：冥王星など、太陽系の外側にある天体',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '小惑星', value: '火星〜木星の間', emoji: '🪨' },
                  { label: 'すい星', value: '氷と塵の天体', emoji: '☄️' },
                  { label: '外縁天体', value: '冥王星など', emoji: '🌑' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '太陽系は惑星だけじゃない！\n小惑星やすい星も大事な仲間',
              keywords: [
                { text: '小惑星帯' },
                { text: 'すい星', isImportant: true },
                { text: '太陽系外縁天体' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-solar-fc1',
        front: '地球型惑星',
        back: '水星・金星・地球・火星のように、岩石でできた小型で密度が高い惑星を何という？',
        explanation: '太陽に近い4つの惑星。地表が固い。',
      },
      {
        id: 'sci3-solar-fc2',
        front: '木星型惑星',
        back: '木星・土星・天王星・海王星のように、気体でできた大型で密度が低い惑星を何という？',
        explanation: '太陽から遠い4つの惑星。地表がない。',
      },
      {
        id: 'sci3-solar-fc3',
        front: '銀河',
        back: '恒星が数千億個集まった大集団を何という？',
        explanation: '太陽系が属する銀河を銀河系（天の川銀河）という。',
      },
      {
        id: 'sci3-solar-fc4',
        front: '光年',
        back: '光が1年間に進む距離を表す単位を何という？',
        explanation: '天体間の距離を表すときに使われる。',
      },
      {
        id: 'sci3-solar-fc5',
        front: '天文単位',
        back: '太陽と地球の平均距離を1とする単位を何という？',
        explanation: '太陽系内の距離を表すときに使われる。約1.5億km。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-solar-q1',
          question: '地球型惑星の特徴として正しいものはどれか。',
          options: [
            '気体でできていて大型',
            '岩石でできていて小型で密度が高い',
            '太陽から遠い位置にある',
            '密度が低い',
          ],
          correctIndex: 1,
          explanation:
            '地球型惑星（水星・金星・地球・火星）は岩石でできた小型で密度が高い惑星です。',
        },
        {
          id: 'sci3-solar-q2',
          question: '木星型惑星に含まれないものはどれか。',
          options: ['木星', '土星', '火星', '海王星'],
          correctIndex: 2,
          explanation:
            '火星は地球型惑星です。木星型惑星は木星・土星・天王星・海王星の4つです。',
        },
        {
          id: 'sci3-solar-q3',
          question: '太陽系が属する銀河を何というか。',
          options: ['アンドロメダ銀河', '銀河系（天の川銀河）', 'マゼラン雲', '渦巻き銀河'],
          correctIndex: 1,
          explanation:
            '太陽系は銀河系（天の川銀河）に属しています。渦巻き円盤状の形をしています。',
        },
        {
          id: 'sci3-solar-q4',
          question: '光が1年間に進む距離を表す単位は何か。',
          options: ['天文単位', '光年', 'パーセク', 'キロメートル'],
          correctIndex: 1,
          explanation:
            '光年は光が1年間に進む距離を表す単位で、天体間の距離を表すときに使われます。',
        },
        {
          id: 'sci3-solar-q5',
          question: '太陽系の惑星を太陽に近い順に並べたとき、3番目にくる惑星はどれか。',
          options: ['金星', '地球', '火星', '木星'],
          correctIndex: 1,
          explanation:
            '太陽に近い順に水星・金星・地球・火星…なので、3番目は地球です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-solar-ex1',
          question:
            '地球型惑星と木星型惑星の違いを、大きさ・密度・成分の3点から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 地球型惑星の特徴',
              content:
                '地球型惑星（水星・金星・地球・火星）は岩石でできており、小型で密度が高いのが特徴です。',
              highlight: '岩石・小型・高密度',
            },
            {
              title: 'Step 2: 木星型惑星の特徴',
              content:
                '木星型惑星（木星・土星・天王星・海王星）は気体でできており、大型で密度が低いのが特徴です。',
              highlight: '気体・大型・低密度',
            },
            {
              title: 'Step 3: まとめて比較',
              content:
                '地球型惑星は岩石で小型・高密度、木星型惑星は気体で大型・低密度という対照的な特徴をもちます。',
              highlight:
                '地球型＝岩石・小型・高密度 ↔ 木星型＝気体・大型・低密度',
            },
          ],
          answer:
            '地球型惑星は岩石でできた小型で密度が高い惑星であるのに対し、木星型惑星は気体でできた大型で密度が低い惑星である。',
        },
      ],
    },
    chatId: 'sci3-solar-system',
  },
};
