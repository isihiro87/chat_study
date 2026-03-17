import type { Topic } from '../../../../../../../../data/types';

export const proportion: Topic = {
  id: 'math-g1-proportion',
  eraId: 'math-g1-functions',
  name: '比例',
  subtitle: 'y=axの世界を理解しよう',
  icon: '📈',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '関数とは？',
          content:
            'ともなって変わる2つの量 $x$ と $y$ があって、$x$ の値を決めると $y$ の値がただ1つ決まるとき、$y$ は $x$ の関数であるというよ。',
          keyPoints: [
            '$x$ の値を決めると $y$ の値がただ1つ決まる関係を「関数」という',
            '変数: いろいろな値をとる文字（$x$, $y$）',
            '変域: 変数のとりうる値の範囲',
          ],
        },
        {
          title: '比例の式 y=ax',
          content:
            '$y$ が $x$ に比例するとき、$y = ax$（$a$ は0でない定数）と表せるよ。この $a$ を比例定数というんだ。$x$ が2倍、3倍になると $y$ も2倍、3倍になるのが比例の特徴だよ。',
          keyPoints: [
            '比例の式: $y = ax$（$a$ は比例定数、$a \\neq 0$）',
            '$x$ が $n$ 倍 → $y$ も $n$ 倍になる',
            '$\\frac{y}{x} = a$（$y$ を $x$ で割ると常に一定）',
          ],
        },
        {
          title: '座標とグラフ',
          content:
            '平面上の点の位置は、横の軸（$x$ 軸）と縦の軸（$y$ 軸）を使って座標 $(x, y)$ で表すよ。2つの軸が交わる点を原点（$O$）というんだ。比例のグラフは必ず原点を通る直線になるよ。',
          keyPoints: [
            '座標平面: $x$ 軸（横）と $y$ 軸（縦）で位置を表す',
            '原点 $O$: 2つの軸の交点 $(0, 0)$',
            '比例のグラフ: 原点を通る直線',
            '$a > 0$ → 右上がり、$a < 0$ → 右下がり',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g1-proportion-fc1',
        front: '$x$ の値を決めると $y$ の値がただ1つ決まる関係', back: '関数とは？',
      },
      {
        id: 'math-g1-proportion-fc2',
        front: '$y = ax$（$a$ は比例定数）', back: '比例の式は？',
      },
      {
        id: 'math-g1-proportion-fc3',
        front: '原点を通る直線。$a > 0$ で右上がり、$a < 0$ で右下がり', back: '比例のグラフの特徴は？',
      },
      {
        id: 'math-g1-proportion-fc4',
        front: '$y$ も2倍になる', back: '比例で $x$ が2倍になると $y$ は？',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-proportion-q1',
          question: '$y = 3x$ のとき、$x = 4$ なら $y$ はいくつ？',
          options: ['$7$', '$12$', '$3$', '$1$'],
          correctIndex: 1,
          explanation:
            '$y = 3 \\times 4 = \\textcolor{#D97706}{12}$ だよ。比例定数 $3$ に $x = 4$ をかけるだけ！',
        },
        {
          id: 'math-g1-proportion-q2',
          question:
            '$y$ が $x$ に比例し、$x = 2$ のとき $y = -6$ である。比例定数 $a$ はいくつ？',
          options: ['$3$', '$-4$', '$-3$', '$4$'],
          correctIndex: 2,
          explanation:
            '$a = \\frac{y}{x} = \\frac{-6}{2} = \\textcolor{#D97706}{-3}$ だよ。',
        },
        {
          id: 'math-g1-proportion-q3',
          question: '比例のグラフについて正しいものはどれ？',
          options: [
            '原点を通る直線である',
            '必ず $y$ 軸と交わる',
            '曲線になることがある',
            '$x$ 軸に平行な直線になる',
          ],
          correctIndex: 0,
          explanation:
            '比例 $y = ax$ のグラフは必ず原点 $(0, 0)$ を通る直線だよ。',
        },
        {
          id: 'math-g1-proportion-q4',
          question:
            '$y = -2x$ のグラフはどんな形？',
          options: [
            '原点を通る右上がりの直線',
            '曲線',
            '原点を通らない直線',
            '原点を通る右下がりの直線',
          ],
          correctIndex: 3,
          explanation:
            '比例定数が $a = -2 < 0$ なので、原点を通る右下がりの直線だよ。',
        },
        {
          id: 'math-g1-proportion-q5',
          question:
            '次のうち、$y$ が $x$ の関数でないものはどれ？',
          options: [
            '$x = 1$ のとき $y = 2$ と $y = 3$ の両方がありうる',
            '$x$ の値を決めると $y$ がただ1つ決まる',
            '$y = 5x$',
            '$y = -x$',
          ],
          correctIndex: 0,
          explanation:
            '$x$ の値に対して $y$ の値が2つ以上あると関数ではないよ。関数は「ただ1つ決まる」がポイント！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-proportion-ex1',
          question:
            '$y$ は $x$ に比例し、$x = 3$ のとき $y = 12$ である。$y$ を $x$ の式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 比例の式を立てよう',
              content:
                '$y$ が $x$ に比例するから、$y = ax$ と表せるよ。',
              highlight: '$y = ax$',
            },
            {
              title: 'Step 2: 比例定数 $a$ を求めよう',
              content:
                '$x = 3$, $y = 12$ を代入すると $12 = a \\times 3$ だから $a = \\frac{12}{3} = 4$',
              highlight: '$a = 4$',
            },
            {
              title: 'Step 3: 式を完成させよう',
              content:
                '比例定数 $a = 4$ を $y = ax$ に当てはめるよ。',
            },
          ],
          answer: '$y = 4x$',
        },
        {
          id: 'math-g1-proportion-ex2',
          question:
            '$y = -2x$ のグラフをかくために、$x = -2, -1, 0, 1, 2$ のときの $y$ の値を求めなさい。',
          steps: [
            {
              title: 'Step 1: 各 $x$ の値を代入しよう',
              content:
                '$x = -2$ のとき $y = -2 \\times (-2) = 4$\n$x = -1$ のとき $y = -2 \\times (-1) = 2$\n$x = 0$ のとき $y = -2 \\times 0 = 0$',
            },
            {
              title: 'Step 2: 残りも求めよう',
              content:
                '$x = 1$ のとき $y = -2 \\times 1 = -2$\n$x = 2$ のとき $y = -2 \\times 2 = -4$',
            },
            {
              title: 'Step 3: グラフの特徴を確認しよう',
              content:
                '原点 $(0, 0)$ を通り、$a = -2 < 0$ なので右下がりの直線になるよ。',
              highlight: '原点を通る右下がりの直線',
            },
          ],
          answer:
            '$x = -2$ のとき $y = 4$、$x = -1$ のとき $y = 2$、$x = 0$ のとき $y = 0$、$x = 1$ のとき $y = -2$、$x = 2$ のとき $y = -4$',
        },
        {
          id: 'math-g1-proportion-ex3',
          question:
            '毎分 $80\\text{m}$ の速さで歩くとき、$x$ 分後に進む道のりを $y\\text{m}$ とする。$y$ を $x$ の式で表し、$15$ 分後の道のりを求めなさい。',
          steps: [
            {
              title: 'Step 1: 関係式を立てよう',
              content:
                '道のり $=$ 速さ $\\times$ 時間 だから $y = 80x$ と表せるよ。',
              highlight: '$y = 80x$',
            },
            {
              title: 'Step 2: $x = 15$ を代入しよう',
              content:
                '$y = 80 \\times 15 = 1200$',
              highlight: '$y = 1200$',
            },
          ],
          answer: '$y = 80x$、$15$ 分後の道のりは $1200\\text{m}$',
        },
      ],
    },
    chatId: 'math-g1-proportion',
  },
};
