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
      ],
    },
    videos: [],
    flashcards: [],
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
      ],
    },
    chatId: 'math-g1-lit-relations',
  },
};
