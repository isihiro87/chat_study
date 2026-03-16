import type { Topic } from '../../../../../../../../data/types';

export const literalRelations: Topic = {
  id: 'math-g1-lit-relations',
  eraId: 'math-g1-literal-exp',
  name: '関係を表す式',
  subtitle: '等式と不等式で数量関係を表そう',
  icon: '⚖️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '等式',
          content:
            '2つの数量が等しいことを表す式を「等式」と言うよ。等号（=）を使って表すんだ。等号の左側を「左辺」、右側を「右辺」、両方あわせて「両辺」と呼ぶよ。',
          keyPoints: [
            '等式: = を使って数量が等しい関係を表す式',
            '左辺 = 右辺 の形',
            '例: $x + 3 = 10$（$x$ に $3$ を足すと $10$ になる）',
          ],
        },
        {
          title: '不等式',
          content:
            '2つの数量の大小関係を表す式を「不等式」と言うよ。不等号（$<$, $>$, $\\leqq$, $\\geqq$）を使って表すんだ。',
          keyPoints: [
            '$a > b$: $a$ は $b$ より大きい',
            '$a < b$: $a$ は $b$ より小さい',
            '$a \\geqq b$: $a$ は $b$ 以上（$b$ と同じかそれより大きい）',
            '$a \\leqq b$: $a$ は $b$ 以下（$b$ と同じかそれより小さい）',
          ],
        },
        {
          title: '文章から等式・不等式をつくる',
          content:
            '文章の中の数量の関係を読み取って、文字を使った等式や不等式をつくることが大切だよ。「等しい」なら等式、「以上」「以下」「より大きい」「より小さい」「未満」なら不等式になるよ。',
          keyPoints: [
            '「$x$ 個のりんごと $3$ 個のみかんで合計 $10$ 個」→ $x + 3 = 10$',
            '「$a$ 円は $500$ 円以上」→ $a \\geqq 500$',
            '「$x$ km は $30$ km 未満」→ $x < 30$（未満 = より小さい）',
          ],
        },
        {
          title: '式の意味を読み取る',
          content:
            '文字式で表された等式や不等式が、どのような数量関係を表しているかを読み取る力も大切だよ。式の中の文字が何を表しているかに注目して、式全体の意味を文章で説明できるようにしよう。',
          keyPoints: [
            '$50x + 30y = 410$ → 「1個50円の品物 $x$ 個と1個30円の品物 $y$ 個で合計410円」',
            '$3a \\leqq 1500$ → 「1個 $a$ 円の品物を3個買うと代金は1500円以下」',
            '式を見たら、まず各項が何を表すか考えよう',
            '不等号の向きから「以上」「以下」「未満」「より大きい」を正しく読み取ろう',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g1-lit-relations-fc1',
        front: '等式とは？',
        back: '2つの数量が等しいことを、等号（=）を使って表した式。\n例: $x + 3 = 10$',
      },
      {
        id: 'math-g1-lit-relations-fc2',
        front: '左辺とは？',
        back: '等号（=）の左側の部分。\n例: $x + 3 = 10$ の左辺は $x + 3$',
      },
      {
        id: 'math-g1-lit-relations-fc3',
        front: '右辺とは？',
        back: '等号（=）の右側の部分。\n例: $x + 3 = 10$ の右辺は $10$',
      },
      {
        id: 'math-g1-lit-relations-fc4',
        front: '両辺とは？',
        back: '左辺と右辺を合わせた呼び方。\n等式の両辺に同じ数を足しても等式は成り立つ。',
      },
      {
        id: 'math-g1-lit-relations-fc5',
        front: '不等式とは？',
        back: '2つの数量の大小関係を、不等号を使って表した式。\n不等号: $>$, $<$, $\\geqq$, $\\leqq$',
      },
      {
        id: 'math-g1-lit-relations-fc6',
        front: '$a > b$ の意味は？',
        back: '$a$ は $b$ より大きい\n（$b$ は含まない）',
      },
      {
        id: 'math-g1-lit-relations-fc7',
        front: '$a < b$ の意味は？',
        back: '$a$ は $b$ より小さい\n（$b$ は含まない）',
      },
      {
        id: 'math-g1-lit-relations-fc8',
        front: '$a \\geqq b$ の意味は？',
        back: '$a$ は $b$ 以上\n（$b$ と等しいか、$b$ より大きい）',
      },
      {
        id: 'math-g1-lit-relations-fc9',
        front: '$a \\leqq b$ の意味は？',
        back: '$a$ は $b$ 以下\n（$b$ と等しいか、$b$ より小さい）',
      },
      {
        id: 'math-g1-lit-relations-fc10',
        front: '「以上」と「より大きい」の違いは？',
        back: '「以上」→ その数を含む（$\\geqq$）\n「より大きい」→ その数を含まない（$>$）\n例: 10以上 → 10, 11, 12...\n10より大きい → 11, 12...',
      },
      {
        id: 'math-g1-lit-relations-fc11',
        front: '「以下」と「より小さい（未満）」の違いは？',
        back: '「以下」→ その数を含む（$\\leqq$）\n「未満」「より小さい」→ その数を含まない（$<$）\n例: 10以下 → ..., 9, 10\n10未満 → ..., 8, 9',
      },
      {
        id: 'math-g1-lit-relations-fc12',
        front: '「未満」を不等号で表すと？',
        back: '$<$（より小さい）を使う。\n例: 「$x$ は30未満」→ $x < 30$\n「未満」=「より小さい」と同じ意味。',
      },
      {
        id: 'math-g1-lit-relations-fc13',
        front: '代金の等式の例を1つ挙げよう',
        back: '「1個 $x$ 円のりんごを4個で600円」\n→ $4x = 600$\n代金 = 単価 × 個数',
      },
      {
        id: 'math-g1-lit-relations-fc14',
        front: '不等式の例（以下）を1つ挙げよう',
        back: '「1本 $a$ 円のペンを5本で1000円以下」\n→ $5a \\leqq 1000$',
      },
      {
        id: 'math-g1-lit-relations-fc15',
        front: '日本語と不等号の対応表',
        back: '以上 → $\\geqq$\n以下 → $\\leqq$\nより大きい → $>$\nより小さい・未満 → $<$\nポイント: 「以」がつくとその数を含む！',
      },
      {
        id: 'math-g1-lit-relations-fc16',
        front: '速さ・時間・道のりの関係式は？',
        back: '道のり = 速さ × 時間\n速さ = 道のり ÷ 時間\n時間 = 道のり ÷ 速さ',
      },
      {
        id: 'math-g1-lit-relations-fc17',
        front: '割引きの等式の立て方は？',
        back: '$x$ 割引き → 定価の $(1 - 0.x)$ 倍\n例: 3割引き → 定価の $0.7$ 倍\n定価 $a$ 円の3割引き = $0.7a$ 円',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-lit-relations-q1',
          question: '「$x$ に $5$ を足すと $12$ になる」を等式で表すと？',
          options: [
            '$x - 5 = 12$',
            '$x + 5 = 12$',
            '$5x = 12$',
            '$x = 12 + 5$',
          ],
          correctIndex: 1,
          explanation:
            '「$x$ に $5$ を足す」は $x + 5$、「$12$ になる」は $= 12$。だから $x + 5 = 12$ だよ。',
        },
        {
          id: 'math-g1-lit-relations-q2',
          question: '「$a$ は $100$ より大きい」を不等式で表すと？',
          options: [
            '$a < 100$',
            '$a > 100$',
            '$a \\leqq 100$',
            '$a \\geqq 100$',
          ],
          correctIndex: 1,
          explanation:
            '「$a$ は $100$ より大きい」は $a > 100$ だよ。「以上」ではなく「より大きい」なので $\\geqq$ ではなく $>$ を使うんだ。',
        },
        {
          id: 'math-g1-lit-relations-q3',
          question:
            '「1本 $x$ 円のジュースを3本買ったら、代金は $500$ 円以下だった」を不等式で表すと？',
          options: [
            '$3x > 500$',
            '$3x < 500$',
            '$3x \\geqq 500$',
            '$3x \\leqq 500$',
          ],
          correctIndex: 3,
          explanation:
            '代金は $x \\times 3 = 3x$ 円。「$500$ 円以下」だから $3x \\leqq 500$ だよ。',
        },
        {
          id: 'math-g1-lit-relations-q4',
          question: '次のうち、不等式はどれ？',
          options: [
            '$3x + 2 = 11$',
            '$y = 2x - 1$',
            '$5a - 3 > 7$',
            '$x + y = 10$',
          ],
          correctIndex: 2,
          explanation:
            '不等号（$>$, $<$, $\\geqq$, $\\leqq$）を使っている式が不等式だよ。$5a - 3 > 7$ は $>$ を使っているから不等式だね。',
        },
        {
          id: 'math-g1-lit-relations-q5',
          question:
            '「1000円で1個 $a$ 円の品物を2個買ったときのおつりは $b$ 円」を等式で表すと？',
          options: [
            '$1000 - a = b$',
            '$1000 - 2a = b$',
            '$2a - 1000 = b$',
            '$1000 + 2a = b$',
          ],
          correctIndex: 1,
          explanation:
            '2個買った代金は $2a$ 円。1000円から引いたおつりが $b$ 円だから、$1000 - 2a = b$ だよ。',
        },
        {
          id: 'math-g1-lit-relations-q6',
          question:
            '「時速 $v$ km で $t$ 時間歩いた道のりは $d$ km」を等式で表すと？',
          options: [
            '$\\dfrac{v}{t} = d$',
            '$v + t = d$',
            '$vt = d$',
            '$\\dfrac{d}{v} = t$',
          ],
          correctIndex: 2,
          explanation:
            '道のり = 速さ × 時間 だから、$vt = d$ が正しいよ。$\\dfrac{d}{v} = t$ も正しい等式だけど、問題の文に合う形は $vt = d$ だね。',
        },
        {
          id: 'math-g1-lit-relations-q7',
          question:
            '「定価 $a$ 円の品物を $2$ 割引きで買ったら $b$ 円だった」を等式で表すと？',
          options: [
            '$a - 2 = b$',
            '$0.2a = b$',
            '$0.8a = b$',
            '$a + 0.2a = b$',
          ],
          correctIndex: 2,
          explanation:
            '2割引きは定価の $1 - 0.2 = 0.8$ 倍。だから $0.8a = b$ だよ。2割引き ≠ 2円引きに注意！',
        },
        {
          id: 'math-g1-lit-relations-q8',
          question:
            '$50x + 30y = 410$ はどんな関係を表している？（$x$: あめの個数、$y$: ガムの個数）',
          options: [
            '1個50円のあめ $x$ 個と1個30円のガム $y$ 個の代金の合計が410円',
            'あめ $x$ 個とガム $y$ 個の合計が410個',
            '50円のあめと30円のガムの値段の差が410円',
            'あめとガムを合わせて410円のおつりがある',
          ],
          correctIndex: 0,
          explanation:
            '$50x$ は「1個50円のあめ $x$ 個の代金」、$30y$ は「1個30円のガム $y$ 個の代金」。合計が410円という意味だよ。',
        },
        {
          id: 'math-g1-lit-relations-q9',
          question:
            '「$x$ 人の生徒に鉛筆を $4$ 本ずつ配ったら、$10$ 本以上余った」を不等式で表すと？ 鉛筆は全部で $n$ 本ある。',
          options: [
            '$n - 4x > 10$',
            '$n - 4x \\geqq 10$',
            '$4x - n \\geqq 10$',
            '$n - 4x < 10$',
          ],
          correctIndex: 1,
          explanation:
            '配った本数は $4x$ 本。残りは $n - 4x$ 本。「10本以上」だから $n - 4x \\geqq 10$ だよ。',
        },
        {
          id: 'math-g1-lit-relations-q10',
          question:
            '「縦 $a$ cm、横 $b$ cm の長方形の面積は $100$ cm² 未満」を不等式で表すと？',
          options: [
            '$ab \\leqq 100$',
            '$ab \\geqq 100$',
            '$ab < 100$',
            '$ab > 100$',
          ],
          correctIndex: 2,
          explanation:
            '長方形の面積は $ab$ cm²。「未満」は「より小さい」なので $<$ を使って $ab < 100$ だよ。$\\leqq$（以下）ではないことに注意！',
        },
        {
          id: 'math-g1-lit-relations-q11',
          question: '「$x$ は $5$ 以上かつ $15$ 以下」を不等式で表すと？',
          options: [
            '$5 < x < 15$',
            '$5 > x > 15$',
            '$5 \\leqq x \\leqq 15$',
            '$5 \\geqq x \\geqq 15$',
          ],
          correctIndex: 2,
          explanation:
            '「以上」「以下」はその数を含むから $\\leqq$ を使うよ。$5 \\leqq x \\leqq 15$ と書くんだ。',
        },
        {
          id: 'math-g1-lit-relations-q12',
          question:
            '$\\dfrac{a}{4} = b$ はどんな関係を表している？（$a$: 道のり(km)、$b$: 時間(時間)）',
          options: [
            '$a$ kmの道のりを4時間で歩くと速さは $b$ km/h',
            '$a$ kmの道のりを時速4kmで歩くと $b$ 時間かかる',
            '$a$ 時間で $b$ km歩くと時速4km',
            '4kmの道のりを $a$ 時間で歩くと速さは $b$ km/h',
          ],
          correctIndex: 1,
          explanation:
            '時間 = 道のり ÷ 速さ なので、$\\dfrac{a}{4} = b$ は「$a$ kmを時速4kmで歩くと $b$ 時間かかる」という意味だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-lit-relations-ex1',
          question:
            '次の文を等式で表そう。\n「$x$ 個のあめを4人で同じ数ずつ分けると、1人分は $6$ 個になる。」',
          steps: [
            {
              title: 'Step 1: 数量関係を整理する',
              content:
                '$x$ 個を4人で分けた1人分は $\\dfrac{x}{4}$ 個。それが $6$ 個と等しいんだね。',
              highlight: '$\\dfrac{x}{4}$ と $6$ が等しい',
            },
            {
              title: 'Step 2: 等式で表す',
              content: '「等しい」なので $=$ を使って等式にするよ。',
              highlight: '$\\dfrac{x}{4} = 6$',
            },
          ],
          answer: '$\\dfrac{x}{4} = 6$',
        },
        {
          id: 'math-g1-lit-relations-ex2',
          question:
            '次の文を不等式で表そう。\n「$1$ 冊 $a$ 円のノートを $5$ 冊買うと、代金は $800$ 円未満だった。」',
          steps: [
            {
              title: 'Step 1: 数量を文字式で表す',
              content: '代金は $a \\times 5 = 5a$ 円だね。',
              highlight: '代金: $5a$ 円',
            },
            {
              title: 'Step 2: 「未満」を不等号で表す',
              content:
                '「未満」は「より小さい」という意味なので $<$ を使うよ。\n$\\leqq$（以下）とは違うので注意！',
              highlight: '$5a < 800$',
            },
          ],
          answer: '$5a < 800$',
        },
        {
          id: 'math-g1-lit-relations-ex3',
          question:
            '次の文を等式で表そう。\n「$1$ 個 $x$ gの荷物 $3$ 個と、$200$ gの箱を合わせた重さは $1400$ gである。」',
          steps: [
            {
              title: 'Step 1: 数量関係を整理する',
              content:
                '荷物の重さ: $3x$ g\n箱の重さ: $200$ g\n合計: $3x + 200$ g',
              highlight: '合計: $3x + 200$ g',
            },
            {
              title: 'Step 2: 等式で表す',
              content:
                '合計が $1400$ g と等しいから、$=$ で結ぶよ。',
              highlight: '$3x + 200 = 1400$',
            },
          ],
          answer: '$3x + 200 = 1400$',
        },
        {
          id: 'math-g1-lit-relations-ex4',
          question:
            '次の文を等式で表そう。\n「家から学校まで $d$ kmある。時速 $4$ km で歩くと $t$ 時間かかった。」',
          steps: [
            {
              title: 'Step 1: 速さ・時間・道のりの関係を思い出す',
              content:
                '道のり = 速さ × 時間\n時間 = 道のり ÷ 速さ\nこの問題では道のり $d$ km、速さ 時速4km、時間 $t$ 時間だね。',
              highlight: '時間 = 道のり ÷ 速さ',
            },
            {
              title: 'Step 2: 等式で表す',
              content:
                '時間 = 道のり ÷ 速さ なので $t = \\dfrac{d}{4}$ だよ。\n道のり = 速さ × 時間 の形で $d = 4t$ としてもOK。',
              highlight: '$\\dfrac{d}{4} = t$（または $d = 4t$）',
            },
          ],
          answer: '$\\dfrac{d}{4} = t$',
        },
        {
          id: 'math-g1-lit-relations-ex5',
          question:
            '次の文を不等式で表そう。\n「定価 $a$ 円の品物を $3$ 割引きで買ったら、代金は $700$ 円以上だった。」',
          steps: [
            {
              title: 'Step 1: 割引き後の値段を文字式で表す',
              content:
                '3割引き = 定価の $30\\%$ 引き = 定価の $70\\%$\n$a \\times 0.7 = 0.7a$ 円が割引き後の代金だよ。',
              highlight: '割引き後の代金: $0.7a$ 円',
            },
            {
              title: 'Step 2: 「以上」を不等号で表す',
              content:
                '「以上」はその値を含むので $\\geqq$ を使うよ。\n700円ちょうども含まれるから $>$ ではなく $\\geqq$ だね。',
              highlight: '$0.7a \\geqq 700$',
            },
          ],
          answer: '$0.7a \\geqq 700$',
        },
        {
          id: 'math-g1-lit-relations-ex6',
          question:
            '次の等式が何を表しているか、文章で説明しよう。\n$1000 - 3x = y$\n（$x$: 品物1個の値段(円)、$y$: おつり(円)）',
          steps: [
            {
              title: 'Step 1: 各項の意味を考える',
              content:
                '$1000$ → 支払った金額（1000円）\n$3x$ → $x$ 円の品物を3個買った代金\n$y$ → おつり',
              highlight: '$3x$: 品物3個の代金',
            },
            {
              title: 'Step 2: 式全体の意味をまとめる',
              content:
                '$1000 - 3x = y$ は「1000円から品物3個の代金を引いたものがおつり」ということだよ。',
              highlight: '1000円で $x$ 円の品物を3個買ったときのおつりが $y$ 円',
            },
          ],
          answer:
            '1000円で1個 $x$ 円の品物を3個買ったとき、おつりは $y$ 円である。',
        },
      ],
    },
    chatId: 'math-g1-lit-relations',
  },
};
