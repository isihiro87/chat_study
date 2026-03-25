import type { Topic } from '../../../../../../../../data/types';

export const quadFuncParabola: Topic = {
  id: 'math-g3-quad-func-parabola',
  eraId: 'math-g3-quadratic-func',
  name: 'y=ax²と放物線',
  subtitle: 'U字型のグラフを描こう',
  icon: '〰️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'y=ax²の意味（2乗に比例）',
          content:
            'y が x の2乗に比例するとき、y = ax² という式で表されるよ。a は比例定数で、a ≠ 0 であることが条件。x が2倍になると y は4倍、x が3倍になると y は9倍になるのが特徴だよ。',
          image: {
            src: '/images/math/grade3/parabola-comparison.svg',
            alt: 'y=ax²のグラフ比較',
            caption: 'aの値でグラフの形が変わる',
          },
          keyPoints: [
            'y = ax²（a ≠ 0）の形で、y は x の2乗に比例する',
            'x が n 倍になると y は n² 倍になる',
            'a が比例定数で、グラフの開き具合を決める',
          ],
        },
        {
          title: '放物線の特徴',
          content:
            'y = ax² のグラフは「放物線」と呼ばれるU字型の曲線だよ。a > 0 なら上に開き、a < 0 なら下に開くんだ。|a| が大きいほどグラフは細く（急に）なり、|a| が小さいほど広く（ゆるやかに）なるよ。',
          keyPoints: [
            'a > 0 → 上に開く放物線（U字型）',
            'a < 0 → 下に開く放物線（∩字型）',
            '|a| が大きいほどグラフは細く、|a| が小さいほど広い',
          ],
        },
        {
          title: '比例定数 a の求め方',
          content:
            'y = ax² に x と y の値の組を代入して a を求めるよ。例えば x = 3, y = 18 のとき、18 = a × 9 だから a = 2 となるんだ。グラフが通る1点の座標がわかれば式が決まるのがポイント！',
          keyPoints: [
            'y = ax² に既知の (x, y) を代入して a を求める',
            '計算: a = y ÷ x²',
            '1つの点がわかれば比例定数 a が決まる',
          ],
        },
        {
          title: 'グラフの対称性と軸',
          content:
            'y = ax² のグラフは y 軸について左右対称だよ。x を -x に置き換えても y = a(-x)² = ax² と同じ式になるからだね。頂点は原点 (0, 0) にあり、対称軸は y 軸（x = 0）なんだ。',
          keyPoints: [
            '対称軸は y 軸（x = 0 の直線）',
            '頂点は原点 (0, 0)',
            'x と -x で y の値が等しい → 左右対称',
          ],
        },
        {
          title: '放物線の式を求める方法',
          content:
            'グラフが通る点の座標から式を求めるには、y = ax² に代入して a を計算するよ。例えば点 (2, -8) を通るなら -8 = a × 4 で a = -2、つまり y = -2x²。グラフの形（開き方・向き）も a の値で判断できるね。',
          keyPoints: [
            '通る点 (p, q) → q = ap² で a を求める',
            'a の符号でグラフの向きがわかる',
            '|a| の大小でグラフの幅がわかる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qf-pb-fc1',
        front: '$y = 12$', back: '$y = 3x^2$ で $x = -2$ のとき $y$ は？',
        explanation: '$3 \\times (-2)^2 = 3 \\times 4 = 12$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc2',
        front: '$a = 2$', back: '$y = ax^2$ が点 $(3, 18)$ を通る。$a$ は？',
        explanation: '$18 = a \\times 9$ より $a = 2$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc3',
        front: '$y = -8$', back: '$y = -2x^2$ で $x = 2$ のとき $y$ は？',
        explanation: '$-2 \\times 2^2 = -2 \\times 4 = -8$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc4',
        front: '$y$ 軸（$x = 0$ の直線）', back: '$y = ax^2$ のグラフの対称軸は？',
        explanation: '$x$ を $-x$ に置き換えても式が変わらないので $y$ 軸対称',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc5',
        front: '原点 $(0, 0)$', back: '$y = ax^2$ のグラフの頂点は？',
        explanation: '$x = 0$ のとき $y = 0$ で、ここが最小値（$a>0$）または最大値（$a<0$）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc6',
        front: '上に開く（U字型）', back: '$a > 0$ のとき、放物線はどちらに開く？',
        explanation: '$a > 0$ なら $y$ は常に $0$ 以上。原点が最低点になる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc7',
        front: '下に開く（$\\cap$字型）', back: '$a < 0$ のとき、放物線はどちらに開く？',
        explanation: '$a < 0$ なら $y$ は常に $0$ 以下。原点が最高点になる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc8',
        front: '細くなる（急になる）', back: '$|a|$ が大きいとき、放物線の開き方はどうなる？',
        explanation: '$|a|$ が大きいほど同じ $x$ の変化に対して $y$ の変化が大きくなる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc9',
        front: '広くなる（ゆるやかになる）', back: '$|a|$ が小さいとき、放物線の開き方はどうなる？',
        explanation: '$|a|$ が小さいほど $y$ の変化がゆるやかで、グラフが横に広がる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc10',
        front: '4倍（$2^2 = 4$）', back: '$y = ax^2$ で $x$ が2倍になると $y$ は何倍？',
        explanation: '$a(2x)^2 = 4ax^2$ なので $y$ は $2^2 = 4$ 倍になる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc11',
        front: '9倍（$3^2 = 9$）', back: '$y = ax^2$ で $x$ が3倍になると $y$ は何倍？',
        explanation: '$a(3x)^2 = 9ax^2$ なので $y$ は $3^2 = 9$ 倍になる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc12',
        front: '$y = a(-x)^2 = ax^2$ で式が変わらないから', back: '放物線が $y$ 軸対称である理由を式で説明すると？',
        explanation: '$x$ を $-x$ に置き換えても同じ式になるため左右対称',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-pb-fc13',
        front: '$a = y \\div x^2$', back: '比例定数 $a$ の求め方は？',
        explanation: '$y = ax^2$ に通る点 $(x, y)$ を代入して求める',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc14',
        front: '$y = 3x^2$（$|a|$ が大きいほど細い）', back: '$y = x^2$ と $y = 3x^2$ ではどちらが細いグラフ？',
        explanation: '$|3| > |1|$ なので $y = 3x^2$ の方が急で細いグラフになる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc15',
        front: '比例は直線のグラフ、$y = ax^2$ は放物線（曲線）のグラフになる。', back: '比例 $y = ax$ と $y = ax^2$ の違いは？',
        explanation: '比例は変化の割合が一定だが、$y = ax^2$ は区間によって変わる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc16',
        front: '等しくなる（$a \\cdot x^2 = a \\cdot (-x)^2$）', back: '$y = ax^2$ のグラフで、$x$ と $-x$ の $y$ の値はどうなる？',
        explanation: '$(-x)^2 = x^2$ なので、$x$ と $-x$ で同じ $y$ になる（$y$ 軸対称）',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc17',
        front: '$y = x^2$（$y$ は $x$ の2乗に比例、$a = 1$）', back: '正方形の1辺 $x$ cm と面積 $y$ cm² の関係式は？',
        explanation: '正方形の面積 $=$ 1辺 $\\times$ 1辺 $= x^2$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc18',
        front: '$a = -\\frac{2}{3}$', back: '放物線 $y = ax^2$ が点 $(3, -6)$ を通る。$a$ は？',
        explanation: '$-6 = a \\times 9$ より $a = -\\frac{2}{3}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc19',
        front: '$y = -50$', back: '$y = -2x^2$ で $x = -5$ のとき $y$ は？',
        explanation: '$-2 \\times (-5)^2 = -2 \\times 25 = -50$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc20',
        front: '$n^2$ 倍になる', back: '$y = ax^2$ で $x$ が $n$ 倍になると $y$ は？',
        explanation: '$y = a(nx)^2 = an^2x^2$ より',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc21',
        front: '16倍（$4^2 = 16$）', back: '$y = ax^2$ で $x$ が4倍になると $y$ は何倍？',
        explanation: '$a(4x)^2 = 16ax^2$ なので $4^2 = 16$ 倍',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc22',
        front: '$y = 5x^2$', back: '$y = ax^2$ で $x = 2, y = 20$ のとき式は？',
        explanation: '$20 = a \\times 4 = 4a$ より $a = 5$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-pb-fc23',
        front: '下に開く広い放物線', back: '$y = -\\frac{1}{4}x^2$ のグラフの特徴は？',
        explanation: '$a < 0$ で下に開き、$|a| < 1$ で広い',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-pb-fc24',
        front: 'はい、$y = \\pi x^2$ で2乗に比例する', back: '半径 $x$ の円の面積 $y$ は $x$ の2乗に比例する？',
        explanation: '比例定数は $\\pi$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-pb-fc25',
        front: '$a$ の符号で開く方向、$|a|$ の大小で幅がわかる', back: '$y = ax^2$ で $a$ からわかる情報は？',
        explanation: '$a > 0$ で上開き、$a < 0$ で下開き。$|a|$ が大きいほど細い',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-pb-fc26',
        front: '通らない', back: '$y = ax^2$ のグラフは $x$ 軸と原点以外で交わる？',
        explanation: '$x = 0$ のとき $y = 0$ で原点しか通らない',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-pb-fc27',
        front: '$a = -4$', back: '$y = ax^2$ が $(-2, -16)$ を通るとき $a$ は？',
        explanation: '$-16 = a \\times (-2)^2 = 4a$ より $a = -4$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-pb-fc28',
        front: '$y = 2x^2$ の方が大きい', back: '同じ $x$ の値で $y = 2x^2$ と $y = \\frac{1}{2}x^2$ どちらが $y$ が大きい？',
        explanation: '$|2| > |\\frac{1}{2}|$ なので',
        difficulty: 'advanced',
      },
      { id: 'math-g3-qf-pb-fc29', front: '$y = ax^2$', back: '$y$ が $x$ の $2$ 乗に比例する関数の式は？', explanation: '$a$ は比例定数（$a \\neq 0$）。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc30', front: '放物線（パラボラ）', back: '$y = ax^2$ のグラフの形は？', explanation: '原点を頂点とする左右対称な曲線。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc31', front: '原点', back: '$y = ax^2$ のグラフの頂点は？', explanation: '$(0, 0)$ が頂点。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc32', front: '$y$ 軸（$x = 0$）', back: '$y = ax^2$ のグラフの対称軸は？', explanation: '左右対称。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc33', front: '上に開く', back: '$a > 0$ のとき $y = ax^2$ のグラフは上に開く？下に開く？', explanation: '$a > 0$ → 下に凸（上に開く）。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc34', front: '下に開く', back: '$a < 0$ のとき $y = ax^2$ のグラフは上に開く？下に開く？', explanation: '$a < 0$ → 上に凸（下に開く）。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc35', front: '狭くなる（急になる）', back: '$|a|$ が大きくなるとグラフはどうなる？', explanation: '$|a|$ が大きいほどグラフは細い。', difficulty: 'standard' },
      { id: 'math-g3-qf-pb-fc36', front: '$a = \\dfrac{y}{x^2}$', back: '$y = ax^2$ の比例定数 $a$ の求め方は？', explanation: '点 $(x, y)$ を代入して求める。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc37', front: '$a = 3$', back: '$(2, 12)$ を通る $y = ax^2$ の $a$ は？', explanation: '$12 = a \\times 4$、$a = 3$。', difficulty: 'standard' },
      { id: 'math-g3-qf-pb-fc38', front: '$y = 12$', back: '$y = 3x^2$ で $x = 2$ のとき $y$ は？', explanation: '$3 \\times 4 = 12$。', difficulty: 'basic' },
      { id: 'math-g3-qf-pb-fc39', front: '$y = 3x^2$ の方が急', back: '$y = 3x^2$ と $y = x^2$ のグラフではどちらが急？', explanation: '$|3| > |1|$。', difficulty: 'standard' },
      { id: 'math-g3-qf-pb-fc40', front: '$x$ が $n$ 倍になると $y$ は $n^2$ 倍', back: '$y = ax^2$ で $x$ が $2$ 倍になると $y$ は何倍？', explanation: '$a(2x)^2 = 4ax^2$ → $4$ 倍。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-qf-pb-q1',
          question: '$y = 2x^2$ で、$x = 3$ のとき $y$ の値は？',
          options: ['$6$', '$18$', '$12$', '$9$'],
          correctIndex: 1,
          explanation:
            '$y = 2x^2$ に $x = 3$ を代入すると $y = 2 \\times 3^2 = 2 \\times 9 = 18$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q2',
          question: '$y = -x^2$ のグラフはどんな形？',
          options: [
            '上に開く放物線',
            '右上がりの直線',
            '下に開く放物線',
            '原点を通る直線',
          ],
          correctIndex: 2,
          explanation:
            '$a = -1$ で $a < 0$ だから、下に開く放物線（∩字型）になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q3',
          question: '$y = x^2$ と $y = 3x^2$ のグラフを比べると？',
          options: [
            '$y = 3x^2$ の方が細い',
            '$y = 3x^2$ の方が広い',
            '同じ形',
            '向きが逆',
          ],
          correctIndex: 0,
          explanation:
            '$|a|$ が大きいほどグラフは細くなるよ。$|3| > |1|$ だから $y = 3x^2$ の方が細いグラフになるんだ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q4',
          question:
            '$y$ は $x$ の2乗に比例し、$x = 3$ のとき $y = 18$。比例定数 $a$ は？',
          options: ['$a = 1$', '$a = 6$', '$a = 3$', '$a = 2$'],
          correctIndex: 3,
          explanation:
            '$18 = a \\times 3^2 = 9a$ だから $a = 18 \\div 9 = 2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q5',
          question: '$y = ax^2$ のグラフの対称軸はどれ？',
          options: ['$y$ 軸', '原点', '$x$ 軸', '直線 $y = x$'],
          correctIndex: 0,
          explanation:
            '$y = ax^2$ のグラフは $y$ 軸（$x = 0$ の直線）について左右対称だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q6',
          question:
            '$y = ax^2$ で $x = 2$ のとき $y = 8$、$x = 4$ のとき $y$ は？',
          options: ['$16$', '$32$', '$24$', '$64$'],
          correctIndex: 1,
          explanation:
            '$8 = 4a$ より $a = 2$。$y = 2 \\times 4^2 = 2 \\times 16 = 32$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q7',
          question:
            '放物線 $y = ax^2$ が点 $(4, 8)$ を通る。$a$ の値は？',
          options: [
            '$a = \\dfrac{1}{2}$',
            '$a = 1$',
            '$a = 2$',
            '$a = 4$',
          ],
          correctIndex: 0,
          explanation:
            '$8 = a \\times 16$ だから $a = \\dfrac{8}{16} = \\dfrac{1}{2}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q8',
          question:
            '次のうち $|a|$ が最も大きく、グラフが最も細い放物線はどれ？',
          options: [
            '$y = x^2$',
            '$y = -\\dfrac{1}{3}x^2$',
            '$y = 2x^2$',
            '$y = -4x^2$',
          ],
          correctIndex: 3,
          explanation:
            '$|a|$ の値は順に $1, 4, 2, \\dfrac{1}{3}$。$|-4| = 4$ が最大なので $y = -4x^2$ が最も細いよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q9',
          question:
            '$y = -2x^2$ で $x = -3$ のとき $y$ の値は？',
          options: ['$18$', '$-12$', '$12$', '$-18$'],
          correctIndex: 3,
          explanation:
            '$y = -2 \\times (-3)^2 = -2 \\times 9 = -18$。$(-3)^2 = 9$ だから符号に注意だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q10',
          question:
            '$y = \\dfrac{1}{2}x^2$ と $y = 2x^2$ を比べると、$y = \\dfrac{1}{2}x^2$ のグラフは？',
          options: [
            'より細い',
            '同じ幅',
            'より広い',
            '下に開く',
          ],
          correctIndex: 2,
          explanation:
            '$|\\dfrac{1}{2}| < |2|$ だから $y = \\dfrac{1}{2}x^2$ の方がグラフは広く（ゆるやか）なるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-pb-q11',
          question:
            '$y = ax^2$ のグラフが点 $(-2, -12)$ を通る。$a$ の値は？',
          options: ['$a = -2$', '$a = 3$', '$a = -3$', '$a = 6$'],
          correctIndex: 2,
          explanation:
            '$-12 = a \\times (-2)^2 = 4a$ だから $a = -3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q12',
          question:
            '$y = ax^2$ で $x$ が $n$ 倍になると $y$ は何倍になる？',
          options: ['$n^2$ 倍', '$2n$ 倍', '$n$ 倍', '$2^n$ 倍'],
          correctIndex: 0,
          explanation:
            '$y = a(nx)^2 = an^2x^2$ となり、$y$ は $n^2$ 倍になるんだ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q13',
          question: '$y = -2x^2$ で $x = -5$ のとき $y$ は？',
          options: ['$50$', '$-50$', '$-20$', '$20$'],
          correctIndex: 1,
          explanation:
            '$y = -2 \\times (-5)^2 = -2 \\times 25 = -50$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q14',
          question: '$y = ax^2$ が $(2, 20)$ を通る。$a$ は？',
          options: ['$a = 10$', '$a = 4$', '$a = 2$', '$a = 5$'],
          correctIndex: 3,
          explanation:
            '$20 = a \\times 4$ より $a = 5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q15',
          question: '$y = ax^2$ で $x$ が4倍になると $y$ は何倍？',
          options: ['$4$ 倍', '$8$ 倍', '$2$ 倍', '$16$ 倍'],
          correctIndex: 3,
          explanation:
            '$y = a(4x)^2 = 16ax^2$。$4^2 = 16$ 倍だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q16',
          question: '$y = -\\frac{1}{4}x^2$ のグラフの形は？',
          options: [
            '上に開く細い放物線',
            '下に開く広い放物線',
            '上に開く広い放物線',
            '下に開く細い放物線',
          ],
          correctIndex: 1,
          explanation:
            '$a < 0$ で下に開く。$|a| = \\frac{1}{4} < 1$ で広い放物線だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q17',
          question: '$y = ax^2$ が $(-2, -16)$ を通る。$a$ は？',
          options: ['$a = 4$', '$a = 8$', '$a = -8$', '$a = -4$'],
          correctIndex: 3,
          explanation:
            '$-16 = a \\times (-2)^2 = 4a$ より $a = -4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q18',
          question: '$y = ax^2$ のグラフが原点以外で $x$ 軸と交わることはある？',
          options: [
            'ある',
            'ない',
            '$a > 0$ のときだけある',
            '$a < 0$ のときだけある',
          ],
          correctIndex: 1,
          explanation:
            '$y = ax^2$ は $x = 0$ のとき $y = 0$。原点以外では $y \\neq 0$（$a \\neq 0$）なので交わらないよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q19',
          question: '同じ $x$ の値のとき、$y = 2x^2$ と $y = \\frac{1}{2}x^2$ はどちらが $y$ の値が大きい？（$x \\neq 0$）',
          options: [
            '$y = \\frac{1}{2}x^2$',
            '同じ',
            '$y = 2x^2$',
            '比べられない',
          ],
          correctIndex: 2,
          explanation:
            '$|a|$ が大きい方が同じ $x$ で $|y|$ も大きい。$a > 0$ なので $y = 2x^2$ の方が大きいよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q20',
          question: '$y = 5x^2$ で $x = -2$ のとき $y$ は？',
          options: ['$-20$', '$-10$', '$10$', '$20$'],
          correctIndex: 3,
          explanation:
            '$y = 5 \\times (-2)^2 = 5 \\times 4 = 20$。$(-2)^2 = 4$ は正だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q21',
          question: '次のうち、$y$ が $x$ の2乗に比例するものは？',
          options: [
            '1辺 $x$ cmの正方形の周の長さ $y$ cm',
            '半径 $x$ cmの円の面積 $y$ cm²',
            '底辺 $x$ cm、高さ5cmの三角形の面積 $y$ cm²',
            '1個 $x$ 円の品物を3個買ったときの代金 $y$ 円',
          ],
          correctIndex: 1,
          explanation:
            '円の面積 $y = \\pi x^2$ は $x$ の2乗に比例するよ。他は1次（比例）の関係。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q22',
          question: '$y = ax^2$ が点 $(6, 12)$ を通る。$a$ は？',
          options: [
            '$a = \\dfrac{1}{3}$',
            '$a = 2$',
            '$a = \\dfrac{1}{2}$',
            '$a = 3$',
          ],
          correctIndex: 0,
          explanation:
            '$12 = a \\times 36$ より $a = \\frac{12}{36} = \\frac{1}{3}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-pb-q23',
          question: '$y = -3x^2$ のグラフについて正しいのは？',
          options: [
            '上に開く細い放物線',
            '下に開く広い放物線',
            '下に開く細い放物線',
            '上に開く広い放物線',
          ],
          correctIndex: 2,
          explanation:
            '$a = -3 < 0$ で下に開く。$|a| = 3 > 1$ で細い放物線だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-pb-q24',
          question: '$y = ax^2$ で $x = -3$ のとき $y = 27$。$a$ は？',
          options: ['$a = 3$', '$a = -3$', '$a = 9$', '$a = -9$'],
          correctIndex: 0,
          explanation:
            '$27 = a \\times (-3)^2 = 9a$ より $a = 3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-pb-q25',
          question: '$y = ax^2$ のグラフの頂点はどこ？',
          options: ['$(0, 0)$', '$(a, 0)$', '$(0, a)$', '$(1, a)$'],
          correctIndex: 0,
          explanation:
            '$y = ax^2$ のグラフの頂点は常に原点 $(0, 0)$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-pb-q26',
          question: '$y = \\frac{1}{3}x^2$ で $x = 6$ のとき $y$ は？',
          options: ['$2$', '$6$', '$12$', '$18$'],
          correctIndex: 2,
          explanation:
            '$y = \\frac{1}{3} \\times 36 = 12$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-pb-q27',
          question: '$y = 4x^2$ と $y = \\frac{1}{4}x^2$ のグラフを比べると？',
          options: [
            '$y = 4x^2$ の方が広い',
            '同じ形',
            '$y = 4x^2$ の方が細い',
            '向きが逆',
          ],
          correctIndex: 2,
          explanation:
            '$|4| > |\\frac{1}{4}|$ だから $y = 4x^2$ の方が細いグラフになるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-pb-q28',
          question: '$y = ax^2$ で $x = 1$ のとき $y = a$。これは何を意味する？',
          options: [
            '$a$ はグラフの傾きである',
            '$x = 1$ のときの $y$ の値が比例定数と等しい',
            '$a$ は $y$ 軸との交点',
            '$a$ は頂点の $y$ 座標',
          ],
          correctIndex: 1,
          explanation:
            '$y = a \\times 1^2 = a$。$x = 1$ を代入すると $y = a$ なので、比例定数が直接わかるよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-qf-pb-ex1',
          question:
            '$y$ は $x$ の2乗に比例し、$x = 2$ のとき $y = 12$ である。$y$ を $x$ の式で表そう。',
          steps: [
            {
              title: 'Step 1: $y = ax^2$ とおく',
              content:
                '$y$ は $x$ の2乗に比例するから、$y = ax^2$ の形で表せるよ。$a$ の値を求めよう。',
              highlight: '$y = ax^2$',
            },
            {
              title: 'Step 2: $x = 2, y = 12$ を代入する',
              content:
                '$12 = a \\times 2^2$ → $12 = 4a$ → $a = 3$ だよ。',
              highlight: '$a = 3$',
            },
          ],
          answer: '$y = 3x^2$',
        },
        {
          id: 'math-g3-qf-pb-ex2',
          question:
            '$y = -2x^2$ について、$x = -3$ のときの $y$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = -3$ を代入する',
              content:
                '$y = -2 \\times (-3)^2$ と計算するよ。$(-3)^2$ を先に求めよう。',
              highlight: '$(-3)^2 = 9$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$y = -2 \\times 9 = -18$。マイナスの数を2乗するとプラスになることに注意だよ。',
              highlight: '$y = -18$',
            },
          ],
          answer: '$y = -18$',
        },
        {
          id: 'math-g3-qf-pb-ex3',
          question:
            '$y = \\dfrac{1}{2}x^2$ について、$x = -4, -2, 0, 2, 4$ のときの値の表を作り、グラフの特徴を答えよう。',
          steps: [
            {
              title: 'Step 1: 各 $x$ の値を代入する',
              content:
                '$x = -4$ → $y = \\dfrac{1}{2} \\times 16 = 8$、$x = -2$ → $y = \\dfrac{1}{2} \\times 4 = 2$、$x = 0$ → $y = 0$、$x = 2$ → $y = 2$、$x = 4$ → $y = 8$',
              highlight: '左右対称になっている！',
            },
            {
              title: 'Step 2: グラフの特徴をまとめる',
              content:
                '$a = \\dfrac{1}{2} > 0$ だから上に開く放物線。頂点は原点、対称軸は $y$ 軸。$|a| = \\dfrac{1}{2}$ は小さいので、$y = x^2$ より広い放物線だよ。',
              highlight: '上に開く広い放物線',
            },
          ],
          answer:
            '上に開く放物線で、頂点は原点、対称軸は $y$ 軸。$y = x^2$ より広い形。',
        },
        {
          id: 'math-g3-qf-pb-ex4',
          question:
            '放物線 $y = ax^2$ が点 $(3, -6)$ を通る。この放物線の式を求め、グラフの特徴を答えよう。',
          steps: [
            {
              title: 'Step 1: 点の座標を代入する',
              content:
                '$y = ax^2$ に $x = 3, y = -6$ を代入すると $-6 = a \\times 9$ だよ。',
              highlight: '$-6 = 9a$',
            },
            {
              title: 'Step 2: $a$ を求める',
              content:
                '$a = -\\dfrac{6}{9} = -\\dfrac{2}{3}$。$a < 0$ だから下に開く放物線だね。',
              highlight: '$a = -\\dfrac{2}{3}$',
            },
            {
              title: 'Step 3: グラフの特徴',
              content:
                '$|a| = \\dfrac{2}{3} < 1$ なので $y = -x^2$ より広い放物線。下に開き、頂点は原点、対称軸は $y$ 軸。',
              highlight: '下に開く広い放物線',
            },
          ],
          answer:
            '$y = -\\dfrac{2}{3}x^2$（下に開く広い放物線、頂点は原点）',
        },
        {
          id: 'math-g3-qf-pb-ex5',
          question:
            '$y = x^2$, $y = 3x^2$, $y = \\dfrac{1}{3}x^2$ の3つのグラフの開き方を $|a|$ の大小から比較しよう。',
          steps: [
            {
              title: 'Step 1: $|a|$ の値を比べる',
              content:
                '$y = x^2$ → $|a| = 1$、$y = 3x^2$ → $|a| = 3$、$y = \\dfrac{1}{3}x^2$ → $|a| = \\dfrac{1}{3}$',
              highlight:
                '$\\dfrac{1}{3} < 1 < 3$',
            },
            {
              title: 'Step 2: グラフの幅を判定する',
              content:
                '$|a|$ が小さいほど広い → $y = \\dfrac{1}{3}x^2$ が最も広く、$y = 3x^2$ が最も細い。3つとも $a > 0$ なので上に開く放物線だよ。',
              highlight:
                '広い順: $y = \\dfrac{1}{3}x^2$, $y = x^2$, $y = 3x^2$',
            },
          ],
          answer:
            '広い順に $y = \\dfrac{1}{3}x^2$, $y = x^2$, $y = 3x^2$。$|a|$ が大きいほど細い。',
        },
      ],
    },
    chatId: 'math-g3-quad-func-parabola',
  },
};
