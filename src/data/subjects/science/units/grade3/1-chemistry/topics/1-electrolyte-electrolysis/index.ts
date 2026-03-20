import type { Topic } from '../../../../../../../types';

export const electrolyteElectrolysis: Topic = {
  id: 'sci3-electrolyte-electrolysis',
  eraId: 'sci3-chemistry',
  name: '電解質と電気分解',
  subtitle: '電解質・非電解質・電気分解のしくみ',
  icon: '⚡',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '電解質と非電解質',
          content:
            '物質を水に溶かしたとき、その水溶液に電流が流れるかどうかで物質を2つに分類できます。電流が流れる物質を電解質、流れない物質を非電解質といいます。電解質は水に溶けるとイオンに分かれる（電離する）ため、イオンが電気を運んで電流が流れます。蒸留水（精製水）にはイオンが存在しないため、電流は流れません。',
          image: {
            src: '/images/science/grade3/chemistry/electrolysis-model.svg',
            alt: 'NaClの電離イメージ',
            caption: '電解質が水に溶けてイオンに分かれるようす',
          },
          keyPoints: [
            '電解質：塩化ナトリウム（NaCl）、塩化水素（HCl）、水酸化ナトリウム（NaOH）、塩化銅（CuCl₂）、硫酸など',
            '非電解質：砂糖、エタノールなど（水に溶けてもイオンにならない）',
            '電解質の水溶液に電流が流れるのは、イオンが電気を運ぶから',
            '蒸留水だけでは電流は流れない（イオンが存在しないため）',
          ],
        },
        {
          title: '塩化銅水溶液の電気分解',
          content:
            '電解質の水溶液に電流を流すと、化学変化が起きて物質が分解されます。これを電気分解といいます。電源の＋極につないだ電極を陽極、−極につないだ電極を陰極といいます。塩化銅水溶液（青色）を電気分解すると、陰極に銅（赤色の固体）が付着し、陽極から塩素（刺激臭の気体）が発生します。',
          image: {
            src: '/images/science/grade3/chemistry/electrolysis-apparatus.svg',
            alt: '塩化銅水溶液の電気分解装置',
            caption: '陰極に銅、陽極に塩素が発生',
          },
          keyPoints: [
            '陽極 = 電源の＋極につないだ電極、陰極 = 電源の−極につないだ電極',
            '塩化銅水溶液の電気分解：陰極に銅（赤色の固体）、陽極に塩素（刺激臭の気体）',
            '化学反応式：CuCl₂ → Cu + Cl₂',
            '長時間続けると水溶液の青色がうすくなる（Cu²⁺が減少するため）',
            '陰極には陽イオン（Cu²⁺）が引きつけられ、電子を受け取って銅原子になり付着する',
          ],
        },
        {
          title: '塩酸の電気分解',
          content:
            '塩酸（塩化水素HClの水溶液）をH字管に入れて電気分解すると、陰極から水素、陽極から塩素が発生します。水素はマッチの火を近づけるとポンと音を立てて燃え、塩素は刺激臭があり漂白作用をもちます。',
          keyPoints: [
            '塩酸の電気分解にはH字管を使用する',
            '陰極から水素が発生（確認：マッチの火を近づけるとポンと音を立てて燃える）',
            '陽極から塩素が発生（確認：刺激臭、赤インクの色が消える＝漂白作用）',
            '水素のほうが多く集まる（塩素は水に溶けやすいため、一部が溶けて量が少なくなる）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-ee-slide1',
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
                '蒸留水もイオンがないから電気を通さない',
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
          id: 'sci3-ee-slide2',
          title: '塩化銅水溶液の電気分解',
          slides: [
            {
              type: 'question',
              question: '塩化銅水溶液に電流を流すと、何が出てくる？',
              subtext: '電気分解の実験',
              emoji: '🔬',
              image: {
                src: '/images/science/grade3/chemistry/electrolysis-apparatus.svg',
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
                '化学反応式：CuCl₂ → Cu + Cl₂',
                '長時間続けると青色がうすくなる（Cu²⁺が減る）',
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
              nextHint: '塩酸の電気分解も見てみよう！',
            },
          ],
        },
        {
          id: 'sci3-ee-slide3',
          title: '塩酸の電気分解',
          slides: [
            {
              type: 'question',
              question: '塩酸をH字管で電気分解すると何が出る？',
              subtext: '塩酸の電気分解実験',
              emoji: '🧪',
            },
            {
              type: 'reason',
              headline: '陰極に水素、陽極に塩素が発生する！',
              points: [
                '陰極：水素が発生（マッチの火でポンと音を立てて燃える）',
                '陽極：塩素が発生（刺激臭・赤インクの色が消える＝漂白作用）',
                '水素のほうが多く集まる（塩素は水に溶けやすいため）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '塩酸の電気分解：陰極に水素、陽極に塩素！',
              keywords: [
                { text: '水素', isImportant: true },
                { text: '塩素', isImportant: true },
                { text: '漂白作用' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-ee-fc1',
        front: '電解質',
        back: '水に溶かすと電流が流れる物質を何という？',
        explanation: '塩化ナトリウムや塩化水素などが電解質。水に溶けるとイオンに分かれる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc2',
        front: '非電解質',
        back: '水に溶かしても電流が流れない物質を何という？',
        explanation: '砂糖やエタノールなどが非電解質。水に溶けてもイオンにならない。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc3',
        front: '陰極に銅、陽極に塩素',
        back: '塩化銅水溶液を電気分解すると、それぞれの極に何が現れる？',
        explanation: 'Cu²⁺が陰極で銅に、Cl⁻が陽極で塩素ガスになる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc4',
        front: '電離',
        back: '電解質が水に溶けて陽イオンと陰イオンに分かれることを何という？',
        explanation: '例：NaCl → Na⁺ + Cl⁻',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc5',
        front: 'CuCl₂ → Cu + Cl₂',
        back: '塩化銅水溶液の電気分解を化学反応式で書くと？',
        explanation: '塩化銅が銅と塩素に分解される。陰極に銅が付着し、陽極から塩素が発生する。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc6',
        front: '陰極に水素、陽極に塩素',
        back: '塩酸を電気分解すると、それぞれの極から何が発生する？',
        explanation: '陰極の水素はマッチの火でポンと音がする。陽極の塩素は刺激臭があり漂白作用がある。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc7',
        front: '陽極',
        back: '電源装置の＋極につないだ電極を何という？',
        explanation: '陰イオン（Cl⁻など）が引きつけられる電極。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc8',
        front: '陰極',
        back: '電源装置の−極につないだ電極を何という？',
        explanation: '陽イオン（Cu²⁺、H⁺など）が引きつけられる電極。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc9',
        front: 'ナトリウムイオンやカリウムイオンなどの電解質がイオンとして溶けているから',
        back: 'スポーツドリンクに電流が流れるのはなぜ？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc10',
        front: 'クエン酸などの電解質が水中でイオンに電離しているから',
        back: 'レモン汁に電流が流れるのはなぜ？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc11',
        front: '電気分解',
        back: '電解質の水溶液に電流を流して物質を分解することを何という？',
        explanation:
          '電源装置の＋極側が陽極、−極側が陰極。イオンがそれぞれの電極に引きつけられて反応する。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc12',
        front: 'H字管',
        back: '塩酸の電気分解で使用する、陰極側と陽極側の気体を別々に集められる装置は？',
        explanation:
          'H字の形をしたガラス管。両方の管の上部に気体がたまる構造になっている。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc13',
        front: 'Cu²⁺ + 2e⁻ → Cu',
        back: '塩化銅水溶液の電気分解で、陰極での変化をイオン式で表すと？',
        explanation:
          '銅イオンが陰極に引きつけられ、電子を2個受け取って銅原子になり電極に付着する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc14',
        front: '2Cl⁻ → Cl₂ + 2e⁻',
        back: '塩化銅水溶液の電気分解で、陽極での変化をイオン式で表すと？',
        explanation:
          '塩化物イオンが陽極に引きつけられ、電子を失って塩素ガスになる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc15',
        front: '漂白作用',
        back: '塩素がもつ、色素を分解して脱色する性質を何という？',
        explanation:
          '赤インクで着色した水の色が消える。プールの消毒にも利用される。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc16',
        front: '銅：塩素 ＝ 10：11',
        back: '塩化銅を電気分解したとき、陰極に付着した銅と陽極で発生した塩素の質量比は？',
        explanation:
          '銅が5.0g付着したとき、塩素は5.5g発生する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc17',
        front: '2HCl → H₂ + Cl₂',
        back: '塩酸の電気分解を化学反応式で書くと？',
        explanation:
          '塩酸（塩化水素の水溶液）が水素と塩素に分解される。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc18',
        front: '水素のほうが多く集まる',
        back: '塩酸の電気分解で、陰極と陽極で集まる気体の量に差があるのはなぜ？',
        explanation:
          '塩素は水に溶けやすい性質があるため、一部が水に溶けて陽極側の気体の量が少なくなる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc19',
        front: 'イオンが存在しないため、電気を運ぶ粒子がないから',
        back: '蒸留水（純水）に電流が流れない理由は？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc20',
        front: '電解質（水に溶けるとH⁺とCl⁻に電離する）',
        back: '塩化水素は電解質？非電解質？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc21',
        front: '非電解質（水に溶けてもイオンにならない）',
        back: 'デンプンは電解質？非電解質？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc22',
        front: 'NaCl → Na⁺ + Cl⁻',
        back: '塩化ナトリウムの電離式を書くと？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc23',
        front: '赤色の固体（銅）が付着する',
        back: '塩化銅水溶液の電気分解で、陰極に現れる物質の色と状態は？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc24',
        front: '刺激臭があり漂白作用をもつ気体（塩素）',
        back: '塩化銅水溶液の電気分解で、陽極から発生する気体の特徴は？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc25',
        front: '火のついたマッチを近づけるとポンと音を立てて燃える',
        back: '水素の確認方法は？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ee-fc26',
        front: '炭素棒（黒鉛）',
        back: '電気分解の実験で電極に使われる物質は何？',
        explanation: '電気をよく通し、化学反応に関与しにくいため電極に適している。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc27',
        front: 'HCl → H⁺ + Cl⁻',
        back: '塩化水素の電離式を書くと？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ee-fc28',
        front: '塩化銅水溶液の青色はCu²⁺（銅イオン）の色',
        back: '塩化銅水溶液が青色をしている理由は？',
        explanation: '電気分解でCu²⁺が減ると青色がうすくなる。',
        difficulty: 'standard',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-ee-q1',
          question: '次のうち、電解質はどれ？',
          options: ['砂糖', 'エタノール', 'デンプン', '塩化ナトリウム'],
          correctIndex: 3,
          explanation:
            '塩化ナトリウム（NaCl）は水に溶けるとNa⁺とCl⁻に電離するため、電解質です。砂糖・エタノール・デンプンは非電解質です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q2',
          question: '塩化銅水溶液を電気分解したとき、陰極に現れる物質は？',
          options: ['塩素', '水素', '銅', '酸素'],
          correctIndex: 2,
          explanation:
            '陰極にはCu²⁺が引きつけられ、電子を受け取って銅（赤色の固体）が付着します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q3',
          question: '塩酸を電気分解したとき、陰極から発生する気体は？',
          options: ['塩素', '水素', '酸素', '窒素'],
          correctIndex: 1,
          explanation:
            '塩酸の電気分解では、陰極から水素が発生します。火のついたマッチを近づけるとポンと音を立てて燃えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q4',
          question: '塩化銅水溶液の電気分解を長時間続けると、水溶液の色はどうなる？',
          options: [
            '青色がうすくなる',
            '赤色が濃くなる',
            '緑色に変わる',
            '変化しない',
          ],
          correctIndex: 0,
          explanation:
            '水溶液中の銅イオン（Cu²⁺）が陰極で銅になって減少するため、青色がしだいにうすくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q5',
          question: '電解質の水溶液に電流が流れる理由として正しいものは？',
          options: [
            '水分子が電気を通すから',
            '水溶液の温度が上がるから',
            '電極が溶けるから',
            '電離して生じたイオンが電気を運ぶから',
          ],
          correctIndex: 3,
          explanation:
            '電解質が水に溶けて電離し、生じた陽イオンと陰イオンが電気を運ぶため電流が流れます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q6',
          question: '塩酸の電気分解の化学反応式として正しいものは？',
          options: [
            '2HCl → H₂ + Cl₂',
            'HCl → H + Cl',
            'HCl → H₂ + Cl₂',
            '2HCl → 2H + 2Cl',
          ],
          correctIndex: 0,
          explanation:
            '塩酸（HCl）を電気分解すると水素（H₂）と塩素（Cl₂）が発生します。原子の数を合わせるため左辺は2HClとなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q7',
          question: '次のうち、非電解質はどれ？',
          options: ['塩化水素','水酸化ナトリウム','硫酸','エタノール'],
          correctIndex: 3,
          explanation:
            'エタノールは水に溶けてもイオンに分かれない非電解質です。塩化水素・水酸化ナトリウム・硫酸はいずれも電解質です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q8',
          question:
            '塩酸の電気分解で、陽極から発生した気体の確認方法として正しいものは？',
          options: [
            '石灰水に通すと白くにごる',
            '赤インクで着色した水の色が消える',
            '火のついた線香を近づけると激しく燃える',
            '火のついたマッチを近づけるとポンと音がする',
          ],
          correctIndex: 1,
          explanation:
            '陽極から発生する塩素には漂白作用があり、赤インクで着色した水の色が消えます。マッチの火でポンと音がするのは水素（陰極側）の確認方法です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q9',
          question:
            '塩化銅水溶液の電気分解で、陰極でのイオンの変化として正しいものは？',
          options: [
            '2Cl⁻ → Cl₂ + 2e⁻',
            'Cu → Cu²⁺ + 2e⁻',
            'Cu²⁺ + 2e⁻ → Cu',
            'Cl₂ + 2e⁻ → 2Cl⁻',
          ],
          correctIndex: 2,
          explanation:
            '陰極ではCu²⁺（銅イオン）が電子を2個受け取り、銅原子（Cu）になって電極に付着します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q10',
          question: '蒸留水に電流が流れない理由として正しいものは？',
          options: [
            '温度が低すぎるから',
            'イオンが存在しないから',
            '分子が大きすぎるから',
            '電極と反応するから',
          ],
          correctIndex: 1,
          explanation:
            '蒸留水にはイオンが存在しないため、電気を運ぶ粒子がなく電流が流れません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ee-q11',
          question: '塩化銅水溶液の電気分解で、陽極でのイオンの変化として正しいものは？',
          options: [
            'Cu²⁺ + 2e⁻ → Cu',
            '2Cl⁻ → Cl₂ + 2e⁻',
            'Cu → Cu²⁺ + 2e⁻',
            'H₂ → 2H⁺ + 2e⁻',
          ],
          correctIndex: 1,
          explanation:
            '陽極ではCl⁻（塩化物イオン）が電子を失い、塩素ガス（Cl₂）として発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q12',
          question: '次のうち、電解質の水溶液をすべて選んだ組み合わせはどれ？',
          options: [
            '食塩水と砂糖水',
            '塩酸とエタノール水溶液',
            '食塩水と塩酸',
            '砂糖水とエタノール水溶液',
          ],
          correctIndex: 2,
          explanation:
            '食塩（NaCl）と塩酸（HCl）はどちらも電解質です。砂糖とエタノールは非電解質です。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q13',
          question: '塩化銅水溶液の電気分解で、電源の＋極につないだ電極を何という？',
          options: ['陰極', '正極', '負極', '陽極'],
          correctIndex: 3,
          explanation:
            '電源の＋極につないだ電極を陽極、−極につないだ電極を陰極といいます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q14',
          question: '塩化銅水溶液が青色をしている理由は？',
          options: ['銅イオン（Cu²⁺）が青色だから','塩化物イオン（Cl⁻）が青色だから','水分子が青色に変化するから','電極が溶けて青色になるから',
          ],
          correctIndex: 0,
          explanation:
            '塩化銅水溶液の青色はCu²⁺（銅イオン）の色です。電気分解でCu²⁺が減ると青色がうすくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q15',
          question: '塩酸の電気分解で使用するH字管の役割は？',
          options: ['電圧を上げるため','温度を一定に保つため','電流の向きを変えるため','陰極と陽極で発生する気体を別々に集めるため',
          ],
          correctIndex: 3,
          explanation:
            'H字管はH字の形をしたガラス管で、陰極側と陽極側で発生する気体を別々に集めることができます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q16',
          question: '電解質が水に溶けてイオンに分かれることを何という？',
          options: ['電気分解', '中和', '酸化', '電離'],
          correctIndex: 3,
          explanation:
            '電解質が水に溶けて陽イオンと陰イオンに分かれることを電離といいます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q17',
          question: '塩化銅を電気分解したとき、陰極に銅が5.0g付着した。発生した塩素は何g？（銅：塩素＝10：11）',
          options: ['4.5g', '5.0g', '5.5g', '6.0g'],
          correctIndex: 2,
          explanation:
            '銅：塩素＝10：11なので、5.0×11÷10＝5.5gの塩素が発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q18',
          question: '次のうち、電気分解の説明として正しいものは？',
          options: ['電解質の水溶液に電流を流して物質を分解すること','電解質を加熱して分解すること','非電解質の水溶液に電流を流すこと','金属を水に溶かすこと',
          ],
          correctIndex: 0,
          explanation:
            '電気分解とは、電解質の水溶液に電流を流して化学変化を起こし、物質を分解することです。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q19',
          question: 'スポーツドリンクに電流が流れるのはなぜ？',
          options: [
            '砂糖が溶けているから',
            'ナトリウムイオンやカリウムイオンなどが含まれているから',
            '水の温度が高いから',
            'ビタミンが含まれているから',
          ],
          correctIndex: 1,
          explanation:
            'スポーツドリンクにはNa⁺やK⁺などの電解質が含まれ、イオンが電気を運ぶため電流が流れます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q20',
          question: '塩酸の電気分解の化学反応式 2HCl → H₂ + Cl₂ で、左辺を2HClとする理由は？',
          options: [
            '温度を2倍にするため',
            '原子の数を左辺と右辺で合わせるため',
            '電流を2倍流すため',
            '電極を2本使うため',
          ],
          correctIndex: 1,
          explanation:
            '右辺のH₂にはH原子2個、Cl₂にはCl原子2個が含まれるため、左辺も2HCl（H原子2個、Cl原子2個）にして原子の数を合わせます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q21',
          question: '塩化銅の電気分解で陽極に引きつけられるイオンは？',
          options: ['Cu²⁺','Na⁺','H⁺','Cl⁻'],
          correctIndex: 3,
          explanation:
            '陽極（＋極）には陰イオンであるCl⁻（塩化物イオン）が引きつけられます。Cu²⁺は陰極に引きつけられます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q22',
          question: 'レモン汁に電流が流れる理由として正しいものは？',
          options: [
            'ビタミンCが電気を通すから',
            '水分が多いから',
            'クエン酸などの電解質がイオンに電離しているから',
            'レモンの色素が導電性をもつから',
          ],
          correctIndex: 2,
          explanation:
            'レモン汁にはクエン酸などの電解質が含まれ、水中でイオンに電離しているため電流が流れます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-ee-q23',
          question: '塩化銅水溶液の電気分解で、陰極に引きつけられるイオンは？',
          options: ['Cu²⁺','OH⁻','Cl⁻','SO₄²⁻'],
          correctIndex: 0,
          explanation:
            '陰極（−極）には陽イオンであるCu²⁺（銅イオン）が引きつけられ、電子を受け取って銅になります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ee-q24',
          question: '次のうち、塩酸の電気分解で陽極から発生する塩素の性質として正しいものは？',
          options: ['刺激臭があり漂白作用をもつ気体','水に溶けにくい気体','無色無臭の気体','火を近づけると燃える気体',
          ],
          correctIndex: 0,
          explanation:
            '塩素は刺激臭があり、漂白作用（色素を分解する）をもつ気体です。水に溶けやすい性質もあります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ee-q25',
          question: '塩化銅の電気分解の化学反応式として正しいものは？',
          options: [
            'CuCl₂ → Cu²⁺ + 2Cl⁻',
            'CuCl₂ → Cu + Cl₂',
            'Cu + Cl₂ → CuCl₂',
            '2CuCl₂ → 2Cu + 2Cl₂',
          ],
          correctIndex: 1,
          explanation:
            '塩化銅水溶液の電気分解では CuCl₂ → Cu + Cl₂ の反応が起きます。陰極に銅、陽極に塩素が発生します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ee-q26',
          question: '塩化銅水溶液を電気分解したとき、陰極に付着した銅が10gだった。発生した塩素は何g？（銅：塩素＝10：11）',
          options: ['9g', '10g', '11g', '12g'],
          correctIndex: 2,
          explanation:
            '銅：塩素＝10：11なので、10×11÷10＝11gの塩素が発生します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ee-q27',
          question: '電気分解の実験で電極に炭素棒（黒鉛）を使う理由は？',
          options: ['電流を通しやすく、化学反応に関与しにくいから','安価だから','水に溶けやすいから','色がついているから',
          ],
          correctIndex: 0,
          explanation:
            '炭素棒は電気をよく通し、電気分解の反応で自身が溶けたり反応したりしにくいため電極に適しています。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-ee-q28',
          question: '塩酸の電気分解で、水素のほうが塩素より多く集まる理由は？',
          options: [
            '水素のほうが軽いから',
            '水素のほうが速く発生するから',
            '塩素は水に溶けやすいため一部が水に溶けるから',
            '塩素は電極に付着するから',
          ],
          correctIndex: 2,
          explanation:
            '塩素は水に溶けやすい性質があるため、発生した塩素の一部が水に溶けて陽極側の気体の量が少なくなります。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-ee-ex1',
          question:
            '塩化銅水溶液を電気分解したとき、陰極と陽極で何が起こるか。それぞれの変化を、イオンの移動に着目して説明しなさい。',
          steps: [
            {
              title: 'Step 1: 塩化銅の電離を確認',
              content:
                '塩化銅（CuCl₂）は水に溶けると、銅イオン（Cu²⁺）と塩化物イオン（Cl⁻）に電離しています。',
              highlight: 'CuCl₂ → Cu²⁺ + 2Cl⁻',
            },
            {
              title: 'Step 2: 陽イオンの動きを追う',
              content:
                '陽イオンであるCu²⁺は、−極につないだ陰極に引きつけられます。',
              highlight: 'Cu²⁺ → 陰極へ移動',
            },
            {
              title: 'Step 3: 陰極での変化',
              content:
                '陰極に到達したCu²⁺は電子を2個受け取り、銅原子（Cu）になって電極に付着します。赤色の固体が見られます。',
              highlight: 'Cu²⁺ + 2e⁻ → Cu（赤色の固体）',
            },
            {
              title: 'Step 4: 陰イオンの動きを追う',
              content:
                '陰イオンであるCl⁻は、＋極につないだ陽極に引きつけられます。',
              highlight: 'Cl⁻ → 陽極へ移動',
            },
            {
              title: 'Step 5: 陽極での変化',
              content:
                '陽極に到達したCl⁻は電子を失い、塩素ガス（Cl₂）として発生します。刺激臭のある気体です。',
              highlight: '2Cl⁻ → Cl₂ + 2e⁻（刺激臭の気体）',
            },
          ],
          answer:
            '陰極：Cu²⁺が電子を受け取り銅が付着する（Cu²⁺ + 2e⁻ → Cu）\n陽極：Cl⁻が電子を失い塩素が発生する（2Cl⁻ → Cl₂ + 2e⁻）',
        },
        {
          id: 'sci3-ee-ex2',
          question:
            '塩酸を電気分解したとき、陰極と陽極から発生する気体の名称と、それぞれの確認方法を答えなさい。',
          steps: [
            {
              title: 'Step 1: 塩酸の電離を確認',
              content:
                '塩酸は塩化水素（HCl）の水溶液です。HClは水に溶けると水素イオン（H⁺）と塩化物イオン（Cl⁻）に電離しています。',
              highlight: 'HCl → H⁺ + Cl⁻',
            },
            {
              title: 'Step 2: 陰極で発生する気体',
              content:
                '陰極にはH⁺（陽イオン）が引きつけられ、電子を受け取って水素（H₂）が発生します。',
              highlight: '陰極：水素（H₂）が発生',
            },
            {
              title: 'Step 3: 水素の確認方法',
              content:
                '水素の確認方法は、火のついたマッチを近づけることです。ポンと音を立てて燃えます。',
              highlight: 'マッチの火 → ポンと音を立てて燃える',
            },
            {
              title: 'Step 4: 陽極で発生する気体',
              content:
                '陽極にはCl⁻（陰イオン）が引きつけられ、電子を失って塩素（Cl₂）が発生します。',
              highlight: '陽極：塩素（Cl₂）が発生',
            },
            {
              title: 'Step 5: 塩素の確認方法',
              content:
                '塩素は刺激臭があり、赤インクで着色した水の色を消します（漂白作用）。',
              highlight: '刺激臭・赤インクの色が消える（漂白作用）',
            },
            {
              title: 'Step 6: 気体の量の違い',
              content:
                '水素のほうが多く集まります。塩素は水に溶けやすい性質があるため、一部が水に溶けて集まる量が少なくなります。',
              highlight: '水素 ＞ 塩素（塩素は水に溶けやすいため）',
            },
          ],
          answer:
            '陰極：水素（確認方法：火のついたマッチを近づけるとポンと音を立てて燃える）\n陽極：塩素（確認方法：刺激臭があり、赤インクで着色した水の色を消す＝漂白作用）\n※水素のほうが多く集まる（塩素は水に溶けやすいため）',
        },
        {
          id: 'sci3-ee-ex3',
          question:
            '塩化銅水溶液を電気分解したところ、陰極に銅が8.0g付着した。このとき発生した塩素の質量は何gか。銅と塩素の質量比は10:11とする。',
          steps: [
            {
              title: 'Step 1: 質量比を確認する',
              content:
                '塩化銅を電気分解したときの銅と塩素の質量比は 10:11 と決まっています。',
              highlight: '銅：塩素 ＝ 10：11',
            },
            {
              title: 'Step 2: 比例式を立てる',
              content:
                '銅が8.0gのとき、塩素の質量をxgとすると、10:11 = 8.0:x という比例式が立てられます。',
              highlight: '10：11 ＝ 8.0：x',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '10 × x = 11 × 8.0 より、10x = 88.0、x = 8.8g',
              highlight: 'x = 8.0 × 11 ÷ 10 = 8.8g',
            },
          ],
          answer:
            '発生した塩素の質量は 8.8g\n（銅：塩素 = 10：11 の質量比を使い、8.0 × 11/10 = 8.8g）',
        },
        {
          id: 'sci3-ee-ex4',
          question:
            '塩化銅水溶液を電気分解したところ、塩素が5.5g発生した。このとき陰極に付着した銅の質量は何gか。銅と塩素の質量比は10:11とする。',
          steps: [
            {
              title: 'Step 1: 質量比を確認する',
              content:
                '塩化銅を電気分解したときの銅と塩素の質量比は 10:11 です。',
              highlight: '銅：塩素 ＝ 10：11',
            },
            {
              title: 'Step 2: 比例式を立てる',
              content:
                '銅の質量をygとすると、10:11 = y:5.5 という比例式が立てられます。',
              highlight: '10：11 ＝ y：5.5',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '11 × y = 10 × 5.5 より、11y = 55.0、y = 5.0g',
              highlight: 'y = 5.5 × 10 ÷ 11 = 5.0g',
            },
          ],
          answer:
            '陰極に付着した銅の質量は 5.0g\n（銅：塩素 = 10：11 の質量比を使い、5.5 × 10/11 = 5.0g）',
        },
      ],
    },
    chatId: 'sci3-electrolyte-electrolysis',
  },
};
