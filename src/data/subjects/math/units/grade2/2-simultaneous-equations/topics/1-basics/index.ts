import type { Topic } from '../../../../../../../../data/types';

export const simulEqBasics: Topic = {
  id: 'math-g2-simul-eq-basics',
  eraId: 'math-g2-simultaneous-eq',
  name: '連立方程式の基本',
  subtitle: '2つの式で2つの未知数を求める',
  icon: '🔗',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '二元一次方程式って？',
          content:
            'x と y の2つの文字をふくむ一次方程式を「二元一次方程式」と言うよ。たとえば x + y = 5 は二元一次方程式。この式を満たす x と y の組み合わせは（1, 4）（2, 3）（3, 2）…のように無限にあるんだ。',
          keyPoints: [
            '二元一次方程式: x と y の2つの文字をふくむ一次方程式',
            '解は（x, y）の組で表す（例: x + y = 5 の解は (1, 4), (2, 3) など無限にある）',
            '1つの式だけでは解が1つに決まらない',
          ],
        },
        {
          title: '連立方程式とは',
          content:
            '2つの二元一次方程式を組み合わせたものを「連立方程式」と言うよ。2つの式を同時に満たす x, y の値を求めることが「連立方程式を解く」ということ！',
          keyPoints: [
            '連立方程式: 2つの式を組み合わせたもの',
            '解: 2つの式を同時に満たす x, y の値の組',
            '2つの式があれば、解が1つに決まる！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-simul-eq-basics-q1',
          question: 'x + y = 5, x − y = 1 を同時に満たす x, y の値は？',
          options: ['x = 2, y = 3', 'x = 3, y = 2', 'x = 4, y = 1', 'x = 1, y = 4'],
          correctIndex: 1,
          explanation:
            'x = 3, y = 2 のとき、3 + 2 = 5 ✓、3 − 2 = 1 ✓。2つの式を両方満たすのはこの組だけだよ。',
        },
        {
          id: 'math-g2-simul-eq-basics-q2',
          question: '二元一次方程式 x + y = 7 の解はいくつある？',
          options: ['1つ', '2つ', '7つ', '無限にある'],
          correctIndex: 3,
          explanation:
            '1つの二元一次方程式だけでは、解は無限にあるよ。(1,6)(2,5)(3,4)…のように何通りもあるんだ。',
        },
        {
          id: 'math-g2-simul-eq-basics-q3',
          question: '連立方程式を「解く」とはどういうこと？',
          options: [
            '式を展開すること',
            '1つの式を満たす値を見つけること',
            '2つの式を同時に満たす値を見つけること',
            '式をグラフに描くこと',
          ],
          correctIndex: 2,
          explanation:
            '連立方程式を解くとは、2つの式を同時に満たす x, y の値の組を求めることだよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-simul-eq-basics-ex1',
          question:
            'x + y = 6, x − y = 2 を同時に満たす x, y の値を見つけよう。',
          steps: [
            {
              title: 'Step 1: x に値を入れて試そう',
              content:
                'x = 1 のとき、式①から y = 5。式②に入れると 1 − 5 = −4 ≠ 2。ダメだね。',
              highlight: 'x = 1 → y = 5 → 1 − 5 = −4 ✗',
            },
            {
              title: 'Step 2: 別の値を試そう',
              content:
                'x = 4 のとき、式①から y = 2。式②に入れると 4 − 2 = 2 ✓。両方成り立った！',
              highlight: 'x = 4, y = 2 → 式①: 4 + 2 = 6 ✓, 式②: 4 − 2 = 2 ✓',
            },
          ],
          answer: 'x = 4, y = 2',
        },
        {
          id: 'math-g2-simul-eq-basics-ex2',
          question:
            '2x + y = 8, x + y = 5 について、x = 3, y = 2 が解かどうか確かめよう。',
          steps: [
            {
              title: 'Step 1: 式①に代入',
              content: '2 × 3 + 2 = 6 + 2 = 8 ✓ 式①は成り立つ！',
              highlight: '2(3) + 2 = 8 ✓',
            },
            {
              title: 'Step 2: 式②に代入',
              content: '3 + 2 = 5 ✓ 式②も成り立つ！',
              highlight: '3 + 2 = 5 ✓',
            },
            {
              title: 'Step 3: 結論',
              content:
                '2つの式を両方満たすので、x = 3, y = 2 はこの連立方程式の解だよ。',
              highlight: 'x = 3, y = 2 は解',
            },
          ],
          answer: 'x = 3, y = 2 は連立方程式の解である',
        },
      ],
    },
    chatId: 'math-g2-simul-eq-basics',
  },
};
