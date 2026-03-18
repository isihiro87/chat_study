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
        front: '数や文字のかけ算だけでできている式\n（例: $3x$, $-5ab$, $7$）', back: '単項式とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc2',
        front: '単項式の和の形になっている式\n（例: $3x + 2y - 5$）', back: '多項式とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc3',
        front: '多項式を構成する一つひとつの単項式\n（例: $3x + 2y - 5$ の項は $3x$, $2y$, $-5$）', back: '項とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc4',
        front: '文字を含まない、数だけの項\n（例: $3x + 2y - 5$ の定数項は $-5$）', back: '定数項とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc5',
        front: 'かけ合わされている文字の個数\n（例: $4x^2y$ → $x$ が $2$ 個 + $y$ が $1$ 個 = 次数 $3$）', back: '単項式の次数とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc6',
        front: '単項式で文字にかかっている数\n（例: $-3x^2$ の係数は $-3$、$x^2$ の係数は $1$）', back: '係数とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc7',
        front: '各項の次数のうち、もっとも大きいものが多項式の次数\n（例: $3x^2 + 5x - 1$ → 最高次数は $2$ → $2$ 次式）', back: '多項式の次数の求め方は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc8',
        front: '文字の部分が同じ項どうし\n（例: $3x$ と $-5x$、$2a^2b$ と $-7a^2b$）', back: '同類項とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc9',
        front: '同類項ではない！\n$x$ と $x^2$ は文字の部分が異なる', back: '$3x$ と $3x^2$ は同類項？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc10',
        front: '$ma + na = (m+n)a$\n係数どうしを足し引きして、文字はそのまま', back: '同類項のまとめ方の公式は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc11',
        front: '$8x$\n（係数 $5 + 3 = 8$ をかけて $8x$）', back: '$5x + 3x$ の答えは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc12',
        front: '$\\frac{5}{6}a$\n（通分して $\\frac{3}{6}a + \\frac{2}{6}a = \\frac{5}{6}a$）', back: '$\\frac{1}{2}a + \\frac{1}{3}a$ の答えは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mp-fc13',
        front: '次数: $3$（$a$ が $2$ 個 + $b$ が $1$ 個）\n係数: $-6$', back: '$-6a^2b$ の次数と係数は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-mp-fc14',
        front: '同類項！\n$ab$ と $ba$ は同じ（かけ算の順番は関係ない）', back: '$4ab$ と $-2ba$ は同類項？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-mp-fc15',
        front: '多項式の次数（最高次数）で決まる\n$1$ 次式: 最高次数 $1$\n$2$ 次式: 最高次数 $2$', back: '何次式かの見分け方は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-mp-fc16',
        front: '$0$\n文字が含まれていないので次数は $0$', back: '数だけの項（例: $7$）の次数は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-mp-fc17',
        front: '$4x^2 + 5x$\n（$x^2 + 3x^2 = 4x^2$、$9x - 4x = 5x$）', back: '$x^2 + 9x + 3x^2 - 4x$ を整理すると？',
        difficulty: 'standard',
      },
      { id: 'math-g2-mp-fc18', front: '$1$ 次式: 最高次数が $1$。例: $3x + 2$', back: '1次式とは？', difficulty: 'standard' },
      { id: 'math-g2-mp-fc19', front: '$2$ 次式: 最高次数が $2$。例: $x^2 + 3x - 1$', back: '2次式とは？', difficulty: 'standard' },
      { id: 'math-g2-mp-fc20', front: '単項式（$-5ab$ は数と文字のかけ算だけ）', back: '$-5ab$ は単項式？多項式？', difficulty: 'standard' },
      { id: 'math-g2-mp-fc21', front: '多項式（$3x^2 - 2x + 1$ は3つの単項式の和）', back: '$3x^2 - 2x + 1$ は単項式？多項式？', difficulty: 'standard' },
      { id: 'math-g2-mp-fc22', front: '$1$。$x$ は $x^1$ と同じで、文字が1個かけ合わされている。', back: '$x$ の次数は？', difficulty: 'standard' },
      { id: 'math-g2-mp-fc23', front: '次数が高い順に並べるのが一般的。例: $x^2 + 3x - 1$（降べきの順）', back: '多項式を整理するとき、項はどう並べる？', difficulty: 'advanced' },
      { id: 'math-g2-mp-fc24', front: '同類項ではない。$ab$ は2次、$a$ は1次で次数が違う。', back: '$3ab$ と $2a$ は同類項？', difficulty: 'advanced' },
      { id: 'math-g2-mp-fc25', front: '$7$。定数項は数だけの項で、係数という概念は適用されない（あえて言えば $7 \times 1$ の係数 $7$）。', back: '$2x + 7$ の定数項の値は？', difficulty: 'advanced' },
      { id: 'math-g2-mp-fc26', front: '$6a - b$（$a$: $2+4=6$、$b$: $3+(-4)=-1$）', back: '$2a + 3b + 4a - 4b$ を整理すると？', difficulty: 'advanced' },
      { id: 'math-g2-mp-fc27', front: '「項」→「次数」→「同類項」の順で理解するのがコツ', back: '式の分類を理解する手順は？', difficulty: 'advanced' },
      { id: 'math-g2-mp-fc28', front: '$x^2y$ と $3x^2y$ は同類項（文字部分が同じ $x^2y$）', back: '$x^2y$ と $3x^2y$ は同類項？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-monomial-poly-q1',
          question: '次のうち、多項式はどれ？',
          options: ['$3ab$', '$4$', '$-7x^2$', '$5x + 2y - 1$'],
          correctIndex: 3,
          explanation:
            '$5x + 2y - 1$ は項が3つあるので多項式だよ。$3ab$ や $-7x^2$ は単項式、$4$ も単項式（数だけ）だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-monomial-poly-q2',
          question: '単項式 $4x^2y$ の次数は？',
          options: ['$1$', '$3$', '$2$', '$4$'],
          correctIndex: 1,
          explanation:
            '$4x^2y$ では $x$ が2個、$y$ が1個かけ合わされているから、次数は $2 + 1 = 3$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-monomial-poly-q3',
          question: '次のうち、同類項の組み合わせはどれ？',
          options: [
            '$3x$ と $3y$',
            '$4x$ と $4x^2$',
            '$2a^2b$ と $-5a^2b$',
            '$7ab$ と $7ba^2$',
          ],
          correctIndex: 2,
          explanation:
            '$2a^2b$ と $-5a^2b$ は文字の部分が同じ（$a^2b$）なので同類項だよ。文字の部分が違う組は同類項ではないよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mp-q4',
          question: '$-3a^2b$ の係数はどれ？',
          options: ['$-3$', '$3$', '$a^2b$', '$2$'],
          correctIndex: 0,
          explanation:
            '係数は文字にかかっている数のこと。$-3a^2b$ の文字の部分は $a^2b$ で、係数は $-3$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mp-q5',
          question: '多項式 $2x^2 - 3x + 5$ の次数は？',
          options: ['$0$', '$1$', '$3$', '$2$'],
          correctIndex: 3,
          explanation:
            '各項の次数は $2x^2$ が $2$、$-3x$ が $1$、$5$ が $0$。最も大きい $2$ が多項式の次数だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mp-q6',
          question: '$5a - 2b + 3a + 4b$ を同類項でまとめると？',
          options: [
            '$8a + 6b$',
            '$2a + 6b$',
            '$8a + 2b$',
            '$10ab$',
          ],
          correctIndex: 2,
          explanation:
            '$5a + 3a = 8a$、$-2b + 4b = 2b$ だから、答えは $8a + 2b$ だよ。',
          difficulty: 'basic',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mp-q8',
          question: '$\\frac{1}{2}a + \\frac{1}{3}a$ を計算すると？',
          options: [
            '$\\frac{1}{5}a$',
            '$\\frac{5}{6}a$',
            '$\\frac{2}{5}a$',
            '$\\frac{1}{6}a$',
          ],
          correctIndex: 1,
          explanation:
            '通分して $\\frac{3}{6}a + \\frac{2}{6}a = \\frac{5}{6}a$ だよ。分母どうしを足すのではなく、通分してから計算しよう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mp-q9',
          question: '多項式 $x^2y + 3xy - 2y$ の次数は？',
          options: ['$1$', '$3$', '$2$', '$4$'],
          correctIndex: 1,
          explanation:
            '$x^2y$ の次数は $2+1=3$、$3xy$ の次数は $2$、$-2y$ の次数は $1$。最大の $3$ が多項式の次数だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mp-q10',
          question: '次のうち、正しい計算はどれ？',
          options: [
            '$3x + 2y = 5xy$',
            '$x^2 + x = x^3$',
            '$2x + 3x^2 = 5x^3$',
            '$4a - a = 3a$',
          ],
          correctIndex: 3,
          explanation:
            '$4a - a = 3a$ が正しいよ。同類項でない項は足し引きできないし、次数の違う項をまとめることもできないよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mp-q11',
          question: '$2a + 3b - a + 4b$ を計算すると？',
          options: ['$a + 7b$', '$3a + 7b$', '$a - b$', '$3a - b$'],
          correctIndex: 0,
          explanation: '$a$: $2a - a = a$、$b$: $3b + 4b = 7b$。答え $a + 7b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q12',
          question: '次のうち、2次式はどれ？',
          options: ['$3x + 1$', '$5$', '$x^2 - 2x + 3$', '$2xy$'],
          correctIndex: 2,
          explanation: '$x^2 - 2x + 3$ の最高次数は $2$ だから2次式だよ。$2xy$ も次数2だけど単項式。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q13',
          question: '$-4xy$ の次数と係数は？',
          options: ['次数 $1$、係数 $-4$', '次数 $2$、係数 $-4$', '次数 $2$、係数 $4$', '次数 $4$、係数 $-1$'],
          correctIndex: 1,
          explanation: '$x$ が1個、$y$ が1個で次数 $2$。係数は $-4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q14',
          question: '多項式 $a^2 + 3a - 5$ の定数項は？',
          options: ['$a^2$', '$3a$', '$-5$', '$3$'],
          correctIndex: 2,
          explanation: '定数項は文字を含まない項。$-5$ が定数項だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q15',
          question: '$7x - 3y + 2x + y$ を計算すると？',
          options: ['$9x - 2y$', '$5x - 4y$', '$9x - 4y$', '$5x - 2y$'],
          correctIndex: 0,
          explanation: '$x$: $7x + 2x = 9x$、$y$: $-3y + y = -2y$。答え $9x - 2y$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q16',
          question: '次のうち、$3ab$ と同類項はどれ？',
          options: ['$3a$', '$3b$', '$-2ab$', '$3a^2b$'],
          correctIndex: 2,
          explanation: '同類項は文字の部分が同じ項。$-2ab$ は $ab$ の部分が同じだから同類項だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q17',
          question: '$3x^2 + 2x - x^2 + 5x - 3$ を整理すると？',
          options: ['$2x^2 + 7x - 3$', '$4x^2 + 7x - 3$', '$2x^2 + 3x - 3$', '$4x^2 + 3x - 3$'],
          correctIndex: 0,
          explanation: '$x^2$: $3-1=2$、$x$: $2+5=7$、定数: $-3$。答え $2x^2 + 7x - 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q18',
          question: '単項式 $\dfrac{1}{2}x^3$ の次数は？',
          options: ['$\dfrac{1}{2}$', '$1$', '$2$', '$3$'],
          correctIndex: 3,
          explanation: '$x$ が3個かけ合わされているから次数は $3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q19',
          question: '次のうち、正しい計算はどれ？',
          options: ['$2a + 3b = 5ab$', '$x^2 + 2x = 3x^2$', '$5x - 2x = 3x$', '$a + a = a^2$'],
          correctIndex: 2,
          explanation: '$5x - 2x = 3x$ が正しい。異なる文字や次数の項はまとめられないよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q20',
          question: '$\dfrac{2}{3}a - \dfrac{1}{4}a$ を計算すると？',
          options: ['$\dfrac{1}{7}a$', '$\dfrac{5}{12}a$', '$\dfrac{1}{12}a$', '$\dfrac{7}{12}a$'],
          correctIndex: 1,
          explanation: '通分して $\dfrac{8}{12}a - \dfrac{3}{12}a = \dfrac{5}{12}a$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q21',
          question: '$5ab - 2ba + 3ab$ を計算すると？',
          options: ['$6ab$', '$8ab$', '$10ab$', '$0$'],
          correctIndex: 0,
          explanation: '$ba = ab$ だから全て同類項。$5 - 2 + 3 = 6$ で $6ab$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q22',
          question: '多項式 $3x^2y - 2xy^2 + xy$ の次数は？',
          options: ['$2$', '$3$', '$4$', '$1$'],
          correctIndex: 1,
          explanation: '$3x^2y$: 次数 $3$、$-2xy^2$: 次数 $3$、$xy$: 次数 $2$。最大は $3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mp-q23',
          question: '$4x^2 + 3x + 2x^2 - x + 5$ の $x$ の項の係数は？',
          options: ['$3$', '$2$', '$-1$', '$4$'],
          correctIndex: 1,
          explanation: '$x$ の同類項: $3x + (-x) = 2x$。係数は $2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mp-q24',
          question: '次のうち、単項式はどれ？',
          options: ['$x + y$', '$x^2 - 1$', '$-7a^2b^3$', '$3x + 2y - 1$'],
          correctIndex: 2,
          explanation: '$-7a^2b^3$ は数と文字のかけ算だけでできているから単項式だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mp-q25',
          question: '$a^2 + 2ab + b^2$ は何次式？',
          options: ['$1$ 次式', '$2$ 次式', '$3$ 次式', '$4$ 次式'],
          correctIndex: 1,
          explanation: '各項の次数: $a^2$ は $2$、$2ab$ は $2$、$b^2$ は $2$。最高次数 $2$ で $2$ 次式だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mp-q26',
          question: '$x$ の係数が $1$ である項はどれ？',
          options: ['$x$', '$2x$', '$x^2$', '$-x$'],
          correctIndex: 0,
          explanation: '$x = 1 \cdot x$ だから $x$ の係数は $1$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mp-q27',
          question: '$-3a + 5b + 7a - 2b - 4$ を整理すると？',
          options: ['$4a + 3b - 4$', '$-10a + 3b - 4$', '$4a + 7b - 4$', '$10a + 3b - 4$'],
          correctIndex: 0,
          explanation: '$a$: $-3+7=4$、$b$: $5-2=3$、定数: $-4$。答え $4a + 3b - 4$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mp-q28',
          question: '数 $5$ は何次の単項式？',
          options: ['$1$ 次', '$5$ 次', '$0$ 次', '単項式ではない'],
          correctIndex: 2,
          explanation: '数だけの項（定数項）の次数は $0$ だよ。$5 = 5 \times 1$ で文字が0個。',
          difficulty: 'advanced',
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
