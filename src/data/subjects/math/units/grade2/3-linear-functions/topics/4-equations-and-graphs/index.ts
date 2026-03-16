import type { Topic } from '../../../../../../../../data/types';

export const equationsAndGraphs: Topic = {
  id: 'math-g2-eq-and-graphs',
  eraId: 'math-g2-linear-func',
  name: '方程式とグラフ',
  subtitle: '2直線の交点＝連立方程式の解',
  icon: '✖️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'ax + by = c のグラフ',
          content:
            '二元一次方程式 ax + by = c のグラフは直線になるよ。y について解くと y = (-a/b)x + c/b の形になり、一次関数のグラフと同じようにかけるんだ。',
          keyPoints: [
            'ax + by = c を y = ○x + △ の形に変形してグラフをかく',
            '例: 2x + y = 6 → y = -2x + 6（傾き -2、切片 6）',
            'x の係数と y の係数から傾きと切片が決まる',
            'x = 0 と y = 0 を代入して2点を求め、結んでもOK',
          ],
          image: {
            src: '/images/math/grade2/two-lines-intersection.svg',
            alt: '2直線の交点',
            caption: '交点が連立方程式の解',
          },
        },
        {
          title: 'y = k と x = h のグラフ',
          content:
            'y = k（k は定数）のグラフは x 軸に平行な横の直線、x = h（h は定数）のグラフは y 軸に平行な縦の直線になるよ。',
          keyPoints: [
            'y = 3 → y 座標がいつでも 3 の横線',
            'x = 2 → x 座標がいつでも 2 の縦線',
            'x = h は一次関数ではないけどグラフはかける！',
            '2y - 8 = 0 → y = 4 のように変形してからかく',
          ],
        },
        {
          title: '交点＝連立方程式の解',
          content:
            '2つの直線の交点の座標は、2つの式を連立方程式として解いた答えと一致するよ。逆に、連立方程式の解をグラフで求めることもできるんだ！',
          keyPoints: [
            '2直線の交点 = 2つの方程式を同時に満たす (x, y)',
            '連立方程式を解く ↔ グラフの交点を読み取る（同じこと！）',
            '2直線が平行 → 交点なし → 連立方程式は解なし',
          ],
        },
        {
          title: '直線と図形',
          content:
            '2つの直線と x 軸（または y 軸）で囲まれた三角形の面積を求める問題がよく出るよ。交点や切片の座標を求めてから、底辺と高さで面積を計算しよう。',
          keyPoints: [
            '2直線の交点と、各直線の x 切片（または y 切片）が三角形の頂点になる',
            '底辺 × 高さ ÷ 2 で面積を求める',
            '三角形の面積を2等分する直線は、1つの頂点と対辺の中点を通る',
            '中点の公式: ((x1+x2)/2, (y1+y2)/2)',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-eq-and-graphs-fc1',
        front: '二元一次方程式 $ax + by = c$ のグラフはどんな図形？',
        back: '直線になる。$y$ について解くと一次関数の形 $y = (-a/b)x + c/b$ になる。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc2',
        front: '$2x + y = 6$ を $y =$ の形に変形すると？',
        back: '$y = -2x + 6$（傾き $-2$、切片 $6$）',
      },
      {
        id: 'math-g2-eq-and-graphs-fc3',
        front: '方程式のグラフを2点を使ってかく方法は？',
        back: '$x = 0$ と $y = 0$ を代入して2点の座標を求め、その2点を直線で結ぶ。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc4',
        front: '$y = k$（$k$ は定数）のグラフはどんな直線？',
        back: '$x$ 軸に平行な横の直線。すべての点の $y$ 座標が $k$。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc5',
        front: '$x = h$（$h$ は定数）のグラフはどんな直線？',
        back: '$y$ 軸に平行な縦の直線。すべての点の $x$ 座標が $h$。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc6',
        front: '$x = h$ は一次関数？',
        back: '一次関数ではない。$y = ax + b$ の形に表せないが、グラフはかける。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc7',
        front: '$2y - 8 = 0$ のグラフは？',
        back: '$y = 4$ に変形。$x$ 軸に平行な横の直線。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc8',
        front: '2つの直線の交点の座標は何と一致する？',
        back: '2つの式を連立方程式として解いた解と一致する。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc9',
        front: '連立方程式の解をグラフで求めるには？',
        back: '2つの方程式のグラフをかき、交点の座標を読み取る。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc10',
        front: '2直線が平行なとき、連立方程式の解は？',
        back: '交点がないので、解なし。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc11',
        front: '2直線と $x$ 軸で囲まれた三角形の面積の求め方は？',
        back: '2直線の交点と各直線の $x$ 切片を求め、底辺($x$ 軸上) × 高さ(交点の $y$ 座標) ÷ 2。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc12',
        front: '三角形の面積を2等分する直線の引き方は？',
        back: '1つの頂点と、その対辺の中点を通る直線を引く。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc13',
        front: '2点 $(x_1, y_1)$, $(x_2, y_2)$ の中点の公式は？',
        back: '$\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$',
      },
      {
        id: 'math-g2-eq-and-graphs-fc14',
        front: '$y = 0$ のグラフと $x = 0$ のグラフは何？',
        back: '$y = 0$ は $x$ 軸、$x = 0$ は $y$ 軸そのもの。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc15',
        front: '$3x + 2y = 12$ のグラフが通る2点（$x=0$ と $y=0$）は？',
        back: '$x = 0$ のとき $(0, 6)$、$y = 0$ のとき $(4, 0)$。',
      },
      {
        id: 'math-g2-eq-and-graphs-fc16',
        front: '直線 $y = x + 1$ と $y = -x + 5$ の交点は？',
        back: '$x + 1 = -x + 5$ → $2x = 4$ → $x = 2, y = 3$。交点 $(2, 3)$。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-eq-and-graphs-q1',
          question: '$2x + y = 4$ を $y =$ の形に変形すると？',
          options: [
            '$y = 2x + 4$',
            '$y = -2x + 4$',
            '$y = 2x - 4$',
            '$y = -2x - 4$',
          ],
          correctIndex: 1,
          explanation:
            '$2x + y = 4 \\rightarrow y = -2x + 4$。$y$ 以外の項を右辺に移項するよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q2',
          question: '$y = 3$ のグラフはどんな直線？',
          options: [
            '原点を通る直線',
            '$x$ 軸に平行な横の直線',
            '$y$ 軸に平行な縦の直線',
            '傾き $3$ の直線',
          ],
          correctIndex: 1,
          explanation:
            '$y = 3$ は「$y$ がいつでも $3$」なので、$x$ 軸に平行な横の直線だよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q3',
          question:
            '$y = x + 1$ と $y = -x + 5$ の交点の座標は？',
          options: ['$(1, 2)$', '$(2, 3)$', '$(3, 4)$', '$(4, 5)$'],
          correctIndex: 1,
          explanation:
            '$x + 1 = -x + 5 \\rightarrow 2x = 4 \\rightarrow x = 2$。$y = 2 + 1 = 3$。よって交点は $(2, 3)$。',
        },
        {
          id: 'math-g2-eq-and-graphs-q4',
          question: '$3x - y = 9$ を $y =$ の形に変形すると？',
          options: [
            '$y = 3x + 9$',
            '$y = -3x + 9$',
            '$y = 3x - 9$',
            '$y = -3x - 9$',
          ],
          correctIndex: 2,
          explanation:
            '$3x - y = 9 \\rightarrow -y = -3x + 9 \\rightarrow y = 3x - 9$。両辺に $-1$ をかけるよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q5',
          question: '$x = -2$ のグラフはどんな直線？',
          options: [
            '$x$ 軸に平行な横の直線',
            '$y$ 軸に平行な縦の直線',
            '原点を通る傾き $-2$ の直線',
            '切片 $-2$ の直線',
          ],
          correctIndex: 1,
          explanation:
            '$x = -2$ は $y$ 軸に平行な縦の直線で、すべての点の $x$ 座標が $-2$ だよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q6',
          question:
            '$4x + 2y = 8$ で $x = 0$ のときの $y$ の値は？',
          options: ['$2$', '$4$', '$6$', '$8$'],
          correctIndex: 1,
          explanation:
            '$x = 0$ を代入すると $2y = 8$、$y = 4$。グラフは点 $(0, 4)$ を通るよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q7',
          question:
            '$y = 2x - 3$ と $y = -x + 6$ の交点の座標は？',
          options: ['$(2, 1)$', '$(3, 3)$', '$(4, 5)$', '$(1, -1)$'],
          correctIndex: 1,
          explanation:
            '$2x - 3 = -x + 6 \\rightarrow 3x = 9 \\rightarrow x = 3$。$y = 2 \\times 3 - 3 = 3$。交点は $(3, 3)$。',
        },
        {
          id: 'math-g2-eq-and-graphs-q8',
          question: '2直線が平行なとき、連立方程式の解はどうなる？',
          options: [
            '解が1つある',
            '解が2つある',
            '解がない',
            '解が無限にある',
          ],
          correctIndex: 2,
          explanation:
            '平行な2直線は交わらないので交点がない。つまり連立方程式の解は存在しないよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q9',
          question:
            '$y = x$ と $y = -x + 4$ と $x$ 軸で囲まれた三角形の面積は？',
          options: ['$2$', '$4$', '$6$', '$8$'],
          correctIndex: 1,
          explanation:
            '交点 $(2, 2)$、$x$ 切片 $(0, 0)$ と $(4, 0)$。底辺 $4$、高さ $2$。面積 $= \\frac{1}{2} \\times 4 \\times 2 = 4$。',
        },
        {
          id: 'math-g2-eq-and-graphs-q10',
          question:
            '三角形の面積を2等分する直線は何を通る？',
          options: [
            '三角形の重心',
            '1つの頂点と対辺の中点',
            '三角形の外心',
            '辺の3等分点',
          ],
          correctIndex: 1,
          explanation:
            '三角形の面積を2等分するには、1つの頂点とその対辺の中点を通る直線を引くよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q11',
          question:
            '$2y - 10 = 0$ のグラフはどんな直線？',
          options: [
            '$y$ 軸に平行な縦の直線',
            '$x$ 軸に平行で $y = 5$ の横の直線',
            '$x$ 軸に平行で $y = 10$ の横の直線',
            '傾き $2$ の直線',
          ],
          correctIndex: 1,
          explanation:
            '$2y - 10 = 0 \\rightarrow 2y = 10 \\rightarrow y = 5$。$x$ 軸に平行な横の直線だよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q12',
          question:
            '2点 $(2, 6)$ と $(8, 0)$ の中点の座標は？',
          options: ['$(4, 3)$', '$(5, 3)$', '$(6, 3)$', '$(5, 4)$'],
          correctIndex: 1,
          explanation:
            '中点 $= \\left(\\frac{2+8}{2}, \\frac{6+0}{2}\\right) = (5, 3)$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-eq-and-graphs-ex1',
          question:
            '$y = 2x - 1$ と $y = -x + 5$ の交点の座標を求めよう。',
          steps: [
            {
              title: 'Step 1: 連立方程式として解く',
              content:
                '交点では2つの式の $y$ が等しいから、$2x - 1 = -x + 5$ とおけるよ。',
              highlight: '$2x - 1 = -x + 5$',
            },
            {
              title: 'Step 2: $x$ を求める',
              content:
                '$2x + x = 5 + 1 \\rightarrow 3x = 6 \\rightarrow x = 2$',
              highlight: '$x = 2$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content:
                '$x = 2$ を $y = 2x - 1$ に代入: $y = 2 \\times 2 - 1 = 3$。交点は $(2, 3)$ だよ！',
              highlight: '交点 $(2, 3)$',
            },
          ],
          answer: '交点の座標は $(2, 3)$',
        },
        {
          id: 'math-g2-eq-and-graphs-ex2',
          question: '$3x + 2y = 12$ のグラフをかこう。',
          steps: [
            {
              title: 'Step 1: $y =$ の形に変形する',
              content:
                '$3x + 2y = 12 \\rightarrow 2y = -3x + 12 \\rightarrow y = -\\frac{3}{2}x + 6$',
              highlight: '$y = -\\frac{3}{2}x + 6$',
            },
            {
              title: 'Step 2: 切片と傾きを読み取る',
              content:
                '切片 $b = 6$ → 点 $(0, 6)$ をとる。傾き $a = -\\frac{3}{2}$ → 右に2、下に3 で点 $(2, 3)$ をとる。',
              highlight: '$(0, 6)$ と $(2, 3)$',
            },
            {
              title: 'Step 3: 直線を引く',
              content:
                '2点を結んで直線を引けば完成！ 右下がりのグラフになるよ。',
              highlight: '右下がりの直線',
            },
          ],
          answer: '切片 $6$、傾き $-\\frac{3}{2}$ の右下がりの直線',
        },
        {
          id: 'math-g2-eq-and-graphs-ex3',
          question:
            '$2x + y = 6$ のグラフを、$x = 0$ と $y = 0$ を代入する方法でかこう。',
          steps: [
            {
              title: 'Step 1: $x = 0$ を代入',
              content:
                '$2 \\times 0 + y = 6 \\rightarrow y = 6$。点 $(0, 6)$ を通ることがわかるよ。',
              highlight: '点 $(0, 6)$',
            },
            {
              title: 'Step 2: $y = 0$ を代入',
              content:
                '$2x + 0 = 6 \\rightarrow x = 3$。点 $(3, 0)$ を通ることがわかるよ。',
              highlight: '点 $(3, 0)$',
            },
            {
              title: 'Step 3: 2点を結ぶ',
              content:
                '$(0, 6)$ と $(3, 0)$ を直線で結べばグラフの完成！ $y =$ の形に変形しなくてもかけるね。',
              highlight: '$(0, 6)$ と $(3, 0)$ を結ぶ',
            },
          ],
          answer:
            '$(0, 6)$ と $(3, 0)$ を通る右下がりの直線',
        },
        {
          id: 'math-g2-eq-and-graphs-ex4',
          question:
            '$y = x$ と $y = -2x + 6$ と $x$ 軸で囲まれた三角形の面積を求めよう。',
          steps: [
            {
              title: 'Step 1: 2直線の交点を求める',
              content:
                '$x = -2x + 6 \\rightarrow 3x = 6 \\rightarrow x = 2, y = 2$。交点は $(2, 2)$。',
              highlight: '交点 $(2, 2)$',
            },
            {
              title: 'Step 2: 各直線の $x$ 切片を求める',
              content:
                '$y = x$ の $x$ 切片: $y = 0$ のとき $x = 0$ → $(0, 0)$。$y = -2x + 6$ の $x$ 切片: $0 = -2x + 6$ → $x = 3$ → $(3, 0)$。',
              highlight: '$(0, 0)$ と $(3, 0)$',
            },
            {
              title: 'Step 3: 面積を計算する',
              content:
                '底辺は $x$ 軸上の $(0, 0)$ から $(3, 0)$ で長さ $3$。高さは交点の $y$ 座標で $2$。面積 $= \\frac{1}{2} \\times 3 \\times 2 = 3$。',
              highlight: '面積 $= 3$',
            },
          ],
          answer: '三角形の面積は $3$',
        },
        {
          id: 'math-g2-eq-and-graphs-ex5',
          question:
            '$y = 2x$ と $y = -x + 6$ と $x$ 軸で囲まれた三角形の面積を2等分する直線の式を求めよう（原点を通る場合）。',
          steps: [
            {
              title: 'Step 1: 三角形の頂点を求める',
              content:
                '交点: $2x = -x + 6 \\rightarrow x = 2, y = 4$ → $(2, 4)$。$x$ 切片: $(0, 0)$ と $(6, 0)$。頂点は $(0, 0), (6, 0), (2, 4)$。',
              highlight: '頂点 $(0,0), (6,0), (2,4)$',
            },
            {
              title: 'Step 2: 原点の対辺の中点を求める',
              content:
                '原点 $(0, 0)$ の対辺は $(6, 0)$ と $(2, 4)$ を結ぶ辺。中点 $= \\left(\\frac{6+2}{2}, \\frac{0+4}{2}\\right) = (4, 2)$。',
              highlight: '中点 $(4, 2)$',
            },
            {
              title: 'Step 3: 直線の式を求める',
              content:
                '原点 $(0, 0)$ と $(4, 2)$ を通る直線の傾き $= \\frac{2}{4} = \\frac{1}{2}$。切片 $0$ なので $y = \\frac{1}{2}x$。',
              highlight: '$y = \\frac{1}{2}x$',
            },
          ],
          answer: '面積を2等分する直線は $y = \\frac{1}{2}x$',
        },
        {
          id: 'math-g2-eq-and-graphs-ex6',
          question:
            'グラフから2直線の交点を読み取って連立方程式を解こう。2直線 $x + y = 5$ と $x - y = 1$ の交点を求めよう。',
          steps: [
            {
              title: 'Step 1: 連立方程式として解く',
              content:
                '2式を足すと: $(x + y) + (x - y) = 5 + 1 \\rightarrow 2x = 6 \\rightarrow x = 3$。',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 2: $y$ を求める',
              content:
                '$x = 3$ を $x + y = 5$ に代入: $3 + y = 5 \\rightarrow y = 2$。',
              highlight: '$y = 2$',
            },
            {
              title: 'Step 3: 交点を確認',
              content:
                '交点は $(3, 2)$。$x - y = 1$ に代入しても $3 - 2 = 1$ で成り立つから正しいね！',
              highlight: '交点 $(3, 2)$',
            },
          ],
          answer: '交点の座標は $(3, 2)$',
        },
      ],
    },
    chatId: 'math-g2-eq-and-graphs',
  },
};
