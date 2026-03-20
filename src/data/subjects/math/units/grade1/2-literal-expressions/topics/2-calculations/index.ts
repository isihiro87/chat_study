import type { Topic } from '../../../../../../../../data/types';

export const literalCalc: Topic = {
  id: 'math-g1-lit-calc',
  eraId: 'math-g1-literal-exp',
  name: '文字式の計算',
  subtitle: '項・係数と同類項の計算',
  icon: '🧮',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '項と係数',
          content:
            '文字式の中で、+や-で区切られた一つひとつの部分を「項」と言うよ。項の中の数の部分を「係数」と言うんだ。',
          keyPoints: [
            '$5x - 3y + 2$ の項は $5x$, $-3y$, $2$ の3つ',
            '$5x$ の係数は $5$、$-3y$ の係数は $-3$',
            '数だけの項（$2$ など）を「定数項」と呼ぶ',
          ],
        },
        {
          title: '同じ文字の項をまとめる',
          content:
            '文字の部分が同じ項（同類項）は、係数どうしを足したり引いたりしてまとめることができるよ。分配法則を使って考えるとわかりやすい！',
          keyPoints: [
            '$3x + 5x = (3 + 5)x = 8x$（分配法則の逆）',
            '$7a - 2a = (7 - 2)a = 5a$',
            '文字の部分が違う項はまとめられない（$3x + 2y$ はそのまま）',
          ],
        },
        {
          title: 'かっこのはずし方',
          content:
            'かっこの前の符号によって、はずし方が変わるよ。前が+ならそのまま、前が-なら符号を全部変えるんだ。',
          keyPoints: [
            '前が+: $+(3x - 2) = 3x - 2$（そのまま）',
            '前が-: $-(3x - 2) = -3x + 2$（符号が全部変わる）',
            'かっこを外してから同類項をまとめよう',
          ],
        },
        {
          title: '文字式と数の乗法・除法',
          content:
            '文字式に数をかけたり割ったりするときは、係数だけを計算するよ。',
          keyPoints: [
            '$(4x + 6) \\times 2 = 8x + 12$（各項に2をかける）',
            '$(6x - 9) \\div 3 = 2x - 3$（各項を3で割る）',
            '分配法則を使って、かっこの中の全部の項に計算する',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g1-lit-calc-fc6',
        front: '$a(b + c) = ab + ac$', back: '分配法則とは？',
        explanation: 'かっこの外の数を、かっこの中の各項にかける法則。\n例: $3(2x - 5) = 6x - 15$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc7',
        front: 'そのまま外す（符号は変わらない）', back: 'かっこの前が + のとき、\nかっこの外し方は？',
        explanation: '$+(3x - 2) = 3x - 2$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc8',
        front: 'かっこの中の各項の符号をすべて変える', back: 'かっこの前が - のとき、\nかっこの外し方は？',
        explanation: '$-(3x - 2) = -3x + 2$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc9',
        front: 'かっこを外して同類項をまとめる', back: '式の加法のやり方は？',
        explanation: '前が+だからそのまま外す。\n$(3x + 2) + (5x - 4) = 3x + 2 + 5x - 4 = 8x - 2$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc10',
        front: '引く式のかっこを外すとき符号を全部変えて、同類項をまとめる', back: '式の減法のやり方は？',
        explanation: '$(5a + 3) - (2a - 1) = 5a + 3 - 2a + 1 = 3a + 4$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc11',
        front: '係数に数をかける。文字はそのまま。', back: '文字式 $\\times$ 数 のルールは？',
        explanation: '$4x \\times 6 = 24x$\n$(-3a) \\times 5 = -15a$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc12',
        front: '係数を数で割る。文字はそのまま。', back: '文字式 $\\div$ 数 のルールは？',
        explanation: '$18a \\div 3 = 6a$\n$(-42x) \\div (-6) = 7x$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc14',
        front: '分母と整数を約分してから、分子にかける', back: '分数の式に整数をかけるには？',
        explanation: '$\\dfrac{3x + 1}{2} \\times 4 = 2(3x + 1) = 6x + 2$',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc15',
        front: '係数は $1$', back: '$x$ の係数が書かれていないとき、\n係数はいくつ？',
        explanation: '$x = 1 \\cdot x$ だから。\n同様に $-x$ の係数は $-1$。',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc16',
        front: '$-12x + 21$', back: '2項の式に数をかける計算\n$(4x - 7) \\times (-3)$ は？',
        explanation: '分配法則で各項にかける。\n$4x \\times (-3) = -12x$\n$(-7) \\times (-3) = 21$',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc17',
        front: '$2x - 3$', back: '2項の式を数で割る計算\n$(6x - 9) \\div 3$ は？',
        explanation: '各項を3で割る。\n$6x \\div 3 = 2x$\n$(-9) \\div 3 = -3$',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc18',
        front: '$5x + 7$', back: '$2(3x + 1) - (x - 5)$ を計算すると？',
        explanation: '1. 各かっこを展開: $6x + 2 - x + 5$\n2. 同類項をまとめ: $5x + 7$',
        difficulty: 'standard',
      },
      { id: 'math-g1-lit-calc-fc19', front: '$2$ 次式', back: '$3x^2 + 2x - 1$ は何次式？', explanation: '各項の次数を見る。$3x^2$ は2次、$2x$ は1次、$-1$ は0次。\n最高次数が2なので2次式。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc20', front: '$3x^2 + 2x - 5$', back: '$2x - 5 + 3x^2$ を整理すると？', explanation: '次数の高い順に並べる: $3x^2 + 2x - 5$', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc21', front: '$\\dfrac{5x}{6}$', back: '$\\dfrac{x}{2} + \\dfrac{x}{3}$ を計算すると？', explanation: '通分してから計算する。\n$\\dfrac{3x}{6} + \\dfrac{2x}{6} = \\dfrac{5x}{6}$', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc22', front: '$3a - 2b$', back: '$5a - 3b - 2a + b$ を整理すると？', explanation: '$a$ の項: $5a - 2a = 3a$\n$b$ の項: $-3b + b = -2b$\n定数項: なし', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc23', front: '$-6x + 8$', back: '$-2(3x - 4)$ を展開すると？', explanation: '各項にかっこの外の数をかける。\n$-2 \\times 3x = -6x$\n$-2 \\times (-4) = 8$', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc24', front: '$12x + 6$', back: '$(4x + 2) \\div \\dfrac{1}{3}$ を計算すると？', explanation: '分数で割るときは逆数をかける。\n$(4x + 2) \\times 3 = 12x + 6$', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc25', front: '$\\dfrac{x}{6}$', back: '$\\dfrac{x}{2} - \\dfrac{x}{3}$ を計算すると？', explanation: '$\\dfrac{x}{2} - \\dfrac{x}{3} = \\dfrac{3x - 2x}{6} = \\dfrac{x}{6}$', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc26', front: '$11$', back: '$3x + 2y - 1$ で $x = 2, y = 1$ のとき、式の値は？', explanation: '式を整理してから代入する。\n$3 \\times 2 + 2 \\times 1 - 1 = 6 + 2 - 1 = 7$\n…ではなく、まず代入: $6 + 2 - 1 = 7$', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc27', front: '$5a + b + 3$', back: '$(3a + 2b + 1) + (2a - b + 2)$ を計算すると？', explanation: '$a$ の項: $3a + 2a = 5a$\n$b$ の項: $2b + (-b) = b$\n定数項: $1 + 2 = 3$', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc28', front: '$5x + 7$', back: '$2x + 3 + 3x + 4$ を整理すると？', explanation: '同類項を集めてまとめる。\n$x$ の項: $2x + 3x = 5x$\n定数項: $3 + 4 = 7$', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc29', front: '$3x$, $-5y$, $7$', back: '$3x - 5y + 7$ の項をすべて答えると？', explanation: '+や-で区切られた各部分が項。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc30', front: '$3$', back: '$3x$ の係数は？', explanation: '項の中の数の部分が係数。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc31', front: '$-5$', back: '$-5y$ の係数は？', explanation: '符号も含めて係数。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc32', front: '$-1$', back: '$-a$ の係数は？', explanation: '$-a = -1 \\times a$ だから係数は $-1$。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc33', front: '$8x$', back: '$5x + 3x$ を計算すると？', explanation: '同類項の係数をまとめる。$(5+3)x = 8x$。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc34', front: '$5a$', back: '$9a - 4a$ を計算すると？', explanation: '$(9-4)a = 5a$。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc35', front: '$2x + 9$', back: '$3x + 7 - x + 2$ を計算すると？', explanation: '$x$ の項: $3x - x = 2x$。定数項: $7 + 2 = 9$。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc36', front: '$8a - 8$', back: '$6a - 3 + 2a - 5$ を計算すると？', explanation: '$a$ の項: $6a + 2a = 8a$。定数項: $-3 - 5 = -8$。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc37', front: '$6x + 4$', back: '$-2x + 5 + 8x - 1$ を計算すると？', explanation: '$x$ の項: $-2x + 8x = 6x$。定数項: $5 - 1 = 4$。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc38', front: '$-3y - 6$', back: '$4y - 9 - 7y + 3$ を計算すると？', explanation: '$y$ の項: $4y - 7y = -3y$。定数項: $-9 + 3 = -6$。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc39', front: '$-4x + 3$（符号がすべて変わる）', back: '$-(4x - 3)$ のかっこを外すと？', explanation: 'かっこの前が $-$ なので、中の各項の符号を反転。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc40', front: '$-2a - 7$', back: '$-(2a + 7)$ のかっこを外すと？', explanation: '$(+2a)$ → $(-2a)$、$(+7)$ → $(-7)$。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc41', front: '$8x - 2$', back: '$(3x + 2) + (5x - 4)$ を計算すると？', explanation: 'かっこを外して同類項をまとめる。$3x + 5x = 8x$、$2 - 4 = -2$。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc42', front: '$4a - 6$', back: '$(7a - 1) - (3a + 5)$ を計算すると？', explanation: '$7a - 1 - 3a - 5 = 4a - 6$。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc43', front: '$24x$', back: '$4x \\times 6$ を計算すると？', explanation: '係数にだけ数をかける。$4 \\times 6 = 24$。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc44', front: '$-15a$', back: '$(-3a) \\times 5$ を計算すると？', explanation: '$-3 \\times 5 = -15$。文字はそのまま。', difficulty: 'basic' },
      { id: 'math-g1-lit-calc-fc45', front: '$6x - 15$', back: '$3(2x - 5)$ を展開すると？', explanation: '分配法則: $3 \\times 2x = 6x$、$3 \\times (-5) = -15$。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc46', front: '$-12a - 8$', back: '$-4(3a + 2)$ を展開すると？', explanation: '$-4 \\times 3a = -12a$、$-4 \\times 2 = -8$。', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc47', front: '$14x + 38$', back: '$2(4x - 5) + 6(x + 8)$ を計算すると？', explanation: '$8x - 10 + 6x + 48 = 14x + 38$。', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc48', front: '$-2a + 18$', back: '$5(2a + 3) - 3(4a - 1)$ を計算すると？', explanation: '$10a + 15 - 12a + 3 = -2a + 18$。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-lit-calc-q1',
          question: '$7x - 3x$ の計算結果は？',
          options: ['$10x$', '$4$', '$4x$', '$21x$'],
          correctIndex: 2,
          explanation:
            '同類項の係数をまとめるよ。$7x - 3x = (7 - 3)x = 4x$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q2',
          question: '$(5a + 3) - (2a - 1)$ の計算結果は？',
          options: ['$3a + 2$', '$3a + 4$', '$7a + 2$', '$7a + 4$'],
          correctIndex: 1,
          explanation:
            'かっこの前が-だから符号を変えて $5a + 3 - 2a + 1 = 3a + 4$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q3',
          question: '$(6x + 4) \\div 2$ の計算結果は？',
          options: ['$6x + 2$', '$3x + 4$', '$12x + 8$', '$3x + 2$'],
          correctIndex: 3,
          explanation:
            '$6x \\div 2 = 3x$、$4 \\div 2 = 2$\n各項を $2$ で割って $3x + 2$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q4',
          question: '$4x + 3 - 2x + 5$ を計算すると？',
          options: ['$6x + 8$', '$2x + 8$', '$2x - 2$', '$6x - 2$'],
          correctIndex: 1,
          explanation:
            '$x$ の項: $4x - 2x = 2x$、定数項: $3 + 5 = 8$\n答えは $2x + 8$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q5',
          question: '$3(2a - 5)$ の計算結果は？',
          options: ['$6a - 5$', '$5a - 15$', '$6a - 15$', '$2a - 15$'],
          correctIndex: 2,
          explanation:
            '$3 \\times 2a = 6a$、$3 \\times (-5) = -15$\n分配法則で各項に $3$ をかけて $6a - 15$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q6',
          question: '$-7a + 3b + 1$ で $a$ の係数は？',
          options: ['$7$', '$-7$', '$3$', '$1$'],
          correctIndex: 1,
          explanation:
            '$-7a$ の数の部分が係数だよ。マイナスも含めて $-7$ が正解。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q7',
          question: '次のうち一次式はどれ？',
          options: ['$x^2 + 3$', '$4x - 7$', '$5$', '$x^2 - x$'],
          correctIndex: 1,
          explanation:
            '一次式は文字の次数が1の項だけを含む式。$4x - 7$ は $x$ が1次の項だから一次式だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q8',
          question: '$(-5x) \\times 4$ の計算結果は？',
          options: ['$-x$', '$20x$', '$-9x$', '$-20x$'],
          correctIndex: 3,
          explanation:
            '$(-5) \\times 4 = -20$\n係数どうしをかけて $-20x$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q9',
          question: '$(4x - 7) \\times (-3)$ の計算結果は？',
          options: ['$-12x - 21$', '$-12x + 21$', '$12x - 21$', '$12x + 21$'],
          correctIndex: 1,
          explanation:
            '$4x \\times (-3) = -12x$、$(-7) \\times (-3) = 21$\n分配法則で各項に $-3$ をかけて $-12x + 21$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q10',
          question: '$5(2a + 3) - 3(4a - 1)$ の計算結果は？',
          options: ['$-2a + 12$', '$22a + 12$', '$-2a + 18$', '$2a + 18$'],
          correctIndex: 2,
          explanation:
            '$5(2a + 3) = 10a + 15$、$3(4a - 1) = 12a - 3$\n$10a + 15 - 12a + 3 = -2a + 18$',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q11',
          question: '$\\dfrac{3x + 6}{3}$ を簡単にすると？',
          options: ['$3x + 2$', '$x + 6$', '$x + 2$', '$3x + 6$'],
          correctIndex: 2,
          explanation:
            '各項を $3$ で割るよ。$3x \\div 3 = x$、$6 \\div 3 = 2$。答えは $x + 2$ だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q12',
          question: '$-2(x + 6) + 4(3x - 1)$ の計算結果は？',
          options: ['$10x + 8$', '$-10x - 16$', '$10x - 16$', '$2x - 16$'],
          correctIndex: 2,
          explanation:
            '$-2(x + 6) = -2x - 12$、$4(3x - 1) = 12x - 4$\n$-2x - 12 + 12x - 4 = 10x - 16$',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q13',
          question: '$\\dfrac{x}{2} + \\dfrac{x}{3}$ の計算結果は？',
          options: ['$\\dfrac{x}{5}$', '$\\dfrac{2x}{5}$', '$\\dfrac{5x}{6}$', '$\\dfrac{x}{6}$'],
          correctIndex: 2,
          explanation: '通分して $\\dfrac{3x}{6} + \\dfrac{2x}{6} = \\dfrac{5x}{6}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q14',
          question: '$5a - 3b - 2a + b$ を計算すると？',
          options: ['$7a - 4b$', '$3a - 2b$', '$3a - 4b$', '$7a - 2b$'],
          correctIndex: 1,
          explanation: '$a$: $5a - 2a = 3a$、$b$: $-3b + b = -2b$\n答え $3a - 2b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q15',
          question: '$(3x + 9) \\div (-3)$ の計算結果は？',
          options: ['$-x - 3$', '$-x + 3$', '$x - 3$', '$x + 3$'],
          correctIndex: 0,
          explanation: '$3x \\div (-3) = -x$、$9 \\div (-3) = -3$\n各項を $-3$ で割って $-x - 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q16',
          question: '$-4(2a - 3)$ の計算結果は？',
          options: ['$-8a - 12$', '$-8a + 12$', '$8a - 12$', '$8a + 12$'],
          correctIndex: 1,
          explanation: '$-4 \\times 2a = -8a$、$-4 \\times (-3) = +12$\n答え $-8a + 12$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q17',
          question: '$(2x - 1) + (3x + 4)$ の計算結果は？',
          options: ['$5x - 5$', '$x + 3$', '$5x + 5$', '$5x + 3$'],
          correctIndex: 3,
          explanation: '同類項をまとめて $2x + 3x = 5x$、$-1 + 4 = 3$。答え $5x + 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q18',
          question: '$(7a + 2) - (4a + 5)$ の計算結果は？',
          options: ['$3a - 3$', '$3a + 7$', '$11a + 7$', '$11a - 3$'],
          correctIndex: 0,
          explanation: '引くかっこの符号変換: $7a + 2 - 4a - 5 = 3a - 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q19',
          question: '$2(x + 3) + 3(x - 1)$ の計算結果は？',
          options: ['$5x + 9$', '$5x + 3$', '$5x - 3$', '$5x + 6$'],
          correctIndex: 1,
          explanation: '$2x + 6 + 3x - 3 = 5x + 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q20',
          question: '$\\dfrac{2x + 4}{2}$ を簡単にすると？',
          options: ['$x + 4$', '$2x + 2$', '$x + 2$', '$x + 1$'],
          correctIndex: 2,
          explanation: '各項を $2$ で割って $x + 2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q21',
          question: '$6x \\times (-\\dfrac{1}{3})$ の計算結果は？',
          options: ['$-2x$', '$2x$', '$-18x$', '$18x$'],
          correctIndex: 0,
          explanation: '$6 \\times (-\\dfrac{1}{3}) = -2$\n係数を計算して $-2x$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q22',
          question: '$3(a + 2b) - 2(2a + b)$ の計算結果は？',
          options: ['$7a + 4b$', '$-a + 4b$', '$a + 4b$', '$-a + 8b$'],
          correctIndex: 1,
          explanation: '$3a + 6b - 4a - 2b = -a + 4b$',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q23',
          question: '$-x$ の係数は？',
          options: ['$0$', '$1$', '$x$', '$-1$'],
          correctIndex: 3,
          explanation: '$-x = -1 \\times x$ だから係数は $-1$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q24',
          question: '$(8x - 4) \\div 4 - (x + 1)$ の計算結果は？',
          options: ['$x - 2$', '$x + 2$', '$3x - 2$', '$x$'],
          correctIndex: 0,
          explanation: '$(8x - 4) \\div 4 = 2x - 1$\n$2x - 1 - x - 1 = x - 2$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q25',
          question: '$\\dfrac{x}{3} - \\dfrac{x}{6}$ の計算結果は？',
          options: ['$\\dfrac{x}{6}$', '$\\dfrac{x}{3}$', '$\\dfrac{x}{2}$', '$\\dfrac{x}{9}$'],
          correctIndex: 0,
          explanation: '通分して $\\dfrac{2x}{6} - \\dfrac{x}{6} = \\dfrac{x}{6}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q26',
          question: '$4(x - 3) \\div 2$ の計算結果は？',
          options: ['$2x - 6$', '$4x - 6$', '$2x - 3$', '$2x - 12$'],
          correctIndex: 0,
          explanation: '$4(x - 3) = 4x - 12$\n$(4x - 12) \\div 2 = 2x - 6$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q27',
          question: '$a = 3$ のとき $2a^2 - 5a + 1$ の値は？',
          options: ['$4$', '$-2$', '$28$', '$10$'],
          correctIndex: 0,
          explanation: '$2(3)^2 - 5(3) + 1 = 18 - 15 + 1 = 4$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q28',
          question: '$3(-2x + 1) + 4(x - 2)$ の計算結果は？',
          options: ['$-2x - 5$', '$2x - 5$', '$-2x + 5$', '$-10x - 5$'],
          correctIndex: 0,
          explanation: '$-6x + 3 + 4x - 8 = -2x - 5$',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-lit-calc-ex1',
          question:
            '次の計算をしよう。\n$(3x + 7) + (5x - 4)$',
          steps: [
            {
              title: 'Step 1: かっこを外す',
              content:
                'どちらもかっこの前が + なので、そのまま外すよ。\n$3x + 7 + 5x - 4$',
              highlight: '$3x + 7 + 5x - 4$',
            },
            {
              title: 'Step 2: 同類項をまとめる',
              content:
                '$x$ の項: $3x + 5x = 8x$\n定数項: $7 - 4 = 3$',
              highlight: '$8x + 3$',
            },
          ],
          answer: '$8x + 3$',
        },
        {
          id: 'math-g1-lit-calc-ex2',
          question:
            '次の計算をしよう。\n$(8a - 6) \\div 2$',
          steps: [
            {
              title: 'Step 1: 各項を2で割る',
              content:
                '分配法則で、かっこの中の各項を $2$ で割るよ。\n$8a \\div 2 = 4a$\n$-6 \\div 2 = -3$',
              highlight: '$4a - 3$',
            },
          ],
          answer: '$4a - 3$',
        },
        {
          id: 'math-g1-lit-calc-ex3',
          question:
            '次の計算をしよう。\n$2(3x + 1) - (x - 5)$',
          steps: [
            {
              title: 'Step 1: かっこを外す',
              content:
                '$2(3x + 1)$ は分配法則で $6x + 2$\n$-(x - 5)$ は符号を変えて $-x + 5$',
              highlight: '$6x + 2 - x + 5$',
            },
            {
              title: 'Step 2: 同類項をまとめる',
              content:
                '$x$ の項: $6x - x = 5x$\n定数項: $2 + 5 = 7$',
              highlight: '$5x + 7$',
            },
          ],
          answer: '$5x + 7$',
        },
        {
          id: 'math-g1-lit-calc-ex4',
          question:
            '次の計算をしよう。\n$(-3a) \\times 5$',
          steps: [
            {
              title: 'Step 1: 係数どうしをかける',
              content:
                '文字式に数をかけるときは、係数に数をかけるよ。\n$(-3) \\times 5 = -15$',
              highlight: '$(-3) \\times 5 = -15$',
            },
            {
              title: 'Step 2: 文字をつける',
              content:
                '文字の部分はそのまま。\n$-15a$',
              highlight: '$-15a$',
            },
          ],
          answer: '$-15a$',
        },
        {
          id: 'math-g1-lit-calc-ex5',
          question:
            '次の計算をしよう。\n$2(3a - 1) - 3(a - 4)$',
          steps: [
            {
              title: 'Step 1: 最初のかっこを展開',
              content:
                '$2(3a - 1)$ に分配法則を使うよ。\n$2 \\times 3a = 6a$、$2 \\times (-1) = -2$\nだから $6a - 2$',
              highlight: '$6a - 2$',
            },
            {
              title: 'Step 2: 2つ目のかっこを展開',
              content:
                '$-3(a - 4)$ に分配法則を使うよ。\n$(-3) \\times a = -3a$、$(-3) \\times (-4) = 12$\nだから $-3a + 12$',
              highlight: '$-3a + 12$',
            },
            {
              title: 'Step 3: 同類項をまとめる',
              content:
                '$6a - 2 - 3a + 12$\n$a$ の項: $6a - 3a = 3a$\n定数項: $-2 + 12 = 10$',
              highlight: '$3a + 10$',
            },
          ],
          answer: '$3a + 10$',
        },
        {
          id: 'math-g1-lit-calc-ex6',
          question:
            '次の計算をしよう。\n$\\dfrac{3x + 6}{3} - (x - 2)$',
          steps: [
            {
              title: 'Step 1: 分数の式を簡単にする',
              content:
                '$\\dfrac{3x + 6}{3}$ は各項を $3$ で割るよ。\n$3x \\div 3 = x$、$6 \\div 3 = 2$\nだから $x + 2$',
              highlight: '$x + 2$',
            },
            {
              title: 'Step 2: かっこを外す',
              content:
                '$(x + 2) - (x - 2)$\n2つ目のかっこの前が - だから符号を変えるよ。\n$x + 2 - x + 2$',
              highlight: '$x + 2 - x + 2$',
            },
            {
              title: 'Step 3: 同類項をまとめる',
              content:
                '$x$ の項: $x - x = 0$\n定数項: $2 + 2 = 4$',
              highlight: '$4$',
            },
          ],
          answer: '$4$',
        },
      ],
    },
    chatId: 'math-g1-lit-calc',
  },
};
