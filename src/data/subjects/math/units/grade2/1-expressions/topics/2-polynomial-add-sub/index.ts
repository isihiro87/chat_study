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
            '数だけの項（定数項）も同類項どうしでまとめる'
          ],
        },
        {
          title: 'かっこの外し方（引き算で符号反転）',
          content:
            '多項式の引き算では、かっこの前が「−」のとき、かっこの中の全部の項の符号を反転させてから同類項をまとめるよ。',
          keyPoints: [
            'かっこの前が「+」→ そのまま外す（例: +(3x - 2) = 3x - 2）',
            'かっこの前が「−」→ 全部の項の符号が変わる（例: -(3x - 2) = -3x + 2）',
            '符号を変えたあとで同類項をまとめる'
          ],
        },
        {
          title: '数×多項式（分配法則）',
          content:
            '数を多項式にかけるときは、かっこの中の全部の項にその数をかけるよ。これを分配法則と言うんだ。$m(a + b) = ma + mb$ が基本の形だよ。',
          keyPoints: [
            '$2(3x + 5y) = 6x + 10y$（各項に $2$ をかける）',
            '$-3(2a - 4b) = -6a + 12b$（マイナスをかけると符号が変わる）',
            '分配法則: $m(a + b) = ma + mb$'
          ],
        },
        {
          title: '多項式÷数',
          content:
            '多項式を数で割るときは、各項をその数で割るよ。分数で割る場合は逆数をかけるのと同じだよ。',
          keyPoints: [
            '$(10x + 6y) \\div 2 = 5x + 3y$（各項を $2$ で割る）',
            '$(24a - 15b) \\div (-3) = -8a + 5b$（負の数で割ると符号が変わる）',
            '$\\div \\frac{1}{5}$ は $\\times 5$ と同じ'
          ],
        },
        {
          title: 'かっこがある式の計算（混合）',
          content:
            '2つ以上のかっこがある式は、まず分配法則でかっこを外してから、同類項をまとめるよ。',
          keyPoints: [
            '$2(x + y) + 3(x - 2y) = 2x + 2y + 3x - 6y = 5x - 4y$',
            '各かっこに分配法則を適用 → かっこを全部外す → 同類項をまとめる',
            'マイナスの係数のかっこは符号の変化に特に注意'
          ],
        },
        {
          title: '分数の形の式の計算',
          content:
            '分数の形の多項式の加減は、まず通分してから分子どうしの計算をするよ。分母が同じなら分子をそのまま足し引きするだけ！',
          keyPoints: [
            '分母が同じ → 分子をそのまま計算（例: $\\frac{3x-y}{2} + \\frac{x+y}{2} = \\frac{4x}{2} = 2x$）',
            '分母が違う → まず通分してから分子を計算',
            '引き算のときは引く方の分子全体にかっこをつけて符号に注意'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-pas-fc5',
        front: '$m(a + b) = ma + mb$', back: '分配法則 $m(a + b)$ は？',
        explanation: 'かっこの中の全部の項に $m$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-pas-fc14',
        front: '$\\bigcirc$ $-3x + 2$（正解）', back: 'よくある間違い: $-(3x - 2)$',
        explanation: '$\\times$ $-3x - 2$（間違い）。$-2$ も $+2$ に変わる！',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-pas-fc15',
        front: '$a - b$', back: '$3(7a - 2b) - 5(4a - b)$ の計算',
        explanation: '$= 21a - 6b - 20a + 5b = a - b$',
        difficulty: 'standard',
      },
      { id: 'math-g2-pas-fc20', front: '$-3a - 2b$', back: '$(12a + 8b) \\div (-4)$ の計算は？', explanation: '各項を $-4$ で割る', difficulty: 'standard' },
      { id: 'math-g2-pas-fc21', front: '$6x - 14y$', back: '$2(3x - 7y)$ を展開すると？', explanation: '$2 \\times 3x = 6x$, $2 \\times (-7y) = -14y$', difficulty: 'standard' },
      { id: 'math-g2-pas-fc23', front: '$\\dfrac{3x - 5y}{6}$', back: '$\\dfrac{3x-y}{3} - \\dfrac{x+y}{2}$ を計算すると？', explanation: '$\\dfrac{2(3x-y) - 3(x+y)}{6} = \\dfrac{3x - 5y}{6}$', difficulty: 'advanced' },
      { id: 'math-g2-pas-fc26', front: '$-5a + 13b$', back: '$2(2a + 5b) - 3(3a - b)$ の計算は？', explanation: '$= 4a + 10b - 9a + 3b = -5a + 13b$', difficulty: 'advanced' },
      { id: 'math-g2-pas-fc29', front: '$7x + y$', back: '$(3x - y) + (4x + 2y)$ を計算すると？', explanation: '$x$: $3+4=7$、$y$: $-1+2=1$。', difficulty: 'basic' },
      { id: 'math-g2-pas-fc30', front: '$-x - 3y$', back: '$(3x - y) - (4x + 2y)$ を計算すると？', explanation: '$x$: $3-4=-1$、$y$: $-1-2=-3$。', difficulty: 'basic' },
      { id: 'math-g2-pas-fc31', front: '$3x^2 - 2x$', back: '$(2x^2 + 3x) + (x^2 - 5x)$ を計算すると？', explanation: '$x^2$: $2+1=3$、$x$: $3-5=-2$。', difficulty: 'basic' },
      { id: 'math-g2-pas-fc32', front: '$-2x^2 + 8x$', back: '$(2x^2 + 5x) - (4x^2 - 3x)$ を計算すると？', explanation: '$x^2$: $2-4=-2$、$x$: $5+3=8$。', difficulty: 'standard' },
      { id: 'math-g2-pas-fc33', front: '$-5a - 4b + 1$', back: '$-(5a + 4b - 1)$ のかっこを外すと？', explanation: '全項の符号を反転。', difficulty: 'basic' },
      { id: 'math-g2-pas-fc34', front: '$6x + 10y$', back: '$2(3x + 5y)$ を展開すると？', explanation: '分配法則: $2 \\times 3x$ と $2 \\times 5y$。', difficulty: 'basic' },
      { id: 'math-g2-pas-fc35', front: '$-6a + 12b$', back: '$-3(2a - 4b)$ を展開すると？', explanation: '$-3 \\times 2a = -6a$、$-3 \\times (-4b) = 12b$。', difficulty: 'basic' },
      { id: 'math-g2-pas-fc36', front: '$5x + 3y$', back: '$(10x + 6y) \\div 2$ を計算すると？', explanation: '各項を $2$ で割る。', difficulty: 'basic' },
      { id: 'math-g2-pas-fc37', front: '$-8a + 5b$', back: '$(24a - 15b) \\div (-3)$ を計算すると？', explanation: '各項を $-3$ で割る。', difficulty: 'standard' },
      { id: 'math-g2-pas-fc38', front: '$5x - 4y$', back: '$2(x + y) + 3(x - 2y)$ を計算すると？', explanation: '$2x + 2y + 3x - 6y = 5x - 4y$。', difficulty: 'standard' },
      { id: 'math-g2-pas-fc39', front: '$4a - 9b$', back: '$3(2a - b) - 2(a + 3b)$ を計算すると？', explanation: '$6a - 3b - 2a - 6b = 4a - 9b$。', difficulty: 'standard' },
      { id: 'math-g2-pas-fc40', front: '$a - b$', back: '$3(7a - 2b) - 5(4a - b)$ を計算すると？', explanation: '$21a - 6b - 20a + 5b = a - b$。', difficulty: 'standard' },
      { id: 'math-g2-pas-fc41', front: '$x + y$', back: '$\\dfrac{x + 3y}{2} + \\dfrac{x - y}{2}$ を計算すると？', explanation: '分母が同じなので分子を足す。', difficulty: 'standard' },
      { id: 'math-g2-pas-fc42', front: '$\\dfrac{3x + y}{6}$', back: '$\\dfrac{3x - y}{2} - \\dfrac{3x - 2y}{3}$ を計算すると？', explanation: '通分して $\\dfrac{9x - 3y - 6x + 4y}{6}$。', difficulty: 'advanced' },
      { id: 'math-g2-pas-fc43', front: '$-5x + 10y$', back: '$(-x + 2y) \\div \\dfrac{1}{5}$ を計算すると？', explanation: '$\\div \\dfrac{1}{5}$ は $\\times 5$ と同じ。', difficulty: 'advanced' },
      { id: 'math-g2-pas-fc44', front: '$-6x^2 + 2x - 8$', back: '$-2(3x^2 - x + 4)$ を展開すると？', explanation: '各項に $-2$ をかける。', difficulty: 'standard' }
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-poly-add-sub-q1',
          question: '$(3x + 2y) + (5x - 3y)$ の計算結果は？',
          options: ['$8x + 5y$', '$8x - 5y$', '$8x - y$', '$2x + 5y$'],
          correctIndex: 2,
          explanation:
            '$x$ の項: $3x + 5x = 8x$、$y$ の項: $2y + (-3y) = -y$。\nだから答えは $8x - y$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-poly-add-sub-q2',
          question: '$(4a - 3b) - (2a - 5b)$ の計算結果は？',
          options: ['$2a + 2b$', '$6a + 2b$', '$2a - 8b$', '$2a - 2b$'],
          correctIndex: 0,
          explanation:
            'かっこを外すと $4a - 3b - 2a + 5b$。\n同類項をまとめて $2a + 2b$ だよ。引き算のかっこは符号が変わるのがポイント！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-poly-add-sub-q3',
          question: '$-(2x^2 - 4x + 1)$ を展開すると？',
          options: [
            '$2x^2 - 4x + 1$',
            '$-2x^2 + 4x - 1$',
            '$-2x^2 - 4x + 1$',
            '$-2x^2 + 4x + 1$'
          ],
          correctIndex: 1,
          explanation:
            'かっこの前が「$-$」なので全部の符号が反転！\n$2x^2 \\rightarrow -2x^2$, $-4x \\rightarrow +4x$, $+1 \\rightarrow -1$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-pas-q4',
          question: '$2(3x - 7y)$ の計算結果は？',
          options: ['$6x - 7y$', '$6x + 14y$', '$5x - 9y$', '$6x - 14y$'],
          correctIndex: 3,
          explanation:
            '分配法則で各項に $2$ をかけるよ。\n$2 \\times 3x = 6x$, $2 \\times (-7y) = -14y$ だから $6x - 14y$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-pas-q5',
          question: '$(24a - 15b) \\div (-3)$ の計算結果は？',
          options: ['$-8a + 5b$', '$8a - 5b$', '$-8a - 5b$', '$8a + 5b$'],
          correctIndex: 0,
          explanation:
            '各項を $-3$ で割るよ。\n$24a \\div (-3) = -8a$, $-15b \\div (-3) = 5b$ だから $-8a + 5b$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-pas-q6',
          question: '$3(7a - 2b) - 5(4a - b)$ の計算結果は？',
          options: ['$a + 3b$', '$-a - b$', '$a - b$', '$a - 11b$'],
          correctIndex: 2,
          explanation:
            '$21a - 6b - 20a + 5b = a - b$ だよ。\n$-5 \\times (-b) = +5b$ に注意！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-pas-q7',
          question: '$\\frac{3x - y}{2} - \\frac{3x - 2y}{3}$ の計算結果は？',
          options: [
            '$\\frac{3x - y}{6}$',
            '$\\frac{3x + y}{6}$',
            '$\\frac{3x - 5y}{6}$',
            '$\\frac{3x + 5y}{6}$'
          ],
          correctIndex: 1,
          explanation:
            '通分して $\\frac{3(3x-y) - 2(3x-2y)}{6}$\n$= \\frac{9x - 3y - 6x + 4y}{6} = \\frac{3x + y}{6}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-pas-q8',
          question: '$(-x + 2y) \\div \\frac{1}{5}$ の計算結果は？',
          options: [
            '$-\\frac{x}{5} + \\frac{2y}{5}$',
            '$-5x - 10y$',
            '$5x - 10y$',
            '$-5x + 10y$'
          ],
          correctIndex: 3,
          explanation:
            '$\\div \\frac{1}{5}$ は $\\times 5$ と同じ！\n$(-x) \\times 5 = -5x$, $2y \\times 5 = 10y$ だから $-5x + 10y$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-pas-q9',
          question:
            '$x = 4, y = -3$ のとき、$(3x - 4y) - (2x - 5y)$ の値は？',
          options: ['$7$', '$-1$', '$1$', '$-7$'],
          correctIndex: 2,
          explanation:
            'まず式を簡単にするよ。$3x - 4y - 2x + 5y = x + y$。\n$x + y = 4 + (-3) = 1$ だね。先に簡単にすると楽！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-pas-q10',
          question: '$-5(-a + 4b)$ の計算結果は？',
          options: [
            '$-5a + 20b$',
            '$5a + 20b$',
            '$-5a - 20b$',
            '$5a - 20b$'
          ],
          correctIndex: 3,
          explanation:
            '$-5 \\times (-a) = 5a$, $-5 \\times 4b = -20b$ だよ。\nマイナス×マイナスはプラスになるのがポイント！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-poly-add-sub-q11',
          question: '$-3(2x - 5y)$ の計算結果は？',
          options: ['$-6x - 15y$', '$6x - 15y$', '$-6x + 15y$', '$6x + 15y$'],
          correctIndex: 2,
          explanation: '$-3 \\times 2x = -6x$、$-3 \\times (-5y) = +15y$。\n答え $-6x + 15y$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q12',
          question: '$(6x + 9y) \\div 3$ の計算結果は？',
          options: ['$6x + 3y$', '$2x + 3y$', '$2x + 9y$', '$3x + 3y$'],
          correctIndex: 1,
          explanation: '各項を $3$ で割る。$6x \\div 3 = 2x$、$9y \\div 3 = 3y$。\n答え $2x + 3y$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q13',
          question: '$(5x - 3y) + (2x + 7y)$ の計算結果は？',
          options: ['$3x + 4y$', '$7x + 4y$', '$7x - 10y$', '$3x - 10y$'],
          correctIndex: 1,
          explanation: '$x$: $5+2=7$、$y$: $-3+7=4$。\n答え $7x + 4y$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q14',
          question: '$(3a + 2b) - (5a - b)$ の計算結果は？',
          options: ['$8a + b$', '$-2a + b$', '$-2a - 3b$', '$-2a + 3b$'],
          correctIndex: 3,
          explanation: '符号反転: $3a + 2b - 5a + b = -2a + 3b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q15',
          question: '$4(x - 2y) - 3(x - 3y)$ の計算結果は？',
          options: ['$x - y$', '$x + 9y$', '$x + y$', '$x - 17y$'],
          correctIndex: 2,
          explanation: '$4x - 8y - 3x + 9y = x + y$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q16',
          question: '$(12a - 8b) \\div (-4)$ の計算結果は？',
          options: ['$3a - 2b$', '$-3a - 2b$', '$-3a + 2b$', '$3a + 2b$'],
          correctIndex: 2,
          explanation: '$12a \\div (-4) = -3a$、$-8b \\div (-4) = 2b$。\n答え $-3a + 2b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q17',
          question: '$\\dfrac{x + y}{2} + \\dfrac{x - y}{2}$ の計算結果は？',
          options: ['$x$', '$y$', '$\\dfrac{2x}{4}$', '$0$'],
          correctIndex: 0,
          explanation: '分母が同じなので分子を足す: $\\dfrac{(x+y)+(x-y)}{2} = \\dfrac{2x}{2} = x$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q18',
          question: '$2(a + 3b) + 3(2a - b)$ の計算結果は？',
          options: ['$4a + 9b$', '$8a + 9b$', '$4a + 3b$', '$8a + 3b$'],
          correctIndex: 3,
          explanation: '$2a + 6b + 6a - 3b = 8a + 3b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q19',
          question: '$(-2x + y) \\times (-5)$ の計算結果は？',
          options: ['$10x + 5y$', '$10x - 5y$', '$-10x + 5y$', '$-10x - 5y$'],
          correctIndex: 1,
          explanation: '$(-2x) \\times (-5) = 10x$、$y \\times (-5) = -5y$。\n答え $10x - 5y$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q20',
          question: '$x = -2, y = 3$ のとき $(4x - y) + (x + 3y)$ の値は？',
          options: ['$0$', '$-2$', '$2$', '$-4$'],
          correctIndex: 3,
          explanation: '式を整理: $4x - y + x + 3y = 5x + 2y$。\n$5(-2) + 2(3) = -10 + 6 = -4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q21',
          question: '$\\dfrac{2x - y}{3} - \\dfrac{x + y}{3}$ の計算結果は？',
          options: ['$\\dfrac{x - 2y}{3}$', '$\\dfrac{x}{3}$', '$\\dfrac{3x}{3}$', '$\\dfrac{x + 2y}{3}$'],
          correctIndex: 0,
          explanation: '分母同じ: $\\dfrac{(2x-y)-(x+y)}{3} = \\dfrac{x - 2y}{3}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q22',
          question: '$(15a - 10b + 5) \\div 5$ の計算結果は？',
          options: ['$3a - 10b + 5$', '$3a - 2b + 1$', '$15a - 2b + 1$', '$3a - 2b + 5$'],
          correctIndex: 1,
          explanation: '各項を $5$ で割る。\n答え $3a - 2b + 1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-poly-add-sub-q23',
          question: '$(x + y) \\div \\dfrac{1}{3}$ の計算結果は？',
          options: ['$\\dfrac{x+y}{3}$', '$3x + 3y$', '$\\dfrac{3}{x+y}$', '$x + 3y$'],
          correctIndex: 1,
          explanation: '$\\div \\dfrac{1}{3} = \\times 3$。$(x+y) \\times 3 = 3x + 3y$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-poly-add-sub-q24',
          question: '$-(4x - 3y + 2)$ を展開すると？',
          options: ['$-4x - 3y + 2$', '$4x - 3y + 2$', '$-4x + 3y - 2$', '$-4x + 3y + 2$'],
          correctIndex: 2,
          explanation: '全ての符号が変わる。\n答え $-4x + 3y - 2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-poly-add-sub-q25',
          question: '$5(a + b) - 2(3a + b)$ の計算結果は？',
          options: ['$-a + 3b$', '$11a + 3b$', '$-a - 3b$', '$a + 3b$'],
          correctIndex: 0,
          explanation: '$5a + 5b - 6a - 2b = -a + 3b$\nだよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-poly-add-sub-q26',
          question: '$\\dfrac{a + 2b}{4} + \\dfrac{3a - 2b}{4}$ の計算結果は？',
          options: ['$a$', '$\\dfrac{4a}{4}$', '$\\dfrac{a}{2}$', '$2a$'],
          correctIndex: 0,
          explanation: '$\\dfrac{(a+2b)+(3a-2b)}{4} = \\dfrac{4a}{4} = a$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-poly-add-sub-q27',
          question: '$3(-x + 2y) + 2(x - 3y)$ の計算結果は？',
          options: ['$x + 0$', '$-x + 0$', '$-x$', '$x$'],
          correctIndex: 2,
          explanation: '$-3x + 6y + 2x - 6y = -x$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-poly-add-sub-q28',
          question: '$(8x - 6y) \\div 2 + (x + y)$ の計算結果は？',
          options: ['$5x - 2y$', '$5x + 2y$', '$4x - 3y$', '$5x - 4y$'],
          correctIndex: 0,
          explanation: '$4x - 3y + x + y = 5x - 2y$ だよ。',
          difficulty: 'advanced',
        }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
          ],
          answer: '$1$',
        }
      ],
    },
    chatId: 'math-g2-poly-add-sub',
  },
};
