import type { Topic } from '../../../../../../../../data/types';

export const polynomialAddSub: Topic = {
  id: 'math-g2-poly-add-sub',
  eraId: 'math-g2-expressions',
  name: '多項式の加法・減法',
  subtitle: '同類項をまとめて計算しよう',
  icon: '➕',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '同類項をまとめる',
          content:
            '多項式の足し算では、同類項（文字の部分が同じ項）どうしの係数を足し算するよ。文字の部分が違う項はまとめられないから注意！',
          keyPoints: [
            '同類項の係数どうしを足す（例: 3x + 5x = 8x）',
            '文字の部分が違う項はそのまま残す（例: 3x + 2y はこれ以上まとめられない）',
            '数だけの項（定数項）も同類項どうしでまとめる',
          ],
        },
        {
          title: 'かっこの外し方（引き算で符号反転）',
          content:
            '多項式の引き算では、かっこの前が「−」のとき、かっこの中の全部の項の符号を反転させてから同類項をまとめるよ。',
          keyPoints: [
            'かっこの前が「+」→ そのまま外す（例: +(3x - 2) = 3x - 2）',
            'かっこの前が「−」→ 全部の項の符号が変わる（例: -(3x - 2) = -3x + 2）',
            '符号を変えたあとで同類項をまとめる',
          ],
        },
        {
          title: '数×多項式（分配法則）',
          content:
            '数を多項式にかけるときは、かっこの中の全部の項にその数をかけるよ。これを分配法則と言うんだ。$m(a + b) = ma + mb$ が基本の形だよ。',
          keyPoints: [
            '$2(3x + 5y) = 6x + 10y$（各項に $2$ をかける）',
            '$-3(2a - 4b) = -6a + 12b$（マイナスをかけると符号が変わる）',
            '分配法則: $m(a + b) = ma + mb$',
          ],
        },
        {
          title: '多項式÷数',
          content:
            '多項式を数で割るときは、各項をその数で割るよ。分数で割る場合は逆数をかけるのと同じだよ。',
          keyPoints: [
            '$(10x + 6y) \\div 2 = 5x + 3y$（各項を $2$ で割る）',
            '$(24a - 15b) \\div (-3) = -8a + 5b$（負の数で割ると符号が変わる）',
            '$\\div \\frac{1}{5}$ は $\\times 5$ と同じ',
          ],
        },
        {
          title: 'かっこがある式の計算（混合）',
          content:
            '2つ以上のかっこがある式は、まず分配法則でかっこを外してから、同類項をまとめるよ。',
          keyPoints: [
            '$2(x + y) + 3(x - 2y) = 2x + 2y + 3x - 6y = 5x - 4y$',
            '各かっこに分配法則を適用 → かっこを全部外す → 同類項をまとめる',
            'マイナスの係数のかっこは符号の変化に特に注意',
          ],
        },
        {
          title: '分数の形の式の計算',
          content:
            '分数の形の多項式の加減は、まず通分してから分子どうしの計算をするよ。分母が同じなら分子をそのまま足し引きするだけ！',
          keyPoints: [
            '分母が同じ → 分子をそのまま計算（例: $\\frac{3x-y}{2} + \\frac{x+y}{2} = \\frac{4x}{2} = 2x$）',
            '分母が違う → まず通分してから分子を計算',
            '引き算のときは引く方の分子全体にかっこをつけて符号に注意',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-pas-fc1',
        front: '多項式の加法とは？',
        back: '多項式どうしを足す計算。かっこを外して同類項をまとめる。$(A) + (B)$ の形。',
      },
      {
        id: 'math-g2-pas-fc2',
        front: '多項式の減法とは？',
        back: '多項式どうしを引く計算。$(A) - (B)$ のかっこを外すとき、$B$ の全ての項の符号を反転する。',
      },
      {
        id: 'math-g2-pas-fc3',
        front: '「+」のかっこを外すとき',
        back: 'そのまま外す。$+(3x - 2y) = 3x - 2y$',
      },
      {
        id: 'math-g2-pas-fc4',
        front: '「−」のかっこを外すとき',
        back: '全部の項の符号を反転する。$-(3x - 2y) = -3x + 2y$',
      },
      {
        id: 'math-g2-pas-fc5',
        front: '分配法則 $m(a + b)$ は？',
        back: '$m(a + b) = ma + mb$。かっこの中の全部の項に $m$ をかける。',
      },
      {
        id: 'math-g2-pas-fc6',
        front: '数×多項式で負の数をかけるとき',
        back: '符号が変わる！$-3(2a - 4b) = -6a + 12b$',
      },
      {
        id: 'math-g2-pas-fc7',
        front: '多項式÷数の計算方法は？',
        back: '各項をその数で割る。$(10x + 6y) \\div 2 = 5x + 3y$',
      },
      {
        id: 'math-g2-pas-fc8',
        front: '分数で割る計算 $\\div \\frac{1}{5}$',
        back: '逆数をかける。$\\div \\frac{1}{5} = \\times 5$',
      },
      {
        id: 'math-g2-pas-fc9',
        front: '通分とは？',
        back: '分母を同じ数にそろえること。$\\frac{1}{2}$ と $\\frac{1}{3}$ なら分母を $6$ にする。',
      },
      {
        id: 'math-g2-pas-fc10',
        front: '分数の形の式の加減の手順',
        back: '1. 通分する → 2. 分子のかっこを外す → 3. 同類項をまとめる → 4. 約分できれば約分',
      },
      {
        id: 'math-g2-pas-fc11',
        front: '式の値を求める手順は？',
        back: 'まず式を簡単にしてから値を代入する。先に代入すると計算ミスが起きやすい！',
      },
      {
        id: 'math-g2-pas-fc12',
        front: '縦書き（筆算）の加法とは？',
        back: '同類項を縦にそろえて書き、上下の係数を足す計算方法。',
      },
      {
        id: 'math-g2-pas-fc13',
        front: '縦書き（筆算）の減法の注意点',
        back: '引く方の式の全ての項の符号を反転してから足し算する。',
      },
      {
        id: 'math-g2-pas-fc14',
        front: 'よくある間違い: $-(3x - 2)$',
        back: '$\\times$ $-3x - 2$（間違い）、$\\bigcirc$ $-3x + 2$（正解）。$-2$ も $+2$ に変わる！',
      },
      {
        id: 'math-g2-pas-fc15',
        front: '$3(7a - 2b) - 5(4a - b)$ の計算',
        back: '$= 21a - 6b - 20a + 5b = a - b$',
      },
      {
        id: 'math-g2-pas-fc16',
        front: '同類項をまとめるとは？',
        back: '文字の部分が同じ項の係数どうしを足し引きすること。$3x + 5x = 8x$',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-poly-add-sub-q1',
          question: '$(3x + 2y) + (5x - 3y)$ の計算結果は？',
          options: ['$8x + 5y$', '$8x - 5y$', '$8x - y$', '$2x + 5y$'],
          correctIndex: 2,
          explanation:
            '$x$ の項: $3x + 5x = 8x$、$y$ の項: $2y + (-3y) = -y$。だから答えは $8x - y$ だよ。',
        },
        {
          id: 'math-g2-poly-add-sub-q2',
          question: '$(4a - 3b) - (2a - 5b)$ の計算結果は？',
          options: ['$2a + 2b$', '$6a + 2b$', '$2a - 8b$', '$2a - 2b$'],
          correctIndex: 0,
          explanation:
            'かっこを外すと $4a - 3b - 2a + 5b$。同類項をまとめて $2a + 2b$ だよ。引き算のかっこは符号が変わるのがポイント！',
        },
        {
          id: 'math-g2-poly-add-sub-q3',
          question: '$-(2x^2 - 4x + 1)$ を展開すると？',
          options: [
            '$2x^2 - 4x + 1$',
            '$-2x^2 + 4x - 1$',
            '$-2x^2 - 4x + 1$',
            '$-2x^2 + 4x + 1$',
          ],
          correctIndex: 1,
          explanation:
            'かっこの前が「$-$」なので全部の符号が反転！ $2x^2 \\rightarrow -2x^2$, $-4x \\rightarrow +4x$, $+1 \\rightarrow -1$ だよ。',
        },
        {
          id: 'math-g2-pas-q4',
          question: '$2(3x - 7y)$ の計算結果は？',
          options: ['$6x - 7y$', '$6x + 14y$', '$5x - 9y$', '$6x - 14y$'],
          correctIndex: 3,
          explanation:
            '分配法則で各項に $2$ をかけるよ。$2 \\times 3x = 6x$, $2 \\times (-7y) = -14y$ だから $6x - 14y$ だね。',
        },
        {
          id: 'math-g2-pas-q5',
          question: '$(24a - 15b) \\div (-3)$ の計算結果は？',
          options: ['$-8a + 5b$', '$8a - 5b$', '$-8a - 5b$', '$8a + 5b$'],
          correctIndex: 0,
          explanation:
            '各項を $-3$ で割るよ。$24a \\div (-3) = -8a$, $-15b \\div (-3) = 5b$ だから $-8a + 5b$ だよ。',
        },
        {
          id: 'math-g2-pas-q6',
          question: '$3(7a - 2b) - 5(4a - b)$ の計算結果は？',
          options: ['$a + 3b$', '$-a - b$', '$a - b$', '$a - 11b$'],
          correctIndex: 2,
          explanation:
            '$21a - 6b - 20a + 5b = a - b$ だよ。$-5 \\times (-b) = +5b$ に注意！',
        },
        {
          id: 'math-g2-pas-q7',
          question: '$\\frac{3x - y}{2} - \\frac{3x - 2y}{3}$ の計算結果は？',
          options: [
            '$\\frac{3x - y}{6}$',
            '$\\frac{3x + y}{6}$',
            '$\\frac{3x - 5y}{6}$',
            '$\\frac{3x + 5y}{6}$',
          ],
          correctIndex: 1,
          explanation:
            '通分して $\\frac{3(3x-y) - 2(3x-2y)}{6} = \\frac{9x - 3y - 6x + 4y}{6} = \\frac{3x + y}{6}$ だよ。',
        },
        {
          id: 'math-g2-pas-q8',
          question: '$(-x + 2y) \\div \\frac{1}{5}$ の計算結果は？',
          options: [
            '$-\\frac{x}{5} + \\frac{2y}{5}$',
            '$-5x - 10y$',
            '$5x - 10y$',
            '$-5x + 10y$',
          ],
          correctIndex: 3,
          explanation:
            '$\\div \\frac{1}{5}$ は $\\times 5$ と同じ！$(-x) \\times 5 = -5x$, $2y \\times 5 = 10y$ だから $-5x + 10y$ だよ。',
        },
        {
          id: 'math-g2-pas-q9',
          question:
            '$x = 4, y = -3$ のとき、$(3x - 4y) - (2x - 5y)$ の値は？',
          options: ['$7$', '$-1$', '$1$', '$-7$'],
          correctIndex: 2,
          explanation:
            'まず式を簡単にするよ。$3x - 4y - 2x + 5y = x + y$。$x + y = 4 + (-3) = 1$ だね。先に簡単にすると楽！',
        },
        {
          id: 'math-g2-pas-q10',
          question: '$-5(-a + 4b)$ の計算結果は？',
          options: [
            '$-5a + 20b$',
            '$5a + 20b$',
            '$-5a - 20b$',
            '$5a - 20b$',
          ],
          correctIndex: 3,
          explanation:
            '$-5 \\times (-a) = 5a$, $-5 \\times 4b = -20b$ だよ。マイナス×マイナスはプラスになるのがポイント！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-poly-add-sub-ex1',
          question:
            '次の計算をしよう。\n$(2x + 5y) + (4x - 3y)$',
          steps: [
            {
              title: 'Step 1: かっこを外そう',
              content:
                'かっこの前が「$+$」なのでそのまま外すよ。\n$2x + 5y + 4x - 3y$',
              highlight: '$2x + 5y + 4x - 3y$',
            },
            {
              title: 'Step 2: 同類項をまとめよう',
              content:
                '$x$ の項: $2x + 4x = 6x$\n$y$ の項: $5y - 3y = 2y$',
              highlight: '$6x + 2y$',
            },
          ],
          answer: '$6x + 2y$',
        },
        {
          id: 'math-g2-poly-add-sub-ex2',
          question:
            '次の計算をしよう。\n$(5a - 2b) - (3a - 7b)$',
          steps: [
            {
              title: 'Step 1: かっこを外そう',
              content:
                'かっこの前が「$-$」なので、中の符号を全部反転！\n$5a - 2b - 3a + 7b$',
              highlight: '$5a - 2b - 3a + 7b$',
            },
            {
              title: 'Step 2: 同類項をまとめよう',
              content:
                '$a$ の項: $5a - 3a = 2a$\n$b$ の項: $-2b + 7b = 5b$',
              highlight: '$2a + 5b$',
            },
          ],
          answer: '$2a + 5b$',
        },
        {
          id: 'math-g2-pas-ex3',
          question:
            '次の計算をしよう。\n$-3(2a - 4b)$',
          steps: [
            {
              title: 'Step 1: 分配法則を使おう',
              content:
                'かっこの中の各項に $-3$ をかけるよ。\n$-3 \\times 2a = -6a$\n$-3 \\times (-4b) = 12b$',
              highlight: '$-3 \\times 2a$, $-3 \\times (-4b)$',
            },
            {
              title: 'Step 2: 結果をまとめよう',
              content:
                '$-6a + 12b$\nマイナス×マイナスはプラスになるのがポイント！',
              highlight: '$-6a + 12b$',
            },
          ],
          answer: '$-6a + 12b$',
        },
        {
          id: 'math-g2-pas-ex4',
          question:
            '次の計算をしよう。\n$3(7a - 2b) - 5(4a - b)$',
          steps: [
            {
              title: 'Step 1: 各かっこに分配法則を使おう',
              content:
                '1つ目: $3(7a - 2b) = 21a - 6b$\n2つ目: $-5(4a - b) = -20a + 5b$',
              highlight: '$21a - 6b - 20a + 5b$',
            },
            {
              title: 'Step 2: 同類項をまとめよう',
              content:
                '$a$ の項: $21a - 20a = a$\n$b$ の項: $-6b + 5b = -b$',
              highlight: '$a - b$',
            },
          ],
          answer: '$a - b$',
        },
        {
          id: 'math-g2-pas-ex5',
          question:
            '次の計算をしよう。\n$\\frac{3x - y}{2} - \\frac{3x - 2y}{3}$',
          steps: [
            {
              title: 'Step 1: 通分しよう',
              content:
                '分母の最小公倍数は $6$。\n$\\frac{3(3x - y)}{6} - \\frac{2(3x - 2y)}{6}$',
              highlight: '分母を $6$ にそろえる',
            },
            {
              title: 'Step 2: 分子を展開しよう',
              content:
                '分子: $3(3x - y) - 2(3x - 2y)$\n$= 9x - 3y - 6x + 4y$\n$= 3x + y$',
              highlight: '$\\frac{3x + y}{6}$',
            },
          ],
          answer: '$\\frac{3x + y}{6}$',
        },
        {
          id: 'math-g2-pas-ex6',
          question:
            '$x = 4, y = -3$ のとき、$(3x - 4y) - (2x - 5y)$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: まず式を簡単にしよう',
              content:
                '$(3x - 4y) - (2x - 5y)$\n$= 3x - 4y - 2x + 5y$\n$= x + y$',
              highlight: '$x + y$',
            },
            {
              title: 'Step 2: 値を代入しよう',
              content:
                '$x + y = 4 + (-3) = 1$\n先に式を簡単にしてから代入すると計算が楽だよ！',
              highlight: '$1$',
            },
          ],
          answer: '$1$',
        },
      ],
    },
    chatId: 'math-g2-poly-add-sub',
  },
};
