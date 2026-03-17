import type { Topic } from '../../../../../../../../data/types';

export const expansionFormulas: Topic = {
  id: 'math-g3-expansion-formulas',
  eraId: 'math-g3-expansion-factoring',
  name: '乗法の公式',
  subtitle: '4つの公式で展開を速く',
  icon: '⚡',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '公式1: (x+a)(x+b) の展開',
          content:
            'x が共通のときに使える公式だよ。かけて ab、足して (a+b) のパターンを覚えよう。',
          keyPoints: [
            '(x+a)(x+b) = x² + (a+b)x + ab',
            '例: (x+3)(x+5) = x² + 8x + 15（足して8、かけて15）',
            'x の係数 = a+b、定数項 = a×b と覚えよう',
          ],
        },
        {
          title: '公式2・3: 和と差の2乗',
          content:
            '(a+b)² と (a−b)² は、真ん中の項が 2ab になるのがポイント。面積図で考えるとわかりやすいよ。',
          image: {
            src: '/images/math/grade3/expansion-area.svg',
            alt: '(a+b)²の面積図',
            caption: '面積図で公式を理解しよう',
          },
          keyPoints: [
            '(a+b)² = a² + 2ab + b²（プラスの2乗）',
            '(a−b)² = a² − 2ab + b²（マイナスの2乗）',
            '真ん中の項は常に 2ab。符号だけ違う！',
          ],
        },
        {
          title: '公式4: 和と差の積',
          content:
            '(a+b)(a−b) は特別な形。真ん中の項が消えてシンプルな結果になるよ。',
          keyPoints: [
            '(a+b)(a−b) = a² − b²',
            '+ab と −ab が打ち消し合って消える！',
            '例: (x+3)(x−3) = x² − 9',
          ],
        },


      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-ef-fc1',
        front: '公式1: (x+a)(x+b) = ?',
        back: 'x² + (a+b)x + ab\n\n「足して○、かけて△」',
      },
      {
        id: 'math-g3-ef-fc2',
        front: '公式2: (a+b)² = ?',
        back: 'a² + 2ab + b²\n\n真ん中は 2ab（2倍を忘れずに！）',
      },
      {
        id: 'math-g3-ef-fc3',
        front: '公式3: (a−b)² = ?',
        back: 'a² − 2ab + b²\n\n最後の b² はプラス！',
      },
      {
        id: 'math-g3-ef-fc4',
        front: '公式4: (a+b)(a−b) = ?',
        back: 'a² − b²\n\n真ん中の項が消える（和と差の積）',
      },
      {
        id: 'math-g3-ef-fc5',
        front: '(x+3)(x+5) = ?',
        back: 'x² + 8x + 15\n\n足して 3+5=8、かけて 3×5=15',
      },
      {
        id: 'math-g3-ef-fc6',
        front: '(x+7)(x−3) = ?',
        back: 'x² + 4x − 21\n\n足して 7+(−3)=4、かけて 7×(−3)=−21',
      },
      {
        id: 'math-g3-ef-fc7',
        front: '(x+4)² = ?',
        back: 'x² + 8x + 16\n\n2×x×4 = 8x を忘れずに！',
      },
      {
        id: 'math-g3-ef-fc8',
        front: '(x−5)² = ?',
        back: 'x² − 10x + 25\n\n最後は (+25)。(−5)² = 25',
      },
      {
        id: 'math-g3-ef-fc9',
        front: '(x+6)(x−6) = ?',
        back: 'x² − 36\n\n和と差の積で真ん中が消える',
      },
      {
        id: 'math-g3-ef-fc10',
        front: '(a+b)² = a² + b² は正しい？',
        back: '正しくない！\n\n正しくは a² + 2ab + b²\n2ab を忘れるのが一番多いミス！',
      },
      {
        id: 'math-g3-ef-fc11',
        front: '(a−b)² と (a+b)(a−b) の違いは？',
        back: '(a−b)² = a² − 2ab + b²\n(a+b)(a−b) = a² − b²\n\n混同注意！形をよく見よう',
      },
      {
        id: 'math-g3-ef-fc12',
        front: '(x−4)(x+9) = ?',
        back: 'x² + 5x − 36\n\n足して −4+9=5、かけて −4×9=−36',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-expansion-formulas-q1',
          question: '$(x + 4)^2$ を展開すると？',
          options: [
            '$x^2 + 8x + 16$',
            '$x^2 + 4x + 16$',
            '$x^2 + 16$',
            '$x^2 + 8x + 8$',
          ],
          correctIndex: 0,
          explanation:
            '$(x+4)^2 = x^2 + 2 \\times x \\times 4 + 4^2 = x^2 + 8x + 16$。真ん中の項は $2 \\times 4 = 8$ だよ。',
        },
        {
          id: 'math-g3-expansion-formulas-q2',
          question: '$(x + 6)(x - 6)$ を展開すると？',
          options: [
            '$x^2 - 12x - 36$',
            '$x^2 + 36$',
            '$x^2 - 36$',
            '$x^2 - 12x + 36$',
          ],
          correctIndex: 2,
          explanation:
            '$(x+6)(x-6) = x^2 - 6^2 = x^2 - 36$。和と差の積は $a^2 - b^2$ になるよ。',
        },
        {
          id: 'math-g3-expansion-formulas-q3',
          question: '$(x - 3)^2$ を展開すると？',
          options: [
            '$x^2 + 6x + 9$',
            '$x^2 - 6x + 9$',
            '$x^2 - 6x - 9$',
            '$x^2 - 9$',
          ],
          correctIndex: 1,
          explanation:
            '$(x-3)^2 = x^2 - 2 \\times x \\times 3 + 3^2 = x^2 - 6x + 9$。マイナスの2乗は真ん中が−、最後が+だよ。',
        },
        {
          id: 'math-g3-expansion-formulas-q4',
          question: '$(x + 7)(x - 3)$ を展開すると？',
          options: [
            '$x^2 + 10x - 21$',
            '$x^2 + 4x + 21$',
            '$x^2 - 4x - 21$',
            '$x^2 + 4x - 21$',
          ],
          correctIndex: 3,
          explanation:
            '公式1で $a=7$, $b=-3$。足して $7+(-3)=4$、かけて $7 \\times (-3)=-21$ だから $x^2+4x-21$。',
        },
        {
          id: 'math-g3-expansion-formulas-q5',
          question: '$(a + b)^2 = a^2 + b^2$ は正しいか？',
          options: [
            '正しい',
            '正しくない。正しくは $a^2 + ab + b^2$',
            '正しくない。正しくは $a^2 + 2ab + b^2$',
            '正しくない。正しくは $a^2 - b^2$',
          ],
          correctIndex: 2,
          explanation:
            '$(a+b)^2 = a^2 + 2ab + b^2$ が正しい。$2ab$ の項を忘れるのが最も多い間違い！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-expansion-formulas-ex1',
          question: '次の式を公式を使って展開しよう。\n$(x + 5)^2$',
          steps: [
            {
              title: 'Step 1: どの公式を使う？',
              content:
                '$(a+b)^2$ の形だね。$a=x$、$b=5$ で公式 $(a+b)^2 = a^2+2ab+b^2$ を使うよ。',
              highlight: '$(a+b)^2 = a^2 + 2ab + b^2$',
            },
            {
              title: 'Step 2: 公式に当てはめる',
              content:
                '$a^2=x^2$、$2ab=2 \\times x \\times 5=10x$、$b^2=5^2=25$。全部足し合わせよう。',
              highlight: '$x^2 + 10x + 25$',
            },
          ],
          answer: '$x^2 + 10x + 25$',
        },
        {
          id: 'math-g3-expansion-formulas-ex2',
          question: '次の式を公式を使って展開しよう。\n$(3x + 2)(3x - 2)$',
          steps: [
            {
              title: 'Step 1: どの公式を使う？',
              content:
                '$(a+b)(a-b)$ の形だね。$a=3x$、$b=2$ で公式 $(a+b)(a-b)=a^2-b^2$ を使うよ。',
              highlight: '$(a+b)(a-b) = a^2 - b^2$',
            },
            {
              title: 'Step 2: 公式に当てはめる',
              content: '$a^2=(3x)^2=9x^2$、$b^2=2^2=4$。引き算するだけ！',
              highlight: '$9x^2 - 4$',
            },
          ],
          answer: '$9x^2 - 4$',
        },


      ],
    },
    chatId: 'math-g3-expansion-formulas',
  },
};
