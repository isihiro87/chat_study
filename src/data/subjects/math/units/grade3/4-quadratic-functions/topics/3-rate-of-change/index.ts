import type { Topic } from '../../../../../../../../data/types';

export const rateOfChange: Topic = {
  id: 'math-g3-rate-of-change',
  eraId: 'math-g3-quadratic-func',
  name: '変化の割合',
  subtitle: '一次関数との大きな違い',
  icon: '📊',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '変化の割合の計算',
          content:
            '変化の割合は「y の増加量 ÷ x の増加量」で求めるよ。y = ax² では、x が p から q まで変化するとき、変化の割合 = a(p + q) という公式が成り立つんだ。一次関数では変化の割合は常に a（傾き）で一定だったけど、y = ax² では区間によって変わるのが大きな違い！',
          image: {
            src: '/images/math/grade3/rate-of-change.svg',
            alt: '変化の割合',
            caption: '区間によって傾きが変わる',
          },
          keyPoints: [
            '変化の割合 = y の増加量 ÷ x の増加量',
            'y = ax² では変化の割合 = a(p + q)（x が p から q に変化）',
            '区間によって変化の割合が異なる',
          ],
        },
        {
          title: '公式 a(p + q) の導出',
          content:
            'y = ax² で x が p から q に変化するとき、y の増加量 = aq² − ap² = a(q² − p²) = a(q + p)(q − p)。x の増加量 = q − p。変化の割合 = a(q + p)(q − p) ÷ (q − p) = a(p + q)。p と q を足して a をかけるだけで求められるよ！',
          keyPoints: [
            'aq² − ap² = a(q + p)(q − p) と因数分解する',
            '(q − p) で約分して a(p + q) が得られる',
            '公式を使えば y の値を代入しなくてOK',
          ],
        },
        {
          title: '平均の速さ',
          content:
            'ボールが斜面を転がるとき、x 秒後の移動距離が y = ax²（cm）で表されることがあるよ。このとき、ある区間の平均の速さ = 移動距離 ÷ かかった時間 = 変化の割合そのものなんだ。公式 a(p + q) を使えばすぐ求められる！',
          keyPoints: [
            '平均の速さ = 移動距離 ÷ 時間 = 変化の割合',
            'y = ax² のとき平均の速さ = a(p + q)',
            '時間が経つほど平均の速さが大きくなる（加速する）',
          ],
        },
        {
          title: '一次関数との比較',
          content:
            '一次関数 y = ax + b では変化の割合は常に a で一定だったね。でも y = ax² では変化の割合が区間ごとに変わるんだ。これは放物線が曲線だから、場所によって傾きが違うことを意味しているよ。',
          keyPoints: [
            '一次関数: 変化の割合 = a（常に一定）→ グラフは直線',
            'y = ax²: 変化の割合は区間で変わる → グラフは曲線',
            '一次関数は一定の速さで増減、y = ax² は加速・減速する',
          ],
        },
        {
          title: '放物線と直線の交点・面積',
          content:
            'y = ax² と y = mx + n の交点は、ax² = mx + n を解けば求められるよ。二次方程式を因数分解して x の値を出し、y の値を求めればOK。原点 O と交点 A, B で△OAB を作るとき、直線の y 切片で三角形を分割すると面積が求めやすいよ。',
          keyPoints: [
            '交点: ax² = mx + n を二次方程式として解く',
            '△OAB の面積: y 切片で2つの三角形に分割',
            '底辺を y 軸上にとり、高さを各点の |x| にする',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qf-rc-fc1',
        front: '変化の割合',
        back: 'y の増加量 ÷ x の増加量',
        explanation: '一次関数でも y = ax² でも同じ定義。ただし y = ax² では区間によって値が変わる。',
      },
      {
        id: 'math-g3-qf-rc-fc2',
        front: 'y の増加量',
        back: '変化後の y の値 − 変化前の y の値',
        explanation: 'y = x² で x が 1→3 のとき、y の増加量 = 9 − 1 = 8。',
      },
      {
        id: 'math-g3-qf-rc-fc3',
        front: 'x の増加量',
        back: '変化後の x の値 − 変化前の x の値',
        explanation: 'x が 1→3 のとき、x の増加量 = 3 − 1 = 2。',
      },
      {
        id: 'math-g3-qf-rc-fc4',
        front: '公式 a(p + q)',
        back: 'y = ax² で x が p から q に変化するときの変化の割合',
        explanation: 'aq² − ap² = a(q+p)(q−p) を (q−p) で割って導出する。',
      },
      {
        id: 'math-g3-qf-rc-fc5',
        front: 'y = x² で x が 1→3 のとき変化の割合は？',
        back: '1×(1 + 3) = 4',
        explanation: 'y の増加量 8 ÷ x の増加量 2 = 4 でも同じ結果。',
      },
      {
        id: 'math-g3-qf-rc-fc6',
        front: 'y = 2x² で x が −1→4 のとき変化の割合は？',
        back: '2×(−1 + 4) = 6',
        explanation: '公式に代入するだけで素早く求められる。',
      },
      {
        id: 'math-g3-qf-rc-fc7',
        front: '一次関数の変化の割合の特徴',
        back: '常に一定（= 傾き a）',
        explanation: 'グラフが直線だから、どの区間でも傾きが同じ。',
      },
      {
        id: 'math-g3-qf-rc-fc8',
        front: 'y = ax² の変化の割合の特徴',
        back: '区間によって変わる',
        explanation: 'グラフが曲線（放物線）だから、場所によって傾きが異なる。',
      },
      {
        id: 'math-g3-qf-rc-fc9',
        front: '平均の速さの公式',
        back: '移動距離 ÷ かかった時間',
        explanation: 'y = ax² のとき、平均の速さ = 変化の割合 = a(p + q)。',
      },
      {
        id: 'math-g3-qf-rc-fc10',
        front: 'y = 2x² で 2秒後→5秒後の平均の速さは？',
        back: '2×(2 + 5) = 14 cm/秒',
        explanation: '移動距離 42cm ÷ 3秒 = 14cm/秒 でも求められる。',
      },
      {
        id: 'math-g3-qf-rc-fc11',
        front: '斜面を転がるボールで時間が経つと速さは？',
        back: 'だんだん速くなる（加速する）',
        explanation: 'y = ax² の変化の割合は x が大きくなるほど大きくなるため。',
      },
      {
        id: 'math-g3-qf-rc-fc12',
        front: '放物線と直線の交点の求め方',
        back: 'ax² = mx + n を二次方程式として解く',
        explanation: '因数分解して x の値を求め、y に代入する。',
      },
      {
        id: 'math-g3-qf-rc-fc13',
        front: 'y = x² と y = x + 2 の交点は？',
        back: '(−1, 1) と (2, 4)',
        explanation: 'x² − x − 2 = 0 → (x−2)(x+1) = 0 で x = 2, −1。',
      },
      {
        id: 'math-g3-qf-rc-fc14',
        front: '△OABの面積（y切片分割法）',
        back: 'y切片Cで△OACと△OCBに分け、それぞれの面積を足す',
        explanation: '底辺をOC（y軸上）、高さを各点の|x座標|にする。',
      },
      {
        id: 'math-g3-qf-rc-fc15',
        front: '変化の割合が負になるのはどんなとき？',
        back: 'a > 0 で p + q < 0、または a < 0 で p + q > 0 のとき',
        explanation: 'a と (p+q) の符号が異なると変化の割合は負になる。',
      },
      {
        id: 'math-g3-qf-rc-fc16',
        front: '変化の割合から a を逆算する方法',
        back: '変化の割合 = a(p+q) を a について解く',
        explanation: '例: 変化の割合 12、p=1、q=3 なら a = 12÷4 = 3。',
      },
      {
        id: 'math-g3-qf-rc-fc17',
        front: '一次関数のグラフの形',
        back: '直線',
        explanation: '変化の割合が一定だから傾きが変わらない。',
      },
      {
        id: 'math-g3-qf-rc-fc18',
        front: 'y = ax² のグラフの形',
        back: '放物線（曲線）',
        explanation: '変化の割合が区間ごとに変わるから傾きが一定でない。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-rate-of-change-q1',
          question: '$y = x^2$ で $x$ が $1$ から $3$ に変化するとき、変化の割合は？',
          options: ['$2$', '$8$', '$4$', '$3$'],
          correctIndex: 2,
          explanation:
            '変化の割合 $= a(p + q) = 1 \\times (1 + 3) = 4$。または $y$ の増加量 $9-1=8$、$x$ の増加量 $3-1=2$ で $8 \\div 2 = 4$ だよ。',
        },
        {
          id: 'math-g3-rate-of-change-q2',
          question: '$y = 2x^2$ で $x$ が $-1$ から $3$ に変化するとき、変化の割合は？',
          options: ['$2$', '$4$', '$8$', '$6$'],
          correctIndex: 1,
          explanation:
            '変化の割合 $= a(p + q) = 2 \\times (-1 + 3) = 2 \\times 2 = 4$ だよ。',
        },
        {
          id: 'math-g3-rate-of-change-q3',
          question: '$y = ax^2$ の変化の割合と一次関数の変化の割合の違いは？',
          options: [
            'どちらも一定',
            '一次関数は区間によって変わる',
            'どちらも区間によって変わる',
            '$y = ax^2$ は区間によって変わる',
          ],
          correctIndex: 3,
          explanation:
            '一次関数の変化の割合は常に一定（= 傾き $a$）だけど、$y = ax^2$ の変化の割合は区間によって変わるよ。',
        },
        {
          id: 'math-g3-qf-rc-q4',
          question: '$y = -3x^2$ で $x$ が $-2$ から $4$ に変化するとき、変化の割合は？',
          options: ['$-6$', '$6$', '$18$', '$-18$'],
          correctIndex: 0,
          explanation:
            '変化の割合 $= a(p + q) = -3 \\times (-2 + 4) = -3 \\times 2 = -6$ だよ。',
        },
        {
          id: 'math-g3-qf-rc-q5',
          question: 'ボールが斜面を転がり $y = 2x^2$（cm）で表されるとき、$1$ 秒後から $4$ 秒後までの平均の速さは？',
          options: ['$6$ cm/秒', '$10$ cm/秒', '$8$ cm/秒', '$12$ cm/秒'],
          correctIndex: 1,
          explanation:
            '平均の速さ $= a(p + q) = 2(1 + 4) = 10$ cm/秒。移動距離 $32-2=30$、時間 $3$ 秒で $30 \\div 3 = 10$ でも同じだよ。',
        },
        {
          id: 'math-g3-qf-rc-q6',
          question: '$y = ax^2$ で $x$ が $1$ から $5$ に変化するとき、変化の割合が $12$ だった。$a$ の値は？',
          options: ['$1$', '$3$', '$2$', '$4$'],
          correctIndex: 2,
          explanation:
            '$a(1 + 5) = 6a = 12$ より $a = 2$ だよ。',
        },
        {
          id: 'math-g3-qf-rc-q7',
          question: '$y = x^2$ と $y = x + 2$ の交点の $x$ 座標は？',
          options: [
            '$x = -1, 2$',
            '$x = 1, 2$',
            '$x = -2, 1$',
            '$x = -2, 3$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2 = x + 2$ → $x^2 - x - 2 = 0$ → $(x - 2)(x + 1) = 0$ → $x = 2, -1$ だよ。',
        },
        {
          id: 'math-g3-qf-rc-q8',
          question: '$y = x^2$ 上の $2$ 点 $A(-1, 1)$、$B(2, 4)$ を通る直線の傾きは？',
          options: ['$\\dfrac{3}{2}$', '$2$', '$3$', '$1$'],
          correctIndex: 3,
          explanation:
            '傾き $= (4 - 1) \\div (2 - (-1)) = 3 \\div 3 = 1$ だよ。変化の割合 $= 1 \\times (-1 + 2) = 1$ と一致するね。',
        },
        {
          id: 'math-g3-qf-rc-q9',
          question: '$y = x^2$ と $y = 2x + 3$ の交点を $A(-1, 1)$、$B(3, 9)$、原点を $O$ とする。$\\triangle OAB$ の面積は？',
          options: ['$3$', '$12$', '$9$', '$6$'],
          correctIndex: 3,
          explanation:
            'y切片 $C(0, 3)$ で分割。$\\triangle OAC = \\dfrac{1}{2} \\times 3 \\times 1 = \\dfrac{3}{2}$、$\\triangle OCB = \\dfrac{1}{2} \\times 3 \\times 3 = \\dfrac{9}{2}$。合計 $= \\dfrac{3}{2} + \\dfrac{9}{2} = 6$ だよ。',
        },
        {
          id: 'math-g3-qf-rc-q10',
          question: '$y = 3x^2$ で $2$ 秒後から $5$ 秒後までの平均の速さは？',
          options: ['$15$ cm/秒', '$18$ cm/秒', '$21$ cm/秒', '$24$ cm/秒'],
          correctIndex: 2,
          explanation:
            '平均の速さ $= a(p + q) = 3(2 + 5) = 21$ cm/秒だよ。',
        },
        {
          id: 'math-g3-qf-rc-q11',
          question: '一次関数 $y = 5x + 1$ と同じ変化の割合になる $y = x^2$ の区間は？（$x$ が $a$ から $a+2$）',
          options: [
            '$x = \\dfrac{3}{2}$ から $\\dfrac{7}{2}$',
            '$x = 1$ から $3$',
            '$x = 2$ から $4$',
            '$x = 0$ から $2$',
          ],
          correctIndex: 0,
          explanation:
            '$1 \\times (a + a + 2) = 2a + 2 = 5$ より $a = \\dfrac{3}{2}$。区間は $\\dfrac{3}{2}$ から $\\dfrac{7}{2}$ だよ。',
        },
        {
          id: 'math-g3-qf-rc-q12',
          question: '$y = x^2$ と $y = 3x$ の交点の座標は？',
          options: [
            '$(0, 0)$ と $(3, 6)$',
            '$(0, 0)$ と $(3, 9)$',
            '$(1, 1)$ と $(3, 9)$',
            '$(0, 0)$ と $(-3, 9)$',
          ],
          correctIndex: 1,
          explanation:
            '$x^2 = 3x$ → $x(x - 3) = 0$ → $x = 0, 3$。$y = 0, 9$ なので $(0, 0)$ と $(3, 9)$ だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-rate-of-change-ex1',
          question: '$y = 3x^2$ で $x$ が $2$ から $5$ に変化するとき、変化の割合を求めよう。',
          steps: [
            {
              title: 'Step 1: 公式を使おう',
              content:
                '変化の割合 $= a(p + q)$。$a = 3$、$p = 2$、$q = 5$ を代入するよ。',
              highlight: '$a(p + q) = 3(2 + 5)$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$3 \\times 7 = 21$。変化の割合は $21$ だよ。',
              highlight: '変化の割合 $= 21$',
            },
          ],
          answer: '変化の割合 $= 21$',
        },
        {
          id: 'math-g3-rate-of-change-ex2',
          question: '$y = -x^2$ で $x$ が $-3$ から $1$ に変化するとき、変化の割合を求めよう。',
          steps: [
            {
              title: 'Step 1: 公式を使おう',
              content:
                '変化の割合 $= a(p + q)$。$a = -1$、$p = -3$、$q = 1$ を代入するよ。',
              highlight: '$a(p + q) = -1(-3 + 1)$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$-1 \\times (-2) = 2$。変化の割合は $2$ だよ。',
              highlight: '変化の割合 $= 2$',
            },
          ],
          answer: '変化の割合 $= 2$',
        },
        {
          id: 'math-g3-qf-rc-ex3',
          question: 'ボールが斜面を転がり、$x$ 秒後の移動距離が $y = 2x^2$（cm）で表される。$2$ 秒後から $5$ 秒後までの平均の速さを求めよう。',
          steps: [
            {
              title: 'Step 1: 移動距離を求める',
              content:
                '$2$ 秒後: $y = 2 \\times 4 = 8$ cm。$5$ 秒後: $y = 2 \\times 25 = 50$ cm。移動距離 $= 50 - 8 = 42$ cm。',
              highlight: '移動距離 $= 42$ cm',
            },
            {
              title: 'Step 2: 平均の速さを求める',
              content:
                '平均の速さ $= 42 \\div (5 - 2) = 42 \\div 3 = 14$ cm/秒。公式 $a(p+q) = 2(2+5) = 14$ でも同じ結果だよ！',
              highlight: '平均の速さ $= 14$ cm/秒',
            },
          ],
          answer: '平均の速さ $= 14$ cm/秒',
        },
        {
          id: 'math-g3-qf-rc-ex4',
          question: '$y = x^2$ と $y = x + 2$ の交点の座標を求めよう。',
          steps: [
            {
              title: 'Step 1: 連立方程式を立てる',
              content:
                '$y = x^2$ と $y = x + 2$ を等しくおいて $x^2 = x + 2$ とするよ。',
              highlight: '$x^2 = x + 2$',
            },
            {
              title: 'Step 2: 二次方程式を解く',
              content:
                '$x^2 - x - 2 = 0$ → $(x - 2)(x + 1) = 0$ → $x = 2, -1$。',
              highlight: '$x = 2, -1$',
            },
            {
              title: 'Step 3: y の値を求める',
              content:
                '$x = 2$ のとき $y = 2 + 2 = 4$。$x = -1$ のとき $y = -1 + 2 = 1$。',
              highlight: '交点 $(-1, 1)$, $(2, 4)$',
            },
          ],
          answer: '交点 $(-1, 1)$, $(2, 4)$',
        },
        {
          id: 'math-g3-qf-rc-ex5',
          question: '$y = x^2$ と $y = 2x + 3$ の交点を $A(-1, 1)$, $B(3, 9)$ とし、原点 $O$ との $\\triangle OAB$ の面積を求めよう。',
          steps: [
            {
              title: 'Step 1: y切片を確認',
              content:
                '直線 $y = 2x + 3$ の y 切片は $C(0, 3)$。ここで三角形を2つに分けるよ。',
              highlight: 'y切片 $C(0, 3)$',
            },
            {
              title: 'Step 2: △OAC の面積',
              content:
                '底辺 $OC = 3$（y 軸上）、高さ $= |{-1}| = 1$（A の $x$ 座標の絶対値）。面積 $= \\dfrac{1}{2} \\times 3 \\times 1 = \\dfrac{3}{2}$。',
              highlight: '$\\triangle OAC = \\dfrac{3}{2}$',
            },
            {
              title: 'Step 3: △OCB の面積',
              content:
                '底辺 $OC = 3$、高さ $= 3$（B の $x$ 座標）。面積 $= \\dfrac{1}{2} \\times 3 \\times 3 = \\dfrac{9}{2}$。',
              highlight: '$\\triangle OCB = \\dfrac{9}{2}$',
            },
            {
              title: 'Step 4: 合計',
              content:
                '$\\dfrac{3}{2} + \\dfrac{9}{2} = \\dfrac{12}{2} = 6$。',
              highlight: '$\\triangle OAB = 6$',
            },
          ],
          answer: '$\\triangle OAB = 6$',
        },
        {
          id: 'math-g3-qf-rc-ex6',
          question: '$y = ax^2$ で $x$ が $-1$ から $5$ に変化するとき、変化の割合が $12$ だった。$a$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: 公式に当てはめる',
              content:
                '変化の割合 $= a(p + q) = a(-1 + 5) = 4a$。',
              highlight: '$4a = 12$',
            },
            {
              title: 'Step 2: a を求める',
              content:
                '$a = 12 \\div 4 = 3$。関数は $y = 3x^2$ だよ。',
              highlight: '$a = 3$',
            },
          ],
          answer: '$a = 3$',
        },
      ],
    },
    chatId: 'math-g3-rate-of-change',
  },
};
