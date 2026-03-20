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
        id: 'math-g1-lit-relations-fc6',
        front: '$a$ は $b$ より大きい', back: '$a > b$ の意味は？',
        explanation: '$b$ は含まない。$a = b$ のときは成り立たない。',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-relations-fc7',
        front: '$a$ は $b$ より小さい', back: '$a < b$ の意味は？',
        explanation: '$b$ は含まない。$a = b$ のときは成り立たない。',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-relations-fc8',
        front: '$a$ は $b$ 以上', back: '$a \\geqq b$ の意味は？',
        explanation: '$b$ と等しいか、$b$ より大きい。$a = b$ のときも成り立つ。',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-relations-fc9',
        front: '$a$ は $b$ 以下', back: '$a \\leqq b$ の意味は？',
        explanation: '$b$ と等しいか、$b$ より小さい。$a = b$ のときも成り立つ。',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-relations-fc10',
        front: '「以上」はその数を含む、「より大きい」は含まない', back: '「以上」と「より大きい」の違いは？',
        explanation: '「以上」→ $\\geqq$（例: 10以上 → 10, 11, 12...）\n「より大きい」→ $>$（例: 10より大きい → 11, 12...）',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-relations-fc11',
        front: '「以下」はその数を含む、「未満」は含まない', back: '「以下」と「より小さい（未満）」の違いは？',
        explanation: '「以下」→ $\\leqq$（例: 10以下 → ..., 9, 10）\n「未満」「より小さい」→ $<$（例: 10未満 → ..., 8, 9）',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-relations-fc12',
        front: '$<$（より小さい）を使う', back: '「未満」を不等号で表すと？',
        explanation: '例: 「$x$ は30未満」→ $x < 30$\n「未満」=「より小さい」と同じ意味。',
        difficulty: 'basic',
      },
      {
        id: 'math-g1-lit-relations-fc13',
        front: '$4x = 600$', back: '代金の等式の例を1つ挙げよう',
        explanation: '「1個 $x$ 円のりんごを4個で600円」\n代金 = 単価 $\\times$ 個数',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-relations-fc14',
        front: '$5a \\leqq 1000$', back: '不等式の例（以下）を1つ挙げよう',
        explanation: '「1本 $a$ 円のペンを5本で1000円以下」',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-relations-fc15',
        front: '以上 → $\\geqq$、以下 → $\\leqq$、より大きい → $>$、未満 → $<$', back: '日本語と不等号の対応表',
        explanation: 'ポイント: 「以」がつくとその数を含む！',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-relations-fc16',
        front: '道のり = 速さ $\\times$ 時間', back: '速さ・時間・道のりの関係式は？',
        explanation: '速さ = 道のり $\\div$ 時間\n時間 = 道のり $\\div$ 速さ',
        difficulty: 'standard',
      },
      {
        id: 'math-g1-lit-relations-fc17',
        front: '$x$ 割引き → 定価の $(1 - 0.x)$ 倍', back: '割引きの等式の立て方は？',
        explanation: '例: 3割引き → 定価の $0.7$ 倍\n定価 $a$ 円の3割引き = $0.7a$ 円',
        difficulty: 'standard',
      },
      { id: 'math-g1-lit-relations-fc18', front: '$ab = S$', back: '長方形の面積を等式で表すと？', explanation: '縦 $a$、横 $b$、面積 $S$。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc20', front: '$a < x < b$', back: '「$x$ は $a$ より大きく $b$ より小さい」を不等式で表すと？', explanation: '$a$ より大きく $b$ より小さい。$a, b$ は含まない。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc21', front: '等式は $=$、不等式は $<, >, \\leqq, \\geqq$', back: '等式と不等式の違いは？', explanation: '等式: 2つの量が等しい。\n不等式: 2つの量に大小関係がある。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc28', front: '$a + b + c \\leqq 30$', back: '「三角形の周の長さが $30$ cm 以下」を不等式で表すと？', explanation: '3つの辺の長さ $a, b, c$ の合計が $30$ 以下。', difficulty: 'advanced' },
      { id: 'math-g1-lit-relations-fc29', front: '$>$, $<$, $\\geqq$, $\\leqq$', back: '不等号を4つすべて書くと？', explanation: '大なり、小なり、以上、以下。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc30', front: '$50x = y$', back: '「1個50円のあめを $x$ 個買うと代金は $y$ 円」を等式で表すと？', explanation: '代金 $=$ 単価 $\\times$ 個数。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc31', front: '$50x + 30y = 410$', back: '「1個50円のあめ $x$ 個と1個30円のガム $y$ 個で合計410円」を等式で表すと？', explanation: 'あめの代金 $+$ ガムの代金 $=$ 合計。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc32', front: '$1000 - a = b$', back: '「$1000$ 円で $a$ 円の品物を買ったおつりが $b$ 円」を等式で表すと？', explanation: 'おつり $=$ 出した金額 $-$ 代金。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc33', front: '$\\dfrac{x}{5} = y$', back: '「$x$ 個のりんごを $5$ 人で等しく分けると $1$ 人 $y$ 個」を等式で表すと？', explanation: '等分する → 割り算。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc34', front: '$3x = y$', back: '「時速 $x$ km で $3$ 時間歩いた道のりは $y$ km」を等式で表すと？', explanation: '道のり $=$ 速さ $\\times$ 時間。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc35', front: '$\\dfrac{a}{4} = b$', back: '「$a$ km の道のりを時速 $4$ km で歩くと $b$ 時間かかる」を等式で表すと？', explanation: '時間 $=$ 道のり $\\div$ 速さ。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc36', front: '$0.7x = y$（または $x - 0.3x = y$）', back: '「$x$ 円の品物の3割引きの値段は $y$ 円」を等式で表すと？', explanation: '3割引き → 定価の $70\\%$。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc37', front: '$a \\geqq 10$', back: '「$a$ は $10$ 以上」を不等式で表すと？', explanation: '「以上」は $\\geqq$。$10$ を含む。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc38', front: '$x \\leqq 500$', back: '「$x$ は $500$ 以下」を不等式で表すと？', explanation: '「以下」は $\\leqq$。$500$ を含む。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc39', front: '$x > 30$', back: '「$x$ は $30$ より大きい」を不等式で表すと？', explanation: '「より大きい」は $>$。$30$ は含まない。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc40', front: '$a < 100$', back: '「$a$ は $100$ 未満」を不等式で表すと？', explanation: '「未満」は $<$。$100$ は含まない。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc41', front: '$5a \\leqq 2000$', back: '「1個 $a$ 円のケーキを $5$ 個買っても代金は $2000$ 円以下」を不等式で表すと？', explanation: '代金 $=$ 単価 $\\times$ 個数 $\\leqq$ 上限額。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc42', front: '$x + y \\geqq 160$', back: '「$x$ 点と $y$ 点の合計が $160$ 点以上」を不等式で表すと？', explanation: '合計 $\\geqq$ 基準点。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc43', front: '$a < b$', back: '「$a$ 円は $b$ 円より安い」を不等式で表すと？', explanation: '安い $=$ 小さい。$a < b$。', difficulty: 'basic' },
      { id: 'math-g1-lit-relations-fc44', front: '$20 \\leqq y \\leqq 50$', back: '「$y$ は $20$ 以上 $50$ 以下」を不等式で表すと？', explanation: '両方「以」がつくので $\\leqq$ を使う。', difficulty: 'standard' },
      { id: 'math-g1-lit-relations-fc45', front: '1個 $x$ g の荷物3個と200gの箱の合計が1400g', back: '$3x + 200 = 1400$ はどんな関係を表す？', explanation: '式の各部分の意味を読み取る。', difficulty: 'advanced' },
      { id: 'math-g1-lit-relations-fc46', front: '1冊 $a$ 円のノート5冊の代金は800円未満', back: '$5a < 800$ はどんな関係を表す？', explanation: '不等式の意味を文章で読み取る。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-lit-relations-q1',
          question: '「$x$ に $5$ を足すと $12$ になる」を等式で表すと？',
          options: [
            '$x + 5 = 12$',
            '$x = 12 + 5$',
            '$5x = 12$',
            '$x - 5 = 12$',
          ],
          correctIndex: 0,
          explanation:
            '「$x$ に $5$ を足す」は $x + 5$、「$12$ になる」は $= 12$。だから $x + 5 = 12$ だよ。',
          difficulty: 'basic',
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
            '$a > 100$\n「以上」ではなく「より大きい」なので $\\geqq$ ではなく $>$ を使うんだ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-relations-q3',
          question:
            '「1本 $x$ 円のジュースを3本買ったら、代金は $500$ 円以下だった」を不等式で表すと？',
          options: [
            '$3x \\leqq 500$',
            '$3x < 500$',
            '$3x \\geqq 500$',
            '$3x > 500$',
          ],
          correctIndex: 0,
          explanation:
            '$x \\times 3 = 3x$ 円\n「$500$ 円以下」だから $3x \\leqq 500$ だよ。',
          difficulty: 'basic',
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
          difficulty: 'basic',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-relations-q6',
          question:
            '「時速 $v$ km で $t$ 時間歩いた道のりは $d$ km」を等式で表すと？',
          options: [
            '$vt = d$',
            '$v + t = d$',
            '$\\dfrac{v}{t} = d$',
            '$\\dfrac{d}{v} = t$',
          ],
          correctIndex: 0,
          explanation:
            '道のり $=$ 速さ $\\times$ 時間 だから $vt = d$\n$\\dfrac{d}{v} = t$ も正しいが、問題の文に合う形は $vt = d$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-relations-q7',
          question:
            '「定価 $a$ 円の品物を $2$ 割引きで買ったら $b$ 円だった」を等式で表すと？',
          options: [
            '$0.8a = b$',
            '$0.2a = b$',
            '$a - 2 = b$',
            '$a + 0.2a = b$',
          ],
          correctIndex: 0,
          explanation:
            '$1 - 0.2 = 0.8$ 倍だから $0.8a = b$\n2割引き $\\neq$ 2円引きに注意！',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-relations-q8',
          question:
            '$50x + 30y = 410$ はどんな関係を表している？（$x$: あめの個数、$y$: ガムの個数）',
          options: [
            'あめとガムを合わせて410円のおつりがある',
            'あめ $x$ 個とガム $y$ 個の合計が410個',
            '50円のあめと30円のガムの値段の差が410円',
            '1個50円のあめ $x$ 個と1個30円のガム $y$ 個の代金の合計が410円',
          ],
          correctIndex: 3,
          explanation:
            '$50x$: 1個50円のあめ $x$ 個の代金、$30y$: 1個30円のガム $y$ 個の代金\n合計が410円という意味だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-relations-q9',
          question:
            '「$x$ 人の生徒に鉛筆を $4$ 本ずつ配ったら、$10$ 本以上余った」を不等式で表すと？ 鉛筆は全部で $n$ 本ある。',
          options: [
            '$n - 4x \\geqq 10$',
            '$4x - n \\geqq 10$',
            '$n - 4x > 10$',
            '$n - 4x < 10$',
          ],
          correctIndex: 0,
          explanation:
            '配った本数 $4x$ 本、残り $n - 4x$ 本\n「10本以上」だから $n - 4x \\geqq 10$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-relations-q10',
          question:
            '「縦 $a$ cm、横 $b$ cm の長方形の面積は $100$ cm² 未満」を不等式で表すと？',
          options: [
            '$ab \\leqq 100$',
            '$ab \\geqq 100$',
            '$ab > 100$',
            '$ab < 100$',
          ],
          correctIndex: 3,
          explanation:
            '面積 $ab$ cm²。「未満」は「より小さい」なので $ab < 100$\n$\\leqq$（以下）ではないことに注意！',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-lit-relations-q11',
          question: '「$x$ は $5$ 以上かつ $15$ 以下」を不等式で表すと？',
          options: [
            '$5 < x < 15$',
            '$5 \\leqq x \\leqq 15$',
            '$5 > x > 15$',
            '$5 \\geqq x \\geqq 15$',
          ],
          correctIndex: 1,
          explanation:
            '「以上」「以下」はその数を含むから $\\leqq$ を使うよ。$5 \\leqq x \\leqq 15$ と書くんだ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q12',
          question:
            '$\\dfrac{a}{4} = b$ はどんな関係を表している？（$a$: 道のり(km)、$b$: 時間(時間)）',
          options: [
            '$a$ kmの道のりを時速4kmで歩くと $b$ 時間かかる',
            '$a$ kmの道のりを4時間で歩くと速さは $b$ km/h',
            '$a$ 時間で $b$ km歩くと時速4km',
            '4kmの道のりを $a$ 時間で歩くと速さは $b$ km/h',
          ],
          correctIndex: 0,
          explanation:
            '時間 $=$ 道のり $\\div$ 速さ\n$\\dfrac{a}{4} = b$ は「$a$ kmを時速4kmで歩くと $b$ 時間かかる」という意味だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q13',
          question: '「$x$ は $3$ 以上かつ $10$ 未満」を不等式で表すと？',
          options: ['$3 < x < 10$', '$3 \\leqq x \\leqq 10$', '$3 \\leqq x < 10$', '$3 < x \\leqq 10$'],
          correctIndex: 2,
          explanation: '「以上」は $\\leqq$、「未満」は $<$ だから $3 \\leqq x < 10$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q14',
          question: '「$a$ 円の品物を $5$ 個買って $b$ 円払ったらおつりが $c$ 円」を等式で表すと？',
          options: ['$b - 5a = c$', '$5a - b = c$', '$5a + c = b$', '$a - 5b = c$'],
          correctIndex: 0,
          explanation: 'おつり $=$ 支払い $-$ 代金。$b - 5a = c$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q15',
          question: '次の等式のうち、方程式はどれ？',
          options: ['$a + b = b + a$', '$x + 3 = 10$', '$2(a + b) = 2a + 2b$', '$a \\times 1 = a$'],
          correctIndex: 1,
          explanation: '$x + 3 = 10$ は $x = 7$ のときだけ成り立つので方程式だよ。他は恒等式。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q16',
          question: '「半径 $r$ cm の円の面積が $S$ cm²」を等式で表すと？',
          options: ['$S = 2\\pi r$', '$S = \\pi r^2$', '$S = \\pi r$', '$S = 2\\pi r^2$'],
          correctIndex: 1,
          explanation: '円の面積 $= \\pi r^2$ だから $S = \\pi r^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q17',
          question: '「$a$ kg は $50$ kg 以下」を不等式で表すと？',
          options: ['$a > 50$', '$a < 50$', '$a \\geqq 50$', '$a \\leqq 50$'],
          correctIndex: 3,
          explanation: '「以下」はその数を含むから $\\leqq$ を使って $a \\leqq 50$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q18',
          question: '等式 $3x + 2y = 12$ の左辺は？',
          options: ['$12$', '$3x$', '$3x + 2y$', '$2y$'],
          correctIndex: 2,
          explanation: '等号の左側が左辺。$3x + 2y$ が左辺だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q19',
          question: '「$n$ 人に $5$ 枚ずつカードを配ると $3$ 枚余る。全部で $m$ 枚」を等式で表すと？',
          options: ['$5n - 3 = m$', '$5n + 3 = m$', '$5n = m + 3$', '$n + 5 = m - 3$'],
          correctIndex: 1,
          explanation: '配った枚数 $5n$ と余り $3$ の合計がカード全部 $m$ 枚。$5n + 3 = m$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q20',
          question: '「$y$ は $0$ より大きい」を不等式で表すと？',
          options: ['$y \\geqq 0$', '$y > 0$', '$y < 0$', '$y \\leqq 0$'],
          correctIndex: 1,
          explanation: '「より大きい」は $>$ を使うよ。$0$ は含まないから $y > 0$ だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q21',
          question: '「$1$ 個 $x$ g の荷物 $4$ 個と箱 $300$ g で合計 $2$ kg 以下」を不等式で表すと？（$1$ kg $= 1000$ g）',
          options: ['$4x + 300 \\leqq 2000$', '$4x + 300 < 2000$', '$4x + 300 > 2000$', '$4x + 300 \\geqq 2000$'],
          correctIndex: 0,
          explanation: '$2$ kg $= 2000$ g。「以下」は $\\leqq$ だから $4x + 300 \\leqq 2000$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q22',
          question: '「底辺 $a$ cm、高さ $h$ cm の三角形の面積が $S$ cm²」を等式で表すと？',
          options: ['$S = ah$', '$S = \\dfrac{ah}{2}$', '$S = 2ah$', '$S = \\dfrac{a + h}{2}$'],
          correctIndex: 1,
          explanation: '三角形の面積 $= \\dfrac{底辺 \\times 高さ}{2} = \\dfrac{ah}{2}$ だから $S = \\dfrac{ah}{2}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-lit-relations-q23',
          question: '「$x$ は $-5$ 以上 $5$ 以下の整数」を不等式で表すと？',
          options: ['$-5 < x < 5$', '$-5 \\leqq x \\leqq 5$', '$-5 \\leqq x < 5$', '$x \\leqq 5$'],
          correctIndex: 1,
          explanation: '「以上」「以下」はともに $\\leqq$ を使うよ。$-5 \\leqq x \\leqq 5$ だね。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-relations-q24',
          question: '$2x = 10$ はどんな式？',
          options: ['不等式', '方程式', '恒等式', '不等号'],
          correctIndex: 1,
          explanation: '$x = 5$ のときだけ成り立つから方程式だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-relations-q25',
          question: '「速さ $v$ m/分で $t$ 分歩くと道のりは $1000$ m 以上」を不等式で表すと？',
          options: ['$vt \\leqq 1000$', '$vt > 1000$', '$vt \\geqq 1000$', '$vt < 1000$'],
          correctIndex: 2,
          explanation: '道のり $= vt$。「以上」は $\\geqq$ だから $vt \\geqq 1000$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-relations-q26',
          question: '$a + b = c$ は何を意味する不等号？…ではなく等号。では $a + b \\neq c$ の読み方は？',
          options: ['$a + b$ は $c$ と等しい', '$a + b$ は $c$ 以上', '$a + b$ は $c$ と等しくない', '$a + b$ は $c$ 以下'],
          correctIndex: 2,
          explanation: '$\\neq$ は「等しくない」を表す記号だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-relations-q27',
          question: '「$1000$ 円以内で $a$ 円の品物を最大何個買えるか」を不等式で表すと？（$n$ 個買うとき）',
          options: ['$an > 1000$', '$an \\leqq 1000$', '$an < 1000$', '$an \\geqq 1000$'],
          correctIndex: 1,
          explanation: '「以内」は「以下」と同じ意味。$an \\leqq 1000$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-lit-relations-q28',
          question: '「$x$ 人のクラスで欠席者が $3$ 人のとき出席者は $y$ 人」を等式で表すと？',
          options: ['$x + 3 = y$', '$x - y = 3$', '$x - 3 = y$', '$y - x = 3$'],
          correctIndex: 2,
          explanation: '出席者 $=$ 全体 $-$ 欠席者。$x - 3 = y$ だよ。',
          difficulty: 'advanced',
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
