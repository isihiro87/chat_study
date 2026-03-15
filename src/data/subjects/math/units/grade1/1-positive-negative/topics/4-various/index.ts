import type { Topic } from '../../../../../../../../data/types';

export const variousCalc: Topic = {
  id: 'math-g1-various',
  eraId: 'math-g1-pos-neg',
  name: 'いろいろな計算と素因数分解',
  subtitle: '累乗・四則混合・素因数分解を学ぼう',
  icon: '🔬',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '累乗と指数',
          content:
            '同じ数を何回もかけ合わせたものを「累乗」と言うよ。かけ合わせた回数を右上に小さく書いた数を「指数」と言うんだ。',
          keyPoints: [
            '$3^2 = 3 \\times 3 = 9$（$3$ の $2$ 乗）',
            '$(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$（$-2$ の $3$ 乗）',
            '$(-2)^2 = 4$ だけど $-2^2 = -4$（かっこの有無に注意！）',
          ],
        },
        {
          title: '四則混合計算の順序',
          content:
            '加減乗除が混じった式には、計算する順番のルールがあるよ。この順番を守らないと答えが変わってしまうんだ。',
          keyPoints: [
            '1. 累乗を先に計算する',
            '2. かっこの中を先に計算する',
            '3. 乗法・除法を先に計算する',
            '4. 最後に加法・減法を計算する',
          ],
        },
        {
          title: '分配法則',
          content:
            '$a \\times (b + c) = a \\times b + a \\times c$ という法則を「分配法則」と言うよ。計算を工夫するときにとても便利なんだ。',
          keyPoints: [
            '$5 \\times (3 + 7) = 5 \\times 3 + 5 \\times 7 = 15 + 35 = 50$',
            '$(-4) \\times (6 - 2) = (-4) \\times 6 + (-4) \\times (-2) = -24 + 8 = -16$',
            '逆に共通因数でくくることもできる: $3 \\times 8 + 3 \\times 2 = 3 \\times (8 + 2) = 30$',
          ],
        },
        {
          title: '素数と素因数分解',
          content:
            '$1$ とその数自身のほかに約数がない自然数を「素数」と言うよ。自然数を素数だけの積で表すことを「素因数分解」と言うんだ。',
          keyPoints: [
            '素数: $2, 3, 5, 7, 11, 13, \\ldots$（$1$ は素数ではない）',
            '$12 = 2^2 \\times 3$（$12$ の素因数分解）',
            '$60 = 2^2 \\times 3 \\times 5$（$60$ の素因数分解）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-var-fc1', front: '同じ数を何回もかけ合わせたものを何という？', back: '累乗（るいじょう）。例: $3^2 = 3 \\times 3 = 9$' },
      { id: 'math-g1-var-fc2', front: '累乗でかけ合わせた回数を表す数字を何という？', back: '指数（しすう）。$3^2$ の $2$ が指数。' },
      { id: 'math-g1-var-fc3', front: '$(-3)^2$ と $-3^2$ の違いは？', back: '$(-3)^2 = 9$（$-3$ 全体を $2$ 回かける）、$-3^2 = -9$（$3^2$ を計算してから $-$ をつける）' },
      { id: 'math-g1-var-fc4', front: '$(-2)^3$ の計算結果は？', back: '$(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$' },
      { id: 'math-g1-var-fc5', front: '四則混合計算の順番は？', back: '① 累乗 → ② かっこの中 → ③ 乗除 → ④ 加減' },
      { id: 'math-g1-var-fc6', front: '分配法則の公式は？', back: '$a \\times (b + c) = a \\times b + a \\times c$' },
      { id: 'math-g1-var-fc7', front: '分配法則を逆に使うとは？', back: '共通因数でくくる。例: $3 \\times 8 + 3 \\times 2 = 3 \\times (8+2) = 30$' },
      { id: 'math-g1-var-fc8', front: '素数とは？', back: '$1$ とその数自身以外に約数がない自然数（$1$ は素数ではない）' },
      { id: 'math-g1-var-fc9', front: '$1$ は素数か？', back: '素数ではない' },
      { id: 'math-g1-var-fc10', front: '$2$ は素数か？', back: '素数。唯一の偶数の素数。' },
      { id: 'math-g1-var-fc11', front: '$20$ 以下の素数をすべて挙げると？', back: '$2, 3, 5, 7, 11, 13, 17, 19$' },
      { id: 'math-g1-var-fc12', front: '素因数分解とは？', back: '自然数を素数だけの積で表すこと。例: $12 = 2^2 \\times 3$' },
      { id: 'math-g1-var-fc13', front: '素因数分解の方法は？', back: '小さい素数（$2, 3, 5, 7, \\ldots$）から順に割っていく' },
      { id: 'math-g1-var-fc14', front: '加法の交換法則とは？', back: '$a + b = b + a$' },
      { id: 'math-g1-var-fc15', front: '加法の結合法則とは？', back: '$(a + b) + c = a + (b + c)$' },
      { id: 'math-g1-var-fc16', front: '乗法の交換法則とは？', back: '$a \\times b = b \\times a$' },
      { id: 'math-g1-var-fc17', front: '乗法の結合法則とは？', back: '$(a \\times b) \\times c = a \\times (b \\times c)$' },
      { id: 'math-g1-var-fc18', front: '自然数・整数・数全体の集合の関係は？', back: '自然数 $\\subset$ 整数 $\\subset$ 数全体' },
      { id: 'math-g1-var-fc19', front: '累乗で、かけ合わせる元の数を何という？', back: '底（てい）。$3^2$ の $3$ が底。' },
      { id: 'math-g1-var-fc20', front: '$1$ とその数自身以外の約数がある自然数を何という？', back: '合成数。例: $4, 6, 8, 9, 10, \\ldots$' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-various-q1',
          question: '$(-3)^2$ の計算結果は？',
          options: ['$-9$', '$+9$', '$-6$', '$+6$'],
          correctIndex: 1,
          explanation:
            '$(-3)^2 = (-3) \\times (-3) = +9$ だよ。負の数を偶数回かけると正になるんだ。',
        },
        {
          id: 'math-g1-various-q2',
          question: '$-3^2$ の計算結果は？（かっこなし）',
          options: ['$-9$', '$+9$', '$-6$', '$+6$'],
          correctIndex: 0,
          explanation:
            'かっこがないときは $-(3^2) = -(9) = -9$ だよ。$(-3)^2 = 9$ との違いに注意！',
        },
        {
          id: 'math-g1-various-q3',
          question: '$5 + 3 \\times (-2)$ の計算結果は？',
          options: ['$-16$', '$-1$', '$+16$', '$+1$'],
          correctIndex: 1,
          explanation:
            'かけ算を先に計算するよ。$3 \\times (-2) = -6$ だから、$5 + (-6) = 5 - 6 = -1$ だね。',
        },
        {
          id: 'math-g1-various-q4',
          question: '$36$ を素因数分解すると？',
          options: [
            '$2 \\times 18$',
            '$4 \\times 9$',
            '$2^2 \\times 3^2$',
            '$6^2$',
          ],
          correctIndex: 2,
          explanation:
            '$36 = 4 \\times 9 = 2^2 \\times 3^2$ だよ。素因数分解は素数だけの積で表すんだ。$6^2$ は $6$ が素数でないからダメだね。',
        },
        {
          id: 'math-g1-various-q5',
          question: '次のうち、素数はどれ？',
          options: ['$1$', '$9$', '$11$', '$15$'],
          correctIndex: 2,
          explanation:
            '$11$ は $1$ と $11$ 以外に約数がないから素数だよ。$1$ は素数ではなく、$9 = 3^2$、$15 = 3 \\times 5$ は素数ではないよ。',
        },
        {
          id: 'math-g1-various-q6',
          question: '$(-2)^4$ の計算結果は？',
          options: ['$+16$', '$-16$', '$+8$', '$-8$'],
          correctIndex: 0,
          explanation:
            '$(-2)^4 = (-2) \\times (-2) \\times (-2) \\times (-2)$。負の数を偶数回（$4$ 回）かけるから結果は正で $+16$ だよ。',
        },
        {
          id: 'math-g1-various-q7',
          question: '$-2^4$ の計算結果は？（かっこなし）',
          options: ['$+16$', '$-16$', '$+8$', '$-8$'],
          correctIndex: 1,
          explanation:
            'かっこがないから $-(2^4) = -(16) = -16$ だよ。$(-2)^4 = +16$ との違いに注意！',
        },
        {
          id: 'math-g1-various-q8',
          question: '$(-1)^2 + (-1)^3$ の計算結果は？',
          options: ['$+2$', '$-2$', '$0$', '$+1$'],
          correctIndex: 2,
          explanation:
            '$(-1)^2 = 1$（偶数乗→正）、$(-1)^3 = -1$（奇数乗→負）。$1 + (-1) = 0$ だよ。',
        },
        {
          id: 'math-g1-various-q9',
          question: '$60$ を素因数分解すると？',
          options: [
            '$2 \\times 30$',
            '$4 \\times 15$',
            '$2^2 \\times 3 \\times 5$',
            '$6 \\times 10$',
          ],
          correctIndex: 2,
          explanation:
            '$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$ だよ。素因数分解は素数だけの積で表すんだ。',
        },
        {
          id: 'math-g1-various-q10',
          question: '$6 - \\{8 \\times (-2 - 5)\\} \\div (-14)$ の計算結果は？',
          options: ['$2$', '$-2$', '$10$', '$-10$'],
          correctIndex: 0,
          explanation:
            'かっこ内: $-2-5=-7$。$8 \\times (-7) = -56$。$(-56) \\div (-14) = 4$。$6 - 4 = 2$ だよ。',
        },
        {
          id: 'math-g1-various-q11',
          question: '$99 \\times 7$ を分配法則で工夫して計算すると？',
          options: ['$693$', '$700$', '$706$', '$793$'],
          correctIndex: 0,
          explanation:
            '$(100 - 1) \\times 7 = 100 \\times 7 - 1 \\times 7 = 700 - 7 = 693$ だよ。',
        },
        {
          id: 'math-g1-various-q12',
          question: '次のうち、自然数の集合について正しいのはどれ？',
          options: [
            '自然数 $-$ 自然数は必ず自然数',
            '自然数 $+$ 自然数は必ず自然数',
            '自然数 $\\div$ 自然数は必ず自然数',
            '$0$ は自然数',
          ],
          correctIndex: 1,
          explanation:
            '自然数＋自然数は必ず自然数になるよ。引き算は $3-5=-2$ のように自然数にならないことがあるし、割り算は $1 \\div 3 = \\frac{1}{3}$ のようになるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-various-ex1',
          question:
            '次の計算をしよう。\n$(-2)^3 + 5 \\times (-3)$',
          steps: [
            {
              title: 'Step 1: 累乗を計算する',
              content:
                '$(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$\n負の数を $3$ 回（奇数回）かけたから負だよ。',
              highlight: '$(-2)^3 = -8$',
            },
            {
              title: 'Step 2: かけ算を計算する',
              content:
                '$5 \\times (-3) = -15$',
              highlight: '$5 \\times (-3) = -15$',
            },
            {
              title: 'Step 3: 足し算を計算する',
              content:
                '$(-8) + (-15) = -(8 + 15) = -23$\n同符号（負＋負）だから絶対値の和に負の符号をつけるよ。',
              highlight: '$(-2)^3 + 5 \\times (-3) = -23$',
            },
          ],
          answer: '$-23$',
        },
        {
          id: 'math-g1-various-ex2',
          question:
            '分配法則を使って計算しよう。\n$25 \\times (-4) + 75 \\times (-4)$',
          steps: [
            {
              title: 'Step 1: 共通因数を見つける',
              content:
                '両方の項に $(-4)$ がかけてあるね。$(-4)$ でくくれるよ。',
              highlight: '共通因数: $-4$',
            },
            {
              title: 'Step 2: 分配法則を逆に使う',
              content:
                '$25 \\times (-4) + 75 \\times (-4) = (25 + 75) \\times (-4)$',
              highlight: '$(25 + 75) \\times (-4)$',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '$(25 + 75) \\times (-4) = 100 \\times (-4) = -400$',
              highlight: '$= -400$',
            },
          ],
          answer: '$-400$',
        },
        {
          id: 'math-g1-various-ex3',
          question: '$84$ を素因数分解しよう。',
          steps: [
            {
              title: 'Step 1: 最小の素数 $2$ で割る',
              content:
                '$84 \\div 2 = 42$\n$42 \\div 2 = 21$\n$21$ は $2$ で割れないので次の素数へ。',
              highlight: '$84 = 2 \\times 2 \\times 21$',
            },
            {
              title: 'Step 2: 次の素数 $3$ で割る',
              content:
                '$21 \\div 3 = 7$\n$7$ は素数なのでここで終わり。',
              highlight: '$21 = 3 \\times 7$',
            },
            {
              title: 'Step 3: まとめる',
              content:
                '$84 = 2 \\times 2 \\times 3 \\times 7 = 2^2 \\times 3 \\times 7$',
              highlight: '$84 = 2^2 \\times 3 \\times 7$',
            },
          ],
          answer: '$84 = 2^2 \\times 3 \\times 7$',
        },
        {
          id: 'math-g1-various-ex4',
          question:
            '次の計算をしよう。\n$(-3)^2$ と $-3^2$ をそれぞれ計算し、違いを説明しよう。',
          steps: [
            {
              title: 'Step 1: $(-3)^2$ を計算',
              content:
                'かっこがあるので、$-3$ 全体を $2$ 回かけるよ。\n$(-3)^2 = (-3) \\times (-3) = +9$',
              highlight: '$(-3)^2 = +9$',
            },
            {
              title: 'Step 2: $-3^2$ を計算',
              content:
                'かっこがないので、$3^2$ を先に計算してから $-$ をつけるよ。\n$-3^2 = -(3^2) = -(9) = -9$',
              highlight: '$-3^2 = -9$',
            },
            {
              title: 'Step 3: 違いをまとめる',
              content:
                '$(-3)^2 = +9$（$-3$ 全体の $2$ 乗）\n$-3^2 = -9$（$3$ の $2$ 乗にマイナスをつけたもの）\n答えの符号が逆になる！',
              highlight: '$(-3)^2 = +9$、$-3^2 = -9$',
            },
          ],
          answer: '$(-3)^2 = +9$、$-3^2 = -9$',
        },
        {
          id: 'math-g1-various-ex5',
          question:
            '次の計算をしよう。\n$(-2)^3 + 3 \\times (-4)^2 - 5$',
          steps: [
            {
              title: 'Step 1: 累乗を計算',
              content:
                '$(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$\n$(-4)^2 = (-4) \\times (-4) = 16$',
              highlight: '$(-2)^3 = -8$、$(-4)^2 = 16$',
            },
            {
              title: 'Step 2: かけ算を計算',
              content:
                '$3 \\times 16 = 48$',
              highlight: '$3 \\times 16 = 48$',
            },
            {
              title: 'Step 3: 加減を計算',
              content:
                '$-8 + 48 - 5 = 48 - 8 - 5 = 48 - 13 = 35$',
              highlight: '$(-2)^3 + 3 \\times (-4)^2 - 5 = 35$',
            },
          ],
          answer: '$35$',
        },
        {
          id: 'math-g1-various-ex6',
          question:
            '分配法則を使って計算しよう。\n$(-18) \\times 8 + (-18) \\times 12$',
          steps: [
            {
              title: 'Step 1: 共通因数を見つける',
              content:
                '両方の項に $(-18)$ がかけてあるね。$(-18)$ でくくれるよ。',
              highlight: '共通因数: $-18$',
            },
            {
              title: 'Step 2: 分配法則を逆に使う',
              content:
                '$(-18) \\times 8 + (-18) \\times 12 = (-18) \\times (8 + 12)$',
              highlight: '$(-18) \\times (8 + 12)$',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '$(-18) \\times 20 = -360$',
              highlight: '$= -360$',
            },
          ],
          answer: '$-360$',
        },
      ],
    },
    chatId: 'math-g1-various',
  },
};
