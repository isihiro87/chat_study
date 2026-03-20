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
        front: 'x² + (a+b)x + ab', back: '公式1: (x+a)(x+b) = ?',
        explanation: '「足して○、かけて△」',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc2',
        front: 'a² + 2ab + b²', back: '公式2: (a+b)² = ?',
        explanation: '真ん中は 2ab（2倍を忘れずに！）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc3',
        front: 'a² − 2ab + b²', back: '公式3: (a−b)² = ?',
        explanation: '最後の b² はプラス！',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc4',
        front: 'a² − b²', back: '公式4: (a+b)(a−b) = ?',
        explanation: '真ん中の項が消える（和と差の積）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc5',
        front: 'x² + 8x + 15', back: '(x+3)(x+5) = ?',
        explanation: '足して 3+5=8、かけて 3×5=15',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc6',
        front: 'x² + 4x − 21', back: '(x+7)(x−3) = ?',
        explanation: '足して 7+(−3)=4、かけて 7×(−3)=−21',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc7',
        front: 'x² + 8x + 16', back: '(x+4)² = ?',
        explanation: '2×x×4 = 8x を忘れずに！',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc8',
        front: 'x² − 10x + 25', back: '(x−5)² = ?',
        explanation: '最後は (+25)。(−5)² = 25',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc9',
        front: 'x² − 36', back: '(x+6)(x−6) = ?',
        explanation: '和と差の積で真ん中が消える',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc10',
        front: '正しくない！', back: '(a+b)² = a² + b² は正しい？',
        explanation: '正しくは a² + 2ab + b²。2ab を忘れるのが一番多いミス！',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc11',
        front: '(a−b)² = a² − 2ab + b²\n(a+b)(a−b) = a² − b²', back: '(a−b)² と (a+b)(a−b) の違いは？',
        explanation: '混同注意！形をよく見よう',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc12',
        front: 'x² + 5x − 36', back: '(x−4)(x+9) = ?',
        explanation: '足して −4+9=5、かけて −4×9=−36',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ef-fc13',
        front: 'x² − 6x + 9', back: '(x−3)² = ?',
        explanation: '(x−3)²: 真ん中は −2×x×3 = −6x',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc14',
        front: 'x² − 49', back: '(x+7)(x−7) = ?',
        explanation: '和と差の積で中間項が消える',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc15',
        front: 'x² + 12x + 36', back: '(x+6)² = ?',
        explanation: '2×x×6 = 12x',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc16',
        front: 'x² − 2x − 35', back: '(x−7)(x+5) = ?',
        explanation: '足して −7+5=−2、かけて −7×5=−35',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc17',
        front: 'x² − 14x + 49', back: '(x−7)² = ?',
        explanation: '(x−7)²: 2×x×7 = 14x',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc18',
        front: '4x² − 25', back: '(2x+5)(2x−5) = ?',
        explanation: '(2x)² − 5² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc19',
        front: '(a+b)² は必ず a²+2ab+b²\n(a+b)(a−b) は a²−b²', back: '(a+b)² と (a+b)(a−b) の結果を混同しないコツは？',
        explanation: '形を見て区別しよう',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc20',
        front: 'x² + 2x + 1', back: '(x+1)² = ?',
        explanation: '(x+1)²: 2×x×1 = 2x',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc21',
        front: 'x² − 100', back: '(x+10)(x−10) = ?',
        explanation: '(x+10)(x−10) の和と差の積',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc22',
        front: '公式1: (x+a)(x+b)\n公式2: (a+b)²\n公式3: (a−b)²\n公式4: (a+b)(a−b)', back: '展開の4つの公式の名前は？',
        explanation: '4つの公式を覚えて使い分けよう',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ef-fc23',
        front: 'x² + 3x − 28', back: '(x−4)(x+7) = ?',
        explanation: '足して −4+7=3、かけて −4×7=−28',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ef-fc24',
        front: 'x² − 16x + 64', back: '(x−8)² = ?',
        explanation: '(x−8)²: 2×x×8 = 16x',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ef-fc25',
        front: 'x² − 9x + 20', back: '(x−4)(x−5) = ?',
        explanation: '足して −4+(−5)=−9、かけて (−4)×(−5)=20',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ef-fc26',
        front: 'x² − 81', back: '(x+9)(x−9) = ?',
        explanation: '(x+9)(x−9) の和と差の積',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ef-fc27',
        front: '2乗の公式を使えばよい', back: '(x+a)(x+b) で a = b のときはどの公式？',
        explanation: '同じ式どうしの場合 (x+a)(x+a) = (x+a)²',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ef-fc28',
        front: 'x² + 18x + 81', back: '(x+9)² = ?',
        explanation: '(x+9)²: 2×x×9 = 18x',
        difficulty: 'advanced',
      },
      { id: 'math-g3-ef-fc29', front: '$x^2 + (a+b)x + ab$', back: '$(x+a)(x+b)$ を展開する公式は？', explanation: '$x$ の係数は $a+b$、定数項は $ab$。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc30', front: '$a^2 + 2ab + b^2$', back: '$(a+b)^2$ を展開する公式は？', explanation: '和の $2$ 乗。真ん中の項は $2ab$。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc31', front: '$a^2 - 2ab + b^2$', back: '$(a-b)^2$ を展開する公式は？', explanation: '差の $2$ 乗。最後の項は $+b^2$。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc32', front: '$a^2 - b^2$', back: '$(a+b)(a-b)$ を展開する公式は？', explanation: '和と差の積。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc33', front: '$2ab$', back: '$(a+b)^2$ の展開で真ん中の項は？', explanation: '$a$ と $b$ の $2$ 倍の積。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc34', front: '$+$（$(-b)^2 = b^2$）', back: '$(a-b)^2$ の展開で最後の項 $b^2$ の符号は？', explanation: '引く数を $2$ 乗するので正。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc35', front: '$a + b$', back: '$(x+a)(x+b)$ の展開で $x$ の係数は？', explanation: '$a$ と $b$ を足す。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc36', front: '$ab$', back: '$(x+a)(x+b)$ の展開で定数項は？', explanation: '$a$ と $b$ をかける。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc37', front: '$x^2 + 7x + 12$', back: '$(x+3)(x+4)$ を展開すると？', explanation: '$3+4=7$、$3 \\times 4=12$。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc38', front: '$x^2 + 10x + 25$', back: '$(x+5)^2$ を展開すると？', explanation: '$2 \\times x \\times 5 = 10x$。', difficulty: 'basic' },
      { id: 'math-g3-ef-fc39', front: '$x^2 - 6x + 9$', back: '$(x-3)^2$ を展開すると？', explanation: '$2 \\times x \\times 3 = 6x$、符号は $-$。', difficulty: 'standard' },
      { id: 'math-g3-ef-fc40', front: '$x^2 - 16$', back: '$(x+4)(x-4)$ を展開すると？', explanation: '和と差の積: $4^2 = 16$。', difficulty: 'standard' },
      { id: 'math-g3-ef-fc41', front: '$x^2 + x - 12$', back: '$(x+4)(x-3)$ を展開すると？', explanation: '$4+(-3)=1$、$4 \\times (-3)=-12$。', difficulty: 'standard' },
      { id: 'math-g3-ef-fc42', front: '$x^2 - 3x - 10$', back: '$(x+2)(x-5)$ を展開すると？', explanation: '$2+(-5)=-3$、$2 \\times (-5)=-10$。', difficulty: 'standard' },
      { id: 'math-g3-ef-fc43', front: '$x^2 - 25$', back: '$(x+5)(x-5)$ を展開すると？', explanation: '和と差の積: $5^2 = 25$。', difficulty: 'standard' },
      { id: 'math-g3-ef-fc44', front: '$4a^2 + 12a + 9$', back: '$(2a+3)^2$ を展開すると？', explanation: '$(2a)^2 + 2 \\times 2a \\times 3 + 3^2$。', difficulty: 'advanced' },
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
            '$(x+4)^2 = x^2 + 2 \\times x \\times 4 + 4^2 = x^2 + 8x + 16$\n真ん中の項は $2 \\times 4 = 8$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-expansion-formulas-q2',
          question: '$(x + 6)(x - 6)$ を展開すると？',
          options: [
            '$x^2 - 12x - 36$',
            '$x^2 + 36$',
            '$x^2 - 12x + 36$',
            '$x^2 - 36$',
          ],
          correctIndex: 3,
          explanation:
            '$(x+6)(x-6) = x^2 - 6^2 = x^2 - 36$\n和と差の積は $a^2 - b^2$ になるよ。',
          difficulty: 'basic',
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
            '$(x-3)^2 = x^2 - 2 \\times x \\times 3 + 3^2 = x^2 - 6x + 9$\nマイナスの2乗は真ん中が−、最後が+だよ。',
          difficulty: 'basic',
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
          difficulty: 'basic',
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
            '$(a+b)^2 = a^2 + 2ab + b^2$ が正しい。\n$2ab$ の項を忘れるのが最も多い間違い！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ef-q6',
          question: '$(x + 6)^2$ を展開すると？',
          options: [
            '$x^2 + 6x + 36$',
            '$x^2 + 12x + 36$',
            '$x^2 + 36$',
            '$x^2 + 12x + 12$',
          ],
          correctIndex: 1,
          explanation:
            '$(x+6)^2 = x^2 + 2 \\times x \\times 6 + 6^2 = x^2 + 12x + 36$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ef-q7',
          question: '$(x - 7)^2$ を展開すると？',
          options: [
            '$x^2 - 14x + 49$',
            '$x^2 + 14x + 49$',
            '$x^2 - 7x + 49$',
            '$x^2 - 14x - 49$',
          ],
          correctIndex: 0,
          explanation:
            '$(x-7)^2 = x^2 - 2 \\times x \\times 7 + 7^2 = x^2 - 14x + 49$\n最後は $+49$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ef-q8',
          question: '$(x + 7)(x - 7)$ を展開すると？',
          options: [
            '$x^2 + 49$',
            '$x^2 - 14x + 49$',
            '$x^2 + 14x - 49$',
            '$x^2 - 49$',
          ],
          correctIndex: 3,
          explanation:
            '$(x+7)(x-7) = x^2 - 7^2 = x^2 - 49$\n和と差の積だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ef-q9',
          question: '$(x - 4)(x + 9)$ を展開すると？',
          options: [
            '$x^2 + 5x + 36$',
            '$x^2 + 5x - 36$',
            '$x^2 - 5x - 36$',
            '$x^2 - 13x - 36$',
          ],
          correctIndex: 1,
          explanation:
            '公式1: 足して $-4+9=5$、かけて $(-4) \\times 9 = -36$。$x^2+5x-36$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ef-q10',
          question: '$(x + 1)^2$ を展開すると？',
          options: [
            '$x^2 + 2x + 1$',
            '$x^2 + x + 1$',
            '$x^2 + 1$',
            '$x^2 + 2x + 2$',
          ],
          correctIndex: 0,
          explanation:
            '$(x+1)^2 = x^2 + 2x + 1$\n$2ab = 2 \\times x \\times 1 = 2x$ を忘れないで。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ef-q11',
          question: '$(x + 10)(x - 10)$ を展開すると？',
          options: [
            '$x^2 - 100$',
            '$x^2 + 100$',
            '$x^2 - 20x + 100$',
            '$x^2 + 20x - 100$',
          ],
          correctIndex: 0,
          explanation:
            '$(x+10)(x-10) = x^2 - 100$。和と差の積の公式だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q12',
          question: '$(x - 8)^2$ を展開すると？',
          options: [
            '$x^2 - 8x + 64$',
            '$x^2 + 16x + 64$',
            '$x^2 - 16x + 64$',
            '$x^2 - 16x - 64$',
          ],
          correctIndex: 2,
          explanation:
            '$(x-8)^2 = x^2 - 16x + 64$。真ん中 $= 2 \\times x \\times 8 = 16x$、符号はマイナス。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q13',
          question: '$(x - 4)(x - 5)$ を展開すると？',
          options: [
            '$x^2 + 9x + 20$',
            '$x^2 - 9x - 20$',
            '$x^2 - 9x + 20$',
            '$x^2 - x + 20$',
          ],
          correctIndex: 2,
          explanation:
            '足して $(-4)+(-5)=-9$、かけて $(-4) \\times (-5)=20$。$x^2-9x+20$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q14',
          question: '$(2x + 5)(2x - 5)$ を展開すると？',
          options: [
            '$4x^2 - 25$',
            '$4x^2 + 25$',
            '$2x^2 - 25$',
            '$4x^2 - 10x - 25$',
          ],
          correctIndex: 0,
          explanation:
            '$(2x)^2 - 5^2 = 4x^2 - 25$。和と差の積の公式だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q15',
          question: '$(x + 9)^2$ を展開すると？',
          options: [
            '$x^2 + 9x + 81$',
            '$x^2 + 81$',
            '$x^2 + 18x + 81$',
            '$x^2 + 18x + 9$',
          ],
          correctIndex: 2,
          explanation:
            '$(x+9)^2 = x^2 + 18x + 81$。$2 \\times x \\times 9 = 18x$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q16',
          question: '$(x + 3)(x - 8)$ を展開すると？',
          options: [
            '$x^2 - 5x - 24$',
            '$x^2 + 5x - 24$',
            '$x^2 - 5x + 24$',
            '$x^2 - 11x - 24$',
          ],
          correctIndex: 0,
          explanation:
            '足して $3+(-8)=-5$、かけて $3 \\times (-8) = -24$。$x^2-5x-24$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q17',
          question: '$(a - b)^2$ と $(a + b)(a - b)$ の違い、正しいのは？',
          options: [
            '$(a-b)^2 = a^2-b^2$、$(a+b)(a-b) = a^2-2ab+b^2$',
            '$(a-b)^2 = a^2-2ab+b^2$、$(a+b)(a-b) = a^2-b^2$',
            'どちらも $a^2-b^2$',
            'どちらも $a^2-2ab+b^2$',
          ],
          correctIndex: 1,
          explanation:
            '$(a-b)^2 = a^2-2ab+b^2$（3項）、$(a+b)(a-b) = a^2-b^2$（2項）。\n混同しないようにしよう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q18',
          question: '$(x - 2)(x + 6)$ を展開すると？',
          options: [
            '$x^2 + 4x - 12$',
            '$x^2 - 4x - 12$',
            '$x^2 + 4x + 12$',
            '$x^2 - 8x - 12$',
          ],
          correctIndex: 0,
          explanation:
            '足して $-2+6=4$、かけて $(-2) \\times 6=-12$。$x^2+4x-12$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q19',
          question: '$(x + 9)(x - 9)$ を展開すると？',
          options: [
            '$x^2 + 81$',
            '$x^2 - 81$',
            '$x^2 - 18x + 81$',
            '$x^2 + 18x - 81$',
          ],
          correctIndex: 1,
          explanation:
            '$(x+9)(x-9) = x^2 - 81$。和と差の積で $9^2 = 81$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q20',
          question: '$(x - 1)^2$ を展開すると？',
          options: [
            '$x^2 - 1$',
            '$x^2 + 2x + 1$',
            '$x^2 - 2x + 1$',
            '$x^2 - 2x - 1$',
          ],
          correctIndex: 2,
          explanation:
            '$(x-1)^2 = x^2 - 2x + 1$\n$b^2 = 1$ で最後はプラスだよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q21',
          question: '$(x + 5)(x + 8)$ を展開すると？',
          options: [
            '$x^2 + 40x + 13$',
            '$x^2 + 13x + 40$',
            '$x^2 + 13x + 13$',
            '$x^2 + 3x + 40$',
          ],
          correctIndex: 1,
          explanation:
            '足して $5+8=13$、かけて $5 \\times 8=40$。$x^2+13x+40$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q22',
          question: '$(x + 2)(x - 9)$ を展開すると？',
          options: [
            '$x^2 + 7x - 18$',
            '$x^2 - 7x + 18$',
            '$x^2 + 11x - 18$',
            '$x^2 - 7x - 18$',
          ],
          correctIndex: 3,
          explanation:
            '足して $2+(-9)=-7$、かけて $2 \\times (-9)=-18$。$x^2-7x-18$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ef-q23',
          question: '$(x - 6)^2$ を展開すると？',
          options: [
            '$x^2 - 6x + 36$',
            '$x^2 - 12x + 36$',
            '$x^2 + 12x + 36$',
            '$x^2 - 12x - 36$',
          ],
          correctIndex: 1,
          explanation:
            '$(x-6)^2 = x^2 - 12x + 36$。$2 \\times x \\times 6 = 12x$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ef-q24',
          question: '公式1 $(x+a)(x+b) = x^2+(a+b)x+ab$ で、$x$ の係数は何と等しい？',
          options: [
            '$a \\times b$',
            '$a + b$',
            '$a - b$',
            '$2ab$',
          ],
          correctIndex: 1,
          explanation:
            '$x$ の係数は $a+b$（2つの数の和）、定数項は $ab$（2つの数の積）だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ef-q25',
          question: '$(x + 3)(x + 3)$ は何の公式と同じ？',
          options: [
            '公式1',
            '公式2 $(a+b)^2$',
            '公式4 $(a+b)(a-b)$',
            'どの公式でもない',
          ],
          correctIndex: 1,
          explanation:
            '$(x+3)(x+3) = (x+3)^2$\n公式2の形と同じだよ。$x^2+6x+9$ になる。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ef-q26',
          question: '$(x - 10)(x + 10)$ を展開すると？',
          options: [
            '$x^2 - 100$',
            '$x^2 + 100$',
            '$x^2 - 20x + 100$',
            '$x^2 + 20x - 100$',
          ],
          correctIndex: 0,
          explanation:
            '$(x-10)(x+10) = x^2 - 10^2 = x^2 - 100$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ef-q27',
          question: '$(x - 3)(x + 10)$ を展開すると？',
          options: [
            '$x^2 - 7x - 30$',
            '$x^2 + 7x + 30$',
            '$x^2 + 7x - 30$',
            '$x^2 - 13x - 30$',
          ],
          correctIndex: 2,
          explanation:
            '足して $-3+10=7$、かけて $(-3) \\times 10=-30$。$x^2+7x-30$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ef-q28',
          question: '$(x + 2)^2$ を展開すると？',
          options: [
            '$x^2 + 2x + 4$',
            '$x^2 + 4$',
            '$x^2 + 4x + 4$',
            '$x^2 + 4x + 2$',
          ],
          correctIndex: 2,
          explanation:
            '$(x+2)^2 = x^2 + 2 \\times x \\times 2 + 2^2 = x^2 + 4x + 4$。',
          difficulty: 'advanced',
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
