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
            src: '/images/science/grade2/chemical-change/oxidation-concept.svg',
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
                src: '/images/science/grade2/chemical-change/oxidation-concept.svg',
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
      {
        id: 'sci2-or-fc6',
        front: 'スチールウールの燃焼後の性質',
        back: 'スチールウールを燃やすと、燃焼後の物質はどのような性質になる？',
        explanation:
          'もろくなる、磁石に引きつけられにくくなる。鉄が酸化鉄に変化したため、性質が変わる。',
      },
      {
        id: 'sci2-or-fc7',
        front: '燃焼後の質量増加',
        back: 'スチールウールを酸素中で燃やすと質量はどうなる？その理由は？',
        explanation:
          '質量は増える。結びついた酸素の分だけ質量が増加するため。',
      },
      {
        id: 'sci2-or-fc8',
        front: '集気びんの水面上昇',
        back: 'スチールウールを集気びんの中で燃やすと、水面が上昇するのはなぜ？',
        explanation:
          'びんの中の酸素がスチールウールとの酸化に使われて減少し、気圧が下がるため。',
      },
      {
        id: 'sci2-or-fc9',
        front: 'マグネシウムの燃焼',
        back: 'マグネシウムを燃やすとどのような光が出て、何色の粉末ができる？',
        explanation:
          '白い光（まぶしい光）を出して燃え、白い粉末の酸化マグネシウム（MgO）ができる。',
      },
      {
        id: 'sci2-or-fc10',
        front: 'マグネシウムの燃焼の化学反応式',
        back: 'マグネシウムの燃焼を化学反応式で表しなさい。',
        explanation:
          '2Mg + O₂ → 2MgO。マグネシウム原子2個と酸素分子1個が反応して酸化マグネシウム2個ができる。',
      },
      {
        id: 'sci2-or-fc11',
        front: '銅の酸化',
        back: '銅を空気中で加熱すると何色になり、何という物質ができる？',
        explanation:
          '黒くなる。酸化銅（CuO）ができる。化学反応式：2Cu + O₂ → 2CuO',
      },
      {
        id: 'sci2-or-fc12',
        front: '銅の酸化の化学反応式',
        back: '銅の酸化を化学反応式で表しなさい。',
        explanation:
          '2Cu + O₂ → 2CuO。銅原子2個と酸素分子1個が反応して酸化銅2個ができる。',
      },
      {
        id: 'sci2-or-fc13',
        front: '炭素の燃焼の化学反応式',
        back: '炭素の燃焼を化学反応式で表しなさい。',
        explanation:
          'C + O₂ → CO₂。炭素が酸素と結びついて二酸化炭素になる。',
      },
      {
        id: 'sci2-or-fc14',
        front: '水素の燃焼の化学反応式',
        back: '水素の燃焼を化学反応式で表しなさい。',
        explanation:
          '2H₂ + O₂ → 2H₂O。水素が酸素と結びついて水になる。',
      },
      {
        id: 'sci2-or-fc15',
        front: '還元実験での石灰水の変化',
        back: '酸化銅と炭素の還元実験で、石灰水が白くにごるのはなぜ？',
        explanation:
          '酸化銅から炭素が酸素をうばい、二酸化炭素（CO₂）が発生するため。石灰水はCO₂の検出に使う。',
      },
      {
        id: 'sci2-or-fc16',
        front: '還元実験で残る物質',
        back: '酸化銅の還元実験で、試験管に残る赤い物質は何？',
        explanation:
          '銅（Cu）。酸化銅が還元されて金属の銅に戻る。赤っぽい光沢のある物質。',
      },
      {
        id: 'sci2-or-fc17',
        front: '酸化銅と水素の反応',
        back: '酸化銅と水素の反応を化学反応式で表しなさい。',
        explanation:
          'CuO + H₂ → Cu + H₂O。酸化銅が水素によって還元され、銅と水ができる。',
      },
      {
        id: 'sci2-or-fc18',
        front: '製鉄での還元',
        back: '製鉄所では鉄鉱石（酸化鉄）をどのように鉄にしている？',
        explanation:
          'コークス（炭素）を使って酸化鉄を還元し、鉄を取り出している。炭素が酸素をうばう。',
      },
      {
        id: 'sci2-or-fc19',
        front: '酸化されやすさの順番',
        back: 'マグネシウム・炭素・水素・銅を酸化されやすい順に並べなさい。',
        explanation:
          'マグネシウム ＞ 炭素 ＞ 水素 ＞ 銅。酸化されやすい物質ほど、他の物質から酸素をうばいやすい（還元力が強い）。',
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
        {
          id: 'sci2-or-q6',
          question: 'スチールウールを燃焼させた後の物質の性質として正しいものは？',
          options: [
            'やわらかくなり、磁石に強く引きつけられる',
            'もろくなり、磁石に引きつけられにくくなる',
            '硬くなり、電気をよく通すようになる',
            '性質は変わらず、色だけが変わる',
          ],
          correctIndex: 1,
          explanation:
            '鉄が酸化鉄に変化するため、もろくなり、磁石に引きつけられにくくなります。鉄とは異なる性質の物質に変わったことがわかります。',
        },
        {
          id: 'sci2-or-q7',
          question: 'マグネシウムの燃焼を化学反応式で正しく表したものは？',
          options: [
            'Mg + O₂ → MgO₂',
            '2Mg + O₂ → 2MgO',
            'Mg + O → MgO',
            'Mg₂ + O₂ → 2MgO',
          ],
          correctIndex: 1,
          explanation:
            'マグネシウム2原子と酸素分子1個が反応して、酸化マグネシウム2個ができます。2Mg + O₂ → 2MgO',
        },
        {
          id: 'sci2-or-q8',
          question: '酸化銅を炭素で還元したとき、試験管に残る赤い物質は何？',
          options: ['酸化銅', '酸化鉄', '銅', '炭素'],
          correctIndex: 2,
          explanation:
            '酸化銅（CuO）が還元されて銅（Cu）に戻ります。銅は赤っぽい光沢のある金属です。',
        },
        {
          id: 'sci2-or-q9',
          question: '酸化銅と炭素の還元実験で石灰水が白くにごる理由は？',
          options: [
            '酸素が発生したから',
            '水蒸気が発生したから',
            '二酸化炭素が発生したから',
            '水素が発生したから',
          ],
          correctIndex: 2,
          explanation:
            '炭素が酸化銅から酸素をうばい二酸化炭素（CO₂）が発生します。石灰水はCO₂に反応して白くにごります。',
        },
        {
          id: 'sci2-or-q10',
          question: '酸化銅の還元実験で、火を消す前にしなければならない操作は？',
          options: [
            '試験管を水で冷やす',
            'ガラス管を石灰水から取り出す',
            '酸化銅をさらに加える',
            '試験管のゴム栓をはずす',
          ],
          correctIndex: 1,
          explanation:
            'ガラス管を石灰水から取り出してから火を消します。先に火を消すと、石灰水が逆流して試験管が割れる危険があります。',
        },
        {
          id: 'sci2-or-q11',
          question: 'エタノールが燃焼したとき発生するものは？',
          options: [
            '水素と酸素',
            '二酸化炭素と水',
            '一酸化炭素と水素',
            '炭素と水',
          ],
          correctIndex: 1,
          explanation:
            'エタノールは有機物なので、燃焼するとふくまれる炭素→CO₂、水素→H₂Oが発生します。',
        },
        {
          id: 'sci2-or-q12',
          question: '次のうち、炭素より酸化されやすい金属はどれ？',
          options: ['銅', '鉄', 'マグネシウム', '銀'],
          correctIndex: 2,
          explanation:
            '酸化されやすさはマグネシウム ＞ 炭素 ＞ 水素 ＞ 銅 の順です。マグネシウムは炭素より酸化されやすい金属です。',
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
        {
          id: 'sci2-or-ex2',
          question:
            'マグネシウムの燃焼を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                'マグネシウム（Mg）を空気中で燃やすと、酸素（O₂）と結びつきます。',
              highlight: 'Mg + O₂',
            },
            {
              title: 'Step 2: 生成物を確認する',
              content:
                '白い粉末の酸化マグネシウム（MgO）ができます。',
              highlight: 'MgO',
            },
            {
              title: 'Step 3: 原子の数を合わせる',
              content:
                '左辺のO₂には酸素原子が2個あるので、右辺のMgOも2個必要。左辺のMgも2個にします。',
              highlight: '2Mg + O₂ → 2MgO',
            },
          ],
          answer:
            '2Mg + O₂ → 2MgO\nマグネシウムが酸素と結びついて（酸化されて）酸化マグネシウムができる。白い光を出して激しく燃える。',
        },
        {
          id: 'sci2-or-ex3',
          question:
            '銅の酸化を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                '銅（Cu）を空気中で加熱すると、酸素（O₂）と結びつきます。',
              highlight: 'Cu + O₂',
            },
            {
              title: 'Step 2: 生成物を確認する',
              content:
                '黒い粉末の酸化銅（CuO）ができます。',
              highlight: 'CuO',
            },
            {
              title: 'Step 3: 原子の数を合わせる',
              content:
                '左辺のO₂には酸素原子が2個あるので、右辺のCuOも2個必要。左辺のCuも2個にします。',
              highlight: '2Cu + O₂ → 2CuO',
            },
          ],
          answer:
            '2Cu + O₂ → 2CuO\n銅が酸素と結びついて（酸化されて）酸化銅ができる。赤い銅が黒い酸化銅に変化する。',
        },
        {
          id: 'sci2-or-ex4',
          question:
            '酸化銅と水素の反応を化学反応式で表し、酸化された物質と還元された物質をそれぞれ説明しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                '酸化銅（CuO）に水素（H₂）を通しながら加熱します。',
              highlight: 'CuO + H₂',
            },
            {
              title: 'Step 2: 生成物を考える',
              content:
                '水素が酸化銅から酸素をうばい、銅（Cu）と水（H₂O）ができます。',
              highlight: 'Cu + H₂O',
            },
            {
              title: 'Step 3: 化学反応式を書く',
              content:
                '両辺の原子の数を確認します。Cu:1個、H:2個、O:1個で合っています。',
              highlight: 'CuO + H₂ → Cu + H₂O',
            },
            {
              title: 'Step 4: 酸化と還元を見分ける',
              content:
                '酸化銅は酸素を失ったので「還元」、水素は酸素と結びついたので「酸化」されています。',
              highlight: 'CuO→還元、H₂→酸化',
            },
          ],
          answer:
            'CuO + H₂ → Cu + H₂O\n還元された物質：酸化銅（CuO → Cuで酸素を失った）\n酸化された物質：水素（H₂ → H₂Oで酸素と結びついた）\n酸化と還元は同時に起こっている。',
        },
        {
          id: 'sci2-or-ex5',
          question:
            'エタノール（C₂H₅OH）が燃焼すると何ができるか説明し、なぜそれらが発生するのか理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: エタノールの成分を確認する',
              content:
                'エタノール（C₂H₅OH）は有機物で、炭素（C）、水素（H）、酸素（O）をふくんでいます。',
              highlight: 'C₂H₅OH → C, H, O をふくむ',
            },
            {
              title: 'Step 2: 炭素が酸化される',
              content:
                'ふくまれる炭素が酸素と結びついて（酸化されて）二酸化炭素（CO₂）が発生します。',
              highlight: 'C + O₂ → CO₂',
            },
            {
              title: 'Step 3: 水素が酸化される',
              content:
                'ふくまれる水素が酸素と結びついて（酸化されて）水（H₂O）が発生します。',
              highlight: '2H₂ + O₂ → 2H₂O',
            },
          ],
          answer:
            'エタノールが燃焼すると二酸化炭素と水が発生する。\n理由：有機物にふくまれる炭素が酸化されてCO₂に、水素が酸化されてH₂Oになるため。\nこれは有機物の燃焼に共通する特徴である。',
        },
      ],
    },
    chatId: 'sci2-oxidation-reduction',
  },
};
