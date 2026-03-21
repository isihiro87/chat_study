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
            '$(-2)^2 = 4$ だけど $-2^2 = -4$（かっこの有無に注意！）'
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
            '4. 最後に加法・減法を計算する'
          ],
        },
        {
          title: '分配法則',
          content:
            '$a \\times (b + c) = a \\times b + a \\times c$ という法則を「分配法則」と言うよ。計算を工夫するときにとても便利なんだ。',
          keyPoints: [
            '$5 \\times (3 + 7) = 5 \\times 3 + 5 \\times 7 = 15 + 35 = 50$',
            '$(-4) \\times (6 - 2) = (-4) \\times 6 + (-4) \\times (-2) = -24 + 8 = -16$',
            '逆に共通因数でくくることもできる: $3 \\times 8 + 3 \\times 2 = 3 \\times (8 + 2) = 30$'
          ],
        },
        {
          title: '素数と素因数分解',
          content:
            '$1$ とその数自身のほかに約数がない自然数を「素数」と言うよ。自然数を素数だけの積で表すことを「素因数分解」と言うんだ。',
          keyPoints: [
            '素数: $2, 3, 5, 7, 11, 13, \\ldots$（$1$ は素数ではない）',
            '$12 = 2^2 \\times 3$（$12$ の素因数分解）',
            '$60 = 2^2 \\times 3 \\times 5$（$60$ の素因数分解）'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-var-fc3', front: '$(-3)^2 = 9$、$-3^2 = -9$', explanation: 'かっこ付きは $-3$ 全体を $2$ 回かける。かっこなしは $3^2$ を計算してから $-$ をつける。', back: '$(-3)^2$ と $-3^2$ の違いは？', difficulty: 'basic' },
      { id: 'math-g1-var-fc4', front: '$-8$', explanation: '$(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$。負の数を奇数回かけると負。', back: '$(-2)^3$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc9', front: '素数ではない', explanation: '$1$ の約数は $1$ だけ。素数は約数が $2$ 個の自然数。', back: '$1$ は素数か？', difficulty: 'basic' },
      { id: 'math-g1-var-fc10', front: '素数', explanation: '唯一の偶数の素数。$4, 6, 8, \\ldots$ は $2$ で割れるから素数ではない。', back: '$2$ は素数か？', difficulty: 'basic' },
      { id: 'math-g1-var-fc11', front: '$2, 3, 5, 7, 11, 13, 17, 19$', explanation: '$8$ 個ある。$4,6,8,9,10,12,14,15,16,18,20$ は素数ではない。', back: '$20$ 以下の素数をすべて挙げると？', difficulty: 'basic' },
      { id: 'math-g1-var-fc27', front: '$2 \\times 3^2 \\times 5$', explanation: '$90 = 2 \\times 45 = 2 \\times 9 \\times 5 = 2 \\times 3^2 \\times 5$', back: '$90$ を素因数分解すると？', difficulty: 'advanced' },
      { id: 'math-g1-var-fc29', front: '$9$', explanation: '$3^2 = 3 \\times 3 = 9$。', back: '$3^2$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc30', front: '$16$', explanation: '$2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$。', back: '$2^4$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc31', front: '$+1$', explanation: '負の数を偶数回（$4$ 回）かけるから正。$1^4 = 1$。', back: '$(-1)^4$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc32', front: '$-1$', explanation: '負の数を奇数回（$5$ 回）かけるから負。$1^5 = 1$。', back: '$(-1)^5$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc33', front: '$25$', explanation: '$5^2 = 5 \\times 5 = 25$。', back: '$5^2$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc34', front: '$+25$', explanation: '負の偶数乗→正。$(-5)^2 = 5^2 = 25$。', back: '$(-5)^2$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc35', front: '$-0.01$', explanation: 'かっこなし → $-(0.1^2) = -(0.01) = -0.01$。', back: '$-0.1^2$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-var-fc38', front: '$-2$', explanation: 'かけ算先: $(-3) \\times 2 = -6$。$4 + (-6) = -2$。', back: '$4 + (-3) \\times 2$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-var-fc39', front: '$4$', explanation: 'かけ算先: $(-5) \\times (-2) = 10$。$10 - 6 = 4$。', back: '$(-5) \\times (-2) - 6$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-var-fc40', front: '$-3$', explanation: 'かっこ: $9-12=-3$。$(-3) \\div 3 = -1$。$-1 - 2 = -3$。', back: '$(9 - 12) \\div 3 - 2$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-var-fc41', front: '$40$', explanation: 'わり算先: $(-20) \\div (-2) = 10$。$30 + 10 = 40$。', back: '$30 - 20 \\div (-2)$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-var-fc42', front: '$3400$', explanation: '分配法則（逆）: $34 \\times (82 + 18) = 34 \\times 100 = 3400$。', back: '$34 \\times 82 + 34 \\times 18$ を分配法則で計算すると？', difficulty: 'standard' },
      { id: 'math-g1-var-fc43', front: '$-1700$', explanation: '$(25 + 75) \\times (-17) = 100 \\times (-17) = -1700$。', back: '$25 \\times (-17) + 75 \\times (-17)$ を工夫して計算すると？', difficulty: 'advanced' },
      { id: 'math-g1-var-fc44', front: '素数ではない（$9 = 3 \\times 3$）', explanation: '$9$ は $3$ で割り切れるので素数ではない。', back: '$9$ は素数か？', difficulty: 'basic' },
      { id: 'math-g1-var-fc45', front: '$2 \\times 3^2$', explanation: '$18 = 2 \\times 9 = 2 \\times 3^2$。', back: '$18$ を素因数分解すると？', difficulty: 'standard' },
      { id: 'math-g1-var-fc46', front: '$2^4 \\times 5$', explanation: '$80 = 16 \\times 5 = 2^4 \\times 5$。', back: '$80$ を素因数分解すると？', difficulty: 'standard' },
      { id: 'math-g1-var-fc47', front: '$2 \\times 3 \\times 5^2$', explanation: '$150 = 2 \\times 75 = 2 \\times 3 \\times 25 = 2 \\times 3 \\times 5^2$。', back: '$150$ を素因数分解すると？', difficulty: 'advanced' },
      { id: 'math-g1-var-fc48', front: '$2^2 \\times 3^2 \\times 7$', explanation: '$252 = 4 \\times 63 = 2^2 \\times 9 \\times 7 = 2^2 \\times 3^2 \\times 7$。', back: '$252$ を素因数分解すると？', difficulty: 'advanced' },
      { id: 'math-g1-var-fc49', front: '$27$', explanation: '$3^3 = 3 \\times 3 \\times 3 = 27$。', back: '$3^3$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc50', front: '$-27$', explanation: '負の奇数乗→負。$(-3)^3 = -27$。', back: '$(-3)^3$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc51', front: '$-25$', explanation: 'かっこなし → $-(5^2) = -25$。$(-5)^2 = +25$ との違いに注意。', back: '$-5^2$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc52', front: '$7$', explanation: '累乗先: $(-2)^2 = 4$。$3 + 4 = 7$。', back: '$3 + (-2)^2$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc53', front: '$-7$', explanation: '累乗先: $3^2 = 9$。$2 - 9 = -7$。', back: '$2 - 3^2$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc54', front: '$5$', explanation: 'かっこ先: $3-7=-4$。$(-4) \\times (-2) = 8$。$8 - 3 = 5$。', back: '$(3-7) \\times (-2) - 3$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-var-fc55', front: '$2^2 \\times 3$', explanation: '$12 = 4 \\times 3 = 2^2 \\times 3$。', back: '$12$ を素因数分解すると？', difficulty: 'standard' },
      { id: 'math-g1-var-fc56', front: '$2 \\times 5^2$', explanation: '$50 = 2 \\times 25 = 2 \\times 5^2$。', back: '$50$ を素因数分解すると？', difficulty: 'standard' },
      { id: 'math-g1-var-fc57', front: '$2^3 \\times 3$', explanation: '$24 = 8 \\times 3 = 2^3 \\times 3$。', back: '$24$ を素因数分解すると？', difficulty: 'standard' },
      { id: 'math-g1-var-fc58', front: '$11$', explanation: '累乗先: $(-3)^2 = 9$。$2 + 9 = 11$。', back: '$2 + (-3)^2$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-var-fc59', front: '$2^3 \\times 5^2$', explanation: '$200 = 8 \\times 25 = 2^3 \\times 5^2$。', back: '$200$ を素因数分解すると？', difficulty: 'advanced' },
      { id: 'math-g1-var-fc60', front: '$-5$', explanation: '累乗先: $2^2=4$。$4 \\times (-3) = -12$。$-12 + 7 = -5$。', back: '$2^2 \\times (-3) + 7$ の計算結果は？', difficulty: 'advanced' },
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
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q2',
          question: '$-3^2$ の計算結果は？（かっこなし）',
          options: ['$-6$', '$+9$', '$-9$', '$+6$'],
          correctIndex: 2,
          explanation:
            'かっこがないときは $-(3^2) = -(9) = -9$ だよ。$(-3)^2 = 9$ との違いに注意！',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q3',
          question: '$5 + 3 \\times (-2)$ の計算結果は？',
          options: ['$-16$', '$+1$', '$+16$', '$-1$'],
          correctIndex: 3,
          explanation:
            'かけ算を先に計算するよ。$3 \\times (-2) = -6$ だから、$5 + (-6) = 5 - 6 = -1$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q4',
          question: '$36$ を素因数分解すると？',
          options: [
            '$2^2 \\times 3^2$',
            '$4 \\times 9$',
            '$2 \\times 18$',
            '$6^2$'
          ],
          correctIndex: 0,
          explanation:
            '$36 = 4 \\times 9 = 2^2 \\times 3^2$ だよ。素因数分解は素数だけの積で表すんだ。$6^2$ は $6$ が素数でないからダメだね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q5',
          question: '次のうち、素数はどれ？',
          options: ['$1$', '$9$', '$11$', '$15$'],
          correctIndex: 2,
          explanation:
            '$11$ は $1$ と $11$ 以外に約数がないから素数だよ。$1$ は素数ではなく、$9 = 3^2$、$15 = 3 \\times 5$ は素数ではないよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q6',
          question: '$(-2)^4$ の計算結果は？',
          options: ['$-16$', '$+8$', '$+16$', '$-8$'],
          correctIndex: 2,
          explanation:
            '$(-2)^4 = (-2) \\times (-2) \\times (-2) \\times (-2)$。\n負の数を偶数回（$4$ 回）かけるから結果は正で $+16$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q7',
          question: '$-2^4$ の計算結果は？（かっこなし）',
          options: ['$+16$', '$-8$', '$+8$', '$-16$'],
          correctIndex: 3,
          explanation:
            'かっこがないから $-(2^4) = -(16) = -16$ だよ。$(-2)^4 = +16$ との違いに注意！',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q8',
          question: '$(-1)^2 + (-1)^3$ の計算結果は？',
          options: ['$0$', '$-2$', '$+2$', '$+1$'],
          correctIndex: 0,
          explanation:
            '$(-1)^2 = 1$（偶数乗→正）、$(-1)^3 = -1$（奇数乗→負）。$1 + (-1) = 0$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q9',
          question: '$60$ を素因数分解すると？',
          options: [
            '$2^2 \\times 3 \\times 5$',
            '$4 \\times 15$',
            '$2 \\times 30$',
            '$6 \\times 10$'
          ],
          correctIndex: 0,
          explanation:
            '$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$ だよ。素因数分解は素数だけの積で表すんだ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q10',
          question: '$6 - \\{8 \\times (-2 - 5)\\} \\div (-14)$ の計算結果は？',
          options: ['$-2$', '$2$', '$10$', '$-10$'],
          correctIndex: 1,
          explanation:
            'かっこ内: $-2-5=-7$。$8 \\times (-7) = -56$。\n$(-56) \\div (-14) = 4$。$6 - 4 = 2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-various-q11',
          question: '$99 \\times 7$ を分配法則で工夫して計算すると？',
          options: ['$793$', '$700$', '$706$', '$693$'],
          correctIndex: 3,
          explanation:
            '$(100 - 1) \\times 7 = 100 \\times 7 - 1 \\times 7 = 700 - 7 = 693$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q12',
          question: '次のうち、自然数の集合について正しいのはどれ？',
          options: [
            '自然数 $-$ 自然数は必ず自然数',
            '自然数 $\\div$ 自然数は必ず自然数',
            '自然数 $+$ 自然数は必ず自然数',
            '$0$ は自然数'
          ],
          correctIndex: 2,
          explanation:
            '自然数＋自然数は必ず自然数になるよ。引き算は $3-5=-2$ のように自然数にならないことがあるし、割り算は $1 \\div 3 = \\frac{1}{3}$ のようになるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q13',
          question: '$(-1)^{10}$ の計算結果は？',
          options: ['$-10$', '$+10$', '$-1$', '$+1$'],
          correctIndex: 3,
          explanation: '$(-1)$ を偶数回（$10$ 回）かけるから $+1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q14',
          question: '$2 + 3 \\times (-4)$ の計算結果は？',
          options: ['$-20$', '$+14$', '$-10$', '$+10$'],
          correctIndex: 2,
          explanation: '乗法を先に。$3 \\times (-4) = -12$。\n$2 + (-12) = -10$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q15',
          question: '$90$ を素因数分解すると？',
          options: ['$2 \\times 3^2 \\times 5$', '$2 \\times 45$', '$9 \\times 10$', '$3 \\times 30$'],
          correctIndex: 0,
          explanation: '$90 = 2 \\times 45 = 2 \\times 9 \\times 5 = 2 \\times 3^2 \\times 5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q16',
          question: '$(-5)^2 + (-5)^3$ の計算結果は？',
          options: ['$+150$', '$-100$', '$-150$', '$+100$'],
          correctIndex: 1,
          explanation: '$(-5)^2 = 25$（偶数乗→正）、$(-5)^3 = -125$（奇数乗→負）。$25 + (-125) = -100$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q17',
          question: '$\{(-3) + 5\} \\times (-2)$ の計算結果は？',
          options: ['$-4$', '$+4$', '$-16$', '$+16$'],
          correctIndex: 0,
          explanation: 'かっこの中: $(-3) + 5 = 2$。\n$2 \\times (-2) = -4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q18',
          question: '次のうち、素数でないものはどれ？',
          options: ['$2$', '$7$', '$21$', '$13$'],
          correctIndex: 2,
          explanation: '$21 = 3 \\times 7$ だから素数ではないよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q19',
          question: '$4^2 \\times (-1)^3$ の計算結果は？',
          options: ['$+16$', '$+12$', '$-16$', '$-12$'],
          correctIndex: 2,
          explanation: '$4^2 = 16$、$(-1)^3 = -1$。\n$16 \\times (-1) = -16$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q20',
          question: '$120$ を素因数分解すると？',
          options: ['$2^3 \\times 3 \\times 5$', '$2^2 \\times 3 \\times 10$', '$4 \\times 30$', '$2^3 \\times 15$'],
          correctIndex: 0,
          explanation: '$120 = 2^3 \\times 15 = 2^3 \\times 3 \\times 5$ だよ。素数の積だけで表すのが素因数分解。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q21',
          question: '$(- 4)^2 \\div 8 + 3$ の計算結果は？',
          options: ['$1$', '$5$', '$-1$', '$7$'],
          correctIndex: 1,
          explanation: '$(-4)^2 = 16$。$16 \\div 8 = 2$。\n$2 + 3 = 5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q22',
          question: '$(-2)^5$ の計算結果は？',
          options: ['$+32$', '$-32$', '$+10$', '$-10$'],
          correctIndex: 1,
          explanation: '負の数を奇数回（$5$ 回）かけるから負。$2^5 = 32$ で $-32$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-various-q23',
          question: '$15 \\times (-6) + 15 \\times (-4)$ を分配法則で計算すると？',
          options: ['$-30$', '$+150$', '$+30$', '$-150$'],
          correctIndex: 3,
          explanation: '$15 \\times \{(-6) + (-4)\} = 15 \\times (-10) = -150$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-various-q24',
          question: '$2^2 \\times 3$ と $2 \\times 3^2$ は等しい？',
          options: ['等しい（ともに $12$）', '等しくない（$12$ と $18$）', '等しくない（$6$ と $9$）', '等しい（ともに $18$）'],
          correctIndex: 1,
          explanation: '$2^2 \\times 3 = 4 \\times 3 = 12$、$2 \\times 3^2 = 2 \\times 9 = 18$ で異なるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-various-q25',
          question: '$50$ 以下の素数はいくつある？',
          options: ['$12$ 個', '$10$ 個', '$20$ 個', '$15$ 個'],
          correctIndex: 3,
          explanation: '$2,3,5,7,11,13,17,19,23,29,31,37,41,43,47$ の $15$ 個だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-various-q26',
          question: '$3 \\times (-2)^2 - 4 \\times (-3)$ の計算結果は？',
          options: ['$0$', '$24$', '$-24$', '$12$'],
          correctIndex: 1,
          explanation: '$(-2)^2 = 4$。$3 \\times 4 = 12$。$4 \\times (-3) = -12$。\n$12 - (-12) = 12 + 12 = 24$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-various-q27',
          question: '$180$ を素因数分解すると？',
          options: ['$2^2 \\times 3^2 \\times 5$', '$2 \\times 3 \\times 30$', '$4 \\times 45$', '$2^3 \\times 3 \\times 5$'],
          correctIndex: 0,
          explanation: '$180 = 4 \\times 45 = 2^2 \\times 9 \\times 5 = 2^2 \\times 3^2 \\times 5$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-various-q28',
          question: '$(-6)^2 \\div (-3)^2$ の計算結果は？',
          options: ['$+4$', '$-4$', '$+2$', '$-2$'],
          correctIndex: 0,
          explanation: '$(-6)^2 = 36$、$(-3)^2 = 9$。$36 \\div 9 = 4$。\n偶数乗は正だから $+4$ だよ。',
          difficulty: 'advanced',
        }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
          ],
          answer: '$-360$',
        }
      ],
    },
    chatId: 'math-g1-various',
  },
};
