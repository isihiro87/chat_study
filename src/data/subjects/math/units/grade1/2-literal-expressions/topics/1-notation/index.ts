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
        front: '文字を使って数量を表した式', back: '文字式とは？',
        explanation: '文字（$a$, $x$ など）を使って数量を表した式のこと。数が変わっても同じ式で表せるのが便利！',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc2',
        front: '省略する', back: '文字式で×の記号はどうする？',
        explanation: '$a \\times b$ → $ab$ と書く。',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc3',
        front: '数を文字の前に書く', back: '文字式で数と文字をかけるとき、数はどこに書く？',
        explanation: '$x \\times 3$ → $3x$（×ではなく $x3$ にしない！）',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc4',
        front: '1は省略し、$-1$ は符号だけ残す', back: '文字式の「1の省略」のルールは？',
        explanation: '$1 \\times a$ → $a$（1は書かない）。$(-1) \\times a$ → $-a$（符号の $-$ だけ書く）。',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc5',
        front: '$-x$', back: '$-1$ をかけるときの書き方は？',
        explanation: '$(-1) \\times x$ → $-x$（$-1$ の「1」を省略し、マイナスの符号だけ書く）',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc6',
        front: '指数を使う', back: '同じ文字の積はどう表す？（指数表記）',
        explanation: '$a \\times a$ → $a^2$、$a \\times a \\times a$ → $a^3$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc7',
        front: '÷は使わずに分数で表す', back: '文字式で÷の記号はどうする？',
        explanation: '$a \\div b$ → $\\dfrac{a}{b}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc8',
        front: '文字に具体的な数を当てはめること', back: '「代入」とは？',
        explanation: '例: $3x$ の $x$ に $2$ を代入 → $3 \\times 2 = 6$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc9',
        front: '文字に数を代入して計算した結果', back: '「式の値」とは？',
        explanation: '例: $x = 2$ のとき $3x$ の式の値は $6$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc10',
        front: 'かっこをつけて代入する', back: '負の数を代入するときの注意点は？',
        explanation: '$x = -3$ なら $2x = 2 \\times (-3) = -6$（かっこを忘れると間違える！）',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc11',
        front: 'アルファベット順に並べる', back: '文字式で複数の文字をかけるとき、文字の順番は？',
        explanation: '$y \\times x$ → $xy$、$c \\times a \\times b$ → $abc$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc12',
        front: '道のり $=$ 速さ $\\times$ 時間', back: '速さ・道のり・時間の関係を文字式で表すと？',
        explanation: '速さ $= \\dfrac{\\text{道のり}}{\\text{時間}}$、時間 $= \\dfrac{\\text{道のり}}{\\text{速さ}}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-notation-fc13',
        front: '$0.7a$ 円', back: '「$a$ 円の品物を30%引き」を文字式で表すと？',
        explanation: '$a - 0.3a = 0.7a$。割引後の割合 $= 1 - 0.3 = 0.7$ を使う。',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-notation-fc14',
        front: '$\\dfrac{ah}{2}$', back: '三角形の面積を文字式で表すと？（底辺 $a$、高さ $h$）',
        explanation: '底辺 $\\times$ 高さ $\\div$ 2',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-notation-fc15',
        front: '×は省略し、÷は分数にする', back: '×と÷が混じった式の書き方は？',
        explanation: '例: $a \\times b \\div c$ → $\\dfrac{ab}{c}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-notation-fc16',
        front: '面積 $= \\pi r^2$、周の長さ $= 2\\pi r$', back: '円の面積と周の長さを文字式（$\\pi$ 使用）で表すと？',
        explanation: '$r$ は半径。面積は半径の2乗に $\\pi$ をかけ、周の長さは直径に $\\pi$ をかける。',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-notation-fc17',
        front: '$-a^2 = -(a^2)$、$(-a)^2 = a^2$', back: '$-a^2$ と $(-a)^2$ の違いは？',
        explanation: '$-a^2 = -(a \\times a)$（$a^2$ にマイナス）、$(-a)^2 = (-a) \\times (-a)$（$-a$ を2乗）。\n$a = 3$ なら $-a^2 = -9$、$(-a)^2 = 9$ と結果が異なる。',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-notation-fc18',
        front: 'おつり $=$ 出した金額 $-$ 代金', back: 'おつりを文字式で表す公式は？',
        explanation: '例: 1000円出して1個 $a$ 円を $n$ 個買う → $1000 - an$ 円',
        difficulty: 'standard',
      },
      { id: 'math-g1-lit-notation-fc19', front: '$a^2b$', back: '$a \\times a \\times b$ を文字式で表すと？', explanation: '×を省略し、同じ文字は指数で表す。$a \\times a = a^2$ なので $a^2b$。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc20', front: '代金 $=$ 単価 $\\times$ 個数', back: '代金とおつりの基本公式は？', explanation: 'おつり $=$ 支払い $-$ 代金。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc21', front: '$\\pi r^2$', back: '円の面積を文字式で表すと？', explanation: '$\\pi$ は円周率、$r$ は半径。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc22', front: 'かっこをつけて代入する', back: '累乗の式に負の数を代入するときの注意は？', explanation: '$x=-2$ なら $x^2 = (-2)^2 = 4$（$-2^2 = -4$ にしない！）', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc23', front: '$1.08a$ 円', back: '「$a$ 円の品物に消費税 $8$%」を文字式で表すと？', explanation: '$a + 0.08a = 1.08a$', difficulty: 'advanced' },
      { id: 'math-g1-lit-notation-fc24', front: '体積 $= \\dfrac{1}{3} \\pi r^2 h$', back: '円すいの体積を文字式で表すと？', explanation: '底面の半径 $r$、高さ $h$。円柱の体積 $\\pi r^2 h$ の $\\dfrac{1}{3}$。', difficulty: 'advanced' },
      { id: 'math-g1-lit-notation-fc25', front: '$\\dfrac{a+b}{2}$', back: '$a$ と $b$ の平均を文字式で表すと？', explanation: '2つの数の和を $2$ で割る。', difficulty: 'advanced' },
      { id: 'math-g1-lit-notation-fc26', front: '$x \\times y$（2つの文字の積）', back: '文字式 $xy$ の意味は？', explanation: '$xy$ は $x \\times y$。$x + y$ とは全く別物！', difficulty: 'advanced' },
      { id: 'math-g1-lit-notation-fc27', front: '$100a + 10b + c$', back: '3けたの自然数を文字式で表すと？', explanation: '百の位 $a$、十の位 $b$、一の位 $c$。各位の数にその位の重み（100, 10, 1）をかけて足す。', difficulty: 'advanced' },
      { id: 'math-g1-lit-notation-fc28', front: '文字が何を表すか明記する', back: '文字式で大切なのは何を $x$ にしたか明記すること。なぜ？', explanation: '「$x$ は個数」「$a$ は速さ」など、文字の意味を書かないと式の意味が伝わらない。', difficulty: 'advanced' },
      { id: 'math-g1-lit-notation-fc29', front: '$ab$', back: '$a \\times b$ を文字式で表すと？', explanation: '×の記号を省略して $ab$ と書く。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc30', front: '$5x$', back: '$x \\times 5$ を文字式で表すと？', explanation: '数を文字の前に書くルール。$x5$ ではなく $5x$。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc31', front: '$ab$（アルファベット順）', back: '$b \\times a$ を文字式で表すと？', explanation: '文字はアルファベット順に並べる。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc32', front: '$3xy$', back: '$y \\times x \\times 3$ を文字式で表すと？', explanation: '数を先に書き、文字はアルファベット順。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc33', front: '$a$（1は省略する）', back: '$1 \\times a$ を文字式で表すと？', explanation: '係数 $1$ は省略して文字だけ書く。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc34', front: '$a^2$', back: '$a \\times a$ を文字式で表すと？', explanation: '同じ文字の積は指数で表す。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc35', front: '$b^3$', back: '$b \\times b \\times b$ を文字式で表すと？', explanation: '同じ文字 $3$ つの積は $3$ 乗。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc36', front: '$5a^2$', back: '$a \\times 5 \\times a$ を文字式で表すと？', explanation: '数を前に出し、$a \\times a = a^2$ にする。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc37', front: '$-4xy$', back: '$x \\times (-4) \\times y$ を文字式で表すと？', explanation: '数（$-4$）を前に出し、文字はアルファベット順。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc38', front: '$\\dfrac{a}{b}$', back: '$a \\div b$ を文字式で表すと？', explanation: '÷は使わず分数で表す。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc39', front: '$\\dfrac{ab}{c}$', back: '$a \\times b \\div c$ を文字式で表すと？', explanation: '×は省略し、÷は分数にする。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc40', front: '$\\dfrac{xz}{y}$', back: '$x \\div y \\times z$ を文字式で表すと？', explanation: '割る $y$ が分母、かける $z$ は $x$ とともに分子へ。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc41', front: '$\\dfrac{x^2}{5}$', back: '$x \\times x \\div 5$ を文字式で表すと？', explanation: '$x \\times x = x^2$、$\\div 5$ は分母へ。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc42', front: '$7a$ 円', back: '1個 $a$ 円のりんごを $7$ 個買ったときの代金は？', explanation: '代金 $=$ 単価 $\\times$ 個数。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc43', front: '$(1000 - xy)$ 円', back: '1本 $x$ 円のジュースを $y$ 本買い、$1000$ 円出したおつりは？', explanation: 'おつり $=$ 出した金額 $-$ 代金。代金 $= xy$。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc44', front: '$\\dfrac{x}{y}$ km/時', back: '$x$ km の道のりを $y$ 時間で歩いたときの時速は？', explanation: '速さ $=$ 道のり $\\div$ 時間。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc45', front: '$\\dfrac{a}{4}$ 時間', back: '$a$ km の道のりを時速 $4$ km で歩いたときの時間は？', explanation: '時間 $=$ 道のり $\\div$ 速さ。', difficulty: 'standard' },
      { id: 'math-g1-lit-notation-fc46', front: '$(x - y)$ 人', back: '$x$ 人のクラスで女子が $y$ 人のとき、男子の人数は？', explanation: '男子 $=$ 全体 $-$ 女子。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc47', front: '$15$', back: '$5x$ に $x = 3$ を代入すると、式の値は？', explanation: '$5 \\times 3 = 15$。', difficulty: 'basic' },
      { id: 'math-g1-lit-notation-fc48', front: '$9$', back: '$a^2$ に $a = -3$ を代入すると、式の値は？', explanation: '$(-3)^2 = (-3) \\times (-3) = 9$。負の数はかっこをつけて代入！', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-lit-notation-q1',
          question: '$3 \\times a \\times a$ を文字式で表すと？',
          options: ['$3a$', '$a^3$', '$3 + a^2$', '$3a^2$'],
          correctIndex: 3,
          explanation:
            '$3 \\times a \\times a$ は、数の $3$ を前に、$a$ が2個かけ合わされているので $3a^2$ と表すよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q2',
          question: '$x \\div 5$ を文字式で表すと？',
          options: ['$5x$', '$x - 5$', '$\\dfrac{x}{5}$', '$\\dfrac{5}{x}$'],
          correctIndex: 2,
          explanation:
            '÷は分数で表すのがルール！$x \\div 5 = \\dfrac{x}{5}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q3',
          question: '$a \\times b \\times (-1)$ を文字式で表すと？',
          options: ['$ab$', '$-ab$', '$-1ab$', '$a(-b)$'],
          correctIndex: 1,
          explanation:
            '$-1$ をかけるときは、$-1$ の「1」を省略して $-ab$ と書くよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q4',
          question: '$2x + 3$ に $x = -4$ を代入すると、式の値はいくつ？',
          options: ['$-5$', '$11$', '$5$', '$-11$'],
          correctIndex: 0,
          explanation:
            '$2 \\times (-4) + 3 = -8 + 3 = -5$\n負の数を代入するときはかっこをつけて計算しよう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q5',
          question: '$a \\times 2 \\div b$ を文字式で表すと？',
          options: ['$2ab$', '$\\dfrac{a}{2b}$', '$\\dfrac{2a}{b}$', '$\\dfrac{ab}{2}$'],
          correctIndex: 2,
          explanation:
            '$a \\times 2 = 2a$（数を前に書く）、$\\div b$ は分母に $b$ を置く。\n答えは $\\dfrac{2a}{b}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q6',
          question: '1個 $a$ 円のケーキを4個買い、1000円を出したときのおつりは？',
          options: ['$4a - 1000$ 円', '$1000 - 4a$ 円', '$1000 + 4a$ 円', '$\\dfrac{1000}{4a}$ 円'],
          correctIndex: 1,
          explanation:
            'おつり = 出した金額 − 代金。代金は $4a$ 円だから、おつりは $1000 - 4a$ 円だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q7',
          question: '$x$ km の道のりを $y$ 時間で歩いたときの時速は？',
          options: ['$xy$ km/時', '$\\dfrac{y}{x}$ km/時', '$x - y$ km/時', '$\\dfrac{x}{y}$ km/時'],
          correctIndex: 3,
          explanation:
            '速さ = 道のり ÷ 時間 だから $\\dfrac{x}{y}$ km/時だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q8',
          question: '$5a$ はどんな数量を表す？（$a$ 円の品物について）',
          options: ['$a$ 円の品物5個分の代金', '$a$ 円の品物の5%引きの値段', '$a$ 円に5円足した値段', '$a$ 円の品物を5で割った値段'],
          correctIndex: 0,
          explanation:
            '$5a = 5 \\times a$ だから、$a$ 円の品物を5個買った代金を表しているよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q9',
          question: '$a^2 - 2a$ に $a = -3$ を代入すると、式の値はいくつ？',
          options: ['$3$', '$-3$', '$15$', '$-15$'],
          correctIndex: 2,
          explanation:
            '$(-3)^2 - 2 \\times (-3) = 9 + 6 = 15$\n$(-3)^2 = 9$、$-2 \\times (-3) = 6$ に注意！',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q10',
          question: '$\\dfrac{x}{3}$ に $x = \\dfrac{3}{4}$ を代入すると、式の値はいくつ？',
          options: ['$4$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$\\dfrac{1}{4}$'],
          correctIndex: 3,
          explanation:
            '$\\dfrac{x}{3} = x \\div 3 = \\dfrac{3}{4} \\div 3 = \\dfrac{3}{4} \\times \\dfrac{1}{3} = \\dfrac{1}{4}$',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-notation-q11',
          question: '$b \\times b \\times b$ を文字式で表すと？',
          options: ['$b^3$', '$b + 3$', '$3b$', '$3b^2$'],
          correctIndex: 0,
          explanation:
            '同じ文字を3回かけているので指数を使って $b^3$ と表すよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q12',
          question: '$2a + 3b$ に $a = 4, b = -2$ を代入すると、式の値はいくつ？',
          options: ['$14$', '$2$', '$-2$', '$10$'],
          correctIndex: 1,
          explanation:
            '$2 \\times 4 + 3 \\times (-2) = 8 + (-6) = 8 - 6 = 2$',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q13',
          question: '$a \times a \times b$ を文字式で表すと？',
          options: ['$a^2b$', '$2ab$', '$ab^2$', '$a^2 + b$'],
          correctIndex: 0,
          explanation: '$a$ が2個かけ合わされるので $a^2$、$b$ はそのままで $a^2b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q14',
          question: '$x^2$ に $x = -3$ を代入すると、式の値はいくつ？',
          options: ['$-9$', '$9$', '$-6$', '$6$'],
          correctIndex: 1,
          explanation: '$(-3)^2 = (-3) \\times (-3) = 9$\n負の数を代入するときはかっこをつけよう！',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q15',
          question: '$a$ 円の品物に消費税 $10$% を加えた金額は？',
          options: ['$0.1a$ 円', '$1.1a$ 円', '$10a$ 円', '$a + 10$ 円'],
          correctIndex: 1,
          explanation: '$a + 0.1a = 1.1a$ 円\n消費税込みの金額は定価の $1.1$ 倍だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q16',
          question: '$\dfrac{a + b}{2}$ は何を表す？',
          options: ['$a$ と $b$ の差の半分', '$a$ と $b$ の積の半分', '$a$ と $b$ の平均', '$a$ を $b$ で割った商'],
          correctIndex: 2,
          explanation: '2つの数の和を $2$ で割ると平均になるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q17',
          question: '$y \times x \times 3$ を文字式で表すと？',
          options: ['$yx3$', '$3yx$', '$3xy$', '$xy3$'],
          correctIndex: 2,
          explanation: '数を前に、文字はアルファベット順に。$3xy$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q18',
          question: '$a \div 7 \times b$ を文字式で表すと？',
          options: ['$\dfrac{ab}{7}$', '$\dfrac{a}{7b}$', '$\dfrac{7a}{b}$', '$7ab$'],
          correctIndex: 0,
          explanation: '$a \div 7 = \dfrac{a}{7}$。$\dfrac{a}{7} \times b = \dfrac{ab}{7}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q19',
          question: '半径 $r$ cm の円の周の長さは？',
          options: ['$\pi r^2$ cm', '$r^2$ cm', '$\pi r$ cm', '$2\pi r$ cm'],
          correctIndex: 3,
          explanation: '円周 $= 2\\pi r$\n面積 $\\pi r^2$ と混同しないように！',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q20',
          question: '$-x^2$ に $x = 4$ を代入すると？',
          options: ['$16$', '$-16$', '$8$', '$-8$'],
          correctIndex: 1,
          explanation: '$-x^2 = -(4^2) = -(16) = -16$\n$(-x)^2$ とは違うことに注意！',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q21',
          question: '底辺 $a$ cm、高さ $h$ cm の三角形の面積を文字式で表すと？',
          options: ['$ah$ cm²', '$\dfrac{ah}{2}$ cm²', '$2ah$ cm²', '$\dfrac{a+h}{2}$ cm²'],
          correctIndex: 1,
          explanation: '三角形の面積 $= \dfrac{底辺 \times 高さ}{2} = \dfrac{ah}{2}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q22',
          question: '$3(a - b)$ に $a = 5, b = 2$ を代入すると？',
          options: ['$3$', '$6$', '$9$', '$21$'],
          correctIndex: 2,
          explanation: '$3(5 - 2) = 3 \\times 3 = 9$',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-notation-q23',
          question: '3けたの自然数（百の位 $a$、十の位 $b$、一の位 $c$）を文字式で表すと？',
          options: ['$abc$', '$a + b + c$', '$100a + 10b + c$', '$100a + b + c$'],
          correctIndex: 2,
          explanation: '百の位は $100$ 倍、十の位は $10$ 倍するから $100a + 10b + c$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-notation-q24',
          question: '$(-1) \times x \times y$ を文字式で表すと？',
          options: ['$-1xy$', '$xy$', '$-xy$', '$-(xy)$'],
          correctIndex: 2,
          explanation: '$-1$ の $1$ を省略して $-xy$ と書くよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-notation-q25',
          question: '時速 $v$ km で $t$ 時間走った道のりを文字式で表すと？',
          options: ['$\dfrac{v}{t}$ km', '$\dfrac{t}{v}$ km', '$v + t$ km', '$vt$ km'],
          correctIndex: 3,
          explanation: '道のり $=$ 速さ $\times$ 時間 $= vt$ km だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-notation-q26',
          question: '$\dfrac{2x - 1}{3}$ に $x = 5$ を代入すると？',
          options: ['$3$', '$\dfrac{9}{3}$', '$1$', '$\dfrac{11}{3}$'],
          correctIndex: 0,
          explanation: '$\dfrac{2 \times 5 - 1}{3} = \dfrac{10 - 1}{3} = \dfrac{9}{3} = 3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-notation-q27',
          question: '定価 $a$ 円の品物を $2$ 割引きで買ったときの代金は？',
          options: ['$0.2a$ 円', '$2a$ 円', '$0.8a$ 円', '$a - 2$ 円'],
          correctIndex: 2,
          explanation: '$2$ 割引き $= 20$%引き。定価の $0.8$ 倍で $0.8a$ 円だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-notation-q28',
          question: '$a^2 + a$ に $a = -1$ を代入すると？',
          options: ['$0$', '$2$', '$-2$', '$1$'],
          correctIndex: 0,
          explanation: '$(-1)^2 + (-1) = 1 + (-1) = 0$',
          difficulty: 'advanced',
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
