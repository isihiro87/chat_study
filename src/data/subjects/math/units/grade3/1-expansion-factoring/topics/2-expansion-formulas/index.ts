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
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-expansion-formulas-q1',
          question: '(x + 4)² を展開すると？',
          options: [
            'x² + 4x + 16',
            'x² + 8x + 16',
            'x² + 16',
            'x² + 8x + 8',
          ],
          correctIndex: 1,
          explanation:
            '(x+4)² = x² + 2×x×4 + 4² = x² + 8x + 16。真ん中の項は 2×4 = 8 だよ。',
        },
        {
          id: 'math-g3-expansion-formulas-q2',
          question: '(x + 6)(x − 6) を展開すると？',
          options: [
            'x² − 12x − 36',
            'x² + 36',
            'x² − 36',
            'x² − 12x + 36',
          ],
          correctIndex: 2,
          explanation:
            '(x+6)(x−6) = x² − 6² = x² − 36。和と差の積は a² − b² になるよ。',
        },
        {
          id: 'math-g3-expansion-formulas-q3',
          question: '(x − 3)² を展開すると？',
          options: [
            'x² − 6x + 9',
            'x² + 6x + 9',
            'x² − 6x − 9',
            'x² − 9',
          ],
          correctIndex: 0,
          explanation:
            '(x−3)² = x² − 2×x×3 + 3² = x² − 6x + 9。マイナスの2乗は真ん中が−、最後が+だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-expansion-formulas-ex1',
          question: '次の式を公式を使って展開しよう。\n(x + 5)²',
          steps: [
            {
              title: 'Step 1: どの公式を使う？',
              content:
                '(a+b)² の形だね。a=x、b=5 で公式 (a+b)² = a²+2ab+b² を使うよ。',
              highlight: '(a+b)² = a² + 2ab + b²',
            },
            {
              title: 'Step 2: 公式に当てはめる',
              content:
                'a²=x²、2ab=2×x×5=10x、b²=5²=25。全部足し合わせよう。',
              highlight: 'x² + 10x + 25',
            },
          ],
          answer: 'x² + 10x + 25',
        },
        {
          id: 'math-g3-expansion-formulas-ex2',
          question: '次の式を公式を使って展開しよう。\n(3x + 2)(3x − 2)',
          steps: [
            {
              title: 'Step 1: どの公式を使う？',
              content:
                '(a+b)(a−b) の形だね。a=3x、b=2 で公式 (a+b)(a−b)=a²−b² を使うよ。',
              highlight: '(a+b)(a−b) = a² − b²',
            },
            {
              title: 'Step 2: 公式に当てはめる',
              content: 'a²=(3x)²=9x²、b²=2²=4。引き算するだけ！',
              highlight: '9x² − 4',
            },
          ],
          answer: '9x² − 4',
        },
      ],
    },
    chatId: 'math-g3-expansion-formulas',
  },
};
