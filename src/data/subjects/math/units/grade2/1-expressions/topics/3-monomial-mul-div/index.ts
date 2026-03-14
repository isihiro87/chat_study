import type { Topic } from '../../../../../../../../data/types';

export const monomialMulDiv: Topic = {
  id: 'math-g2-mono-mul-div',
  eraId: 'math-g2-expressions',
  name: '単項式の乗法・除法',
  subtitle: '係数と文字を分けて計算',
  icon: '✖️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'かけ算（指数法則）',
          content:
            '単項式どうしのかけ算は、係数は係数どうし、文字は文字どうしをかけるよ。同じ文字が出てきたら指数を足すのがポイント！',
          keyPoints: [
            '係数どうしをかける（例: 3 × 5 = 15）',
            '同じ文字は指数を足す（例: x² × x³ = x⁵）',
            '例: 3x² × 5x³ = 15x⁵',
          ],
        },
        {
          title: '割り算（分数にして約分）',
          content:
            '単項式の割り算は、分数の形にしてから係数と文字をそれぞれ約分するよ。同じ文字は指数を引くんだ。',
          keyPoints: [
            '割り算 → 分数の形にする（例: 6x³ ÷ 2x = 6x³/2x）',
            '係数を約分する（例: 6/2 = 3）',
            '同じ文字は指数を引く（例: x³/x = x²）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-mono-mul-div-q1',
          question: '$4x^2 \\times 3x$ の計算結果は？',
          options: ['$7x^3$', '$12x^2$', '$12x^3$', '$7x^2$'],
          correctIndex: 2,
          explanation:
            '係数: $4 \\times 3 = 12$、文字: $x^2 \\times x = x^3$。答えは $12x^3$ だよ。',
        },
        {
          id: 'math-g2-mono-mul-div-q2',
          question: '$12a^3b \\div 4ab$ の計算結果は？',
          options: ['$3a^2$', '$3a^2b$', '$3ab$', '$8a^2$'],
          correctIndex: 0,
          explanation:
            '係数: $12 \\div 4 = 3$、文字: $\\frac{a^3}{a} = a^2$, $\\frac{b}{b} = 1$。答えは $3a^2$ だよ。',
        },
        {
          id: 'math-g2-mono-mul-div-q3',
          question: '$(-2x)^3$ の計算結果は？',
          options: ['$-6x^3$', '$-8x^3$', '$8x^3$', '$6x^3$'],
          correctIndex: 1,
          explanation:
            '$(-2)^3 = -8$、$x^3$ はそのまま。答えは $-8x^3$。マイナスの奇数乗はマイナスになるよ！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-mono-mul-div-ex1',
          question: '次の計算をしよう。\n$3a^2b \\times (-2ab^2)$',
          steps: [
            {
              title: 'Step 1: 係数をかけよう',
              content:
                '係数は $3 \\times (-2) = -6$ だね。',
              highlight: '係数: $3 \\times (-2) = -6$',
            },
            {
              title: 'Step 2: 文字をかけよう',
              content:
                '$a$ の部分: $a^2 \\times a = a^3$\n$b$ の部分: $b \\times b^2 = b^3$',
              highlight: '$a^2 \\times a = a^3$, $b \\times b^2 = b^3$',
            },
            {
              title: 'Step 3: 合わせて完成',
              content: '係数と文字を合わせると $-6a^3b^3$ になるよ。',
              highlight: '$-6a^3b^3$',
            },
          ],
          answer: '$-6a^3b^3$',
        },
        {
          id: 'math-g2-mono-mul-div-ex2',
          question: '次の計算をしよう。\n$8x^4y^2 \\div 2x^2y$',
          steps: [
            {
              title: 'Step 1: 分数にしよう',
              content:
                '割り算を分数にすると $\\frac{8x^4y^2}{2x^2y}$ になるよ。',
              highlight: '$\\frac{8x^4y^2}{2x^2y}$',
            },
            {
              title: 'Step 2: 係数と文字をそれぞれ約分',
              content:
                '係数: $8 \\div 2 = 4$\n$x$ の部分: $x^4 \\div x^2 = x^2$（指数を引く: $4 - 2 = 2$）\n$y$ の部分: $y^2 \\div y = y$（指数を引く: $2 - 1 = 1$）',
              highlight: '$4x^2y$',
            },
          ],
          answer: '$4x^2y$',
        },
      ],
    },
    chatId: 'math-g2-mono-mul-div',
  },
};
