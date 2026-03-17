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
        front: '$y = ax + b$（$a \\neq 0$、$a$, $b$ は定数）', back: '一次関数の一般式は？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc2',
        front: '変化の割合（傾き）。$x$ が1増えるときの $y$ の増加量。', back: '$y = ax + b$ の $a$ は何を表す？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc3',
        front: '切片。$x = 0$ のときの $y$ の値。', back: '$y = ax + b$ の $b$ は何を表す？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc4',
        front: '変化の割合 $= \\dfrac{y\\text{の増加量}}{x\\text{の増加量}} = a$', back: '変化の割合の求め方（公式）は？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc5',
        front: '増加量 $=$ 変化後の値 $-$ 変化前の値', back: '増加量の求め方は？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc6',
        front: 'どの区間で計算しても常に一定（$= a$）になる。', back: '一次関数の変化の割合にはどんな特徴がある？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc7',
        front: '比例は一次関数の $b = 0$ の特別な場合。比例は一次関数の仲間。', back: '比例 $y = ax$ と一次関数 $y = ax + b$ の関係は？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc8',
        front: '$y$ も増える（右上がりのグラフ）。', back: '$y = ax + b$ で $a > 0$ のとき、$x$ が増えると $y$ はどうなる？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc9',
        front: '$y$ は減る（右下がりのグラフ）。', back: '$y = ax + b$ で $a < 0$ のとき、$x$ が増えると $y$ はどうなる？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc10',
        front: '$y$ の増加量 $= a \\times n$（変化の割合 $\\times$ $x$ の増加量）', back: '一次関数で $x$ の増加量が $n$ のとき、$y$ の増加量は？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc11',
        front: 'どちらも一次関数ではない。$y = ax + b$ の形にならないから。', back: '$y = x^2$ や $y = \\dfrac{6}{x}$ は一次関数？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc12',
        front: '一定ではない。区間によって変化の割合が異なる。', back: '反比例の変化の割合は一定？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc13',
        front: '一次関数ではない。$a = 0$ なので $y$ が $x$ によって変化しない。', back: '$y = 7$ は一次関数？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc14',
        front: 'どちらでもある。$a = -5$, $b = 0$ の一次関数であり、比例でもある。', back: '$y = -5x$ は一次関数？ 比例？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc15',
        front: '$a = 0$ だと $y = b$（定数）になり、$x$ が変わっても $y$ が変化しないから。', back: '一次関数 $y = ax + b$ で $a \\neq 0$ が必要な理由は？',
      },
      {
        id: 'math-g2-linear-func-meaning-fc16',
        front: '$a$ は「1単位あたりの変化量」、$b$ は「最初の値（初期値）」と考える。', back: '文章題で一次関数を立式するコツは？',
      },
      { id: 'math-g2-linear-func-meaning-fc17', front: '$y = 3x$ は一次関数でもあり比例でもある（$b = 0$）', back: '$y = 3x$ は一次関数？比例？' },
      { id: 'math-g2-linear-func-meaning-fc18', front: '$y$ の増加量 $= a \times x$ の増加量。$a = 2$ で $x$ が $5$ 増えると $y$ は $10$ 増える。', back: '$y$ の増加量を素早く求める方法は？' },
      { id: 'math-g2-linear-func-meaning-fc19', front: '一次関数ではない。$a = 0$ だと $y = b$（定数）で $x$ が変わっても $y$ が変化しない。', back: '$y = 5$ は一次関数？' },
      { id: 'math-g2-linear-func-meaning-fc20', front: '変形して $y = ax + b$ の形になるか確認する。$y = \dfrac{x+6}{2} = \dfrac{1}{2}x + 3$ → 一次関数', back: '式が一次関数かどうか判定するには？' },
      { id: 'math-g2-linear-func-meaning-fc21', front: '温度の変化、水そうの水量、料金など', back: '一次関数の身近な例は？' },
      { id: 'math-g2-linear-func-meaning-fc22', front: '$a$（傾き）は1あたりの変化量、$b$（切片）は初期値と考える', back: '文章題で $a$ と $b$ を見つけるコツは？' },
      { id: 'math-g2-linear-func-meaning-fc23', front: '一定ではない。区間によって変化の割合が変わる。', back: '$y = x^2$ の変化の割合は一定？' },
      { id: 'math-g2-linear-func-meaning-fc24', front: '傾き $a$ が正なら右上がり、負なら右下がり', back: '一次関数のグラフの向きは何で決まる？' },
      { id: 'math-g2-linear-func-meaning-fc25', front: '$y = ax + b$ の $b$ は $x = 0$ のときの $y$ の値（$y$ 軸との交点）', back: '切片をグラフ上で見つけるには？' },
      { id: 'math-g2-linear-func-meaning-fc26', front: '$a$ の絶対値が大きいほどグラフは急になる', back: '傾きの大きさとグラフの関係は？' },
      { id: 'math-g2-linear-func-meaning-fc27', front: '表を作って $y$ の増え方が一定かチェックする', back: '一次関数かどうかを表で確認するには？' },
      { id: 'math-g2-linear-func-meaning-fc28', front: '一次関数の変化の割合は常に一定（$= a$）。二次関数は区間で変わる。', back: '一次関数と二次関数の変化の割合の違いは？' },
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
        {
          id: 'math-g2-linear-func-meaning-q13',
          question: '$y = -3x + 7$ で $x$ が $3$ 増えると $y$ はいくつ変化する？',
          options: ['$+9$', '$-9$', '$+3$', '$-3$'],
          correctIndex: 1,
          explanation: '$y$ の増加量 $= a \times x$ の増加量 $= (-3) \times 3 = -9$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q14',
          question: '次のうち、一次関数はどれ？',
          options: ['$y = 7$', '$y = \dfrac{3}{x}$', '$y = x^2 + 1$', '$y = -4x + 2$'],
          correctIndex: 3,
          explanation: '$y = -4x + 2$ は $y = ax + b$ の形で $a \neq 0$ だから一次関数だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q15',
          question: '$y = \dfrac{2x - 4}{3}$ は一次関数？',
          options: ['一次関数ではない', '一次関数である', '比例である', '反比例である'],
          correctIndex: 1,
          explanation: '$y = \dfrac{2}{3}x - \dfrac{4}{3}$ と変形でき、$y = ax + b$ の形だから一次関数だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q16',
          question: '一次関数 $y = ax + b$ で $a$ のことを何という？（2つの呼び方）',
          options: ['切片と定数', '傾きと変化の割合', '初期値と増加量', '係数と指数'],
          correctIndex: 1,
          explanation: '$a$ は「傾き」とも「変化の割合」とも呼ばれるよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q17',
          question: '初めに $20$ L 入った水そうに毎分 $5$ L ずつ入れる。$x$ 分後の水量 $y$ L は？',
          options: ['$y = 20x + 5$', '$y = 5x + 20$', '$y = 25x$', '$y = 5x - 20$'],
          correctIndex: 1,
          explanation: '毎分 $5$ L が傾き、初期量 $20$ L が切片。$y = 5x + 20$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q18',
          question: '$y = -x + 10$ で $x = 7$ のときの $y$ は？',
          options: ['$3$', '$17$', '$-3$', '$7$'],
          correctIndex: 0,
          explanation: '$y = -7 + 10 = 3$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q19',
          question: 'ある一次関数で $x = 0$ のとき $y = 4$。この $4$ のことを何という？',
          options: ['傾き', '変化の割合', '切片', '増加量'],
          correctIndex: 2,
          explanation: '$x = 0$ のときの $y$ の値が切片 $b$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q20',
          question: '$y = 2x + 1$ で $x$ が $-3$ から $2$ まで変化するとき、変化の割合は？',
          options: ['$2$', '$5$', '$10$', '$\dfrac{10}{5}$'],
          correctIndex: 0,
          explanation: '一次関数の変化の割合は常に $a = 2$ で一定だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q21',
          question: '長さ $30$ cm のろうそくが毎分 $0.5$ cm ずつ短くなる。$x$ 分後の長さ $y$ cm は？',
          options: ['$y = 0.5x + 30$', '$y = 30x - 0.5$', '$y = -0.5x + 30$', '$y = -30x + 0.5$'],
          correctIndex: 2,
          explanation: '短くなるので $a = -0.5$。初期値 $30$ が切片。$y = -0.5x + 30$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q22',
          question: '一次関数 $y = ax + 3$ で $x$ が $4$ 増えたら $y$ が $-12$ 変化した。$a$ は？',
          options: ['$3$', '$-3$', '$4$', '$-4$'],
          correctIndex: 1,
          explanation: '$a = \dfrac{-12}{4} = -3$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q23',
          question: '$y = 6x$ は一次関数？比例？',
          options: ['一次関数だけ', '比例だけ', '一次関数でもあり比例でもある', 'どちらでもない'],
          correctIndex: 2,
          explanation: '$b = 0$ の一次関数 $=$ 比例。どちらでもあるよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q24',
          question: '基本料金 $500$ 円に1分あたり $30$ 円かかる電話代。$x$ 分の料金 $y$ 円は？',
          options: ['$y = 500x + 30$', '$y = 30x + 500$', '$y = 530x$', '$y = 30x - 500$'],
          correctIndex: 1,
          explanation: '1分あたり $30$ 円が傾き、基本料金 $500$ 円が切片。$y = 30x + 500$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q25',
          question: '$y = -2x + 8$ で $y = 0$ のとき $x$ は？',
          options: ['$4$', '$-4$', '$8$', '$2$'],
          correctIndex: 0,
          explanation: '$0 = -2x + 8$ → $2x = 8$ → $x = 4$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q26',
          question: '一次関数で変化の割合が一定であることの意味は？',
          options: ['$y$ が常に同じ値', '$x$ が増えるとき $y$ の増え方がいつも同じ', 'グラフが曲線', '$b$ が変わらない'],
          correctIndex: 1,
          explanation: '$x$ が1増えるごとに $y$ はいつも同じ量 $a$ だけ変化するということだよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q27',
          question: '$y = 4x + 1$ で $x$ の増加量が $\dfrac{1}{2}$ のとき $y$ の増加量は？',
          options: ['$2$', '$4$', '$\dfrac{1}{2}$', '$1$'],
          correctIndex: 0,
          explanation: '$y$ の増加量 $= a \times x$ の増加量 $= 4 \times \dfrac{1}{2} = 2$ だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q28',
          question: '次の表で $y$ が $x$ の一次関数であるのはどれ？\n$x$: 1,2,3,4 → $y$: 3,5,7,9',
          options: ['一次関数（$y$ が $2$ ずつ増加）', '比例（$y = 2x$）', '一次関数ではない', '反比例'],
          correctIndex: 0,
          explanation: '$y$ は $2$ ずつ増加（一定）→ 一次関数。$y = 2x + 1$ だよ（$x=1$ で $y=3$）。',
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
