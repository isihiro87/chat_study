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
            '一次関数と違い、y の変化の仕方が一定でない'
          ],
        },
        {
          title: '変域の求め方（x=0を含む場合の注意）',
          content:
            'y = ax² で x の変域が与えられたとき、y の変域を求めるのがよく出る問題だよ。特に x の変域が x = 0 をまたぐとき（例: -2 ≤ x ≤ 3）は要注意！x = 0 のとき y = 0 が最小値（a > 0）または最大値（a < 0）になるんだ。',
          keyPoints: [
            'x の変域が 0 をまたぐ → y の最小値(a>0)または最大値(a<0)は y = 0',
            'x の変域の端の値のうち、|x| が大きい方が y の最大値(a>0)を与える',
            '必ず x = 0 を含むかどうかをチェックしよう'
          ],
        },
        {
          title: '増減のまとめ表',
          content:
            'y = ax² の増減を表にまとめると整理しやすいよ。a の符号と x の範囲の組み合わせで、y が増加するか減少するかが決まるんだ。テストではこの表を頭に入れておくと素早く判断できるよ。',
          keyPoints: [
            'a > 0, x < 0 → y は減少 ／ a > 0, x > 0 → y は増加',
            'a < 0, x < 0 → y は増加 ／ a < 0, x > 0 → y は減少',
            'x = 0 は常に「折り返し点」。a > 0 で最小、a < 0 で最大'
          ],
        },
        {
          title: '変域から a を逆算する方法',
          content:
            '「y の変域がわかっていて a を求める」という逆問題もよく出るよ。まず x = 0 を含むかチェックして、最大値（または最小値）を与える x の値を特定し、y = ax² に代入して a を求めるんだ。',
          keyPoints: [
            'x = 0 を含む＋a > 0 → 最大値は |x| が大きい端で y = ax²',
            'x = 0 を含む＋a < 0 → 最小値は |x| が大きい端で y = ax²',
            'x = 0 を含まない → 端の値を代入して方程式を立てる'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qf-rg-fc2',
        front: '最小値 $0$ をとる', back: '$y = ax^2$（$a > 0$）で $x = 0$ のとき $y$ は？',
        explanation: 'グラフの頂点が原点にあり、上に開いているため',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc3',
        front: '最大値 $0$ をとる', back: '$y = ax^2$（$a < 0$）で $x = 0$ のとき $y$ は？',
        explanation: 'グラフの頂点が原点にあり、下に開いているため',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc4',
        front: '$y$ は減少する。', back: '$a > 0$ のとき、$x < 0$ の範囲で $x$ が増加すると $y$ は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc5',
        front: '$y$ は増加する。', back: '$a > 0$ のとき、$x > 0$ の範囲で $x$ が増加すると $y$ は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc6',
        front: '$y$ は増加する。', back: '$a < 0$ のとき、$x < 0$ の範囲で $x$ が増加すると $y$ は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc7',
        front: '$y$ は減少する。', back: '$a < 0$ のとき、$x > 0$ の範囲で $x$ が増加すると $y$ は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc8',
        front: '$x$ の変域に $x = 0$ が含まれるかどうか。', back: '変域を求めるとき最初にチェックすべきことは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc9',
        front: '変域の端の値のうち、絶対値が大きい方の $x$ の値で決まる。', back: '$x$ の変域が $0$ をまたぐとき（$a > 0$）、$y$ の最大値はどこで決まる？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc10',
        front: '変域の端の値のうち、絶対値が大きい方の $x$ の値で決まる。', back: '$x$ の変域が $0$ をまたぐとき（$a < 0$）、$y$ の最小値はどこで決まる？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc11',
        front: '端の値だけを代入して比べればOK。', back: '$x$ の変域が $0$ をまたがないとき、$y$ の変域はどう求める？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc12',
        front: '端の値だけ見て $y = 4$ としてしまうこと', back: 'よくある間違い: $y = x^2$ で $-2 \\leq x \\leq 3$ のとき $y$ の最小値を $4$ としてしまう理由は？',
        explanation: '実際は $x = 0$ で $y = 0$ が最小値',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qf-rg-fc13',
        front: '(1) $x = 0$ を含むか確認 → (2) 最大値/最小値を与える $x$ を特定 → (3) $y = ax^2$ に代入して $a$ を求める', back: '変域から $a$ を求める手順は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc14',
        front: '$a = 3$', back: '$y = ax^2$ で $1 \\leq x \\leq 3$ のとき最大値が $27$。$a$ は？',
        explanation: '$x = 3$ で最大値 $9a = 27$ より $a = 3$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc15',
        front: '$y = ax^2$ は $x = 0$ を境に変化の向きが逆になる', back: '一次関数 $y = ax + b$ と $y = ax^2$ の変化の仕方の違いは？',
        explanation: '一次関数は常に一定の割合で変化する',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc16',
        front: '原点 $O(0, 0)$', back: '$y = ax^2$ のグラフで「頂点」はどこ？',
        explanation: '$y$ の最小値（$a > 0$）または最大値（$a < 0$）をとる点',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc17',
        front: '$-18 \\leq y \\leq -2$。$x = 0$ を含まないので端の値を比べる。', back: '$y = -2x^2$ で $-3 \\leq x \\leq -1$ の変域は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc18',
        front: '$0 \\leq y \\leq 12$。$x = 0$ を含むので最小値は $0$。$|{-2}| < |3|$ より最大値は $x=3$ で $y=\\frac{4}{3} \\times 9=12$。', back: '$y = \\frac{4}{3}x^2$ で $-2 \\leq x \\leq 3$ の変域は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc19',
        front: '$x = 0$ を含む + $a > 0$ → 最小値は必ず $0$\n$x = 0$ を含む + $a < 0$ → 最大値は必ず $0$', back: '変域の求め方の「お約束」は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc20',
        front: '2つの端の値のうち、$0$ から遠い方（絶対値が大きい方）を代入', back: '$x = 0$ を含むとき、最大値（$a > 0$）を求めるには？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc21',
        front: '最小値も最大値も端の値で決まる（$x = 0$ が関係しない）', back: '$x$ の変域が $0$ を含まないとき、変域はどう求める？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc22',
        front: '$a = -2$。$|4| > |-1|$ より $x = 4$ で最小値。$-2 \\times 16 = -32$。', back: '$y = ax^2$ で $-1 \\leq x \\leq 4$、最小値 $-32$。$a$ は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qf-rg-fc23',
        front: '$3 \\leq y \\leq 27$。$x = 1$ で $y=3$、$x = 3$ で $y=27$。', back: '$y = 3x^2$ で $1 \\leq x \\leq 3$ の変域は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rg-fc24',
        front: '$x < 0$ の範囲では $y$ は増加する（$a < 0$ のとき）', back: '$y = -x^2$ で $x < 0$ のとき $x$ が増えると $y$ は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rg-fc25',
        front: '$-27 \\leq y \\leq 0$。$x = 0$ を含むので最大値 $0$。$x = 3$ で最小値 $-27$。', back: '$y = -3x^2$ で $0 \\leq x \\leq 3$ の変域は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rg-fc26',
        front: '一次関数は端の値だけ見ればOK（単調増加/減少）\n$y = ax^2$ は $x = 0$ のチェックが必要', back: '一次関数と $y = ax^2$ の変域の求め方の違いは？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rg-fc27',
        front: '$a = 2$。$|5| > |-3|$ より $x = 5$ で最大値。$25a = 50$ → $a = 2$。', back: '$y = ax^2$（$a > 0$）で $-3 \\leq x \\leq 5$、最大値 $50$。$a$ は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qf-rg-fc28',
        front: '$0 \\leq y \\leq 32$。$x = 0$ を含む、$|{-4}| = |4|$ より最大値は $y = 2 \\times 16 = 32$。', back: '$y = 2x^2$ で $-4 \\leq x \\leq 4$ の変域は？',
        difficulty: 'advanced',
      },
      { id: 'math-g3-qf-rg-fc29', front: '$x$ の変域の両端と $x = 0$ の $y$ の値を比べる', back: '$y = ax^2$ の $y$ の変域の求め方は？', explanation: '$x = 0$ を含むかどうかがポイント。', difficulty: 'basic' },
      { id: 'math-g3-qf-rg-fc30', front: '$0 \\leq y \\leq 9$', back: '$y = x^2$ で $0 \\leq x \\leq 3$ の $y$ の変域は？', explanation: '$x = 0$ で $y = 0$、$x = 3$ で $y = 9$。', difficulty: 'basic' },
      { id: 'math-g3-qf-rg-fc31', front: '$0 \\leq y \\leq 4$', back: '$y = x^2$ で $-2 \\leq x \\leq 1$ の $y$ の変域は？', explanation: '$x = 0$ を含むので最小値は $0$。最大値は $|-2| > |1|$ で $y = 4$。', difficulty: 'standard' },
      { id: 'math-g3-qf-rg-fc32', front: '$1 \\leq y \\leq 9$', back: '$y = x^2$ で $1 \\leq x \\leq 3$ の $y$ の変域は？', explanation: '$x = 0$ を含まない。$x = 1$ で $y = 1$、$x = 3$ で $y = 9$。', difficulty: 'standard' },
      { id: 'math-g3-qf-rg-fc33', front: '最小値は $0$（$x = 0$ のとき）', back: '$a > 0$ で $x$ の変域が $x = 0$ を含むとき、$y$ の最小値は？', explanation: '頂点が原点。', difficulty: 'basic' },
      { id: 'math-g3-qf-rg-fc35', front: '$a > 0$: $x = 0$ で最小、$a < 0$: $x = 0$ で最大', back: '$y = ax^2$ で $x = 0$ を含む変域のとき、$a$ の符号と最大最小の関係は？', explanation: '符号で最大最小が入れ替わる。', difficulty: 'standard' },
      { id: 'math-g3-qf-rg-fc36', front: '$-18 \\leq y \\leq 0$', back: '$y = -2x^2$ で $0 \\leq x \\leq 3$ の $y$ の変域は？', explanation: '$a < 0$ で $x = 0$ が最大値 $0$、$x = 3$ で $-18$。', difficulty: 'standard' },
      { id: 'math-g3-qf-rg-fc37', front: '$x = 0$ を含むかどうか', back: '$y = ax^2$ の変域問題で最初に確認することは？', explanation: '含むなら最小（$a > 0$）または最大（$a < 0$）は $0$。', difficulty: 'basic' },
      { id: 'math-g3-qf-rg-fc38', front: '$a = 2$', back: '$y = ax^2$（$a > 0$）で $-3 \\leq x \\leq 5$、最大値 $50$。$a$ は？', explanation: '$|5| > |-3|$ → $25a = 50$ → $a = 2$。', difficulty: 'advanced' }
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
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q2',
          question: '$y = x^2$ で $-2 \\leq x \\leq 3$ のとき、$y$ の最小値は？',
          options: ['$0$', '$9$', '$4$', '$1$'],
          correctIndex: 0,
          explanation:
            '$x$ の変域が $0$ をまたいでいるので、$x = 0$ のとき $y = 0$ が最小値になるよ。$x = -2$ のときの $y = 4$ が最小値ではないことに注意！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q3',
          question: '$y = -2x^2$ で $1 \\leq x \\leq 3$ のとき、$y$ の変域は？',
          options: [
            '$2 \\leq y \\leq 18$',
            '$-2 \\leq y \\leq 0$',
            '$-18 \\leq y \\leq 0$',
            '$-18 \\leq y \\leq -2$'
          ],
          correctIndex: 3,
          explanation:
            '$x = 1$ のとき $y = -2$、$x = 3$ のとき $y = -18$。$x$ の変域が $0$ をまたがないので、端の値だけ比べればOKだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q4',
          question: '$y = -x^2$ で $-3 \\leq x \\leq 2$ のとき、$y$ の変域は？',
          options: [
            '$-9 \\leq y \\leq -4$',
            '$-9 \\leq y \\leq 0$',
            '$-4 \\leq y \\leq 0$',
            '$0 \\leq y \\leq 9$'
          ],
          correctIndex: 1,
          explanation:
            '$x = 0$ を含むので $a < 0$ のとき最大値は $y = 0$。$|{-3}| > |2|$ なので $x = -3$ で最小値 $y = -9$。答え: $-9 \\leq y \\leq 0$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q5',
          question: '$y = 3x^2$ で $-1 \\leq x \\leq 2$ のとき、$y$ の最大値は？',
          options: ['$3$', '$0$', '$12$', '$6$'],
          correctIndex: 2,
          explanation:
            '$x = 0$ を含むので最小値は $0$。$|2| > |-1|$ なので $x = 2$ で最大値 $y = 3 \\times 4 = 12$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q6',
          question: '$y = x^2$ で $2 \\leq x \\leq 5$ のとき、$y$ の変域は？',
          options: [
            '$0 \\leq y \\leq 25$',
            '$2 \\leq y \\leq 5$',
            '$4 \\leq y \\leq 25$',
            '$4 \\leq y \\leq 10$'
          ],
          correctIndex: 2,
          explanation:
            '$x = 0$ を含まないので端の値だけ比べればOK。$x = 2$ で $y = 4$、$x = 5$ で $y = 25$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q7',
          question:
            '$y = ax^2$ で $-2 \\leq x \\leq 4$ のとき、$y$ の最大値が $48$。$a > 0$ のとき $a$ は？',
          options: ['$2$', '$6$', '$4$', '$3$'],
          correctIndex: 3,
          explanation:
            '$a > 0$ で $x = 0$ を含むので、最大値は $|x|$ が大きい $x = 4$ で実現。$16a = 48$ より $a = 3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q8',
          question:
            '$y = ax^2$ で $-3 \\leq x \\leq 1$ のとき、$y$ の最小値が $-27$。$a$ の値は？',
          options: ['$-1$', '$-3$', '$3$', '$-9$'],
          correctIndex: 1,
          explanation:
            '$a < 0$ で $x = 0$ を含むので、最小値は $|x|$ が大きい $x = -3$ で実現。$9a = -27$ より $a = -3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q9',
          question: '$y = 2x^2$ で $-3 \\leq x \\leq -1$ のとき、$y$ の変域は？',
          options: [
            '$0 \\leq y \\leq 18$',
            '$1 \\leq y \\leq 9$',
            '$2 \\leq y \\leq 18$',
            '$-18 \\leq y \\leq -2$'
          ],
          correctIndex: 2,
          explanation:
            '$x = 0$ を含まないので端の値を比べる。$x = -1$ で $y = 2$、$x = -3$ で $y = 18$。答え: $2 \\leq y \\leq 18$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q10',
          question:
            '$y = x^2$ で $x$ の変域が $-1 \\leq x \\leq a$ のとき $y$ の最大値が $16$。$a > 0$ のとき $a$ は？',
          options: ['$2$', '$4$', '$3$', '$8$'],
          correctIndex: 1,
          explanation:
            '$a > 0$ かつ $x = 0$ を含む。$|a| > |-1|$ なら最大値は $a^2 = 16$ → $a = 4$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qf-rg-q11',
          question: '$y = -3x^2$ で $-2 \\leq x \\leq 1$ のとき、$y$ の最小値は？',
          options: ['$-3$', '$-12$', '$0$', '$-6$'],
          correctIndex: 1,
          explanation:
            '$x = 0$ を含むので最大値は $0$。$|{-2}| > |1|$ なので $x = -2$ で最小値 $y = -3 \\times 4 = -12$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q12',
          question:
            '$y = ax^2$（$a > 0$）で $x$ が増加するとき $y$ が減少する $x$ の範囲は？',
          options: ['$x > 0$', 'すべての $x$', '$x = 0$', '$x < 0$'],
          correctIndex: 3,
          explanation:
            '$a > 0$ のとき、$x < 0$ の範囲で $x$ が増えると $y$ は減少するよ。$x > 0$ では増加する。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q13',
          question: '$y = 2x^2$ で $-4 \\leq x \\leq 4$ のとき、$y$ の変域は？',
          options: [
            '$0 \\leq y \\leq 32$',
            '$-32 \\leq y \\leq 32$',
            '$0 \\leq y \\leq 16$',
            '$8 \\leq y \\leq 32$'
          ],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含むので最小値は $0$。$|{-4}| = |4|$ で $y = 2 \\times 16 = 32$ が最大値。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q14',
          question: '$y = -3x^2$ で $0 \\leq x \\leq 3$ のとき、$y$ の変域は？',
          options: [
            '$0 \\leq y \\leq 27$',
            '$-9 \\leq y \\leq 0$',
            '$-27 \\leq y \\leq -3$',
            '$-27 \\leq y \\leq 0$'
          ],
          correctIndex: 3,
          explanation:
            '$x = 0$ で最大値 $0$。$x = 3$ で $y = -27$。答え: $-27 \\leq y \\leq 0$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q15',
          question: '$y = 3x^2$ で $1 \\leq x \\leq 3$ のとき、$y$ の変域は？',
          options: [
            '$0 \\leq y \\leq 27$',
            '$3 \\leq y \\leq 27$',
            '$1 \\leq y \\leq 9$',
            '$3 \\leq y \\leq 9$'
          ],
          correctIndex: 1,
          explanation:
            '$x = 0$ を含まない。$x = 1$ で $y = 3$、$x = 3$ で $y = 27$。答え: $3 \\leq y \\leq 27$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q16',
          question: '$y = -x^2$ で $x < 0$ のとき $x$ が増加すると $y$ は？',
          options: [
            '減少する',
            '変わらない',
            '一定ではない',
            '増加する'
          ],
          correctIndex: 3,
          explanation:
            '$a < 0$ のとき $x < 0$ の範囲では $y$ は増加するよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q17',
          question: '$y = ax^2$（$a > 0$）で $-3 \\leq x \\leq 5$ のとき、最大値が $50$。$a$ は？',
          options: ['$3$', '$5$', '$10$', '$2$'],
          correctIndex: 3,
          explanation:
            '$|5| > |-3|$ より $x = 5$ で最大値。$25a = 50$ → $a = 2$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q18',
          question: '$y = \\frac{1}{2}x^2$ で $-4 \\leq x \\leq 2$ のとき、$y$ の変域は？',
          options: [
            '$0 \\leq y \\leq 2$',
            '$2 \\leq y \\leq 8$',
            '$-8 \\leq y \\leq 2$',
            '$0 \\leq y \\leq 8$'
          ],
          correctIndex: 3,
          explanation:
            '$x = 0$ を含むので最小値は $0$。$|{-4}| > |2|$ より $x = -4$ で最大値 $\\frac{1}{2} \\times 16 = 8$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q19',
          question: '$y = -4x^2$ で $-1 \\leq x \\leq 3$ のとき、$y$ の最小値は？',
          options: ['$-4$', '$-36$', '$-12$', '$0$'],
          correctIndex: 1,
          explanation:
            '$a < 0$ で $x = 0$ を含む → 最大値は $0$。$|3| > |-1|$ より最小値は $x = 3$ で $y = -36$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q20',
          question: '$y = x^2$ で $-5 \\leq x \\leq -2$ のとき、$y$ の変域は？',
          options: [
            '$4 \\leq y \\leq 25$',
            '$0 \\leq y \\leq 25$',
            '$-25 \\leq y \\leq -4$',
            '$2 \\leq y \\leq 5$'
          ],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含まない。$x = -2$ で $y = 4$、$x = -5$ で $y = 25$。答え: $4 \\leq y \\leq 25$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q21',
          question: '$y = ax^2$（$a < 0$）で $-1 \\leq x \\leq 4$ のとき、最小値が $-48$。$a$ は？',
          options: ['$-3$', '$-12$', '$-48$', '$-4$'],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含む + $a < 0$ → 最小値は $|x|$ 最大の $x = 4$ で。$16a = -48$ → $a = -3$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q22',
          question: '$y = 5x^2$ で $-2 \\leq x \\leq 1$ のとき、$y$ の最大値は？',
          options: ['$5$', '$10$', '$20$', '$0$'],
          correctIndex: 2,
          explanation:
            '$|{-2}| > |1|$ より $x = -2$ で最大値 $y = 5 \\times 4 = 20$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qf-rg-q23',
          question: '変域を求めるとき最初にチェックすべきことは？',
          options: [
            '$a$ の値',
            '$x$ の変域に $x = 0$ が含まれるか',
            'グラフを描く',
            '$y$ の値を計算する'
          ],
          correctIndex: 1,
          explanation:
            '$x = 0$ が含まれるかどうかで最小値/最大値の求め方が変わるので、まずこれをチェック！',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rg-q24',
          question: '$y = -\\frac{1}{2}x^2$ で $-6 \\leq x \\leq 4$ のとき、$y$ の変域は？',
          options: [
            '$-18 \\leq y \\leq 0$',
            '$-8 \\leq y \\leq 0$',
            '$-18 \\leq y \\leq -8$',
            '$0 \\leq y \\leq 18$'
          ],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含み $a < 0$ → 最大値は $0$。$|{-6}| > |4|$ より最小値は $x = -6$ で $y = -18$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rg-q25',
          question: '$y = x^2$ で $x$ の変域が $-a \\leq x \\leq a$（$a > 0$）のとき $y$ の変域は？',
          options: [
            '$-a^2 \\leq y \\leq a^2$',
            '$0 \\leq y \\leq 2a^2$',
            '$0 \\leq y \\leq a^2$',
            '$a \\leq y \\leq a^2$'
          ],
          correctIndex: 2,
          explanation:
            '$x = 0$ を含むので最小値は $0$。両端で $|{-a}| = |a|$ なので最大値は $a^2$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rg-q26',
          question: '$y = 4x^2$ で $-1 \\leq x \\leq 3$ のとき、$y$ の最小値と最大値は？',
          options: [
            '最小値 $0$、最大値 $36$',
            '最小値 $4$、最大値 $36$',
            '最小値 $0$、最大値 $4$',
            '最小値 $-4$、最大値 $36$'
          ],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含むので最小値 $0$。$|3| > |-1|$ より最大値は $x = 3$ で $y = 36$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rg-q27',
          question: '$y = -x^2$ で $2 \\leq x \\leq 5$ のとき、$y$ の変域は？',
          options: [
            '$-25 \\leq y \\leq -4$',
            '$-25 \\leq y \\leq 0$',
            '$-4 \\leq y \\leq 0$',
            '$4 \\leq y \\leq 25$'
          ],
          correctIndex: 0,
          explanation:
            '$x = 0$ を含まない。$x = 2$ で $y = -4$、$x = 5$ で $y = -25$。答え: $-25 \\leq y \\leq -4$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qf-rg-q28',
          question: '$y = ax^2$（$a > 0$）で $-2 \\leq x \\leq 6$ のとき、最大値が $72$。$a$ は？',
          options: ['$1$', '$3$', '$2$', '$4$'],
          correctIndex: 2,
          explanation:
            '$|6| > |-2|$ より $x = 6$ で最大値。$36a = 72$ → $a = 2$。',
          difficulty: 'advanced',
        }
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
            }
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
            }
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
            }
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
            }
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
            }
          ],
          answer: '$a = -2$',
        }
      ],
    },
    chatId: 'math-g3-quad-func-range',
  },
};
