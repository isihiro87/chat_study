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
        id: 'math-g1-lit-calc-fc1',
        front: '文字式の中で、+や-で区切られた一つひとつの部分のこと。\n例: $5x - 3y + 2$ の項は $5x$, $-3y$, $2$', back: '「項」とは何？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc2',
        front: '項の中の数の部分のこと。\n例: $5x$ の係数は $5$、$-3y$ の係数は $-3$', back: '「係数」とは何？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc3',
        front: '文字を含まない、数だけの項のこと。\n例: $3x + 7$ の定数項は $7$', back: '「定数項」とは何？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc4',
        front: '文字の次数が1の項を含み、2次以上の項を含まない式のこと。\n例: $3x + 2$, $-a + 5$ は一次式', back: '「一次式」とは何？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc5',
        front: '文字の部分が同じ項のこと。同類項どうしは係数をまとめて計算できる。\n例: $3x$ と $5x$ は同類項 → $3x + 5x = 8x$', back: '「同類項」とは何？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc6',
        front: '$a(b + c) = ab + ac$\nかっこの外の数を、かっこの中の各項にかける法則。\n例: $3(2x - 5) = 6x - 15$', back: '分配法則とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc7',
        front: 'そのまま外す（符号は変わらない）。\n$+(3x - 2) = 3x - 2$', back: 'かっこの前が + のとき、\nかっこの外し方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc8',
        front: 'かっこの中の各項の符号をすべて変える。\n$-(3x - 2) = -3x + 2$', back: 'かっこの前が - のとき、\nかっこの外し方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc9',
        front: 'かっこを外して（前が+だからそのまま）、同類項をまとめる。\n$(3x + 2) + (5x - 4) = 3x + 2 + 5x - 4 = 8x - 2$', back: '式の加法のやり方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc10',
        front: '引く式のかっこを外すとき符号を全部変えて、同類項をまとめる。\n$(5a + 3) - (2a - 1) = 5a + 3 - 2a + 1 = 3a + 4$', back: '式の減法のやり方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc11',
        front: '係数に数をかける。文字はそのまま。\n$4x \\times 6 = 24x$\n$(-3a) \\times 5 = -15a$', back: '文字式 $\\times$ 数 のルールは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc12',
        front: '係数を数で割る。文字はそのまま。\n$18a \\div 3 = 6a$\n$(-42x) \\div (-6) = 7x$', back: '文字式 $\\div$ 数 のルールは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-calc-fc13',
        front: '文字が1つだけかけられている項のこと。\n例: $3x$, $-2a$, $y$ は1次の項。\n$x^2$ や $ab$ は1次の項ではない。', back: '1次の項とは何？',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc14',
        front: '分母と整数を約分してから、分子にかける。\n$\\dfrac{3x + 1}{2} \\times 4 = 2(3x + 1) = 6x + 2$', back: '分数の式に整数をかけるには？',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc15',
        front: '係数は $1$。\n$x = 1 \\cdot x$ だから。\n同様に $-x$ の係数は $-1$。', back: '$x$ の係数が書かれていないとき、\n係数はいくつ？',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc16',
        front: '分配法則で各項にかける。\n$4x \\times (-3) = -12x$\n$(-7) \\times (-3) = 21$\n答え: $-12x + 21$', back: '2項の式に数をかける計算\n$(4x - 7) \\times (-3)$ は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc17',
        front: '各項を3で割る。\n$6x \\div 3 = 2x$\n$(-9) \\div 3 = -3$\n答え: $2x - 3$', back: '2項の式を数で割る計算\n$(6x - 9) \\div 3$ は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-calc-fc18',
        front: '1. 各かっこを分配法則で展開する\n2. かっこを全部外す\n3. 同類項をまとめる\n例: $2(3x+1)-(x-5) = 6x+2-x+5 = 5x+7$', back: '複数のかっこがある式の計算手順は？',
        difficulty: 'standard',
      },
      { id: 'math-g1-lit-calc-fc19', front: '式の中の各項の文字の次数のうち最も大きいもの。$3x^2 + 2x - 1$ は2次式。', back: '多項式の次数とは？', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc20', front: '同類項をまとめ、次数の高い順に書くと整理された式になる', back: '式を整理するとはどういうこと？', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc21', front: '分母をそろえて（通分して）から計算する。$\dfrac{x}{2} + \dfrac{x}{3} = \dfrac{3x}{6} + \dfrac{2x}{6} = \dfrac{5x}{6}$', back: '分数係数の文字式の加法は？', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc22', front: '$a$ の項: $5a - 2a = 3a$、$b$ の項: $-3b + b = -2b$、定数項: なし → $3a - 2b$', back: '$5a - 3b - 2a + b$ を整理すると？', difficulty: 'standard' },
      { id: 'math-g1-lit-calc-fc23', front: '各項にかっこの外の数をかける。$-2(3x - 4) = -6x + 8$', back: 'マイナスの数をかっこの式にかけるとき注意することは？符号が全部変わる！', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc24', front: '逆数をかける。$(4x + 2) \div \dfrac{1}{3} = (4x + 2) \times 3 = 12x + 6$', back: '文字式を分数で割るときのやり方は？', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc25', front: '$\dfrac{x}{2} - \dfrac{x}{3} = \dfrac{3x - 2x}{6} = \dfrac{x}{6}$', back: '$\dfrac{x}{2} - \dfrac{x}{3}$ を計算すると？', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc26', front: '先に式を整理してから代入する方が計算が楽になる', back: '式の値を求めるコツは？', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc27', front: '$a$ の項と $b$ の項と定数項をそれぞれ縦にそろえて書く', back: '縦書き（筆算）で多項式を足すコツは？', difficulty: 'advanced' },
      { id: 'math-g1-lit-calc-fc28', front: '交換法則と結合法則を使って、同類項を隣り合わせにしてからまとめる', back: '式の計算で同類項を効率的にまとめるには？', difficulty: 'advanced' },
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
            '各項を $2$ で割るよ。$6x \\div 2 = 3x$、$4 \\div 2 = 2$。答えは $3x + 2$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q4',
          question: '$4x + 3 - 2x + 5$ を計算すると？',
          options: ['$2x + 8$', '$6x + 8$', '$2x - 2$', '$6x - 2$'],
          correctIndex: 0,
          explanation:
            '$x$ の項: $4x - 2x = 2x$、定数項: $3 + 5 = 8$。答えは $2x + 8$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q5',
          question: '$3(2a - 5)$ の計算結果は？',
          options: ['$6a - 5$', '$5a - 15$', '$6a - 15$', '$2a - 15$'],
          correctIndex: 2,
          explanation:
            '分配法則で各項に $3$ をかけるよ。$3 \\times 2a = 6a$、$3 \\times (-5) = -15$。答えは $6a - 15$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q6',
          question: '$-7a + 3b + 1$ で $a$ の係数は？',
          options: ['$-7$', '$7$', '$3$', '$1$'],
          correctIndex: 0,
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
            '係数どうしをかけるよ。$(-5) \\times 4 = -20$ だから $-20x$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q9',
          question: '$(4x - 7) \\times (-3)$ の計算結果は？',
          options: ['$-12x - 21$', '$-12x + 21$', '$12x - 21$', '$12x + 21$'],
          correctIndex: 1,
          explanation:
            '分配法則で各項に $-3$ をかけるよ。$4x \\times (-3) = -12x$、$(-7) \\times (-3) = 21$。答えは $-12x + 21$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q10',
          question: '$5(2a + 3) - 3(4a - 1)$ の計算結果は？',
          options: ['$-2a + 12$', '$22a + 12$', '$-2a + 18$', '$2a + 18$'],
          correctIndex: 2,
          explanation:
            '$5(2a + 3) = 10a + 15$、$3(4a - 1) = 12a - 3$。$10a + 15 - 12a + 3 = -2a + 18$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-calc-q11',
          question: '$\\dfrac{3x + 6}{3}$ を簡単にすると？',
          options: ['$3x + 2$', '$x + 6$', '$3x + 6$', '$x + 2$'],
          correctIndex: 3,
          explanation:
            '各項を $3$ で割るよ。$3x \\div 3 = x$、$6 \\div 3 = 2$。答えは $x + 2$ だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q12',
          question: '$-2(x + 6) + 4(3x - 1)$ の計算結果は？',
          options: ['$10x - 16$', '$10x + 8$', '$-10x - 16$', '$2x - 16$'],
          correctIndex: 0,
          explanation:
            '$-2(x + 6) = -2x - 12$、$4(3x - 1) = 12x - 4$。$-2x - 12 + 12x - 4 = 10x - 16$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q13',
          question: '$\dfrac{x}{2} + \dfrac{x}{3}$ の計算結果は？',
          options: ['$\dfrac{x}{5}$', '$\dfrac{2x}{5}$', '$\dfrac{5x}{6}$', '$\dfrac{x}{6}$'],
          correctIndex: 2,
          explanation: '通分して $\dfrac{3x}{6} + \dfrac{2x}{6} = \dfrac{5x}{6}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q14',
          question: '$5a - 3b - 2a + b$ を計算すると？',
          options: ['$3a - 2b$', '$7a - 4b$', '$3a - 4b$', '$7a - 2b$'],
          correctIndex: 0,
          explanation: '$a$: $5a - 2a = 3a$。$b$: $-3b + b = -2b$。答え $3a - 2b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q15',
          question: '$(3x + 9) \div (-3)$ の計算結果は？',
          options: ['$-x - 3$', '$-x + 3$', '$x - 3$', '$x + 3$'],
          correctIndex: 0,
          explanation: '各項を $-3$ で割る。$3x \div (-3) = -x$、$9 \div (-3) = -3$。答え $-x - 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q16',
          question: '$-4(2a - 3)$ の計算結果は？',
          options: ['$-8a + 12$', '$-8a - 12$', '$8a - 12$', '$8a + 12$'],
          correctIndex: 0,
          explanation: '$-4 \times 2a = -8a$、$-4 \times (-3) = +12$。答え $-8a + 12$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q17',
          question: '$(2x - 1) + (3x + 4)$ の計算結果は？',
          options: ['$5x + 3$', '$5x - 5$', '$x + 3$', '$5x + 5$'],
          correctIndex: 0,
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
          options: ['$5x + 3$', '$5x + 9$', '$5x - 3$', '$5x + 6$'],
          correctIndex: 0,
          explanation: '$2x + 6 + 3x - 3 = 5x + 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q20',
          question: '$\dfrac{2x + 4}{2}$ を簡単にすると？',
          options: ['$x + 4$', '$2x + 2$', '$x + 2$', '$x + 1$'],
          correctIndex: 2,
          explanation: '各項を $2$ で割って $x + 2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q21',
          question: '$6x \times (-\dfrac{1}{3})$ の計算結果は？',
          options: ['$-2x$', '$2x$', '$-18x$', '$18x$'],
          correctIndex: 0,
          explanation: '係数を計算: $6 \times (-\dfrac{1}{3}) = -2$。答え $-2x$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q22',
          question: '$3(a + 2b) - 2(2a + b)$ の計算結果は？',
          options: ['$-a + 4b$', '$7a + 4b$', '$a + 4b$', '$-a + 8b$'],
          correctIndex: 0,
          explanation: '$3a + 6b - 4a - 2b = -a + 4b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-calc-q23',
          question: '$-x$ の係数は？',
          options: ['$0$', '$1$', '$x$', '$-1$'],
          correctIndex: 3,
          explanation: '$-x = -1 \times x$ だから係数は $-1$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q24',
          question: '$(8x - 4) \div 4 - (x + 1)$ の計算結果は？',
          options: ['$x - 2$', '$x + 2$', '$3x - 2$', '$x$'],
          correctIndex: 0,
          explanation: '$(8x - 4) \div 4 = 2x - 1$。$2x - 1 - x - 1 = x - 2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q25',
          question: '$\dfrac{x}{3} - \dfrac{x}{6}$ の計算結果は？',
          options: ['$\dfrac{x}{6}$', '$\dfrac{x}{3}$', '$\dfrac{x}{2}$', '$\dfrac{x}{9}$'],
          correctIndex: 0,
          explanation: '通分して $\dfrac{2x}{6} - \dfrac{x}{6} = \dfrac{x}{6}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q26',
          question: '$4(x - 3) \div 2$ の計算結果は？',
          options: ['$2x - 6$', '$4x - 6$', '$2x - 3$', '$2x - 12$'],
          correctIndex: 0,
          explanation: '$4(x - 3) = 4x - 12$。$(4x - 12) \div 2 = 2x - 6$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q27',
          question: '$a = 3$ のとき $2a^2 - 5a + 1$ の値は？',
          options: ['$4$', '$-2$', '$28$', '$10$'],
          correctIndex: 0,
          explanation: '$2(3)^2 - 5(3) + 1 = 18 - 15 + 1 = 4$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-calc-q28',
          question: '$3(-2x + 1) + 4(x - 2)$ の計算結果は？',
          options: ['$-2x - 5$', '$2x - 5$', '$-2x + 5$', '$-10x - 5$'],
          correctIndex: 0,
          explanation: '$-6x + 3 + 4x - 8 = -2x - 5$ だよ。',
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
