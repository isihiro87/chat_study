import type { Topic } from '../../../../../../../../data/types';

export const quadFuncRealWorld: Topic = {
  id: 'math-g3-quad-func-real',
  eraId: 'math-g3-quadratic-func',
  name: '日常への応用',
  subtitle: '制動距離・ふりこの長さ',
  icon: '🚗',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '制動距離（速度の2乗に比例）',
          content:
            '車のブレーキをかけてから止まるまでの距離（制動距離）は、速度の2乗に比例するよ。時速 v km で走る車の制動距離を y m とすると、y = av² の形になるんだ。速度が2倍になると制動距離は4倍！だからスピードの出しすぎは危険なんだよ。',
          keyPoints: [
            '制動距離は速度の2乗に比例: y = av²',
            '速度が2倍 → 制動距離は4倍、速度が3倍 → 9倍',
            '実際の問題では比例定数 a を求めてから計算する',
          ],
        },
        {
          title: '停止距離 = 空走距離 + 制動距離',
          content:
            '実は車はブレーキを踏んでもすぐには止まらない。「あ、危ない！」と思ってからブレーキを踏むまでに進む距離を空走距離、ブレーキが効いてから止まるまでを制動距離というよ。停止距離 = 空走距離 + 制動距離で、空走距離は速度に比例（1次）、制動距離は速度の2乗に比例するんだ。',
          keyPoints: [
            '空走距離: ブレーキを踏むまでに進む距離（速度に比例）',
            '制動距離: ブレーキが効いてから止まるまで（速度の2乗に比例）',
            '停止距離 = 空走距離 + 制動距離（1次式 + 2次式）',
          ],
        },
        {
          title: 'ふりこの長さと周期',
          content:
            'ふりこが1往復する時間（周期）の2乗は、ひもの長さに比例するよ。T² = aL の形で表されるんだ。ひもが長いほどゆっくり揺れる。長さが4倍になると周期は2倍、9倍になると周期は3倍。平方根の考え方が使えるね。',
          keyPoints: [
            'ふりこの周期 T 秒の2乗がひもの長さ L cm に比例: T² = aL',
            '長さが4倍 → 周期は2倍（√4 = 2）',
            '長さが9倍 → 周期は3倍（√9 = 3）',
          ],
        },
        {
          title: '図形の重なりと面積変化',
          content:
            '図形を動かしたとき、重なる部分の面積が移動距離の2乗に比例することがあるよ。正方形や三角形が重なる問題は入試でもよく出題されるんだ。移動距離を x、面積を y として y = ax² の式を立てて解こう。',
          keyPoints: [
            '図形の重なりで面積が x² に比例するケースがある',
            '移動距離 x cm のとき面積 y cm² を式で表す',
            '具体的な値から比例定数 a を求めて立式しよう',
          ],
        },
        {
          title: 'いろいろな関数（階段状グラフ・水そう）',
          content:
            '日常には y = ax² 以外にも面白い関数があるよ。料金表のように一定区間ごとに値が変わる階段状グラフ、水そうの形によって変わる水面の上がり方など、関数は身のまわりにあふれているんだ。どれも「xの値が決まるとyの値が1つに決まる」という関数の定義を満たしているよ。',
          keyPoints: [
            '階段状グラフ: 料金表など、ある範囲で値が一定になるグラフ',
            '水そうの問題: 底面の形で水面の上昇速度が変わる',
            'ボールの斜面実験: 移動距離は時間の2乗に比例',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qf-rw-fc1',
        front: 'ブレーキをかけてから車が止まるまでに進む距離', back: '制動距離とは何か？',
        explanation: '速度の2乗に比例する（y = av²）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc2',
        front: '危険を感じてからブレーキを踏むまでに進む距離', back: '空走距離とは何か？',
        explanation: '速度に比例する（1次関数）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc3',
        front: '停止距離 ＝ 空走距離 ＋ 制動距離', back: '停止距離の求め方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc4',
        front: '4倍', back: '速度が2倍になると制動距離は何倍？',
        explanation: '$2^2 = 4$。速度が3倍なら9倍になる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc5',
        front: 'a = y ÷ v² で求める', back: '制動距離 y = av² で比例定数 a の求め方は？',
        explanation: '具体的な速度vと制動距離yの値を代入する',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc6',
        front: 'ふりこが1往復する時間のこと（秒で表す）', back: 'ふりこの周期とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc7',
        front: 'T² = aL（周期の2乗がひもの長さに比例）', back: 'ふりこの周期Tとひもの長さLの関係式は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc8',
        front: '2倍', back: 'ふりこの長さが4倍になると周期は何倍？',
        explanation: 'T²が4倍→T=√4=2倍',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc9',
        front: '3倍', back: 'ふりこの長さが9倍になると周期は何倍？',
        explanation: 'T²が9倍→T=√9=3倍',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc10',
        front: '正方形や三角形などが重なり始めるとき、重なる部分が二等辺三角形になるケースなど', back: '図形の移動で面積がx²に比例するのはどんなとき？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc11',
        front: '料金表のように、ある区間で値が一定で、区間が変わると段階的に値が変わるグラフ', back: '階段状グラフとはどんなグラフ？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc12',
        front: '時間の2乗に比例する（y = ax²の形）', back: '斜面を転がるボールの移動距離は時間とどんな関係？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rw-fc13',
        front: '同じxの値に対してyが大きくなる。制動距離なら「止まりにくい車」ということ', back: 'y = ax² で「aが大きい」とはどういう意味？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc14',
        front: '一次関数（直線のグラフ）になる', back: '水そうの底面積が一定のとき、水面の高さと時間の関係は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc15',
        front: '底面が広くなるところで水面の上昇が遅くなる（グラフの傾きが小さくなる）', back: '水そうの底面が途中で太くなると水面の上がり方はどうなる？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc16',
        front: '0.006 × 50² = 0.006 × 2500 = 15m', back: 'y = 0.006x² の制動距離で、時速50kmのとき何m？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc17',
        front: '時速50km: $0.01 \\times 2500 = 25$ m\n時速100km: $0.01 \\times 10000 = 100$ m（4倍！）', back: '$y = 0.01v^2$ で時速50kmと100kmの制動距離を比べると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc18',
        front: '9倍（3² = 9）。速度3倍で制動距離9倍。', back: '速度が3倍になると制動距離は何倍？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc19',
        front: '0.006 × 80² = 0.006 × 6400 = 38.4m', back: 'y = 0.006x² の制動距離で、時速80kmのとき何m？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc20',
        front: '$L = 100$ cm（$T^2 = 0.04L$ に $T=2$ を代入: $4 = 0.04L$ → $L = 100$）', back: '$T^2 = 0.04L$ で周期を2秒にするにはひもの長さは？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc21',
        front: 'T² = aL に L と T を代入して a を求める', back: 'ふりこの比例定数 a の求め方は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc22',
        front: '底面の形が変わるところで水面の上昇速度が変わる', back: '段付き水そうで水面の上がり方が変わる理由は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rw-fc23',
        front: '空走距離は速度の1次関数、制動距離は2次関数\n速度が大きいほど制動距離の割合が増える', back: '停止距離で空走距離と制動距離の増え方の違いは？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rw-fc24',
        front: '移動距離 y = ax² の変化の割合 = a(p+q)', back: '斜面を転がるボールの平均の速さの求め方は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rw-fc25',
        front: '比例 y = ax は直線、2乗に比例 y = ax² は放物線\n反比例 y = a/x は双曲線', back: 'これまでに学んだ関数の種類と特徴は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rw-fc26',
        front: '0.01 × 100² = 0.01 × 10000 = 100m', back: 'y = 0.01v² で時速100kmの制動距離は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rw-fc27',
        front: 'T² = 0.04 × 400 = 16 → T = 4秒', back: 'T² = 0.04L で L = 400cm のとき周期は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rw-fc28',
        front: '速度を √(y/a) で求める\n例: y = 0.01v² で y = 25 → v² = 2500 → v = 50km/h', back: '制動距離から速度を逆算する方法は？',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-func-real-q1',
          question: '時速 $30$ km の制動距離が $9$ m のとき、時速 $60$ km の制動距離は？',
          options: ['$18$ m', '$27$ m', '$45$ m', '$36$ m'],
          correctIndex: 3,
          explanation:
            '速度が2倍($30$ → $60$)になると制動距離は $2^2=4$ 倍。$9 \\times 4 = 36$ m だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-quad-func-real-q2',
          question: '$y = av^2$ で $v = 20$ のとき $y = 8$ だった。$a$ の値は？',
          options: ['$0.02$', '$0.2$', '$2$', '$0.4$'],
          correctIndex: 0,
          explanation:
            '$8 = a \\times 20^2$ → $8 = 400a$ → $a = \\frac{8}{400} = 0.02$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-quad-func-real-q3',
          question: 'ふりこが1往復する時間 $T$ 秒はひもの長さ $L$ cm に関係する。$T^2$ が $L$ に比例するとき、$L$ が4倍になると $T$ は何倍？',
          options: ['8倍', '4倍', '2倍', '16倍'],
          correctIndex: 2,
          explanation:
            '$T^2$ が $L$ に比例するから、$L$ が4倍 → $T^2$ も4倍 → $T$ は $\\sqrt{4} = 2$ 倍になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q4',
          question: '$T^2 = 0.04L$ のとき、$L = 225$ cm ならばふりこの周期 $T$ は何秒？',
          options: ['$2$ 秒', '$4$ 秒', '$3$ 秒', '$5$ 秒'],
          correctIndex: 2,
          explanation:
            '$T^2 = 0.04 \\times 225 = 9$ → $T = \\sqrt{9} = 3$ 秒だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q5',
          question: '空走距離が $0.6v$ m、制動距離が $0.01v^2$ m のとき、時速 $60$ km の停止距離は？',
          options: ['$72$ m', '$36$ m', '$54$ m', '$60$ m'],
          correctIndex: 0,
          explanation:
            '空走距離 $= 0.6 \\times 60 = 36$ m、制動距離 $= 0.01 \\times 3600 = 36$ m。停止距離 $= 36 + 36 = 72$ m だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q6',
          question: '正方形を $x$ cm ずらしたとき重なる面積が $y = 2x^2$ のとき、面積が $32$ cm² になるのは $x$ が何cmのとき？',
          options: ['$2$ cm', '$3$ cm', '$8$ cm', '$4$ cm'],
          correctIndex: 3,
          explanation:
            '$32 = 2x^2$ → $x^2 = 16$ → $x = 4$ cm（$x > 0$）だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q7',
          question: '斜面を転がるボールの移動距離が $y = 3x^2$ cm のとき、$2$ 秒後から $4$ 秒後までの移動距離は？',
          options: ['$12$ cm', '$36$ cm', '$24$ cm', '$48$ cm'],
          correctIndex: 1,
          explanation:
            '$x = 4$: $y = 48$、$x = 2$: $y = 12$。移動距離 $= 48 - 12 = 36$ cm だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q8',
          question: '駐車料金が最初の1時間300円、以後30分ごとに100円加算。2時間30分の料金は？',
          options: ['$500$ 円', '$700$ 円', '$600$ 円', '$800$ 円'],
          correctIndex: 2,
          explanation:
            '最初の1時間: $300$ 円。残り1時間30分 = 30分 × 3回 → $100 \\times 3 = 300$ 円。合計 $300 + 300 = 600$ 円だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q9',
          question: '$y = 0.01v^2$ で制動距離が $36$ m になるのは時速何kmのとき？',
          options: ['$40$ km', '$50$ km', '$70$ km', '$60$ km'],
          correctIndex: 3,
          explanation:
            '$36 = 0.01v^2$ → $v^2 = 3600$ → $v = \\sqrt{3600} = 60$。時速 $60$ km だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q10',
          question: '制動距離が $y = 0.005v^2$ のとき、時速 $60$ km と時速 $30$ km の制動距離の差は？',
          options: ['$9$ m', '$18$ m', '$13.5$ m', '$4.5$ m'],
          correctIndex: 2,
          explanation:
            '時速60: $0.005 \\times 3600 = 18$ m、時速30: $0.005 \\times 900 = 4.5$ m。差は $18 - 4.5 = 13.5$ m だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rw-q11',
          question: 'ふりこの長さが $L$ cm のとき周期が $T$ 秒、長さを $\\frac{L}{4}$ にしたとき周期は？',
          options: ['$\\frac{T}{4}$', '$2T$', '$\\frac{T}{2}$', '$4T$'],
          correctIndex: 2,
          explanation:
            '$T^2$ は $L$ に比例するから、$L$ が $\\frac{1}{4}$ 倍 → $T^2$ も $\\frac{1}{4}$ 倍 → $T$ は $\\frac{1}{2}$ 倍になるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q12',
          question: '底面積が一定の水そうに毎分同じ量の水を入れるとき、水面の高さと時間のグラフはどうなる？',
          options: ['直線', '放物線', '階段状', '双曲線'],
          correctIndex: 0,
          explanation:
            '底面積が一定で毎分同じ量を入れるから、高さは一定の割合で増加する。つまり一次関数で直線のグラフになるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q13',
          question: '速度が3倍になると制動距離は何倍？',
          options: ['$3$ 倍', '$6$ 倍', '$27$ 倍', '$9$ 倍'],
          correctIndex: 3,
          explanation:
            '$3^2 = 9$ 倍。速度の2乗に比例するから $n$ 倍で $n^2$ 倍だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q14',
          question: '$y = 0.006v^2$ で時速 $80$ km の制動距離は？',
          options: ['$38.4$ m', '$48$ m', '$32$ m', '$28.8$ m'],
          correctIndex: 0,
          explanation:
            '$0.006 \\times 80^2 = 0.006 \\times 6400 = 38.4$ m だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q15',
          question: '$T^2 = 0.04L$ で $L = 400$ cm のとき周期 $T$ は？',
          options: ['$2$ 秒', '$8$ 秒', '$16$ 秒', '$4$ 秒'],
          correctIndex: 3,
          explanation:
            '$T^2 = 0.04 \\times 400 = 16$ → $T = \\sqrt{16} = 4$ 秒だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q16',
          question: '$y = 0.01v^2$ で制動距離が $25$ m になるのは時速何km？',
          options: ['$40$ km', '$50$ km', '$60$ km', '$25$ km'],
          correctIndex: 1,
          explanation:
            '$25 = 0.01v^2$ → $v^2 = 2500$ → $v = 50$。時速 $50$ km だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q17',
          question: '空走距離 $0.5v$ m、制動距離 $0.01v^2$ m のとき、時速 $80$ km の停止距離は？',
          options: ['$80$ m', '$96$ m', '$120$ m', '$104$ m'],
          correctIndex: 3,
          explanation:
            '空走 $= 0.5 \\times 80 = 40$ m、制動 $= 0.01 \\times 6400 = 64$ m。停止 $= 40 + 64 = 104$ m。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q18',
          question: 'ふりこの長さを $\\frac{1}{9}$ にすると周期は何倍？',
          options: ['$\\frac{1}{3}$', '$\\frac{1}{9}$', '$3$', '$9$'],
          correctIndex: 0,
          explanation:
            '$L$ が $\\frac{1}{9}$ 倍 → $T^2$ も $\\frac{1}{9}$ 倍 → $T$ は $\\sqrt{\\frac{1}{9}} = \\frac{1}{3}$ 倍。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q19',
          question: '$y = 3x^2$ で $2$ 秒後から $4$ 秒後までのボールの移動距離は？',
          options: ['$24$ cm', '$36$ cm', '$12$ cm', '$48$ cm'],
          correctIndex: 1,
          explanation:
            '$x=4$: $y=48$、$x=2$: $y=12$。移動距離 $= 48-12 = 36$ cm。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q20',
          question: '時速 $40$ km の制動距離が $8$ m のとき、時速 $80$ km の制動距離は？',
          options: ['$16$ m', '$24$ m', '$64$ m', '$32$ m'],
          correctIndex: 3,
          explanation:
            '速度2倍で制動距離 $2^2 = 4$ 倍。$8 \\times 4 = 32$ m。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q21',
          question: '$T^2 = 0.04L$ で周期 $T = 2$ 秒にするにはひもの長さは？',
          options: ['$50$ cm', '$200$ cm', '$100$ cm', '$25$ cm'],
          correctIndex: 2,
          explanation:
            '$4 = 0.04L$ → $L = 100$ cm だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q22',
          question: '停止距離 = 空走距離 + 制動距離。空走距離はどんな関数？',
          options: [
            '2次関数',
            '1次関数（比例）',
            '反比例',
            '定数',
          ],
          correctIndex: 1,
          explanation:
            '空走距離は速度に比例する1次関数だよ。制動距離が2次関数。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rw-q23',
          question: '$y = 0.005v^2$ で時速 $100$ km の制動距離は？',
          options: ['$50$ m', '$25$ m', '$100$ m', '$500$ m'],
          correctIndex: 0,
          explanation:
            '$0.005 \\times 100^2 = 0.005 \\times 10000 = 50$ m だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rw-q24',
          question: '段付き水そうで、途中から底面が広くなったとき、水面の上がり方はどうなる？',
          options: [
            '速くなる',
            '遅くなる',
            '変わらない',
            '止まる',
          ],
          correctIndex: 1,
          explanation:
            '底面が広くなると同じ量の水でも高さの増え方が小さくなる。グラフの傾きが緩やかになるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rw-q25',
          question: '次のうち、関数ではないものは？',
          options: [
            '$y = 2x^2$',
            '$y = 3x + 1$',
            '1つの $x$ に対して $y$ が2つ決まる関係',
            '$y = \\frac{6}{x}$',
          ],
          correctIndex: 2,
          explanation:
            '関数は「$x$ が決まると $y$ が1つに決まる」もの。$y$ が2つ決まるのは関数ではないよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rw-q26',
          question: '斜面を転がるボールで、$y = 2x^2$ のとき $3$ 秒後から $5$ 秒後の平均の速さは？',
          options: ['$8$ cm/秒', '$16$ cm/秒', '$32$ cm/秒', '$12$ cm/秒'],
          correctIndex: 1,
          explanation:
            '$a(p+q) = 2(3+5) = 16$ cm/秒だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rw-q27',
          question: '制動距離 $y = av^2$ で $a$ の値が大きいとどうなる？',
          options: [
            '同じ速度でも制動距離が長くなる',
            '同じ速度でも制動距離が短くなる',
            '制動距離は変わらない',
            '速度が上がる',
          ],
          correctIndex: 0,
          explanation:
            '$a$ が大きいと同じ速度 $v$ に対して $y$ も大きくなる。つまり止まりにくい車ということだよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rw-q28',
          question: 'ふりこの実験で、周期が2倍になるにはひもの長さを何倍にする？',
          options: ['$2$ 倍', '$4$ 倍', '$8$ 倍', '$\\sqrt{2}$ 倍'],
          correctIndex: 1,
          explanation:
            '$T$ が2倍 → $T^2$ は4倍 → $L$ も4倍にする必要があるよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-func-real-ex1',
          question:
            '車の制動距離 $y$ m は速度 $v$ km/h の2乗に比例する。時速 $40$ km で制動距離が $8$ m のとき、時速 $100$ km の制動距離を求めよう。',
          steps: [
            {
              title: 'Step 1: $y = av^2$ とおいて $a$ を求める',
              content:
                '$v = 40, y = 8$ を代入: $8 = a \\times 40^2$ → $8 = 1600a$ → $a = 0.005$',
              highlight: '$a = 0.005$',
            },
            {
              title: 'Step 2: $v = 100$ を代入する',
              content:
                '$y = 0.005 \\times 100^2 = 0.005 \\times 10000 = 50$',
              highlight: '$y = 50$ m',
            },
          ],
          answer: '$50$ m',
        },
        {
          id: 'math-g3-quad-func-real-ex2',
          question:
            '正方形の紙を $x$ cm ずらして重ねたとき、重なる部分の面積 $y$ cm² が $y = x^2$ となった。$x = 3$ のときの面積を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = 3$ を代入する',
              content:
                '$y = x^2$ に $x = 3$ を代入するよ。$y = 3^2 = 9$',
              highlight: '$y = 9$',
            },
            {
              title: 'Step 2: 単位をつけて答える',
              content:
                '面積だから単位は cm²。$y = 9$ cm² が答えだよ。',
              highlight: '$9$ cm²',
            },
          ],
          answer: '$9$ cm²',
        },
        {
          id: 'math-g3-qf-rw-ex3',
          question:
            'ふりこの周期 $T$ 秒の2乗がひもの長さ $L$ cm に比例する。$L = 25$ cm のとき $T = 1$ 秒である。$T = 3$ 秒にするにはひもの長さを何cmにすればよいか。',
          steps: [
            {
              title: 'Step 1: $T^2 = aL$ とおいて $a$ を求める',
              content:
                '$T = 1, L = 25$ を代入: $1^2 = a \\times 25$ → $a = \\frac{1}{25} = 0.04$',
              highlight: '$a = 0.04$',
            },
            {
              title: 'Step 2: $T = 3$ を代入して $L$ を求める',
              content:
                '$3^2 = 0.04 \\times L$ → $9 = 0.04L$ → $L = \\frac{9}{0.04} = 225$',
              highlight: '$L = 225$ cm',
            },
          ],
          answer: '$225$ cm',
        },
        {
          id: 'math-g3-qf-rw-ex4',
          question:
            '1辺 $10$ cm の正方形を直線上でスライドさせる。重なり始めてから $x$ cm 移動したときの重なる部分の面積 $y$ cm² が $y = x^2$ であるとき、面積が $25$ cm² になるのは何cm移動したときか。',
          steps: [
            {
              title: 'Step 1: $y = 25$ を代入する',
              content:
                '$25 = x^2$ → $x = \\pm 5$。$x > 0$ なので $x = 5$',
              highlight: '$x = 5$',
            },
            {
              title: 'Step 2: 変域を確認する',
              content:
                '$0 \\leq x \\leq 10$ の範囲で $x = 5$ は条件を満たすので OK。',
              highlight: '$5$ cm 移動したとき',
            },
          ],
          answer: '$5$ cm',
        },
        {
          id: 'math-g3-qf-rw-ex5',
          question:
            '空走距離 $0.5v$ m、制動距離 $0.008v^2$ m のとき、時速 $50$ km の停止距離を求めよう。',
          steps: [
            {
              title: 'Step 1: 空走距離を計算する',
              content:
                '空走距離 $= 0.5 \\times 50 = 25$ m',
              highlight: '空走距離 $25$ m',
            },
            {
              title: 'Step 2: 制動距離を計算する',
              content:
                '制動距離 $= 0.008 \\times 50^2 = 0.008 \\times 2500 = 20$ m',
              highlight: '制動距離 $20$ m',
            },
            {
              title: 'Step 3: 停止距離を求める',
              content:
                '停止距離 $= 25 + 20 = 45$ m',
              highlight: '停止距離 $45$ m',
            },
          ],
          answer: '$45$ m',
        },
        {
          id: 'math-g3-qf-rw-ex6',
          question:
            '斜面を転がるボールの移動距離は $y = 2x^2$ cm（$x$ 秒後）で表される。$1$ 秒後から $3$ 秒後までにボールが進む距離を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = 3$ のときの位置を求める',
              content:
                '$y = 2 \\times 3^2 = 2 \\times 9 = 18$ cm',
              highlight: '$18$ cm',
            },
            {
              title: 'Step 2: $x = 1$ のときの位置を求める',
              content:
                '$y = 2 \\times 1^2 = 2 \\times 1 = 2$ cm',
              highlight: '$2$ cm',
            },
            {
              title: 'Step 3: 差を求める',
              content:
                '$18 - 2 = 16$ cm',
              highlight: '$16$ cm',
            },
          ],
          answer: '$16$ cm',
        },
      ],
    },
    chatId: 'math-g3-quad-func-real',
  },
};
