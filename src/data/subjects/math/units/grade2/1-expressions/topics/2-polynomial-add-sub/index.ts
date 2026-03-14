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
            '数だけの項（定数項）も同類項どうしでまとめる',
          ],
        },
        {
          title: 'かっこの外し方（引き算で符号反転）',
          content:
            '多項式の引き算では、かっこの前が「−」のとき、かっこの中の全部の項の符号を反転させてから同類項をまとめるよ。',
          keyPoints: [
            'かっこの前が「+」→ そのまま外す（例: +(3x - 2) = 3x - 2）',
            'かっこの前が「−」→ 全部の項の符号が変わる（例: -(3x - 2) = -3x + 2）',
            '符号を変えたあとで同類項をまとめる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-poly-add-sub-q1',
          question: '(3x + 2y) + (5x - 3y) の計算結果は？',
          options: ['8x + 5y', '8x - y', '8x - 5y', '2x + 5y'],
          correctIndex: 1,
          explanation:
            'x の項: 3x + 5x = 8x、y の項: 2y + (-3y) = -y。だから答えは 8x - y だよ。',
        },
        {
          id: 'math-g2-poly-add-sub-q2',
          question: '(4a - 3b) - (2a - 5b) の計算結果は？',
          options: ['2a - 8b', '6a + 2b', '2a + 2b', '2a - 2b'],
          correctIndex: 2,
          explanation:
            'かっこを外すと 4a - 3b - 2a + 5b。同類項をまとめて 2a + 2b だよ。引き算のかっこは符号が変わるのがポイント！',
        },
        {
          id: 'math-g2-poly-add-sub-q3',
          question: '-(2x² - 4x + 1) を展開すると？',
          options: [
            '2x² - 4x + 1',
            '-2x² - 4x + 1',
            '-2x² + 4x - 1',
            '-2x² + 4x + 1',
          ],
          correctIndex: 2,
          explanation:
            'かっこの前が「−」なので全部の符号が反転！ 2x² → -2x², -4x → +4x, +1 → -1 だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-poly-add-sub-ex1',
          question:
            '次の計算をしよう。\n(2x + 5y) + (4x - 3y)',
          steps: [
            {
              title: 'Step 1: かっこを外そう',
              content:
                'かっこの前が「+」なのでそのまま外すよ。\n2x + 5y + 4x - 3y',
              highlight: '2x + 5y + 4x - 3y',
            },
            {
              title: 'Step 2: 同類項をまとめよう',
              content:
                'x の項: 2x + 4x = 6x\ny の項: 5y - 3y = 2y',
              highlight: '6x + 2y',
            },
          ],
          answer: '6x + 2y',
        },
        {
          id: 'math-g2-poly-add-sub-ex2',
          question:
            '次の計算をしよう。\n(5a - 2b) - (3a - 7b)',
          steps: [
            {
              title: 'Step 1: かっこを外そう',
              content:
                'かっこの前が「−」なので、中の符号を全部反転！\n5a - 2b - 3a + 7b',
              highlight: '5a - 2b - 3a + 7b',
            },
            {
              title: 'Step 2: 同類項をまとめよう',
              content:
                'a の項: 5a - 3a = 2a\nb の項: -2b + 7b = 5b',
              highlight: '2a + 5b',
            },
          ],
          answer: '2a + 5b',
        },
      ],
    },
    chatId: 'math-g2-poly-add-sub',
  },
};
