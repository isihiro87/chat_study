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
        front: '偶数を文字で表すと？',
        back: '$2n$（$n$ は整数）\n2で割り切れる数',
      },
      {
        id: 'math-g2-le-fc2',
        front: '奇数を文字で表すと？',
        back: '$2n + 1$（$n$ は整数）\n偶数に1を足した数',
      },
      {
        id: 'math-g2-le-fc3',
        front: '連続する3つの整数の表し方は？',
        back: '$n, n + 1, n + 2$\n（$n$ は整数）',
      },
      {
        id: 'math-g2-le-fc4',
        front: '連続する3つの偶数の表し方は？',
        back: '$2n, 2n + 2, 2n + 4$\n（$n$ は整数）',
      },
      {
        id: 'math-g2-le-fc5',
        front: '2けたの自然数の表し方は？',
        back: '$10a + b$\n（$a$: 十の位、$b$: 一の位）',
      },
      {
        id: 'math-g2-le-fc6',
        front: '3けたの自然数の表し方は？',
        back: '$100x + 10y + z$\n（$x$: 百の位、$y$: 十の位、$z$: 一の位）',
      },
      {
        id: 'math-g2-le-fc7',
        front: '証明の3ステップは？',
        back: '① 文字で表す\n② 式を計算する\n③ 結論を書く',
      },
      {
        id: 'math-g2-le-fc8',
        front: '連続する3整数の和は何の倍数？',
        back: '3の倍数\n$n + (n+1) + (n+2) = 3(n+1)$',
      },
      {
        id: 'math-g2-le-fc9',
        front: '2けたの数 + 入れかえた数\n= 何の倍数？',
        back: '11の倍数\n$(10a+b) + (10b+a) = 11(a+b)$',
      },
      {
        id: 'math-g2-le-fc10',
        front: '2けたの数 − 入れかえた数\n= 何の倍数？',
        back: '9の倍数\n$(10a+b) - (10b+a) = 9(a-b)$',
      },
      {
        id: 'math-g2-le-fc11',
        front: '等式の変形とは？',
        back: '等式をある文字について解くこと\n$x = \\square$ の形にする',
      },
      {
        id: 'math-g2-le-fc12',
        front: '等式の変形の基本操作は？',
        back: '① 移項する\n② 両辺に同じ数をかける/割る\n方程式を解くのと同じ要領！',
      },
      {
        id: 'math-g2-le-fc13',
        front: '$S = \\frac{1}{2}ah$ を $h$ について解くと？',
        back: '$h = \\frac{2S}{a}$\n両辺を2倍してから $a$ で割る',
      },
      {
        id: 'math-g2-le-fc14',
        front: '$V = \\pi r^2 h$ を $h$ について解くと？',
        back: '$h = \\frac{V}{\\pi r^2}$\n両辺を $\\pi r^2$ で割る',
      },
      {
        id: 'math-g2-le-fc15',
        front: '奇数 + 奇数 = ？',
        back: '偶数\n$(2m+1) + (2n+1) = 2(m+n+1)$',
      },
      {
        id: 'math-g2-le-fc16',
        front: '偶数 × 奇数 = ？',
        back: '偶数\n$2m \\times (2n+1) = 2m(2n+1)$\n$2 \\times$ 整数の形',
      },
      {
        id: 'math-g2-le-fc17',
        front: '3けたの数と百の位・一の位を\n入れかえた数の差は？',
        back: '99の倍数（9の倍数）\n$(100x+10y+z) - (100z+10y+x)$\n$= 99(x-z)$',
      },
      {
        id: 'math-g2-le-fc18',
        front: '$S = \\frac{(a+b)h}{2}$ を $h$ について解くと？',
        back: '$h = \\frac{2S}{a+b}$\n両辺を2倍して $(a+b)$ で割る',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-literal-expr-q1',
          question: '奇数を文字 $n$ を使って表すと？（$n$ は整数）',
          options: ['$n + 1$', '$2n$', '$2n + 1$', '$n^2$'],
          correctIndex: 2,
          explanation:
            '偶数は $2n$ だから、それに $1$ を足した $2n + 1$ が奇数だよ。$n = 0$ なら $1$、$n = 1$ なら $3$、$n = 2$ なら $5$ … となるね。',
        },
        {
          id: 'math-g2-literal-expr-q2',
          question: '$y = 3x - 6$ を $x$ について解くと？',
          options: [
            '$x = y + 6$',
            '$x = \\frac{y + 6}{3}$',
            '$x = 3y - 6$',
            '$x = \\frac{y}{3} + 6$',
          ],
          correctIndex: 1,
          explanation:
            '$y = 3x - 6 \\rightarrow y + 6 = 3x \\rightarrow x = \\frac{y + 6}{3}$ だよ。まず $-6$ を移項して、$3$ で割ろう。',
        },
        {
          id: 'math-g2-literal-expr-q3',
          question: '連続する3つの整数の和は、どんな数の倍数になる？',
          options: ['$2$の倍数', '$3$の倍数', '$5$の倍数', '$6$の倍数'],
          correctIndex: 1,
          explanation:
            '連続する3整数を $n, n+1, n+2$ とすると、和 $= n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$。$3 \\times$ (整数) の形だから $3$の倍数になるよ！',
        },
        {
          id: 'math-g2-le-q4',
          question:
            '十の位が $a$、一の位が $b$ の2けたの自然数を式で表すと？',
          options: ['$a + b$', '$ab$', '$10a + b$', '$10b + a$'],
          correctIndex: 2,
          explanation:
            '十の位は $10$ 倍するから $10a$、一の位はそのまま $b$ で、$10a + b$ だよ。例えば $a = 3, b = 5$ なら $10 \\times 3 + 5 = 35$ になるね。',
        },
        {
          id: 'math-g2-le-q5',
          question:
            '2けたの自然数と、十の位と一の位を入れかえた数の和は何の倍数？',
          options: ['$3$の倍数', '$9$の倍数', '$10$の倍数', '$11$の倍数'],
          correctIndex: 3,
          explanation:
            '$(10a + b) + (10b + a) = 11a + 11b = 11(a + b)$。$11 \\times$ (整数) の形だから $11$ の倍数だよ。',
        },
        {
          id: 'math-g2-le-q6',
          question: '連続する3つの偶数の和は何の倍数になる？',
          options: ['$2$の倍数', '$3$の倍数', '$4$の倍数', '$6$の倍数'],
          correctIndex: 3,
          explanation:
            '連続する3偶数を $2n, 2n+2, 2n+4$ とすると、和 $= 6n + 6 = 6(n+1)$。$6 \\times$ (整数) の形だから $6$ の倍数だよ。',
        },
        {
          id: 'math-g2-le-q7',
          question: '$S = \\frac{1}{2}ab$ を $a$ について解くと？',
          options: [
            '$a = \\frac{S}{2b}$',
            '$a = \\frac{2S}{b}$',
            '$a = 2Sb$',
            '$a = \\frac{Sb}{2}$',
          ],
          correctIndex: 1,
          explanation:
            '$S = \\frac{1}{2}ab$ の両辺を $2$ 倍すると $2S = ab$。両辺を $b$ で割ると $a = \\frac{2S}{b}$ だよ。',
        },
        {
          id: 'math-g2-le-q8',
          question:
            '3けたの自然数と百の位と一の位を入れかえた数の差は何の倍数？',
          options: ['$9$の倍数', '$11$の倍数', '$99$の倍数', '$100$の倍数'],
          correctIndex: 2,
          explanation:
            '$(100x + 10y + z) - (100z + 10y + x) = 99x - 99z = 99(x - z)$。$99 \\times$ (整数) だから $99$ の倍数（もちろん $9$ の倍数でもある）だよ。',
        },
        {
          id: 'math-g2-le-q9',
          question: '$V = \\frac{1}{3}x^2 h$ を $h$ について解くと？',
          options: [
            '$h = \\frac{V}{3x^2}$',
            '$h = \\frac{3V}{x^2}$',
            '$h = \\frac{x^2}{3V}$',
            '$h = 3Vx^2$',
          ],
          correctIndex: 1,
          explanation:
            '$V = \\frac{1}{3}x^2 h$ の両辺を $3$ 倍すると $3V = x^2 h$。両辺を $x^2$ で割ると $h = \\frac{3V}{x^2}$ だよ。',
        },
        {
          id: 'math-g2-le-q10',
          question: '奇数と奇数の和はどんな数になる？',
          options: ['奇数', '偶数', '3の倍数', '必ず素数'],
          correctIndex: 1,
          explanation:
            '2つの奇数を $2m + 1, 2n + 1$ とすると、和 $= 2m + 2n + 2 = 2(m + n + 1)$。$2 \\times$ (整数) の形だから偶数になるよ。',
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
