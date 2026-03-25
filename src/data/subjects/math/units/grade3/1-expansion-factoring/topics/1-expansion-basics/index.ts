import type { Topic } from '../../../../../../../../data/types';

export const expansionBasics: Topic = {
  id: 'math-g3-expansion-basics',
  eraId: 'math-g3-expansion-factoring',
  name: '式の展開の基本',
  subtitle: 'かっこを外して計算しよう',
  icon: '📖',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '多項式×単項式の展開（分配法則）',
          content:
            'かっこの外にある数を、かっこの中のすべての項にかけるのが「分配法則」だよ。a(b+c) = ab + ac のように、1つずつていねいにかけていこう。',
          keyPoints: [
            '分配法則: a(b+c) = ab + ac',
            '例: 3(x+2) = 3x + 6（3をxにも2にもかける）',
            '符号に注意: −2(x−3) = −2x + 6（マイナスどうしの計算に気をつけよう）',
          ],
        },
        {
          title: '多項式×多項式の展開',
          content:
            '(a+b)(c+d) のように、かっこ×かっこの展開は、前のかっこの各項を後ろのかっこ全体にかけるよ。全部で4つの項ができるね。',
          keyPoints: [
            '公式: (a+b)(c+d) = ac + ad + bc + bd',
            '前のかっこの a を後ろ全体にかけ、次に b を後ろ全体にかける',
            '同類項があればまとめて整理する',
          ],
        },
        {
          title: '多項式÷単項式',
          content:
            '多項式を単項式で割るときは、多項式の各項をそれぞれ単項式で割るよ。分数の形にして約分するとわかりやすいね。',
          keyPoints: [
            '(8x²+4x)÷2x → 8x²÷2x + 4x÷2x = 4x + 2',
            '各項ごとに割り算する（分配法則の逆）',
            '符号に注意: (6a²b−12ab²)÷(−3ab) = −2a+4b',
          ],
        },
        {
          title: '異なる文字同士のかっこ×かっこ',
          content:
            '(a+2)(b+5) のように異なる文字のかっこどうしの展開でも、やり方は同じ。前のかっこの各項を後ろのかっこ全体にかけて4つの積を作ろう。同類項がないときはそのまま4項の式になるよ。',
          keyPoints: [
            '(a+2)(b+5) = ab + 5a + 2b + 10',
            '異なる文字では同類項ができにくい → 4項のまま',
            '符号に注意: (a−4)(b+3) = ab + 3a − 4b − 12',
          ],
        },
        {
          title: '同類項のまとめ方のコツ',
          content:
            '展開した後、文字の部分が同じ項（同類項）をまとめよう。特に (x+a)(x+b) の形では、x²の項、xの項、定数項の3つにまとまるよ。',
          keyPoints: [
            '同類項 = 文字の部分がまったく同じ項（例: 3xと5x、2x²と−7x²）',
            '(x+2)(x+3) = x² + 3x + 2x + 6 → x² + 5x + 6',
            'コツ: 展開したら同じ文字の項を探してまとめる。まとめ忘れに注意！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-eb-fc4',
        front: '$ac + ad + bc + bd$', back: '$(a+b)(c+d)$ を展開すると？',
        hint: '前のかっこの各項を後ろ全体にかける',
        explanation: '全部で4つの積ができる。同類項があればまとめよう',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc5',
        front: '$3x + 12$', back: '$3(x+4)$ を展開すると？',
        hint: '3をxにも4にもかける',
        explanation: '分配法則で $3 \\times x + 3 \\times 4 = 3x + 12$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc6',
        front: '$-2x + 6$', back: '$-2(x-3)$ を展開すると？',
        hint: 'マイナス×マイナスはプラス',
        explanation: '$(-2)\\times x = -2x$、$(-2)\\times(-3) = +6$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc8',
        front: '$x^2 + 5x + 6$', back: '$(x+2)(x+3)$ を展開すると？',
        hint: '4つの積を作って同類項をまとめる',
        explanation: '$x^2+3x+2x+6 = x^2+5x+6$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc9',
        front: '$x^2 + x - 12$', back: '$(x-3)(x+4)$ を展開すると？',
        hint: 'マイナスの符号に注意',
        explanation: '$x^2+4x-3x-12 = x^2+x-12$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc10',
        front: '$8x + 4$', back: '$(8x^2+4x)\\div x$ の答えは？',
        hint: '各項をxで割る',
        explanation: '$8x^2 \\div x = 8x$、$4x \\div x = 4$ で $8x + 4$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc11',
        front: '$-15x^2 + 6x$', back: '$-3x(5x-2)$ を展開すると？',
        hint: '$(-3x)\\times(-2) = +6x$',
        explanation: 'マイナスどうしの積はプラスになることに注意',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc12',
        front: '$ab + 5a + 2b + 10$', back: '$(a+2)(b+5)$ を展開すると？',
        hint: '異なる文字では同類項ができにくい',
        explanation: '4つの積をそのまま書き並べる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-eb-fc13',
        front: '$-2a + 4b$', back: '$(6a^2b-12ab^2)\\div(-3ab)$ の答えは？',
        hint: '各項を $-3ab$ で割る。符号に注意',
        explanation: '$6a^2b \\div (-3ab) = -2a$、$-12ab^2 \\div (-3ab) = 4b$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc14',
        front: '$2x^2 + 7x + 3$', back: '$(2x+1)(x+3)$ を展開すると？',
        hint: '各項を順にかけて同類項をまとめる',
        explanation: '$2x^2+6x+x+3 = 2x^2+7x+3$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc15',
        front: '$x^2 + (a+b)x + ab$', back: '$(x+a)(x+b)$ を展開すると？',
        hint: 'xの係数は a+b、定数項は a×b',
        explanation: 'この規則を覚えると展開が速くなるよ',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc17',
        front: '$x^2 - 9$', back: '$(x+3)(x-3)$ を展開すると？',
        hint: '中間の項が打ち消し合う',
        explanation: '$x^2-3x+3x-9 = x^2-9$。これは「和と差の積」の公式につながるよ',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc18',
        front: '$-6xy - 10y^2$', back: '$(3x+5y)\\times(-2y)$ を展開すると？',
        hint: '両方の項に $-2y$ をかける',
        explanation: '$3x \\times (-2y) = -6xy$、$5y \\times (-2y) = -10y^2$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc20',
        front: '$x^2 - 8x + 12$', back: '$(x-2)(x-6)$ を展開すると？',
        hint: 'マイナス×マイナス = プラス（定数項が+12）',
        explanation: '$x^2-6x-2x+12 = x^2-8x+12$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc21',
        front: '$x^2 + 7x + 10$', back: '$(x+2)(x+5)$ を展開すると？',
        hint: '足して7、かけて10',
        explanation: '$x^2+5x+2x+10 = x^2+7x+10$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc22',
        front: '$6x^2 - 4x$', back: '$2x(3x-2)$ を展開すると？',
        hint: '$2x$ を各項にかける',
        explanation: '$2x \\times 3x = 6x^2$、$2x \\times (-2) = -4x$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-eb-fc23',
        front: '$x^2 - 2x - 15$', back: '$(x+3)(x-5)$ を展開すると？',
        hint: '$3 \\times (-5) = -15$',
        explanation: '$x^2-5x+3x-15 = x^2-2x-15$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-eb-fc24',
        front: '$4x + 2$', back: '$(12x^2+6x) \\div 3x$ の答えは？',
        hint: '各項を $3x$ で割る',
        explanation: '$12x^2 \\div 3x = 4x$、$6x \\div 3x = 2$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-eb-fc25',
        front: '$ab - 3a + 4b - 12$', back: '$(a+4)(b-3)$ を展開すると？',
        hint: '4つの積を順に出す',
        explanation: '$a \\times b + a \\times (-3) + 4 \\times b + 4 \\times (-3)$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-eb-fc26',
        front: '$8a^2+10ab-3b^2$', back: '$(2a+3b)(4a-b)$ を展開すると？',
        hint: '4つの項を順にかけて同類項をまとめる',
        explanation: '$8a^2-2ab+12ab-3b^2 = 8a^2+10ab-3b^2$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-eb-fc27',
        front: '$x^2 - 4x - 5$', back: '$(x+1)(x-5)$ を展開すると？',
        hint: '$1 \\times (-5) = -5$',
        explanation: '$x^2-5x+x-5 = x^2-4x-5$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-eb-fc28',
        front: '$-3a + 2b$', back: '$(9a^2b - 6ab^2) \\div (-3ab)$ の答えは？',
        hint: '各項を $-3ab$ で割る。符号注意',
        explanation: '$9a^2b \\div (-3ab) = -3a$、$-6ab^2 \\div (-3ab) = 2b$',
        difficulty: 'advanced',
      },
      { id: 'math-g3-eb-fc31', front: '$4$ 個（$ac, ad, bc, bd$）', back: '$(a+b)(c+d)$ を展開すると何個の項の積ができる？', explanation: '各項どうしをすべてかける。', difficulty: 'basic' },
      { id: 'math-g3-eb-fc32', front: '$3x + 12$', back: '$3(x + 4)$ を展開すると？', explanation: '$3 \\times x + 3 \\times 4$。', difficulty: 'basic' },
      { id: 'math-g3-eb-fc33', front: '$10x + 15$', back: '$5(2x + 3)$ を展開すると？', explanation: '$5 \\times 2x + 5 \\times 3$。', difficulty: 'basic' },
      { id: 'math-g3-eb-fc34', front: '$2x^2 + 6x$', back: '$2x(x + 3)$ を展開すると？', explanation: '$2x \\times x + 2x \\times 3$。', difficulty: 'basic' },
      { id: 'math-g3-eb-fc35', front: '$6a^2 + 15a$', back: '$3a(2a + 5)$ を展開すると？', explanation: '$3a \\times 2a + 3a \\times 5$。', difficulty: 'standard' },
      { id: 'math-g3-eb-fc36', front: '$-2x - 6$', back: '$-2(x + 3)$ を展開すると？', explanation: '$(-2) \\times x + (-2) \\times 3$。', difficulty: 'basic' },
      { id: 'math-g3-eb-fc37', front: '$-6x + 15$', back: '$-3(2x - 5)$ を展開すると？', explanation: '$(-3) \\times 2x + (-3) \\times (-5)$。', difficulty: 'basic' },
      { id: 'math-g3-eb-fc38', front: '$-x^2 + 4x$', back: '$-x(x - 4)$ を展開すると？', explanation: '$(-x) \\times x + (-x) \\times (-4)$。', difficulty: 'standard' },
      { id: 'math-g3-eb-fc39', front: '$-15x^2 + 6x$', back: '$-3x(5x - 2)$ を展開すると？', explanation: '$(-3x) \\times 5x + (-3x) \\times (-2)$。', difficulty: 'standard' },
      { id: 'math-g3-eb-fc40', front: '$-12a^2 - 8ab$', back: '$-4a(3a + 2b)$ を展開すると？', explanation: '$(-4a) \\times 3a + (-4a) \\times 2b$。', difficulty: 'standard' },
      { id: 'math-g3-eb-fc41', front: '$4x^2 - 20x$', back: '$4x(x - 5)$ を展開すると？', explanation: '$4x \\times x + 4x \\times (-5)$。', difficulty: 'standard' },
      { id: 'math-g3-eb-fc42', front: '$-5x^2 + 15x - 5$', back: '$-5(x^2 - 3x + 1)$ を展開すると？', explanation: '各項に $-5$ をかける。', difficulty: 'standard' },
      { id: 'math-g3-eb-fc43', front: '$6x^2 + 3x - 2$', back: '$(2x-1)(3x+2)$ を展開すると？', explanation: '$6x^2+4x-3x-2 = 6x^2+3x-2$。', difficulty: 'basic' },
      { id: 'math-g3-eb-fc44', front: '$-6xy - 10y^2$', back: '$(3x + 5y) \\times (-2y)$ を展開すると？', explanation: '$3x \\times (-2y) + 5y \\times (-2y)$。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-eb-q1',
          question: '$3(x + 4)$ を展開すると？',
          options: ['$3x + 4$', '$x + 12$', '$3x + 7$', '$3x + 12$'],
          correctIndex: 3,
          explanation:
            '$3(x + 4) = 3 \\times x + 3 \\times 4 = 3x + 12$\n分配法則で3をxにも4にもかけるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q2',
          question: '$(x + 2)(x + 3)$ を展開すると？',
          options: [
            '$x^2 + 6$',
            '$x^2 + 5x + 6$',
            '$x^2 + 5x + 5$',
            '$x^2 + 6x + 5$',
          ],
          correctIndex: 1,
          explanation:
            '$(x+2)(x+3) = x^2+3x+2x+6 = x^2+5x+6$\n4つの積を求めて同類項をまとめよう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q3',
          question: '$-2(3x - 5)$ を展開すると？',
          options: [
            '$-6x + 10$',
            '$-6x - 10$',
            '$6x - 10$',
            '$-6x - 5$',
          ],
          correctIndex: 0,
          explanation:
            '$-2(3x-5) = -2 \\times 3x + (-2) \\times (-5) = -6x + 10$\nマイナス×マイナスはプラスになるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q4',
          question: '$(8x^2 + 4x) \\div 2x$ を計算すると？',
          options: ['$4x + 4$', '$8x + 2$', '$4x^2 + 2$', '$4x + 2$'],
          correctIndex: 3,
          explanation:
            '$8x^2 \\div 2x = 4x$、$4x \\div 2x = 2$\n各項をそれぞれ $2x$ で割る。答えは $4x + 2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q5',
          question: '$-3x(5x - 2)$ を展開すると？',
          options: [
            '$-15x^2 + 6x$',
            '$-15x^2 - 6x$',
            '$15x^2 - 6x$',
            '$-15x^2 + 2$',
          ],
          correctIndex: 0,
          explanation:
            '$(-3x) \\times 5x = -15x^2$、$(-3x) \\times (-2) = +6x$\nマイナスどうしの積はプラスだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q6',
          question: '$(a + 2)(b + 5)$ を展開すると？',
          options: [
            '$ab + 10$',
            '$ab + 5a + 2b + 10$',
            '$ab + 2a + 5b + 10$',
            '$ab + 7ab + 10$',
          ],
          correctIndex: 1,
          explanation:
            '$a \\times b + a \\times 5 + 2 \\times b + 2 \\times 5 = ab + 5a + 2b + 10$\n異なる文字なので同類項はできないよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q7',
          question: '$(6a^2b - 12ab^2) \\div (-3ab)$ を計算すると？',
          options: [
            '$2a - 4b$',
            '$-2a - 4b$',
            '$2a + 4b$',
            '$-2a + 4b$',
          ],
          correctIndex: 3,
          explanation:
            '$6a^2b \\div (-3ab) = -2a$、$(-12ab^2) \\div (-3ab) = 4b$。答えは $-2a + 4b$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q8',
          question: '$(x - 3)(x + 7)$ を展開すると？',
          options: [
            '$x^2 + 4x + 21$',
            '$x^2 - 4x - 21$',
            '$x^2 + 10x - 21$',
            '$x^2 + 4x - 21$',
          ],
          correctIndex: 3,
          explanation:
            '$x^2 + 7x - 3x - 21 = x^2 + 4x - 21$\n$7x$ と $-3x$ をまとめると $4x$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q9',
          question: '$(x + 3)(x - 3)$ を展開すると？',
          options: [
            '$x^2 + 9$',
            '$x^2 - 6x + 9$',
            '$x^2 + 6x - 9$',
            '$x^2 - 9$',
          ],
          correctIndex: 3,
          explanation:
            '$x^2 - 3x + 3x - 9 = x^2 - 9$\n$-3x$ と $+3x$ が打ち消し合って消えるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q10',
          question: '「同類項」とは何か。正しいものを選べ。',
          options: [
            '文字の部分がまったく同じ項',
            '次数が同じ項',
            '係数が同じ項',
            '符号が同じ項',
          ],
          correctIndex: 0,
          explanation:
            '同類項は文字の部分がまったく同じ項のこと。\n例: $3x$ と $5x$、$2x^2$ と $-7x^2$ など。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-eb-q11',
          question: '$(x + 2)(x + 5)$ を展開すると？',
          options: [
            '$x^2 + 7x + 7$',
            '$x^2 + 10x + 7$',
            '$x^2 + 7x + 10$',
            '$x^2 + 3x + 10$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2+5x+2x+10 = x^2+7x+10$。足して7、かけて10だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q12',
          question: '$2x(3x - 2)$ を展開すると？',
          options: [
            '$6x^2 - 2x$',
            '$6x^2 - 4x$',
            '$6x - 4$',
            '$5x^2 - 4x$',
          ],
          correctIndex: 1,
          explanation:
            '$2x \\times 3x = 6x^2$、$2x \\times (-2) = -4x$。答えは $6x^2 - 4x$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q13',
          question: '$(x + 3)(x - 5)$ を展開すると？',
          options: [
            '$x^2 + 2x - 15$',
            '$x^2 - 2x + 15$',
            '$x^2 + 8x - 15$',
            '$x^2 - 2x - 15$',
          ],
          correctIndex: 3,
          explanation:
            '$x^2-5x+3x-15 = x^2-2x-15$。符号に注意だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q14',
          question: '$(12x^2 + 6x) \\div 3x$ を計算すると？',
          options: ['$4x + 6$', '$4x^2 + 2$', '$4x + 2$', '$4 + 2x$'],
          correctIndex: 2,
          explanation:
            '$12x^2 \\div 3x = 4x$、$6x \\div 3x = 2$。答えは $4x + 2$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q15',
          question: '$(a + 4)(b - 3)$ を展開すると？',
          options: [
            '$ab - 3a + 4b - 12$',
            '$ab + 4a - 3b - 12$',
            '$ab + a + b - 12$',
            '$ab - 12$',
          ],
          correctIndex: 0,
          explanation:
            '$a \\times b + a \\times (-3) + 4 \\times b + 4 \\times (-3) = ab - 3a + 4b - 12$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q16',
          question: '$(x + 1)(x - 5)$ を展開すると？',
          options: [
            '$x^2 - 4x + 5$',
            '$x^2 - 6x - 5$',
            '$x^2 - 4x - 5$',
            '$x^2 + 4x - 5$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2-5x+x-5 = x^2-4x-5$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q17',
          question: '$(9a^2b - 6ab^2) \\div (-3ab)$ を計算すると？',
          options: [
            '$3a - 2b$',
            '$-3a - 2b$',
            '$-3a + 2b$',
            '$3a + 2b$',
          ],
          correctIndex: 2,
          explanation:
            '$9a^2b \\div (-3ab) = -3a$、$(-6ab^2) \\div (-3ab) = 2b$。答えは $-3a + 2b$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q18',
          question: '$(x - 4)(x - 5)$ を展開すると？',
          options: [
            '$x^2 - 9x + 20$',
            '$x^2 + 9x + 20$',
            '$x^2 - x + 20$',
            '$x^2 - 9x - 20$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2-5x-4x+20 = x^2-9x+20$。マイナス×マイナス=プラスで定数項は+20。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q19',
          question: '展開で最も多い間違いはどれ？',
          options: [
            '足し算の計算ミス',
            '符号（プラス・マイナス）の間違い',
            '文字を書き忘れる',
            '次数を間違える',
          ],
          correctIndex: 1,
          explanation:
            '符号の間違いが最も多い。\n$(-2) \\times (-3) = +6$ を $-6$ としてしまうミスに注意！',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q20',
          question: '$5(2x - 3)$ を展開すると？',
          options: [
            '$10x - 15$',
            '$10x + 15$',
            '$10x - 3$',
            '$7x - 15$',
          ],
          correctIndex: 0,
          explanation:
            '$5 \\times 2x = 10x$、$5 \\times (-3) = -15$。答えは $10x - 15$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q21',
          question: '$(x + 6)(x - 2)$ を展開すると？',
          options: [
            '$x^2 + 4x + 12$',
            '$x^2 - 4x - 12$',
            '$x^2 + 4x - 12$',
            '$x^2 + 8x - 12$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2-2x+6x-12 = x^2+4x-12$。足して4、かけて-12。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q22',
          question: '$(x - 1)(x + 8)$ を展開すると？',
          options: [
            '$x^2 + 7x + 8$',
            '$x^2 + 7x - 8$',
            '$x^2 - 7x - 8$',
            '$x^2 + 9x - 8$',
          ],
          correctIndex: 1,
          explanation:
            '$x^2+8x-x-8 = x^2+7x-8$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-eb-q23',
          question: '$(2a + 3b)(4a - b)$ を展開すると？',
          options: [
            '$8a^2 + 10ab - 3b^2$',
            '$8a^2 - 10ab - 3b^2$',
            '$8a^2 + 10ab + 3b^2$',
            '$8a^2 + 14ab - 3b^2$',
          ],
          correctIndex: 0,
          explanation:
            '$8a^2-2ab+12ab-3b^2 = 8a^2+10ab-3b^2$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-eb-q24',
          question: '$(x + 4)(x + 4)$ を展開すると？',
          options: [
            '$x^2 + 16$',
            '$x^2 + 8x + 16$',
            '$x^2 + 4x + 16$',
            '$x^2 + 8x + 8$',
          ],
          correctIndex: 1,
          explanation:
            '$x^2+4x+4x+16 = x^2+8x+16$\n同じ式どうしの展開は $(x+4)^2$ と同じだよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-eb-q25',
          question: '$(15x^2y - 10xy^2) \\div 5xy$ を計算すると？',
          options: [
            '$3x + 2y$',
            '$3x - 2y$',
            '$3xy - 2$',
            '$3 - 2y$',
          ],
          correctIndex: 1,
          explanation:
            '$15x^2y \\div 5xy = 3x$、$(-10xy^2) \\div 5xy = -2y$。答えは $3x - 2y$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-eb-q26',
          question: '$(x + 5)(x - 5)$ を展開すると？',
          options: [
            '$x^2 - 10x + 25$',
            '$x^2 + 25$',
            '$x^2 - 25$',
            '$x^2 + 10x - 25$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2-5x+5x-25 = x^2-25$。$+5x$ と $-5x$ が打ち消し合うよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-eb-q27',
          question: '$(x - 7)(x + 2)$ を展開すると？',
          options: [
            '$x^2 - 5x + 14$',
            '$x^2 + 5x - 14$',
            '$x^2 - 5x - 14$',
            '$x^2 - 9x - 14$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2+2x-7x-14 = x^2-5x-14$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-eb-q28',
          question: '$-4(x^2 - 3x + 2)$ を展開すると？',
          options: [
            '$-4x^2 - 12x - 8$',
            '$-4x^2 - 12x + 8$',
            '$-4x^2 + 12x + 8$',
            '$-4x^2 + 12x - 8$',
          ],
          correctIndex: 3,
          explanation:
            '$(-4) \\times x^2 = -4x^2$、$(-4) \\times (-3x) = 12x$、$(-4) \\times 2 = -8$。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-eb-ex1',
          question: '次の式を展開しよう。\n$2(3x + 5)$',
          steps: [
            {
              title: 'Step 1: 分配法則を使おう',
              content:
                'かっこの外の $2$ を、かっこの中の $3x$ と $5$ にそれぞれかけるよ。',
              highlight: '$2 \\times 3x$ と $2 \\times 5$',
            },
            {
              title: 'Step 2: それぞれ計算する',
              content: '$2 \\times 3x = 6x$、$2 \\times 5 = 10$ だよ。',
              highlight: '$6x + 10$',
            },
          ],
          answer: '$6x + 10$',
        },
        {
          id: 'math-g3-eb-ex2',
          question: '次の式を展開しよう。\n$(x + 3)(x + 5)$',
          steps: [
            {
              title: 'Step 1: 前のかっこの $x$ を後ろ全体にかける',
              content:
                '$x \\times (x+5) = x^2 + 5x$。$x$ を $x$ にも $5$ にもかけるよ。',
              highlight: '$x^2 + 5x$',
            },
            {
              title: 'Step 2: 前のかっこの $3$ を後ろ全体にかける',
              content: '$3 \\times (x+5) = 3x + 15$。$3$ を $x$ にも $5$ にもかけるよ。',
              highlight: '$3x + 15$',
            },
            {
              title: 'Step 3: 全部足して同類項をまとめる',
              content:
                '$x^2 + 5x + 3x + 15 = x^2 + 8x + 15$。$5x$ と $3x$ をまとめたよ。',
              highlight: '$x^2 + 8x + 15$',
            },
          ],
          answer: '$x^2 + 8x + 15$',
        },
        {
          id: 'math-g3-eb-ex3',
          question: '次の式を展開しよう。\n$-3x(5x - 2)$',
          steps: [
            {
              title: 'Step 1: $-3x$ を $5x$ にかける',
              content:
                '$(-3x) \\times 5x = -15x^2$。係数: $-3 \\times 5 = -15$、文字: $x \\times x = x^2$。',
              highlight: '$-15x^2$',
            },
            {
              title: 'Step 2: $-3x$ を $-2$ にかける',
              content:
                '$(-3x) \\times (-2) = +6x$。マイナス×マイナス＝プラスに注意！',
              highlight: '$+6x$',
            },
            {
              title: 'Step 3: まとめる',
              content:
                '$-15x^2 + 6x$ が答え。同類項はないのでこれで完成！',
              highlight: '$-15x^2 + 6x$',
            },
          ],
          answer: '$-15x^2 + 6x$',
        },
        {
          id: 'math-g3-eb-ex4',
          question: '次の計算をしよう。\n$(6a^2b - 12ab^2) \\div (-3ab)$',
          steps: [
            {
              title: 'Step 1: 各項をそれぞれ $-3ab$ で割る',
              content:
                '多項式÷単項式は、各項ごとに割り算するよ。$6a^2b \\div (-3ab)$ と $(-12ab^2) \\div (-3ab)$ に分ける。',
              highlight: '$\\dfrac{6a^2b}{-3ab} + \\dfrac{-12ab^2}{-3ab}$',
            },
            {
              title: 'Step 2: 第1項を計算',
              content:
                '$6a^2b \\div (-3ab) = -2a$。係数: $6 \\div (-3) = -2$、文字: $a^2b \\div ab = a$。',
              highlight: '$-2a$',
            },
            {
              title: 'Step 3: 第2項を計算',
              content:
                '$(-12ab^2) \\div (-3ab) = 4b$。マイナス÷マイナス＝プラス。$ab^2 \\div ab = b$。',
              highlight: '$+4b$',
            },
          ],
          answer: '$-2a + 4b$',
        },
        {
          id: 'math-g3-eb-ex5',
          question: '次の式を展開しよう。\n$(a + 2)(b + 5)$',
          steps: [
            {
              title: 'Step 1: 前のかっこの $a$ を後ろ全体にかける',
              content:
                '$a \\times b + a \\times 5 = ab + 5a$。$a$ を $b$ にも $5$ にもかける。',
              highlight: '$ab + 5a$',
            },
            {
              title: 'Step 2: 前のかっこの $2$ を後ろ全体にかける',
              content:
                '$2 \\times b + 2 \\times 5 = 2b + 10$。$2$ を $b$ にも $5$ にもかける。',
              highlight: '$2b + 10$',
            },
            {
              title: 'Step 3: 全部まとめる',
              content:
                '$ab + 5a + 2b + 10$。異なる文字なので同類項はなく、4項のままが答えだよ。',
              highlight: '$ab + 5a + 2b + 10$',
            },
          ],
          answer: '$ab + 5a + 2b + 10$',
        },
      ],
    },
    chatId: 'math-g3-expansion-basics',
  },
};
