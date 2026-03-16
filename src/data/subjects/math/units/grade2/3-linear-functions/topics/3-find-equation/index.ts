import type { Topic } from '../../../../../../../../data/types';

export const findLinearEquation: Topic = {
  id: 'math-g2-find-linear-eq',
  eraId: 'math-g2-linear-func',
  name: '一次関数の式を求める',
  subtitle: '4つのパターンをマスター',
  icon: '🔍',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'パターン①：傾きと切片がわかるとき',
          content:
            '傾き a と切片 b がそのままわかっているときは、y = ax + b にそのまま当てはめるだけ！これが一番かんたんなパターンだよ。',
          keyPoints: [
            '傾き a と切片 b をそのまま y = ax + b に代入するだけ',
            '例: 傾き 3、切片 -2 → y = 3x - 2',
            '問題文の「傾き」「切片」というキーワードに注目しよう',
          ],
        },
        {
          title: 'パターン②：傾きと1点の座標がわかるとき',
          content:
            '傾き a がわかっていて、グラフが通る1点 (p, q) がわかっているとき。y = ax + b に a と通る点の座標を代入して b を求めよう！',
          keyPoints: [
            '① 傾き a を y = ax + b に代入 → y = ax + b',
            '② 通る点 (p, q) を代入 → q = ap + b',
            '③ b について解く → b = q - ap',
            '「変化の割合」= 傾き なので、変化の割合が与えられたらそれが a になる',
            '「平行な直線」は傾きが同じ！ y = 3x + 1 に平行 → a = 3',
          ],
        },
        {
          title: 'パターン③：2点の座標がわかるとき（傾きから求める）',
          content:
            '2点 (x₁, y₁) と (x₂, y₂) がわかっているとき。まず傾き a を求めてから、パターン②と同じように b を求めよう！',
          keyPoints: [
            '① 傾き a = (y₂ - y₁) ÷ (x₂ - x₁) を計算',
            '② 求めた a と、どちらか1点を y = ax + b に代入して b を求める',
            '③ a と b を y = ax + b に当てはめて完成',
          ],
        },
        {
          title: 'パターン④：2点の座標がわかるとき（連立方程式を使う）',
          content:
            '2点の座標がわかっているとき、それぞれを y = ax + b に代入して連立方程式をつくる方法もあるよ。傾きの計算が面倒なときや、分数が出そうなときに便利！',
          keyPoints: [
            '① 1つ目の点 (x₁, y₁) を代入 → y₁ = ax₁ + b …式1',
            '② 2つ目の点 (x₂, y₂) を代入 → y₂ = ax₂ + b …式2',
            '③ 式1と式2の連立方程式を加減法で解いて a と b を求める',
            '例: (1, 4) と (3, 10) → a + b = 4, 3a + b = 10 → a = 3, b = 1',
            'パターン③と答えは同じ！ やりやすい方を選ぼう',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-find-linear-eq-fc1',
        front: '一次関数の式の基本形は？',
        back: '$y = ax + b$（$a$ は傾き、$b$ は切片）',
      },
      {
        id: 'math-g2-find-linear-eq-fc2',
        front: '傾きと切片がわかっているときの式の求め方は？',
        back: '$y = ax + b$ にそのまま $a$ と $b$ を代入するだけ',
      },
      {
        id: 'math-g2-find-linear-eq-fc3',
        front: '傾きと1点の座標がわかっているときの手順は？',
        back: '① $y = ax + b$ に傾き $a$ を代入\n② 通る点 $(p, q)$ を代入して $b$ を求める\n③ 式を完成させる',
      },
      {
        id: 'math-g2-find-linear-eq-fc4',
        front: '2点 $(x_1, y_1)$、$(x_2, y_2)$ から傾き $a$ を求める公式は？',
        back: '$a = \\dfrac{y_2 - y_1}{x_2 - x_1}$（$y$ の増加量 $\\div$ $x$ の増加量）',
      },
      {
        id: 'math-g2-find-linear-eq-fc5',
        front: '2点から式を求める方法（傾きから）の手順は？',
        back: '① 傾き $a = (y_2 - y_1) \\div (x_2 - x_1)$ を計算\n② $y = ax + b$ にどちらか1点を代入して $b$ を求める\n③ 式を完成させる',
      },
      {
        id: 'math-g2-find-linear-eq-fc6',
        front: '2点から式を求める方法（連立方程式）の手順は？',
        back: '① 2点をそれぞれ $y = ax + b$ に代入して2つの式をつくる\n② 連立方程式を加減法で解いて $a$ と $b$ を求める',
      },
      {
        id: 'math-g2-find-linear-eq-fc7',
        front: '「変化の割合」と「傾き」の関係は？',
        back: '一次関数では、変化の割合 $=$ 傾き $a$（常に一定）',
      },
      {
        id: 'math-g2-find-linear-eq-fc8',
        front: '「$y = 3x + 1$ に平行な直線」の傾きはいくつ？',
        back: '傾き $3$。平行な直線は傾きが等しい（切片だけが異なる）',
      },
      {
        id: 'math-g2-find-linear-eq-fc9',
        front: '切片とは何か？',
        back: 'グラフが $y$ 軸と交わる点の $y$ 座標のこと。$x = 0$ のときの $y$ の値。',
      },
      {
        id: 'math-g2-find-linear-eq-fc10',
        front: '「$x$ が $3$ 増加すると $y$ が $6$ 増加する」とき、傾きは？',
        back: '$a = 6 \\div 3 = 2$。傾き $=$ $y$ の増加量 $\\div$ $x$ の増加量。',
      },
      {
        id: 'math-g2-find-linear-eq-fc11',
        front: '連立方程式法はどんなときに便利？',
        back: '傾きの計算で分数が出そうなとき、または2つの式に代入してまとめて解きたいとき',
      },
      {
        id: 'math-g2-find-linear-eq-fc12',
        front: '2点 $(1, 4)$ と $(3, 10)$ から連立方程式をつくると？',
        back: '$a + b = 4$ と $3a + b = 10$。それぞれ $y = ax + b$ に代入してつくる。',
      },
      {
        id: 'math-g2-find-linear-eq-fc13',
        front: 'グラフが $x$ 軸と交わる点の座標の求め方は？',
        back: '$y = 0$ を式に代入して $x$ について解く。この $x$ の値を $x$ 切片という。',
      },
      {
        id: 'math-g2-find-linear-eq-fc14',
        front: '平行な2直線の傾きの関係は？',
        back: '平行な2直線の傾きは等しい（$a_1 = a_2$）。切片 $b$ だけが異なる。',
      },
      {
        id: 'math-g2-find-linear-eq-fc15',
        front: '式を求めた後、答えが正しいか確認する方法は？',
        back: '求めた式に、もう1つの点の座標を代入して等式が成り立つか確かめる',
      },
      {
        id: 'math-g2-find-linear-eq-fc16',
        front: '「傾き $-2$、点 $(3, 1)$ を通る」→ 切片 $b$ の求め方は？',
        back: '$y = -2x + b$ に $(3, 1)$ を代入: $1 = -6 + b$ → $b = 7$',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-find-linear-eq-q1',
          question: '傾き $2$、切片 $5$ の一次関数の式は？',
          options: ['$y = 5x + 2$', '$y = 2x + 5$', '$y = 2x - 5$', '$y = 5x - 2$'],
          correctIndex: 1,
          explanation:
            '$y = ax + b$ に $a = 2$、$b = 5$ を代入して $y = 2x + 5$ だよ。',
        },
        {
          id: 'math-g2-find-linear-eq-q2',
          question:
            '傾きが $3$ で、点 $(1, 7)$ を通る一次関数の式は？',
          options: ['$y = 3x + 7$', '$y = 3x + 4$', '$y = 7x + 3$', '$y = 3x + 1$'],
          correctIndex: 1,
          explanation:
            '$y = 3x + b$ に $(1, 7)$ を代入: $7 = 3 \\times 1 + b \\rightarrow b = 4$。よって $y = 3x + 4$。',
        },
        {
          id: 'math-g2-find-linear-eq-q3',
          question:
            '2点 $(1, 3)$ と $(3, 7)$ を通る一次関数の式は？',
          options: ['$y = 2x + 1$', '$y = 2x + 3$', '$y = x + 2$', '$y = 3x + 1$'],
          correctIndex: 0,
          explanation:
            '傾き $a = (7 - 3) \\div (3 - 1) = 4 \\div 2 = 2$。$y = 2x + b$ に $(1, 3)$ を代入: $3 = 2 + b \\rightarrow b = 1$。よって $y = 2x + 1$。',
        },
        {
          id: 'math-g2-find-linear-eq-q4',
          question:
            '$y = -3x + 5$ に平行で、点 $(2, 1)$ を通る一次関数の式は？',
          options: ['$y = -3x + 7$', '$y = -3x - 5$', '$y = 3x - 5$', '$y = -3x + 1$'],
          correctIndex: 0,
          explanation:
            '平行なので傾きは同じ $-3$。$y = -3x + b$ に $(2, 1)$ を代入: $1 = -6 + b \\rightarrow b = 7$。よって $y = -3x + 7$。',
        },
        {
          id: 'math-g2-find-linear-eq-q5',
          question:
            '変化の割合が $4$ で、点 $(2, 11)$ を通る一次関数の式は？',
          options: ['$y = 4x + 11$', '$y = 4x - 3$', '$y = 4x + 3$', '$y = 2x + 7$'],
          correctIndex: 2,
          explanation:
            '一次関数の変化の割合 $=$ 傾きだから $a = 4$。$y = 4x + b$ に $(2, 11)$ を代入: $11 = 8 + b \\rightarrow b = 3$。よって $y = 4x + 3$。',
        },
        {
          id: 'math-g2-find-linear-eq-q6',
          question:
            '2点 $(-1, 5)$ と $(2, -1)$ を通る一次関数の式を連立方程式で求めると？',
          options: ['$y = -2x + 3$', '$y = 2x + 7$', '$y = -2x + 5$', '$y = -x + 4$'],
          correctIndex: 0,
          explanation:
            '$(-1, 5)$: $-a + b = 5$、$(2, -1)$: $2a + b = -1$。引くと $3a = -6$、$a = -2$、$b = 3$。よって $y = -2x + 3$。',
        },
        {
          id: 'math-g2-find-linear-eq-q7',
          question:
            '2点 $(2, 5)$ と $(4, 11)$ を通る直線の傾きは？',
          options: ['$2$', '$3$', '$6$', '$\\dfrac{1}{3}$'],
          correctIndex: 1,
          explanation:
            '傾き $a = (11 - 5) \\div (4 - 2) = 6 \\div 2 = 3$。',
        },
        {
          id: 'math-g2-find-linear-eq-q8',
          question:
            '傾き $\\dfrac{1}{2}$ で、点 $(4, 5)$ を通る一次関数の式は？',
          options: [
            '$y = \\dfrac{1}{2}x + 3$',
            '$y = \\dfrac{1}{2}x + 5$',
            '$y = 2x - 3$',
            '$y = \\dfrac{1}{2}x - 3$',
          ],
          correctIndex: 0,
          explanation:
            '$y = \\dfrac{1}{2}x + b$ に $(4, 5)$ を代入: $5 = 2 + b \\rightarrow b = 3$。よって $y = \\dfrac{1}{2}x + 3$。',
        },
        {
          id: 'math-g2-find-linear-eq-q9',
          question:
            '$x = 1$ のとき $y = -1$、$x = 4$ のとき $y = 8$ である一次関数の式は？',
          options: ['$y = 3x - 4$', '$y = 3x + 2$', '$y = 3x - 1$', '$y = -3x + 2$'],
          correctIndex: 0,
          explanation:
            '傾き $= (8 - (-1)) \\div (4 - 1) = 9 \\div 3 = 3$。$y = 3x + b$ に $(1, -1)$ を代入: $-1 = 3 + b \\rightarrow b = -4$。よって $y = 3x - 4$。',
        },
        {
          id: 'math-g2-find-linear-eq-q10',
          question:
            '2点 $(1, 4)$ と $(3, 10)$ を通る一次関数の式を連立方程式で求めるとき、つくる2つの式は？',
          options: [
            '$a + b = 4$ と $3a + b = 10$',
            '$a + b = 1$ と $a + b = 3$',
            '$4a + b = 1$ と $10a + b = 3$',
            '$a + 4b = 1$ と $3a + 10b = 3$',
          ],
          correctIndex: 0,
          explanation:
            '$(1, 4)$ を $y = ax + b$ に代入: $4 = a \\cdot 1 + b$ → $a + b = 4$。$(3, 10)$ を代入: $10 = a \\cdot 3 + b$ → $3a + b = 10$。',
        },
        {
          id: 'math-g2-find-linear-eq-q11',
          question:
            '$x$ が $2$ 増加すると $y$ が $6$ 減少し、点 $(1, 5)$ を通る一次関数の式は？',
          options: ['$y = -3x + 8$', '$y = 3x + 2$', '$y = -3x + 5$', '$y = -6x + 11$'],
          correctIndex: 0,
          explanation:
            '傾き $= -6 \\div 2 = -3$。$y = -3x + b$ に $(1, 5)$ を代入: $5 = -3 + b \\rightarrow b = 8$。よって $y = -3x + 8$。',
        },
        {
          id: 'math-g2-find-linear-eq-q12',
          question:
            'グラフが点 $(0, -3)$ と点 $(2, 1)$ を通るとき、一次関数の式は？',
          options: ['$y = 2x + 3$', '$y = -2x + 3$', '$y = 2x - 3$', '$y = -2x - 3$'],
          correctIndex: 2,
          explanation:
            '$(0, -3)$ を通るので切片は $-3$。傾き $= (1 - (-3)) \\div (2 - 0) = 4 \\div 2 = 2$。よって $y = 2x - 3$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-find-linear-eq-ex1',
          question:
            '傾きが $-2$ で、点 $(3, 1)$ を通る一次関数の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 傾きを代入する',
              content:
                '$a = -2$ なので、$y = -2x + b$ と書けるよ。あとは $b$ を求めればOK！',
              highlight: '$y = -2x + b$',
            },
            {
              title: 'Step 2: 通る点を代入する',
              content:
                '点 $(3, 1)$ を通るから、$x = 3$、$y = 1$ を代入。$1 = -2 \\times 3 + b \\rightarrow 1 = -6 + b$',
              highlight: '$1 = -6 + b$',
            },
            {
              title: 'Step 3: $b$ を求める',
              content:
                '$b = 1 + 6 = 7$。よって $y = -2x + 7$ が答えだよ！',
              highlight: '$y = -2x + 7$',
            },
          ],
          answer: '$y = -2x + 7$',
        },
        {
          id: 'math-g2-find-linear-eq-ex2',
          question:
            '2点 $(2, 5)$ と $(4, 11)$ を通る一次関数の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 傾き $a$ を求める',
              content:
                '$a = (y$ の増加量$) \\div (x$ の増加量$) = (11 - 5) \\div (4 - 2) = 6 \\div 2 = 3$',
              highlight: '$a = 3$',
            },
            {
              title: 'Step 2: $b$ を求める',
              content:
                '$y = 3x + b$ に点 $(2, 5)$ を代入: $5 = 3 \\times 2 + b \\rightarrow 5 = 6 + b \\rightarrow b = -1$',
              highlight: '$b = -1$',
            },
            {
              title: 'Step 3: 式を完成させる',
              content:
                '$a = 3$、$b = -1$ なので $y = 3x - 1$ が答え！ もう1つの点 $(4, 11)$ でも確認: $3 \\times 4 - 1 = 11$ ✓',
              highlight: '$y = 3x - 1$',
            },
          ],
          answer: '$y = 3x - 1$',
        },
        {
          id: 'math-g2-find-linear-eq-ex3',
          question:
            '2点 $(-1, 5)$ と $(2, -1)$ を通る一次関数の式を、連立方程式を使って求めよう。',
          steps: [
            {
              title: 'Step 1: 2つの式をつくる',
              content:
                '$y = ax + b$ に2点をそれぞれ代入するよ。\n$(-1, 5)$: $5 = -a + b$ → $-a + b = 5$ …(1)\n$(2, -1)$: $-1 = 2a + b$ → $2a + b = -1$ …(2)',
              highlight: '$-a + b = 5$、$2a + b = -1$',
            },
            {
              title: 'Step 2: 連立方程式を解く',
              content:
                '(2) - (1) をすると $b$ が消えるよ。\n$2a + b - (-a + b) = -1 - 5$\n$2a + b + a - b = -6$\n$3a = -6$ → $a = -2$',
              highlight: '$a = -2$',
            },
            {
              title: 'Step 3: $b$ を求めて完成',
              content:
                '$a = -2$ を (1) に代入: $-(-2) + b = 5$ → $2 + b = 5$ → $b = 3$。\nよって $y = -2x + 3$ が答え！',
              highlight: '$y = -2x + 3$',
            },
          ],
          answer: '$y = -2x + 3$',
        },
        {
          id: 'math-g2-find-linear-eq-ex4',
          question:
            '$y = 4x - 3$ に平行で、点 $(2, 7)$ を通る一次関数の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 傾きを決める',
              content:
                '平行な直線は傾きが同じ！ $y = 4x - 3$ の傾きは $4$ だから、求める式も $a = 4$ だよ。',
              highlight: '$a = 4$',
            },
            {
              title: 'Step 2: 通る点を代入して $b$ を求める',
              content:
                '$y = 4x + b$ に点 $(2, 7)$ を代入: $7 = 4 \\times 2 + b \\rightarrow 7 = 8 + b \\rightarrow b = -1$',
              highlight: '$b = -1$',
            },
            {
              title: 'Step 3: 式を完成させる',
              content:
                '$a = 4$、$b = -1$ なので $y = 4x - 1$ が答え！ 元の式 $y = 4x - 3$ と傾きが同じで切片だけ違うことを確認しよう。',
              highlight: '$y = 4x - 1$',
            },
          ],
          answer: '$y = 4x - 1$',
        },
        {
          id: 'math-g2-find-linear-eq-ex5',
          question:
            'グラフが $y$ 軸上で点 $(0, -2)$ を通り、点 $(3, 4)$ も通る一次関数の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 切片を読み取る',
              content:
                'グラフが $(0, -2)$ を通っているので、$y$ 軸との交点が $-2$。つまり切片 $b = -2$ だよ。',
              highlight: '$b = -2$',
            },
            {
              title: 'Step 2: 傾き $a$ を求める',
              content:
                '2点 $(0, -2)$ と $(3, 4)$ から傾きを計算。$a = (4 - (-2)) \\div (3 - 0) = 6 \\div 3 = 2$',
              highlight: '$a = 2$',
            },
            {
              title: 'Step 3: 式を完成させる',
              content:
                '$a = 2$、$b = -2$ なので $y = 2x - 2$ が答え！ 片方の点が $(0, b)$ なら切片がすぐわかるのがポイントだね。',
              highlight: '$y = 2x - 2$',
            },
          ],
          answer: '$y = 2x - 2$',
        },
      ],
    },
    chatId: 'math-g2-find-linear-eq',
  },
};
