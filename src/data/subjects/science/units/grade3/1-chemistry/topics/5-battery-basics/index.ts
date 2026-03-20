import type { Topic } from '../../../../../../../types';

export const batteryBasics: Topic = {
  id: 'sci3-battery-basics',
  eraId: 'sci3-chemistry',
  name: '電池のしくみ',
  subtitle: '電池の条件・電極反応・イオン化傾向',
  icon: '🔋',
  order: 5,
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
            '電池の2条件：①異なる2種類の金属 ②電解質水溶液',
            '同じ金属2枚 → イオン化傾向の差がなく電子が移動しない → NG',
            '蒸留水 → イオンが存在しない → NG',
            '砂糖水 → 非電解質（分子のまま）でイオンにならない → NG',
            'イオンになりやすい金属 → −極（電子を放出する側）',
          ],
        },
        {
          title: '電極の反応と電子の流れ',
          content:
            'うすい塩酸に亜鉛板と銅板を入れた電池では、−極（亜鉛板）で Zn → Zn²⁺ + 2e⁻ の反応が起き、亜鉛が溶けて電子を放出します。＋極（銅板）では 2H⁺ + 2e⁻ → H₂ の反応で水素が発生します。電子は−極から導線を通って＋極へ流れますが、電流の向きはその逆（＋極→−極）と定義されています。',
          keyPoints: [
            '−極（Zn板）: Zn → Zn²⁺ + 2e⁻（亜鉛が溶けて小さくなる）',
            '＋極（Cu板）: 2H⁺ + 2e⁻ → H₂（水素が発生）',
            '電子の流れ：−極（Zn）→ 導線 → ＋極（Cu）',
            '電流の向き：＋極 → −極（電子の流れと逆！）',
            '＋極表面に水素の気泡が付着すると電圧が低下する（簡単な電池の欠点）',
          ],
        },
        {
          title: '金属のイオン化傾向',
          content:
            '金属にはイオンになりやすさの順番（イオン化傾向）があります。イオン化傾向が大きい金属ほど電子を失いやすく、水溶液中でイオンになりやすいです。電池では、イオン化傾向が大きい金属が−極になります。イオン化傾向の差を利用して「金属の置き換え反応」も起こります。',
          image: {
            src: '/images/science/grade3/chemistry/ionization-tendency.svg',
            alt: 'イオン化傾向の序列図',
            caption: 'Mg > Zn > Fe > Cu > Ag',
          },
          keyPoints: [
            'イオン化傾向の大きい順：Mg（マグネシウム） > Zn（亜鉛） > Fe（鉄） > Cu（銅） > Ag（銀）',
            'イオン化傾向が大きい金属 = 電子を失いやすい = −極になる',
            '2つの金属のイオン化傾向の差が大きいほど、大きな電圧が得られる',
            '硫酸銅水溶液 + Zn板 → Zn板に赤色の銅が付着（Zn > Cuだから）',
            '硝酸銀水溶液 + Cu線 → Cu線に銀が付着、水溶液が青色に（Cu > Agだから）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-bb-slide1',
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
          id: 'sci3-bb-slide2',
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
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-bb-fc1',
        front: '①異なる2種類の金属 ②電解質水溶液',
        back: '電池をつくるために必要な2つの条件は？',
        explanation:
          'イオン化傾向の差がある金属と、イオンを含む水溶液（電解質）が必要。同じ金属・蒸留水・砂糖水ではNG。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc2',
        front: '−極: Zn → Zn²⁺ + 2e⁻',
        back: 'うすい塩酸を使った電池で、−極（亜鉛板）の反応を化学式で書くと？',
        explanation:
          '亜鉛原子が電子を2個失って亜鉛イオンになり、水溶液中に溶け出す。Zn板はしだいに小さくなる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc3',
        front: '＋極: 2H⁺ + 2e⁻ → H₂',
        back: 'うすい塩酸を使った電池で、＋極（銅板）の反応を化学式で書くと？',
        explanation:
          '水溶液中の水素イオン（H⁺）が電子を受け取って水素（H₂）が発生する。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc4',
        front: '電子：−極→＋極、電流：＋極→−極（逆！）',
        back: '電池の電子の流れる向きと電流の向きの関係は？',
        explanation:
          '電子は−極（Zn板）から導線を通って＋極（Cu板）へ流れる。電流の向きはその逆で、＋極→−極と定義される。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc5',
        front: 'Mg > Zn > Fe > Cu > Ag',
        back: '金属のイオン化傾向を大きい順に並べると？（5つ）',
        explanation:
          'マグネシウムが最もイオンになりやすく、銀が最もなりにくい。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc6',
        front: '亜鉛板の表面に赤色の銅が付着する',
        back: '硫酸銅水溶液に亜鉛板を入れるとどうなる？（金属の置き換え反応）',
        explanation:
          'Zn > Cuなので、Znが電子を失ってZn²⁺に、Cu²⁺が電子を受け取ってCuとして析出する。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc7',
        front: '−極の金属がしだいに溶けて小さくなる',
        back: '電池で電流を流し続けると、−極の金属板はどうなる？',
        explanation:
          '金属原子がイオンになって水溶液中に溶け出すため（例：Zn → Zn²⁺ + 2e⁻）。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc8',
        front: '＋極に水素の気泡が付着し、電圧が下がる',
        back: 'うすい塩酸を使った簡単な電池の欠点は？',
        explanation:
          '銅板表面にH₂の気泡がくっつき、塩酸との接触が妨げられる。ダニエル電池はセロハン膜でこれを解決。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc9',
        front: '電池になる',
        back: '食塩水に異なる2種類の金属板を入れると電池になる？',
        explanation: '食塩（NaCl）は電解質なので、異なる2種類の金属との組み合わせで電池の条件を満たす。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-bb-fc10',
        front: '果汁にクエン酸などの電解質が含まれ、異なる金属との組み合わせで電池の条件を満たすから',
        back: '果物に2種類の金属を刺すと電気が流れるのはなぜ？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-bb-fc11',
        front: 'Mg > Zn > Cu の順',
        back: 'マイクロプレート実験（硫酸銅・硫酸亜鉛・硫酸マグネシウム × Mg・Zn・Cu）の結果から導かれるイオン化傾向の順番は？',
        explanation:
          'MgはZn²⁺もCu²⁺も置き換えたが、ZnはCu²⁺のみ置き換え、Cuはどのイオンも置き換えなかった。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc12',
        front: '銅線に銀が付着し、水溶液が青色になる',
        back: '硝酸銀水溶液に銅線を入れるとどうなる？',
        explanation:
          'Cu > Agなので、Cuが電子を失ってCu²⁺に、Ag⁺が電子を受け取ってAgとして析出する。Cu²⁺により水溶液が青色に。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-bb-fc13',
        front: '変化なし',
        back: '硫酸亜鉛水溶液に銅板を入れるとどうなる？',
        explanation: 'イオン化傾向がZn > Cuなので、CuはZn²⁺を置き換えることができず、反応は起こらない。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-bb-fc14',
        front: 'Zn + Cu²⁺ → Zn²⁺ + Cu',
        back: '硫酸銅水溶液と亜鉛板の置き換え反応を、全体のイオン式で書くと？',
        explanation:
          '亜鉛原子がZn²⁺になって溶け出し、Cu²⁺が電子を受け取って銅として析出する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-bb-fc15',
        front: '化学エネルギー → 電気エネルギー',
        back: '電池は何エネルギーを何エネルギーに変換する装置？',
        explanation:
          '電池は金属の化学反応（酸化還元反応）による化学エネルギーを、電気エネルギーに変換する装置。',
        difficulty: 'standard',
      },
      { id: 'sci3-bb-fc16', front: '2つの金属のイオン化傾向の差が大きいほど大きい', back: '電池の電圧を大きくするにはどうすればよい？', difficulty: 'standard' },
      { id: 'sci3-bb-fc17', front: 'MgとCuの電池のほうが電圧が大きい', back: 'ZnとCuの電池とMgとCuの電池では、どちらの電圧が大きい？', difficulty: 'standard' },
      { id: 'sci3-bb-fc18', front: 'ならない（イオン化傾向の差がないため）', back: '同じ金属2枚を電解質水溶液に入れると電池になるか？', difficulty: 'standard' },
      { id: 'sci3-bb-fc19', front: 'イオン化傾向が小さい金属が＋極', back: '電池で＋極（正極）になるのは、イオン化傾向がどちらの金属？', difficulty: 'standard' },
      { id: 'sci3-bb-fc20', front: '＋極（銅板）から水素が発生する', back: 'うすい塩酸を使った電池で、＋極にはどのような変化が起こる？', difficulty: 'standard' },
      { id: 'sci3-bb-fc21', front: '置き換え反応', back: 'イオン化傾向の大きい金属がイオンになり、水溶液中のイオンが金属として析出する反応を何という？', difficulty: 'standard' },
      { id: 'sci3-bb-fc22', front: 'Cu + 2Ag⁺ → Cu²⁺ + 2Ag', back: '硝酸銀水溶液に銅線を入れたときの反応をイオン式で書くと？', difficulty: 'standard' },
      { id: 'sci3-bb-fc23', front: '鉄（Fe）', back: 'イオン化傾向の序列 Mg > Zn > Fe > Cu > Ag で、ZnとCuの間に位置する金属は？', difficulty: 'advanced' },
      { id: 'sci3-bb-fc24', front: '電子を失いやすい（イオンになりやすい）', back: 'イオン化傾向が大きい金属の性質は？', difficulty: 'advanced' },
      { id: 'sci3-bb-fc25', front: '亜鉛板がボロボロに溶ける', back: 'うすい塩酸を使った電池で長時間電流を流すと、−極（亜鉛板）はどうなる？', difficulty: 'advanced' },
      { id: 'sci3-bb-fc26', front: 'Mg + Cu²⁺ → Mg²⁺ + Cu', back: '硫酸銅水溶液にMg片を入れたときの反応をイオン式で書くと？', difficulty: 'advanced' },
      { id: 'sci3-bb-fc27', front: 'MgはZn²⁺もCu²⁺も置き換えた', back: 'マイクロプレート実験でMgのイオン化傾向が最大だとわかった根拠は？', difficulty: 'advanced' },
      { id: 'sci3-bb-fc28', front: '電流の向きと電子の流れは逆', back: '電池の回路で電流の向きと電子の流れの関係は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-bb-q1',
          question: '電池をつくるために必要な条件として正しいものは？',
          options: [
            '異なる2種類の金属と電解質水溶液',
            '同じ種類の金属2枚と蒸留水',
            '1種類の金属と蒸留水',
            '異なる2種類の金属と蒸留水',
          ],
          correctIndex: 0,
          explanation:
            '電池には「異なる2種類の金属」と「電解質水溶液」が必要です。蒸留水はイオンを含まないので電池になりません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q2',
          question:
            '砂糖水に異なる2種類の金属板を入れても電池にならない。その理由は？',
          options: [
            '砂糖水は酸性だから',
            '砂糖が金属を溶かしてしまうから',
            '砂糖水は電気を通しすぎるから',
            '砂糖は非電解質で、水に溶けてもイオンにならないから',
          ],
          correctIndex: 3,
          explanation:
            '砂糖は非電解質なので、水に溶けても分子のままでイオンに分かれません。イオンがないと電気を運べないので電池になりません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q3',
          question: '亜鉛（Zn）と銅（Cu）で電池をつくったとき、−極になるのはどちら？',
          options: ['銅（Cu）', 'どちらも−極', '亜鉛（Zn）', 'どちらも＋極'],
          correctIndex: 2,
          explanation:
            'イオン化傾向はZn > Cuなので、イオンになりやすい亜鉛が−極になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q4',
          question:
            'うすい塩酸を使った電池で、−極（亜鉛板）の反応を化学式で表すと？',
          options: ['Zn → Zn²⁺ + 2e⁻','Cu → Cu²⁺ + 2e⁻','2H⁺ + 2e⁻ → H₂','Zn²⁺ + 2e⁻ → Zn',
          ],
          correctIndex: 0,
          explanation:
            '−極では亜鉛原子が電子を2個失って亜鉛イオン（Zn²⁺）になり、水溶液中に溶け出します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q5',
          question: '電池の電子の流れる向きと電流の向きについて正しいのは？',
          options: [
            '電子も電流も＋極から−極へ流れる',
            '電子は−極→＋極、電流は＋極→−極（逆向き）',
            '電子も電流も−極から＋極へ流れる',
            '電子は＋極→−極、電流は−極→＋極',
          ],
          correctIndex: 1,
          explanation:
            '電子は−極から導線を通って＋極へ流れます。電流の向きは電子の流れと逆で、＋極→−極と定義されています。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q6',
          question: '次のうち、イオン化傾向が最も大きい金属は？',
          options: ['銅（Cu）', '銀（Ag）', 'マグネシウム（Mg）', '亜鉛（Zn）'],
          correctIndex: 2,
          explanation:
            'イオン化傾向の大きい順はMg > Zn > Fe > Cu > Ag。マグネシウムが最もイオンになりやすいです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q7',
          question: '硫酸銅水溶液に亜鉛板を入れると、亜鉛板の表面に何が起こる？',
          options: [
            '赤色の物質（銅）が付着する',
            '銀色の物質が付着する',
            '何も変化しない',
            '気泡が発生する',
          ],
          correctIndex: 0,
          explanation:
            'Zn > Cuなので、Znが電子を失ってZn²⁺になり、Cu²⁺が電子を受け取って銅として亜鉛板に析出します（赤色）。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q8',
          question:
            'マイクロプレート実験で、硫酸マグネシウム水溶液に亜鉛片を入れた結果はどうなる？',
          options: [
            '亜鉛片に赤色の物質が付着する',
            '亜鉛片にマグネシウムが付着する',
            '気泡が発生する',
            '変化なし',
          ],
          correctIndex: 3,
          explanation:
            'イオン化傾向はMg > Znなので、ZnはMg²⁺を置き換えることができず変化なしです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q9',
          question:
            '次の組み合わせのうち、金属の置き換え反応が起こらないものはどれ？',
          options: [
            '硫酸銅水溶液 + Zn板',
            '硝酸銀水溶液 + Cu線',
            '硫酸銅水溶液 + Mg片',
            '硫酸亜鉛水溶液 + Cu板',
          ],
          correctIndex: 3,
          explanation:
            'イオン化傾向はZn > Cuなので、CuはZn²⁺を置き換えることができません。置き換え反応は入れる金属のイオン化傾向が大きいときのみ起こります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q10',
          question:
            '硝酸銀水溶液に銅線を入れたとき、水溶液の色はどう変わる？',
          options: [
            '青色がうすくなる',
            '赤色になる',
            '無色から青色になる',
            '変化しない',
          ],
          correctIndex: 2,
          explanation:
            'Cu > Agなので、Cuが電子を失ってCu²⁺（銅イオン）になって水溶液中に溶け出します。Cu²⁺は青色なので水溶液が青色になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-bb-q11',
          question:
            'マイクロプレート実験の結果から、Mg・Zn・Cuのイオン化傾向の順番として正しいのは？',
          options: [
            'Mg > Zn > Cu',
            'Zn > Mg > Cu',
            'Cu > Zn > Mg',
            'Mg > Cu > Zn',
          ],
          correctIndex: 0,
          explanation:
            'MgはZn²⁺もCu²⁺も置き換え、ZnはCu²⁺のみ置き換え、Cuはどれも置き換えなかったことから、Mg > Zn > Cuの順です。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-bb-q12',
          question: '電池は何エネルギーを何エネルギーに変換する装置か？',
          options: ['電気エネルギーを化学エネルギーに','光エネルギーを化学エネルギーに','熱エネルギーを電気エネルギーに','化学エネルギーを電気エネルギーに',
          ],
          correctIndex: 3,
          explanation:
            '電池は金属の酸化還元反応（化学反応）のエネルギーを電気エネルギーに変換する装置です。',
        difficulty: 'standard',
      },
        { id: 'sci3-bb-q13', question: 'MgとCuで電池をつくったとき、＋極になるのはどちら？', options: ['マグネシウム', '銅', 'どちらも＋極', 'どちらも−極'], correctIndex: 1, explanation: 'イオン化傾向はMg > Cuなので、イオンになりにくい銅が＋極になります。', difficulty: 'standard' },
        { id: 'sci3-bb-q14', question: 'MgとCuの電池とZnとCuの電池、どちらの電圧が大きい？', options: ['ZnとCuの電池','電圧は生じない','同じ','MgとCuの電池'], correctIndex: 3, explanation: 'MgとCuのほうがイオン化傾向の差が大きいため、より大きな電圧が得られます。', difficulty: 'standard' },
        { id: 'sci3-bb-q15', question: '食塩水に異なる2種類の金属板を入れると電池になるか？', options: ['ならない', '電池になる', '金属が溶ける', '気体が発生するだけ'], correctIndex: 1, explanation: '食塩（NaCl）は電解質なので、異なる2種類の金属と合わせると電池の条件を満たします。', difficulty: 'standard' },
        { id: 'sci3-bb-q16', question: 'うすい塩酸を使った簡単な電池の欠点は？', options: ['電流が大きすぎる', '＋極に水素の気泡が付着して電圧が下がる', '金属が溶けない', '塩素が発生する'], correctIndex: 1, explanation: '銅板表面にH₂の気泡がくっつき、塩酸との接触が妨げられて電圧が低下します。', difficulty: 'standard' },
        { id: 'sci3-bb-q17', question: '硫酸銅水溶液にMg片を入れるとどうなる？', options: ['変化なし', '気泡が発生する', 'Mg片に赤色の銅が付着する', 'Mg片が青色になる'], correctIndex: 2, explanation: 'Mg > Cuなので、MgがMg²⁺になり、Cu²⁺が銅として析出しMg片に付着します。', difficulty: 'standard' },
        { id: 'sci3-bb-q18', question: '硝酸銀水溶液に銅線を入れたとき、銅線に付着する金属は？', options: ['金', '銀', '亜鉛', 'マグネシウム'], correctIndex: 1, explanation: 'Cu > Agなので、Cuが電子を失いCu²⁺に、Ag⁺が電子を受け取って銀として析出します。', difficulty: 'standard' },
        { id: 'sci3-bb-q19', question: '電池の−極で起こる変化は？', options: ['電子を受け取る', '気体が発生する', '金属がイオンになって溶け出す', '金属が析出する'], correctIndex: 2, explanation: '−極ではイオン化傾向の大きい金属が電子を失ってイオンになり、水溶液中に溶け出します。', difficulty: 'standard' },
        { id: 'sci3-bb-q20', question: '電池の＋極で起こる変化は？', options: ['金属がイオンになる','電子を放出する','金属が溶ける','水溶液中のイオンが電子を受け取る'], correctIndex: 3, explanation: '＋極では水溶液中のイオン（H⁺やCu²⁺など）が電子を受け取って物質として現れます。', difficulty: 'standard' },
        { id: 'sci3-bb-q21', question: 'レモンに銅板と亜鉛板を刺すと電池になる理由は？', options: ['レモンが電気を生み出すから', 'レモン果汁が電解質水溶液の役割をするから', '銅板と亜鉛板が同じ金属だから', 'レモンのビタミンCが反応するから'], correctIndex: 1, explanation: 'レモン果汁にはクエン酸などの電解質が含まれ、異なる2種類の金属との組み合わせで電池の条件を満たします。', difficulty: 'standard' },
        { id: 'sci3-bb-q22', question: '置き換え反応が起こる条件は？', options: ['入れる金属のイオン化傾向が水溶液中の金属イオンより小さいとき', '同じ金属を入れたとき', '入れる金属のイオン化傾向が水溶液中の金属イオンより大きいとき', '非電解質の水溶液に入れたとき'], correctIndex: 2, explanation: '入れる金属のイオン化傾向が大きいとき、その金属がイオンになり、水溶液中のイオンが金属として析出します。', difficulty: 'standard' },
        { id: 'sci3-bb-q23', question: 'イオン化傾向の序列で、鉄（Fe）の位置は？', options: ['Zn > Fe > Cu','Mg > Fe > Zn','Cu > Fe > Ag','Fe > Mg > Zn'], correctIndex: 0, explanation: 'イオン化傾向はMg > Zn > Fe > Cu > Agの順です。鉄はZnとCuの間に位置します。', difficulty: 'advanced' },
        { id: 'sci3-bb-q24', question: '硫酸銅水溶液に亜鉛板を入れたあと、水溶液の青色がうすくなる理由は？', options: ['亜鉛が青色を吸収するから', '温度が下がるから', 'Cu²⁺が減少するから', 'Zn²⁺が青色を打ち消すから'], correctIndex: 2, explanation: 'Cu²⁺（銅イオン）が電子を受け取って銅として析出するため、Cu²⁺の濃度が下がり青色がうすくなります。', difficulty: 'advanced' },
        { id: 'sci3-bb-q25', question: '電池の電流の向きはどちら？', options: ['＋極→−極','−極→＋極','電流は流れない','向きは決まっていない'], correctIndex: 0, explanation: '電流の向きは＋極→−極と定義されています。電子の流れは逆の−極→＋極です。', difficulty: 'advanced' },
        { id: 'sci3-bb-q26', question: '蒸留水に異なる2種類の金属板を入れても電池にならない理由は？', options: ['金属が溶けないから', '蒸留水にイオンが存在しないから', '金属が重すぎるから', '温度が低いから'], correctIndex: 1, explanation: '蒸留水にはイオンが含まれていないため、電気を運ぶことができず電池として機能しません。', difficulty: 'advanced' },
        { id: 'sci3-bb-q27', question: '硫酸亜鉛水溶液に銅板を入れると何が起こる？', options: ['銅板に亜鉛が付着する', '気泡が発生する', '水溶液が青色になる', '変化なし'], correctIndex: 3, explanation: 'イオン化傾向はZn > Cuなので、CuはZn²⁺を置き換えることができず変化は起こりません。', difficulty: 'advanced' },
        { id: 'sci3-bb-q28', question: '硝酸銀水溶液に銅線を入れたとき、水溶液の色が青色になる理由は？', options: ['銅原子が溶けてCu²⁺（青色）になるから','銀イオンが青色だから','硝酸イオンが青色になるから','水が青色に変化するから'], correctIndex: 0, explanation: 'CuがCu²⁺になって水溶液中に溶け出します。Cu²⁺は青色のイオンなので水溶液が青色になります。', difficulty: 'advanced' },
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
          answer:
            'マグネシウム（Mg）が−極になる。\nMgはCuよりイオン化傾向が大きく、電子を失ってMg²⁺になりやすいため、−極として電子を放出する。',
        },
        {
          id: 'sci3-bat-ex2',
          question:
            '次の①〜④の組み合わせのうち、電池として電流が流れるものをすべて選び、流れないものについてはその理由を説明しなさい。①銅板と亜鉛板＋うすい塩酸 ②銅板と銅板＋うすい塩酸 ③銅板と亜鉛板＋蒸留水 ④銅板と亜鉛板＋食塩水',
          steps: [
            {
              title: 'Step 1: 電池の2つの条件を確認',
              content:
                '電池が成立するには (A)異なる2種類の金属 (B)電解質水溶液 の2つの条件が必要です。',
              highlight: '条件：①異なる2種類の金属 ②電解質水溶液',
            },
            {
              title: 'Step 2: ①を確認',
              content:
                '銅と亜鉛＝異なる金属✓、うすい塩酸＝電解質✓ → 両方の条件を満たすので電流が流れます。',
              highlight: '①→ 電流が流れる',
            },
            {
              title: 'Step 3: ②を確認',
              content:
                '銅と銅＝同じ金属✗ → イオン化傾向の差がないため電子の移動が起きず、電流は流れません。',
              highlight: '②→ 流れない（同じ金属でイオン化傾向の差がない）',
            },
            {
              title: 'Step 4: ③を確認',
              content:
                '異なる金属✓ですが、蒸留水にはイオンが存在しないため✗、電気を運ぶ粒子がなく電流は流れません。',
              highlight: '③→ 流れない（蒸留水にイオンがない）',
            },
            {
              title: 'Step 5: ④を確認',
              content:
                '異なる金属✓、食塩水＝電解質✓ → 両方の条件を満たすので電流が流れます。',
              highlight: '④→ 電流が流れる',
            },
          ],
          answer:
            '電流が流れる：①と④\n②が流れない理由：同じ種類の金属（銅板2枚）ではイオン化傾向の差がなく、電子の移動が起こらないため。\n③が流れない理由：蒸留水にはイオンが含まれておらず、電気を運ぶことができないため。',
        },
        {
          id: 'sci3-bat-ex3',
          question:
            'うすい塩酸に亜鉛板と銅板を入れた電池について、(1)−極はどちらか、(2)−極と＋極で起こる変化を化学式で書き、(3)電子の移動する向きを答えなさい。',
          steps: [
            {
              title: 'Step 1: イオン化傾向を確認',
              content:
                'イオン化傾向はZn > Cuなので、亜鉛のほうがイオンになりやすいです。したがって亜鉛板が−極になります。',
              highlight: 'Zn > Cu → 亜鉛板が−極',
            },
            {
              title: 'Step 2: −極（Zn板）の反応',
              content:
                '亜鉛原子が電子を2個失ってイオンになり、水溶液中に溶け出します。',
              highlight: 'Zn → Zn²⁺ + 2e⁻',
            },
            {
              title: 'Step 3: 電子の移動',
              content:
                '放出された電子は導線を通って＋極（Cu板）へ移動します。',
              highlight: '電子：Zn板(−極) → 導線 → Cu板(＋極)',
            },
            {
              title: 'Step 4: ＋極（Cu板）の反応',
              content:
                'うすい塩酸中のH⁺（水素イオン）が電子を受け取って水素が発生します。',
              highlight: '2H⁺ + 2e⁻ → H₂',
            },
            {
              title: 'Step 5: 電流の向きを確認',
              content:
                '電流の向きは電子の流れと逆なので、銅板（＋極）→ 導線 → 亜鉛板（−極）となります。',
              highlight: '電流の向き：＋極 → −極（電子と逆！）',
            },
          ],
          answer:
            '(1) −極は亜鉛板\n(2) −極: Zn → Zn²⁺ + 2e⁻、＋極: 2H⁺ + 2e⁻ → H₂\n(3) 電子は亜鉛板(−極)から導線を通って銅板(＋極)へ移動する（電流の向きはその逆）',
        },
        {
          id: 'sci3-bat-ex4',
          question:
            '硫酸銅水溶液に亜鉛板を入れたところ、亜鉛板の表面に赤色の物質が付着し、水溶液の青色がうすくなった。(1)付着した赤色の物質は何か、(2)この変化が起こる理由をイオン化傾向を使って説明しなさい。',
          steps: [
            {
              title: 'Step 1: 赤色の物質を特定する',
              content:
                '赤色の金属といえば銅（Cu）です。水溶液中のCu²⁺が銅原子として析出しました。',
              highlight: '赤色の物質 = 銅（Cu）',
            },
            {
              title: 'Step 2: イオン化傾向を確認する',
              content:
                'イオン化傾向はZn > Cuなので、亜鉛のほうが銅よりイオンになりやすいです。',
              highlight: 'Zn > Cu（亜鉛のほうがイオンになりやすい）',
            },
            {
              title: 'Step 3: 亜鉛側の変化',
              content:
                '亜鉛が電子を失ってZn²⁺になり、水溶液中に溶け出します。',
              highlight: 'Zn → Zn²⁺ + 2e⁻',
            },
            {
              title: 'Step 4: 銅イオン側の変化',
              content:
                '放出された電子をCu²⁺が受け取り、銅原子になって亜鉛板の表面に析出します。',
              highlight: 'Cu²⁺ + 2e⁻ → Cu',
            },
            {
              title: 'Step 5: 水溶液の色の変化',
              content:
                '青色のもとであるCu²⁺（銅イオン）が減少するため、水溶液の青色がうすくなります。',
              highlight: 'Cu²⁺が減少 → 青色がうすくなる',
            },
            {
              title: 'Step 6: 全体の反応',
              content:
                '亜鉛が銅イオンを「置き換えた」反応です。全体式にまとめます。',
              highlight: 'Zn + Cu²⁺ → Zn²⁺ + Cu',
            },
          ],
          answer:
            '(1) 銅（Cu）\n(2) 亜鉛は銅よりイオン化傾向が大きいため、亜鉛原子が電子を失ってZn²⁺となり水溶液中に溶け出す。一方、水溶液中のCu²⁺が電子を受け取って銅原子として析出する。（Zn + Cu²⁺ → Zn²⁺ + Cu）',
        },
        {
          id: 'sci3-bb-ex5',
          question:
            'マイクロプレート実験で、3種類の金属片（Mg、Zn、Cu）と3種類の水溶液（硫酸マグネシウム、硫酸亜鉛、硫酸銅）を使い、以下の結果を得た。硫酸銅水溶液＋Mg→変化あり、硫酸銅水溶液＋Zn→変化あり、硫酸マグネシウム水溶液＋Cu→変化なし、硫酸マグネシウム水溶液＋Zn→変化なし、硫酸亜鉛水溶液＋Cu→変化なし、硫酸亜鉛水溶液＋Mg→変化あり。(1)この結果から3つの金属のイオン化傾向の順番を示し、(2)その根拠を実験結果をもとに説明しなさい。',
          steps: [
            {
              title: 'Step 1: Mgについての結果を整理',
              content:
                'MgはZn²⁺（硫酸亜鉛水溶液）もCu²⁺（硫酸銅水溶液）も置き換えた → Mgのイオン化傾向はZnとCuより大きい',
              highlight: 'Mg > Zn、Mg > Cu',
            },
            {
              title: 'Step 2: Znについての結果を整理',
              content:
                'ZnはCu²⁺（硫酸銅水溶液）を置き換えたが、Mg²⁺（硫酸マグネシウム水溶液）は置き換えなかった → ZnのイオンかMgより小さく、Cuより大きい',
              highlight: 'Mg > Zn > Cu',
            },
            {
              title: 'Step 3: Cuについての結果を整理',
              content:
                'CuはMg²⁺もZn²⁺も置き換えなかった → Cuのイオン化傾向は3つの中で最も小さい',
              highlight: 'Cu は最もイオンになりにくい',
            },
            {
              title: 'Step 4: 結論をまとめる',
              content:
                '「変化あり」=入れた金属のイオン化傾向が大きい、「変化なし」=水溶液中の金属イオンのほうがイオン化傾向が大きい。すべての結果が矛盾なくMg > Zn > Cuの順を示している。',
              highlight: 'イオン化傾向：Mg > Zn > Cu',
            },
          ],
          answer:
            '(1) Mg > Zn > Cu\n(2) MgはZn²⁺もCu²⁺も置き換えたことからMgのイオン化傾向が最大。ZnはCu²⁺を置き換えたがMg²⁺は置き換えなかったことからZn > Cu かつ Zn < Mg。Cuはどのイオンも置き換えなかったことからCuが最小。よってMg > Zn > Cuの順。',
        },
      ],
    },
    chatId: 'sci3-battery-basics',
  },
};
