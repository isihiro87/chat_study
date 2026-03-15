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
      {
        id: 'sci2-cc-fc6',
        front: '鉄と硫黄の実験：加熱する場所',
        back: '鉄と硫黄の混合物を加熱するとき、なぜ上部を加熱するのか？',
        explanation:
          '上部から反応を始めるため。下部を加熱すると発生した気体の逃げ場がなく、試験管が破裂する危険がある。',
      },
      {
        id: 'sci2-cc-fc7',
        front: '加熱をやめても反応が続く理由',
        back: '鉄と硫黄の化合で、加熱をやめても反応が続くのはなぜ？',
        explanation:
          '鉄と硫黄の化合は発熱反応であり、反応自体が熱を出すため、一度反応が始まると加熱をやめても反応が続く。',
      },
      {
        id: 'sci2-cc-fc8',
        front: '鉄に塩酸を加えると？',
        back: '鉄に塩酸を加えると発生する気体は？',
        explanation:
          '水素が発生する。一方、硫化鉄に塩酸を加えると硫化水素（腐卵臭）が発生する。',
      },
      {
        id: 'sci2-cc-fc9',
        front: '硫化鉄と磁石',
        back: '鉄は磁石につくが、硫化鉄はどうか？',
        explanation:
          '硫化鉄は磁石につかない。化合によって性質が変わったことを示す重要な違い。',
      },
      {
        id: 'sci2-cc-fc10',
        front: '硫化鉄の色',
        back: '硫化鉄は何色か？',
        explanation:
          '黒色。もとの鉄（灰色）や硫黄（黄色）とは異なる色になる。',
      },
      {
        id: 'sci2-cc-fc11',
        front: '銅と硫黄の化合',
        back: '銅と硫黄が化合するとできる物質と化学反応式は？',
        explanation:
          '硫化銅（CuS）ができる。化学反応式：Cu + S → CuS',
      },
      {
        id: 'sci2-cc-fc12',
        front: '水素と酸素の化合',
        back: '水素と酸素の混合気体に点火するとどうなる？',
        explanation:
          '爆発的に反応して水（H₂O）ができる。化学反応式：2H₂ + O₂ → 2H₂O',
      },
      {
        id: 'sci2-cc-fc13',
        front: '化学反応式の係数の意味',
        back: '化学反応式の係数は何を表している？',
        explanation:
          '分子の個数比を表している。例えば 2H₂ + O₂ → 2H₂O は、水素分子2個と酸素分子1個が反応して水分子2個ができることを意味する。',
      },
      {
        id: 'sci2-cc-fc14',
        front: '2Hと2H₂の違い',
        back: '2Hと2H₂はそれぞれ何を表す？',
        explanation:
          '2H＝水素原子が2個。2H₂＝水素分子が2個（水素原子は合計4個）。係数は分子全体にかかる。',
      },
      {
        id: 'sci2-cc-fc15',
        front: '鉄と硫黄の化学反応式',
        back: '鉄と硫黄の化合の化学反応式を書きなさい',
        explanation:
          'Fe + S → FeS。鉄原子1個と硫黄原子1個が結びついて硫化鉄1個ができる。係数はすべて1なので省略。',
      },
      {
        id: 'sci2-cc-fc16',
        front: '炭素の燃焼の化学反応式',
        back: '炭素が酸素と化合する化学反応式を書きなさい',
        explanation:
          'C + O₂ → CO₂。炭素原子1個と酸素分子1個が反応して二酸化炭素1個ができる。',
      },
      {
        id: 'sci2-cc-fc17',
        front: '酸化銀の分解の化学反応式',
        back: '酸化銀を加熱して分解する化学反応式を書きなさい',
        explanation:
          '2Ag₂O → 4Ag + O₂。酸化銀2個が分解して銀原子4個と酸素分子1個ができる。',
      },
      {
        id: 'sci2-cc-fc18',
        front: '炭酸水素ナトリウムの分解',
        back: '炭酸水素ナトリウムの熱分解の化学反応式を書きなさい',
        explanation:
          '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O。炭酸水素ナトリウムを加熱すると炭酸ナトリウム・二酸化炭素・水に分解される。',
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
        {
          id: 'sci2-cc-q6',
          question: '鉄と硫黄の化合実験で、加熱をやめても反応が続く理由は？',
          options: [
            '試験管に熱がたまっているから',
            '硫黄が燃え続けているから',
            '反応自体が熱を出す発熱反応だから',
            '鉄が熱を吸収しているから',
          ],
          correctIndex: 2,
          explanation:
            '鉄と硫黄の化合は発熱反応です。反応で発生する熱がまわりの混合物を反応させるため、加熱をやめても反応が続きます。',
        },
        {
          id: 'sci2-cc-q7',
          question: '鉄と硫黄の混合物と硫化鉄の性質の違いとして正しいものは？',
          options: [
            '混合物は磁石につかないが、硫化鉄はつく',
            '混合物は塩酸で硫化水素が出るが、硫化鉄は水素が出る',
            '混合物は磁石につくが、硫化鉄はつかない',
            '混合物も硫化鉄も磁石につく',
          ],
          correctIndex: 2,
          explanation:
            '混合物には鉄が含まれているので磁石につきます。硫化鉄は化合によって別の物質になったので磁石につきません。塩酸では混合物から水素、硫化鉄から硫化水素が発生します。',
        },
        {
          id: 'sci2-cc-q8',
          question: '銅の酸化を表す正しい化学反応式はどれ？',
          options: [
            'Cu + O₂ → CuO',
            '2Cu + O₂ → 2CuO',
            'Cu + O → CuO',
            'Cu₂ + O₂ → 2CuO',
          ],
          correctIndex: 1,
          explanation:
            '2Cu + O₂ → 2CuO が正しい化学反応式です。左辺：Cu=2, O=2、右辺：Cu=2, O=2 で原子の数が一致します。',
        },
        {
          id: 'sci2-cc-q9',
          question: '「2H₂」が表しているものとして正しいのは？',
          options: [
            '水素原子が2個',
            '水素分子が2個',
            '水素原子が4個の1つの分子',
            '水素分子が4個',
          ],
          correctIndex: 1,
          explanation:
            '2H₂は水素分子（H₂）が2個あることを意味します。水素原子の総数は4個です。「2H」なら水素原子が2個です。',
        },
        {
          id: 'sci2-cc-q10',
          question: '化学反応式の係数は何を表している？',
          options: [
            '原子の質量比',
            '分子の個数比',
            '原子番号',
            '反応にかかる時間',
          ],
          correctIndex: 1,
          explanation:
            '化学反応式の係数は分子（や原子）の個数比を表しています。例えば 2H₂ + O₂ → 2H₂O は水素分子2個：酸素分子1個：水分子2個の比で反応することを意味します。',
        },
        {
          id: 'sci2-cc-q11',
          question: '水素と酸素が化合して水ができる反応の逆反応は？',
          options: [
            '水を蒸発させる',
            '水を電気分解する',
            '水に食塩を溶かす',
            '水を冷却して氷にする',
          ],
          correctIndex: 1,
          explanation:
            '水の電気分解は水を水素と酸素に分解する反応で、水素と酸素の化合の逆反応にあたります。2H₂O → 2H₂ + O₂',
        },
        {
          id: 'sci2-cc-q12',
          question: '炭酸水素ナトリウムの熱分解の化学反応式として正しいものは？',
          options: [
            'NaHCO₃ → NaCO₃ + CO₂ + H₂O',
            '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O',
            'NaHCO₃ → Na₂CO₃ + 2CO₂ + H₂O',
            '2NaHCO₃ → 2NaCO₃ + CO₂ + H₂O',
          ],
          correctIndex: 1,
          explanation:
            '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O が正しい化学反応式です。左辺：Na=2, H=2, C=2, O=6、右辺：Na=2, H=2, C=2, O=6 で一致します。',
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
        {
          id: 'sci2-cc-ex2',
          question: '鉄と硫黄の化合を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応を確認',
              content: '鉄（Fe）と硫黄（S）が化合して硫化鉄（FeS）ができます。',
              highlight: 'Fe + S → FeS',
            },
            {
              title: 'Step 2: 原子の数を確認',
              content: '左辺：Fe=1, S=1。右辺：Fe=1, S=1。すでに一致しています。',
              highlight: '係数はすべて1',
            },
          ],
          answer: 'Fe + S → FeS\n（係数をつける必要なし。左右で原子の数が一致）',
        },
        {
          id: 'sci2-cc-ex3',
          question: '銅の酸化を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 化学式に置きかえる',
              content: '銅（Cu）+ 酸素（O₂）→ 酸化銅（CuO）',
              highlight: 'Cu + O₂ → CuO',
            },
            {
              title: 'Step 2: 酸素の数を合わせる',
              content: '左辺O=2、右辺O=1。CuOの係数を2にする → Cu + O₂ → 2CuO',
              highlight: '2CuO',
            },
            {
              title: 'Step 3: 銅の数を合わせる',
              content: '右辺Cu=2なので、左辺のCuの係数も2にする → 2Cu + O₂ → 2CuO',
              highlight: '2Cu + O₂ → 2CuO',
            },
          ],
          answer: '2Cu + O₂ → 2CuO\n（Cu=2, O=2で左右が一致）',
        },
        {
          id: 'sci2-cc-ex4',
          question: '酸化銀の分解を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 化学式に置きかえる',
              content: '酸化銀（Ag₂O）→ 銀（Ag）+ 酸素（O₂）',
              highlight: 'Ag₂O → Ag + O₂',
            },
            {
              title: 'Step 2: 酸素の数を合わせる',
              content: '右辺O=2なので、左辺Ag₂Oの係数を2にする → 2Ag₂O → Ag + O₂',
              highlight: '2Ag₂O',
            },
            {
              title: 'Step 3: 銀の数を合わせる',
              content: '左辺Ag=4なので、右辺Agの係数を4にする → 2Ag₂O → 4Ag + O₂',
              highlight: '2Ag₂O → 4Ag + O₂',
            },
          ],
          answer: '2Ag₂O → 4Ag + O₂\n（Ag=4, O=2で左右が一致）',
        },
        {
          id: 'sci2-cc-ex5',
          question: '炭酸水素ナトリウムの分解を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応を確認',
              content: '炭酸水素ナトリウム（NaHCO₃）→ 炭酸ナトリウム（Na₂CO₃）+ 二酸化炭素（CO₂）+ 水（H₂O）',
              highlight: 'NaHCO₃ → Na₂CO₃ + CO₂ + H₂O',
            },
            {
              title: 'Step 2: ナトリウムの数を合わせる',
              content: '右辺Na=2なので、左辺NaHCO₃の係数を2にする',
              highlight: '2NaHCO₃',
            },
            {
              title: 'Step 3: 全原子の数を確認',
              content: '左辺：Na=2, H=2, C=2, O=6。右辺：Na=2, H=2, C=2, O=6。一致！',
              highlight: '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O',
            },
          ],
          answer: '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O\n（Na=2, H=2, C=2, O=6で一致）',
        },
      ],
    },
    chatId: 'sci2-chemical-combination',
  },
};
