import type { Topic } from '../../../../../../../types';

export const objectMotion: Topic = {
  id: 'sci3-object-motion',
  eraId: 'sci3-physics',
  name: '物体の運動',
  subtitle: '速さ・記録タイマー・等速直線運動',
  icon: '📏',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '運動の記録と速さ',
          content:
            '物体の運動を調べるには、記録タイマーを使って一定時間ごとの移動距離を記録します。記録タイマーは東日本では1秒間に50回（1打点0.02秒）、西日本では1秒間に60回（1打点1/60秒）打点します。速さには、ある区間全体の平均の速さと、ごく短い時間での瞬間の速さがあります。',
          image: {
            src: '/images/science/grade3/physics/motion-tape.svg',
            alt: '記録タイマーのテープ',
            caption: '等速・加速・減速の打点パターン',
          },
          keyPoints: [
            '記録タイマー：東日本50回/秒（0.02秒間隔）、西日本60回/秒',
            '平均の速さ = 移動距離 ÷ かかった時間',
            '瞬間の速さ：ごく短い時間（打点間隔が十分短いとき）の速さ',
          ],
        },
        {
          title: '等速直線運動',
          content:
            '一直線上を一定の速さで進み続ける運動を等速直線運動といいます。記録タイマーのテープでは、打点の間隔がすべて等しくなります。等速直線運動では、移動距離は時間に比例します。',
          keyPoints: [
            '等速直線運動：速さも向きも変わらない運動',
            '記録テープの打点間隔がすべて等しい',
            '移動距離は時間に比例する（グラフは原点を通る直線）',
          ],
        },
        {
          title: 'だんだん速くなる運動・おそくなる運動',
          content:
            '斜面を下る物体や自由落下する物体は、重力の影響でだんだん速くなります。速さは一定の割合で増加し、記録テープの打点間隔はだんだん広くなります。逆に、斜面を上る物体や摩擦力がはたらく物体は、だんだんおそくなります。逆向きの力によって速さが減少し、打点間隔はだんだんせまくなります。',
          keyPoints: [
            'だんだん速くなる運動：斜面を下る物体、自由落下（重力で速さが一定の割合で増加）',
            'だんだんおそくなる運動：斜面を上る物体、摩擦力がはたらく運動',
            '記録テープの打点間隔の変化で運動のようすがわかる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-mot-slide1',
          title: '記録タイマーで速さを調べよう',
          slides: [
            {
              type: 'question',
              question: '記録タイマーのテープから、物体の速さがわかるのはなぜ？',
              subtext: '運動の記録',
              emoji: '⏱️',
            },
            {
              type: 'reason',
              headline: '一定時間ごとの移動距離がわかるから！',
              points: [
                '記録タイマーは一定の間隔で打点する（東日本：0.02秒ごと）',
                '打点間の距離が長い → 速い、短い → おそい',
                '5打点ごとに切って並べると速さの変化が見える',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '平均の速さ', value: '区間全体の速さ', emoji: '📊' },
                  { label: '瞬間の速さ', value: 'ごく短い時間の速さ', emoji: '⚡' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '記録タイマーで打点間隔を調べれば速さの変化がわかる！',
              keywords: [
                { text: '記録タイマー', isImportant: true },
                { text: '平均の速さ', isImportant: true },
                { text: '瞬間の速さ' },
              ],
              nextHint: '打点間隔がすべて同じ運動って？',
            },
          ],
        },
        {
          id: 'sci3-mot-slide2',
          title: '等速直線運動のひみつ',
          slides: [
            {
              type: 'question',
              question: '速さがずっと変わらない運動、どんなテープになる？',
              subtext: '等速直線運動',
              emoji: '➡️',
            },
            {
              type: 'reason',
              headline: '打点間隔がすべて等しくなる！',
              points: [
                '一直線上を一定の速さで進む = 等速直線運動',
                '打点間隔が等しい → 同じ時間に同じ距離を移動',
                '移動距離は時間に比例（グラフは直線）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '等速直線運動 = 速さも向きも変わらない運動！',
              keywords: [
                { text: '等速直線運動', isImportant: true },
                { text: '打点間隔が等しい' },
                { text: '距離は時間に比例' },
              ],
              nextHint: 'では速さが変わる運動はどうなる？',
            },
          ],
        },
        {
          id: 'sci3-mot-slide3',
          title: '速くなる運動・おそくなる運動',
          slides: [
            {
              type: 'question',
              question: '斜面を下る台車のテープ、打点間隔はどう変わる？',
              subtext: '速さが変化する運動',
              emoji: '📐',
            },
            {
              type: 'reason',
              headline: 'だんだん広くなる！重力で速さが増すから！',
              points: [
                '斜面を下る → 重力の斜面方向の成分で加速',
                '自由落下も同じ（重力だけがはたらく）',
                '逆に斜面を上ると摩擦力や重力で減速 → 間隔がせまくなる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'だんだん速く', value: '打点間隔が広がる', emoji: '🔽' },
                  { label: 'だんだんおそく', value: '打点間隔がせまくなる', emoji: '🔼' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '力の向きで速さが増減する！テープの間隔で判断！',
              keywords: [
                { text: '自由落下', isImportant: true },
                { text: '重力', isImportant: true },
                { text: '摩擦力' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-mot-fc1', front: '50回/秒（1打点0.02秒間隔）', back: '東日本の記録タイマーは1秒間に何回打点する？', difficulty: 'basic' },
      { id: 'sci3-mot-fc2', front: '平均の速さ', back: 'ある区間全体の移動距離を、かかった時間で割った速さを何という？', difficulty: 'basic' },
      { id: 'sci3-mot-fc3', front: '等速直線運動', back: '一直線上を一定の速さで進み続ける運動を何という？', difficulty: 'basic' },
      { id: 'sci3-mot-fc4', front: '自由落下', back: '重力だけがはたらいて落下する運動を何という？', difficulty: 'basic' },
      { id: 'sci3-mot-fc5', front: '瞬間の速さ', back: 'ごく短い時間に移動した距離から求めた速さを何という？', explanation: '自動車のスピードメーターが示す速さは瞬間の速さ。', difficulty: 'basic' },
      { id: 'sci3-mot-fc6', front: 'ストロボスコープ', back: '一定の時間間隔で発光し、運動のようすを記録する装置を何という？', difficulty: 'basic' },
      { id: 'sci3-mot-fc7', front: '0.1秒（0.02秒×5）', back: '50Hzの記録タイマーで5打点分の時間は何秒？', difficulty: 'basic' },
      { id: 'sci3-mot-fc8', front: 'm/s（メートル毎秒）', back: '1秒間に何メートル進むかを表す速さの単位は？', difficulty: 'basic' },
      { id: 'sci3-mot-fc9', front: '÷ 3.6する（例：36km/h ÷ 3.6 = 10m/s）', back: 'km/hをm/sに変換するにはどうする？', difficulty: 'standard' },
      { id: 'sci3-mot-fc10', front: '原点を通る直線（傾き＝速さ）', back: '等速直線運動の距離-時間グラフはどのような形になる？', difficulty: 'basic' },
      { id: 'sci3-mot-fc11', front: '水平な直線（面積＝移動距離）', back: '等速直線運動の速さ-時間グラフはどのような形になる？', difficulty: 'standard' },
      { id: 'sci3-mot-fc12', front: '速さの増え方が大きくなる', back: '斜面の角度を大きくすると、物体の速さの増え方はどうなる？', explanation: '重力の斜面方向の成分が大きくなるため。', difficulty: 'standard' },
      { id: 'sci3-mot-fc13', front: '重力の斜面方向の成分（分力）', back: '斜面を下る物体を加速させる力の正体は？', explanation: '斜面の角度が大きいほどこの成分は大きくなる。', difficulty: 'standard' },
      { id: 'sci3-mot-fc14', front: '摩擦力', back: '運動の向きと逆向きにはたらき、物体を減速させる力を何という？', difficulty: 'basic' },
      { id: 'sci3-mot-fc15', front: '移動距離を表す', back: '速さ-時間グラフで、グラフと時間軸で囲まれた面積は何を表す？', difficulty: 'standard' },
      { id: 'sci3-mot-fc16', front: '打点間隔がだんだん広くなる', back: 'だんだん速くなる運動の記録テープの打点間隔はどうなる？', difficulty: 'basic' },
      { id: 'sci3-mot-fc17', front: '打点間隔がだんだんせまくなる', back: 'だんだんおそくなる運動の記録テープの打点間隔はどうなる？', difficulty: 'basic' },
      { id: 'sci3-mot-fc18', front: '速度', back: '速さと向きの両方を表す量を何という？', explanation: '速さは大きさだけ、速度は向きも含む。', difficulty: 'standard' },
      { id: 'sci3-mot-fc19', front: '0.02秒', back: '50Hzの記録タイマーの1打点の時間間隔は？', difficulty: 'basic' },
      { id: 'sci3-mot-fc20', front: '60回/秒', back: '西日本の記録タイマーは1秒間に何回打点する？', difficulty: 'basic' },
      { id: 'sci3-mot-fc21', front: '曲線（放物線）', back: 'だんだん速くなる運動の距離-時間グラフはどのような形？', difficulty: 'standard' },
      { id: 'sci3-mot-fc22', front: '右上がりの直線', back: 'だんだん速くなる運動の速さ-時間グラフはどのような形？', difficulty: 'standard' },
      { id: 'sci3-mot-fc23', front: '× 3.6する（例：10m/s × 3.6 = 36km/h）', back: 'm/sをkm/hに変換するにはどうする？', difficulty: 'standard' },
      { id: 'sci3-mot-fc24', front: '影響しない（空気抵抗を無視すれば同じ加速度で落下）', back: '自由落下で物体の重さは落下速度に影響するか？', difficulty: 'advanced' },
      { id: 'sci3-mot-fc25', front: 'グラフと時間軸で囲まれた台形の面積を求める', back: '加速する運動の速さ-時間グラフで移動距離はどう求める？', difficulty: 'advanced' },
      { id: 'sci3-mot-fc26', front: '自由落下と同じ運動になる', back: '斜面の角度を90度（垂直）にすると、物体の運動はどうなる？', difficulty: 'advanced' },
      { id: 'sci3-mot-fc27', front: '等速直線運動を続ける', back: '水平面上で摩擦力がはたらかない場合、運動中の物体はどうなる？', explanation: '合力が0なので、慣性の法則により等速直線運動を続ける。', difficulty: 'advanced' },
      { id: 'sci3-mot-fc28', front: '1.5m/s', back: '記録タイマー（50Hz）で10打点分のテープの長さが30cmだった。平均の速さは？', explanation: '10打点＝0.2秒、0.30m÷0.2s＝1.5m/s', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-mot-q1',
          question: '東日本の記録タイマーが1秒間に打つ打点の回数は？',
          options: ['30回', '50回', '40回', '60回'],
          correctIndex: 1,
          explanation:
            '東日本は電源の周波数が50Hzなので、記録タイマーは1秒間に50回打点します。西日本は60回です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q2',
          question: '等速直線運動をしている物体の記録テープの特徴は？',
          options: [
            '打点間隔がだんだん広くなる',
            '打点間隔がだんだんせまくなる',
            '打点が1か所に集まる',
            '打点間隔がすべて等しい',
          ],
          correctIndex: 3,
          explanation:
            '等速直線運動では速さが一定なので、同じ時間に同じ距離を移動し、打点間隔はすべて等しくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q3',
          question: '斜面を下る台車の記録テープはどうなる？',
          options: [
            '打点間隔がだんだん広くなる',
            '打点間隔がすべて等しい',
            '打点間隔がだんだんせまくなる',
            '打点間隔が広い・せまいを繰り返す',
          ],
          correctIndex: 0,
          explanation:
            '斜面を下る台車は重力の影響でだんだん速くなるため、打点間隔はだんだん広くなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q4',
          question: '0.4秒間に2m移動した物体の平均の速さは？',
          options: ['5m/s','0.8m/s','0.2m/s','2m/s'],
          correctIndex: 0,
          explanation:
            '平均の速さ = 移動距離 ÷ 時間 = 2m ÷ 0.4s = 5m/s です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q5',
          question: '自由落下する物体について正しいのはどれ？',
          options: [
            '速さは一定である',
            '速さはだんだんおそくなる',
            '速さは一定の割合で増加する',
            '重い物体ほど速く落下する',
          ],
          correctIndex: 2,
          explanation:
            '自由落下では重力によって速さが一定の割合で増加します。空気抵抗を無視すれば、物体の重さに関係なく同じ加速度で落下します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q6',
          question: '50Hzの記録タイマーで5打点分の時間は？',
          options: ['0.02秒', '0.1秒', '0.05秒', '0.5秒'],
          correctIndex: 1,
          explanation:
            '50Hzでは1打点の間隔が0.02秒です。5打点分は 0.02秒 × 5 = 0.1秒 になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q7',
          question: '等速直線運動の距離-時間グラフはどのような形になる？',
          options: [
            '原点を通る直線',
            '水平な直線',
            '右下がりの直線',
            '曲線',
          ],
          correctIndex: 0,
          explanation:
            '等速直線運動では移動距離が時間に比例するため、距離-時間グラフは原点を通る直線になります。傾きが速さを表します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q8',
          question: '斜面の角度を大きくすると、物体の速さの増え方はどうなる？',
          options: [
            '小さくなる',
            '変わらない',
            '速さは増えない',
            '大きくなる',
          ],
          correctIndex: 3,
          explanation:
            '斜面の角度が大きいほど重力の斜面方向の成分が大きくなるため、速さの増え方（加速）も大きくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q9',
          question: '水平面上で摩擦力がはたらかない場合、運動中の物体はどうなる？',
          options: [
            '等速直線運動を続ける',
            'だんだん速くなる',
            'しだいに止まる',
            '向きが変わる',
          ],
          correctIndex: 0,
          explanation:
            '摩擦力がなければ物体にはたらく力の合力は0なので、速さも向きも変わらず等速直線運動を続けます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q10',
          question: 'ストロボ写真で等速直線運動をしている物体の特徴は？',
          options: [
            '像の間隔がだんだん広くなる',
            '像の間隔がだんだんせまくなる',
            '像の間隔がすべて等しい',
            '像が1か所に重なる',
          ],
          correctIndex: 2,
          explanation:
            '等速直線運動では一定の時間に同じ距離を移動するため、ストロボ写真では像の間隔がすべて等しくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mot-q11',
          question: '36km/hは何m/sか？',
          options: ['3.6m/s', '360m/s', '36m/s', '10m/s'],
          correctIndex: 3,
          explanation:
            'km/hからm/sへの変換は ÷ 3.6 です。36 ÷ 3.6 = 10m/s になります。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-mot-q12',
          question: 'だんだんおそくなる運動の速さ-時間グラフはどのような形になる？',
          options: ['右下がりの直線','右上がりの直線','水平な直線','原点を通る直線',
          ],
          correctIndex: 0,
          explanation:
            'だんだんおそくなる運動では速さが時間とともに減少するため、速さ-時間グラフは右下がりの直線になります。',
        difficulty: 'standard',
      },
        { id: 'sci3-mot-q13', question: '西日本の記録タイマーが1秒間に打つ打点の回数は？', options: ['30回', '40回', '50回', '60回'], correctIndex: 3, explanation: '西日本は電源の周波数が60Hzなので、記録タイマーは1秒間に60回打点します。', difficulty: 'standard' },
        { id: 'sci3-mot-q14', question: '10m/sは何km/h？', options: ['3.6km/h','10km/h','100km/h','36km/h'], correctIndex: 3, explanation: 'm/sからkm/hへの変換は × 3.6 です。10 × 3.6 = 36km/h になります。', difficulty: 'standard' },
        { id: 'sci3-mot-q15', question: '等速直線運動の速さ-時間グラフはどのような形？', options: ['右上がりの直線', '右下がりの直線', '水平な直線', '曲線'], correctIndex: 2, explanation: '等速直線運動では速さが一定なので、速さ-時間グラフは水平な直線になります。', difficulty: 'standard' },
        { id: 'sci3-mot-q16', question: 'だんだん速くなる運動の距離-時間グラフはどのような形？', options: ['直線', '水平な直線', '曲線（放物線）', '右下がりの直線'], correctIndex: 2, explanation: '速さが増加すると、同じ時間でも後半ほど移動距離が大きくなるため、曲線になります。', difficulty: 'standard' },
        { id: 'sci3-mot-q17', question: '速さ-時間グラフで、グラフと時間軸で囲まれた面積は何を表す？', options: ['速さ', '加速度', '移動距離', '力'], correctIndex: 2, explanation: '速さ-時間グラフの面積は移動距離を表します。', difficulty: 'standard' },
        { id: 'sci3-mot-q18', question: '記録タイマー（50Hz）で10打点分のテープの長さが30cmだった。平均の速さは？', options: ['0.3m/s', '1.5m/s', '3.0m/s', '15m/s'], correctIndex: 1, explanation: '10打点分の時間＝0.02×10＝0.2秒、平均の速さ＝0.30m÷0.2s＝1.5m/s です。', difficulty: 'standard' },
        { id: 'sci3-mot-q19', question: '斜面の角度を90度にすると、物体の運動は何と同じになる？', options: ['等速直線運動', '自由落下', '円運動', '静止'], correctIndex: 1, explanation: '斜面の角度が90度（垂直）になると、重力の斜面方向の成分が重力そのものになり、自由落下と同じです。', difficulty: 'standard' },
        { id: 'sci3-mot-q20', question: '等速直線運動している物体に力がはたらいていないとき、物体はどうなる？', options: ['止まる', 'だんだん速くなる', 'だんだんおそくなる', '等速直線運動を続ける'], correctIndex: 3, explanation: '力がはたらいていなければ（合力0なら）、物体は等速直線運動を続けます。', difficulty: 'standard' },
        { id: 'sci3-mot-q21', question: '速さと速度の違いは？', options: ['同じもの', '速度は大きさのみ、速さは向きも含む', '速さは大きさのみ、速度は向きも含む', '単位が違う'], correctIndex: 2, explanation: '速さは大きさだけを表し、速度は大きさと向きの両方を表します。', difficulty: 'standard' },
        { id: 'sci3-mot-q22', question: 'ストロボ写真で像の間隔がだんだん広くなる運動は？', options: ['等速直線運動', 'だんだん速くなる運動', 'だんだんおそくなる運動', '静止'], correctIndex: 1, explanation: '像の間隔がだんだん広くなるのは、同じ時間に移動する距離が増えている＝だんだん速くなる運動です。', difficulty: 'standard' },
        { id: 'sci3-mot-q23', question: 'だんだん速くなる運動の速さ-時間グラフはどのような形？', options: ['水平な直線','右下がりの直線','曲線','右上がりの直線'], correctIndex: 3, explanation: 'だんだん速くなる運動では速さが一定の割合で増加するため、速さ-時間グラフは右上がりの直線になります。', difficulty: 'advanced' },
        { id: 'sci3-mot-q24', question: '自動車のスピードメーターが示す速さは何の速さ？', options: ['平均の速さ', '瞬間の速さ', '合計の速さ', '最大の速さ'], correctIndex: 1, explanation: 'スピードメーターはその瞬間の速さ（瞬間の速さ）を示しています。', difficulty: 'advanced' },
        { id: 'sci3-mot-q25', question: '物体が0.5秒間に3m移動したとき、平均の速さは？', options: ['1.5m/s', '3m/s', '6m/s', '0.5m/s'], correctIndex: 2, explanation: '平均の速さ＝移動距離÷時間＝3m÷0.5s＝6m/sです。', difficulty: 'advanced' },
        { id: 'sci3-mot-q26', question: '記録テープを5打点ごとに切って並べたら全部同じ長さだった。この運動は？', options: ['等速直線運動','だんだんおそくなる運動','だんだん速くなる運動','自由落下'], correctIndex: 0, explanation: 'テープの長さがすべて同じ＝同じ時間に同じ距離を移動＝等速直線運動です。', difficulty: 'advanced' },
        { id: 'sci3-mot-q27', question: '摩擦力は物体の運動にどのような影響を与える？', options: ['加速させる', '減速させる', '向きを変える', '影響しない'], correctIndex: 1, explanation: '摩擦力は運動の向きと逆向きにはたらき、物体を減速させます。', difficulty: 'advanced' },
        { id: 'sci3-mot-q28', question: '等速直線運動で速さ2m/sの物体が10秒間に移動する距離は？', options: ['20m','12m','5m','8m'], correctIndex: 0, explanation: '移動距離＝速さ×時間＝2m/s×10s＝20mです。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-mot-ex1',
          question:
            '記録タイマー（50Hz）で台車の運動を記録したところ、5打点分のテープの長さが15cmでした。この区間の台車の平均の速さを求めなさい。',
          steps: [
            {
              title: 'Step 1: 5打点分の時間を求める',
              content:
                '50Hzの記録タイマーでは1打点の間隔は0.02秒です。5打点分（打点の間は5つ）の時間は 0.02 × 5 = 0.1秒 です。',
              highlight: '0.1秒',
            },
            {
              title: 'Step 2: 移動距離を確認する',
              content:
                'テープの長さ（移動距離）は15cm = 0.15m です。',
              highlight: '0.15m',
            },
            {
              title: 'Step 3: 平均の速さを計算する',
              content:
                '平均の速さ = 移動距離 ÷ 時間 = 0.15m ÷ 0.1s = 1.5m/s です。',
              highlight: '1.5m/s',
            },
          ],
          answer: '平均の速さ = 0.15m ÷ 0.1s = 1.5m/s',
        },
        {
          id: 'sci3-mot-ex2',
          question:
            'ストロボスコープを0.1秒間隔で発光させて、水平面上を運動する球を撮影しました。写真では球の像が4cm間隔で等間隔に並んでいました。この球の速さを求めなさい。',
          steps: [
            {
              title: 'Step 1: 像の間隔から移動距離を確認する',
              content:
                '像の間隔が4cmなので、0.1秒間に4cm移動しています。4cm = 0.04m です。',
              highlight: '0.04m',
            },
            {
              title: 'Step 2: 時間を確認する',
              content:
                'ストロボスコープの発光間隔が0.1秒なので、像と像の間の時間は0.1秒です。',
              highlight: '0.1秒',
            },
            {
              title: 'Step 3: 速さを計算する',
              content:
                '速さ = 移動距離 ÷ 時間 = 0.04m ÷ 0.1s = 0.4m/s です。像が等間隔なので等速直線運動です。',
              highlight: '0.4m/s',
            },
          ],
          answer: '速さ = 0.04m ÷ 0.1s = 0.4m/s（等速直線運動）',
        },
        {
          id: 'sci3-mot-ex3',
          question:
            '自動車が72km/hで走っています。この速さをm/sに変換しなさい。',
          steps: [
            {
              title: 'Step 1: 変換の公式を確認する',
              content:
                'km/h から m/s に変換するには ÷ 3.6 します。1km = 1000m、1h = 3600s なので、1km/h = 1000/3600 m/s = 1/3.6 m/s です。',
              highlight: '÷ 3.6',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '72 ÷ 3.6 = 20m/s です。',
              highlight: '20m/s',
            },
          ],
          answer: '72km/h = 72 ÷ 3.6 = 20m/s',
        },
        {
          id: 'sci3-mot-ex4',
          question:
            '記録タイマー（50Hz）で斜面を下る台車の運動を記録しました。テープを5打点ごとに切って並べたところ、順に 3cm, 5cm, 7cm, 9cm でした。各区間の速さを求め、0.1秒ごとに速さがどれだけ増えているか求めなさい。',
          steps: [
            {
              title: 'Step 1: 各区間の時間を確認する',
              content:
                '5打点分の時間は 0.02 × 5 = 0.1秒です。各テープは0.1秒間の移動距離を表します。',
              highlight: '0.1秒',
            },
            {
              title: 'Step 2: 各区間の速さを求める',
              content:
                '第1区間：0.03m ÷ 0.1s = 0.3m/s\n第2区間：0.05m ÷ 0.1s = 0.5m/s\n第3区間：0.07m ÷ 0.1s = 0.7m/s\n第4区間：0.09m ÷ 0.1s = 0.9m/s',
              highlight: '0.3, 0.5, 0.7, 0.9m/s',
            },
            {
              title: 'Step 3: 速さの増加量を求める',
              content:
                '0.1秒ごとの速さの増加量は 0.5 - 0.3 = 0.2m/s、0.7 - 0.5 = 0.2m/s、0.9 - 0.7 = 0.2m/s。一定の割合（0.2m/s）で速さが増えています。',
              highlight: '0.1秒ごとに0.2m/sずつ増加',
            },
          ],
          answer: '各区間の速さ: 0.3, 0.5, 0.7, 0.9m/s。0.1秒ごとに0.2m/sずつ速さが増加している。',
        },
        {
          id: 'sci3-mot-ex5',
          question:
            '物体が等速直線運動をしており、速さ-時間グラフで速さが5m/sの水平な直線として表されています。4秒間の移動距離を求めなさい。',
          steps: [
            {
              title: 'Step 1: グラフの面積が移動距離であることを確認',
              content:
                '速さ-時間グラフにおいて、グラフと時間軸で囲まれた部分の面積が移動距離を表します。',
              highlight: 'グラフの面積 = 移動距離',
            },
            {
              title: 'Step 2: 面積を計算する',
              content:
                '等速直線運動なので、グラフは横4秒、縦5m/sの長方形になります。面積 = 5m/s × 4s = 20m です。',
              highlight: '20m',
            },
            {
              title: 'Step 3: 公式でも確認する',
              content:
                '移動距離 = 速さ × 時間 = 5m/s × 4s = 20m。グラフの面積と一致します。',
              highlight: '20m',
            },
          ],
          answer: '移動距離 = 5m/s × 4s = 20m（速さ-時間グラフの面積）',
        },
      ],
    },
    chatId: 'sci3-object-motion',
  },
};
