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
        id: 'math-g3-eb-fc1',
        front: '「展開」とは？',
        back: 'かっこを外して、積の形の式をひとつの多項式に変形すること',
        hint: 'かっこを「開く」イメージ',
        explanation: '例: 3(x+2) = 3x+6、(x+1)(x+2) = x²+3x+2',
      },
      {
        id: 'math-g3-eb-fc2',
        front: '分配法則の公式は？',
        back: '$a(b+c) = ab + ac$',
        hint: '外の項を中の各項にかける',
        explanation: '逆向き ab+ac = a(b+c) は「共通因数でくくる」と言うよ',
      },
      {
        id: 'math-g3-eb-fc3',
        front: '「同類項」とは？',
        back: '文字の部分がまったく同じ項のこと',
        hint: '3x と 5x、2x² と −7x² など',
        explanation: '同類項は係数どうしを足し引きしてまとめることができる',
      },
      {
        id: 'math-g3-eb-fc4',
        front: '$(a+b)(c+d)$ を展開すると？',
        back: '$ac + ad + bc + bd$',
        hint: '前のかっこの各項を後ろ全体にかける',
        explanation: '全部で4つの積ができる。同類項があればまとめよう',
      },
      {
        id: 'math-g3-eb-fc5',
        front: '$3(x+4)$ を展開すると？',
        back: '$3x + 12$',
        hint: '3をxにも4にもかける',
      },
      {
        id: 'math-g3-eb-fc6',
        front: '$-2(x-3)$ を展開すると？',
        back: '$-2x + 6$',
        hint: 'マイナス×マイナスはプラス',
        explanation: '$(-2)\\times x = -2x$、$(-2)\\times(-3) = +6$',
      },
      {
        id: 'math-g3-eb-fc7',
        front: '多項式÷単項式のやり方は？',
        back: '多項式の各項をそれぞれ単項式で割る',
        hint: '分配法則の逆のイメージ',
        explanation: '$(8x^2+4x)\\div 2x = 4x+2$',
      },
      {
        id: 'math-g3-eb-fc8',
        front: '$(x+2)(x+3)$ を展開すると？',
        back: '$x^2 + 5x + 6$',
        hint: '4つの積を作って同類項をまとめる',
        explanation: '$x^2+3x+2x+6 = x^2+5x+6$',
      },
      {
        id: 'math-g3-eb-fc9',
        front: '$(x-3)(x+4)$ を展開すると？',
        back: '$x^2 + x - 12$',
        hint: 'マイナスの符号に注意',
        explanation: '$x^2+4x-3x-12 = x^2+x-12$',
      },
      {
        id: 'math-g3-eb-fc10',
        front: '$(8x^2+4x)\\div x$ の答えは？',
        back: '$8x + 4$',
        hint: '各項をxで割る',
      },
      {
        id: 'math-g3-eb-fc11',
        front: '$-3x(5x-2)$ を展開すると？',
        back: '$-15x^2 + 6x$',
        hint: '$(-3x)\\times(-2) = +6x$',
        explanation: 'マイナスどうしの積はプラスになることに注意',
      },
      {
        id: 'math-g3-eb-fc12',
        front: '$(a+2)(b+5)$ を展開すると？',
        back: '$ab + 5a + 2b + 10$',
        hint: '異なる文字では同類項ができにくい',
        explanation: '4つの積をそのまま書き並べる',
      },
      {
        id: 'math-g3-eb-fc13',
        front: '$(6a^2b-12ab^2)\\div(-3ab)$ の答えは？',
        back: '$-2a + 4b$',
        hint: '各項を $-3ab$ で割る。符号に注意',
      },
      {
        id: 'math-g3-eb-fc14',
        front: '展開で一番多いミスは？',
        back: '符号（プラス・マイナス）の間違い',
        hint: 'マイナス×マイナス=プラスを忘れがち',
        explanation: '$(-2)\\times(-3) = +6$ を $-6$ としてしまうミスが多い',
      },
      {
        id: 'math-g3-eb-fc15',
        front: '$(x+a)(x+b)$ を展開すると？',
        back: '$x^2 + (a+b)x + ab$',
        hint: 'xの係数は a+b、定数項は a×b',
        explanation: 'この規則を覚えると展開が速くなるよ',
      },
      {
        id: 'math-g3-eb-fc16',
        front: '同類項をまとめるとき、何を足し引きする？',
        back: '係数どうしを足し引きする（文字の部分はそのまま）',
        hint: '$3x + 5x = (3+5)x = 8x$',
      },
      {
        id: 'math-g3-eb-fc17',
        front: '$(x+3)(x-3)$ を展開すると？',
        back: '$x^2 - 9$',
        hint: '中間の項が打ち消し合う',
        explanation: '$x^2-3x+3x-9 = x^2-9$。これは「和と差の積」の公式につながるよ',
      },
      {
        id: 'math-g3-eb-fc18',
        front: '$(3x+5y)\\times(-2y)$ を展開すると？',
        back: '$-6xy - 10y^2$',
        hint: '両方の項に $-2y$ をかける',
      },
      {
        id: 'math-g3-eb-fc19',
        front: '「分配法則の逆」とは？',
        back: '共通因数でくくること（因数分解）',
        hint: '$ab + ac = a(b+c)$',
        explanation: '展開と因数分解は逆の操作の関係にある',
      },
      {
        id: 'math-g3-eb-fc20',
        front: '$(x-2)(x-6)$ を展開すると？',
        back: '$x^2 - 8x + 12$',
        hint: 'マイナス×マイナス = プラス（定数項が+12）',
        explanation: '$x^2-6x-2x+12 = x^2-8x+12$',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-eb-q1',
          question: '$3(x + 4)$ を展開すると？',
          options: ['$3x + 4$', '$x + 12$', '$3x + 12$', '$3x + 7$'],
          correctIndex: 2,
          explanation:
            '$3(x + 4) = 3 \\times x + 3 \\times 4 = 3x + 12$。分配法則で3をxにも4にもかけるよ。',
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
            '$(x+2)(x+3) = x^2+3x+2x+6 = x^2+5x+6$。4つの積を求めて同類項をまとめよう。',
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
            '$-2(3x-5) = -2 \\times 3x + (-2) \\times (-5) = -6x + 10$。マイナス×マイナスはプラスになるよ。',
        },
        {
          id: 'math-g3-eb-q4',
          question: '$(8x^2 + 4x) \\div 2x$ を計算すると？',
          options: ['$4x + 4$', '$8x + 2$', '$4x^2 + 2$', '$4x + 2$'],
          correctIndex: 3,
          explanation:
            '各項をそれぞれ $2x$ で割ります。$8x^2 \\div 2x = 4x$、$4x \\div 2x = 2$。答えは $4x + 2$。',
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
            '$(-3x) \\times 5x = -15x^2$、$(-3x) \\times (-2) = +6x$。マイナスどうしの積はプラスだよ。',
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
            '$a \\times b + a \\times 5 + 2 \\times b + 2 \\times 5 = ab + 5a + 2b + 10$。異なる文字なので同類項はできないよ。',
        },
        {
          id: 'math-g3-eb-q7',
          question: '$(6a^2b - 12ab^2) \\div (-3ab)$ を計算すると？',
          options: [
            '$2a - 4b$',
            '$-2a - 4b$',
            '$-2a + 4b$',
            '$2a + 4b$',
          ],
          correctIndex: 2,
          explanation:
            '$6a^2b \\div (-3ab) = -2a$、$(-12ab^2) \\div (-3ab) = 4b$。答えは $-2a + 4b$。',
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
            '$x^2 + 7x - 3x - 21 = x^2 + 4x - 21$。$7x$ と $-3x$ をまとめると $4x$。',
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
            '$x^2 - 3x + 3x - 9 = x^2 - 9$。$-3x$ と $+3x$ が打ち消し合って消えるよ。',
        },
        {
          id: 'math-g3-eb-q10',
          question: '「同類項」とは何か。正しいものを選べ。',
          options: [
            '係数が同じ項',
            '次数が同じ項',
            '文字の部分がまったく同じ項',
            '符号が同じ項',
          ],
          correctIndex: 2,
          explanation:
            '同類項は文字の部分がまったく同じ項のこと。例: $3x$ と $5x$、$2x^2$ と $-7x^2$ など。',
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
