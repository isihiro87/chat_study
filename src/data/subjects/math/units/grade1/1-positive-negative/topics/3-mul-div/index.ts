import type { Topic } from '../../../../../../../../data/types';

export const mulDiv: Topic = {
  id: 'math-g1-mul-div',
  eraId: 'math-g1-pos-neg',
  name: '乗法と除法',
  subtitle: '正負の数のかけ算・わり算のルール',
  icon: '✖️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '乗法の符号のルール',
          content:
            '正負の数のかけ算には、符号のルールがあるよ。同符号どうしなら結果は正、異符号どうしなら結果は負になるんだ。',
          keyPoints: [
            '$(+) \\times (+) = +$ 、 $(-) \\times (-) = +$ → 同符号は正',
            '$(+) \\times (-) = -$ 、 $(-) \\times (+) = -$ → 異符号は負',
            '絶対値どうしをかけて、符号のルールで符号を決める',
          ],
        },
        {
          title: '3つ以上の数の乗法',
          content:
            '3つ以上の数をかけるときは、負の数の個数で符号が決まるよ。偶数個なら正、奇数個なら負になるんだ。',
          keyPoints: [
            '負の数が偶数個 → 結果は正（例: $(-2) \\times (-3) \\times (-1) \\times (-4) = +24$）',
            '負の数が奇数個 → 結果は負（例: $(-2) \\times (-3) \\times (-1) = -6$）',
            '$0$ をかけると結果は必ず $0$',
          ],
        },
        {
          title: '逆数と除法',
          content:
            '2つの数の積が $1$ になるとき、一方を他方の「逆数」と言うよ。除法（わり算）は逆数をかける乗法に変換して計算するんだ。',
          keyPoints: [
            '$\\frac{2}{3}$ の逆数は $\\frac{3}{2}$（分子と分母を入れかえる）',
            '$5$ の逆数は $\\frac{1}{5}$',
            '$a \\div b = a \\times \\frac{1}{b}$（わり算はかけ算に変換）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-md-fc1', front: 'かけ算のことを数学では何という？', back: '乗法（じょうほう）' },
      { id: 'math-g1-md-fc2', front: 'わり算のことを数学では何という？', back: '除法（じょほう）' },
      { id: 'math-g1-md-fc3', front: '同符号の乗法の結果の符号は？', back: '正（$+$）。$(+)\\times(+)=+$、$(-)\\times(-)=+$' },
      { id: 'math-g1-md-fc4', front: '異符号の乗法の結果の符号は？', back: '負（$-$）。$(+)\\times(-)=-$、$(-)\\times(+)=-$' },
      { id: 'math-g1-md-fc5', front: '3つ以上の数の乗法で、負の数が偶数個のとき結果は？', back: '正（$+$）' },
      { id: 'math-g1-md-fc6', front: '3つ以上の数の乗法で、負の数が奇数個のとき結果は？', back: '負（$-$）' },
      { id: 'math-g1-md-fc7', front: '$0$ にどんな数をかけても結果は？', back: '$0$' },
      { id: 'math-g1-md-fc8', front: '2つの数の積が $1$ になるとき、一方を他方の何という？', back: '逆数（ぎゃくすう）' },
      { id: 'math-g1-md-fc9', front: '$\\frac{2}{3}$ の逆数は？', back: '$\\frac{3}{2}$（分子と分母を入れかえる）' },
      { id: 'math-g1-md-fc10', front: '$5$ の逆数は？', back: '$\\frac{1}{5}$' },
      { id: 'math-g1-md-fc11', front: '$0$ に逆数はある？', back: 'ない（$0$ で割ることはできない）' },
      { id: 'math-g1-md-fc12', front: '除法を乗法に変換する方法は？', back: 'わる数の逆数をかける。$a \\div b = a \\times \\frac{1}{b}$' },
      { id: 'math-g1-md-fc13', front: '除法の符号ルールは乗法と同じ？', back: '同じ。同符号→正、異符号→負' },
      { id: 'math-g1-md-fc14', front: '負の数の逆数の符号は？', back: '負。例: $-\\frac{2}{3}$ の逆数は $-\\frac{3}{2}$' },
      { id: 'math-g1-md-fc15', front: '乗法の交換法則とは？', back: '$a \\times b = b \\times a$' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-mul-div-q1',
          question: '$(-4) \\times (+3)$ の計算結果は？',
          options: ['$+12$', '$-12$', '$+7$', '$-7$'],
          correctIndex: 1,
          explanation:
            '異符号（負×正）のかけ算だから結果は負。$4 \\times 3 = 12$ に負の符号をつけて $-12$ だよ。',
        },
        {
          id: 'math-g1-mul-div-q2',
          question: '$(-5) \\times (-6)$ の計算結果は？',
          options: ['$+30$', '$-30$', '$-11$', '$+11$'],
          correctIndex: 0,
          explanation:
            '同符号（負×負）のかけ算だから結果は正。$5 \\times 6 = 30$ に正の符号をつけて $+30$ だよ。',
        },
        {
          id: 'math-g1-mul-div-q3',
          question: '$(-2) \\times (-3) \\times (-4)$ の計算結果は？',
          options: ['$+24$', '$+9$', '$-24$', '$-9$'],
          correctIndex: 2,
          explanation:
            '負の数が $3$ 個（奇数個）だから結果は負。$2 \\times 3 \\times 4 = 24$ に負の符号をつけて $-24$ だよ。',
        },
        {
          id: 'math-g1-mul-div-q4',
          question: '$(-12) \\div (+3)$ の計算結果は？',
          options: ['$+4$', '$-36$', '$+36$', '$-4$'],
          correctIndex: 3,
          explanation:
            '異符号（負÷正）だから結果は負。$12 \\div 3 = 4$ に負の符号をつけて $-4$ だよ。',
        },
        {
          id: 'math-g1-mul-div-q5',
          question: '$\\frac{3}{4}$ の逆数は？',
          options: [
            '$\\frac{4}{3}$',
            '$-\\frac{3}{4}$',
            '$\\frac{3}{4}$',
            '$-\\frac{4}{3}$',
          ],
          correctIndex: 0,
          explanation:
            '逆数は分子と分母を入れかえた数だよ。$\\frac{3}{4}$ の逆数は $\\frac{4}{3}$ だね。',
        },
        {
          id: 'math-g1-mul-div-q6',
          question: '$0 \\times (-15)$ の計算結果は？',
          options: ['$+15$', '$-15$', '計算できない', '$0$'],
          correctIndex: 3,
          explanation:
            '$0$ にどんな数をかけても結果は必ず $0$ になるよ。',
        },
        {
          id: 'math-g1-mul-div-q7',
          question: '$(-0.3) \\times (-2)$ の計算結果は？',
          options: ['$-0.6$', '$+0.6$', '$+0.06$', '$-0.06$'],
          correctIndex: 1,
          explanation:
            '同符号（負×負）だから正。$0.3 \\times 2 = 0.6$ で、答えは $+0.6$ だよ。',
        },
        {
          id: 'math-g1-mul-div-q8',
          question: '$(-48) \\div (-3)$ を逆数を使った乗法に直すと？',
          options: [
            '$(-48) \\times (-3)$',
            '$(-48) \\times (+\\frac{1}{3})$',
            '$(-48) \\times (-\\frac{1}{3})$',
            '$(-48) \\times (+3)$',
          ],
          correctIndex: 2,
          explanation:
            '$(-3)$ の逆数は $(-\\frac{1}{3})$ だよ。だから $(-48) \\div (-3) = (-48) \\times (-\\frac{1}{3}) = +16$ だね。',
        },
        {
          id: 'math-g1-mul-div-q9',
          question: '$(-15) \\times 9 \\times (-3)$ を工夫して計算すると？',
          options: ['$-405$', '$+405$', '$+135$', '$-135$'],
          correctIndex: 1,
          explanation:
            '交換法則で $(-15) \\times (-3) \\times 9 = (+45) \\times 9 = +405$ と計算すると楽だよ。負の数 $2$ 個（偶数）→正。',
        },
        {
          id: 'math-g1-mul-div-q10',
          question: '$0.5$ の逆数は？',
          options: ['$2$', '$-0.5$', '$0.5$', '$-2$'],
          correctIndex: 0,
          explanation:
            '$0.5 = \\frac{1}{2}$ だから、逆数は $\\frac{2}{1} = 2$ だよ。$0.5 \\times 2 = 1$ になるね。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-mul-div-ex1',
          question:
            '次の計算をしよう。\n$(-6) \\times (+5)$',
          steps: [
            {
              title: 'Step 1: 符号を決める',
              content:
                '負 × 正 = 異符号だから、結果の符号は負だよ。',
              highlight: '異符号 → 負',
            },
            {
              title: 'Step 2: 絶対値をかける',
              content:
                '$6 \\times 5 = 30$',
              highlight: '$6 \\times 5 = 30$',
            },
            {
              title: 'Step 3: 符号をつける',
              content:
                '負の符号をつけて $-30$ が答えだよ。',
              highlight: '$(-6) \\times (+5) = -30$',
            },
          ],
          answer: '$-30$',
        },
        {
          id: 'math-g1-mul-div-ex2',
          question:
            '次の計算をしよう。\n$(-2) \\times (-3) \\times (+5)$',
          steps: [
            {
              title: 'Step 1: 負の数の個数を数える',
              content:
                '$-2$ と $-3$ の $2$ 個（偶数個）だから、結果の符号は正だよ。',
              highlight: '負の数 $2$ 個（偶数） → 正',
            },
            {
              title: 'Step 2: 絶対値をすべてかける',
              content:
                '$2 \\times 3 \\times 5 = 30$',
              highlight: '$2 \\times 3 \\times 5 = 30$',
            },
            {
              title: 'Step 3: 符号をつける',
              content:
                '正の符号をつけて $+30$ が答えだよ。',
              highlight: '$(-2) \\times (-3) \\times (+5) = +30$',
            },
          ],
          answer: '$+30$',
        },
        {
          id: 'math-g1-mul-div-ex3',
          question:
            '次の計算をしよう。\n$(-8) \\div (-\\frac{2}{3})$',
          steps: [
            {
              title: 'Step 1: 除法を乗法に変換',
              content:
                'わる数 $-\\frac{2}{3}$ の逆数は $-\\frac{3}{2}$ だよ。\n$(-8) \\div (-\\frac{2}{3}) = (-8) \\times (-\\frac{3}{2})$',
              highlight: '$(-8) \\times (-\\frac{3}{2})$',
            },
            {
              title: 'Step 2: 符号を決める',
              content:
                '負 × 負 = 同符号だから、結果の符号は正だよ。',
              highlight: '同符号 → 正',
            },
            {
              title: 'Step 3: 絶対値を計算',
              content:
                '$8 \\times \\frac{3}{2} = \\frac{24}{2} = 12$',
              highlight: '$(-8) \\div (-\\frac{2}{3}) = +12$',
            },
          ],
          answer: '$+12$',
        },
        {
          id: 'math-g1-mul-div-ex4',
          question:
            '次の計算をしよう。\n$\\left(-\\frac{3}{5}\\right) \\div \\left(+\\frac{9}{10}\\right)$',
          steps: [
            {
              title: 'Step 1: 除法を乗法に変換',
              content:
                'わる数 $+\\frac{9}{10}$ の逆数は $+\\frac{10}{9}$ だよ。\n$\\left(-\\frac{3}{5}\\right) \\div \\left(+\\frac{9}{10}\\right) = \\left(-\\frac{3}{5}\\right) \\times \\left(+\\frac{10}{9}\\right)$',
              highlight: '$\\left(-\\frac{3}{5}\\right) \\times \\left(+\\frac{10}{9}\\right)$',
            },
            {
              title: 'Step 2: 符号を決める',
              content:
                '負 × 正 = 異符号だから、結果の符号は負だよ。',
              highlight: '異符号 → 負',
            },
            {
              title: 'Step 3: 絶対値を計算',
              content:
                '$\\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$',
              highlight: '$\\left(-\\frac{3}{5}\\right) \\div \\left(+\\frac{9}{10}\\right) = -\\frac{2}{3}$',
            },
          ],
          answer: '$-\\frac{2}{3}$',
        },
        {
          id: 'math-g1-mul-div-ex5',
          question:
            '次の計算をしよう。\n$(-1.5) \\times (-4) \\div (+3)$',
          steps: [
            {
              title: 'Step 1: 負の数の個数を確認',
              content:
                '負の数は $-1.5$ と $-4$ の $2$ 個（偶数）だから、最終的な符号は正だよ。',
              highlight: '負の数 $2$ 個 → 正',
            },
            {
              title: 'Step 2: 順番に計算',
              content:
                '$(-1.5) \\times (-4) = +6$\n$6 \\div 3 = 2$',
              highlight: '$(-1.5) \\times (-4) \\div (+3) = +2$',
            },
          ],
          answer: '$+2$',
        },
      ],
    },
    chatId: 'math-g1-mul-div',
  },
};
