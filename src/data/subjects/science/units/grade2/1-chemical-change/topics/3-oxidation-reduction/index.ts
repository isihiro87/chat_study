import type { Topic } from '../../../../../../../types';

export const oxidationReduction: Topic = {
  id: 'sci2-oxidation-reduction',
  eraId: 'sci2-chemical-change',
  name: '酸素がかかわる化学変化',
  subtitle: '酸化・燃焼・還元',
  icon: '🔥',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '酸化と燃焼',
          content:
            '物質が酸素と結びつく化学変化を酸化といい、できた物質を酸化物といいます。酸化の中でも、特に熱や光を出しながら激しく酸化される現象を燃焼といいます。鉄（スチールウール）を燃やすと酸化鉄に、銅を加熱すると酸化銅に、マグネシウムを燃やすと酸化マグネシウムになります。',
          keyPoints: [
            '酸化：物質が酸素と結びつく化学変化。できた物質 = 酸化物',
            '燃焼：熱や光を出す激しい酸化',
            '金属の酸化：2Cu + O₂ → 2CuO、2Mg + O₂ → 2MgO',
            '有機物の燃焼：炭素と水素が酸化 → CO₂ + H₂O',
          ],
        },
        {
          title: '還元',
          content:
            '酸化物から酸素がうばわれる化学変化を還元といいます。酸化銅を炭素と混ぜて加熱すると、炭素が酸素をうばって二酸化炭素になり、銅が単体として残ります。酸化と還元は常に同時に起こります。',
          image: {
            src: '/images/science/oxidation-reduction.svg',
            alt: '酸化と還元は同時に起こる',
            caption: '酸化銅の炭素による還元（酸化と還元が同時に進行）',
          },
          keyPoints: [
            '還元：酸化物から酸素がうばわれる化学変化',
            '2CuO + C → 2Cu + CO₂（CuOは還元、Cは酸化）',
            '酸化と還元は常に同時に起こる',
            '応用：鉄鉱石（酸化鉄）から鉄を取り出す製鉄',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-or-slide1',
          title: '酸化と燃焼',
          slides: [
            {
              type: 'question',
              question: 'スチールウールに火をつけるとどうなる？',
              subtext: '金属も燃える！',
              emoji: '🔥',
            },
            {
              type: 'reason',
              headline: '鉄が酸素と結びついて酸化鉄になる！',
              points: [
                '酸化 = 物質が酸素と結びつく化学変化',
                '燃焼 = 熱や光を出す激しい酸化',
                '鉄 → 酸化鉄、銅 → 酸化銅、マグネシウム → 酸化マグネシウム',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '酸化', value: '酸素と結びつく', emoji: '🔥' },
                  { label: '還元', value: '酸素をうばわれる', emoji: '❄️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '酸化 = 酸素と結合。燃焼 = 激しい酸化。酸化物ができる！',
              keywords: [
                { text: '酸化', isImportant: true },
                { text: '燃焼', isImportant: true },
                { text: '酸化物' },
              ],
              nextHint: '酸化の逆「還元」について見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-or-slide2',
          title: '還元のしくみ',
          slides: [
            {
              type: 'question',
              question: '酸化銅から銅を取り出すにはどうする？',
              subtext: '還元の実験',
              emoji: '⚗️',
              image: {
                src: '/images/science/oxidation-reduction.svg',
                alt: '酸化と還元',
              },
            },
            {
              type: 'reason',
              headline: '炭素で酸素をうばって銅に戻す！',
              points: [
                '酸化銅（CuO）+ 炭素（C）→ 銅（Cu）+ 二酸化炭素（CO₂）',
                'CuOは酸素を失って還元された（銅に戻った）',
                'Cは酸素を得て酸化された（CO₂になった）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '還元と酸化は同時に起こる！製鉄にも使われている技術！',
              keywords: [
                { text: '還元', isImportant: true },
                { text: '酸化と還元は同時', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-or-fc1',
        front: '酸化',
        back: '物質が酸素と結びつく化学変化を何という？',
        explanation:
          'できた物質を酸化物という。例：2Cu + O₂ → 2CuO（酸化銅）',
      },
      {
        id: 'sci2-or-fc2',
        front: '燃焼',
        back: '熱や光を出しながら激しく酸化される現象を何という？',
        explanation:
          '燃焼は酸化の一種。木やガスが燃えるのも、マグネシウムが激しく光を出すのも燃焼。',
      },
      {
        id: 'sci2-or-fc3',
        front: '還元',
        back: '酸化物から酸素がうばわれる化学変化を何という？',
        explanation:
          '例：2CuO + C → 2Cu + CO₂。酸化銅が銅に戻る（還元）。',
      },
      {
        id: 'sci2-or-fc4',
        front: '酸化と還元の関係',
        back: '酸化と還元はどのような関係にある？',
        explanation:
          '常に同時に起こる。一方が酸化されるとき、もう一方は還元される。',
      },
      {
        id: 'sci2-or-fc5',
        front: '有機物の燃焼',
        back: '有機物を燃やすと何が発生する？',
        explanation:
          'ふくまれる炭素が酸化されて二酸化炭素、水素が酸化されて水ができる。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-or-q1',
          question: '物質が酸素と結びつく化学変化を何という？',
          options: ['還元', '分解', '酸化', '中和'],
          correctIndex: 2,
          explanation:
            '物質が酸素と結びつく化学変化を酸化といいます。できた物質を酸化物といいます。',
        },
        {
          id: 'sci2-or-q2',
          question: '銅を加熱したときにできる物質は？',
          options: ['酸化銅', '硫化銅', '塩化銅', '水酸化銅'],
          correctIndex: 0,
          explanation:
            '銅を空気中で加熱すると酸素と結びついて酸化銅（CuO）ができます。2Cu + O₂ → 2CuO',
        },
        {
          id: 'sci2-or-q3',
          question: '酸化銅を炭素と混ぜて加熱すると何が起こる？',
          options: [
            '酸化銅がさらに酸化される',
            '酸化銅が還元されて銅になる',
            '炭素が還元される',
            '何も変化しない',
          ],
          correctIndex: 1,
          explanation:
            '炭素が酸化銅から酸素をうばい、酸化銅は還元されて銅に戻ります。2CuO + C → 2Cu + CO₂',
        },
        {
          id: 'sci2-or-q4',
          question: '酸化と還元について正しいものはどれ？',
          options: [
            '酸化だけが起こることがある',
            '還元だけが起こることがある',
            '酸化と還元は常に同時に起こる',
            '酸化と還元は交互に起こる',
          ],
          correctIndex: 2,
          explanation:
            '一方の物質が酸化されるとき、もう一方の物質は必ず還元されます。酸化と還元は常に同時に起こります。',
        },
        {
          id: 'sci2-or-q5',
          question: '有機物を燃やしたとき発生するものの組み合わせは？',
          options: [
            '水素と酸素',
            '二酸化炭素と水',
            '一酸化炭素と水素',
            '窒素と水',
          ],
          correctIndex: 1,
          explanation:
            '有機物にふくまれる炭素が酸化されて二酸化炭素、水素が酸化されて水ができます。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-or-ex1',
          question:
            '酸化銅を炭素で還元する反応を化学反応式で表しなさい。また、酸化された物質と還元された物質をそれぞれ答えなさい。',
          steps: [
            {
              title: 'Step 1: 反応を確認する',
              content:
                '酸化銅（CuO）と炭素（C）を混ぜて加熱します。',
              highlight: 'CuO + C',
            },
            {
              title: 'Step 2: 生成物を考える',
              content:
                '炭素が酸化銅から酸素をうばい、銅（Cu）と二酸化炭素（CO₂）ができます。',
              highlight: 'Cu + CO₂',
            },
            {
              title: 'Step 3: 化学反応式を書く',
              content:
                '原子の数を合わせます。2CuO + C → 2Cu + CO₂',
              highlight: '2CuO + C → 2Cu + CO₂',
            },
          ],
          answer:
            '2CuO + C → 2Cu + CO₂\n酸化された物質：炭素（C → CO₂で酸素と結びついた）\n還元された物質：酸化銅（CuO → Cuで酸素を失った）',
        },
      ],
    },
    chatId: 'sci2-oxidation-reduction',
  },
};
