import type { Topic } from '../../../../../../../../data/types';

export const quadFuncParabola: Topic = {
  id: 'math-g3-quad-func-parabola',
  eraId: 'math-g3-quadratic-func',
  name: 'y=ax²と放物線',
  subtitle: 'U字型のグラフを描こう',
  icon: '〰️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'y=ax²の意味（2乗に比例）',
          content:
            'y が x の2乗に比例するとき、y = ax² という式で表されるよ。a は比例定数で、a ≠ 0 であることが条件。x が2倍になると y は4倍、x が3倍になると y は9倍になるのが特徴だよ。',
          image: {
            src: '/images/math/grade3/parabola-comparison.svg',
            alt: 'y=ax²のグラフ比較',
            caption: 'aの値でグラフの形が変わる',
          },
          keyPoints: [
            'y = ax²（a ≠ 0）の形で、y は x の2乗に比例する',
            'x が n 倍になると y は n² 倍になる',
            'a が比例定数で、グラフの開き具合を決める',
          ],
        },
        {
          title: '放物線の特徴',
          content:
            'y = ax² のグラフは「放物線」と呼ばれるU字型の曲線だよ。a > 0 なら上に開き、a < 0 なら下に開くんだ。|a| が大きいほどグラフは細く（急に）なり、|a| が小さいほど広く（ゆるやかに）なるよ。',
          keyPoints: [
            'a > 0 → 上に開く放物線（U字型）',
            'a < 0 → 下に開く放物線（∩字型）',
            '|a| が大きいほどグラフは細く、|a| が小さいほど広い',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-func-parabola-q1',
          question: '$y = 2x^2$ で、$x = 3$ のとき $y$ の値は？',
          options: ['$6$', '$9$', '$12$', '$18$'],
          correctIndex: 3,
          explanation:
            '$y = 2x^2$ に $x = 3$ を代入すると $y = 2 \\times 3^2 = 2 \\times 9 = 18$ だよ。',
        },
        {
          id: 'math-g3-quad-func-parabola-q2',
          question: '$y = -x^2$ のグラフはどんな形？',
          options: [
            '上に開く放物線',
            '下に開く放物線',
            '右上がりの直線',
            '原点を通る直線',
          ],
          correctIndex: 1,
          explanation:
            '$a = -1$ で $a < 0$ だから、下に開く放物線（∩字型）になるよ。',
        },
        {
          id: 'math-g3-quad-func-parabola-q3',
          question: '$y = x^2$ と $y = 3x^2$ のグラフを比べると？',
          options: [
            '$y = 3x^2$ の方が広い',
            '$y = 3x^2$ の方が細い',
            '同じ形',
            '向きが逆',
          ],
          correctIndex: 1,
          explanation:
            '$|a|$ が大きいほどグラフは細くなるよ。$|3| > |1|$ だから $y = 3x^2$ の方が細いグラフになるんだ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-func-parabola-ex1',
          question: '$y$ は $x$ の2乗に比例し、$x = 2$ のとき $y = 12$ である。$y$ を $x$ の式で表そう。',
          steps: [
            {
              title: 'Step 1: $y = ax^2$ とおく',
              content:
                '$y$ は $x$ の2乗に比例するから、$y = ax^2$ の形で表せるよ。$a$ の値を求めよう。',
              highlight: '$y = ax^2$',
            },
            {
              title: 'Step 2: $x = 2, y = 12$ を代入する',
              content:
                '$12 = a \\times 2^2$ → $12 = 4a$ → $a = 3$ だよ。',
              highlight: '$a = 3$',
            },
          ],
          answer: '$y = 3x^2$',
        },
        {
          id: 'math-g3-quad-func-parabola-ex2',
          question: '$y = -2x^2$ について、$x = -3$ のときの $y$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = -3$ を代入する',
              content:
                '$y = -2 \\times (-3)^2$ と計算するよ。$(-3)^2$ を先に求めよう。',
              highlight: '$(-3)^2 = 9$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$y = -2 \\times 9 = -18$。マイナスの数を2乗するとプラスになることに注意だよ。',
              highlight: '$y = -18$',
            },
          ],
          answer: '$y = -18$',
        },
      ],
    },
    chatId: 'math-g3-quad-func-parabola',
  },
};
