import type { Topic } from '../../../../../../../../data/types';

export const literalNotation: Topic = {
  id: 'math-g1-lit-notation',
  eraId: 'math-g1-literal-exp',
  name: '文字式の表し方',
  subtitle: '×や÷を省いた表し方をマスター',
  icon: '🔤',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '数量を文字で表す',
          content:
            'わからない数や変わる数を、$a$ や $x$ などの文字を使って表すことができるよ。文字を使うと、いろいろな場面の数量をひとつの式で表せるんだ。',
          keyPoints: [
            '1個 $a$ 円のりんごを5個買った代金 → $5a$ 円',
            '時速 $x$ km で3時間走った道のり → $3x$ km',
            '文字を使うと、数が変わっても同じ式で表せる',
          ],
        },
        {
          title: '乗法記号×を省くルール',
          content:
            '文字式では、かけ算の「×」の記号を省略するよ。そのとき、数を文字の前に書く、アルファベット順に書くなどのルールがあるんだ。',
          keyPoints: [
            '×の記号は省略する（例: $a \\times b$ → $ab$）',
            '数は文字の前に書く（例: $x \\times 3$ → $3x$）',
            '1は省略する（例: $1 \\times a$ → $a$）、$-1$ も符号だけ（$-a$）',
            '同じ文字の積は指数で表す（例: $a \\times a$ → $a^2$）',
          ],
        },
        {
          title: '除法記号÷は分数で表す',
          content:
            '文字式では、割り算の「÷」は使わず、分数の形で書くよ。',
          keyPoints: [
            '$a \\div b$ → $\\dfrac{a}{b}$',
            '$x \\div 3$ → $\\dfrac{x}{3}$',
            '÷は絶対に使わない！必ず分数にする',
          ],
        },
        {
          title: '代入と式の値',
          content:
            '文字に具体的な数を当てはめることを「代入」と言うよ。代入して計算した結果を「式の値」と言うんだ。',
          keyPoints: [
            '代入 = 文字に数を当てはめること',
            '式の値 = 代入して計算した結果',
            '負の数を代入するときは、かっこをつける（例: $x = -2$ なら $3x = 3 \\times (-2) = -6$）',
          ],
        },
        {
          title: '数量を文字式で表す（実生活の場面）',
          content:
            '文字式を使うと、代金・おつり・速さ・道のり・時間・割合・面積など、いろいろな数量をまとめて表せるよ。公式に文字を当てはめて考えよう。',
          keyPoints: [
            '代金 = 単価 × 個数（例: 1個 $a$ 円を $n$ 個 → $an$ 円）',
            'おつり = 出した金額 − 代金（例: 1000円出して $a$ 円の品を3個 → $1000 - 3a$ 円）',
            '道のり = 速さ × 時間、速さ = 道のり ÷ 時間、時間 = 道のり ÷ 速さ',
            '割合の表し方: $a$ 円の30%引き → $0.7a$ 円、$a$ 円の $x$ %増し → $a(1 + \\dfrac{x}{100})$ 円',
            '面積: 三角形 = $\\dfrac{ah}{2}$、円 = $\\pi r^2$',
          ],
        },
        {
          title: '式の意味を読み取る',
          content:
            '文字式を見て、「この式はどんな数量を表しているか」を考えることも大切だよ。式の各部分がどんな意味を持つかを読み取ろう。',
          keyPoints: [
            '$5a$ → 「$a$ の5倍」「$a$ 円の品5個分の代金」など',
            '$\\dfrac{a}{3}$ → 「$a$ を3で割った値」「$a$ km を3時間で行く速さ」など',
            '$1000 - 4a$ → 「$a$ 円の品4個を買い1000円出したおつり」',
            '式の意味は場面によって変わる。問題文をよく読もう！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g1-lit-notation-fc1',
        front: '文字式とは？',
        back: '文字（$a$, $x$ など）を使って数量を表した式のこと。数が変わっても同じ式で表せるのが便利！',
      },
      {
        id: 'math-g1-lit-notation-fc2',
        front: '文字式で×の記号はどうする？',
        back: '省略する。$a \\times b$ → $ab$ と書く。',
      },
      {
        id: 'math-g1-lit-notation-fc3',
        front: '文字式で数と文字をかけるとき、数はどこに書く？',
        back: '数を文字の前に書く。$x \\times 3$ → $3x$（×ではなく $x3$ にしない！）',
      },
      {
        id: 'math-g1-lit-notation-fc4',
        front: '文字式の「1の省略」のルールは？',
        back: '$1 \\times a$ → $a$（1は書かない）。$(-1) \\times a$ → $-a$（符号の $-$ だけ書く）。',
      },
      {
        id: 'math-g1-lit-notation-fc5',
        front: '$-1$ をかけるときの書き方は？',
        back: '$(-1) \\times x$ → $-x$（$-1$ の「1」を省略し、マイナスの符号だけ書く）',
      },
      {
        id: 'math-g1-lit-notation-fc6',
        front: '同じ文字の積はどう表す？（指数表記）',
        back: '指数を使う。$a \\times a$ → $a^2$、$a \\times a \\times a$ → $a^3$',
      },
      {
        id: 'math-g1-lit-notation-fc7',
        front: '文字式で÷の記号はどうする？',
        back: '÷は使わずに分数で表す。$a \\div b$ → $\\dfrac{a}{b}$',
      },
      {
        id: 'math-g1-lit-notation-fc8',
        front: '「代入」とは？',
        back: '文字に具体的な数を当てはめること。例: $3x$ の $x$ に $2$ を代入 → $3 \\times 2 = 6$',
      },
      {
        id: 'math-g1-lit-notation-fc9',
        front: '「式の値」とは？',
        back: '文字に数を代入して計算した結果のこと。例: $x = 2$ のとき $3x$ の式の値は $6$',
      },
      {
        id: 'math-g1-lit-notation-fc10',
        front: '負の数を代入するときの注意点は？',
        back: 'かっこをつけて代入する。$x = -3$ なら $2x = 2 \\times (-3) = -6$（かっこを忘れると間違える！）',
      },
      {
        id: 'math-g1-lit-notation-fc11',
        front: '文字式で複数の文字をかけるとき、文字の順番は？',
        back: 'アルファベット順に並べる。$y \\times x$ → $xy$、$c \\times a \\times b$ → $abc$',
      },
      {
        id: 'math-g1-lit-notation-fc12',
        front: '速さ・道のり・時間の関係を文字式で表すと？',
        back: '道のり $=$ 速さ $\\times$ 時間、速さ $= \\dfrac{\\text{道のり}}{\\text{時間}}$、時間 $= \\dfrac{\\text{道のり}}{\\text{速さ}}$',
      },
      {
        id: 'math-g1-lit-notation-fc13',
        front: '「$a$ 円の品物を30%引き」を文字式で表すと？',
        back: '$0.7a$ 円（$a - 0.3a = 0.7a$）。割引後の割合 $= 1 - 0.3 = 0.7$ を使う。',
      },
      {
        id: 'math-g1-lit-notation-fc14',
        front: '三角形の面積を文字式で表すと？（底辺 $a$、高さ $h$）',
        back: '$\\dfrac{ah}{2}$（底辺 $\\times$ 高さ $\\div$ 2）',
      },
      {
        id: 'math-g1-lit-notation-fc15',
        front: '×と÷が混じった式の書き方は？',
        back: '×は省略し、÷は分数にする。例: $a \\times b \\div c$ → $\\dfrac{ab}{c}$',
      },
      {
        id: 'math-g1-lit-notation-fc16',
        front: '円の面積と周の長さを文字式（$\\pi$ 使用）で表すと？',
        back: '面積 $= \\pi r^2$、周の長さ $= 2\\pi r$（$r$ は半径）',
      },
      {
        id: 'math-g1-lit-notation-fc17',
        front: '$-a^2$ と $(-a)^2$ の違いは？',
        back: '$-a^2 = -(a \\times a)$（$a^2$ にマイナス）、$(-a)^2 = (-a) \\times (-a)$（$-a$ を2乗）。$a = 3$ なら $-a^2 = -9$、$(-a)^2 = 9$ と結果が異なる。',
      },
      {
        id: 'math-g1-lit-notation-fc18',
        front: 'おつりを文字式で表す公式は？',
        back: 'おつり $=$ 出した金額 $-$ 代金。例: 1000円出して1個 $a$ 円を $n$ 個買う → $1000 - an$ 円',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-lit-notation-q1',
          question: '$3 \\times a \\times a$ を文字式で表すと？',
          options: ['$3a$', '$3a^2$', '$3 + a^2$', '$a^3$'],
          correctIndex: 1,
          explanation:
            '$3 \\times a \\times a$ は、数の $3$ を前に、$a$ が2個かけ合わされているので $3a^2$ と表すよ。',
        },
        {
          id: 'math-g1-lit-notation-q2',
          question: '$x \\div 5$ を文字式で表すと？',
          options: ['$5x$', '$x - 5$', '$\\dfrac{x}{5}$', '$\\dfrac{5}{x}$'],
          correctIndex: 2,
          explanation:
            '÷は分数で表すのがルール！$x \\div 5 = \\dfrac{x}{5}$ だよ。',
        },
        {
          id: 'math-g1-lit-notation-q3',
          question: '$a \\times b \\times (-1)$ を文字式で表すと？',
          options: ['$ab$', '$-ab$', '$-1ab$', '$a(-b)$'],
          correctIndex: 1,
          explanation:
            '$-1$ をかけるときは、$-1$ の「1」を省略して $-ab$ と書くよ。',
        },
        {
          id: 'math-g1-lit-notation-q4',
          question: '$2x + 3$ に $x = -4$ を代入すると、式の値はいくつ？',
          options: ['$-5$', '$11$', '$5$', '$-11$'],
          correctIndex: 0,
          explanation:
            '$2 \\times (-4) + 3 = -8 + 3 = -5$ だよ。負の数を代入するときはかっこをつけて計算しよう。',
        },
        {
          id: 'math-g1-lit-notation-q5',
          question: '$a \\times 2 \\div b$ を文字式で表すと？',
          options: ['$\\dfrac{2a}{b}$', '$\\dfrac{a}{2b}$', '$2ab$', '$\\dfrac{ab}{2}$'],
          correctIndex: 0,
          explanation:
            '$a \\times 2 = 2a$（数を前に書く）、$\\div b$ は分母に $b$ を置いて $\\dfrac{2a}{b}$ だよ。',
        },
        {
          id: 'math-g1-lit-notation-q6',
          question: '1個 $a$ 円のケーキを4個買い、1000円を出したときのおつりは？',
          options: ['$4a - 1000$ 円', '$1000 - 4a$ 円', '$1000 + 4a$ 円', '$\\dfrac{1000}{4a}$ 円'],
          correctIndex: 1,
          explanation:
            'おつり = 出した金額 − 代金。代金は $4a$ 円だから、おつりは $1000 - 4a$ 円だよ。',
        },
        {
          id: 'math-g1-lit-notation-q7',
          question: '$x$ km の道のりを $y$ 時間で歩いたときの時速は？',
          options: ['$xy$ km/時', '$\\dfrac{y}{x}$ km/時', '$\\dfrac{x}{y}$ km/時', '$x - y$ km/時'],
          correctIndex: 2,
          explanation:
            '速さ = 道のり ÷ 時間 だから $\\dfrac{x}{y}$ km/時だよ。',
        },
        {
          id: 'math-g1-lit-notation-q8',
          question: '$5a$ はどんな数量を表す？（$a$ 円の品物について）',
          options: ['$a$ 円の品物の5%引きの値段', '$a$ 円の品物5個分の代金', '$a$ 円に5円足した値段', '$a$ 円の品物を5で割った値段'],
          correctIndex: 1,
          explanation:
            '$5a = 5 \\times a$ だから、$a$ 円の品物を5個買った代金を表しているよ。',
        },
        {
          id: 'math-g1-lit-notation-q9',
          question: '$a^2 - 2a$ に $a = -3$ を代入すると、式の値はいくつ？',
          options: ['$3$', '$15$', '$-3$', '$-15$'],
          correctIndex: 1,
          explanation:
            '$(-3)^2 - 2 \\times (-3) = 9 + 6 = 15$ だよ。$(-3)^2 = 9$、$-2 \\times (-3) = 6$ に注意！',
        },
        {
          id: 'math-g1-lit-notation-q10',
          question: '$\\dfrac{x}{3}$ に $x = \\dfrac{3}{4}$ を代入すると、式の値はいくつ？',
          options: ['$\\dfrac{1}{4}$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$4$'],
          correctIndex: 0,
          explanation:
            '$\\dfrac{x}{3} = x \\div 3 = \\dfrac{3}{4} \\div 3 = \\dfrac{3}{4} \\times \\dfrac{1}{3} = \\dfrac{1}{4}$ だよ。',
        },
        {
          id: 'math-g1-lit-notation-q11',
          question: '$b \\times b \\times b$ を文字式で表すと？',
          options: ['$3b$', '$b + 3$', '$b^3$', '$3b^2$'],
          correctIndex: 2,
          explanation:
            '同じ文字を3回かけているので指数を使って $b^3$ と表すよ。',
        },
        {
          id: 'math-g1-lit-notation-q12',
          question: '$2a + 3b$ に $a = 4, b = -2$ を代入すると、式の値はいくつ？',
          options: ['$14$', '$2$', '$-2$', '$10$'],
          correctIndex: 1,
          explanation:
            '$2 \\times 4 + 3 \\times (-2) = 8 + (-6) = 8 - 6 = 2$ だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-lit-notation-ex1',
          question:
            '次の式を文字式の表し方のルールにしたがって書きなおそう。\n$a \\times 4 \\times b$',
          steps: [
            {
              title: 'Step 1: 数を文字の前に書く',
              content:
                '$a \\times 4 \\times b$ の数は $4$。数を一番前に出そう。',
              highlight: '$4 \\times a \\times b$',
            },
            {
              title: 'Step 2: ×を省略する',
              content:
                'かけ算の×を全部省略するよ。文字はアルファベット順に並べよう。',
              highlight: '$4ab$',
            },
          ],
          answer: '$4ab$',
        },
        {
          id: 'math-g1-lit-notation-ex2',
          question:
            '$3a$ に $a = -2$ を代入して、式の値を求めよう。',
          steps: [
            {
              title: 'Step 1: 文字に数を代入する',
              content:
                '$a = -2$ を代入するよ。$3a = 3 \\times (-2)$\n負の数はかっこをつけることを忘れずに！',
              highlight: '$3 \\times (-2)$',
            },
            {
              title: 'Step 2: 計算する',
              content: '$3 \\times (-2) = -6$',
              highlight: '$-6$',
            },
          ],
          answer: '$-6$',
        },
        {
          id: 'math-g1-lit-notation-ex3',
          question:
            '次の式を文字式の表し方のルールにしたがって書きなおそう。\n$x \\times x \\div y$',
          steps: [
            {
              title: 'Step 1: 同じ文字の積を指数で表す',
              content: '$x \\times x = x^2$ だね。',
              highlight: '$x^2 \\div y$',
            },
            {
              title: 'Step 2: ÷を分数にする',
              content: '÷は分数で表すよ。',
              highlight: '$\\dfrac{x^2}{y}$',
            },
          ],
          answer: '$\\dfrac{x^2}{y}$',
        },
        {
          id: 'math-g1-lit-notation-ex4',
          question:
            '時速 $a$ km で $b$ 時間走ったあと、時速 $c$ km で2時間走った。合計の道のりを文字式で表そう。',
          steps: [
            {
              title: 'Step 1: 道のりの公式を確認する',
              content:
                '道のり = 速さ × 時間 だね。それぞれの区間で計算しよう。',
              highlight: '道のり = 速さ × 時間',
            },
            {
              title: 'Step 2: 前半の道のりを求める',
              content:
                '時速 $a$ km で $b$ 時間走った道のりは $a \\times b = ab$ km。',
              highlight: '$ab$ km',
            },
            {
              title: 'Step 3: 後半の道のりを求める',
              content:
                '時速 $c$ km で2時間走った道のりは $c \\times 2 = 2c$ km。',
              highlight: '$2c$ km',
            },
            {
              title: 'Step 4: 合計を求める',
              content: '前半 + 後半で合計の道のりが出るよ。',
              highlight: '$(ab + 2c)$ km',
            },
          ],
          answer: '$(ab + 2c)$ km',
        },
        {
          id: 'math-g1-lit-notation-ex5',
          question:
            '次の式を文字式の表し方のルールにしたがって書きなおそう。\n$a \\times 3 \\div b \\times a$',
          steps: [
            {
              title: 'Step 1: かけ算の部分をまとめる',
              content:
                'かけ算の部分を先に見ると、$a \\times 3 \\times a = 3 \\times a \\times a = 3a^2$ だね。',
              highlight: '$3a^2$',
            },
            {
              title: 'Step 2: ÷を分数にする',
              content:
                '$\\div b$ があるから、$b$ を分母に置くよ。',
              highlight: '$\\dfrac{3a^2}{b}$',
            },
          ],
          answer: '$\\dfrac{3a^2}{b}$',
        },
        {
          id: 'math-g1-lit-notation-ex6',
          question:
            '$3x - 2y$ に $x = \\dfrac{2}{3}, y = -\\dfrac{1}{2}$ を代入して、式の値を求めよう。',
          steps: [
            {
              title: 'Step 1: $x$ を代入する',
              content:
                '$3x = 3 \\times \\dfrac{2}{3} = \\dfrac{6}{3} = 2$',
              highlight: '$3x = 2$',
            },
            {
              title: 'Step 2: $y$ を代入する',
              content:
                '$2y = 2 \\times \\left(-\\dfrac{1}{2}\\right) = -1$\n負の数はかっこをつけて代入しよう！',
              highlight: '$2y = -1$',
            },
            {
              title: 'Step 3: 式全体を計算する',
              content:
                '$3x - 2y = 2 - (-1) = 2 + 1 = 3$',
              highlight: '$3$',
            },
          ],
          answer: '$3$',
        },
      ],
    },
    chatId: 'math-g1-lit-notation',
  },
};
