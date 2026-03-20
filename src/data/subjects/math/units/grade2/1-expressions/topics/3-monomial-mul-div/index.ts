import type { Topic } from '../../../../../../../../data/types';

export const monomialMulDiv: Topic = {
  id: 'math-g2-mono-mul-div',
  eraId: 'math-g2-expressions',
  name: '単項式の乗法・除法',
  subtitle: '係数と文字を分けて計算',
  icon: '✖️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'かけ算（指数法則）',
          content:
            '単項式どうしのかけ算は、係数は係数どうし、文字は文字どうしをかけるよ。同じ文字が出てきたら指数を足すのがポイント！',
          keyPoints: [
            '係数どうしをかける（例: 3 × 5 = 15）',
            '同じ文字は指数を足す（例: $x^2 \\times x^3 = x^5$）',
            '例: $3x^2 \\times 5x^3 = 15x^5$'
          ],
        },
        {
          title: '単項式の累乗',
          content:
            '単項式の累乗は、係数も文字もまとめて累乗するよ。$(-a)^2$ と $-a^2$ の違いに注意しよう！',
          keyPoints: [
            '$(ab)^n = a^n b^n$（それぞれの因数を $n$ 乗する）',
            '$(-3x)^2 = (-3)^2 \\times x^2 = 9x^2$（偶数乗で正）',
            '$(-2a)^3 = (-2)^3 \\times a^3 = -8a^3$（奇数乗で負）',
            '$(-a)^2 = a^2$（正）と $-a^2 = -(a^2)$（負）は全く違う！'
          ],
        },
        {
          title: '割り算（分数にして約分）',
          content:
            '単項式の割り算は、分数の形にしてから係数と文字をそれぞれ約分するよ。同じ文字は指数を引くんだ。',
          keyPoints: [
            '割り算 → 分数の形にする（例: $6x^3 \\div 2x = \\frac{6x^3}{2x}$）',
            '係数を約分する（例: $\\frac{6}{2} = 3$）',
            '同じ文字は指数を引く（例: $\\frac{x^3}{x} = x^2$）'
          ],
        },
        {
          title: '分数係数の除法（逆数をかける）',
          content:
            '分数で割るときは、逆数をかけて計算するよ。特に分数係数の単項式で割るときにこのテクニックが必要になるんだ。',
          keyPoints: [
            '$a \\div \\frac{b}{c} = a \\times \\frac{c}{b}$（逆数をかける）',
            '例: $7ab \\div \\frac{1}{3}a = 7ab \\times \\frac{3}{a} = 21b$',
            '例: $-\\frac{5}{3}x^2 \\div \\frac{5}{9}x = -\\frac{5}{3}x^2 \\times \\frac{9}{5x} = -3x$'
          ],
        },
        {
          title: '3つの式の乗除',
          content:
            '3つ以上の式が混ざった計算は、全体を1つの分数にまとめてから約分するのがコツだよ。割り算の部分は分母に置くんだ。',
          keyPoints: [
            '$A \\times B \\div C = \\frac{A \\times B}{C}$ の形にまとめる',
            '$A \\div B \\div C = \\frac{A}{B \\times C}$ の形にまとめる',
            '例: $(-6xy) \\times 8x \\div (-2y) = \\frac{-48x^2y}{-2y} = 24x^2$'
          ],
        },
        {
          title: 'よくある間違いパターン',
          content:
            '単項式の乗除でよくある間違いをまとめたよ。テスト前に確認しよう！',
          keyPoints: [
            '❌ $x^2 \\times x^3 = x^6$ → ⭕ $x^5$（指数は足す、かけない）',
            '❌ $(-3a)^2 = -9a^2$ → ⭕ $9a^2$（偶数乗は正）',
            '❌ $12a^2b \\div 4ab = 3a^2$ → ⭕ $3a$（$a^2 \\div a = a$）'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-mmd-fc3',
        front: '$9x^2$', back: '$(-3x)^2$ はいくつ？',
        explanation: '偶数乗なので係数は正になる。$(-3)^2 = 9$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc4',
        front: '$-8a^3$', back: '$(-2a)^3$ はいくつ？',
        explanation: '奇数乗なので係数は負のまま。$(-2)^3 = -8$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc5',
        front: '$(-a)^2 = a^2$（正）、$-a^2 = -(a^2)$（負）', back: '$(-a)^2$ と $-a^2$ の違いは？',
        explanation: 'カッコの位置で符号が変わる！',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc6',
        front: '$a^{m+n}$（同じ底のかけ算は指数を足す）', back: '指数法則: $a^m \\times a^n = ?$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc7',
        front: '$a^{m-n}$（同じ底の割り算は指数を引く）', back: '指数法則: $a^m \\div a^n = ?$（$m > n$）',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc10',
        front: '$a^n b^n$（それぞれの因数を $n$ 乗する）', back: '$(ab)^n$ を展開すると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc11',
        front: '$x^6$ と答えてしまうこと', back: '$x^2 \\times x^3$ の計算でよくある間違いは？',
        explanation: '正しくは指数を足して $x^5$。指数をかけるのは $(x^2)^3 = x^6$ のとき',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc12',
        front: '$-25a^2$', back: '$-(-5a)^2$ の答えは？',
        explanation: 'まず $(-5a)^2 = 25a^2$（偶数乗で正）、次に前のマイナスをつけて $-25a^2$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-mmd-fc13',
        front: '$\\frac{A}{B \\times C}$', back: '$A \\div B \\div C$ を分数で表すと？',
        explanation: '割り算が連続するときは分母にまとめる',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-mmd-fc15',
        front: '$2y$', back: '$6xy \\div 3x$ の答えは？',
        explanation: '$\\frac{6xy}{3x} = 2y$。$x$ が約分されて $y$ だけ残る',
        difficulty: 'standard',
      },
      { id: 'math-g2-mmd-fc16', front: '$(a^m)^n = a^{mn}$', back: '指数法則: $(a^m)^n = ?$', explanation: '累乗の累乗は指数をかける', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc17', front: '$a^0 = 1$', back: '指数が $0$ のとき、$a^0$ は？', explanation: '$a \\neq 0$ のとき。$0$ 乗は必ず $1$', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc18', front: '$-30a^3b^2$', back: '$(-6a^2b) \\times (5ab)$ の計算は？', explanation: '係数: $(-6) \\times 5 = -30$、文字: $a^2 \\times a = a^3$、$b \\times b = b^2$', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc19', front: '$4x^2y$', back: '$12x^3y^2 \\div 3xy$ の計算は？', explanation: '$\\dfrac{12}{3} = 4$、$\\dfrac{x^3}{x} = x^2$、$\\dfrac{y^2}{y} = y$', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc20', front: '$16a^4$', back: '$(-2a)^4$ の計算は？', explanation: '$(-2)^4 \\times a^4 = 16a^4$。偶数乗で正', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc23', front: '$a^1 = a$', back: '$a^1$ はいくつ？', explanation: '指数 $1$ は書かないのが普通', difficulty: 'advanced' },
      { id: 'math-g2-mmd-fc24', front: '$-27x^3$', back: '$(-3x)^3$ の計算は？', explanation: '$(-3)^3 = -27$、$x^3$。奇数乗で負', difficulty: 'advanced' },
      { id: 'math-g2-mmd-fc25', front: '$9a$', back: '$6a \\div \\dfrac{2}{3}$ の計算は？', explanation: '分数で割る → 逆数をかける。$6a \\times \\dfrac{3}{2} = 9a$', difficulty: 'advanced' },
      { id: 'math-g2-mmd-fc26', front: '$\\dfrac{A \\times B}{C}$', back: '$A \\times B \\div C$ を分数で表すと？', explanation: 'かけ算→分子、わり算→分母に配置', difficulty: 'advanced' },
      { id: 'math-g2-mmd-fc27', front: '$(2a)^2 = 4a^2$ だが $2a^2 = 2 \\times a^2$', back: '$(2a)^2$ と $2a^2$ の違いは？', explanation: 'かっこの有無で意味が違う！', difficulty: 'advanced' },
      { id: 'math-g2-mmd-fc29', front: '$15xy$', back: '$5x \\times 3y$ を計算すると？', explanation: '係数: $5 \\times 3 = 15$、文字: $xy$。', difficulty: 'basic' },
      { id: 'math-g2-mmd-fc30', front: '$-42ab$', back: '$7a \\times (-6b)$ を計算すると？', explanation: '係数: $7 \\times (-6) = -42$、文字: $ab$。', difficulty: 'basic' },
      { id: 'math-g2-mmd-fc31', front: '$9b^2$', back: '$(-3b) \\times (-3b)$ を計算すると？', explanation: '係数: $(-3)^2 = 9$、文字: $b^2$。', difficulty: 'basic' },
      { id: 'math-g2-mmd-fc32', front: '$-20a^2$', back: '$4a \\times (-5a)$ を計算すると？', explanation: '係数: $4 \\times (-5) = -20$、文字: $a^2$。', difficulty: 'basic' },
      { id: 'math-g2-mmd-fc33', front: '$12a^2b$', back: '$3ab \\times 4a$ を計算すると？', explanation: '係数: $12$、文字: $a^2b$。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc34', front: '$49x^2$', back: '$(7x)^2$ を計算すると？', explanation: '$7^2 = 49$、$x^2$。', difficulty: 'basic' },
      { id: 'math-g2-mmd-fc35', front: '$81x^2$', back: '$(-9x)^2$ を計算すると？', explanation: '$(-9)^2 = 81$。偶数乗なので正。', difficulty: 'basic' },
      { id: 'math-g2-mmd-fc36', front: '$-64a^2$', back: '$-(8a)^2$ を計算すると？', explanation: '$(8a)^2 = 64a^2$ に $-$ をつける。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc37', front: '$-8a^3$', back: '$(-2a)^3$ を計算すると？', explanation: '$(-2)^3 = -8$。奇数乗で負。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc38', front: '$\\dfrac{2}{21}x^2$', back: '$\\dfrac{1}{3}x \\times \\dfrac{2}{7}x$ を計算すると？', explanation: '係数: $\\dfrac{1}{3} \\times \\dfrac{2}{7} = \\dfrac{2}{21}$。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc39', front: '$\\dfrac{3}{2}xy$', back: '$\\left(-\\dfrac{3}{8}x\\right) \\times (-4y)$ を計算すると？', explanation: '係数: $\\dfrac{3}{8} \\times 4 = \\dfrac{3}{2}$。同符号→正。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc40', front: '$-25a^2$', back: '$-(-5a)^2$ を計算すると？', explanation: '$(-5a)^2 = 25a^2$、前の $-$ で $-25a^2$。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc41', front: '$-10x^2y$', back: '$(-5xy) \\times 2x$ を計算すると？', explanation: '係数: $-10$、文字: $x^2y$。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc42', front: '$(2a)^2 = 4a^2$、$2a^2 = 2 \\times a^2$', back: '$(2a)^2$ と $2a^2$ の違いは？', explanation: 'かっこの有無で結果が異なる。', difficulty: 'advanced' },
      { id: 'math-g2-mmd-fc43', front: '指数を足す（$a^m \\times a^n = a^{m+n}$）', back: '同じ文字の累乗の乗法のルールは？', explanation: '例: $a^2 \\times a^3 = a^5$。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc44', front: '指数を引く（$a^m \\div a^n = a^{m-n}$）', back: '同じ文字の累乗の除法のルールは？', explanation: '例: $a^5 \\div a^2 = a^3$。', difficulty: 'standard' },
      { id: 'math-g2-mmd-fc45', front: '$2ab$', back: '$\\dfrac{10a^3b}{5a^2}$ を計算すると？', explanation: '係数: $\\dfrac{10}{5}=2$、文字: $a^{3-2}b = ab$。', difficulty: 'advanced' }
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-mono-mul-div-q1',
          question: '$4x^2 \\times 3x$ の計算結果は？',
          options: ['$7x^3$', '$12x^3$', '$12x^2$', '$7x^2$'],
          correctIndex: 1,
          explanation:
            '係数: $4 \\times 3 = 12$、文字: $x^2 \\times x = x^3$。\n答えは $12x^3$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mono-mul-div-q2',
          question: '$12a^3b \\div 4ab$ の計算結果は？',
          options: ['$8a^2$', '$3a^2b$', '$3ab$', '$3a^2$'],
          correctIndex: 3,
          explanation:
            '係数: $12 \\div 4 = 3$、文字: $\\frac{a^3}{a} = a^2$, $\\frac{b}{b} = 1$。\n答えは $3a^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mono-mul-div-q3',
          question: '$(-2x)^3$ の計算結果は？',
          options: ['$-6x^3$', '$8x^3$', '$-8x^3$', '$6x^3$'],
          correctIndex: 2,
          explanation:
            '$(-2)^3 = -8$、$x^3$ はそのまま。答えは $-8x^3$。\nマイナスの奇数乗はマイナスになるよ！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q4',
          question: '$(-9x)^2$ の計算結果は？',
          options: ['$81x^2$', '$-81x^2$', '$-18x^2$', '$18x^2$'],
          correctIndex: 0,
          explanation:
            '$(-9)^2 = 81$（偶数乗なので正になる）。\n答えは $81x^2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q5',
          question: '$-(-5a)^2$ の計算結果は？',
          options: ['$25a^2$', '$10a^2$', '$-25a^2$', '$-10a^2$'],
          correctIndex: 2,
          explanation:
            'まず $(-5a)^2 = 25a^2$（偶数乗で正）。\n前のマイナスをつけて $-25a^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q6',
          question: '$7ab \\div \\frac{1}{3}a$ の計算結果は？',
          options: ['$\\frac{7}{3}b$', '$21ab$', '$\\frac{7b}{3a}$', '$21b$'],
          correctIndex: 3,
          explanation:
            '分数で割る → 逆数をかける。\n$7ab \\times \\frac{3}{a} = 21b$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q7',
          question: '$(-6xy) \\times 8x \\div (-2y)$ の計算結果は？',
          options: ['$24x^2$', '$-24x^2$', '$-24xy$', '$24xy$'],
          correctIndex: 0,
          explanation:
            '$\\frac{(-6xy) \\times 8x}{-2y} = \\frac{-48x^2y}{-2y} = 24x^2$。\nマイナス÷マイナスで正になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q8',
          question: '$x^2 \\times x^3$ の正しい答えは？',
          options: ['$x^6$', '$x^5$', '$2x^5$', '$x^{23}$'],
          correctIndex: 1,
          explanation:
            '同じ底のかけ算は指数を足す！$x^{2+3} = x^5$。\n$x^6$ にするのはよくある間違いだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q9',
          question: '$15a^2b \\div 3a \\div (-5b)$ の計算結果は？',
          options: ['$a$', '$ab$', '$-a$', '$-ab$'],
          correctIndex: 2,
          explanation:
            '$\\frac{15a^2b}{3a \\times (-5b)} = \\frac{15a^2b}{-15ab} = -a$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q10',
          question: '$3a \\times (-4a)^2$ の計算結果は？',
          options: ['$-48a^3$', '$12a^2$', '$-12a^3$', '$48a^3$'],
          correctIndex: 3,
          explanation:
            'まず $(-4a)^2 = 16a^2$（偶数乗で正）。\n次に $3a \\times 16a^2 = 48a^3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-mmd-q11',
          question: '$(-2a)^4$ の計算結果は？',
          options: ['$-16a^4$', '$-8a^4$', '$16a^4$', '$8a^4$'],
          correctIndex: 2,
          explanation: '$(-2)^4 = 16$（偶数乗→正）。\n答え $16a^4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q12',
          question: '$6a^2b \\times (-3ab^2)$ の計算結果は？',
          options: ['$18a^3b^3$', '$-18a^2b^2$', '$-9a^3b^3$', '$-18a^3b^3$'],
          correctIndex: 3,
          explanation: '係数: $6 \\times (-3) = -18$。文字: $a^3b^3$。\n答え $-18a^3b^3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q13',
          question: '$20a^3b^2 \\div 5a^2b$ の計算結果は？',
          options: ['$4a^2b$', '$15ab$', '$4ab$', '$4a$'],
          correctIndex: 2,
          explanation: '係数: $20 \\div 5 = 4$。$a^3 \\div a^2 = a$、$b^2 \\div b = b$。\n答え $4ab$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q14',
          question: '$(3x^2)^2$ の計算結果は？',
          options: ['$6x^4$', '$9x^4$', '$9x^2$', '$3x^4$'],
          correctIndex: 1,
          explanation: '$3^2 = 9$、$(x^2)^2 = x^4$。答え $9x^4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q15',
          question: '$(-5x^2y) \\times 2xy^3$ の計算結果は？',
          options: ['$10x^3y^4$', '$-10x^2y^3$', '$-7x^3y^4$', '$-10x^3y^4$'],
          correctIndex: 3,
          explanation: '係数: $-5 \\times 2 = -10$。文字: $x^3y^4$。\n答え $-10x^3y^4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q16',
          question: '$18x^2y \\div (-6xy)$ の計算結果は？',
          options: ['$3x$', '$-3x$', '$-3xy$', '$3xy$'],
          correctIndex: 1,
          explanation: '係数: $18 \\div (-6) = -3$。$x^2 \\div x = x$、$y \\div y = 1$。\n答え $-3x$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q17',
          question: '$(-3a)^2 \\times 2a$ の計算結果は？',
          options: ['$-18a^3$', '$-6a^3$', '$18a^3$', '$12a^3$'],
          correctIndex: 2,
          explanation: '$(-3a)^2 = 9a^2$。\n$9a^2 \\times 2a = 18a^3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q18',
          question: '$8a^2b \\div 2a \\div 2b$ の計算結果は？',
          options: ['$2a$', '$2ab$', '$2$', '$2b$'],
          correctIndex: 0,
          explanation: '$\\dfrac{8a^2b}{2a \\times 2b} = \\dfrac{8a^2b}{4ab} = 2a$\n$b$ は約分で消えるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q19',
          question: '$4xy \\times (-3x)^2$ の計算結果は？',
          options: ['$-36x^3y$', '$36x^3y$', '$-12x^3y$', '$12x^3y$'],
          correctIndex: 1,
          explanation: '$(-3x)^2 = 9x^2$。$4xy \\times 9x^2 = 36x^3y$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q20',
          question: '$(-2x)^2 \\times (-x)^3$ の計算結果は？',
          options: ['$4x^5$', '$-4x^5$', '$-8x^5$', '$8x^5$'],
          correctIndex: 1,
          explanation: '$(-2x)^2 = 4x^2$、$(-x)^3 = -x^3$。\n$4x^2 \\times (-x^3) = -4x^5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q21',
          question: '$6ab \\div \\dfrac{2}{3}a$ の計算結果は？',
          options: ['$4b$', '$9b$', '$\\dfrac{4b}{a}$', '$\\dfrac{9b}{a}$'],
          correctIndex: 1,
          explanation: '$6ab \\times \\dfrac{3}{2a} = \\dfrac{18ab}{2a} = 9b$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q22',
          question: '$(xy)^3$ を展開すると？',
          options: ['$xy^3$', '$x^3y$', '$x^3y^3$', '$3xy$'],
          correctIndex: 2,
          explanation: '$(xy)^3 = x^3 \\times y^3 = x^3y^3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-mmd-q23',
          question: '$(-4ab)^2 \\div 8a^2b$ の計算結果は？',
          options: ['$2b$', '$-2b$', '$2ab$', '$-2ab$'],
          correctIndex: 0,
          explanation: '$(-4ab)^2 = 16a^2b^2$。\n$\\dfrac{16a^2b^2}{8a^2b} = 2b$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mmd-q24',
          question: '$2x^3 \\times 3x^2$ の計算結果は？',
          options: ['$6x^6$', '$5x^5$', '$6x^3$', '$6x^5$'],
          correctIndex: 3,
          explanation: '係数: $2 \\times 3 = 6$。指数を足す: $x^{3+2} = x^5$。\n答え $6x^5$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mmd-q25',
          question: '$\\dfrac{(-3a)^2 \\times 2b}{6ab}$ の計算結果は？',
          options: ['$3a$', '$-3a$', '$3b$', '$-3b$'],
          correctIndex: 0,
          explanation: '$(-3a)^2 = 9a^2$。\n$\\dfrac{9a^2 \\times 2b}{6ab} = \\dfrac{18a^2b}{6ab} = 3a$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mmd-q26',
          question: '$(2ab)^2 \\div (2a)^2$ の計算結果は？',
          options: ['$b^2$', '$a^2b^2$', '$4b^2$', '$b$'],
          correctIndex: 0,
          explanation: '$(2ab)^2 = 4a^2b^2$、$(2a)^2 = 4a^2$。$\\dfrac{4a^2b^2}{4a^2} = b^2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mmd-q27',
          question: '$(-x)^4 \\times x^2$ の計算結果は？',
          options: ['$x^6$', '$-x^6$', '$x^8$', '$-x^8$'],
          correctIndex: 0,
          explanation: '$(-x)^4 = x^4$（偶数乗→正）。\n$x^4 \\times x^2 = x^6$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-mmd-q28',
          question: '$10a^2b^3 \\div (-5ab) \\times 3a$ の計算結果は？',
          options: ['$6a^2b^2$', '$-6a^2b^2$', '$6ab^2$', '$-6ab^2$'],
          correctIndex: 1,
          explanation: '$\\dfrac{10a^2b^3 \\times 3a}{-5ab} = \\dfrac{30a^3b^3}{-5ab}$\n$= -6a^2b^2$ だよ。',
          difficulty: 'advanced',
        }
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-mono-mul-div-ex1',
          question: '次の計算をしよう。\n$3a^2b \\times (-2ab^2)$',
          steps: [
            {
              title: 'Step 1: 係数をかけよう',
              content:
                '係数は $3 \\times (-2) = -6$ だね。',
              highlight: '係数: $3 \\times (-2) = -6$',
            },
            {
              title: 'Step 2: 文字をかけよう',
              content:
                '$a$ の部分: $a^2 \\times a = a^3$\n$b$ の部分: $b \\times b^2 = b^3$',
              highlight: '$a^2 \\times a = a^3$, $b \\times b^2 = b^3$',
            },
            {
              title: 'Step 3: 合わせて完成',
              content: '係数と文字を合わせると $-6a^3b^3$ になるよ。',
              highlight: '$-6a^3b^3$',
            }
          ],
          answer: '$-6a^3b^3$',
        },
        {
          id: 'math-g2-mono-mul-div-ex2',
          question: '次の計算をしよう。\n$8x^4y^2 \\div 2x^2y$',
          steps: [
            {
              title: 'Step 1: 分数にしよう',
              content:
                '割り算を分数にすると $\\frac{8x^4y^2}{2x^2y}$ になるよ。',
              highlight: '$\\frac{8x^4y^2}{2x^2y}$',
            },
            {
              title: 'Step 2: 係数と文字をそれぞれ約分',
              content:
                '係数: $8 \\div 2 = 4$\n$x$ の部分: $x^4 \\div x^2 = x^2$（指数を引く: $4 - 2 = 2$）\n$y$ の部分: $y^2 \\div y = y$（指数を引く: $2 - 1 = 1$）',
              highlight: '$4x^2y$',
            }
          ],
          answer: '$4x^2y$',
        },
        {
          id: 'math-g2-mmd-ex3',
          question: '次の計算をしよう。\n$(-3x)^2 \\times (-8x)$',
          steps: [
            {
              title: 'Step 1: 累乗を計算しよう',
              content:
                '$(-3x)^2$ を計算するよ。\n$(-3)^2 = 9$（偶数乗で正）、$x^2$ はそのまま。\nだから $(-3x)^2 = 9x^2$。',
              highlight: '$(-3x)^2 = 9x^2$',
            },
            {
              title: 'Step 2: かけ算をしよう',
              content:
                '$9x^2 \\times (-8x)$ を計算するよ。\n係数: $9 \\times (-8) = -72$\n文字: $x^2 \\times x = x^3$',
              highlight: '$9x^2 \\times (-8x) = -72x^3$',
            }
          ],
          answer: '$-72x^3$',
        },
        {
          id: 'math-g2-mmd-ex4',
          question: '次の計算をしよう。\n$20x^2 \\div \\left(-\\frac{4}{3}x\\right)$',
          steps: [
            {
              title: 'Step 1: 逆数をかける形に変えよう',
              content:
                '分数で割る → 逆数をかける！\n$20x^2 \\div \\left(-\\frac{4}{3}x\\right) = 20x^2 \\times \\left(-\\frac{3}{4x}\\right)$',
              highlight: '$20x^2 \\times \\left(-\\frac{3}{4x}\\right)$',
            },
            {
              title: 'Step 2: かけ算をしよう',
              content:
                '係数: $20 \\times \\left(-\\frac{3}{4}\\right) = -15$\n文字: $x^2 \\div x = x$',
              highlight: '係数: $-15$、文字: $x$',
            },
            {
              title: 'Step 3: 答えを書こう',
              content: '合わせて $-15x$ が答えだよ。',
              highlight: '$-15x$',
            }
          ],
          answer: '$-15x$',
        },
        {
          id: 'math-g2-mmd-ex5',
          question: '次の計算をしよう。\n$(-6xy) \\times 8x \\div (-2y)$',
          steps: [
            {
              title: 'Step 1: 1つの分数にまとめよう',
              content:
                'かけ算は分子、割り算は分母に置くよ。\n$\\frac{(-6xy) \\times 8x}{-2y}$',
              highlight: '$\\frac{(-6xy) \\times 8x}{-2y}$',
            },
            {
              title: 'Step 2: 分子を計算しよう',
              content:
                '$(-6xy) \\times 8x = -48x^2y$\n係数: $(-6) \\times 8 = -48$\n文字: $xy \\times x = x^2y$',
              highlight: '分子: $-48x^2y$',
            },
            {
              title: 'Step 3: 約分しよう',
              content:
                '$\\frac{-48x^2y}{-2y} = 24x^2$\n係数: $-48 \\div (-2) = 24$\n文字: $y$ が約分されて $x^2$ だけ残るよ。',
              highlight: '$24x^2$',
            }
          ],
          answer: '$24x^2$',
        },
        {
          id: 'math-g2-mmd-ex6',
          question: '次の計算をしよう。\n$10a^2b \\times \\left(-\\frac{1}{2}b\\right) \\div (-3ab)$',
          steps: [
            {
              title: 'Step 1: 1つの分数にまとめよう',
              content:
                '$\\frac{10a^2b \\times \\left(-\\frac{1}{2}b\\right)}{-3ab}$',
              highlight: '$\\frac{10a^2b \\times \\left(-\\frac{1}{2}b\\right)}{-3ab}$',
            },
            {
              title: 'Step 2: 分子を計算しよう',
              content:
                '$10a^2b \\times \\left(-\\frac{1}{2}b\\right) = -5a^2b^2$\n係数: $10 \\times \\left(-\\frac{1}{2}\\right) = -5$\n文字: $a^2b \\times b = a^2b^2$',
              highlight: '分子: $-5a^2b^2$',
            },
            {
              title: 'Step 3: 約分しよう',
              content:
                '$\\frac{-5a^2b^2}{-3ab} = \\frac{5}{3}ab$\n係数: $-5 \\div (-3) = \\frac{5}{3}$\n文字: $a^2 \\div a = a$, $b^2 \\div b = b$',
              highlight: '$\\frac{5}{3}ab$',
            }
          ],
          answer: '$\\frac{5}{3}ab$',
        }
      ],
    },
    chatId: 'math-g2-mono-mul-div',
  },
};
