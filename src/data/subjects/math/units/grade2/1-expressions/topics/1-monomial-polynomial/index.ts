import type { Topic } from '../../../../../../../../data/types';

export const monomialPolynomial: Topic = {
  id: 'math-g2-monomial-poly',
  eraId: 'math-g2-expressions',
  name: '単項式と多項式',
  subtitle: '式の種類と次数を見分けよう',
  icon: '📝',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '単項式と多項式の違い',
          content:
            '数や文字のかけ算だけでできている式を「単項式」、単項式の和の形になっている式を「多項式」と言うよ。多項式の中の一つひとつの単項式を「項」と呼ぶんだ。',
          keyPoints: [
            '単項式: 数や文字のかけ算だけの式（例: $3x$, $-5ab$, $7$）',
            '多項式: 単項式の和（例: $3x + 2y - 5$）',
            '項: 多項式を構成する一つひとつの単項式（例: $3x + 2y − 5$ の項は $3x$, $2y$, $−5$）',
          ],
        },
        {
          title: '次数と係数',
          content:
            '単項式でかけ合わされている文字の個数を「次数」と言うよ。文字にかかっている数を「係数」と言うんだ。数だけの項の次数は $0$ だよ。',
          keyPoints: [
            '次数: かけ合わされている文字の個数（例: $3x^2y$ の次数は $3$）',
            '係数: 文字にかかっている数（例: $3x^2$ の係数は $3$）',
            '$x^2$ の係数は $1$、$-y$ の係数は $-1$',
            '数だけの項（定数項）の次数は $0$',
          ],
        },
        {
          title: '多項式の次数',
          content:
            '多項式の次数は、各項の次数のうちもっとも大きいものだよ。次数が $2$ の多項式を「$2$ 次式」と呼ぶんだ。',
          keyPoints: [
            '多項式の次数 = 各項の次数の最大値',
            '例: $3x^2 + 5x - 1$ → 各項の次数は $2$, $1$, $0$ → 多項式の次数は $2$（$2$ 次式）',
            '例: $2a + 3b - 7$ → 各項の次数は $1$, $1$, $0$ → 多項式の次数は $1$（$1$ 次式）',
          ],
        },
        {
          title: '同類項とまとめ方',
          content:
            '文字の部分が同じ項を「同類項」と呼ぶんだ。同類項は $ma + na = (m+n)a$ のように、係数を足し引きしてまとめることができるよ。',
          keyPoints: [
            '同類項: 文字の部分が同じ項（例: $3x$ と $-5x$ は同類項）',
            '$3x$ と $3x^2$ は同類項ではない（$x$ と $x^2$ は別物）',
            'まとめ方: $ma + na = (m+n)a$（例: $3x + 5x = 8x$）',
            '分数係数も通分してまとめる（例: $\\frac{1}{2}a + \\frac{1}{3}a = \\frac{5}{6}a$）',
          ],
        },
        {
          title: '同類項をまとめる練習のコツ',
          content:
            '式に複数の文字が混ざっているときは、同じ文字の部分ごとにグループ分けしてからまとめよう。定数項（数だけの項）も忘れずに。',
          keyPoints: [
            '手順①: 同類項を見つける（同じ文字の部分をチェック）',
            '手順②: 同類項どうしの係数を足し引きする',
            '手順③: 次数の高い順に並べると見やすい',
            '例: $x^2 + 9x + 3x^2 - 4x = 4x^2 + 5x$',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-mp-fc1',
        front: '単項式とは？',
        back: '数や文字のかけ算だけでできている式\n（例: $3x$, $-5ab$, $7$）',
      },
      {
        id: 'math-g2-mp-fc2',
        front: '多項式とは？',
        back: '単項式の和の形になっている式\n（例: $3x + 2y - 5$）',
      },
      {
        id: 'math-g2-mp-fc3',
        front: '項とは？',
        back: '多項式を構成する一つひとつの単項式\n（例: $3x + 2y - 5$ の項は $3x$, $2y$, $-5$）',
      },
      {
        id: 'math-g2-mp-fc4',
        front: '定数項とは？',
        back: '文字を含まない、数だけの項\n（例: $3x + 2y - 5$ の定数項は $-5$）',
      },
      {
        id: 'math-g2-mp-fc5',
        front: '単項式の次数とは？',
        back: 'かけ合わされている文字の個数\n（例: $4x^2y$ → $x$ が $2$ 個 + $y$ が $1$ 個 = 次数 $3$）',
      },
      {
        id: 'math-g2-mp-fc6',
        front: '係数とは？',
        back: '単項式で文字にかかっている数\n（例: $-3x^2$ の係数は $-3$、$x^2$ の係数は $1$）',
      },
      {
        id: 'math-g2-mp-fc7',
        front: '多項式の次数の求め方は？',
        back: '各項の次数のうち、もっとも大きいものが多項式の次数\n（例: $3x^2 + 5x - 1$ → 最高次数は $2$ → $2$ 次式）',
      },
      {
        id: 'math-g2-mp-fc8',
        front: '同類項とは？',
        back: '文字の部分が同じ項どうし\n（例: $3x$ と $-5x$、$2a^2b$ と $-7a^2b$）',
      },
      {
        id: 'math-g2-mp-fc9',
        front: '$3x$ と $3x^2$ は同類項？',
        back: '同類項ではない！\n$x$ と $x^2$ は文字の部分が異なる',
      },
      {
        id: 'math-g2-mp-fc10',
        front: '同類項のまとめ方の公式は？',
        back: '$ma + na = (m+n)a$\n係数どうしを足し引きして、文字はそのまま',
      },
      {
        id: 'math-g2-mp-fc11',
        front: '$5x + 3x$ の答えは？',
        back: '$8x$\n（係数 $5 + 3 = 8$ をかけて $8x$）',
      },
      {
        id: 'math-g2-mp-fc12',
        front: '$\\frac{1}{2}a + \\frac{1}{3}a$ の答えは？',
        back: '$\\frac{5}{6}a$\n（通分して $\\frac{3}{6}a + \\frac{2}{6}a = \\frac{5}{6}a$）',
      },
      {
        id: 'math-g2-mp-fc13',
        front: '$-6a^2b$ の次数と係数は？',
        back: '次数: $3$（$a$ が $2$ 個 + $b$ が $1$ 個）\n係数: $-6$',
      },
      {
        id: 'math-g2-mp-fc14',
        front: '$4ab$ と $-2ba$ は同類項？',
        back: '同類項！\n$ab$ と $ba$ は同じ（かけ算の順番は関係ない）',
      },
      {
        id: 'math-g2-mp-fc15',
        front: '何次式かの見分け方は？',
        back: '多項式の次数（最高次数）で決まる\n$1$ 次式: 最高次数 $1$\n$2$ 次式: 最高次数 $2$',
      },
      {
        id: 'math-g2-mp-fc16',
        front: '数だけの項（例: $7$）の次数は？',
        back: '$0$\n文字が含まれていないので次数は $0$',
      },
      {
        id: 'math-g2-mp-fc17',
        front: '$x^2 + 9x + 3x^2 - 4x$ を整理すると？',
        back: '$4x^2 + 5x$\n（$x^2 + 3x^2 = 4x^2$、$9x - 4x = 5x$）',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-monomial-poly-q1',
          question: '次のうち、多項式はどれ？',
          options: ['$3ab$', '$5x + 2y - 1$', '$-7x^2$', '$4$'],
          correctIndex: 1,
          explanation:
            '$5x + 2y - 1$ は項が3つあるので多項式だよ。$3ab$ や $-7x^2$ は単項式、$4$ も単項式（数だけ）だね。',
        },
        {
          id: 'math-g2-monomial-poly-q2',
          question: '単項式 $4x^2y$ の次数は？',
          options: ['$1$', '$2$', '$3$', '$4$'],
          correctIndex: 2,
          explanation:
            '$4x^2y$ では $x$ が2個、$y$ が1個かけ合わされているから、次数は $2 + 1 = 3$ だよ。',
        },
        {
          id: 'math-g2-monomial-poly-q3',
          question: '次のうち、同類項の組み合わせはどれ？',
          options: [
            '$3x$ と $3y$',
            '$2a^2b$ と $-5a^2b$',
            '$4x$ と $4x^2$',
            '$7ab$ と $7ba^2$',
          ],
          correctIndex: 1,
          explanation:
            '$2a^2b$ と $-5a^2b$ は文字の部分が同じ（$a^2b$）なので同類項だよ。文字の部分が違う組は同類項ではないよ。',
        },
        {
          id: 'math-g2-mp-q4',
          question: '$-3a^2b$ の係数はどれ？',
          options: ['$3$', '$-3$', '$a^2b$', '$2$'],
          correctIndex: 1,
          explanation:
            '係数は文字にかかっている数のこと。$-3a^2b$ の文字の部分は $a^2b$ で、係数は $-3$ だよ。',
        },
        {
          id: 'math-g2-mp-q5',
          question: '多項式 $2x^2 - 3x + 5$ の次数は？',
          options: ['$0$', '$1$', '$2$', '$3$'],
          correctIndex: 2,
          explanation:
            '各項の次数は $2x^2$ が $2$、$-3x$ が $1$、$5$ が $0$。最も大きい $2$ が多項式の次数だよ。',
        },
        {
          id: 'math-g2-mp-q6',
          question: '$5a - 2b + 3a + 4b$ を同類項でまとめると？',
          options: [
            '$8a + 2b$',
            '$2a + 6b$',
            '$8a + 6b$',
            '$10ab$',
          ],
          correctIndex: 0,
          explanation:
            '$5a + 3a = 8a$、$-2b + 4b = 2b$ だから、答えは $8a + 2b$ だよ。',
        },
        {
          id: 'math-g2-mp-q7',
          question: '$x^2 + 9x + 3x^2 - 4x$ を計算すると？',
          options: [
            '$4x^2 + 5x$',
            '$3x^2 + 5x$',
            '$4x^2 + 13x$',
            '$9x^4$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2$ の同類項: $x^2 + 3x^2 = 4x^2$、$x$ の同類項: $9x - 4x = 5x$。答えは $4x^2 + 5x$ だよ。',
        },
        {
          id: 'math-g2-mp-q8',
          question: '$\\frac{1}{2}a + \\frac{1}{3}a$ を計算すると？',
          options: [
            '$\\frac{1}{5}a$',
            '$\\frac{2}{5}a$',
            '$\\frac{5}{6}a$',
            '$\\frac{1}{6}a$',
          ],
          correctIndex: 2,
          explanation:
            '通分して $\\frac{3}{6}a + \\frac{2}{6}a = \\frac{5}{6}a$ だよ。分母どうしを足すのではなく、通分してから計算しよう。',
        },
        {
          id: 'math-g2-mp-q9',
          question: '多項式 $x^2y + 3xy - 2y$ の次数は？',
          options: ['$1$', '$2$', '$3$', '$4$'],
          correctIndex: 2,
          explanation:
            '$x^2y$ の次数は $2+1=3$、$3xy$ の次数は $2$、$-2y$ の次数は $1$。最大の $3$ が多項式の次数だよ。',
        },
        {
          id: 'math-g2-mp-q10',
          question: '次のうち、正しい計算はどれ？',
          options: [
            '$3x + 2y = 5xy$',
            '$x^2 + x = x^3$',
            '$4a - a = 3a$',
            '$2x + 3x^2 = 5x^3$',
          ],
          correctIndex: 2,
          explanation:
            '$4a - a = 3a$ が正しいよ。同類項でない項は足し引きできないし、次数の違う項をまとめることもできないよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-monomial-poly-ex1',
          question:
            '次の式について、単項式か多項式かを答え、多項式の場合は項をすべて答えよう。\n$3x^2 - 5x + 2$',
          steps: [
            {
              title: 'Step 1: 式の形を見よう',
              content:
                '$3x^2 - 5x + 2$ は、$3x^2$ と $-5x$ と $2$ の和の形になっているね。',
              highlight: '$3x^2 - 5x + 2$',
            },
            {
              title: 'Step 2: 判定する',
              content:
                '項が複数あるので多項式だよ。項は $3x^2$, $-5x$, $2$ の3つだね。',
              highlight: '項: $3x^2$, $-5x$, $2$',
            },
          ],
          answer: '多項式。項は $3x^2$, $-5x$, $2$',
        },
        {
          id: 'math-g2-monomial-poly-ex2',
          question: '次の単項式の次数と係数を答えよう。\n$-6a^2b$',
          steps: [
            {
              title: 'Step 1: 係数を見つけよう',
              content:
                '文字にかかっている数は $-6$ だね。これが係数だよ。',
              highlight: '係数: $-6$',
            },
            {
              title: 'Step 2: 次数を数えよう',
              content:
                '$a$ が2個、$b$ が1個かけ合わされているから、次数は $2 + 1 = 3$ だよ。',
              highlight: '次数: $3$',
            },
          ],
          answer: '係数: $-6$, 次数: $3$',
        },
        {
          id: 'math-g2-mp-ex3',
          question:
            '多項式 $2x^2 - 3xy + y^2 + 5$ の次数を求めよう。',
          steps: [
            {
              title: 'Step 1: 各項の次数を調べる',
              content:
                '$2x^2$ → 次数 $2$\n$-3xy$ → 次数 $1+1=2$\n$y^2$ → 次数 $2$\n$5$ → 次数 $0$（定数項）',
              highlight: '各項の次数: $2$, $2$, $2$, $0$',
            },
            {
              title: 'Step 2: 最も大きい次数を選ぶ',
              content:
                '各項の次数のうち最大は $2$ だから、この多項式の次数は $2$（$2$ 次式）だよ。',
              highlight: '多項式の次数: $2$',
            },
          ],
          answer: '次数 $2$（$2$ 次式）',
        },
        {
          id: 'math-g2-mp-ex4',
          question:
            '同類項をまとめよう。\n$2x^2 - 3x + 5x^2 + x - 4$',
          steps: [
            {
              title: 'Step 1: 同類項を見つける',
              content:
                '$x^2$ の項: $2x^2$ と $5x^2$\n$x$ の項: $-3x$ と $x$\n定数項: $-4$',
              highlight: '同類項をグループ分け',
            },
            {
              title: 'Step 2: 各グループの係数を計算',
              content:
                '$x^2$: $2 + 5 = 7$ → $7x^2$\n$x$: $-3 + 1 = -2$ → $-2x$\n定数項はそのまま $-4$',
              highlight: '$7x^2 - 2x - 4$',
            },
          ],
          answer: '$7x^2 - 2x - 4$',
        },
        {
          id: 'math-g2-mp-ex5',
          question:
            '分数の係数を含む式の同類項をまとめよう。\n$\\frac{1}{2}a + b - \\frac{1}{3}a + 2b$',
          steps: [
            {
              title: 'Step 1: 同類項を見つける',
              content:
                '$a$ の項: $\\frac{1}{2}a$ と $-\\frac{1}{3}a$\n$b$ の項: $b$ と $2b$',
              highlight: '同類項をグループ分け',
            },
            {
              title: 'Step 2: $a$ の項を通分してまとめる',
              content:
                '$\\frac{1}{2}a - \\frac{1}{3}a = \\frac{3}{6}a - \\frac{2}{6}a = \\frac{1}{6}a$',
              highlight: '$\\frac{1}{6}a$',
            },
            {
              title: 'Step 3: $b$ の項をまとめる',
              content:
                '$b + 2b = 3b$',
              highlight: '$3b$',
            },
          ],
          answer: '$\\frac{1}{6}a + 3b$',
        },
      ],
    },
    chatId: 'math-g2-monomial-poly',
  },
};
