import type { Topic } from '../../../../../../../types';

export const atomIon: Topic = {
  id: 'sci3-atom-ion',
  eraId: 'sci3-chemistry',
  name: '原子の構造とイオン',
  subtitle: '原子核・電子・イオン式・電離式',
  icon: '⚛️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '原子の構造',
          content:
            '原子は中心にある原子核と、そのまわりを回る電子からできています。原子核は＋の電気をもつ陽子と、電気をもたない中性子からなります。陽子の数と電子の数は等しく、＋と−が打ち消し合うため原子全体は電気的に中性です。',
          image: {
            src: '/images/science/grade3/chemistry/atom-model.svg',
            alt: '原子の構造の模式図',
            caption: '原子核（陽子＋中性子）と電子',
          },
          keyPoints: [
            '原子核 = 陽子（＋）＋ 中性子（電気なし）。電子（−）が原子核のまわりを回る',
            '陽子の数 ＝ 電子の数 → ＋と−が打ち消し合い、原子全体は電気的に中性',
            '同位体（アイソトープ）：同じ元素で中性子の数が異なる原子どうし',
          ],
        },
        {
          title: 'イオンとイオン式',
          content:
            '原子が電子を失ったり得たりして、電気を帯びた粒子になったものをイオンといいます。イオン式は元素記号の右上に＋や−の符号を書いて表します。複数の原子が集まってできたイオンを多原子イオンといいます。',
          keyPoints: [
            '陽イオン：原子が電子を失ってできる（例：Na⁺、Cu²⁺、H⁺、Mg²⁺）',
            '陰イオン：原子が電子を得てできる（例：Cl⁻、OH⁻、SO₄²⁻）',
            'イオン式の書き方：元素記号の右上に＋/−の符号を書く（2個なら2+、2−と書く）',
            '多原子イオン：複数の原子からなるイオン（OH⁻、SO₄²⁻、NH₄⁺）',
          ],
        },
        {
          title: '電離式',
          content:
            '電解質が水に溶けて陽イオンと陰イオンに分かれることを電離といいます。電離のようすを式で表したものを電離式といいます。',
          keyPoints: [
            'NaCl → Na⁺ + Cl⁻（塩化ナトリウム）',
            'HCl → H⁺ + Cl⁻（塩化水素）',
            'CuCl₂ → Cu²⁺ + 2Cl⁻（塩化銅）',
            'NaOH → Na⁺ + OH⁻（水酸化ナトリウム）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-ai-slide1',
          title: '原子からイオンへ',
          slides: [
            {
              type: 'question',
              question: '原子はどうやってイオンに変身するの？',
              subtext: '電子のやりとり',
              emoji: '⚛️',
              image: {
                src: '/images/science/grade3/chemistry/atom-model.svg',
                alt: '原子の構造',
              },
            },
            {
              type: 'reason',
              headline: '電子を失うと陽イオン、得ると陰イオンになる！',
              points: [
                'Na → Na⁺ + e⁻（電子1個を失って陽イオンに）',
                'Cl + e⁻ → Cl⁻（電子1個を得て陰イオンに）',
                '陽子の数（＋）と電子の数（−）のバランスが崩れると電気を帯びる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '陽イオン', value: '電子を失う（＋に）', emoji: '➕' },
                  { label: '陰イオン', value: '電子を得る（−に）', emoji: '➖' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'イオン = 電子のやりとりで電気を帯びた原子！',
              keywords: [
                { text: '陽イオン', isImportant: true },
                { text: '陰イオン', isImportant: true },
                { text: '電離', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-ai-fc1',
        front: '陽イオン',
        back: '原子が電子を失ってできる、＋の電気を帯びたイオンを何という？',
        explanation: '例：Na⁺、Cu²⁺、H⁺、Mg²⁺。電子を失うと＋の電気が余る。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc2',
        front: '原子核',
        back: '原子の中心にある、陽子と中性子からなる部分を何という？',
        explanation: '＋の電気をもつ陽子と、電気をもたない中性子から構成される。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc3',
        front: '陽子',
        back: '原子核を構成する粒子のうち、＋の電気をもつものは？',
        explanation: '陽子の数は電子の数と等しく、原子全体を電気的に中性にしている。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc4',
        front: '中性子',
        back: '原子核を構成する粒子のうち、電気をもたないものは？',
        explanation: '同じ元素で中性子の数が異なるものを同位体（アイソトープ）という。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc5',
        front: '電子',
        back: '原子核のまわりに存在する、−の電気をもつ粒子は？',
        explanation: '原子では陽子の数＝電子の数。電子の増減でイオンになる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc6',
        front: '同位体（アイソトープ）',
        back: '同じ元素で中性子の数が異なる原子どうしを何という？',
        explanation: '陽子の数（原子番号）は同じだが、中性子の数が異なる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc7',
        front: 'Cu²⁺（銅イオン）',
        back: '銅イオンのイオン式は？',
        explanation: '銅原子が電子を2個失ってできる陽イオン。塩化銅水溶液の青色の原因。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc8',
        front: 'Mg²⁺（マグネシウムイオン）',
        back: 'マグネシウムイオンのイオン式は？',
        explanation: 'マグネシウム原子が電子を2個失ってできる陽イオン。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc9',
        front: 'H⁺（水素イオン）',
        back: '水素イオンのイオン式は？',
        explanation: '水素原子が電子を1個失ってできる陽イオン。酸性の水溶液に含まれる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc10',
        front: 'Na⁺（ナトリウムイオン）',
        back: 'ナトリウムイオンのイオン式は？',
        explanation: 'ナトリウム原子が電子を1個失ってできる陽イオン。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc11',
        front: 'Cl⁻（塩化物イオン）',
        back: '塩化物イオンのイオン式は？',
        explanation: '塩素原子が電子を1個得てできる陰イオン。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc12',
        front: 'OH⁻（水酸化物イオン）',
        back: '水酸化物イオンのイオン式は？',
        explanation: '多原子イオンの一つ。酸素原子と水素原子が結びついた陰イオン。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ai-fc13',
        front: 'SO₄²⁻（硫酸イオン）',
        back: '硫酸イオンのイオン式は？',
        explanation: '多原子イオンの一つ。硫黄原子と酸素原子4個が結びついた陰イオン。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc14',
        front: '多原子イオン',
        back: '1個以上の原子が集まってできたイオンを何という？',
        explanation: '例：OH⁻（水酸化物イオン）、SO₄²⁻（硫酸イオン）、NH₄⁺（アンモニウムイオン）。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc15',
        front: 'CuCl₂ → Cu²⁺ + 2Cl⁻',
        back: '塩化銅の電離式を書くと？',
        explanation: '塩化銅は水に溶けると銅イオンと塩化物イオン2個に電離する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc16',
        front: 'NaOH → Na⁺ + OH⁻',
        back: '水酸化ナトリウムの電離式を書くと？',
        explanation: '水酸化ナトリウムはナトリウムイオンと水酸化物イオンに電離する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc17',
        front: 'K⁺（カリウムイオン）',
        back: 'カリウムイオンのイオン式は？',
        explanation: 'カリウム原子が電子を1個失ってできる陽イオン。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc18',
        front: 'Zn²⁺（亜鉛イオン）',
        back: '亜鉛イオンのイオン式は？',
        explanation: '亜鉛原子が電子を2個失ってできる陽イオン。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc19',
        front: 'Ba²⁺（バリウムイオン）',
        back: 'バリウムイオンのイオン式は？',
        explanation: 'バリウム原子が電子を2個失ってできる陽イオン。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc20',
        front: 'Ag⁺（銀イオン）',
        back: '銀イオンのイオン式は？',
        explanation: '銀原子が電子を1個失ってできる陽イオン。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc21',
        front: 'NH₄⁺（アンモニウムイオン）',
        back: 'アンモニウムイオンのイオン式は？',
        explanation:
          '窒素原子1個と水素原子4個からなる多原子イオン。陽イオンの多原子イオンとして覚える。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc22',
        front: 'S²⁻（硫化物イオン）',
        back: '硫化物イオンのイオン式は？',
        explanation: '硫黄原子が電子を2個得てできる陰イオン。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc23',
        front: 'F⁻（フッ化物イオン）',
        back: 'フッ化物イオンのイオン式は？',
        explanation: 'フッ素原子が電子を1個得てできる陰イオン。',
        difficulty: 'advanced',
      },
      {
        id: 'sci3-ai-fc24',
        front: 'Fe²⁺（鉄イオン）',
        back: '鉄イオン（2価）のイオン式は？',
        explanation: '鉄原子が電子を2個失ってできる陽イオン。',
        difficulty: 'advanced',
      },
      {
        id: 'sci3-ai-fc25',
        front: '電解質が電離して生じた陽イオンと陰イオンが水溶液中を移動して電気を運ぶから',
        back: '電解質の水溶液に電流が流れる理由は？',
        explanation: '電離で生じたイオンが水溶液中を移動することで、電荷が運ばれて電流となる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ai-fc26',
        front: 'HCl → H⁺ + Cl⁻',
        back: '塩化水素の電離式を書くと？',
        explanation: '塩化水素が水に溶けると水素イオンと塩化物イオンに分かれ、塩酸となる。',
        difficulty: 'advanced',
      },
      {
        id: 'sci3-ai-fc27',
        front: 'Ca²⁺（カルシウムイオン）',
        back: 'カルシウムイオンのイオン式は？',
        explanation: 'カルシウム原子が電子を2個失ってできる2価の陽イオン。',
        difficulty: 'advanced',
      },
      {
        id: 'sci3-ai-fc28',
        front: 'NO₃⁻（硝酸イオン）',
        back: '硝酸イオンのイオン式は？',
        explanation: '窒素原子1個と酸素原子3個からなる多原子イオン。硝酸の電離で生じる。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-ai-q1',
          question: '原子核を構成する粒子の正しい組み合わせは？',
          options: [
            '陽子と電子',
            '陽子と電子と中性子',
            '電子と中性子',
            '陽子と中性子',
          ],
          correctIndex: 3,
          explanation:
            '原子核は陽子（＋の電気をもつ）と中性子（電気をもたない）からできています。電子は原子核のまわりを回っています。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q2',
          question: '原子が電子を得てできるイオンを何という？',
          options: ['陰イオン', '陽イオン', '中性子', '同位体'],
          correctIndex: 0,
          explanation:
            '電子（−の電気）を得ると−の電気が多くなり、陰イオンになります。例：Cl⁻、OH⁻',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q3',
          question: '塩化水素（HCl）が水に溶けて電離したときのイオンの組み合わせは？',
          options: ['H⁺ と Cl⁻','H⁻ と Cl⁺','H₂ と Cl₂','Na⁺ と Cl⁻',
          ],
          correctIndex: 0,
          explanation:
            '塩化水素は水に溶けるとH⁺（水素イオン）とCl⁻（塩化物イオン）に電離します。HCl → H⁺ + Cl⁻',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q4',
          question: '銅イオンの化学式（イオン式）として正しいものは？',
          options: ['Cu⁺', 'Cu⁻', 'Cu²⁺', 'Cu²⁻'],
          correctIndex: 2,
          explanation:
            '銅原子は電子を2個失ってCu²⁺（銅イオン）になります。元素記号の右上に2+と書きます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q5',
          question: '塩化銅の電離式として正しいものは？',
          options: [
            'CuCl₂ → Cu⁺ + Cl₂⁻',
            'CuCl₂ → Cu²⁺ + 2Cl⁻',
            'CuCl₂ → Cu + Cl₂',
            'CuCl₂ → Cu²⁻ + 2Cl⁺',
          ],
          correctIndex: 1,
          explanation:
            '塩化銅は水に溶けるとCu²⁺（銅イオン）と2個のCl⁻（塩化物イオン）に電離します。CuCl₂ → Cu²⁺ + 2Cl⁻',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q6',
          question: 'NH₄⁺（アンモニウムイオン）はどのような種類のイオンか？',
          options: [
            '多原子の陽イオン',
            '単原子の陰イオン',
            '単原子の陽イオン',
            '多原子の陰イオン',
          ],
          correctIndex: 0,
          explanation:
            'NH₄⁺は窒素原子1個と水素原子4個からなる多原子イオンで、＋の電気を帯びた陽イオンです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q7',
          question:
            '塩化カルシウム（CaCl₂）の電離式として正しいものは？',
          options: [
            'CaCl₂ → Ca⁺ + 2Cl⁻',
            'CaCl₂ → Ca²⁺ + Cl₂⁻',
            'CaCl₂ → Ca²⁺ + 2Cl⁻',
            'CaCl₂ → Ca + Cl₂',
          ],
          correctIndex: 2,
          explanation:
            '塩化カルシウムは水に溶けるとCa²⁺（カルシウムイオン）と2個のCl⁻（塩化物イオン）に電離します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q8',
          question:
            '非電解質の水溶液に電流が流れない理由として正しいものは？',
          options: [
            '水分子が電気の流れをさえぎるから',
            '温度が低すぎるから',
            '電極と反応してしまうから',
            '水に溶けてもイオンが生じないから',
          ],
          correctIndex: 3,
          explanation:
            '非電解質は水に溶けてもイオンに分かれないため、電気を運ぶイオンが存在せず電流が流れません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q9',
          question:
            '次のうち、2価の陽イオンはどれ？',
          options: ['Mg²⁺', 'K⁺', 'Na⁺', 'Cl⁻'],
          correctIndex: 0,
          explanation:
            'Mg²⁺（マグネシウムイオン）は電子を2個失ってできる2価の陽イオンです。Na⁺やK⁺は1価の陽イオン、Cl⁻は陰イオンです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q10',
          question: '原子が電気的に中性である理由は？',
          options: ['陽子の数と電子の数が等しいから','中性子が電気を打ち消すから','電子が原子核に含まれるから','陽子と中性子の数が等しいから',
          ],
          correctIndex: 0,
          explanation:
            '原子では陽子の数（＋）と電子の数（−）が等しいため、電気が打ち消し合って中性になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ai-q11',
          question: '水酸化ナトリウムの電離式として正しいものは？',
          options: [
            'NaOH → Na⁺ + O²⁻ + H⁺',
            'NaOH → Na⁺ + OH⁻',
            'NaOH → Na + OH',
            'NaOH → Na²⁺ + OH²⁻',
          ],
          correctIndex: 1,
          explanation:
            '水酸化ナトリウムは水に溶けるとNa⁺（ナトリウムイオン）とOH⁻（水酸化物イオン）に電離します。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q12',
          question: '次のうち、陰イオンはどれ？',
          options: ['Na⁺', 'Cu²⁺', 'H⁺', 'SO₄²⁻'],
          correctIndex: 3,
          explanation:
            'SO₄²⁻（硫酸イオン）は−の電気を帯びた陰イオンです。Na⁺、Cu²⁺、H⁺はいずれも陽イオンです。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q13',
          question: '同じ元素で中性子の数が異なる原子どうしを何という？',
          options: ['イオン', '分子', '同位体', '合金'],
          correctIndex: 2,
          explanation:
            '同位体（アイソトープ）は同じ元素（陽子の数が同じ）で中性子の数が異なる原子です。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q14',
          question: '電子を原子核のまわりにもっている粒子の電気の種類は？',
          options: ['−の電気','電気なし','＋の電気','＋と−の両方'],
          correctIndex: 0,
          explanation:
            '電子は−の電気をもつ粒子です。原子核のまわりに存在しています。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q15',
          question: 'イオン式の書き方として正しいものは？',
          options: [
            '元素記号の左上に＋や−を書く',
            '元素記号の右下に＋や−を書く',
            '元素記号の右上に＋や−を書く',
            '元素記号の左下に＋や−を書く',
          ],
          correctIndex: 2,
          explanation:
            'イオン式は元素記号の右上に＋や−の符号を書きます。2個なら2+、2−と書きます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q16',
          question: '多原子イオンの例として正しいものは？',
          options: ['Na⁺', 'Cl⁻', 'Cu²⁺', 'OH⁻'],
          correctIndex: 3,
          explanation:
            'OH⁻（水酸化物イオン）は酸素原子と水素原子が結びついた多原子イオンです。Na⁺、Cl⁻、Cu²⁺は単原子イオンです。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q17',
          question: 'ナトリウム原子がナトリウムイオンになるとき、電子はどうなる？',
          options: [
            '電子を1個得る',
            '電子を2個失う',
            '電子を1個失う',
            '電子の数は変わらない',
          ],
          correctIndex: 2,
          explanation:
            'ナトリウム原子は電子を1個失ってNa⁺になります。＋の電気が1つ余るため1価の陽イオンです。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q18',
          question: '塩素原子が塩化物イオンになるとき、電子はどうなる？',
          options: ['電子を1個失う','電子を2個得る','電子の数は変わらない','電子を1個得る',
          ],
          correctIndex: 3,
          explanation:
            '塩素原子は電子を1個得てCl⁻になります。−の電気が1つ多くなるため1価の陰イオンです。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q19',
          question: '次のうち、1価の陽イオンをすべて選んだ組み合わせは？',
          options: [
            'Na⁺とK⁺',
            'Na⁺とCu²⁺',
            'Mg²⁺とCa²⁺',
            'Cl⁻とOH⁻',
          ],
          correctIndex: 0,
          explanation:
            'Na⁺とK⁺はどちらも電子を1個失ってできる1価の陽イオンです。Cu²⁺やMg²⁺は2価の陽イオンです。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q20',
          question: '原子核を構成しない粒子はどれ？',
          options: ['陽子','中性子','陽子と中性子の両方','電子'],
          correctIndex: 3,
          explanation:
            '電子は原子核のまわりを回っており、原子核を構成しません。原子核は陽子と中性子からできています。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q21',
          question: 'H₂SO₄の電離式として正しいものは？',
          options: [
            'H₂SO₄ → H₂⁺ + SO₄²⁻',
            'H₂SO₄ → 2H⁺ + SO₄²⁻',
            'H₂SO₄ → H⁺ + HSO₄⁻',
            'H₂SO₄ → 2H + SO₄',
          ],
          correctIndex: 1,
          explanation:
            '硫酸は水に溶けると2個のH⁺と1個のSO₄²⁻に電離します。H₂SO₄ → 2H⁺ + SO₄²⁻',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q22',
          question: '銅原子が銅イオンになるとき、失う電子の数は？',
          options: ['1個', '2個', '3個', '4個'],
          correctIndex: 1,
          explanation:
            '銅原子は電子を2個失ってCu²⁺になります。右上に2+と書くのは電子を2個失ったことを示します。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ai-q23',
          question: 'アンモニウムイオン（NH₄⁺）が陽イオンの多原子イオンである理由は？',
          options: [
            '窒素原子1個だけでできているから',
            '電子を得てできたから',
            '複数の原子が集まり＋の電気を帯びているから',
            '陰イオンだから',
          ],
          correctIndex: 2,
          explanation:
            'NH₄⁺は窒素原子1個と水素原子4個が集まった多原子イオンで、全体として＋の電気を帯びた陽イオンです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ai-q24',
          question: '電離式 CuCl₂ → Cu²⁺ + 2Cl⁻ で、右辺のCl⁻の前の2は何を意味する？',
          options: [
            '電荷が2だということ',
            'Cl⁻が2個できるということ',
            '電子を2個失うということ',
            '塩素原子が2倍の大きさということ',
          ],
          correctIndex: 1,
          explanation:
            '2Cl⁻は塩化物イオンが2個できることを意味します。CuCl₂には塩素原子が2個あるため、Cl⁻も2個生じます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ai-q25',
          question: '次のイオンのうち、2価の陰イオンはどれ？',
          options: ['Cl⁻', 'OH⁻', 'S²⁻', 'F⁻'],
          correctIndex: 2,
          explanation:
            'S²⁻（硫化物イオン）は硫黄原子が電子を2個得てできる2価の陰イオンです。Cl⁻、OH⁻、F⁻は1価の陰イオンです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ai-q26',
          question: '鉄イオン（Fe²⁺）は何価の陽イオンか？',
          options: ['1価', '2価', '3価', '4価'],
          correctIndex: 1,
          explanation:
            'Fe²⁺は鉄原子が電子を2個失ってできる2価の陽イオンです。右上の2+が2価を示します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ai-q27',
          question: '電離式の左辺と右辺で必ず等しいものは？',
          options: ['分子の数','イオンの数','電子の数だけ','原子の数と電荷の合計',
          ],
          correctIndex: 3,
          explanation:
            '電離式では左辺と右辺で原子の種類と数、および電荷の合計がそれぞれ等しくなります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ai-q28',
          question: '原子核の中にある陽子の数で決まるものは？',
          options: ['質量数', '元素の種類（原子番号）', '中性子の数', 'イオンの価数'],
          correctIndex: 1,
          explanation:
            '陽子の数が原子番号であり、元素の種類を決めます。同じ陽子数で中性子数が違うと同位体になります。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-ai-ex1',
          question:
            '塩化ナトリウム（NaCl）が水に溶けて電離するようすを、イオン式を使って表しなさい。',
          steps: [
            {
              title: 'Step 1: 電離前の物質を確認',
              content:
                '塩化ナトリウムの化学式はNaClです。これが水に溶けて電離します。',
              highlight: 'NaCl',
            },
            {
              title: 'Step 2: 電離後のイオンを考える',
              content:
                'ナトリウム原子（Na）は電子を1個失ってNa⁺（陽イオン）に、塩素原子（Cl）は電子を1個得てCl⁻（陰イオン）になります。',
              highlight: 'Na⁺ と Cl⁻',
            },
            {
              title: 'Step 3: 電離式を書く',
              content:
                '左辺にNaCl、右辺にNa⁺とCl⁻を書き、矢印（→）でつなぎます。',
              highlight: 'NaCl → Na⁺ + Cl⁻',
            },
          ],
          answer: 'NaCl → Na⁺ + Cl⁻\n（塩化ナトリウムはナトリウムイオンと塩化物イオンに電離する）',
        },
        {
          id: 'sci3-ai-ex2',
          question:
            'マグネシウム原子（Mg）が電子を2個失ってイオンになるとき、このイオンの名称とイオン式を書きなさい。',
          steps: [
            {
              title: 'Step 1: 電子を失う → 陽イオン',
              content:
                '原子が電子を失うと、＋の電気をもつ陽子の数が電子の数より多くなり、全体として＋の電気を帯びます。つまり陽イオンになります。',
              highlight: '電子を失う → 陽イオン',
            },
            {
              title: 'Step 2: イオン式の書き方',
              content:
                '失った電子の数は2個なので、元素記号Mgの右上に「2+」と書きます。',
              highlight: 'Mg²⁺',
            },
            {
              title: 'Step 3: イオンの名称',
              content:
                'マグネシウム原子からできた陽イオンなので、「マグネシウムイオン」と呼びます。',
              highlight: 'マグネシウムイオン（Mg²⁺）',
            },
            {
              title: 'Step 4: 確認（電荷のバランス）',
              content:
                'Mg原子は陽子12個・電子12個で中性です。電子を2個失うと陽子12個・電子10個になり、＋の電気が2つ多くなるので2+となります。',
              highlight: '陽子12個 − 電子10個 ＝ 2+',
            },
          ],
          answer:
            '名称：マグネシウムイオン\nイオン式：Mg²⁺\n（マグネシウム原子が電子を2個失ってできる陽イオン）',
        },
        {
          id: 'sci3-ai-ex3',
          question:
            '塩化銅（CuCl₂）が水に溶けて電離するようすを、イオン式を使って表しなさい。',
          steps: [
            {
              title: 'Step 1: 左辺に電離前の化学式を書く',
              content:
                'まず矢印の左側（左辺）に、電離前の物質である塩化銅の化学式CuCl₂を書きます。',
              highlight: 'CuCl₂',
            },
            {
              title: 'Step 2: 銅のイオンを考える',
              content:
                '銅原子（Cu）は電子を2個失って、Cu²⁺（銅イオン・陽イオン）になります。',
              highlight: 'Cu → Cu²⁺（電子2個を失う）',
            },
            {
              title: 'Step 3: 塩素のイオンを考える',
              content:
                '塩素原子（Cl）は電子を1個得て、Cl⁻（塩化物イオン・陰イオン）になります。',
              highlight: 'Cl → Cl⁻（電子1個を得る）',
            },
            {
              title: 'Step 4: 塩素の数に注意',
              content:
                'CuCl₂には塩素原子が2個あるので、Cl⁻も2個できます。「2」を前につけて2Cl⁻と書きます。',
              highlight: 'Cl₂ → 2Cl⁻',
            },
            {
              title: 'Step 5: 電離式を完成させる',
              content:
                '左辺と右辺を矢印（→）でつなぎます。右辺は＋でイオンを並べます。',
              highlight: 'CuCl₂ → Cu²⁺ + 2Cl⁻',
            },
            {
              title: 'Step 6: 確認',
              content:
                '左辺と右辺で原子の数が一致しているか確認します。Cu：左1個＝右1個、Cl：左2個＝右2個。電荷も左辺0＝右辺（2+）+（2×1−）＝0で一致。',
              highlight: '原子の数と電荷が左辺＝右辺で一致',
            },
          ],
          answer:
            'CuCl₂ → Cu²⁺ + 2Cl⁻\n（塩化銅は銅イオンと塩化物イオン2個に電離する）',
        },
      ],
    },
    chatId: 'sci3-atom-ion',
  },
};
