import type { Topic } from '../../../../../../../types';

export const solutionIons: Topic = {
  id: 'sci3-solution-ions',
  eraId: 'sci3-chemistry',
  name: '水溶液とイオン',
  subtitle: '電解質・電気分解・原子の構造',
  icon: '💧',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '電解質と非電解質',
          content:
            '物質を水に溶かしたとき、その水溶液に電流が流れるかどうかで物質を2つに分類できます。電流が流れる物質を電解質、流れない物質を非電解質といいます。電解質は水に溶けるとイオンに分かれる（電離する）ため、電流が流れます。',
          image: {
            src: '/images/science/electrolysis-model.svg',
            alt: 'NaClの電離イメージ',
            caption: '電解質が水に溶けてイオンに分かれるようす',
          },
          keyPoints: [
            '電解質：塩化ナトリウム（NaCl）、塩化水素（HCl）、水酸化ナトリウム（NaOH）など',
            '非電解質：砂糖、エタノールなど（水に溶けてもイオンにならない）',
            '電解質の水溶液に電流が流れるのは、イオンが電気を運ぶから',
          ],
        },
        {
          title: '電気分解のしくみ',
          content:
            '電解質の水溶液に電流を流すと、化学変化が起きて物質が分解されます。これを電気分解といいます。陰極（−極）と陽極（＋極）にそれぞれ異なる物質が現れます。',
          image: {
            src: '/images/science/electrolysis-apparatus.svg',
            alt: '塩化銅水溶液の電気分解装置',
            caption: '陰極に銅、陽極に塩素が発生',
          },
          keyPoints: [
            '塩化銅水溶液の電気分解：陰極に銅（赤色の物質）、陽極に塩素（刺激臭の気体）',
            '塩酸の電気分解：陰極に水素、陽極に塩素',
            '陰極には陽イオンが引きつけられ、陽極には陰イオンが引きつけられる',
          ],
        },
        {
          title: '原子の構造とイオン',
          content:
            '原子は中心にある原子核と、そのまわりを回る電子からできています。原子核は＋の電気をもつ陽子と、電気をもたない中性子からなります。原子が電子を失うと陽イオン、電子を得ると陰イオンになります。',
          image: {
            src: '/images/science/atom-model.svg',
            alt: '原子の構造の模式図',
            caption: '原子核（陽子＋中性子）と電子',
          },
          keyPoints: [
            '原子核 = 陽子（＋）＋ 中性子（電気なし）。電子（−）が原子核のまわりを回る',
            '陽イオン：原子が電子を失ってできる（例：Na⁺、Cu²⁺、H⁺）',
            '陰イオン：原子が電子を得てできる（例：Cl⁻、OH⁻）',
            '電離：電解質が水に溶けて陽イオンと陰イオンに分かれること',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-sol-slide1',
          title: '電解質と非電解質のちがい',
          slides: [
            {
              type: 'question',
              question: '砂糖水と食塩水、電気を通すのはどっち？',
              subtext: '電解質の秘密',
              emoji: '⚡',
            },
            {
              type: 'reason',
              headline: '食塩水だけが電気を通す！イオンに分かれるかがカギ！',
              points: [
                '食塩（NaCl）は水に溶けるとNa⁺とCl⁻に分かれる',
                'イオンが電気を運ぶから電流が流れる',
                '砂糖は溶けてもイオンにならないから電気を通さない',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '電解質', value: 'イオンに分かれる', emoji: '⚡' },
                  { label: '非電解質', value: 'イオンにならない', emoji: '❌' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '電解質 = 水に溶けてイオンに分かれる物質！',
              keywords: [
                { text: '電解質', isImportant: true },
                { text: '非電解質', isImportant: true },
                { text: '電離' },
              ],
              nextHint: 'じゃあ電解質の水溶液に電流を流すとどうなる？',
            },
          ],
        },
        {
          id: 'sci3-sol-slide2',
          title: '電気分解でわかること',
          slides: [
            {
              type: 'question',
              question: '塩化銅水溶液に電流を流すと、何が出てくる？',
              subtext: '電気分解の実験',
              emoji: '🔬',
              image: {
                src: '/images/science/electrolysis-apparatus.svg',
                alt: '塩化銅水溶液の電気分解装置',
              },
            },
            {
              type: 'reason',
              headline: '陰極に銅、陽極に塩素が発生する！',
              points: [
                'Cu²⁺が陰極に引きつけられ、電子を受け取って銅になる',
                'Cl⁻が陽極に引きつけられ、電子を失って塩素ガスになる',
                '陰極には赤色の銅が付着し、陽極からは刺激臭がする',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '電気分解 = 電流で電解質を分解する化学変化！',
              keywords: [
                { text: '電気分解', isImportant: true },
                { text: '陰極', isImportant: true },
                { text: '陽極', isImportant: true },
              ],
              nextHint: '原子がイオンになるしくみを見てみよう！',
            },
          ],
        },
        {
          id: 'sci3-sol-slide3',
          title: '原子からイオンへ',
          slides: [
            {
              type: 'question',
              question: '原子はどうやってイオンに変身するの？',
              subtext: '電子のやりとり',
              emoji: '⚛️',
              image: {
                src: '/images/science/atom-model.svg',
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
        id: 'sci3-sol-fc1',
        front: '電解質',
        back: '水に溶かすと電流が流れる物質を何という？',
        explanation: '塩化ナトリウムや塩化水素などが電解質。水に溶けるとイオンに分かれる。',
      },
      {
        id: 'sci3-sol-fc2',
        front: '非電解質',
        back: '水に溶かしても電流が流れない物質を何という？',
        explanation: '砂糖やエタノールなどが非電解質。水に溶けてもイオンにならない。',
      },
      {
        id: 'sci3-sol-fc3',
        front: '陰極に銅、陽極に塩素',
        back: '塩化銅水溶液を電気分解すると、それぞれの極に何が現れる？',
        explanation: 'Cu²⁺が陰極で銅に、Cl⁻が陽極で塩素ガスになる。',
      },
      {
        id: 'sci3-sol-fc4',
        front: '陽イオン',
        back: '原子が電子を失ってできる、＋の電気を帯びたイオンを何という？',
        explanation: '例：Na⁺、Cu²⁺、H⁺。電子を失うと＋の電気が余る。',
      },
      {
        id: 'sci3-sol-fc5',
        front: '電離',
        back: '電解質が水に溶けて陽イオンと陰イオンに分かれることを何という？',
        explanation: '例：NaCl → Na⁺ + Cl⁻',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-sol-q1',
          question: '次のうち、電解質はどれ？',
          options: ['砂糖', 'エタノール', '塩化ナトリウム', 'デンプン'],
          correctIndex: 2,
          explanation:
            '塩化ナトリウム（NaCl）は水に溶けるとNa⁺とCl⁻に電離するため、電解質です。砂糖・エタノール・デンプンは非電解質です。',
        },
        {
          id: 'sci3-sol-q2',
          question: '塩化銅水溶液を電気分解したとき、陰極に現れる物質は？',
          options: ['塩素', '水素', '銅', '酸素'],
          correctIndex: 2,
          explanation:
            '陰極にはCu²⁺が引きつけられ、電子を受け取って銅（赤色の固体）が付着します。',
        },
        {
          id: 'sci3-sol-q3',
          question: '原子核を構成する粒子の正しい組み合わせは？',
          options: [
            '陽子と電子',
            '陽子と中性子',
            '電子と中性子',
            '陽子と電子と中性子',
          ],
          correctIndex: 1,
          explanation:
            '原子核は陽子（＋の電気をもつ）と中性子（電気をもたない）からできています。電子は原子核のまわりを回っています。',
        },
        {
          id: 'sci3-sol-q4',
          question: '原子が電子を得てできるイオンを何という？',
          options: ['陽イオン', '陰イオン', '中性子', '同位体'],
          correctIndex: 1,
          explanation:
            '電子（−の電気）を得ると−の電気が多くなり、陰イオンになります。例：Cl⁻、OH⁻',
        },
        {
          id: 'sci3-sol-q5',
          question: '塩化水素（HCl）が水に溶けて電離したときのイオンの組み合わせは？',
          options: [
            'H⁺ と Cl⁻',
            'H⁻ と Cl⁺',
            'H₂ と Cl₂',
            'Na⁺ と Cl⁻',
          ],
          correctIndex: 0,
          explanation:
            '塩化水素は水に溶けるとH⁺（水素イオン）とCl⁻（塩化物イオン）に電離します。HCl → H⁺ + Cl⁻',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-sol-ex1',
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
      ],
    },
    chatId: 'sci3-solution-ions',
  },
};
