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
            src: '/images/science/motion-tape.svg',
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
      {
        id: 'sci3-mot-fc1',
        front: '記録タイマー（東日本）',
        back: '東日本の記録タイマーは1秒間に何回打点する？',
        explanation: '東日本は50Hz（50回/秒）で、1打点の間隔は0.02秒。西日本は60Hz。',
      },
      {
        id: 'sci3-mot-fc2',
        front: '平均の速さ',
        back: 'ある区間全体の移動距離を、かかった時間で割った速さを何という？',
        explanation: '平均の速さ = 移動距離 ÷ かかった時間。区間全体のならした速さ。',
      },
      {
        id: 'sci3-mot-fc3',
        front: '等速直線運動',
        back: '一直線上を一定の速さで進み続ける運動を何という？',
        explanation: '記録テープの打点間隔がすべて等しくなる。移動距離は時間に比例する。',
      },
      {
        id: 'sci3-mot-fc4',
        front: '自由落下',
        back: '重力だけがはたらいて落下する運動を何という？',
        explanation: '空気抵抗を無視した場合、すべての物体は同じ加速度で落下する。',
      },
      {
        id: 'sci3-mot-fc5',
        front: '瞬間の速さ',
        back: 'ごく短い時間に移動した距離から求めた速さを何という？',
        explanation: '自動車のスピードメーターが示す速さは瞬間の速さ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-mot-q1',
          question: '東日本の記録タイマーが1秒間に打つ打点の回数は？',
          options: ['30回', '40回', '50回', '60回'],
          correctIndex: 2,
          explanation:
            '東日本は電源の周波数が50Hzなので、記録タイマーは1秒間に50回打点します。西日本は60回です。',
        },
        {
          id: 'sci3-mot-q2',
          question: '等速直線運動をしている物体の記録テープの特徴は？',
          options: [
            '打点間隔がだんだん広くなる',
            '打点間隔がだんだんせまくなる',
            '打点間隔がすべて等しい',
            '打点が1か所に集まる',
          ],
          correctIndex: 2,
          explanation:
            '等速直線運動では速さが一定なので、同じ時間に同じ距離を移動し、打点間隔はすべて等しくなります。',
        },
        {
          id: 'sci3-mot-q3',
          question: '斜面を下る台車の記録テープはどうなる？',
          options: [
            '打点間隔がすべて等しい',
            '打点間隔がだんだん広くなる',
            '打点間隔がだんだんせまくなる',
            '打点間隔が広い・せまいを繰り返す',
          ],
          correctIndex: 1,
          explanation:
            '斜面を下る台車は重力の影響でだんだん速くなるため、打点間隔はだんだん広くなります。',
        },
        {
          id: 'sci3-mot-q4',
          question: '0.4秒間に2m移動した物体の平均の速さは？',
          options: ['0.2m/s', '0.8m/s', '2m/s', '5m/s'],
          correctIndex: 3,
          explanation:
            '平均の速さ = 移動距離 ÷ 時間 = 2m ÷ 0.4s = 5m/s です。',
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
        },
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
      ],
    },
    chatId: 'sci3-object-motion',
  },
};
