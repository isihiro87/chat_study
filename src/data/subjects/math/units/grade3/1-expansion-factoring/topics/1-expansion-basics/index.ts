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
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-expansion-basics-q1',
          question: '3(x + 4) を展開すると？',
          options: ['3x + 4', '3x + 12', 'x + 12', '3x + 7'],
          correctIndex: 1,
          explanation:
            '3(x + 4) = 3×x + 3×4 = 3x + 12。分配法則で3をxにも4にもかけるよ。',
        },
        {
          id: 'math-g3-expansion-basics-q2',
          question: '(x + 2)(x + 3) を展開すると？',
          options: [
            'x² + 6',
            'x² + 5x + 5',
            'x² + 5x + 6',
            'x² + 6x + 5',
          ],
          correctIndex: 2,
          explanation:
            '(x+2)(x+3) = x²+3x+2x+6 = x²+5x+6。4つの積を求めて同類項をまとめよう。',
        },
        {
          id: 'math-g3-expansion-basics-q3',
          question: '−2(3x − 5) を展開すると？',
          options: [
            '−6x − 10',
            '−6x + 10',
            '6x − 10',
            '−6x − 5',
          ],
          correctIndex: 1,
          explanation:
            '−2(3x−5) = −2×3x + (−2)×(−5) = −6x + 10。マイナス×マイナスはプラスになるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-expansion-basics-ex1',
          question: '次の式を展開しよう。\n2(3x + 5)',
          steps: [
            {
              title: 'Step 1: 分配法則を使おう',
              content:
                'かっこの外の 2 を、かっこの中の 3x と 5 にそれぞれかけるよ。',
              highlight: '2 × 3x と 2 × 5',
            },
            {
              title: 'Step 2: それぞれ計算する',
              content: '2 × 3x = 6x、2 × 5 = 10 だよ。',
              highlight: '6x + 10',
            },
          ],
          answer: '6x + 10',
        },
        {
          id: 'math-g3-expansion-basics-ex2',
          question: '次の式を展開しよう。\n(x + 3)(x + 5)',
          steps: [
            {
              title: 'Step 1: 前のかっこの x を後ろ全体にかける',
              content:
                'x × (x+5) = x² + 5x。x を x にも 5 にもかけるよ。',
              highlight: 'x² + 5x',
            },
            {
              title: 'Step 2: 前のかっこの 3 を後ろ全体にかける',
              content: '3 × (x+5) = 3x + 15。3 を x にも 5 にもかけるよ。',
              highlight: '3x + 15',
            },
            {
              title: 'Step 3: 全部足して同類項をまとめる',
              content:
                'x² + 5x + 3x + 15 = x² + 8x + 15。5x と 3x をまとめたよ。',
              highlight: 'x² + 8x + 15',
            },
          ],
          answer: 'x² + 8x + 15',
        },
      ],
    },
    chatId: 'math-g3-expansion-basics',
  },
};
