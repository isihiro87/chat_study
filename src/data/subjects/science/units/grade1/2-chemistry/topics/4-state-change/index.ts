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
      { id: 'sci1-sc-fc1', front: '状態変化', back: '物質が温度によって固体・液体・気体と状態を変えることを何という？', explanation: '物質そのものは変わらず、粒子の運動のようすが変わるだけ', difficulty: 'basic' },
      { id: 'sci1-sc-fc2', front: '固体→液体＝融解、液体→固体＝凝固', back: '固体→液体の変化と、液体→固体の変化をそれぞれ何という？', explanation: '固体⇔液体の変化は融解と凝固の対で覚える。', difficulty: 'basic' },
      { id: 'sci1-sc-fc3', front: '液体→気体の温度＝沸点、固体→液体の温度＝融点', back: '液体→気体になる温度と、固体→液体になる温度をそれぞれ何という？', explanation: '物質ごとに固有の値をもつ', difficulty: 'basic' },
      { id: 'sci1-sc-fc4', front: '蒸留', back: '液体の混合物を加熱して沸点の違いを利用して分離する方法を何という？', explanation: '沸点の低い物質が先に蒸発し、冷やして液体に戻すことで分離できる', difficulty: 'basic' },
      { id: 'sci1-sc-fc5', front: '体積が増える（膨張する）。ほとんどの物質は固体になると体積が小さくなるが、水は例外', back: '水が凍ると体積はどうなるか？', explanation: '水は例外的に凍ると体積が増える珍しい物質。', difficulty: 'basic' },
      { id: 'sci1-sc-fc6', front: '凝縮（液化）', back: '気体から液体への状態変化を何という？', explanation: '例：冷たいコップの表面に水滴がつく現象', difficulty: 'basic' },
      { id: 'sci1-sc-fc7', front: '昇華', back: '固体から直接気体に変わる状態変化（またはその逆）を何という？', explanation: '例：ドライアイス、ナフタレン（防虫剤）', difficulty: 'basic' },
      { id: 'sci1-sc-fc8', front: '表面がへこむ（中央がくぼむ）。液体→固体で体積が小さくなるため', back: 'ロウを液体にして冷やすと表面はどうなるか？', explanation: '一般的な物質は液体→固体で体積が減り、表面がへこむ。', difficulty: 'basic' },
      { id: 'sci1-sc-fc9', front: '水（約1.00g/cm³）のほうが氷（約0.92g/cm³）より密度が大きい', back: '水の密度と氷の密度はどちらが大きいか？', explanation: '水は凍ると体積が増えるため、氷のほうが密度が小さい。', difficulty: 'basic' },
      { id: 'sci1-sc-fc10', front: '状態変化が起こっている部分。加えた熱が状態変化に使われるため温度が上がらない', back: '純粋な物質の加熱曲線で、グラフが水平になる部分は何を表す？', explanation: '加えた熱が粒子の配置を変えるために使われ、温度上昇には使われない。', difficulty: 'standard' },
      { id: 'sci1-sc-fc11', front: '温度が一定に保たれる。融点や沸点で水平な部分が現れる', back: '純粋な物質を加熱すると、状態変化中の温度変化はどうなる？', explanation: '融点や沸点で加えた熱が状態変化に使われるため温度が変わらない。', difficulty: 'basic' },
      { id: 'sci1-sc-fc12', front: '温度が一定になる部分がなく、なだらかに上昇し続ける', back: '混合物を加熱すると、温度変化のグラフはどうなる？', explanation: '混合物は成分ごとに沸点が異なるため、一定温度にならない。', difficulty: 'standard' },
      { id: 'sci1-sc-fc13', front: '約78℃', back: 'エタノールの沸点は約何℃か？', explanation: '水（100℃）より低いため、蒸留で先に蒸発して分離できる', difficulty: 'basic' },
      { id: 'sci1-sc-fc14', front: '枝つきフラスコを使う。温度計の球部は枝の付け根の高さに置く', back: '蒸留で使うフラスコの名前と、温度計を置く位置は？', explanation: '枝の付け根の高さに温度計を置くと、蒸気の温度を正確に測れる。', difficulty: 'standard' },
      { id: 'sci1-sc-fc15', front: '突沸（急に激しく沸騰すること）を防ぐため', back: '蒸留で液体に沸騰石を入れる理由は？', explanation: '沸騰石の小さな穴から気泡が出て、急な沸騰を防ぐ。', difficulty: 'standard' },
      { id: 'sci1-sc-fc16', front: 'ガソリン→灯油→軽油→重油', back: '原油を蒸留すると何が得られるか？沸点の低い順に答えよ。', explanation: '沸点の違いを利用して原油から様々な石油製品を分離する。', difficulty: 'standard' },
      { id: 'sci1-sc-fc17', front: '約-196℃。食品の急速冷凍や医療分野での保存などに使われる', back: '窒素の沸点は約何℃か？液体窒素はどのような場面で使われるか？', explanation: '窒素は非常に低い温度で液体になり、極低温が必要な用途に使われる。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc18', front: '粒子の運動が激しくなる', back: '温度が高くなると粒子の運動はどうなるか？', explanation: '温度が高い＝粒子の運動が激しい。これが状態変化の原因', difficulty: 'standard' },
      { id: 'sci1-sc-fc19', front: '昇華（固体→気体）', back: 'ドライアイスが白い煙を出しながら小さくなる現象は何という変化？', explanation: '白い煙は冷気で冷やされた空気中の水蒸気が水滴になったもの', difficulty: 'standard' },
      { id: 'sci1-sc-fc20', front: '脱脂綿にしみこませて火をつける。エタノールを多くふくむ液体は燃える', back: '蒸留で集めた液体がエタノールかどうか確認する方法は？', explanation: 'エタノールは可燃性なので、脱脂綿にしみこませて火がつくか確認する。', difficulty: 'standard' },
      { id: 'sci1-sc-fc21', front: '粒子が規則正しく並び、その場で振動している状態', back: '固体の粒子はどのような状態か？', explanation: '固体では粒子の運動が弱く、決まった位置で振動している。', difficulty: 'standard' },
      { id: 'sci1-sc-fc22', front: '粒子が自由に動き回っているが、ある程度まとまっている状態', back: '液体の粒子はどのような状態か？', explanation: '液体では粒子がある程度自由に動くため、形が変わりやすい。', difficulty: 'standard' },
      { id: 'sci1-sc-fc23', front: '粒子が激しく飛び回り、互いに離れている状態', back: '気体の粒子はどのような状態か？', explanation: '気体では粒子が激しく飛び回り、容器全体に広がる。', difficulty: 'standard' },
      { id: 'sci1-sc-fc24', front: '融点＝0℃、沸点＝100℃', back: '水の融点と沸点はそれぞれ何℃か？', explanation: '純粋な水は0℃で凍り始め、100℃で沸騰する。', difficulty: 'basic' },
      { id: 'sci1-sc-fc25', front: '氷は水より密度が小さい（氷：約0.92g/cm³、水：約1.00g/cm³）ため水に浮く', back: '氷が水に浮く理由を密度を使って説明せよ。', explanation: '氷は水より密度が小さいため、水に浮くことができる。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc26', front: '水が凍ると体積が大きくなり、水道管を内側から押し広げて破裂するから', back: '冬に水道管が破裂することがあるのはなぜか？', explanation: '水は凍ると体積が増え、管を内側から押し広げて破裂させる。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc27', front: '分留', back: '原油を蒸留して分離することを何というか？', explanation: '原油を蒸留して各成分に分離する工業的な方法を分留という。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc28', front: 'エタノール（沸点が水より低いため先に蒸発する）', back: '赤ワインを蒸留すると最初に出てくる液体は何を多くふくむか？', explanation: 'エタノールは沸点が水より低いため、蒸留で先に気化して分離される。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc29', front: '蒸発（気化）', back: '液体から気体への状態変化を何というか？', explanation: '液体の表面や内部から気体に変わる変化を気化（蒸発）という。', difficulty: 'basic' },
      { id: 'sci1-sc-fc30', front: '変化しない。粒子の数が変わらないから', back: '状態変化すると質量は変化するか？理由も答えよ。', explanation: '粒子の数が変わらないため、状態変化しても質量は一定。', difficulty: 'basic' },
      { id: 'sci1-sc-fc31', front: '変化する。粒子の間隔が変わるため', back: '状態変化すると体積は変化するか？理由も答えよ。', explanation: '粒子の間隔が変わるため、状態変化で体積は変化する。', difficulty: 'basic' },
      { id: 'sci1-sc-fc32', front: '大きくなる（粒子の間隔が広がるため）', back: '一般に固体→液体→気体と変化すると体積はどうなるか？', explanation: '粒子の間隔が広がっていくため、気体の状態が最も体積が大きい。', difficulty: 'standard' },
      { id: 'sci1-sc-fc33', front: '変わらない。粒子そのものは変化せず、運動のようすが変わるだけだから', back: '状態変化しても物質の種類は変わるか？理由も答えよ。', explanation: '状態変化では粒子の動き方が変わるだけで、粒子自体は変化しない。', difficulty: 'standard' },
      { id: 'sci1-sc-fc34', front: '氷の結晶構造がすき間の多い構造をとるため', back: '水が凍ると体積が大きくなるのはなぜか？', explanation: '水の結晶（氷）は六角形の構造をとり、すき間が多いため体積が増える。', difficulty: 'standard' },
      { id: 'sci1-sc-fc35', front: '変化しない', back: 'ロウの状態変化で質量は変化するか？', explanation: '状態変化では粒子の数は変わらないので質量は一定。', difficulty: 'basic' },
      { id: 'sci1-sc-fc36', front: '一般的な物質と同じ。液体→固体で体積が小さくなる', back: 'ロウの状態変化は一般的な物質と同じか、水のような例外か？', explanation: 'ロウは一般的な物質と同じく、固体になると体積が小さくなる。', difficulty: 'standard' },
      { id: 'sci1-sc-fc37', front: '固まったロウの表面がへこんでいることで確認できる', back: 'ロウの実験で体積が小さくなったことは何で確認できるか？', explanation: '液体のロウが固まると体積が減り、中央部がくぼむ。', difficulty: 'standard' },
      { id: 'sci1-sc-fc38', front: '約-115℃', back: 'エタノールの融点は約何℃か？', explanation: 'エタノールは約-115℃という非常に低い温度で凍る。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc39', front: '約1535℃', back: '鉄の融点は約何℃か？', explanation: '鉄は約1535℃という非常に高い温度にならないと液体にならない。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc40', front: '加えた熱が状態変化に使われるため、温度の上昇に使われないから', back: '純粋な物質の加熱で温度が一定になるのはなぜか？', explanation: '熱が状態変化に使われている間は、温度上昇に使われない。', difficulty: 'standard' },
      { id: 'sci1-sc-fc41', front: 'グラフに水平な部分（温度が一定の部分）があるかどうか。あれば純粋な物質、なければ混合物', back: '加熱曲線で純粋な物質か混合物かを判断するにはどこに注目するか？', explanation: '水平な部分の有無で純粋な物質か混合物かを判断できる。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc42', front: '温度が変化したとき（次の物質が蒸発し始めたとき）に試験管を入れかえる', back: '蒸留で集める液体を入れかえるのはどのようなときか？', explanation: '温度が変わると別の成分が蒸発し始めるため試験管を入れかえる。', difficulty: 'standard' },
      { id: 'sci1-sc-fc43', front: '蒸留塔の上部から取り出される', back: '原油の蒸留で沸点の低い成分はどこから取り出されるか？', explanation: '沸点の低い成分ほど蒸留塔の上部で気化し、上から取り出される。', difficulty: 'advanced' },
      { id: 'sci1-sc-fc44', front: 'ドライアイス（固体の二酸化炭素）、ナフタレン（防虫剤）', back: '昇華する物質の例を2つ答えよ。', explanation: 'ドライアイスやナフタレンは液体の状態を経ずに直接気体になる。', difficulty: 'standard' },
      { id: 'sci1-sc-fc45', front: '二酸化炭素', back: 'ドライアイスは何という物質の固体か？', explanation: 'ドライアイスは二酸化炭素の固体で、常温で昇華して気体になる。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-sc-q1',
          question: '固体から液体への状態変化を何という？',
          options: ['蒸発', '融解', '凝固', '凝縮'],
          correctIndex: 1,
          explanation:
            '固体から液体に変わることを融解といいます。このときの温度が融点です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q2',
          question: '状態変化について正しいものはどれ？',
          options: [
            '質量が変化する',
            '物質の種類が変わる',
            '体積が変化する',
            '粒子の数が変わる',
          ],
          correctIndex: 2,
          explanation:
            '状態変化では粒子の間隔が変わるため体積は変化しますが、粒子の数は変わらないので質量は変わりません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q3',
          question: '水が凍るとき、体積はどうなるか？',
          options: ['小さくなる', '変わらない', '半分になる', '大きくなる'],
          correctIndex: 3,
          explanation:
            '水は例外的に、液体→固体（氷）になると体積が大きくなります。これが氷が水に浮く理由です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q4',
          question: '沸点の違いを利用して液体の混合物を分離する方法を何という？',
          options: ['蒸留', '再結晶', 'ろ過', '蒸発'],
          correctIndex: 0,
          explanation:
            '蒸留は液体の混合物を加熱し、沸点の違いを利用して物質を分離する方法です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q5',
          question:
            '純粋な物質を加熱したとき、状態変化中の温度変化はどうなるか？',
          options: [
            '温度が急激に上がる',
            '温度が不規則に変化する',
            '温度が下がる',
            '温度が一定に保たれる',
          ],
          correctIndex: 3,
          explanation:
            '純粋な物質は融点や沸点で状態変化している間、温度が一定に保たれます。これは加えた熱が状態変化に使われるためです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q6',
          question: '気体から液体への状態変化を何という？',
          options: ['融解', '凝縮', '昇華', '蒸発'],
          correctIndex: 1,
          explanation:
            '気体から液体に変わることを凝縮（液化）といいます。冷たいコップに水滴がつくのはこの現象です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q7',
          question:
            'ドライアイスが液体にならずに直接気体になる変化を何という？',
          options: ['昇華', '凝縮', '蒸発', '融解'],
          correctIndex: 0,
          explanation:
            '固体から直接気体に変化すること（またはその逆）を昇華といいます。ドライアイスやナフタレンが例です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q8',
          question:
            'ロウを液体にしてから冷やして固体にすると、表面はどうなる？',
          options: [
            '表面がふくらむ',
            '表面が変わらない',
            '表面がへこむ',
            '表面が割れる',
          ],
          correctIndex: 2,
          explanation:
            'ロウは一般の物質と同じく液体→固体で体積が小さくなるため、表面が中央にへこみます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q9',
          question: 'エタノールの沸点は約何℃か？',
          options: ['約50℃', '約100℃', '約78℃', '約120℃'],
          correctIndex: 2,
          explanation:
            'エタノールの沸点は約78℃です。水（100℃）より低いため、蒸留で先に蒸発して分離できます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q10',
          question: '蒸留の実験でフラスコに沸騰石を入れる理由は？',
          options: [
            '反応を速めるため',
            '突沸を防ぐため',
            '温度を正確に測るため',
            '液体を速く蒸発させるため',
          ],
          correctIndex: 1,
          explanation:
            '沸騰石は突沸（急に激しく沸騰すること）を防ぐために入れます。小さな泡が出て穏やかに沸騰します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sc-q11',
          question:
            '混合物を加熱したときの温度変化のグラフの特徴として正しいものは？',
          options: [
            '温度が一定になる部分がある',
            '温度がまったく変わらない',
            '温度が急に下がる部分がある',
            '温度がなだらかに上昇し続ける',
          ],
          correctIndex: 3,
          explanation:
            '混合物は純粋な物質と異なり、温度が一定になる部分がなく、なだらかに上昇し続けます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q12',
          question: '蒸留で温度計の球部はどこに置くのが正しいか？',
          options: [
            '枝つきフラスコの枝の付け根の高さ',
            '液体の中に入れる',
            'フラスコの底',
            '試験管の中',
          ],
          correctIndex: 0,
          explanation:
            '温度計の球部は枝つきフラスコの枝の付け根の高さに置き、蒸気の温度を正確に測定します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q13',
          question: '状態変化しても物質の種類は変わるか？',
          options: ['変わる', '変わらない', '条件による', '気体になると変わる'],
          correctIndex: 1,
          explanation:
            '状態変化しても物質の種類は変わりません。粒子そのものは変化せず、運動のようすが変わるだけです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q14',
          question: '水が凍ると体積が大きくなるのはなぜか？',
          options: [
            '粒子の数が増えるから',
            '粒子が大きくなるから',
            '氷の結晶構造がすき間の多い構造をとるため',
            '温度が下がるから',
          ],
          correctIndex: 2,
          explanation:
            '水が凍ると、氷の結晶構造がすき間の多い構造をとるため、体積が大きくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q15',
          question: '状態変化で質量が変わらない理由を粒子の考え方で説明したものはどれ？',
          options: [
            '粒子が小さくなるから',
            '粒子の数が変わらないから',
            '粒子の速さが一定だから',
            '粒子が消えるから',
          ],
          correctIndex: 1,
          explanation:
            '状態変化では粒子の数が変わらないため、質量は変化しません。変わるのは粒子の間隔や運動の激しさです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q16',
          question: '水の融点は何℃か？',
          options: ['−100℃', '0℃', '50℃', '100℃'],
          correctIndex: 1,
          explanation:
            '水の融点は0℃、沸点は100℃です。融点は固体から液体に変わる温度です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q17',
          question: '昇華する物質の例として正しいものはどれ？',
          options: ['水', '鉄', 'ドライアイス', 'エタノール'],
          correctIndex: 2,
          explanation:
            'ドライアイス（固体の二酸化炭素）は液体にならず直接気体になります。ナフタレンも昇華する物質です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q18',
          question: 'ロウが固体になると表面がへこむ理由はどれ？',
          options: [
            '質量が減るから',
            '液体→固体で体積が小さくなるから',
            '蒸発するから',
            '化学変化が起こるから',
          ],
          correctIndex: 1,
          explanation:
            'ロウは一般の物質と同じく液体→固体で体積が小さくなるため、表面が内側にへこみます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q19',
          question: '加熱曲線を見て純粋な物質か混合物かを判断するにはどこに注目するか？',
          options: [
            'グラフの傾き',
            'グラフに水平な部分があるかどうか',
            'グラフの開始温度',
            'グラフの最高温度',
          ],
          correctIndex: 1,
          explanation:
            'グラフに水平な部分（温度が一定の部分）があれば純粋な物質、なければ混合物と判断できます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q20',
          question: '冬に水道管が破裂することがある理由はどれ？',
          options: [
            '金属が縮むから',
            '水圧が高くなるから',
            '気温で管が溶けるから',
            '水が凍ると体積が大きくなり内側から押し広げるから',
          ],
          correctIndex: 3,
          explanation:
            '水は凍ると体積が約1.1倍に膨張するため、水道管を内側から押し広げて破裂させることがあります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q21',
          question: '原油を蒸留して得られるものを沸点の低い順に並べたものはどれ？',
          options: [
            '重油→軽油→灯油→ガソリン',
            '軽油→重油→ガソリン→灯油',
            '灯油→ガソリン→重油→軽油',
            'ガソリン→灯油→軽油→重油',
          ],
          correctIndex: 3,
          explanation:
            '原油の蒸留ではガソリン→灯油→軽油→重油の順（沸点の低い順）に分離されます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q22',
          question: '蒸留の実験で使うフラスコの名前は何か？',
          options: ['丸底フラスコ', '三角フラスコ', '枝つきフラスコ', 'メスフラスコ'],
          correctIndex: 2,
          explanation:
            '蒸留では枝つきフラスコを使います。温度計の球部は枝の付け根の高さに置きます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q23',
          question: '赤ワインを蒸留すると最初に出てくる液体は何を多くふくむか？',
          options: [
            'エタノール',
            '水',
            '砂糖',
            '色素',
          ],
          correctIndex: 0,
          explanation:
            'エタノールの沸点（約78℃）は水の沸点（100℃）より低いため、先に蒸発してエタノールを多くふくむ液体が最初に集まります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q24',
          question: '温度が高くなると粒子の運動はどうなるか？',
          options: [
            '粒子の運動が激しくなる',
            '粒子の運動が穏やかになる',
            '粒子の数が増える',
            '粒子が消える',
          ],
          correctIndex: 0,
          explanation:
            '温度が高くなると粒子の運動が激しくなります。これが状態変化の原因です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q25',
          question: '純粋な物質の加熱で温度が一定になるのはなぜか？',
          options: [
            '加えた熱が状態変化に使われるため',
            '熱が逃げるから',
            '物質が冷えるから',
            '加熱が止まるから',
          ],
          correctIndex: 0,
          explanation:
            '純粋な物質の加熱中、状態変化が起こっている間は加えた熱が状態変化に使われるため、温度が上昇しません。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q26',
          question: 'ドライアイスは何という物質の固体か？',
          options: ['水', '酸素', '窒素', '二酸化炭素'],
          correctIndex: 3,
          explanation:
            'ドライアイスは二酸化炭素の固体です。昇華して直接気体になります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q27',
          question: '鉄の融点は約何℃か？',
          options: ['約100℃', '約500℃', '約1535℃', '約3000℃'],
          correctIndex: 2,
          explanation:
            '鉄の融点は約1535℃です。非常に高い温度でないと溶けません。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q28',
          question: 'エタノールの融点は約何℃か？',
          options: [
            '約−115℃',
            '約0℃',
            '約78℃',
            '約−50℃',
          ],
          correctIndex: 0,
          explanation:
            'エタノールの融点は約−115℃です。沸点は約78℃で、水（沸点100℃）より低い温度で蒸発します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q29',
          question: 'ドライアイスの周りに見える白い煙の正体は何か？',
          options: [
            '二酸化炭素の気体',
            '空気中の水蒸気が冷やされてできた水滴（霧）',
            '酸素の気体',
            'ドライアイスの粉末',
          ],
          correctIndex: 1,
          explanation:
            '白い煙は空気中の水蒸気がドライアイスの冷気で冷やされてできた細かい水滴（霧）です。二酸化炭素の気体自体は無色透明です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q30',
          question: '固体のロウを液体のロウに入れるとどうなるか？',
          options: [
            '固体のロウは浮く',
            '固体のロウは沈む',
            '溶ける',
            '変化しない',
          ],
          correctIndex: 1,
          explanation:
            '固体のロウ（0.95g/cm³）は液体のロウ（0.85g/cm³）より密度が大きいため沈みます。水と氷の関係とは逆です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q31',
          question: '蒸留で火を止めるとき、先にガラス管の先を水から出す必要がある理由は？',
          options: [
            '蒸気が漏れるから',
            '冷却水がフラスコに逆流して割れる危険があるから',
            '温度計が壊れるから',
            '液体が蒸発するから',
          ],
          correctIndex: 1,
          explanation:
            '火を止めるとフラスコ内の気体が冷えて体積が小さくなり気圧が下がるため、冷却水が逆流してフラスコが割れる危険があります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sc-q32',
          question: '防虫剤（ナフタレン）がタンスの中で小さくなるのはどのような状態変化か？',
          options: [
            '融解',
            '蒸発',
            '昇華',
            '凝縮',
          ],
          correctIndex: 2,
          explanation:
            'ナフタレンは固体が室温で直接気体に変化する昇華を起こすため、液体にならずに小さくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q33',
          question: '状態変化で体積が変化する理由を粒子の考え方で説明したものはどれ？',
          options: [
            '粒子の数が変わるから',
            '粒子の間隔が変わるから',
            '粒子の種類が変わるから',
            '粒子が消えるから',
          ],
          correctIndex: 1,
          explanation:
            '状態変化によって粒子の間隔が変わるため、物質全体の体積が変化します。固体→液体→気体で粒子の間隔が広がります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sc-q34',
          question: '液体のロウ50cm³（密度0.85g/cm³）が固体（密度0.95g/cm³）になると体積は約何cm³？',
          options: [
            '約44.7cm³',
            '約50.0cm³',
            '約55.9cm³',
            '約42.5cm³',
          ],
          correctIndex: 0,
          explanation:
            '質量＝50×0.85＝42.5g。固体の体積＝42.5÷0.95＝約44.7cm³。質量は変わらないので密度で割ります。',
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
