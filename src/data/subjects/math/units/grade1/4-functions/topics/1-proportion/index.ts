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
      // --- basic (12枚) ---
      { id: 'math-g1-proportion-fc2', front: '$y = ax$（$a$ は比例定数、$a \\neq 0$）', back: '比例の式は？', explanation: '$a$ を比例定数といい、$x$ が $n$ 倍になると $y$ も $n$ 倍になる。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc3', front: '$a = 4$', back: '$x = 3$ のとき $y = 12$ となる比例の比例定数は？', explanation: '$a = \\dfrac{y}{x} = \\dfrac{12}{3} = 4$', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc6', front: '$y$ も $n$ 倍になる', back: '比例で $x$ が $n$ 倍になると $y$ は？', explanation: '$\\dfrac{y}{x} = a$ が常に一定', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc7', front: '原点を通る直線', back: '比例のグラフの特徴は？', explanation: '$a > 0$ で右上がり、$a < 0$ で右下がり', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc8', front: '$y = 12$', back: '$y = 3x$ で $x = 4$ のとき $y$ は？', explanation: '$y = 3 \\times 4 = 12$', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc15', front: '不等号（$\\leq$, $<$）を使って表す。例: $3 \\leq x \\leq 6$', back: '変域の表し方は？', explanation: '「以上」「以下」は $\\leq$、「より大きい」「未満」は $<$ を使う。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc16', front: '$y = ax$ の形になっていれば比例。定数項や他の項があると比例ではない。', back: '比例かどうかの見分け方は？', explanation: '例: $y = 3x$ は比例。$y = 3x + 1$ は $+1$ があるので比例ではない。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc17', front: '$y = -8$', back: '$y = -2x$ で $x = 4$ のとき $y$ は？', explanation: '$y = -2 \\times 4 = -8$', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc18', front: '$x = 5$', back: '$y = 3x$ で $y = 15$ のとき $x$ は？', explanation: '$15 = 3x$ より $x = 5$', difficulty: 'basic' },
      // --- standard (12枚) ---
      { id: 'math-g1-proportion-fc9', front: '$a = -3$', back: '$x = 2$ のとき $y = -6$ の比例定数は？', explanation: '$a = \\dfrac{y}{x} = \\dfrac{-6}{2} = -3$', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc12', front: '$(x, y)$ で表す', back: '座標の表し方は？', explanation: '横の位置が $x$ 座標、縦の位置が $y$ 座標', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc19', front: '$3 \\leq x \\leq 6$（3以上6以下）', back: '$x$ の変域が3以上6以下のとき、不等号で表すと？', explanation: '「以上」「以下」はその数を含むので $\\leq$ を使う。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc20', front: '$y = 5x$', back: '$x = -3$ のとき $y = -15$ となる比例の式は？', explanation: '$a = \\dfrac{-15}{-3} = 5$', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc21', front: '比例ではない', back: '$y = 4x + 1$ は比例か？', explanation: '$y = ax$ の形ではなく $+1$ がある', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc22', front: '$y$ 座標は $0$', back: '$x$ 軸上にある点の $y$ 座標はいくつ？', explanation: '$x$ 軸上の点は $(a, 0)$ の形', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc23', front: '$x$ 座標は $0$', back: '$y$ 軸上にある点の $x$ 座標はいくつ？', explanation: '$y$ 軸上の点は $(0, b)$ の形', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc24', front: '$y = -\\dfrac{1}{2}x$', back: '$x = 4$ のとき $y = -2$ となる比例の式は？', explanation: '$a = \\dfrac{-2}{4} = -\\dfrac{1}{2}$', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc25', front: '原点ともう1点の合計2点をとって直線で結ぶ', back: '比例のグラフのかき方は？', explanation: '直線は2点で決まる。比例は必ず原点を通るから、あと1点あればOK。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc26', front: '$y = 2x$', back: 'グラフが原点と点 $(3, 6)$ を通る比例の式は？', explanation: '$a = \\dfrac{y}{x} = \\dfrac{6}{3} = 2$', difficulty: 'standard' },
      // --- advanced (6枚) ---
      { id: 'math-g1-proportion-fc13', front: '$|a|$ が大きいほど急な直線、$|a|$ が小さいほどゆるやかな直線', back: '比例定数の大きさとグラフの傾きの関係は？', explanation: '例: $y = 5x$ は $y = 2x$ より急。符号ではなく絶対値で比べる。', difficulty: 'advanced' },
      { id: 'math-g1-proportion-fc14', front: '必ず原点を通る。$x = 0$ のとき $y = 0$。', back: '比例のグラフが必ず通る点は？', explanation: '$y = a \\times 0 = 0$ だから $(0, 0)$ を通る。', difficulty: 'advanced' },
      { id: 'math-g1-proportion-fc27', front: '$-6 \\leq y \\leq 12$', back: '$y = 3x$ で $-2 \\leq x \\leq 4$ のとき $y$ の変域は？', explanation: '$x = -2$ で $y = -6$、$x = 4$ で $y = 12$', difficulty: 'advanced' },
      { id: 'math-g1-proportion-fc28', front: '$a < 0$', back: '比例のグラフが第2象限と第4象限を通るとき $a$ の符号は？', explanation: '右下がりの直線は第2象限と第4象限を通る', difficulty: 'advanced' },
      { id: 'math-g1-proportion-fc29', front: '$y = -4x$', back: 'グラフが原点と点 $(-2, 8)$ を通る比例の式は？', explanation: '$a = \\dfrac{8}{-2} = -4$', difficulty: 'advanced' },
      { id: 'math-g1-proportion-fc30', front: '$y = 5x$ の方が急', back: '$y = 3x$ と $y = 5x$ のグラフではどちらが急？', explanation: '$|5| > |3|$ なので $y = 5x$ の方が傾きが大きい', difficulty: 'advanced' },
      { id: 'math-g1-proportion-fc31', front: '$y = 20$', back: '$y = 4x$ で $x = 5$ のとき $y$ は？', explanation: '$y = 4 \\times 5 = 20$', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc32', front: '$x = -3$', back: '$y = -2x$ で $y = 6$ のとき $x$ は？', explanation: '$6 = -2x$、$x = -3$', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc33', front: '$a = -5$', back: '$x = -2$ のとき $y = 10$ となる比例の比例定数は？', explanation: '$a = \\dfrac{10}{-2} = -5$', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc34', front: '$y = ax$（$a$ は $0$ でない定数）', back: '$y$ が $x$ に比例するとき、式で表すと？', explanation: '$a$ は比例定数。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc35', front: '$y = -10$', back: '$y = 5x$ で $x = -2$ のとき $y$ は？', explanation: '$y = 5 \\times (-2) = -10$', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc36', front: '$y$ も $2$ 倍、$3$ 倍になる', back: '比例 $y = ax$ で $x$ が $2$ 倍、$3$ 倍になると $y$ は？', explanation: '比例の特徴。$\\dfrac{y}{x}$ が一定。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc37', front: '$a = \\dfrac{y}{x}$', back: '比例定数 $a$ を求める式は？', explanation: '$y$ を $x$ で割る。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc38', front: '$-2 < x < 5$', back: '$x$ の変域が $-2$ より大きく $5$ 未満のとき、不等号で表すと？', explanation: '「より大きい」「未満」はその数を含まないので $<$ を使う。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc39', front: '$y = 5x$', back: '$x = 2$ のとき $y = 10$ となる比例の式は？', explanation: '$a = \\dfrac{10}{2} = 5$。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc40', front: '$y = -3x$', back: '$x = -3$ のとき $y = 9$ となる比例の式は？', explanation: '$a = \\dfrac{9}{-3} = -3$。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc41', front: '$12$', back: '$y = -3x$ で $x = -4$ のとき $y$ は？', explanation: '$y = -3 \\times (-4) = 12$。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc42', front: '$x = -5$', back: '$y = -4x$ で $y = 20$ のとき $x$ は？', explanation: '$20 = -4x$、$x = -5$。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc43', front: '$(4, 5)$', back: '右に $4$、上に $5$ の位置にある点の座標は？', explanation: '$(x座標, y座標)$ の順。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc44', front: '$(-2, -3)$', back: '左に $2$、下に $3$ の位置にある点の座標は？', explanation: '左は負の $x$、下は負の $y$。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc45', front: '右上がり', back: '$y = ax$ で $a > 0$ のとき、グラフは右上がり？右下がり？', explanation: '$a$ が正なら $x$ が増えると $y$ も増える。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc46', front: '右下がり', back: '$y = ax$ で $a < 0$ のとき、グラフは右上がり？右下がり？', explanation: '$a$ が負なら $x$ が増えると $y$ は減る。', difficulty: 'basic' },
      { id: 'math-g1-proportion-fc47', front: 'もう1点（合計2点を結んで直線をひく）', back: '比例のグラフをかくには、原点ともう何点とればよい？', explanation: '直線は2点で決まる。', difficulty: 'standard' },
      { id: 'math-g1-proportion-fc48', front: '$y = -4x$', back: 'グラフが原点と点 $(1, -4)$ を通る比例の式は？', explanation: '$a = \\dfrac{-4}{1} = -4$。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        // --- basic (10問) ---
        {
          id: 'math-g1-proportion-q1',
          question: '$y = 3x$ のとき、$x = 4$ なら $y$ はいくつ？',
          options: ['$7$', '$1$', '$3$', '$12$'],
          correctIndex: 3,
          explanation:
            '$y = 3 \\times 4 = \\textcolor{#D97706}{12}$ だよ。比例定数 $3$ に $x = 4$ をかけるだけ！',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q2',
          question:
            '$y$ が $x$ に比例し、$x = 2$ のとき $y = -6$ である。比例定数 $a$ はいくつ？',
          options: ['$3$', '$-4$', '$-3$', '$4$'],
          correctIndex: 2,
          explanation:
            '$a = \\frac{y}{x} = \\frac{-6}{2} = \\textcolor{#D97706}{-3}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q6',
          question: '関数とはどのような関係か？',
          options: [
            '$x$ の値を決めると $y$ の値がただ1つ決まる関係',
            '$x$ と $y$ が同じ値になる関係',
            '$x$ の値に対して $y$ が2つ以上決まる関係',
            '$x$ と $y$ の和が一定になる関係',
          ],
          correctIndex: 0,
          explanation:
            '関数とは「$x$ の値を決めると $y$ の値が\\textcolor{#D97706}{ただ1つ}決まる」関係だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q7',
          question: '変数のとりうる値の範囲を何というか？',
          options: ['比例定数', '変域', '座標', '関数'],
          correctIndex: 1,
          explanation:
            '変数のとりうる値の範囲を\\textcolor{#D97706}{変域}というよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q8',
          question: '$x$ の変域が $3$ 以上 $6$ 以下のとき、正しい表し方はどれ？',
          options: ['$3 < x < 6$', '$3 \\leq x \\leq 6$', '$x \\leq 3$', '$6 \\leq x \\leq 3$'],
          correctIndex: 1,
          explanation:
            '「以上」「以下」は $\\leq$ を使うよ。$\\textcolor{#D97706}{3 \\leq x \\leq 6}$ が正しい。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q9',
          question: '$y = 5x$ の比例定数はいくつ？',
          options: ['$x$', '$y$', '$5$', '$5x$'],
          correctIndex: 2,
          explanation:
            '$y = ax$ の $a$ が比例定数。$y = 5x$ では $a = \\textcolor{#D97706}{5}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q10',
          question: '比例 $y = ax$ で、$\\dfrac{y}{x}$ の値はどうなるか？',
          options: ['$x$ によって変わる', '常に $0$', '常に $1$', '常に一定の値 $a$'],
          correctIndex: 3,
          explanation:
            '比例では $\\frac{y}{x} = \\textcolor{#D97706}{a}$（比例定数）で常に一定だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q11',
          question: '$y = -4x$ で $x = -3$ のとき $y$ はいくつ？',
          options: ['$-12$', '$-7$', '$7$', '$12$'],
          correctIndex: 3,
          explanation:
            '$y = -4 \\times (-3) = \\textcolor{#D97706}{12}$。マイナス×マイナスでプラスだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q12',
          question: '$y = 6x$ で $y = 30$ のとき $x$ はいくつ？',
          options: ['$5$', '$6$', '$24$', '$36$'],
          correctIndex: 0,
          explanation:
            '$30 = 6x$ より $x = \\frac{30}{6} = \\textcolor{#D97706}{5}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-proportion-q13',
          question: '次のうち比例の式はどれ？',
          options: ['$y = 3x + 2$', '$y = x^2$', '$y = -7x$', '$y = \\dfrac{6}{x}$'],
          correctIndex: 2,
          explanation:
            '$y = ax$ の形になっているのは $\\textcolor{#D97706}{y = -7x}$ だけ。他は定数項や $x^2$ があるから比例ではないよ。',
          difficulty: 'basic',
        },
        // --- standard (10問) ---
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
            '比例 $y = ax$ のグラフは必ず\\textcolor{#D97706}{原点 $(0, 0)$ を通る直線}だよ。',
          difficulty: 'standard',
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
            '比例定数が $a = -2 < 0$ なので、\\textcolor{#D97706}{原点を通る右下がりの直線}だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q14',
          question: '座標平面で、2つの軸が交わる点を何というか？',
          options: ['座標', '交点', '原点', '頂点'],
          correctIndex: 2,
          explanation:
            '$x$ 軸と $y$ 軸が交わる点を\\textcolor{#D97706}{原点 $O$}（座標 $(0, 0)$）というよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q15',
          question: '点 $(-3, 5)$ の $x$ 座標と $y$ 座標はそれぞれいくつ？',
          options: ['$x = -3$, $y = 5$', '$x = 5$, $y = -3$', '$x = 3$, $y = -5$', '$x = -3$, $y = -5$'],
          correctIndex: 0,
          explanation:
            '座標 $(x, y)$ の順番だから、$\\textcolor{#D97706}{x = -3, y = 5}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q16',
          question: '$y$ が $x$ に比例し、$x = -4$ のとき $y = 8$ である。比例の式は？',
          options: ['$y = 2x$', '$y = -2x$', '$y = 4x$', '$y = -4x$'],
          correctIndex: 1,
          explanation:
            '$a = \\frac{8}{-4} = -2$ より、$\\textcolor{#D97706}{y = -2x}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q17',
          question: '$x$ 軸上にある点の $y$ 座標はいくつ？',
          options: ['$1$', '$-1$', '$0$', '決まらない'],
          correctIndex: 2,
          explanation:
            '$x$ 軸上の点は必ず $y$ 座標が $\\textcolor{#D97706}{0}$ になるよ。$(a, 0)$ の形だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q18',
          question: '比例のグラフが点 $(2, 6)$ を通るとき、比例の式はどれ？',
          options: ['$y = 2x$', '$y = 6x$', '$y = 4x$', '$y = 3x$'],
          correctIndex: 3,
          explanation:
            '$a = \\frac{6}{2} = 3$ より、$\\textcolor{#D97706}{y = 3x}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q19',
          question: '$y = \\dfrac{1}{3}x$ で $x = 6$ のとき $y$ はいくつ？',
          options: ['$18$', '$3$', '$2$', '$\\dfrac{1}{2}$'],
          correctIndex: 2,
          explanation:
            '$y = \\frac{1}{3} \\times 6 = \\textcolor{#D97706}{2}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q20',
          question: '$y = 2x$ と $y = 5x$ のグラフではどちらが急か？',
          options: ['$y = 2x$', '$y = 5x$', '同じ', '比べられない'],
          correctIndex: 1,
          explanation:
            '$|5| > |2|$ だから $\\textcolor{#D97706}{y = 5x}$ の方が急だよ。$|a|$ が大きいほどグラフは急になるんだ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-proportion-q21',
          question: '比例のグラフをかくには、最低何点をとればよいか？',
          options: ['$1$ 点', '$2$ 点', '$3$ 点', '$4$ 点'],
          correctIndex: 1,
          explanation:
            '原点ともう $\\textcolor{#D97706}{1}$ 点の合計 $\\textcolor{#D97706}{2}$ 点をとって直線で結ぶよ。',
          difficulty: 'standard',
        },
        // --- advanced (5問) ---
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
            '$x$ の値に対して $y$ の値が2つ以上あると関数ではないよ。関数は「\\textcolor{#D97706}{ただ1つ決まる}」がポイント！',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-proportion-q22',
          question: '$y = 3x$ で $x$ の変域が $-2 \\leq x \\leq 4$ のとき、$y$ の変域は？',
          options: ['$-6 \\leq y \\leq 12$', '$-2 \\leq y \\leq 4$', '$0 \\leq y \\leq 12$', '$-12 \\leq y \\leq 6$'],
          correctIndex: 0,
          explanation:
            '$x = -2$ で $y = -6$、$x = 4$ で $y = 12$ だから $\\textcolor{#D97706}{-6 \\leq y \\leq 12}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-proportion-q23',
          question: '比例のグラフが第2象限と第4象限を通るとき、比例定数 $a$ について正しいのは？',
          options: ['$a > 0$', '$a < 0$', '$a = 0$', '$a = 1$'],
          correctIndex: 1,
          explanation:
            '第2象限（$x < 0, y > 0$）と第4象限（$x > 0, y < 0$）を通るのは右下がりの直線。つまり $\\textcolor{#D97706}{a < 0}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-proportion-q24',
          question: '比例 $y = ax$ のグラフが点 $(-2, 5)$ を通る。このグラフが点 $(6, b)$ も通るとき、$b$ はいくつ？',
          options: ['$15$', '$-15$', '$10$', '$-10$'],
          correctIndex: 1,
          explanation:
            '$a = \\frac{5}{-2} = -\\frac{5}{2}$ より $b = -\\frac{5}{2} \\times 6 = \\textcolor{#D97706}{-15}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-proportion-q25',
          question: '1本 $15\\text{g}$ のくぎがある。くぎの重さが $360\\text{g}$ のとき、くぎは何本？',
          options: ['$20$ 本', '$24$ 本', '$30$ 本', '$18$ 本'],
          correctIndex: 1,
          explanation:
            '$y = 15x$ に $y = 360$ を代入して $360 = 15x$ より $x = \\textcolor{#D97706}{24}$（本）だよ。',
          difficulty: 'advanced',
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
        {
          id: 'math-g1-proportion-ex4',
          question:
            '比例のグラフが点 $(-3, 12)$ を通る。この比例の式を求め、$x = 5$ のときの $y$ の値を求めなさい。',
          steps: [
            {
              title: 'Step 1: 比例の式を立てよう',
              content:
                '比例だから $y = ax$ と表せる。グラフが通る点の座標を代入して $a$ を求めよう。',
              highlight: '$y = ax$',
            },
            {
              title: 'Step 2: 比例定数 $a$ を求めよう',
              content:
                '$x = -3$, $y = 12$ を代入すると $12 = a \\times (-3)$ だから $a = \\frac{12}{-3} = -4$',
              highlight: '$a = -4$',
            },
            {
              title: 'Step 3: $x = 5$ のときの $y$ を求めよう',
              content:
                '$y = -4 \\times 5 = -20$',
              highlight: '$y = -20$',
            },
          ],
          answer: '$y = -4x$、$x = 5$ のとき $y = -20$',
        },
        {
          id: 'math-g1-proportion-ex5',
          question:
            '$y = 3x$ で、$x$ の変域が $-2 \\leq x \\leq 4$ のとき、$y$ の変域を求めなさい。',
          steps: [
            {
              title: 'Step 1: 変域の端の値を代入しよう',
              content:
                '$x$ の変域の両端を $y = 3x$ に代入するよ。\n$x = -2$ のとき $y = 3 \\times (-2) = -6$\n$x = 4$ のとき $y = 3 \\times 4 = 12$',
            },
            {
              title: 'Step 2: $y$ の変域を不等号で表そう',
              content:
                '$a = 3 > 0$ だから、$x$ が最小のとき $y$ も最小、$x$ が最大のとき $y$ も最大になるよ。',
              highlight: '$-6 \\leq y \\leq 12$',
            },
          ],
          answer: '$-6 \\leq y \\leq 12$',
        },
        {
          id: 'math-g1-proportion-ex6',
          question:
            '水そうに毎分 $3\\text{L}$ ずつ水を入れる。$x$ 分後に入った水の量を $y\\text{L}$ とするとき、$y$ を $x$ の式で表しなさい。また、水が $45\\text{L}$ たまるのは何分後か求めなさい。',
          steps: [
            {
              title: 'Step 1: 比例の式を立てよう',
              content:
                '毎分 $3\\text{L}$ ずつ入るから、$x$ 分後には $3 \\times x$ リットル入る。',
              highlight: '$y = 3x$',
            },
            {
              title: 'Step 2: $y = 45$ を代入して $x$ を求めよう',
              content:
                '$45 = 3x$ だから $x = \\frac{45}{3} = 15$',
              highlight: '$x = 15$',
            },
          ],
          answer: '$y = 3x$、$45\\text{L}$ たまるのは $15$ 分後',
        },
      ],
    },
    chatId: 'math-g1-proportion',
  },
};
