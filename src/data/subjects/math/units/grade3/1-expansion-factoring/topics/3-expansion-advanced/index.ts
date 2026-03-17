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
        id: 'math-g3-ea-fc1',
        front: '(3x+1)² の展開のコツは？',
        back: 'a=3x, b=1 とおいて公式2を使う\n\n(3x)² + 2×3x×1 + 1²\n= 9x² + 6x + 1',
      },
      {
        id: 'math-g3-ea-fc2',
        front: '(4x−1)² = ?',
        back: '16x² − 8x + 1\n\n(4x)²=16x², 2×4x×1=8x, 1²=1',
      },
      {
        id: 'math-g3-ea-fc3',
        front: '(5x−2y)² = ?',
        back: '25x² − 20xy + 4y²\n\n(5x)²=25x², 2×5x×2y=20xy, (2y)²=4y²',
      },
      {
        id: 'math-g3-ea-fc4',
        front: '(2a+7b)(2a−7b) = ?',
        back: '4a² − 49b²\n\n和と差の積: (2a)²−(7b)²',
      },
      {
        id: 'math-g3-ea-fc5',
        front: '(a−½b)² = ?',
        back: 'a² − ab + ¼b²\n\n2×a×½b = ab, (½b)² = ¼b²',
      },
      {
        id: 'math-g3-ea-fc6',
        front: '(3x)² はいくつ？',
        back: '9x²\n\n3²×x² = 9x²（3x² ではない！）',
      },
      {
        id: 'math-g3-ea-fc7',
        front: '公式の見分け方:\n(□+△)(□−△) の形は？',
        back: '公式4（和と差の積）を使う\n→ □² − △²',
      },
      {
        id: 'math-g3-ea-fc8',
        front: '公式の見分け方:\n(□+△)² の形は？',
        back: '公式2を使う\n→ □² + 2×□×△ + △²',
      },
      {
        id: 'math-g3-ea-fc9',
        front: '式を簡単にする手順は？',
        back: '①公式で展開\n②カッコを外す（符号注意）\n③同類項をまとめる',
      },
      {
        id: 'math-g3-ea-fc10',
        front: '−(x²−10x+25) のカッコを外すと？',
        back: '−x² + 10x − 25\n\nマイナスのカッコを外すと全項の符号が変わる',
      },
      {
        id: 'math-g3-ea-fc11',
        front: '(x+3)² − (x−3)² を\n簡単にすると？',
        back: '12x\n\n(x²+6x+9)−(x²−6x+9) = 12x',
      },
      {
        id: 'math-g3-ea-fc12',
        front: '(a+b)² − (a−b)² = ?',
        back: '4ab\n\n便利な公式として覚えておこう！',
      },
      {
        id: 'math-g3-ea-fc13',
        front: '式のおきかえ:\n(x+y+4)(x+y+3) のやり方は？',
        back: 'M = x+y とおく\n→ (M+4)(M+3) = M²+7M+12\n→ x²+2xy+y²+7x+7y+12',
      },
      {
        id: 'math-g3-ea-fc14',
        front: '式のおきかえ:\n(a+b−1)² のやり方は？',
        back: 'M = a+b とおく\n→ (M−1)² = M²−2M+1\n→ a²+2ab+b²−2a−2b+1',
      },
      {
        id: 'math-g3-ea-fc15',
        front: '式のおきかえ:\n(2x+y+1)(2x+y−1) = ?',
        back: 'M=2x+y とおく\n→ (M+1)(M−1) = M²−1\n→ 4x²+4xy+y²−1',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-ea-q1',
          question: '$(3x + 1)^2$ を展開すると？',
          options: [
            '$3x^2 + 6x + 1$',
            '$9x^2 + 3x + 1$',
            '$9x^2 + 6x + 1$',
            '$9x^2 + 6x + 2$',
          ],
          correctIndex: 2,
          explanation:
            '$a=3x$, $b=1$ とおいて公式2。$(3x)^2 + 2 \\times 3x \\times 1 + 1^2 = 9x^2 + 6x + 1$。',
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
            '和と差の積の公式で $(2a)^2 - (7b)^2 = 4a^2 - 49b^2$。',
        },
        {
          id: 'math-g3-ea-q4',
          question:
            '$(x - 2)^2 + x(x + 1)$ を展開して簡単にすると？',
          options: [
            '$2x^2 - 5x + 4$',
            '$2x^2 - 3x + 4$',
            '$x^2 - 3x + 4$',
            '$2x^2 + 3x + 4$',
          ],
          correctIndex: 1,
          explanation:
            '$(x-2)^2 = x^2-4x+4$、$x(x+1) = x^2+x$。合わせて $2x^2-3x+4$。',
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
        },
        {
          id: 'math-g3-ea-q6',
          question:
            '$(x + y + 4)(x + y + 3)$ を展開するとき、何を置き換えるとよいか？',
          options: [
            '$M = x + 4$ とおく',
            '$M = x + y$ とおく',
            '$M = y + 4$ とおく',
            '$M = x + 3$ とおく',
          ],
          correctIndex: 1,
          explanation:
            '$M = x+y$ とおくと $(M+4)(M+3)$ となり公式1が使える。',
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
