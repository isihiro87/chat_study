import type { Topic } from '../../../../../../../types';

export const chemicalCombination: Topic = {
  id: 'sci2-chemical-combination',
  eraId: 'sci2-chemical-change',
  name: '物質どうしの化学変化',
  subtitle: '化合・化合物の性質・化学反応式',
  icon: '🧪',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '化合（異なる物質の結びつき）',
          content:
            '2種類以上の物質が結びついて、別の新しい物質ができる化学変化を化合といいます。鉄と硫黄を混ぜて加熱すると硫化鉄ができ、銅と硫黄を加熱すると硫化銅ができます。水素と酸素の混合気体に点火すると水ができます。',
          image: {
            src: '/images/science/grade2/chemical-change/iron-sulfur-reaction.svg',
            alt: '鉄と硫黄の化合',
            caption: '鉄と硫黄が化合して硫化鉄（化合物）になる',
          },
          keyPoints: [
            '鉄 + 硫黄 → 硫化鉄（Fe + S → FeS）：熱と光を出して激しく反応',
            '銅 + 硫黄 → 硫化銅（Cu + S → CuS）',
            '水素 + 酸素 → 水（2H₂ + O₂ → 2H₂O）',
            '炭素 + 酸素 → 二酸化炭素（C + O₂ → CO₂）',
          ],
        },
        {
          title: '化合物の性質',
          content:
            '化合してできた物質（化合物）は、反応前の物質とは異なる性質をもちます。例えば、硫化鉄は元の鉄や硫黄とはまったく違う性質をもっています。鉄は磁石に引きつけられますが、硫化鉄は磁石に引きつけられません。',
          keyPoints: [
            '鉄：磁石につく、塩酸で水素が発生',
            '硫化鉄：磁石につかない、塩酸で硫化水素（卵の腐った臭い）が発生',
            '化合物の性質は、もとの物質の性質とは異なる',
          ],
        },
        {
          title: '化学反応式',
          content:
            '化学式を使って化学変化の前後を表した式を化学反応式といいます。矢印（→）の左側に反応前の物質、右側に反応後の物質を書きます。左右で各原子の数が等しくなるように係数をつけます。',
          image: {
            src: '/images/science/grade2/chemical-change/chemical-equation.svg',
            alt: '化学反応式の書き方',
            caption: '3ステップで化学反応式を書く',
          },
          keyPoints: [
            '手順：日本語 → 化学式に置きかえ → 係数をつけて原子の数を合わせる',
            '例：2H₂ + O₂ → 2H₂O（水素の燃焼）',
            '例：Fe + S → FeS（鉄と硫黄の化合）',
            '左辺と右辺で各原子の数が等しくなるのがルール',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-cc-slide1',
          title: '鉄と硫黄の化合',
          slides: [
            {
              type: 'question',
              question: '鉄と硫黄を混ぜて加熱するとどうなる？',
              subtext: '化合の実験',
              emoji: '🔥',
              image: {
                src: '/images/science/grade2/chemical-change/iron-sulfur-reaction.svg',
                alt: '鉄と硫黄の化合',
              },
            },
            {
              type: 'reason',
              headline: '硫化鉄という全く別の物質ができる！',
              points: [
                '熱と光を出しながら激しく反応する',
                'できた硫化鉄（FeS）は黒色で、磁石につかない',
                '塩酸を加えると卵の腐った臭い（硫化水素）が発生',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '混合物（反応前）', value: '鉄は磁石につく', emoji: '🧲' },
                  { label: '化合物（反応後）', value: '磁石につかない', emoji: '❌' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '化合 = 2種類以上の物質が結びつく化学変化！性質が変わる！',
              keywords: [
                { text: '化合', isImportant: true },
                { text: '硫化鉄', isImportant: true },
                { text: '化合物' },
              ],
              nextHint: '化学反応式で化学変化を表してみよう！',
            },
          ],
        },
        {
          id: 'sci2-cc-slide2',
          title: '化学反応式のルール',
          slides: [
            {
              type: 'question',
              question: '化学変化を式で表すにはどうする？',
              subtext: '化学反応式の書き方',
              emoji: '📝',
              image: {
                src: '/images/science/grade2/chemical-change/chemical-equation.svg',
                alt: '化学反応式の書き方',
              },
            },
            {
              type: 'reason',
              headline: '3ステップで化学反応式を書こう！',
              points: [
                'Step1: 日本語で反応を書く（水素 + 酸素 → 水）',
                'Step2: 化学式に置きかえる（H₂ + O₂ → H₂O）',
                'Step3: 係数で原子の数を合わせる（2H₂ + O₂ → 2H₂O）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '化学反応式 = 左右で原子の数が等しくなるように書く！',
              keywords: [
                { text: '化学反応式', isImportant: true },
                { text: '係数' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-cc-fc1',
        front: '化合',
        back: '2種類以上の物質が結びついて別の物質ができる化学変化を何という？',
        explanation:
          '例：鉄 + 硫黄 → 硫化鉄、水素 + 酸素 → 水',
      },
      {
        id: 'sci2-cc-fc2',
        front: '硫化鉄の性質',
        back: '鉄と硫黄の化合でできた硫化鉄に塩酸を加えると何が発生する？',
        explanation:
          '硫化水素（卵の腐った臭いの気体）が発生する。鉄に塩酸を加えると水素が発生するのとは異なる。',
      },
      {
        id: 'sci2-cc-fc3',
        front: '化学反応式のルール',
        back: '化学反応式では、矢印の左辺と右辺で何が等しくなるようにする？',
        explanation:
          '各原子の数が等しくなるように係数をつける。原子は化学変化でなくならないし新しくできない。',
      },
      {
        id: 'sci2-cc-fc4',
        front: '水素の燃焼の化学反応式',
        back: '水素が燃焼して水ができる化学反応式を書きなさい',
        explanation:
          '2H₂ + O₂ → 2H₂O（水素原子4個、酸素原子2個で左右が一致）',
      },
      {
        id: 'sci2-cc-fc5',
        front: '化合物と混合物のちがい',
        back: '化合物はもとの物質と性質が同じか違うか？',
        explanation:
          '化合物はもとの物質とは異なる性質をもつ。混合物はそれぞれの物質の性質を保っている。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-cc-q1',
          question: '鉄と硫黄を混ぜて加熱したときにできる物質は？',
          options: ['酸化鉄', '硫化鉄', '塩化鉄', '水酸化鉄'],
          correctIndex: 1,
          explanation:
            '鉄（Fe）と硫黄（S）が化合すると硫化鉄（FeS）ができます。黒色で磁石につきません。',
        },
        {
          id: 'sci2-cc-q2',
          question: '硫化鉄に塩酸を加えたとき発生する気体は？',
          options: ['水素', '酸素', '硫化水素', '二酸化炭素'],
          correctIndex: 2,
          explanation:
            '硫化鉄に塩酸を加えると、卵の腐った臭いの硫化水素が発生します。鉄に塩酸を加えると水素が発生します。',
        },
        {
          id: 'sci2-cc-q3',
          question: '化学反応式で正しいものはどれ？',
          options: [
            'H₂ + O₂ → H₂O',
            '2H₂ + O₂ → 2H₂O',
            'H₂ + O → H₂O',
            '2H + O → H₂O',
          ],
          correctIndex: 1,
          explanation:
            '2H₂ + O₂ → 2H₂Oが正しい化学反応式です。左辺と右辺で原子の数が一致しています（H=4, O=2）。',
        },
        {
          id: 'sci2-cc-q4',
          question: '次のうち、化合はどれ？',
          options: [
            '水を電気分解して水素と酸素にする',
            '炭酸水素ナトリウムを加熱して分解する',
            '鉄と硫黄を混ぜて加熱する',
            '酸化銀を加熱して銀と酸素にする',
          ],
          correctIndex: 2,
          explanation:
            '化合は2種類以上の物質が結びつく化学変化です。鉄と硫黄が結びついて硫化鉄になるのが化合です。他は分解です。',
        },
        {
          id: 'sci2-cc-q5',
          question: '炭素が燃焼したときの化学反応式は？',
          options: [
            'C + O → CO',
            'C + O₂ → CO₂',
            '2C + O₂ → 2CO',
            'C + 2O → CO₂',
          ],
          correctIndex: 1,
          explanation:
            '炭素と酸素が結びついて二酸化炭素ができます。C + O₂ → CO₂（C=1, O=2で一致）。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-cc-ex1',
          question:
            '水素が燃焼して水ができる反応を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 日本語で反応を書く',
              content: '水素 + 酸素 → 水',
              highlight: '水素 + 酸素 → 水',
            },
            {
              title: 'Step 2: 化学式に置きかえる',
              content:
                '水素（H₂）+ 酸素（O₂）→ 水（H₂O）',
              highlight: 'H₂ + O₂ → H₂O',
            },
            {
              title: 'Step 3: 原子の数を合わせる',
              content:
                '左辺：H=2, O=2。右辺：H=2, O=1。酸素が合わないので、H₂Oの係数を2にする → 2H₂O。すると右辺H=4になるので、左辺もH₂の係数を2にする。',
              highlight: '2H₂ + O₂ → 2H₂O',
            },
          ],
          answer:
            '2H₂ + O₂ → 2H₂O\n（左辺：H=4, O=2 ＝ 右辺：H=4, O=2 で一致）',
        },
      ],
    },
    chatId: 'sci2-chemical-combination',
  },
};
