import type { Topic } from '../../../../../../../types';

export const chemicalBattery: Topic = {
  id: 'sci3-chemical-battery',
  eraId: 'sci3-chemistry',
  name: '化学変化と電池',
  subtitle: 'イオン化傾向・ダニエル電池・身近な電池',
  icon: '🔋',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '電池のしくみ',
          content:
            '電池は、電解質水溶液に異なる2種類の金属を入れることで、化学エネルギーを電気エネルギーに変換する装置です。イオンになりやすい金属が−極（負極）となり、電子を放出します。その電子が導線を通ってもう一方の金属（＋極・正極）に流れることで電流が生じます。',
          image: {
            src: '/images/science/grade3/chemistry/battery-model.svg',
            alt: 'ダニエル電池のしくみ',
            caption: '電池の基本構造',
          },
          keyPoints: [
            '電池の3要素：電解質水溶液 + 異なる2種類の金属',
            'イオンになりやすい金属 → −極（電子を放出する側）',
            '化学エネルギー → 電気エネルギーへの変換装置',
          ],
        },
        {
          title: '金属のイオン化傾向',
          content:
            '金属にはイオンになりやすさの順番（イオン化傾向）があります。イオン化傾向が大きい金属ほど電子を失いやすく、水溶液中でイオンになりやすいです。電池では、イオン化傾向が大きい金属が−極になります。',
          image: {
            src: '/images/science/grade3/chemistry/ionization-tendency.svg',
            alt: 'イオン化傾向の序列図',
            caption: 'Mg > Zn > Fe > Cu > Ag',
          },
          keyPoints: [
            'イオン化傾向の大きい順：Mg（マグネシウム） > Zn（亜鉛） > Fe（鉄） > Cu（銅） > Ag（銀）',
            'イオン化傾向が大きい金属 = 電子を失いやすい = −極になる',
            '2つの金属のイオン化傾向の差が大きいほど、大きな電圧が得られる',
          ],
        },
        {
          title: 'ダニエル電池と身近な電池',
          content:
            'ダニエル電池は、亜鉛板を硫酸亜鉛水溶液に、銅板を硫酸銅水溶液に入れ、2つの水溶液をセロハン膜で仕切った電池です。身近な電池には、使い切りの一次電池（マンガン乾電池など）、充電できる二次電池（リチウムイオン電池など）、水素と酸素から電気を作る燃料電池があります。',
          keyPoints: [
            'ダニエル電池：Zn板（−極）+ ZnSO₄水溶液 ｜セロハン膜｜ CuSO₄水溶液 + Cu板（＋極）',
            '一次電池：マンガン乾電池、アルカリ乾電池（使い切り）',
            '二次電池：リチウムイオン電池、鉛蓄電池（充電可能）',
            '燃料電池：水素 + 酸素 → 水 + 電気エネルギー（クリーンエネルギー）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-bat-slide1',
          title: '電池はどうやって電気を作る？',
          slides: [
            {
              type: 'question',
              question: 'レモンに2種類の金属を刺すと電気が流れるのはなぜ？',
              subtext: '電池のしくみ',
              emoji: '🍋',
              image: {
                src: '/images/science/grade3/chemistry/battery-model.svg',
                alt: '電池のしくみの模式図',
              },
            },
            {
              type: 'reason',
              headline: '電解質 + 異なる金属 = 化学エネルギーが電気に変わる！',
              points: [
                'レモンの果汁は電解質水溶液の役割',
                'イオンになりやすい金属が電子を放出（−極）',
                '電子が導線を通って＋極に流れ、電流が発生',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '−極', value: 'イオンになりやすい金属', emoji: '➖' },
                  { label: '→ 電子の流れ →', emoji: '⚡' },
                  { label: '＋極', value: 'イオンになりにくい金属', emoji: '➕' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '電池 = 化学エネルギーを電気エネルギーに変える装置！',
              keywords: [
                { text: '電池', isImportant: true },
                { text: '−極（負極）', isImportant: true },
                { text: '＋極（正極）', isImportant: true },
              ],
              nextHint: 'どの金属が−極になるかはどうやって決まる？',
            },
          ],
        },
        {
          id: 'sci3-bat-slide2',
          title: 'イオン化傾向で極を見分けよう',
          slides: [
            {
              type: 'question',
              question: '亜鉛と銅を使った電池、どちらが−極になる？',
              subtext: 'イオン化傾向',
              emoji: '🔗',
            },
            {
              type: 'reason',
              headline: '亜鉛が−極！イオンになりやすい方が−極になる！',
              points: [
                'イオン化傾向：Mg > Zn > Fe > Cu > Ag',
                'Zn（亜鉛）はCu（銅）よりイオンになりやすい',
                'イオン化傾向の差が大きいほど電圧が大きい',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: 'Mg', value: 'とても溶けやすい', emoji: '🥇' },
                  { label: 'Zn', value: '溶けやすい', emoji: '🥈' },
                  { label: 'Cu', value: '溶けにくい', emoji: '🥉' },
                  { label: 'Ag', value: 'とても溶けにくい', emoji: '🏅' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'イオン化傾向が大きい金属 = −極！覚え方：Mg > Zn > Cu > Ag',
              keywords: [
                { text: 'イオン化傾向', isImportant: true },
                { text: '−極 = イオンになりやすい方', isImportant: true },
              ],
              nextHint: '実用的な電池はどんなしくみ？',
            },
          ],
        },
        {
          id: 'sci3-bat-slide3',
          title: 'ダニエル電池と身近な電池',
          slides: [
            {
              type: 'question',
              question: 'スマホの充電池と乾電池のちがいは何？',
              subtext: '電池の種類',
              emoji: '📱',
              image: {
                src: '/images/science/grade3/chemistry/battery-model.svg',
                alt: 'ダニエル電池の模式図',
              },
            },
            {
              type: 'reason',
              headline: '一次電池は使い切り、二次電池は充電できる！',
              points: [
                'ダニエル電池：Zn板（−極）とCu板（＋極）をセロハン膜で仕切る',
                '一次電池（マンガン乾電池）：化学反応が一方向で使い切り',
                '二次電池（リチウムイオン電池）：充電で逆反応が起こり繰り返し使える',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '電池は化学反応で電気を作る！種類によって特徴がちがう！',
              keywords: [
                { text: 'ダニエル電池', isImportant: true },
                { text: '一次電池', isImportant: true },
                { text: '二次電池', isImportant: true },
                { text: '燃料電池' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-bat-fc1',
        front: 'イオンになりやすい金属',
        back: '電池で−極（負極）になるのは、イオン化傾向がどちらの金属？',
        explanation: 'イオン化傾向が大きい（イオンになりやすい）金属が−極になり、電子を放出する。',
      },
      {
        id: 'sci3-bat-fc2',
        front: 'Mg > Zn > Fe > Cu > Ag',
        back: '金属のイオン化傾向を大きい順に並べると？（5つ）',
        explanation: 'マグネシウムが最もイオンになりやすく、銀が最もなりにくい。',
      },
      {
        id: 'sci3-bat-fc3',
        front: 'ダニエル電池',
        back: '亜鉛板と銅板をそれぞれの硫酸塩水溶液に入れ、セロハン膜で仕切った電池を何という？',
        explanation: 'Zn板が−極、Cu板が＋極。セロハン膜はイオンを通すが液の混合を防ぐ。',
      },
      {
        id: 'sci3-bat-fc4',
        front: '二次電池',
        back: '充電して繰り返し使える電池を何という？',
        explanation: 'リチウムイオン電池や鉛蓄電池が代表例。スマホやノートPCに使われている。',
      },
      {
        id: 'sci3-bat-fc5',
        front: '燃料電池',
        back: '水素と酸素を反応させて電気エネルギーを取り出す電池を何という？',
        explanation: '水しか排出しないクリーンエネルギー。燃料電池自動車などに使われている。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-bat-q1',
          question: '電池をつくるために必要な条件として正しいものは？',
          options: [
            '同じ種類の金属2枚と蒸留水',
            '異なる2種類の金属と電解質水溶液',
            '1種類の金属と蒸留水',
            '異なる2種類の金属と蒸留水',
          ],
          correctIndex: 1,
          explanation:
            '電池には「異なる2種類の金属」と「電解質水溶液」が必要です。蒸留水はイオンを含まないので電池になりません。',
        },
        {
          id: 'sci3-bat-q2',
          question: '亜鉛（Zn）と銅（Cu）で電池をつくったとき、−極になるのはどちら？',
          options: ['銅（Cu）', '亜鉛（Zn）', 'どちらも−極', 'どちらも＋極'],
          correctIndex: 1,
          explanation:
            'イオン化傾向はZn > Cuなので、イオンになりやすい亜鉛が−極になります。',
        },
        {
          id: 'sci3-bat-q3',
          question: '次のうち、イオン化傾向が最も大きい金属は？',
          options: ['銅（Cu）', '銀（Ag）', 'マグネシウム（Mg）', '亜鉛（Zn）'],
          correctIndex: 2,
          explanation:
            'イオン化傾向の大きい順はMg > Zn > Fe > Cu > Ag。マグネシウムが最もイオンになりやすいです。',
        },
        {
          id: 'sci3-bat-q4',
          question: 'ダニエル電池でセロハン膜の役割は？',
          options: [
            '電流を流す',
            '2つの水溶液の混合を防ぎながらイオンを通す',
            '電子を通す',
            '金属を溶かす',
          ],
          correctIndex: 1,
          explanation:
            'セロハン膜は2つの水溶液が直接混ざるのを防ぎつつ、イオンを通して回路を完成させます。',
        },
        {
          id: 'sci3-bat-q5',
          question: '充電して繰り返し使える電池を何という？',
          options: ['一次電池', '二次電池', '燃料電池', '乾電池'],
          correctIndex: 1,
          explanation:
            '二次電池は充電により化学反応を逆向きに起こし、繰り返し使えます。リチウムイオン電池などが代表例です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-bat-ex1',
          question:
            'マグネシウム（Mg）と銅（Cu）を使って電池をつくるとき、どちらの金属が−極になるか答え、その理由も説明しなさい。',
          steps: [
            {
              title: 'Step 1: イオン化傾向を確認する',
              content:
                '金属のイオン化傾向の順番を思い出します。Mg > Zn > Fe > Cu > Ag',
              highlight: 'Mg > Cu',
            },
            {
              title: 'Step 2: −極になる金属を判断する',
              content:
                'イオン化傾向が大きい金属（イオンになりやすい金属）が−極になります。MgはCuよりイオン化傾向が大きいので、Mgが−極です。',
              highlight: 'Mg が −極',
            },
            {
              title: 'Step 3: 理由をまとめる',
              content:
                'マグネシウムは銅よりイオン化傾向が大きく、電子を失ってイオンになりやすいため、−極として電子を放出します。',
              highlight: 'イオン化傾向：Mg > Cu → Mgが電子を放出し−極になる',
            },
          ],
          answer: 'マグネシウム（Mg）が−極になる。\nMgはCuよりイオン化傾向が大きく、電子を失ってMg²⁺になりやすいため、−極として電子を放出する。',
        },
      ],
    },
    chatId: 'sci3-chemical-battery',
  },
};
