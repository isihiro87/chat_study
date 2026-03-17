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
      {
        id: 'sci3-neut-fc9',
        front: 'H⁺が減っていく（OH⁻と反応して水になる）',
        back: '塩酸にNaOH水溶液を加えていくと、H⁺の数はどうなる？',
        explanation: 'H⁺はOH⁻と結びついて水になるため、NaOHを加えるほどH⁺は減っていく。',
      },
      {
        id: 'sci3-neut-fc10',
        front: 'Na⁺が増え、Cl⁻は変わらず、H⁺が減る→中性でH⁺=0→OH⁻が増える',
        back: '塩酸にNaOHを加えていくとき、イオンの数はどう変化する？',
        explanation: '中和の進行でH⁺が消費され、NaOHからNa⁺とOH⁻が供給される。中性を超えるとOH⁻が余る。',
      },
      {
        id: 'sci3-neut-fc11',
        front: 'H₂CO₃ + Ca(OH)₂ → CaCO₃ + 2H₂O',
        back: '炭酸と水酸化カルシウムの中和の化学反応式を書け',
        explanation: '石灰水が白くにごるのは、この中和反応で炭酸カルシウムの沈殿ができるため。',
      },
      {
        id: 'sci3-neut-fc12',
        front: '変化しない（H⁺がないため反応しない）',
        back: 'ちょうど中性になった水溶液にマグネシウムリボンを入れるとどうなる？',
        explanation: '中性ではH⁺がすべてOH⁻と反応して水になっているため、マグネシウムは反応しない。',
      },
      {
        id: 'sci3-neut-fc13',
        front: '白い沈殿ができる（水に溶けない塩）',
        back: '硫酸バリウムや炭酸カルシウムが中和でできるとどうなる？',
        explanation: 'BaSO₄やCaCO₃は水に溶けにくい塩なので、白い沈殿として現れる。',
      },
      {
        id: 'sci3-neut-fc14',
        front: 'Cl⁻（塩化物イオン）…中和の前後で数が変わらない',
        back: '塩酸とNaOHの中和で、最初から最後まで数が変化しないイオンは？',
        explanation: 'Cl⁻はH⁺やOH⁻と反応しないため、中和の過程で数は変わらない。',
      },
      {
        id: 'sci3-neut-fc15',
        front: 'Ba²⁺がすべて反応すると沈殿は増えなくなる',
        back: '硫酸に水酸化バリウムを加え続けると、沈殿の量はどうなる？',
        explanation: 'Ba²⁺とSO₄²⁻が反応して沈殿するが、一方がなくなると沈殿は増えなくなる。',
      },
      {
        id: 'sci3-neut-fc16',
        front: 'H₂SO₄ + Ba(OH)₂ → BaSO₄ + 2H₂O',
        back: '硫酸と水酸化バリウムの中和の化学反応式を書け',
        explanation: 'BaSO₄は白い沈殿になる。水は2分子できる（H⁺が2つ、OH⁻が2つ）。',
      },
      { id: 'sci3-neut-fc17', front: 'H⁺ + OH⁻ → H₂O', back: '中和反応の本質をイオンの式で表すと？' },
      { id: 'sci3-neut-fc18', front: 'HCl + NaOH → NaCl + H₂O', back: '塩酸と水酸化ナトリウムの中和の化学反応式を書け' },
      { id: 'sci3-neut-fc19', front: '酸の陰イオンとアルカリの陽イオンが結びつく', back: '中和で塩（えん）ができるしくみは？' },
      { id: 'sci3-neut-fc20', front: '温度が上がる', back: '中和反応が起きたとき、水溶液の温度はどうなる？' },
      { id: 'sci3-neut-fc21', front: '硫酸ナトリウム（Na₂SO₄）', back: '硫酸と水酸化ナトリウムの中和でできる塩は？' },
      { id: 'sci3-neut-fc22', front: '塩化カルシウム（CaCl₂）', back: '塩酸と水酸化カルシウムの中和でできる塩は？' },
      { id: 'sci3-neut-fc23', front: 'Na⁺が増え続ける', back: '塩酸にNaOHを加えていくとき、Na⁺の数はどう変化する？' },
      { id: 'sci3-neut-fc24', front: '中和の確認方法', back: 'BTB溶液が緑色になったとき、中和の状態はどうか？' },
      { id: 'sci3-neut-fc25', front: 'HNO₃ + KOH → KNO₃ + H₂O', back: '硝酸と水酸化カリウムの中和の化学反応式を書け' },
      { id: 'sci3-neut-fc26', front: '水に溶ける塩と溶けない塩がある', back: '中和でできる塩はすべて水に溶けるか？' },
      { id: 'sci3-neut-fc27', front: '2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O', back: '塩酸と水酸化カルシウムの中和の化学反応式を書け' },
      { id: 'sci3-neut-fc28', front: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O', back: '硫酸と水酸化ナトリウムの中和の化学反応式を書け' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-neut-q1',
          question: '中和反応でH⁺とOH⁻が結びついてできる物質は？',
          options: ['水', '塩化ナトリウム', '塩素', '水素'],
          correctIndex: 0,
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
          options: ['塩化ナトリウム', '硝酸カリウム', '炭酸カルシウム', '硫酸バリウム'],
          correctIndex: 3,
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
        {
          id: 'sci3-neut-q6',
          question:
            '塩酸にNaOH水溶液を加えていくとき、水溶液中のH⁺の数はどうなる？',
          options: [
            '減っていく',
            '増えていく',
            '変わらない',
            '最初増えて後で減る',
          ],
          correctIndex: 0,
          explanation:
            'H⁺はOH⁻と結びついて水になるため、NaOH水溶液を加えるほどH⁺は減っていきます。',
        },
        {
          id: 'sci3-neut-q7',
          question:
            'ちょうど中性になった水溶液にマグネシウムリボンを入れるとどうなる？',
          options: [
            '水素が発生する',
            '酸素が発生する',
            '沈殿ができる',
            '変化しない',
          ],
          correctIndex: 3,
          explanation:
            'ちょうど中性ではH⁺がすべてOH⁻と反応して水になっているため、マグネシウムリボンは反応しません。',
        },
        {
          id: 'sci3-neut-q8',
          question:
            '硫酸と水酸化バリウムの中和で生じた白い沈殿が水に溶けないのはなぜ？',
          options: [
            '温度が低いから',
            'まだ中和が完了していないから',
            '硫酸バリウムは水に溶けにくい塩だから',
            'イオンが多すぎるから',
          ],
          correctIndex: 2,
          explanation:
            '硫酸バリウム（BaSO₄）は水に溶けにくい性質を持つ塩であるため、白い沈殿として残ります。',
        },
        {
          id: 'sci3-neut-q9',
          question:
            '塩酸とNaOHの中和で、中和の前後を通じて数が変化しないイオンはどれ？',
          options: ['H⁺', 'OH⁻', 'Na⁺', 'Cl⁻'],
          correctIndex: 3,
          explanation:
            'Cl⁻はH⁺やOH⁻と反応しないため、中和の過程で数は変わりません。Na⁺はNaOHを加えるたびに増えます。',
        },
        {
          id: 'sci3-neut-q10',
          question:
            '中性を超えてNaOH水溶液を加え続けると、水溶液はどうなる？',
          options: [
            '酸性が強くなる',
            'アルカリ性になる',
            '中性のまま',
            '沈殿ができる',
          ],
          correctIndex: 1,
          explanation:
            '中性を超えると余ったOH⁻が増えていくため、水溶液はアルカリ性になります。',
        },
        { id: 'sci3-neut-q11', question: '中和反応は発熱反応と吸熱反応のどちらか？', options: ['吸熱反応', '発熱反応', 'どちらでもない', '反応による'], correctIndex: 1, explanation: '中和反応は発熱反応で、混合すると水溶液の温度が上がります。' },
        { id: 'sci3-neut-q12', question: '塩酸と水酸化カルシウムの中和でできる塩の名称は？', options: ['塩化ナトリウム', '塩化カルシウム', '硫酸カルシウム', '炭酸カルシウム'], correctIndex: 1, explanation: 'HClのCl⁻とCa(OH)₂のCa²⁺が結びついて塩化カルシウム（CaCl₂）ができます。' },
        { id: 'sci3-neut-q13', question: '中和反応の本質をイオンの式で表すと？', options: ['Na⁺ + Cl⁻ → NaCl', 'H⁺ + OH⁻ → H₂O', 'Cu²⁺ + 2e⁻ → Cu', 'H₂ → 2H⁺ + 2e⁻'], correctIndex: 1, explanation: '中和の本質はH⁺とOH⁻が結びついて水（H₂O）ができる反応です。' },
        { id: 'sci3-neut-q14', question: '硫酸と水酸化ナトリウムの中和でできる塩は？', options: ['塩化ナトリウム', '硫酸ナトリウム', '硝酸ナトリウム', '炭酸ナトリウム'], correctIndex: 1, explanation: 'H₂SO₄のSO₄²⁻とNaOHのNa⁺が結びついて硫酸ナトリウム（Na₂SO₄）ができます。' },
        { id: 'sci3-neut-q15', question: '塩酸10cm³をちょうど中性にするのにNaOH水溶液10cm³必要だった。塩酸20cm³を中性にするにはNaOH水溶液は何cm³必要？', options: ['10cm³', '15cm³', '20cm³', '30cm³'], correctIndex: 2, explanation: '塩酸の体積が2倍になるとH⁺も2倍なので、NaOH水溶液も2倍の20cm³必要です。' },
        { id: 'sci3-neut-q16', question: '中和でできたNaCl水溶液を加熱して水を蒸発させると残る固体は？', options: ['水酸化ナトリウム', '塩化ナトリウム（食塩）', '塩酸', '何も残らない'], correctIndex: 1, explanation: '中和で生じたNa⁺とCl⁻が結びついて塩化ナトリウム（食塩）の白い固体が残ります。' },
        { id: 'sci3-neut-q17', question: '中和反応で水と同時にできる物質を何という？', options: ['酸', 'アルカリ', '塩（えん）', '酸化物'], correctIndex: 2, explanation: '中和反応ではH⁺とOH⁻から水ができると同時に、残ったイオンから塩（えん）ができます。' },
        { id: 'sci3-neut-q18', question: '石灰水に二酸化炭素を通すと白くにごる。この白い沈殿の化学式は？', options: ['NaCl', 'BaSO₄', 'CaCO₃', 'KNO₃'], correctIndex: 2, explanation: '炭酸カルシウム（CaCO₃）は水に溶けにくい塩で、白い沈殿になります。' },
        { id: 'sci3-neut-q19', question: '塩酸にNaOH水溶液を加えていくとき、Na⁺の数はどうなる？', options: ['変わらない', '減っていく', '増えていく', '最初減って後で増える'], correctIndex: 2, explanation: 'NaOH水溶液を加えるたびにNa⁺が供給されるため、Na⁺の数は増え続けます。' },
        { id: 'sci3-neut-q20', question: '中和で生じた塩が水に溶けにくい場合はどうなる？', options: ['気体が発生する', '白い沈殿ができる', '温度が下がる', '色が変わらない'], correctIndex: 1, explanation: '水に溶けにくい塩（BaSO₄やCaCO₃など）は白い沈殿として現れます。' },
        { id: 'sci3-neut-q21', question: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O で、水が2分子できる理由は？', options: ['Naが2つあるから', 'H⁺が2つとOH⁻が2つ反応するから', '電子が2つ移動するから', '温度が2倍になるから'], correctIndex: 1, explanation: '硫酸からH⁺が2個、水酸化ナトリウム2分子からOH⁻が2個出るため、H₂Oが2分子できます。' },
        { id: 'sci3-neut-q22', question: '酸性の水溶液（H⁺あり）にNaOHを加えていくと、まずどの反応が起こる？', options: ['Na⁺とCl⁻が結合する', 'H⁺とOH⁻が結合して水になる', 'Na⁺とH⁺が結合する', 'OH⁻とCl⁻が結合する'], correctIndex: 1, explanation: '中和反応の本質はH⁺とOH⁻が結合して水ができることです。残りのイオンは水溶液中に存在し続けます。' },
        { id: 'sci3-neut-q23', question: 'NaOH水溶液を5cm³加えたとき酸性（まだH⁺が残っている）の水溶液にマグネシウムを入れるとどうなる？', options: ['変化しない', '水素が発生する', '酸素が発生する', '沈殿ができる'], correctIndex: 1, explanation: 'まだ酸性（H⁺が残っている）なので、マグネシウムがH⁺と反応して水素が発生します。' },
        { id: 'sci3-neut-q24', question: 'ちょうど中性になった水溶液のpHは？', options: ['0', '3', '7', '14'], correctIndex: 2, explanation: '中性の水溶液のpHは7です。H⁺とOH⁻がちょうど過不足なく反応した状態です。' },
        { id: 'sci3-neut-q25', question: '中和でできる塩（えん）と食塩の関係は？', options: ['塩（えん）と食塩は全く無関係', '食塩（NaCl）は塩（えん）の一種', '食塩が中和で塩（えん）をつくる', '塩（えん）は食塩の別名'], correctIndex: 1, explanation: '塩（えん）は酸の陰イオンとアルカリの陽イオンが結びついた物質の総称で、食塩（NaCl）はその一例です。' },
        { id: 'sci3-neut-q26', question: '塩酸とNaOHの中和で、NaOH水溶液を加え続けると電流の流れやすさはどう変化する？', options: ['ずっと増え続ける', '最初減ってから増える', 'ずっと減り続ける', '変わらない'], correctIndex: 1, explanation: '中和が進むとイオンが減って電流が流れにくくなり、中性を超えるとNa⁺とOH⁻が増えて再び流れやすくなります。' },
        { id: 'sci3-neut-q27', question: '硫酸バリウム（BaSO₄）の沈殿が増えなくなった後にBa(OH)₂を加え続けると、水溶液は何性になる？', options: ['酸性', '中性のまま', 'アルカリ性', '判別できない'], correctIndex: 2, explanation: 'SO₄²⁻がすべて反応した後は余ったOH⁻が増え、アルカリ性になります。' },
        { id: 'sci3-neut-q28', question: '中和反応で生じる水以外の物質（塩）を決めるのは何？', options: ['温度と圧力', '酸の陰イオンとアルカリの陽イオンの組み合わせ', '水の量', '電流の大きさ'], correctIndex: 1, explanation: '塩（えん）の種類は、酸に由来する陰イオンとアルカリに由来する陽イオンの組み合わせで決まります。' },
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
        {
          id: 'sci3-neut-ex4',
          question:
            'うすい塩酸10cm³にうすいNaOH水溶液を少しずつ加えていった。ちょうど中性にするのにNaOH水溶液が10cm³必要であった。(1) NaOH水溶液を5cm³加えたとき、水溶液は何性か。(2) ちょうど中性の水溶液にマグネシウムリボンを入れるとどうなるか。(3) NaOH水溶液を15cm³加えた水溶液の水を蒸発させると何が残るか。',
          steps: [
            {
              title: 'Step 1: NaOH 5cm³のときの状態を考える',
              content:
                '中性になるにはNaOH水溶液が10cm³必要なので、5cm³ではまだ半分しか中和していません。H⁺が残っているため酸性です。',
              highlight: 'NaOH 5cm³ → まだH⁺が残っている → 酸性',
            },
            {
              title: 'Step 2: 中性でのマグネシウムリボンの反応を考える',
              content:
                'ちょうど中性のとき、H⁺はすべてOH⁻と反応して水になっています。H⁺がないため、マグネシウムリボンは反応しません。',
              highlight: 'H⁺ = 0 → マグネシウムは変化しない',
            },
            {
              title: 'Step 3: NaOH 15cm³のときのイオンを考える',
              content:
                '10cm³で中性になるので、15cm³では5cm³分のNaOHが余っています。水溶液中にはNa⁺、Cl⁻、余ったOH⁻が存在します。',
              highlight: 'NaOH 15cm³ → 5cm³分のNaOHが余る → アルカリ性',
            },
            {
              title: 'Step 4: 水を蒸発させたときに残る固体を考える',
              content:
                '水を蒸発させると、Na⁺とCl⁻から塩化ナトリウム（NaCl）が、余ったNa⁺とOH⁻から水酸化ナトリウム（NaOH）が固体として残ります。',
              highlight: 'NaCl（中和で生じた塩）とNaOH（余ったアルカリ）が残る',
            },
          ],
          answer:
            '(1) 酸性（H⁺がまだ残っているため）\n(2) 変化しない（H⁺がないため水素が発生しない）\n(3) 塩化ナトリウム（NaCl）と水酸化ナトリウム（NaOH）の白い固体が残る',
        },
        {
          id: 'sci3-neut-ex5',
          question:
            'うすい硫酸にうすい水酸化バリウム水溶液を少しずつ加えていったところ、白い沈殿が生じた。水酸化バリウム水溶液を一定量加えたところで沈殿が増えなくなった。(1) 白い沈殿の物質名と化学式を答えなさい。(2) 沈殿が増えなくなった理由を説明しなさい。(3) 沈殿が増えなくなった後もBa(OH)₂水溶液を加え続けると、水溶液のpHはどうなるか。',
          steps: [
            {
              title: 'Step 1: 沈殿の正体を特定する',
              content:
                '硫酸（H₂SO₄）と水酸化バリウム（Ba(OH)₂）の中和では、SO₄²⁻とBa²⁺が結びついて硫酸バリウム（BaSO₄）ができます。これが白い沈殿の正体です。',
              highlight: 'SO₄²⁻ + Ba²⁺ → BaSO₄（白い沈殿）',
            },
            {
              title: 'Step 2: 沈殿が増えなくなる理由を考える',
              content:
                '硫酸由来のSO₄²⁻がすべてBa²⁺と反応すると、それ以上沈殿をつくることができません。つまり、硫酸がすべて反応したため沈殿は増えなくなります。',
              highlight: 'SO₄²⁻がすべて反応 → 沈殿は増加しない',
            },
            {
              title: 'Step 3: その後のpH変化を考える',
              content:
                '硫酸がすべて反応した後にBa(OH)₂水溶液を加え続けると、余ったOH⁻が水溶液中に増えていきます。そのためpHは7（中性）を超えて大きくなり、アルカリ性が強くなります。',
              highlight: '余ったOH⁻が増加 → pHが大きくなる（アルカリ性）',
            },
          ],
          answer:
            '(1) 硫酸バリウム（BaSO₄）\n(2) 硫酸由来のSO₄²⁻がすべてBa²⁺と反応して使い切られたため、それ以上沈殿ができない。\n(3) pHは7より大きくなる（余ったOH⁻が増えてアルカリ性になるため）。',
        },
      ],
    },
    chatId: 'sci3-neutralization',
  },
};
