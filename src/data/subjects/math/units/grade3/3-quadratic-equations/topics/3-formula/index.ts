import type { Topic } from '../../../../../../../../data/types';

export const quadFormula: Topic = {
  id: 'math-g3-quad-formula',
  eraId: 'math-g3-quadratic-eq',
  name: '平方完成と解の公式',
  subtitle: 'どんな二次方程式でもOK',
  icon: '🏆',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '平方完成（(x+m)²=nの形にする）',
          content:
            '因数分解できない二次方程式は「平方完成」で解けるよ。x²+bx を (x+m)² − m² の形に変換するテクニックだよ。',
          keyPoints: [
            'x² + bx = (x + b/2)² − (b/2)²',
            '例: x² + 6x = (x+3)² − 9',
            '(x+m)² = n の形にすれば x+m = ±√n で解ける',
          ],
        },
        {
          title: '解の公式 x = (−b±√(b²−4ac)) / 2a',
          content:
            '平方完成の考え方を一般化したのが「解の公式」。ax²+bx+c=0 の a, b, c を代入するだけで解が求まる万能公式だよ！',
          keyPoints: [
            '解の公式: x = (−b ± √(b²−4ac)) / 2a',
            'b²−4ac（判別式）が正なら解2つ、0なら解1つ、負なら解なし',
            'どんな二次方程式でもこの公式で解ける！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-formula-q1',
          question: '$x^2 + 6x$ を平方完成すると？',
          options: [
            '$(x+3)^2 - 9$',
            '$(x+6)^2 - 36$',
            '$(x+3)^2 + 9$',
            '$(x+6)^2 - 6$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2 + 6x = (x+3)^2 - 9$。$b$ の半分 $= 3$、$3^2 = 9$ を引くよ。',
        },
        {
          id: 'math-g3-quad-formula-q2',
          question: '$x^2 + 2x - 3 = 0$ を解の公式で解くと？（$a=1, b=2, c=-3$）',
          options: [
            '$x = 1, x = -3$',
            '$x = -1, x = 3$',
            '$x = 1, x = 3$',
            '$x = -1, x = -3$',
          ],
          correctIndex: 0,
          explanation:
            '$x = \\frac{-2 \\pm \\sqrt{4+12}}{2} = \\frac{-2 \\pm 4}{2}$。$x = 1$ または $x = -3$ だよ。',
        },
        {
          id: 'math-g3-quad-formula-q3',
          question: '解の公式の判別式 $b^2-4ac$ が $0$ のとき、解はいくつ？',
          options: ['0個', '1個', '2個', '無限にある'],
          correctIndex: 1,
          explanation:
            '$b^2-4ac = 0$ のとき $\\sqrt{0} = 0$ なので $\\pm$ の部分が消えて解は1つ（重解）だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-formula-ex1',
          question: '平方完成で解こう。\n$x^2 + 4x - 5 = 0$',
          steps: [
            {
              title: 'Step 1: $x^2 + 4x$ を平方完成',
              content:
                '$x^2 + 4x = (x+2)^2 - 4$ だから、$(x+2)^2 - 4 - 5 = 0$。',
              highlight: '$(x+2)^2 - 9 = 0$',
            },
            {
              title: 'Step 2: $(x+2)^2 = 9$ を解く',
              content: '$x+2 = \\pm 3$。$x = -2+3 = 1$ または $x = -2-3 = -5$。',
              highlight: '$x = 1, x = -5$',
            },
          ],
          answer: '$x = 1, x = -5$',
        },
        {
          id: 'math-g3-quad-formula-ex2',
          question: '解の公式で解こう。\n$2x^2 + 5x - 3 = 0$',
          steps: [
            {
              title: 'Step 1: $a, b, c$ を確認',
              content: '$a = 2, b = 5, c = -3$ を解の公式に代入するよ。',
              highlight: '$x = \\frac{-5 \\pm \\sqrt{25+24}}{4}$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$x = \\frac{-5 \\pm \\sqrt{49}}{4} = \\frac{-5 \\pm 7}{4}$。$x = \\frac{2}{4} = \\frac{1}{2}$ または $x = \\frac{-12}{4} = -3$。',
              highlight: '$x = \\frac{1}{2}, x = -3$',
            },
          ],
          answer: '$x = \\frac{1}{2}, x = -3$',
        },
      ],
    },
    chatId: 'math-g3-quad-formula',
  },
};
