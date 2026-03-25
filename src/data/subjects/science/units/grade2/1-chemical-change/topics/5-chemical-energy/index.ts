import type { Topic } from '../../../../../../../types';

export const chemicalEnergy: Topic = {
  id: 'sci2-chemical-energy',
  eraId: 'sci2-chemical-change',
  name: '化学変化とその利用',
  subtitle: '発熱反応・吸熱反応・化学エネルギー',
  icon: '🌡️',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '発熱反応と吸熱反応',
          content:
            '化学変化では熱の出入りがあります。周囲に熱を出して温度が上がる化学変化を発熱反応、周囲から熱をうばって温度が下がる化学変化を吸熱反応といいます。物質がもっているエネルギーを化学エネルギーといい、化学変化によってこのエネルギーの差が熱や光として現れます。',
          image: {
            src: '/images/science/grade2/chemical-change/exo-endo-thermic.svg',
            alt: '発熱反応と吸熱反応',
            caption: '発熱反応は温度が上がり、吸熱反応は温度が下がる',
          },
          keyPoints: [
            '発熱反応：鉄粉の酸化（化学かいろ）、ガスの燃焼、中和反応',
            '吸熱反応：水酸化バリウム+塩化アンモニウム、炭酸水素ナトリウム+クエン酸',
            '化学エネルギー：物質がもっているエネルギー',
          ],
        },
        {
          title: '生活や社会での化学変化の利用',
          content:
            '化学変化は私たちの生活のさまざまな場面で利用されています。化学かいろは鉄粉の酸化（発熱反応）を利用し、ガスコンロはメタンやプロパンの燃焼でエネルギーを取り出します。胃薬に使われる炭酸水素ナトリウム（重そう）は胃酸（塩酸）を中和します。',
          keyPoints: [
            '化学かいろ：鉄粉の酸化による発熱反応',
            '燃焼によるエネルギー利用：メタン、プロパン、ガソリン',
            '胃薬：炭酸水素ナトリウム（重そう）で胃酸を中和',
            '漂白剤：過酸化水素水の分解による漂白作用',
            '銅のさび（緑青）：金属内部を保護する',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-ce-slide1',
          title: '発熱反応と吸熱反応',
          slides: [
            {
              type: 'question',
              question: '使い捨てカイロはなぜ温かくなるの？',
              subtext: '化学変化と熱',
              emoji: '🔥',
              image: {
                src: '/images/science/grade2/chemical-change/exo-endo-thermic.svg',
                alt: '発熱反応と吸熱反応',
              },
            },
            {
              type: 'reason',
              headline: '鉄粉が酸化するときの発熱反応で温まる！',
              points: [
                '発熱反応 = 周囲に熱を出す → 温度が上がる',
                '吸熱反応 = 周囲から熱をうばう → 温度が下がる',
                '化学エネルギーの差が熱や光として現れる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '発熱反応', value: '温度が上がる', emoji: '🔥' },
                  { label: '吸熱反応', value: '温度が下がる', emoji: '❄️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '化学変化では熱の出入りがある！発熱と吸熱の2種類！',
              keywords: [
                { text: '発熱反応', isImportant: true },
                { text: '吸熱反応', isImportant: true },
                { text: '化学エネルギー' },
              ],
              nextHint: '生活の中の化学変化を見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-ce-slide2',
          title: '身のまわりの化学変化',
          slides: [
            {
              type: 'question',
              question: '身のまわりで使われている化学変化は？',
              subtext: '生活と化学変化',
              emoji: '🏠',
            },
            {
              type: 'reason',
              headline: 'カイロ、ガスコンロ、胃薬…化学変化だらけ！',
              points: [
                '化学かいろ：鉄粉の酸化（発熱反応）',
                'ガスコンロ：メタンの燃焼でエネルギーを取り出す',
                '胃薬：重そう（炭酸水素ナトリウム）で胃酸を中和',
                '漂白剤：過酸化水素水の分解で漂白',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '化学変化は生活のいたるところで活用されている！',
              keywords: [
                { text: '化学かいろ' },
                { text: '燃焼' },
                { text: '漂白' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-ce-fc1', front: '発熱反応', back: '周囲に熱を出し温度が上がる化学変化を何という？', explanation: '例：鉄粉の酸化、ガスの燃焼', difficulty: 'basic' },
      { id: 'sci2-ce-fc2', front: '吸熱反応', back: '周囲から熱をうばい温度が下がる化学変化を何という？', explanation: '例：水酸化バリウム+塩化アンモニウム', difficulty: 'basic' },
      { id: 'sci2-ce-fc3', front: '化学エネルギー', back: '物質がもっているエネルギーを何という？', explanation: '化学変化によってこのエネルギーが熱や光として現れる', difficulty: 'basic' },
      { id: 'sci2-ce-fc4', front: '鉄粉が空気中の酸素と結びつく酸化（発熱反応）の熱を利用', back: '使い捨てカイロが温かくなるのはなぜ？', explanation: '活性炭と食塩水が酸化を促進する', difficulty: 'basic' },
      { id: 'sci2-ce-fc5', front: '胃酸（塩酸）を中和する', back: '胃薬に使われる炭酸水素ナトリウム（重そう）はどのように作用する？', explanation: 'NaHCO₃が胃酸のはたらきを弱める', difficulty: 'basic' },
      { id: 'sci2-ce-fc6', front: '激しく発熱する（発熱反応）', back: '酸化カルシウム（生石灰）に水を加えるとどうなる？', explanation: '加熱式弁当に利用', difficulty: 'basic' },
      { id: 'sci2-ce-fc7', front: '活性炭と食塩水', back: '化学かいろで鉄粉の酸化を進めるために混ぜるものは？', explanation: '活性炭が酸素を吸着し食塩水が反応を促す', difficulty: 'standard' },
      { id: 'sci2-ce-fc8', front: '温度が下がる（吸熱反応）。CO₂が発生', back: '炭酸水素ナトリウムとクエン酸を混ぜるとどうなる？', explanation: '周囲から熱をうばう吸熱反応の代表例', difficulty: 'basic' },
      { id: 'sci2-ce-fc9', front: '温度が下がる（吸熱反応）。アンモニア（刺激臭）が発生', back: '水酸化バリウムと塩化アンモニウムを混ぜるとどうなる？', explanation: '吸熱反応の代表的な実験。ろ紙が凍りつくほど冷える', difficulty: 'basic' },
      { id: 'sci2-ce-fc10', front: '反応前の化学エネルギーが大きい', back: '発熱反応では反応前と反応後で化学エネルギーはどちらが大きい？', explanation: '差が熱や光として放出される', difficulty: 'standard' },
      { id: 'sci2-ce-fc11', front: '周囲の熱エネルギーを吸収する', back: '吸熱反応ではエネルギーの不足分はどこから得る？', explanation: '反応後の化学エネルギーが大きいため周囲から熱を吸収する', difficulty: 'standard' },
      { id: 'sci2-ce-fc12', front: '化学E→熱E→運動E→電気E', back: '火力発電でのエネルギー変換の順序は？', explanation: '燃料→蒸気→タービン→発電機の順', difficulty: 'standard' },
      { id: 'sci2-ce-fc13', front: '二酸化炭素と水', back: '石油や天然ガスを燃焼させると何ができる？', explanation: '有機物の炭素→CO₂、水素→H₂Oになる', difficulty: 'basic' },
      { id: 'sci2-ce-fc14', front: '発熱反応', back: '周囲の温度が上がる化学変化は何反応？', explanation: '化学エネルギーが熱として放出される', difficulty: 'basic' },
      { id: 'sci2-ce-fc15', front: '吸熱反応', back: '瞬間冷却剤（冷却パック）は何反応を利用している？', explanation: '周囲から熱をうばうため温度が下がる', difficulty: 'standard' },
      { id: 'sci2-ce-fc16', front: '鉄粉の酸化（発熱反応）', back: 'カイロが温まるのはどんな化学変化？', explanation: '鉄＋酸素→酸化鉄の反応熱を利用', difficulty: 'basic' },
      { id: 'sci2-ce-fc17', front: '吸熱反応。アンモニアが発生', back: '水酸化バリウム+塩化アンモニウムは何反応？何が発生？', explanation: '温度が大きく下がりろ紙が凍りつくほど', difficulty: 'standard' },
      { id: 'sci2-ce-fc18', front: '上がる（発熱反応）', back: '酸化カルシウムに水を加えると温度はどうなる？', explanation: '加熱式弁当に利用されている', difficulty: 'basic' },
      { id: 'sci2-ce-fc19', front: '化学エネルギーを電気エネルギーに変換する装置', back: '電池は何をする装置？', explanation: '化学反応により電流を取り出す', difficulty: 'standard' },
      { id: 'sci2-ce-fc20', front: '電気エネルギー', back: '火力発電で化学エネルギーは最終的に何に変換される？', explanation: '化学E→熱E→運動E→電気Eの順に変換', difficulty: 'standard' },
      { id: 'sci2-ce-fc21', front: '反応前が大きい', back: '発熱反応では反応前後どちらの化学エネルギーが大きい？', explanation: '差が熱として放出される', difficulty: 'standard' },
      { id: 'sci2-ce-fc22', front: '反応後が大きい', back: '吸熱反応では反応前後どちらの化学エネルギーが大きい？', explanation: '不足分を周囲の熱エネルギーで補う', difficulty: 'advanced' },
      { id: 'sci2-ce-fc23', front: 'CO₂と水', back: 'メタンを燃焼させると何ができる？', explanation: 'メタン（CH₄）の炭素と水素がそれぞれ酸化される', difficulty: 'standard' },
      { id: 'sci2-ce-fc24', front: '温度が下がる。CO₂が発生', back: 'NaHCO₃+クエン酸の反応で温度はどうなる？何が発生？', explanation: '吸熱反応の身近な例', difficulty: 'standard' },
      { id: 'sci2-ce-fc25', front: '酸化カルシウム+水の発熱反応', back: '加熱式弁当が温まるしくみは？', explanation: '生石灰と水が激しく反応して熱を出す', difficulty: 'advanced' },
      { id: 'sci2-ce-fc26', front: 'ガソリンの化学エネルギー', back: '自動車のエンジンは何エネルギーを利用している？', explanation: '燃焼で化学エネルギーを運動エネルギーに変換', difficulty: 'advanced' },
      { id: 'sci2-ce-fc27', front: 'CO₂排出による地球温暖化', back: '化石燃料の利用による主な環境問題は？', explanation: '温室効果ガスであるCO₂が大量に排出される', difficulty: 'advanced' },
      { id: 'sci2-ce-fc28', front: '吸熱反応で水が凍りつくため', back: '水酸化バリウム+塩化アンモニウムの実験でろ紙がはりつく理由は？', explanation: '温度が氷点下まで下がりぬれたろ紙の水が凍る', difficulty: 'advanced' },
      { id: 'sci2-ce-fc29', front: '酸化カルシウムと水の反応', back: '駅弁などの加熱式弁当で利用されている発熱反応は、何と何の反応か？', explanation: '生石灰に水を加えると激しく発熱する', difficulty: 'standard' },
      { id: 'sci2-ce-fc30', front: '発熱反応', back: 'ガスコンロでメタンを燃やすと温度が上がるのは何反応だから？', explanation: '燃焼は代表的な発熱反応', difficulty: 'basic' },
      { id: 'sci2-ce-fc31', front: '発熱反応', back: 'ろうそくが燃えるときに熱と光を出すのは何反応か？', explanation: '有機物の燃焼で化学エネルギーが放出される', difficulty: 'basic' },
      { id: 'sci2-ce-fc32', front: '刺激臭がする', back: '水酸化バリウムと塩化アンモニウムの反応で発生する気体に特徴的なにおいはあるか？', explanation: 'アンモニアの刺激臭がある', difficulty: 'standard' },
      { id: 'sci2-ce-fc33', front: '二酸化炭素', back: '炭酸水素ナトリウムとクエン酸の反応で発生する気体は？', explanation: '石灰水を白くにごらせることで確認できる', difficulty: 'basic' },
      { id: 'sci2-ce-fc34', front: '周囲（まわり）からうばわれる', back: '吸熱反応では、熱エネルギーはどこからうばわれるか？', explanation: 'そのため周囲の温度が下がる', difficulty: 'standard' },
      { id: 'sci2-ce-fc35', front: '光、電気エネルギーなど', back: '化学変化によって取り出せるエネルギーの形には、熱以外に何があるか？', explanation: '電池は化学エネルギーを電気エネルギーに変換する', difficulty: 'standard' },
      { id: 'sci2-ce-fc36', front: '化学エネルギー', back: '食べ物に含まれる栄養素がもつエネルギーは、何エネルギーの一種か？', explanation: '細胞の呼吸で分解されエネルギーが取り出される', difficulty: 'standard' },
      { id: 'sci2-ce-fc37', front: '熱エネルギー（や光エネルギー）', back: '発熱反応では、化学エネルギーは何エネルギーに変換されるか？', explanation: '反応前後の化学エネルギーの差が放出される', difficulty: 'standard' },
      { id: 'sci2-ce-fc38', front: '化学エネルギーが熱エネルギーと光エネルギーに変わるから', back: 'マッチを擦ると火がつくのはなぜか？', explanation: '摩擦熱で発火点に達し燃焼（発熱反応）が起こる', difficulty: 'standard' },
      { id: 'sci2-ce-fc39', front: '化学エネルギーを熱エネルギーに変換している', back: '石油や天然ガスを燃焼させて利用するとき、何エネルギーを何エネルギーに変換しているか？', explanation: '化石燃料のもつ化学エネルギーを熱として取り出す', difficulty: 'standard' },
      { id: 'sci2-ce-fc40', front: '石油（石炭）、天然ガス', back: '火力発電で使われる燃料を2つ答えよ', explanation: 'いずれも化石燃料で化学エネルギーをもつ', difficulty: 'standard' },
      { id: 'sci2-ce-fc41', front: '蒸気（水蒸気）', back: '火力発電では、燃料を燃やして何を発生させ、タービンを回すか？', explanation: '熱エネルギーが水蒸気の運動エネルギーに変わる', difficulty: 'standard' },
      { id: 'sci2-ce-fc42', front: '塩酸（胃酸）', back: '胃薬に含まれる炭酸水素ナトリウムは、胃の中の何と反応するか？', explanation: '中和反応で胃酸のはたらきを弱める', difficulty: 'basic' },
      { id: 'sci2-ce-fc43', front: '二酸化炭素', back: '炭酸水素ナトリウムと塩酸の反応で発生する気体は？', explanation: 'NaHCO₃+HCl→NaCl+H₂O+CO₂', difficulty: 'basic' },
      { id: 'sci2-ce-fc44', front: '発熱反応', back: '炭を燃やしてバーベキューをするとき、利用しているのは何反応か？', explanation: '炭素の燃焼（酸化）で熱と光が出る', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-ce-q1',
          question: '次のうち、発熱反応はどれ？',
          options: [
            '鉄粉の酸化',
            '水酸化バリウムと塩化アンモニウムの反応',
            '炭酸水素ナトリウムとクエン酸の反応',
            '光合成',
          ],
          correctIndex: 0,
          explanation:
            '鉄粉の酸化は発熱反応で、化学かいろに利用されています。他の選択肢は吸熱反応または化学変化ではありません。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q2',
          question: '吸熱反応の特徴はどれ？',
          options: [
            '周囲の温度が上がる',
            '光を出す',
            '温度は変わらない',
            '周囲の温度が下がる',
          ],
          correctIndex: 3,
          explanation:
            '吸熱反応は周囲から熱をうばうため、温度が下がります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q3',
          question: '物質がもっているエネルギーを何という？',
          options: [ '化学エネルギー','熱エネルギー', '運動エネルギー', '電気エネルギー'],
          correctIndex: 0,
          explanation:
            '物質がもっているエネルギーを化学エネルギーといいます。化学変化でこのエネルギーの差が熱や光として現れます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q4',
          question: '使い捨てカイロが温まるのは何という化学変化を利用している？',
          options: [
            '鉄の還元',
            '鉄の電気分解',
            '鉄粉の酸化',
            '鉄の溶解',
          ],
          correctIndex: 2,
          explanation:
            '化学かいろは鉄粉が空気中の酸素と結びつく酸化（発熱反応）の熱を利用しています。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q5',
          question: '胃薬に使われる炭酸水素ナトリウム（重そう）のはたらきは？',
          options: [
            '胃酸を増やす',
            '胃を温める',
            '胃酸（塩酸）を中和する',
            '胃の水分を吸収する',
          ],
          correctIndex: 2,
          explanation:
            '炭酸水素ナトリウムは塩酸（胃酸）のはたらきを弱める（中和する）ことで胃を守ります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q6',
          question: '酸化カルシウム（生石灰）に水を加えたときの反応は？',
          options: ['発熱反応', '吸熱反応', '分解反応', '還元反応'],
          correctIndex: 0,
          explanation: '酸化カルシウムに水を加えると激しく発熱します。加熱式弁当に利用されています。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q7',
          question: '水酸化バリウムと塩化アンモニウムを混ぜたとき発生する気体は？',
          options: ['二酸化炭素', '水素', '酸素', 'アンモニア'],
          correctIndex: 3,
          explanation: '刺激臭のあるアンモニアが発生します。この反応は吸熱反応で温度が下がります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q8',
          question: '鉄粉と活性炭と食塩水を混ぜると温度は？',
          options: [ '上がる','下がる', '変わらない', '一度下がってから上がる'],
          correctIndex: 0,
          explanation: '鉄粉が酸素と結びつく酸化（発熱反応）が起こり、温度が上がります。化学かいろの原理です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q9',
          question: '発熱反応について正しいものはどれ？',
          options: [
            '反応前より反応後の化学エネルギーが大きい',
            '化学エネルギーは変化しない',
            '反応前より反応後の化学エネルギーが小さい',
            '熱エネルギーが化学エネルギーに変わる',
          ],
          correctIndex: 2,
          explanation: '発熱反応では反応後の化学エネルギーが小さく、差が熱として放出されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q10',
          question: '次のうち、吸熱反応はどれ？',
          options: [
            '鉄粉が酸化する',
            'マグネシウムが燃焼する',
            '水酸化バリウムと塩化アンモニウムが反応する',
            '酸化カルシウムに水を加える'],
          correctIndex: 2,
          explanation: '水酸化バリウムと塩化アンモニウムの反応は吸熱反応で温度が下がります。他はすべて発熱反応です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ce-q11',
          question: 'カイロが温まる化学変化は？',
          options: ['鉄粉の酸化（発熱）', '鉄粉の還元', '水の蒸発', '炭素分解'],
          correctIndex: 0,
          explanation:
            '鉄粉の酸化（発熱反応）を利用。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q12',
          question: '水酸化Ba+塩化NH₄→発生気体は？',
          options: ['水素', '酸素', 'アンモニア', 'CO₂'],
          correctIndex: 2,
          explanation:
            'アンモニアが発生する吸熱反応。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q13',
          question: '酸化Ca+水→温度は？',
          options: ['上がる', '下がる', '変わらない', '下がって上がる'],
          correctIndex: 0,
          explanation:
            '発熱反応で温度上昇。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q14',
          question: '発熱反応の化学エネルギーの変化は？',
          options: ['反応前が大', '反応後が大', '変わらない', '関係なし'],
          correctIndex: 0,
          explanation:
            '熱放出で反応前が大。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q15',
          question: '吸熱反応→周囲温度は？',
          options: ['上がる', '不定', '変わらない', '下がる'],
          correctIndex: 3,
          explanation:
            '周囲から熱をうばい温度低下。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q16',
          question: '電池の変換は？',
          options: ['熱→電気', '運動→電気', '光→電気', '化学→電気'],
          correctIndex: 3,
          explanation:
            '化学E→電気E。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q17',
          question: '化学E利用の環境問題は？',
          options: ['騒音', '振動', '光害', 'CO₂排出'],
          correctIndex: 3,
          explanation:
            '化石燃料でCO₂排出→温暖化。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q18',
          question: 'NaHCO₃+クエン酸→温度は？',
          options: ['上がる', '急上昇', '変わらない', '下がる'],
          correctIndex: 3,
          explanation:
            '吸熱反応で温度低下。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q19',
          question: '火力発電でタービンを回すのは？',
          options: ['水', '電気', '石油', '蒸気'],
          correctIndex: 3,
          explanation:
            '蒸気でタービンを回す。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q20',
          question: 'ろうそく燃焼は何反応？',
          options: ['吸熱', '発熱', '分解', '中和'],
          correctIndex: 1,
          explanation:
            '有機物酸化で発熱反応。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q21',
          question: 'メタン燃焼生成物は？',
          options: ['COと水', 'CO₂と水', '炭素と水素', 'CO₂と水素'],
          correctIndex: 1,
          explanation:
            'CO₂と水が生成。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q22',
          question: '水酸化Ba+塩化NH₄でろ紙はどうなる？',
          options: ['何もない', '乾く', 'はりつく', '赤くなる'],
          correctIndex: 2,
          explanation:
            '吸熱反応で水が凍りはりつく。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ce-q23',
          question: '火力発電の主燃料は？',
          options: ['ウラン', '石油と天然ガス', '鉄粉', '水素'],
          correctIndex: 1,
          explanation:
            '化石燃料を使用。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-ce-q24',
          question: '瞬間冷却パックの反応は？',
          options: ['発熱', '吸熱', '燃焼', '酸化'],
          correctIndex: 1,
          explanation:
            '吸熱反応で冷却。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-ce-q25',
          question: '胃薬のNaHCO₃は胃の何と反応？',
          options: ['水', '塩酸', 'タンパク質', 'ブドウ糖'],
          correctIndex: 1,
          explanation:
            '胃酸（塩酸）と反応。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-ce-q26',
          question: '化学Eは目に見える？',
          options: ['見える', '見えない', '反応中見える', '熱として見える'],
          correctIndex: 1,
          explanation:
            '化学変化で初めて取り出される。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-ce-q27',
          question: '加熱式弁当の反応は？',
          options: ['鉄粉+O₂', '酸化Ca+水', 'NaHCO₃+クエン酸', 'Mg+O₂'],
          correctIndex: 1,
          explanation:
            '酸化Caと水の発熱反応。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-ce-q28',
          question: '自動車エンジンは何Eを利用？',
          options: ['電気', '光', '化学', '原子力'],
          correctIndex: 2,
          explanation:
            'ガソリンの化学E。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-ce-ex1',
          question:
            '発熱反応と吸熱反応の具体例をそれぞれ1つずつ挙げ、温度変化を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 発熱反応の例',
              content:
                '鉄粉の酸化（化学かいろ）：鉄粉が酸素と結びつくとき熱を放出する。',
              highlight: '発熱反応 → 温度が上がる',
            },
            {
              title: 'Step 2: 吸熱反応の例',
              content:
                '水酸化バリウムと塩化アンモニウムの反応：周囲から熱をうばう。',
              highlight: '吸熱反応 → 温度が下がる',
            },
            {
              title: 'Step 3: まとめ',
              content:
                'どちらも化学エネルギーの差によって起こる。発熱反応は生成物の化学エネルギーが小さく、差が熱として放出される。',
              highlight: '化学エネルギーの差',
            },
          ],
          answer:
            '発熱反応：鉄粉の酸化（化学かいろ）→ 温度が上がる\n吸熱反応：水酸化バリウムと塩化アンモニウムの反応 → 温度が下がる\nいずれも化学エネルギーの差が熱として現れる',
        },
        {
          id: 'sci2-ce-ex2',
          question: '鉄粉の酸化による発熱反応の実験を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 材料を準備する',
              content: '紙コップに鉄粉6gと活性炭3gを入れ、食塩水を数滴加える。',
              highlight: '鉄粉 + 活性炭 + 食塩水',
            },
            {
              title: 'Step 2: よくかき混ぜる',
              content: 'ガラス棒でよくかき混ぜながら、温度計で温度変化を調べる。',
              highlight: '温度変化を測定',
            },
            {
              title: 'Step 3: 結果を確認する',
              content: '温度が上がる。鉄粉が空気中の酸素と結びつく酸化（発熱反応）が起こっている。',
              highlight: '発熱反応 → 温度が上がる',
            },
          ],
          answer: '鉄粉の酸化は発熱反応で、温度が上がる。\nこの原理を利用したものが使い捨てカイロ。',
        },
        {
          id: 'sci2-ce-ex3',
          question: '吸熱反応の実験（水酸化バリウムと塩化アンモニウム）を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 装置を準備する',
              content: 'ポリエチレンのふくろに水酸化バリウムを入れ、ぬれたろ紙の上に置く。',
              highlight: '水酸化バリウム + ぬれたろ紙',
            },
            {
              title: 'Step 2: 塩化アンモニウムを加える',
              content: '塩化アンモニウムを加えてよく混ぜる。刺激臭のあるアンモニアが発生する。',
              highlight: 'アンモニア発生（刺激臭）',
            },
            {
              title: 'Step 3: 結果を確認する',
              content: '温度が下がり、ぬれたろ紙が凍りつく。周囲から熱をうばう吸熱反応が起こっている。',
              highlight: '吸熱反応 → 温度が下がる',
            },
          ],
          answer: '水酸化バリウムと塩化アンモニウムの反応は吸熱反応。\n周囲から熱をうばうため温度が下がり、ろ紙が凍りつく。',
        },
      ],
    },
    chatId: 'sci2-chemical-energy',
  },
};
