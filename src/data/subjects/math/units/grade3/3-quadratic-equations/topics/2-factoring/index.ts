import type { Topic } from '../../../../../../../../data/types';

export const quadEqFactoring: Topic = {
  id: 'math-g3-quad-eq-factoring',
  eraId: 'math-g3-quadratic-eq',
  name: '因数分解で解く',
  subtitle: 'A×B=0ならA=0またはB=0',
  icon: '🔧',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'A×B=0の原則',
          content:
            '2つの数をかけて0になるなら、少なくともどちらか一方は0。これが二次方程式を因数分解で解くときの大原則だよ。',
          keyPoints: [
            'A × B = 0 ならば A = 0 または B = 0',
            '(x−2)(x−3) = 0 なら x−2 = 0 または x−3 = 0',
            '答え: x = 2 または x = 3',
          ],
        },
        {
          title: '因数分解して解く手順',
          content:
            '右辺を0にして、左辺を因数分解。あとは「A×B=0」の原則を使えばOK。中3の因数分解がここで活きるよ！',
          keyPoints: [
            '手順①: 右辺を0にする（移項して整理）',
            '手順②: 左辺を因数分解する',
            '手順③: 各因数 = 0 として x の値を求める',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-eq-factoring-q1',
          question: '$(x - 4)(x + 1) = 0$ の解は？',
          options: [
            '$x = 4, x = 1$',
            '$x = -4, x = 1$',
            '$x = 4, x = -1$',
            '$x = -4, x = -1$',
          ],
          correctIndex: 2,
          explanation:
            '$x - 4 = 0$ → $x = 4$、$x + 1 = 0$ → $x = -1$。よって $x = 4, -1$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-factoring-q2',
          question: '$x^2 - 5x + 6 = 0$ の解は？',
          options: [
            '$x = 1, x = 6$',
            '$x = 2, x = 3$',
            '$x = -2, x = -3$',
            '$x = -1, x = -6$',
          ],
          correctIndex: 1,
          explanation:
            '$x^2 - 5x + 6 = (x-2)(x-3) = 0$。$x = 2$ または $x = 3$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-factoring-q3',
          question: '$x^2 + x - 12 = 0$ の解は？',
          options: [
            '$x = 3, x = -4$',
            '$x = -3, x = 4$',
            '$x = 2, x = -6$',
            '$x = 6, x = -2$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2 + x - 12 = (x+4)(x-3) = 0$。$x = -4$ または $x = 3$ だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-eq-factoring-ex1',
          question: '次の二次方程式を解こう。\n$x^2 - 5x + 6 = 0$',
          steps: [
            {
              title: 'Step 1: 因数分解する',
              content:
                'かけて6、たして $-5$ になる2数を探すと、$-2$ と $-3$。$(x-2)(x-3) = 0$ だよ。',
              highlight: '$(x-2)(x-3) = 0$',
            },
            {
              title: 'Step 2: $A \\times B = 0$ の原則を使う',
              content: '$x-2 = 0$ → $x = 2$、$x-3 = 0$ → $x = 3$。',
              highlight: '$x = 2, x = 3$',
            },
          ],
          answer: '$x = 2, x = 3$',
        },
        {
          id: 'math-g3-quad-eq-factoring-ex2',
          question: '次の二次方程式を解こう。\n$x^2 - 6x = 0$',
          steps: [
            {
              title: 'Step 1: 共通因数をくくり出す',
              content: '$x^2 - 6x = x(x - 6)$ と因数分解できるよ。',
              highlight: '$x(x - 6) = 0$',
            },
            {
              title: 'Step 2: $A \\times B = 0$ の原則を使う',
              content: '$x = 0$ または $x - 6 = 0$ → $x = 6$。$x = 0$ を忘れないでね！',
              highlight: '$x = 0, x = 6$',
            },
          ],
          answer: '$x = 0, x = 6$',
        },
      ],
    },
    chatId: 'math-g3-quad-eq-factoring',
  },
};
