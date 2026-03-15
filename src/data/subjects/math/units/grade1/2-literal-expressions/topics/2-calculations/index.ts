import type { Topic } from '../../../../../../../../data/types';

export const literalCalc: Topic = {
  id: 'math-g1-lit-calc',
  eraId: 'math-g1-literal-exp',
  name: '文字式の計算',
  subtitle: '項・係数と同類項の計算',
  icon: '🧮',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '項と係数',
          content:
            '文字式の中で、+や-で区切られた一つひとつの部分を「項」と言うよ。項の中の数の部分を「係数」と言うんだ。',
          keyPoints: [
            '$5x - 3y + 2$ の項は $5x$, $-3y$, $2$ の3つ',
            '$5x$ の係数は $5$、$-3y$ の係数は $-3$',
            '数だけの項（$2$ など）を「定数項」と呼ぶ',
          ],
        },
        {
          title: '同じ文字の項をまとめる',
          content:
            '文字の部分が同じ項（同類項）は、係数どうしを足したり引いたりしてまとめることができるよ。分配法則を使って考えるとわかりやすい！',
          keyPoints: [
            '$3x + 5x = (3 + 5)x = 8x$（分配法則の逆）',
            '$7a - 2a = (7 - 2)a = 5a$',
            '文字の部分が違う項はまとめられない（$3x + 2y$ はそのまま）',
          ],
        },
        {
          title: 'かっこのはずし方',
          content:
            'かっこの前の符号によって、はずし方が変わるよ。前が+ならそのまま、前が-なら符号を全部変えるんだ。',
          keyPoints: [
            '前が+: $+(3x - 2) = 3x - 2$（そのまま）',
            '前が-: $-(3x - 2) = -3x + 2$（符号が全部変わる）',
            'かっこを外してから同類項をまとめよう',
          ],
        },
        {
          title: '文字式と数の乗法・除法',
          content:
            '文字式に数をかけたり割ったりするときは、係数だけを計算するよ。',
          keyPoints: [
            '$(4x + 6) \\times 2 = 8x + 12$（各項に2をかける）',
            '$(6x - 9) \\div 3 = 2x - 3$（各項を3で割る）',
            '分配法則を使って、かっこの中の全部の項に計算する',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g1-lit-calc-q1',
          question: '$7x - 3x$ の計算結果は？',
          options: ['$10x$', '$4x$', '$4$', '$21x$'],
          correctIndex: 1,
          explanation:
            '同類項の係数をまとめるよ。$7x - 3x = (7 - 3)x = 4x$ だね。',
        },
        {
          id: 'math-g1-lit-calc-q2',
          question: '$(5a + 3) - (2a - 1)$ の計算結果は？',
          options: ['$3a + 2$', '$3a + 4$', '$7a + 2$', '$7a + 4$'],
          correctIndex: 1,
          explanation:
            'かっこの前が-だから符号を変えて $5a + 3 - 2a + 1 = 3a + 4$ だよ。',
        },
        {
          id: 'math-g1-lit-calc-q3',
          question: '$(6x + 4) \\div 2$ の計算結果は？',
          options: ['$6x + 2$', '$3x + 4$', '$3x + 2$', '$12x + 8$'],
          correctIndex: 2,
          explanation:
            '各項を $2$ で割るよ。$6x \\div 2 = 3x$、$4 \\div 2 = 2$。答えは $3x + 2$ だね。',
        },
        {
          id: 'math-g1-lit-calc-q4',
          question: '$4x + 3 - 2x + 5$ を計算すると？',
          options: ['$2x + 8$', '$6x + 8$', '$2x - 2$', '$6x - 2$'],
          correctIndex: 0,
          explanation:
            '$x$ の項: $4x - 2x = 2x$、定数項: $3 + 5 = 8$。答えは $2x + 8$ だよ。',
        },
        {
          id: 'math-g1-lit-calc-q5',
          question: '$3(2a - 5)$ の計算結果は？',
          options: ['$6a - 5$', '$6a - 15$', '$5a - 15$', '$2a - 15$'],
          correctIndex: 1,
          explanation:
            '分配法則で各項に $3$ をかけるよ。$3 \\times 2a = 6a$、$3 \\times (-5) = -15$。答えは $6a - 15$ だね。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-lit-calc-ex1',
          question:
            '次の計算をしよう。\n$(3x + 7) + (5x - 4)$',
          steps: [
            {
              title: 'Step 1: かっこを外す',
              content:
                'どちらもかっこの前が + なので、そのまま外すよ。\n$3x + 7 + 5x - 4$',
              highlight: '$3x + 7 + 5x - 4$',
            },
            {
              title: 'Step 2: 同類項をまとめる',
              content:
                '$x$ の項: $3x + 5x = 8x$\n定数項: $7 - 4 = 3$',
              highlight: '$8x + 3$',
            },
          ],
          answer: '$8x + 3$',
        },
        {
          id: 'math-g1-lit-calc-ex2',
          question:
            '次の計算をしよう。\n$(8a - 6) \\div 2$',
          steps: [
            {
              title: 'Step 1: 各項を2で割る',
              content:
                '分配法則で、かっこの中の各項を $2$ で割るよ。\n$8a \\div 2 = 4a$\n$-6 \\div 2 = -3$',
              highlight: '$4a - 3$',
            },
          ],
          answer: '$4a - 3$',
        },
        {
          id: 'math-g1-lit-calc-ex3',
          question:
            '次の計算をしよう。\n$2(3x + 1) - (x - 5)$',
          steps: [
            {
              title: 'Step 1: かっこを外す',
              content:
                '$2(3x + 1)$ は分配法則で $6x + 2$\n$-(x - 5)$ は符号を変えて $-x + 5$',
              highlight: '$6x + 2 - x + 5$',
            },
            {
              title: 'Step 2: 同類項をまとめる',
              content:
                '$x$ の項: $6x - x = 5x$\n定数項: $2 + 5 = 7$',
              highlight: '$5x + 7$',
            },
          ],
          answer: '$5x + 7$',
        },
      ],
    },
    chatId: 'math-g1-lit-calc',
  },
};
