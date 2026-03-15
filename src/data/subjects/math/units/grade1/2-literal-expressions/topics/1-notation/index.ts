import type { Topic } from '../../../../../../../../data/types';

export const literalNotation: Topic = {
  id: 'math-g1-lit-notation',
  eraId: 'math-g1-literal-exp',
  name: '文字式の表し方',
  subtitle: '×や÷を省いた表し方をマスター',
  icon: '🔤',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '数量を文字で表す',
          content:
            'わからない数や変わる数を、$a$ や $x$ などの文字を使って表すことができるよ。文字を使うと、いろいろな場面の数量をひとつの式で表せるんだ。',
          keyPoints: [
            '1個 $a$ 円のりんごを5個買った代金 → $5a$ 円',
            '時速 $x$ km で3時間走った道のり → $3x$ km',
            '文字を使うと、数が変わっても同じ式で表せる',
          ],
        },
        {
          title: '乗法記号×を省くルール',
          content:
            '文字式では、かけ算の「×」の記号を省略するよ。そのとき、数を文字の前に書く、アルファベット順に書くなどのルールがあるんだ。',
          keyPoints: [
            '×の記号は省略する（例: $a \\times b$ → $ab$）',
            '数は文字の前に書く（例: $x \\times 3$ → $3x$）',
            '1は省略する（例: $1 \\times a$ → $a$）、$-1$ も符号だけ（$-a$）',
            '同じ文字の積は指数で表す（例: $a \\times a$ → $a^2$）',
          ],
        },
        {
          title: '除法記号÷は分数で表す',
          content:
            '文字式では、割り算の「÷」は使わず、分数の形で書くよ。',
          keyPoints: [
            '$a \\div b$ → $\\dfrac{a}{b}$',
            '$x \\div 3$ → $\\dfrac{x}{3}$',
            '÷は絶対に使わない！必ず分数にする',
          ],
        },
        {
          title: '代入と式の値',
          content:
            '文字に具体的な数を当てはめることを「代入」と言うよ。代入して計算した結果を「式の値」と言うんだ。',
          keyPoints: [
            '代入 = 文字に数を当てはめること',
            '式の値 = 代入して計算した結果',
            '負の数を代入するときは、かっこをつける（例: $x = -2$ なら $3x = 3 \\times (-2) = -6$）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g1-lit-notation-q1',
          question: '$3 \\times a \\times a$ を文字式で表すと？',
          options: ['$3a$', '$3a^2$', '$3 + a^2$', '$a^3$'],
          correctIndex: 1,
          explanation:
            '$3 \\times a \\times a$ は、数の $3$ を前に、$a$ が2個かけ合わされているので $3a^2$ と表すよ。',
        },
        {
          id: 'math-g1-lit-notation-q2',
          question: '$x \\div 5$ を文字式で表すと？',
          options: ['$5x$', '$x - 5$', '$\\dfrac{x}{5}$', '$\\dfrac{5}{x}$'],
          correctIndex: 2,
          explanation:
            '÷は分数で表すのがルール！$x \\div 5 = \\dfrac{x}{5}$ だよ。',
        },
        {
          id: 'math-g1-lit-notation-q3',
          question: '$a \\times b \\times (-1)$ を文字式で表すと？',
          options: ['$ab$', '$-ab$', '$-1ab$', '$a(-b)$'],
          correctIndex: 1,
          explanation:
            '$-1$ をかけるときは、$-1$ の「1」を省略して $-ab$ と書くよ。',
        },
        {
          id: 'math-g1-lit-notation-q4',
          question: '$2x + 3$ に $x = -4$ を代入すると、式の値はいくつ？',
          options: ['$-5$', '$11$', '$5$', '$-11$'],
          correctIndex: 0,
          explanation:
            '$2 \\times (-4) + 3 = -8 + 3 = -5$ だよ。負の数を代入するときはかっこをつけて計算しよう。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-lit-notation-ex1',
          question:
            '次の式を文字式の表し方のルールにしたがって書きなおそう。\n$a \\times 4 \\times b$',
          steps: [
            {
              title: 'Step 1: 数を文字の前に書く',
              content:
                '$a \\times 4 \\times b$ の数は $4$。数を一番前に出そう。',
              highlight: '$4 \\times a \\times b$',
            },
            {
              title: 'Step 2: ×を省略する',
              content:
                'かけ算の×を全部省略するよ。文字はアルファベット順に並べよう。',
              highlight: '$4ab$',
            },
          ],
          answer: '$4ab$',
        },
        {
          id: 'math-g1-lit-notation-ex2',
          question:
            '$3a$ に $a = -2$ を代入して、式の値を求めよう。',
          steps: [
            {
              title: 'Step 1: 文字に数を代入する',
              content:
                '$a = -2$ を代入するよ。$3a = 3 \\times (-2)$\n負の数はかっこをつけることを忘れずに！',
              highlight: '$3 \\times (-2)$',
            },
            {
              title: 'Step 2: 計算する',
              content: '$3 \\times (-2) = -6$',
              highlight: '$-6$',
            },
          ],
          answer: '$-6$',
        },
        {
          id: 'math-g1-lit-notation-ex3',
          question:
            '次の式を文字式の表し方のルールにしたがって書きなおそう。\n$x \\times x \\div y$',
          steps: [
            {
              title: 'Step 1: 同じ文字の積を指数で表す',
              content: '$x \\times x = x^2$ だね。',
              highlight: '$x^2 \\div y$',
            },
            {
              title: 'Step 2: ÷を分数にする',
              content: '÷は分数で表すよ。',
              highlight: '$\\dfrac{x^2}{y}$',
            },
          ],
          answer: '$\\dfrac{x^2}{y}$',
        },
      ],
    },
    chatId: 'math-g1-lit-notation',
  },
};
