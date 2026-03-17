import type { Topic } from '../../../../../../../../data/types';

export const slopeIntercept: Topic = {
  id: 'math-g2-slope-intercept',
  eraId: 'math-g2-linear-func',
  name: 'グラフの傾きと切片',
  subtitle: 'グラフの読み方・かき方',
  icon: '📐',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '傾き a の意味',
          content:
            'y = ax + b のグラフで、a は「傾き」と呼ばれるよ。傾きは「x が1増えたとき、y がどれだけ変わるか」を表す数で、変化の割合と同じ値だよ。',
          keyPoints: [
            '傾き a > 0 → 右上がりのグラフ（x が増えると y も増える）',
            '傾き a < 0 → 右下がりのグラフ（x が増えると y は減る）',
            '|a| が大きいほどグラフは急になる',
          ],
          image: {
            src: '/images/math/grade2/linear-function-graph.svg',
            alt: '一次関数のグラフ',
            caption: '傾きと切片の関係',
          },
        },
        {
          title: '切片 b の意味とグラフのかき方',
          content:
            '切片 b は「グラフが y 軸と交わる点の y 座標」のこと。つまり x = 0 のときの y の値だよ。グラフをかくときは、まず切片 (0, b) をとり、そこから傾きを使って次の点を決めよう！',
          keyPoints: [
            '切片 b → y 軸上の点 (0, b) に印をつける',
            '傾き a → 切片から「右に1、上に a」進んだ点をとる（a が負なら下に進む）',
            '2点を結んで直線を引けば完成！',
          ],
        },
        {
          title: '分数の傾きのグラフのかき方',
          content:
            '傾きが分数のときは、「右に1、上に a」だと点が格子点にならないことがあるよ。そんなときは分数をそのまま使おう！たとえば傾き 2/3 なら「右に3、上に2」と考えるときれいに点がとれるよ。',
          keyPoints: [
            '傾き a/b（既約分数）→ 切片から「右に b、上に a」進む',
            '例: 傾き 2/3 → 右に3、上に2',
            '例: 傾き -3/4 → 右に4、下に3',
            '分母が x の増加分、分子が y の増加分と覚えよう',
          ],
        },
        {
          title: '比例のグラフとの関係（平行移動）',
          content:
            'y = ax + b のグラフは、比例 y = ax のグラフを y 軸方向に b だけ平行移動した直線だよ。傾きが同じ2つの直線は平行になるんだ。',
          keyPoints: [
            'y = ax + b は y = ax を y 軸方向に b だけ平行移動',
            'b > 0 なら上に移動、b < 0 なら下に移動',
            '傾きが同じ2つの直線は必ず平行',
          ],
        },
        {
          title: 'x の変域と y の変域',
          content:
            'x の値の範囲（変域）が決まっているとき、y の変域も求められるよ。ポイントは、傾きが正か負かで y の最大・最小が変わること！',
          keyPoints: [
            '傾き a > 0 のとき: x が最小 → y も最小、x が最大 → y も最大',
            '傾き a < 0 のとき: x が最小 → y は最大、x が最大 → y は最小（逆になる！）',
            'x の変域の両端を式に代入して y の値を求め、小さい方から大きい方の順に書く',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-slope-intercept-fc1',
        front: '一次関数 $y = ax + b$ で「傾き」とは？',
        back: '$a$ のこと。$x$ が1増えたときの $y$ の変化量で、変化の割合と同じ値。',
      },
      {
        id: 'math-g2-slope-intercept-fc2',
        front: '一次関数 $y = ax + b$ で「切片」とは？',
        back: '$b$ のこと。グラフが $y$ 軸と交わる点の $y$ 座標。$x = 0$ のときの $y$ の値。',
      },
      {
        id: 'math-g2-slope-intercept-fc3',
        front: '傾き $a > 0$ のとき、グラフはどうなる？',
        back: '右上がりの直線になる。$x$ が増えると $y$ も増える。',
      },
      {
        id: 'math-g2-slope-intercept-fc4',
        front: '傾き $a < 0$ のとき、グラフはどうなる？',
        back: '右下がりの直線になる。$x$ が増えると $y$ は減る。',
      },
      {
        id: 'math-g2-slope-intercept-fc5',
        front: '傾きの絶対値 $|a|$ が大きいほどグラフはどうなる？',
        back: 'グラフが急（きつい角度）になる。$|a|$ が小さいほどゆるやかになる。',
      },
      {
        id: 'math-g2-slope-intercept-fc6',
        front: '一次関数のグラフをかく手順は？',
        back: '(1) 切片 $(0, b)$ を $y$ 軸上にとる → (2) 傾きで次の点をとる → (3) 2点を結んで直線を引く',
      },
      {
        id: 'math-g2-slope-intercept-fc7',
        front: '傾きが分数 $\\dfrac{2}{3}$ のとき、次の点はどうとる？',
        back: '切片から「右に3、上に2」進んだ点をとる。分母が $x$ の増加分、分子が $y$ の増加分。',
      },
      {
        id: 'math-g2-slope-intercept-fc8',
        front: '傾きが $-\\dfrac{3}{4}$ のとき、次の点はどうとる？',
        back: '切片から「右に4、下に3」進んだ点をとる。',
      },
      {
        id: 'math-g2-slope-intercept-fc9',
        front: '$y = ax + b$ のグラフと $y = ax$ のグラフの関係は？',
        back: '$y = ax + b$ は $y = ax$ を $y$ 軸方向に $b$ だけ平行移動した直線。傾きが同じなので平行。',
      },
      {
        id: 'math-g2-slope-intercept-fc10',
        front: '平行移動とは？',
        back: '図形の形や傾きを変えずに、一定の方向に一定の距離だけずらすこと。',
      },
      {
        id: 'math-g2-slope-intercept-fc11',
        front: '傾きが等しい2つの直線の位置関係は？',
        back: '平行になる。例: $y = 2x + 1$ と $y = 2x - 3$ は平行。',
      },
      {
        id: 'math-g2-slope-intercept-fc12',
        front: '変域とは？',
        back: '変数（$x$ や $y$）がとりうる値の範囲のこと。不等号を使って表す。',
      },
      {
        id: 'math-g2-slope-intercept-fc13',
        front: '傾きが正のとき、$x$ の変域から $y$ の変域はどう求める？',
        back: '$x$ が最小のとき $y$ も最小、$x$ が最大のとき $y$ も最大になる。同じ向きに変化する。',
      },
      {
        id: 'math-g2-slope-intercept-fc14',
        front: '傾きが負のとき、$x$ の変域から $y$ の変域はどう求める？',
        back: '$x$ が最小のとき $y$ は最大、$x$ が最大のとき $y$ は最小になる。逆向きに変化する。',
      },
      {
        id: 'math-g2-slope-intercept-fc15',
        front: '切片が $0$ のとき、$y = ax + b$ はどんな式になる？',
        back: '$y = ax$ の形になり、比例のグラフと同じ。原点 $(0, 0)$ を通る。',
      },
      {
        id: 'math-g2-slope-intercept-fc16',
        front: 'グラフから式を読み取るには？',
        back: '(1) $y$ 軸との交点を読んで切片 $b$ を決める → (2) 2点間の変化から傾き $a$ を求める → $y = ax + b$ に当てはめる',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-slope-intercept-q1',
          question: '$y = 2x + 1$ のグラフの切片は？',
          options: ['$3$', '$2$', '$1$', '$0$'],
          correctIndex: 2,
          explanation:
            '$y = ax + b$ の $b$ が切片だよ。$b = 1$ だから、グラフは $y$ 軸上の点 $(0, 1)$ を通るね。',
        },
        {
          id: 'math-g2-slope-intercept-q2',
          question: '傾きが負のグラフはどうなる？',
          options: ['右下がり', '右上がり', '水平', '垂直'],
          correctIndex: 0,
          explanation:
            '傾き $a < 0$ のとき、$x$ が増えると $y$ は減るので、グラフは右下がりになるよ。',
        },
        {
          id: 'math-g2-slope-intercept-q3',
          question: '$y = -3x + 4$ の傾きと切片は？',
          options: [
            '傾き $4$、切片 $-3$',
            '傾き $-3$、切片 $4$',
            '傾き $3$、切片 $-4$',
            '傾き $-4$、切片 $3$',
          ],
          correctIndex: 1,
          explanation:
            '$y = ax + b$ の $a$ が傾き、$b$ が切片。$a = -3$、$b = 4$ だよ。',
        },
        {
          id: 'math-g2-slope-intercept-q4',
          question:
            '$y = \\dfrac{2}{3}x + 1$ のグラフをかくとき、切片 $(0, 1)$ の次にとる点はどこ？',
          options: ['$(1, 3)$', '$(3, 2)$', '$(2, 2)$', '$(3, 3)$'],
          correctIndex: 3,
          explanation:
            '傾き $\\dfrac{2}{3}$ は「右に3、上に2」と考えるよ。$(0, 1)$ から右に3、上に2で $(3, 3)$ だね。',
        },
        {
          id: 'math-g2-slope-intercept-q5',
          question:
            '$y = 2x + 3$ のグラフは $y = 2x$ のグラフをどう移動したもの？',
          options: [
            '$y$ 軸方向に $3$ だけ',
            '$x$ 軸方向に $3$ だけ',
            '$x$ 軸方向に $2$ だけ',
            '$y$ 軸方向に $-3$ だけ',
          ],
          correctIndex: 0,
          explanation:
            '$y = ax + b$ のグラフは $y = ax$ のグラフを $y$ 軸方向に $b$ だけ平行移動した直線だよ。$b = 3$ なので上に3移動。',
        },
        {
          id: 'math-g2-slope-intercept-q6',
          question:
            '$y = 5x - 2$ と $y = x + 4$ のグラフでは、どちらが急なグラフ？',
          options: [
            '$y = x + 4$',
            '$y = 5x - 2$',
            '同じ急さ',
            '比べられない',
          ],
          correctIndex: 1,
          explanation:
            '傾きの絶対値を比べると $|5| > |1|$ なので、$y = 5x - 2$ の方が急だよ。',
        },
        {
          id: 'math-g2-slope-intercept-q7',
          question:
            '$y = 2x + 1$ で $x$ の変域が $1 \\leqq x \\leqq 4$ のとき、$y$ の変域は？',
          options: [
            '$1 \\leqq y \\leqq 4$',
            '$1 \\leqq y \\leqq 9$',
            '$2 \\leqq y \\leqq 8$',
            '$3 \\leqq y \\leqq 9$',
          ],
          correctIndex: 3,
          explanation:
            '傾きが正なので、$x = 1$ のとき $y = 3$（最小）、$x = 4$ のとき $y = 9$（最大）。$3 \\leqq y \\leqq 9$ だよ。',
        },
        {
          id: 'math-g2-slope-intercept-q8',
          question:
            '$y = -2x + 10$ で $x$ の変域が $1 \\leqq x \\leqq 5$ のとき、$y$ の変域は？',
          options: [
            '$2 \\leqq y \\leqq 10$',
            '$8 \\leqq y \\leqq 0$',
            '$0 \\leqq y \\leqq 8$',
            '$-2 \\leqq y \\leqq 8$',
          ],
          correctIndex: 2,
          explanation:
            '傾きが負なので注意！ $x = 1$ のとき $y = 8$（最大）、$x = 5$ のとき $y = 0$（最小）。$0 \\leqq y \\leqq 8$ だよ。',
        },
        {
          id: 'math-g2-slope-intercept-q9',
          question:
            'グラフが $(0, -2)$ を通り、$x$ が1増えると $y$ が3増える直線の式は？',
          options: [
            '$y = -2x + 3$',
            '$y = -2x - 3$',
            '$y = 3x + 2$',
            '$y = 3x - 2$',
          ],
          correctIndex: 3,
          explanation:
            '切片 $b = -2$、傾き $a = 3$ なので、$y = 3x - 2$ だよ。',
        },
        {
          id: 'math-g2-slope-intercept-q10',
          question:
            '$y = -\\dfrac{1}{3}x + 2$ のグラフで、切片 $(0, 2)$ の次にとる点は？',
          options: ['$(1, 1)$', '$(3, 1)$', '$(3, 3)$', '$(-3, 3)$'],
          correctIndex: 1,
          explanation:
            '傾き $-\\dfrac{1}{3}$ は「右に3、下に1」と考えるよ。$(0, 2)$ から右に3、下に1で $(3, 1)$ だね。',
        },
        {
          id: 'math-g2-slope-intercept-q11',
          question:
            '$y = 2x + 1$ と $y = 2x - 4$ のグラフの位置関係は？',
          options: ['平行', '交わる', '一致する', '垂直に交わる'],
          correctIndex: 0,
          explanation:
            '傾きが同じ $2$ なので、2つのグラフは平行だよ。切片が違うので交わることはない。',
        },
        {
          id: 'math-g2-slope-intercept-q12',
          question:
            '点 $(0, 4)$ と点 $(2, 0)$ を通る直線の式は？',
          options: [
            '$y = 2x + 4$',
            '$y = -2x - 4$',
            '$y = -2x + 4$',
            '$y = 2x - 4$',
          ],
          correctIndex: 2,
          explanation:
            '切片は $4$。傾きは $\\dfrac{0 - 4}{2 - 0} = \\dfrac{-4}{2} = -2$。よって $y = -2x + 4$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-slope-intercept-ex1',
          question: '$y = 2x - 1$ のグラフをかこう。',
          steps: [
            {
              title: 'Step 1: 切片をとる',
              content:
                '$b = -1$ だから、$y$ 軸上の点 $(0, -1)$ に印をつけるよ。',
              highlight: '切片 $(0, -1)$',
            },
            {
              title: 'Step 2: 傾きを使って次の点をとる',
              content:
                '$a = 2$ だから、$(0, -1)$ から「右に1、上に2」進んだ点 $(1, 1)$ をとるよ。',
              highlight: '$(1, 1)$',
            },
            {
              title: 'Step 3: 直線を引く',
              content:
                '$(0, -1)$ と $(1, 1)$ を結んで、両方向に延ばせば完成！',
              highlight: '2点を通る直線を引く',
            },
          ],
          answer: '切片 $(0, -1)$ を通り、傾き$2$の右上がりの直線',
        },
        {
          id: 'math-g2-slope-intercept-ex2',
          question:
            'グラフが点 $(0, 3)$ を通り、$x$ が1増えると $y$ が2減る直線の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 切片を読み取る',
              content:
                'グラフが $(0, 3)$ を通るので、切片 $b = 3$ だよ。',
              highlight: '$b = 3$',
            },
            {
              title: 'Step 2: 傾きを読み取る',
              content:
                '$x$ が1増えると $y$ が2減るから、傾き $a = -2$ だよ。',
              highlight: '$a = -2$',
            },
            {
              title: 'Step 3: 式に当てはめる',
              content:
                '$y = ax + b$ に $a = -2$、$b = 3$ を代入して $y = -2x + 3$',
              highlight: '$y = -2x + 3$',
            },
          ],
          answer: '$y = -2x + 3$',
        },
        {
          id: 'math-g2-slope-intercept-ex3',
          question:
            '$y = \\dfrac{2}{3}x + 1$ のグラフをかこう。',
          steps: [
            {
              title: 'Step 1: 切片をとる',
              content:
                '$b = 1$ だから、$y$ 軸上の点 $(0, 1)$ に印をつけるよ。',
              highlight: '切片 $(0, 1)$',
            },
            {
              title: 'Step 2: 分数の傾きで次の点をとる',
              content:
                '傾き $\\dfrac{2}{3}$ は「右に3、上に2」と考えよう。$(0, 1)$ から右に3、上に2で $(3, 3)$ だよ。',
              highlight: '$(3, 3)$',
            },
            {
              title: 'Step 3: 直線を引く',
              content:
                '$(0, 1)$ と $(3, 3)$ を結んで直線を引けば完成！',
              highlight: '2点を通る直線を引く',
            },
          ],
          answer:
            '切片 $(0, 1)$ を通り、傾き $\\dfrac{2}{3}$ の右上がりの直線',
        },
        {
          id: 'math-g2-slope-intercept-ex4',
          question:
            '$y = -\\dfrac{3}{4}x + 3$ のグラフをかこう。',
          steps: [
            {
              title: 'Step 1: 切片をとる',
              content:
                '$b = 3$ だから、$y$ 軸上の点 $(0, 3)$ に印をつけるよ。',
              highlight: '切片 $(0, 3)$',
            },
            {
              title: 'Step 2: 分数の傾きで次の点をとる',
              content:
                '傾き $-\\dfrac{3}{4}$ は「右に4、下に3」と考えよう。$(0, 3)$ から右に4、下に3で $(4, 0)$ だよ。',
              highlight: '$(4, 0)$',
            },
            {
              title: 'Step 3: 直線を引く',
              content:
                '$(0, 3)$ と $(4, 0)$ を結んで直線を引けば完成！',
              highlight: '2点を通る直線を引く',
            },
          ],
          answer:
            '切片 $(0, 3)$ を通り、傾き $-\\dfrac{3}{4}$ の右下がりの直線',
        },
        {
          id: 'math-g2-slope-intercept-ex5',
          question:
            '$y = 3x - 2$ で $x$ の変域が $1 \\leqq x \\leqq 4$ のとき、$y$ の変域を求めよう。',
          steps: [
            {
              title: 'Step 1: 傾きの正負を確認する',
              content:
                '傾き $a = 3 > 0$ なので、$x$ が増えると $y$ も増えるよ。',
              highlight: '傾きが正 → 同じ向きに変化',
            },
            {
              title: 'Step 2: $x$ の最小値を代入',
              content:
                '$x = 1$ のとき $y = 3 \\times 1 - 2 = 1$。これが $y$ の最小値だよ。',
              highlight: '$y$ の最小値は $1$',
            },
            {
              title: 'Step 3: $x$ の最大値を代入',
              content:
                '$x = 4$ のとき $y = 3 \\times 4 - 2 = 10$。これが $y$ の最大値だよ。',
              highlight: '$y$ の最大値は $10$',
            },
          ],
          answer: '$1 \\leqq y \\leqq 10$',
        },
        {
          id: 'math-g2-slope-intercept-ex6',
          question:
            '$y = -2x + 8$ で $x$ の変域が $-1 \\leqq x \\leqq 3$ のとき、$y$ の変域を求めよう。',
          steps: [
            {
              title: 'Step 1: 傾きの正負を確認する',
              content:
                '傾き $a = -2 < 0$ なので、$x$ が増えると $y$ は減るよ。大小が逆になることに注意！',
              highlight: '傾きが負 → 逆向きに変化',
            },
            {
              title: 'Step 2: $x$ の最小値を代入（$y$ は最大）',
              content:
                '$x = -1$ のとき $y = -2 \\times (-1) + 8 = 10$。傾きが負なので、これが $y$ の最大値だよ。',
              highlight: '$y$ の最大値は $10$',
            },
            {
              title: 'Step 3: $x$ の最大値を代入（$y$ は最小）',
              content:
                '$x = 3$ のとき $y = -2 \\times 3 + 8 = 2$。これが $y$ の最小値だよ。',
              highlight: '$y$ の最小値は $2$',
            },
          ],
          answer: '$2 \\leqq y \\leqq 10$',
        },
      ],
    },
    chatId: 'math-g2-slope-intercept',
  },
};
