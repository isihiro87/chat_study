import type { Topic } from '../../../../../../../../data/types';

export const quadFuncRange: Topic = {
  id: 'math-g3-quad-func-range',
  eraId: 'math-g3-quadratic-func',
  name: '値の変化と変域',
  subtitle: 'x=0をまたぐときに注意',
  icon: '↕️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'xの増加とyの変化',
          content:
            'y = ax² では、x が増加しても y が常に増加するわけではないよ。a > 0 のとき、x < 0 の範囲では x が増えると y は減り、x > 0 の範囲では x が増えると y も増えるんだ。つまり x = 0 を境にして y の変化の仕方が逆になる！',
          keyPoints: [
            'a > 0: x < 0 で y は減少、x > 0 で y は増加（x = 0 で最小値）',
            'a < 0: x < 0 で y は増加、x > 0 で y は減少（x = 0 で最大値）',
            '一次関数と違い、y の変化の仕方が一定でない',
          ],
        },
        {
          title: '変域の求め方（x=0を含む場合の注意）',
          content:
            'y = ax² で x の変域が与えられたとき、y の変域を求めるのがよく出る問題だよ。特に x の変域が x = 0 をまたぐとき（例: -2 ≤ x ≤ 3）は要注意！x = 0 のとき y = 0 が最小値（a > 0）または最大値（a < 0）になるんだ。',
          keyPoints: [
            'x の変域が 0 をまたぐ → y の最小値(a>0)または最大値(a<0)は y = 0',
            'x の変域の端の値のうち、|x| が大きい方が y の最大値(a>0)を与える',
            '必ず x = 0 を含むかどうかをチェックしよう',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-func-range-q1',
          question: '$y = x^2$ で $-2 \\leq x \\leq 3$ のとき、$y$ の最大値は？',
          options: ['$4$', '$9$', '$0$', '$3$'],
          correctIndex: 1,
          explanation:
            '$x = 3$ のとき $y = 9$、$x = -2$ のとき $y = 4$。$|x|$ が大きい方が $y$ も大きいので、最大値は $9$ だよ。',
        },
        {
          id: 'math-g3-quad-func-range-q2',
          question: '$y = x^2$ で $-2 \\leq x \\leq 3$ のとき、$y$ の最小値は？',
          options: ['$4$', '$9$', '$0$', '$1$'],
          correctIndex: 2,
          explanation:
            '$x$ の変域が $0$ をまたいでいるので、$x = 0$ のとき $y = 0$ が最小値になるよ。$x = -2$ のときの $y = 4$ が最小値ではないことに注意！',
        },
        {
          id: 'math-g3-quad-func-range-q3',
          question: '$y = -2x^2$ で $1 \\leq x \\leq 3$ のとき、$y$ の変域は？',
          options: [
            '$-18 \\leq y \\leq -2$',
            '$-2 \\leq y \\leq 0$',
            '$-18 \\leq y \\leq 0$',
            '$2 \\leq y \\leq 18$',
          ],
          correctIndex: 0,
          explanation:
            '$x = 1$ のとき $y = -2$、$x = 3$ のとき $y = -18$。$x$ の変域が $0$ をまたがないので、端の値だけ比べればOKだよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-func-range-ex1',
          question: '$y = 2x^2$ で $-1 \\leq x \\leq 3$ のとき、$y$ の変域を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = 0$ を含むかチェック',
              content:
                '$-1 \\leq x \\leq 3$ には $x = 0$ が含まれている。$a = 2 > 0$ だから $x = 0$ で $y$ は最小値 $0$ をとるよ。',
              highlight: '$x = 0$ を含む → 最小値は $y = 0$',
            },
            {
              title: 'Step 2: 端の値を比べる',
              content:
                '$x = -1$ のとき $y = 2$、$x = 3$ のとき $y = 18$。$|3| > |-1|$ だから最大値は $y = 18$。',
              highlight: '最大値は $y = 18$',
            },
            {
              title: 'Step 3: 変域を書く',
              content: '$y$ の変域は $0 \\leq y \\leq 18$ だよ。',
              highlight: '$0 \\leq y \\leq 18$',
            },
          ],
          answer: '$0 \\leq y \\leq 18$',
        },
        {
          id: 'math-g3-quad-func-range-ex2',
          question: '$y = -x^2$ で $-3 \\leq x \\leq -1$ のとき、$y$ の変域を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = 0$ を含むかチェック',
              content:
                '$-3 \\leq x \\leq -1$ には $x = 0$ が含まれていない。端の値だけ比べればOK。',
              highlight: '$x = 0$ を含まない',
            },
            {
              title: 'Step 2: 端の値を計算する',
              content:
                '$x = -3$ のとき $y = -9$、$x = -1$ のとき $y = -1$。',
              highlight: '$y = -9$ と $y = -1$',
            },
            {
              title: 'Step 3: 変域を書く',
              content: '$-9$ の方が小さいから、$-9 \\leq y \\leq -1$ だよ。',
              highlight: '$-9 \\leq y \\leq -1$',
            },
          ],
          answer: '$-9 \\leq y \\leq -1$',
        },
      ],
    },
    chatId: 'math-g3-quad-func-range',
  },
};
