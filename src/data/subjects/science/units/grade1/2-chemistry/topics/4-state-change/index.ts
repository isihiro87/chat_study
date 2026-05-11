import type { Topic } from '../../../../../../../types';

export const stateChange: Topic = {
  id: 'sci1-state-change',
  eraId: 'sci1-chemistry',
  name: '物質の姿と状態変化',
  subtitle: '状態変化・体積と質量の変化・沸点と融点・蒸留',
  icon: '🌡️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '物質の状態変化',
          content:
            '物質は温度によって固体・液体・気体の3つの状態に変化します。この変化を状態変化といいます。固体から液体への変化を融解、液体から固体への変化を凝固、液体から気体への変化を蒸発（気化）、気体から液体への変化を凝縮（液化）といいます。状態変化は物質そのものが別の物質に変わるわけではなく、粒子の運動のようすが変わるだけです。',
          image: {
            src: '/images/science/grade1/chemistry/state-change.svg',
            alt: '物質の三態変化',
            caption: '固体・液体・気体の状態変化と粒子のようす',
          },
          keyPoints: [
            '状態変化：温度によって固体・液体・気体の間で状態が変わること',
            '融解（固→液）、凝固（液→固）、蒸発（液→気）、凝縮（気→液）',
            '状態変化しても物質の種類は変わらない（粒子の運動が変わるだけ）',
          ],
        },
        {
          title: '体積と質量の変化',
          content:
            '状態変化すると体積は変化しますが、質量は変化しません。一般に固体→液体→気体と変化すると体積は大きくなります。これは粒子の間隔が広がるためです。ただし水は例外で、液体（水）から固体（氷）になると体積が大きくなります。これは氷の結晶構造がすき間の多い構造をとるためです。質量が変わらないのは、状態変化では粒子の数が変わらないからです。',
          keyPoints: [
            '状態変化で体積は変わるが、質量は変わらない',
            '一般に固体→液体→気体で体積は増加する（粒子の間隔が広がる）',
            '水は例外：液体→固体で体積が増える（氷が水に浮く理由）',
          ],
        },
        {
          title: '沸点・融点と蒸留',
          content:
            '物質が液体から気体に変わる温度を沸点、固体から液体に変わる温度を融点といいます。沸点・融点は物質ごとに決まっており、純粋な物質は状態変化中に温度が一定に保たれます。混合物の液体を加熱して沸点の違いを利用して分けることを蒸留といいます。例えば赤ワインを加熱すると、沸点の低いエタノール（約78℃）が先に蒸発し、冷やして液体に戻すことで分離できます。',
          keyPoints: [
            '沸点：液体→気体になる温度。融点：固体→液体になる温度',
            '純粋な物質は状態変化中、温度が一定になる',
            '蒸留：沸点の違いを利用して混合物から物質を分離する方法',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-sc-slide1',
          title: '物質の三態変化',
          slides: [
            {
              type: 'question',
              question: '氷が水になり、水が水蒸気になる。この変化を何という？',
              subtext: '状態変化のしくみ',
              emoji: '🧊',
              image: {
                src: '/images/science/grade1/chemistry/state-change.svg',
                alt: '物質の三態変化',
              },
            },
            {
              type: 'reason',
              headline: '状態変化という！',
              points: [
                '固体→液体＝融解、液体→固体＝凝固',
                '液体→気体＝蒸発、気体→液体＝凝縮',
                '物質は変わらない。粒子の動きが変わるだけ',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '状態変化＝温度で固体・液体・気体の間を行き来する変化！',
              keywords: [
                { text: '状態変化', isImportant: true },
                { text: '融解・凝固', isImportant: true },
                { text: '蒸発・凝縮' },
              ],
              nextHint: '次は状態変化で体積と質量がどう変わるか見てみよう！',
            },
          ],
        },
        {
          id: 'sci1-sc-slide2',
          title: '体積と質量の変化',
          slides: [
            {
              type: 'question',
              question: '状態変化すると質量は変わる？変わらない？',
              subtext: '体積と質量の関係',
              emoji: '⚖️',
            },
            {
              type: 'reason',
              headline: '質量は変わらない！体積は変わる！',
              points: [
                '粒子の数は変わらないから質量は一定',
                '固体→液体→気体で体積は増加（粒子の間隔が広がる）',
                '例外：水は凍ると体積が増える（氷が水に浮く）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '質量', value: '変化しない', emoji: '⚖️' },
                  { label: '体積', value: '変化する', emoji: '📐' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '質量は不変、体積は変化！水は例外で凍ると膨張する！',
              keywords: [
                { text: '質量は不変', isImportant: true },
                { text: '体積は変化', isImportant: true },
                { text: '水の特殊性' },
              ],
              nextHint: '次は沸点・融点と蒸留を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sc-slide3',
          title: '沸点・融点と蒸留',
          slides: [
            {
              type: 'question',
              question: '赤ワインを加熱するとエタノールだけ取り出せるのはなぜ？',
              subtext: '蒸留のしくみ',
              emoji: '🍷',
            },
            {
              type: 'reason',
              headline: '沸点のちがいを利用している！',
              points: [
                'エタノールの沸点は約78℃、水の沸点は100℃',
                '先にエタノールが蒸発するから分離できる',
                'これを蒸留という ＝ 混合物を分ける方法',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '蒸留＝沸点の違いで液体の混合物を分離する方法！',
              keywords: [
                { text: '沸点・融点', isImportant: true },
                { text: '蒸留', isImportant: true },
                { text: '純粋な物質の加熱グラフ' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-sc-fc1', front: '状態変化', back: '固体・液体・気体の状態が変わることを何という？', explanation: '物質そのものは変わらない。', difficulty: 'standard' },
      { id: 'sci1-sc-fc2', front: '融点', back: '固体が液体に変わる温度を何という？', explanation: '純物質では決まった温度になる。', difficulty: 'standard' },
      { id: 'sci1-sc-fc3', front: '沸点', back: '液体が沸騰して気体に変わる温度を何という？', explanation: '水は約100℃で沸騰する。', difficulty: 'standard' },
      { id: 'sci1-sc-fc4', front: '変わらない（体積は変わることがある）', back: '状態が変わっても、物質の質量は変わる？', explanation: '状態変化では粒子の数が変わらないため。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc5', front: '蒸留', back: '液体を沸騰させ、出てきた気体を冷やして再び液体として集める操作を何という？', explanation: '沸点の違いを利用する。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc6', front: '氷になると体積が増え、密度が小さくなる', back: '水の状態変化に見られる特殊な性質は何か？', explanation: '氷が水に浮く理由となる。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc7', front: '沸点', back: '液体が沸騰して気体に変わる温度を何という？', explanation: '水の沸点は約100℃。', difficulty: 'standard' },
      { id: 'sci1-sc-fc8', front: '変わらない', back: '水が氷になると、質量は変わるか？', explanation: '状態変化では質量は変わらない。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc9', front: '蒸留', back: '液体どうしの混合物を沸点の違いで分ける操作を何という？', explanation: 'エタノールと水の分離などで使う。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc10', front: '融解', back: '固体が液体に変わる状態変化を何という？', explanation: '氷が水になる変化。融点で起こる。', difficulty: 'standard' },
      { id: 'sci1-sc-fc11', front: '凝固', back: '液体が固体に変わる状態変化を何という？', explanation: '水が氷になる変化。', difficulty: 'standard' },
      { id: 'sci1-sc-fc12', front: '蒸発', back: '液体が気体に変わる状態変化を何という？', explanation: '水が水蒸気になる変化。沸点で激しく起こると沸騰。', difficulty: 'standard' },
      { id: 'sci1-sc-fc13', front: '凝縮', back: '気体が液体に変わる状態変化を何という？', explanation: '水蒸気が冷えて水になる変化。', difficulty: 'standard' },
      { id: 'sci1-sc-fc14', front: '沸点が低い物質', back: '蒸留で先に多く出てくるのは沸点の低い物質か高い物質か？', explanation: '沸点が低い方が早く気体になり、先に出てくる。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc15', front: '加えた熱が状態変化に使われるから', back: '純粋な物質を加熱したとき、状態変化中に温度が一定になる理由は？', explanation: '熱は粒子の配置を変えるために使われ、温度上昇には使われない。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-sc-q1',
          question: '固体が液体に変わる温度を何といいますか。',
          options: ['融点', '沸点', '密度', '溶解度'],
          correctIndex: 0,
          explanation: '固体がとけ始める温度が融点です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sc-q2',
          question: '液体を沸騰させ、出た気体を冷やして液体として集める操作はどれですか。',
          options: ['ろ過', '再結晶', '蒸留', '展性'],
          correctIndex: 2,
          explanation: '蒸留は沸点の違いを利用します。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q3',
          question: '状態変化について正しいものはどれですか。',
          options: ['質量は必ず増える', '質量は変わらない', '物質そのものが別の物質に変わる', '密度は必ず変わらない'],
          correctIndex: 1,
          explanation: '状態が変わっても物質の量は変わりません。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q4',
          question: '氷が水に浮く理由として最も適切なものはどれですか。',
          options: ['氷の質量が0になるから', '氷は水にとけないから', '氷の温度が高いから', '氷の密度が水より小さいから'],
          correctIndex: 3,
          explanation: '氷は水より密度が小さいため浮きます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q5',
          question: '固体が液体に変わる状態変化はどれですか。',
          options: ['凝固', '融解', '沸騰', '凝縮'],
          correctIndex: 1,
          explanation: '固体が液体になることを融解といいます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sc-q6',
          question: '液体が固体に変わる状態変化はどれですか。',
          options: ['凝固', '融解', '蒸発', '沸騰'],
          correctIndex: 0,
          explanation: '液体が固体になることを凝固といいます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sc-q7',
          question: '液体が気体に変わる状態変化はどれですか。',
          options: ['凝固', '融解', '金属光沢', '蒸発'],
          correctIndex: 3,
          explanation: '液体が気体になることを蒸発といいます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sc-q8',
          question: '気体が液体に変わる状態変化はどれですか。',
          options: ['融解', '凝固', '凝縮', '再結晶'],
          correctIndex: 2,
          explanation: '気体が冷えて液体になることを凝縮といいます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sc-q9',
          question: '固体が液体に変わる温度を何といいますか。',
          options: ['融点', '沸点', '密度', '濃度'],
          correctIndex: 0,
          explanation: '固体がとける温度が融点です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sc-q10',
          question: '液体が沸騰して気体に変わる温度を何といいますか。',
          options: ['溶解度', '融点', '展性', '沸点'],
          correctIndex: 3,
          explanation: '沸騰する温度が沸点です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sc-q11',
          question: '状態変化について正しいものはどれですか。',
          options: ['必ず別の物質になる', '質量は必ず増える', '物質そのものは変わらない', '質量は必ず減る'],
          correctIndex: 2,
          explanation: '状態が変わっても物質そのものは同じです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q12',
          question: '水が氷になるときについて正しいものはどれですか。',
          options: ['質量が増える', '質量は変わらない', '質量が減る', '水ではなくなる'],
          correctIndex: 1,
          explanation: '状態変化では質量は変わりません。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q13',
          question: '氷が水に浮く理由はどれですか。',
          options: ['氷の質量がないから', '氷は水にとけないから', '水の密度が0だから', '氷の密度が水より小さいから'],
          correctIndex: 3,
          explanation: '氷は水より密度が小さいため浮きます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q14',
          question: '水とエタノールの混合物を加熱し、出てきた気体を冷やして液体として集める操作はどれですか。',
          options: ['ろ過', '蒸留', '再結晶', '水上置換法'],
          correctIndex: 1,
          explanation: '沸点の違いを利用する操作が蒸留です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q15',
          question: '蒸留で最初に多く出てくる液体は、どのような物質ですか。',
          options: ['沸点が低い物質', '沸点が高い物質', '密度が大きい物質', '水にとけない物質'],
          correctIndex: 0,
          explanation: '沸点が低い物質ほど先に気体になりやすいです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sc-q16',
          question: '純粋な物質の状態変化で、加熱中に温度が一定になることがあるのはなぜですか。',
          options: ['温度計がこわれるから', '質量が0になるから', '状態変化に熱が使われるから', '物質が消えるから'],
          correctIndex: 2,
          explanation: '状態変化している間、加えた熱は状態を変えるために使われます。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-sc-ex1',
          question:
            'エタノール（沸点78℃）と水（沸点100℃）の混合物を蒸留で分離する方法を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 混合物を加熱する',
              content:
                'フラスコに混合物を入れて加熱します。温度計で温度を測りながら加熱します。',
              highlight: '温度計で温度を確認',
            },
            {
              title: 'Step 2: 沸点の低いエタノールが先に蒸発',
              content:
                '約78℃になるとエタノールが先に蒸発し始めます。蒸気をガラス管で冷やして液体に戻し、試験管に集めます。',
              highlight: '78℃でエタノールが蒸発',
            },
            {
              title: 'Step 3: 分離の完了',
              content:
                '最初に集まる液体はエタノールを多くふくみ、後から集まる液体は水を多くふくみます。こうして沸点の違いで分離できます。',
              highlight: '沸点の違いで分離',
            },
          ],
          answer:
            '混合物を加熱し、沸点の低いエタノール（78℃）を先に蒸発させ、冷やして液体に戻すことで分離する。',
        },
        {
          id: 'sci1-sc-ex2',
          question:
            'ろうを加熱して液体にした後、冷やして固体に戻すとき、体積と質量はどう変化するか説明しなさい。',
          steps: [
            {
              title: 'Step 1: 体積の変化を考える',
              content:
                'ろうは一般の物質と同じく、液体→固体になると粒子の間隔がせまくなり、体積が小さくなります。',
              highlight: '体積は小さくなる',
            },
            {
              title: 'Step 2: 質量の変化を考える',
              content:
                '状態変化では粒子の数は変わらないので、質量は変化しません。',
              highlight: '質量は変わらない',
            },
          ],
          answer:
            '体積は小さくなる（粒子の間隔がせまくなるため）。質量は変化しない（粒子の数が変わらないため）。',
        },
        {
          id: 'sci1-sc-ex3',
          question:
            '次の加熱曲線から、物質の融点と沸点を読み取り、何の物質か答えなさい。\n【データ】加熱開始後、約0℃で温度が一定になり、その後上昇して約100℃で再び一定になった。',
          steps: [
            {
              title: 'Step 1: 温度が一定になる部分を見つける',
              content:
                'グラフで温度が水平になっている部分が2か所あります。1つ目は約0℃、2つ目は約100℃です。',
              highlight: '水平部分が状態変化の温度',
            },
            {
              title: 'Step 2: 融点と沸点を特定する',
              content:
                '最初に温度が一定になる部分が融点（固体→液体）で約0℃。次に温度が一定になる部分が沸点（液体→気体）で約100℃。',
              highlight: '融点0℃、沸点100℃',
            },
            {
              title: 'Step 3: 物質を特定する',
              content:
                '融点0℃、沸点100℃の物質は水です。物質の融点・沸点の表と照らし合わせて判断します。',
              highlight: '水と特定',
            },
          ],
          answer:
            '融点は0℃、沸点は100℃。この物質は水である。純粋な物質は状態変化中に温度が一定になるため、グラフの水平部分から融点・沸点を読み取れる。',
        },
        {
          id: 'sci1-sc-ex4',
          question:
            '液体のロウ60cm³（密度0.85 g/cm³）を冷やして固体にすると、体積は何cm³になるか。ただし固体のロウの密度は0.95 g/cm³とする。',
          steps: [
            {
              title: 'Step 1: 液体のロウの質量を求める',
              content:
                '質量＝体積×密度 なので、60×0.85＝51.0g。液体のロウの質量は51.0gです。',
              highlight: '質量＝60×0.85＝51.0g',
            },
            {
              title: 'Step 2: 状態変化で質量は変わらないことを確認',
              content:
                '状態変化では粒子の数が変わらないので、固体になっても質量は51.0gのまま。',
              highlight: '質量は51.0gで不変',
            },
            {
              title: 'Step 3: 固体の体積を求める',
              content:
                '体積＝質量÷密度 なので、51.0÷0.95＝約53.7cm³。固体のロウの体積は約53.7cm³。',
              highlight: '体積＝51.0÷0.95≒53.7cm³',
            },
          ],
          answer:
            '液体のロウ60cm³の質量は51.0g。固体になっても質量は変わらないので、体積＝51.0÷0.95≒53.7cm³。体積は小さくなる。',
        },
        {
          id: 'sci1-sc-ex5',
          question:
            '蒸留の実験で注意すべき操作を3つ挙げ、それぞれの理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 沸騰石を入れる',
              content:
                '加熱する液体に沸騰石を入れます。これは突沸（急に激しく沸騰して液体が飛び散ること）を防ぐためです。',
              highlight: '沸騰石→突沸防止',
            },
            {
              title: 'Step 2: 温度計の位置',
              content:
                '温度計の球部を枝つきフラスコの枝の付け根の高さに置きます。蒸気の温度を正確に測り、何の物質が蒸発しているかを判断するためです。',
              highlight: '温度計→枝の付け根で蒸気温度を測定',
            },
            {
              title: 'Step 3: 加熱をやめる順序',
              content:
                '火を消す前に、まずガラス管の先を冷却水から出します。先に火を消すとフラスコ内の気圧が下がり、冷却水が逆流してフラスコが割れる危険があるからです。',
              highlight: 'ガラス管を先に水から出す→逆流防止',
            },
          ],
          answer:
            '①沸騰石を入れる（突沸防止）。②温度計の球部を枝の付け根の高さに置く（蒸気の温度を正確に測定）。③火を消す前にガラス管を水から出す（冷却水の逆流防止）。',
        },
      ],
    },
    chatId: 'sci1-state-change',
  },
};
