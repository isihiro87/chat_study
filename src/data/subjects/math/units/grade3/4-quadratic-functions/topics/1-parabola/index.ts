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
        front: '$y = ax^2$ の関係を何というか？',
        back: '$y$ は $x$ の2乗に比例する（$a$ は比例定数、$a \\neq 0$）',
      },
      {
        id: 'math-g3-qf-pb-fc2',
        front: '$y = ax^2$ のグラフの名前は？',
        back: '放物線（ほうぶつせん）',
      },
      {
        id: 'math-g3-qf-pb-fc3',
        front: '$y = ax^2$ の $a$ のことを何という？',
        back: '比例定数（ひれいていすう）',
      },
      {
        id: 'math-g3-qf-pb-fc4',
        front: '$y = ax^2$ のグラフの対称軸は？',
        back: '$y$ 軸（$x = 0$ の直線）',
      },
      {
        id: 'math-g3-qf-pb-fc5',
        front: '$y = ax^2$ のグラフの頂点は？',
        back: '原点 $(0, 0)$',
      },
      {
        id: 'math-g3-qf-pb-fc6',
        front: '$a > 0$ のとき、放物線はどちらに開く？',
        back: '上に開く（U字型）',
      },
      {
        id: 'math-g3-qf-pb-fc7',
        front: '$a < 0$ のとき、放物線はどちらに開く？',
        back: '下に開く（$\\cap$字型）',
      },
      {
        id: 'math-g3-qf-pb-fc8',
        front: '$|a|$ が大きいとき、放物線の開き方はどうなる？',
        back: '細くなる（急になる）',
      },
      {
        id: 'math-g3-qf-pb-fc9',
        front: '$|a|$ が小さいとき、放物線の開き方はどうなる？',
        back: '広くなる（ゆるやかになる）',
      },
      {
        id: 'math-g3-qf-pb-fc10',
        front: '$y = ax^2$ で $x$ が2倍になると $y$ は何倍？',
        back: '4倍（$2^2 = 4$）',
      },
      {
        id: 'math-g3-qf-pb-fc11',
        front: '$y = ax^2$ で $x$ が3倍になると $y$ は何倍？',
        back: '9倍（$3^2 = 9$）',
      },
      {
        id: 'math-g3-qf-pb-fc12',
        front: '放物線が $y$ 軸対称である理由を式で説明すると？',
        back: '$y = a(-x)^2 = ax^2$ となり、$x$ を $-x$ に置き換えても式が変わらないから。',
      },
      {
        id: 'math-g3-qf-pb-fc13',
        front: '比例定数 $a$ の求め方は？',
        back: '$y = ax^2$ に通る点 $(x, y)$ を代入して $a = y \\div x^2$ で求める。',
      },
      {
        id: 'math-g3-qf-pb-fc14',
        front: '$y = x^2$ と $y = 3x^2$ ではどちらが細いグラフ？',
        back: '$y = 3x^2$（$|a|$ が大きいほど細い）',
      },
      {
        id: 'math-g3-qf-pb-fc15',
        front: '比例 $y = ax$ と $y = ax^2$ の違いは？',
        back: '比例は直線のグラフ、$y = ax^2$ は放物線（曲線）のグラフになる。',
      },
      {
        id: 'math-g3-qf-pb-fc16',
        front: '$y = ax^2$ のグラフで、$x$ と $-x$ の $y$ の値はどうなる？',
        back: '等しくなる（$a \\cdot x^2 = a \\cdot (-x)^2$）',
      },
      {
        id: 'math-g3-qf-pb-fc17',
        front: '正方形の1辺 $x$ cm と面積 $y$ cm² の関係式は？',
        back: '$y = x^2$（$y$ は $x$ の2乗に比例、$a = 1$）',
      },
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
        },
        {
          id: 'math-g3-qf-pb-q4',
          question:
            '$y$ は $x$ の2乗に比例し、$x = 3$ のとき $y = 18$。比例定数 $a$ は？',
          options: ['$a = 1$', '$a = 6$', '$a = 3$', '$a = 2$'],
          correctIndex: 3,
          explanation:
            '$18 = a \\times 3^2 = 9a$ だから $a = 18 \\div 9 = 2$ だよ。',
        },
        {
          id: 'math-g3-qf-pb-q5',
          question: '$y = ax^2$ のグラフの対称軸はどれ？',
          options: ['$x$ 軸', '原点', '$y$ 軸', '直線 $y = x$'],
          correctIndex: 2,
          explanation:
            '$y = ax^2$ のグラフは $y$ 軸（$x = 0$ の直線）について左右対称だよ。',
        },
        {
          id: 'math-g3-qf-pb-q6',
          question:
            '$y = ax^2$ で $x = 2$ のとき $y = 8$、$x = 4$ のとき $y$ は？',
          options: ['$16$', '$32$', '$24$', '$64$'],
          correctIndex: 1,
          explanation:
            '$8 = 4a$ より $a = 2$。$y = 2 \\times 4^2 = 2 \\times 16 = 32$ だよ。',
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
        },
        {
          id: 'math-g3-qf-pb-q9',
          question:
            '$y = -2x^2$ で $x = -3$ のとき $y$ の値は？',
          options: ['$18$', '$-12$', '$12$', '$-18$'],
          correctIndex: 3,
          explanation:
            '$y = -2 \\times (-3)^2 = -2 \\times 9 = -18$。$(-3)^2 = 9$ だから符号に注意だよ。',
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
        },
        {
          id: 'math-g3-qf-pb-q11',
          question:
            '$y = ax^2$ のグラフが点 $(-2, -12)$ を通る。$a$ の値は？',
          options: ['$a = -2$', '$a = -3$', '$a = 3$', '$a = 6$'],
          correctIndex: 1,
          explanation:
            '$-12 = a \\times (-2)^2 = 4a$ だから $a = -3$ だよ。',
        },
        {
          id: 'math-g3-qf-pb-q12',
          question:
            '$y = ax^2$ で $x$ が $n$ 倍になると $y$ は何倍になる？',
          options: ['$n^2$ 倍', '$2n$ 倍', '$n$ 倍', '$2^n$ 倍'],
          correctIndex: 0,
          explanation:
            '$y = a(nx)^2 = an^2x^2$ となり、$y$ は $n^2$ 倍になるんだ。',
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
