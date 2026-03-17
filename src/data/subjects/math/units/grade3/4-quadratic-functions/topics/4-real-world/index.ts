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
        front: '制動距離とは何か？',
        back: 'ブレーキをかけてから車が止まるまでに進む距離のこと。速度の2乗に比例する（y = av²）',
      },
      {
        id: 'math-g3-qf-rw-fc2',
        front: '空走距離とは何か？',
        back: '危険を感じてからブレーキを踏むまでに進む距離。速度に比例する（1次関数）',
      },
      {
        id: 'math-g3-qf-rw-fc3',
        front: '停止距離の求め方は？',
        back: '停止距離 ＝ 空走距離 ＋ 制動距離',
      },
      {
        id: 'math-g3-qf-rw-fc4',
        front: '速度が2倍になると制動距離は何倍？',
        back: '4倍（2² = 4）。速度が3倍なら9倍になる',
      },
      {
        id: 'math-g3-qf-rw-fc5',
        front: '制動距離 y = av² で比例定数 a の求め方は？',
        back: '具体的な速度vと制動距離yの値を代入して a = y ÷ v² で求める',
      },
      {
        id: 'math-g3-qf-rw-fc6',
        front: 'ふりこの周期とは？',
        back: 'ふりこが1往復する時間のこと（秒で表す）',
      },
      {
        id: 'math-g3-qf-rw-fc7',
        front: 'ふりこの周期Tとひもの長さLの関係式は？',
        back: 'T² = aL（周期の2乗がひもの長さに比例）',
      },
      {
        id: 'math-g3-qf-rw-fc8',
        front: 'ふりこの長さが4倍になると周期は何倍？',
        back: '2倍（T²が4倍→T=√4=2倍）',
      },
      {
        id: 'math-g3-qf-rw-fc9',
        front: 'ふりこの長さが9倍になると周期は何倍？',
        back: '3倍（T²が9倍→T=√9=3倍）',
      },
      {
        id: 'math-g3-qf-rw-fc10',
        front: '図形の移動で面積がx²に比例するのはどんなとき？',
        back: '正方形や三角形などが重なり始めるとき、重なる部分が二等辺三角形になるケースなど',
      },
      {
        id: 'math-g3-qf-rw-fc11',
        front: '階段状グラフとはどんなグラフ？',
        back: '料金表のように、ある区間で値が一定で、区間が変わると段階的に値が変わるグラフ',
      },
      {
        id: 'math-g3-qf-rw-fc12',
        front: '斜面を転がるボールの移動距離は時間とどんな関係？',
        back: '時間の2乗に比例する（y = ax²の形）',
      },
      {
        id: 'math-g3-qf-rw-fc13',
        front: 'y = ax² で「aが大きい」とはどういう意味？',
        back: '同じxの値に対してyが大きくなる。制動距離なら「止まりにくい車」ということ',
      },
      {
        id: 'math-g3-qf-rw-fc14',
        front: '水そうの底面積が一定のとき、水面の高さと時間の関係は？',
        back: '一次関数（直線のグラフ）になる',
      },
      {
        id: 'math-g3-qf-rw-fc15',
        front: '水そうの底面が途中で太くなると水面の上がり方はどうなる？',
        back: '底面が広くなるところで水面の上昇が遅くなる（グラフの傾きが小さくなる）',
      },
      {
        id: 'math-g3-qf-rw-fc16',
        front: 'y = 0.006x² の制動距離で、時速50kmのとき何m？',
        back: '0.006 × 50² = 0.006 × 2500 = 15m',
      },
      {
        id: 'math-g3-qf-rw-fc17',
        front: '「xの値が決まるとyの値が1つに決まる」とき、yはxの何であるといえるか？',
        back: 'yはxの関数であるという',
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
        },
        {
          id: 'math-g3-quad-func-real-q2',
          question: '$y = av^2$ で $v = 20$ のとき $y = 8$ だった。$a$ の値は？',
          options: ['$0.02$', '$0.2$', '$2$', '$0.4$'],
          correctIndex: 0,
          explanation:
            '$8 = a \\times 20^2$ → $8 = 400a$ → $a = \\frac{8}{400} = 0.02$ だよ。',
        },
        {
          id: 'math-g3-quad-func-real-q3',
          question: 'ふりこが1往復する時間 $T$ 秒はひもの長さ $L$ cm に関係する。$T^2$ が $L$ に比例するとき、$L$ が4倍になると $T$ は何倍？',
          options: ['8倍', '4倍', '2倍', '16倍'],
          correctIndex: 2,
          explanation:
            '$T^2$ が $L$ に比例するから、$L$ が4倍 → $T^2$ も4倍 → $T$ は $\\sqrt{4} = 2$ 倍になるよ。',
        },
        {
          id: 'math-g3-qf-rw-q4',
          question: '$T^2 = 0.04L$ のとき、$L = 225$ cm ならばふりこの周期 $T$ は何秒？',
          options: ['$2$ 秒', '$3$ 秒', '$4$ 秒', '$5$ 秒'],
          correctIndex: 1,
          explanation:
            '$T^2 = 0.04 \\times 225 = 9$ → $T = \\sqrt{9} = 3$ 秒だよ。',
        },
        {
          id: 'math-g3-qf-rw-q5',
          question: '空走距離が $0.6v$ m、制動距離が $0.01v^2$ m のとき、時速 $60$ km の停止距離は？',
          options: ['$72$ m', '$36$ m', '$54$ m', '$60$ m'],
          correctIndex: 0,
          explanation:
            '空走距離 $= 0.6 \\times 60 = 36$ m、制動距離 $= 0.01 \\times 3600 = 36$ m。停止距離 $= 36 + 36 = 72$ m だよ。',
        },
        {
          id: 'math-g3-qf-rw-q6',
          question: '正方形を $x$ cm ずらしたとき重なる面積が $y = 2x^2$ のとき、面積が $32$ cm² になるのは $x$ が何cmのとき？',
          options: ['$2$ cm', '$3$ cm', '$8$ cm', '$4$ cm'],
          correctIndex: 3,
          explanation:
            '$32 = 2x^2$ → $x^2 = 16$ → $x = 4$ cm（$x > 0$）だよ。',
        },
        {
          id: 'math-g3-qf-rw-q7',
          question: '斜面を転がるボールの移動距離が $y = 3x^2$ cm のとき、$2$ 秒後から $4$ 秒後までの移動距離は？',
          options: ['$12$ cm', '$36$ cm', '$24$ cm', '$48$ cm'],
          correctIndex: 1,
          explanation:
            '$x = 4$: $y = 48$、$x = 2$: $y = 12$。移動距離 $= 48 - 12 = 36$ cm だよ。',
        },
        {
          id: 'math-g3-qf-rw-q8',
          question: '駐車料金が最初の1時間300円、以後30分ごとに100円加算。2時間30分の料金は？',
          options: ['$500$ 円', '$700$ 円', '$600$ 円', '$800$ 円'],
          correctIndex: 2,
          explanation:
            '最初の1時間: $300$ 円。残り1時間30分 = 30分 × 3回 → $100 \\times 3 = 300$ 円。合計 $300 + 300 = 600$ 円だよ。',
        },
        {
          id: 'math-g3-qf-rw-q9',
          question: '$y = 0.01v^2$ で制動距離が $36$ m になるのは時速何kmのとき？',
          options: ['$40$ km', '$50$ km', '$70$ km', '$60$ km'],
          correctIndex: 3,
          explanation:
            '$36 = 0.01v^2$ → $v^2 = 3600$ → $v = \\sqrt{3600} = 60$。時速 $60$ km だよ。',
        },
        {
          id: 'math-g3-qf-rw-q10',
          question: '制動距離が $y = 0.005v^2$ のとき、時速 $60$ km と時速 $30$ km の制動距離の差は？',
          options: ['$9$ m', '$18$ m', '$13.5$ m', '$4.5$ m'],
          correctIndex: 2,
          explanation:
            '時速60: $0.005 \\times 3600 = 18$ m、時速30: $0.005 \\times 900 = 4.5$ m。差は $18 - 4.5 = 13.5$ m だよ。',
        },
        {
          id: 'math-g3-qf-rw-q11',
          question: 'ふりこの長さが $L$ cm のとき周期が $T$ 秒、長さを $\\frac{L}{4}$ にしたとき周期は？',
          options: ['$\\frac{T}{4}$', '$\\frac{T}{2}$', '$2T$', '$4T$'],
          correctIndex: 1,
          explanation:
            '$T^2$ は $L$ に比例するから、$L$ が $\\frac{1}{4}$ 倍 → $T^2$ も $\\frac{1}{4}$ 倍 → $T$ は $\\frac{1}{2}$ 倍になるよ。',
        },
        {
          id: 'math-g3-qf-rw-q12',
          question: '底面積が一定の水そうに毎分同じ量の水を入れるとき、水面の高さと時間のグラフはどうなる？',
          options: ['直線', '放物線', '階段状', '双曲線'],
          correctIndex: 0,
          explanation:
            '底面積が一定で毎分同じ量を入れるから、高さは一定の割合で増加する。つまり一次関数で直線のグラフになるよ。',
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
