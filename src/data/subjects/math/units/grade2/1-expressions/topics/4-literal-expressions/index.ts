import type { Topic } from '../../../../../../../../data/types';

export const literalExpressions: Topic = {
  id: 'math-g2-literal-expr',
  eraId: 'math-g2-expressions',
  name: '文字式の利用',
  subtitle: '整数の性質を文字で証明しよう',
  icon: '🔤',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '偶数・奇数・連続整数の表し方',
          content:
            '整数の性質を証明するには、文字を使って数を一般的に表すよ。偶数は $2n$、奇数は $2n + 1$、連続する整数は $n, n + 1$ のように表せるんだ。',
          keyPoints: [
            '偶数: $2n$（$n$ は整数）、奇数: $2n + 1$',
            '連続する整数: $n, n + 1, n + 2$',
            '連続する偶数: $2n, 2n + 2, 2n + 4$',
            '$k$ の倍数: $kn$（$n$ は整数）',
          ],
        },
        {
          title: '証明の手順',
          content:
            '文字式を使った証明は3ステップで進めるよ。① 文字で表す → ② 式を計算 → ③ 「○○の形だから△△」と結論を書くんだ。',
          keyPoints: [
            '① 仮定: 数を文字で表す（偶数なら $2n$、奇数なら $2n + 1$）',
            '② 計算: 和・差・積などを計算して整理する',
            '③ 結論: 「$k \\times$（整数）の形だから $k$ の倍数」のように書く',
          ],
        },
        {
          title: '2けた・3けたの自然数と文字式',
          content:
            '2けたの自然数は十の位を $a$、一の位を $b$ として $10a + b$ と表せるよ。3けたなら $100x + 10y + z$ だね。',
          keyPoints: [
            '2けた: $10a + b$（$a$ は1〜9、$b$ は0〜9）',
            '位を入れかえた数: $10b + a$',
            '3けた: $100x + 10y + z$',
            '和 $(10a + b) + (10b + a) = 11(a + b)$ → 11の倍数',
          ],
        },
        {
          title: '等式の変形',
          content:
            '等式をある文字について解くことを「等式の変形」と言うよ。求めたい文字以外を移項して、その文字だけにするんだ。',
          keyPoints: [
            '目的の文字を左辺に残し、それ以外を移項する',
            '例: $a = b + c$ を $b$ について解く → $b = a - c$',
            '例: $S = \\frac{ah}{2}$ を $h$ について解く → 両辺を2倍して $2S = ah$ → $h = \\frac{2S}{a}$',
            '分数やかけ算がある場合は、両辺に同じ数をかけてから移項する',
          ],
        },
        {
          title: '公式の等式変形',
          content:
            '理科や数学の公式も等式の変形で別の文字について解けるよ。$V = \\pi r^2 h$ なら $h = \\frac{V}{\\pi r^2}$ のように変形できるんだ。',
          keyPoints: [
            '$V = \\pi r^2 h$ → $h = \\frac{V}{\\pi r^2}$',
            '$S = \\frac{(a+b)h}{2}$ → $h = \\frac{2S}{a+b}$',
            '$V = \\frac{1}{3}x^2 h$ → $h = \\frac{3V}{x^2}$',
          ],
        },
        {
          title: 'よくある証明パターンのまとめ',
          content:
            'テストに出やすい証明パターンを押さえておこう。連続する整数の和、偶数・奇数の計算、位の入れかえの3パターンが定番だよ。',
          keyPoints: [
            '連続3整数の和 → $3(n+1)$ → 3の倍数',
            '奇数 + 奇数 → $2(m+n+1)$ → 偶数',
            '2けたの数 + 入れかえた数 → $11(a+b)$ → 11の倍数',
            '2けたの数 − 入れかえた数 → $9(a-b)$ → 9の倍数',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-le-fc1',
        front: '$2n$（$n$ は整数）', back: '偶数を文字で表すと？',
        explanation: '2で割り切れる数',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc2',
        front: '$2n + 1$（$n$ は整数）', back: '奇数を文字で表すと？',
        explanation: '偶数に1を足した数',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc3',
        front: '$n, n + 1, n + 2$\n（$n$ は整数）', back: '連続する3つの整数の表し方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc4',
        front: '$2n, 2n + 2, 2n + 4$\n（$n$ は整数）', back: '連続する3つの偶数の表し方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc5',
        front: '$10a + b$', back: '2けたの自然数の表し方は？',
        explanation: '$a$: 十の位（1〜9）、$b$: 一の位（0〜9）',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc6',
        front: '$100x + 10y + z$', back: '3けたの自然数の表し方は？',
        explanation: '$x$: 百の位、$y$: 十の位、$z$: 一の位',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc7',
        front: '① 文字で表す → ② 式を計算する → ③ 結論を書く', back: '証明の3ステップは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc8',
        front: '3の倍数', back: '連続する3整数の和は何の倍数？',
        explanation: '$n + (n+1) + (n+2) = 3(n+1)$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc9',
        front: '11の倍数', back: '2けたの数 + 入れかえた数 = 何の倍数？',
        explanation: '$(10a+b) + (10b+a) = 11(a+b)$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc10',
        front: '9の倍数', back: '2けたの数 − 入れかえた数 = 何の倍数？',
        explanation: '$(10a+b) - (10b+a) = 9(a-b)$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc11',
        front: '等式をある文字について解くこと', back: '等式の変形とは？',
        explanation: '$x = \\square$ の形にする',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc12',
        front: '① 移項する → ② 両辺に同じ数をかける/割る', back: '等式の変形の基本操作は？',
        explanation: '方程式を解くのと同じ要領！',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-le-fc13',
        front: '$h = \\frac{2S}{a}$', back: '$S = \\frac{1}{2}ah$ を $h$ について解くと？',
        explanation: '両辺を2倍してから $a$ で割る',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-le-fc14',
        front: '$h = \\frac{V}{\\pi r^2}$', back: '$V = \\pi r^2 h$ を $h$ について解くと？',
        explanation: '両辺を $\\pi r^2$ で割る',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-le-fc15',
        front: '偶数', back: '奇数 + 奇数 = ？',
        explanation: '$(2m+1) + (2n+1) = 2(m+n+1)$',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-le-fc16',
        front: '偶数', back: '偶数 × 奇数 = ？',
        explanation: '$2m \\times (2n+1) = 2m(2n+1)$。$2 \\times$ 整数の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-le-fc17',
        front: '99の倍数（9の倍数）', back: '3けたの数と百の位・一の位を入れかえた数の差は？',
        explanation: '$(100x+10y+z) - (100z+10y+x) = 99(x-z)$',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-le-fc18',
        front: '$h = \\frac{2S}{a+b}$', back: '$S = \\frac{(a+b)h}{2}$ を $h$ について解くと？',
        explanation: '両辺を2倍して $(a+b)$ で割る',
        difficulty: 'standard',
      },
      { id: 'math-g2-le-fc19', front: '$4$ の倍数', back: '偶数 × 偶数は何の倍数？', explanation: '$2m \\times 2n = 4mn$', difficulty: 'standard' },
      { id: 'math-g2-le-fc20', front: '偶数', back: '奇数 − 奇数 = ？', explanation: '$(2m+1) - (2n+1) = 2(m-n)$', difficulty: 'standard' },
      { id: 'math-g2-le-fc21', front: '$x = \\dfrac{y - b}{a}$', back: '$y = ax + b$ を $x$ について解くと？', explanation: '$ax = y - b$ → $x = \\dfrac{y - b}{a}$', difficulty: 'standard' },
      { id: 'math-g2-le-fc22', front: '5の倍数', back: '連続する5つの整数の和は何の倍数？', explanation: '$n+(n+1)+(n+2)+(n+3)+(n+4) = 5(n+2)$', difficulty: 'standard' },
      { id: 'math-g2-le-fc23', front: '$2n + 1, 2n + 3, 2n + 5$（$n$ は整数）', back: '連続する3つの奇数の表し方は？', difficulty: 'advanced' },
      { id: 'math-g2-le-fc24', front: '3の倍数', back: '連続する3つの奇数の和は何の倍数？', explanation: '$(2n+1)+(2n+3)+(2n+5) = 6n + 9 = 3(2n + 3)$', difficulty: 'advanced' },
      { id: 'math-g2-le-fc25', front: '$r = \\dfrac{C}{2\\pi}$', back: '$C = 2\\pi r$ を $r$ について解くと？', explanation: '両辺を $2\\pi$ で割る', difficulty: 'advanced' },
      { id: 'math-g2-le-fc26', front: '奇数', back: '偶数 + 奇数 = ？', explanation: '$2m + (2n+1) = 2(m+n) + 1$', difficulty: 'advanced' },
      { id: 'math-g2-le-fc27', front: '$a = \\dfrac{2S}{h} - b$', back: '$S = \\dfrac{(a+b)h}{2}$ を $a$ について解くと？', explanation: '$2S = (a+b)h$ → $\\dfrac{2S}{h} = a+b$ → $a = \\dfrac{2S}{h} - b$', difficulty: 'advanced' },
      { id: 'math-g2-le-fc28', front: '整数', back: '整数の2乗は整数？', explanation: '整数 $n$ の2乗は $n^2$。$n^2$ は整数だから整数', difficulty: 'advanced' },
      { id: 'math-g2-le-fc29', front: '$2n$', back: '整数 $n$ を使って偶数を表すと？', explanation: '$2$ の倍数。', difficulty: 'basic' },
      { id: 'math-g2-le-fc30', front: '$2n + 1$', back: '整数 $n$ を使って奇数を表すと？', explanation: '偶数 $+ 1$。', difficulty: 'basic' },
      { id: 'math-g2-le-fc31', front: '$n, n + 1$', back: '連続する2つの整数を $n$ で表すと？', explanation: '隣り合う整数。', difficulty: 'basic' },
      { id: 'math-g2-le-fc32', front: '$n, n + 1, n + 2$', back: '連続する3つの整数を $n$ で表すと？', explanation: '最小を $n$ とする。', difficulty: 'basic' },
      { id: 'math-g2-le-fc33', front: '$3n$', back: '$3$ の倍数を整数 $n$ で表すと？', explanation: '$3$ に整数をかけた数。', difficulty: 'basic' },
      { id: 'math-g2-le-fc34', front: '偶数（$2m + 2n = 2(m + n)$）', back: '偶数と偶数の和はどんな数？', explanation: '$2 \\times$ 整数の形。', difficulty: 'basic' },
      { id: 'math-g2-le-fc35', front: '偶数（$(2m+1) + (2n+1) = 2(m+n+1)$）', back: '奇数と奇数の和はどんな数？', explanation: '$2 \\times$ 整数の形になる。', difficulty: 'standard' },
      { id: 'math-g2-le-fc36', front: '① 文字で表す → ② 式を計算する → ③ 結論を書く', back: '文字式を使った証明の3ステップは？', explanation: '整数の性質の証明に使う。', difficulty: 'basic' },
      { id: 'math-g2-le-fc37', front: '$3 \\times$（整数）の形にする', back: '「$3$ の倍数である」ことを式で示すには？', explanation: '因数に $3$ を含むことを示す。', difficulty: 'standard' },
      { id: 'math-g2-le-fc38', front: '$3(n + 1)$', back: '連続する3つの整数の和 $n + (n+1) + (n+2)$ を整理すると？', explanation: '$3n + 3 = 3(n+1)$ で $3$ の倍数。', difficulty: 'standard' },
      { id: 'math-g2-le-fc39', front: '真ん中の数の $3$ 倍', back: '連続する3つの整数の和は真ん中の数の何倍？', explanation: '和 $= 3(n+1)$ で $n+1$ は真ん中。', difficulty: 'standard' },
      { id: 'math-g2-le-fc40', front: '$2n, 2n + 2, 2n + 4$', back: '連続する3つの偶数を $n$ で表すと？', explanation: '$2$ ずつ増える。', difficulty: 'standard' },
      { id: 'math-g2-le-fc41', front: '$b = \\dfrac{2S}{h} - a$', back: 'たし算の式 $S = \\dfrac{(a+b)h}{2}$ を $b$ について解くと？', explanation: '$\\dfrac{2S}{h} = a + b$ → $b = \\dfrac{2S}{h} - a$。', difficulty: 'advanced' },
      { id: 'math-g2-le-fc42', front: '$h = \\dfrac{2S}{a + b}$', back: '$S = \\dfrac{(a+b)h}{2}$ を $h$ について解くと？', explanation: '$2S = (a+b)h$ → $h = \\dfrac{2S}{a+b}$。', difficulty: 'advanced' },
      { id: 'math-g2-le-fc43', front: '奇数', back: '偶数 $+$ 奇数 $=$ ？', explanation: '$2m + (2n+1) = 2(m+n) + 1$。', difficulty: 'standard' },
      { id: 'math-g2-le-fc44', front: '$100a + 10b + c$', back: '百の位 $a$、十の位 $b$、一の位 $c$ の3桁の自然数を式で表すと？', explanation: '位取り記数法。', difficulty: 'standard' },
      { id: 'math-g2-le-fc45', front: '$5n$', back: '$5$ の倍数を整数 $n$ で表すと？', explanation: '$5$ に整数をかけた数。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-literal-expr-q1',
          question: '奇数を文字 $n$ を使って表すと？（$n$ は整数）',
          options: ['$n + 1$', '$2n + 1$', '$2n$', '$n^2$'],
          correctIndex: 1,
          explanation:
            '偶数は $2n$ だから、それに $1$ を足した $2n + 1$ が奇数だよ。\n$n = 0$ なら $1$、$n = 1$ なら $3$、$n = 2$ なら $5$ … となるね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-literal-expr-q2',
          question: '$y = 3x - 6$ を $x$ について解くと？',
          options: [
            '$x = y + 6$',
            '$x = 3y - 6$',
            '$x = \\frac{y + 6}{3}$',
            '$x = \\frac{y}{3} + 6$',
          ],
          correctIndex: 2,
          explanation:
            '$y = 3x - 6 \\rightarrow y + 6 = 3x \\rightarrow x = \\frac{y + 6}{3}$ だよ。\nまず $-6$ を移項して、$3$ で割ろう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-literal-expr-q3',
          question: '連続する3つの整数の和は、どんな数の倍数になる？',
          options: ['$3$の倍数', '$2$の倍数', '$5$の倍数', '$6$の倍数'],
          correctIndex: 0,
          explanation:
            '連続する3整数を $n, n+1, n+2$ とすると、和 $= 3n + 3 = 3(n+1)$。\n$3 \\times$ (整数) の形だから $3$の倍数になるよ！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q4',
          question:
            '十の位が $a$、一の位が $b$ の2けたの自然数を式で表すと？',
          options: ['$a + b$', '$ab$', '$10b + a$', '$10a + b$'],
          correctIndex: 3,
          explanation:
            '十の位は $10$ 倍するから $10a$、一の位はそのまま $b$ で、$10a + b$ だよ。\n例えば $a = 3, b = 5$ なら $10 \\times 3 + 5 = 35$ になるね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q5',
          question:
            '2けたの自然数と、十の位と一の位を入れかえた数の和は何の倍数？',
          options: ['$3$の倍数', '$9$の倍数', '$11$の倍数', '$10$の倍数'],
          correctIndex: 2,
          explanation:
            '$(10a + b) + (10b + a) = 11a + 11b = 11(a + b)$。\n$11 \\times$ (整数) の形だから $11$ の倍数だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q6',
          question: '連続する3つの偶数の和は何の倍数になる？',
          options: ['$2$の倍数', '$4$の倍数', '$6$の倍数', '$3$の倍数'],
          correctIndex: 2,
          explanation:
            '連続する3偶数を $2n, 2n+2, 2n+4$ とすると、和 $= 6n + 6 = 6(n+1)$。\n$6 \\times$ (整数) の形だから $6$ の倍数だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q7',
          question: '$S = \\frac{1}{2}ab$ を $a$ について解くと？',
          options: [
            '$a = \\frac{S}{2b}$',
            '$a = \\frac{Sb}{2}$',
            '$a = 2Sb$',
            '$a = \\frac{2S}{b}$',
          ],
          correctIndex: 3,
          explanation:
            '$S = \\frac{1}{2}ab$ の両辺を $2$ 倍すると $2S = ab$。\n両辺を $b$ で割ると $a = \\frac{2S}{b}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q8',
          question:
            '3けたの自然数と百の位と一の位を入れかえた数の差は何の倍数？',
          options: ['$99$の倍数', '$11$の倍数', '$9$の倍数', '$100$の倍数'],
          correctIndex: 0,
          explanation:
            '$(100x + 10y + z) - (100z + 10y + x) = 99x - 99z = 99(x - z)$。\n$99 \\times$ (整数) だから $99$ の倍数（もちろん $9$ の倍数でもある）だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q9',
          question: '$V = \\frac{1}{3}x^2 h$ を $h$ について解くと？',
          options: [
            '$h = \\frac{3V}{x^2}$',
            '$h = \\frac{V}{3x^2}$',
            '$h = \\frac{x^2}{3V}$',
            '$h = 3Vx^2$',
          ],
          correctIndex: 0,
          explanation:
            '$V = \\frac{1}{3}x^2 h$ の両辺を $3$ 倍すると $3V = x^2 h$。\n両辺を $x^2$ で割ると $h = \\frac{3V}{x^2}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q10',
          question: '奇数と奇数の和はどんな数になる？',
          options: ['奇数', '3の倍数', '偶数', '必ず素数'],
          correctIndex: 2,
          explanation:
            '2つの奇数を $2m + 1, 2n + 1$ とすると、和 $= 2(m + n + 1)$。\n$2 \\times$ (整数) の形だから偶数になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-le-q11',
          question: '偶数と奇数の和はどんな数になる？',
          options: ['偶数', '素数', '奇数', '3の倍数'],
          correctIndex: 2,
          explanation: '$2m + (2n+1) = 2(m+n) + 1$。\n$2 \\times$(整数) $+ 1$ の形だから奇数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q12',
          question: '$C = 2\\pi r$ を $r$ について解くと？',
          options: ['$r = \\dfrac{2C}{\\pi}$', '$r = \\dfrac{C}{2\\pi}$', '$r = 2\\pi C$', '$r = C - 2\\pi$'],
          correctIndex: 1,
          explanation: '両辺を $2\\pi$ で割ると $r = \\dfrac{C}{2\\pi}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q13',
          question: '連続する5つの整数の和は何の倍数になる？',
          options: ['$2$ の倍数', '$3$ の倍数', '$5$ の倍数', '$10$ の倍数'],
          correctIndex: 2,
          explanation: '$n+(n+1)+(n+2)+(n+3)+(n+4) = 5n+10 = 5(n+2)$。\n$5$ の倍数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q14',
          question: '$y = -2x + 5$ を $x$ について解くと？',
          options: ['$x = \\dfrac{y - 5}{-2}$', '$x = \\dfrac{-y + 5}{2}$', '$x = \\dfrac{5 - y}{2}$', 'すべて正しい'],
          correctIndex: 3,
          explanation: 'すべて同じ式を変形したものだよ。$x = \\dfrac{5-y}{2}$ が最もシンプル。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q15',
          question: '偶数 × 奇数はどんな数になる？',
          options: ['必ず偶数', '必ず奇数', '偶数か奇数かわからない', '必ず素数'],
          correctIndex: 0,
          explanation: '$2m \\times (2n+1) = 2m(2n+1)$。\n$2 \\times$(整数)の形だから偶数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q16',
          question: '連続する3つの奇数の和は何の倍数？',
          options: ['$2$ の倍数', '$5$ の倍数', '$6$ の倍数', '$3$ の倍数'],
          correctIndex: 3,
          explanation: '$(2n+1)+(2n+3)+(2n+5) = 6n+9 = 3(2n+3)$。\n$3$ の倍数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q17',
          question: '$S = \\dfrac{(a+b)h}{2}$ を $a$ について解くと？',
          options: ['$a = \\dfrac{2S}{h} - b$', '$a = \\dfrac{S}{2h} - b$', '$a = 2Sh - b$', '$a = \\dfrac{2S - b}{h}$'],
          correctIndex: 0,
          explanation: '$2S = (a+b)h$ → $\\dfrac{2S}{h} = a+b$ → $a = \\dfrac{2S}{h} - b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q18',
          question: '2けたの自然数と入れかえた数の差 $(10a+b)-(10b+a)$ を計算すると？',
          options: ['$9(a-b)$', '$11(a-b)$', '$9(a+b)$', '$11(a+b)$'],
          correctIndex: 0,
          explanation: '$10a+b-10b-a = 9a-9b = 9(a-b)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q19',
          question: '奇数の2乗は偶数？奇数？',
          options: ['偶数', 'どちらもありえる', '奇数', '素数'],
          correctIndex: 2,
          explanation: '$(2n+1)^2 = 4n^2 + 4n + 1 = 2(2n^2+2n) + 1$。\n奇数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q20',
          question: '$2x - 3y = 6$ を $y$ について解くと？',
          options: ['$y = \\dfrac{2x - 6}{3}$', '$y = \\dfrac{6 - 2x}{3}$', '$y = 2x - 2$', '$y = \\dfrac{2x + 6}{3}$'],
          correctIndex: 0,
          explanation: '$-3y = 6 - 2x$ → $y = \\dfrac{-(6-2x)}{3} = \\dfrac{2x-6}{3}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q21',
          question: '連続する2つの偶数の積は何の倍数？',
          options: ['$4$ の倍数', '$8$ の倍数', '$6$ の倍数', '$2$ の倍数'],
          correctIndex: 1,
          explanation: '$2n \\times (2n+2) = 4n(n+1)$。\n$n(n+1)$ は連続整数の積で偶数だから、$4 \\times 2k = 8k$ で $8$ の倍数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q22',
          question: '$V = lwh$ を $h$ について解くと？',
          options: ['$h = V - lw$', '$h = \\dfrac{lw}{V}$', '$h = Vlw$', '$h = \\dfrac{V}{lw}$'],
          correctIndex: 3,
          explanation: '両辺を $lw$ で割って $h = \\dfrac{V}{lw}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-le-q23',
          question: '3つの連続する整数の真ん中の数を $n$ とすると、3つの和は？',
          options: ['$3n + 3$', '$3n$', '$3n - 3$', '$n + 3$'],
          correctIndex: 1,
          explanation: '$(n-1) + n + (n+1) = 3n$ だよ。真ん中の数の $3$ 倍になるんだ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-le-q24',
          question: '偶数 − 奇数 はどんな数？',
          options: ['偶数', '奇数', '$0$', 'わからない'],
          correctIndex: 1,
          explanation: '$2m - (2n+1) = 2(m-n) - 1 = 2(m-n-1) + 1$。奇数だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-le-q25',
          question: '$a = \\dfrac{F}{m}$ のとき、$m$ を $a$ と $F$ で表すと？',
          options: ['$m = aF$', '$m = \\dfrac{a}{F}$', '$m = \\dfrac{F}{a}$', '$m = F - a$'],
          correctIndex: 2,
          explanation: '$a = \\dfrac{F}{m}$ → $m = \\dfrac{F}{a}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-le-q26',
          question: '整数 $n$ について、$n^2 + n$ は必ずどんな数？',
          options: ['奇数', '偶数', '3の倍数', '素数'],
          correctIndex: 1,
          explanation: '$n^2 + n = n(n+1)$。\n連続整数の積はどちらか偶数だから積は偶数だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-le-q27',
          question: '3けたの数 $\\overline{abc}$ と $\\overline{cba}$ の差は何の倍数？',
          options: ['$9$ の倍数', '$99$ の倍数', '$11$ の倍数', '$100$ の倍数'],
          correctIndex: 1,
          explanation: '$(100a+10b+c)-(100c+10b+a) = 99(a-c)$。$99$ の倍数だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-le-q28',
          question: '$4x + 5y = 20$ を $x$ について解くと？',
          options: ['$x = \\dfrac{20 - 5y}{4}$', '$x = 5 - \\dfrac{5y}{4}$', '$x = \\dfrac{20 + 5y}{4}$', '①と②は同じ'],
          correctIndex: 3,
          explanation: '$4x = 20 - 5y$ → $x = \\dfrac{20-5y}{4} = 5 - \\dfrac{5y}{4}$。どちらも正しいよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-literal-expr-ex1',
          question: '2つの奇数の和が偶数になることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 文字で表そう',
              content:
                '2つの奇数を $2m + 1$ と $2n + 1$ とする（$m$, $n$ は整数）。',
              highlight: '$2m + 1$, $2n + 1$',
            },
            {
              title: 'Step 2: 和を計算しよう',
              content:
                '$(2m + 1) + (2n + 1) = 2m + 2n + 2 = 2(m + n + 1)$',
              highlight: '$2(m + n + 1)$',
            },
            {
              title: 'Step 3: 結論',
              content:
                '$m + n + 1$ は整数だから、$2(m + n + 1)$ は $2 \\times$ 整数 $=$ 偶数。よって2つの奇数の和は偶数になる。',
              highlight: '$2 \\times$ (整数) $=$ 偶数',
            },
          ],
          answer:
            '2つの奇数を $2m+1$, $2n+1$ とすると、和 $= 2(m+n+1)$ となり偶数。',
        },
        {
          id: 'math-g2-literal-expr-ex2',
          question: '$S = \\pi r^2 h$ を $h$ について解こう。',
          steps: [
            {
              title: 'Step 1: $h$ を含む項を確認',
              content:
                '$S = \\pi r^2 h$ で、右辺に $h$ がある。$h$ だけにしたい。',
              highlight: '$S = \\pi r^2 h$',
            },
            {
              title: 'Step 2: 両辺を $\\pi r^2$ で割る',
              content:
                '$h$ にかかっている $\\pi r^2$ で両辺を割ると、$h$ だけが残るよ。',
              highlight: '$\\frac{S}{\\pi r^2} = h$',
            },
          ],
          answer: '$h = \\frac{S}{\\pi r^2}$',
        },
        {
          id: 'math-g2-le-ex3',
          question:
            '連続する3つの偶数の和が6の倍数になることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 文字で表そう',
              content:
                '連続する3つの偶数を $2n, 2n + 2, 2n + 4$ とする（$n$ は整数）。',
              highlight: '$2n, 2n + 2, 2n + 4$',
            },
            {
              title: 'Step 2: 和を計算しよう',
              content:
                '$2n + (2n + 2) + (2n + 4) = 6n + 6 = 6(n + 1)$',
              highlight: '$6(n + 1)$',
            },
            {
              title: 'Step 3: 結論',
              content:
                '$n + 1$ は整数だから、$6(n + 1)$ は $6 \\times$ (整数) の形。よって連続する3つの偶数の和は6の倍数になる。',
              highlight: '$6 \\times$ (整数) $=$ 6の倍数',
            },
          ],
          answer:
            '$2n + (2n+2) + (2n+4) = 6(n+1)$ より6の倍数。',
        },
        {
          id: 'math-g2-le-ex4',
          question:
            '2けたの自然数と、十の位と一の位を入れかえた数の和が11の倍数になることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 2けたの自然数を文字で表そう',
              content:
                '十の位を $a$、一の位を $b$ とすると、もとの数は $10a + b$、入れかえた数は $10b + a$。',
              highlight: '$10a + b$ と $10b + a$',
            },
            {
              title: 'Step 2: 和を計算しよう',
              content:
                '$(10a + b) + (10b + a) = 11a + 11b = 11(a + b)$',
              highlight: '$11(a + b)$',
            },
            {
              title: 'Step 3: 結論',
              content:
                '$a, b$ は整数だから $a + b$ も整数。$11(a + b)$ は $11 \\times$ (整数) の形なので11の倍数になる。',
              highlight: '$11 \\times$ (整数) $=$ 11の倍数',
            },
          ],
          answer:
            '$(10a+b) + (10b+a) = 11(a+b)$ より11の倍数。',
        },
        {
          id: 'math-g2-le-ex5',
          question:
            '$3x + 2y = 8$ を $y$ について解こう。',
          steps: [
            {
              title: 'Step 1: $y$ の項を残す',
              content:
                '$3x$ を右辺に移項すると $2y = 8 - 3x$。',
              highlight: '$2y = 8 - 3x$',
            },
            {
              title: 'Step 2: $y$ の係数で割る',
              content:
                '両辺を $2$ で割ると $y = \\frac{8 - 3x}{2}$ になるよ。',
              highlight: '$y = \\frac{8 - 3x}{2}$',
            },
          ],
          answer: '$y = \\frac{8 - 3x}{2}$',
        },
        {
          id: 'math-g2-le-ex6',
          question:
            '$S = \\frac{(a + b)h}{2}$ を $h$ について解こう。',
          steps: [
            {
              title: 'Step 1: 分母を払おう',
              content:
                '両辺に $2$ をかけると $2S = (a + b)h$ になる。',
              highlight: '$2S = (a + b)h$',
            },
            {
              title: 'Step 2: $h$ だけにする',
              content:
                '両辺を $(a + b)$ で割ると $h = \\frac{2S}{a + b}$ になるよ。',
              highlight: '$h = \\frac{2S}{a + b}$',
            },
          ],
          answer: '$h = \\frac{2S}{a + b}$',
        },
      ],
    },
    chatId: 'math-g2-literal-expr',
  },
};
