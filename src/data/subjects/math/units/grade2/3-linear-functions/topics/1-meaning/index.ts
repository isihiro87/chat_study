import type { Topic } from '../../../../../../../../data/types';

export const linearFuncMeaning: Topic = {
  id: 'math-g2-linear-func-meaning',
  eraId: 'math-g2-linear-func',
  name: '一次関数の意味',
  subtitle: 'y = ax + b の世界へ',
  icon: '📈',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'y = ax + b ってなに？',
          content:
            'y が x の一次式で表されるとき、y は x の一次関数であるというよ。式で書くと y = ax + b（a ≠ 0）の形になるんだ。a は「変化の割合」、b は「切片」と呼ばれるよ。',
          keyPoints: [
            '一次関数の式: y = ax + b（a ≠ 0）',
            'a は変化の割合（x が1増えると y が a 増える）',
            'b は切片（x = 0 のときの y の値）',
          ],
        },
        {
          title: '変化の割合は一定！',
          content:
            '一次関数の最大の特徴は、x の増加量に対する y の増加量の割合（＝変化の割合）がいつでも一定であること。これが一次関数のポイントだよ！',
          keyPoints: [
            '変化の割合 = y の増加量 ÷ x の増加量 = a（いつでも同じ値）',
            '例: y = 2x + 3 なら、x が1増えるごとに y は2ずつ増える',
            '表を作って確かめると、y の増え方が一定であることがわかる',
          ],
        },
        {
          title: '比例との違い',
          content:
            '中1で習った比例は y = ax だったね。一次関数 y = ax + b は、比例に b（定数）を足した形だよ。b = 0 のとき比例になるから、比例は一次関数の特別な場合と言えるんだ！',
          keyPoints: [
            '比例: y = ax（原点を通る）→ 一次関数の b = 0 の場合',
            '一次関数: y = ax + b（b ≠ 0 なら原点を通らない）',
            '比例は一次関数の仲間（特別な場合）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-linear-func-meaning-fc1',
        front: '一次関数の一般式は？',
        back: '$y = ax + b$（$a \\neq 0$、$a$, $b$ は定数）',
      },
      {
        id: 'math-g2-linear-func-meaning-fc2',
        front: '$y = ax + b$ の $a$ は何を表す？',
        back: '変化の割合（傾き）。$x$ が1増えるときの $y$ の増加量。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc3',
        front: '$y = ax + b$ の $b$ は何を表す？',
        back: '切片。$x = 0$ のときの $y$ の値。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc4',
        front: '変化の割合の求め方（公式）は？',
        back: '変化の割合 $= \\dfrac{y\\text{の増加量}}{x\\text{の増加量}} = a$',
      },
      {
        id: 'math-g2-linear-func-meaning-fc5',
        front: '増加量の求め方は？',
        back: '増加量 $=$ 変化後の値 $-$ 変化前の値',
      },
      {
        id: 'math-g2-linear-func-meaning-fc6',
        front: '一次関数の変化の割合にはどんな特徴がある？',
        back: 'どの区間で計算しても常に一定（$= a$）になる。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc7',
        front: '比例 $y = ax$ と一次関数 $y = ax + b$ の関係は？',
        back: '比例は一次関数の $b = 0$ の特別な場合。比例は一次関数の仲間。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc8',
        front: '$y = ax + b$ で $a > 0$ のとき、$x$ が増えると $y$ はどうなる？',
        back: '$y$ も増える（右上がりのグラフ）。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc9',
        front: '$y = ax + b$ で $a < 0$ のとき、$x$ が増えると $y$ はどうなる？',
        back: '$y$ は減る（右下がりのグラフ）。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc10',
        front: '一次関数で $x$ の増加量が $n$ のとき、$y$ の増加量は？',
        back: '$y$ の増加量 $= a \\times n$（変化の割合 $\\times$ $x$ の増加量）',
      },
      {
        id: 'math-g2-linear-func-meaning-fc11',
        front: '$y = x^2$ や $y = \\dfrac{6}{x}$ は一次関数？',
        back: 'どちらも一次関数ではない。$y = ax + b$ の形にならないから。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc12',
        front: '反比例の変化の割合は一定？',
        back: '一定ではない。区間によって変化の割合が異なる。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc13',
        front: '$y = 7$ は一次関数？',
        back: '一次関数ではない。$a = 0$ なので $y$ が $x$ によって変化しない。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc14',
        front: '$y = -5x$ は一次関数？ 比例？',
        back: 'どちらでもある。$a = -5$, $b = 0$ の一次関数であり、比例でもある。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc15',
        front: '一次関数 $y = ax + b$ で $a \\neq 0$ が必要な理由は？',
        back: '$a = 0$ だと $y = b$（定数）になり、$x$ が変わっても $y$ が変化しないから。',
      },
      {
        id: 'math-g2-linear-func-meaning-fc16',
        front: '文章題で一次関数を立式するコツは？',
        back: '$a$ は「1単位あたりの変化量」、$b$ は「最初の値（初期値）」と考える。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-linear-func-meaning-q1',
          question: '$y = 3x + 5$ で、$x$ が1増えると $y$ はいくつ増える？',
          options: ['$8$', '$5$', '$3$', '$1$'],
          correctIndex: 2,
          explanation:
            '$y = ax + b$ の $a$ が変化の割合だよ。$a = 3$ だから、$x$ が1増えると $y$ は3増えるんだ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q2',
          question: '次のうち、一次関数でないものはどれ？',
          options: ['$y = 2x + 1$', '$y = x^2$', '$y = -x + 3$', '$y = 5x$'],
          correctIndex: 1,
          explanation:
            '$y = x^2$ は $x$ の二乗が入っているので一次関数ではないよ。一次関数は $y = ax + b$ の形だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q3',
          question: '$y = 2x + 3$ で、$x = 0$ のとき $y$ の値は？',
          options: ['$0$', '$2$', '$5$', '$3$'],
          correctIndex: 3,
          explanation:
            '$x = 0$ を代入すると $y = 2 \\times 0 + 3 = 3$。この値が切片 $b$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q4',
          question: '次のうち、一次関数であるものはどれ？',
          options: [
            '$y = \\dfrac{x - 4}{3}$',
            '$xy = 12$',
            '$y = x^2 + 1$',
            '$y = \\dfrac{6}{x}$',
          ],
          correctIndex: 0,
          explanation:
            '$y = \\dfrac{x - 4}{3} = \\dfrac{1}{3}x - \\dfrac{4}{3}$ と変形でき、$y = ax + b$ の形になるので一次関数だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q5',
          question:
            '$y = -4x + 10$ で、$x$ が $2$ から $5$ に増加するとき、変化の割合はいくつ？',
          options: ['$4$', '$-4$', '$-12$', '$10$'],
          correctIndex: 1,
          explanation:
            '一次関数の変化の割合は常に $a$ と等しいよ。$a = -4$ だから変化の割合は $-4$。どの区間でも同じ値になるんだ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q6',
          question:
            '$y = 5x - 2$ で、$x$ の増加量が $3$ のとき、$y$ の増加量はいくつ？',
          options: ['$3$', '$5$', '$15$', '$13$'],
          correctIndex: 2,
          explanation:
            '$y$ の増加量 $= a \\times x$ の増加量 $= 5 \\times 3 = 15$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q7',
          question:
            'ある一次関数で、$x$ が $4$ 増えると $y$ が $-8$ 変化する。変化の割合はいくつ？',
          options: ['$-2$', '$2$', '$4$', '$-4$'],
          correctIndex: 0,
          explanation:
            '変化の割合 $= y$ の増加量 $\\div$ $x$ の増加量 $= -8 \\div 4 = -2$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q8',
          question: '比例 $y = ax$ は一次関数の特別な場合である。これは正しい？',
          options: [
            '$a = 0$ のとき比例になる',
            '正しくない（比例と一次関数は別物）',
            '正しくない（一次関数が比例の特別な場合）',
            '正しい（$b = 0$ の場合）',
          ],
          correctIndex: 3,
          explanation:
            '比例 $y = ax$ は一次関数 $y = ax + b$ で $b = 0$ の場合だよ。だから比例は一次関数の仲間なんだ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q9',
          question:
            '水そうに最初 10L の水が入っていて、毎分 3L ずつ水を入れる。$x$ 分後の水の量 $y$ L の式はどれ？',
          options: [
            '$y = 10x + 3$',
            '$y = 3x + 10$',
            '$y = 3x - 10$',
            '$y = 10x - 3$',
          ],
          correctIndex: 1,
          explanation:
            '毎分3L増えるので $a = 3$、最初の量が $b = 10$。だから $y = 3x + 10$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q10',
          question:
            '$y = -2x + 14$ で、$x = 3$ のとき $y$ の値はいくつ？',
          options: ['$8$', '$20$', '$-8$', '$6$'],
          correctIndex: 0,
          explanation:
            '$y = -2 \\times 3 + 14 = -6 + 14 = 8$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q11',
          question:
            '一次関数 $y = ax + 3$ で、$x$ が $2$ 増えると $y$ が $6$ 増える。$a$ の値はいくつ？',
          options: ['$2$', '$6$', '$3$', '$9$'],
          correctIndex: 2,
          explanation:
            '変化の割合 $= a = y$ の増加量 $\\div$ $x$ の増加量 $= 6 \\div 2 = 3$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q12',
          question:
            '反比例 $y = \\dfrac{6}{x}$ の変化の割合について正しいものはどれ？',
          options: [
            '常に $6$ で一定',
            '常に $-6$ で一定',
            '常に $0$ で一定',
            '区間によって異なり一定ではない',
          ],
          correctIndex: 3,
          explanation:
            '反比例の変化の割合は区間によって異なるよ。変化の割合が一定なのは一次関数だけの特徴なんだ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-linear-func-meaning-ex1',
          question:
            '水そうに最初 3L の水が入っていて、毎分 2L ずつ水を入れる。$x$ 分後の水の量 $y$ L を式で表そう。',
          steps: [
            {
              title: 'Step 1: 関係を整理する',
              content:
                '最初 3L 入っていて、毎分 2L ずつ増えるから、$x$ 分後に増える水の量は $2x$ L だね。',
              highlight: '増える量 $= 2x$',
            },
            {
              title: 'Step 2: 式を立てる',
              content:
                '最初の 3L に、増えた分 $2x$ を足すよ。$y = 2x + 3$ だね！',
              highlight: '$y = 2x + 3$',
            },
            {
              title: 'Step 3: 確認する',
              content:
                '$x = 0$ のとき $y = 3$（最初の水の量）、$x = 1$ のとき $y = 5$、$x = 2$ のとき $y = 7$。毎分2ずつ増えてるね！',
              highlight: '変化の割合 $= 2$（一定）',
            },
          ],
          answer: '$y = 2x + 3$',
        },
        {
          id: 'math-g2-linear-func-meaning-ex2',
          question:
            '$y = -3x + 10$ について、$x$ が2から5まで増加するとき、変化の割合を求めよう。',
          steps: [
            {
              title: 'Step 1: $x$ の増加量を求める',
              content: '$x$ は $2$ から $5$ まで増えるから、$x$ の増加量は $5 - 2 = 3$',
              highlight: '$x$ の増加量 $= 3$',
            },
            {
              title: 'Step 2: $y$ の増加量を求める',
              content:
                '$x = 2$ のとき $y = -3 \\times 2 + 10 = 4$、$x = 5$ のとき $y = -3 \\times 5 + 10 = -5$。$y$ の増加量は $-5 - 4 = -9$',
              highlight: '$y$ の増加量 $= -9$',
            },
            {
              title: 'Step 3: 変化の割合を計算する',
              content:
                '変化の割合 $= y$ の増加量 $\\div$ $x$ の増加量 $= -9 \\div 3 = -3$。$a$ の値と同じだね！',
              highlight: '変化の割合 $= -3$',
            },
          ],
          answer: '変化の割合 $= -3$',
        },
        {
          id: 'math-g2-linear-func-meaning-ex3',
          question:
            '次の式のうち、$y$ が $x$ の一次関数であるものをすべて選ぼう。\n① $y = 4x - 1$　② $y = x^2$　③ $y = -7x$　④ $xy = 10$　⑤ $y = \\dfrac{2x + 6}{3}$',
          steps: [
            {
              title: 'Step 1: 一次関数の条件を確認',
              content:
                '一次関数は $y = ax + b$（$a \\neq 0$）の形で表せる式だよ。',
              highlight: '条件: $y = ax + b$（$a \\neq 0$）の形',
            },
            {
              title: 'Step 2: 1つずつ確認する',
              content:
                '① $y = 4x - 1$ → $a = 4, b = -1$ で一次関数 ○\n② $y = x^2$ → $x$ の2乗があるので ×\n③ $y = -7x$ → $a = -7, b = 0$ で一次関数 ○（比例でもある）\n④ $xy = 10$ → $y = \\dfrac{10}{x}$（反比例）なので ×\n⑤ $y = \\dfrac{2x + 6}{3} = \\dfrac{2}{3}x + 2$ → $a = \\dfrac{2}{3}, b = 2$ で一次関数 ○',
              highlight: '変形して $y = ax + b$ の形になるか確認！',
            },
          ],
          answer: '一次関数であるもの: ①、③、⑤',
        },
        {
          id: 'math-g2-linear-func-meaning-ex4',
          question:
            '$y = 4x + 1$ で、$x$ が $2$ から $5$ まで増加するとき、$y$ の増加量を求めよう。',
          steps: [
            {
              title: 'Step 1: $x$ の増加量を求める',
              content:
                '$x$ の増加量 $= 5 - 2 = 3$',
              highlight: '$x$ の増加量 $= 3$',
            },
            {
              title: 'Step 2: $y$ の増加量を求める（方法1: 直接計算）',
              content:
                '$x = 2$ のとき $y = 4 \\times 2 + 1 = 9$、$x = 5$ のとき $y = 4 \\times 5 + 1 = 21$。$y$ の増加量 $= 21 - 9 = 12$',
              highlight: '$y$ の増加量 $= 12$',
            },
            {
              title: 'Step 3: 確認（方法2: 変化の割合を使う）',
              content:
                '$y$ の増加量 $= a \\times x$ の増加量 $= 4 \\times 3 = 12$。同じ答えになったね！',
              highlight: '$y$ の増加量 $= a \\times x$ の増加量で素早く求められる',
            },
          ],
          answer: '$y$ の増加量 $= 12$',
        },
        {
          id: 'math-g2-linear-func-meaning-ex5',
          question:
            '長さ 24cm のろうそくに火をつけると、1分間に 0.3cm ずつ短くなる。$x$ 分後のろうそくの長さ $y$ cm を式で表し、30分後の長さを求めよう。',
          steps: [
            {
              title: 'Step 1: $a$ と $b$ を見つける',
              content:
                '1分ごとに 0.3cm 短くなるから $a = -0.3$。最初の長さが 24cm だから $b = 24$。',
              highlight: '$a = -0.3$（減少）、$b = 24$（初期値）',
            },
            {
              title: 'Step 2: 式を立てる',
              content: '$y = -0.3x + 24$',
              highlight: '$y = -0.3x + 24$',
            },
            {
              title: 'Step 3: 30分後の長さを求める',
              content:
                '$x = 30$ を代入すると $y = -0.3 \\times 30 + 24 = -9 + 24 = 15$',
              highlight: '30分後のろうそくの長さは $15$ cm',
            },
          ],
          answer: '式: $y = -0.3x + 24$、30分後の長さ: $15$ cm',
        },
        {
          id: 'math-g2-linear-func-meaning-ex6',
          question:
            'ある一次関数で、$x = 1$ のとき $y = 5$、$x = 4$ のとき $y = 14$ である。この一次関数の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 変化の割合 $a$ を求める',
              content:
                '$a = \\dfrac{y\\text{の増加量}}{x\\text{の増加量}} = \\dfrac{14 - 5}{4 - 1} = \\dfrac{9}{3} = 3$',
              highlight: '$a = 3$',
            },
            {
              title: 'Step 2: $b$ を求める',
              content:
                '$y = 3x + b$ に $x = 1, y = 5$ を代入すると $5 = 3 \\times 1 + b$ より $b = 2$',
              highlight: '$b = 2$',
            },
            {
              title: 'Step 3: 式を確認する',
              content:
                '$y = 3x + 2$。確認: $x = 4$ のとき $y = 3 \\times 4 + 2 = 14$ ✓',
              highlight: '$y = 3x + 2$',
            },
          ],
          answer: '$y = 3x + 2$',
        },
      ],
    },
    chatId: 'math-g2-linear-func-meaning',
  },
};
