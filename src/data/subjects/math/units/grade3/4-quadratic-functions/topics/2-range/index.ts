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
        {
          title: '増減のまとめ表',
          content:
            'y = ax² の増減を表にまとめると整理しやすいよ。a の符号と x の範囲の組み合わせで、y が増加するか減少するかが決まるんだ。テストではこの表を頭に入れておくと素早く判断できるよ。',
          keyPoints: [
            'a > 0, x < 0 → y は減少 ／ a > 0, x > 0 → y は増加',
            'a < 0, x < 0 → y は増加 ／ a < 0, x > 0 → y は減少',
            'x = 0 は常に「折り返し点」。a > 0 で最小、a < 0 で最大',
          ],
        },
        {
          title: '変域から a を逆算する方法',
          content:
            '「y の変域がわかっていて a を求める」という逆問題もよく出るよ。まず x = 0 を含むかチェックして、最大値（または最小値）を与える x の値を特定し、y = ax² に代入して a を求めるんだ。',
          keyPoints: [
            'x = 0 を含む＋a > 0 → 最大値は |x| が大きい端で y = ax²',
            'x = 0 を含む＋a < 0 → 最小値は |x| が大きい端で y = ax²',
            'x = 0 を含まない → 端の値を代入して方程式を立てる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qf-rg-fc1',
        front: '$y = ax^2$ の「変域」とは？',
        back: '$x$ や $y$ がとりうる値の範囲のこと。不等号を使って $a \\leq x \\leq b$ のように表す。',
      },
      {
        id: 'math-g3-qf-rg-fc2',
        front: '$y = ax^2$（$a > 0$）で $x = 0$ のとき $y$ は？',
        back: '最小値 $0$ をとる。グラフの頂点が原点にあり、上に開いているため。',
      },
      {
        id: 'math-g3-qf-rg-fc3',
        front: '$y = ax^2$（$a < 0$）で $x = 0$ のとき $y$ は？',
        back: '最大値 $0$ をとる。グラフの頂点が原点にあり、下に開いているため。',
      },
      {
        id: 'math-g3-qf-rg-fc4',
        front: '$a > 0$ のとき、$x < 0$ の範囲で $x$ が増加すると $y$ は？',
        back: '$y$ は減少する。',
      },
      {
        id: 'math-g3-qf-rg-fc5',
        front: '$a > 0$ のとき、$x > 0$ の範囲で $x$ が増加すると $y$ は？',
        back: '$y$ は増加する。',
      },
      {
        id: 'math-g3-qf-rg-fc6',
        front: '$a < 0$ のとき、$x < 0$ の範囲で $x$ が増加すると $y$ は？',
        back: '$y$ は増加する。',
      },
      {
        id: 'math-g3-qf-rg-fc7',
        front: '$a < 0$ のとき、$x > 0$ の範囲で $x$ が増加すると $y$ は？',
        back: '$y$ は減少する。',
      },
      {
        id: 'math-g3-qf-rg-fc8',
        front: '変域を求めるとき最初にチェックすべきことは？',
        back: '$x$ の変域に $x = 0$ が含まれるかどうか。',
      },
      {
        id: 'math-g3-qf-rg-fc9',
        front: '$x$ の変域が $0$ をまたぐとき（$a > 0$）、$y$ の最大値はどこで決まる？',
        back: '変域の端の値のうち、絶対値が大きい方の $x$ の値で決まる。',
      },
      {
        id: 'math-g3-qf-rg-fc10',
        front: '$x$ の変域が $0$ をまたぐとき（$a < 0$）、$y$ の最小値はどこで決まる？',
        back: '変域の端の値のうち、絶対値が大きい方の $x$ の値で決まる。',
      },
      {
        id: 'math-g3-qf-rg-fc11',
        front: '$x$ の変域が $0$ をまたがないとき、$y$ の変域はどう求める？',
        back: '端の値だけを代入して比べればOK。',
      },
      {
        id: 'math-g3-qf-rg-fc12',
        front: 'よくある間違い: $y = x^2$ で $-2 \\leq x \\leq 3$ のとき $y$ の最小値を $4$ としてしまう理由は？',
        back: '$x = -2$ の端の値だけ見て $y = 4$ としてしまう。実際は $x = 0$ で $y = 0$ が最小値。',
      },
      {
        id: 'math-g3-qf-rg-fc13',
        front: '変域から $a$ を求める手順は？',
        back: '(1) $x = 0$ を含むか確認 → (2) 最大値/最小値を与える $x$ を特定 → (3) $y = ax^2$ に代入して $a$ を求める',
      },
      {
        id: 'math-g3-qf-rg-fc14',
        front: '$y = ax^2$ で $1 \\leq x \\leq 3$ のとき最大値が $27$。$a$ は？',
        back: '$a = 3$。$x = 3$ で最大値 $9a = 27$ より $a = 3$。',
      },
      {
        id: 'math-g3-qf-rg-fc15',
        front: '一次関数 $y = ax + b$ と $y = ax^2$ の変化の仕方の違いは？',
        back: '一次関数は常に一定の割合で変化するが、$y = ax^2$ は $x = 0$ を境に変化の向きが逆になる。',
      },
      {
        id: 'math-g3-qf-rg-fc16',
        front: '$y = ax^2$ のグラフで「頂点」はどこ？',
        back: '原点 $O(0, 0)$。$y$ の最小値（$a > 0$）または最大値（$a < 0$）をとる点。',
      },
      {
        id: 'math-g3-qf-rg-fc17',
        front: '$y = -2x^2$ で $-3 \\leq x \\leq -1$ の変域は？',
        back: '$-18 \\leq y \\leq -2$。$x = 0$ を含まないので端の値を比べる。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-qf-rg-q1',
          question: '$y = x^2$ で $-2 \\leq x \\leq 3$ のとき、$y$ の最大値は？',
          options: ['$4$', '$0$', '$9$', '$3$'],
          correctIndex: 2,
          explanation:
            '$x = 3$ のとき $y = 9$、$x = -2$ のとき $y = 4$。$|3| > |-2|$ だから最大値は $9$ だよ。',
        },
        {
          id: 'math-g3-qf-rg-q2',
          question: '$y = x^2$ で $-2 \\leq x \\leq 3$ のとき、$y$ の最小値は？',
          options: ['$0$', '$9$', '$4$', '$1$'],
          correctIndex: 0,
          explanation:
            '$x$ の変域が $0$ をまたいでいるので、$x = 0$ のとき $y = 0$ が最小値になるよ。$x = -2$ のときの $y = 4$ が最小値ではないことに注意！',
        },
        {
          id: 'math-g3-qf-rg-q3',
          question: '$y = -2x^2$ で $1 \\leq x \\leq 3$ のとき、$y$ の変域は？',
          options: [
            '$2 \\leq y \\leq 18$',
            '$-2 \\leq y \\leq 0$',
            '$-18 \\leq y \\leq 0$',
            '$-18 \\leq y \\leq -2$',
          ],
          correctIndex: 3,
          explanation:
            '$x = 1$ のとき $y = -2$、$x = 3$ のとき $y = -18$。$x$ の変域が $0$ をまたがないので、端の値だけ比べればOKだよ。',
        },
        {
          id: 'math-g3-qf-rg-q4',
          question: '$y = -x^2$ で $-3 \\leq x \\leq 2$ のとき、$y$ の変域は？',
          options: [
            '$-9 \\leq y \\leq -4$',
            '$-9 \\leq y \\leq 0$',
            '$-4 \\leq y \\leq 0$',
            '$0 \\leq y \\leq 9$',
          ],
          correctIndex: 1,
          explanation:
            '$x = 0$ を含むので $a < 0$ のとき最大値は $y = 0$。$|{-3}| > |2|$ なので $x = -3$ で最小値 $y = -9$。答え: $-9 \\leq y \\leq 0$。',
        },
        {
          id: 'math-g3-qf-rg-q5',
          question: '$y = 3x^2$ で $-1 \\leq x \\leq 2$ のとき、$y$ の最大値は？',
          options: ['$12$', '$3$', '$0$', '$6$'],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含むので最小値は $0$。$|2| > |-1|$ なので $x = 2$ で最大値 $y = 3 \\times 4 = 12$。',
        },
        {
          id: 'math-g3-qf-rg-q6',
          question: '$y = x^2$ で $2 \\leq x \\leq 5$ のとき、$y$ の変域は？',
          options: [
            '$0 \\leq y \\leq 25$',
            '$2 \\leq y \\leq 5$',
            '$4 \\leq y \\leq 25$',
            '$4 \\leq y \\leq 10$',
          ],
          correctIndex: 2,
          explanation:
            '$x = 0$ を含まないので端の値だけ比べればOK。$x = 2$ で $y = 4$、$x = 5$ で $y = 25$。',
        },
        {
          id: 'math-g3-qf-rg-q7',
          question:
            '$y = ax^2$ で $-2 \\leq x \\leq 4$ のとき、$y$ の最大値が $48$。$a > 0$ のとき $a$ は？',
          options: ['$2$', '$6$', '$4$', '$3$'],
          correctIndex: 3,
          explanation:
            '$a > 0$ で $x = 0$ を含むので、最大値は $|x|$ が大きい $x = 4$ で実現。$16a = 48$ より $a = 3$。',
        },
        {
          id: 'math-g3-qf-rg-q8',
          question:
            '$y = ax^2$ で $-3 \\leq x \\leq 1$ のとき、$y$ の最小値が $-27$。$a$ の値は？',
          options: ['$-1$', '$-3$', '$3$', '$-9$'],
          correctIndex: 1,
          explanation:
            '$a < 0$ で $x = 0$ を含むので、最小値は $|x|$ が大きい $x = -3$ で実現。$9a = -27$ より $a = -3$。',
        },
        {
          id: 'math-g3-qf-rg-q9',
          question: '$y = 2x^2$ で $-3 \\leq x \\leq -1$ のとき、$y$ の変域は？',
          options: [
            '$2 \\leq y \\leq 18$',
            '$0 \\leq y \\leq 18$',
            '$1 \\leq y \\leq 9$',
            '$-18 \\leq y \\leq -2$',
          ],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含まないので端の値を比べる。$x = -1$ で $y = 2$、$x = -3$ で $y = 18$。答え: $2 \\leq y \\leq 18$。',
        },
        {
          id: 'math-g3-qf-rg-q10',
          question:
            '$y = x^2$ で $x$ の変域が $-1 \\leq x \\leq a$ のとき $y$ の最大値が $16$。$a > 0$ のとき $a$ は？',
          options: ['$2$', '$3$', '$4$', '$8$'],
          correctIndex: 2,
          explanation:
            '$a > 0$ かつ $x = 0$ を含む。$|a| > |-1|$ なら最大値は $a^2 = 16$ → $a = 4$。',
        },
        {
          id: 'math-g3-qf-rg-q11',
          question: '$y = -3x^2$ で $-2 \\leq x \\leq 1$ のとき、$y$ の最小値は？',
          options: ['$-3$', '$-12$', '$0$', '$-6$'],
          correctIndex: 1,
          explanation:
            '$x = 0$ を含むので最大値は $0$。$|{-2}| > |1|$ なので $x = -2$ で最小値 $y = -3 \\times 4 = -12$。',
        },
        {
          id: 'math-g3-qf-rg-q12',
          question:
            '$y = ax^2$（$a > 0$）で $x$ が増加するとき $y$ が減少する $x$ の範囲は？',
          options: ['$x > 0$', 'すべての $x$', '$x = 0$', '$x < 0$'],
          correctIndex: 3,
          explanation:
            '$a > 0$ のとき、$x < 0$ の範囲で $x$ が増えると $y$ は減少するよ。$x > 0$ では増加する。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-qf-rg-ex1',
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
          id: 'math-g3-qf-rg-ex2',
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
        {
          id: 'math-g3-qf-rg-ex3',
          question:
            '$y = -2x^2$ で $-1 \\leq x \\leq 3$ のとき、$y$ の変域を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = 0$ を含むかチェック',
              content:
                '$-1 \\leq x \\leq 3$ には $x = 0$ が含まれている。$a = -2 < 0$ だから $x = 0$ で $y$ は最大値 $0$ をとるよ。',
              highlight: '$a < 0$ で $x = 0$ を含む → 最大値は $y = 0$',
            },
            {
              title: 'Step 2: 端の値を比べて最小値を求める',
              content:
                '$x = -1$ のとき $y = -2$、$x = 3$ のとき $y = -18$。$|3| > |-1|$ だから最小値は $y = -18$。',
              highlight: '最小値は $y = -18$',
            },
            {
              title: 'Step 3: 変域を書く',
              content: '$y$ の変域は $-18 \\leq y \\leq 0$ だよ。',
              highlight: '$-18 \\leq y \\leq 0$',
            },
          ],
          answer: '$-18 \\leq y \\leq 0$',
        },
        {
          id: 'math-g3-qf-rg-ex4',
          question:
            '$y = ax^2$ で $-2 \\leq x \\leq 3$ のとき、$y$ の最大値が $18$ である。$a$ の値を求めよう（$a > 0$）。',
          steps: [
            {
              title: 'Step 1: $x = 0$ を含むかチェック',
              content:
                '$-2 \\leq x \\leq 3$ には $x = 0$ が含まれている。$a > 0$ だから最小値は $y = 0$。',
              highlight: '$x = 0$ を含む、$a > 0$',
            },
            {
              title: 'Step 2: 最大値を与える $x$ を特定',
              content:
                '端の値の絶対値を比べると $|3| > |-2|$ なので、$x = 3$ で最大値をとる。',
              highlight: '$x = 3$ で最大値',
            },
            {
              title: 'Step 3: 方程式を立てて $a$ を求める',
              content:
                '$y = a \\times 3^2 = 9a = 18$ より $a = 2$。',
              highlight: '$a = 2$',
            },
          ],
          answer: '$a = 2$',
        },
        {
          id: 'math-g3-qf-rg-ex5',
          question:
            '$y = ax^2$ で $1 \\leq x \\leq 4$ のとき、$y$ の変域が $-32 \\leq y \\leq -2$ である。$a$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: $x = 0$ を含むかチェック',
              content:
                '$1 \\leq x \\leq 4$ には $x = 0$ が含まれていない。端の値だけで考えればOK。',
              highlight: '$x = 0$ を含まない',
            },
            {
              title: 'Step 2: $y$ の変域から $a$ の符号を判断',
              content:
                '$y$ の変域が $-32 \\leq y \\leq -2$ と負の値のみなので、$a < 0$ とわかる。',
              highlight: '$a < 0$',
            },
            {
              title: 'Step 3: 端の値で方程式を立てる',
              content:
                '$x = 4$ で最小値: $16a = -32$ → $a = -2$。検算: $x = 1$ で $y = a = -2$（最大値と一致✓）',
              highlight: '$a = -2$',
            },
          ],
          answer: '$a = -2$',
        },
      ],
    },
    chatId: 'math-g3-quad-func-range',
  },
};
