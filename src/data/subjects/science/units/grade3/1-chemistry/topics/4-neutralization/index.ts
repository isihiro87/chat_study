import type { Topic } from '../../../../../../../types';

export const neutralization: Topic = {
  id: 'sci3-neutralization',
  eraId: 'sci3-chemistry',
  name: '中和反応',
  subtitle: '中和のしくみ・塩（えん）・さまざまな中和',
  icon: '🧂',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '中和と塩（えん）',
          content:
            '酸性の水溶液とアルカリ性の水溶液を混ぜると、H⁺とOH⁻が結びついてH₂O（水）ができます。この反応を中和といいます。中和では水と同時に塩（えん）もできます。中和反応は発熱反応で、混ぜると温度が上がります。',
          image: {
            src: '/images/science/grade3/chemistry/neutralization.svg',
            alt: '中和反応の模式図',
            caption: 'HCl + NaOH → NaCl + H₂O',
          },
          keyPoints: [
            '中和：H⁺ + OH⁻ → H₂O（酸とアルカリが打ち消し合う）',
            '塩（えん）：酸の陰イオンとアルカリの陽イオンが結びついた物質',
            '中和は発熱反応（温度が上がる）',
            'BTB溶液の色変化：黄色（酸性）→緑色（中性）→青色（アルカリ性）',
          ],
        },
        {
          title: 'さまざまな中和反応',
          content:
            '中和反応は酸とアルカリの組み合わせによってさまざまな塩ができます。硫酸バリウム（BaSO₄）は水に溶けにくい塩で、白い沈殿になります。石灰水に二酸化炭素を通すと白くにごるのは、炭酸カルシウム（CaCO₃）の沈殿ができるためです。',
          keyPoints: [
            'HCl + NaOH → NaCl（塩化ナトリウム）+ H₂O',
            'HNO₃ + KOH → KNO₃（硝酸カリウム）+ H₂O',
            'H₂SO₄ + Ba(OH)₂ → BaSO₄（硫酸バリウム・白い沈殿）+ 2H₂O',
            'H₂CO₃ + Ca(OH)₂ → CaCO₃（炭酸カルシウム・白い沈殿）+ 2H₂O',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-neut-slide1',
          title: '中和反応のひみつ',
          slides: [
            {
              type: 'question',
              question: '塩酸と水酸化ナトリウム水溶液を混ぜると、食塩ができるって本当？',
              subtext: '中和と塩（えん）',
              emoji: '🧂',
              image: {
                src: '/images/science/grade3/chemistry/neutralization.svg',
                alt: '中和反応の模式図',
              },
            },
            {
              type: 'reason',
              headline: '本当！H⁺とOH⁻が水になり、残りが塩（えん）になる！',
              points: [
                'HCl + NaOH → NaCl + H₂O',
                'H⁺とOH⁻が結合して水ができる（中和）',
                'Na⁺とCl⁻が結合して塩化ナトリウム（食塩）ができる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '中和 = 酸のH⁺ + アルカリのOH⁻ → 水 + 塩（えん）！',
              keywords: [
                { text: '中和', isImportant: true },
                { text: '塩（えん）', isImportant: true },
                { text: '発熱反応' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-neut-fc1',
        front: '中和',
        back: '酸性の水溶液とアルカリ性の水溶液を混ぜたとき、H⁺とOH⁻が結びついて水ができる反応を何という？',
        explanation: 'H⁺ + OH⁻ → H₂O。中和は発熱反応でもある。',
      },
      {
        id: 'sci3-neut-fc2',
        front: '塩（えん）',
        back: '中和反応で水とともにできる、酸の陰イオンとアルカリの陽イオンが結びついた物質を何という？',
        explanation: '例：HCl + NaOH → NaCl（塩）+ H₂O',
      },
      {
        id: 'sci3-neut-fc3',
        front: '硫酸バリウム（BaSO₄）…水に溶けない白い沈殿',
        back: '硫酸と水酸化バリウムの中和でできる塩は？',
        explanation: 'H₂SO₄ + Ba(OH)₂ → BaSO₄↓ + 2H₂O',
      },
      {
        id: 'sci3-neut-fc4',
        front: '硝酸カリウム（KNO₃）',
        back: '硝酸と水酸化カリウムの中和でできる塩は？',
        explanation: 'HNO₃ + KOH → KNO₃ + H₂O',
      },
      {
        id: 'sci3-neut-fc5',
        front: '炭酸カルシウム（CaCO₃）…白い沈殿',
        back: '石灰水に二酸化炭素を通すと白くにごる。この白い沈殿は何？',
        explanation: 'H₂CO₃ + Ca(OH)₂ → CaCO₃↓ + 2H₂O。石灰水が白くにごる正体。',
      },
      {
        id: 'sci3-neut-fc6',
        front: '塩化ナトリウム（NaCl）＝食塩',
        back: '塩酸と水酸化ナトリウムの中和でできる塩は？',
        explanation: 'HCl + NaOH → NaCl + H₂O',
      },
      {
        id: 'sci3-neut-fc7',
        front: '発熱反応',
        back: '中和反応は発熱反応？吸熱反応？',
        explanation: '中和反応は発熱反応で、混ぜると温度が上がる。',
      },
      {
        id: 'sci3-neut-fc8',
        front: '黄色（酸性）→緑色（中性）→青色（アルカリ性）',
        back: 'BTB溶液を加えた塩酸にNaOHを加えていくと、色はどう変化する？',
        explanation: '中和が進むとH⁺が減り、BTBの色が変化する。緑色になったら中性。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-neut-q1',
          question: '中和反応でH⁺とOH⁻が結びついてできる物質は？',
          options: ['塩化ナトリウム', '水', '塩素', '水素'],
          correctIndex: 1,
          explanation:
            '中和反応ではH⁺ + OH⁻ → H₂O（水）ができます。同時に塩（えん）もできます。',
        },
        {
          id: 'sci3-neut-q2',
          question: '塩酸（HCl）と水酸化ナトリウム（NaOH）の中和でできる塩（えん）は？',
          options: ['塩化カリウム', '硫酸ナトリウム', '塩化ナトリウム', '炭酸ナトリウム'],
          correctIndex: 2,
          explanation:
            'HCl + NaOH → NaCl + H₂O。塩酸のCl⁻と水酸化ナトリウムのNa⁺が結びついて塩化ナトリウム（食塩）ができます。',
        },
        {
          id: 'sci3-neut-q3',
          question: '硫酸と水酸化バリウムの中和でできる白い沈殿は？',
          options: ['塩化ナトリウム', '硝酸カリウム', '硫酸バリウム', '炭酸カルシウム'],
          correctIndex: 2,
          explanation:
            'H₂SO₄ + Ba(OH)₂ → BaSO₄ + 2H₂O。硫酸バリウム（BaSO₄）は水に溶けない塩で、白い沈殿になります。',
        },
        {
          id: 'sci3-neut-q4',
          question: '硝酸（HNO₃）と水酸化カリウム（KOH）の中和でできる塩は？',
          options: ['塩化カリウム', '硝酸カリウム', '硫酸カリウム', '炭酸カリウム'],
          correctIndex: 1,
          explanation:
            'HNO₃ + KOH → KNO₃ + H₂O。硝酸のNO₃⁻とカリウムのK⁺が結びついて硝酸カリウムができます。',
        },
        {
          id: 'sci3-neut-q5',
          question:
            'BTB溶液を加えた塩酸に水酸化ナトリウム水溶液を少しずつ加えると、色はどう変化する？',
          options: [
            '青色→緑色→黄色',
            '黄色→緑色→青色',
            '赤色→緑色→青色',
            '黄色→赤色→青色',
          ],
          correctIndex: 1,
          explanation:
            '最初は酸性で黄色。NaOHを加えていくと中性の緑色になり、さらに加えるとアルカリ性の青色になります。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-neut-ex1',
          question:
            '塩酸（HCl）と水酸化ナトリウム（NaOH）の中和反応を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                '酸は塩酸（HCl）、アルカリは水酸化ナトリウム（NaOH）です。',
              highlight: 'HCl + NaOH',
            },
            {
              title: 'Step 2: 中和で水ができることを思い出す',
              content:
                '中和反応ではH⁺とOH⁻が結びついてH₂O（水）ができます。',
              highlight: 'H⁺ + OH⁻ → H₂O',
            },
            {
              title: 'Step 3: 残りのイオンが塩（えん）になる',
              content:
                'Na⁺とCl⁻が結びついてNaCl（塩化ナトリウム）ができます。全体の化学反応式を書きましょう。',
              highlight: 'HCl + NaOH → NaCl + H₂O',
            },
          ],
          answer: 'HCl + NaOH → NaCl + H₂O\n（塩酸と水酸化ナトリウムの中和で、塩化ナトリウムと水ができる）',
        },
        {
          id: 'sci3-neut-ex2',
          question:
            '硫酸(H₂SO₄)と水酸化バリウム(Ba(OH)₂)の中和反応の化学反応式を書き、できる塩の名称を答えなさい。',
          steps: [
            {
              title: 'Step 1: 中和の基本を確認する',
              content:
                '中和反応では、酸のH⁺とアルカリのOH⁻が結びついてH₂O（水）ができます。',
              highlight: '中和: H⁺ + OH⁻ → H₂O',
            },
            {
              title: 'Step 2: 硫酸の電離を書く',
              content:
                '硫酸（H₂SO₄）は水に溶けるとH⁺を2つとSO₄²⁻を生じます。',
              highlight: 'H₂SO₄ → 2H⁺ + SO₄²⁻',
            },
            {
              title: 'Step 3: 水酸化バリウムの電離を書く',
              content:
                '水酸化バリウム（Ba(OH)₂）は水に溶けるとBa²⁺とOH⁻を2つ生じます。',
              highlight: 'Ba(OH)₂ → Ba²⁺ + 2OH⁻',
            },
            {
              title: 'Step 4: 塩（えん）を特定する',
              content:
                '酸の陰イオンSO₄²⁻とアルカリの陽イオンBa²⁺が結びついて、硫酸バリウム（BaSO₄）ができます。',
              highlight: 'SO₄²⁻ + Ba²⁺ → BaSO₄（硫酸バリウム）',
            },
            {
              title: 'Step 5: 水の生成を確認する',
              content:
                'H⁺が2つ、OH⁻が2つあるので、水は2分子できます。',
              highlight: '2H⁺ + 2OH⁻ → 2H₂O',
            },
            {
              title: 'Step 6: 化学反応式をまとめる',
              content:
                '反応全体をまとめます。硫酸バリウムは水に溶けにくい塩であるため、白い沈殿として現れるのが特徴です。',
              highlight: 'H₂SO₄ + Ba(OH)₂ → BaSO₄ + 2H₂O',
            },
          ],
          answer:
            '化学反応式: H₂SO₄ + Ba(OH)₂ → BaSO₄ + 2H₂O\nできる塩の名称: 硫酸バリウム（水に溶けにくく、白い沈殿になる）',
        },
        {
          id: 'sci3-neut-ex3',
          question:
            'うすい塩酸にBTB溶液を加えて黄色の水溶液をつくり、水酸化ナトリウム水溶液を少しずつ加えていった。水溶液が緑色になったところで水を蒸発させると白い固体が残った。(1)緑色になったときの水溶液の性質、(2)白い固体の名称と化学式を答えなさい。',
          steps: [
            {
              title: 'Step 1: 最初の状態を確認する',
              content:
                'BTB溶液を加えた塩酸は黄色です。BTB溶液が黄色ということは、水溶液が酸性であることを示しています（塩酸のH⁺が多い状態）。',
              highlight: 'BTB黄色 = 酸性（H⁺が多い）',
            },
            {
              title: 'Step 2: NaOHを加えたときの中和を理解する',
              content:
                '水酸化ナトリウム水溶液を加えると、H⁺とOH⁻が結びついてH₂O（水）ができる中和反応が進みます。',
              highlight: 'H⁺ + OH⁻ → H₂O（中和が進行）',
            },
            {
              title: 'Step 3: 緑色の意味を読み取る',
              content:
                'BTB溶液が緑色になったということは、水溶液が中性になったことを意味します。H⁺とOH⁻がちょうど過不足なく反応した状態です。',
              highlight: 'BTB緑色 = 中性',
            },
            {
              title: 'Step 4: 水溶液中に残ったイオンを考える',
              content:
                '中和でH⁺とOH⁻は水になりました。水溶液中には、塩酸由来のCl⁻と水酸化ナトリウム由来のNa⁺が残っています。',
              highlight: '残ったイオン: Na⁺ と Cl⁻',
            },
            {
              title: 'Step 5: 水を蒸発させた結果を考える',
              content:
                '水を蒸発させると、Na⁺とCl⁻が結びついて塩化ナトリウム（NaCl）＝食塩の白い固体が残ります。',
              highlight: 'Na⁺ + Cl⁻ → NaCl（塩化ナトリウム）',
            },
            {
              title: 'Step 6: 反応全体をまとめる',
              content:
                '塩酸と水酸化ナトリウムの中和反応全体を化学反応式で表すと、HCl + NaOH → NaCl + H₂Oとなります。',
              highlight: 'HCl + NaOH → NaCl + H₂O',
            },
          ],
          answer:
            '(1) 緑色のときの水溶液の性質: 中性\n(2) 白い固体の名称: 塩化ナトリウム（食塩）、化学式: NaCl',
        },
      ],
    },
    chatId: 'sci3-neutralization',
  },
};
