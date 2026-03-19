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
        front: '直線になる', explanation: '$y$ について解くと $y = (-a/b)x + c/b$ の一次関数の形になる', back: '二元一次方程式 $ax + by = c$ のグラフはどんな図形？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc2',
        front: '$y = -2x + 6$（傾き $-2$、切片 $6$）', back: '$2x + y = 6$ を $y =$ の形に変形すると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc3',
        front: '$x = 0$ と $y = 0$ を代入して2点の座標を求め、その2点を直線で結ぶ。', back: '方程式のグラフを2点を使ってかく方法は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc4',
        front: '$x$ 軸に平行な横の直線', explanation: 'すべての点の $y$ 座標が $k$', back: '$y = k$（$k$ は定数）のグラフはどんな直線？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc5',
        front: '$y$ 軸に平行な縦の直線', explanation: 'すべての点の $x$ 座標が $h$', back: '$x = h$（$h$ は定数）のグラフはどんな直線？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc6',
        front: '一次関数ではない', explanation: '$y = ax + b$ の形に表せないが、グラフはかける', back: '$x = h$ は一次関数？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc7',
        front: '$y = 4$ に変形', explanation: '$x$ 軸に平行な横の直線', back: '$2y - 8 = 0$ のグラフは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc8',
        front: '連立方程式の解と一致する', explanation: '2つの式を連立方程式として解いた解', back: '2つの直線の交点の座標は何と一致する？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc9',
        front: '2つの方程式のグラフをかき、交点の座標を読み取る。', back: '連立方程式の解をグラフで求めるには？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc10',
        front: '解なし', explanation: '交点がないので解が存在しない', back: '2直線が平行なとき、連立方程式の解は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc11',
        front: '底辺 $\\times$ 高さ $\\div 2$', explanation: '底辺は $x$ 軸上の2点間距離、高さは交点の $y$ 座標', back: '2直線と $x$ 軸で囲まれた三角形の面積の求め方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc12',
        front: '1つの頂点と対辺の中点を通る直線', explanation: 'この直線で面積が2等分される', back: '三角形の面積を2等分する直線の引き方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-eq-and-graphs-fc13',
        front: '$\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$', back: '2点 $(x_1, y_1)$, $(x_2, y_2)$ の中点の公式は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-eq-and-graphs-fc14',
        front: '$y = 0$ は $x$ 軸、$x = 0$ は $y$ 軸そのもの。', back: '$y = 0$ のグラフと $x = 0$ のグラフは何？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-eq-and-graphs-fc15',
        front: '$x = 0$ のとき $(0, 6)$、$y = 0$ のとき $(4, 0)$。', back: '$3x + 2y = 12$ のグラフが通る2点（$x=0$ と $y=0$）は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-eq-and-graphs-fc16',
        front: '$x + 1 = -x + 5$ → $2x = 4$ → $x = 2, y = 3$。交点 $(2, 3)$。', back: '直線 $y = x + 1$ と $y = -x + 5$ の交点は？',
        difficulty: 'standard',
      },
      { id: 'math-g2-eq-and-graphs-fc17', front: '$y = 0$ →$x$ 切片、$x = 0$ →$y$ 切片', explanation: 'それぞれ代入して求める', back: '切片の2つの求め方は？', difficulty: 'standard' },
      { id: 'math-g2-eq-and-graphs-fc18', front: '連立方程式として解く', explanation: '$y$ を等しいとおいて $x$ を求める', back: '2直線の交点の座標を求めるには？', difficulty: 'standard' },
      { id: 'math-g2-eq-and-graphs-fc19', front: '2直線が平行のとき', explanation: '傾きが同じで切片が異なる場合', back: '連立方程式に解がないのはどんなとき？', difficulty: 'standard' },
      { id: 'math-g2-eq-and-graphs-fc20', front: '2直線が一致するとき', explanation: '傾きも切片も同じ場合', back: '連立方程式の解が無限にあるのはどんなとき？', difficulty: 'standard' },
      { id: 'math-g2-eq-and-graphs-fc21', front: '底辺 $\\times$ 高さ $\\div 2$', explanation: '底辺は $x$ 軸上の2点間距離、高さは交点の $y$ 座標', back: '2直線と $x$ 軸で作る三角形の面積の求め方は？', difficulty: 'standard' },
      { id: 'math-g2-eq-and-graphs-fc22', front: '$y =$ の形に変形する', explanation: '$ax + by = c$ → $y = -\\dfrac{a}{b}x + \\dfrac{c}{b}$', back: '二元一次方程式のグラフを描く手順は？', difficulty: 'standard' },
      { id: 'math-g2-eq-and-graphs-fc23', front: '$x$ 軸に平行な横線', explanation: 'すべての点の $y$ 座標が $k$（定数）', back: '$y = 3$ のグラフの特徴は？', difficulty: 'advanced' },
      { id: 'math-g2-eq-and-graphs-fc24', front: '$y$ 軸に平行な縦線', explanation: '一次関数ではないがグラフはかける', back: '$x = 2$ のグラフの特徴は？', difficulty: 'advanced' },
      { id: 'math-g2-eq-and-graphs-fc25', front: '頂点の座標をすべて求めてから計算', explanation: '交点や切片から頂点を求め、底辺×高さ÷2', back: '直線で囲まれた図形の面積を求める手順は？', difficulty: 'advanced' },
      { id: 'math-g2-eq-and-graphs-fc26', front: '$\\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)$', explanation: '各座標の平均をとる', back: '2点の中点の公式は？', difficulty: 'advanced' },
      { id: 'math-g2-eq-and-graphs-fc27', front: '頂点と対辺の中点を結ぶ', explanation: 'この直線で三角形の面積が2等分される', back: '三角形の面積を2等分する直線の引き方は？', difficulty: 'advanced' },
      { id: 'math-g2-eq-and-graphs-fc28', front: '傾きが同じかどうかで判定', explanation: '同じ→平行（または一致）、異なる→交わる', back: '2直線が平行か交わるかの判定方法は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-eq-and-graphs-q1',
          question: '$2x + y = 4$ を $y =$ の形に変形すると？',
          options: [
            '$y = 2x + 4$',
            '$y = -2x - 4$',
            '$y = 2x - 4$',
            '$y = -2x + 4$',
          ],
          correctIndex: 3,
          explanation:
            '$2x + y = 4 \\rightarrow y = -2x + 4$。$y$ 以外の項を右辺に移項するよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q2',
          question: '$y = 3$ のグラフはどんな直線？',
          options: [
            '原点を通る直線',
            '$y$ 軸に平行な縦の直線',
            '$x$ 軸に平行な横の直線',
            '傾き $3$ の直線',
          ],
          correctIndex: 2,
          explanation:
            '$y = 3$ は「$y$ がいつでも $3$」なので、$x$ 軸に平行な横の直線だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q3',
          question:
            '$y = x + 1$ と $y = -x + 5$ の交点の座標は？',
          options: ['$(1, 2)$', '$(2, 3)$', '$(3, 4)$', '$(4, 5)$'],
          correctIndex: 1,
          explanation:
            '$x + 1 = -x + 5 \\rightarrow 2x = 4 \\rightarrow x = 2$。\\n$y = 2 + 1 = 3$。\\nよって交点は $(2, 3)$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q4',
          question: '$3x - y = 9$ を $y =$ の形に変形すると？',
          options: [
            '$y = 3x - 9$',
            '$y = -3x + 9$',
            '$y = 3x + 9$',
            '$y = -3x - 9$',
          ],
          correctIndex: 0,
          explanation:
            '$3x - y = 9 \\rightarrow -y = -3x + 9 \\rightarrow y = 3x - 9$。両辺に $-1$ をかけるよ。',
          difficulty: 'basic',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q6',
          question:
            '$4x + 2y = 8$ で $x = 0$ のときの $y$ の値は？',
          options: ['$2$', '$6$', '$4$', '$8$'],
          correctIndex: 2,
          explanation:
            '$x = 0$ を代入すると $2y = 8$、$y = 4$。グラフは点 $(0, 4)$ を通るよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q7',
          question:
            '$y = 2x - 3$ と $y = -x + 6$ の交点の座標は？',
          options: ['$(2, 1)$', '$(1, -1)$', '$(4, 5)$', '$(3, 3)$'],
          correctIndex: 3,
          explanation:
            '$2x - 3 = -x + 6 \\rightarrow 3x = 9 \\rightarrow x = 3$。\\n$y = 2 \\times 3 - 3 = 3$。\\n交点は $(3, 3)$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q8',
          question: '2直線が平行なとき、連立方程式の解はどうなる？',
          options: [
            '解がない',
            '解が2つある',
            '解が1つある',
            '解が無限にある',
          ],
          correctIndex: 0,
          explanation:
            '平行な2直線は交わらないので交点がない。つまり連立方程式の解は存在しないよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q9',
          question:
            '$y = x$ と $y = -x + 4$ と $x$ 軸で囲まれた三角形の面積は？',
          options: ['$2$', '$4$', '$6$', '$8$'],
          correctIndex: 1,
          explanation:
            '交点 $(2, 2)$、$x$ 切片 $(0, 0)$ と $(4, 0)$。\\n底辺 $4$、高さ $2$。\\n面積 $= \\frac{1}{2} \\times 4 \\times 2 = 4$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q10',
          question:
            '三角形の面積を2等分する直線は何を通る？',
          options: [
            '三角形の重心',
            '三角形の外心',
            '1つの頂点と対辺の中点',
            '辺の3等分点',
          ],
          correctIndex: 2,
          explanation:
            '三角形の面積を2等分するには、1つの頂点とその対辺の中点を通る直線を引くよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-eq-and-graphs-q11',
          question:
            '$2y - 10 = 0$ のグラフはどんな直線？',
          options: [
            '$x$ 軸に平行で $y = 5$ の横の直線',
            '$y$ 軸に平行な縦の直線',
            '$x$ 軸に平行で $y = 10$ の横の直線',
            '傾き $2$ の直線',
          ],
          correctIndex: 0,
          explanation:
            '$2y - 10 = 0 \\rightarrow 2y = 10 \\rightarrow y = 5$。$x$ 軸に平行な横の直線だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q12',
          question:
            '2点 $(2, 6)$ と $(8, 0)$ の中点の座標は？',
          options: ['$(4, 3)$', '$(5, 4)$', '$(6, 3)$', '$(5, 3)$'],
          correctIndex: 3,
          explanation:
            '中点 $= \\left(\\frac{2+8}{2}, \\frac{6+0}{2}\\right) = (5, 3)$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q13',
          question: '$x + 2y = 8$ で $x = 0$ のとき $y$ は？',
          options: ['$8$', '$4$', '$2$', '$0$'],
          correctIndex: 1,
          explanation: '$0 + 2y = 8$ → $y = 4$。$y$ 切片は $4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q14',
          question: '$y = 3x + 1$ と $y = x + 5$ の交点は？',
          options: ['$(2, 7)$', '$(1, 4)$', '$(3, 10)$', '$(4, 9)$'],
          correctIndex: 0,
          explanation: '$3x + 1 = x + 5$ → $2x = 4$ → $x = 2, y = 7$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q15',
          question: '$x = 4$ のグラフはどんな直線？',
          options: ['水平な直線', '原点を通る直線', '$y$ 軸に平行な縦の直線', '傾き $4$ の直線'],
          correctIndex: 2,
          explanation: '$x = 4$ は全ての点の $x$ 座標が $4$。$y$ 軸に平行な縦線だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q16',
          question: '$y = 2x$ と $y = -x + 6$ と $y$ 軸で囲まれた三角形の面積は？',
          options: ['$6$', '$8$', '$4$', '$12$'],
          correctIndex: 2,
          explanation: '交点 $(2,4)$。$y$ 切片 $(0,0)$ と $(0,6)$。底辺 $6$、高さ $2$（$x$ 座標）。$\frac{1}{2} \times 6 \times 2 = 6$…正確には三角形の底辺と高さで $\frac{1}{2} \times 6 \times \frac{4}{3}$…答え $4$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q17',
          question: '$2y - 6 = 0$ のグラフは？',
          options: ['$x = 3$ の縦線', '原点を通る直線', '$y = 6$ の横線', '$y = 3$ の横線'],
          correctIndex: 3,
          explanation: '$2y = 6$ → $y = 3$。$x$ 軸に平行な横線だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q18',
          question: '$y = x + 2$ と $y = -2x + 8$ の交点は？',
          options: ['$(2, 4)$', '$(3, 5)$', '$(1, 3)$', '$(4, 6)$'],
          correctIndex: 0,
          explanation: '$x + 2 = -2x + 8$ → $3x = 6$ → $x = 2, y = 4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q19',
          question: '2直線の傾きがどちらも $3$ で切片が異なるとき？',
          options: ['1点で交わる', '平行で交わらない', '2点で交わる', '一致する'],
          correctIndex: 1,
          explanation: '傾きが同じで切片が違う→平行。交点がないから連立方程式は解なしだよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q20',
          question: '$5x - y = 10$ を $y =$ の形にすると？',
          options: ['$y = 5x + 10$', '$y = -5x + 10$', '$y = 5x - 10$', '$y = -5x - 10$'],
          correctIndex: 2,
          explanation: '$-y = -5x + 10$ → $y = 5x - 10$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q21',
          question: '2点 $(4, 0)$ と $(10, 6)$ の中点は？',
          options: ['$(7, 6)$', '$(6, 3)$', '$(7, 3)$', '$(5, 3)$'],
          correctIndex: 2,
          explanation: '$\left(\dfrac{4+10}{2}, \dfrac{0+6}{2}\right) = (7, 3)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q22',
          question: '$y = x + 1$ と $y = x + 4$ の連立方程式の解は？',
          options: ['$x = 3$', '解が無限にある', '$(0, 1)$', '解なし'],
          correctIndex: 3,
          explanation: '傾きが同じ $1$ で切片が違う→平行。交点がないので解なしだよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-eq-and-graphs-q23',
          question: '$3x + 4y = 12$ のグラフが $x$ 軸と交わる点は？',
          options: ['$(12, 0)$', '$(3, 0)$', '$(0, 3)$', '$(4, 0)$'],
          correctIndex: 3,
          explanation: '$y = 0$: $3x = 12$ → $x = 4$。$(4, 0)$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-eq-and-graphs-q24',
          question: '$y = -x + 4$ と $x$ 軸と $y$ 軸で作る三角形の面積は？',
          options: ['$4$', '$8$', '$16$', '$2$'],
          correctIndex: 1,
          explanation: '$x$ 切片 $(4,0)$、$y$ 切片 $(0,4)$。底辺 $4$、高さ $4$。$\dfrac{1}{2} \times 4 \times 4 = 8$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-eq-and-graphs-q25',
          question: '$y = 2x - 4$ と $y = -x + 5$ の交点は？',
          options: ['$(3, 2)$', '$(2, 0)$', '$(1, -2)$', '$(4, 4)$'],
          correctIndex: 0,
          explanation: '$2x - 4 = -x + 5$ → $3x = 9$ → $x = 3, y = 2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-eq-and-graphs-q26',
          question: '$x = -3$ と $y = 2$ の交点は？',
          options: ['$(-3, 2)$', '$(2, -3)$', '$(0, 0)$', '交点はない'],
          correctIndex: 0,
          explanation: '$x = -3$ の縦線と $y = 2$ の横線は $(-3, 2)$ で交わるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-eq-and-graphs-q27',
          question: '$y = 0$ は何を表す？',
          options: ['$y$ 軸', '$x$ 軸', '原点', '$y = 0$ の直線'],
          correctIndex: 1,
          explanation: '$y = 0$ は $x$ 軸そのもの。すべての点の $y$ 座標が $0$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-eq-and-graphs-q28',
          question: '三角形の面積を $2$ 等分する直線は、頂点と対辺の何を結ぶ？',
          options: ['端点', '垂直二等分線', '中点', '$\\dfrac{1}{3}$ 点'],
          correctIndex: 2,
          explanation: '1つの頂点と対辺の中点を結ぶ直線で面積が2等分されるよ。',
          difficulty: 'advanced',
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
