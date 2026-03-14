import type { Topic } from '../../../../../../../../data/types';

export const rateOfChange: Topic = {
  id: 'math-g3-rate-of-change',
  eraId: 'math-g3-quadratic-func',
  name: '変化の割合',
  subtitle: '一次関数との大きな違い',
  icon: '📊',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '変化の割合の計算',
          content:
            '変化の割合は「y の増加量 ÷ x の増加量」で求めるよ。y = ax² では、x が p から q まで変化するとき、変化の割合 = a(p + q) という公式が成り立つんだ。一次関数では変化の割合は常に a（傾き）で一定だったけど、y = ax² では区間によって変わるのが大きな違い！',
          image: {
            src: '/images/math/grade3/rate-of-change.svg',
            alt: '変化の割合',
            caption: '区間によって傾きが変わる',
          },
          keyPoints: [
            '変化の割合 = y の増加量 ÷ x の増加量',
            'y = ax² では変化の割合 = a(p + q)（x が p から q に変化）',
            '区間によって変化の割合が異なる',
          ],
        },
        {
          title: '一次関数との違い',
          content:
            '一次関数 y = ax + b では変化の割合は常に a で一定だったね。でも y = ax² では変化の割合が区間ごとに変わるんだ。これは放物線が曲線だから、場所によって傾きが違うことを意味しているよ。',
          keyPoints: [
            '一次関数: 変化の割合 = a（常に一定）→ グラフは直線',
            'y = ax²: 変化の割合は区間で変わる → グラフは曲線',
            '公式 a(p + q) を使えば素早く求められる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-rate-of-change-q1',
          question: 'y = x² で x が 1 から 3 に変化するとき、変化の割合は？',
          options: ['2', '4', '8', '3'],
          correctIndex: 1,
          explanation:
            '変化の割合 = a(p + q) = 1 × (1 + 3) = 4。または y の増加量 9-1=8、x の増加量 3-1=2 で 8÷2=4 だよ。',
        },
        {
          id: 'math-g3-rate-of-change-q2',
          question: 'y = 2x² で x が -1 から 3 に変化するとき、変化の割合は？',
          options: ['2', '4', '8', '6'],
          correctIndex: 1,
          explanation:
            '変化の割合 = a(p + q) = 2 × (-1 + 3) = 2 × 2 = 4 だよ。',
        },
        {
          id: 'math-g3-rate-of-change-q3',
          question: 'y = ax² の変化の割合と一次関数の変化の割合の違いは？',
          options: [
            'どちらも一定',
            'y = ax² は区間によって変わる',
            'どちらも区間によって変わる',
            '一次関数は区間によって変わる',
          ],
          correctIndex: 1,
          explanation:
            '一次関数の変化の割合は常に一定（= 傾き a）だけど、y = ax² の変化の割合は区間によって変わるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-rate-of-change-ex1',
          question: 'y = 3x² で x が 2 から 5 に変化するとき、変化の割合を求めよう。',
          steps: [
            {
              title: 'Step 1: 公式を使おう',
              content:
                '変化の割合 = a(p + q)。a = 3、p = 2、q = 5 を代入するよ。',
              highlight: 'a(p + q) = 3(2 + 5)',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '3 × 7 = 21。変化の割合は 21 だよ。',
              highlight: '変化の割合 = 21',
            },
          ],
          answer: '変化の割合 = 21',
        },
        {
          id: 'math-g3-rate-of-change-ex2',
          question: 'y = -x² で x が -3 から 1 に変化するとき、変化の割合を求めよう。',
          steps: [
            {
              title: 'Step 1: 公式を使おう',
              content:
                '変化の割合 = a(p + q)。a = -1、p = -3、q = 1 を代入するよ。',
              highlight: 'a(p + q) = -1(-3 + 1)',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '-1 × (-2) = 2。変化の割合は 2 だよ。',
              highlight: '変化の割合 = 2',
            },
          ],
          answer: '変化の割合 = 2',
        },
      ],
    },
    chatId: 'math-g3-rate-of-change',
  },
};
