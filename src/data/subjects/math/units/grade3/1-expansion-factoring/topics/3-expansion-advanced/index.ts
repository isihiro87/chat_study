import type { Topic } from '../../../../../../../../data/types';

export const expansionAdvanced: Topic = {
  id: 'math-g3-expansion-advanced',
  eraId: 'math-g3-expansion-factoring',
  name: '展開の応用',
  subtitle: '置き換え・式を簡単にする・式のおきかえ',
  icon: '🚀',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '置き換えを使った展開',
          content:
            '(3x+1)² のように、a や b が数でないときは、かたまりを1つの文字に置き換えると公式が使いやすくなるよ。',
          keyPoints: [
            '(3x+1)² → a=3x, b=1 とおいて公式2: 9x²+6x+1',
            '(4x−1)² → a=4x, b=1 とおいて公式3: 16x²−8x+1',
            '(5x−2y)² → a=5x, b=2y: 25x²−20xy+4y²',
            '係数付きのときは (3x)²=9x² のように係数も2乗する！',
          ],
        },
        {
          title: '分数を含む展開',
          content:
            '分数が入っていても公式はそのまま使えるよ。2ab の計算を丁寧にしよう。',
          keyPoints: [
            '(a−½b)² = a²−ab+¼b²',
            '(x+⅓)(x+⅔) → 足して1、かけて2/9',
            '分数の2乗: (½b)² = ¼b²',
          ],
        },
        {
          title: '式を簡単にする',
          content:
            '公式で展開した後に同類項をまとめて式を簡単にする問題。手順は「展開→カッコを外す→同類項をまとめる」の3ステップ。',
          keyPoints: [
            '3(x+4)(x+2)−(x−5)² → 展開してまとめて 2x²+28x−1',
            '(x+3)²−(x−3)² = 12x（x²と定数が消える！）',
            'マイナスのカッコを外すとき符号が全部変わるのに注意',
          ],
        },
        {
          title: '式のおきかえ',
          content:
            '式の中に共通する部分があるとき、それをMに置き換えると公式が使えるよ。最後にMを元に戻すのを忘れずに。',
          keyPoints: [
            '(x+y+4)(x+y+3) → M=x+y → (M+4)(M+3)',
            '(a+b−1)² → M=a+b → (M−1)²',
            '(2x+y+1)(2x+y−1) → M=2x+y → M²−1',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-ea-fc2',
        front: '16x² − 8x + 1', back: '(4x−1)² = ?',
        explanation: '(4x)²=16x², 2×4x×1=8x, 1²=1',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc3',
        front: '25x² − 20xy + 4y²', back: '(5x−2y)² = ?',
        explanation: '(5x)²=25x², 2×5x×2y=20xy, (2y)²=4y²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc4',
        front: '4a² − 49b²', back: '(2a+7b)(2a−7b) = ?',
        explanation: '和と差の積: (2a)²−(7b)²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc5',
        front: 'a² − ab + ¼b²', back: '(a−½b)² = ?',
        explanation: '2×a×½b = ab, (½b)² = ¼b²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc6',
        front: '9x²', back: '(3x)² はいくつ？',
        explanation: '3²×x² = 9x²（3x² ではない！）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc10',
        front: '−x² + 10x − 25', back: '−(x²−10x+25) のカッコを外すと？',
        explanation: 'マイナスのカッコを外すと全項の符号が変わる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc11',
        front: '12x', back: '(x+3)² − (x−3)² を\n簡単にすると？',
        explanation: '(x²+6x+9)−(x²−6x+9) = 12x',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc12',
        front: '4ab', back: '(a+b)² − (a−b)² = ?',
        explanation: '便利な公式として覚えておこう！',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ea-fc15',
        front: 'M=2x+y とおく', back: '式のおきかえ:\n(2x+y+1)(2x+y−1) = ?',
        explanation: '(M+1)(M−1) = M²−1 → 4x²+4xy+y²−1',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ea-fc16',
        front: '9x² + 30xy + 25y²', back: '(3x+5y)² = ?',
        explanation: '(3x)²+2×3x×5y+(5y)²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ea-fc17',
        front: '4x² + 12x + 9', back: '(2x+3)² = ?',
        explanation: '(2x)²+2×2x×3+3²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ea-fc18',
        front: '2x+5', back: '(x+3)² − (x+2)² を簡単にすると？',
        explanation: '(x²+6x+9)−(x²+4x+4) = 2x+5',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ea-fc19',
        front: '2(a²+b²)', back: '(a+b)² + (a−b)² = ?',
        explanation: '(a²+2ab+b²)+(a²−2ab+b²) = 2a²+2b²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ea-fc21',
        front: '36a² − 49b²', back: '(6a+7b)(6a−7b) = ?',
        explanation: '(6a)²−(7b)²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ea-fc22',
        front: '9x²−24xy+16y²', back: '(3x−4y)² = ?',
        explanation: '(3x)²−2×3x×4y+(4y)²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ea-fc24',
        front: '2x²−3x+4', back: '(x−2)²+x(x+1) を簡単にすると？',
        explanation: '(x²−4x+4)+(x²+x) = 2x²−3x+4',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ea-fc25',
        front: 'x²+½x+1/16', back: '(x+¼)² = ?',
        explanation: '2×x×¼=½x, (¼)²=1/16',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ea-fc26',
        front: 'M=x−2y とおく', back: '(x−2y+3)(x−2y−3) = ?',
        explanation: '(M+3)(M−3) = M²−9 → x²−4xy+4y²−9',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ea-fc27',
        front: '16x²+8x+1', back: '(4x+1)² = ?',
        explanation: '(4x)²+2×4x×1+1²',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ea-fc28',
        front: '−1', back: '(x+3)(x+5) − (x+4)² を簡単にすると？',
        explanation: '(x²+8x+15)−(x²+8x+16) = −1',
        difficulty: 'advanced',
      },
      { id: 'math-g3-ea-fc29', front: '$9x^2 + 6x + 1$', back: '$(3x+1)^2$ を展開すると？', explanation: '$(3x)^2 + 2 \\cdot 3x \\cdot 1 + 1^2$。', difficulty: 'basic' },
      { id: 'math-g3-ea-fc30', front: '$16x^2 - 8x + 1$', back: '$(4x-1)^2$ を展開すると？', explanation: '$(4x)^2 - 2 \\cdot 4x \\cdot 1 + 1^2$。', difficulty: 'basic' },
      { id: 'math-g3-ea-fc31', front: '$9a^2 + 30a + 25$', back: '$(3a+5)^2$ を展開すると？', explanation: '$2 \\cdot 3a \\cdot 5 = 30a$。', difficulty: 'basic' },
      { id: 'math-g3-ea-fc32', front: '$36x^2 + 12xy + y^2$', back: '$(6x+y)^2$ を展開すると？', explanation: '$2 \\cdot 6x \\cdot y = 12xy$。', difficulty: 'standard' },
      { id: 'math-g3-ea-fc33', front: '$a^2 - 6ab + 9b^2$', back: '$(a-3b)^2$ を展開すると？', explanation: '$2 \\cdot a \\cdot 3b = 6ab$。', difficulty: 'standard' },
      { id: 'math-g3-ea-fc34', front: '$25x^2 - 20xy + 4y^2$', back: '$(5x-2y)^2$ を展開すると？', explanation: '$2 \\cdot 5x \\cdot 2y = 20xy$。', difficulty: 'standard' },
      { id: 'math-g3-ea-fc35', front: '$4a^2 - 49b^2$', back: '$(2a-7b)(2a+7b)$ を展開すると？', explanation: '$(2a)^2 - (7b)^2$。', difficulty: 'standard' },
      { id: 'math-g3-ea-fc36', front: '$9x^2 - 25y^2$', back: '$(3x+5y)(3x-5y)$ を展開すると？', explanation: '$(3x)^2 - (5y)^2$。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-ea-q1',
          question: '$(3x + 1)^2$ を展開すると？',
          options: [
            '$3x^2 + 6x + 1$',
            '$9x^2 + 3x + 1$',
            '$9x^2 + 6x + 2$',
            '$9x^2 + 6x + 1$',
          ],
          correctIndex: 3,
          explanation:
            '$a=3x$, $b=1$ とおいて公式2。\n$(3x)^2 + 2 \\times 3x \\times 1 + 1^2 = 9x^2 + 6x + 1$',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q2',
          question: '$(a - \\frac{1}{2}b)^2$ を展開すると？',
          options: [
            '$a^2 + ab + \\frac{1}{4}b^2$',
            '$a^2 - \\frac{1}{2}ab + \\frac{1}{4}b^2$',
            '$a^2 - ab + \\frac{1}{2}b^2$',
            '$a^2 - ab + \\frac{1}{4}b^2$',
          ],
          correctIndex: 3,
          explanation:
            '$2 \\times a \\times \\frac{1}{2}b = ab$、$(\\frac{1}{2}b)^2 = \\frac{1}{4}b^2$ だから $a^2 - ab + \\frac{1}{4}b^2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q3',
          question: '$(2a - 7b)(2a + 7b)$ を展開すると？',
          options: [
            '$4a^2 - 49b^2$',
            '$4a^2 + 49b^2$',
            '$2a^2 - 7b^2$',
            '$4a^2 - 14ab - 49b^2$',
          ],
          correctIndex: 0,
          explanation:
            '$(2a)^2 - (7b)^2 = 4a^2 - 49b^2$\n和と差の積の公式。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q4',
          question:
            '$(x - 2)^2 + x(x + 1)$ を展開して簡単にすると？',
          options: [
            '$2x^2 - 5x + 4$',
            '$2x^2 + 3x + 4$',
            '$x^2 - 3x + 4$',
            '$2x^2 - 3x + 4$',
          ],
          correctIndex: 3,
          explanation:
            '$(x-2)^2 = x^2-4x+4$、$x(x+1) = x^2+x$。合わせて $2x^2-3x+4$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q5',
          question: '$(x+5)(x+3) - (x+4)^2$ を簡単にすると？',
          options: [
            '$-x - 1$',
            '$x - 1$',
            '$-1$',
            '$2x^2 + 8x + 15$',
          ],
          correctIndex: 2,
          explanation:
            '$(x+5)(x+3) = x^2+8x+15$、$(x+4)^2 = x^2+8x+16$。引くと $15-16 = -1$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q6',
          question:
            '$(x + y + 4)(x + y + 3)$ を展開するとき、何を置き換えるとよいか？',
          options: [
            '$M = x + 4$ とおく',
            '$M = y + 4$ とおく',
            '$M = x + 3$ とおく',
            '$M = x + y$ とおく',
          ],
          correctIndex: 3,
          explanation:
            '$M = x+y$ とおくと $(M+4)(M+3)$ となる。\n公式1が使える。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q7',
          question: '$(4x - 1)^2$ を展開すると？',
          options: [
            '$16x^2 - 8x + 1$',
            '$4x^2 - 8x + 1$',
            '$16x^2 - 4x + 1$',
            '$16x^2 + 8x + 1$',
          ],
          correctIndex: 0,
          explanation:
            '$(4x)^2 = 16x^2$, $2 \\times 4x \\times 1 = 8x$, $1^2 = 1$。答えは $16x^2 - 8x + 1$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q8',
          question: '$(x-y+3)(x-y-5)$ を展開するとき、何を置き換える？',
          options: [
            '$M = x + 3$',
            '$M = x - 5$',
            '$M = y - 5$',
            '$M = x - y$',
          ],
          correctIndex: 3,
          explanation:
            '$M = x-y$ とおくと $(M+3)(M-5) = M^2-2M-15$ となり公式1が使える。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q9',
          question: '$(3x + 5y)^2$ を展開すると？',
          options: [
            '$9x^2 + 30xy + 25y^2$',
            '$9x^2 + 15xy + 25y^2$',
            '$3x^2 + 30xy + 5y^2$',
            '$9x^2 + 25y^2$',
          ],
          correctIndex: 0,
          explanation:
            '$(3x)^2 + 2 \\times 3x \\times 5y + (5y)^2 = 9x^2 + 30xy + 25y^2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q10',
          question: '$(2x + 3)^2$ を展開すると？',
          options: [
            '$4x^2 + 12x + 9$',
            '$4x^2 + 6x + 9$',
            '$2x^2 + 12x + 9$',
            '$4x^2 + 12x + 6$',
          ],
          correctIndex: 0,
          explanation:
            '$(2x)^2 + 2 \\times 2x \\times 3 + 3^2 = 4x^2 + 12x + 9$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ea-q11',
          question: '$(5x - 2y)^2$ を展開すると？',
          options: [
            '$25x^2 - 10xy + 4y^2$',
            '$25x^2 + 20xy + 4y^2$',
            '$5x^2 - 20xy + 4y^2$',
            '$25x^2 - 20xy + 4y^2$',
          ],
          correctIndex: 3,
          explanation:
            '$(5x)^2 - 2 \\times 5x \\times 2y + (2y)^2 = 25x^2 - 20xy + 4y^2$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q12',
          question: '$(6a + 7b)(6a - 7b)$ を展開すると？',
          options: [
            '$36a^2 - 49b^2$',
            '$36a^2 + 49b^2$',
            '$6a^2 - 7b^2$',
            '$36a^2 - 42ab - 49b^2$',
          ],
          correctIndex: 0,
          explanation:
            '$(6a)^2 - (7b)^2 = 36a^2 - 49b^2$。和と差の積。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q13',
          question: '$(x + 3)^2 - (x + 2)^2$ を簡単にすると？',
          options: [
            '$1$',
            '$2x + 1$',
            '$2x + 5$',
            '$5$',
          ],
          correctIndex: 2,
          explanation:
            '$(x^2+6x+9) - (x^2+4x+4) = 2x + 5$。$x^2$ が消えるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q14',
          question: '$(a + b)^2 + (a - b)^2$ を簡単にすると？',
          options: [
            '$2a^2$',
            '$2b^2$',
            '$2a^2 + 2b^2$',
            '$4ab$',
          ],
          correctIndex: 2,
          explanation:
            '$(a^2+2ab+b^2)+(a^2-2ab+b^2) = 2a^2+2b^2$。$2ab$ と $-2ab$ が打ち消し合う。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q15',
          question: '$(3x - 4y)^2$ を展開すると？',
          options: [
            '$9x^2 - 12xy + 16y^2$',
            '$9x^2 + 24xy + 16y^2$',
            '$9x^2 - 24xy - 16y^2$',
            '$9x^2 - 24xy + 16y^2$',
          ],
          correctIndex: 3,
          explanation:
            '$(3x)^2 - 2 \\times 3x \\times 4y + (4y)^2 = 9x^2 - 24xy + 16y^2$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q16',
          question: '$(x - 2)^2 + x(x + 1)$ を簡単にすると？',
          options: [
            '$2x^2 - 3x + 4$',
            '$2x^2 + 3x + 4$',
            '$x^2 - 3x + 4$',
            '$2x^2 - 5x + 4$',
          ],
          correctIndex: 0,
          explanation:
            '$(x^2-4x+4) + (x^2+x) = 2x^2 - 3x + 4$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q17',
          question: '$(x - 2y + 3)(x - 2y - 3)$ を展開するとき、何を置き換える？',
          options: [
            '$M = x + 3$',
            '$M = 2y - 3$',
            '$M = x - 2y$',
            '$M = x - 3$',
          ],
          correctIndex: 2,
          explanation:
            '$M = x-2y$ とおくと $(M+3)(M-3) = M^2-9$ となり和と差の積の公式が使える。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q18',
          question: '$(4x + 1)^2$ を展開すると？',
          options: [
            '$16x^2 + 4x + 1$',
            '$16x^2 + 8x + 1$',
            '$4x^2 + 8x + 1$',
            '$16x^2 + 1$',
          ],
          correctIndex: 1,
          explanation:
            '$(4x)^2 + 2 \\times 4x \\times 1 + 1^2 = 16x^2 + 8x + 1$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q19',
          question: '$(x + \\frac{1}{3})(x + \\frac{2}{3})$ を展開すると？',
          options: [
            '$x^2 + x + \\frac{2}{3}$',
            '$x^2 + x + \\frac{2}{9}$',
            '$x^2 + \\frac{1}{3}x + \\frac{2}{9}$',
            '$x^2 + \\frac{2}{3}x + \\frac{1}{3}$',
          ],
          correctIndex: 1,
          explanation:
            '足して $\\frac{1}{3}+\\frac{2}{3}=1$、かけて $\\frac{1}{3} \\times \\frac{2}{3}=\\frac{2}{9}$。$x^2+x+\\frac{2}{9}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q20',
          question: '$(3x)^2$ はいくつ？',
          options: [
            '$3x^2$',
            '$6x^2$',
            '$9x^2$',
            '$9x$',
          ],
          correctIndex: 2,
          explanation:
            '$(3x)^2 = 3^2 \\times x^2 = 9x^2$\n$3x^2$ としないように注意！',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q21',
          question: '$(x + a + b)(x + a - b)$ を展開するとき、何を $M$ とおく？',
          options: [
            '$M = x + b$',
            '$M = a + b$',
            '$M = x + a$',
            '$M = x - b$',
          ],
          correctIndex: 2,
          explanation:
            '$M = x+a$ とおくと $(M+b)(M-b) = M^2-b^2$ となる。\n和と差の積が使える。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q22',
          question: '$(x + 3)^2 − (x − 3)^2$ を簡単にすると？',
          options: [
            '$6x$',
            '$12x$',
            '$18$',
            '$0$',
          ],
          correctIndex: 1,
          explanation:
            '$(x^2+6x+9)-(x^2-6x+9) = 12x$\n$(a+b)^2-(a-b)^2 = 4ab$ で $4 \\times x \\times 3 = 12x$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ea-q23',
          question: '$2(x + 1)^2 - (x + 3)(x - 1)$ を簡単にすると？',
          options: [
            '$x^2 + 6x + 5$',
            '$x^2 + 2x + 5$',
            '$x^2 + 4x + 5$',
            '$x^2 + 2x - 1$',
          ],
          correctIndex: 0,
          explanation:
            '$2(x^2+2x+1) - (x^2+2x-3) = 2x^2+4x+2-x^2-2x+3 = x^2+2x+5$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ea-q24',
          question: '$(2a + 3b)^2$ を展開すると？',
          options: [
            '$4a^2 + 6ab + 9b^2$',
            '$4a^2 + 12ab + 9b^2$',
            '$2a^2 + 12ab + 9b^2$',
            '$4a^2 + 9b^2$',
          ],
          correctIndex: 1,
          explanation:
            '$(2a)^2 + 2 \\times 2a \\times 3b + (3b)^2 = 4a^2 + 12ab + 9b^2$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ea-q25',
          question: '$(x + y + 2)^2$ を展開するとき、$M = x + y$ とおくと？',
          options: [
            '$M^2 + 2$',
            '$M^2 + 4M + 4$',
            '$M^2 + 2M + 4$',
            '$M^2 + 4$',
          ],
          correctIndex: 1,
          explanation:
            '$(M+2)^2 = M^2 + 4M + 4$。これを元に戻すと $x^2+2xy+y^2+4x+4y+4$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ea-q26',
          question: '$(x + \\frac{1}{4})^2$ を展開すると？',
          options: [
            '$x^2 + \\frac{1}{4}x + \\frac{1}{16}$',
            '$x^2 + \\frac{1}{2}x + \\frac{1}{16}$',
            '$x^2 + \\frac{1}{2}x + \\frac{1}{4}$',
            '$x^2 + \\frac{1}{16}$',
          ],
          correctIndex: 1,
          explanation:
            '$2 \\times x \\times \\frac{1}{4} = \\frac{1}{2}x$、$(\\frac{1}{4})^2 = \\frac{1}{16}$。$x^2 + \\frac{1}{2}x + \\frac{1}{16}$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ea-q27',
          question: '$(5x + 1)(5x - 1)$ を展開すると？',
          options: [
            '$25x^2 + 1$',
            '$25x^2 - 1$',
            '$5x^2 - 1$',
            '$25x^2 - 10x - 1$',
          ],
          correctIndex: 1,
          explanation:
            '$(5x)^2 - 1^2 = 25x^2 - 1$。和と差の積。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ea-q28',
          question: '$-(x^2 - 10x + 25)$ のカッコを外すと？',
          options: [
            '$-x^2 - 10x + 25$',
            '$-x^2 + 10x + 25$',
            '$-x^2 + 10x - 25$',
            '$x^2 - 10x - 25$',
          ],
          correctIndex: 2,
          explanation:
            'マイナスのカッコを外すと全項の符号が変わる。\n$-x^2 + 10x - 25$',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-ea-ex1',
          question: '次の式を公式を使って展開しよう。\n$(4x - 1)^2$',
          steps: [
            {
              title: 'Step 1: どの公式を使う？',
              content:
                '$(a-b)^2$ の形。$a=4x$、$b=1$ とおいて公式3を使おう。',
              highlight: '$(a-b)^2 = a^2 - 2ab + b^2$',
            },
            {
              title: 'Step 2: 各項を計算',
              content:
                '$(4x)^2=16x^2$、$2 \\times 4x \\times 1=8x$、$1^2=1$。',
              highlight: '$16x^2 - 8x + 1$',
            },
            {
              title: 'Step 3: 注意ポイント',
              content:
                '$(4x)^2$ は $4^2 \\times x^2 = 16x^2$。$4x^2$ にしないように！',
            },
          ],
          answer: '$16x^2 - 8x + 1$',
        },
        {
          id: 'math-g3-ea-ex2',
          question:
            '次の式を公式を使って展開しよう。\n$(x - \\frac{1}{4})^2$',
          steps: [
            {
              title: 'Step 1: 公式3を使う',
              content:
                '$a=x$、$b=\\frac{1}{4}$ で $(a-b)^2 = a^2-2ab+b^2$。',
              highlight: '$(a-b)^2 = a^2 - 2ab + b^2$',
            },
            {
              title: 'Step 2: 各項を計算',
              content:
                '$x^2$、$2 \\times x \\times \\frac{1}{4}=\\frac{1}{2}x$、$(\\frac{1}{4})^2=\\frac{1}{16}$。',
              highlight: '$x^2 - \\frac{1}{2}x + \\frac{1}{16}$',
            },
          ],
          answer: '$x^2 - \\frac{1}{2}x + \\frac{1}{16}$',
        },
        {
          id: 'math-g3-ea-ex3',
          question:
            '次の式を展開して簡単にしよう。\n$3(x + 4)(x + 2) - (x - 5)^2$',
          steps: [
            {
              title: 'Step 1: それぞれ展開する',
              content:
                '$(x+4)(x+2) = x^2+6x+8$\n$(x-5)^2 = x^2-10x+25$',
              highlight: '$3(x^2+6x+8) - (x^2-10x+25)$',
            },
            {
              title: 'Step 2: カッコを外す',
              content:
                '$3x^2+18x+24-x^2+10x-25$',
              highlight: '符号に注意！',
            },
            {
              title: 'Step 3: 同類項をまとめる',
              content:
                '$3x^2-x^2=2x^2$、$18x+10x=28x$、$24-25=-1$',
              highlight: '$2x^2 + 28x - 1$',
            },
          ],
          answer: '$2x^2 + 28x - 1$',
        },
        {
          id: 'math-g3-ea-ex4',
          question:
            '次の式を展開しよう。\n$(x + y + 4)(x + y + 3)$',
          steps: [
            {
              title: 'Step 1: 共通部分を置き換える',
              content:
                '$M = x+y$ とおくと $(M+4)(M+3)$ になる。',
              highlight: '$M = x + y$',
            },
            {
              title: 'Step 2: 公式1で展開',
              content:
                '$(M+4)(M+3) = M^2 + 7M + 12$',
              highlight: '$M^2 + 7M + 12$',
            },
            {
              title: 'Step 3: M を元に戻す',
              content:
                '$(x+y)^2 + 7(x+y) + 12 = x^2+2xy+y^2+7x+7y+12$',
              highlight: '$x^2 + 2xy + y^2 + 7x + 7y + 12$',
            },
          ],
          answer: '$x^2 + 2xy + y^2 + 7x + 7y + 12$',
        },
      ],
    },
    chatId: 'math-g3-expansion-advanced',
  },
};
