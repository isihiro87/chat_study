import type { Topic } from '../../../../../../../../data/types';

export const factoringFormulas: Topic = {
  id: 'math-g3-factoring-formulas',
  eraId: 'math-g3-expansion-factoring',
  name: '公式を使った因数分解',
  subtitle: 'かけて○足して△の数を探そう',
  icon: '🎯',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'x²+(a+b)x+ab の因数分解',
          content:
            '「かけて c、足して b」になる2つの数を見つけるのがコツ！x²+bx+c の形を見たら、かけて c・足して b になる2つの数を探そう。',
          keyPoints: [
            'x²+(a+b)x+ab = (x+a)(x+b)',
            'コツ: かけて定数項、足して x の係数になる2つの数を探す',
            '例: x²+7x+12 → かけて12、足して7 → 3と4 → (x+3)(x+4)',
          ],
        },
        {
          title: '2乗の公式を使った因数分解',
          content:
            'a²+2ab+b² や a²−2ab+b² の形を見つけたら、2乗の公式の逆で因数分解できるよ。a²−b² の形は和と差の積だ。',
          keyPoints: [
            'a²+2ab+b² = (a+b)²',
            'a²−2ab+b² = (a−b)²',
            'a²−b² = (a+b)(a−b)',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-factoring-formulas-q1',
          question: '$x^2 + 5x + 6$ を因数分解すると？',
          options: [
            '$(x+1)(x+6)$',
            '$(x+2)(x+3)$',
            '$(x+3)(x+3)$',
            '$(x+1)(x+5)$',
          ],
          correctIndex: 1,
          explanation:
            'かけて6、足して5になる2つの数は 2 と 3。だから $(x+2)(x+3)$ だよ。',
        },
        {
          id: 'math-g3-factoring-formulas-q2',
          question: '$x^2 - 16$ を因数分解すると？',
          options: [
            '$(x-4)^2$',
            '$(x+4)^2$',
            '$(x+4)(x-4)$',
            '$(x-8)(x+2)$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2-16 = x^2-4^2$ の形。$a^2-b^2=(a+b)(a-b)$ の公式で $(x+4)(x-4)$ だよ。',
        },
        {
          id: 'math-g3-factoring-formulas-q3',
          question: '$x^2 - 10x + 25$ を因数分解すると？',
          options: [
            '$(x-5)^2$',
            '$(x+5)^2$',
            '$(x-5)(x+5)$',
            '$(x-25)(x-1)$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2-10x+25 = x^2-2 \\times 5 \\times x+5^2$。$a^2-2ab+b^2=(a-b)^2$ の公式で $(x-5)^2$ だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-factoring-formulas-ex1',
          question: '次の式を因数分解しよう。\n$x^2 + 9x + 20$',
          steps: [
            {
              title: 'Step 1: かけて○、足して△を確認',
              content:
                '$x^2+9x+20$ だから「かけて 20、足して 9」になる2つの数を探すよ。',
              highlight: 'かけて20、足して9',
            },
            {
              title: 'Step 2: 組み合わせを探す',
              content:
                '$20 = 1 \\times 20$、$2 \\times 10$、$4 \\times 5$。足して9になるのは… $4+5=9$！見つけた！',
              highlight: '$4$ と $5$',
            },
            {
              title: 'Step 3: 因数分解する',
              content: '$a=4$、$b=5$ なので $(x+4)(x+5)$ が答えだよ。',
              highlight: '$(x + 4)(x + 5)$',
            },
          ],
          answer: '$(x + 4)(x + 5)$',
        },
        {
          id: 'math-g3-factoring-formulas-ex2',
          question: '次の式を因数分解しよう。\n$x^2 - 6x + 9$',
          steps: [
            {
              title: 'Step 1: 2乗の公式のパターンかチェック',
              content:
                '$x^2 - 6x + 9$。最後の $9 = 3^2$、真ん中の $6 = 2 \\times 3$。$a^2-2ab+b^2$ の形だ！',
              highlight: '$x^2 - 2 \\times 3 \\times x + 3^2$',
            },
            {
              title: 'Step 2: 公式を使って因数分解',
              content:
                '$a=x$、$b=3$ で $(a-b)^2$ の公式を使うと $(x-3)^2$ になるよ。',
              highlight: '$(x - 3)^2$',
            },
          ],
          answer: '$(x - 3)^2$',
        },
      ],
    },
    chatId: 'math-g3-factoring-formulas',
  },
};
